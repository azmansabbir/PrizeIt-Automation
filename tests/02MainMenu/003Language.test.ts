import test, { expect } from "@fixtures/basePages";
import mobilePreviewPage from "@pages/mobilePreview.page";
import prizeDropMobilePage from "@pages/prizedrop_mobile_game.page";
import * as data from "@testData/login.cred.json"
import { readFileSync } from 'fs'
const clipboard = require('clipboardy')

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
test("TL003-001 | Validate Admin Successfully Diselete All  User Selectable Language ", async ({ loginPage, guesstheScorePage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserSelectableRadioBtn();
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()
        await languagePage.deselectJapaneseLanguage()
        await languagePage.deselectSpanishLanguage()
        await languagePage.deselectArabicLanguage()
        await languagePage.deselectRussianLanguage()
        await languagePage.deselectFranciasLanguage()
        await languagePage.deselectEnglishLanguage()
    })
})
test("TL003-002 | Validate User Selectable Japanese Language Change Functionality Working Properly on Admin Side", async ({ loginPage, guesstheScorePage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserSelectableRadioBtn();
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()
        // await languagePage.deselectJapaneseLanguage()
        await languagePage.selectJapaneseLanguage()
        // await languagePage.deselectSpanishLanguage()
        // await languagePage.deselectArabicLanguage()
        // await languagePage.deselectRussianLanguage()
        // await languagePage.deselectFranciasLanguage()
        // await languagePage.deselectEnglishLanguage()
        await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    // await test.step("Click Prize Drop Section", async () => {
    //     //click Prize Drop Section
    //     await guesstheScorePage.clickGuessTheScoreSection()
    // })
    // await test.step("now click on start button on Admin site", async () => {
    //     // await prizeDropPage.clickstartbutton()
    //     // await prizeDropPage.clickStartGameOkBtn()
    // })
    // let newTab = null;
    // let newmobilePreviewPage: mobilePreviewPage
    // await test.step("now open the game in mobile view", async () => {
    //     //click Mobile Link Btn
    //     await MainMenu.clickMobileLinkBtn()
    //     //now click on open button
    //     newTab = await MainMenu.clickMobileLinkOpenBtn()
    //     newmobilePreviewPage = new mobilePreviewPage(newTab)
    //     // await MainMenu.click_closebutton_in_mobilelinkmodal()
    // })
    // await test.step("Input Additional Information For Mobile Screen", async () => {
    //     await newmobilePreviewPage.typephoneno()
    //     await newmobilePreviewPage.selectbirthdate()
    //     await newmobilePreviewPage.typeAge()
    //     await newmobilePreviewPage.typeemail()
    //     await newmobilePreviewPage.typezip()
    //     await newmobilePreviewPage.clicksubmit()
    // })
    // await test.step("Verify Japanese Language Applaid Successfully", async () => {
    //     await newmobilePreviewPage.clickMyProfile()
    //     await newmobilePreviewPage.clickOkBtn()
    //     await newmobilePreviewPage.clickLanguageSelectionInputField()
    //     await newmobilePreviewPage.selectJapanese()
    //     await newmobilePreviewPage.verifyJapaneseLanguageApplaidSuccessfully()
    // })
})
test("TL003-003 | Validate User Selectable Japanese Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
    await test.step("Login Admin And land To Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
        })
    })
    await test.step("Click Prize Drop Section", async () => {
        //click Prize Drop Section
        await guesstheScorePage.clickGuessTheScoreSection()
    })
    await test.step("now click on start button on Admin site", async () => {
        // await prizeDropPage.clickstartbutton()
        // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab = null;
    let newmobilePreviewPage: mobilePreviewPage
    await test.step("now open the game in mobile view", async () => {
        //click Mobile Link Btn
        await MainMenu.clickMobileLinkBtn()
        //now click on open button
        newTab = await MainMenu.clickMobileLinkOpenBtn()
        newmobilePreviewPage = new mobilePreviewPage(newTab)
        // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })
    await test.step("Input Additional Information For Mobile Screen", async () => {
        //await newmobilePreviewPage.typephoneno()
        // await newmobilePreviewPage.selectbirthdate()
        // await newmobilePreviewPage.typeAge()
        // await newmobilePreviewPage.typeemail()
        // await newmobilePreviewPage.typezip()
        // await newmobilePreviewPage.clicksubmit()
    })
    await test.step("Verify Japanese Language Applaid Successfully", async () => {
        await newmobilePreviewPage.clickMyProfile()
        await newmobilePreviewPage.clickOkBtn()
        await newmobilePreviewPage.clickLanguageSelectionInputField()
        await newmobilePreviewPage.selectJapanese()
        await newmobilePreviewPage.verifyJapaneseLanguageApplaidSuccessfully()
    })
})
test("TL003-006 | Validate User Selectable Spanish Language Change Functionality Working Properly on Admin Side", async ({ loginPage, guesstheScorePage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserForceLanguageOption()
        await languagePage.clickUserSelectableRadioBtn();
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()
        // await languagePage.deselectSpanishLanguage()
        await languagePage.selectSpanishLanguage()
        // await languagePage.deselectArabicLanguage()
        // await languagePage.deselectRussianLanguage()
        // await languagePage.deselectFranciasLanguage()
        // await languagePage.deselectEnglishLanguage()
        await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    // await test.step("Click Prize Drop Section", async () => {
    //     //click Prize Drop Section
    //     await guesstheScorePage.clickGuessTheScoreSection()
    // })
    // await test.step("now click on start button on Admin site", async () => {
    //     // await prizeDropPage.clickstartbutton()
    //     // await prizeDropPage.clickStartGameOkBtn()
    // })
    // let newTab = null;
    // let newmobilePreviewPage: mobilePreviewPage
    // await test.step("now open the game in mobile view", async () => {
    //     //click Mobile Link Btn
    //     await MainMenu.clickMobileLinkBtn()
    //     //now click on open button
    //     newTab = await MainMenu.clickMobileLinkOpenBtn()
    //     newmobilePreviewPage = new mobilePreviewPage(newTab)
    //     // await MainMenu.click_closebutton_in_mobilelinkmodal()
    // })
    // await test.step("Input Additional Information For Mobile Screen", async () => {
    //     await newmobilePreviewPage.typephoneno()
    //     await newmobilePreviewPage.selectbirthdate()
    //     await newmobilePreviewPage.typeAge()
    //     await newmobilePreviewPage.typeemail()
    //     await newmobilePreviewPage.typezip()
    //     await newmobilePreviewPage.clicksubmit()
    // })
    // await test.step("Verify Spanish Language Applaid Successfully", async () => {
    //     await newmobilePreviewPage.clickMyProfile()
    //     await newmobilePreviewPage.clickOkBtn()
    //     await newmobilePreviewPage.clickLanguageSelectionInputField()
    //     await newmobilePreviewPage.selectSpanish()
    //     await newmobilePreviewPage.verifySpanishLanguageApplaidSuccessfully()
    // })
})
test("TL003-007 | Validate User Selectable Spanish Language Change Functionality Working Properly Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await mobilePreviewPage.gotoUrl()
    })

    await test.step("Input Additional Information For Mobile Screen", async () => {
        // await mobilePreviewPage.typephoneno()
        // await mobilePreviewPage.selectbirthdate()
        // await mobilePreviewPage.typeAge()
        // await mobilePreviewPage.typeemail()
        // await mobilePreviewPage.typezip()
        // await mobilePreviewPage.clicksubmit()
    })
    await test.step("Verify Spanish Language Applaid Successfully", async () => {
        await mobilePreviewPage.clickMyProfile()
        await mobilePreviewPage.clickOkBtn()
        await mobilePreviewPage.clickLanguageSelectionInputField()
        await mobilePreviewPage.selectSpanish()
        await mobilePreviewPage.verifySpanishLanguageApplaidSuccessfully()
    })
})
test("TL003-010 | Validate User Selectable Arabic Language Change Functionality Working Properly on Admin Side", async ({ loginPage, guesstheScorePage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserSelectableRadioBtn();
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()
        // await languagePage.deselectArabicLanguage()
        await languagePage.selectArabicLanguage()
        // await languagePage.deselectRussianLanguage()
        // await languagePage.deselectFranciasLanguage()
        // await languagePage.deselectEnglishLanguage()
        await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    // await test.step("Click Prize Drop Section", async () => {
    //     //click Prize Drop Section
    //     await guesstheScorePage.clickGuessTheScoreSection()
    // })
    // await test.step("now click on start button on Admin site", async () => {
    //     // await prizeDropPage.clickstartbutton()
    //     // await prizeDropPage.clickStartGameOkBtn()
    // })
    // let newTab = null;
    // let newmobilePreviewPage: mobilePreviewPage
    // await test.step("now open the game in mobile view", async () => {
    //     //click Mobile Link Btn
    //     await MainMenu.clickMobileLinkBtn()
    //     //now click on open button
    //     newTab = await MainMenu.clickMobileLinkOpenBtn()
    //     newmobilePreviewPage = new mobilePreviewPage(newTab)
    //     // await MainMenu.click_closebutton_in_mobilelinkmodal()
    // })
    // await test.step("Input Additional Information For Mobile Screen", async () => {
    //     await newmobilePreviewPage.typephoneno()
    //     await newmobilePreviewPage.selectbirthdate()
    //     await newmobilePreviewPage.typeAge()
    //     await newmobilePreviewPage.typeemail()
    //     await newmobilePreviewPage.typezip()
    //     await newmobilePreviewPage.clicksubmit()
    // })
    // await test.step("Verify Spanish Language Applaid Successfully", async () => {
    //     await newmobilePreviewPage.clickMyProfile()
    //     await newmobilePreviewPage.clickOkBtn()
    //     await newmobilePreviewPage.clickLanguageSelectionInputField()
    //     await newmobilePreviewPage.selectArabic()
    //     await newmobilePreviewPage.verifyArabicLanguageApplaidSuccessfully()
    // })
})
test("TL003-011 | Validate User Selectable Arabic Language Change Functionality Working Properly on Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Click Prize Drop Section", async () => {
        //click Prize Drop Section
        await guesstheScorePage.clickGuessTheScoreSection()
    })
    await test.step("now click on start button on Admin site", async () => {
        // await prizeDropPage.clickstartbutton()
        // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab = null;
    let newmobilePreviewPage: mobilePreviewPage
    await test.step("now open the game in mobile view", async () => {
        //click Mobile Link Btn
        await MainMenu.clickMobileLinkBtn()
        //now click on open button
        newTab = await MainMenu.clickMobileLinkOpenBtn()
        newmobilePreviewPage = new mobilePreviewPage(newTab)
        // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })
    await test.step("Input Additional Information For Mobile Screen", async () => {
        // //await newmobilePreviewPage.typephoneno()
        // await newmobilePreviewPage.selectbirthdate()
        // await newmobilePreviewPage.typeAge()
        // await newmobilePreviewPage.typeemail()
        // await newmobilePreviewPage.typezip()
        // await newmobilePreviewPage.clicksubmit()
    })
    await test.step("Verify Spanish Language Applaid Successfully", async () => {
        await newmobilePreviewPage.clickMyProfile()
        await newmobilePreviewPage.clickOkBtn()
        await newmobilePreviewPage.clickLanguageSelectionInputField()
        await newmobilePreviewPage.selectArabic()
        await newmobilePreviewPage.verifyArabicLanguageApplaidSuccessfully()
    })
})
test("TL003-012 | Validate Forced Language Arabic Language Change Functionality Working Properly on Admin Side", async ({ loginPage, guesstheScorePage, menuPage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserForceLanguageOption()
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickForceLanguageInputField()
        await languagePage.selectArabicLanguage()
        await page.waitForLoadState("networkidle")
        // await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    await test.step("Click Prize Drop Section", async () => {
        //click Prize Drop Section
        await guesstheScorePage.clickGuessTheScoreSection()
    })
    await test.step("now click on start button on Admin site", async () => {
        // await prizeDropPage.clickstartbutton()
        // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab = null;
    let newmobilePreviewPage: mobilePreviewPage
    await test.step("now open the game in mobile view", async () => {
        //click Mobile Link Btn
        await MainMenu.clickMobileLinkBtn()
        //now click on open button
        newTab = await MainMenu.clickMobileLinkOpenBtn()
        newmobilePreviewPage = new mobilePreviewPage(newTab)
        // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })
    await test.step("Input Additional Information For Mobile Screen", async () => {
        //await newmobilePreviewPage.typephoneno()
        // await newmobilePreviewPage.selectbirthdate()
        // await newmobilePreviewPage.typeAge()
        // await newmobilePreviewPage.typeemail()
        // await newmobilePreviewPage.typezip()
        // await newmobilePreviewPage.clicksubmit()
    })
    await test.step("Verify Spanish Language Applaid Successfully", async () => {
        await newmobilePreviewPage.clickMyProfile()
        await newmobilePreviewPage.clickOkBtn()
        await newmobilePreviewPage.verifyArabicLanguageApplaidSuccessfully()
    })
})
test.skip("TL003-014 | Validate User Selectable Russian Language Change Functionality Working Properly on Admin Side", async ({ loginPage, guesstheScorePage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserForceLanguageOption()
        await languagePage.clickUserSelectableRadioBtn();
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        // await languagePage.clickUserProfileSelectableInputField()
        // await languagePage.selectEnglishLanguage()
        await languagePage.clickUserProfileSelectableInputField()
        await languagePage.selectRussianLanguage()
        await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    await test.step("Click Prize Drop Section", async () => {
        //click Prize Drop Section
        await guesstheScorePage.clickGuessTheScoreSection()
    })
    await test.step("now click on start button on Admin site", async () => {
        // await prizeDropPage.clickstartbutton()
        // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab = null;
    let newmobilePreviewPage: mobilePreviewPage
    await test.step("now open the game in mobile view", async () => {
        //click Mobile Link Btn
        await MainMenu.clickMobileLinkBtn()
        //now click on open button
        newTab = await MainMenu.clickMobileLinkOpenBtn()
        newmobilePreviewPage = new mobilePreviewPage(newTab)
        // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })
    await test.step("Input Additional Information For Mobile Screen", async () => {
        //await newmobilePreviewPage.typephoneno()
        // await newmobilePreviewPage.selectbirthdate()
        // await newmobilePreviewPage.typeAge()
        // await newmobilePreviewPage.typeemail()
        // await newmobilePreviewPage.typezip()
        // await newmobilePreviewPage.clicksubmit()
    })
    await test.step("Verify Spanish Language Applaid Successfully", async () => {
        await newmobilePreviewPage.clickMyProfile()
        await newmobilePreviewPage.clickOkBtn()
        await newmobilePreviewPage.clickLanguageSelectionInputField()
        await newmobilePreviewPage.selectRussian()
        await newmobilePreviewPage.verifyRussianLanguageApplaidSuccessfully()
    })
})
test("TL003-022 | Validate User Selectable English Language Change Functionality Working Properly on Admin Side", async ({ loginPage, guesstheScorePage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserForceLanguageOption()
        await languagePage.clickUserSelectableRadioBtn();
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()
        // await languagePage.deselectEnglishLanguage()
        await languagePage.selectEnglishLanguage()
        await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    // await test.step("Click Prize Drop Section", async () => {
    //     //click Prize Drop Section
    //     await guesstheScorePage.clickGuessTheScoreSection()
    // })
    // await test.step("now click on start button on Admin site", async () => {
    //     // await prizeDropPage.clickstartbutton()
    //     // await prizeDropPage.clickStartGameOkBtn()
    // })
    // let newTab = null;
    // let newmobilePreviewPage: mobilePreviewPage
    // await test.step("now open the game in mobile view", async () => {
    //     //click Mobile Link Btn
    //     await MainMenu.clickMobileLinkBtn()
    //     //now click on open button
    //     newTab = await MainMenu.clickMobileLinkOpenBtn()
    //     newmobilePreviewPage = new mobilePreviewPage(newTab)
    //     // await MainMenu.click_closebutton_in_mobilelinkmodal()
    // })
    // await test.step("Input Additional Information For Mobile Screen", async () => {
    //     await newmobilePreviewPage.typephoneno()
    //     await newmobilePreviewPage.selectbirthdate()
    //     await newmobilePreviewPage.typeAge()
    //     await newmobilePreviewPage.typeemail()
    //     await newmobilePreviewPage.typezip()
    //     await newmobilePreviewPage.clicksubmit()
    // })
    // await test.step("Verify Spanish Language Applaid Successfully", async () => {
    //     await newmobilePreviewPage.clickMyProfile()
    //     await newmobilePreviewPage.clickOkBtn()
    //     await newmobilePreviewPage.clickLanguageSelectionInputField()
    //     await newmobilePreviewPage.selectEnglish()
    //     await newmobilePreviewPage.verifyEnglishLanguageApplaidSuccessfully()
    // })
})
test("TL003-023 | Validate User Selectable English Language Change Functionality Working Properly on Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Click Prize Drop Section", async () => {
        //click Prize Drop Section
        await guesstheScorePage.clickGuessTheScoreSection()
    })
    await test.step("now click on start button on Admin site", async () => {
        // await prizeDropPage.clickstartbutton()
        // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab = null;
    let newmobilePreviewPage: mobilePreviewPage
    await test.step("now open the game in mobile view", async () => {
        //click Mobile Link Btn
        await MainMenu.clickMobileLinkBtn()
        //now click on open button
        newTab = await MainMenu.clickMobileLinkOpenBtn()
        newmobilePreviewPage = new mobilePreviewPage(newTab)
        // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })
    await test.step("Input Additional Information For Mobile Screen", async () => {
        //await newmobilePreviewPage.typephoneno()
        // await newmobilePreviewPage.selectbirthdate()
        // await newmobilePreviewPage.typeAge()
        // await newmobilePreviewPage.typeemail()
        // await newmobilePreviewPage.typezip()
        // await newmobilePreviewPage.clicksubmit()
    })
    await test.step("Verify Spanish Language Applaid Successfully", async () => {
        await newmobilePreviewPage.clickMyProfile()
        await newmobilePreviewPage.clickOkBtn()
        await newmobilePreviewPage.clickLanguageSelectionInputField()
        await newmobilePreviewPage.selectEnglish()
        await newmobilePreviewPage.verifyEnglishLanguageApplaidSuccessfully()
    })
})
test("TL003-004 | Validate Forced Language Japanese Language Change Functionality Working Properly on Admin Side", async ({ loginPage, guesstheScorePage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("click main menu button", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("click mobile design ", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("click language page", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserForceLanguageOption()
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickForceLanguageInputField()
        await languagePage.selectEnglishLanguage()
        await languagePage.clickForceLanguageInputField()
        await languagePage.selectJapaneseLanguage()
        await languagePage.verifyJapaneseLanguageSelectSuccessfully()
        // await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    await test.step("Click Prize Drop Section", async () => {
        //click Prize Drop Section
        await guesstheScorePage.clickGuessTheScoreSection()
    })
    await test.step("now click on start button on Admin site", async () => {
        // await prizeDropPage.clickstartbutton()
        // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab = null;
    let newmobilePreviewPage: mobilePreviewPage
    await test.step("now open the game in mobile view", async () => {
        //click Mobile Link Btn
        await MainMenu.clickMobileLinkBtn()
        //now click on open button
        newTab = await MainMenu.clickMobileLinkOpenBtn()
        newmobilePreviewPage = new mobilePreviewPage(newTab)
        // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })
    await test.step("Input Additional Information For Mobile Screen", async () => {
        //await newmobilePreviewPage.typephoneno()
        // await newmobilePreviewPage.selectbirthdate()
        // await newmobilePreviewPage.typeAge()
        // await newmobilePreviewPage.typeemail()
        // await newmobilePreviewPage.typezip()
        // await newmobilePreviewPage.clicksubmit()
    })
    await test.step("Verify Spanish Language Applaid Successfully", async () => {
        await newmobilePreviewPage.clickMyProfile()
        await newmobilePreviewPage.clickOkBtn()
        await newmobilePreviewPage.verifyJapaneseLanguageApplaidSuccessfully()
    })
})
// test.skip("TL003-005 | Validate Forced Language Japanese Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.verifyJapaneseLanguageApplaidSuccessfully()
//     })
// })
// test("TL003-007 | Validate User Selectable Spanish Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.clickLanguageSelectionInputField()
//         await newmobilePreviewPage.selectSpanish()
//         await newmobilePreviewPage.verifySpanishLanguageApplaidSuccessfully()
//     })
// })
test("TL003-008 | Validate Forced Language Spanish Language Change Functionality Working Properly on Admin Side", async ({ loginPage, guesstheScorePage, menuPage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserForceLanguageOption()
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickForceLanguageInputField()
        await languagePage.selectEnglishLanguage()
        await languagePage.clickForceLanguageInputField()
        await languagePage.selectSpanishLanguage()
        await page.waitForTimeout(2000)
        // await languagePage.verifySpanishLanguageText()
        // await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    await test.step("Click Prize Drop Section", async () => {
        //click Prize Drop Section
        await guesstheScorePage.clickGuessTheScoreSection()
    })
    await test.step("now click on start button on Admin site", async () => {
        // await prizeDropPage.clickstartbutton()
        // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab = null;
    let newmobilePreviewPage: mobilePreviewPage
    await test.step("now open the game in mobile view", async () => {
        //click Mobile Link Btn
        await MainMenu.clickMobileLinkBtn()
        //now click on open button
        newTab = await MainMenu.clickMobileLinkOpenBtn()
        newmobilePreviewPage = new mobilePreviewPage(newTab)
        // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })
    await test.step("Input Additional Information For Mobile Screen", async () => {
        //await newmobilePreviewPage.typephoneno()
        // await newmobilePreviewPage.selectbirthdate()
        // await newmobilePreviewPage.typeAge()
        // await newmobilePreviewPage.typeemail()
        // await newmobilePreviewPage.typezip()
        // await newmobilePreviewPage.clicksubmit()
    })
    await test.step("Verify Spanish Language Applaid Successfully", async () => {
        await newmobilePreviewPage.clickMyProfile()
        await newmobilePreviewPage.clickOkBtn()
        await newmobilePreviewPage.verifySpanishLanguageApplaidSuccessfully()
    })
})
// test.skip("TL003-009 | Validate Forced Language Spanish Language Change Properly Show in Mobile Screen", async ({ loginPage, MainMenu, guesstheScorePage, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.verifySpanishLanguageApplaidSuccessfully()
//     })
// })
// test("TL003-011 | Validate User Selectable Arabic Language Change Properly Show in Mobile Screen", async ({ loginPage, MainMenu, guesstheScorePage, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.clickLanguageSelectionInputField()
//         await newmobilePreviewPage.selectArabic()
//         await newmobilePreviewPage.verifyArabicLanguageApplaidSuccessfully()
//     })
// })
// test.skip("TL003-013 | Validate Forced Language Arabic Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.verifyArabicLanguageApplaidSuccessfully()
//     })
// })
// test("TL003-015 | Validate User Selectable Russian Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.clickLanguageSelectionInputField()
//         await newmobilePreviewPage.selectRussian()
//         await newmobilePreviewPage.verifyRussianLanguageApplaidSuccessfully()
//     })
// })
test("TL003-016 | Validate Forced Language Russian Language Change Functionality Working Properly on Admin Side", async ({ loginPage, mobilePreviewPage, guesstheScorePage, menuPage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserForceLanguageOption()
    })
    await test.step("Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickForceLanguageInputField()
        await languagePage.selectRussianLanguage()
        // await languagePage.verifyRussianLanguageSuccessfullySelected()
        // await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    await test.step("Click Prize Drop Section", async () => {
        //click Prize Drop Section
        await mobilePreviewPage.gotoUrl()
    })

    await test.step("Verify Spanish Language Applaid Successfully", async () => {
        await mobilePreviewPage.clickMyProfile()
        await mobilePreviewPage.clickOkBtn()
        await mobilePreviewPage.verifyRussianLanguageApplaidSuccessfully()
    })
})
// test.skip("TL003-017 | Validate Forced Language Russian Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.verifyRussianLanguageApplaidSuccessfully()
//     })
// })
test("TL003-018 | Validate User Selectable Francias Language Change Functionality Working Properly on Admin Side", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserSelectableRadioBtn();
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()
        await languagePage.deselectJapaneseLanguage()
        await languagePage.deselectSpanishLanguage()
        await languagePage.deselectArabicLanguage()
        await languagePage.deselectRussianLanguage()
        await languagePage.deselectFranciasLanguage()
        await languagePage.deselectEnglishLanguage()
        await languagePage.clickOutSideOfLanguageSelectionModal()
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserSelectableRadioBtn();
        await page.waitForTimeout(2000)
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()
        //    await languagePage.deselectFranciasLanguage()
        await languagePage.selectFranciasLanguage()
        await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    await test.step("Click Prize Drop Section", async () => {
        //click Prize Drop Section
        await mobilePreviewPage.gotoUrl()
    })

    await test.step("Verify Spanish Language Applaid Successfully", async () => {
        await mobilePreviewPage.clickMyProfile()
        await mobilePreviewPage.clickOkBtn()
        await mobilePreviewPage.clickLanguageSelectionInputField()
        await mobilePreviewPage.selectFrancias()
        await mobilePreviewPage.verifyFranciasLanguageApplaidSuccessfully()
    })
})
// test.skip("TL003-019 | Validate User Selectable Francias Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.clickLanguageSelectionInputField()
//         await newmobilePreviewPage.selectFrancias()
//         await newmobilePreviewPage.verifyFranciasLanguageApplaidSuccessfully()
//     })
// })
test("TL003-020 | Validate Forced Language Francias Language Change Functionality Working Properly on Admin Side", async ({ loginPage, guesstheScorePage, menuPage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserForceLanguageOption()
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickForceLanguageInputField()
        await languagePage.selectFranciasLanguage()
        await page.waitForLoadState("networkidle")
        // await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    await test.step("Click Prize Drop Section", async () => {
        //click Prize Drop Section
        await guesstheScorePage.clickGuessTheScoreSection()
    })
    await test.step("now click on start button on Admin site", async () => {
        // await prizeDropPage.clickstartbutton()
        // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab = null;
    let newmobilePreviewPage: mobilePreviewPage
    await test.step("now open the game in mobile view", async () => {
        //click Mobile Link Btn
        await MainMenu.clickMobileLinkBtn()
        //now click on open button
        newTab = await MainMenu.clickMobileLinkOpenBtn()
        newmobilePreviewPage = new mobilePreviewPage(newTab)
        // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })
    await test.step("Input Additional Information For Mobile Screen", async () => {
        //await newmobilePreviewPage.typephoneno()
        // await newmobilePreviewPage.selectbirthdate()
        // await newmobilePreviewPage.typeAge()
        // await newmobilePreviewPage.typeemail()
        // await newmobilePreviewPage.typezip()
        // await newmobilePreviewPage.clicksubmit()
    })
    await test.step("Verify Spanish Language Applaid Successfully", async () => {
        await newmobilePreviewPage.clickMyProfile()
        await newmobilePreviewPage.clickOkBtn()
        await newmobilePreviewPage.verifyFranciasLanguageApplaidSuccessfully()
    })
})
// test.skip("TL003-021 | Validate Forced Language Francias Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.verifyFranciasLanguageApplaidSuccessfully()
//     })
// })
// test("TL003-023 | Validate User Selectable English Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.clickLanguageSelectionInputField()
//         await newmobilePreviewPage.selectEnglish()
//         await newmobilePreviewPage.verifyEnglishLanguageApplaidSuccessfully()
//     })
// })
//Forced Language Section Start Here
// test("TL003-013 | Validate Forced Language Japanese Language Change Functionality Working Properly on Admin Side", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.clickHomeAvater();
//     })
//     await test.step("click main menu button", async () => {
//         await MainMenu.mainMenuBtn();
//     })
//     await test.step("click mobile design ", async () => {
//         await MainMenu.clickMobileDesign();
//     })
//     await test.step("click language page", async () => {
//         await languagePage.clickLanguagePage();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await languagePage.clickUserForceLanguageOption()
//     })
//     await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
//         //Verify click on the user profile selectable input field
//         await languagePage.clickForceLanguageInputField()
//         await languagePage.selectEnglishLanguage()
//         await languagePage.clickForceLanguageInputField()
//         await languagePage.selectJapaneseLanguage()
//         await languagePage.verifyJapaneseLanguageSelectSuccessfully()
//     })
// })
// test("TL003-014 | Validate Forced Language Japanese Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.verifyJapaneseLanguageApplaidSuccessfully()
//     })
// })
// test("TL003-015 | Validate Forced Language Spanish Language Change Functionality Working Properly on Admin Side", async ({ loginPage, menuPage, MainMenu, languagePage, page, }, testInfo) => {
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.clickHomeAvater();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.mainMenuBtn();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.clickMobileDesign();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await languagePage.clickLanguagePage();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await languagePage.clickUserForceLanguageOption()
//     })
//     await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
//         //Verify click on the user profile selectable input field
//         await languagePage.clickForceLanguageInputField()
//         await languagePage.selectSpanishLanguage()
//         await menuPage.clickMenuPage()
//         await languagePage.clickLanguagePage()
//         await page.waitForLoadState("networkidle")
//         await languagePage.verifySpanishLanguageText()
//     })
// })
// test("TL003-016 | Validate Forced Language Spanish Language Change Properly Show in Mobile Screen", async ({ loginPage, MainMenu, guesstheScorePage, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.verifySpanishLanguageApplaidSuccessfully()
//     })
// })
// test("TL003-017 | Validate Forced Language Arabic Language Change Functionality Working Properly on Admin Side", async ({ loginPage, menuPage, MainMenu, languagePage, page, }, testInfo) => {
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.clickHomeAvater();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.mainMenuBtn();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.clickMobileDesign();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await languagePage.clickLanguagePage();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await languagePage.clickUserForceLanguageOption()
//     })
//     await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
//         //Verify click on the user profile selectable input field
//         await languagePage.clickForceLanguageInputField()
//         await languagePage.selectArabicLanguage()
//         await page.waitForLoadState("networkidle")
//     })
// })
// test("TL003-018 | Validate Forced Language Arabic Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.verifyArabicLanguageApplaidSuccessfully()
//     })
// })
// test("TL003-019 | Validate Forced Language Russian Language Change Functionality Working Properly on Admin Side", async ({ loginPage, menuPage, MainMenu, languagePage, page, }, testInfo) => {
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.clickHomeAvater();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.mainMenuBtn();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.clickMobileDesign();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await languagePage.clickLanguagePage();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await languagePage.clickUserForceLanguageOption()
//     })
//     await test.step("Verify Admin Select Profile flow Language", async () => {
//         //Verify click on the user profile selectable input field
//         await languagePage.clickForceLanguageInputField()
//         await languagePage.selectRussianLanguage()
//         await languagePage.verifyRussianLanguageSuccessfullySelected()
//     })
// })
// test("TL003-020 | Validate Forced Language Russian Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.verifyRussianLanguageApplaidSuccessfully()
//     })
// })
// test("TL003-021 | Validate Forced Language Francias Language Change Functionality Working Properly on Admin Side", async ({ loginPage, menuPage, MainMenu, languagePage, page, }, testInfo) => {
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.clickHomeAvater();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.mainMenuBtn();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await MainMenu.clickMobileDesign();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await languagePage.clickLanguagePage();
//     })
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await languagePage.clickUserForceLanguageOption()
//     })
//     await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
//         //Verify click on the user profile selectable input field
//         await languagePage.clickForceLanguageInputField()
//         await languagePage.selectFranciasLanguage()
//         await page.waitForLoadState("networkidle")
//     })
// })
// test("TL003-022 | Validate Forced Language Francias Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.verifyFranciasLanguageApplaidSuccessfully()
//     })
// })
test.skip("TL003-024 | Validate Forced Language English Language Change Functionality Working Properly on Admin Side", async ({ loginPage, guesstheScorePage, menuPage, MainMenu, languagePage, page, }, testInfo) => {
    await test.step("Login Admin and Land to Home Screen", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserForceLanguageOption()
    })
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
        //Verify click on the user profile selectable input field
        await languagePage.clickForceLanguageInputField()
        await languagePage.selectEnglishLanguage()
        await page.waitForLoadState("networkidle")
        // await languagePage.clickOutSideOfLanguageSelectionModal()
        await languagePage.clickLanguagePage()
    })
    await test.step("Click Prize Drop Section", async () => {
        //click Prize Drop Section
        await guesstheScorePage.clickGuessTheScoreSection()
    })
    await test.step("now click on start button on Admin site", async () => {
        // await prizeDropPage.clickstartbutton()
        // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab = null;
    let newmobilePreviewPage: mobilePreviewPage
    await test.step("now open the game in mobile view", async () => {
        //click Mobile Link Btn
        await MainMenu.clickMobileLinkBtn()
        //now click on open button
        newTab = await MainMenu.clickMobileLinkOpenBtn()
        newmobilePreviewPage = new mobilePreviewPage(newTab)
        // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })
    await test.step("Input Additional Information For Mobile Screen", async () => {
        //await newmobilePreviewPage.typephoneno()
        // await newmobilePreviewPage.selectbirthdate()
        // await newmobilePreviewPage.typeAge()
        // await newmobilePreviewPage.typeemail()
        // await newmobilePreviewPage.typezip()
        // await newmobilePreviewPage.clicksubmit()
    })
    await test.step("Verify Spanish Language Applaid Successfully", async () => {
        await newmobilePreviewPage.clickMyProfile()
        await newmobilePreviewPage.clickOkBtn()
        await newmobilePreviewPage.verifyEnglishLanguageApplaidSuccessfully()
    })
})
// test.skip("TL003-025 | Validate Forced Language English Language Change Properly Show in Mobile Screen", async ({ loginPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//     await test.step("Login Admin And land To Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("Click Prize Drop Section", async () => {
//         //click Prize Drop Section
//         await guesstheScorePage.clickGuessTheScoreSection()
//     })
//     await test.step("now click on start button on Admin site", async () => {
//         // await prizeDropPage.clickstartbutton()
//         // await prizeDropPage.clickStartGameOkBtn()
//     })
//     let newTab = null;
//     let newmobilePreviewPage: mobilePreviewPage
//     await test.step("now open the game in mobile view", async () => {
//         //click Mobile Link Btn
//         await MainMenu.clickMobileLinkBtn()
//         //now click on open button
//         newTab = await MainMenu.clickMobileLinkOpenBtn()
//         newmobilePreviewPage = new mobilePreviewPage(newTab)
//         // await MainMenu.click_closebutton_in_mobilelinkmodal()
//     })
//     await test.step("Input Additional Information For Mobile Screen", async () => {
//         await newmobilePreviewPage.typephoneno()
//         await newmobilePreviewPage.selectbirthdate()
//         await newmobilePreviewPage.typeAge()
//         await newmobilePreviewPage.typeemail()
//         await newmobilePreviewPage.typezip()
//         await newmobilePreviewPage.clicksubmit()
//     })
//     await test.step("Verify Spanish Language Applaid Successfully", async () => {
//         await newmobilePreviewPage.clickMyProfile()
//         await newmobilePreviewPage.clickOkBtn()
//         await newmobilePreviewPage.verifyEnglishLanguageApplaidSuccessfully()
//     })
// })
// test("TL003-01 | Verify Admin Select Forced Language", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         await MainMenu.clickHomeAvater();
//         await MainMenu.mainMenuBtn();
//         await MainMenu.clickMobileDesign();
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("TL003-03 | Verify Admin Select Forced Language", async () => {
//         await languagePage.clickLanguagePage()
//         await page.waitForTimeout(2000)
//         // //Verify user forced language text
//         // await languagePage.checkUserForcedLanguageText()
//         //Click on the user force language field
//         await languagePage.clickUserForceLanguageOption()
//         await page.waitForTimeout(2000)
//         //click on the force language input field
//         await languagePage.clickForceLanguageInputField()
//         await page.waitForTimeout(1000)
//         //select english language for user registration
//         await languagePage.selectEnglishLanguage()
//         await page.waitForTimeout(1000)
//         await languagePage.clickForceLanguageInputField()
//         //Verify user forced language text
//         await languagePage.checkUserForcedLanguageText()
//         //click on the force language input field
//         await languagePage.clickForceLanguageInputField()
//         //select Francias language for user registration
//         await languagePage.selectFranciasLanguage()
//         await page.waitForTimeout(1000)
//         //Verify user forced language text
//         await languagePage.checkUserForcedLanguageText()
//         //click on the force language input field
//         await languagePage.clickForceLanguageInputField()
//         //select Russian language for user registration
//         await languagePage.selectRussianLanguage()
//         await page.waitForTimeout(1000)
//         //Verify user forced language text
//         await languagePage.checkUserForcedLanguageText()
//         //click on the force language input field
//         await languagePage.clickForceLanguageInputField()
//         //select Arabic language for user registration
//         await languagePage.selectArabicLanguage()
//         await page.waitForTimeout(1000)
//         //Verify user forced language text
//         await languagePage.checkUserForcedLanguageText()
//         //click on the force language input field
//         await languagePage.clickForceLanguageInputField()
//         //select Spanish language for user registration
//         await languagePage.selectSpanishLanguage()
//         await page.waitForTimeout(1000)
//         //Verify user forced language text
//         await languagePage.checkUserForcedLanguageText()
//         //click on the force language input field
//         await languagePage.clickForceLanguageInputField()
//         //select Japanese language for user registration
//         await languagePage.selectJapaneseLanguage()
//         //click on the force language input field
//         await languagePage.clickForceLanguageInputField()
//         await page.waitForTimeout(1000)
//         //select english language for user registration
//         await languagePage.selectEnglishLanguage()
//         await page.waitForTimeout(1000)
//         //Verify that the User Selectable Language checkbox is clicked or not
//         await languagePage.clickUserSelectableRadioBtn()
//     })
// })
// test("TL003-02 | Validate Admin Select Registration flow Language", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         await MainMenu.clickHomeAvater();
//         await MainMenu.mainMenuBtn();
//         await MainMenu.clickMobileDesign();
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("TL003-01 | Verify Admin Select Registration flow Language", async () => {
//         //click on the language page
//         await languagePage.clickLanguagePage()
//         //check the language page header text
//         await languagePage.checkLanguageHeaderText()
//         //check language page controls button title text
//         await languagePage.checkLanguageControlsText()
//         // //there is function if the button is disable then click on the disabled button
//         // await languagePage.checkLanguageControlsDisabledBtn()
//         //Verify that the User Selectable Language checkbox is clicked or not
//         await languagePage.clickUserSelectableRadioBtn()
//         await page.waitForTimeout(3000)
//         await languagePage.verifyUserSelectableHeaderText()
//         //Verify click on the user registration selectable input field
//         await languagePage.clickUserRegistrationSelectableInputField()
//         //select english language for user registration
//         await languagePage.selectEnglishLanguage()
//         await page.waitForTimeout(1000)
//         //select Francias language for user registration
//         await languagePage.selectFranciasLanguage()
//         await page.waitForTimeout(1000)
//         // await languagePage.clickUserRegistrationSelectableInputField()
//         //select Russian language for user registration
//         await languagePage.selectRussianLanguage()
//         await page.waitForTimeout(1000)
//         // await languagePage.clickUserRegistrationSelectableInputField()
//         //select Arabic language for user registration
//         await languagePage.selectArabicLanguage()
//         await page.waitForTimeout(1000)
//         // await languagePage.clickUserRegistrationSelectableInputField()
//         //select Spanish language for user registration
//         await languagePage.selectSpanishLanguage()
//         await page.waitForTimeout(1000)
//         // await languagePage.clickUserRegistrationSelectableInputField()
//         //select Japanese language for user registration
//         await languagePage.selectJapaneseLanguage()
//         await page.waitForTimeout(1000)
//         // await languagePage.clickUserRegistrationSelectableInputField()
//     })
// })
// test("TL003-03 | Verify Admin Select Profile flow Language", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {
//     await test.step("Login Admin and Land to Home Screen", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         await MainMenu.clickHomeAvater();
//         await MainMenu.mainMenuBtn();
//         await MainMenu.clickMobileDesign();
//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })
//     })
//     await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {
//         await languagePage.clickLanguagePage()
//         // //Verify user selectable text
//         // await languagePage.checkUserSelectableText()
//         await languagePage.clickUserSelectableRadioBtn()
//         //Verify click on the user profile selectable input field
//         await languagePage.clickUserProfileSelectableInputField()
//         //select english language for user registration
//         await languagePage.selectEnglishLanguage()
//         //select Francias language for user registration
//         await languagePage.selectFranciasLanguage()
//         //select Russian language for user registration
//         await languagePage.selectRussianLanguage()
//         //select Arabic language for user registration
//         await languagePage.selectArabicLanguage()
//         //select Spanish language for user registration
//         await languagePage.selectSpanishLanguage()
//         //select Japanese language for user registration
//         await languagePage.selectJapaneseLanguage()
//     })
// })
