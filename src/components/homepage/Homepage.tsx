import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../state/store';
import { selectResource } from '../../state/actions/resourceActions';
import { Link } from 'react-router-dom';
import { DataFetched } from '../../state/reducers/resource';
import { requestResource } from '../../state/thunkMiddleware';
import { Card, CardActionArea, Typography } from '@material-ui/core';
import useStyles from './style';

const Homepage: React.FC<{}> = () => {
    const { loading, data } = useSelector((state: RootState) => state.resource);
    const dispatch = useDispatch();
    const classes = useStyles()

    const dispatchResourceSelected = (data: DataFetched): void => {
        if (data.id) {
            dispatch(selectResource(data.id));
            dispatch(requestResource(data.id));
        };
    };

    const mapAllResources = data?.map((data: DataFetched, index: number) => {
        const title: string = data.id as unknown as string;
        return (
            <Link key={index} className={classes.text} to="/editprofile" onClick={(): void => dispatchResourceSelected(data)}>
                <Card className={classes.card}>
                    <CardActionArea className={classes.content}>
                    <Typography>{title.replace(/([A-Z])/g, ' $1').trim()}</Typography>
            </CardActionArea>
        </Card>
            </Link>
        );
    })

    if (loading === true) {
        return <p>Loading...</p>
    };

    return (
        <div className={classes.cards}>
            {mapAllResources}
        </div>
    );

}

export default Homepage;