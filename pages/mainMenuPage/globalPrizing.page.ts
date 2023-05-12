import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";
export default class globalPrizingPage {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
                this.base = new BaseFunctions(page);
        }
        private globalPrizingPageElements = {
                globalPrizingPage: "//p[text()='Global Prizing']",
                addNewPrizeBtn: "//button[text()='Add New Prize']",
                prizeNameInputField: "//input[@placeholder='Enter prize name...']",
                prizeCategoryBtn: "div[role='button']",
                prizeCategoryAirDrop: "text=AR Drop",
                prizeCategoryGeneral: "//li[@data-value='general']",
                prizeImageUploadInputField: "//p[text()='Drag your image here, or browse']",
                descriptionTitleText: "//p[text()='Description']",
                prizeDescriptionInputField: "textarea[rows='3']",
                prizeExpirationNullBtn: "(//input[@type='checkbox'])[1]",
                loadCSVChckBox: "input[value='csv']",
                userDefinedSecondInputField: "(//span[text()='Options for user defined age']/following::input)[2]",
                uploadCSVInputField: "//button[text()='Upload']",
                automaticAssignUserNamePrifizInputField: "(//span[text()='Automatically assign username']/following::input)[1]",
                textCodeCheckBox: "input[value = 'textcode']",
                autoGenerateChecBox: "input[value='auto']",
                autoGeneratePrifix: "(//span[text()='Autogenerate']/following::input)[1]",
                smsSharingCheckBox: "(//span[text()='Prefix']/following::input)[1]",
                emailSharingCheckBox: "(//span[text()='SMS sharing']/following::input)[1]",
                walleteSharingCheckBox: "(//span[text()='Email sharing']/following::input)[1]",
                limitPerUserCheckBox: "(//span[text()='Wallet sharing']/following::input)[1]",
                limitPerUserInputField: "input[type='number']",
                perEventCheckBox: "//span[text()='per event']",
                saveBtn: "//button[text()='Save']",
                searchInputField: "//input[@placeholder='Search...']",
                serachPrizeInputField: "//input[@placeholder='Search...']",
                deletePrizeBtn: "//button[text()='Delete']",
                okBtn: "//button[text()='Ok']",
                openEditorBtn: "//button[text()='Open in Editor']",
                couponCanvalLabel: "//p[text()='Coupon Canvas Editor']",
                tFont: "//div[@icon='assets/typography.7617aca3.svg']",
                typoGraphyLabel: "//h2[text()='Typography']",
                TAddTextBtn: "div.MuiBox-root.css-1r89n98",
                selectTextBtn: "//div[text()='TEXT']",
                changeLabelTitleText: "//p[text()='Change Text']",
                couponFieldInputSection: "(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]",
                changleText2: "(//textarea[@rows='3'])[2]",
                positionLabelTitleText: "//h5[text()='Position']",
                leftBtn: "div.MuiBox-root.css-14wbn55",
                rightBtn: "div.MuiBox-root.css-1paqvjl",
                centerBtn: "//div[@class='MuiBox-root css-1bturrv']",
                alignmentBtn: "div.MuiBox-root.css-1s8tt5x",
                fontLabel: "//h5[text()='Font']",
                fontbtn: "(//div[@role='button'])[2]",
                midnightFontBtn: "//li[text()='Midnight.ttf']",
                thinFontBtn: "//li[text()='Midnight.ttf']",
                boldBtn: "div.MuiBox-root.css-l1n5h5",
                italicBtn: "div.MuiBox-root.css-n12ji5",
                underLineBtn: "div.MuiBox-root.css-3hdlli",
                blickTypeBtn: "div.MuiBox-root.css-nh0dhm",
                boldTextBtn: "//div[text()='Bold']",
                lighterBtn: "//li[text()='Lighter']",
                normalBtn: "//li[text()='Normal']",
                bolerBtn: "//li[text()='Bolder']",
                fontSizeBtn: "//input[@id='P-13727520022' and @type='number']",
                tBackBtn: "div.MuiBox-root.css-9xd5lq",
                tNextBtn: "div.MuiBox-root.css-1osoyr8",
                tDeleteBtn: "div.MuiBox-root.css-knjr7e",
                tMarzinBtn: "(//div[@active='true'])[2]",
                tCopyBtn: "//div[@iconcolor='#f1c40f']",
                xBtn: "//p[text()='X']",
                fillLabel: "/h5[text()='Fill']",
                emailCheckBox: "div[black='true']",
                xMarzin: "//input[@id='P5425209742']",
                yMarzin: "//input[@id='P-13931393132']",
                textWight: "//input[@id='P9661676962']",
                textHight: "//input[@id='P-9694925912']",
                welcomeTextColorInputField: "//div[@class='MuiBox-root css-1e91icv']",
                backgroundImageInputFiled: "(//div[@class='MuiBox-root css-v2612'])[1]",
                logoImageInputFiled: "(//div[@class='MuiBox-root css-v2612'])[2]",
                foregroundImageInputFiled: "(//div[@class='MuiBox-root css-v2612'])[3]",
                selectTextCode: "//div[text()='3829234012349']",
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
        //click GlobalPrizing Page
        async clickGlobalPrizingPage() {
                const locator = this.page.locator("//p[text()='Global Prizing']")
                expect(locator).toContainText('Global Prizing')
                await locator.click()
                await this.page.waitForLoadState("networkidle")
        }
        //click AddNew Prize Btn
        async clickAddNewPrizeBtn() {
                const locator = this.page.locator("//button[text()='Add New Prize']")
                expect(locator).toContainText('Add New Prize')
                await locator.click()
        }
        //input Prize Name
        async inputPrizeName() {
                const locator = this.page.locator("//input[@placeholder='Enter prize name...']")
                expect(locator).toBeVisible()
                await locator.fill("Auto Test")
        }
        //select Prize Category
        async selectPrizeCategory() {
                const locator = this.page.locator("div[role='button']")
                await locator.dblclick()
                // // expect(locator).toBeVisible()
                // await locator.selectOption({ label: 'Option 2' })
        }
        //select Prize Category
        async selectPrizeCategoryAirDrop() {
                const locator = this.page.locator("text=AR Drop")
                await locator.click()
                // // expect(locator).toBeVisible()
                // await locator.selectOption({ label: 'Option 2' })
        }
        async selectPrizeCategoryGeneral() {
                const locator = this.page.locator("//li[@data-value='general']")
                await locator.click({ force: true })
                // // expect(locator).toBeVisible()
                // await locator.selectOption({ label: 'Option 2' })
        }
        //p[text()='Drag your image here, or browse']
        async uploadPrizeImage() {
                const buffer = readFileSync('testData/logos/PotraitBanner.png');
                // Create the DataTransfer and File
                const dataTransfer = await this.page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                        dt.items.add(file);
                        return dt;
                }, buffer);
                // Now dispatch
                await this.page.dispatchEvent("//p[text()='Drag your image here, or browse']", 'drop', { dataTransfer });
        }
        async verifyDiscriptionText() {
                const ele = await this.page.locator("//p[text()='Description']")
                expect(ele).toContainText("Description")
        }
        //Checked Social Media Logins
        async inputPrizeDiscription() {
                const ele = await this.page.locator("textarea[rows='3']")
                expect(ele).toHaveAttribute("placeholder", 'Give some description here...')
                await ele.fill("lorim upsum dorlo")
        }
        //Checked Social Media Logins
        async clickPrizeExpirationNone() {
                let ele = await this.page.locator("(//input[@type='checkbox'])[1]").isVisible()
                if ((ele == false)) {
                        // console.log("Prize Expiration Select None")
                        await this.page.locator("(//input[@type='checkbox'])[1]").click()
                }
        }
        //Checked Social Media Logins
        async clickLoadCSVCheckBox() {
                let ele = await this.page.locator("input[value='csv']").isVisible()
                if ((ele == true)) {
                        // console.log("click Load CSV Check Box")
                        await this.page.locator("input[value='csv']").click()
                }
                // if (await this.page.isChecked("input[value='csv']")) {
                //         await this.page.click("input[value='csv']");
                // }
        }
        async uploadCSVFile() {
                const filePath0 = "testData/csv/csv.csv"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.locator("//button[text()='Upload']").click()
        }
        async clickGenerateTextcodeCheckBox() {
                let ele = await this.page.locator("input[value = 'textcode']").isVisible()
                if ((ele == true)) {
                        // console.log("click Generate Text code Check Box")
                        await this.page.locator("input[value='barcode']").click()
                }
                else {
                        await this.page.locator("input[value = 'textcode']").click()
                }
        }
        async clickAutogenerateCheckBox() {
                let ele = await this.page.locator("input[value='auto']").isVisible()
                if ((ele == true)) {
                        // console.log("click Auto generate Check Box")
                        await this.page.locator("input[value='auto']").click()
                }
        }
        async inputAutoGeneratePrifix() {
                await this.page.locator("(//span[text()='Autogenerate']/following::input)[1]").fill("AutoPrifix")
        }
        async clickSMSSharingCheckBox() {
                let ele = await this.page.locator("(//span[text()='Prefix']/following::input)[1]").isVisible()
                if ((ele == true)) {
                        // console.log("click SMS Sharing Check Box")
                        await this.page.locator("(//span[text()='Prefix']/following::input)[1]").click()
                }
        }
        async clickEmailSharingCheckBox() {
                let ele = await this.page.locator("(//span[text()='SMS sharing']/following::input)[1]").isVisible()
                if ((ele == true)) {
                        // console.log("click Email Sharing Check Box")
                        await this.page.locator("(//span[text()='SMS sharing']/following::input)[1]").click()
                }
        }
        async clickWalletSharingCheckBox() {
                let ele = await this.page.locator("(//span[text()='Email sharing']/following::input)[1]").isVisible()
                if ((ele == true)) {
                        // console.log("click Wallet Sharing Check Box")
                        await this.page.locator("(//span[text()='Email sharing']/following::input)[1]").click()
                }
        }
        async clickLimitPerUserCheckBox() {
                let ele = await this.page.locator("(//span[text()='Wallet sharing']/following::input)[1]").isVisible()
                if ((ele == true)) {
                        // console.log("click Limit Per User Check Box")
                        await this.page.locator("(//span[text()='Wallet sharing']/following::input)[1]").click()
                }
        }
        async inputLimitPerUser() {
                let ele = await this.page.locator("input[type='number']")
                await ele.fill("15")
        }
        async clickperEventCheckBox() {
                let ele = await this.page.locator("//span[text()='per event']")
                await ele.check()
                // if ((ele == true)) {
                //         console.log("click per event Check Box")
                //         await this.page.locator("(//input[@value='false'])[2]").click()
                // }
        }
        async clickSaveBtn() {
                const ele = await this.page.locator("//button[text()='Save']")
                expect(ele).toContainText("Save")
                await ele.click({ force: true })
        }
        async clickSearchInputField() {
                let ele = await this.page.locator("//input[@placeholder='Search...']")
                await ele.click()
                // const ele = await this.page.locator("//input[@placeholder='Search...']")
                // expect(ele).toBeVisible()
                // await ele.fill("Auto Test")
        }
        //Deleted Prize Element
        async searchPrize() {
                let ele = await this.page.locator("//input[@placeholder='Search...']").isVisible()
                if ((ele == true)) {
                        // console.log("click Limit Per User Check Box")
                        await this.page.locator("//input[@placeholder='Search...']").type("Auto Test")
                }
                // const ele = await this.page.locator("//input[@placeholder='Search...']")
                // expect(ele).toBeVisible()
                // await ele.fill("Auto Test")
        }
        async deletePrize() {
                await this.page.waitForSelector("//button[text()='Delete']")
                let ele = await this.page.locator("//button[text()='Delete']").isVisible()
                if ((ele == true)) {
                        // console.log("click Limit Per User Check Box")
                        await this.page.locator("//button[text()='Delete']").last().click()
                }
        }
        async clickOkBtn() {
                let ele = await this.page.locator("//button[text()='Ok']").isVisible()
                if ((ele == true)) {
                        // console.log("click Limit Per User Check Box")
                        await this.page.locator("//button[text()='Ok']").click()
                }
        }
        /// From here updated Sohag/////////////////
        async OpenEditor() {
                const locator = this.page.locator("//button[text()='Open in Editor']")
                await locator.click({ button: "left", delay: 1000 })
                // await this.page.waitForTimeout(2000)
                await this.page.waitForSelector("//p[text()='Coupon Canvas Editor']")
        }
        async Couponcanvaslabl() {
                await this.page.click("//p[text()='Coupon Canvas Editor']")
        }
        async Tfont() {
                const locator = this.page.locator("//button[@aria-label='Tab: Typography']")
                await locator.click()
        }
        async Typographylabl() {
                const ele = await this.page.locator("//h2[text()='Typography']")
                expect(ele).toContainText("Typography")
        }
        async clickAddTextBtn() {
                const ele = await this.page.locator("//button[text()='Add Text']")
                await ele.click()
        }
        async clickToSelectText() {
                const locator = this.page.locator("//div[text()='TEXT']")
                //expect(locator).toBeVisible()
                await locator.click({ force: true })
        }
        async changeTextlabl() {
                const ele = await this.page.locator("//p[text()='Change Text']")
                expect(ele).toContainText("Change Text")
        }
        async inputCouponTitleText() {
                const ele = await this.page.locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
                await ele.fill("Welcome")
        }
        async ChangeText() {
                const locator = this.page.locator("(//textarea[@rows='3'])[2]")
                expect(locator).toBeVisible()
                await locator.fill("Welcome")
        }
        // async ChangeText() {
        // const locator = this.page.locator("(//textarea[@rows='3'])[2]")
        //  await locator.click()
        // }
        async Positionlabl() {
                const ele = await this.page.locator("//h5[text()='Position']")
                expect(ele).toContainText("Position")
        }
        async Left() {
                const locator = this.page.locator("//button[@aria-label='Left alignment']")
                await locator.click({ button: 'left', delay: 1000 })
        }
        async Right() {
                const locator = this.page.locator("//button[@aria-label='Right alignment']")
                await locator.click({ button: 'left', delay: 1000 })
        }
        async Center() {
                const locator = this.page.locator("//button[@aria-label='Center alignment']")
                await locator.click({ button: 'left', delay: 1000 })
        }
        async Alignment() {
                const locator = this.page.locator("//button[@aria-label='Justify']")
                await locator.click({ button: 'left', delay: 1000 })
        }
        async Fontlabl() {
                await this.page.click("//h5[text()='Font']")
        }
        async Font() {
                await this.page.click("(//div[@role='button'])[2]")
        }
        async Midnight() {
                await this.page.click("//li[text()='Midnight.ttf']")
        }
        async Thin() {
                await this.page.click("//li[text()='Midnight.ttf']")
        }
        async Bold() {
                const locator = this.page.locator("//button[@aria-label='Bold']")
                await locator.click({ force: true })
        }
        async Italic() {
                const locator = this.page.locator("//button[@aria-label='Italics']")
                await locator.click()
        }
        async Underline() {
                const locator = this.page.locator("//button[@aria-label='Underline']")
                await locator.click()
        }
        async Blocktype() {
                const locator = this.page.locator("//button[@aria-label='Uppercase']")
                await locator.click()
        }
        async Boldd() {
                const locator = this.page.locator("(//div[@role='button'])[3]")
                await locator.click()
        }
        async Lighter() {
                await this.page.click("//li[text()='Lighter']")
        }
        async Normal() {
                await this.page.click("//li[text()='Normal']")
        }
        async Bolder() {
                await this.page.click("//li[text()='Bolder']")
        }
        async Fontsize() {
                let ele = await this.page.locator("//input[@id='P-13727520022']")
                await ele.fill("60")
        }
        async inputXMargin() {
                let ele = await this.page.locator(this.globalPrizingPageElements.xMarzin)
                try {
                        await ele.fill("200")
                        await this.page.keyboard.press('Enter');
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing X Margin Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
        }
        async inputYMargin() {
                let ele = await this.page.locator(this.globalPrizingPageElements.yMarzin)
                try {
                        await ele.fill("300")
                        await this.page.keyboard.press('Enter');
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Y Margin Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
                await this.page.waitForTimeout(2000)
        }
        async inputWelocmeTextWightMargin() {
                let ele = await this.page.locator(this.globalPrizingPageElements.textWight)
                try {
                        await ele.fill("300")
                        await this.page.keyboard.press('Enter');
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Welcome Text Wight Margin Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
        }
        async inputWelcomeTextHightMargin() {
                let ele = await this.page.locator(this.globalPrizingPageElements.textHight)
                try {
                        await ele.fill("160")
                        await this.page.keyboard.press('Enter');
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Welcome Text Hight Margin Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
        }
        async TBackBtn() {
                await this.page.click("div.MuiBox-root.css-9xd5lq")
        }
        async TNextBtn() {
                await this.page.click("div.MuiBox-root.css-1osoyr8")
        }
        async TDeleteBtn() {
                await this.page.click("div.MuiBox-root.css-knjr7e")
        }
        async TMerzinBtn() {
                await this.page.click("(//div[@active='true'])[2]")
        }
        async TCopyBtn() {
                await this.page.click("//div[@iconcolor='#f1c40f']")
        }
        async Fillabl() {
                await this.page.click("//h5[text()='Fill']")
        }
        async FillBtn() {
                let ele = await this.page.locator(this.globalPrizingPageElements.welcomeTextColorInputField)
                try {
                        await ele.click({ button: 'left', delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Welcome Text Color Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
        }
        //stop from here
        async Colorpickerlabl() {
                await this.page.click("//h3[text()='Color Picker']")
        }
        async SwatchBtn() {
                await this.page.click("button[aria-label='Add Color']")
        }
        async SwatchBtn1() {
                await this.page.click("//span[text()='#ff0000ff']")
        }
        async Delete() {
                await this.page.click("(//button[@aria-label='delete'])[2]")
        }
        async RGBlabl() {
                await this.page.click("//h3[text()='RGB']")
        }
        async RGB1() {
                await this.page.click("(//input[@inputmode='numeric'])[1]")
        }
        async RGB2() {
                await this.page.click("(//input[@inputmode='numeric'])[2]")
        }
        async RGB3() {
                await this.page.click("(//input[@inputmode='numeric'])[3]")
        }
        async RGB4() {
                await this.page.click("//input[@id='P-11854806032']")
        }
        async DropBtn() {
                await this.page.click("//div[contains(@class,'MuiSelect-select MuiSelect-standard')]")
        }
        async Soliddrp() {
                await this.page.click("//div[text()='Solid']")
        }
        async Horizontal() {
                await this.page.click("//li[text()='Horizontal']")
        }
        async Vertical() {
                await this.page.click("//li[text()='Vertical']")
        }
        async Diagonal() {
                await this.page.click("//li[text()='Diagonal']")
        }
        async Radial() {
                await this.page.click("//li[text()='Radial']")
        }
        async Solid() {
                await this.page.click("//li[@data-value='solid']")
        }
        async Save() {
                const locator = this.page.locator("(//button[text()='Save'])[3]")
                expect(locator).toContainText("Save")
                await locator.click()
        }
        ///Image section/////////
        async Image() {
                const locator = this.page.locator("//button[@aria-label='Tab: Images']")
                await locator.click()
        }
        async Backgroundlabl() {
                await this.page.click("//h2[text()='Background']")
        }
        async Backgroundimagelabl() {
                await this.page.click("//p[text()='Background Image']")
        }
        async BcImage() {
                let ele = await this.page.locator(this.globalPrizingPageElements.backgroundImageInputFiled)
                try {
                        await ele.click({ button: 'left', delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Image Section Background Image Upload Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
        }
        async Logoimagelabl() {
                await this.page.click("//p[text()='Logo Image']")
        }
        async LgImage() {
                let ele = await this.page.locator(this.globalPrizingPageElements.logoImageInputFiled)
                try {
                        await ele.click({ button: 'left', delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Image Section Logo Image Upload Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
        }
        async FgImage() {
                let ele = await this.page.locator(this.globalPrizingPageElements.foregroundImageInputFiled)
                try {
                        await ele.click({ button: 'left', delay: 1000 })
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Image Section Foreground Image Upload Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
        }
        async IBackBtn() {
                await this.page.click("div.MuiBox-root.css-9xd5lq")
        }
        async INextBtn() {
                await this.page.click("div.MuiBox-root.css-1osoyr8")
        }
        async IDeleteBtn() {
                await this.page.click("div.MuiBox-root.css-knjr7e")
        }
        async IMerzinBtn() {
                await this.page.click("(//div[@active='true'])[2]")
        }
        async ICopyBtn() {
                await this.page.click("//div[@iconcolor='#f1c40f']")
        }
        async ImageXBtn() {
                await this.page.click("(//input[@type='number'])[2]")
        }
        async ImageYBtn() {
                await this.page.click("(//input[@type='number'])[3]")
        }
        async ImageWBtn() {
                await this.page.click("//p[text()='w']")
        }
        async ImageHBtn() {
                await this.page.click("//p[text()='H']")
        }
        async Backcolorlabl() {
                await this.page.click("//h5[text()='Background color']")
        }
        async ImageFillBtn() {
                await this.page.click("div[black='true']")
        }
        async IColorpickerlabl() {
                await this.page.click("//h3[text()='Color Picker']")
        }
        async ISwatchBtn() {
                await this.page.click("button[aria-label='Add Color']")
        }
        async ISwatchBtn1() {
                await this.page.click("//span[text()='#ff0000ff']")
        }
        async IDelete() {
                await this.page.click("(//button[@aria-label='delete'])[2]")
        }
        async IRGBlabl() {
                await this.page.click("//h3[text()='RGB']")
        }
        async IRGB1() {
                await this.page.click("(//input[@inputmode='numeric'])[1]")
        }
        async IRGB2() {
                await this.page.click("(//input[@inputmode='numeric'])[2]")
        }
        async IRGB3() {
                await this.page.click("(//input[@inputmode='numeric'])[3]")
        }
        async IRGB4() {
                await this.page.click("//input[@id='P19792246122']")
        }
        async IDropBtn() {
                await this.page.click("//div[contains(@class,'MuiSelect-select MuiSelect-standard')]")
        }
        async ISoliddrp() {
                await this.page.click("//div[text()='Solid']")
        }
        async IHorizontal() {
                await this.page.click("//li[text()='Horizontal']")
        }
        async IVertical() {
                await this.page.click("//li[text()='Vertical']")
        }
        async IDiagonal() {
                await this.page.click("//li[text()='Diagonal']")
        }
        async IRadial() {
                await this.page.click("//li[text()='Radial']")
        }
        async ISolid() {
                await this.page.click("//li[@data-value='solid']")
        }
        async ISave() {
                const locator = this.page.locator("(//button[text()='Save'])[3]")
                expect(locator).toContainText("Save")
                await locator.click()
        }
        ///Code Section///////////////////
        async Code() {
                const locator = this.page.locator("//button[@aria-label='Tab: Codes']")
                await locator.click()
        }
        async Codelabl() {
                await this.page.click("//h2[text()='Code']")
        }
        async Textcode() {
                await this.page.click("//button[text()='Text Code']")
        }
        async selectTextCode() {
                let ele = await this.page.locator(this.globalPrizingPageElements.selectTextCode)
                try {
                        await ele.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Code Section Select Text Code Element Is not Visiable | Error occurred: ${error}`);
                }
        }
        async inputXMarginForTextCode() {
                let ele = await this.page.locator(this.globalPrizingPageElements.xMarzin)
                try {
                        await ele.fill("100")
                        await this.page.keyboard.press('Enter');
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Code Section Text Code X Margin Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
        }
        async inputYMarginForTextCode() {
                let ele = await this.page.locator(this.globalPrizingPageElements.yMarzin)
                try {
                        await ele.fill("630")
                        await this.page.keyboard.press('Enter');
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Code Section Text Code Y Margin Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
                await this.page.waitForTimeout(2000)
        }
        async inputTextCodeWightMargin() {
                let ele = await this.page.locator(this.globalPrizingPageElements.textWight)
                try {
                        await ele.fill("390")
                        await this.page.keyboard.press('Enter');
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Code Section Text Code Wight Margin Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
        }
        async inputTextCodeHightMargin() {
                let ele = await this.page.locator(this.globalPrizingPageElements.textHight)
                try {
                        await ele.fill("60")
                        await this.page.keyboard.press('Enter');
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Main Menu | Global Prizing Code Section Text Code Hight Margin Input Field Element Is not Visiable | Error occurred: ${error}`);
                }
        }
        async Barcode() {
                await this.page.click("//button[text()='Bar Code']")
        }
        async clickOnBarCode() {
                await this.page.click("//div[@class='MuiBox-root css-lx9vk']/following-sibling::div[1]")
        }
        async Addexpire() {
                await this.page.click("//button[text()='Add Expiration Date']")
        }
        async BarCodelabl() {
                await this.page.click("//p[text()='Barcode value']")
        }
        async Barcodevalue() {
                const locator = this.page.locator("(//input[@rows='3'])[1]")
                expect(locator).toBeVisible()
                await locator.fill("Spartan")
        }
        // async Barcodevalue() {
        //         await this.page.click("//input[@id='P16002645472']")
        // }
        async CBackBtn() {
                await this.page.click("div.MuiBox-root.css-9xd5lq")
        }
        async CNextBtn() {
                await this.page.click("div.MuiBox-root.css-1osoyr8")
        }
        async CDeleteBtn() {
                await this.page.click("div.MuiBox-root.css-knjr7e")
        }
        async CMerzinBtn() {
                await this.page.click("(//div[@active='true'])[2]")
        }
        async CCopyBtn() {
                await this.page.click("//div[@iconcolor='#f1c40f']")
        }
        async CodeXBtn() {
                await this.page.click("(//input[@type='number'])[2]")
        }
        async CodeYBtn() {
                await this.page.click("(//input[@type='number'])[3]")
        }
        async CodeWBtn() {
                await this.page.click("//p[text()='w']")
        }
        async CodeHBtn() {
                await this.page.click("//p[text()='H']")
        }
        async CodeFILLlabl() {
                await this.page.click("//h5[text()='Fill']")
        }
        async CodeFillBtn() {
                await this.page.click("div[black='true']")
        }
        async CColorpickerlabl() {
                await this.page.click("//h3[text()='Color Picker']")
        }
        async CSwatchBtn() {
                await this.page.click("button[aria-label='Add Color']")
        }
        async CSwatchBtn1() {
                await this.page.click("//span[text()='#ff0000ff']")
        }
        async CDelete() {
                await this.page.click("(//button[@aria-label='delete'])[2]")
        }
        async CRGBlabl() {
                await this.page.click("//h3[text()='RGB']")
        }
        async CRGB1() {
                await this.page.click("(//input[@inputmode='numeric'])[1]")
        }
        async CRGB2() {
                await this.page.click("(//input[@inputmode='numeric'])[2]")
        }
        async CRGB3() {
                await this.page.click("(//input[@inputmode='numeric'])[3]")
        }
        async CRGB4() {
                await this.page.click("//input[@id='P19792246122']")
        }
        async CDropBtn() {
                await this.page.click("//div[contains(@class,'MuiSelect-select MuiSelect-standard')]")
        }
        async CSoliddrp() {
                await this.page.click("//div[text()='Solid']")
        }
        async CHorizontal() {
                await this.page.click("//li[text()='Horizontal']")
        }
        async CVertical() {
                await this.page.click("//li[text()='Vertical']")
        }
        async CDiagonal() {
                await this.page.click("//li[text()='Diagonal']")
        }
        async CRadial() {
                await this.page.click("//li[text()='Radial']")
        }
        async CSolid() {
                await this.page.click("//li[@data-value='solid']")
        }
        async CSave() {
                const locator = this.page.locator("(//button[text()='Save'])[3]")
                expect(locator).toContainText("Save")
                await locator.click()
        }
        /////Share section////////////////
        async ShareBtn() {
                const locator = this.page.locator("//button[@aria-label='Tab: Share']")
                await locator.click()
        }
        async Sharelabl() {
                await this.page.click("//h2[text()='Share']")
        }
        async Filllabl() {
                await this.page.click("(//div[@class='MuiBox-root css-1pqer0i'])[1]")
        }
        async ShfillBtn() {
                await this.page.click("(//div[@class='MuiBox-root css-1pqer0i'])[1]")
        }
        async ShSwatchBtn() {
                await this.page.click("button[aria-label='Add Color']")
        }
        async ShSwatchBtn1() {
                await this.page.click("//span[text()='#ff0000ff']")
        }
        async ShDelete() {
                await this.page.click("(//button[@aria-label='delete'])[2]")
        }
        // async ShRGB1() {
        //         const locator = this.page.locator("//input[@inputmode='numeric'])[1]")
        //         expect(locator).toBeVisible()
        //         await locator.fill("120")
        // }
        async ShRGB1() {
                await this.page.click("(//input[@inputmode='numeric'])[1]")
        }
        async ShRGB2() {
                await this.page.click("(//input[@inputmode='numeric'])[2]")
        }
        async ShRGB3() {
                await this.page.click("(//input[@inputmode='numeric'])[3]")
        }
        async ShRGB4() {
                await this.page.click("(//input[@inputmode='numeric'])[4]")
        }
        async ShDropBtn() {
                await this.page.click("//div[contains(@class,'MuiSelect-select MuiSelect-standard')]")
        }
        async ShSoliddrp() {
                await this.page.click("//div[text()='Solid']")
        }
        async ShHorizontal() {
                await this.page.click("//li[text()='Horizontal']")
        }
        async ShVertical() {
                await this.page.click("//li[text()='Vertical']")
        }
        async ShDiagonal() {
                await this.page.click("//li[text()='Diagonal']")
        }
        async ShRadial() {
                await this.page.click("//li[text()='Radial']")
        }
        async ShSolid() {
                await this.page.click("//li[@data-value='solid']")
        }
        async ShSave() {
                const locator = this.page.locator("(//button[text()='Save'])[3]")
                expect(locator).toContainText("Save")
                await locator.click()
        }
        async Textcollab() {
                await this.page.click("(//p[text()='Text Color'])[1]")
        }
        async TextcolfillBtn() {
                await this.page.click("(//div[@class='MuiBox-root css-1pqer0i'])[2]")
        }
        async Changetextlab() {
                await this.page.click("//p[text()='Change Text']")
        }
        async Changetext() {
                const locator = this.page.locator("//input[@rows='3']")
                expect(locator).toBeVisible()
                await locator.fill("Automation")
        }
        async Shareby() {
                await this.page.click("//p[text()='Share By']")
        }
        async SMSBtn() {
                await this.page.click("//button[text()='SMS']")
        }
        async EmailBtn() {
                await this.page.click("//button[text()='Email']")
        }
        async WalletBtn() {
                await this.page.click("//button[text()='Wallet']")
        }
        async BackBtn() {
                await this.page.click("div.MuiBox-root.css-9xd5lq")
        }
        async NextBtn() {
                await this.page.click("div.MuiBox-root.css-1osoyr8")
        }
        async DeleteBtn() {
                await this.page.click("div.MuiBox-root.css-knjr7e")
        }
        async MerzinBtn() {
                await this.page.click("(//div[@active='true'])[2]")
        }
        async CopyBtn() {
                await this.page.click("//div[@iconcolor='#f1c40f']")
        }
        async ShareXBtn() {
                await this.page.click("(//input[@type='number'])[2]")
        }
        async ShareYBtn() {
                await this.page.click("(//input[@type='number'])[3]")
        }
        async ShareWBtn() {
                await this.page.click("(//input[@type='number'])[4]")
        }
        async ShareHBtn() {
                await this.page.click("(//input[@type='number'])[5]")
        }
        async ShrSave() {
                const locator = this.page.locator("(//button[text()='Save'])[2]")
                expect(locator).toContainText("Save")
                await locator.click()
        }
        /////////////////Open in Wizard////////////////
        async Clickopenwizard() {
                const locator = this.page.locator("//button[text()='Open in Wizard']")
                await locator.click()
        }
        async Welcomelabl() {
                const locator = this.page.locator("//h1[text()='Welcome to the Coupon Wizard']")
                await expect(locator).toHaveText('Welcome to the Coupon Wizard');
        }
        // async ClickImageupload() {
        //         const locator = this.page.locator("//div[@class='MuiBox-root css-1qgo2vq']")
        //         await locator.click()
        //         await this.page.dispatchEvent("//button[text()='Choose File']", 'drop', { dataTransfer });
        //         }
        async ClickImageupload() {
                const locator = this.page.locator("//div[@class='MuiBox-root css-1qgo2vq']")
                await locator.click()
        }
        async ClickNext() {
                const locator = this.page.locator("//button[text()='Next']")
                await locator.click({ force: true })
        }
        async clickHeaderOkBtn() {
                const locator = this.page.locator("//button[text()='Ok']")
                await locator.click()
        }
        async ClickIconlogo() {
                const locator = this.page.locator("//div[@class='MuiBox-root css-v2612']")
                await locator.click({ button: "left" })
                ////////
                // await this.page.locator("//span[text()='per event']/following::input")
                // //expect(locator).toBeVisible()
                // //await locator = keyboard.press("End")
                // // await locator.click()
                // await locator.fill("winter1")
                // //await this.page.locator("//button[text()='Next']").click()
        }
        async clickHeaderNameInputField() {
                const locator = this.page.locator("//div[@class='MuiBox-root css-1e4f5sg']//p[1]")
                //expect(locator).toBeVisible()
                //await locator = keyboard.press("End")
                // await locator.click()
                await locator.click()
                // await this.page.locator("//button[text()='Next']").click()
        }
        async InputHeadername() {
                const locator = this.page.locator("//input[@placeholder='Enter header']")
                //expect(locator).toBeVisible()
                //await locator = keyboard.press("End")
                // await locator.click()
                await locator.fill("Demo Header")
                // await this.page.locator("//button[text()='Next']").click()
        }
        //click({ force: true })
        async UploadPrimaryImagr() {
                const locator = this.page.locator("//div[@class='MuiBox-root css-v2612']")
                await locator.click()
                const filePath0 = "testData/images/potrait.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await this.page.locator("//button[text()='Choose File']").click()
                await this.page.waitForTimeout(3000)
                await this.page.locator("(//button[text()='Save'])[2]").click()
        }
        async clickTimeSection() {
                const locator = this.page.locator("//p[@iseditable='true']")
                await locator.click()
        }
        async Clickcalendar() {
                const locator = this.page.locator("(//button[text()='Pick Date from Calendar'])[2]")
                await locator.click()
        }
        async Clickdate() {
                const locator = this.page.locator("//button[text()='27']")
                await locator.click()
        }
        async DateSave() {
                const locator = this.page.locator("(//button[text()='Save'])[2]")
                await locator.click()
        }
        async Clickcbarcode() {
                const locator = this.page.locator("//input[@placeholder='Enter code value']")
                await locator.click()
        }
        async inputBarCode() {
                const locator = this.page.locator("//input[@placeholder='Enter code value']")
                await locator.fill("Demo Data")
        }
        async Clicksharedropdown() {
                const locator = this.page.locator("(//div[@role='button'])[2]")
                await locator.click()
        }
        async ClickshareEmail() {
                const locator = this.page.locator("//span[text()='Share via Email']")
                await locator.click()
        }
        async Clicksharegooglewallet() {
                const locator = this.page.locator("//span[text()='Add in Google Wallet']")
                await locator.click()
        }
        async Clickshareapplewallet() {
                const locator = this.page.locator("//li[@data-value='Add in Apple Wallet']")
                await locator.click()
                // await this.page.locator("//button[text()='Next']").click({force:true})
        }
        async clickOnScreen() {
                const locator = this.page.locator("(//div[@id='menu-']//div)[1]")
                await locator.click()
                // await this.page.locator("//button[text()='Next']").click({force:true})
        }
        async Something() {
                const locator = this.page.locator("p.MuiTypography-root.MuiTypography-body1.css-1vrthfn")
                await locator.click()
        }
        async Clickcontinueeditor() {
                const locator = this.page.locator("//button[text()='Continue to Editor']")
                await locator.click()
        }
        async ClickSave() {
                const locator = this.page.locator("(//button[text()='Save'])[2]")
                await locator.click()
        }
}