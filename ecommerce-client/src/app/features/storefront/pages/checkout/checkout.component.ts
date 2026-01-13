import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="bg-gray-50 dark:bg-dark-bg min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <!-- Step Indicator -->
        <div class="flex items-center justify-center mb-12">
          @for (step of steps; track step.number; let i = $index) {
            <div class="flex items-center">
              <div class="flex flex-col items-center">
                <div 
                  class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors"
                  [class]="currentStep() >= step.number 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 dark:bg-dark-surface text-gray-500'"
                >
                  @if (currentStep() > step.number) {
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  } @else {
                    {{ step.number }}
                  }
                </div>
                <span class="text-xs font-medium mt-2" [class]="currentStep() >= step.number ? 'text-primary-600' : 'text-gray-500'">
                  {{ step.label }}
                </span>
              </div>
              @if (i < steps.length - 1) {
                <div 
                  class="w-24 h-0.5 mx-4"
                  [class]="currentStep() > step.number ? 'bg-primary-600' : 'bg-gray-200 dark:bg-dark-border'"
                ></div>
              }
            </div>
          }
        </div>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Form Section -->
          <div class="lg:col-span-2">
            @if (currentStep() === 1) {
              <!-- Shipping Step -->
              <div class="bg-white dark:bg-dark-card rounded-xl p-6 border border-gray-100 dark:border-dark-border">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Shipping Address</h2>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      [(ngModel)]="shippingAddress.fullName"
                      placeholder="John Doe"
                      class="input-field"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      [(ngModel)]="shippingAddress.phone"
                      placeholder="+1 (555) 000-0000"
                      class="input-field"
                    />
                  </div>
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                    <input 
                      type="text" 
                      [(ngModel)]="shippingAddress.address"
                      placeholder="123 Main Street"
                      class="input-field"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">City</label>
                    <input 
                      type="text" 
                      [(ngModel)]="shippingAddress.city"
                      placeholder="New York"
                      class="input-field"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">ZIP Code</label>
                    <input 
                      type="text" 
                      [(ngModel)]="shippingAddress.zipCode"
                      placeholder="10001"
                      class="input-field"
                    />
                  </div>
                </div>

                <h3 class="text-lg font-medium text-gray-900 dark:text-white mt-8 mb-4">Delivery Options</h3>
                <div class="space-y-3">
                  @for (option of deliveryOptions; track option.id) {
                    <label 
                      class="flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all"
                      [class]="selectedDelivery() === option.id 
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                        : 'border-gray-200 dark:border-dark-border hover:border-primary-300'"
                    >
                      <input 
                        type="radio" 
                        [value]="option.id"
                        [checked]="selectedDelivery() === option.id"
                        (change)="selectedDelivery.set(option.id)"
                        class="w-4 h-4 text-primary-600"
                      />
                      <div class="flex-1">
                        <span class="font-medium text-gray-900 dark:text-white">{{ option.name }}</span>
                        <p class="text-sm text-gray-500">{{ option.estimate }}</p>
                      </div>
                      <span class="font-semibold" [class]="option.price === 0 ? 'text-green-600' : 'text-gray-900 dark:text-white'">
                        {{ option.price === 0 ? 'Free' : '$' + option.price.toFixed(2) }}
                      </span>
                    </label>
                  }
                </div>
              </div>
            }

            @if (currentStep() === 2) {
              <!-- Payment Step -->
              <div class="bg-white dark:bg-dark-card rounded-xl p-6 border border-gray-100 dark:border-dark-border">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Payment Method</h2>
                
                <div class="space-y-3 mb-6">
                  @for (method of paymentMethods; track method.id) {
                    <label 
                      class="flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all"
                      [class]="selectedPayment() === method.id 
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                        : 'border-gray-200 dark:border-dark-border hover:border-primary-300'"
                    >
                      <input 
                        type="radio" 
                        [value]="method.id"
                        [checked]="selectedPayment() === method.id"
                        (change)="selectedPayment.set(method.id)"
                        class="w-4 h-4 text-primary-600"
                      />
                      <span class="text-2xl">{{ method.icon }}</span>
                      <span class="font-medium text-gray-900 dark:text-white">{{ method.name }}</span>
                    </label>
                  }
                </div>

                @if (selectedPayment() === 'card') {
                  <div class="space-y-4 pt-4 border-t border-gray-100 dark:border-dark-border">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Card Number</label>
                      <input type="text" placeholder="4242 4242 4242 4242" class="input-field" />
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" class="input-field" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CVC</label>
                        <input type="text" placeholder="123" class="input-field" />
                      </div>
                    </div>
                  </div>
                }
              </div>
            }

            @if (currentStep() === 3) {
              <!-- Review Step -->
              <div class="bg-white dark:bg-dark-card rounded-xl p-6 border border-gray-100 dark:border-dark-border">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Review Your Order</h2>
                
                <div class="space-y-6">
                  <div class="pb-4 border-b border-gray-100 dark:border-dark-border">
                    <h3 class="text-sm font-medium text-gray-500 mb-2">Shipping To</h3>
                    <p class="text-gray-900 dark:text-white">{{ shippingAddress.fullName }}</p>
                    <p class="text-gray-600 dark:text-gray-400">{{ shippingAddress.address }}, {{ shippingAddress.city }} {{ shippingAddress.zipCode }}</p>
                  </div>
                  
                  <div class="pb-4 border-b border-gray-100 dark:border-dark-border">
                    <h3 class="text-sm font-medium text-gray-500 mb-2">Delivery Method</h3>
                    <p class="text-gray-900 dark:text-white">{{ getSelectedDelivery()?.name }}</p>
                  </div>
                  
                  <div>
                    <h3 class="text-sm font-medium text-gray-500 mb-2">Payment Method</h3>
                    <p class="text-gray-900 dark:text-white">{{ getSelectedPayment()?.name }}</p>
                  </div>
                </div>
              </div>
            }

            <!-- Navigation Buttons -->
            <div class="flex items-center justify-between mt-6">
              @if (currentStep() > 1) {
                <button (click)="prevStep()" class="btn-secondary">
                  ← Back
                </button>
              } @else {
                <a routerLink="/store/cart" class="btn-secondary">
                  ← Back to Cart
                </a>
              }
              
              @if (currentStep() < 3) {
                <button (click)="nextStep()" class="btn-cta">
                  Continue
                </button>
              } @else {
                <button (click)="placeOrder()" class="btn-cta">
                  Place Order
                </button>
              }
            </div>
          </div>

          <!-- Order Summary -->
          <div class="lg:col-span-1">
            <div class="bg-white dark:bg-dark-card rounded-xl p-6 border border-gray-100 dark:border-dark-border sticky top-24">
              <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Order Summary</h2>
              
              <div class="space-y-4 pb-4 border-b border-gray-100 dark:border-dark-border">
                <div class="flex gap-3">
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop" class="w-16 h-16 rounded-lg object-cover" />
                  <div class="flex-1">
                    <p class="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">Aether Watch</p>
                    <p class="text-xs text-gray-500">Qty: 1</p>
                    <p class="text-sm font-semibold text-gray-900 dark:text-white">$299.00</p>
                  </div>
                </div>
              </div>
              
              <div class="space-y-3 py-4 border-b border-gray-100 dark:border-dark-border text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span class="text-gray-900 dark:text-white">$299.00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Shipping</span>
                  <span class="text-green-600">Free</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Tax</span>
                  <span class="text-gray-900 dark:text-white">$23.92</span>
                </div>
              </div>
              
              <div class="flex justify-between pt-4">
                <span class="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
                <span class="text-xl font-bold text-gray-900 dark:text-white">$322.92</span>
              </div>

              <!-- Payment Icons -->
              <div class="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-dark-border">
                <span class="text-2xl">💳</span>
                <span class="text-2xl">🍎</span>
                <span class="text-2xl">🅿️</span>
                <span class="text-2xl">🔒</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Spacer for mobile nav -->
      <div class="h-24 lg:hidden"></div>
    </div>
  `
})
export class CheckoutComponent {
  steps = [
    { number: 1, label: 'Shipping' },
    { number: 2, label: 'Payment' },
    { number: 3, label: 'Review' }
  ];

  currentStep = signal(1);
  selectedDelivery = signal('standard');
  selectedPayment = signal('card');

  shippingAddress = {
    fullName: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  };

  deliveryOptions = [
    { id: 'standard', name: 'Standard Shipping', estimate: 'Est. Oct 12-15', price: 0 },
    { id: 'express', name: 'Express Shipping', estimate: 'Est. Oct 11', price: 9.99 }
  ];

  paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'apple', name: 'Apple Pay', icon: '🍎' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️' }
  ];

  nextStep(): void {
    if (this.currentStep() < 3) {
      this.currentStep.update(s => s + 1);
    }
  }

  prevStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
    }
  }

  getSelectedDelivery() {
    return this.deliveryOptions.find(o => o.id === this.selectedDelivery());
  }

  getSelectedPayment() {
    return this.paymentMethods.find(m => m.id === this.selectedPayment());
  }

  placeOrder(): void {
    console.log('Order placed!');
  }
}
