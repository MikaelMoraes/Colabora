<template>
    <nav class="navbar corMenu ">
  <div class="container-fluid">
    <a class="navbar-brand text-white TituloMenu px-5"><strong>COLABORA</strong></a>
    <form class="d-flex px-5" role="search">
      <input class="busca mx-3" type="search" placeholder="buscar" aria-label="buscar">
      <i class="bi bi-bell-fill"></i>
    </form>
  </div>
</nav>
</template>
<script>
export default {
    name: 'MenuSuperior'
}
</script>
<style scoped>
.corMenu{
  background-color: #353535;
}
.TituloMenu{
  font-size: 40px;
}
.busca{
  color: white;
  background: url(@/assets/search.svg)  no-repeat center right;
  padding: 5px;
  border:none;
  width: 20px;
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear;

}
.busca:focus{
  width: 200px;
  outline: none;
}
.bi-bell-fill{
  font-size: 23px;
  color: #ffffff;
}
.bi-bell-fill:hover{
 
  color: #858585;
}
</style>