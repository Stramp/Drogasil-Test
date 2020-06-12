/*import { createContext } from 'react';

const ThemeContext = createContext({
    trocaTheme: () => { }
});

export default ThemeContext;*/


import React, { useState, createContext, useContext } from 'react'
import { ThemeProvider as Theme } from 'styled-components';
import { dark, light } from './themes'

const Context = createContext({
    handleThemeChange: () => { },
    outra: (texto) => { },
    texto: ''
});





export const ThemeProvider = ({ children }) => {

    const [isWhiteTheme, setIsWhiteTheme] = useState({})

    function handleThemeChange() {
        return setIsWhiteTheme(!isWhiteTheme)
    }


    return (
        <Context.Provider value={{ handleThemeChange }} >
            <Theme theme={!isWhiteTheme ? dark : light} >
                {
                    children
                }
            </Theme>
        </Context.Provider>
    )
}

export default function useTheme() {
    const context = useContext(Context)
    return context
}