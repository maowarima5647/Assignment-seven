import React, { useEffect, useState } from 'react';
import Players from './players';



const Allplayers = ({ handleprice, handleRemove }) => {
    const [players, setPlayers] = useState([]);


    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setPlayers(data))

    }, [])
    return (
        <div className=''>
            <h3 className='text-2xl font-bold py-5'>Available Players</h3>

            <div className='grid grid-cols-2 w-full'>

                {players.map((p) => <Players handleprice={handleprice} key={p.id} player={p}  handleRemove={ handleRemove}></Players>)
                }
            </div>
        </div>
    );
};

export default Allplayers;