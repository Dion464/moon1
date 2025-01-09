"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Menu() {
  const menuCategories = [
    {
      title: "Pjatat Kryesore",
      image: "/IMG_2464.jpeg",
      description: "Specialitete të përgatitura me kujdes dhe përkushtim",
      subCategories: [
        {
          title: "Mishrat e Zgjedhura",
          description: "Përzgjedhje e mishrave premium të pjekura në mënyrë perfekte",
        },
        {
          title: "Hamburgerat Artizanalë",
          description: "Të përgatitur me mish të freskët dhe përbërës natyralë",
        },
        {
          title: "Specialitetet e Detit",
          description: "Pjata deti të freskëta të stinës",
        }
      ]
    },
    {
      title: "Mëngjesi & Brunch",
      image: "/IMG_2465.jpeg",
      description: "Filloni ditën tuaj me shijen e përsosur",
      subCategories: [
        {
          title: "Mëngjeset Klasike",
          description: "Zgjedhje tradicionale për një fillim energjik të ditës",
        },
        {
          title: "Brunch Special",
          description: "Kombinime unike për një përvojë të paharrueshme",
        },
        {
          title: "Të Shëndetshme",
          description: "Opsione të lehta dhe të shëndetshme",
        }
      ]
    },
    {
      title: "Sallata & Antipasta",
      image: "/IMG_2467.jpeg",
      description: "Freski dhe shije në çdo përbërës",
      subCategories: [
        {
          title: "Sallata Sezonale",
          description: "Të përgatitura me përbërës të freskët të stinës",
        },
        {
          title: "Antipasta Speciale",
          description: "Seleksionim i kujdesshëm antipastash tradicionale dhe moderne",
        }
      ]
    },
    {
      title: "Bari & Pijet",
      image: "/IMG_2467.jpeg",
      description: "Eksperiencë unike në çdo gotë",
      subCategories: [
        {
          title: "Koktejlet Signature",
          description: "Krijime unike nga mikserët tanë të talentuar",
        },
        {
          title: "Koleksioni i Verërave",
          description: "Përzgjedhje ekskluzive nga vreshtat më të mira",
        },
        {
          title: "Pijet Freskuese",
          description: "Limonada artizanale dhe pije të ftohta të stinës",
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <div className="pt-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Menu Header */}
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-extralight text-white mb-6 tracking-wider"
            >
              Menyja Jonë
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[1px] bg-[#D4AF37] mx-auto mb-8"
            />
            <p className="text-gray-300 text-xl font-light max-w-2xl mx-auto">
              Një udhëtim kulinari që kombinon traditën me inovacionin
            </p>
          </div>

          {/* Menu Categories */}
          <div className="space-y-32">
            {menuCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden mb-16">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-12">
                    <h2 className="text-5xl font-light text-white tracking-wider mb-4">
                      {category.title}
                    </h2>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: 100 }}
                      transition={{ duration: 0.8 }}
                      className="h-[1px] bg-[#D4AF37] mb-4"
                    />
                    <p className="text-gray-300 text-lg font-light">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Sub Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                  {category.subCategories.map((subCat, subIndex) => (
                    <motion.div
                      key={subIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: subIndex * 0.1 }}
                      className="backdrop-blur-lg bg-white/5 p-8 rounded-lg border border-[#D4AF37]/20
                               hover:border-[#D4AF37]/40 transition-all duration-300
                               group/item"
                    >
                      <h3 className="text-2xl font-light text-white mb-4 group-hover/item:text-[#D4AF37] transition-colors">
                        {subCat.title}
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed">
                        {subCat.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mt-32 mb-16"
          >
            <p className="text-gray-400 text-lg font-light italic">
              Të gjitha pjatat tona përgatiten me përbërës të freskët dhe sezonalë.
              <br />
              Për informacione rreth alergjive, ju lutem konsultohuni me stafin tonë.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
