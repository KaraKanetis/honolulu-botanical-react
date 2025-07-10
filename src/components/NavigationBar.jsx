import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container className="justify-content-between">
        <Navbar.Brand href="#">
          <img
            src="https://www.honolulu.gov/dpr/wp-content/uploads/sites/34/elementor/thumbs/CC-Logo-4C-Horizontal-qf105xthsx4ea3hu72v5bp9iruy6lpl2pxjqwe01g0.png"
            alt="Honolulu Logo"
            width="200"
          />
        </Navbar.Brand>
        <Nav className="mx-auto gap-4">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Your Parks ▾</Nav.Link>
          <Nav.Link href="#">Activities & Programs ▾</Nav.Link>
          <Nav.Link href="#">Volunteer & Give ▾</Nav.Link>
          <Nav.Link href="#">Trees & Gardens ▾</Nav.Link>
          <Nav.Link href="#">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;