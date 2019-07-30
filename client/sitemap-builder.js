require("@babel/register");

const router = require("./router").default;
const Sitemap = require("../").default;

new Sitemap(router).build("http://fcidemo.herokuapp.com").save("./sitemap.xml");
