import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import yudexImage from '../assets/yudexImage.JPG';


const Style = styled.div`
 .jumbo {
     background: url(${yudexImage}) no repeat fixed bottom;
     background-size: cover;
     color: #efefef
     height: 200px;
     position: relative;
     z-index: 10;
 }

 .overlay {
     background-color: #000;
     opacity: 0.6;
     position: absolute;
     top: 0;
     right: 0;
     left: 0;
     bottom: 0;
     z-index: 15;
 }
`;

export const Jumbotron = () => (
    <Style>
        <Jumbo fluid className="jumbo">
            <div className="overlay">
                <Container>
                    <h1>Welcome</h1>
                    <p>Yudemy!!! Bringing The World To Your Door Step</p>
                </Container>
            </div>
        </Jumbo>
    </Style>
)