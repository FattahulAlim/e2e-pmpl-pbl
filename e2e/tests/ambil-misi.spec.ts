import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MisiPage } from '../pages/MisiPage';

test('tester login lalu mengambil misi', async ({ page }) => {
  const login = new LoginPage(page);
  const misi = new MisiPage(page);

  await login.goto();
  await login.login(process.env.E2E_EMAIL!, process.env.E2E_PASSWORD!);
  await login.expectLoggedIn();

  await misi.openCariMisi();
  await misi.openMisiDetail('Aplikasi Uji E2E');
  await misi.ambilMisi();

  await misi.expectMisiBerhasilDiambil();
});