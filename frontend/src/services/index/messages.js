import axios from "axios";

export const submitMessage = async (messageData) => {
  try {
    const { data } = await axios.post("/api/messages/submit", messageData);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
export const getAllMessages = async () => {
  try {
    const { data } = await axios.get("/api/messages");
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
