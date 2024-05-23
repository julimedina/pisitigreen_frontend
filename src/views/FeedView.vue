<template>
<div class="row container">
    <div class=" col mt-5 mb-3 ms-5 container-perfil bg-light">
        
        <PerfilContainer/>

    </div> 
    <div class="col-sm-5 ms-3  mt-5 ">

        <div>
            <div class=" row-sm d-flex flex-column mb-3 container-publicacion bg-light ">
                <form action="" method="post" v-on:submit.prevent="submitForm">
                <div class="p-2 mt-5 d-flex justify-center">
                    <textarea v-model="body" class="form-control  ms-4 me-4"  placeholder="Qué estás pensando?" aria-label="With textarea" ></textarea>
                </div>
            
                <div class="row p-2">
                   <div class="col-sm ms-5 mb-3"><button type="button" class="btn btn-outline-primary ">Adjuntar imagen</button></div> 
                   <div class="col-sm  ms-5 mb-3"><button type="button" class="btn btn-outline-secondary ">Posts</button></div> 
                  
                </div> 
            </form> 
        </div>
    </div>


    <div class="d-flex flex-column mb-3 container-publicacion bg-light">
            <div class="row ">
                <div class=" col col-lg-2  ">
                    <img src="../assets/feed.jpg" class=" ms-3 mt-3 img-thumbnail img-min-perfil" alt="...">

                </div>
                <div class="col">
                    <strong><h1 class="md-auto mt-5">{{ post.created_by.name }}</h1></strong>
                </div>
                <div class="col">
                    <p class="mt-5 ms-5">hace {{ post.created_at_formatted }}</p>
                </div>
                
            </div> 
            <div class="row">
               
                <div class="col p-4" v-for="post in posts" v-bind:key >
                    {{ post.body }}
                </div>
                
            </div>

            

            <div class="row d-flex justify-start ms-3 mb-4">
                <div class="col-3">
                    <a href="#">
                        <span class="material-icons-outlined">
                        thumb_up
                    </span>
                    <p>
                        80 Likes

                    </p>
                    </a>
                    
                    
                </div>

                <div class="col-3 ">
                   <a href="#">
                    <span class="material-icons-outlined">
                        sms
                    </span>
                    <p>
                        0 comentarios

                    </p>
                   </a> 
                    
                </div>



            </div>

           
        </div>
        <div class="d-flex flex-column mb-3 container-publicacion bg-light">
            <div class="row ">
                <div class=" col col-lg-2  ">
                    <img src="../assets/feed.jpg" class=" ms-3 mt-3 img-thumbnail img-min-perfil" alt="...">

                </div>
                <div class="col">
                    <strong><h1 class="md-auto mt-5">Juliana Medina</h1></strong>
                </div>
                <div class="col">
                    <p class="mt-5 ms-5">Hace 18 minutos</p>
                </div>
                
            </div> 
            <div class="row">
               
                <div class="col p-4">
                    <img src="../assets/img1.png" class="img-fluid rounded" alt="...">
                </div>
                
            </div>

            

            <div class="row d-flex justify-start ms-3 mb-4">
                <div class="col-3">
                    <a href="#">
                        <span class="material-icons-outlined">
                        thumb_up
                    </span>
                    <p>
                        82 Likes

                    </p>
                    </a>
                    
                    
                </div>

                <div class="col-3 ">
                   <a href="#">
                    <span class="material-icons-outlined">
                        sms
                    </span>
                    <p>
                        0 comentarios

                    </p>
                   </a> 
                    
                </div>



            </div>

           
        </div>
   

    </div>
    


    <div class="col  mt-5">
        <PersonasQueQuizasConozcas />
        <TrendsContainer />

    </div>    
        
</div>

</template>

<script>
import axios from 'axios';
import PersonasQueQuizasConozcas from '../components/PersonasQueQuizaConozcas.vue';
import TrendsContainer from '../components/TrendsContainer.vue';
import PerfilContainer from '@/components/PerfilContainer.vue';
export default{
  name:'Feed',

  components:{
    PersonasQueQuizasConozcas,
    TrendsContainer,
    PerfilContainer
    
  },

  data() {
    return{
        posts:[],
        body:'',
    }
  },
  mounted(){
    this.getFeed()
  },
  methods:{
    getFeed(){
        axios
            .get('/api/posts/')
            .then(response =>{
                console.log('data', response.data)
                this.posts = response.data
            })
            .catch(error=>{
                console.log('error', error)
            })
    },
    submitForm(){
        console.log('submitForm', this.body)
        axios
        .post('/api/posts/create/',{
            'body': this.body
        })
        .then (response=>{
            console.log('data',response.data)
        })
        .catch(error=>{
            console.log('error',error)
        })
    }
  }
}

</script>


