import React from 'react';
import ReactDOM from 'react-dom';
import Bar from './components/bar';
import Reboot from 'material-ui/Reboot';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/about';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { brown, green} from 'material-ui/colors';

// COMPONENTS
import NotFoundPage from './components/notFoundPage';
import Welcome from './components/welcome';
import Menu from './components/menu';
import Gallery from './components/gallery';
import Contact from './components/contact';
import News from './components/news';
import MobileDetect from "mobile-detect/mobile-detect";

const styles = theme => ({
    root: {
        marginTop: 29
    }
});

const createTheme = (type = 'dark') => (createMuiTheme({
    palette: {
        type,
        // primary: { main: brown[600] },
        // secondary: { main: green['A700'] },
        primary: {
            light: brown[300],
            main: brown[500],
            dark: brown[700],
        },
        secondary: {
            light: green['A200'],
            main: green['A300'],
            dark: green['A700'],
        }
    }
}));


class App extends React.Component {
    state = {
        theme: createTheme('dark')
    };

    render() {
        const { classes} = this.props;

        return (
            <MuiThemeProvider theme={this.state.theme}>
                <Router>
                    <Reboot>
                        <div className={classes.root}>
                            <Bar changeTheme={(type) => this.setState({theme: createTheme(type)})} theme={this.state.theme} />
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
            </MuiThemeProvider>
        );
    }
}


App.propTypes = {
    classes: PropTypes.object.isRequired
};

const CreateApp = withStyles(styles)(App);

ReactDOM.render(<CreateApp />, document.querySelector('#root'));
