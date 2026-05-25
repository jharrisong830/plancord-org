import { useState } from "react";

import { Link } from "react-router";

import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { navPages, allPages } from "@/util/pages";

/**
 * responsive navbar with a hamburger menu on small screens and a horizontal menu on larger screens
 */
export default function Navbar() {
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleCloseMenu = () => setMenuAnchor(null);

    return (
        <Grid container>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Grid
                        size="auto"
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            mr: 2
                        }}
                    >
                        <Typography
                            variant="h5"
                            component={Link}
                            sx={{
                                color: "inherit",
                                fontWeight: 700,
                                textDecoration: "none"
                            }}
                            to="https://jhg.app"
                        >
                            jhg.app
                        </Typography>
                    </Grid>

                    <Grid
                        size="grow"
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            justifyContent: "flex-start",
                            alignItems: "center"
                        }}
                    >
                        {navPages.map((page) => (
                            <Button
                                key={page.path}
                                color="inherit"
                                component={Link}
                                to={page.path}
                            >
                                {page.title}
                            </Button>
                        ))}
                    </Grid>

                    <Grid
                        size="grow"
                        sx={{
                            display: { xs: "flex", sm: "none" },
                            justifyContent: "flex-end",
                            alignItems: "center"
                        }}
                    >
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={handleOpenMenu}
                            aria-label="Open navigation menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={menuAnchor}
                            open={menuAnchor !== null}
                            onClose={handleCloseMenu}
                        >
                            {allPages.map((page) => (
                                <MenuItem
                                    key={page.path}
                                    component={Link}
                                    to={page.path}
                                    onClick={handleCloseMenu}
                                >
                                    {page.title}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}
