import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Accordion,
  Form,
  Carousel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Landingpg = () => {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar expand="lg" bg="light" className="py-3 shadow-sm sticky-top">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            Positivus
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#usecases">Use Cases</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Button variant="outline-dark" className="ms-3 rounded-pill">
                Request a Quote
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="py-5 bg-white" id="hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="fw-bold display-5 mb-3">
                Navigating the digital landscape for success
              </h1>
              <p className="text-secondary mb-4">
                Our digital marketing agency helps businesses grow and succeed
                online through SEO, PPC, social media marketing, and content
                creation.
              </p>
              <Button
                style={{ backgroundColor: "#191A23", border: "none" }}
                className="text-white px-4 py-2 rounded-pill"
              >
                Book a Consultation
              </Button>
              <div className="mt-4 d-flex align-items-center gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                  height="30"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Dribbble_logo.svg"
                  alt="Dribbble"
                  height="25"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/35/HubSpot_Logo.svg"
                  alt="HubSpot"
                  height="25"
                />
              </div>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
                alt="Hero Illustration"
                className="img-fluid"
                width="400"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section id="services" className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold text-start mb-4">
            <span style={{ backgroundColor: "#B9FF66", padding: "4px 12px" }}>
              Services
            </span>
          </h2>
          <Row className="g-4">
            {[
              {
                title: "Search Engine Optimization",
                color: "#fff",
                icon: "fa-search",
              },
              {
                title: "Pay-per-click Advertising",
                color: "#B9FF66",
                icon: "fa-bullhorn",
              },
              {
                title: "Social Media Marketing",
                color: "#191A23",
                icon: "fa-thumbs-up",
              },
              {
                title: "Email Marketing",
                color: "#F3F3F3",
                icon: "fa-envelope",
              },
              {
                title: "Content Creation",
                color: "#B9FF66",
                icon: "fa-pen-nib",
              },
              {
                title: "Analytics and Tracking",
                color: "#fff",
                icon: "fa-chart-line",
              },
            ].map((service, i) => (
              <Col md={6} key={i}>
                <Card
                  className="p-4 border-0 shadow-sm h-100"
                  style={{
                    backgroundColor: service.color,
                    color: service.color === "#191A23" ? "#fff" : "#000",
                    borderRadius: "15px",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <i
                      className={`fas ${service.icon} fs-1 me-3`}
                      style={{
                        color:
                          service.color === "#191A23" ? "#B9FF66" : "#191A23",
                      }}
                    ></i>
                    <div>
                      <h5 className="fw-bold">{service.title}</h5>
                      <a href="#" className="text-decoration-none fw-semibold">
                        Learn More <i className="fas fa-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container className="text-center bg-light p-5 rounded-4">
          <h3 className="fw-bold mb-3">Let's Make Things Happen</h3>
          <p className="text-secondary mb-4">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button
            style={{ backgroundColor: "#191A23", border: "none" }}
            className="text-white px-4 py-2 rounded-pill"
          >
            Get Your Free Proposal
          </Button>
        </Container>
      </section>

      <section className="py-5 bg-dark text-light">
        <Container>
          <h2 className="fw-bold mb-5">
            <span
              style={{
                backgroundColor: "#B9FF66",
                color: "#000",
                padding: "4px 12px",
              }}
            >
              Case Studies
            </span>
          </h2>
          <Row>
            {[
              "A restaurant increased traffic by 50%.",
              "A B2B firm achieved 1st-page ranking.",
              "A retailer grew online sales by 20%.",
            ].map((text, i) => (
              <Col md={4} key={i}>
                <Card className="p-4 border-0 bg-transparent text-light">
                  <p>{text}</p>
                  <a href="#" className="text-success">
                    Learn more <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-4">
            <span style={{ backgroundColor: "#B9FF66", padding: "4px 12px" }}>
              Our Working Process
            </span>
          </h2>
          <Accordion defaultActiveKey="0">
            {[
              "Consultation",
              "Research & Strategy Development",
              "Implementation",
              "Monitoring and Optimization",
              "Reporting and Communication",
              "Continual Improvement",
            ].map((step, i) => (
              <Accordion.Item eventKey={i.toString()} key={i}>
                <Accordion.Header>{`0${i + 1}. ${step}`}</Accordion.Header>
                <Accordion.Body>
                  We carefully handle the {step.toLowerCase()} stage to ensure
                  measurable results and client satisfaction.
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-4">
            <span style={{ backgroundColor: "#B9FF66", padding: "4px 12px" }}>
              Team
            </span>
          </h2>
          <Row className="g-4">
            {[
              "John Smith",
              "Jane Doe",
              "Michael Brown",
              "Emily Johnson",
              "Brian Williams",
              "Sarah Kim",
            ].map((member, i) => (
              <Col md={4} key={i}>
                <Card className="text-center border-0 shadow-sm p-3">
                  <img
                    src="https://via.placeholder.com/100"
                    alt={member}
                    className="rounded-circle mx-auto mb-3"
                  />
                  <h6 className="fw-bold">{member}</h6>
                  <p className="text-muted">
                    {i % 2 === 0 ? "SEO Specialist" : "Content Creator"}
                  </p>
                  <a href="#">
                    <i className="fab fa-linkedin text-dark"></i>
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-dark text-light text-center">
        <Container>
          <h2 className="fw-bold mb-5">
            <span
              style={{
                backgroundColor: "#B9FF66",
                color: "#000",
                padding: "4px 12px",
              }}
            >
              Testimonials
            </span>
          </h2>
          <Carousel>
            {[
              "Positivus transformed our online presence!",
              "Amazing results and friendly team.",
              "Highly recommend for digital growth!",
            ].map((quote, i) => (
              <Carousel.Item key={i}>
                <p className="fs-5">{quote}</p>
                <p className="text-secondary">– John Smith</p>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-4">
            <span style={{ backgroundColor: "#B9FF66", padding: "4px 12px" }}>
              Contact Us
            </span>
          </h2>
          <Row className="justify-content-center">
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>
                <Button variant="dark" className="rounded-pill px-4">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="py-5 bg-dark text-light">
        <Container>
          <Row>
            <Col md={6}>
              <h5>Positivus</h5>
              <p>Empowering businesses with digital excellence.</p>
              <p>Email: info@positivus.com</p>
            </Col>
            <Col md={6}>
              <Form className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="Subscribe to news"
                  className="me-2"
                />
                <Button style={{ backgroundColor: "#B9FF66", color: "#000" }}>
                  Subscribe
                </Button>
              </Form>
            </Col>
          </Row>
          <hr className="border-secondary mt-4" />
          <p className="text-center text-secondary mb-0">
            {new Date().getFullYear()} Positivus. All Rights Reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default Landingpg;
