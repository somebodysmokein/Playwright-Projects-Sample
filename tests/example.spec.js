// @ts-check
import { expect } from '@playwright/test';

import fixtures from './test-fixtures.js';
const { test } = fixtures;

test.describe('Playwright Demo Tests', () => {

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test libby app', async ({ page }) => {
  await page.goto('https://libbyapp.com/interview/welcome#doYouHaveACard');
  await page.getByRole('button', { name: 'Not Yet' }).click();
  await page.getByRole('button', { name: 'Find Libraries Nearby' }).click();
  await page.getByRole('link', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search…' }).click();
  await page.getByRole('searchbox', { name: 'Search…' }).fill('06042');
  await page.getByRole('button', { name: 'Library Connection, Inc.' }).click();
  await expect(page.getByRole('button', { name: 'Library Summary and Switcher' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sign In With My Card' })).toBeVisible();
});
});