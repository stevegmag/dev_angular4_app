import { MyFirstAngular4AppPage } from './app.po';

describe('my-first-angular4-app App', () => {
  let page: MyFirstAngular4AppPage;

  beforeEach(() => {
    page = new MyFirstAngular4AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
