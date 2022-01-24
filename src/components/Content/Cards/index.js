import React from 'react';
import Last from './Last';
import Categories from './Categories';

function Cards(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <Last />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <Categories />

        </div>
    )
}

export default Cards;