import { PhoneModel } from '../types/phone';

export const TABLETS_DATA_5: PhoneModel[] = [
  {
    id: 'oneplus-pad-3',
    brandId: 'oneplus',
    deviceType: 'tablet',
    name: 'OnePlus Pad 3',
    series: 'OnePlus Pad Serisi',
    releaseYear: 2025,
    era: '2025-2026',
    segment: 'Tablet',
    summary:
      '13.2 inç 3.4K 144 Hz ekranı, Snapdragon 8 Elite işlemcisi, 12140 mAh dev bataryası ve 8 hoparlörüyle 2025’in en güçlü global Android amiral tabletlerinden biri.',
    highlightSpec: '13.2" 3.4K 144Hz · SD 8 Elite · 12140 mAh · 80W · 8 Hoparlör',
    specs: {
      display: {
        size: '13.2 inç (7:5 Oran)',
        panel: 'LTPS LCD (12-bit renk)',
        resolution: '3392 x 2400 piksel (315 ppi)',
        refreshRate: '144 Hz',
        peakBrightness: '900 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 8 Elite',
        cpu: '8 Çekirdek Oryon',
        gpu: 'Adreno 830',
        processNode: '3 nm'
      },
      memory: {
        ram: '12 GB / 16 GB LPDDR5X',
        storage: '256 GB / 512 GB',
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
        capacity: '12140 mAh',
        wiredCharging: '80W SUPERVOOC',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '289.6 x 209.7 x 5.97 mm',
        weight: '675 g',
        materials: 'Yekpare alüminyum gövde (Storm Blue)',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 7, Bluetooth 5.4, USB-C 3.2 Gen 1',
        audioAndExtras: '8 Hi-Fi hoparlör, Open Canvas, Mac uzaktan kontrol'
      },
      software: {
        osAtLaunch: 'Android 15 / OxygenOS 15',
        updatePolicy: '3 yıl Android + 6 yıl güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'onepluspad3-open-canvas',
        title: 'Open Canvas 3 Pencere ve Sürükle-Bırak İş Akışı',
        category: 'Verimlilik',
        howToAccess: 'İki parmakla yukarıdan aşağı kaydırın > 3. uygulamayı sürükleyin',
        description:
          '3 uygulamayı birbirini sıkıştırmadan tam pencere olarak açar ve aralarında görsel/metin sürükleyip bırakmanızı sağlar.'
      }
    ]
  },
  {
    id: 'huawei-matepad-pro-11-2024',
    brandId: 'huawei',
    deviceType: 'tablet',
    name: 'Huawei MatePad Pro 11" (2024)',
    series: 'MatePad Pro Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Yalnızca 449 gram ağırlığı ve 5.9 mm inceliğiyle dünyanın en hafif 11 inç OLED tabletlerinden biri; iki yönlü Beidou uydu mesajlaşması sunan ilk tablet.',
    highlightSpec: '11" 120Hz OLED · 449 g Ultra Hafif · Çift Yönlü Uydu Mesajlaşma · 66W',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'OLED (ΔE < 1 renk doğruluğu)',
        resolution: '2560 x 1600 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '600 nit',
        protection: 'Aluminosilikat cam'
      },
      performance: {
        chipset: 'Kirin 9000S',
        cpu: '8 Çekirdek',
        gpu: 'Maleoon 910',
        processNode: '7 nm'
      },
      memory: {
        ram: '12 GB',
        storage: '256 GB / 512 GB',
        storageType: 'UFS 3.1',
        expandable: 'Yok'
      },
      camera: {
        main: '13 MP + 8 MP Ultra Geniş',
        ultrawide: '8 MP',
        telephoto: 'Yok',
        front: '16 MP',
        video: '4K 30fps'
      },
      battery: {
        capacity: '8300 mAh',
        wiredCharging: '66W SuperCharge',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '249.2 x 160.4 x 5.9 mm',
        weight: '449 g',
        materials: 'Yüksek mukavemetli magnezyum alaşım',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.2, NearLink, Beidou Uydu Mesajlaşma',
        audioAndExtras: '6 hoparlör HUAWEI SOUND, M-Pencil 3 NearLink desteği'
      },
      software: {
        osAtLaunch: 'HarmonyOS 4',
        updatePolicy: 'HarmonyOS NEXT uyumlu'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'matepadpro11-satellite',
        title: 'Şebekesiz Bölgede İki Yönlü Uydu Mesajlaşma (Çin Sürümü)',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Uydu Ağı > Beidou Uydu Mesajı',
        description:
          'Wi-Fi ve mobil şebekenin olmadığı dağ/deniz bölgelerinde doğrudan uydu üzerinden konum ve kısa mesaj gönderip alabilen ilk tablettir.'
      }
    ]
  },
  {
    id: 'huawei-matepad-se-11',
    brandId: 'huawei',
    deviceType: 'tablet',
    name: 'Huawei MatePad SE 11"',
    series: 'MatePad SE Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '475 gram metal yekpare gövdesi, 7700 mAh pili, 4 hoparlörü ve M-Pen lite kalem uyumluluğuyla günlük kullanım ve aileler için erişilebilir 11 inç Huawei tableti.',
    highlightSpec: '11.0" FHD+ Eye Comfort · 7700 mAh · 4 Hoparlör · M-Pen lite Uyumlu',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'IPS LCD (TÜV Flicker-Free)',
        resolution: '1920 x 1200 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '400 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Kirin 710A / Snapdragon 680',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G51 / Adreno 610',
        processNode: '14 nm / 6 nm'
      },
      memory: {
        ram: '4 GB / 6 GB / 8 GB',
        storage: '64 GB / 128 GB',
        storageType: 'eMMC 5.1',
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
        capacity: '7700 mAh',
        wiredCharging: '22.5W HUAWEI SuperCharge',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '252.3 x 163.8 x 6.9 mm',
        weight: '475 g',
        materials: 'Yekpare alüminyum gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5, Bluetooth 5.1, USB-C',
        audioAndExtras: '4 simetrik Histen 9.0 hoparlör, Çocuk Köşesi (Kids Corner)'
      },
      software: {
        osAtLaunch: 'HarmonyOS 2.0 / HarmonyOS 4',
        updatePolicy: 'Güvenlik güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'matepadse11-posture-alert',
        title: 'Çocuk Köşesi Duruş, Mesafe ve Engebeli Yol Uyarısı',
        category: 'Güvenlik',
        howToAccess: 'Çocuk Köşesi > Ebeveyn Denetimleri > Göz Koruması',
        description:
          'Tableti uzanarak veya aşırı yakından izlediğinizde sensörler aracılığıyla uyarı verip ekranı geçici olarak duraklatır.'
      }
    ]
  },
  {
    id: 'lenovo-tab-p11-pro-gen2',
    brandId: 'lenovo',
    deviceType: 'tablet',
    name: 'Lenovo Tab P11 Pro (Gen 2)',
    series: 'Tab P Serisi',
    releaseYear: 2022,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '11.2 inç 2.5K 120 Hz OLED ekranı, 4 JBL hoparlörü ve kablosuz dokunmatik ikinci ekran yazılımı (Lenovo Freestyle) ile taşınabilir medya ve iş tableti.',
    highlightSpec: '11.2" 120Hz OLED · 4 JBL Hoparlör · USB-C DP Çıkış · Freestyle İkinci Ekran',
    specs: {
      display: {
        size: '11.2 inç',
        panel: 'OLED (Dolby Vision & HDR10+)',
        resolution: '2560 x 1536 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '600 nit',
        protection: 'Gorilla Glass'
      },
      performance: {
        chipset: 'MediaTek Kompanio 1300T',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G77 MC9',
        processNode: '6 nm'
      },
      memory: {
        ram: '6 GB / 8 GB',
        storage: '128 GB / 256 GB',
        storageType: 'UFS 3.1',
        expandable: 'microSDXC'
      },
      camera: {
        main: '13 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '8200 mAh',
        wiredCharging: '20W USB-C',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '263.7 x 166.7 x 6.8 mm',
        weight: '480 g',
        materials: 'İki tonlu PMMA + metal çerçeve',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.1, USB-C 3.2 Gen 1 (DisplayPort çıkışlı)',
        audioAndExtras: '4 JBL hoparlör, Precision Pen 3 manyetik şarj'
      },
      software: {
        osAtLaunch: 'Android 12',
        updatePolicy: 'Android 14'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tabp11pro2-freestyle',
        title: 'Lenovo Freestyle ile Kablosuz Windows Tablet Monitör',
        category: 'Verimlilik',
        howToAccess: 'Lenovo Freestyle Uygulaması > PC ile Eşleştir',
        description:
          'Windows 10/11 bilgisayarınızdan tablete kablosuz ekran uzatır ve tabletteki Precision Pen 3’ü Windows çizim kalemi olarak kullanır.'
      }
    ]
  },
  {
    id: 'lenovo-tab-m10-plus-gen3',
    brandId: 'lenovo',
    deviceType: 'tablet',
    name: 'Lenovo Tab M10 Plus (3. Nesil)',
    series: 'Tab M Serisi',
    releaseYear: 2022,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '10.61 inç 2K ekranı, dört Dolby Atmos hoparlörü ve Lenovo Precision Pen 2 desteğiyle Türkiye’de uzun süre en çok satılan öğrenci tabletlerinden biri.',
    highlightSpec: '10.61" 2K IPS · 7700 mAh · 4 Dolby Hoparlör · Precision Pen 2',
    specs: {
      display: {
        size: '10.61 inç',
        panel: 'IPS LCD',
        resolution: '2000 x 1200 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '400 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Snapdragon 680 (LTE) / Helio G80 (Wi-Fi)',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 610 / Mali-G52',
        processNode: '6 nm / 12 nm'
      },
      memory: {
        ram: '4 GB / 6 GB',
        storage: '64 GB / 128 GB',
        storageType: 'eMMC 5.1',
        expandable: 'microSDXC (1 TB)'
      },
      camera: {
        main: '8 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '8 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '7700 mAh',
        wiredCharging: '20W USB-C',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '251.2 x 158.8 x 7.45 mm',
        weight: '465 g',
        materials: 'İki tonlu alüminyum arka kasa',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5, 4G LTE (opsiyonel), Bluetooth 5.0, 3.5 mm jak',
        audioAndExtras: '4 Dolby Atmos hoparlör, okuma modu kısayolu'
      },
      software: {
        osAtLaunch: 'Android 12',
        updatePolicy: 'Android 13'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'm10plus3-reading',
        title: 'Uygulama Bazlı Otomatik Okuma Modu Tetikleme',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ekran > Okuma Modu > Uygulama Listesi',
        description:
          'Kindle veya PDF okuyucuyu açtığınız anda ekranı otomatik olarak monokrom e-kitap moduna geçirir.'
      }
    ]
  },
  {
    id: 'honor-pad-x9',
    brandId: 'honor',
    deviceType: 'tablet',
    name: 'HONOR Pad X9',
    series: 'HONOR Pad X Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '11.5 inç 120 Hz 2K ekranı ve gövdesine yerleştirilmiş 6 adet Surround hoparlörüyle sınıfının en güçlü ses ve ekran deneyimini sunan HONOR tableti.',
    highlightSpec: '11.5" 120Hz 2K · 6 Surround Hoparlör · SD 685 · 7250 mAh · Metal Kasa',
    specs: {
      display: {
        size: '11.5 inç',
        panel: 'TFT / IPS LCD',
        resolution: '2000 x 1200 piksel',
        refreshRate: '120 Hz',
        peakBrightness: '400 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 685',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 610',
        processNode: '6 nm'
      },
      memory: {
        ram: '4 GB / 6 GB',
        storage: '128 GB',
        storageType: 'UFS 2.2',
        expandable: 'Yok'
      },
      camera: {
        main: '5 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '7250 mAh',
        wiredCharging: '22.5W (Global 10W kutuda)',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '267.3 x 167.4 x 6.9 mm',
        weight: '495 g',
        materials: 'Yekpare alüminyum kasa',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5, Bluetooth 5.1, USB-C',
        audioAndExtras: '6 adet HONOR Histen hoparlör (alt kenarda çift bas reflektör)'
      },
      software: {
        osAtLaunch: 'Android 13 / MagicOS 7.1',
        updatePolicy: 'MagicOS 8'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'honorpadx9-multiscreen',
        title: 'HONOR Connect ile Telefon Ekranını Tablete Yansıtma',
        category: 'Verimlilik',
        howToAccess: 'Hızlı Panel > Çoklu Ekran İşbirliği',
        description:
          'HONOR telefonunuzun ekranını tablet üzerinde yüzer pencere olarak açıp sürükle-bırak ile fotoğraf ve dosya aktarır.'
      }
    ]
  },
  {
    id: 'honor-pad-x8a',
    brandId: 'honor',
    deviceType: 'tablet',
    name: 'HONOR Pad X8a',
    series: 'HONOR Pad X Serisi',
    releaseYear: 2024,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '11 inç 90 Hz ekran, 8300 mAh uzun ömürlü batarya, Snapdragon 680 ve 4 hoparlörüyle 2024’ün uygun fiyatlı metal gövdeli günlük tableti.',
    highlightSpec: '11" 90Hz FHD+ · SD 680 · 8300 mAh · 4 Hoparlör · Metal Gövde',
    specs: {
      display: {
        size: '11.0 inç',
        panel: 'TFT / IPS LCD (TÜV Göz Koruma)',
        resolution: '1920 x 1200 piksel',
        refreshRate: '90 Hz',
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
        ram: '4 GB',
        storage: '64 GB / 128 GB',
        storageType: 'eMMC 5.1',
        expandable: 'microSDXC (1 TB)'
      },
      camera: {
        main: '5 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '8300 mAh',
        wiredCharging: '10W USB-C',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '257.0 x 168.5 x 7.25 mm',
        weight: '495 g',
        materials: 'Metal yekpare kasa',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5, Bluetooth 5.1, USB-C',
        audioAndExtras: '4 Hi-Res hoparlör'
      },
      software: {
        osAtLaunch: 'Android 14 / MagicOS 8.0',
        updatePolicy: 'Güvenlik güncellemeleri'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'honorpadx8a-ebook-mode',
        title: 'Sirkadiyen Gece Ekranı ve E-Kitap Modu',
        category: 'Sistem',
        howToAccess: 'Hızlı Ayarlar > E-Kitap Modu',
        description:
          'Günün saatine göre renk sıcaklığını otomatik ayarlar ve ders okurken ekranı monokrom moda geçirir.'
      }
    ]
  },
  {
    id: 'oppo-pad-air-2',
    brandId: 'oppo',
    deviceType: 'tablet',
    name: 'OPPO Pad Air 2',
    series: 'OPPO Pad Air Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '7:5 kitap oranlı 11.4 inç 2.4K 90 Hz ekranı, düşük mavi ışık donanım filtresi ve 8000 mAh bataryasıyla konforlu okuma ve multimedya tableti.',
    highlightSpec: '11.4" 2.4K 90Hz (7:5) · Helio G99 · 8000 mAh · 33W · 4 Hoparlör',
    specs: {
      display: {
        size: '11.4 inç (7:5)',
        panel: 'IPS LCD',
        resolution: '2408 x 1720 piksel',
        refreshRate: '90 Hz',
        peakBrightness: '400 nit',
        protection: 'Dayanıklı cam'
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
        capacity: '8000 mAh',
        wiredCharging: '33W SUPERVOOC',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '255.1 x 188.0 x 6.89 mm',
        weight: '538 g',
        materials: 'Alüminyum gövde',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 5, Bluetooth 5.2, USB-C',
        audioAndExtras: '4 Dolby Atmos hoparlör (86 dB)'
      },
      software: {
        osAtLaunch: 'Android 13 / ColorOS 13.2',
        updatePolicy: 'ColorOS 14'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'oppopadair2-screencast',
        title: 'OPPO Telefon ile Paylaşılan Pano (Shared Clipboard)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Bağlantı ve Paylaşım > Çoklu Ekran Bağlantısı',
        description:
          'Telefonunuzda kopyaladığınız bir metni veya ekran görüntüsünü anında tablette yapıştırmanızı sağlar.'
      }
    ]
  },
  {
    id: 'vivo-pad-air',
    brandId: 'vivo',
    deviceType: 'tablet',
    name: 'vivo Pad Air',
    series: 'vivo Pad Serisi',
    releaseYear: 2023,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      '11.5 inç 2.8K 144 Hz ekranı, Snapdragon 870 işlemcisi ve 8500 mAh bataryasıyla yüksek yenileme hızlı hafif multimedya tableti.',
    highlightSpec: '11.5" 2.8K 144Hz · Snapdragon 870 · 8500 mAh · 44W · 530 g',
    specs: {
      display: {
        size: '11.5 inç (3:2)',
        panel: 'IPS LCD (10-bit)',
        resolution: '2800 x 1840 piksel',
        refreshRate: '144 Hz',
        peakBrightness: '500 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Qualcomm Snapdragon 870',
        cpu: '8 Çekirdek',
        gpu: 'Adreno 650',
        processNode: '7 nm'
      },
      memory: {
        ram: '8 GB / 12 GB',
        storage: '128 GB / 256 GB / 512 GB',
        storageType: 'UFS 3.1',
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
        capacity: '8500 mAh',
        wiredCharging: '44W FlashCharge',
        wirelessCharging: 'Yok',
        reverseCharging: 'USB-C ters şarj'
      },
      buildAndConnectivity: {
        dimensions: '259.7 x 176.0 x 6.67 mm',
        weight: '530 g',
        materials: 'Metal yekpare kasa',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi 6, Bluetooth 5.2, NFC, USB-C 3.0',
        audioAndExtras: '4 Super Audio hoparlör, vivo Pencil 2 desteği'
      },
      software: {
        osAtLaunch: 'Android 13 / OriginOS 3',
        updatePolicy: 'OriginOS 4'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'vivopadair-nfc-tap',
        title: 'NFC Tek Dokunuşla Telefon Ekranı ve Dosya Aktarımı',
        category: 'Verimlilik',
        howToAccess: 'vivo telefonunuzu tabletin üst çerçevesindeki NFC alanına dokundurun',
        description:
          'QR kod veya menü aramadan fiziksel dokunuşla dosya aktarımı ve ekran yansıtmayı başlatır.'
      }
    ]
  },
  {
    id: 'nokia-t20',
    brandId: 'nokia',
    deviceType: 'tablet',
    name: 'Nokia T20',
    series: 'Nokia T Serisi',
    releaseYear: 2021,
    era: '2020-2024',
    segment: 'Tablet',
    summary:
      'Nokia’nın Android tablet pazarına geri döndüğü; alüminyum gövdeli, 8200 mAh bataryalı, OZO ses teknolojili ve 3 yıl güvenlik güncellemeli dayanıklı tablet.',
    highlightSpec: '10.4" 2K IPS · 8200 mAh · Alüminyum Gövde · IP52 · OZO Playback',
    specs: {
      display: {
        size: '10.4 inç',
        panel: 'IPS LCD',
        resolution: '2000 x 1200 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '400 nit',
        protection: 'Sertleştirilmiş cam'
      },
      performance: {
        chipset: 'Unisoc T610',
        cpu: '8 Çekirdek',
        gpu: 'Mali-G52 MP2',
        processNode: '12 nm'
      },
      memory: {
        ram: '3 GB / 4 GB',
        storage: '32 GB / 64 GB',
        storageType: 'eMMC 5.1',
        expandable: 'microSDXC (512 GB)'
      },
      camera: {
        main: '8 MP Otofokus + LED Flaş',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '5 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '8200 mAh',
        wiredCharging: '15W USB-C',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '247.6 x 157.5 x 7.8 mm',
        weight: '465 g',
        materials: 'Kumlanmış alüminyum gövde',
        waterResistance: 'IP52',
        connectivity: 'Wi-Fi 5, 4G LTE (opsiyonel), Bluetooth 5.0, 3.5 mm jak, FM Radyo',
        audioAndExtras: 'OZO Audio stereo hoparlörler, Google Kids Space'
      },
      software: {
        osAtLaunch: 'Android 11',
        updatePolicy: '2 Android + 3 yıl aylık güvenlik'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'nokiat20-ozo',
        title: 'Nokia OZO Uzamsal Ses Yükseltici',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ses > OZO Audio Oynatma',
        description:
          'İki hoparlörden gelen ses sahnesini genişleterek kalabalık ortamlarda diyalog netliğini artırır.'
      }
    ]
  },
  {
    id: 'asus-transformer-tf300t',
    brandId: 'asus',
    deviceType: 'tablet',
    name: 'ASUS Transformer Pad TF300T',
    series: 'Transformer Pad Serisi',
    releaseYear: 2012,
    era: '2000-2019',
    segment: 'Tablet',
    summary:
      'Altına takılan mekanik klavye istasyonunun içinde ikinci bir batarya, tam boy USB portu ve SD kart okuyucu barındırarak tableti Android netbook’a çeviren efsane.',
    highlightSpec: '10.1" IPS · Tegra 3 · İkinci Pilli Klavye İstasyonu · Tam Boy USB & SD',
    specs: {
      display: {
        size: '10.1 inç',
        panel: 'IPS LCD',
        resolution: '1280 x 800 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '350 nit',
        protection: 'Çizilmeye dayanıklı cam'
      },
      performance: {
        chipset: 'NVIDIA Tegra 3',
        cpu: '4+1 Çekirdek Cortex-A9 (1.2 GHz)',
        gpu: 'ULP GeForce 12 Çekirdek',
        processNode: '40 nm'
      },
      memory: {
        ram: '1 GB',
        storage: '16 GB / 32 GB',
        storageType: 'eMMC',
        expandable: 'microSD + Klavyede Tam Boy SD Kart Yuvası'
      },
      camera: {
        main: '8 MP, f/2.2',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '1.2 MP',
        video: '1080p 30fps'
      },
      battery: {
        capacity: '22 Wh Tablet + 16.5 Wh Klavye İstasyonu (Toplam 15 Saat)',
        wiredCharging: 'ASUS 40-pin Özel Adaptör',
        wirelessCharging: 'Yok',
        reverseCharging: 'Klavye ünitesi tableti şarj eder'
      },
      buildAndConnectivity: {
        dimensions: '263.0 x 180.8 x 9.9 mm',
        weight: '635 g (Klavyeyle 1180 g)',
        materials: 'Eş merkezli Zen desenli polikarbonat',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi n, Bluetooth 3.0, Micro-HDMI, Klavyede USB 2.0',
        audioAndExtras: 'Tegra 3 4+1 pil tasarruf çekirdeği, SonicMaster ses'
      },
      software: {
        osAtLaunch: 'Android 4.0 Ice Cream Sandwich',
        updatePolicy: 'Android 4.2 Jelly Bean'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'tf300t-dock-battery',
        title: 'Klavye İstasyonundan Tableti Şarj Eden Çift Batarya Yönetimi',
        category: 'Batarya',
        howToAccess: 'Klavye istasyonunu kilitleyin > Bildirim çubuğu çift pil göstergesi',
        description:
          'Klavye takılıyken önce klavye bataryasını kullanarak tabletin ana pilini %100 dolu tutar ve toplam süreyi 15 saate çıkarır.'
      }
    ]
  },
  {
    id: 'general-mobile-e-tab-4',
    brandId: 'general-mobile',
    deviceType: 'tablet',
    name: 'General Mobile e-tab 4',
    series: 'e-tab Eğitim Serisi',
    releaseYear: 2014,
    era: '2000-2019',
    segment: 'Tablet',
    summary:
      'FATİH Projesi’nin ilk büyük ölçekli öğrenci dağıtımlarından biri olan; Exynos 4412 işlemcili ve 10.1 inç geniş ekranlı tarihi Türk eğitim tableti.',
    highlightSpec: '10.1" IPS · Exynos 4412 · 2 GB RAM · 7000 mAh · İlk FATİH Efsanesi',
    specs: {
      display: {
        size: '10.1 inç',
        panel: 'IPS LCD',
        resolution: '1280 x 800 piksel',
        refreshRate: '60 Hz',
        peakBrightness: '350 nit',
        protection: 'Dayanıklı cam'
      },
      performance: {
        chipset: 'Samsung Exynos 4412',
        cpu: '4 Çekirdek Cortex-A9 (1.4 GHz)',
        gpu: 'Mali-400 MP4',
        processNode: '32 nm'
      },
      memory: {
        ram: '2 GB',
        storage: '16 GB',
        storageType: 'eMMC',
        expandable: 'Yok'
      },
      camera: {
        main: '5 MP',
        ultrawide: 'Yok',
        telephoto: 'Yok',
        front: '2 MP',
        video: '720p'
      },
      battery: {
        capacity: '7000 mAh',
        wiredCharging: '10W MicroUSB',
        wirelessCharging: 'Yok',
        reverseCharging: 'Yok'
      },
      buildAndConnectivity: {
        dimensions: '256.0 x 174.0 x 9.8 mm',
        weight: '560 g',
        materials: 'Dayanıklı mat eğitim kasası',
        waterResistance: 'Yok',
        connectivity: 'Wi-Fi n, Bluetooth 4.0, MicroUSB, Mini-HDMI',
        audioAndExtras: 'Ön stereo hoparlör, EBA sınıf içi yönetim desteği'
      },
      software: {
        osAtLaunch: 'Android 4.2.2 Jelly Bean',
        updatePolicy: 'Kurumsal MDM yazılımı'
      }
    },
    modelHiddenFeatures: [
      {
        id: 'etab4-minihdmi',
        title: 'Mini-HDMI ile Akıllı Tahta ve Projeksiyona Doğrudan Görüntü Aktarma',
        category: 'Verimlilik',
        howToAccess: 'Yan kenardaki Mini-HDMI portunu sınıf projeksiyonuna bağlayın',
        description:
          'Ek adaptör veya internet gerektirmeden doğrudan 1080p ders sunumlarını akıllı tahtaya yansıtır.'
      }
    ]
  }
];
