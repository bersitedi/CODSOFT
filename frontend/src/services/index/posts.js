import axios from "axios";

const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "https://spring-97bs.onrender.com";

export const getAllPosts = async (searchKeyword = "", page = 1, limit = 10) => {
  try {
    const { data, headers } = await axios.get(
      `https://spring-97bs.onrender.com/api/posts?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`
    );
    return { data, headers };
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const fetchPostsByCategory = async (categoryTitle) => {
  try {
    const response = await axios.get(
      `${backendUrl}/api/posts/category?category=${categoryTitle}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    throw error;
  }
};
export const getSinglePost = async ({ slug }) => {
  try {
    const { data } = await axios.get(`${backendUrl}/api/posts/${slug}`);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const deletePost = async ({ slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(
      `${backendUrl}/api/posts/${slug}`,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const updatePost = async ({ updatedData, slug, token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // Ensure correct content type for file upload
      },
    };

    // Create FormData object
    const formData = new FormData();
    formData.append("document", JSON.stringify(updatedData)); // Append updated data

    // Check if image exists in updatedData and append it to formData
    if (updatedData.image instanceof File) {
      formData.append("image", updatedData.image); // Append image
    }

    // Make PUT request with formData
    const { data } = await axios.put(
      `${backendUrl}/api/posts/${slug}`,
      formData,
      config
    );
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

export const createPost = async ({ token }) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(`${backendUrl}/api/posts`, {}, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
