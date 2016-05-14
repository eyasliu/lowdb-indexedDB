import low from 'lowdb';
import indexeddbStorage from '../index';

describe('lowdb storage', () => {
  let db = low('testDB', {storage: indexeddbStorage})
  window.db = db;


  
  it('write datebase', () => {
    db('post').push({
      title: 'test title',
      content: 'test content'
    });
  })

  it('read database', () => {
    db('post').find({
      id: 1
    })
  })

})