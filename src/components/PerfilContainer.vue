<template>

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
</template>

<script>

export default{

name: 'PerfilContainer'
}
</script>


<style>


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