import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import React from 'react';

// Import the app entry point
const ctx = require.context('./app');

export default function App() {
  return <ExpoRoot context={ctx} />;
}

// Register the root component
registerRootComponent(App);
