import { StickyPage } from './app.po';

describe('sticky App', function() {
  let page: StickyPage;

  beforeEach(() => {
    page = new StickyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
