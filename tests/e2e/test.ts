import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../../pageObject/mainPage';
test('SearchSomething', async ({ page }) => {
    const main = new PlaywrightDevPage(page);
    await main.goto();
    await main.searchFill('Getting')

});