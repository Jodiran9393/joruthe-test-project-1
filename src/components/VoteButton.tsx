import React from 'react';
import { ThumbsUp } from 'lucide-react';

interface VoteButtonProps {
  onVote: () => void;
  votes: number;
  hasVoted: boolean;
}

export function VoteButton({ onVote, votes, hasVoted }: VoteButtonProps) {
  return (
    <button
      onClick={onVote}
      disabled={hasVoted}
      className={`
        flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-all duration-300
        ${hasVoted
          ? 'bg-primary-50 text-primary-700 border-2 border-primary-200 shadow-glow'
          : 'bg-white text-primary-600 border-2 border-primary-200 hover:border-primary-300 hover:shadow-glow'
        }
      `}
    >
      <ThumbsUp className={`w-5 h-5 ${hasVoted ? 'fill-primary-500' : ''}`} />
      <span className="font-semibold">{votes}</span>
    </button>
  );
}