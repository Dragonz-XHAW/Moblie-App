import { router } from 'expo-router';
import React from 'react';
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

export default function SixWeekScreen() {
  const { state } = useCart();
  
  const sixWeekCourses = coursesData.filter(course => course.category === 'six-week');

  const renderCourseCard = ({ item, index }: { item: Course; index: number }) => (
    <View style={[styles.cardContainer, index % 2 === 1 && styles.cardRightMargin]}>
      <CourseCard
        course={item}
        onPress={() => {
        }}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>6-Week Courses</Text>
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
          <Text style={styles.courseTitle}>Six-Week Intensive Courses</Text>
          <Text style={styles.courseSubtitle}>
            Fast-track your skills with focused, intensive training programs
          </Text>
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>R750 per course</Text>
          </View>
        </View>

        {/* Course Benefits */}
        <View style={styles.benefitsSection}>
          <Text style={styles.benefitsTitle}>Perfect For:</Text>
          <View style={styles.benefitsList}>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>⚡</Text>
              <Text style={styles.benefitText}>Quick skill acquisition</Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>💼</Text>
              <Text style={styles.benefitText}>Career enhancement</Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>🎯</Text>
              <Text style={styles.benefitText}>Focused learning objectives</Text>
            </View>
            <View style={styles.benefitItem}>
              <Text style={styles.benefitIcon}>⏰</Text>
              <Text style={styles.benefitText}>Flexible scheduling</Text>
            </View>
          </View>
        </View>

        {/* Courses Grid */}
        <View style={styles.coursesSection}>
          <Text style={styles.sectionTitle}>Available Courses</Text>
          
          <FlatList
            data={sixWeekCourses}
            renderItem={renderCourseCard}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={styles.coursesGrid}
            columnWrapperStyle={sixWeekCourses.length > 1 ? styles.courseRow : null}
          />
        </View>

        {/* Course Details */}
        <View style={styles.detailsSection}>
          <Text style={styles.detailsTitle}>Course Details</Text>
          
          {sixWeekCourses.map((course, index) => (
            <View key={course.id} style={styles.detailCard}>
              <Text style={styles.detailCardTitle}>{course.name}</Text>
              <Text style={styles.detailCardDescription}>{course.description}</Text>
              
              <View style={styles.contentList}>
                <Text style={styles.contentTitle}>What You'll Learn:</Text>
                {course.content.map((item, itemIndex) => (
                  <Text key={itemIndex} style={styles.contentItem}>• {item}</Text>
                ))}
              </View>
              
              <View style={styles.detailFooter}>
                <Text style={styles.detailInstructor}>Instructor: {course.instructor}</Text>
                <Text style={styles.detailDuration}>Duration: {course.duration}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Comparison Section */}
        <View style={styles.comparisonSection}>
          <Text style={styles.comparisonTitle}>Why Choose 6-Week Courses?</Text>
          
          <View style={styles.comparisonCards}>
            <View style={styles.comparisonCard}>
              <Text style={styles.comparisonIcon}>🚀</Text>
              <Text style={styles.comparisonCardTitle}>Quick Results</Text>
              <Text style={styles.comparisonCardText}>
                Start applying your new skills in just 6 weeks
              </Text>
            </View>
            
            <View style={styles.comparisonCard}>
              <Text style={styles.comparisonIcon}>💰</Text>
              <Text style={styles.comparisonCardTitle}>Affordable</Text>
              <Text style={styles.comparisonCardText}>
                Lower cost investment with immediate returns
              </Text>
            </View>
            
            <View style={styles.comparisonCard}>
              <Text style={styles.comparisonIcon}>📈</Text>
              <Text style={styles.comparisonCardTitle}>Career Boost</Text>
              <Text style={styles.comparisonCardText}>
                Perfect for adding complementary skills
              </Text>
            </View>
          </View>
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Start Learning Today!</Text>
          <Text style={styles.ctaSubtitle}>
            Transform your skills in just 6 weeks with our intensive programs
          </Text>
          <TouchableOpacity 
            style={styles.ctaButton}
            onPress={() => router.push('/(tabs)/contact')}
          >
            <Text style={styles.ctaButtonText}>Get Started</Text>
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
    marginBottom: 16,
  },
  priceTag: {
    backgroundColor: Colors.orange,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  priceText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  benefitsSection: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginTop: 8,
  },
  benefitsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 16,
  },
  benefitsList: {
    gap: 12,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  benefitIcon: {
    fontSize: 20,
  },
  benefitText: {
    fontSize: 14,
    color: Colors.textLight,
    flex: 1,
  },
  coursesSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textDark,
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
  detailsSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: Colors.white,
    marginTop: 8,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 20,
  },
  detailCard: {
    backgroundColor: Colors.background,
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  detailCardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 8,
  },
  detailCardDescription: {
    fontSize: 14,
    color: Colors.textLight,
    marginBottom: 16,
    lineHeight: 20,
  },
  contentList: {
    marginBottom: 16,
  },
  contentTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 8,
  },
  contentItem: {
    fontSize: 13,
    color: Colors.textLight,
    marginBottom: 4,
    paddingLeft: 8,
  },
  detailFooter: {
    borderTopWidth: 1,
    borderTopColor: '#e8e9eb',
    paddingTop: 12,
    gap: 4,
  },
  detailInstructor: {
    fontSize: 13,
    color: Colors.textLight,
  },
  detailDuration: {
    fontSize: 13,
    color: Colors.orange,
    fontWeight: '500',
  },
  comparisonSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: Colors.white,
    marginTop: 8,
  },
  comparisonTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 24,
    textAlign: 'center',
  },
  comparisonCards: {
    gap: 16,
  },
  comparisonCard: {
    backgroundColor: Colors.background,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  comparisonIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  comparisonCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 8,
  },
  comparisonCardText: {
    fontSize: 14,
    color: Colors.textLight,
    textAlign: 'center',
    lineHeight: 20,
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