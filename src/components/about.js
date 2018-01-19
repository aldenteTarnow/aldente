import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import Hidden from 'material-ui/Hidden';
import GridList, { GridListTile } from 'material-ui/GridList';
import aldenteImg from '../assets/aldenteView.jpg';
import brekfast from '../assets/breakfast.jpg';
import burger from '../assets/burgers.jpg';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)'
    }
});

function SimpleMediaCard(props) {
    const { classes } = props;
    const images = [
        { img: brekfast, title: 'asdsad' },
        { img: burger, title: 'asdsad' },
        { img: aldenteImg, title: 'asdsad' },
        { img: burger, title: 'asdsad' },
        { img: brekfast, title: 'asdsad' },
        { img: burger, title: 'asdsad' },
        { img: aldenteImg, title: 'asdsad' },
        { img: burger, title: 'asdsad' }
    ];
    return (
        <div>
            <Card>
                <Hidden mdDown>
                    <GridList
                        className={classes.gridList}
                        cols={2.5}
                        cellHeight={600}
                    >
                        {images.map((tile, i) => (
                            <GridListTile key={i}>
                                <img src={tile.img} alt="" />
                            </GridListTile>
                        ))}
                    </GridList>
                </Hidden>
                <Hidden mdUp>
                    <GridList
                        className={classes.gridList}
                        cols={1.2}
                        cellHeight={400}
                    >
                        {images.map((tile, i) => (
                            <GridListTile key={i}>
                                <img src={tile.img} alt="" />
                            </GridListTile>
                        ))}
                    </GridList>
                </Hidden>
                <CardContent>
                    <Typography type="headline" component="h2">
                        Lizard
                    </Typography>
                    <Typography component="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aliquid at culpa debitis eaque enim eum fugiat
                        hic, itaque molestias optio perferendis perspiciatis
                        voluptas! Atque commodi deleniti, dicta et hic magni nam
                        nisi quisquam. Dicta dignissimos ducimus explicabo, in
                        maiores quis reprehenderit repudiandae rerum sint unde.
                        Iste laboriosam libero nobis nulla quidem rerum
                        temporibus vero voluptatibus voluptatum! Ab asperiores
                        eligendi enim inventore iusto odio odit placeat
                        quibusdam quisquam quod recusandae suscipit, ut velit?
                        Maxime repellat, voluptatem! Ad, aliquam aspernatur,
                        autem est et fugit magnam minima mollitia non obcaecati
                        optio quis quo quos recusandae reiciendis repudiandae,
                        similique tempora. Beatae rerum, totam. Accusantium
                        aliquid aperiam aspernatur, beatae consequatur
                        consequuntur error et, impedit magni modi mollitia nihil
                        officia officiis pariatur perferendis quam quia rem
                        repellat repellendus, sed sunt veritatis voluptates.
                        Accusamus autem dolor, eius eveniet expedita explicabo
                        facilis labore laborum modi nisi optio pariatur quasi
                        voluptas. Nisi quae quis voluptatum! Amet at blanditiis
                        cupiditate dolore dolorem esse fuga ipsa ipsam iure
                        iusto laborum libero, magni maxime minima natus nihil
                        nobis nulla, pariatur porro quaerat qui quo ratione
                        similique tempore tenetur unde velit vero. A accusamus
                        alias animi asperiores at atque consectetur doloremque
                        eaque eveniet explicabo harum illum ipsa itaque nemo
                        nesciunt nisi non odit, quas quasi quidem quo quod quos
                        ratione rem repellat repellendus rerum sed soluta vitae
                        voluptatem. A beatae dolor illo, ipsum obcaecati odio
                        quis unde! Aliquam dolore excepturi exercitationem
                        expedita repellat, voluptas? Adipisci cumque sequi
                        ullam! Aliquam at blanditiis, corporis enim expedita
                        nesciunt sit tenetur! Animi at cupiditate dicta hic
                        ipsam nam rerum? Architecto assumenda aut cum, deserunt
                        eum eveniet exercitationem facilis illum ipsa ipsam
                        nesciunt nihil, porro quos sapiente temporibus velit
                        veniam. Excepturi explicabo incidunt ipsa iure labore
                        maiores maxime minima molestias quidem ratione, saepe
                        sit. Ad autem culpa explicabo fugit ipsa molestias,
                        quasi recusandae sapiente similique veniam? Accusamus
                        deleniti esse quaerat temporibus unde? Ab eligendi
                        facilis modi quidem vitae? Culpa dolor dolores eveniet
                        laudantium magnam minima pariatur praesentium quae
                        quaerat quam rem repellendus soluta sunt totam, unde
                        vero vitae! Accusamus adipisci debitis delectus
                        doloremque enim, esse et ex illo in ipsa nulla rem
                        repellat rerum sequi, tempora! Assumenda et quia quos
                        reprehenderit veniam. Accusantium atque consectetur,
                        itaque iure iusto minima necessitatibus placeat quo sint
                        vitae! Asperiores consectetur dolorem dolores eius eos
                        excepturi facere illo impedit incidunt inventore ipsa
                        laudantium minima nesciunt non, pariatur perferendis
                        possimus praesentium quaerat quidem sed similique
                        tempora, tenetur totam ullam ut veritatis vitae!
                        Asperiores consequuntur corporis cum dicta doloribus
                        ducimus eveniet fuga labore natus odio, perspiciatis
                        praesentium qui quis rerum saepe sed soluta tempora
                        veniam vitae voluptas! Animi at culpa cum deserunt
                        dignissimos dolor eius et eum excepturi facere modi
                        molestiae, nemo numquam perspiciatis quaerat qui
                        quibusdam quidem ratione sed ullam. A ad asperiores
                        cumque dicta dolorem doloribus dolorum eligendi enim hic
                        illum impedit in ipsam iure labore molestiae obcaecati
                        officiis optio perferendis quod repellendus, sed sint
                        sit soluta temporibus tenetur ullam ut velit vero
                        voluptates voluptatum. Eaque, omnis, tenetur? Cumque
                        ducimus, eaque enim, eos est ex itaque nemo neque non
                        quam quia quo voluptatibus.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        to="https://www.facebook.com/AlDente-pizzaspaghetti-Tarn%C3%B3w-293169260696126/"
                        target="_blank"
                    >
                        <Button dense color="accent">
                            Facebook
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
