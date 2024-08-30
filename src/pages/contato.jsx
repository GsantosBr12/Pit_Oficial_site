function Contato() {
    return (
        <>
            <header>
                <nav>
                    <ul class="nav">
                        <li><a href="/link/Pagina Inicial/index.html">Home</a></li>
                        <li><a href="/link/tela_eventos/index.html">Eventos</a></li>
                        <li><a href="/link/tela_sobre_nos/index.html">Sobre</a></li>
                        <li><a href="/link/Tela_cadastro/index.html">Login</a></li>
                        <li><a href="/link/tela_perfil/index.html">Demo Profile</a></li>
                    </ul>
                </nav>
            </header>
            <section class="forms">
                <h1>Formulário para contato</h1>

                <form action="#" method="get" onsubmit="">
                    <input type="text" name="nome" id="nome" placeholder="Nome" required />
                    <input type="tel" name="telefone" id="telefone" placeholder="Telefone" required />
                    <input type="email" name="email" id="email" placeholder="E-mail" required />
                    <textarea name="msg" id="msg" placeholder="Mensagem" cols="30" rows="5" required></textarea>
                    <button type="submit"><span>Enviar</span>
                    </button>
                </form>
            </section>
            <img class="hmb" src="hmburge.png" alt="" />
        </>
    )
}