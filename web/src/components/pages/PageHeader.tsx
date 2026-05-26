import Typography, { type TypographyProps } from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

/**
 * title and subtitle for a page
 */
export default function PageHeader({
    title,
    subtitle,
    shouldEmphasizeTitle = false,
    titleProps,
    subtitleProps
}: {
    title: string;
    subtitle: string;
    shouldEmphasizeTitle?: boolean;
    titleProps?: TypographyProps;
    subtitleProps?: TypographyProps;
}) {
    return (
        <Grid container sx={{ p: 4 }}>
            <Grid
                size={12}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 1
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    align="center"
                    {...titleProps}
                    sx={{
                        fontWeight: shouldEmphasizeTitle ? 700 : 500,
                        ...titleProps?.sx
                    }}
                >
                    {title}
                </Typography>
            </Grid>
            <Grid
                size={12}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Typography
                    variant="h6"
                    component="p"
                    align="center"
                    {...subtitleProps}
                    sx={{ fontWeight: 500, ...subtitleProps?.sx }}
                >
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    );
}
