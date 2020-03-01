import db from '../dbConfig';

const findAll = () => db('users');
const findById = id => db('users').where({ id }).first();
const add = user => db('users').insert(user, 'id');
const update = (id, changes) => db('users').where({ id }).update(changes);
const remove = id => db('users').where({ id }).del();
const findBy = (filter) => db('users').select('id', 'username', 'password').where(filter).first();

const User = { findAll, findById, findBy, add, update, remove };
export default User;
