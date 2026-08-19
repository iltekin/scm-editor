(() => {
  "use strict";

  // ---------- i18n ----------
  const I18N = {
    tr: {
      pageTitle: "Samsung ZIP Kanal Listesi Düzenleyici",
      backToHub: "← Ana Menü",
      backToScm: "← SCM Editörüne Dön",
      h1: "📡 Samsung ZIP Kanal Listesi Düzenleyici",
      headerSub: "Yeni Samsung TV ZIP formatı (Channel_list_....zip) — tamamen tarayıcıda çalışır",
      resetBtn: "↺ Sıfırla",
      saveBtn: "💾 Kaydet (.zip indir)",
      dropzoneTitle: "Channel_list_....zip dosyanı buraya sürükle veya seç",
      dropzoneP: "Yeni Samsung TV'den USB ile aldığın <code>Channel_list_....zip</code> dosyasını yükle.<br>Dosya yerleşik SQLite WebAssembly motoru ile tarayıcı belleğinde işlenir — hiçbir sunucuya yüklenmez.",
      openBtn: "Dosya Seç",
      loadExample: "Örnek dosyayı yükle (T-MSLDEUC)",
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
      sortMenuBtn: "🔀 Kanal Sırası ▾",
      sortMenuHelp: "Bu seçenekler yalnızca yeni sırayı önizler; kanal numaraları sen uygulayana kadar değişmez.",
      startNoLabel: "Başlangıç No:",
      menuSortGroupTitle: "Sıra oluştur (önizleme)",
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
      deleteDuplicateBtn: "Mükerrer kanalları sil (HD'yi koru)",
      hintHtml: '💡 İpucu: Bir satıra tıklayıp seç, sonra <kbd>Shift</kbd> tuşunu basılı tutarak başka bir satıra tıkla — aradaki tüm kanallar tek seferde seçilir.',
      statTotalLabel: "Toplam kayıt:",
      statUsedLabel: "Kullanılan:",
      statEncLabel: "Şifreli:",
      statFreeLabel: "Şifresiz:",
      statDeletedLabel: "Silinen (bu oturumda):",
      statShownLabel: "Gösterilen:",
      statSelectedLabel: "Seçili:",
      thNo: "No ▾",
      thOrder: "Sıra",
      thName: "Kanal Adı",
      thType: "Tür",
      thEnc: "Şifreli",
      footerNote: 'Not: Bu araç yeni nesil Samsung TV\'lerin SQLite tabanlı ZIP kanal listesini düzenler. Kanal adı, kanal numarası, şifreli bayrağı ve silme işlemleri test edilip doğrulanmıştır. Kaydetmeden önce orijinal dosyanın bir yedeğini almanı öneririz.',
      pickerTitle: "🎯 Aratarak Sıra Oluştur",
      pickerColSearch: "Kanal ara",
      pickerColChosen: "Seçilen sıra",
      pickerSearchPlaceholder: "Yazmaya başla, kanal adında ara...",
      pickerClearBtn: "Listeyi Temizle",
      pickerCancelBtn: "İptal",
      pickerSaveBtn: "💾 Kaydet ve Başa Uygula",

      // dynamic
      loading: "Yükleniyor...",
      noSqliteDb: 'Bu ZIP dosyasında "dvbs" veya geçerli bir SQLite kanal veritabanı bulunamadı.',
      fileLoaded: "{name} yüklendi ({count} kanal bulundu).",
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
      draftOrderTitle: "Yeni kanal sırası önizleniyor",
      draftOrderCount: "{count} kanal — mevcut numaralar henüz değişmedi.",
      manualNumberTitle: "Manuel kanal numarası değişikliği bekliyor",
      manualNumberCount: "{count} numara değişikliği — uygulayana kadar satırlar yerinde kalır.",
      applyOrderChangesBtn: "Uygula",
      cancelDraftOrderBtn: "Vazgeç",
      draftOrderApplied: "Yeni sıra {start}'den başlayarak {count} kanalın numaralarına uygulandı.",
      draftOrderCancelled: "Taslak kanal sırası iptal edildi.",
      manualNumbersApplied: "{count} manuel kanal numarası değişikliği uygulandı.",
      manualNumbersCancelled: "Manuel kanal numarası değişiklikleri iptal edildi.",
      resolveManualFirst: "Yeni bir sıra oluşturmadan önce manuel numara değişikliklerini uygula veya iptal et.",
      finishDraftFirst: "Tabloyu farklı sıralamak için önce taslak sırayı uygula veya iptal et.",
      applyDraftBeforeSave: "Kaydetmeden önce bekleyen sıra veya numara değişikliklerini uygula ya da iptal et.",
      firstNSelected: "İlk {n} kanal seçildi.",
      confirmDeleteSelected: "{n} kanal silinsin mi? (Kaydetmeden önce geri alabilirsin)",
      selectToDeleteFirst: "Önce silinecek kanalları seç.",
      selectToRestoreFirst: "Önce geri alınacak kanalları seç.",
      renumberedFrom: "{n} kanal {start}'den başlayarak yeniden numaralandı.",
      sortedByName: "İsme göre sıra önizlemesi hazır",
      selectedToTop: "Seçilenlerin başta olduğu sıra önizleniyor",
      selectedToBottom: "Seçilenlerin sonda olduğu sıra önizleniyor",
      radiosToTop: "Radyoların başta olduğu sıra önizleniyor",
      radiosToBottom: "Radyoların sonda olduğu sıra önizleniyor",
      encToTop: "Şifrelilerin başta olduğu sıra önizleniyor",
      encToBottom: "Şifrelilerin sonda olduğu sıra önizleniyor",
      orderAppliedSuffix: " ({count} kanal; numaralar henüz değişmedi).",
      noMatchingGroup: "Bu gruba uyan kanal yok.",
      selectChannelFirst: "Önce kanal seç.",
      labelAllEncrypted: "Tüm şifreli kanallar",
      labelAllFree: "Tüm şifresiz kanallar",
      labelAllRadio: "Tüm radyolar",
      labelAllTv: "Tüm TV kanalları",
      labelAllSd: "Tüm SD kanallar",
      labelAllHd: "Tüm HD kanallar",
      labelEmptyNamed: "Boş isimli kanallar",
      labelDuplicateNamed: "Mükerrer kanallar (HD tercih edilir)",
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
      compressionUnsupported: "Bu tarayıcı CompressionStream API'sini desteklemiyor.",
      confirmReset: "Sıfırlamak istediğine emin misin? Kaydedilmemiş değişiklikler kaybolacak ve dosya seçme ekranına döneceksin.",
      localeCode: "tr",
    },
    en: {
      pageTitle: "Samsung ZIP Channel List Editor",
      backToHub: "← Main Menu",
      backToScm: "← Back to SCM Editor",
      h1: "📡 Samsung ZIP Channel List Editor",
      headerSub: "New Samsung TV ZIP format (Channel_list_....zip) — runs entirely in your browser",
      resetBtn: "↺ Reset",
      saveBtn: "💾 Save (download .zip)",
      dropzoneTitle: "Drag & drop your Channel_list_....zip file, or select one",
      dropzoneP: "Upload the <code>Channel_list_....zip</code> file exported from your new Samsung TV.<br>Processed entirely in browser memory via bundled WebAssembly SQLite — nothing sent to any server.",
      openBtn: "Select File",
      loadExample: "Load example file (T-MSLDEUC)",
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
      sortMenuBtn: "🔀 Channel Order ▾",
      sortMenuHelp: "These actions only preview a new order; channel numbers stay unchanged until you apply it.",
      startNoLabel: "Start No.:",
      menuSortGroupTitle: "Build order (preview)",
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
      deleteDuplicateBtn: "Delete duplicate channels (keep HD)",
      hintHtml: '💡 Tip: Click a row to select it, then hold <kbd>Shift</kbd> and click another row — every channel in between gets selected at once.',
      statTotalLabel: "Total records:",
      statUsedLabel: "Used:",
      statEncLabel: "Encrypted:",
      statFreeLabel: "Free-to-air:",
      statDeletedLabel: "Deleted (this session):",
      statShownLabel: "Shown:",
      statSelectedLabel: "Selected:",
      thNo: "No ▾",
      thOrder: "Order",
      thName: "Channel Name",
      thType: "Type",
      thEnc: "Encrypted",
      footerNote: 'Note: This tool edits SQLite-based ZIP channel lists exported from newer Samsung TVs. Channel name, channel number, encrypted flag, and deletion operations have been tested and verified. We recommend keeping a backup of your original file before saving.',
      pickerTitle: "🎯 Build Order by Searching",
      pickerColSearch: "Search channels",
      pickerColChosen: "Selected order",
      pickerSearchPlaceholder: "Start typing to search by channel name...",
      pickerClearBtn: "Clear List",
      pickerCancelBtn: "Cancel",
      pickerSaveBtn: "💾 Save & Apply to Top",

      // dynamic
      loading: "Loading...",
      noSqliteDb: 'No "dvbs" or valid SQLite channel database found in this ZIP archive.',
      fileLoaded: "{name} loaded ({count} channels found).",
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
      draftOrderTitle: "Previewing a new channel order",
      draftOrderCount: "{count} channels — current numbers have not changed yet.",
      manualNumberTitle: "Manual channel-number changes are pending",
      manualNumberCount: "{count} number changes — rows stay in place until you apply them.",
      applyOrderChangesBtn: "Apply",
      cancelDraftOrderBtn: "Cancel",
      draftOrderApplied: "The new order was applied to {count} channel numbers starting from {start}.",
      draftOrderCancelled: "The draft channel order was cancelled.",
      manualNumbersApplied: "{count} manual channel-number changes were applied.",
      manualNumbersCancelled: "Manual channel-number changes were cancelled.",
      resolveManualFirst: "Apply or cancel manual number changes before building a new order.",
      finishDraftFirst: "Apply or cancel the draft order before sorting the table another way.",
      applyDraftBeforeSave: "Apply or cancel pending order or number changes before saving.",
      firstNSelected: "First {n} channels selected.",
      confirmDeleteSelected: "Delete {n} channels? (You can restore them before saving)",
      selectToDeleteFirst: "Select channels to delete first.",
      selectToRestoreFirst: "Select channels to restore first.",
      renumberedFrom: "{n} channels renumbered starting from {start}.",
      sortedByName: "Name-order preview is ready",
      selectedToTop: "Previewing selected channels at the top",
      selectedToBottom: "Previewing selected channels at the bottom",
      radiosToTop: "Previewing radio channels at the top",
      radiosToBottom: "Previewing radio channels at the bottom",
      encToTop: "Previewing encrypted channels at the top",
      encToBottom: "Previewing encrypted channels at the bottom",
      orderAppliedSuffix: " ({count} channels; numbers are unchanged for now).",
      noMatchingGroup: "No channels match this group.",
      selectChannelFirst: "Select a channel first.",
      labelAllEncrypted: "All encrypted channels",
      labelAllFree: "All free-to-air channels",
      labelAllRadio: "All radio channels",
      labelAllTv: "All TV channels",
      labelAllSd: "All SD channels",
      labelAllHd: "All HD channels",
      labelEmptyNamed: "Channels with empty names",
      labelDuplicateNamed: "Duplicate channels (HD preferred)",
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
      compressionUnsupported: "This browser doesn't support the CompressionStream API.",
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
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      table[n] = c >>> 0;
    }
    return table;
  })();

  function crc32(bytes) {
    let c = 0xFFFFFFFF;
    for (let i = 0; i < bytes.length; i++) {
      c = CRC_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    }
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  // ---------- Deflate Helpers ----------
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

  // ---------- ZIP Parsing ----------
  async function parseZip(buffer) {
    const view = new DataView(buffer);
    const bytes = new Uint8Array(buffer);

    let eocdOff = -1;
    for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 22 - 65557); i--) {
      if (view.getUint32(i, true) === 0x06054b50) { eocdOff = i; break; }
    }
    if (eocdOff === -1) throw new Error("Invalid ZIP file (no EOCD found).");

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

      const nameBytes = bytes.subarray(p + 46, p + 46 + nameLen);
      const name = new TextDecoder("utf-8").decode(nameBytes);

      p += 46 + nameLen + extraLen + commentLen;

      // Parse local header to find compressed data start
      const locSig = view.getUint32(localOffset, true);
      if (locSig !== 0x04034b50) throw new Error(`Corrupt local header for ${name}`);
      const locNameLen = view.getUint16(localOffset + 26, true);
      const locExtraLen = view.getUint16(localOffset + 28, true);
      const dataOffset = localOffset + 30 + locNameLen + locExtraLen;

      const compData = bytes.subarray(dataOffset, dataOffset + compSize);
      let uncompData;
      if (method === 0) {
        uncompData = compData.slice();
      } else if (method === 8) {
        uncompData = await inflateRaw(compData);
      } else {
        throw new Error(`Unsupported compression method ${method} for ${name}`);
      }

      entries.push({
        name,
        method,
        modTime,
        modDate,
        crc,
        compSize,
        uncompSize,
        data: uncompData
      });
    }

    return entries;
  }

  async function buildZip(entries) {
    const parts = [];
    const cdParts = [];
    let offset = 0;

    const encoder = new TextEncoder();

    for (const entry of entries) {
      const nameBytes = encoder.encode(entry.name);
      const crcVal = crc32(entry.data);
      const compBytes = await deflateRaw(entry.data);

      const locHeader = new Uint8Array(30 + nameBytes.length);
      const v = new DataView(locHeader.buffer);
      v.setUint32(0, 0x04034b50, true);
      v.setUint16(4, 20, true);
      v.setUint16(6, 0, true);
      v.setUint16(8, 8, true); // Deflate
      v.setUint16(10, entry.modTime || 0, true);
      v.setUint16(12, entry.modDate || 0, true);
      v.setUint32(14, crcVal, true);
      v.setUint32(18, compBytes.length, true);
      v.setUint32(22, entry.data.length, true);
      v.setUint16(26, nameBytes.length, true);
      v.setUint16(28, 0, true);
      locHeader.set(nameBytes, 30);

      parts.push(locHeader);
      parts.push(compBytes);

      const cdHeader = new Uint8Array(46 + nameBytes.length);
      const cdv = new DataView(cdHeader.buffer);
      cdv.setUint32(0, 0x02014b50, true);
      cdv.setUint16(4, 20, true);
      cdv.setUint16(6, 20, true);
      cdv.setUint16(8, 0, true);
      cdv.setUint16(10, 8, true);
      cdv.setUint16(12, entry.modTime || 0, true);
      cdv.setUint16(14, entry.modDate || 0, true);
      cdv.setUint32(16, crcVal, true);
      cdv.setUint32(20, compBytes.length, true);
      cdv.setUint32(24, entry.data.length, true);
      cdv.setUint16(28, nameBytes.length, true);
      cdv.setUint16(30, 0, true);
      cdv.setUint16(32, 0, true);
      cdv.setUint16(34, 0, true);
      cdv.setUint16(36, 0, true);
      cdv.setUint32(38, 0, true);
      cdv.setUint32(42, offset, true);
      cdHeader.set(nameBytes, 46);

      cdParts.push(cdHeader);
      offset += locHeader.length + compBytes.length;
    }

    const cdOffset = offset;
    let cdSize = 0;
    for (const p of cdParts) cdSize += p.length;

    const eocd = new Uint8Array(22);
    const ev = new DataView(eocd.buffer);
    ev.setUint32(0, 0x06054b50, true);
    ev.setUint16(4, 0, true);
    ev.setUint16(6, 0, true);
    ev.setUint16(8, entries.length, true);
    ev.setUint16(10, entries.length, true);
    ev.setUint32(12, cdSize, true);
    ev.setUint32(16, cdOffset, true);
    ev.setUint16(20, 0, true);

    const allParts = [...parts, ...cdParts, eocd];
    return new Blob(allParts, { type: "application/zip" });
  }

  // ---------- Samsung UTF-16 Byte Swap Encoding ----------
  function decodeSamsungString(str) {
    if (!str) return "";
    let res = "";
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      const b1 = code & 0xff;
      const b2 = (code >> 8) & 0xff;
      const realCode = (b1 << 8) | b2;
      if (realCode === 0) break;
      res += String.fromCharCode(realCode);
    }
    return res;
  }

  function encodeSamsungString(str) {
    if (!str) return "";
    let res = "";
    for (let i = 0; i < str.length; i++) {
      const realCode = str.charCodeAt(i);
      const b1 = (realCode >> 8) & 0xff;
      const b2 = realCode & 0xff;
      const dbCode = (b2 << 8) | b1;
      res += String.fromCharCode(dbCode);
    }
    return res;
  }

  // ---------- State ----------
  let SQLModule = null;
  let rawZipEntries = null;
  let dbFileName = null;
  let sqliteDbInstance = null;
  let loadedFileName = "";
  let allChannels = [];
  let sortState = { col: "channelNo", asc: true };
  let selectedSet = new Set();
  let lastClickedIndex = -1;
  let pickerChosenList = [];
  let dragIds = [];
  let draftOrder = null; // channel ids in preview order; channelNo stays unchanged until applied
  let pendingNumbers = new Map(); // channel id -> staged channelNo

  // DOM Elements
  const dropzone = document.getElementById("dropzone");
  const appDiv = document.getElementById("app");
  const fileInput = document.getElementById("fileInput");
  const openBtn = document.getElementById("openBtn");
  const resetBtn = document.getElementById("resetBtn");
  const saveBtn = document.getElementById("saveBtn");
  const statusEl = document.getElementById("status");
  const loadExampleLink = document.getElementById("loadExampleLink");

  const searchInput = document.getElementById("search");
  const filterEnc = document.getElementById("filterEnc");
  const filterType = document.getElementById("filterType");
  const showDeletedCheck = document.getElementById("showDeleted");
  const tbody = document.getElementById("tbody");

  const selectAllBtn = document.getElementById("selectAllBtn");
  const selectNoneBtn = document.getElementById("selectNoneBtn");
  const selectFirstNBtn = document.getElementById("selectFirstNBtn");
  const selectFirstNInput = document.getElementById("selectFirstN");
  const deleteBtn = document.getElementById("deleteBtn");
  const undeleteBtn = document.getElementById("undeleteBtn");

  const sortMenuBtn = document.getElementById("sortMenuBtn");
  const sortMenuPanel = document.getElementById("sortMenuPanel");
  const renumberStartInput = document.getElementById("renumberStart");
  const orderDraftBar = document.getElementById("orderDraftBar");
  const orderChangeTitle = document.getElementById("orderChangeTitle");
  const draftStartControls = document.getElementById("draftStartControls");
  const draftOrderCount = document.getElementById("draftOrderCount");
  const applyDraftOrderBtn = document.getElementById("applyDraftOrderBtn");
  const cancelDraftOrderBtn = document.getElementById("cancelDraftOrderBtn");
  const sortNameBtn = document.getElementById("sortNameBtn");
  const selFirstBtn = document.getElementById("selFirstBtn");
  const selLastBtn = document.getElementById("selLastBtn");
  const radioFirstBtn = document.getElementById("radioFirstBtn");
  const radioLastBtn = document.getElementById("radioLastBtn");
  const encFirstBtn = document.getElementById("encFirstBtn");
  const encLastBtn = document.getElementById("encLastBtn");

  const deleteMenuBtn = document.getElementById("deleteMenuBtn");
  const deleteMenuPanel = document.getElementById("deleteMenuPanel");
  const deleteSdBtn = document.getElementById("deleteSdBtn");
  const deleteHdBtn = document.getElementById("deleteHdBtn");
  const deleteRadioBtn = document.getElementById("deleteRadioBtn");
  const deleteTvBtn = document.getElementById("deleteTvBtn");
  const deleteEncBtn = document.getElementById("deleteEncBtn");
  const deleteFreeBtn = document.getElementById("deleteFreeBtn");
  const deleteEmptyBtn = document.getElementById("deleteEmptyBtn");
  const deleteDuplicateBtn = document.getElementById("deleteDuplicateBtn");

  const openPickerBtn = document.getElementById("openPickerBtn");
  const pickerOverlay = document.getElementById("pickerOverlay");
  const pickerCloseX = document.getElementById("pickerCloseX");
  const pickerCancelBtn = document.getElementById("pickerCancelBtn");
  const pickerClearBtn = document.getElementById("pickerClearBtn");
  const pickerSaveBtn = document.getElementById("pickerSaveBtn");
  const pickerSearch = document.getElementById("pickerSearch");
  const pickerResults = document.getElementById("pickerResults");
  const pickerChosen = document.getElementById("pickerChosen");
  const pickerResultCount = document.getElementById("pickerResultCount");
  const pickerCount = document.getElementById("pickerCount");
  const pickerStart = document.getElementById("pickerStart");

  const headerCheck = document.getElementById("headerCheck");

  // Status helper
  function setStatus(msg, isError = false) {
    statusEl.textContent = msg;
    statusEl.classList.remove("hidden");
    statusEl.style.color = isError ? "var(--danger)" : "var(--muted)";
  }

  function updateDraftOrderBar() {
    for (const id of pendingNumbers.keys()) {
      const channel = allChannels.find(ch => ch.id === id);
      if (!channel || channel.deleted) pendingNumbers.delete(id);
    }
    if (!draftOrder && pendingNumbers.size === 0) {
      orderDraftBar.classList.add("hidden");
      return;
    }
    orderDraftBar.classList.remove("hidden");
    const isDraft = Boolean(draftOrder);
    orderChangeTitle.textContent = t(isDraft ? "draftOrderTitle" : "manualNumberTitle");
    draftStartControls.classList.toggle("hidden", !isDraft);
    const count = isDraft ? allChannels.filter(ch => !ch.deleted).length : pendingNumbers.size;
    draftOrderCount.textContent = t(isDraft ? "draftOrderCount" : "manualNumberCount", { count });
  }

  function normalizedChannelName(name) {
    return String(name || "")
      .normalize("NFKC")
      .trim()
      .replace(/\s+/g, " ")
      .toLocaleLowerCase("tr-TR");
  }

  function findDuplicateChannels() {
    const groups = new Map();
    for (const channel of allChannels.filter(ch => !ch.deleted)) {
      const key = normalizedChannelName(channel.name);
      if (!key) continue;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(channel);
    }

    const duplicates = [];
    for (const group of groups.values()) {
      if (group.length < 2) continue;
      const ordered = group.slice().sort((a, b) => (a.channelNo - b.channelNo) || (a.index - b.index));
      const hd = ordered.filter(ch => getChannelType(ch.serviceType) === "hd");
      const sd = ordered.filter(ch => getChannelType(ch.serviceType) === "sd");
      const keep = (hd.length ? hd : sd.length ? sd : ordered)[0];
      duplicates.push(...ordered.filter(ch => ch !== keep));
    }
    return duplicates;
  }

  // ---------- Initialize SQLite Engine ----------
  async function initSqlEngine() {
    if (SQLModule) return SQLModule;
    if (typeof window.initSqlJs !== "function") {
      throw new Error("SQLite engine library missing or not loaded.");
    }
    SQLModule = await window.initSqlJs();
    return SQLModule;
  }

  // ---------- Load ZIP & Extract Channels ----------
  async function loadZipArrayBuffer(buffer, fileName) {
    try {
      setStatus(t("loading"));
      await initSqlEngine();

      rawZipEntries = await parseZip(buffer);

      // Find database entry (usually 'dvbs' or database file with SRV table)
      let targetEntry = rawZipEntries.find(e => e.name === "dvbs" || e.name.endsWith(".db") || e.name.endsWith(".dat"));
      if (!targetEntry) {
        // Fallback to first entry that is a sqlite DB
        targetEntry = rawZipEntries.find(e => {
          if (e.data.length < 16) return false;
          const header = new TextDecoder("ascii").decode(e.data.subarray(0, 16));
          return header.startsWith("SQLite format 3");
        });
      }

      if (!targetEntry) {
        throw new Error(t("noSqliteDb"));
      }

      dbFileName = targetEntry.name;
      sqliteDbInstance = new SQLModule.Database(targetEntry.data);
      // Without this, deleting a channel leaves orphaned rows in SRV_DVB/SRV_EXT_APP/etc.
      // since their ON DELETE CASCADE never fires with foreign_keys off (SQLite's default).
      sqliteDbInstance.run("PRAGMA foreign_keys = ON");

      // Query SRV table
      const res = sqliteDbInstance.exec(
        "SELECT CAST(s.srvId AS TEXT) as srvIdStr, s.major, s.srvName, s.srvType, s.scrambled FROM SRV s ORDER BY s.major ASC"
      );

      if (!res || res.length === 0 || !res[0].values) {
        throw new Error("SRV table in database is empty or unreadable.");
      }

      allChannels = res[0].values.map((row, idx) => {
        const srvIdStr = row[0];
        const major = row[1];
        const rawName = row[2] || "";
        const srvType = row[3];
        const scrambled = row[4];

        const name = decodeSamsungString(rawName);

        return {
          id: srvIdStr,
          originalNo: major,
          channelNo: major,
          name: name,
          originalName: name,
          serviceType: srvType,
          encrypted: Boolean(scrambled),
          deleted: false,
          deletedReason: "",
          selected: false,
          index: idx
        };
      });
      draftOrder = null;
      pendingNumbers.clear();

      loadedFileName = fileName;
      dropzone.style.display = "none";
      appDiv.classList.add("visible");
      resetBtn.classList.remove("hidden");
      saveBtn.classList.remove("hidden");
      saveBtn.disabled = false;

      selectedSet.clear();
      render();
      setStatus(t("fileLoaded", { name: fileName, count: allChannels.length }));
    } catch (err) {
      console.error(err);
      setStatus(t("errorPrefix", { msg: err.message }), true);
    }
  }

  // Service Type Classifier
  function getChannelType(srvType) {
    if (srvType === 2 || srvType === 10) return "radio";
    if (srvType === 25 || srvType === 17 || srvType === 31) return "hd";
    return "sd";
  }

  // ---------- Filtering & Sorting ----------
  function getFilteredChannels() {
    const q = searchInput.value.trim().toLowerCase();
    const encVal = filterEnc.value;
    const typeVal = filterType.value;
    const showDeleted = showDeletedCheck.checked;

    let list = allChannels.filter(ch => {
      if (ch.deleted && !showDeleted) return false;
      if (q && !ch.name.toLowerCase().includes(q) && String(ch.channelNo) !== q) return false;
      if (encVal === "enc" && !ch.encrypted) return false;
      if (encVal === "free" && ch.encrypted) return false;

      const cType = getChannelType(ch.serviceType);
      if (typeVal === "sd" && cType !== "sd") return false;
      if (typeVal === "hd" && cType !== "hd") return false;
      if (typeVal === "radio" && cType !== "radio") return false;

      return true;
    });

    if (draftOrder) {
      const orderIndex = new Map(draftOrder.map((id, index) => [id, index]));
      list.sort((a, b) => {
        const ai = orderIndex.has(a.id) ? orderIndex.get(a.id) : Number.MAX_SAFE_INTEGER;
        const bi = orderIndex.has(b.id) ? orderIndex.get(b.id) : Number.MAX_SAFE_INTEGER;
        return (ai - bi) || (a.channelNo - b.channelNo);
      });
    } else {
      list.sort((a, b) => {
        let va = a[sortState.col];
        let vb = b[sortState.col];
        if (typeof va === "string") {
          const cmp = va.localeCompare(vb, lang);
          return sortState.asc ? cmp : -cmp;
        }
        return sortState.asc ? va - vb : vb - va;
      });
    }

    return list;
  }

  // ---------- Render Table & Stats ----------
  function render() {
    const visible = getFilteredChannels();
    tbody.innerHTML = "";
    const persistedIds = allChannels
      .slice()
      .sort((a, b) => (a.channelNo - b.channelNo) || (a.index - b.index))
      .map(ch => ch.id);
    const positionIds = draftOrder
      ? [...draftOrder, ...persistedIds.filter(id => !draftOrder.includes(id))]
      : persistedIds;
    const positionIndex = new Map(positionIds.map((id, index) => [id, index + 1]));

    const activeCount = allChannels.filter(c => !c.deleted).length;
    const encCount = allChannels.filter(c => !c.deleted && c.encrypted).length;
    const freeCount = activeCount - encCount;
    const deletedCount = allChannels.filter(c => c.deleted).length;

    document.getElementById("statTotal").textContent = allChannels.length;
    document.getElementById("statUsed").textContent = activeCount;
    document.getElementById("statEnc").textContent = encCount;
    document.getElementById("statFree").textContent = freeCount;
    document.getElementById("statDeleted").textContent = deletedCount;
    document.getElementById("statShown").textContent = visible.length;
    document.getElementById("statSelected").textContent = selectedSet.size;

    let allVisibleSelected = visible.length > 0 && visible.every(c => selectedSet.has(c.id));
    headerCheck.checked = allVisibleSelected;

    visible.forEach((ch, visibleIdx) => {
      const tr = document.createElement("tr");
      if (ch.deleted) tr.classList.add("deleted");
      if (selectedSet.has(ch.id)) tr.classList.add("selected");
      tr.setAttribute("draggable", "true");
      tr.dataset.id = ch.id;

      // Handle checkbox click
      const isSelected = selectedSet.has(ch.id);

      // Channel Type Badge
      const cType = getChannelType(ch.serviceType);
      let badgeHtml = "";
      if (cType === "hd") badgeHtml = `<span class="badge hd">${t("badgeHd")}</span>`;
      else if (cType === "radio") badgeHtml = `<span class="badge radio">${t("badgeRadio")}</span>`;
      else badgeHtml = `<span class="badge sd">${t("badgeSd")}</span>`;

      // Encryption Badge
      const encBadgeHtml = ch.encrypted
        ? `<span class="badge enc">${t("badgeEncrypted")}</span>`
        : `<span class="badge free">${t("badgeFree")}</span>`;

      const numberDisabled = draftOrder || ch.deleted ? "disabled" : "";
      const displayedNumber = pendingNumbers.has(ch.id) ? pendingNumbers.get(ch.id) : ch.channelNo;

      tr.innerHTML = `
        <td class="drag-handle" title="Sürükle bırak"><span class="drag-grip">⋮⋮</span><span class="order-position">#${positionIndex.get(ch.id)}</span></td>
        <td onclick="event.stopPropagation()"><input type="checkbox" class="row-check" ${isSelected ? "checked" : ""}></td>
        <td><input type="number" class="num-input" value="${displayedNumber}" min="0" max="65535" ${numberDisabled} onclick="event.stopPropagation()"></td>
        <td><input type="text" class="name-input" value="${escapeHtml(ch.name)}" onclick="event.stopPropagation()"></td>
        <td>${badgeHtml}</td>
        <td>${encBadgeHtml}</td>
      `;

      // Row Selection
      tr.addEventListener("click", (e) => {
        if (e.target.tagName === "INPUT") return;
        handleRowClick(visible, visibleIdx, e.shiftKey);
      });

      const checkEl = tr.querySelector(".row-check");
      checkEl.addEventListener("change", (e) => {
        if (e.target.checked) selectedSet.add(ch.id);
        else selectedSet.delete(ch.id);
        render();
      });

      // Number Change
      const numInp = tr.querySelector(".num-input");
      numInp.addEventListener("change", (e) => {
        const val = Math.max(0, Math.min(65535, parseInt(e.target.value || "0", 10)));
        if (val === ch.channelNo) pendingNumbers.delete(ch.id);
        else pendingNumbers.set(ch.id, val);
        render();
      });

      // Name Change
      const nameInp = tr.querySelector(".name-input");
      nameInp.addEventListener("change", (e) => {
        ch.name = e.target.value;
      });

      // Drag & Drop
      tr.addEventListener("dragstart", () => {
        dragIds = (selectedSet.has(ch.id) && selectedSet.size > 1) ? [...selectedSet] : [ch.id];
        tr.classList.add("dragging");
        if (dragIds.length > 1) {
          allChannels.forEach(c => {
            if (dragIds.includes(c.id)) {
              const row = tbody.querySelector(`tr[data-id="${c.id}"]`);
              if (row) row.classList.add("dragging");
            }
          });
        }
      });
      tr.addEventListener("dragend", () => {
        dragIds = [];
        document.querySelectorAll("tr.dragging, tr.drop-target").forEach(r => {
          r.classList.remove("dragging", "drop-target");
        });
      });
      tr.addEventListener("dragover", (e) => {
        e.preventDefault();
        tr.classList.add("drop-target");
      });
      tr.addEventListener("dragleave", () => {
        tr.classList.remove("drop-target");
      });
      tr.addEventListener("drop", (e) => {
        e.preventDefault();
        tr.classList.remove("drop-target");
        if (dragIds.length === 0 || dragIds.includes(ch.id)) return;
        if (dragIds.length === 1) {
          moveChannelBefore(dragIds[0], ch.id);
        } else {
          moveGroupBefore(dragIds, ch.id);
        }
      });

      tbody.appendChild(tr);
    });
    updateDraftOrderBar();
  }

  function handleRowClick(visibleList, clickedIdx, isShift) {
    const clickedId = visibleList[clickedIdx].id;
    if (isShift && lastClickedIndex >= 0 && lastClickedIndex < visibleList.length) {
      const start = Math.min(lastClickedIndex, clickedIdx);
      const end = Math.max(lastClickedIndex, clickedIdx);
      for (let i = start; i <= end; i++) {
        selectedSet.add(visibleList[i].id);
      }
    } else {
      if (selectedSet.has(clickedId)) {
        selectedSet.delete(clickedId);
      } else {
        selectedSet.add(clickedId);
      }
      lastClickedIndex = clickedIdx;
    }
    render();
  }

  function moveChannelBefore(sourceId, targetId) {
    const list = activeChannelsInOrder();
    const srcIdx = list.findIndex(c => c.id === sourceId);
    const tgtIdx = list.findIndex(c => c.id === targetId);
    if (srcIdx === -1 || tgtIdx === -1 || srcIdx === tgtIdx) return;

    const [item] = list.splice(srcIdx, 1);
    const adjustedTgt = srcIdx < tgtIdx ? tgtIdx - 1 : tgtIdx;
    list.splice(adjustedTgt, 0, item);

    previewChannelOrder(list);
  }

  function moveGroupBefore(sourceIds, targetId) {
    const list = activeChannelsInOrder();
    const idSet = new Set(sourceIds.map(String));
    if (idSet.size === 0) return;
    if (list.findIndex(c => c.id === targetId) === -1) return;

    const group = list.filter(c => idSet.has(c.id));
    if (group.length === 0) return;
    const rest = list.filter(c => !idSet.has(c.id));

    const insertPos = rest.findIndex(c => c.id === targetId);
    if (insertPos === -1) rest.push(...group);
    else rest.splice(insertPos, 0, ...group);

    previewChannelOrder(rest);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---------- Menu & Dialog Listeners ----------
  function setupEvents() {
    // File Inputs
    openBtn.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => loadZipArrayBuffer(ev.target.result, file.name);
        reader.readAsArrayBuffer(file);
      }
    });

    // Drag & Drop Zone
    dropzone.addEventListener("dragover", (e) => e.preventDefault());
    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => loadZipArrayBuffer(ev.target.result, file.name);
        reader.readAsArrayBuffer(file);
      }
    });

  function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  // Example loader link
  loadExampleLink.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      setStatus(t("downloadingExample"));
      if (window.SAMPLE_ZIP_B64) {
        const buf = base64ToArrayBuffer(window.SAMPLE_ZIP_B64);
        await loadZipArrayBuffer(buf, "Channel_list_T-MSLDEUC-1500.9.zip");
        return;
      }
      const resp = await fetch("example/Channel_list_T-MSLDEUC-1500.9.zip");
      if (!resp.ok) throw new Error(t("exampleNotFound", { status: resp.status }));
      const buf = await resp.arrayBuffer();
      await loadZipArrayBuffer(buf, "Channel_list_T-MSLDEUC-1500.9.zip");
    } catch (err) {
      setStatus(t("exampleLoadFailed", { msg: err.message }), true);
    }
  });

    // Reset button
    resetBtn.addEventListener("click", () => {
      if (confirm(t("confirmReset"))) {
        dropzone.style.display = "block";
        appDiv.classList.remove("visible");
        resetBtn.classList.add("hidden");
        saveBtn.classList.add("hidden");
        statusEl.classList.add("hidden");
        fileInput.value = "";
        allChannels = [];
        selectedSet.clear();
        draftOrder = null;
        pendingNumbers.clear();
      }
    });

    // Language toggle
    const langBtn = document.getElementById("langToggle");
    langBtn.addEventListener("click", () => {
      lang = lang === "tr" ? "en" : "tr";
      localStorage.setItem("scmEditorLang", lang);
      applyStaticTranslations();
      render();
    });

    // Search and filters
    searchInput.addEventListener("input", render);
    filterEnc.addEventListener("change", render);
    filterType.addEventListener("change", render);
    showDeletedCheck.addEventListener("change", render);

    // Header checkbox
    headerCheck.addEventListener("change", (e) => {
      const visible = getFilteredChannels();
      if (e.target.checked) {
        visible.forEach(c => selectedSet.add(c.id));
      } else {
        visible.forEach(c => selectedSet.delete(c.id));
      }
      render();
    });

    // Header Sort
    document.querySelectorAll("thead th[data-sort]").forEach(th => {
      th.addEventListener("click", () => {
        if (draftOrder) {
          setStatus(t("finishDraftFirst"), true);
          return;
        }
        const col = th.dataset.sort;
        if (sortState.col === col) {
          sortState.asc = !sortState.asc;
        } else {
          sortState.col = col;
          sortState.asc = true;
        }
        render();
      });
    });

    // Selection Controls
    selectAllBtn.addEventListener("click", () => {
      getFilteredChannels().forEach(c => selectedSet.add(c.id));
      render();
    });
    selectNoneBtn.addEventListener("click", () => {
      selectedSet.clear();
      render();
    });
    selectFirstNBtn.addEventListener("click", () => {
      const n = parseInt(selectFirstNInput.value, 10) || 10;
      selectedSet.clear();
      getFilteredChannels().slice(0, n).forEach(c => selectedSet.add(c.id));
      render();
      setStatus(t("firstNSelected", { n }));
    });

    // Delete / Undelete
    deleteBtn.addEventListener("click", () => {
      if (selectedSet.size === 0) {
        setStatus(t("selectToDeleteFirst"), true);
        return;
      }
      if (pendingNumbers.size > 0) {
        setStatus(t("resolveManualFirst"), true);
        return;
      }
      if (confirm(t("confirmDeleteSelected", { n: selectedSet.size }))) {
        allChannels.forEach(c => {
          if (selectedSet.has(c.id)) c.deleted = true;
        });
        selectedSet.clear();
        activateMembershipOrderPreview();
      }
    });

    undeleteBtn.addEventListener("click", () => {
      if (selectedSet.size === 0) {
        setStatus(t("selectToRestoreFirst"), true);
        return;
      }
      if (pendingNumbers.size > 0) {
        setStatus(t("resolveManualFirst"), true);
        return;
      }
      allChannels.forEach(c => {
        if (selectedSet.has(c.id)) c.deleted = false;
      });
      activateMembershipOrderPreview();
    });

    // Dropdown Panels
    setupDropdownMenu(sortMenuBtn, sortMenuPanel);
    setupDropdownMenu(deleteMenuBtn, deleteMenuPanel);

    // Sort Actions
    sortNameBtn.addEventListener("click", () => {
      const ordered = activeChannelsInOrder().sort((a, b) => a.name.localeCompare(b.name, lang));
      const changed = previewChannelOrder(ordered);
      sortMenuPanel.classList.remove("open");
      if (changed) setStatus(t("sortedByName"));
    });

    selFirstBtn.addEventListener("click", () => {
      const changed = moveGroupToTop(c => selectedSet.has(c.id));
      sortMenuPanel.classList.remove("open");
      if (changed) setStatus(t("selectedToTop"));
    });

    selLastBtn.addEventListener("click", () => {
      const changed = moveGroupToBottom(c => selectedSet.has(c.id));
      sortMenuPanel.classList.remove("open");
      if (changed) setStatus(t("selectedToBottom"));
    });

    radioFirstBtn.addEventListener("click", () => {
      const changed = moveGroupToTop(c => getChannelType(c.serviceType) === "radio");
      sortMenuPanel.classList.remove("open");
      if (changed) setStatus(t("radiosToTop"));
    });

    radioLastBtn.addEventListener("click", () => {
      const changed = moveGroupToBottom(c => getChannelType(c.serviceType) === "radio");
      sortMenuPanel.classList.remove("open");
      if (changed) setStatus(t("radiosToBottom"));
    });

    encFirstBtn.addEventListener("click", () => {
      const changed = moveGroupToTop(c => c.encrypted);
      sortMenuPanel.classList.remove("open");
      if (changed) setStatus(t("encToTop"));
    });

    encLastBtn.addEventListener("click", () => {
      const changed = moveGroupToBottom(c => c.encrypted);
      sortMenuPanel.classList.remove("open");
      if (changed) setStatus(t("encToBottom"));
    });

    applyDraftOrderBtn.addEventListener("click", applyDraftOrder);
    cancelDraftOrderBtn.addEventListener("click", cancelDraftOrder);

    // Bulk Delete Actions
    deleteSdBtn.addEventListener("click", () => bulkDeleteByFilter(c => getChannelType(c.serviceType) === "sd", t("labelAllSd")));
    deleteHdBtn.addEventListener("click", () => bulkDeleteByFilter(c => getChannelType(c.serviceType) === "hd", t("labelAllHd")));
    deleteRadioBtn.addEventListener("click", () => bulkDeleteByFilter(c => getChannelType(c.serviceType) === "radio", t("labelAllRadio")));
    deleteTvBtn.addEventListener("click", () => bulkDeleteByFilter(c => getChannelType(c.serviceType) !== "radio", t("labelAllTv")));
    deleteEncBtn.addEventListener("click", () => bulkDeleteByFilter(c => c.encrypted, t("labelAllEncrypted")));
    deleteFreeBtn.addEventListener("click", () => bulkDeleteByFilter(c => !c.encrypted, t("labelAllFree")));
    deleteEmptyBtn.addEventListener("click", () => bulkDeleteByFilter(c => !c.name.trim(), t("labelEmptyNamed")));
    deleteDuplicateBtn.addEventListener("click", () => {
      const duplicateIds = new Set(findDuplicateChannels().map(c => c.id));
      bulkDeleteByFilter(c => duplicateIds.has(c.id), t("labelDuplicateNamed"));
    });

    // Save Button
    saveBtn.addEventListener("click", saveAndDownloadZip);

    // Modal Order Builder Picker
    openPickerBtn.addEventListener("click", openPickerModal);
    pickerCloseX.addEventListener("click", closePickerModal);
    pickerCancelBtn.addEventListener("click", closePickerModal);
    pickerClearBtn.addEventListener("click", () => {
      pickerChosenList = [];
      renderPickerChosen();
    });
    pickerSearch.addEventListener("input", renderPickerResults);
    pickerSaveBtn.addEventListener("click", applyPickerOrder);
  }

  function setupDropdownMenu(triggerBtn, panelEl) {
    triggerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      panelEl.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!panelEl.contains(e.target) && e.target !== triggerBtn) {
        panelEl.classList.remove("open");
      }
    });
  }

  function activeChannelsInOrder() {
    const active = allChannels.filter(c => !c.deleted).slice();
    if (!draftOrder) {
      return active.sort((a, b) => (a.channelNo - b.channelNo) || (a.index - b.index));
    }
    const orderIndex = new Map(draftOrder.map((id, index) => [id, index]));
    return active.sort((a, b) => {
      const ai = orderIndex.has(a.id) ? orderIndex.get(a.id) : Number.MAX_SAFE_INTEGER;
      const bi = orderIndex.has(b.id) ? orderIndex.get(b.id) : Number.MAX_SAFE_INTEGER;
      return (ai - bi) || (a.channelNo - b.channelNo) || (a.index - b.index);
    });
  }

  function activateMembershipOrderPreview() {
    draftOrder = activeChannelsInOrder().map(ch => ch.id);
    render();
  }

  function previewChannelOrder(ordered) {
    if (pendingNumbers.size > 0) {
      setStatus(t("resolveManualFirst"), true);
      return false;
    }
    draftOrder = ordered.map(ch => ch.id);
    render();
    return true;
  }

  function applyDraftOrder() {
    if (draftOrder) {
      const start = parseInt(renumberStartInput.value, 10) || 1;
      const ordered = activeChannelsInOrder();
      ordered.forEach((ch, idx) => { ch.channelNo = start + idx; });
      const orderedIds = new Set(ordered.map(ch => ch.id));
      const inactive = allChannels.filter(ch => !orderedIds.has(ch.id));
      allChannels = [...ordered, ...inactive];
      draftOrder = null;
      sortState = { col: "channelNo", asc: true };
      render();
      setStatus(t("draftOrderApplied", { count: ordered.length, start }));
    } else if (pendingNumbers.size > 0) {
      const count = pendingNumbers.size;
      for (const [id, channelNo] of pendingNumbers) {
        const channel = allChannels.find(ch => ch.id === id);
        if (channel && !channel.deleted) channel.channelNo = channelNo;
      }
      pendingNumbers.clear();
      sortState = { col: "channelNo", asc: true };
      render();
      setStatus(t("manualNumbersApplied", { count }));
    }
  }

  function cancelDraftOrder() {
    if (draftOrder) {
      draftOrder = null;
      render();
      setStatus(t("draftOrderCancelled"));
    } else if (pendingNumbers.size > 0) {
      pendingNumbers.clear();
      render();
      setStatus(t("manualNumbersCancelled"));
    }
  }

  function moveGroupToTop(predicate) {
    const active = activeChannelsInOrder();
    const group = active.filter(predicate);
    if (group.length === 0) {
      setStatus(t("noMatchingGroup"), true);
      return false;
    }
    const rest = active.filter(c => !predicate(c));
    return previewChannelOrder([...group, ...rest]);
  }

  function moveGroupToBottom(predicate) {
    const active = activeChannelsInOrder();
    const group = active.filter(predicate);
    if (group.length === 0) {
      setStatus(t("noMatchingGroup"), true);
      return false;
    }
    const rest = active.filter(c => !predicate(c));
    return previewChannelOrder([...rest, ...group]);
  }

  function bulkDeleteByFilter(predicate, label) {
    deleteMenuPanel.classList.remove("open");
    if (pendingNumbers.size > 0) {
      setStatus(t("resolveManualFirst"), true);
      return;
    }
    const targets = allChannels.filter(c => !c.deleted && predicate(c));
    if (targets.length === 0) {
      setStatus(t("noMatchingGroup"), true);
      return;
    }
    if (confirm(t("confirmDeleteGroup", { label, count: targets.length }))) {
      targets.forEach(c => { c.deleted = true; });
      activateMembershipOrderPreview();
      setStatus(t("deletedGroupToast", { count: targets.length, label }));
    }
  }

  // ---------- Modal Order Builder Picker ----------
  function openPickerModal() {
    pickerChosenList = [];
    pickerSearch.value = "";
    pickerStart.value = renumberStartInput.value || "1";
    renderPickerResults();
    renderPickerChosen();
    pickerOverlay.classList.add("open");
    setTimeout(() => pickerSearch.focus(), 0);
  }

  function closePickerModal() {
    pickerOverlay.classList.remove("open");
  }

  pickerOverlay.addEventListener("click", (e) => {
    if (e.target === pickerOverlay) closePickerModal();
  });

  function renderPickerResults() {
    const q = pickerSearch.value.trim().toLowerCase();
    pickerResults.innerHTML = "";
    if (!q) {
      pickerResultCount.textContent = "";
      pickerResults.innerHTML = `<div class="pick-empty">${escapeHtml(t("pickerStartHint"))}</div>`;
      return;
    }

    const matched = allChannels.filter(c => !c.deleted && (c.name.toLowerCase().includes(q) || String(c.channelNo) === q)).slice(0, 200);
    pickerResultCount.textContent = t("pickerResultsCount", { n: matched.length });

    if (matched.length === 0) {
      pickerResults.innerHTML = `<div class="pick-empty">${escapeHtml(t("pickerNoResults"))}</div>`;
      return;
    }

    const frag = document.createDocumentFragment();
    matched.forEach(ch => {
      const added = pickerChosenList.some(c => c.id === ch.id);
      const item = document.createElement("div");
      item.className = "pick-item" + (added ? " added" : "");

      const cType = getChannelType(ch.serviceType);
      let badgeType = cType === "hd" ? "hd" : cType === "radio" ? "radio" : "sd";
      let badgeText = cType === "hd" ? t("badgeHd") : cType === "radio" ? t("badgeRadio") : t("badgeSd");
      let encText = ch.encrypted ? "🔒" : "🔓";

      item.innerHTML = `
        <span class="pi-name">${escapeHtml(ch.name || t("unnamed"))}</span>
        <span class="badge ${badgeType}">${badgeText}</span>
        <span class="badge ${ch.encrypted ? 'enc' : 'free'}">${encText}</span>
        <span style="color:var(--muted);font-size:11px;">No ${ch.channelNo}</span>
        <span style="color:var(--muted);font-size:14px;">${added ? "✓" : "+"}</span>
      `;

      item.addEventListener("click", () => {
        const idx = pickerChosenList.findIndex(c => c.id === ch.id);
        if (idx === -1) {
          pickerChosenList.push(ch);
        } else {
          pickerChosenList.splice(idx, 1);
        }
        renderPickerResults();
        renderPickerChosen();
      });

      frag.appendChild(item);
    });
    pickerResults.appendChild(frag);
  }

  function renderPickerChosen() {
    pickerChosen.innerHTML = "";
    pickerCount.textContent = t("pickerChosenCount", { n: pickerChosenList.length });

    if (pickerChosenList.length === 0) {
      pickerChosen.innerHTML = `<div class="pick-empty">${escapeHtml(t("pickerEmptyChosen"))}</div>`;
      return;
    }

    const frag = document.createDocumentFragment();
    pickerChosenList.forEach((ch, idx) => {
      const item = document.createElement("div");
      item.className = "pick-item";

      const orderBadge = document.createElement("span");
      orderBadge.className = "pi-order";
      orderBadge.textContent = idx + 1;

      const nameSpan = document.createElement("span");
      nameSpan.className = "pi-name";
      nameSpan.textContent = ch.name || t("unnamed");

      const cType = getChannelType(ch.serviceType);
      let badgeType = cType === "hd" ? "hd" : cType === "radio" ? "radio" : "sd";
      let badgeText = cType === "hd" ? t("badgeHd") : cType === "radio" ? t("badgeRadio") : t("badgeSd");
      let encText = ch.encrypted ? "🔒" : "🔓";

      const badgesSpan = document.createElement("span");
      badgesSpan.innerHTML = `<span class="badge ${badgeType}">${badgeText}</span> <span class="badge ${ch.encrypted ? 'enc' : 'free'}">${encText}</span>`;

      const upBtn = document.createElement("button");
      upBtn.className = "pi-move";
      upBtn.textContent = "▲";
      upBtn.title = t("moveUpTitle");
      upBtn.disabled = idx === 0;
      upBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (idx > 0) {
          [pickerChosenList[idx - 1], pickerChosenList[idx]] = [pickerChosenList[idx], pickerChosenList[idx - 1]];
          renderPickerChosen();
        }
      });

      const downBtn = document.createElement("button");
      downBtn.className = "pi-move";
      downBtn.textContent = "▼";
      downBtn.title = t("moveDownTitle");
      downBtn.disabled = idx === pickerChosenList.length - 1;
      downBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (idx < pickerChosenList.length - 1) {
          [pickerChosenList[idx + 1], pickerChosenList[idx]] = [pickerChosenList[idx], pickerChosenList[idx + 1]];
          renderPickerChosen();
        }
      });

      const rmBtn = document.createElement("button");
      rmBtn.className = "pi-remove";
      rmBtn.textContent = "✕";
      rmBtn.title = t("removeTitle");
      rmBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        pickerChosenList.splice(idx, 1);
        renderPickerChosen();
        renderPickerResults();
      });

      item.append(orderBadge, nameSpan, badgesSpan, upBtn, downBtn, rmBtn);
      frag.appendChild(item);
    });
    pickerChosen.appendChild(frag);
  }

  function applyPickerOrder() {
    if (pickerChosenList.length === 0) {
      alert(t("addAtLeastOne"));
      return;
    }

    const start = parseInt(pickerStart.value, 10) || 1;
    const chosenIds = new Set(pickerChosenList.map(c => c.id));
    const rest = activeChannelsInOrder().filter(c => !chosenIds.has(c.id));

    const ordered = [...pickerChosenList, ...rest];
    renumberStartInput.value = start;
    if (!previewChannelOrder(ordered)) return;

    closePickerModal();
    setStatus(t("pickedAppliedToast", { n: pickerChosenList.length }));
  }

  // ---------- Save & Download ZIP ----------
  async function saveAndDownloadZip() {
    if (draftOrder || pendingNumbers.size > 0) {
      setStatus(t("applyDraftBeforeSave"), true);
      return;
    }
    try {
      setStatus(t("saving"));

      // 1. Update SQLite Database instance
      allChannels.forEach(ch => {
        if (ch.deleted) {
          sqliteDbInstance.run("DELETE FROM SRV WHERE CAST(srvId AS TEXT) = ?", [ch.id]);
        } else {
          const encName = encodeSamsungString(ch.name);
          sqliteDbInstance.run(
            "UPDATE SRV SET major = ?, srvName = ? WHERE CAST(srvId AS TEXT) = ?",
            [ch.channelNo, encName, ch.id]
          );
        }
      });

      // 2. Export updated SQLite database bytes
      const exportedDbBytes = sqliteDbInstance.export();

      // 3. Replace in raw ZIP entries
      const dbEntry = rawZipEntries.find(e => e.name === dbFileName);
      if (dbEntry) {
        dbEntry.data = exportedDbBytes;
      }

      // 4. Build ZIP Blob
      const zipBlob = await buildZip(rawZipEntries);

      // 5. Download File
      const downloadName = loadedFileName.startsWith("edited_")
        ? loadedFileName
        : "edited_" + loadedFileName;

      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = downloadName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setStatus(t("downloaded", { name: downloadName }));
    } catch (err) {
      console.error(err);
      setStatus(t("saveError", { msg: err.message }), true);
    }
  }

  // ---------- Init ----------
  applyStaticTranslations();
  setupEvents();

})();
