import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  Check,
  Copy,
  Grid2X2,
  Heart,
  LayoutList,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import "../styles/ui-inspiration/ui-inspiration.css";
import { additionalUIProjects } from "../data/additionalUIProjects.js";
import Footer from "../components/Footer.jsx";

const projectEntries = [
  {
    id: 1,
    category: "Corporate", subcategory: "기업", title: "K-뉴딜 아카데미", website: "https://knda.korchamhrd.net/", subtitle: "청년 일자리 교육 플랫폼", date: "2026. 08. 12",
    image: "/img/ui-inspiration/corporate/corporate-company.jpg", colors: ["#0F172A", "#334155", "#2563EB", "#E2E8F0", "#F8FAFC", "#FFFFFF"],
    layout: "Corporate website", style: "Professional · Trust", purpose: "기업", keywords: ["Corporate", "Company", "기업"],
    description: "기업의 브랜드 가치와 주요 사업을 명확하게 전달하는 기업 웹사이트 레퍼런스입니다.",
  },
  {
    id: 2, category: "Corporate", subcategory: "기관", title: "대구대학교 70주년", website: "https://70th.daegu.ac.kr/history", subtitle: "개교 70주년 기념 웹사이트", date: "2026. 08. 12",
    image: "/img/ui-inspiration/corporate/corporate-institution-01.jpg", colors: ["#123B6D", "#1E6091", "#38A3A5", "#D9ED92", "#F5F7FA", "#FFFFFF"],
    layout: "Institution portal", style: "Public · Accessible", purpose: "기관", keywords: ["Corporate", "Institution", "기관"],
    description: "정보 접근성과 신뢰를 중심으로 구성된 기관 웹사이트 레퍼런스입니다.",
  },
  {
    id: 3, category: "Corporate", subcategory: "기관", title: "산업연구원 50주년", website: "https://www.kiet.re.kr/50th/", subtitle: "KIET 50주년 기념 웹사이트", date: "2026. 08. 12",
    image: "/img/ui-inspiration/corporate/corporate-institution-02.jpg", colors: ["#123B6D", "#227C9D", "#17C3B2", "#EAF4F4", "#F6F8FA", "#FFFFFF"],
    layout: "Information portal", style: "Structured · Clear", purpose: "기관", keywords: ["Corporate", "Institution", "Portal", "기관"],
    description: "다양한 기관 정보와 서비스를 체계적으로 탐색할 수 있는 포털형 레퍼런스입니다.",
  },
  {
    id: 4, category: "Corporate", subcategory: "기관", title: "대한민국 청와대", website: "https://www.president.go.kr/", subtitle: "청와대 공식 웹사이트", date: "2026. 08. 12",
    image: "/img/ui-inspiration/corporate/corporate-institution-03.jpg", colors: ["#173F5F", "#20639B", "#3CAEA3", "#F6D55C", "#F7FAFC", "#FFFFFF"],
    layout: "Service website", style: "Friendly · Reliable", purpose: "기관", keywords: ["Corporate", "Public Service", "기관"],
    description: "사용자가 주요 공공 서비스를 빠르게 찾도록 설계된 기관 웹사이트 레퍼런스입니다.",
  },
  {
    id: 5, category: "Corporate", subcategory: "협회", title: "월드비전", website: "https://www.worldvision.or.kr/", subtitle: "국제구호개발 NGO 캠페인", date: "2026. 08. 12",
    image: "/img/ui-inspiration/corporate/corporate-association.jpg", colors: ["#1F3A5F", "#2E5B88", "#4F86C6", "#DCE6F1", "#F5F7FA", "#FFFFFF"],
    layout: "Association portal", style: "Formal · Community", purpose: "협회", keywords: ["Corporate", "Association", "Membership", "협회"],
    description: "협회의 활동, 소식과 회원 서비스를 균형 있게 전달하는 웹사이트 레퍼런스입니다.",
  },
  {
    id: 6, category: "Corporate", subcategory: "제조", title: "HD현대M&S", website: "https://hd-hmns.co.kr/kr/main", subtitle: "조선·해양 기업 웹사이트", date: "2026. 08. 12",
    image: "/img/ui-inspiration/corporate/corporate-manufacturing-01.png", colors: ["#101820", "#294C60", "#32746D", "#E8E9EB", "#F7F7F7", "#FFFFFF"],
    layout: "Industry website", style: "Technical · Strong", purpose: "제조", keywords: ["Corporate", "Manufacturing", "Industry", "제조"],
    description: "제조 기술과 제품 경쟁력을 시각적으로 전달하는 산업 웹사이트 레퍼런스입니다.",
  },
  {
    id: 7, category: "Corporate", subcategory: "제조", title: "ANCORS", website: "https://www.ancors.co.kr/", subtitle: "글로벌 뷰티 ODM 웹사이트", date: "2026. 08. 12",
    image: "/img/ui-inspiration/corporate/corporate-manufacturing-02.png", colors: ["#0B132B", "#1C2541", "#3A506B", "#5BC0BE", "#E6EEF2", "#FFFFFF"],
    layout: "Technology website", style: "Industrial · Modern", purpose: "제조", keywords: ["Corporate", "Technology", "Factory", "제조"],
    description: "산업 기술과 생산 역량을 현대적인 구성으로 보여주는 제조 웹사이트 레퍼런스입니다.",
  },
  {
    id: 8, category: "Corporate", subcategory: "물류", title: "SOIJEONG", website: "https://3d.soijeong.com/", subtitle: "3D 콘텐츠 솔루션 웹사이트", date: "2026. 08. 12",
    image: "/img/ui-inspiration/corporate/corporate-logistics.png", colors: ["#072A40", "#0B6E99", "#00A8CC", "#DAF1F8", "#F4F8FA", "#FFFFFF"],
    layout: "Logistics website", style: "Dynamic · Reliable", purpose: "물류", keywords: ["Corporate", "Logistics", "Network", "물류"],
    description: "운송 네트워크와 물류 서비스의 규모와 신뢰성을 강조한 웹사이트 레퍼런스입니다.",
  },
  {
    id: 11, category: "Technology", subcategory: "소프트", title: "NEWBIRD", website: "https://newbird.co.kr/", subtitle: "Digital solution studio", date: "2026. 08. 12",
    image: "/img/technology-software-newbird.jpg", colors: ["#FFE600", "#111111", "#2F2F2F", "#FFFFFF", "#6D54FF", "#EAEAEA"], layout: "Studio website", style: "Bold · Experimental", purpose: "소프트", keywords: ["Software", "Digital", "Studio", "소프트"], description: "강렬한 컬러와 실험적인 레이아웃으로 디지털 솔루션 역량을 표현한 웹사이트입니다.",
  },
  {
    id: 13, category: "Technology", subcategory: "소프트", title: "STUDIO X-LAB", website: "https://www.studioxlab.co.kr/", subtitle: "AI·VFX technology studio", date: "2026. 08. 12",
    image: "/img/technology-software-studio-x-lab.jpg", colors: ["#000000", "#D71920", "#FFFFFF", "#313131", "#8B0000", "#777777"], layout: "Studio showcase", style: "Cinematic · Dark", purpose: "소프트", keywords: ["AI", "VFX", "Studio", "소프트"], description: "AI와 VFX 기술 기반의 콘텐츠 제작 역량을 시네마틱하게 보여주는 스튜디오 웹사이트입니다.",
  },
  {
    id: 14, category: "Technology", subcategory: "개발", title: "TIGERWORKS", website: "https://www.tigerworks.co.kr", subtitle: "Creative development studio", date: "2026. 08. 12",
    image: "/img/technology-development-tigerworks.jpg", colors: ["#F3EBD8", "#191919", "#426B35", "#C7DC68", "#FFFFFF", "#777466"], layout: "Agency website", style: "Organic · Editorial", purpose: "개발", keywords: ["Development", "Agency", "Creative", "개발"], description: "기획부터 개발까지의 제작 역량을 독창적인 비주얼 언어로 보여주는 개발사 웹사이트입니다.",
  },
  {
    id: 15, category: "Technology", subcategory: "개발", title: "ONFLOW", website: "https://www.onflou.com/home", subtitle: "Digital project portfolio", date: "2026. 08. 12",
    image: "/img/technology-development-onflow.jpg", colors: ["#FFFFFF", "#111111", "#D7D7D7", "#6D6D6D", "#F3F3F3", "#AFAFAF"], layout: "Project archive", style: "Minimal · Monochrome", purpose: "개발", keywords: ["Development", "Portfolio", "Digital", "개발"], description: "프로젝트 유형을 명료한 흑백 레이아웃으로 정리한 디지털 개발 포트폴리오입니다.",
  },
  {
    id: 16, category: "Technology", subcategory: "개발", title: "ABT", website: "https://www.helloabt.com/", subtitle: "Art and technology studio", date: "2026. 08. 12",
    image: "/img/technology-development-abt-studio.jpg", colors: ["#FFFFFF", "#111111", "#E32F63", "#F4C900", "#78D64B", "#B7B7B7"], layout: "Studio introduction", style: "Artistic · Grid", purpose: "개발", keywords: ["Art", "Technology", "Studio", "개발"], description: "디자인과 기술, 음악과 예술 활동을 그리드 구조로 소개하는 크리에이티브 스튜디오 웹사이트입니다.",
  },
  {
    id: 17, category: "Technology", subcategory: "과학", title: "STCube", website: "https://www.stcube.com/", subtitle: "Precision immuno-oncology", date: "2026. 08. 12",
    image: "/img/technology-science-stcube.jpg", colors: ["#A8D9F4", "#2A415A", "#FFFFFF", "#151515", "#8C79C6", "#E8EDF2"], layout: "Biotech website", style: "Scientific · Clean", purpose: "과학", keywords: ["Science", "Biotech", "Oncology", "과학"], description: "정밀 면역항암 연구와 신약 개발 가치를 명료하게 소개하는 바이오테크 웹사이트입니다.",
  },
  {
    id: 18, category: "Technology", subcategory: "과학", title: "PABLO AIR", website: "https://www.pabloair.com/", subtitle: "Drone technology platform", date: "2026. 08. 12",
    image: "/img/technology-science-pablo-air.png", colors: ["#07142E", "#0E2A54", "#1358D4", "#FFFFFF", "#D69368", "#02050B"], layout: "Technology website", style: "Futuristic · Dark", purpose: "과학", keywords: ["Science", "Drone", "Mobility", "과학"], description: "드론 솔루션과 산업 활용 분야를 미래지향적인 비주얼로 전달하는 기술 웹사이트입니다.",
  },
  {
    id: 19, category: "Technology", subcategory: "통신", title: "KT 폰 교체 센터", website: "https://www.ktphonechange.com/", subtitle: "Mobile care service", date: "2026. 08. 12",
    image: "/img/technology-telecom-kt-phone-care.jpg", colors: ["#FFFFFF", "#43C9C4", "#232323", "#EDEDED", "#BEEDEC", "#111111"], layout: "Service landing", style: "Friendly · Clear", purpose: "통신", keywords: ["Telecom", "Mobile", "Service", "통신"], description: "휴대폰 교체와 수리 서비스를 친근한 일러스트로 안내하는 통신 서비스 웹사이트입니다.",
  },
  {
    id: 20, category: "Technology", subcategory: "가전", title: "CUCHEN", website: "https://www.cuchen.com/", subtitle: "Smart kitchen appliance", date: "2026. 08. 12",
    image: "/img/technology-appliance-cuchen.jpg", colors: ["#F4E9E8", "#2D2D2D", "#F05A00", "#FFFFFF", "#BCA99A", "#111111"], layout: "Brand website", style: "Premium · Warm", purpose: "가전", keywords: ["Appliance", "Kitchen", "Brand", "가전"], description: "스마트 주방가전의 브랜드 가치와 B2B 사업을 따뜻한 톤으로 소개하는 웹사이트입니다.",
  },
  {
    id: 21, category: "Technology", subcategory: "가전", title: "삼성전자서비스", website: "https://www.samsung.com/sec/", subtitle: "Samsung Care+ service", date: "2026. 08. 12",
    image: "/img/technology-appliance-samsung-service.jpg", colors: ["#FFFFFF", "#BFE6E2", "#111111", "#7C3AED", "#18B6F2", "#F4F4F4"], layout: "Service portal", style: "Practical · Accessible", purpose: "가전", keywords: ["Samsung", "Service", "Appliance", "가전"], description: "제품 정보와 수리·상담 서비스를 빠르게 찾을 수 있도록 구성한 고객지원 웹사이트입니다.",
  },
  {
    id: 22, category: "Technology", subcategory: "가전", title: "RUHENS", website: "https://www.ruhens.co.kr/", subtitle: "Water appliance brand", date: "2026. 08. 12",
    image: "/img/technology-appliance-ruhens.jpg", colors: ["#FFFFFF", "#1689F8", "#D9C3A2", "#0D3C73", "#EAF3FB", "#161616"], layout: "Product website", style: "Fresh · Product-led", purpose: "가전", keywords: ["Appliance", "Water", "Product", "가전"], description: "정수기와 생활가전 제품을 청량한 이미지와 서비스 정보로 구성한 브랜드 웹사이트입니다.",
  },
  {
    id: 23, category: "Technology", subcategory: "가전", title: "UNITECH", website: "https://www.unitechcorp.com/", subtitle: "Mobility material solutions", date: "2026. 08. 12",
    image: "/img/technology-appliance-unitech.png", colors: ["#153274", "#FFFFFF", "#87A9D9", "#F2C66D", "#DDE6F3", "#0B1D49"], layout: "Technology corporate", style: "Technical · Trust", purpose: "가전", keywords: ["Technology", "Mobility", "Materials", "가전"], description: "모빌리티와 특수화학 솔루션 기술력을 신뢰감 있게 전달하는 기업 웹사이트입니다.",
  },
  ...additionalUIProjects,
];

const projects = projectEntries.map((project) => (
  project.image.startsWith("/img/technology-")
    ? { ...project, image: project.image.replace("/img/", "/img/ui-inspiration/technology/") }
    : project
));

const categoryTaxonomy = {
  Corporate: ["기업", "기관", "협회", "제조", "물류"],
  Technology: ["소프트", "개발", "과학", "통신", "가전"],
  Commerce: ["쇼핑", "패션", "뷰티", "식품", "유통", "생활"],
  "Finance & Service": ["금융", "건강", "교육", "학교", "복지"],
  "Culture & Lifestyle": ["예술", "영화", "엔터", "게임", "여행", "자동차"],
  "Creative & Promotion": ["디자인", "프로모션", "행사", "정보"],
};

const categories = ["All", ...Object.keys(categoryTaxonomy)];
const getSubcategories = (selectedCategory) => ["All", ...(categoryTaxonomy[selectedCategory] || [])];

const collectionStats = {
  references: projects.length,
  categories: categories.length - 1,
  colors: projects.reduce((total, project) => total + project.colors.length, 0),
};

const formatStat = (value) => String(value).padStart(2, "0");

const rgbToHex = ([red, green, blue]) => `#${[red, green, blue]
  .map((value) => value.toString(16).padStart(2, "0"))
  .join("")}`.toUpperCase();

const colorDistance = (first, second) => Math.sqrt(first.reduce(
  (total, value, index) => total + ((value - second[index]) ** 2),
  0,
));

const extractImageColors = (image) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context || !image.naturalWidth || !image.naturalHeight) return [];

  const scale = Math.min(1, 120 / Math.max(image.naturalWidth, image.naturalHeight));
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  const buckets = new Map();
  for (let index = 0; index < pixels.length; index += 16) {
    if (pixels[index + 3] < 180) continue;
    const color = [pixels[index], pixels[index + 1], pixels[index + 2]];
    const key = color.map((value) => Math.min(240, Math.round(value / 24) * 24)).join(",");
    const entry = buckets.get(key) || { count: 0, sums: [0, 0, 0] };
    entry.count += 1;
    entry.sums = entry.sums.map((value, channel) => value + color[channel]);
    buckets.set(key, entry);
  }

  const candidates = [...buckets.values()]
    .sort((first, second) => second.count - first.count)
    .map(({ count, sums }) => sums.map((value) => Math.round(value / count)));
  const selected = [];
  [78, 58, 40, 25].some((minimumDistance) => {
    candidates.forEach((color) => {
      if (selected.length < 6 && selected.every((picked) => colorDistance(color, picked) >= minimumDistance)) selected.push(color);
    });
    return selected.length >= 6;
  });
  return selected.slice(0, 6).map(rgbToHex);
};

const contentSectionCounts = { 1: 7, 2: 4, 3: 5, 4: 4, 5: 7, 6: 4, 7: 5, 8: 7 };

const customPreviewLayouts = {
  1: [
    { id: "header", label: "Header", type: "header", top: 0, height: 0.9 },
    { id: "banner", label: "Banner", type: "banner", top: 2.3, height: 16.2 },
    { id: "content-1", label: "Content 1", type: "content", top: 18.5, height: 12.5 },
    { id: "content-2", label: "Content 2", type: "content", top: 31, height: 10 },
    { id: "content-3", label: "Content 3", type: "content", top: 41, height: 11.5 },
    { id: "content-4", label: "Content 4", type: "content", top: 52.5, height: 12.5 },
    { id: "content-5", label: "Content 5", type: "content", top: 65, height: 11 },
    { id: "content-6", label: "Content 6", type: "content", top: 76, height: 13.5 },
    { id: "content-7", label: "Content 7", type: "content", top: 89.5, height: 7.5 },
    { id: "footer", label: "Footer", type: "footer", top: 97, height: 3 },
  ],
  2: [
    { id: "header", label: "Header", type: "header", top: 0, height: 3.2 },
    { id: "banner", label: "Banner", type: "banner", top: 3.2, height: 22.8 },
    { id: "content-1", label: "Content 1", type: "content", top: 26, height: 26 },
    { id: "content-2", label: "Content 2", type: "content", top: 52, height: 25 },
    { id: "content-3", label: "Content 3", type: "content", top: 77, height: 20.5 },
    { id: "footer", label: "Footer", type: "footer", top: 97.5, height: 2.5 },
  ],
  3: [
    { id: "header", label: "Header", type: "header", top: 0, height: 1.4 },
    { id: "banner", label: "Banner", type: "banner", top: 1.4, height: 13.6 },
    { id: "content-1", label: "Content 1", type: "content", top: 15, height: 15.5 },
    { id: "content-2", label: "Content 2", type: "content", top: 30.5, height: 15.5 },
    { id: "content-3", label: "Content 3", type: "content", top: 46, height: 15.5 },
    { id: "content-4", label: "Content 4", type: "content", top: 61.5, height: 15 },
    { id: "content-5", label: "Content 5", type: "content", top: 76.5, height: 10.5 },
    { id: "content-6", label: "Content 6", type: "content", top: 87, height: 11 },
    { id: "footer", label: "Footer", type: "footer", top: 98, height: 2 },
  ],
  4: [
    { id: "header", label: "Header", type: "header", top: 0, height: 4.2 },
    { id: "banner", label: "Banner", type: "banner", top: 4.2, height: 22.8 },
    { id: "content-1", label: "Content 1", type: "content", top: 27, height: 13.5 },
    { id: "content-2", label: "Content 2", type: "content", top: 40.5, height: 34.5 },
    { id: "content-3", label: "Content 3", type: "content", top: 75, height: 21 },
    { id: "footer", label: "Footer", type: "footer", top: 96, height: 4 },
  ],
  5: [
    { id: "header", label: "Header", type: "header", top: 0, height: 1.1 },
    { id: "banner", label: "Banner", type: "banner", top: 1.1, height: 14.4 },
    { id: "content-1", label: "Content 1", type: "content", top: 15.5, height: 9 },
    { id: "content-2", label: "Content 2", type: "content", top: 24.5, height: 21.5 },
    { id: "content-3", label: "Content 3", type: "content", top: 46, height: 12 },
    { id: "content-4", label: "Content 4", type: "content", top: 58, height: 7.5 },
    { id: "content-5", label: "Content 5", type: "content", top: 65.5, height: 12 },
    { id: "content-6", label: "Content 6", type: "content", top: 77.5, height: 11.5 },
    { id: "content-7", label: "Content 7", type: "content", top: 89, height: 8 },
    { id: "footer", label: "Footer", type: "footer", top: 97, height: 3 },
  ],
  6: [
    { id: "header", label: "Header", type: "header", top: 0, height: 1.7 },
    { id: "banner", label: "Banner", type: "banner", top: 1.7, height: 15.3 },
    { id: "content-1", label: "Content 1", type: "content", top: 17, height: 25 },
    { id: "content-2", label: "Content 2", type: "content", top: 42, height: 34.5 },
    { id: "content-3", label: "Content 3", type: "content", top: 76.5, height: 20.5 },
    { id: "footer", label: "Footer", type: "footer", top: 97, height: 3 },
  ],
  7: [
    { id: "header", label: "Header", type: "header", top: 0, height: 1.2 },
    { id: "banner", label: "Banner", type: "banner", top: 1.2, height: 26 },
    { id: "content-1", label: "Content 1", type: "content", top: 27.2, height: 14.8 },
    { id: "content-2", label: "Content 2", type: "content", top: 42, height: 16 },
    { id: "content-3", label: "Content 3", type: "content", top: 58, height: 11 },
    { id: "content-4", label: "Content 4", type: "content", top: 69, height: 10.5 },
    { id: "content-5", label: "Content 5", type: "content", top: 79.5, height: 17.5 },
    { id: "footer", label: "Footer", type: "footer", top: 97, height: 3 },
  ],
  8: [
    { id: "header", label: "Header", type: "header", top: 0, height: 0.8 },
    { id: "banner", label: "Banner", type: "banner", top: 0.8, height: 13.2 },
    { id: "content-1", label: "Content 1", type: "content", top: 14, height: 22 },
    { id: "content-2", label: "Content 2", type: "content", top: 36, height: 13 },
    { id: "content-3", label: "Content 3", type: "content", top: 49, height: 9 },
    { id: "content-4", label: "Content 4", type: "content", top: 58, height: 14 },
    { id: "content-5", label: "Content 5", type: "content", top: 72, height: 10 },
    { id: "content-6", label: "Content 6", type: "content", top: 82, height: 6 },
    { id: "content-7", label: "Content 7", type: "content", top: 88, height: 6 },
    { id: "footer", label: "Footer", type: "footer", top: 94, height: 6 },
  ],
};

const getPreviewRegions = (project) => {
  if (customPreviewLayouts[project.id]) return customPreviewLayouts[project.id];

  const contentCount = contentSectionCounts[project.id] || 3;
  const headerHeight = 6;
  const bannerHeight = 19;
  const footerHeight = 8;
  const contentHeight = (100 - headerHeight - bannerHeight - footerHeight) / contentCount;
  const regions = [
    { id: "header", label: "Header", type: "header", top: 0, height: headerHeight },
    { id: "banner", label: "Banner", type: "banner", top: headerHeight, height: bannerHeight },
  ];

  for (let index = 0; index < contentCount; index += 1) {
    regions.push({
      id: `content-${index + 1}`,
      label: `Content ${index + 1}`,
      type: "content",
      top: headerHeight + bannerHeight + (contentHeight * index),
      height: contentHeight,
    });
  }

  regions.push({ id: "footer", label: "Footer", type: "footer", top: 100 - footerHeight, height: footerHeight });
  return regions;
};

const getOverviewRegions = (project) => {
  const detailedRegions = getPreviewRegions(project);
  const header = detailedRegions.find((region) => region.type === "header");
  const banner = detailedRegions.find((region) => region.type === "banner");
  const footer = detailedRegions.find((region) => region.type === "footer");
  const contentTop = banner.top + banner.height;

  return [
    header,
    banner,
    { id: "content", label: "Content", type: "content", top: contentTop, height: footer.top - contentTop },
    footer,
  ];
};

// 앞으로 전달받을 영역별 캡처 파일은 이 객체에만 연결한다.
// contents 배열의 이미지 수에 따라 Content 1, 2, 3... 카드가 자동 생성된다.
const sectionAssetsByProject = {};

const getSectionCards = (project) => {
  const assets = sectionAssetsByProject[project.id] || {};
  const contents = assets.contents?.length ? assets.contents : [null];

  return [
    { id: "header", label: "Header", type: "header", image: assets.header || null },
    { id: "banner", label: "Banner", type: "banner", image: assets.banner || null },
    ...contents.map((image, index) => ({ id: `content-${index + 1}`, label: `Content ${index + 1}`, type: "content", image })),
    { id: "footer", label: "Footer", type: "footer", image: assets.footer || null },
  ];
};

function RegionThumbnail({ region }) {
  return (
    <div className={`region-thumbnail${region.image ? " has-image" : " is-empty"}`}>
      {region.image ? <img src={region.image} alt={`${region.label} 캡처`} /> : <span><i>+</i> 이미지 준비 중</span>}
    </div>
  );
}

export default function UIInspiration() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [category, setCategory] = useState("All");
  const [subcategory, setSubcategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState("grid");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ui-lab-favorites")) || [];
    } catch {
      return [];
    }
  });
  const [toast, setToast] = useState("");
  const [extractedPalettes, setExtractedPalettes] = useState({});

  const capturePalette = (project, image) => {
    if (extractedPalettes[project.id]) return;
    try {
      const colors = extractImageColors(image);
      if (colors.length) setExtractedPalettes((current) => (
        current[project.id] ? current : { ...current, [project.id]: colors }
      ));
    } catch {
      // If a browser blocks canvas sampling, retain the curated fallback colors.
    }
  };

  const getProjectColors = (project) => extractedPalettes[project.id] || project.colors;

  useEffect(() => {
    localStorage.setItem("ui-lab-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    document.body.classList.toggle("drawer-open", Boolean(selectedProject));
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      setSelectedProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("drawer-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject]);

  const closeDrawer = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 1800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const filteredProjects = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const result = projects.filter((project) => {
      const haystack = [project.title, project.subtitle, project.category, project.subcategory, project.style, ...project.keywords]
        .join(" ")
        .toLowerCase();
      return (category === "All" || project.category === category)
        && (subcategory === "All" || project.subcategory === subcategory)
        && (!keyword || haystack.includes(keyword))
        && (!favoritesOnly || favorites.includes(project.id));
    });

    return result.sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "category") return a.category.localeCompare(b.category);
      return b.date.localeCompare(a.date) || a.id - b.id;
    });
  }, [category, favorites, favoritesOnly, search, sort, subcategory]);

  const countableProjects = favoritesOnly
    ? projects.filter((project) => favorites.includes(project.id))
    : projects;

  const toggleFavorite = (projectId) => {
    setFavorites((current) => (
      current.includes(projectId)
        ? current.filter((id) => id !== projectId)
        : [...current, projectId]
    ));
  };

  const copyPalette = async (colors) => {
    const value = colors.join(", ");
    try {
      await navigator.clipboard.writeText(value);
      setToast("컬러 팔레트를 복사했습니다");
    } catch {
      setToast("복사하지 못했습니다");
    }
  };

  const resetFilters = () => {
    setCategory("All");
    setSubcategory("All");
    setSearch("");
    setFavoritesOnly(false);
  };

  const renderProjectCard = (project, index) => {
    const isFavorite = favorites.includes(project.id);
    const projectColors = getProjectColors(project);
    return (
      <article className="project-card" key={project.id}>
        <button className="project-visual" type="button" onClick={() => setSelectedProject(project)} aria-label={`${project.title} 상세 보기`}>
          <img src={project.image} alt="" onLoad={(event) => capturePalette(project, event.currentTarget)} />
          <span className="visual-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="open-label">View details <ArrowUpRight size={15} /></span>
        </button>
        <div className="project-info">
          <div className="project-copy">
            <span className="project-category">{project.category}{project.subcategory ? ` · ${project.subcategory}` : ""}</span>
            <button type="button" onClick={() => setSelectedProject(project)}><h3>{project.title}</h3><p>{project.subtitle}</p></button>
          </div>
          <div className="card-actions">
            <div className="mini-palette" aria-label="대표 색상">{projectColors.slice(0, 5).map((color, colorIndex) => <i key={`${color}-${colorIndex}`} style={{ backgroundColor: color }} />)}</div>
            <button type="button" className={`heart-button ${isFavorite ? "active" : ""}`} onClick={() => toggleFavorite(project.id)} aria-label={isFavorite ? "저장 해제" : "저장"}>
              <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <>
    <div className="ui-inspiration-page app-shell">
      <main id="top">
        <section className="intro">
          <div className="intro-art" aria-hidden="true">
            <span className="code-mark" data-mark="&lt;/&gt;">&lt;/&gt;</span>
          </div>
          <div className="eyebrow"><Sparkles size={14} /> CODE LAB · UI Inspiration</div>
          <h1>멋진 디자인,<br /><em>새로운 영감</em>을 찾다.</h1>
          <p>CODE LAB이 엄선한 웹 UI 레퍼런스를 살펴보세요</p>
          <div className="intro-stats" aria-label="컬렉션 통계">
            <div><strong>{formatStat(collectionStats.references)}</strong><span>References</span></div>
            <div><strong>{formatStat(collectionStats.categories)}</strong><span>Categories</span></div>
            <div><strong>{formatStat(collectionStats.colors)}</strong><span>Colors</span></div>
          </div>
        </section>

        <section className="library" aria-labelledby="library-title">
          <div className="section-heading">
            <div>
              <h2 id="library-title">Inspiration library</h2>
            </div>
            <p>{filteredProjects.length}개의 레퍼런스</p>
          </div>

          <div className="control-panel">
            <label className="search-box">
              <Search size={18} />
              <input
                type="search"
                placeholder="스타일, 카테고리, 키워드 검색"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>

            <div className="control-actions">
              <button
                type="button"
                className={`favorite-filter ${favoritesOnly ? "active" : ""}`}
                onClick={() => setFavoritesOnly((value) => !value)}
              >
                <Heart size={17} fill={favoritesOnly ? "currentColor" : "none"} /> 저장됨
                <span>{favorites.length}</span>
              </button>

              <label className="sort-control">
                <SlidersHorizontal size={16} />
                <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="정렬 방식">
                  <option value="newest">최신순</option>
                  <option value="title">이름순</option>
                  <option value="category">카테고리순</option>
                </select>
              </label>

              <div className="view-toggle" aria-label="보기 방식">
                <button type="button" className={view === "grid" ? "active" : ""} onClick={() => setView("grid")} aria-label="그리드 보기"><Grid2X2 size={17} /></button>
                <button type="button" className={view === "list" ? "active" : ""} onClick={() => setView("list")} aria-label="리스트 보기"><LayoutList size={18} /></button>
              </div>
            </div>
          </div>

          <div className="category-row" aria-label="카테고리 필터">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={category === item ? "active" : ""}
                onClick={() => {
                  setCategory(item);
                  setSubcategory("All");
                }}
              >
                {item}<span>{item === "All" ? countableProjects.length : countableProjects.filter((project) => project.category === item).length}</span>
              </button>
            ))}
          </div>

          {category !== "All" && getSubcategories(category).length > 1 && (
            <div className="subcategory-tabs" aria-label={`${category} 중분류 필터`}>
              <span className="subcategory-label">Type</span>
              {getSubcategories(category).map((item) => (
                <button
                  type="button"
                  key={item}
                  className={subcategory === item ? "active" : ""}
                  onClick={() => setSubcategory(item)}
                >
                  {item === "All" ? "전체" : item}
                  <span>{item === "All" ? countableProjects.filter((project) => project.category === category).length : countableProjects.filter((project) => project.category === category && project.subcategory === item).length}</span>
                </button>
              ))}
            </div>
          )}

          {filteredProjects.length > 0 ? (
            category === "All" ? (
              <div className="all-category-groups collection-swap">
                {categories.slice(1).map((groupName) => {
                  const groupProjects = filteredProjects.filter((project) => project.category === groupName);
                  if (!groupProjects.length) return null;
                  return (
                    <section className="category-group" key={groupName}>
                      <div className="category-group__heading"><h3>{groupName}</h3><span>{groupProjects.length} references</span></div>
                      <div className={`project-collection ${view}`}>{groupProjects.map(renderProjectCard)}</div>
                    </section>
                  );
                })}
              </div>
            ) : (
              <div key={`${category}-${subcategory}-${view}-${sort}-${favoritesOnly}`} className={`project-collection ${view} collection-swap`}>
                {filteredProjects.map(renderProjectCard)}
              </div>
            )
          ) : (
            <div className="empty-state">
              <Search size={28} />
              <h3>조건에 맞는 화면이 없습니다</h3>
              <p>검색어나 필터를 바꿔 다시 찾아보세요.</p>
              <button type="button" onClick={resetFilters}>모든 레퍼런스 보기</button>
            </div>
          )}
        </section>
      </main>

      {createPortal(<div className="ui-inspiration-page ui-detail-layer">
      <div className={`drawer-backdrop ${selectedProject ? "open" : ""}`} onClick={closeDrawer} />
      <aside className={`detail-drawer ${selectedProject ? "open" : ""}`} aria-hidden={!selectedProject} aria-modal="true">
        {selectedProject && (
          <>
            <div className="drawer-topbar">
              <span>{selectedProject.category} / {selectedProject.subcategory || selectedProject.purpose}</span>
              <button type="button" onClick={closeDrawer} aria-label="상세 닫기"><X size={20} /></button>
            </div>
            <div className="drawer-body">
              <div className="drawer-title">
                <div>
                  <span>UI Reference</span>
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.subtitle}</p>
                </div>
                <button
                  type="button"
                  className={`heart-button ${favorites.includes(selectedProject.id) ? "active" : ""}`}
                  onClick={() => toggleFavorite(selectedProject.id)}
                  aria-label="저장 전환"
                >
                  <Heart size={20} fill={favorites.includes(selectedProject.id) ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="drawer-columns">
                <div className="drawer-showcase">
                  <div className="drawer-preview"><img src={selectedProject.image} alt={`${selectedProject.title} 화면 미리보기`} onLoad={(event) => capturePalette(selectedProject, event.currentTarget)} /></div>
                </div>
                <div className="drawer-details">
                  <section className="detail-block detail-block--overview">
                    <h3>Overview</h3>
                    <p className="description">{selectedProject.description}</p>
                  </section>
                  <section className="detail-block">
                    <div className="block-heading">
                      <h3>Color system</h3>
                      <button type="button" onClick={() => copyPalette(getProjectColors(selectedProject))}><Copy size={14} /> 전체 복사</button>
                    </div>
                    <div className="color-grid">
                      {getProjectColors(selectedProject).map((color, colorIndex) => (
                        <button type="button" key={`${color}-${colorIndex}`} onClick={() => copyPalette([color])} title={`${color} 복사`}>
                          <i style={{ backgroundColor: color }} /><span>{color}</span>
                        </button>
                      ))}
                    </div>
                  </section>
                  <section className="detail-block">
                    <h3>Design profile</h3>
                    <dl className="profile-list">
                      <div><dt>Layout</dt><dd>{selectedProject.layout}</dd></div>
                      <div><dt>Style</dt><dd>{selectedProject.style}</dd></div>
                      <div><dt>Use case</dt><dd>{selectedProject.purpose}</dd></div>
                      <div><dt>Added</dt><dd>{selectedProject.date}</dd></div>
                    </dl>
                  </section>
                  <section className="detail-block">
                    <h3>Keywords</h3>
                    <div className="keyword-list">{selectedProject.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div>
                  </section>
                  <button
                    type="button"
                    className={`visit-site-button ${selectedProject.website ? "is-active" : "is-disabled"}`}
                    disabled={!selectedProject.website}
                    aria-label={selectedProject.website ? `${selectedProject.title} 사이트 방문하기` : "사이트 주소 준비 중"}
                    onClick={() => {
                      if (!selectedProject.website) return;
                      window.open(selectedProject.website, "_blank", "noopener,noreferrer");
                    }}
                  >
                    <span>
                      <small>Live website</small>
                      {selectedProject.website ? "사이트 방문하기" : "사이트 준비 중"}
                    </span>
                    <span className="visit-site-button__icon">↗</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </aside>

      </div>, document.body)}

      <div className={`toast ${toast ? "show" : ""}`} role="status"><Check size={16} /> {toast}</div>
    </div>
    {/* About/Challenges와 같은 공통 사이트 푸터. ui-inspiration-page 밖에 둬서
        내부의 범용 `footer` 태그 선택자와 스타일이 충돌하지 않게 한다. */}
    <Footer />
    </>
  );
}
