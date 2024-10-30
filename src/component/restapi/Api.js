import axios from 'axios';

const apiUrl = 'https://impulsesvc.netlify.app/.netlify/functions/api';

export const loginUser = async (username, password) => {
  return axios.post(`${apiUrl}/user/login`, { username, password });
};

export const fetchUsers = async () => axios.get(`${apiUrl}/users`);

export const fetchVideos = async () => axios.get(`${apiUrl}/videos`);

export const addUser = async (user) => axios.post(`${apiUrl}/users`, user);

export const updateUser = async (userId, user) => axios.put(`${apiUrl}/users/${userId}`, user);

export const addVideo = async (video) => axios.post(`${apiUrl}/videos`, video);

export const updateVideo = async (videoId, video) => axios.put(`${apiUrl}/videos/${videoId}`, video);
