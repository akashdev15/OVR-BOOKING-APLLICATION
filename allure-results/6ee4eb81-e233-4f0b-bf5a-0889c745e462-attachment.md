# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ovr.spec.ts >> BOOKING APPLICATION
- Location: tests\ovr.spec.ts:3:5

# Error details

```
TypeError: (0 , _test.expect)(...).toBeVisisble is not a function
```

```
Error: page.goto: net::ERR_ABORTED at https://www.ovrtravels.com/search-results.html
Call log:
  - navigating to "https://www.ovrtravels.com/search-results.html", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - navigation [ref=f1e3]:
    - generic [ref=f1e4]:
      - text: 
      - link [ref=f1e6] [cursor=pointer]:
        - /url: index.html
      - generic [ref=f1e7]:
        - list [ref=f1e8]:
          - listitem [ref=f1e9]:
            - link "Home" [ref=f1e10] [cursor=pointer]:
              - /url: index.html
          - listitem [ref=f1e11]:
            - link "Manage Bookings" [ref=f1e12] [cursor=pointer]:
              - /url: manage-bookings.html
          - listitem [ref=f1e13]:
            - link "Gallery" [ref=f1e14] [cursor=pointer]:
              - /url: gallery.html
          - listitem [ref=f1e15]:
            - link "About Us" [ref=f1e16] [cursor=pointer]:
              - /url: about-us.html
          - listitem [ref=f1e17]:
            - link "Contact" [ref=f1e18] [cursor=pointer]:
              - /url: contact.html
        - list [ref=f1e19]:
          - listitem [ref=f1e20]:
            - link "Agent Login" [ref=f1e21] [cursor=pointer]:
              - /url: http://ovrt.ovrtravels.com
  - generic [ref=f1e25]:
    - generic [ref=f1e29]:
      - generic [ref=f1e30]:
        - generic [ref=f1e36]:
          - generic [ref=f1e37]: Origin
          - generic [ref=f1e38] [cursor=pointer]:
            - generic [ref=f1e39]:
              - combobox [ref=f1e41]
              - generic "Pulivendula" [ref=f1e42]
            - generic [aria-hidden]:  
        - link [ref=f1e43] [cursor=pointer]:
          - /url: javascript:void(0)
      - generic [ref=f1e50]:
        - generic [ref=f1e51]: Destination
        - generic [ref=f1e52] [cursor=pointer]:
          - generic [ref=f1e53]:
            - combobox [ref=f1e55]
            - generic "Guntur" [ref=f1e56]
          - generic [aria-hidden]:  
      - generic [ref=f1e63]:
        - generic [ref=f1e64]: Onward Date
        - generic [ref=f1e66]:
          - textbox "Onward" [ref=f1e67]: 19/09/2026
          - generic:
            - img "calendar": 
      - generic [ref=f1e74]:
        - generic [ref=f1e75]: Return Date
        - generic [ref=f1e77]:
          - textbox "Return" [ref=f1e78]
          - generic:
            - img "calendar": 
      - button "Search" [ref=f1e81] [cursor=pointer]
    - list [ref=f1e82]:
      - listitem [ref=f1e83]:
        - generic [ref=f1e84] [cursor=pointer]
      - listitem [ref=f1e87]:
        - generic [ref=f1e88]: Sat 19-Sep
      - listitem [ref=f1e89]:
        - generic [ref=f1e90] [cursor=pointer]: Sun 20-Sep
      - listitem [ref=f1e91]:
        - generic [ref=f1e92] [cursor=pointer]: Mon 21-Sep
      - listitem [ref=f1e93]:
        - generic [ref=f1e94] [cursor=pointer]: Tue 22-Sep
      - listitem [ref=f1e95]:
        - generic [ref=f1e96] [cursor=pointer]: Wed 23-Sep
      - listitem [ref=f1e97]:
        - generic [ref=f1e98] [cursor=pointer]: Thu 24-Sep
      - listitem [ref=f1e99]:
        - generic [ref=f1e100] [cursor=pointer]: Fri 25-Sep
      - listitem [ref=f1e101]:
        - generic [ref=f1e102] [cursor=pointer]
    - generic [ref=f1e105]: Loading...
  - contentinfo [ref=f1e115]:
    - generic [ref=f1e116]:
      - generic:
        - generic [ref=f1e119]:
          - heading "Get In Touch" [level=3] [ref=f1e120]
          - text: 
          - heading "Customer Helpline" [level=4] [ref=f1e121]
          - text:  
        - generic [ref=f1e123]:
          - heading "Useful Links" [level=3] [ref=f1e124]
          - list:
            - listitem [ref=f1e125]:
              - link "Offers" [ref=f1e126] [cursor=pointer]:
                - /url: offers.html
            - listitem [ref=f1e127]:
              - link "Gallery" [ref=f1e128] [cursor=pointer]:
                - /url: gallery.html
            - listitem [ref=f1e129]:
              - link "About Us" [ref=f1e130] [cursor=pointer]:
                - /url: about-us.html
            - listitem [ref=f1e131]:
              - link "Contact" [ref=f1e132] [cursor=pointer]:
                - /url: contact.html
            - listitem [ref=f1e133]:
              - link "Testimonials" [ref=f1e134] [cursor=pointer]:
                - /url: testimonials.html
            - listitem [ref=f1e135]:
              - link "Feedback" [ref=f1e136] [cursor=pointer]:
                - /url: feedback.html
            - listitem [ref=f1e137]:
              - link "Schedules" [ref=f1e138] [cursor=pointer]:
                - /url: schedules.html
            - listitem [ref=f1e139]:
              - link "Privacy Policy" [ref=f1e140] [cursor=pointer]:
                - /url: privacy-policy.html
            - listitem [ref=f1e141]:
              - link "Terms & Conditions" [ref=f1e142] [cursor=pointer]:
                - /url: terms-and-conditions.html
            - listitem [ref=f1e143]:
              - link "Refund Status" [ref=f1e144] [cursor=pointer]:
                - /url: refund-status.html
            - listitem [ref=f1e145]:
              - link "Sitemap" [ref=f1e146] [cursor=pointer]:
                - /url: sitemap.html
            - listitem [ref=f1e147]:
              - link "Agent Login" [ref=f1e148] [cursor=pointer]:
                - /url: http://ovrt.ovrtravels.com
            - listitem [ref=f1e149]:
              - link "Agent Registration" [ref=f1e150] [cursor=pointer]:
                - /url: agent-registration.html
            - listitem [ref=f1e151]:
              - link "FAQS" [ref=f1e152] [cursor=pointer]:
                - /url: faqs.html
            - listitem [ref=f1e153]:
              - link "Confirm Phone Booking" [ref=f1e154] [cursor=pointer]:
                - /url: confirm-phone-booking.html
            - listitem [ref=f1e155]:
              - link "Careers" [ref=f1e156] [cursor=pointer]:
                - /url: careers.html
            - listitem [ref=f1e157]:
              - link "Contact Us" [ref=f1e158] [cursor=pointer]:
                - /url: http://cms.ticketsimply.com/cms_publish/contact-association
            - listitem [ref=f1e159]:
              - link "Cargo Contact Us" [ref=f1e160] [cursor=pointer]:
                - /url: cargo-contact-us.html
        - list [ref=f1e163]:
          - heading "Connect Us" [level=3] [ref=f1e164]
          - paragraph
          - listitem [ref=f1e165]:
            - link "" [ref=f1e166] [cursor=pointer]:
              - /url: search-results.html#
          - listitem [ref=f1e168]:
            - link "" [ref=f1e169] [cursor=pointer]:
              - /url: search-results.html#
          - listitem [ref=f1e171]:
            - link "" [ref=f1e172] [cursor=pointer]:
              - /url: search-results.html#
          - listitem [ref=f1e174]:
            - link "" [ref=f1e175] [cursor=pointer]:
              - /url: search-results.html#
          - listitem [ref=f1e177]:
            - link "" [ref=f1e178] [cursor=pointer]:
              - /url: search-results.html#
          - paragraph
    - paragraph [ref=f1e181]:
      - text: © 2026 All rights reserved.
      - link "OVR TRAVELS" [ref=f1e182] [cursor=pointer]:
        - /url: http://www.ovrtravels.com
  - generic:
    - generic:
      - button [ref=f1e184] [cursor=pointer]:
        - heading "Packages" [level=4] [ref=f1e186]
      - generic [ref=f1e190]:
        - heading "Please Enter Your Details" [level=3] [ref=f1e191]
        - generic [ref=f1e193]:
          - generic [ref=f1e194]:
            - generic [ref=f1e195]: Name*
            - textbox [ref=f1e196]
          - generic [ref=f1e197]:
            - generic [ref=f1e198]: Email*
            - textbox [ref=f1e199]
          - generic [ref=f1e200]:
            - generic [ref=f1e201]: Mobile*
            - textbox [ref=f1e202]:
              - /placeholder: " "
          - generic [ref=f1e203]:
            - generic [ref=f1e204]: Type
            - combobox [ref=f1e205]:
              - option "Bus Hire" [selected]
              - option "Car Hire"
              - option "Packages"
          - generic [ref=f1e206]:
            - generic [ref=f1e207]: From
            - textbox [ref=f1e208]:
              - /placeholder: " "
          - generic [ref=f1e209]:
            - generic [ref=f1e210]: To
            - textbox [ref=f1e211]
          - generic [ref=f1e212]:
            - generic [ref=f1e213]: No. of Seats*
            - textbox [ref=f1e214]
          - generic [ref=f1e215]:
            - generic [ref=f1e216]: Bus Type
            - combobox [ref=f1e217]:
              - option "AC" [selected]
              - option "Non-AC"
              - option "AC and Non-AC"
          - generic [ref=f1e218]:
            - generic [ref=f1e219]: Message*
            - textbox [ref=f1e220]
          - button "Submit" [ref=f1e222] [cursor=pointer]:  Submit
    - generic [ref=f1e223]:
      - generic [ref=f1e224]: ✔
      - paragraph [ref=f1e225]: Success
      - paragraph [ref=f1e226]: Thank you, Message has been sent successfully
      - button "OK" [ref=f1e227] [cursor=pointer]
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test";
  2  | 
  3  | test("BOOKING APPLICATION",async({page})=>{
  4  | 
  5  |     const pageurlis="https://www.ovrtravels.com/index.html"
  6  | 
  7  |     await page.goto(pageurlis)
  8  | 
  9  |     await page.locator(".close_icon").click()
  10 | 
  11 |     const origin= page.locator('#rc_select_0')
  12 | 
  13 |     await origin.click()
  14 | 
  15 |     await origin.fill("Pulivendula")
  16 | 
  17 |     await origin.press("Enter")
  18 | 
  19 |     const destination= page.locator("#rc_select_1")
  20 | 
  21 |     await destination.click()
  22 | 
  23 |     await destination.fill("Guntur")
  24 | 
  25 |     await destination.press("Enter")
  26 |     
  27 |     const dateselection= page.locator("input[placeholder='Date']")
  28 | 
  29 |     await page.getByTitle("2026-09-19").click()
  30 | 
  31 |     const searchbutton=page.getByRole("button",{ name:"Search"})
  32 | 
  33 |     await searchbutton.click()
  34 | 
> 35 |     const nextpageis=page.goto("https://www.ovrtravels.com/search-results.html")
     |                           ^ Error: page.goto: net::ERR_ABORTED at https://www.ovrtravels.com/search-results.html
  36 | 
  37 |     await expect(nextpageis).toBeVisisble()
  38 | 
  39 |     
  40 | 
  41 | 
  42 |   
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 | 
  53 | 
  54 |     
  55 | })
  56 | 
  57 |     
  58 | 
```