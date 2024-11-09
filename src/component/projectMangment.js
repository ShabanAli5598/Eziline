
import projectimg from './images/promang.jpg';

let ProjectMangment = () => {
    return (
        <div className="row">
    
    <div className="col-12 order-2 col-md-6  ">
        {/* container text */}
        <div id="divtext">
        <h1 className='text-danger fw-bold text-uppercase'>Our Project Management.</h1>
        <p><i class="fa-solid fa-check"id="checkicon"></i>Project and Milestone tracking. </p>
        <p><i class="fa-solid fa-check"id="checkicon"></i>Task management with SMS/email notification.</p>
        <p><i class="fa-solid fa-check"id="checkicon"></i>24/7 online service & support</p>
        <p><i class="fa-solid fa-check" id="checkicon"></i>Billing/invoicing transparent management.</p>
        <p><i class="fa-solid fa-check"id="checkicon"></i>Discussion board for project managment.</p>
        <p><i class="fa-solid fa-check"id="checkicon"></i>HR/Payroll & complete office management.</p>
          </div>
    </div>
    {/* image */}
    <div className="col-12 order-1 col-md-6 "><img src={projectimg} alt=" project managment" className='img-fluid'/></div>
    
    </div>
    );
}
export default ProjectMangment;