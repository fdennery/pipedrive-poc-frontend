import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({pipedriveUser: null, googleUser: null})

                useEffect(() => {
                    const checkAuth = async () => {
                        try {
                            const responsePipedrive = await fetch('http://localhost:3000/auth/pipedrive/user', {
                                credentials: 'include'}
                            )
                            const responsePidedriveJson = await responsePipedrive.json()
                                if (responsePidedriveJson.user) {
                                    let pipedriveUser = {pipedriveUser: responsePidedriveJson.user}
                                setUser(user => ({
                                    ...user,
                                    ...pipedriveUser
                                }))
                            }
                            const responseGoogle = await fetch('http://localhost:3000/auth/session', {
                                credentials: 'include'}
                            )
                            const responseGoogleJson = await responseGoogle.json()
    
                            if (responseGoogleJson.session.googleIdToken){
                                    let googleUser = {googleUser: responseGoogleJson.session.googleIdToken}
            
                                    setUser(user => ({
                                        ...user,
                                        ...googleUser
                                    }))

                                }

                            
                            
                            } catch (err) {
                            console.error(err)
                            };
                    };
                    checkAuth();
                }, []);

return (
    <AuthContext.Provider value={ {user} }>
        {children}
    </AuthContext.Provider>
)
}


