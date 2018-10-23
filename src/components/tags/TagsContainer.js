import React, { Component } from 'react';
import { connect } from "react-redux";
import TagsComponent from './TagsComponent';
import { searchItems, removeSearch } from '../../actions/searchActions';

class RecentContainer extends Component {
    deleteItem = (text) => {
        const newSearchList = this.props.currentSearchList.filter(search => search !== text);
        this.props.searchItems(newSearchList);
        this.props.removeSearch(text);
    }

    render() {
        if (this.props.currentSearchList.length === 0) {
            return null;
        }
        return (
            <TagsComponent
                list={this.props.currentSearchList}
                onClick={this.deleteItem}
            />
        );
    }
}

const mapStateToProps = ({ searchInput }) => ({
    currentSearchList: searchInput.currentSearchList
});

const mapDispatchToProps = {
    searchItems,
    removeSearch
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecentContainer);
