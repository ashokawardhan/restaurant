import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeRestaurantsPage } from '../../actions/restaurantActions';
import RestaurantsComponent from './RestaurantsComponent';

class RestaurantsContainer extends Component {
    changeRestaurantsPage = (page) => {
        this.props.changeRestaurantsPage(this.props.currentSearchList, page);
    }

    render() {
        const {restaurants} = this.props;
        return (
            <RestaurantsComponent
                changeRestaurantsPage={this.changeRestaurantsPage}
                restaurantsList={restaurants.restaurants}
                currentPageNo={restaurants.currentPageNo}
                loadingInitial={restaurants.loadingInitial}
                failureInitial={restaurants.failureInitial}
                loadingPageNo={restaurants.loadingPageNo}
                loadingAdd={restaurants.loadingAdd}
                failureAdd={restaurants.failureAdd}
            />
        );
    }
}

const mapStateToProps = ({ searchInput, restaurants }) => ({
    restaurants,
    currentSearchList: searchInput.currentSearchList
});

const mapDispatchToProps = {
    changeRestaurantsPage
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RestaurantsContainer);
