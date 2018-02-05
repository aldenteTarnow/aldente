import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Send from 'material-ui-icons/Send';
import Divider from 'material-ui/Divider';
import { compose, withProps } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';
import { googleMapApiKey } from '../config';
import CALL from '../services/fbService';
import ReactDom from "react-dom";

const styles = theme => ({
    root: {
        marginTop: '4vh'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
    button: {
        margin: theme.spacing.unit
    },
    rightIcon: {
        marginLeft: theme.spacing.unit
    }
});

const aldenteGeoLoc = { lat: 50.024502, lng: 20.972529 };

const MapComponent = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleMapApiKey}&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={15} defaultCenter={aldenteGeoLoc}>
        {props.isMarkerShown && <Marker position={aldenteGeoLoc} />}
    </GoogleMap>
));

class Welcome extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR'
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    componentDidMount () {
        ReactDom.findDOMNode(this).scrollIntoView();
    }

    render() {
        const { classes, inputProps } = this.props;
        const isOnline = navigator.onLine;

        return (
            <div className={classes.root}>
                <Hidden>
                    <Grid container spacing={0}>
                        <Grid item xs={12} className={classes.root}>
                            <Typography type="display1" align="center">
                                Adres
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                        <Grid item xs={8} className={classes.root}>
                            <Typography type="headline" align="center">
                                ul. Brandstaettera 2
                            </Typography>
                            <Typography type="headline" align="center">
                                33-100 Tarnów
                            </Typography>
                            <br />
                            <Typography type="title" align="center">
                                +14 690 88 77
                            </Typography>
                            <Typography type="caption" align="center">
                                TYLKO ZAMÓWIENIA TELEFONICZNE
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                        <Grid item xs={12}>
                            <Divider light />
                        </Grid>
                        <Grid item xs={12} className={classes.root}>
                            <Typography type="display1" align="center">
                                Godziny otwarcia
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.container}>
                            <Grid item xs={12} className={classes.root} />
                            <Grid item xs={3} lg={5} md={4} />
                            <Grid item xs={3} lg={1} md={2}>
                                <Typography type="body2" align="center">
                                    Pon-Czw:
                                </Typography>
                            </Grid>
                            <Grid item xs={3} lg={1} md={2}>
                                <Typography type="body2" align="left">
                                    11:00 - 22:00
                                </Typography>
                            </Grid>
                            <Grid item xs={3} lg={5} md={4} />
                            <Grid item xs={3} lg={5} md={4} />
                            <Grid item xs={3} lg={1} md={2}>
                                <Typography type="body2" align="center">
                                    Pt-Sb:
                                </Typography>
                            </Grid>
                            <Grid item xs={3} lg={1} md={2}>
                                <Typography type="body2" align="left">
                                    11:00 - 23:00
                                </Typography>
                            </Grid>
                            <Grid item xs={3} lg={5} md={4} />
                            <Grid item xs={3} lg={5} md={4} />
                            <Grid item xs={3} lg={1} md={2}>
                                <Typography type="body2" align="center">
                                    Nd:
                                </Typography>
                            </Grid>
                            <Grid item xs={3} lg={1} md={2}>
                                <Typography type="body2" align="left">
                                    12:00 - 22:00
                                </Typography>
                            </Grid>
                            <Grid item xs={3} lg={5} md={4} />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider light />
                        </Grid>
                        {
                            isOnline ? <Grid container spacing={0}>
                                <Grid item xs={12} className={classes.root}>
                                    <Typography type="display1" align="center">
                                        Gdzie jesteśmy
                                    </Typography>
                                    <Grid item xs={12} className={classes.root} />
                                </Grid>
                                <Grid item xs={12}>
                                    <MapComponent isMarkerShown />
                                </Grid>
                                <Grid item xs={12} className={classes.root}>
                                    <Divider light />
                                </Grid>
                            </Grid> : null
                        }
                        <Grid item xs={12} className={classes.root}>
                            <Grid item xs={12} className={classes.root} />
                            <Typography type="display1" align="center">
                                Formularz
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <form
                                className={classes.container}
                                noValidate
                                autoComplete="off"
                            >
                                <Grid item xs={2} sm={4} md={5} lg={5} />
                                <Grid item xs={10} sm={8} md={6} lg={7}>
                                    <TextField
                                        id="firstName"
                                        label="Imię"
                                        placeholder="Twoje imię"
                                        multiline
                                        className={classes.textField}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={2} sm={4} md={5} lg={5} />
                                <Grid item xs={10} sm={8} md={6} lg={7}>
                                    <TextField
                                        id="secondName"
                                        label="Nazwisko"
                                        placeholder="Twoje nazwisko"
                                        multiline
                                        className={classes.textField}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={2} sm={4} md={5} lg={5} />
                                <Grid item xs={10} sm={8} md={6} lg={7}>
                                    <TextField
                                        id="email"
                                        label="E-mail"
                                        placeholder="Twój e-mail"
                                        multiline
                                        className={classes.textField}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={2} sm={4} md={5} lg={5} />
                                <Grid item xs={10} sm={8} md={6} lg={7}>
                                    <TextField
                                        id="phone"
                                        label="Telefon"
                                        placeholder="Twój numer telefonu"
                                        multiline
                                        className={classes.textField}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={2} sm={4} md={5} lg={5} />
                                <Grid item xs={10} sm={8} md={6} lg={7}>
                                    <TextField
                                        id="text"
                                        label="Wiadomość"
                                        placeholder="Twoja wiadomość"
                                        multiline
                                        rowsMax={3}
                                        className={classes.textField}
                                        margin="normal"
                                    />
                                </Grid>
                            </form>
                        </Grid>
                        <Grid item xs={6} sm={6} lg={6} />
                        <Grid item>
                            <Button
                                className={classes.button}
                                raised
                                color="primary"
                                onClick={() => CALL('feed')}
                            >
                                Wyślij
                                <Icon className={classes.rightIcon}>
                                    <Send />
                                </Icon>
                            </Button>
                        </Grid>
                    </Grid>
                </Hidden>
            </div>
        );
    }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
    width: PropTypes.string
};

export default compose(withStyles(styles), withWidth())(Welcome);
