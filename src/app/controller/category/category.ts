import { provide, controller, get, inject } from 'midway';

@provide()
@controller('/category')
export class CategoryController {

  @inject()
  ctx;

  @get('/')
  async index() {
    await this.ctx.render('category/category.js', { message: 'Egg Vue Server Side Render: Category' });
  }
}
