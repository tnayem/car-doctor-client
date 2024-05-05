import img1 from '../../../assets/img/images/banner/1.jpg'
import img2 from '../../../assets/img/images/banner/2.jpg'
import img3 from '../../../assets/img/images/banner/3.jpg'
import img4 from '../../../assets/img/images/banner/4.jpg'
import img5 from '../../../assets/img/images/banner/5.jpg'
import img6 from '../../../assets/img/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="container mx-auto my-20">
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full flex items-center">
                        <div className='text-white w-1/3 space-y-6 ml-12'>
                            <h2 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-outline text-white ml-5'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full flex items-center">
                        <div className='text-white w-1/3 space-y-6 ml-12'>
                            <h2 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-outline text-white ml-5'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full flex items-center">
                        <div className='text-white w-1/3 space-y-6 ml-12'>
                            <h2 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-outline text-white ml-5'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] w-full h-full flex items-center">
                        <div className='text-white w-1/3 space-y-6 ml-12'>
                            <h2 className='text-6xl font-semibold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <button className='btn btn-primary'>Discover More</button>
                            <button className='btn btn-outline text-white ml-5'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;