const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  return knex('users').insert([
    { username: 'chingsley', password: bcrypt.hashSync('5anto*Dom1n90', 12) },
    { username: 'chingsley2', password: bcrypt.hashSync('5anto*Dom1n90', 12) },
  ]);
};
