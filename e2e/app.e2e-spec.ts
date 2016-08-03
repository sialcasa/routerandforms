import { RouterAndFormsPage } from './app.po';

describe('router-and-forms App', function() {
  let page: RouterAndFormsPage;

  beforeEach(() => {
    page = new RouterAndFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
