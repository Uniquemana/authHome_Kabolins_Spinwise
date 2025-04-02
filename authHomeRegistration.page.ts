import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly usernameErr: Locator;
  readonly emailInput: Locator;
  readonly emailErr: Locator;
  readonly passwordInput: Locator;
  readonly passwordErr: Locator;
  readonly confirmPasswordInput: Locator;
  readonly confirmPasswordErr: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.usernameErr = page.getByText('Username must be 3-20 alphanumeric characters.');
    this.emailInput = page.locator('input[name="email"]');
    this.emailErr = page.getByText('Invalid email format.');
    this.passwordInput = page.locator('input[name="password"]');
    this.passwordErr = page.getByText('Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.');
    this.confirmPasswordInput = page.locator('input[name="confirmPassword"]');
    this.confirmPasswordErr = page.getByText('Passwords do not match.');
    this.submitButton = page.locator('button[type="submit"]');
  }
}
