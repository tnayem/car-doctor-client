import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center mt-4">
                <h3 className="text-3xl text-orange-600 font-bold">Service</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        services.map(service=><Service
                             key={service._id}
                             service = {service}
                             ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;