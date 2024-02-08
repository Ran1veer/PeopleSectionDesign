import { Container, Row, Col } from "react-bootstrap";
import "./People.css";
import PNG from "../assets/mark.png";
import PNG1 from "../assets/mark1.png";

const People = () => {
  return (
    <Container>
      <div className="main">
        <div className="card">
          <Row>
            <Col lg={6} className="text-center">
              <img id="mark" src={PNG1} alt="png" />
            </Col>
            <Col lg={6}>
              <div className="heading">
                <h1>Real Stories from Real Customers</h1>
                <p>Get Inspired by these stories.</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="content">
                <div className="boxRight">
                  <div className="rightcontent">
                    <p>
                      <span>
                        <img id="PNG" src={PNG} alt="" />
                      </span>
                      To quick start my startup laniding page design, I was
                      looking for a landing page UI kit. Landify is one of the
                      best landing page UI kits I have come across. It so
                      flexible, well-organized, and easily editable.
                    </p>
                    <div className="namecontent">
                      <h4>Floyd Miles</h4>
                      <p>Vice President, GoPro</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="boxleft">
                <Row>
                  <Col md={6}>
                    <div className="box1">
                      <div className="boxcontain">
                        <p>
                          <span>
                            <img id="PNG" src={PNG} alt="" />
                          </span>
                          I used landify and created a landing page for my
                          startup within a week. The Landify UI kit is simple
                          and highly intuitive, so anyone can use it.
                        </p>
                        <div className="namecontent">
                          <h4>jane Cooper</h4>
                          <p>CEO, Airbnb</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="box2">
                      <div className="boxcontain">
                        <p>
                          <span>
                            <img id="PNG" src={PNG} alt="" />
                          </span>
                          Landify saved our time in designing my company page.
                        </p>
                        <div className="namecontent">
                          <h4>Kristin Watson</h4>
                          <p>Co-Founder, Strapi</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default People;
