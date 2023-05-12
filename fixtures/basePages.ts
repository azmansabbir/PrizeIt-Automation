import LoginPage from "@pages/Login.page";
import MobileDesign from "@pages/mobileDesign.page";
import languagePage from "@pages/language.page";
import { test as baseTest } from "@playwright/test";
import menuPage from "@pages/menu.page";
import singupPage from "@pages/signup.page";
import globalPrizingPage from "@pages/globalPrizing.page";
import functions from "@testData/func";
import arcadePage from "@pages/arcade.page";
import triviaPage from "@pages/trivia.page";
import BaseFunctions from "@base-function/baseFunctions";
import mobilePreviewPage from "@pages/mobilePreview.page";
import triviaMobilePage from "@pages/trivia_mobile_game.page";
import testData from "@testData/testData"

const test = baseTest.extend<{
    loginPage: LoginPage;
    MainMenu: MobileDesign;
    languagePage: languagePage;
    menuPage: menuPage;
    singupPage: singupPage;
    globalPrizingPage: globalPrizingPage;
    functions: functions;
    testData: testData;
    arcadePage: arcadePage;
    triviaPage: triviaPage;
    BaseFunctions: BaseFunctions;
    mobilePreviewPage: mobilePreviewPage;
    triviaMobilePage: triviaMobilePage;


}>({
    functions: async ({ page }, use) => {
        await use(new functions(page));
    },
    testData: async ({ page }, use) => {
        await use(new testData(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    MainMenu: async ({ page }, use) => {
        await use(new MobileDesign(page));
    },

    languagePage: async ({ page }, use) => {
        await use(new languagePage(page));
    },

    menuPage: async ({ page }, use) => {
        await use(new menuPage(page));
    },

    singupPage: async ({ page }, use) => {
        await use(new singupPage(page));
    },

    globalPrizingPage: async ({ page }, use) => {
        await use(new globalPrizingPage(page));
    },
    arcadePage: async ({ page }, use) => {
        await use(new arcadePage(page))
    },
    triviaPage: async ({ page }, use) => {
        await use(new triviaPage(page));
    },
    BaseFunctions: async ({ page }, use) => {
        await use(new BaseFunctions(page));
    },
    mobilePreviewPage: async ({ page }, use) => {
        await use(new mobilePreviewPage((page)))
    },
    triviaMobilePage: async ({ page }, use) => {
        await use(new triviaMobilePage((page)))
    }


})
export default test;
export const expect = test.expect;

