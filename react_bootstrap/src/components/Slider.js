import React from "react";
import {Carousel} from "react-bootstrap";
import ocean from "../slider.jpg"

export default function Slider() {
    return (
        <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={ocean}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Web Blog</h3>
                    <p>Nice try and catch</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={ocean}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>#2 Slider</h3>
                    <p>Go next</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className="d-block w-100"
                    src={ocean}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>#3 Slider</h3>
                    <p>Finish him</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}