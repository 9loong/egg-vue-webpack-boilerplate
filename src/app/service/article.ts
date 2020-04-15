import { Collection } from '../lib/db/collection';
import { Query } from '../lib/db/query';
import { inject, provide, init } from 'midway';
import { getUniqueId } from '../lib/db/base';

@provide()
export class ArticeService {

  @inject()
  ctx;

  colllection: Collection;

  @inject()
  createCollection;

  @init()
  async init() {
    this.colllection = await this.createCollection('article');
  }

  getArtilceList(json:any = {}) {
    const { title, categoryId, status, pageIndex, pageSize } = json;
    const query = new Query();
    query.where.categoryId = categoryId;
    query.where.status = status;
    query.like.title = title;
    query.pageIndex = pageIndex;
    query.pageSize = pageSize;
    return this.colllection.getPager(query);
  }
  getArticle(id) {
    return this.colllection.getByWhere({ id });
  }
  saveArticle(json) {
    if (json.id) {
      return this.colllection.update({ id: json.id }, json);
    }
    json.id = getUniqueId();
    this.colllection.add(json);
    return json.id;
  }
  deleteArticle(id) {
    return this.colllection.delete({ id });
  }
};
