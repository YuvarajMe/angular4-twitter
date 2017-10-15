import { AngularTwitterPage } from './app.po';

describe('angular-twitter App', () => {
  let page: AngularTwitterPage;

  beforeEach(() => {
    page = new AngularTwitterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
