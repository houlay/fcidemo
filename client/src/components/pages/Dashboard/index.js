import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropTypes from "prop-types";
import "./style.css";
import Agent from "../../LiveChat/Agent";
import Header from "./Header";
import ReviewMgmt from "./ReviewMgmt";

const Dashboard = props => {
  return (
    <div>
      <Header />
      <Tabs>
        <TabList>
          <Tab>Live Chat</Tab>
          <Tab>User Management</Tab>
          <Tab>Review Management</Tab>
        </TabList>

        <TabPanel>
          <Agent />
        </TabPanel>
        <TabPanel>
          <h2>Users</h2>
        </TabPanel>
        <TabPanel>
          <ReviewMgmt />
        </TabPanel>
      </Tabs>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
