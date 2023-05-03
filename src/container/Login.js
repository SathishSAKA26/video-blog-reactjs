import React from 'react'
// import image
import MusicBg from '../assets/images/mixer-wallpaper-1920x1080.jpg';
// import google
import { FcGoogle } from 'react-icons/fc';
// import google login auth pop-up
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const auth = getAuth(firebaseApp);
  // const login = async() = {
  const login = signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // // The signed-in user info.
      // const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      // }).catch((error) => {
      //   // Handle Errors here.
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // The email of the user's account used.
      //   const email = error.customData.email;
      //   // The AuthCredential type that was used.
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      //   // ...
    })
  // };


  return (
    <div className='flex justify-center items-center w-screen h-screen relative'>
      <img src={MusicBg} alt="BgImage" className="object-cover w-full h-full" />
      <div className="absolute w-screen h-screen top-0 left-0 bg-black flex justify-center items-center opacity-50">
        <div className=''>
          <button className='flex items-center bg-transparent bg-white opacity-90 hover:bg-blue-500 text-black font-bold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded' onClick={() => login()}>
            <FcGoogle className='text-2xl' />
            <span className='pl-1'>
              Signin with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  )
};
export default Login;