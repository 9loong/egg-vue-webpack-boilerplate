import { provide, controller, get, inject } from 'midway';
import { ArticeService } from '../../service/article';

@provide()
@controller('/admin')
export class AdminController {

  @inject()
  ctx;

  @inject()
  articeService: ArticeService;

  @get('/admin(/.+)?')
  async home() {
    const url = this.ctx.url.replace(/\/admin/, '');
    const { mode } = this.ctx.query;
    if (mode === 'csr') {
      await this.ctx.renderClient('admin/home/home.js', { ctx: this.ctx, url, title: 'easy-admin' });
    } else {
      await this.ctx.render('admin/home/home.js', { ctx: this.ctx, url, title: 'easy-admin' });
    }
  }

  @get('/api/article/list')
  async list() {
    this.ctx.body = this.articeService.getArtilceList(this.ctx.request.body);
  }

  @get('/api/article/add')
  async add() {
    this.ctx.body = this.articeService.saveArticle(this.ctx.request.body);
  }

  @get('/admin/api/article/del/:id')
  async del() {
    const { id } = this.ctx.params;
    this.ctx.body = this.articeService.deleteArticle(id);
  }

  @get('/admin/api/article/:id')
  async detail() {
    const id = this.ctx.params.id;
    console.log('>>id', Number(id));
    this.ctx.body = this.articeService.getArticle(Number(id));
  }
}