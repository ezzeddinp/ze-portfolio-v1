import React from 'react';
import { BackgroundGradientAnimation } from '@/components/ui/gradient/data/background-gradient-animation';

export default function GradientMain({ children }: { children: React.ReactNode }) {
  return (
    <BackgroundGradientAnimation>
      {children}
    </BackgroundGradientAnimation>
  );
}
