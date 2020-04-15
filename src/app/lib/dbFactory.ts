import { provide, init, scope, ScopeEnum } from 'midway';
import { Factory } from './db/factory'

@provide()
@scope(ScopeEnum.Singleton)
export class DatabaseFactory {

  db;

  @init()
  async init() {
    this.db = Factory();
  }
}