import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import { router } from 'expo-router';
import { CourseCard } from '../components/CourseCard';
import { coursesData, Colors } from '../constants/Data';
import { useCart } from '../contexts/CartContext';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const { state } = useCart();
  
  // Show top 6 courses (like the web version)
  const topCourses = coursesData.slice(0, 6);

  const renderCourseCard = ({ item, index }: { item: any; index: number }) => (
    <View style={[styles.cardContainer, index % 2 === 1 && styles.cardRightMargin]}>
      <CourseCard
        course={item}
        onPress={() => {
          // Course details functionality can be added later
        }}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image 
              source={require('@/assets/images/logo.png')} 
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.logo}>Empowering the Nation</Text>
          </View>
          {state.items.length > 0 && (
            <TouchableOpacity 
              style={styles.cartButton}
              onPress={() => router.push('/(tabs)/cart')}
            >
              <Text style={styles.cartIcon}>🛒</Text>
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{state.items.length}</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>

        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            Skills for Your{'\n'}Professional Growth
          </Text>
          <Text style={styles.heroSubtitle}>
            Transform your career with our comprehensive training programs. 
            Learn practical skills that make a difference.
          </Text>
          
          <View style={styles.heroStats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>7</Text>
              <Text style={styles.statLabel}>Courses</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>500+</Text>
              <Text style={styles.statLabel}>Students</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>95%</Text>
              <Text style={styles.statLabel}>Success Rate</Text>
            </View>
          </View>
        </View>

        {/* Course Categories */}
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Course Categories</Text>
          
          <View style={styles.categoryButtons}>
            <TouchableOpacity 
              style={styles.categoryButton}
              onPress={() => router.push('/(tabs)/six-month')}
            >
              <Text style={styles.categoryButtonText}>6-Month Courses</Text>
              <Text style={styles.categorySubtext}>R1,500 each</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.categoryButton}
              onPress={() => router.push('/(tabs)/six-week')}
            >
              <Text style={styles.categoryButtonText}>6-Week Courses</Text>
              <Text style={styles.categorySubtext}>R750 each</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Featured Courses */}
        <View style={styles.coursesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Courses</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/courses')}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={topCourses}
            renderItem={renderCourseCard}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={styles.coursesGrid}
            columnWrapperStyle={styles.courseRow}
          />
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Start Learning?</Text>
          <Text style={styles.ctaSubtitle}>
            Join thousands of students who have transformed their careers
          </Text>
          <TouchableOpacity 
            style={styles.ctaButton}
            onPress={() => router.push('/(tabs)/courses')}
          >
            <Text style={styles.ctaButtonText}>Browse All Courses</Text>
          </TouchableOpacity>
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
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoImage: {
    width: 40,
    height: 40,
  },
  logo: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.textDark,
    maxWidth: 150,
  },
  cartButton: {
    position: 'relative',
  },
  cartIcon: {
    fontSize: 24,
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: Colors.error,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  hero: {
    backgroundColor: Colors.darkBg,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 32,
    lineHeight: 24,
  },
  heroStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.8,
  },
  categoriesSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 20,
  },
  categoryButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  categoryButton: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 4,
  },
  categorySubtext: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  coursesSection: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  viewAllText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600',
  },
  coursesGrid: {
    paddingBottom: 16,
  },
  courseRow: {
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    marginRight: 8,
  },
  cardRightMargin: {
    marginRight: 0,
    marginLeft: 8,
  },
  ctaSection: {
    backgroundColor: Colors.darkBlueBg,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
    marginTop: 20,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 12,
  },
  ctaSubtitle: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 24,
  },
  ctaButton: {
    backgroundColor: Colors.ctaBlueBtn,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
