import './header.css'

function Header() {

  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link href="#">Eventos</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contatos">Contatos</Link>
          <Link href="#">Login</Link>
          <Link href="#">Demo Profile</Link>
        </nav>
      </header>
    </>
  )
}

export default Header
