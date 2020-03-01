import db from '../dbConfig';

const findAll = () => db('users');
const findById = id => db('users').where({ id }).first();
const add = user => db('users').insert(user, 'id');
const update = (id, changes) => db('users').where({ id }).update(changes);
const remove = id => db('users').where({ id }).del();

const User = { findAll, findById, add, update, remove };
export default User;
