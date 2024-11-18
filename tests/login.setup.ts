import { test, expect } from '../fixtures/test-fixture'
import loginData from '../utils/credentials.json';

test.describe('Login Tests with Multiple Data', () => {
  loginData.forEach(({ username, password }, index) => {
    test(`Test login with username: ${username} (Test ${index + 1})`, async ({ loginPage, homePage }) => {
      await loginPage.navigate();
      await loginPage.login(username, password);

      try {
        const homePageText = await homePage.getHomePageText();
        if (homePageText) {
          console.log(`Login successful for user: ${username}`);
          expect(homePageText).toContain('Products');

          // Save authentication state
          await loginPage.page.context().storageState({ path: 'auth/login.json' });
          console.log('Storage state saved to authState.json');
        } else {
          const errorMessage = await loginPage.errorMessage();
          expect(errorMessage).toContain('Username and password do not match any user in this service');
          console.log(`Login failed for user: ${username}. Error: ${errorMessage}`);
        }
      } catch (error) {
        console.error(`Unexpected error during login test for user: ${username}`, error);
        throw error;
      }
    });
  });
});

