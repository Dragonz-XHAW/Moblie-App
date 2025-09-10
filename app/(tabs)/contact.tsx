import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  Linking,
} from 'react-native';
import { Colors } from '@/constants/Data';

export default function ContactScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }

    Alert.alert(
      'Thank You!',
      'Your message has been received. We will get back to you within 24 hours.',
      [{ text: 'OK', onPress: () => setFormData({ name: '', email: '', phone: '', subject: '', message: '' }) }]
    );
  };

  const handleCall = () => {
    Linking.openURL('tel:+27123456789');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@empoweringthenation.co.za');
  };

  const handleWhatsApp = () => {
    Linking.openURL('https://wa.me/27123456789');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Contact Us</Text>
        </View>

        {/* Contact Header */}
        <View style={styles.contactHeader}>
          <Text style={styles.contactTitle}>Get In Touch</Text>
          <Text style={styles.contactSubtitle}>
            Ready to start your learning journey? We're here to help you every step of the way.
          </Text>
        </View>

        {/* Quick Contact Info */}
        <View style={styles.quickContact}>
          <TouchableOpacity style={styles.contactCard} onPress={handleCall}>
            <View style={[styles.contactIcon, { backgroundColor: Colors.primary }]}>
              <Text style={styles.contactIconText}>📞</Text>
            </View>
            <Text style={styles.contactCardTitle}>Call Us</Text>
            <Text style={styles.contactCardValue}>+27 12 345 6789</Text>
            <Text style={styles.contactCardSubtext}>Mon-Fri 8AM-5PM</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactCard} onPress={handleEmail}>
            <View style={[styles.contactIcon, { backgroundColor: Colors.ctaBlueBtn }]}>
              <Text style={styles.contactIconText}>✉️</Text>
            </View>
            <Text style={styles.contactCardTitle}>Email Us</Text>
            <Text style={styles.contactCardValue}>info@empoweringthenation.co.za</Text>
            <Text style={styles.contactCardSubtext}>We reply within 24 hours</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactCard} onPress={handleWhatsApp}>
            <View style={[styles.contactIcon, { backgroundColor: Colors.success }]}>
              <Text style={styles.contactIconText}>💬</Text>
            </View>
            <Text style={styles.contactCardTitle}>WhatsApp</Text>
            <Text style={styles.contactCardValue}>+27 12 345 6789</Text>
            <Text style={styles.contactCardSubtext}>Quick responses</Text>
          </TouchableOpacity>
        </View>

        {/* Contact Form */}
        <View style={styles.formSection}>
          <Text style={styles.formTitle}>Send us a Message</Text>
          <Text style={styles.formSubtitle}>
            Have questions about our courses? Fill out the form below and we'll get back to you.
          </Text>

          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full Name *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                value={formData.name}
                onChangeText={(text) => setFormData({ ...formData, name: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address *</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={formData.email}
                onChangeText={(text) => setFormData({ ...formData, email: text })}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Phone Number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChangeText={(text) => setFormData({ ...formData, phone: text })}
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Subject</Text>
              <TextInput
                style={styles.input}
                placeholder="What is this regarding?"
                value={formData.subject}
                onChangeText={(text) => setFormData({ ...formData, subject: text })}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Message *</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Tell us more about how we can help you..."
                value={formData.message}
                onChangeText={(text) => setFormData({ ...formData, message: text })}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Send Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Location & Hours */}
        <View style={styles.locationSection}>
          <Text style={styles.locationTitle}>Visit Our Campus</Text>
          
          <View style={styles.locationCard}>
            <Text style={styles.locationCardTitle}>📍 Main Campus</Text>
            <Text style={styles.locationAddress}>
              123 Skills Development Street{'\n'}
              Johannesburg, Gauteng{'\n'}
              South Africa, 2000
            </Text>
          </View>

          <View style={styles.hoursCard}>
            <Text style={styles.hoursTitle}>🕒 Operating Hours</Text>
            <View style={styles.hoursGrid}>
              <View style={styles.hoursRow}>
                <Text style={styles.hoursDay}>Monday - Friday</Text>
                <Text style={styles.hoursTime}>8:00 AM - 5:00 PM</Text>
              </View>
              <View style={styles.hoursRow}>
                <Text style={styles.hoursDay}>Saturday</Text>
                <Text style={styles.hoursTime}>9:00 AM - 2:00 PM</Text>
              </View>
              <View style={styles.hoursRow}>
                <Text style={styles.hoursDay}>Sunday</Text>
                <Text style={styles.hoursTime}>Closed</Text>
              </View>
            </View>
          </View>
        </View>

        {/* FAQ Section */}
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
          
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>How do I enroll in a course?</Text>
            <Text style={styles.faqAnswer}>
              You can enroll by contacting us via phone, email, or visiting our campus. We'll guide you through the registration process.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>What payment methods do you accept?</Text>
            <Text style={styles.faqAnswer}>
              We accept cash, bank transfers, and installment payment plans to make our courses accessible to everyone.
            </Text>
          </View>

          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Do you provide certificates?</Text>
            <Text style={styles.faqAnswer}>
              Yes, all students receive a certificate of completion upon successfully finishing their chosen course.
            </Text>
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
  contactHeader: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: 12,
  },
  contactSubtitle: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
    opacity: 0.9,
    lineHeight: 24,
  },
  quickContact: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: Colors.white,
    marginTop: -20,
    marginHorizontal: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 10,
    gap: 20,
  },
  contactCard: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    backgroundColor: Colors.background,
  },
  contactIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactIconText: {
    fontSize: 24,
  },
  contactCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 4,
  },
  contactCardValue: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.primary,
    marginBottom: 4,
  },
  contactCardSubtext: {
    fontSize: 12,
    color: Colors.textLight,
  },
  formSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 8,
  },
  formSubtitle: {
    fontSize: 16,
    color: Colors.textLight,
    marginBottom: 24,
    lineHeight: 24,
  },
  form: {
    gap: 20,
  },
  inputGroup: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e8e9eb',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: Colors.textDark,
    backgroundColor: Colors.background,
  },
  textArea: {
    minHeight: 100,
  },
  submitButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  submitButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
  locationSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  locationTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 20,
  },
  locationCard: {
    backgroundColor: Colors.background,
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
  },
  locationCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 8,
  },
  locationAddress: {
    fontSize: 14,
    color: Colors.textLight,
    lineHeight: 20,
  },
  hoursCard: {
    backgroundColor: Colors.background,
    padding: 20,
    borderRadius: 12,
  },
  hoursTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 12,
  },
  hoursGrid: {
    gap: 8,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hoursDay: {
    fontSize: 14,
    color: Colors.textDark,
  },
  hoursTime: {
    fontSize: 14,
    color: Colors.textLight,
  },
  faqSection: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.textDark,
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e9eb',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: Colors.textLight,
    lineHeight: 20,
  },
}); 