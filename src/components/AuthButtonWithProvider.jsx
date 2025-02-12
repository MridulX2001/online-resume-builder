import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import {GoogleAuthProvider, GithubAuthProvider, signInWithRedirect} from "firebase/auth";
import { auth } from "../config/firebase.config";

const AuthButtonWithProvider = ({Icon, label, provider}) => {

    const handleClick = async () => {
        const googleAuthProvider = new GoogleAuthProvider();
        const githubAuthProvider = new GithubAuthProvider();
        switch(provider) {
            case "GoogleAuthProvider" :
                await signInWithRedirect(auth, googleAuthProvider)
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => {
                    console.log(`Error Occured: ${err}`);
                });
                break;

            case "GithubAuthProvider" :
                await signInWithRedirect(auth, githubAuthProvider)
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => {
                    console.log(`Error Occured: ${err}`);
                });
                break;

            default :
            await signInWithRedirect(auth, googleAuthProvider)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(`Error Occured: ${err}`);
            });
                break;
        }
    }

    return (
        <div onClick={handleClick} className="w-full px-4 py-3 rounded-md border-2 border-blue-700 flex items-center justify-between cursor-pointer group hover:bg-blue-700 active:scale-95 duration-150 hover:shadow-md">
            <Icon className="text-txtPrimary text-xl grougp-hover:text-white" />
            <p className="text-txtPrimary text-lg group-hover:text-white">
                {label}
            </p>
            <FaChevronRight className="text-txtPrimary text-basr group-hover:text-white" />

        </div>
    );
}

export default AuthButtonWithProvider;