import { Users, Truck, Award, Handshake } from 'lucide-react';

const stats = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        value: '300M+',
        label: 'Unique visitors per year',
    },
    {
        icon: <Truck className="h-8 w-8 text-primary" />,
        value: '99.3%',
        label: 'Pincode reach for delivery',
    },
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        value: '38K+',
        label: 'Sellers achieved highest-ever sales',
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        value: '14L+',
        label: 'Sellers are selling on Chocobe',
    },
];

export function BrandStatsSection() {
    return (
        <section className="bg-background">
            <div className="bg-foreground text-background">
                <div className="container mx-auto px-4 py-3 text-center">
                    <p className="font-medium">
                        Join thousands of sellers who make their first sale in under 30 days!¹
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 pt-20 pb-10 md:pt-28 md:pb-14">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">
                            Build your Brand with Us
                        </h2>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                                <div className="mx-auto w-fit mb-2">
                                    {stat.icon}
                                 </div>
                                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
