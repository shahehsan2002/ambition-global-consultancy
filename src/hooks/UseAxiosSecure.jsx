import axios from 'axios';

export const axiosSecure = axios.create({
    baseURL: 'https://discuss-dive-server.vercel.app'
});

const UseAxiosSecure = () => {
    axiosSecure.interceptors.request.use(
        function (config) {
            const token = localStorage.getItem('access-token');
            console.log('request stopped by interceptor',token);
            config.headers.authorization = `Bearer ${token}`;
            return config;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    },(error) =>{
        const status = error.response.status;
        console.log('status error in the interceptor', status);
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default UseAxiosSecure;
