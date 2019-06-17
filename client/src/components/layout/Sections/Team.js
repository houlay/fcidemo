import React, { Component } from "react";
import dustin from "../../../img/employees/dustin.png";
import martina from "../../../img/employees/martina.jpg";
import bryan from "../../../img/employees/bryan.png";

export default class Clients extends Component {
  state = {
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
                <div className="team-card col-lg-4 col-md-12 col-12 mb-3 mb-lg-5">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="employee-name mb-3">
                        <span>Dustin Blommaert</span>
                      </div>
                      <div className="click-for-more show-on-break text-info">
                        <i
                          className="fas fa-chevron-circle-down fa-2x"
                          onClick={this.clickToShowMore0}
                        />
                      </div>
                      <div className="employee-picture dustin hide-on-break">
                        <img src={dustin} alt="Dustin" />
                      </div>
                      <div className="employee-bio hide-on-break">
                        <span>
                          Dustin is an IT wizard specializing in Windows and
                          Linux administration / support. He has earned his
                          CompTIA A+ certification and is currently working
                          towards his RHCSA. In his down time Dustin enjoys
                          chilling with his pup and PlayStation trophy hunting.
                          He is also a big fan of bow ties.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="team-card col-lg-4 col-md-12 col-12 mb-3 mb-lg-5">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="employee-name mb-3">
                        <span>Martina Bloem</span>
                      </div>
                      <div className="click-for-more show-on-break text-info">
                        <i
                          className="fas fa-chevron-circle-down fa-2x"
                          onClick={this.clickToShowMore1}
                        />
                      </div>
                      <div className="employee-picture martina hide-on-break">
                        <img src={martina} alt="Martina" />
                      </div>
                      <div className="employee-bio hide-on-break">
                        <span>
                          Martina is an ambition and resourceful professional
                          with over 20 years of administration experience. She
                          provides the office administration and finance
                          support, leaving the IT work to our experts! In her
                          spare time she enjoys cuddling with her cats and
                          playing video games.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="team-card col-lg-4 col-md-12 col-12 mb-3 mb-lg-5">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="employee-name mb-3">
                        <span>Bryan Ramos</span>
                      </div>
                      <div className="click-for-more show-on-break text-info">
                        <i
                          className="fas fa-chevron-circle-down fa-2x"
                          onClick={this.clickToShowMore2}
                        />
                      </div>
                      <div className="employee-picture bryan hide-on-break">
                        <img src={bryan} alt="Bryan" />
                      </div>
                      <div className="employee-bio hide-on-break">
                        <span>
                          Bryan is an IT prodigy specializing in help desk and
                          computer support. He has earned his CompTIA A+
                          certification and is currently looking towards in
                          increasing and learning more skills. Bryan enjoys the
                          sport of basketball, music and cars.{" "}
                        </span>
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
                    <span>Dustin Blommaert</span>
                  </div>

                  <div className="employee-picture-modal dustin">
                    <img src={dustin} alt="Dustin Blommaert" />
                  </div>
                  <div className="employee-bio-modal">
                    <span>
                      Dustin is an IT wizard specializing in Windows and Linux
                      administration / support. He has earned his CompTIA A+
                      certification and is currently working towards his RHCSA.
                      In his down time Dustin enjoys chilling with his pup and
                      PlayStation trophy hunting. He is also a big fan of bow
                      ties.
                    </span>
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
                    <span>Martina Bloem</span>
                  </div>

                  <div className="employee-picture-modal">
                    <img src={martina} alt="Martina Bloem" />
                  </div>
                  <div className="employee-bio-modal">
                    <span>
                      Martina is an ambition and resourceful professional with
                      over 20 years of administration experience. She provides
                      the office administration and finance support, leaving the
                      IT work to our experts! In her spare time she enjoys
                      cuddling with her cats and playing video games.
                    </span>
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
                    <span>Bryan Ramos</span>
                  </div>

                  <div className="employee-picture-modal">
                    <img src={bryan} alt="Bryan Ramos" />
                  </div>
                  <div className="employee-bio-modal">
                    <span>
                      Bryan is an IT prodigy specializing in help desk and
                      computer support. He has earned his CompTIA A+
                      certification and is currently looking towards in
                      increasing and learning more skills. Bryan enjoys the
                      sport of basketball, music and cars.
                    </span>
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
