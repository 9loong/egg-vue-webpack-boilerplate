import { inject, provide, providerWrapper, init } from 'midway';
import { DatabaseFactory } from '../dbFactory';

export function createCollection(container) {
  return async (collectionName) => {
    const coll = await container.getAsync('collection');
    coll.name = collectionName;
    return coll;
  }
}

providerWrapper([{
  id: 'createCollection',
  provider: createCollection
}]);

@provide('collection')
export class Collection {

  name;

  @inject('databaseFactory')
  dbFactory: DatabaseFactory;

  db;

  @init()
  async init() {
    this.db = this.dbFactory.db;
  }

  get() {
    return this.db.get(this.name);
  }
  getByWhere(json) {
    return this.db.get(this.name).find(json);
  }
  add(json) {
    return this.db.add(this.name, json);
  }
  update(where, json) {
    return this.db.update(this.name, where, json);
  }
  delete(field) {
    return this.db.delete(this.name, field);
  }
  getPager(query) {
    return this.db.getPager(this.name, query);
  }
  getOrderAscByField(field) {
    return this.get().orderBy(field, 'asc').value();
  }
  getOrderDescByField(field) {
    return this.get().orderBy(field, 'desc').value();
  }
}
