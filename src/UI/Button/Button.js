import React from 'react';

const Button = props => {

    const deleteHandler = () => {
        props.onDelete(props.id);
    };

    return (
        <button onClick={deleteHandler} type={props.type}>{props.children}</button>
    );
};
export default Button;