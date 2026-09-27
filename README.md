# Kazım Etiksan — Kişisel web sitesi

React ve Vite ile hazırlanmış, mobil uyumlu tek sayfalık kişisel site.

## Yerel geliştirme

Node.js 22.12+ kullanın.

```sh
npm install
npm run dev
```

Üretim kontrolü: `npm run build`, ardından `npm run preview`.

## CV ve içerik

İçerik, Kazım Etiksan’ın sağladığı CV temel alınarak hazırlanmıştır. Kişisel içerikleri `src/profile.js` üzerinden güncelleyebilirsiniz.
- `about`: biyografi
- `experience`, `education`: `{ period, title, organization, description }` kayıtları
- `projects`: `{ title, description, tags: [], url }` kayıtları
- `skills`: yetenek adları
- `email`, `linkedin`: iletişim bağlantıları
- `cvUrl`: `public/Kazim_Etiksan_CV.pdf` dosyasına işaret eder

Seçili üç proje ilk görünümde yer alır; diğer çalışmalar düğmeyle açılır. Deneyim ayrıntıları açılır bölümlerden incelenebilir. Sayfa başlığı ve açıklaması `index.html` içindedir. Manrope fontları yerel paketlerden sunulur; harici Google Fonts isteği yapılmaz. Portre `public/kazim-etiksan.webp` dosyasıdır.

## Vercel ile yayınlama

1. Vercel'de **Add New → Project** seçin.
2. `kazimetiksan72/kazimetiksancom` deposunu içe aktarın.
3. Framework **Vite**, build komutu `npm run build`, çıktı klasörü `dist` olmalıdır. `vercel.json` bunları tanımlar.
4. **Deploy** seçin. Ortam değişkeni gerekmez.
5. Kendi alan adınızı projenin **Settings → Domains** bölümünden ekleyin ve Vercel'in gösterdiği DNS kayıtlarını uygulayın.

`main` dalına sonraki gönderimler Vercel'in Git entegrasyonu etkin olduğunda otomatik olarak yayınlanır.
