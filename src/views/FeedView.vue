<template>
<div class="row container">
    <div class=" col mt-5 mb-3 ms-5 container-perfil bg-light">
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
    <div class="col-sm-5 ms-3  mt-5 ">

        <div>
            <div class=" row-sm d-flex flex-column mb-3 container-publicacion bg-light ">
                <div class="p-2 mt-5 d-flex justify-center">
                    <textarea class="form-control bg-light ms-4 me-4"  placeholder="Qué estás pensando?" aria-label="With textarea" ></textarea>
                </div>
            
                <div class="row p-2">
                   <div class="col-sm ms-5 mb-3"><button type="button" class="btn btn-outline-primary ">Adjuntar imagen</button></div> 
                   <div class="col-sm  ms-5 mb-3"><button type="button" class="btn btn-outline-secondary ">Posts</button></div> 
                  
                </div>  
        </div>
    </div>
   
        <div class="d-flex flex-column mb-3 container-publicacion bg-light">
            <div class="row ">
                <div class=" col col-lg-2  ">
                    <img src="../assets/feed.jpg" class=" ms-3 mt-3 img-thumbnail img-min-perfil" alt="...">

                </div>
                <div class="col">
                    <strong><h1 class="md-auto mt-5">Juliana Medina</h1></strong>
                </div>
                <div class="col">
                    <p class="mt-5 ms-5">Hace 18 minutos</p>
                </div>
                
            </div> 
            <div class="row">
                <div class="col p-4">
                    <img src="../assets/img1.png" class="img-fluid rounded" alt="...">
                </div>

                
            </div>

            <div class="row d-flex justify-start ms-3 mb-4">
                <div class="col-3">
                    <a href="#">
                        <span class="material-icons-outlined">
                        thumb_up
                    </span>
                    <p>
                        82 Likes

                    </p>
                    </a>
                    
                    
                </div>

                <div class="col-3 ">
                   <a href="#">
                    <span class="material-icons-outlined">
                        sms
                    </span>
                    <p>
                        0 comentarios

                    </p>
                   </a> 
                    
                </div>



            </div>

           
        </div>
   

    </div>
    

    





    <div class="col  mt-5">

<div>
    <div class=" row-sm d-flex flex-column mb-3 container-publicacion bg-light">
        <div class="text-center mt-5">
            <strong>
                <h1>
                Gente que quizás conoces
            </h1>
            </strong>
            

        </div>
    
        <div class="row">
            <div class="col">
                <img src="../assets/feed.jpg" class=" ms-3 mt-3  img-thumbnail img-min-perfil" alt="...">

            </div>
            <div class="col mt-5">
                <strong><h1>Juliana Medina</h1></strong>

            </div>

            <div class="col mt-5 mb-5 me-3">
                <button type="button" class="btn btn-outline-primary">Mostrar</button>

            </div>

        </div> 
</div>
</div>

<div>
    <div class=" row-sm d-flex flex-column mb-3 container-publicacion bg-light">
        <div class="text-center mt-5">
            <strong>
                <h1>
                Trends
            </h1>
            </strong>
            

        </div>
    
        <div class="row">
           
            <div class="col mt-5 ms-4 mb-0">
                <strong><p>#Juliana Medina</p></strong>
                
                    <p >
                        180 Posts
                    </p>
                 

            </div>
           

            <div class="col mt-5 mb-5 ms-5">
                <button type="button" class="btn btn-outline-primary">Explorar</button>

            </div>

         

        </div> 
</div>
</div>


</div>    
        
</div>

</template>

<style scoped>

.container-perfil{
    border: 1px lightgrey solid;
    border-radius: 5px;
    -webkit-box-shadow: 10px 10px 16px 3px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 16px 3px rgba(0,0,0,0.75);
box-shadow: 10px 10px 16px 3px rgba(0,0,0,0.75);
}


.img-perfil{
    width: 300px;
    height: 300px;
    border-radius: 150px;
}






</style>