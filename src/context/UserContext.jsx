import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import swal from 'sweetalert'

export const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState()
    const [userEmail, setUserEmail] = useState()
    const [logged, setLogged] = useState(false)

    const signUp = (email, password) => {
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        swal ({
            title: 'Registro exitoso',
            text: 'Bienvenido a la tienda',
            icon: 'success',
            timer: 2000
        })
    })
    .catch((error) => {
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
        setUserEmail(user.email);
          // ...
        })
        .catch((error) => {
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

    const dropOut = () => {
        deleteUser(user).then(() => {
            console.log('Usuario eliminado')
        }).catch((error) => {
            console.log(error.message)
        });
        logout()
    }

    return ( 
    <UserContext.Provider value = {{user, logged, userEmail, login, logout, signUp, updateProfile, dropOut}} > 
        {children} 
    </UserContext.Provider>
    )
}

export default UserContextProvider