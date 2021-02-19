import * as dotenv from "dotenv";

dotenv.config();

const {
  VUE_APP_SERVER_ENDPOINT,
  VUE_APP_SERVER_CHAT_ENDPOINT,
  VUE_APP_SERVER_DOC_ENDPOINT,
} = process.env;

export const LOCAL_STORAGE_PREFIX = "leed-";

export default {
  url: VUE_APP_SERVER_ENDPOINT,
  chatUrl: VUE_APP_SERVER_CHAT_ENDPOINT,
  docUrl: VUE_APP_SERVER_DOC_ENDPOINT,
};
