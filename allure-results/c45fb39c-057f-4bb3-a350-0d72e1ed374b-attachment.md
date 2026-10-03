# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Homepage.spec.ts >> OVR apllication  >> home page
- Location: tests\Homepage.spec.ts:7:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.ovrtravels.com/", waiting until "load"

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
  1  | import {Page , Locator, expect} from "@playwright/test"
  2  | 
  3  | export class Homepage{
  4  | 
  5  |     readonly page:Page
  6  |     readonly popupcls:Locator
  7  |     readonly origin:Locator
  8  |     readonly destination:Locator
  9  |     readonly selectdate:Locator
  10 |     readonly searchbutton:Locator
  11 |     
  12 | 
  13 |     
  14 | constructor (page:Page){
  15 |     this.page=page
  16 |     this.popupcls=page.locator(".close_icon")
  17 |     this.origin=page.locator("#rc_select_0")
  18 |     this.destination=page.locator("#rc_select_1")
  19 |     this.selectdate=page.getByTitle("2026-10-16")
  20 |     this.searchbutton=page.getByRole("button",{name:"Search"})
  21 | }  
  22 | 
  23 | async pagegoto(){
> 24 |     await this.page.goto(process.env.BASE_url)
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  25 | }
  26 | 
  27 | async popupmsg(){
  28 |     await this.popupcls.click()
  29 | 
  30 | }
  31 | 
  32 | async filldetails(origin:string,destination:string,dateselection:string,){
  33 |     await this.origin.click()
  34 |     await this.origin.fill(origin)
  35 |     await this.origin.press("Enter")
  36 |     await this.destination.click()
  37 |     await this.destination.fill(destination)
  38 |     await this.destination.press("Enter")
  39 |     await this.searchbutton.click()
  40 | 
  41 | }
  42 | 
  43 | async nextpage(){
  44 |     await this.page.goto("https://www.ovrtravels.com/search-results.html")
  45 | }
  46 | 
  47 | 
  48 | 
  49 | }
```