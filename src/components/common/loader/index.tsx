import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

export function Loader(props: any) {

    return (
        <div className="App">
            <ClimbingBoxLoader size={15}/>
        </div>
    );
}
