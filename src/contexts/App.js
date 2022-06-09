import React, { createContext, useState } from 'react'

const values = {
    user: null,
    setUser: ()=>{},
}

const AppContext = createContext({ ...values })

const AppProvider = ({children}) => {
    const [user, setUser] = useState(values.user)

    return (
        <AppContext.Provider
            value={{
                user,
                setUser
            }}

            >
                {children}
            </AppContext.Provider>
    )
}

export { AppContext as default, AppProvider }

