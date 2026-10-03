import {Page , Locator, expect} from "@playwright/test"

export class Homepage{

    readonly page:Page
    readonly popupcls:Locator
    readonly origin:Locator
    readonly destination:Locator
    readonly selectdate:Locator
    readonly searchbutton:Locator
    

    
constructor (page:Page){
    this.page=page
    this.popupcls=page.locator(".close_icon")
    this.origin=page.locator("#rc_select_0")
    this.destination=page.locator("#rc_select_1")
    this.selectdate=page.getByTitle("2026-10-15")
    this.searchbutton=page.getByRole("button",{name:"Search"})
}  

async pagegoto(){
    await this.page.goto(process.env.BASE_url)
}

async popupmsg(){
    await this.popupcls.click()

}

async filldetails(origin:string,destination:string,dateselection:string,){
    await this.origin.click()
    await this.origin.fill(origin)
    await this.origin.press("Enter")
    await this.destination.click()
    await this.destination.fill(destination)
    await this.destination.press("Enter")
    await this.searchbutton.click()

}

async nextpage(){
    await this.page.goto("https://www.ovrtravels.com/search-results.html")
}



}