import IdeaBoard from '@/components/idea-board';
import HeroSection from '@/components/hero-section';

export default function Page() {
  return (
    <main className='min-h-screen relative'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20' />

      {/* Content */}
      <div className='relative'>
        <HeroSection />
        <IdeaBoard />
      </div>
    </main>
  );
}
