"use client";
import { motion } from "framer-motion";

const operationCenters = [
  "Jabodetabek",
  "Bandung",
  "Jogyakarta",
  "Surabaya",
  "Semarang",
  "Medan",
];

const pointsOfService = [
  "Cirebon",
  "Sukabumi",
  "Cimahi",
  "Purwakarta",
  "Garut",
  "Sidoarjo",
  "Malang",
  "Kediri",
  "Gersik",
  "Blitar",
  "Lamongan",
  "Tuban",
  "Surakarta",
  "Mataram",
  "Denpasar",
];

export default function OperationCenters() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Operation Readiness</h2>
          <p className="text-lg text-gray-600">of Tokopandai</p>
        </motion.div>

        {/* Operation Centers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Operation Centers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {operationCenters.map((center) => (
              <div
                key={center}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <h4 className="font-semibold">{center}</h4>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Points of Service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Points of Service</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pointsOfService.map((point) => (
              <div
                key={point}
                className="bg-gray-50 p-4 rounded-xl text-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <h4 className="font-medium">{point}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

