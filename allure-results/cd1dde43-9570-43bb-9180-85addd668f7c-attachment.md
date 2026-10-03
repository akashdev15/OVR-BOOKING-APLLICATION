# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Homepage.spec.ts >> OVR apllication  >> home page
- Location: tests\Homepage.spec.ts:7:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
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
     |                     ^ Error: page.goto: Target page, context or browser has been closed
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