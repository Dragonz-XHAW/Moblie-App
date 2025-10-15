import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { Course, Colors } from '@/constants/Data';
import { useCart } from '@/contexts/CartContext';

interface CourseCardProps {
  course: Course;
  onPress?: () => void;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 2 cards per row with margins

export const CourseCard: React.FC<CourseCardProps> = ({ course, onPress }) => {
  const { isInCart, addToCart, removeFromCart } = useCart();
  const inCart = isInCart(course.id);

  const handleCartToggle = () => {
    if (inCart) {
      removeFromCart(course.id);
    } else {
      addToCart(course);
    }
  };

  const getCategoryColor = (category: string) => {
    return category === 'six-month' ? Colors.badgePurple : Colors.orange;
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        <Image 
          source={course.image} 
          style={styles.courseImage}
          resizeMode="cover"
        />
        <View style={[styles.badge, { backgroundColor: getCategoryColor(course.category) }]}>
          <Text style={styles.badgeText}>{course.name}</Text>
        </View>
        <View style={[styles.durationBadge, { backgroundColor: Colors.orange }]}>
          <Text style={styles.badgeText}>{course.duration}</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {course.name} - Professional Training
        </Text>
        
        <Text style={styles.instructor}>👤 {course.instructor}</Text>
        
        <View style={styles.rating}>
          <Text style={styles.stars}>★★★★★</Text>
          <Text style={styles.ratingText}>(1.2K)</Text>
        </View>
        
        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>R{course.price}</Text>
          {course.originalPrice && (
            <Text style={styles.originalPrice}>R{course.originalPrice}</Text>
          )}
        </View>
        
        <TouchableOpacity
          style={[styles.cartButton, inCart && styles.cartButtonAdded]}
          onPress={handleCartToggle}
        >
          <Text style={styles.cartButtonText}>
            {inCart ? 'Remove' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.07,
    shadowRadius: 20,
    elevation: 5,
  },
  imageContainer: {
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  courseImage: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 12,
    maxWidth: cardWidth - 60, // Leave space for duration badge
  },
  durationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 12,
  },
  badgeText: {
    color: Colors.white,
    fontSize: 9,
    fontWeight: '600',
  },
  content: {
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 8,
    minHeight: 36,
  },
  instructor: {
    color: Colors.textLight,
    fontSize: 12,
    marginBottom: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  stars: {
    color: Colors.yellow,
    fontSize: 12,
  },
  ratingText: {
    color: Colors.textLight,
    fontSize: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
    marginBottom: 12,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  originalPrice: {
    color: '#999',
    textDecorationLine: 'line-through',
    fontSize: 12,
  },
  cartButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: 'center',
  },
  cartButtonAdded: {
    backgroundColor: Colors.error,
  },
  cartButtonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
}); 