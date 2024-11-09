import './AboutText.css';
import CRM from './images/crm.jpg';



let AboutUsDiv = () => {
    return (
    <div className="row">
    <div className="col-12 order-2 col-md-6 order-md-1 ">
        {/* About section */}
        <div id="divtext">
        <h1 className='text-danger fw-bold text-uppercase'>About Eziline</h1>
        <p><i class="fa-solid fa-check"id="checkicon"></i>Programmers.</p>
        <p><i class="fa-solid fa-check"id="checkicon"></i>A close-knit team of 350+ designers.</p>
        <p><i class="fa-solid fa-check"id="checkicon"></i>System analysts and marketing executives.</p>
        <p><i class="fa-solid fa-check" id="checkicon"></i>Eziline is an independent Pakistan based company.</p>
        <p><i class="fa-solid fa-check"id="checkicon"></i>Operating Since 2007-Eziline has been in profit since the beginning.</p>
        <p><i class="fa-solid fa-check"id="checkicon"></i>we are website specialist(web design/Dynamic web solution/graphic design./Multimedia development).</p>
          </div>
    </div>
    <div className="col-12 order-1 col-md-6 order-md-2"><img src={CRM} alt=" About us" className='img-fluid'/></div>
    </div>
    );

}
export default AboutUsDiv;