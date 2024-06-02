<template>
    <div class="text-center mt-5 container">
      <div class="row container-inicio-sesion ">
      
        <div class="col-6 fondo">
              <div class="row">
                  <div class="col">
                      <br>
                      <strong><h1>¡Bienvenido!</h1></strong>
                  </div>
                  <br>
                  
                  <div class="row">
                      <div class="col">
                          <p>
                            Ingresa tus datos personales para usar todas las funciones del sitio.
                          </p>
                      </div>
                  </div>
                  <br>
                  <div class="row d-flex justify-center">
                      <div>
                          <p>Aún no tienes una cuenta</p>
                      </div>
                      <div>
                        <router-link :to ="{'name': 'SignUp'}"  class="btn btn-success">Registrate</router-link>
                      </div>
                  </div>
              </div>
          </div>

        <div class="col form-registro mb-5 ms-3 me-3">
    
        <div class="card card-body mt-5 form-registro">

        <form  id="task-form" v-on:submit.prevent="submitForm" >


        <div class="row ">

<div class="col-sm ">
<div class="d-flex justify-center">
  <img src="../assets/cat.png" alt="" >
</div>

<strong><h1>Iniciar Sesión</h1></strong> 
<br>

</div>



</div>
<br>


<div class="row">
<div class="col-sm d-flex justify-center form-group">

<input v-model="form.email" type="email" class="form-control  bg-stone-300" style="width: 60%;"  name="email" require  placeholder="Correo Electrónico">
</div>

</div>
<br>

<div class="row">

<div class="col-sm d-flex justify-center form-group ">

<input v-model="form.password" type="password" class="form-control  bg-stone-300" style="width: 60%;" name="password" require placeholder="Contraseña">
</div>


<template v-if="errors.length > 0">
    <div class="bg-danger">
      <p v-for="error in errors" v-bind:key="error">
        {{error}}

      </p>

    </div>

  </template>

</div>


<br>

<div class="row">

<div class="col d-flex d-flex justify-center justify-content-center">
<button class="btn btn-success">Iniciar sesión</button>
</div>


</div>
<br>

<div class="row">

<div class="col d-flex d-flex justify-center justify-content-center">

</div>


</div>
</form>

    </div>




        </div>
       
      </div>
    </div>
</template>

<style scoped>
    h1{
      font-size: 25px;
    }
    
    .container-inicio-sesion{
      background-color: #87CEFA;
      border: solid 1px lightgray;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      border-top-left-radius: 20px;
       border-bottom-left-radius: 20px;
       border-top-right-radius: 5px;
       border-bottom-right-radius: 5px;
       -webkit-box-shadow: 10px 10px 16px 3px rgba(0,0,0,0.75);
      -moz-box-shadow: 10px 10px 16px 3px rgba(0,0,0,0.75);
      box-shadow: 10px 10px 16px 3px rgba(0,0,0,0.75);
    
    }
    
    .fondo{
        background-image: url("../assets/login.jpeg");
        background-position: center center;
       border-top-left-radius: 20px;
       border-bottom-left-radius: 20px;
       border-top-right-radius: 250px;
       border-bottom-right-radius: 250px;
       opacity: 0.9;
       display: flex;
       align-items:center;
       color: white;
       font-size: 20px;
     
       
    }
    .fondo h1{
      font-size: 47px;
    }
    .form-registro{
      border: none;
      border-radius: 5px;
    }
</style>

<script>

import axios from 'axios'
import { useUserStore } from '@/store/user'

export default {
  // Configuración de la vista
  setup() { //Función de configuración del componente en el Composition API de Vue 3
        
      const userStore = useUserStore()// Uso del store de usuario
      return {
          userStore // Retorna el estado local de la vista
      }
  },
  // Datos locales
  data() {
      return { //Retorna los datos locales iniciales de la vista
          form: {
              email: '', 
              password: '',
          },
          errors: []
      }
  },
  // Métodos para el formulario de inicio de sesión
  methods: {
      async submitForm() {
          // Reiniciar lista de errores
          this.errors = []
          // Validar campos de entrada
          if (this.form.email === '') {
              this.errors.push('Falta tu correo electrónico')
          }
          if (this.form.password === '') {
              this.errors.push('Falta tu contraseña')
          }
          // Si no hay errores, enviar solicitud de inicio de sesión
          if (this.errors.length === 0) {
              await axios
                  .post('/api/login/', this.form)
                  .then(response => {
                      // Almacenar token en el store de usuario
                      this.userStore.setToken(response.data)
                      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access;
                  })
                  .catch(error => {
                      console.log('error', error)
                      // Mostrar mensaje de error si la solicitud falla
                      this.errors.push('¡El correo electrónico o la contraseña son incorrectos! O el usuario no está activado!')
                  })
          }
          // Si no hay errores, obtener información del usuario
          if (this.errors.length === 0) {
              await axios
                  .get('/api/me/')
                  .then(response => {
                      // Almacenar información del usuario en el store de usuario
                      this.userStore.setUserInfo(response.data)
                      // Redirigir a la página de inicio
                      this.$router.push('/feed')
                  })
                  .catch(error => {
                      console.log('error', error)
                  })
          }
      }
  }
}
</script>
