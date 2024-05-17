
<template>
    <NavBar />
    <div class="ScreenTwoContainer text-center">
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
                <button class="Coming">
                    Upcoming
                </button>
                <button class="ManageS">
                    Manage Schedule
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
                    <h2 class="Upcoming">My Schedule</h2>
                    <hr class="line">
                    <div class="whiteSideContainer text-center">
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


                                                <tr style="background-color: lightgrey; 
                                                align-content: center;">
                                                    <td>Monday, 10th April</td>
                                                    <td>John Smith</td>
                                                    <td>Mathematics</td>
                                                    <td>3:00PM - 4:30PM</td>
                                                    <td>Online</td>
                                                </tr>

                                                <tr >
                                                    <td class="tdd">Wednesday, 12th April</td>
                                                    <td class="tdd">Sam Fisher</td>
                                                    <td class="tdd">Science</td>
                                                    <td class="tdd">10:00AM - 12:00PM</td>
                                                    <td class="tdd"> In-Person</td>

                                                </tr>

                                                    <tr>
                                                     <td>Thursday, 13th April</td>
                                                    <td>Leo George</td>
                                                    <td>English</td>
                                                    <td>1:00PM - 2:30PM</td>
                                                    <td>Online</td>
                                                    </tr>

                                                    </table>
                    </div>

            </div>
</div>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
name: 'ScreenTwo',
components: {
NavBar
},
}
</script>

<style scoped>

.ScreenTwoContainer{
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

.Coming{
width: 165px;
height: 46px;
padding: 5px 20px 5px 20px;
gap: 10px;
position: absolute;
top: 139px;
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
top: 182px;
right: 35px;
border: 1px solid #FFFFFF2B;
color:#FFFFFF;
background: #1D8EED70;
font-size: 14px;
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

.Upcoming{
position: absolute;
font-weight: 600;
font-size: 20px;
width: 215px;
height: 39px;
top: 143px;
left: 320px;
text-align:left;
}

.table{
text-align:left;
position: relative;
width: 667.01px;
height: 350px;
top: 26px;
left: 90px;
}


th{
border: 1px solid #DE4B18;
font-size: 13px;
height: 43px;
}

td{
border: 1px solid #DE4B18; 
font-size: 10px;
text-align: center;
height: 43px;
}

.tdd{
background: #D9734C73;
height: 43px;

}

@media screen and (max-width: 600px) {


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
position: absolute;
top: 43px;
left: 92px;
font-family: Montserrat;
font-size: 20px;
font-weight: 700;
line-height: 19.5px;
text-align: left;
}
.table{
text-align:left;
position: relative;
width: 380px;
height: 362px;
top: 57px;
left: 15px;
border: 1px;

}

th, td{
font-size: 13px;
height: 43px;
width: 70px;
text-align: center;
}

th{
font-size: 10px;
}

td{
font-size: 8px;
}

.tdd{
background: #FFFFFF;

}











}






</style>