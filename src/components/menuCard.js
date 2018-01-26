import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import Card, { CardHeader, CardMedia } from 'material-ui/Card';

import red from 'material-ui/colors/red';
import brown from 'material-ui/colors/brown';

import { Link } from 'react-router-dom';

const styles = theme => ({
    card: {
        maxWidth: '100%',
        'box-shadow': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        '&:hover': {
            'box-shadow': `0 14px 60px ${red['300']}, 0 10px 10px ${red['300']}`
        }
    },
    media: {
        height: 194
    },
    onHover: {
        color: red['500']
    },
    onDefault: {
        color: '#fff'
    },
    header: {
        // height: 65,
        textAlign: 'center',
        background: brown[500]
    },
    root: {
        paddingBottom: '1em'
    }
});

class RecipeReviewCard extends React.Component {
    state = {
        color: null
    };

    changeColor(type, data) {
        if (type === 'hover') {
            this.setState({ color: data.onHover });
        } else {
            this.setState({ color: data.onDefault });
        }
    }

    render() {
        const { classes, title, url, text, path, width } = this.props;

        const paddingBottom = ['xs', 'sm'].includes(width) ? '' : classes.root;
        return (
            <div
                className={paddingBottom}
                onMouseLeave={() => this.changeColor('default', classes)}
                onMouseEnter={() => this.changeColor('hover', classes)}
            >
                <Link to={path} style={{ textDecoration: 'none' }}>
                    <Card className={classes.card}>
                        <div className={classes.header}>
                            <CardHeader
                                title={title}
                                classes={{
                                    title: this.state.color || classes.onDefault
                                }}
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

export default compose(withStyles(styles), withWidth())(RecipeReviewCard);
