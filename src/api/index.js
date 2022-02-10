import axios from 'axios';

const url = 'http://localhost:8090/posts';

export const fetchPosts = () => axios.get(url);
