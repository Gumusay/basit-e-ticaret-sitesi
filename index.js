// ÜRÜNLERİ BİR DİZİ İÇERİSİNDE OBJE AÇARAK TANIMLADIM
let urunler=[
    {
        urunAdı: 'Akıllı Telefon',
        kategori: 'Elektronik',
        fiyatı: 1500,
        Stok:10
    },
    {
        urunAdı: 'Yoga Matı',
        kategori: 'Spor',
        fiyatı: 70,
        Stok:10
    },
    {
        urunAdı: 'Elektrikli Süpürge',
        kategori: 'Elektronik',
        fiyatı: 2500,
        Stok:10
    },
    {
        urunAdı: 'Kitaplık',
        kategori: 'Mobilya',
        fiyatı: 350,
        Stok:10
    },
    {
        urunAdı: 'Laptop',
        kategori: 'Elektronik',
        fiyatı: 3000,
        Stok:10
    },
    {
        urunAdı: 'Televizyon',
        kategori: 'Elektronik',
        fiyatı: 2500,
        Stok:10
    },
    {
        urunAdı: 'Kot Pantolon',
        kategori: 'Giyim',
        fiyatı: 200,
        Stok:10
    },
    {
        urunAdı: 'T-Shirt',
        kategori: 'Giyim',
        fiyatı: 50,
        Stok:10
    },
    {
        urunAdı: 'Spor Ayakkabı',
        kategori: 'Giyim',
        fiyatı: 150,
        Stok:10
    },
    {
        urunAdı: 'Saat',
        kategori: 'Aksesuar',
        fiyatı: 300,
        Stok:10
    },
    {
        urunAdı: 'Güneş Gözlüğü',
        kategori: 'Aksesuar',
        fiyatı: 100,
        Stok:10
    },
    {
        urunAdı: 'Kettle',
        kategori: 'Mutfak',
        fiyatı: 800,
        Stok:10
    },
    {
        urunAdı: 'Çocuk Bisikleti',
        kategori: 'Spor',
        fiyatı: 400,
        Stok:10
    },
    {
        urunAdı: 'Kanepe',
        kategori: 'Mobilya',
        fiyatı: 350,
        Stok:10
    },

]

/////////////////////////////////////

// DOM ELEMENTLERİ İLE KATEGORİ ARAMADA, ÜRÜN ARAMADA, ÜRÜN LİSTESİ VE SEPET LİSTESİ İÇİN TANIMLANAN IDLERİ JAVASCRİPTTE ÇAĞIRDIM.
let kategoriSelect = document.getElementById('kategori');
let aramaInput = document.getElementById('arama');
let urunListesiDiv = document.getElementById('urun-listesi');
let sepetListesiUl = document.getElementById('sepet-listesi');

// Ürünleri listele
function urunleriListele() {
    urunListesiDiv.innerHTML = ""; // Ürün listesini temizle

    let secilenKategori = kategoriSelect.value;
    let aramaKelimesi = aramaInput.value.toLowerCase();

    for (let urun of urunler) {
        if ((secilenKategori === 'Tümü' || urun.kategori === secilenKategori) &&
            (aramaKelimesi === '' || urun.urunAdı.toLowerCase().includes(aramaKelimesi))) {
            let urunDiv = document.createElement('div');
            urunDiv.innerHTML = `
                <p>Ürün Adı: ${urun.urunAdı}</p>
                <p>Fiyatı: ${urun.fiyatı} TL</p>
                <p>Kategori: ${urun.kategori}</p>
                <p>Stok: ${urun.Stok}</p>
                <button onclick="sepeteEkle(${urun.Stok}, '${urun.urunAdı}')">Sepete Ekle</button>
            `;
            urunListesiDiv.appendChild(urunDiv);
        }
    }
}

// Sepete ürün ekle
function sepeteEkle(stok, urunAdi) {
    if (stok > 0) {
        for (let urun of urunler) {
            if (urun.urunAdı === urunAdi && urun.Stok > 0) {
                urun.Stok--;
                urunleriListele(); // Ürün listesini güncelle
                sepetListesiUl.innerHTML += `<li>${urunAdi}</li>`;
                return; // Ürünü bulduk ve güncelledik, döngüyü sonlandır
            }
        }
    } else {
        alert('Ürün stokta yok!');
    }
}

// Kategori ve arama filtrelemelerini dinle
kategoriSelect.addEventListener('change', urunleriListele);
aramaInput.addEventListener('input', urunleriListele);

// İlk sayfa yüklendiğinde ürünleri listele
urunleriListele();