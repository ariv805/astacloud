"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Jasa Desain",
    price: "Rp 10.000 - 20.000",
    discount: 0,
    icon: "🎨",
    description:
      "Desain poster, presentasi, dan tugas kreatif dengan hasil profesional",
    image:
      "https://image2url.com/r2/default/images/1769765075102-c628cfa6-be97-4c16-9979-096f82882883.jpg",
    gradient: "from-indigo-500 to-purple-600",
    tags: ["Poster", "Presentasi", "Kreatif"],
  },
  {
    id: 2,
    name: "Jasa Edit Video",
    price: "Rp 20.000 - 50.000",
    discount: 0,
    icon: "🎬",
    description: "Editing video profesional untuk kebutuhan konten Anda",
    image:
      "https://image2url.com/r2/default/images/1769765458783-92d7cff8-ad1c-4b97-b365-bd5a7860acb3.jpg",
    gradient: "from-purple-500 to-pink-600",
    tags: ["Video", "Content", "Editing"],
  },
  {
    id: 3,
    name: "Pasang Tempered Glass",
    price: "Rp 5.000",
    discount: 0,
    icon: "📱",
    description: "Pemasangan tempered glass profesional dan rapi",
    image:
      "https://image2url.com/r2/default/images/1769765707384-639f04b4-922e-4467-8427-35b75911d7c3.jpg",
    gradient: "from-emerald-500 to-teal-600",
    tags: ["HP", "Screen", "Protector"],
  },
  {
    id: 4,
    name: "Jasa Reset HP",
    price: "Rp 20.000 - 40.000",
    discount: 0,
    icon: "🔄",
    description: "Reset HP dengan aman dan data terjaga",
    image:
      "https://image2url.com/r2/default/images/1769766077342-3f05c5ee-e8d5-46a5-b64e-af5cc5014d95.blob",
    gradient: "from-orange-500 to-red-600",
    tags: ["Reset", "Aman", "Data"],
  },
  {
    id: 5,
    name: "Jasa Service HP",
    price: "Rp 20.000 - 100.000",
    discount: 0,
    icon: "🔧",
    description:
      "Layar pecah, HP mati total, baterai boros, atau error software? Teknisi ahli, pengerjaan rapi, harga bersahabat, dan bergaransi.",
    image:
      "https://image2url.com/r2/default/images/1769775324380-f3025bc3-df75-41e1-8a50-382ed3978733.png",
    gradient: "from-cyan-500 to-blue-600",
    tags: ["Service", "Garansi", "Profesional"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function ServicesSection() {
  const orderService = (serviceName: string) => {
    const message = `Halo ASTA CLOUD, saya tertarik dengan layanan: ${serviceName}. Mohon informasikan detail lebih lanjut.`;
    const whatsappUrl = `https://wa.me/6285815185245?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Services grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="relative h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Floating icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className={`absolute top-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg text-2xl`}
                >
                  {service.icon}
                </motion.div>

                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {service.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4 p-3 rounded-2xl bg-muted/50">
                  <div>
                    <span className="text-xs text-muted-foreground">Mulai dari</span>
                    <p className="text-lg font-bold">{service.price}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* CTA */}
                <Button
                  onClick={() => orderService(service.name)}
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:opacity-90 rounded-2xl py-5`}
                >
                  Pesan via WhatsApp
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
