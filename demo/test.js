const async = require("async");
//process.on('unhandledRejection', (reason, p) => { console.log(reason) });

var randomResolve = function(name) {
    return new Promise(resolve => setTimeout(() => {
      //console.log(name);
      resolve([1,2,3,4,5]);
    }, 100 * Math.random()));

    // Handled Promise rejection. Solve //unhandledRejection
    /*return new Promise((resolve, reject) => {
        if (name === "Som") {
            resolve([1,2,3,4,5]);
        } else {
            reject("rejected!");
        }
    }).catch((err) => {
        console.log(err);
    })*/
  }

// Define async function all Promise.all.
let getAllAsync = async() => {
    let result = await Promise.all([ 
        randomResolve("Som"),
        randomResolve("Som"),
        randomResolve("Som"),
        randomResolve("Som"),
    ]);
    return result;
    
  }  

(async ()  => {
    let data = await getAllAsync();
    console.log(data);
    return data;
})();


let tasks = {
    one: async () => {
       return await randomResolve("Som");
    },
    two: function(callback) {
        callback(null, 'two--error');
    },
    three: async() => {
        return await randomResolve("Som");
    }
};

async.parallel(async.reflectAll(tasks), function(err, results) {
    console.log(results);
    console.log(err);
    // values
    // results.one.value = 'one'
    // results.two.error = 'two'
    // results.three.value = 'three'
});
