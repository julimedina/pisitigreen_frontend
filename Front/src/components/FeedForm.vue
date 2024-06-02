<template>
   
    <form v-on:submit.prevent="submitForm" method="post"> <!-- Se captura el evento de submit y previene el comportamiento por defecto -->
        <div class="p-4">
            <!-- Se enlaza  la propiedad 'body' del componente -->
            <textarea v-model="body" class="p-4 w-full bg-gray-100 rounded-lg" placeholder="Que estás pensando?"></textarea>

            <!-- Se enlaza la propiedad 'is_private' del componente -->
            <label>
                <input type="checkbox" v-model="is_private"> Privado
            </label>

            <!-- Vista previa de la imagen, si 'url' tiene valor -->
            <div id="preview" v-if="url">
                <img :src="url" class="w-[100px] mt-3 rounded-xl" />
            </div>
        </div>

      
        <div class="p-4 border-t border-gray-100 flex justify-between">
           
            <label class="inline-block py-4 px-6 bg-green-700 text-white rounded-lg">
                <input type="file" ref="file" @change="onFileChange">
                Imagen
            </label>

          
            <button class="inline-block py-4 px-6 bg-teal-500 text-white rounded-lg">Post</button>
        </div>
    </form>
</template>

<script>
export default {
 
    name: 'FeedForm',
    // Propiedades recibidas del componente padre
    props: {
        user: Object, // Información del usuario
        posts: Array // Lista de publicaciones
    },

    // Datos locales del componente
    data() {
        return {
            body: '', // Contenido del post
            is_private: false, // Indica si el post es privado
            url: null, // URL de la imagen seleccionada
        }
    },

  
    methods: {
        // Método para enviar el formulario
        submitForm() {
            console.log('submitForm', this.body);

            // Creamos un objeto FormData para enviar los datos
            let formData = new FormData();
            // Añadimos la imagen seleccionada al FormData
            formData.append('image', this.$refs.file.files[0]);
            // Añadimos el contenido del post al FormData
            formData.append('body', this.body);
            // Añadimos la privacidad del post al FormData
            formData.append('is_private', this.is_private);

            // Hacemos una solicitud POST para crear un nuevo post
            this.$http
                .post('/api/posts/create/', formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                })
                // Manejo de la respuesta exitosa
                .then(response => {
                    console.log('data', response.data);

                    // Añadimos el nuevo post al inicio de la lista de posts
                    this.posts.unshift(response.data);
                    // Reseteamos los datos del formulario
                    this.body = '';
                    this.is_private = false;
                    this.$refs.file.value = null;
                    this.url = null;

                    // Incrementamos el contador de posts del usuario
                    if (this.user) {
                        this.user.posts_count += 1;
                    }
                })
                // Manejo de errores
                .catch(error => {
                    console.log('error', error);
                })
        },

        // Método para manejar el cambio de archivo
        onFileChange(event) {
            // Leemos el archivo seleccionado
            const file = event.target.files[0];
            if (file) {
                // Creamos una URL para la vista previa de la imagen
                this.url = URL.createObjectURL(file);
            } else {
                this.url = null;
            }
        },
    }
}
</script>
