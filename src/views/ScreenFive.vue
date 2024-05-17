<template>
    <div class="ScreenFiveContainer text-center">
        <NavBar />
            <div class="row">
                <div class="col blueSide">
                    <button class="DashboardBtn">
                        <i class="fa-solid fa-house"></i>
                        Dashboard
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                    <button class="schedule">
                        <i class="fa-solid fa-calendar-days"></i>
                        Add Student
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                    <button class="school">
                        <i class="fa-solid fa-person"></i>
                        Class
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                    <button class="Ass">
                        <i class="fa-solid fa-book"></i>
                        Assignments
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                    <button class="Progress">
                        <i class="fa-solid fa-arrow-up"></i>
                        Tutors
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                    <button class="Messaging">
                        <i class="fa-solid fa-message"></i>
                        Messaging
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                    <button class="Earnings">
                        <i class="fa-solid fa-money-bill"></i>
                        Payment
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                    
                    <button class="Coming">
                        Make Payment
                    </button>
                    <button class="ManageS">
                         Payment History
                    </button>
                    <button class="Feedback">
                        <i class="fa-regular fa-message"></i>
                        Feedback
                    </button>
                    <button class="Settings">
                        <i class="fa-solid fa-gears"></i>
                        Settings</button>
                    <button class="Logout">
                        <i class="fa-solid fa-right-from-bracket"></i>
                        Logout</button>

                        <div> 
                            <img class="person2person" 
                            alt="person2person"
                            src="../assets/person2person copy.jpeg" />
                       <button class="refer">Refer & Earn</button>
                        </div>


                </div>
                <div class="col whiteSide">
                    <h5 class="Upcoming">Make Payment</h5>
                    <hr class="line">
                        <div class="whiteSideContainer text-center">
                                    <div class="row row-cols-auto">
                                            <div class="col">
                                                <img src="../assets/portImg.png" 
                                                class="passport" alt="passport"/>
                                            </div>
                                            <div class="col ArseneTutor">
                                                <p class="Arsene">Henry Arsene</p>
                                                <P class="Tutor">History Tutor</P>
                                                <img src="../assets/fiveStarImg.png" 
                                                class="fiveStar" alt="fiveStar"/>
                                            </div>
                                           
                                            </div>
                                            <div class="SelectContainer">
                                                <label class="labelMonth">Select Month: </label>
                                                 <select v-model="Month" class="Month">
                                                    <label>Select Month: </label>
                                                    <option value="Jan"> January</option>
                                                    <option value="Feb">February</option>
                                                    <option value="March">March</option>
                                                    <option value="April">April</option>
                                                    <option value="May">May</option>
                                                    <option value="June">June</option>
                                                    <option value="July">July</option>
                                                    <option value="Aug">August</option>
                                                    <option value="Sept">September</option>
                                                    <option value="Oct">October</option>
                                                    <option value="Nov">November</option>
                                                    <option value="Dec">December</option>
                                                    </select>
                                            </div>
                                            <div class="Methodcontainer text-center">
                                        <div class="row row-cols-auto">
                                            <div class="col MethodCol PaymentCol">
                                               Payment Method:
                                            </div>
                                            <div class="col MethodCol">
                                                <input type="checkbox"
                                                 value="Bank" class="ANC"> 
                                              Credit Card  
                                            </div>
                                            <div class="col MethodCol">      
                                             <input type="checkbox" 
                                             value="Bank" class="ANC"> 
                                               Debit Card
                                            </div>
                                            <div class="col MethodCol">
                                                <input type="checkbox"
                                                 value="Bank" class="ANC"> 
                                                PayPal
                                            </div>
                                            <div class="col MethodCol">
                                                <input type="checkbox"
                                                 value="Bank" class="ANC"> 
                                               Bank Transfer 
                                            </div>

                                           </div>
                                           <div class="TransferContainer"> 
                                            <h4 class="Information">Bank Transfer Information:</h4>
                                           <ul class="InformationList">
                                            
                                            <li class=""> <strong>Bank Name:</strong>  Wema Bank</li><br>
                                            <li class=""> <strong>Account Name: </strong>  Proliferate ai</li><br> 
                                            <li class=""> <strong>Account Number:</strong>  0918273625</li><br> 
                                            <li class=""> <strong>Routing Number (if applicable): </strong>  SWG283645</li>

                                           </ul>
                                           </div>

                                           <div class="CardContainer"> 
                                            <div> 
                                                <p class="CardName"> Name on Card</p>
                                            <input type="text"
                                             class="input-field CardContainerField" 
                                             placeholder="">
                                            </div>
                                            <div> 
                                                <p class="CardName">
                                                     Card Number</p>
                                            <input type="text"
                                             class="input-field CardContainerField" 
                                             placeholder="">

                                             <div> 
                                                <p class="CardName">
                                                    Explanation</p>
                                           
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text"
                                             class="input-field HalfICardContainerField" 
                                             placeholder="">
                                             <span class="slash">/</span>

                                                </div>  
                                                <div class="col">
                                                    <input type="text"
                                             class="input-field HalfIICardContainerField" 
                                             placeholder="">
                                                </div>
                                            </div>
                                            </div>

                                            <div> 
                                                <p class="CardName">
                                                    CVV</p>
                                            <input type="text"
                                             class="input-field HalfCardContainerField" 
                                             placeholder="">
                                            </div>

                                            </div>

                                           </div>

                                           <button class="confirm">Confirm Payment</button>
                                           
                                        </div>                                    
                                    </div>
                </div>
  </div>
    </div>
  </template>
  
  <script>
import NavBar from '../components/NavBar.vue'
export default {
  name: 'ScreenFive',
  components: {
    NavBar
  },
}
  </script>
  
  <style scoped>

  .ScreenFiveContainer{
      background-color: #FFFFFF;
      width: 100%;
  }
  .blueSide{
    position: absolute;
    top: 91.42px;
    width: 244px;
    height: 1026px;
    background: linear-gradient(180deg, rgba(27, 135, 225, 0.88) 54.97%, #0C2E4A 100%);
  }


  .DashboardBtn{
    width: 165px;
    height: 46px;
    padding: 5px 20px 5px 20px;
    gap: 10px;
    position: absolute;
    background: #1F70B2;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
    top: 48px;
    right: 35px;
  }

  .schedule{
    width: 165px;
    height: 46px;
    padding: 5px 20px 5px 20px;
    gap: 10px;
    position: absolute;
    top: 95px;
    right: 35px;
    background: #1F70B2;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
  }

   .school{
    width: 165px;
    height: 46px;
    padding: 5px 20px 5px 20px;
    gap: 10px;
    position: absolute;
    top: 139px;
    right: 35px;
    background: #1F70B2;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
  }

  .Ass{
    width: 165px;
    height: 46px;
    padding: 5px 20px 5px 20px;
    gap: 10px;
    position: absolute;
    top: 182px;
    right: 35px;
    background: #1F70B2;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
  }


  .Progress{
    width: 165px;
    height: 46px;
    padding: 5px 20px 5px 20px;
    gap: 10px;
    position: absolute;
    top: 226px;
    right: 35px;
    background: #1F70B2;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
  }


  .Messaging{
    width: 165px;
    height: 46px;
    padding: 5px 20px 5px 20px;
    gap: 10px;
    position: absolute;
    top: 272px;
    right: 35px;
    background: #1F70B2;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
  }


  .Earnings{
    width: 165px;
    height: 46px;
    padding: 5px 20px 5px 20px;
    gap: 10px;
    position: absolute;
    top: 318px;
    right: 35px;
    background: #1F70B2;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
  }

  .Coming{
    width: 165px;
    height: 46px;
    padding: 5px 20px 5px 20px;
    gap: 10px;
    position: absolute;
    top: 364px;
    right: 35px;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
    background: #1D8EED70;
  }

  .ManageS{
    width: 165px;
    height: 46px;
    padding: 5px 20px 5px 20px;
    gap: 10px;
    position: absolute;
    top: 410px;
    right: 35px;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
    background: #1D8EED70;
    font-size: 14px;
  }
 


  .Feedback{
        width:  165px;
        height: 46px;
        position: absolute;
        top: 513px;
        left: 42px;
        padding: 5px 15px 5px 15px;
        gap: 9px;
        background: #1F70B2;
        border: 1px solid #FFFFFF2B;
        color:#FFFFFF;
  }

  .Settings{
        width:  165px;
        height: 46px;
        position: absolute;
        left: 42px;
        padding: 5px 15px 5px 15px;
        gap: 9px;
        background: #1F70B2;
        border: 1px solid #FFFFFF2B;
        color:#FFFFFF;
        top: 692px;


  }

  .Logout{
        width:  165px;
        height: 46px;
        position: absolute;
        top: 738px;
        left: 42px;
        padding: 5px 15px 5px 15px;
        gap: 9px;
        background: #1F70B2;
        border: 1px solid #FFFFFF2B;
        color:#FFFFFF;
  }

  .person2person{
    width: 189px;
    height: 182px;
    border-radius: 20px;
    position: absolute;
    top: 795px;
    left: 28px;
    opacity: 0.6;

  }

  .refer{
    width: 188px;
    height: 56px;
    padding: 16px 0px 0px 0px;
    gap: 10px;
    border-radius: 8px 0px 0px 0px;
    position: absolute;
    top: 945px;
    left: 28px;
    background: #1F70B2;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
  }

  .line{
    width: 1200px;
    position: absolute;
    top: 222px;
    left: 230px;
    border-top: 1px solid #969696;
  }

  .whiteSideContainer{
    position: absolute;
    top: 292px;
    left: 320px;
  }

  .PaymentContainer{
    position: absolute;
    top: 2px;

  }

  .Upcoming{
    position: absolute;
    top: 149px;
    left: 328px;
    text-align:left;
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 700;
    line-height: 39.01px;
    text-align: left;
    height: 39px;
  }

.Arsene{
font-family: Montserrat;
font-size: 16px;
font-weight: 600;
line-height: 19.5px;
text-align: left;
position: relative;
top: 40px;
z-index: 1;

}

.Tutor{
font-family: Open Sans;
font-size: 14px;
font-weight: 400;
line-height: 45px;
text-align: left;
position: relative;
top: 10px;
left: 10px;
z-index: 1;

}


  .passport{
    width: 166px;
    height: 172px;
    top: 251px;
    left: 328px;
    border: 2px;

  }

  .fiveStar{
    width: 120px;
    height: 74px;
    position: relative;
    bottom: 45px;
    right: 13px;
  }

  .Month{
    width: 517px;
    height: 51px;
    padding: 13px 20px 13px 20px;
    gap: 10px;
    border-radius: 8px;
    background: #E2E8F0;
    position: relative;
    left: 100px;
  }

  .Month::-ms-value{
    z-index: 1;

  }

  .SelectContainer{
    width: 698px;
    height: 34px;
    position: relative;
    top: 4px;
    right: 85px;
    margin: 41px;
  }

  .labelMonth{
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    text-align: left;
    position: relative;
    bottom: 12px;

  }

  .ANC{
    border-radius: 50%; 
    margin-left: 30px;
    font-family: Roboto;
  }

  .MethodCol{
    border-radius: 50%; 
    font-family: Roboto;
  }

  
  
  .TransferContainer{
    width: 735px;
    height: 218px;
    top: 617px;
    left: 328px;
    margin-top: 10px;
    margin-bottom: 30px;
    


  }

  .Information{
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 35px;
    text-align: left;

  }

  .InformationList{
    margin-top: 30px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 35px;
    text-align: left;
  
}

  

  .confirm{
    width: 145px;
    height:  39px;
    top: 862px;
    left: 792px;
    padding: 10px;
    gap: 10px;
    border-radius: 10px;
    background: var(--Colors-hover, #186BAD);
    color: #FFFFFF;
    border: none;

  }

  .CardContainer{
    display: none;

  }


  @media screen and (max-width: 600px) {
    .ScreenFiveContainer{
        width: 100%;
        height: 1305px;
        border-radius: 15px;
    }
    .blueSide, .line{
   display: none;
  }


  .whiteSideContainer{
    position: absolute;
    width: 100%;
    top: 92px;
    left: 1px;
  }

  .Upcoming{
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 700;
    line-height: 21.94px;
    text-align: left;
    position: absolute;
    top: 45px;
    left: 70px;
    width: 174px;
height: 22px;
  }

  .passport{
    display: block;
    position: relative;
    width: 166px;
height: 200px;
top: 33px;
left: 133px;
border: 1px solid #DE4B18;
  }

  .ArseneTutor{
    position: relative;
    top: 203px;
    right: 20px;

  }

  .SelectContainer, .labelMonth, .Month{
    display: block;
  }

  .labelMonth{
    font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 18.75px;
text-align: left;
margin-top: 200px;
position: relative;
left: 70px;

  }
  .Month{
    width: 369px;
height: 51px;
padding: 13px 20px 13px 20px;
gap: 10px;
border-radius: 8px;
position: relative;
left: 70px;
  }

  .Methodcontainer, .MethodCol{
    display: block;
    width: 90%; 
    margin-bottom: 10px; 
  }

  .MethodCol{
    text-align: left;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;

  }
  
  .PaymentCol{
    position: relative;
    left: 30px;
    font-weight: 800px;
    margin-top: 20px;
  }

  .ANC{
    margin-right: 30px;
  }

  .TransferContainer{
    display: none;
  }

  .CardName{
    font-family: Roboto;
font-size: 16px;
font-weight: 500;
line-height: 18.75px;
text-align: left;
margin-left: 30px;
margin-top: 20px;
  }

  .CardContainerField{
  width:369px;
height: 51px;
padding: 13px 20px 13px 20px;
gap: 10px;
border-radius: 8px;
border: none;
background: #E2E8F0;
      position: relative;
      left: 24px;

  }

  .HalfIICardContainerField, .HalfICardContainerField,
  .HalfCardContainerField{  
height: 51px;
padding: 13px 20px 13px 20px;
gap: 10px;
border-radius: 8px;
border: none;
background: #E2E8F0;
  }

  .HalfCardContainerField{
    position: relative;
    right: 85px;
    width:150px;
      border-radius: 8px;

  }

  .HalfICardContainerField{
    width:150px;
    position: relative;
    left: 20px;
  }

  .HalfIICardContainerField{
    width:150px;
    position: relative;
    right: 5px;
  }

  .slash{
    font-size: 30px;
    z-index: 3;
    position: relative;
    left: 30px;
  }

  .confirm{
    width: 369px;
height: 65px;
padding: 10px 20px 10px 20px;
gap: 10px;
border-radius: 8px;
margin-top: 40px;
position: relative;
      left: 24px;
          top: 0px;


  }

  .CardContainer{
    display:contents;

  }













    
}















  </style>