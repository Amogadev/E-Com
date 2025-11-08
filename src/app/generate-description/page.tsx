import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { GenerateDescriptionForm } from './form';

export default function GenerateDescriptionPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-headline">AI Product Description Generator</h1>
                        <p className="text-lg text-muted-foreground mt-4">
                            Let our AI assistant craft the perfect description for your product. Just provide a few keywords and features to get started.
                        </p>
                    </div>
                    <GenerateDescriptionForm />
                </div>
            </main>
            <Footer />
        </div>
    );
}
