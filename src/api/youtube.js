import axios from 'axios';

const KEY ="AIzaSyBMWLQJWu4tMeSKtSr96ey3wfU1OL0OeUc";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
    headers: {}
});
