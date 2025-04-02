import { test, expect, type Page } from '@playwright/test';
import { platform } from 'os';

const userData = {
  username: "TestUser",
  email: "test.user@test.com",
  passw: "TestUser1"
}

test.describe('General User Pipeline', () => {
  test('Register a user', async ({ page }) => {

    await page.goto('https://auth-home-task.vercel.app/register');

    const inputUsername = page.locator('input[name="username"]');
    await inputUsername.fill(userData.username);

    const inputEmail = page.locator('input[name="email"]');
    await inputEmail.fill(userData.email);

    const inputPassw = page.locator('input[name="password"]');
    await inputPassw.fill(userData.passw);

    const inputConfirmPassw = page.locator('input[name="confirmPassword"]');
    await inputConfirmPassw.fill(userData.passw);

    const registerBtn = page.locator('button[type="submit"]');
    await expect(registerBtn).toBeVisible({timeout: 10 * 1000});
    await registerBtn.click();

    const homePageHeading = page.getByText('Welcome to the Home Page');
    await expect(homePageHeading).toBeVisible({ timeout: 5 * 1000 });

    const regSuccessMsg = page.getByText('You have registered successfully!');
    await expect(regSuccessMsg).toBeVisible({ timeout: 10 * 1000 });
  })

  test('Trigger username, email, password, and password match field validation error', async ({ page }) => {

    await page.goto('https://auth-home-task.vercel.app/register');

    const inputUsername = page.locator('input[name="username"]');
    await inputUsername.fill('u1');

    const inputPassw = page.locator('input[name="password"]');
    await inputPassw.fill('PASSWORD1');

    const inputConfirmPassw = page.locator('input[name="confirmPassword"]');
    await inputConfirmPassw.fill('Password1');

    const registerBtn = page.locator('button[type="submit"]');
    await expect(registerBtn).toBeVisible({timeout: 10 * 1000});
    await registerBtn.click();

    const usernameErr = page.getByText('Username must be 3-20 alphanumeric characters.');
    await expect(usernameErr).toBeVisible({ timeout: 5 * 1000 });

    const emailErr = page.getByText('Invalid email format.');
    await expect(emailErr).toBeVisible({ timeout: 5 * 1000 });

    const passwErr = page.getByText('Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.');
    await expect(passwErr).toBeVisible({ timeout: 5 * 1000 });

    const passwMatchErr = page.getByText('Passwords do not match.');
    await expect(passwMatchErr).toBeVisible({ timeout: 5 * 1000 });
  })
});
