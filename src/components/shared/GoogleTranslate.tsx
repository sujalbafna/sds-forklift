'use client';
import React, { useEffect } from 'react';
import { translateConfig } from './config/translateConfig';
import type { GoogleTranslateWindow, TranslateElementOptions } from './types/googleTranslate';

declare global {
  interface Window extends GoogleTranslateWindow {}
}

const GoogleTranslate: React.FC = () => {
  const initGoogleTranslate = () => {
    try {
      if (window.google && window.google.translate) {
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
      }
    } catch (error) {
      console.error('Error initializing Google Translate:', error);
    }
  };

  useEffect(() => {
    const scriptId = 'google-translate-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `${translateConfig.scriptUrl}?cb=loadGoogleTranslate`;
      script.async = true;
      script.onerror = () => {
        console.error('Failed to load Google Translate script');
      };
      
      window.loadGoogleTranslate = () => {
        initGoogleTranslate();
      };
      
      document.body.appendChild(script);
    } else if (window.google) {
      initGoogleTranslate();
    }

  }, []);

  return null;
};

export default GoogleTranslate;
