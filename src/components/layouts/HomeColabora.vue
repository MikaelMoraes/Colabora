<template> 
<MenuSuperior/>
 <div class="container-fluid">
   <div class="row ">
    <MenuLateral/>
    <div class="col-12 col-md-9 col-lg-9">
         <BarraFiltro/>
        <VagaAnunciada/>
    </div>
   </div>   
  </div>


 


</template>
  
<script>
import VagaAnunciada from '@/components/comuns/VagaAnunciada.vue'
import BarraFiltro from '@/components/comuns/BarraFiltro.vue'
import MenuLateral from '@/components/comuns/MenuLateral.vue'
import MenuSuperior from '@/components/comuns/MenuSuperior.vue'
export default{
  name:'HomeColabora',
  components:{
    VagaAnunciada,
    BarraFiltro,
    MenuLateral,
    MenuSuperior
  }
}
</script>
  
  
<style >

</style>
  