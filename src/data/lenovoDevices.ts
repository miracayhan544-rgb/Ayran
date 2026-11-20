import { PhoneModel } from '../types/phone';

export const LENOVO_DEVICES: PhoneModel[] = [
  // ========================
  // LENOVO TELEFON MODELLERİ
  // ========================
  {
    id: 'lenovo-legion-y90',
    brandId: 'lenovo',
    deviceType: 'phone',
    name: 'Lenovo Legion Y90',
    series: 'Legion Oyun Serisi',
    releaseYear: 2022,
    era: '2020-2024',
    segment: 'Oyun',
    summary:
      'Kasa içi çift aktif soğutma fanı, 6 adet omuz/ekran tetiği, RAID 0 UFS 3.1 + SSD hibrit depolaması ve çift USB-C portuyla yatay oyun odaklı efsane amiral gemisi.',
    highlightSpec: '6.92" 144Hz AMOLED · SD 8 Gen 1 · Çift Fan · 6 Tetik · 5600 mAh',
    specs: {
      display: {
        size: '6.92 inç',
        panel: 'Samsung E4 AMOLED',
        resolution: '2460 x 1080 piksel',
        refreshRate: '144 Hz (720 Hz dokunmatik)',
        peakBrightness: '1300 nit',
        protection: 'Gorilla Glass 5'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 1',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 730',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB / 16 GB / 18 GB LPDDR5',
        storage: '256 GB / 512 GB + 128 GB SSD (640 GB RAID 0)',
        storageType: 'UFS 3.1 + NVMe SSD Hibrit',
        expandable: 'Yok'
      },
      camera: {
        main: '64 MP, f/1.9',
        ultrawide: '13 MP 120°',
        telephoto: 'Yok',
        front: '16 MP (Üst çerçevede çentiksiz)',
        video: '8K 24fps / 4K 60fps'
      },
      battery: {
        capacity: '5600 mAh (Çift hücreli)',
        wiredCharging: '68W Hızlı Şarj (Çift USB-C)',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '177.0 x 78.4 x 10.1 mm',
        weight: '252 g',
        materials: 'Alüminyum çerçeve, RGB Legion logosu ve hava kanalı',
        waterResistance: 'Aktif hava fanı ızgaralı gövde',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.2, 2x USB-C (Yan+Alt DisplayPort)',
        audioAndExtras: 'Çift turbo soğutma fanı, 4 ultrasonik omuz tetiği + 2 basınç alanı'
      },
      software: {
        osAtLaunch: 'Android 12 / ZUI 13 (Legion OS)',
        updatePolicy: '2 yıl Android + 3 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'y90-raid0-ramdisk',
        title: 'Hibrit RAID 0 Depolama ve Sanal RAM Disk Oyun Hızlandırması',
        category: 'Geliştirici',
        howToAccess: 'Legion Realm > Performans Modu > Depolama ve Bellek Optimizasyonu',
        description:
          '18 GB RAM + UFS 3.1/SSD RAID 0 dizisi sayesinde yüksek boyutlu oyun haritalarını RAM üzerine önbelleğe alarak yükleme ekranlarını minimuma indirir.'
      }
    ]
  },
  {
    id: 'lenovo-legion-duel-2',
    brandId: 'lenovo',
    deviceType: 'phone',
    name: 'Lenovo Legion Phone Duel 2',
    series: 'Legion Oyun Serisi',
    releaseYear: 2021,
    era: '2020-2024',
    segment: 'Oyun',
    summary:
      'Orta bölümünde çift turbo fan, yan kenardan açılan motorlu 44 MP yayıncı kamerası ve toplam 8 adet programlanabilir tetik tuşuyla tasarlanmış benzersiz yatay oyuncu telefonu.',
    highlightSpec: '6.92" 144Hz AMOLED · SD 888 · Yan Pop-Up 44MP Kamera · Çift Fan · 90W',
    specs: {
      display: {
        size: '6.92 inç (Çentiksiz tam ekran)',
        panel: 'AMOLED HDR10+',
        resolution: '2460 x 1080 piksel',
        refreshRate: '144 Hz (720 Hz dokunmatik)',
        peakBrightness: '1300 nit',
        protection: 'Gorilla Glass 5'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 888 5G',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 660',
        processNode: '5 nm'
      },
      memory: {
        ram: '12 GB / 16 GB / 18 GB LPDDR5',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '64 MP, f/1.9',
        ultrawide: '16 MP 123°',
        telephoto: 'Yok',
        front: '44 MP Motorlu Yan Açılır Kamera (Otofokus)',
        video: '8K 24fps / 4K 60fps'
      },
      battery: {
        capacity: '5500 mAh (2 x 2750 mAh)',
        wiredCharging: '90W (İki USB-C aynı anda takılınca 30 dakikada %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '176.0 x 78.5 x 9.9 mm',
        weight: '259 g',
        materials: 'Ortada soğutma adası, yanlarda simetrik tutuş camı',
        waterResistance: 'Aktif fan kanallı tasarım',
        connectivity: '5G, Wi-Fi 6, Bluetooth 5.2, 2x USB-C',
        audioAndExtras: '8 sanal/ultrasonik tetik, Çift X-ekseni titreşim motoru'
      },
      software: {
        osAtLaunch: 'Android 11 / ZUI 12.5',
        updatePolicy: '2 yıl güncelleme'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'duel2-octa-trigger',
        title: 'Octa-Trigger (8 Tetik) ve Eğim Sensörü Haritalama',
        category: 'Verimlilik',
        howToAccess: 'Legion Realm > Oyun İçi Çekmece > Tuş Eşleme',
        description:
          '4 ultrasonik omuz tuşunu, arka kapaktaki 2 kapasitif dokunmatik alanı ve 2 basınçlı ekran bölgesini aynı anda FPS oyun kontrollerine atar.'
      }
    ]
  },
  {
    id: 'lenovo-z5-pro-gt',
    brandId: 'lenovo',
    deviceType: 'phone',
    name: 'Lenovo Z5 Pro GT',
    series: 'Z Serisi',
    releaseYear: 2019,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Snapdragon 855 işlemcisi ve 12 GB RAM seçeneğini dünyada ilk duyuran modellerden biri; manuel manyetik kızaklı mekanizmasıyla çentiksiz %95 ekran/gövde oranı sunmuştur.',
    highlightSpec: '6.39" Kızaklı Tam Ekran · İlk SD 855 · 12 GB RAM · Karbon Desen',
    specs: {
      display: {
        size: '6.39 inç',
        panel: 'Super AMOLED HDR10',
        resolution: '2340 x 1080 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '600 nit',
        protection: 'Gorilla Glass'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 855',
        cpu: '8 Çekirdek Kryo 485',
        gpu: 'Adreno 640',
        processNode: '7 nm'
      },
      memory: {
        ram: '6 GB / 8 GB / 12 GB LPDDR4X',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 2.1',
        expandable: 'Yok'
      },
      camera: {
        main: '16 MP Sony IMX519 + 24 MP IMX576',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '16 MP + 8 MP Kızaklı Çift Kamera + IR Yüz Tanıma',
        video: '4K 30fps'
      },
      battery: {
        capacity: '3350 mAh',
        wiredCharging: '18W Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '155.1 x 73.0 x 9.3 mm',
        weight: '210 g',
        materials: 'Karbon fiber dokulu arka cam ve alüminyum kızak',
        waterResistance: 'Yok',
        connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, NFC, USB-C',
        audioAndExtras: 'Ekran içi optik parmak izi, IR kızılötesi karanlıkta yüz kilidi'
      },
      software: {
        osAtLaunch: 'Android 9 Pie / ZUI 10',
        updatePolicy: 'Android 10'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'z5pro-slider-action',
        title: 'Manyetik Kızak Kaydırma Eylemi Özelleştirme',
        category: 'Sistem',
        howToAccess: 'Ayarlar > ZUI Özel İşlevler > Kızak Ayarları',
        description:
          'Ekranı aşağı kaydırdığınızda otomatik olarak kamera açma, gelen aramayı yanıtlama veya belirlediğiniz bir uygulamayı başlatma kısayolu atar.'
      }
    ]
  },
  {
    id: 'lenovo-p2',
    brandId: 'lenovo',
    deviceType: 'phone',
    name: 'Lenovo P2',
    series: 'P Serisi (Pil Efsanesi)',
    releaseYear: 2016,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      'Verimli Snapdragon 625 işlemci, Super AMOLED ekran ve 5100 mAh bataryayı birleştirerek 15+ saat ekran açık süresi sunan ve yan gövdesinde tek tuş pil tasarruf anahtarı bulunan efsane model.',
    highlightSpec: '5.5" Super AMOLED · 5100 mAh Batarya Kralı · Fiziksel Tasarruf Anahtarı',
    specs: {
      display: {
        size: '5.5 inç',
        panel: 'Super AMOLED',
        resolution: '1920 x 1080 piksel (401 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Gorilla Glass 3'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 625',
        cpu: '8 Çekirdek Cortex-A53',
        gpu: 'Adreno 506',
        processNode: '14 nm'
      },
      memory: {
        ram: '3 GB / 4 GB',
        storage: '32 GB / 64 GB',
        storageType: 'eMMC 5.1',
        expandable: 'microSDXC'
      },
      camera: {
        main: '13 MP Sony IMX258, f/2.0, PDAF',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '5100 mAh',
        wiredCharging: '24W Rapid Charge',
        wirelessCharging: 'Yok',
        reverseCharging: 'OTG Powerbank ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '153.0 x 76.0 x 8.3 mm',
        weight: '177 g',
        materials: 'Yekpare alüminyum metal gövde',
        waterResistance: 'Yok',
        connectivity: '4G LTE, Wi-Fi ac, Bluetooth 4.1, NFC, FM Radyo, 3.5 mm jak',
        audioAndExtras: 'Sol yanda fiziksel Ultimate Power Saver sürgüsü'
      },
      software: {
        osAtLaunch: 'Android 6.0 Marshmallow (Android 7.0 aldı)',
        updatePolicy: 'Android 7.0 Nougat'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'lenovo-p2-physical-switch',
        title: 'Sol Yan Fiziksel Sürgü ile Anında Ultra Pil Tasarrufu',
        category: 'Batarya',
        howToAccess: 'Sol kenardaki fiziksel anahtarı yukarı kaydırın',
        description:
          'Ekranı sade siyah-beyaz arayüze geçirir, yalnızca arama/SMS ve seçili birkaç uygulamayı açık bırakarak %10 pille bile günlerce bekleme süresi verir.'
      }
    ]
  },
  {
    id: 'lenovo-vibe-p1',
    brandId: 'lenovo',
    deviceType: 'phone',
    name: 'Lenovo Vibe P1',
    series: 'Vibe P Serisi',
    releaseYear: 2015,
    era: '2000-2019',
    segment: 'Klasik & Dönüm Noktası',
    summary:
      '5000 mAh bataryası, kutusundan çıkan OTG adaptörüyle başka telefonları şarj edebilmesi ve fiziksel güç tasarrufu anahtarıyla dönemin dayanıklılık öncüsü.',
    highlightSpec: '5.5" FHD IPS · 5000 mAh · OTG Powerbank Özelliği · Yan Güç Anahtarı',
    specs: {
      display: {
        size: '5.5 inç',
        panel: 'IPS LCD',
        resolution: '1920 x 1080 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '450 nit',
        protection: 'Gorilla Glass 3'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 615',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 405',
        processNode: '28 nm'
      },
      memory: {
        ram: '2 GB / 3 GB',
        storage: '32 GB',
        storageType: 'eMMC 4.5',
        expandable: 'microSD (128 GB)'
      },
      camera: {
        main: '13 MP PDAF, Çift LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '5000 mAh',
        wiredCharging: '24W Rocket Charge',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB OTG kablo ile başka cihazları şarj etme'
      },
      buildAndConnectivity: {
        dimensions: '152.9 x 75.6 x 9.9 mm',
        weight: '189 g',
        materials: 'Metal çerçeve ve alüminyum arka kapak',
        waterResistance: 'Yok',
        connectivity: '4G LTE, Wi-Fi ac, Bluetooth 4.1, NFC, FM Radyo, 3.5 mm jak',
        audioAndExtras: 'Önde parmak izi okuyucu, yanda fiziksel tasarruf anahtarı'
      },
      software: {
        osAtLaunch: 'Android 5.1 Lollipop / Vibe UI',
        updatePolicy: 'Android 6.0 Marshmallow'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'vibep1-otg-powerbank',
        title: 'OTG Kablo ile Başka Telefonları Şarj Etme (Powerbank Modu)',
        category: 'Batarya',
        howToAccess: 'MicroUSB OTG kablosunu takın > Bildirimden "Ters Şarj"ı seçin',
        description:
          '5000 mAh bataryasının enerjisini başka bir akıllı telefona, kablosuz kulaklığa veya USB ışığa aktarabilir.'
      }
    ]
  },

  // ======================
  // LENOVO TABLET MODELLERİ
  // ======================
  {
    id: 'lenovo-legion-tab-gen3',
    brandId: 'lenovo',
    deviceType: 'tablet',
    name: 'Lenovo Legion Tab (Gen 3 / Y700 2025)',
    series: 'Legion Tab Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Tablet',
    summary:
      '8.8 inç 2.5K 165 Hz ekranı, Snapdragon 8 Gen 3 işlemcisi, çift USB-C portu ve Coldfront buhar odası soğutmasıyla dünyanın en güçlü kompakt Android oyun tableti.',
    highlightSpec: '8.8" 165Hz 2.5K · SD 8 Gen 3 · Çift USB-C (DisplayPort) · Bypass Şarj',
    specs: {
      display: {
        size: '8.8 inç',
        panel: 'PureSight LTPS LCD (Dolby Vision)',
        resolution: '2560 x 1600 piksel (343 ppi)',
        refreshRate: '165 Hz',
        peakBrightness: '500 nit (HBM 900 nit)',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Gen 3',
        cpu: '8 Çekirdek Kryo',
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
        main: '13 MP + 2 MP Makro',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '6550 mAh',
        wiredCharging: '68W Super Rapid Charge (Bypass Şarj)',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '208.5 x 129.5 x 7.79 mm',
        weight: '350 g',
        materials: 'CNC alüminyum yekpare gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 7, Bluetooth 5.4, 2x USB-C (Biri DisplayPort 1.4 4K çıkışlı)',
        audioAndExtras: 'Çift X-ekseni haptik motor, Dolby Atmos stereo hoparlör'
      },
      software: {
        osAtLaunch: 'Android 14 / ZUI 16.1',
        updatePolicy: '3 Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'legion-tab-dual-usbc-bypass',
        title: 'Çift USB-C ile Aynı Anda Monitöre Görüntü Aktarma ve Bypass Şarj',
        category: 'Batarya',
        howToAccess: 'Legion Assistant > Bypass Şarj + Alt/Yan USB-C HDMI Adaptörü',
        description:
          'Uzun kenardaki DisplayPort USB-C üzerinden harici monitöre 4K oyun yansıtırken, kısa kenardaki porttan pili atlayarak doğrudan anakartı besler.'
      }
    ]
  },
  {
    id: 'lenovo-tab-extreme',
    brandId: 'lenovo',
    deviceType: 'tablet',
    name: 'Lenovo Tab Extreme',
    series: 'Tab Extreme Amiral Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '14.5 inç 3K OLED dev ekranı, 8 adet JBL hoparlörü ve USB-C üzerinden DisplayPort-In özelliğiyle konsol veya bilgisayar için doğrudan harici OLED monitör olabilen amiral gemisi tablet.',
    highlightSpec: '14.5" 3K 120Hz OLED · Dimensity 9000 · 8 JBL Hoparlör · DP-In Monitör Girişi',
    specs: {
      display: {
        size: '14.5 inç',
        panel: 'OLED (Dolby Vision & HDR10+)',
        resolution: '3000 x 1876 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '500 nit',
        protection: 'Gorilla Glass 5'
      },
      performance: {
        chipset: 'MediaTek Dimensity 9000',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G710 MC10',
        processNode: '4 nm'
      },
      memory: {
        ram: '12 GB LPDDR5',
        storage: '256 GB',
        storageType: 'UFS 3.1',
        expandable: 'microSDXC'
      },
      camera: {
        main: '13 MP + 5 MP Sabit Odak',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '13 MP Ultra Geniş (Çerçeve takibi)',
        video: '4K 30fps'
      },
      battery: {
        capacity: '12300 mAh',
        wiredCharging: '68W Hızlı Şarj (Çift USB-C)',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '327.8 x 210.8 x 5.85 mm',
        weight: '740 g',
        materials: '100% geri dönüştürülmüş CNC alüminyum',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6E, Bluetooth 5.3, 1x USB-C 3.2 Gen1 (DP-In/Out) + 1x USB-C 2.0',
        audioAndExtras: '8 adet JBL hoparlör (Dolby Atmos), Precision Pen 3 kutu içeriğinde'
      },
      software: {
        osAtLaunch: 'Android 13 / ZUI 15',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tab-extreme-dp-in',
        title: 'Kablolu Harici 14.5" OLED Monitör Modu (DisplayPort-In)',
        category: 'Verimlilik',
        howToAccess: 'Sol alt USB-C portuna USB-C/DisplayPort kablo ile PC veya konsol bağlayın',
        description:
          'Gecikmesiz kablolu görüntü girişi sayesinde tableti dizüstü bilgisayar, Mac Mini veya el konsolu için 14.5 inçlik bir OLED monitör olarak kullanmanızı sağlar.'
      }
    ]
  },
  {
    id: 'lenovo-tab-p12',
    brandId: 'lenovo',
    deviceType: 'tablet',
    name: 'Lenovo Tab P12',
    series: 'Tab P Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '12.7 inç 3K geniş ekranı, dört JBL hoparlörü, 10200 mAh bataryası ve aynı anda 4 bölünmüş pencere açabilen verimlilik arayüzüyle büyük ekran üretkenlik tableti.',
    highlightSpec: '12.7" 3K LCD · 4 JBL Hoparlör · 10200 mAh · 4 Bölünmüş Pencere',
    specs: {
      display: {
        size: '12.7 inç',
        panel: 'LTPS LCD',
        resolution: '2944 x 1840 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '400 nit',
        protection: 'Dayanıklı cam (Matte Edition seçeneği)'
      },
      performance: {
        chipset: 'MediaTek Dimensity 7050',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G68 MC4',
        processNode: '6 nm'
      },
      memory: {
        ram: '4 GB / 8 GB',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 2.2',
        expandable: 'microSDXC (1 TB)'
      },
      camera: {
        main: '8 MP Otofokus',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '13 MP Ultra Geniş RGB (Yatay)',
        video: '4K 30fps (Arka)'
      },
      battery: {
        capacity: '10200 mAh',
        wiredCharging: '30W Destekli (Kutuda 20W)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '293.4 x 190.8 x 6.9 mm',
        weight: '615 g',
        materials: 'İki tonlu alüminyum metal gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.1, USB-C, Pogo Pin klavye bağlantısı',
        audioAndExtras: '4 JBL Dolby Atmos hoparlör, güç tuşunda parmak izi'
      },
      software: {
        osAtLaunch: 'Android 13 / ZUI 15',
        updatePolicy: 'Android 15 + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tab-p12-4-split',
        title: 'Tek Ekranda 4 Bölünmüş Pencere + 5 Yüzer Pencere',
        category: 'Verimlilik',
        howToAccess: 'Uygulama üst çizgisi > Bölünmüş Ekran / Yüzer Pencere simgesi',
        description:
          '12.7 inç geniş alanı dörde bölerek aynı anda not alma, tarayıcı, video ve PDF okuyucuyu yan yana çalıştırır.'
      }
    ]
  },
  {
    id: 'lenovo-tab-m11',
    brandId: 'lenovo',
    deviceType: 'tablet',
    name: 'Lenovo Tab M11',
    series: 'Tab M Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '11 inç 90 Hz ekranı, dört Dolby Atmos hoparlörü, Lenovo Tab Pen kalem desteği ve Nebo/MyScript el yazısı entegrasyonuyla Türkiye’de en çok tercih edilen öğrenci tabletlerinden biri.',
    highlightSpec: '11" 90Hz IPS · Helio G88 · Lenovo Tab Pen · 4 Dolby Hoparlör',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'IPS LCD (TÜV Düşük Mavi Işık)',
        resolution: '1920 x 1200 piksel',
        refreshRate: '90 Hz',
        peakBrightness: '400 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'MediaTek Helio G88',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G52 MC2',
        processNode: '12 nm'
      },
      memory: {
        ram: '4 GB / 8 GB',
        storage: '64 GB / 128 GB',
        storageType: 'eMMC 5.1',
        expandable: 'microSDXC (1 TB)'
      },
      camera: {
        main: '8 MP veya 13 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '7040 mAh',
        wiredCharging: '15W USB-C',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '255.3 x 166.3 x 7.15 mm',
        weight: '465 g',
        materials: 'Metal arka kasa',
        waterResistance: 'IP52 (Toz ve su sıçraması)',
        connectivity: 'Wi-Fi 5, 4G LTE (opsiyonel), Bluetooth 5.1, 3.5 mm jak',
        audioAndExtras: '4 Dolby Atmos hoparlör, 4096 basınç seviyeli Tab Pen desteği'
      },
      software: {
        osAtLaunch: 'Android 13',
        updatePolicy: 'Android 15 + 2028’e kadar güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tab-m11-reading-immersive',
        title: 'Kromatik ve Siyah-Beyaz (E-Kitap) Okuma Modu',
        category: 'Sistem',
        howToAccess: 'Hızlı Ayarlar > Okuma Modu > Monokrom veya Kromatik',
        description:
          'Uzun PDF ve ders kitabı okumalarında ekranı e-mürekkep benzeri siyah-beyaz tona çevirerek göz yorgunluğunu azaltır.'
      }
    ]
  },
  {
    id: 'lenovo-yoga-tab-13',
    brandId: 'lenovo',
    deviceType: 'tablet',
    name: 'Lenovo Yoga Tab 13',
    series: 'Yoga Tab Serisi',
    releaseYear: 2021,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Entegre paslanmaz çelik stand/askı kolu, Alcantara arka dokusu ve Micro-HDMI girişiyle Switch veya laptop için doğrudan taşınabilir 2K monitör olan ikonik tablet.',
    highlightSpec: '13" 2K LTPS · SD 870 · Micro-HDMI Girişi · Çelik Askı Stand · 4 JBL',
    specs: {
      display: {
        size: '13.0 inç',
        panel: 'LTPS IPS LCD (Dolby Vision)',
        resolution: '2160 x 1350 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '400 nit',
        protection: 'Gorilla Glass'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 870 5G',
        cpu: '8 Çekirdek Kryo 585',
        gpu: 'Adreno 650',
        processNode: '7 nm'
      },
      memory: {
        ram: '8 GB LPDDR5',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 3.0',
        expandable: 'Yok'
      },
      camera: {
        main: 'Yok (Yalnızca ön kamera)',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP + ToF 3D Derinlik Sensörü',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '10200 mAh',
        wiredCharging: '30W Quick Charge 4.0',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '293.4 x 204.0 x 6.2-24.9 mm',
        weight: '830 g',
        materials: 'Alüminyum + Alcantara kumaş sırt + paslanmaz çelik stand',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.2, USB-C 3.1, Micro-HDMI Giriş Portu',
        audioAndExtras: '4 JBL hoparlör (Lenovo Premium Audio), dahili duvara askı kolu'
      },
      software: {
        osAtLaunch: 'Android 11 (Android 13 aldı)',
        updatePolicy: 'Android 13'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'yogatab13-microhdmi',
        title: 'Micro-HDMI Portuyla Konsol ve PC İçin Sıfır Gecikmeli Harici Monitör',
        category: 'Verimlilik',
        howToAccess: 'Micro-HDMI - HDMI kablosunu takın (otomatik monitör moduna geçer)',
        description:
          'PlayStation, Nintendo Switch veya dizüstü bilgisayarı doğrudan Micro-HDMI girişine bağlayarak tableti hoparlörlü 13 inç taşınabilir ekrana dönüştürür.'
      }
    ]
  }
];
