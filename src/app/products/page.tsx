"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Gift,
  Package,
  Store,
  Users,
  Warehouse
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  features: {
    name: string;
    icon: React.ReactNode;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  slogan: string;
  price: string;
  image: string;
  detailUrl: string;
  bgColor: string;
  iconColor: string;
  cardStyle: "standard" | "standard-reverse" | "feature-focused";
}

const products: Product[] = [
  {
    id: "mystery-shopper",
    name: "Mystery Shopper",
    description: "Layanan evaluasi kualitas produk dan pelayanan untuk memastikan SOP berjalan dengan baik.",
    features: [
      { name: "Evaluasi Objektif", icon: <CheckCircle2 className="w-5 h-5" /> },
      { name: "Laporan Detail", icon: <Package className="w-5 h-5" /> },
      { name: "SOP Compliance", icon: <Store className="w-5 h-5" /> },
      { name: "Insight Berharga", icon: <Users className="w-5 h-5" /> },
    ],
    specifications: [
      { label: "Report Time", value: "Instant" },
      { label: "Coverage", value: "Nasional" },
    ],
    slogan: "Crafted to elevate your service quality",
    price: "Contact Us",
    image: "/products/mystery-shopper.jpg",
    detailUrl: "/mystery-shopper",
    bgColor: "from-blue-900 to-blue-800",
    iconColor: "blue-dark",
    cardStyle: "feature-focused",
  },
  {
    id: "cash-pickup",
    name: "Cash Pickup",
    description: "Layanan pengumpulan uang tunai yang aman dan terpercaya untuk mengoptimalkan arus kas bisnis Anda.",
    features: [
      { name: "Tim Profesional", icon: <Users className="w-5 h-5" /> },
      { name: "Keamanan Berlapis", icon: <CheckCircle2 className="w-5 h-5" /> },
      { name: "Laporan Real-time", icon: <Package className="w-5 h-5" /> },
      { name: "Fleksibel", icon: <CheckCircle2 className="w-5 h-5" /> },
    ],
    specifications: [
      { label: "Response Time", value: "< 24 Jam" },
      { label: "Coverage", value: "Nasional" },
      { label: "Security", value: "Level 5" },
    ],
    slogan: "Crafted to optimize your cash flow",
    price: "Contact Us",
    image: "/products/cash-pickup.jpg",
    detailUrl: "/cash-pickup",
    bgColor: "from-blue-50 to-blue-100",
    iconColor: "blue",
    cardStyle: "standard",
  },
  {
    id: "warehouse-management",
    name: "Warehouse Management",
    description: "Solusi gudang cerdas untuk menyediakan stok bahan baku yang disesuaikan dengan kebutuhan bisnis Anda.",
    features: [
      { name: "Smart Storage", icon: <Warehouse className="w-5 h-5" /> },
      { name: "Real-time Inventory", icon: <Package className="w-5 h-5" /> },
      { name: "Automated System", icon: <CheckCircle2 className="w-5 h-5" /> },
      { name: "Scalable", icon: <Store className="w-5 h-5" /> },
    ],
    specifications: [
      { label: "Capacity", value: "Unlimited" },
      { label: "Location", value: "Multi-city" },
      { label: "Technology", value: "IoT Enabled" },
    ],
    slogan: "Crafted to maximize your storage efficiency",
    price: "Contact Us",
    image: "/products/warehouse.jpg",
    detailUrl: "#",
    bgColor: "from-blue-800 to-blue-700",
    iconColor: "blue-dark",
    cardStyle: "standard-reverse",
  },
  {
    id: "loyalty-services",
    name: "Loyalty Services",
    description: "Sistem rewards terintegrasi untuk meningkatkan loyalitas customer dan mitra bisnis Anda.",
    features: [
      { name: "Reward System", icon: <Gift className="w-5 h-5" /> },
      { name: "Point Management", icon: <CheckCircle2 className="w-5 h-5" /> },
      { name: "Analytics", icon: <Package className="w-5 h-5" /> },
      { name: "Multi-tier", icon: <Users className="w-5 h-5" /> },
    ],
    specifications: [
      { label: "Users", value: "Unlimited" },
      { label: "Redemption", value: "Real-time" },
      { label: "Integration", value: "Full API" },
    ],
    slogan: "Crafted to build lasting relationships",
    price: "Contact Us",
    image: "/products/loyalty.jpg",
    detailUrl: "/loyalti-services",
    bgColor: "from-cyan-50 to-cyan-100",
    iconColor: "cyan",
    cardStyle: "feature-focused",
  },
  {
    id: "monitoring-store",
    name: "Monitoring Store",
    description: "Layanan monitoring toko dengan sumber daya manusia profesional sesuai kebutuhan perusahaan Anda.",
    features: [
      { name: "Professional Team", icon: <Users className="w-5 h-5" /> },
      { name: "24/7 Monitoring", icon: <Store className="w-5 h-5" /> },
      { name: "Real-time Reports", icon: <Package className="w-5 h-5" /> },
      { name: "Customizable", icon: <CheckCircle2 className="w-5 h-5" /> },
    ],
    specifications: [
      { label: "Coverage", value: "24/7" },
      { label: "Response", value: "< 1 Jam" },
      { label: "Scalability", value: "Multi-store" },
    ],
    slogan: "Crafted to ensure operational excellence",
    price: "Contact Us",
    image: "/products/monitoring.jpg",
    detailUrl: "/monitoring-store",
    bgColor: "from-indigo-50 to-indigo-100",
    iconColor: "indigo",
    cardStyle: "standard",
  },
  {
    id: "digital-fulfilment",
    name: "Digital Fulfilment",
    description: "Platform digital terintegrasi untuk memenuhi kebutuhan bahan baku bisnis Anda dengan efisiensi tinggi.",
    features: [
      { name: "Real-time Tracking", icon: <Package className="w-5 h-5" /> },
      { name: "Auto Reorder", icon: <CheckCircle2 className="w-5 h-5" /> },
      { name: "Multi Supplier", icon: <Warehouse className="w-5 h-5" /> },
      { name: "Inventory Management", icon: <Store className="w-5 h-5" /> },
    ],
    specifications: [
      { label: "Delivery Time", value: "24-48 Jam" },
      { label: "Accuracy", value: "99.8%" },
      { label: "Integration", value: "API Ready" },
    ],
    slogan: "Crafted to streamline your supply chain",
    price: "Contact Us",
    image: "/products/digital-fulfilment.jpg",
    detailUrl: "/digital-fulfilment",
    bgColor: "from-sky-50 to-sky-100",
    iconColor: "sky",
    cardStyle: "standard",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dengan teknologi canggih dan pendekatan yang berfokus pada pelanggan,
              kami siap membantu Anda mengatasi tantangan pasar dan meraih kesuksesan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
            {products.map((product) => {
              const getIcon = () => {
                switch (product.id) {
                  case "cash-pickup":
                    return (
                      <div className="flex items-center justify-center w-full h-full overflow-visible">
                        <Image
                          src="/products/cash2.png"
                          alt="Cash Pickup"
                          width={290}
                          height={290}
                          className="object-contain max-w-[140%] max-h-[160%] "
                        />
                      </div>
                    );
                  case "mystery-shopper":
                    return (
                      <div className="flex items-center justify-center w-full h-full overflow-visible">
                        <Image
                          src="/products/clipboard.png"
                          alt="Mystery Shopper"
                          width={360}
                          height={360}
                          className="object-contain max-w-[180%] max-h-[200%]"
                        />
                      </div>
                    );
                  case "digital-fulfilment":
                    return <Package className="w-16 h-16" />;
                  case "warehouse-management":
                    return (
                      <div className="flex items-center justify-center w-full h-full overflow-visible">
                        <Image
                          src="/products/warehouse2.png"
                          alt="Warehouse Management"
                          width={300}
                          height={300}
                          className="object-contain max-w-[300%] max-h-[300%]"
                        />
                      </div>
                    );
                  case "loyalty-services":
                    return <Gift className="w-18 h-18" />;
                  case "monitoring-store":
                    return <Store className="w-20 h-20" />;
                  default:
                    return <Package className="w-20 h-20" />;
                }
              };

              const colorClasses = {
                blue: {
                  text: "text-blue-900",
                  textLight: "text-blue-800",
                  bg: "bg-blue-200/70",
                  bgAlt: "bg-blue-200/50",
                  bgAlt2: "bg-blue-300/40",
                  icon: "text-blue-700",
                  iconBg: "from-blue-300/40 to-blue-400/30",
                },
                "blue-dark": {
                  text: "text-white",
                  textLight: "text-blue-100",
                  bg: "bg-blue-700/70",
                  bgAlt: "bg-blue-700/50",
                  bgAlt2: "bg-blue-600/40",
                  icon: "text-blue-200",
                  iconBg: "from-blue-600/40 to-blue-500/30",
                },
                sky: {
                  text: "text-sky-900",
                  textLight: "text-sky-800",
                  bg: "bg-sky-200/70",
                  bgAlt: "bg-sky-200/50",
                  bgAlt2: "bg-sky-300/40",
                  icon: "text-sky-700",
                  iconBg: "from-sky-300/40 to-sky-400/30",
                },
                cyan: {
                  text: "text-cyan-900",
                  textLight: "text-cyan-800",
                  bg: "bg-cyan-200/70",
                  bgAlt: "bg-cyan-200/50",
                  bgAlt2: "bg-cyan-300/40",
                  icon: "text-cyan-700",
                  iconBg: "from-cyan-300/40 to-cyan-400/30",
                },
                indigo: {
                  text: "text-indigo-900",
                  textLight: "text-indigo-800",
                  bg: "bg-indigo-200/70",
                  bgAlt: "bg-indigo-200/50",
                  bgAlt2: "bg-indigo-300/40",
                  icon: "text-indigo-700",
                  iconBg: "from-indigo-300/40 to-indigo-400/30",
                },
              };

              const colors = colorClasses[product.iconColor as keyof typeof colorClasses] || colorClasses.blue;

              // Render different card layouts based on cardStyle
              const renderCard = () => {
                switch (product.cardStyle) {
                  case "standard-reverse":
                    // Standard Reverse: Icon and specs on left, content on right
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-8">
                        <div className="md:col-span-1 flex flex-col justify-center gap-3">
                          {product.specifications.map((spec, idx) => (
                            <div
                              key={idx}
                              className={`rounded-lg p-2 text-center ${colors.bgAlt}`}
                            >
                              <p className={`text-xs ${colors.textLight} mb-0.5`}>{spec.label}</p>
                              <p className={`text-sm font-bold ${colors.text}`}>{spec.value}</p>
                            </div>
                          ))}
                        </div>
                        <div className="md:col-span-2 flex items-center justify-center overflow-visible">
                          {product.id === "cash-pickup" || product.id === "mystery-shopper" ? (
                            <div className="w-full h-56 flex items-center justify-center overflow-visible">
                              {getIcon()}
                            </div>
                          ) : product.id === "warehouse-management" ? (
                            <div className="w-full h-56 flex items-center justify-center overflow-visible">
                              {getIcon()}
                            </div>
                          ) : (
                            <div className={`w-full h-56 bg-gradient-to-br ${colors.iconBg} rounded-xl flex items-center justify-center shadow-inner`}>
                              <div className={`${colors.icon} opacity-50`}>
                                {getIcon()}
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="md:col-span-2">
                          <h2 className={`text-2xl font-bold ${colors.text} mb-2`}>{product.name}</h2>
                          <p className={`text-sm ${colors.textLight} mb-3 leading-relaxed`}>
                            {product.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {product.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className={`flex items-center gap-1 ${colors.bg} px-2 py-1 rounded-full`}
                              >
                                <span className={`${colors.text} text-xs`}>{feature.icon}</span>
                                <span className={`text-xs font-medium ${colors.text}`}>
                                  {feature.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );

                  case "feature-focused":
                    // Feature-focused: Emphasizes features
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
                        <div>
                          <h2 className={`text-2xl font-bold ${colors.text} mb-3`}>{product.name}</h2>
                          <p className={`text-sm ${colors.textLight} mb-6`}>
                            {product.description}
                          </p>
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {product.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className={`flex items-center gap-2 ${colors.bg} px-3 py-2 rounded-lg`}
                              >
                                <span className={`${colors.text}`}>{feature.icon}</span>
                                <span className={`text-xs font-medium ${colors.text}`}>
                                  {feature.name}
                                </span>
                              </div>
                            ))}
                          </div>
                          {product.id === "mystery-shopper" && (
                            <div className="flex gap-2">
                              {product.specifications.map((spec, idx) => (
                                <div
                                  key={idx}
                                  className={`flex-1 rounded-lg p-2 text-center ${colors.bgAlt}`}
                                >
                                  <p className={`text-xs ${colors.textLight}`}>{spec.label}</p>
                                  <p className={`text-sm font-bold ${colors.text}`}>{spec.value}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className={product.id === "mystery-shopper" ? "flex items-center justify-center overflow-visible h-64" : "flex flex-col justify-between overflow-visible"}>
                          {product.id === "cash-pickup" || product.id === "mystery-shopper" ? (
                            <div className={product.id === "mystery-shopper" ? "w-full h-64 flex items-center justify-center overflow-visible relative" : "w-full h-48 flex items-center justify-center mb-4 overflow-visible"}>
                              {getIcon()}
                            </div>
                          ) : (
                            <div className={`w-full h-48 bg-gradient-to-br ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                              <div className={`${colors.icon} opacity-50`}>
                                {getIcon()}
                              </div>
                            </div>
                          )}
                          {product.id !== "mystery-shopper" && (
                            <div className="flex gap-2">
                              {product.specifications.map((spec, idx) => (
                                <div
                                  key={idx}
                                  className={`flex-1 rounded-lg p-2 text-center ${colors.bgAlt}`}
                                >
                                  <p className={`text-xs ${colors.textLight}`}>{spec.label}</p>
                                  <p className={`text-sm font-bold ${colors.text}`}>{spec.value}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );

                  default: // "standard"
                    // Standard: Original layout
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-8">
                        <div className="md:col-span-2">
                          <h2 className={`text-2xl font-bold ${colors.text} mb-2`}>{product.name}</h2>
                          <p className={`text-sm ${colors.textLight} mb-3 leading-relaxed`}>
                            {product.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {product.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className={`flex items-center gap-1 ${colors.bg} px-2 py-1 rounded-full`}
                              >
                                <span className={`${colors.text} text-xs`}>{feature.icon}</span>
                                <span className={`text-xs font-medium ${colors.text}`}>
                                  {feature.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className={product.id === "mystery-shopper" ? "md:col-span-3 flex items-center justify-center overflow-visible" : "md:col-span-2 flex items-center justify-center overflow-visible"}>
                          {product.id === "cash-pickup" || product.id === "mystery-shopper" ? (
                            <div className="w-full h-56 flex items-center justify-center overflow-visible">
                              {getIcon()}
                            </div>
                          ) : product.id === "warehouse-management" ? (
                            <div className="w-full h-56 flex items-center justify-center overflow-visible">
                              {getIcon()}
                            </div>
                          ) : (
                            <div className={`w-full h-56 bg-gradient-to-br ${colors.iconBg} rounded-xl flex items-center justify-center shadow-inner`}>
                              <div className={`${colors.icon} opacity-50`}>
                                {getIcon()}
                              </div>
                            </div>
                          )}
                        </div>
                        {product.id !== "mystery-shopper" && (
                          <div className="md:col-span-1 flex flex-col justify-center gap-3">
                            {product.specifications.map((spec, idx) => (
                              <div
                                key={idx}
                                className={`rounded-lg p-2 text-center ${colors.bgAlt}`}
                              >
                                <p className={`text-xs ${colors.textLight} mb-0.5`}>{spec.label}</p>
                                <p className={`text-sm font-bold ${colors.text}`}>{spec.value}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                }
              };

              return (
                <Link
                  key={product.id}
                  href={product.detailUrl}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`bg-gradient-to-br ${product.bgColor} rounded-3xl overflow-hidden transition-all cursor-pointer hover:shadow-xl hover:scale-[1.02] shadow-md`}
                  >
                    {renderCard()}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a free consultation with our specialist
            </p>
            <Link
              href="https://form.jotform.com/243370651667461"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
