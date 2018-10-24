import React, { Component } from 'react';
import { connect } from "react-redux";
import List from '../commons/listSearches';
import { searchRestaurants } from '../../actions/restaurantActions';

class RecentContainer extends Component {
    selectItem = (text) => {
        this.props.searchRestaurants(this.props.currentSearchList, text);
    }

    render() {
        if (this.props.searchText.length > 0) {
            return null;
        }
        return (
            <List
                list={this.props.recentSearches}
                title={'Recent Searches'}
                onSelect={this.selectItem}
            />
        );
    }
}

const mapStateToProps = ({ recentSearches, searchInput }) => ({
    recentSearches,
    searchText: searchInput.searchText,
    inputFocus: searchInput.focus,
    currentSearchList: searchInput.currentSearchList
});

const mapDispatchToProps = {
    searchRestaurants
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecentContainer);
