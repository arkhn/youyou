import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../state/store';
import { selectResource } from '../../state/actions/resourceActions';
import { Link } from 'react-router-dom';
import { DataFetched } from '../../state/reducers/resource';
import { requestResource } from '../../state/thunkMiddleware';
import { Card, CardActionArea, Typography, Grid } from '@material-ui/core';
import useStyles from './style';
import FhirLogo from '../../assets/img/fhir-logo'
import NavBar from './navBar/NavBar';

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
            <Grid className={classes.gridItem} item xs={5} sm={4} md={2} key={index}>
                <Link className={classes.itemLink} to="/editprofile" onClick={(): void => dispatchResourceSelected(data)}>
                    <Card className={classes.itemCard}>
                        <CardActionArea className={classes.itemCardAction}>
                            <Typography className={classes.itemText} variant="h6">{title.replace(/([A-Z])/g, ' $1').trim()}</Typography>
                            <FhirLogo classId={classes.fhirLogo}/>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        )
    })

    if (loading === true) {
        return <p>Loading...</p>
    };

    return (
        <>
            <NavBar />
            <section className={classes.homepage}>
                <Typography className={classes.homepageText}>Select a profile you want to edit.</Typography>
                <Grid container spacing={2} className={classes.grid}>
                    {mapAllResources}
                </Grid>
            </section>
        </>
    );

}

export default Homepage;