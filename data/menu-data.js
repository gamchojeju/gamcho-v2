/* =========================================================
   GAMCHO RESTAURANT 2.0
   MENU DATA

   기존 menu.html 원본 데이터 기준
   - 메뉴명 유지
   - 메뉴 설명 유지
   - 가격 유지
   - 4개국어 유지
   - 이미지 파일명만 새 구조로 변경
   ========================================================= */

const menuData = [

    /* =====================================================
       식사 메뉴
    ===================================================== */

    {
        id: "gamcho-sundae-gukbap",
        category: "meal",
        image: "images/menu/gamcho-sundae-gukbap.jpg",
        best: true,

        name: {
            ko: "감초순대국밥",
            en: "Sundae Gukbap (Korean Blood Sausage Soup)",
            zh: "米肠汤饭（韩式猪血肠汤）",
            ja: "スンデクッパ"
        },

        description: {
            ko: "30년간 이어진 변함없는 어머님의 그 맛",
            en: "Traditional Korean sausage soup with rich flavor",
            zh: "30年传承的妈妈味道",
            ja: "30年受け継がれた母の味"
        },

        price: "9,000원"
    },


    {
        id: "pure-pork-gukbap",
        category: "meal",
        image: "images/menu/pure-pork-gukbap.png",

        name: {
            ko: "순수돼지국밥(돼지설렁탕)",
            en: "Clear Pork Soup",
            zh: "清淡猪肉汤",
            ja: "豚スープ"
        },

        description: {
            ko: "최고급사태와 담백한 머리고기로 구성한 진짜 순수돼지국밥",
            en: "Premium Pork Rice Soup",
            zh: "精品猪肉汤饭",
            ja: "上質な豚肉の本格クッパ"
        },

        price: "9,000원"
    },


    {
        id: "pork-haejangguk",
        category: "meal",
        image: "images/menu/pork-haejangguk.png",

        name: {
            ko: "돼지해장국",
            en: "Spicy Pork Soup",
            zh: "辣猪肉汤",
            ja: "豚スープ"
        },

        description: {
            ko: "알싸한 대정 마늘을 듬뿍넣고 칼칼하게 끓여낸 감초식 돼지 해장국",
            en: "Spicy garlic pork soup",
            zh: "蒜香微辣猪肉汤",
            ja: "にんにく香るピリ辛豚スープ"
        },

        price: "10,000원"
    },


    {
        id: "momguk",
        category: "meal",
        image: "images/menu/momguk.png",

        name: {
            ko: "몸국",
            en: "Jeju Traditional Seaweed & Pork Soup",
            zh: "济州传统海藻猪肉汤",
            ja: "済州伝統 海藻と豚肉のスープ"
        },

        description: {
            ko: "제주 바다의 건강함을 담아 정성으로 끓여낸 한 그릇의 보약",
            en: "Traditional Jeju soup made with seaweed (gommok) and pork, slowly simmered for a rich and savory flavor.",
            zh: "济州岛传统汤品，以海藻和猪肉长时间熬煮而成，味道浓郁鲜美。",
            ja: "済州島の伝統料理。海藻と豚肉をじっくり煮込んだ、旨味たっぷりのスープです。"
        },

        price: "10,000원"
    },


    {
        id: "tasting-sundae",
        category: "meal",
        image: "images/menu/tasting-sundae.jpg",

        name: {
            ko: "맛보기순대",
            en: "Sundae",
            zh: "米肠",
            ja: "スンデ"
        },

        description: {
            ko: "제주돼지로 직접 만든 제주식 전통 수제순대",
            en: "Jeju-Style Handmade Blood Sausage",
            zh: "济州传统手工血肠",
            ja: "済州産 手作りスンデ"
        },

        price: "10,000원"
    },


    {
        id: "black-bean-bibing-noodles",
        category: "meal",
        image: "images/menu/black-bean-bibing-noodles.png",

        name: {
            ko: "검은콩비빙冰국수",
            en: "Cold Bean Noodles",
            zh: "黑豆冷面",
            ja: "冷麺"
        },

        description: {
            ko: "(5월 ~ 9월까지) 얼음에 비벼먹는 비빙국수! 콩국수 전문점은 아니지만 맛있어요",
            en: "Seasonal (May–Sep) Chilled Bibim Noodles",
            zh: "【5–9月限定】冰拌面",
            ja: "【5月～9月限定】冷やしビビン麺"
        },

        price: "10,000원"
    },


    {
        id: "garlic-pork-noodles",
        category: "meal",
        image: "images/menu/garlic-pork-noodles.png",

        name: {
            ko: "마농고기국수",
            en: "Jeju Garlic Pork Noodles",
            zh: "济州岛大蒜猪肉汤面",
            ja: "済州島ニンニクの豚肉麺"
        },

        description: {
            ko: "알싸한 마늘향이 조화로운 고기국수",
            en: "Soft pork noodles topped with fragrant Jeju garlic. Refreshing and flavorful Jeju specialties.",
            zh: "淡猪肉配上济州大蒜,是充满凉爽美味济州味道的人气面食。",
            ja: "済州島の伝統料理「豚肉麺」に済州産のニンニクを加えた人気メニューです。 あっさりとしたスープと柔らかい豚肉の旨味を楽しんでください。"
        },

        price: "10,000원"
    },


    /* =====================================================
       전골 / 요리
    ===================================================== */

    {
        id: "sundae-naejang-jeongol",
        category: "hotpot",
        image: "images/menu/sundae-naejang-jeongol.jpg",
        best: true,

        name: {
            ko: "순대내장전골",
            en: "Sundae Hotpot",
            zh: "火锅",
            ja: "鍋"
        },

        description: {
            ko: "내장과 야채, 수제순대의 푸짐함! ",
            en: "Assorted Intestines & Blood Sausage",
            zh: "内脏与血肠拼盘",
            ja: "内臓とスンデの盛り合わせ"
        },

        price: "35,000원"
    },


    {
        id: "dakbokkeumtang",
        category: "hotpot",
        image: "images/menu/dakbokkeumtang.jpg",
        best: true,

        name: {
            ko: "닭볶음탕",
            en: "Spicy Chicken",
            zh: "辣鸡",
            ja: "鶏"
        },

        description: {
            ko: "닭볶음탕 전문점을 따로 준비해도 될정도의 맛",
            en: "Spicy Braised Chicken",
            zh: "香辣炖鸡",
            ja: "ピリ辛鶏煮込み"
        },

        price: "35,000원"
    },


    {
        id: "pork-haejang-jeongol",
        category: "hotpot",
        image: "images/menu/pork-haejang-jeongol.jpg",

        name: {
            ko: "돼지해장전골",
            en: "Pork Hotpot",
            zh: "猪肉锅",
            ja: "豚鍋"
        },

        description: {
            ko: "푸짐한 해장전골에 신라면이 공짜",
            en: "Hearty Hangover Hot Pot (Ramen Included)",
            zh: "丰盛解酒火锅（附赠拉面）",
            ja: "ボリューム満点鍋（ラーメンサービス）"
        },

        price: "22,000원"
    },


    /* =====================================================
       세트 메뉴
    ===================================================== */

    {
        id: "set-a",
        category: "set",
        image: "images/menu/set-a.jpg",

        name: {
            ko: "A세트",
            en: "Set A",
            zh: "A套餐",
            ja: "Aセット"
        },

        description: {
            ko: "순대+머리고기",
            en: "Blood Sausage + Pork",
            zh: "血肠 + 猪肉",
            ja: "スンデ + 豚肉"
        },

        price: "15,000원"
    },


    {
        id: "set-b",
        category: "set",
        image: "images/menu/set-b.jpg",

        name: {
            ko: "B세트",
            en: "Set B",
            zh: "B套餐",
            ja: "Bセット"
        },

        description: {
            ko: "순대+머리고기+내장",
            en: "Blood Sausage + Pork + Intestines",
            zh: "血肠 + 猪肉 + 内脏",
            ja: "スンデ + 豚肉 + 内臓"
        },

        price: "20,000원"
    },


    {
        id: "set-c",
        category: "set",
        image: "images/menu/set-c.jpg",
        best: true,

        name: {
            ko: "C세트",
            en: "Set C",
            zh: "C套餐",
            ja: "Cセット"
        },

        description: {
            ko: "순대+머리고기+내장+막창",
            en: "Blood Sausage + Pork + Intestines + Makchang",
            zh: "血肠 + 猪肉 + 内脏 + 大肠",
            ja: "スンデ + 豚肉 + 内臓 + ホルモン"
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
