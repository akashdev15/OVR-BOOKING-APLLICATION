import { Homepage } from '../pages/Homepage';
import{test as base} from "@playwright/test"


type MyFixtures={
    homepage:Homepage
}

export const test=base.extend<MyFixtures>({
    homepage: async ({page},use)=>{
        const homepage=new Homepage(page)
        await use(homepage)
    }
})

export {expect} from "@playwright/test"
