import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2 p-5'>
            <Col className='mt-2' sm="12" md="3">
                <Card>
                    <Card.Img variant="top" src="./public/seguro.svg" />
                    <Card.Body>
                        <Card.Title>Seguro</Card.Title>
                        <Card.Text>
                            Aplicativo adequado a LGPD.
                        </Card.Text>
                        <LinkContainer to="http://localhost:3000/">
                            <Button variant="secondary">Acessar a EstoqueMerc</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="3">
                <Card>
                    <Card.Img variant="top" src="./public/suporte-um-a-um.svg" />
                    <Card.Body>
                        <Card.Title>Suporte um-a-um</Card.Title>
                        <Card.Text>
                            Suporte humanizado e taxa de 30 minutos de tempo de resposta.
                        </Card.Text>
                        <LinkContainer to="/recursos">
                            <Button variant="secondary">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="3">
                <Card>
                    <Card.Img variant="top" src="./public/usabilidade-simples.svg" />
                    <Card.Body>
                        <Card.Title>Usabilidade simples</Card.Title>
                        <Card.Text>
                            Usabilidade de fácil adaptação.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="secondary">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="3">
                <Card>
                    <Card.Img variant="top" src="./public/valor-acessivel.svg" />
                    <Card.Body>
                        <Card.Title>Valor acessível</Card.Title>
                        <Card.Text>
                            Valor abaixo da média dos concorrentes.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="secondary">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                         
        </Row>
    );
}

export default Destaques;