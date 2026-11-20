import { PhoneModel } from '../types/phone';

export const PHONES_PART_2: PhoneModel[] = [
  // ================= OPPO =================
  {
    id: 'oppo-find-x8-pro',
    brandId: 'oppo',
    name: 'OPPO Find X8 Pro',
    series: 'Find X Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Dünyada ilk çift periskop telefoto (3x + 6x) ve fiziksel dokunmatik Hızlı Kamera düğmesi (Quick Button) barındıran Hasselblad imzalı amiral gemisi.',
    highlightSpec: '6.78" LTPO AMOLED · Dimensity 9400 · Çift Periskop (3x+6x) · 5910 mAh',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'LTPO AMOLED (Dolby Vision)',
        resolution: '2780 x 1264 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '4500 nit (HDR tepe)',
        protection: 'Corning Gorilla Glass 7i'
      },
      performance: {
        chipset: 'MediaTek Dimensity 9400',
        cpu: '8 Çekirdek (1x Cortex-X925 3.63 GHz)',
        gpu: 'Immortalis-G925 MC12',
        processNode: '3 nm (TSMC N3E)'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony LYT-808, f/1.6, OIS',
        ultrawide: '50 MP Samsung JN5, f/2.0',
        telephoto: '50 MP 3x Periskop + 50 MP 6x Periskop (135mm), OIS',
        front: '32 MP, f/2.4',
        video: '4K 60fps Dolby Vision HDR (Tüm 4 kamerada)',
        opticsNote: 'Hasselblad Renk Kalibrasyonu & Hızlı Kamera Düğmesi'
      },
      battery: {
        capacity: '5910 mAh (Silikon-Karbon)',
        wiredCharging: '80W SuperVOOC',
        wirelessCharging: '50W AirVOOC',
        reverseCharging: '10W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.3 x 76.7 x 8.2 mm',
        weight: '215 g',
        materials: 'Alüminyum çerçeve, Gorilla Glass arka',
        waterResistance: 'IP68 + IP69 (80°C sıcak su jetine dayanıklı)',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Kızılötesi',
        audioAndExtras: 'Alert Slider, Quick Button kamera tuşu, USB 3.2'
      },
      software: {
        osAtLaunch: 'Android 15 / ColorOS 15',
        updatePolicy: '5 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'fx8p-quick-button',
        title: 'Hızlı Düğme ile 0.4 sn Kamera Açma ve Kaydırarak Zoom',
        category: 'Kamera',
        howToAccess: 'Sağ alt kenardaki kapasitif Quick Button',
        description:
          'Ekran kapalıyken düğmeye çift dokunarak 0.4 saniyede kamerayı açar; basılı tutarak saniyede 7 kare seri çekim yapar ve parmağınızı sağa/sola kaydırarak zoom kontrolü sağlar.'
      },
      {
        id: 'fx8p-touch-to-share',
        title: 'iPhone ile NFC Üzerinden AirDrop Benzeri Dosya Paylaşımı',
        category: 'Verimlilik',
        howToAccess: 'Fotoğraflar > Paylaş > O+ Connect (iOS uygulaması ile)',
        description:
          'O+ Connect ile iki telefonun üst kenarını yaklaştırarak canlı fotoğrafları ve yüksek çözünürlüklü videoları iPhone’a kayıpsız aktarır.'
      }
    ]
  },
  {
    id: 'oppo-reno-12-pro',
    brandId: 'oppo',
    name: 'OPPO Reno 12 Pro 5G',
    series: 'Reno Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      'Şebeke ve Wi-Fi olmadan Bluetooth üzerinden cihazlar arası sesli iletişim kuran BeaconLink teknolojisi ve ince dört kenarı kavisli ekranıyla öne çıkar.',
    highlightSpec: '6.7" 120Hz AMOLED · Dimensity 7300-Energy · BeaconLink · 80W',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'AMOLED (Dört Kenar Mikro Kavis)',
        resolution: '2412 x 1080 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '1200 nit',
        protection: 'Corning Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'MediaTek Dimensity 7300-Energy',
        cpu: '8 Çekirdek (2.5 GHz)',
        gpu: 'Mali-G615 MC2',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB LPDDR4X',
        storage: '512 GB',
        storageType: 'UFS 3.1',
        expandable: 'microSDXC (1 TB)'
      },
      camera: {
        main: '50 MP Sony LYT-600, f/1.8, OIS',
        ultrawide: '8 MP, f/2.2',
        telephoto: '50 MP 2x Portre Telefoto, f/2.0',
        front: '50 MP Otofokuslu Selfie, f/2.0',
        video: '4K 30fps (Ön ve Arka)'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '80W SuperVOOC (46 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Ters kablolu şarj'
      },
      buildAndConnectivity: {
        dimensions: '161.5 x 74.8 x 7.4 mm',
        weight: '180 g',
        materials: 'Yüksek mukavemetli alaşım iç iskelet (All-Round Armour)',
        waterResistance: 'IP65',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, IR Verici',
        audioAndExtras: 'BeaconLink (200m şebekesiz arama), microSD yuvası'
      },
      software: {
        osAtLaunch: 'Android 14 / ColorOS 14.1',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'reno12p-beaconlink',
        title: 'BeaconLink (Şebeke Olmadan 200 Metreye Kadar Sesli Arama)',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Mobil Ağ > BeaconLink',
        description:
          'Metro, konser alanı veya dağ yürüyüşü gibi baz istasyonunun çekmediği yerlerde güçlendirilmiş Bluetooth protokolüyle yakındaki uyumlu cihazları ücretsiz arar.'
      }
    ]
  },

  // ================= VIVO =================
  {
    id: 'vivo-x200-pro',
    brandId: 'vivo',
    name: 'vivo X200 Pro',
    series: 'X Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      '200 MP ZEISS APO telefoto kamerası, özel V3+ görüntüleme çipi, 6000 mAh yarı katı silikon pil ve Dimensity 9400 gücüyle yılın en iddialı kamera telefonlarından biri.',
    highlightSpec: '6.78" LTPO AMOLED · Dimensity 9400 · 200 MP ZEISS APO · 6000 mAh',
    specs: {
      display: {
        size: '6.78 inç',
        panel: '8T LTPO AMOLED (ZEISS Master Color)',
        resolution: '2800 x 1260 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '4500 nit',
        protection: 'Armor Glass'
      },
      performance: {
        chipset: 'MediaTek Dimensity 9400 + vivo V3+ Görüntü Çipi',
        cpu: '8 Çekirdek (3.63 GHz)',
        gpu: 'Immortalis-G925',
        processNode: '3 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony LYT-818 (1/1.28"), f/1.57, Gimbal-sınıfı OIS',
        ultrawide: '50 MP, f/2.0, Otofokus',
        telephoto: '200 MP 3.7x ZEISS APO Periskop (85mm), Tele-Makro, OIS',
        front: '32 MP, f/2.0',
        video: '4K 120fps, 4K 60fps 10-bit Log, 4K Sinematik Portre Video',
        opticsNote: 'ZEISS T* Yansıma Önleyici Kaplama'
      },
      battery: {
        capacity: '6000 mAh (-20°C soğuğa dayanıklı silikon anot)',
        wiredCharging: '90W FlashCharge',
        wirelessCharging: '30W Kablosuz',
        reverseCharging: 'Ters kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.4 x 76.0 x 8.5 mm',
        weight: '223 g',
        materials: 'Alüminyum çerçeve, cam arka yüzey',
        waterResistance: 'IP68 + IP69',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: '3D Ultrasonik parmak izi, USB 3.2 Gen 1'
      },
      software: {
        osAtLaunch: 'Android 15 / Funtouch OS 15',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'x200p-telemacro',
        title: '200 MP Telefoto Lens ile 20x Süper Tele-Makro Çekimi',
        category: 'Kamera',
        howToAccess: 'Kamera > Süper Makro (Çiçek simgesi) > 3.7x veya 10x seçin',
        description:
          'Nesnenin dibine girip gölgenizi düşürmeden 15–20 cm uzaktan 200 MP periskop lensle böcek, saat mekanizması veya doku detaylarını mikroskop netliğinde çeker.'
      },
      {
        id: 'x200p-stage-mode',
        title: 'Konser ve Sahne Modu (Stage Mode)',
        category: 'Kamera',
        howToAccess: 'Kamera > Daha Fazla > Sahne (Stage)',
        description:
          'Yüksek kontrastlı konser sahne ışıklarında patlamayı engelleyerek 10x–20x zoom mesafesinden sanatçıyı net ve doygun yakalar.'
      }
    ]
  },

  // ================= ONEPLUS =================
  {
    id: 'oneplus-13',
    brandId: 'oneplus',
    name: 'OnePlus 13',
    series: 'Amiral Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      'DisplayMate A++ ödüllü 2K ekranı, 6000 mAh silikon-karbon bataryası, 100W şarjı, IP69 dayanıklılığı ve Snapdragon 8 Elite işlemcisiyle eksiksiz hız amiral gemisi.',
    highlightSpec: '6.82" 2K AMOLED · SD 8 Elite · 6000 mAh · 100W/50W · IP69',
    specs: {
      display: {
        size: '6.82 inç',
        panel: 'BOE X2 LTPO 4.1 AMOLED (Düz / Mikro 4-Kavis)',
        resolution: '3168 x 1440 piksel (QHD+)',
        refreshRate: '1–120 Hz',
        peakBrightness: '4500 nit',
        protection: 'Ceramic Guard Cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite',
        cpu: '8 Çekirdek Oryon (4.32 GHz)',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB / 16 GB / 24 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony LYT-808, f/1.6, OIS',
        ultrawide: '50 MP Samsung JN5, f/2.0, Makro',
        telephoto: '50 MP 3x Triprism Periskop (LYT-600), OIS',
        front: '32 MP, f/2.4',
        video: '4K 60fps Dolby Vision (Tüm kameralar)',
        opticsNote: '5. Nesil Hasselblad Mobil Kamera + Clear Burst'
      },
      battery: {
        capacity: '6000 mAh (Çift Hücreli Silikon-Karbon)',
        wiredCharging: '100W SuperVOOC (36 dk %100)',
        wirelessCharging: '50W AirVOOC (Manyetik kılıf uyumlu)',
        reverseCharging: '10W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.9 x 76.5 x 8.5 mm',
        weight: '210 g (Mikrofiber deri) / 213 g (Cam)',
        materials: 'Alüminyum çerçeve, Ceramic Guard / Vegan Deri',
        waterResistance: 'IP68 + IP69',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: '3 Konumlu Alert Slider, Ultrasonik parmak izi, USB 3.2'
      },
      software: {
        osAtLaunch: 'Android 15 / OxygenOS 15',
        updatePolicy: '4 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'op13-glove-aqua',
        title: 'Eldiven Modu + Aqua Touch 2.0 (Su ve Kış Eldiveniyle Kullanım)',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ekran ve Parlaklık > Eldiven Modu',
        description:
          'Kalın kış eldiveni giyerken veya ekran yağmur damlalarıyla kaplıyken dokunma hassasiyetini otomatik kalibre eder.'
      },
      {
        id: 'op13-beacon-share',
        title: 'Alert Slider ile Tek Hamlede Tam Sessiz / Titreşim / Zil Geçişi',
        category: 'Verimlilik',
        howToAccess: 'Sol üst yan çerçevedeki 3 kademeli fiziksel anahtar',
        description:
          'Telefonu cebinizden çıkarmadan parmak ucuyla sessiz, titreşim veya sesli moda fiziksel olarak geçiş yapabilirsiniz.'
      }
    ]
  },

  // ================= GOOGLE PIXEL =================
  {
    id: 'pixel-9-pro-xl',
    brandId: 'google',
    name: 'Google Pixel 9 Pro XL',
    series: 'Pixel 9 Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      '7 yıl saf Android güncellemesi, dahili kızılötesi sıcaklık sensörü, uydu acil SOS ve Tensor G4 + 16 GB RAM ile Google’ın en büyük amiral gemisi.',
    highlightSpec: '6.8" Super Actua LTPO · Tensor G4 · 16 GB RAM · 7 Yıl Güncelleme',
    specs: {
      display: {
        size: '6.8 inç',
        panel: 'Super Actua LTPO OLED',
        resolution: '2992 x 1344 piksel (486 ppi)',
        refreshRate: '1–120 Hz',
        peakBrightness: '3000 nit',
        protection: 'Corning Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Google Tensor G4 + Titan M2 Güvenlik Çipi',
        cpu: '8 Çekirdek (1x Cortex-X4 + 3x A720 + 4x A520)',
        gpu: 'Mali-G715 MC7',
        processNode: '4 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB / 1 TB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Octa PD, f/1.68, OIS',
        ultrawide: '48 MP Quad PD, f/1.7, Makro Odak',
        telephoto: '48 MP 5x Periskop (30x Super Res Zoom), OIS',
        front: '42 MP Dual PD Otofokuslu, f/2.2 (103°)',
        video: '8K 30fps (Video Boost), 4K 60fps 10-bit HDR'
      },
      battery: {
        capacity: '5060 mAh',
        wiredCharging: '37W USB-C PD (30 dk %70)',
        wirelessCharging: '23W Pixel Stand / 12W Qi',
        reverseCharging: 'Battery Share (Ters Kablosuz)'
      },
      buildAndConnectivity: {
        dimensions: '162.8 x 76.6 x 8.5 mm',
        weight: '221 g',
        materials: 'Geri dönüştürülmüş alüminyum çerçeve, mat arka cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB, Thread, Uydu SOS',
        audioAndExtras: 'Ultrasonik parmak izi, Kızılötesi Termometre sensörü'
      },
      software: {
        osAtLaunch: 'Android 14 / Android 15 (Pixel UI)',
        updatePolicy: '7 yıl işletim sistemi, güvenlik ve Pixel Drop'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p9pxl-thermometer',
        title: 'Dahili Kızılötesi Termometre ile Nesne ve Vücut Ateşi Ölçümü',
        category: 'Sistem',
        howToAccess: 'Termometre (Thermometer) uygulaması',
        description:
          'Kamera barının yanındaki kızılötesi sensörü kullanarak içecek, tava, bebek maması sıcaklığını veya alından vücut ateşini temassız ölçer.'
      },
      {
        id: 'p9pxl-add-me',
        title: 'Beni de Ekle (Add Me) ile Fotoğrafçıyı Kareye Dahil Etme',
        category: 'Kamera',
        howToAccess: 'Kamera > Beni de Ekle (Add Me)',
        description:
          'Grup fotoğrafını çektikten sonra telefonu başka birine verip boş bıraktığınız yere geçersiniz; cihaz iki pozu AR rehberiyle tek gerçekçi karede birleştirir.'
      },
      {
        id: 'p9pxl-bypass-80',
        title: '%80 Şarj Sınırında Otomatik Doğrudan Besleme (Bypass Charging)',
        category: 'Batarya',
        howToAccess: 'Ayarlar > Pil > Şarj Optimizasyonu > %80 ile sınırla',
        description:
          '%80 şarj sınırı açıkken pil %80’e ulaştığında şarjı keser ve kabloyu çıkarmadan doğrudan prizden güç çekerek masaüstü kullanımında pili korur.'
      }
    ]
  },
  {
    id: 'pixel-9-pro',
    brandId: 'google',
    name: 'Google Pixel 9 Pro',
    series: 'Pixel 9 Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Kompakt Amiral',
    summary:
      'Pro XL’in tüm üçlü 50/48/48 MP kamera donanımını, 16 GB RAM’ini ve termometre sensörünü tek elle kullanılabilen 6.3 inçlik kompakt gövdede sunar.',
    highlightSpec: '6.3" Super Actua · Tensor G4 · 5x Periskop · 199 g',
    specs: {
      display: {
        size: '6.3 inç',
        panel: 'Super Actua LTPO OLED',
        resolution: '2856 x 1280 piksel (495 ppi)',
        refreshRate: '1–120 Hz',
        peakBrightness: '3000 nit',
        protection: 'Corning Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Google Tensor G4 + Titan M2',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G715 MC7',
        processNode: '4 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB / 1 TB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.68, OIS',
        ultrawide: '48 MP, f/1.7, Makro',
        telephoto: '48 MP 5x Periskop, OIS',
        front: '42 MP, f/2.2, Otofokus',
        video: '8K 30fps (Video Boost), 4K 60fps'
      },
      battery: {
        capacity: '4700 mAh',
        wiredCharging: '27W USB-C PD',
        wirelessCharging: '21W Pixel Stand / 12W Qi',
        reverseCharging: 'Battery Share'
      },
      buildAndConnectivity: {
        dimensions: '152.8 x 72.0 x 8.5 mm',
        weight: '199 g',
        materials: 'Alüminyum çerçeve, mat arka cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB',
        audioAndExtras: 'Termometre sensörü, Ultrasonik parmak izi'
      },
      software: {
        osAtLaunch: 'Android 14 / Android 15',
        updatePolicy: '7 yıl güncelleme garantisi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'p9p-pro-controls',
        title: 'Tam Çözünürlüklü 50 MP RAW ve Manuel Deklanşör/ISO Kontrolü',
        category: 'Kamera',
        howToAccess: 'Kamera > Sağ alt Ayarlar > Pro Kontroller > 50 MP & RAW+JPEG',
        description:
          'Varsayılan 12.5 MP yerine tüm sensör verisini kullanarak tam 50 MP DNG dosyaları üretir ve manuel odak tepeleme (Focus Peaking) açar.'
      }
    ]
  },

  // ================= HONOR =================
  {
    id: 'honor-magic7-pro',
    brandId: 'honor',
    name: 'HONOR Magic7 Pro',
    series: 'Magic Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      '200 MP periskop telefoto, f/1.4–f/2.0 değişken diyafram, 3D ToF gerçek yüz tanıma ve 4320Hz PWM göz dostu ekranıyla donanım şampiyonu.',
    highlightSpec: '6.8" LTPO OLED · SD 8 Elite · 200 MP Periskop · 3D Face ID',
    specs: {
      display: {
        size: '6.8 inç',
        panel: 'LTPO OLED (4320Hz PWM + Dairesel Polarizasyon)',
        resolution: '2800 x 1280 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '5000 nit (HDR tepe)',
        protection: 'HONOR NanoCrystal Shield'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite',
        cpu: '8 Çekirdek Oryon',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Super Dynamic Falcon, f/1.4–f/2.0 Değişken Diyafram, OIS',
        ultrawide: '50 MP, f/2.0, 2.5 cm Makro',
        telephoto: '200 MP 3x Optik Periskop (100x Dijital), OIS',
        front: '50 MP + 3D ToF Derinlik Sensörü (Karanlıkta Güvenli Yüz Tanıma)',
        video: '4K 60fps, Magic-Log 10-bit'
      },
      battery: {
        capacity: '5850 mAh (Küresel) / 5270 mAh (AB)',
        wiredCharging: '100W HONOR SuperCharge',
        wirelessCharging: '80W Kablosuz SuperCharge',
        reverseCharging: 'Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.7 x 77.1 x 8.8 mm',
        weight: '223 g',
        materials: 'Alüminyum çerçeve, NanoCrystal arka cam',
        waterResistance: 'IP68 + IP69',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: '3D Ultrasonik Parmak İzi + 3D ToF Yüz Tanıma, Çift Bass Hoparlör'
      },
      software: {
        osAtLaunch: 'Android 15 / MagicOS 9.0',
        updatePolicy: '5 yıl güncelleme desteği'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'm7p-3d-face-bank',
        title: 'Android’de 3D ToF Bankacılık Sınıfı Yüz Tanıma + Göz Takibi',
        category: 'Güvenlik',
        howToAccess: 'Ayarlar > Biyometri ve Şifre > Yüz Tanıma > Bakış Kontrolü',
        description:
          'Öndeki 3D ToF sensörü sayesinde zifiri karanlıkta bile bankacılık uygulamalarını yüzle açar; ekrana baktığınız sürece ekranın kapanmasını engeller.'
      },
      {
        id: 'm7p-ai-deepfake',
        title: 'Görüntülü Aramada Gerçek Zamanlı Deepfake Algılama',
        category: 'Güvenlik',
        howToAccess: 'Ayarlar > Güvenlik ve Gizlilik > Yapay Zeka Deepfake Tespiti',
        description:
          'Görüntülü görüşme sırasında karşı tarafta yüz değiştirme (deepfake) yazılımı kullanılıp kullanılmadığını cihaz içi analizle uyarır.'
      }
    ]
  },
  {
    id: 'honor-magic-v3',
    brandId: 'honor',
    name: 'HONOR Magic V3',
    series: 'Magic V Katlanabilir',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Katlanabilir',
    summary:
      'Katlıyken yalnızca 9.2 mm kalınlığı ve 226 gram ağırlığıyla standart düz telefonlarla aynı incelikte olan ultra ince kitap tipi katlanabilir model.',
    highlightSpec: '7.92" Katlanır · 9.2 mm Katlı İncelik · 226 g · 5150 mAh',
    specs: {
      display: {
        size: '7.92 inç (İç) + 6.43 inç (Dış)',
        panel: 'LTPO AMOLED (Stylus destekli her iki ekran)',
        resolution: '2344 x 2156 (İç) / 2376 x 1060 (Dış)',
        refreshRate: '1–120 Hz',
        peakBrightness: '5000 nit (Dış) / 1800 nit (İç)',
        protection: 'Anti-scratch NanoCrystal Shield'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 750',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB / 16 GB',
        storage: '512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.6, OIS',
        ultrawide: '40 MP, f/2.2, Makro',
        telephoto: '50 MP 3.5x Periskop, OIS',
        front: '20 MP (İç) + 20 MP (Dış)',
        video: '4K 60fps'
      },
      battery: {
        capacity: '5150 mAh (Silikon-Karbon)',
        wiredCharging: '66W SuperCharge',
        wirelessCharging: '50W Kablosuz',
        reverseCharging: 'Ters kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '4.35 mm (Açık) / 9.2 mm (Katlı)',
        weight: '226 g',
        materials: 'HONOR Super Steel menteşe, havacılık elyafı arka kapak',
        waterResistance: 'IPX8 (2.5m suya dayanıklı)',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, IR Verici',
        audioAndExtras: 'Magic-Pencil kalem desteği (İç ve dış ekranda)'
      },
      software: {
        osAtLaunch: 'Android 14 / MagicOS 8.0.1',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'mv3-dual-screen-translate',
        title: 'Yüz Yüze Çift Ekranlı Canlı Tercüman Modu',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > HONOR AI > Yüz Yüze Çeviri',
        description:
          'Cihazı açık şekilde masaya koyduğunuzda iç ekranda sizin diliniz, dış ekranda karşı tarafın dili eş zamanlı olarak çevrilir.'
      }
    ]
  },

  // ================= NOTHING =================
  {
    id: 'nothing-phone-2',
    brandId: 'nothing',
    name: 'Nothing Phone (2)',
    series: 'Phone Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      '11 parçalı 33 ayrı adreslenebilir bölgeli Glyph LED arayüzü, şeffaf arka cam tasarımı ve akıcı Nothing OS ile özgün tasarım arayanların favorisi.',
    highlightSpec: '6.7" LTPO OLED · SD 8+ Gen 1 · 33 Bölgeli Glyph LED · 45W/15W',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'LTPO OLED',
        resolution: '2412 x 1080 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '1600 nit',
        protection: 'Corning Gorilla Glass 5'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8+ Gen 1',
        cpu: '8 Çekirdek (3.0 GHz)',
        gpu: 'Adreno 730',
        processNode: '4 nm (TSMC)'
      },
      memory: {
        ram: '8 GB / 12 GB LPDDR5',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony IMX890, f/1.88, OIS',
        ultrawide: '50 MP Samsung JN1, f/2.2, 4 cm Makro',
        telephoto: 'Yok (2x Kayıpsız Sensör Zoom)',
        front: '32 MP Sony IMX615',
        video: '4K 60fps'
      },
      battery: {
        capacity: '4700 mAh',
        wiredCharging: '45W PD (55 dk %100)',
        wirelessCharging: '15W Qi',
        reverseCharging: '5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.1 x 76.4 x 8.6 mm',
        weight: '201.2 g',
        materials: '%100 geri dönüştürülmüş alüminyum çerçeve, şeffaf cam',
        waterResistance: 'IP54',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC',
        audioAndExtras: '33 bölgeli Glyph LED arayüzü, Kırmızı Kayıt LED’i'
      },
      software: {
        osAtLaunch: 'Android 13 / Nothing OS 2.0 (Nothing OS 3.0 aldı)',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'np2-glyph-fill-light',
        title: 'Kamera İçin Yumuşak Glyph Dolgu Işığı (Softbox Efekti)',
        category: 'Kamera',
        howToAccess: 'Kamera > Üstteki Flaş simgesine dokun > Glyph Işığı (Halka)',
        description:
          'Sert noktasal kamera flaşı yerine arka kapaktaki tüm LED şeritlerini tam güçte yakarak portre ve makro çekimlerde doğal stüdyo dolgu ışığı sağlar.'
      },
      {
        id: 'np2-glyph-charge-meter',
        title: 'Telefonu Sallayarak Kablo Takılıyken Şarj Yüzdesini Görme',
        category: 'Batarya',
        howToAccess: 'Ayarlar > Glyph Arayüzü > Şarj Göstergesi',
        description:
          'Telefon şarja takılıyken hafifçe salladığınızda ekranı açmadan alt LED çubuğunun doluluk oranıyla pil yüzdesini gösterir.'
      }
    ]
  },

  // ================= SONY =================
  {
    id: 'sony-xperia-1-vi',
    brandId: 'sony',
    name: 'Sony Xperia 1 VI',
    series: 'Xperia 1 Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      '85–170 mm arasında gerçek sürekli optik zoom yapabilen hareketli periskop lensi, 3.5mm kulaklık girişi, microSD kart yuvası ve 2 günlük pil ömrüyle benzersiz amiral gemisi.',
    highlightSpec: '6.5" LTPO OLED · 85–170mm Sürekli Optik Zoom · 3.5mm Jak · microSD',
    specs: {
      display: {
        size: '6.5 inç',
        panel: 'BRAVIA Destekli LTPO OLED (19.5:9)',
        resolution: '2340 x 1080 piksel (FHD+)',
        refreshRate: '1–120 Hz',
        peakBrightness: '1500 nit (Sunlight Vision)',
        protection: 'Corning Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 750',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 4.0',
        expandable: 'microSDXC (1.5 TB’a kadar, aletsiz tepsi)'
      },
      camera: {
        main: '48 MP Exmor T (24mm / 48mm), f/1.9, OIS',
        ultrawide: '12 MP (16mm), f/2.2, Dual Pixel PDAF',
        telephoto: '12 MP Gerçek Sürekli Optik Zoom (85mm–170mm / 3.5x–7.1x) + 4 cm Tele-Makro',
        front: '12 MP, f/2.0',
        video: '4K 120fps HDR (Tüm lenslerde), S-Cinetone renk profili',
        opticsNote: 'ZEISS T* kaplama & Fiziksel iki kademeli deklanşör düğmesi'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '30W USB-C PD',
        wirelessCharging: '15W Qi',
        reverseCharging: 'Ters kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.0 x 74.0 x 8.2 mm',
        weight: '192 g',
        materials: 'Tırtıklı dokulu alüminyum çerçeve, Gorilla Glass Victus arka',
        waterResistance: 'IP65 / IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, NFC',
        audioAndExtras: '3.5mm Hi-Res altın kaplama jak, ön stereo hoparlör, buhar odası'
      },
      software: {
        osAtLaunch: 'Android 14 (Android 15 aldı)',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'x1vi-telemacro-manual',
        title: '120mm Periskop Lensle Manuel Odak Peaking Tele-Makro Çekim',
        category: 'Kamera',
        howToAccess: 'Kamera > Daha Fazla > Tele-Makro',
        description:
          'Telefoto lensin minimum odak mesafesi sınırını kaldırarak 4 cm mesafeden manuel odak halkası ve focus peaking ile ultra keskin makro fotoğraflar çeker.'
      },
      {
        id: 'x1vi-creator-mode',
        title: 'CineAlta Referans Renk Modu (BT.2020 / D65 Kalibrasyon)',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ekran > Görüntü Kalitesi Ayarları > Creator Modu',
        description:
          'Ekranı sinema stüdyolarında kullanılan D65 beyaz noktası ve BT.2020 renk uzayına kilitler.'
      }
    ]
  },

  // ================= ASUS =================
  {
    id: 'asus-rog-phone-9-pro',
    brandId: 'asus',
    name: 'ASUS ROG Phone 9 Pro',
    series: 'ROG Phone Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Oyun',
    summary:
      '185 Hz yenileme hızı, arka kapakta 648 mini-LED AniMe Vision ekran (üzerinde oyun oynanabiliyor!), çift USB-C portu ve 6 eksenli Gimbal kamerasıyla nihai oyuncu telefonu.',
    highlightSpec: '6.78" 185Hz AMOLED · SD 8 Elite · Çift USB-C · 5800 mAh',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'Samsung E6 LTPO AMOLED',
        resolution: '2400 x 1080 piksel',
        refreshRate: '1–120 Hz (Oyunlarda 165 Hz / 185 Hz)',
        peakBrightness: '2500 nit',
        protection: 'Corning Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite',
        cpu: '8 Çekirdek Oryon',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '16 GB / 24 GB LPDDR5X',
        storage: '512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony Lytia 700, 6-Eksenli Hibrit Gimbal Sabitleyici 4.0',
        ultrawide: '13 MP, Serbest Formlu Lens',
        telephoto: '32 MP 3x Optik Telefoto, OIS',
        front: '32 MP RGBW',
        video: '8K 30fps, 4K 60fps'
      },
      battery: {
        capacity: '5800 mAh (Çift Hücreli Merkez Anakart Tasarımı)',
        wiredCharging: '65W HyperCharge (46 dk %100)',
        wirelessCharging: '15W Qi',
        reverseCharging: '10W Ters Kablolu'
      },
      buildAndConnectivity: {
        dimensions: '163.8 x 76.8 x 8.9 mm',
        weight: '227 g',
        materials: 'Alüminyum çerçeve, mat kristal cam, 648 mini-LED AniMe Vision',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, NFC',
        audioAndExtras: '3.5mm kulaklık jakı, Çift USB-C portu, AirTriggers'
      },
      software: {
        osAtLaunch: 'Android 15 / ROG UI',
        updatePolicy: '2 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'rog9p-anime-play',
        title: 'Arka Kapaktaki Mini-LED Matriste Piksel Oyunları Oynama (AniMe Play)',
        category: 'Verimlilik',
        howToAccess: 'Armoury Crate > AniMe Vision > AniMe Play',
        description:
          'Telefonun arka kapağındaki 648 adet mini-LED üzerinde AirTrigger omuz tuşlarını kullanarak Snake veya Brick Breaker gibi retro oyunlar oynayabilirsiniz.'
      },
      {
        id: 'rog9p-side-port-hdmi',
        title: 'Yan USB-C Portundan Aynı Anda DisplayPort 4K Çıkışı & Bypass Şarj',
        category: 'Geliştirici',
        howToAccess: 'Sol yan kenardaki ikinci USB-C 3.1 portu',
        description:
          'Yatay oyun oynarken elinize takılmadan şarj etmek veya monitöre kablo bağlayıp alt portu kulaklık/aksesuar için boş bırakmak üzere tasarlanmıştır.'
      }
    ]
  },

  // ================= REALME =================
  {
    id: 'realme-gt-7-pro',
    brandId: 'realme',
    name: 'realme GT 7 Pro',
    series: 'GT Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Snapdragon 8 Elite, 6500 mAh dev Titan silikon pil, 120W ultra hızlı şarj ve IP69 su altı fotoğrafçılık moduyla fiyat/performans amiral gemisi.',
    highlightSpec: '6.78" Eco² OLED · SD 8 Elite · 6500 mAh · 120W · Su Altı Modu',
    specs: {
      display: {
        size: '6.78 inç',
        panel: 'Samsung Eco² OLED Plus (Polarizersiz)',
        resolution: '2780 x 1264 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '6500 nit (Lokal tepe) / 2000 nit (HBM)',
        protection: 'Corning Gorilla Glass 7i'
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
        main: '50 MP Sony IMX906, f/1.8, OIS',
        ultrawide: '8 MP, f/2.2',
        telephoto: '50 MP 3x Sony IMX882 Periskop, OIS',
        front: '16 MP',
        video: '8K 24fps, 4K 60fps Dolby Vision'
      },
      battery: {
        capacity: '6500 mAh (Silikon Anot Titan Pil)',
        wiredCharging: '120W SuperVOOC (13 dk %50, 37 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '162.5 x 76.9 x 8.55 mm',
        weight: '222.8 g',
        materials: 'Alüminyum çerçeve, cam arka yüzey',
        waterResistance: 'IP68 + IP69 (2 metre tatlı suda 30 dk çekim)',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: 'Ultrasonik parmak izi (Su altında da açılır), 11480 mm² buhar odası'
      },
      software: {
        osAtLaunch: 'Android 15 / realme UI 6.0',
        updatePolicy: '3–4 yıl Android + 4–5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'gt7p-underwater-ultrasonic',
        title: 'Su Altında Ultrasonik Parmak İzi ve Ses Tuşlarıyla Fotoğraf Çekme',
        category: 'Kamera',
        howToAccess: 'Kamera > Daha Fazla > Su Altı Modu (Çıkışta otomatik su tahliyesi)',
        description:
          'Havuz veya tatlı suda ekran kilidini ıslak elle bile ultrasonik sensörle açar; fotoğraf için ses açma, lens değişimi için güç tuşunu kullanır.'
      }
    ]
  }
];
