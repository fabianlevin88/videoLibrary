import axios from 'axios'

const KEY = 'AIzaSyAr7--FROHnVybzX_qBLAv4mncplfayZFI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});