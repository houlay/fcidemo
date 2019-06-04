import React from "react";

const ClientCard = props => {
  return (
    <div className="client-card col-lg-4 col-md-6 col-6 mb-3 mb-lg-5">
      <div className="card shadow">
        <div className="card-body">
          <img src={props.imgPath} alt={props.clientName} />
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
