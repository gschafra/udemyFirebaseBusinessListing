import { UdemyFirebaseBusinessListingPage } from './app.po';

describe('udemy-firebase-business-listing App', function() {
  let page: UdemyFirebaseBusinessListingPage;

  beforeEach(() => {
    page = new UdemyFirebaseBusinessListingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
