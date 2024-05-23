<template>
    <NavPrincipal/>

 
  <router-view/>
 
  <Toast/>
</template>


<script>
import axios from 'axios';
import NavPrincipal from './components/NavPrincipal.vue';
import Toast from './components/Toast.vue'
import { useUserStore } from './store/user';



export default{

  setup(){
    const userStore =useUserStore()
    return{
      userStore
    }
  },
  name:'App',

  components:{
    NavPrincipal,
    Toast
    
  },
  beforeCreate(){
    this.userStore.initStore()
    const token= this.useUserStore.user.access
    if (token){
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }else{
    axios.defaults.headers.common["Authorization"] = "";
  }
 }
}
</script>