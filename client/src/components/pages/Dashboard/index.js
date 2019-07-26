import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PropTypes from "prop-types";
import "./style.css";
import Agent from "../../LiveChat/Agent";
import Header from "./Header";
import ReviewMgmt from "./ReviewMgmt";
import UserMgmt from "./UserMgmt";

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
          <UserMgmt />
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
