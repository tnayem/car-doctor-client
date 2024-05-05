import person from '../../../assets/img/images/about_us/person.jpg'
import parts from '../../../assets/img/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative'>
                        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-8 border-8 border-white" />
                    </div>
                    <div className='w-1/2 space-y-5'>
                        <h3 className='text-3xl font-bold text-[#FF3811]'>About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                        <p className='pb-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-primary bg-[#FF3811] border-none">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;