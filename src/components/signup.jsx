import React, { useState, useContext } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FirebaseContext} from './Firebase';

const Signup = (props) => {

    //console.log(props);

    const firebase = useContext(FirebaseContext);
    //console.log(firebase);

    const data ={
        pseudo: '',
        email: '',
        password: '',
        confirmPassword:'',
        first_name : '',
        last_name : '',
        company :'',
        department :'',
        is_valid : false
        
    }

    const [loginData, setLoginData]= useState(data);
    const[error, setError] = useState('')
    const history = useHistory()

    const handleChange = e =>{
        setLoginData({...loginData, [e.target.id]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const {email, password, pseudo} = loginData;
        firebase.signupUser(email, password)
        .then(authUser => {
            return firebase.user(authUser.user.uid).set({
                pseudo : pseudo,
                email : email

            })

        })
        .then(() => {
            setLoginData({...data});        // vider les champs
            history.push('/myhome');    
        })
        .catch(error =>{
            setError(error);
            setLoginData({...data});    
        })

    }

    const {pseudo, email, password, confirmPassword} = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword ?
    <button disabled>Inscription</button> : <button>Inscription</button>

    //gestion erreurs
    const errormsg = error !== '' && <span>{error.message}</span>
    return (
        <div className="signUpLoginBox">
            <div className="slContainer">
                <div className="formBoxLeftSignup">

                </div>
                <div className="formBoxRight">
                    <div className="formContent">
                        {errormsg}
                        <h2>Inscription</h2>
                        <form onSubmit={handleSubmit} >
                            
                            <div className="inputBox">
                                <input onChange={handleChange} value ={pseudo} type="text" id="pseudo" autoComplete="off" required />
                                <label htmlFor="pseudo">Pseudo</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value ={email} type="email" id="email" autoComplete="off" required />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="inputBox">
                                <input onChange={handleChange} value ={password} type="password" id="password" autoComplete="off" required />
                                <label htmlFor="password">Mot de passe</label>
                            </div>
                            <div className="inputBox">
                                <input onChange={handleChange} value ={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            </div>
                             {btn}

                        </form>
                        <div className="linkContainer">
                            <Link className="simpleLink" to="/Login">Déjà inscrit? Connectez-vous.</Link>

                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Signup
