import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class functions{
        [x: string]: any;

        private page: Page;
        static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }



        async fontUploadFunction() {
                const filePath0 = "files/Thin.otf"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })                
        }

        async bannerImageUploadFunction() {
                const filePath0 = "testData/images/CountDownStageBanner.jpg"
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
                const filePath0 = "testData/logos/Logo.jpg"
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

                const imageText = await this.page.locator("//div[text()='Image']")
                expect(imageText).toContainText("Image")

                const ratioText = await this.page.locator("//div[text()='Ratio']")
                expect(ratioText).toContainText("Ratio")

                
                const resolutionText = await this.page.locator("//div[text()='Resolution']")
                expect(resolutionText).toContainText("Resolution")                        

                
                const alignmentText = await this.page.locator("//div[text()='Alignment']")
                expect(alignmentText).toContainText("Alignment")

                const fileTypeText = await this.page.locator("//div[text()='File Type']")
                expect(fileTypeText).toContainText("File Type")


                const maxFileSizeText = await this.page.locator("//div[text()='Max File Size']")
                expect(alignmentText).toContainText("Max File Size")


                const fileNameText = await this.page.locator("//p[text()='File Name']")
                expect(alignmentText).toContainText("File Name")


                const fileSizeText = await this.page.locator("//p[text()='File Size']")
                expect(alignmentText).toContainText("File Size")
                        
                        
        }



}