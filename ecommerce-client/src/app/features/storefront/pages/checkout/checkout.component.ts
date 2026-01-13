import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

// ============================================
// INTERFACES
// ============================================

interface Step {
  number: number;
  label: string;
}

interface DeliveryOption {
  id: string;
  name: string;
  estimate: string;
  price: number;
}

interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

interface ShippingAddress {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
}

// ============================================
// COMPONENT
// ============================================

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  // ============================================
  // PUBLIC PROPERTIES - Steps
  // ============================================

  steps: Step[] = [
    { number: 1, label: 'Shipping' },
    { number: 2, label: 'Payment' },
    { number: 3, label: 'Review' }
  ];

  // ============================================
  // PUBLIC SIGNALS - Checkout State
  // ============================================

  currentStep = signal(1);
  selectedDelivery = signal('standard');
  selectedPayment = signal('card');

  // ============================================
  // PUBLIC PROPERTIES - Form Data
  // ============================================

  shippingAddress: ShippingAddress = {
    fullName: '',
    phone: '',
    address: '',
    city: '',
    zipCode: ''
  };

  // ============================================
  // PUBLIC PROPERTIES - Options
  // ============================================

  deliveryOptions: DeliveryOption[] = [
    { id: 'standard', name: 'Standard Shipping', estimate: 'Est. Oct 12-15', price: 0 },
    { id: 'express', name: 'Express Shipping', estimate: 'Est. Oct 11', price: 9.99 }
  ];

  paymentMethods: PaymentMethod[] = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'apple', name: 'Apple Pay', icon: '🍎' },
    { id: 'paypal', name: 'PayPal', icon: '🅿️' }
  ];

  // ============================================
  // PUBLIC METHODS
  // ============================================

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

  getSelectedDelivery(): DeliveryOption | undefined {
    return this.deliveryOptions.find(o => o.id === this.selectedDelivery());
  }

  getSelectedPayment(): PaymentMethod | undefined {
    return this.paymentMethods.find(m => m.id === this.selectedPayment());
  }

  placeOrder(): void {
    console.log('Order placed!');
  }
}
