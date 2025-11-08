'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function HelpBot() {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: 'Chocobe Support Bot',
      description:
        'Our support bot is currently taking a nap. Please try again later!',
    });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse"
            onClick={handleClick}
          >
            <MessageSquare className="h-8 w-8" />
            <span className="sr-only">Open support bot</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-primary text-primary-foreground">
          <p>Need help? Ask Chocobe Support Bot.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
