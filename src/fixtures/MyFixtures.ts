import { Homepage } from '../pages/Homepage'
import{test as base} from "@playwright/test"
import{ Bookingpage } from "../pages/Detailspage"


type MyFixtures={
    homepage:Homepage
    bookingpage:Bookingpage
}

export const test=base.extend<MyFixtures>({
    homepage: async ({page},use)=>{
        const homepage=new Homepage(page)
        await use(homepage)
    },
    bookingpage:async ({page},use)=>{
        const detailspage=new Bookingpage(page)
        await use(detailspage)
    }
})

export {expect} from "@playwright/test"
