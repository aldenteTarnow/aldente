import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class Credits extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentWillReceiveProps() {
        let { clicked } = this.props;

        if (clicked) {
            this.handleClickOpen();
        }
    }

    render() {
        let { closeDialog } = this.props;

        return (
            <div>

            </div>
        );
    }
}

export default Credits;