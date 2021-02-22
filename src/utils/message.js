import short from "short-uuid";

export const messageWrapper = (message, username, useravatar, timestamp) => {
  return {
    id: short.generate(),
    name: username,
    message,
    avatar: useravatar,
    timestamp: timestamp || null,
  };
};
