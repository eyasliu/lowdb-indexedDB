import Store from 'indexeddb.io';

let store;

const init = name => {
  store = new Store({
    db: name,
    store: {
      name: 'lowdb',
      keyPath: 'id',
      autoIncrement: true
    },
    indexes: [{
      name: 'lowdb',
      property: 'lowdb',
      unique: true
    }]
  });

  store.init();

  return store;
}

export default {
  read(source){
    return init(source)
  },
  write(dest, obj, serialize){
    console.log(dest, obj);
    return store.add(obj)
  }
}