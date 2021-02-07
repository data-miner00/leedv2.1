import * as dotenv from "dotenv";

dotenv.config();

const { VUE_APP_SERVER_ENDPOINT } = process.env;

export const LOCAL_STORAGE_PREFIX = "leed-";

export default {
  url: VUE_APP_SERVER_ENDPOINT,
};
