import React from 'react';
import ReactDOM from 'react-dom';
import Bar from './components/bar';
import Reboot from 'material-ui/Reboot';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/about';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

// COMPONENTS
import NotFoundPage from './components/notFoundPage';
import Welcome from './components/welcome';
import Menu from './components/menu';
import Gallery from './components/gallery';
import Contact from './components/contact';
import News from './components/news';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
        background: 'red'
    },
    rightLeft: {
        paddingLeft: 8
    },
    welcomeCenter: {
        textAlign: 'center'
    }
});

function App(props) {
    // const { classes } = props;

    return (
        <Router>
            <Reboot>
                <div >
                    <Bar />
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route exact strict path="/menu/:id?" component={Menu} />
                        <Route exact strict path="/o-nas" component={About} />
                        <Route exact strict path="/galeria" component={Gallery} />
                        <Route exact strict path="/kontakt" component={Contact} />
                        <Route exact strict path="/nowosci" component={News} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Reboot>
        </Router>
    );
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

const CreateApp = withStyles(styles)(App);

ReactDOM.render(<CreateApp />, document.querySelector('#root'));
