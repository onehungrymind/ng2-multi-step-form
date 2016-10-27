import { Ng2MultiStepFormPage } from './app.po';

describe('ng2-multi-step-form App', function() {
  let page: Ng2MultiStepFormPage;

  beforeEach(() => {
    page = new Ng2MultiStepFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
