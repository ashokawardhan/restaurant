import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { searchRestaurants } from './actions/restaurantActions';
import URI from 'urijs';
const uri = new URI();
const uriSearchText = uri.search(true).q || null;

const SearchContainer = Loadable({
    loader: () => import('./components/Search/SearchContainer'),
    loading: () => <div>loading...</div>,
});

const RecentContainer = Loadable({
    loader: () => import('./components/recent/RecentContainer'),
    loading: () => <div>loading...</div>,
});

const AutoCompleteContainer = Loadable({
    loader: () => import('./components/autocomplete/AutoCompleteContainer'),
    loading: () => <div>loading...</div>,
});

const RestaurantsContainer = Loadable({
    loader: () => import('./components/restaurants/RestaurantsContainer'),
    loading: () => <div>loading...</div>,
});

class App extends Component {
    componentDidMount() {
        if (uriSearchText) {
            this.props.searchRestaurants([], uriSearchText); // send call if query string
        }
        window.onpopstate = function(event) {
            if (event && event.state) {
                window.location.reload(); // reload on back button
            }
        }

    }

    render() {
        return (
            <div className="App">
                <SearchContainer />
                {this.props.inputFocus && this.props.searchText.length === 0 && <RecentContainer />}
                {this.props.inputFocus && this.props.searchText.length > 0 && <AutoCompleteContainer />}
                {!this.props.inputFocus && this.props.restaurants.length > 0 && <RestaurantsContainer />}
            </div>
        );
    }
}

const mapStateToProps = ({ searchInput, restaurants }) => ({
    inputFocus: searchInput.focus,
    searchText: searchInput.searchText,
    restaurants: restaurants.restaurants,
});

const mapDispatchToProps = {
    searchRestaurants
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
