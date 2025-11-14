import React from 'react';
import ListComponent from './components/ListComponent';

const App = () => {
    //array of names
    const arrayNames = ['Alice', 'Bob','Charlie','David','Eve'];

    return (
        <div>
        <h1>Names List</h1>
        <ListComponent cnames = {arrayNames}/>
        </div>
    )
}
export default App;