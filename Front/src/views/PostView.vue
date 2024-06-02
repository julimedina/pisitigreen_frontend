<template>
  
    <div class="container mt-4 ms-4">
        <div class="row">
            <div class="col-lg-9 mb-4">
                <div v-if="post.id">
                    <!-- Componente FeedItem para mostrar el post -->
                    <FeedItem v-bind:post="post" />
                </div>

                <!-- Comentarios del post -->
                <div class="p-4 ms-6" v-for="comment in post.comments" v-bind:key="comment.id">
                    <!-- Componente CommentItem para mostrar cada comentario -->
                    <CommentItem v-bind:comment="comment" />
                </div>

                <!-- Formulario para agregar comentario -->
                <div>
                    <form v-on:submit.prevent="submitForm" method="post">
                        <div class="p-4">  
                            <textarea v-model="body" class="form-control ms-4 me-4" placeholder="¿Qué estás pensando?"></textarea>
                        </div>

                        <!-- Botón para enviar el comentario -->
                        <div class="p-4 border-top">
                            <button class="btn btn-success">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

            <!--  <div class="col-lg-3">
                <PersonasQueQuizaConozcas />
                <TrendsContainer />
            </div> -->
        </div>
    </div>
</template>


<script>

import FeedItem from '../components/FeedItem.vue'
import CommentItem from '../components/CommentItem.vue'
//import PersonasQueQuizaConozcas from '@/components/PersonasQueQuizaConozcas.vue'
//import TrendsContainer from '@/components/TrendsContainer.vue'

export default {
  
    name: 'PostView',

    components: {
        //PersonasQueQuizaConozcas,
        //TrendsContainer,
        FeedItem,
        CommentItem
    },
    // Datos locales
    data() {
        return {
            post: {
                id: null,
                comments: []
            },
            body: ''
        }
    },
    // Método ejecutado después de que la instancia haya sido creada
    mounted() {
        this.getPost()
    },
    // Métodos definidos en la vista
    methods: {
        // Método para obtener el post
        getPost() {
            this.$http
                .get(`/api/posts/${this.$route.params.id}/`)
                .then(response => {
                    console.log('data', response.data)
                    // Asignar los datos del post
                    this.post = response.data.post
                })
                .catch(error => {
                    console.log('error', error)
                })
        },
        // Método para enviar el formulario
        submitForm() {
            console.log('submitForm', this.body)
            // Enviar solicitud de comentario
            this.$http
                .post(`/api/posts/${this.$route.params.id}/comment/`, {
                    'body': this.body
                })
                .then(response => {
                    console.log('data', response.data)
                    // Agregar el comentario a la lista de comentarios del post
                    this.post.comments.push(response.data)
                    // Incrementar el contador de comentarios
                    this.post.comments_count += 1
                    // Reiniciar el cuerpo del comentario
                    this.body = ''
                })
                .catch(error => {
                    console.log('error', error)
                })
        }
    }
}
</script>
