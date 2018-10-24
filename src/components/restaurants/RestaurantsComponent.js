import React from 'react';
import styled from 'styled-components';

const RestaurantsListContainer = styled.div`
    padding: 20px;
    background-color: lightgray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 32px;
    margin: 0 auto;
    width: 90%;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 5px;
    }
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`;

export default (props) => (
    <RestaurantsListContainer>
        
    </RestaurantsListContainer>
)
