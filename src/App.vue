<template>
    <NavPrincipal/>

  
  <router-view/>
  <Toast/>
  
</template>


<script>
import NavPrincipal from './components/NavPrincipal.vue';
import Toast from './components/Toast.vue'



export default{
  name:'App',

  components:{
    NavPrincipal,
    Toast
    
  }
}
</script>