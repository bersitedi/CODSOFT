import axios from "axios";

const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "https://spring-97bs.onrender.com";

export const submitMessage = async (messageData) => {
  try {
    const { data } = await axios.post(
      `${backendUrl}/api/messages/submit`,
      messageData
    );
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
  pageSize = 10
) => {
  try {
    const params = {
      searchKeyword,
      page,
      limit: pageSize,
    };

    const { data, headers } = await axios.get(`${backendUrl}/api/messages`, {
      params,
    });
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error(error.message);
  }
};

export const getMessageById = async (messageId) => {
  try {
    const response = await axios.get(`${backendUrl}/api/messages/${messageId}`);

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching message details: ${error.message}`);
  }
};
export const deleteMessage = async (messageId) => {
  try {
    const response = await axios.delete(
      `${backendUrl}/api/messages/${messageId}`
    );

    return response.data;
  } catch (error) {
    throw new Error(`Error deleting message: ${error.message}`);
  }
};
