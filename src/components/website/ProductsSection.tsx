"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Keyboard Mechanical",
    price: "Rp 60.000 - 120.000",
    discount: 0,
    image:
      "https://image2url.com/r2/default/images/1769590450832-267ca8d1-7113-49e2-88cf-fd9668ec4143.webp",
    description:
      "Keyboard mechanical dengan switch blue yang nyaman untuk gaming dan mengetik",
    rating: 4.8,
    category: "Gaming",
  },
  {
    id: 2,
    name: "Mouse",
    price: "Rp 25.000 - 50.000",
    discount: 0,
    image:
      "https://image2url.com/r2/default/images/1769590491825-e14373da-c1f9-4cec-989d-cc0a7575ba68.jpg",
    description:
      "Mouse gaming dengan DPI tinggi dan desain ergonomis",
    rating: 4.7,
    category: "Gaming",
  },
  {
    id: 3,
    name: "Mouse Pad",
    price: "Rp 10.000 - 25.000",
    discount: 0,
    image:
      "https://image2url.com/r2/default/images/1769590524899-6f8d84e5-2d9a-4e0c-ba41-cea7612929dd.jpg",
    description:
      "Mouse pad ekstra besar dengan permukaan halus untuk presisi maksimal",
    rating: 4.9,
    category: "Aksesoris",
  },
  {
    id: 4,
    name: "Headset",
    price: "Rp 50.000 - 100.000",
    discount: 0,
    image:
      "https://image2url.com/r2/default/images/1769590563753-cfc769c6-2cd8-425b-805b-98e44a8ed1f0.png",
    description:
      "Headset gaming dengan kualitas suara jernih dan microphone noise-cancelling",
    rating: 4.6,
    category: "Audio",
  },
  {
    id: 5,
    name: "Webcam HD",
    price: "Rp 80.000 - 150.000",
    discount: 0,
    image:
      "https://image2url.com/r2/default/images/1769590602521-c4f821d2-36f8-4147-98be-fb61ed011e17.jpg",
    description:
      "Webcam HD 1080p untuk video conference dan streaming",
    rating: 4.5,
    category: "Streaming",
  },
  {
    id: 6,
    name: "Temperglass",
    price: "Rp 10.000 - 15.000",
    discount: 0,
    image:
      "https://image2url.com/r2/default/images/1769696487732-ec9aa4d4-579b-42cf-b699-d633edee93e2.jpg",
    description:
      "Anti gores & benturan, jernih, sentuhan tetap halus.",
    rating: 4.9,
    category: "HP",
  },
  {
    id: 7,
    name: "Casing All HP",
    price: "Rp 15.000 - 30.000",
    discount: 0,
    image:
      "https://image2url.com/r2/default/images/1769698102908-a6e57c86-9399-4f31-8258-6989aa743f52.jpg",
    description: "Casing standar, kualitas nggak sembarangan.",
    rating: 4.7,
    category: "HP",
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

export default function ProductsSection() {
  const orderProduct = (productName: string) => {
    const message = `Halo ASTA CLOUD, saya ingin membeli: ${productName}. Mohon informasikan ketersediaan dan cara pemesanannya.`;
    const whatsappUrl = `https://wa.me/6285815185245?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Products grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="relative h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{product.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs text-muted-foreground">Harga</span>
                    <p className="text-lg font-bold gradient-text">{product.price}</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* CTA */}
                <Button
                  onClick={() => orderProduct(product.name)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl"
                >
                  Beli Sekarang
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
