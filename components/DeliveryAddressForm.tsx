import { Input } from "@/components/ui/input";
import { AddressInfo } from "@/types/checkout";
import { useLanguage } from "@/lib/language-provider";

type DeliveryAddressFormProps = {
  data: AddressInfo;
  onChange: (field: keyof AddressInfo, value: string) => void;
};

export function DeliveryAddressForm({ data, onChange }: DeliveryAddressFormProps) {
  const { t } = useLanguage();

  return (
    <div>
      <h3 className="text-lg font-semibold">{t('checkout.deliveryAddress')}</h3>
      <div className="mt-4 grid gap-4">
        <Input
          placeholder={t('checkout.street')}
          value={data.street}
          onChange={(e) => onChange('street', e.target.value)}
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder={t('checkout.city')}
            value={data.city}
            onChange={(e) => onChange('city', e.target.value)}
            required
          />
          <Input
            placeholder={t('checkout.state')}
            value={data.state}
            onChange={(e) => onChange('state', e.target.value)}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder={t('checkout.zipCode')}
            value={data.zipCode}
            onChange={(e) => onChange('zipCode', e.target.value)}
            required
          />
          <Input
            placeholder={t('checkout.country')}
            value={data.country}
            onChange={(e) => onChange('country', e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
} 