import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CollaborationModal({ openModal, setOpenModal }) {

    const descriptionElementRef = useRef(null);

    useEffect(() => {
        if (openModal) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [openModal]);

    return (
        <React.Fragment>
            <Dialog
                open={openModal}
                onClose={() => {
                    setOpenModal(false);
                }}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {[...new Array(50)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
