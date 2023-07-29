"use client"

import {createContext, useState} from "react"

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [url, setUrl] = useState("dashboard")

    const value = {
        url,
        setUrl,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}