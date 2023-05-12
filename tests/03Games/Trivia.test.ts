import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
const clipboard = require("clipboardy");
var url: any;


test("000 | Select All The Menu Ready For UI Varification", async ({ loginPage, functions, page, }, testInfo) => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
        await functions.adminMainMenuSettingsHelper()
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


test("012TV-006 | Trivia | Control Panel | Validate Add New Round Functionality Successfully Work", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickTriviaSection()
        })
        await test.step("If Defult Game Is On Live Then Stop The Game", async () => {
                await triviaPage.clickDefultGameStopBtn()
        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickDefaultGameControlPanelSection()
        })
        await test.step("Delete Default Game Added Round If Found", async () => {
                await triviaPage.clickOnDefaultRoundIfFound()
                await triviaPage.deleteDefaultGameAddedRoundIfFound()
        })
        await test.step("Add New Round For Default Game", async () => {
                await triviaPage.clickAddNewRoundBtn()
                await triviaPage.inputAddRoundName(testData.getRoundName())
                await triviaPage.clickAddBtn()
                await triviaPage.verifyRoundSuccessfullyAdded(testData.getRoundName())
        })
})
test("012TV-007 | Trivia | Control Panel | Validate Import Functionality Successfully Work For A Added Round", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickTriviaSection()
        })
        await test.step("If Defult Game Is On Live Then Stop The Game", async () => {
                await triviaPage.clickDefultGameStopBtn()
        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickDefaultGameControlPanelSection()
        })
        await test.step("Click On Default Round", async () => {
                await triviaPage.clickDefaultRound()
        })
        await test.step("Add New Round For Default Game", async () => {
                await functions.getRoundQuestionJsonFile()
                await triviaPage.importRoundQuestion()
                await triviaPage.clickOkBtn()
        })
})

test("012TV-008 | Trivia | Game Settings | Validate Admin Successfully Input Data For Game Title", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickTriviaSection()

        })
        await test.step("If Defult Game Is On Live Then Stop The Game", async () => {
                await triviaPage.clickDefultGameStopBtn()
        })

        await test.step("Delete Uploaded Dialogs", async () => {
                await triviaPage.clickDefultGameDesignSection()
                await triviaPage.openUploadAndDialogsSection()

                await triviaPage.deleteMobileBackgroundImage()
                await triviaPage.deleteMainBoardImage()
                await triviaPage.deleteSponsorLogoImage()
                await triviaPage.deleteTeamLogoImage()
                await triviaPage.deleteGameTitleImage()

                await triviaPage.clickDefultGameDesignSection()
                await triviaPage.clickToExpandAddBannerSection()
                await triviaPage.deleteMobileBackgroundImage()
                await triviaPage.deleteMainBoardImage()
                await triviaPage.deleteSponsorLogoImage()
                await triviaPage.deleteTeamLogoImage()
                await triviaPage.deleteGameTitleImage()
        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickDefultGamesGameSettingsSection()
                await triviaPage.verifyGameTitleTextForGameSettings()
                await triviaPage.clearGameTitleFromGameSettings()
                await triviaPage.verifyMinimumAndMaximumCharacters(testData.maxMiniText())
                await triviaPage.inputGameTitleFromGameSettings(await testData.getGameTitle())
        })

})
test("012TV-009 | Mobile Screen | Validate Game Title Successfully Show On Mobile Screen", async ({ loginPage, testData, triviaPage, triviaMobilePage, functions, page, }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)

        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickTriviaSection()
        })
        await test.step("If Defult Game Is On Live Then Stop The Game", async () => {
                await triviaPage.clickDefultGameStopBtn()
        })

        await test.step("Go To The Game URL", async () => {
                await triviaMobilePage.gotoUrl()
        })

        await test.step("Click On The Home Button", async () => {
                await triviaMobilePage.verifyGameTitleText(testData.getGameTitle())
        })


})

test("012TV-010 | Trivia | Game Settings | Validate Admin Successfully Input Data For Countdown Title", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickTriviaSection()
                await triviaPage.clickDefultGameStopBtn()
                await triviaPage.clickDefultGamesGameSettingsSection()
        })
        await test.step("Verify Countdown Section", async () => {
                await triviaPage.verifyCountdownTitleTextInGameSettings()
                await triviaPage.clearCountdownTitleNameFromGameSettings()
                await triviaPage.verifyMinimumAndMaximumCharactersForCountdown(testData.countDownMaxMiniText())
                await triviaPage.inputCountdownTitleNameFromGameSettings(testData.getCountDownTitle())
        })

})
test("012TV-011 | Mobile Screen | Validate Countdown Title Successfully Show On Mobile Screen", async ({ loginPage, triviaPage, triviaMobilePage, testData, functions, page, }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)

        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickTriviaSection()
        })
        await test.step("If Defult Game Is On Live Then Stop The Game", async () => {
                await triviaPage.clickDefultGameStopBtn()
        })

        await test.step("Click On Control Panel", async () => {
                await triviaPage.clickDefaultGameControlPanelSection()
        })

        await test.step("Click On Defalut Round ", async () => {
                await triviaPage.clickDefaultRound()
        })

        await test.step("Input CountDown Sec", async () => {
                await triviaPage.inputCountDownSecondForDefaultRound(testData.getSecond30())
        })
        await test.step("Click On The Trivia Start Button", async () => {
                await triviaPage.clickDefultGameStartBtn()
        })
        await test.step("Go To The Game URL", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await test.step("Verify CountDown Title", async () => {
                // await triviaMobilePage.clickHowToPlayBtn()
                await triviaMobilePage.clickHomeBtn()
                await triviaMobilePage.verifyCountDownTitleText(testData.getCountDownTitle())
        })


})

test("012TV-012 | Trivia | Game Settings | Validate Admin Successfully Input Data For Leaderboard Title", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickTriviaSection()
                await triviaPage.clickDefultGameStopBtn()
                await triviaPage.clickDefultGamesGameSettingsSection()
        })
        await test.step("Verify Countdown Section", async () => {
                await triviaPage.verifyLederboardTitleTextInGameSettings()
                await triviaPage.clearLeaderboardTitleNameFromGameSettings()
                await triviaPage.verifyMinimumAndMaximumCharactersForLeaderboard(testData.leaderBoardMaxMiniText())
                await triviaPage.inputLeaderboardTitleNameFromGameSettings(testData.getLeaderBoardTitle())
        })

})
test("012TV-013 | Mobile Screen | Validate Leaderboard Title Successfully Show On Mobile Screen", async ({ loginPage, triviaPage, triviaMobilePage, testData, functions, page, }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)

        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickTriviaSection()
        })
        await test.step("If Defult Game Is On Live Then Stop The Game", async () => {
                await triviaPage.clickDefultGameStopBtn()
        })

        await test.step("Click On Control Panel", async () => {
                await triviaPage.clickDefaultGameControlPanelSection()
        })

        await test.step("Click On Defalut Round ", async () => {
                await triviaPage.clickDefaultRound()
        })
        await test.step("Click On The Trivia Start Button", async () => {
                await triviaPage.clickDefultGameStartBtn()
        })

        await test.step("click MOve To Next Btn For DefaultGame", async () => {
                await triviaPage.clickMOveToNextBtnForDefaultGame()
                await triviaPage.clickMOveToNextBtnForDefaultGame()
                await triviaPage.clickMOveToNextBtnForDefaultGame()

        })
        await test.step("Go To The Game URL", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await test.step("Verify CountDown Title", async () => {
                await triviaMobilePage.clickHowToPlayBtn()
                await triviaMobilePage.clickHomeBtn()
                await triviaMobilePage.verifyLeaderBoardTitleText(testData.getLeaderBoardTitle())
        })


})

test("012TV-014 | Trivia | Game Settings | Validate Mainboard Countdown Alignment Bottom Select Functionality Works Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickTriviaSection()
                await triviaPage.clickDefultGameStopBtn()
                await triviaPage.clickDefultGamesGameSettingsSection()

                await triviaPage.clickAnswerShadoAnableBtn()
                await triviaPage.clickStageFadeTransitionAnableBtn()
                await triviaPage.clickXpressionMossionEnabledBtn()
        })
        await test.step("Verify Countdown Section", async () => {
                await triviaPage.verifyMainboardCountdownText()
                await triviaPage.clickMainboardCountdownAlignmentBottomBtn()
        })
        await test.step("Click On Control Panel", async () => {
                await triviaPage.clickDefaultGameControlPanelSection()
        })

        await test.step("Click On Defalut Round ", async () => {
                await triviaPage.clickDefaultRound()
        })
        await test.step("Click On Defalut Round ", async () => {
                await triviaPage.inputCountDownSecondForDefaultRound(testData.getSecond00())
        })
        await test.step("Click On Defalut Round ", async () => {
                await triviaPage.inputPointAllocationSecondfieldForDefaultGame(testData.getSecond00())
        })
        await test.step("Click On The Trivia Start Button", async () => {
                await triviaPage.clickDefultGameStartBtn()
        })

        await test.step("Click Move To Next Round", async () => {
                await triviaPage.clickMOveToNextBtnForDefaultGame()
        })

        await test.step("Click Move To Next Round", async () => {
                await triviaPage.clickOutputBtn()
                // await triviaPage.clickOutputScreenLinkOpenBtn()
                await triviaPage.clickOutputScreenLinkCopyBtn()

        })
        let URL = ''
        await test.step("now copy the contents from system clipboard(URL Here)", async () => {
                URL = clipboard.readSync();
                //console.log(URL);
                await triviaPage.GoTo(URL)
                await triviaPage.verifyMainboradBottomAlignment()
        })


})
test("012TV-015 | Trivia | Game Settings | Validate Mainboard Countdown Alignment Top Select Functionality Works Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })
        await test.step("Click On The Trivia Section", async () => {
                await triviaPage.clickTriviaSection()
                await triviaPage.clickDefultGameStopBtn()
                await triviaPage.clickDefultGamesGameSettingsSection()

                await triviaPage.clickAnswerShadoAnableBtn()
                await triviaPage.clickStageFadeTransitionAnableBtn()
                await triviaPage.clickXpressionMossionEnabledBtn()
        })
        await test.step("Verify Countdown Section", async () => {
                await triviaPage.verifyMainboardCountdownText()
                await triviaPage.clickMainboardCountdownAlignmentTopBtn()
        })
        await test.step("Click On Control Panel", async () => {
                await triviaPage.clickDefaultGameControlPanelSection()
        })

        await test.step("Click On Defalut Round ", async () => {
                await triviaPage.clickDefaultRound()
        })
        await test.step("Click On Defalut Round ", async () => {
                await triviaPage.inputCountDownSecondForDefaultRound(testData.getSecond00())
        })
        await test.step("Click On Defalut Round ", async () => {
                await triviaPage.inputPointAllocationSecondfieldForDefaultGame(testData.getSecond00())
        })
        await test.step("Click On The Trivia Start Button", async () => {
                await triviaPage.clickDefultGameStartBtn()
        })

        await test.step("Click Move To Next Round", async () => {
                await triviaPage.clickMOveToNextBtnForDefaultGame()
        })

        await test.step("Click Move To Next Round", async () => {
                await triviaPage.clickOutputBtn()
                // await triviaPage.clickOutputScreenLinkOpenBtn()
                await triviaPage.clickOutputScreenLinkCopyBtn()

        })
        let URL = ''
        await test.step("now copy the contents from system clipboard(URL Here)", async () => {
                URL = clipboard.readSync();
                //console.log(URL);
                await triviaPage.GoTo(URL)
                await triviaPage.verifyMainboradTopAlignment()
        })


})

test("012TV-016 | Trivia | Game Settings | Validate Answer Shape Circle Select Functionality Works Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()
        await triviaPage.clickDefultGamesGameSettingsSection()

        await triviaPage.clickAnswerShadoAnableBtn()
        await triviaPage.clickStageFadeTransitionAnableBtn()
        await triviaPage.clickXpressionMossionEnabledBtn()


        await triviaPage.verifyAnswerShapetext()
        await triviaPage.clickAnswerShapeCircleBtn()


        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()
        await triviaPage.deleteSingleQuestion()

        await functions.getMultiQuestionJsonFile()
        await triviaPage.importRoundQuestion()
        await triviaPage.clickOkBtn()

        await triviaPage.inputCountDownSecondForDefaultRound(testData.getSecond00())
        await triviaPage.inputPointAllocationSecondfieldForDefaultGame(testData.getSecond00())

        await triviaPage.clickDefaultRound()
        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()


})
test("012TV-017 | Trivia | Mobile Screen | Validate Answer Shape Circle Select Functionality Works Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {


        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.reloadPage()
        await triviaMobilePage.verifyAnswerShapeCircle()

})

test("012TV-018 | Trivia | Game Settings | Validate Answer Shape Rectanguler Select Functionality Works Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()
        await triviaPage.clickDefultGamesGameSettingsSection()

        await triviaPage.verifyAnswerShapetext()
        await triviaPage.clickAnswerShapeRectangleBtn()


        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()
        await triviaPage.deleteSingleQuestion()

        await functions.getMultiQuestionJsonFile()
        await triviaPage.importRoundQuestion()
        await triviaPage.clickOkBtn()

        await triviaPage.inputCountDownSecondForDefaultRound(testData.getSecond00())
        await triviaPage.inputPointAllocationSecondfieldForDefaultGame(testData.getSecond00())

        await triviaPage.clickDefaultRound()
        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()


})
test("012TV-019 | Trivia | Mobile Screen | Validate Answer Shape Rectanguler Select Functionality Works Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyAnswerShapeRectanguler()

})

test("012TV-020 | Trivia | Game Settings | Validate Answer Shadow Enable Functionality Works Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()
        await triviaPage.clickDefultGamesGameSettingsSection()

        await triviaPage.verifyAnswerShadowText()
        await triviaPage.clickAnswerShadoAnableBtn()


        await triviaPage.clickDefaultGameControlPanelSection()

        await triviaPage.clickDefaultRound()
        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()

        await triviaPage.reloadPage()


})
test("012TV-021 | Trivia | Mobile Screen | Validate Answer Shadow Enable Functionality Works Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyAnswerShadow()

})

//have an issue
test.skip("012TV-022 | Trivia | Game Settings | Validate Question Number Screen Header Data Input Functionality Works Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()
        await triviaPage.clickDefultGamesGameSettingsSection()

        await triviaPage.verifyQuestionNoScreenHeaderText()
        await triviaPage.inputQuestionNoScreenHeaderForDefaultGame(testData.getQuestionText())
        // await triviaPage.inputQuestionNoScreenHeader()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickToEnabledQuestionNoStage()
        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()




})
test.skip("012TV-023 | Trivia | Mobile Screen | Validate Answer Shadow Disble Functionality Works Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyQuestionNoHeaderText(testData.getQuestionText())

})

//have an issue
test.skip("012TV-024 | Trivia | Game Settings | Validate Pre Game Message Data Input Functionality Works Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()
        await triviaPage.clickDefultGamesGameSettingsSection()

        await triviaPage.verifyQuestionNoScreenHeaderText()
        await triviaPage.inputQuestionNoScreenHeaderForDefaultGame(testData.getQuestionText())
        // await triviaPage.inputQuestionNoScreenHeader()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickToEnabledQuestionNoStage()
        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()




})
test.skip("012TV-025 | Trivia | Mobile Screen | Validate Pre Game Message Data Input Functionality Works Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyQuestionNoHeaderText(testData.getQuestionText())

})


//have an issue
test.skip("012TV-026 | Trivia | Game Settings | Validate Post Game Message Data Input Functionality Works Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()
        await triviaPage.clickDefultGamesGameSettingsSection()

        await triviaPage.verifyQuestionNoScreenHeaderText()
        await triviaPage.inputQuestionNoScreenHeaderForDefaultGame(testData.getQuestionText())
        // await triviaPage.inputQuestionNoScreenHeader()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickToEnabledQuestionNoStage()
        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()




})
test.skip("012TV-027 | Trivia | Mobile Screen | Validate Post Game Message Data Input Functionality Works Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyQuestionNoHeaderText(testData.getQuestionText())

})


test("012TV-028 | Trivia | Game Settings | Validate Mobile Background Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyMobileBackgroundTextInColorSection()
        await triviaPage.clickMobileBackgroundColorSelectionField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

})
test("012TV-029 | Trivia | Mobile Screen | Validate Mobile Background Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyMobileBackgroundSucssfullyApplied()

})

test("012TV-030 | Trivia | Game Settings | Validate Question Frame Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyQuestionFrameText()
        await triviaPage.clickQuestionFrameColorSelectionField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()

})
test("012TV-031 | Trivia | Mobile Screen | Validate Question Frame Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyQuestionFrameSucssfullyApplied()

})

// for this color section there was no color type option
test("012TV-032 | Trivia | Game Settings | Validate General And Button Text Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyGeneralOrButtonText()
        await triviaPage.clickGeneralButtonTextColorBtn()

        // await triviaPage.clickColorTypeSelectionFiled()
        // await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

})
test("012TV-033 | Trivia | Mobile Screen | Validate General And Button Text Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyGeneralButtonTextColorSucssfullyApplied()

})

test("012TV-034 | Trivia | Game Settings | Validate Question Backgound Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyQuestionBackgroundText()
        await triviaPage.clickQuestionBackgroundBtn()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()

})
test("012TV-035 | Trivia | Mobile Screen | Validate Question Background Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyQuestionBackgroundSucssfullyApplied()

})


test("012TV-036 | Trivia | Game Settings | Validate Answer Frame Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyAnswerFrameText()
        await triviaPage.clickAnswerFrameColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()

})
test("012TV-037 | Trivia | Mobile Screen | Validate Answer Frame Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyAnswerFrameSucssfullyApplied()

})



test("012TV-038 | Trivia | Game Settings | Validate Question Text Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyQuestionText()
        await triviaPage.clickQuestionFrameColorSelectionField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()

})
test("012TV-039 | Trivia | Mobile Screen | Validate Question Text Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyQuestionTextColorSucssfullyApplied()

})

test("012TV-040 | Trivia | Game Settings | Color Section | Validate Answer Background Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyAnswerBackgroundText()
        await triviaPage.clickAnswerBackgroundColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()

})
test("012TV-041 | Trivia | Mobile Screen | Validate Answer Background Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyAnswerBackgroundColorSucssfullyApplied()

})


test("012TV-042 | Trivia | Game Settings | Color Section | Validate Tile Frame Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyTileFrameText()
        await triviaPage.clickTileFrameColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()

})
test("012TV-043 | Trivia | Mobile Screen | Validate Tile Frame Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyTileFrameColorSucssfullyApplied()

})

//for this color section there was no color type selection section
test("012TV-044 | Trivia | Game Settings | Color Section | Validate Answer Text Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyAnswerText()
        await triviaPage.clickAnswerTextColorInputField()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()

})
test("012TV-045 | Trivia | Mobile Screen | Validate Answer Text Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyAnswerTextColorSucssfullyApplied()

})

test("012TV-046 | Trivia | Game Settings | Color Section | Validate Button Fill Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyButtonFillText()
        await triviaPage.clickButtonFillColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()


})
//have an issue in this scenarios, button fill color does not update properly
test("012TV-047 | Trivia | Mobile Screen | Validate Button Fill Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyButtonFillColorSucssfullyApplied()

})

test("012TV-048 | Trivia | Game Settings | Color Section | Validate Leaderboard Frame Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyLeaderboardFrametext()
        await triviaPage.clickLeaderboardFrameColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()



})
test("012TV-049 | Trivia | Mobile Screen | Validate Leaderboard Frame Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyLeaderBoardFrameColorSucssfullyApplied()

})

test("012TV-050 | Trivia | Game Settings | Color Section | Validate Leaderboard Text Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyLeaderboardtextTextInColorSection()
        await triviaPage.clickLeaderboardTextColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()



})
test("012TV-051 | Trivia | Mobile Screen | Validate Leaderboard Text Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyLeaderBoardTextColorSucssfullyApplied()

})

//for this color section there was no color type selection section
test("012TV-052 | Trivia | Game Settings | Color Section | Validate Timer Animation Fill Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyTimerAnnimationFilltext()
        await triviaPage.clickTimerAnimationFillColorInputField()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()




})
test("012TV-053 | Trivia | Mobile Screen | Validate Timer Animation Fill Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyTimerAnimationFillColorSucssfullyApplied()

})

test("012TV-054 | Trivia | Game Settings | Color Section | Validate Point-Bubble Frame Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyPointBubbleFrametext()
        await triviaPage.clickPoint_BubbleFrameColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()




})
//we need to know where the reflaction is showing in mobile screen
test.skip("012TV-055 | Trivia | Mobile Screen | Validate Point-Bubble Frame Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyTimerAnimationFillColorSucssfullyApplied()

})

test("012TV-056 | Trivia | Game Settings | Color Section | Validate Point-Bubble Text Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyPointBubbletext()
        await triviaPage.clickPoint_BubbleTextColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()




})
//we need to know where the reflaction is showing in mobile screen
test.skip("012TV-057 | Trivia | Mobile Screen | Validate Point-Bubble Text Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyTimerAnimationFillColorSucssfullyApplied()

})

test("012TV-058 | Trivia | Game Settings | Color Section | Validate Tile Background Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyTileBackgroundText()
        await triviaPage.clickTileBackgroundFillColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()





})
test("012TV-059 | Trivia | Mobile Screen | Validate Tile Background Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyTileBackgroundColorSucssfullyApplied()

})

test("012TV-060 | Trivia | Game Settings | Color Section | Validate Leaderboard Background Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyLeaderboardBackgroundtextTextIncolorSection()
        await triviaPage.clickLeaderboardAccentColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()




})
test("012TV-061 | Trivia | Mobile Screen | Validate Leaderboard Background Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyLeaderboardBackgroundColorSucssfullyApplied()

})

test("012TV-062 | Trivia | Game Settings | Color Section | Validate Selected Answer Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifySelectedAnswerText()
        await triviaPage.clickSelectedAnswerColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()





})
test("012TV-063 | Trivia | Mobile Screen | Validate Selected Answer Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.clickAnswerButton()
        await triviaMobilePage.verifySelectedAnswerColorSucssfullyApplied()

})

test("012TV-064 | Trivia | Game Settings | Color Section | Validate Correct Answer Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyCorrectAnswerText()
        await triviaPage.clickCorrectAnswerColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()






})
test("012TV-065 | Trivia | Mobile Screen | Validate Correct Answer Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.verifyCorrectAnswerColorSucssfullyApplied()

})

test("012TV-066 | Trivia | Game Settings | Color Section | Validate Incorrect Answer Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyIncorrectAnswerText()
        await triviaPage.clickInorrectAnswerColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()


})
//incorrect Answer color is not updated successfully have an issue
test.skip("012TV-067 | Trivia | Mobile Screen | Validate Incorrect Answer Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.clickIncorrectAnswerButton()


        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickMOveToNextBtnForDefaultGame()

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })

        await triviaMobilePage.clickHomeBtn()
        await triviaMobilePage.verifyIncorrectAnswerColorSucssfullyApplied()
})

test("012TV-068 | Trivia | Game Settings | Color Section | Validate Leaderboard Accent Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        await triviaPage.verifyLeaderboardAccentText()
        await triviaPage.clickLeaderboardAccentColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()







})
test("012TV-069 | Trivia | Mobile Screen | Validate Leaderboard Accent Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.verifyLeaderboardAccentColorSucssfullyApplied()

})

test("012TV-070 | Trivia | Game Settings | Color Section | Validate User's Top 10 Rank Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        // await triviaPage.verifyUserTop10RankText()
        await triviaPage.clickUserTop10RankColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()

})
test("012TV-071 | Trivia | Mobile Screen | Validate User's Top 10 Rank Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.verifyUserTop10RanksColorSucssfullyApplied()

})

test("012TV-072 | Trivia | Game Settings | Color Section | Validate Point-Bubble Fill Color Input Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandColorSection()
        await triviaPage.clickClearAllBtn()

        // await triviaPage.verifyUserTop10RankText()
        await triviaPage.clickUserTop10RankColorInputField()

        await triviaPage.clickColorTypeSelectionFiled()
        await triviaPage.selectSolidColorType()

        await triviaPage.inputColorCodeForMobileDesign(testData.getColorCodeForGameDesign())
        await triviaPage.clickColorPickerSaveBtn()

        await triviaPage.clickOutSideOfInputField()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await triviaPage.clickDefultGameStartBtn()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()
        await triviaPage.clickMOveToNextBtnForDefaultGame()

})
test.skip("012TV-073 | Trivia | Mobile Screen | Validate Point-Bubble Fill Color Functionality Work Properly", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.verifyUserTop10RanksColorSucssfullyApplied()

})

test("012TV-074 | Trivia | Game Settings | Fonts Section | Validate Font Upload Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandFontsSection()

        await triviaPage.clickToDeleteUploadFont()

        await functions.fontUploadFunction()
        await triviaPage.clickToUploadFont()

        await triviaPage.clickToSelectUploadedFont()

})
test("012TV-075 | Trivia | Mobile Screen | Validate Font Functionality Work Properly In Mobile Screen", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.verifyFontSucssfullyApplied()

})

test("012TV-076 | Trivia | Game Settings | Upload Dialogs | Validate Game Title Upload Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandUploadDialogsSection()

        await triviaPage.deleteMobileBackgroundImage()
        await triviaPage.deleteMainBoardImage()
        await triviaPage.deleteSponsorLogoImage()
        await triviaPage.deleteTeamLogoImage()
        await triviaPage.deleteGameTitleImage()

        await functions.logoImageUploadFunction()
        await triviaPage.clickToUploadGameTitle()
        await functions.fileUploadCropper()

})
test("012TV-077 | Trivia | Mobile Screen | Validate Game Title Functionality Work Properly In Mobile Screen", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.verifyGameTitleLogoSucssfullyApplied()

})


test("012TV-078 | Trivia | Game Settings | Upload Dialogs | Validate Team Logo Upload Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandUploadDialogsSection()

        await triviaPage.deleteMobileBackgroundImage()
        await triviaPage.deleteMainBoardImage()
        await triviaPage.deleteSponsorLogoImage()
        await triviaPage.deleteTeamLogoImage()
        await triviaPage.deleteGameTitleImage()

        await functions.logoImageUploadFunction()
        await triviaPage.clickToUploadTeamLogo()
        await functions.fileUploadCropper()

})
test("012TV-079 | Trivia | Mobile Screen | Validate Team Logo Functionality Work Properly In Mobile Screen", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.verifyTeamLogoSucssfullyApplied()

})

test("012TV-080 | Trivia | Game Settings | Upload Dialogs | Validate Sponsor Logo Upload Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandUploadDialogsSection()

        await triviaPage.deleteMobileBackgroundImage()
        await triviaPage.deleteMainBoardImage()
        await triviaPage.deleteSponsorLogoImage()
        await triviaPage.deleteTeamLogoImage()
        await triviaPage.deleteGameTitleImage()

        await functions.logoImageUploadFunction()
        await triviaPage.clickToUploadSponsorLogo()
        await functions.fileUploadCropper()

})
test("012TV-081 | Trivia | Mobile Screen | Validate Sponsor Logo Functionality Work Properly In Mobile Screen", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.verifySponsorLogoSucssfullyApplied()

})

test("012TV-082 | Trivia | Game Design | Upload Dialogs | Validate Mainboard Banner Upload Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandUploadDialogsSection()

        await triviaPage.deleteMobileBackgroundImage()
        await triviaPage.deleteMainBoardImage()
        await triviaPage.deleteSponsorLogoImage()
        await triviaPage.deleteTeamLogoImage()
        await triviaPage.deleteGameTitleImage()

        await functions.portraitBackgroundImageUploadHelper()
        await triviaPage.clickToUploadMainBoardBackground()
        await functions.fileUploadCropper()

        await triviaPage.clickDefaultGameControlPanelSection()
        await triviaPage.clickDefaultRound()

        await test.step("Click Move To Next Round", async () => {
                await triviaPage.clickOutputBtn()
                // await triviaPage.clickOutputScreenLinkOpenBtn()
                await triviaPage.clickOutputScreenLinkCopyBtn()

        })
        let URL = ''
        await test.step("now copy the contents from system clipboard(URL Here)", async () => {
                URL = clipboard.readSync();
                //console.log(URL);
                await triviaPage.GoTo(URL)
                await triviaPage.verifyMainboradBackgroundShowProperly()
        })

})

test("012TV-083 | Trivia | Game Settings | Upload Dialogs | Validate Mobile Background Upload Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandUploadDialogsSection()

        await triviaPage.deleteMobileBackgroundImage()
        await triviaPage.deleteMainBoardImage()
        await triviaPage.deleteSponsorLogoImage()
        await triviaPage.deleteTeamLogoImage()
        await triviaPage.deleteGameTitleImage()

        await functions.portraitBackgroundImageUploadHelper()
        await triviaPage.clickToUploadMobileBackground()
        await functions.fileUploadCropper()

})
test("012TV-084 | Trivia | Mobile Screen | Validate Mobile Background Functionality Work Properly In Mobile Screen", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.verifyMobileBackgroundUploadSuessfully()

})


test("012TV-085 | Trivia | Game Settings | Upload Dialogs | Validate Add Banner Marketing Massage Upload Functionality Work Properly", async ({ loginPage, testData, functions, page, triviaPage }, testInfo) => {
        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandAddBannerSection()

        await triviaPage.deleteMobileBackgroundImage()
        await triviaPage.deleteMainBoardImage()
        await triviaPage.deleteSponsorLogoImage()
        await triviaPage.deleteTeamLogoImage()
        await triviaPage.deleteGameTitleImage()

        await functions.portraitBackgroundImageUploadHelper()
        await triviaPage.clickToUploadAddBanner()
        await functions.fileUploadCropper()

})
test("012TV-086 | Trivia | Mobile Screen | Validate Add Banner Marketing Massage Functionality Work Properly In Mobile Screen", async ({ loginPage, triviaMobilePage, testData, functions, page, triviaPage }, testInfo) => {

        await test.step("Go To Mobile Screen", async () => {
                await triviaMobilePage.gotoUrl()
        })
        await triviaMobilePage.clickHomeBtn()

        await triviaMobilePage.verifyAddBannerUploadSuessfully()



        await test.step("Login Admin", async () => {
                await page.goto('/admin/#/sign-in')
                await page.waitForNavigation();
                await loginPage.login(data.username, data.password)
        })

        await triviaPage.clickTriviaSection()
        await triviaPage.clickDefultGameStopBtn()

        await triviaPage.clickDefultGameDesignSection()
        await triviaPage.clickToExpandAddBannerSection()

        await triviaPage.deleteMobileBackgroundImage()
        await triviaPage.deleteMainBoardImage()
        await triviaPage.deleteSponsorLogoImage()
        await triviaPage.deleteTeamLogoImage()
        await triviaPage.deleteGameTitleImage()

})