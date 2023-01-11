<template>
  <div class="container">
    <MenuLateral/>
    <div class="row align-items-center">
      <BarraFiltro/>
    </div>
    <div class="row">
      <VagaAnunciada/>
    </div>

    
  </div>
</template>
  
<script>
import VagaAnunciada from '@/components/comuns/VagaAnunciada.vue'
import BarraFiltro from '@/components/comuns/BarraFiltro.vue'
import MenuLateral from '@/components/comuns/MenuLateral.vue'
export default{
  name:'HomeColabora',
  components:{
    VagaAnunciada,
    BarraFiltro,
    MenuLateral
  }
}
</script>
  
  
<style >

</style>
  