import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    box-shadow: 0 2px 4px rgba(0,0,0,.2);
    border-radius: 4px;
    background: #fff;
    min-height: 100%;
    padding: 0 16px;
`;

const CardImage = styled.img`
    width: 80px;
    height: 80px;
    background: #eef0f5;
    float: left;
    position: relative;
`;

export default (props) => {
    return (
        <Card>
            <CardImage></CardImage>
        </Card>
    );
}
