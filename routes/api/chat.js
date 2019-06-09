const axios = require("axios");
const express = require("express");
const router = express.Router();

const appID = "37819ef5ab1587";
const apiKey = "86a8bd3bd2c8070dc1e13d0d3288bced818ddfb7";
const agentUID = "demo-agent";

const url = "https://api.cometchat.com/v1";

const headers = {
  "Content-Type": "application/json",
  appid: appID,
  apikey: apiKey
};

router.get("/create", (req, res) => {
  const data = {
    uid: new Date().getTime(),
    name: "customer"
  };
  axios
    .post(`${url}/users`, JSON.stringify(data), {
      headers
    })
    .then(response => {
      requestAuthToken(response.data.data.uid)
        .then(token => {
          console.log("Success:" + JSON.stringify(token));
          res.json(token);
        })
        .catch(error => console.error("Error:", error));
    })
    .catch(error => console.error("Error:", error));
});

router.get("/auth", (req, res) => {
  const uid = req.query.uid;
  requestAuthToken(uid)
    .then(token => {
      console.log("Success:" + JSON.stringify(token));
      res.json(token);
    })
    .catch(error => console.error("Error:", error));
});

const requestAuthToken = uid => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/users/${uid}/auth_tokens`, null, {
        headers
      })
      .then(response => {
        console.log("New Auth Token:", response.data);
        resolve(response.data.data);
      })
      .catch(error => reject(error));
  });
};

router.get("/users", (req, res) => {
  axios
    .get(`${url}/users`, {
      headers
    })
    .then(response => {
      const { data } = response.data;
      const filterAgentData = data.filter(data => {
        return data.uid !== agentUID;
      });
      res.json(filterAgentData);
    })
    .catch(error => console.error("Error:", error));
});

module.exports = router;
