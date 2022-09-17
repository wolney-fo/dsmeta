import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por <a href="https://bio.link/wolneyol">@wolney_fo</a> na SDV10 😀
            </p>
        </div>
    </header>
    )
}

export default Header