<template>
    <NavPrincipal/>
 
  <router-view/>
</template>


<script>
import NavPrincipal from './components/NavPrincipal.vue';

export default{
  name:'App',

  components:{
    NavPrincipal
  }
}
</script>