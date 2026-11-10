import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
    await this.page.getByRole('link', { name: 'Masuk' }).click();
  }

  async login(email: string, password: string) {
    await this.page.getByRole('textbox', { name: 'nama@gmail.com' }).fill(email);
    await this.page.getByRole('textbox', { name: '••••••••' }).fill(password);
    await this.page.getByRole('button', { name: 'MASUK' }).click();
  }

  async expectLoggedIn() {
    await expect(
      this.page.getByRole('link', { name: 'Cari Misi', exact: true })
    ).toBeVisible();
  }
}