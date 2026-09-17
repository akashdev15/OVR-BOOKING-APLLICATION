# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ovr.spec.ts >> BOOKING APPLICATION
- Location: tests\ovr.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#rc_select_5')
    - locator resolved to <input value="" type="search" role="combobox" id="rc_select_5" autocomplete="off" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" aria-owns="rc_select_5_list" aria-controls="rc_select_5_list" class="ant-select-selection-search-input"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span title="08:20 PM - Pulivendula " class="ant-select-selection-item">08:20 PM - Pulivendula </span> intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span title="08:20 PM - Pulivendula " class="ant-select-selection-item">08:20 PM - Pulivendula </span> intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <nav class="navbar navbar-default navbar-fixed navbar-transparent white bootsnav menu-center no-full">…</nav> from <div class="hp">…</div> subtree intercepts pointer events
  10 × retrying click action
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
       - <nav class="navbar navbar-default navbar-fixed navbar-transparent white bootsnav menu-center no-full">…</nav> from <div class="hp">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e2]:
    - navigation [ref=f1e3]:
      - generic [ref=f1e4]:
        - text: 
        - link [ref=f1e6] [cursor=pointer]:
          - /url: index.html
        - generic [ref=f1e7]:
          - link "" [ref=f1e8] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61570408293150
          - link [ref=f1e10] [cursor=pointer]:
            - /url: https://2ly.link/20itO
            - img "android icon" [ref=f1e11]
        - generic [ref=f1e12]:
          - list [ref=f1e13]:
            - listitem [ref=f1e14]:
              - link "Home" [ref=f1e15] [cursor=pointer]:
                - /url: index.html
            - listitem [ref=f1e16]:
              - link "Manage Bookings" [ref=f1e17] [cursor=pointer]:
                - /url: manage-bookings.html
            - listitem [ref=f1e18]:
              - link "Gallery" [ref=f1e19] [cursor=pointer]:
                - /url: gallery.html
            - listitem [ref=f1e20]:
              - link "About Us" [ref=f1e21] [cursor=pointer]:
                - /url: about-us.html
            - listitem [ref=f1e22]:
              - link "Contact" [ref=f1e23] [cursor=pointer]:
                - /url: contact.html
          - list [ref=f1e24]:
            - listitem [ref=f1e25]:
              - link "Agent Login" [ref=f1e26] [cursor=pointer]:
                - /url: http://ovrt.ovrtravels.com
    - generic [ref=f1e30]:
      - generic [ref=f1e34]:
        - generic [ref=f1e35]:
          - generic [ref=f1e41]:
            - generic [ref=f1e42]: Origin
            - generic [ref=f1e43] [cursor=pointer]:
              - generic [ref=f1e44]:
                - combobox [ref=f1e46]
                - generic "Pulivendula" [ref=f1e47]
              - generic [aria-hidden]:  
          - link [ref=f1e48] [cursor=pointer]:
            - /url: javascript:void(0)
        - generic [ref=f1e55]:
          - generic [ref=f1e56]: Destination
          - generic [ref=f1e57] [cursor=pointer]:
            - generic [ref=f1e58]:
              - combobox [ref=f1e60]
              - generic "Guntur" [ref=f1e61]
            - generic [aria-hidden]:  
        - generic [ref=f1e68]:
          - generic [ref=f1e69]: Onward Date
          - generic [ref=f1e71]:
            - textbox "Onward" [ref=f1e72]: 19/09/2026
            - generic:
              - img "calendar": 
        - generic [ref=f1e79]:
          - generic [ref=f1e80]: Return Date
          - generic [ref=f1e82]:
            - textbox "Return" [ref=f1e83]
            - generic:
              - img "calendar": 
        - button "Search" [ref=f1e86] [cursor=pointer]
      - list [ref=f1e87]:
        - listitem [ref=f1e88]:
          - generic [ref=f1e89] [cursor=pointer]
        - listitem [ref=f1e92]:
          - generic [ref=f1e93]: Sat 19-Sep
        - listitem [ref=f1e94]:
          - generic [ref=f1e95] [cursor=pointer]: Sun 20-Sep
        - listitem [ref=f1e96]:
          - generic [ref=f1e97] [cursor=pointer]: Mon 21-Sep
        - listitem [ref=f1e98]:
          - generic [ref=f1e99] [cursor=pointer]: Tue 22-Sep
        - listitem [ref=f1e100]:
          - generic [ref=f1e101] [cursor=pointer]: Wed 23-Sep
        - listitem [ref=f1e102]:
          - generic [ref=f1e103] [cursor=pointer]: Thu 24-Sep
        - listitem [ref=f1e104]:
          - generic [ref=f1e105] [cursor=pointer]: Fri 25-Sep
        - listitem [ref=f1e106]:
          - generic [ref=f1e107] [cursor=pointer]
      - generic [ref=f1e112]:
        - generic [ref=f1e114]:
          - generic [ref=f1e115] [cursor=pointer]:
            - slider [ref=f1e118]
            - slider [ref=f1e119]
          - generic [ref=f1e120]:
            - generic [ref=f1e121]: 00:00
            - generic [ref=f1e122]: 24:00
          - generic [ref=f1e123]: Depart
        - generic [ref=f1e125]:
          - generic [ref=f1e126] [cursor=pointer]:
            - slider [ref=f1e129]
            - slider [ref=f1e130]
          - generic [ref=f1e131]:
            - generic [ref=f1e132]: 00:00
            - generic [ref=f1e133]: 24:00
          - generic [ref=f1e134]: Arrival
        - generic [ref=f1e136]:
          - generic [ref=f1e137] [cursor=pointer]:
            - slider [ref=f1e140]
            - slider [ref=f1e141]
          - generic [ref=f1e142]:
            - generic [ref=f1e143]: Rs. 0
            - generic [ref=f1e144]: Rs. 945
          - generic [ref=f1e145]: Fare
        - generic [ref=f1e148] [cursor=pointer]:
          - generic [ref=f1e149]:
            - combobox [ref=f1e151]
            - generic: Bus Type
          - generic [aria-hidden]:  
        - generic [ref=f1e154] [cursor=pointer]:
          - generic [ref=f1e155]:
            - combobox [ref=f1e157]
            - generic: Boarding Point
          - generic [aria-hidden]:  
        - generic [ref=f1e160] [cursor=pointer]:
          - generic [ref=f1e161]:
            - combobox [ref=f1e163]
            - generic: Dropping Point
          - generic [aria-hidden]:  
      - generic [ref=f1e164]:
        - generic [ref=f1e167]:
          - generic [ref=f1e168]: Service
          - generic [ref=f1e170]: Bus Type
          - generic [ref=f1e173]:
            - generic [ref=f1e174]: Departure
            - generic [ref=f1e178]: Duration
            - generic [ref=f1e180]: Arrival
          - generic [ref=f1e182]: Available Seat
          - generic [ref=f1e184]: Fare
        - generic [ref=f1e189]:
          - generic [ref=f1e190]:
            - generic [ref=f1e191]: OVR 35 SIT SLEEPER
            - generic [ref=f1e192] [cursor=pointer]
            - generic "Pulivendula, Vemula, Vempalli, Nandimandalam, Pendlimarri, Kadapa, Chennur (andhra pradesh), Khajipeta, Badvel, Pamuru, Kanigiri, Podili, Darsi, Addanki, Ongole, Chilakaluripet, Guntur," [ref=f1e193] [cursor=pointer]: Via
          - generic [ref=f1e194]:
            - generic [ref=f1e195]: Bus Type
            - text: 2+1, Sleeper/Seater, Non-AC (35 seats)
          - generic [ref=f1e198]:
            - generic [ref=f1e199]:
              - generic [ref=f1e200]:
                - text: 08:20 PM
                - generic [ref=f1e203]: Sat, 19 Sep
              - link "Boarding Points" [ref=f1e204] [cursor=pointer]:
                - /url: javascript:void(0)
            - generic [ref=f1e205]: 08h 10m Hrs
            - generic [ref=f1e209]:
              - generic [ref=f1e210]:
                - text: 04:30 AM
                - generic [ref=f1e213]: Sun, 20 Sep
              - link "Dropping Points" [ref=f1e214] [cursor=pointer]:
                - /url: javascript:void(0)
          - generic [ref=f1e215]:
            - generic [ref=f1e216]: "23"
            - text: Seats available
          - generic [ref=f1e219]:
            - generic [ref=f1e220]: ₹
            - text: 735/-
          - button "VIEW SEATS" [ref=f1e223] [cursor=pointer]
        - generic [ref=f1e226]:
          - link "close" [ref=f1e227] [cursor=pointer]:
            - /url: ""
          - generic [ref=f1e232]:
            - generic [ref=f1e233]:
              - generic [ref=f1e234]: Seat Price
              - generic [ref=f1e236]:
                - button "All" [ref=f1e237] [cursor=pointer]
                - button "700" [ref=f1e238] [cursor=pointer]
                - button "900" [ref=f1e239] [cursor=pointer]
            - table [ref=f1e241]:
              - rowgroup [ref=f1e242]:
                - row [ref=f1e243]:
                  - cell "U16" [ref=f1e244] [cursor=pointer]
                  - cell "1" [ref=f1e247] [cursor=pointer]
                  - cell [ref=f1e250]
                  - cell "L2" [ref=f1e251] [cursor=pointer]
                  - cell "L1" [ref=f1e254] [cursor=pointer]
                  - cell "U2" [ref=f1e257] [cursor=pointer]
                  - cell "U1" [ref=f1e260] [cursor=pointer]
                - row [ref=f1e263]:
                  - cell "2" [ref=f1e264] [cursor=pointer]
                  - cell [ref=f1e267]
                - row [ref=f1e268]:
                  - cell "U15" [ref=f1e269] [cursor=pointer]
                  - cell "3" [ref=f1e272] [cursor=pointer]
                  - cell [ref=f1e275]
                  - cell "L4" [ref=f1e276] [cursor=pointer]
                  - cell "L3" [ref=f1e279] [cursor=pointer]
                  - cell "U4" [ref=f1e282] [cursor=pointer]
                  - cell "U3" [ref=f1e285] [cursor=pointer]
                - row [ref=f1e288]:
                  - cell "4" [ref=f1e289] [cursor=pointer]
                  - cell [ref=f1e292]
                - row [ref=f1e293]:
                  - cell "U14" [ref=f1e294] [cursor=pointer]
                  - cell "5" [ref=f1e297] [cursor=pointer]
                  - cell [ref=f1e300]
                  - cell "L6" [ref=f1e301] [cursor=pointer]
                  - cell "L5" [ref=f1e304] [cursor=pointer]
                  - cell "U6" [ref=f1e307] [cursor=pointer]
                  - cell "U5" [ref=f1e310] [cursor=pointer]
                - row [ref=f1e313]:
                  - cell "6" [ref=f1e314] [cursor=pointer]
                  - cell [ref=f1e317]
                - row [ref=f1e318]:
                  - cell "U13" [ref=f1e319] [cursor=pointer]
                  - cell "7" [ref=f1e322] [cursor=pointer]
                  - cell [ref=f1e325]
                  - cell "L8" [ref=f1e326] [cursor=pointer]
                  - cell "L7" [ref=f1e329] [cursor=pointer]
                  - cell "U8" [ref=f1e332] [cursor=pointer]
                  - cell "U7" [ref=f1e335] [cursor=pointer]
                - row [ref=f1e338]:
                  - cell "8" [ref=f1e339] [cursor=pointer]
                  - cell [ref=f1e342]
                - row [ref=f1e343]:
                  - cell "U12" [ref=f1e344] [cursor=pointer]
                  - cell "9" [ref=f1e347] [cursor=pointer]
                  - cell [ref=f1e350]:
                    - img "EE_SLP" [ref=f1e353]
                  - cell "L10" [ref=f1e354] [cursor=pointer]
                  - cell "L9" [ref=f1e357] [cursor=pointer]
                  - cell "U10" [ref=f1e360] [cursor=pointer]
                  - cell "U9" [ref=f1e363] [cursor=pointer]
                - row [ref=f1e366]:
                  - cell "10" [ref=f1e367] [cursor=pointer]
            - generic [ref=f1e370]:
              - generic [ref=f1e371]:
                - generic [ref=f1e372]:
                  - generic "Available Seat" [ref=f1e375]: Available
                  - generic "Selected Seat" [ref=f1e378]: Selected
                  - generic "Reserved Seat" [ref=f1e381]: Booked
                  - generic "Ladies Confirmed Seat" [ref=f1e384]: Ladies(L)
                  - generic "Ladies Available Seat" [ref=f1e387]: Available(L)
                - generic [ref=f1e388]:
                  - heading "Fare Details" [level=4] [ref=f1e389]
                  - generic [ref=f1e391]:
                    - generic [ref=f1e392]:
                      - generic [ref=f1e393]: Seats
                      - generic [ref=f1e394]: U3
                    - generic [ref=f1e395]:
                      - generic [ref=f1e396]: Ticket Fare
                      - generic [ref=f1e397]:
                        - generic [ref=f1e398]: ₹
                        - text: "900.00"
                    - generic [ref=f1e399]:
                      - generic [ref=f1e400]: GST (5%)
                      - generic [ref=f1e401]:
                        - generic [ref=f1e402]: ₹
                        - text: "45.00"
                    - generic [ref=f1e403]:
                      - generic [ref=f1e404]: Bus Total Fare
                      - generic [ref=f1e405]:
                        - generic [ref=f1e406]: ₹
                        - text: "945.00"
                    - generic [ref=f1e407]:
                      - generic [ref=f1e408]: Grand Total
                      - generic [ref=f1e409]:
                        - generic [ref=f1e410]: ₹
                        - text: "945.00"
                    - generic [ref=f1e411]:
                      - generic [ref=f1e412]: Payable Amount
                      - generic [ref=f1e413]:
                        - generic [ref=f1e414]: ₹
                        - text: "945.00"
              - generic [ref=f1e416]:
                - generic:
                  - generic [ref=f1e418]:
                    - heading "Boarding Point" [level=4] [ref=f1e419]
                    - generic [ref=f1e425]:
                      - generic [ref=f1e426] [cursor=pointer]:
                        - generic [ref=f1e427]:
                          - combobox [ref=f1e429]
                          - generic "08:20 PM - Pulivendula" [ref=f1e430]
                        - generic [aria-hidden]:  
                      - generic [ref=f1e431]:
                        - generic [ref=f1e432]: "Opp.Narasa Reddy Indian Oil Petrol Bunk, Beside Kadiri Bus Stop, Ph : 9676333700"
                        - generic [ref=f1e436]: "9676333788"
                  - generic [ref=f1e441]:
                    - heading "Dropoff Point" [level=4] [ref=f1e442]
                    - generic [ref=f1e448]:
                      - generic [ref=f1e449] [cursor=pointer]:
                        - generic [ref=f1e450]:
                          - combobox [ref=f1e452]
                          - generic "04:30 AM - Guntur" [ref=f1e453]
                        - generic [aria-hidden]:  
                      - generic [ref=f1e454]:
                        - generic [ref=f1e455]: "Rtc Bus Stand, Ph : 9676333700"
                        - generic [ref=f1e459]: "9676333700"
              - button "Continue" [ref=f1e463] [cursor=pointer]
    - contentinfo [ref=f1e465]:
      - generic [ref=f1e466]:
        - generic:
          - generic [ref=f1e469]:
            - heading "Get In Touch" [level=3] [ref=f1e470]
            - list [ref=f1e471]:
              - listitem [ref=f1e472]:
                - generic [ref=f1e473]: 
                - generic [ref=f1e474]:
                  - heading "OVR TRAVELS" [level=5] [ref=f1e475]
                  - text: Opp Andhra Bank,Main Road, Pulivendula, Pulivendula,Andhra Pradesh -516390
            - heading "Customer Helpline" [level=4] [ref=f1e476]
            - list [ref=f1e477]:
              - listitem [ref=f1e478]:
                - generic [ref=f1e479]: 
                - text: "9676333788"
              - listitem [ref=f1e480]:
                - generic [ref=f1e481]: 
                - link "ovrtravels@outlook.com" [ref=f1e482] [cursor=pointer]:
                  - /url: mailto:ovrtravels@outlook.com
          - generic [ref=f1e484]:
            - heading "Useful Links" [level=3] [ref=f1e485]
            - list:
              - listitem [ref=f1e486]:
                - link "Offers" [ref=f1e487] [cursor=pointer]:
                  - /url: offers.html
              - listitem [ref=f1e488]:
                - link "Gallery" [ref=f1e489] [cursor=pointer]:
                  - /url: gallery.html
              - listitem [ref=f1e490]:
                - link "About Us" [ref=f1e491] [cursor=pointer]:
                  - /url: about-us.html
              - listitem [ref=f1e492]:
                - link "Contact" [ref=f1e493] [cursor=pointer]:
                  - /url: contact.html
              - listitem [ref=f1e494]:
                - link "Testimonials" [ref=f1e495] [cursor=pointer]:
                  - /url: testimonials.html
              - listitem [ref=f1e496]:
                - link "Feedback" [ref=f1e497] [cursor=pointer]:
                  - /url: feedback.html
              - listitem [ref=f1e498]:
                - link "Schedules" [ref=f1e499] [cursor=pointer]:
                  - /url: schedules.html
              - listitem [ref=f1e500]:
                - link "Privacy Policy" [ref=f1e501] [cursor=pointer]:
                  - /url: privacy-policy.html
              - listitem [ref=f1e502]:
                - link "Terms & Conditions" [ref=f1e503] [cursor=pointer]:
                  - /url: terms-and-conditions.html
              - listitem [ref=f1e504]:
                - link "Refund Status" [ref=f1e505] [cursor=pointer]:
                  - /url: refund-status.html
              - listitem [ref=f1e506]:
                - link "Sitemap" [ref=f1e507] [cursor=pointer]:
                  - /url: sitemap.html
              - listitem [ref=f1e508]:
                - link "Agent Login" [ref=f1e509] [cursor=pointer]:
                  - /url: http://ovrt.ovrtravels.com
              - listitem [ref=f1e510]:
                - link "Agent Registration" [ref=f1e511] [cursor=pointer]:
                  - /url: agent-registration.html
              - listitem [ref=f1e512]:
                - link "FAQS" [ref=f1e513] [cursor=pointer]:
                  - /url: faqs.html
              - listitem [ref=f1e514]:
                - link "Confirm Phone Booking" [ref=f1e515] [cursor=pointer]:
                  - /url: confirm-phone-booking.html
              - listitem [ref=f1e516]:
                - link "Careers" [ref=f1e517] [cursor=pointer]:
                  - /url: careers.html
              - listitem [ref=f1e518]:
                - link "Contact Us" [ref=f1e519] [cursor=pointer]:
                  - /url: http://cms.ticketsimply.com/cms_publish/contact-association
              - listitem [ref=f1e520]:
                - link "Cargo Contact Us" [ref=f1e521] [cursor=pointer]:
                  - /url: cargo-contact-us.html
          - list [ref=f1e524]:
            - heading "Connect Us" [level=3] [ref=f1e525]
            - paragraph
            - listitem [ref=f1e526]:
              - link "" [ref=f1e527] [cursor=pointer]:
                - /url: search-results.html#
            - listitem [ref=f1e529]:
              - link "" [ref=f1e530] [cursor=pointer]:
                - /url: search-results.html#
            - listitem [ref=f1e532]:
              - link "" [ref=f1e533] [cursor=pointer]:
                - /url: search-results.html#
            - listitem [ref=f1e535]:
              - link "" [ref=f1e536] [cursor=pointer]:
                - /url: search-results.html#
            - listitem [ref=f1e538]:
              - link "" [ref=f1e539] [cursor=pointer]:
                - /url: search-results.html#
            - paragraph
      - paragraph [ref=f1e542]:
        - text: © 2026 All rights reserved.
        - link "OVR TRAVELS" [ref=f1e543] [cursor=pointer]:
          - /url: http://www.ovrtravels.com
    - generic:
      - generic:
        - button [ref=f1e545] [cursor=pointer]:
          - heading "Packages" [level=4] [ref=f1e547]
        - generic [ref=f1e551]:
          - heading "Please Enter Your Details" [level=3] [ref=f1e552]
          - generic [ref=f1e554]:
            - generic [ref=f1e555]:
              - generic [ref=f1e556]: Name*
              - textbox [ref=f1e557]
            - generic [ref=f1e558]:
              - generic [ref=f1e559]: Email*
              - textbox [ref=f1e560]
            - generic [ref=f1e561]:
              - generic [ref=f1e562]: Mobile*
              - textbox [ref=f1e563]:
                - /placeholder: " "
            - generic [ref=f1e564]:
              - generic [ref=f1e565]: Type
              - combobox [ref=f1e566]:
                - option "Bus Hire" [selected]
                - option "Car Hire"
                - option "Packages"
            - generic [ref=f1e567]:
              - generic [ref=f1e568]: From
              - textbox [ref=f1e569]:
                - /placeholder: " "
            - generic [ref=f1e570]:
              - generic [ref=f1e571]: To
              - textbox [ref=f1e572]
            - generic [ref=f1e573]:
              - generic [ref=f1e574]: No. of Seats*
              - textbox [ref=f1e575]
            - generic [ref=f1e576]:
              - generic [ref=f1e577]: Bus Type
              - combobox [ref=f1e578]:
                - option "AC" [selected]
                - option "Non-AC"
                - option "AC and Non-AC"
            - generic [ref=f1e579]:
              - generic [ref=f1e580]: Message*
              - textbox [ref=f1e581]
            - button "Submit" [ref=f1e583] [cursor=pointer]:  Submit
      - generic [ref=f1e584]:
        - generic [ref=f1e585]: ✔
        - paragraph [ref=f1e586]: Success
        - paragraph [ref=f1e587]: Thank you, Message has been sent successfully
        - button "OK" [ref=f1e588] [cursor=pointer]
  - img [ref=f1e589] [cursor=pointer]
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
      |                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
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