import { provide, controller, get, inject } from 'midway';
import { ArticeService } from '../../service/article';

@provide()
@controller('/')
export class IndexController {

  @inject()
  ctx;

  @inject()
  articeService: ArticeService;
  
  @get('/')
  async ssr() {
    const result = this.articeService.getArtilceList();
    await this.ctx.render('index/index.js', result);
  }

  @get('/csr')
  async csr() {
    const result = this.articeService.getArtilceList();
    await this.ctx.renderClient('index/index.js', result);
  }

  @get('/about')
  async about() {
    await this.ctx.render('about/about.js', {});
  }

  @get('/list')
  async list() {
    this.ctx.body = this.articeService.getArtilceList(this.ctx.query);
  }

  @get('/login')
  async login() {
    await this.ctx.renderClient('admin/login/login.js', {});
  }
};