import { expect, Page } from "@playwright/test";
import BaseFunctions from "@base-function/baseFunctions";
export default class languagePage {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
                this.base = new BaseFunctions(page);
        }
        private languagePageElements = {
                languagePage: "//p[text()='Language']",
                langeSettingTitleText: "//h4[text()='Language Settings']",
                languageControlsTitleText: "//h4[text()='Language Controls']",
                userSelectableRadioBtn: "(//input[@type='radio'])[1]",
                englishLanguage: "//li[text()='English']",
                franciasLanguage: "//li[text()='Francias']",
                outsideScreenFromUserSelectableLanguage: "//div[@id='menu-']//div[1]",
                russianLanguage: "//li[text()='Russian']",
                afterSelectedRussianLanguage: "//div[text()='Russian']",
                arabicLanguage: "//li[text()='Arabic']",
                spanishLanguage: "//li[text()='Spanish']",
                afterSelectedSpanishLanguage: "//div[text()='Spanish']",
                englishDiselectBtn: `(//li[@aria-selected="true"])[1]`,
                franciasDiselectBtn: `(//li[@aria-selected="true"])[2]`,
                russianDiselectBtn: `(//li[@aria-selected="true"])[3]`,
                arabicDiselectBtn: `(//li[@aria-selected="true"])[4]`,
                spanishDiselectBtn: `(//li[@aria-selected="true"])[5]`,
                japaneseDiselectBtn: `(//li[@aria-selected="true"])[6]`,
                forceJapaneseLanguage: "//li[@data-value='ja']",
                selectedJapaneseLanguage: "//div[text()='Japanese']",
                userSelectableInputField: "(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]",
                userForceLanguageRadioBtn: "(//input[@type='radio'])[2]",
                forceLanguageInputField: "//div[@role='button']",
        }
        //Language Page Button Element
        async clickLanguagePage() {
                let ele = await this.page.locator(this.languagePageElements.languagePage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Button Element Is Not Found | Error occurred: ${error}`);
                }
                await this.page.waitForLoadState("networkidle")
        }
        //Language Header Text Elemant
        async checkLanguageHeaderText() {
                let ele = await this.page.locator(this.languagePageElements.langeSettingTitleText)
                try {
                        await expect(ele).toContainText("Language Settings")
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Language Settings Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        //Language Controls Text Element
        async checkLanguageControlsText() {
                let ele = await this.page.locator(this.languagePageElements.languageControlsTitleText)
                try {
                        await expect(ele).toContainText("Language Controls")
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Language Controls Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        //Language Controls Elable disable btn Element
        async clickUserSelectableRadioBtn() {
                let ele = await this.page.locator(this.languagePageElements.userSelectableRadioBtn)
                try {
                        await ele.dblclick({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu | Language Page User Selectable Radio Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        //select language type english
        async selectEnglishLanguage() {
                let ele = await this.page.locator(this.languagePageElements.englishLanguage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page English Language Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        //select language type Francias
        async selectFranciasLanguage() {
                let ele = await this.page.locator(this.languagePageElements.franciasLanguage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Francias Language Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickOutSideOfLanguageSelectionModal() {
                let ele = await this.page.locator(this.languagePageElements.outsideScreenFromUserSelectableLanguage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page OutSide Screen From User Selectable Modal Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        //select language type Russian
        async selectRussianLanguage() {
                let ele = await this.page.locator(this.languagePageElements.russianLanguage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Russian Language Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        //select language type Russian
        async verifyRussianLanguageSuccessfullySelected() {
                let ele = await this.page.locator(this.languagePageElements.afterSelectedSpanishLanguage)
                try {
                        await expect(ele).toContainText("Russian")
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Russian Language Text Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        //select language type Arabic
        async selectArabicLanguage() {
                let ele = await this.page.locator(this.languagePageElements.arabicLanguage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Arabic Language Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        //select language type Spanish
        async selectSpanishLanguage() {
                let ele = await this.page.locator(this.languagePageElements.spanishLanguage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Spanish Language Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        async verifySpanishLanguageText() {
                let ele = await this.page.locator(this.languagePageElements.afterSelectedSpanishLanguage)
                try {
                        await expect(ele).toContainText("Spanish")
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Spanish Language Text Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        //select language type Japanese
        async deselectEnglishLanguage() {
                let ele = await this.page.locator(this.languagePageElements.englishDiselectBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
                else {
                        console.log(`Main Menu | Language Page User Selectable English Language Is Not Selected | Could not find:"${ele}"`)
                }
        }
        async deselectFranciasLanguage() {
                let ele = await this.page.locator(this.languagePageElements.franciasDiselectBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
                else {
                        console.log(`Main Menu | Language Page User Selectable Francias Language Is Not Selected | Could not find:"${ele}"`)
                }
        }
        async deselectRussianLanguage() {
                let ele = await this.page.locator(this.languagePageElements.russianDiselectBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
                else {
                        console.log(`Main Menu | Language Page User Selectable Russian Language Is Not Selected | Could not find:"${ele}"`)
                }
        }
        async deselectArabicLanguage() {
                let ele = await this.page.locator(this.languagePageElements.arabicDiselectBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
                else {
                        console.log(`Main Menu | Language Page User Selectable Arabic Language Is Not Selected | Could not find:"${ele}"`)
                }
        }
        async deselectSpanishLanguage() {
                let ele = await this.page.locator(this.languagePageElements.spanishDiselectBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
                else {
                        console.log(`Main Menu | Language Page User Selectable Spanish Language Is Not Selected | Could not find:"${ele}"`)
                }
        }
        async deselectJapaneseLanguage() {
                let ele = await this.page.locator(this.languagePageElements.japaneseDiselectBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
                else {
                        console.log(`Main Menu | Language Page User Selectable Japanese Language Is Not Selected | Could not find:"${ele}"`)
                }
        }
        //select language type Japanese
        async selectJapaneseLanguage() {
                let ele = await this.page.locator(this.languagePageElements.forceJapaneseLanguage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Japanese Language Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        //select language type Japanese
        async verifyJapaneseLanguageSelectSuccessfully() {
                let ele = await this.page.locator(this.languagePageElements.selectedJapaneseLanguage)
                try {
                        await expect(ele).toContainText("Japanese")
                } catch (error) {
                        throw new Error(`Main Menu | Language Page Japanese Language Text Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        //Language Controls Elable disable btn Element
        async clickUserProfileSelectableInputField() {
                let ele = await this.page.locator(this.languagePageElements.userSelectableInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page User Selectable Input Field Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        //Language Controls Elable disable btn Element
        async clickUserForceLanguageOption() {
                let ele = await this.page.locator(this.languagePageElements.userForceLanguageRadioBtn)
                try {
                        await ele.dblclick({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page User Force Language Radio Button Element Is Not Visible | Error occurred: ${error}`);
                }
        }
        // //Language Controls Elable disable btn Element
        async clickForceLanguageInputField() {
                let ele = await this.page.locator(this.languagePageElements.forceLanguageInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Language Page User Force Language Radio Input Field Element Is Not Visible | Error occurred: ${error}`);
                }
        }
}