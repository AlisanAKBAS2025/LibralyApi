# 📚 LibralyApi

LibralyApi, kişisel kütüphanenizi yönetmek için geliştirilmiş modern bir RESTful API'dir. Kitaplarınızı, yazarlarınızı ve kategorilerinizi kolayca organize edebilir, okuma durumlarınızı takip edebilirsiniz.

## 🚀 Özellikler

- ✅ **Kitap Yönetimi**: Kitap ekleme, güncelleme, silme ve listeleme
- 👤 **Yazar Yönetimi**: Yazar bilgilerini yönetme ve kitaplarla ilişkilendirme
- 🏷️ **Kategori Yönetimi**: Kategoriler oluşturma ve kitaplarla eşleştirme
- 📖 **Okuma Durumu Takibi**: TO_READ, READING, COMPLETED durumları
- ⭐ **Değerlendirme Sistemi**: Kitaplara puan verme ve yorum ekleme
- 🔗 **İlişkisel Veri Yapısı**: Prisma ORM ile güçlü ilişkisel veritabanı yönetimi
- 🎯 **TypeScript**: Tip güvenliği ve modern JavaScript özellikleri
- 🛡️ **Hata Yönetimi**: Merkezi hata yönetimi ve standart API yanıtları

## 🛠️ Teknoloji Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5
- **Dil**: TypeScript
- **ORM**: Prisma
- **Veritabanı**: PostgreSQL
- **Geliştirme**: Nodemon, ts-node

## 📋 Gereksinimler

- Node.js (v16 veya üzeri)
- PostgreSQL (v12 veya üzeri)
- npm veya yarn

## 🔧 Kurulum

### 1. Projeyi Klonlayın

```bash
git clone <repository-url>
cd LibralyApi
```

### 2. Bağımlılıkları Yükleyin

```bash
npm install
```

### 3. Ortam Değişkenlerini Ayarlayın

`.env` dosyasını oluşturun ve aşağıdaki değişkenleri ekleyin:

```env
# Ortam Ayarları
NODE_ENV=development

# Veritabanı Bağlantısı
DATABASE_URL="postgresql://kullanici:sifre@localhost:5432/veritabani_adi?schema=public"

# Server
PORT=3000
```

### 4. Veritabanını Hazırlayın

```bash
# Prisma migration'larını çalıştırın
npx prisma migrate dev

# Prisma Client'ı oluşturun
npx prisma generate
```

### 5. Uygulamayı Başlatın

**Geliştirme Modu:**

```bash
npm run dev
```

**Production Modu:**

```bash
npm run build
npm start
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.

## 📁 Proje Yapısı

```
LibralyApi/
├── src/
│   ├── config/          # Yapılandırma dosyaları
│   ├── controllers/     # İstek işleyicileri
│   ├── services/        # İş mantığı katmanı
│   ├── repository/      # Veritabanı erişim katmanı
│   ├── routers/         # API route tanımları
│   ├── middleware/      # Express middleware'leri
│   ├── utils/           # Yardımcı fonksiyonlar
│   └── app.ts           # Uygulama giriş noktası
├── prisma/
│   └── schema.prisma    # Veritabanı şeması
├── generated/           # Prisma Client çıktıları
├── .env                 # Ortam değişkenleri
├── tsconfig.json        # TypeScript yapılandırması
└── package.json         # Proje bağımlılıkları
```

## 🗄️ Veritabanı Şeması

### Book (Kitap)

- `id`: Benzersiz kimlik
- `name`: Kitap adı
- `pageCount`: Sayfa sayısı
- `publishYear`: Yayın yılı (opsiyonel)
- `status`: Okuma durumu (TO_READ, READING, COMPLETED)
- `rating`: Değerlendirme (1-5, opsiyonel)
- `review`: Yorum (opsiyonel)
- `author_id`: Yazar referansı
- `createdAt`: Oluşturulma tarihi
- `updatedAt`: Güncellenme tarihi

### Author (Yazar)

- `id`: Benzersiz kimlik
- `name`: Yazar adı
- `bio`: Biyografi (opsiyonel)
- `country`: Ülke (opsiyonel)

### Category (Kategori)

- `id`: Benzersiz kimlik
- `name`: Kategori adı

### BooksCategories (Kitap-Kategori İlişkisi)

- `id`: Benzersiz kimlik
- `book_id`: Kitap referansı
- `category_id`: Kategori referansı

## 🌐 API Endpoints

### Kitaplar

```
GET    /api/books           # Tüm kitapları listele
GET    /api/books/:id       # Belirli bir kitabı getir
POST   /api/books           # Yeni kitap ekle
PUT    /api/books/:id       # Kitap güncelle
DELETE /api/books/:id       # Kitap sil
```

### Yazarlar

```
GET    /api/authors         # Tüm yazarları listele
GET    /api/authors/:id     # Belirli bir yazarı getir
POST   /api/authors         # Yeni yazar ekle
PUT    /api/authors/:id     # Yazar güncelle
DELETE /api/authors/:id     # Yazar sil
```

### Kategoriler

```
GET    /api/categories      # Tüm kategorileri listele
GET    /api/categories/:id  # Belirli bir kategoriyi getir
POST   /api/categories      # Yeni kategori ekle
PUT    /api/categories/:id  # Kategori güncelle
DELETE /api/categories/:id  # Kategori sil
```

## 📝 Örnek İstekler

### Yeni Kitap Ekleme

```json
POST /api/books
Content-Type: application/json

{
  "name": "1984",
  "pageCount": 328,
  "publishYear": 1949,
  "status": "TO_READ",
  "author_id": 1
}
```

### Kitap Güncelleme

```json
PUT /api/books/1
Content-Type: application/json

{
  "status": "COMPLETED",
  "rating": 5,
  "review": "Muhteşem bir distopya romanı!"
}
```

### Yazar Ekleme

```json
POST /api/authors
Content-Type: application/json

{
  "name": "George Orwell",
  "bio": "İngiliz yazar ve gazeteci",
  "country": "İngiltere"
}
```

## 🔍 API Yanıt Formatı

Tüm API yanıtları standart bir formatta döner:

### Başarılı Yanıt

```json
{
  "success": true,
  "message": "İşlem başarılı",
  "data": { ... }
}
```

### Hata Yanıtı

```json
{
  "success": false,
  "message": "Hata mesajı",
  "error": "Detaylı hata açıklaması"
}
```

## 🧪 Geliştirme

### Mevcut Scriptler

```bash
npm run dev      # Geliştirme modunda çalıştır (hot-reload)
npm run build    # TypeScript'i derle
npm start        # Production modunda çalıştır
npm test         # Testleri çalıştır (henüz yapılandırılmadı)
```

### Prisma Komutları

```bash
npx prisma studio              # Veritabanı GUI'sini aç
npx prisma migrate dev         # Yeni migration oluştur
npx prisma generate            # Client'ı yeniden oluştur
npx prisma db push             # Şemayı veritabanına push et
npx prisma db seed             # Seed verilerini ekle
```

## 🏗️ Mimari

Proje, katmanlı mimari prensiplerine göre yapılandırılmıştır:

1. **Controller Katmanı**: HTTP isteklerini alır ve yanıt döner
2. **Service Katmanı**: İş mantığını içerir
3. **Repository Katmanı**: Veritabanı işlemlerini yönetir
4. **Utils Katmanı**: Yardımcı fonksiyonlar ve ortak kullanılan araçlar

Bu yapı, kodun test edilebilirliğini ve bakımını kolaylaştırır.

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch'i oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje ISC lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

LibralyApi, kişisel kütüphane yönetimini kolaylaştırmak amacıyla geliştirilmiştir.

## 🐛 Sorun Bildirimi

Bir hata bulduysanız veya öneriniz varsa, lütfen issue açın.

---

**Not**: Bu proje aktif geliştirme aşamasındadır. Yeni özellikler ve iyileştirmeler düzenli olarak eklenmektedir.
