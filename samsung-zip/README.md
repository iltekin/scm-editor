# Samsung ZIP Kanal Listesi Düzenleyici (Yeni Samsung TV'ler için)

Bu araç, yeni nesil Samsung TV'lerden USB ile dışa aktarılan `Channel_list_....zip` formatındaki kanal listelerini düzenlemek için tamamen tarayıcı içinde çalışan bir araçtır.

## Bu araç ne işe yarar?

Yeni Samsung televizyonların oluşturduğu `.zip` dosyası içindeki SQLite veritabanlarını (`dvbs`, `sat` vb.) tarayıcıdaki yerleşik WebAssembly SQLite motoru ile açarak:

- Kanalları **yeniden adlandırabilir**,
- Kanal **numaralarını (sırasını)** değiştirebilir,
- Kanalları **toplu silebilir** (tek tek, tür bazlı: SD/HD/Radyo, şifre durumuna göre: şifreli/şifresiz, ya da boş isimli kayıtları),
- **Aratarak sıra oluşturabilir**: arama kutusuna yazıp tıkladığın kanalları istediğin sırayla listenin başına taşıyabilir,
- Radyoları/şifreli kanalları/seçili kanalları listenin **başına veya sonuna** taşıyabilir,

ve güncellenmiş veritabanını tekrar `.zip` dosyası olarak indirip TV'ye geri yükleyebilirsin.

## Nasıl çalışır?

- **Sunucu yok, kurulum yok.** `index.html` dosyasını tarayıcıda açman yeterlidir.
- Yüklediğin `.zip` dosyası **hiçbir zaman internete/sunucuya gönderilmez** — her şey yerel tarayıcı belleğinde işlenir.
- Paket içindeki `lib/sql-wasm.js` ve `lib/sql-wasm.wasm` kütüphaneleri sayesinde SQLite veritabanı doğrudan tarayıcı içinde okunur ve yazılır.
- Samsung TV'lerin kanal isimlerinde kullandığı **byte-swapped UTF-16 BE** metin kodlaması otomatik olarak çözülür ve kaydedilir.

## Kullanım

1. `samsung-zip/index.html` dosyasını tarayıcıda aç.
2. TV'den USB ile aldığın `Channel_list_....zip` dosyasını sürükle-bırak yap veya seç.
3. Kanalları düzenle, sırala, sil.
4. **"Kaydet (.zip indir)"** butonuna bas, indirilen `.zip` dosyasını USB belleğe kopyalayıp TV'ye geri yükle.

---

# Samsung ZIP Channel List Editor (For Modern Samsung TVs)

A browser-based tool for editing `Channel_list_....zip` satellite/cable channel lists exported from modern Samsung Smart TVs.

## Features

- **Rename** channels
- Change channel **numbers/order**
- **Bulk-delete** channels by type (SD/HD/Radio), encryption status, or empty names
- **Build custom order by searching** via interactive modal
- Move radios, encrypted channels, or selection to top/bottom
- Re-pack updated SQLite database into valid ZIP format for TV upload
- Multi-language support (TR/EN)
- 100% offline, zero server dependency
