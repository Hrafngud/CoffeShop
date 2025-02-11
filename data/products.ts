import { ProductCardProps } from '@/types/product';

export const products: ProductCardProps[] = [
  {
    id: "1",
    name: {
      en: "Ethiopian Yirgacheffe",
      pt: "Yirgacheffe Etíope"
    },
    category: "Single Origin",
    price: 24.99,
    description: {
      en: "A bright, complex coffee with floral notes and citrus undertones. Medium roast with exceptional clarity.",
      pt: "Um café brilhante e complexo com notas florais e tons cítricos. Torra média com clareza excepcional."
    },
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&q=80&w=800",
    roastLevel: "medium",
    weight: "12oz",
    country: {
      en: "Ethiopia",
      pt: "Etiópia"
    },
    inStock: true,
    stockAmount: 150,
    isNew: true,
    onPromotion: false
  },
  {
    id: "2",
    name: {
      en: "Espresso Blend",
      pt: "Blend para Espresso"
    },
    category: "Blend",
    price: 19.99,
    originalPrice: 24.99,
    description: {
      en: "Rich and full-bodied blend perfect for espresso. Notes of dark chocolate and caramel.",
      pt: "Blend encorpado e rico, perfeito para espresso. Notas de chocolate amargo e caramelo."
    },
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&q=80&w=800",
    roastLevel: "dark",
    weight: "12oz",
    country: {
      en: "Various",
      pt: "Diversos"
    },
    inStock: true,
    stockAmount: 200,
    isNew: false,
    onPromotion: true
  },
  {
    id: "3",
    name: {
      en: "Colombian Supremo",
      pt: "Supremo Colombiano"
    },
    category: "Single Origin",
    price: 22.99,
    description: {
      en: "Sweet and balanced with caramel sweetness and a nutty finish. Medium roast.",
      pt: "Doce e equilibrado com dulçor de caramelo e final amendoado. Torra média."
    },
    image: "https://images.unsplash.com/photo-1618576980905-8b704806a39b?auto=format&fit=crop&q=80&w=800",
    roastLevel: "medium",
    weight: "12oz",
    country: {
      en: "Colombia",
      pt: "Colômbia"
    },
    inStock: true,
    stockAmount: 75,
    isNew: false,
    onPromotion: false
  },
  {
    id: "4",
    name: {
      en: "Brazilian Santos",
      pt: "Santos Brasileiro"
    },
    category: "Blend",
    price: 18.99,
    description: {
      en: "Smooth and mild with subtle notes of chocolate and nuts. Light to medium roast.",
      pt: "Suave e delicado com notas sutis de chocolate e nozes. Torra clara a média."
    },
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?auto=format&fit=crop&q=80&w=800",
    roastLevel: "mediumDark",
    weight: "12oz",
    country: {
      en: "Various",
      pt: "Diversos"
    },
    inStock: true,
    stockAmount: 300,
    isNew: false,
    onPromotion: true
  }
]; 