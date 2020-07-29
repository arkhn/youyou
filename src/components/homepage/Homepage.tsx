import React from 'react';
import { useSelector } from 'react-redux';
import { IReduxStore } from '../../types';

const Homepage: React.FC<{}> = () => {
    const props  = useSelector((state: IReduxStore) => state);
    console.log(props)
    if (props.resource.loading === true){
        return <p>Loading</p>
    }

return (
    <div>
        {props.resource.data?.map((data, index) => {
            return <button key={index}>{data.id}</button>
        })}
    </div>);
    
}

export default Homepage;