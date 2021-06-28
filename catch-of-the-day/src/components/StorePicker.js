import React from 'react';

class StorePicker extends React.Component{
  render(){
    return (
        <>
            <form className="location-selector">
                <h2> Please Enter A Loacation</h2>
                <input type="text" required placeholder="Location Name"></input>
                <button type="submit">Visti Location</button>
            </form>
        </> 
    ) 
  }
}

export default StorePicker;