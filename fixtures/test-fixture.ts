import { test as baseTest, Page } from '@playwright/test';

import { LoginPage } from '../Pages/Login';
import { HomePage } from '../Pages/Home';

type Fixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
};

export const test = baseTest.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export const expect = baseTest.expect;
