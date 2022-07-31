import React from "react";
import {Container} from "react-bootstrap";
import jumboImg from "../jumbo.jpg"
import styled from "styled-components";

const Styles = styled.div`
    .jumbo{
        background: url(${jumboImg}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay{
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => {
    return (
        <Styles>
            <div className="jumbo bg-light p-5">
                <div className="overlay"></div>
                <Container>
                    <h1>Beholds the Multiverse!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet assumenda deserunt doloremque
                        hic
                        id
                        maxime, non obcaecati optio quae quibusdam reprehenderit voluptatibus? Cum ducimus explicabo
                        illo
                        nobis
                        optio, voluptate.</p>
                </Container>
            </div>
        </Styles>
    );
}

export default Jumbotron;