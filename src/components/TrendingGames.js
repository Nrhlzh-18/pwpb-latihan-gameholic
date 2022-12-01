import { Container, Row, Col, Card, Image } from "react-bootstrap";
import mineCraftImage from "../asset/trending/minecraft.jpg";
import farCryImage from "../asset/trending/farCry6.jpg";
import lolImage from "../asset/trending/lol.jpg";
import olliworldImage from "../asset/trending/olliworld.jpg";
import valorantImage from "../asset/trending/valorant.jpg";
import wowImage from "../asset/trending/wow.jpg";

const TrendingGame = () =>{
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center" id="trending">TRENDING GAMES</h1>
                <br />
                <Row>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={mineCraftImage} alt="Minecraft Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Minecraft Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        Last update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={farCryImage} alt="Far Cry 6 Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Far Cry 6 Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        Last update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={lolImage} alt="League of Legends Image" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">League of Legends Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        Last update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={olliworldImage} alt=" ollie world Image" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Olli Olli World Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        Last update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={valorantImage} alt="Valorant Image" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Valorant Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        Lastt update 3 mins ago
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImage">
                            <Image src={wowImage} alt="World of Warcraft Game" className="images" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">World of Warcraft Game</Card.Title>
                                    <Card.Text className="text-left">
                                        this is a wider card with natural lead-in to additional content
                                    </Card.Text>
                                    <Card.Text className="text-left text-muted">
                                        Lastt update 3 mins ago
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

export default TrendingGame;