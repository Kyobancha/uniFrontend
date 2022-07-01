import { Carousel } from "react-bootstrap";

import LogoImage from "../../img/landingpage-background.jpg";

function Background() {
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={`${LogoImage}`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <h1 className="display-6 text-center">
                                Knowledge speaks, but wisdom listens.
                            </h1>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            <cite title="Source Title">Jimi Hendrix</cite>
                        </figcaption>
                    </figure>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={`${LogoImage}`}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={`${LogoImage}`}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Background;
