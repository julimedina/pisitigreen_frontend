<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-lg-9 mb-4 ms-5">
                <!--Itera sobre las notificaciones y las muestra si hay alguna-->
                <div
                    class="p-4 mb-3 bg-white border rounded"
                    v-for="notification in notifications"
                    v-bind:key="notification.id"
                    v-if="notifications.length"
                >
                    {{ notification.body }}  <!-- Muestra el cuerpo de la notificación -->
                    <button class="btn btn-outline-success mt-2" @click="readNotification(notification)">Leer más</button><!-- Se llama al método readNotification y pasa la notificación específica como argumento al hacer click en el botón -->
                </div>

                <div
                    class="p-4 bg-white border rounded"
                    v-else
                >
                    No tienes ninguna notificación sin leer!
                </div>
            </div>
        </div>
    </div>
</template>


<script>


export default {
    name: 'NotificationsView',

    data() {
        return {
            notifications: []  // Array para almacenar las notificaciones
        }
    },

    mounted() {
        this.getNotifications()
    },

    methods: {

         // Método para obtener las notificaciones desde la API
        getNotifications() {
            this.$http
            // Realiza una solicitud GET a la API de notificaciones
                .get('/api/notifications/')
                .then(response => {
                    console.log(response.data)  // Muestra la respuesta de la API en la consola

                    this.notifications = response.data     // Almacena las notificaciones en el array
                })
                .catch(error => {
                    console.log('Error: ', error)  // Muestra el error en la consola si la solicitud falla
                })
        },
          // Método asíncrono para marcar una notificación como leída
        async readNotification(notification) {
            console.log('readNotification', notification.id)     // Muestra el ID de la notificación en la consola

            await  this.$http
                .post(`/api/notifications/read/${notification.id}/`) // Realiza una solicitud POST para marcar la notificación como leída
                .then(response => {
                    console.log(response.data)   // Muestra la respuesta de la API en la consola

                      // Redirige según el tipo de notificación
                      
                        // Redirige a la vista del post si la notificación es un me gusta o un comentario en un post
                    if (notification.type_of_notification == 'post_like' || notification.type_of_notification  == 'post_comment') {
                        this.$router.push({name: 'PostView', params: {id: notification.post_id}})
                    } else {
                        // Redirige a la vista de amigos si la notificación es de otro tipo
                        this.$router.push({name: 'FriendsView', params: {id: notification.created_for_id}})
                    }
                })
                .catch(error => {
                    console.log('Error: ', error)     // Muestra el error en la consola si la solicitud falla
                })
        }
    }
}
</script>
