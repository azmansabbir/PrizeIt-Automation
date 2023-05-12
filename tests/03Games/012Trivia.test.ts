import test, { expect } from "@fixtures/basePages";
import { devices, chromium, Page } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// import clipboard from 'clipboardy';
import triviaMobilePage from '../../pages/MobileGamesPage/trivia_mobile_game.page';
import triviaPage from "@pages/trivia.page";
const clipboard = require("clipboardy");
var url: any;
var text: string;

test("000 | Select All The Menu Ready For UI Varification", async ({ loginPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      await MainMenu.clickHomeAvater();
      await MainMenu.mainMenuBtn();
      await MainMenu.clickMobileDesign();
      //Click on the menu page
      await menuPage.clickMenuPage()
      //verify font text
      await menuPage.checkFontsText();
      //Verify upload font text
      await menuPage.checkUploadFontText();
      await menuPage.deleteUploadedFont()
      await functions.fontUploadFunction()
      await menuPage.clickToUploadFont()
      await menuPage.verifyFontUploadedSuccessfully()
      await menuPage.clickBackgroundColorInputField()
      await menuPage.inputBackgroundColor()
      await menuPage.clickColorPickerWindowSaveBtn()
      await menuPage.clickTextColorInputField()
      await menuPage.inputTextColor()
      await menuPage.clickColorPickerWindowSaveBtn()
      await menuPage.clickActiveBackgroundColorInputField()
      await menuPage.inputActiveBackgroundColor()
      await menuPage.clickColorPickerWindowSaveBtn()
      await menuPage.clickActiveTextColorInputField()
      await menuPage.inputActiveTextColor()
      await menuPage.clickColorPickerWindowSaveBtn()
      await menuPage.selectBottomAlignmentMenuBar()

      await singupPage.clickSignUpPage()
      await singupPage.clickAnonymousLoginOption()
      await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
      await singupPage.clickAdditionalInfoEmailAddressCheckbox()
      await singupPage.clickAdditionalInfoAgeCheckbox()
      await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
      await singupPage.clickAdditionalInfoZipCodeCheckbox()
      await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
      await singupPage.automaticallyAssignUserName()

      await test.step("Disable All The Additional Information", async () => {
            await singupPage.uncheckAdditionalInfoPhoneNumberCheckbox()
            await singupPage.uncheckAdditionalInfoEmailAddressCheckbox()
            await singupPage.uncheckAdditionalInfoAgeCheckbox()
            await singupPage.uncheckAdditionalInfoDateOfBirthCheckbox()
            await singupPage.uncheckAdditionalInfoZipCodeCheckbox()
            await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
      })
      await languagePage.clickLanguagePage()
      await languagePage.clickUserForceLanguageOption()
      await languagePage.clickForceLanguageInputField()
      await languagePage.selectEnglishLanguage()
})

test("012TV-002 | Trivia | Add New Config | Validate Error Massage Successfully Show When Admin Try To Add Config Without Input Any Data", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)
      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Now verify Configrations text", async () => {
            await triviaPage.verifyConfigurationsText()
      })
      await test.step("Click add configuration plus button", async () => {
            await triviaPage.clickAddNewConfigPlusBtn()
      })
      await test.step("verify New Configration Text", async () => {
            await triviaPage.verifyNewConfigrationText()
      })
      await test.step("Validate add configration button is working", async () => {
            await triviaPage.clickAddConfigrationBtn()
      })
      await test.step("verify Error Massage When Admin Click On Add Btn Without Data", async () => {
            await triviaPage.verifyErrorMassageWhenAdminClickOnAddBtnWithoutData()
      })

      await test.step("click Cancel Configration Btn", async () => {
            await triviaPage.clickCancelConfigrationBtn()
      })

})

test("012TV-003 | Trivia | Add New Config | Validate Minimum Characters Validation Functionality Works Properly", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Now validate plus button", async () => {
            await triviaPage.clickAddNewConfigPlusBtn()
      })

      await test.step("Now add new Configrations name ", async () => {
            await triviaPage.minimumCharacterForConfigName()
            await triviaPage.clickAddBtn()
            await triviaPage.minimumCharacterErroMassageValidation()
      })
})

//Maximum Input Validation Error Handling Massage Dost Not Added In Front End
test.skip("012TV-004 | Trivia | Add New Config | Validate Maximum Characters Validation Functionality Works Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)
      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Now validate plus button", async () => {
            await triviaPage.clickAddNewConfigPlusBtn()
      })
      await test.step("Now add new Configrations name ", async () => {
            await triviaPage.typeConfigurationName(await testData.getMaximumNameData())
            await triviaPage.clickAddBtn()
            await triviaPage.maximumCharacterErroMassageValidation()
      })
})

test("012TV-005 | Trivia | Add New Config | Validate add new configuration functionality works properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)
      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickAddNewConfigPlusBtn()
      })
      await test.step("Now add new Configrations name ", async () => {
            await triviaPage.typeConfigurationName(await testData.getFullName())
            await triviaPage.clickAddBtn()
      })
})


test("012TV-007 | Validate mobile link QR code is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Validate error message if round is  not created.", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.vreifymobileLinkQRCode()
            await triviaPage.clickMobileLinkPopupClose()
      })
})

test("012TV-008 | Validate mobile link button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Validate mobile link button is visible", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.clickMobileLinkPopupClose()
      })
})
test("012TV-009 | Validate mobile link button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            //await triviaPage.clickMobileLinkPopupClose()
      })
})
test("012TV-010 | Validate mobile link text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()
            await triviaPage.clickMobileLinkPopupClose()
      })
})
test("012TV-011 | Validate Open link button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      // await test.step("Now Add new configuration for validate Open link  is successfully open on mobile screen",async()=>{
      //       await triviaPage.verifyConfigurationsText()
      //       await triviaPage.clickAddNewConfigPlusBtn()
      //       await  triviaPage.typeConfigurationName(triviaPage.getRandomName())
      //       await triviaPage.clickAddConfigrationBtn()
      // })
      await test.step("click mobile link  button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage;
      await test.step("now open the game in mobile view", async () => {
            //now click on open button
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            await triviaPage.clickMobileLinkPopupClose()
            await newTab.waitForTimeout(4000)
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            await newTab.waitForTimeout(4000)
            // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
            //newTab.close()
      })
})
test("012TV-012 | Validate copy link successfully open on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click mobile link copy button", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()
            //now click mobile link copy button
            await triviaPage.clickMobileLinkCopyBtn()
            await triviaPage.clickMobileLinkPopupClose()
      })
      let URL = ''
      let triviamobilepage: triviaMobilePage;
      await test.step("now copy the contents from system clipboard(URL Here)", async () => {
            URL = clipboard.readSync();
            //console.log(URL);
      })
      await test.step("Now open copy link on mobile", async () => {
            triviamobilepage = new triviaMobilePage(page)
            await triviamobilepage.GoTo(URL)
      })
      await test.step("now open the game in mobile view", async () => {
            // //await triviamobilepage.typeemail()
            // //await triviamobilepage.typephoneno()
            // //await triviamobilepage.typeAge()
            // //await triviamobilepage.selectbirthdate()
            // //await triviamobilepage.typezip()
            // //await triviamobilepage.clicksubmit()
      })
})
test("012TV-013 | Validate save QR code is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()
      })
      await test.step("Now validate save QR code button is working", async () => {
            await triviaPage.validateSaveQRCode()
            await page.waitForTimeout(1000)
            await triviaPage.clickMobileLinkPopupClose()
      })
})
test("012TV-014 | Validate Copy QR code is working.", async ({ loginPage, functions, browser, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            // await triviaPage.verifyMobileLinkText()
      })
      await test.step("Now validate Copy QR code is working", async () => {
            await triviaPage.clickCopyQRCodeBtn()
            const newtab = browser.contexts()[0].newPage();
            (await newtab).goto('https://qr-code-scanner.net/')
            await (await newtab).locator('//a[@title="Scan QR code from paste"]').click()
            await (await newtab).waitForTimeout(2000)
            await (await newtab).locator('//button[text()="Paste"]').click()
            await (await newtab).waitForTimeout(3000)
            // await (await newtab).locator("//div[@id='qr-content']//a[1]").click()
            // await (await newtab).waitForTimeout(2000)
      })
})
test("012TV-015 | Validate error message successfully show if round is  not created.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)
      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Now click start button", async () => {
            await triviaPage.clickStartBtn()
      })
      await test.step("Validate error message if round is  not created.", async () => {
            await triviaPage.errorMessageIfRoundIsNotCreated()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-006 | Trivia | Control Panel | Add Round | Validate try add round without any round name", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)
      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate add Round name is working", async () => {
            await triviaPage.clickAddRoundBtn()
            await triviaPage.clickAddBtn()
            await triviaPage.verifyErrorMassagForInputFieldValidation()

      })
})

test("012TV-016 | Validate add Round Functionality Works Properly", async ({ loginPage, functions, testData, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)
      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate add Round name is working", async () => {
            await triviaPage.clickAddRoundBtn()
            await triviaPage.inputAddRoundName(testData.getRandomNameForRoundName())
            await triviaPage.clickAddBtn()
      })
})
test("012TV-017 | Validate  Edit Round  is working in trivia.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate Edit Round is working", async () => {
            await triviaPage.clickRoundNameThreeDot()
            await triviaPage.ClickeditRoundName()
            await triviaPage.EditRoundName()
            await triviaPage.InputEditRoundName(triviaPage.getRandomNameForRoundName())
            await triviaPage.clickSaveBtn()
      })
})
test("012TV-018 | Validate  EDIT Round and Round Name text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate EDIT ROUND and Round Name  text is visible", async () => {
            await triviaPage.clickRoundNameThreeDot()
            await triviaPage.ClickeditRoundName()
            await triviaPage.verifyEDITROUNDText()
            await triviaPage.verifyRoundNameText()
            await triviaPage.clickEditRoundNameCancelBtn()
      })
})
test("012TV-020 | Validate round changing checkbox is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate round changing checkbox is visible.", async () => {
            await triviaPage.ClickRoundChangingCheckbox()
            await page.waitForTimeout(2000)
      })
})
test("012TV-021 | Validate Output  button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("validate output button is visible", async () => {
            await triviaPage.clickOutputBtn()
            await triviaPage.verifyOutputScreenLinkText()
            await triviaPage.clickOutputScreenLinkCloseBtn()
            await page.waitForTimeout(2000)
      })
})
test("012TV-022 | Validate mobile link output button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("click ouput button", async () => {
            await triviaPage.clickOutputBtn()
            await triviaPage.verifyOutputScreenLinkText()
            //await triviaPage.clickOutputScreenLinkOpenBtn()
            await page.waitForTimeout(2000)
      })
      let newTab = null
      let triviamobilepage: triviaMobilePage
      await test.step("Validate output screen link button is working", async () => {
            //
            newTab = await triviaPage.clickOutputScreenLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            await newTab.waitForTimeout(2000)
      })
})
test("012TV-023 | Validate mobile link copy button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("click ouput button", async () => {
            await triviaPage.clickOutputBtn()
            await triviaPage.verifyOutputScreenLinkText()
            //await triviaPage.clickOutputScreenLinkOpenBtn()
            await page.waitForTimeout(2000)
      })
      await test.step("Now click Output screen link copy bytton", async () => {
            await triviaPage.clickOutputScreenLinkCopyBtn()
      })
      let URL = ''
      await test.step("now copy the contents from system clipboard(URL Here)", async () => {
            URL = clipboard.readSync();
            //console.log(URL);
      })
      await test.step('now open new page with copied URL', async () => {
            const triviamobilepage = new triviaMobilePage(page)
            await triviamobilepage.GoToforOutpurScreenLink(URL)
            await page.waitForTimeout(2000)
      })
})
test("012TV-024 | Validate Automatic Game Mode Functionality Works Properly", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            // await triviaPage.verifyConfigurationsText()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("validate set-up tab", async () => {
            await triviaPage.clickGameModeAutomatic()
            await triviaPage.verifySetUpText()
            await triviaPage.verifyCountDownStageText()
            await triviaPage.verifyQuestionText()
            await triviaPage.verifyAnswerText()
            await triviaPage.verifyLeaderboardText()
      })
})

test("012TV-025 | Trivia | Control Panel | validate Game Mode Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)
      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("validate Game Mode Tab", async () => {
            await triviaPage.verifyGameModeText()
            await triviaPage.verifyManualText()
            await triviaPage.verifyAutomaticText()
            await triviaPage.verifyOnDemandText()
      })
})
test("012TV-026 | validate Automatic Timers tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("validate Automatic Timers Tab is visible", async () => {
            await triviaPage.verifyAutomaticTimersText()
            await triviaPage.verifyinputCountdownTimersfield()
            //await triviaPage.verifyLeaderboardDurationText()
            await triviaPage.verifyinputLeaderboardDurationfield()
      })
})
test("012TV-027 |validate Points Allocation tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("validate Points Allocation tab is visible", async () => {
            await triviaPage.verifyPointsAllocationText()
            await triviaPage.verifyinputPointsfield()
            await triviaPage.verifySelectPointsFirstValu()
            await triviaPage.verifySelectPointsSecondValu()
            await triviaPage.verifySelectPointsThirdValu()
            await triviaPage.verifySelectPointsFourthValu()
      })
})
test("012TV-028 |validate CountdownText all Radio button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("validate CountdownText all Radio button is visible", async () => {
            await triviaPage.verifyCountdowntextText()
            await triviaPage.verifyCountdowntextRadio_Time()
            await triviaPage.verifyCountdowntextRadio_Points()
      })
})
test("012TV-029 | validate CountdownType all Radio button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("validate CountdownType all Radio button is visible", async () => {
            await triviaPage.verifyCountdownTypeText()
            await triviaPage.verifyCountdownTypeRadio_Circular()
            await triviaPage.verifyCountdownTypeRadio_Lenear()
      })
})
test("012TV-030 | validate Question Sequence tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("validate Question Sequence tab is visible", async () => {
            await triviaPage.verifyQuestionSequenceText()
            await triviaPage.verifyQuestionSequenceRandomBtn()

            await triviaPage.verifyQuestionsequenceSequenceBtn()
      })
})
test("012TV-031 | Validate Leaderboard tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("validate Question Sequence tab is visible", async () => {
            await triviaPage.clcikOnDemandGameMode()
            await triviaPage.verifyLeaderboardRoundBtn()
      })
})
test("012TV-032 | validate Error message if countdown stage more than 99 second inputs in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate error message in countdown stage", async () => {
            //await triviaPage.verifyQuestionSequenceText()
            await triviaPage.inputCountDownStage()
            await page.waitForTimeout(2000)
            await triviaPage.verifyErrorMessageInCountdownStage()
      })
})
test("012TV-033 | validate Error message if Leader board  inputs more than 99 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate error message in leader board", async () => {
            //await triviaPage.verifyQuestionSequenceText()
            await triviaPage.ClickRoundChangingCheckbox()
            await triviaPage.inputLeaderBoardDuration()
            await page.waitForTimeout(2000)
            await triviaPage.verifyErrorMessageInLeaderboardDuration()
            await triviaPage.clickOkBtn()
            await triviaPage.ClickRoundChangingCheckbox()
      })
})
test("012TV-034 | validate Error message if Question No stage  inputs more than 99 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate error message in question no stage", async () => {
            //await triviaPage.verifyQuestionSequenceText()
            await triviaPage.inputQuestionNoStage()
            await page.waitForTimeout(2000)
            await triviaPage.verifyErrorMessageInQuestionNoStage()
      })
})
test("012TV-035 | validate Error message if Question Reveal inputs more than 99 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate error message in question reveal", async () => {
            //await triviaPage.verifyQuestionSequenceText()
            await triviaPage.inputQuestionReveal()
            await page.waitForTimeout(2000)
            await triviaPage.verifyErrorMessageInQuestionReveal()
      })
})
test("012TV-036 | validate Error message if points allocation points field inputs more than 9999 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate error message in points Allocation poins field", async () => {
            //await triviaPage.verifyQuestionSequenceText()
            await triviaPage.inputPointAllocationPointsfield()
            await page.waitForTimeout(2000)
            await triviaPage.verifyErrorMessageInPointsAllocation()
      })
})
test("012TV-037 | validate Error message if points allocation seconds field inputs more than 9999 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate error message in points Allocation seconds field", async () => {
            //await triviaPage.verifyQuestionSequenceText()
            await triviaPage.inputPointAllocationSecondfield()
            await page.waitForTimeout(2000)
            await triviaPage.verifyErrorMessageInPointsAllocation()
      })
})
test("012TV-038 | Validate  export error message in add round section if question didn't add.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate Export error message if question didn't add", async () => {
            await triviaPage.clickExportBtn()
            await triviaPage.clickConfirmExportBtn()
            await triviaPage.verifyFailedExportMessage()
            await triviaPage.verifyErrorMessageExportBtnIfQuestionisnotAdd()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-039 | Validate  Add question button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click control panel section", async () => {
            await page.waitForTimeout(1000)
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Validate Add question button is working", async () => {
            await triviaPage.clickAddQuestionBtn()
      })
})
test("012TV-040 | Validate add question and Custom Question type text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Verify add question and Custom Question type text is visible.", async () => {
            await triviaPage.clickAddQuestionBtn()
            await triviaPage.verifyAddQuestionText()
            await triviaPage.verifyCustomQuestionTypetext()
            await triviaPage.clickAddQuestionClosBtn()
      })
})
test("012TV-041 | Validate Question type Radio button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click control panel section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Verify add question and Custom Question type text is visible.", async () => {
            await triviaPage.clickAddQuestionBtn()
            await triviaPage.clickFreeResponseRadioBtn()
            await triviaPage.clickMultipleChoiceRadioBtn()
            await triviaPage.clickAddQuestionClosBtn()
      })
})
test("012TV-042 | Validate Add media button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Verify add question and Custom Question type text is visible.", async () => {
            await triviaPage.clickAddMediaBtn()
            await triviaPage.verifyAddMediatext()
      })
})
test("012TV-043 | Validate mobile media image and video radio button is visible in add media section.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("click mobile media button.", async () => {
            await triviaPage.clickAddMediaBtn()
            await triviaPage.verifyAddMediatext()
      })
      await test.step("Verify mobile media image and video radio button is visible", async () => {
            await triviaPage.verifyMobileMediatext()
            await triviaPage.clickMobileMediaImageRadioBtn()
            await triviaPage.clickMobileMediaVideoRadioBtn()
      })
})
test("012TV-044 | Validate Mainboard media image and video radio button is visible in add media section.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("click mobile media button.", async () => {
            await triviaPage.clickAddMediaBtn()
            await triviaPage.verifyAddMediatext()
      })
      await test.step("Verify add question and Custom Question type text is visible.", async () => {
            await triviaPage.verifyMainboardMediatext()
            await triviaPage.clickMainboardmediaVideoRadioBtn()
            await triviaPage.clickMainboardmediaVideoRadioBtn()
      })
})
test("012TV-045 | Validate free question type successfully add.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click control panel section", async () => {
            await page.waitForTimeout(1000)
            await triviaPage.clickControlPanelSection()
      })
      await test.step("click add question button", async () => {
            await page.waitForTimeout(1000)
            await triviaPage.clickAddQuestionBtn()
      })
      await test.step("click free response radio button", async () => {
            await triviaPage.clickFreeResponseRadioBtn()
      })
      await test.step("now type question", async () => {
            await triviaPage.inputAddQuestion()
      })
      await test.step("now type correct answer for add question", async () => {
            await triviaPage.clickAddCorrectAnswerBtn()
            await triviaPage.inputCorrectAnswer()
            await triviaPage.clikCorrectAnswerSaveBtn()
            const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
            if (ele != null) {
                  ele.click()
                  await triviaPage.clikCorrectAnswerSaveBtn()
            }
      })
      await test.step("now type First acctable answer for add question", async () => {
            await triviaPage.clickFirstAddAcctableAnswerBtn()
            await triviaPage.inputFirstAcctableAnswer()
            await triviaPage.clikAcctableAnswerSaveBtn()
            const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
            if (ele != null) {
                  ele.click()
                  await triviaPage.clikAcctableAnswerSaveBtn()
            }
      })
      await test.step("now type Second acctable answer for add question", async () => {
            await triviaPage.clickSecondAddAcctableAnswerBtn()
            await triviaPage.inputSecondAcctableAnswer()
            await triviaPage.clikAcctableAnswerSaveBtn()
            const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
            if (ele != null) {
                  ele.click()
                  await page.waitForTimeout(1000)
                  await triviaPage.clikAcctableAnswerSaveBtn()
            }
      })
      await test.step("now click add question save button", async () => {
            await page.waitForTimeout(1000)
            await triviaPage.ClickMobileMediaImageUploadBtn()
            await triviaPage.GametitleImageuploader()
            await triviaPage.ClickMainboardMediaImageUploadBtn()
            await triviaPage.GametitleImageuploader()
            await triviaPage.clickAddQuestionSaveBtn()
      })
})
test("012TV-046 | Validate multiple choice question type successfully add.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click control panel section", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("click add question button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickAddQuestionBtn()
      })
      await test.step("click multiple choise  radio button", async () => {
            await triviaPage.clickMultipleChoiceRadioBtn()
      })
      await test.step("Now type question", async () => {
            await triviaPage.inputAddQuestion()
      })
      await test.step("Now type first answer for multiple choice question", async () => {
            await triviaPage.clickAddAnswerBtn()
            await triviaPage.inputFirstMultipleQuestionAnswer()
            await triviaPage.clickAnswerSaveBtn()
            const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
            if (ele != null) {
                  ele.click()
                  await triviaPage.clickAnswerSaveBtn()
            }
      })
      await test.step("Now type Second answer for multiple choice question", async () => {
            await triviaPage.clickAddAnswerBtn()
            await triviaPage.inputSecondMultipleQuestionAnswer()
            await triviaPage.clickAnswerSaveBtn()
            const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
            if (ele != null) {
                  ele.click()
                  await page.waitForTimeout(2000)
                  await triviaPage.clickAnswerSaveBtn()
            }
      })
      await test.step("now click add question save button", async () => {
            await page.waitForTimeout(1000)
            await triviaPage.ClickMobileMediaImageUploadBtn()
            await triviaPage.GametitleImageuploader()
            await triviaPage.ClickMainboardMediaImageUploadBtn()
            await triviaPage.GametitleImageuploader()
            await triviaPage.clickAddQuestionSaveBtn()
      })
})
test("012TV-047 | Validate Start/Live button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click Control panel section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickControlPanelSection()
      })
      await test.step("validate start button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickstart()
            await triviaPage.clickOkBtn()
      })
      await test.step("Validate Live button", async () => {
            await page.waitForTimeout(1000)
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-048 | Validate export button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)
      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click Control panel", async () => {
            await triviaPage.StopLiveBtn()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Click add question button", async () => {
            await triviaPage.clickExportBtn()
            await triviaPage.validateExportBtn()
            await page.waitForTimeout(1000)
      })
})
test("012TV-049 | Validate Export  popup close button is working in control panel section.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click Control panel", async () => {
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Click add question button", async () => {
            await triviaPage.clickExportBtn()
            await triviaPage.clickExportPopupCloseBtn()
      })
})
test("012TV-050 | Validate preview toggle is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Validate preview toggle is working.", async () => {
            await triviaPage.clickGameSettingsSection()
            await triviaPage.clickPreviewToggleBtn()

      })
})
test.skip("012TV-051 | Validate game mode toggle is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Validate preview toggle is working.", async () => {
            await triviaPage.clickgamedesignSection()
      })
})
test("012TV-052 | Validate Output Screen Link text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.StopLiveBtn()
            await triviaPage.clickTriviaSection()
      })
      await test.step("Validate preview toggle is working.", async () => {
            await triviaPage.clickgamedesignSection()
      })
})
test("012TV-055 | Validate input RGB Background color is working in trivia.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(1000)
            await triviaPage.StopLiveBtn()
      })
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickgamedesignSection()
            //await triviaPage.clickGameDesign()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input background color is working", async () => {
            await triviaPage.verifyMobileBackgroundTextInColorSection()
            await triviaPage.clickBackgroundColorBtn()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test.skip("012TV-056 | Validate  Background color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      // await test.step("Clik start button", async () => {
      //      await triviaPage.clickStartBtn()
      //      await triviaPage.clickOkBtn()
      // })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify background color", async () => {
            //await page.waitForTimeout(5000)
            //await triviamobilepage.verifyBackgroundcolor()
            await triviamobilepage.verifyMobileBackgroundColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-057 | Validate input RGB General/Button text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click game design", async () => {
            await page.waitForTimeout(3000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input background color is working", async () => {
            await triviaPage.verifyGeneralOrButtonText()
            await triviaPage.clickGeneralButtonTextColorBtn()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})

//have an issue
test.skip("012TV-058 | Validate  General/Button text successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await page.waitForNavigation()
            //await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
      })
      await test.step("Now verify General/Button text color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyGeneralButtonTextcolor()
            await page.waitForTimeout(2000)
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})

test("012TV-059 | Validate input RGB Button Fill color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click game design section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input button fill color is working", async () => {
            await triviaPage.verifyButtonFillText()
            await triviaPage.clickButtonFillColorBtn()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.verifyColorPickerText()
            await triviaPage.verifyColorPickerText()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
//have an issue
test("012TV-060 | Validate Button  Fill color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Button Fill color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyButtonFillcolor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-061 | Validate input RGB Question text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click game design in trivia", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input background color is working", async () => {
            await triviaPage.verifyQuestionText()
            await triviaPage.clickQuestionTextBtn()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.inputRGBHexColor()
            await triviaPage.verifyColorPickerText()
            await triviaPage.verifyColorPickerText()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test("012TV-062 | Validate Question text color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
            await page.waitForTimeout(1000)

      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
      })
      await test.step("Now verify General/Button text color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            // await triviamobilepage.verifyQuestionTextColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-063 | Validate input RGB Answer text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input Answer text color is working", async () => {
            await triviaPage.clickAnswerTextBtn()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.inputRGBHexColor()
            await triviaPage.verifyColorPickerText()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test("012TV-064 | Validate RGB Answer text color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify General/Button text color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyAnswerTextColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-065 | Validate input RGB Question background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click game design section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input background color is working", async () => {
            await triviaPage.verifyQuestionBackgroundText()
            await triviaPage.clickQuestionBackgroundBtn()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})

//have an issue
test.skip("012TV-066 | Validate Question Background color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Question background color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyQuestionBackgroundColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-067 | Validate input RGB answer background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click game design section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input answer background color is working", async () => {
            await triviaPage.verifyAnswerBackgroundText()
            await triviaPage.clickAnswerBackgroundBtn()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.inputColorCode()
            await triviaPage.clickColorPickerSaveBtn()
      })
})

//have an issue
test.skip("012TV-068 | Validate Answer Background color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
            //await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify General/Button text color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyAnswerBackgroundColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(3000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-069 | Validate input RGB question frame color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input question frame color is working", async () => {
            await triviaPage.verifyQuestionFrameText()
            await triviaPage.clickQuestionFrameBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.inputRGBHexColor()
            await triviaPage.clickColorPickerSaveBtn()
      })
})

//have an issue
test.skip("012TV-070 | Validate Question frame color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Question frame color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyQuestionFrameColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})

test("012TV-071 | Validate input RGB answer frame color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input answer frame color is working", async () => {
            await triviaPage.verifyAnswerFrameText()
            await triviaPage.clickAnswerFrameBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.inputRGBHexColor()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test.skip("012TV-072 | Validate Answer frame color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Answer frame color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyAnswerFrameColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-0073-0 | Validate input RGB selected answer color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
      })
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input selected answer color is working", async () => {
            await triviaPage.verifySelectedAnswerText()
            await triviaPage.clickSelectedAnswerColorBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.inputRGBHexColor()
            await triviaPage.clickColorPickerSaveBtn()
      })
})

//have an issue
test("012TV-073 | Validate Selected answer color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(1000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickControlPanelSection()
      })

      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            await page.waitForTimeout(9000)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickMobileLinkPopupClose()
            await page.waitForTimeout(1000)
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
      })
      await test.step("Now verify Answer frame color on mobile screen", async () => {

            await triviamobilepage.clickMultipleChoise1()
            await page.waitForTimeout(2000)
            // await triviamobilepage.verifySelectedAnswerColor()
      })
      await test.step("Now click game live button", async () => {

            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-074 | Validate input RGB correct answer color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(1000)
            await triviaPage.StopLiveBtn()
      })
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input correct answer color is working", async () => {
            await triviaPage.verifyCorrectAnswerText()
            await triviaPage.clickCorrectAnswerColorBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})

//have an issue
test.skip("012TV-075 | Validate Correct Answer color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(1000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify General/Button text color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyCorrectAnswerColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-076 | Validate input RGB incorrect answer color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input incorrect answer color is working", async () => {
            await triviaPage.verifyIncorrectAnswerText()
            await triviaPage.clickIncorrectAnswerColorBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})

//have an issue
test.skip("012TV-077 | Validate incorrect Answer color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify General/Button text color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyIncorrectAnswerColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-078 | Validate input RGB Timer Animation fill color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click game design", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input Timer Animation color is working", async () => {
            await triviaPage.verifyTimerAnnimationFilltext()
            await triviaPage.clickTimerAnnimationColorBtn()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test.skip("012TV-079 | Validate Timer Annimation fill  color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(2000)
            await triviaPage.clickOkBtn()
            await triviaPage.clickMOveToNextBtn()
            //await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify General/Button text color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyCountdownAnnimationFillColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-080 | Validate input RGB Tile Background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open game design section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input RGB Tile background color is working", async () => {
            await triviaPage.verifyTileBackgroundText()
            await triviaPage.clickTileBackgroundBtn()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})

//have an issue
test.skip("012TV-081 | Validate Tile Background  color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Tile Background color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyTileBackgroundFillColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-082 | Validate input RGB Tile Frame color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input RGB Tile Frame color is working", async () => {
            await triviaPage.verifyTileFrameText()
            await triviaPage.clickTileFrameBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test("012TV-083 | Validate Tile Frame  color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Tile Frame color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyTileFrameColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-084 | Validate input RGB Leaderboard text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
      })
      await test.step("Click game design", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input leaderboard text color is working", async () => {
            await triviaPage.verifyLeaderboardtextTextInColorSection()
            await triviaPage.clickLeaderboardTextColorBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.inputRGBHexColor()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test("012TV-085 | Validate Leaderboard text color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
            await triviaPage.StopLiveBtn()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Leaderboard text color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyLeaderboardtextColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-086 | Validate input RGB Leaderboard background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click game design", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.verifygamedesignText()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate input Leaderboard background color is working", async () => {
            await triviaPage.verifyLeaderboardBackgroundtextTextIncolorSection()
            await triviaPage.clickLeaderboardBackgroundColorBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.inputRGBHexColor()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test("012TV-087 | Validate Leaderboard background color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Leaderboard text color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyLeaderboardBackgroundColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-088 | Validate input RGB User's Top 10 Rank color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.verifygamedesignText()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate User's Top 10 Rank color is working", async () => {
            await triviaPage.clickUserTopTenRankBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.inputRGBHexColor()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test.skip("012TV-089 | Validate User's Top 10 Rank color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Leaderboard text color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyTopTenRankColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})


test.skip("012TV-090 | Validate input RGB Leaderboard Frame color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
      })
      await test.step("Open upload fonts section", async () => {
            await triviaPage.verifygamedesignText()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate Leaderboard Frame color is working", async () => {
            await triviaPage.verifyLeaderboardFrametext()
            await triviaPage.clickLeaderboardFrameBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test.skip("012TV-091 | Validate Leaderboard frame color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(1000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickControlPanelSection()
            await page.waitForTimeout(1000)
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Leaderboard frame  color on mobile screen", async () => {
            await page.waitForTimeout(7000)
            await triviamobilepage.verifyLeaderboardFrameColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test.skip("012TV-092 | Validate input RGB Leaderboard Accent color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(1000)
            await triviaPage.StopLiveBtn()
      })
      await test.step("Click game design", async () => {
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate Leaderboard Accent color is working", async () => {
            await triviaPage.verifyLeaderboardAccentText()
            await triviaPage.clickLeaderboardAccentBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test.skip("012TV-093 | Validate Leaderboard Accent color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(1000)
            await triviaPage.StopLiveBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickControlPanelSection()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Leaderboard Accent  color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyLeaderboardAccentColor()
      })
      await test.step("Now click game live button", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-094 | Validate input RGB Point-Bubble Fill color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            //await page.waitForTimeout(2000)
            await triviaPage.verifygamedesignText()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate Leaderboard Accent color is working", async () => {
            await triviaPage.verifyPointBubbleFillText()
            await triviaPage.clickPointBubbleFillBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test("012TV-095 | Validate input RGB Point-Bubble frame color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            //await page.waitForTimeout(2000)
            await triviaPage.verifygamedesignText()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate Point-Bubble Frame  color is working", async () => {
            await triviaPage.verifyPointBubbleFrametext()
            await triviaPage.clickPointBubbleFrameBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test("012TV-096 | Validate input RGB Point-Bubble Text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            //await page.waitForTimeout(2000)
            await triviaPage.verifygamedesignText()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section", async () => {
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Now validate Point-Bubble Text color is working", async () => {
            await triviaPage.verifyPointBubbletext()
            await triviaPage.clickPointBubbleTextBtn()
            await triviaPage.clickRGB_Solid_Horizontal_Vertical_Diagonal_Radial_Dropdown()
            await triviaPage.clickRGB_SolidColor()
            await triviaPage.inputFirstRGB()
            await triviaPage.inputSecondRGB()
            await triviaPage.inputThirdRGB()
            await triviaPage.inputFourthRGB()
            await triviaPage.clickColorPickerSaveBtn()
      })
})
test("012TV-0111 | Validate  upload fonts is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Click On The Game design", async () => {
            await page.waitForTimeout(1000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      await test.step("Open upload fonts section", async () => {
            await triviaPage.clickfontsSection()
            await triviaPage.verifyFontsText()
      })
      await test.step("Validate upload fonts is working", async () => {
            await functions.fontUploadFunction()
            await triviaPage.clickUploadFontBtn()
            await page.waitForTimeout(4000)
            await triviaPage.selectUploadedFont()
      })
})

// here is an issue
test.skip("012TV-0112 | Validate  upload fonts successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickgamedesignSection()
            await triviaPage.clickControlPanelSection()
            await triviaPage.inputCountDownTime()
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(1000)
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify fornt", async () => {
            // await triviaPage.clickCloseBtn()
            await page.waitForTimeout(2000)
            await triviamobilepage.verifyFontAppliedSuccessfullyInMobileScreen()
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test("012TV-0113 | Validate Admin side upload game title logo is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("click game design section", async () => {
            await page.waitForTimeout(3000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open upload and dialogs section", async () => {
            await triviaPage.openUploadAndDialogsSection()
      })
      await test.step("Now delete trivia all uploads image and logos if already uploaded", async () => {
            for (var i = 1; i <= 5; i++) {
                  await triviaPage.deleteImageandLogos()
            }
      })
      await test.step("Now validate game title logo upload", async () => {
            await functions.portraitBackgroundImageUploadHelper()
            await triviaPage.clickGametitleupload()
            await functions.fileUploadCropper()
            await triviaPage.verifyGameTitleText()
            await triviaPage.verifysuccessfullyuploadGameTitleLogo()
            await page.waitForTimeout(3000)
      })
})

//here is an issue
test.skip("012TV-0114 | Validate  upload Game title logo successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(1000)
            await triviaPage.clickgamedesignSection()
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
      })
      await test.step("Now verify game title logo", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyGameTitleLogoAppliedSuccessfullyInMobileScreen()
      })
})
test("012TV-0115 | Validate  Admin side upload Team  logo image is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open upload and dialogs section", async () => {
            await triviaPage.openUploadAndDialogsSection()
      })
      await test.step("Now delete trivia all uploads image and logos if already uploaded", async () => {
            for (var i = 1; i <= 5; i++) {
                  await triviaPage.deleteImageandLogos()
            }
      })
      await test.step("Now validate game title logo upload", async () => {
            await triviaPage.clickTeamLogoUpload()
            await functions.logoImageUploadFunction()
            //await triviaPage.click
            await functions.fileUploadCropper()
            await triviaPage.verifyGameTitleText()
            await triviaPage.verifysuccessfullyuploadTeamLogoBtn()
            await page.waitForTimeout(3000)
      })
})

//here is an issue
test.skip("012TV-0116 | Validate  upload Team  logo successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(1000)
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify fornt", async () => {
            await page.waitForTimeout(5000)
            //await triviamobilepage.clickHomeBtn()
            await triviamobilepage.verifyTeamLogoAppliedSuccessfullyInMobileScreen()
      })
})
test("012TV-0117 | Validate  Admin side upload Sponsor  logo image is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await triviaPage.clickgamedesignSection()
            await triviaPage.openUploadAndDialogsSection()
      })
      await test.step("Now delete trivia all uploads image and logos if already uploaded", async () => {
            for (var i = 1; i <= 5; i++) {
                  await triviaPage.deleteImageandLogos()
            }
      })
      await test.step("Now validate game title logo upload", async () => {
            await triviaPage.clickSponsorLogoUpload()
            await functions.logoImageUploadFunction()
            await functions.fileUploadCropper()
            await triviaPage.verifySponsorLogoText()
            //await page.waitForTimeout(5000)
      })
})

//here is an issue
test.skip("012TV-0118 | Validate  upload Sponsor  logo successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(1000)
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify sponsor logo", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifySponsorLogoAppliedSuccessfullyInMobileScreen()
      })
})
test("012TV-0119 | Validate  upload Mainboard background image is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open upload and dialogs section", async () => {
            await triviaPage.openUploadAndDialogsSection()
      })
      await test.step("Now delete trivia all uploads image and logos if already uploaded", async () => {
            for (var i = 1; i <= 5; i++) {
                  await triviaPage.deleteImageandLogos()
            }
      })
      await test.step("Now validate game title logo upload", async () => {
            await triviaPage.clickMainboardBackgroundBtn()
            //await triviaPage.click
            await functions.logoImageUploadFunction()
            await functions.fileUploadCropper()
            await triviaPage.verifyMainboardBackgroundText()
            //await page.waitForTimeout(5000)
      })
})

//here is an issue
test.skip("012TV-0120 | Validate  upload mainboard background image successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickOutputBtn()
            newTab = await triviaPage.clickOutputScreenLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            await newTab.waitForTimeout(7000)
      })
      await test.step("Now verify Mainboard Background  image in output screen", async () => {
            await triviamobilepage.verifyMainboardBackgroundAppliedSuccessfullyInMobileScreen()
      })
})
test("012TV-0121 | Validate Admin side upload Mobile background image is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await triviaPage.clickgamedesignSection()
      })
      await test.step("Open upload and dialogs section", async () => {
            await triviaPage.openUploadAndDialogsSection()
      })
      await test.step("Now delete trivia all uploads image and logos if already uploaded", async () => {
            for (var i = 1; i <= 5; i++) {
                  await triviaPage.deleteImageandLogos()
            }
      })
      await test.step("Now validate game title logo upload", async () => {
            await triviaPage.clickMobileBackgroundBtn()
            await functions.logoImageUploadFunction()
            //await triviaPage.click
            await functions.fileUploadCropper()
            await triviaPage.verifyMobileBackgroundText()
            //await page.waitForTimeout(5000)
      })
})

//here is an issue
test.skip("012TV-0122 | Validate  upload mobile background image successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify sponsor logo", async () => {
            await page.waitForTimeout(5000)
            //await triviamobilepage.clickHomeBtn()
            await triviamobilepage.verifyMobiledBackgroundAppliedSuccessfullyInMobileScreen()
      })
})
test("012TV-0123 | Validate  Admin side upload banner image is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
      })
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
            await triviaPage.clickgamedesignSection()
            await triviaPage.openUploadAndDialogsSection()
      })
      await test.step("Now delete trivia all uploads image and logos if already uploaded", async () => {
            await triviaPage.deleteImageandLogos()
      })
      await test.step("Open Banner image section", async () => {
            await triviaPage.openAddBannerSection()
            await triviaPage.deleteImageandLogos()
      })
      await test.step("Now validate Banner image upload", async () => {
            await functions.logoImageUploadFunction()
            await triviaPage.clickBannerImageUploadBtn()
            await functions.fileUploadCropper()
            await triviaPage.verifyMarketingmessageText()
      })
})

//here is an issue
test.skip("012TV-0124 | Validate  upload banner image successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
            await triviaPage.clickgamedesignSection()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify sponsor logo", async () => {
            await page.waitForTimeout(5000)
            //await triviamobilepage.clickHomeBtn()
            await triviamobilepage.verifyBannerImageAppliedSuccessfullyInMobileScreen()
      })
})
test("012TV-097 | Validate Game settings Text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await page.waitForTimeout(1000)
      await triviaPage.StopLiveBtn()
      await triviaPage.clickGameSettingsSection()
      await triviaPage.verifyGameSettingsText()
})
test("012TV-098 | Validate input Game Title name is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await page.waitForTimeout(1000)
      await triviaPage.StopLiveBtn()
      await triviaPage.clickGameSettingsSection()
      await triviaPage.verifyGameTitleTextInGameSettings()
      await triviaPage.InputGameTitleName()
      await page.waitForTimeout(1000)
})
test.skip("012TV-099 | Validate  Game Title name successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
            await page.waitForTimeout(1000)
      })
      await test.step("Clik start button", async () => {
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(1000)
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
      })
      await test.step("Now verify Leaderboard Accent  color on mobile screen", async () => {
            await page.waitForTimeout(5000)
            await triviamobilepage.verifyLeaderboardAccentColor()
      })
      await test.step("Now click clear all button in color section", async () => {
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clickgamedesignSection()
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
      })
})
test("012TV-0100 | Validate input Countdown Title name is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await page.waitForTimeout(1000)
      await triviaPage.StopLiveBtn()
      await triviaPage.clickGameSettingsSection()
      await triviaPage.verifyCountdownTitleTextInGameSettings()
      await triviaPage.InputCountdownTitleName()
      await page.waitForTimeout(1000)
})
test("012TV-0101 | Validate input Lederboard Title name is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await triviaPage.clickGameSettingsSection()
      await triviaPage.verifyLederboardTitleTextInGameSettings()
      await triviaPage.InputLeaderboardTitleName()
      await page.waitForTimeout(1000)
})
test("012TV-0102 | Validate Mainboard Countdown Alignments all button are working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await triviaPage.StopLiveBtn()
      await triviaPage.clickGameSettingsSection()
      await triviaPage.verifyAlignmentText()
      await triviaPage.verifyMainboardCountdownText()
      await triviaPage.clickMainboardCountdownAlignmentBottomBtn()
      await triviaPage.clickMainboardCountdownAlignmentTopBtn()
      await page.waitForTimeout(1000)
})
test("012TV-0103 | Validate Answer shape selectable all button are working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await triviaPage.StopLiveBtn()
      await triviaPage.clickGameSettingsSection()
      await triviaPage.verifyAlignmentText()
      await triviaPage.verifyAnswerShapetext()
      await triviaPage.clickAnswerShapeCircleBtn()
      await triviaPage.clickAnswerShapeRectangleBtn()
      await page.waitForTimeout(1000)
})
test("012TV-0104 | Validate Answer Shadow and Stage Fade Transition anable button are working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await triviaPage.clickGameSettingsSection()
      await page.waitForTimeout(1000)
      await triviaPage.verifyAnswerShadowText()
      await triviaPage.clickAnswerShadoAnableBtn()
      await triviaPage.verifyStageFadeTransitionText()
      await triviaPage.clickStageFadeTransitionAnableBtn()
})
test("012TV-0105 | Validate input Question No Screen header is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await triviaPage.clickGameSettingsSection()
      await page.waitForTimeout(1000)
      await triviaPage.verifyQuestionNoScreenHeaderText()
      // await triviaPage.clickQuestionNo_Font_Arial_dopdown()
      // await triviaPage.clickQuestionNo_dopdown_Font()
      //await triviaPage.clickQuestionNoHeader_dopdown()
      //await triviaPage.clickQuestionNoHeader_Normal()
      await triviaPage.inputQuestionNoScreenHeader()
})
test("012TV-0106 | Validate Question No Screen header settings is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await triviaPage.clickGameSettingsSection()
      await page.waitForTimeout(1000)
      await triviaPage.verifyQuestionNoScreenHeaderText()
      await triviaPage.inputQuestionNoScreenHeader()
      await triviaPage.clickQuestionNo_Font_Arial_dopdown()
      await triviaPage.clickQuestionNo_dopdown_Font()
      await triviaPage.clickQuestionNoHeader_dopdown()
      await triviaPage.clickH1Heding()
      await triviaPage.clickQuestionNoHeader_dopdown()
      await triviaPage.clickH2Heding()
      await triviaPage.clickQuestionNoHeader_dopdown()
      await triviaPage.clickH3Heding()
      await triviaPage.clickQuestionNoHeader_dopdown()
      await triviaPage.clickH4Heding()
      await triviaPage.clickQuestionNoHeader_dopdown()
      await triviaPage.clickH5Heding()
      await triviaPage.clickQuestionNoHeader_dopdown()
      await triviaPage.clickH6Heding()
      //await triviaPage.clickQuestionNoHeader_dopdown()
      await triviaPage.clickQuestionNoScreenLeft()
      await triviaPage.clickQuestionNoScreenCenter()
      await triviaPage.clickQuestionNoScreenRight()
      await triviaPage.clickQuestionNoHeader_dopdown()
      await triviaPage.clickQuestionNoHeader_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickQuestionNoScreenHeaderIndent()
      await triviaPage.clickQuestionNoScreenHeaderOutdent()
      await triviaPage.clickQuestionNoScreenHeaderOrdered()
      await triviaPage.clickQuestionNoScreenHeaderUnordered()
})
test("012TV-0107 | Validate input Pre Game Message is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await triviaPage.clickGameSettingsSection()
      await page.waitForTimeout(1000)
      await triviaPage.verifyPreGameMessageText()
      await triviaPage.InputPreGameMessage()
})

//her is an issue
test.skip("012TV-0108 | Validate Pre Game settings is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await triviaPage.clickGameSettingsSection()
      await page.waitForTimeout(1000)
      await triviaPage.verifyPreGameMessageText()
      await triviaPage.InputPreGameMessage()
      await triviaPage.clickPreGameMessage_droppdown_Font_Arial()
      await triviaPage.clickPreGame_dropdown_Font()
      await page.waitForTimeout(1000)
      await triviaPage.clickQuestionNoHeader_dopdown()
      await triviaPage.clickH1Heding()
      await triviaPage.clickPreMessage_dropdown_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickH2Heding()
      await triviaPage.clickPreMessage_dropdown_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickH3Heding()
      await triviaPage.clickPreMessage_dropdown_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickH4Heding()
      await triviaPage.clickPreMessage_dropdown_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickH5Heding()
      await triviaPage.clickPreMessage_dropdown_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickH6Heding()
      //await triviaPage.clickQuestionNoHeader_dopdown()
      await triviaPage.clickPreGameMessageLeft()
      await triviaPage.clickPreGameMessageCenter()
      await triviaPage.clickPreGameMessageRight()
      await triviaPage.clickPreGameMessageIndent()
      await triviaPage.clickPreGameMessageOutdent()
      await triviaPage.clickPreGameMessageOrdered()
      await triviaPage.clickPreGameMessageUnordered()
      await triviaPage.clickPreGameMessageOrdered()
})
test("012TV-0109 | Validate input Post Game Message is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await triviaPage.clickGameSettingsSection()
      await page.waitForTimeout(1000)
      await triviaPage.verifyPostGameMessageText()
      await triviaPage.InputPostGameMessage()
})
test("012TV-0110 | Validate Post Game settings is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await triviaPage.clickTriviaSection()
      await page.waitForTimeout(1000)
      await triviaPage.StopLiveBtn()
      await triviaPage.clickGameSettingsSection()
      await page.waitForTimeout(1000)
      await triviaPage.verifyPostGameMessageText()
      await triviaPage.InputPostGameMessage()
      await triviaPage.clickPostGameMessage_droppdown_Font_Arial()
      await triviaPage.clickPostGame_dropdown_Font()
      await page.waitForTimeout(1000)
      await triviaPage.clickPostMessage_dropdown_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickH1Heding()
      await triviaPage.clickPostMessage_dropdown_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickH2Heding()
      await triviaPage.clickPostMessage_dropdown_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickH3Heding()
      await triviaPage.clickPostMessage_dropdown_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickH4Heding()
      await triviaPage.clickPostMessage_dropdown_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickH5Heding()
      await triviaPage.clickPostMessage_dropdown_Normal_H1_H2_H3_H4_H5_H6()
      await triviaPage.clickH6Heding()
      //await triviaPage.clickQuestionNoHeader_dopdown()
      // await triviaPage.clickPreGameMessageLeft()
      // await triviaPage.clickPreGameMessageCenter()
      // await triviaPage.clickPreGameMessageRight()
      // await triviaPage.clickPreGameMessageIndent()
      // await triviaPage.clickPreGameMessageOutdent()
      // await triviaPage.clickPreGameMessageOrdered()
      // await triviaPage.clickPreGameMessageUnordered()
})
test("012TV-0125 | Validate Admin side prizing section is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
      })
      await triviaPage.clickPrizingSection()
      await triviaPage.verifyPrizingListText()
})
test("012TV-0126 | Validate  Admin side Add New Prize button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
      })
      await triviaPage.clickPrizingSection()
      await triviaPage.verifyPrizingListText()

      await triviaPage.clickAddNewPrizeBtn()
      await triviaPage.verifyAddNewPrizeText()

})
test("012TV-0127 | Validate input Add New Prize Title Is Showing Properly", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
      })
      await triviaPage.clickPrizingSection()
      await triviaPage.clickAddNewPrizeBtn()
      await triviaPage.verifyAddNewPrizeText()
      await triviaPage.InputAddNewPrizeTitlename_Cola()
})
test("012TV-0128 | Validate input field Add New Prize Total Prize No  is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
      })
      await triviaPage.clickPrizingSection()
      await triviaPage.clickAddNewPrizeBtn()
      await triviaPage.verifyAddNewPrizeText()
      await triviaPage.InputAddNewPrizeTitlename_Cola()
      await triviaPage.InputTotalPrizeNo()
})
test("012TV-0129 | Validate  Add New Prize section distribution manual and automatic type is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
      })
      await triviaPage.clickPrizingSection()
      await triviaPage.clickAddNewPrizeBtn()
      await triviaPage.verifyAddNewPrizeText()
      await triviaPage.InputAddNewPrizeTitlename_Cola()
      await triviaPage.InputTotalPrizeNo()
      await triviaPage.verifyDistributionTypetext()
      await triviaPage.clickDistibutionType_Automatic()
      await triviaPage.clickDistibutionType_Manual()
})
test("012TV-0130 | Validate  Add New Prize section condition  type dropdown button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(1000)
            await triviaPage.StopLiveBtn()
      })
      await triviaPage.clickPrizingSection()
      await triviaPage.clickAddNewPrizeBtn()
      await triviaPage.verifyAddNewPrizeText()
      await triviaPage.InputAddNewPrizeTitlename_Cola()
      await triviaPage.InputTotalPrizeNo()
      await triviaPage.verifyDistributionTypetext()
      await triviaPage.clickDistibutionType_Automatic()
      await triviaPage.clickDistibutionType_Manual()
      await triviaPage.verifyCondutionTypetext()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_multipleGamePlay()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Points()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Time()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Rank()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Particiption()
})
test("012TV-0131 | Validate  Add New prize for manual is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
      })
      await triviaPage.clickPrizingSection()
      await triviaPage.verifyPrizingListText()
      await triviaPage.clickAddNewPrizeBtn()
      await triviaPage.verifyAddNewPrizeText()
      await triviaPage.InputAddNewPrizeTitlename_Cola()
      await triviaPage.InputTotalPrizeNo()
      await triviaPage.verifyDistributionTypetext()
      //await triviaPage.clickDistibutionType_Automatic()
      await triviaPage.clickDistibutionType_Manual()
      await triviaPage.verifyCondutionTypetext()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_multipleGamePlay()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Points()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Time()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Rank()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Particiption()
      await triviaPage.clickCouponBtn()
      await triviaPage.selectCouponForPrize()

      await triviaPage.clickSelectCouponBtn()

      await triviaPage.clickSaveBtn()
})
test.skip("012TV-0132 | Validate  prize won manually distribution successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
            await triviaPage.clickControlPanelSection()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            await newTab.waitForTimeout(4000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
            await triviamobilepage.inputQuestionAnswer()
            await triviamobilepage.clickSubmittBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviamobilepage.clickMultipleChoise1()
            await triviaPage.clickPrizingSection()
            await page.waitForTimeout(1000)
            await triviaPage.clickcouponDistributionAllManualPrize()
            await triviaPage.clickControlPanelSection()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
      })
      await test.step("Now verify Add New Prize successfully reflection on mobile screen", async () => {
            await triviamobilepage.verifyAddNewPrize_ManualDistribution_Cola()
            await triviaPage.StopLiveBtn()
      })
})
test.skip("012TV-0133 | Validate  prize won manually distribution  save to phone button is working on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            await newTab.waitForTimeout(4000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
            await triviamobilepage.inputQuestionAnswer()
            await triviamobilepage.clickSubmittBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviamobilepage.clickMultipleChoise1()
            await triviaPage.clickPrizingSection()
            await page.waitForTimeout(1000)
            await triviaPage.clickcouponDistributionAllManualPrize()
            await triviaPage.clickControlPanelSection()
            await page.waitForTimeout(1000)
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
      })
      await test.step("Now verify Add New Prize Manual distribution save to phone button is working on mobile screen", async () => {
            await triviamobilepage.validateSaveToPhoneBtn()
            await triviaPage.StopLiveBtn()
      })
})
test("012TV-0134 | Validate  Add New prize Distribution for Automatic  is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
      })
      await triviaPage.clickPrizingSection()
      await triviaPage.verifyPrizingListText()
      await triviaPage.clickAddNewPrizeBtn()
      await triviaPage.verifyAddNewPrizeText()
      await triviaPage.InputAddNewPrizeTitlename_Burger()
      await triviaPage.InputTotalPrizeNo()
      await triviaPage.verifyDistributionTypetext()
      await triviaPage.clickDistibutionType_Automatic()
      //await triviaPage.clickDistibutionType_Manual()
      await triviaPage.verifyCondutionTypetext()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_multipleGamePlay()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Points()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Time()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Rank()
      await triviaPage.clickConditionType_dropdownBtn()
      await triviaPage.clickConditionType_Particiption()
      await triviaPage.clickCouponBtn()
      await triviaPage.selectCouponForPrize()
      // await triviaPage.
      await triviaPage.clickSelectCouponBtn()
      await page.waitForTimeout(1000)
      await triviaPage.clickSaveBtn()
})
test("012TV-0135 | Validate  prize won Automatic distribution successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.StopLiveBtn()
            await triviaPage.clickControlPanelSection()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            await newTab.waitForTimeout(4000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
            await page.waitForTimeout(1000)
            await triviamobilepage.inputQuestionAnswer()
            await page.waitForTimeout(1000)
            await triviamobilepage.clickSubmittBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviamobilepage.clickMultipleChoise1()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await page.waitForTimeout(1000)
      })
      await test.step("Now verify Add New Prize successfully reflection on mobile screen", async () => {
            await triviamobilepage.verifyAddNewPrize_AutomaticDistribution_Burger()
            await triviaPage.clicklive()
            await triviaPage.clickOkBtn()
      })
})
test.skip("012TV-0136 | Validate  prize won Automatic distribution save to phone button is working on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
      let newTab = null;
      let triviamobilepage: triviaMobilePage
      await test.step("Now game open in mobile screen", async () => {
            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            // await guesstheScorePage.clickCloseBtn()
            //await triviamobilepage.typephoneno()
            //await triviamobilepage.typeemail()
            //await triviamobilepage.selectbirthdate()
            //await triviamobilepage.typeAge()
            //await triviamobilepage.typezip()
            //await triviamobilepage.clicksubmit()
            await newTab.waitForTimeout(4000)
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.clickStartBtn()
            await triviaPage.clickMOveToNextBtn()
            await page.waitForTimeout(1000)
            await triviamobilepage.inputQuestionAnswer()
            await page.waitForTimeout(1000)
            await triviamobilepage.clickSubmittBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await triviamobilepage.clickMultipleChoise1()
            await triviaPage.clickMOveToNextBtn()
            await triviaPage.clickMOveToNextBtn()
            await page.waitForTimeout(1000)
      })
      await test.step("Now verify Add New Prize successfully reflection on mobile screen", async () => {
            await triviamobilepage.validateSaveToPhoneBtn()
            await triviaPage.clickMobileLinkPopupClose()
            await triviaPage.StopLiveBtn()
      })
})
test.skip("012TV-0137 | Validate  Add New prize  edit button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
            await triviaPage.StopLiveBtn()
      })
      await triviaPage.clickgamedesignSection()
      await page.waitForTimeout(2000)
      await triviaPage.clickPrizingSection()
      await page.waitForTimeout(2000)
      await triviaPage.verifyPrizingListText()
      await triviaPage.validateAddNewPrizeEditBtn()
      await triviaPage.InputTotalPrizeNo()
      await triviaPage.clickDistibutionType_Manual()
      await triviaPage.clickSaveBtn()
})
test("012TV-0138 | Validate  Add New prize  delete  button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
      })
      await triviaPage.clickgamedesignSection()
      await page.waitForTimeout(2000)
      await triviaPage.clickPrizingSection()
      await page.waitForTimeout(2000)
      await triviaPage.verifyPrizingListText()
      await triviaPage.clickAddNewPrizeDeleteBtn()
      await triviaPage.verifyDeleteprizeText()
      await triviaPage.clickOkBtn()
})
test("012TV-0139 | Validate  Analytics section is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
      })
      await triviaPage.clickgamedesignSection()
      await page.waitForTimeout(2000)
      await triviaPage.clickAnalyticsSection()
      await page.waitForTimeout(2000)
      await triviaPage.verifySessionAnalyticsText()
      await triviaPage.verifyDateText()
      await triviaPage.verifyQRScansText()
      await triviaPage.verifyTotalPlayersText()
      await triviaPage.verifyUniqueUsersPlayedText()
      await triviaPage.verifyReturningUsersText()
      await triviaPage.verifyTotalTimePlayedText()
      await triviaPage.verifyActionText()
})
test("012TV-0140 | Validate  Analytics section Export button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
      })
      await triviaPage.clickgamedesignSection()
      await page.waitForTimeout(2000)
      await triviaPage.clickAnalyticsSection()
      await page.waitForTimeout(2000)
      await triviaPage.verifySessionAnalyticsText()
      await triviaPage.verifyDateText()
      await triviaPage.verifyQRScansText()
      await triviaPage.verifyTotalPlayersText()
      await triviaPage.verifyUniqueUsersPlayedText()
      await triviaPage.verifyReturningUsersText()
      await triviaPage.verifyTotalTimePlayedText()
      await triviaPage.verifyActionText()
      // await triviaPage.validateAnalyticsExportBtn()
})

test("012TV-0141 | Validate Trivia delete configuration is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await page.waitForNavigation();
            await loginPage.login(data.username, data.password)

      })
      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(2000)
      })
      await triviaPage.clickgamedesignSection()
      await page.waitForTimeout(2000)
      await triviaPage.clickDeleteSection()
      await triviaPage.clickConfirmDeleteCongigurationBtn()
})
