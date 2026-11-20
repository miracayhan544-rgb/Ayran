import { PhoneModel } from '../types/phone';

export const PHONES_LATEST_AND_CLASSIC: PhoneModel[] = [
  // ================= 2025-2026 EN GÜNCEL AMİRAL GEMİLERİ =================
  {
    id: 'iphone-17-pro-max',
    brandId: 'apple',
    name: 'iPhone 17 Pro Max',
    series: 'iPhone 17 Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      'Apple A19 Pro işlemci, 12 GB RAM, 2 TB’a kadar depolama, 3000 nit parlaklık, üçlü 48 MP arka kamera dizilimi, 18 MP ön kamera ve 5088 mAh batarya ile Apple’ın en güncel amiral gemisi.',
    highlightSpec: '6.9" 3000 nit LTPO · A19 Pro · 12 GB RAM · Üçlü 48 MP + 18 MP Ön',
    specs: {
      display: {
        size: '6.9 inç',
        panel: 'Super Retina XDR LTPO OLED',
        resolution: '2868 x 1320 piksel (460 ppi)',
        refreshRate: '1–120 Hz ProMotion',
        peakBrightness: '3000 nit (Dış mekan tepe)',
        protection: 'Yeni Nesil Ceramic Shield'
      },
      performance: {
        chipset: 'Apple A19 Pro',
        cpu: '6 Çekirdek',
        gpu: '6 Çekirdek Apple GPU (Donanımsal Ray Tracing)',
        processNode: '3 nm (Gelişmiş N3P)'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB / 2 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP Fusion, f/1.78, sensör kaydırmalı OIS',
        ultrawide: '48 MP, f/2.2, 120°, Makro',
        telephoto: '48 MP Tetraprizma Periskop Telefoto (5x Optik)',
        front: '18 MP TrueDepth, f/1.9, Otofokus + Center Stage',
        video: '4K 120 fps Dolby Vision, ProRes Log',
        opticsNote: 'Üçlü 48 MP sensör mimarisi & geliştirilmiş termal soğutma'
      },
      battery: {
        capacity: '5088 mAh (eSIM) / ~4823 mAh',
        wiredCharging: '40W+ USB-C PD (20 dk %50)',
        wirelessCharging: '25W MagSafe / Qi2',
        reverseCharging: '4.5W Kablolu USB-C'
      },
      buildAndConnectivity: {
        dimensions: '163.4 x 78.0 x 8.75 mm',
        weight: '233 g',
        materials: 'Isıl verimliliği artırılmış alüminyum/titanyum gövde & Ceramic Shield',
        waterResistance: 'IP68 (6m / 30 dk)',
        connectivity: '5G (Snapdragon X80), Wi-Fi 7, Bluetooth 6.0, Apple N1 Çipi, UWB 2',
        audioAndExtras: 'USB 3 (10 Gbps), Kamera Denetimi, Eylem Düğmesi, LiDAR'
      },
      software: {
        osAtLaunch: 'iOS 26',
        updatePolicy: '7 yıl büyük iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: '17pm-dual-capture',
        title: 'Ön 18 MP ve Arka 48 MP Kamerayla Eş Zamanlı Video Kaydı',
        category: 'Kamera',
        howToAccess: 'Kamera > Video > Çift Çekim simgesi',
        description:
          '18 MP kare sensörlü yeni ön kamera ile telefonu dikey tutarken bile yatay veya dikey kadrajlı ön+arka video kaydını aynı anda 4K olarak işler.'
      },
      {
        id: '17pm-adaptive-power',
        title: 'iOS 26 Uyarlanabilir Güç Modu ve 20 Dk Hızlı Şarj Koruması',
        category: 'Batarya',
        howToAccess: 'Ayarlar > Pil > Güç Modu > Uyarlanabilir Güç',
        description:
          '40W+ hızlı şarj sırasında buhar odalı soğutma yönetimini devreye alır ve kullanım alışkanlığına göre arka plan GPU saat hızını dinamik düşürür.'
      }
    ]
  },
  {
    id: 'galaxy-s26-ultra',
    brandId: 'samsung',
    name: 'Samsung Galaxy S26 Ultra',
    series: 'Galaxy S Serisi',
    releaseYear: 2026,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      'Snapdragon 8 Elite Gen 5 for Galaxy işlemci, daha ince 7.9 mm (214 g) gövde, Gorilla Armor 2 yansımasız cam, 60W hızlı şarj ve dahili S Pen ile Samsung’un 2026 amiral gemisi.',
    highlightSpec: '6.9" QHD+ AMOLED · SD 8 Elite Gen 5 · 60W Şarj · 200 MP + S Pen',
    specs: {
      display: {
        size: '6.9 inç',
        panel: 'Dynamic AMOLED 2X (LTPO)',
        resolution: '3120 x 1440 piksel (QHD+)',
        refreshRate: '1–120 Hz adaptif',
        peakBrightness: '2600 nit+',
        protection: 'Corning Gorilla Armor 2 (Yansıma Önleyici)'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite Gen 5 for Galaxy',
        cpu: '8 Çekirdek Yeni Nesil Oryon',
        gpu: 'Yeni Nesil Adreno GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.1',
        expandable: 'Yok'
      },
      camera: {
        main: '200 MP, f/1.7, OIS (Geliştirilmiş düşük ışık sensörü)',
        ultrawide: '50 MP, Makro',
        telephoto: '10 MP 3x Optik + 50 MP 5x/10x Optik Kalite Periskop',
        front: '12 MP, Dual Pixel PDAF',
        video: '8K 30fps, 4K 120fps, 10-bit Galaxy Log'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '60W Süper Hızlı Şarj',
        wirelessCharging: '25W / Qi2 Kablosuz',
        reverseCharging: '4.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '163.6 x 78.1 x 7.9 mm',
        weight: '214 g',
        materials: 'Armor Aluminum / Titanyum rafine çerçeve, Gorilla Armor 2',
        waterResistance: 'IP68 (1.5m / 30 dk)',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4+, UWB',
        audioAndExtras: 'Dahili S Pen, Ultrasonik parmak izi, Samsung DeX'
      },
      software: {
        osAtLaunch: 'Android 17 / One UI 8.5',
        updatePolicy: '7 yıl işletim sistemi ve güvenlik güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 's26u-privacy-display',
        title: 'AI Destekli Yansıma ve Gizlilik Ekran Kontrolü',
        category: 'Güvenlik',
        howToAccess: 'Hızlı Ayarlar / Ayarlar > Ekran > Yandan Görüş Koruma',
        description:
          'Kalabalık ortamlarda şifre girerken veya hassas uygulamalarda ekran görüş açısını yazılımsal olarak daraltarak yanınızdakilerin ekranı okumasını zorlaştırır.'
      },
      {
        id: 's26u-60w-thermal',
        title: '60W Şarjda Akıllı Termal Kısma Yönetimi',
        category: 'Batarya',
        howToAccess: 'Ayarlar > Pil > Şarj Ayarları > Hızlı Şarj Profili',
        description:
          '60W adaptörle hızlı dolum sırasında sıcaklığa göre akımı dinamik modüle ederek pil ömrünü uzun vadede korur.'
      }
    ]
  },
  {
    id: 'xiaomi-17-ultra',
    brandId: 'xiaomi',
    name: 'Xiaomi 17 Ultra',
    series: 'Xiaomi Amiral Serisi',
    releaseYear: 2026,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      'Snapdragon 8 Elite Gen 5 işlemci, 6.9 inç 3500 nit ekran, 75–100 mm mekanik optik zoom yapabilen 200 MP Leica periskop ve 6000 mAh bataryalı 2026 fotoğraf amiral gemisi.',
    highlightSpec: '6.9" 3500 nit AMOLED · SD 8 Elite Gen 5 · 200 MP Mekanik Zoom · 6000 mAh',
    specs: {
      display: {
        size: '6.9 inç',
        panel: 'LTPO AMOLED (19.5:9)',
        resolution: '2608 x 1200 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '3500 nit',
        protection: 'Xiaomi Shield Glass 2.0+'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite Gen 5',
        cpu: '8 Çekirdek Oryon',
        gpu: 'Adreno GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '512 GB / 1 TB',
        storageType: 'UFS 4.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP 1-inç Tip Sensör, f/1.7, OIS',
        ultrawide: '50 MP, f/2.2, Makro',
        telephoto: '200 MP Mekanik Değişken Optik Zoom Periskop (75–100 mm)',
        front: '32 MP / 50 MP',
        video: '8K 30fps, 4K 120fps Log',
        opticsNote: 'Leica APO optik & mekanik hareketli telefoto grubu'
      },
      battery: {
        capacity: '6000 mAh (Silikon-Karbon)',
        wiredCharging: '90W / 100W HyperCharge',
        wirelessCharging: '80W Kablosuz',
        reverseCharging: '10W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '163.0 x 76.0 x 9.2 mm',
        weight: '225 g',
        materials: 'Alüminyum çerçeve, seramik/kompozit arka',
        waterResistance: 'IP68 + IP69',
        connectivity: '5G, Wi-Fi 7, Bluetooth 6.0, IR Kızılötesi',
        audioAndExtras: 'Ultrasonik parmak izi, USB 3.2 Gen 2'
      },
      software: {
        osAtLaunch: 'Android 16 / HyperOS 3',
        updatePolicy: '5 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'x17u-stepless-zoom',
        title: '75–100 mm Arasında Kayıpsız Mekanik Optik Odak Kaydırma',
        category: 'Kamera',
        howToAccess: 'Kamera > Pro / Portre > 75mm–100mm kaydırıcısı',
        description:
          'Dijital kırpma yerine lens elemanlarını fiziksel olarak hareket ettirerek 75 mm ile 100 mm portre odakları arasında tam 200 MP optik netlik sunar.'
      }
    ]
  },
  {
    id: 'huawei-pura-80-ultra',
    brandId: 'huawei',
    name: 'Huawei Pura 80 Ultra',
    series: 'Pura Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      'Tek büyük sensör üzerinde hareketli prizma mekanizmasıyla çalışan dünyanın ilk çift odaklı tek sensörlü periskop telefoto sistemi ve 1 inç f/1.6–f/4.0 değişken diyaframlı ana kamerası.',
    highlightSpec: '6.8" Kunlun OLED · Kirin 9020 · Çift Odaklı Prizma Telefoto · IP69',
    specs: {
      display: {
        size: '6.8 inç',
        panel: 'LTPO OLED',
        resolution: '2848 x 1276 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '3000 nit',
        protection: 'Crystal Armour Kunlun Glass'
      },
      performance: {
        chipset: 'Huawei Kirin 9020',
        cpu: '8 Çekirdek',
        gpu: 'Maleoon 920',
        processNode: '7 nm'
      },
      memory: {
        ram: '16 GB',
        storage: '512 GB / 1 TB',
        storageType: 'UFS',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP 1-inç Ultra Lighting HDR, f/1.6–f/4.0 Değişken Diyafram, OIS',
        ultrawide: '40 MP, f/2.2',
        telephoto: '50 MP Hareketli Prizmalı Çift Odaklı Telefoto (3.7x & 9.4x Optik)',
        front: '13 MP Ultra Geniş, Otofokus',
        video: '4K 60fps HDR Vivid',
        opticsNote: 'XMAGE Hareketli Prizma Çift Telefoto Mekanizması'
      },
      battery: {
        capacity: '5170 mAh (Küresel) / 5700 mAh (Çin)',
        wiredCharging: '100W Huawei SuperCharge',
        wirelessCharging: '80W Kablosuz',
        reverseCharging: '20W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '163.0 x 76.1 x 8.3 mm',
        weight: '233 g',
        materials: 'Alüminyum çerçeve, Kunlun Glass arka',
        waterResistance: 'IP68 + IP69',
        connectivity: 'Wi-Fi 7, Bluetooth 5.2, IR Verici, NFC',
        audioAndExtras: 'USB 3.1 Gen 1, Stereo hoparlör'
      },
      software: {
        osAtLaunch: 'EMUI 15 / HarmonyOS 5',
        updatePolicy: 'Düzenli HarmonyOS / EMUI yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p80u-switchable-prism',
        title: 'Tek Büyük Telefoto Sensöründe 3.7x ve 9.4x Optik Geçiş',
        category: 'Kamera',
        howToAccess: 'Kamera > 3.7x ve 10x (9.4x optik) zoom düğmeleri',
        description:
          'Kamera içindeki mekanik prizma ışık yolunu değiştirerek aynı dev sensörle hem orta portre hem de aşırı uzun menzilde ışığı kaybetmeden çekim yapar.'
      }
    ]
  },
  {
    id: 'pixel-10-pro-xl',
    brandId: 'google',
    name: 'Google Pixel 10 Pro XL',
    series: 'Pixel 10 Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      'TSMC üretimi yeni nesil Google Tensor G5 işlemci, 5200 mAh batarya, 16 GB RAM ve 7 yıllık kesintisiz saf Android güncellemesiyle Google’ın güncel tepe modeli.',
    highlightSpec: '6.8" Super Actua · Tensor G5 · 16 GB RAM · 5200 mAh · 7 Yıl Destek',
    specs: {
      display: {
        size: '6.8 inç',
        panel: 'Super Actua LTPO OLED',
        resolution: '2992 x 1344 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '3000 nit+',
        protection: 'Corning Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Google Tensor G5 + Titan M2',
        cpu: '8 Çekirdek',
        gpu: 'Yeni Nesil GPU',
        processNode: '3 nm (TSMC)'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.68, OIS',
        ultrawide: '48 MP, Makro Odak',
        telephoto: '48 MP 5x Periskop Telefoto (Pro Res Zoom), OIS',
        front: '42 MP Ultra Geniş Otofokus',
        video: '8K 30fps (Video Boost), 4K 60fps 10-bit HDR'
      },
      battery: {
        capacity: '5200 mAh',
        wiredCharging: '45W USB-C PD',
        wirelessCharging: '25W Qi2 Manyetik (Pixelsnap)',
        reverseCharging: 'Battery Share'
      },
      buildAndConnectivity: {
        dimensions: '162.8 x 76.6 x 8.5 mm',
        weight: '221 g',
        materials: 'Alüminyum çerçeve, Gorilla Glass Victus 2',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, UWB, Thread, Uydu SOS',
        audioAndExtras: 'Ultrasonik parmak izi, Kızılötesi Termometre'
      },
      software: {
        osAtLaunch: 'Android 16 (Pixel UI)',
        updatePolicy: '7 yıl işletim sistemi, güvenlik ve Pixel Drop'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p10pxl-camera-coach',
        title: 'Gerçek Zamanlı Yapay Zeka Kadraj Koçu (Camera Coach)',
        category: 'Kamera',
        howToAccess: 'Kamera > Sağ üst Koç simgesi',
        description:
          'Vizörde ışık açısını, ufuk çizgisini ve konu yerleşimini anlık analiz ederek daha dengeli kadraj kurmanıza rehberlik eder.'
      }
    ]
  },
  {
    id: 'oneplus-15',
    brandId: 'oneplus',
    name: 'OnePlus 15',
    series: 'Amiral Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      '7300 mAh rekor silikon-karbon batarya, 120W hızlı şarj, 165 Hz 1.5K ekran, Snapdragon 8 Elite Gen 5 gücü ve IP69 korumasıyla dayanıklılık ve hız rekoru kırar.',
    highlightSpec: '6.78" 165Hz AMOLED · SD 8 Elite Gen 5 · 7300 mAh · 120W · IP69',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'Düz / 2.5D LTPO AMOLED',
        resolution: '1.5K (~2780 x 1264 piksel)',
        refreshRate: '1–165 Hz dinamik',
        peakBrightness: '4500 nit',
        protection: 'Ceramic Guard'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite Gen 5',
        cpu: '8 Çekirdek Oryon',
        gpu: 'Adreno GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB / 16 GB / 24 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Ana Kamera, OIS (DetailMax Engine)',
        ultrawide: '50 MP Ultra Geniş',
        telephoto: '50 MP 3.5x Periskop Telefoto, OIS',
        front: '32 MP',
        video: '4K 120fps Dolby Vision'
      },
      battery: {
        capacity: '7300 mAh (Silikon-Karbon)',
        wiredCharging: '120W SuperVOOC',
        wirelessCharging: '50W Kablosuz AirVOOC',
        reverseCharging: '10W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.5 x 76.5 x 8.5 mm',
        weight: '215 g',
        materials: 'Alüminyum çerçeve, seramik/cam arka',
        waterResistance: 'IP68 + IP69',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: 'Ultrasonik parmak izi, USB 3.2'
      },
      software: {
        osAtLaunch: 'Android 16 / OxygenOS 16',
        updatePolicy: '4 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'op15-165hz-gaming',
        title: 'Uygulama Bazında 165 Hz Kare Hızı Kilidi Açma',
        category: 'Geliştirici',
        howToAccess: 'Ayarlar > Ekran > Yenileme Hızı > Uygulamaya Özel Hız',
        description:
          'Desteklenen oyunlar ve tarayıcılar için ekranı 120 Hz sınırının üzerine çıkararak 165 Hz akıcılığa sabitler.'
      }
    ]
  },
  {
    id: 'oppo-find-x9-pro',
    brandId: 'oppo',
    name: 'OPPO Find X9 Pro',
    series: 'Find X Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      'MediaTek Dimensity 9500 (3 nm), 200 MP Hasselblad periskop telefoto, 3600 nit LTPO ekran ve büyük silikon-karbon bataryasıyla OPPO’nun en yeni tepe modeli.',
    highlightSpec: '6.78" LTPO AMOLED · Dimensity 9500 · 200 MP Hasselblad Periskop · IP69',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'LTPO AMOLED',
        resolution: '2772 x 1272 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '3600 nit',
        protection: 'Crystal Shield Cam'
      },
      performance: {
        chipset: 'MediaTek Dimensity 9500',
        cpu: '8 Çekirdek',
        gpu: 'Immortalis GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '512 GB / 1 TB',
        storageType: 'UFS 4.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Büyük Sensör, OIS (Hasselblad Renk Kalibrasyonu)',
        ultrawide: '50 MP, 120° FOV',
        telephoto: '200 MP Periskop Telefoto, OIS',
        front: '32 MP / 50 MP',
        video: '4K 60fps Dolby Vision HDR'
      },
      battery: {
        capacity: '6000 mAh+ (Silikon-Karbon)',
        wiredCharging: '80W / 100W SuperVOOC',
        wirelessCharging: '50W AirVOOC',
        reverseCharging: '10W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.0 x 76.5 x 8.3 mm',
        weight: '218 g',
        materials: 'Alüminyum çerçeve, cam arka kapak',
        waterResistance: 'IP68 + IP69',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: 'Hasselblad XPAN Modu, Ultrasonik parmak izi'
      },
      software: {
        osAtLaunch: 'Android 16 / ColorOS 16',
        updatePolicy: '5 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'fx9p-xpan-mode',
        title: 'Hasselblad XPAN 65:24 Panoramik Film Simülasyonu',
        category: 'Kamera',
        howToAccess: 'Kamera > Daha Fazla > XPAN',
        description:
          'Efsanevi Hasselblad XPAN orta format film makinesinin 65:24 sinematik en-boy oranını ve negatif film geliştirme efektini simüle eder.'
      }
    ]
  },
  {
    id: 'vivo-x300-pro',
    brandId: 'vivo',
    name: 'vivo X300 Pro',
    series: 'X Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      'Dimensity 9500, 1/1.4 inç boyutundaki 200 MP ZEISS APO telefoto (ISOCELL HPB), Sony LYT-828 ana sensör ve 6510 mAh bataryalı yeni nesil kamera amiral gemisi.',
    highlightSpec: '6.78" LTPO · Dimensity 9500 · 200 MP ZEISS APO · 6510 mAh · IP69',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'Düz LTPO AMOLED',
        resolution: '2800 x 1260 piksel (452 ppi)',
        refreshRate: '1–120 Hz',
        peakBrightness: '4500 nit',
        protection: 'Armor Glass'
      },
      performance: {
        chipset: 'MediaTek Dimensity 9500 + vivo Görüntü Çipi',
        cpu: '8 Çekirdek',
        gpu: 'Immortalis GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '512 GB / 1 TB',
        storageType: 'UFS 4.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony LYT-828 (1/1.28"), f/1.57, Gimbal OIS',
        ultrawide: '50 MP, Otofokus',
        telephoto: '200 MP ZEISS APO Periskop (1/1.4" ISOCELL HPB), OIS',
        front: '32 MP',
        video: '4K 120fps, 10-bit Log',
        opticsNote: 'ZEISS T* Kaplama & 200 MP Tele-Makro'
      },
      battery: {
        capacity: '6510 mAh (Silikon Anot)',
        wiredCharging: '90W FlashCharge',
        wirelessCharging: '30W / 40W Kablosuz',
        reverseCharging: 'Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.4 x 76.0 x 8.5 mm',
        weight: '224 g',
        materials: 'Alüminyum çerçeve, cam arka',
        waterResistance: 'IP68 + IP69',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: '3D Ultrasonik parmak izi, USB 3.2'
      },
      software: {
        osAtLaunch: 'Android 16 / Funtouch OS 16',
        updatePolicy: '4–5 yıl güncelleme desteği'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'x300p-moon-astro',
        title: 'ZEISS Astro ve Süper Ay Uzun Pozlama Dengelemesi',
        category: 'Kamera',
        howToAccess: 'Kamera > Daha Fazla > Astro / Süper Ay',
        description:
          'Tripod olmadan elde dahi 1/1.4 inçlik 200 MP telefoto sensörle gökyüzü ve ay kraterlerini çok kareli hizalamayla net yakalar.'
      }
    ]
  },

  // ================= 2000–2019 DÖNÜM NOKTASI & KLASİK MODELLER =================
  {
    id: 'nokia-3310-2000',
    brandId: 'nokia',
    name: 'Nokia 3310 (Klasik)',
    series: 'Klasik Seri',
    releaseYear: 2000,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      '126 milyon adet satışla mobil tarihin en dayanıklı efsanesi; Snake II oyunu, değiştirilebilir Xpress-on kapaklar ve haftalık bekleme süresiyle 2000’lerin simgesi.',
    highlightSpec: '84x48 Monokrom LCD · 900 mAh Çıkarılabilir Pil · Snake II · 133 g',
    specs: {
      display: {
        size: '1.5 inç (5 satır metin)',
        panel: 'Tek Renkli (Monokrom) Grafik LCD',
        resolution: '84 x 48 piksel',
        refreshRate: 'Statik LCD',
        peakBrightness: 'Yeşil LED arka aydınlatma',
        protection: 'Değiştirilebilir Xpress-on polikarbonat ön kapak'
      },
      performance: {
        chipset: 'Texas Instruments MAD2WD1',
        cpu: 'ARM7TDMI tabanlı temel bant işlemcisi',
        gpu: 'Yok (2D piksel tamponu)',
        processNode: 'Klasik 2G SoC'
      },
      memory: {
        ram: 'Özel sistem belleği',
        storage: '1000+ karakter SMS / 250 kişi (SIM)',
        storageType: 'Dahili Flash',
        expandable: 'Yok'
      },
      camera: {
        main: 'Yok',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: 'Yok',
        video: 'Yok'
      },
      battery: {
        capacity: '900 mAh NiMH / 1000 mAh Li-Ion (BMC-3)',
        wiredCharging: 'Nokia 3.5 mm kalın uçlu adaptör (~4 saat)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '113 x 48 x 22 mm',
        weight: '133 g',
        materials: 'Darbeye dayanıklı kalın ABS/polikarbonat kasa',
        waterResistance: 'Sertifikasız (Mekanik sızdırmaz değil)',
        connectivity: '2G GSM (900/1800 MHz)',
        audioAndExtras: 'Tek sesli zil sesi bestecisi, Snake II, Space Impact, Titreşim'
      },
      software: {
        osAtLaunch: 'Nokia Series 20',
        updatePolicy: 'Servis kablosuyla fabrika ROM'
      }
    },
    modelHiddenFeatures: [
      {
        id: '3310-ringtone-composer',
        title: 'Besteci (Composer) ile Kendi Polifonik Olmayan Zil Sesini Yazma',
        category: 'Sistem',
        howToAccess: 'Menü > Zil Sesleri > Besteci (Composer)',
        description:
          'Nota sürelerini (4c1, 8d2...) tuş takımıyla girerek o dönemin popüler şarkılarının tek sesli zil tonlarını kendiniz besteleyebilirsiniz.'
      },
      {
        id: '3310-sim-clock-stop',
        title: 'SIM Saatini Durdurma & Gizli Çevirici Testi',
        category: 'Geliştirici',
        howToAccess: 'Ana ekranda *#746025625# (*#sim0clock#)',
        description:
          'SIM kartın bekleme modunda güç tasarrufu için saat sinyalini durdurmayı destekleyip desteklemediğini kontrol eder.'
      }
    ]
  },
  {
    id: 'nokia-n95',
    brandId: 'nokia',
    name: 'Nokia N95',
    series: 'Nseries Multimedya',
    releaseYear: 2007,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Çift yönlü kızaklı tasarımı, 5 MP Carl Zeiss otomatik odaklı kamerası, dahili GPS’i, Wi-Fi’ı ve 3.5mm TV-Out çıkışıyla iPhone öncesi "her şeyi yapan cep bilgisayarı".',
    highlightSpec: '2.6" TFT · 5 MP Carl Zeiss · Çift Yönlü Kızak · GPS & Wi-Fi',
    specs: {
      display: {
        size: '2.6 inç',
        panel: 'TFT LCD (16 Milyon Renk)',
        resolution: '240 x 320 piksel (QVGA)',
        refreshRate: '60 Hz',
        peakBrightness: 'Standart TFT',
        protection: 'Akrilik ekran camı'
      },
      performance: {
        chipset: 'Texas Instruments OMAP 2420',
        cpu: '332 MHz ARM11',
        gpu: 'PowerVR MBX 3D Donanım Hızlandırıcı',
        processNode: '90 nm'
      },
      memory: {
        ram: '64 MB (N95 8GB modelinde 128 MB)',
        storage: '160 MB (8GB modelinde 8 GB)',
        storageType: 'NAND Flash',
        expandable: 'microSD (32 GB’a kadar)'
      },
      camera: {
        main: '5 MP Carl Zeiss Tessar, f/2.8, Otofokus, Mekanik Lens Kapağı, LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: 'CIF Görüntülü Arama Kamerası',
        video: '480p (VGA) 30 fps'
      },
      battery: {
        capacity: '950 mAh BL-5F (Çıkarılabilir)',
        wiredCharging: 'Nokia 2.0 mm ince uç / Mini-USB veri',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '99 x 53 x 21 mm',
        weight: '120 g',
        materials: 'Polikarbonat & magnezyum kızak mekanizması',
        waterResistance: 'Yok',
        connectivity: '3G HSDPA, Wi-Fi 802.11 b/g, Bluetooth 2.0, Kızılötesi (IrDA), GPS',
        audioAndExtras: '3.5mm Jak (TV-Out destekli), Stereo hoparlör, FM Radyo'
      },
      software: {
        osAtLaunch: 'Symbian OS 9.2 (S60 3rd Edition FP1)',
        updatePolicy: 'Nokia Software Updater (Dönem desteği)'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'n95-two-way-slider',
        title: 'Aşağı Kızakla Gizli Multimedya Tuşları & Otomatik Yatay Mod',
        category: 'Verimlilik',
        howToAccess: 'Ekranı aşağı doğru kaydırarak üstteki 4 medya tuşunu açın',
        description:
          'Yukarı kaydırınca sayısal tuş takımı, aşağı kaydırınca ise özel müzik çalar kontrol tuşları çıkar ve arayüz otomatik yatay multimedya karuseline döner.'
      }
    ]
  },
  {
    id: 'motorola-razr-v3',
    brandId: 'motorola',
    name: 'Motorola RAZR V3',
    series: 'RAZR Serisi',
    releaseYear: 2004,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Yalnızca 13.9 mm inceliğinde anodize alüminyum gövdesi ve lazerle kazınmış elektrolüminesans tuş takımıyla 130 milyon satan tasarım ikonu.',
    highlightSpec: '2.2" + Dış Ekran · 13.9 mm Anodize Alüminyum · Lazer Kazıma Tuşlar',
    specs: {
      display: {
        size: '2.2 inç (İç) + 96x80 (Dış)',
        panel: 'TFT LCD (262K renk) + CSTN dış ekran',
        resolution: '176 x 220 piksel',
        refreshRate: 'Standart',
        peakBrightness: 'Standart TFT',
        protection: 'Cam kapak'
      },
      performance: {
        chipset: 'Motorola / Freescale Argon/Neptune LTE',
        cpu: 'ARM7 tabanlı işlemci',
        gpu: 'Yok',
        processNode: 'Klasik 2G'
      },
      memory: {
        ram: 'Sistem belleği',
        storage: '5.5 MB dahili hafıza',
        storageType: 'Flash',
        expandable: 'Yok (V3i ile microSD geldi)'
      },
      camera: {
        main: '0.3 MP (VGA, 640x480), 4x Dijital Zoom',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: 'Yok',
        video: 'MPEG4 video oynatma (V3i ile kayıt)'
      },
      battery: {
        capacity: '680 mAh Li-Ion (Çıkarılabilir)',
        wiredCharging: 'Mini-USB şarj & veri',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '98 x 53 x 13.9 mm',
        weight: '95 g',
        materials: 'Uçak sınıfı anodize alüminyum, nikel kaplı bakır alaşım tuş levhası',
        waterResistance: 'Yok',
        connectivity: '2G Quad-band GSM, Bluetooth 1.2, Mini-USB',
        audioAndExtras: 'Elektrolüminesans mavi aydınlatmalı tek parça metal klavye'
      },
      software: {
        osAtLaunch: 'Motorola P2K OS (Java J2ME)',
        updatePolicy: 'Dönem firmware'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'razrv3-p2k-modding',
        title: 'Seem Editing (P2K Araçlarıyla Gizli Menü ve Video Kayıt Açma)',
        category: 'Geliştirici',
        howToAccess: 'Mini-USB + P2KTools / Seem hex düzenleme',
        description:
          'RAZR V3 kullanıcıları P2K sistem dosyalarını düzenleyerek gizli video kayıt özelliğini, ekstra zil seslerini ve iTunes görünümünü açabiliyordu.'
      }
    ]
  },
  {
    id: 'iphone-2g-2007',
    brandId: 'apple',
    name: 'iPhone (Orijinal 2G)',
    series: 'iPhone 1. Nesil',
    releaseYear: 2007,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Çoklu dokunmatik (Multi-Touch) kapasitif cam ekranı, parmakla yakınlaştırma (pinch-to-zoom) ve tam HTML Safari tarayıcısıyla modern akıllı telefon çağını başlatan model.',
    highlightSpec: '3.5" Kapasitif Multi-Touch · Samsung S5L8900 · Alüminyum Arka · 2 MP',
    specs: {
      display: {
        size: '3.5 inç',
        panel: 'TFT Kapasitif Multi-Touch LCD',
        resolution: '320 x 480 piksel (163 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: 'Standart LCD',
        protection: 'Çizilmeye dayanıklı ilk nesil optik cam'
      },
      performance: {
        chipset: 'Samsung S5L8900',
        cpu: '412 MHz ARM1176JZF-S',
        gpu: 'PowerVR MBX Lite 3D',
        processNode: '90 nm'
      },
      memory: {
        ram: '128 MB eDRAM',
        storage: '4 GB / 8 GB / 16 GB',
        storageType: 'NAND Flash',
        expandable: 'Yok'
      },
      camera: {
        main: '2.0 MP, f/2.8 (Sabit odak)',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: 'Yok',
        video: 'Resmi video kaydı yok'
      },
      battery: {
        capacity: '1400 mAh (Dahili)',
        wiredCharging: '30-pin Apple Dock konnektörü',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '115 x 61 x 11.6 mm',
        weight: '135 g',
        materials: 'Anodize alüminyum ve alt siyah plastik anten kapağı',
        waterResistance: 'Yok',
        connectivity: '2G EDGE, Wi-Fi 802.11 b/g, Bluetooth 2.0',
        audioAndExtras: 'Gömülü 3.5mm kulaklık jakı, Fiziksel Sessize Alma anahtarı'
      },
      software: {
        osAtLaunch: 'iPhone OS 1.0 (iPhone OS 3.1.3’e kadar)',
        updatePolicy: '2010’a kadar iPhone OS güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'iphone2g-pinch-physics',
        title: 'Elastik Kaydırma (Rubber-Band) ve İvmeölçer Cover Flow',
        category: 'Sistem',
        howToAccess: 'iPod uygulamasında telefonu yatay çevirin',
        description:
          'Müzik çalarda telefonu yatay çevirdiğinizde albüm kapakları 3 boyutlu Cover Flow görünümüne geçer; liste sonlarında elastik geri sekme fiziği çalışır.'
      }
    ]
  },
  {
    id: 'iphone-4-2010',
    brandId: 'apple',
    name: 'iPhone 4',
    series: 'iPhone 4 Serisi',
    releaseYear: 2010,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Paslanmaz çelik anten çerçeveli çift cam sandviç tasarımı, piksellerin insan gözüyle seçilemediği ilk Retina ekran ve FaceTime ön kamerasıyla ikonikleşen model.',
    highlightSpec: '3.5" Retina IPS · Apple A4 · Paslanmaz Çelik · 5 MP HDR + 720p',
    specs: {
      display: {
        size: '3.5 inç',
        panel: 'Retina IPS LCD',
        resolution: '960 x 640 piksel (326 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Alüminosilikat sertleştirilmiş cam'
      },
      performance: {
        chipset: 'Apple A4',
        cpu: '1.0 GHz Cortex-A8 (800 MHz saatli)',
        gpu: 'PowerVR SGX535',
        processNode: '45 nm'
      },
      memory: {
        ram: '512 MB LPDDR',
        storage: '8 GB / 16 GB / 32 GB',
        storageType: 'NAND Flash',
        expandable: 'Yok'
      },
      camera: {
        main: '5 MP BSI, f/2.8, Otofokus, LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '0.3 MP (VGA) FaceTime',
        video: '720p 30 fps HD video'
      },
      battery: {
        capacity: '1420 mAh',
        wiredCharging: '30-pin Dock konnektörü',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '115.2 x 58.6 x 9.3 mm',
        weight: '137 g',
        materials: 'Paslanmaz çelik çerçeve, ön/arka cam',
        waterResistance: 'Yok',
        connectivity: '3G HSDPA, Wi-Fi 802.11n, Bluetooth 2.1, GPS',
        audioAndExtras: '3 eksenli Jiroskop (ilk kez), Çift mikrofon gürültü engelleme'
      },
      software: {
        osAtLaunch: 'iOS 4 (iOS 7.1.2’ye kadar)',
        updatePolicy: '4 yıl iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'iphone4-volume-shutter',
        title: 'Ses Açma Tuşuyla Fiziksel Kamera Deklanşörü',
        category: 'Kamera',
        howToAccess: 'Kamera açıkken Ses Açma (+) tuşuna basın',
        description:
          'iOS 5 ile gelen ve tüm akıllı telefonlara yayılan ses tuşuyla deklanşör özelliği Apple’da iPhone 4 nesliyle yaygınlaştı.'
      }
    ]
  },
  {
    id: 'iphone-x-2017',
    brandId: 'apple',
    name: 'iPhone X',
    series: '10. Yıl Özel Serisi',
    releaseYear: 2017,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Ana ekran (Home) tuşunu kaldırıp tam ekran hareketlerine geçen, Face ID 3D yüz tanıma ve OLED Super Retina ekranı iPhone’a getiren 10. yıl dönüm noktası.',
    highlightSpec: '5.8" Super Retina OLED · A11 Bionic · Face ID · Çift 12 MP OIS',
    specs: {
      display: {
        size: '5.8 inç',
        panel: 'Super Retina HD OLED (HDR10 / Dolby Vision)',
        resolution: '2436 x 1125 piksel (458 ppi)',
        refreshRate: '60 Hz (120 Hz dokunma örnekleme)',
        peakBrightness: '625 nit',
        protection: 'Güçlendirilmiş cam'
      },
      performance: {
        chipset: 'Apple A11 Bionic',
        cpu: '6 Çekirdek + İlk Neural Engine',
        gpu: '3 Çekirdek Apple GPU',
        processNode: '10 nm'
      },
      memory: {
        ram: '3 GB LPDDR4X',
        storage: '64 GB / 256 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '12 MP, f/1.8, OIS',
        ultrawide: 'Yok',
        telephoto: '12 MP 2x Optik Telefoto, f/2.4, OIS',
        front: '7 MP TrueDepth + Face ID Kızılötesi Projektör',
        video: '4K 60 fps, 1080p 240 fps ağır çekim'
      },
      battery: {
        capacity: '2716 mAh (L şeklinde çift hücre)',
        wiredCharging: '15W+ USB-C to Lightning PD (30 dk %50)',
        wirelessCharging: '7.5W Qi Kablosuz Şarj',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '143.6 x 70.9 x 7.7 mm',
        weight: '174 g',
        materials: 'Cerrahi sınıf paslanmaz çelik, cam arka',
        waterResistance: 'IP67',
        connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, NFC',
        audioAndExtras: 'Face ID, Stereo hoparlör, Taptic Engine'
      },
      software: {
        osAtLaunch: 'iOS 11 (iOS 16’ya kadar)',
        updatePolicy: '6 yıl iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'iphonex-bottom-swipe',
        title: 'Alt Çubuğu Sağa/Sola Kaydırarak Anında Uygulama Değiştirme',
        category: 'Verimlilik',
        howToAccess: 'Ekranın en altındaki yatay çizgiyi sağa veya sola kaydırın',
        description:
          'Uygulama değiştiriciyi açmaya gerek kalmadan alt çubuğu yana kaydırarak son açık uygulamalar arasında sıfır gecikmeyle geçiş yapabilirsiniz.'
      }
    ]
  },
  {
    id: 'galaxy-s2-2011',
    brandId: 'samsung',
    name: 'Samsung Galaxy S II (GT-I9100)',
    series: 'Galaxy S Serisi',
    releaseYear: 2011,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      '8.49 mm ultra ince gövdesi, canlı Super AMOLED Plus ekranı ve çift çekirdekli Exynos 4210 işlemcisiyle Android’i küresel zirveye taşıyan model.',
    highlightSpec: '4.3" Super AMOLED Plus · Exynos 4210 · 8.49 mm · 8 MP 1080p',
    specs: {
      display: {
        size: '4.3 inç',
        panel: 'Super AMOLED Plus (Gerçek RGB alt piksel)',
        resolution: '800 x 480 piksel (WVGA)',
        refreshRate: '60 Hz',
        peakBrightness: 'Standart AMOLED',
        protection: 'Corning Gorilla Glass'
      },
      performance: {
        chipset: 'Samsung Exynos 4210 Dual',
        cpu: '2 Çekirdek 1.2 GHz Cortex-A9',
        gpu: 'Mali-400 MP4',
        processNode: '45 nm'
      },
      memory: {
        ram: '1 GB',
        storage: '16 GB / 32 GB',
        storageType: 'eMMC',
        expandable: 'microSD (32 GB)'
      },
      camera: {
        main: '8 MP, f/2.6, Otofokus, LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '2 MP',
        video: '1080p 30 fps Full HD'
      },
      battery: {
        capacity: '1650 mAh (Çıkarılabilir)',
        wiredCharging: 'Micro-USB (MHL HDMI çıkış destekli)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '125.3 x 66.1 x 8.49 mm',
        weight: '116 g',
        materials: 'Dokulu hiper-sırlı çıkarılabilir polikarbonat arka kapak',
        waterResistance: 'Yok',
        connectivity: '3G HSPA+, Wi-Fi n, Bluetooth 3.0, USB OTG',
        audioAndExtras: '3.5mm jak, FM Radyo, MHL TV çıkışı'
      },
      software: {
        osAtLaunch: 'Android 2.3 Gingerbread / TouchWiz 4.0',
        updatePolicy: 'Android 4.1.2 Jelly Bean’e kadar resmi güncelleme'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'gs2-usb-otg',
        title: 'USB On-The-Go (OTG) ile Telefona USB Bellek ve Fare Bağlama',
        category: 'Verimlilik',
        howToAccess: 'Micro-USB OTG adaptör kablosu ile bağlantı',
        description:
          '2011 yılında ilk kez telefona doğrudan USB flash bellek, klavye ve kablolu fare takıp dosya yönetmeyi mümkün kılan öncü modellerden biridir.'
      }
    ]
  },
  {
    id: 'galaxy-s10-plus-2019',
    brandId: 'samsung',
    name: 'Samsung Galaxy S10+',
    series: 'Galaxy S 10. Yıl Serisi',
    releaseYear: 2019,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Samsung’un ilk ekran içi ultrasonik parmak izi, ilk ters kablosuz şarj (Wireless PowerShare), mekanik çift diyaframlı kamera ve hâlâ aranan 3.5mm jak + microSD birleşimi.',
    highlightSpec: '6.4" QHD+ Dynamic AMOLED · 3.5mm Jak & microSD · f/1.5–f/2.4 Diyafram',
    specs: {
      display: {
        size: '6.4 inç',
        panel: 'Dynamic AMOLED (HDR10+)',
        resolution: '3040 x 1440 piksel (522 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '1200 nit',
        protection: 'Corning Gorilla Glass 6'
      },
      performance: {
        chipset: 'Samsung Exynos 9820 / Snapdragon 855',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G76 MP12 / Adreno 640',
        processNode: '8 nm / 7 nm'
      },
      memory: {
        ram: '8 GB / 12 GB LPDDR4X',
        storage: '128 GB / 512 GB / 1 TB',
        storageType: 'UFS 2.1',
        expandable: 'microSDXC (512 GB)’a kadar'
      },
      camera: {
        main: '12 MP Dual Pixel, f/1.5–f/2.4 Mekanik Çift Diyafram, OIS',
        ultrawide: '16 MP, f/2.2, 123°',
        telephoto: '12 MP 2x Optik Telefoto, f/2.4, OIS',
        front: '10 MP Dual Pixel + 8 MP RGB Derinlik Sensörü',
        video: '4K 60 fps HDR10+'
      },
      battery: {
        capacity: '4100 mAh',
        wiredCharging: '15W Hızlı Şarj',
        wirelessCharging: '15W Fast Wireless Charging 2.0',
        reverseCharging: '4.5W Wireless PowerShare'
      },
      buildAndConnectivity: {
        dimensions: '157.6 x 74.1 x 7.8 mm',
        weight: '175 g (Cam) / 198 g (Seramik)',
        materials: 'Alüminyum çerçeve, Gorilla Glass 5 veya Seramik arka',
        waterResistance: 'IP68',
        connectivity: '4.5G LTE, Wi-Fi 6 (ilklerden), Bluetooth 5.0',
        audioAndExtras: '3.5mm AKG ayarlı jak, Ultrasonik parmak izi, Nabız & SpO2 sensörü'
      },
      software: {
        osAtLaunch: 'Android 9 / One UI 1.1 (Android 12 / One UI 4.1’e kadar)',
        updatePolicy: '3 büyük Android + güvenlik yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 's10p-heart-spo2',
        title: 'Arka Kamera Yanındaki Gerçek Kızılötesi Nabız ve SpO2 Sensörü',
        category: 'Sistem',
        howToAccess: 'Samsung Health > Kalp Hızı / Stres Ölçümü',
        description:
          'Arka flaşın yanındaki özel optik sensöre parmağınızı koyarak kan oksijen doygunluğunu (SpO2) ve nabzı saat olmadan doğrudan telefonla ölçer.'
      }
    ]
  },
  {
    id: 'blackberry-bold-9900',
    brandId: 'blackberry',
    name: 'BlackBerry Bold 9900',
    series: 'Bold Serisi',
    releaseYear: 2011,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Paslanmaz çelik çerçevesi, dokunmatik ekranla birleştirilmiş gelmiş geçmiş en iyi fiziksel QWERTY klavyesi ve karbon görünümlü arka kapağıyla efsanevi iş telefonu.',
    highlightSpec: '2.8" Dokunmatik + Fiziksel QWERTY · Optik Trackpad · Paslanmaz Çelik',
    specs: {
      display: {
        size: '2.8 inç',
        panel: 'Kapasitif Dokunmatik TFT LCD',
        resolution: '640 x 480 piksel (286 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: 'Standart TFT',
        protection: 'Dayanıklı ön panel'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon MSM8655',
        cpu: '1.2 GHz Scorpion',
        gpu: 'Adreno 205',
        processNode: '45 nm'
      },
      memory: {
        ram: '768 MB',
        storage: '8 GB',
        storageType: 'eMMC',
        expandable: 'microSDHC (32 GB)'
      },
      camera: {
        main: '5 MP, Sabit odak (EDoF), LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: 'Yok',
        video: '720p HD video'
      },
      battery: {
        capacity: '1230 mAh (Çıkarılabilir JM-1)',
        wiredCharging: 'Micro-USB',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '115 x 66 x 10.5 mm',
        weight: '130 g',
        materials: 'Fırçalanmış paslanmaz çelik çerçeve, cam elyaf dokulu kapak',
        waterResistance: 'Yok',
        connectivity: '3G HSPA+, Wi-Fi n, Bluetooth 2.1, NFC (ilklerden), GPS',
        audioAndExtras: 'Optik Trackpad, 35 Tuşlu Arkadan Aydınlatmalı QWERTY, Çok renkli bildirim LED’i'
      },
      software: {
        osAtLaunch: 'BlackBerry OS 7.0 (7.1’e güncellendi)',
        updatePolicy: 'Klasik BB OS 7 dönemi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'bb9900-battery-pull',
        title: 'Tuş Kombinasyonuyla Pil Çıkarmadan Donanım Yeniden Başlatma',
        category: 'Sistem',
        howToAccess: 'ALT + Sağ Shift (aA) + DEL tuşlarına aynı anda basın',
        description:
          'Arka kapağı açıp pili sökmeden cihazı tam donanımsal yeniden başlatarak RAM’i tamamen sıfırlar.'
      }
    ]
  },
  {
    id: 'htc-one-m7',
    brandId: 'htc',
    name: 'HTC One (M7)',
    series: 'One Serisi',
    releaseYear: 2013,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Tamamen CNC işlenmiş yekpare alüminyum kasası, ön yüze bakan BoomSound çift stereo hoparlörleri ve büyük pikselli UltraPixel kamerasıyla Android tasarım standartlarını belirleyen model.',
    highlightSpec: '4.7" 1080p S-LCD3 (468 ppi) · Yekpare Alüminyum · BoomSound · UltraPixel',
    specs: {
      display: {
        size: '4.7 inç',
        panel: 'Super LCD3',
        resolution: '1920 x 1080 piksel (468 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '480 nit',
        protection: 'Corning Gorilla Glass 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 600',
        cpu: '4 Çekirdek 1.7 GHz Krait 300',
        gpu: 'Adreno 320',
        processNode: '28 nm'
      },
      memory: {
        ram: '2 GB',
        storage: '32 GB / 64 GB',
        storageType: 'eMMC',
        expandable: 'Yok'
      },
      camera: {
        main: '4 MP UltraPixel (2.0 µm dev piksel), f/2.0, OIS',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '2.1 MP Geniş Açı (88°)',
        video: '1080p 30fps HDR video'
      },
      battery: {
        capacity: '2300 mAh',
        wiredCharging: 'Micro-USB 10W',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '137.4 x 68.2 x 9.3 mm',
        weight: '143 g',
        materials: 'Yekpare CNC alüminyum gövde (Zero-gap)',
        waterResistance: 'Yok',
        connectivity: '4G LTE, Wi-Fi ac (ilklerden), Bluetooth 4.0, NFC, IR Kumanda',
        audioAndExtras: 'Güç tuşunun içine gizli IR Verici, Ön Çift BoomSound Hoparlör'
      },
      software: {
        osAtLaunch: 'Android 4.1.2 / HTC Sense 5 (Android 5.0’a kadar)',
        updatePolicy: '2 yıl büyük Android güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'm7-power-ir',
        title: 'Güç Düğmesinin İçine Gizlenmiş Kızılötesi (IR) TV Kumandası',
        category: 'Verimlilik',
        howToAccess: 'Sense TV uygulaması (Üst sol siyah Güç düğmesi)',
        description:
          'Ayrı bir kızılötesi göz yerine siyah güç tuşunu doğrudan IR penceresi olarak kullanarak televizyon ve uydu alıcılarını kontrol eder.'
      }
    ]
  },
  {
    id: 'lg-v30-2017',
    brandId: 'lg',
    name: 'LG V30',
    series: 'V Serisi',
    releaseYear: 2017,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Sadece 158 gram ağırlık, 32-bit ESS Sabre ES9218P Quad DAC ses yongası, cam f/1.6 lens ve MIL-STD-810G askeri sağlamlık standardıyla audiophile ve video tutkunlarının kült cihazı.',
    highlightSpec: '6.0" P-OLED · SD 835 · 32-bit Hi-Fi Quad DAC · f/1.6 Cam Lens · 158 g',
    specs: {
      display: {
        size: '6.0 inç',
        panel: 'P-OLED FullVision (HDR10 / Dolby Vision)',
        resolution: '2880 x 1440 piksel (537 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '600 nit',
        protection: 'Corning Gorilla Glass 5'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 835',
        cpu: '8 Çekirdek Kryo 280',
        gpu: 'Adreno 540',
        processNode: '10 nm'
      },
      memory: {
        ram: '4 GB LPDDR4X',
        storage: '64 GB / 128 GB',
        storageType: 'UFS 2.1',
        expandable: 'microSDXC (2 TB’a kadar)'
      },
      camera: {
        main: '16 MP, f/1.6 (Crystal Clear Cam Lens), OIS',
        ultrawide: '13 MP, f/1.9, 120°',
        telephoto: 'Yok',
        front: '5 MP, f/2.2',
        video: '4K 30fps, 10-bit LG-Cine Log video'
      },
      battery: {
        capacity: '3300 mAh',
        wiredCharging: '18W Quick Charge 3.0',
        wirelessCharging: '10W Kablosuz Şarj',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '151.7 x 75.4 x 7.3 mm',
        weight: '158 g',
        materials: 'Alüminyum çerçeve, Gorilla Glass 5 ön/arka',
        waterResistance: 'IP68 + MIL-STD-810G',
        connectivity: '4.5G LTE, Wi-Fi 5, Bluetooth 5.0, NFC',
        audioAndExtras: '32-bit Hi-Fi Quad DAC (B&O Play ayarlı), 3.5mm jak, FM Radyo'
      },
      software: {
        osAtLaunch: 'Android 7.1.2 (Android 9’a kadar)',
        updatePolicy: '2 büyük Android güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'v30-cine-log',
        title: 'LG-Cine Log Video ve Noktasal Yakınlaştırma (Point Zoom)',
        category: 'Kamera',
        howToAccess: 'Kamera > Sinema Videosu (Cine Video) > Log Profili & Point Zoom',
        description:
          'Ekranın merkezine değil parmağınızla dokunduğunuz herhangi bir köşeye doğru akıcı sinematik zoom (Point Zoom) yapmanızı sağlar.'
      }
    ]
  }
];
