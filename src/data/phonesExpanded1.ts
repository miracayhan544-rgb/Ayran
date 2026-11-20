import { PhoneModel } from '../types/phone';

export const PHONES_EXPANDED_1: PhoneModel[] = [
  // ================= APPLE EK MODELLER =================
  {
    id: 'iphone-17-pro',
    brandId: 'apple',
    name: 'iPhone 17 Pro',
    series: 'iPhone 17 Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Kompakt Amiral',
    summary:
      'A19 Pro işlemci, 12 GB RAM, 3000 nit parlaklık ve üçlü 48 MP arka kamera sistemini 6.3 inçlik kompakt gövdede sunan güncel Pro model.',
    highlightSpec: '6.3" 3000 nit LTPO · A19 Pro · 12 GB RAM · Üçlü 48 MP',
    specs: {
      display: {
        size: '6.3 inç',
        panel: 'Super Retina XDR LTPO OLED',
        resolution: '2622 x 1206 piksel (460 ppi)',
        refreshRate: '1–120 Hz ProMotion',
        peakBrightness: '3000 nit',
        protection: 'Yeni Nesil Ceramic Shield'
      },
      performance: {
        chipset: 'Apple A19 Pro',
        cpu: '6 Çekirdek',
        gpu: '6 Çekirdek Apple GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP Fusion, f/1.78, OIS',
        ultrawide: '48 MP, f/2.2, Makro',
        telephoto: '48 MP Tetraprizma Periskop',
        front: '18 MP TrueDepth, Otofokus',
        video: '4K 120 fps Dolby Vision, ProRes Log'
      },
      battery: {
        capacity: '4252 mAh (eSIM)',
        wiredCharging: '40W+ USB-C PD (20 dk %50)',
        wirelessCharging: '25W MagSafe / Qi2',
        reverseCharging: '4.5W Kablolu USB-C'
      },
      buildAndConnectivity: {
        dimensions: '150.0 x 71.9 x 8.75 mm',
        weight: '206 g',
        materials: 'Isıl verimli yekpare alaşım & Ceramic Shield',
        waterResistance: 'IP68 (6m / 30 dk)',
        connectivity: '5G, Wi-Fi 7, Bluetooth 6.0, UWB 2',
        audioAndExtras: 'USB 3 (10 Gbps), Kamera Denetimi, LiDAR'
      },
      software: {
        osAtLaunch: 'iOS 26',
        updatePolicy: '7 yıl iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: '17p-prores-raw',
        title: 'Kamera Denetimi ile Tek Elle Odak ve LUT Ön İzleme',
        category: 'Kamera',
        howToAccess: 'Ayarlar > Kamera > Kamera Denetimi',
        description:
          'Yan kenardaki dokunmatik düğmeyi kaydırarak pozlama telafisi, alan derinliği ve 48 MP telefoto geçişini vizörden gözünüzü ayırmadan yönetir.'
      }
    ]
  },
  {
    id: 'iphone-14-pro-max',
    brandId: 'apple',
    name: 'iPhone 14 Pro Max',
    series: 'iPhone 14 Serisi',
    releaseYear: 2022,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Dynamic Island etkileşimli çentiği, Her Zaman Açık Ekranı ve Apple’ın ilk 48 MP ProRAW ana kamerasını getiren paslanmaz çelik amiral gemisi.',
    highlightSpec: '6.7" LTPO OLED · A16 Bionic · Dynamic Island · 48 MP',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'Super Retina XDR LTPO OLED',
        resolution: '2796 x 1290 piksel',
        refreshRate: '1–120 Hz ProMotion',
        peakBrightness: '2000 nit',
        protection: 'Ceramic Shield'
      },
      performance: {
        chipset: 'Apple A16 Bionic',
        cpu: '6 Çekirdek',
        gpu: '5 Çekirdek Apple GPU',
        processNode: '4 nm'
      },
      memory: {
        ram: '6 GB LPDDR5',
        storage: '128 GB / 256 GB / 512 GB / 1 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP, f/1.78, sensör kaydırmalı OIS',
        ultrawide: '12 MP, f/2.2, Makro',
        telephoto: '12 MP 3x Optik, f/2.8, OIS',
        front: '12 MP Otofokuslu, f/1.9',
        video: '4K 60 fps Dolby Vision, Hareket Modu'
      },
      battery: {
        capacity: '4323 mAh',
        wiredCharging: '27W Lightning PD',
        wirelessCharging: '15W MagSafe',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '160.7 x 77.6 x 7.85 mm',
        weight: '240 g',
        materials: 'Paslanmaz çelik çerçeve, mat cam arka',
        waterResistance: 'IP68 (6m)',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, Uydu SOS',
        audioAndExtras: 'Dynamic Island, Trafik Kazası Algılama, LiDAR'
      },
      software: {
        osAtLaunch: 'iOS 16 (iOS 18+ uyumlu)',
        updatePolicy: '6 yıl iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: '14pm-dynamic-island-swipe',
        title: 'Dynamic Island’ı Sağa/Sola Kaydırarak Canlı Etkinliği Gizleme',
        category: 'Verimlilik',
        howToAccess: 'Üstteki Dynamic Island kapsülünü içe doğru kaydırın',
        description:
          'Müzik veya zamanlayıcı kapsülünü tamamen kapatmadan kenara doğru kaydırarak ekranın üstünü sadeleştirebilirsiniz.'
      }
    ]
  },
  {
    id: 'iphone-13-pro',
    brandId: 'apple',
    name: 'iPhone 13 Pro',
    series: 'iPhone 13 Serisi',
    releaseYear: 2021,
    era: '2020-2024',
    segment: 'Kompakt Amiral',
    summary:
      'iPhone’a ilk kez 120 Hz ProMotion ekranı, 2 cm makro fotoğrafçılığı ve Sinematik Video modunu getiren paslanmaz çelik klasik.',
    highlightSpec: '6.1" 120Hz OLED · A15 Bionic · Sinematik Mod · Makro',
    specs: {
      display: {
        size: '6.1 inç',
        panel: 'Super Retina XDR LTPO OLED',
        resolution: '2532 x 1170 piksel',
        refreshRate: '10–120 Hz ProMotion',
        peakBrightness: '1200 nit',
        protection: 'Ceramic Shield'
      },
      performance: {
        chipset: 'Apple A15 Bionic',
        cpu: '6 Çekirdek',
        gpu: '5 Çekirdek Apple GPU',
        processNode: '5 nm'
      },
      memory: {
        ram: '6 GB LPDDR4X',
        storage: '128 GB / 256 GB / 512 GB / 1 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP, f/1.5, sensör kaydırmalı OIS',
        ultrawide: '12 MP, f/1.8, 2 cm Makro',
        telephoto: '12 MP 3x Optik, f/2.8',
        front: '12 MP, f/2.2',
        video: '4K 60 fps, ProRes, 1080p Sinematik Mod'
      },
      battery: {
        capacity: '3095 mAh',
        wiredCharging: '23W Lightning PD',
        wirelessCharging: '15W MagSafe',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '146.7 x 71.5 x 7.65 mm',
        weight: '204 g',
        materials: 'Paslanmaz çelik çerçeve',
        waterResistance: 'IP68 (6m)',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.0',
        audioAndExtras: 'LiDAR Tarayıcı, MagSafe, Dual eSIM'
      },
      software: {
        osAtLaunch: 'iOS 15 (iOS 18+ uyumlu)',
        updatePolicy: '6 yıl iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: '13p-cinematic-post-focus',
        title: 'Çekimden Sonra Videodaki Odak Noktasını Değiştirme',
        category: 'Kamera',
        howToAccess: 'Fotoğraflar > Sinematik Video > Düzenle > Kişiye dokun',
        description:
          'Sinematik modda kaydedilen videolarda öndeki kişiden arkadaki kişiye odak geçişini montaj sırasında değiştirebilirsiniz.'
      }
    ]
  },
  {
    id: 'iphone-11-pro-max',
    brandId: 'apple',
    name: 'iPhone 11 Pro Max',
    series: 'iPhone 11 Serisi',
    releaseYear: 2019,
    era: '2000-2019',
    segment: 'Amiral Gemisi',
    summary:
      'Apple’ın ilk "Pro" isimli ve üçlü kamera dizilimli telefonu; Gece Modu ve dokulu mat cam arka yüzeyi hayatımıza soktu.',
    highlightSpec: '6.5" OLED · A13 Bionic · İlk Üçlü Kamera · Gece Modu',
    specs: {
      display: {
        size: '6.5 inç',
        panel: 'Super Retina XDR OLED',
        resolution: '2688 x 1242 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '1200 nit',
        protection: 'Çift iyon değişimli cam'
      },
      performance: {
        chipset: 'Apple A13 Bionic',
        cpu: '6 Çekirdek',
        gpu: '4 Çekirdek Apple GPU',
        processNode: '7 nm+'
      },
      memory: {
        ram: '4 GB LPDDR4X',
        storage: '64 GB / 256 GB / 512 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP, f/1.8, OIS',
        ultrawide: '12 MP, f/2.4, 120°',
        telephoto: '12 MP 2x Optik, f/2.0, OIS',
        front: '12 MP, f/2.2 (4K 60fps)',
        video: '4K 60 fps Genişletilmiş Dinamik Aralık'
      },
      battery: {
        capacity: '3969 mAh',
        wiredCharging: '18W USB-C to Lightning',
        wirelessCharging: '7.5W Qi',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '158 x 77.8 x 8.1 mm',
        weight: '226 g',
        materials: 'Paslanmaz çelik, dokulu mat cam',
        waterResistance: 'IP68 (4m)',
        connectivity: '4.5G LTE, Wi-Fi 6, Bluetooth 5.0, UWB U1 Çipi',
        audioAndExtras: 'Slofie ağır çekim selfie, Deep Fusion'
      },
      software: {
        osAtLaunch: 'iOS 13 (iOS 18’e güncellendi)',
        updatePolicy: '6+ yıl güncelleme'
      }
    },
    modelHiddenFeatures: [
      {
        id: '11pm-quicktake',
        title: 'Deklanşörü Sağa Kaydırarak Kilitleyip Fotoğraftan Anında Videoya Geçme',
        category: 'Kamera',
        howToAccess: 'Fotoğraf modunda beyaz deklanşöre basılı tutup sağa çekin',
        description:
          'Video sekmesine geçmeden anlık olayları kaydetmek için QuickTake özelliğini sunar; sola çekildiğinde seri çekim (Burst) yapar.'
      }
    ]
  },
  {
    id: 'iphone-5s',
    brandId: 'apple',
    name: 'iPhone 5s',
    series: 'iPhone 5 Serisi',
    releaseYear: 2013,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Dünyanın ilk 64-bit akıllı telefon işlemcisi (A7) ve Home tuşuna entegre Touch ID parmak izi okuyucusuyla mobil sektörü dönüştüren kompakt klasik.',
    highlightSpec: '4.0" Retina · İlk 64-bit A7 Çip · Touch ID · 112 g',
    specs: {
      display: {
        size: '4.0 inç',
        panel: 'Retina IPS LCD',
        resolution: '1136 x 640 piksel (326 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Corning Gorilla Glass'
      },
      performance: {
        chipset: 'Apple A7 + M7 Hareket Yardımcı İşlemcisi',
        cpu: '2 Çekirdek 1.3 GHz Cyclone (İlk 64-bit)',
        gpu: 'PowerVR G6430',
        processNode: '28 nm'
      },
      memory: {
        ram: '1 GB LPDDR3',
        storage: '16 GB / 32 GB / 64 GB',
        storageType: 'NAND Flash',
        expandable: 'Yok'
      },
      camera: {
        main: '8 MP iSight, f/2.2, 1.5µm piksel, True Tone Çift LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '1.2 MP FaceTime HD',
        video: '1080p 30fps, 720p 120fps Slo-Mo (İlk kez)'
      },
      battery: {
        capacity: '1560 mAh',
        wiredCharging: 'Lightning (5W)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '123.8 x 58.6 x 7.6 mm',
        weight: '112 g',
        materials: 'Anodize alüminyum yekpare gövde, safir Touch ID halkası',
        waterResistance: 'Yok',
        connectivity: '4G LTE, Wi-Fi n, Bluetooth 4.0',
        audioAndExtras: 'Touch ID parmak izi, 3.5mm jak'
      },
      software: {
        osAtLaunch: 'iOS 7 (iOS 12.5.7’ye kadar 6 yıl)',
        updatePolicy: '5+ yıl büyük güncelleme'
      }
    },
    modelHiddenFeatures: [
      {
        id: '5s-touchid-identify',
        title: 'Ayarlar’da Parmak İzinin Üzerine Dokunarak Hangisi Olduğunu Bulma',
        category: 'Güvenlik',
        howToAccess: 'Ayarlar > Touch ID ve Parola > Parmağınızı sensöre koyun',
        description:
          'Kayıtlı Parmak 1, Parmak 2 listesinden hangisinin hangi parmağınız olduğunu görmek için sensöre dokunduğunuzda listedeki ilgili satır anlık parlar.'
      }
    ]
  },

  // ================= SAMSUNG EK MODELLER =================
  {
    id: 'galaxy-s23-ultra',
    brandId: 'samsung',
    name: 'Samsung Galaxy S23 Ultra',
    series: 'Galaxy S Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Samsung’un ilk 200 MP HP2 sensörünü, 10x gerçek optik periskop lensi ve Snapdragon 8 Gen 2 for Galaxy verimliliğini birleştiren efsanevi model.',
    highlightSpec: '6.8" QHD+ AMOLED · SD 8 Gen 2 · 200 MP + Gerçek 10x Optik · S Pen',
    specs: {
      display: {
        size: '6.8 inç',
        panel: 'Dynamic AMOLED 2X',
        resolution: '3088 x 1440 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '1750 nit',
        protection: 'Corning Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 2 for Galaxy',
        cpu: '8 Çekirdek (3.36 GHz)',
        gpu: 'Adreno 740',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '200 MP, f/1.7, OIS',
        ultrawide: '12 MP, f/2.2, Dual Pixel',
        telephoto: '10 MP 3x Optik + 10 MP Gerçek 10x Optik Periskop',
        front: '12 MP, f/2.2',
        video: '8K 30fps, 4K 60fps'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '45W Süper Hızlı Şarj 2.0',
        wirelessCharging: '15W Kablosuz',
        reverseCharging: '4.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '163.4 x 78.1 x 8.9 mm',
        weight: '234 g',
        materials: 'Armor Aluminum çerçeve, Victus 2 cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, UWB',
        audioAndExtras: 'Bluetooth S Pen, Samsung DeX'
      },
      software: {
        osAtLaunch: 'Android 13 / One UI 5.1 (One UI 7 aldı)',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 's23u-expert-raw-astro',
        title: 'Expert RAW Astrofotoğrafçılık & Çoklu Pozlama Modu',
        category: 'Kamera',
        howToAccess: 'Kamera > Daha Fazla > Expert RAW > Sağ üst Takımyıldız simgesi',
        description:
          '4–10 dakikalık uzun pozlamayla gökyüzü haritası kılavuzu eşliğinde Samanyolu ve yıldız izlerini 16-bit RAW olarak çeker.'
      }
    ]
  },
  {
    id: 'galaxy-s21-ultra',
    brandId: 'samsung',
    name: 'Samsung Galaxy S21 Ultra',
    series: 'Galaxy S Serisi',
    releaseYear: 2021,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'S Serisi içinde S Pen kalem desteği alan ilk model; 108 MP lazer odaklı kamera ve çift telefoto (3x + 10x) mimarisinin öncüsü.',
    highlightSpec: '6.8" QHD+ 120Hz · Exynos 2100 / SD 888 · 108 MP + 10x Optik',
    specs: {
      display: {
        size: '6.8 inç',
        panel: 'Dynamic AMOLED 2X',
        resolution: '3200 x 1440 piksel',
        refreshRate: '10–120 Hz (QHD+ çözünürlükte)',
        peakBrightness: '1500 nit',
        protection: 'Gorilla Glass Victus'
      },
      performance: {
        chipset: 'Exynos 2100 / Snapdragon 888',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G78 MP14 / Adreno 660',
        processNode: '5 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '108 MP, f/1.8, Lazer Otofokus, OIS',
        ultrawide: '12 MP, f/2.2, Dual Pixel (Makro)',
        telephoto: '10 MP 3x + 10 MP 10x Periskop (100x Space Zoom)',
        front: '40 MP, f/2.2, Otofokus',
        video: '8K 24fps, 4K 60fps (Tüm kameralarda)'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '25W Kablolu',
        wirelessCharging: '15W Kablosuz',
        reverseCharging: '4.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '165.1 x 75.6 x 8.9 mm',
        weight: '227 g',
        materials: 'Alüminyum çerçeve, mat Phantom Black cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 6E, Bluetooth 5.2, UWB',
        audioAndExtras: 'Harici S Pen desteği, Yönetmen Görünümü (Director’s View)'
      },
      software: {
        osAtLaunch: 'Android 11 / One UI 3.1 (Android 15 aldı)',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 's21u-directors-view',
        title: 'Yönetmen Görünümü (Tüm Kameraları Canlı Önizleyerek Kayıt)',
        category: 'Kamera',
        howToAccess: 'Kamera > Daha Fazla > Yönetmen Görünümü',
        description:
          'Video çekerken alttaki küçük pencerelerde ultra geniş, 1x, 3x ve ön kamerayı aynı anda canlı izleyip kesintisiz lens geçişi yapabilirsiniz.'
      }
    ]
  },
  {
    id: 'galaxy-s7-edge',
    brandId: 'samsung',
    name: 'Samsung Galaxy S7 Edge',
    series: 'Galaxy S Serisi',
    releaseYear: 2016,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Çift kenarı kavisli 5.5 inçlik tasarımı, IP68 suya dayanıklılığı geri getirmesi, microSD yuvası ve Dual Pixel f/1.7 düşük ışık kamerasıyla unutulmaz model.',
    highlightSpec: '5.5" Kavisli QHD AMOLED · Exynos 8890 · Dual Pixel f/1.7 · IP68',
    specs: {
      display: {
        size: '5.5 inç',
        panel: 'Çift Kavisli Super AMOLED (Always-On)',
        resolution: '2560 x 1440 piksel (534 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '855 nit',
        protection: 'Corning Gorilla Glass 4'
      },
      performance: {
        chipset: 'Samsung Exynos 8890',
        cpu: '8 Çekirdek (4x M1 Mongoose + 4x A53)',
        gpu: 'Mali-T880 MP12',
        processNode: '14 nm'
      },
      memory: {
        ram: '4 GB LPDDR4',
        storage: '32 GB / 64 GB',
        storageType: 'UFS 2.0',
        expandable: 'microSD (256 GB)’a kadar'
      },
      camera: {
        main: '12 MP Dual Pixel, f/1.7, OIS',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP, f/1.7',
        video: '4K 30fps'
      },
      battery: {
        capacity: '3600 mAh',
        wiredCharging: '15W Adaptive Fast Charging',
        wirelessCharging: '15W Hızlı Kablosuz',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '150.9 x 72.6 x 7.7 mm',
        weight: '157 g',
        materials: 'Alüminyum çerçeve, 3D kavisli cam',
        waterResistance: 'IP68 (1.5m / 30 dk)',
        connectivity: '4.5G LTE, Wi-Fi 5, Bluetooth 4.2, NFC',
        audioAndExtras: '3.5mm jak, Arka Nabız & SpO2 sensörü, Edge Panelleri'
      },
      software: {
        osAtLaunch: 'Android 6.0.1 (Android 8.0’a kadar)',
        updatePolicy: '2 büyük Android + güvenlik yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 's7e-edge-lighting',
        title: 'Kavisli Kenarlarda Edge Aydınlatma ve Gece Saati',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ekran > Edge Ekranı > Edge Aydınlatma / Gece Saati',
        description:
          'Telefon yüzüstü dururken arama geldiğinde kavisli yan kenarlar renkli parlar; gece sadece kavisli kenarda düşük ışıklı saat gösterir.'
      }
    ]
  },

  // ================= XIAOMI EK MODELLER =================
  {
    id: 'xiaomi-13-ultra',
    brandId: 'xiaomi',
    name: 'Xiaomi 13 Ultra',
    series: 'Xiaomi Amiral Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Dört adet 50 MP Sony sensörlü Leica kamera dizilimi, f/1.9–f/4.0 çift kademeli fiziksel diyafram ve ikonik kamera gövdesi görünümlü tasarımıyla öne çıkar.',
    highlightSpec: '6.73" 2K LTPO · SD 8 Gen 2 · Dörtlü 50 MP Leica · Değişken Diyafram',
    specs: {
      display: {
        size: '6.73 inç',
        panel: 'C7 LTPO AMOLED',
        resolution: '3200 x 1440 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '2600 nit',
        protection: 'Gorilla Glass Victus'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 2',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 740',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP 1-inç IMX989, f/1.9–f/4.0 Çift Diyafram, OIS',
        ultrawide: '50 MP IMX858, f/1.8, 5 cm Makro',
        telephoto: '50 MP 3.2x + 50 MP 5x Periskop (IMX858)',
        front: '32 MP',
        video: '8K 24fps, 4K 60fps 10-bit Log'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '90W HyperCharge',
        wirelessCharging: '50W Kablosuz',
        reverseCharging: '10W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '163.2 x 74.6 x 9.1 mm',
        weight: '227 g',
        materials: 'Metal çerçeve, antibakteriyel nano silikon deri',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, IR Verici',
        audioAndExtras: 'USB 3.2 Gen 1, Loop LiquidCool soğutma'
      },
      software: {
        osAtLaunch: 'Android 13 / MIUI 14 (HyperOS 2 aldı)',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'x13u-hibernation-1percent',
        title: '%1 Pil Kaldığında 60 Dakika Bekleme Sağlayan Acil Durum Modu',
        category: 'Batarya',
        howToAccess: 'Surge P2 + G1 Pil Çipleri (Otomatik %1 eşiğinde)',
        description:
          'Pil %1 seviyesine indiğinde bile kritik çağrılar için telefonun 60 dakikaya kadar açık kalmasını sağlayan özel düşük voltaj acil moduna girer.'
      }
    ]
  },
  {
    id: 'poco-f6-pro',
    brandId: 'xiaomi',
    name: 'POCO F6 Pro',
    series: 'POCO F Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Oyun',
    summary:
      'Snapdragon 8 Gen 2, 2K 4000 nit AMOLED ekran, 120W HyperCharge (19 dk tam şarj) ve metal çerçeveyi erişilebilir fiyatla sunan performans canavarı.',
    highlightSpec: '6.67" 2K 120Hz AMOLED · SD 8 Gen 2 · 120W HyperCharge',
    specs: {
      display: {
        size: '6.67 inç',
        panel: 'Flow AMOLED (12-bit)',
        resolution: '3200 x 1440 piksel (WQHD+)',
        refreshRate: '120 Hz (3840Hz PWM)',
        peakBrightness: '4000 nit',
        protection: 'Corning Gorilla Glass 5'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 2',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 740',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Light Fusion 800, f/1.6, OIS',
        ultrawide: '8 MP, f/2.2',
        telephoto: '2 MP Makro',
        front: '16 MP',
        video: '8K 24fps, 4K 60fps'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '120W HyperCharge (19 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '160.9 x 75.0 x 8.2 mm',
        weight: '209 g',
        materials: 'Alüminyum alaşım çerçeve, kadife cam arka',
        waterResistance: 'IP54',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, IR Verici',
        audioAndExtras: 'LiquidCool 4.0 buhar odası, Stereo hoparlör'
      },
      software: {
        osAtLaunch: 'Android 14 / HyperOS',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'pocof6p-burst-30fps',
        title: 'Saniyede 30 Kare Ultra Hızlı Seri Çekim & Hareket Yakalama',
        category: 'Kamera',
        howToAccess: 'Kamera > Ayarlar > Hareket Yakalama (Motion Tracking)',
        description:
          'Light Fusion 800 sensörüyle koşan hayvanları veya spor anlarını odak kaybetmeden saniyede 30 kare yakalar.'
      }
    ]
  },
  {
    id: 'xiaomi-mi-6',
    brandId: 'xiaomi',
    name: 'Xiaomi Mi 6',
    series: 'Mi Serisi',
    releaseYear: 2017,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Paslanmaz çelik çerçeve, dört tarafı kavisli seramik/cam arka kapak ve 5.15 inçlik ideal boyutuyla Xiaomi topluluğunun hâlâ efsane gördüğü model.',
    highlightSpec: '5.15" IPS LCD · SD 835 · Paslanmaz Çelik · Çift 12 MP OIS',
    specs: {
      display: {
        size: '5.15 inç',
        panel: 'IPS LCD (1 nit gece parlaklığı)',
        resolution: '1920 x 1080 piksel (428 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '600 nit',
        protection: 'Corning Gorilla Glass 4'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 835',
        cpu: '8 Çekirdek Kryo 280',
        gpu: 'Adreno 540',
        processNode: '10 nm'
      },
      memory: {
        ram: '6 GB LPDDR4X',
        storage: '64 GB / 128 GB',
        storageType: 'UFS 2.1',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP, f/1.8, 4-Eksenli OIS',
        ultrawide: 'Yok',
        telephoto: '12 MP 2x Optik Telefoto, f/2.6',
        front: '8 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '3350 mAh',
        wiredCharging: '18W Quick Charge 3.0',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '145.2 x 70.5 x 7.5 mm',
        weight: '168 g (Cam) / 182 g (Seramik)',
        materials: 'Paslanmaz çelik çerçeve, 4 tarafı kavisli cam/seramik',
        waterResistance: 'Sıçramaya dayanıklı',
        connectivity: '4.5G LTE, Wi-Fi 5, Bluetooth 5.0, IR Verici, NFC',
        audioAndExtras: 'Ön cam altı ultrasonik/kapasitif parmak izi, Stereo ses'
      },
      software: {
        osAtLaunch: 'Android 7.1.1 / MIUI 8 (MIUI 11’e kadar)',
        updatePolicy: 'Dönem MIUI güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'mi6-1nit-reading',
        title: 'Gece Göz Yormayan 1 Nit Ultra Düşük Ekran Parlaklığı',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ekran > Okuma Modu',
        description:
          'Karanlık odada ekran parlaklığını 1 nit seviyesine kadar indirerek göz kamaşmasını tamamen ortadan kaldırır.'
      }
    ]
  },

  // ================= HUAWEI EK MODELLER =================
  {
    id: 'huawei-mate-60-pro',
    brandId: 'huawei',
    name: 'Huawei Mate 60 Pro',
    series: 'Mate Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Kirin 9000S çipiyle geri dönüşü simgeleyen, üç delikli 3D ToF yüz tanımalı, değişken diyaframlı ve uydu sesli aramalı efsanevi Mate serisi modeli.',
    highlightSpec: '6.82" LTPO OLED · Kirin 9000S · f/1.4–f/4.0 · 3D Face ID',
    specs: {
      display: {
        size: '6.82 inç',
        panel: 'LTPO OLED (Dört kenar mikro kavis)',
        resolution: '2720 x 1260 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '2500 nit',
        protection: '2. Nesil Kunlun Glass'
      },
      performance: {
        chipset: 'Huawei Kirin 9000S',
        cpu: '8 Çekirdek (12 İzlek)',
        gpu: 'Maleoon 910',
        processNode: '7 nm'
      },
      memory: {
        ram: '12 GB',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS',
        expandable: 'NM Kart (256 GB)'
      },
      camera: {
        main: '50 MP, f/1.4–f/4.0 Fiziksel Değişken Diyafram, OIS',
        ultrawide: '12 MP, f/2.2',
        telephoto: '48 MP 3.5x Tele-Makro Periskop, f/3.0, OIS',
        front: '13 MP + 3D ToF Derinlik Sensörü',
        video: '4K 60fps'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '88W SuperCharge',
        wirelessCharging: '50W Kablosuz',
        reverseCharging: '20W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '163.7 x 79 x 8.1 mm',
        weight: '225 g',
        materials: 'Yekpare Xuanwu metal gövde + vegan deri/cam',
        waterResistance: 'IP68 (6 metre)',
        connectivity: 'Wi-Fi 6, Bluetooth 5.2, IR Verici, Uydu Arama (Çin)',
        audioAndExtras: '3D ToF Yüz Tanıma, Havadan el hareketleri'
      },
      software: {
        osAtLaunch: 'HarmonyOS 4.0',
        updatePolicy: 'HarmonyOS Next yükseltme uyumlu'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'm60p-single-pill',
        title: 'Üç Kamera Deliğini Tek Dinamik Kapsüle Birleştirme',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ekran ve Parlaklık > Daha Fazla Ekran Ayarı > Kesim',
        description:
          'Ön ekrandaki üç ayrı delik yerine aralardaki pikselleri karartarak tek kesintisiz kapsül veya canlı etkinlik adası görünümü seçebilirsiniz.'
      }
    ]
  },
  {
    id: 'huawei-p30-pro',
    brandId: 'huawei',
    name: 'Huawei P30 Pro',
    series: 'P Serisi',
    releaseYear: 2019,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      '50x periskop zoomu ve geceyi gündüze çeviren RYYB sensörünü akıllı telefonlara tanıtan, tam Google servisli efsanevi kamera telefonu.',
    highlightSpec: '6.47" OLED · Kirin 980 · 5x Optik / 50x Zoom · RYYB Gece Sensörü',
    specs: {
      display: {
        size: '6.47 inç',
        panel: 'Kavisli OLED (Akustik Ekran Ahizesi)',
        resolution: '2340 x 1080 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '600 nit',
        protection: 'Alüminosilikat cam'
      },
      performance: {
        chipset: 'Huawei Kirin 980',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G76 MP10',
        processNode: '7 nm'
      },
      memory: {
        ram: '6 GB / 8 GB',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 2.1',
        expandable: 'NM Kart (256 GB)'
      },
      camera: {
        main: '40 MP RYYB SuperSpectrum, f/1.6, OIS',
        ultrawide: '20 MP, f/2.2, 2.5 cm Makro',
        telephoto: '8 MP 5x Optik Periskop (50x Dijital), OIS + ToF 3D',
        front: '32 MP, f/2.0',
        video: '4K 30fps, Dual-View Video'
      },
      battery: {
        capacity: '4200 mAh',
        wiredCharging: '40W SuperCharge (30 dk %70)',
        wirelessCharging: '15W Kablosuz',
        reverseCharging: 'Ters kablosuz şarj'
      },
      buildAndConnectivity: {
        dimensions: '158 x 73.4 x 8.4 mm',
        weight: '192 g',
        materials: 'Alüminyum çerçeve, Breathing Crystal cam',
        waterResistance: 'IP68',
        connectivity: '4.5G LTE, Wi-Fi 5, Bluetooth 5.0, IR Verici, NFC',
        audioAndExtras: 'Ekran altı ahize (üst çerçevede hoparlör deliği yok)'
      },
      software: {
        osAtLaunch: 'Android 9 / EMUI 9.1 (EMUI 12’ye kadar)',
        updatePolicy: 'Resmi EMUI güncellemeleri & Tam GMS'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p30p-acoustic-display',
        title: 'Üst Hoparlör Deliği Olmadan Ekran Titreşimiyle Ahize Sesi',
        category: 'Sistem',
        howToAccess: 'Çağrı sırasında kulağınızı ekranın üst orta bölgesine yaslayın',
        description:
          'P30 Pro’da geleneksel üst ahize ızgarası yoktur; ses doğrudan ekran camının elektromanyetik titreşimiyle iletilir.'
      }
    ]
  }
];
