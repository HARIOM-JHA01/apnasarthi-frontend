import React from "react";

const Card = ({ title, description }) => {
    return (
        <div className="card bg-base-100 w-70 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src="https://picsum.photos/300/200"
                    alt="Shoes"
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
