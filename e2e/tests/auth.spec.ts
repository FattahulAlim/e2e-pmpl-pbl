import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Autentikasi', () => {
  test('tester berhasil login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(process.env.E2E_EMAIL!, process.env.E2E_PASSWORD!);
    await login.expectLoggedIn();
  });

  test('login gagal dengan password salah', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(process.env.E2E_EMAIL!, 'passwordsalah');
    await expect(page).toHaveURL(/login/);
  });
});