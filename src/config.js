import assert from "assert";
import * as dotenv from "dotenv";

dotenv.config();

const { PORT, HOST, HOST_URL } = process.env;

assert(PORT, "PORT is required");
assert(PORT, "HOST is required");

export default {
  port: PORT,
  host: HOST,
  url: HOST_URL,
};
