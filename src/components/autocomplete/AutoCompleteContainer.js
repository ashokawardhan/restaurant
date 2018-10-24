import React, { Component } from 'react';
import { connect } from "react-redux";
import List from '../commons/listSearches';
import { searchRestaurants } from '../../actions/restaurantActions';

class AutoCompleteContainer extends Component {
    selectItem = (text) => {
        this.props.searchRestaurants(this.props.currentSearchList, text);
    }

    render() {
        if (this.props.searchText.length === 0) {
            return null;
        }
        return (
            <List
                list={this.props.autocomplete}
                onSelect={this.selectItem}
            />
        );
    }
}

const mapStateToProps = ({ autocomplete, searchInput }) => ({
    autocomplete,
    searchText: searchInput.searchText,
    currentSearchList: searchInput.currentSearchList
});

const mapDispatchToProps = {
    searchRestaurants
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AutoCompleteContainer);
