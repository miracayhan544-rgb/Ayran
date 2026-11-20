import { PhoneModel } from '../types/phone';

export const TABLETS_DATA_2: PhoneModel[] = [
  {
    id: 'ipad-a16-2025',
    brandId: 'apple',
    deviceType: 'tablet',
    name: 'iPad 11. Nesil (A16)',
    series: 'Standart iPad Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Tablet',
    summary:
      '11 inç Liquid Retina ekranı, A16 Bionic işlemcisi ve iki katına çıkan 128 GB başlangıç depolamasıyla günlük kullanım ve eğitim için en popüler 2025 iPad.',
    highlightSpec: '11" Liquid Retina · Apple A16 · 128 GB Başlangıç · Yatay Kamera',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'Liquid Retina IPS LCD',
        resolution: '2360 x 1640 piksel (264 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '500 nit',
        protection: 'Oleofobik cam'
      },
      performance: {
        chipset: 'Apple A16',
        cpu: '5 Çekirdek',
        gpu: '4 Çekirdek Apple GPU',
        processNode: '4 nm'
      },
      memory: {
        ram: '6 GB',
        storage: '128 GB / 256 GB / 512 GB',
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
        capacity: '7606 mAh (28.93 Wh)',
        wiredCharging: '20W+ USB-C PD',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '248.6 x 179.5 x 7.0 mm',
        weight: '477 g',
        materials: 'Alüminyum yekpare gövde (4 renk)',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, 5G, Bluetooth 5.3, USB-C',
        audioAndExtras: 'Touch ID güç tuşunda, Magic Keyboard Folio uyumlu'
      },
      software: {
        osAtLaunch: 'iPadOS 18.3',
        updatePolicy: '6+ yıl iPadOS güncellemesi'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'ipada16-scribble-tr',
        title: 'Karalama (Scribble) ile Metin Kutularına Doğrudan El Yazısı Yazma',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Apple Pencil > Karalama',
        description:
          'Safari adres çubuğuna veya mesaj kutularına Apple Pencil ile doğrudan el yazısı yazdığınızda yazıyı anında dijital metne çevirir.'
      }
    ]
  },
  {
    id: 'galaxy-tab-a9-plus',
    brandId: 'samsung',
    deviceType: 'tablet',
    name: 'Samsung Galaxy Tab A9+',
    series: 'Galaxy Tab A Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '11 inç 90 Hz ekranı, Snapdragon 695 5G işlemcisi, dört Dolby Atmos hoparlörü ve dahili Samsung DeX masaüstü moduyla bütçe dostu metal tablet.',
    highlightSpec: '11" 90Hz LCD · SD 695 · 4 Dolby Hoparlör · Dahili DeX Modu',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'TFT / IPS LCD',
        resolution: '1920 x 1200 piksel',
        refreshRate: '90 Hz',
        peakBrightness: '480 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 695 5G',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 619',
        processNode: '6 nm'
      },
      memory: {
        ram: '4 GB / 8 GB',
        storage: '64 GB / 128 GB',
        storageType: 'UFS 2.2',
        expandable: 'microSDXC (1 TB)'
      },
      camera: {
        main: '8 MP Otofokus',
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
        dimensions: '257.1 x 168.7 x 6.9 mm',
        weight: '480 g',
        materials: 'Metal yekpare gövde',
        waterResistance: 'Yok',
        connectivity: '5G (Opsiyonel), Wi-Fi 5, Bluetooth 5.1, 3.5mm Jak',
        audioAndExtras: '4 Dolby Atmos hoparlör, Tab A serisinde ilk Samsung DeX'
      },
      software: {
        osAtLaunch: 'Android 13 / One UI 5.1.1 (One UI 6.1/7 aldı)',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'taba9p-3app-split',
        title: 'Tek Ekranda 3 Uygulamayı Aynı Anda Açık Tutma + DeX',
        category: 'Verimlilik',
        howToAccess: 'Kenar Paneli > 3 uygulamayı ekrana sürükleyin',
        description:
          'Giriş-orta segmentte olmasına rağmen amiral gemileri gibi 3 bölünmüş pencere ve tam pencere DeX masaüstü deneyimi sunar.'
      }
    ]
  },
  {
    id: 'xiaomi-redmi-pad-pro',
    brandId: 'xiaomi',
    deviceType: 'tablet',
    name: 'Redmi Pad Pro',
    series: 'Redmi Pad Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '12.1 inç dev 2.5K 120 Hz ekranı, 10.000 mAh bataryası, 3.5mm jakı, microSD yuvası ve Redmi Smart Pen uyumuyla geniş ekranlı öğrenci/film tableti.',
    highlightSpec: '12.1" 2.5K 120Hz · SD 7s Gen 2 · 10.000 mAh 33W · 4 Hoparlör',
    specs: {
      display: {
        size: '12.1 inç',
        panel: 'IPS LCD (Dolby Vision)',
        resolution: '2560 x 1600 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '600 nit',
        protection: 'Corning Gorilla Glass 3'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 7s Gen 2',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 710',
        processNode: '4 nm'
      },
      memory: {
        ram: '6 GB / 8 GB',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 2.2',
        expandable: 'microSDXC (1.5 TB)'
      },
      camera: {
        main: '8 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '10.000 mAh',
        wiredCharging: '33W Hızlı Şarj',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '280.0 x 181.9 x 7.5 mm',
        weight: '571 g',
        materials: 'Metal yekpare kasa',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, 5G (Opsiyonel), Bluetooth 5.2, 3.5mm Jak',
        audioAndExtras: '4 Dolby Atmos hoparlör, Redmi Smart Pen & Klavye desteği'
      },
      software: {
        osAtLaunch: 'Android 14 / HyperOS',
        updatePolicy: '2 yıl Android + 3 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'redmipadpro-shared-clipboard',
        title: 'Xiaomi Telefonla Ortak Pano ve Ağ Senkronizasyonu',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Bağlantı ve Paylaşım > Birbirine Bağlanabilirlik',
        description:
          'Telefonda kopyaladığınız metin veya linki doğrudan tablette yapıştırır ve tek dokunuşla telefonun 5G internetine bağlanır.'
      }
    ]
  },
  {
    id: 'huawei-matepad-pro-12-2',
    brandId: 'huawei',
    deviceType: 'tablet',
    name: 'Huawei MatePad Pro 12.2" (Tandem OLED)',
    series: 'MatePad Pro Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Çift katmanlı Tandem OLED PaperMatte ekranıyla 2000 nit rekor parlaklık, 508 g hafiflik, 100W şarj ve klavye içine gizlenen kalem yuvası sunar.',
    highlightSpec: '12.2" Tandem OLED PaperMatte (2000 nit) · 508 g · 10.100 mAh 100W',
    specs: {
      display: {
        size: '12.2 inç (3:2)',
        panel: 'Çift Katmanlı Tandem OLED PaperMatte',
        resolution: '2800 x 1840 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '2000 nit',
        protection: 'Parlama önleyici ipek dokulu PaperMatte'
      },
      performance: {
        chipset: 'Huawei Kirin T91',
        cpu: '8 Çekirdek',
        gpu: 'Maleoon 910',
        processNode: '7 nm'
      },
      memory: {
        ram: '12 GB',
        storage: '256 GB / 512 GB',
        storageType: 'UFS',
        expandable: 'Yok'
      },
      camera: {
        main: '13 MP + 8 MP Ultra Geniş',
        ultrawide: '8 MP',
        telephoto: 'Yok',
        front: '16 MP / 8 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '10.100 mAh',
        wiredCharging: '100W SuperCharge (55 dk %100)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Ters kablolu'
      },
      buildAndConnectivity: {
        dimensions: '271.3 x 182.5 x 5.5 mm',
        weight: '508 g',
        materials: 'Altın ipek dokulu havacılık fiber gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.2, NearLink',
        audioAndExtras: 'Glide Klavye (M-Pencil şarj yuvalı), 4 Huawei Sound hoparlör'
      },
      software: {
        osAtLaunch: 'HarmonyOS 4.2',
        updatePolicy: 'HarmonyOS güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'mp122-glide-pen-slot',
        title: 'Klavye Menteşesinin İçinde Gizli Kalem Saklama ve Şarj Yuvası',
        category: 'Verimlilik',
        howToAccess: 'Huawei Glide Keyboard’u açtığınızda alt menteşedeki gizli kalem yuvası',
        description:
          'M-Pencil’i tabletin üstünde açıkta bırakıp düşürme riskini ortadan kaldırarak klavye gövdesinin içinde saklar ve şarj eder.'
      }
    ]
  },
  {
    id: 'asus-rog-flow-z13-tablet',
    brandId: 'asus',
    deviceType: 'tablet',
    name: 'ASUS ROG Flow Z13 (2025)',
    series: 'ROG Oyuncu Tablet',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Tablet',
    summary:
      'CNC alüminyum gövdeli 13.4 inç 180 Hz Nebula ekranlı oyuncu tableti; masaüstü sınıfı AMD Ryzen AI Max+ 395 işlemci ve 128 GB’a kadar birleşik bellek taşır.',
    highlightSpec: '13.4" 2.5K 180Hz Nebula · Ryzen AI Max+ 395 · CNC Tablet · 70 Wh',
    specs: {
      display: {
        size: '13.4 inç (16:10)',
        panel: 'ROG Nebula IPS (Pantone Validated)',
        resolution: '2560 x 1600 piksel',
        refreshRate: '180 Hz',
        peakBrightness: '500 nit',
        protection: 'Corning Gorilla Glass DXC'
      },
      performance: {
        chipset: 'AMD Ryzen AI Max+ 395 (Strix Halo)',
        cpu: '16 Çekirdek Zen 5 (5.1 GHz)',
        gpu: 'Radeon 8060S (40 CU RDNA 3.5)',
        processNode: '4 nm'
      },
      memory: {
        ram: '32 GB / 64 GB / 128 GB Birleşik LPDDR5X-8000',
        storage: '1 TB NVMe PCIe 4.0 SSD (2230)',
        storageType: 'NVMe SSD',
        expandable: 'microSD UHS-II'
      },
      camera: {
        main: '13 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP IR Windows Hello Yüz Tanıma',
        video: '1080p'
      },
      battery: {
        capacity: '70 Wh (Yüksek Yoğunluklu)',
        wiredCharging: '200W Slim Adaptör + 100W USB-C PD',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C çıkışı'
      },
      buildAndConnectivity: {
        dimensions: '300 x 204 x 12.9 mm',
        weight: '1200 g',
        materials: 'CNC alüminyum şasi, 170° entegre stand, şeffaf RGB pencere',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 7, Bluetooth 5.4, 2x USB4, HDMI 2.1, USB-A, 3.5mm Jak',
        audioAndExtras: 'Sıvı metal soğutma, Buhar odası, Çift fan, Command Center tuşu'
      },
      software: {
        osAtLaunch: 'Windows 11 Home / Pro',
        updatePolicy: 'Standart Windows & Armoury Crate'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'flowz13-vram-split',
        title: 'Armoury Crate ile Sistem RAM’inin 96 GB’a Kadarını VRAM Yapma',
        category: 'Geliştirici',
        howToAccess: 'Armoury Crate > GPU Ayarları > VRAM Bellek Ayırma',
        description:
          'Birleşik bellek mimarisi sayesinde büyük yapay zeka modellerini veya AAA oyunları çalıştırmak için GPU belleğini dinamik artırabilirsiniz.'
      }
    ]
  },
  {
    id: 'nokia-n1-2015',
    brandId: 'nokia',
    deviceType: 'tablet',
    name: 'Nokia N1',
    series: 'N Serisi Tablet',
    releaseYear: 2015,
    era: '2000-2019',
    segment: 'Tablet',
    summary:
      'Dünyanın ilk çift yönlü takılabilen USB Type-C portuna sahip tüketici cihazlarından biri olan, Foxconn üretimi Z Launcher arayüzlü yekpare alüminyum 7.9 inç Nokia tableti.',
    highlightSpec: '7.9" 2K (4:3) IPS · İlk USB Type-C Portlu Tablet · Intel Atom 64-bit',
    specs: {
      display: {
        size: '7.9 inç (4:3)',
        panel: 'Tam Lamine IPS LCD',
        resolution: '2048 x 1536 piksel (324 ppi)',
        refreshRate: '60 Hz',
        peakBrightness: '400 nit',
        protection: 'Corning Gorilla Glass 3'
      },
      performance: {
        chipset: 'Intel Atom Z3580 (64-bit)',
        cpu: '4 Çekirdek 2.3 GHz',
        gpu: 'PowerVR G6430',
        processNode: '22 nm'
      },
      memory: {
        ram: '2 GB',
        storage: '32 GB',
        storageType: 'eMMC 5.0',
        expandable: 'Yok'
      },
      camera: {
        main: '8 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '5300 mAh',
        wiredCharging: 'İlk Ters Takılabilir USB Type-C 2.0',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '200.7 x 138.6 x 6.9 mm',
        weight: '318 g',
        materials: 'Tek parça kumlanmış alüminyum',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi ac MIMO, Bluetooth 4.0, USB-C',
        audioAndExtras: 'Nokia Z Launcher el yazısı arama, 3.5mm Jak'
      },
      software: {
        osAtLaunch: 'Android 5.0 Lollipop + Nokia Z Launcher',
        updatePolicy: 'Android 5.1.1'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'n1-z-launcher',
        title: 'Z Launcher: Ekrana Harf Çizerek Uygulama Arama',
        category: 'Verimlilik',
        howToAccess: 'Ana ekranda parmağınızla herhangi bir harf çizin (örn: W veya M)',
        description:
          'Uygulama çekmecesinde gezmek yerine ana ekrana parmağınızla bir harf çizdiğinizde o harfle başlayan uygulama ve kişileri anında listeler.'
      }
    ]
  },
  {
    id: 'oneplus-pad-1',
    brandId: 'oneplus',
    deviceType: 'tablet',
    name: 'OnePlus Pad',
    series: 'OnePlus Pad Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'OnePlus’ın ilk tableti; ortalanmış arka dairesel kamera adası, 7:5 oranlı 144 Hz ekran, Dimensity 9000 işlemci ve 9510 mAh + 67W şarjıyla öne çıktı.',
    highlightSpec: '11.61" 144Hz (7:5) · Dimensity 9000 · 9510 mAh 67W · Halo Green',
    specs: {
      display: {
        size: '11.61 inç (7:5)',
        panel: 'IPS LCD (Dolby Vision)',
        resolution: '2800 x 2000 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '500 nit',
        protection: '2.5D Kavisli Cam'
      },
      performance: {
        chipset: 'MediaTek Dimensity 9000',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G710 MC10',
        processNode: '4 nm'
      },
      memory: {
        ram: '8 GB / 12 GB LPDDR5',
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
        dimensions: '258 x 189.4 x 6.5 mm',
        weight: '552 g',
        materials: 'CNC alüminyum, Halo Green',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.3, USB-C',
        audioAndExtras: '4 Omnibearing hoparlör, OnePlus Stylo'
      },
      software: {
        osAtLaunch: 'Android 13 / OxygenOS 13.1 (OxygenOS 15 aldı)',
        updatePolicy: '3 yıl Android + 4 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'oppad1-cellular-sharing',
        title: 'Otomatik 5G Hücresel Veri Paylaşımı (Hotspot Açmadan)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Bağlantı ve Paylaşım > Çoklu Ekran Bağlantısı',
        description:
          'Yakındaki OnePlus telefonunuzun 5G bağlantısını şifre girmeden ve hotspot’u manuel açmadan otomatik olarak kullanır.'
      }
    ]
  },
  {
    id: 'honor-pad-9',
    brandId: 'honor',
    deviceType: 'tablet',
    name: 'HONOR Pad 9',
    series: 'HONOR Pad Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '12.1 inç 120 Hz kağıt dokulu mat/parlak IPS ekran, 8 adet çevresel hoparlör ve Snapdragon 6 Gen 1 işlemcisiyle multimedya odaklı orta segment tablet.',
    highlightSpec: '12.1" 2.5K 120Hz · SD 6 Gen 1 · 8 Hoparlör · 8300 mAh 35W',
    specs: {
      display: {
        size: '12.1 inç',
        panel: 'IPS LCD (Opsiyonel Mat Kağıt Ekran)',
        resolution: '2560 x 1600 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '500 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 6 Gen 1',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 710',
        processNode: '4 nm'
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
        front: '8 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '8300 mAh',
        wiredCharging: '35W SuperCharge',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '278.2 x 180.1 x 6.9 mm',
        weight: '555 g',
        materials: 'Metal yekpare kasa',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5, Bluetooth 5.1, USB-C',
        audioAndExtras: '8 Çevresel Hoparlör (Çift yönlü ses iyileştirme)'
      },
      software: {
        osAtLaunch: 'Android 13 / MagicOS 7.2',
        updatePolicy: 'Güvenlik güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'hpad9-ebook-circadian',
        title: 'E-Kitap Siyah-Beyaz Okuma ve Sirkadiyen Gece Ekranı',
        category: 'Sistem',
        howToAccess: 'Kontrol Merkezi > E-Kitap Modu / Göz Konforu',
        description:
          'Ekranı gerçek mürekkepli e-kitap okuyucu tonlarına çevirerek uzun PDF okumalarında göz yorgunluğunu azaltır.'
      }
    ]
  }
];
