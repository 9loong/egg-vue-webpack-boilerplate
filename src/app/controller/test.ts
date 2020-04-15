import { provide, controller, get, inject } from 'midway';

@provide()
@controller('/test')
export class TestController {

  @inject()
  ctx;
  
  @get('/')
  async index() {
    await this.ctx.render('test.js', {
      meta: {
        title: 'Egg Vue SSR',
        keywords: 'egg,vue,vue sse,easyjs',
        description: '基于 Egg + Vue + Webpack SSR 服务端渲染和 CSR 前端渲染工程骨架项目，包括前台系统(SSR MPA)和后台管理系统(SSR SPA)'
      },
      site: {
        name: 'easyjs',
        url: 'https://easyjs.cn'
      }
    });
  }

};