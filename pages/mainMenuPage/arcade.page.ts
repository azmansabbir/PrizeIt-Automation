import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";
import functions from "@testData/func";
import Env from "@utils/environment";
export default class arcadePage {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
                this.base = new BaseFunctions(page);
        }
        private arcadePageElements = {
                arcadePage: "//p[text()='Arcade']",
                fontsTitleText: "//h4[text()='Fonts']",
                uploadFontTitleText: "//p[text()='Upload Font']",
                uploadedFontTitleText: "//p[text()='Midnight']",
                uploadedFontDeleteBtn: "//div[@font-list-mode='true']//button[1]",
                uploadFont: "//div[@class='MuiBox-root css-v2612']",
                arcadeSettingsTitleText: "//h4[text()='Arcade Settings']",
                addOutSideGameBtn: "//button[text()='Add Outside Game']",
                addOutSideGameModalTitleText: "//h1[text()='Add Outside Game']",
                gameUrlTitleText: "//p[text()='Game Url']",
                gameUrlInputField: "(//p[text()='Game Url']/following::input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                gameNameTitleText: "//p[text()='Game Name']",
                gameNameInputField: "//p[text()='Game Name']/following::input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')]",
                addOutSideGameModalSaveBtn: "//button[text()='Save']",
                imageTypeText: "//h4[text()='Image Type']",
                addNewSetBtn: "//button[text()='Add New Set']",
                squareBtn: "//p[text()='Square']",
                rectangleBtn: "//p[text()='Rectangle']",
                logoHeaderTitleText: "//p[text()='Logo / Header']",
                logoHeaderUploadInputField: "(//div[@class='MuiBox-root css-v2612'])[2]",
                logoHeaderDeleteBtn: "//p[text()='Logo / Header']/following::div[@class='MuiBox-root css-1tejaop']",
                logoHeaderEditBtn: "(//button[@aria-label='Edit'])[1]",
                gameListTitleText: "//p[text()='Games']",
                firstGameDragAndDropBtn: "(//div[@role='button'])[1]",
                firstGameEditBtn: "(//button[@title='Edit']//div)[1]",
                firstGameNameInputField: "(//input[@placeholder='Enter game name'])[1]",
                firstGameGamesSelctionInputField: "(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[1]",
                lastOutSideGameCheckBox: "//input[@type='checkbox']>>nth=-2",
                lastOutSideGameDeleteBtn: "//div[@icon='assets/delete.d492d3e8.svg']",
                secondLastOutSideGameDeleteBtn: "//div[@icon='assets/delete.d492d3e8.svg>>nth=-1']",
                firstGameLogoEditBtn: "(//button[@title='Edit'])[1]",
                fanaticsFilterWebGameLogoInput: "(//div[@class='MuiBox-root css-pvw61w'])[7]",
                guessTheScroeGameLogoInput: "(//div[@class='MuiBox-root css-pvw61w'])[6]",
                TriviaGameLogoInput: "(//div[@class='MuiBox-root css-pvw61w'])[5]",
                liveWAllGameLogoInput: "(//div[@class='MuiBox-root css-pvw61w'])[4]",
                noiseMeterGameLogoInput: "(//div[@class='MuiBox-root css-pvw61w'])[3]",
                tugOfWarGameLogoInput: "(//div[@class='MuiBox-root css-pvw61w'])[2]",
                prizeDropGameLogoInput: "(//div[@class='MuiBox-root css-pvw61w'])[1]",
                fanSeeWallGameLogoEdit: "(//button[@aria-label='Edit'])[9]",
                fanaticsFilterWebGameLogoEdit: "(//button[@aria-label='Edit'])[8]",
                guessTheScroeGameLogoEdit: "(//button[@aria-label='Edit'])[7]",
                TriviaGameLogoEdit: "(//button[@aria-label='Edit'])[6]",
                liveWAllGameLogoEdit: "(//button[@aria-label='Edit'])[5]",
                noiseMeterGameLogoEdit: "(//button[@aria-label='Edit'])[4]",
                tugOfWarGameLogoEdit: "(//button[@aria-label='Edit'])[3]",
                prizeDropGameLogoEdit: "(//button[@aria-label='Edit'])[2]",
                fanaticsGameChecbox: "//input[@type='checkbox']>>nth=1",
                guessTheScroeGameChecbox: "(//input[@type='checkbox'])[6]",
                TriviaGameChecbox: "(//input[@type='checkbox'])[5]",
                liveWallGameChecbox: "(//input[@type='checkbox'])[4]",
                noiseMeterGameChecbox: "(//input[@type='checkbox'])[3]",
                tugOfWarGameChecbox: "(//input[@type='checkbox'])[2]",
                prizeDropGameChecbox: "(//input[@type='checkbox'])[1]",
                dateOfBirthCheckBox: "(//span[text()='Age']/following::input)[1]",
                zipCodeCheckBox: "(//span[text()='Date of Birth']/following::input)[1]",
                urlTextInputField: "(//label[text()='Text']/following::input)[1]",
                errorMessageForUrlTextInputField: "//p[text()='Incorrect entry.']",
                urlLinkInputField: "(//label[text()='Url or link']/following::textarea)[1]",
                errorMassgeForUrlInputField: "//p[text()='Incorrect entry.']",
                addNewUrlBtn: "//button[text()='Add New Url']",
                addedLinkAndText: "//h6[text()='Added Links and Text']",
                deletAddedUrlLink: "//div[@class='MuiBox-root css-grxo2d']//button[1]",
                customQuestionCheckBox: "(//span[text()='Zip Code / Postal Code']/following::input)[1]",
                customQuestionInCheckBox: "//input[@type='checkbox']",
                addNewQuestionBtn: "//button[text()='Add question']",
                signUpHomeScreenRadioBtn: "//input[@value='signUpHome']",
                customQuestionScreenRadioBtn: "//input[@value='customQuestionScreen']",
                customeOptionInCheckBox: "//span[text()='Custom Opt-In']",
                addCustomQuestionInBtn: "//button[text()='Add Custom Opt-In']",
                clickFreeFormCheckBox: "//input[@value='freeform']",
                multiChoiceCheckBox: "//input[@value='multipleChoice']",
                customQuestionDiscriptionInputField: "//h5[contains(@class,'MuiTypography-root MuiTypography-h5')]/following::textarea[@rows='6']",
                addChoiceBtn: "//button[text()='Add Choice']",
                choiceInputField: "(//label[text()='Give some description here...']/following::input)[1]",
                customQuestionMendotoryCheckBox: "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]",
                customQuestionSaveBtn: "//button[text()='Save']",
                deleteAddedCustomQuestion: "(//div[@class='MuiBox-root css-1519m8w']//button)[2]",
                smsCheckBox: "//input[@value='sms']",
                customQuestionPromptInputField: "(//label[text()='Give some description here...']/following::textarea)[1]",
                customQuestionPromptAutoCheckBox: "//h4/following::input[@type='checkbox']",
                customOptionInCheckBox: "(//span[text()='Custom Opt-In']/preceding::input[@type='checkbox'])[1]",
                addedCustomQuestionInDeleteBtn: "(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]/following-sibling::button)[3]"
        }
        async clickArcadePage() {
                let ele = await this.page.locator(this.arcadePageElements.arcadePage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`Main Menu Arcade Page Element Is not Visible | Error Occer ${error}`)
                }
        }
        async verifyFontTextIsVisible() {
                let ele = await this.page.locator(this.arcadePageElements.fontsTitleText).textContent()
                if ((ele === "Fonts")) {
                }
                else throw new Error("Main Menu Arcade Page Fonts Title Text Is not Visible")
        }
        async verifyUploadFontTextIsVisible() {
                let ele = await this.page.locator(this.arcadePageElements.uploadFontTitleText).textContent()
                if ((ele === "Upload Font")) {
                }
                else throw new Error("Main Menu Arcade Page Upload Fonts Title Text Is not Visible")
        }
        async deleteUploadFont() {
                let ele = await this.page.locator(this.arcadePageElements.uploadedFontDeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.uploadedFontDeleteBtn).click({ button: "left", delay: 1000 })
                }
                else { console.log("There was no uploaded Font Visiable For Arcade Section Go To Next Step") }
        }
        async uploadFontForArcadeSection() {
                let ele = await this.page.locator(this.arcadePageElements.uploadFont).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.uploadFont).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Font Upload Element Is not Visible")
        }
        async selectUplodedFont() {
                await this.page.waitForSelector(this.arcadePageElements.uploadedFontTitleText)
                let ele = await this.page.locator(this.arcadePageElements.uploadedFontTitleText).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.uploadedFontTitleText).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Uploaded Font Element Is not Visible")
        }
        async deleteOutSideGame() {
                let ele = await this.page.locator(this.arcadePageElements.lastOutSideGameDeleteBtn).isVisible()
                if ((ele == true)) {
                        // await this.page.locator(this.arcadePageElements.secondLastOutSideGameDeleteBtn).click({button:"left", delay:1000})
                        // await this.page.waitForTimeout(3000)
                        await this.page.locator(this.arcadePageElements.lastOutSideGameDeleteBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Main Menu Arcade Page OutSide Game Delete Button Is not Visible")
        }
        async verifyArcadeSettingsTitleText() {
                await this.page.waitForSelector(this.arcadePageElements.arcadeSettingsTitleText)
                let ele = await this.page.locator(this.arcadePageElements.arcadeSettingsTitleText).textContent()
                if ((ele === "Arcade Settings")) {
                }
                else throw new Error("Main Menu Arcade Page Arcade SEttings Title Text Is not Visible")
        }
        async clickAddOutSideGameBtn() {
                let ele = await this.page.locator(this.arcadePageElements.addOutSideGameBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.addOutSideGameBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Add OutSide Game Button Is not Visible")
        }
        async verifyAddOutSideGameModalTitleText() {
                await this.page.waitForSelector(this.arcadePageElements.addOutSideGameModalTitleText)
                let ele = await this.page.locator(this.arcadePageElements.addOutSideGameModalTitleText).textContent()
                if ((ele === "Add Outside Game")) {
                }
                else throw new Error("Main Menu Arcade Page Add OutSide Game Window Add Outside Game Title Text Is not Visible")
        }
        async inputAddOutSideGameUrl() {
                let ele = await this.page.locator(this.arcadePageElements.gameUrlInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.gameUrlInputField).fill("https://www.lipsum.com/")
                }
                else throw new Error("Main Menu Arcade Page Add OutSide Game Url Input Field Is not Visible")
        }
        async inputAddOutSideGameName() {
                let ele = await this.page.locator(this.arcadePageElements.gameNameInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.gameNameInputField).fill("Auto Game")
                }
                else throw new Error("Main Menu Arcade Page Add OutSide Game Name Input Field Is not Visible")
        }
        async addOutSideGameModalSaveBtn() {
                let ele = await this.page.locator(this.arcadePageElements.addOutSideGameModalSaveBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.addOutSideGameModalSaveBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Add OutSide Game Modal Save Button Is not Visible")
        }
        async enableNewlyAddedGame() {
                let ele = await this.page.locator(this.arcadePageElements.lastOutSideGameCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.arcadePageElements.lastOutSideGameCheckBox).check()
                }
                // else throw new Error("Main Menu Arcade Page Add OutSide Game No Added Successfully")
        }
        async clickSquareBtn() {
                let ele = await this.page.locator(this.arcadePageElements.squareBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.squareBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Square Button Is not Visible")
        }
        async clickRectanglerBtn() {
                let ele = await this.page.locator(this.arcadePageElements.rectangleBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.rectangleBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Rectangle Button Is not Visible")
        }
        async verifyImageTypeTitleText() {
                await this.page.waitForSelector(this.arcadePageElements.imageTypeText)
                let ele = await this.page.locator(this.arcadePageElements.imageTypeText).textContent()
                if ((ele === "Image Type")) {
                }
                else throw new Error("Main Menu Arcade Page Image Type Title Text Is not Visible")
        }
        async uploadFirstGameLogo() {
                let ele = await this.page.locator(this.arcadePageElements.firstGameLogoEditBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.firstGameLogoEditBtn).click({ button: "left", delay: 1000 })
                }
                else { console.log("Main Menu Arcade Page First Game Logo Edit Btn Is not Visible") }
        }
        async verifyLogoHeaderTitleText() {
                let ele = await this.page.locator(this.arcadePageElements.logoHeaderTitleText).textContent()
                if ((ele === "Logo / Header")) {
                }
                else throw new Error("Main Menu Arcade Page Logo Header Title Text Is not Visible")
        }
        async deleteArcadeLogoHeader() {
                let ele = await this.page.locator(this.arcadePageElements.logoHeaderDeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.logoHeaderDeleteBtn).click({ button: "left", delay: 1000 })
                }
                else { console.log("Main Menu Arcade Page Logo Header Is not Visible") }
        }
        async clickLogoHeaderUploadInputField() {
                await this.page.waitForSelector(this.arcadePageElements.logoHeaderUploadInputField)
                let ele = await this.page.locator(this.arcadePageElements.logoHeaderUploadInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.logoHeaderUploadInputField).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Logo Header Upload Input Field Is not Visible")
                // await this.page.waitForSelector(this.arcadePageElements.logoHeaderDeleteBtn)
        }
        async verifyLogoHerderSuccesfullyUploaded() {
                await this.page.waitForSelector(this.arcadePageElements.logoHeaderDeleteBtn)
                let ele = await this.page.locator(this.arcadePageElements.logoHeaderDeleteBtn).isVisible()
                if ((ele == true)) {
                        console.log("Main Menu Arcade Page Logo Header Is Uploaed Successfully")
                }
                else throw new Error("Main Menu Arcade Page Logo Header Is not uploeded Successfully")
        }
        async goToUrl() {
                await this.page.goto(Env.qa1)
                await this.page.waitForLoadState("networkidle")
        }

        async deleteFanSeeWallLogo() {
                let ele = await this.page.locator(this.arcadePageElements.fanSeeWallGameLogoEdit).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.fanSeeWallGameLogoEdit).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector("//button[text()='Choose File']")
                        const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                        expect.soft(chooseBtn).toContainText("Choose File")
                        const filePath0 = "testData/images/CountDownStageBanner.jpg"
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await chooseBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                        await this.page.locator("//button[text()='Save']").click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)

                }
        }

        async deleteFanaticsLogo() {
                let ele = await this.page.locator(this.arcadePageElements.fanaticsFilterWebGameLogoEdit).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.fanaticsFilterWebGameLogoEdit).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector("//button[text()='Choose File']")
                        const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                        expect.soft(chooseBtn).toContainText("Choose File")
                        const filePath0 = "testData/images/CountDownStageBanner.jpg"
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await chooseBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                        await this.page.locator("//button[text()='Save']").click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)

                }
        }
        async deleteGuessTheScroeLogo() {
                let ele = await this.page.locator(this.arcadePageElements.guessTheScroeGameLogoEdit).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.guessTheScroeGameLogoEdit).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector("//button[text()='Choose File']")
                        const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                        expect.soft(chooseBtn).toContainText("Choose File")
                        const filePath0 = "testData/images/CountDownStageBanner.jpg"
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await chooseBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                        await this.page.locator("//button[text()='Save']").click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)

                }
        }
        async deleteTriviaLogo() {
                let ele = await this.page.locator(this.arcadePageElements.TriviaGameLogoEdit).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.TriviaGameLogoEdit).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector("//button[text()='Choose File']")
                        const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                        expect.soft(chooseBtn).toContainText("Choose File")
                        const filePath0 = "testData/images/CountDownStageBanner.jpg"
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await chooseBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                        await this.page.locator("//button[text()='Save']").click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                }
        }
        async deleteLiveWallLogo() {
                let ele = await this.page.locator(this.arcadePageElements.liveWAllGameLogoEdit).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.liveWAllGameLogoEdit).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector("//button[text()='Choose File']")
                        const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                        expect.soft(chooseBtn).toContainText("Choose File")
                        const filePath0 = "testData/images/CountDownStageBanner.jpg"
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await chooseBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                        await this.page.locator("//button[text()='Save']").click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                }
        }
        async deleteNoiseMeterLogo() {
                let ele = await this.page.locator(this.arcadePageElements.noiseMeterGameLogoEdit).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.noiseMeterGameLogoEdit).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector("//button[text()='Choose File']")
                        const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                        expect.soft(chooseBtn).toContainText("Choose File")
                        const filePath0 = "testData/images/CountDownStageBanner.jpg"
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await chooseBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                        await this.page.locator("//button[text()='Save']").click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                }
        }
        async deleteTugOfWarLogo() {
                let ele = await this.page.locator(this.arcadePageElements.tugOfWarGameLogoEdit).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.tugOfWarGameLogoEdit).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector("//button[text()='Choose File']")
                        const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                        expect.soft(chooseBtn).toContainText("Choose File")
                        const filePath0 = "testData/images/CountDownStageBanner.jpg"
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await chooseBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                        await this.page.locator("//button[text()='Save']").click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                }
        }
        async deletePrizeDropLogo() {
                let ele = await this.page.locator(this.arcadePageElements.prizeDropGameLogoEdit).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.prizeDropGameLogoEdit).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector("//button[text()='Choose File']")
                        const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                        expect.soft(chooseBtn).toContainText("Choose File")
                        const filePath0 = "testData/images/CountDownStageBanner.jpg"
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await chooseBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                        await this.page.locator("//button[text()='Save']").click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                }
        }
        async uploadFanaticsFilterWebLogo() {

                let ele = await this.page.locator(this.arcadePageElements.fanaticsFilterWebGameLogoInput)
                try {
                        await ele.click({ button: "left", delay: 1000 })

                } catch (error) {
                        throw new Error(`Main Menu Arcade Page Fanatics Filter Web Logo Input Field Is Not Visible"| Error occurred: ${error}`)

                }
        }
        async verifyFanaticsFilterWebLogoUploadSuccessfully() {
                await this.page.waitForSelector(this.arcadePageElements.prizeDropGameLogoEdit)
                let ele = await this.page.locator(this.arcadePageElements.prizeDropGameLogoEdit).isVisible()
                if ((ele == true)) {
                        console.log("Main Menu Arcade Section Fanatics Filter Web Logo Upload Successfully")
                }
                else throw new Error("Main Menu Arcade Section Fanatics Filter Web Logo Is Not Uploaded Successfully")
        }
        async uploadGuessTheScroeLogo() {
                let ele = await this.page.locator(this.arcadePageElements.guessTheScroeGameLogoInput).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.guessTheScroeGameLogoInput).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Guess The Scroe Logo Input Field Is Not Visible")
        }
        async verifyGuessTheScroeLogoUploadSuccessfully() {
                await this.page.waitForSelector(this.arcadePageElements.tugOfWarGameLogoEdit)
                let ele = await this.page.locator(this.arcadePageElements.tugOfWarGameLogoEdit).isVisible()
                if ((ele == true)) {
                        console.log("Main Menu Arcade Section Guess The Score Logo Upload Successfully")
                }
                else throw new Error("Main Menu Arcade Section Guess The Score Logo Is Not Uploaded Successfully")
        }
        async uploadTriviaLogo() {
                let ele = await this.page.locator(this.arcadePageElements.TriviaGameLogoInput).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.TriviaGameLogoInput).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Trivia Logo Input Field Is Not Visible")
        }
        async verifyTriviaLogoUploadSuccessfully() {
                await this.page.waitForSelector(this.arcadePageElements.noiseMeterGameLogoEdit)
                let ele = await this.page.locator(this.arcadePageElements.noiseMeterGameLogoEdit).isVisible()
                if ((ele == true)) {
                        console.log("Main Menu Arcade Section Trivia Logo Upload Successfully")
                }
                else throw new Error("Main Menu Arcade Section Trivia Logo Is Not Uploaded Successfully")
        }
        async uploadLiveWallLogo() {
                let ele = await this.page.locator(this.arcadePageElements.liveWAllGameLogoInput).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.liveWAllGameLogoInput).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Trivia Logo Input Field Is Not Visible")
        }
        async verifyLiveWallLogoUploadSuccessfully() {
                await this.page.waitForSelector(this.arcadePageElements.liveWAllGameLogoEdit)
                let ele = await this.page.locator(this.arcadePageElements.liveWAllGameLogoEdit).isVisible()
                if ((ele == true)) {
                        console.log("Main Menu Arcade Section Live Wall Logo Upload Successfully")
                }
                else throw new Error("Main Menu Arcade Section Live Wall Logo Is Not Uploaded Successfully")
        }
        async uploadNoiseMeterLogo() {
                let ele = await this.page.locator(this.arcadePageElements.noiseMeterGameLogoInput).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.noiseMeterGameLogoInput).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Noise Meter Logo Input Field Is Not Visible")
        }
        async verifyNoiseMeterLogoUploadSuccessfully() {
                await this.page.waitForSelector(this.arcadePageElements.TriviaGameLogoEdit)
                let ele = await this.page.locator(this.arcadePageElements.TriviaGameLogoEdit).isVisible()
                if ((ele == true)) {
                        console.log("Main Menu Arcade Section Noise Meter Logo Upload Successfully")
                }
                else throw new Error("Main Menu Arcade Section Noise Meter Logo Is Not Uploaded Successfully")
        }
        async uploadTugOfWarLogo() {
                let ele = await this.page.locator(this.arcadePageElements.tugOfWarGameLogoInput).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.tugOfWarGameLogoInput).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Tug Of War Game Logo Input Field Is Not Visible")
        }
        async verifyTugOfWarLogoUploadSuccessfully() {
                await this.page.waitForSelector(this.arcadePageElements.guessTheScroeGameLogoEdit)
                let ele = await this.page.locator(this.arcadePageElements.guessTheScroeGameLogoEdit).isVisible()
                if ((ele == true)) {
                        console.log("Main Menu Arcade Section Tug Of War Logo Upload Successfully")
                }
                else throw new Error("Main Menu Arcade Section Tug Of War Logo Is Not Uploaded Successfully")
        }
        async uploadPrizeDropLogo() {
                let ele = await this.page.locator(this.arcadePageElements.prizeDropGameLogoInput).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.prizeDropGameLogoInput).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Prize Drop  Game Logo Input Field Is Not Visible")
        }
        async verifyPrizeDropLogoUploadSuccessfully() {
                await this.page.waitForSelector(this.arcadePageElements.fanaticsFilterWebGameLogoEdit)
                let ele = await this.page.locator(this.arcadePageElements.fanaticsFilterWebGameLogoEdit).isVisible()
                if ((ele == true)) {
                        console.log("Main Menu Arcade Section Prize Drop Logo Upload Successfully")
                }
                else throw new Error("Main Menu Arcade Section Prize Drop Logo Is Not Uploaded Successfully")
        }
        async disableFanaticsGame() {
                await this.page.waitForSelector(this.arcadePageElements.fanaticsGameChecbox)
                await this.page.locator(this.arcadePageElements.fanaticsGameChecbox).dblclick({ force: true })
                // let ele = await this.page.locator(this.arcadePageElements.fanaticsGameChecbox).isChecked()
                // if ((ele == true)) {
                //         await this.page.locator(this.arcadePageElements.fanaticsGameChecbox).uncheck()
                // }
                // else {console.log("Main Menu Arcade Page Fanatics Game Enable/Disable Button Is Check");}
        }
        async disableGuessTheScroeGame() {
                let ele = await this.page.locator(this.arcadePageElements.guessTheScroeGameChecbox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.arcadePageElements.guessTheScroeGameChecbox).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu Arcade Page Fanatics Game Enable/Disable Button Is Not Visible")
        }
        async checkFontsText() {
                const ele = this.page.locator("(//h4[text()='Fonts'])[1]")
                expect(ele).toContainText('Fonts')
        }
        async checkUploadFontText() {
                const ele = this.page.locator("(//p[text()='Upload Font'])[1]")
                expect(ele).toContainText('Upload Font')
        }
        async uploadFont() {
                const buffer = readFileSync('testData/fonts/Midnight.ttf');
                // Create the DataTransfer and File
                const dataTransfer = await this.page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'Midnight.ttf', { type: 'application/ttf' });
                        dt.items.add(file);
                        return dt;
                }, buffer);
                // Now dispatch
                await this.page.dispatchEvent("//div[@class='MuiBox-root css-v2612']", 'drop', { dataTransfer });
        }
        async clickDeletefont() {
                const ele = this.page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeIconSmall MuiButton-containedSizeIconSmall MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeIconSmall MuiButton-containedSizeIconSmall css-1r4p8ew'] >> nth=0")
                await expect(ele).toBeVisible()
                await ele.click()
        }
        async checkArcadesettingtext() {
                const ele = this.page.locator("(//h4[text()='Arcade Settings'])[1]")
                expect(ele).toContainText('Arcade Settings')
        }
        async clickaddOutsidegame() {
                const ele = this.page.locator("//button[text()='Add Outside Game']")
                expect(ele).toContainText('Add Outside Game')
                await ele.click()
        }
        async clickclosebutton() {
                const closebutton = this.page.locator("//div[@class='MuiBox-root css-1ydarmv']//parent::button")
                await expect(closebutton).toBeVisible()
                await closebutton.click()
        }
        async verifyImageTypeText() {
                const ele = await this.page.locator("//h4[text()='Image Type']")
                expect.soft(ele).toContainText("Image Type")
        }
        async addnewgame() {
                const gameUrl = this.page.locator('#P-12890536272')
                await gameUrl.type("https://garrett.testingdxp.com/")
                const gamename = this.page.locator('#P2184981822')
                await gamename.type("Auto")
                const savebutton = this.page.locator("//button[text()='Save']")
                await savebutton.click()
        }
        async deleteLogoHeader() {
                let ele = await this.page.locator("//div[@class='MuiBox-root css-1tejaop']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//div[@class='MuiBox-root css-1tejaop']")
                                .click()
                }
        }
        async clickToUploadLogoHeader() {
                const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[2]")
                expect.soft(ele).toBeVisible()
                await ele.click()
        }
        async clickChooseBtn() {
                const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[2]")
                expect.soft(ele).toBeVisible()
                await ele.click()
        }
        async clickSquareTypeBtn() {
                let ele = await this.page.locator("//p[text()='Square']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//p[text()='Square']")
                                .click({ force: true })
                }
        }
        async clickRectangleTypeBtn() {
                let ele = await this.page.locator("//p[text()='Rectangle']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//p[text()='Rectangle']")
                                .click({ force: true })
                }
        }
        async enablePrizeDropCheckBox() {
                let ele = await this.page.locator("(//input[@type='checkbox'])[1]").isChecked()
                if ((ele == false)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//input[@type='checkbox'])[1]")
                                .check()
                }
        }
        async enableTugofWarCheckBox() {
                let ele = await this.page.locator("(//input[@type='checkbox'])[2]").isChecked()
                if ((ele == false)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//input[@type='checkbox'])[2]")
                                .check()
                }
        }
        async enableARFanaticsFiltersCheckBox() {
                let ele = await this.page.locator("(//input[@type='checkbox'])[3]").isChecked()
                if ((ele == false)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//input[@type='checkbox'])[3]")
                                .check()
                }
        }
        async enableNoiseMeterCheckBox() {
                let ele = await this.page.locator("(//input[@type='checkbox'])[4]").isChecked()
                if ((ele == false)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//input[@type='checkbox'])[4]")
                                .check()
                }
        }
        async enableLiveWallCheckBox() {
                let ele = await this.page.locator("(//input[@type='checkbox'])[5]").isChecked()
                if ((ele == false)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//input[@type='checkbox'])[5]")
                                .check()
                }
        }
        async clickToSelectDefultPrizeDrop() {
                let ele = await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[1]")
                                .click()
                }
        }
        async selectDefultGame() {
                let ele = await this.page.locator("//li[@data-value='Default']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//li[@data-value='Default']")
                                .click({ force: true })
                }
        }
        async clickToSelectDefultTugOfWar() {
                let ele = await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]")
                                .click()
                }
        }
        async clickToSelectDefultArFanatics() {
                let ele = await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[3]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[3]")
                                .click()
                }
        }
        async clickToSelectDefultNoiseMeter() {
                let ele = await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[4]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[4]")
                                .click()
                }
        }
        async clickToSelectDefultLiveWall() {
                let ele = await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[5]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[5]")
                                .click()
                }
        }
        async clickOutSideGameDeleteBtn() {
                await this.page.locator("//div[@icon='assets/delete.d492d3e8.svg']").last().click({ force: true })
                // let ele = await this.page.locator("//div[@class='MuiBox-root css-flxl8s']").last().isVisible()
                // if ((ele == true)) {
                //         // console.log("Enable Stage to be skip and jump to next one")
                //         await this.page
                //                 .locator("//div[@class='MuiBox-root css-flxl8s']").last()
                //                 .click({force:true})
                // }
        }
        async clickToUploadGameLogo() {
                let ele = await this.page.locator("//div[@class='MuiBox-root css-pvw61w']").last().isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//div[@class='MuiBox-root css-pvw61w']").last()
                                .click()
                }
        }
}