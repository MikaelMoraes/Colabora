<template>
    <div>
        <body>
            <div class="container">
                <!-- /.login-logo -->
                <div class="card card-position card-color" style="width: 18rem;">
                    <div class="card-body">
                        <form>
                            <div class="input-group mb-3">
                                <input type="email" class="form-control" placeholder="E-mail">
                            </div>
                            <div class="input-group mb-3">
                                <input type="password" class="form-control" placeholder="Senha">
                            </div>
                            <div class="row">
                                
                                <div class="col-12 ">
                                    <router-link to="/feed"   class="btn btn-lg btn-purple text-white btn-block" type="submit">Entrar</router-link>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-12">
                                    <div class="icheck-primary">
                                        <input type="checkbox" class="mr-4" id="remember">
                                        <label for="remember" class="text-white">
                                            Lembrar de mim
                                        </label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    

                </div>

            </div>
        </body>
    </div>
</template>
<script>
export default {
    name: 'LoginColab',
}
</script>
<style>
a{
    color: #292929;
   text-decoration: none; 
}
a:hover{
    color: #7e7e7e;
   text-decoration: none; 
}
.form-control{
    color: #6C63FF;
    background: #5c5c5c;
}
.form-control:hover{
    color: #6C63FF;
    background: #999999;
}
.form-control:focus{
    color: #6C63FF;
    background: #999999;
}
.btn-purple{
    background-color:#6C63FF;
}
.btn-purple:hover{
    background-color:#534dc9;
}
.container {

    margin-top: 100px;
}
.card-color{
    background-color: #5c5c5c;
}
.card-position {
    margin: 0 auto;
}
</style>