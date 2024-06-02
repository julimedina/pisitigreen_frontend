<template>
   
    <div class="ms-4 mt-4 grid grid-cols-4 gap-4">
     
        <div class="main-left col-span-3 space-y-4">
        
            <div class="bg-white border border-gray-200 rounded-lg">
                <!-- Formulario de búsqueda -->
                <form v-on:submit.prevent="submitForm" class="p-4 flex space-x-4">  
                    <!-- Input de búsqueda -->
                    <input v-model="query" type="search" class="p-4 w-full bg-gray-100 rounded-lg" placeholder="Qué estás buscando?">
                    <!-- Botón de búsqueda -->
                    <button class="inline-block py-4 px-6 bg-green-700 text-white rounded-lg">
                        <!-- Ícono de búsqueda -->
                        <span class="material-icons">
                            search
                        </span>
                    </button>
                </form>
            </div>

            <!-- Resultados de búsqueda de usuarios -->
            <div class="p-4 bg-white border border-gray-200 rounded-lg grid grid-cols-4 gap-4" v-if="users.length">
                <div class="p-4 text-center bg-gray-100 rounded-lg" v-for="user in users" v-bind:key="user.id">
                    <!-- Avatar del usuario -->
                    <img :src="user.get_avatar" class="mb-6 rounded-full">
                    <!-- Nombre del usuario -->
                    <p><strong><RouterLink :to="{name: 'ProfileView', params:{'id': user.id}}">{{ user.name }}</RouterLink></strong></p>
                    <!-- Contadores de amigos y posts -->
                    <div class="mt-6 flex space-x-8 justify-around">
                        <p class="text-xs text-gray-500">{{ user.friends_count }} Amigos</p>
                        <p class="text-xs text-gray-500">{{ user.posts_count }} Posts</p>
                    </div>
                </div>
            </div>

            <!-- Resultados de búsqueda de posts -->
            <div class="p-4 bg-white border border-gray-200 rounded-lg" v-for="post in posts" v-bind:key="post.id">
                <FeedItem v-bind:post="post" />
            </div>
        </div>

      
        <!--<div class="main-right col-span-1 space-y-4">
            <PersonasQueQuizaConozcas />
            <TrendsContainer />
        </div>-->
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
