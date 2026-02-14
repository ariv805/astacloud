"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Rizki",
    rating: 5,
    image:
      "https://image2url.com/r2/default/images/1769698867694-69f9f4f4-813a-4d2f-9cc4-8ed8d5e52003.jpeg",
    company: "Pelanggan Setia",
    text: "Pelayanan sangat memuaskan, produk berkualitas dan harga terjangkau. Saya sangat merekomendasikan ASTA CLOUD untuk kebutuhan teknologi Anda.",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: 2,
    name: "Rama",
    rating: 5,
    image:
      "https://image2url.com/r2/default/images/1769699256504-ea0bd234-36ee-4d55-9d73-d656622e2292.jpg",
    company: "Pelanggan Jasa Desain",
    text: "Jasa desain yang sangat profesional dan hasilnya melebihi ekspektasi. Proses pengerjaan cepat dan komunikasi yang baik. Terima kasih ASTA CLOUD!",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: 3,
    name: "Zidan",
    rating: 4.5,
    image:
      "https://image2url.com/r2/default/images/1769699174123-0bd7916d-930b-41bc-8fa1-51afae63a972.jpeg",
    company: "Pelanggan Produk Aksesoris",
    text: "Keyboard mechanical yang saya beli sangat nyaman digunakan dan kualitasnya bagus. Harga juga lebih terjangkau dibanding toko lain. Recommended!",
    gradient: "from-orange-500 to-red-600",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        </motion.div>
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star className="w-4 h-4 text-yellow-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Testimonials carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="h-full"
                  >
                    <Card className="h-full border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm overflow-hidden">
                      {/* Gradient top border */}
                      <div className={`h-1 bg-gradient-to-r ${testimonial.gradient}`} />

                      <CardContent className="p-6 md:p-8">
                        {/* Quote icon */}
                        <div className="relative mb-4">
                          <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-20 blur-xl rounded-full`} />
                          <Quote className="relative w-10 h-10 text-primary/30" />
                        </div>

                        {/* Testimonial text */}
                        <p className="text-muted-foreground italic mb-6 leading-relaxed text-sm md:text-base">
                          &ldquo;{testimonial.text}&rdquo;
                        </p>

                        {/* Author info */}
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-full blur-md opacity-40`} />
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="relative w-14 h-14 rounded-full object-cover border-2 border-white/50"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.company}
                            </p>
                            <StarRating rating={testimonial.rating} />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-primary text-primary-foreground border-0 hover:bg-primary/90" />
            <CarouselNext className="hidden md:flex -right-4 bg-primary text-primary-foreground border-0 hover:bg-primary/90" />
          </Carousel>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12"
        >
          {[
            { value: "100+", label: "Pelanggan Puas" },
            { value: "50+", label: "Produk Terjual" },
            { value: "5+", label: "Layanan" },
            { value: "4.8", label: "Rating Rata-rata" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
