import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function DashboardPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">Welcome to your Dashboard</h1>
                    <p className="text-lg text-muted-foreground mt-4">
                        This is your personal space. More features coming soon!
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
