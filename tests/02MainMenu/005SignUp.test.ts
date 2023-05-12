import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
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
        await singupPage.automaticallyAssignUserName()

        await languagePage.clickLanguagePage()
        await languagePage.clickUserForceLanguageOption()
        await languagePage.clickForceLanguageInputField()
        await languagePage.selectEnglishLanguage()
})
test("005SU-001 | Validate Admin Successfully Check Socal Media Login From Admin Side ", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.clickSocialMediaLoginPhoneNumberValidationRadioBtn()
                await singupPage.clickSocialMediaLoginRadioBtn()
                await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
        })
})


// test("005SU-002 | Validate Socal Media Login With Google Functionality Successfully works on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//         await test.step("Login Admin And land To Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 const screenshot = await page.screenshot();
//                 await testInfo.attach("login screenshot", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//         })
//         await test.step("Click Guess The Scrore Section", async () => {
//                 await guesstheScorePage.clickGuessTheScoreSection()
//         })
//         let newTab = null;
//         let googleLoginPage = null
//         let mobilePreviewPage: mobilePreviewPage
//         await test.step("now open the game in mobile view", async () => {
//                 //click Mobile Link Btn
//                 await MainMenu.clickMobileLinkBtn()
//                 //now click on open button
//                 newTab = await MainMenu.clickMobileLinkOpenBtn()
//                 mobilePreviewPage = new mobilePreviewPage(newTab)
//         })
//         await test.step("Input Additional Information For Mobile Screen", async () => {
//                 googleLoginPage = await mobilePreviewPage.clickLoginWithGoogleIconIsVisible()
//                 googleLoginPage = new mobilePreviewPage(googleLoginPage)
//                 await googleLoginPage.inputEamilForLoginWithGoogle()
//                 await googleLoginPage.clickSignInWithGoogleWindowNextBtn()
//                 // await googleLoginPage.inputPasswordForLoginWithGoogle()
//                 // await googleLoginPage.clickSignInWithGoogleWindowNextBtn()
//         })
// })
// test("005SU-003 | Validate Socal Media Login With Facebook Functionality Successfully works on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//         await test.step("Login Admin And land To Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 const screenshot = await page.screenshot();
//                 await testInfo.attach("login screenshot", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//         })
//         await test.step("Click Guess The Scrore Section", async () => {
//                 await guesstheScorePage.clickGuessTheScoreSection()
//         })
//         let newTab = null;
//         let googleLoginPage = null
//         let mobilePreviewPage: mobilePreviewPage
//         await test.step("now open the game in mobile view", async () => {
//                 //click Mobile Link Btn
//                 await MainMenu.clickMobileLinkBtn()
//                 //now click on open button
//                 newTab = await MainMenu.clickMobileLinkOpenBtn()
//                 mobilePreviewPage = new mobilePreviewPage(newTab)
//         })
//         await test.step("Input Additional Information For Mobile Screen", async () => {
//                 googleLoginPage = await mobilePreviewPage.clickLoginWithFacebookIconIsVisible()
//                 googleLoginPage = new mobilePreviewPage(googleLoginPage)
//                 await googleLoginPage.inputEamilForLoginWithFacebook()
//                 await googleLoginPage.inputPasswordForLoginWithFacebook()
//                 await googleLoginPage.clickSignInWithFacebookWindowLoginBtn()
//                 // await googleLoginPage.clickContineuWithFacebookBtn()
//                 // await googleLoginPage.inputPasswordForLoginWithGoogle()
//                 // await googleLoginPage.clickSignInWithGoogleWindowNextBtn()
//         })
// })
// test("005SU-004 | Validate Socal Media Login With Microsoft Functionality Successfully works on Mobile Screen", async ({ loginPage,mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//         await test.step("Go to The Game Url", async () => {
//                 await mobilePreviewPage.gotoUrl()
//         })

//         let newTab = null;
//         let googleLoginPage = null;
//         let mobilePreviewPage: mobilePreviewPage
//         await test.step("Input Additional Information For Mobile Screen", async () => {

//                 mobilePreviewPage = await mobilePreviewPage.clickLoginWithMicrosoftIconIsVisible()
//                 googleLoginPage = new mobilePreviewPage(newTab)
//                 await googleLoginPage.inputEamilForLoginWithMicrosoft()
//                 await googleLoginPage.clickNextBtnOnMicrosoftWindow()
//                 await googleLoginPage.inputPasswordForLoginWithMicrosoft()
//                 await googleLoginPage.clickSignInBtnOnMicrosoftWindow()
//                 // await googleLoginPage.inputPasswordForLoginWithGoogle()
//                 // await googleLoginPage.clickSignInWithGoogleWindowNextBtn()
//         })
// })


test("005SU-005 | Validate Admin Successfully Unchecked Socal Media Login Option ", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickSocialMediaLoginPhoneNumberValidationRadioBtn()
        })
})
test("005SU-006 | Validate Social Media Login Options Hide Functionality Successfully Works on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.verifyLoginWithGoogleIconIsHidden()
                await mobilePreviewPage.verifyLoginWithFacebookIconIsHidden()
                await mobilePreviewPage.verifyLoginWithMicrosoftIconIsHidden()
        })
})
test("005SU-007 | Validate Admin Successfully Check Phone Varification Option From Admin Side ", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickSocialMediaLoginPhoneNumberValidationRadioBtn()
        })
})
test("005SU-008 | Validate Phone Number Validation Options Functionality Successfully Works on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.verifyLoginWithPhoneNumberIsVisible()
        })
})
test("005SU-009 | Validate Admin Successfully Check Email Validation Option From Admin Side ", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickSocialMediaLoginEmailValidationRadioBtn()
        })
})
test("005SU-010 | Validate Email Validation Options Functionality Successfully Works on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.verifyLoginWithEmailInputFieldIsVisible()
                await mobilePreviewPage.inputEamilForLoginWithEmail()
                await mobilePreviewPage.clickSignInBtn()
        })
})
test("005SU-011 | Validate Admin Successfully Check Anonymous Login Option From Admin Side ", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
                await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
                await singupPage.clickAdditionalInfoEmailAddressCheckbox()
                await singupPage.clickAdditionalInfoAgeCheckbox()
                await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
                await singupPage.clickAdditionalInfoZipCodeCheckbox()
        })
})
test("005SU-012 | Validate Anonymous Login Options Functionality Successfully Works on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
})
test("005SU-013 | Validate Admin Successfully Check Users age must be 13 years or older Option From Admin Side", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
                await singupPage.clickUserAgeMust13YearsOrOlderOptionRadioBtn()
                await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
                await singupPage.clickAdditionalInfoEmailAddressCheckbox()
                await singupPage.clickAdditionalInfoAgeCheckbox()
                await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
                await singupPage.clickAdditionalInfoZipCodeCheckbox()
        })
})
test("005SU-014 | Validate Users age must be 13 years or older Options Functionality Successfully Works on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
})
test("005SU-015 | Validate Admin Successfully Check define age or older to register Option From Admin Side", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
                await singupPage.clickUserAgeCustomOrOlderOptionRadioBtn()
                await singupPage.inputUserAgeCustomOrOlder()
                await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
                await singupPage.clickAdditionalInfoEmailAddressCheckbox()
                await singupPage.clickAdditionalInfoAgeCheckbox()
                await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
                await singupPage.clickAdditionalInfoZipCodeCheckbox()
        })
})
test("005SU-016 | Validate Check define age or older to register Options Functionality Successfully Works on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
})
test("005SU-017 | Validate Admin Successfully Check Options for user defined age Option From Admin Side", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
                await singupPage.clickUserAgeuserDefinedOptionRadioBtn()
                await singupPage.inputFirstUserAgeuserDefined()
                await singupPage.inputSecondUserAgeuserDefined()
                await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
                await singupPage.clickAdditionalInfoEmailAddressCheckbox()
                await singupPage.clickAdditionalInfoAgeCheckbox()
                await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
                await singupPage.clickAdditionalInfoZipCodeCheckbox()
        })
})
test("005SU-018 | Validate Options for user defined age Options Functionality Successfully Works on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
        })
})
test("005SU-019 | Validate Automatically assign username Functionality Successfully Works From Admin Side", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
                await singupPage.automaticallyAssignUserName()
                await singupPage.InputAutomaticallyAssignUserName()

                await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
                await singupPage.clickAdditionalInfoEmailAddressCheckbox()
                await singupPage.clickAdditionalInfoAgeCheckbox()
                await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
                await singupPage.clickAdditionalInfoZipCodeCheckbox()

                await singupPage.clickProfilePictureAddNewSetBtn()
        })
})
test("005SU-020 | Validate Automatically assign username Successfully Show on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
                await mobilePreviewPage.clickMyProfile()
                // await mobilePreviewPage.clickOkBtn()
                await mobilePreviewPage.verifyAutomaticallyAssignUserName()
        })
})
test("005SU-021 | Validate Add New Set For User Profile Picture Functionality Successfully Works From Admin Side", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
                await singupPage.clickProfilePictureAddNewSetBtn()
                await singupPage.inputProfilePictureSetTitle()
                await singupPage.uploadSetProfilePicture()
                await functions.fileUploadCropperWithoutIframe()
                await singupPage.clickSetProfilePictureWindowSaveBtn()
                await singupPage.clickProfilePictureSetDialogBox()
                await singupPage.selectAutoAssaigProfilePicture()
                await singupPage.clickAutoAssignRadioBtn()
                await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
                await singupPage.clickAdditionalInfoEmailAddressCheckbox()
                await singupPage.clickAdditionalInfoAgeCheckbox()
                await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
                await singupPage.clickAdditionalInfoZipCodeCheckbox()
        })
})
test("005SU-022 | Validate Admin Selected Profile Picture Successfully Show on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
                await mobilePreviewPage.clickMyProfile()
                await mobilePreviewPage.clickOkBtn()
                await mobilePreviewPage.clickProfilePictureEditButton()
                await mobilePreviewPage.verifyAutoAssaignProfilePictureUpdatedSuccessfully()
        })
})
test("005SU-023 | Validate Set User Profile Delete Functionality Functionality Successfully Works From Admin Side", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
                await singupPage.clickProfilePictureSetDialogBox()
                await singupPage.selectAutoAssaigProfilePicture()
                await singupPage.deleteAutoAssignProfile()
                await singupPage.clickAutoAssignRadioBtn()
                await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
                await singupPage.clickAdditionalInfoEmailAddressCheckbox()
                await singupPage.clickAdditionalInfoAgeCheckbox()
                await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
                await singupPage.clickAdditionalInfoZipCodeCheckbox()
        })
})
test("005SU-024 | Validate Admin Delete Profile Picture Successfully Show on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
                await mobilePreviewPage.clickMyProfile()
                await mobilePreviewPage.clickOkBtn()
                await mobilePreviewPage.clickProfilePictureEditButton()
                await mobilePreviewPage.UserSelecthisProfilePicture()
                await mobilePreviewPage.clickProfilePictureWindowSaveBtn()
        })
})
test("005SU-025 | Validate Set User Profile Edit Functionality Functionality Successfully Works From Admin Side", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
                await singupPage.clickProfilePictureSetDialogBox()
                await singupPage.selectAutoAssaigProfilePicture()
                await singupPage.editAutoAssaigProfilePicture()
                await singupPage.deleteUploadedProfilePicture()
                await singupPage.editUploadedSetProfilePicture()
                await singupPage.editProfilePictureSetTitle()
                await singupPage.clickSetProfilePictureWindowSaveBtn()
                //      await singupPage.verifyAutoAssignProfileSuccessfullyEdited()
                await singupPage.clickAutoAssignRadioBtn()
                await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
                await singupPage.clickAdditionalInfoEmailAddressCheckbox()
                await singupPage.clickAdditionalInfoAgeCheckbox()
                await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
                await singupPage.clickAdditionalInfoZipCodeCheckbox()
        })
})
test("005SU-026 | Validate Admin Edited Profile Picture Successfully Show on Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.typephoneno()
                await mobilePreviewPage.selectbirthdate()
                await mobilePreviewPage.typeAge()
                await mobilePreviewPage.typeemail()
                await mobilePreviewPage.typezip()
                await mobilePreviewPage.clicksubmit()
                await mobilePreviewPage.clickMyProfile()
                await mobilePreviewPage.clickOkBtn()
                await mobilePreviewPage.clickProfilePictureEditButton()
                await mobilePreviewPage.verifyAutoAssaignProfilePictureUpdatedSuccessfullyAfterEdit()
        })
})
test("005SU-027 | Validate Error Massage Successfully Show Without Terms & Conditions URL Add Text", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
                await singupPage.clickAddNewUrlBtn()
                await singupPage.verifyAddUrlTextFieldErrorAlertShowSuccessfully()
                await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
                await singupPage.clickAdditionalInfoEmailAddressCheckbox()
                await singupPage.clickAdditionalInfoAgeCheckbox()
                await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
                await singupPage.clickAdditionalInfoZipCodeCheckbox()
        })
})
test("005SU-028 | Validate Error Massage Successfully Show Without Terms & Conditions URL Add URL", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
                await singupPage.inputAddUrlText()
                await singupPage.clickAddNewUrlBtn()
                await singupPage.verifyAddUrlUrlInputErrorAlertShowSuccessfully()
        })
        await test.step("Enable All The Additional Information", async () => {
                await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
                await singupPage.clickAdditionalInfoEmailAddressCheckbox()
                await singupPage.clickAdditionalInfoAgeCheckbox()
                await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
                await singupPage.clickAdditionalInfoZipCodeCheckbox()
        })
})
test("005SU-029 | Validate Admin Successfully Add Terms & Conditions URL Using Valid Data", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.clickSocialMediaLoginEmailValidationRadioBtn()
                await singupPage.clickSocialMediaLoginRadioBtn()
                await singupPage.iftermsAndConditionUrlLinkAvailableThanDeleteIt()
                await singupPage.inputAddUrlText()
                await singupPage.inputAddUrlLink()
                await singupPage.clickAddNewUrlBtn()
        })
})
test("005SU-031 | Validate Terms & Conditions URL Link Successfully Show in Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.clickTermsAndConditionsLink()
                // await mobilePreviewPage.verifyTermsAndConditionsPageSuccessfullyShowOnMobileScreen()
        })
})
test("005SU-032 | Validate Admin Successfully Delete Terms & Conditions URL From Sign Up Page", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
                await singupPage.deleteTermsAndConditionAddedUrlLink()
        })
        await test.step("Enable All The Additional Information", async () => {
                // await singupPage.clickSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
        })
})
test("005SU-033 | Validate Admin Successfully Check Phone Number As Additional Info", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
        })
        await test.step("Enable All The Additional Information", async () => {
                await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
        })
        await test.step("Disable All The Additional Information", async () => {
                await singupPage.uncheckAdditionalInfoEmailAddressCheckbox()
                await singupPage.uncheckAdditionalInfoAgeCheckbox()
                await singupPage.uncheckAdditionalInfoDateOfBirthCheckbox()
                await singupPage.uncheckAdditionalInfoZipCodeCheckbox()
                await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
        })
})
test("005SU-034 | Validate Additional Information Phone Number Show in Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.inputPhoneNumberForAditionalInfo()
                await mobilePreviewPage.clickSubmitButton()
        })
})
test("005SU-035 | Validate Admin Successfully Check Email Address As Additional Info", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
        })
        await test.step("Enable All The Additional Information", async () => {
                await singupPage.clickAdditionalInfoEmailAddressCheckbox()
        })
        await test.step("Disable All The Additional Information", async () => {
                await singupPage.uncheckAdditionalInfoPhoneNumberCheckbox()
                // await singupPage.uncheckAdditionalInfoEmailAddressCheckbox()
                await singupPage.uncheckAdditionalInfoAgeCheckbox()
                await singupPage.uncheckAdditionalInfoDateOfBirthCheckbox()
                await singupPage.uncheckAdditionalInfoZipCodeCheckbox()
                await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
        })
})
test("005SU-036 | Validate Additional Information Email Address Show in Mobile Scree", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.inputEmailForAditionalInfo()
                await mobilePreviewPage.clickSubmitButton()
        })
})
test("005SU-037 | Validate Admin Successfully Check Age As Additional Info", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
        })
        await test.step("Enable All The Additional Information", async () => {
                await singupPage.clickAdditionalInfoAgeCheckbox()
        })
        await test.step("Disable All The Additional Information", async () => {
                await singupPage.uncheckAdditionalInfoPhoneNumberCheckbox()
                await singupPage.uncheckAdditionalInfoEmailAddressCheckbox()
                // await singupPage.uncheckAdditionalInfoAgeCheckbox()
                await singupPage.uncheckAdditionalInfoDateOfBirthCheckbox()
                await singupPage.uncheckAdditionalInfoZipCodeCheckbox()
                await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
        })
})
test("005SU-038 | Validate Additional Information Age Show in Mobile Scree", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.inputAgeForAditionalInfo()
                await mobilePreviewPage.clickSubmitButton()
        })
})
test("005SU-039 | Validate Admin Successfully Check Data Of Birth As Additional Info", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
        })
        await test.step("Enable All The Additional Information", async () => {
                await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
        })
        await test.step("Disable All The Additional Information", async () => {
                await singupPage.uncheckAdditionalInfoPhoneNumberCheckbox()
                await singupPage.uncheckAdditionalInfoEmailAddressCheckbox()
                await singupPage.uncheckAdditionalInfoAgeCheckbox()
                // await singupPage.uncheckAdditionalInfoDateOfBirthCheckbox()
                await singupPage.uncheckAdditionalInfoZipCodeCheckbox()
                await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
        })
})
test("005SU-040 | Validate Additional Information Data Of Birth Show in Mobile Scree", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.clickAdditionalDatePickterInputField()
                await mobilePreviewPage.clickAdditionalDateEditBtn()
                await mobilePreviewPage.inputAdditionalDate()
                await mobilePreviewPage.clickAdditionalDateDatePickerOkBtn()
                await mobilePreviewPage.clickSubmitButton()
        })
})
test("005SU-041 | Validate Admin Successfully Check Zip Code / Postal Code As Additional Info", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
        })
        await test.step("Enable All The Additional Information", async () => {
                await singupPage.clickAdditionalInfoZipCodeCheckbox()
        })
        await test.step("Disable All The Additional Information", async () => {
                await singupPage.uncheckAdditionalInfoPhoneNumberCheckbox()
                await singupPage.uncheckAdditionalInfoEmailAddressCheckbox()
                await singupPage.uncheckAdditionalInfoAgeCheckbox()
                await singupPage.uncheckAdditionalInfoDateOfBirthCheckbox()
                await singupPage.uncheckAdditionalInfoZipCodeCheckbox()
                await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
        })
})
test("005SU-042 | Validate Additional Information Zip Code / Postal Code Show in Mobile Scree", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.inputAdditionalZipCode()
                await mobilePreviewPage.clickSubmitButton()
        })
})
test("005SU-043 | Validate Admin Successfully Check Custom Question As Additional Info", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
        })
        await test.step("Enable All The Additional Information", async () => {
                await singupPage.deleteCustomQuestion()
                await singupPage.clickAdditionalCustomQuestionCheckBox()
                await singupPage.clickAdditionalCustomAddQuestionBtn()
                await singupPage.clickFreeFormCheckBox()
                await singupPage.inputCustomQuestionDiscription()
                await singupPage.enableCustomQuestionMandatoryForUser()
                await singupPage.clickCustomQuestionSaveBtn()
        })
        await test.step("Disable All The Additional Information", async () => {
                await singupPage.uncheckAdditionalInfoPhoneNumberCheckbox()
                await singupPage.uncheckAdditionalInfoEmailAddressCheckbox()
                await singupPage.uncheckAdditionalInfoAgeCheckbox()
                await singupPage.uncheckAdditionalInfoDateOfBirthCheckbox()
                await singupPage.uncheckAdditionalInfoZipCodeCheckbox()
                // await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
        })
})
test("005SU-044 | Validate Custom Question As Additional Info Successfully Show on mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.inputCustomQuestionForUser()
                await mobilePreviewPage.clickAddNewQuestionSubmitBtn()
        })
})
test("005SU-047 | Validate Admin Successfully Adding Custom Question As Multiple Choice", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
        })
        await test.step("Enable All The Additional Information", async () => {
                await singupPage.deleteCustomQuestion()
                await singupPage.clickAdditionalCustomQuestionCheckBox()
                await singupPage.clickAdditionalCustomAddQuestionBtn()
                await singupPage.clickMultipleChoiceCheckBox()
                await singupPage.inputCustomQuestionDiscription()
                await singupPage.clickCustomQuestionAddChoiceBtn()
                await singupPage.inputCustomQuestionAddChoiceDiscription()
                await singupPage.enableCustomQuestionMandatoryForUser()
                await singupPage.clickCustomQuestionSaveBtn()
                await singupPage.clickSignUpHomeScreenCheckBox()
        })
        await test.step("Disable All The Additional Information", async () => {
                await singupPage.uncheckAdditionalInfoPhoneNumberCheckbox()
                await singupPage.uncheckAdditionalInfoEmailAddressCheckbox()
                await singupPage.uncheckAdditionalInfoAgeCheckbox()
                await singupPage.uncheckAdditionalInfoDateOfBirthCheckbox()
                await singupPage.uncheckAdditionalInfoZipCodeCheckbox()
                // await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
        })
})
test("005SU-048 | Validate Added Custom Question As Multiple Choice Successfully Show on mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.clickCustomChoiceCheckBox()
                await mobilePreviewPage.clickAddNewQuestionSubmitBtn()
        })
})
test("005SU-051 | Validate Admin Successfully Check Box Sign-Up Home Screen", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
        })
        await test.step("Enable All The Additional Information", async () => {
                await singupPage.clickAdditionalCustomQuestionCheckBox()
                await singupPage.clickAdditionalCustomQuestionInCheckBox()
                await singupPage.deleteCustomQuestionIn()
                // await singupPage.clickAddCustomQuestionInCheckBox()
                await singupPage.clickSignUpHomeScreenCheckBox()
                await singupPage.clickAddCustomQuestionInBtn()
                await singupPage.clickSmsCheckBox()
                await singupPage.inputCustomOptionPrompt()
                await singupPage.clickCustomOptionPromptAutoCheckBox()
                await singupPage.inputCustomOptionPrompt()
                await singupPage.clickCustomQuestionSaveBtn()
        })
        await test.step("Disable All The Additional Information", async () => {
                await singupPage.uncheckAdditionalInfoPhoneNumberCheckbox()
                await singupPage.uncheckAdditionalInfoEmailAddressCheckbox()
                await singupPage.uncheckAdditionalInfoAgeCheckbox()
                await singupPage.uncheckAdditionalInfoDateOfBirthCheckbox()
                await singupPage.uncheckAdditionalInfoZipCodeCheckbox()
                // await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
        })
})
test("005SU-052 | Validate Box Sign-Up Home Screen Functionality Successfully Work On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.clickCustomChoiceCheckBox()
                await mobilePreviewPage.clickAddNewQuestionSubmitBtn()
        })
})
test("005SU-053 | Validate Admin Successfully Check Box Top of Custom Question's Screen", async ({ loginPage, MainMenu, functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Login Admin And Land to Home Screen", async () => {
                await singupPage.clickSignUpPage()
                await singupPage.verifyRegistrationOptionsText()
                await singupPage.uncheckSocialMediaLoginRadioBtn()
                await singupPage.clickAnonymousLoginOption()
        })
        await test.step("Enable All The Additional Information", async () => {
                await singupPage.clickAdditionalCustomQuestionCheckBox()
                await singupPage.clickAdditionalCustomQuestionInCheckBox()
                await singupPage.deleteCustomQuestionIn()
                await singupPage.clickAddCustomQuestionInCheckBox()
                await singupPage.clickTopOfCustomQuestionCheckBox()
                await singupPage.clickAddCustomQuestionInBtn()
                await singupPage.clickSmsCheckBox()
                await singupPage.inputCustomOptionPrompt()
                await singupPage.clickCustomOptionPromptAutoCheckBox()
                await singupPage.inputCustomOptionPrompt()
                await singupPage.clickCustomQuestionSaveBtn()
        })
        await test.step("Disable All The Additional Information", async () => {
                await singupPage.uncheckAdditionalInfoPhoneNumberCheckbox()
                await singupPage.uncheckAdditionalInfoEmailAddressCheckbox()
                await singupPage.uncheckAdditionalInfoAgeCheckbox()
                await singupPage.uncheckAdditionalInfoDateOfBirthCheckbox()
                await singupPage.uncheckAdditionalInfoZipCodeCheckbox()
                // await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()
        })
})
test("005SU-054 | Validate Box Sign-Up Home Screen Functionality Successfully Work On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await mobilePreviewPage.clickCustomChoiceCheckBoxWhenCustomQuestionInTop()
                await mobilePreviewPage.clickAddNewQuestionSubmitBtn()
        })
})
test("001 | Select All The Menu Ready For UI Varification", async ({ loginPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
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
// test("005SU-001 | Verify SignUp Page Functionality", async ({ loginPage, mobilePreviewPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 const screenshot = await page.screenshot();
//                 await testInfo.attach("login screenshot", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//         })
//         await test.step("005SU-001 | Verify Registration Options", async () => {
//                 const screenshot = await page.screenshot();
//                 await singupPage.clickSignUpPage()
//                 await testInfo.attach("click on the signup page", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//                 // check registration options text
//                 await singupPage.checkRegistrationOptionPage()
//                 await singupPage.checkSocialMediaLogins()
//                 await singupPage.checkEmailValidation()
//                 await testInfo.attach("Click on the email validation radio button", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//                 // check phone number validation text
//                 await singupPage.checkPhoneNumberValidationText()
//                 //click on the phone number validation radio button
//                 await singupPage.clickPhoneNumberValidation()
//                 //check AnonymousLoginText
//                 await singupPage.checkAnonymousLoginText()
//                 //check AnonymousLoginText
//                 await singupPage.clickAnonymousLogin()
//         })
//         await test.step("005SU-002 | Verify Age Information", async () => {
//                 const screenshot = await page.screenshot();
//                 //check age information text
//                 await singupPage.checkAgeInformationText()
//                 //click on the thirteen or older aga radio button
//                 await singupPage.clickthirteenOrOlder()
//                 await testInfo.attach("click on the thirteen or older aga radio button", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//                 // check thirteen years text
//                 await singupPage.checkMustThirteenYearsText()
//                 //click on the custom or older register radio button
//                 await singupPage.clickCustomOrOlderRegister()
//                 //input age custom or older input field
//                 await singupPage.inputCustomOrOlderAge()
//                 //click on the defined age radio button
//                 await singupPage.clickuserDefinedAge()
//                 //input data first defined input field
//                 await singupPage.inputFirstDefinedAge()
//                 //input data second defined input field
//                 await singupPage.inputSecondDefinedAge()
//         })
//         await test.step("005SU-003 | Verify User Releted Options", async () => {
//                 const screenshot = await page.screenshot();
//                 //check user profile automatically assaign username text
//                 await singupPage.checkAutomatacllyAssignUsernameText()
//                 //click user profile automatically assaign username btn
//                 await singupPage.clickAutomatacllyAssignUsernameBtn()
//                 await testInfo.attach("click user profile automatically assaign username btn", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//                 // check Auto Username prifix  text
//                 await singupPage.checkAutoUserNamePrifixText()
//                 //input username prifix data
//                 await singupPage.inputAutoUserNamePrifixData()
//         })
//         await test.step("005SU-004 | Verify User Profile Set Section", async () => {
//                 const screenshot = await page.screenshot();
//                 //check user profile Profile picture set text
//                 await singupPage.checkProfilePictureSetText()
//                 //click add new set button
//                 await singupPage.clickAddNewSetBtn()
//                 await testInfo.attach("click add new set button", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//                 // check profile picture set text
//                 await singupPage.checkProfilePictureSetDialogBoxText()
//                 //check set text title
//                 await singupPage.checkSetTitleText()
//                 //input set title data
//                 await singupPage.inputSetTitleData()
//                 //check upload picture text
//                 await singupPage.checkUploadPictureText()
//                 //upload profile image
//                 await singupPage.uploadProfileSet()
//                 await page.waitForTimeout(3000)
//                 await functions.fileUploadCropperWithoutIframe()
//                 await page.waitForTimeout(4000)
//                 //click on the save button
//                 await singupPage.clickSaveBtn()
//         })
//         await test.step("005SU-005 | Verify Terms And Condition Section", async () => {
//                 const screenshot = await page.screenshot();
//                 //Verify terms and condition text is visible
//                 await singupPage.verifyTermsAndConditionVisibility()
//                 //if there any terms and condition is visible then delete it
//                 await singupPage.deleteTermsAndConditionUrl()
//                 //input terms and condition title text
//                 await singupPage.inputTermsAndConditionTitleText()
//                 await testInfo.attach("input terms and condition title text", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//                 //input terms and condition Url
//                 await singupPage.inputTermsAndConditionUrl()
//                 //click on the add terms and conditon button
//                 await singupPage.clickTermsAndConditionAddNewUrlBtn()
//                 //verify terms and condition add url section title
//                 await singupPage.verifyTermsAndConditionAddUrlSectionTitle()
//         })
//         await test.step("005SU-006 | Verify Additional Information Section", async () => {
//                 const screenshot = await page.screenshot();
//                 //Verify Additional Information Title text is visible
//                 await singupPage.verifyAdditionalInformationTitleText()
//                 //if there phone number checkbox is uncheck then check it
//                 await singupPage.clickPhoneNumberCheckBox()
//                 //click Email Address CheckBox
//                 await singupPage.clickEmailAddressCheckBox()
//                 await testInfo.attach("click Email Address CheckBox", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//                 //click AgeCheck Box
//                 await singupPage.clickAgeCheckBox()
//                 //click DateOfBirth CheckBox
//                 await singupPage.clickDateOfBirthCheckBox()
//                 //click Postal Code CheckBox
//                 await singupPage.clickPostalCodeCheckBox()
//                 //click Custom Question CheckBox
//                 await singupPage.clickCustomQuestionCheckBox()
//                 //click Add Question Add Btn
//                 await singupPage.clickAddQuestionAddBtn()
//                 await page.waitForTimeout(4000)
//                 //verify Custom Question Text
//                 await singupPage.verifyCustomQuestionText()
//                 //verify Custom Question Type Text
//                 await singupPage.verifyCustomQuestionTypeText()
//                 //click Free Form CheckBox
//                 await singupPage.clickFreeFormCheckBox()
//                 //input Free Form Custom Question
//                 await singupPage.inputFreeFormCustomQuestion()
//                 //enabled Mandotary Btn
//                 await singupPage.enabledMandotaryBtn()
//                 //click Custom Question Window SaveBtn
//                 await singupPage.clickCustomQuestionWindowSaveBtn()
//                 await page.waitForTimeout(3000)
//                 //click Add Question Add Btn
//                 await singupPage.clickAddQuestionAddBtn()
//                 await page.waitForTimeout(2000)
//                 //click Multiple Choice CheckBox
//                 await singupPage.clickMultipleChoiceCheckBox()
//                 await singupPage.inputMultipuleFieldData()
//                 //click Add Choice Btn
//                 await singupPage.clickAddChoiceBtn()
//                 await page.waitForTimeout(2000)
//                 //input Choice Text
//                 await singupPage.inputChoiceText()
//                 //click Custom Question Window SaveBtn
//                 await singupPage.clickCustomQuestionWindowSaveBtn()
//         })
//         await test.step("005SU-007 | Verify Where Custom Opt-Ins appear Section", async () => {
//                 const screenshot = await page.screenshot();
//                 //delete Custom Question
//                 await singupPage.deleteCustomQuestion()
//                 //clcik SignUp ShowOn Home Checkbox
//                 await singupPage.clcikSignUpShowOnHomeCheckbox()
//                 //clcik Custom Question Screen Checkbox
//                 await singupPage.clcikCustomQuestionScreenCheckbox()
//                 await testInfo.attach("clcik Custom Question Screen Checkbox", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//                 //clcik Custom Option Checkbox
//                 await singupPage.clcikCustomOptionCheckbox()
//                 //clcik Add Custom OptionIn
//                 await singupPage.clcikAddCustomOptionIn()
//                 await page.waitForTimeout(3000)
//                 //clcik SmsCheck Box
//                 await singupPage.clcikSmsCheckBox()
//                 //clcik Email CheckBox
//                 await singupPage.clcikEmailCheckBox()
//                 //clcik Custom CheckBox
//                 await singupPage.clcikCustomCheckBox()
//                 //input Custom Backend Name
//                 await singupPage.inputCustomBackendName()
//                 //input Custom Options Discription
//                 await singupPage.inputCustomOptionsDiscription()
//                 //click AutoCheck Checkbox
//                 await singupPage.clickAutoCheckCheckbox()
//                 //click Custom OptionIn SaveBtn
//                 await singupPage.clickCustomOptionInSaveBtn()
//         })
// })
// test("005SU-002 | Verify Additional Information Section", async ({loginPage, mobilePreviewPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }) => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         await MainMenu.clickHomeAvater();
//         await MainMenu.mainMenuBtn();
//         await MainMenu.clickMobileDesign();
//         await singupPage.clickSignUpPage()
//         // expect(await page.locator("(//label[text()='Url or link']/following::input)[1]").isChecked()).toBeFalsy()
//         // await expect(page.locator("(//label[text()='Url or link']/following::input)[1]")).toBeChecked()
//         // expect(await page.locator("(//label[text()='Url or link']/following::input)[1]").isChecked()).toBeFalsy()
// await functions.mobileSignUpAdditionalInformation()
// })
