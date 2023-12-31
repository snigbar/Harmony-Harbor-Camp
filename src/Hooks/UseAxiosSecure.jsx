import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';



//   base Url
const axiosSecure = axios.create({baseURL: 'https://harmony-harbor-backend.vercel.app/'});

const useAxiosSecure = () => {
  const { user,logOut } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  useEffect(() => {
    
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-harmony');
      if (token) {config.headers.Authorization = `Bearer ${token}`;}
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // await logOut();

        // if (!user) return await logOut();
        
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;