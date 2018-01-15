import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import About from './about';
import noodlesIcon from '../assets/noodles.png';
import pizzaIcon from '../assets/pizza.png';

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
        marginTop: 25
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A ad, consectetur consequatur culpa cum cupiditate
                        deserunt enim est facilis fugit iste laborum laudantium
                        maxime neque nesciunt odio officia pariatur quam quidem
                        quis quisquam, quos, rerum tempora vel velit! Cumque,
                        dolore!
                    </TabContainer>
                    <TabContainer dir={theme.direction}>OK</TabContainer>
                    <TabContainer dir={theme.direction}>
                        <About />
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
