/*=============================================================================
File: TrackerList.js
-------------------------------------------------------------------------------
Description: returns rendered tracker item
=============================================================================*/
import React from 'react';
import Tracker from './Tracker';

export default function TrackerList({ items }) {

    return (
        <div>
            {items.map(item => {
                return <Tracker key={item.id} item={item} />
            })}
        </div> 
    );
}