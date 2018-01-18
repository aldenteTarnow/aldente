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
import pizzaData from '../services/pizzaData';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

const CustomImage = props => <img src={props.path} alt="" />;

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired
};

const styles = theme => ({
    root: {
        marginTop: 5
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

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    componentWillMount() {
        const tab = type => window.location.pathname.endsWith(type);

        if (tab('/pizza')) {
            this.setState({ value: 0 });
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
                    centered
                >
                    <Tab
                        icon={<CustomImage path={pizzaIcon} />}
                        label="PIZZA"
                    />
                    <Tab
                        icon={<CustomImage path={noodlesIcon} />}
                        label="MAKARONY"
                    />
                    <Tab icon={<PersonPinIcon />} label="INNE" />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <SearchBar searchPharse={(search) => this.setState({search})} classes={{root:classes.widthPaper}}/>
                        {pizzaData.map((pizza) => (
                            <div>
                                {pizza.name} &nbsp;
                                {pizza.ingredients} &nbsp;
                                {pizza.small.price}&nbsp;
                                {pizza.small.size}&nbsp;;
                                {pizza.big.price}&nbsp;
                                {pizza.big.size}
                            </div>
                        ))}
                    </TabContainer>
                    <TabContainer dir={theme.direction}>OK</TabContainer>
                    <TabContainer dir={theme.direction}>
                        {/*<About />*/}
                        ASD
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
