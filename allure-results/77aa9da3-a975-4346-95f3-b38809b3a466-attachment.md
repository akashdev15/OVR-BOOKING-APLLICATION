# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ovr.spec.ts >> BOOKING APPLICATION
- Location: tests\ovr.spec.ts:3:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Male') resolved to 2 elements:
    1) <div class="ant-select-item-option-content">Male</div> aka getByText('Male', { exact: true })
    2) <div class="ant-select-item-option-content">Female</div> aka getByText('Female')

Call log:
  - waiting for getByText('Male')

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
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
              - generic "Hyderabad" [ref=f1e61]
            - generic [aria-hidden]:  
        - generic [ref=f1e68]:
          - generic [ref=f1e69]: Onward Date
          - generic [ref=f1e71]:
            - textbox "Onward" [ref=f1e72]: 25/09/2026
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
          - generic [ref=f1e93]: Fri 25-Sep
        - listitem [ref=f1e94]:
          - generic [ref=f1e95] [cursor=pointer]: Sat 26-Sep
        - listitem [ref=f1e96]:
          - generic [ref=f1e97] [cursor=pointer]: Sun 27-Sep
        - listitem [ref=f1e98]:
          - generic [ref=f1e99] [cursor=pointer]: Mon 28-Sep
        - listitem [ref=f1e100]:
          - generic [ref=f1e101] [cursor=pointer]: Tue 29-Sep
        - listitem [ref=f1e102]:
          - generic [ref=f1e103] [cursor=pointer]: Wed 30-Sep
        - listitem [ref=f1e104]:
          - generic [ref=f1e105] [cursor=pointer]: Thu 01-Oct
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
            - generic [ref=f1e144]: Rs. 1365
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
            - generic [ref=f1e191]: OVR 42 AC Brandnew
            - generic [ref=f1e192] [cursor=pointer]
            - generic "Simhadripuram, Kondapuram(PLVD), Muddanur, Jammalamadugu, Nossam, Mayaluru, Koilakuntla, Banaganapalli, Betamcherla," [ref=f1e193] [cursor=pointer]: Via
          - generic [ref=f1e194]:
            - generic [ref=f1e195]: Bus Type
            - text: 2+1, Brand New Premium Sleeper/Seater, AC (42 seats)
          - generic [ref=f1e198]:
            - generic [ref=f1e199]:
              - generic [ref=f1e200]:
                - text: 08:30 PM
                - generic [ref=f1e203]: Fri, 25 Sep
              - link "Boarding Points" [ref=f1e204] [cursor=pointer]:
                - /url: javascript:void(0)
            - generic [ref=f1e205]: 08h 30m Hrs
            - generic [ref=f1e209]:
              - generic [ref=f1e210]:
                - text: 05:00 AM
                - generic [ref=f1e213]: Sat, 26 Sep
              - link "Dropping Points" [ref=f1e214] [cursor=pointer]:
                - /url: javascript:void(0)
          - generic [ref=f1e215]:
            - generic [ref=f1e216]: "39"
            - text: Seats available
          - generic [ref=f1e219]:
            - generic [ref=f1e220]: ₹
            - text: 1050/-
          - button "VIEW SEATS" [ref=f1e223] [cursor=pointer]
        - generic [ref=f1e226]:
          - link "close" [ref=f1e227] [cursor=pointer]:
            - /url: ""
          - generic [ref=f1e232]:
            - generic [ref=f1e233]:
              - generic [ref=f1e234]: Seat Price
              - generic [ref=f1e236]:
                - button "All" [ref=f1e237] [cursor=pointer]
                - button "1000" [ref=f1e238] [cursor=pointer]
                - button "1300" [ref=f1e239] [cursor=pointer]
            - table [ref=f1e241]:
              - rowgroup [ref=f1e242]:
                - row [ref=f1e243]:
                  - cell "LU1" [ref=f1e244] [cursor=pointer]
                  - cell "S1" [ref=f1e247] [cursor=pointer]
                  - cell [ref=f1e250]
                  - cell "L2" [ref=f1e251] [cursor=pointer]
                  - cell "L1" [ref=f1e254] [cursor=pointer]
                  - cell "U2" [ref=f1e257] [cursor=pointer]
                  - cell "U1" [ref=f1e260] [cursor=pointer]
                - row [ref=f1e263]:
                  - cell "S2" [ref=f1e264] [cursor=pointer]
                  - cell [ref=f1e267]
                - row [ref=f1e268]:
                  - cell "LU2" [ref=f1e269] [cursor=pointer]
                  - cell "S3" [ref=f1e272] [cursor=pointer]
                  - cell [ref=f1e275]
                  - cell "L4" [ref=f1e276] [cursor=pointer]
                  - cell "L3" [ref=f1e279] [cursor=pointer]
                  - cell "U4" [ref=f1e282] [cursor=pointer]
                  - cell "U3" [ref=f1e285] [cursor=pointer]
                - row [ref=f1e288]:
                  - cell "S4" [ref=f1e289] [cursor=pointer]
                  - cell [ref=f1e292]
                - row [ref=f1e293]:
                  - cell "LU3" [ref=f1e294] [cursor=pointer]
                  - cell "S5" [ref=f1e297] [cursor=pointer]
                  - cell [ref=f1e300]
                  - cell "L6" [ref=f1e301] [cursor=pointer]
                  - cell "L5" [ref=f1e304] [cursor=pointer]
                  - cell "U6" [ref=f1e307] [cursor=pointer]
                  - cell "U5" [ref=f1e310] [cursor=pointer]
                - row [ref=f1e313]:
                  - cell "S6" [ref=f1e314] [cursor=pointer]
                  - cell [ref=f1e317]
                - row [ref=f1e318]:
                  - cell "LU4" [ref=f1e319] [cursor=pointer]
                  - cell "S7" [ref=f1e322] [cursor=pointer]
                  - cell [ref=f1e325]
                  - cell "L8" [ref=f1e326] [cursor=pointer]
                  - cell "L7" [ref=f1e329] [cursor=pointer]
                  - cell "U8" [ref=f1e332] [cursor=pointer]
                  - cell "U7" [ref=f1e335] [cursor=pointer]
                - row [ref=f1e338]:
                  - cell "S8" [ref=f1e339] [cursor=pointer]
                  - cell [ref=f1e342]
                - row [ref=f1e343]:
                  - cell "LU5" [ref=f1e344] [cursor=pointer]
                  - cell "S9" [ref=f1e347] [cursor=pointer]
                  - cell [ref=f1e350]
                  - cell "L10" [ref=f1e351] [cursor=pointer]
                  - cell "L9" [ref=f1e354] [cursor=pointer]
                  - cell "U10" [ref=f1e357] [cursor=pointer]
                  - cell "U9" [ref=f1e360] [cursor=pointer]
                - row [ref=f1e363]:
                  - cell "S10" [ref=f1e364] [cursor=pointer]
                  - cell [ref=f1e367]
                - row [ref=f1e368]:
                  - cell "LU6" [ref=f1e369] [cursor=pointer]
                  - cell "S11" [ref=f1e372] [cursor=pointer]
                  - cell [ref=f1e375]
                  - cell "L12" [ref=f1e376] [cursor=pointer]
                  - cell "L11" [ref=f1e379] [cursor=pointer]
                  - cell "U12" [ref=f1e382] [cursor=pointer]
                  - cell "U11" [ref=f1e385] [cursor=pointer]
                - row [ref=f1e388]:
                  - cell "S12" [ref=f1e389] [cursor=pointer]
                  - cell [ref=f1e392]:
                    - img "EE_SLP" [ref=f1e395]
            - generic [ref=f1e396]:
              - generic [ref=f1e397]:
                - generic [ref=f1e398]:
                  - generic "Available Seat" [ref=f1e401]: Available
                  - generic "Selected Seat" [ref=f1e404]: Selected
                  - generic "Reserved Seat" [ref=f1e407]: Booked
                  - generic "Ladies Confirmed Seat" [ref=f1e410]: Ladies(L)
                  - generic "Ladies Available Seat" [ref=f1e413]: Available(L)
                - generic [ref=f1e414]:
                  - heading "Fare Details" [level=4] [ref=f1e415]
                  - generic [ref=f1e417]:
                    - generic [ref=f1e418]:
                      - generic [ref=f1e419]: Seats
                      - generic [ref=f1e420]: U11
                    - generic [ref=f1e421]:
                      - generic [ref=f1e422]: Ticket Fare
                      - generic [ref=f1e423]:
                        - generic [ref=f1e424]: ₹
                        - text: "1300.00"
                    - generic [ref=f1e425]:
                      - generic [ref=f1e426]: GST (5%)
                      - generic [ref=f1e427]:
                        - generic [ref=f1e428]: ₹
                        - text: "65.00"
                    - generic [ref=f1e429]:
                      - generic [ref=f1e430]: Bus Total Fare
                      - generic [ref=f1e431]:
                        - generic [ref=f1e432]: ₹
                        - text: "1365.00"
                    - generic [ref=f1e433]:
                      - generic [ref=f1e434]: Grand Total
                      - generic [ref=f1e435]:
                        - generic [ref=f1e436]: ₹
                        - text: "1365.00"
                    - generic [ref=f1e437]:
                      - generic [ref=f1e438]: Payable Amount
                      - generic [ref=f1e439]:
                        - generic [ref=f1e440]: ₹
                        - text: "1365.00"
              - generic [ref=f1e442]:
                - generic:
                  - generic [ref=f1e444]:
                    - heading "Boarding Point" [level=4] [ref=f1e445]
                    - generic [ref=f1e451]:
                      - generic [ref=f1e452] [cursor=pointer]:
                        - generic [ref=f1e453]:
                          - combobox [ref=f1e455]
                          - generic "08:31 PM - Venkateswara Swamy Temple" [ref=f1e456]
                        - generic [aria-hidden]:  
                      - generic [ref=f1e457]:
                        - generic [ref=f1e458]: Venkateswara Swamy Temple
                        - generic [ref=f1e462]: "9676333788"
                  - generic [ref=f1e467]:
                    - heading "Dropoff Point" [level=4] [ref=f1e468]
                    - generic [ref=f1e474]:
                      - generic [ref=f1e475] [cursor=pointer]:
                        - generic [ref=f1e476]:
                          - combobox [ref=f1e478]
                          - generic "05:40 AM - Gachibowli" [ref=f1e479]
                        - generic [aria-hidden]:  
                      - generic [ref=f1e480]:
                        - generic [ref=f1e481]: Towards Kondapur
                        - generic [ref=f1e485]: "9676333728"
              - button "Continue" [ref=f1e489] [cursor=pointer]
        - generic [ref=f1e492]:
          - generic [ref=f1e493]:
            - generic [ref=f1e494]: OVR 31 Non Ac Sleeper
            - generic [ref=f1e495] [cursor=pointer]
            - generic "Inagalur(andhra pradesh), Thondur, Mallela, Muddanur, Jammalamadugu, Nossam, Mayaluru, Koilakuntla, Banaganapalli, Betamcherla," [ref=f1e496] [cursor=pointer]: Via
          - generic [ref=f1e497]:
            - generic [ref=f1e498]: Bus Type
            - text: 2+1, Sleeper, Non-AC (31 seats)
          - generic [ref=f1e501]:
            - generic [ref=f1e502]:
              - generic [ref=f1e503]:
                - text: 08:30 PM
                - generic [ref=f1e506]: Fri, 25 Sep
              - link "Boarding Points" [ref=f1e507] [cursor=pointer]:
                - /url: javascript:void(0)
            - generic [ref=f1e508]: 08h 30m Hrs
            - generic [ref=f1e512]:
              - generic [ref=f1e513]:
                - text: 05:00 AM
                - generic [ref=f1e516]: Sat, 26 Sep
              - link "Dropping Points" [ref=f1e517] [cursor=pointer]:
                - /url: javascript:void(0)
          - generic [ref=f1e518]:
            - generic [ref=f1e519]: "0"
            - text: Seats available
          - generic [ref=f1e522]:
            - generic [ref=f1e523]: ₹
            - text: 1260/-
          - button "REQUEST" [ref=f1e525] [cursor=pointer]
    - contentinfo [ref=f1e527]:
      - generic [ref=f1e528]:
        - generic:
          - generic [ref=f1e531]:
            - heading "Get In Touch" [level=3] [ref=f1e532]
            - list [ref=f1e533]:
              - listitem [ref=f1e534]:
                - generic [ref=f1e535]: 
                - generic [ref=f1e536]:
                  - heading "OVR TRAVELS" [level=5] [ref=f1e537]
                  - text: Opp Andhra Bank,Main Road, Pulivendula, Pulivendula,Andhra Pradesh -516390
            - heading "Customer Helpline" [level=4] [ref=f1e538]
            - list [ref=f1e539]:
              - listitem [ref=f1e540]:
                - generic [ref=f1e541]: 
                - text: "9676333788"
              - listitem [ref=f1e542]:
                - generic [ref=f1e543]: 
                - link "ovrtravels@outlook.com" [ref=f1e544] [cursor=pointer]:
                  - /url: mailto:ovrtravels@outlook.com
          - generic [ref=f1e546]:
            - heading "Useful Links" [level=3] [ref=f1e547]
            - list:
              - listitem [ref=f1e548]:
                - link "Offers" [ref=f1e549] [cursor=pointer]:
                  - /url: offers.html
              - listitem [ref=f1e550]:
                - link "Gallery" [ref=f1e551] [cursor=pointer]:
                  - /url: gallery.html
              - listitem [ref=f1e552]:
                - link "About Us" [ref=f1e553] [cursor=pointer]:
                  - /url: about-us.html
              - listitem [ref=f1e554]:
                - link "Contact" [ref=f1e555] [cursor=pointer]:
                  - /url: contact.html
              - listitem [ref=f1e556]:
                - link "Testimonials" [ref=f1e557] [cursor=pointer]:
                  - /url: testimonials.html
              - listitem [ref=f1e558]:
                - link "Feedback" [ref=f1e559] [cursor=pointer]:
                  - /url: feedback.html
              - listitem [ref=f1e560]:
                - link "Schedules" [ref=f1e561] [cursor=pointer]:
                  - /url: schedules.html
              - listitem [ref=f1e562]:
                - link "Privacy Policy" [ref=f1e563] [cursor=pointer]:
                  - /url: privacy-policy.html
              - listitem [ref=f1e564]:
                - link "Terms & Conditions" [ref=f1e565] [cursor=pointer]:
                  - /url: terms-and-conditions.html
              - listitem [ref=f1e566]:
                - link "Refund Status" [ref=f1e567] [cursor=pointer]:
                  - /url: refund-status.html
              - listitem [ref=f1e568]:
                - link "Sitemap" [ref=f1e569] [cursor=pointer]:
                  - /url: sitemap.html
              - listitem [ref=f1e570]:
                - link "Agent Login" [ref=f1e571] [cursor=pointer]:
                  - /url: http://ovrt.ovrtravels.com
              - listitem [ref=f1e572]:
                - link "Agent Registration" [ref=f1e573] [cursor=pointer]:
                  - /url: agent-registration.html
              - listitem [ref=f1e574]:
                - link "FAQS" [ref=f1e575] [cursor=pointer]:
                  - /url: faqs.html
              - listitem [ref=f1e576]:
                - link "Confirm Phone Booking" [ref=f1e577] [cursor=pointer]:
                  - /url: confirm-phone-booking.html
              - listitem [ref=f1e578]:
                - link "Careers" [ref=f1e579] [cursor=pointer]:
                  - /url: careers.html
              - listitem [ref=f1e580]:
                - link "Contact Us" [ref=f1e581] [cursor=pointer]:
                  - /url: http://cms.ticketsimply.com/cms_publish/contact-association
              - listitem [ref=f1e582]:
                - link "Cargo Contact Us" [ref=f1e583] [cursor=pointer]:
                  - /url: cargo-contact-us.html
          - list [ref=f1e586]:
            - heading "Connect Us" [level=3] [ref=f1e587]
            - paragraph
            - listitem [ref=f1e588]:
              - link "" [ref=f1e589] [cursor=pointer]:
                - /url: search-results.html#
            - listitem [ref=f1e591]:
              - link "" [ref=f1e592] [cursor=pointer]:
                - /url: search-results.html#
            - listitem [ref=f1e594]:
              - link "" [ref=f1e595] [cursor=pointer]:
                - /url: search-results.html#
            - listitem [ref=f1e597]:
              - link "" [ref=f1e598] [cursor=pointer]:
                - /url: search-results.html#
            - listitem [ref=f1e600]:
              - link "" [ref=f1e601] [cursor=pointer]:
                - /url: search-results.html#
            - paragraph
      - paragraph [ref=f1e604]:
        - text: © 2026 All rights reserved.
        - link "OVR TRAVELS" [ref=f1e605] [cursor=pointer]:
          - /url: http://www.ovrtravels.com
    - generic:
      - generic:
        - button [ref=f1e607] [cursor=pointer]:
          - heading "Packages" [level=4] [ref=f1e609]
        - generic [ref=f1e613]:
          - heading "Please Enter Your Details" [level=3] [ref=f1e614]
          - generic [ref=f1e616]:
            - generic [ref=f1e617]:
              - generic [ref=f1e618]: Name*
              - textbox [ref=f1e619]
            - generic [ref=f1e620]:
              - generic [ref=f1e621]: Email*
              - textbox [ref=f1e622]
            - generic [ref=f1e623]:
              - generic [ref=f1e624]: Mobile*
              - textbox [ref=f1e625]:
                - /placeholder: " "
            - generic [ref=f1e626]:
              - generic [ref=f1e627]: Type
              - combobox [ref=f1e628]:
                - option "Bus Hire" [selected]
                - option "Car Hire"
                - option "Packages"
            - generic [ref=f1e629]:
              - generic [ref=f1e630]: From
              - textbox [ref=f1e631]:
                - /placeholder: " "
            - generic [ref=f1e632]:
              - generic [ref=f1e633]: To
              - textbox [ref=f1e634]
            - generic [ref=f1e635]:
              - generic [ref=f1e636]: No. of Seats*
              - textbox [ref=f1e637]
            - generic [ref=f1e638]:
              - generic [ref=f1e639]: Bus Type
              - combobox [ref=f1e640]:
                - option "AC" [selected]
                - option "Non-AC"
                - option "AC and Non-AC"
            - generic [ref=f1e641]:
              - generic [ref=f1e642]: Message*
              - textbox [ref=f1e643]
            - button "Submit" [ref=f1e645] [cursor=pointer]:  Submit
      - generic [ref=f1e646]:
        - generic [ref=f1e647]: ✔
        - paragraph [ref=f1e648]: Success
        - paragraph [ref=f1e649]: Thank you, Message has been sent successfully
        - button "OK" [ref=f1e650] [cursor=pointer]
  - img [ref=f1e651] [cursor=pointer]
  - dialog [ref=f1e654]:
    - button "Close" [ref=f1e656] [cursor=pointer]:
      - img "close" [ref=f1e657]: 
    - generic [ref=f1e659]:
      - main [ref=f1e660]:
        - generic [ref=f1e661]:
          - heading "Passenger Details" [level=4] [ref=f1e662]
          - table [ref=f1e664]:
            - rowgroup [ref=f1e665]:
              - row [ref=f1e666]:
                - columnheader "S.No" [ref=f1e667]
                - columnheader "Title" [ref=f1e668]
                - columnheader "Name" [ref=f1e669]
                - columnheader "Age" [ref=f1e670]
            - rowgroup [ref=f1e671]:
              - row [ref=f1e672]:
                - cell "U11" [ref=f1e673]
                - cell [ref=f1e674]:
                  - generic [ref=f1e680] [cursor=pointer]:
                    - generic [ref=f1e681]:
                      - combobox [expanded] [active] [ref=f1e683]:
                        - listbox:
                          - option "Male": Mr
                          - option "Female": Mrs
                      - generic: Title
                    - generic [aria-hidden]:  
                - cell [ref=f1e684]:
                  - textbox "Name" [ref=f1e690]
                - cell [ref=f1e691]:
                  - textbox "Age" [ref=f1e697]
          - separator [ref=f1e698]
        - generic [ref=f1e699]:
          - heading "Contact Details" [level=4] [ref=f1e700]
          - generic [ref=f1e701]:
            - generic [ref=f1e702]:
              - generic [ref=f1e709]:
                - generic [ref=f1e710]: Email
                - textbox "Email" [ref=f1e711]
              - generic [ref=f1e712]:
                - generic [ref=f1e718]:
                  - generic [ref=f1e719]: Mobile
                  - generic [ref=f1e721]:
                    - generic [ref=f1e723] [cursor=pointer]:
                      - generic [ref=f1e724]:
                        - combobox [ref=f1e726]
                        - generic "91" [ref=f1e727]
                      - generic [aria-hidden]:  
                    - textbox "Mobile" [ref=f1e728]
                - generic [ref=f1e729]:
                  - switch [checked] [ref=f1e730] [cursor=pointer]
                  - text: Send booking details and updates on whatsapp
              - generic [ref=f1e739]:
                - generic [ref=f1e740]: Alternate Number
                - generic [ref=f1e742]:
                  - generic [ref=f1e744] [cursor=pointer]:
                    - generic [ref=f1e745]:
                      - combobox [ref=f1e747]
                      - generic "91" [ref=f1e748]
                    - generic [aria-hidden]:  
                  - textbox "Alternate No" [ref=f1e749]
            - generic [ref=f1e757]:
              - generic [ref=f1e758]: Address
              - textbox "Address" [ref=f1e759]
            - generic [ref=f1e760]:
              - generic [ref=f1e762]:
                - text: Please Enter your residential location address
                - generic [aria-hidden] [ref=f1e763]: 
              - generic [ref=f1e770]:
                - generic [ref=f1e771]: State
                - generic [ref=f1e772] [cursor=pointer]:
                  - generic [ref=f1e773]:
                    - combobox [ref=f1e775]
                    - generic: State
                  - generic [aria-hidden]:  
        - generic [ref=f1e776]:
          - generic [ref=f1e777]:
            - separator [ref=f1e778]
            - generic [ref=f1e781]:
              - generic [ref=f1e782] [cursor=pointer]:
                - generic [ref=f1e783]:
                  - combobox [ref=f1e785]
                  - generic: Select Offer
                - generic [aria-hidden]:  
              - generic [ref=f1e786]:
                - generic [ref=f1e788] [cursor=pointer]:
                  - checkbox "Have Cash Coupon" [ref=f1e790]
                  - text: Have Cash Coupon
                - generic [ref=f1e793] [cursor=pointer]:
                  - checkbox "GST" [ref=f1e795]
                  - text: GST
          - generic [ref=f1e799]:
            - generic:
              - generic [ref=f1e800] [cursor=pointer]:
                - radio "Credit Card" [ref=f1e802]
                - text: Credit Card
              - generic [ref=f1e804] [cursor=pointer]:
                - radio "Debit Card" [ref=f1e806]
                - text: Debit Card
              - generic [ref=f1e808] [cursor=pointer]:
                - radio "Net Banking" [ref=f1e810]
                - text: Net Banking
              - generic [ref=f1e812] [cursor=pointer]:
                - radio "UPI" [ref=f1e814]
                - generic [ref=f1e816]: UPI
            - radio [ref=f1e824] [cursor=pointer]
        - generic [ref=f1e828]:
          - generic [ref=f1e829]:
            - text: By continuing you agree to our
            - link "TERMS & CONDITIONS" [ref=f1e830] [cursor=pointer]:
              - /url: javascript:void(0)
            - text: and
            - link "Cancellation Policies" [ref=f1e831] [cursor=pointer]:
              - /url: javascript:void(0)
          - button "Proceed to Payment" [ref=f1e833] [cursor=pointer]
      - complementary [ref=f1e834]:
        - generic [ref=f1e835]:
          - generic [ref=f1e836]:
            - generic [ref=f1e838]:
              - heading "Service Details" [level=4] [ref=f1e839]
              - generic [ref=f1e841]:
                - generic [ref=f1e842]:
                  - generic [ref=f1e843]: From
                  - generic [ref=f1e844]: Pulivendula
                - generic [ref=f1e845]:
                  - generic [ref=f1e846]: To
                  - generic [ref=f1e847]: Hyderabad
                - generic [ref=f1e848]:
                  - generic [ref=f1e849]: Date
                  - generic [ref=f1e850]: 25/09/2026
                - generic [ref=f1e851]:
                  - generic [ref=f1e852]: Service
                  - generic [ref=f1e853]: OVR 42 AC Brandnew
                - generic [ref=f1e854]:
                  - generic [ref=f1e855]: Seats
                  - generic [ref=f1e856]: U11
                - generic [ref=f1e857]:
                  - generic [ref=f1e858]: Bus Type
                  - generic [ref=f1e859]: 2+1, Brand New Premium Sleeper/Seater, AC (42 seats)
                - generic [ref=f1e860]:
                  - generic [ref=f1e861]: Boarding
                  - generic [ref=f1e862]:
                    - text: 08:31 PM - Venkateswara Swamy Temple
                    - generic [ref=f1e863]: Venkateswara Swamy Temple
                - generic [ref=f1e864]:
                  - generic [ref=f1e865]: Dropoff
                  - generic [ref=f1e866]:
                    - text: 05:40 AM - Gachibowli
                    - generic [ref=f1e867]: Towards Kondapur
            - generic [ref=f1e868]:
              - heading "Fare Details" [level=4] [ref=f1e869]
              - generic [ref=f1e871]:
                - generic [ref=f1e872]:
                  - generic [ref=f1e873]: Ticket Fare
                  - generic [ref=f1e874]:
                    - generic [ref=f1e875]: ₹
                    - text: "1300.00"
                - generic [ref=f1e876]:
                  - generic [ref=f1e877]: GST (5%)
                  - generic [ref=f1e878]:
                    - generic [ref=f1e879]: ₹
                    - text: "65.00"
                - generic [ref=f1e880]:
                  - generic [ref=f1e881]: Bus Total Fare
                  - generic [ref=f1e882]:
                    - generic [ref=f1e883]: ₹
                    - text: "1365.00"
                - generic [ref=f1e884]:
                  - generic [ref=f1e885]: Grand Total
                  - generic [ref=f1e886]:
                    - generic [ref=f1e887]: ₹
                    - text: "1365.00"
                - generic [ref=f1e888]:
                  - generic [ref=f1e889]: Payable Amount
                  - generic [ref=f1e890]:
                    - generic [ref=f1e891]: ₹
                    - text: "1365.00"
          - text:  
  - generic [ref=f1e897]:
    - generic "Male" [ref=f1e898] [cursor=pointer]
    - generic "Female" [ref=f1e900] [cursor=pointer]
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
  41  |     const bearthnumber=await page.locator(".available_seat").filter({'hasText':'U11'});
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
  65  |     await page.locator("div.ant-select:has(#title_U11) .ant-select-selector").click()
  66  | 
> 67  |     await page.getByText("Male").click()
      |                                  ^ Error: locator.click: Error: strict mode violation: getByText('Male') resolved to 2 elements:
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
  83  |     await mobilenumber.fill("123456789")
  84  | 
  85  |     const anothernumber=page.getByPlaceholder("Alternate No")
  86  | 
  87  |     await anothernumber.fill('098765432')
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
  108 | 
  109 |     const okbutton=page.locator("button.ant-btn-primary",{hasText:"OK"})
  110 | 
  111 |     await okbutton.click()
  112 | 
  113 |     await page.close()
  114 | 
  115 | 
  116 | 
  117 | 
  118 | 
  119 | })
  120 | 
  121 |     
  122 | 
```