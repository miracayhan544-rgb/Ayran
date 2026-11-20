import { PhoneModel } from '../types/phone';

export const PHONES_EXTRA: PhoneModel[] = [
  {
    id: 'galaxy-z-flip6',
    brandId: 'samsung',
    name: 'Samsung Galaxy Z Flip6',
    series: 'Galaxy Z Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Katlanabilir',
    summary:
      '3.4 inç FlexWindow kapak ekranı, 50 MP yeni ana kamera sensörü, buhar odalı soğutma ve 4000 mAh pille Samsung’un en gelişmiş istiridye kapaklı katlanabilir modeli.',
    highlightSpec: '6.7" Katlanır + 3.4" Kapak · SD 8 Gen 3 · 50 MP · IP48',
    specs: {
      display: {
        size: '6.7 inç (İç) + 3.4 inç (Kapak)',
        panel: 'Dynamic LTPO AMOLED 2X + Super AMOLED kapak',
        resolution: '2640 x 1080 (İç) / 720 x 748 (Kapak)',
        refreshRate: '1–120 Hz (İç) / 60 Hz (Kapak)',
        peakBrightness: '2600 nit',
        protection: 'Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 750',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.8, OIS',
        ultrawide: '12 MP, f/2.2',
        telephoto: 'Yok (2x Optik Kalite Zoom)',
        front: '10 MP, f/2.2',
        video: '4K 60fps'
      },
      battery: {
        capacity: '4000 mAh',
        wiredCharging: '25W Kablolu',
        wirelessCharging: '15W Kablosuz',
        reverseCharging: '4.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '165.1 x 71.9 x 6.9 mm (Açık) / 14.9 mm (Katlı)',
        weight: '187 g',
        materials: 'Gelişmiş Armor Aluminum çerçeve, FlexHinge',
        waterResistance: 'IP48',
        connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, NFC',
        audioAndExtras: 'Buhar odalı soğutma, FlexCam otomatik kadraj'
      },
      software: {
        osAtLaunch: 'Android 14 / One UI 6.1.1',
        updatePolicy: '7 yıl güncelleme garantisi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'zflip6-camcorder-grip',
        title: 'El Kamerası (Camcorder) Tutuşuyla Tek Elle Video Yakınlaştırma',
        category: 'Kamera',
        howToAccess: 'Cihazı 90° büküp yatay tutun (Flex Modu)',
        description:
          'Telefonu L şeklinde yarı katlayıp yan tuttuğunuzda 90’lar video kamerası ergonomisi sunar ve alt ekranda tek parmakla akıcı zoom kaydırıcısı açılır.'
      }
    ]
  },
  {
    id: 'xiaomi-14t-pro',
    brandId: 'xiaomi',
    name: 'Xiaomi 14T Pro',
    series: 'Xiaomi T Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      'Leica Summilux f/1.6 lensi, Dimensity 9300+ amiral işlemcisi, 144 Hz ekranı ve 120W kablolu + 50W kablosuz şarjıyla fiyat/performans yıldızı.',
    highlightSpec: '6.67" 144Hz AMOLED · Dimensity 9300+ · Leica 50 MP · 120W/50W',
    specs: {
      display: {
        size: '6.67 inç',
        panel: '1.5K AMOLED (4000 nit)',
        resolution: '2712 x 1220 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '4000 nit',
        protection: 'Corning Gorilla Glass 5'
      },
      performance: {
        chipset: 'MediaTek Dimensity 9300+',
        cpu: '8 Çekirdek (3.4 GHz Cortex-X4)',
        gpu: 'Immortalis-G720 MC12',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Light Fusion 900, f/1.6, OIS',
        ultrawide: '12 MP, f/2.2',
        telephoto: '50 MP 2.6x Optik (60mm), f/2.0',
        front: '32 MP, f/2.0',
        video: '8K 30fps, 4K 60fps 10-bit Log'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '120W HyperCharge (19 dk %100)',
        wirelessCharging: '50W Kablosuz HyperCharge',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '160.4 x 75.1 x 8.4 mm',
        weight: '209 g',
        materials: '6M13 yüksek mukavemetli alüminyum çerçeve, cam arka',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: 'Leica renk profilleri, Dolby Atmos stereo'
      },
      software: {
        osAtLaunch: 'Android 14 / HyperOS',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: '14tp-leica-master-lens',
        title: 'Leica Master-Lens 35mm / 50mm / 75mm / 90mm Portre Simülasyonu',
        category: 'Kamera',
        howToAccess: 'Kamera > Portre > Master-Lens odak seçenekleri',
        description:
          '35mm Belgesel, 50mm Girdap Bokeh, 75mm Portre ve 90mm Yumuşak Odak efsanevi Leica objektif karakterlerini uygular.'
      }
    ]
  },
  {
    id: 'oneplus-12',
    brandId: 'oneplus',
    name: 'OnePlus 12',
    series: 'Amiral Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      '4500 nit 2K LTPO ekranı, Snapdragon 8 Gen 3, 64 MP 3x periskop Hasselblad kamerası ve 5400 mAh + 100W şarjıyla dengeli 2024 amiral gemisi.',
    highlightSpec: '6.82" 2K AMOLED · SD 8 Gen 3 · 64 MP Periskop · 5400 mAh 100W',
    specs: {
      display: {
        size: '6.82 inç',
        panel: 'ProXDR LTPO AMOLED',
        resolution: '3168 x 1440 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '4500 nit',
        protection: 'Corning Gorilla Glass Victus 2'
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
        main: '50 MP Sony LYT-808, f/1.6, OIS',
        ultrawide: '48 MP, f/2.2, 3.5 cm Makro',
        telephoto: '64 MP 3x Periskop (OV64B), f/2.6, OIS',
        front: '32 MP',
        video: '8K 24fps, 4K 60fps Dolby Vision'
      },
      battery: {
        capacity: '5400 mAh',
        wiredCharging: '100W SuperVOOC (26 dk %100)',
        wirelessCharging: '50W AirVOOC',
        reverseCharging: '10W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '164.3 x 75.8 x 9.15 mm',
        weight: '220 g',
        materials: 'Alüminyum çerçeve, zümrüt/siyah cam arka',
        waterResistance: 'IP65',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: 'Alert Slider, Aqua Touch, USB 3.2 Gen 1'
      },
      software: {
        osAtLaunch: 'Android 14 / OxygenOS 14',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'op12-ir-remote',
        title: 'OxygenOS Dahili Kızılötesi Kumanda Merkezi',
        category: 'Verimlilik',
        howToAccess: 'IR Remote uygulaması',
        description:
          'Üst çerçevedeki kızılötesi verici ile binlerce TV, klima ve projektörü ekstra cihaz olmadan kontrol eder.'
      }
    ]
  },
  {
    id: 'pixel-9-pro-fold',
    brandId: 'google',
    name: 'Google Pixel 9 Pro Fold',
    series: 'Pixel Fold Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Katlanabilir',
    summary:
      'Açıldığında 8.0 inç Super Actua Flex ekran sunan, yalnızca 5.1 mm inceliğinde ve Tensor G4 + 16 GB RAM’li Google’ın katlanabilir amiral gemisi.',
    highlightSpec: '8.0" Katlanır + 6.3" Dış · Tensor G4 · 5x Periskop · 5.1 mm Açık',
    specs: {
      display: {
        size: '8.0 inç (İç) + 6.3 inç (Dış)',
        panel: 'Super Actua Flex LTPO OLED',
        resolution: '2076 x 2152 (İç) / 2424 x 1080 (Dış)',
        refreshRate: '1–120 Hz',
        peakBrightness: '2700 nit',
        protection: 'Gorilla Glass Victus 2 (Dış)'
      },
      performance: {
        chipset: 'Google Tensor G4 + Titan M2',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G715 MC7',
        processNode: '4 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP, f/1.7, OIS',
        ultrawide: '10.5 MP, f/2.2, Makro',
        telephoto: '10.8 MP 5x Periskop, OIS',
        front: '10 MP (İç) + 10 MP (Dış)',
        video: '4K 60fps 10-bit HDR'
      },
      battery: {
        capacity: '4650 mAh',
        wiredCharging: '21W USB-C PD',
        wirelessCharging: '7.5W Qi',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '155.2 x 150.2 x 5.1 mm (Açık) / 10.5 mm (Katlı)',
        weight: '257 g',
        materials: 'Havacılık sınıfı alüminyum, paslanmaz çelik menteşe',
        waterResistance: 'IPX8',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB',
        audioAndExtras: '7 yıl güncelleme, Made You Look dış ekran modu'
      },
      software: {
        osAtLaunch: 'Android 14 / Android 15',
        updatePolicy: '7 yıl işletim sistemi ve güvenlik güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p9pf-made-you-look',
        title: 'Made You Look (Çocuk Fotoğrafı Çekerken Dış Ekranda Animasyon)',
        category: 'Kamera',
        howToAccess: 'Kamera > Made You Look simgesi',
        description:
          'Çocukların veya evcil hayvanların fotoğrafını çekerken dış ekranda renkli animasyonlar oynatarak doğrudan lense bakmalarını sağlar.'
      }
    ]
  },
  {
    id: 'nothing-phone-2a-plus',
    brandId: 'nothing',
    name: 'Nothing Phone (2a) Plus',
    series: 'Phone (a) Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      'Özel üretim Dimensity 7350 Pro işlemci, 50 MP ön selfie kamerası, metalik şeffaf arka tasarım ve 50W hızlı şarjla orta segmentte fark yaratır.',
    highlightSpec: '6.7" AMOLED · Dimensity 7350 Pro · 50 MP Ön+Arka · Glyph LED',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'Esnek AMOLED (10-bit)',
        resolution: '2412 x 1084 piksel',
        refreshRate: '30–120 Hz',
        peakBrightness: '1300 nit',
        protection: 'Corning Gorilla Glass 5'
      },
      performance: {
        chipset: 'MediaTek Dimensity 7350 Pro 5G',
        cpu: '8 Çekirdek (3.0 GHz)',
        gpu: 'Mali-G610 MC4',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB (+8 GB RAM Booster)',
        storage: '256 GB',
        storageType: 'UFS 2.2',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.88, OIS',
        ultrawide: '50 MP, f/2.2, 114°',
        telephoto: 'Yok',
        front: '50 MP, f/2.2',
        video: '4K 30fps (Ön ve Arka)'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '50W Hızlı Şarj (56 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '161.7 x 76.3 x 8.5 mm',
        weight: '190 g',
        materials: 'Metalik şeffaf polikarbonat arka, geri dönüştürülmüş alüminyum iç',
        waterResistance: 'IP54',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC',
        audioAndExtras: '3 Bölgeli Glyph LED arayüzü, Stereo hoparlör'
      },
      software: {
        osAtLaunch: 'Android 14 / Nothing OS 2.6',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'np2ap-pedometer-widget',
        title: 'Kilit Ekranında Etkileşimli Adımsayar & Özel LUT Filtre İçe Aktarma',
        category: 'Sistem',
        howToAccess: 'Kamera > Presetler > .CUBE LUT Dosyası Ekle',
        description:
          'Profesyonel renk düzenleme (.cube) dosyalarını doğrudan stok kamera uygulamasına yükleyip özel renk profilleriyle fotoğraf çekebilirsiniz.'
      }
    ]
  },
  {
    id: 'sony-xperia-5-v',
    brandId: 'sony',
    name: 'Sony Xperia 5 V',
    series: 'Xperia 5 Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Kompakt Amiral',
    summary:
      '68 mm dar gövdesiyle tek ele tam oturan, yeni nesil Exmor T ana sensörlü, 3.5mm jaklı ve microSD yuvalı kompakt amiral gemisi.',
    highlightSpec: '6.1" 120Hz OLED · SD 8 Gen 2 · Exmor T 48 MP · 3.5mm Jak · 182 g',
    specs: {
      display: {
        size: '6.1 inç (21:9 Sinema Oranı)',
        panel: 'OLED',
        resolution: '2520 x 1080 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '1000 nit+',
        protection: 'Corning Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 2',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 740',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB LPDDR5X',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 4.0',
        expandable: 'microSDXC (1 TB)'
      },
      camera: {
        main: '48 MP Exmor T (24mm / 48mm 2x Optik Kalite), f/1.9, OIS',
        ultrawide: '12 MP (16mm), f/2.2',
        telephoto: 'Yok (Sensör 2x optik kalite)',
        front: '12 MP',
        video: '4K 120fps HDR'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '30W PD',
        wirelessCharging: '15W Qi',
        reverseCharging: 'Ters kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '154 x 68 x 8.6 mm',
        weight: '182 g',
        materials: 'Alüminyum çerçeve, Gorilla Glass Victus 2',
        waterResistance: 'IP65 / IP68',
        connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, NFC',
        audioAndExtras: '3.5mm jak, Çift ön stereo hoparlör, Video Creator uygulaması'
      },
      software: {
        osAtLaunch: 'Android 13 (Android 15 aldı)',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'x5v-side-sense',
        title: 'Side Sense Yan Kenar Çift Dokunuşla Tek El Menüsü',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Sistem > Hareketler > Yan Algılama (Side Sense)',
        description:
          '21:9 uzun ekranın sağ veya sol kenarına başparmağınızla çift dokunarak tek elle bölünmüş ekran ve favori uygulamalar menüsünü açar.'
      }
    ]
  },
  {
    id: 'asus-zenfone-11-ultra',
    brandId: 'asus',
    name: 'ASUS Zenfone 11 Ultra',
    series: 'Zenfone Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      '6 eksenli hibrit Gimbal kamera sabitleyici, 3.5mm Hi-Res kulaklık jakı, 5500 mAh pil ve Snapdragon 8 Gen 3 ile günlük amiral gemisi deneyimi.',
    highlightSpec: '6.78" 144Hz LTPO · SD 8 Gen 3 · 6-Eksen Gimbal OIS · 3.5mm Jak',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'LTPO AMOLED',
        resolution: '2400 x 1080 piksel',
        refreshRate: '1–120 Hz (Oyunlarda 144 Hz)',
        peakBrightness: '2500 nit',
        protection: 'Corning Gorilla Glass Victus 2'
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
        main: '50 MP Sony IMX890, 6-Eksenli Hibrit Gimbal Sabitleyici 3.0',
        ultrawide: '13 MP, 120°',
        telephoto: '32 MP 3x Optik Telefoto, OIS',
        front: '32 MP RGBW',
        video: '8K 24fps, 4K 60fps'
      },
      battery: {
        capacity: '5500 mAh',
        wiredCharging: '65W HyperCharge',
        wirelessCharging: '15W Qi',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '163.8 x 76.8 x 8.9 mm',
        weight: '224 g',
        materials: '%100 geri dönüştürülmüş alüminyum çerçeve, mat cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, NFC',
        audioAndExtras: '3.5mm Dirac Virtuo kulaklık jakı, AI Çağrı Tercümanı'
      },
      software: {
        osAtLaunch: 'Android 14 / ZenUI',
        updatePolicy: '2 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'zf11u-ai-transcript',
        title: 'İnternetsiz Cihaz İçi Ses Kaydı Deşifresi ve Arama Özeti',
        category: 'Verimlilik',
        howToAccess: 'Ses Kaydedici / Telefon > AI Transcript',
        description:
          'Toplantı kayıtlarını veya telefon görüşmelerini buluta yüklemeden tamamen cihaz içinde metne döker ve özet çıkarır.'
      }
    ]
  },
  {
    id: 'realme-13-pro-plus',
    brandId: 'realme',
    name: 'realme 13 Pro+ 5G',
    series: 'Numara Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      'Orta-üst segmentte nadir bulunan 50 MP Sony LYT-600 3x periskop telefoto lensi, Monet esintili cam arka yüzeyi ve 80W SuperVOOC şarjıyla fotoğraf odaklı model.',
    highlightSpec: '6.7" 120Hz AMOLED · SD 7s Gen 2 · 3x Periskop · 5200 mAh 80W',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'Kavisli OLED',
        resolution: '2412 x 1080 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '2000 nit',
        protection: 'Corning Gorilla Glass 7i'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 7s Gen 2',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 710',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony LYT-701, f/1.88, OIS',
        ultrawide: '8 MP, f/2.2',
        telephoto: '50 MP 3x Sony LYT-600 Periskop (120x SuperZoom), OIS',
        front: '32 MP Sony',
        video: '4K 30fps'
      },
      battery: {
        capacity: '5200 mAh',
        wiredCharging: '80W SuperVOOC (19 dk %50)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '161.3 x 73.9 x 8.2 mm',
        weight: '190 g',
        materials: 'Monet altın cam veya vegan deri arka kapak',
        waterResistance: 'IP65',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.2, NFC',
        audioAndExtras: 'Stereo hoparlör, AI Ultra Clarity netleştirme'
      },
      software: {
        osAtLaunch: 'Android 14 / realme UI 5.0',
        updatePolicy: '2 yıl Android + 3 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'r13pp-ai-group-enhance',
        title: 'AI Grup Fotoğrafı Yüz Netleştirme & Bulanık Fotoğraf Kurtarma',
        category: 'Kamera',
        howToAccess: 'Fotoğraflar > Düzenle > AI Ultra Clarity',
        description:
          'Uzak grup fotoğraflarındaki bulanık yüzleri ve yüksek zoom çekimlerindeki doku kaybını tek dokunuşta netleştirir.'
      }
    ]
  },
  {
    id: 'nokia-lumia-1020',
    brandId: 'nokia',
    name: 'Nokia Lumia 1020',
    series: 'Lumia PureView',
    releaseYear: 2013,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      '1/1.5 inç boyutundaki dev 41 MP PureView sensörü, Xenon flaşı ve Carl Zeiss 6 elemanlı optikleriyle kendi döneminin çok ötesinde kayıpsız zoom sunan efsane.',
    highlightSpec: '4.5" ClearBlack AMOLED · 41 MP PureView · Xenon Flaş · OIS',
    specs: {
      display: {
        size: '4.5 inç',
        panel: 'PureMotion HD+ ClearBlack AMOLED',
        resolution: '1280 x 768 piksel (332 ppi)',
        refreshRate: '60 Hz (Süper Hassas Eldiven Dokunuş)',
        peakBrightness: '600 nit',
        protection: 'Corning Gorilla Glass 3'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon S4 Plus',
        cpu: '2 Çekirdek 1.5 GHz Krait',
        gpu: 'Adreno 225',
        processNode: '28 nm'
      },
      memory: {
        ram: '2 GB',
        storage: '32 GB / 64 GB',
        storageType: 'eMMC',
        expandable: 'Yok'
      },
      camera: {
        main: '41 MP (38 MP etkin) 1/1.5" BSI PureView, f/2.2, Rulmanlı OIS, Xenon + LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok (3x Kayıpsız Sensör Zoom)',
        front: '1.2 MP geniş açı',
        video: '1080p 30fps (6x kayıpsız zoom & Rich Recording mikrofon)'
      },
      battery: {
        capacity: '2000 mAh',
        wiredCharging: 'Micro-USB',
        wirelessCharging: 'Opsiyonel kablosuz şarj kapağı ile Qi',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '130.4 x 71.4 x 10.4 mm',
        weight: '158 g',
        materials: 'Yekpare mat sarı/siyah/beyaz polikarbonat gövde',
        waterResistance: 'Yok',
        connectivity: '4G LTE, Wi-Fi n, Bluetooth 3.0, NFC',
        audioAndExtras: 'Fiziksel 2 kademeli deklanşör, Nokia Pro Cam RAW DNG desteği'
      },
      software: {
        osAtLaunch: 'Windows Phone 8 (WP 8.1 Denim’e kadar)',
        updatePolicy: 'Dönem Lumia Black / Denim güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'l1020-dual-save',
        title: 'Aynı Anda 38 MP DNG RAW + 5 MP Paylaşım Kopyası Kaydetme',
        category: 'Kamera',
        howToAccess: 'Nokia Pro Cam > Ayarlar > Çekim Modu > JPEG (5MP) + DNG (34/38MP)',
        description:
          'Her deklanşörde hem anlık paylaşım için 5 MP süper örneklenmiş fotoğraf hem de sonradan kadraj değiştirmek için tam 38 MP DNG dosyası saklar.'
      }
    ]
  },
  {
    id: 'motorola-edge-50-ultra',
    brandId: 'motorola',
    name: 'Motorola Edge 50 Ultra',
    series: 'Edge Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Gerçek Nordic ahşap arka kapak seçeneği, Pantone onaylı ekran/kamera renkleri, 64 MP 3x periskop ve 125W TurboPower şarjıyla özgün amiral gemisi.',
    highlightSpec: '6.7" 144Hz pOLED · SD 8s Gen 3 · Gerçek Ahşap Arka · 125W/50W',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'Pantone Validated pOLED',
        resolution: '2712 x 1220 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '2500 nit',
        protection: 'Corning Gorilla Glass Victus'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8s Gen 3',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 735',
        processNode: '4 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.6, OIS + Lazer Otofokus',
        ultrawide: '50 MP, f/2.0, Makro',
        telephoto: '64 MP 3x Periskop Telefoto, OIS',
        front: '50 MP Otofokuslu, f/1.9',
        video: '4K 60fps HDR10+'
      },
      battery: {
        capacity: '4500 mAh',
        wiredCharging: '125W TurboPower (18 dk %100)',
        wirelessCharging: '50W Kablosuz',
        reverseCharging: '10W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '161.1 x 72.4 x 8.6 mm',
        weight: '197 g',
        materials: 'Kumlanmış alüminyum çerçeve, gerçek Nordic ahşap / vegan deri',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, UWB',
        audioAndExtras: 'USB 3.1 Gen 2 (DisplayPort 1.4), Smart Connect'
      },
      software: {
        osAtLaunch: 'Android 14 / Hello UI',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'e50u-horizon-lock',
        title: '360° Ufuk Kilidi (Telefon Dönse Bile Video Düz Kalır)',
        category: 'Kamera',
        howToAccess: 'Kamera > Video > Ufuk Kilidi (Horizon Lock) simgesi',
        description:
          'Koşarken veya telefonu 360 derece döndürdüğünüzde dahi ufuk çizgisini aksiyon kamerası gibi yatayda sabit tutar.'
      }
    ]
  },
  {
    id: 'tecno-camon-30-pro',
    brandId: 'tecno',
    name: 'TECNO Camon 30 Pro 5G',
    series: 'Camon 30 Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      'Üçlü 50 MP kamera dizilimi (Sony IMX890 OIS ana + 50 MP ultra geniş + 50 MP göz takipli ön), 144 Hz AMOLED ve 70W şarj sunan fotoğraf odaklı model.',
    highlightSpec: '6.78" 144Hz AMOLED · Dimensity 8200 Ultimate · Üçlü 50 MP · 70W',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'AMOLED',
        resolution: '2436 x 1080 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '1300 nit',
        protection: 'Gorilla Glass'
      },
      performance: {
        chipset: 'MediaTek Dimensity 8200 Ultimate',
        cpu: '8 Çekirdek (3.1 GHz)',
        gpu: 'Mali-G610 MC6',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB (+12 GB Genişletilmiş)',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony IMX890, f/1.88, OIS',
        ultrawide: '50 MP, f/2.2, 114°',
        telephoto: '2 MP Derinlik',
        front: '50 MP Göz Takipli Otofokuslu',
        video: '4K 60fps HDR'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '70W Ultra Charge (50 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '164 x 74.5 x 7.7 mm',
        weight: '189 g',
        materials: 'Süet-dokulu vegan deri / cam arka',
        waterResistance: 'IP54',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, IR Verici, NFC',
        audioAndExtras: 'Arka kırmızı kamera kayıt ışığı, Dolby Atmos stereo'
      },
      software: {
        osAtLaunch: 'Android 14 / HiOS 14',
        updatePolicy: '2 yıl Android + 3 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'camon30p-tally-light',
        title: 'Arka Kapaktaki Kırmızı Video Kayıt ve Şarj Gösterge LED’i',
        category: 'Kamera',
        howToAccess: 'Ayarlar > Özel İşlevler > Arka Kamera Göstergesi',
        description:
          'Kamera adasının yanındaki kırmızı nokta LED’i video kaydı, geri sayım ve şarj sırasında yanıp sönerek profesyonel kamera tally ışığı gibi çalışır.'
      }
    ]
  },
  {
    id: 'infinix-gt-20-pro',
    brandId: 'infinix',
    name: 'Infinix GT 20 Pro',
    series: 'GT Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Oyun',
    summary:
      'Özel Pixelworks X5 Turbo ekran çipiyle oyunlarda 120 FPS kare enterpolasyonu, RGB Mecha Loop arka aydınlatma ve Bypass Charging sunan oyuncu telefonu.',
    highlightSpec: '6.78" 144Hz AMOLED · Dimensity 8200 Ultimate · Pixelworks X5 · RGB',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'AMOLED (Çerçevesiz)',
        resolution: '2436 x 1080 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '1300 nit',
        protection: 'Dayanıklı ön cam'
      },
      performance: {
        chipset: 'MediaTek Dimensity 8200 Ultimate + Pixelworks X5 Turbo',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G610 MC6',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB LPDDR5X',
        storage: '256 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '108 MP Samsung HM6, f/1.75, OIS',
        ultrawide: '2 MP Makro',
        telephoto: '2 MP Derinlik',
        front: '32 MP, f/2.2',
        video: '4K 60fps'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '45W Hızlı Şarj (Bypass Charging)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '164.3 x 75.4 x 8.15 mm',
        weight: '194 g',
        materials: 'Mecha Loop RGB LED arka panel',
        waterResistance: 'IP54',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, IR Verici, NFC',
        audioAndExtras: 'JBL ayarlı stereo hoparlör, X eksenli titreşim motoru'
      },
      software: {
        osAtLaunch: 'Android 14 / XOS 14',
        updatePolicy: '2 yıl Android + 3 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'gt20p-frame-interpolation',
        title: 'Pixelworks X5 Çipi ile 60 FPS Oyunları 120 FPS’e Yükseltme',
        category: 'Geliştirici',
        howToAccess: 'Oyun içinde kenardan kaydır > XArena > Kare Hızı Artırma',
        description:
          'Donanımsal görüntü işlemcisi sayesinde normalde 60 FPS kilitli oyunlara ara kare ekleyerek 120 FPS akıcılıkta oynatır.'
      }
    ]
  },
  {
    id: 'redmagic-10-pro',
    brandId: 'nubia',
    name: 'nubia RedMagic 10 Pro',
    series: 'RedMagic 10 Serisi',
    releaseYear: 2024,
    era: '2025-2026',
    segment: 'Oyun',
    summary:
      'Çentiksiz ve kamerası ekran altında gizli 144 Hz BOE Q9+ ekran, 7050 mAh çift hücreli silikon pil, dahili 23.000 RPM fan ve Snapdragon 8 Elite işlemcili canavar.',
    highlightSpec: '6.85" 144Hz Tam Ekran · SD 8 Elite · 7050 mAh · Dahili 23K RPM Fan',
    specs: {
      display: {
        size: '6.85 inç',
        panel: 'BOE Q9+ AMOLED (Ekran Altı Görünmez Kamera)',
        resolution: '2688 x 1216 piksel (1.5K)',
        refreshRate: '144 Hz (2500 Hz anlık dokunma)',
        peakBrightness: '2000 nit',
        protection: 'Corning Gorilla Glass'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite + RedCore R3',
        cpu: '8 Çekirdek Oryon (4.32 GHz)',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB / 16 GB / 24 GB LPDDR5X Ultra',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.1 Pro',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP OmniVision OV50E, f/1.88, OIS',
        ultrawide: '50 MP, f/2.2',
        telephoto: '2 MP Makro',
        front: '16 MP Ekran Altı (Tamamen Gizli)',
        video: '8K 30fps, 4K 60fps'
      },
      battery: {
        capacity: '7050 mAh (Çift Hücreli Silikon-Karbon)',
        wiredCharging: '100W Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '163.4 x 76.1 x 8.9 mm',
        weight: '229 g',
        materials: 'Havacılık alüminyumu, çıkıntısız düz cam arka',
        waterResistance: 'Fan hava kanallı tasarım',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici, 3.5mm Jak',
        audioAndExtras: '23.000 RPM RGB fan, Sıvı Metal soğutma, 520 Hz omuz tetikleri'
      },
      software: {
        osAtLaunch: 'Android 15 / RedMagic OS 10',
        updatePolicy: 'Düzenli oyun & güvenlik yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'rm10p-shoulder-triggers',
        title: '520 Hz Kapasitif Omuz Tetiklerini Günlük Kısayola Atama',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Omuz Tetikleyicileri / Kırmızı Game Space Anahtarı',
        description:
          'Yan çerçevedeki dokunmatik L1/R1 tetiklerini yalnızca oyunlarda değil fotoğraf çekme veya hızlı ekran görüntüsü için de kullanabilirsiniz.'
      }
    ]
  },
  {
    id: 'general-mobile-phoenix-5g',
    brandId: 'general-mobile',
    name: 'General Mobile Phoenix 5G',
    series: 'Phoenix Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      'Türkiye’de üretilen 5G destekli kavisli AMOLED ekranlı, 200 MP Super Pixel modlu ve 66W hızlı şarjlı General Mobile amiral modeli.',
    highlightSpec: '6.78" 120Hz Kavisli AMOLED · Dimensity 7050 · 66W · Yerli Üretim',
    specs: {
      display: {
        size: '6.78 inç',
        panel: '3D Kavisli AMOLED',
        resolution: '2400 x 1080 piksel (FHD+)',
        refreshRate: '120 Hz',
        peakBrightness: '950 nit',
        protection: 'Dayanıklı kavisli cam'
      },
      performance: {
        chipset: 'MediaTek Dimensity 7050 5G',
        cpu: '8 Çekirdek (2.6 GHz)',
        gpu: 'Mali-G68 MC4',
        processNode: '6 nm'
      },
      memory: {
        ram: '8 GB (+8 GB Genişletilmiş RAM)',
        storage: '256 GB',
        storageType: 'UFS 2.2',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP AI (200 MP Super Pixel modu), f/1.8',
        ultrawide: '8 MP, 120°',
        telephoto: '2 MP Makro + 2 MP Derinlik',
        front: '16 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '4700 mAh',
        wiredCharging: '66W Turbo Şarj (15 dk %50)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '164.0 x 74.8 x 8.0 mm',
        weight: '185 g',
        materials: 'İnce kavisli cam gövde',
        waterResistance: 'Sıçramaya dayanıklı',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.2, NFC',
        audioAndExtras: 'Ekran içi parmak izi, Kutu içeriğinde 66W adaptör'
      },
      software: {
        osAtLaunch: 'Android 13 / Android 14',
        updatePolicy: 'Güvenlik ve sistem yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'gmphoenix-superpixel',
        title: '50 MP Sensörle 200 MP Yüksek Çözünürlüklü Çekim Modu',
        category: 'Kamera',
        howToAccess: 'Kamera > Daha Fazla > 200MP Super Pixel',
        description:
          'Çok kareli piksel kaydırma algoritmasıyla tabela, belge ve manzara çekimlerinde 200 MP boyutunda detaylı fotoğraflar üretir.'
      }
    ]
  }
];
