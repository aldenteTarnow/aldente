import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia, CardContent } from 'material-ui/Card';
import withWidth from 'material-ui/utils/withWidth';
import Typography from 'material-ui/Typography';
import compose from 'recompose/compose';
import MenuCard from './menuCard';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import otherMenuImg from '../assets/otherMenu.jpg';
import noodlesMenuImg from '../assets/noodlesMenu.jpg';
import pizzaMenuImg from '../assets/pizzaMenu.jpg';
import welcomePizzaImg from '../assets/welcomePizza.jpeg';

const styles = theme => ({
    card: {
        maxWidth: '100%'
    },
    media: {
        height: 250
    },
    media2: {
        height: 465
    },
    root: {
        // flexGrow: 1,
        overflow: 'hidden'
    }
});

class Welcome extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.root}>
                    <Hidden only={['xs', 'sm']}>
                        <Grid container spacing={8}>
                            <Grid item xs />
                            <Grid item xs={10}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media2}
                                        image={welcomePizzaImg}
                                        title="ALDENTE PIZZA"
                                    />
                                    <CardContent>
                                        <Typography
                                            type="headline"
                                            component="h2"
                                            align="center"
                                        >
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Consequuntur debitis deleniti dicta
                                            dignissimos doloremque impedit nemo
                                            numquam similique ut vero?
                                        </Typography>
                                        <br />

                                        <Typography paragraph>
                                            Heat 1/2 cup of the broth in a pot
                                            until simmering, add saffron and set
                                            aside for 10 minutes.
                                        </Typography>
                                        <Typography paragraph>
                                            Heat oil in a (14- to 16-inch)
                                            paella pan or a large, deep skillet
                                            over medium-high heat. Add chicken,
                                            shrimp and chorizo, and cook,
                                            stirring occasionally until lightly
                                            browned, 6 to 8 minutes. Transfer
                                            shrimp to a large plate and set
                                            aside, leaving chicken and chorizo
                                            in the pan. Add pimentón, bay
                                            leaves, garlic, tomatoes, onion,
                                            salt and pepper, and cook, stirring
                                            often until thickened and fragrant,
                                            about 10 minutes. Add saffron broth
                                            and remaining 4 1/2 cups chicken
                                            broth; bring to a boil.
                                        </Typography>
                                        <Typography paragraph>
                                            Add rice and stir very gently to
                                            distribute. Top with artichokes and
                                            peppers, and cook without stirring,
                                            until most of the liquid is
                                            absorbed, 15 to 18 minutes. Reduce
                                            heat to medium-low, add reserved
                                            shrimp and mussels, tucking them
                                            down into the rice, and cook again
                                            without stirring, until mussels have
                                            opened and rice is just tender, 5 to
                                            7 minutes more. (Discard any mussels
                                            that don’t open.)
                                        </Typography>
                                        <Typography>
                                            Set aside off of the heat to let
                                            rest for 10 minutes, and then serve.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs />
                            <Grid container spacing={8}>
                                <Grid item xs />
                                <Grid item xs={3}>
                                    <MenuCard
                                        path="/menu/pizza"
                                        title="PIZZA"
                                        text="Pyszne Pizze"
                                        url={pizzaMenuImg}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <MenuCard
                                        path="/menu/makarony"
                                        title="MAKARONY"
                                        text="Cudowne Makarony"
                                        url={noodlesMenuImg}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <MenuCard
                                        path="/menu/inne"
                                        title="INNE"
                                        text="Inne Dania"
                                        url={otherMenuImg}
                                    />
                                </Grid>
                                <Grid item xs />
                            </Grid>
                        </Grid>
                    </Hidden>
                </div>
                <div>
                    <Hidden only={['md', 'lg', 'xl']}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={welcomePizzaImg}
                                title="Włoska Pizza"
                            />
                            <CardContent>
                                <Typography
                                    type="headline"
                                    component="h2"
                                    align="center"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Consequuntur debitis
                                    deleniti dicta dignissimos doloremque
                                    impedit nemo numquam similique ut vero?
                                </Typography>
                                <br />

                                <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until
                                    simmering, add saffron and set aside for 10
                                    minutes.
                                </Typography>
                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or
                                    a large, deep skillet over medium-high heat.
                                    Add chicken, shrimp and chorizo, and cook,
                                    stirring occasionally until lightly browned,
                                    6 to 8 minutes. Transfer shrimp to a large
                                    plate and set aside, leaving chicken and
                                    chorizo in the pan. Add pimentón, bay
                                    leaves, garlic, tomatoes, onion, salt and
                                    pepper, and cook, stirring often until
                                    thickened and fragrant, about 10 minutes.
                                    Add saffron broth and remaining 4 1/2 cups
                                    chicken broth; bring to a boil.
                                </Typography>
                                <Typography paragraph>
                                    Add rice and stir very gently to distribute.
                                    Top with artichokes and peppers, and cook
                                    without stirring, until most of the liquid
                                    is absorbed, 15 to 18 minutes. Reduce heat
                                    to medium-low, add reserved shrimp and
                                    mussels, tucking them down into the rice,
                                    and cook again without stirring, until
                                    mussels have opened and rice is just tender,
                                    5 to 7 minutes more. (Discard any mussels
                                    that don’t open.)
                                </Typography>
                                <Typography>
                                    Set aside off of the heat to let rest for 10
                                    minutes, and then serve.
                                </Typography>
                            </CardContent>
                        </Card>
                        <MenuCard
                            path="/menu/pizza"
                            title="PIZZA"
                            text="Pyszne Pizze"
                            url={pizzaMenuImg}
                        />
                        <MenuCard
                            path="/menu/makarony"
                            title="MAKARONY"
                            text="Cudowne Makarony"
                            url={noodlesMenuImg}
                        />
                        <MenuCard
                            path="/menu/inne"
                            title="INNE"
                            text="Inne Dania"
                            url={otherMenuImg}
                        />
                    </Hidden>
                </div>
            </div>
        );
    }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string
};

export default compose(withStyles(styles), withWidth())(Welcome);
