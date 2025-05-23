import { Button, Card } from '@drink-smart/ui';
import { useHydrationStats } from '../../hooks/useHydrationStats';

export function HydrationStats() {
  const { data, isLoading, isError, refetch } = useHydrationStats();

  if (isLoading) {
    return <div className="text-center p-4">Loading hydration stats...</div>;
  }

  if (isError) {
    return (
      <div className="text-center p-4">
        <p className="text-red-500 mb-2">Error loading hydration stats</p>
        <Button variant="primary" onPress={() => refetch()}>
          Try Again
        </Button>
      </div>
    );
  }

  const percentage = Math.round((data.currentAmount / data.dailyGoal) * 100);

  return (
    <Card title="Today's Hydration">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700" />
          <div
            className="absolute inset-0 rounded-full border-4 border-brand-primary"
            style={{
              clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
              clipPath: `path('M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92')`,
              background: `conic-gradient(#3B82F6 ${percentage}%, transparent 0%)`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">{percentage}%</span>
          </div>
        </div>
        <p className="text-lg">
          {data.currentAmount} / {data.dailyGoal} {data.unit}
        </p>
        <div className="flex gap-2 mt-4">
          <Button
            variant="primary"
            size="small"
            onPress={() => console.log('Add 250ml')}
          >
            +250ml
          </Button>
          <Button
            variant="primary"
            size="small"
            onPress={() => console.log('Add 500ml')}
          >
            +500ml
          </Button>
        </div>
      </div>
    </Card>
  );
} 