import test, { expect } from "@fixtures/basePages";
import menuPage from "@pages/menu.page";
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
test("010A-001 | Validate Admin Successfully Upload Font For Arcade Section", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.verifyUploadFontTextIsVisible()
        await arcadePage.deleteUploadFont()
        await functions.fontUploadFunction()
        await arcadePage.uploadFontForArcadeSection()
        await arcadePage.selectUplodedFont()
        // await arcadePage.verifyFontTextIsVisible()
        await menuPage.clickMenuPage()
        await menuPage.enableLastGame()
})
test("010A-002 | Validate Uploaded Font Successfully Applied In Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to Mobile Screen Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })

        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.verifyFontSuccessfullyAppliedInMobileScreeen()
        })
})
test("010A-003 | Validate Admin Successfully Add A OutSide Game For Arcade Section", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyArcadeSettingsTitleText()
        await arcadePage.deleteOutSideGame()
        await arcadePage.clickAddOutSideGameBtn()
        await arcadePage.verifyAddOutSideGameModalTitleText()
        await arcadePage.inputAddOutSideGameUrl()
        await arcadePage.inputAddOutSideGameName()
        await arcadePage.addOutSideGameModalSaveBtn()
        await arcadePage.enableNewlyAddedGame()
})
test("010A-004 | Validate Admin Added OutSide Game Successfully Show On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And land To Home Screen", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.verifyAddOutSideGameSuccessfullyShowOnMobileScreen()
        })
})
test("010A-003-1 | Validate Admin Successfully Delete OutSide Game For Arcade Section", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyArcadeSettingsTitleText()
        await arcadePage.deleteOutSideGame()
})
test("010A-005 | Validate Admin Successfully Select Image Type Ractangler", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyImageTypeTitleText()
        await arcadePage.clickRectanglerBtn()
})
test("010A-006 | Validate Admin Ractangler Select Image Type Game Successfully Show On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And land To Home Screen", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.verifyRectanglerImageTypeSuccessfullyAppliedInMobileScreeen()
        })
})
test("010A-007 | Validate Admin Successfully Select Image Type Square", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyImageTypeTitleText()
        await arcadePage.clickSquareBtn()
})
test("010A-008 | Validate Admin Square Select Image Type Game Successfully Show On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And land To Home Screen", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        await test.step("Validate Mobile Screen", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.verifySquareImageTypeSuccessfullyAppliedInMobileScreeen()
        })
})
test("010A-009 | Validate Admin Successfully Upload Logo Header For Arcade Section", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyLogoHeaderTitleText()
        await arcadePage.deleteArcadeLogoHeader()
        await arcadePage.clickLogoHeaderUploadInputField()
        await functions.fileUploadCropperWithoutIframe()
        await arcadePage.verifyLogoHerderSuccesfullyUploaded()
})
test("010A-010 | Validate Admin Uploaded Logo Header Successfully Show On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                //     await mobilePreviewPage.verifyLogoHeaderSuccessfullyAppliedInMobileScreeen()
        })
})
test("010A-011 | Validate Admin Successfully Delete Game Logo For Fanatics-Filter-Web", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })

        await arcadePage.deleteFanSeeWallLogo()


        await arcadePage.goToUrl()
        await arcadePage.clickArcadePage()
        await arcadePage.deleteFanaticsLogo()

        await arcadePage.goToUrl()
        await arcadePage.clickArcadePage()
        await arcadePage.deleteGuessTheScroeLogo()

        await arcadePage.goToUrl()
        await arcadePage.clickArcadePage()
        await arcadePage.deleteTriviaLogo()

        await arcadePage.goToUrl()
        await arcadePage.clickArcadePage()
        await arcadePage.deleteLiveWallLogo()

        await arcadePage.goToUrl()
        await arcadePage.clickArcadePage()
        await arcadePage.deleteNoiseMeterLogo()

        await arcadePage.goToUrl()
        await arcadePage.clickArcadePage()
        await arcadePage.deleteTugOfWarLogo()

        await arcadePage.goToUrl()
        await arcadePage.clickArcadePage()
        await arcadePage.deletePrizeDropLogo()

})
test("010A-012 | Validate Admin Successfully Delete Game Logo For Guess The Scroe", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.deleteGuessTheScroeLogo()
        // await functions.fileUploadCropperWithoutIframe()
})
test("010A-013 | Validate Admin Successfully Delete Game Logo For Trivia", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.deleteTriviaLogo()
        // await functions.fileUploadCropperWithoutIframe()
})
test("010A-014 | Validate Admin Successfully Delete Game Logo For Live Wall", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.deleteLiveWallLogo()
        // await functions.fileUploadCropperWithoutIframe()
})
test("010A-015 | Validate Admin Successfully Delete Game Logo For Noise Meter", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.deleteNoiseMeterLogo()
        // await functions.fileUploadCropperWithoutIframe()
})
test("010A-016 | Validate Admin Successfully Delete Game Logo For Tug Of War", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.deleteTugOfWarLogo()
        // await functions.fileUploadCropperWithoutIframe()
})
test("010A-017 | Validate Admin Successfully Delete Game Logo For Prize Drop", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.deletePrizeDropLogo()
        // await functions.fileUploadCropperWithoutIframe()
})
test("010A-018 | Validate Admin Successfully Upload Game Logo For Fanatics-Filter-Web", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.uploadFanaticsFilterWebLogo()
        await functions.fileUploadCropperWithoutIframe()
        await arcadePage.verifyFanaticsFilterWebLogoUploadSuccessfully()
})
test("010A-019 | Validate Admin Uploaded Fanatics-Filter-Web Game Logo Successfully Show On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to Mobile Screen Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })

        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.verifyFanaticsLogoSuccessfullyUplodedInMobileScreen()
        })
})
test.skip("010A-020 | Validate Admin Successfully Disable Fanatics-Filter-Web Game", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.disableFanaticsGame()
})
test.skip("010A-021 | Validate Fanatics-Filter-Web Game successfully hide from Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.clickPrizeSection()
        })
})

test("010A-022 | Validate Admin Successfully Upload Game Logo For Guess The Scroe", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.uploadGuessTheScroeLogo()
        await functions.fileUploadCropperWithoutIframe()
        await arcadePage.verifyGuessTheScroeLogoUploadSuccessfully()
})
test("010A-024 | Validate Admin Uploaded Guess The Scroe Game Logo Successfully Show On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to Mobile Screen Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })

        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickPrizeSection()
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.verifyGussTheScroeGameLogoSuccessfullyUplodedInMobileScreen()
        })
})
test.skip("010A-025 | Validate Admin Successfully Disable Guess The Scroe Game", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.verifyUploadFontTextIsVisible()
        await arcadePage.deleteUploadFont()
        await functions.fontUploadFunction()
        await arcadePage.uploadFontForArcadeSection()
        await arcadePage.selectUplodedFont()
        // await arcadePage.verifyFontTextIsVisible()
})
test.skip("010A-026 | Validate Guess The Scroe Game successfully hide from Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.clickPrizeSection()
        })
})

test("010A-027 | Validate Admin Successfully Upload Game Logo For Trivia", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.uploadTriviaLogo()
        await functions.fileUploadCropperWithoutIframe()
        await arcadePage.verifyTriviaLogoUploadSuccessfully()
})
test("010A-028 | Validate Admin Uploaded Trivia Game Logo Successfully Show On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to Mobile Screen Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickPrizeSection()
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.verifyTriviaGameLogoSuccessfullyUplodedInMobileScreen()
        })
})
test.skip("010A-029 | Validate Admin Successfully Disable Trivia Game", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.verifyUploadFontTextIsVisible()
        await arcadePage.deleteUploadFont()
        await functions.fontUploadFunction()
        await arcadePage.uploadFontForArcadeSection()
        await arcadePage.selectUplodedFont()
        // await arcadePage.verifyFontTextIsVisible()
})
test.skip("010A-030 | Validate Trivia Game successfully hide from Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.clickPrizeSection()
        })
})

test("010A-031 | Validate Admin Successfully Upload Game Logo For Live Wall", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.uploadLiveWallLogo()
        await functions.fileUploadCropperWithoutIframe()
        await arcadePage.verifyLiveWallLogoUploadSuccessfully()
})
test("010A-032 | Validate Admin Uploaded Live Wall Game Logo Successfully Show On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to Mobile Screen Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickPrizeSection()
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.verifyLiveWallGameLogoSuccessfullyUplodedInMobileScreen()
        })
})
test.skip("010A-033 | Validate Admin Successfully Disable Live Wall Game", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.verifyUploadFontTextIsVisible()
        await arcadePage.deleteUploadFont()
        await functions.fontUploadFunction()
        await arcadePage.uploadFontForArcadeSection()
        await arcadePage.selectUplodedFont()
        // await arcadePage.verifyFontTextIsVisible()
})
test.skip("010A-034 | Validate Live Wall Game successfully hide from Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.clickPrizeSection()
        })
})

test("010A-035 | Validate Admin Successfully Upload Game Logo For Noise Meter", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.uploadNoiseMeterLogo()
        await functions.fileUploadCropperWithoutIframe()
        await arcadePage.verifyNoiseMeterLogoUploadSuccessfully()
})
test("010A-036 | Validate Admin Uploaded Noise Meter Game Logo Successfully Show On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to Mobile Screen Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickPrizeSection()
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.verifyNoiseMeterGameLogoSuccessfullyUplodedInMobileScreen()
        })
})

test.skip("010A-037 | Validate Admin Successfully Disable Noise Meter Game", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.verifyUploadFontTextIsVisible()
        await arcadePage.deleteUploadFont()
        await functions.fontUploadFunction()
        await arcadePage.uploadFontForArcadeSection()
        await arcadePage.selectUplodedFont()
        // await arcadePage.verifyFontTextIsVisible()
})
test.skip("010A-038 | Validate Noise Meter Game successfully hide from Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.clickPrizeSection()
        })
})
test("010A-039 | Validate Admin Successfully Upload Game Logo For Tug Of War", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.uploadTugOfWarLogo()
        await functions.fileUploadCropperWithoutIframe()
        await arcadePage.verifyTugOfWarLogoUploadSuccessfully()
})
test("010A-040 | Validate Admin Uploaded Tug Of War Game Logo Successfully Show On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to Mobile Screen Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickPrizeSection()
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.verifyTugOfWarGameLogoSuccessfullyUplodedInMobileScreen()
        })
})
test.skip("010A-041 | Validate Admin Successfully Disable Tug Of War Game", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.verifyUploadFontTextIsVisible()
        await arcadePage.deleteUploadFont()
        await functions.fontUploadFunction()
        await arcadePage.uploadFontForArcadeSection()
        await arcadePage.selectUplodedFont()
        // await arcadePage.verifyFontTextIsVisible()
})
test.skip("010A-042 | Validate Tug Of War Game successfully hide from Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.clickPrizeSection()
        })
})
test("010A-043 | Validate Admin Successfully Upload Game Logo For Prize Drop", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.uploadPrizeDropLogo()
        await functions.fileUploadCropperWithoutIframe()
        await arcadePage.verifyPrizeDropLogoUploadSuccessfully()
})
test("010A-044 | Validate Admin Uploaded Prize Drop Game Logo Successfully Show On Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to Mobile Screen Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickPrizeSection()
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.verifyPrizeDropGameLogoSuccessfullyUplodedInMobileScreen()
        })
})

test.skip("010A-045 | Validate Admin Successfully Disable Prize Drop Game", async ({ MainMenu, arcadePage, functions, menuPage, loginPage, page, }, testInfo) => {
        await test.step("Login admin and land to arcade", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                //click on homeavatar
                await MainMenu.clickHomeAvater()
                //click on mainmenubtn
                await MainMenu.mainMenuBtn()
                //click on arcadepage
                await arcadePage.clickArcadePage()
        })
        await arcadePage.verifyFontTextIsVisible()
        await arcadePage.verifyUploadFontTextIsVisible()
        await arcadePage.deleteUploadFont()
        await functions.fontUploadFunction()
        await arcadePage.uploadFontForArcadeSection()
        await arcadePage.selectUplodedFont()
        // await arcadePage.verifyFontTextIsVisible()
})
test.skip("010A-046 | Validate Prize Drop Game successfully hide from Mobile Screen", async ({ loginPage, mobilePreviewPage, guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await mobilePreviewPage.gotoUrl()
        })
        // await test.step("Input Additional Information For Mobile Screen", async () => {
        //         await mobilePreviewPage.typephoneno()
        //         await mobilePreviewPage.selectbirthdate()
        //         await mobilePreviewPage.typeAge()
        //         await mobilePreviewPage.typeemail()
        //         await mobilePreviewPage.typezip()
        //         await mobilePreviewPage.clicksubmit()
        // })
        await test.step("Verify Japanese Language Applaid Successfully", async () => {
                await mobilePreviewPage.clickArcadeSection()
                await mobilePreviewPage.clickPrizeSection()
        })
})
// test("010A-001| Arcade settings related tests", async ({ MainMenu, arcadePage, menuPage, loginPage, page, }, testInfo) => {
//     await test.step("Login admin and land to arcade", async () => {
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')
//         //click on homeavatar
//         await MainMenu.clickHomeAvater()
//         //click on mainmenubtn
//         await MainMenu.mainMenuBtn()
//         //click on arcadepage
//         await MainMenu.clickArcadePage()
//     })
//     await test.step("validate fonts upload functionality", async () => {
//         //verify fonts text
//         await arcadePage.checkFontsText()
//         // check upload fonts text
//         await arcadePage.checkUploadFontText()
//         // upload a test font
//         await arcadePage.uploadFont()
//         await page.waitForTimeout(2000)
//         // now deleting the uploaded font
//         await arcadePage.clickDeletefont()
//     })
//     await test.step("check arcade settings text", async () => {
//         await page.waitForTimeout(2000)
//         await arcadePage.checkArcadesettingtext()
//     })
//     // await test.step("Add outside button works", async () => {
//         //click on button
//         // await arcadePage.clickaddOutsidegame()
//         // await page.waitForTimeout(2000)
//         // // now click close button
//         // await arcadePage.clickclosebutton()
//     // })
//     await test.step("validate add outside game works", async () => {
//         await arcadePage.clickaddOutsidegame()
//         await page.waitForTimeout(2000)
//         await arcadePage.addnewgame()
//         await arcadePage.clickSaveBtn()
//         await page.waitForTimeout(2000)
//     })
//     await test.step("validate add outside game works", async () => {
//         await arcadePage.clickaddOutsidegame()
//         await page.waitForTimeout(2000)
//         await arcadePage.addnewgame()
//         await arcadePage.clickSaveBtn()
//     })
// })
// test("010A-002 | Validated Arcade Settings Logo Section", async ({ MainMenu, arcadePage, menuPage, functions, loginPage, page, }, testInfo) => {
//     await page.goto('/admin/#/sign-in')
//     await loginPage.login(data.username, data.password)
//     const title = await page.title();
//     expect(title).toBe('DXP Admin')
//     //click on homeavatar
//     await MainMenu.clickHomeAvater()
//     //click on mainmenubtn
//     await MainMenu.mainMenuBtn()
//     //click on arcadepage
//     await MainMenu.clickArcadePage()
//     await page.waitForTimeout(3000)
//     //delete Logo Header
//     await arcadePage.deleteLogoHeader()
//     await page.waitForTimeout(2000)
//     //click To Upload Logo Header
//     await functions.logoImageUploadFunction()
//     await arcadePage.clickToUploadLogoHeader()
//     await functions.fileUploadCropperWithoutIframe()
//     //click Square Type Btn
//     await arcadePage.clickSquareTypeBtn()
//     //click Rectangle Type Btn
//     await arcadePage.clickRectangleTypeBtn()
//     await page.waitForTimeout(6000)
// })
// test("010A-003 | Validated Arcade Settings Section", async ({ MainMenu, arcadePage, menuPage, functions, loginPage, page, }, testInfo) => {
//     await page.goto('/admin/#/sign-in')
//     await loginPage.login(data.username, data.password)
//     const title = await page.title();
//     expect(title).toBe('DXP Admin')
//     //click on homeavatar
//     await MainMenu.clickHomeAvater()
//     //click on mainmenubtn
//     await MainMenu.mainMenuBtn()
//     //click on arcadepage
//     await MainMenu.clickArcadePage()
//     //enable Prize Drop Check Box
//     await arcadePage.enablePrizeDropCheckBox()
//     //enable Tug of War Check Box
//     await arcadePage.enableTugofWarCheckBox()
//     //enable AR Fanatics Filters CheckBox
//     await arcadePage.enableARFanaticsFiltersCheckBox()
//     //enable Noise Meter CheckBox
//     await arcadePage.enableNoiseMeterCheckBox()
//     //enable Live Wall Check Box
//     await arcadePage.enableLiveWallCheckBox()
//     //click To Select Defult Prize Drop
//     await arcadePage.clickToSelectDefultPrizeDrop()
//     await page.waitForTimeout(3000)
//     await arcadePage.selectDefultGame()
//     //click To Select Defult TugOfWar
//     await arcadePage.clickToSelectDefultTugOfWar()
//     await arcadePage.selectDefultGame()
//     //click To Select Defult Ar Fanatics
//     await arcadePage.clickToSelectDefultArFanatics()
//     await arcadePage.selectDefultGame()
//     //click To Select Defult Noise Meter
//     await arcadePage.clickToSelectDefultNoiseMeter()
//     await arcadePage.selectDefultGame()
//     //click To Select Defult Live Wall
//     await arcadePage.clickToSelectDefultLiveWall()
//     await arcadePage.selectDefultGame()
//     await page.waitForTimeout(6000)
// })
// test("010A-004 | Validated Arcade outside Game Delete Functionality", async ({ MainMenu, arcadePage, menuPage, functions, loginPage, page, }, testInfo) => {
//     await page.goto('/admin/#/sign-in')
//     await loginPage.login(data.username, data.password)
//     const title = await page.title();
//     expect(title).toBe('DXP Admin')
//     //click on homeavatar
//     await MainMenu.clickHomeAvater()
//     //click on mainmenubtn
//     await MainMenu.mainMenuBtn()
//     //click on arcadepage
//     await MainMenu.clickArcadePage()
//     await functions.logoImageUploadFunction()
//     await arcadePage.clickToUploadGameLogo()
//     await functions.fileUploadCropperWithoutIframe()
//     await page.waitForTimeout(5000)
//     await arcadePage.clickOutSideGameDeleteBtn()
//     await page.waitForTimeout(6000)
// })