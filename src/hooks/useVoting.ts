import { useState, useEffect } from 'react';

export function useVoting() {
  const [votes, setVotes] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('productVotes');
    return saved ? JSON.parse(saved) : {};
  });

  const [userVotes, setUserVotes] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('userVotes');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('productVotes', JSON.stringify(votes));
    localStorage.setItem('userVotes', JSON.stringify(userVotes));
  }, [votes, userVotes]);

  const handleVote = (productId: string) => {
    if (userVotes[productId]) return;

    setVotes(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));

    setUserVotes(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  const getVoteCount = (productId: string) => votes[productId] || 0;
  const hasVoted = (productId: string) => Boolean(userVotes[productId]);

  return { handleVote, getVoteCount, hasVoted };
}