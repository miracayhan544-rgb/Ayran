import { PhoneModel } from '../types/phone';

export const TABLETS_DATA: PhoneModel[] = [
  // ================= APPLE iPAD TABLETLER =================
  {
    id: 'ipad-pro-m4-13',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad Pro 13" (M4)',
    series: 'iPad Pro Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Yalnızca 5.1 mm inceliğiyle Apple’ın ürettiği en ince cihaz; Tandem OLED Ultra Retina XDR ekranı, Apple M4 işlemcisi ve Apple Pencil Pro desteğiyle profesyonel tablet zirvesi.',
    highlightSpec: '13" Tandem OLED · Apple M4 (3 nm) · 5.1 mm İncelik · Thunderbolt 4',
    specs: {
      display: {
        size: '13.0 inç',
        panel: 'Tandem OLED Ultra Retina XDR (Nano-Texture seçeneği)',
        resolution: '2752 x 2064 piksel (264 ppi)',
        refreshRate: '10–120 Hz ProMotion',
        peakBrightness: '1600 nit HDR (1000 nit tam ekran)',
        protection: 'Oleofobik kaplama (Opsiyonel Nano-Texture mat cam)'
      },
      performance: {
        chipset: 'Apple M4',
        cpu: '9 veya 10 Çekirdek',
        gpu: '10 Çekirdek GPU (Donanımsal Ray Tracing)',
        processNode: '3 nm (2. Nesil)'
      },
      memory: {
        ram: '8 GB (256/512) / 16 GB (1TB/2TB)',
        storage: '256 GB / 512 GB / 1 TB / 2 TB',
        storageType: 'NVMe SSD',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP Geniş, f/1.8 + LiDAR Tarayıcı + True Tone Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Yatay Kenarda Center Stage TrueDepth',
        video: '4K 60 fps ProRes (Harici SSD’ye kayıt)'
      },
      battery: {
        capacity: '10.290 mAh (38.99 Wh)',
        wiredCharging: '30W+ USB-C / Thunderbolt PD',
        wirelessCharging: 'Yok (Apple Pencil Pro kablosuz şarj)',
        reverseCharging: 'USB-C üzerinden iPhone şarjı'
      },
      buildAndConnectivity: {
        dimensions: '281.6 x 215.5 x 5.1 mm',
        weight: '579 g (Wi-Fi) / 582 g (5G)',
        materials: '%100 geri dönüştürülmüş yekpare alüminyum',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6E, 5G (eSIM), Bluetooth 5.3, Thunderbolt / USB 4 (40 Gbps)',
        audioAndExtras: '4 Stüdyo hoparlör, Face ID (Yatay), Magic Keyboard mıknatıs'
      },
      software: {
        osAtLaunch: 'iPadOS 17.5 (iPadOS 18+ uyumlu)',
        updatePolicy: '7+ yıl iPadOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ipm4-pencil-squeeze',
        title: 'Apple Pencil Pro Sıkma (Squeeze) ve Namlu Döndürme (Barrel Roll)',
        category: 'Verimlilik',
        howToAccess: 'Apple Pencil Pro gövdesini hafifçe sıkın veya döndürün',
        description:
          'Kalemi sıktığınızda imlecin etrafında araç paleti açılır; kalemi parmaklarınızla çevirerek kaligrafi ve fırça açısını gerçek mürekkep gibi döndürürsünüz.'
      }
    ]
  },
  {
    id: 'ipad-pro-m4-11',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad Pro 11" (M4)',
    series: 'iPad Pro Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '444 gram ağırlık ve 5.3 mm incelikte Tandem OLED ekran ile Apple M4 masaüstü sınıfı işlemciyi taşınabilir 11 inç formda sunar.',
    highlightSpec: '11" Tandem OLED · Apple M4 · 444 g · Thunderbolt 4',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'Tandem OLED Ultra Retina XDR',
        resolution: '2420 x 1668 piksel (264 ppi)',
        refreshRate: '10–120 Hz ProMotion',
        peakBrightness: '1600 nit HDR',
        protection: 'Oleofobik cam (Nano-Texture seçeneği)'
      },
      performance: {
        chipset: 'Apple M4',
        cpu: '9 veya 10 Çekirdek',
        gpu: '10 Çekirdek GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '8 GB / 16 GB',
        storage: '256 GB / 512 GB / 1 TB / 2 TB',
        storageType: 'NVMe SSD',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP Geniş + LiDAR Tarayıcı',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Yatay Center Stage',
        video: '4K 60 fps ProRes'
      },
      battery: {
        capacity: '8160 mAh (31.29 Wh)',
        wiredCharging: '30W+ USB-C PD',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C çıkışı'
      },
      buildAndConnectivity: {
        dimensions: '249.7 x 177.5 x 5.3 mm',
        weight: '444 g',
        materials: 'Yekpare alüminyum gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6E, 5G, Bluetooth 5.3, Thunderbolt 4',
        audioAndExtras: '4 hoparlör, Yatay Face ID, Hover kalem önizleme'
      },
      software: {
        osAtLaunch: 'iPadOS 17.5 (iPadOS 18+)',
        updatePolicy: '7+ yıl iPadOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ipm411-reference-mode',
        title: 'Renk Doğruluğu İçin Referans Modu (Reference Mode) & Sidecar',
        category: 'Geliştirici',
        howToAccess: 'Ayarlar > Ekran ve Parlaklık > İleri Düzey > Referans Modu',
        description:
          'MacBook Pro’nun yanında kablolu veya kablosuz ikinci renk kalibrasyon monitörü gibi çalışarak profesyonel kurgu ve renk derecelendirme sağlar.'
      }
    ]
  },
  {
    id: 'ipad-air-m3-13',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad Air 13" (M3)',
    series: 'iPad Air Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Tablet',
    summary:
      'Apple M3 çipini, donanımsal ışın izlemeyi, yatay Center Stage kamerayı ve 13 inç geniş çalışma alanını Pro fiyatına çıkmadan sunan 2025 iPad Air.',
    highlightSpec: '13" Liquid Retina · Apple M3 · 8 GB RAM · Apple Pencil Pro',
    specs: {
      display: {
        size: '13.0 inç',
        panel: 'Liquid Retina IPS LCD (P3 Geniş Renk)',
        resolution: '2732 x 2048 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '600 nit',
        protection: 'Yansıma önleyici kaplama'
      },
      performance: {
        chipset: 'Apple M3',
        cpu: '8 Çekirdek',
        gpu: '9 Çekirdek GPU (Ray Tracing)',
        processNode: '3 nm'
      },
      memory: {
        ram: '8 GB',
        storage: '128 GB / 256 GB / 512 GB / 1 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP Geniş, f/1.8',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Yatay Center Stage',
        video: '4K 60 fps'
      },
      battery: {
        capacity: '9705 mAh (36.59 Wh)',
        wiredCharging: '20W+ USB-C PD',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C çıkışı'
      },
      buildAndConnectivity: {
        dimensions: '280.6 x 214.9 x 6.1 mm',
        weight: '616 g',
        materials: 'Yekpare alüminyum',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6E, 5G, Bluetooth 5.3, USB-C (10 Gbps)',
        audioAndExtras: 'Üst tuşta Touch ID, Yatay stereo hoparlörler'
      },
      software: {
        osAtLaunch: 'iPadOS 18.3',
        updatePolicy: '6–7 yıl iPadOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'airm3-stage-manager',
        title: 'Harici 6K Monitöre Tam Ekran Masaüstü Yansıtma (Stage Manager)',
        category: 'Verimlilik',
        howToAccess: 'Denetim Merkezi > Sahne Yöneticisi (Stage Manager) > USB-C Monitör Bağla',
        description:
          'USB-C ile harici monitöre bağlandığında ekranı aynalamak yerine bağımsız 6K çalışma alanı olarak kullanır.'
      }
    ]
  },
  {
    id: 'ipad-mini-a17-pro',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad mini (A17 Pro)',
    series: 'iPad mini Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '8.3 inç cep/çanta boyutunda gövdeye A17 Pro işlemci, 8 GB RAM, Apple Intelligence ve Apple Pencil Pro desteği ekleyen en kompakt güçlü iPad.',
    highlightSpec: '8.3" Liquid Retina · A17 Pro · 8 GB RAM · 293 g · Pencil Pro',
    specs: {
      display: {
        size: '8.3 inç',
        panel: 'Liquid Retina IPS LCD',
        resolution: '2266 x 1488 piksel (326 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Yansıma önleyici kaplama'
      },
      performance: {
        chipset: 'Apple A17 Pro',
        cpu: '6 Çekirdek',
        gpu: '5 Çekirdek GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '8 GB',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP, f/1.8, True Tone Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Ultra Geniş Center Stage',
        video: '4K 60 fps'
      },
      battery: {
        capacity: '5078 mAh (19.3 Wh)',
        wiredCharging: '20W USB-C PD',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '195.4 x 134.8 x 6.3 mm',
        weight: '293 g',
        materials: 'Alüminyum yekpare gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6E, 5G (eSIM), Bluetooth 5.3, USB-C (10 Gbps)',
        audioAndExtras: 'Touch ID güç tuşunda, Apple Pencil Pro uyumlu'
      },
      software: {
        osAtLaunch: 'iPadOS 18',
        updatePolicy: '6+ yıl iPadOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ipmini7-math-notes',
        title: 'El Yazısı Matematik Notları (Math Notes) ile Anlık Denklem Çözme',
        category: 'Verimlilik',
        howToAccess: 'Notlar veya Hesap Makinesi > Matematik Notları > Kalemle "=" yazın',
        description:
          'Kalemle deftere yazar gibi formül veya denklem yazıp "=" işareti koyduğunuzda kendi el yazınızla sonucu anında hesaplar.'
      }
    ]
  },

  // ================= SAMSUNG GALAXY TAB TABLETLER =================
  {
    id: 'galaxy-tab-s10-ultra',
    brandId: 'samsung',
    deviceType: 'tablet',
    name: 'Samsung Galaxy Tab S10 Ultra',
    series: 'Galaxy Tab S Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '14.6 inç yansıma önleyici Dynamic AMOLED 2X dev ekranı, kutudan çıkan IP68 S Pen kalemi, 11.200 mAh pili ve 7 yıl güncellemesiyle Android tablet amiral gemisi.',
    highlightSpec: '14.6" 120Hz AMOLED · Dimensity 9300+ · IP68 + S Pen · 11.200 mAh',
    specs: {
      display: {
        size: '14.6 inç',
        panel: 'Dynamic AMOLED 2X (Yansıma Önleyici Anti-Reflective)',
        resolution: '2960 x 1848 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '930 nit',
        protection: 'Yansıma önleyici cam'
      },
      performance: {
        chipset: 'MediaTek Dimensity 9300+',
        cpu: '8 Çekirdek',
        gpu: 'Immortalis-G720 MC12',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB / 16 GB',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'microSDXC (1.5 TB)’a kadar'
      },
      camera: {
        main: '13 MP + 8 MP Ultra Geniş',
        ultrawide: '8 MP',
        telephoto: 'Yok',
        front: '12 MP + 12 MP Ultra Geniş Çift Kamera',
        video: '4K 30fps'
      },
      battery: {
        capacity: '11.200 mAh',
        wiredCharging: '45W Süper Hızlı Şarj 2.0',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '326.4 x 208.6 x 5.4 mm',
        weight: '718 g',
        materials: 'Gelişmiş Armor Aluminum',
        waterResistance: 'IP68 (Tablet ve S Pen)',
        connectivity: 'Wi-Fi 7, 5G (Opsiyonel), Bluetooth 5.3',
        audioAndExtras: '4 AKG hoparlör, Kutu içi Bluetooth S Pen, Samsung DeX'
      },
      software: {
        osAtLaunch: 'Android 14 / One UI 6.1.1 (One UI 7 aldı)',
        updatePolicy: '7 yıl işletim sistemi ve güvenlik güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tabs10u-second-screen',
        title: 'Windows PC İçin Kablosuz İkinci Ekran + S Pen Çizim Tableti',
        category: 'Verimlilik',
        howToAccess: 'Hızlı Panel > İkinci Ekran > Windows’ta Win + K tuşları',
        description:
          'Tableti kablosuz olarak Windows bilgisayarınıza ikinci monitör yapar ve Photoshop/AutoCAD üzerinde S Pen basınç hassasiyetiyle çizim yapmanızı sağlar.'
      }
    ]
  },
  {
    id: 'galaxy-tab-s10-plus',
    brandId: 'samsung',
    deviceType: 'tablet',
    name: 'Samsung Galaxy Tab S10+',
    series: 'Galaxy Tab S Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '12.4 inç yansıma önleyici AMOLED ekranı, 5.6 mm ince IP68 alüminyum kasası ve kutudan çıkan S Pen ile en dengeli üst düzey Android tablet.',
    highlightSpec: '12.4" 120Hz AMOLED · Dimensity 9300+ · 10.090 mAh 45W · IP68',
    specs: {
      display: {
        size: '12.4 inç',
        panel: 'Dynamic AMOLED 2X (Anti-Reflective)',
        resolution: '2800 x 1752 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '650 nit+',
        protection: 'Yansıma önleyici kaplama'
      },
      performance: {
        chipset: 'MediaTek Dimensity 9300+',
        cpu: '8 Çekirdek',
        gpu: 'Immortalis-G720 MC12',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 4.0',
        expandable: 'microSDXC (1.5 TB)'
      },
      camera: {
        main: '13 MP + 8 MP Ultra Geniş',
        ultrawide: '8 MP',
        telephoto: 'Yok',
        front: '12 MP Ultra Geniş',
        video: '4K 30fps'
      },
      battery: {
        capacity: '10.090 mAh',
        wiredCharging: '45W Süper Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '285.4 x 185.4 x 5.6 mm',
        weight: '571 g',
        materials: 'Armor Aluminum gövde',
        waterResistance: 'IP68 (S Pen dahil)',
        connectivity: 'Wi-Fi 6E, 5G (Opsiyonel), Bluetooth 5.3',
        audioAndExtras: '4 AKG hoparlör, Samsung DeX, Galaxy AI Tuşlu Klavye desteği'
      },
      software: {
        osAtLaunch: 'Android 14 / One UI 6.1.1',
        updatePolicy: '7 yıl güncelleme garantisi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tabs10p-multicontrol',
        title: 'Galaxy Telefonun Klavye ve Faresini Tabletle Tek İmlecte Birleştirme',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Bağlı Cihazlar > Çoklu Kontrol (Multi Control)',
        description:
          'Tabletin faresiyle imleci ekran kenarından Galaxy telefonunuza geçirip fotoğraf ve metinleri sürükle-bırak ile aktarabilirsiniz.'
      }
    ]
  },
  {
    id: 'galaxy-tab-s9-fe',
    brandId: 'samsung',
    deviceType: 'tablet',
    name: 'Samsung Galaxy Tab S9 FE',
    series: 'Galaxy Tab S FE',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Orta segmentte IP68 su/toz direnci ve kutu içi S Pen kalemini bir arada sunan öğrenci ve not alma odaklı popüler tablet.',
    highlightSpec: '10.9" 90Hz LCD · Exynos 1380 · IP68 + S Pen Dahil · 8000 mAh',
    specs: {
      display: {
        size: '10.9 inç',
        panel: 'IPS LCD (Vision Booster)',
        resolution: '2304 x 1440 piksel',
        refreshRate: '90 Hz',
        peakBrightness: '720 nit',
        protection: 'Sertleştirilmiş cam'
      },
      performance: {
        chipset: 'Samsung Exynos 1380',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G68 MP5',
        processNode: '5 nm'
      },
      memory: {
        ram: '6 GB / 8 GB',
        storage: '128 GB / 256 GB',
        storageType: 'UFS',
        expandable: 'microSD (1 TB)'
      },
      camera: {
        main: '8 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Ultra Geniş',
        video: '4K 30fps'
      },
      battery: {
        capacity: '8000 mAh',
        wiredCharging: '45W Süper Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '254.3 x 165.8 x 6.5 mm',
        weight: '523 g',
        materials: 'Yekpare alüminyum gövde',
        waterResistance: 'IP68 (Kutu içi S Pen dahil)',
        connectivity: 'Wi-Fi 6, 5G (Opsiyonel), Bluetooth 5.3',
        audioAndExtras: 'Çift AKG hoparlör, Güç tuşunda parmak izi, DeX Modu'
      },
      software: {
        osAtLaunch: 'Android 13 / One UI 5.1.1 (One UI 7 aldı)',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tabs9fe-tablet-dex',
        title: 'Bilgisayara İhtiyaç Duymadan Tablet Üzerinde Masaüstü DeX Modu',
        category: 'Verimlilik',
        howToAccess: 'Hızlı Ayarlar > Samsung DeX > Yeni DeX / Klasik DeX',
        description:
          'Pencere boyutlandırılabilir görev çubuklu masaüstü arayüzüne doğrudan tablet ekranında geçiş yapar.'
      }
    ]
  },

  // ================= XIAOMI, HUAWEI, GOOGLE, ONEPLUS, OPPO, VIVO, HONOR TABLETLER =================
  {
    id: 'xiaomi-pad-7-pro',
    brandId: 'xiaomi',
    deviceType: 'tablet',
    name: 'Xiaomi Pad 7 Pro',
    series: 'Xiaomi Pad Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Tablet',
    summary:
      '11.2 inç 3.2K 144 Hz 3:2 ekran, Snapdragon 8s Gen 3, 50 MP arka / 32 MP ön kamera ve 67W HyperCharge ile gelen 2025 Xiaomi tableti.',
    highlightSpec: '11.2" 3.2K 144Hz · SD 8s Gen 3 · 8850 mAh 67W · Workstation Modu',
    specs: {
      display: {
        size: '11.2 inç (3:2 Oran)',
        panel: 'IPS LCD (Opsiyonel Nano Matte Cam)',
        resolution: '3200 x 2136 piksel (345 ppi)',
        refreshRate: '144 Hz adaptif',
        peakBrightness: '800 nit',
        protection: 'Corning Gorilla Glass 3 / Nano Matte'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8s Gen 3',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 735',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 4.0 (256/512)',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP + 2 MP Derinlik',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '32 MP (Her Zaman Açık FocusFrame)',
        video: '4K 60fps'
      },
      battery: {
        capacity: '8850 mAh',
        wiredCharging: '67W HyperCharge',
        wirelessCharging: 'Yok',
        reverseCharging: 'Ters kablolu'
      },
      buildAndConnectivity: {
        dimensions: '251.2 x 173.4 x 6.18 mm',
        weight: '500 g',
        materials: 'Yekpare alüminyum gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 7, Bluetooth 5.4, IR Verici, USB 3.2 Gen 1',
        audioAndExtras: '4 Dolby Atmos hoparlör, Focus Pen desteği, Workstation Modu'
      },
      software: {
        osAtLaunch: 'Android 15 / HyperOS 2',
        updatePolicy: '4 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'xpad7p-workstation',
        title: 'İş İstasyonu (Workstation) Modu ve Telefon Ekranını Tablete Yansıtma',
        category: 'Verimlilik',
        howToAccess: 'Kontrol Merkezi > İş İstasyonu Modu / Xiaomi Interconnectivity',
        description:
          'Uygulamaları masaüstü pencereleri gibi üst üste açar ve aynı Wi-Fi’daki Xiaomi telefonunuzun ekranını tablet içinde canlı kontrol etmenizi sağlar.'
      }
    ]
  },
  {
    id: 'xiaomi-pad-6',
    brandId: 'xiaomi',
    deviceType: 'tablet',
    name: 'Xiaomi Pad 6',
    series: 'Xiaomi Pad Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Snapdragon 870 stabilitesi, 144 Hz 2.8K ekranı, USB 3.2 HDMI çıkışı ve alüminyum unibody kasasıyla fiyat/performans efsanesi tablet.',
    highlightSpec: '11" 2.8K 144Hz · SD 870 · 8840 mAh 33W · USB 3.2 HDMI Çıkış',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'IPS LCD (Dolby Vision)',
        resolution: '2880 x 1800 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '550 nit',
        protection: 'Corning Gorilla Glass 3'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 870',
        cpu: '8 Çekirdek (3.2 GHz)',
        gpu: 'Adreno 650',
        processNode: '7 nm'
      },
      memory: {
        ram: '6 GB / 8 GB LPDDR5',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '13 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP FocusFrame',
        video: '4K 30fps'
      },
      battery: {
        capacity: '8840 mAh',
        wiredCharging: '33W Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '254.0 x 165.2 x 6.5 mm',
        weight: '490 g',
        materials: 'Yekpare alüminyum',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.2, USB 3.2 Gen 1 (4K TV çıkışı)',
        audioAndExtras: '4 Dolby Atmos hoparlör, Smart Pen 2. Nesil'
      },
      software: {
        osAtLaunch: 'Android 13 / MIUI Pad 14 (HyperOS 2 aldı)',
        updatePolicy: '2 yıl Android + 3 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'pad6-conference-tools',
        title: 'Görüntülü Görüşmelerde Otomatik Işık Doldurma ve Çeviri Araçları',
        category: 'Verimlilik',
        howToAccess: 'Görüntülü arama sırasında yan araç çubuğu > Konferans Araçları',
        description:
          'Karanlık odada ekran kenarlarını beyaz çerçeveyle aydınlatarak yüz ışığı sağlar ve odak takibini (FocusFrame) açar.'
      }
    ]
  },
  {
    id: 'huawei-matepad-pro-13-2-2025',
    brandId: 'huawei',
    deviceType: 'tablet',
    name: 'Huawei MatePad Pro 13.2" (2025)',
    series: 'MatePad Pro Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Tablet',
    summary:
      '5.5 mm incelik, 580 g hafiflik, göz yormayan PaperMatte Esnek OLED 144 Hz ekran, 10.100 mAh batarya ve 100W SuperCharge ile taşınabilir çizim stüdyosu.',
    highlightSpec: '13.2" PaperMatte OLED 144Hz · 5.5 mm (580 g) · 10.100 mAh 100W',
    specs: {
      display: {
        size: '13.2 inç',
        panel: 'Esnek OLED (PaperMatte Parlama Önleyici)',
        resolution: '2880 x 1920 piksel (3:2)',
        refreshRate: '144 Hz',
        peakBrightness: '1000 nit',
        protection: 'Kağıt dokulu nano aşındırma cam'
      },
      performance: {
        chipset: 'Huawei Kirin T92',
        cpu: '8 Çekirdek',
        gpu: 'Maleoon 920',
        processNode: '7 nm'
      },
      memory: {
        ram: '12 GB',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP + 8 MP Ultra Geniş',
        ultrawide: '8 MP',
        telephoto: 'Yok',
        front: '16 MP + ToF Sensörü',
        video: '4K 30fps'
      },
      battery: {
        capacity: '10.100 mAh (Çift hücre)',
        wiredCharging: '100W Huawei SuperCharge (40 dk %85)',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '289.1 x 196.1 x 5.5 mm',
        weight: '580 g',
        materials: 'Havacılık sınıfı fiberglas arka, metal çerçeve',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.2, NearLink (M-Pencil 3. Nesil)',
        audioAndExtras: 'GoPaint ücretsiz çizim stüdyosu, Masaüstü WPS Office'
      },
      software: {
        osAtLaunch: 'HarmonyOS 4.3',
        updatePolicy: 'HarmonyOS Next yükseltme uyumlu'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'mp132-nearlink-pencil',
        title: 'NearLink ile 10.000+ Basınç Kademeli Sıfır Gecikmeli Çizim',
        category: 'Verimlilik',
        howToAccess: 'M-Pencil (3. Nesil) eşleştirme + GoPaint uygulaması',
        description:
          'Bluetooth yerine NearLink kablosuz protokolünü kullanarak gerçek kağıt sürtünmesine sahip PaperMatte yüzeyde gecikmesiz profesyonel çizim sunar.'
      }
    ]
  },
  {
    id: 'huawei-matepad-11-5-s',
    brandId: 'huawei',
    deviceType: 'tablet',
    name: 'Huawei MatePad 11.5"S PaperMatte',
    series: 'MatePad Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Yansımanın %99’unu ortadan kaldıran yeni nesil PaperMatte 144 Hz ekranı, M-Pencil 3. nesil uyumu ve 8800 mAh piliyle not tutma ve okuma şampiyonu.',
    highlightSpec: '11.5" PaperMatte 144Hz · GoPaint · M-Pencil 3 · 8800 mAh',
    specs: {
      display: {
        size: '11.5 inç',
        panel: 'PaperMatte IPS LCD (3:2)',
        resolution: '2800 x 1840 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '500 nit',
        protection: 'Parlama önleyici kağıt dokulu cam'
      },
      performance: {
        chipset: 'Huawei Kirin 9000WL / 9000WM',
        cpu: '8 Çekirdek',
        gpu: 'Maleoon 910',
        processNode: '7 nm'
      },
      memory: {
        ram: '8 GB',
        storage: '256 GB',
        storageType: 'UFS',
        expandable: 'Yok'
      },
      camera: {
        main: '13 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP FollowCam',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '8800 mAh',
        wiredCharging: '22.5W SuperCharge',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '261.0 x 177.3 x 6.2 mm',
        weight: '510 g',
        materials: 'Yekpare metal gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.2, NearLink, USB 3.0',
        audioAndExtras: 'Huawei Notes sesli not eşleştirme, 4 hoparlör'
      },
      software: {
        osAtLaunch: 'HarmonyOS 4.2',
        updatePolicy: 'HarmonyOS güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'mp115s-audio-sync-notes',
        title: 'Ses Kaydıyla Senkronize El Yazısı Notu (Not Replay)',
        category: 'Verimlilik',
        howToAccess: 'Huawei Notes > Mikrofon kaydını başlatıp kalemle not alın',
        description:
          'Ders sonrasında aldığınız herhangi bir cümleye veya şekle dokunduğunuzda ses kaydı tam o satırı yazdığınız saniyeden çalmaya başlar.'
      }
    ]
  },
  {
    id: 'google-pixel-tablet',
    brandId: 'google',
    deviceType: 'tablet',
    name: 'Google Pixel Tablet',
    series: 'Pixel Tablet Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Manyetik şarjlı hoparlör standı (Charging Speaker Dock) ile evdeyken akıllı ev ekranına ve hoparlöre dönüşen saf Android’li Google tableti.',
    highlightSpec: '10.95" 2.5K LCD · Tensor G2 · Manyetik Hoparlör Dock · Chromecast',
    specs: {
      display: {
        size: '10.95 inç',
        panel: 'IPS LCD (USI 2.0 Kalem Desteği)',
        resolution: '2560 x 1600 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Lekeye dayanıklı kaplama'
      },
      performance: {
        chipset: 'Google Tensor G2 + Titan M2',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G710 MP7',
        processNode: '5 nm'
      },
      memory: {
        ram: '8 GB LPDDR5',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '8 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '7020 mAh (27 Wh)',
        wiredCharging: '15W Pogo Pin Dock veya USB-C',
        wirelessCharging: 'Manyetik Pogo Dock',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '258 x 169 x 8.1 mm',
        weight: '493 g',
        materials: 'Nano seramik kaplamalı alüminyum',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.2, UWB',
        audioAndExtras: 'Charging Speaker Dock (Hub Modu), Dahili Chromecast'
      },
      software: {
        osAtLaunch: 'Android 13 (Android 15/16 uyumlu)',
        updatePolicy: '5 yıl güncelleme desteği'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'pxtab-hub-cast',
        title: 'Dock’a Takılıyken Telefondan Tek Dokunuşla Chromecast Yayın Alma',
        category: 'Verimlilik',
        howToAccess: 'Stand üzerindeyken Hub Modu > Chromecast yerleşik alıcısı',
        description:
          'Google Nest Hub gibi davranarak telefonunuzdan YouTube/Spotify yayınını anında tablete aktarır ve oda dolusu hoparlörden çalar.'
      }
    ]
  },
  {
    id: 'oneplus-pad-2',
    brandId: 'oneplus',
    deviceType: 'tablet',
    name: 'OnePlus Pad 2',
    series: 'OnePlus Pad Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Snapdragon 8 Gen 3 amiral gemisi çipini, 12.1 inç 3K 144 Hz 7:5 ReadFit ekranı, 6 hoparlörü ve 9510 mAh 67W şarjıyla birleştiren güçlü Android tablet.',
    highlightSpec: '12.1" 3K 144Hz (7:5) · SD 8 Gen 3 · 9510 mAh 67W · 6 Hoparlör',
    specs: {
      display: {
        size: '12.1 inç (7:5 Kitap Oranı)',
        panel: 'IPS LCD (Dolby Vision)',
        resolution: '3000 x 2120 piksel (303 ppi)',
        refreshRate: '144 Hz adaptif',
        peakBrightness: '900 nit',
        protection: 'Sertleştirilmiş cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 750',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB LPDDR5X',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '13 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '9510 mAh',
        wiredCharging: '67W SuperVOOC',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '268.7 x 195.1 x 6.49 mm',
        weight: '584 g',
        materials: 'CNC yekpare alüminyum (Nimbus Gray)',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 7, Bluetooth 5.4, NFC (Klavye dokunmatik)',
        audioAndExtras: '6 Uzamsal Hoparlör, Open Canvas 3 pencere bölme'
      },
      software: {
        osAtLaunch: 'Android 14 / OxygenOS 14.1',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'oppad2-open-canvas',
        title: 'Open Canvas (3 Tam Boyutlu Uygulamayı 7:5 Ekranda Akıcı Yönetme)',
        category: 'Verimlilik',
        howToAccess: '2 parmakla üstten aşağı kaydır > 3. uygulamayı sürükle',
        description:
          'Uygulamaları daracık kutulara sıkıştırmak yerine tam boyutlu pencereleri ekran dışına taşan sanal masaüstünde kaydırır.'
      }
    ]
  },
  {
    id: 'oppo-pad-3-pro',
    brandId: 'oppo',
    deviceType: 'tablet',
    name: 'OPPO Pad 3 Pro',
    series: 'OPPO Pad Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Snapdragon 8 Gen 3 Leading Version, 12.1 inç 3K 144 Hz ekran, 8 hoparlörlü Hi-Fi ses sistemi ve 67W SuperVOOC hızlı şarjıyla amiral OPPO tableti.',
    highlightSpec: '12.1" 3K 144Hz · SD 8 Gen 3 Leading · 8 Hoparlör · 9510 mAh 67W',
    specs: {
      display: {
        size: '12.1 inç (7:5)',
        panel: 'IPS LCD (Dolby Vision)',
        resolution: '3000 x 2120 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '900 nit',
        protection: 'Sertleştirilmiş cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3 Leading Version',
        cpu: '8 Çekirdek (3.4 GHz)',
        gpu: 'Adreno 750',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB / 16 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '13 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '9510 mAh',
        wiredCharging: '67W SuperVOOC',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '268.7 x 195.1 x 6.49 mm',
        weight: '586 g',
        materials: 'Yekpare metal gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 7, Bluetooth 5.4, NFC',
        audioAndExtras: '8 Hi-Fi Hoparlör, OPPO Pencil 2 Pro'
      },
      software: {
        osAtLaunch: 'Android 14 / ColorOS 14.1',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'oppopad3p-nfc-transfer',
        title: 'Klavye NFC Alanına OPPO Telefonu Dokundurup Dosya & Ekran Aktarma',
        category: 'Verimlilik',
        howToAccess: 'OPPO telefonunuzu Smart Touch Keyboard NFC simgesine dokundurun',
        description:
          'Tek dokunuşla telefondaki açık ekranı tablete yansıtır ve galeriden seçili fotoğrafları kablosuz olarak yüksek hızda aktarır.'
      }
    ]
  },
  {
    id: 'vivo-pad3-pro',
    brandId: 'vivo',
    deviceType: 'tablet',
    name: 'vivo Pad3 Pro',
    series: 'vivo Pad Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'MediaTek Dimensity 9300 işlemciyi kullanan ilk tablet; 13 inç 3.1K 144 Hz ekran, 8 hoparlör ve dev 11.500 mAh batarya sunar.',
    highlightSpec: '13" 3.1K 144Hz · Dimensity 9300 · 11.500 mAh 66W · 8 Hoparlör',
    specs: {
      display: {
        size: '13.0 inç (3:2)',
        panel: 'IPS LCD (HDR10)',
        resolution: '3096 x 2064 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '900 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'MediaTek Dimensity 9300',
        cpu: '8 Çekirdek',
        gpu: 'Immortalis-G720 MC12',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB / 16 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 4.0 (256/512)',
        expandable: 'Yok'
      },
      camera: {
        main: '13 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '11.500 mAh',
        wiredCharging: '66W FlashCharge',
        wirelessCharging: 'Yok',
        reverseCharging: 'Ters kablolu'
      },
      buildAndConnectivity: {
        dimensions: '289.6 x 198.3 x 6.64 mm',
        weight: '678.9 g',
        materials: 'Yekpare alüminyum',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 7, Bluetooth 5.4, NFC',
        audioAndExtras: '8 Hoparlörlü Super Audio 5.0, vivo Pencil2'
      },
      software: {
        osAtLaunch: 'Android 14 / OriginOS 4',
        updatePolicy: '3 yıl sistem güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'vpad3p-mac-win-remote',
        title: 'Mac ve Windows Bilgisayara Uzaktan Masaüstü & Sunum Kumandası',
        category: 'Verimlilik',
        howToAccess: 'vivo Office Suite > Uzaktan PC Kontrolü',
        description:
          'Tableti doğrudan ev veya ofisteki Windows/Mac bilgisayarınıza bağlayıp kalemle sunum yönetmenizi sağlar.'
      }
    ]
  },
  {
    id: 'honor-magicpad-2',
    brandId: 'honor',
    deviceType: 'tablet',
    name: 'HONOR MagicPad 2',
    series: 'MagicPad Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '12.3 inç 3K 144 Hz 4320Hz PWM göz dostu IMAX Enhanced OLED ekranı, sadece 5.8 mm inceliği ve 8 hoparlörlü uzamsal ses sistemiyle multimedya yıldızı.',
    highlightSpec: '12.3" 144Hz OLED (4320Hz PWM) · SD 8s Gen 3 · 10.050 mAh 66W',
    specs: {
      display: {
        size: '12.3 inç',
        panel: 'OLED (4320Hz PWM Sıfır Titreşim, IMAX Enhanced)',
        resolution: '3000 x 1920 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '1600 nit',
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
        storage: '256 GB',
        storageType: 'UFS',
        expandable: 'Yok'
      },
      camera: {
        main: '13 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '9 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '10.050 mAh',
        wiredCharging: '66W SuperCharge',
        wirelessCharging: 'Yok',
        reverseCharging: 'Ters kablolu'
      },
      buildAndConnectivity: {
        dimensions: '274.5 x 180.5 x 5.8 mm',
        weight: '555 g',
        materials: 'İnce alüminyum & cam elyaf gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.3, USB-C',
        audioAndExtras: '8 IMAX Enhanced Hoparlör, AI Defocus Göz Koruması'
      },
      software: {
        osAtLaunch: 'Android 14 / MagicOS 8.0.1',
        updatePolicy: 'Güncelleme & güvenlik yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'mpad2-ai-defocus',
        title: 'AI Odak Azaltma (Miyopluğu Yavaşlatan Göz Koruma Ekranı)',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ekran ve Parlaklık > HONOR Göz Konforu > AI Odak Azaltma',
        description:
          'Uzun okumalarda göz yorgunluğunu azaltmak için ekran kenarındaki odak düzlemini yazılımsal olarak ayarlayıp göz merceğindeki gerilimi düşürür.'
      }
    ]
  },

  // ================= DİĞER MARKALARIN İKONİK & GÜNCEL TABLETLERİ =================
  {
    id: 'realme-pad-2',
    brandId: 'realme',
    deviceType: 'tablet',
    name: 'realme Pad 2',
    series: 'realme Pad Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '11.5 inç 2K 120 Hz ekranı, 8360 mAh pili, 33W SuperVOOC şarjı ve LTE seçeneğiyle günlük medya ve eğitim tableti.',
    highlightSpec: '11.5" 2K 120Hz · Helio G99 · 8360 mAh 33W · 4 Hoparlör',
    specs: {
      display: {
        size: '11.5 inç',
        panel: 'IPS LCD (1 Milyar Renk)',
        resolution: '2000 x 1200 piksel',
        refreshRate: '120 Hz adaptif',
        peakBrightness: '450 nit',
        protection: 'Sertleştirilmiş cam'
      },
      performance: {
        chipset: 'MediaTek Helio G99',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G57 MC2',
        processNode: '6 nm'
      },
      memory: {
        ram: '6 GB / 8 GB',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 2.2',
        expandable: 'microSD (1 TB)'
      },
      camera: {
        main: '8 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '8360 mAh',
        wiredCharging: '33W SuperVOOC',
        wirelessCharging: 'Yok',
        reverseCharging: 'Ters kablolu'
      },
      buildAndConnectivity: {
        dimensions: '268.2 x 168.5 x 7.2 mm',
        weight: '518 g',
        materials: 'Metalik çift tonlu kasa',
        waterResistance: 'Yok',
        connectivity: '4G LTE (Opsiyonel), Wi-Fi 5, Bluetooth 5.2',
        audioAndExtras: '4 Dolby Atmos hoparlör, Çift Pencere Modu'
      },
      software: {
        osAtLaunch: 'Android 13 / realme UI 4.0 for Pad',
        updatePolicy: 'Güvenlik yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'rpad2-multiscreen-collab',
        title: 'realme Telefon Ekranını Tablette Pencere Olarak Açma',
        category: 'Verimlilik',
        howToAccess: 'Hızlı Ayarlar > Çoklu Ekran İş Birliği',
        description:
          'Aynı Wi-Fi/Bluetooth yakınlığındaki realme telefonunuzun ekranını tablet üzerinde açarak bildirim yanıtlayıp dosya sürükleyebilirsiniz.'
      }
    ]
  },
  {
    id: 'sony-xperia-z4-tablet',
    brandId: 'sony',
    deviceType: 'tablet',
    name: 'Sony Xperia Z4 Tablet',
    series: 'Xperia Tablet Serisi',
    releaseYear: 2015,
    era: '2000-2019',
    segment: 'Tablet',
    summary:
      'Yalnızca 389 gram ağırlığı ve 6.1 mm inceliğiyle IP68 su geçirmezliğe sahip 10.1 inç 2K ekranlı efsanevi Sony tableti.',
    highlightSpec: '10.1" 2K Triluminos · 389 g · IP68 Su Geçirmez · PlayStation Remote',
    specs: {
      display: {
        size: '10.1 inç',
        panel: 'IPS LCD Triluminos',
        resolution: '2560 x 1600 piksel (299 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Çizilmeye dayanıklı cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 810',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 430',
        processNode: '20 nm'
      },
      memory: {
        ram: '3 GB',
        storage: '32 GB',
        storageType: 'eMMC 5.0',
        expandable: 'microSD (128 GB)'
      },
      camera: {
        main: '8.1 MP Exmor RS',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5.1 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '6000 mAh',
        wiredCharging: 'Micro-USB Quick Charge 2.0',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '254 x 167 x 6.1 mm',
        weight: '389 g (Wi-Fi) / 393 g (LTE)',
        materials: 'Metal çerçeve, kapaksız su geçirmez port',
        waterResistance: 'IP68 (1.5m su altı)',
        connectivity: '4G LTE, Wi-Fi ac, Bluetooth 4.1, NFC, MHL 3.0',
        audioAndExtras: 'PS4 Remote Play, LDAC Hi-Res Ses, 3.5mm Jak'
      },
      software: {
        osAtLaunch: 'Android 5.0 Lollipop (Android 7.1’e kadar)',
        updatePolicy: 'Resmi Xperia güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'xz4t-ps4-remote',
        title: 'DualShock 4 Koluyla PS4 Oyunlarını Tabletten Oynama',
        category: 'Verimlilik',
        howToAccess: 'PS4 Remote Play uygulaması > DualShock 4 Bluetooth eşleştirme',
        description:
          'Aynı Wi-Fi ağında PlayStation 4 konsolunuza bağlanıp tablet ekranını taşınabilir oyun monitörü olarak kullanır.'
      }
    ]
  },
  {
    id: 'nokia-t21',
    brandId: 'nokia',
    deviceType: 'tablet',
    name: 'Nokia T21',
    series: 'Nokia T Serisi',
    releaseYear: 2022,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Geri dönüştürülmüş alüminyum sağlam gövdesi, Wacom WGP kalem desteği, 3.5mm jakı ve Windows PC için kablolu/kablosuz ikinci ekran özelliğiyle dayanıklı Nokia tableti.',
    highlightSpec: '10.36" 2K IPS · 8200 mAh · Wacom Kalem Desteği · Alüminyum Kasa',
    specs: {
      display: {
        size: '10.36 inç',
        panel: 'IPS LCD (SGS Düşük Mavi Işık)',
        resolution: '2000 x 1200 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '400 nit',
        protection: 'Sertleştirilmiş cam'
      },
      performance: {
        chipset: 'Unisoc Tiger T612',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G57',
        processNode: '12 nm'
      },
      memory: {
        ram: '4 GB',
        storage: '64 GB / 128 GB',
        storageType: 'eMMC',
        expandable: 'microSDXC (512 GB)'
      },
      camera: {
        main: '8 MP, Otofokus, LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '8200 mAh',
        wiredCharging: '18W USB-C PD',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '247.5 x 157.3 x 7.5 mm',
        weight: '466 g',
        materials: 'Alüminyum gövde, %60 geri dönüştürülmüş plastik anten bandı',
        waterResistance: 'IP52',
        connectivity: '4G LTE (Opsiyonel), Wi-Fi 5, Bluetooth 5.0, NFC',
        audioAndExtras: 'OZO Audio stereo hoparlör, 3.5mm jak, FM Radyo'
      },
      software: {
        osAtLaunch: 'Android 12 (Android 14’e kadar)',
        updatePolicy: '2 yıl Android + 3 yıl aylık güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'nt21-second-screen',
        title: 'Dahili Windows PC İkinci Ekran Özelliği',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Bağlı Cihazlar > İkinci Ekran',
        description:
          'Harici uygulama indirmeden tabletin ekranını Windows dizüstü bilgisayarınıza genişletilmiş ikinci monitör olarak bağlar.'
      }
    ]
  },
  {
    id: 'motorola-xoom-2011',
    brandId: 'motorola',
    deviceType: 'tablet',
    name: 'Motorola XOOM',
    series: 'XOOM Serisi',
    releaseYear: 2011,
    era: '2000-2019',
    segment: 'Tablet',
    summary:
      'Dünyanın tabletler için özel tasarlanan ilk işletim sistemi Android 3.0 Honeycomb’u ve NVIDIA Tegra 2 çift çekirdekli işlemciyi taşıyan tarihi ilk Android tableti.',
    highlightSpec: '10.1" WXGA · İlk Android 3.0 Honeycomb · Tegra 2 · HDMI Çıkışı',
    specs: {
      display: {
        size: '10.1 inç',
        panel: 'TFT Kapasitif LCD',
        resolution: '1280 x 800 piksel',
        refreshRate: '60 Hz',
        peakBrightness: 'Standart LCD',
        protection: 'Corning Gorilla Glass'
      },
      performance: {
        chipset: 'NVIDIA Tegra 2 T20',
        cpu: '2 Çekirdek 1.0 GHz Cortex-A9',
        gpu: 'ULP GeForce',
        processNode: '40 nm'
      },
      memory: {
        ram: '1 GB DDR2',
        storage: '32 GB',
        storageType: 'eMMC',
        expandable: 'microSD (32 GB — güncelleme ile açıldı)'
      },
      camera: {
        main: '5 MP, Çift LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '2 MP',
        video: '720p 30fps'
      },
      battery: {
        capacity: '6500 mAh (32.5 Wh)',
        wiredCharging: 'Özel DC Adaptör',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '249.1 x 167.8 x 12.9 mm',
        weight: '730 g',
        materials: 'Anodize alüminyum arka gövde',
        waterResistance: 'Yok',
        connectivity: '3G/4G LTE, Wi-Fi n, Bluetooth 2.1, Micro-HDMI',
        audioAndExtras: 'Barometre sensörü (akıllı cihazda ilklerden), 3.5mm jak'
      },
      software: {
        osAtLaunch: 'Android 3.0 Honeycomb (4.1.2 Jelly Bean’e kadar)',
        updatePolicy: 'İlk Android tablet referans cihazı'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'xoom-barometer',
        title: 'İlk Dahili Barometre Sensörüyle Hava Basıncı ve Yükseklik Ölçümü',
        category: 'Sistem',
        howToAccess: 'Sensör test veya GPS/hava durumu uygulamaları',
        description:
          '2011 yılında GPS kilidini hızlandırmak ve irtifa ölçmek için barometre sensörü eklenen ilk mobil cihazlardan biridir.'
      }
    ]
  },
  {
    id: 'blackberry-playbook',
    brandId: 'blackberry',
    deviceType: 'tablet',
    name: 'BlackBerry PlayBook',
    series: 'PlayBook Serisi',
    releaseYear: 2011,
    era: '2000-2019',
    segment: 'Tablet',
    summary:
      'QNX gerçek zamanlı mikroçekirdek işletim sistemi, dokunmatik çerçeve kenar hareketleri (bezel gestures) ve ön stereo hoparlörleriyle dönemin benzersiz 7 inç tableti.',
    highlightSpec: '7.0" IPS · QNX Tabanlı Tablet OS · Dokunmatik Çerçeve Hareketleri',
    specs: {
      display: {
        size: '7.0 inç',
        panel: 'IPS LCD',
        resolution: '1024 x 600 piksel',
        refreshRate: '60 Hz',
        peakBrightness: 'Standart IPS',
        protection: 'Cam ön yüz'
      },
      performance: {
        chipset: 'TI OMAP 4430',
        cpu: '2 Çekirdek 1.0 GHz Cortex-A9',
        gpu: 'PowerVR SGX540',
        processNode: '45 nm'
      },
      memory: {
        ram: '1 GB',
        storage: '16 GB / 32 GB / 64 GB',
        storageType: 'Flash',
        expandable: 'Yok'
      },
      camera: {
        main: '5 MP 1080p',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '3 MP 1080p',
        video: '1080p Full HD'
      },
      battery: {
        capacity: '5300 mAh',
        wiredCharging: 'Micro-USB / Manyetik Rapid Dock',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '194 x 130 x 10 mm',
        weight: '425 g',
        materials: 'Yumuşak dokulu kauçuk arka, dokunmatik siyah ön çerçeve',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi n, Bluetooth 2.1, Micro-HDMI',
        audioAndExtras: 'BlackBerry Bridge, Ön stereo hoparlör, Çerçeve kaydırma'
      },
      software: {
        osAtLaunch: 'BlackBerry Tablet OS (QNX)',
        updatePolicy: 'PlayBook OS 2.1'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'playbook-bezel-swipe',
        title: 'Siyah Ekran Çerçevesinden (Bezel) İçeri Kaydırarak Menü Yönetimi',
        category: 'Verimlilik',
        howToAccess: 'Parmağınızı camın dışındaki siyah çerçeveden ekrana doğru sürükleyin',
        description:
          'PlayBook’ta fiziksel Home tuşu yoktur; tüm çoklu görev geçişleri ve uygulama kapatma hareketleri ekran dışındaki dokunmatik çerçeveden başlatılır.'
      }
    ]
  },
  {
    id: 'htc-nexus-9',
    brandId: 'htc',
    deviceType: 'tablet',
    name: 'HTC / Google Nexus 9',
    series: 'Nexus Tablet Serisi',
    releaseYear: 2014,
    era: '2000-2019',
    segment: 'Tablet',
    summary:
      'HTC tarafından üretilen, Android 5.0 Lollipop Material Design’ı ve 64-bit NVIDIA Tegra K1 Denver işlemciyi ilk kez sunan 4:3 oranlı saf Android tableti.',
    highlightSpec: '8.9" 4:3 QXGA IPS · 64-bit Tegra K1 · BoomSound Hoparlör',
    specs: {
      display: {
        size: '8.9 inç (4:3)',
        panel: 'IPS LCD',
        resolution: '2048 x 1536 piksel (281 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '450 nit',
        protection: 'Corning Gorilla Glass 3'
      },
      performance: {
        chipset: 'NVIDIA Tegra K1 (64-bit Denver)',
        cpu: '2 Çekirdek 2.3 GHz',
        gpu: 'Kepler DX1 192-çekirdek',
        processNode: '28 nm'
      },
      memory: {
        ram: '2 GB',
        storage: '16 GB / 32 GB',
        storageType: 'eMMC',
        expandable: 'Yok'
      },
      camera: {
        main: '8 MP, f/2.4, LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '1.6 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '6700 mAh',
        wiredCharging: 'Micro-USB',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '228.2 x 153.7 x 7.95 mm',
        weight: '425 g',
        materials: 'Fırçalanmış metal çerçeve, yumuşak mat arka',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi ac MIMO, Bluetooth 4.1, NFC, LTE (Opsiyonel)',
        audioAndExtras: 'Ön yüze bakan HTC BoomSound stereo hoparlörler'
      },
      software: {
        osAtLaunch: 'Android 5.0 Lollipop (Android 7.1.1’e kadar)',
        updatePolicy: 'Resmi Google Nexus desteği'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'nexus9-double-tap-wake',
        title: 'Nexus Tabletlerde İlk Çift Dokunuşla Ekran Uyandırma',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ekran > Uyandırmak için çift dokunun',
        description:
          'HTC’nin Sense özelliğini saf Android’e taşıyarak fiziksel güç tuşuna basmadan ekrana iki kez tıklayarak tableti uyandırmayı sağladı.'
      }
    ]
  },
  {
    id: 'lg-g-pad-8-3',
    brandId: 'lg',
    deviceType: 'tablet',
    name: 'LG G Pad 8.3',
    series: 'G Pad Serisi',
    releaseYear: 2013,
    era: '2000-2019',
    segment: 'Tablet',
    summary:
      '8.3 inçlik Full HD+ ekranı alüminyum sırtlı ince kasada sunan ve LG telefonlardaki aramaları doğrudan tablette yanıtlayan QPair özelliğine sahip klasik.',
    highlightSpec: '8.3" Full HD+ IPS · SD 600 · QPair Telefon Eşleştirme · IR Kumanda',
    specs: {
      display: {
        size: '8.3 inç',
        panel: 'IPS LCD',
        resolution: '1920 x 1200 piksel (273 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '400 nit',
        protection: 'Dayanıklı ön cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 600',
        cpu: '4 Çekirdek 1.7 GHz Krait 300',
        gpu: 'Adreno 320',
        processNode: '28 nm'
      },
      memory: {
        ram: '2 GB',
        storage: '16 GB',
        storageType: 'eMMC',
        expandable: 'microSD (64 GB)'
      },
      camera: {
        main: '5 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '1.3 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '4600 mAh',
        wiredCharging: 'Micro-USB',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '216.8 x 126.5 x 8.3 mm',
        weight: '338 g',
        materials: 'Fırçalanmış alüminyum arka kapak',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi a/b/g/n, Bluetooth 4.0, Kızılötesi (IR) Verici',
        audioAndExtras: 'QPair telefon çağrı/SMS yönlendirme, KnockON'
      },
      software: {
        osAtLaunch: 'Android 4.2.2 (Google Play Edition sürümüyle 5.1)',
        updatePolicy: 'Dönem güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'gpad-qpair',
        title: 'QPair ile Android Telefona Gelen SMS ve Aramaları Tabletten Yanıtlama',
        category: 'Verimlilik',
        howToAccess: 'QPair uygulaması > Bluetooth eşleştirme',
        description:
          '2013 yılında akıllı telefonunuza gelen aramaları ve mesaj bildirimlerini yerinizden kalkmadan tablet ekranından yanıtlamanızı sağlıyordu.'
      }
    ]
  },
  {
    id: 'tecno-megapad-11',
    brandId: 'tecno',
    deviceType: 'tablet',
    name: 'TECNO MegaPad 11',
    series: 'MegaPad Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '11 inç 90 Hz FHD+ ekranı, 8000 mAh pili, 4 Dolby Atmos hoparlörü ve TECNO AI özetleme özellikleriyle multimedya odaklı TECNO tableti.',
    highlightSpec: '11" 90Hz FHD+ · Helio G99 · 8000 mAh · 4 Dolby Atmos Hoparlör',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'IPS LCD',
        resolution: '1920 x 1200 piksel',
        refreshRate: '90 Hz',
        peakBrightness: '440 nit',
        protection: 'Sertleştirilmiş cam'
      },
      performance: {
        chipset: 'MediaTek Helio G99',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G57 MC2',
        processNode: '6 nm'
      },
      memory: {
        ram: '8 GB (+8 GB Genişletilmiş)',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 2.2',
        expandable: 'microSD (512 GB)'
      },
      camera: {
        main: '13 MP, LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '8000 mAh',
        wiredCharging: '18W USB-C',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '257.1 x 168.7 x 7.58 mm',
        weight: '510 g',
        materials: 'Metalik yekpare gövde',
        waterResistance: 'Yok',
        connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.2',
        audioAndExtras: '4 Dolby Atmos hoparlör, 3.5mm Jak, PC Bağlantısı'
      },
      software: {
        osAtLaunch: 'Android 14',
        updatePolicy: 'Güvenlik yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'megapad11-ai-translate',
        title: 'Metin ve PDF Dosyalarını Anında Çeviren AI Akıllı Kenar Çubuğu',
        category: 'Verimlilik',
        howToAccess: 'Sağ kenardan içe kaydır > TECNO AI Araçları',
        description:
          'Okuduğunuz uzun makaleleri veya ders dokümanlarını bölünmüş ekranda Türkçe özetleyip çevirir.'
      }
    ]
  },
  {
    id: 'infinix-xpad',
    brandId: 'infinix',
    deviceType: 'tablet',
    name: 'Infinix XPAD',
    series: 'XPAD Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '11 inç 90 Hz ekranı, XArena oyun optimizasyonu, Folax sesli asistanı ve metal yekpare gövdesiyle Infinix’in ilk akıllı tableti.',
    highlightSpec: '11" 90Hz FHD+ · Helio G99 · 7000 mAh · Metal Yekpare Kasa',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'IPS LCD',
        resolution: '1920 x 1200 piksel',
        refreshRate: '90 Hz',
        peakBrightness: '440 nit',
        protection: 'Sertleştirilmiş cam'
      },
      performance: {
        chipset: 'MediaTek Helio G99',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G57 MC2',
        processNode: '6 nm'
      },
      memory: {
        ram: '4 GB / 8 GB',
        storage: '128 GB / 256 GB',
        storageType: 'eMMC / UFS',
        expandable: 'microSD (1 TB)'
      },
      camera: {
        main: '8 MP, LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP (Ön LED Flaşlı)',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '7000 mAh',
        wiredCharging: '18W USB-C',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '257.0 x 168.6 x 7.6 mm',
        weight: '496 g',
        materials: 'Metalik yekpare tasarım',
        waterResistance: 'Yok',
        connectivity: '4G LTE (Opsiyonel), Wi-Fi 5, Bluetooth 5.2',
        audioAndExtras: '4 Stereo Hoparlör, 3.5mm Jak, XArena Oyun Alanı'
      },
      software: {
        osAtLaunch: 'Android 14 / XOS 14',
        updatePolicy: 'Güvenlik yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'xpad-multidevice',
        title: 'Infinix Telefon ve Bilgisayarla Çoklu Ekran Pano Paylaşımı',
        category: 'Verimlilik',
        howToAccess: 'Hızlı Ayarlar > Çoklu Ekran İş Birliği',
        description:
          'Telefonda kopyaladığınız bir metni veya ekran görüntüsünü kablosuz olarak doğrudan XPAD notlarına yapıştırmanızı sağlar.'
      }
    ]
  },
  {
    id: 'redmagic-nova-tablet',
    brandId: 'nubia',
    deviceType: 'tablet',
    name: 'nubia RedMagic Nova',
    series: 'RedMagic Gaming Tablet',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Snapdragon 8 Gen 3 Leading Version, aktif 20.000 RPM dahili soğutma fanı, 144 Hz 2.8K ekran ve 10.100 mAh 80W şarjlı profesyonel oyuncu tableti.',
    highlightSpec: '10.9" 2.8K 144Hz · SD 8 Gen 3 Leading · Dahili 20K RPM Fan · 80W',
    specs: {
      display: {
        size: '10.9 inç',
        panel: 'IPS LCD (840 Hz Dokunma Örnekleme)',
        resolution: '2880 x 1800 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '550 nit',
        protection: 'Sertleştirilmiş cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3 Leading Version',
        cpu: '8 Çekirdek (3.4 GHz)',
        gpu: 'Adreno 750 (1 GHz)',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '20 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '10.100 mAh',
        wiredCharging: '80W Hızlı Şarj (55 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '253.3 x 164.6 x 7.3 mm',
        weight: '530 g',
        materials: 'CNC alüminyum + Şeffaf RGB fan penceresi',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6E, Bluetooth 5.4, NFC, USB 3.1 Gen 2 (DisplayPort)',
        audioAndExtras: '20.000 RPM RGB aktif fan, 9 katmanlı 3D ısı borusu, DTS-X 4 hoparlör'
      },
      software: {
        osAtLaunch: 'Android 14 / RedMagic OS 9.5',
        updatePolicy: 'Oyun & güvenlik yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'rmnova-charge-separation',
        title: 'Şarj Ayrıştırma (Bypass Charging) ile Pili Isıtmadan Oyun Oynama',
        category: 'Batarya',
        howToAccess: 'Oyun Modu > Şarj Ayrıştırma (Charge Separation)',
        description:
          'Kablo takılı oyun oynarken enerjiyi bataryaya uğratmadan doğrudan anakarta yönlendirerek pil sağlığını korur ve ısınmayı önler.'
      }
    ]
  },
  {
    id: 'general-mobile-e-tab-20',
    brandId: 'general-mobile',
    deviceType: 'tablet',
    name: 'General Mobile e-tab 20',
    series: 'e-tab Serisi',
    releaseYear: 2020,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Türkiye’de milyonlarca öğrenciye ulaşan, 10.1 inç Full HD IPS ekranı, metal arka gövdesi, 7000 mAh pili ve microSD yuvasıyla öne çıkan yerli eğitim tableti.',
    highlightSpec: '10.1" Full HD IPS · 4 GB / 64 GB · 7000 mAh · Çift Bant Wi-Fi',
    specs: {
      display: {
        size: '10.1 inç',
        panel: 'IPS LCD',
        resolution: '1920 x 1200 piksel (FHD+)',
        refreshRate: '60 Hz',
        peakBrightness: '400 nit',
        protection: 'Dayanıklı ön cam'
      },
      performance: {
        chipset: 'MediaTek Helio P22T',
        cpu: '8 Çekirdek (2.3 GHz)',
        gpu: 'PowerVR GE8320',
        processNode: '12 nm'
      },
      memory: {
        ram: '4 GB',
        storage: '64 GB',
        storageType: 'eMMC 5.1',
        expandable: 'microSD (128 GB)’a kadar'
      },
      camera: {
        main: '5 MP, Otofokus',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '2 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '7000 mAh',
        wiredCharging: 'USB-C 10W',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '243 x 162 x 8.5 mm',
        weight: '485 g',
        materials: 'Metalik dokulu sağlam arka kapak',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5 (Dual Band), Bluetooth 5.0, USB-C',
        audioAndExtras: '3.5mm kulaklık jakı, Stereo hoparlör, Göz koruma modu'
      },
      software: {
        osAtLaunch: 'Android 10',
        updatePolicy: 'Güvenlik ve sistem yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'etab20-digital-wellbeing',
        title: 'Ders ve Okuma Modu İçin Otomatik Mavi Işık & Ekran Süresi Sınırı',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Dijital Denge ve Ebeveyn Denetimleri',
        description:
          'Öğrenci kullanımında ders dışı uygulamalar için günlük zamanlayıcı ve akşam saatleri için sıcak okuma filtresi planlar.'
      }
    ]
  }
];
