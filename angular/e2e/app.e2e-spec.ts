import { Todo2AppPage } from './app.po';

describe('todo2-app App', function() {
  let page: Todo2AppPage;

  beforeEach(() => {
    page = new Todo2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
