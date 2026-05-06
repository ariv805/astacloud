"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ExternalLink, Zap } from "lucide-react";

const domains = [
  {
    id: 1,
    name: "Domain .my.id",
    price: "Rp 15.000",
    originalPrice: "Rp 22.500",
    discount: 33.33,
    features: [
      "Gratis Access Cloudflare",
      "Masa aktif 1 Tahun penuh",
      "Bebas request nama domain",
      "Cocok untuk server game, website",
    ],
    image:
      "https://image2url.com/r2/default/images/1769766481835-f98582a2-f104-4b58-868a-022b8313e4ed.jpg",
    popular: true,
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: 2,
    name: "Domain .xyz",
    price: "Rp 50.000",
    originalPrice: "Rp 62.500",
    discount: 20,
    features: [
      "Gratis Access Cloudflare",
      "Masa aktif 1 Tahun penuh",
      "Bebas request nama domain",
      "Cocok untuk server game, website",
    ],
    image:
      "https://image2url.com/r2/default/images/1769775498406-a9cc174b-a105-492d-a178-689c75f9cc80.png",
    popular: false,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    name: "Domain .online",
    price: "Rp 50.000",
    originalPrice: "Rp 62.500",
    discount: 20,
    features: [
      "Gratis Access Cloudflare",
      "Masa aktif 1 Tahun penuh",
      "Bebas request nama domain",
      "Cocok untuk server game, website",
    ],
    image:
      "https://image2url.com/r2/default/images/1769775536618-639572bf-841a-4a4d-ae2b-85642f4a8245.png",
    popular: false,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    name: "Domain .store",
    price: "Rp 90.000",
    originalPrice: "",
    discount: 0,
    features: [
      "Gratis Access Cloudflare",
      "Masa aktif 1 Tahun penuh",
      "Bebas request nama domain",
      "Cocok untuk server game, website",
    ],
    image:
      "https://image2url.com/r2/default/images/1769775568635-97f393fc-bd70-4888-bb10-aa82387ccb5a.png",
    popular: false,
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 5,
    name: "Domain .cloud",
    price: "Rp 50.000",
    originalPrice: "Rp 62.500",
    discount: 20,
    features: [
      "Gratis Access Cloudflare",
      "Masa aktif 1 Tahun penuh",
      "Bebas request nama domain",
      "Cocok untuk server game, website",
    ],
    image:
      "https://image2url.com/r2/default/images/1769776014707-a6679755-8c07-4296-857c-547b03394365.png",
    popular: false,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: 6,
    name: "Domain .com",
    price: "Rp 180.000",
    originalPrice: "",
    discount: 0,
    features: [
      "Gratis Access Cloudflare",
      "Masa aktif 1 Tahun penuh",
      "Bebas request nama domain",
      "Cocok untuk server game, website",
    ],
    image:
      "https://image2url.com/r2/default/images/1769776160341-8542803d-be67-429c-baeb-47da74d4d29c.png",
    popular: false,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    id: 7,
    name: "Domain .id",
    price: "Rp 230.000",
    originalPrice: "",
    discount: 0,
    features: [
      "Gratis Access Cloudflare",
      "Masa aktif 1 Tahun penuh",
      "Bebas request nama domain",
      "Cocok untuk server game, website",
    ],
    image:
      "https://image2url.com/r2/default/images/1769776325153-fb1f2dc2-7838-43d7-a421-5a5ceab0c768.png",
    popular: false,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: 8,
    name: "Domain Lainnya",
    price: "Hubungi Kami",
    originalPrice: "",
    discount: 0,
    features: [
      "Gratis Access Cloudflare",
      "Masa aktif 1 Tahun penuh",
      "Bebas request nama domain",
      "Cocok untuk server game, website",
    ],
    image:
      "https://image2url.com/r2/default/images/1769776404862-abf0f906-17e5-46a9-b364-944b9a6dd30d.png",
    popular: false,
    gradient: "from-slate-500 to-gray-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function DomainSection() {
  const orderDomain = (domainName: string) => {
    const message = `Halo ASTA CLOUD, saya tertarik dengan paket: ${domainName}. Mohon informasikan detail lebih lanjut.`;
    const whatsappUrl = `https://wa.me/6285815185245?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Domain grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {domains.map((domain) => (
          <motion.div
            key={domain.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className={`relative h-full bg-card rounded-3xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-500 ${
              domain.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border/50'
            }`}>
              {/* Popular badge */}
              {domain.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-purple-500 text-white border-0">
                    <Zap className="w-3 h-3 mr-1" />
                    Terpopuler
                  </Badge>
                </div>
              )}

              {/* Discount badge */}
              {domain.discount > 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="destructive" className="font-bold">
                    -{Math.round(domain.discount)}%
                  </Badge>
                </div>
              )}

              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={domain.image}
                  alt={domain.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${domain.gradient} opacity-40`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold mb-3">
                  {domain.name}
                </h3>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {domain.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-4 p-3 rounded-2xl bg-muted/50">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground">/tahun</span>
                    {domain.discount > 0 && (
                      <span className="text-xs line-through text-muted-foreground">
                        {domain.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className={`text-xl font-bold ${domain.discount > 0 ? 'gradient-text' : ''}`}>
                    {domain.price}
                  </p>
                </div>

                {/* CTA */}
                <Button
                  onClick={() => orderDomain(domain.name)}
                  className={`w-full bg-gradient-to-r ${domain.gradient} text-white hover:opacity-90 rounded-2xl`}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Pesan Sekarang
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
