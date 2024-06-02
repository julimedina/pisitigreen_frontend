<template>
   
    <div class="container mt-4">
        <div class="row">
         
            <div class="col-lg-9">
                <!-- Formulario de búsqueda -->
                <div class="bg-white border rounded-lg mb-4">
                    <form v-on:submit.prevent="submitForm" class="p-4 d-flex align-items-center">
                        <!-- Input de búsqueda -->
                        <input v-model="query" type="search" class="form-control bg-gray-100 rounded-lg flex-grow-1" placeholder="Qué estás buscando?">
                        <!-- Botón de búsqueda -->
                        <button class="btn btn-success ms-2">
                           
                            <span class="material-icons">search</span>
                        </button>
                    </form>
                </div>

                <!-- Resultados de búsqueda de usuarios -->
                <div class="row" v-if="users.length">
                    <div class="col" v-for="user in users" v-bind:key="user.id">
                        <!-- Detalles del usuario -->
                        <div class="bg-white border rounded-lg p-4 mb-4">
                            <!-- Avatar del usuario -->
                            <img :src="user.get_avatar" class="rounded-full mb-3">
                            <!-- Nombre del usuario -->
                            <p class="mb-0"><strong><RouterLink :to="{name: 'ProfileView', params:{'id': user.id}}">{{ user.name }}</RouterLink></strong></p>
                            <!-- Contadores de amigos y posts -->
                            <div class="mt-2 d-flex justify-content-between">
                                <p class="text-muted">Amigos: {{ user.friends_count }}</p>
                                <p class="text-muted">Posts: {{ user.posts_count }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Resultados de búsqueda de posts -->
                <div v-for="post in posts" v-bind:key="post.id">
                    <FeedItem v-bind:post="post" />
                </div>
            </div>

            <!-- Columna derecha (comentada) -->
            <!--
            <div class="col-lg-3">
                <PersonasQueQuizaConozcas />
                <TrendsContainer />
            </div>
            -->
        </div>
    </div>
</template>

<script>

//import PersonasQueQuizaConozcas from '../components/PersonasQueQuizaConozcas.vue'
//import TrendsContainer from '../components/TrendsContainer.vue'
import FeedItem from '../components/FeedItem.vue'
import axios from 'axios';

export default {
 
    name: 'SearchView',

    components: {
       // PersonasQueQuizaConozcas,
        //TrendsContainer,
        FeedItem,
    },
    // Datos locales del componente
    data() {
        return {
            query: '', // Consulta de búsqueda
            users: [], // Usuarios encontrados
            posts: [] // Posts encontrados
        }
    },
    // Métodos del componente
    methods: {
        // Método para enviar el formulario de búsqueda
        async submitForm() {
            console.log('submitForm', this.query);
            try {
                // Realizar solicitud de búsqueda al backend
                const response = await axios.post('/api/search/', { query: this.query });
                console.log('response:', response.data);
                // Actualizar resultados de usuarios y posts
                this.users = response.data.users;
                this.posts = response.data.posts;
            } catch (error) {
                console.error('Error during search:', error);
            }
        }
    }
}
</script>
