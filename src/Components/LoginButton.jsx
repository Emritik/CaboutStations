import { useGoogleLogin } from "@react-oauth/google";

import { useAuth } from "../AuthContext";

import { toast } from "react-hot-toast";
import { useState } from "react";
import Loader from "./Loader"
//import { gapi } from "gapi-script";

const LoginButton = () => {
  const { user, setUser } = useAuth();
  const [loading,setLoading] = useState(false);


     const login = useGoogleLogin({
    onSuccess: async tokenResponse => {
     // console.log(tokenResponse);
      setLoading(true)
      
      try {
        const userInfoResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        });
        //gapi.client.setToken({access_token:tokenResponse.access_token})
        const userInfo = await userInfoResponse.json();
        //add access_token to userInfo
        userInfo.access_token = tokenResponse?.access_token; 

        //console.log(userInfo);
        setLoading(false);
        toast.success("Login successful");
        setUser(userInfo);
        
        
      } catch (error) {
        setLoading(false)
        toast.error("Error fetching user info", error.message);
        console.error("Error fetching user info:", error);
      }
    },
    onError: errorResponse => console.log('Login Failed:', errorResponse),
    scope: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets'
  });
 

  if (user) return null;

  return (
    <div>
      {loading && <Loader />}
    <button
    onClick={login}
      className="flex items-center justify-center space-x-2 border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition duration-150"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path
          fill="#4285F4"
          d="M24 9.5c2.9 0 5.4 1.1 7.2 2.8l5.3-5.3C32.5 3.7 28.5 2 24 2 14.7 2 7 9.7 7 19s7.7 17 17 17c4.7 0 8.8-1.6 11.7-4.2l-5.3-5.3C28.9 27.9 26.5 29 24 29c-4.4 0-8-3.6-8-8s3.6-8 8-8z"
        />
        <path
          fill="#34A853"
          d="M12.1 23.7c-.2-.6-.3-1.3-.3-2 0-.7.1-1.4.3-2L7 14.1C5.7 16.5 5 19.1 5 22s.7 5.5 2 7.9l5.1-6.2z"
        />
        <path
          fill="#FBBC05"
          d="M24 29c2.4 0 4.6-.8 6.3-2.1l-5.3-5.3c-.6.4-1.4.6-2.3.6-1.8 0-3.2-1.2-3.8-2.9H12v1.8c0 1.9.7 3.6 1.9 4.9L24 29z"
        />
        <path
          fill="#EA4335"
          d="M42 19.7h-2v-1H24v6h10.5c-1.2 3.3-4.4 5.8-8.5 5.8-5 0-9-4-9-9s4-9 9-9c2.3 0 4.4.8 6 2.1l4.3-4.3C36 7.9 30.3 5 24 5 14.3 5 7 12.3 7 22s7.3 17 17 17c9.4 0 17-7.6 17-17 0-1.1-.1-2.1-.3-3.1z"
        />
      </svg>
      <span>Sign in with Google</span>
    </button>
    </div>
  );
};

export default LoginButton;
