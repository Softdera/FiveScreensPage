<template>

  

    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand  " href="#"> </a>
       
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active prolife" aria-current="page" href="#">
            <i class="fa-solid fa-layer-group " style="color: #63E6BE;"></i>
            PROLIFERATE
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <input type="text"
        class="searchQuery"
        v-model="searchQuery"
        placeholder="Search">
        <i class="fa-solid fa-magnifying-glass"></i>

          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fa-solid fa-ticket"></i>

          </a>
        </li> 
        
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fa-regular fa-envelope"></i>
            <span class="status-dottttt"></span>


          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fa-regular fa-bell"></i>
            <span class="status-dotttt"></span>


          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fa-regular fa-comment"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fa-solid fa-gear"></i>
          </a>
        </li>
        <li class="nav-item userList"><a class="nav-link" href="#"> 
            <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                        alt='user_image'
                        class='user' />
                        <span class="status-dottt"></span>

                        <i class="fa-solid fa-angle-down"></i>

                    </a></li>  
      </ul>
    </div>
  </div>
<div class="MobileNav">
<i class="fa-regular fa-bell mobileBell"></i>
<span class="status-dot"></span>


<i class="fa-solid fa-user"></i>
<span class="status-dott"></span>

  <i class="fa-solid fa-angle-down MobileAngle"></i>
</div>
</nav>



  
</template>

<script>

export default {
    name: 'NavBar',

}
</script>

<style>

nav{
    width: 100%;
    height: 91.42px;
    background-color: #FFFFFF;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    border: grey;
  }



ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center; /* Aligning the list items horizontally */
}

li {
  display: inline-block; /* Displaying list items horizontally */
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.userMobile{
    display: none;
    opacity: 0;

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

.status-dottt{
    width: 5px;
  height: 5px;
  background-color: #00ff00; 
  border-radius: 50%;
  margin-right: 5px;
  position: absolute;
  left: 1405px;
  top: 62px
}


.status-dotttt{
    width: 5px;
  height: 5px;
  background-color: #00ff00; 
  border-radius: 50%;
  margin-right: 5px;
  position: absolute;
  left: 1242px;
  top: 48px
}


.status-dottttt{
    width: 5px;
  height: 5px;
  background-color: red; 
  border-radius: 50%;
  margin-right: 5px;
  position: absolute;
  left: 1188px;
  top: 48px
}


.prolife{
        width: 259px;
        height: 58.77px;
        position: absolute;
        top: 18px;
        left: 22px;
        font-weight: bolder;

}

.fa-magnifying-glass{
    position: absolute;
    top: 38.85px;
    left: 595px;
    font-size: 16px;
}

.searchQuery{
    width: 455px;
    height: 37.31px;
    position: absolute;
    top: 29.85px;
    left: 570px;
    border-radius: 50px;
    border: 1px 0px 0px 0px;

}

.searchQuery::placeholder{
    position: relative;
    left: 50px;
    width: 44px;
    font-size: 14px;

}


.fa-ticket{
    width: 20px;
    height: 17.47px;
    position: absolute;
    top: 45.05px;
    left: 1113px;
    border: 1.5px 0px 0px 0px;
}

.fa-envelope{
    width: 33px;
    height: 14.94px;
    position: absolute;
    left: 1166px;
    top: 45.05px;
}

.fa-bell{
    width: 23px;
    height: 20.09px;
    position: absolute;
    top: 45.05px;
    left: 1229px;
}

.fa-gear{
    width: 22.17px;
    height: 17.94px;
    position: absolute;
    left: 1282px;
    top: 45.05px;
}

.fa-comment{
    width: 20.84px;
    height: 17.08px;
    position: absolute;
    top: 45.05px;
    left: 1334px;


}

.us{
    width: 53px;
    height: 31.72px;
    position: absolute;
   


}


.user{
    height: 25px;
    position: absolute;
    font-size: 10px;
    margin-right: 30px;
    left: 1385px;
    top: 43.05px;
}

.fa-angle-down{
    position: absolute;
    font-size: 9px;
    left: 1410px;
    top: 50.05px;
 
}

.fa-layer-group{
    font-size: 20px;
}


@media screen and (max-width: 600px) {


nav{
    box-shadow: none;
    border-bottom: 0.5px solid black;
    width: 100%;
    height: 83px;
    padding: 32px 24px 15px 24px;
    gap: 10px;
    border-radius: 0%;
}

.navbar-toggler-icon{
    width: 36px;
    height: 36px;
    padding: 11.14px 7.71px 11.14px 7.71px;
    position: relative;
    bottom: 2.14px;
    right: 9.71px;
    border: 1.14px;
}

.navbar-toggler{
    width: 36px;
    height: 36px;
    padding: 11.14px 7.71px 11.14px 7.71px;
    position: absolute;
    top: 27.14px;
    left: 25.71px;
    border: 1.14px;
    
}


.userMobile{
    left: 426px;
    z-index: 2;
    height: 25px;
    position: absolute;
    font-size: 10px;
    margin-right: 30px;
    opacity: 1;
    display:contents;
}
    
.mobileBell{
    
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


.fa-bars{
    opacity: 0;
}


.MobileNav{
    width: 200px;
    position: relative;
    left: 330px;
    margin-right: 10px;
    gap: 5px;
}




}
</style>
