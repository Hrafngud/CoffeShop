"use client";

import { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage } from '@/lib/language-provider';
import { ProductCardProps, roastLevels, RoastLevel } from '@/types/product';

const categories = Array.from(new Set(products.map((p) => p.category)));
const countries = Array.from(
  new Set(products.map((p) => typeof p.country === 'string' ? p.country : p.country.en))
);
const maxPrice = Math.max(...products.map((p) => p.price));

export default function Home() {
  const { t, language } = useLanguage();
  const [category, setCategory] = useState<string>('all');
  const [country, setCountry] = useState<string>('all');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPriceRange, setMaxPriceRange] = useState<number>(maxPrice);
  const [showInStockOnly, setShowInStockOnly] = useState<boolean>(false);
  const [showNewOnly, setShowNewOnly] = useState<boolean>(false);
  const [showPromotionsOnly, setShowPromotionsOnly] = useState<boolean>(false);
  const [roastLevel, setRoastLevel] = useState<RoastLevel | 'all'>('all');

  const filteredProducts = products.filter(
    (product) =>
      (category === 'all' || product.category === category) &&
      (country === 'all' || 
        (typeof product.country === 'string' 
          ? product.country === country 
          : product.country[language] === country)
      ) &&
      product.price >= minPrice &&
      product.price <= maxPriceRange &&
      (!showInStockOnly || (product.inStock && product.stockAmount > 0)) &&
      (!showNewOnly || product.isNew) &&
      (!showPromotionsOnly || product.onPromotion) &&
      (roastLevel === 'all' || product.roastLevel === roastLevel)
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-della font-bold text-gray-900">
        {t('home.title')}
      </h1>

      <div className="mb-8 grid gap-6 rounded-lg border bg-white p-6 shadow-sm md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t('home.filters.category')}
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder={t('home.filters.categoryAll')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('home.filters.categoryAll')}</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t('home.filters.country')}
          </label>
          <Select value={country} onValueChange={setCountry}>
            <SelectTrigger>
              <SelectValue placeholder={t('common.selectCountry')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('home.filters.countryAll')}</SelectItem>
              {countries.map((c) => (
                <SelectItem key={c} value={c}>
                  {typeof c === 'string' ? c : c[language]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t('home.filters.priceRange')}
          </label>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <Input
                type="number"
                value={minPrice.toFixed(2)}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-24"
                placeholder={t('common.min')}
              />
              <span>-</span>
              <Input
                type="number"
                value={maxPriceRange.toFixed(2)}
                onChange={(e) => setMaxPriceRange(Number(e.target.value))}
                className="w-24"
                placeholder={t('common.max')}
              />
            </div>
            <Slider
              value={[maxPriceRange]}
              onValueChange={(value) => setMaxPriceRange(value[0])}
              max={maxPrice}
              step={0.01}
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t('home.filters.additionalFilters')}
          </label>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={showInStockOnly}
              onCheckedChange={(checked) => setShowInStockOnly(checked as boolean)}
            />
            <label
              htmlFor="inStock"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t('home.filters.inStock')}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="new"
              checked={showNewOnly}
              onCheckedChange={(checked) => setShowNewOnly(checked as boolean)}
            />
            <label
              htmlFor="new"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t('home.filters.new')}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="promotion"
              checked={showPromotionsOnly}
              onCheckedChange={(checked) =>
                setShowPromotionsOnly(checked as boolean)
              }
            />
            <label
              htmlFor="promotion"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {t('home.filters.promotion')}
            </label>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t('home.filters.roastLevel')}
          </label>
          <Select value={roastLevel} onValueChange={(value) => setRoastLevel(value as RoastLevel | 'all')}>
            <SelectTrigger>
              <SelectValue placeholder={t('home.filters.roastLevelAll')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('home.filters.roastLevelAll')}</SelectItem>
              {roastLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {t(`product.roast.${level}` as const)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            {...product as unknown as ProductCardProps} 
          />
        ))}
      </div>
    </main>
  );
}