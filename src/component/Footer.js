import './Footer.css';
import awardrecive from './images/award.jpg';
import LEAFpic from './images/LEAF2023.jpg';
import PSEB from './images/PSEB-logo.png';
import PASHA from './images/pasha-logo.png';
import  customerReview from './images/customerReview.jpg';
import Guarantiilogo from './images/hundredlogo.jpg';
import Anniversary from './images/anniversary.png';
import { Link } from 'react-router-dom';


let Footer = ()=> {
    return (
        <div className='container-fluaid  text-white mt-5'id="footer">
            <div className="row ">
                {/* About section */}
                <div className="col-12 col-md-4 mt-1  ">
                    <h2 className='mt-5 h2text'>About</h2>
                    <p>Tech house having 100+ quality products and innovations at national and international markets.<br/> Reted as best software house in region</p>
                <div>
                    <img src={PSEB} alt="" className='img-fluaid rounded-circle me-5 mb-5' id="setimg"/>
                    <img src={PASHA} alt="" className='img-fluaid rounded-circle mb-5' id="setimg"/><br></br>
                    <img src={customerReview} alt="" className='img-fluaid rounded-circle me-5' id="setimg"/>
                    <img src={Guarantiilogo} alt="" className='img-fluaid rounded-circle' id="setimg"/>
                </div>

                </div>

                {/* Recent post section */}
                <div className="col-12 col-md-3 mt-1 recentpost">
                    <h2 className='mt-5 h2text'>Recent posts</h2>

                    <div className='d-flex'>
                    <img src={awardrecive} alt="Award Recive pic" className='img-fluaid rounded-circle' id="setimg"/>
                    <p className='ms-3 mt-4'>Presidential award won by eziline software house in IT sector<p className='text-info text-start'>February 20,2023</p></p>
                    </div>
                
                    <hr/>

                    <div className='d-flex'>
                    <img src={Anniversary} alt="Award Recive pic" className='img-fluaid rounded-circle' id="setimg"/>
                    <p className='ms-3 mt-4 ms-3'>16th Anniversary<p className='text-info'>February 4,2024</p></p>
                    </div>
                    <hr/>

                    <div className='d-flex'>
                    <img src={LEAFpic} alt="Award Recive pic" className='img-fluaid rounded-circle' id="setimg"/>
                    <p className='ms-3 mt-4'>Eziline Exhibited at LEAP 2023 saudi arabia<p className='text-info text-start'>February 7,2023</p></p>
                    </div>

                </div>
                {/* contact section */}
                <div className="col-12 col-md-4 mt-1">

                <div className='ContactSection'>
                    <h2 className='mt-5 h2text'>Contact</h2>
                    <p className='ptext'><strong className='me-1'>PK Office</strong>: 304-G Amna Plaza Pesh Rd Rawalpindi</p>
                    <p className='ptext'><strong className='me-1'>US Office</strong>: 16192 Coastal Highway Lewes,DE</p>
                    <p className='ptext'><strong className='me-1'>UK Office</strong>: intl.House,776-778 BARKING Rd LANDON</p>
                    <p className='ptext'><strong className='me-1'>FR Office</strong>: 5 avenue Pierre Salvi 95500 Gonesse paris</p>
                    <p className='ptext'><strong className='me-1'>Phone</strong>: +92515491184 / +92518772888</p>
                    <p className='ptext'><strong className='me-1'>Email</strong>: info@eziline.com</p>
                </div>
                </div>
                <hr/>
            
            </div>
            {/* Copy Right Section */}
            <div className='row justify-content-evenly'>
            <div className=" col-md-12 col-xl-5 fw-bold"><p>2022 CopyRight Eziline Software House</p></div>
            <div className=" col-md-12 col-xl-3 d-flex justify-content-center"><p className='me-2 fw-bold text-center'>Career</p><p className='me-2 fw-bold text-center'>Internships</p><p className='me-2 fw-bold text-center'>Ezi Products</p><p className='me-2 fw-bold text-center'>Terms & Conditions</p><p className='me-2 fw-bold text-center'>Bank</p></div>
            
            {/* social icon */}
            <div className=' col-md-12 col-xl-3'>

        <Link to="https://web.facebook.com/ezilinepk?_rdc=1&_rdr#" className='text-white text-decoration-none'> <i class="fa-brands fa-facebook me-5 fs-5" id="facebook"> </i> </Link>
        <Link to="https://www.linkedin.com/company/eziline/?originalSubdomain=pk" className='text-white text-decoration-none'>   <i class="fa-brands fa-linkedin me-5 fs-5 text-white" id="linkedin"></i> </Link>
        <Link to="https://twitter.com/eziline" className='text-white text-decoration-none'>  <i class="fa-brands fa-x-twitter me-5 fs-5 text-white" id="twitter" ></i>  </Link>
        <Link to="https://www.youtube.com/user/ezilinepk" className='text-white text-decoration-none'> <i class="fa-brands fa-youtube me-5 fs-5 text-white" id="youtube"></i> </Link>
            </div>
        </div>
        </div>
    );
}

export default Footer;