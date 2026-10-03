import{Page , Locator , expect } from "@playwright/test"

export class Bookingpage{
    readonly page:Page
    readonly viewseats:Locator
    readonly breathnumber:Locator
    readonly boardingpoint:Locator
    readonly droppingpoint:Locator
    readonly continuebtn:Locator
    readonly booking:Locator
    readonly gender:Locator
    readonly name:Locator
    readonly age:Locator
    readonly email:Locator
    readonly phnnumber:Locator
    readonly anthnumber:Locator
    readonly adress:Locator
    readonly state:Locator
    readonly upi:Locator
    readonly proceedpayment:Locator
    readonly okbtn:Locator


    constructor(page:Page){
        this.page=page
        this.viewseats=page.getByRole("button",{name:"View Seats"})
        this.breathnumber=page.locator(".available_seat").filter({'hasText':'U6'})
        this.boardingpoint=page.locator('#rc_select_5')
        this.droppingpoint=page.locator("#rc_select_6")
        this.continuebtn=page.getByRole("button",{name:"Continue"})
        this.booking=page.locator("div.ant-select:has(#title_U6) .ant-select-selector")
        this.gender=page.getByText("Male").nth(0)
        this.name=page.getByPlaceholder("Name")
        this.age=page.getByPlaceholder("Age")
        this.email=page.getByPlaceholder("Email")
        this.phnnumber=page.getByPlaceholder("Mobile")
        this.anthnumber=page.getByPlaceholder("Alternate No")
        this.adress=page.getByPlaceholder("Address")
        this.state=page.locator("#rc_select_10")
        this.upi=page.locator("label.ant-radio-wrapper").nth(3)
        this.proceedpayment=page.getByRole("button",{name:"Proceed to Payment"})
        this.okbtn=page.locator("button.ant-btn-primary",{hasText:"OK"})
    }

    async fetchdetails(boardingpoint:string,droppingpoint:string,name:string,age:string,email:string,phnnumber:string,anthnumber:string,adress:string,state:string,){
        await this.viewseats.nth(0).click()
        await this.breathnumber.click()
        await this.boardingpoint.click()
        await this.boardingpoint.fill(boardingpoint)
        await this.boardingpoint.press("Enter")
        await this.droppingpoint.click()
        await this.droppingpoint.fill(droppingpoint)
        await this.droppingpoint.press("Enter")
        await this.continuebtn.click()
        await this.booking.click()
        await this.gender.click()
        await this.name.fill(name)
        await this.age.fill(age)
        await this.email.fill(email)
        await this.phnnumber.fill(phnnumber)
        await this.anthnumber.fill(anthnumber)
        await this.adress.fill(adress)
        await this.state.click()
        await this.state.fill(state)
        await this.state.press("Enter")
        await this.upi.click()
        await this.proceedpayment.click()
        await this.okbtn.click()



    }
    
}