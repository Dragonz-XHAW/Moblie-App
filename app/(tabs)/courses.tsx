import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CourseCard } from '../../src/components/CourseCard';
import { Colors, Course, coursesData } from '../../src/constants/Data';
import { useCart } from '../../src/contexts/CartContext';

export default function CoursesScreen() {
  const { state } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'six-month' | 'six-week'>('all');

  const filteredCourses = selectedCategory === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

  const renderCourseCard = ({ item, index }: { item: Course; index: number }) => (
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
          <Text style={styles.logo}>All Courses</Text>
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

        {/* Course Header */}
        <View style={styles.courseHeader}>
          <Text style={styles.courseTitle}>Professional Training Courses</Text>
          <Text style={styles.courseSubtitle}>
            Develop practical skills for your career advancement
          </Text>
        </View>

        {/* Category Filter */}
        <View style={styles.filterSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
            <TouchableOpacity
              style={[styles.filterButton, selectedCategory === 'all' && styles.filterButtonActive]}
              onPress={() => setSelectedCategory('all')}
            >
              <Text style={[styles.filterText, selectedCategory === 'all' && styles.filterTextActive]}>
                All Courses
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.filterButton, selectedCategory === 'six-month' && styles.filterButtonActive]}
              onPress={() => setSelectedCategory('six-month')}
            >
              <Text style={[styles.filterText, selectedCategory === 'six-month' && styles.filterTextActive]}>
                6-Month Courses
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.filterButton, selectedCategory === 'six-week' && styles.filterButtonActive]}
              onPress={() => setSelectedCategory('six-week')}
            >
              <Text style={[styles.filterText, selectedCategory === 'six-week' && styles.filterTextActive]}>
                6-Week Courses
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Courses Grid */}
        <View style={styles.coursesSection}>
          <Text style={styles.resultsText}>
            {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} available
          </Text>
          
          <FlatList
            data={filteredCourses}
            renderItem={renderCourseCard}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={styles.coursesGrid}
            columnWrapperStyle={filteredCourses.length > 1 ? styles.courseRow : null}
          />
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Why Choose Our Courses?</Text>
          
          <View style={styles.infoCards}>
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>🎓</Text>
              <Text style={styles.infoCardTitle}>Expert Instructors</Text>
              <Text style={styles.infoCardText}>Learn from industry professionals with years of experience</Text>
            </View>
            
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>📋</Text>
              <Text style={styles.infoCardTitle}>Practical Skills</Text>
              <Text style={styles.infoCardText}>Hands-on training that you can apply immediately</Text>
            </View>
            
            <View style={styles.infoCard}>
              <Text style={styles.infoIcon}>💰</Text>
              <Text style={styles.infoCardTitle}>Bulk Discounts</Text>
              <Text style={styles.infoCardText}>Save up to 15% when you enroll in multiple courses</Text>
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
  courseHeader: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e9eb',
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 8,
    textAlign: 'center',
  },
  courseSubtitle: {
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
  },
  filterSection: {
    paddingVertical: 20,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e9eb',
  },
  filterContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.textLight,
  },
  filterButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textLight,
  },
  filterTextActive: {
    color: Colors.white,
  },
  coursesSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  resultsText: {
    fontSize: 14,
    color: Colors.textLight,
    marginBottom: 20,
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
  infoSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 24,
    textAlign: 'center',
  },
  infoCards: {
    gap: 16,
  },
  infoCard: {
    backgroundColor: Colors.background,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  infoIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 8,
  },
  infoCardText: {
    fontSize: 14,
    color: Colors.textLight,
    textAlign: 'center',
    lineHeight: 20,
  },
}); 