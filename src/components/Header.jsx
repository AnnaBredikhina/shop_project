function Header() {
    return <div className="navbar-fixed">
        <nav className="purple lighten-2">
            <div className="nav-wrapper">
                {/* eslint-disable-next-line  */}
                <a href="#" className="brand-logo">React Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/AnnaBredikhina/shop_project">Repo</a></li>
                </ul>
            </div>
        </nav>
    </div>
}

export {Header}