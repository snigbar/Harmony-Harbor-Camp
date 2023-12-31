import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";



const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
   

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                

                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, pictureurl: null, gender: null, contact: null, address: null }

                fetch('https://harmony-harbor-backend.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-ghost btn-outline">
                    <FaGoogle className="me-4"></FaGoogle> Get started with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;