<template>
  <div class="home">
    <div class="body">
      <NavBar />

      <div class="container text-center">
 
        <div class="row">
          <div class="col">
            <router-link class="ScreenOne" to="/ScreenOne">Screen One</router-link> 
          </div>
          <div class="col">
            <router-link class="ScreenTwo" to="/ScreenTwo">Screen Two</router-link> 
          </div>
          <div class="col">
            <router-link class="ScreenThree" to="/ScreenThree">Screen Three</router-link> 
          </div>
          <div class="col">
            <router-link class="ScreenFour" to="/ScreenFour">Screen Four</router-link> 
          </div>
          <div class="col">
            <router-link class="ScreenFive" to="/ScreenFive">Screen Five</router-link> 
          </div>
            <router-view></router-view>
        </div>  
        </div>
     
    </div>
  </div>
</template>


<script>
import NavBar from '../components/NavBar.vue'
export default {
  name: 'HomeView',
  components: {
    NavBar
  },
  data () {
    return {
    
    }
  },
 
    }
  
</script>


<style>
.container{
  position: absolute;
  top: 300px;
}



.ScreenOne{
  text-decoration: none;
  color: rgb(125, 168, 125);
  font-weight: bolder;
}

.ScreenTwo{
  text-decoration: none;
  color: rgb(125, 168, 125);
  font-weight: bolder;
}

.ScreenThree{
  text-decoration: none;
  color: rgb(125, 168, 125);
  font-weight: bolder;
}

.ScreenFour{
  text-decoration: none;
  color: rgb(125, 168, 125);
  font-weight: bolder;
}

.ScreenFive{
  text-decoration: none;
  color: rgb(125, 168, 125);
  font-weight: bolder;
}
</style>

    





<style>

</style>