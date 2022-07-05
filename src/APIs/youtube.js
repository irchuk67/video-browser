import axios from 'axios';

const KEY = 'AIzaSyCzc-Xxl_yQYUViUlMOyYYxLqosjdoGWjA';

let createRequest = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

/*
let getVideoList = axios.get()
*/

export default createRequest;
