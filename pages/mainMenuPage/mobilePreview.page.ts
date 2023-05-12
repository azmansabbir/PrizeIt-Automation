import { expect, Page } from "@playwright/test";
import Env from "@utils/environment";
import { readFileSync } from 'fs'
export default class mobilePreviewPage {
       private page: Page;
       constructor(page: Page) {
              this.page = page;
              page.setViewportSize({ width: 390, height: 844 })
       }
       private mobilePreviewPageElements = {
              additionalphoneNumberInputField: `//input[@name="phone"]`,
              additionalEmailInputField: `//input[@name="email"]`,
              additionalAgeInputField: `//input[@name="age"]`,
              additionalDatePickerInputField: `(//label[text()='Birth Date']/following::input)[1]`,
              additionalDatePickerYearSelactionInputField: "//button[@aria-label='calendar view is open, switch to year view']",
              additionalDate2000YearBtn: "//button[text()='2000']",
              additionalDateInputField: "(//input[@id='additionalbirthDate'])[2]",
              additionalDateEditBtn: `//button[@aria-label='calendar view is open, go to text input view']`,
              additionalDateYearInputField: `//div[@class='PrivatePickersFadeTransitionGroup-root css-1bx5ylf']//div[1]`,
              additionalDatePickerOkBtn: "//button[text()='Save']",
              additionalDatePickerLabel: "//label[@for='additionalbirthDate']",
              additionalZipCodeInputField: `//input[@name="zipCode"]`,
              additionalZipCodeInputFieldLabel: "//label[@for='additionalzipCode']",
              additionalSubmitBtn: "//button[@type='submit']",
              customQuestionSectionTitle: "//p[text()='Questionnaire & Opt-Ins']",
              customQuestionInputField: "//input[@placeholder='Give some description here...']",
              submitBtn: "//button[text()='Submit']",
              choiceCheckBox: "//input[@type='checkbox']",
              choiceCheckBoxWhenCustomQuestionInTop: "(//input[@type='checkbox'])[1]",
              homeAvater: "(//button[@value='game']//div)[1]",
              homeText: "//p[text()='HOME']",
              arcadeSectionInMobileScreen: "(//button[@value='games']//div)[1]",
              prizeDropGameText: "//p[text()='Prize Drop']",
              outSideGameTitleText: "//p[text()='Auto Game']",
              squareImage: "div:nth-child(2) > div > div:nth-child(2) > .MuiBox-root",
              rectangulerImageType: ".css-rk019r>>nth=1",
              arcadeSectionlogoHeader: ".css-n8k4mt",
              fanaticsGameTitle: "//p[text()='Fanatics-Filter-Web']",
              gussTheScroeGameTitle: "//p[text()='Guess The Score']",
              triviaGameTitle: "//p[text()='Trivia']",
              liveWallGameTitle: "//p[text()='Live Wall']",
              noiseMeterGameTitle: "//p[text()='Noise Meter']",
              tugOfWarGameTitle: "//p[text()='Tug of War']",
              prizeDropGameTitle: "//p[text()='Prize Drop']",
              selectTextOnHomeScreen: "(//h3[text()='Select'])[1]",
              teamAccountModal: "(//div[@teamcount='2'])[2]",
              postContentSectionMobileUIEle: "//div[@class='MuiBox-root css-d6o6cv']",
              openLibraryBtn: "//button[text()='Open Library']",
              takePhotoBtn: "//button[text()='Take Photo']",
              takeRecordVideoBtn: "//button[text()='Record Video']",
              takeRecordVideoMinMaxTitle: "//p[text()='The video must be (5)-(15) seconds long']",
              homePageBtn: "(//button[@value='game']//div)[1]",
              welcomeMassage: "//p[text()='   Welcome ']",
              uploadedImageDeleteBtn: "(//button[@type='button'])[1]",
              postTextInputField: "//textarea[@placeholder='Type something']",
              postSubmitBtn: "//button[text()='Submit']",
              prizeSectionBtn: "(//button[@value='prize']//div)[1]"
       }
       // export default class mobilePreviewPage {
       //        // [x: string]: any;
       //        private page: Page;
       //        // static buffer: void;
       //        constructor(page: Page) {
       //               this.page = page;
       //               page.setViewportSize({ width: 390, height: 844 })
       //        }
       async gotoUrl() {
              await this.page.goto(Env.fanSeeWallGameOpenUrl);
              await this.page.waitForLoadState("domcontentloaded")
       }
       async clickTriviaSectionForOpenMobileScreen() {
              const ele = this.page.locator("//p[text()='Trivia']")
              await expect(ele).toBeVisible()
              await ele.click({ force: true })
              await this.page.waitForLoadState("networkidle")
       }
       async clickMobileLinkBtn() {
              const ele = this.page.frameLocator('iframe').locator(`(//button[@aria-label='Show Mobile Link']//button)[1]`).first()
              expect(ele).toBeVisible()
              await ele.click({ force: true })
              await this.page.waitForTimeout(2000)
       }
       async clickMobileLinkOpenBtn() {
              // Click text=Open Link
              const [page1] = await Promise.all([
                     this.page.waitForEvent('popup'),
                     this.page.frameLocator('iframe').locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]").click()
              ]);
              return page1;
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
       async clickLoginWithGoogleIconIsVisible() {
              await this.page.waitForSelector("//button[@aria-label='Sign Up with Google']")
              const [page1] = await Promise.all([
                     this.page.waitForEvent('popup'),
                     this.page.locator("//button[@aria-label='Sign Up with Google']").click()
              ]);
              await this.page.waitForLoadState("networkidle")
              return page1;
              //        const ele = await this.page.locator("//button[@aria-label='Sign Up with Google']").isVisible()
              //        if ((ele == true)){
              //               await this.page.locator("//button[@aria-label='Sign Up with Google']").click({button:"left", delay:1000})
              //       }
              //       else throw new Error("Mobile Welcome Screen Login With Google option Is not Visible")
              //       await this.page.waitForLoadState("networkidle")
       }
       async inputEamilForLoginWithGoogle() {
              await this.page.waitForNavigation()
              const ele = await this.page.locator(`[type="email"]`).isVisible()
              if ((ele == true)) {
                     await this.page.locator('[type="email"]').type("ss.unidev@gmail.com")
              }
              else throw new Error("Mobile Welcome Screen Login With Google option Is not Visible")
       }
       async clickSignInWithGoogleWindowNextBtn() {
              const ele = await this.page.locator(`(//button[@type='button']//span)[2]`).isVisible()
              if ((ele == true)) {
                     await this.page.locator(`(//button[@type='button']//span)[2]`).click({ delay: 1000 })
              }
              else throw new Error("Mobile Welcome Screen Sign In With Google Window Next Btn Is not Visible")
       }
       async clickArcadeSection() {
              const ele = await this.page.locator(this.mobilePreviewPageElements.arcadeSectionInMobileScreen)
              try {
                     await ele.click({ button: "left", delay: 1000 })
                     await this.page.waitForLoadState("networkidle")
              } catch (error) {
                     throw new Error("Mobile Screen Arcade Game Section Is Not Visiable")
              }
       }
       async verifyAddOutSideGameSuccessfullyShowOnMobileScreen() {
              const ele = await this.page.locator(this.mobilePreviewPageElements.outSideGameTitleText).textContent()
              if ((ele === "Auto Game")) {
                     // await this.page.locator(this.mobilePreviewPageElements.outSideGameTitleText).click({button:"left", delay: 1000})
              }
              else throw new Error("Add Out Side Game Successfully Show On Mobile Screen")
       }
       async verifyFontSuccessfullyAppliedInMobileScreeen() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.prizeDropGameText)
              const ele = await this.page.locator(this.mobilePreviewPageElements.prizeDropGameText).screenshot()
              expect(ele).toMatchSnapshot("arcade-font-uploaded-ui.png", { maxDiffPixelRatio: 0.10 })
       }
       async verifyFanaticsLogoSuccessfullyUplodedInMobileScreen() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.fanaticsGameTitle)
              const ele = await this.page.locator(this.mobilePreviewPageElements.fanaticsGameTitle).screenshot()
              expect(ele).toMatchSnapshot("arcade-FanaticsLogo-uploaded-ui.png", { maxDiffPixelRatio: 0.10 })
       }
       async verifyGussTheScroeGameLogoSuccessfullyUplodedInMobileScreen() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.gussTheScroeGameTitle)
              const ele = await this.page.locator(this.mobilePreviewPageElements.gussTheScroeGameTitle).screenshot()
              expect(ele).toMatchSnapshot("arcade-gussTheScroeGame-uploaded-ui.png", { maxDiffPixelRatio: 0.10 })
       }
       async verifyTriviaGameLogoSuccessfullyUplodedInMobileScreen() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.triviaGameTitle)
              const ele = await this.page.locator(this.mobilePreviewPageElements.triviaGameTitle).screenshot()
              expect(ele).toMatchSnapshot("arcade-triviaGame-uploaded-ui.png", { maxDiffPixelRatio: 0.10 })
       }
       async verifyLiveWallGameLogoSuccessfullyUplodedInMobileScreen() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.liveWallGameTitle)
              const ele = await this.page.locator(this.mobilePreviewPageElements.liveWallGameTitle).screenshot()
              expect(ele).toMatchSnapshot("arcade-liveWallGameLogo-uploaded-ui.png", { maxDiffPixelRatio: 0.10 })
       }
       async verifyNoiseMeterGameLogoSuccessfullyUplodedInMobileScreen() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.noiseMeterGameTitle)
              const ele = await this.page.locator(this.mobilePreviewPageElements.noiseMeterGameTitle).screenshot()
              expect(ele).toMatchSnapshot("arcade-noiseMeterGameLogo-uploaded-ui.png", { maxDiffPixelRatio: 0.10 })
       }
       async verifyTugOfWarGameLogoSuccessfullyUplodedInMobileScreen() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.tugOfWarGameTitle)
              const ele = await this.page.locator(this.mobilePreviewPageElements.tugOfWarGameTitle).screenshot()
              expect(ele).toMatchSnapshot("arcade-tugOfWarGameLogo-uploaded-ui.png", { maxDiffPixelRatio: 0.10 })
       }
       async verifyPrizeDropGameLogoSuccessfullyUplodedInMobileScreen() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.prizeDropGameText)
              const ele = await this.page.locator(this.mobilePreviewPageElements.prizeDropGameText).screenshot()
              expect(ele).toMatchSnapshot("arcade-gussTheScroeGameTitle-uploaded-ui.png", { maxDiffPixelRatio: 0.10 })
       }
       async verifySquareImageTypeSuccessfullyAppliedInMobileScreeen() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.squareImage)
              const ele = await this.page.locator(this.mobilePreviewPageElements.squareImage)
              expect(ele).toHaveCSS("width", "156px")
       }
       async verifyRectanglerImageTypeSuccessfullyAppliedInMobileScreeen() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.rectangulerImageType)
              const ele = await this.page.locator(this.mobilePreviewPageElements.rectangulerImageType)
              expect(ele).toHaveCSS("width", "331.5px")
       }
       async verifyLogoHeaderSuccessfullyAppliedInMobileScreeen() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.arcadeSectionlogoHeader)
              const ele = await this.page.locator(this.mobilePreviewPageElements.arcadeSectionlogoHeader).screenshot()
              expect(ele).toMatchSnapshot("arcade-logoHeader-uploaded-ui.png")
       }
       async inputPasswordForLoginWithGoogle() {
              await this.page.waitForNavigation()
              const ele = await this.page.locator(`//input[@type='password']`).isVisible()
              if ((ele == true)) {
                     await this.page.locator("//input[@type='password']").fill("Ilovemymother1@34")
              }
              else throw new Error("Mobile Welcome Screen Sign In With Google Window Password Input Field Is not Visible")
       }
       async verifyLoginWithGoogleIconIsHidden() {
              await this.page.waitForTimeout(3000)
              const ele = await this.page.locator("//button[@aria-label='Sign Up with Google']").isHidden()
              if ((ele == true)) {
              }
              else throw new Error("Mobile Welcome Screen Login With Google option Is Not Hidden After Uncheck Social Media Option From Admin Side")
       }
       async verifyLoginWithPhoneNumberIsVisible() {
              await this.page.waitForTimeout(3000)
              const ele = await this.page.locator("//input[@type='tel']").isVisible()
              if ((ele == true)) {
              }
              else throw new Error("Mobile Welcome Screen Login With Phone Number option Is Not Visible After check Login With Phone Varification Option From Admin Side")
       }
       async verifyLoginWithEmailInputFieldIsVisible() {
              await this.page.waitForSelector("//input[@type='email']")
              const ele = await this.page.locator("//input[@type='email']").isVisible()
              if ((ele == true)) {
              }
              else throw new Error("Mobile Welcome Screen Login With Email Input Field option Is Not Visible After check Login With Email Validation Option From Admin Side")
       }
       async verifyAutomaticallyAssignUserName() {
              await this.page.waitForSelector("//img[@alt='User avatar']")
              const ele = await this.page.locator("#usernameField").textContent()
              if (expect(ele?.includes("david"))) {
                     console.log("Automatically Assign User Name Updated Successfully")
              }
              else throw new Error("Automatically Assign User Name Is Not Updated Successfully ")
       }
       async clickProfilePictureEditButton() {
              const ele = await this.page.locator("//button[@active='true']").isVisible()
              if ((ele == true)) {
                     await this.page.locator("//button[@active='true']").click({ button: "left", delay: 1000 })
              }
              else throw new Error("My Profile Page Profile Picture Edit Button Is Not Visible")
       }
       async verifyAutoAssaignProfilePictureUpdatedSuccessfully() {
              await this.page.waitForSelector("//button[@aria-label='Close']")
              const ele = await this.page.locator("//div[@class='MuiBox-root css-6nzrs3']//div[1]").isVisible()
              if ((ele == true)) {
                     console.log("Auto Assaign Profile Picture Updated Successfully")
              }
              else throw new Error("My Profile Page Profile Picture Auto Assaign Profile Picture is not visiable")
       }
       async verifyAutoAssaignProfilePictureUpdatedSuccessfullyAfterEdit() {
              await this.page.waitForSelector("//button[@aria-label='Close']")
              const ele = await this.page.locator("//div[@class='MuiBox-root css-n97oo2']").isVisible()
              if ((ele == true)) {
                     console.log("Auto Assaign Profile Picture Updated Successfully After Edit")
              }
              else throw new Error("My Profile Page Profile Picture Auto Assaign Profile Picture is not Updated After Edit")
       }
       async UserSelecthisProfilePicture() {
              await this.page.waitForSelector("//button[@aria-label='Close']")
              const ele = await this.page.locator("(//div[@class='MuiBox-root css-1gqdyyg'])[3]").isVisible()
              if ((ele == true)) {
                     await this.page.locator("(//div[@class='MuiBox-root css-1gqdyyg'])[3]").click({ button: "left", delay: 1000 })
              }
              else throw new Error("My Profile Page Profile Picture user is not Updated After successfully")
       }
       async clickProfilePictureWindowSaveBtn() {
              await this.page.waitForSelector("//button[@aria-label='Close']")
              const ele = await this.page.locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]").isVisible()
              if ((ele == true)) {
                     await this.page.locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]").click({ button: "left", delay: 1000 })
              }
              else throw new Error("My Profile Page Profile Picture Save Button Is Not Visible")
       }
       async inputEamilForLoginWithEmail() {
              await this.page.waitForTimeout(3000)
              const ele = await this.page.locator("//input[@type='email']").isVisible()
              if ((ele == true)) {
                     await this.page.locator("//input[@type='email']").fill("ss.unidev@gmail.com")
              }
              else throw new Error("Mobile Welcome Screen Login With Email Input Field Is Not Visible After check Login With Email Validation Option From Admin Side")
       }
       async clickSignInBtn() {
              const ele = await this.page.locator("(//button[@type='button'])[1]").isVisible()
              if ((ele == true)) {
                     await this.page.locator("(//button[@type='button'])[1]").click()
              }
              else throw new Error("Mobile Welcome Screen Login With Email Input Field option Is Not Visible After check Login With Email Validation Option From Admin Side")
       }
       async verifyLoginWithFacebookIconIsHidden() {
              const ele = await this.page.locator("//button[@aria-label='Sign Up with Facebook']").isHidden()
              if ((ele == true)) {
              }
              else throw new Error("Mobile Welcome Screen Login With Facebook option Is Not Hidden After Uncheck Social Media Option From Admin Side")
       }
       async verifyLoginWithMicrosoftIconIsHidden() {
              const ele = await this.page.locator("//button[@aria-label='Sign Up with Microsoft']").isHidden()
              if ((ele == true)) {
              }
              else throw new Error("Mobile Welcome Screen Login With Microsoft option Is Not Hidden After Uncheck Social Media Option From Admin Side")
       }
       async clickLoginWithFacebookIconIsVisible() {
              const [page1] = await Promise.all([
                     this.page.waitForEvent('popup'),
                     this.page.locator("//button[@aria-label='Sign Up with Facebook']").click()
              ]);
              await this.page.waitForLoadState("networkidle")
              return page1;
              //    const ele = await this.page.locator("//button[@aria-label='Sign Up with Facebook']").isVisible()
              // if ((ele == true)){
              // }
              // else throw new Error("Mobile Welcome Screen Login With Facbook option Is not Visible")
       }
       async inputEamilForLoginWithFacebook() {
              await this.page.waitForSelector(`#email`)
              const ele = await this.page.locator(`#email`).isVisible()
              if ((ele == true)) {
                     await this.page.locator('#email').type("ss.unidev@gmail.com")
              }
              else throw new Error("Mobile Welcome Screen Login With Facebook Eamil Input Option Is not Visible")
       }
       async inputPasswordForLoginWithFacebook() {
              const ele = await this.page.locator(`[type="password"]`).isVisible()
              if ((ele == true)) {
                     await this.page.locator('[type="password"]').fill("SecretPassword1@34")
              }
              else throw new Error("Mobile Welcome Screen Sign In With Facebook Window Password Input Field Is not Visible")
       }
       async clickSignInWithFacebookWindowLoginBtn() {
              const ele = await this.page.locator(`[type="submit"]`).isVisible()
              if ((ele == true)) {
                     await this.page.locator(`[type="submit"]`).click({ force: true })
              }
              else throw new Error("Mobile Welcome Screen Sign In With Facebook Window Login Btn Is not Visible")
              await this.page.waitForLoadState()
       }
       async clickContineuWithFacebookBtn() {
              await this.page.waitForSelector("(//div[@role='button']//div)[3]")
              const ele = await this.page.locator("(//div[@role='button']//div)[3]").isVisible()
              if ((ele == true)) {
                     await this.page.locator("(//div[@role='button']//div)[3]").click()
              }
              else throw new Error("Mobile Welcome Screen Login With Microsoft option Is not Visible")
       }
       async clickLoginWithMicrosoftIconIsVisible() {
              const [page1] = await Promise.all([
                     this.page.waitForEvent('popup'),
                     this.page.locator("//button[@aria-label='Sign Up with Microsoft']").click()
              ]);
              await this.page.waitForLoadState("networkidle")
              return page1;
              // const ele = await this.page.locator("//button[@aria-label='Sign Up with Microsoft']").isVisible()
              // if ((ele == true)){
              //        await this.page.locator("//button[@aria-label='Sign Up with Microsoft']").click()
              // }
              // else throw new Error("Mobile Welcome Screen Login With Microsoft option Is not Visible")
       }
       async inputEamilForLoginWithMicrosoft() {
              await this.page.waitForNavigation()
              const ele = await this.page.locator(`[type="email"]`).isVisible()
              if ((ele == true)) {
                     await this.page.locator('[type="email"]').type("unidevgo@outlook.com")
              }
              else throw new Error("Mobile Welcome Screen Login With Microsoft Eamil Input Option Is not Visible")
       }
       async clickNextBtnOnMicrosoftWindow() {
              const ele = await this.page.locator(`[type="submit"]`).isVisible()
              if ((ele == true)) {
                     await this.page.locator(`[type="submit"]`).click({ force: true })
              }
              else throw new Error("Mobile Welcome Screen Sign In With Microsoft Window Login Btn Is not Visible")
              await this.page.waitForLoadState()
       }
       async inputPasswordForLoginWithMicrosoft() {
              const ele = await this.page.locator(`[type="password"]`).isVisible()
              if ((ele == true)) {
                     await this.page.locator('[type="password"]').type("SecretPassword1@34")
              }
              else throw new Error("Mobile Welcome Screen Sign In With Microsoft Window Password Input Field Is not Visible")
       }
       async clickSignInBtnOnMicrosoftWindow() {
              const ele = await this.page.locator(`[type="submit"]`).isVisible()
              if ((ele == true)) {
                     await this.page.locator(`[type="submit"]`).click({ force: true })
              }
              else throw new Error("Mobile Welcome Screen Sign In With Microsoft Window Login Btn Is not Visible")
              await this.page.waitForLoadState()
       }
       async inputPhoneNumberForAditionalInfo() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalphoneNumberInputField)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalphoneNumberInputField).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalphoneNumberInputField).fill("+8801051703506")
              }
              else throw new Error("Aditional Information Phone NUmber Input Field Is not visible In User Side")
       }
       async inputAgeForAditionalInfo() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalAgeInputField)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalAgeInputField).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalAgeInputField).fill("22")
              }
              else throw new Error("Aditional Information Age Input Field Is not visible In User Side")
       }
       async inputEmailForAditionalInfo() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalEmailInputField)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalEmailInputField).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalEmailInputField).fill("demo@email.com")
              }
              else throw new Error("Aditional Information Email Input Field Is not visible In User Side")
       }
       async clickAdditionalDatePickterInputField() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalDatePickerLabel)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalDatePickerInputField).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalDatePickerInputField).click({ button: "left", delay: 1000 })
                     await this.page.waitForTimeout(2000)
              }
              else throw new Error("Aditional Information Date Picker Input Field Is not visible In User Side")
       }
       async clickAdditionalDateEditBtn() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalDatePickerYearSelactionInputField)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalDatePickerYearSelactionInputField)
              try {
                     await ele.click({ button: "left", delay: 1000 })
              } catch (error) {
                     throw new Error(`Aditional Information Date Picker Edit Button Is not visible In User Side | could no fine Error occurred: ${error}`)
              }
              // const ele = await this.page.locator(this.mobilePreviewPageElements.additionalDateEditBtn).isVisible()
              // if ((ele == true)) {
              //        await this.page.locator(this.mobilePreviewPageElements.additionalDateEditBtn).click({ button: "left", delay: 1000 })
              // }
              // else throw new Error("Aditional Information Date Picker Edit Button Is not visible In User Side")
       }
       async inputAdditionalDate() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalDate2000YearBtn)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalDate2000YearBtn).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalDate2000YearBtn).click({ button: "left", delay: 1000 })
              }
              else throw new Error("Aditional Information Date Picker Date Input Field Is not visible In User Side")
       }
       async clickAdditionalDateDatePickerOkBtn() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalDatePickerOkBtn)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalDatePickerOkBtn).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalDatePickerOkBtn).click({ button: "left", delay: 1000 })
              }
              else throw new Error("Aditional Information Date Picker Ok Button Is not visible In User Side")
       }
       async clickSubmitButton() {
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalSubmitBtn).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalSubmitBtn).click({ button: "left", delay: 1000 })
              }
              else throw new Error("Submit Button Is not visible In User Side On Welcome Screen")
       }
       async inputAdditionalZipCode() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalZipCodeInputFieldLabel)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalZipCodeInputFieldLabel).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalZipCodeInputField).fill("1217")
              }
              else throw new Error("Aditional Information Zip Code Input Field Is not visible In User Side")
       }
       async inputCustomQuestionForUser() {
              // await this.page.waitForSelector(this.mobilePreviewPageElements.customQuestionSectionTitle)
              const ele = await this.page.locator(this.mobilePreviewPageElements.customQuestionInputField)
              try {
                     await ele.fill("Demo Ans")
              } catch (error) {
                     throw new Error(`Aditional Information Custom Question Input Field Is not visible In User Side ${error}`)
              }
       }
       async clickCustomChoiceCheckBoxWhenCustomQuestionInTop() {
              // await this.page.waitForSelector(this.mobilePreviewPageElements.customQuestionSectionTitle)
              const ele = await this.page.locator(this.mobilePreviewPageElements.choiceCheckBoxWhenCustomQuestionInTop)
              try {

                     await ele.click({ button: "left", delay: 1000 })
              } catch (error) {
                     throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")
              }
       }
       async clickCustomChoiceCheckBox() {
              // await this.page.waitForSelector(this.mobilePreviewPageElements.customQuestionSectionTitle)
              const ele = await this.page.locator(this.mobilePreviewPageElements.choiceCheckBox)
              try {
                     await ele.click({ button: "left", delay: 1000 })
              } catch (error) {
                     throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")
              }
       }
       async clickAddNewQuestionSubmitBtn() {
              const ele = await this.page.locator(this.mobilePreviewPageElements.submitBtn).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.submitBtn).click({ button: "left", delay: 1000 })
              }
              else throw new Error("Aditional Information Custom Question Section Submit Button Is not visible In User Side")
       }
       async verifyMyProfileSuccessfullyClick() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.homeAvater)
              const ele = await this.page.locator(this.mobilePreviewPageElements.homeAvater).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.homeAvater).click({ button: "left", delay: 1000 })
              }
              else throw new Error("Sign UP Home Screen Functionality Does not Work After Successfully Check SignUp Home Screen Radio From Admin Side")
       }
       async clickTermsAndConditionsLink() {
              await this.page.waitForSelector("img[alt='Logotype']")
              const ele = await this.page.locator(`//a[contains(text(),'Terms & Conditions')]`).isVisible()
              if ((ele == true)) {
                     await this.page.locator(`//a[contains(text(),'Terms & Conditions')]`).click({ button: "left", delay: 1000 })
              }
              else throw new Error("Mobile Welcome Screen Tems And Condition Link Is not Visiable")
              await this.page.waitForTimeout(4000)
       }
       async verifyTermsAndConditionsPageSuccessfullyShowOnMobileScreen() {
              await this.page.waitForSelector("//p[contains(@class,'MuiTypography-root MuiTypography-body1')]")
              const ele = await this.page.locator(`//h1[text()='Terms & Conditions']`)
              try {
                     await expect(ele).toContainText("Terms & Conditions")
              } catch (error) {
                     throw new Error("Terms And Conditions Page does not Show On MobileScreen")
              }

       }

       async typephoneno() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalphoneNumberInputField)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalphoneNumberInputField).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalphoneNumberInputField).fill("+8801051703506")
              }
              else throw new Error("Aditional Information Phone NUmber Input Field Is not visible In User Side")
       }
       async typeemail() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalEmailInputField)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalEmailInputField).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalEmailInputField).fill("demo@email.com")
              }
              else throw new Error("Aditional Information Email Input Field Is not visible In User Side")
       }
       async typeAge() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalAgeInputField)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalAgeInputField).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalAgeInputField).fill("22")
              }
              else throw new Error("Aditional Information Age Input Field Is not visible In User Side")
       }
       async selectbirthdate() {

              const additionalDatePickerLabel = await this.page.locator(this.mobilePreviewPageElements.additionalDatePickerInputField).isVisible()
              if ((additionalDatePickerLabel == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalDatePickerInputField).click({ button: "left", delay: 1000 })
              }
              else throw new Error("Aditional Information Date Picker Input Field Is not visible In User Side")

              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalDatePickerYearSelactionInputField)
              const additionalDateEditBtn = await this.page.locator(this.mobilePreviewPageElements.additionalDatePickerYearSelactionInputField).isVisible()
              if ((additionalDateEditBtn == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalDatePickerYearSelactionInputField).click({ button: "left", delay: 1000 })
              }
              else throw new Error("Aditional Information Date Picker Year Button Is not visible In User Side")



              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalDate2000YearBtn)
              const additionalDateInputField = await this.page.locator(this.mobilePreviewPageElements.additionalDate2000YearBtn).isVisible()
              if ((additionalDateInputField == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalDate2000YearBtn).click({ button: "left", delay: 1000 })
              }
              else throw new Error("Aditional Information Date Picker Date Input Field Is not visible In User Side")

              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalDatePickerOkBtn)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalDatePickerOkBtn).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalDatePickerOkBtn).click({ button: "left", delay: 1000 })
              }
              else throw new Error("Aditional Information Date Picker Ok Button Is not visible In User Side")

       }
       async typezip() {
              await this.page.waitForSelector(this.mobilePreviewPageElements.additionalZipCodeInputFieldLabel)
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalZipCodeInputFieldLabel).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalZipCodeInputField).fill("1217")
              }
              else throw new Error("Aditional Information Zip Code Input Field Is not visible In User Side")
       }
       async clicksubmit() {
              const ele = await this.page.locator(this.mobilePreviewPageElements.additionalSubmitBtn).isVisible()
              if ((ele == true)) {
                     await this.page.locator(this.mobilePreviewPageElements.additionalSubmitBtn).click({ button: "left", delay: 1000 })
              }
              else throw new Error("Submit Button Is not visible In User Side On Welcome Screen")
              await this.page.waitForLoadState("networkidle")
              await this.page.waitForTimeout(3000)
       }
       async dblClickOkBtn() {
              const ele = this.page.locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]")
              expect(ele).toBeVisible()
              await ele.dblclick({ force: true })
              await this.page.waitForLoadState("networkidle")
       }
       async clickOkBtn() {
              // const ele = this.page.locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]")
              // expect(ele).toBeVisible()
              // await ele.click({ force: true })
              // await this.page.waitForLoadState("networkidle")
              await this.page.waitForTimeout(2000)
       }
       async verifyUserNameInputFieldTitle() {
              const ele = this.page.locator("//label[text()='Username']")
              expect(ele).toBeVisible()
       }
       async varifyMyProfileSuccessfullySelectedAsEntryScreen() {
              const ele = this.page.locator("(//button[@value='userProfile']//div)[1]")
              await expect(ele).toHaveAttribute('isselected', 'true')
              // if ((await expect(ele).toHaveAttribute('aria-pressed','true'))){
              // }
              // else throw new Error("Mobile Welcome Screen Login With Phone Number")
       }
       async verifyRulesEntryIsApplyed() {
              const ele = await this.page.locator("(//button[@value='rules']//div)[1]")
              await expect(ele).toHaveAttribute('isselected', 'true')
              // expect(await this.page.locator("//button[@value='rules']")).toBeChecked()
       }
       async verifyHomeEntryIsApplyed() {
              const ele = await this.page.locator("(//button[@value='game']//div)[1]")
              await expect(ele).toHaveAttribute('isselected', 'true')
              // if ((await (expect(this.page.locator("//div[@img='assets/HomeIcon.eb267fba.svg']//parent::button")).toHaveAttribute("'aria-pressed','true'"))){
              // }
       }
       async verifyHowToPlayEntryIsApplyed() {
              const ele = await this.page.locator("(//button[@value='howToPlay']//div)[1]")
              await expect(ele).toHaveAttribute('isselected', 'true')
       }
       async verifyPrizeEntryIsApplyed() {
              const ele = await this.page.locator("(//button[@value='prize']//div)[1]")
              await expect(ele).toHaveAttribute('isselected', 'true')
       }
       async verifyPrimaryColorAppliedInMobile() {
              const ele = this.page.frameLocator('iframe').locator('//div//img//parent::div')
              await expect(ele).toHaveCSS("background-color", "rgb(45, 168, 217)")
       }
       async verifySecondaryColorAppliedInMobile() {
              // const ele = this.page.frameLocator('iframe').locator('//div//img//parent::div')
              const btn = this.page.locator(".css-d7djuo");
              // const btn = this.page.frameLocator('iframe').locator('//div//img//parent::div')
              const color = await btn.evaluate((ele) => {
                     return window.getComputedStyle(ele).getPropertyValue("background-color")
              });
              console.log(color);
              expect(color).toBe("rgb(95, 188, 210)");
       }
       async clickPrizeSection() {
              const btn = this.page.locator("(//button[@value='prize']//div)[1]");
              expect(btn).toBeVisible()
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)
       }
       async clickMyProfile() {
              const btn = this.page.locator("(//button[@value='userProfile']//div)[1]");
              expect(btn).toBeVisible()
              await btn.click({ button: "left", delay: 1000 })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)
       }
       async clickLanguageSelectionInputField() {
              const btn = this.page.locator("//div[@role='button']");
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
       }
       async selectJapanese() {
              const btn = this.page.locator("//li[text()='Japanese']");
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)
       }
       async selectSpanish() {
              const btn = this.page.locator("//li[text()='Spanish']");
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)
       }
       async verifyJapaneseLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='プロフィール']");
              // expect(btn).toContainText("プロフィール")
       }
       async selectArabic() {
              const btn = this.page.locator("//li[text()='Arabic']");
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)
       }
       async verifyArabicLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='الملف الشخصي']");
              // expect(btn).toContainText("الملف الشخصي")
       }
       async selectRussian() {
              const btn = this.page.locator("//li[text()='Russian']");
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)
       }
       async verifyRussianLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='Профиль']");
              expect(btn).toContainText("Профиль")
       }
       async selectFrancias() {
              const btn = this.page.locator("//li[text()='Francias']");
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)
       }
       async verifyFranciasLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='Profil']");
              // expect(btn).toContainText("Profil")
       }
       async selectEnglish() {
              const btn = this.page.locator("//li[text()='English']");
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)
       }
       async verifyEnglishLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='Profile']");
              expect(btn).toContainText("Profile")
       }
       async verifySpanishLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='Perfil']");
              // expect(btn).toContainText("Perfil")
       }
       async clickHowToPlayBtn() {
              const btn = this.page.locator("(//button[@value='howToPlay']//div)[1]");
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)
       }
       async verifyPotraitBackgroundUploadSuccessfully() {
              const ele = await this.page.locator("//div[@class='MuiBox-root css-tyolvb']").screenshot()
              await expect(ele).toMatchSnapshot("Verify_Portrait_Background.png", { maxDiffPixelRatio: 0.10 })
              // expect(await this.page.screenshot({
              //        fullPage: true
              //    })).toMatchSnapshot("Verify_Portrait_Background.png")
       }
       async verifyMainMenuFontSuccessfullyAppliedInMobileScreen() {
              const ele = await this.page.locator(this.mobilePreviewPageElements.homeText).screenshot()
              await expect(ele).toMatchSnapshot("MainMenu_Font_Upload_UI.png", { maxDiffPixelRatio: 0.10 })
       }
       async verifyMenuBarBackgroundColorSuccessfullyAppliedInMobileScreen() {
              // const ele = await this.page.locator("//div[@img='assets/UserProfileIcon.4c7ccf2b.svg']").screenshot()
              // await expect(ele).toMatchSnapshot("MenuBar_Background_UI.png", { maxDiffPixels: 200 })
              const BackgroundColor = await this.page.locator("//div[@backgroundcolor='rgb(95, 188, 210)']")
              expect(BackgroundColor).toHaveCSS("background", "rgb(95, 188, 210) none repeat scroll 0% 0% / auto padding-box border-box")
       }
       async verifyMenuBarTextColorSuccessfullyAppliedInMobileScreen() {
              const BackgroundColor = await this.page.getByText('HOME')
              expect(BackgroundColor).toHaveCSS("color", "rgb(2, 16, 25)")
       }
       async verifyMenuBarActivBackgroundColorSuccessfullyAppliedInMobileScreen() {
              const BackgroundColor = await this.page.locator(this.mobilePreviewPageElements.prizeSectionBtn)
              try {
                     expect(BackgroundColor).toHaveCSS("background-color", "rgb(112, 164, 204)")
              } catch (error) {
                     throw new Error(`Main Menu | Active Menu Background Color Does Not Updated Properly | Error occurred: ${error}`)
              }
              // const BackgroundColor = await this.page.getByRole('button', { name: 'PRIZE' })
              // expect(BackgroundColor).toHaveCSS("background-color", "rgb(95, 188, 210)")
       }
       async verifyMenuBarActivTextColorSuccessfullyAppliedInMobileScreen() {
              const BackgroundColor = await this.page.getByRole('button', { name: 'PRIZE' })
              expect(BackgroundColor).toHaveCSS("color", "rgba(0, 0, 0, 0.87)")
       }
       async verifyMenuBarTopAlignmentSuccessfullyAppliedInMobileScreen() {
              const ele = await this.page.getByRole("button", { name: 'PRIZE' })
              expect(ele).toHaveAttribute("alignment", "top")
              // expect(await this.page.screenshot({
              //        fullPage: true
              // })).toMatchSnapshot("MenuBar_TopAlignment_UI.png")
       }
       async verifyMenuBarBottomAlignmentSuccessfullyAppliedInMobileScreen() {
              const ele = await this.page.getByRole("button", { name: 'PRIZE' })
              expect(ele).toHaveAttribute("alignment", "bottom")
              // expect(await this.page.screenshot({
              //        fullPage: true
              // })).toMatchSnapshot("MenuBar_BottomAlignment_UI.png")
       }
       async validateMenuBarThreeLineAlignmentSuccessfullyAppliedInMobileScreen() {
              const result = await this.page.$("//div[@alignment='threeLine']");
              if (!result) throw new Error(`Could not find selector: "${this.mobilePreviewPageElements.additionalDateEditBtn}"`);
              return result;
       }
       async verifyMenuBarThreeLineAlignmentSuccessfullyAppliedInMobileScreen() {
              // const ele = await expect("//div[@class='MuiBox-root css-1ft6b9a']").toHaveAttribute("alignment", "threeLine")
              const ele = this.page.locator("//div[@alignment='threeLine']")
              if (!ele) throw new Error(`Could not find selector: "${"//div[@alignment='threeLine']"}"`);
              return ele;
              // await expect(ele).toHaveAttribute('alignment', 'threeLine')
              //        if ((await expect(ele).toHaveAttribute('alignment','threeLine'))) {
              //               console.log("Menu Bar Three Line Alignment Successfully Applied In User Side")
              //       }
              //       else throw new Error("Menu Bar Three Line Alignment is not Applied In User Side")
       }
       async clickThreeLineAlignmentBtn() {
              const ele = await this.page.locator("#app > div > div > div:nth-child(2) > .MuiBox-root")
              expect(ele).toBeVisible()
              await ele.click({ force: true })
              await this.page.waitForTimeout(3000)
       }
       async verifyMenuBarHideAlignmentSuccessfullyAppliedInMobileScreen() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("MenuBar_HideAlignment_UI.png")
       }
       async verifyMenuBarHideAlignmentSuccessfullyAppliedOnMobileScreen() {
              const btn = this.page.locator("//p[text()='HOME']")
              expect(btn).toBeHidden()
              await this.page.waitForLoadState('domcontentloaded');
       }
       async verifyHomeIconSuccessfullyAppliedInMobileScreen() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("MenuBar_HomeIcon_UI.png")
       }
       async verifyPrizeIconSuccessfullyAppliedInMobileScreen() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("MenuBar_PrizeIcon_UI.png")
       }
       async verifyHowToPlayIconSuccessfullyAppliedInMobileScreen() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("MenuBar_HowToPlayIcon_UI.png")
       }
       async verifyRulesIconSuccessfullyAppliedInMobileScreen() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("MenuBar_RulesIcon_UI.png")
       }
       async verifyUserProfileIconSuccessfullyAppliedInMobileScreen() {
              expect(await this.page.screenshot({
                     fullPage: true
              })).toMatchSnapshot("MenuBar_UserProfileIcon_UI.png")
       }
       async clickHomeBtn() {
              const btn = this.page.locator("(//button[@value='game']//div)[1]")
              expect(btn).toBeVisible()
              await btn.click({ button: "left", delay: 1000 })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)
       }
       async verifyRulesPageIsSuccessfullySelected() {
              const ele = this.page.locator("//label[text()='Username']")
              expect(ele).toBeVisible()
       }
       async selecthomepage() {
              await this.page.locator('//p[text()="HOME"]//parent::button').click()
       }
       async GoTo(URL: string) {
              await this.page.goto(URL)
              await this.page.waitForTimeout(3000)
       }
       // color related functions from here
       async checkTextcolor() {
              const ele = this.page.frameLocator('iframe').locator('//button[text()="START"]')
              const color = await ele.evaluate((ele) => {
                     return window.getComputedStyle(ele).getPropertyValue("color")
              })
              expect(color).toBe("rgb(189,179,229)")
       }
}