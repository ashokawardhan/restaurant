import React from 'react';
import styled from 'styled-components';

const TagsContainer = styled.div`
    margin: 20px 120px 0 120px;
    @media (max-width: 768px) {
        margin: 5px 0px;
    }
`;

const TagContainer = styled.div`
    background-color: #90EE90;
    display: inline-flex;
    padding: 5px 10px;
    margin-left: 5px;
    margin-right: 5px;
`;

const CloseIcon = styled.div`
    border-right: 1px solid #000;
    margin-right: 8px;
    padding-right: 8px;
`;


export default (props) => {
    return(
        <TagsContainer>
            {props.list.map((item) => (
                <TagContainer onMouseDown={() => props.onClick(item)}>
                    <CloseIcon>&times;</CloseIcon>
                    <div>{item}</div>
                </TagContainer>
            ))}
        </TagsContainer>
    )
}
