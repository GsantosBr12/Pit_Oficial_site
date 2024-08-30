

function login() {

    return (
        <>

            <header>
                <nav>
                    <ul class="nav">
                        <li><a href="/link/Pagina Inicial/index.html">Home</a></li>
                        <li><a href="/link/tela_eventos/index.html">Eventos</a></li>
                        <li><a href="/link/tela_sobre_nos/index.html">Sobre</a></li>
                        <li><a href="/link/tela_contato/index.html">Contato</a></li>
                        <li><a href="/link/tela_perfil/index.html">Demo Profile</a></li>
                    </ul>
                </nav>
            </header>
            <div class="logo"><img src="hmburge.png" alt="" width="150px"/></div>
            <div class="linha"><img src="images-removebg-preview.png" alt=""/></div>
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Abra sua conta</h1>


                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <button class="btn-forms">Abrir conta</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Login</h1>


                        <input type="email" placeholder="Nome de usuario" />
                        <input type="password" placeholder="Senha" />
                        <a href="/link/tela_eqcsenha/index.html">Esqueceu sua senha?</a>
                        <button class="btn-forms">logar</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Bem-vindo de volta!</h1>
                            <p>Para se manter conectado conosco, faça login com suas informações pessoais</p>
                            <button class="ghost" id="signIn">Logar</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Olá, amigo!</h1>
                            <p>Insira seus dados pessoais e comece sua jornada conosco!!!</p>
                            <button class="ghost" id="signUp">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <script src="main.js"></script>



        </>
    )
}

export default Login
