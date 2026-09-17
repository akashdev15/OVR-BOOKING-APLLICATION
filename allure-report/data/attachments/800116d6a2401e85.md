# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ovr.spec.ts >> ovr application >> BOOKING APPLICATION
- Location: tests\ovr.spec.ts:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByRole('alert', { name: 'Please select Origin!' }).getByText('Please select Origin!')
Expected: visible
Received: undefined

Call log:
  - Expect "toBeVisible" getByRole('alert', { name: 'Please select Origin!' }).getByText('Please select Origin!') with timeout 5000ms
  - waiting for getByRole('alert', { name: 'Please select Origin!' }).getByText('Please select Origin!')
  - Protocol error (Runtime.evaluate): Internal server error, session closed.

```

# Test source

```ts
  1   | import{test,expect} from "@playwright/test";
  2   | test.describe("ovr application",()=>{
  3   | 
  4   | 
  5   | test("BOOKING APPLICATION",async({page})=>{
  6   | 
  7   |     const pageurlis="https://www.ovrtravels.com/index.html"
  8   | 
  9   |     await page.goto(pageurlis)
  10  | 
  11  |     await page.locator(".close_icon").click()
  12  | 
  13  |     const search_button = page.getByRole("button",{ name:"Search"})
  14  | 
  15  |     await search_button.click()
  16  | 
  17  |     const errormsg=await page.getByRole("alert",{name:"Please select Origin!"})
  18  | 
> 19  |     expect(errormsg.getByText("Please select Origin!")).toBeVisible()
      |                                                         ^ Error: expect(locator).toBeVisible() failed
  20  | 
  21  |     const origin= page.locator('#rc_select_0')
  22  | 
  23  |     await origin.click()
  24  | 
  25  |     await origin.fill("Pulivendula")
  26  | 
  27  |     await origin.press("Enter")
  28  | 
  29  |     const destination= page.locator("#rc_select_1")
  30  | 
  31  |     await destination.click()
  32  | 
  33  |     await destination.fill("Guntur")
  34  | 
  35  |     await destination.press("Enter")
  36  |     
  37  |     const dateselection= page.locator("input[placeholder='Date']")
  38  | 
  39  |     await page.getByTitle("2026-09-17").click()
  40  |    
  41  |     await search_button.click()
  42  | 
  43  | })
  44  | })
  45  |     
  46  | /*
  47  |     await expect(page).toHaveURL("https://www.ovrtravels.com/search-results.html")
  48  | 
  49  |     const view_seats = await page.getByRole('button', { name: 'View Seats' });
  50  |     await view_seats.nth(0).click();
  51  |     
  52  |     console.log('seats viewed successfully.......')
  53  | 
  54  |     console.log('selecting seat number U4')
  55  |     const seat_number = await page.locator('.available_seat').filter({'hasText': 'U4'});
  56  |     await seat_number.click();
  57  |     
  58  |     console.log('seat selected successfully.......')
  59  | 
  60  |     const boarding_point = await page.locator('#rc_select_5');
  61  |     await boarding_point.click();
  62  |     await boarding_point.fill('Kadapa 7 roads');
  63  |     await boarding_point.press('Enter');
  64  |     
  65  |     console.log('boarding point filled successfully.......')
  66  | 
  67  |     const continue_button = await page.getByRole('button', { name: 'Continue' });
  68  |     await continue_button.click();
  69  |     console.log('continue button clicked successfully.......')
  70  | 
  71  |     console.log('entering passenger details.......')
  72  |     await page.locator('div.ant-select:has(#title_U4) .ant-select-selector').click();
  73  |     await page.getByText('Female', { exact: true }).click();
  74  |     
  75  | 
  76  |     const name = page.getByPlaceholder('Name')
  77  |     await name.fill('Akanksha')
  78  | 
  79  |     const age = page.getByPlaceholder('Age')
  80  |     await age.fill('19')
  81  |     
  82  |     
  83  |     const email = page.getByPlaceholder('Email')
  84  |     await email.fill('akanksha2006.b@gmail.com')
  85  |     
  86  | 
  87  |     const phone = page.getByPlaceholder('Mobile')
  88  |     await phone.fill('9281428718')
  89  |     await page.waitForTimeout(2000)
  90  | 
  91  |     const alernate_number = page.getByPlaceholder('Alternate No')
  92  |     await alernate_number.fill('7382478549')
  93  |     
  94  |     const address = page.getByPlaceholder('Address')
  95  |     await address.fill(`near relaince smart,
  96  |         pulivendula`)
  97  |   
  98  |     
  99  |     const state = page.locator('#rc_select_10')
  100 |     await state.click()
  101 |     await state.fill('andhra pradesh')
  102 |     await state.press('Enter')
  103 |     
  104 |     
  105 |     const upi = page.locator('label.ant-radio-wrapper').nth(3);
  106 |     await upi.click();
  107 |     
  108 | 
  109 |     const proceed_to_payment = page.getByRole('button',{name:'Proceed to Payment'})
  110 |     await proceed_to_payment.click()
  111 |     
  112 | 
  113 |     const ok_button = page.locator('button.ant-btn-primary',{hasText:'OK'})
  114 |     await ok_button.click()
  115 |     
  116 |     await page.close();
  117 |     console.log("====================Test execution completed successfully=======================")
  118 | })
  119 | })
```