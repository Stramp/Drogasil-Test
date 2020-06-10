import React from 'react';
import Container from '../components/Container';
import Title from '../components/Title';
import Button from '../components/Button'
import Input from '../components/Input';

import useTheme from '../context/ContextTheme'
import Header from '../components/Header';





const Home = () => {
    const { handleThemeChange } = useTheme();
    return (
        <>
            <Header>

            </Header>
            <Container >
                <Title>Drogasil</Title>

                <Input />
                <Button>Botao</Button>
                <Button onClick={handleThemeChange}>theme</Button>
            </Container>
        </>
    );
}

export default Home;