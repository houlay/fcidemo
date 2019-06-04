import React, { Component } from "react";
import ClientCard from "../../ClientCard";
import clientList from "../../client-list.json";

export default class Clients extends Component {
  state = {
    clientList: clientList
  };

  render() {
    return (
      <div>
        <div className="content-section" id="clients">
          <div className="container text-center">
            <div className="content-section-heading">
              <h3 className="text-secondary mb-0">Clients</h3>
              <h2 className="mb-5">We have been proudly serving</h2>
            </div>
            <div className="clients-container">
              <div className="row">
                {this.state.clientList.map(client => (
                  <ClientCard
                    key={client.id}
                    id={client.id}
                    clientName={client.clientName}
                    imgPath={client.imgPath}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
