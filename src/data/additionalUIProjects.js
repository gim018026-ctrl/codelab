const groups = [
  ["Commerce", "쇼핑", "commerce-shopping", ["Sports Shopping"]],
  ["Commerce", "패션", "commerce-fashion", ["UNIQLO", "KREAM"]],
  ["Commerce", "뷰티", "commerce-beauty", ["hince", "pef.", "Torriden"]],
  ["Commerce", "식품", "commerce-food", ["JINRO", "Vendredi Gourmand", "서울피자"]],
  ["Commerce", "유통", "commerce-distribution", ["SAMMI", "Luna Brew", "MORRIS"]],
  ["Commerce", "생활", "commerce-living", ["SIMMONS"]],
  ["Finance & Service", "금융", "finance-service-finance", ["Kbank", "우리은행", "하나은행 기업뱅킹"]],
  ["Finance & Service", "건강", "finance-service-health", ["삼성서울병원", "TK Life Care", "백태움 한의원", "Brainall"]],
  ["Finance & Service", "교육", "finance-service-education", ["밀크T 체험관"]],
  ["Finance & Service", "학교", "finance-service-school", ["세종대학교 학술정보원", "이화여자대학교"]],
  ["Finance & Service", "복지", "finance-service-welfare", ["World Vision Global 6K", "kakao impact", "희망조약돌", "월드비전 후원 캠페인"]],
  ["Culture & Lifestyle", "예술", "culture-lifestyle-art", ["GS Arts Center", "LEEUM"]],
  ["Culture & Lifestyle", "영화", "culture-lifestyle-film", ["전주국제영화제", "서울독립영화제"]],
  ["Culture & Lifestyle", "엔터", "culture-lifestyle-entertainment", ["New Source Magazine", "SM Global Audition", "BIGHIT MUSIC"]],
  ["Culture & Lifestyle", "게임", "culture-lifestyle-game", ["Mgame", "PUBG Esports", "Nexon Creators", "WEMADE"]],
  ["Culture & Lifestyle", "여행", "culture-lifestyle-travel", ["PARATA AIR", "GLOW SEOUL"]],
  ["Culture & Lifestyle", "자동차", "culture-lifestyle-automotive", ["현대자동차그룹", "GENESIS"]],
  ["Creative & Promotion", "디자인", "creative-promotion-design", ["NAVER × Spotify", "if(kakao)25", "Y STUDIO"]],
  ["Creative & Promotion", "프로모션", "creative-promotion-promotion", ["깊카", "2026 기후변화주간"]],
  ["Creative & Promotion", "행사", "creative-promotion-event", ["NDC 26", "PECA", "필더필", "STAR TRAIL · STELLIVE"]],
  ["Creative & Promotion", "정보", "creative-promotion-information", ["동아일보", "서울신문"]],
];

const websites = {
  "Sports Shopping": "https://dk-on.com/",
  "UNIQLO": "https://www.uniqlo.com/kr/ko/",
  "KREAM": "https://www.kolonmall.com/",
  "hince": "https://hince.co.kr/",
  "pef.": "https://www.project-pef.com/",
  "Torriden": "https://torriden.us/",
  "JINRO": "https://jinro-soju.com",
  "Vendredi Gourmand": "https://vendredigourmand.com/",
  "서울피자": "https://seooreungpizza.com/",
  "SAMMI": "http://www.sammisound.com/",
  "Luna Brew": "http://www.lunabrew.co.kr/",
  "MORRIS": "https://morris.co.kr/",
  "SIMMONS": "https://www.simmons.co.kr/",
  "Kbank": "https://www.kbanknow.com/",
  "우리은행": "https://spot.wooribank.com/pot/Dream?withyou=bp",
  "하나은행 기업뱅킹": "https://biz.hanabank.com/",
  "삼성서울병원": "https://www.samsunghospital.com/en/",
  "TK Life Care": "https://www.toptk.co.kr/",
  "백태움 한의원": "https://www.baekrokdam.com/",
  "Brainall": "https://brainall.kr/",
  "밀크T 체험관": "https://web.milkt.co.kr/",
  "세종대학교 학술정보원": "https://library.sejong.ac.kr/",
  "이화여자대학교": "https://www.ewha.ac.kr/",
  "World Vision Global 6K": "https://global6kforwater.com/",
  "kakao impact": "https://kakaoimpact.org/",
  "희망조약돌": "https://www.joyagdol.com/",
  "월드비전 후원 캠페인": "https://www.worldvision.or.kr/campaign/25-1000girls",
  "GS Arts Center": "https://www.gsartscenter.com/",
  "LEEUM": "https://www.leeumhoam.org/leeum",
  "전주국제영화제": "https://www.jeonjufest.kr/",
  "서울독립영화제": "https://siff.kr/",
  "New Source Magazine": "https://newsourcemag.com/",
  "SM Global Audition": "https://audition.smtown.com/",
  "BIGHIT MUSIC": "https://ibighit.com/",
  "Mgame": "https://www.mgame.com/",
  "PUBG Esports": "https://pubgesports.com/",
  "Nexon Creators": "https://creators.nexon.com/kr",
  "WEMADE": "https://wemade.com/kr/",
  "PARATA AIR": "https://parataair.com/",
  "GLOW SEOUL": "https://glowseoul.co.kr/",
  "현대자동차그룹": "https://www.hyundaimotorgroup.com/",
  "GENESIS": "https://www.genesis.com/kr/ko",
  "NAVER × Spotify": "https://mkt.naver.com/spotify",
  "if(kakao)25": "https://if.kakao.com/2025",
  "Y STUDIO": "http://www.ystudio.co.kr",
  "깊카": "https://www.gifca.co.kr/",
  "2026 기후변화주간": "https://gihoo.or.kr/earthday2026/",
  "NDC 26": "https://ndc.nexon.com/",
  "PECA": "https://www.peca.kr/",
  "필더필": "http://www.fillthefeel.com/",
  "STAR TRAIL · STELLIVE": "https://startrail.stellive.me/",
  "동아일보": "https://www.donga.com/",
  "서울신문": "https://www.seoul.co.kr/",
};

const extensions = {
  "commerce-beauty-02": "png", "commerce-beauty-03": "png",
  "finance-service-education-01": "png", "finance-service-school-02": "png",
  "culture-lifestyle-entertainment-01": "png", "creative-promotion-event-04": "png",
};

const palettes = {
  Commerce: ["#111111", "#FFFFFF", "#EDEDED", "#D66B78", "#F2C94C", "#6B7280"],
  "Finance & Service": ["#123B6D", "#2563EB", "#14B8A6", "#E8F0FA", "#F8FAFC", "#FFFFFF"],
  "Culture & Lifestyle": ["#171717", "#FFFFFF", "#6D54FF", "#E85D75", "#F4C95D", "#EDEDED"],
  "Creative & Promotion": ["#111111", "#FFFFFF", "#5439FF", "#FF5B35", "#F6D84A", "#D9D9E3"],
};

const categoryFolders = {
  Commerce: "commerce",
  "Finance & Service": "finance-service",
  "Culture & Lifestyle": "culture-lifestyle",
  "Creative & Promotion": "creative-promotion",
};

let nextId = 100;

export const additionalUIProjects = groups.flatMap(([category, subcategory, prefix, titles]) => (
  titles.map((title, index) => {
    const number = String(index + 1).padStart(2, "0");
    const stem = `${prefix}-${number}`;
    return {
      id: nextId++,
      category,
      subcategory,
      title,
      subtitle: `${subcategory} website reference`,
      date: "2026. 08. 12",
      image: `/img/ui-inspiration/${categoryFolders[category]}/${stem}.${extensions[stem] || "jpg"}`,
      colors: palettes[category],
      layout: "Full-page website",
      style: "Modern · Curated",
      purpose: subcategory,
      keywords: [category, subcategory, "Web", "UI"],
      description: `${subcategory} 분야의 브랜드와 콘텐츠 구성을 살펴볼 수 있는 특화사이트 레퍼런스입니다.`,
      website: websites[title] || "",
    };
  })
));
