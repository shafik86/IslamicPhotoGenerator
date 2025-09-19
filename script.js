let currentData = {
            datetime: null,
            hijriDate: null,
            prayerTimes: null,
            location: null,
            selectedHadith: null,
            selectedDoa: null,
            selectedIllustration: null
        };

        // Prayer time zones mapping
        const prayerZones = {
            "WLY01": { "name": "Kuala Lumpur", "state": "Wilayah Persekutuan", "lat": 3.1390, "lon": 101.6869 },
            "WLY02": { "name": "Putrajaya", "state": "Wilayah Persekutuan", "lat": 2.9264, "lon": 101.6964 },
            "WLY03": { "name": "Labuan", "state": "Wilayah Persekutuan", "lat": 5.2831, "lon": 115.2308 },
            "JHR01": { "name": "Johor Bahru, Kota Tinggi, Mersing", "state": "Johor", "lat": 1.4927, "lon": 103.7414 },
            "JHR02": { "name": "Kluang, Pontian", "state": "Johor", "lat": 2.0305, "lon": 103.3184 },
            "JHR03": { "name": "Batu Pahat, Muar, Segamat, Gemas Johor, Tangkak", "state": "Johor", "lat": 2.0442, "lon": 102.5660 },
            "KDH01": { "name": "Kota Setar, Kubang Pasu, Pokok Sena", "state": "Kedah", "lat": 6.1210, "lon": 100.3600 },
            "KDH02": { "name": "Pendang, Kuala Muda, Yan", "state": "Kedah", "lat": 5.7890, "lon": 100.4600 },
            "KDH03": { "name": "Padang Terap, Sik, Baling", "state": "Kedah", "lat": 5.7910, "lon": 100.7770 },
            "KDH04": { "name": "Kulim, Bandar Baharu", "state": "Kedah", "lat": 5.3650, "lon": 100.5610 },
            "KDH05": { "name": "Langkawi", "state": "Kedah", "lat": 6.3500, "lon": 99.8000 },
            "KTN01": { "name": "Kota Bharu, Bachok, Pasir Puteh, Machang, Pasir Mas, Tumpat, Kuala Krai", "state": "Kelantan", "lat": 6.1333, "lon": 102.2500 },
            "KTN02": { "name": "Gua Musang, Jeli", "state": "Kelantan", "lat": 4.8500, "lon": 101.9500 },
            "MLK01": { "name": "Seluruh Negeri Melaka", "state": "Melaka", "lat": 2.1896, "lon": 102.2501 },
            "NSN01": { "name": "Jelebu, Tampin, Jempol", "state": "Negeri Sembilan", "lat": 2.7300, "lon": 102.0800 },
            "NSN02": { "name": "Seremban, Port Dickson, Kuala Pilah, Rembau", "state": "Negeri Sembilan", "lat": 2.7297, "lon": 101.9381 },
            "PHG01": { "name": "Kuantan, Pekan, Rompin, Muadzam Shah", "state": "Pahang", "lat": 3.8077, "lon": 103.3260 },
            "PHG02": { "name": "Temerloh, Bera, Jerantut, Maran, Bentong, Raub, Lipis", "state": "Pahang", "lat": 3.4568, "lon": 102.3980 },
            "PHG03": { "name": "Genting Sempah, Janda Baik, Bukit Tinggi", "state": "Pahang", "lat": 3.4232, "lon": 101.7900 },
            "PHG04": { "name": "Cameron Highlands", "state": "Pahang", "lat": 4.4700, "lon": 101.3800 },
            "PRK01": { "name": "Tapah, Slim River, Tanjung Malim", "state": "Perak", "lat": 3.8500, "lon": 101.5000 },
            "PRK02": { "name": "Ipoh, Batu Gajah, Kampar, Sg. Siput, Kuala Kangsar", "state": "Perak", "lat": 4.5975, "lon": 101.0901 },
            "PRK03": { "name": "Pengkalan Hulu, Gerik, Lenggong", "state": "Perak", "lat": 5.4160, "lon": 101.1330 },
            "PRK04": { "name": "Temengor, Belum", "state": "Perak", "lat": 5.5920, "lon": 101.3090 },
            "PRK05": { "name": "Teluk Intan, Bagan Datuk, Kg. Gajah, Seri Iskandar, Parit", "state": "Perak", "lat": 4.0250, "lon": 100.9800 },
            "PRK06": { "name": "Lumut, Setiawan, Pulau Pangkor", "state": "Perak", "lat": 4.2100, "lon": 100.6300 },
            "PRK07": { "name": "Taiping, Bagan Serai, Parit Buntar", "state": "Perak", "lat": 4.8500, "lon": 100.7400 },
            "PLS01": { "name": "Seluruh Negeri Perlis", "state": "Perlis", "lat": 6.4440, "lon": 100.1960 },
            "PNG01": { "name": "Seluruh Negeri Pulau Pinang", "state": "Pulau Pinang", "lat": 5.4164, "lon": 100.3327 },
            "SBH01": { "name": "Kota Kinabalu, Ranau, Kota Belud, Tuaran, Penampang, Papar, Putatan", "state": "Sabah", "lat": 5.9804, "lon": 116.0735 },
            "SBH02": { "name": "Beaufort, Kuala Penyu, Sipitang, Tenom, Tambunan, Keningau", "state": "Sabah", "lat": 5.3433, "lon": 115.8500 },
            "SBH03": { "name": "Lahad Datu, Kunak, Semporna, Tawau", "state": "Sabah", "lat": 4.2449, "lon": 118.1100 },
            "SBH04": { "name": "Sandakan, Beluran, Kinabatangan", "state": "Sabah", "lat": 5.8402, "lon": 118.1170 },
            "SWK01": { "name": "Kuching, Samarahan, Serian", "state": "Sarawak", "lat": 1.5533, "lon": 110.3593 },
            "SWK02": { "name": "Sri Aman, Betong", "state": "Sarawak", "lat": 1.2400, "lon": 111.5000 },
            "SWK03": { "name": "Sibu, Mukah, Kapit", "state": "Sarawak", "lat": 2.2870, "lon": 111.8300 },
            "SWK04": { "name": "Bintulu, Miri, Limbang", "state": "Sarawak", "lat": 3.1660, "lon": 113.0330 }
        };

        let currentZone = "WLY01"; // Default to Kuala Lumpur

        const sampleHadith = [
            {
                id: 1,
                title: "Hadis tentang Senyuman",
                text: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ - Senyumanmu di hadapan saudaramu adalah sedekah.",
                source: "HR. Tirmidzi"
            },
            {
                id: 2,
                title: "Hadis tentang Ilmu",
                text: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ - Menuntut ilmu itu wajib atas setiap Muslim.",
                source: "HR. Ibnu Majah"
            },
            {
                id: 3,
                title: "Hadis tentang Kebersihan",
                text: "النَّظَافَةُ مِنَ الْإِيمَانِ - Kebersihan itu sebahagian daripada iman.",
                source: "HR. Muslim"
            },
            {
                id: 4,
                title: "Hadis tentang Sabar",
                text: "الصَّبْرُ مِفْتَاحُ الْفَرَجِ - Sabar itu kunci kepada kelapangan.",
                source: "HR. Ahmad"
            },
            {
                id: 5,
                title: "Hadis tentang Rezeki",
                text: "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ - Sesungguhnya Allah suka apabila seseorang melakukan sesuatu pekerjaan dengan itqan (sempurna).",
                source: "HR. Baihaqi"
            },
            {
                id: 6,
                title: "Hadis tentang Ikhlas",
                text: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ - Sesungguhnya setiap amalan itu bergantung kepada niat.",
                source: "HR. Bukhari"
            },
            {
                id: 7,
                title: "Hadis tentang Persaudaraan",
                text: "الْمُسْلِمُ أَخُو الْمُسْلِمِ - Seorang Muslim itu saudara kepada Muslim yang lain.",
                source: "HR. Bukhari"
            },
            {
                id: 8,
                title: "Hadis tentang Taqwa",
                text: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ - Bertaqwalah kepada Allah di mana sahaja kamu berada.",
                source: "HR. Tirmidzi"
            },
            {
                id: 9,
                title: "Hadis tentang Syukur",
                text: "مَنْ لَمْ يَشْكُرِ النَّاسَ لَمْ يَشْكُرِ اللَّهَ - Barangsiapa tidak berterima kasih kepada manusia, maka dia tidak berterima kasih kepada Allah.",
                source: "HR. Abu Dawud"
            },
            {
                id: 10,
                title: "Hadis tentang Kasih Sayang",
                text: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ - Orang-orang yang penyayang akan disayangi oleh Allah Yang Maha Penyayang.",
                source: "HR. Tirmidzi"
            },
			{
			    id: 11,
			    title: "Hadis tentang Sabar",
			    text: "وَاللَّهُ مَعَ الصَّابِرِينَ - Dan Allah bersama orang-orang yang sabar.",
			    source: "Surah Al-Baqarah, 2:153"
			},
			{
			    id: 12,
			    title: "Hadis tentang Harapan",
			    text: "لاَ تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ - Jangan kamu berputus asa dari rahmat Allah.",
			    source: "Surah Az-Zumar, 39:53"
			},
			{
			    id: 13,
			    title: "Hadis tentang Konsistensi",
			    text: "أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ - Amalan paling dicintai Allah ialah yang berterusan walaupun sedikit.",
			    source: "HR. Bukhari & Muslim"
			},
			{
			    id: 14,
			    title: "Hadis tentang Memberi Manfaat",
			    text: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ - Sebaik-baik manusia ialah yang paling bermanfaat kepada orang lain.",
			    source: "HR. Thabrani"
			},
			{
			    id: 15,
			    title: "Hadis tentang Doa",
			    text: "الدُّعَاءُ سِلَاحُ الْمُؤْمِنِ - Doa adalah senjata orang beriman.",
			    source: "HR. Hakim"
			},
			{
			    id: 16,
			    title: "Hadis tentang Menolong Sesama",
			    text: "وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ - Allah akan menolong hamba-Nya selagi hamba itu menolong saudaranya.",
			    source: "HR. Muslim"
			},
			{
			    id: 17,
			    title: "Hadis tentang Hati yang Lembut",
			    text: "أَطْعِمِ الْمِسْكِينَ وَامْسَحْ رَأْسَ الْيَتِيمِ - Berilah makan kepada miskin dan usap kepala anak yatim.",
			    source: "HR. Ahmad"
			},
			{
			    id: 18,
			    title: "Hadis tentang Pahala Kebaikan",
			    text: "فِي كُلِّ كَبِدٍ رَطْبَةٍ أَجْرٌ - Pada setiap makhluk hidup yang kamu beri manfaat, ada pahala.",
			    source: "HR. Bukhari"
			},
			{
			    id: 19,
			    title: "Hadis tentang Nilai Kecil",
			    text: "لاَ تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا - Jangan meremehkan kebaikan walaupun sedikit.",
			    source: "HR. Muslim"
			},
			{
			    id: 20,
			    title: "Hadis tentang Cahaya Sabar",
			    text: "وَالصَّبْرُ ضِيَاءٌ - Sabar itu adalah cahaya.",
			    source: "HR. Muslim"
			}

        ];

        const sampleDoa = [
            {
                id: 1,
                title: "Doa Pagi",
                arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",
                text: "Asbahna wa asbahal mulku lillah",
                meaning: "Kami berada di waktu pagi dan kerajaan Allah berada di waktu pagi."
            },
            {
                id: 2,
                title: "Doa Sebelum Makan",
                arabic: "بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ",
                text: "Bismillahi wa 'ala barakatillah",
                meaning: "Dengan nama Allah dan atas keberkatan Allah."
            },
            {
                id: 3,
                title: "Doa Mohon Ampun",
                arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ",
                text: "Astaghfirullaha al-'azhim",
                meaning: "Aku memohon ampun kepada Allah Yang Maha Agung."
            },
            {
                id: 4,
                title: "Doa Petang",
                arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ",
                text: "Amsaina wa amsal mulku lillah",
                meaning: "Kami berada di waktu petang dan kerajaan Allah berada di waktu petang."
            },
            {
                id: 5,
                title: "Doa Selepas Makan",
                arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا",
                text: "Alhamdu lillahil ladzi at'amana wa saqana",
                meaning: "Segala puji bagi Allah yang telah memberi makan dan minum kepada kami."
            },
            {
                id: 6,
                title: "Doa Keluar Rumah",
                arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ",
                text: "Bismillahi tawakkaltu 'alallah",
                meaning: "Dengan nama Allah, aku bertawakal kepada Allah."
            },
            {
                id: 7,
                title: "Doa Masuk Rumah",
                arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلِجِ وَخَيْرَ الْمَخْرَجِ",
                text: "Allahumma inni as'aluka khairal maulaji wa khairal makhraji",
                meaning: "Ya Allah, sesungguhnya aku memohon kepada-Mu kebaikan masuk dan kebaikan keluar."
            },
            {
                id: 8,
                title: "Doa Mohon Perlindungan",
                arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
                text: "A'udzu billahi minas syaitanir rajim",
                meaning: "Aku berlindung kepada Allah daripada syaitan yang direjam."
            },
            {
                id: 9,
                title: "Doa Mohon Keberkatan",
                arabic: "بَارَكَ اللَّهُ لَنَا فِيمَا رَزَقَنَا",
                text: "Baraka Allahu lana fima razaqana",
                meaning: "Semoga Allah memberkati kami dalam apa yang telah direzekikan kepada kami."
            },
            {
                id: 10,
                title: "Doa Tidur",
                arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
                text: "Bismika Allahumma amutu wa ahya",
                meaning: "Dengan nama-Mu ya Allah, aku mati dan aku hidup."
            },
			{
			    id: 11,
			    title: "Doa Mohon Ampun",
			    arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ",
			    text: "Astaghfirullaha al-‘azhim",
			    meaning: "Aku memohon ampun kepada Allah Yang Maha Agung."
			},
			{
			    id: 12,
			    title: "Doa Tolak Musibah",
			    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبَرَصِ، وَالْجُنُونِ، وَالْجُذَامِ، وَمِنْ سَيِّئِ الْأَسْقَامِ",
			    text: "Allahumma inni a‘udzu bika minal-barasi wal-jununi wal-judzami wa min sayyi’il-asqam",
			    meaning: "Ya Allah, aku berlindung kepada-Mu daripada penyakit sopak, gila, kusta, dan penyakit-penyakit buruk yang lain."
			},
			{
			    id: 13,
			    title: "Doa Perlindungan Pagi",
			    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ",
			    text: "Allahumma inni as’aluka al-‘afiyata fid-dunya wal-akhirah",
			    meaning: "Ya Allah, aku memohon kepada-Mu keselamatan dan kesejahteraan di dunia dan akhirat."
			},
			{
			    id: 14,
			    title: "Doa Tenangkan Hati",
			    arabic: "رَبِّ اشْرَحْ لِي صَدْرِي",
			    text: "Rabbi ishrah li sadri",
			    meaning: "Ya Tuhanku, lapangkanlah dadaku."
			},
			{
			    id: 15,
			    title: "Doa Mohon Petunjuk",
			    arabic: "اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي",
			    text: "Allahumma ihdini wa saddidni",
			    meaning: "Ya Allah, tunjukilah aku dan luruskanlah aku."
			},
			{
			    id: 16,
			    title: "Doa Elak Hasad",
			    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ",
			    text: "Allahumma inni a‘udzu bika min sharri hasidin idha hasad",
			    meaning: "Ya Allah, aku berlindung kepada-Mu dari kejahatan orang yang dengki ketika dia dengki."
			},
			{
			    id: 17,
			    title: "Doa Mohon Rezeki Halal",
			    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِزْقًا طَيِّبًا",
			    text: "Allahumma inni as’aluka rizqan tayyiban",
			    meaning: "Ya Allah, aku memohon kepada-Mu rezeki yang baik dan halal."
			},
			{
			    id: 18,
			    title: "Doa Elak Lupa & Lalai",
			    arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ الذَّاكِرِينَ",
			    text: "Allahumma aj‘alni minaz-zakirin",
			    meaning: "Ya Allah, jadikanlah aku dari kalangan orang yang sentiasa mengingati-Mu."
			},
			{
			    id: 19,
			    title: "Doa Mohon Kekuatan",
			    arabic: "اللَّهُمَّ قَوِّنِي فِي دِينِكَ",
			    text: "Allahumma qawwini fi dinik",
			    meaning: "Ya Allah, kuatkanlah aku dalam agama-Mu."
			},
			{
			    id: 20,
			    title: "Doa Mohon Husnul Khatimah",
			    arabic: "اللَّهُمَّ اخْتِمْ لَنَا بِالْخَيْرِ",
			    text: "Allahumma ikhtim lana bil-khayr",
			    meaning: "Ya Allah, akhirilah hidup kami dengan kebaikan."
			}

        ];

        const illustrationOptions = [
            {
                id: 1,
                title: "Masjid & Bulan Sabit",
                description: "Ilustrasi masjid dengan bulan sabit dan bintang, nuansa biru lembut dengan elemen awan"
            },
            {
                id: 2,
                title: "Kaligrafi & Geometrik",
                description: "Motif kaligrafi Arab dengan pola geometrik Islam, warna emas dan hijau emerald"
            },
            {
                id: 3,
                title: "Pemandangan Alam",
                description: "Pemandangan sunrise/sunset dengan siluet masjid, nuansa hangat orange dan ungu"
            },
			{
			    id: 4,
			    title: "Langit Bertabur Doa",
			    description: "Ilustrasi tangan yang menadah doa di bawah langit malam bertabur bintang, dengan cahaya lembut bulan purnama dan aura ketenangan"
			},
			{
			    id: 5,
			    title: "Taman Syurga",
			    description: "Visual taman hijau dengan air mengalir, burung berterbangan dan cahaya matahari menembusi pepohon—simbol ketenangan dan rahmat"
			},
			{
			    id: 6,
			    title: "Kaligrafi Asmaul Husna",
			    description: "Susunan nama-nama Allah dalam bentuk bulatan kaligrafi emas di atas latar biru gelap, dengan corak bintang dan cahaya spiritual"
			},
			{
			    id: 7,
			    title: "Jalan Menuju Cahaya",
			    description: "Ilustrasi jalan berbatu menuju masjid di kejauhan, dengan cahaya mentari pagi menyinari laluan—simbol perjalanan rohani"
			},
			{
			    id: 8,
			    title: "Silhouette Solat Subuh",
			    description: "Bayangan seorang lelaki sedang solat di atas bukit ketika Subuh, dengan latar langit biru keunguan dan awan yang tenang"
			}
        ];

        function getCurrentDateTime() {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            
            const dateStr = now.toLocaleDateString('ms-MY', options);
            const timeStr = now.toLocaleTimeString('ms-MY', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
            });
            
            return `${dateStr} - ${timeStr}`;
        }
		async function fetchPrayerTimes(zone) {
			try {
				const response = await fetch(
					`https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=today&zone=${zone}`
				);
				const data = await response.json();
		
				if (data.status === "OK!" && data.prayerTime && data.prayerTime.length > 0) {
					const prayer = data.prayerTime[0];
					return {
						times: {
							'Imsak': prayer.imsak,
							'Subuh': prayer.fajr,
							'Syuruk': prayer.syuruk,
							'Dhuha': prayer.dhuha,
							'Zohor': prayer.dhuhr,
							'Asar': prayer.asr,
							'Maghrib': prayer.maghrib,
							'Isyak': prayer.isha
						},
						hijriDate: prayer.hijri,   // terus ambil dari API
						date: prayer.date,
						day: prayer.day
					};
				} else {
					throw new Error('Invalid API response');
				}
			} catch (error) {
				console.error('Error fetching prayer times:', error);
				// fallback kalau API down
				return {
					times: {
						'Imsak': '05:30',
						'Subuh': '05:45',
						'Syuruk': '07:05',
						'Dhuha': '07:30',
						'Zohor': '13:15',
						'Asar': '16:30',
						'Maghrib': '19:20',
						'Isyak': '20:35'
					},
					hijriDate: "1447-03-27", // static contoh
					date: new Date().toLocaleDateString('en-CA'),
					day: new Date().toLocaleDateString('en-US', { weekday: 'long' })
				};
			}
		}

        // async function fetchPrayerTimes(zone) {
        //     try {
        //         const response = await fetch(`https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=today&zone=${zone}`);
        //         const data = await response.json();
                
        //         if (data.status === "OK!" && data.prayerTime && data.prayerTime.length > 0) {
        //             const prayer = data.prayerTime[0];
        //             return {
        //                 times: {
        //                     'Subuh': prayer.fajr,
        //                     'Syuruk': prayer.syuruk,
        //                     'Zohor': prayer.dhuhr,
        //                     'Asar': prayer.asr,
        //                     'Maghrib': prayer.maghrib,
        //                     'Isyak': prayer.isha
        //                 },
        //                 hijriDate: prayer.hijri,
        //                 date: prayer.date
        //             };
        //         } else {
        //             throw new Error('Invalid API response');
        //         }
        //     } catch (error) {
        //         console.error('Error fetching prayer times:', error);
        //         // Fallback to sample data if API fails
        //         return {
        //             times: {
        //                 'Subuh': '05:45',
        //                 'Syuruk': '07:05',
        //                 'Zohor': '13:15',
        //                 'Asar': '16:30',
        //                 'Maghrib': '19:20',
        //                 'Isyak': '20:35'
        //             },
        //             hijriDate: getHijriDate(),
        //             date: new Date().toLocaleDateString('en-CA')
        //         };
        //     }
        // }

        // function getHijriDate() {
        //     // Simple Hijri date calculation (fallback only)
        //     const gregorianDate = new Date();
        //     const hijriYear = Math.floor(((gregorianDate.getFullYear() - 622) * 365.25) / 354.36667) + 1;
            
        //     const hijriMonths = [
        //         'Muharram', 'Safar', 'Rabi\'ul Awwal', 'Rabi\'ul Akhir',
        //         'Jumadil Awwal', 'Jumadil Akhir', 'Rejab', 'Sya\'ban',
        //         'Ramadan', 'Syawal', 'Zulkaedah', 'Zulhijjah'
        //     ];
            
        //     // Approximate calculation
        //     const dayOfYear = Math.floor((gregorianDate - new Date(gregorianDate.getFullYear(), 0, 0)) / 86400000);
        //     const hijriMonth = Math.floor((dayOfYear * 12) / 354) % 12;
        //     const hijriDay = Math.floor(dayOfYear / 29.5) % 30 + 1;
            
        //     return `${hijriDay} ${hijriMonths[hijriMonth]} ${hijriYear}H`;
        // }

        async function getAllData() {
            // Show loading
            document.getElementById('loading').style.display = 'block';
            
            try {
                // Get current location and prayer zone
                const locationData = await getCurrentLocation();
                currentZone = locationData.zone;
                currentData.location = locationData.location;
                
                // Get current datetime
                currentData.datetime = getCurrentDateTime();
                
                // Fetch real prayer times and hijri date from API
                const prayerData = await fetchPrayerTimes(currentZone);
                currentData.prayerTimes = prayerData.times;
                currentData.hijriDate = prayerData.hijriDate;
                
                // Display data
                document.getElementById('current-datetime').innerHTML = `
                    📅 ${currentData.datetime}<br>
                    🌙 ${currentData.hijriDate}<br>
                    📍 ${currentData.location.name}, ${currentData.location.state}
                `;
                document.getElementById('current-datetime').classList.remove('hidden');
                
                displayPrayerTimes();
                displayRandomHadithChoices();
                displayRandomDoaChoices();
                displayIllustrationChoices();
                
                // Reset selections
                currentData.selectedHadith = null;
                currentData.selectedDoa = null;
                currentData.selectedIllustration = null;
                
                // Hide loading and show sections
                document.getElementById('loading').style.display = 'none';
                document.getElementById('prayer-section').classList.remove('hidden');
                document.getElementById('hadith-section').classList.remove('hidden');
                document.getElementById('doa-section').classList.remove('hidden');
                document.getElementById('illustration-section').classList.remove('hidden');
                document.getElementById('generate-section').classList.remove('hidden');
                
                // Hide prompt section for new data
                document.getElementById('prompt-section').classList.add('hidden');
                
            } catch (error) {
                console.error('Error getting data:', error);
                document.getElementById('loading').style.display = 'none';
                alert('Terdapat masalah mendapatkan data. Sila cuba lagi.');
            }
        }

        function displayPrayerTimes() {
            const container = document.getElementById('prayer-times');
            container.innerHTML = '';
            
            Object.entries(currentData.prayerTimes).forEach(([name, time]) => {
                const div = document.createElement('div');
                div.className = 'prayer-time';
                div.innerHTML = `
                    <div class="prayer-name">${name}</div>
                    <div class="prayer-time-value">${time}</div>
                `;
                container.appendChild(div);
            });
        }

        function displayRandomHadithChoices() {
            const container = document.getElementById('hadith-choices');
            container.innerHTML = '';
            
            // Get 3 random hadith
            const shuffled = [...sampleHadith].sort(() => 0.5 - Math.random());
            const randomHadith = shuffled.slice(0, 3);
            
            randomHadith.forEach((hadith, index) => {
                const div = document.createElement('div');
                div.className = 'choice-item';
                div.innerHTML = `
                    <label class="radio-label">
                        <input type="radio" name="hadith" value="${hadith.id}" class="radio-input" onchange="selectHadith(${hadith.id}, ${index})">
                        <div class="choice-content">
                            <div class="choice-title">${hadith.title}</div>
                            <div class="choice-text">${hadith.text}</div>
                            <div class="choice-text" style="font-style: italic; margin-top: 5px;">${hadith.source}</div>
                        </div>
                    </label>
                `;
                container.appendChild(div);
            });
            
            // Store current random hadith for later use
            window.currentRandomHadith = randomHadith;
        }

        function displayRandomDoaChoices() {
            const container = document.getElementById('doa-choices');
            container.innerHTML = '';
            
            // Get 3 random doa
            const shuffled = [...sampleDoa].sort(() => 0.5 - Math.random());
            const randomDoa = shuffled.slice(0, 3);
            
            randomDoa.forEach((doa, index) => {
                const div = document.createElement('div');
                div.className = 'choice-item';
                div.innerHTML = `
                    <label class="radio-label">
                        <input type="radio" name="doa" value="${doa.id}" class="radio-input" onchange="selectDoa(${doa.id}, ${index})">
                        <div class="choice-content">
                            <div class="choice-title">${doa.title}</div>
                            <div class="choice-text" style="font-family: serif; font-size: 1.1em; margin-bottom: 5px;">${doa.arabic}</div>
                            <div class="choice-text">${doa.text}</div>
                            <div class="choice-text" style="font-style: italic; margin-top: 5px;">${doa.meaning}</div>
                        </div>
                    </label>
                `;
                container.appendChild(div);
            });
            
            // Store current random doa for later use
            window.currentRandomDoa = randomDoa;
        }

        function displayIllustrationChoices() {
            const container = document.getElementById('illustration-choices');
            container.innerHTML = '';
            
            illustrationOptions.forEach(illustration => {
                const div = document.createElement('div');
                div.className = 'choice-item';
                div.innerHTML = `
                    <label class="radio-label">
                        <input type="radio" name="illustration" value="${illustration.id}" class="radio-input" onchange="selectIllustration(${illustration.id})">
                        <div class="choice-content">
                            <div class="choice-title">${illustration.title}</div>
                            <div class="choice-text">${illustration.description}</div>
                        </div>
                    </label>
                `;
                container.appendChild(div);
            });
        }

        function selectHadith(id, index) {
            currentData.selectedHadith = window.currentRandomHadith[index];
            updateChoiceSelection('hadith-choices', index + 1);
        }

        function selectDoa(id, index) {
            currentData.selectedDoa = window.currentRandomDoa[index];
            updateChoiceSelection('doa-choices', index + 1);
        }

        function selectIllustration(id) {
            currentData.selectedIllustration = illustrationOptions.find(i => i.id == id);
            updateChoiceSelection('illustration-choices', id);
        }

        function updateChoiceSelection(containerId, selectedId) {
            const container = document.getElementById(containerId);
            const items = container.querySelectorAll('.choice-item');
            
            items.forEach((item, index) => {
                if (index + 1 == selectedId) {
                    item.classList.add('selected');
                } else {
                    item.classList.remove('selected');
                }
            });
        }

        function generatePrompt() {
            if (!currentData.selectedHadith || !currentData.selectedDoa || !currentData.selectedIllustration) {
                alert('Sila pilih hadis, doa, dan ilustrasi terlebih dahulu!');
                return;
            }

            const prompt = `
• Cipta poster islamik harian dengan maklumat berikut:

• Tarikh Masehi: ${currentData.datetime}
• Tarikh Hijriah: ${currentData.hijriDate}
• Lokasi: ${currentData.location.name}, ${currentData.location.state}

• Waktu Solat:
  - Subuh: ${currentData.prayerTimes.Subuh}
  - Syuruk: ${currentData.prayerTimes.Syuruk}  
  - Zohor: ${currentData.prayerTimes.Zohor}
  - Asar: ${currentData.prayerTimes.Asar}
  - Maghrib: ${currentData.prayerTimes.Maghrib}
  - Isyak: ${currentData.prayerTimes.Isyak}

• Hadis Pilihan:
  - Tajuk: ${currentData.selectedHadith.title}
  - Teks: ${currentData.selectedHadith.text}
  - Sumber: ${currentData.selectedHadith.source}

• Doa Pilihan:
  - Nama: ${currentData.selectedDoa.title}
  - Arab: ${currentData.selectedDoa.arabic}
  - Rumi: ${currentData.selectedDoa.text}
  - Maksud: ${currentData.selectedDoa.meaning}

• Gaya Ilustrasi: ${currentData.selectedIllustration.description}

• Spesifikasi Design:
  - Saiz: 1080x1080 (Instagram square)
  - Warna: Harmoni sesuai tema ilustrasi
  - Font: Profesional, mudah dibaca
  - Layout: Seimbang, kemas, dan jelas
  - Elemen: Motif Islamik, corak geometri, kaligrafi sabar
  - Mood: Inspirasi, spiritual, tenang
  - Keutamaan: Paparan jelas untuk tarikh Masehi & Hijriah

• Arahan tambahan
  - Gabungkan elemen spiritual dan elegan dalam satu poster harian. Pastikan waktu solat tersusun, 
    hadis dan doa ditonjolkan secara visual, dan tarikh dipaparkan dengan jelas. 
    Gunakan warna hijau emerald dan emas untuk suasana tenang dan ilham. Fokus pada keseimbangan layout dan kejelasan mesej.`;

            document.getElementById('prompt-textarea').value = prompt.trim();
            document.getElementById('prompt-section').classList.remove('hidden');
        }

        function copyPrompt() {
            const textarea = document.getElementById('prompt-textarea');
            textarea.select();
            document.execCommand('copy');
            
            // Change button text temporarily
            const btn = event.target;
            const originalText = btn.innerHTML;
            btn.innerHTML = '✅ Copied!';
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        }

        function editPrompt() {
            const textarea = document.getElementById('prompt-textarea');
            textarea.focus();
            textarea.removeAttribute('readonly');
        }
		function findNearestZone(lat, lon) {
            let minDistance = Infinity;
            let nearestZone = "WLY01";
            
            Object.entries(prayerZones).forEach(([zoneCode, zoneData]) => {
                const distance = Math.sqrt(
                    Math.pow(lat - zoneData.lat, 2) + Math.pow(lon - zoneData.lon, 2)
                );
                
                if (distance < minDistance) {
                    minDistance = distance;
                    nearestZone = zoneCode;
                }
            });
            
            return nearestZone;
        }

        async function getCurrentLocation() {
            return new Promise((resolve) => {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const lat = position.coords.latitude;
                            const lon = position.coords.longitude;
                            const zone = findNearestZone(lat, lon);
                            resolve({ zone, location: prayerZones[zone] });
                        },
                        () => {
                            // If GPS fails, use default
                            resolve({ zone: "WLY01", location: prayerZones["WLY01"] });
                        },
                        { timeout: 5000 }
                    );
                } else {
                    resolve({ zone: "WLY01", location: prayerZones["WLY01"] });
                }
            });
        }
