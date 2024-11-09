    import './BgContainer.css';
    import { Link } from 'react-router-dom';

    let BgContainer = () => {
        return (
        
      <div class="container-fluid">
      <div class="row">
        <div class="col-12">

          {/* BG CUBE */}
        <div class="background">
          
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>
          <div class="cube"></div>

        </div>

        <div className='TextHeader'>
          <section class="header-content">

            <h1><span className="welcome">Welcome</span> to Your Digital <br/>Transformation Journey <br/>with Eziline</h1>
            <p>At Eziline We harness cutting-edge technology to bring your vision to life.<br/> Together lets create innovative solutions that drive success and elevate your business</p>
            <Link to='#'><button>Know more</button></Link>
            <Link to='#'><button>Meet us</button></Link>
            

          </section>
          
      </div> 

      </div>
      </div>
      </div>
        );
    }

export default BgContainer;