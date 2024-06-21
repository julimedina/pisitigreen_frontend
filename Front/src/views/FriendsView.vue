<template>
    <div class="container mt-4">
        <div class="row">
            <!-- Columna izquierda -->
            <div class="col-md-3">
                <div class="p-4">
                    <!-- Avatar del usuario -->
                    <img :src="user.get_avatar" class="mb-3 rounded-circle img-fluid"> 

                    <!-- Nombre del usuario -->
                    <p><strong>{{ user.name }}</strong></p>

                    <!-- Contador de amigos y posts -->
                    <div class="mt-4 d-flex justify-content-between">
                        <p>{{ user.friends_count }} Amigos</p>
                        <p>{{ user.posts_count }} Posts</p>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <!-- Solicitudes de amistad -->
                <div class="p-4 bg-white border rounded mb-4" v-if="friendshipRequests.length">
                    <h2 class="mb-4">Solicitudes de Amistad</h2>

                    <!-- Itera sobre las solicitudes de amistad -->
                    <div class="p-4 text-center bg-light rounded mb-3" v-for="friendshipRequest in friendshipRequests" v-bind:key="friendshipRequest.id">
                        <!-- Avatar y nombre del solicitante -->
                        <img :src="friendshipRequest.created_by.get_avatar" class="mb-3 mx-auto rounded-circle img-fluid">
                        <p><strong><RouterLink :to="{name: 'ProfileView', params:{'id': friendshipRequest.created_by.id}}">{{ friendshipRequest.created_by.name }}</RouterLink></strong></p>

                        <!-- Contador de amigos y posts del solicitante -->
                        <div class="mt-4 d-flex justify-content-between">
                            <p>{{ user.friends_count }} Amigos</p>
                            <p>{{ user.posts_count }} Posts</p>
                        </div>

                    
                        <div class="mt-4 d-flex justify-content-around">
                            <button class="btn btn-outline-success" @click="handleRequest('accepted', friendshipRequest.created_by.id)">Aceptar</button>
                            <button class="btn btn-outline-danger" @click="handleRequest('rejected', friendshipRequest.created_by.id)">Cancelar</button>
                        </div>
                    </div>

                    <hr>
                </div>

                <!-- Lista de amigos -->
                <div class="p-4 bg-white border rounded mb-4" v-if="friends.length">
                    <div class="row">
                        <!-- Itera sobre la lista de amigos -->
                        <div class="col-md-6 p-2 text-center bg-light rounded mb-3" v-for="user in friends" v-bind:key="user.id">
                            <!-- Avatar y nombre del amigo -->
                            <img :src="user.get_avatar" class="mb-3 rounded-circle img-fluid">
                            <p><strong><RouterLink :to="{name: 'ProfileView', params:{'id': user.id}}">{{ user.name }}</RouterLink></strong></p>

                            <!-- Contador de amigos y posts del amigo -->
                            <div class="d-flex justify-content-between">
                                <p>{{ user.friends_count }} Amigos</p>
                                <p>{{ user.posts_count }} Posts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--<div class="col-md-3">
                <PersonasQueQuizaConozcas />
                <TrendsContainer />
            </div>-->
        </div>
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
                .post(`/api/friends/${pk}/${status}/`) // Realiza una solicitud POST a la URL  junto con el ID del usuario (pk) y el estado de la solicitud
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
