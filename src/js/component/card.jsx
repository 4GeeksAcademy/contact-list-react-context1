import React from "react";


function Card({ name, phone, email, address }) {

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://picsum.photos/150/200?grayscale" className="img-fluid rounded-start rounded-circle" alt="contactPicture" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{phone}</p>
                        <p className="card-text"><small className="text-body-secondary">{email}</small></p>
                        <p className="card-text"><small className="text-body-secondary">{address}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Card;