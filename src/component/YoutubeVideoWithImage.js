import './YoutubeVideoWithImage.css';
import laptopimg from './images/menwithlaptop (1).png';




let TextWithImg = () => {
    return (
        <div className='container-fluaid'>
        <div className="row">
        {/* Embeded youtube video & image */}
            <div className="col-6" ><img src={laptopimg} alt="laptop" className='img-fluid' /></div>
            <div className="col-6" id="iframe"><iframe   width="100%" height="100%" src="https://www.youtube.com/embed/PTqcbyRa9mU?si=WaqTlCb4e_QUFJCr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

        </div>
        </div>

    );
}

export default TextWithImg;