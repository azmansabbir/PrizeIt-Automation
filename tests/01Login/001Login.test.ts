import test, { expect } from "@fixtures/basePages"
import * as data from "@testData/login.cred.json";
import BaseFunctions from "base-function/baseFunctions";
import { readFileSync } from "fs";
test("TLL001-01 | Verify login with valid credentials", async ({ loginPage, page, MainMenu, browser }) => {
        // const context = await browser.newContext();
        // // start tracing
        // await context.tracing.start(
        //     {
        //         screenshots: true, snapshots: true
        //     }
        // );
        // const page = await context.newPage();
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        //wait for login button
        await page.waitForSelector("button[type='button']");
        // verify the full login page screen
        expect(await page.screenshot({
                fullPage: true
        })).toMatchSnapshot("login-page-UI.png")
        // Login with valid credentials
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
        //click Home Avater
        await MainMenu.clickHomeAvater()
        //click Logout Btn
        await loginPage.clickLogoutBtn()
        await page.waitForTimeout(5000)
        // await context.tracing.stop({ path: 'trace0.zip' });
})
test("TLL001-02 | Verify login with invalid credentials", async ({ loginPage, MainMenu, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        // //Login with invalid credentials
        // await loginPage.loginNegative("inavlidLogin", "InvalidPassword");
        await page.fill("input[type='text']", "invalidName")
        await page.fill("input[type='password']", "invalidPassword")
        await page.click('button:has-text("Login")')
        await page.waitForTimeout(3000)
        // should Be show Invalid Credentials window
        await loginPage.shouldBeshowInvalidCredentials()
        await loginPage.clickInvalidCredantialsWindowOkBtn()
        await page.waitForTimeout(4000)
})
test("TLL001-03 | Verify login with UserName and Password", async ({ loginPage, MainMenu, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.click('button:has-text("Login")')
        await page.waitForTimeout(3000)
        // should Show User Name Is Not Empty
        await loginPage.shouldShowUserNameIsNotEmpty()
        await loginPage.clickInvalidCredantialsWindowOkBtn()
        await page.waitForTimeout(4000)
})
test("TLL001-04| Verify Cue Logo Is Visible", async ({ loginPage, MainMenu, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForTimeout(4000)
        await loginPage.verifyCueLogoIsVisible()
})
test("TLL001-05| Verify Signin Text Is Visible", async ({ loginPage, MainMenu, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForTimeout(4000)
        await loginPage.verifySigninTextIsVisible()
})
test("TLL001-06|  Verify Signin Page Title Text IsVisible", async ({ loginPage, MainMenu, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForTimeout(4000)
        await loginPage.verifySigninPageTitleTextIsVisible()
})
test("TLL001-07| Verify Id Label IsVisible", async ({ loginPage, MainMenu, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForTimeout(5000)
        await loginPage.verifyIdLabelIsVisible()
})
test("TLL001-08| Verify Secret Label Is Visible", async ({ loginPage, MainMenu, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForTimeout(5000)
        await loginPage.verifySecretLabelIsVisible()
})
test("TLL001-09| Verify Eye Button Functionality Is Working", async ({ loginPage, MainMenu, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.waitForTimeout(4000)
        await loginPage.inputSecret()
        await loginPage.clickEyeBtn()
})
test("TLL001-10| Validate After Reloading From Login Page All The Element Showing Properly", async ({ loginPage, MainMenu, page, browser }) => {
        await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
        await page.reload();
        await loginPage.inputSecret()
        await loginPage.clickEyeBtn()
})
