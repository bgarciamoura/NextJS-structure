import Head from 'next/head';

import Saudavel from '../assets/saudavel.svg';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
    return (
        <Container>
            <Head>
                <title>Homepage</title>
            </Head>

            <Saudavel />
            <h1>NextJS project structure</h1>
            <p>To simple initiate an NextJS project with typescript + styled-components</p>
        </Container>
    );
};

export default Home;
