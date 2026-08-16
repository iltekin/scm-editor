(() => {
  "use strict";

  // ---------- i18n ----------
  const I18N = {
    tr: {
      pageTitle: "SCM Kanal Listesi Düzenleyici",
      h1: "📡 SCM Kanal Listesi Düzenleyici",
      headerSub: "Samsung .scm uydu kanal listesi — tamamen tarayıcıda çalışır, sunucuya hiçbir şey gönderilmez",
      resetBtn: "↺ Sıfırla",
      saveBtn: "💾 Kaydet (.scm indir)",
      dropzoneTitle: ".scm dosyanı buraya sürükle veya seç",
      dropzoneP: "Eski Samsung TV'den USB ile aldığın <code>channel_list_....scm</code> dosyasını yükle.<br>Dosya sadece bu sekmede, tarayıcı belleğinde işlenir — hiçbir sunucuya yüklenmez.",
      openBtn: "Dosya Seç",
      loadExample: "Örnek dosyayı yükle",
      searchPlaceholder: "Kanal adında ara...",
      filterEncAll: "Tümü",
      filterEncEnc: "Sadece şifreli 🔒",
      filterEncFree: "Sadece şifresiz 🔓",
      filterTypeAll: "Tüm türler",
      filterTypeSd: "SD",
      filterTypeHd: "HD",
      filterTypeRadio: "Radyo",
      showDeleted: "Silinenleri göster",
      selectAllBtn: "Görüneni Seç",
      selectNoneBtn: "Seçimi Temizle",
      selectFirstPrefix: "İlk",
      selectFirstSuffix: "kanalı seç",
      selectFirstBtn: "Seç",
      openPickerBtn: "🎯 Aratarak Sıra Oluştur",
      deleteBtn: "🗑 Seçilenleri Sil",
      undeleteBtn: "↺ Seçilenleri Geri Al",
      sortMenuBtn: "🔀 Sıralama Modları ▾",
      menuRenumberTitle: "Yeniden numarala",
      startNoLabel: "Başlangıç No:",
      renumberBtn: "🔢 Görünen sıraya göre numarala",
      menuSortGroupTitle: "Gruba göre sırala",
      sortNameBtn: "🔤 İsme göre sırala (A-Z)",
      selFirstBtn: "⬆ Seçilenleri başa al",
      selLastBtn: "⬇ Seçilenleri sona al",
      radioFirstBtn: "⬆ Radyoları başa al",
      radioLastBtn: "⬇ Radyoları sona al",
      encFirstBtn: "⬆ Şifrelileri başa al",
      encLastBtn: "⬇ Şifrelileri sona al",
      deleteMenuBtn: "🗑 Toplu Silme ▾",
      menuDeleteTypeTitle: "Türe göre sil",
      deleteSdBtn: "Tüm SD kanalları sil",
      deleteHdBtn: "Tüm HD kanalları sil",
      deleteRadioBtn: "Tüm radyoları sil",
      deleteTvBtn: "Tüm TV kanallarını sil (radyo hariç)",
      menuDeleteEncTitle: "Şifre durumuna göre sil",
      deleteEncBtn: "Tüm şifreli kanalları sil",
      deleteFreeBtn: "Tüm şifresiz kanalları sil",
      menuDeleteOtherTitle: "Diğer",
      deleteEmptyBtn: "Boş isimli kanalları sil",
      hintHtml: '💡 İpucu: Bir satıra tıklayıp seç, sonra <kbd>Shift</kbd> tuşunu basılı tutarak başka bir satıra tıkla — aradaki tüm kanallar (örn. ilk 10, ilk 20, ya da herhangi bir aralık) tek seferde seçilir.',
      statTotalLabel: "Toplam kayıt:",
      statUsedLabel: "Kullanılan:",
      statEncLabel: "Şifreli:",
      statFreeLabel: "Şifresiz:",
      statDeletedLabel: "Silinen (bu oturumda):",
      statShownLabel: "Gösterilen:",
      statSelectedLabel: "Seçili:",
      thNo: "No ▾",
      thName: "Kanal Adı",
      thType: "Tür",
      thEnc: "Şifreli",
      footerNote: 'Not: Bu araç .scm formatını dosya içeriğinden tersine mühendislikle çözerek yazılmıştır (resmi Samsung belgesi kullanılmamıştır). Kanal adı, kanal numarası, şifreli bayrağı ve silme işlemleri test edilip doğrulanmıştır. Kaydetmeden önce orijinal dosyanın bir yedeğini almanı öneririz. Silme işlemi kaydı sıfırlar (TV\'nin kendi "kanal sil" davranışına benzer şekilde slot yeniden kullanılabilir hâle gelir); kanal sırası fiziksel olarak değiştirilmez, sadece kanal numarası (No) alanı güncellenir.',
      pickerTitle: "🎯 Aratarak Sıra Oluştur",
      pickerColSearch: "Kanal ara",
      pickerColChosen: "Seçilen sıra",
      pickerSearchPlaceholder: "Yazmaya başla, kanal adında ara...",
      pickerClearBtn: "Listeyi Temizle",
      pickerCancelBtn: "İptal",
      pickerSaveBtn: "💾 Kaydet ve Başa Uygula",

      // dynamic
      loading: "Yükleniyor...",
      noSateSection: 'Bu dosyada "map-SateD" (uydu kanal) bölümü bulunamadı. Farklı bir model/format olabilir.',
      fileLoaded: "{name} yüklendi.",
      errorPrefix: "Hata: {msg}",
      badgeHd: "HD",
      badgeSd: "SD",
      badgeRadio: "Radyo",
      badgeEncrypted: "🔒 Şifreli",
      badgeFree: "🔓 Açık",
      downloadingExample: "Örnek dosya indiriliyor...",
      exampleNotFound: "Örnek dosya bulunamadı (HTTP {status})",
      exampleLoadFailed: "Örnek dosya yüklenemedi: {msg}",
      noChannelsInView: "Görünen listede kanal yok.",
      firstNSelected: "İlk {n} kanal seçildi.",
      confirmDeleteSelected: "{n} kanal silinsin mi? (Kaydetmeden önce geri alabilirsin)",
      selectToDeleteFirst: "Önce silinecek kanalları seç.",
      selectToRestoreFirst: "Önce geri alınacak kanalları seç.",
      renumberedFrom: "{n} kanal {start}'den başlayarak yeniden numaralandı.",
      sortedByName: "İsme göre sıralandı",
      selectedToTop: "Seçilenler başa alındı",
      selectedToBottom: "Seçilenler sona alındı",
      radiosToTop: "Radyolar başa alındı",
      radiosToBottom: "Radyolar sona alındı",
      encToTop: "Şifreliler başa alındı",
      encToBottom: "Şifreliler sona alındı",
      orderAppliedSuffix: " ({count} kanal, {start}'den başlayarak numaralandı).",
      noMatchingGroup: "Bu gruba uyan kanal yok.",
      selectChannelFirst: "Önce kanal seç.",
      labelAllEncrypted: "Tüm şifreli kanallar",
      labelAllFree: "Tüm şifresiz kanallar",
      labelAllRadio: "Tüm radyolar",
      labelAllTv: "Tüm TV kanalları",
      labelAllSd: "Tüm SD kanallar",
      labelAllHd: "Tüm HD kanallar",
      labelEmptyNamed: "Boş isimli kanallar",
      confirmDeleteGroup: "{label}: {count} kanal silinsin mi? (Kaydetmeden önce geri alabilirsin)",
      deletedGroupToast: "{count} kanal silindi ({label}).",
      pickerStartHint: "Aramaya başla — sonuçlar burada listelenecek.",
      pickerResultsCount: "{n} sonuç",
      pickerNoResults: "Sonuç yok.",
      unnamed: "(isimsiz)",
      pickerChosenCount: "{n} kanal",
      pickerEmptyChosen: "Henüz kanal eklemedin. Soldan arayıp tıklayarak ekle.",
      moveUpTitle: "Yukarı taşı",
      moveDownTitle: "Aşağı taşı",
      removeTitle: "Kaldır",
      addAtLeastOne: "Önce en az bir kanal ekle.",
      pickedAppliedToast: "{n} kanal seçtiğin sırayla listenin başına eklendi.",
      saving: "Kaydediliyor...",
      saved: "Kaydedildi: {name}",
      downloaded: "Dosya indirildi: {name}",
      saveError: "Kaydetme hatası: {msg}",
      compressionUnsupported: "Bu tarayıcı CompressionStream API'sini desteklemiyor. Lütfen güncel bir Chrome, Edge, Safari veya Firefox kullan.",
      confirmReset: "Sıfırlamak istediğine emin misin? Kaydedilmemiş değişiklikler kaybolacak ve dosya seçme ekranına döneceksin.",
      localeCode: "tr",
    },
    en: {
      pageTitle: "SCM Channel List Editor",
      h1: "📡 SCM Channel List Editor",
      headerSub: "Samsung .scm satellite channel list — runs entirely in your browser, nothing is sent to a server",
      resetBtn: "↺ Reset",
      saveBtn: "💾 Save (download .scm)",
      dropzoneTitle: "Drag & drop your .scm file, or select one",
      dropzoneP: "Upload the <code>channel_list_....scm</code> file you got from your old Samsung TV via USB.<br>The file is only processed in this tab's browser memory — nothing is uploaded to a server.",
      openBtn: "Select File",
      loadExample: "Load the example file",
      searchPlaceholder: "Search by channel name...",
      filterEncAll: "All",
      filterEncEnc: "Encrypted only 🔒",
      filterEncFree: "Free-to-air only 🔓",
      filterTypeAll: "All types",
      filterTypeSd: "SD",
      filterTypeHd: "HD",
      filterTypeRadio: "Radio",
      showDeleted: "Show deleted",
      selectAllBtn: "Select Visible",
      selectNoneBtn: "Clear Selection",
      selectFirstPrefix: "Select first",
      selectFirstSuffix: "channels",
      selectFirstBtn: "Select",
      openPickerBtn: "🎯 Build Order by Searching",
      deleteBtn: "🗑 Delete Selected",
      undeleteBtn: "↺ Restore Selected",
      sortMenuBtn: "🔀 Sort Modes ▾",
      menuRenumberTitle: "Renumber",
      startNoLabel: "Start No.:",
      renumberBtn: "🔢 Renumber by current view order",
      menuSortGroupTitle: "Sort by group",
      sortNameBtn: "🔤 Sort by name (A-Z)",
      selFirstBtn: "⬆ Move selected to top",
      selLastBtn: "⬇ Move selected to bottom",
      radioFirstBtn: "⬆ Move radios to top",
      radioLastBtn: "⬇ Move radios to bottom",
      encFirstBtn: "⬆ Move encrypted to top",
      encLastBtn: "⬇ Move encrypted to bottom",
      deleteMenuBtn: "🗑 Bulk Delete ▾",
      menuDeleteTypeTitle: "Delete by type",
      deleteSdBtn: "Delete all SD channels",
      deleteHdBtn: "Delete all HD channels",
      deleteRadioBtn: "Delete all radio channels",
      deleteTvBtn: "Delete all TV channels (except radio)",
      menuDeleteEncTitle: "Delete by encryption status",
      deleteEncBtn: "Delete all encrypted channels",
      deleteFreeBtn: "Delete all free-to-air channels",
      menuDeleteOtherTitle: "Other",
      deleteEmptyBtn: "Delete channels with empty names",
      hintHtml: '💡 Tip: Click a row to select it, then hold <kbd>Shift</kbd> and click another row — every channel in between (e.g. the first 10, first 20, or any range) gets selected at once.',
      statTotalLabel: "Total records:",
      statUsedLabel: "Used:",
      statEncLabel: "Encrypted:",
      statFreeLabel: "Free-to-air:",
      statDeletedLabel: "Deleted (this session):",
      statShownLabel: "Shown:",
      statSelectedLabel: "Selected:",
      thNo: "No ▾",
      thName: "Channel Name",
      thType: "Type",
      thEnc: "Encrypted",
      footerNote: 'Note: this tool was built by reverse-engineering the .scm format from file contents (no official Samsung documentation was used). Channel name, channel number, encrypted flag, and delete operations have been tested and verified. We recommend keeping a backup of your original file before saving. Deleting resets the record (similar to how the TV\'s own "delete channel" behaves — the slot becomes reusable); the physical order of records is not changed, only the channel number (No) field is updated.',
      pickerTitle: "🎯 Build Order by Searching",
      pickerColSearch: "Search channels",
      pickerColChosen: "Selected order",
      pickerSearchPlaceholder: "Start typing to search by channel name...",
      pickerClearBtn: "Clear List",
      pickerCancelBtn: "Cancel",
      pickerSaveBtn: "💾 Save & Apply to Top",

      // dynamic
      loading: "Loading...",
      noSateSection: 'This file has no "map-SateD" (satellite channel) section. It may be a different model or format.',
      fileLoaded: "{name} loaded.",
      errorPrefix: "Error: {msg}",
      badgeHd: "HD",
      badgeSd: "SD",
      badgeRadio: "Radio",
      badgeEncrypted: "🔒 Encrypted",
      badgeFree: "🔓 Free",
      downloadingExample: "Downloading example file...",
      exampleNotFound: "Example file not found (HTTP {status})",
      exampleLoadFailed: "Failed to load example file: {msg}",
      noChannelsInView: "No channels in the current view.",
      firstNSelected: "First {n} channels selected.",
      confirmDeleteSelected: "Delete {n} channels? (You can restore them before saving)",
      selectToDeleteFirst: "Select channels to delete first.",
      selectToRestoreFirst: "Select channels to restore first.",
      renumberedFrom: "{n} channels renumbered starting from {start}.",
      sortedByName: "Sorted by name",
      selectedToTop: "Selected moved to top",
      selectedToBottom: "Selected moved to bottom",
      radiosToTop: "Radios moved to top",
      radiosToBottom: "Radios moved to bottom",
      encToTop: "Encrypted moved to top",
      encToBottom: "Encrypted moved to bottom",
      orderAppliedSuffix: " ({count} channels, numbered starting from {start}).",
      noMatchingGroup: "No channels match this group.",
      selectChannelFirst: "Select a channel first.",
      labelAllEncrypted: "All encrypted channels",
      labelAllFree: "All free-to-air channels",
      labelAllRadio: "All radio channels",
      labelAllTv: "All TV channels",
      labelAllSd: "All SD channels",
      labelAllHd: "All HD channels",
      labelEmptyNamed: "Channels with empty names",
      confirmDeleteGroup: "{label}: delete {count} channels? (You can restore them before saving)",
      deletedGroupToast: "{count} channels deleted ({label}).",
      pickerStartHint: "Start typing — results will appear here.",
      pickerResultsCount: "{n} results",
      pickerNoResults: "No results.",
      unnamed: "(unnamed)",
      pickerChosenCount: "{n} channels",
      pickerEmptyChosen: "You haven't added any channels yet. Search on the left and click to add.",
      moveUpTitle: "Move up",
      moveDownTitle: "Move down",
      removeTitle: "Remove",
      addAtLeastOne: "Add at least one channel first.",
      pickedAppliedToast: "{n} channels added to the top of the list in the order you picked.",
      saving: "Saving...",
      saved: "Saved: {name}",
      downloaded: "File downloaded: {name}",
      saveError: "Save failed: {msg}",
      compressionUnsupported: "This browser doesn't support the CompressionStream API. Please use a recent version of Chrome, Edge, Safari, or Firefox.",
      confirmReset: "Are you sure you want to reset? Unsaved changes will be lost and you'll return to the file selection screen.",
      localeCode: "en",
    },
  };

  let lang = localStorage.getItem("scmEditorLang") || "tr";
  if (lang !== "tr" && lang !== "en") lang = "tr";

  function t(key, vars) {
    let s = (I18N[lang] && I18N[lang][key]) || I18N.tr[key] || key;
    if (vars) {
      for (const k in vars) s = s.replace("{" + k + "}", vars[k]);
    }
    return s;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = lang;
    document.title = t("pageTitle");
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
    const langBtn = document.getElementById("langToggle");
    if (langBtn) langBtn.textContent = lang === "tr" ? "EN" : "TR";
  }

  // ---------- CRC32 ----------
  const CRC_TABLE = (() => {
    const t = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      t[n] = c >>> 0;
    }
    return t;
  })();
  function crc32(bytes) {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < bytes.length; i++) {
      c = CRC_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    }
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  // ---------- deflate helpers (native browser streams) ----------
  async function deflateRaw(bytes) {
    const cs = new CompressionStream("deflate-raw");
    const writer = cs.writable.getWriter();
    writer.write(bytes);
    writer.close();
    const buf = await new Response(cs.readable).arrayBuffer();
    return new Uint8Array(buf);
  }
  async function inflateRaw(bytes) {
    const ds = new DecompressionStream("deflate-raw");
    const writer = ds.writable.getWriter();
    writer.write(bytes);
    writer.close();
    const buf = await new Response(ds.readable).arrayBuffer();
    return new Uint8Array(buf);
  }

  // ---------- ZIP read ----------
  async function parseZip(buffer) {
    const view = new DataView(buffer);
    const bytes = new Uint8Array(buffer);
    // find EOCD (search from end for signature 0x06054b50)
    let eocdOff = -1;
    for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 22 - 65557); i--) {
      if (view.getUint32(i, true) === 0x06054b50) { eocdOff = i; break; }
    }
    if (eocdOff === -1) throw new Error("Invalid ZIP/SCM file (no EOCD found).");
    const cdEntries = view.getUint16(eocdOff + 10, true);
    const cdOffset = view.getUint32(eocdOff + 16, true);

    const entries = [];
    let p = cdOffset;
    for (let i = 0; i < cdEntries; i++) {
      const sig = view.getUint32(p, true);
      if (sig !== 0x02014b50) throw new Error("Corrupt central directory record.");
      const method = view.getUint16(p + 10, true);
      const modTime = view.getUint16(p + 12, true);
      const modDate = view.getUint16(p + 14, true);
      const crc = view.getUint32(p + 16, true);
      const compSize = view.getUint32(p + 20, true);
      const uncompSize = view.getUint32(p + 24, true);
      const nameLen = view.getUint16(p + 28, true);
      const extraLen = view.getUint16(p + 30, true);
      const commentLen = view.getUint16(p + 32, true);
      const localOffset = view.getUint32(p + 42, true);
      const nameBytes = bytes.slice(p + 46, p + 46 + nameLen);
      const name = new TextDecoder().decode(nameBytes);
      p += 46 + nameLen + extraLen + commentLen;

      // read local header to find data start
      const lSig = view.getUint32(localOffset, true);
      if (lSig !== 0x04034b50) throw new Error("Corrupt local file header: " + name);
      const lNameLen = view.getUint16(localOffset + 26, true);
      const lExtraLen = view.getUint16(localOffset + 28, true);
      const dataStart = localOffset + 30 + lNameLen + lExtraLen;
      const compData = bytes.slice(dataStart, dataStart + compSize);

      let data;
      if (method === 0) data = compData;
      else if (method === 8) data = await inflateRaw(compData);
      else throw new Error("Unsupported compression method (" + method + ") for entry: " + name);

      // Keep the exact original compressed bytes/CRC so entries we don't
      // touch can be re-serialized byte-for-byte identical to the source
      // file, instead of being re-compressed with a different encoder.
      entries.push({ name, method, modTime, modDate, data, origCompData: compData, origCrc: crc });
    }
    return entries;
  }

  // ---------- ZIP write ----------
  async function buildZip(entries) {
    const parts = [];
    const centralParts = [];
    let offset = 0;
    const te = new TextEncoder();

    for (const e of entries) {
      const nameBytes = te.encode(e.name);
      let method, compData, crc;
      if (e.modified) {
        // content changed: (re-)compress fresh and recompute the CRC
        method = e.data.length === 0 ? 0 : 8;
        compData = method === 8 ? await deflateRaw(e.data) : e.data;
        crc = crc32(e.data);
      } else {
        // untouched: reuse the exact original compressed bytes/CRC so this
        // entry round-trips byte-for-byte identical to the source file
        method = e.method;
        compData = e.origCompData;
        crc = e.origCrc;
      }

      const local = new ArrayBuffer(30 + nameBytes.length);
      const lv = new DataView(local);
      lv.setUint32(0, 0x04034b50, true);
      lv.setUint16(4, 20, true); // version needed
      lv.setUint16(6, 0, true); // gp flag
      lv.setUint16(8, method, true);
      lv.setUint16(10, e.modTime || 0, true);
      lv.setUint16(12, e.modDate || 0x21, true);
      lv.setUint32(14, crc, true);
      lv.setUint32(18, compData.length, true);
      lv.setUint32(22, e.data.length, true);
      lv.setUint16(26, nameBytes.length, true);
      lv.setUint16(28, 0, true);
      new Uint8Array(local, 30).set(nameBytes);

      const localOffset = offset;
      parts.push(new Uint8Array(local));
      parts.push(compData);
      offset += local.byteLength + compData.length;

      const central = new ArrayBuffer(46 + nameBytes.length);
      const cv = new DataView(central);
      cv.setUint32(0, 0x02014b50, true);
      cv.setUint16(4, 20, true); // version made by
      cv.setUint16(6, 20, true); // version needed
      cv.setUint16(8, 0, true); // gp flag
      cv.setUint16(10, method, true);
      cv.setUint16(12, e.modTime || 0, true);
      cv.setUint16(14, e.modDate || 0x21, true);
      cv.setUint32(16, crc, true);
      cv.setUint32(20, compData.length, true);
      cv.setUint32(24, e.data.length, true);
      cv.setUint16(28, nameBytes.length, true);
      cv.setUint16(30, 0, true);
      cv.setUint16(32, 0, true);
      cv.setUint16(34, 0, true);
      cv.setUint16(36, 0, true);
      cv.setUint32(38, 0, true);
      cv.setUint32(42, localOffset, true);
      new Uint8Array(central, 46).set(nameBytes);
      centralParts.push(new Uint8Array(central));
    }

    const cdStart = offset;
    let cdSize = 0;
    for (const c of centralParts) { parts.push(c); cdSize += c.length; offset += c.length; }

    const eocd = new ArrayBuffer(22);
    const ev = new DataView(eocd);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(4, 0, true);
    ev.setUint16(6, 0, true);
    ev.setUint16(8, entries.length, true);
    ev.setUint16(10, entries.length, true);
    ev.setUint32(12, cdSize, true);
    ev.setUint32(16, cdStart, true);
    ev.setUint16(20, 0, true);
    parts.push(new Uint8Array(eocd));

    const total = parts.reduce((s, p) => s + p.length, 0);
    const out = new Uint8Array(total);
    let o = 0;
    for (const p of parts) { out.set(p, o); o += p.length; }
    return out;
  }

  // ---------- map-SateD record model ----------
  const REC_LEN = 168;
  const OFF_CHANNEL = 0;
  const OFF_SID1 = 2;
  const OFF_SID2 = 4;
  const OFF_SERVICE_TYPE = 14;
  const OFF_NAME = 36;
  const NAME_BYTES = 96; // 48 UTF-16 code units
  const OFF_ENCRYPTED = 136;

  function serviceLabel(t) {
    if (t === 25 || t === 0x11 || t === 0x19) return "hd";
    if (t === 1) return "sd";
    if (t === 2) return "radio";
    return "sd";
  }

  function decodeRecords(raw) {
    if (raw.length % REC_LEN !== 0) {
      throw new Error("Unexpected map-SateD size (not a multiple of 168 bytes): " + raw.length);
    }
    const n = raw.length / REC_LEN;
    const dv = new DataView(raw.buffer, raw.byteOffset, raw.length);
    const records = [];
    for (let i = 0; i < n; i++) {
      const base = i * REC_LEN;
      const channelNo = dv.getUint16(base + OFF_CHANNEL, true);
      const sid1 = dv.getUint16(base + OFF_SID1, true);
      const sid2 = dv.getUint16(base + OFF_SID2, true);
      const serviceType = raw[base + OFF_SERVICE_TYPE];
      const encrypted = raw[base + OFF_ENCRYPTED] === 1;
      const nameBytes = raw.slice(base + OFF_NAME, base + OFF_NAME + NAME_BYTES);
      let name = "";
      for (let j = 0; j < nameBytes.length; j += 2) {
        const code = (nameBytes[j] << 8) | nameBytes[j + 1];
        if (code === 0) break;
        name += String.fromCharCode(code);
      }
      const raw168 = raw.slice(base, base + REC_LEN);
      const allZero = raw168.every(b => b === 0);
      records.push({
        slot: i,
        channelNo, sid1, sid2, serviceType,
        encrypted,
        name,
        used: !allZero,
        deleted: false,
        raw: raw168, // live mutable copy, 168 bytes
      });
    }
    return records;
  }

  function writeUint16LE(arr, off, val) {
    arr[off] = val & 0xFF;
    arr[off + 1] = (val >> 8) & 0xFF;
  }

  function applyRecordChanges(rec) {
    writeUint16LE(rec.raw, OFF_CHANNEL, rec.channelNo & 0xFFFF);
    // name
    const nameArea = rec.raw.subarray(OFF_NAME, OFF_NAME + NAME_BYTES);
    nameArea.fill(0);
    const maxChars = Math.floor(NAME_BYTES / 2) - 1;
    const s = rec.name.slice(0, maxChars);
    for (let i = 0; i < s.length; i++) {
      const code = s.charCodeAt(i);
      nameArea[i * 2] = (code >> 8) & 0xFF;
      nameArea[i * 2 + 1] = code & 0xFF;
    }
  }

  function recordsToBuffer(records) {
    // The TV's own scans always place used records contiguously starting at
    // slot 0, with unused (all-zero) slots only at the tail, and channels
    // from the same transponder/satellite physically grouped together in
    // their original scan order. Deleting a channel by zeroing it in place
    // breaks the "contiguous from slot 0" invariant, and re-sorting the
    // physical slots by channel number breaks the transponder grouping
    // (both have been observed to make the TV treat the whole list as
    // invalid/empty after a reboot). So at save time we compact by ORIGINAL
    // SLOT order (preserving the scan's physical grouping) and leave the
    // channel-number field as the only thing that reflects the user's
    // chosen display/tuning order.
    const out = new Uint8Array(records.length * REC_LEN);
    const kept = records
      .filter(r => r.used && !r.deleted)
      .sort((a, b) => a.slot - b.slot);
    kept.forEach((r, i) => {
      applyRecordChanges(r);
      out.set(r.raw, i * REC_LEN);
    });
    return out;
  }

  // ---------- App state ----------
  let zipEntries = null;
  let records = null;
  let selected = new Set(); // slot indices
  let sortKey = "channelNo";
  let sortDir = 1;
  let originalFileName = "channel_list.scm";
  let lastClickedSlot = null;

  const $ = (id) => document.getElementById(id);
  const tbody = $("tbody");

  function toast(msg, type) {
    const el = document.createElement("div");
    el.className = "toast" + (type ? " " + type : "");
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4200);
  }

  async function handleFile(file) {
    try {
      $("status").textContent = t("loading");
      const buf = await file.arrayBuffer();
      zipEntries = await parseZip(buf);
      const sateEntry = zipEntries.find(e => e.name === "map-SateD");
      if (!sateEntry) throw new Error(t("noSateSection"));
      records = decodeRecords(sateEntry.data);
      selected.clear();
      // Keep the exact original filename: some Samsung TVs require the .scm
      // filename to match a specific pattern (e.g. channel_list_<MODEL>_....scm)
      // to accept it via "Load Channel List". Adding a suffix here has been
      // linked to the TV rejecting the file as an "invalid channel list".
      originalFileName = file.name;
      $("app").classList.add("visible");
      $("dropzone").style.display = "none";
      $("resetBtn").classList.remove("hidden");
      $("saveBtn").classList.remove("hidden");
      $("saveBtn").disabled = false;
      $("status").classList.remove("hidden");
      $("status").textContent = t("fileLoaded", { name: file.name });
      render();
    } catch (err) {
      console.error(err);
      toast(t("errorPrefix", { msg: err.message }), "error");
      $("status").textContent = "";
    }
  }

  function visibleList() {
    const q = $("search").value.trim().toLowerCase();
    const encFilter = $("filterEnc").value;
    const typeFilter = $("filterType").value;
    const showDeleted = $("showDeleted").checked;

    let list = records.filter(r => r.used || r.deleted);
    if (!showDeleted) list = list.filter(r => !r.deleted);
    if (q) list = list.filter(r => r.name.toLowerCase().includes(q));
    if (encFilter === "enc") list = list.filter(r => r.encrypted);
    if (encFilter === "free") list = list.filter(r => !r.encrypted);
    if (typeFilter !== "all") list = list.filter(r => serviceLabel(r.serviceType) === typeFilter);

    list.sort((a, b) => {
      let av = a[sortKey], bv = b[sortKey];
      if (typeof av === "string") { av = av.toLowerCase(); bv = bv.toLowerCase(); }
      if (av < bv) return -1 * sortDir;
      if (av > bv) return 1 * sortDir;
      return a.channelNo - b.channelNo;
    });
    return list;
  }

  function render() {
    const list = visibleList();
    tbody.innerHTML = "";
    const frag = document.createDocumentFragment();

    for (const rec of list) {
      const tr = document.createElement("tr");
      tr.dataset.slot = rec.slot;
      tr.draggable = true;
      if (selected.has(rec.slot)) tr.classList.add("selected");
      if (rec.deleted) tr.classList.add("deleted");

      const tdHandle = document.createElement("td");
      tdHandle.className = "drag-handle";
      tdHandle.textContent = "⋮⋮";
      tr.appendChild(tdHandle);

      const tdCheck = document.createElement("td");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = selected.has(rec.slot);
      tdCheck.appendChild(cb);
      tr.appendChild(tdCheck);

      tr.addEventListener("click", (e) => {
        const el = e.target;
        if (el.closest(".drag-handle")) return;
        if (el.tagName === "INPUT" && el.type !== "checkbox") return; // let No/Name fields edit normally
        e.preventDefault();
        handleSelectClick(rec.slot, e.shiftKey);
      });

      const tdNo = document.createElement("td");
      const noInput = document.createElement("input");
      noInput.type = "number";
      noInput.className = "num-input";
      noInput.value = rec.channelNo;
      noInput.min = 0; noInput.max = 65535;
      noInput.disabled = rec.deleted;
      noInput.addEventListener("change", () => {
        rec.channelNo = Math.max(0, Math.min(65535, parseInt(noInput.value || "0", 10)));
        noInput.value = rec.channelNo;
      });
      tdNo.appendChild(noInput);
      tr.appendChild(tdNo);

      const tdName = document.createElement("td");
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.className = "name-input";
      nameInput.value = rec.name;
      nameInput.maxLength = 47;
      nameInput.disabled = rec.deleted;
      nameInput.addEventListener("change", () => { rec.name = nameInput.value; });
      tdName.appendChild(nameInput);
      tr.appendChild(tdName);

      const tdType = document.createElement("td");
      const lbl = serviceLabel(rec.serviceType);
      const typeBadge = document.createElement("span");
      typeBadge.className = "badge " + (lbl === "hd" ? "hd" : lbl === "radio" ? "radio" : "sd");
      typeBadge.textContent = lbl === "hd" ? t("badgeHd") : lbl === "radio" ? t("badgeRadio") : t("badgeSd");
      tdType.appendChild(typeBadge);
      tr.appendChild(tdType);

      const tdEnc = document.createElement("td");
      const encBadge = document.createElement("span");
      encBadge.className = "badge " + (rec.encrypted ? "enc" : "free");
      encBadge.textContent = rec.encrypted ? t("badgeEncrypted") : t("badgeFree");
      tdEnc.appendChild(encBadge);
      tr.appendChild(tdEnc);

      frag.appendChild(tr);
    }
    tbody.appendChild(frag);
    updateStats();
    attachDragHandlers();
  }

  function handleSelectClick(slot, shiftKey) {
    if (shiftKey && lastClickedSlot !== null) {
      const list = visibleList();
      const idxA = list.findIndex(r => r.slot === lastClickedSlot);
      const idxB = list.findIndex(r => r.slot === slot);
      if (idxA !== -1 && idxB !== -1) {
        const from = Math.min(idxA, idxB), to = Math.max(idxA, idxB);
        for (let i = from; i <= to; i++) selected.add(list[i].slot);
        render();
        return;
      }
    }
    if (selected.has(slot)) selected.delete(slot); else selected.add(slot);
    lastClickedSlot = slot;
    render();
  }

  function updateStats() {
    const used = records.filter(r => r.used && !r.deleted);
    const deletedCount = records.filter(r => r.deleted).length;
    $("statTotal").textContent = records.length;
    $("statUsed").textContent = used.length;
    $("statEnc").textContent = used.filter(r => r.encrypted).length;
    $("statFree").textContent = used.filter(r => !r.encrypted).length;
    $("statDeleted").textContent = deletedCount;
    $("statShown").textContent = tbody.children.length;
    $("statSelected").textContent = selected.size;
  }

  // ---------- drag & drop reorder (reassigns channelNo based on new visual order) ----------
  let dragSlot = null;
  function attachDragHandlers() {
    const rows = [...tbody.querySelectorAll("tr")];
    rows.forEach(tr => {
      tr.addEventListener("dragstart", () => {
        dragSlot = parseInt(tr.dataset.slot, 10);
        tr.classList.add("dragging");
      });
      tr.addEventListener("dragend", () => {
        tr.classList.remove("dragging");
        rows.forEach(r => r.classList.remove("drop-target"));
      });
      tr.addEventListener("dragover", (e) => {
        e.preventDefault();
        tr.classList.add("drop-target");
      });
      tr.addEventListener("dragleave", () => tr.classList.remove("drop-target"));
      tr.addEventListener("drop", (e) => {
        e.preventDefault();
        tr.classList.remove("drop-target");
        const targetSlot = parseInt(tr.dataset.slot, 10);
        if (dragSlot === null || targetSlot === dragSlot) return;
        reorderBySlots(dragSlot, targetSlot);
      });
    });
  }

  function reorderBySlots(fromSlot, toSlot) {
    // Always reorder against the full active channel list (not the current
    // filtered/search view) so a drag never leaves channels outside the
    // current filter with stale numbers while the visible ones get
    // renumbered around them.
    const list = allActive();
    const fromIdx = list.findIndex(r => r.slot === fromSlot);
    const toIdx = list.findIndex(r => r.slot === toSlot);
    if (fromIdx === -1 || toIdx === -1) return;
    const [moved] = list.splice(fromIdx, 1);
    list.splice(toIdx, 0, moved);
    const start = parseInt($("renumberStart").value || "1", 10);
    list.forEach((r, i) => { r.channelNo = start + i; });
    sortKey = "channelNo"; sortDir = 1;
    toast(t("renumberedFrom", { n: list.length, start }), "ok");
    render();
  }

  // ---------- language toggle ----------
  $("langToggle").addEventListener("click", () => {
    lang = lang === "tr" ? "en" : "tr";
    localStorage.setItem("scmEditorLang", lang);
    applyStaticTranslations();
    if (records) {
      render();
      pickerRenderResults();
      pickerRenderChosen();
    }
  });
  applyStaticTranslations();

  // ---------- toolbar actions ----------
  $("openBtn").addEventListener("click", () => $("fileInput").click());
  $("fileInput").addEventListener("change", (e) => {
    if (e.target.files[0]) handleFile(e.target.files[0]);
  });

  function resetApp() {
    if (!confirm(t("confirmReset"))) return;
    zipEntries = null;
    records = null;
    selected = new Set();
    lastClickedSlot = null;
    pickOrder = [];
    $("fileInput").value = "";
    $("app").classList.remove("visible");
    $("dropzone").style.display = "";
    $("resetBtn").classList.add("hidden");
    $("saveBtn").classList.add("hidden");
    $("saveBtn").disabled = true;
    $("status").classList.add("hidden");
    $("status").textContent = "";
  }
  $("resetBtn").addEventListener("click", resetApp);

  $("loadExampleLink").addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      $("status").textContent = t("downloadingExample");
      const resp = await fetch("example/channel_list_UE40ES8000_1201.scm");
      if (!resp.ok) throw new Error(t("exampleNotFound", { status: resp.status }));
      const blob = await resp.blob();
      const file = new File([blob], "channel_list_UE40ES8000_1201.scm", { type: "application/octet-stream" });
      await handleFile(file);
    } catch (err) {
      console.error(err);
      toast(t("exampleLoadFailed", { msg: err.message }), "error");
      $("status").textContent = "";
    }
  });

  const dz = $("dropzone");
  dz.addEventListener("dragover", (e) => { e.preventDefault(); dz.classList.add("dragover"); });
  dz.addEventListener("dragleave", () => dz.classList.remove("dragover"));
  dz.addEventListener("drop", (e) => {
    e.preventDefault();
    dz.classList.remove("dragover");
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  });

  $("search").addEventListener("input", render);
  $("filterEnc").addEventListener("change", render);
  $("filterType").addEventListener("change", render);
  $("showDeleted").addEventListener("change", render);

  document.querySelectorAll("thead th[data-sort]").forEach(th => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      if (sortKey === key) sortDir *= -1; else { sortKey = key; sortDir = 1; }
      render();
    });
  });

  $("selectAllBtn").addEventListener("click", () => {
    visibleList().forEach(r => selected.add(r.slot));
    render();
  });
  $("selectNoneBtn").addEventListener("click", () => {
    selected.clear();
    lastClickedSlot = null;
    render();
  });
  $("headerCheck").addEventListener("change", (e) => {
    if (e.target.checked) visibleList().forEach(r => selected.add(r.slot));
    else selected.clear();
    render();
  });
  $("selectFirstNBtn").addEventListener("click", () => {
    const n = Math.max(1, parseInt($("selectFirstN").value || "10", 10));
    const list = visibleList().slice(0, n);
    if (list.length === 0) { toast(t("noChannelsInView")); return; }
    selected = new Set(list.map(r => r.slot));
    lastClickedSlot = list[list.length - 1].slot;
    toast(t("firstNSelected", { n: list.length }), "ok");
    render();
  });

  // ---------- dropdown menus ----------
  function setupMenu(triggerId, panelId) {
    const trigger = $(triggerId), panel = $(panelId);
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = panel.classList.contains("open");
      document.querySelectorAll(".menu-panel.open").forEach(p => p.classList.remove("open"));
      document.querySelectorAll(".menu-trigger.open").forEach(b => b.classList.remove("open"));
      if (!isOpen) { panel.classList.add("open"); trigger.classList.add("open"); }
    });
    panel.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        panel.classList.remove("open");
        trigger.classList.remove("open");
      }
    });
  }
  setupMenu("sortMenuBtn", "sortMenuPanel");
  setupMenu("deleteMenuBtn", "deleteMenuPanel");
  document.addEventListener("click", () => {
    document.querySelectorAll(".menu-panel.open").forEach(p => p.classList.remove("open"));
    document.querySelectorAll(".menu-trigger.open").forEach(b => b.classList.remove("open"));
  });

  $("deleteBtn").addEventListener("click", () => {
    if (selected.size === 0) { toast(t("selectToDeleteFirst")); return; }
    if (!confirm(t("confirmDeleteSelected", { n: selected.size }))) return;
    for (const slot of selected) {
      const r = records.find(x => x.slot === slot);
      if (r) r.deleted = true;
    }
    selected.clear();
    render();
  });
  $("undeleteBtn").addEventListener("click", () => {
    if (selected.size === 0) { toast(t("selectToRestoreFirst")); return; }
    for (const slot of selected) {
      const r = records.find(x => x.slot === slot);
      if (r) r.deleted = false;
    }
    render();
  });

  $("renumberBtn").addEventListener("click", () => {
    const start = parseInt($("renumberStart").value || "1", 10);
    const list = visibleList();
    list.forEach((r, i) => { r.channelNo = start + i; });
    toast(t("renumberedFrom", { n: list.length, start }), "ok");
    render();
  });

  // ---------- sort modes: reorder a group to the front/back of the full active list, renumber sequentially ----------
  function allActive() {
    return records.filter(r => r.used && !r.deleted).sort((a, b) => a.channelNo - b.channelNo);
  }
  function applyOrder(newOrder, label) {
    const start = parseInt($("renumberStart").value || "1", 10);
    newOrder.forEach((r, i) => { r.channelNo = start + i; });
    toast(label + t("orderAppliedSuffix", { count: newOrder.length, start }), "ok");
    render();
  }
  function moveGroupToStart(predicate, label) {
    const list = allActive();
    const moved = list.filter(predicate);
    const rest = list.filter(r => !predicate(r));
    if (moved.length === 0) { toast(t("noMatchingGroup")); return; }
    applyOrder([...moved, ...rest], label);
  }
  function moveGroupToEnd(predicate, label) {
    const list = allActive();
    const moved = list.filter(predicate);
    const rest = list.filter(r => !predicate(r));
    if (moved.length === 0) { toast(t("noMatchingGroup")); return; }
    applyOrder([...rest, ...moved], label);
  }

  $("sortNameBtn").addEventListener("click", () => {
    const list = allActive().sort((a, b) => a.name.localeCompare(b.name, t("localeCode")));
    applyOrder(list, t("sortedByName"));
  });
  $("selFirstBtn").addEventListener("click", () => {
    if (selected.size === 0) { toast(t("selectChannelFirst")); return; }
    moveGroupToStart(r => selected.has(r.slot), t("selectedToTop"));
  });
  $("selLastBtn").addEventListener("click", () => {
    if (selected.size === 0) { toast(t("selectChannelFirst")); return; }
    moveGroupToEnd(r => selected.has(r.slot), t("selectedToBottom"));
  });
  $("radioFirstBtn").addEventListener("click", () => {
    moveGroupToStart(r => serviceLabel(r.serviceType) === "radio", t("radiosToTop"));
  });
  $("radioLastBtn").addEventListener("click", () => {
    moveGroupToEnd(r => serviceLabel(r.serviceType) === "radio", t("radiosToBottom"));
  });
  $("encFirstBtn").addEventListener("click", () => {
    moveGroupToStart(r => r.encrypted, t("encToTop"));
  });
  $("encLastBtn").addEventListener("click", () => {
    moveGroupToEnd(r => r.encrypted, t("encToBottom"));
  });

  // ---------- bulk delete presets ----------
  function deleteWhere(predicate, label) {
    const list = allActive().filter(predicate);
    if (list.length === 0) { toast(t("noMatchingGroup")); return; }
    if (!confirm(t("confirmDeleteGroup", { label, count: list.length }))) return;
    list.forEach(r => { r.deleted = true; });
    selected.clear();
    toast(t("deletedGroupToast", { count: list.length, label }), "ok");
    render();
  }
  $("deleteEncBtn").addEventListener("click", () => deleteWhere(r => r.encrypted, t("labelAllEncrypted")));
  $("deleteFreeBtn").addEventListener("click", () => deleteWhere(r => !r.encrypted, t("labelAllFree")));
  $("deleteRadioBtn").addEventListener("click", () => deleteWhere(r => serviceLabel(r.serviceType) === "radio", t("labelAllRadio")));
  $("deleteTvBtn").addEventListener("click", () => deleteWhere(r => serviceLabel(r.serviceType) !== "radio", t("labelAllTv")));
  $("deleteSdBtn").addEventListener("click", () => deleteWhere(r => serviceLabel(r.serviceType) === "sd", t("labelAllSd")));
  $("deleteHdBtn").addEventListener("click", () => deleteWhere(r => serviceLabel(r.serviceType) === "hd", t("labelAllHd")));
  $("deleteEmptyBtn").addEventListener("click", () => deleteWhere(r => r.name.trim() === "", t("labelEmptyNamed")));

  // ---------- "search & build order" picker modal ----------
  let pickOrder = []; // array of slots, in the order the user clicked them

  function pickerRenderResults() {
    if (!records) return;
    const q = $("pickerSearch").value.trim().toLowerCase();
    const box = $("pickerResults");
    box.innerHTML = "";
    if (!q) {
      box.innerHTML = '<div class="pick-empty">' + escapeHtml(t("pickerStartHint")) + '</div>';
      $("pickerResultCount").textContent = "";
      return;
    }
    const matches = allActive().filter(r => r.name.toLowerCase().includes(q)).slice(0, 200);
    $("pickerResultCount").textContent = t("pickerResultsCount", { n: matches.length });
    if (matches.length === 0) {
      box.innerHTML = '<div class="pick-empty">' + escapeHtml(t("pickerNoResults")) + '</div>';
      return;
    }
    const frag = document.createDocumentFragment();
    for (const r of matches) {
      const added = pickOrder.includes(r.slot);
      const row = document.createElement("div");
      row.className = "pick-item" + (added ? " added" : "");
      row.innerHTML =
        '<span class="pi-name">' + escapeHtml(r.name || t("unnamed")) + '</span>' +
        badgesHtml(r) +
        '<span style="color:var(--muted);font-size:11px;">No ' + r.channelNo + '</span>' +
        '<span style="color:var(--muted);font-size:14px;">' + (added ? "✓" : "+") + '</span>';
      row.addEventListener("click", () => {
        const idx = pickOrder.indexOf(r.slot);
        if (idx === -1) pickOrder.push(r.slot); else pickOrder.splice(idx, 1);
        pickerRenderResults();
        pickerRenderChosen();
      });
      frag.appendChild(row);
    }
    box.appendChild(frag);
  }

  function pickerRenderChosen() {
    if (!records) return;
    const box = $("pickerChosen");
    box.innerHTML = "";
    $("pickerCount").textContent = t("pickerChosenCount", { n: pickOrder.length });
    if (pickOrder.length === 0) {
      box.innerHTML = '<div class="pick-empty">' + escapeHtml(t("pickerEmptyChosen")) + '</div>';
      return;
    }
    const frag = document.createDocumentFragment();
    pickOrder.forEach((slot, i) => {
      const r = records.find(x => x.slot === slot);
      if (!r) return;
      const row = document.createElement("div");
      row.className = "pick-item";
      const orderBadge = document.createElement("span");
      orderBadge.className = "pi-order";
      orderBadge.textContent = i + 1;
      const name = document.createElement("span");
      name.className = "pi-name";
      name.textContent = r.name || t("unnamed");
      const badges = document.createElement("span");
      badges.innerHTML = badgesHtml(r);
      const upBtn = document.createElement("button");
      upBtn.className = "pi-move"; upBtn.textContent = "▲"; upBtn.title = t("moveUpTitle");
      upBtn.disabled = i === 0;
      upBtn.addEventListener("click", (e) => { e.stopPropagation(); [pickOrder[i - 1], pickOrder[i]] = [pickOrder[i], pickOrder[i - 1]]; pickerRenderChosen(); });
      const downBtn = document.createElement("button");
      downBtn.className = "pi-move"; downBtn.textContent = "▼"; downBtn.title = t("moveDownTitle");
      downBtn.disabled = i === pickOrder.length - 1;
      downBtn.addEventListener("click", (e) => { e.stopPropagation(); [pickOrder[i + 1], pickOrder[i]] = [pickOrder[i], pickOrder[i + 1]]; pickerRenderChosen(); });
      const rmBtn = document.createElement("button");
      rmBtn.className = "pi-remove"; rmBtn.textContent = "✕"; rmBtn.title = t("removeTitle");
      rmBtn.addEventListener("click", (e) => { e.stopPropagation(); pickOrder.splice(i, 1); pickerRenderChosen(); pickerRenderResults(); });
      row.append(orderBadge, name, badges, upBtn, downBtn, rmBtn);
      frag.appendChild(row);
    });
    box.appendChild(frag);
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function badgesHtml(r) {
    const lbl = serviceLabel(r.serviceType);
    const typeCls = lbl === "hd" ? "hd" : lbl === "radio" ? "radio" : "sd";
    const typeText = lbl === "hd" ? t("badgeHd") : lbl === "radio" ? t("badgeRadio") : t("badgeSd");
    const encCls = r.encrypted ? "enc" : "free";
    const encText = r.encrypted ? "🔒" : "🔓";
    return '<span class="badge ' + typeCls + '">' + typeText + '</span>' +
      '<span class="badge ' + encCls + '">' + encText + '</span>';
  }

  function openPicker() {
    pickOrder = [];
    $("pickerSearch").value = "";
    $("pickerStart").value = $("renumberStart").value || "1";
    pickerRenderResults();
    pickerRenderChosen();
    $("pickerOverlay").classList.add("open");
    setTimeout(() => $("pickerSearch").focus(), 0);
  }
  function closePicker() {
    $("pickerOverlay").classList.remove("open");
  }

  $("openPickerBtn").addEventListener("click", openPicker);
  $("pickerCloseX").addEventListener("click", closePicker);
  $("pickerCancelBtn").addEventListener("click", closePicker);
  $("pickerOverlay").addEventListener("click", (e) => { if (e.target.id === "pickerOverlay") closePicker(); });
  $("pickerSearch").addEventListener("input", pickerRenderResults);
  $("pickerClearBtn").addEventListener("click", () => { pickOrder = []; pickerRenderChosen(); pickerRenderResults(); });
  $("pickerSaveBtn").addEventListener("click", () => {
    if (pickOrder.length === 0) { toast(t("addAtLeastOne")); return; }
    const start = parseInt($("pickerStart").value || "1", 10);
    const list = allActive();
    const picked = pickOrder.map(slot => list.find(r => r.slot === slot)).filter(Boolean);
    const rest = list.filter(r => !pickOrder.includes(r.slot));
    const newOrder = [...picked, ...rest];
    newOrder.forEach((r, i) => { r.channelNo = start + i; });
    $("renumberStart").value = start;
    toast(t("pickedAppliedToast", { n: picked.length }), "ok");
    closePicker();
    render();
  });

  $("saveBtn").addEventListener("click", async () => {
    try {
      $("status").textContent = t("saving");
      const newSateData = recordsToBuffer(records);
      const newEntries = zipEntries.map(e => e.name === "map-SateD" ? { ...e, data: newSateData, modified: true } : e);
      const zipBytes = await buildZip(newEntries);
      const blob = new Blob([zipBytes], { type: "application/octet-stream" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = originalFileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      $("status").textContent = t("saved", { name: originalFileName });
      toast(t("downloaded", { name: originalFileName }), "ok");
    } catch (err) {
      console.error(err);
      toast(t("saveError", { msg: err.message }), "error");
    }
  });

  if (!window.CompressionStream || !window.DecompressionStream) {
    toast(t("compressionUnsupported"), "error");
  }
})();
