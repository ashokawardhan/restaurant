import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRestaurantsPage, changePage } from '../../actions/restaurantActions';
import RestaurantsComponent from './RestaurantsComponent';

class RestaurantsContainer extends Component {
    state = {
        sortNone: true,
        sortDelivery: false,
        sortRating: false,
    };

    loadMoreRestaurants = () => {
        this.props.changeRestaurantsPage(this.props.currentSearchList, this.props.restaurants.currentPageNo + 1);
    }

    resetSort = () => {
        this.setState({
            sortNone: true,
            sortRating: false,
            sortDelivery: false,
        });
    }

    sortByDelivery = () => {
        if (!this.state.sortDelivery) {
            this.setState({
                sortNone: false,
                sortDelivery: true,
                sortRating: false,
            });
        } else {
            this.resetSort();
        }
    }

    sortByRating = () => {
        if (!this.state.sortRating) {
            this.setState({
                sortNone: false,
                sortDelivery: false,
                sortRating: true,
            });
        } else {
            this.resetSort();
        }
    }

    render() {
        const { restaurants } = this.props;
        const restaurantsList = this.state.sortNone
            ? restaurants.restaurants
            : this.state.sortRating
                ? restaurants.restaurants.sort((a, b) => b.rating - a.rating)
                : restaurants.restaurants.sort((a, b) => a.deliveryTime - b.deliveryTime);
        return (
            <RestaurantsComponent
                loadMoreRestaurants={this.loadMoreRestaurants}
                restaurants={restaurantsList}
                loadingInitial={restaurants.loadingInitial}
                failureInitial={restaurants.failureInitial}
                loadingAdd={restaurants.loadingAdd}
                failureAdd={restaurants.failureAdd}
                sortByRating={this.sortByRating}
                sortByDelivery={this.sortByDelivery}
                sortRatingFilter={this.state.sortRating}
                sortDeliveryFilter={this.state.sortDelivery}
            />
        );
    }
}

const mapStateToProps = ({ searchInput, restaurants }) => ({
    restaurants,
    currentSearchList: searchInput.currentSearchList,
});

const mapDispatchToProps = {
    changeRestaurantsPage,
    changePage,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RestaurantsContainer);
