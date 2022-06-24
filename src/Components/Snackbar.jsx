import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Customizedsnackbars = (props) => {
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.close();
    };

    return (
        <Stack sx={{ width: '100%', position: 'relative', bottom: '0px !important'}}>
            <Snackbar sx={{position: 'relative', left: 'auto !important', bottom: '0px !important' }} open={props.openSla} autoHideDuration={6000} onClose={handleClose}>
                <Alert sx={{position: 'relative', left: 'auto !important', bottom: '0px !important' }} onClose={handleClose} severity={props.type} sx={{ width: '100%' }}>
                    {props.message}
                </Alert>
            </Snackbar>
         
        </Stack>
    );
}
export default Customizedsnackbars;
