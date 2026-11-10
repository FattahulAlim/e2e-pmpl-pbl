import { Page, expect } from '@playwright/test';

export class MisiPage {
  constructor(private page: Page) {}

  async openCariMisi() {
    await this.page.getByRole('link', { name: 'Cari Misi', exact: true }).click();
  }

  async openMisiDetail(title: string) {
    await this.page
      .getByRole('link', { name: 'Lihat Detail' })
      .first()
      .click();
    await expect(this.page.getByRole('heading', { name: title }).first()).toBeVisible();
  }

  async ambilMisi() {
    await this.page.getByRole('button', { name: 'Ambil Misi' }).click();
  }

  async expectMisiBerhasilDiambil() {
    await expect(this.page.getByText('Misi Berhasil Diambil')).toBeVisible();
    await expect(this.page.getByText('Misi sudah kamu ambil')).toBeVisible();
  }
}