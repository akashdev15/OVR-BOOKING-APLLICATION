# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Homepage.spec.ts >> OVR apllication  >> home page
- Location: tests\Homepage.spec.ts:6:9

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[placeholder=\'Date\']')

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
  9  |     readonly dateselection:Locator
  10 |     readonly searchbutton:Locator
  11 |     
  12 | 
  13 |     
  14 | constructor (page:Page){
  15 |     this.page=page
  16 |     this.popupcls=page.locator(".close_icon")
  17 |     this.origin=page.locator("#rc_select_0")
  18 |     this.destination=page.locator("#rc_select_1")
  19 |     this.dateselection=page.locator("input[placeholder='Date']")
  20 |     this.searchbutton=page.getByRole("button",{name:"Search"})
  21 | }  
  22 | 
  23 | async pagegoto(){
  24 |     await this.page.goto(process.env.BASE_url)
  25 | }
  26 | 
  27 | async popupmsg(){
  28 |     await this.popupcls.click()
  29 | 
  30 | }
  31 | 
  32 | async filldetails(origin:string,destination:string,dateselection:string,){
  33 |     await this.origin.fill(origin)
  34 |     await this.destination.fill(destination)
> 35 |     await this.dateselection.fill(dateselection)
     |                              ^ Error: locator.fill: Target page, context or browser has been closed
  36 |     await this.searchbutton.click()
  37 | 
  38 | }
  39 | 
  40 | async nextpage(){
  41 |     await this.page.goto("https://www.ovrtravels.com/search-results.html")
  42 | }
  43 | 
  44 | 
  45 | 
  46 | }
```