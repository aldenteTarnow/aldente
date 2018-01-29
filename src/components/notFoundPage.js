import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

const style = {
    width: '100%',
    maxWidth: 'auto',
    marginTop: '10%'
};
const styles = theme => ({
    button: {
        margin: '10%',
        fontSize: 20
    }
});

function NoFoundPage(props) {
    const { classes } = props;

    return (
        <div style={style} align="center">
            <Typography type="display2" gutterBottom>
                Strona nie znaleziona
            </Typography>
            <Typography type="caption" gutterBottom>
                Przepraszamy, nic tu nie ma.
            </Typography>
            <Button
                color="accent"
                className={classes.button}
                raised
                component={Link}
                to="/"
            >
                Cofnij
            </Button>
        </div>
    );
}

NoFoundPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoFoundPage);
