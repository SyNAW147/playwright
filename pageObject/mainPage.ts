// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';



export class PlaywrightDevPage {
    readonly page: Page;
    readonly search: Locator;
    readonly clickToSearch: Locator;
    readonly title: String;


    constructor(page: Page) {
        this.page = page;
        this.search = page.locator('css=[placeholder="Search"]');
        this.clickToSearch=page.locator('text=getting started');

    }

    async goto() {
        await this.page.goto('/');
    }

    async searchFill(data) {
        await expect(this.search).toBeVisible();
        await this.search.fill(`${data}`)
        await this.clickToSearch.click()
        expect( await this.page.title()).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
    }


}