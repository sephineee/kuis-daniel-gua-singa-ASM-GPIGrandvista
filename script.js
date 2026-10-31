// --- DAFTAR 50 SOAL DANIEL 6:1-29 ---
const questions = [
    { q: "Berapakah umur Darius orang Media ketika ia menerima pemerintahan?", o: ["50 tahun", "60 tahun", "62 tahun", "70 tahun"], a: 2 },
    { q: "Berapa banyak wakil-wakil raja yang diangkat oleh Raja Darius untuk seluruh kerajaannya?", o: ["100 orang", "120 orang", "150 orang", "200 orang"], a: 1 },
    { q: "Berapa jumlah pejabat tinggi yang diangkat untuk membawahi para wakil raja?", o: ["2 orang", "3 orang", "5 orang", "12 orang"], a: 1 },
    { q: "Mengapa para wakil raja harus memberi pertanggungan jawab kepada para pejabat tinggi?", o: ["Supaya rakyat sejahtera", "Supaya raja jangan dirugikan", "Supaya tidak ada pemberontakan", "Supaya pajak terkumpul cepat"], a: 1 },
    { q: "Mengapa Daniel melebihi para pejabat tinggi dan para wakil raja lainnya?", o: ["Keturunan bangsawan", "Mempunyai roh yang luar biasa", "Memiliki kekayaan melimpah", "Paling senior di istana"], a: 1 },
    { q: "Apa rencana Raja Darius terhadap Daniel karena keunggulannya?", o: ["Menjadikannya penasihat pribadi", "Menempatkannya atas seluruh kerajaan", "Memberinya hadiah emas dan perak", "Membebaskannya dari tugas kerajaan"], a: 1 },
    { q: "Mengapa musuh-musuh Daniel tidak mendapat alasan dakwaan dalam hal pemerintahan padanya?", o: ["Daniel menyembunyikan catatannya", "Daniel setia dan tidak ada kelalaian/kesalahan", "Raja selalu melindungi Daniel", "Tidak ada hukum yang berlaku"], a: 1 },
    { q: "Dalam hal apakah musuh-musuh Daniel akhirnya menyimpulkan dapat menjatuhkannya?", o: ["Hal keuangan negara", "Hal asal-usul kebangsaannya", "Hal ibadahnya kepada Allahnya", "Hal loyalitas kepada prajurit"], a: 2 },
    { q: "Berapa lama jangka waktu larangan berdoa yang diusulkan para pejabat kepada raja?", o: ["7 hari", "14 hari", "30 hari", "40 hari"], a: 2 },
    { q: "Kepada siapakah saja permohonan boleh disampaikan selama masa larangan tersebut?", o: ["Kepada para dewa Media", "Hanya kepada raja Darius", "Kepada para pejabat tinggi", "Tidak kepada siapapun"], a: 1 },
    { q: "Hukuman apa yang diancamkan bagi barangsiapa yang melanggar larangan tersebut?", o: ["Dihukum gantung", "Dibuang dari kerajaan", "Dilemparkan ke dalam gua singa", "Dipenjara seumur hidup"], a: 2 },
    { q: "Sifat undang-undang bangsa manakah yang tidak dapat diubah dan dicabut kembali?", o: ["Babel dan Asyur", "Media dan Persia", "Mesir dan Kanaan", "Yunani dan Romawi"], a: 1 },
    { q: "Apa tindakan Raja Darius setelah para pejabat menyampaikan usul larangan tersebut?", o: ["Menolaknya dengan tegas", "Meminta waktu untuk berpikir", "Membuat surat perintah dengan larangan itu", "Meminta pendapat Daniel dahulu"], a: 2 },
    { q: "Apa yang dilakukan Daniel setelah mendengar bahwa surat perintah itu telah dibuat?", o: ["Melarikan diri keluar kota", "Pergi ke rumahnya dan berdoa seperti biasa", "Menghadap raja untuk memprotes", "Bersembunyi di dalam tanah"], a: 1 },
    { q: "Ke arah manakah tingkap-tingkap kamar atas rumah Daniel terbuka?", o: ["Ke arah Babel", "Ke arah Yerusalem", "Ke arah istana raja", "Ke arah gua singa"], a: 1 },
    { q: "Berapa kali sehari Daniel berlutut, berdoa, serta memuji Allahnya?", o: ["1 kali sehari", "2 kali sehari", "3 kali sehari", "7 kali sehari"], a: 2 },
    { q: "Bagaimana sikap para musuh saat mendapati Daniel sedang berdoa?", o: ["Bergegas-gegas masuk dan mendapati Daniel", "Mengintai dari jauh dengan diam-diam", "Menunggu Daniel selesai berdoa", "Membakar rumah Daniel"], a: 0 },
    { q: "Bagaimana musuh-musuh Daniel menyebut identitas Daniel di hadapan raja?", o: ["Pejabat tinggi kesayangan raja", "Salah seorang buangan dari Yehuda", "Orang asing yang tidak tahu aturan", "Pengkhianat kerajaan Media"], a: 1 },
    { q: "Apa tuduhan para pejabat terhadap sikap Daniel terhadap raja?", o: ["Mencuri perbendaharaan raja", "Tidak mengindahkan raja dan larangannya", "Mengasut rakyat untuk berontak", "Merencanakan pembunuhan raja"], a: 1 },
    { q: "Bagaimana perasaan Raja Darius setelah mendengar laporan tentang Daniel?", o: ["Sangat marah kepada Daniel", "Sangat sedih dan berusaha melepaskan Daniel", "Biasa saja karena itu hukum", "Bangga atas keberanian Daniel"], a: 1 },
    { q: "Sampai kapankah Raja Darius berusaha untuk menolong dan melepaskan Daniel?", o: ["Sampai tengah malam", "Sampai matahari masuk (terbenam)", "Sampai fajar menyingsing", "Selama tiga hari berturut-turut"], a: 1 },
    { q: "Apa yang ditekankan kembali oleh para pejabat kepada raja agar hukuman dilaksanakan?", o: ["Bahwa rakyat sudah berkumpul", "Bahwa undang-undang Media-Persia tidak dapat diubah", "Bahwa singa-singa sedang lapar", "Bahwa Daniel harus diganti segera"], a: 1 },
    { q: "Perkataan iman apa yang diucapkan Raja Darius kepada Daniel sebelum ia dilemparkan?", o: ["Semoga engkau selamat di sana", "Allahmu yang kausembah dengan tekun, Dialah kiranya yang melepaskan engkau!", "Maafkan aku karena tidak bisa menolongmu", "Dewa-dewa Persia akan melindungimu"], a: 1 },
    { q: "Apa yang diletakkan pada mulut gua singa setelah Daniel dimasukkan?", o: ["Pintu kayu yang tebal", "Sebuah batu besar", "Pagar besi yang kuat", "Penjaga istana"], a: 1 },
    { q: "Dengan apa mulut gua singa itu dicap oleh raja?", o: ["Dengan darah binatang", "Cincin meterai raja dan pembesarnya", "Stempel kerajaan dari tanah liat", "Lilin merah khusus"], a: 1 },
    { q: "Apa tujuan mulut gua dicap dengan cincin meterai?", o: ["Supaya tidak ada bau keluar", "Supaya dalam hal Daniel tidak dibuat perubahan apa-apa", "Supaya singa tidak bisa keluar", "Supaya rakyat takut mendekat"], a: 1 },
    { q: "Apa yang dilakukan Raja Darius sepanjang malam setelah Daniel dilemparkan?", o: ["Pesta pora bersama pejabat", "Berpuasa dan tidak dapat tidur", "Membaca kitab undang-undang", "Mengatur strategi perang"], a: 1 },
    { q: "Siapakah yang dipanggil raja ke istananya pada malam itu untuk menghiburnya?", o: ["Para pemain musik", "Para penari istana", "Tidak ada (ia tidak menyuruh datang penghibur)", "Penasihat spiritual"], a: 2 },
    { q: "Kapan Raja Darius pergi ke gua singa?", o: ["Siang hari saat matahari terik", "Pagi-pagi sekali ketika fajar menyingsing", "Sore hari berikutnya", "Tengah malam harinya"], a: 1 },
    { q: "Bagaimana nada suara Raja Darius saat berseru kepada Daniel di dekat gua?", o: ["Suara yang keras dan lantang", "Suara yang marah dan kecewa", "Suara yang sayu", "Suara yang berbisik-bisik"], a: 2 },
    { q: "Sebutan apa yang digunakan Raja Darius saat memanggil Daniel di gua singa?", o: ["Daniel, pahlawan Persia", "Daniel, hamba Allah yang hidup", "Daniel, pejabat tinggiku", "Daniel, sahabatku"], a: 1 },
    { q: "Apa pertanyaan Raja Darius kepada Daniel dari luar gua?", o: ["Apakah engkau masih hidup?", "Apakah singa-singa itu sudah tidur?", "Telah sanggupkah Allahmu melepaskan engkau dari singa-singa itu?", "Apakah engkau terluka parah?"], a: 2 },
    { q: "Bagaimana penghormatan awal Daniel saat menjawab raja dari dalam gua?", o: ["Pujilah Tuhan!", "Ya raja, kekallah hidupmu!", "Hukum raja tidak adil!", "Tariklah aku segera!"], a: 1 },
    { q: "Siapa yang diutus Allah untuk mengatupkan mulut singa-singa itu?", o: ["Seorang nabi", "Malaikat-Nya", "Prajurit gaib", "Bayangan kudus"], a: 1 },
    { q: "Mengapa Allah melindungi Daniel sehingga singa tidak mengapapa-apakan dia?", o: ["Karena Daniel mempunyai ilmu kebal", "Karena Daniel ternyata tak bersalah di hadapan-Nya", "Karena singa-singa itu sudah kenyang", "Karena raja memintanya dengan sangat"], a: 1 },
    { q: "Apa yang ditegaskan Daniel mengenai hubungannya dengan raja?", o: ["Aku telah mengampuni tuanku", "Terhadap tuanku, ya raja, aku tidak melakukan kejahatan", "Aku tidak akan bekerja lagi untuk raja", "Raja telah berlaku zalim kepadaku"], a: 1 },
    { q: "Bagaimana perasaan raja setelah mendengar suara Daniel dan menyetahui ia selamat?", o: ["Terkejut dan takut", "Sangat sukacita", "Ragu-ragu dan heran", "Malu kepada pejabatnya"], a: 1 },
    { q: "Bagaimana kondisi fisik Daniel saat ditarik keluar dari dalam gua singa?", o: ["Terdapat cakaran kecil di tangannya", "Pakaiannya robek-robek", "Tidak terdapat luka apa-apa padanya", "Pingsan karena kelelahan"], a: 2 },
    { q: "Apakah alasan utama sehingga Daniel tidak mendapat luka sedikit pun?", o: ["Karena ia memakai baju besi", "Karena ia percaya kepada Allahnya", "Karena ia memberi makan singa itu", "Karena singa-singa itu takut padanya"], a: 1 },
    { q: "Apa perintah raja terhadap orang-orang yang telah menuduh Daniel?", o: ["Diasingkan ke luar negeri", "Dilemparkan ke dalam gua singa", "Dihukum cambuk 100 kali", "Dipenjarakan selamanya"], a: 1 },
    { q: "Siapa sajakah yang ikut dilemparkan ke dalam gua singa bersama para penuduh Daniel?", o: ["Hanya penuduh itu sendiri", "Penuduh beserta anak-anak dan isteri-isteri mereka", "Para pengawal penuduh", "Seluruh kerabat wakil raja"], a: 1 },
    { q: "Apa yang terjadi pada para penuduh sebelum mereka sampai ke dasar gua?", o: ["Singa-singa lari ketakutan", "Singa menerkam dan meremukkan tulang-tulang mereka", "Mereka meminta ampun kepada raja", "Malaikat menolong mereka juga"], a: 1 },
    { q: "Kepada siapa Raja Darius mengirimkan surat edaran setelah peristiwa itu?", o: ["Hanya kepada para pejabat tinggi", "Kepada orang-orang dari segala bangsa, suku bangsa dan bahasa", "Khusus kepada bangsa Israel di Yehuda", "Kepada raja-raja tetangga"], a: 1 },
    { q: "Salam apa yang tertulis dalam surat edaran Raja Darius?", o: ["Damai sejahtera bagimu!", "Bertambah-tambahlah kiranya kesejahteraanmu!", "Hormatilah Raja Darius!", "Hiduplah dalam kebenaran!"], a: 1 },
    { q: "Perintah apa yang dikeluarkan Raja Darius dalam suratnya kepada seluruh kerajaan?", o: ["Orang harus menyembah Daniel", "Orang harus takut dan gentar kepada Allahnya Daniel", "Orang wajib berpuasa tiga hari", "Semua patung dewa harus dihancurkan"], a: 1 },
    { q: "Mengapa semua orang harus takut dan gentar kepada Allahnya Daniel menurut Darius?", o: ["Karena Dialah Allah yang hidup, yang kekal selama-lamanya", "Karena Dia sangat pemarah", "Karena Daniel adalah raja baru", "Karena hukum Media menuntut demikian"], a: 0 },
    { q: "Apa yang dikatakan surat Darius mengenai pemerintahan dan kekuasaan Allah?", o: ["Akan berganti setiap zaman", "Tidak akan binasa dan tidak akan berakhir", "Hanya berlaku di wilayah Yehuda", "Tunduk kepada kekuasaan raja"], a: 1 },
    { q: "Apa yang dilakukan Allah di langit dan di bumi menurut pengakuan Darius?", o: ["Menciptakan bintang dan matahari", "Melepaskan, menolong, dan mengadakan tanda serta mujizat", "Menghukum bangsa-bangsa jahat", "Memberi kekayaan kepada raja"], a: 1 },
    { q: "Dari cengkaman apakah Allah telah melepaskan Daniel?", o: ["Cengkaman musuh-musuhnya", "Cengkaman singa-singa", "Cengkaman hukum kematian", "Cengkaman kemiskinan"], a: 1 },
    { q: "Pada zaman pemerintahan siapa sajakah Daniel mempunyai kedudukan yang tinggi?", o: ["Nebukadnezar dan Belsyazar", "Darius dan Koresh orang Persia", "Artahsasta dan Darius", "Koresh dan Kserkses"], a: 1 }
];

// --- STATE VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;
let studentName = "";
let studentClass = "";
let canAnswer = true;

// --- DOM ELEMENTS ---
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const inputNama = document.getElementById('input-nama');
const inputKelas = document.getElementById('input-kelas');
const btnStart = document.getElementById('btn-start');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnNext = document.getElementById('btn-next');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const siswaInfo = document.getElementById('siswa-info');

// --- EVENT LISTENERS ---
btnStart.addEventListener('click', startQuiz);
btnNext.addEventListener('click', nextQuestion);
document.getElementById('btn-restart').addEventListener('click', () => {
    startScreen.classList.add('active');
    resultScreen.classList.remove('active');
});

function startQuiz() {
    studentName = inputNama.value.trim();
    studentClass = inputKelas.value.trim();

    if (studentName === "" || studentClass === "") {
        alert("Shalom! Ayo isi nama dan kelasmu dulu ya! 😊");
        return;
    }

    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    siswaInfo.textContent = `${studentName} | ${studentClass}`;
    currentQuestionIndex = 0;
    score = 0;
    
    loadQuestion();
}

function loadQuestion() {
    canAnswer = true;
    btnNext.style.display = 'none';
    optionsContainer.innerHTML = '';
    
    // Update Progress
    const progressPercent = (currentQuestionIndex / questions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    progressText.textContent = `Soal ${currentQuestionIndex + 1}/${questions.length}`;

    // Tampilkan Soal
    const currentQ = questions[currentQuestionIndex];
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQ.q}`;

    // Buat Tombol Opsi
    currentQ.o.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.innerHTML = `<span><strong>${String.fromCharCode(65 + index)}.</strong> ${option}</span>`;
        button.onclick = () => checkAnswer(index, button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    if (!canAnswer) return; // Mencegah klik ganda
    canAnswer = false;

    const currentQ = questions[currentQuestionIndex];
    const allButtons = optionsContainer.querySelectorAll('.option-btn');

    if (selectedIndex === currentQ.a) {
        // --- JAWABAN BENAR ---
        btnElement.classList.add('correct');
        btnElement.innerHTML += ` <span style="font-size:1.2rem;">✅</span>`;
        score++;
        
        // Efek Confetti Emas
        confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#FFD700', '#F59E0B', '#ffffff']
        });
        
    } else {
        // --- JAWABAN SALAH ---
        btnElement.classList.add('wrong', 'shake');
        btnElement.innerHTML += ` <span style="font-size:1.2rem;">❌</span>`;
        
        // Tunjukkan jawaban yang benar
        allButtons[currentQ.a].classList.add('correct');
        allButtons[currentQ.a].innerHTML += ` <span style="font-size:1.2rem;">✅</span>`;
    }

    // Munculkan tombol lanjut
    btnNext.style.display = 'block';
    if (currentQuestionIndex === questions.length - 1) {
        btnNext.textContent = "Lihat Hasil 🏁";
    } else {
        btnNext.textContent = "Lanjut ➡️";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    const totalSoal = questions.length; // 50 soal
    const nilaiAkhir = Math.round((score / totalSoal) * 100);
    const salah = totalSoal - score;

    document.getElementById('res-nama').textContent = studentName;
    document.getElementById('res-kelas').textContent = studentClass;
    document.getElementById('res-benar').textContent = score;
    document.getElementById('res-salah').textContent = salah;
    document.getElementById('res-nilai').textContent = nilaiAkhir;

    const pesanElement = document.getElementById('res-pesan');
    if (nilaiAkhir >= 90) {
        pesanElement.textContent = "Luar biasa! Imanmu kuat seperti Daniel! 🌟🦁";
        fireConfetti(); 
    } else if (nilaiAkhir >= 70) {
        pesanElement.textContent = "Bagus sekali! Tuhan memberkati ketekunanmu! 👏";
        fireConfetti();
    } else if (nilaiAkhir >= 50) {
        pesanElement.textContent = "Cukup baik! Ayo baca kisah Daniel lagi ya! 📖";
    } else {
        pesanElement.textContent = "Jangan menyerah! Tetap setia dan terus belajar ya! 💪";
    }
}

// Fungsi Efek Confetti Hujan
function fireConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}