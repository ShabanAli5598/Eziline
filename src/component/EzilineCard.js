import './EzilineCard.css';

const EzilineCard = ()=> {
    return (
        <div className='container-fluaid mt-5'>
            <div className="row justify-content-evenly">
                <div className='col-10 col-md-3 mt-1 cardicon  rounded quickdelivery'data-aos="flip-right">
                   {/* Price Card */}
                    <div>
                    <i class="fa-solid fa-tv text-danger m-3"></i>
                    <h1>Flexible Price</h1>
                    <p>Affordable,flexible,tailored pricing</p>
                    <p>Smart pricing for your goals</p>
                    </div>
                </div>
                {/* Quality Card */}
                <div className='col-10 col-md-3 mt-1 cardicon  rounded quickdelivery' data-aos="flip-left">
                <i class="fa-solid fa-lightbulb text-warning m-3"></i>
                    <h1>Quality Work</h1>
                    <p>Uncompromising quality in every project</p>
                    <p>Quality work that exceeds expectations</p>
                </div>
                {/* Delivery Card */}
                <div className='col-10 col-md-3 mt-1 cardicon  rounded quickdelivery' data-aos="flip-right">
                   <i class="fa-solid fa-trophy text-danger m-3"></i>
                    <h1>Quick Delivery</h1>
                    <p>40 days initial delivery on custom mega projects</p>
                    <p>Efficient timelines for accelerated success</p>
                </div>
            
            </div>
        </div>
    );
}

export default EzilineCard;