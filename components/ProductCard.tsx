"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/lib/language-provider';
import { ProductCardProps } from '@/types/product';

export function ProductCard(props: ProductCardProps) {
  const { language, t } = useLanguage();
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(props.id);
    toast.success(t('product.addedToCart'), {
      description: t('product.addedToCartDesc', { name: props.name[language] }),
    });
  };

  return (
    <div className="group relative rounded-lg border bg-white p-4 shadow-sm">
      <Link href={`/product/${props.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={props.image}
            alt={props.name[language]}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {props.name[language]}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-gray-500">
            {props.description[language]}
          </p>
          <div className="mt-2 flex gap-2">
            {props.isNew && (
              <Badge variant="secondary">{t('product.new')}</Badge>
            )}
            {props.onPromotion && (
              <Badge variant="destructive">{t('product.sale')}</Badge>
            )}
          </div>
        </div>
      </Link>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">
          ${props.price.toFixed(2)}
        </span>
        <Button
          onClick={handleAddToCart}
          disabled={!props.inStock || props.stockAmount === 0}
          className="bg-[#FF8000] hover:bg-[#FF8000]/90"
        >
          <Plus className="mr-2 h-4 w-4" />
          {t('product.addToCart')}
        </Button>
      </div>
    </div>
  );
}