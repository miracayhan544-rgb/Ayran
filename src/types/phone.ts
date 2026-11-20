export type FeatureCategory =
  | 'Sistem'
  | 'Kamera'
  | 'Batarya'
  | 'Güvenlik'
  | 'Verimlilik'
  | 'Geliştirici';

export type ThemeMode = 'light' | 'dark' | 'oled';

export type PhoneEra = '2025-2026' | '2020-2024' | '2000-2019';

export interface HiddenFeature {
  id: string;
  title: string;
  category: FeatureCategory;
  howToAccess: string;
  description: string;
  tip?: string;
}

export interface SecretCode {
  code: string;
  title: string;
  description: string;
  caution?: string;
}

export interface Brand {
  id: string;
  name: string;
  country: string;
  osName: string;
  tagline: string;
  ecosystemSummary: string;
  accentHex: string;
  foundedYear: number;
  osHiddenFeatures: HiddenFeature[];
  secretCodes: SecretCode[];
}

export interface PhoneSpecs {
  display: {
    size: string;
    panel: string;
    resolution: string;
    refreshRate: string;
    peakBrightness: string;
    protection: string;
  };
  performance: {
    chipset: string;
    cpu: string;
    gpu: string;
    processNode: string;
  };
  memory: {
    ram: string;
    storage: string;
    storageType: string;
    expandable: string;
  };
  camera: {
    main: string;
    ultrawide: string;
    telephoto: string;
    front: string;
    video: string;
    opticsNote?: string;
  };
  battery: {
    capacity: string;
    wiredCharging: string;
    wirelessCharging: string;
    reverseCharging: string;
  };
  buildAndConnectivity: {
    dimensions: string;
    weight: string;
    materials: string;
    waterResistance: string;
    connectivity: string;
    audioAndExtras: string;
  };
  software: {
    osAtLaunch: string;
    updatePolicy: string;
  };
}

export type DeviceType = 'phone' | 'tablet';

export interface PhoneModel {
  id: string;
  brandId: string;
  deviceType?: DeviceType;
  name: string;
  series: string;
  releaseYear: number;
  era: PhoneEra;
  segment:
    | 'Amiral Gemisi'
    | 'Katlanabilir'
    | 'Oyun'
    | 'Orta-Üst Segment'
    | 'Kompakt Amiral'
    | 'Klasik & Dönüm Noktası'
    | 'Tablet';
  summary: string;
  highlightSpec: string;
  specs: PhoneSpecs;
  modelHiddenFeatures: HiddenFeature[];
}
