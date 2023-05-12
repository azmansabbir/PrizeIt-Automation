import { expect } from "@fixtures/basePages";
import { Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";
export default class MobileDesign {
    private base: BaseFunctions;
    constructor(private page: Page
    ) {
        this.base = new BaseFunctions(page);
    }
    private mobileDesignPageElements = {
        mainMenuPage: "text=Main Menu",
        mobileDesignPage: "text=Mobile Design",
        arcadePage: "text=Arcade",
        deletefont: "//p[text()='Aa']/following-sibling::button",
        uploadFontInputField: "//div[@class='MuiBox-root css-v2612']",
        uploadedFontTitle: "//p[text()='Midnight']",
        entryScreenSelectionField: "//div[@role='button']",
        myProfile: "//li[@data-value='userProfile']",
        entryScreenRulesEle: "//li[@data-value='rules']",
        entryScreenHowToPlay: "//li[@data-value='howToPlay']",
        entryScreenPrize: "//li[@data-value='prize']",
        entryScreenHome: "//li[@data-value='home']",
        mobileLinkButton: `(//button[@aria-label='Show Mobile Link']//button)[1]`,
        guessTheScroreBtn: "//p[text()='Guess The Score']",
        mobileLinkBtn: "//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]",
        uploadedFontThin: "//p[text()='Thin.ot']",
        clearAllBtn: "//button[text()='Clear All']",
        primaryColorTitleText: "//p[text()='Primary']",
        primaryColorInputField: "//p[text()='Primary']/following-sibling::button",
        primaryColorFirstInputField: "(//input[@type='text'])[1]",
        primaryColorSecondInputField: "(//input[@type='text'])[2]",
        primaryColorThirdInputField: "(//input[@type='text'])[3]",
        primaryColorOpacityInputField: "(//input[@type='text'])[4]",
        primaryColorHexInputField: "(//input[@type='text'])[5]",
        saveBtn: "//button[text()='Save']",
        primaryColorPickerWindowClose: "div.MuiBox-root.css-1x8a1gr",
        secondaryColorTitleText: "//p[text()='Secondary']",
        secondaryColorInputField: "//p[text()='Secondary']/following-sibling::button",
        swithchColorNumberThree: "//span[text()='#2b3648ff']",
        swithchColorNumberFour: "//span[text()='#5fbcd2ff']",
        swithchColorNumberFive: "(//li[contains(@class,'MuiListItem-root MuiListItem-gutters')])[5]",
        colorSwaitchDeleteBtn: "//button[@aria-label='delete']",
        colorTypeSelectionInputField: "//div[contains(@class,'MuiSelect-select MuiSelect-standard')]",
        colorTypeRadial: "//li[@data-value='radial']",
        colorTypeDiagonal: "//li[@data-value='diagonal']",
        colorTypeVertical: "//li[@data-value='vertical']",
        colorTypeHorizontal: "//li[@data-value='horizontal']",
        colorTypeSolid: "//li[@data-value='solid']",
        tertiaryTitleText: "//p[text()='Tertiary']",
        tertiaryColorInputField: "//p[text()='Tertiary']/following-sibling::button",
        buttonTitleText: "//p[text()='Button Fill']",
        buttonColorInputField: "//p[text()='Button Fill']/following-sibling::button",
        buttonGlowTitleText: "//p[text()='Button Glow']",
        buttonGlowColorInputField: "//p[text()='Button Glow']/following-sibling::button",
        textColorSectionTitleText: "//p[text()='Text']",
        textColorInputField: "//p[text()='Text']/following-sibling::button",
        textDialogBoxTitleText: "//p[text()='Field Fill ']",
        textDialogBoxColorInputField: "(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[9]",
        headerTitleText: "//p[text()='Headline']",
        headerColorInputField: "//p[text()='Headline']/following-sibling::button",
        headerTextTitleText: "//p[text()='Header Glow']",
        headerTitleTextColorInputField: "//p[text()='Header Glow']/following-sibling::button",
        gamificationTitleText: "//p[text()='Gamification']",
        gamificationColorInputField: "//p[text()='Gamification']/following-sibling::button",
        gamificationGlowLineTitleText: "//p[text()='Gamification Glow Line']",
        gamificationGlowLineColorInputField: "//p[text()='Gamification Glow Line']/following-sibling::button",
        lnadscapeBGDeleteBtn: "(//button[@aria-label='Delete'])[5]",
        protraitBGDeleteBtn: "(//button[@aria-label='Delete'])[4]",
        landscapeHeaderBGDeleteBtn: "(//button[@aria-label='Delete'])[3]",
        protraitHeaderBGDeleteBtn: "(//button[@aria-label='Delete'])[2]",
        mainLogoDeleteBtn: "(//button[@aria-label='Delete'])[1]",
        protraitImageCheckBox: "(//input[@value='video'])[2]",
        protraitVideoCheckBox: "(//input[@value='video'])[4]",
        protraitImageChecboxs: "(//span[text()='Image']/preceding::input[@type='radio'])[2]",
        protraitImageDltBtn: "(//h5[text()='Portrait Background']/following::button[@title='Delete']//div)[1]",
        landscapeBGImageCheckBox: "(//input[@value='video'])[3]",
        landscapeBGVideoCheckBox: "(//input[@value='video'])[3]",
        landscapeBGVVdoCheckbox: "(//input[@value='video'])[1]",
        mainLogoUploadInputField: "(//div[@class='MuiBox-root css-v2612'])[6]",
        protraitBGHeaderUploadInputField: "(//div[@class='MuiBox-root css-v2612'])[5]",
        landscpaeBGHeaderUploadInputField: "(//div[@class='MuiBox-root css-v2612'])[3]",
        qrCodeLogoUploadInputField: "//h5[text()='QR Code Logo']/following::div[@class='MuiBox-root css-v2612']",
        protraitBGUploadInputField: "(//div[@class='MuiBox-root css-v2612'])[4(//h5[text()=/'Portrait Background/']/following::div[@class=/'MuiBox-root css-v2612/'])[1]",
        protraitAndLanscapeBGSuccessfullyUploadEle: "//h5[text()='Mobile Background']/following::button[@aria-label='Delete']//div[1]",
        qrCodeLogoSuccessfullyUploadEle: "//h5[text()='QR Code Logo']/following::button[@aria-label='Delete']//div[1]",
        landscapeBGHeaderSuccessfullyUploadEle: "//h5[text()='Main Logo']/following::button[@aria-label='Delete']//div[1]",
        protraitBGHeaderSuccessfullyUploadEle: "(//h5[text()='Portrait Background Header']/following::button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[2]",
        mainLogoSuccessfullyUploadEle: "(//h5[text()='Main Logo']/following::button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[2]",
        landScapeBGUploadInputField: "(//div[@class='MuiBox-root css-v2612'])[2]",
        errorAlertMassage: "//p[text()='Incorrect file extension. Please upload an image']",
        okBtn: "//button[text()='Ok']",
    }
    async clickHomeAvater() {
        const ele = this.page.locator('button').nth(2)
        if (await ele.isEnabled()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Home Screen | Home Avater Is Not Visible | Could not find locator:"${ele}"`)
        await this.page.waitForLoadState("networkidle");
    }
    async clickArcadePage() {
        let ele = await this.page.locator(this.mobileDesignPageElements.arcadePage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Arcade Page Element Is Not Visible | Could not find:"${ele}"`)
    }
    async HomeAvater() {
        const ele = this.page.locator('button').nth(2)
        if (await ele.isEnabled()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Home Screen | Home Avater Is Not Visible | Could not find locator:"${ele}"`)
    }
    async mainMenuBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mainMenuPage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForLoadState("networkidle");
        }
        else throw new Error(`Home Avater Button | Main Menu Button Element Is not Visible | Could not find locator:"${ele}"`)
    }
    async clickMobileDesign() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mobileDesignPage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForLoadState("domcontentloaded");
        }
        else throw new Error(`Main Menu | Mobile Design Page Element Is not Visible | Could not find locator:"${ele}"`)
    }
    async mobileDesign() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mobileDesignPage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForLoadState("networkidle");
        }
        else throw new Error("Main Menu | Mobile Design Page Element Is not Visible")
    }
    async clickUploadFontInputFiled() {
        let ele = await this.page.locator(this.mobileDesignPageElements.uploadFontInputField).first()
        if (await ele.isVisible()) {
            await ele.click({ force: true })
            await this.page.waitForLoadState("networkidle");
        }
        else throw new Error(`Main Menu | Mobile Design Page Font Upload Input Field Element Is not Visible | Could not find:"${ele}"`)
    }
    async verifyFontUploadedSuccessfully() {
        await this.page.waitForSelector(this.mobileDesignPageElements.uploadedFontTitle)
        let ele = await this.page.locator(this.mobileDesignPageElements.uploadedFontTitle)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Font Uploaded Font Is Not Visible | Could not find:"${ele}"`)
    }
    async deleteFont() {
        let ele = await this.page.locator(this.mobileDesignPageElements.deletefont)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else {
            console.log(`Main Menu | Mobile Design | There Was No Uploaded Font Is Visible | Could not find locator:"${ele}"`)
        }
    }
    async clickEntryScreenSelectField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenSelectionField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen Selection Field Element Is Not Visible | Could not find:"${ele}"`)
    }
    async selectEntryScreenUserProfile() {
        let ele = await this.page.locator(this.mobileDesignPageElements.myProfile)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As My Profile Element Is Not Visible | Could not find:"${ele}"`)
    }
    async selectEntryScreenRules() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenRulesEle)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As Rules Element Is Not Visible | Could not find:"${ele}"`)
    }
    async selectEntryScreenHowToPlay() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenHowToPlay)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As How To Play Element Is Not Visible | Could not find:"${ele}"`)
    }
    async selectEntryScreenPrize() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenPrize)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As Prize Element Is Not Visible | Could not find:"${ele}"`)
    }
    async selectEntryScreenHome() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenHome)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As Home Element Is Not Visible | Could not find:"${ele}"`)
    }
    async clickMobileLinkBtn() {
        let ele = await this.page.frameLocator('iframe').locator(this.mobileDesignPageElements.mobileLinkButton)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Guess The Score | Mobile Link Button Element Is Not Visible | Error occurred: ${error}`);
        }
    }
    async clickGussTheScroeSectionForOpenMobileScreen() {
        let ele = await this.page.locator(this.mobileDesignPageElements.guessTheScroreBtn)
        try {
            await expect(ele).toContainText("Guess The Score")
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Game | Guess The Score Button Element Is Not Visible | Error occurred: ${error}`);
        }
    }
    async clickMobileLinkOpenBtn() {
        // Click text=Open Link
        const [page1] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.frameLocator('iframe').locator(this.mobileDesignPageElements.mobileLinkBtn).click({ button: "left", delay: 1000 })
        ]);
        // await this.page.waitForLoadState("networkidle")
        await this.page.waitForTimeout(3000)
        return page1;
    }
    async verifyFontSuccessfullyUploaded() {
        await this.page.waitForSelector(this.mobileDesignPageElements.uploadedFontThin)
        let ele = await this.page.locator(this.mobileDesignPageElements.uploadedFontThin)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Uploaded Font Is Not Visible Successfully | Could not find:"${ele}}"`)
    }
    //click on the clear button
    async clickClearAllBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.clearAllBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Clear All Button Is Not Visible Successfully | Could not find:"${ele}}"`)
    }
    //Primary Color Input field Element
    async checkPrimaryColortxt() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Primary")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Title Text Is Not Visible Successfully | Could not find:"${ele}}"`)
    }
    async clickPrimaryColorField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async primaryColorFirstInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorFirstInputField)
        if (await ele.isVisible()) {
            await ele.fill("95")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color First Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async primaryColorSecondInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorSecondInputField)
        if (await ele.isVisible()) {
            await ele.fill("188")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Input Second Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async primaryColorThirdInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorThirdInputField)
        if (await ele.isVisible()) {
            await ele.fill("210")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Third Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async primaryColorOpacityInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorOpacityInputField)
        if (await ele.isVisible()) {
            await ele.fill("100")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Opacity Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async primaryColorHexInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorHexInputField)
        if (await ele.isVisible()) {
            await ele.fill("5FBCD2FF")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Hex Input Field Button Is Not Visible | Could not find:"${ele}}"`)
        await this.page.waitForTimeout(2000)
    }
    async clickSaveBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.saveBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Window Save Button Field Button Is Not Visible | Could not find:"${ele}}"`)
        await this.page.waitForTimeout(2000)
    }
    async primaryColorPickerWindowClose() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorPickerWindowClose)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Window Close Button Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Secondary Color Field Ele
    async checkSecondaryText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.secondaryColorTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Secondary")
        }
        else throw new Error(`Main Menu | Mobile Design Secondary Color Title Text Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickSecondaryColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.secondaryColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Secondary Color Input Field Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickSwatchesColorNumberThree() {
        let ele = await this.page.locator(this.mobileDesignPageElements.swithchColorNumberThree)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Number Three Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickSwatchesColorNumberFour() {
        let ele = await this.page.locator(this.mobileDesignPageElements.swithchColorNumberFour)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Number Four Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickSwatchesColorNumberFive() {
        let ele = await this.page.locator(this.mobileDesignPageElements.swithchColorNumberFive)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design Color Window Color Number Five Is Not Visible | Could not find:"${error}`)
        }

        // if (await ele.isVisible()) {
        //     await ele.click({ button: "left", delay: 1000 })
        // }
        // else throw new Error(`Main Menu | Mobile Design Color Window Color Number Five Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickColorSwatchesDeleteBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.swithchColorNumberFive)

        try {
            await ele.click({ button: "left", delay: 1000 })

        } catch (error) {
            throw new Error(`Main Menu | Mobile Design Color Window Color Switch Delete Button Is Not Visible | Could not find:"${error}"`)
        }
    }
    async clcikColorTypeSelectionInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeSelectionInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Selection Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectColorTypeRadial() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeRadial)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Radial Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectColorTypeDiagonal() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeDiagonal)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Diagonal Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectColorTypeVertical() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeVertical)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Vertical Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectColorTypeHorizontal() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeHorizontal)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Horizontal Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectColorTypeSolid() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeSolid)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Solid Is Not Visible | Could not find:"${ele}}"`)
    }
    //Tertiary color input field ele
    async checkTertiaryText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.tertiaryTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Tertiary")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Tertiary Title Text Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickTertiaryColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.tertiaryColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Tertiary Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Bitton color Input Field Ele
    async checkButtonText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.buttonTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Button Fill")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Button Fill Title Text Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickButtonColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.buttonColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Button Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Element of the Button Glow Field
    async checkButtonGlowText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.buttonGlowTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Button Glow")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Button Glow Title Text Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickButtonGlowColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.buttonGlowColorInputField)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design Color Section Button Glow Color Input Field Button Is Not Visible | Could not find:"${error}`)
        }
    }
    //Text Filed Eelement
    async checkTextText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.textColorSectionTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Text")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Text Title Text Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickTextColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.textColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Main Menu | Mobile Design Color Section Text Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Text Dialog Box Filed Eelement
    async checkTextDialogBoxText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.textDialogBoxTitleText)
        try {
            await expect(ele).toContainText("Field Fill")
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design Color Section Field Fill Title Text Is Not Visible | Could not find:"${error}"`)

        }

    }
    async clickTextDialogBoxColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.textDialogBoxColorInputField)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design Color Section Field Fill Dialog Box Color Input Field Button Is Not Visible | Could not find:"${error}"`)
        }


    }
    //Text Header Filed Eelement
    async checkHeaderFieldText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.headerTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Headline")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Header Title Text Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickHeaderFieldColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.headerColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section HeadLine Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Text Header Text Filed Eelement
    async checkHeaderTextFieldText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.headerTextTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Header Glow")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Header Text Title Text Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickHeaderTextFieldColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.headerTitleTextColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Header Text Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Text Gamification Filed Eelement
    async checkGamificationFieldText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.gamificationTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Gamification")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Gamification Title Text Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickGamificationFieldColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.gamificationColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Gamification Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Text Gamification Glow Line Filed Eelement
    async checkGamificationGlowLineFieldText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.gamificationGlowLineTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Gamification Glow Line")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Gamification Glow Line Title Text Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickGamificationGlowLineFieldColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.gamificationGlowLineColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Gamification Line Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async deleteUploadedLandscapeBG() {
        let ele = await this.page.locator(this.mobileDesignPageElements.lnadscapeBGDeleteBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        }
        else {
            console.log(`Main Menu | Mobile Design Uploaded Landscape Background Is Not Found | Could not find:"${ele}}"`)
        }
    }
    async deleteUploadedPortraitBG() {
        let ele = await this.page.locator(this.mobileDesignPageElements.protraitBGDeleteBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        }
        else {
            console.log(`Main Menu | Mobile Design Uploaded Portrait Background Is Not Found | Could not find:"${ele}}"`)
        }
    }
    async deleteUploadedLandscapeBGHeader() {
        let ele = await this.page.locator(this.mobileDesignPageElements.landscapeHeaderBGDeleteBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        }
        else {
            console.log(`Main Menu | Mobile Design Uploaded Landscape Header Background Is Not Found | Could not find:"${ele}}"`)
        }
    }
    async deleteUploadedPortraitBGHeader() {
        let ele = await this.page.locator(this.mobileDesignPageElements.protraitHeaderBGDeleteBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        }
        else {
            console.log(`Main Menu | Mobile Design Uploaded Portrait Header Background Is Not Found | Could not find:"${ele}}"`)
        }
    }
    async deleteUploadedMainLogo() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mainLogoDeleteBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        }
        else {
            console.log(`Main Menu | Mobile Design Uploaded Main Logo Is Not Found | Could not find:"${ele}}"`)
        }
    }
    async clickPortraitBackgroundHeaderVideoCheckBox() {
        try {
            await this.page.locator(this.mobileDesignPageElements.protraitVideoCheckBox).click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(1000)
        } catch (error) {
            console.log(`Main Menu | Mobile Design Protrait Background Image CheckBox Is Not Checked `)
        }
    }
    async clickPortraitBackgroundHeaderImageCheckBox() {
        let ele = await this.page.locator(this.mobileDesignPageElements.protraitImageChecboxs)
        try {
            await ele.check()
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design Protrait Background Image CheckBox Is Not Checked | Error occurred: ${error}`);
        }
    }
    async deletePotraitBackgrounBanner() {
        let ele = await this.page.locator(this.mobileDesignPageElements.protraitImageDltBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else {
            console.log(`Main Menu | Mobile Design Protrait Background Image Delete Button is not visiable  | Could not find:"${ele}}"`)
        }
    }
    async clickLandscapeBackgroundHeaderVideoCheckBox() {
        let ele = await this.page.locator(this.mobileDesignPageElements.landscapeBGImageCheckBox).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.mobileDesignPageElements.landscapeBGImageCheckBox).click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        }
        else {
            console.log(`Main Menu | Mobile Design Landscape Background Image Delete Button Is Not Visible | Could not find:"${ele}}"`)
        }
    }
    async clickPortraitBackgroundVideoCheckBox() {
        let ele = await this.page.locator(this.mobileDesignPageElements.protraitImageCheckBox).isChecked()
        if ((ele == false)) {
            await this.page.locator(this.mobileDesignPageElements.protraitImageCheckBox).check()
        }
        else {
            console.log(`Main Menu | Mobile Design Protrait Background Image CheckBox Is Checked`)
        }
    }
    async clickLandscapeBackgroundVideoCheckBox() {
        let ele = await this.page.locator(this.mobileDesignPageElements.landscapeBGVVdoCheckbox).isChecked()
        if ((ele == false)) {
            await this.page.locator(this.mobileDesignPageElements.landscapeBGVVdoCheckbox).check()
        }
        else {
            console.log(`Main Menu | Mobile Design Landscape Background Image CheckBox Is Checked`)
        }
    }
    async clickToUploadMainLogo() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mainLogoUploadInputField)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design Main Logo Upload Input Field Is Not Visible | Error occurred: ${error}`);
        }
    }
    async clickToUploadPortraitBackgroundHeader() {
        let ele = await this.page.locator(this.mobileDesignPageElements.protraitBGHeaderUploadInputField)
        try {
            await ele.click({ force: true })
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design Protrait Background Header Upload Input Field Is Not Visible | Error occurred: ${error}`);
        }
    }
    async clickToUploadLandscapeBackgroundHeader() {
        let ele = await this.page.locator(this.mobileDesignPageElements.landscpaeBGHeaderUploadInputField)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design Main Logo Upload Input Field Is Not Visible | Error occurred: ${error}`);
        }
    }
    async clickToUploadQRCodeLogo() {
        let ele = await this.page.locator(this.mobileDesignPageElements.qrCodeLogoUploadInputField)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design QR Code Logo Upload Input Field Is Not Visible | Error occurred: ${error}`);
        }
    }

    async clickToUploadPortraitBackground() {
        let ele = await this.page.locator(this.mobileDesignPageElements.protraitBGUploadInputField)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design Protrait Background Upload Input Field Is Not Visible | Error occurred: ${error}`);
        }
    }
    async verifyPotraitBackgroundUploadSuccessfully() {
        await this.page.waitForSelector(this.mobileDesignPageElements.protraitAndLanscapeBGSuccessfullyUploadEle)
    }

    async verifyQrCodeLogoUploadSuccessfully() {
        await this.page.waitForSelector(this.mobileDesignPageElements.qrCodeLogoSuccessfullyUploadEle)
    }
    async verifyLandscapeBackgroundUploadSuccessfully() {
        await this.page.waitForSelector(this.mobileDesignPageElements.protraitAndLanscapeBGSuccessfullyUploadEle)
    }
    async verifyLandscapeBackgroundHeaderUploadSuccessfully() {
        await this.page.waitForSelector(this.mobileDesignPageElements.landscapeBGHeaderSuccessfullyUploadEle)
    }
    async verifyPortraitBackgroundHeaderUploadSuccessfully() {
        await this.page.waitForSelector(this.mobileDesignPageElements.protraitBGHeaderSuccessfullyUploadEle)
    }
    async verifyMainLogoUploadSuccessfully() {
        await this.page.waitForSelector(this.mobileDesignPageElements.mainLogoSuccessfullyUploadEle)
    }
    async clickToUploadLandscapeBackground() {
        let ele = await this.page.locator(this.mobileDesignPageElements.landScapeBGUploadInputField)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design Landscape Background Upload Input Field Is Not Visible | Error occurred: ${error}`);
        }
    }
    async verifyErrorAlertText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.errorAlertMassage)
        try {
            await expect(ele).toContainText("Incorrect file extension. Please upload an image")
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design File Type Supported Error Alert Massage Is Not Visible | Error occurred: ${error}`);
        }
    }
    async clcikErrorAlertOkBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.okBtn)
        try {
            await expect(ele).toContainText("Ok")
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Main Menu | Mobile Design File Type Supported Error Alert Modal Ok Button Is Not Visible | Error occurred: ${error}`);
        }
    }
    //Start function from here
    async validateTryToUploadInvalidFont() {
        const filePath0 = "testData/csv/csv.csv"
        this.page.on("filechooser", async (filechooser) => {
            await filechooser.setFiles([filePath0]);
        })
        await this.clickUploadFontInputFiled();
    }
    //>>>Upload Image
    async dragAndDropUploadHelper() {
        const buffer = readFileSync('testData/videos/video.mp4');
        // Create the DataTransfer and File
        const dataTransfer = await this.page.evaluateHandle((data) => {
            const dt = new DataTransfer();
            // Convert the buffer to a hex array
            const file = new File([data.toString('hex')], 'video.mp4', { type: 'application/mp4' });
            dt.items.add(file);
            return dt;
        }, buffer);
        await this.page.dispatchEvent("(//div[@class='MuiBox-root css-v2612'])[2]", 'drop', { dataTransfer });
        await this.page.waitForLoadState("domcontentloaded")
    }
}