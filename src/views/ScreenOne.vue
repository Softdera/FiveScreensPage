<template>
    <NavBar />
    <div class="ScreenOneContainer text-center">
        <div class="row">
            <div class="col blueSide">
                <button class="DashboardBtn">
                    <i class="fa-solid fa-house"></i>
                    Dashboard
                    <i class="fa-solid fa-angle-right"></i>
                </button>
                <button class="schedule">
                    <i class="fa-solid fa-calendar-days"></i>
                    My Schedule
                    <i class="fa-solid fa-angle-right"></i>
                </button>
                <button class="school">
                    <i class="fa-solid fa-person"></i>
                    My Students
                    <i class="fa-solid fa-angle-right"></i>
                </button>
                <button class="Ass">
                    <i class="fa-solid fa-book"></i>
                    Assignments
                    <i class="fa-solid fa-angle-right"></i>
                </button>
                <button class="Progress">
                    <i class="fa-solid fa-arrow-up"></i>
                    Progress
                    <i class="fa-solid fa-angle-right"></i>
                </button>
                <button class="Messaging">
                    <i class="fa-solid fa-message"></i>
                    Messaging
                    <i class="fa-solid fa-angle-right"></i>
                </button>
                <button class="Earnings">
                    <i class="fa-solid fa-money-bill"></i>
                    Earnings
                    <i class="fa-solid fa-angle-right"></i>
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
                <div class="DashOver">
                    <h2><strong class="DashboardText">Dashboard/</strong> <span class="OvertimeText"> Overtime</span> </h2>
                 </div>
                <hr class="line">
                    <div class="whiteSideContainer text-center">
                        <div class="row roww">
                            <div class="col ClassesContainer">
                                <h5 class="Upcoming">Upcoming Classes</h5>
                                <button class="seeAllI">See All</button>
                                            <table class="table">
                                                <tr  style="background-color: grey; border: 1px solid #DE4B18">
                                                    <!---to create headers use <th>-->
                                                    <th style="width: 100px;">Date</th>
                                                    <th style="width: 100px;">Student Name</th>
                                                    <th style="width: 100px;">Subject</th>
                                                    <th style="width: 100px;">Time</th>
                                                    <th style="width: 100px;">Location</th>
                                                    
                                                    </tr>

                                                <tr style="background-color: lightgrey; 
                                                align-content: center;">
                                                    <td>Monday, 10th April</td>
                                                    <td>John Smith</td>
                                                    <td>Mathematics</td>
                                                    <td>3:00PM - 4:30PM</td>
                                                    <td>Online</td>
                                                </tr>

                                                <tr style="background-color: lightgrey; 
                                                align-content: center;">
                                                    <td>Wednesday, 12th April</td>
                                                    <td>Sam Fisher</td>
                                                    <td>Science</td>
                                                    <td>10:00AM - 12:00PM</td>
                                                    <td>In-Person</td>

                                                </tr>

                                                    <tr style="background-color: lightgrey; 
                                                    align-content: center;">
                                                     <td>Thursday, 13th April</td>
                                                    <td>Leo George</td>
                                                    <td>English</td>
                                                    <td>1:00PM - 2:30PM</td>
                                                    <td>Online</td>
                                                    </tr>
                                                    </table>
                                                            

                                                            <div class="horizontal-table">
                                                                <div class="row">
                                                                    <div class="header">Date</div>
                                                                    <div class="content">Monday, 10th April</div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="header">Time</div>
                                                                    <div class="content">3:00PM - 4:30PM</div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="header">Student Name</div>
                                                                    <div class="contentI">John Smith</div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="header">Subject</div>
                                                                    <div class="content">Mathematics</div>
                                                                </div>
                                                                
                                                                <div class="row">
                                                                    <div class="header">Location</div>
                                                                    <div class="content">Online</div>
                                                                </div>
                                                            </div>
                                                            <div class="horizontal-table">
                                                                <div class="row">
                                                                    <div class="header">Date</div>
                                                                    <div class="content">Monday, 10th April</div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="header">Time</div>
                                                                    <div class="content">3:00PM - 4:30PM</div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="header">Student Name</div>
                                                                    <div class="contentI">John Smith</div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="header">Subject</div>
                                                                    <div class="content">Mathematics</div>
                                                                </div>
                                                                
                                                                <div class="row">
                                                                    <div class="header">Location</div>
                                                                    <div class="content">Online</div>
                                                                </div>
                                                            </div>
                                                            <div class="horizontal-table">
                                                                <div class="row">
                                                                    <div class="header">Date</div>
                                                                    <div class="content">Monday, 10th April</div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="header">Time</div>
                                                                    <div class="content">3:00PM - 4:30PM</div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="header">Student Name</div>
                                                                    <div class="contentI">John Smith</div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="header">Subject</div>
                                                                    <div class="content">Mathematics</div>
                                                                </div>
                                                                
                                                                <div class="row">
                                                                    <div class="header">Location</div>
                                                                    <div class="content">Online</div>
                                                                </div>
                                                            </div>

                                                          </div>

                            <div class="col AssignContainer">
                                <div class="ColorAssignmentH5"> 
                                <h5 class="AssignmentH5">Assignment</h5>
                                <button class="seeAllIII">See All</button>
                                </div>
                                <div class="carryFlexAssignContainer">
                                    <hr class="hrLine" style="color: #74C0FC;">

                                    <div class="flexAssignContainer"> 
                                    <div class="addressContainer"> 
                                        <i class="fa-solid fa-address-book"></i>
                                    </div>
                                    <div>
                                        <h6 class="sheetH6">Class A 1st Semester result</h6>
                                        <p class="sheetP">04 May, 09:20AM</p>
                                    </div>

                                </div>
                                    <hr class="hrLine" style="color: #74C0FC;">

                                <div class="flexAssignContainer"> 
                                    <div class="addressContainer"> 
                                        <i class="fa-solid fa-address-book"></i>
                                    </div>
                                    <div>
                                        <h6 class="sheetH6">Kelvin college application</h6>
                                        <p class="sheetP">01 Aug, 04:20PM</p>
                                    </div>

                                </div>
                                <hr class="hrLine" style="color: #74C0FC;">

                                <div class="flexAssignContainer"> 
                                    <div class="addressContainer"> 
                                        <i class="fa-solid fa-address-book"></i>
                                    </div>
                                    <div>
                                        <h6 class="sheetH6">Class E attendance sheet</h6>
                                        <p class="sheetP">01 Oct, 01:20PM</p>
                            
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col TutorContainer">
                                <h5 class="TutorPerformance">Tutor Performance Overtime</h5>
                                <button class="seeAllII">See All</button>
                                <div class="row rows px-5 py-3 row-cols-1 row-cols-lg-3 TutorContainerRow">

                                        <div class="software redContainer">

                                            <div class="feature col">
                                            <div class="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                                               <div class="iconContainer">
                                                <i class="fa-solid fa-money-check-dollar"></i>
                                               </div>
                                            </div>
                                            <h3 class="fs-2 text-body-emphasis "> $1k</h3>
                                            <p> Total Earnings
                                            </p>   
                                            <p class="yesterday">+8% from yesterday</p>     
                                            </div>
                                        </div>

                                        <div class="software orangeContainer">
                                                    <div class="feature col">
                                                    <div class="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                                                        <div class="iconContainerI">
                                                            <i class="fa-solid fa-pen-to-square"></i>
                                                        </div>
                                                    </div>
                                                    <h3 class="fs-2 text-body-emphasis "> 300</h3>
                                                    <p> Total Sessions
                                                    </p>   
                                                    <p class="yesterday">+5% from yesterday</p>     
                                                    </div>
                                        </div>
                                        <div class="software greenContainer">
                                                    <div class="feature col">
                                                    <div class="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                                                      <div class="iconContainerII">
                                                        <i class="fa-solid fa-check"></i>
                                                      </div>  
                                                    </div>
                                                    <h3 class="fs-2 text-body-emphasis ">5</h3>
                                                    <p> Completed Sessions
                                                    </p>   
                                                    <p class="yesterday">+1.2% from yesterday</p>     
                                                    </div>
                                        </div>
                                        <div class="software purpleContainer">
                                                    <div class="feature col">
                                                    <div class="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                                                        <div class="iconContainerIII">
                                                            <i class="fa-solid fa-user-plus"></i>

                                                      </div>
                                                    </div>
                                                    <h3 class="fs-2 text-body-emphasis "> 8</h3>
                                                    <p> New Students
                                                    </p>   
                                                    <p class="yesterday">+0.5% from yesterday</p>     
                                                    </div>
                                         </div>
                                        </div>
                            </div>
                            <div class="col AttendanceContainer">

                                <h5 class="Attendance"> Attendance</h5>
                                <button class="seeAllIV">See All</button>
                                            <table class="table2">
                                                <tr class="trHeadII" style="background-color: white; border: 1px solid #DE4B18">
                                                    <!---to create headers use <th>-->
                                                    <th style="width: 100px;">Month</th>
                                                    <th style="width: 100px;">Schedule Sessions</th>
                                                    <th style="width: 100px;">Attended Sessions</th>
                                                    <th style="width: 100px;">Students Absences</th>
                                                    <th style="width: 100px;">Tutors Absences</th>
                                                    
                                                    </tr>

                                                <tr style="background-color: white; 
                                                align-content: center;">
                                                    <td>February</td>
                                                    <td>35</td>
                                                    <td>35</td>
                                                    <td>35</td>
                                                    <td>35</td>
                                                </tr>

                                                <tr style="background-color: white; 
                                                align-content: center;">
                                                    <td>March</td>
                                                    <td>37</td>
                                                    <td>37</td>
                                                    <td>37</td>
                                                    <td>37</td>

                                                </tr>

                                                    <tr style="background-color: white; 
                                                    align-content: center;">
                                                     <td> April</td>
                                                    <td>40</td>
                                                    <td>40</td>
                                                    <td>40</td>
                                                    <td>40</td>
                                                    </tr>
                                                    </table>

                                                <div class="tableTwoContainer"> 
                                                        <div class="containerFEBRUARY text-center">
                                                            <div class="tableTwoMonth">                                                       
                                                             FEBRUARY
                                                            </div>
                                                                <div class="row">
                                                                    <div class="col colMonth">
                                                                        Scheduled Sessions: 35
                                                                        <br> Attended Sessions: 35
                                                                    </div>
                                                                    <div class="col">
                                                                        <hr class="RedLine"  color="#DE4B18" size="3">
                                                                        </div>
                                                                    <div class="col colMonth">
                                                                        Students Absences: 35 
                                                                        <br> 
                                                                        Tutors Absences: 35
                                                                    </div>
                                                    </div>

                                                    <div class="containerMARCH text-center">
                                                            <div class="tableTwoMonth">                                                       
                                                             MARCH
                                                            </div>
                                                                <div class="row">
                                                                    <div class="col colMonth">
                                                                        Scheduled Sessions: 35
                                                                        <br> Attended Sessions: 35
                                                                    </div>
                                                                    <div class="col">
                                                                        <hr class="RedLine"  color="#DE4B18" size="3">
                                                                        </div>
                                                                    <div class="col colMonth">
                                                                        Students Absences: 35 
                                                                        <br> 
                                                                        Tutors Absences: 35
                                                                    </div>
                                                    </div>
                                                    </div>

                                                    <div class="containerAPRIL text-center">
                                                            <div class="tableTwoMonth">                                                       
                                                             APRIL
                                                            </div>
                                                                <div class="row">
                                                                    <div class="col colMonth">
                                                                        Scheduled Sessions: 35
                                                                        <br> Attended Sessions: 35
                                                                    </div>
                                                                    <div class="col">
                                                                        <hr class="RedLine"  color="#DE4B18" size="3">
                                                                        </div>
                                                                    <div class="col colMonth">
                                                                        Students Absences: 35 
                                                                        <br> 
                                                                        Tutors Absences: 35
                                                                    </div>
                                                    </div>
                                                    </div>     
                                                    </div>
                                                </div>
                            </div>
                        </div>
                        </div>

            </div>
        </div>
        </div>
    

</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {

name: 'ScreenOne',
components: {
NavBar
},
}
</script>

<style scoped>
.ScreenOneContainer{
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

.DashboardText{
opacity: 0;
}

.OvertimeText{
position: absolute;
width: 159px;
height: 39px;
top: 149px;
left: 278px;
font-weight: bolder;
}


.line{
width: 1200px;
border-top: 1px solid #969696;
position: absolute;
left: 230px;
top: 222px; 
}


.whiteSideContainer{
width: 1200px;
position: absolute;
top: 222px;
left: 230px;
}

.DashboardBtn{
width: 165px;
height: 46px;
padding: 5px 20px 5px 20px;
gap: 10px;
position: absolute;
top: 132px;
right: 35px;
background: #1F70B2;
border: 1px solid #FFFFFF2B;
color:#FFFFFF;
}

.schedule{
width: 165px;
height: 46px;
padding: 5px 20px 5px 20px;
gap: 10px;
position: absolute;
top: 179px;
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
top: 226px;
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
top: 273px;
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
top: 319px;
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
top: 366px;
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
top: 413px;
right: 35px;
background: #1F70B2;
border: 1px solid #FFFFFF2B;
color:#FFFFFF;
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

.Upcoming{
position: relative;
right: 480px;
top: 55px;
font-weight: 600;
font-size: 20px;

}

.AssignmentH5{
position: relative;
top: 05px;
font-weight: 600;
font-size: 20px;
}

.Attendance{
font-weight: 600;
font-size: 20px;
}

.horizontal-table{
display: none;
}

.table{
width: 550.01px;
height: 199.5px;
position: absolute;
top: 106.5px;
left: 50.99px;
border: 1px solid #DE4B18;
text-align: left;
}

.table2{
border: 1px solid #DE4B18;
background-color: #FFFFFF;
width: 440px;
height: 230.03px;
position: relative;
right: 05px;

}

th{
border: 1px solid #DE4B18;
font-size: 13px;
}

td{
border: 1px solid #DE4B18; 
font-size: 10px;
text-align: center;
}

.trHeadII{
text-align: center;
}

.AssignContainer{
width: 334px;
height: 274.7px;
position: absolute;
top: 41px;
left: 722px;
text-align: left;
}

.carryFlexAssignContainer{
position: relative;
bottom: 20px;
}

.flexAssignContainer{
display: flex;

}

.AttendanceContainer{
width: 466px;
height: 230.03px;
position:absolute;
top: 390px;
left: 733px;
text-align: left;
}

.TutorContainer{
height: 29px;
position:absolute;
top: 390px;
left: 5px;
text-align: left;
}

.TutorPerformance{
position: relative;
left: 15px;
font-weight: 600;
font-size: 20px;
}

.software{
width: 165px;
height: 184px;
border: none;
border-radius: 16px;
margin-left: 10px;
padding-top: 15px;
position: relative;
right: 42px;
}

.text-body-emphasis{
font-size: 12px;
}

.yesterday{
font-size: 11px;
}

.redContainer{
background: #FFE2E5;
}

.orangeContainer{
background: #FFF4DE;

}

.greenContainer{
background: #DCFCE7;

}

.purpleContainer{
background: #F3E8FF;

}

.iconContainer{
width: 40px;
height: 40px;
background: #FA5A7D;
border-radius: 50%;
}

.iconContainerI{
width: 40px;
height: 40px;
border-radius: 50%;
background: #FF947A;

}

.iconContainerII{
width: 40px;
height: 40px;
border-radius: 50%;
background: #3CD856;

}

.iconContainerIII{
width: 40px;
height: 40px;
border-radius: 50%;
background: #BF83FF;
}

.fa-money-check-dollar{
font-size: 20px;
color: #FFFFFF;
position: relative;
left: 9px;
bottom: 6px;
}

.fa-user-plus{
font-size: 20px;
color: #FFFFFF;
position: relative;
left: 9px;
bottom: 6px;
}

.fa-check{
font-size: 20px;
color: #FFFFFF;
position: relative;
left: 9px;
bottom: 6px;
}

.fa-pen-to-square{
font-size: 20px;
color: #FFFFFF;
position: relative;
left: 9px;
bottom: 6px;
}

.fa-address-book{
position: relative;
top: 7px;
left: 7px;
font-size: 25px;

}

.addressContainer{
background: #F0F7FF;
margin-right: 30px;
width: 36.61px;
height: 37.18px;
border-radius: 8px;
}

.sheetP{
font-size: 10px;
color: grey;
}

.sheetH6{
font-size: 12px;
}

.TutorContainerRow{
position: relative;
bottom: 50px;
}

.seeAllI{
font-family: Open Sans;
font-size: 14px;
font-weight: 400;
line-height: 30px;
text-align: left;
background-color: #FFFFFF;
color: #186BAD;
width: 72px;
border: none;
position: relative;
right: 40px;
top: 25px;
}

.seeAllII{
font-family: Open Sans;
font-size: 14px;
font-weight: 400;
line-height: 30px;
text-align: left;
background-color: #FFFFFF;
color: #09BCFF;
width: 72px;
border: none;
position: relative;
left: 500px;
bottom: 35px;
}

.seeAllIII{
font-family: Open Sans;
font-size: 14px;
font-weight: 400;
line-height: 30px;
text-align: left;
background-color: #FFFFFF;
color: #186BAD;
width: 72px;
border: none;
position: relative;
left: 250px;
bottom: 30px;
z-index: 1;
}

.seeAllIV{
font-family: Open Sans;
font-size: 14px;
font-weight: 400;
line-height: 30px;
text-align: left;
background-color: #FFFFFF;
color: #09BCFF;
width: 72px;
border: none;
position: relative;
left: 350px;
bottom: 30px;
z-index: 1;
}


.tableTwoContainer{
opacity: 0;
position: absolute;
bottom: 600px;
}


.mobileBell{
display: none;
opacity: 0;
}
.MobileAngle{
display: none;
opacity: 0;
}

.fa-user{
display: none;
opacity: 0;
}


@media screen and (max-width: 600px) {

.ScreenOneContainer{
  background-color: whitesmoke;
  width: 100%;
  Height: 1868px;
}

.blueSide{
    display: none;
}

.whiteSide{
    position: relative;
    bottom: 180px;
    width: 75%;
}

.whiteSideContainer{
            width: 75%;
        position: relative;
            left: 5px;
        bottom: 30px;
}

.DashboardText{
opacity: 1;
position: relative;
font-family: Montserrat;
font-size: 23px;
font-weight: 700;
line-height: 19.5px;
text-align: left;
top: 135px;
right: 70px;
 }

 .OvertimeText{
position: absolute;
font-family: Montserrat;
font-size: 23px;
font-weight: 400;
line-height: 19.5px;
text-align: left;
top: 142px;
left:205px;
}

.line{
display: none;
}

.Upcoming{
font-family: Inter;
font-size: 14px;
font-weight: 700;
text-align: left;
color: #242F48;
position: absolute;
right: 180px;
top: 1px;
z-index: 4;
}

.seeAllI{
font-family: Open Sans;
font-size: 12px;
font-weight: 400;
line-height: 30px;
text-align: left;
background-color: whitesmoke;
color: #186BAD;
width: 72px;
border: none;
position: relative;
left: 190px;
top: 1px;
}

.table{
display: none;
}

.horizontal-table {
display: flex;
flex-direction: column;
width:  380px;
height: 167px;
text-align: left;
background-color: #FFFFFF;
position: relative;
left: 18px;
margin-bottom: 2px;
padding-top: 20px;
padding-bottom: 10px;
}

.row {
display: flex;
flex-direction: row;
}

.header,
.content, .contentI {
flex: 1;
padding: 5px;
}

.header {
font-size: 10px;
position: relative;
left: 50px;
}

.content {
position: relative;
right: 20px;
font-size: 12px
}
.contentI{
position: relative;
font-size: 12px;
color: #186BAD;
right: 20px;
}

.AssignContainer{
width: 430px;
height:  340.53px;
position: absolute;
top: 580px;
left: 25px;
padding: 24px 37px 24px 16px;
gap: 18px;
border-radius: 5px;
border: 0.5px;
background: #FFFFFF;
}

.carryFlexAssignContainer{
     width: 380px;

}

.TutorContainer{
width: 380px.52px;
height: 405px;
top: 950px;
left: 24px;
position: absolute;
}

.AttendanceContainer{
width: 380px;
height:  269px;
position: absolute;
top: 1371px;
left: 24px;
padding: 24px 16px 24px 16px;
gap: 18px;
border-radius: 5px;
border: 0.5px;
}

.fs-2{
    font-size: 12px;
}

.seeAllII{
font-family: Open Sans;
font-size: 12px;
font-weight: 400;
line-height: 30px;
text-align: left;
background-color: whitesmoke;
color: #09BCFF;
width: 72px;
border: none;
position: relative;
left: 280px;
bottom: 7px;
}

.redContainer{
margin-left: 5px;
padding-top: 15px;
position: relative;
width: 180.42px;
height: 190.37px;
top: 44.52px;
right: 53px;
border-radius: 16px;
}

.orangeContainer{
position: relative;
width: 180.42px;
height: 190.37px;
bottom: 145.52px;
left: 134.57px;
border-radius: 16px;

}

.greenContainer{
position: relative;
width: 180.42px;
height: 190.37px;
bottom: 140.63px;
right: 58px;
border-radius: 16px;
}

.purpleContainer{
position: relative;
width: 180.42px;
height: 190.37px;
left: 134.57px;
bottom: 330.52px;
border-radius: 16px;
}
.ColorAssignmentH5{
background-color: whitesmoke;
width: 370px;
position: relative;
right: 30px;
bottom: 25px;
height:60px;
}

.AssignmentH5{
font-family: Inter;
font-size: 12px;
font-weight: 700;
line-height: 15px;
text-align: left;
color: #242F48;
position: relative;
left: 18px;
}


.seeAllIII{
background-color: whitesmoke;
font-size: 12px;
position: absolute;
left: 300px;
}

.hrLine{
height: 25px; 
width: 3px; 
transform: rotate(180deg);
margin: 0 auto;
position: relative;
right: 165px;
top: 30px;
border: 1px solid #242F484F
}

.RedLine{
height: 25px; 
width: 3px; 
transform: rotate(180deg);
margin: 0 auto;
border: 1px solid #DE4B18;
color: #DE4B18;
position: relative;
}

.TutorPerformance{
font-family: Inter;
font-size: 12px;
font-weight: 700;
line-height: 15px;
text-align: left;
color: #242F48;
position: absolute;
left: 5px;

}

.seeAllIV{
font-size: 12px;
background-color: whitesmoke;
position: relative;
left: 260px;
}

.Attendance{
font-size: 12px;
font-family: Inter;
font-weight: 600;
line-height: 15px;
}
.table2{
display: none;
}

.tableTwoContainer{
width: 365px;
height:  300px;
right: 18px;
padding: 24px 16px 24px 16px;
gap: 18px;
border-radius: 5px;;
background: #FFFFFF;
border: 0.5px solid #DE4B18;
opacity: 1;
position: relative;
bottom: 0;
}

.colMonth{
font-family: Inter;
line-height: 15px;
font-size: 10px;
text-align: left;
margin-bottom: 12px;

}

.tableTwoMonth{
font-family: Inter;
font-size: 14px;
font-weight: 600;
line-height: 15px;
text-align: left;
margin-bottom: 15px;
}



.mobileBell{
font-size: 25px;

opacity: 1;
display:contents;
z-index: 3;

position: absolute;
font-size: 23px;
bottom: 27.14px;
right: 400px;

}


.fa-user{
font-size: 25px;
position: absolute;
right: 400px;
opacity: 1;
bottom: 27.14px;
display:contents;
z-index: 3;
}


.MobileAngle{
    z-index: 3;
position: absolute;
opacity: 1;
font-size: 10px;
right: 305px;
bottom: 22.14px;
display: contents;
font-size: 15px;


}

.status-dot{
width: 8px;
height: 8px;
background-color: #00ff00; 
border-radius: 50%;
margin-right: 5px;
position: absolute;
left: 38px;
bottom: 1px;

}




.status-dott{
width: 8px;
height: 8px;
background-color: #00ff00; 
border-radius: 50%;
margin-right: 5px;
position: absolute;
left: 10px;
top: 5px;
}

 
.mobileBell{
    font-size: 25px;
    
    opacity: 1;
    display:contents;
    z-index: 6;

    position: absolute;
    font-size: 23px;
    top: 27.14px;
    left: 124px;
    display: contents;

}


.fa-user{
    font-size: 25px;
    position: absolute;
    right: 400px;
    opacity: 1;
    bottom: 27.14px;
    display:contents;
    z-index: 3;
}


.MobileAngle{
        z-index: 3;
    position: absolute;
    opacity: 1;
    font-size: 10px;
    right: 305px;
    bottom: 22.14px;
    display: contents;
    font-size: 15px;


}

.status-dot{
    width: 8px;
  height: 8px;
  background-color: #00ff00; 
  border-radius: 50%;
  margin-right: 5px;
  position: absolute;
  left: 38px;
  bottom: 1px;

}




.status-dott{
    width: 8px;
  height: 8px;
  background-color: #00ff00; 
  border-radius: 50%;
  margin-right: 5px;
  position: absolute;
  left: 10px;
  top: 5px;
}



}











</style>