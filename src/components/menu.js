import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import SearchBar from './searchBar';
import noodlesIcon from '../assets/noodles.png';
import pizzaIcon from '../assets/pizza.png';
import {green, brown, grey} from 'material-ui/colors';
import ScrollToTop from 'react-scroll-up';
import ReactDom from 'react-dom';
import ArrowUp from 'material-ui-icons/ArrowUpward';
import SnackMsg from './snackMsg';

// METADATA
import pizzaData from '../metaData/pizzaData';
import antipastiData from '../metaData/antypastiData';
import insalataData from '../metaData/insalataData';
import pastaData from '../metaData/pastaData';
import zuppeData from '../metaData/zuppeData';

function TabContainer({ children }) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

const CustomImage = props => <img src={props.path} alt="" />;

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

const styles = theme => ({
    root: {
        marginTop: 5,
        flexGrow: 1,
        width: '100%',
    },
    widthPaper: {
        maxWidth: 40
    },
    colorButton: {
        color: green[400]
    },
    arrowBg: {
        background: brown[500],
        borderRadius: '100%',
        width: 25,
        height: 25
    }
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    componentDidMount () {
        ReactDom.findDOMNode(this).scrollIntoView();
    }

    componentWillMount() {
        const tab = type => window.location.pathname.endsWith(type);

        if (tab('/pizza')) {
            this.setState({ value: 4 });
        } else if (tab('/makarony')) {
            this.setState({ value: 3 });
        } else if (tab('/przystawki')) {
            this.setState({ value: 0 });
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="accent"
                    textColor="accent"
                    scrollable
                    scrollButtons="on"
                    buttonClassName={classes.colorButton}

                >
                    <Tab icon={<PersonPinIcon />} label="PRZYSTAWKI"/>
                    <Tab icon={<PersonPinIcon />} label="SAŁATY"/>
                    <Tab icon={<PersonPinIcon />} label="ZUPY"/>
                    <Tab icon={<PersonPinIcon />} label="MAKARONY"/>
                    <Tab icon={<CustomImage path={pizzaIcon} />} label="PIZZA"/>
                    <Tab icon={<CustomImage path={noodlesIcon} />} label="DESERY"/>
                    <Tab icon={<PersonPinIcon />} label="NAPOJE GORĄCE"/>
                    <Tab icon={<PersonPinIcon />} label="NAPOJE ZIMNE"/>
                    <Tab icon={<PersonPinIcon />} label="PIWO"/>
                    <Tab icon={<PersonPinIcon />} label="WINO"/>
                    <Tab icon={<PersonPinIcon />} label="KOKTAJLE"/>
                </Tabs>
                {this.state.value === 0 && <TabContainer><SearchBar dataArr={antipastiData} type="antipasti" /></TabContainer>}
                {this.state.value === 1 && <TabContainer><SearchBar dataArr={insalataData} type="antipasti" /></TabContainer>}
                {this.state.value === 2 && <TabContainer><SearchBar dataArr={zuppeData} type="antipasti" /></TabContainer>}
                {this.state.value === 3 && <TabContainer><SearchBar dataArr={pastaData} type="antipasti" /></TabContainer>}
                {this.state.value === 4 && <TabContainer><SearchBar dataArr={pizzaData} type="pizza" /><SnackMsg/></TabContainer>}
                {this.state.value === 5 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 6 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 7 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 8 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 9 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 10 && <TabContainer>{this.state.value}</TabContainer>}
                <ScrollToTop showUnder={160}>
                    <div className={classes.arrowBg}>
                        <ArrowUp color="action"/>
                    </div>
                </ScrollToTop>
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
