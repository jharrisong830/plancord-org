import Typography from "@mui/material/Typography";

import PageHeader from "@/components/pages/PageHeader";
import PageContentSection from "@/components/pages/PageContentSection";

/**
 * privacy policy page for my applications
 */
export default function Privacy() {
    return (
        <main>
            <PageHeader
                title="Privacy."
                subtitle="TLDR: I don't collect your data ever."
            />

            <PageContentSection title="No data collected. Ever.">
                <Typography variant="body1" component="p">
                    If you use, test, download, or otherwise access any of my
                    apps, sites, or programs, you can rest assured that I won't
                    collect any data from you. Nothing I have released utilizes
                    any telemetry or server-side storage of data. I'm not in the
                    business of your data; I'm in the business of making cool
                    apps!
                </Typography>

                <Typography variant="body1" component="p">
                    SimpleHW (on the App Store) and SimpleMusic Transfer (in
                    beta testing) store all data on-device. No extra data comes
                    back to me, aside from any testing/crash-related info sent
                    to me through TestFlight. Any data sent/received through
                    outside services is subject to the service's privacy policy.
                </Typography>
            </PageContentSection>
        </main>
    );
}
