import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Item_recurso(item) {
    return (
        <Col sm="12" md="4" key={item.id}>
            <Card className='m-3'>
                <Card.Body>
                    <Card.Title>
                        <strong>{item.title}</strong>
                    </Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

function Lista_recursos(props) {
    return (
        <Row>
            {props.recursos.map(item => Item_recurso(item))}
        </Row>
    );
}

export default Lista_recursos