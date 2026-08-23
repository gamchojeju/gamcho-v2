/* =========================================================
   GAMCHO RESTAURANT 2.0
   Menu Data

   기존 감초식당 메뉴 정보 보존
   ========================================================= */

const menuData = [

    /* =====================================================
       식사 메뉴
    ===================================================== */

    {
        id: "gamcho-sundae-gukbap",
        category: "meal",
        image: "menu1.jpg",
        best: true,

        name: {
            ko: "감초순대국밥",
            en: "Sundae Gukbap",
            zh: "米肠汤饭",
            ja: "スンデクッパ"
        },

        description: {
            ko: "30년간 이어진 변함없는 어머님의 그 맛.",
            en: "The unchanged taste of a mother's cooking, passed down for 30 years.",
            zh: "传承30年的妈妈味道。",
            ja: "30年間受け継がれてきた、変わらない母の味。"
        },

        price: "9,000원"
    },


    {
        id: "pure-pork-gukbap",
        category: "meal",
        image: "menu3.png",

        name: {
            ko: "순수돼지국밥(돼지설렁탕)",
            en: "Pure Pork Gukbap",
            zh: "纯猪肉汤饭",
            ja: "豚肉クッパ"
        },

        description: {
            ko: "최고급사태와 담백한 머리고기로 구성한 진짜 순수돼지국밥",
            en: "A clear pork soup made with premium pork shank and tender pork head meat.",
            zh: "精选猪腿肉和清淡猪头肉熬制的纯正猪肉汤饭。",
            ja: "上質な豚すね肉とあっさりした豚頭肉を使った本格豚肉クッパ。"
        },

        price: "9,000원"
    },


    {
        id: "pork-haejangguk",
        category: "meal",
        image: "menu2.png",

        name: {
            ko: "돼지해장국",
            en: "Pork Haejangguk",
            zh: "猪肉醒酒汤",
            ja: "豚肉ヘジャンクク"
        },

        description: {
            ko: "알싸한 대정 마늘을 듬뿍넣고 칼칼하게 끓여낸 감초식 돼지 해장국",
            en: "Gamcho-style pork hangover soup cooked with plenty of aromatic Jeju garlic.",
            zh: "加入大量济州大静蒜，熬煮出浓郁香辣风味的猪肉醒酒汤。",
            ja: "済州・大静産のにんにくをたっぷり使った、ピリ辛で風味豊かな豚肉ヘジャンクク。"
        },

        price: "10,000원"
    },


    {
        id: "momguk",
        category: "meal",
        image: "menu4.png",

        name: {
            ko: "몸국",
            en: "Momguk",
            zh: "济州海藻猪肉汤",
            ja: "モムクッ"
        },

        description: {
            ko: "제주 바다의 건강함을 담아 정성으로 끓여낸 한 그릇의 보약",
            en: "A traditional Jeju soup made with seaweed and pork, lovingly simmered for a nourishing meal.",
            zh: "融入济州大海健康滋味，以海藻和猪肉精心熬制的一碗滋补汤。",
            ja: "済州の海の恵みを込め、海藻と豚肉を丁寧に煮込んだ伝統スープ。"
        },

        price: "10,000원"
    },


    {
        id: "tasting-sundae",
        category: "meal",
        image: "menu6.jpg",

        name: {
            ko: "맛보기순대",
            en: "Sundae",
            zh: "米肠",
            ja: "スンデ"
        },

        description: {
            ko: "제주돼지로 직접 만든 제주식 전통 수제순대",
            en: "Traditional handmade Jeju-style sundae made with Jeju pork.",
            zh: "使用济州猪肉手工制作的济州传统米肠。",
            ja: "済州産の豚肉で手作りした、済州伝統スタイルのスンデ。"
        },

        price: "10,000원"
    },


    {
        id: "black-bean-bibing-noodles",
        category: "meal",
        image: "menu5.png",

        name: {
            ko: "검은콩비빙冰국수",
            en: "Cold Black Bean Noodles",
            zh: "黑豆冰拌面",
            ja: "黒豆冷やしビビン麺"
        },

        description: {
            ko: "(5월 ~ 9월까지) 얼음에 비벼먹는 비빙국수! 콩국수 전문점은 아니지만 맛있어요",
            en: "Available from May to September. Refreshing bibim noodles mixed with ice.",
            zh: "【5月至9月】加入冰块拌着吃的清凉拌面！虽然不是专门的豆浆面店，但味道非常好。",
            ja: "【5月～9月】氷と一緒に混ぜて食べる、ひんやりビビン麺。豆乳麺専門店ではありませんが、おいしく楽しめます。"
        },

        price: "10,000원"
    },


    {
        id: "garlic-pork-noodles",
        category: "meal",
        image: "menu15.png",

        name: {
            ko: "마농고기국수",
            en: "Jeju Garlic Pork Noodles",
            zh: "济州大蒜猪肉面",
            ja: "済州島にんにく豚肉麺"
        },

        description: {
            ko: "알싸한 마늘향이 조화로운 고기국수",
            en: "Jeju-style pork noodles harmonized with the aromatic flavor of garlic.",
            zh: "猪肉面搭配济州大蒜的浓郁香气，清爽又美味。",
            ja: "香ばしいにんにくの風味が豚肉麺と調和した済州島の人気料理。"
        },

        price: "10,000원"
    },


    /* =====================================================
       전골 / 요리
    ===================================================== */

    {
        id: "sundae-naejang-jeongol",
        category: "hotpot",
        image: "menu10.jpg",
        best: true,

        name: {
            ko: "순대내장전골",
            en: "Sundae & Intestine Hotpot",
            zh: "米肠内脏火锅",
            ja: "スンデと内臓の鍋"
        },

        description: {
            ko: "내장과 야채, 수제순대의 푸짐한 전골.",
            en: "A hearty hotpot filled with intestines, vegetables, and handmade sundae.",
            zh: "内脏、蔬菜和手工米肠组成的丰盛火锅。",
            ja: "内臓、野菜、手作りスンデをたっぷり楽しめる鍋料理。"
        },

        price: "35,000원"
    },


    {
        id: "dakbokkeumtang",
        category: "hotpot",
        image: "menu12.jpg",
        best: true,

        name: {
            ko: "닭볶음탕",
            en: "Spicy Braised Chicken",
            zh: "辣炖鸡",
            ja: "タットリタン"
        },

        description: {
            ko: "닭볶음탕 전문점을 따로 준비해도 될정도의 맛",
            en: "A delicious spicy braised chicken dish good enough to be served at a specialty restaurant.",
            zh: "味道出众，即使开一家专门的辣炖鸡店也不为过。",
            ja: "専門店として出してもいいほどのおいしさを誇るピリ辛鶏煮込み。"
        },

        price: "35,000원"
    },


    {
        id: "pork-haejang-jeongol",
        category: "hotpot",
        image: "menu13.jpg",

        name: {
            ko: "돼지해장전골",
            en: "Pork Hangover Hotpot",
            zh: "猪肉醒酒火锅",
            ja: "豚肉ヘジャンクク鍋"
        },

        description: {
            ko: "푸짐한 해장전골에 신라면이 공짜",
            en: "A hearty hangover hotpot with complimentary Shin Ramyun.",
            zh: "丰盛的解酒火锅，免费赠送辛拉面。",
            ja: "ボリュームたっぷりのヘジャンクク鍋。辛ラーメンを無料でサービス。"
        },

        price: "22,000원"
    },


    /* =====================================================
       세트 메뉴
    ===================================================== */

    {
        id: "set-a",
        category: "set",
        image: "menu7.jpg",

        name: {
            ko: "A세트",
            en: "Set A",
            zh: "A套餐",
            ja: "Aセット"
        },

        description: {
            ko: "순대+머리고기",
            en: "Sundae + Pork Head Meat",
            zh: "米肠 + 猪头肉",
            ja: "スンデ + 豚頭肉"
        },

        price: "15,000원"
    },


    {
        id: "set-b",
        category: "set",
        image: "menu8.jpg",

        name: {
            ko: "B세트",
            en: "Set B",
            zh: "B套餐",
            ja: "Bセット"
        },

        description: {
            ko: "순대+머리고기+내장",
            en: "Sundae + Pork Head Meat + Intestines",
            zh: "米肠 + 猪头肉 + 内脏",
            ja: "スンデ + 豚頭肉 + 内臓"
        },

        price: "20,000원"
    },


    {
        id: "set-c",
        category: "set",
        image: "menu9.jpg",
        best: true,

        name: {
            ko: "C세트",
            en: "Set C",
            zh: "C套餐",
            ja: "Cセット"
        },

        description: {
            ko: "순대+머리고기+내장+막창",
            en: "Sundae + Pork Head Meat + Intestines + Makchang",
            zh: "米肠 + 猪头肉 + 内脏 + 猪大肠",
            ja: "スンデ + 豚頭肉 + 内臓 + マクチャン"
        },

        price: "25,000원"
    }

];


/* =========================================================
   MENU CATEGORY LABELS
   ========================================================= */

const menuCategories = {

    meal: {
        ko: "식사 메뉴",
        en: "Meals",
        zh: "主食",
        ja: "お食事"
    },

    hotpot: {
        ko: "전골 / 요리",
        en: "Hotpot / Dishes",
        zh: "火锅 / 菜肴",
        ja: "鍋・料理"
    },

    set: {
        ko: "세트 메뉴",
        en: "Set Menu",
        zh: "套餐",
        ja: "セットメニュー"
    }

};
