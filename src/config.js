import * as dotenv from "dotenv";

dotenv.config();

const { HOST_URL } = process.env;

export default {
  url: HOST_URL,
};
