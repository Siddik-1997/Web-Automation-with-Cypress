import LoginPage from "../pages/LoginPage"
import MakeAppointment from "../pages/MakeAppointment";

describe("Make an appointment for health test",()=>{

    const loginPage=new LoginPage();
    const makeAppointment=new MakeAppointment();
    
    beforeEach(()=>{

        loginPage.userLogin("John Doe","ThisIsNotAPassword");
        
    })

    it("Appointment is successful",()=>{

        makeAppointment.userInDashBoard();
        makeAppointment.createAppointment();
        makeAppointment.validAssertion();


    })
})