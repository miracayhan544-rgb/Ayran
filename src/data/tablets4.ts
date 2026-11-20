import { PhoneModel } from '../types/phone';

export const TABLETS_DATA_4: PhoneModel[] = [
  {
    id: 'ipad-pro-m2-12-9',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad Pro 12.9" (M2 — 6. Nesil)',
    series: 'iPad Pro Serisi',
    releaseYear: 2022,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Apple M2 çipi, Mini-LED Liquid Retina XDR ekranı, Apple Pencil Dokunmadan Algılama (Hover) ve ProRes video çekimiyle 2022’nin profesyonel yaratıcı standardı.',
    highlightSpec: '12.9" Mini-LED XDR · Apple M2 · 120Hz ProMotion · Pencil Hover · Thunderbolt',
    specs: {
      display: {
        size: '12.9 inç',
        panel: 'Liquid Retina XDR Mini-LED (2596 yerel karartma bölgesi)',
        resolution: '2732 x 2048 piksel',
        refreshRate: '120 Hz ProMotion',
        peakBrightness: '1600 nit HDR',
        protection: 'Yansıma önleyici kaplama'
      },
      performance: {
        chipset: 'Apple M2',
        cpu: '8 Çekirdek',
        gpu: '10 Çekirdek Apple GPU',
        processNode: '5 nm'
      },
      memory: {
        ram: '8 GB / 16 GB (1 TB ve 2 TB sürümlerde)',
        storage: '128 GB / 256 GB / 512 GB / 1 TB / 2 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP Geniş + 10 MP Ultra Geniş + LiDAR',
        ultrawide: '10 MP',
        telephoto: 'Yok',
        front: '12 MP TrueDepth Center Stage',
        video: '4K 60fps ProRes'
      },
      battery: {
        capacity: '40.88 Wh (~10758 mAh)',
        wiredCharging: '30W+ USB-C PD',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '280.6 x 214.9 x 6.4 mm',
        weight: '682 g',
        materials: 'Alüminyum yekpare kasa',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6E, 5G, Thunderbolt / USB 4, Bluetooth 5.3',
        audioAndExtras: 'Face ID, 4 stüdyo hoparlör, 12 mm Pencil Hover'
      },
      software: {
        osAtLaunch: 'iPadOS 16',
        updatePolicy: '7+ yıl iPadOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ipadprom2-reference-mode',
        title: 'Renk Uzmanı Referans Modu ve Sidecar ile Mac İkinci Ekran',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Ekran ve Parlaklık > İleri Düzey > Referans Modu',
        description:
          'Mini-LED paneli HDR/SDR renk düzenleme için kalibre edilmiş referans monitöre dönüştürür ve Mac yanında kablosuz çizim tableti olarak çalışır.'
      }
    ]
  },
  {
    id: 'ipad-pro-m1-11',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad Pro 11" (M1 — 3. Nesil)',
    series: 'iPad Pro Serisi',
    releaseYear: 2021,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Masaüstü sınıfı Apple M1 çipini, Thunderbolt 4 portunu ve Center Stage otomatik kadrajlı ön kamerayı iPad ailesine getiren dönüm noktası model.',
    highlightSpec: '11" 120Hz Liquid Retina · İlk Apple M1 iPad · Thunderbolt 4 · 16 GB RAM Ops.',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'Liquid Retina IPS LCD',
        resolution: '2388 x 1668 piksel',
        refreshRate: '120 Hz ProMotion',
        peakBrightness: '600 nit',
        protection: 'Yansıma önleyici kaplama'
      },
      performance: {
        chipset: 'Apple M1',
        cpu: '8 Çekirdek',
        gpu: '8 Çekirdek',
        processNode: '5 nm'
      },
      memory: {
        ram: '8 GB / 16 GB',
        storage: '128 GB – 2 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP + 10 MP Ultra Geniş + LiDAR',
        ultrawide: '10 MP',
        telephoto: 'Yok',
        front: '12 MP TrueDepth Center Stage',
        video: '4K 60fps'
      },
      battery: {
        capacity: '28.65 Wh (~7538 mAh)',
        wiredCharging: '20W+ USB-C PD',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '247.6 x 178.5 x 5.9 mm',
        weight: '466 g',
        materials: 'Alüminyum yekpare gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, 5G, Thunderbolt / USB 4 (40 Gbps)',
        audioAndExtras: 'Face ID, 4 hoparlör, LiDAR 3D tarayıcı'
      },
      software: {
        osAtLaunch: 'iPadOS 14.5',
        updatePolicy: 'Apple Intelligence destekli uzun ömürlü iPadOS desteği'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ipadprom1-thunderbolt',
        title: '40 Gbps Thunderbolt 4 ile 6K Pro Display XDR ve Harici SSD Bağlama',
        category: 'Verimlilik',
        howToAccess: 'Dosyalar Uygulaması > Harici NVMe SSD / Thunderbolt Kablosu',
        description:
          'Doğrudan yüksek hızlı NVMe disklerden 4K video kurgusu yapmanıza ve 6K çözünürlüğe kadar harici monitör sürmenize olanak tanır.'
      }
    ]
  },
  {
    id: 'ipad-air-m2-13',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad Air 13" (M2)',
    series: 'iPad Air Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'iPad Air tarihinde ilk kez 13 inç dev ekran boyutunu sunan; yatay konumlu Center Stage kamerası ve Apple Pencil Pro desteğiyle Pro alternatifi model.',
    highlightSpec: '13" Liquid Retina · Apple M2 · İlk 13" Air · Yatay Kamera',
    specs: {
      display: {
        size: '12.9 inç (13" sınıfı)',
        panel: 'Liquid Retina IPS LCD',
        resolution: '2732 x 2048 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '600 nit',
        protection: 'Yansıma önleyici kaplama'
      },
      performance: {
        chipset: 'Apple M2',
        cpu: '8 Çekirdek',
        gpu: '9 Çekirdek',
        processNode: '5 nm'
      },
      memory: {
        ram: '8 GB',
        storage: '128 GB / 256 GB / 512 GB / 1 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP, f/1.8',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Yatay Center Stage',
        video: '4K 60fps'
      },
      battery: {
        capacity: '36.59 Wh',
        wiredCharging: '20W+ USB-C',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '280.6 x 214.9 x 6.1 mm',
        weight: '617 g',
        materials: 'Alüminyum yekpare gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6E, 5G, Bluetooth 5.3, USB-C',
        audioAndExtras: 'Touch ID güç tuşunda, çift baslı yatay stereo hoparlör'
      },
      software: {
        osAtLaunch: 'iPadOS 17.5',
        updatePolicy: '6–7 yıl iPadOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ipadairm2-squeeze',
        title: 'Apple Pencil Pro Sıkma (Squeeze) ve Döndürme (Barrel Roll) Paleti',
        category: 'Verimlilik',
        howToAccess: 'Notlar / Freeform > Kalemi parmaklarınızla hafifçe sıkın',
        description:
          'Kalemi sıktığınızda imlecin yanında hızlı araç paleti açılır; kalemi kendi ekseninde çevirerek fırça açısını gerçek zamanlı değiştirir.'
      }
    ]
  },
  {
    id: 'ipad-air-m1',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad Air (5. Nesil — M1)',
    series: 'iPad Air Serisi',
    releaseYear: 2022,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Orta segment iPad Air serisine M1 işlemci ve 8 GB RAM getirerek uzun yıllar güncel kalan, Apple Intelligence desteği alabilen popüler 10.9 inç tablet.',
    highlightSpec: '10.9" Liquid Retina · Apple M1 · 8 GB RAM · Center Stage 12 MP',
    specs: {
      display: {
        size: '10.9 inç',
        panel: 'Liquid Retina IPS',
        resolution: '2360 x 1640 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Yansıma önleyici kaplama'
      },
      performance: {
        chipset: 'Apple M1',
        cpu: '8 Çekirdek',
        gpu: '8 Çekirdek',
        processNode: '5 nm'
      },
      memory: {
        ram: '8 GB',
        storage: '64 GB / 256 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP, f/1.8',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Ultra Geniş Center Stage',
        video: '4K 60fps'
      },
      battery: {
        capacity: '28.6 Wh',
        wiredCharging: '20W USB-C',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '247.6 x 178.5 x 6.1 mm',
        weight: '461 g',
        materials: 'Alüminyum gövde (5 renk)',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, 5G, Bluetooth 5.0, USB-C 3.1 Gen 2 (10 Gbps)',
        audioAndExtras: 'Touch ID güç tuşunda, Apple Pencil 2 uyumlu'
      },
      software: {
        osAtLaunch: 'iPadOS 15.4',
        updatePolicy: 'Apple Intelligence destekli uzun iPadOS ömrü'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ipadair5-universal-control',
        title: 'Evrensel Denetim (Tek Mac Faresiyle iPad’i Yönetme)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Genel > AirPlay ve Süreklilik > İmleç ve Klavye',
        description:
          'MacBook’unuzun trackpad imlecini ekran kenarından doğrudan iPad Air ekranına geçirip metin kopyalayıp dosya sürüklemenizi sağlar.'
      }
    ]
  },
  {
    id: 'ipad-10-gen',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad (10. Nesil)',
    series: 'Standart iPad Serisi',
    releaseYear: 2022,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Ana Ekran (Home) tuşuna veda edip tam ekran tasarıma, USB-C portuna ve yatay konumlu ön kameraya geçen standart iPad serisinin dönüm noktası modeli.',
    highlightSpec: '10.9" Liquid Retina · A14 Bionic · USB-C · Yatay Ön Kamera',
    specs: {
      display: {
        size: '10.9 inç',
        panel: 'Liquid Retina IPS LCD',
        resolution: '2360 x 1640 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Oleofobik cam'
      },
      performance: {
        chipset: 'Apple A14 Bionic',
        cpu: '6 Çekirdek',
        gpu: '4 Çekirdek',
        processNode: '5 nm'
      },
      memory: {
        ram: '4 GB',
        storage: '64 GB / 256 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP, f/1.8',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Yatay Center Stage',
        video: '4K 60fps'
      },
      battery: {
        capacity: '28.6 Wh',
        wiredCharging: '20W USB-C',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '248.6 x 179.5 x 7.0 mm',
        weight: '477 g',
        materials: 'Canlı renkli alüminyum gövde (Mavi, Pembe, Sarı, Gümüş)',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, 5G, Bluetooth 5.2, USB-C',
        audioAndExtras: 'Touch ID güç tuşunda, Magic Keyboard Folio uyumlu'
      },
      software: {
        osAtLaunch: 'iPadOS 16',
        updatePolicy: '5–6 yıl iPadOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ipad10-landscape-centerstage',
        title: 'Yatay Çerçevede Doğal Göz Temaslı Center Stage',
        category: 'Kamera',
        howToAccess: 'FaceTime / Zoom > Denetim Merkezi > Video Efektleri > Ana Sahne',
        description:
          'İlk kez uzun kenara taşınan kamera sayesinde klavyeyle görüntülü görüşürken doğrudan kameraya bakıyormuş gibi doğal açı yakalar.'
      }
    ]
  },
  {
    id: 'ipad-9-gen',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad (9. Nesil)',
    series: 'Standart iPad Serisi',
    releaseYear: 2021,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Klasik Home tuşu (Touch ID) ve 3.5 mm kulaklık jakını koruyan son iPad modeli; uygun fiyatı sayesinde Türkiye’de en yaygın kullanılan eğitim ve ev tabletlerinden biridir.',
    highlightSpec: '10.2" Retina · Apple A13 Bionic · Home Tuşu + 3.5 mm Jak · True Tone',
    specs: {
      display: {
        size: '10.2 inç',
        panel: 'Retina IPS LCD (True Tone)',
        resolution: '2160 x 1620 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Oleofobik cam'
      },
      performance: {
        chipset: 'Apple A13 Bionic',
        cpu: '6 Çekirdek',
        gpu: '4 Çekirdek',
        processNode: '7 nm+'
      },
      memory: {
        ram: '3 GB',
        storage: '64 GB / 256 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '8 MP, f/2.4',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Ultra Geniş Center Stage',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '32.4 Wh (~8557 mAh)',
        wiredCharging: '20W Lightning',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '250.6 x 174.1 x 7.5 mm',
        weight: '487 g',
        materials: 'Alüminyum gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5, LTE, Bluetooth 4.2, Lightning, 3.5 mm kulaklık jakı',
        audioAndExtras: 'Önde Touch ID parmak izi, Apple Pencil 1 desteği'
      },
      software: {
        osAtLaunch: 'iPadOS 15',
        updatePolicy: 'iPadOS 18+ desteği'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ipad9-guided-access',
        title: 'Denetimli Erişim ile Tek Uygulama Çocuk Kilidi',
        category: 'Güvenlik',
        howToAccess: 'Ayarlar > Erişilebilirlik > Denetimli Erişim > Home tuşuna 3 kez bas',
        description:
          'Tableti çocuklara veya sınav moduna verirken tek bir uygulamada kilitler ve dokunmatik ekranın belirli bölgelerini devre dışı bırakır.'
      }
    ]
  },
  {
    id: 'ipad-mini-6',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad mini (6. Nesil)',
    series: 'iPad mini Serisi',
    releaseYear: 2021,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '8.3 inç ince çerçeveli tam ekran tasarıma, yan Touch ID’ye, USB-C’ye ve Apple Pencil 2 manyetik şarja geçerek kompakt tablet tutkunlarının favorisi haline gelen model.',
    highlightSpec: '8.3" Liquid Retina · A15 Bionic · Apple Pencil 2 · 293 g Ultra Kompakt',
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
        chipset: 'Apple A15 Bionic',
        cpu: '6 Çekirdek',
        gpu: '5 Çekirdek',
        processNode: '5 nm'
      },
      memory: {
        ram: '4 GB',
        storage: '64 GB / 256 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP, f/1.8, True Tone Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Center Stage',
        video: '4K 60fps'
      },
      battery: {
        capacity: '19.3 Wh',
        wiredCharging: '20W USB-C',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '195.4 x 134.8 x 6.3 mm',
        weight: '293 g',
        materials: 'Alüminyum yekpare gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, 5G, Bluetooth 5.0, USB-C',
        audioAndExtras: 'Güç tuşunda Touch ID, sol kenar ses tuşları üstte konumlandırıldı'
      },
      software: {
        osAtLaunch: 'iPadOS 15',
        updatePolicy: 'iPadOS 18+ desteği'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ipadmini6-dynamic-volume',
        title: 'Ekran Yönüne Göre Otomatik Değişen Ses Tuşları',
        category: 'Sistem',
        howToAccess: 'Otomatik (Ayarlar > Sesler > Sabit Konumlu Ses Düğmeleri kapalı)',
        description:
          'Tableti dikey veya yatay çevirdiğinizde ses açma/kısma yönünü fiziksel yönelime göre dinamik olarak günceller.'
      }
    ]
  },
  {
    id: 'galaxy-tab-s10-fe',
    brandId: 'samsung',
    deviceType: 'tablet',
    name: 'Samsung Galaxy Tab S10 FE',
    series: 'Galaxy Tab S FE Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Tablet',
    summary:
      '10.9 inç 90 Hz ekranı, Exynos 1580 işlemcisi, IP68 su/toz koruması ve kutudan çıkan S Pen ile taşınabilir boyutlu 2025 Fan Edition tablet.',
    highlightSpec: '10.9" 90Hz · Exynos 1580 · IP68 + S Pen Kutuda · 8000 mAh · 497 g',
    specs: {
      display: {
        size: '10.9 inç',
        panel: 'IPS LCD (Vision Booster)',
        resolution: '2304 x 1440 piksel',
        refreshRate: '90 Hz',
        peakBrightness: '800 nit HBM',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Samsung Exynos 1580',
        cpu: '8 Çekirdek',
        gpu: 'Xclipse 540',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 3.1',
        expandable: 'microSDXC (2 TB)'
      },
      camera: {
        main: '13 MP Otofokus',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Ultra Geniş (Yatay)',
        video: '4K 30fps'
      },
      battery: {
        capacity: '8000 mAh',
        wiredCharging: '45W Süper Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '254.3 x 165.8 x 6.0 mm',
        weight: '497 g',
        materials: 'Zırhlı Alüminyum gövde',
        waterResistance: 'IP68',
        connectivity: 'Wi-Fi 6E, 5G, Bluetooth 5.3, USB-C',
        audioAndExtras: 'S Pen kutuda, Circle to Search, DeX modu'
      },
      software: {
        osAtLaunch: 'Android 15 / One UI 7',
        updatePolicy: '7 yıl güncelleme'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tabs10fe-circle-translate',
        title: 'S Pen ile Ekranda Anlık Daire Çizip Çeviri (Circle to Search)',
        category: 'Verimlilik',
        howToAccess: 'Gezinme çubuğuna S Pen ile basılı tutun > Çevir simgesi',
        description:
          'PDF, web sayfası veya görsel üzerindeki yabancı metni S Pen ile çevreleyerek anında Türkçe çeviri alır.'
      }
    ]
  },
  {
    id: 'galaxy-tab-s9-plus',
    brandId: 'samsung',
    deviceType: 'tablet',
    name: 'Samsung Galaxy Tab S9+',
    series: 'Galaxy Tab S Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '12.4 inç Dynamic AMOLED 2X ekranı, Snapdragon 8 Gen 2 for Galaxy gücü, IP68 suya dayanıklılığı ve çift arka kamerasıyla ideal taşınabilir amiral boyutu.',
    highlightSpec: '12.4" AMOLED 2X · SD 8 Gen 2 · IP68 · 10090 mAh · Ekran İçi Parmak İzi',
    specs: {
      display: {
        size: '12.4 inç',
        panel: 'Dynamic AMOLED 2X 120Hz',
        resolution: '2800 x 1752 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '930 nit',
        protection: 'Gorilla Glass 5'
      },
      performance: {
        chipset: 'Snapdragon 8 Gen 2 for Galaxy',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 740',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 4.0',
        expandable: 'microSDXC'
      },
      camera: {
        main: '13 MP + 8 MP Ultra Geniş',
        ultrawide: '8 MP',
        telephoto: 'Yok',
        front: '12 MP Ultra Geniş',
        video: '4K 30fps'
      },
      battery: {
        capacity: '10090 mAh',
        wiredCharging: '45W Süper Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '285.4 x 185.4 x 5.7 mm',
        weight: '581 g',
        materials: 'Armor Aluminum',
        waterResistance: 'IP68',
        connectivity: 'Wi-Fi 6E, 5G, Bluetooth 5.3, USB-C 3.2',
        audioAndExtras: '4 AKG hoparlör, Bluetooth BLE S Pen kutuda'
      },
      software: {
        osAtLaunch: 'Android 13 / One UI 5.1.1',
        updatePolicy: '4 Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tabs9plus-second-screen',
        title: 'Windows PC İçin Düşük Gecikmeli İkinci Monitör (Second Screen)',
        category: 'Verimlilik',
        howToAccess: 'Hızlı Panel > İkinci Ekran (Windows’ta Win + K)',
        description:
          'Samsung S Pen basınç hassasiyetini koruyarak tableti Windows bilgisayarınız için kablosuz çizim monitörüne dönüştürür.'
      }
    ]
  },
  {
    id: 'galaxy-tab-s9',
    brandId: 'samsung',
    deviceType: 'tablet',
    name: 'Samsung Galaxy Tab S9',
    series: 'Galaxy Tab S Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Standart 11 inç boyuta ilk kez Dynamic AMOLED 2X ekran ve IP68 su geçirmezlik getiren; kompakt amiral gemisi Android tablet.',
    highlightSpec: '11" Dynamic AMOLED 2X · SD 8 Gen 2 · IP68 · S Pen Kutuda · 498 g',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'Dynamic AMOLED 2X',
        resolution: '2560 x 1600 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '750 nit',
        protection: 'Gorilla Glass 5'
      },
      performance: {
        chipset: 'Snapdragon 8 Gen 2 for Galaxy',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 740',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 3.1 / 4.0',
        expandable: 'microSDXC'
      },
      camera: {
        main: '13 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '12 MP Ultra Geniş',
        video: '4K 30fps'
      },
      battery: {
        capacity: '8400 mAh',
        wiredCharging: '45W Süper Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '254.3 x 165.8 x 5.9 mm',
        weight: '498 g',
        materials: 'Armor Aluminum',
        waterResistance: 'IP68',
        connectivity: 'Wi-Fi 6E, 5G, Bluetooth 5.3, USB-C 3.2',
        audioAndExtras: '4 AKG hoparlör, IP68 S Pen'
      },
      software: {
        osAtLaunch: 'Android 13 / One UI 5.1.1',
        updatePolicy: '4 Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tabs9-dex-new',
        title: 'Tablet Üzerinde Yerleşik Yeni Samsung DeX Modu',
        category: 'Verimlilik',
        howToAccess: 'Hızlı Panel > DeX (Yeni / Klasik seçeneği)',
        description:
          'Ana ekran düzeninizi ve widget’larınızı kaybetmeden uygulamaları özgürce boyutlandırılabilir masaüstü pencerelerine çevirir.'
      }
    ]
  },
  {
    id: 'galaxy-tab-s6-lite-2024',
    brandId: 'samsung',
    deviceType: 'tablet',
    name: 'Samsung Galaxy Tab S6 Lite (2024)',
    series: 'Galaxy Tab S Lite Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Exynos 1280 işlemciyle yenilenen, pilsiz S Pen kalemi kutusundan çıkan ve 3.5 mm kulaklık jakını koruyan popüler öğrenci tableti.',
    highlightSpec: '10.4" TFT · Exynos 1280 · S Pen Kutuda · 3.5 mm Jak · DeX Destekli',
    specs: {
      display: {
        size: '10.4 inç',
        panel: 'TFT LCD',
        resolution: '2000 x 1200 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '400 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Samsung Exynos 1280',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G68',
        processNode: '5 nm'
      },
      memory: {
        ram: '4 GB',
        storage: '64 GB / 128 GB',
        storageType: 'UFS',
        expandable: 'microSDXC (1 TB)'
      },
      camera: {
        main: '8 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '7040 mAh',
        wiredCharging: '15W Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '244.5 x 154.3 x 7.0 mm',
        weight: '465 g',
        materials: 'Metal yekpare kasa',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5, LTE, Bluetooth 5.3, USB-C, 3.5 mm jak',
        audioAndExtras: 'AKG Dolby Atmos stereo hoparlör, pilsiz S Pen'
      },
      software: {
        osAtLaunch: 'Android 14 / One UI 6.1',
        updatePolicy: '4 Android güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tabs6lite24-screenoff-memo',
        title: 'Kapalı Ekranda S Pen ile Hızlı Not (Screen-Off Memo)',
        category: 'Verimlilik',
        howToAccess: 'Ekran kapalıyken S Pen düğmesine basılı tutup ekrana dokunun',
        description:
          'Tabletin kilidini açmadan siyah ekran üzerine anında el yazısı not alıp Samsung Notes’a kaydeder.'
      }
    ]
  },
  {
    id: 'galaxy-tab-active5',
    brandId: 'samsung',
    deviceType: 'tablet',
    name: 'Samsung Galaxy Tab Active5',
    series: 'Galaxy Tab Active (Sağlam Seri)',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Kullanıcı tarafından değiştirilebilen 5050 mAh bataryası, pilsiz çalışma (No-Battery) modu, IP68 + MIL-STD-810H zırhlı kasası ve eldiven dokunmatiğiyle endüstriyel saha tableti.',
    highlightSpec: '8.0" 120Hz · IP68 + MIL-STD-810H · Çıkarılabilir Pil · Pilsiz Çalışma Modu',
    specs: {
      display: {
        size: '8.0 inç',
        panel: 'TFT LCD (Eldiven hassasiyeti)',
        resolution: '1920 x 1200 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '600 nit',
        protection: 'Gorilla Glass 5 + Kutu içi koruyucu kılıf'
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
        expandable: 'microSDXC (1 TB)'
      },
      camera: {
        main: '13 MP, f/1.9',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '5050 mAh (Kullanıcı tarafından çıkarılabilir)',
        wiredCharging: 'USB-C + Pogo Pin + Pilsiz Çalışma Modu',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '126.8 x 213.8 x 10.1 mm',
        weight: '433 g',
        materials: 'Darbe emici saha kasası',
        waterResistance: 'IP68 + MIL-STD-810H (1.5 m düşme dayanımı)',
        connectivity: '5G, Wi-Fi 6, NFC (mPOS uyumlu), 3.5 mm jak, Pogo Pin',
        audioAndExtras: 'Programlanabilir Active Key tuşu, IP68 S Pen'
      },
      software: {
        osAtLaunch: 'Android 14 / One UI 6',
        updatePolicy: '4 Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tabactive5-nobattery-mode',
        title: 'Pilsiz Doğrudan USB Gücüyle Çalışma (No-Battery Mode)',
        category: 'Batarya',
        howToAccess: 'Arka kapağı açıp pili çıkarın > USB-C güç kablosunu bağlayın',
        description:
          'Araç içi kiosklarda veya aşırı sıcak depolarda pil şişmesi riskini sıfırlamak için bataryasız şekilde doğrudan prizden/araçtan çalışır.'
      }
    ]
  },
  {
    id: 'redmi-pad-se',
    brandId: 'xiaomi',
    deviceType: 'tablet',
    name: 'Redmi Pad SE',
    series: 'Redmi Pad Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '11 inç 90 Hz FHD+ ekranı, Snapdragon 680 işlemcisi, dört Dolby Atmos hoparlörü ve yekpare alüminyum gövdesiyle fiyat/performans kategorisinin en çok satan giriş tableti.',
    highlightSpec: '11.0" 90Hz FHD+ · SD 680 · 8000 mAh · 4 Dolby Hoparlör · Metal Gövde',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'IPS LCD (TÜV Düşük Mavi Işık)',
        resolution: '1920 x 1200 piksel',
        refreshRate: '90 Hz (AdaptiveSync)',
        peakBrightness: '400 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 680',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 610',
        processNode: '6 nm'
      },
      memory: {
        ram: '4 GB / 6 GB / 8 GB',
        storage: '128 GB / 256 GB',
        storageType: 'eMMC 5.1',
        expandable: 'microSDXC (1 TB)'
      },
      camera: {
        main: '8 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP (FocusFrame)',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '8000 mAh',
        wiredCharging: '18W Destekli (Kutuda 10W)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '255.5 x 167.1 x 7.36 mm',
        weight: '478 g',
        materials: 'Alüminyum alaşım yekpare gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5, Bluetooth 5.0, USB-C, 3.5 mm jak',
        audioAndExtras: '4 Dolby Atmos Hi-Res hoparlör'
      },
      software: {
        osAtLaunch: 'Android 13 / MIUI Pad 14',
        updatePolicy: 'HyperOS güncellemesi aldı'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'redmipadse-reading',
        title: 'Kağıt Dokusu Efektli Okuma Modu ve Bellek Uzantısı',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ekran > Okuma Modu > Kağıt Dokusu',
        description:
          'Ekran üzerine hafif kağıt gren dokusu ekleyerek e-kitap okurken parlama hissini azaltır.'
      }
    ]
  },
  {
    id: 'redmi-pad-se-8-7',
    brandId: 'xiaomi',
    deviceType: 'tablet',
    name: 'Redmi Pad SE 8.7"',
    series: 'Redmi Pad Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Tek elle tutulabilen 8.7 inç 90 Hz ekranı, 6650 mAh pili, çift Dolby Atmos hoparlörü ve opsiyonel 4G arama desteğiyle kompakt okuma ve seyahat tableti.',
    highlightSpec: '8.7" 90Hz · 6650 mAh · 373 g Tek El Boyut · Opsiyonel 4G + IR Verici',
    specs: {
      display: {
        size: '8.7 inç',
        panel: 'IPS LCD',
        resolution: '1340 x 800 piksel',
        refreshRate: '90 Hz',
        peakBrightness: '600 nit (Dış mekan modu)',
        protection: 'Gorilla Glass 3'
      },
      performance: {
        chipset: 'MediaTek Helio G85',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G52 MC2',
        processNode: '12 nm'
      },
      memory: {
        ram: '4 GB / 6 GB',
        storage: '64 GB / 128 GB',
        storageType: 'eMMC 5.1',
        expandable: 'microSDXC (2 TB)'
      },
      camera: {
        main: '8 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '6650 mAh',
        wiredCharging: '18W Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '211.6 x 125.5 x 8.8 mm',
        weight: '373 g',
        materials: 'Mat dokulu polikarbonat kasa',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5, 4G LTE (opsiyonel), Bluetooth 5.3, IR Verici, 3.5 mm jak',
        audioAndExtras: 'Çift Dolby Atmos hoparlör, FM Radyo (4G sürümünde)'
      },
      software: {
        osAtLaunch: 'Android 14 / HyperOS',
        updatePolicy: '2 Android + 3 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'redmipadse87-ir',
        title: 'Kompakt Evrensel Kızılötesi (IR) TV/Klima Kumandası',
        category: 'Verimlilik',
        howToAccess: 'Mi Kumanda Uygulaması',
        description:
          'Üst kenardaki kızılötesi verici sayesinde tek elle televizyon, klima ve projeksiyon cihazlarını kontrol eder.'
      }
    ]
  },
  {
    id: 'xiaomi-pad-5',
    brandId: 'xiaomi',
    deviceType: 'tablet',
    name: 'Xiaomi Pad 5',
    series: 'Xiaomi Pad Serisi',
    releaseYear: 2021,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Xiaomi’nin yıllar sonra küresel tablet pazarına güçlü dönüşünü sağlayan; 11 inç WQHD+ 120 Hz Dolby Vision ekranı ve Snapdragon 860 işlemcisiyle dönemin fiyat/performans ikonu.',
    highlightSpec: '11.0" WQHD+ 120Hz · Snapdragon 860 · Dolby Vision · 8720 mAh',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'IPS LCD (Dolby Vision & HDR10)',
        resolution: '2560 x 1600 piksel (275 ppi)',
        refreshRate: '120 Hz',
        peakBrightness: '500 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 860',
        cpu: '8 Çekirdek Kryo 485',
        gpu: 'Adreno 640',
        processNode: '7 nm'
      },
      memory: {
        ram: '6 GB',
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
        capacity: '8720 mAh',
        wiredCharging: '33W Destekli (Kutuda 22.5W)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '254.7 x 166.3 x 6.9 mm',
        weight: '511 g',
        materials: 'Alüminyum çerçeve ve mat arka kapak',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5, Bluetooth 5.0, USB-C, Pogo Pin',
        audioAndExtras: '4 Dolby Atmos hoparlör, Xiaomi Smart Pen desteği'
      },
      software: {
        osAtLaunch: 'Android 11 / MIUI 12.5 for Pad',
        updatePolicy: 'HyperOS (Android 13 tabanlı)'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'xiaomipad5-smartpen-shortcuts',
        title: 'Xiaomi Smart Pen Çift Tuşlu Hızlı Ekran Alıntısı ve Not',
        category: 'Verimlilik',
        howToAccess: 'Kalemin birincil veya ikincil tuşuna basılı tutup ekrana dokunun',
        description:
          'Ekran kilitliyken bile kalem tuşuna basılı tutup ekrana dokunarak anında Notlar uygulamasını başlatır veya kısmi ekran görüntüsü alır.'
      }
    ]
  }
];
