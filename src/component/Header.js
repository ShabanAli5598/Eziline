import './Header.css';
import { Link } from 'react-router-dom';


let Header = () => {
    return (
        <div className="row justify-content-center headerbgcolor">
            {/* contact section */}
            <div className='col-12 text-center '>
            <p className="text me-5 scroll textResp"> <i class="fa-solid fa-location-dot me-2 text-white"></i>Office 304-B Amna Plaza Near Radio Pakistan Peshawar Road Rawalpindi</p>
            </div> 

             <div className='col-12  text-center'>
            <p className="text me-5 scroll textResp"> <i class="fa-solid fa-phone-volume me-2 text-white" ></i>+923212225212
             <i class="fa-regular fa-envelope ms-5 me-2 text-white"></i>info@eziline.com</p>
             </div> 
           <hr className='text-white'></hr> 

                 {/* social icons */}
        
        <div className='col-12 '>

        <Link to="https://web.facebook.com/ezilinepk?_rdc=1&_rdr#" className='text-white text-decoration-none'> <i class="fa-brands fa-facebook me-5 fs-5" id="facebook"> </i> </Link>
        <Link to="https://www.linkedin.com/company/eziline/?originalSubdomain=pk" className='text-white text-decoration-none'>   <i class="fa-brands fa-linkedin me-5 fs-5 text-white" id="linkedin"></i> </Link>
        <Link to="https://twitter.com/eziline" className='text-white text-decoration-none'>  <i class="fa-brands fa-x-twitter me-5 fs-5 text-white" id="twitter" ></i>  </Link>
        <Link to="https://www.youtube.com/user/ezilinepk" className='text-white text-decoration-none'> <i class="fa-brands fa-youtube me-5 fs-5 text-white" id="youtube"></i> </Link>
            
            
             
     </div>
        </div>
    );

   
}
 export default Header;