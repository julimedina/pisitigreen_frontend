<template>
 
    <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4">
     
        <div class="main-left col-span-1">
          
            <div class="p-4 ">
                <!-- Avatar del usuario -->
                <img :src="user.get_avatar" class="mb-6 rounded-full"> 
                
                <!-- Nombre del usuario -->
                <p><strong>{{ user.name }}</strong></p>

                <!-- Contador de amigos y posts -->
                <div class="mt-6 flex space-x-8 justify-around">
                    <p>{{ user.friends_count }} Amigos</p>
                    <p>{{ user.posts_count }} Posts</p>
                </div>
            </div>
        </div>

        <!-- Columna central -->
        <div class="main-center col-span-2 space-y-4">
            <!-- Solicitudes de amistad -->
            <div class="p-4 bg-white border border-gray-200 rounded-lg" v-if="friendshipRequests.length">
                <h2 class="mb-6">Solicitudes de Amistad</h2>

                <!-- Itera sobre las solicitudes de amistad -->
                <div class="p-4 text-center bg-gray-100 rounded-lg" v-for="friendshipRequest in friendshipRequests" v-bind:key="friendshipRequest.id">
                    <!-- Avatar y nombre del solicitante -->
                    <img :src="friendshipRequest.created_by.get_avatar" class="mb-6 mx-auto rounded-full">
                    <p><strong><RouterLink :to="{name: 'ProfileView', params:{id: friendshipRequest.created_by.id}}">{{ friendshipRequest.created_by.name }}</RouterLink></strong></p>

                    <!-- Contador de amigos y posts del solicitante -->
                    <div class="mt-6 flex space-x-8 justify-around">
                        <p>{{ user.friends_count }} Amigos</p>
                        <p>{{ user.posts_count }} Posts</p>
                    </div>

                    <!-- Botones para aceptar o rechazar la solicitud -->
                    <div class="mt-6 space-x-4">
                        <button class="inline-block py-4 px-6 btn btn-outline-success" @click="handleRequest('accepted', friendshipRequest.created_by.id)">Aceptar</button>
                        <button class="inline-block py-4 px-6 btn btn-outline-danger" @click="handleRequest('rejected', friendshipRequest.created_by.id)">Cancelar</button>
                    </div>
                </div>

                <hr>
            </div>

            <!-- Lista de amigos -->
            <div class="p-4 bg-white border border-gray-200 rounded-lg grid grid-cols-2 gap-4" v-if="friends.length">
                <!-- Itera sobre la lista de amigos -->
                <div class="p-4 text-center bg-gray-100 rounded-lg" v-for="user in friends" v-bind:key="user.id">
                    <!-- Avatar y nombre del amigo -->
                    <img :src="user.get_avatar" class="mb-6 rounded-full">
                    <p><strong><RouterLink :to="{name: 'ProfileView', params:{id: user.id}}">{{ user.name }}</RouterLink></strong></p>

                    <!-- Contador de amigos y posts del amigo -->
                    <div class="p-2 d-flex justify-content-evenly">
                        <p>{{ user.friends_count }} Amigos</p>
                        <p>{{ user.posts_count }} posts</p> 
                    </div>
                </div>
            </div>
        </div>

       
        <!--<div class="main-right col-span-1 space-y-4">
            <PersonasQueQuizaConozcas />
            <TrendsContainer />
        </div>-->
    </div>
</template>

<script>

import { useUserStore } from '@/store/user'
//import PersonasQueQuizaConozcas from '../components/PersonasQueQuizaConozcas.vue'
//import TrendsContainer from '@/components/TrendsContainer.vue'


export default {
 
    name: 'FriendsView',

    
    setup() {//Función de configuración del componente en el Composition API de Vue 3
        // Uso del store de usuario
        const userStore = useUserStore()

        // Retorna el estado local de la vista
        return {
            userStore
        }
    },

 
   // components: {
   //    PersonasQueQuizaConozcas,
   //    TrendsContainer,
   //},

   // Datos locales de la vista
    data() {
        // Retorna los datos locales iniciales de la vista
        return {
            user: {}, // Objeto de usuario
            friendshipRequests: [], // Lista de solicitudes de amistad
            friends: [] // Lista de amigos
        }
    },

    // Método ejecutado después de que la instancia haya sido creada
    mounted() {
        // Llama al método para obtener la lista de amigos
        this.getFriends()
    },

    // Métodos definidos en la vista
    methods: {
        // Método para obtener la lista de amigos
        getFriends() {
            // Realiza una solicitud GET para obtener la lista de amigos y solicitudes de amistad
            this.$http
                .get(`/api/friends/${this.$route.params.id}/`)
                .then(response => {
                    // Loguea la respuesta del servidor
                    console.log('data', response.data)

                    // Actualiza las solicitudes de amistad y la lista de amigos con la respuesta del servidor
                    this.friendshipRequests = response.data.requests
                    this.friends = response.data.friends
                    this.user = response.data.user
                })
                .catch(error => {
                    // Manejo de errores en caso de falla en la solicitud GET
                    console.log('error', error)
                })
        },

        // Método para manejar las solicitudes de amistad
        handleRequest(status, pk) {
            // Loguea el estado de la solicitud de amistad
            console.log('handleRequest', status)

            // Realiza una solicitud POST para manejar la solicitud de amistad (aceptar o rechazar)
            this.$http
                .post(`/api/friends/${pk}/${status}/`)
                .then(response => {
                    // Loguea la respuesta del servidor
                    console.log('data', response.data)
                })
                .catch(error => {
                    // Manejo de errores en caso de falla en la solicitud POST
                    console.log('error', error)
                })
        }
    }
}
</script>
