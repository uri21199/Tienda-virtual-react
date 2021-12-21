import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import swal from 'sweetalert'

export const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState()
    const [logged, setLogged] = useState(false)

    const signUp = (email, password) => {
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        swal ({
            title: 'Registro exitoso',
            text: 'Bienvenido a la tienda',
            icon: 'success',
            timer: 2000
        })
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
    });
    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
        const user = userCredential.user;
        setUser(user);
          // ...
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        });
    }

    const logout = () => {  
        signOut(auth).then(()=> {
            swal ({
                title: 'Sesión cerrada',
                text: 'Vuelve pronto',
                icon: 'success',
                timer: 2000
            })
        }).catch ((error)=>{
            alert(error.message);
        })
    }

    useEffect (
        () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                setUser(user);
                setLogged(true);
                  // ...
                } else {
                  // User is signed out
                  // ...
                setLogged(false);
                }
            });
        },
        []
    )



    return ( 
    <UserContext.Provider value = {{user, logged, login, logout, signUp, updateProfile}} > 
        {children} 
    </UserContext.Provider>
    )
}

export default UserContextProvider