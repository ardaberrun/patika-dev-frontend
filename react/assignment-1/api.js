import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getData = async (userId) => {
    const { data: user } = await axios.get(`${BASE_URL}/users/${userId}`);
    const { data: userPosts } = await axios.get(`${BASE_URL}/posts?userId=${userId}`);

    return {...user, posts: userPosts};  
}

export default getData;