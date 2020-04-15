module.exports = class Model {
  id;
  title;
  summary;
  tag;
  hits;
  createTime;

  constructor() {
    this.id = void 0;
    this.title = undefined;
    this.summary = undefined;
    this.tag = undefined;
    this.hits = 0;
    this.createTime = Date.now();
  }
};