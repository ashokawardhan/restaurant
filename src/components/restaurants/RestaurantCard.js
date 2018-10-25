import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background: #fff;
    min-height: 120px;
    max-width: 400px;
    padding: 16px;
    margin: 5px;
`;

const CardImage = styled.img`
    width: 110px;
    height: 110px;
    margin-top: 5px;
    background: #eef0f5;
    float: left;
    position: relative;
`;

const CardTextContainer = styled.div`
    margin-left: 140px;
    margin-right: 20px;
    @media (max-width: 768px) {
        margin-right: 0px;
        margin-left: 120px;
    }
`;

const CardHeader = styled.div`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
`;

const Bar = styled.hr`
    border: none;
    margin-top: 5px;
    border-top: 2px solid #bbb;
`;

const StarFillSvg = styled.svg`
    fill: ${props => (props.active ? '#ffd055' : '#ccc')}
`;

const StarSvg = ({ active }) => (
    <StarFillSvg height="25" width="23" active={active}>
        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style={{ fillRule: 'nonzero' }} />
    </StarFillSvg>
);

const StarRating = styled.span`
    float: left;
`;

const DeliveryTime = styled.span`
    float: right;
`;

const RestaurantDetails = styled.div`
    min-height: 100px;
`;

export default ({ restaurant }) => {
    const roundedRating = Math.round(restaurant.rating);
    const deliveryMinutes = restaurant.deliveryTime % 60;
    const deliveryHours = Math.floor(restaurant.deliveryTime / 60);
    return (
        <Card>
            <CardImage src={restaurant.image} alt={restaurant.name} />
            <CardTextContainer>
                <RestaurantDetails>
                    <CardHeader>{restaurant.name}</CardHeader>
                    <div>{restaurant.cuisines.toString().replace(new RegExp(',', 'g'), ', ')}</div>
                    <div aria-hidden="true">
                        {[...Array(roundedRating)].map(() => <StarSvg active />)}
                        {[...Array(5 - roundedRating)].map(() => <StarSvg />)}
                    </div>
                    <Bar />
                </RestaurantDetails>
                <div>
                    <StarRating>{restaurant.rating}</StarRating>
                    <DeliveryTime>
                        {deliveryHours > 0 ? `${deliveryHours} hour and ` : ''}
                        {`${deliveryMinutes} minutes`}
                    </DeliveryTime>
                </div>
            </CardTextContainer>
        </Card>
    );
};
