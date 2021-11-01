import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = (props) => {
    const location = useLocation();

    return (
        <header className="header">
            <h1>{props.title}</h1>
            {location.pathname == "/" && (
            <Button onClick={props.onAdd}  color={props.showAdd ? "red" : "green"} text={props.showAdd ? "Close": "Add"}  />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header
