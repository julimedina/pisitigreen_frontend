<template>
  <!-- Contenedor principal -->
  <div class="text-center mt-5 container">
      <!-- Filas del contenedor -->
      <div class="row container-inicio-sesion">
          <!-- Columna izquierda -->
          <div class="col form-registro mb-5 ms-3 me-3">
              <!-- Tarjeta de registro -->
              <div class="card card-body mt-5 form-registro">
                  <!-- Formulario de registro -->
                  <form v-on:submit.prevent="submitForm" method="post">
                      <!-- Sección de datos de registro -->
                      <div class="row">
                          <!-- Columna de imagen -->
                          <div class="col-sm">
                              <!-- Imagen de gato -->
                              <div class="d-flex justify-center">
                                  <img src="../assets/cat.png" alt="">
                              </div>
                              <!-- Título del formulario -->
                              <strong><h1>Registrarse</h1></strong>
                              <br>
                              <!-- Campo de nombre -->
                              <div class="form-group d-flex justify-center">
                                  <input v-model="form.name" type="text" class="form-control bg-stone-300" style="width: 60%;" name="name" autocomplete="name" require placeholder="Nombre">
                              </div>
                          </div>
                      </div>
                      <br>
                      <!-- Sección de datos de correo electrónico -->
                      <div class="row">
                          <div class="col-sm d-flex justify-center form-group">
                              <input v-model="form.email" type="email" class="form-control bg-stone-300" style="width: 60%;" autocomplete="email" name="email" require placeholder="Correo Electrónico">
                          </div>
                      </div>
                      <br>
                      <!-- Sección de datos de contraseña -->
                      <div class="row">
                          <div class="col-sm d-flex justify-center form-group">
                              <input v-model="form.password1" type="password" class="form-control bg-stone-300" style="width: 60%;" autocomplete="off" name="password1" require placeholder="Contraseña">
                          </div>
                      </div>
                      <br>
                      <!-- Sección de confirmación de contraseña -->
                      <div class="row">
                          <div class="col-sm d-flex justify-center form-group">
                              <input v-model="form.password2" type="password" class="form-control bg-stone-300" style="width: 60%;" autocomplete="off" name="password2" placeholder="Repite la contraseña">
                          </div>
                          <!-- Mostrar errores de validación -->
                          <template v-if="errors.length > 0">
                              <div class="bg-danger">
                                  <p v-for="error in errors" v-bind:key="error">
                                      {{error}}
                                  </p>
                              </div>
                          </template>
                      </div>
                      <br>
                      <!-- Botón de registro -->
                      <div class="row">
                          <div class="col d-flex justify-center">
                              <button class="btn btn-success">Registrarse</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
          <!-- Columna derecha -->
          <div class="col-6 fondo">
              <div class="row">
                  <div class="col">
                      <br>
                      <!-- Título de bienvenida -->
                      <strong><h1>¡Hola!</h1></strong>
                  </div>
                  <br>
                  <!-- Mensaje de registro -->
                  <div class="row">
                      <div class="col">
                          <p>
                              Registra tus datos personales para usar todas las funciones del sitio.
                          </p>
                      </div>
                  </div>
                  <br>
                  <!-- Enlace de inicio de sesión -->
                  <div class="row d-flex justify-center">
                      <div>
                          <p>Ya tienes una cuenta</p>
                      </div>
                      <div>
                          <router-link :to="{'name': 'Login'}" class="btn btn-success">Inicia Sesión</router-link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<style scoped>
  /* Estilos CSS específicos del componente */
  h1 {
      font-size: 25px;
  }

  .container-inicio-sesion {
      border: solid 1px lightgray;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      -webkit-box-shadow: 10px 10px 16px 3px rgba(0,0,0,0.75);
      -moz-box-shadow: 10px 10px 16px 3px rgba(0,0,0,0.75);
      box-shadow: 10px 10px 16px 3px rgba(0,0,0,0.75);
      background-color: #87CEFA;
  }

  .fondo {
      background-image: url("../assets/siginUp2.jpg");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-top-left-radius: 250px;
      border-bottom-left-radius: 250px;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      opacity: 0.9;
      display: flex;
      align-items: center;
      color: white;
      font-size: 20px;
  }

  .fondo h1 {
      font-size: 60px;
  }
</style>

<script>
// Importa la función 'useToastStore' del módulo '@/store/toast'
import { useToastStore } from '@/store/toast';

// Exporta el componente
export default {
  // Nombre del componente
  name: 'SignUp',

  // Configuración de inicialización
  setup() {
    // Obtiene la tienda de tostadas utilizando la función 'useToastStore'
    const toastStore = useToastStore();

    // Retorna el objeto 'toastStore' para que esté disponible en el componente
    return {
      toastStore
    };
  },

  // Datos locales del componente
  data() {
    return {
      // Objeto 'form' para almacenar los datos del formulario
      form: {
        email: '',        // Correo electrónico
        name: '',         // Nombre
        password1: '',    // Contraseña
        password2: ''     // Confirmación de contraseña
      },

      // Array para almacenar mensajes de error de validación
      errors: []
    };
  },

  // Métodos del componente
  methods: {
    // Método para enviar el formulario de registro
    submitForm() {
      // Limpia los mensajes de error
      this.errors = [];

      // Verifica si el campo de correo electrónico está vacío
      if (this.form.email === '') {
        this.errors.push(' Falta tu correo ');
      }

      // Verifica si el campo de nombre está vacío
      if (this.form.name === '') {
        this.errors.push(' Falta tu nombre ');
      }

      // Verifica si el campo de contraseña está vacío
      if (this.form.password1 === '') {
        this.errors.push('Falta tu contraseña');
      }

      // Verifica si las contraseñas no coinciden
      if (this.form.password1 !== this.form.password2) {
        this.errors.push('La contraseña no es igual');
      }

      // Si no hay errores de validación
      if (this.errors.length === 0) {
        // Realiza una solicitud HTTP POST para registrar al usuario
        this.$http
          .post('/api/signup/', this.form)
          .then(response => {
            // Verifica si el registro fue exitoso
            if (response.data.message === 'success') {
              // Muestra un mensaje de tostada de éxito
              this.toastStore.showToast(5000, 'El usuario fue registrado. Por favor inicie sesión');

              // Limpia los campos del formulario después del registro exitoso
              this.form.email = '';
              this.form.name = '';
              this.form.password1 = '';
              this.form.password2 = '';
            } else {
              // Muestra un mensaje de tostada de error si algo salió mal durante el registro
              this.toastStore.showToast(5000, 'Algo salió mal. Por favor vuelve a intentarlo', 'bg-red-300');
            }
          })
          .catch(error => {
            // Maneja errores de la solicitud HTTP
            console.log('error', error);
          });
      }
    }
  }
}
</script>
