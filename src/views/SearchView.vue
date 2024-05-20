<template>
    <div class="row container ">
        <div class="col-8 ">

            <div>
                <div class="row mt-5 ms-5  me-4 container-publicacion text-center bg-light">
                    <div class="p-2 mt-3 mb-3 d-flex justify-center">
                        <textarea class="form-control  ms-4 me-4"  placeholder="Qué estás buscando?" aria-label="With textarea" ></textarea>
                     </div>
                </div>
            </div>

            <div>

                <div class="row mt-5 ms-5  me-4 container-publicacion text-center bg-light">
                    <div class="row">
                        <div class="col p-2 mt-5 d-flex justify-center">
                            
                            <PerfilContainer/>
                         </div>
                         <div class="col p-2 mt-5 d-flex justify-center">
                            <PerfilContainer/>
                         </div>
                         <div class="col p-2 mt-5 d-flex justify-center">
                            <PerfilContainer/>
                         </div>
                   </div>
                        

                </div>
                    
            </div>
                
                
            
        </div>
        
        <div class="col-4 mt-5 ">

            <TrendsContainer/>
      
  


        </div>
        
</div>

   
</template>

<script>
import TrendsContainer from '../components/TrendsContainer.vue';
import PerfilContainer from '@/components/PerfilContainer.vue';
export default{
  name:'Search',

  components:{
  
    TrendsContainer,
    PerfilContainer
    
  }
}


</script>
