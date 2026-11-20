import { PhoneModel } from '../types/phone';

export const PHONES_PART_1: PhoneModel[] = [
  // ================= APPLE =================
  {
    id: 'iphone-16-pro-max',
    brandId: 'apple',
    name: 'iPhone 16 Pro Max',
    series: 'iPhone 16 Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Grade 5 titanyum kasa, 6.9 inç Ultra İnce çerçeveli ProMotion OLED ekran, A18 Pro çip ve fiziksel Kamera Denetimi düğmesiyle Apple’ın en büyük ve en uzun pil ömürlü modeli.',
    highlightSpec: '6.9" LTPO OLED · A18 Pro · 4K 120fps Dolby Vision · 5x Tetraprizma',
    specs: {
      display: {
        size: '6.9 inç',
        panel: 'Super Retina XDR LTPO OLED',
        resolution: '2868 x 1320 piksel (460 ppi)',
        refreshRate: '1–120 Hz ProMotion (Always-On)',
        peakBrightness: '2000 nit (Dış mekan), 1 nit minimum',
        protection: 'Yeni Nesil Ceramic Shield'
      },
      performance: {
        chipset: 'Apple A18 Pro',
        cpu: '6 Çekirdek (2 Performans + 4 Verimlilik)',
        gpu: '6 Çekirdek Apple GPU (Donanımsal Ray Tracing)',
        processNode: '3 nm (TSMC N3E)'
      },
      memory: {
        ram: '8 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP Fusion, f/1.78, sensör kaydırmalı OIS (2. nesil)',
        ultrawide: '48 MP, f/2.2, 120°, Makro odaklı',
        telephoto: '12 MP 5x Tetraprizma Periskop, f/2.8, 120 mm, 3D OIS',
        front: '12 MP TrueDepth, f/1.9, Otofokus + SL 3D derinlik',
        video: '4K 120 fps Dolby Vision, ProRes Log (harici SSD), Mekansal Ses',
        opticsNote: 'Yansıma önleyici lens kaplaması + LiDAR Tarayıcı'
      },
      battery: {
        capacity: '4685 mAh',
        wiredCharging: 'USB-C (30W–45W PD tepe güç, 30 dk %50)',
        wirelessCharging: '25W MagSafe / 15W Qi2',
        reverseCharging: '4.5W Kablolu USB-C'
      },
      buildAndConnectivity: {
        dimensions: '163.0 x 77.6 x 8.25 mm',
        weight: '227 g',
        materials: 'Grade 5 Titanyum çerçeve, dokulu mat cam arka yüzey',
        waterResistance: 'IP68 (6 metreye kadar 30 dakika)',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB (2. nesil), Uydu SOS',
        audioAndExtras: 'USB 3.2 Gen 2 (10 Gbps), 4 stüdyo mikrofon, Kamera Denetimi'
      },
      software: {
        osAtLaunch: 'iOS 18',
        updatePolicy: '6–7 yıl büyük iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: '16pm-camera-control-halfpress',
        title: 'Kamera Denetimi Hafif Basma (Yarım Deklanşör & Odak Kilidi)',
        category: 'Kamera',
        howToAccess: 'Ayarlar > Kamera > Kamera Denetimi > Odak ve Pozlama Kilidi',
        description:
          'Sağ alt kenardaki kapasitif Kamera Denetimi düğmesine hafifçe basılı tutarak netleme ve pozlamayı DSLR gibi kilitleyebilir, parmağınızı kaydırarak lens, pozlama veya Fotoğrafik Stil değiştirebilirsiniz.'
      },
      {
        id: '16pm-audio-mix',
        title: 'Video Sonrası Stüdyo & Sinematik Ses Miksajı (Audio Mix)',
        category: 'Kamera',
        howToAccess: 'Fotoğraflar > Videoyu Düzenle > Ses simgesi (Audio Mix)',
        description:
          '4 stüdyo kalitesindeki mikrofon diziliminden faydalanarak çekim bittikten sonra bile kadraj dışındaki sesleri silip sesi "Stüdyo" veya "Sinematik" moda dönüştürür.'
      },
      {
        id: '16pm-lidar-measure',
        title: 'LiDAR ile Anlık Boy Ölçümü ve 3D Oda Tarama',
        category: 'Sistem',
        howToAccess: 'Ölçüm (Measure) uygulaması',
        description:
          'Kamera adasındaki LiDAR tarayıcı sayesinde kadraja giren bir kişinin boyunu santimetre hassasiyetinde anında ölçer ve karanlıkta hızlı lazer otofokus sağlar.'
      },
      {
        id: '16pm-action-button-menu',
        title: 'Eylem Düğmesine Çoklu Kısayol Menüsü Atama',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Eylem Düğmesi > Kestirme > Klasör Seç',
        description:
          'Eylem düğmesine tek bir işlev yerine 6-8 adet kestirmeden oluşan bir klasör bağlayarak tek tuşla açılan özel komut menüsü oluşturabilirsiniz.'
      }
    ]
  },
  {
    id: 'iphone-16-pro',
    brandId: 'apple',
    name: 'iPhone 16 Pro',
    series: 'iPhone 16 Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Kompakt Amiral',
    summary:
      'Pro Max ile birebir aynı kamera sistemi ve A18 Pro işlemciyi daha taşınabilir 6.3 inçlik titanyum gövdede sunan profesyonel model.',
    highlightSpec: '6.3" LTPO OLED · A18 Pro · 5x Tetraprizma · 199 g',
    specs: {
      display: {
        size: '6.3 inç',
        panel: 'Super Retina XDR LTPO OLED',
        resolution: '2622 x 1206 piksel (460 ppi)',
        refreshRate: '1–120 Hz ProMotion',
        peakBrightness: '2000 nit (Dış mekan), 1 nit minimum',
        protection: 'Yeni Nesil Ceramic Shield'
      },
      performance: {
        chipset: 'Apple A18 Pro',
        cpu: '6 Çekirdek (2 Performans + 4 Verimlilik)',
        gpu: '6 Çekirdek Apple GPU',
        processNode: '3 nm (TSMC N3E)'
      },
      memory: {
        ram: '8 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB / 1 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP Fusion, f/1.78, OIS',
        ultrawide: '48 MP, f/2.2, 120°, Makro',
        telephoto: '12 MP 5x Tetraprizma, f/2.8, 120 mm',
        front: '12 MP TrueDepth, f/1.9, Otofokus',
        video: '4K 120 fps Dolby Vision, ProRes Log'
      },
      battery: {
        capacity: '3582 mAh',
        wiredCharging: 'USB-C PD (30 dk %50)',
        wirelessCharging: '25W MagSafe / 15W Qi2',
        reverseCharging: '4.5W Kablolu USB-C'
      },
      buildAndConnectivity: {
        dimensions: '149.6 x 71.5 x 8.25 mm',
        weight: '199 g',
        materials: 'Grade 5 Titanyum çerçeve, mat cam arka yüzey',
        waterResistance: 'IP68 (6m / 30 dk)',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB 2',
        audioAndExtras: 'USB 3 (10 Gbps), LiDAR, Kamera Denetimi'
      },
      software: {
        osAtLaunch: 'iOS 18',
        updatePolicy: '6–7 yıl büyük iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: '16p-prores-ssd',
        title: 'Harici SSD’ye Doğrudan 4K 120fps ProRes Log Kayıt',
        category: 'Kamera',
        howToAccess: 'Ayarlar > Kamera > Biçimler > Apple ProRes > Log',
        description:
          '256 GB altı modellerde bile USB-C portuna hızlı bir SSD takıldığında dahili hafızayı doldurmadan doğrudan diske 4K 120fps ProRes Log video kaydeder.'
      },
      {
        id: '16p-photographic-styles-post',
        title: 'Çekimden Sonra Fotoğrafik Stil ve Renk Tonu Değiştirme',
        category: 'Kamera',
        howToAccess: 'Fotoğraflar > Düzenle > Stiller simgesi',
        description:
          'Filtrelerden farklı olarak cilt tonlarını bozmadan gölge, kontrast ve renk sıcaklığını ham sensör verisi üzerinden geri dönüşümlü düzenler.'
      }
    ]
  },
  {
    id: 'iphone-16',
    brandId: 'apple',
    name: 'iPhone 16',
    series: 'iPhone 16 Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'A18 işlemcisi, Eylem Düğmesi, Kamera Denetimi ve dikey lens dizilimiyle Apple Intelligence ve uzamsal video kaydı sunan ana seri model.',
    highlightSpec: '6.1" OLED · A18 · 48 MP Fusion · Eylem Düğmesi',
    specs: {
      display: {
        size: '6.1 inç',
        panel: 'Super Retina XDR OLED',
        resolution: '2556 x 1179 piksel (460 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '2000 nit (Dış mekan), 1 nit minimum',
        protection: 'Yeni Nesil Ceramic Shield'
      },
      performance: {
        chipset: 'Apple A18',
        cpu: '6 Çekirdek (2 Performans + 4 Verimlilik)',
        gpu: '5 Çekirdek Apple GPU',
        processNode: '3 nm'
      },
      memory: {
        ram: '8 GB LPDDR5X',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP Fusion, f/1.6, 2x Optik kalitede yakınlaştırma',
        ultrawide: '12 MP, f/2.2, Otofokus & Makro çekim',
        telephoto: 'Yok (2x sensör kırpma)',
        front: '12 MP TrueDepth, f/1.9',
        video: '4K 60 fps Dolby Vision, Uzamsal Video (1080p)'
      },
      battery: {
        capacity: '3561 mAh',
        wiredCharging: 'USB-C PD (30 dk %50)',
        wirelessCharging: '25W MagSafe / 15W Qi2',
        reverseCharging: '4.5W Kablolu USB-C'
      },
      buildAndConnectivity: {
        dimensions: '147.6 x 71.6 x 7.80 mm',
        weight: '170 g',
        materials: 'Havacılık sınıfı alüminyum, renkli cam arka yüzey',
        waterResistance: 'IP68 (6m / 30 dk)',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB 2',
        audioAndExtras: 'USB 2.0 (480 Mbps), Eylem Düğmesi, Kamera Denetimi'
      },
      software: {
        osAtLaunch: 'iOS 18',
        updatePolicy: '6+ yıl büyük iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: '16-macro-auto',
        title: 'Otomatik Makro Geçiş Kontrolü',
        category: 'Kamera',
        howToAccess: 'Ayarlar > Kamera > Makro Denetimi',
        description:
          'Nesneye 2 cm yaklaşıldığında ultra geniş lensin otomatik makroya geçmesini manuel lale simgesiyle kontrol altına alabilirsiniz.'
      },
      {
        id: '16-spatial-photo',
        title: '3D Uzamsal Fotoğraf ve Video Çekimi',
        category: 'Kamera',
        howToAccess: 'Kamera > Uzamsal (Spatial) Modu',
        description:
          'Dikey olarak hizalanan iki lensi aynı anda kullanarak derinlik bilgili 3 boyutlu fotoğraf ve video kaydeder.'
      }
    ]
  },
  {
    id: 'iphone-15-pro-max',
    brandId: 'apple',
    name: 'iPhone 15 Pro Max',
    series: 'iPhone 15 Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Apple’ın ilk USB-C (10 Gbps) ve titanyum kasalı amiral gemisi; A17 Pro ile konsol oyunlarını yerel çalıştırabilen ve 5x Tetraprizma lensi ilk kez sunan model.',
    highlightSpec: '6.7" ProMotion · A17 Pro · 5x Optik · USB 3.2 Gen 2',
    specs: {
      display: {
        size: '6.7 inç',
        panel: 'Super Retina XDR LTPO OLED',
        resolution: '2796 x 1290 piksel (460 ppi)',
        refreshRate: '1–120 Hz ProMotion',
        peakBrightness: '2000 nit',
        protection: 'Ceramic Shield'
      },
      performance: {
        chipset: 'Apple A17 Pro',
        cpu: '6 Çekirdek',
        gpu: '6 Çekirdek (Mesh Shading & Ray Tracing)',
        processNode: '3 nm (TSMC N3B)'
      },
      memory: {
        ram: '8 GB LPDDR5',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'NVMe',
        expandable: 'Yok'
      },
      camera: {
        main: '48 MP, f/1.78, sensör kaydırmalı OIS',
        ultrawide: '12 MP, f/2.2, Makro',
        telephoto: '12 MP 5x Tetraprizma, f/2.8',
        front: '12 MP TrueDepth, f/1.9',
        video: '4K 60 fps Dolby Vision, ACES ProRes Log'
      },
      battery: {
        capacity: '4441 mAh',
        wiredCharging: '27W USB-C PD',
        wirelessCharging: '15W MagSafe / Qi2',
        reverseCharging: '4.5W Kablolu (Apple Watch/AirPods şarjı)'
      },
      buildAndConnectivity: {
        dimensions: '159.9 x 76.7 x 8.25 mm',
        weight: '221 g',
        materials: 'Grade 5 Titanyum çerçeve',
        waterResistance: 'IP68 (6m)',
        connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, Thread',
        audioAndExtras: 'USB 3.2 Gen 2 (10 Gbps), Eylem Düğmesi, LiDAR'
      },
      software: {
        osAtLaunch: 'iOS 17 (iOS 18 uyumlu)',
        updatePolicy: '6 yıl iOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: '15pm-focal-lengths',
        title: 'Varsayılan Ana Kamera Odak Uzaklığını Seçme (24 / 28 / 35 mm)',
        category: 'Kamera',
        howToAccess: 'Ayarlar > Kamera > Ana Kamera',
        description:
          '48 MP sensör kırpma teknolojisiyle ana kameranın varsayılan açısını klasik sokak fotoğrafçılığı odakları olan 28 mm veya 35 mm olarak sabitleyebilirsiniz.'
      },
      {
        id: '15pm-reverse-charge',
        title: 'Başka Bir iPhone veya AirPods’u Kabloyla Şarj Etme',
        category: 'Batarya',
        howToAccess: 'USB-C to USB-C / Lightning kablo bağlantısı',
        description:
          'İki iPhone birbirine bağlandığında pili daha yüksek olan cihaz otomatik olarak diğerine 4.5W güç aktarır.'
      }
    ]
  },

  // ================= SAMSUNG =================
  {
    id: 'galaxy-s25-ultra',
    brandId: 'samsung',
    name: 'Samsung Galaxy S25 Ultra',
    series: 'Galaxy S Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      'Snapdragon 8 Elite for Galaxy, yuvarlatılmış titanyum çerçeve, 50 MP yeni ultra geniş kamera, Gorilla Armor 2 yansımasız cam ve dahili S Pen ile Samsung’un zirve modeli.',
    highlightSpec: '6.9" Dynamic AMOLED 2X · SD 8 Elite · 200 MP + 50 MP UW · S Pen',
    specs: {
      display: {
        size: '6.9 inç',
        panel: 'Dynamic LTPO AMOLED 2X (Yansıma Önleyici)',
        resolution: '3120 x 1440 piksel (QHD+)',
        refreshRate: '1–120 Hz adaptif',
        peakBrightness: '2600 nit',
        protection: 'Corning Gorilla Armor 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite for Galaxy',
        cpu: '8 Çekirdek Oryon (4.47 GHz tepe hız)',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '200 MP, f/1.7, Çok Yönlü PDAF, OIS',
        ultrawide: '50 MP, f/1.9, Süper Makro',
        telephoto: '10 MP 3x Optik + 50 MP 5x Periskop (10x optik kalite)',
        front: '12 MP, f/2.2, Dual Pixel PDAF',
        video: '8K 30fps, 4K 120fps, 10-bit Galaxy Log video'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '45W Süper Hızlı Şarj 2.0 (30 dk %65)',
        wirelessCharging: '15W / Qi2 Ready (Manyetik kılıf ile)',
        reverseCharging: '4.5W Kablosuz Güç Paylaşımı'
      },
      buildAndConnectivity: {
        dimensions: '162.8 x 77.6 x 8.2 mm',
        weight: '218 g',
        materials: 'Grade 5 Titanyum çerçeve, Gorilla Armor 2 ön/arka',
        waterResistance: 'IP68 (1.5m / 30 dk)',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, UWB',
        audioAndExtras: 'Dahili S Pen, Ultrasonik parmak izi, Samsung DeX'
      },
      software: {
        osAtLaunch: 'Android 15 / One UI 7',
        updatePolicy: '7 yıl işletim sistemi ve güvenlik güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 's25u-galaxy-log',
        title: 'Profesyonel 10-bit Galaxy Log Video ve Pozlama Zebrası',
        category: 'Kamera',
        howToAccess: 'Kamera > Pro Video > Sağ üst Log simgesi',
        description:
          'Renk derecelendirme (Color Grading) için yüksek dinamik aralıklı düz (Log) profilde video çeker; LUT önizlemesi ve pozlama uyarısı sunar.'
      },
      {
        id: 's25u-audio-eraser',
        title: 'Now Brief ve Çok Kanallı Yapay Zeka Ses Silgisi',
        category: 'Kamera',
        howToAccess: 'Galeri > Video > Galaxy AI simgesi > Ses Silgisi',
        description:
          'Videodaki rüzgar, insan sesi, müzik ve kalabalık katmanlarını ayrı kaydırıcılarla kısıp yükseltebilirsiniz.'
      },
      {
        id: 's25u-screen-off-memo',
        title: 'Ekran Kapalıyken S Pen ile Anında Not Alma',
        category: 'Verimlilik',
        howToAccess: 'Kilitli ekranda S Pen’i çıkarıp doğrudan ekrana yazın',
        description:
          'Telefonu açmadan siyah AMOLED ekrana siyah/beyaz not alıp Her Zaman Açık Ekrana (AOD) iğneleyebilirsiniz.'
      }
    ]
  },
  {
    id: 'galaxy-s24-ultra',
    brandId: 'samsung',
    name: 'Samsung Galaxy S24 Ultra',
    series: 'Galaxy S Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Bluetooth destekli S Pen’i, düz yansımasız Gorilla Armor ekranı ve 50 MP 5x periskop kamerasıyla ikonik Galaxy AI amiral gemisi.',
    highlightSpec: '6.8" QHD+ · SD 8 Gen 3 · Bluetooth S Pen · 200 MP',
    specs: {
      display: {
        size: '6.8 inç',
        panel: 'Dynamic LTPO AMOLED 2X',
        resolution: '3120 x 1440 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '2600 nit',
        protection: 'Corning Gorilla Armor (%75 yansıma azaltma)'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy',
        cpu: '8 Çekirdek (3.39 GHz)',
        gpu: 'Adreno 750',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '200 MP, f/1.7, OIS',
        ultrawide: '12 MP, f/2.2, Dual Pixel',
        telephoto: '10 MP 3x + 50 MP 5x Periskop (100x Space Zoom)',
        front: '12 MP, f/2.2',
        video: '8K 30fps, 4K 120fps (Pro Video)'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '45W Süper Hızlı Şarj 2.0',
        wirelessCharging: '15W Kablosuz',
        reverseCharging: '4.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '162.3 x 79.0 x 8.6 mm',
        weight: '232 g',
        materials: 'Titanyum çerçeve, Gorilla Armor cam',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB',
        audioAndExtras: 'Bluetooth S Pen (Uzaktan Kumanda), Samsung DeX'
      },
      software: {
        osAtLaunch: 'Android 14 / One UI 6.1 (One UI 7 güncellemesi aldı)',
        updatePolicy: '7 yıl güncelleme garantisi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 's24u-spen-shutter',
        title: 'S Pen ile Uzaktan Fotoğraf Çekme ve Hava Hareketleri (Air Actions)',
        category: 'Kamera',
        howToAccess: 'Ayarlar > Gelişmiş Özellikler > S Pen > Temassız İşlemler',
        description:
          'S24 Ultra’daki Bluetooth destekli S Pen’in düğmesine basarak 10 metre uzaktan fotoğraf çekebilir, kalemi havada sallayarak ön/arka kamera veya zoom değiştirebilirsiniz.'
      },
      {
        id: 's24u-instant-slowmo',
        title: 'Herhangi Bir Videoyu Basılı Tutarak Ağır Çekime Dönüştürme',
        category: 'Kamera',
        howToAccess: 'Galeri > Video oynatılırken ekrana parmakla basılı tut',
        description:
          'Normal 30/60fps çekilmiş videolarda bile ekrana basılı tuttuğunuz anda yapay zeka ara kare üreterek anlık ağır çekim uygular.'
      }
    ]
  },
  {
    id: 'galaxy-z-fold6',
    brandId: 'samsung',
    name: 'Samsung Galaxy Z Fold6',
    series: 'Galaxy Z Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Katlanabilir',
    summary:
      '239 gramlık ince zırhlı alüminyum gövdede 7.6 inç tablet deneyimi, IP48 toz/su koruması ve çoklu pencere üretkenliği sunan katlanabilir amiral gemisi.',
    highlightSpec: '7.6" Katlanır + 6.3" Kapak · SD 8 Gen 3 · IP48 · 239 g',
    specs: {
      display: {
        size: '7.6 inç (İç) + 6.3 inç (Kapak)',
        panel: 'Dynamic LTPO AMOLED 2X',
        resolution: '2160 x 1856 (İç) / 2376 x 968 (Kapak)',
        refreshRate: '1–120 Hz (Her iki ekran)',
        peakBrightness: '2600 nit',
        protection: 'Gorilla Glass Victus 2 (Kapak)'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 750',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB LPDDR5X',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.8, OIS',
        ultrawide: '12 MP, f/2.2',
        telephoto: '10 MP 3x Optik, OIS',
        front: '10 MP (Kapak) + 4 MP Ekran Altı (İç)',
        video: '8K 30fps, 4K 60fps'
      },
      battery: {
        capacity: '4400 mAh',
        wiredCharging: '25W Kablolu',
        wirelessCharging: '15W Kablosuz',
        reverseCharging: '4.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '153.5 x 132.6 x 5.6 mm (Açık) / 12.1 mm (Katlı)',
        weight: '239 g',
        materials: 'Gelişmiş Armor Aluminum çerçeve, FlexHinge menteşe',
        waterResistance: 'IP48 (Toz ve suya dayanıklı)',
        connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, UWB',
        audioAndExtras: 'S Pen Fold Edition desteği, Samsung DeX'
      },
      software: {
        osAtLaunch: 'Android 14 / One UI 6.1.1',
        updatePolicy: '7 yıl güncelleme desteği'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'zfold6-flex-touchpad',
        title: 'Flex Modu Dokunmatik Yüzey (Laptop Trackpad)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Gelişmiş Özellikler > Labs > Flex Modu Paneli',
        description:
          'Cihazı 90 derece L şeklinde katladığınızda alt yarıyı fare imleçli bir laptop touchpad’ine ve parlaklık/ses kontrol paneline dönüştürür.'
      },
      {
        id: 'zfold6-rear-selfie',
        title: 'Kapak Ekranı Önizlemeli 50 MP Ana Kamera Selfie Çekimi',
        category: 'Kamera',
        howToAccess: 'Kamera > Sol üst Kapak Ekranı Önizlemesi > Telefonu aç',
        description:
          'Telefon açıkken dış ekranı ayna gibi kullanarak çok daha yüksek kaliteli 50 MP arka kamerayla selfie çekmenizi sağlar.'
      }
    ]
  },
  {
    id: 'galaxy-a55',
    brandId: 'samsung',
    name: 'Samsung Galaxy A55 5G',
    series: 'Galaxy A Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      'Fırçalanmış alüminyum çerçeve, Knox Vault donanım güvenlik çipi, microSD kart yuvası ve OIS’li 50 MP kamerasıyla orta-üst segmentin en popüler modeli.',
    highlightSpec: '6.6" 120Hz AMOLED · Exynos 1480 · microSD · Alüminyum Çerçeve',
    specs: {
      display: {
        size: '6.6 inç',
        panel: 'Super AMOLED',
        resolution: '2340 x 1080 piksel (FHD+)',
        refreshRate: '60 / 120 Hz',
        peakBrightness: '1000 nit (HBM)',
        protection: 'Corning Gorilla Glass Victus+'
      },
      performance: {
        chipset: 'Samsung Exynos 1480',
        cpu: '8 Çekirdek (4x Cortex-A78 + 4x A55)',
        gpu: 'Xclipse 530 (AMD RDNA 2 tabanlı)',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 3.1',
        expandable: 'microSDXC (1 TB’a kadar, hibrit SIM)'
      },
      camera: {
        main: '50 MP, f/1.8, OIS',
        ultrawide: '12 MP, f/2.2, 123°',
        telephoto: '5 MP Makro',
        front: '32 MP, f/2.2',
        video: '4K 30fps (Ön ve Arka kamera)'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '25W Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '161.1 x 77.4 x 8.2 mm',
        weight: '213 g',
        materials: 'Alüminyum çerçeve, Gorilla Glass arka cam',
        waterResistance: 'IP67 (1m / 30 dk)',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, eSIM, NFC',
        audioAndExtras: 'Stereo hoparlör, Knox Vault çipi, microSD yuvası'
      },
      software: {
        osAtLaunch: 'Android 14 / One UI 6.1',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'a55-dual-recording',
        title: 'Aynı Anda Ön ve Arka Kamera Kaydı (Dual Recording)',
        category: 'Kamera',
        howToAccess: 'Kamera > Daha Fazla > Çift Kayıt',
        description:
          'Vlog çekerken aynı anda hem 50 MP arka kamerayı hem 32 MP ön kamerayı ayrı pencerelerde veya bölünmüş ekranda kaydeder.'
      },
      {
        id: 'a55-ram-plus-toggle',
        title: 'Sanal RAM (RAM Plus) Kapatma ile Performans Artışı',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Cihaz Bakımı > Bellek > RAM Plus',
        description:
          'Depolamayı sanal RAM olarak kullanmak istemiyorsanız RAM Plus’ı tamamen kapatarak UFS okuma-yazma yükünü azaltıp sistem akıcılığını artırabilirsiniz.'
      }
    ]
  },

  // ================= XIAOMI / REDMI / POCO =================
  {
    id: 'xiaomi-15-ultra',
    brandId: 'xiaomi',
    name: 'Xiaomi 15 Ultra',
    series: 'Xiaomi Amiral Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Amiral Gemisi',
    summary:
      '1 inçlik Sony LYT-900 ana sensör, 200 MP Leica APO periskop telefoto, 5410 mAh silikon-karbon pil ve Snapdragon 8 Elite ile kamera odaklı amiral gemisi.',
    highlightSpec: '6.73" 2K AMOLED · SD 8 Elite · 1" Ana + 200 MP Periskop · 90W/80W',
    specs: {
      display: {
        size: '6.73 inç',
        panel: 'LTPO AMOLED (Mikro Kavisli)',
        resolution: '3200 x 1440 piksel (522 ppi)',
        refreshRate: '1–120 Hz',
        peakBrightness: '3200 nit',
        protection: 'Xiaomi Shield Glass 2.0'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite',
        cpu: '8 Çekirdek Oryon (4.32 GHz)',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '512 GB / 1 TB',
        storageType: 'UFS 4.1',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP 1-inç Sony LYT-900, f/1.63, OIS',
        ultrawide: '50 MP Samsung JN5, f/2.2, 5 cm Makro',
        telephoto: '50 MP 3x Yüzen Telefoto + 200 MP 4.3x (100mm) Leica APO Periskop',
        front: '32 MP, f/2.0',
        video: '8K 30fps, 4K 120fps, 10-bit ACES Log',
        opticsNote: 'Leica Summilux optik & harici Photography Kit kabza desteği'
      },
      battery: {
        capacity: '5410 mAh (Küresel) / 6000 mAh (Çin)',
        wiredCharging: '90W HyperCharge',
        wirelessCharging: '80W Kablosuz HyperCharge',
        reverseCharging: '10W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '161.3 x 75.3 x 9.35 mm',
        weight: '226 g',
        materials: 'CNC alüminyum çerçeve, cam elyaf / vegan deri',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 6.0, IR Kızılötesi',
        audioAndExtras: 'Ultrasonik parmak izi, USB 3.2 Gen 2, 4 mikrofon'
      },
      software: {
        osAtLaunch: 'Android 15 / HyperOS 2',
        updatePolicy: '4 yıl Android + 6 yıl güvenlik güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'x15u-fastshot',
        title: 'Leica Sokak Fotoğrafçılığı Hızlı Çekim Modu (0.6 sn Hiper Odak)',
        category: 'Kamera',
        howToAccess: 'Kamera > Sokak Fotoğrafçılığı (Fastshot)',
        description:
          'Ekran kapalıyken ses kısma tuşuna çift basarak 0.6 saniyede kamerayı açıp önceden tanımlı hiper-fokal mesafede (0.6m, 1.2m, 3m, 5m) netleme beklemeden fotoğraf çeker.'
      },
      {
        id: 'x15u-16bit-raw',
        title: 'UltraRAW 16-bit DNG + Leica Renk Profilleri',
        category: 'Kamera',
        howToAccess: 'Kamera > Pro > Sağ üst RAW > UltraRAW',
        description:
          'Çok kareli birleştirme yapılmış 16-bit doğrusal DNG ham dosyası üreterek Adobe Lightroom düzenlemelerinde olağanüstü gölge/parlaklık kurtarma payı verir.'
      }
    ]
  },
  {
    id: 'xiaomi-14-ultra',
    brandId: 'xiaomi',
    name: 'Xiaomi 14 Ultra',
    series: 'Xiaomi Amiral Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Kademesiz fiziksel değişken diyafram (f/1.63–f/4.0), 1 inç LYT-900 sensör ve çift telefoto lensiyle mobil fotoğrafçılığın mihenk taşlarından biri.',
    highlightSpec: '6.73" 2K LTPO · SD 8 Gen 3 · f/1.63–f/4.0 Değişken Diyafram',
    specs: {
      display: {
        size: '6.73 inç',
        panel: 'LTPO AMOLED',
        resolution: '3200 x 1440 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '3000 nit',
        protection: 'Xiaomi Shield Glass'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 750',
        processNode: '4 nm'
      },
      memory: {
        ram: '16 GB LPDDR5X',
        storage: '512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP 1-inç LYT-900, f/1.63–f/4.0 Kademesiz Fiziksel Diyafram',
        ultrawide: '50 MP, f/1.8, 5 cm Makro',
        telephoto: '50 MP 3.2x Yüzen Telefoto + 50 MP 5x Periskop',
        front: '32 MP, f/2.0',
        video: '8K 30fps, 4K 120fps, 10-bit Log'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '90W HyperCharge',
        wirelessCharging: '80W Kablosuz',
        reverseCharging: '10W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '161.4 x 75.3 x 9.2 mm',
        weight: '220 g',
        materials: 'Alüminyum çerçeve, nano-tech vegan deri',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, IR Verici',
        audioAndExtras: 'USB 3.2 Gen 2, Stereo hoparlör'
      },
      software: {
        osAtLaunch: 'Android 14 / HyperOS',
        updatePolicy: '4 yıl Android + 5 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'x14u-starburst-aperture',
        title: 'Fiziksel f/4.0 Diyafram ile Doğal Işık Yıldızı Efekti (Starburst)',
        category: 'Kamera',
        howToAccess: 'Kamera > Pro > F (Diyafram) > f/4.0 seçin',
        description:
          'Gerçek 6 yapraklı mekanik diyafram bıçaklarını f/4.0’a kısarak gece sokak lambalarında yapay filtre olmadan gerçek optik 6 köşeli ışık yıldızları oluşturur.'
      }
    ]
  },
  {
    id: 'redmi-note-14-pro-plus',
    brandId: 'xiaomi',
    name: 'Redmi Note 14 Pro+ 5G',
    series: 'Redmi Note Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Orta-Üst Segment',
    summary:
      '200 MP OIS kamera, IP68/IP69 yüksek basınçlı su dayanıklılığı ve 120W ultra hızlı şarjı orta-üst segmente taşıyan çok satan model.',
    highlightSpec: '6.67" 1.5K AMOLED · SD 7s Gen 3 · 200 MP · 120W · IP68',
    specs: {
      display: {
        size: '6.67 inç',
        panel: 'Kavisli AMOLED (Dolby Vision)',
        resolution: '2712 x 1220 piksel (1.5K)',
        refreshRate: '120 Hz',
        peakBrightness: '3000 nit',
        protection: 'Corning Gorilla Glass Victus 2'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 7s Gen 3',
        cpu: '8 Çekirdek (2.5 GHz)',
        gpu: 'Adreno 810',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB LPDDR4X/5',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 2.2 / UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '200 MP, f/1.65, OIS, 4x Kayıpsız Sensör Zoom',
        ultrawide: '8 MP, f/2.2',
        telephoto: '2 MP Makro',
        front: '20 MP, f/2.2',
        video: '4K 30fps, 1080p 60fps'
      },
      battery: {
        capacity: '5110 mAh',
        wiredCharging: '120W HyperCharge (19 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '162.5 x 74.7 x 8.8 mm',
        weight: '210 g',
        materials: 'Polikarbonat/Alüminyum iç iskelet, Gorilla Glass veya vegan deri',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 6E, Bluetooth 5.4, IR Verici, NFC',
        audioAndExtras: 'Dolby Atmos Stereo hoparlör, Islak dokunmatik kontrol'
      },
      software: {
        osAtLaunch: 'Android 14 / HyperOS',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'rn14pp-boost-charge',
        title: '120W Maksimum Şarj Hızını Açma (Boost Charging)',
        category: 'Batarya',
        howToAccess: 'Ayarlar > Pil > Şarj Seçenekleri > Şarj Hızını Artır',
        description:
          'Güvenlik amacıyla varsayılan olarak biraz daha düşük tutulan şarj akımını açarak bataryanın 19 dakika gibi rekor sürede tam dolmasını sağlar.'
      }
    ]
  },
  {
    id: 'poco-x7-pro',
    brandId: 'xiaomi',
    name: 'POCO X7 Pro',
    series: 'POCO X Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Oyun',
    summary:
      'Dimensity 8400-Ultra tam büyük çekirdekli işlemci, 6000 mAh dev silikon-karbon pil ve WildBoost 3.0 oyun optimizasyonuyla performans odaklı model.',
    highlightSpec: '6.67" 1.5K 120Hz · Dimensity 8400-Ultra · 6000 mAh · 90W',
    specs: {
      display: {
        size: '6.67 inç',
        panel: 'CrystalRes 1.5K AMOLED',
        resolution: '2712 x 1220 piksel',
        refreshRate: '120 Hz (2560 Hz anlık dokunma)',
        peakBrightness: '3200 nit',
        protection: 'Corning Gorilla Glass 7i'
      },
      performance: {
        chipset: 'MediaTek Dimensity 8400-Ultra',
        cpu: '8x Cortex-A725 (Tam Büyük Çekirdek)',
        gpu: 'Mali-G720 MC7',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB LPDDR5X',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 4.0',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP Sony IMX882, f/1.5, OIS',
        ultrawide: '8 MP, f/2.2',
        telephoto: 'Yok',
        front: '20 MP',
        video: '4K 60fps'
      },
      battery: {
        capacity: '6000 mAh',
        wiredCharging: '90W HyperCharge (42 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '160.8 x 75.2 x 8.29 mm',
        weight: '195 g',
        materials: 'Plastik / Vegan deri arka seçenekli',
        waterResistance: 'IP68',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, IR Verici, Çift Frekans GPS',
        audioAndExtras: 'LiquidCool 4.0 buhar odası, Stereo hoparlör'
      },
      software: {
        osAtLaunch: 'Android 15 / HyperOS 2',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'pocox7p-wildboost',
        title: 'Game Turbo WildBoost Çözünürlük ve Dokunma İnce Ayarı',
        category: 'Geliştirici',
        howToAccess: 'Oyun içinde sol üstten kaydır > Game Turbo > Performans > Ek Ayarlar',
        description:
          'Her oyun için dokunmatik tepki hassasiyetini, kenar yanlış dokunma korumasını ve 1.5K süper çözünürlük ölçeklemesini ayrı ayrı kalibre edebilirsiniz.'
      }
    ]
  },

  // ================= HUAWEI =================
  {
    id: 'huawei-pura-70-ultra',
    brandId: 'huawei',
    name: 'Huawei Pura 70 Ultra',
    series: 'Pura Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Amiral Gemisi',
    summary:
      'Gövdeden mekanik olarak dışarı çıkan geri çekilebilir 1 inç kamera lensi, f/1.6–f/4.0 değişken diyafram ve 300 km/s hızdaki nesneleri donduran XD Motion motoruyla dikkat çeker.',
    highlightSpec: '6.8" LTPO OLED · Geri Çekilebilir 1" Lens · f/1.6–f/4.0 · 100W/80W',
    specs: {
      display: {
        size: '6.8 inç',
        panel: 'LTPO OLED',
        resolution: '2844 x 1260 piksel',
        refreshRate: '1–120 Hz',
        peakBrightness: '2500 nit',
        protection: 'Crystal Armour Kunlun Glass'
      },
      performance: {
        chipset: 'Kirin 9010',
        cpu: '8 Çekirdek (12 İzlek)',
        gpu: 'Maleoon 910',
        processNode: '7 nm'
      },
      memory: {
        ram: '16 GB',
        storage: '512 GB / 1 TB',
        storageType: 'UFS',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP 1-inç Mekanik Açılır Lens, f/1.6–f/4.0, Sensör Kaydırmalı OIS',
        ultrawide: '40 MP, f/2.2',
        telephoto: '50 MP 3.5x Tele-Makro Periskop, f/2.1, OIS (5 cm makro)',
        front: '13 MP Ultra Geniş, Otofokus',
        video: '4K 60fps HDR Vivid',
        opticsNote: '300.000 kez açılıp kapanmaya dayanıklı motorize lens mekanizması'
      },
      battery: {
        capacity: '5200 mAh',
        wiredCharging: '100W SuperCharge',
        wirelessCharging: '80W Kablosuz SuperCharge',
        reverseCharging: '20W Ters Kablosuz + 18W Ters Kablolu'
      },
      buildAndConnectivity: {
        dimensions: '162.6 x 75.1 x 8.4 mm',
        weight: '226 g',
        materials: 'Alüminyum çerçeve, yıldız desenli vegan deri',
        waterResistance: 'IP68',
        connectivity: 'Wi-Fi 6, Bluetooth 5.2, IR Kızılötesi, NFC',
        audioAndExtras: 'USB 3.1 Gen 1, Stereo hoparlör'
      },
      software: {
        osAtLaunch: 'EMUI 14.2 (Küresel) / HarmonyOS 4.2 (Çin)',
        updatePolicy: 'Düzenli EMUI & güvenlik yamaları'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'pura70u-snapshot',
        title: 'Ultra Hızlı Anlık Çekim (300 km/s Hareket Dondurma)',
        category: 'Kamera',
        howToAccess: 'Kamera > Anlık Çekim (Snapshot) Modu',
        description:
          'Mekanik geri çekilebilir 1 inç sensör ve çift pozlama motoru sayesinde yarış arabası veya sıçrayan su damlalarını bulanıklık olmadan dondurur.'
      },
      {
        id: 'pura70u-lens-protection',
        title: 'Düşme Algılayınca Lensi Otomatik İçeri Çekme',
        category: 'Güvenlik',
        howToAccess: 'Otomatik ivmeölçer koruması',
        description:
          'Telefon elinizden kayıp serbest düşüşe geçtiğinde ivmeölçer bunu milisaniyede algılar ve açık olan kamera lensini yere çarpmadan yuvasına geri çeker.'
      }
    ]
  },
  {
    id: 'huawei-mate-xt',
    brandId: 'huawei',
    name: 'Huawei Mate XT Ultimate Design',
    series: 'Mate Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Katlanabilir',
    summary:
      'Dünyanın ilk ticari üç katlı (tri-fold) telefonu; tek ekrandan çift ekrana ve tamamen açıldığında 10.2 inç 3K tablete dönüşen mühendislik harikası.',
    highlightSpec: '10.2" Üç Katlı OLED · 3.6 mm İncelik · 5600 mAh · f/1.4–f/4.0',
    specs: {
      display: {
        size: '6.4" (Tek) / 7.9" (Çift) / 10.2" (Tam Açık)',
        panel: 'Üç Katlı LTPO OLED',
        resolution: '2232 x 3184 piksel (Tam açık)',
        refreshRate: '90 Hz / 120 Hz',
        peakBrightness: '1800 nit',
        protection: 'Kompozit ultra ince esnek cam'
      },
      performance: {
        chipset: 'Kirin 9010',
        cpu: '8 Çekirdek',
        gpu: 'Maleoon 910',
        processNode: '7 nm'
      },
      memory: {
        ram: '16 GB',
        storage: '256 GB / 512 GB / 1 TB',
        storageType: 'UFS',
        expandable: 'Yok'
      },
      camera: {
        main: '50 MP, f/1.4–f/4.0 Değişken Diyafram, OIS',
        ultrawide: '12 MP, f/2.2',
        telephoto: '12 MP 5.5x Periskop, OIS',
        front: '8 MP, f/2.2',
        video: '4K 60fps'
      },
      battery: {
        capacity: '5600 mAh (1.9 mm ultra ince silikon-karbon)',
        wiredCharging: '66W SuperCharge',
        wirelessCharging: '50W Kablosuz',
        reverseCharging: '7.5W Ters Kablosuz'
      },
      buildAndConnectivity: {
        dimensions: '156.7 x 219.0 x 3.6–4.8 mm (Tam açık)',
        weight: '298 g',
        materials: 'Çift yönlü Tiangong menteşe, ultra ince vegan deri',
        waterResistance: 'Belirtilmemiş (Katlanır hassas menteşe)',
        connectivity: '5G (Çin), Wi-Fi 6, Bluetooth 5.2, IR Verici',
        audioAndExtras: 'Katlanır klavye desteği, 3 pencereli çoklu görev'
      },
      software: {
        osAtLaunch: 'HarmonyOS 4.2',
        updatePolicy: 'HarmonyOS Next yükseltme uyumlu'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'matext-tri-mode',
        title: 'Üç Form Faktörlü Dinamik Arayüz Geçişi',
        category: 'Verimlilik',
        howToAccess: 'Tek / Çift / Üçlü ekran katlama pozisyonu',
        description:
          'Sol kanadı katlayarak 7.9 inç klasik kitap katlanabilir formda, her iki kanadı açarak 10.2 inç tam masaüstü belge düzenleme modunda kullanabilirsiniz.'
      }
    ]
  }
];
