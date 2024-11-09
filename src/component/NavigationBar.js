
import './NavigationBar.css';
import logo from'./images/logo.png';
import { Link } from 'react-router-dom';
let NavigationBar = () => {

    return (
<div>
<nav class="navbar nav-underline sticky-top  navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" id="nav-container">
    <Link class="navbar-brand ms-5" to=''><img src={logo} alt="logo"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
        {/* home */}
        <li class="nav-item"> 
        <Link class="nav-link active text-white text-uppercase fw-bold"  to='/'>Home</Link> 
        </li>
        {/* Services */}
        <li class="nav-item">
        <Link class="nav-link  text-white text-uppercase fw-bold"  to='services'>Services</Link>
        </li>
        {/* portfolio */}
        <li class="nav-item">
        <Link class="nav-link  text-white text-uppercase fw-bold"  to='portfolio'>Portfolio</Link>
        </li>
        {/* Ezi updates */}
        <li class="nav-item">
        <Link class="nav-link  text-white text-uppercase fw-bold"  to='eziupdates'>Ezi updates</Link>
        </li>
        {/* login */}
        <li class="nav-item">
        <Link class="nav-link  text-white text-uppercase fw-bold"  to='login'>Login</Link>
        </li>
        {/* contact */}
        <li class="nav-item">
        <Link class="nav-link  text-white text-uppercase fw-bold"  to='contact'>Contact</Link>
        </li>

      </ul>
      {/* search bar */}
      <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-light  fw-bold" type="submit" id="search">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>

    );
}
export default NavigationBar;