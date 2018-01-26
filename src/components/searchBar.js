import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import debounce from 'lodash/debounce';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import filterData from '../services/filterData';
import {brown} from 'material-ui/colors';
import Hidden from 'material-ui/Hidden';
//ICONS
import getImg from '../assets/ingredients/index';
import sizeImg from '../assets/size.png';
import tmp from '../assets/pizzaMenu.jpg';

const styles = (theme) => ({
    root: {
        maxHeight: 200,
        height: 200,
        borderRadius: 25
    },
    image: {
        borderRadius: 25,
        marginRight: 20,
        maxHeight: 200,
        maxWidth: 300
    },
    ing: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '80%',
        marginLeft: '15%'
    },
    row: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    chip: {
        margin: '1%',
    },
    firstCol: {
        flex: 1
    },
    secondCol: {
        marginTop: 10,
        marginRight: 'auto',
        paddingRight: 20,
        flexDirection: 'row',
        display: 'flex'
    },
    size: {
        position: 'absolute',
        height: 18,
        width: 50,
        marginTop: 45,
        marginLeft: 7,
        // paddingLeft: 1,
        background: brown[500],
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    price: {
        marginLeft: 15,
        fontSize: 17,
        fontWeight: 'bold'
    },
    priceSingle: {
        // marginLeft: 15,
        marginTop: 15,
        marginBottom: 10,
        fontSize: 45,
        fontWeight: 'bold',
        color: '#0ec71a'
    },
    tag: {
        color: '#0ec71a'
    },
    imageSmall: {
        width: '100%',
        height: '100%',
        borderRadius: 25
    },
    rootSmall: {
        borderRadius: 25,
        marginBottom: 5
    },
    smallName: {
        display: 'flex',
        justifyContent: 'flex-center'
    },
    smallIng: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    smallTag: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    amount: {
        paddingTop: 5
    }
});


class SearchBar extends React.Component {
    state = {
        searchPhrase: '',
        data: []
    };

    filterData(searchPhrase, dataToFilter) {
        const data = filterData(searchPhrase, dataToFilter);

        this.setState({
            searchPhrase,
            data
        });
    }

    createChip(name) {
        const { classes } = this.props;

        return (
            <Chip
                avatar={
                    <Avatar>
                        <img src={getImg(name)} alt=""/>
                    </Avatar>
                }
                label={name}
                className={classes.chip}
                key={name}
            />
        )
    }

    createPriceTag(item) {
        const { classes } = this.props;

        return (
            <div className={classes.tag}>
                <div className={classes.size}>{item.size} cm</div>
                <img src={sizeImg} alt=""/>
                <div className={classes.price}>{item.price} zł</div>
            </div>
        )
    }

    componentWillMount() {
        this.setState({ data: this.props.dataArr });
    }

    handleKeyPress= ({key}) => {
        if (key === 'Enter') {
            document.getElementById('search').blur();
        }
    };

    render() {
        const { classes, dataArr, type } = this.props;

        const dataSearch = debounce(
            (phrase, data) => this.filterData(phrase, data),
            300
        );

        const displayPrices = (item, isSmall) => {
            const classs = isSmall ? classes.smallTag : classes.secondCol;
            if (type === 'pizza') {
                return (
                    <div className={classs}>
                        {this.createPriceTag(item.small)}
                        {item.big ? this.createPriceTag(item.big) : null}
                    </div>
                )
            } else if (type === 'antipasti') {
                return (
                    <div className={classs}>
                        <div className={classes.priceSingle}>{item.price} zł</div>
                    </div>
                )
            }
        };

        return (
            <div>
                <Grid container spacing={40}>
                    <Grid item sm={2}/>
                    <Grid item xs={12} sm={8}>
                        <TextField
                            id="search"
                            onKeyDown={this.handleKeyPress}
                            label="Szukaj po nazwie, składnikach, cenie"
                            fullWidth
                            value={this.state.searchPharse}
                            onChange={({ target }) =>
                                dataSearch(target.value, dataArr)
                            }
                        />
                        <div className={classes.amount}>
                            <Typography type="caption" gutterBottom align="center">
                                Znalezione produkty: {this.state.data.length}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item sm={2}/>
                    <Grid item xs={12}/>
                    </Grid>
                <Hidden only={['xs', 'sm']}>
                    {this.state.data.map((item, i) => (
                        <Grid container spacing={8} key={i}>
                            <Grid item xs={12}>
                                <Paper className={classes.root} elevation={4}>
                                    <div className={classes.row}>
                                        <img src={tmp || 'http://via.placeholder.com/300x200'} alt={item.name} className={classes.image}/>
                                        <div className={classes.firstCol}>
                                            <Typography type="display1" gutterBottom>
                                                {`${item.id}. ${item.name}`}
                                            </Typography>
                                            <div className={classes.ing}>
                                                {item.ingredients.map((ing) => this.createChip(ing))}
                                            </div>
                                        </div>
                                        {displayPrices(item, false)}
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    ))}
                </Hidden>
                <Hidden only={['md', 'lg', 'xl']}>
                    {this.state.data.map((item, i) => (
                        <Grid container spacing={8} key={i}>
                            <Grid item xs={12}>
                                <Paper className={classes.rootSmall} elevation={4}>
                                    <Grid item xs={12}>
                                        <img src={tmp || 'http://via.placeholder.com/300x200'} alt={item.name} className={classes.imageSmall}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography type="display1" gutterBottom align="center">
                                            {`${item.id}. ${item.name}`}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div className={classes.smallIng}>
                                            {item.ingredients.map((ing) => this.createChip(ing))}
                                        </div>
                                    </Grid>
                                    <Grid container spacing={8}>
                                        <Grid item xs={12}/>
                                        <Grid item xs={12}>
                                            {displayPrices(item, true)}
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    ))}
                </Hidden>
            </div>
        );
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
