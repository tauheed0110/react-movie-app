import React from 'react';

const GenreFilter = ({ genres }) => {

    function hanldeClick(genre) {
        console.log(genre, "gener button is selected");
    }
    return (
        <div className='genres'>
            <h1>Filter By Genre</h1>
            <div className='filterBtn'>
                {
                    genres.map((genre, index) => {
                        return <button key={index} onClick={() => { hanldeClick(genre) }}>{genre}</button>
                    })
                }
            </div>
        </div>
    );
}

export default GenreFilter;
