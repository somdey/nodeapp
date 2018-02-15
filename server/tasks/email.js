const kue = require("kue");
const cluster = require('cluster');
const queue = kue.createQueue({
  redis: {
    port: 1234,
    host: '10.0.50.20',
    auth: 'password',
    db: 3, // if provided select a non-default redis db
    options: {
      // see https://github.com/mranney/node_redis#rediscreateclient
    }
  }
});

queue.create('email', {
  title: 'Welcome to the site',
  to: 'user@example.com',
  template: 'welcome-email'
}).priority('high').attempts(5).save();

// Worker.
queue.process('email', function (job, done) {
  sendEmail(job.data, done);
});

function sendEmail(address, done) {
  if (!isValidEmail(address)) {
    //done('invalid to address') is possible but discouraged
    return done(new Error('invalid to address'));
  }
  // email send stuff...
  done();
}



// ****Parallel Processing With Cluster****.
var clusterWorkerSize = require('os').cpus().length;

if (cluster.isMaster) {
  kue.app.listen(3000);
  for (var i = 0; i < clusterWorkerSize; i++) {
    cluster.fork();
  }
} else {
  queue.process('email', 10, function (job, done) {
    var pending = 5,
      total = pending;

    var interval = setInterval(function () {
      job.log('sending!');
      job.progress(total - pending, total);
      --pending || done();
      pending || clearInterval(interval);
    }, 1000);
  });
}