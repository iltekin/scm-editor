# Samsung Kanal Listesi Editörleri

![TV Kanal Listesi Yönetim Rehberi (4 Adım): 1. TV'den flash belleğe aktarma, 2. Bilgisayarda düzenleme, 3. Düzenlenen listeyi kaydetme, 4. TV'ye içe aktarma](docs/kullanim-rehberi.png)

Samsung televizyonlardan USB ile dışa aktarılan kanal listelerini düzenlemek için tamamen tarayıcı içinde çalışan iki ayrı araç.

**Canlı adres:** [iltekin.github.io/scm-editor](https://iltekin.github.io/scm-editor)

## Editörler

### SCM Kanal Editörü

2014 ve öncesi yıllarda üretilmiş eski Samsung televizyonlar için (ES/F/H serileri vb.) kanal listesi düzenleme aracı.

- **Dosya türü:** `channel_list_....scm`
- **Dizin:** [`samsung-scm/`](samsung-scm/)
- `.scm` arşivindeki binary kanal kayıtlarını okur, düzenler ve tekrar paketler.

[SCM Editörünü Aç](samsung-scm/index.html)

### ZIP Kanal Editörü

2015 ve sonrası yıllarda üretilmiş modern Samsung Smart TV'ler için SQLite altyapılı kanal listesi düzenleme aracı.

- **Dosya türü:** `Channel_list_....zip`
- **Dizin:** [`samsung-zip/`](samsung-zip/)
- **İçerik:** Uydu ve kablo kanal verilerini barındıran `dvbs`, `sat` vb. SQLite veritabanları
- Paket içindeki veritabanlarını WebAssembly tabanlı SQLite motoruyla doğrudan tarayıcıda açar ve düzenler.
- Samsung'un kanal adlarında kullandığı **byte-swapped UTF-16 BE** metin kodlamasını otomatik olarak çözer ve aynı biçimde kaydeder.
- Güncellenen veritabanlarını televizyona geri yüklenebilecek geçerli bir `.zip` paketi olarak yeniden oluşturur.

[ZIP Editörünü Aç](samsung-zip/index.html)

> Bu iki dosya türü birbirinden farklıdır. Televizyonunuzdan dışa aktarılan dosyanın uzantısına göre `.scm` veya `.zip` editörünü seçin.

## Özellikler

Her iki editörle de:

- Kanalları **yeniden adlandırabilir**,
- Kanal **numaralarını ve sırasını** değiştirebilir,
- Kanalları tek tek veya toplu olarak **silebilir**,
- Arama yaparak özel bir kanal sırası oluşturabilir,
- Radyoları, şifreli kanalları veya seçili kanalları listenin başına ya da sonuna taşıyabilir,
- Düzenlenen listeyi televizyona geri yüklemeye uygun dosya türünde indirebilirsiniz.

Arayüz **Türkçe ve İngilizce** kullanılabilir.

## Nasıl çalışır?

- **Sunucu yok, kurulum yok.** Canlı adresi kullanabilir veya ilgili `index.html` dosyasını bir tarayıcıda açabilirsiniz.
- Yüklediğiniz kanal listesi **internete veya bir sunucuya gönderilmez**; bütün işlemler tarayıcınızın belleğinde gerçekleşir.
- SCM editörü `.scm` arşivindeki binary kanal kayıtlarını işler.
- ZIP editörü, beraberinde gelen `lib/sql-wasm.js` ve `lib/sql-wasm.wasm` dosyalarını kullanarak `Channel_list_....zip` paketindeki SQLite veritabanlarını tarayıcı içinde okur ve yazar.
- Düzenleme tamamlandığında kanal veritabanları özgün paket yapısına geri konur ve yeni bir `.zip` dosyası olarak indirilir.

## Kullanım

1. [Ana sayfayı](index.html) açın ve dosyanızın türüne uygun editörü seçin.
2. Televizyondan USB ile dışa aktardığınız `.scm` veya `.zip` dosyasını sürükleyip bırakın ya da dosya seçiciden açın.
3. Kanalları düzenleyin, sıralayın veya silin.
4. Kaydet düğmesine basarak düzenlenen dosyayı indirin.
5. Dosyayı USB belleğe kopyalayıp televizyonunuzdaki kanal listesini içe aktarma seçeneğiyle geri yükleyin.

**Önemli:** Düzenlemeye başlamadan önce televizyonunuzdan aldığınız orijinal dosyanın yedeğini saklayın.

## Proje yapısı

```text
index.html          – SCM ve ZIP editörleri için ana seçim sayfası
style.css           – ana sayfanın stilleri
docs/               – dokümantasyon görselleri
samsung-scm/        – eski Samsung TV'lerin .scm dosyaları için editör
samsung-zip/        – modern Samsung TV'lerin SQLite tabanlı .zip dosyaları için editör
```

## Uyumluluk notu

Samsung kanal listesi biçimleri için kapsamlı ve resmi bir belge bulunmadığından dosya yapıları tersine mühendislikle çözümlenmiştir. Dosya içeriği model, seri, bölge veya yazılım sürümüne göre değişebilir.

SCM editörü Samsung UE40ES8000 (2012 model) televizyonundan alınan bir `.scm` dosyasıyla test edilmiştir. Farklı modellerde kanal adları yanlış görünebilir veya dosya açılamayabilir. ZIP biçiminde de televizyonun oluşturduğu SQLite şeması modele göre farklılık gösterebilir. Her iki durumda da orijinal dosyanızın yedeğini saklayın.

## Tarayıcı gereksinimleri

Modern bir tarayıcı gerekir. Araçlar tarayıcının sıkıştırma API'lerini ve ZIP editörü ayrıca WebAssembly desteğini kullanır.

---

# Samsung Channel List Editors

Two separate, fully browser-based tools for editing channel lists exported from Samsung TVs via USB.

**Live URL:** [iltekin.github.io/scm-editor](https://iltekin.github.io/scm-editor)

## Editors

### SCM Channel Editor

A channel list editor for older Samsung TVs manufactured in 2014 or earlier, including ES, F, and H series models.

- **File type:** `channel_list_....scm`
- **Directory:** [`samsung-scm/`](samsung-scm/)
- Reads and updates the binary channel records stored in the `.scm` archive.

[Open the SCM Editor](samsung-scm/index.html)

### ZIP Channel Editor

A SQLite-based channel list editor for modern Samsung Smart TVs manufactured in 2015 or later.

- **File type:** `Channel_list_....zip`
- **Directory:** [`samsung-zip/`](samsung-zip/)
- **Contents:** SQLite databases such as `dvbs` and `sat`, containing satellite and cable channel data
- Opens and updates the packaged databases directly in the browser using a WebAssembly-based SQLite engine.
- Automatically decodes Samsung's **byte-swapped UTF-16 BE** channel names and saves them in the same format.
- Rebuilds the updated databases as a valid `.zip` package that can be imported back into the TV.

[Open the ZIP Editor](samsung-zip/index.html)

> These are different file formats. Choose the `.scm` or `.zip` editor based on the file exported by your TV.

## Features

Both editors let you:

- **Rename** channels,
- Change channel **numbers and order**,
- **Delete** channels individually or in bulk,
- Build a custom channel order using search,
- Move radio, encrypted, or selected channels to the top or bottom,
- Download the edited list in the correct format for importing back into the TV.

The interface is available in **Turkish and English**.

## How it works

- **No server and no installation.** Use the live site or open the relevant `index.html` file in a browser.
- Uploaded channel lists are **never sent to the internet or a server**; all processing happens in your browser's memory.
- The SCM editor processes binary channel records stored in the `.scm` archive.
- The ZIP editor uses the bundled `lib/sql-wasm.js` and `lib/sql-wasm.wasm` files to read and write the SQLite databases inside `Channel_list_....zip` in the browser.
- Once editing is complete, the channel databases are placed back into the original package structure and downloaded as a new `.zip` file.

## Usage

1. Open the [home page](index.html) and select the editor matching your file type.
2. Drag and drop or select the `.scm` or `.zip` file exported from your TV via USB.
3. Edit, reorder, or delete channels.
4. Download the edited file using the save button.
5. Copy it to a USB drive and import the channel list back into your TV.

**Important:** Always keep a backup of the original file exported by your TV before editing it.

## Project structure

```text
index.html          – home page for choosing the SCM or ZIP editor
style.css           – home page styles
docs/               – documentation images
samsung-scm/        – editor for .scm files from older Samsung TVs
samsung-zip/        – editor for SQLite-based .zip files from modern Samsung TVs
```

## Compatibility note

Because there is no comprehensive official documentation for Samsung channel list formats, these file structures were reverse-engineered. Their contents may vary by model, series, region, or firmware version.

The SCM editor has been tested with a `.scm` file exported from a Samsung UE40ES8000 (2012 model). Other models may display channel names incorrectly or fail to open. The SQLite schema used by ZIP files may also vary between TV models. Keep a backup of the original file in either case.

## Browser requirements

A modern browser is required. The tools use browser compression APIs, and the ZIP editor also requires WebAssembly support.

**Author:** Sezer İltekin ([x.com/sezeriltekin](https://x.com/sezeriltekin))
