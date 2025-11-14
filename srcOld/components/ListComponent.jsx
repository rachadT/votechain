import React from 'react';

const ListComponent = (props) => {
    return(
        <ul>
            {props.cnames.map((name, index)=>(
                //using the index as the key here(though using a unique)
                <li>{name}</li>
            ))}
        </ul>
    );
};

export default ListComponent;