import { PhoneModel } from '../types/phone';

export const PHONES_EXPANDED_5: PhoneModel[] = [
  {
    id: 'oppo-find-n5',
    brandId: 'oppo',
    deviceType: 'phone',
    name: 'OPPO Find N5',
    series: 'Find N Katlanabilir',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Katlanabilir',
    summary:
      'Açıldığında yalnızca 4.21 mm inceliğiyle dünyanın en ince kitap tipi katlanabilir telefonu; Snapdragon 8 Elite, 5600 mAh silikon pil ve IPX9 su koruması sunar.',
    highlightSpec: '8.12" + 6.62" · 4.21 mm Açık (Rekor) · SD 8 Elite · 5600 mAh · IPX9',
    specs: {
      display: {
        size: '8.12 inç (İç) + 6.62 inç (Dış)',
        panel: 'LTPO AMOLED',
        resolution: '2480 x 2248 (İç) / 2616 x 1140 (Dış)',
        refreshRate: '1–120 Hz',
        peakBrightness: '2450 nit (Dış)',
        protection: 'Ultra İnce Nanokristal Cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite',
        cpu: '7 Çekirdek Oryon',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony LYT-700, f/1.8, OIS',
        ultrawide: '8 MP',
        telephoto: '50 MP 3x Periskop Tele-Makro, OIS',
        front: '8 MP (İç) + 8 MP (Dış)',
        video: '4K 60fps Dolby Vision'
      },
      battery: {
        capacity: '5600 mAh (Silikon-Karbon)',
        wiredCharging: '80W SuperVOOC',
        wirelessCharging: '50W AirVOOC',
        reverseCharging: 'Ters kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '4.21 mm (Açık) / 8.93 mm (Katlı)',
        weight: '229 g',
        materials: 'Titanyum alaşım Flexion menteşe, karbon fiber',
        waterResistance: 'IPX6 + IPX8 + IPX9',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: 'Alert Slider, O+ Connect (Mac uzaktan masaüstü)'
      },
      software: {
        osAtLaunch: 'Android 15 / ColorOS 15',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'findn5-mac-remote',
        title: 'O+ Connect ile Katlanabilir Ekranda MacBook Masaüstünü Kontrol Etme',
        category: 'Verimlilik',
        howToAccess: 'ColorOS 15 > O+ Connect > Mac ile Eşleştir',
        description:
          'Find N5’i yarım katlayarak alt ekranı Mac Trackpad ve klavyesine, üst ekranı ise canlı Mac ekranına dönüştürebilirsiniz.'
      }
    ]
  },
  {
    id: 'vivo-x200-ultra',
    brandId: 'vivo',
    deviceType: 'phone',
    name: 'vivo X200 Ultra',
    series: 'X Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      'Özel 35 mm LYT-818 ana kamera, aynı dev sensörlü 14 mm ultra geniş ve 200 MP 85 mm ZEISS APO periskop lensiyle fotoğrafçılık odaklı 2025 canavarı.',
    highlightSpec: '6.82" 2K LTPO · SD 8 Elite · 35mm + 200MP ZEISS · Harici 200mm Lens Kiti',
    specs: {
      display: {
        size: '6.82 inç',
        panel: '2K LTPO AMOLED',
        resolution: '3168 x 1440 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '4500 nit',
        protection: 'Armor Glass'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite + V3+ & VS1 Çipleri',
        cpu: '8 Çekirdek Oryon',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP 35 mm Sony LYT-818, f/1.69, Gimbal OIS',
        ultrawide: '50 MP 14 mm Sony LYT-818 (1/1.28"), OIS',
        telephoto: '200 MP 85 mm ZEISS APO Periskop (HP9), OIS',
        front: '50 MP Otofokus',
        video: '4K 120fps 10-bit Log (Tüm lenslerde)'
      },
      battery: {
        capacity: '6000 mAh (Silikon-Karbon)',
        wiredCharging: '90W FlashCharge',
        wirelessCharging: '40W Kablosuz',
        reverseCharging: 'Ters kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '163.1 x 76.8 x 8.69 mm',
        weight: '229 g',
        materials: 'Metal çerçeve, cam/fiberglas arka',
        waterResistance: 'IP68 + IP69',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: '2 kademeli fiziksel kamera düğmesi, ZEISS 2.35x teleconverter desteği'
      },
      software: {
        osAtLaunch: 'Android 15 / OriginOS 5',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'x200u-camera-button',
        title: 'Yan Çerçevedeki Kapasitif Deklanşör ile Pozlama & Zoom Kaydırma',
        category: 'Kamera',
        howToAccess: 'Sağ alt kenardaki kamera tuşuna çift basın veya parmak kaydırın',
        description:
          'Ekran kapalıyken 0.5 saniyede 35 mm kamerayı açar ve tuş üzerinde parmağınızı kaydırarak odak uzaklığını ayarlar.'
      }
    ]
  },
  {
    id: 'honor-magic6-pro',
    brandId: 'honor',
    deviceType: 'phone',
    name: 'HONOR Magic6 Pro',
    series: 'Magic Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      '180 MP 2.5x periskop telefoto kamerası, f/1.4–f/2.0 değişken diyaframı, 5600 mAh silikon-karbon pili ve göz takip (Eye Tracking) teknolojisiyle öne çıkan model.',
    highlightSpec: '6.8" 5000 nit LTPO · SD 8 Gen 3 · 180 MP Periskop · 5600 mAh 80W/66W',
    specs: {
      display: {
        size: '6.8 inç',
        panel: 'LTPO OLED (4320Hz PWM)',
        resolution: '2800 x 1280 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '5000 nit (HDR)',
        protection: 'HONOR NanoCrystal Shield'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 750',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Super Dynamic Falcon, f/1.4–f/2.0 Değişken Diyafram, OIS',
        ultrawide: '50 MP, 2.5 cm Makro',
        telephoto: '180 MP 2.5x Periskop (100x Dijital), OIS',
        front: '50 MP + 3D ToF Derinlik Sensörü',
        video: '4K 60fps HDR'
      },
      battery: {
        capacity: '5600 mAh (2. Nesil Silikon-Karbon)',
        wiredCharging: '80W SuperCharge',
        wirelessCharging: '66W Kablosuz SuperCharge',
        reverseCharging: 'Ters kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.5 x 75.8 x 8.9 mm',
        weight: '225 g',
        materials: 'Metal çerçeve, NanoCrystal cam / vegan deri',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, IR Verici',
        audioAndExtras: '3D Yüz Tanıma, Göz Takipli Magic Portal'
      },
      software: {
        osAtLaunch: 'Android 14 / MagicOS 8.0 (MagicOS 9 aldı)',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'm6p-eye-tracking-banner',
        title: 'Göz Bakışıyla Gelen Bildirimi El Dokunmadan Açma',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > HONOR AI > Bakış Algılama',
        description:
          'Ekrana üstten bir mesaj bildirimi düştüğünde gözlerinizi doğrudan bildirime odaklayarak dokunmadan tam ekran açılmasını sağlar.'
      }
    ]
  },
  {
    id: 'nothing-phone-3a',
    brandId: 'nothing',
    deviceType: 'phone',
    name: 'Nothing Phone (3a)',
    series: 'Phone (a) Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Orta-Üst Segment',
    summary:
      'Snapdragon 7s Gen 3, 50 MP 2x optik telefoto lens, ikonik şeffaf Glyph LED arka tasarım ve fiziksel Essential Key düğmesini ulaşılabilir fiyata getiren 2025 modeli.',
    highlightSpec: '6.77" 3000 nit AMOLED · SD 7s Gen 3 · 2x Telefoto · Essential Key',
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
        ram: '8 GB / 12 GB',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 2.2',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.88, OIS',
        ultrawide: '8 MP, 120°',
        telephoto: '50 MP 2x Optik Telefoto (30x Ultra Zoom)',
        front: '32 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '50W Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '163.5 x 77.5 x 8.35 mm',
        weight: '201 g',
        materials: 'Şeffaf cam arka kapak, geri dönüştürülmüş alüminyum',
        waterResistance: 'IP64',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, NFC',
        audioAndExtras: '3 Şeritli Glyph LED, Essential Key düğmesi'
      },
      software: {
        osAtLaunch: 'Android 15 / Nothing OS 3.1',
        updatePolicy: '3 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'np3a-glyph-timer',
        title: 'Telefonu Ters Koyarak Glyph LED Çubuğundan Geri Sayım İzleme',
        category: 'Verimlilik',
        howToAccess: 'Glyph Zamanlayıcı kısayolu > Telefonu yüzüstü çevirin',
        description:
          'Pomodoro veya mutfak zamanlayıcısı kurup telefonu ters çevirdiğinizde arka ışık şeridi kalan süreyi azalan bir bar olarak gösterir.'
      }
    ]
  },
  {
    id: 'asus-zenfone-10',
    brandId: 'asus',
    deviceType: 'phone',
    name: 'ASUS Zenfone 10',
    series: 'Zenfone Kompakt',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Kompakt Amiral',
    summary:
      '5.9 inçlik tek elle kullanım boyutu, 3.5mm kulaklık jakı, kablosuz şarj, Snapdragon 8 Gen 2 ve 6 eksenli Gimbal sabitleyicisiyle son gerçek kompakt Android amirali.',
    highlightSpec: '5.92" 144Hz AMOLED · SD 8 Gen 2 · 6-Eksen Gimbal · 3.5mm Jak · 172 g',
    specs: {
      display: {
        size: '5.92 inç',
        panel: 'Samsung AMOLED',
        resolution: '2400 x 1080 piksel',
        refreshRate: '120 Hz (Oyunlarda 144 Hz)',
        peakBrightness: '1100 nit',
        protection: 'Corning Gorilla Glass Victus'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 2',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 740',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 16 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony IMX766, 6-Eksenli Hibrit Gimbal Sabitleyici 2.0',
        ultrawide: '13 MP, 120°',
        telephoto: 'Yok',
        front: '32 MP RGBW',
        video: '8K 24fps, 4K 60fps'
      },
      battery: {
        capacity: '4300 mAh',
        wiredCharging: '30W HyperCharge',
        wirelessCharging: '15W Qi Kablosuz',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '146.5 x 68.1 x 9.4 mm',
        weight: '172 g',
        materials: 'Alüminyum çerçeve, biyo-polikarbonat kaymaz arka',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, NFC',
        audioAndExtras: '3.5mm Hi-Res jak, ZenTouch kaydırmalı güç tuşu'
      },
      software: {
        osAtLaunch: 'Android 13 (Android 15 aldı)',
        updatePolicy: '2 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'zf10-zentouch-scroll',
        title: 'Yan Parmak İzi Tuşunda Parmağı Kaydırarak Web Sayfası Kaydırma',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Gelişmiş > ZenTouch',
        description:
          'Sağ kenardaki güç tuşunun üzerinde başparmağınızı yukarı/aşağı kaydırarak ekrana dokunmadan bildirim panelini indirir veya Chrome sayfasını kaydırırsınız.'
      }
    ]
  },
  {
    id: 'sony-xperia-xz-premium',
    brandId: 'sony',
    deviceType: 'phone',
    name: 'Sony Xperia XZ Premium',
    series: 'Xperia XZ Serisi',
    releaseYear: 2017,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Dünyanın ilk 4K HDR akıllı telefon ekranına, 960 fps süper ağır çekim Motion Eye kameraya ve ayna parlaklığında krom cam tasarıma sahip öncü model.',
    highlightSpec: '5.5" 4K HDR Ekran (807 ppi) · SD 835 · 960 fps Süper Ağır Çekim',
    specs: {
      display: {
        size: '5.5 inç',
        panel: '4K HDR IPS LCD (Triluminos)',
        resolution: '3840 x 2160 piksel (807 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '580 nit',
        protection: 'Corning Gorilla Glass 5 (Ön & Arka)'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 835',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 540',
        processNode: '10 nm'
      },
      memory: {
        ram: '4 GB',
        storage: '64 GB',
        storageType: 'UFS 2.1',
        expandable: 'microSDXC (256 GB)'
      },
      camera: {
        main: '19 MP Motion Eye (Sensör içi DRAM bellekli), f/2.0',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '13 MP',
        video: '4K 30fps, 720p 960 fps Süper Ağır Çekim (Dünyada ilk)'
      },
      battery: {
        capacity: '3230 mAh',
        wiredCharging: '18W Quick Charge 3.0',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '156 x 77 x 7.9 mm',
        weight: '195 g',
        materials: 'Luminous Chrome ayna cam gövde',
        waterResistance: 'IP68',
        connectivity: '4.5G LTE (1 Gbps ilk), Wi-Fi ac, Bluetooth 5.0, USB 3.1',
        audioAndExtras: '3.5mm Hi-Res jak, Ön stereo hoparlör, Fiziksel kamera tuşu'
      },
      software: {
        osAtLaunch: 'Android 7.1 (Android 9.0 Pie’a kadar)',
        updatePolicy: '2 büyük Android güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'xzp-predictive-capture',
        title: 'Deklanşöre Basmadan Önceki Anları Yakalayan Tahminli Çekim',
        category: 'Kamera',
        howToAccess: 'Kamera > Ayarlar > Tahminli Yakalama (Predictive Capture)',
        description:
          'Sensörün içindeki hızlı DRAM belleği sayesinde deklanşöre basmadan yarım saniye önceki hareketi tamponlayıp en net 4 kareyi sunar.'
      }
    ]
  },
  {
    id: 'realme-gt-5-pro',
    brandId: 'realme',
    deviceType: 'phone',
    name: 'realme GT 5 Pro',
    series: 'GT Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      '4500 nit 1.5K ekranı, Sony LYT-808 ana + IMX890 periskop kamerası, 5400 mAh + 100W/50W şarjı ve el avuç içi damar taramalı kilit açma teknolojisiyle dikkat çeker.',
    highlightSpec: '6.78" 144Hz AMOLED · SD 8 Gen 3 · IMX890 Periskop · Avuç İçi Kilit',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'BOE S1 LTPO AMOLED',
        resolution: '2780 x 1264 piksel',
        refreshRate: '1–144 Hz',
        peakBrightness: '4500 nit',
        protection: 'Dayanıklı kavisli cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 750',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony LYT-808, f/1.69, OIS',
        ultrawide: '8 MP',
        telephoto: '50 MP 2.7x Sony IMX890 Periskop (1/1.56"), OIS',
        front: '32 MP',
        video: '8K 24fps, 4K 60fps Dolby Vision'
      },
      battery: {
        capacity: '5400 mAh',
        wiredCharging: '100W SuperVOOC',
        wirelessCharging: '50W Kablosuz',
        reverseCharging: '10W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '161.7 x 75.1 x 9.2 mm',
        weight: '218 g',
        materials: 'Alüminyum çerçeve, vegan deri / yıldızlı cam',
        waterResistance: 'IP64',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici, USB 3.2',
        audioAndExtras: 'Temassız Avuç İçi Kilit Açma, Havadan el hareketleri'
      },
      software: {
        osAtLaunch: 'Android 14 / realme UI 5.0',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'gt5p-palm-unlock',
        title: 'Ekrana Dokunmadan Avuç İçiyle Kilit Açma ve Havada Kontrol',
        category: 'Güvenlik',
        howToAccess: 'Ayarlar > Güvenlik ve Gizlilik > Avuç İçi Kilit Açma',
        description:
          'Ön kameranın üzerine avucunuzu yaklaştırarak yemek yaparken veya elleriniz kirliyken ekrana dokunmadan kilit açabilirsiniz.'
      }
    ]
  },
  {
    id: 'nokia-lumia-920',
    brandId: 'nokia',
    deviceType: 'phone',
    name: 'Nokia Lumia 920',
    series: 'Lumia Serisi',
    releaseYear: 2012,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Dünyada ilk kez Optik Görüntü Sabitleme (OIS) ve dahili Qi kablosuz şarjı sunan, eldivenle bile kullanılabilen Süper Hassas IPS ekranlı Windows Phone ikonu.',
    highlightSpec: '4.5" PureMotion HD+ · Dünyada İlk OIS Kamera · Dahili Qi Kablosuz Şarj',
    specs: {
      display: {
        size: '4.5 inç',
        panel: 'PureMotion HD+ IPS LCD (Eldiven Dokunuş)',
        resolution: '1280 x 768 piksel (332 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '600 nit',
        protection: 'Corning Gorilla Glass 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon S4 Plus',
        cpu: '2 Çekirdek 1.5 GHz Krait',
        gpu: 'Adreno 225',
        processNode: '28 nm'
      },
      memory: {
        ram: '1 GB',
        storage: '32 GB',
        storageType: 'eMMC',
        expandable: 'Yok'
      },
      camera: {
        main: '8.7 MP Carl Zeiss, f/2.0, Dünyada İlk Yüzen Lens OIS',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '1.3 MP',
        video: '1080p 30fps (Sarsıntısız OIS)'
      },
      battery: {
        capacity: '2000 mAh',
        wiredCharging: 'Micro-USB',
        wirelessCharging: 'Dahili Qi Kablosuz Şarj (İlklerden)',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '130.3 x 70.8 x 10.7 mm',
        weight: '185 g',
        materials: 'Yekpare parlak polikarbonat, seramik kamera plakası',
        waterResistance: 'Yok',
        connectivity: '4G LTE, Wi-Fi n, Bluetooth 3.1, NFC',
        audioAndExtras: 'Yüksek basınçlı Rich Recording mikrofonlar, Fiziksel deklanşör'
      },
      software: {
        osAtLaunch: 'Windows Phone 8 (WP 8.1’e kadar)',
        updatePolicy: 'Lumia Cyan / Denim'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'l920-super-sensitive',
        title: 'Kışın Kalın Eldiven veya Tırnakla Ekran Kullanma',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Dokun > Dokunma Hassasiyeti > Yüksek',
        description:
          'Synaptics yüksek hassasiyetli dokunmatik katmanı sayesinde yün eldiven veya kalem ucuyla bile ekranı kaydırabilirsiniz.'
      }
    ]
  },
  {
    id: 'nokia-n9-2011',
    brandId: 'nokia',
    deviceType: 'phone',
    name: 'Nokia N9',
    series: 'MeeGo Harmattan',
    releaseYear: 2011,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Ön yüzünde HİÇBİR fiziksel veya kapasitif düğme olmadan sadece kenardan kaydırma (Swipe) hareketleriyle çalışan ilk tam ekranlı MeeGo efsanesi.',
    highlightSpec: '3.9" Kavisli AMOLED · Tuşsuz Tam Hareket Arayüzü · MeeGo Harmattan',
    specs: {
      display: {
        size: '3.9 inç',
        panel: 'ClearBlack Kavisli AMOLED',
        resolution: '854 x 480 piksel (FWVGA)',
        refreshRate: '60 Hz',
        peakBrightness: 'Standart AMOLED',
        protection: '2.5D Kavisli Gorilla Glass'
      },
      performance: {
        chipset: 'TI OMAP 3630',
        cpu: '1.0 GHz Cortex-A8',
        gpu: 'PowerVR SGX530',
        processNode: '45 nm'
      },
      memory: {
        ram: '1 GB',
        storage: '16 GB / 64 GB',
        storageType: 'eMMC',
        expandable: 'Yok'
      },
      camera: {
        main: '8 MP Carl Zeiss, f/2.2, Otofokus, Çift LED',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: 'VGA (Alt sağ köşede)',
        video: '720p 30fps'
      },
      battery: {
        capacity: '1450 mAh',
        wiredCharging: 'Micro-USB',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '116.5 x 61.2 x 12.1 mm',
        weight: '135 g',
        materials: 'Yekpare CNC işlenmiş mat polikarbonat',
        waterResistance: 'Yok',
        connectivity: '3G HSPA, Wi-Fi n, Bluetooth 2.1, NFC (İlklerden)',
        audioAndExtras: 'Dolby Headphone, Sıfır ön tuşlu Swipe navigasyonu'
      },
      software: {
        osAtLaunch: 'MeeGo 1.2 Harmattan (Linux)',
        updatePolicy: 'PR 1.3'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'n9-double-tap-swipe',
        title: 'Tuşsuz Gövdede Çift Dokunmayla Uyandırma & Kenardan Kaydırma',
        category: 'Verimlilik',
        howToAccess: 'Kapalı ekrana 2 kez dokunun ve kenardan içeri kaydırın',
        description:
          'iPhone X ve modern Android hareketlerinden tam 6 yıl önce tüm navigasyonu kenar kaydırmasına ve çift tıklamayla uyandırmaya dayandırmıştır.'
      }
    ]
  },
  {
    id: 'lg-g4-2015',
    brandId: 'lg',
    deviceType: 'phone',
    name: 'LG G4',
    series: 'G Serisi',
    releaseYear: 2015,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'El işçiliği gerçek deri çıkarılabilir arka kapak, f/1.8 parlak lensli manuel RAW (DNG) kamera, çıkarılabilir 3000 mAh pil ve microSD yuvasıyla fotoğrafçıların gözdesiydi.',
    highlightSpec: '5.5" Quantum IPS · Gerçek Deri Kapak · f/1.8 RAW Kamera · Çıkarılabilir Pil',
    specs: {
      display: {
        size: '5.5 inç',
        panel: 'Hafif Kavisli IPS Quantum QHD',
        resolution: '2560 x 1440 piksel (538 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Corning Gorilla Glass 3'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 808',
        cpu: '6 Çekirdek',
        gpu: 'Adreno 418',
        processNode: '20 nm'
      },
      memory: {
        ram: '3 GB LPDDR3',
        storage: '32 GB',
        storageType: 'eMMC 5.0',
        expandable: 'microSD (2 TB)'
      },
      camera: {
        main: '16 MP, f/1.8, OIS 2.0, Lazer Otofokus, Renk Spektrum Sensörü',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '3000 mAh (Çıkarılabilir)',
        wiredCharging: '18W Quick Charge 2.0',
        wirelessCharging: 'Opsiyonel kapak ile Qi',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '148.9 x 76.1 x 9.8 mm',
        weight: '155 g',
        materials: 'Bitkisel tabaklanmış gerçek deri arka kapak',
        waterResistance: 'Yok',
        connectivity: '4.5G LTE, Wi-Fi ac, Bluetooth 4.1, IR Verici, NFC',
        audioAndExtras: '3.5mm jak, FM Radyo, Tam Manuel Kamera (30 sn enstantane + RAW)'
      },
      software: {
        osAtLaunch: 'Android 5.1 Lollipop (Android 7.0’a kadar)',
        updatePolicy: '2 yıl Android güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'lgg4-raw-30s',
        title: '30 Saniye Uzun Pozlama & DNG RAW Manuel Kamera Modu',
        category: 'Kamera',
        howToAccess: 'Kamera > Mod > Manuel > RAW DNG + S (Enstantane 30s)',
        description:
          '2015’te DSLR makineler gibi 30 saniyeye kadar pozlama süresi, beyaz dengesi Kelvin ayarı ve sıkıştırılmamış DNG RAW kayıt sunuyordu.'
      }
    ]
  },
  {
    id: 'general-mobile-gm-5-plus',
    brandId: 'general-mobile',
    deviceType: 'phone',
    name: 'General Mobile GM 5 Plus (Android One)',
    series: 'Android One Serisi',
    releaseYear: 2016,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Google Android One programıyla Türkiye’de satış rekorları kıran, USB-C portu, 3 GB RAM ve saf Android güncellemeleri sunan döneminin fenomeni.',
    highlightSpec: '5.5" 1080p IPS · SD 617 · USB-C · Saf Android One',
    specs: {
      display: {
        size: '5.5 inç',
        panel: 'LTPS IPS LCD',
        resolution: '1920 x 1080 piksel (401 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '450 nit',
        protection: 'Corning Gorilla Glass 4 (2.5D)'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 617',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 405',
        processNode: '28 nm'
      },
      memory: {
        ram: '3 GB',
        storage: '32 GB',
        storageType: 'eMMC',
        expandable: 'microSD (128 GB)'
      },
      camera: {
        main: '13 MP, Çift LED Flaş, Otofokus',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '13 MP Ön LED Flaşlı',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '3100 mAh',
        wiredCharging: '18W Quick Charge 3.0 (USB-C)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '152 x 76.5 x 9.3 mm',
        weight: '160 g',
        materials: 'Metalik çerçeve, dokulu arka kapak',
        waterResistance: 'Yok',
        connectivity: '4.5G LTE (Cat 7), Wi-Fi ac, Bluetooth 4.1, USB-C',
        audioAndExtras: '3.5mm jak, FM Radyo, Ön Selfie Flaşı'
      },
      software: {
        osAtLaunch: 'Android 6.0.1 Marshmallow (Android 8.0 Oreo aldı)',
        updatePolicy: 'Google Android One 2 yıl doğrudan güncelleme'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'gm5p-system-ui-tuner',
        title: 'Gizli Sistem Arayüzü Ayarlayıcısı (System UI Tuner)',
        category: 'Geliştirici',
        howToAccess: 'Hızlı Ayarlar > Sağ üstteki Ayarlar Dişlisine 5 saniye basılı tutun',
        description:
          'Saf Android One yazılımında durum çubuğundaki pil yüzdesini, saniye göstergeli saati ve gece modunu açan gizli geliştirici menüsünü etkinleştirir.'
      }
    ]
  }
];
