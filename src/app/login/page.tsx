import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { LoginForm } from './login-form';

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col bg-secondary/50">
            <Header />
            <main className="flex-1 flex items-center justify-center container mx-auto px-4 py-16">
                <div className="w-full max-w-md">
                    <LoginForm />
                </div>
            </main>
            <Footer />
        </div>
    );
}
