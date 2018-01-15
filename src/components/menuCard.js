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
            'box-shadow': `0 14px 28px rgba(0,0,0,0.25), 0 20px 20px ${
                red['500']
            }`
        }
    },
    media: {
        height: 194
    },
    onHover: {
        color: red['500']
    },
    onDefault: {
        color: '#000000de'
    },
    header: {
        height: 65,
        textAlign: 'center',
        background: '#e8e8e8'
    }
});

class RecipeReviewCard extends React.Component {
    state = {
        color: 'RecipeReviewCard-onDefault-193'
    };

    changeColor(type, data) {
        if (type === 'hover') {
            this.setState({ color: data.onHover });
        } else {
            this.setState({ color: data.onDefault });
        }
    }

    render() {
        const { classes, title, url, text, path } = this.props;

        return (
            <div
                onMouseLeave={() => this.changeColor('default', classes)}
                onMouseEnter={() => this.changeColor('hover', classes)}
            >
                <Link to={path} style={{ textDecoration: 'none' }}>
                    <Card className={classes.card}>
                        <div className={classes.header}>
                            <CardHeader
                                title={title}
                                classes={{ title: this.state.color }}
                            />
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
