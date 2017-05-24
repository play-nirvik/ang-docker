import { AngDockerPage } from './app.po';

describe('ang-docker App', () => {
  let page: AngDockerPage;

  beforeEach(() => {
    page = new AngDockerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
