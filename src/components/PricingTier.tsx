import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './utils/Card';

const PricingTier = ({ image, title, price, description, features, recommended }: { image: string, title: string, price: string, description: string, features: string[], recommended: boolean }) => (
  <div className={`relative transition hover:opacity-100 ${
    recommended 
      ? 'origin-top lg:scale-105' 
      : 'origin-top-left opacity-80 lg:mt-28 lg:scale-90'
  }`}>
    {recommended && (
      <div className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-75 blur-lg group-hover:opacity-100 animate-pulse" />
    )}
    <Card className={`relative w-full max-w-sm ${
      recommended 
        ? 'border-2 border-cyan-500 bg-gradient-to-b from-slate-900 to-slate-800'
        : ''
    }`}>
      <CardHeader>
        <img src={image} alt={title} className="w-[200px] h-[200px] mx-auto rounded-full" />
        {recommended && (
          <span className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-sm font-semibold text-white">
            Recommended
          </span>
        )}
        <CardTitle>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="mt-4">
            <sup className="text-sm">US</sup>
            <span className="text-4xl font-bold">${price}</span>
          </div>
        </CardTitle>
        <p className="text-sm text-gray-400">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center">
              <Check className={`mr-2 h-4 w-4 ${recommended ? 'text-cyan-500' : 'text-primary'}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className={`mt-8 w-full rounded px-4 py-2 font-semibold text-primary-foreground transition-all duration-200 ${
          recommended 
            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'
            : 'bg-primary hover:bg-primary/90'
        }`}>
          Buy Now
        </button>
      </CardContent>
    </Card>
  </div>
);

export default PricingTier;