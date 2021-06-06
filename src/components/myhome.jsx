import React, {useContext}  from 'react'
import Firebase, {FirebaseContext} from './Firebase';


const  MyHome = (props) => {

   // const firebasecontext = useContext(FirebaseContext);
    
    //const data = firebase.user();
    console.log(props. userData)
    return (
        <div>
            
            <h1>Mon accueil <span></span></h1>
            <h2>User : {props.userData.pseudo} </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quaerat temporibus aut beatae quasi corporis nobis reprehenderit quas! Molestiae placeat veniam laborum nostrum et quo nesciunt explicabo pariatur aspernatur ab.</p>
        

        </div>
    )
}

export default MyHome