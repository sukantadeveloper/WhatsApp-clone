import axios from "axios";

const url = "http://localhost:3002";

export const addUser = async (data) => {
  try {
    let response = await axios.post(`${url}/add`, data);
    console.log(response, "My responce");
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

// Get all conversations
export const conversations = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};
