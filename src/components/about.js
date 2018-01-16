import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import aldenteImg from '../assets/aldenteView.jpg';
import brekfast from '../assets/breakfast.jpg';
import burger from '../assets/burgers.jpg';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Hidden from 'material-ui/Hidden';

const styles = theme => ({
    base: {
        // marginTop: -35,
        height: '100vh',
        background:
            'url(https://images.pexels.com/photos/164168/pexels-photo-164168.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb) no-repeat center',
        backgroundSize: 'cover'
    },
    card: {
        // marginTop: '10vh',
        // height: '72vh'
    },
    cardSmall: {
        // marginTop: '7vh',
        // height: '100vh',
    },
    button: {
        textDecoration: 'none'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#c4c4c4'
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)'
    },
    title: {
        color: theme.palette.primary.light
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    },
    paper: {
        background: '#c4c4c4'
    }
});

function SimpleMediaCard(props) {
    const { classes } = props;
    const images = [
        { img: brekfast, title: 'asdsad' },
        { img: burger, title: 'asdsad' },
        { img: aldenteImg, title: 'asdsad' },
        { img: burger, title: 'asdsad' },
        { img: brekfast, title: 'asdsad' },
        { img: burger, title: 'asdsad' },
        { img: aldenteImg, title: 'asdsad' },
        { img: burger, title: 'asdsad' }
    ];
    return (
        <div className={classes.base}>
            <div className={classes.red}>
                <Hidden only={['sm', 'xs']}>
                    <Grid container spacing={0} className={classes.base}>
                        <Grid item xs={2} className={classes.cardSmall} />
                        <Grid item xs={8} className={classes.cardSmall}>
                            <Card className={classes.card}>
                                <div className={classes.root}>
                                    <GridList
                                        className={classes.gridList}
                                        cols={1.5}
                                        cellHeight={562}
                                    >
                                        {images.map((tile, index) => (
                                            <GridListTile key={index}>
                                                <img
                                                    src={tile.img}
                                                    alt={tile.title}
                                                />
                                                <GridListTileBar
                                                    title={tile.title}
                                                    classes={{
                                                        root: classes.titleBar,
                                                        title: classes.title
                                                    }}
                                                />
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                </div>
                                <CardContent className={classes.paper}>
                                    <Typography type="headline" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography component="p">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Ab beatae dolorem
                                        fugit ipsa laudantium molestiae sunt,
                                        voluptate. Ad aliquam amet beatae
                                        consequatur culpa dicta dolore eius et
                                        exercitationem expedita hic in iste
                                        labore laborum maxime minima natus
                                        nihil, nulla odit officiis quae quam quo
                                        quod similique sint sunt vel voluptatum.
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Adipisci at atque
                                        doloribus iure molestias quis quisquam?
                                        Ad culpa ea enim expedita iste maiores
                                        mollitia repellat unde, voluptatibus!
                                        Cupiditate eveniet neque officia quasi
                                        quis rem repudiandae totam vero.
                                        Deserunt dignissimos dolores excepturi
                                        expedita, explicabo illum, perferendis
                                        quas quos reprehenderit, temporibus
                                        voluptates!
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.paper}>
                                    <Link
                                        to="https://www.facebook.com/AlDente-pizzaspaghetti-Tarn%C3%B3w-293169260696126/"
                                        target="_blank"
                                        className={classes.button}
                                    >
                                        <Button dense color="inherit">
                                            Facebook
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={2} className={classes.cardSmall} />
                    </Grid>
                </Hidden>
                <Hidden only={['lg', 'xl', 'md']}>
                    <Card className={classes.cardSmall}>
                        <div className={classes.root}>
                            <GridList
                                className={classes.gridList}
                                cols={1.5}
                                cellHeight={375}
                            >
                                {images.map((tile, index) => (
                                    <GridListTile key={index}>
                                        <img src={tile.img} alt={tile.title} />
                                        <GridListTileBar
                                            title={tile.title}
                                            classes={{
                                                root: classes.titleBar,
                                                title: classes.title
                                            }}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                        <CardContent className={classes.paper}>
                            <Typography type="headline" component="h2">
                                Lizard
                            </Typography>
                            <Typography component="p">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab beatae dolorem fugit ipsa
                                laudantium molestiae sunt, voluptate. Ad aliquam
                                amet beatae consequatur culpa dicta dolore eius
                                et exercitationem expedita hic in iste labore
                                laborum maxime minima natus nihil, nulla odit
                                officiis quae quam quo quod similique sint sunt
                                vel voluptatum.
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.paper}>
                            <Link
                                to="https://www.facebook.com/AlDente-pizzaspaghetti-Tarn%C3%B3w-293169260696126/"
                                target="_blank"
                                className={classes.button}
                            >
                                <Button dense color="primary">
                                    Facebook
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Hidden>
            </div>
        </div>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
