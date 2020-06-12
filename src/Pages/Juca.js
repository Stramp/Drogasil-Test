import React, { useState } from 'react';
import Container from '../components/Container';
import Title from '../components/Title';
import Button from '../components/Button'
import Input from '../components/Input';

import useTheme from '../context/ContextTheme'
import Header from '../components/Header';





const Juca = () => {
    const { handleThemeChange, texto } = useTheme();


    return (
        <h1>{texto}</h1>
    );
}

export default Juca;