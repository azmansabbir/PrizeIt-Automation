import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";
export default class functions {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
                this.base = new BaseFunctions(page);
        }
        private functionsPageElements = {
                mainMenuPage: "text=Main Menu",
                mobileDesignPage: "text=Mobile Design",
                menuPage: "//p[text()='Menu']",
                fontDeleteBtn: "//p[text()='Aa']/following-sibling::button",
                uploadFont: "//div[@class='MuiBox-root css-v2612']",
                uploadFontTitle: "//p[text()='Midnight']",
                backgroundColorInputField: "//p[text()='Background']/following-sibling::button",
                colorCodeInputField: "//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]",
                colorPickerWindowSaveBtn: "//button[text()='Save']",
                textColorInputField: "//p[text()='Text Color']/following-sibling::button",
                activeBackgroundColorInputField: "//p[text()='Active Background']/following-sibling::button",
                clearBtn: "//button[text()='Clear All']",
                bottomAlignmentBtn: "//h5[text()='Bottom']",
                signUpPage: "//p[text()='Sign Up']",
                anonymousLoginRadioBtn: "input[value='anonymousLogin']",
                automaticAssignUserNameEnableDisableBtn: "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]",
                phoneNumberCheckBox: "//input[@value='phone']",
                emailAddressCheckBox: "(//span[text()='Phone Number']/following::input)[1]",
                ageCheckBox: "(//span[text()='Email Address']/following::input)[1]",
                dateOfBirthCheckBox: "(//span[text()='Age']/following::input)[1]",
                zipCodeCheckBox: "(//span[text()='Date of Birth']/following::input)[1]",
                languagePage: "//p[text()='Language']",
                customQuestionCheckBox: "(//span[text()='Zip Code / Postal Code']/following::input)[1]",
                userForceLanguageRadioBtn: "(//input[@type='radio'])[2]",
                forceLanguageInputField: "//div[@role='button']",
                englishLanguage: "//li[text()='English']",




        }

        async adminMainMenuSettingsHelper() {
                const homeAvterBtn = this.page.locator('button').nth(2)
                try {
                        await homeAvterBtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("networkidle");
                } catch (error) {
                        throw new Error(`Home Screen | Home Avater Is Not Visible | Could not find locator:"${error}"`)
                }

                //click on main menu btn
                let mainMenu = await this.page.locator(this.functionsPageElements.mainMenuPage)
                try {
                        await mainMenu.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("networkidle");
                } catch (error) {
                        throw new Error(`Home Avater Button | Main Menu Button Element Is not Visible | Could not find locator:"${error}"`)
                }

                //click on Mobile Design btn
                let mobileDesignPage = await this.page.locator(this.functionsPageElements.mobileDesignPage)
                try {
                        await mobileDesignPage.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("networkidle");
                } catch (error) {
                        throw new Error(`Home Avater Button | Main Menu | Mobile Design Button Element Is not Visible | Could not find locator:"${error}"`)
                }

                //click on Mobile Design btn
                let menuPage = await this.page.locator(this.functionsPageElements.menuPage)
                try {
                        await menuPage.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("networkidle");
                } catch (error) {
                        throw new Error(`Home Avater Button | Main Menu | Menu Page Button Element Is not Visible | Could not find locator:"${error}"`)
                }

                const fontDeleteBtn = await this.page.locator(this.functionsPageElements.fontDeleteBtn)
                try {
                        await fontDeleteBtn.click({ button: "left", delay: 1000 })
                } catch (error) {
                        console.log(`Main Menu | Uploaded Font Is Not Visible`);
                }

                //upload Font
                const filePath0 = "testData/fonts/Midnight.ttf"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })

                const uploadMenuFont = await this.page.locator(this.functionsPageElements.uploadFont)
                try {
                        await uploadMenuFont.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu Font Upload Element Is Not Found | Could not find locator:"${error}"`)
                }

                //verify Font Uploaded Successfully
                await this.page.waitForSelector(this.functionsPageElements.uploadFontTitle)
                const verifyFontUploaded = this.page.locator(this.functionsPageElements.uploadFontTitle)
                try {
                        await verifyFontUploaded.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error("Font Does Not Upload Successfully")
                }

                //click Menu Clear Btn
                const clearBtn = this.page.locator(this.functionsPageElements.clearBtn)
                try {
                        await clearBtn.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error("Font Does Not Upload Successfully")
                }

                //select Bottom Alignment MenuBar
                const bottomAlignmentBtn = this.page.locator(this.functionsPageElements.bottomAlignmentBtn)
                try {
                        await bottomAlignmentBtn.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error("Main Bar Bottom Alignment Button Element Is Visible")
                }

                //click on signup page
                const signUpPage = this.page.locator(this.functionsPageElements.signUpPage)
                try {
                        await signUpPage.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("networkidle")
                } catch (error) {
                        throw new Error("Sign Up Page SignUP Button Element Is Not Visible")
                }

                //click Anonymous Login Option
                let anonymousLoginRadioBtn = await this.page.locator(this.functionsPageElements.anonymousLoginRadioBtn).isChecked()
                if ((anonymousLoginRadioBtn == false)) {
                        await this.page.locator(this.functionsPageElements.anonymousLoginRadioBtn).click({ button: "left", delay: 1000 })
                }

                // automatically Assign User Name
                let automaticAssignUserNameEnableDisableBtn = await this.page.locator(this.functionsPageElements.automaticAssignUserNameEnableDisableBtn).isChecked()
                if ((automaticAssignUserNameEnableDisableBtn == false)) {
                        await this.page.locator(this.functionsPageElements.automaticAssignUserNameEnableDisableBtn).click({ button: "left", delay: 1000 })
                }


                //uncheckAdditionalInfoPhoneNumberCheckbox
                let phoneNumberCheckBox = await this.page.locator(this.functionsPageElements.phoneNumberCheckBox).isChecked()
                if ((phoneNumberCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.phoneNumberCheckBox).click({ button: "left", delay: 1000 })
                }

                // uncheckAdditionalInfoEmailAddressCheckbox
                let emailAddressCheckBox = await this.page.locator(this.functionsPageElements.emailAddressCheckBox).isChecked()
                if ((emailAddressCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.emailAddressCheckBox).click({ button: "left", delay: 1000 })
                }

                //uncheckAdditionalInfoAgeCheckbox
                let ageCheckBox = await this.page.locator(this.functionsPageElements.ageCheckBox).isChecked()
                if ((ageCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.ageCheckBox).click({ button: "left", delay: 1000 })
                }


                // uncheckAdditionalInfoDateOfBirthCheckbox
                let dateOfBirthCheckBox = await this.page.locator(this.functionsPageElements.dateOfBirthCheckBox).isChecked()
                if ((dateOfBirthCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.dateOfBirthCheckBox).click({ button: "left", delay: 1000 })
                }

                //uncheckAdditionalInfoZipCodeCheckbox
                let zipCodeCheckBox = await this.page.locator(this.functionsPageElements.zipCodeCheckBox).isChecked()
                if ((zipCodeCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.zipCodeCheckBox).click({ button: "left", delay: 1000 })
                }

                //uncheckAdditionalInfoCustomQuestionCheckbox
                let customQuestionCheckBox = await this.page.locator(this.functionsPageElements.customQuestionCheckBox).isChecked()
                if ((customQuestionCheckBox == true)) {
                        await this.page.locator(this.functionsPageElements.customQuestionCheckBox).click({ button: "left", delay: 1000 })
                }


                //clickLanguagePage
                let languagePage = await this.page.locator(this.functionsPageElements.languagePage)
                try {
                        await languagePage.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Button Element Is Not Found | Error occurred: ${error}`);
                }

                //clickUserForceLanguageOption
                let userForceLanguageRadioBtn = await this.page.locator(this.functionsPageElements.userForceLanguageRadioBtn)
                try {
                        await userForceLanguageRadioBtn.dblclick({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page User Force Language Radio Button Element Is Not Visible | Error occurred: ${error}`);
                }

                let ele = await this.page.locator(this.functionsPageElements.forceLanguageInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page User Force Language Radio Input Field Element Is Not Visible | Error occurred: ${error}`);
                }

                let englishLanguage = await this.page.locator(this.functionsPageElements.englishLanguage)
                try {
                        await englishLanguage.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page English Language Element Is Not Visible | Error occurred: ${error}`);
                }









        }
        async check_upload_font_text() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Upload Font"]')
                await expect(ele).toBeVisible()
        }
        async fontUploadFunction() {
                const filePath0 = "testData/fonts/Midnight.ttf"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async wrong_font_uploader() {
                const filePath0 = "testData/images/title.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                const ele = this.page.frameLocator('iframe').locator('//p[text()="Upload Font"]//preceding-sibling::div')
                await expect(ele).toBeVisible()
                await ele.click({ button: 'left' })
        }
        async uploadJsonFile() {
                const filePath0 = "testData/Riders.json"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async getMultiQuestionJsonFile() {
                const filePath0 = "testData/Default-Default Multi.json"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async select_font() {
                const font_ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Aa"]').last()
                await font_ele.click({ button: 'left' })
        }
        async delete_font() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Aa"]//following-sibling::button').click()
        }
        async bannerImageUploadFunction() {
                const filePath0 = "testData/images/CountDownStageBanner.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async potraitImageUploadFunction() {
                const filePath0 = "testData/images/potrait.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async logoImageUploadFunction() {
                const filePath0 = "testData/logos/gameTeamLogo.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async homeIconUploadHelper() {
                const filePath0 = "testData/icons/home.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async prizeIconUploadHelper() {
                const filePath0 = "testData/icons/prize.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async howToPlayIconUploadHelper() {
                const filePath0 = "testData/icons/howtoplay.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async rulesIconUploadHelper() {
                const filePath0 = "testData/icons/rules.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async userProfileIconUploadHelper() {
                const filePath0 = "testData/icons/profile.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async portraitBackgroundImageUploadHelper() {
                const filePath0 = "testData/logos/PotraitBanner.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async getRoundQuestionJsonFile() {
                const filePath0 = "testData/Default-Default Round.json"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async videoUploadFunction() {
                const filePath0 = "testData/videos/video.mp4"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async csvUploadFunction() {
                const filePath0 = "testData/csv/csv.csv"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async frameUploadFunction() {
                const filePath0 = "testData/Frames/mobileFrame.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        async fileUploadCropper() {

                const chooseBtn = await this.page.frameLocator('iframe').locator("//button[text()='Choose File']")
                await chooseBtn.click({ button: "left", delay: 1000 })

                const cropperSaveBtn = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
                await cropperSaveBtn.click({ force: true })
                await this.page.waitForTimeout(6000)
                // await this.page.waitForLoadState("networkidle")
        }
        async fileUploadCropperForMainMenu() {
                const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                await chooseBtn.click()
                const cropperSaveBtn = await this.page.locator("//div[@class='MuiBox-root css-1p65aex']//button[1]")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click()
        }
        async fileUploadCropperWithoutIframe() {
                // const imageText = await this.page.locator("text='Image'")
                // expect(imageText).toContainText("Image")
                await this.page.waitForSelector("//button[text()='Choose File']")
                // const ratioText = await this.page.locator("text='Ratio:'")
                // expect.soft(ratioText).toContainText("Ratio:")
                // const resolutionText = await this.page.locator("text='Resolution:'")
                // expect.soft(resolutionText).toContainText("Resolution:")
                // const alignmentText = await this.page.locator("text='Alignment:'")
                // expect.soft(alignmentText).toContainText("Alignment:")
                // const fileTypeText = await this.page.locator("text='File Type:'")
                // expect.soft(fileTypeText).toContainText("File Type:")
                // const maxFileSizeText = await this.page.locator("text='Max File Size:'")
                // expect.soft(maxFileSizeText).toContainText("Max File Size:")
                // const ratioTimeText = await this.page.frameLocator('iframe').locator("text='16:9'")
                // expect(ratioTimeText).toContainText("16:9")
                // const resolutionSizeText = await this.page.locator("text='1280x720'")
                // expect.soft(resolutionSizeText).toContainText("1280x720")
                // const alignmentDetailsText = await this.page.locator("text='Centered'")
                // expect.soft(alignmentDetailsText).toContainText("Centered")
                // const fileTypeDetailsText = await this.page.locator("text='PNG, SVG, JPEG, JPG'")
                // expect.soft(fileTypeDetailsText).toContainText("PNG, SVG, JPEG, JPG")
                // const maxFileSizeDetailsText = await this.page.locator("text='2MB'")
                // expect.soft(maxFileSizeDetailsText).toContainText("2MB")
                // const fileNameText = await this.page.locator("text='File Name'")
                // expect.soft(fileNameText).toContainText("File Name")
                // const fileSizeText = await this.page.locator("text='File Size'")
                // expect.soft(fileSizeText).toContainText("File Size")
                const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                const filePath0 = "testData/logos/PotraitBanner.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await chooseBtn.click()
                // const deviceScreenSizeText = await this.page.locator("text='Device Screen Size:'")
                // expect.soft(deviceScreenSizeText).toContainText("Device Screen Size:")
                // const deviceSelectField = await this.page.locator("//label[text()='Choose Size']")
                // expect.soft(deviceSelectField).toBeVisible()
                // await deviceSelectField.click({force:true})
                // const iphone13ProMax = await this.page.locator("//li[@data-value='iPhone 13 Pro Max']")
                // expect.soft(iphone13ProMax).toContainText("iPhone 13 Pro Max")
                // await iphone13ProMax.dblclick()
                // await this.page.waitForTimeout(1000)
                // await deviceSelectField.click({force:true})
                // const iphone12 = await this.page.locator("//li[@data-value='iPhone 12']")
                // expect(iphone12).toContainText("iPhone 12")
                // await iphone12.dblclick()
                // await this.page.waitForTimeout(1000)
                // await deviceSelectField.click({force:true})
                // const samsungS20 = await this.page.locator("//li[text()='Samsung S20']")
                // expect(samsungS20).toContainText("Samsung S20")
                // await samsungS20.dblclick()
                // const currentImageSizeTitleText = await this.page.locator("//div[text()='Current Image Size:']")
                // expect.soft(currentImageSizeTitleText).toContainText("Current Image Size:")
                // const currentImageRatioTitleText = await this.page.locator("//p[text()='Current Image Size Ratio:']")
                // expect.soft(currentImageRatioTitleText).toContainText("Current Image Size Ratio:")
                const cropperSaveBtn = await this.page.locator("//div[@class='MuiBox-root css-1p65aex']//button[1]")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click()
        }
        async invalidFileUploadCropperWithoutIframe() {
                // const imageText = await this.page.locator("text='Image'")
                // expect(imageText).toContainText("Image")

                const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                const filePath0 = "testData/csv/csv.csv"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                // const popupPromise = this.page.waitForEvent('popup');
                await chooseBtn.click({ delay: 300 })
                // const popup = await popupPromise;
                // await popup.locator("//p[text()='File type is not supported']").isVisible()
                // await popup.locator("//button[text()='Ok']").click()
                // const deviceScreenSizeText = await this.page.locator("text='Device Screen Size:'")
                // expect.soft(deviceScreenSizeText).toContainText("Device Screen Size:")
                // const deviceSelectField = await this.page.locator("//label[text()='Choose Size']")
                // expect.soft(deviceSelectField).toBeVisible()
                // await deviceSelectField.click({force:true})
                // const iphone13ProMax = await this.page.locator("//li[@data-value='iPhone 13 Pro Max']")
                // expect.soft(iphone13ProMax).toContainText("iPhone 13 Pro Max")
                // await iphone13ProMax.dblclick()
                // await this.page.waitForTimeout(1000)
                // await deviceSelectField.click({force:true})
                // const iphone12 = await this.page.locator("//li[@data-value='iPhone 12']")
                // expect(iphone12).toContainText("iPhone 12")
                // await iphone12.dblclick()
                // await this.page.waitForTimeout(1000)
                // await deviceSelectField.click({force:true})
                // const samsungS20 = await this.page.locator("//li[text()='Samsung S20']")
                // expect(samsungS20).toContainText("Samsung S20")
                // await samsungS20.dblclick()
                // const currentImageSizeTitleText = await this.page.locator("//div[text()='Current Image Size:']")
                // expect.soft(currentImageSizeTitleText).toContainText("Current Image Size:")
                // const currentImageRatioTitleText = await this.page.locator("//p[text()='Current Image Size Ratio:']")
                // expect.soft(currentImageRatioTitleText).toContainText("Current Image Size Ratio:")
                // const cropperSaveBtn = await this.page.locator("//div[@class='MuiBox-root css-1p65aex']//button[1]")
                // expect(cropperSaveBtn).toContainText("Save")
                // await cropperSaveBtn.click()
        }
        async mobileSignUpAdditionalInformation() {
                let phoneNumber = await this.page.locator("(//label[text()='Url or link']/following::input)[1]").isChecked()
                if ((phoneNumber == false)) {
                        // console.log("Radio button is not checked")
                        await this.page.locator("(//label[text()='Url or link']/following::input)[1]").click()
                }
                let emailCheckbox = await this.page.locator("(//span[text()='Phone Number']/following::input)[1]").isChecked()
                if ((emailCheckbox == false)) {
                        // console.log("Click on the Email Address Checkbox")
                        await this.page.locator("(//span[text()='Phone Number']/following::input)[1]").click()
                }
                let ageCheckbox = await this.page.locator("(//span[text()='Email Address']/following::input)[1]").isChecked()
                if ((ageCheckbox == false)) {
                        // console.log("Click on the Age Checkbox")
                        await this.page.locator("(//span[text()='Email Address']/following::input)[1]").click()
                }
                let dateOfBirthCheckBox = await this.page.locator("(//span[text()='Age']/following::input)[1]").isChecked()
                if ((dateOfBirthCheckBox == false)) {
                        // console.log("Click on the Deth of Birth Checkbox")
                        await this.page.locator("(//span[text()='Age']/following::input)[1]").click()
                }
                let postalCodeCheckBox = await this.page.locator("(//span[text()='Date of Birth']/following::input)[1]").isChecked()
                if ((postalCodeCheckBox == false)) {
                        // console.log("Click on the Postal Code Checkbox")
                        await this.page.locator("(//span[text()='Date of Birth']/following::input)[1]").click()
                }
                let customQuestionCheckBox = await this.page.locator("(//span[text()='Zip Code / Postal Code']/following::input)[1]").isChecked()
                if ((customQuestionCheckBox == true)) {
                        // console.log("Click on the Postal Code Checkbox")
                        await this.page.locator("(//span[text()='Zip Code / Postal Code']/following::input)[1]").uncheck()
                }
                let signUpHomeScreen = await this.page.locator("//input[@value='signUpHome']")
                await signUpHomeScreen.click({ force: true })
                let menu = await this.page.locator("//p[text()='Menu']")
                await menu.click({ force: true })
                await this.page.locator('text=Bottom').click({ force: true });
        }
        async mobilePreviewScreen() {
                await this.page.frameLocator('iframe').locator("input[name='phone']").fill("310-260-6620")
                await this.page.frameLocator('iframe').locator('input[name="email"]').fill("jon@email.com")
                //     await page.frameLocator('iframe').locator('input[name="age"]').fill("23")
                // await this.page.click('//input[@name="birthDate"]');
                // await this.page.waitForTimeout(5000)
                // await this.page.click("//button[text()='27']");
                // await this.page.click("//button[text()='OK']");
                await this.page.frameLocator('iframe').locator('[name="zipCode"]').fill("1223")
                await this.page.frameLocator('iframe').locator("//button[text()='Submit']").click();
                await this.page.waitForTimeout(2000)
                await this.page.frameLocator('iframe').locator("//p[text()='USER PROFILE']").click();
                await this.page.waitForTimeout(5000)
                await this.page.frameLocator('iframe').locator("//p[text()='RULES']").click();
                await this.page.waitForTimeout(6000)
                await this.page.frameLocator('iframe').locator("//p[text()='HOW TO PLAY']").click();
                await this.page.waitForTimeout(6000)
                await this.page.frameLocator('iframe').locator("//button[@value='prize']").click();
                await this.page.waitForTimeout(5000)
                await this.page.frameLocator('iframe').locator("//p[text()='HOME']").click();
                await this.page.waitForTimeout(2000)
        }
        async waitAndClick(locator: string) {
                const element = this.page.locator(locator);
                await element.waitFor({
                        state: "visible"
                });
                await element.click();
        }
        getRandomName() {
                return "Auto" + Date.now() + "Name"
        }







}
