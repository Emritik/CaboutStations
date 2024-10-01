
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CarListing from "./Pages/CarListing.jsx"
import Home from './Pages/Home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { BookingProvider } from './BookingContext.jsx'
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { web } from "../OAuthCredentials.json";
import { AuthProvider } from './AuthContext.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
        element: <App />,
        children:[
          {           
            path: '',
            element: <Home />
          },
          {
            path: '/cars',
            element: <CarListing />
          }
        ]
    }
  ]
)



ReactDOM.createRoot(document.getElementById('root')).render(
 
    <GoogleOAuthProvider clientId={web.client_id}>
      <AuthProvider>
        <BookingProvider>
          <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
        
            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
          />

          <RouterProvider router={router} />
        </BookingProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  
);
