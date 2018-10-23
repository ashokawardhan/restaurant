import React, {Fragment} from 'react';
import styled from "styled-components";
import Cross from '../commons/cross';
import TagsContainer from '../tags/TagsContainer';

const SearchBar = styled.div`
    border: solid 1px #ccc;
    padding: 0 8px;
    position: relative;
    display: flex;
    margin: 60px 120px 0px 120px;
    box-shadow: 0 3px 2px #ccc;
    @media (max-width: 768px) {
        margin: -8px -8px 0px -8px;
        box-shadow: none;
        border-top: none;
        border-left: none;
        border-right: none;

    }
`;

const SearchInput = styled.input`
    border: none;
    width: 100%;
    font-size: 22px;
    outline: 0;
    padding: 30px 0 15px;

`;
const SearchLabel = styled.label`
    font-size: 22px;
    position: absolute;
    transform: translate(0, 25px) scale(1);
    transform-origin: top left;
    transition: all .2s ease-in-out;
    color: gray;
    &.active {
        transform: translate(0, 8px) scale(.75);
        font-size: 18px;
    }
`;

export default (props) => {
    return (
        <Fragment>
            <SearchBar>
                <SearchLabel
                    htmlFor="search-bar"
                    className={props.searchText.length > 0 ? "active": "inactive"}
                >
                    {'Search for cuisine or restaurant'}
                </SearchLabel>
                <SearchInput 
                    id="search-bar"
                    value={props.searchText}
                    onChange={props.onChange}
                    onKeyDown={props.onKeyDown}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                />
                <Cross onClick={props.clear} />
            </SearchBar>
            <TagsContainer />
        </Fragment>
    );
}
