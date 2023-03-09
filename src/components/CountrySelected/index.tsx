import React from 'react'
import countries from '../../data/data.json';

type Props = typeof countries[0];

export default function CountrySelected(props: Props) {
    
    return (
        <div key={props.name}>
            {props.name}
            <img src={props.flags.png} />
        </div>
    )
}
