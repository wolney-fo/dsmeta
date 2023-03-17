import './style.css'

import logo from '../../assets/img/logo.svg'

export function Header() {
    return(
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" draggable="false" />
                <h1>DSMeta</h1>
                <p>
                Desenvolvido por
                    <a href="https://bio.link/wolneyol" target='_blank'> <u>@wolney_fo</u></a>
                </p>
        </div>
        </header>
    )
}