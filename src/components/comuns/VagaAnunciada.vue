<template>
    <div class="row">
          <div class="col-12 col-lg-8 offset-md-2 offset-lg-2 my-3">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item cinza border-0">
                <div class="accordion-header" id="headingOne">
                 
                    <img  src="@/assets/Rectangle13.png" class="w-100 head">
                  
                  <div class="row mt-3 p-4">
                    <div class="col-2 col-md-2 col-lg-2">
                      <img  src="./../../assets/Ellipse1.png" class="w-100">
                    </div>
                    <div class="col-9 col-md-9 col-lg-9 text-start">
                      <h2 class="text-white text-left"> <strong>Projeto Lorem Ipsum</strong></h2>
                      <p class="text-white descricao"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to.</p>
                    </div>
                    <div class="col-1 col-md-1 col-lg-1">
                      <button class="button text-light bg-transparent border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                        <i class="bi bi-caret-down-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body ">
                    <div class="col-auto d-flex justify-content-between">
                      <div class="gap-2 mt-4"><a href="#" class="btn botao-purple p-3">Enviar Interesse</a></div>
                    <div class="gap-2 mt-4"><a href="#" class="btn verde p-3">Apoiar</a></div>
                  </div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </template>
    
  <script>
  export default{
    name:'VagaAnunciada'
  }
  
  </script>
    
    
  <style scoped>
    .cinza{
      background-color: #414141;
     
    }
    .verde{
      background-color: #6CF071;
      border-radius: 15px;
      color: #ffffff;
    }
    .verde:hover{
      background-color: #265f28;
      color: #ffffff;
    }
    .botao-purple{
      background-color: #6b63ff00;
      border:#6C63FF 2px solid;
      border-radius: 15px;
      color: #ffffff;
    }
    .botao-purple:hover{
      background-color: #6b63ff00;
      border:#ffffff 2px solid;
      color: #6C63FF;
    }
    .head{
      margin: 0px;
    }
    .descricao{
      font-size: 15px;
    }
  </style>
    