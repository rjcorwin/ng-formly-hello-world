import { FormlyDemoPage } from './app.po';

describe('formly-demo App', () => {
  let page: FormlyDemoPage;

  beforeEach(() => {
    page = new FormlyDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
