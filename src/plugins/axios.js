import config from "../config";
import axios from "axios";

// Setting default url
axios.defaults.baseURL = config.url;
