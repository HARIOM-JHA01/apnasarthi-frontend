import Hero from "@/components/Hero";
import Image from "next/image";
import data from "@/data/cardData";
import Card from "@/components/Card";
export default function Home() {
    return (
        <main>
            <Hero />
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 bg-[#3B82F680]">
                {data.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </section>

            <section className="p-6 bg-[#3B82F680] grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="flex flex-col py-10 md:py-20 leading-normal">
                    <h3 className="text-2xl md:text-3xl font-bold">
                        Why choose apnasaathi?
                    </h3>
                    <p className="pt-2 leading-loose text-sm md:text-md">
                        At Apna Sarthi, we are dedicated to providing a seamless
                        and enjoyable travel experience. Our platform offers a
                        wide range of vehicles, flexible rental options, and
                        curated tour packages to cater to your needs. With our
                        commitment to customer satisfaction and focus on safety,
                        you can explore the beautiful state of Bihar with
                        confidence.
                    </p>
                </section>
                <section className="flex items-center justify-center">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4">
                        <div className="border-2 rounded h-full p-4 bg-white">
                            <svg
                                className="w-12 h-12 mx-auto"
                                viewBox="-2.4 -2.4 28.80 28.80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#3B82F680"
                                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                        stroke=""
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </g>
                            </svg>
                            <h4 className="text-center mt-2 text-md font-semibold">
                                Diverse fleet
                            </h4>
                            <p className="text-center text-sm">
                                Choose from a wide selection of vehicles,
                                including sedans, SUVs, and luxury cars.
                            </p>
                        </div>
                        <div className="border-2 rounded h-full p-4 bg-white">
                            <svg
                                className="w-12 h-12 mx-auto"
                                viewBox="-2.4 -2.4 28.80 28.80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#3B82F680"
                                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                        stroke=""
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </g>
                            </svg>
                            <h4 className="text-center mt-2 text-md font-semibold">
                                Flexible Rental Options
                            </h4>
                            <p className="text-center text-sm">
                                Enjoy the flexibility of choosing the rental
                                duration that suits your travel plans.
                            </p>
                        </div>
                        <div className="border-2 rounded h-full p-4 bg-white">
                            <svg
                                className="w-12 h-12 mx-auto"
                                viewBox="-2.4 -2.4 28.80 28.80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#3B82F680"
                                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                        stroke=""
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </g>
                            </svg>
                            <h4 className="text-center mt-2 text-md font-semibold">
                                Curated Tour Packages
                            </h4>
                            <p className="text-center text-sm">
                                Discover Bihar with our carefully curated tour
                                packages, designed to give you an authentic
                                experience.
                            </p>
                        </div>
                        <div className="border-2 rounded h-full p-4 bg-white">
                            <svg
                                className="w-12 h-12 mx-auto"
                                viewBox="-2.4 -2.4 28.80 28.80"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#3B82F680"
                                transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                        stroke=""
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </g>
                            </svg>
                            <h4 className="text-center mt-2 text-md font-semibold">
                                Customer Support
                            </h4>
                            <p className="text-center text-sm">
                                Experience 24/7 customer support to assist you
                                with your travel needs and ensure a hassle-free
                                journey.
                            </p>
                        </div>
                    </div>
                </section>
            </section>

            <section className="p-6 md:p-10 bg-[#3B82F680] grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="flex items-center justify-center">
                    <Image
                        className="rounded-xl"
                        src="https://picsum.photos/600/400"
                        alt="Picture of Bihar"
                        width={600}
                        height={400}
                        layout="responsive" // Ensures the image scales properly
                    />
                </section>
                <section className="flex flex-col py-6 md:py-10">
                    <h3 className="text-2xl md:text-3xl font-bold">
                        Explore the beauty of Bihar
                    </h3>
                    <p className="pt-2 leading-loose text-sm md:text-md">
                        Bihar is a state in eastern India, bordering Nepal. It
                        is divided by the River Ganges, which floods its fertile
                        plains. Important Buddhist pilgrimage sites include the
                        Bodhi Tree in Bodhgaya&apos;s Mahabodhi Temple, under
                        which the Buddha allegedly meditated. In the state
                        capital Patna, Mahavir Mandir temple is revered by
                        Hindus, while Sikhs worship at the domed, riverside
                        Gurdwara of Takht Sri Harmandir Sahib Ji.
                    </p>

                    <div className="pt-4 md:pt-6">
                        <button className="btn btn-primary p-2 md:p-4 text-sm md:text-base">
                            Book Now
                        </button>
                    </div>
                </section>
            </section>
        </main>
    );
}
