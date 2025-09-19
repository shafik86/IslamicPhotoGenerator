# 🌙 Daily Islamic Poster Generator

![GitHub](https://img.shields.io/github/license/username/daily-islamic-poster-generator)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)

Penjana Poster Islamik Harian yang mudah dan pantas untuk cipta prompt AI bagi poster dengan maklumat waktu solat, hadis, dan doa harian.

## ✨ Features

- **🕌 Waktu Solat Real-time** - Integrasi dengan API e-solat gov my
- **📍 Auto Location Detection** - GPS detection untuk waktu solat mengikut lokasi
- **📖 Random Hadis & Doa** - 10 pilihan hadis dan doa yang ditukar secara rawak
- **🌙 Tarikh Hijriah** - Papar tarikh Hijriah yang tepat dari API rasmi
- **🎨 Pilihan Ilustrasi** - 3 gaya ilustrasi poster berbeza
- **🤖 AI Prompt Generator** - Jana prompt lengkap untuk ChatGPT/Copilot
- **📱 Responsive Design** - Sesuai untuk desktop dan mobile
- **⚡ Fast & Lightweight** - Vanilla JavaScript, no frameworks

## 🚀 Demo

[Live Demo](https://username.github.io/daily-islamic-poster-generator)

## 📱 Screenshots

### Desktop View
![Desktop Screenshot](screenshots/desktop-view.png)

### Mobile View
![Mobile Screenshot](screenshots/mobile-view.png)

## 🛠️ Installation

1. **Clone repository**
```bash
git clone https://github.com/username/daily-islamic-poster-generator.git
cd daily-islamic-poster-generator
```

2. **Open in browser**
```bash
# Buka index.html dalam web browser
open index.html
# atau
python -m http.server 8000  # untuk local server
```

## 📂 Project Structure

```
daily-islamic-poster-generator/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── README.md           # Project documentation
├── screenshots/        # Screenshot images
│   ├── desktop-view.png
│   └── mobile-view.png
└── LICENSE            # License file
```

## 🔧 Usage

1. **Dapatkan Data Harian**
   - Klik button "Dapatkan Semua Data Hari Ini"
   - App akan auto-detect lokasi anda (GPS permission required)
   - Waktu solat akan diambil dari API e-solat gov my

2. **Pilih Content**
   - Pilih 1 dari 3 hadis yang dipaparkan secara rawak
   - Pilih 1 dari 3 doa yang dipaparkan secara rawak  
   - Pilih gaya ilustrasi yang diingini

3. **Jana Prompt AI**
   - Klik "Jana Prompt AI" 
   - Copy prompt yang dijana
   - Paste dalam ChatGPT atau Microsoft Copilot

4. **Customize (Opsional)**
   - Edit prompt sebelum guna pada AI
   - Tambah maklumat tambahan jika perlu

## 🌍 Supported Prayer Zones

App ini menyokong **39 zon waktu solat** di seluruh Malaysia:

### Wilayah Persekutuan
- **WLY01** - Kuala Lumpur
- **WLY02** - Putrajaya  
- **WLY03** - Labuan

### Negeri-negeri
- **Johor** (JHR01-JHR03)
- **Kedah** (KDH01-KDH05) 
- **Kelantan** (KTN01-KTN02)
- **Melaka** (MLK01)
- **Negeri Sembilan** (NSN01-NSN02)
- **Pahang** (PHG01-PHG04)
- **Perak** (PRK01-PRK07)
- **Perlis** (PLS01)
- **Pulau Pinang** (PNG01)
- **Sabah** (SBH01-SBH04)
- **Sarawak** (SWK01-SWK04)

## 🔗 API Integration

### E-Solat API
- **Endpoint**: `https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat`
- **Parameters**: `period=today&zone={ZONE_CODE}`
- **Response**: JSON dengan waktu solat dan tarikh Hijriah
- **Fallback**: Local prayer times jika API gagal

## 💡 AI Prompt Features

Generated prompt termasuk:
- ✅ Tarikh Masehi & Hijriah
- ✅ Lokasi pengguna (auto-detect)
- ✅ 6 waktu solat lengkap
- ✅ Hadis terpilih (Arab + terjemahan)
- ✅ Doa terpilih (Arab + rumi + maksud)
- ✅ Spesifikasi design (1080x1080, Instagram ready)
- ✅ Gaya ilustrasi yang dipilih

## 🔒 Privacy & Permissions

- **Geolocation**: Untuk detect lokasi dan dapatkan waktu solat yang tepat
- **Internet Access**: Untuk panggil API e-solat gov my
- **No Data Storage**: Tiada maklumat peribadi disimpan
- **No Tracking**: Tiada analytics atau tracking

## 🛡️ Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 60+     | ✅ Full Support |
| Firefox | 55+     | ✅ Full Support |
| Safari  | 12+     | ✅ Full Support |
| Edge    | 79+     | ✅ Full Support |

## 🤝 Contributing

Contributions are welcome! Sila ikut langkah berikut:

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Setup

```bash
# Clone your fork
git clone https://github.com/yourusername/daily-islamic-poster-generator.git

# Create feature branch
git checkout -b feature-name

# Make changes and test locally
python -m http.server 8000

# Commit and push
git add .
git commit -m "Your descriptive commit message"
git push origin feature-name
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nik Mohd Shafik Izwan**
- GitHub: [@nikshafik](https://github.com/nikshafik)
- Email: nikshafik186@gmail.com
- Company: [Nasa Def Sdn Bhd](https://www.nasadef.com.my)

## 🙏 Acknowledgments

- [JAKIM e-Solat API](https://www.e-solat.gov.my/) untuk waktu solat rasmi
- [MyHadith Portal](https://myhadith.islam.gov.my/) untuk inspirasi hadis
- Font Awesome untuk icons (jika digunakan)
- Community feedback dan suggestions

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/username/daily-islamic-poster-generator?style=social)
![GitHub forks](https://img.shields.io/github/forks/username/daily-islamic-poster-generator?style=social)
![GitHub issues](https://img.shields.io/github/issues/username/daily-islamic-poster-generator)

---

⭐ **Star this repo** if you find it helpful!

Made with ❤️ for the Muslim community