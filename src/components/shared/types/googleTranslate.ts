// Type definitions for Google Translate
export interface GoogleTranslateWindow extends Window {
  google: {
    translate: {
      TranslateElement: {
        new (options: TranslateElementOptions, element: string): any;
        InlineLayout: {
          SIMPLE: string;
        };
      };
    };
  };
  loadGoogleTranslate?: () => void;
}

export interface TranslateElementOptions {
  pageLanguage: string;
  includedLanguages?: string;
  layout?: any;
}