"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCartStore } from '@/lib/store';
import { products } from '@/data/products.json';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/lib/language-provider';
import { ProductCardProps } from '@/types/product';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, clearCart } = useCartStore();
  const { t, language } = useLanguage();

  const cartTotal = items.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product?.price ?? 0) * item.quantity;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      router.push('/');
    }
  }, [items.length, router]);

  const handleCompleteOrder = () => {
    clearCart();
    toast.success(t('checkout.success'), {
      description: t('checkout.successDesc')
    });
    router.push('/');
  };

  if (items.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            {t('checkout.title')}
          </h1>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">
              {t('checkout.orderSummary')}
            </h2>
            <div className="mt-4 space-y-4">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id) as ProductCardProps;
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-sm"
                  >
                    <span>
                      {product?.name[language]} x {item.quantity}
                    </span>
                    <span>
                      ${((product?.price ?? 0) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                );
              })}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between font-semibold">
                  <span>{t('cart.total')}</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              {t('checkout.scanQR')}
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="relative h-64 w-64">
                <Image
                  src="https://images.unsplash.com/photo-1599697686548-d39f7c80174c?auto=format&fit=crop&q=80&w=300"
                  alt="Payment QR Code"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handleCompleteOrder}
            className="mt-8 w-full bg-[#47C7FC] hover:bg-[#47C7FC]/90"
          >
            <Check className="mr-2 h-4 w-4" />
            {t('checkout.complete')}
          </Button>
        </div>
      </div>
    </div>
  );
}