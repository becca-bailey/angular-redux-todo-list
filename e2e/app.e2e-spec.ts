import { ReduxExampleAppPage } from './app.po';

describe('redux-example-app App', () => {
  let page: ReduxExampleAppPage;

  beforeEach(() => {
    page = new ReduxExampleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
