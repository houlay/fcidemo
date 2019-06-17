import React from "react";

const ClientCard = props => {
  return (
    <div className="client-card col-lg-4 col-md-6 col-12 mb-3 mb-lg-5">
      <div className="card shadow">
        <div className="card-body">
          <a href={props.redirectUrl} target="_blank" rel="noopener noreferrer">
            <img src={props.imgPath} alt={props.clientName} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
