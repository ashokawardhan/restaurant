import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchComponent from './SearchComponent';
import { focusSearch, blurSearch, changeSearch } from '../../actions/searchActions';
import { searchRestaurants } from '../../actions/restaurantActions';
import { autoCompleteText } from '../../actions/autocompleteActions';

class SearchContainer extends Component {
    onChange = (event) => {
        this.props.changeSearch(event.target.value);
        this.props.autoCompleteText(event.target.value);
    }

    onFocus = () => {
        this.props.focusSearch();
    }

    onBlur = () => {
        this.props.blurSearch();
    }

    submit = (event) => {
        if (event.keyCode === 13 && this.props.searchText.length > 0 && !this.props.inList) { // 13 for enter
            this.props.searchRestaurants(this.props.currentSearchList, this.props.searchText);
        }
        if (event.keyCode === 27) { // 27 for escape
            document.getElementById('search-bar').blur();
        }
    }

    clear = () => {
        this.props.changeSearch('');
    }

    render() {
        return (
            <SearchComponent
                onChange={this.onChange}
                searchText={this.props.searchText}
                onKeyDown={this.submit}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                clear={this.clear}
            />
        );
    }
}

const mapStateToProps = ({ searchInput }) => ({
    searchText: searchInput.searchText,
    inList: searchInput.inList,
    currentSearchList: searchInput.currentSearchList,
});

const mapDispatchToProps = {
    focusSearch,
    blurSearch,
    changeSearch,
    searchRestaurants,
    autoCompleteText,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchContainer);
