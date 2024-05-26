<template>
    <div>
    <div class=" row-sm d-flex flex-column mb-3 container-publicacion bg-light">
        <div class="text-center mt-5">
            <strong>
                <h1>
                Personas que quizás conoces
            </h1>
            </strong>
            

        </div>
    
        <div class="row" v-for="user in users"
                v-bind:key="user.id">
            <div class="col"  >
                <img :src="user.get_avatar"  class=" ms-3 mt-3  rounded-full">

            </div>
            <div class="col mt-5">
                <strong>{{ user.name }}</strong>

            </div>

            <div class="col mt-5 mb-5 me-3">
                
                <RouterLink :to="{name: 'profile', params: {id: user.id}}"class="btn btn-outline-success ">Mostrar</RouterLink>

            </div>

        </div> 
</div>
</div>




</template>



<script>
import axios from 'axios'

export default {
  
   
    data() {
        return {
            users: []
        }
    },

    mounted() {
        this.getFriendSuggestions()
    },

    methods: {
        getFriendSuggestions() {
            axios
                .get('/api/friends/suggested/')
                .then(response => {
                    console.log(response.data)

                    this.users = response.data
                })
                .catch(error => {
                    console.log('error', error)
                })
        }
    }
}
</script>