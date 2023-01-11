<template>
    <div class="row">
          <div class="col-12 col-lg-6 col-md-6 my-3">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item cinza border-0 p-4">
                <div class="accordion-header" id="headingOne">
                  <div class="row mt-3">
                    <div class="col-2 col-md-2 col-lg-2">
                      <img  src="./../../assets/Ellipse1.png" class="w-100">
                    </div>
                    <div class="col-9 col-md-9 col-lg-9 text-start">
                      <h2 class="text-white text-left">João Pereira</h2>
                      <p class="text-white ">Trabalho com Front-End desde 2019 e gosto muito de trabalho em equipe.</p>
                    </div>
                    <div class="col-1 col-md-1 col-lg-1">
                      <button class="button text-light bg-transparent border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                        <i class="bi bi-caret-down-fill"></i>
                      </button>
                    </div>
                  </div>
                  <div class="row mt-3 ">
                    <div class="col-2 col-md-2  text-start">
                      <img  src="./../../assets/physics1.png" class="w-75">
                    </div>
                    <div class="col-2 col-md-2 text-start">
                      <img  src="./../../assets/physics1.png" class="w-75">
                    </div>
                  </div>
                </div>
                <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body ">
                    <div class="d-grid gap-2 mt-4"><a href="#" class="btn verde">Entrar em Contato</a></div>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-6 col-md-6 my-3">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item cinza border-0 p-4">
                <div class="accordion-header" id="headingTwo">
                  <div class="row mt-3">
                    <div class="col-2 col-md-2 col-lg-2">
                      <img  src="./../../assets/Ellipse1.png" class="w-100">
                    </div>
                    <div class="col-9 col-md-9 col-lg-9 text-start">
                      <h2 class="text-white">João Pereira</h2>
                      <p class="text-white ">Trabalho com Front-End desde 2019 e gosto muito de trabalho em equipe.</p>
                    </div>
                    <div class="col-1 col-md-1 col-lg-1">
                      <button class="button text-light bg-transparent border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i class="bi bi-caret-down-fill"></i>
                      </button>
                    </div>
                  </div>
                  <div class="row mt-3 ">
                    <div class="col-2 col-md-2  text-start">
                      <img  src="./../../assets/physics1.png" class="w-75">
                    </div>
                    <div class="col-2 col-md-2 text-start">
                      <img  src="./../../assets/physics1.png" class="w-75">
                    </div>
                  </div>
                </div>
                <div id="collapseTwo" class="accordion-collapse collapse " aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body ">
                    <div class="d-grid gap-2 mt-4"><a href="#" class="btn verde">Entrar em Contato</a></div>
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
      color: #707070;
    }
    .verde:hover{
      background-color: #265f28;
      color: #ffffff;
    }
  </style>
    