import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../state/store';
import { selectResource } from '../../state/actions/resourceActions';
import { Link } from 'react-router-dom';
import { DataFetched } from '../../state/reducers/resource';
import { requestResource } from '../../state/thunkMiddleware';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cards: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        padding: 5
    },
    card: {
        height: 116,
        width: "15vw",
        margin: 5
    },
    content: {
        height: "100%",
        padding: 20,
        textAlign: 'center'
    },
    text: {
        textDecoration: "none"
    }
}))

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