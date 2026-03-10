import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import OperationCenters from '@/components/sections/home/OperationCenters'
import WhyChooseUs from '@/components/sections/home/WhyChooseUs'
import Testimonials from '@/components/sections/home/Testimonials'
import Mission from '@/components/sections/home/Mission'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Features />
      <OperationCenters />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
