import { _android as android, } from "@playwright/test"
import test, { expect } from "@fixtures/basePages"
import * as data from "@testData/login.cred.json";


test("Run in Android - Chrome", async ({loginPage, MainMenu}) => {
    // Connect to the device.
    const [device] = await android.devices();
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`);
    // Take screenshot of the device.
    await device.screenshot({ path: 'device.png' });

    // Launch Chrome browser.
    await device.shell('am force-stop com.android.chrome');
    const context = await device.launchBrowser();

    // Use BrowserContext as usual.
    const page = await context.newPage();
    await page.goto('https://garrett.testingdxp.com//admin/#/sign-in');
    console.log(await page.evaluate(() => window.location.href));
    await page.screenshot({ path: 'page.png' });

    // Click input[name="email"]
    await page.click("input[type='text']");
    // Fill input[name="email"]
    await page.fill("input[type='text']", 'garrett');
    // Press Tab
    await page.press("input[type='text']", 'Tab');
    // Fill input[name="password"]
    await page.fill("input[type='password']", 'LFQIISIc');
    // Click //button[normalize-space(.)='LOGIN']
    await Promise.all([
        // page.waitForNavigation({ url: }),
        page.click("button:has-text('Login')")
        
    ]);

    await page.waitForTimeout(6000)

    // await MainMenu.HomeAvater()

    // await MainMenu.mainMenuBtn()

    // await MainMenu.clickMobileDesign()

    // await page.waitForTimeout(6000)

    await page.click("(//button[@type='button'])[3]")

    await page.click("//p[text()='Logout']")

  

    // close context and device
    await context.close();
    await device.close();
})