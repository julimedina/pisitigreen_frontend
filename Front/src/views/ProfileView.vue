<template>
    <div class="container mt-4 mx-auto">
        <div class="row">
           
            <div class="col-lg-3 mb-4">
                <div class="p-4 bg-white border text-center rounded-lg">
                    <!-- Avatar del usuario -->
                    <img :src="user.get_avatar" class="mb-3 rounded-circle img-fluid" alt="Avatar">
                    <!-- Nombre del usuario -->
                    <p><strong>{{ user.name }}</strong></p>
                    <!-- Contador de amigos y posts -->
                    <div class="mt-3 d-flex justify-content-around" v-if="user.id">
                        <RouterLink :to="{name: 'FriendsView', params: {id: user.id}}" class="text-muted small">{{ user.friends_count }} Amigos</RouterLink>
                        <p>{{ user.posts_count }} posts</p>
                    </div>
                    <!-- Acciones del usuario -->
                    <div class="mt-3">
                        <!-- Editar perfil (visible solo si es el usuario actual) -->
                        <RouterLink class="btn btn-success me-2" to="/Profile/edit" v-if="userStore.user.id === user.id">
                            Editar perfil
                        </RouterLink>
                        <!-- Enviar solicitud de amistad (visible solo si no es el usuario actual)  -->
                        <button class="btn btn-primary" @click="sendFriendshipRequest" v-if="userStore.user.id !== user.id && can_send_friendship_request">
                            Enviar solicitud
                        </button>
                        <!-- Cerrar sesión (visible solo si es el usuario actual) -->
                        <button class="btn btn-info mt-2" @click="logout" v-if="userStore.user.id === user.id">
                            Cerrar sesión
                        </button>
                    </div>
                </div>
            </div>

            <!-- Columna central -->
            <div class="col-lg-6">
                <!-- Formulario para crear un nuevo post (visible solo si es el usuario actual) -->
                <div v-if="userStore.user.id === user.id" class="mb-4">
                    <FeedForm v-bind:user="user" v-bind:posts="posts" />
                </div>
                <!-- Lista de posts -->
                <div class="mb-3" v-for="post in posts" v-bind:key="post.id">
                    <FeedItem v-bind:post="post" v-on:deletePost="deletePost"/>
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


<style>
/* Estilos para el input tipo archivo */
input[type="file"] {
    display: none;
}


</style>

<script>

//import PersonasQueQuizaConozcas from '../components/PersonasQueQuizaConozcas.vue'
//import TrendsContainer from '../components/TrendsContainer.vue'
import FeedItem from '../components/FeedItem.vue'
import FeedForm from '../components/FeedForm.vue'
import { useUserStore } from '@/store/user'
import { useToastStore } from '@/store/toast'

export default {
  
    name: 'ProfileView',
    // Props recibidos
    props: ['id'],
    // Configuración del componente
    setup() {
        // Uso de las tiendas de usuario y toasts
        const userStore = useUserStore()
        const toastStore = useToastStore()

        return {
            userStore,
            toastStore
        }
    },
 
    components: {
        //PersonasQueQuizaConozcas,
        //TrendsContainer,
        FeedItem,
        FeedForm
    },
    // Datos locales del componente
    data() {
        return {
            posts: [],
            user: {},
            can_send_friendship_request: null,
        }
    },
    // Método ejecutado después de que la instancia haya sido creada
    mounted() {
        this.getFeed()
    },
    // Vigilancia de cambios en los parámetros de la ruta
    watch: { 
        '$route.params.id': {
            handler: function() {
                this.getFeed()
            },
            deep: true,
            immediate: true
        }
    },
    // Métodos del componente
    methods: {
        // Método para eliminar un post
        deletePost(id) {
            this.posts = this.posts.filter(post => post.id !== id)
        },
        // Método para enviar solicitud de amistad
        sendFriendshipRequest() {
            this.$http
                .post(`/api/friends/${this.$route.params.id}/request/`)
                .then(response => {
                    console.log('data', response.data)

                    this.can_send_friendship_request = false

                    if (response.data.message == 'request already sent') {
                        this.toastStore.showToast(5000, 'La solicitud ha sido enviada!', 'bg-red-300')
                    } else {
                        this.toastStore.showToast(5000, 'La solicitud  no fue enviada!', 'bg-emerald-300')
                    }
                })
                .catch(error => {
                    console.log('error', error)
                })
        },
        // Método para obtener los posts del feed
        getFeed() {
            this.$http
                .get(`/api/posts/profile/${this.$route.params.id}/`)
                .then(response => {
                    console.log('data', response.data)

                    this.posts = response.data.posts
                    this.user = response.data.user
                    this.can_send_friendship_request = response.data.can_send_friendship_request
                })
                .catch(error => {
                    console.log('error', error)
                })
        },
        // Método para cerrar sesión
        logout() {
            console.log('Log out')

            this.userStore.removeToken()

            this.$router.push('/')
        }
    }
}
</script>
