import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/Data';
import { useCart } from '@/contexts/CartContext';

export default function CartScreen() {
  const { state, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    if (state.items.length === 0) {
      Alert.alert('Empty Cart', 'Please add some courses to your cart first.');
      return;
    }

    Alert.alert(
      'Checkout',
      `Total: R${Math.round(state.finalTotal)}\n\nWould you like to proceed to contact us for enrollment?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Contact Us', 
          onPress: () => router.push('/(tabs)/contact')
        }
      ]
    );
  };

  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to remove all courses from your cart?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear', style: 'destructive', onPress: clearCart }
      ]
    );
  };

  const getDiscountText = (itemCount: number) => {
    if (itemCount >= 4) return '15% Bulk Discount';
    if (itemCount === 3) return '10% Bulk Discount';
    if (itemCount === 2) return '5% Bulk Discount';
    return '';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Course Cart</Text>
          {state.items.length > 0 && (
            <TouchableOpacity onPress={handleClearCart}>
              <Text style={styles.clearText}>Clear All</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Cart Content */}
        {state.items.length === 0 ? (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyIcon}>🛒</Text>
            <Text style={styles.emptyTitle}>Your cart is empty</Text>
            <Text style={styles.emptySubtitle}>
              Add some courses to get started with your learning journey
            </Text>
            <TouchableOpacity 
              style={styles.browseButton}
              onPress={() => router.push('/(tabs)/courses')}
            >
              <Text style={styles.browseButtonText}>Browse Courses</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {/* Cart Items */}
            <View style={styles.cartItems}>
              <Text style={styles.sectionTitle}>Selected Courses</Text>
              
              {state.items.map((course, index) => (
                <View key={course.id} style={styles.cartItem}>
                  <View style={styles.courseInfo}>
                    <Text style={styles.courseName}>{course.name}</Text>
                    <Text style={styles.courseInstructor}>👤 {course.instructor}</Text>
                    <Text style={styles.courseDuration}>⏰ {course.duration}</Text>
                  </View>
                  
                  <View style={styles.courseActions}>
                    <Text style={styles.coursePrice}>R{course.price}</Text>
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => removeFromCart(course.id)}
                    >
                      <Text style={styles.removeButtonText}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>

            {/* Pricing Summary */}
            <View style={styles.pricingSummary}>
              <Text style={styles.sectionTitle}>Order Summary</Text>
              
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>
                  Subtotal ({state.items.length} course{state.items.length !== 1 ? 's' : ''})
                </Text>
                <Text style={styles.summaryValue}>R{state.total}</Text>
              </View>
              
              {state.discount > 0 && (
                <View style={styles.discountRow}>
                  <View style={styles.discountInfo}>
                    <Text style={styles.discountLabel}>
                      {getDiscountText(state.items.length)}
                    </Text>
                    <Text style={styles.discountDescription}>
                      You save R{Math.round(state.discount)}!
                    </Text>
                  </View>
                  <Text style={styles.discountValue}>-R{Math.round(state.discount)}</Text>
                </View>
              )}
              
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>R{Math.round(state.finalTotal)}</Text>
              </View>
            </View>

            {/* Discount Info */}
            {state.items.length === 1 && (
              <View style={styles.discountInfo}>
                <Text style={styles.discountInfoTitle}>💡 Save More!</Text>
                <Text style={styles.discountInfoText}>
                  Add more courses to unlock bulk discounts:
                </Text>
                <View style={styles.discountTiers}>
                  <Text style={styles.discountTier}>• 2 courses: 5% off</Text>
                  <Text style={styles.discountTier}>• 3 courses: 10% off</Text>
                  <Text style={styles.discountTier}>• 4+ courses: 15% off</Text>
                </View>
              </View>
            )}

            {/* Checkout Button */}
            <View style={styles.checkoutSection}>
              <TouchableOpacity 
                style={styles.checkoutButton}
                onPress={handleCheckout}
              >
                <Text style={styles.checkoutButtonText}>
                  Proceed to Contact Us - R{Math.round(state.finalTotal)}
                </Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.continueButton}
                onPress={() => router.push('/(tabs)/courses')}
              >
                <Text style={styles.continueButtonText}>Continue Shopping</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {/* Additional Info */}
        <View style={styles.additionalInfo}>
          <Text style={styles.infoTitle}>Why Choose Multiple Courses?</Text>
          
          <View style={styles.infoCards}>
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>🎯</Text>
              <Text style={styles.infoCardTitle}>Comprehensive Skills</Text>
              <Text style={styles.infoCardText}>
                Build a well-rounded skillset across multiple areas
              </Text>
            </View>
            
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>💰</Text>
              <Text style={styles.infoCardTitle}>Better Value</Text>
              <Text style={styles.infoCardText}>
                Save up to 15% with our bulk discount pricing
              </Text>
            </View>
            
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>🚀</Text>
              <Text style={styles.infoCardTitle}>Career Growth</Text>
              <Text style={styles.infoCardText}>
                Multiple certifications enhance your employability
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e9eb',
  },
  logo: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textDark,
  },
  clearText: {
    fontSize: 14,
    color: Colors.error,
    fontWeight: '600',
  },
  emptyCart: {
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  browseButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  browseButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  cartItems: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 16,
  },
  cartItem: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  courseInfo: {
    flex: 1,
  },
  courseName: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 4,
  },
  courseInstructor: {
    fontSize: 13,
    color: Colors.textLight,
    marginBottom: 2,
  },
  courseDuration: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: '500',
  },
  courseActions: {
    alignItems: 'flex-end',
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 8,
  },
  removeButton: {
    backgroundColor: Colors.error,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  removeButtonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  pricingSummary: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: Colors.textLight,
  },
  summaryValue: {
    fontSize: 14,
    color: Colors.textDark,
    fontWeight: '500',
  },
  discountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 8,
    backgroundColor: '#e8f5e8',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  discountInfo: {
    flex: 1,
  },
  discountLabel: {
    fontSize: 14,
    color: Colors.success,
    fontWeight: '600',
  },
  discountDescription: {
    fontSize: 12,
    color: Colors.success,
  },
  discountValue: {
    fontSize: 14,
    color: Colors.success,
    fontWeight: '600',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e8e9eb',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textDark,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary,
  },
  discountInfo: {
    backgroundColor: Colors.white,
    margin: 20,
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
  },
  discountInfoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 8,
  },
  discountInfoText: {
    fontSize: 14,
    color: Colors.textLight,
    marginBottom: 12,
  },
  discountTiers: {
    gap: 4,
  },
  discountTier: {
    fontSize: 13,
    color: Colors.textLight,
  },
  checkoutSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  checkoutButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  checkoutButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  continueButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
  },
  continueButtonText: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  additionalInfo: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 20,
    textAlign: 'center',
  },
  infoCards: {
    gap: 16,
  },
  infoCard: {
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  infoIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  infoCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 4,
  },
  infoCardText: {
    fontSize: 13,
    color: Colors.textLight,
    textAlign: 'center',
  },
}); 