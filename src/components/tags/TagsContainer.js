import React, { Component } from 'react';
import { connect } from 'react-redux';
import TagsComponent from './TagsComponent';
import { removeSearch } from '../../actions/searchActions';
import { searchRestaurants } from '../../actions/restaurantActions';

class RecentContainer extends Component {
    deleteItem = (text) => {
        const newSearchList = this.props.currentSearchList.filter(search => search !== text);
        this.props.searchRestaurants(newSearchList);
        this.props.removeSearch(text);
    }

    render() {
        return (
            <TagsComponent
                list={this.props.currentSearchList}
                onClick={this.deleteItem}
            />
        );
    }
}

const mapStateToProps = ({ searchInput }) => ({
    currentSearchList: searchInput.currentSearchList,
});

const mapDispatchToProps = {
    searchRestaurants,
    removeSearch,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RecentContainer);
