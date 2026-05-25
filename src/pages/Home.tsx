import PageHeader from "@/components/pages/PageHeader";

/**
 * home page that renders at domain root
 */
export default function Home() {
    return (
        <main>
            <PageHeader
                title="Plancord"
                subtitle="Welcome to plancord.org"
                shouldEmphasizeTitle
            />
        </main>
    );
}
