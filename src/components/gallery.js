import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile } from 'material-ui/GridList';
import tileData from '../services/galleryData';

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
function AdvancedGridList(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList spacing={1} className={classes.gridList}>
                {tileData.map(tile => (
                    <GridListTile
                        key={tile.img}
                        cols={tile.length % 2 === 1 ? 2 : 1}
                        rows={tile.length % 2 === 1 ? 2 : 1}
                    >
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

AdvancedGridList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdvancedGridList);
