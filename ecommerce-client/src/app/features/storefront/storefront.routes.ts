import { Routes } from '@angular/router';

export const storefrontRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/storefront-layout/storefront-layout.component')
            .then(m => m.StorefrontLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/home/home.component')
                    .then(m => m.HomeComponent),
                title: 'Home | LUXE Store'
            },
            {
                path: 'category/:slug',
                loadComponent: () => import('./pages/category/category.component')
                    .then(m => m.CategoryComponent),
                title: 'Category | LUXE Store'
            },
            {
                path: 'product/:slug',
                loadComponent: () => import('./pages/product-detail/product-detail.component')
                    .then(m => m.ProductDetailComponent),
                title: 'Product | LUXE Store'
            },
            {
                path: 'cart',
                loadComponent: () => import('./pages/cart/cart.component')
                    .then(m => m.CartComponent),
                title: 'Cart | LUXE Store'
            },
            {
                path: 'checkout',
                loadComponent: () => import('./pages/checkout/checkout.component')
                    .then(m => m.CheckoutComponent),
                title: 'Checkout | LUXE Store'
            },
            {
                path: 'wishlist',
                loadComponent: () => import('./pages/wishlist/wishlist.component')
                    .then(m => m.WishlistComponent),
                title: 'Wishlist | LUXE Store'
            },
            {
                path: 'search',
                loadComponent: () => import('./pages/search-results/search-results.component')
                    .then(m => m.SearchResultsComponent),
                title: 'Search | LUXE Store'
            },
            {
                path: 'account',
                loadComponent: () => import('./pages/account/account.component')
                    .then(m => m.AccountComponent),
                title: 'My Account | LUXE Store'
            },
            {
                path: 'brands',
                loadComponent: () => import('./pages/brands/brands.component')
                    .then(m => m.BrandsComponent),
                title: 'Brands | LUXE Store'
            },
            {
                path: 'brand/:slug',
                loadComponent: () => import('./pages/brand-detail/brand-detail.component')
                    .then(m => m.BrandDetailComponent),
                title: 'Brand | LUXE Store'
            },
            {
                path: 'new-arrivals',
                loadComponent: () => import('./pages/new-arrivals/new-arrivals.component')
                    .then(m => m.NewArrivalsComponent),
                title: 'New Arrivals | LUXE Store'
            }
        ]
    }
];
