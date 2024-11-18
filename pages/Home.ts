import { Page } from '@playwright/test';

export class HomePage {
  public page: Page;
  public homePageText: string = "//*[text()='Products']";
  public homePageLink: string = "https://www.saucedemo.com/v1/inventory.html";

  constructor(page: Page) {
    this.page = page;
  }

  async homePageUrl(): Promise<void> {
    await this.page.goto(this.homePageLink);
  }

  async getHomePageText(): Promise<string | null> {
    const locator = this.page.locator(this.homePageText);
    const isVisible = await locator.isVisible();

    if (isVisible) {
      return await locator.textContent();
    }
    return null;
  }
}