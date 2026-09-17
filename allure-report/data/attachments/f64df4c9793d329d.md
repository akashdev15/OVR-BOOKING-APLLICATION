# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ovr.spec.ts >> BOOKING APPLICATION
- Location: tests\ovr.spec.ts:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#rc_select_5')
    - locator resolved to <input value="" type="search" role="combobox" id="rc_select_5" autocomplete="off" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" aria-owns="rc_select_5_list" aria-controls="rc_select_5_list" class="ant-select-selection-search-input"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span title="08:20 PM - Pulivendula " class="ant-select-selection-item">08:20 PM - Pulivendula </span> intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="coach-legend-wrap">…</div> intercepts pointer events
  - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span title="08:20 PM - Pulivendula " class="ant-select-selection-item">08:20 PM - Pulivendula </span> intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <nav class="navbar navbar-default navbar-fixed navbar-transparent white bootsnav menu-center no-full">…</nav> from <div class="hp">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span title="08:20 PM - Pulivendula " class="ant-select-selection-item">08:20 PM - Pulivendula </span> intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <h3 class="widgettitle widget-title">Useful Links</h3> from <div class="hp">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span title="08:20 PM - Pulivendula " class="ant-select-selection-item">08:20 PM - Pulivendula </span> intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <nav class="navbar navbar-default navbar-fixed navbar-transparent white bootsnav menu-center no-full">…</nav> from <div class="hp">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span title="08:20 PM - Pulivendula " class="ant-select-selection-item">08:20 PM - Pulivendula </span> intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <nav class="navbar navbar-default navbar-fixed navbar-transparent white bootsnav menu-center no-full">…</nav> from <div class="hp">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Test source

```ts
  1   | import{test,expect} from "@playwright/test";
  2   | 
  3   | test("BOOKING APPLICATION",async({page})=>{
  4   | 
  5   |     const pageurlis="https://www.ovrtravels.com/index.html"
  6   | 
  7   |     await page.goto(pageurlis)
  8   | 
  9   |     await page.locator(".close_icon").click()
  10  | 
  11  |     const origin= page.locator('#rc_select_0')
  12  | 
  13  |     await origin.click()
  14  | 
  15  |     await origin.fill("Pulivendula")
  16  | 
  17  |     await origin.press("Enter")
  18  | 
  19  |     const destination= page.locator("#rc_select_1")
  20  | 
  21  |     await destination.click()
  22  | 
  23  |     await destination.fill("Guntur")
  24  | 
  25  |     await destination.press("Enter")
  26  |     
  27  |     const dateselection= page.locator("input[placeholder='Date']")
  28  | 
  29  |     await page.getByTitle("2026-09-19").click()
  30  | 
  31  |     const searchbutton=page.getByRole("button",{ name:"Search"})
  32  | 
  33  |     await searchbutton.click()
  34  | 
  35  |     await expect(page).toHaveURL("https://www.ovrtravels.com/search-results.html")
  36  | 
  37  |     const viewseats=await page.getByRole("button",{name:"View Seats"})
  38  | 
  39  |     await viewseats.nth(0).click()
  40  | 
  41  |     const bearthnumber=await page.locator(".available_seat").filter({'hasText':'U3'});
  42  | 
  43  |     await bearthnumber.click()
  44  | 
  45  |     const boardingpoint= await page.locator('#rc_select_5')
  46  | 
> 47  |     await boardingpoint.click()
      |                         ^ Error: locator.click: Target page, context or browser has been closed
  48  | 
  49  |     await boardingpoint.fill("08:31 PM - Venkateswara Swamy Temple ");
  50  | 
  51  |     await boardingpoint.press("Enter");
  52  | 
  53  |     const continuebutton=await page.getByRole("button",{name:"Continue"})
  54  | 
  55  |     await continuebutton.click()
  56  | 
  57  |     await page.locator("div.ant-select:has(#title_U4) .ant-select-selector").click()
  58  | 
  59  |     await page.getByText("Male").click()
  60  | 
  61  |     const name = page.getByPlaceholder("Name")
  62  | 
  63  |     await name.fill("Akash")
  64  | 
  65  |     const age=page.getByPlaceholder("Age")
  66  | 
  67  |     await age.fill("18")
  68  | 
  69  |     const email=page.getByPlaceholder("Email")
  70  | 
  71  |     await email.fill("akashkumarreddy.b@gmail.com")
  72  | 
  73  |     const mobilenumber=page.getByPlaceholder("Mobile")
  74  | 
  75  |     await mobilenumber.fill("123456789")
  76  | 
  77  |     const anothernumber=page.getByPlaceholder("Alternate No")
  78  | 
  79  |     await anothernumber.fill('098765432')
  80  | 
  81  |     const address=page.getByPlaceholder("Address")
  82  | 
  83  |     await address.fill("near relaince smart\npulivendula")
  84  | 
  85  |     const state=page.locator("#rc_select_10")
  86  | 
  87  |     await state.click()
  88  | 
  89  |     await state.fill("andhra pradesh")
  90  | 
  91  |     await state.press("Enter")
  92  | 
  93  |     const upi=page.locator("label.ant-radio-wrapper").nth(3)
  94  | 
  95  |     await upi.click()
  96  | 
  97  |     const proceedpayment=page.getByRole("button",{name:"Proceed to Payment"})
  98  | 
  99  |     await proceedpayment.click()
  100 | 
  101 |     const okbutton=page.locator("button.ant-btn-primary",{hasText:"OK"})
  102 | 
  103 |     await okbutton.click()
  104 | 
  105 |     await page.close()
  106 | 
  107 | 
  108 | 
  109 | 
  110 | 
  111 | })
  112 | 
  113 |     
  114 | 
```