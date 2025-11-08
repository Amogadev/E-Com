import { Users, Truck, Award, Sofa } from 'lucide-react';

const stats = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        value: '1M+',
        label: 'Happy customers nationwide',
    },
    {
        icon: <Truck className="h-8 w-8 text-primary" />,
        value: '98%',
        label: 'Of metro areas covered',
    },
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        value: '500+',
        label: 'Exclusive designs',
    },
    {
        icon: <Sofa className="h-8 w-8 text-primary" />,
        value: '2,000+',
        label: 'Items in our collection',
    },
];

export function BrandStatsSection() {
    return (
        <section className="bg-background">
            <div className="bg-foreground text-background">
                <div className="container mx-auto px-4 py-4 text-center">
                    <p className="font-medium text-lg">
                        Find the perfect piece to complete your room today!
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 pt-20 pb-10 md:pt-28 md:pb-14">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">
                            Why people choose Modern Nook
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
