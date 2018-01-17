import React from 'react';
import ReactDOM from 'react-dom';
import Bar from './components/bar';
import Reboot from 'material-ui/Reboot';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/about';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import brown from 'material-ui/colors/brown';
import green from 'material-ui/colors/green';
// COMPONENTS
import NotFoundPage from './components/notFoundPage';
import Welcome from './components/welcome';
import Menu from './components/menu';
import Gallery from './components/gallery';
import Contact from './components/contact';
import News from './components/news';

const styles = theme => ({
    root: {
        marginTop: 29,
        overflowX: 'hidden',
    }
});

const createTheme = (type = 'dark') =>
    createMuiTheme({
        palette: {
            type,
            // primary: { main: brown[600] },
            // secondary: { main: green['A700'] },
            primary: { main: brown[500] }, // Purple and green play nicely together.
            secondary: { main: green['A700'] } // This is just green.A700 as hex.
        }
    });

class App extends React.Component {
    state = {
        theme: createTheme('dark')
    };

    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={this.state.theme}>
                <Router>
                    <Reboot>
                        <div className={classes.root}>
                            <Bar
                                changeTheme={type =>
                                    this.setState({ theme: createTheme(type) })
                                }
                                theme={this.state.theme}
                            />
                            <Switch>
                                <Route exact path="/" component={Welcome} />
                                <Route
                                    exact
                                    strict
                                    path="/menu/:id?"
                                    component={Menu}
                                />
                                <Route
                                    exact
                                    strict
                                    path="/o-nas"
                                    component={About}
                                />
                                <Route
                                    exact
                                    strict
                                    path="/galeria"
                                    component={Gallery}
                                />
                                <Route
                                    exact
                                    strict
                                    path="/kontakt"
                                    component={Contact}
                                />
                                <Route
                                    exact
                                    strict
                                    path="/nowosci"
                                    component={News}
                                />
                                <Route component={NotFoundPage} />
                            </Switch>
                        </div>
                    </Reboot>
                </Router>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

const CreateApp = withStyles(styles)(App);

ReactDOM.render(<CreateApp />, document.querySelector('#root'));
