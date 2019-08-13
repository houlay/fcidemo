import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style.css";
import Agent from "../../LiveChat/Agent";
import Header from "./Header";
import ReviewMgmt from "./ReviewMgmt";
import UserMgmt from "./UserMgmt";
import { loaduser } from "../../../actions/auth";
import store from "../../../store";

const Dashboard = props => {
  useEffect(() => {
    store.dispatch(loaduser());
  }, []);

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

export default Dashboard;
