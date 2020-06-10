/*import { createContext } from 'react';

const ThemeContext = createContext({
    trocaTheme: () => { }
});

export default ThemeContext;*/


import React, { useState, createContext, useContext } from 'react'
import { ThemeProvider as Theme } from 'styled-components';
import { dark, light } from './themes'

const Context = createContext({
    handleThemeChange: () => { }
});




export const ThemeProvider = ({ children }) => {

    const [isWhiteTheme, setIsWhiteTheme] = useState({})

    function handleThemeChange() {
        return setIsWhiteTheme(!isWhiteTheme)
    }

    return (
        <Context.Provider value={{}} >


        </Context.Provider>
    )
}

export default function useTheme() {
    const context = useContext(Context)
    return context
}