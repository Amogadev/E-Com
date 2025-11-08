'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const stats = [
    { value: 10, suffix: 'K+', label: 'Sellers' },
    { value: 2, suffix: 'M+', label: 'Orders' },
    { value: 99.9, suffix: '%', label: 'Uptime' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 1500;
        const increment = end / (duration / 16);

        const animate = () => {
            start += increment;
            if (start < end) {
                setCurrentValue(Math.min(start, end));
                requestAnimationFrame(animate);
            } else {
                setCurrentValue(end);
            }
        };
        const timer = setTimeout(() => requestAnimationFrame(animate), 200);

        return () => clearTimeout(timer);
    }, [value]);

    const displayValue = currentValue.toLocaleString('en-US', {
        maximumFractionDigits: currentValue % 1 === 0 ? 0 : 1,
    });

    return (
        <span className="font-bold text-3xl md:text-4xl text-primary">
            {displayValue}{suffix}
        </span>
    );
}

export function SellerStats() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div ref={ref} className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                    {inView ? (
                        <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    ) : (
                         <span className="font-bold text-3xl md:text-4xl text-primary">
                            0{stat.suffix.replace(/[0-9.]/g, '')}
                        </span>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}
