import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-3 bg-secondary rounded p-1'>
            <Col sm="12" md="20" className='text-center'>
                <img src="./public/depoimento_1.jpg" alt="Foto do depoimento 1" className='rounded' height='100px' weight='100px'/>
            </Col>
            <Col className='text-center' sm="12" md="20">
                <strong>Patrícia Rosângela</strong>
                <p>
                    "Obtemos um aplicativo de qualidade excelente que nos proporcionou ter mais controle sobre nossos produtos."
                </p>
            </Col>
        </Row>
        <Row className='mt-3 bg-secondary rounded p-1'>
            <Col sm="12" md="20" className='text-center'>
                <img src="./public/depoimento_2.jpg" alt="Foto do depoimento 2" className='rounded' height='100px' weight='100px'/>
            </Col>
            <Col className='text-center' sm="12" md="20">
                <strong>Oliver Gustavo</strong>
                <p>
                "Sempre trabalhei sem sistema de estoque, nunca tive conhecimento. A EstoqueMerc me ajudou bastante sobre como controlar meus produtos. Excelente aplicativo!"
                </p>
            </Col>
        </Row>
        <Row className='mt-3 bg-secondary rounded p-1'>
            <Col sm="12" md="20" className='text-center'>
                <img src="./public/depoimento_3.jpg" alt="Foto do depoimento 3" className='rounded' height='100px' weight='100px'/>
            </Col>
            <Col className='text-center' sm="12" md="20">
                <strong>Raimundo Breno</strong>
                <p>
                "A Ferramenta do EstoqueMerc veio para integrar e fazer esse diferencial, pela credibilidade na informação, conseguindo confiar no que realmente eu tinha no estoque e na produção. Excelente ferramenta!"
                </p>
            </Col>
        </Row>        
        </>
    )
}

export default Depoimentos