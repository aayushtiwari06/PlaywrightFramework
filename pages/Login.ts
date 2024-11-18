import { Page } from '@playwright/test';

export class LoginPage {
  public page: Page;
  public username: string = "//*[@type='text']";
  public password: string = "//*[@type='password']";
  public loginButton: string = "//*[@type='submit']";
  public error: string = "//*[@data-test='error']";
  public url: string = "https://www.saucedemo.com/v1/index.html";

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.goto(this.url);
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator(this.username).fill(username);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async errorMessage(): Promise<string | null> {
    return await this.page.textContent(this.error);
  }
}