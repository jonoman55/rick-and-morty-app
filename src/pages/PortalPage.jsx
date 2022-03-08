import { useState } from "react";
import { Box, Card, CardContent, CardMedia, Container, Alert, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

import { Button, ToolTip } from "../components/controls";
import { useBreakpoints } from "../hooks/useBreakpoints"; 
import portal from "../images/portal.gif";

const height = (matches) => {
    if (matches) {
        return {
            height: 400, width: 500
        }
    } else {
        return {
            height: '100%', width: '100%'
        }
    }
}

const PortalPage = () => {
    const matches = useBreakpoints('sm', 'up');
    const [showAlert, setShowAlert] = useState(false);
    return (
        <Box sx={{ my: 4 }}>
            <Container maxWidth="md">
                <Card sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Box sx={{ p: 2 }}>
                        <CardMedia
                            component='img'
                            src={portal}
                            alt='portal'
                            sx={height(matches)}
                        />
                    </Box>
                    <CardContent sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
                        <ToolTip title='Warp To A Random Location!' placement='bottom' component={
                            <Button sx={{ width: 125 }} onClick={() => setShowAlert(true)}>Warp!</Button>}
                        />
                        {showAlert && (
                            <Alert
                                icon={false}
                                severity="success"
                                action={
                                    <IconButton
                                      aria-label="close"
                                      color="inherit"
                                      size="small"
                                      onClick={() => {
                                        setShowAlert(false);
                                      }}
                                    >
                                      <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                  }
                                  sx={{ my: 2 }}
                            >
                                This feature is not out yet! 😅
                            </Alert>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default PortalPage;