import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia } from 'material-ui/Card';

import red from 'material-ui/colors/red';

import { Link } from 'react-router-dom';

const styles = theme => ({
    card: {
        maxWidth: '100%',
        'box-shadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        '&:hover': {
            'box-shadow':
                '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
        }
    },
    media: {
        height: 194
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar: {
        backgroundColor: red[500]
    },
    flexGrow: {
        flex: '1 1 auto'
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    header: {
        height: 65,
        textAlign: 'center',
        background: '#e8e8e8'
    }
});

class RecipeReviewCard extends React.Component {
    render() {
        const { classes, title, url, text, path } = this.props;

        return (
            <div>
                <Link to={path} style={{ textDecoration: 'none' }}>
                    <Card className={classes.card}>
                        <div className={classes.header}>
                            <CardHeader title={title} />
                        </div>
                        <CardMedia
                            className={classes.media}
                            image={url}
                            title={text}
                        />
                    </Card>
                </Link>
            </div>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
