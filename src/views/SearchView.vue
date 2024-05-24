<template>
    <div class="row container ">
        
        <div class="col-8 ">

            <div>
                <div class="row mt-5 ms-5  me-4 container-publicacion text-center bg-light">
                    <form v-on:submit.prevent="submitForm">
                    <div class="col p-2 mt-3 mb-3 d-flex justify-center">
                        <input v-model="query" type="search" class="form-control  ms-4 me-4"  placeholder="Qué estás buscando?" aria-label="With textarea" >
                     </div>
                     <div class="col mb-4"> <button class="btn btn-primary"><span class="material-icons">
                            search
                            </span></button></div>
                    </form> 
                </div>
            </div>

            <div>

                <div class="row mt-5 ms-5  me-4 container-publicacion text-center bg-light" v-if="users.length">
                    <div class="row">
                        <div v-for="user in users " v-bind="key='user.id'">
                            <div class="d-flex flex-column mb-3 ">
                <div class="p-2 d-flex justify-center">
                    <img :src="user.get_avatar" class="rounded-full">

                </div>
                <div class="p-2 d-flex justify-center">
                    <p>
                        <strong>   <router-link :to="{name: 'profile', params:{'id': user.id}}"> {{ user.name }}</router-link></strong>
                    </p>

                </div>
                <div class="p-2 d-flex justify-content-evenly">
                   <p>
                    {{ user.friends_count }} Amigos
                   </p>
                   <p>
                    {{ user.posts_count }} posts
                   </p> 
                </div>
          </div>

                        </div>
                       
                   </div>
                        

                </div>
                    
            </div>

            <div>
                <div 
                class="p-4 bg-white border border-gray-200 rounded-lg"
                v-for="post in posts"
                v-bind:key="post.id"
            >
                <FeedItem v-bind:post="post" />
            </div>
            </div>
                
                
            
        </div>
        
        <div class="col-4 mt-5 ">
        
            <PersonasQueQuizaConozcas/>
            <TrendsContainer/>
      
  


        </div>
        
</div>

   
</template>

<script>
import axios from 'axios';
import PersonasQueQuizaConozcas from '@/components/PersonasQueQuizaConozcas.vue';
import TrendsContainer from '../components/TrendsContainer.vue';
import FeedItem from '@/components/FeedItem.vue';


export default{
  name:'Search',

  components:{
  
    TrendsContainer,
    PersonasQueQuizaConozcas,
    FeedItem
    
  },
  data (){

    return{
        query:'',
        users: [],
        posts: []
    }
  },
  methods: {
        submitForm() {
            console.log('submitForm', this.query)

            axios
                .post('/api/search/', {
                    query: this.query
                })
                .then(response => {
                    console.log('response:', response.data)

                    this.users = response.data.users
                    this.posts = response.data.posts
                })
                .catch(error => {
                    console.log('error:', error)
                })
        }
    }
}




</script>
