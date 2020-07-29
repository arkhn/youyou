import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const Homepage: React.FC<{}> = () => {
    const stateApp  = useSelector((state: RootState) => state);
    if (stateApp.resource.loading === true){
        return <p>Loading...</p>
    }

return (
    <div>
        {stateApp.resource.data?.map((data, index) => {
            return <button key={index}>{data.id}</button>
        })}
    </div>);
    
}

export default Homepage;