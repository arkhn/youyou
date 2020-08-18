import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../state/store';
import { selectResource } from '../../state/actions/resourceActions';
import { Link } from 'react-router-dom';
import { DataFetched } from '../../state/reducers/resource';
import { requestResource } from '../../state/thunkMiddleware';

const Homepage: React.FC<{}> = () => {
    const { loading, data } = useSelector((state: RootState) => state.resource);
    const dispatch = useDispatch();
    const dispatchResourceSelected = (data: DataFetched): void => {
        if (data.id) {
            dispatch(selectResource(data.id));
            dispatch(requestResource(data.id));
        };
    };

    const mapAllResources = data?.map((data: DataFetched, index: number) => {
        return (
            <Link to="/editprofile" key={index}>
                <button onClick={
                    (): void => {
                        dispatchResourceSelected(data);
                    }
                }>{data.id}</button>
            </Link>
        );
    })

    if (loading === true) {
        return <p>Loading...</p>
    };

    return (
        <div>
            {mapAllResources}
        </div>
    );

}

export default Homepage;