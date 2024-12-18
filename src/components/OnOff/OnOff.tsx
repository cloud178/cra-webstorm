import React from 'react';
import styled from "styled-components";

export type OnOffPropsType = {
    onOff: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <Wrapper>
            <StyledBtnOn onOff={props.onOff}>on</StyledBtnOn>
            <StyledBtnOff onOff={props.onOff}>off</StyledBtnOff>
            <Marker onOff={props.onOff}></Marker>
        </Wrapper>
    );
};

type StyledBtnProps = {
    onOff: boolean;
};

const StyledBtn = styled.button<StyledBtnProps>`
    width: 100px;
    height: 60px;
    border: 3px solid black;
    color: #3b3b3b;
    font-size: 20px;
    font-weight: bold;
`

const StyledBtnOn = styled(StyledBtn)`
    background-color: ${(props) => (props.onOff ? "#4f9625" : "#818181")};
`

const StyledBtnOff = styled(StyledBtn)`
    background-color: ${(props) => (props.onOff ? "#838383" : "#8c0000")};
`

const Marker = styled.div<StyledBtnProps>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => (props.onOff ? "#4f9625" : "#8d0000")};;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
`
