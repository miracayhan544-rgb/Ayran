import { PhoneModel } from '../types/phone';

export const PHONES_EXPANDED_2: PhoneModel[] = [
  // ================= GOOGLE PIXEL EK MODELLER =================
  {
    id: 'pixel-10-pro',
    brandId: 'google',
    name: 'Google Pixel 10 Pro',
    series: 'Pixel 10 Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Kompakt Amiral',
    summary:
      'Tensor G5 (3 nm TSMC) işlemci, 16 GB RAM, 5x periskop kamera ve Pixelsnap Qi2 manyetik şarjı kompakt 6.3 inçlik gövdede sunan güncel Pixel.',
    highlightSpec: '6.3" Super Actua · Tensor G5 · 16 GB RAM · 5x Periskop',
    specs: {
      display: {
        size: '6.3 inç',
        panel: 'Super Actua LTPO OLED',
        resolution: '2856 x 1280 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '3000 nit+',
        protection: 'Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Google Tensor G5 + Titan M2',
        cpu: '8 Çekirdek',
        gpu: 'Yeni Nesil GPU',
        processNode: '3 nm (TSMC)'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.68, OIS',
        ultrawide: '48 MP, Makro',
        telephoto: '48 MP 5x Periskop, OIS',
        front: '42 MP Otofokuslu',
        video: '8K 30fps (Video Boost), 4K 60fps'
      },
      battery: {
        capacity: '4870 mAh',
        wiredCharging: '30W USB-C PD',
        wirelessCharging: '15W Qi2 Manyetik (Pixelsnap)',
        reverseCharging: 'Battery Share'
      },
      buildAndConnectivity: {
        dimensions: '152.8 x 72.0 x 8.5 mm',
        weight: '207 g',
        materials: 'Alüminyum çerçeve, mat cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, UWB, Thread',
        audioAndExtras: 'Ultrasonik parmak izi, Termometre sensörü'
      },
      software: {
        osAtLaunch: 'Android 16',
        updatePolicy: '7 yıl işletim sistemi ve güvenlik güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p10p-pixelsnap-standby',
        title: 'Manyetik Qi2 Şarjda Akıllı Başucu Ekranı',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Ekran > Ekran Koruyucu > Düşük Işık Saat Modu',
        description:
          'Qi2 manyetik standa yerleştirildiğinde yatay akıllı saat, fotoğraf çerçevesi ve akıllı ev kontrol paneline dönüşür.'
      }
    ]
  },
  {
    id: 'pixel-8a',
    brandId: 'google',
    name: 'Google Pixel 8a',
    series: 'Pixel A Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      '7 yıl saf Android güncellemesi, Tensor G3 işlemci, 120 Hz Actua OLED ekran ve Google AI kamera özelliklerini orta segmente taşıyan kompakt model.',
    highlightSpec: '6.1" 120Hz OLED · Tensor G3 · 64 MP OIS · 7 Yıl Güncelleme',
    specs: {
      display: {
        size: '6.1 inç',
        panel: 'Actua OLED',
        resolution: '2400 x 1080 piksel',
        refreshRate: '60 / 120 Hz',
        peakBrightness: '2000 nit',
        protection: 'Corning Gorilla Glass 3'
      },
      performance: {
        chipset: 'Google Tensor G3 + Titan M2',
        cpu: '9 Çekirdek',
        gpu: 'Immortalis-G715s MC10',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB LPDDR5X',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '64 MP, f/1.89, OIS',
        ultrawide: '13 MP, f/2.2, 120°',
        telephoto: 'Yok (8x Super Res Zoom)',
        front: '13 MP, f/2.2',
        video: '4K 60fps'
      },
      battery: {
        capacity: '4492 mAh',
        wiredCharging: '18W USB-C PD',
        wirelessCharging: '7.5W Qi',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '152.1 x 72.7 x 8.9 mm',
        weight: '188 g',
        materials: 'Mat kompozit arka, alüminyum çerçeve',
        waterResistance: 'IP67',
        connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, NFC',
        audioAndExtras: 'Best Take, Audio Magic Eraser, Call Screen'
      },
      software: {
        osAtLaunch: 'Android 14 (Android 15/16 uyumlu)',
        updatePolicy: '7 yıl güncelleme garantisi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p8a-best-take',
        title: 'En İyi Çekim (Best Take) ile Grup Fotoğrafında Yüz İfadesi Değiştirme',
        category: 'Kamera',
        howToAccess: 'Google Fotoğraflar > Düzenle > Araçlar > En İyi Çekim',
        description:
          'Peş peşe çekilen grup fotoğraflarında gözü kapalı çıkan kişinin yüzünü diğer karedeki gülümseyen ifadesiyle kusursuz değiştirir.'
      }
    ]
  },
  {
    id: 'pixel-6-pro',
    brandId: 'google',
    name: 'Google Pixel 6 Pro',
    series: 'Pixel 6 Serisi',
    releaseYear: 2021,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Google’ın kendi tasarladığı ilk Tensor işlemciyi, ikonik yatay kamera vizörü tasarımını ve 4x periskop lensi getiren dönüm noktası Pixel modeli.',
    highlightSpec: '6.7" QHD+ 120Hz · İlk Google Tensor · 50 MP + 4x Periskop',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'LTPO AMOLED',
        resolution: '3120 x 1440 piksel',
        refreshRate: '10–120 Hz',
        peakBrightness: '800 nit+',
        protection: 'Gorilla Glass Victus'
      },
      performance: {
        chipset: 'Google Tensor + Titan M2',
        cpu: '8 Çekirdek (2x Cortex-X1)',
        gpu: 'Mali-G78 MP20',
        processNode: '5 nm'
      },
      memory: {
        ram: '12 GB LPDDR5',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Samsung GN1, f/1.85, OIS',
        ultrawide: '12 MP, f/2.2',
        telephoto: '48 MP 4x Periskop, OIS',
        front: '11.1 MP',
        video: '4K 60fps'
      },
      battery: {
        capacity: '5003 mAh',
        wiredCharging: '23W USB-C PD',
        wirelessCharging: '23W Pixel Stand',
        reverseCharging: 'Battery Share'
      },
      buildAndConnectivity: {
        dimensions: '163.9 x 75.9 x 8.9 mm',
        weight: '210 g',
        materials: 'Alüminyum çerçeve, Victus cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 6E, Bluetooth 5.2, UWB',
        audioAndExtras: 'Magic Eraser, Motion Mode (Uzun pozlama)'
      },
      software: {
        osAtLaunch: 'Android 12 (Android 16’ya kadar uzatıldı)',
        updatePolicy: '5 yıl güncelleme desteği'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p6p-action-pan',
        title: 'Tripodsuz Hareket Bulanıklığı (Action Pan & Uzun Pozlama)',
        category: 'Kamera',
        howToAccess: 'Kamera > Hareket (Motion) > Aksiyon Kaydırma / Uzun Pozlama',
        description:
          'Hareket eden bisikletli veya şelaleyi net tutarken arka plana veya suya yapay değil sensör destekli doğal hareket bulanıklığı uygular.'
      }
    ]
  },

  // ================= ONEPLUS EK MODELLER =================
  {
    id: 'oneplus-nord-4',
    brandId: 'oneplus',
    name: 'OnePlus Nord 4',
    series: 'Nord Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      '5G çağında tek parça CNC alüminyum yekpare (unibody) gövdeyle çıkan tek modern telefon; 5500 mAh pil, 100W şarj ve 6 yıl güvenlik güncellemesi sunar.',
    highlightSpec: '6.74" 120Hz AMOLED · SD 7+ Gen 3 · Yekpare Metal Kasa · 100W',
    specs: {
      display: {
        size: '6.74 inç',
        panel: '1.5K AMOLED (Aqua Touch)',
        resolution: '2772 x 1240 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '2150 nit',
        protection: 'Panda Glass'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 7+ Gen 3',
        cpu: '8 Çekirdek (2.8 GHz Cortex-X4)',
        gpu: 'Adreno 732',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB / 16 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 4.0 (256/512)',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony LYT-600, f/1.8, OIS',
        ultrawide: '8 MP, 112°',
        telephoto: 'Yok',
        front: '16 MP',
        video: '4K 60fps'
      },
      battery: {
        capacity: '5500 mAh',
        wiredCharging: '100W SuperVOOC (28 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '162.6 x 75.0 x 7.99 mm',
        weight: '199.5 g',
        materials: 'Yekpare CNC fırçalanmış alüminyum gövde',
        waterResistance: 'IP65',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, IR Verici',
        audioAndExtras: 'Alert Slider fiziksel anahtarı, Stereo hoparlör'
      },
      software: {
        osAtLaunch: 'Android 14 / OxygenOS 14.1',
        updatePolicy: '4 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'nord4-battery-health-engine',
        title: '1600 Şarj Döngüsü Sonrası %80 Kapasite Koruma Motoru',
        category: 'Batarya',
        howToAccess: 'Ayarlar > Pil > Pil Sağlığı > %80 Şarj Sınırı',
        description:
          'Battery Health Engine çipiyle 4 yıl günlük 100W şarjdan sonra bile pil kapasitesinin %80’in üzerinde kalmasını sağlar.'
      }
    ]
  },
  {
    id: 'oneplus-7-pro',
    brandId: 'oneplus',
    name: 'OnePlus 7 Pro',
    series: 'OnePlus 7 Serisi',
    releaseYear: 2019,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Çentiksiz ve deliksiz tam ekran Fluid AMOLED 90 Hz deneyimi ve gövdeden motorla çıkan açılır (pop-up) selfie kamerasıyla tarihe geçmiş kült model.',
    highlightSpec: '6.67" 90Hz Deliksiz AMOLED · SD 855 · Pop-Up Motorlu Selfie',
    specs: {
      display: {
        size: '6.67 inç',
        panel: 'Fluid AMOLED (HDR10+)',
        resolution: '3120 x 1440 piksel',
        refreshRate: '90 Hz',
        peakBrightness: '800 nit',
        protection: 'Gorilla Glass 5'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 855',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 640',
        processNode: '7 nm'
      },
      memory: {
        ram: '6 GB / 8 GB / 12 GB',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 3.0 (Dünyada ilk)',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP Sony IMX586, f/1.6, OIS',
        ultrawide: '16 MP, f/2.2',
        telephoto: '8 MP 3x Optik, OIS',
        front: '16 MP Motorlu Pop-Up Açılır Kamera',
        video: '4K 60fps'
      },
      battery: {
        capacity: '4000 mAh',
        wiredCharging: '30W Warp Charge',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '162.6 x 75.9 x 8.8 mm',
        weight: '206 g',
        materials: 'Alüminyum çerçeve, Nebula Blue mat cam',
        waterResistance: 'Su sıçramasına dayanıklı',
        connectivity: '4.5G LTE, Wi-Fi 5, Bluetooth 5.0, NFC',
        audioAndExtras: 'Alert Slider, UFS 3.0 ilk kullanım, Stereo hoparlör'
      },
      software: {
        osAtLaunch: 'Android 9 / OxygenOS 9.5 (Android 12’ye kadar)',
        updatePolicy: '3 yıl büyük Android güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'op7p-freefall-retract',
        title: 'Düşme Algılayınca Pop-Up Kamerayı Otomatik İçeri Çekme',
        category: 'Güvenlik',
        howToAccess: 'Ön kamera açıkken cihaz serbest düşüşe geçtiğinde otomatik çalışır',
        description:
          'İvmeölçer telefonun düştüğünü algıladığı anda yukarıdaki motorlu ön kamerayı yere çarpmadan yarım saniye içinde gövdeye geri çeker.'
      }
    ]
  },

  // ================= OPPO & VIVO EK MODELLER =================
  {
    id: 'oppo-find-n3',
    brandId: 'oppo',
    name: 'OPPO Find N3',
    series: 'Find N Katlanabilir',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Katlanabilir',
    summary:
      'Görünmez menteşe izi, 7.82 inç geniş kare iç ekran, Hasselblad üçlü amiral kamerası ve Boundless View 3 pencereli çoklu görev sistemiyle katlanabilir referans cihaz.',
    highlightSpec: '7.82" + 6.31" · SD 8 Gen 2 · 64 MP Periskop · Boundless View',
    specs: {
      display: {
        size: '7.82 inç (İç) + 6.31 inç (Dış)',
        panel: 'LTPO3 OLED',
        resolution: '2268 x 2440 (İç) / 2484 x 1116 (Dış)',
        refreshRate: '1–120 Hz',
        peakBrightness: '2800 nit',
        protection: 'Ceramic Guard (Dış)'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 2',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 740',
        processNode: '4 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP Sony LYT-T808 (Çift Katmanlı Piksel), f/1.7, OIS',
        ultrawide: '48 MP, Makro',
        telephoto: '64 MP 3x Periskop, f/2.6, OIS',
        front: '20 MP (İç) + 32 MP (Dış)',
        video: '4K 60fps Dolby Vision'
      },
      battery: {
        capacity: '4805 mAh',
        wiredCharging: '67W SuperVOOC (42 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Ters kablolu'
      },
      buildAndConnectivity: {
        dimensions: '5.8 mm (Açık) / 11.7 mm (Katlı)',
        weight: '239 g / 245 g',
        materials: 'Alüminyum çerçeve, zirkonyum sıvı metal menteşe',
        waterResistance: 'IPX4',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, IR Verici',
        audioAndExtras: 'Alert Slider, 4 hoparlörlü uzamsal ses'
      },
      software: {
        osAtLaunch: 'Android 13 / ColorOS 13.2 (ColorOS 15 aldı)',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'findn3-boundless-view',
        title: 'Boundless View (3 Tam Boyutlu Uygulamayı Aynı Anda Kaydırma)',
        category: 'Verimlilik',
        howToAccess: '2 parmakla ekran ortasından aşağı kaydır > 3. uygulamayı ekle',
        description:
          'Uygulamaları küçültmek yerine ekranın dışına taşan sanal masaüstünde 3 uygulamayı tam boyutta yan yana tutar.'
      }
    ]
  },
  {
    id: 'vivo-x100-pro',
    brandId: 'vivo',
    name: 'vivo X100 Pro',
    series: 'X Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'İlk kez ZEISS APO sertifikalı 100 mm yüzen periskop lensi, 1 inç Sony IMX989 sensörü ve gün batımı/güneş çekimi uzmanlığıyla kamera ödüllü amiral gemisi.',
    highlightSpec: '6.78" LTPO · Dimensity 9300 · 1" IMX989 + ZEISS APO 4.3x · 100W',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'LTPO AMOLED',
        resolution: '2800 x 1260 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '3000 nit',
        protection: 'Dayanıklı kavisli cam'
      },
      performance: {
        chipset: 'MediaTek Dimensity 9300 + vivo V3 Görüntü Çipi',
        cpu: '8 Çekirdek (Tam Büyük Çekirdek)',
        gpu: 'Immortalis-G720 MC12',
        processNode: '4 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP 1-inç Sony IMX989, f/1.75, OIS',
        ultrawide: '50 MP, f/2.0',
        telephoto: '50 MP 4.3x ZEISS APO Periskop (100mm), Tele-Makro, OIS',
        front: '32 MP',
        video: '8K 30fps, 4K 60fps Sinematik Portre'
      },
      battery: {
        capacity: '5400 mAh',
        wiredCharging: '100W FlashCharge',
        wirelessCharging: '50W Kablosuz',
        reverseCharging: 'Ters kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '164.1 x 75.3 x 8.9 mm',
        weight: '225 g',
        materials: 'Alüminyum çerçeve, Güneş halkalı paslanmaz çelik kamera çerçevesi',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: 'V3 Sinema Çipi, USB 3.2 Gen 1'
      },
      software: {
        osAtLaunch: 'Android 14 / Funtouch OS 14',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'x100p-sunset-mode',
        title: 'ZEISS T* Kaplama ile Doğrudan Güneş Karşısı Portre ve Gün Batımı',
        category: 'Kamera',
        howToAccess: 'Kamera > Portre / Manzara > Güneşli Gün Batımı Modu',
        description:
          'Lens parlamasını ve gölgelenmeyi T* kaplama + V3 çiple filtreleyerek doğrudan güneşe doğru çekilen karelerde kızıl güneş diskini patlamadan yakalar.'
      }
    ]
  },

  // ================= HONOR, NOTHING, SONY, ASUS, REALME EK =================
  {
    id: 'honor-200-pro',
    brandId: 'honor',
    name: 'HONOR 200 Pro',
    series: 'Numara Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      'Paris’in ünlü Studio Harcourt iş birliğiyle geliştirilen siyah-beyaz ve renkli stüdyo portre ışıklandırması, 5200 mAh silikon pil ve 100W/66W şarjıyla dikkat çeker.',
    highlightSpec: '6.78" 4000 nit · SD 8s Gen 3 · Studio Harcourt Portre · 100W/66W',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'Dört Kavisli OLED (3840Hz PWM)',
        resolution: '2700 x 1224 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '4000 nit',
        protection: 'Alüminosilikat cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8s Gen 3',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 735',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB',
        storage: '512 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP H9000 (1/1.3"), f/1.9, OIS',
        ultrawide: '12 MP, 2.5 cm Makro',
        telephoto: '50 MP 2.5x Sony IMX856, OIS',
        front: '50 MP + Derinlik Sensörü',
        video: '4K 30fps'
      },
      battery: {
        capacity: '5200 mAh (Silikon-Karbon)',
        wiredCharging: '100W SuperCharge',
        wirelessCharging: '66W Kablosuz SuperCharge',
        reverseCharging: 'Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '163.3 x 75.2 x 8.2 mm',
        weight: '199 g',
        materials: 'Art Nouveau dalgalı cam arka yüzey',
        waterResistance: 'IP65',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, IR Verici',
        audioAndExtras: 'HONOR C1+ RF Çipi, Stereo hoparlör'
      },
      software: {
        osAtLaunch: 'Android 14 / MagicOS 8.0',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'h200p-harcourt',
        title: 'Studio Harcourt Klasik Siyah-Beyaz Stüdyo Portre Işığı',
        category: 'Kamera',
        howToAccess: 'Kamera > Portre > Harcourt Klasik / Canlı / Renkli',
        description:
          '1934’ten beri ünlülerin portrelerini çeken Parisli Studio Harcourt’un sinematik ışık-gölge düşüşünü yapay zeka ile yüz hatlarına uygular.'
      }
    ]
  },
  {
    id: 'nothing-phone-3a-pro',
    brandId: 'nothing',
    name: 'Nothing Phone (3a) Pro',
    series: 'Phone (a) Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Orta-Üst Segment',
    summary:
      'Nothing’in ilk 3x periskop telefoto kamerasına, Essential Key fiziksel yapay zeka tuşuna ve şeffaf dairesel kamera adasına sahip 2025 modeli.',
    highlightSpec: '6.77" 120Hz AMOLED · SD 7s Gen 3 · 50 MP 3x Periskop · Essential Key',
    specs: {
      display: {
        size: '6.77 inç',
        panel: 'AMOLED',
        resolution: '2392 x 1080 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '3000 nit',
        protection: 'Panda Glass'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 7s Gen 3',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 810',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB',
        storage: '256 GB',
        storageType: 'UFS 2.2 / 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.88, OIS',
        ultrawide: '8 MP, 120°',
        telephoto: '50 MP 3x Sony LYT-600 Periskop (60x Ultra Zoom), Makro, OIS',
        front: '50 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '50W Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '163.5 x 77.5 x 8.39 mm',
        weight: '211 g',
        materials: 'Şeffaf cam arka, metal kamera halkası',
        waterResistance: 'IP64',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, NFC',
        audioAndExtras: 'Fiziksel Essential Key düğmesi, Glyph LED'
      },
      software: {
        osAtLaunch: 'Android 15 / Nothing OS 3.1',
        updatePolicy: '3 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'np3ap-essential-key',
        title: 'Essential Key (Tek Tuşla Ekran Notu + Sesli Hatırlatıcı)',
        category: 'Verimlilik',
        howToAccess: 'Sağ yan kenardaki parlak fiziksel Essential Key düğmesi',
        description:
          'Tek basışta o anki ekran görüntüsünü Essential Space’e kaydeder; basılı tuttuğunuzda sesli not alıp otomatik yapılacaklar listesine çevirir.'
      }
    ]
  },
  {
    id: 'sony-ericsson-k750i',
    brandId: 'sony',
    name: 'Sony Ericsson K750i',
    series: 'K Serisi Cyber-shot Öncüsü',
    releaseYear: 2005,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Sürgülü mekanik lens kapağı, otomatik odaklı 2 MP kamerası, ortadaki joystick kontrolü ve RDS FM radyosuyla 2005 yılının efsanevi kamera telefonu.',
    highlightSpec: '1.8" TFT · 2 MP Otofokus · Sürgülü Lens Kapağı · Joystick',
    specs: {
      display: {
        size: '1.8 inç',
        panel: 'TFT LCD (262K renk)',
        resolution: '176 x 220 piksel',
        refreshRate: 'Standart',
        peakBrightness: 'Standart TFT',
        protection: 'Akrilik cam'
      },
      performance: {
        chipset: 'Ericsson DB2010',
        cpu: 'ARM9',
        gpu: 'Yok',
        processNode: 'Klasik 2G'
      },
      memory: {
        ram: 'Sistem belleği',
        storage: '34 MB dahili',
        storageType: 'Flash',
        expandable: 'Memory Stick Duo Pro (2 GB)'
      },
      camera: {
        main: '2 MP, Otofokus, Sürgülü Mekanik Kapak, Çift LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: 'Yok',
        video: '176x144 (QCIF) video kaydı'
      },
      battery: {
        capacity: '900 mAh BST-37 (Çıkarılabilir)',
        wiredCharging: 'FastPort konnektör',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '100 x 46 x 20.5 mm',
        weight: '99 g',
        materials: 'Polikarbonat & alüminyum sürgü',
        waterResistance: 'Yok',
        connectivity: '2G GSM, Bluetooth 2.0, Kızılötesi (IrDA)',
        audioAndExtras: 'MusicDJ besteci, RDS FM Radyo, 2 kademeli yan deklanşör'
      },
      software: {
        osAtLaunch: 'Sony Ericsson Java Platform (JP-5)',
        updatePolicy: 'Dönem firmware'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'k750i-service-joystick',
        title: 'Joystick Kombinasyonuyla Gizli Servis Test Menüsü',
        category: 'Geliştirici',
        howToAccess: 'Ana ekranda: Sağ, *, Sol, Sol, *, Sol, *',
        description:
          'Joystick’i sağ/sol ve yıldız tuşuyla belirli sırayla hareket ettirerek tüm tuşları, LED ışıkları, titreşimi ve toplam joystick sayacını gösteren servis menüsünü açar.'
      }
    ]
  },

  // ================= KLASİK MARKALAR EK MODELLER =================
  {
    id: 'nokia-808-pureview',
    brandId: 'nokia',
    name: 'Nokia 808 PureView',
    series: 'PureView Serisi',
    releaseYear: 2012,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      '1/1.2 inç boyutundaki devasa 41 MP sensörü, ND filtresi ve Xenon flaşıyla akıllı telefon fotoğrafçılığında piksel gruplama (oversampling) çağını başlatan son Symbian efsanesi.',
    highlightSpec: '4.0" ClearBlack AMOLED · 41 MP (1/1.2") · Xenon Flaş · ND Filtre',
    specs: {
      display: {
        size: '4.0 inç',
        panel: 'ClearBlack AMOLED',
        resolution: '640 x 360 piksel',
        refreshRate: '60 Hz',
        peakBrightness: 'Standart AMOLED',
        protection: 'Corning Gorilla Glass'
      },
      performance: {
        chipset: 'ARM11',
        cpu: '1.3 GHz tek çekirdek + Özel ISP',
        gpu: 'Broadcom VideoCore IV',
        processNode: '45 nm'
      },
      memory: {
        ram: '512 MB',
        storage: '16 GB',
        storageType: 'eMMC',
        expandable: 'microSD (32 GB)'
      },
      camera: {
        main: '41 MP (38 MP etkin) 1/1.2" Carl Zeiss, f/2.4, Xenon + LED, Dahili ND Filtre',
        ultrawide: 'Yok',
        telephoto: 'Yok (3x Kayıpsız Sensör Zoom)',
        front: '0.3 MP VGA',
        video: '1080p 30fps (4x kayıpsız zoom & 140 dB distorsiyonsuz ses kaydı)'
      },
      battery: {
        capacity: '1400 mAh (Çıkarılabilir)',
        wiredCharging: 'Micro-USB',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '123.9 x 60.2 x 13.9 mm',
        weight: '169 g',
        materials: 'Polikarbonat gövde',
        waterResistance: 'Yok',
        connectivity: '3G HSPA, Wi-Fi n, Bluetooth 3.0, NFC, Mini-HDMI çıkışı',
        audioAndExtras: 'FM Verici (Araba radyosuna ses yayını), 3.5mm jak'
      },
      software: {
        osAtLaunch: 'Nokia Belle FP1 (Symbian)',
        updatePolicy: 'Belle FP2 son güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'n808-fm-transmitter',
        title: 'Dahili FM Radyo Vericisi ile Araba Teybine Kablosuz Yayın',
        category: 'Verimlilik',
        howToAccess: 'Müzik Çalar > Seçenekler > FM ile Çal',
        description:
          'Bluetooth olmayan eski araç teyplerine telefonu küçük bir FM radyo istasyonu gibi yayın yaptırarak şarkıları araç hoparlöründen çalar.'
      }
    ]
  },
  {
    id: 'nokia-6600',
    brandId: 'nokia',
    name: 'Nokia 6600',
    series: 'Symbian Series 60',
    releaseYear: 2003,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Yumurta formlu ikonik kasası, Symbian S60 uygulama yükleyebilme özgürlüğü ve kızılötesi/Bluetooth paylaşımıyla 2000’lerin ilk akıllı telefon patlamasını yarattı.',
    highlightSpec: '2.1" 65K TFT · Symbian S60 · MMC Kart · Joystick · 122 g',
    specs: {
      display: {
        size: '2.1 inç',
        panel: 'TFT LCD (65.536 Renk)',
        resolution: '176 x 208 piksel',
        refreshRate: 'Standart',
        peakBrightness: 'Standart TFT',
        protection: 'Akrilik ön yüz'
      },
      performance: {
        chipset: 'TI OMAP 1510',
        cpu: '104 MHz ARM9',
        gpu: 'Yok',
        processNode: '130 nm'
      },
      memory: {
        ram: '6 MB sistem belleği',
        storage: '6 MB dahili',
        storageType: 'Flash',
        expandable: 'MMC Kart (32 MB kutudan çıkardı)'
      },
      camera: {
        main: '0.3 MP (VGA 640x480), 2x Dijital Zoom',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: 'Yok',
        video: '176x144 (3GP) sesli video'
      },
      battery: {
        capacity: '850 mAh BL-5C (Çıkarılabilir)',
        wiredCharging: 'Nokia 3.5 mm adaptör',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '108.6 x 58.2 x 23.7 mm',
        weight: '122 g',
        materials: 'Polikarbonat gövde',
        waterResistance: 'Yok',
        connectivity: '2.5G GPRS, Bluetooth 1.1, Kızılötesi (IrDA)',
        audioAndExtras: '5 yönlü Joystick, RealOne Player, .SIS uygulama desteği'
      },
      software: {
        osAtLaunch: 'Symbian OS 7.0s (Series 60 v2.0)',
        updatePolicy: 'Servis merkezi ROM'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'n6600-hard-format',
        title: 'Kapalıyken 3 Tuşla Symbian Güvenli Format (* + 3 + Yeşil Arama)',
        category: 'Sistem',
        howToAccess: 'Telefon kapalıyken Yıldız (*) + 3 + Yeşil Arama + Güç tuşuna basılı tut',
        description:
          'Sistem açılmayacak şekilde bozulduğunda Symbian S60 cihazını kurtarma modunda fabrika haline döndürür.'
      }
    ]
  },
  {
    id: 'blackberry-passport',
    brandId: 'blackberry',
    name: 'BlackBerry Passport',
    series: 'Passport Serisi',
    releaseYear: 2014,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Pasaport boyutundaki 1:1 kare 1440x1440 ekranı ve kendisi aynı zamanda kapasitif trackpad (dokunmatik yüzey) olan 3 satırlı fiziksel klavyesiyle benzersiz iş cihazı.',
    highlightSpec: '4.5" 1:1 Kare IPS (1440x1440) · Dokunmatik Fiziksel Klavye · SD 801',
    specs: {
      display: {
        size: '4.5 inç (1:1 Kare Oran)',
        panel: 'IPS LCD',
        resolution: '1440 x 1440 piksel (453 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: 'Standart IPS',
        protection: 'Corning Gorilla Glass 3'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 801',
        cpu: '4 Çekirdek 2.26 GHz Krait 400',
        gpu: 'Adreno 330',
        processNode: '28 nm'
      },
      memory: {
        ram: '3 GB',
        storage: '32 GB',
        storageType: 'eMMC',
        expandable: 'microSD (256 GB)'
      },
      camera: {
        main: '13 MP, f/2.0, OIS',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '2 MP',
        video: '1080p 60fps'
      },
      battery: {
        capacity: '3450 mAh',
        wiredCharging: 'Micro-USB',
        wirelessCharging: 'Silver Edition dışında yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '128 x 90.3 x 9.3 mm',
        weight: '196 g',
        materials: 'Paslanmaz çelik raylı çerçeve, yumuşak dokulu arka',
        waterResistance: 'Yok',
        connectivity: '4G LTE, Wi-Fi ac, Bluetooth 4.0, NFC, SlimPort HDMI',
        audioAndExtras: 'Dokunmatik fiziksel klavye (Touch-enabled keyboard)'
      },
      software: {
        osAtLaunch: 'BlackBerry 10.3 OS (Android APK uyumlu)',
        updatePolicy: 'BB 10.3.3'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'passport-touch-keyboard',
        title: 'Fiziksel Tuşların Üzerinde Parmağı Kaydırarak Sayfa Kaydırma & İmleç',
        category: 'Verimlilik',
        howToAccess: 'Tarayıcı veya e-posta okurken fiziksel tuşların üstünde parmağınızı kaydırın',
        description:
          'Fiziksel klavye tuşları kapasitif dokunma sensörüne sahiptir; ekrana dokunmadan tuşların üstünde parmak kaydırarak sayfayı aşağı/yukarı kaydırır veya kelime seçer.'
      }
    ]
  },
  {
    id: 'lg-g2-2013',
    brandId: 'lg',
    name: 'LG G2',
    series: 'G Serisi',
    releaseYear: 2013,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Yan çerçevedeki tüm tuşları arka kameranın altına taşıyan, ekrana çift tıklayarak uyandırmayı (KnockON) popülerleştiren ince çerçeveli öncü model.',
    highlightSpec: '5.2" Zero-Bezel IPS · SD 800 · Arka Ses/Güç Tuşları · 3000 mAh',
    specs: {
      display: {
        size: '5.2 inç',
        panel: 'True HD-IPS+ LCD',
        resolution: '1920 x 1080 piksel (424 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '450 nit',
        protection: 'Corning Gorilla Glass 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 800',
        cpu: '4 Çekirdek 2.26 GHz Krait 400',
        gpu: 'Adreno 330',
        processNode: '28 nm'
      },
      memory: {
        ram: '2 GB',
        storage: '16 GB / 32 GB',
        storageType: 'eMMC',
        expandable: 'Yok'
      },
      camera: {
        main: '13 MP, f/2.4, OIS (İlk OIS öncülerinden)',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '2.1 MP',
        video: '1080p 60fps'
      },
      battery: {
        capacity: '3000 mAh (Kademeli SiO+)',
        wiredCharging: 'Micro-USB',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '138.5 x 70.9 x 8.9 mm',
        weight: '143 g',
        materials: 'Polikarbonat gövde',
        waterResistance: 'Yok',
        connectivity: '4G LTE, Wi-Fi ac, Bluetooth 4.0, IR Verici, NFC',
        audioAndExtras: 'Arka tuş tasarımı, 24-bit/192kHz Hi-Fi ses, KnockON'
      },
      software: {
        osAtLaunch: 'Android 4.2.2 (Android 5.0.2 Lollipop)',
        updatePolicy: 'Dönem güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'lgg2-guest-mode',
        title: 'Misafir Modu (Farklı Desenle Sınırlı Uygulama Profili)',
        category: 'Güvenlik',
        howToAccess: 'Ayarlar > Genel > Misafir Modu',
        description:
          'Telefonunuzu çocuğunuza veya arkadaşınıza verirken ayrı bir kilit deseni çizerek yalnızca belirlediğiniz 3–4 uygulamanın görünmesini sağlar.'
      }
    ]
  }
];
