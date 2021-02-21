import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <div className="inner-header">
                        <div className="logo">
                            <Link to="/">Onex.</Link>
                        </div>
                        <div className="menu">
                            <button>Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;