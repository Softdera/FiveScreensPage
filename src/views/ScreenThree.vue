<template>
        <div class="ScreenThreeContainer text-center">
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
                    <button class="Coming">
                        Add New
                    </button>
                    <button class="ManageS">
                        Manage 
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
                        <h2 class="Add">Assignment | Add</h2>
                        <h2 class="AddII">Assignments</h2>
                        <hr class="line">
                        <div class="whiteSideContainer text-center">
                            <div class="row">
                                <div class="col ClassesContainer">
                                    <div class="container NewAdds text-center">
                                        <div class="row">
                                            <div class="col NewCol">
                                                Add New
                                                <hr class="AddLine">
                                            </div>
                                            <div class="col EvaluateCol">
                                                Evaluate
                                            </div>
                                            </div>
                                        </div>
                                    <div class="left-side">
          <form @submit.prevent="createSubmit()">
            <div class="input-icons">
                <i class="fa-solid fa-angle-down"></i>
              <label>Select Student: </label>
            <input  type="text" required v-model="Student" class="input-field" placeholder="" >

          </div>


            <div>
            <label>Assignment Title:</label>
            <i class="fa-solid fa-angle-down I"></i>

            <input type="text" required v-model="Assignment" class="input-field"  placeholder="">

            </div>

            <div>
            <label>Due Date:</label>
            <i class="fa-solid fa-angle-down II"></i>

            <input type="text" class="input-field" required v-model="Date" placeholder="">

            </div>

            <div>
            <label>Decription:</label>
            <input type="text" class="input-field" required v-model="Decription" placeholder="">

            </div>

            <div>
            <label>Subject:</label>
            <i class="fa-solid fa-angle-down III"></i>

            <input type="text" class="input-field" required v-model="Subject" placeholder="">

            </div>

            <div>
            <label>Grade Level:</label>
            <i class="fa-solid fa-angle-down IV"></i>
            <input type="text" class="input-field" required v-model="Grade" placeholder="">

            </div>

            <div>
            <label class="Upload">Upload Document:</label>
            <img src="../assets/dropImg.png" class="dropImg" alt="dropImg" />
           <div class="uploadImages"> 
            <i class="fa-solid fa-images"></i>
            <p class="ClickText"> Click to upload document/file</p>
           </div>
        </div>

            <button  required class="Send" >
                Send Assignment
            </button>
            <i class="fa-solid fa-angle-right V"></i>

           
          </form>
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
  name: 'ScreenThree',
  components: {
    NavBar
  },
  data () {
    return {
    Student: '',
    Assignment: '',
    Date: '',
      Decription: '',
      Subject: '',
      Grade:  '',
      //accept: false,
    }
  },
  //submitting thus form
  methods: {
    createSubmit() {
     
      console.log('Student: ', this.Student);
      console.log('Assignment: ', this.Assignment);
      console.log('Date: ', this.Date);
      console.log('Decription: ', this.Decription);
      console.log('Subject: ', this.Subject);
      console.log('Grade: ', this.Grade);

    }
  }
}
  </script>
  
  <style scoped>
  .ScreenThreeContainer{
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
    top: 226px;
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


  .whiteSideContainer{
    width: 1200px;
    position: absolute;
    top: 222px;
    left: 230px;
  }

  .line{
    width: 1200px;
    border-top: 1px solid #969696;
    position: absolute;
    left: 230px;
    top: 222px; 
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

  .Add{
    position: absolute;
     width: 300px;
    height: 39px;
    top: 133px;
    left: 225px;
    font-weight: 600;
    font-size: 20px;
  }

  .AddII{
    opacity: 0;
  }

  .input-field{
    width:  406px;
    height: 35px;
    position: relative;
    right: 260px;


  }

  .fa-angle-down{
    position: absolute;
    left: 580px;
    top: 10px;
    z-index: 1;
    font-size: 15px;
  }
 .I{
    position: absolute;
    left: 580px;
    top: 60px;
    z-index: 1;
    font-size: 15px;
 }
 .II{
    position: absolute;
    left: 580px;
    top: 115px;
    z-index: 1;
    font-size: 15px;
 }
 .III{
    position: absolute;
    left: 580px;
    top: 220px;
    z-index: 1;
    font-size: 15px;
 }
 .IV{
    position: absolute;
    left: 580px;
    top: 275px;
    z-index: 1;
    font-size: 15px;
 }

 .Send{
    width:  147px;
    height:  39px;
    position: relative;
    right: 180px;
    bottom: 10px;
    color: #FFFFFF;
    background: var(--Colors-hover, #186BAD);
    padding: 10px;
    gap: 10px;
    border: none;
    border-radius: 10px;
 }


  form{
    position: relative;
    top: 50px;
  }

  label {width: 165px;
    text-align: left;
    height: 48px;
    position: relative;
    right: 260px;
    gap: 13px;
}

.Upload{
    position: relative;
    right: 255px;
}

.dropImg{
    position: relative;
    right: 260px;
    width: 420px;
    height: 102px;

}

.fa-bars{
    position: absolute;
    right: 1080px;
    top: 35px;
}

.NewAdds, .uploadImages, .V{
    opacity: 0;
}




@media screen and (max-width: 600px) {

    .ScreenThreeContainer{
        width: 100%;
        height: 1414px;
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

  
  .Add{
    display: none;
  }

  .AddII{
    opacity: 1;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    line-height: 19.5px;
    text-align: left;
    position: absolute;
    top: 35px;
    left: 80px;

  }

  .NewAdds{
    opacity: 1;
    width: 100%;
    position: absolute;
    top: 35px;
    gap: 138px;
  }

  .AddLine{
    border: 2px solid #186BAD;
    width: 260px;
    position: relative;
    right: 13px;
    top: 4px;
    }

    .NewCol{
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 15px;

    }

    .EvaluateCol{
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 15px;
    }

    form{
    position: relative;
    top: 80px;
    left: 330px;
    width: 400px;
  }

  .fa-angle-down{
    position: absolute;
    left: 80px;
    top: 110px;
    z-index: 1;
    font-size: 18px;
  }
 .I{
    position: absolute;
    left: 80px;
    top: 730px;
    z-index: 1;
    font-size: 18px;
 }
 .II{
    position: absolute;
    left: 80px;
    top: 415px;
    z-index: 1;
    font-size: 18px;
 }
 .III{
    position: absolute;
    left: 80px;
    top: 880px;
    z-index: 1;
    font-size: 18px;
 }
 .IV{
    position: absolute;
    left: 80px;
    top: 260px;
    z-index: 1;
    font-size: 18px;
 }

 label{
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    position: relative;
    right: 380px;
    margin-top: 40px;
 }


.Upload{
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    text-align: left;
    position: relative;
    right: 380px;
}


 .input-field{
    width:  100%;
    height: 67px;
    border: 1px solid #CCCCCC;
    border-radius: 8px;

  }

  .dropImg{
   display: none;
}

.uploadImages{
    opacity: 1;
    width: 400px;
    height: 100px;
    border-radius: 10px;
    border: 1px;
    background: #ECF0FA;
    border: 1px dotted #0162E8;
    position: relative;
    right: 260px;
    padding-top: 20px;
}

.fa-images{
    color: #0162E8;
    font-size: 30px;
    margin-bottom: 20px;
}

.ClickText{
    color: #0162E8;
    text-decoration: underline #0162E8;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 600;
    line-height: 17.07px;
    text-align: center;
}


.Send{
    width:  400px;
    height:  59px;
    position: relative;
    right: 260px;
    top: 30px;
    bottom: 10px;
    color: #FFFFFF;
    background: var(--Colors-hover, #186BAD);
    padding: 10px;
    gap: 10px;
    border: none;
    border-radius: 10px;
 }

 .V{ opacity: 1;
    position: relative;
    color: #FFFFFF;
    right: 100px;
    font-size: 16px;
    bottom: 10px;
}







    
}











  </style>