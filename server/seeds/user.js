
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {firstName: 'Somenath', lastName: 'Dey', email: 'somnath2prl@gmail.com', password: 'dhfsfgsfgbewrevrewrfdsf', createdAt: '12345678'}
      ]);
    });
};
