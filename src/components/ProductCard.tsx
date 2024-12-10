import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';
import { RankBadge } from './RankBadge';
import { VoteButton } from './VoteButton';

interface ProductCardProps {
  product: Product;
  onVote: () => void;
  votes: number;
  hasVoted: boolean;
}

export function ProductCard({ product, onVote, votes, hasVoted }: ProductCardProps) {
  return (
    <div className="product-card overflow-hidden group">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover aspect-video md:aspect-auto brightness-[1.02] group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <RankBadge rank={product.rank || 0} />
          </div>
        </div>
        
        <div className="p-8 md:w-2/3 relative">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary-50 text-primary-700 border border-primary-100">
              {product.category}
            </span>
          </div>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>
          
          <div className="flex flex-wrap items-center gap-4">
            <VoteButton onVote={onVote} votes={votes} hasVoted={hasVoted} />
            
            <Link 
              to={`/product/${product.id}`}
              className="inline-flex items-center px-4 py-2 text-accent-600 hover:text-accent-700 font-medium transition-colors"
            >
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <a
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Globe className="h-4 w-4 mr-1.5" />
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}