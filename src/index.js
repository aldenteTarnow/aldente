import React from 'react';
import ReactDOM from 'react-dom';
import Bar from './components/bar';
import Reboot from 'material-ui/Reboot';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/about';
import NotFoundPage from './components/notFoundPage';
import Welcome from './components/welcome';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    rightLeft: {
        paddingLeft: 8
    },
    welcomeCenter: {
        textAlign: 'center'
    }
});

function App(props) {
    const { classes } = props;

    return (
        <Router>
            <Reboot>
                <Bar />
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route exact strict path="/o-nas" component={About} />
                    <Route exact strict path="/menu" component={About} />
                    <Route exact strict path="/galeria" component={About} />
                    <Route exact strict path="/kontakt" component={About} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Reboot>
        </Router>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

const CreateApp = withStyles(styles)(App);

ReactDOM.render(<CreateApp />, document.querySelector('#root'));
