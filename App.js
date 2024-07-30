import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CustomSplashScreen from './src/componentes/SplashScreen'; // Ajusta la ruta según tu estructura
import Navigation from './src/Navigation'; // Ajusta la ruta según tu estructura

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      // Simulamos una espera para ver el splash screen durante 8 segundos
      await new Promise(resolve => setTimeout(resolve, 8000)); // Ajustar el tiempo de espera según sea necesario
      setIsReady(true);
    };

    prepareApp();
  }, []);

  if (!isReady) {
    return <CustomSplashScreen />;
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
