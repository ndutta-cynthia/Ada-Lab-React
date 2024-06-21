import './index.css';
import { Link } from 'react-router-dom';


function LoginPage(){
    return(
        <div id='login-button'>
            <nav>
                <h1>Welcome...</h1>
                <h1>Click here to login</h1>
                <button type='submit' id='my-button'><Link to= "/login">Login</Link></button>
            </nav>
        </div>
    )
}
export default LoginPage;
