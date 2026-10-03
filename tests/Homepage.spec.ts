import {test , expect } from "../src/fixtures/MyFixtures"
import { Bookingpage } from "../src/pages/Detailspage"
import { Homepage } from "../src/pages/Homepage"

test.describe("OVR apllication ",()=>{

    test("home page", async({homepage,bookingpage,page})=>{


        await homepage.pagegoto()
        await homepage.popupmsg()
        await homepage.filldetails(process.env.origin,process.env.destination,process.env.dateselection)
        await homepage.nextpage()
        await bookingpage.fetchdetails(process.env.boardingpoint,process.env.droppingpoint,process.env.name,process.env.age,process.env.email,process.env.phnnumber,process.env.anthnumber,process.env.adress,process.env.state)



    })









})