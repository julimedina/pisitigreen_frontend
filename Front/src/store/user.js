import { defineStore } from "pinia"; // Importa la función `defineStore` desde la librería Pinia, que se utiliza para definir una tienda (store) en Pinia.
import axios from 'axios' // Importa la librería axios, que se utiliza para hacer solicitudes HTTP.

export const useUserStore = defineStore({ // Define una nueva tienda de Pinia llamada `useUserStore`.
    id: 'user', // Establece el identificador único de la tienda.

    state: () => ({ // Define el estado inicial de la tienda.
        user: { // El estado contiene un objeto `user` con propiedades inicializadas a valores por defecto.
            isAuthenticated: false, // Indica si el usuario está autenticado.
            id: null, // Almacena el ID del usuario.
            name: null, // Almacena el nombre del usuario.
            email: null, // Almacena el correo electrónico del usuario.
            access: null, // Almacena el token de acceso.
            refresh: null, // Almacena el token de refresco.
            avatar: null // Almacena la URL del avatar del usuario.
        }
    }),

    actions: { // Define las acciones que se pueden realizar en la tienda.
        initStore() { // Acción para inicializar la tienda.
            console.log('initStore') // Imprime un mensaje de inicialización.
            if (localStorage.getItem('user.access')) { // Verifica si el token de acceso está almacenado en el localStorage.
                console.log('El usuario tiene acceso') // Imprime un mensaje si el usuario tiene acceso.
                // Restaura el estado del usuario desde el localStorage.
                this.user.access = localStorage.getItem('user.access')
                this.user.refresh = localStorage.getItem('user.refresh')
                this.user.id = localStorage.getItem('user.id')
                this.user.name = localStorage.getItem('user.name')
                this.user.email = localStorage.getItem('user.email')
                this.user.avatar = localStorage.getItem('user.avatar')
                this.user.isAuthenticated = true // Establece el estado de autenticación a verdadero.

                this.refreshToken() // Llama a la acción `refreshToken` para refrescar el token de acceso.

                console.log('Usuario inicializado', this.user) // Imprime el estado del usuario.
            }
        },

        setToken(data) { // Acción para establecer los tokens de acceso y refresco.
            console.log('setToken', data) // Imprime los datos del token.
            this.user.access = data.access // Establece el token de acceso.
            this.user.refresh = data.refresh // Establece el token de refresco.
            this.user.isAuthenticated = true // Establece el estado de autenticación a verdadero.

            // Almacena los tokens en el localStorage.
            localStorage.setItem('user.access', data.access)
            localStorage.setItem('user.refresh', data.refresh)
            console.log('user.access: ', localStorage.getItem('user.access')) // Imprime el token de acceso almacenado.
        },

        removeToken() { // Acción para eliminar los tokens.
            console.log('removeToken') // Imprime un mensaje indicando que se están eliminando los tokens.

            // Restablece todas las propiedades del usuario a sus valores iniciales.
            this.user.access = null
            this.user.refresh = null
            this.user.isAuthenticated = false
            this.user.id = null
            this.user.name = null
            this.user.email = null
            this.user.avatar = null

            // Limpia los datos del usuario almacenados en el localStorage.
            localStorage.setItem('user.access', '')
            localStorage.setItem('user.refresh', '')
            localStorage.setItem('user.id', '')
            localStorage.setItem('user.name', '')
            localStorage.setItem('user.email', '')
            localStorage.setItem('user.avatar', '')
        },

        setUserInfo(user) { // Acción para establecer la información del usuario.
            console.log("SetUserinfo", user) // Imprime la información del usuario.

            // Establece las propiedades del usuario.
            this.user.id = user.id
            this.user.name = user.name
            this.user.email = user.email
            this.user.avatar = user.avatar

            // Almacena la información del usuario en el localStorage.
            localStorage.setItem('user.id', this.user.id)
            localStorage.setItem('user.name', this.user.name)
            localStorage.setItem('user.email', this.user.email)
            localStorage.setItem('user.avatar', this.user.avatar)

            console.log('User', this.user) // Imprime el estado del usuario.
        },

       // Acción para refrescar el token de acceso.
       refreshToken() {
        // Hacemos una solicitud POST para refrescar el token.
        axios.post('/api/refresh/', {
            refresh: this.user.refresh
        })
        .then((response) => {
            // Actualizamos el token de acceso con la respuesta.
            this.user.access = response.data.access;

            // Guardamos el nuevo token de acceso en localStorage.
            localStorage.setItem('user.access', response.data.access);

            // Configuramos el header de autorización para futuras solicitudes.
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access;
        })
        .catch((error) => {
            console.log(error);

            // Si ocurre un error, eliminamos los tokens.
            this.removeToken();
        });
    },
}
});