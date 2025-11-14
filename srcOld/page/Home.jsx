import React from 'react';

const Home=() => {
    const names =['nivive', 'ahmad','ali','abed']
    return(
        <div className= "page">
            <h1> Home </h1>
            <ListComponent names = {names}/>
        </div>
    );
};
export default Home;