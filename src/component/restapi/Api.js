import axios from 'axios';

// const API_URL = 'https://impulsesvc.netlify.app/.netlify/functions/api';
const API_URL = 'http://localhost:9999/.netlify/functions/api';

export const loginUser = async (username, password) => {
  return axios.post(`${API_URL}/user/login`, { username, password });
};

export const fetchUsers = async () => axios.get(`${API_URL}/users`);

export const fetchVideos = async () => axios.get(`${API_URL}/videos`);

export const addUser = async (user) => axios.post(`${API_URL}/users`, user);

export const updateUser = async (userId, user) => axios.put(`${API_URL}/users/${userId}`, user);

export const addVideo = async (video) => axios.post(`${API_URL}/videos`, video);

// video manager
export const fetchVideoGroups = async () => {
  return await axios.get(`${API_URL}/video-groups`);
};

export const addVideoGroup = async (group) => {
  return await axios.post(`${API_URL}/video-groups`, group);
};

export const updateVideoGroup = async (groupId, updatedGroup) => {
  return await axios.put(`${API_URL}/video-groups/${groupId}`, updatedGroup);
};

export const deleteVideoGroup = async (groupId) => {
  return await axios.delete(`${API_URL}/video-groups/${groupId}`);
};

export const addVideoToGroup = async (groupId, video) => {
  return await axios.post(`${API_URL}/video-groups/${groupId}/videos`, video);
};

export const updateVideo = async (groupId, videoId, updatedVideo) => {
  return await axios.put(`${API_URL}/video-groups/${groupId}/videos/${videoId}`, updatedVideo);
};

export const deleteVideo = async (groupId, videoId) => {
  return await axios.delete(`${API_URL}/video-groups/${groupId}/videos/${videoId}`);
};