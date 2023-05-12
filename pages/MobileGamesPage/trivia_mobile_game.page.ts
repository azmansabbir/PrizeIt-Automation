import { expect, Page } from "@playwright/test";
import Env from "@utils/environment";
import { readFileSync } from 'fs'
export default class triviaMobilePage {
       // [x: string]: any;
       private page: Page;
       // static buffer: void;
       constructor(page: Page) {
              this.page = page;
              page.setViewportSize({ width: 390, height: 844 })
       }
       private triviaMobilePageElements = {
              answerBackground: "//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]",
              questionFrame: "//div[@class='MuiBox-root css-1eb4g8q']",
              correctAnswer: "(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')])[2]",
              incorrectAnswer: "(//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')])[1]",
              countdownAnimationfill: "//div[@class='MuiBox-root css-1htopk5']",
              TileBackground: '(//div[@class="MuiBox-root css-v8gp0z"])[1]',
              TileFrame: '(//div[@class="MuiBox-root css-ucngos"])[1]',
              answerframe: "//div[contains(@class,'MuiFormControl-root MuiFormControl-fullWidth')]",
              selectedAnswerColor: "(//div[@highlightcolor='rgb(16, 10, 124)'])[1]",
              leaderboardText: "//div[text()='Your Rank']",
              leaderboardBackground: "//div[@class='MuiBox-root css-dm87e7']",
              userTopTenRank: "(//td[contains(@class,'MuiTableCell-root MuiTableCell-body')])[1]",
              LeaderboardFrame: "//div[@class='MuiBox-root css-8s3mz3']",
              LeaderboardAccent: "//th[text()='Names']",
              gameTitleImage: "//div[@class='MuiBox-root css-5ffore']",
              teamlogo: '//div[@class="MuiBox-root css-ebl92s"]',
              sponsorlogo: '//div[@class="MuiBox-root css-ebl92s"]',
              submittBtn: "//button[text()='Submit']",
              howToPlayBtn: "(//button[@value='howToPlay']//div)[1]",
              Multiplechoise1: "//p[text()='PNG']",
              Multiplechoise2: "(//div[@class='css-101u4pc'])[3]]",
              addnewPrize: "//div[@class='MuiBox-root css-annpnb']",
              SaveToPhoneBtn: "//button[text()='Save to phone']",
              MobileBackgroundColor: "(//div[@class='MuiBox-root css-vfsi4s']//div)[1]",
              TimeReminingText: "//div[text()='Time Remaining']",
              questionNoHeaderText: "//p[text()='Demo Question Header']",
              mobileScreen: `[id="app"]`,
              mobileBackground: "//div[text()='Demo Game Title']",
              addBanner: "(//div[@backgroundsize='cover'])[3]",
              questionFrames: "//div[@answershadow='true']",
              questionBackground: "//p[text()='Demo Question']",
              tileFrame: "//div[@class='MuiBox-root css-otwehp']",
              answerFrame: "(//div[@answershape='rectangle'])[1]",
              leaderboardFrame: "//div[@bordercolor='rgb(117, 161, 64)']/following-sibling::div[1]",
              leaderboardTexts: "//div[text()='Your Rank']",
              timerAnimationFill: "//div[@class='MuiBox-root css-ejiwkc']",
              leaderBoardBackground: "//div[@backgroundcolor='rgb(117, 161, 64)']",
              leaderboardAccent: "(//th[@color='rgb(117, 161, 64)'])[1]",
              userTop10Rank: "//td[text()='1']",
              firstAnswer: "//p[text()='Demo Answer 01']",
              secondAnswer: "//p[text()='Demo Answer 02']",
              selectedAnswer: "(//div[@answershape='rectangle'])[1]",
              tileBackgound: "(//div[text()='0'])[1]",
              incorretAnswer: "(//div[@answershape='rectangle'])[2]",
              answerText: "//p[text()='Demo Answer 01']",
              generalButtonTextColor: "//div[text()='Demo Game Title']",
              countdownTitleText: "//div[text()='Demo CountDown Title']",
              gameTitleText: "//div[text()='Demo Game Title']",
              gameTitleLogo: "//div[@id='app']/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]",
              teamLogo: "//div[@class='MuiBox-root css-ebl92s']//div[1]",
              homeBtn: "(//button[@value='game']//div)[1]",
              leaderBoardTitleText: "//div[text()='Demo Leaderboard Title']"
              //GameTiteleName:
       }

       async gotoUrl() {
              await this.page.goto(Env.triviaMobileGameUrl);
              await this.page.waitForLoadState("domcontentloaded")
              await this.page.waitForTimeout(3000)
       }
       async clickHomeBtn() {
              const ele = await this.page.locator(this.triviaMobilePageElements.homeBtn)
              try {
                     await ele.click({ button: "left", delay: 1000 })
                     await this.page.waitForLoadState("networkidle")
                     await this.page.waitForTimeout(5000)
              } catch (error) {
                     throw new Error(`Triva | Mobile Screen | Home Button Is Not Visible  ${error}`)
              }
       }

       async verifyQuestionNoHeaderText(header: string) {
              const ele = await this.page.locator(this.triviaMobilePageElements.questionNoHeaderText)
              try {
                     await expect.soft(ele).toContainText(header)
              } catch (error) {
                     throw new Error(`Triva | Mobile Screen | Question No Header Text Is Not Visible  ${error}`)
              }
       }

       async verifyMobileBackgroundSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.mobileBackground).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("MobileBackground_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Mobile Background Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyQuestionFrameSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.questionFrames).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Question_Frame_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Question Frame Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyQuestionBackgroundSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.questionBackground).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Question_Background_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Question Background Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyAnswerFrameSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.answerFrame).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Answer_Frame_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Answer Frame Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyQuestionTextColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.questionBackground).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Question_Text_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Question Text Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyAnswerBackgroundColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.answerFrame).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Answer_Background_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Answer Background Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyTileFrameColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.tileFrame).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Tile_Frame_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Tile Frame Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyAnswerTextColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.answerText).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Answer_Text_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Answer Text Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyButtonFillColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.answerFrame).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Button_Fill_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Button Fill Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyLeaderBoardFrameColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.leaderboardFrame)
              try {
                     await this.page.waitForTimeout(5000)
                     await ele.isVisible()
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | LeaderBoard Frame Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyLeaderBoardTextColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.leaderboardTexts).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Leaderboard_Text_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | LeaderBoard Text Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyTimerAnimationFillColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.timerAnimationFill).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("TimerAnimation_Fill_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Timer Animation Fill Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyUserTop10RanksColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.userTop10Rank).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("User_Top10_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | User Top 10 Ranks Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyFontSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.gameTitleText).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Font_Reflection_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Uploaded Font Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyGameTitleLogoSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.gameTitleLogo).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Game_Title_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Uploaded Game Title Is Not Successfully Show In Mobile Screen ${error}`)
              }
       }

       async verifyTeamLogoSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.teamLogo).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Team_Logo_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Uploaded Team Logo Is Not Successfully Show In Mobile Screen ${error}`)
              }
       }

       async verifySponsorLogoSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.teamLogo).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Sponsor_Logo_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Uploaded Sponsor Logo Is Not Successfully Show In Mobile Screen ${error}`)
              }
       }

       async verifyMobileBackgroundUploadSuessfully() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.mobileBackground).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Mobile_Background_Image_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Uploaded Mobile Background Image Is Not Successfully Show In Mobile Screen ${error}`)
              }
       }

       async verifyAddBannerUploadSuessfully() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.addBanner).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Add_Banner_Image_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Uploaded Add Banner Image Is Not Successfully Show In Mobile Screen ${error}`)
              }
       }

       async verifyLeaderboardBackgroundColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.leaderBoardBackground)
              try {
                     await this.page.waitForTimeout(5000)
                     await ele.isVisible()
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Leaderboard Backgound Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyLeaderboardAccentColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.leaderboardAccent)
              try {
                     await this.page.waitForTimeout(5000)
                     await ele.isVisible()
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Leaderboard Accent Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async clickAnswerButton() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.firstAnswer)
              try {
                     await this.page.waitForTimeout(5000)
                     await ele.click({ button: "left", delay: 1000 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Leaderboard Backgound Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifySelectedAnswerColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.selectedAnswer).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Selected_Answer_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Selected Answer Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyCorrectAnswerColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.selectedAnswer).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Correct_Answer_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Correct Answer Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async clickIncorrectAnswerButton() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.secondAnswer)
              try {
                     await this.page.waitForTimeout(5000)
                     await ele.click({ button: "left", delay: 1000 })
                     await this.page.waitForTimeout(2000)

              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Incorrect Answer Is Not Visible Is Not Visible ${error}`)
              }
       }

       async verifyTileBackgroundColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.tileBackgound).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Tile_Background_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Tile Background Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyIncorrectAnswerColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.incorretAnswer).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("Incorrect_Answer_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Incorrect Answer Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyGeneralButtonTextColorSucssfullyApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.generalButtonTextColor).screenshot()
              try {
                     await this.page.waitForTimeout(5000)
                     await expect(ele).toMatchSnapshot("General_Button_Text_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Genral Button Text Color Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }



       async verifyMobileBackgroundApplied() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.mobileBackground)
              try {
                     await expect.soft(ele).toHaveCSS("background", "rgb(117, 161, 64)")
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Mobile Background Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async reloadPage() {

              try {
                     await this.page.reload()
                     await this.page.waitForTimeout(3000)
              } catch (error) {

              }

       }
       async verifyGameTitleText(gameTitle: string) {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.gameTitleText)
              try {
                     await this.page.waitForTimeout(4000)
                     await expect.soft(ele).toContainText(gameTitle)
              } catch (error) {
                     throw new Error(`Triva | Mobile Screen | Game Title Text Is Not Visible  ${error}`)
              }
       }
       async verifyCountDownTitleText(countdownTitle: string) {

              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.countdownTitleText)
              try {
                     await this.page.reload()
                     await this.page.waitForTimeout(4000)
                     await expect.soft(ele).toContainText(countdownTitle)
              } catch (error) {
                     throw new Error(`Triva | Mobile Screen | CountDown Title Text Is Not Visible  ${error}`)
              }
       }

       async verifyLeaderBoardTitleText(leaderboard: string) {

              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.leaderBoardTitleText)
              try {
                     await this.page.waitForTimeout(5000)
                     await expect.soft(ele).toContainText(leaderboard)
              } catch (error) {
                     throw new Error(`Triva | Mobile Screen | leaderboard Title Text Is Not Visible  ${error}`)
              }
       }

       async clickHowToPlayBtn() {
              const ele = await this.page.locator(this.triviaMobilePageElements.howToPlayBtn)
              try {
                     await ele.click({ button: "left", delay: 1000 })
                     await this.page.waitForLoadState("domcontentloaded")
                     await this.page.waitForTimeout(2000)
              } catch (error) {
                     throw new Error(`Triva | Mobile Screen | How To Play Button Is Not Visible  ${error}`)
              }
       }
       async verifyGameTitleName() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.LeaderboardAccent).isVisible()
              if (ele == true) {
                     await expect.soft(this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.LeaderboardAccent)).toHaveCSS("color", "rgb(16, 10, 124)")
              }
              else throw new Error("Triva mobile leaderboard frame color not visible in leaderboard section")
       }
       async lookforphonenoinform() {
              const ele = this.page.locator('//label[text()="Phone number"]')
              await expect(ele).toBeVisible()
       }
       async lookforEmailinform() {
              const ele = this.page.locator('//label[text()="Email Address"]')
              await expect(ele).toBeVisible()
       }
       async lookforAgeinform() {
              const ele = this.page.locator('//label[text()="Age"]')
              await expect(ele).toBeVisible()
       }
       async lookforBirthdateinform() {
              const ele = this.page.locator('//label[text()="Birth Date"]')
              await expect(ele).toBeVisible()
       }
       async lookforZipinform() {
              const ele = this.page.locator('//label[text()="Zip / Postal Code"]')
              await expect(ele).toBeVisible()
       }
       async typephoneno() {
              await this.page.locator('//input[@name="phone"]').type('+8801568703919')
       }
       async typeemail() {
              await this.page.locator('//input[@name="email"]').type("mdmahfuzalam196@gmail.com")
       }
       async typeAge() {
              await this.page.locator('//input[@name="age"]').type('24')
       }
       async selectbirthdate() {
              await this.page.locator('//input[@name="birthDate"]').click()
              await this.page.locator('//button[@aria-label="calendar view is open, switch to year view"]').click()
              await this.page.locator("//button[text()='2000']").click()
              await this.page.locator("//button[text()='OK']").click()
       }
       async typezip() {
              await this.page.locator('//input[@name="zipCode"]').type('1217')
       }
       async clicksubmit() {
              await this.page.locator('//button[text()="Submit"]').click()
       }
       async selecthomepage() {
              await this.page.locator('//p[text()="HOME"]//parent::button').click()
       }
       async GoTo(URL: string) {
              //console.log(URL)
              await this.page.goto(URL)
              await this.page.waitForTimeout(3000)
       }
       async GoToforOutpurScreenLink(URL: string) {
              //console.log(URL)
              await this.page.goto(URL)
              await this.page.waitForTimeout(3000)
       }
       async openGameusingQRCode() {
              //await this.page.locator("/").click()
              const [page1] = await Promise.all([
                     this.page.waitForEvent('popup'),
                     this.page.frameLocator('iframe').locator("//div[@id='qr-content']//a[1]").click()
              ]);
              return page1;
       }


       async verifyAnswerShapeCircle() {
              try {
                     await this.page.waitForTimeout(5000)
                     expect(await this.page.screenshot({
                            fullPage: true
                     })).toMatchSnapshot("AnswerShape_Circle_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Answer Shape Circle Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyAnswerShapeRectanguler() {
              try {
                     // await this.page.reload()
                     await this.page.waitForTimeout(5000)
                     expect(await this.page.screenshot({
                            fullPage: true
                     })).toMatchSnapshot("AnswerShape_Rectanguler_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Answer Shape Rectanguler Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }

       async verifyAnswerShadow() {
              try {
                     // await this.page.reload()
                     await this.page.waitForTimeout(5000)
                     expect(await this.page.screenshot({
                            fullPage: true
                     })).toMatchSnapshot("AnswerShado_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Answer Shadow Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }
       async verifyAnswerShadowDisbled() {
              try {
                     // await this.page.reload()
                     await this.page.waitForTimeout(5000)
                     expect(await this.page.screenshot({
                            fullPage: true
                     })).toMatchSnapshot("AnswerShado_Disbled_UI.png", { maxDiffPixelRatio: 0.10 })
              } catch (error) {
                     throw new Error(`Trivia | Mobile Screen | Answer Shadow Is Not Successfully Applied In Mobile Screen ${error}`)
              }
       }
       async verifyFontAppliedSuccessfullyInMobileScreen() {
              const ele = this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.TimeReminingText)
              if (await ele.isVisible()) {
                     expect.soft(ele).toHaveScreenshot("FontUploadedSuccessfull.png")
                     await this.page.waitForTimeout(2000)
              }
       }
       async verifyGameTitleLogoAppliedSuccessfullyInMobileScreen() {
              const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-14msma']")
              if (await ele.isVisible()) {
                     expect.soft(ele).toHaveScreenshot("Game_Title_Logo.png", { maxDiffPixelRatio: 0.01 })
                     await this.page.waitForTimeout(2000)
              }
              // expect(await this.page.screenshot({
              //        fullPage: true
              //    })).toMatchSnapshot("Game_Title_Logo.png")
       }
       async verifySponsorLogoAppliedSuccessfullyInMobileScreen() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("Sponsor_Logo.png")
              await this.page.waitForTimeout(2000)
       }
       async verifyMainboardBackgroundAppliedSuccessfullyInMobileScreen() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("Mainboard_Background.png")
              await this.page.waitForTimeout(2000)
       }
       async verifyMobiledBackgroundAppliedSuccessfullyInMobileScreen() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("Mobile_Background.png")
              await this.page.waitForTimeout(2000)
       }
       async verifyBannerImageAppliedSuccessfullyInMobileScreen() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("Banner_Image.png")
              await this.page.waitForTimeout(2000)
       }
       async verifyTeamLogoAppliedSuccessfullyInMobileScreen() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("Team_Logo.png")
              await this.page.waitForTimeout(2000)
       }
       async verifyAddNewPrize_ManualDistribution_Cola() {
              const ele = await this.page.locator(this.triviaMobilePageElements.addnewPrize).isVisible()
              if (ele == true) {
                     await expect(this.page.locator(this.triviaMobilePageElements.addnewPrize)).toHaveScreenshot('AddNewPrize_Manual_Cola.png')
              }
              else throw new Error('Trivia Add new manual distribution prize is not visible on mobile screen')
       }
       async verifyAddNewPrize_AutomaticDistribution_Burger() {
              const ele = await this.page.locator(this.triviaMobilePageElements.addnewPrize).isVisible()
              if (ele == true) {
                     await expect.soft(this.page.locator(this.triviaMobilePageElements.addnewPrize)).toHaveScreenshot('AddNewPrize_Automatic_Burger.png')
              }
              else throw new Error('Trivia Add new manual distribution prize is not visible on mobile screen')
       }



       async verifyBackgroundcolor() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("Background_color.png")
              //const ele = this.page.frameLocator('iframe').locator('//div[@class="MuiBox-root css-vfsi4s"]')
              // const color = await ele.evaluate((ele) =>{
              //        return window.getComputedStyle(ele).getPropertyValue("background-")
              // })
              //expect(color).toBe("rgb(28,130,0)")
              //await expect.soft(ele).toHaveCSS("background","rgb(16, 10, 124)");
       }
       async verifyGeneralButtonTextcolor() {
              const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-itlj2m']")
              await expect.soft(ele).toHaveCSS("color", "rgb(16, 10, 124)")
              //button[contains(@class,'MuiButtonBase-root MuiButton-root')]
       }
       async verifyButtonFillcolor() {
              const ele = this.page.frameLocator('iframe').locator("//button[contains(@class,'MuiButtonBase-root MuiButton-root')]")
              // const color = await ele.evaluate((ele) =>{
              //        return window.getComputedStyle(ele).getPropertyValue("background-")//button[contains(@class,'MuiButtonBase-root MuiButton-root')]
              // })
              //expect(color).toBe("rgb(28,130,0)")
              await expect.soft(ele).toHaveCSS("background-color", "rgb(16, 10, 124)")
       }
       async verifyButtonBackgroundColor() {
              const ele = await this.page.frameLocator('iframe').locator("//button[contains(@class,'MuiButtonBase-root MuiButton-root')]")
              await expect.soft(ele).toHaveScreenshot('Button_Background_screenshot.png', { animations: 'allow', maxDiffPixelRatio: 0.01 })
       }
       async verifyQuestionTextColor() {
              const ele = this.page.frameLocator('iframe').locator('//div[@class="MuiBox-root css-vyy8gz"]')
              await expect.soft(ele).toHaveCSS("color", "rgb(16, 10, 124)")
       }
       async verifyQuestionBackgroundColor() {
              const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1nsiq2x']")
              await expect.soft(ele).toHaveCSS("background-color", "rgb(16, 10, 124)")
       }
       async verifyAnswerBackgroundColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.answerBackground)
              try {
                     await expect.soft(ele).toHaveCSS("background", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile question background field is not visible ${error}`)
              }
       }
       async verifyQuestionFrameColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.questionFrame)
              try {
                     await expect.soft(ele).toHaveCSS("border-color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile question background field is not visible ${error}`)
              }
       }
       async verifyAnswerFrameColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.answerframe)
              try {
                     await expect.soft(ele).toHaveCSS("border-color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile question background field is not visible ${error}`)
              }
       }
       async verifySelectedAnswerColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.selectedAnswerColor)
              try {
                     await expect.soft(ele).toHaveCSS("border-color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva selected answer button  is not visible ${error}`)
              }
       }
       async verifyCorrectAnswerColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.correctAnswer)
              try {
                     await expect.soft(ele).toHaveCSS("border-color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile correct answer  background field is not visible ${error}`)
              }
       }
       async verifyIncorrectAnswerColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.incorrectAnswer)
              try {
                     await expect.soft(ele).toHaveCSS("border-color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile incorrect answer  background field is not visible ${error}`)
              }
       }
       async verifyCountdownAnnimationFillColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.countdownAnimationfill)
              try {
                     await expect.soft(ele).toHaveCSS("stroke", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile Countdown annimation fill field is not visible ${error}`)
              }
       }
       async verifyTileBackgroundFillColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.TileBackground)
              try {
                     await expect.soft(ele).toHaveCSS("background-color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile Tile Background field is not visible ${error}`)
              }
       }
       async verifyTileFrameColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.TileFrame)
              try {
                     await expect.soft(ele).toHaveCSS("border-color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile Tile frame color is not visible ${error}`)
              }
       }
       async verifyLeaderboardtextColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.leaderboardText)
              try {
                     await expect.soft(ele).toHaveCSS("color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile Leader board text is not visible ${error}`)
              }
       }
       async verifyLeaderboardBackgroundColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.leaderboardBackground)
              try {
                     await expect.soft(ele).toHaveCSS("background-color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile Leader board background section is not visible ${error}`)
              }
       }
       async verifyTAnswerFrameColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.answerframe)
              try {
                     await expect.soft(ele).toHaveCSS("background-color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva Answer Background frame is not visible ${error}`)
              }
       }
       async verifyTopTenRankColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.userTopTenRank)
              try {
                     await expect.soft(ele).toHaveCSS("color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile User Top 10 Rank is not visible in leaderboard section ${error}`)
              }
       }
       async verifyLeaderboardFrameColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.LeaderboardFrame)
              try {
                     await expect.soft(ele).toHaveCSS("border-color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile leaderboard frame color not visible in leaderboard section ${error}`)
              }
       }
       async verifyLeaderboardAccentColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.LeaderboardAccent)
              try {
                     await expect.soft(ele).toHaveCSS("color", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile leaderboard frame color not visible in leaderboard section ${error}`)
              }
       }
       async verifyMobileBackgroundColor() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.MobileBackgroundColor)
              try {
                     await expect.soft(ele).toHaveCSS("background", "rgb(16, 10, 124)")
              } catch (error) {
                     throw new Error(`Triva mobile background color is not visible in mobile screen ${error}`)
              }
       }
       async verifyAnswerTextColor() {
              const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
              await expect.soft(ele).toHaveCSS("color", "rgb(16, 10, 124)")
       }
       async inputQuestionAnswer() {
              const ele = await this.page.frameLocator('iframe').locator("//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')]").isVisible()
              if (ele == true) {
                     await this.page.frameLocator('iframe').locator("//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')]").fill('PNG')
              }
       }
       async clickSubmittBtn() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.submittBtn)
              try {
                     await ele.click({ button: "left", force: true })
                     await this.page.waitForTimeout(2000)
              } catch (error) {
                     throw ("Triva submitt button is not visible on mobile screen")
              }

       }
       async clickMultipleChoise1() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.Multiplechoise1)
              try {
                     await this.page.waitForTimeout(2000)
                     await ele.click({ button: "left", delay: 1000 })
              } catch (error) {
                     throw ("Triva Multiple choise first button is not visible")
              }

       }
       async clickMultipleChoise2() {
              const ele = await this.page.frameLocator('iframe').locator(this.triviaMobilePageElements.Multiplechoise2)
              try {
                     await ele.click({ button: "left", delay: 1000 })
              } catch (error) {
                     throw new Error("Triva Multiple choise Second button is not visible")
              }
       }
       async validateSaveToPhoneBtn() {
              await this.page.waitForTimeout(1000)
              const [download] = await Promise.all([
                     this.page.waitForEvent('download'),
                     this.page.locator(this.triviaMobilePageElements.SaveToPhoneBtn).click({ force: true })
              ])
              const suggestedFileName = download.suggestedFilename()
       }
}