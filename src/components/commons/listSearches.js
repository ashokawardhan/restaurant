import React, {Component} from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import { inList } from '../../actions/searchActions';

const ListContainer = styled.div`
    margin: 20px 120px 0 120px;
    @media (max-width: 768px) {
        margin: 5px 0px;
    }
`;

const Title = styled.div`
    padding: 0 10px 10px;
    font-weight: 700;
    font-size: 22px;
`;

const Text = styled.div`
    padding: 10px;
    color: #999;
`;
const ItemContainer = styled.div`
    &.active, &:hover {
        background-color: lightblue;
    }
`;

const Bar = styled.hr`
    border: none;
    border-top: 2px dashed #bbb;
    margin-block-end: 0;
`;

class ListSearches extends Component {
    state = { selectedIndex: -1 };
    constructor() {
        super();
        this.inputFocusChange = this.inputFocusChange.bind(this);
        window.addEventListener('keydown', this.inputFocusChange);
    }

    componentWillReceiveProps() {
        this.setState({
            selectedIndex: -1
        });
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.inputFocusChange);
    }

    inputFocusChange = (event) => {
        if (this.props.inputFocus) {
            if (event.keyCode === 13 && this.state.selectedIndex >= 0) {
                this.props.onSelect(this.props.list[this.state.selectedIndex]);
            };

            this.setState(prevState => {
                let selectedIndex = prevState.selectedIndex;
                if (event.keyCode === 40) {
                    if (selectedIndex === this.props.list.length - 1) {
                        selectedIndex = this.props.list.length - 1;
                        this.props.inList(true);
                    } else {
                        selectedIndex += 1;
                        this.props.inList(true);
                    }
                } else if (event.keyCode === 38) {
                    if (selectedIndex === -1) {
                        selectedIndex = -1;
                        this.props.inList(false);
                    } else {
                        selectedIndex -= 1;
                        this.props.inList(true);
                    }
                }
                return {
                    selectedIndex
                };
            });
        }
    }

    render() {
        const {title, list} = this.props;
        const {selectedIndex} = this.state;
        return (
            <ListContainer>
                {title && <Title>{title}</Title>}
                {
                    list.map((item, index) => {
                        return (
                            <ItemContainer className={index === selectedIndex ? 'active' : ''} onMouseDown={() => this.props.onSelect(item)}>
                                <Text>{item}</Text>
                                <Bar />
                            </ItemContainer>
                        )
                    })
                }
            </ListContainer>
        );
    }
}

const mapStateToProps = ({ searchInput }) => ({
    inputFocus: searchInput.focus
});

const mapDispatchToProps = {
    inList
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListSearches);
