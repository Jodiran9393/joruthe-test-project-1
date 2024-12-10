import React from 'react';
import { Trophy } from 'lucide-react';

interface RankBadgeProps {
  rank: number;
}

export function RankBadge({ rank }: RankBadgeProps) {
  const getBadgeColors = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-50 text-yellow-700 border-yellow-200 shadow-yellow-100';
      case 2:
        return 'bg-gray-50 text-gray-700 border-gray-200 shadow-gray-100';
      case 3:
        return 'bg-orange-50 text-orange-700 border-orange-200 shadow-orange-100';
      default:
        return 'bg-primary-50 text-primary-700 border-primary-200 shadow-primary-100';
    }
  };

  return (
    <div 
      className={`flex items-center gap-1.5 px-4 py-2 rounded-full border shadow-lg ${getBadgeColors(rank)}`}
    >
      {rank <= 3 && <Trophy className="w-4 h-4" />}
      <span className="font-bold">#{rank}</span>
    </div>
  );
}