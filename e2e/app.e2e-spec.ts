import { DomNg2Page } from './app.po';

describe('dom-ng2 App', () => {
  let page: DomNg2Page;

  beforeEach(() => {
    page = new DomNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
