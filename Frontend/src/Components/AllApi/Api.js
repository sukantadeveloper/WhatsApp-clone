import axios from "axios";

const url = "http://localhost:3002";

export const addUser = async (data) => {
  try {
    let response = await axios.post(`${url}/add`, data);

    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const GetUser = async () => {
  try {
    let response = await axios.get(`${url}/users`);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("Error while calling setConversation API ", error);
  }
};

export const getConversation = async (users) => {
  try {
      let response = await axios.post(`${url}/conversation/get`, users);
      return response.data;
  } catch (error) {
      console.log('Error while calling getConversation API ', error);
  }
}

export const newMessage=async (data)=>{
  try {
    await axios.post(`${url}/message/add`,data)
  } catch (error) {
    console.log('Error while calling newMessage API ', error);
  }
}