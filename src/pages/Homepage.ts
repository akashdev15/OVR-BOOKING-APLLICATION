import {Page , Locator, expect} from "@playwright/test"

export class Homepage{

    readonly page:Page
    readonly popup:Locator
    readonly popupcls:Locator
    readonly origin:Locator
    readonly destination:Locator
    readonly dateselection:Locator

    
constructor (page:Page){
    this.page=page
    this.popup=page.locator(".img-responsive")
    this.popupcls=this.popup.locator(".close_icon")
    this.origin=page.locator(".ant-select-selection-item")
    this.destination=page.locator(".ant-select-selection-item")
    this.dateselection=page.locator(".anticon anticon-calendar")
}  

async pagegoto(){
    await this.page.goto(process.env.BASE_url)
}

async popupmsg(){
    await expect(this.popup).toBeVisible()
    await this.popupcls.click()
}






}