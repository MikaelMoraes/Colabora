<template>

    <body>
        <div class="container">
              <div class="row justify-content-md-center">
                <div class="col-12 col-md-6 col-lg-6 text-start">
                    <h1 class="text-white titulo-inicial"><strong>Colabora</strong></h1>
                    <p class="cinza">Colabora é onde você poderá fazer parte dos maiores projetos e de forma totalmente
                        gratuita para o seu portifólio! </p>
                    <router-link to="/login"  class="btn btn-purple w-100 h-25 text-white text-button" type="button"> <strong>Colaborar agora mesmo!</strong></router-link>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                    <img  src="./../../assets/inicial.svg">
                </div>
            </div>
        </div>
     
    </body>

</template>
    
<script>

export default {
    name: 'PaginaInicial'

}
</script>
    
    
<style >
p{
    font-size: 23px;
}
img{
    width:450px;
    
}
.titulo-inicial{
    font-size: 96px;
}
.cinza {
    color: #6B6B6B;
}

.btn-purple {
    background-color: #6C63FF;
}

.btn-purple:hover {
    background-color: #433ea0;
}
.container { 
    margin-top: 100px; 
}
.text-button{
    font-size: 34px;
    text-align: center;
    vertical-align: middle;
}
</style>
    