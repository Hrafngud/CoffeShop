export type TranslationKey =
  | 'header.title'
  | 'header.cart'
  | 'home.title'
  | 'home.filters.category'
  | 'home.filters.categoryAll'
  | 'home.filters.country'
  | 'home.filters.countryAll'
  | 'home.filters.priceRange'
  | 'home.filters.additionalFilters'
  | 'home.filters.inStock'
  | 'home.filters.new'
  | 'home.filters.promotion'
  | 'product.addToCart'
  | 'product.back'
  | 'product.category'
  | 'product.roastLevel'
  | 'product.weight'
  | 'product.outOfStock'
  | 'product.new'
  | 'product.sale'
  | 'product.addedToCart'
  | 'product.addedToCartDesc'
  | 'product.weight.unit'
  | 'product.price'
  | 'product.stockAmount'
  | 'cart.title'
  | 'cart.empty'
  | 'cart.emptyDesc'
  | 'cart.continueShopping'
  | 'cart.summary'
  | 'cart.total'
  | 'cart.checkout'
  | 'checkout.title'
  | 'checkout.orderSummary'
  | 'checkout.scanQR'
  | 'checkout.complete'
  | 'checkout.success'
  | 'checkout.successDesc'
  | 'common.previous'
  | 'common.next'
  | 'common.morePages'
  | 'common.selectCountry'
  | 'common.min'
  | 'common.max'
  | 'common.loading'
  | 'common.error'
  | 'common.success'
  | 'product.roast.light'
  | 'product.roast.medium'
  | 'product.roast.mediumDark'
  | 'product.roast.dark'
  | 'home.filters.roastLevel'
  | 'home.filters.roastLevelAll'
  | 'product.details.origin'
  | 'product.details.roastLevel'
  | 'product.details.weight'
  | 'product.details.category'
  | 'product.details.stock'
  | 'product.details.inStock'
  | 'product.details.outOfStock';

type TranslationsType = {
  [lang in 'en' | 'pt']: {
    [key in TranslationKey]: string;
  };
};

export const translations: TranslationsType = {
  en: {
    // Header
    'header.title': 'Gourmet Coffee',
    'header.cart': 'Cart',

    // Home Page
    'home.title': 'Gourmet Coffee Selection',
    'home.filters.category': 'Category',
    'home.filters.categoryAll': 'Todas as Categorias',
    'home.filters.country': 'Country of Origin',
    'home.filters.countryAll': 'All Countries',
    'home.filters.priceRange': 'Price Range',
    'home.filters.additionalFilters': 'Additional Filters',
    'home.filters.inStock': 'In Stock Only',
    'home.filters.new': 'New Arrivals',
    'home.filters.promotion': 'On Promotion',
    'home.filters.roastLevel': 'Roast Level',
    'home.filters.roastLevelAll': 'All Roast Levels',

    // Product Details
    'product.addToCart': 'Add to Cart',
    'product.back': 'Back',
    'product.category': 'Category',
    'product.roastLevel': 'Roast Level',
    'product.weight': 'Weight',
    'product.outOfStock': 'Out of Stock',
    'product.new': 'New',
    'product.sale': 'Sale',
    'product.addedToCart': 'Added to cart!',
    'product.addedToCartDesc': '{name} has been added to your cart.',
    'product.weight.unit': 'oz',
    'product.price': '${price}',
    'product.stockAmount': '{amount} in stock',
    'product.roast.light': 'Light',
    'product.roast.medium': 'Medium',
    'product.roast.mediumDark': 'Medium-Dark',
    'product.roast.dark': 'Dark',
    'product.details.origin': 'Origin',
    'product.details.roastLevel': 'Roast Level',
    'product.details.weight': 'Weight',
    'product.details.category': 'Category',
    'product.details.stock': 'Stock',
    'product.details.inStock': 'In Stock',
    'product.details.outOfStock': 'Out of Stock',

    // Cart
    'cart.title': 'Shopping Cart',
    'cart.empty': 'Your cart is empty',
    'cart.emptyDesc': 'Add some delicious coffee to your cart!',
    'cart.continueShopping': 'Continue Shopping',
    'cart.summary': 'Order Summary',
    'cart.total': 'Total',
    'cart.checkout': 'Proceed to Checkout',

    // Checkout
    'checkout.title': 'Checkout',
    'checkout.orderSummary': 'Order Summary',
    'checkout.scanQR': 'Scan QR Code to Pay',
    'checkout.complete': 'Complete Order',
    'checkout.success': 'Order completed!',
    'checkout.successDesc': 'Thank you for your purchase.',

    // Common
    'common.previous': 'Previous',
    'common.next': 'Next',
    'common.morePages': 'More pages',
    'common.selectCountry': 'Select country',
    'common.min': 'Min',
    'common.max': 'Max',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
  },
  pt: {
    // Header
    'header.title': 'Café Gourmet',
    'header.cart': 'Carrinho',

    // Home Page
    'home.title': 'Seleção de Café Gourmet',
    'home.filters.category': 'Categoria',
    'home.filters.categoryAll': 'Todas as Categorias',
    'home.filters.country': 'País de Origem',
    'home.filters.countryAll': 'Todos os Países',
    'home.filters.priceRange': 'Faixa de Preço',
    'home.filters.additionalFilters': 'Filtros Adicionais',
    'home.filters.inStock': 'Apenas em Estoque',
    'home.filters.new': 'Novidades',
    'home.filters.promotion': 'Em Promoção',
    'home.filters.roastLevel': 'Nível de Torra',
    'home.filters.roastLevelAll': 'Todos os Níveis',

    // Product Details
    'product.addToCart': 'Adc. ao Carrinho',
    'product.back': 'Voltar',
    'product.category': 'Categoria',
    'product.roastLevel': 'Nível de Torra',
    'product.weight': 'Peso',
    'product.outOfStock': 'Fora de Estoque',
    'product.new': 'Novo',
    'product.sale': 'Promoção',
    'product.addedToCart': 'Adicionado ao carrinho!',
    'product.addedToCartDesc': '{name} foi adicionado ao seu carrinho.',
    'product.weight.unit': 'oz',
    'product.price': '${price}',
    'product.stockAmount': '{amount} em estoque',
    'product.roast.light': 'Clara',
    'product.roast.medium': 'Média',
    'product.roast.mediumDark': 'Média-Escura',
    'product.roast.dark': 'Escura',
    'product.details.origin': 'Origem',
    'product.details.roastLevel': 'Nível de Torra',
    'product.details.weight': 'Peso',
    'product.details.category': 'Categoria',
    'product.details.stock': 'Estoque',
    'product.details.inStock': 'Em Estoque',
    'product.details.outOfStock': 'Fora de Estoque',

    // Cart
    'cart.title': 'Carrinho de Compras',
    'cart.empty': 'Seu carrinho está vazio',
    'cart.emptyDesc': 'Adicione alguns cafés deliciosos ao seu carrinho!',
    'cart.continueShopping': 'Continuar Comprando',
    'cart.summary': 'Resumo do Pedido',
    'cart.total': 'Total',
    'cart.checkout': 'Finalizar Compra',

    // Checkout
    'checkout.title': 'Finalizar Pedido',
    'checkout.orderSummary': 'Resumo do Pedido',
    'checkout.scanQR': 'Escaneie o QR Code para Pagar',
    'checkout.complete': 'Completar Pedido',
    'checkout.success': 'Pedido concluído!',
    'checkout.successDesc': 'Obrigado pela sua compra.',

    // Common
    'common.previous': 'Anterior',
    'common.next': 'Próximo',
    'common.morePages': 'Mais páginas',
    'common.selectCountry': 'Selecionar país',
    'common.min': 'Mín',
    'common.max': 'Máx',
    'common.loading': 'Carregando...',
    'common.error': 'Erro',
    'common.success': 'Sucesso',
  }
}; 