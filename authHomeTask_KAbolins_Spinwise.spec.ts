import { test, expect, type Page } from '@playwright/test';
import { RegisterPage } from '../authHomeRegistration.page';

const userData = {
  username: "TestUser",
  email: "test.user@test.com",
  passw: "TestUser1"
}

test.describe('General User Pipeline', () => {
  
  test('Register a user', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await page.goto('https://auth-home-task.vercel.app/register');

    await registerPage.usernameInput.fill(userData.username);
    await registerPage.emailInput.fill(userData.email);
    await registerPage.passwordInput.fill(userData.passw);
    await registerPage.confirmPasswordInput.fill(userData.passw);
    await expect(registerPage.submitButton).toBeVisible({timeout: 5 * 1000});
    await registerPage.submitButton.click();

    const homePageHeading = page.getByText('Welcome to the Home Page');
    await expect(homePageHeading).toBeVisible({ timeout: 5 * 1000 });

    const regSuccessMsg = page.getByText('You have registered successfully!');
    await expect(regSuccessMsg).toBeVisible({ timeout: 10 * 1000 });
  })

  test('Trigger username, email, password, and password match field validation error', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await page.goto('https://auth-home-task.vercel.app/register');

    await registerPage.usernameInput.fill('u1');
    await registerPage.passwordInput.fill('PASSWORD1');
    await registerPage.confirmPasswordInput.fill('Password1');
    await expect(registerPage.submitButton).toBeVisible({timeout: 5 * 1000});
    await registerPage.submitButton.click();

    await expect(registerPage.usernameErr).toBeVisible({ timeout: 5 * 1000 });
    await expect(registerPage.emailErr).toBeVisible({ timeout: 5 * 1000 });
    await expect(registerPage.passwordErr).toBeVisible({ timeout: 5 * 1000 });
    await expect(registerPage.confirmPasswordErr).toBeVisible({ timeout: 5 * 1000 });
  })

  test('Trigger a username field error and correct it', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await page.goto('https://auth-home-task.vercel.app/register');
    await registerPage.usernameInput.fill('u2');
    await registerPage.submitButton.click();

    await expect(registerPage.usernameErr).toBeVisible({ timeout: 5 * 1000 });
    await registerPage.usernameInput.fill('testUser');
    await registerPage.submitButton.click();

    const usernameError = registerPage.usernameErr;
    expect(await usernameError.isVisible()).toBeFalsy();
  })
});
