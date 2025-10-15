/**
 * Root App component
 * Following the structure outlined in plan.md
 * 
 * This serves as the main entry point for the application.
 * Expo Router handles the actual routing through the app/ directory.
 */

import React from 'react';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

// Import the app entry point
const ctx = require.context('./app');

export default function App() {
  return <ExpoRoot context={ctx} />;
}

// Register the root component
registerRootComponent(App);
