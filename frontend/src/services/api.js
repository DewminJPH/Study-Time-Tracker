import axios from "axios";

const API_URL = "http://localhost:3002/api"; // Backend URL

// Get all tasks
export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data; 
};

// Create a new task
export const createTask = async (task) => {
  const response = await axios.post(`${API_URL}/createtasks`, task);
  return response.data;
};

// Update a task
export const updateTask = async (id, task) => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, task);
  return response.data;
};

// Delete a task
export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/tasks/${id}`);
  return response.data; 
};