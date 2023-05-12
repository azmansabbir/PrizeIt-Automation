import { expect, Page } from "@playwright/test";
export default class LoginPage {
    private page: Page;
    // static login: any;
    constructor(page: Page) {
        this.page = page;
    }
    async login(username: string, password: string) {
        await this.enterEmail(username);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }
    async loginNegative(invalidusername: string, invalidpassword: string) {
        await this.enterEmail(invalidusername);
        await this.enterLoginPassword(invalidpassword);
        await this.clickLoginBtn();
    }
    async enterEmail(emailaddress: string) {
        await this.page.locator("input[type='text']")
            .type(emailaddress);
    }
    async enterLoginPassword(password: string) {
        await this.page.locator("input[type='password']")
            .type(password);
    }
    async clickLogoutBtn() {
        await this.page.locator("//p[text()='Logout']")
            .click()
    }
    async shouldBeshowInvalidCredentials() {
        const ele = this.page.locator("text=Invalid credentials")
        expect(ele).toContainText("Invalid credentials")
    }
    async shouldShowUserNameIsNotEmpty() {
        const ele = this.page.locator(`//p[text()='"username" is not allowed to be empty']`)
        expect(ele).toContainText(`"username" is not allowed to be empty`)
    }
    async clickInvalidCredantialsWindowOkBtn() {
        const ele = this.page.locator("text=Ok")
        expect(ele).toContainText("Ok")
        await ele.click()
    }
    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("button:has-text('Login')")
        ])
    }
    async verifyCueLogoIsVisible() {
        const ele = this.page.locator("//h1/preceding::div[@class='MuiBox-root css-uycfjs']")
        expect(ele).toBeVisible()
    }
    async verifySigninTextIsVisible() {
        const ele = this.page.locator("//h1[text()='Sign in']")
        expect(ele).toBeVisible()
    }
    async verifySigninPageTitleTextIsVisible() {
        const ele = this.page.locator("//p[text()='Sign in and start managing your Games!']")
        expect(ele).toBeVisible()
    }
    async verifyIdLabelIsVisible() {
        const ele = this.page.locator("//label[text()='Id']")
        expect(ele).toBeVisible()
    }
    async verifySecretLabelIsVisible() {
        const ele = this.page.locator("//label[text()='Secret']")
        expect(ele).toBeVisible()
    }
    async inputSecret() {
        const ele = this.page.locator("//input[@type='password']")
        await ele.fill("Demo Data")
    }
    async clickEyeBtn() {
        const ele = this.page.locator("//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')]")
        expect(ele).toBeVisible()
        await ele.click()
    }
}