import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Media, Row, Col, Breadcrumb, BreadcrumbItem, Container } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="topo">Qualquer coisa</div>
      </header>
      <article>
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Quem Somos</Breadcrumb.Item>
              <Breadcrumb.Item>Fotos</Breadcrumb.Item>
              <Breadcrumb.Item>Contato</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col>
            <Media>
              <img src="img/jaina.jpg"></img>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{color: "#ccc", marginBottom:"2%"}}>
              <Card.Img src="https://picsum.photos/200/100"/>
              <Card.Body>
              <Card.Title>
                Este é um exemplo de card
              </Card.Title>
              <Card.Text>
                Este será um texto
              </Card.Text>
                <Button variant="success">Esse é um btn</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </article>
      <footer>
        Rodapé
      </footer>
    </div>
  );
}

export default App;
