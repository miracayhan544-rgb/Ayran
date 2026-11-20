import { Brand } from '../types/phone';

export const BRANDS: Brand[] = [
  {
    id: 'apple',
    name: 'Apple',
    country: 'ABD',
    osName: 'iOS 26 / iOS 18',
    tagline: 'Apple Silicon mimarisi, ProRAW/Log video işleme ve kapalı ekosistem senkronizasyonu.',
    ecosystemSummary:
      'A serisi yonga setleri, LiDAR tarayıcı, Apple Intelligence ve macOS/iPadOS ile kesintisiz süreklilik özellikleri sunar.',
    accentHex: '#2563EB',
    foundedYear: 1976,
    osHiddenFeatures: [
      {
        id: 'apple-back-tap',
        title: 'Arkaya Dokunma (Back Tap) Kısayolları',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Erişilebilirlik > Dokunma > Arkaya Dokun',
        description:
          'Telefonun arka camına 2 veya 3 kez dokunarak ekran görüntüsü alma, el fenerini açma, Shazam çalıştırma veya özel Kestirme (Shortcut) tetikleme atayabilirsiniz.',
        tip: 'Kılıfla da çalışır; Kamera veya El Feneri için 3 dokunma yanlış tetiklemeyi azaltır.'
      },
      {
        id: 'apple-background-sounds',
        title: 'Dahili Arka Plan Sesleri (Beyaz Gürültü)',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Erişilebilirlik > Ses ve Görsel > Arka Plan Sesleri',
        description:
          'Üçüncü parti uygulama indirmeden yağmur, okyanus, akarsu, koyu/parlak gürültü seslerini sistem düzeyinde çalar ve medya oynatılırken bile arka planda karışabilir.'
      },
      {
        id: 'apple-hidden-album-faceid',
        title: 'Gizli Albüm ve Uygulama Kilitleme',
        category: 'Güvenlik',
        howToAccess: 'Uygulama simgesine basılı tut > Face ID Gerektir / Fotoğraflar > Gizli',
        description:
          'Herhangi bir uygulamayı doğrudan Face ID ile kilitleyebilir veya Ana Ekrandan gizleyerek yalnızca Gizli klasöründen erişilebilir kılabilirsiniz.'
      },
      {
        id: 'apple-sound-recognition',
        title: 'Çevresel Ses Tanıma Uyarıları',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Erişilebilirlik > Ses Tanıma',
        description:
          'Bebek ağlaması, kapı zili, yangın alarmı, su akışı veya köpek havlaması gibi sesleri mikrofonla sürekli dinleyip anlık bildirim verir.'
      },
      {
        id: 'apple-photo-lookup',
        title: 'Görsel Arama: Bitki, Yıkama Etiketi ve Araç İkonu',
        category: 'Kamera',
        howToAccess: 'Fotoğraflar > Fotoğrafı aç > Alt ortadaki (i) Bilgi simgesi',
        description:
          'Çektiğiniz kıyafet yıkama etiketlerinin anlamını, otomobil gösterge ışıklarını, bitki/hayvan türlerini doğrudan Fotoğraflar içinde çözer.'
      },
      {
        id: 'apple-charge-limit',
        title: '%80–%95 Özel Şarj Sınırı ve Döngü Sayısı',
        category: 'Batarya',
        howToAccess: 'Ayarlar > Pil > Şarj Etme & Pil Sağlığı',
        description:
          'Maksimum şarjı %80, %85, %90 veya %95 ile sınırlandırarak pil kimyasının yaşlanmasını belirgin biçimde yavaşlatabilirsiniz.'
      }
    ],
    secretCodes: [
      {
        code: '*3001#12345#*',
        title: 'Field Test Mode (Saha Test Modu)',
        description:
          'Baz istasyonu sinyal gücünü (RSRP/RSRQ dBm cinsinden), aktif 5G/LTE frekans bandını ve hücre kimliğini gösterir.'
      },
      {
        code: '*#06#',
        title: 'IMEI, EID ve Seri Numarası',
        description: 'Cihazın fiziksel ve eSIM IMEI numaralarını ve EID kimliğini ekranda listeler.'
      },
      {
        code: '*#21#',
        title: 'Çağrı Yönlendirme Durumu',
        description: 'Sesli, veri veya SMS çağrılarının başka bir numaraya yönlendirilip yönlendirilmediğini sorgular.'
      },
      {
        code: '*#62#',
        title: 'Ulaşılamadığında Yönlendirme Kontrolü',
        description: 'Telefon kapalıyken veya çekmediğinde aramaların hangi numaraya aktarıldığını gösterir.'
      }
    ]
  },
  {
    id: 'samsung',
    name: 'Samsung',
    country: 'Güney Kore',
    osName: 'One UI 8 / One UI 7',
    tagline: 'Good Lock modüler özelleştirme, DeX masaüstü modu ve S Pen hassasiyeti.',
    ecosystemSummary:
      'Galaxy AI, Knox donanım güvenliği, kablolu/kablosuz Samsung DeX ve Galaxy Store üzerinden sunulan Good Lock ekosistemiyle Android dünyasının en derin özelleştirme katmanını sunar.',
    accentHex: '#1D4ED8',
    foundedYear: 1969,
    osHiddenFeatures: [
      {
        id: 'samsung-good-lock',
        title: 'Good Lock Modülleri (SoundAssistant, Camera Assistant, RegiStar)',
        category: 'Geliştirici',
        howToAccess: 'Galaxy Store > Good Lock uygulamasını indir',
        description:
          'Samsung’un resmi geliştirici paketiyle her uygulamanın sesini ayrı ayarlayabilir, güç tuşuna çift basma/arka dokunma atayabilir, deklanşör gecikmesini sıfırlayabilir ve çoklu pencere kurallarını değiştirebilirsiniz.'
      },
      {
        id: 'samsung-secure-folder',
        title: 'Knox Güvenli Klasör (İkinci İzole İşletim Alanı)',
        category: 'Güvenlik',
        howToAccess: 'Ayarlar > Güvenlik ve Gizlilik > Diğer Güvenlik Ayarları > Güvenli Klasör',
        description:
          'Donanım tabanlı Samsung Knox şifrelemesiyle bağımsız bir uygulama alanı oluşturur; aynı uygulamanın ikinci kopyasını tamamen gizli çalıştırabilirsiniz.'
      },
      {
        id: 'samsung-modes-routines',
        title: 'Modlar ve Rutinler (Otomasyon Motoru)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Modlar ve Rutinler',
        description:
          'Örneğin "YouTube açılınca ekran yenilemeyi 60Hz yap" veya "Ev Wi-Fi’ına bağlanınca kilidi açık tut ve hızlı şarjı kapat" gibi yüzlerce koşullu kural tanımlayabilirsiniz.'
      },
      {
        id: 'samsung-labs-multiwindow',
        title: 'Labs: Tüm Uygulamaları Bölünmüş Ekrana Zorlama',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Gelişmiş Özellikler > Labs',
        description:
          'Normalde pencere modunu desteklemeyen uygulamaları bile kayan pencere (pop-up) veya bölünmüş ekran modunda açmayı zorlar.'
      },
      {
        id: 'samsung-bypass-charging',
        title: 'Oyunlarda Pili Atla (Pause USB Power Delivery)',
        category: 'Batarya',
        howToAccess: 'Gaming Hub > Game Booster Ayarları > Şarj Sırasında USB Güç Dağıtımını Duraklat',
        description:
          '25W+ PD şarj cihazı takılıyken gücü pile sokmadan doğrudan işlemciye yönlendirir; telefon oyun sırasında ısınmaz ve pil ömrü korunur.'
      },
      {
        id: 'samsung-wifi-labs',
        title: 'Akıllı Wi-Fi Geliştirici Menüsü (Connectivity Labs)',
        category: 'Geliştirici',
        howToAccess: 'Ayarlar > Bağlantılar > Wi-Fi > 3 Nokta > Intelligent Wi-Fi > "Intelligent Wi-Fi" yazısına 7 kez dokun',
        description:
          'Evdeki Wi-Fi ölü noktalarını haritalayan Ev Wi-Fi Denetimi ve gerçek zamanlı kanal/bant analizi menüsünü açar.'
      }
    ],
    secretCodes: [
      {
        code: '*#0*#',
        title: 'Tam Donanım Test Menüsü (Hardware Diagnostics)',
        description:
          'Ekran RGB piksel, dokunmatik ızgara, S Pen basıncı, hoparlör, titreşim motoru, ivmeölçer ve tüm kameraları tek tek test eder.',
        caution: 'Bazı operatörlerde veya Otomatik Engelleyici (Auto Blocker) açıkken çalışmayabilir.'
      },
      {
        code: '*#0228#',
        title: 'Pil Durumu ve Voltaj Kalibrasyonu (BatteryStatus)',
        description: 'Anlık pil voltajını (mV), sıcaklığını, ADC değerini ve gerçek şarj seviyesini gösterir.'
      },
      {
        code: '*#9900#',
        title: 'SysDump Geliştirici Sistem Menüsü',
        description: 'Sistem önbellek dökümlerini temizleme (Delete dumpstate/logcat) ve detaylı ağ loglarını yönetme paneli.'
      },
      {
        code: '*#06#',
        title: 'IMEI ve Seri Numarası Sorgulama',
        description: 'Çift SIM ve eSIM IMEI bilgilerini barkodlu şekilde ekrana getirir.'
      }
    ]
  },
  {
    id: 'xiaomi',
    name: 'Xiaomi / Redmi / POCO',
    country: 'Çin',
    osName: 'HyperOS 3 / HyperOS 2',
    tagline: 'Leica renk bilimi, kızılötesi evrensel kumanda ve yüksek watt HyperCharge.',
    ecosystemSummary:
      'Xiaomi, Redmi ve POCO alt markalarını birleştiren HyperOS çekirdeği; İkinci Alan, IR kumanda, bellek genişletme ve donanım CIT menüsüyle teknik kullanıcılara geniş kontrol sağlar.',
    accentHex: '#EA580C',
    foundedYear: 2010,
    osHiddenFeatures: [
      {
        id: 'xiaomi-second-space',
        title: 'İkinci Alan (Second Space)',
        category: 'Güvenlik',
        howToAccess: 'Ayarlar > Ek Ayarlar > İkinci Alan',
        description:
          'Aynı telefonda farklı parmak izi veya şifreyle açılan tamamen bağımsız ikinci bir telefon ortamı yaratır. Dosyalar, fotoğraflar ve uygulamalar birbirinden ayrılır.'
      },
      {
        id: 'xiaomi-video-toolbox',
        title: 'Ekran Kapalıyken Video Sesi Dinleme (Kenar Çubuğu)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Ek Ayarlar > Kayan Pencereler > Kenar Çubuğu > Video Uygulamaları',
        description:
          'YouTube veya tarayıcıdaki videoları ekran tamamen kilitliyken arka planda ses olarak çalmaya devam ettirir.'
      },
      {
        id: 'xiaomi-dual-apps',
        title: 'Çift Uygulama (Dual Apps) ve Gizli Uygulamalar',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Uygulamalar > Çift Uygulamalar / Güvenlik Uygulaması > Uygulamaları Gizle',
        description:
          'WhatsApp, Instagram veya banka uygulamalarının bağımsız ikinci kopyasını çalıştırır; ana ekranda iki parmağı dışa kaydırarak gizli uygulamalar kasasını açabilirsiniz.'
      },
      {
        id: 'xiaomi-ir-remote',
        title: 'Kızılötesi (IR) Evrensel Kumanda',
        category: 'Verimlilik',
        howToAccess: 'Mi Kumanda uygulaması (Üst kızılötesi verici)',
        description:
          'İnternet bağlantısı olmadan klima, TV, projektör, set-top box ve ses sistemlerini doğrudan telefonun üst kısmındaki kızılötesi sensörle kontrol eder.'
      },
      {
        id: 'xiaomi-heart-rate',
        title: 'Ekran İçi Parmak İziyle Nabız Ölçümü',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ek Ayarlar > Nabız (Desteklenen AMOLED modellerde)',
        description:
          'Optik parmak izi sensörünün ışığını kullanarak parmağınızı 15 saniye basılı tuttuğunuzda kalp atış hızınızı ölçer.'
      },
      {
        id: 'xiaomi-memc',
        title: 'Yapay Zeka Görüntü Motoru (MEMC & Süper Çözünürlük)',
        category: 'Kamera',
        howToAccess: 'Ayarlar > Ekran > Yapay Zeka Görüntü Motoru',
        description:
          'Düşük FPS’li videolara ara kare ekleyerek akıcılığı artırır ve düşük çözünürlüklü içerikleri keskinleştirir.'
      }
    ],
    secretCodes: [
      {
        code: '*#*#6484#*#*',
        title: 'CIT Donanım Mühendislik Test Menüsü',
        description:
          'Xiaomi/Redmi/POCO cihazlarda ekran, sensörler, GPS, hoparlör, şarj hızı ve tüm kamera lenslerini test eden tam fabrika teşhis menüsü.'
      },
      {
        code: '*#*#6485#*#*',
        title: 'Pil Sağlığı ve Şarj Döngüsü Detayı (MB_06 / MF_02)',
        description:
          'Gerçek şarj döngü sayısını (MF_02), fabrika tasarım kapasitesini (MF_05) ve güncel tahmini kalan kapasiteyi (MF_06) mAh olarak gösterir.'
      },
      {
        code: '*#*#4636#*#*',
        title: 'Radyo, 5G Bant ve Kullanım İstatistikleri',
        description: 'Şebeke türünü kilitleme (ör. sadece LTE/5G), sinyal kalitesi ve pil/Wi-Fi tanılama bilgilerini açar.'
      }
    ]
  },
  {
    id: 'huawei',
    name: 'Huawei',
    country: 'Çin',
    osName: 'HarmonyOS Next / EMUI 15',
    tagline: 'Değişken fiziksel diyafram, XMAGE optik ve SuperHub dosya transferi.',
    ecosystemSummary:
      'Ultra hızlı çoklu cihaz iş birliği (Super Device), değişken mekanik diyaframlı XMAGE kameralar ve düşük pil tüketimli EMUI/HarmonyOS optimizasyonlarıyla tanınır.',
    accentHex: '#DC2626',
    foundedYear: 1987,
    osHiddenFeatures: [
      {
        id: 'huawei-superhub',
        title: 'SuperHub (Sürükle-Bırak Evrensel Pano)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Erişilebilirlik Özellikleri > SuperHub',
        description:
          'Metin, görsel ve dosyaları ekran kenarındaki geçici havuza sürükleyip toplayarak tek seferde başka uygulamaya veya Huawei bilgisayara aktarabilirsiniz.'
      },
      {
        id: 'huawei-knuckle-gestures',
        title: 'Eklem Hareketleri (Knuckle Gestures)',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Erişilebilirlik Özellikleri > Kısayollar ve Hareketler',
        description:
          'Parmağınızın eklemiyle ekrana "S" çizerek kayan ekran görüntüsü, çift tıklayarak ekran görüntüsü veya iki eklemle vurarak ekran kaydı başlatabilirsiniz.'
      },
      {
        id: 'huawei-privatespace',
        title: 'PrivateSpace (Gizli Alan)',
        category: 'Güvenlik',
        howToAccess: 'Ayarlar > Gizlilik > PrivateSpace',
        description:
          'Kilit ekranında farklı bir parmak iziyle girildiğinde tamamen ayrı, izole bir kullanıcı profili açar.'
      },
      {
        id: 'huawei-privacy-strip',
        title: 'Fotoğraf Paylaşırken Konum ve Exif Silme',
        category: 'Güvenlik',
        howToAccess: 'Galeri > Paylaş > Gizlilik Seçenekleri',
        description:
          'Fotoğrafı WhatsApp veya e-posta ile göndermeden tek dokunuşla çekim konumu ve kamera bilgilerini dosyadan temizler.'
      }
    ],
    secretCodes: [
      {
        code: '*#*#2846579#*#*',
        title: 'ProjectMenu (Huawei Mühendislik Menüsü)',
        description:
          'Arka plan ayarları, yazılım sürüm bilgisi, ağ durumu, pil şarj sıcaklığı ve donanım bilgi dökümünü açar.'
      },
      {
        code: '*#*#6130#*#*',
        title: 'Telefon, Pil ve Wi-Fi Test Menüsü',
        description: 'Şebeke sinyali, hücre kulesi bilgileri ve Wi-Fi bağlantı kalitesi verilerini görüntüler.'
      }
    ]
  },
  {
    id: 'oppo',
    name: 'OPPO',
    country: 'Çin',
    osName: 'ColorOS 16 / ColorOS 15',
    tagline: 'Hasselblad renk kalibrasyonu, SuperVOOC şarj ve File Dock akıllı pano.',
    ecosystemSummary:
      'ColorOS’in akıcı paralel animasyon motoru, Trinity Engine kaynak planlayıcısı ve Hasselblad portre simülasyonlarıyla öne çıkar.',
    accentHex: '#059669',
    foundedYear: 2004,
    osHiddenFeatures: [
      {
        id: 'oppo-file-dock',
        title: 'Akıllı Kenar Çubuğu & Dosya Yuvası (File Dock)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Özel Özellikler > Akıllı Kenar Çubuğu',
        description:
          'Tarayıcı veya sohbet uygulamalarından sürüklediğiniz görsel/metinleri kenar yuvasında biriktirip cihazlar arası senkronize eder.'
      },
      {
        id: 'oppo-three-finger-translate',
        title: 'Üç Parmakla Anlık Çeviri ve Kısmi Ekran Görüntüsü',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Ek Ayarlar > Ekran Görüntüsü',
        description:
          'Ekrana üç parmakla basılı tutarak yalnızca seçtiğiniz bölgeyi kırpabilir ve üzerindeki yabancı metni anında çevirebilirsiniz.'
      },
      {
        id: 'oppo-auto-pixelate',
        title: 'Sohbet Ekran Görüntüsünde Otomatik İsim/Avatar Sansürleme',
        category: 'Güvenlik',
        howToAccess: 'Ekran görüntüsü sonrası önizleme > Pikselleştir > Otomatik',
        description:
          'WhatsApp veya Messenger ekran görüntüsü aldığınızda profil fotoğraflarını ve kişi isimlerini yapay zeka ile tek dokunuşta bulanıklaştırır.'
      }
    ],
    secretCodes: [
      {
        code: '*#899#',
        title: 'EngineerMode (OPPO Donanım Test Paneli)',
        description:
          'Manuel test, otomatik test, dokunmatik kalibrasyonu, şarj akımı ölçümü ve yazılım sürüm detaylarını içerir.'
      },
      {
        code: '*#808#',
        title: 'Detaylı Bileşen Test Menüsü',
        description: 'Sensör, ekran, ses ve kamera alt sistemlerinin tek tek doğrulanmasını sağlar.'
      }
    ]
  },
  {
    id: 'vivo',
    name: 'vivo',
    country: 'Çin',
    osName: 'Funtouch OS 16 / OriginOS 6',
    tagline: 'ZEISS T* lens kaplaması, özel V3+ görüntüleme çipi ve 200MP APO telefoto.',
    ecosystemSummary:
      'Özel görüntü işleme NPU yongaları, ZEISS Biotar/Sonnar bokeh profilleri ve yüksek kapasiteli silikon-karbon pilleriyle fotoğrafçılık odaklıdır.',
    accentHex: '#2563EB',
    foundedYear: 2009,
    osHiddenFeatures: [
      {
        id: 'vivo-zeiss-bokeh',
        title: 'ZEISS Sinematik & Biotar Portre Lens Simülasyonu',
        category: 'Kamera',
        howToAccess: 'Kamera > Portre > Lens Stili simgesi',
        description:
          'Efsanevi ZEISS Biotar, Sonnar, Planar ve Distagon lenslerinin optik girdap bokeh ve anamorfik ışık izlerini gerçek zamanlı simüle eder.'
      },
      {
        id: 'vivo-super-raw',
        title: 'SuperRAW ve Log Video ile V3 Çip Ön İzleme',
        category: 'Kamera',
        howToAccess: 'Kamera > Pro Modu > Sağ üst RAW / Video > Log',
        description:
          '14-bit RAW çekimde çok kareli gürültü azaltmayı korurken renk düzenleme esnekliği sunar.'
      },
      {
        id: 'vivo-app-pinning',
        title: 'Gelişmiş Uygulama Kilidi ve Dinamik Bellek Ayrıştırma',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Güvenlik > Gizlilik ve Uygulama Şifreleme',
        description:
          'Uygulamaları gizlemenin yanı sıra parmak izi animasyonunu, USB takma animasyonunu ve yüz tanıma efektlerini özelleştirmenizi sağlar.'
      }
    ],
    secretCodes: [
      {
        code: '*#*#4838#*#*',
        title: 'vivo Telefon, Pil ve Kullanım İstatistikleri',
        description: 'Şebeke türü, pil voltajı, sıcaklık ve sinyal kalitesi metriklerini açar.'
      },
      {
        code: '*#558#',
        title: 'vivo Mühendislik Kalite Test Menüsü',
        description: 'Fabrika kalite doğrulama testlerine ve sensör kalibrasyon ekranlarına erişir.'
      }
    ]
  },
  {
    id: 'oneplus',
    name: 'OnePlus',
    country: 'Çin',
    osName: 'OxygenOS 16 / OxygenOS 15',
    tagline: 'Fiziksel Alert Slider anahtarı, Aqua Touch ıslak ekran ve sıfır gecikmeli akıcılık.',
    ecosystemSummary:
      'Yan çerçevedeki fiziksel bildirim kontrolü, yağmur altında dahi çalışan Aqua Touch ve 100W–120W SuperVOOC şarjla hız odaklıdır.',
    accentHex: '#E11D48',
    foundedYear: 2013,
    osHiddenFeatures: [
      {
        id: 'oneplus-aqua-touch',
        title: 'Aqua Touch (Islak Ekran ve Eldiven Hassasiyeti)',
        category: 'Sistem',
        howToAccess: 'Varsayılan olarak aktif / Ayarlar > Ekran > Eldiven Modu',
        description:
          'Ekranda su damlaları varken yanlış dokunmaları filtreleyen özel kapasitif algoritma sayesinde yağmurda sorunsuz yazabilirsiniz.'
      },
      {
        id: 'oneplus-zen-space',
        title: 'Zen Space (Derin Odaklanma Kilidi)',
        category: 'Verimlilik',
        howToAccess: 'Hızlı Ayarlar > Zen Space veya Uygulama Çekmecesi',
        description:
          'Belirlenen süre boyunca yalnızca kamera ve acil aramaya izin vererek telefonu dijital detoks moduna kilitler.'
      },
      {
        id: 'oneplus-open-canvas',
        title: 'Open Canvas Çoklu Görev & Üçlü Uygulama Bölme',
        category: 'Verimlilik',
        howToAccess: 'Son Uygulamalar > Bölünmüş Ekran / Kayan Pencere',
        description:
          'Bölünmüş ekranda pencereleri ekran dışına taşan tuval gibi kaydırarak küçük ekranda bile tam boyutlu çoklu görev sağlar.'
      }
    ],
    secretCodes: [
      {
        code: '*#899#',
        title: 'OnePlus EngineerMode Donanım Testi',
        description: 'Ekran dokunmatik, sensör, kamera, şarj akımı ve ses bileşenlerini kapsamlı test eder.'
      },
      {
        code: '*#808#',
        title: 'Bileşen Bazlı Tanılama Menüsü',
        description: 'Jiroskop, yakınlık sensörü, NFC ve titreşim motoru testlerini açar.'
      }
    ]
  },
  {
    id: 'google',
    name: 'Google Pixel',
    country: 'ABD',
    osName: 'Saf Android 16 / Android 15 (Pixel UI)',
    tagline: 'Tensor yapay zeka işlemcisi, 7 yıl güncelleme garantisi ve hesaplamalı fotoğrafçılık.',
    ecosystemSummary:
      'Android’in referans cihazı olarak en yeni işletim sistemi özelliklerini ilk alan seri; Now Playing, Call Screen, Best Take ve termometre sensörü gibi benzersiz araçlar sunar.',
    accentHex: '#0284C7',
    foundedYear: 2016,
    osHiddenFeatures: [
      {
        id: 'pixel-now-playing',
        title: 'Now Playing (Çevrimdışı Ortam Müziği Tanıma)',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ses ve Titreşim > Şimdi Çalınıyor',
        description:
          'İnternet bağlantısı veya buluta ses göndermeden cihaz içi veritabanıyla kafede/sokakta çalan şarkıyı kilit ekranında otomatik gösterir.'
      },
      {
        id: 'pixel-quick-tap',
        title: 'Hızlı Dokunma (Quick Tap) ve El Feneri Parlaklık Ayarı',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Sistem > Hareketler > Hızlı Dokunma',
        description:
          'Arka kapağa çift dokunarak seçili uygulamayı açar; ayrıca Hızlı Ayarlar’daki El Feneri kutucuğuna uzun basarak ışık şiddetini kademeli ayarlayabilirsiniz.'
      },
      {
        id: 'pixel-audio-eraser',
        title: 'Sesli Sihirli Silgi (Audio Magic Eraser)',
        category: 'Kamera',
        howToAccess: 'Google Fotoğraflar > Video > Düzenle > Ses > Sesli Silgi',
        description:
          'Videolardaki rüzgar, trafik, kalabalık gürültüsü ve konuşma seslerini ayrı kanallara ayırıp sadece istenmeyen sesleri kısar.'
      },
      {
        id: 'pixel-rules',
        title: 'Konum/Wi-Fi Bazlı Otomatik Kurallar',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Sistem > Kurallar',
        description:
          'Belirli bir Wi-Fi ağına bağlandığınızda veya eve ulaştığınızda telefonu otomatik sessize/titreşime alır.'
      }
    ],
    secretCodes: [
      {
        code: '*#*#7287#*#*',
        title: 'Pixel Diagnostics (Resmi Google Donanım Tanılama)',
        description:
          'Pixel cihazlarda parça değişimi öncesi/sonrası tüm sensörleri, dokunmatiği, pilleri ve kameraları doğrulayan resmi Google tanılama aracı.'
      },
      {
        code: '*#*#4636#*#*',
        title: 'Android Test & Şebeke Bandı Menüsü',
        description: '5G NR / LTE sinyal detaylarını, pil kullanımını ve Wi-Fi API bilgilerini gösterir.'
      }
    ]
  },
  {
    id: 'honor',
    name: 'HONOR',
    country: 'Çin',
    osName: 'MagicOS 9 / MagicOS 8',
    tagline: 'Göz dostu 4320Hz PWM karartma, Magic Portal sürükle-bırak ve silikon-karbon pil.',
    ecosystemSummary:
      'Ultra yüksek frekanslı PWM göz koruma ekranları, Magic Portal niyet tabanlı yapay zeka yönlendirmesi ve ince gövdelere sığan yüksek yoğunluklu pillerle ayrışır.',
    accentHex: '#0F766E',
    foundedYear: 2013,
    osHiddenFeatures: [
      {
        id: 'honor-magic-portal',
        title: 'Magic Portal (Sürükleyerek Uygulama Tetikleme)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Asistan > Magic Portal',
        description:
          'Herhangi bir metin, adres veya fotoğrafı parmağınızla ekran kenarına sürüklediğinizde Haritalar, Alışveriş veya E-posta uygulamasına doğrudan aktarır.'
      },
      {
        id: 'honor-eye-comfort',
        title: 'Sirkadiyen Gece Ekranı ve 4320Hz PWM Göz Koruması',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ekran ve Parlaklık > Göz Konforu',
        description:
          'Akşam saatlerinde melatonin salınımını korumak için renk sıcaklığını biyolojik saate göre ayarlar ve ekran titremesini algılanamaz seviyeye indirir.'
      },
      {
        id: 'honor-ai-privacy-call',
        title: 'Yapay Zeka Gizlilik Araması (Ses Sızıntısı Önleme)',
        category: 'Güvenlik',
        howToAccess: 'Arama ekranında ses kısma tuşuyla Gizlilik Modu',
        description:
          'Asansör veya sessiz ortamlarda ahize sesini yalnızca kulağa yönlendirerek yanınızdakilerin karşı tarafı duymasını engeller.'
      }
    ],
    secretCodes: [
      {
        code: '*#*#2846579#*#*',
        title: 'HONOR ProjectMenu Mühendislik Paneli',
        description: 'Donanım bilgisi, ağ durumu ve yazılım bileşenlerini kontrol etme menüsü.'
      },
      {
        code: '*#*#6130#*#*',
        title: 'Şebeke ve Pil Bilgisi',
        description: 'Anlık mobil ağ ve Wi-Fi bağlantı metriklerini listeler.'
      }
    ]
  },
  {
    id: 'nothing',
    name: 'Nothing',
    country: 'İngiltere',
    osName: 'Nothing OS 3.0',
    tagline: 'Programlanabilir Glyph LED arayüzü, şeffaf tasarım ve saf noktavuruşlu arayüz.',
    ecosystemSummary:
      'Arka yüzeydeki çok bölgeli Glyph LED ışık şeritlerini bildirim, zamanlayıcı, ses göstergesi ve ilerleme çubuğu olarak kullanan minimalist bir deneyim sunar.',
    accentHex: '#52525B',
    foundedYear: 2020,
    osHiddenFeatures: [
      {
        id: 'nothing-glyph-progress',
        title: 'Glyph İlerleme Çubuğu ve Temel Bildirimler (Essential)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Glyph Arayüzü > Glyph İlerleme / Essential Bildirimler',
        description:
          'Telefon yüzüstü dururken yalnızca seçili kişi veya uygulamadan mesaj geldiğinde tek bir LED şeridi sürekli yanık bırakır; zamanlayıcıyı ışık uzunluğuyla gösterir.'
      },
      {
        id: 'nothing-glyph-composer',
        title: 'Glyph Composer & Müzik Senkronizasyonu',
        category: 'Sistem',
        howToAccess: 'Glyph Composer uygulaması / Ayarlar > Glyph > Müzik Görselleştirme',
        description:
          'Kendi zil sesinizi ve ışık koreografinizi oluşturabilir veya çalan müziğe göre arka LED’lerin ritim tutmasını sağlayabilirsiniz.'
      },
      {
        id: 'nothing-flip-to-glyph',
        title: 'Ters Çevirerek Sessize Alma (Flip to Glyph)',
        category: 'Güvenlik',
        howToAccess: 'Ayarlar > Glyph Arayüzü > Flip to Glyph',
        description:
          'Telefonu masaya yüzüstü koyduğunuz anda sesi keser ve tüm bildirimleri yalnızca sessiz ışık darbeleriyle iletir.'
      }
    ],
    secretCodes: [
      {
        code: '*#*#0*#*#*',
        title: 'Nothing Test Menüsü',
        description: 'Glyph LED şeritleri, ekran, sensörler ve kamera donanımını test eder.'
      },
      {
        code: '*#*#4636#*#*',
        title: 'Android Şebeke & Test Bilgisi',
        description: '5G/LTE bağlantı kalitesi ve pil kullanım detaylarını açar.'
      }
    ]
  },
  {
    id: 'sony',
    name: 'Sony',
    country: 'Japonya',
    osName: 'Xperia UI (Android 15)',
    tagline: 'Alpha fotoğraf makinesi arayüzü, 3.5mm kulaklık jakı, microSD ve harici monitör.',
    ecosystemSummary:
      'Amiral gemilerinde hâlâ 3.5mm Hi-Res kulaklık jakı, aletsiz SIM/microSD tepsisi, iki kademeli fiziksel deklanşör tuşu ve Sony Alpha kameralar için harici monitör özelliği sunar.',
    accentHex: '#18181B',
    foundedYear: 1946,
    osHiddenFeatures: [
      {
        id: 'sony-external-monitor',
        title: 'Sony Alpha / HDMI Kameralar İçin Harici 4K Monitör & Canlı Yayın',
        category: 'Kamera',
        howToAccess: 'Harici Monitör uygulaması (USB-C UVC girişi)',
        description:
          'Aynasız fotoğraf makinelerine USB-C ile bağlanarak telefonu Waveform, False Color ve Zebra destekli profesyonel saha monitörüne dönüştürür.'
      },
      {
        id: 'sony-hs-power',
        title: 'H.S. Power Control (Şarjda Pili Atlayarak Isınmayı Önleme)',
        category: 'Batarya',
        howToAccess: 'Game Enhancer > H.S. Güç Kontrolü',
        description:
          'Kablo takılıyken pili şarj etmeden doğrudan anakarta güç verir; uzun oyun veya video kayıtlarında pil sağlığını korur.'
      },
      {
        id: 'sony-half-shutter',
        title: 'İki Kademeli Fiziksel Deklanşör Tuşu',
        category: 'Kamera',
        howToAccess: 'Sağ alt kenardaki tırtıklı fiziksel deklanşör tuşu',
        description:
          'Ekran kapalıyken basılı tutulduğunda kamerayı anında açar; yarım basışta göz takibiyle netler, tam basışta saniyede 30 kare seri çekim yapar.'
      }
    ],
    secretCodes: [
      {
        code: '*#*#7378423#*#*',
        title: 'Sony Service Menu (S-E-R-V-I-C-E)',
        description:
          'Basınç sensörüyle su geçirmezlik testi (Pressure Sensor), ekran, kamera, bootloader durumu ve pil sağlık kapasitesini gösterir.'
      }
    ]
  },
  {
    id: 'asus',
    name: 'ASUS',
    country: 'Tayvan',
    osName: 'ROG UI / ZenUI (Android 15)',
    tagline: 'AirTrigger ultrasonik omuz tuşları, çift USB-C portu ve X Mode termal kontrolü.',
    ecosystemSummary:
      'Oyun ve güç kullanıcıları için yan çerçevede ek USB-C şarj portu, ultrasonik dokunmatik omuz tetikleri ve detaylı CPU/GPU frekans yönetimi sunar.',
    accentHex: '#B91C1C',
    foundedYear: 1989,
    osHiddenFeatures: [
      {
        id: 'asus-airtriggers',
        title: 'AirTrigger Ultrasonik Tetikler ve Çerçeve Sıkma Hareketleri',
        category: 'Verimlilik',
        howToAccess: 'Armoury Crate > AirTriggers veya Ayarlar > Gelişmiş > AirTriggers',
        description:
          'Oyunlarda L1/R1 omuz tuşu gibi çalışır; günlük kullanımda ise telefonu sıkarak el feneri açma veya sessize alma kısayolu atayabilirsiniz.'
      },
      {
        id: 'asus-xmode-manual',
        title: 'Gelişmiş Termal ve CPU/GPU Voltaj Profili (Hardcore Tuning)',
        category: 'Geliştirici',
        howToAccess: 'Armoury Crate > Konsol > X Mode > Özelleştir',
        description:
          'Root gerekmeden işlemci çekirdek hızlarını, termal eşiği ve yenileme hızını oyun bazında tek tek yapılandırabilirsiniz.'
      },
      {
        id: 'asus-bypass-charging',
        title: 'Bypass Charging (Doğrudan Besleme)',
        category: 'Batarya',
        howToAccess: 'Game Genie > Şarj Modu > Doğrudan Besleme / Ayarlar > Pil',
        description:
          'Alt veya yan USB-C portundan şarj olurken pili tamamen devre dışı bırakarak batarya ısınmasını engeller.'
      }
    ],
    secretCodes: [
      {
        code: '.12345+=',
        title: 'ASUS SMMI Test (Hesap Makinesi İçinden)',
        description:
          'ASUS stok Hesap Makinesi uygulamasına ".12345+=" yazıp eşittire basıldığında tüm donanım testlerini (SMMI) açar.'
      }
    ]
  },
  {
    id: 'realme',
    name: 'realme',
    country: 'Çin',
    osName: 'realme UI 6.0 / 5.0',
    tagline: 'Yüksek watt SuperVOOC şarj, GT performans modu ve su altı fotoğrafçılık modu.',
    ecosystemSummary:
      'Fiyat-performans dengesini agresif şarj hızları, GT Mode işlemci kilidi kaldırma ve ColorOS tabanlı akıcı realme UI özellikleriyle birleştirir.',
    accentHex: '#D97706',
    foundedYear: 2018,
    osHiddenFeatures: [
      {
        id: 'realme-gt-mode',
        title: 'GT Mode ve Geek Performance Paneli',
        category: 'Geliştirici',
        howToAccess: 'Hızlı Ayarlar > GT Modu / Oyun İçi Araç Kutusu',
        description:
          'CPU/GPU saat hızlarını maksimuma sabitler, dokunmatik örnekleme hızını artırır ve oyun sırasında çekirdek frekanslarını canlı ayarlamanızı sağlar.'
      },
      {
        id: 'realme-underwater-mode',
        title: 'IP69 Su Altı Fotoğraf Modu & Hoparlör Su Tahliyesi',
        category: 'Kamera',
        howToAccess: 'Kamera > Daha Fazla > Su Altı Modu (Desteklenen IP68/69 modellerde)',
        description:
          'Su altında dokunmatik ekranı devre dışı bırakıp ses tuşlarıyla fotoğraf/video çektirir; çıkışta hoparlördeki suyu ses titreşimiyle atar.'
      },
      {
        id: 'realme-air-gestures',
        title: 'Temassız Hava Hareketleri (Air Gestures)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Özel Özellikler > Hava Hareketleri',
        description:
          'Elleriniz kirli veya ıslakken ön kamera önünde elinizi sallayarak video kaydırma, çağrı yanıtlama veya sessize alma yapabilirsiniz.'
      }
    ],
    secretCodes: [
      {
        code: '*#899#',
        title: 'realme EngineerMode Test Paneli',
        description: 'Manuel ve otomatik donanım testleri, sensör doğrulaması ve şarj akımı bilgilerini açar.'
      },
      {
        code: '*#800#',
        title: 'Sistem Log ve Hata Bildirim Menüsü',
        description: 'Geliştirici düzeyinde ağ, pil ve kamera log kayıtlarını incelemenizi sağlar.'
      }
    ]
  },
  {
    id: 'nokia',
    name: 'Nokia',
    country: 'Finlandiya',
    osName: 'Series 30 / Symbian OS / Windows Phone',
    tagline: '2000’ler mobil devriminin dayanıklılık efsanesi, Carl Zeiss optikler ve PureView.',
    ecosystemSummary:
      '2000 sonrası dönemin en ikonik telefonlarını üreten Nokia; polikarbonat kırılmaz kasalar, Xpress-on kapaklar, Symbian çoklu görev ve 41 MP PureView sensörle tarihe geçti.',
    accentHex: '#1E40AF',
    foundedYear: 1865,
    osHiddenFeatures: [
      {
        id: 'nokia-netmonitor',
        title: 'Nokia NetMonitor (Gizli Şebeke & Hücre Mühendislik Ekranı)',
        category: 'Geliştirici',
        howToAccess: 'Symbian/DCT-4 modellerde servis kablosu veya FTD menüsü',
        description:
          'Bağlı baz istasyonu kanallarını, sinyal dBm değerini, batarya sıcaklığını ve el değiştirme (handover) verilerini gerçek zamanlı gösterir.'
      },
      {
        id: 'nokia-lifetimer',
        title: 'Değiştirilemez Toplam Konuşma Süresi (Life Timer)',
        category: 'Sistem',
        howToAccess: 'Arama ekranında *#92702689# kodunu tuşlayın',
        description:
          'Telefonun üretim tarihini, fabrika seri numarasını ve sıfırlanamayan toplam arama süresini gösterir; ikinci el kontrolü için kullanılırdı.'
      }
    ],
    secretCodes: [
      {
        code: '*#0000#',
        title: 'Nokia Yazılım Sürümü ve Üretim Tarihi',
        description: 'Symbian ve S40 cihazlarda kurulu yazılım versiyonunu ve dil paketini gösterir.'
      },
      {
        code: '*#92702689#',
        title: 'Warranty Menu & Life Timer (*#WAR0ANTY#)',
        description: 'Toplam konuşma süresi (Life Timer), satın alma tarihi ve tamir kaydı bilgilerini listeler.'
      },
      {
        code: '*#7370#',
        title: 'Symbian Tam Fabrika Formatı (Deep Reset)',
        description: 'Symbian cihazları fabrika ayarlarına döndürür.',
        caution: 'Tüm kullanıcı verilerini anında siler!'
      }
    ]
  },
  {
    id: 'motorola',
    name: 'Motorola',
    country: 'ABD',
    osName: 'P2K OS / MyUX / Hello UI',
    tagline: 'Ultra ince kapaklı RAZR V3 mirası, Moto Hareketleri ve Ready For masaüstü.',
    ecosystemSummary:
      '2004’te RAZR V3 ile kapaklı telefon tasarımını yeniden tanımladı; günümüzde ise "iki kez salla el feneri aç" Moto Hareketleri ve ThinkShield güvenliğiyle saf Android deneyimi sunar.',
    accentHex: '#0369A1',
    foundedYear: 1928,
    osHiddenFeatures: [
      {
        id: 'moto-chop-flashlight',
        title: 'İki Kez Çırparak El Feneri / Bilek Çevirerek Kamera',
        category: 'Verimlilik',
        howToAccess: 'Moto Uygulaması > Hareketler > Hızlı Fener & Hızlı Çekim',
        description:
          'Telefonu kesme hareketiyle iki kez sallayarak el fenerini, bileğinizi iki kez çevirerek kamerayı ekran kilidi açılmadan tetikler.'
      },
      {
        id: 'moto-ready-for',
        title: 'Ready For (Smart Connect) Kablosuz Masaüstü & Webcam',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Bağlı Cihazlar > Smart Connect',
        description:
          'Telefonu monitöre bağlayarak tam masaüstü ortamına dönüştürür veya bilgisayarınız için yüksek kaliteli harici webcam olarak kullanır.'
      }
    ],
    secretCodes: [
      {
        code: '*#*#2486#*#*',
        title: 'CQATest (Motorola Donanım Test Menüsü)',
        description: 'Sensör, ekran, ses, pil sıcaklığı ve hoparlör test modlarını çalıştırır.'
      },
      {
        code: '*#*#4636#*#*',
        title: 'Android Test ve Ağ Bilgisi',
        description: 'Pil durumu, 5G/LTE sinyal kalitesi ve kullanım istatistiklerini gösterir.'
      }
    ]
  },
  {
    id: 'blackberry',
    name: 'BlackBerry',
    country: 'Kanada',
    osName: 'BlackBerry OS 7 / BB10',
    tagline: 'Fiziksel QWERTY klavye kısayolları, BBM şifreli mesajlaşma ve trackpad hassasiyeti.',
    ecosystemSummary:
      '2000’ler ve 2010’ların başında iş dünyasının vazgeçilmezi olan BlackBerry; donanımsal tuş kısayolları, optik trackpad ve BlackBerry Hub ile hız sembolüydü.',
    accentHex: '#334155',
    foundedYear: 1984,
    osHiddenFeatures: [
      {
        id: 'bb-alt-nmll',
        title: 'Gerçek Sinyal dBm Göstergesi ve Sistem Kısayolları',
        category: 'Sistem',
        howToAccess: 'Ana ekranda ALT + N + M + L + L tuş kombinasyonu',
        description:
          'Sinyal çubuğunu doğrudan desibel (dBm) rakamına dönüştürür; ayrıca ana ekranda tek harfe basarak (C: Oluştur, L: Takvim, M: Mesajlar) anında işlem başlatır.'
      },
      {
        id: 'bb-escreen',
        title: 'Mühendislik Ekranı (Engineering Screen - eScreen)',
        category: 'Geliştirici',
        howToAccess: 'Ana ekranda ALT + Shift (Sağ) + H tuşlarına basarak PIN kodunu al',
        description:
          'CPU sıcaklığı, RAM haritası, JVM bellek dökümü ve radyo teşhis ekranına erişim sağlar.'
      }
    ],
    secretCodes: [
      {
        code: '*#06#',
        title: 'IMEI & PIN Kontrolü',
        description: 'Cihazın IMEI numarasını anında gösterir.'
      }
    ]
  },
  {
    id: 'htc',
    name: 'HTC',
    country: 'Tayvan',
    osName: 'Windows Mobile / HTC Sense (Android)',
    tagline: 'İlk Android telefon üreticisi, BoomSound ön stereo hoparlörler ve yekpare alüminyum.',
    ecosystemSummary:
      'Dünyanın ilk ticari Android telefonu HTC Dream’den (2008) yekpare metal gövdeli HTC One M7’ye kadar mobil tasarımda öncülük etti.',
    accentHex: '#15803D',
    foundedYear: 1997,
    osHiddenFeatures: [
      {
        id: 'htc-edge-sense',
        title: 'Edge Sense (Çerçeve Sıkma Basınç Sensörü)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Edge Sense',
        description:
          'Telefonun alt yan kenarlarını sıkarak fotoğraf çekme, sesli asistan başlatma veya tek el moduna geçme imkanı sunar.'
      }
    ],
    secretCodes: [
      {
        code: '*#*#3424#*#*',
        title: 'HTC Function Test Menüsü',
        description: 'LED, dokunmatik, G-sensör, kamera ve BoomSound ses sistemini test eder.'
      }
    ]
  },
  {
    id: 'lg',
    name: 'LG',
    country: 'Güney Kore',
    osName: 'LG UX (Android)',
    tagline: '32-bit Hi-Fi Quad DAC ses çipi, arka güç tuşu ve Knock Code ekran kilidi.',
    ecosystemSummary:
      'Kablolu kulaklıklar için audiophile sınıfı Quad DAC amfi, ultra geniş açı kamerayı ana akıma taşıyan G5/V30 ve çift ekran/Wing gibi cesur tasarımlarıyla hatırlanır.',
    accentHex: '#9D174D',
    foundedYear: 1958,
    osHiddenFeatures: [
      {
        id: 'lg-knock-code',
        title: 'Knock Code (Kapalı Ekranda Görünmez Desen Tıklaması)',
        category: 'Güvenlik',
        howToAccess: 'Ayarlar > Kilit Ekranı > Kilit Seçimi > Knock Code',
        description:
          'Ekran tamamen kapalıyken hayali 4 kadran üzerine belirli sırayla 6–8 dokunuş yaparak ekranı tek seferde açar.'
      },
      {
        id: 'lg-quad-dac',
        title: '32-bit Hi-Fi Quad DAC Yüksek Empedans Modu',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Ses > Ses Kalitesi ve Efektler > Hi-Fi Quad DAC',
        description:
          '50 Ohm üzeri stüdyo kulaklıkları algıladığında amfi kazancını otomatik yükselterek kayıpsız stüdyo kalitesinde ses verir.'
      }
    ],
    secretCodes: [
      {
        code: '*#546368#*300#',
        title: 'LG HiddenMenu (Model Numarasına Göre Değişir)',
        description:
          'LG V30/G serisi cihazlarda "300" yerine model numarası yazılarak (ör. H930 için *#546368#*930#) donanım test ve pil döngü menüsü açılır.'
      }
    ]
  },
  {
    id: 'tecno',
    name: 'TECNO',
    country: 'Çin',
    osName: 'HiOS 14 / HiOS 15',
    tagline: 'PolarAce görüntüleme çipi, uygun fiyatlı katlanabilir Phantom serisi ve HiOS araçları.',
    ecosystemSummary:
      'Türkiye ve gelişmekte olan pazarlarda güçlü olan TECNO; çift renkli LED bildirim ışıklı arka tasarımlar, Bypass Charging ve uygun fiyatlı katlanabilir Phantom V serisiyle öne çıkar.',
    accentHex: '#2563EB',
    foundedYear: 2006,
    osHiddenFeatures: [
      {
        id: 'tecno-bypass-charge',
        title: 'Oyunlarda Doğrudan Anakart Beslemesi (Bypass Charging)',
        category: 'Batarya',
        howToAccess: 'Oyun Alanı (Game Space) > Bypass Şarj',
        description:
          'Şarj kablosu takılıyken gücü pile yönlendirmeden doğrudan işlemciye verir; ısınmayı ve pil aşınmasını önler.'
      },
      {
        id: 'tecno-social-turbo',
        title: 'Social Turbo (WhatsApp Güzelleştirme & Arama Kaydı Yardımcıları)',
        category: 'Verimlilik',
        howToAccess: 'Ayarlar > Özel İşlevler > Social Turbo',
        description:
          'WhatsApp görüntülü görüşmelerinde portre ışığı, ses değiştirme ve okunmamış mesaj önizleme özellikleri sunar.'
      }
    ],
    secretCodes: [
      {
        code: '*#*#3646633#*#*',
        title: 'MediaTek EngineerMode',
        description: 'MediaTek işlemcili TECNO cihazlarda şebeke bandı, ses kazancı ve sensör test menüsünü açar.'
      }
    ]
  },
  {
    id: 'infinix',
    name: 'Infinix',
    country: 'Çin',
    osName: 'XOS 14 / XOS 15',
    tagline: 'All-Round FastCharge, Halo LED arka bildirim ışığı ve oyuncu odaklı GT serisi.',
    ecosystemSummary:
      'Yüksek Hz AMOLED ekranlar, Manyetik Kablosuz MagCharge ve XArena oyun performans motoruyla genç ve oyuncu odaklı modeller üretir.',
    accentHex: '#16A34A',
    foundedYear: 2013,
    osHiddenFeatures: [
      {
        id: 'infinix-bypass',
        title: 'Esnek Şarj Eşiği ve Bypass Şarj Modu',
        category: 'Batarya',
        howToAccess: 'XArena Oyun Merkezi > Bypass Şarj / Ayarlar > Pil Laboratuvarı',
        description:
          'Pil %20–%40 eşiğine geldiğinde şarjı durdurup doğrudan prizden güç çekerek oyun oynamanıza izin verir.'
      },
      {
        id: 'infinix-dynamic-bar',
        title: 'Dinamik Çubuk (Dynamic Bar) Bildirim Kapsülü',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Özel İşlevler > Dynamic Bar',
        description:
          'Ön kamera çevresinde şarj durumu, arama süresi ve yüz tanıma animasyonlarını kompakt biçimde gösterir.'
      }
    ],
    secretCodes: [
      {
        code: '*#87#',
        title: 'Infinix Fabrika Donanım Testi',
        description: 'Ekran, hoparlör, dokunmatik ve sensörlerin otomatik testini başlatır.'
      }
    ]
  },
  {
    id: 'nubia',
    name: 'ZTE / nubia (RedMagic)',
    country: 'Çin',
    osName: 'RedMagic OS 10 / MyOS',
    tagline: 'Dahili 23.000 RPM soğutma fanı, ekran altı görünmez kamera ve fiziksel omuz tetikleri.',
    ecosystemSummary:
      'RedMagic oyuncu telefonlarıyla kasa içinde gerçek hava soğutma fanı ve tam çentiksiz ekran altı kamera sunan performans markasıdır.',
    accentHex: '#DC2626',
    foundedYear: 1998,
    osHiddenFeatures: [
      {
        id: 'redmagic-charge-separation',
        title: 'Şarj Ayırma (Charge Separation) & Fan Devir Kontrolü',
        category: 'Batarya',
        howToAccess: 'Game Space (Kırmızı Yan Anahtar) > Şarj Ayırma & Soğutma Fanı',
        description:
          'Dahili fiziksel fanı manuel olarak yüksek devre alır ve oyun sırasında pili tamamen devreden çıkarıp prizden besler.'
      }
    ],
    secretCodes: [
      {
        code: '*#08*#',
        title: 'ZTE / nubia Donanım Test Menüsü',
        description: 'Fan hızı, dokunmatik örnekleme, omuz tetikleri ve ekran testlerini açar.'
      }
    ]
  },
  {
    id: 'general-mobile',
    name: 'General Mobile',
    country: 'Türkiye',
    osName: 'Saf Android / GM UI',
    tagline: 'Yerli üretim akıllı telefon modelleri, sade Android deneyimi ve erişilebilir donanım.',
    ecosystemSummary:
      'Türkiye merkezli üretim ve servis ağıyla GM serisi ve Phoenix 5G modelleriyle saf Android odaklı cihazlar sunar.',
    accentHex: '#0284C7',
    foundedYear: 2005,
    osHiddenFeatures: [
      {
        id: 'gm-stock-gestures',
        title: 'Kısayol Hareketleri ve Geliştirici GPU Hızlandırma',
        category: 'Sistem',
        howToAccess: 'Ayarlar > Sistem > Hareketler',
        description:
          'Güç tuşuna çift basarak hızlı kamera açma ve üç parmakla ekran görüntüsü alma kısayollarını içerir.'
      }
    ],
    secretCodes: [
      {
        code: '*#*#4636#*#*',
        title: 'Android Test ve Şebeke Menüsü',
        description: 'Mobil radyo, LTE/5G bantları ve pil kullanım bilgilerini gösterir.'
      }
    ]
  }
];
