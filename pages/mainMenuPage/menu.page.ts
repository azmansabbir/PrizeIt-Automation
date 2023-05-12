import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";
export default class menuPage {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
                this.base = new BaseFunctions(page);
        }
        private menuPageElements = {
                menuPage: "//p[text()='Menu']",
                uploadFont: "//div[@class='MuiBox-root css-v2612']",
                fontUplodInputFieldText: "//p[text()='Upload Font']",
                uploadFontTitle: "//p[text()='Midnight']",
                fontDeleteBtn: "//p[text()='Aa']/following-sibling::button",
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
                fontsTitleText: "//h4[text()='Fonts']",
                uploadFontTitleText: "//p[text()='Upload Font']",
                colorPickerWindowSaveBtn: "//button[text()='Save']",
                backgroundColorPickerBtn: "//p[text()='Background']/following-sibling::button",
                textColorPickerBtn: "//p[text()='Text Color']/following-sibling::button",
                activeBackgroundColorPickerBtn: "//p[text()='Active Background']/following-sibling::button",
                activeTextColorPickerButton: "//p[text()='Active Text Color']/following-sibling::button",
                colorSwitchPlusBtn: `//button[@aria-label="Add Color"]`,
                switchColorDeleteBtn: `//button[@aria-label="delete"]`,
                bottomAlignmentButton: "//h5[text()='Bottom']//parent::button",
        }
        //Menu Page Button Element
        async clickMenuPage() {
                const ele = await this.page.locator(this.menuPageElements.menuPage)
                try {
                        await expect(ele).toContainText("Menu")
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu | Menu Button Element Is Not Found | Error occurred: ${error}`);
                }
        }
        async deleteUploadedFont() {
                const ele = await this.page.locator(this.menuPageElements.fontDeleteBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        console.log(`Main Menu | Uploaded Font Is Not Visible  | Error occurred: ${error}`);
                }
        }
        async enableLastGame() {
                const ele = await this.page.locator(this.menuPageElements.lastGameEnableDisableBtn).isChecked()
                if (ele == false) {
                        await this.page.locator(this.menuPageElements.lastGameEnableDisableBtn).check({ force: true })
                }
        }
        //Upload Fonts Header Text Elemant
        async clickToUploadFont() {
                const ele = await this.page.locator(this.menuPageElements.uploadFont).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.uploadFont, { force: true })
                }
                else throw new Error("Main Menu Font Upload Element Is Not Found")
                await this.page.waitForTimeout(3000)
                // await this.page.waitForLoadState("networkidle")
        }
        async verifyUploadFontText() {
                await expect(this.page.locator(this.menuPageElements.fontUplodInputFieldText))
                        .toBeVisible();
        }
        //Upload Fonts Header Text Elemant
        async verifyFontUploadedSuccessfully() {
                await this.page.waitForSelector(this.menuPageElements.uploadFontTitle)
                const ele = this.page.locator(this.menuPageElements.uploadFontTitle)
                if (ele != null) {
                        await ele.click({ force: true });
                }
                else throw new Error("Font Does Not Upload Successfully")
        }
        async clickBackgroundColorInputField() {
                const ele = await this.page.locator(this.menuPageElements.backgroundColorInputField).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.backgroundColorInputField, { force: true })
                }
                else throw new Error("Main Menu Background Color Input Field Element Is Not Found")
        }
        async inputBackgroundColor() {
                const ele = await this.page.locator(this.menuPageElements.colorCodeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.fill(this.menuPageElements.colorCodeInputField, "5FBCD2FF")
                }
                else throw new Error("Main Menu Background Color Code Input Field Element Is Not Found")
        }
        async inputTextColor() {
                const ele = await this.page.locator(this.menuPageElements.colorCodeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.fill(this.menuPageElements.colorCodeInputField, "60254AFF")
                }
                else throw new Error("Main Menu Text Color Code Input Field Element Is Not Found")
        }
        async inputActiveBackgroundColor() {
                const ele = await this.page.locator(this.menuPageElements.colorCodeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.fill(this.menuPageElements.colorCodeInputField, "70A4CCFF")
                }
                else throw new Error("Main Menu Active Background Color Code Input Field Element Is Not Found")
        }
        async inputActiveTextColor() {
                const ele = await this.page.locator(this.menuPageElements.colorCodeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.fill(this.menuPageElements.colorCodeInputField, "021019FF")
                }
                else throw new Error("Main Menu Active Text Color Code Input Field Element Is Not Found")
        }
        async clickTextColorInputField() {
                const ele = await this.page.locator(this.menuPageElements.textColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu text Color Input Field Element Is Not Found | Error occurred: ${error}`);
                }
        }
        async clickActiveBackgroundColorInputField() {
                const ele = await this.page.locator(this.menuPageElements.activeBackgroundColorInputField).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.activeBackgroundColorInputField, { force: true })
                }
                else throw new Error("Main Menu Active Background Color Input Field Element Is Not Found")
        }
        async clickActiveTextColorInputField() {
                const ele = await this.page.locator(this.menuPageElements.activeTextColorInputField).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.activeTextColorInputField, { force: true })
                }
                else throw new Error("Main Menu Active Text Color Input Field Element Is Not Found")
        }
        async selectTopAlignmentMenuBar() {
                const ele = await this.page.locator(this.menuPageElements.topAlignmentBtn).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.topAlignmentBtn, { force: true })
                }
                else throw new Error("Main Bar Top Alignment Button Element Is Visible")
        }
        async selectBottomAlignmentMenuBar() {
                const ele = await this.page.locator(this.menuPageElements.bottomAlignmentBtn).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.bottomAlignmentBtn, { force: true })
                }
                else throw new Error("Main Bar Bottom Alignment Button Element Is Visible")
        }
        async selectThreeLineAlignmentMenuBar() {
                const ele = await this.page.locator(this.menuPageElements.threeLineAlignmentBtn).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.threeLineAlignmentBtn, { force: true })
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Main Bar Three Line Alignment Button Element Is Visible")
        }
        async selectHideAlignmentMenuBar() {
                const ele = await this.page.locator(this.menuPageElements.hideAlignmentBtn).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.hideAlignmentBtn, { force: true })
                }
                else throw new Error("Main Bar Hide Alignment Button Element Is Visible")
        }
        async uploadMenuBarHomeIcon() {
                const ele = await this.page.locator(this.menuPageElements.homeMenuBarIcon).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.homeMenuBarIcon, { force: true })
                }
                else throw new Error("Main Bar Home Icon Upload Input Field Element Is Visible")
                await this.page.waitForLoadState("networkidle")
        }
        async uploadMenuBarPrizeIcon() {
                const ele = await this.page.locator(this.menuPageElements.prizeMenuBarIcon).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.prizeMenuBarIcon, { force: true })
                }
                else throw new Error("Main Bar Prize Icon Upload Input Field Element Is Visible")
                await this.page.waitForLoadState("networkidle")
        }
        async uploadMenuBarHowToPlayIcon() {
                const ele = await this.page.locator(this.menuPageElements.howtoplayMenuBarIcon).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.howtoplayMenuBarIcon, { force: true })
                }
                else throw new Error("Main Bar How To Play Icon Upload Input Field Element Is Visible")
                await this.page.waitForLoadState("networkidle")
        }
        async uploadMenuBarRulesIcon() {
                const ele = await this.page.locator(this.menuPageElements.rulesMenuBarIcon).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.rulesMenuBarIcon, { force: true })
                }
                else throw new Error("Main Bar Rules Upload Input Field Element Is Visible")
                await this.page.waitForLoadState("networkidle")
        }
        async uploadMenuBarUserProfileIcon() {
                const ele = await this.page.locator(this.menuPageElements.userProfileMenuBarIcon).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.userProfileMenuBarIcon, { force: true })
                }
                else throw new Error("Main Bar User Profile Upload Input Field Element Is Visible")
                await this.page.waitForLoadState("networkidle")
        }
        //Fonts Header Text Elemant
        async checkFontsText() {
                let ele = await this.page.locator(this.menuPageElements.fontsTitleText)
                try {
                        await expect(ele).toContainText("Fonts")
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Fonts Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        //Upload Fonts Header Text Elemant
        async checkUploadFontText() {
                let ele = await this.page.locator(this.menuPageElements.uploadFontTitleText)
                try {
                        await expect(ele).toContainText("Upload Font")
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Upload Fonts Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }
        //input menubar second field color
        async clickColorPickerWindowSaveBtn() {
                let ele = await this.page.locator(this.menuPageElements.colorPickerWindowSaveBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Color Picker Window Save Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        //updated color pickers here, above ones sometimes conflict in code
        async click_Background_ColorPicker() {
                let ele = await this.page.locator(this.menuPageElements.backgroundColorPickerBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Background Color Picker Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async click_text_color_Picker() {
                let ele = await this.page.locator(this.menuPageElements.textColorPickerBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Text Color Picker Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async click_Active_Background_ColorPicker() {
                let ele = await this.page.locator(this.menuPageElements.activeBackgroundColorPickerBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Active Background Color Picker Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async click_active_text_color_Picker() {
                let ele = await this.page.locator(this.menuPageElements.activeTextColorPickerButton)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Active Text Color Picker Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickplusbuttonswatches() {
                let ele = await this.page.locator(this.menuPageElements.colorSwitchPlusBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Color Picker Color Switch Plus Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickColorPickerSaveBtn() {
                let ele = await this.page.locator(this.menuPageElements.colorPickerWindowSaveBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Color Picker Window Save Button Is Not Visible | Error occurred: ${error}`);
                }
        }
        async clickdeletebuttonswatches() {
                let ele = await this.page.locator(this.menuPageElements.switchColorDeleteBtn).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Color Picker Switch Color Delete Is Not Visible | Error occurred: ${error}`);
                }
        }
        //click Bottom Alignment button
        async clickBottomAlignmentBtn() {
                let ele = await this.page.locator(this.menuPageElements.bottomAlignmentButton).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Menu Page Bottom Alignment Button Is Not Visible | Error occurred: ${error}`);
                }
        }
}
