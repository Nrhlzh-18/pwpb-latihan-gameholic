import { Container, Card, Row, Col, Image,  } from "react-bootstrap";
import back4blood from "../asset/best/back4blood.jpg";
import crysis3 from "../asset/best/crysis3.jpg";
import residentEvil3 from "../asset/best/residentEvil2.jpg";
import theWalkingDead from "../asset/best/theWalkingDead.jpg";
import thief from "../asset/best/thief.jpg";
import untilDawn from "../asset/best/untilDawn.jpg";

const BestGame = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center" id="best">Best Game</h1>
                <br />
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={back4blood} alt="Back 4 Blood Image" className="images" />
                            <div className="bg-dark">
                                <div className="p-3 m-1 text-white">
                                    <Card.Title className="text-center">Back 4 Blood Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        last update 1 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={crysis3} alt="Crysis 3 Image" className="images" />
                            <div className="bg-dark">
                                <div className="p-3 m-1 text-white">
                                    <Card.Title className="text-center">Crysis 3 Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        updated 1 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={residentEvil3} alt="Resident Evil 3 Image" className="images" />
                            <div className="bg-dark">
                                <div className="p-3 m-1 text-white">
                                    <Card.Title className="text-center">Resident Evil 3 Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        updated last 1 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={theWalkingDead} alt="The Walking Dead Image" className="images" />
                            <div className="bg-dark">
                                <div className="p-3 m-1 text-white">
                                    <Card.Title className="text-center">The Walking Dead Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        last update 1 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>  
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={thief} alt="Thief image" className="images" />
                            <div className="bg-dark">
                                <div className="p-3 m-1 text-white">
                                    <Card.Title className="text-center">Thief Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        last updated 1 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={untilDawn} alt="Until Dawn Image" className="images" />
                            <div className="bg-dark">
                                <div className="p-3 m-1 text-white">
                                    <Card.Title className="text-center">Until Dawn Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        Last Updated 1 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BestGame;