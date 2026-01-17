'use client';
import React, { useEffect } from 'react';
import { translateConfig } from './config/translateConfig';
import type { GoogleTranslateWindow, TranslateElementOptions } from './types/googleTranslate';

declare global {
  interface Window extends GoogleTranslateWindow {}
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    try {
      // Dynamically load the Google Translate script
      const script = document.createElement('script');
      script.src = `${translateConfig.scriptUrl}?cb=loadGoogleTranslate`;
      script.async = true;
      
      // Handle script load error
      script.onerror = () => {
        console.error('Failed to load Google Translate script');
      };

      // Define the global callback function
      window.loadGoogleTranslate = () => {
        try {
          const options: TranslateElementOptions = {
            pageLanguage: translateConfig.options.pageLanguage,
            includedLanguages: translateConfig.options.includedLanguages,
            layout: window.google.translate.TranslateElement.InlineLayout[
              translateConfig.options.layout as keyof typeof window.google.translate.TranslateElement.InlineLayout
            ]
          };

          new window.google.translate.TranslateElement(
            options,
            'google_element'
          );
        } catch (error) {
          console.error('Error initializing Google Translate:', error);
        }
      };

      document.body.appendChild(script);

      // Cleanup
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        delete window.loadGoogleTranslate;
      };
    } catch (error) {
      console.error('Error setting up Google Translate:', error);
    }
  }, []);

  return (
    <div id="google_element" />
  );
};

export default GoogleTranslate;
