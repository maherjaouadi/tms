import React, {useState, useContext, useEffect} from 'react'
import Logout from './logout'
import {FirebaseContext} from './Firebase';
import Loader from './loader';

import MyHome from './myhome';

const Welcome = props => {
    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {

        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
        })

        if (!!userSession) {
            // console.log(userSession)    
            firebase.user(userSession.uid)
            .get()
            .then(doc => {
                if (doc && doc.exists) {
                    const myData = doc.data();
                    setUserData(myData);
                    // console.log(userData)
                }
            })
            .catch( error => {
                console.log(error);
            })
        }

        return () => {
            listener()
        }
    }, [userSession])
    
    return userSession === null ? (
        <Loader
            loadingMsg={"Authentification..."}
            styling={{textAlign: 'center', color:'#FFFFFF'}}
        />
    ):
     (
        <div className="quiz-bg">
            <div className="container"> 
            
            <MyHome userData={userData}/>
            {/* <Quiz userData={userData} /> */}
            </div>
        </div>
    )
}

export default Welcome;
