import { PhoneModel } from '../types/phone';

export const PHONES_EXPANDED_4: PhoneModel[] = [
  // ================= APPLE EK TELEFONLAR =================
  {
    id: 'iphone-air-2025',
    brandId: 'apple',
    deviceType: 'phone',
    name: 'iPhone Air',
    series: 'iPhone Air Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      'Yalnızca 5.64 mm inceliğindeki titanyum gövdesine A19 Pro işlemci, 12 GB RAM, 120 Hz 3000 nit ProMotion ekran ve 48 MP Fusion kamera sığdıran ultra ince model.',
    highlightSpec: '6.5" 120Hz OLED · 5.64 mm Titanyum · A19 Pro · 12 GB RAM',
    specs: {
      display: {
        size: '6.5 inç',
        panel: 'Super Retina XDR LTPO OLED',
        resolution: '2736 x 1260 piksel (460 ppi)',
        refreshRate: '1–120 Hz ProMotion',
        peakBrightness: '3000 nit',
        protection: 'Ceramic Shield 2 (Ön ve Arka)'
      },
      performance: {
        chipset: 'Apple A19 Pro',
        cpu: '6 Çekirdek',
        gpu: '5 Çekirdek Apple GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP Fusion, f/1.6, sensör kaydırmalı OIS (2x Optik Kalite)',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '18 MP Center Stage, f/1.9',
        video: '4K 60 fps Dolby Vision'
      },
      battery: {
        capacity: '3149 mAh (Yüksek Yoğunluklu)',
        wiredCharging: 'USB-C PD (30 dk %50)',
        wirelessCharging: '20W MagSafe / Qi2',
        reverseCharging: '4.5W USB-C'
      },
      buildAndConnectivity: {
        dimensions: '156.2 x 74.7 x 5.64 mm',
        weight: '165 g',
        materials: 'Sınıf 5 Titanyum çerçeve, Ceramic Shield arka',
        waterResistance: 'IP68 (6m)',
        connectivity: '5G (Apple C1X Modem), Wi-Fi 7, Bluetooth 6.0, Sadece eSIM',
        audioAndExtras: '5.64 mm rekor incelik, Kamera Denetimi, Eylem Düğmesi'
      },
      software: {
        osAtLaunch: 'iOS 26',
        updatePolicy: '7 yıl iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'air-c1x-power',
        title: 'Apple C1X Modem + N1 Çipi ile Ultra İnce Kasada Düşük 5G Tüketimi',
        category: 'Batarya',
        howToAccess: 'Ayarlar > Hücresel > 5G Otomatik',
        description:
          'Apple tasarımı C1X modem ile 5G veri tüketimini geleneksel modemlere göre %25 azaltarak 5.64 mm ince gövdede tam gün pil sunar.'
      }
    ]
  },
  {
    id: 'iphone-17-2025',
    brandId: 'apple',
    deviceType: 'phone',
    name: 'iPhone 17',
    series: 'iPhone 17 Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Kompakt Amiral',
    summary:
      'Standart iPhone serisine ilk kez 120 Hz ProMotion ve Her Zaman Açık Ekran getiren; A19 çipli ve çift 48 MP (Fusion + Ultra Geniş) kameralı 2025 modeli.',
    highlightSpec: '6.3" 120Hz ProMotion · Apple A19 · Çift 48 MP · 256 GB Başlangıç',
    specs: {
      display: {
        size: '6.3 inç',
        panel: 'Super Retina XDR LTPO OLED',
        resolution: '2622 x 1206 piksel (460 ppi)',
        refreshRate: '1–120 Hz ProMotion (Standartta İlk)',
        peakBrightness: '3000 nit',
        protection: 'Ceramic Shield 2'
      },
      performance: {
        chipset: 'Apple A19',
        cpu: '6 Çekirdek',
        gpu: '5 Çekirdek Apple GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '8 GB LPDDR5X',
        storage: '256 GB / 512 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP Fusion, f/1.6, OIS',
        ultrawide: '48 MP Fusion Ultra Geniş, f/2.2, Makro',
        telephoto: '2x Optik Kalite Sensör Zoom',
        front: '18 MP Center Stage',
        video: '4K 60 fps Dolby Vision'
      },
      battery: {
        capacity: '3692 mAh',
        wiredCharging: '40W+ USB-C PD (20 dk %50)',
        wirelessCharging: '25W MagSafe / Qi2',
        reverseCharging: '4.5W USB-C'
      },
      buildAndConnectivity: {
        dimensions: '149.6 x 71.5 x 7.95 mm',
        weight: '177 g',
        materials: 'Alüminyum çerçeve, renkli cam arka',
        waterResistance: 'IP68 (6m)',
        connectivity: '5G, Wi-Fi 7, Bluetooth 6.0, UWB 2',
        audioAndExtras: 'Kamera Denetimi, Eylem Düğmesi, 120 Hz AOD'
      },
      software: {
        osAtLaunch: 'iOS 26',
        updatePolicy: '7 yıl iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ip17-center-stage-rotate',
        title: 'Telefonu Çevirmeden Ön Kamerada Otomatik Yatay Selfie Kadrajı',
        category: 'Kamera',
        howToAccess: 'Ön Kamera > Üstteki kadraj genişletme simgesine dokun',
        description:
          'Yeni kare 18 MP ön sensör sayesinde telefonu tek elle dikey tutarken bile 16:9 geniş yatay grup selfie ve videosu çekebilirsiniz.'
      }
    ]
  },
  {
    id: 'iphone-16e',
    brandId: 'apple',
    deviceType: 'phone',
    name: 'iPhone 16e',
    series: 'iPhone 16 Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Orta-Üst Segment',
    summary:
      'Apple’ın kendi ilk C1 5G modemini kullanan, A18 çipli, 8 GB RAM’li Apple Intelligence destekli, Eylem Düğmeli ve uzun pil ömürlü kompakt giriş modeli.',
    highlightSpec: '6.1" OLED · Apple A18 + C1 Modem · 48 MP · Apple Intelligence',
    specs: {
      display: {
        size: '6.1 inç',
        panel: 'Super Retina XDR OLED',
        resolution: '2532 x 1170 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '1200 nit',
        protection: 'Ceramic Shield'
      },
      performance: {
        chipset: 'Apple A18',
        cpu: '6 Çekirdek',
        gpu: '4 Çekirdek Apple GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '8 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP Fusion 2’si 1 Arada, f/1.6, OIS',
        ultrawide: 'Yok',
        telephoto: '12 MP 2x Optik Kalite',
        front: '12 MP TrueDepth',
        video: '4K 60 fps Dolby Vision'
      },
      battery: {
        capacity: '4005 mAh',
        wiredCharging: '20W+ USB-C PD',
        wirelessCharging: '7.5W Qi',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '146.7 x 71.5 x 7.8 mm',
        weight: '167 g',
        materials: 'Alüminyum çerçeve, mat cam arka',
        waterResistance: 'IP68',
        connectivity: '5G (İlk Apple C1 Modem), Wi-Fi 6, Bluetooth 5.3',
        audioAndExtras: 'Eylem Düğmesi, Face ID, Görsel Zeka tuş kısayolu'
      },
      software: {
        osAtLaunch: 'iOS 18.3 (iOS 26 uyumlu)',
        updatePolicy: '6+ yıl iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: '16e-action-visual-intel',
        title: 'Eylem Düğmesine Doğrudan Görsel Zeka (Visual Intelligence) Atama',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Eylem Düğmesi > Görsel Zeka',
        description:
          'Kamera Denetimi tuşu olmayan iPhone 16e’de Eylem Düğmesine basılı tutarak etraftaki nesneleri ve tabelaları anında analiz edip çevirebilirsiniz.'
      }
    ]
  },
  {
    id: 'iphone-13-mini',
    brandId: 'apple',
    deviceType: 'phone',
    name: 'iPhone 13 mini',
    series: 'iPhone 13 Serisi',
    releaseYear: 2021,
    era: '2020-2024',
    segment: 'Kompakt Amiral',
    summary:
      '5.4 inç boyutu ve sadece 141 gram ağırlığıyla Apple’ın ürettiği son gerçek tek el amiral gemisi kompakt akıllı telefon.',
    highlightSpec: '5.4" OLED · A15 Bionic · 141 g · Sensör Kaydırmalı OIS',
    specs: {
      display: {
        size: '5.4 inç',
        panel: 'Super Retina XDR OLED',
        resolution: '2340 x 1080 piksel (476 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '1200 nit',
        protection: 'Ceramic Shield'
      },
      performance: {
        chipset: 'Apple A15 Bionic',
        cpu: '6 Çekirdek',
        gpu: '4 Çekirdek Apple GPU',
        processNode: '5 nm'
      },
      memory: {
        ram: '4 GB LPDDR4X',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP, f/1.6, Sensör Kaydırmalı OIS',
        ultrawide: '12 MP, f/2.4, 120°',
        telephoto: 'Yok',
        front: '12 MP TrueDepth',
        video: '4K 60 fps Dolby Vision, Sinematik Mod'
      },
      battery: {
        capacity: '2438 mAh',
        wiredCharging: '20W Lightning PD',
        wirelessCharging: '12W MagSafe / 7.5W Qi',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '131.5 x 64.2 x 7.65 mm',
        weight: '141 g',
        materials: 'Alüminyum çerçeve, Ceramic Shield',
        waterResistance: 'IP68 (6m)',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.0, MagSafe',
        audioAndExtras: 'Tek elle tam erişilebilir 5.4" gövde'
      },
      software: {
        osAtLaunch: 'iOS 15 (iOS 18+ uyumlu)',
        updatePolicy: '6 yıl iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: '13mini-reachability',
        title: 'Tek El Erişilebilirlik Hareketi',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Erişilebilirlik > Dokunma > Ulaşılabilirlik',
        description:
          'Alt kenardan hafifçe aşağı kaydırarak ekranın üst kısmını başparmak hizasına indirir.'
      }
    ]
  },
  {
    id: 'iphone-12-pro-max',
    brandId: 'apple',
    deviceType: 'phone',
    name: 'iPhone 12 Pro Max',
    series: 'iPhone 12 Serisi',
    releaseYear: 2020,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Düz kenarlı paslanmaz çelik tasarıma dönüşü, MagSafe manyetik şarj ekosistemini, 5G’yi ve ilk sensör kaydırmalı OIS’i getiren model.',
    highlightSpec: '6.7" OLED · A14 Bionic · İlk MagSafe & 5G · LiDAR',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'Super Retina XDR OLED',
        resolution: '2778 x 1284 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '1200 nit',
        protection: 'Ceramic Shield (İlk Nesil)'
      },
      performance: {
        chipset: 'Apple A14 Bionic',
        cpu: '6 Çekirdek',
        gpu: '4 Çekirdek Apple GPU',
        processNode: '5 nm (Dünyada ilk)'
      },
      memory: {
        ram: '6 GB LPDDR4X',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP, f/1.6, Sensör Kaydırmalı OIS',
        ultrawide: '12 MP, f/2.4',
        telephoto: '12 MP 2.5x Optik, f/2.2',
        front: '12 MP TrueDepth',
        video: '4K 60 fps Dolby Vision HDR'
      },
      battery: {
        capacity: '3687 mAh',
        wiredCharging: '20W Lightning PD',
        wirelessCharging: '15W MagSafe',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '160.8 x 78.1 x 7.4 mm',
        weight: '228 g',
        materials: 'Paslanmaz çelik çerçeve, buzlu mat cam',
        waterResistance: 'IP68 (6m)',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.0, UWB U1',
        audioAndExtras: 'MagSafe mıknatıs halkası, LiDAR Tarayıcı, ProRAW'
      },
      software: {
        osAtLaunch: 'iOS 14 (iOS 18+ uyumlu)',
        updatePolicy: '6 yıl iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: '12pm-lidar-height',
        title: 'LiDAR Tarayıcı ile Kişi Boyunu Anında Santimetreyle Ölçme',
        category: 'Kamera',
        howToAccess: 'Ölçüm (Measure) uygulamasını açıp kişiyi kadraja alın',
        description:
          'LiDAR derinlik sensörü ayaktaki veya sandalyedeki kişinin başının üzerinde otomatik boy ölçüm çizgisi çıkarır.'
      }
    ]
  },
  {
    id: 'iphone-6s-2015',
    brandId: 'apple',
    deviceType: 'phone',
    name: 'iPhone 6s',
    series: 'iPhone 6s Serisi',
    releaseYear: 2015,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Basınca duyarlı 3D Touch ekranı, Live Photos, Taptic Engine, 7000 serisi bükülmez alüminyum kasası ve 7 yıllık iOS desteğiyle Apple’ın en uzun ömürlü klasiği.',
    highlightSpec: '4.7" 3D Touch · Apple A9 · 12 MP 4K · 3.5mm Jak',
    specs: {
      display: {
        size: '4.7 inç',
        panel: 'Retina IPS LCD (3D Touch Basınç Sensörlü)',
        resolution: '1334 x 750 piksel (326 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'İyon güçlendirilmiş cam'
      },
      performance: {
        chipset: 'Apple A9',
        cpu: '2 Çekirdek 1.85 GHz Twister',
        gpu: 'PowerVR GT7600',
        processNode: '14 nm / 16 nm'
      },
      memory: {
        ram: '2 GB LPDDR4',
        storage: '16 GB / 32 GB / 64 GB / 128 GB',
        storageType: 'NVMe (Akıllı telefonda ilk)',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP iSight, f/2.2',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP Retina Flash',
        video: '4K 30 fps (İlk 4K iPhone)'
      },
      battery: {
        capacity: '1715 mAh',
        wiredCharging: 'Lightning',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '138.3 x 67.1 x 7.1 mm',
        weight: '143 g',
        materials: '7000 serisi alüminyum gövde',
        waterResistance: 'Sızdırmazlık contası (resmi IP yok)',
        connectivity: '4.5G LTE, Wi-Fi ac, Bluetooth 4.2, NFC',
        audioAndExtras: '3.5mm kulaklık jakı bulunan son amiral iPhone, 3D Touch'
      },
      software: {
        osAtLaunch: 'iOS 9 (iOS 15.8’e kadar 7 yıl güncelleme)',
        updatePolicy: '7 yıl rekor iOS desteği'
      }
    },
    modelHiddenFeatures: [
      {
        id: '6s-3dtouch-trackpad',
        title: 'Klavyeye Sert Basarak İmleç Trackpad’ine Dönüştürme',
        category: 'Verimlilik',
        howToAccess: 'Yazı yazarken klavyenin herhangi bir yerine sertçe bastırın (3D Touch)',
        description:
          'Klavye harfleri kaybolur ve tüm klavye alanı hassas bir dizüstü trackpad’ine dönüşür; daha sert basarak metin seçer.'
      }
    ]
  },

  // ================= SAMSUNG EK TELEFONLAR =================
  {
    id: 'galaxy-s25-edge',
    brandId: 'samsung',
    deviceType: 'phone',
    name: 'Samsung Galaxy S25 Edge',
    series: 'Galaxy S Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      '5.8 mm ultra ince titanyum gövdesi ve sadece 163 gram ağırlığıyla 6.7 inç QHD+ ekran ve 200 MP ana kamerayı birleştiren tasarım odaklı 2025 amirali.',
    highlightSpec: '6.7" QHD+ AMOLED · 5.8 mm Titanyum (163 g) · SD 8 Elite · 200 MP',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'Dynamic AMOLED 2X (LTPO)',
        resolution: '3120 x 1440 piksel (QHD+)',
        refreshRate: '1–120 Hz',
        peakBrightness: '2600 nit',
        protection: 'Corning Gorilla Glass Ceramic 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite for Galaxy',
        cpu: '8 Çekirdek Oryon',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '200 MP, f/1.7, OIS',
        ultrawide: '12 MP, f/2.2, Otofokus',
        telephoto: 'Yok (2x Optik Kalite Sensör Zoom)',
        front: '12 MP',
        video: '8K 30fps, 4K 60fps 10-bit HDR'
      },
      battery: {
        capacity: '3900 mAh',
        wiredCharging: '25W Hızlı Şarj',
        wirelessCharging: '15W Kablosuz',
        reverseCharging: '4.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '158.2 x 75.6 x 5.8 mm',
        weight: '163 g',
        materials: 'Titanyum çerçeve, Gorilla Glass Victus 2 arka',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, UWB',
        audioAndExtras: '5.8 mm ultra ince titanyum gövde, Now Brief'
      },
      software: {
        osAtLaunch: 'Android 15 / One UI 7',
        updatePolicy: '7 yıl güncelleme garantisi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 's25e-200mp-crop',
        title: 'Telefoto Lens Olmadan 200 MP Sensörle 2x Optik Kalite Kırpma',
        category: 'Kamera',
        howToAccess: 'Kamera > 2x düğmesi / 200MP Yüksek Çözünürlük modu',
        description:
          'Ultra ince gövde nedeniyle periskop yerine 200 MP sensörün merkezindeki 50 MP/12 MP alanı kayıpsız kullanarak 2x portre çeker.'
      }
    ]
  },
  {
    id: 'galaxy-s25',
    brandId: 'samsung',
    deviceType: 'phone',
    name: 'Samsung Galaxy S25',
    series: 'Galaxy S Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Kompakt Amiral',
    summary:
      '6.2 inç kompakt boyutu, sadece 162 gram ağırlığı, 12 GB standart RAM’i ve Snapdragon 8 Elite işlemcisiyle tek elde üst düzey güç isteyenlerin favorisi.',
    highlightSpec: '6.2" 120Hz AMOLED · SD 8 Elite · 12 GB RAM · 162 g · 3x Optik',
    specs: {
      display: {
        size: '6.2 inç',
        panel: 'Dynamic AMOLED 2X (LTPO)',
        resolution: '2340 x 1080 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '2600 nit',
        protection: 'Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite for Galaxy',
        cpu: '8 Çekirdek Oryon',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.8, OIS',
        ultrawide: '12 MP, f/2.2',
        telephoto: '10 MP 3x Optik Telefoto, OIS',
        front: '12 MP Dual Pixel',
        video: '8K 30fps, 4K 60fps Galaxy Log'
      },
      battery: {
        capacity: '4000 mAh',
        wiredCharging: '25W Süper Hızlı Şarj',
        wirelessCharging: '15W Kablosuz',
        reverseCharging: '4.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '146.9 x 70.5 x 7.2 mm',
        weight: '162 g',
        materials: 'Armor Aluminum 2 çerçeve, Victus 2 cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, NFC',
        audioAndExtras: 'Samsung DeX, Ultrasonik parmak izi'
      },
      software: {
        osAtLaunch: 'Android 15 / One UI 7',
        updatePolicy: '7 yıl işletim sistemi ve güvenlik güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 's25-now-bar',
        title: 'Kilit Ekranında Canlı Takip Çubuğu (Now Bar)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Kilit Ekranı ve AOD > Now Bar',
        description:
          'Kilit ekranının alt kısmında canlı maç skorları, zamanlayıcı, ses kaydı ve navigasyonu tek dokunuşlu kapsülde gösterir.'
      }
    ]
  },
  {
    id: 'galaxy-a56-5g',
    brandId: 'samsung',
    deviceType: 'phone',
    name: 'Samsung Galaxy A56 5G',
    series: 'Galaxy A Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Orta-Üst Segment',
    summary:
      'Orta segmentte 45W hızlı şarj, 6 yıl Android/güvenlik güncellemesi, metal çerçeve ve Exynos 1580 (AMD RDNA grafikli) çipini sunan 2025 çok satanı.',
    highlightSpec: '6.7" 120Hz Super AMOLED · Exynos 1580 · 45W Şarj · 6 Yıl Güncelleme',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'Super AMOLED',
        resolution: '2340 x 1080 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '1900 nit',
        protection: 'Corning Gorilla Glass Victus+'
      },
      performance: {
        chipset: 'Samsung Exynos 1580',
        cpu: '8 Çekirdek',
        gpu: 'Xclipse 540 (AMD RDNA)',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.8, OIS',
        ultrawide: '12 MP, f/2.2',
        telephoto: '5 MP Makro',
        front: '12 MP (10-bit HDR)',
        video: '4K 30fps'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '45W Süper Hızlı Şarj 2.0',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '162.2 x 77.5 x 7.4 mm',
        weight: '198 g',
        materials: 'Fırçalanmış alüminyum çerçeve, Victus+ cam',
        waterResistance: 'IP67',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC',
        audioAndExtras: 'Awesome Intelligence AI araçları, Stereo hoparlör'
      },
      software: {
        osAtLaunch: 'Android 15 / One UI 7',
        updatePolicy: '6 yıl Android + 6 yıl güvenlik güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'a56-best-face',
        title: 'Hareketli Fotoğrafta En İyi Yüz (Best Face)',
        category: 'Kamera',
        howToAccess: 'Kamera > Hareketli Fotoğraf Açık > Galeri > En İyi Yüz Seç',
        description:
          'Grup fotoğrafında gözünü kırpan kişinin yüzünü, kare öncesi/sonrası kaydedilen anlardan en iyi gülümsemeyle değiştirir.'
      }
    ]
  },
  {
    id: 'galaxy-s24-fe',
    brandId: 'samsung',
    deviceType: 'phone',
    name: 'Samsung Galaxy S24 FE',
    series: 'Galaxy S FE Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      '7 yıl güncelleme garantisi, 3x gerçek optik telefoto lens, Samsung DeX, kablosuz şarj ve Exynos 2400e performansını ulaşılabilir fiyata sunar.',
    highlightSpec: '6.7" 120Hz AMOLED · Exynos 2400e · 3x Optik · 7 Yıl Güncelleme',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'Dynamic AMOLED 2X',
        resolution: '2340 x 1080 piksel',
        refreshRate: '60–120 Hz',
        peakBrightness: '1900 nit',
        protection: 'Corning Gorilla Glass Victus+'
      },
      performance: {
        chipset: 'Samsung Exynos 2400e',
        cpu: '10 Çekirdek',
        gpu: 'Xclipse 940 (Ray Tracing)',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 3.1 / 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.8, OIS',
        ultrawide: '12 MP, 123°',
        telephoto: '8 MP 3x Optik Telefoto, OIS',
        front: '10 MP',
        video: '8K 30fps, 4K 60fps'
      },
      battery: {
        capacity: '4700 mAh',
        wiredCharging: '25W Kablolu',
        wirelessCharging: '15W Kablosuz',
        reverseCharging: '4.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.0 x 77.3 x 8.0 mm',
        weight: '213 g',
        materials: 'Alüminyum çerçeve, Gorilla Glass Victus+',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, NFC',
        audioAndExtras: 'Samsung DeX, Galaxy AI tam paketi'
      },
      software: {
        osAtLaunch: 'Android 14 / One UI 6.1 (One UI 7 aldı)',
        updatePolicy: '7 yıl güncelleme garantisi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 's24fe-instant-slowmo',
        title: 'Herhangi Bir Videoya Parmağı Basılı Tutarak Ağır Çekim Uygulama',
        category: 'Kamera',
        howToAccess: 'Galeri > Video oynarken ekrana basılı tutun',
        description:
          'Normal 30/60 fps çekilmiş videonun arasına AI ile kare üreterek parmağınızı bastığınız anları akıcı ağır çekime dönüştürür.'
      }
    ]
  },
  {
    id: 'galaxy-note-20-ultra',
    brandId: 'samsung',
    deviceType: 'phone',
    name: 'Samsung Galaxy Note20 Ultra',
    series: 'Galaxy Note Serisi',
    releaseYear: 2020,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Galaxy Note adını taşıyan son amiral gemisi; 120 Hz LTPO ekranı, 9 ms gecikmeli S Pen, lazer odaklı 108 MP 5x periskop kamera ve microSD yuvasıyla efsaneleşti.',
    highlightSpec: '6.9" 120Hz LTPO · 108 MP + 5x Periskop · 9ms S Pen · microSD',
    specs: {
      display: {
        size: '6.9 inç',
        panel: 'Dynamic AMOLED 2X (LTPO)',
        resolution: '3088 x 1440 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '1500 nit',
        protection: 'Corning Gorilla Glass Victus (İlk)'
      },
      performance: {
        chipset: 'Exynos 990 / Snapdragon 865+',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G77 MP11 / Adreno 650',
        processNode: '7 nm'
      },
      memory: {
        ram: '8 GB / 12 GB LPDDR5',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 3.0',
        expandable: 'microSDXC (1 TB)'
      },
      camera: {
        main: '108 MP, f/1.8, Lazer Otofokus, OIS',
        ultrawide: '12 MP, f/2.2',
        telephoto: '12 MP 5x Optik Periskop (50x Space Zoom)',
        front: '10 MP Dual Pixel',
        video: '8K 24fps (21:9 sinema oranı), Pro Video'
      },
      battery: {
        capacity: '4500 mAh',
        wiredCharging: '25W Kablolu',
        wirelessCharging: '15W Kablosuz',
        reverseCharging: '4.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '164.8 x 77.2 x 8.1 mm',
        weight: '208 g',
        materials: 'Paslanmaz çelik çerçeve, Mystic Bronze mat cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.0, UWB (İlk Android)',
        audioAndExtras: '9 ms S Pen, Kablosuz Samsung DeX, Pro Video mikrofon seçici'
      },
      software: {
        osAtLaunch: 'Android 10 / One UI 2.5 (Android 13’e kadar)',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'n20u-pro-mic-source',
        title: 'Video Çekiminde Ön, Arka veya Bluetooth Kulaklık Mikrofonu Seçme',
        category: 'Kamera',
        howToAccess: 'Kamera > Daha Fazla > Pro Video > Mik (Mic)',
        description:
          'Röportaj çekerken ses kaynağını telefonun önü, arkası, ikisi birden veya Galaxy Buds kulaklığınızın mikrofonu olarak seçebilirsiniz.'
      }
    ]
  },
  {
    id: 'galaxy-s5-2014',
    brandId: 'samsung',
    deviceType: 'phone',
    name: 'Samsung Galaxy S5',
    series: 'Galaxy S Serisi',
    releaseYear: 2014,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Çıkarılabilir pili ve microSD yuvasını IP67 suya dayanıklılıkla birleştiren son amiral Galaxy, ayrıca ilk nabız sensörlü ve USB 3.0 Micro-B portlu model.',
    highlightSpec: '5.1" Super AMOLED · SD 801 · Çıkarılabilir Pil + IP67 · Nabız Sensörü',
    specs: {
      display: {
        size: '5.1 inç',
        panel: 'Super AMOLED',
        resolution: '1920 x 1080 piksel (432 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '698 nit',
        protection: 'Corning Gorilla Glass 3'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 801 / Exynos 5422',
        cpu: '4 Çekirdek 2.5 GHz Krait 400',
        gpu: 'Adreno 330',
        processNode: '28 nm'
      },
      memory: {
        ram: '2 GB',
        storage: '16 GB / 32 GB',
        storageType: 'eMMC 5.0',
        expandable: 'microSD (128 GB)'
      },
      camera: {
        main: '16 MP ISOCELL, f/2.2, Faz Algılamalı Otofokus',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '2 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '2800 mAh (Çıkarılabilir)',
        wiredCharging: 'USB 3.0 Micro-B (10W)',
        wirelessCharging: 'Opsiyonel kapakla Qi',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '142 x 72.5 x 8.1 mm',
        weight: '145 g',
        materials: 'Çıkarılabilir delikli dokulu polikarbonat kapak',
        waterResistance: 'IP67 (1m / 30 dk)',
        connectivity: '4G LTE, Wi-Fi ac MIMO, Bluetooth 4.0, IR Verici, NFC',
        audioAndExtras: '3.5mm jak, Arka Nabız Sensörü, Download Booster (Wi-Fi + LTE)'
      },
      software: {
        osAtLaunch: 'Android 4.4.2 KitKat (Android 6.0’a kadar)',
        updatePolicy: '2 yıl Android güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 's5-ultra-power-saving',
        title: 'Siyah-Beyaz Ultra Güç Tasarrufu (Kalan %10 Pille 24 Saat)',
        category: 'Batarya',
        howToAccess: 'Ayarlar > Güç Tasarrufu > Ultra Güç Tasarrufu Modu',
        description:
          'Super AMOLED piksellerini tamamen gri tonlamaya geçirip arka plan verilerini kapatarak %10 pil ile bir tam gün arama ve SMS imkanı tanır.'
      }
    ]
  },

  // ================= XIAOMI EK TELEFONLAR =================
  {
    id: 'xiaomi-15',
    brandId: 'xiaomi',
    deviceType: 'phone',
    name: 'Xiaomi 15',
    series: 'Xiaomi Amiral Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Kompakt Amiral',
    summary:
      '6.36 inçlik ince çerçeveli kompakt gövdeye Snapdragon 8 Elite, 5240 mAh silikon-karbon pil, 90W kablolu / 50W kablosuz şarj ve üçlü 50 MP Leica kamera sığdıran 2025 amirali.',
    highlightSpec: '6.36" LTPO AMOLED · SD 8 Elite · Üçlü 50 MP Leica · 5240 mAh 90W',
    specs: {
      display: {
        size: '6.36 inç',
        panel: 'M9 LTPO AMOLED (1.38 mm simetrik çerçeve)',
        resolution: '2670 x 1200 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '3200 nit',
        protection: 'Xiaomi Shield Glass'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite',
        cpu: '8 Çekirdek Oryon',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Light Fusion 900, f/1.62, OIS',
        ultrawide: '50 MP, 115°',
        telephoto: '50 MP 2.6x Yüzen Telefoto (10 cm Makro), OIS',
        front: '32 MP',
        video: '8K 30fps, 4K 60fps Dolby Vision'
      },
      battery: {
        capacity: '5240 mAh (Küresel) / 5400 mAh',
        wiredCharging: '90W HyperCharge',
        wirelessCharging: '50W Kablosuz',
        reverseCharging: 'Ters kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '152.3 x 71.2 x 8.08 mm',
        weight: '191 g',
        materials: 'Mikro kavisli alüminyum çerçeve, mat cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 6.0, IR Verici',
        audioAndExtras: 'Ultrasonik parmak izi, USB 3.2 Gen 1 (5 Gbps)'
      },
      software: {
        osAtLaunch: 'Android 15 / HyperOS 2',
        updatePolicy: '4 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'x15-floating-macro',
        title: '60 mm Telefoto Lensle 10 cm Süper Makro Çekim',
        category: 'Kamera',
        howToAccess: 'Kamera > Süper Makro simgesi veya 2.6x’te yakınlaşın',
        description:
          'Yüzen odaklama lens grubu sayesinde böcek veya saat mekanizması gibi objelere gölgeniz düşmeden uzaktan telefoto makro çekersiniz.'
      }
    ]
  },
  {
    id: 'poco-f7-ultra',
    brandId: 'xiaomi',
    deviceType: 'phone',
    name: 'POCO F7 Ultra',
    series: 'POCO F Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Oyun',
    summary:
      'POCO tarihindeki ilk gerçek "Ultra" model; Snapdragon 8 Elite + VisionBoost D7 grafik çipi, 2K 120 Hz AMOLED, 2.5x telefoto, 120W/50W şarj ve IP68 korumasıyla gelir.',
    highlightSpec: '6.67" 2K AMOLED · SD 8 Elite + D7 Çip · 120W/50W · IP68',
    specs: {
      display: {
        size: '6.67 inç',
        panel: '2K Flow AMOLED',
        resolution: '3200 x 1440 piksel',
        refreshRate: '120 Hz (3840Hz PWM)',
        peakBrightness: '3200 nit',
        protection: 'POCO Shield Glass'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite + VisionBoost D7',
        cpu: '8 Çekirdek Oryon',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 4.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Light Fusion 800, f/1.6, OIS',
        ultrawide: '32 MP',
        telephoto: '50 MP 2.5x Yüzen Telefoto (10 cm Makro), OIS',
        front: '32 MP',
        video: '8K 24fps, 4K 60fps'
      },
      battery: {
        capacity: '5300 mAh',
        wiredCharging: '120W HyperCharge (34 dk %100)',
        wirelessCharging: '50W Kablosuz HyperCharge',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '160.3 x 75.0 x 8.4 mm',
        weight: '212 g',
        materials: 'Metal çerçeve, çift tonlu cam arka',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 6.0, IR Verici',
        audioAndExtras: 'Ultrasonik parmak izi, LiquidCool 4.0, Smart Frame Rate'
      },
      software: {
        osAtLaunch: 'Android 15 / HyperOS 2',
        updatePolicy: '4 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'pf7u-visionboost-2k',
        title: 'VisionBoost D7 Çipi ile Oyunlarda 2K Süper Çözünürlük + 120 FPS',
        category: 'Geliştirici',
        howToAccess: 'Oyun içinde sol kenar > Game Turbo > VisionBoost D7',
        description:
          'Özel yardımcı ekran çipi ile 720p/1080p işlenen oyunları ana GPU’yu yormadan 2K keskinliğe ve 120 FPS’e yükseltir.'
      }
    ]
  },
  {
    id: 'redmi-note-13-pro-plus',
    brandId: 'xiaomi',
    deviceType: 'phone',
    name: 'Redmi Note 13 Pro+ 5G',
    series: 'Redmi Note Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      'Redmi Note serisine ilk kez kavisli 1.5K AMOLED ekran, IP68 su/toz direnci, 200 MP OIS kamera ve 120W HyperCharge (19 dk) getiren dönüm noktası orta segment model.',
    highlightSpec: '6.67" Kavisli 1.5K AMOLED · 200 MP OIS · 120W · IP68',
    specs: {
      display: {
        size: '6.67 inç',
        panel: 'Kavisli CrystalRes AMOLED',
        resolution: '2712 x 1220 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '1800 nit',
        protection: 'Corning Gorilla Glass Victus'
      },
      performance: {
        chipset: 'MediaTek Dimensity 7200-Ultra',
        cpu: '8 Çekirdek (2.8 GHz)',
        gpu: 'Mali-G610 MC4',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB LPDDR5',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '200 MP Samsung HP3, f/1.65, OIS (4x Kayıpsız Zoom)',
        ultrawide: '8 MP',
        telephoto: '2 MP Makro',
        front: '16 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '120W HyperCharge (19 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '161.4 x 74.2 x 8.9 mm',
        weight: '204.5 g',
        materials: 'Gorilla Glass Victus ön, cam veya vegan deri arka',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, IR Verici, NFC',
        audioAndExtras: 'Ekran altı kalp atışı ölçen optik parmak izi'
      },
      software: {
        osAtLaunch: 'Android 13 / MIUI 14 (HyperOS 2 aldı)',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'rn13pp-heart-rate',
        title: 'Parmak İzi Sensörüyle Kalp Atış Hızı Ölçümü',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ek Ayarlar > Kalp Atış Hızı',
        description:
          'Ekran altı optik parmak izi okuyucusunu nabız sensörü olarak kullanarak 15 saniyede kalp ritminizi ölçer.'
      }
    ]
  },
  {
    id: 'xiaomi-mi-mix-2016',
    brandId: 'xiaomi',
    deviceType: 'phone',
    name: 'Xiaomi Mi MIX',
    series: 'Mi MIX Konsept Serisi',
    releaseYear: 2016,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Philippe Starck tasarımlı seramik gövdesi ve üç tarafı tamamen çerçevesiz %91.3 ekran/gövde oranıyla modern tam ekran (bezel-less) akımını başlatan devrimci cihaz.',
    highlightSpec: '6.4" Çerçevesiz IPS · Seramik Kasa · Piezoelektrik Ahize · SD 821',
    specs: {
      display: {
        size: '6.4 inç (17:9)',
        panel: 'IPS LCD (İlk 3 tarafı çerçevesiz)',
        resolution: '2040 x 1080 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Sertleştirilmiş cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 821',
        cpu: '4 Çekirdek Kryo',
        gpu: 'Adreno 530',
        processNode: '14 nm'
      },
      memory: {
        ram: '4 GB / 6 GB LPDDR4',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 2.0',
        expandable: 'Yok'
      },
      camera: {
        main: '16 MP, f/2.0, PDAF',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP (Alt sağ çerçeveye gizlenmiş)',
        video: '4K 30fps'
      },
      battery: {
        capacity: '4400 mAh',
        wiredCharging: '18W Quick Charge 3.0',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '158.8 x 81.9 x 7.9 mm',
        weight: '209 g',
        materials: 'Zirkonya seramik çerçeve ve arka kapak (18K altın kamera halkası)',
        waterResistance: 'Yok',
        connectivity: '4.5G LTE, Wi-Fi ac, Bluetooth 4.2, NFC',
        audioAndExtras: 'Konsol piezoelektrik seramik ahize, Ultrasonik yakınlık sensörü'
      },
      software: {
        osAtLaunch: 'Android 6.0 / MIUI 8',
        updatePolicy: 'MIUI 11’e kadar resmi güncelleme'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'mimix-upside-selfie',
        title: 'Ön Kamera Altta Olduğu İçin Telefonu Ters Çevirip Selfie Çekme',
        category: 'Kamera',
        howToAccess: 'Ön kamerayı açıp telefonu 180° baş aşağı çevirin',
        description:
          'Kamera alt çerçevede olduğundan, telefonu ters çevirdiğinizde deklanşör ve arayüz otomatik ters dönerek normal göz hizasında selfie çekmenizi sağlar.'
      }
    ]
  },

  // ================= HUAWEI & GOOGLE & ONEPLUS EK =================
  {
    id: 'huawei-mate-x6',
    brandId: 'huawei',
    deviceType: 'phone',
    name: 'Huawei Mate X6',
    series: 'Mate Katlanabilir',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Katlanabilir',
    summary:
      'Açıldığında 4.6 mm inceliğinde, 2. Nesil Kunlun Glass dış ekranlı, fiziksel f/1.4–f/4.0 değişken diyaframlı ve 4 cm tele-makro periskoplu ultra ince katlanabilir.',
    highlightSpec: '7.93" + 6.45" LTPO OLED · 4.6 mm Açık · Değişken Diyafram · IPX8',
    specs: {
      display: {
        size: '7.93 inç (İç) + 6.45 inç (Dış)',
        panel: 'LTPO OLED',
        resolution: '2440 x 2240 (İç) / 2440 x 1080 (Dış)',
        refreshRate: '1–120 Hz',
        peakBrightness: '2500 nit (Dış)',
        protection: '2. Nesil Kunlun Glass'
      },
      performance: {
        chipset: 'Huawei Kirin 9020',
        cpu: '8 Çekirdek',
        gpu: 'Maleoon 920',
        processNode: '7 nm'
      },
      memory: {
        ram: '12 GB / 16 GB',
        storage: '512 GB / 1 TB',
        storageType: 'UFS',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Ultra Chroma, f/1.4–f/4.0 Değişken Diyafram, OIS',
        ultrawide: '40 MP, f/2.2',
        telephoto: '48 MP 4x Periskop Tele-Makro, OIS',
        front: '8 MP (İç) + 8 MP (Dış)',
        video: '4K 60fps HDR Vivid'
      },
      battery: {
        capacity: '5110 mAh (Küresel)',
        wiredCharging: '66W SuperCharge',
        wirelessCharging: '50W Kablosuz',
        reverseCharging: '7.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '4.6 mm (Açık) / 9.85 mm (Katlı)',
        weight: '239 g',
        materials: 'Havacılık alüminyumu, karbon fiber destek, vegan deri/fiberglas',
        waterResistance: 'IPX8 (2 metre)',
        connectivity: 'Wi-Fi 6, Bluetooth 5.2, IR Verici, NFC',
        audioAndExtras: '3 uygulamayı aynı anda çalıştıran Live Multi-task'
      },
      software: {
        osAtLaunch: 'EMUI 15 / HarmonyOS 4.3',
        updatePolicy: 'HarmonyOS Next uyumlu'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'matex6-live-multitask',
        title: 'İç Ekranda 3 Uygulamayı Yatay Kaydırmalı Tam Pencere Yönetme',
        category: 'Verimlilik',
        howToAccess: 'İç ekranda uygulama açıkken kenardan çekip 2. ve 3. pencereyi sürükleyin',
        description:
          'Uygulamaları küçültmeden biri ana odakta diğer ikisi kenarda hazır bekleyen üçlü çoklu görev düzeni kurar.'
      }
    ]
  },
  {
    id: 'huawei-p40-pro',
    brandId: 'huawei',
    deviceType: 'phone',
    name: 'Huawei P40 Pro',
    series: 'P Serisi',
    releaseYear: 2020,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Dört kenarı kavisli Overflow ekranı, 50 MP 1/1.28" RYYB dev sensörü ve kızılötesi 3D yüz tanımayı birleştiren 2020 kamera amirali.',
    highlightSpec: '6.58" 90Hz OLED · Kirin 990 5G · 50 MP RYYB + 5x Periskop · 3D Face ID',
    specs: {
      display: {
        size: '6.58 inç',
        panel: 'Dört Kavisli OLED (Akustik Ekran)',
        resolution: '2640 x 1200 piksel',
        refreshRate: '90 Hz',
        peakBrightness: '600 nit+',
        protection: 'Alüminosilikat cam'
      },
      performance: {
        chipset: 'Huawei Kirin 990 5G',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G76 MP16',
        processNode: '7 nm+ EUV'
      },
      memory: {
        ram: '8 GB',
        storage: '256 GB',
        storageType: 'UFS 3.0',
        expandable: 'NM Kart (256 GB)'
      },
      camera: {
        main: '50 MP RYYB (1/1.28"), f/1.9, OIS',
        ultrawide: '40 MP Cine Kamera, f/1.8',
        telephoto: '12 MP 5x RYYB Periskop, OIS',
        front: '32 MP Otofokus + Kızılötesi Derinlik Sensörü',
        video: '4K 60fps'
      },
      battery: {
        capacity: '4200 mAh',
        wiredCharging: '40W SuperCharge',
        wirelessCharging: '27W Kablosuz',
        reverseCharging: 'Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '158.2 x 72.6 x 8.95 mm',
        weight: '209 g',
        materials: 'Alüminyum çerçeve, mat buzlu cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 6+, Bluetooth 5.1, IR Verici',
        audioAndExtras: '3D Kızılötesi Yüz Tanıma, Golden Snap AI yansıma silme'
      },
      software: {
        osAtLaunch: 'Android 10 / EMUI 10.1 (HMS)',
        updatePolicy: 'EMUI güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p40p-remove-passersby',
        title: 'AI Yoldan Geçenleri ve Cam Yansımasını Silme',
        category: 'Kamera',
        howToAccess: 'Hareketli Fotoğraf Açık Çek > Galeri > Düzenle > Akıllı (AI) > Yoldan Geçenleri Sil',
        description:
          'Fotoğraf çekmeden 1 saniye önce ve sonraki kareleri analiz ederek kadraja giren yabancıları veya camdaki yansımaları tek dokunuşta temizler.'
      }
    ]
  },
  {
    id: 'google-pixel-10',
    brandId: 'google',
    deviceType: 'phone',
    name: 'Google Pixel 10',
    series: 'Pixel 10 Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Kompakt Amiral',
    summary:
      'Standart Pixel modeline ilk kez 5x optik telefoto lens getiren, TSMC 3 nm Tensor G5 işlemcili ve Pixelsnap Qi2 manyetik şarjlı 2025 modeli.',
    highlightSpec: '6.3" Actua OLED · Tensor G5 · İlk Standart 5x Telefoto · 7 Yıl Destek',
    specs: {
      display: {
        size: '6.3 inç',
        panel: 'Actua OLED',
        resolution: '2424 x 1080 piksel',
        refreshRate: '60–120 Hz',
        peakBrightness: '3000 nit',
        protection: 'Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Google Tensor G5 + Titan M2',
        cpu: '8 Çekirdek',
        gpu: 'Yeni Nesil GPU',
        processNode: '3 nm (TSMC)'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP, f/1.7, OIS',
        ultrawide: '13 MP',
        telephoto: '10.8 MP 5x Optik Telefoto (Standart Pixel’de ilk)',
        front: '10.5 MP Otofokus',
        video: '4K 60fps'
      },
      battery: {
        capacity: '4970 mAh',
        wiredCharging: '30W USB-C PD',
        wirelessCharging: '15W Qi2 Manyetik (Pixelsnap)',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '152.8 x 72.0 x 8.6 mm',
        weight: '204 g',
        materials: 'Saten alüminyum çerçeve, parlak cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 6E, Bluetooth 6.0, NFC',
        audioAndExtras: 'Ultrasonik parmak izi, 7 yıl Android güncellemesi'
      },
      software: {
        osAtLaunch: 'Android 16',
        updatePolicy: '7 yıl işletim sistemi ve güvenlik güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p10-magic-cue',
        title: 'Magic Cue (Mesaj ve Arama Sırasında Proaktif Bilgi Önerme)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Yapay Zeka > Magic Cue',
        description:
          'Bir arkadaşınız uçuş saatinizi sorduğunda veya otel ararken takvim/e-posta verinizi cihaz içinde tarayıp klavye üzerinde tek dokunuşlu yanıt hazırlar.'
      }
    ]
  },
  {
    id: 'google-pixel-2-xl',
    brandId: 'google',
    deviceType: 'phone',
    name: 'Google Pixel 2 XL',
    series: 'Pixel 2 Serisi',
    releaseYear: 2017,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Tek arka kamerayla HDR+ hesaplamalı fotoğrafçılık devrimini başlatan, "Panda" çift tonlu tasarımı ve sıkılabilir kenar (Active Edge) özelliğiyle klasikleşen model.',
    highlightSpec: '6.0" P-OLED · SD 835 · Tek Kamerayla Portre Devrimi · Active Edge',
    specs: {
      display: {
        size: '6.0 inç',
        panel: 'P-OLED',
        resolution: '2880 x 1440 piksel (538 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Corning Gorilla Glass 5'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 835 + Pixel Visual Core',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 540',
        processNode: '10 nm'
      },
      memory: {
        ram: '4 GB LPDDR4X',
        storage: '64 GB / 128 GB',
        storageType: 'UFS 2.1',
        expandable: 'Yok'
      },
      camera: {
        main: '12.2 MP Dual Pixel, f/1.8, OIS + EIS (Tek kamerayla AI Portre)',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '3520 mAh',
        wiredCharging: '18W USB-C PD',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '157.9 x 76.7 x 7.9 mm',
        weight: '175 g',
        materials: 'Hibrit kaplamalı alüminyum & cam pencere ("Panda")',
        waterResistance: 'IP67',
        connectivity: '4.5G LTE, Wi-Fi 5, Bluetooth 5.0, eSIM (İlklerden)',
        audioAndExtras: 'Active Edge sıkılabilir çerçeve, Ön stereo hoparlör'
      },
      software: {
        osAtLaunch: 'Android 8.0 Oreo (Android 11’e kadar)',
        updatePolicy: '3 yıl saf Android güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p2xl-now-playing',
        title: 'İnternetsiz Kilit Ekranında Çalan Şarkıyı Anında Tanıma (Now Playing)',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ses ve Titreşim > Şimdi Çalınıyor',
        description:
          'Kafede veya sokakta çalan şarkıyı internete bağlanmadan cihaz içindeki parmak izi veritabanıyla otomatik tanıyıp kilit ekranının altına yazar.'
      }
    ]
  },
  {
    id: 'oneplus-13r',
    brandId: 'oneplus',
    deviceType: 'phone',
    name: 'OnePlus 13R',
    series: 'R Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Orta-Üst Segment',
    summary:
      'Snapdragon 8 Gen 3, 6000 mAh dev pil, 80W SuperVOOC şarj, düz 120 Hz LTPO AMOLED ekran ve 50 MP 2x telefoto lensi fiyat/performans odağında sunar.',
    highlightSpec: '6.78" LTPO AMOLED · SD 8 Gen 3 · 6000 mAh 80W · 2x Telefoto',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'Düz LTPO 4.1 AMOLED',
        resolution: '2780 x 1264 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '4500 nit',
        protection: 'Gorilla Glass 7i'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 750',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony LYT-700, f/1.8, OIS',
        ultrawide: '8 MP',
        telephoto: '50 MP 2x Optik Telefoto',
        front: '16 MP',
        video: '4K 60fps'
      },
      battery: {
        capacity: '6000 mAh',
        wiredCharging: '80W SuperVOOC',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '161.7 x 75.8 x 8.0 mm',
        weight: '206 g',
        materials: 'Düz alüminyum çerçeve, Gorilla Glass 7i',
        waterResistance: 'IP65',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: 'Alert Slider, Eldiven Modu, Aqua Touch 2.0'
      },
      software: {
        osAtLaunch: 'Android 15 / OxygenOS 15',
        updatePolicy: '4 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'op13r-aqua-touch',
        title: 'Yağmurda ve Islak Parmakla Hatasız Dokunmatik (Aqua Touch 2.0)',
        category: 'Sistem',
        howToAccess: 'Otomatik ıslak ekran algılama algoritması',
        description:
          'Ekran üzerinde su damlaları varken veya eldiven takılıyken yanlış dokunmaları filtreleyip gerçek parmak hareketlerini algılar.'
      }
    ]
  },
  {
    id: 'oneplus-one-2014',
    brandId: 'oneplus',
    deviceType: 'phone',
    name: 'OnePlus One',
    series: 'Amiral Serisi',
    releaseYear: 2014,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Yarı fiyatına sunduğu Snapdragon 801 donanımı, zımpara dokulu Sandstone Black arka kapağı ve CyanogenMod 11S yazılımıyla "Amiral Gemisi Katili" kavramını doğuran ilk OnePlus.',
    highlightSpec: '5.5" 1080p IPS · SD 801 · Sandstone Black · CyanogenMod 11S',
    specs: {
      display: {
        size: '5.5 inç',
        panel: 'LTPS IPS LCD',
        resolution: '1920 x 1080 piksel (401 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '480 nit',
        protection: 'Corning Gorilla Glass 3'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 801',
        cpu: '4 Çekirdek 2.5 GHz Krait 400',
        gpu: 'Adreno 330',
        processNode: '28 nm'
      },
      memory: {
        ram: '3 GB LPDDR3',
        storage: '16 GB / 64 GB',
        storageType: 'eMMC 5.0',
        expandable: 'Yok'
      },
      camera: {
        main: '13 MP Sony IMX214, f/2.0, Çift LED',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP',
        video: '4K UHD & 4K DCI 24fps'
      },
      battery: {
        capacity: '3100 mAh',
        wiredCharging: 'Micro-USB 10W',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '152.9 x 75.9 x 8.9 mm',
        weight: '162 g',
        materials: 'Magnezyum çerçeve, zımpara dokulu Sandstone Black arka',
        waterResistance: 'Yok',
        connectivity: '4G LTE, Wi-Fi ac, Bluetooth 4.1, NFC',
        audioAndExtras: 'Alt çift mono hoparlör (JBL), Kapasitif/Sanal tuş seçimi'
      },
      software: {
        osAtLaunch: 'CyanogenMod 11S (Android 4.4.2)',
        updatePolicy: 'Topluluk & OxygenOS ROM mirası'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'opo-screen-off-v',
        title: 'Kapalı Ekrana V veya O Çizerek Fener ve Kamera Açma',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Hareketler > Kapalı Ekran Hareketleri',
        description:
          'Telefonun ekranı kapalıyken parmağınızla V çizdiğinizde el fenerini, O çizdiğinizde ise doğrudan kamerayı açan kült OnePlus hareketi.'
      }
    ]
  }
];
