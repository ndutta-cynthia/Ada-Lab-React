import './index.css';
 import { useState } from 'react';
import { login } from './utils';
const Login= ()=>{
    
    
    const[username, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    console.log({username})

    const handleLogin = async(event)=>{
        event.preventDefault();
        const result = await login ({username, Password});
        console.log({result})
    }
    return(
        <div>
            <form onSubmit={handleLogin}>

                <h2>Login</h2>
                <input placeholder="Enter User Name" type="text" onChange={(event)=>setUserName(event.target.value)}/>
                <br/>
                <input placeholder="Enter Passworod" type="Password"  onChange={(event)=>Password(event.target.value)}/>
                <br/>
                <button type="submit"> login</button>

            </form>

        </div>

    );
}
export default Login;