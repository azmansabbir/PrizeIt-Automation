import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";
export default class singupPage {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
                this.base = new BaseFunctions(page);
        }
        private signUpPageElements = {
                signUpPage: "//p[text()='Sign Up']",
                registrationOptionsText: "//h5[text()='Registration Options']",
                socialMediaLoginsBtn: "input[name='socialMediaLogins']",
                phoneValidationRadioBtn: "input[value='phoneValidation']",
                emailValidationRadioBtn: "input[value='emailValidation']",
                anonymousLoginRadioBtn: "input[value='anonymousLogin']",
                thirteenOrOlderRadioBtn: "input[value='thirteenOrOlder']",
                customOrOlderRadioBtn: "input[value='customOrOlder']",
                customOrOlderInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                userDefinedRadioBtn: "//input[@value='userDefined']",
                userDefinedFirstInputField: "(//span[text()='Options for user defined age']/following::input)[1]",
                userDefinedSecondInputField: "(//span[text()='Options for user defined age']/following::input)[2]",
                automaticAssignUserNameEnableDisableBtn: "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]",
                automaticAssignUserNamePrifizInputField: "(//span[text()='Automatically assign username']/following::input)[1]",
                addNewSetBtn: "//button[text()='Add New Set']",
                profileNameAfterEdit: "//div[text()='David']",
                addNewSetWindowSetTitleInputField: "#headlineField",
                addNewSetWindowUploadPictureInputField: "//div[@class='MuiBox-root css-v2612']",
                addNewSetWindowSaveBtn: "//button[text()='Save']",
                uploadedProfilePictureDeleteBtn: "//div[@class='MuiBox-root css-76t8yr']//button[1]",
                profilePictureSetDialogBox: "(//div[@role='button'])[1]",
                selectLastProfile: "//li[@role='option']",
                selectDefultProfile: "//li[@data-value='default']",
                autoAssignCheckBox: "//input[@value='autoAssignAvatars']",
                profileSetEditBtn: "//button[text()='Edit']",
                profileSetDeleteBtn: "//button[text()='Delete']",
                phoneNumberCheckBox: "(//label[text()='Url or link']/following::input)[1]",
                emailAddressCheckBox: "(//span[text()='Phone Number']/following::input)[1]",
                ageCheckBox: "(//span[text()='Email Address']/following::input)[1]",
                dateOfBirthCheckBox: "(//span[text()='Age']/following::input)[1]",
                zipCodeCheckBox: "(//span[text()='Date of Birth']/following::input)[1]",
                urlTextInputField: "(//label[text()='Text']/following::input)[1]",
                errorMessageForUrlTextInputField: "//p[text()='Incorrect entry.']",
                urlLinkInputField: "(//label[text()='Url or link']/following::textarea)[1]",
                errorMassgeForUrlInputField: "//p[text()='Incorrect entry.']",
                addNewUrlBtn: "//button[text()='Add New Url']",
                addedLinkAndText: "//h6[text()='Added Links and Text']",
                deletAddedUrlLink: "//div[@class='MuiBox-root css-grxo2d']//button[1]",
                okBtn: "//button[text()='Ok']",
                customQuestionCheckBox: "(//span[text()='Zip Code / Postal Code']/following::input)[1]",
                additionalCustomQuestionIn: "//input[@type='checkbox']",
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
                choiceInputField: "//textarea[@rows='6']/following::div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//input",
                customQuestionMendotoryCheckBox: "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[3]",
                customQuestionSaveBtn: "//button[text()='Save']",
                deleteAddedCustomQuestion: "(//div[@class='MuiBox-root css-1519m8w']//button)[2]",
                smsCheckBox: "//input[@value='sms']",
                customQuestionPromptInputField: "(//label[text()='Give some description here...']/following::textarea)[1]",
                customQuestionPromptAutoCheckBox: "//h4/following::input[@type='checkbox']",
                customOptionInCheckBox: "(//span[text()='Custom Opt-In']/preceding::input[@type='checkbox'])[1]",
                addedCustomQuestionInDeleteBtn: "(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]/following-sibling::button)[3]",
                anonymousLoginCheckBox: "input[value='anonymousLogin']",
                additionalInfoTitleText: "//h5[text()='Additional Information']",
                phoneNumberCheckBoxs: "(//label[text()='Url or link']/following::input)[1]",
                emailCheckBox: "(//span[text()='Phone Number']/following::input)[1]",
                backgroundColorInputField: "//p[text()='Background']/following-sibling::button",
                textColorInputField: "//p[text()='Text Color']/following-sibling::button",
                activeBackgroundColorInputField: "//p[text()='Active Background']/following-sibling::button",
                activeTextColorInputField: "//p[text()='Active Text Color']/following-sibling::button",
                colorCodeInputField: "//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]",
                topAlignmentBtn: "//h5[text()='Top']",
                topAlignmentBtnSelected: "//button[@selected='true']",
                bottomAlignmentBtn: "//h5[text()='Bottom']",
                threeLineAlignmentBtn: "//h5[text()='3 Line Option']",
                threeLineInMobileScreen: "//div[@class='MuiBox-root css-1ox9e35']",
                hideAlignmentBtn: "//h5[text()='Hide']",
                homeMenuBarIcon: "(//div[@class='MuiBox-root css-74zz35'])[1]",
                prizeMenuBarIcon: "(//div[@class='MuiBox-root css-74zz35'])[2]",
                howtoplayMenuBarIcon: "(//div[@class='MuiBox-root css-74zz35'])[1]",
                rulesMenuBarIcon: "(//div[@class='MuiBox-root css-74zz35'])[1]",
                userProfileMenuBarIcon: "(//div[@class='MuiBox-root css-74zz35'])[1]",
                lastGameEnableDisableBtn: "(//input[@type='checkbox'])[7]",
        }
        async uncheckAdditionalInfoPhoneNumberCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async uncheckAdditionalInfoEmailAddressCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.emailAddressCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.emailAddressCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async uncheckAdditionalInfoAgeCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.ageCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.ageCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async uncheckAdditionalInfoDateOfBirthCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async uncheckAdditionalInfoZipCodeCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.zipCodeCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.zipCodeCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async uncheckAdditionalInfoCustomQuestionCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customQuestionCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async clickAdditionalInfoPhoneNumberCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async clickAdditionalInfoEmailAddressCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.emailAddressCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.emailAddressCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async clickAdditionalInfoAgeCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.ageCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.ageCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async clickAdditionalInfoDateOfBirthCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async clickAdditionalInfoZipCodeCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.zipCodeCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.zipCodeCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async clickAdditionalCustomQuestionCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.customQuestionCheckBox).click({ button: "left", delay: 1000 })
                }
        }
        async clickAdditionalCustomQuestionInCheckBox() {
                // await this.page.waitForSelector(this.signUpPageElements.customQuestionInCheckBox)
                let ele = await this.page.getByRole('checkbox', { name: 'Custom Opt-In' }).isChecked()
                if ((ele == false)) {
                        await this.page.getByRole('checkbox', { name: 'Custom Opt-In' }).click({ button: "left", delay: 1000 })
                }
        }
        async clickAdditionalCustomAddQuestionBtn() {
                let ele = await this.page.locator(this.signUpPageElements.addNewQuestionBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewQuestionBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Add New Custom Question Button Is not Visible")
        }
        async clickFreeFormCheckBox() {
                await this.page.waitForSelector(this.signUpPageElements.clickFreeFormCheckBox)
                let ele = await this.page.locator(this.signUpPageElements.clickFreeFormCheckBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.clickFreeFormCheckBox).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Add New Custom Question Window FreeForm Check Box Element Is not Visible")
        }
        async clickMultipleChoiceCheckBox() {
                await this.page.waitForSelector(this.signUpPageElements.multiChoiceCheckBox)
                let ele = await this.page.locator(this.signUpPageElements.multiChoiceCheckBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.multiChoiceCheckBox).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Add New Custom Question Window Multi Choice Check Box Element Is not Visible")
        }
        async inputCustomQuestionDiscription() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionDiscriptionInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customQuestionDiscriptionInputField).type("Demo Custom Question")
                }
                else throw new Error("Sign Up Page Add New Custom Question Window FreeForm Discription Input Field Element Is not Visible")
        }
        async clickCustomQuestionAddChoiceBtn() {
                let ele = await this.page.locator(this.signUpPageElements.addChoiceBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addChoiceBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Add New Custom Question Add ChoiceBtn Button Element Is not Visible")
        }
        async inputCustomQuestionAddChoiceDiscription() {
                let ele = await this.page.locator(this.signUpPageElements.choiceInputField)
                try {
                        await ele.fill("Demo Choice")
                } catch (error) {
                        throw new Error(`Sign Up Page Add New Custom Question Window Add Choice Input Field Element Is not Visible | Error occurred: ${error}`)
                }
        }
        async enableCustomQuestionMandatoryForUser() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionMendotoryCheckBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customQuestionMendotoryCheckBox).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")
        }
        async clickCustomQuestionSaveBtn() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionSaveBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customQuestionSaveBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")
        }
        async deleteCustomQuestion() {
                let ele = await this.page.locator(this.signUpPageElements.deleteAddedCustomQuestion).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.deleteAddedCustomQuestion).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector(this.signUpPageElements.okBtn)
                        await this.page.click(this.signUpPageElements.okBtn)
                }
                // else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")
        }
        async deleteCustomQuestionIn() {
                let ele = await this.page.locator(this.signUpPageElements.addedCustomQuestionInDeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addedCustomQuestionInDeleteBtn).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector(this.signUpPageElements.okBtn)
                        await this.page.click(this.signUpPageElements.okBtn)
                }
                // else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")
        }
        async clickSignUpHomeScreenCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.signUpHomeScreenRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.signUpHomeScreenRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")
        }
        async clickTopOfCustomQuestionCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionScreenRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.customQuestionScreenRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")
        }
        async clickAddCustomQuestionInCheckBox() {
                // await this.page.waitForSelector(this.signUpPageElements.customQuestionInCheckBox)
                let ele = await this.page.getByRole('checkbox', { name: 'Custom Opt-In' }).isChecked()
                if ((ele == false)) {
                        await this.page.getByRole('checkbox', { name: 'Custom Opt-In' }).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Add Custom Question In Radio button Element Is not Visible")
        }
        async clickAddCustomQuestionInBtn() {
                let ele = await this.page.locator(this.signUpPageElements.addCustomQuestionInBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addCustomQuestionInBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Add CustomQuestion In Button Element Is not Visible")
        }
        async clickSmsCheckBox() {
                await this.page.waitForSelector(this.signUpPageElements.smsCheckBox)
                let ele = await this.page.locator(this.signUpPageElements.smsCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.smsCheckBox).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Add Custom Question Sms Check Box Element Is not Visible")
        }
        async inputCustomOptionPrompt() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionPromptInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customQuestionPromptInputField).type("I Agree")
                }
                else throw new Error("Sign Up Page custom Question Prompt Input Field Element Is not Visible")
                await this.page.waitForTimeout(2000)
        }
        async clickCustomOptionPromptAutoCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionPromptAutoCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.customQuestionPromptAutoCheckBox).check()
                }
                else throw new Error("Sign Up Page custom Question Prompt Auto Check Box Element Is not Visible")
        }
        async clickSignUpPage() {
                let ele = await this.page.locator(this.signUpPageElements.signUpPage).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.signUpPageElements.signUpPage)
                }
                else throw new Error("Sign Up Page SignUP Button Element Is Not Visible")
                await this.page.waitForLoadState("networkidle")
        }
        async verifyRegistrationOptionsText() {
                let ele = await this.page.locator(this.signUpPageElements.registrationOptionsText).textContent()
                if ((ele === "Registration Options:")) {
                }
                else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
        }
        async clickSocialMediaLoginRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
        }
        async uncheckSocialMediaLoginRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
        }
        async clickAddNewUrlBtn() {
                let ele = await this.page.locator(this.signUpPageElements.addNewUrlBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewUrlBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Button is not visible")
        }
        async iftermsAndConditionUrlLinkAvailableThanDeleteIt() {
                let ele = await this.page.locator(this.signUpPageElements.deletAddedUrlLink).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.deletAddedUrlLink).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector(this.signUpPageElements.okBtn)
                        await this.page.click(this.signUpPageElements.okBtn)
                }
                else { console.log("Main Menu | Sign Up Page Add Url Button is not visible") }
        }
        async deleteTermsAndConditionAddedUrlLink() {
                let ele = await this.page.locator(this.signUpPageElements.deletAddedUrlLink).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.deletAddedUrlLink).click({ button: "left", delay: 1000 })
                        await this.page.waitForSelector(this.signUpPageElements.okBtn)
                        await this.page.click(this.signUpPageElements.okBtn)
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Button is not visible")
        }
        async inputAddUrlText() {
                let ele = await this.page.locator(this.signUpPageElements.urlTextInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.urlTextInputField).fill("Terms & Conditions")
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Text Input Field is not visible")
        }
        async inputAddUrlLink() {
                let ele = await this.page.locator(this.signUpPageElements.urlLinkInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.urlLinkInputField).fill("https://demos.co.uk/terms-conditions/")
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Input Field is not visible")
        }
        async verifyAddUrlUrlInputErrorAlertShowSuccessfully() {
                let ele = await this.page.locator(this.signUpPageElements.errorMassgeForUrlInputField).textContent()
                if ((ele === "Incorrect entry.")) {
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Url Input Field Error Alert is not visible")
        }
        async verifyAddUrlTextFieldErrorAlertShowSuccessfully() {
                let ele = await this.page.locator(this.signUpPageElements.errorMessageForUrlTextInputField).textContent()
                if ((ele === "Incorrect entry.")) {
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Text Input Field Error Alert is not visible")
        }
        async clickAnonymousLoginOption() {
                let ele = await this.page.locator(this.signUpPageElements.anonymousLoginRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.anonymousLoginRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
        }
        async clickUserAgeMust13YearsOrOlderOptionRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.thirteenOrOlderRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.thirteenOrOlderRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
        }
        async clickUserAgeCustomOrOlderOptionRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.customOrOlderRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.customOrOlderRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
        }
        async inputUserAgeCustomOrOlder() {
                await this.page.waitForSelector(this.signUpPageElements.customOrOlderInputField)
                let ele = await this.page.locator(this.signUpPageElements.customOrOlderInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customOrOlderInputField).fill("15")
                }
                else throw new Error("Sign Up Page Registration Options input User Age Custom Or Older Input Field Not Visible")
        }
        async clickUserAgeuserDefinedOptionRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.userDefinedRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.userDefinedRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
        }
        async inputFirstUserAgeuserDefined() {
                await this.page.waitForSelector(this.signUpPageElements.userDefinedFirstInputField)
                let ele = await this.page.locator(this.signUpPageElements.userDefinedFirstInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.userDefinedFirstInputField).fill("20")
                }
                else throw new Error("Sign Up Page Registration Options User Age user Defined First Input Field Not Visible")
        }
        async inputSecondUserAgeuserDefined() {
                await this.page.waitForSelector(this.signUpPageElements.userDefinedSecondInputField)
                let ele = await this.page.locator(this.signUpPageElements.userDefinedSecondInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.userDefinedSecondInputField).fill("30")
                }
                else throw new Error("Sign Up Page Registration Options User Age user Defined Second Input Field Not Visible")
        }
        async automaticallyAssignUserName() {
                let ele = await this.page.locator(this.signUpPageElements.automaticAssignUserNameEnableDisableBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.automaticAssignUserNameEnableDisableBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options input User Age user Defined Second Input Field Not Visible")
        }
        async InputAutomaticallyAssignUserName() {
                await this.page.waitForSelector(this.signUpPageElements.automaticAssignUserNamePrifizInputField)
                let ele = await this.page.locator(this.signUpPageElements.automaticAssignUserNamePrifizInputField)
                try {
                        await ele.fill("Devid")
                } catch (error) {
                        throw new Error("Sign Up Page Registration Options Automatically Assign UserName Input Field Not Visible")
                }
        }
        async clickProfilePictureAddNewSetBtn() {
                let ele = await this.page.locator(this.signUpPageElements.addNewSetBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewSetBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Button is not visible ")
        }
        async inputProfilePictureSetTitle() {
                await this.page.waitForSelector(this.signUpPageElements.addNewSetWindowSetTitleInputField)
                let ele = await this.page.locator(this.signUpPageElements.addNewSetWindowSetTitleInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewSetWindowSetTitleInputField).fill("David Con")
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Title Field is not visible ")
        }
        async uploadSetProfilePicture() {
                let ele = await this.page.locator(this.signUpPageElements.addNewSetWindowUploadPictureInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewSetWindowUploadPictureInputField).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Window, Picture Upload Element is not visible ")
        }
        async clickSetProfilePictureWindowSaveBtn() {
                await this.page.waitForSelector(this.signUpPageElements.addNewSetWindowSaveBtn)
                const ele = await this.page.locator(this.signUpPageElements.addNewSetWindowSaveBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Window, Save Button Element is not visible ")
                await this.page.waitForTimeout(2000)
        }
        async clickProfilePictureSetDialogBox() {
                await this.page.waitForSelector(this.signUpPageElements.profilePictureSetDialogBox)
                let ele = await this.page.locator(this.signUpPageElements.profilePictureSetDialogBox)
                try {
                        await ele.click({ button: 'left', delay: 1000 })
                } catch (error) {
                        throw new Error("Sign Up Page Profile Picture Add New Set Dialog Box Element is not visible ")
                }
        }
        async selectAutoAssaigProfilePicture() {
                await this.page.waitForSelector(this.signUpPageElements.selectDefultProfile)
                let ele = await this.page.locator(this.signUpPageElements.selectDefultProfile).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.selectLastProfile).last().click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Auto Assaig Profile Picture List is not visible ")
        }
        async editAutoAssaigProfilePicture() {
                await this.page.waitForSelector(this.signUpPageElements.profileSetEditBtn)
                let ele = await this.page.locator(this.signUpPageElements.profileSetEditBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.profileSetEditBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Auto Assaig Profile Picture Edit Button is not visible ")
        }
        async editProfilePictureSetTitle() {
                await this.page.waitForSelector(this.signUpPageElements.addNewSetWindowSetTitleInputField)
                let ele = await this.page.locator(this.signUpPageElements.addNewSetWindowSetTitleInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewSetWindowSetTitleInputField).fill("David")
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Title Field is not visible ")
        }
        async deleteUploadedProfilePicture() {
                await this.page.waitForSelector(this.signUpPageElements.addNewSetWindowSetTitleInputField)
                let ele = await this.page.locator(this.signUpPageElements.uploadedProfilePictureDeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.uploadedProfilePictureDeleteBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Delete Button Is not visible ")
        }
        async editUploadedSetProfilePicture() {
                let ele = await this.page.locator(this.signUpPageElements.addNewSetWindowUploadPictureInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewSetWindowUploadPictureInputField).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Window, Picture Upload Element is not visible ")
                const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                const filePath0 = "testData/logos/profile.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await chooseBtn.click()
                const cropperSaveBtn = await this.page.locator("//div[@class='MuiBox-root css-1p65aex']//button[1]")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click()
        }
        async verifyAutoAssignProfileSuccessfullyEdited() {
                await this.page.waitForSelector(this.signUpPageElements.profileNameAfterEdit)
                let ele = await this.page.locator(this.signUpPageElements.profileNameAfterEdit).textContent()
                if ((ele === "David")) {
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Title Not Edited successfully")
        }
        async deleteAutoAssignProfile() {
                await this.page.waitForSelector(this.signUpPageElements.profileSetDeleteBtn)
                let ele = await this.page.locator(this.signUpPageElements.profileSetDeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.profileSetDeleteBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Not Deleted successfully")
        }
        //div[text()='David']
        async clickAutoAssignRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.autoAssignCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.autoAssignCheckBox).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Auto Assaig Profile Picture List is not visible ")
        }
        async clickSocialMediaLoginPhoneNumberValidationRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.phoneValidationRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.phoneValidationRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
        }
        async clickSocialMediaLoginEmailValidationRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.emailValidationRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.emailValidationRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
                await this.page.waitForTimeout(2000)
        }
        async clickAnonymousLogin() {
                let ele = await this.page.locator(this.signUpPageElements.anonymousLoginRadioBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw (`Main Menu | Sign Up Annoymous Login Radio Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        //🔚Closed Terms & Conditions Section Element
        //=======================================================
        //▶▶Start Additional Information Section Element
        async verifyAdditionalInformationTitleText() {
                let ele = await this.page.locator(this.signUpPageElements.additionalInfoTitleText)
                try {
                        await expect(ele).toContainText("Additional Information")
                } catch (error) {
                        throw (`Main Menu | Sign Up Additional Info Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickPhoneNumberCheckBox() {
                // expect(await this.page.locator("(//label[text()='Url or link']/following::input)[1]").isChecked()).toBeTruthy()
                let ele = await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Phone Number Check Box Is Checked");
                }
        }
        async clickEmailAddressCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.emailAddressCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.emailAddressCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Email Check Box Is Checked");
                }
        }
        async clickAgeCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.ageCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.ageCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Age Check Box Is Checked");
                }
        }
        async clickDateOfBirthCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Date Of Birth Check Box Is Checked");
                }
        }
        async clickPostalCodeCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.zipCodeCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.zipCodeCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Postal Code Check Box Is Checked");
                }
        }
        async clickCustomQuestionCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.customOptionInCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.customOptionInCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Postal Code Check Box Is Checked");
                }
        }
        async uncheckPhoneNumberCheckBox() {
                // expect(await this.page.locator("(//label[text()='Url or link']/following::input)[1]").isChecked()).toBeTruthy()
                let ele = await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Postal Code Check Box Is Not Checked");
                }
        }
        async uncheckEmailAddressCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.emailAddressCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.emailAddressCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Email Check Box Is Not Checked");
                }
        }
        async uncheckAgeCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.ageCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.ageCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Age Check Box Is Not Checked");
                }
        }
        async uncheckDateOfBirthCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Date Of Birth Check Box Is Not Checked");
                }
        }
        async uncheckPostalCodeCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.zipCodeCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.zipCodeCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Postal Code Check Box Is Not Checked");
                }
        }
        async uncheckCustomQuestionCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.customOptionInCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customOptionInCheckBox).click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Main Menu | SignUp Page Postal Code Check Box Is Not Checked");
                }
        }
        async clickAddQuestionAddBtn() {
                const ele = await this.page.locator(this.signUpPageElements.addNewQuestionBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw (`Main Menu | SignUp Page Postal Code Check Box Is Not Checked | Error occurred: ${error}`);
                }
        }
}
