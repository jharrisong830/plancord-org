import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography, { type TypographyProps } from "@mui/material/Typography";

const getContentAlign = (rowReverse: boolean) => (rowReverse ? "end" : "start");

/**
 * page section with title and content sections (rendered side-by-side on larger screens, and stacked on smaller screens)
 */
export default function PageContentSection({
    title,
    description,
    children,
    rowReverse = false,
    titleProps
}: {
    title: string;
    description?: string;
    children: React.ReactNode;
    rowReverse?: boolean;
    titleProps?: TypographyProps;
}) {
    return (
        <Grid
            container
            direction={rowReverse ? "row-reverse" : "row"}
            sx={{ p: 4 }}
        >
            <Grid
                size={{ xs: 12, md: 4 }}
                sx={{
                    display: "flex",
                    textAlign: getContentAlign(rowReverse),
                    justifyContent: getContentAlign(rowReverse),
                    alignItems: "center",
                    pb: { xs: 2, md: 0 }
                }}
            >
                <Stack spacing={2}>
                    <Typography
                        variant="h4"
                        {...titleProps}
                        sx={{ fontWeight: 700, ...titleProps?.sx }}
                    >
                        {title}
                    </Typography>
                    {description && (
                        <Typography>
                            {description}
                        </Typography>
                    )}
                </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} sx={{ alignItems: "center" }}>
                <Stack spacing={2}>{children}</Stack>
            </Grid>
        </Grid>
    );
}
