import React from 'react';
import { Container } from 'react-bootstrap';
import Conteudo from '../../components/Conteudo';
import Header from '../../components/Header';

const Feed: React.FC = () => {
    return (
        <Container>
            <Header />
            <Conteudo />
        </Container>
    )
}

export default Feed;