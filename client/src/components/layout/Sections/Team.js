import React, { Component } from "react";
import employeeList from "../../employee-list.json";

export default class Clients extends Component {
  state = {
    employeeList: employeeList,
    toggleOnOff0: "modal bio-modal d-none",
    toggleOnOff1: "modal bio-modal d-none",
    toggleOnOff2: "modal bio-modal d-none"
  };

  clickToShowMore0 = () => {
    this.setState({ toggleOnOff0: "modal d-block" });
  };
  clickToShowMore1 = () => {
    this.setState({ toggleOnOff1: "modal d-block" });
  };
  clickToShowMore2 = () => {
    this.setState({ toggleOnOff2: "modal d-block" });
  };
  clickToClose = () => {
    this.setState({
      toggleOnOff0: "modal d-none",
      toggleOnOff1: "modal d-none",
      toggleOnOff2: "modal d-none"
    });
  };

  render() {
    return (
      <div>
        <div className="content-section" id="team">
          <div className="container text-center">
            <div className="content-section-heading text-light">
              <h3 className="text-secondary mb-0 section-contrast">Team</h3>
              <h2 className="mb-5 ">
                Meet the people behind your great experience
              </h2>
            </div>
            <div className="team-container">
              <div className="row">
                <div className="team-card col-lg-4 col-md-12 col-12 mb-3 mb-lg-5 animated zoomIn delay-1s">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="employee-name mb-3">
                        <span>{this.state.employeeList[0].employeeName}</span>
                      </div>
                      <div className="click-for-more show-on-break text-info">
                        <i
                          className="fas fa-chevron-circle-down fa-2x"
                          onClick={this.clickToShowMore0}
                        />
                      </div>
                      <div className="employee-picture hide-on-break">
                        <img
                          src={this.state.employeeList[0].imgPath}
                          alt={this.state.employeeList[0].employeeName}
                        />
                      </div>
                      <div className="employee-bio hide-on-break">
                        <span>{this.state.employeeList[0].employeeBio}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="team-card col-lg-4 col-md-12 col-12 mb-3 mb-lg-5 animated zoomIn delay-1s">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="employee-name mb-3">
                        <span>{this.state.employeeList[1].employeeName}</span>
                      </div>
                      <div className="click-for-more show-on-break text-info">
                        <i
                          className="fas fa-chevron-circle-down fa-2x"
                          onClick={this.clickToShowMore1}
                        />
                      </div>
                      <div className="employee-picture hide-on-break">
                        <img
                          src={this.state.employeeList[1].imgPath}
                          alt={this.state.employeeList[1].employeeName}
                        />
                      </div>
                      <div className="employee-bio hide-on-break">
                        <span>{this.state.employeeList[1].employeeBio}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="team-card col-lg-4 col-md-12 col-12 mb-3 mb-lg-5 animated zoomIn delay-1s">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="employee-name mb-3">
                        <span>{this.state.employeeList[2].employeeName}</span>
                      </div>
                      <div className="click-for-more show-on-break text-info">
                        <i
                          className="fas fa-chevron-circle-down fa-2x"
                          onClick={this.clickToShowMore2}
                        />
                      </div>
                      <div className="employee-picture hide-on-break">
                        <img
                          src={this.state.employeeList[2].imgPath}
                          alt={this.state.employeeList[2].employeeName}
                        />
                      </div>
                      <div className="employee-bio hide-on-break">
                        <span>{this.state.employeeList[2].employeeBio}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-container">
          <div className={this.state.toggleOnOff0}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="employee-name mb-3">
                    <span>{this.state.employeeList[0].employeeName}</span>
                  </div>

                  <div className="employee-picture-modal">
                    <img
                      src={this.state.employeeList[0].imgPath}
                      alt={this.state.employeeList[0].employeeName}
                    />
                  </div>
                  <div className="employee-bio-modal">
                    <span>{this.state.employeeList[0].employeeBio}</span>
                  </div>
                  <i
                    className="fas fa-times-circle fa-2x text-danger mt-2"
                    onClick={this.clickToClose}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-container">
          <div className={this.state.toggleOnOff1}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="employee-name mb-3">
                    <span>{this.state.employeeList[1].employeeName}</span>
                  </div>

                  <div className="employee-picture-modal">
                    <img
                      src={this.state.employeeList[1].imgPath}
                      alt={this.state.employeeList[1].employeeName}
                    />
                  </div>
                  <div className="employee-bio-modal">
                    <span>{this.state.employeeList[1].employeeBio}</span>
                  </div>
                  <i
                    className="fas fa-times-circle fa-2x text-danger"
                    onClick={this.clickToClose}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-container">
          <div className={this.state.toggleOnOff2}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="employee-name mb-3">
                    <span>{this.state.employeeList[2].employeeName}</span>
                  </div>

                  <div className="employee-picture-modal">
                    <img
                      src={this.state.employeeList[2].imgPath}
                      alt={this.state.employeeList[2].employeeName}
                    />
                  </div>
                  <div className="employee-bio-modal">
                    <span>{this.state.employeeList[2].employeeBio}</span>
                  </div>
                  <i
                    className="fas fa-times-circle fa-2x text-danger"
                    onClick={this.clickToClose}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
