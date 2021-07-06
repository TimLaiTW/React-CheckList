import React from 'react';
import styled from 'styled-components';
const Div = styled.div`
    text-align: center;
    font-family: var(--header-font);
    letter-spacing: 0.1rem;
    margin: 10%;
    div {
        padding: 0.5rem;
        font-size: 1.5rem;
    }
    div:hover {
        color: var(--secorndory-background);
    }
    button {
        background-color: transparent;
        border: none;
        display: block
    }
`;


const ShowMasterList = (props) => {
    function handleClick(event){
        event.preventDefault();
        props.editCurrentList(event.target.id);
    }
    return (
        <Div>
            {props.lists.map(list => (
                <button key={list.id} onClick={handleClick}>
                    <div  id={list.id}>
                        {list.title}
                    </div>
                </button>
            ))}
        </Div>
    );
}
export default ShowMasterList;