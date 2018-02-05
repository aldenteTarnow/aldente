import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import tileData from '../metaData/galleryData';
import ReactDom from "react-dom";

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        // maxHeight: 600,
        width: 'auto',
        height: '600',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)'
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    },
    icon: {
        color: 'white'
    }
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const makeGrid = (data) => {
    const length = data.length;
    const result = {
        array: null,
        oddArray: null
    };

    if (length % 2 === 1) {
        result.oddArray = [data.pop()];
        result.array = data;
    } else {
        result.array = data;
    }
    return result;
};


class AdvancedGridList extends React.Component {

    componentDidMount () {
        ReactDom.findDOMNode(this).scrollIntoView();
    }

    render() {
        const { classes } = this.props;

        const pictures = makeGrid(tileData);

        return (
            <div className={classes.root}>
                <GridList spacing={1} className={classes.gridList} cellHeight={400}>
                    {pictures.array.map(tile => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
                {pictures.oddArray ? <GridList spacing={1} className={classes.gridList} cellHeight={400}>
                    <GridListTile key={pictures.oddArray[0].img} cols={2}>
                        <img src={pictures.oddArray[0].img} alt={pictures.oddArray[0].title} />
                    </GridListTile>
                </GridList> : null}
            </div>
        );
    }
}

AdvancedGridList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvancedGridList);
