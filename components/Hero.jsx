import React from "react";

const Hero = () => {
    return (
        <div
            className="hero sm:h-[40vh] md:h-[40vh] lg:h-[60vh] xl:h-[80vh] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                        Apna Sarthi
                    </h1>
                    <p className="mb-5 text-sm md:text-base">
                        Discover Bihar with our premium rental vehicles.
                        Self-drive or chauffeured, we offer flexible delivery
                        and pickup. Enjoy seamless tours and unforgettable
                        experiences.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
