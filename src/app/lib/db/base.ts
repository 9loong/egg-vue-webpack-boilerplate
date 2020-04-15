const shortid = require('shortid');

export function getUniqueId() {
  return shortid.generate();
}

export class DB {
  name;
  constructor(name = 'blog.json') {
    this.name = name;
  }
  getUniqueId() {
    return getUniqueId();
  }
  get(collectionName) {
    return null;
  }
  add(collectionName, json) {
    return null;
  }
  update(collectionName, where, json) {
    return null;
  }
  delete(collectionName, field) {
    return null;
  }
  getPager(collectionName, query) {
    return null;
  }
};