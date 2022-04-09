import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Login = () => {
     const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{margin:"20px"}}><button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form>
            <input type="emial" placeholder="your email"/><br></br>
            <input type="password" name="" id="" placeholder="Password"/><br />
            <button>Login</button>
            </form>
        </div>
    );
};

export default Login;