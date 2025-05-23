import { useQuery } from '@tanstack/react-query';

export type HydrationStats = {
  dailyGoal: number;
  currentAmount: number;
  unit: string;
};

async function fetchHydrationStats(): Promise<HydrationStats> {
  const response = await fetch('/api/hydration-stats');
  if (!response.ok) {
    throw new Error('Failed to fetch hydration stats');
  }
  return response.json();
}

export function useHydrationStats() {
  return useQuery({
    queryKey: ['hydrationStats'],
    queryFn: fetchHydrationStats,
  });
} 