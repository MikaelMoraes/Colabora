<template>
  <div class="container">
    <div class="row">
      <BarraFiltro/>
      <VagaAnunciada/>
    </div>
  </div>
</template>
  
<script>
import VagaAnunciada from '@/components/comuns/VagaAnunciada.vue'
import BarraFiltro from '@/components/comuns/BarraFiltro.vue'
export default{
  name:'HomeColabora',
  components:{
    VagaAnunciada,
    BarraFiltro
  }
}
</script>
  
  
<style >

</style>
  