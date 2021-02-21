import { Link } from 'react-router-dom';

const Hamburger = () => {
    return (
      <div className='hamburger-menu'>
        <div className="menu-secondary-background-color"></div>
        <div className="menu-layer">
          <div className="menu-city-background"></div>
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav>
                  <ul>
                    <li>
                      <Link to='/opportunities'>Opportunities</Link>
                    </li>
                    <li>
                      <Link to='/solutions'>Solutions</Link>
                    </li>
                    <li>
                      <Link to='/contact-us'>Contact us</Link>
                    </li>
                  </ul>
                </nav>
                <div className="info">
                  <h3>Our Promise</h3>
                  <p>
                  However live text any such presented. One it steps means, him of subjective never rationale there all writing great. Have expand rewritten pass the then to from positives taking I box to soft close peacefully or their got odd bidding satisfaction deeply, to he of in law, for himself.
                  </p>
                </div>
                <div className="locations">
                  Locations:
                  <span>Częstochowa</span>
                  <span>Warszawa</span>
                  <span>Gliwice</span>
                  <span>Sosnowiec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};
  
export default Hamburger;
  