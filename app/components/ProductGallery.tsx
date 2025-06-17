// app/components/ProductGallery.js
"use client";
import { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
}
  

const products = [
  {
    id: 1,
    name: "Lámpara Geométrica",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    category: "Lámparas",
    description:
      "Una lámpara moderna con diseño geométrico único que aporta elegancia y calidez a cualquier espacio. Fabricada con materiales de alta calidad mediante impresión 3D de precisión.",
  },
  {
    id: 2,
    name: "Porta Lápices Hexagonal",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop",
    category: "Organización",
    description:
      "Organizador hexagonal perfecto para mantener tu escritorio ordenado. Su diseño minimalista y funcional se adapta a cualquier ambiente de trabajo o estudio.",
  },
  {
    id: 3,
    name: "Lámpara Luna",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "Lámparas",
    description:
      "Lámpara con forma de luna que crea una atmósfera mágica y relajante. Ideal para dormitorios, salas de estar o como luz nocturna con un toque artístico único.",
  },
  {
    id: 4,
    name: "Soporte Móvil",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop",
    category: "Accesorios",
    description:
      "Soporte ergonómico para dispositivos móviles con diseño moderno. Perfecto para videollamadas, ver contenido o mantener tu teléfono siempre visible y accesible.",
  },
  {
    id: 5,
    name: "Maceta Moderna",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop",
    category: "Decoración",
    description:
      "Maceta con diseño contemporáneo que realza la belleza de tus plantas. Su estilo minimalista se integra perfectamente en cualquier decoración moderna.",
  },
  {
    id: 6,
    name: "Lámpara Cristal",
    image:
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
    category: "Lámparas",
    description:
      "Lámpara con efecto cristal que proyecta hermosos patrones de luz. Crea un ambiente sofisticado y acogedor, ideal para cenas románticas o momentos especiales.",
  },
];

export default function ProductGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const categories = [
    "Todos",
    "Lámparas",
    "Organización",
    "Accesorios",
    "Decoración",
  ];

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

      const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
      };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Nuestros Productos
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
              Explora nuestra colección de productos únicos impresos en 3D
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer  px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-secondary text-white shadow-lg"
                      : "bg-accent text-secondary hover:bg-secondary hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {product.name}
                  </h3>
                  <button
                    onClick={() => handleProductClick(product)}
                    className="cursor-pointer w-full bg-primary hover:bg-secondary text-seconadry hover:text-white py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
