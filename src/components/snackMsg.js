import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

const styles = theme => ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
});

class SnackMsg extends React.Component {
    state = {
        open: true,
    };

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    // autoHideDuration={6000}
                    onClose={this.handleClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                        style: { backgroundColor: '#b0715a', color: 'black' }
                    }}
                    message={
                        <span id="message-id">
                            Każdą pizzę można zamówić na podwójnym cieście (30cm - 1zł | 50cm - 2zł)
                            <br/>
                            Dodatkowy Sos: Czosnkowy, Pomidorowy, Pom. Ostry, BBQ, Tza-Tzyki (1zł)
                        </span>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        );
    }
}

SnackMsg.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SnackMsg);