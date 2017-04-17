import { EasyPostPage } from './app.po';

describe('easy-post App', () => {
  let page: EasyPostPage;

  beforeEach(() => {
    page = new EasyPostPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
