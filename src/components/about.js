import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    card: {
        maxWidth: 345
    },
    media: {
        height: 200
    }
};

function SimpleMediaCard(props) {
    const { classes } = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography type="headline" component="h2">
                        Lizard
                    </Typography>
                    <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab beatae dolorem fugit ipsa laudantium molestiae
                        sunt, voluptate. Ad aliquam amet beatae consequatur
                        culpa dicta dolore eius et exercitationem expedita hic
                        in iste labore laborum maxime minima natus nihil, nulla
                        odit officiis quae quam quo quod similique sint sunt vel
                        voluptatum.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button dense color="primary">
                        Share
                    </Button>
                    <Button dense color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
