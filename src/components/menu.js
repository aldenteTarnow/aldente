import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import SearchBar from './searchBar';
import noodlesIcon from '../assets/noodles.png';
import pizzaIcon from '../assets/pizza.png';

// METADATA
import pizzaData from '../metaData/pizzaData';
import antipastiData from '../metaData/antypastiData';

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
    }
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    componentWillMount() {
        const tab = type => window.location.pathname.endsWith(type);

        if (tab('/pizza')) {
            this.setState({ value: 5 });
        } else if (tab('/makarony')) {
            this.setState({ value: 1 });
        } else if (tab('/inne')) {
            this.setState({ value: 2 });
        }
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root}>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="accent"
                    textColor="accent"
                    scrollable
                    scrollButtons="on"
                >
                    <Tab icon={<PersonPinIcon />} label="PRZYSTAWKI"/>
                    <Tab icon={<PersonPinIcon />} label="SAŁATY"/>
                    <Tab icon={<PersonPinIcon />} label="ZUPY"/>
                    <Tab icon={<PersonPinIcon />} label="PRZYSTAWKI"/>
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
                {this.state.value === 1 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 2 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 3 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 4 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 5 && <TabContainer><SearchBar dataArr={pizzaData} type="pizza" /></TabContainer>}
                {this.state.value === 6 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 7 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 8 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 9 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 10 && <TabContainer>{this.state.value}</TabContainer>}
                {this.state.value === 11 && <TabContainer>{this.state.value}</TabContainer>}

            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
