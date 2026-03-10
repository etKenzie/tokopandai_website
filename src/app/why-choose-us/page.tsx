import WhyChooseUs from '@/components/sections/home/WhyChooseUs'

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h1>
            <p className="text-lg text-gray-600">
              Mari menjadi bagian dalam ekosistem digital Indonesia yang pandai dalam 
              mengoptimalkan strategi bisnis Anda dan bersaing secara efektif.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
    </main>
  );
}

