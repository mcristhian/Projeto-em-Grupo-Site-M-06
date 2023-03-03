import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Depoimentos from '../components/Depoimentos'

function Home() {
    return (
        <>
            {/*<Banners />*/}
            <Container className='w-75'>
                <Destaques />
                <Depoimentos />
            </Container>
        </>
    );
}

export default Home;