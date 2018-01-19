import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import debounce from 'lodash/debounce';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import filterData from '../services/filterData';

const styles = {
    root: {
        maxHeight: 200,
        height: 200
    }
};

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

    componentWillReceiveProps() {
        this.setState({ data: this.props.dataArr });
    }

    render() {
        const { classes, dataArr } = this.props;

        const dataSearch = debounce(
            (phrase, data) => this.filterData(phrase, data),
            300
        );

        return (
            <div>
                <Grid container spacing={40}>
                    <Grid item xs={4} />
                    <Grid item xs={4}>
                        <TextField
                            label="Szukaj po nazwie/składnikach/cenie"
                            fullWidth
                            value={this.state.searchPharse}
                            onChange={({ target }) =>
                                dataSearch(target.value, dataArr)
                            }
                        />
                    </Grid>
                    <Grid item xs={4} />
                    <Grid item xs={12} />
                </Grid>
                {this.state.data.map((item, i) => (
                    <Grid container spacing={8} key={i}>
                        <Grid item xs={12}>
                            <Paper className={classes.root} elevation={4}>
                                {item.name} &nbsp;
                                {item.ingredients} &nbsp;
                                {item.small.price}&nbsp;
                                {item.small.size}&nbsp;;
                                {item.big.price}&nbsp;
                                {item.big.size}
                            </Paper>
                        </Grid>
                    </Grid>
                ))}
            </div>
        );
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchBar);
