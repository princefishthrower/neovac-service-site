import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './utils/Card';

interface PricingTierProps {
  image: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ image, title, price, description, features, recommended }) => (
  <div className="relative transition">
    <Card className="relative w-full max-w-sm border-2 border-primary bg-white">
      <CardHeader>
        <CardTitle>
          <h2 className="text-2xl font-semibold text-black">Enterprise</h2>
          <div className="mt-4">
            <span className="text-4xl font-bold text-black">$500</span>
            <span className="text-sm text-black">/year</span>
          </div>
        </CardTitle>
        <p className="text-sm text-black">Full access to GitRecall's enterprise features</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span className="text-black">Unlimited repositories</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span className="text-black">Unlimited queries</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span className="text-black">Full commit history analysis</span>
          </li>
          <li className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span className="text-black">Advanced search capabilities</span>
          </li>
        </ul>
        <button className="mt-8 w-full rounded px-4 py-2 font-semibold text-white bg-primary hover:bg-primary-dark transition-colors">
          Get Started
        </button>
      </CardContent>
    </Card>
  </div>
);

export default PricingTier;