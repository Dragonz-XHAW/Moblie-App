import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Data';

/**
 * Centralised styles for the mobile app
 * Following the structure outlined in plan.md
 */

// Common layout styles
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
});

// Header styles
export const headerStyles = StyleSheet.create({
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
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.textDark,
  },
});

// Cart styles
export const cartStyles = StyleSheet.create({
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
});

// Hero section styles
export const heroStyles = StyleSheet.create({
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
});

// Section styles
export const sectionStyles = StyleSheet.create({
  section: {
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
  },
});

// Button styles
export const buttonStyles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  secondaryButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
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
});

// Filter styles
export const filterStyles = StyleSheet.create({
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
});

// Card styles
export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardContainer: {
    flex: 1,
    marginRight: 8,
  },
  cardRightMargin: {
    marginRight: 0,
    marginLeft: 8,
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

// Text styles
export const textStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textLight,
    textAlign: 'center',
  },
  body: {
    fontSize: 14,
    color: Colors.textDark,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    color: Colors.textLight,
  },
  error: {
    fontSize: 14,
    color: Colors.error,
  },
  success: {
    fontSize: 14,
    color: Colors.success,
  },
  viewAllText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600',
  },
  resultsText: {
    fontSize: 14,
    color: Colors.textLight,
    marginBottom: 20,
  },
});

// Grid styles
export const gridStyles = StyleSheet.create({
  coursesGrid: {
    paddingBottom: 16,
  },
  courseRow: {
    justifyContent: 'space-between',
  },
  categoryButtons: {
    flexDirection: 'row',
    gap: 16,
  },
});

// CTA section styles
export const ctaStyles = StyleSheet.create({
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
});

// Info section styles
export const infoStyles = StyleSheet.create({
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
});

// Course header styles
export const courseHeaderStyles = StyleSheet.create({
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
});

// Courses section styles
export const coursesSectionStyles = StyleSheet.create({
  coursesSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
});

// Export all styles as a single object for easy importing
export const appStyles = {
  common: commonStyles,
  header: headerStyles,
  cart: cartStyles,
  hero: heroStyles,
  section: sectionStyles,
  button: buttonStyles,
  filter: filterStyles,
  card: cardStyles,
  text: textStyles,
  grid: gridStyles,
  cta: ctaStyles,
  info: infoStyles,
  courseHeader: courseHeaderStyles,
  coursesSection: coursesSectionStyles,
};
