# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Booking.spec.ts >> BOOKING APPLICATION
- Location: tests\Booking.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.ovrtravels.com/index.html", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - text: 
      - link [ref=e5] [cursor=pointer]:
        - /url: index.html
      - generic [ref=e6]:
        - list [ref=e7]:
          - listitem [ref=e8]:
            - link "Home" [ref=e9] [cursor=pointer]:
              - /url: index.html
          - listitem [ref=e10]:
            - link "Manage Bookings" [ref=e11] [cursor=pointer]:
              - /url: manage-bookings.html
          - listitem [ref=e12]:
            - link "Gallery" [ref=e13] [cursor=pointer]:
              - /url: gallery.html
          - listitem [ref=e14]:
            - link "About Us" [ref=e15] [cursor=pointer]:
              - /url: about-us.html
          - listitem [ref=e16]:
            - link "Contact" [ref=e17] [cursor=pointer]:
              - /url: contact.html
        - list [ref=e18]:
          - listitem [ref=e19]:
            - link "Agent Login" [ref=e20] [cursor=pointer]:
              - /url: http://ovrt.ovrtravels.com
  - generic [ref=e21]:
    - generic [ref=e24]:
      - generic:
        - heading [level=1]
    - text:  
  - text:     
  - generic [ref=e28]:
    - heading "Testimonials" [level=2] [ref=e29]
    - generic [ref=e31]:
      - generic [ref=e33]:
        - text: 
        - paragraph [ref=e36]: Truly very satisfied. My journey from Hyderabad to Pulivendula with OVR Travels was too good. Although, it was a long journey I enjoyed it. Nice amenities and a luxurious bus! I couldn't wish for a better bus. I chose the single berth which was cosy. ...
        - heading "Prithvi" [level=4] [ref=e39]
      - text:   
    - generic [ref=e40]:
      - link "" [ref=e41] [cursor=pointer]:
        - /url: index.html#carousel-example-generic
      - link "" [ref=e42] [cursor=pointer]:
        - /url: index.html#carousel-example-generic
  - text: 
  - generic [ref=e43]: Wish you a Happy and Comfortable Journey
  - generic [ref=e50]:
    - heading "Salient Features" [level=2] [ref=e51]
    - paragraph [ref=e52]: We at OVR travels have added some great features to create an all-round comfortable ride for our passengers.
  - generic [ref=e58]:
    - heading "All Routes" [level=4] [ref=e59]
    - generic [ref=e61]:
      - listitem [ref=e62]: "Chennai - Madurai D: 09:00 PM - Executive Sleeper, AC"
      - listitem [ref=e63]: "Chennai - Melur D: 09:00 PM - Executive Sleeper, AC"
      - listitem [ref=e64]: "Madurai - Chennai D: 09:50 PM - Executive Sleeper, AC"
      - listitem [ref=e65]: "Melur - Chennai D: 10:20 PM - Executive Sleeper, AC"
      - listitem [ref=e66]: "Kottampatti - Chennai D: 10:40 PM - Executive Sleeper, AC"
      - listitem [ref=e67]: "Thuvarankuruchi - Chennai D: 11:10 PM - Executive Sleeper, AC"
      - listitem [ref=e68]: "Chennai - Madurai D: 08:45 PM - Executive Sleeper, AC"
      - listitem [ref=e69]: "Chennai - Melur D: 08:45 PM - Executive Sleeper, AC"
      - listitem [ref=e70]: "Chennai - Trichy D: 08:45 PM - Executive Sleeper, AC"
      - listitem [ref=e71]: "Madurai - Chennai D: 09:30 PM - Executive Sleeper, AC"
      - listitem [ref=e72]: "Melur - Chennai D: 10:00 PM - Executive Sleeper, AC"
      - listitem [ref=e73]: "Kottampatti - Chennai D: 10:20 PM - Executive Sleeper, AC"
      - listitem [ref=e74]: "Thuvarankuruchi - Chennai D: 10:50 PM - Executive Sleeper, AC"
  - generic [ref=e80]:
    - heading "ABOUT US" [level=4] [ref=e81]
    - paragraph [ref=e82]: OVR Travels provides smooth bus services across a number of cities. This efficient bus company constantly strives in creating travel convenience for many travellers. OVR Travels is known for well-equipped buses and friendly staff steadily looking after passenger needs. The primary interest of OVR Travels is to ensure passenger safety and comfort.
    - paragraph
    - link "Learn More":
      - /url: index.html
  - text:  
  - generic [ref=e88]:
    - heading "download" [level=4] [ref=e89]
    - heading "our mobile app" [level=4] [ref=e90]
    - paragraph [ref=e91]: OVR Travels App will help you to buy tickets more easily, quickly and securely whenever you want and from where ever you are..
    - link [ref=e93] [cursor=pointer]:
      - /url: https://play.google.com/store/apps/details?id=com.mbapp.ovrtravels
  - generic [ref=e96]:
    - link:
      - /url: https://play.google.com/store/apps/details?id=com.mbapp.ovrtravels
      - generic [ref=e97] [cursor=pointer]
  - contentinfo [ref=e99]:
    - generic [ref=e100]:
      - generic:
        - generic [ref=e103]:
          - heading "Get In Touch" [level=3] [ref=e104]
          - text: 
          - heading "Customer Helpline" [level=4] [ref=e105]
          - text:  
        - generic [ref=e107]:
          - heading "Useful Links" [level=3] [ref=e108]
          - list:
            - listitem [ref=e109]:
              - link "Offers" [ref=e110] [cursor=pointer]:
                - /url: offers.html
            - listitem [ref=e111]:
              - link "Gallery" [ref=e112] [cursor=pointer]:
                - /url: gallery.html
            - listitem [ref=e113]:
              - link "About Us" [ref=e114] [cursor=pointer]:
                - /url: about-us.html
            - listitem [ref=e115]:
              - link "Contact" [ref=e116] [cursor=pointer]:
                - /url: contact.html
            - listitem [ref=e117]:
              - link "Testimonials" [ref=e118] [cursor=pointer]:
                - /url: testimonials.html
            - listitem [ref=e119]:
              - link "Feedback" [ref=e120] [cursor=pointer]:
                - /url: feedback.html
            - listitem [ref=e121]:
              - link "Schedules" [ref=e122] [cursor=pointer]:
                - /url: schedules.html
            - listitem [ref=e123]:
              - link "Privacy Policy" [ref=e124] [cursor=pointer]:
                - /url: privacy-policy.html
            - listitem [ref=e125]:
              - link "Terms & Conditions" [ref=e126] [cursor=pointer]:
                - /url: terms-and-conditions.html
            - listitem [ref=e127]:
              - link "Refund Status" [ref=e128] [cursor=pointer]:
                - /url: refund-status.html
            - listitem [ref=e129]:
              - link "Sitemap" [ref=e130] [cursor=pointer]:
                - /url: sitemap.html
            - listitem [ref=e131]:
              - link "Agent Login" [ref=e132] [cursor=pointer]:
                - /url: http://ovrt.ovrtravels.com
            - listitem [ref=e133]:
              - link "Agent Registration" [ref=e134] [cursor=pointer]:
                - /url: agent-registration.html
            - listitem [ref=e135]:
              - link "FAQS" [ref=e136] [cursor=pointer]:
                - /url: faqs.html
            - listitem [ref=e137]:
              - link "Confirm Phone Booking" [ref=e138] [cursor=pointer]:
                - /url: confirm-phone-booking.html
            - listitem [ref=e139]:
              - link "Careers" [ref=e140] [cursor=pointer]:
                - /url: careers.html
            - listitem [ref=e141]:
              - link "Contact Us" [ref=e142] [cursor=pointer]:
                - /url: http://cms.ticketsimply.com/cms_publish/contact-association
            - listitem [ref=e143]:
              - link "Cargo Contact Us" [ref=e144] [cursor=pointer]:
                - /url: cargo-contact-us.html
        - list [ref=e147]:
          - heading "Connect Us" [level=3] [ref=e148]
          - paragraph
          - listitem [ref=e149]:
            - link "" [ref=e150] [cursor=pointer]:
              - /url: index.html#
          - listitem [ref=e152]:
            - link "" [ref=e153] [cursor=pointer]:
              - /url: index.html#
          - listitem [ref=e155]:
            - link "" [ref=e156] [cursor=pointer]:
              - /url: index.html#
          - listitem [ref=e158]:
            - link "" [ref=e159] [cursor=pointer]:
              - /url: index.html#
          - listitem [ref=e161]:
            - link "" [ref=e162] [cursor=pointer]:
              - /url: index.html#
          - paragraph
    - paragraph [ref=e165]:
      - text: © 2026 All rights reserved.
      - link "OVR TRAVELS" [ref=e166] [cursor=pointer]:
        - /url: http://www.ovrtravels.com
  - generic:
    - generic:
      - button [ref=e168] [cursor=pointer]:
        - generic [ref=e169]:
          - heading "Packages" [level=4]
      - generic [ref=e173]:
        - heading "Please Enter Your Details" [level=3] [ref=e174]
        - generic [ref=e176]:
          - generic [ref=e177]:
            - generic [ref=e178]: Name*
            - textbox [ref=e179]
          - generic [ref=e180]:
            - generic [ref=e181]: Email*
            - textbox [ref=e182]
          - generic [ref=e183]:
            - generic [ref=e184]: Mobile*
            - textbox [ref=e185]:
              - /placeholder: " "
          - generic [ref=e186]:
            - generic [ref=e187]: Type
            - combobox [ref=e188]:
              - option "Bus Hire" [selected]
              - option "Car Hire"
              - option "Packages"
          - generic [ref=e189]:
            - generic [ref=e190]: From
            - textbox [ref=e191]:
              - /placeholder: " "
          - generic [ref=e192]:
            - generic [ref=e193]: To
            - textbox [ref=e194]
          - generic [ref=e195]:
            - generic [ref=e196]: No. of Seats*
            - textbox [ref=e197]
          - generic [ref=e198]:
            - generic [ref=e199]: Bus Type
            - combobox [ref=e200]:
              - option "AC" [selected]
              - option "Non-AC"
              - option "AC and Non-AC"
          - generic [ref=e201]:
            - generic [ref=e202]: Message*
            - textbox [ref=e203]
          - button "Submit" [ref=e205] [cursor=pointer]:  Submit
    - generic [ref=e206]:
      - generic [ref=e207]: ✔
      - paragraph [ref=e208]: Success
      - paragraph [ref=e209]: Thank you, Message has been sent successfully
      - button "OK" [ref=e210] [cursor=pointer]
```

# Test source

```ts
  1   | import{test,expect} from "@playwright/test";
  2   | 
  3   | test("BOOKING APPLICATION",async({page})=>{
  4   | 
  5   |     const pageurlis="https://www.ovrtravels.com/index.html"
  6   | 
> 7   |     await page.goto(pageurlis)
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
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
  23  |     await destination.fill("Hyderabad")
  24  | 
  25  |     await destination.press("Enter")
  26  |     
  27  |     const dateselection= page.locator("input[placeholder='Date']")
  28  | 
  29  |     await page.getByTitle("2026-09-25").click()
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
  41  |     const bearthnumber=await page.locator(".available_seat").filter({'hasText':'U9'});
  42  | 
  43  |     await bearthnumber.click()
  44  | 
  45  |     const boardingpoint= await page.locator('#rc_select_5')
  46  | 
  47  |     await boardingpoint.click()
  48  | 
  49  |     await boardingpoint.fill("08:31 PM - Venkateswara Swamy Temple ");
  50  | 
  51  |     await boardingpoint.press("Enter")
  52  | 
  53  |     const droppingpoint=await page.locator("#rc_select_6")
  54  | 
  55  |     await droppingpoint.click()
  56  | 
  57  |     await droppingpoint.fill("05:40 AM - Gachibowli")
  58  | 
  59  |     await droppingpoint.press("Enter")
  60  | 
  61  |     const continuebutton=await page.getByRole("button",{name:"Continue"})
  62  | 
  63  |     await continuebutton.click()
  64  | 
  65  |     await page.locator("div.ant-select:has(#title_U9) .ant-select-selector").click()
  66  | 
  67  |     await page.getByText("Male").nth(0).click()
  68  | 
  69  |     const name = page.getByPlaceholder("Name")
  70  | 
  71  |     await name.fill("Akash")
  72  | 
  73  |     const age=page.getByPlaceholder("Age")
  74  | 
  75  |     await age.fill("18")
  76  | 
  77  |     const email=page.getByPlaceholder("Email")
  78  | 
  79  |     await email.fill("akashkumarreddy.b@gmail.com")
  80  | 
  81  |     const mobilenumber=page.getByPlaceholder("Mobile")
  82  | 
  83  |     await mobilenumber.fill("6300470677")
  84  | 
  85  |     const anothernumber=page.getByPlaceholder("Alternate No")
  86  | 
  87  |     await anothernumber.fill('8247084333')
  88  | 
  89  |     const address=page.getByPlaceholder("Address")
  90  | 
  91  |     await address.fill("near relaince smart\npulivendula")
  92  | 
  93  |     const state=page.locator("#rc_select_10")
  94  | 
  95  |     await state.click()
  96  | 
  97  |     await state.fill("andhra pradesh")
  98  | 
  99  |     await state.press("Enter")
  100 | 
  101 |     const upi=page.locator("label.ant-radio-wrapper").nth(3)
  102 | 
  103 |     await upi.click()
  104 | 
  105 |     const proceedpayment=page.getByRole("button",{name:"Proceed to Payment"})
  106 | 
  107 |     await proceedpayment.click()
```