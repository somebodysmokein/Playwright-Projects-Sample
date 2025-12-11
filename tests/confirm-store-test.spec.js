import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://web-v3-uat.7now.com/home');
  await page.getByRole('button', { name: 'Open Add Address' }).click();
  await page.getByRole('button', { name: 'Pickup' }).click();
  await page.getByRole('button', { name: 'search Find a store arrow' }).click();
  await page.getByRole('textbox', { name: 'Enter your address' }).click();
  await page.getByRole('textbox', { name: 'Search for an address' }).fill('15 W Crytal Lake St');
  await page.getByRole('button', { name: '15 West Crystal Lake Street' }).click();
  await page.getByRole('button', { name: 'Select 1602 S. Bumby Ave.,' }).click();
  await page.getByRole('button', { name: 'dismiss cookie message' }).click();
  await page.getByRole('button', { name: 'Confirm Store' }).click();
  await expect(page.getByLabel('Open Add Address').getByRole('paragraph')).toContainText('1602 S. Bumby Ave.');
});