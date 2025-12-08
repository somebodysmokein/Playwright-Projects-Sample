import  {test, expect } from "@playwright/test";
import fs from 'fs/promises';
import path from 'path';


test("sample test 3", async ({ page }) => {

    // Determine the Playwright project name; fall back to env or default
        const info = test.info();
        const project = info.project?.name || process.env.PW_PROJECT || 'accountB';
    
        // Load per-project data from testData/data-<project>.json (simple data approach)
        const dataPath = path.resolve(process.cwd(), 'testData', `data-${project}.json`);
        let accountData = {};
        try {
            const raw = await fs.readFile(dataPath, 'utf8');
            accountData = JSON.parse(raw);
        } catch (e) {
            console.warn(`Could not read data file ${dataPath}:`, e.message);
        }
    
        const user = accountData.user || '';
        const pwd = accountData.password || '';

        console.log(`Running test for project: ${project} with user: ${user}`);

    await page.goto("https://bstackdemo.com/");

    await expect(page).toHaveTitle("StackDemo");

    await page.click("#signin");

    const selector = '#username';
    const maxRetries = 5;
    const retryDelayMs = 1000;

    let visible = false;
    for (let i = 0; i <= maxRetries; i++) {
        if (await page.isVisible(selector)) {
            visible = true;
            console.log(`Username field visible after ${i} retry(s)`);
            
            await page.click('#username');
            await page.click('#react-select-2-option-0-4');
            
            break;
        }
        if (i === maxRetries) break;
        await page.waitForTimeout(retryDelayMs);
    }

    if (!visible) {
        throw new Error('Username field did not become visible');
    }

    await page.click('#password');
    
    await page.click('#react-select-3-option-0-0');

    await page.click('#login-btn');

    await expect(page.locator('#username')).toHaveText('locked_user');

});
