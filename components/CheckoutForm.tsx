"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-provider";
import { CheckoutInfo, AddressInfo, BillingInfo } from "@/types/checkout";
import { DeliveryAddressForm } from "./DeliveryAddressForm";
import { BillingAddressForm } from "./BillingAddressForm";
import { PaymentInfoForm } from "./PaymentInfoForm";

type CheckoutFormProps = {
  onSubmit: (data: CheckoutInfo) => void;
  showCardFields: boolean;
};

export function CheckoutForm({ onSubmit, showCardFields }: CheckoutFormProps) {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState<CheckoutInfo>({
    delivery: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
    billing: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      sameAsDelivery: true,
    },
    payment: {
      type: "card",
      cardInfo: showCardFields ? {
        cardHolder: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      } : undefined,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updateDeliveryAddress = (field: keyof AddressInfo, value: string) => {
    setFormData((prev) => ({
      ...prev,
      delivery: { ...prev.delivery, [field]: value },
    }));
  };

  const updateBillingAddress = (field: keyof AddressInfo, value: string) => {
    setFormData((prev) => ({
      ...prev,
      billing: { ...prev.billing, [field]: value },
    }));
  };

  const updateSameAsDelivery = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      billing: {
        ...(checked ? prev.delivery : prev.billing),
        sameAsDelivery: checked,
      },
    }));
  };

  const updatePaymentInfo = (field: keyof BillingInfo, value: string) => {
    setFormData((prev) => {
      const updatedCardInfo = prev.payment.cardInfo 
        ? { ...prev.payment.cardInfo, [field]: value }
        : { cardHolder: "", cardNumber: "", expiryDate: "", cvv: "", [field]: value };

      return {
        ...prev,
        payment: {
          ...prev.payment,
          cardInfo: updatedCardInfo,
        },
      };
    });
  };

  return (
    <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
      <DeliveryAddressForm
        data={formData.delivery}
        onChange={updateDeliveryAddress}
      />
      
      <BillingAddressForm
        data={formData.billing}
        deliveryData={formData.delivery}
        onChange={updateBillingAddress}
        onSameAsDeliveryChange={updateSameAsDelivery}
      />
      
      {showCardFields && (
        <PaymentInfoForm
          data={formData.payment.cardInfo}
          onChange={updatePaymentInfo}
        />
      )}
    </form>
  );
} 