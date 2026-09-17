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
  1  | import{test,expect} from "@playwright/test";
  2  | test.describe("ovr application",()=>{
  3  | 
  4  | 
  5  | test("BOOKING APPLICATION",async({page})=>{
  6  | 
  7  |     const pageurlis="https://www.ovrtravels.com/index.html"
  8  | 
  9  |     await page.goto(pageurlis)
  10 | 
  11 |     await page.locator(".close_icon").click()
  12 | 
  13 |     const search_button = page.getByRole("button",{ name:"Search"})
  14 | 
  15 |     await search_button.click()
  16 | 
  17 |     await page.waitForTimeout(2000)
  18 | 
  19 |     const errormsg=await page.getByRole("alert",{name:"Please select Origin!"})
  20 | 
  21 |     await page.waitForTimeout(2000)
  22 | 
> 23 |     expect(errormsg.getByText("Please select Origin!")).toBeVisible()
     |                                                         ^ Error: expect(locator).toBeVisible() failed
  24 | 
  25 |     await page.waitForTimeout(2000)
  26 | 
  27 |     const origin= page.locator('#rc_select_0')
  28 | 
  29 |     await page.waitForTimeout(2000)
  30 | 
  31 |     await origin.click()
  32 | 
  33 |     await page.waitForTimeout(2000)
  34 | 
  35 |     await origin.fill("Pulivendula")
  36 | 
  37 |     await page.waitForTimeout(2000)
  38 | 
  39 |     await origin.press("Enter")
  40 | 
  41 |     await page.waitForTimeout(2000)
  42 | 
  43 |     const destination= page.locator("#rc_select_1")
  44 | 
  45 |     await page.waitForTimeout(2000)
  46 | 
  47 |     await destination.click()
  48 | 
  49 |     await page.waitForTimeout(2000)
  50 | 
  51 |     await destination.fill("Guntur")
  52 | 
  53 |     await page.waitForTimeout(2000)
  54 | 
  55 |     await destination.press("Enter")
  56 |     
  57 |     await page.waitForTimeout(2000)
  58 | 
  59 |     const dateselection= page.locator("input[placeholder='Date']")
  60 | 
  61 |     await page.waitForTimeout(2000)
  62 | 
  63 |     await page.getByTitle("2026-09-17").click()
  64 |    
  65 |     await page.waitForTimeout(2000)
  66 | 
  67 |     await search_button.click()
  68 |     
  69 | 
  70 | 
  71 | 
  72 | 
  73 | 
  74 | 
  75 | 
  76 | 
  77 | 
  78 | 
  79 | 
  80 |     
  81 | })
  82 | })
  83 |     
  84 | 
```