import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
test("Verify SignUp Page Functionality", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await functions.mobilePreviewScreen()
})
