<template>
        <div class="ScreenFourContainer">
            <NavBar />
            <i class="fa-solid fa-bars"></i>
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
                    <button class="ComingReport">
                        Add Report
                    </button>
                    <button class="ReportS">
                        <i class="fa-solid fa-file"></i>
                        Reports 
                        <i class="fa-solid fa-angle-right"></i>

                    </button>
                    <button class="History">
                        History
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
                        <h2 class="Report">Report</h2>
                        <hr class="line">
                        <div class="whiteSideContainer text-center">
                            <div class="innerContainer"> 
                                <div class="container text-center AIC">
                                    <div class="row row-cols-auto">
                                        <div class="col All">All</div>
                                        <div class="col Incomplete">Incomplete</div>
                                        <div class="col Completed">Completed</div>
                                        <div class="col">
                                            <i class="fa-solid fa-magnifying-glass glass"></i>
                                            <input type="text"
                                            class="searchWhat"
                                            v-model="searchQuery"
                                            placeholder="What do you want to search">


                                        </div>
                                    </div>
                                    </div>
                                    <div class="ForMobile"> 
                                        <input type="text" 
                                            class="searchWhatMobile" 
                                             v-model="searchQuery" 
                                             placeholder="Search For Reports">

                                            <button class="searchBtn"> 
                                                Search
                                            </button>
                                    </div>
                                    

                                    <div class="row row-cols-auto sssr">
                                        <div class="col Students">Students</div>
                                        <div class="col Subject">Subject</div>
                                        <div class="col Subject">Status</div>
                                        <div class="col Repo">
                                            Reports </div>
                                    </div>

                                    <div class="container text-center AICII">
                                        <div class="row">
                                            <div class="col AllII">
                                                All
                                                <hr class="AllIII">
                                            </div>
                                            <div class="col">
                                                Incomplete
                                                <hr class="AllIV">

                                            </div>
                                            <div class="col">
                                                Completed
                                                <hr class="AllV">

                                            </div>
                                        </div>
                                    </diV>

                                    <div class="row row-cols-auto sssrII">
                                        <div class="col Students">Students</div>
                                        <div class="col Subject">Subject</div>
                                        <div class="col Subject">Status</div>
                                        <div class="col Repo">
                                            Reports </div>
                                    </div>

                                    <div class="row row-cols-auto columnI">
                                        <div class="col ">
                                            <img class="proImg" alt="proImg"
                                            src="../assets/proImg.jpeg" />   </div>
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <hr class="blueLine">
                                            <p class="com">100% Completed</p>

                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div>

                                    <div class="row row-cols-auto columnI">
                                        <div class="col ">
                                            <img class="proImg" alt="proImg"
                                            src="../assets/proImg.jpeg" />   </div>
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <hr class="blueLine">
                                            <p class="com">100% Completed</p>

                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div>

                                    <div class="row row-cols-auto columnI">
                                        <div class="col ">
                                            <img class="proImg" alt="proImg"
                                            src="../assets/proImg.jpeg" />   </div>
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <hr class="blueLine65">
                                            <p class="com">65% Completed</p>

                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div>
                                    <div class="row row-cols-auto columnI">
                                        <div class="col ">
                                            <img class="proImg" alt="proImg"
                                            src="../assets/proImg.jpeg" />   </div>
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <hr class="blueLine35">
                                            <p class="com">35% Completed</p>

                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div>
                                    <div class="row row-cols-auto columnI">
                                        <div class="col ">
                                            <img class="proImg" alt="proImg"
                                            src="../assets/proImg.jpeg" />   </div>
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <hr class="blueLine">
                                            <p class="com">100% Completed</p>

                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div>
                                    <div class="row row-cols-auto columnI">
                                        <div class="col ">
                                            <img class="proImg" alt="proImg"
                                            src="../assets/proImg.jpeg" />   </div>
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            
                                            <hr class="blueLine">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div>
                                    <div class="row row-cols-auto columnI">
                                        <div class="col ">
                                            <img class="proImg" alt="proImg"
                                            src="../assets/proImg.jpeg" />   </div>
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <hr class="blueLine80">
                                            <p class="com">80% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div><div class="row row-cols-auto columnI">
                                        <div class="col ">
                                            <img class="proImg" alt="proImg"
                                            src="../assets/proImg.jpeg" />   </div>
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <hr class="blueLine10">
                                            <p class="com">10% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div>
                                    <div class="row row-cols-auto columnI">
                                        <div class="col ">
                                            <img class="proImg" alt="proImg"
                                            src="../assets/proImg.jpeg" />   </div>
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            
                                            <hr class="blueLine">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div>
                                    <div class="row row-cols-auto columnI">
                                        <div class="col ">
                                            <img class="proImg" alt="proImg"
                                            src="../assets/proImg.jpeg" />   </div>
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            
                                            <hr class="blueLine">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div>

                                    <div class="row row-cols-auto columnI">
                                        <div class="col ">
                                            <img class="proImg" alt="proImg"
                                            src="../assets/proImg.jpeg" />   </div>
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            
                                            <hr class="blueLine">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div> 


                                    <div class="row row-cols-auto columnII">
                                        
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div> 
                                    <hr class="fullHr">

                                    <div class="row row-cols-auto columnII">
                                        
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div> 
                                    <hr class="fullHr">
                                    <div class="row row-cols-auto columnII">
                                        
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div> 
                                    <hr class="fullHr">
                                    <div class="row row-cols-auto columnII">
                                        
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div> 
                                    <hr class="fullHr">
                                    <div class="row row-cols-auto columnII">
                                        
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div> 
                                    <hr class="fullHr">
                                    <div class="row row-cols-auto columnII">
                                        
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div> 
                                    <hr class="fullHr">
                                    <div class="row row-cols-auto columnII">
                                        
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div> 
                                    <hr class="fullHr">
                                    <div class="row row-cols-auto columnII">
                                        
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div> 
                                    <hr class="fullHr">
                                    <div class="row row-cols-auto columnII">
                                        
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div> 
                                    <hr class="fullHr">
                                    <div class="row row-cols-auto columnII">
                                        
                                        <div class="col Moses">Bamidele Moses</div>
                                        <div class="col Mathematics">Mathematics</div>
                                        <div class="col comContainer">
                                            <p class="com">100% Completed</p>
                                        </div>
                                        <div class="col Send"> Send </div>
                                    </div> 
                                    <hr class="fullHr">

                                    <div class="MobileNav">               
<i class="fa-regular fa-bell mobileBell"></i>
<span class="status-dot"></span>


<i class="fa-solid fa-user"></i>
<span class="status-dott"></span>
 <i class="fa-solid fa-angle-down MobileAngle"></i>
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
  name: 'ScreenFour',
  components: {
    NavBar
  },
}
  </script>
  
  <style scoped>
  .ScreenFourContainer{
    background-color: #FFFFFF;
      width: 100%;
  }

  .fa-bars{
    position: absolute;
    left: 380px;
    top: 35px;
}

.AIC{
  position: relative;
  top: 60px;
  left: 235px;
}

.searchWhat {
    width: 285px;
    height: 29px;
    left: 244px;
    border-radius: 50px ;
    border: 1px solid #898A8B;
    position: relative;
}
.searchWhat::placeholder{
    font-family: Poppins;
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #898A8B;
    position: relative;
    left: 10px;
    bottom: 3px;
 }

 .glass{
    position: relative;
    top: 1px;
    left: 515px;
    font-size: 11px;
    z-index: 1;

 }

.All{
    font-family: Poppins;
    font-size: 15px;
    font-weight: bold;
    line-height: 22.5px;
    text-align: left;
    position: relative;
    right: 170px;
}

.Completed{
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
    line-height: 22.5px;
    text-align: left;
    color: #D9D9D9;
    position: relative;
    right: 50px;

}

.Incomplete{
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
    line-height: 22.5px;
    text-align: left;
    color: #D9D9D9;
    position: relative;
    right: 145px;

}

.sssr{
    width: 658px;
    height: 23px;
    position: relative;
    top: 120px;
    left: 150px;
    display: flex;
    justify-content: space-between;
    font-family: Poppins;
    font-size: 15px;
    font-weight: bolder;
    line-height: 22.5px;
    text-align: left;
}

.proImg{
    width: 38px;
    height: 38px;
    border-radius: 50%;
    position: relative;
    right: 230px;
 
   
}

.blueLine{
    width: 124px;
    height: 5px;
    top: 16px;
    left: 475px;
    border-radius: 50px;
    background: #186BAD;
}

.blueLine80{
    width: 124px;
    height: 5px;
    top: 16px;
    left: 475px;
    border-radius: 50px;
    background: linear-gradient(to right, #186BAD 80%, #FFFFFF 20%); 

  }

  .blueLine10{
    width: 124px;
    height: 5px;
    top: 16px;
    left: 475px;
    border-radius: 50px;
    background: linear-gradient(to right, #186BAD 10%, #FFFFFF 90%); 
  }

  .blueLine35{
    width: 124px;
    height: 5px;
    top: 16px;
    left: 475px;
    border-radius: 50px;
    background: linear-gradient(to right, #186BAD 35%, #FFFFFF 65%); 

  }

  .blueLine65{
    width: 124px;
    height: 5px;
    top: 16px;
    left: 475px;
    border-radius: 50px;
    background: linear-gradient(to right, #186BAD 65%, #FFFFFF 35%); 

  }


.columnI{
    width: 962px;
    height: 47px;
    position: relative;
    top: 150px;
    left: 280px;
    margin-bottom: 30px;
   
}

.Send{
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
    line-height: 22.5px;
    text-align: left;
    color: #186BAD;
    position: relative;
    left: 20px;
}

.Moses {
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
    line-height: 22.5px;
    text-align: left;
    position: relative;
    right: 195px;
}

.Mathematics{
    font-family: Poppins;
    font-size: 15px;
    font-weight: 400;
    line-height: 22.5px;
    text-align: left;
    position: relative;
    right: 130px;
}

.com{
    font-family: Poppins;
    font-size: 11px;
    font-weight: 400;
    line-height: 16.5px;
    text-align: left;
}

.comContainer{
    position: relative;
    bottom: 10px;
    right: 40px;
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


  .ReportS {
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

  .ComingReport{
    width: 165px;
    height: 46px;
    padding: 5px 20px 5px 20px;
    gap: 10px;
    position: absolute;
    top: 273px;
    right: 35px;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
    background: #1D8EED70;
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

  .History{
    width: 165px;
    height: 46px;
    padding: 5px 20px 5px 20px;
    gap: 10px;
    position: absolute;
    top: 319px;
    right: 35px;
    border: 1px solid #FFFFFF2B;
    color:#FFFFFF;
    background: #1D8EED70;

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

  .innerContainer{
    width: 1100px;
    position: absolute;
    height: 827px;
    left: 50px;
    top: 30px;
    box-shadow: 0px 0px 15px 0px #0000000D;
    overflow-y: auto;
    overflow-x: hidden;

  }
  

.AICII, .fullHr{
    opacity: 0;

}



.innerContainer::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 5px;
}
 

.innerContainer::-webkit-scrollbar-thumb {
  background: #2c6693; 
  border-radius: 5px;
  height: 50px;
}

.innerContainer::-webkit-scrollbar {
  width: 10px;
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

  .searchWhatMobile{
    opacity: 0;
  }

  .Report{
    position: absolute;
     width: 300px;
    height: 39px;
    top: 133px;
    left: 310px;
    font-weight: 600;
    font-size: 20px;
  }

  .searchBtn, .AICLineII, .columnII{
    opacity: 0;
  }

  .sssrII{
    opacity: 0;
  }


  @media screen and (max-width: 600px) {

    .ScreenFourContainer{
    background-color: #FFFFFF;
      width: 100%;
      height: 1050px;
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

  .Report{
    position: absolute;
    top: 45px;
    left: 100px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 19.5px;
    text-align: left;
  }

  .searchWhat, .glass{
    opacity: 0
  }

  .searchWhatMobile{
    opacity: 1;
    display: block;
    position: absolute;
    width: 369px;
    height: 46px;
    bottom: 780px;
    left: 3px;
    border: 1px solid #B0B0B0;
    z-index: 2;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

  }

  .searchWhatMobile::placeholder{
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 14.63px;
    text-align: left;
    color: #CCCACA;
    position: relative;   
    left: 15px; 

  }

  .searchBtn{
    opacity: 1;
    height: 46px;
    position: absolute;
    bottom: 780px;
    right: 1px;
    z-index: 3;
    width: 89px;
    gap: 10px;
    border-radius: 0px 8px 8px 0px;
    background: var(--selected, #1D8EED);
    border: none;
    color: white;
  }


  .innerContainer{
    width: 90%;
    position: absolute;
    left: 5px;
    top: 30px;
    box-shadow: none;
  }

  .AIC, .columnI, .sssr, .innerContainer::-webkit-scrollbar{
    opacity: 0;
    display: none;
  }

.AICII{
    opacity: 1;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #969696;
    position: absolute;
    top: 90px;
    width: 369px;

}

.AllII{
    font-family: Inter;
    font-weight: 700;
    line-height: 15px;
    color: black;
}

.AICLineII{
    width: 90%;
}

.AllIII{
top: 220px;
left: 18px;
border: 2px solid #186BAD;
width: 120px;

}

.AllIV{
    position: relative;
    right: 5px;
}

.AllV{
}

.sssrII{
    position: absolute;
    top: 170px;
    width:  100%;
    height: 32px;
    left: 10px;
    padding: 7px 7px 0px 7px;
    justify-content: space-between;
    background: #186BADCC;
    color: white;
    font-size: 12px;
    font-family: Poppins;
    font-weight: 500;
    line-height: 18px;
    text-align: left;
    margin-left: 5px;
    opacity: 1;
}

.columnI{
    opacity: 0;
}

.columnII{
    opacity: 1;
    position: relative;
    top: 230px;
    left: 90px;
    width: 100%;

}


.Send{
    font-family: Poppins;
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    color: #186BAD;
    position: absolute;
    top: 1px;
        z-index: 5;
        left: 250px;


}

.Moses {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    position: relative;
    right: 85px;
}

.Mathematics{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    position: relative;
    right: 65px;
}

.com{
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.5px;
    text-align: left;
}

.comContainer{
    position: relative;
    top: 3px;
    bottom: 0px;
    right: 50px;
}

.fullHr{
 border: #898A8B 2px solid;
 position: relative;
 top: 220px;
 width: 100%;
 left: 10px;
 opacity: 1;

}    
}

  </style>