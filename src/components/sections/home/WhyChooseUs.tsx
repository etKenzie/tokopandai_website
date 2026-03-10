"use client";
import { motion } from "framer-motion";
import { Scale, Users, Award, Network, Shield } from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "Netral",
    description: "Kami tidak terafiliasi dengan prinsip atau merek tertentu. Tujuan kami adalah membangun platform digital bersama yang dirancang khusus untuk membantu toko ritel kecil hingga menengah.",
  },
  {
    icon: Users,
    title: "Mitra Strategis Kuat",
    description: "Kami bermitra dengan perusahaan Fast-Moving Consumer Goods (FMCG) terbesar dan bank terkemuka di Indonesia, memberikan Anda akses ke sumber daya dan dukungan yang kuat.",
  },
  {
    icon: Award,
    title: "Pengalaman & Keahlian",
    description: "Tim kami yang berpengalaman dan strategi operasional yang solid memastikan bahwa setiap aspek bisnis Anda dikelola dengan profesionalisme dan efisiensi tinggi.",
  },
  {
    icon: Network,
    title: "Jaringan Nasional",
    description: "Infrastruktur kami siap mendukung operasional di seluruh penjuru negeri, memastikan bahwa layanan kami dapat menjangkau bisnis Anda di mana pun berada.",
  },
  {
    icon: Shield,
    title: "Integritas Terbukti",
    description: "Dengan lebih dari 20 tahun pengalaman dalam pengolahan dan pengamanan data untuk industri perbankan dan keuangan, kami menjamin keamanan dan keandalan data.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mari menjadi bagian dalam ekosistem digital Indonesia yang pandai dalam mengoptimalkan 
            strategi bisnis Anda dan bersaing secara efektif.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <reason.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

