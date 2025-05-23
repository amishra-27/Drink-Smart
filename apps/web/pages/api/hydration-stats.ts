import type { NextApiRequest, NextApiResponse } from 'next';

type HydrationStats = {
  dailyGoal: number;
  currentAmount: number;
  unit: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HydrationStats>
) {
  // Mock data - in a real app, this would come from a database
  const stats = {
    dailyGoal: 2500,
    currentAmount: 1250,
    unit: 'ml',
  };

  res.status(200).json(stats);
} 