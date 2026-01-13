// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCryxMK0w8zo0fnCXDe2afxMWGXy_-Aw3Y",
    authDomain: "bounty-rush-54fa0.firebaseapp.com",
    projectId: "bounty-rush-54fa0",
    storageBucket: "bounty-rush-54fa0.firebasestorage.app",
    messagingSenderId: "1068173867620",
    appId: "1:1068173867620:web:d6e89b6a7869d451833d71",
    measurementId: "G-K5N3XZZR71"
};

// Initialize Firebase (Compat)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const characters = [
    { id: "001", name: "مونكي دي لوفي", title: "قبطان طاقم قبعة القش", class: "مهاجم", element: "أحمر", img: "assets/luffy.png" },
    { id: "002", name: "رورونوا زورو", title: "مقاتل طاقم قبعة القش", class: "مدافع", element: "أخضر", img: "assets/zoro.png" },
    { id: "003", name: "يوسوب", title: "قناص طاقم قبعة القش", class: "عداء", element: "أزرق", img: "assets/shanks.png" },
    { id: "004", name: "سانجي", title: "طباخ طاقم قبعة القش", class: "مهاجم", element: "أزرق", img: "assets/luffy.png" },
    { id: "005", name: "نامي", title: "ملاحة طاقم قبعة القش", class: "عداء", element: "أخضر", img: "assets/zoro.png" },
    { id: "006", name: "توني توني تشوبر", title: "طبيب طاقم قبعة القش", class: "عداء", element: "أحمر", img: "assets/luffy.png" },
    { id: "007", name: "نيكو روبين", title: "عالمة آثار طاقم قبعة القش", class: "مهاجم", element: "أخضر", img: "assets/zoro.png" },
    { id: "008", name: "بوتشي", title: "حارس قراصنة القط الأسود", class: "مدافع", element: "أزرق", img: "assets/shanks.png" },
    { id: "009", name: "كوبي", title: "فتى المهام", class: "مدافع", element: "أحمر", img: "assets/luffy.png" },
    { id: "010", name: "هيلميبو", title: "الابن الأبله", class: "عداء", element: "أخضر", img: "assets/zoro.png" },
    { id: "011", name: "كاباجي", title: "رئيس أركان قراصنة باجي", class: "عداء", element: "أخضر", img: "assets/shanks.png" },
    { id: "012", name: "ألفيدا", title: "قائدة قراصنة ألفيدا", class: "مدافع", element: "أخضر", img: "assets/luffy.png" },
    { id: "013", name: "هيغوما الدب", title: "زعيم قطاع طرق الجبل", class: "مهاجم", element: "أحمر", img: "assets/zoro.png" },
    { id: "014", name: "جوني", title: "صائد مكافآت", class: "عداء", element: "أزرق", img: "assets/shanks.png" },
    { id: "015", name: "مورغان", title: "كابتن البحرية", class: "مدافع", element: "أزرق", img: "assets/luffy.png" },
    { id: "016", name: "يوساكو", title: "صائد مكافآت", class: "عداء", element: "أحمر", img: "assets/zoro.png" },
    { id: "017", name: "جانغو", title: "قائد قراصنة القط الأسود", class: "مدافع", element: "أحمر", img: "assets/shanks.png" },
    { id: "018", name: "فرانكي", title: "نجار سفينة طاقم قبعة القش", class: "مدافع", element: "أحمر", img: "assets/luffy.png" },
    { id: "019", name: "بروك", title: "موسيقار طاقم قبعة القش", class: "عداء", element: "أخضر", img: "assets/zoro.png" },
    { id: "020", name: "كوروبي", title: "ضابط قراصنة أرلونغ", class: "مدافع", element: "أزرق", img: "assets/shanks.png" },
    { id: "021", name: "تشو", title: "ضابط قراصنة أرلونغ", class: "مهاجم", element: "أخضر", img: "assets/luffy.png" },
    { id: "022", name: "هاتشان", title: "ضابط قراصنة أرلونغ", class: "مهاجم", element: "أحمر", img: "assets/zoro.png" },
    { id: "023", name: "كابتن كورو", title: "القائد السابق لقراصنة القط الأسود", class: "مهاجم", element: "أخضر", img: "assets/shanks.png" },
    { id: "024", name: "غين", title: "قائد معركة أسطول دون كريج", class: "مهاجم", element: "أحمر", img: "assets/luffy.png" },
    { id: "025", name: "دون كريج", title: "أدميرال أسطول القراصنة", class: "مدافع", element: "أخضر", img: "assets/zoro.png" },
    { id: "026", name: "زيف", title: "رئيس طهاة باراتي", class: "مدافع", element: "أحمر", img: "assets/shanks.png" },
    { id: "027", name: "باجي", title: "كابتن قراصنة باجي", class: "عداء", element: "أحمر", img: "assets/luffy.png" },
    { id: "028", name: "ألفيدا", title: "فاكهة الانزلاق (سليب سليب)", class: "عداء", element: "أخضر", img: "assets/zoro.png" },
    { id: "029", name: "تاشيغي", title: "ضابط صف البحرية", class: "عداء", element: "أزرق", img: "assets/shanks.png" },
    { id: "030", name: "نيفيرتاري فيفي", title: "الآنسة وينزداي", class: "عداء", element: "أزرق", img: "assets/luffy.png" },
    { id: "031", name: "يوسوب", title: "مطرقة الـ 5 طن", class: "مهاجم", element: "أزرق", img: "assets/zoro.png" },
    { id: "032", name: "سانجي", title: "ركلة فيو فينجيانس", class: "مدافع", element: "أزرق", img: "assets/shanks.png" },
    { id: "033", name: "نامي", title: "عصا المناخ (كليما تاكت)", class: "مهاجم", element: "أخضر", img: "assets/luffy.png" },
    { id: "034", name: "شانكس", title: "كابتن قراصنة الشعر الأحمر", class: "مهاجم", element: "أحمر", img: "assets/shanks.png" },
    { id: "035", name: "ياسوب", title: "قناص قراصنة الشعر الأحمر", class: "عداء", element: "أخضر", img: "assets/zoro.png" },
    { id: "036", name: "أرلونغ", title: "كابتن قراصنة أرلونغ", class: "مهاجم", element: "أزرق", img: "assets/luffy.png" },
    { id: "037", name: "كايا", title: "فتاة قرية سيروب", class: "مدافع", element: "أزرق", img: "assets/shanks.png" },
    { id: "038", name: "دراكول ميهوك", title: "أقوى سياف في العالم", class: "مهاجم", element: "أحمر", img: "assets/zoro.png" },
    { id: "039", name: "سموكر", title: "كابتن البحرية (المقر الرئيسي)", class: "مدافع", element: "أخضر", img: "assets/luffy.png" },
    { id: "040", name: "وابول", title: "الحاكم السابق لمملكة الطبل", class: "مدافع", element: "أخضر", img: "assets/shanks.png" },
    { id: "041", name: "لوفي", title: "مكافأة 30 مليون بيري", class: "مهاجم", element: "أحمر", img: "assets/luffy.png" },
    { id: "042", name: "كروكودايل", title: "أمير الصحراء / الشيبوكاي", class: "مدافع", element: "أزرق", img: "assets/zoro.png" },
    { id: "043", name: "إينيل", title: "الإله (كامي)", class: "مهاجم", element: "أخضر", img: "assets/shanks.png" },
    { id: "044", name: "إدوارد نيوجيت", title: "كابتن قراصنة اللحية البيضاء", class: "مدافع", element: "أحمر", img: "assets/zoro.png" },
    { id: "045", name: "بورتغاس دي إيس", title: "قراصنة اللحية البيضاء", class: "مهاجم", element: "أزرق", img: "assets/shanks.png" },
    { id: "046", name: "نيفيرتاري فيفي", title: "قاطعة الطاووس", class: "عداء", element: "أزرق", img: "assets/luffy.png" },
    { id: "047", name: "لوفي", title: "غوم-غوم ستورم", class: "مهاجم", element: "أزرق", img: "assets/luffy.png" },
    { id: "048", name: "رورونوا زورو", title: "أسلوب السيف الواحد: أغنية الأسد", class: "مهاجم", element: "أخضر", img: "assets/zoro.png" },
    { id: "049", name: "ساكازوكي (أكاينو)", title: "أدميرال البحرية", class: "مهاجم", element: "أحمر", img: "assets/luffy.png" },
    { id: "050", name: "كوزان (أوكيجي)", title: "أدميرال البحرية", class: "مهاجم", element: "أزرق", img: "assets/shanks.png" },
    { id: "051", name: "نيكو روبين", title: "الآنسة أول صنداي", class: "عداء", element: "أزرق", img: "assets/zoro.png" },
    { id: "052", name: "بون كلاي", title: "ضابط وكيل باروك ووركس", class: "مهاجم", element: "أحمر", img: "assets/luffy.png" },
    { id: "053", name: "بوا هانكوك", title: "إمبراطور القراصنة / الشيبوكاي", class: "عداء", element: "أحمر", img: "assets/shanks.png" },
    { id: "054", name: "غيكو موريا", title: "سيد الظلال / الشيبوكاي", class: "مدافع", element: "أخضر", img: "assets/zoro.png" },
    { id: "055", name: "تشوبر", title: "نقطة الذراع (آرم بوينت)", class: "مهاجم", element: "أخضر", img: "assets/luffy.png" },
    { id: "056", name: "رورونوا زورو", title: "فينيكس الـ 108 رطل", class: "مهاجم", element: "أحمر", img: "assets/zoro.png" },
    { id: "057", name: "بلامي", title: "كابتن قراصنة بلامي", class: "مهاجم", element: "أخضر", img: "assets/shanks.png" },
    { id: "058", name: "يوستاس كيد", title: "كابتن قراصنة كيد", class: "مهاجم", element: "أزرق", img: "assets/luffy.png" },
    { id: "059", name: "ترافلغار لاو", title: "كابتن قراصنة القلب", class: "عداء", element: "أخضر", img: "assets/zoro.png" },
    { id: "060", name: "لوفي", title: "بعد سنتين / القبطان", class: "مهاجم", element: "أزرق", img: "assets/luffy.png" },
    { id: "061", name: "رورونوا زورو", title: "بعد سنتين / المقاتل", class: "مدافع", element: "أخضر", img: "assets/zoro.png" },
    { id: "062", name: "فيفي", title: "أميرة ألاباستا", class: "عداء", element: "أزرق", img: "assets/shanks.png" },
    { id: "063", name: "نامي", title: "بعد سنتين / الملاحة", class: "عداء", element: "أزرق", img: "assets/zoro.png" },
    { id: "064", name: "سابو", title: "رئيس أركان الجيش الثوري", class: "مهاجم", element: "أحمر", img: "assets/luffy.png" },
    { id: "065", name: "سانجي", title: "بعد سنتين / الطباخ", class: "مهاجم", element: "أحمر", img: "assets/shanks.png" },
    { id: "066", name: "يوسوب", title: "بعد سنتين / القناص", class: "عداء", element: "أحمر", img: "assets/zoro.png" },
    { id: "067", name: "جولري بوني", title: "كابتن قراصنة بوني", class: "عداء", element: "أخضر", img: "assets/luffy.png" },
    { id: "068", name: "بورسالينو (كيزارو)", title: "أدميرال البحرية", class: "عداء", element: "أخضر", img: "assets/shanks.png" },
    { id: "069", name: "تشوبر", title: "بعد سنتين / الطبيب", class: "عداء", element: "أزرق", img: "assets/zoro.png" },
    { id: "070", name: "نيكو روبين", title: "بعد سنتين / عالمة الآثار", class: "مهاجم", element: "أحمر", img: "assets/luffy.png" },
    { id: "071", name: "بروك", title: "بعد سنتين / الموسيقار", class: "عداء", element: "أخضر", img: "assets/zoro.png" },
    { id: "072", name: "فرانكي", title: "بعد سنتين / نجار السفينة", class: "مدافع", element: "أحمر", img: "assets/shanks.png" },
    { id: "073", name: "نامي", title: "نسخة البيكيني", class: "عداء", element: "أزرق", img: "assets/zoro.png" },
    { id: "074", name: "بوا هانكوك", title: "نسخة البيكيني", class: "مهاجم", element: "أخضر", img: "assets/shanks.png" },
    { id: "075", name: "سموكر", title: "نسخة ستامبيد", class: "مدافع", element: "أزرق", img: "assets/luffy.png" },
    { id: "077", name: "إيس", title: "متسلل البحرية", class: "مهاجم", element: "أحمر", img: "assets/shanks.png" },
    { id: "078", name: "كروكودايل", title: "سجين إمبيل داون", class: "مدافع", element: "أخضر", img: "assets/zoro.png" },
    { name: "إيس وياماتو (EX)", title: "أميرة الغول ونبضة النار", class: "مهاجم ثنائي", element: "أحمر", img: "assets/shanks.png", rarity: "EX" },
    { name: "إدوارد نيوجيت (EX)", title: "القرصان العظيم", class: "مدافع", element: "ضوء", img: "assets/zoro.png", rarity: "EX" },
    { name: "غول دي روجر (EX)", title: "القرصان العظيم", class: "عداء", element: "ظلام", img: "assets/shanks.png", rarity: "EX" },
    { name: "إس-سنيك (EX)", title: "السيرابيم", class: "مدافع", element: "أزرق", img: "assets/luffy.png", rarity: "EX" },
    { name: "روب لوتشي (EX)", title: "الهيئة المستيقظة", class: "عداء/مهاجم", element: "أزرق", img: "assets/zoro.png", rarity: "EX" },
    { name: "شانكس (EX)", title: "المغادرة الإلهية", class: "عداء", element: "ضوء", img: "assets/shanks.png", rarity: "EX" },
    { name: "غارب (EX)", title: "البطل الأسطوري", class: "مدافع", element: "ضوء", img: "assets/luffy.png", rarity: "EX" },
    { name: "كوزان (EX)", title: "قراصنة اللحية السوداء", class: "مهاجم", element: "ظلام", img: "assets/shanks.png", rarity: "EX" },
    { name: "سابو (EX)", title: "إمبراطور اللهب", class: "مهاجم", element: "أحمر", img: "assets/luffy.png", rarity: "EX" },
    { name: "بورسالينو (EX)", title: "سيف أمانو موراكومو", class: "عداء", element: "أخضر", img: "assets/zoro.png", rarity: "EX" },
    { name: "ترافلغار لاو (EX)", title: "الهيئة الأنثوية", class: "عداء", element: "ضوء", img: "assets/shanks.png", rarity: "EX" }
];

let cart = [];
let myOrderNumber = localStorage.getItem('myOrderNumber') || null;

const charListEl = document.getElementById('char-list');
const searchInput = document.getElementById('char-search');
const cartItemsEl = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const itemCountEl = document.getElementById('item-count');
const checkoutBtn = document.getElementById('checkout-btn');
const paymentModal = document.getElementById('payment-modal');
const finalConfirmBtn = document.getElementById('final-confirm-btn');
const closeModal = document.querySelector('.close-modal');
const globalQueueCountEl = document.getElementById('global-queue-count');
const userPositionBox = document.getElementById('user-position-box');
const userPosValEl = document.getElementById('user-pos-val');
const workingOnIdEl = document.getElementById('working-on-id');

// Queue Status Initialization
const statusRef = db.collection('status').doc('queue');

// Listen to Queue Changes
statusRef.onSnapshot((doc) => {
    if (doc.exists) {
        const data = doc.data();
        const serving = data.currently_serving || 0;
        const working = data.currently_working || 0;
        const total = data.last_order_id || 0;

        globalQueueCountEl.innerText = Math.max(0, total - serving);
        workingOnIdEl.innerText = working || "--";

        if (myOrderNumber) {
            userPositionBox.classList.remove('hidden');
            const pos = myOrderNumber - serving;
            if (pos <= 0) {
                userPosValEl.innerText = "وصل دورك!";
                userPositionBox.style.background = "#27ae60";
            } else {
                userPosValEl.innerText = pos;
            }
        }
    } else {
        statusRef.set({ currently_serving: 0, currently_working: 0, last_order_id: 0 });
    }
});

function renderCharacters(filter = "") {
    charListEl.innerHTML = "";
    const filtered = characters.filter(c =>
        c.name.includes(filter) ||
        c.title.includes(filter) ||
        c.element.includes(filter)
    );

    filtered.forEach(char => {
        const card = document.createElement('div');
        card.className = `char-card ${char.rarity === 'EX' ? 'ex-card' : ''}`;
        card.innerHTML = `
            <img src="${char.img}" alt="${char.name}">
            <div class="char-details">
                <h3>${char.name}</h3>
                <p class="char-title">${char.title}</p>
                <div class="char-meta">
                    <span class="badge ${char.element}">${char.element}</span>
                    <span class="badge class">${char.class}</span>
                </div>
            </div>
            <div class="options">
                <button class="multi-btn" onclick="addToCart('${char.name}', 2, 30)">
                    <span><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                    <span>30 EGP</span>
                </button>
                <button class="multi-btn" onclick="addToCart('${char.name}', 3, 60)">
                    <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                    <span>60 EGP</span>
                </button>
                <button class="multi-btn" onclick="addToCart('${char.name}', 4, 80)">
                    <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                    <span>80 EGP</span>
                </button>
            </div>
        `;
        charListEl.appendChild(card);
    });
}

window.addToCart = (name, stars, price) => {
    const char = characters.find(c => c.name === name);
    cart.push({ ...char, stars, price, cartId: Date.now() });
    updateUI();
};

window.removeFromCart = (cartId) => {
    cart = cart.filter(item => item.cartId !== cartId);
    updateUI();
};

function updateUI() {
    cartItemsEl.innerHTML = "";
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-msg">سلتك فارغة.. اختر شخصية لتبدأ!</p>';
        totalPriceEl.innerText = "0";
        itemCountEl.innerText = "0";
        return;
    }

    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.img}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="stars">${Array(item.stars).fill('<i class="fas fa-star"></i>').join('')}</div>
                <div class="price-val">${item.price} EGP</div>
            </div>
            <i class="fas fa-trash remove-item" onclick="removeFromCart(${item.cartId})"></i>
        `;
        cartItemsEl.appendChild(div);
    });
    totalPriceEl.innerText = total;
    itemCountEl.innerText = cart.length;
}

searchInput.addEventListener('input', (e) => renderCharacters(e.target.value));

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("يرجى اختيار شخصية واحدة على الأقل!");
        return;
    }
    paymentModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => paymentModal.classList.add('hidden'));

finalConfirmBtn.addEventListener('click', async () => {
    const webhookUrl = 'https://discord.com/api/webhooks/1395038941110866010/MucgrT_399C44lfUVL79HcqR4cfwNbJlL5iG1qPmxdBF47GGbTbmkokZK6YnslmJ63wL';

    let nextId = 1;
    await db.runTransaction(async (transaction) => {
        const doc = await transaction.get(statusRef);
        nextId = (doc.data().last_order_id || 0) + 1;
        transaction.update(statusRef, { last_order_id: nextId });
    });

    myOrderNumber = nextId;
    localStorage.setItem('myOrderNumber', myOrderNumber);

    const itemsList = cart.map(i => `• **${i.name}** (${i.stars} ⭐) - ${i.price} EGP`).join("\n");
    const total = cart.reduce((sum, i) => sum + i.price, 0);

    // Create Action Links
    const baseUrl = window.location.origin + window.location.pathname;
    const workLink = `${baseUrl}?action=work&id=${myOrderNumber}`;
    const finishLink = `${baseUrl}?action=finish&id=${myOrderNumber}`;
    const isLocal = window.location.protocol === 'file:';

    const message = {
        embeds: [{
            title: `💎 طلب رقم #${myOrderNumber} مدفوع مقدماً!`,
            description: isLocal
                ? `⚠️ **تنبيه: الموقع يعمل محلياً (روابط نصية فقط)**\n\n[🛠️ ابدأ العمل](${workLink})\n[✅ إنهاء الطلب](${finishLink})`
                : `لقد قام المستخدم بتأكيد الدفع ويرغب في إرسال الطلب.`,
            color: 15844367,
            fields: [
                { name: "📋 القائمة", value: itemsList },
                { name: "💰 الإجمالي المدفوع", value: `**${total} EGP**`, inline: true },
                { name: "🔢 رقم الطابور", value: `#${myOrderNumber}`, inline: true }
            ],
            footer: { text: "برجاء التأكد من وصول المبلغ قبل البدء." },
            timestamp: new Date()
        }]
    };

    // Only add buttons if NOT on a local file (Discord rejects file:/// URLs in buttons)
    if (!isLocal) {
        message.components = [
            {
                type: 1,
                components: [
                    { type: 2, style: 5, label: "🛠️ ابدأ العمل", url: workLink },
                    { type: 2, style: 5, label: "✅ إنهاء الطلب", url: finishLink }
                ]
            }
        ];
    }

    try {
        finalConfirmBtn.disabled = true;
        finalConfirmBtn.innerText = 'جاري الإرسال...';

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message)
        });

        if (response.ok) {
            alert(`تم إرسال طلبك بنجاح! أنت الآن الرقم ${myOrderNumber} في الطابور.`);
            paymentModal.classList.add('hidden');
            updateUI();
            cart = [];
        } else {
            throw new Error('Failed');
        }
    } catch (e) {
        alert("خطأ في الإرسال.. يرجى التحقق من اتصالك.");
    } finally {
        finalConfirmBtn.disabled = false;
        finalConfirmBtn.innerText = 'تم التحويل.. إرسال الطلب!';
    }
});

// Admin Functionality
const adminPanel = document.getElementById('admin-panel');
const nextOrderBtn = document.getElementById('next-order-btn');

let clickCount = 0;
document.querySelector('.premium-title').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        adminPanel.classList.remove('hidden');
        localStorage.setItem('isAdmin', 'true');
        alert("وضع المسؤول مفعل.");
    }
});

if (localStorage.getItem('isAdmin') === 'true') {
    adminPanel.classList.remove('hidden');
}

// Handle URL Actions
const urlParams = new URLSearchParams(window.location.search);
const action = urlParams.get('action');
const actionId = parseInt(urlParams.get('id'));

if (action && actionId && localStorage.getItem('isAdmin') === 'true') {
    if (action === 'work') {
        statusRef.update({ currently_working: actionId });
        alert(`جاري العمل على الطلب #${actionId}`);
    } else if (action === 'finish') {
        statusRef.update({ currently_serving: actionId, currently_working: 0 });
        alert(`تم إنهاء الطلب #${actionId}`);
    }
    // Clean URL
    window.history.replaceState({}, document.title, window.location.pathname);
}

nextOrderBtn.addEventListener('click', async () => {
    await db.runTransaction(async (transaction) => {
        const doc = await transaction.get(statusRef);
        const currentServing = doc.data().currently_serving || 0;
        const total = doc.data().last_order_id || 0;
        if (currentServing < total) {
            transaction.update(statusRef, { currently_serving: currentServing + 1, currently_working: 0 });
        }
    });
});

// Init
renderCharacters();
