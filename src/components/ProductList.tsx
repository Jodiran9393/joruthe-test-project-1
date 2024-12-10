import React from 'react';
import { ProductCard } from './ProductCard';
import { featuredProducts } from '../data/products';
import { Rocket, Sparkles } from 'lucide-react';
import { useVoting } from '../hooks/useVoting';

export function ProductList() {
  const { handleVote, getVoteCount, hasVoted } = useVoting();

  const sortedProducts = [...featuredProducts]
    .map(product => ({
      ...product,
      votes: getVoteCount(product.id)
    }))
    .sort((a, b) => b.votes - a.votes)
    .map((product, index) => ({
      ...product,
      rank: index + 1
    }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 -z-10 rank-pattern opacity-30" />
          <div className="flex items-center justify-center mb-6 gap-3">
            <Rocket className="h-12 w-12 text-primary-600" strokeWidth={1.5} />
            <Sparkles className="h-8 w-8 text-accent-500" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-primary-600 to-accent-500 text-transparent bg-clip-text">
            Top Tools for Nigerian Builders
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover and vote for the best products powering Nigeria's tech ecosystem.
            Built for hackers, founders, and bootstrappers.
          </p>
        </div>

        <div className="space-y-8">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onVote={() => handleVote(product.id)}
              votes={getVoteCount(product.id)}
              hasVoted={hasVoted(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}