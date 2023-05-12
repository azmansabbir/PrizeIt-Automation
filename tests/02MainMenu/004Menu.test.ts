import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import mobilePreviewPage from "@pages/mobilePreview.page";
import Env from "@utils/environment";
import { readFileSync } from 'fs'
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
        await languagePage.clickLanguagePage()
        await languagePage.clickUserForceLanguageOption()
        await languagePage.clickForceLanguageInputField()
        await languagePage.selectEnglishLanguage()
})
test("004M-001 | Varify Fonts Upload Functionality", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
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
        await menuPage.deleteUploadedFont()
        await functions.fontUploadFunction()
        await menuPage.clickToUploadFont()
        await menuPage.verifyFontUploadedSuccessfully()
})
test("004M-002 | Validate Uploaded Font Successfully Applied In Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.inputPhoneNumberForAditionalInfo()
                await mobilePreviewPage.clickAdditionalDatePickterInputField()
                await mobilePreviewPage.clickAdditionalDateEditBtn()
                await mobilePreviewPage.inputAdditionalDate()
                await mobilePreviewPage.clickAdditionalDateDatePickerOkBtn()
                await mobilePreviewPage.inputAgeForAditionalInfo()
                await mobilePreviewPage.inputEmailForAditionalInfo()
                await mobilePreviewPage.inputAdditionalZipCode()
                await mobilePreviewPage.clickSubmitButton()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                await mobilePreviewPage.clickHomeBtn()
                await mobilePreviewPage.verifyMainMenuFontSuccessfullyAppliedInMobileScreen()
        })
})
test("004M-004 | Validate Menu Bar Background Color Input Functionality From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await menuPage.clickBackgroundColorInputField()
                await menuPage.inputBackgroundColor()
        })
})
test("004M-005 | Validate  Menu Bar Background Color Successfully Applied In Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.inputPhoneNumberForAditionalInfo()
                await mobilePreviewPage.clickAdditionalDatePickterInputField()
                await mobilePreviewPage.clickAdditionalDateEditBtn()
                await mobilePreviewPage.inputAdditionalDate()
                await mobilePreviewPage.clickAdditionalDateDatePickerOkBtn()
                await mobilePreviewPage.inputAgeForAditionalInfo()
                await mobilePreviewPage.inputEmailForAditionalInfo()
                await mobilePreviewPage.inputAdditionalZipCode()
                await mobilePreviewPage.clickSubmitButton()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                await mobilePreviewPage.verifyMenuBarBackgroundColorSuccessfullyAppliedInMobileScreen()
        })
})
test("004M-006 | Validate Menu Bar Text Color Input Functionality From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await menuPage.clickTextColorInputField()
                await menuPage.inputTextColor()
                await menuPage.clickColorPickerWindowSaveBtn()
        })
})
test("004M-007 | Validate  Menu Bar Text Color Successfully Applied In Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.inputPhoneNumberForAditionalInfo()
                await mobilePreviewPage.clickAdditionalDatePickterInputField()
                await mobilePreviewPage.clickAdditionalDateEditBtn()
                await mobilePreviewPage.inputAdditionalDate()
                await mobilePreviewPage.clickAdditionalDateDatePickerOkBtn()
                await mobilePreviewPage.inputAgeForAditionalInfo()
                await mobilePreviewPage.inputEmailForAditionalInfo()
                await mobilePreviewPage.inputAdditionalZipCode()
                await mobilePreviewPage.clickSubmitButton()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                await mobilePreviewPage.clickHomeBtn()
                await mobilePreviewPage.verifyMenuBarTextColorSuccessfullyAppliedInMobileScreen()
        })
})
test("004M-008 | Validate Menu Bar Active Background Color Input Functionality From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await menuPage.clickActiveBackgroundColorInputField()
                await menuPage.inputActiveBackgroundColor()
                await menuPage.clickColorPickerWindowSaveBtn()
        })
})
test("004M-009 | Validate  Menu Bar Active Background Color Successfully Applied In Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.inputPhoneNumberForAditionalInfo()
                await mobilePreviewPage.clickAdditionalDatePickterInputField()
                await mobilePreviewPage.clickAdditionalDateEditBtn()
                await mobilePreviewPage.inputAdditionalDate()
                await mobilePreviewPage.clickAdditionalDateDatePickerOkBtn()
                await mobilePreviewPage.inputAgeForAditionalInfo()
                await mobilePreviewPage.inputEmailForAditionalInfo()
                await mobilePreviewPage.inputAdditionalZipCode()
                await mobilePreviewPage.clickSubmitButton()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                // await mobilePreviewPage.clickHomeBtn()
                await mobilePreviewPage.verifyMenuBarActivBackgroundColorSuccessfullyAppliedInMobileScreen()
        })
})
test("004M-010 | Validate Menu Bar Active Text Color Input Functionality From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await menuPage.clickActiveTextColorInputField()
                await menuPage.inputActiveTextColor()
                await menuPage.clickColorPickerSaveBtn()
        })
})
test("004M-011 | Validate  Menu Bar Active Text Color Successfully Applied In Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                await mobilePreviewPage.verifyMenuBarActivTextColorSuccessfullyAppliedInMobileScreen()
        })
})
test("004M-012 | Validate Menu Bar Top Alignment Successfully Selected From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Verify From Admin Side", async () => {
                await menuPage.selectTopAlignmentMenuBar()
        })
})
test("004M-013 | Validate  Menu Bar Top Alignment Successfully Applied in Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                await mobilePreviewPage.verifyMenuBarTopAlignmentSuccessfullyAppliedInMobileScreen()
        })
})
test("004M-014 | Validate Menu Bar Three Line Alignment Successfully Selected From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Verify From Admin Side", async () => {
                await menuPage.selectThreeLineAlignmentMenuBar()
        })
})
test("004M-015 | Validate Menu Bar  Three Line Alignment Successfully Applied in Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickThreeLineAlignmentBtn()
                // await mobilePreviewPage.clickHowToPlayBtn()
                // await mobilePreviewPage.clickThreeLineAlignmentBtn()
                // await mobilePreviewPage.clickPrizeSection()
                // await mobilePreviewPage.validateMenuBarThreeLineAlignmentSuccessfullyAppliedInMobileScreen()
                // await mobilePreviewPage.clickPrizeSection()
                // await mobilePreviewPage.verifyMenuBarThreeLineAlignmentSuccessfullyAppliedInMobileScreen()
        })
})
test("004M-016 | Validate Menu Bar Hide Alignment Successfully Selected From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Verify From Admin Side", async () => {
                await menuPage.selectHideAlignmentMenuBar()
        })
})
test("004M-017 | Validate  Menu Bar  Hide Alignment Successfully Applied in Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                // await mobilePreviewPage.clickHowToPlayBtn()
                // await mobilePreviewPage.clickPrizeSection()
                // await mobilePreviewPage.verifyPrizeEntryIsApplyed()
                await mobilePreviewPage.verifyMenuBarHideAlignmentSuccessfullyAppliedOnMobileScreen()
        })
})
test("004M-018 | Validate Menu Bar Bottom Alignment Successfully Selected From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Verify From Admin Side", async () => {
                await menuPage.selectBottomAlignmentMenuBar()
        })
})
test("004M-019 | Validate  Menu Bar  Bottom Alignment Successfully Applied in Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
        await test.step("Validate in mobile screen", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                // await mobilePreviewPage.verifyPrizeEntryIsApplyed()
                await mobilePreviewPage.verifyMenuBarBottomAlignmentSuccessfullyAppliedInMobileScreen()
        })
})
test.skip("004M-020 | Validate Menu Bar Home Icon Successfully Selected From Admin Sideted From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Verify From Admin Side", async () => {
                await menuPage.uploadMenuBarHomeIcon()
                await functions.homeIconUploadHelper()
                await functions.fileUploadCropperForMainMenu()
        })
})
test.skip("004M-021 | Validate  Menu Bar Home Icon Successfully Applied in Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                // await mobilePreviewPage.verifyPrizeEntryIsApplyed()
                await mobilePreviewPage.verifyHomeIconSuccessfullyAppliedInMobileScreen()
        })
})
test.skip("004M-022 | Validate Menu Bar Prize Icon Successfully Selected From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Verify From Admin Side", async () => {
                await menuPage.uploadMenuBarPrizeIcon()
                await functions.prizeIconUploadHelper()
                await functions.fileUploadCropperForMainMenu()
        })
})
test.skip("004M-023 | Validate  Menu Bar Prize Icon Successfully Applied in Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                // await mobilePreviewPage.verifyPrizeEntryIsApplyed()
                await mobilePreviewPage.verifyPrizeIconSuccessfullyAppliedInMobileScreen()
        })
})
test.skip("004M-024 | Validate Menu Bar How To Play Icon Successfully Selected From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Verify From Admin Side", async () => {
                await menuPage.uploadMenuBarHowToPlayIcon()
                await functions.howToPlayIconUploadHelper()
                await functions.fileUploadCropperForMainMenu()
        })
})
test.skip("004M-025 | Validate  Menu Bar How To Play Icon Successfully Applied in Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                // await mobilePreviewPage.verifyPrizeEntryIsApplyed()
                await mobilePreviewPage.verifyHowToPlayIconSuccessfullyAppliedInMobileScreen()
        })
})
test.skip("004M-026 | Validate Menu Bar Rules Icon Successfully Selected From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Verify From Admin Side", async () => {
                await menuPage.uploadMenuBarRulesIcon()
                await functions.rulesIconUploadHelper()
                await functions.fileUploadCropperForMainMenu()
        })
})
test.skip("004M-027 | Validate  Menu Bar Rules Icon Successfully Applied in Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                // await mobilePreviewPage.verifyPrizeEntryIsApplyed()
                await mobilePreviewPage.verifyRulesIconSuccessfullyAppliedInMobileScreen()
        })
})
test.skip("004M-028 | Validate Menu Bar User Profile Icon Successfully Selected From Admin Side", async ({ loginPage, functions, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await menuPage.clickMenuPage()
        })
        await test.step("Verify From Admin Side", async () => {
                await menuPage.uploadMenuBarUserProfileIcon()
                await functions.userProfileIconUploadHelper()
                await functions.fileUploadCropperForMainMenu()
        })
})
test.skip("004M-029 | Validate  Menu Bar User Profile Icon Successfully Applied in Mobile Screen", async ({ loginPage, mobilePreviewPage, MainMenu, prizeDropPage, guesstheScorePage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickHowToPlayBtn()
                await mobilePreviewPage.clickPrizeSection()
                // await mobilePreviewPage.verifyPrizeEntryIsApplyed()
                await mobilePreviewPage.verifyUserProfileIconSuccessfullyAppliedInMobileScreen()
        })
})
        // test("004M-002 | Varify Color input functionality for menu", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        //         await page.goto('/admin/#/sign-in')
        //         await loginPage.login(data.username, data.password)
        //         const title = await page.title();
        //         expect(title).toBe('DXP Admin')
        //         await MainMenu.clickHomeAvater();
        //         await MainMenu.mainMenuBtn();
        //         await MainMenu.clickMobileDesign();
        //         //Click on the menu page
        //         await menuPage.clickMenuPage()
        //         //clcik on the menubar first color input field
        //         await menuPage.clickFirstMenuBarColorInputField()
        //         await page.waitForTimeout(3000)
        //         //Input menubar RGB first field color
        //         await menuPage.inputMenuBarRgbFirstFieldColor()
        //         //Input menubar RGB second field color
        //         await menuPage.inputMenuBarRgbSecondFieldColor()
        //         //Input menubar RGB third field color
        //         await menuPage.inputMenuBarRgbThirdFieldColor()
        //         //Input menubar field color  opacity
        //         await menuPage.inputMenuBarColorFieldOpacity()
        //         //Input menubar solid field color
        //         await menuPage.inputMenuBarSolidFieldColor()
        //         //click on the save button
        //         await menuPage.clickColorPickerWindowSaveBtn();
        //         //clcik on the menubar first color input field
        //         await menuPage.clickFirstMenuBarColorInputField()
        //         //Input menubar RGB first field color
        //         await menuPage.inputSecondMenuBarRgbFirstFieldColor()
        //         //Input menubar RGB second field color
        //         await menuPage.inputMenuBarRgbSecondFieldColor()
        //         //Input menubar RGB third field color
        //         await menuPage.inputSecondMenuBarRgbThirdFieldColor()
        //         //Input menubar field color  opacity
        //         await menuPage.inputSecondMenuBarColorFieldOpacity()
        //         //Input menubar solid field color
        //         await menuPage.inputSecondMenuBarSolidFieldColor()
        //         //click on the save button
        //         await menuPage.clickColorPickerWindowSaveBtn();
        // })
        // test("004M-003 | Varify Alignment button functionality", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        //         await page.goto('/admin/#/sign-in')
        //         await loginPage.login(data.username, data.password)
        //         const title = await page.title();
        //         expect(title).toBe('DXP Admin')
        //         await MainMenu.clickHomeAvater();
        //         await MainMenu.mainMenuBtn();
        //         await MainMenu.clickMobileDesign();
        //         //Click on the menu page
        //         await menuPage.clickMenuPage()
        //         //Check alignmenttext
        //         await menuPage.checkAlignmentText()
        //         //click on the top alignment button
        //         await menuPage.clickTopAlignmentBtn()
        //         //click on the bottom alignment button
        //         await menuPage.clickBottomAlignmentBtn()
        //         //click on the 3 line option alignment button
        //         await menuPage.click3lineOptionAlignmentBtn()
        // })
        // test("004M-004 | Varify All the show icon disable successfully ", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        //         await page.goto('/admin/#/sign-in')
        //         await loginPage.login(data.username, data.password)
        //         const title = await page.title();
        //         expect(title).toBe('DXP Admin')
        //         await MainMenu.clickHomeAvater();
        //         await MainMenu.mainMenuBtn();
        //         await MainMenu.clickMobileDesign();
        //         //Click on the menu page
        //         await menuPage.clickMenuPage()
        //         await page.waitForTimeout(2000)
        //         //Check  Show All Icons text
        //         await menuPage.checkAllIconText()
        //         //Enable show all icon button
        //         await menuPage.enableShowAllIconBtn()
        //         //If disable the home icon checkbox then enabled it
        //         await menuPage.disableHomeIconCheckBox()
        //         //If disable the prize icon checkbox then enabled it
        //         await menuPage.disablePrizeIconCheckBox()
        //         await page.waitForTimeout(2000)
        //         //If disable the how to play icon checkbox then enabled it
        //         await menuPage.disableHowToPlayIconCheckBox()
        //         await page.waitForTimeout(2000)
        //         //If disable the rules icon checkbox then enabled it
        //         await menuPage.disableRulesIconCheckBox()
        //         await page.waitForTimeout(2000)
        //         //If disable the user profile icon checkbox then enabled it
        //         await menuPage.disableUserProfileIconCheckBox()
        //         //Enable show all icon button
        //         await menuPage.disableShowAllIconBtn()
        // })
        // test("004M-005 | Varify All the show icon enable successfully ", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        //         await page.goto('/admin/#/sign-in')
        //         await loginPage.login(data.username, data.password)
        //         const title = await page.title();
        //         expect(title).toBe('DXP Admin')
        //         await MainMenu.clickHomeAvater();
        //         await MainMenu.mainMenuBtn();
        //         await MainMenu.clickMobileDesign();
        //         //Click on the menu page
        //         await menuPage.clickMenuPage()
        //         await page.waitForTimeout(2000)
        //         //Check  Show All Icons text
        //         await menuPage.checkAllIconText()
        //         //Enable show all icon button
        //         await menuPage.enableShowAllIconBtn()
        //         //If disable the home icon checkbox then enabled it
        //         await menuPage.enabledHomeIconCheckBox()
        //         //If disable the prize icon checkbox then enabled it
        //         await menuPage.enabledPrizeIconCheckBox()
        //         await page.waitForTimeout(2000)
        //         //If disable the how to play icon checkbox then enabled it
        //         await menuPage.enabledHowToPlayIconCheckBox()
        //         await page.waitForTimeout(2000)
        //         //If disable the rules icon checkbox then enabled it
        //         await menuPage.enabledRulesIconCheckBox()
        //         await page.waitForTimeout(2000)
        //         //If disable the user profile icon checkbox then enabled it
        //         await menuPage.enabledUserProfileIconCheckBox()
        // })
        // test("004M-006 | Verify all the uploaded icons deleted successfully", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        //         await page.goto('/admin/#/sign-in')
        //         await loginPage.login(data.username, data.password)
        //         const title = await page.title();
        //         expect(title).toBe('DXP Admin')
        //         await MainMenu.clickHomeAvater();
        //         await MainMenu.mainMenuBtn();
        //         await MainMenu.clickMobileDesign();
        //         //Click on the menu page
        //         await menuPage.clickMenuPage()
        //         await page.waitForTimeout(5000)
        //         await menuPage.deleteHomeIcon()
        //         await menuPage.deletePrizeIcon()
        //         await menuPage.deleteHowToPlayIcon()
        //         await menuPage.deleteRulesIcon()
        //         await menuPage.deleteProfileIcon()
        // })
        // test("004M-007 | Verify Upload Menu Profile Icon", async ({ loginPage, MainMenu, functions, languagePage, menuPage, page, }, testInfo) => {
        //         await page.goto('/admin/#/sign-in')
        //         await loginPage.login(data.username, data.password)
        //         const title = await page.title();
        //         expect(title).toBe('DXP Admin')
        //         await MainMenu.clickHomeAvater();
        //         await MainMenu.mainMenuBtn();
        //         await MainMenu.clickMobileDesign();
        //         //Click on the menu page
        //         await menuPage.clickMenuPage()
        //         await page.waitForTimeout(2000)
        //         //Check  Show All Icons text
        //         await menuPage.uplodProfileIcon()
        //         await menuPage.functionForCroper()
        //         await page.waitForTimeout(5000)
        // })
        // test("004M-008 | Verify Upload The Menu Rule Icon", async ({ loginPage, MainMenu, functions, languagePage, menuPage, page, }, testInfo) => {
        //         await page.goto('/admin/#/sign-in')
        //         await loginPage.login(data.username, data.password)
        //         const title = await page.title();
        //         expect(title).toBe('DXP Admin')
        //         await MainMenu.clickHomeAvater();
        //         await MainMenu.mainMenuBtn();
        //         await MainMenu.clickMobileDesign();
        //         //Click on the menu page
        //         await menuPage.clickMenuPage()
        //         await page.waitForTimeout(2000)
        //         //Check  Show All Icons text
        //         await menuPage.uplodRulesIcon()
        //         await menuPage.functionForCroper()
        //         await page.waitForTimeout(4000)
        // })
        // test("004M-009 | Verify Upload The Menu HowToPlay Icon", async ({ loginPage, MainMenu, functions, languagePage, menuPage, page, }, testInfo) => {
        //         await page.goto('/admin/#/sign-in')
        //         await loginPage.login(data.username, data.password)
        //         const title = await page.title();
        //         expect(title).toBe('DXP Admin')
        //         await MainMenu.clickHomeAvater();
        //         await MainMenu.mainMenuBtn();
        //         await MainMenu.clickMobileDesign();
        //         //Click on the menu page
        //         await menuPage.clickMenuPage()
        //         //Check  Show All Icons text
        //         await menuPage.uplodHowToPlayIcon()
        //         await menuPage.functionForCroper()
        //         await page.waitForTimeout(4000)
        // })
        // test("004M-010 | Verify Upload The Menu Prize Icon", async ({ loginPage, MainMenu, functions, languagePage, menuPage, page, }, testInfo) => {
        //         await page.goto('/admin/#/sign-in')
        //         await loginPage.login(data.username, data.password)
        //         const title = await page.title();
        //         expect(title).toBe('DXP Admin')
        //         await MainMenu.clickHomeAvater();
        //         await MainMenu.mainMenuBtn();
        //         await MainMenu.clickMobileDesign();
        //         //Click on the menu page
        //         await menuPage.clickMenuPage()
        //         //Check  Show All Icons text
        //         await menuPage.uplodPrizeIcon()
        //         await menuPage.functionForCroper()
        //         await page.waitForTimeout(4000)
        // })
        // test("004M-011 | Verify Upload All The Menu Home Icon", async ({ loginPage, MainMenu, functions, languagePage, menuPage, page, }, testInfo) => {
        //         await page.goto('/admin/#/sign-in')
        //         await loginPage.login(data.username, data.password)
        //         const title = await page.title();
        //         expect(title).toBe('DXP Admin')
        //         await MainMenu.clickHomeAvater();
        //         await MainMenu.mainMenuBtn();
        //         await MainMenu.clickMobileDesign();
        //         //Click on the menu page
        //         await menuPage.clickMenuPage()
        //         //Check  Show All Icons text
        //         await menuPage.uplodHomeIcon()
        //         await menuPage.functionForCroper()
        //         await page.waitForTimeout(4000)
        // })
