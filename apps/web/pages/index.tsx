import { Button } from '@drink-smart/ui';
import { HydrationStats } from '../components/hydration/HydrationStats';
import { Layout } from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <HydrationStats />
          </div>
          
          <div className="card card-elevated mb-8">
            <div className="card-title">Welcome to DrinkSmart</div>
            <div className="card-content">
              <p className="mb-4">Track your daily water intake and stay hydrated.</p>
              <div className="flex flex-col gap-4">
                <Button variant="primary" size="large" onPress={() => console.log('Start tracking')}>
                  Start Tracking
                </Button>
                <Button 
                  variant="secondary"
                  onPress={() => console.log('Learn more')}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500">
            DrinkSmart PWA - Built with Next.js, TypeScript, and TailwindCSS
          </p>
        </div>
      </div>
    </Layout>
  );
} 