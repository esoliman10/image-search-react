import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID WjKbsKogxkjFm7URu3-42SWg6JXOkeiIakT3TRpXapw'
  }
});