<template>
  
        <div class="col-3 fundoCanvas  d-none d-xl-block d-lg-block d-md-block ">
             <div class="row justify-content-center pt-5" :style="{ backgroundImage: 'url(' + require('@/assets/fundo.png') + ')' }">
                <div class="col-12 col-lg-3   align-self-end">
                    <img src="./../../assets/vilarinho.png" class="w-100">
                </div>
                <div class="col-9 align-self-end ">
                    <span class="text-white "><strong>Guilherme Oliveira Villarinho</strong> (Villa) </span>
                </div>
            </div>
            <div class="row m-3">
                <div class="col-12 bordaCinza py-3 px-3">
                    <span class="textoCinza">strong Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard.</span>
                </div>
            </div>
            <div class="row m-3">
                <div class="col-12 py-3 px-3 bordaCinza">
                    <div class="row align-self-center text-white my-4">
                        <div class="col-12 col-lg-2 col-md-2  ">
                            <i class="bi bi-github"></i>
                        </div>
                        <div class="col-10 mt-2 ">
                            <span class="redesSociais">Villarinho-Gui (Villa) (github.com)</span>
                        </div>
                    </div>
                    <div class="row align-self-center text-white my-4">
                        <div class="col-12 col-lg-2 col-md-2  ">
                            <i class="bi bi-linkedin"></i>
                        </div>
                        <div class="col-10 mt-2 ">
                            <span class="redesSociais">Villarinho-Gui (Villa) (github.com)</span>
                        </div>
                    </div>
                    <div class="row align-self-center text-white my-4">
                        <div class="col-12 col-lg-2 col-md-2  ">
                            <i class="bi bi-discord"></i>
                        </div>
                        <div class="col-10 mt-2 ">
                            <span class="redesSociais">Villarinho-Gui (Villa) (github.com)</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


     



</template>
<script>
export default {
    name: 'MenuLateral'
}
</script>
<style>

.fundoCanvas {
    background-color: #232323;
}
.bordaCinza{
    background-color: #2D2D2D;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    border-color:  #A7A7A7;
    
}
.redesSociais {
    color:#A7A7A7;
    font-size: 13px;
}

.bi-github {
    font-size: 30px;
}
.bi-linkedin {
    font-size: 30px;
}
.bi-discord {
    font-size: 30px;
}
.textoCinza{
 color:#A7A7A7;
}


</style>