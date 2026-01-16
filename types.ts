
// Fix: Import React to resolve React.ReactNode namespace error
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface DesignSuggestion {
  styleName: string;
  typography: {
    heading: string;
    body: string;
  };
  layoutSpecs: {
    margins: string;
    lineSpacing: string;
    ornamentation: string;
  };
  rationale: string;
}
