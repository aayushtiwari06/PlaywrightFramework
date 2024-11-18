import { test, expect } from '../fixtures/test-fixture';

test.describe('Validations Using Saved Auth State', () => {
  test.use({ storageState: 'auth/login.json' });

  test('Validate Post-Login Page Content', async ({ homePage }) => {
    await homePage.homePageUrl();
    const welcomeText = await homePage.getHomePageText();
    expect(welcomeText).toContain('Products');
  });
});