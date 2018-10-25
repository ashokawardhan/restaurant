import React, { Fragment } from 'react';
import styled from 'styled-components';
import RestaurantCard from './RestaurantCard';

const RestaurantContainer = styled.div`
    padding: 20px;
    background-color: #fcfcfc;
    @media (max-width: 768px) {
        padding: 5px;
    }
`;

const RestaurantsListContainer = styled.div`
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

const FiltersContainer = styled.div`
    text-align: right;
    margin: 20px;
`;

const FilterText = styled.span`
    padding: 8px 16px;
    border-radius: 10px;
    color: #704900;
    margin: 20px;
    &.active {
        background-color: #fff;
        border: 1px solid #444;
    }
`;

export default ({
    loadMoreRestaurants, restaurants, loadingInitial, failureInitial, sortByRating, sortByDelivery, sortRatingFilter, sortDeliveryFilter,
}) => (
    <RestaurantContainer>
        {
            !failureInitial
            && (
                <Fragment>
                    {
                        !loadingInitial
                    && (
                        <Fragment>
                            <FiltersContainer>
                                <FilterText
                                    onClick={sortByDelivery}
                                    className={sortDeliveryFilter ? 'active' : ''}
                                    aria-label="Filter by delivery time"
                                >
                                    {'Delivery Time'}
                                </FilterText>
                                <FilterText
                                    onClick={sortByRating}
                                    className={sortRatingFilter ? 'active' : ''}
                                    aria-label="Filter by rating"
                                >
                                    {'Rating'}
                                </FilterText>
                            </FiltersContainer>
                            <RestaurantsListContainer>
                                {restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
                            </RestaurantsListContainer>
                        </Fragment>
                    )
                    }
                    {
                        loadingInitial
                    && <div>Loading ...</div>
                    }
                </Fragment>
            )
        }
        {
            failureInitial
            && <div>The system seems to be down</div>
        }
    </RestaurantContainer>
);
