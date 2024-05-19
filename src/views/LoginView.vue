
<template>
    <div class="text-center mt-5">
      <div class="row container-inicio-sesion ">
       
        <div class="col-6 fondo">
          
    
          <div class="row ">
    
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
            <div class="row  d-flex d-flex justify-center">
              
              <div>
              <p>Aún no tienes una cuenta </p> 
            </div>
              <div>
                
                <router-link :to ="{'name': 'SignUp'}"  class="btn btn-primary">Registrate</router-link>
              
              </div>
             
    
             
    
            </div>
    
          </div>
            
        </div>

        <div class="col form-registro mb-5 ms-3 me-3">
    
    <div class="card card-body mt-5 form-registro">

<form  id="task-form" action="" method="POST" >


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

<input  type="email" class="form-control  bg-stone-300" style="width: 60%;"  name="Correo" require  placeholder="Correo Electrónico">
</div>

</div>
<br>

<div class="row">

<div class="col-sm d-flex justify-center form-group ">

<input type="password" class="form-control  bg-stone-300" style="width: 60%;" name="Contraseña" require placeholder="Contraseña">
</div>

</div>


<br>

<div class="row">

<div class="col d-flex d-flex justify-center justify-content-center">
<input type="submit" Value="Iniciar sesión" name="guardar_registro" class="btn btn-primary"  id="btn-task-form">

</div>


</div>
<br>

<div class="row">

<div class="col d-flex d-flex justify-center justify-content-center">
<a href="#"> Olvidaste tu contraseña</a>
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
      background-color: #6495ED;
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
      font-size: 60px;
    }
    .form-registro{
      border: none;
      border-radius: 5px;
    }
    </style>
    