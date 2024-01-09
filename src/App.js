
import './App.css';
import {Container ,Nav,Navbar, NavDropdown }from 'react-bootstrap';
import {Button,Card }from 'react-bootstrap';
import './style.css';
import picture from './R.jpg';
import picture1 from './R1.jpg';
import picture2 from './R2.jpg';

function App() {
  
  return (
    <>
    <div className='App'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Shop NOW </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">NEW In </Nav.Link>
            <Nav.Link href="#link">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bags</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dresses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Jewerly & Accessories
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<div className='cards'>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>$10.76 </Card.Title>
        <Card.Text>
        Shop NOW mini dress in pink 
        </Card.Text>
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture1} />
      <Card.Body>
        <Card.Title>$38.61</Card.Title>
        <Card.Text>
        Shop NOW mini dress in black 
        </Card.Text>
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picture2} />
      <Card.Body>
        <Card.Title>$24.50</Card.Title>
        <Card.Text>
        Shop NOW long dress in blue
        </Card.Text>
        <Button variant="primary">Add to Card</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  );
}

export default App;
