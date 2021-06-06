import React, { useState, useEffect, useContext } from 'react';
import {Link, withRouter, useHistory} from 'react-router-dom';
import {FirebaseContext} from './Firebase';




const Login = (props) => {
    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);

    const [error, setError] = useState('');
    const history = useHistory()

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn === true){
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();
        firebase.loginUser(email, password)
        .then(user =>{
            setEmail('');
            setPassword('');
            // console.log(props.history);
            history.push('/myhome');
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })
    }

    const handleEmail = e => {
        setEmail(e.target.value);

    }

    return (
        <div className="singUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftLogin">
                </div>
                <div>
                        <div className="formBoxRight">
                            <div className="formContent">
                                {error !== '' && <span>{error.message}</span>}
                                <h2>Connexion</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="inputBox">
                                        <input onChange={handleEmail} value={email} type="email" autoComplete="off" required />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="inputBox">
                                        <input onChange={e => setPassword(e.target.value)} value ={password} type="password" autoComplete="off" required />
                                        <label htmlFor="password">Mot de passe</label>
                                    </div>
                                    {btn ? <button>Connextion</button> : <button disabled>Connexion</button> }
                                </form> 
                                <div className="linkContainer">
                                    <Link className="simpleLink" to="signup">Nouveau sur TMS ? Inscrivez-vous maintenant</Link>
                                    <br/>
                                    <Link className="simpleLink" to="forgetpassword">Mot de passe oublié. Récupérez-le ici.</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
        </div>
    )

}
export default withRouter (Login);