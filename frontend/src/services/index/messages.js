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
export const getAllMessages = async (
  searchKeyword = "",
  page = 1,
  pageSize = 10 // change from limit to pageSize
) => {
  try {
    const params = {
      searchKeyword,
      page,
      limit: pageSize, // change from pageSize to limit
    };

    const { data, headers } = await axios.get("/api/messages", { params });
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};


const MESSAGE_API_URL = "/api/messages";

export const getMessageById = async (messageId) => {
  try {
    const response = await axios.get(`${MESSAGE_API_URL}/${messageId}`);

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching message details: ${error.message}`);
  }
};
