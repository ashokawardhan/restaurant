import React, {Component} from 'react';
import Loadable from 'react-loadable';
import { connect } from "react-redux";

const SearchContainer = Loadable({
    loader: () => import("./components/Search/SearchContainer"),
    loading: () => <div>loading...</div>
});

const RecentContainer = Loadable({
    loader: () => import("./components/recent/RecentContainer"),
    loading: () => <div>loading...</div>
});

const AutoCompleteContainer = Loadable({
    loader: () => import("./components/autocomplete/AutoCompleteContainer"),
    loading: () => <div>loading...</div>
});

class App extends Component {
    render() {
        return (
            <div className="App">
                <SearchContainer />
                {this.props.inputFocus && this.props.searchText.length === 0 && <RecentContainer />}
                {this.props.inputFocus && this.props.searchText.length > 0 && <AutoCompleteContainer />}
                {!this.props.inputFocus && this.props.restaurants[0] && this.props.restaurants[0].length > 0 && <div>ABC</div>}
            </div>
        );
    }
}

const mapStateToProps = ({ searchInput, restaurants }) => ({
    inputFocus: searchInput.focus,
    searchText: searchInput.searchText,
    restaurants: restaurants.restaurants
});

export default connect(
    mapStateToProps,
    null
)(App);
