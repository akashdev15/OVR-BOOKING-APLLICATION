import{test,expect} from "@playwright/test";

test("BOOKING APPLICATION",async({page})=>{

    const pageurlis="https://www.ovrtravels.com/index.html"

    await page.goto(pageurlis)

    await page.locator(".close_icon").click()

    const origin= page.locator('#rc_select_0')

    await origin.click()

    await origin.fill("Pulivendula")

    await origin.press("Enter")

    const destination= page.locator("#rc_select_1")

    await destination.click()

    await destination.fill("Hyderabad")

    await destination.press("Enter")
    
    const dateselection= page.locator("input[placeholder='Date']")

    await page.getByTitle("2026-09-25").click()

    const searchbutton=page.getByRole("button",{ name:"Search"})

    await searchbutton.click()

    await expect(page).toHaveURL("https://www.ovrtravels.com/search-results.html")

    const viewseats=await page.getByRole("button",{name:"View Seats"})

    await viewseats.nth(0).click()

    const bearthnumber=await page.locator(".available_seat").filter({'hasText':'U9'});

    await bearthnumber.click()

    const boardingpoint= await page.locator('#rc_select_5')

    await boardingpoint.click()

    await boardingpoint.fill("08:31 PM - Venkateswara Swamy Temple ");

    await boardingpoint.press("Enter")

    const droppingpoint=await page.locator("#rc_select_6")

    await droppingpoint.click()

    await droppingpoint.fill("05:40 AM - Gachibowli")

    await droppingpoint.press("Enter")

    const continuebutton=await page.getByRole("button",{name:"Continue"})

    await continuebutton.click()

    await page.locator("div.ant-select:has(#title_U9) .ant-select-selector").click()

    await page.getByText("Male").nth(0).click()

    const name = page.getByPlaceholder("Name")

    await name.fill("Akash")

    const age=page.getByPlaceholder("Age")

    await age.fill("18")

    const email=page.getByPlaceholder("Email")

    await email.fill("akashkumarreddy.b@gmail.com")

    const mobilenumber=page.getByPlaceholder("Mobile")

    await mobilenumber.fill("6300470677")

    const anothernumber=page.getByPlaceholder("Alternate No")

    await anothernumber.fill('8247084333')

    const address=page.getByPlaceholder("Address")

    await address.fill("near relaince smart\npulivendula")

    const state=page.locator("#rc_select_10")

    await state.click()

    await state.fill("andhra pradesh")

    await state.press("Enter")

    const upi=page.locator("label.ant-radio-wrapper").nth(3)

    await upi.click()

    const proceedpayment=page.getByRole("button",{name:"Proceed to Payment"})

    await proceedpayment.click()

    const okbutton=page.locator("button.ant-btn-primary",{hasText:"OK"})

    await okbutton.click()

    await page.close()





})

    
