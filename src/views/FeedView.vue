<template>
<div class="row">
    <div class=" col mt-5 ms-5 container-perfil">
        <div class="d-flex flex-column mb-3 ">
                <div class="p-2 d-flex justify-center">
                    <img src="../assets/feed.jpg" class="img-perfil" alt="...">

                </div>
                <div class="p-2 d-flex justify-center">
                    <p>
                        <strong>Juliana Medina</strong>
                    </p>

                </div>
                <div class="p-2 d-flex justify-content-evenly">
                   <p>
                        182 Amigos
                   </p>
                   <p>
                        120 posts
                   </p> 
                </div>
        </div>


    </div> 
    <div class="col-sm-5 ms-5 mt-5 ">

        <div>
        <div class=" row-sm d-flex flex-column mb-3 container-publicacion  ">
            <div class="p-2 mt-5 d-flex justify-center">
                <textarea class="form-control bg-light ms-4"  placeholder="Qué estás pensando?" aria-label="With textarea" ></textarea>
                </div>
            
                <div class="row p-2">
                   <div class="col-sm ms-5 mb-3"><button type="button" class="btn btn-outline-primary btn-lg">Adjuntar imagen</button></div> 
                   <div class="col-sm  ms-5 mb-3"><button type="button" class="btn btn-outline-secondary btn-lg">Posts</button></div> 
                  
                </div>  
        </div>
    </div>
   
        <div class="d-flex flex-column mb-3 container-publicacion ">
            <div class="row">
                <div class=" col col-lg-2">
                    <img src="../assets/feed.jpg" class=" ms-3 mt-3 img-thumbnail img-min-perfil" alt="...">

                </div>
                <div class="col">
                    <strong><h1 class="md-auto mt-5">Juliana Medina</h1></strong>
                </div>
                <div class="col">
                    <p class="mt-5 ms-5">Hace 18 minutos</p>
                </div>

            </div> 
        </div>
   

</div>
    

    






    <div class=" col">
        
        
    </div>

</div>

</template>

<style scoped>

.container-perfil{
    border: 1px lightgrey solid;
    border-radius: 5px;
}


.img-perfil{
    width: 300px;
    height: 300px;
    border-radius: 150px;
}

.container-publicacion{
    height: 50%;
    border: 1px lightgrey solid;
    border-radius: 5px;
}



.img-min-perfil{
    border-radius: 150px;
    height: 80px;
    width: 80px;
}

</style>