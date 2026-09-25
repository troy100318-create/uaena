const places = [
  { city: '서울시', district: '종로구', name: '라이트하우스 브런치 & 스튜디오', bigCategory: '맛집', smallCategory: '브런치', lat: 37.5665, lng: 126.978, reviews: 1840, summary: '감성적인 인테리어와 큰 만족도를 자랑하는 브런치 맛집입니다.', vibe: '데이트 / 브런치', platforms: { 네이버: 4.8, 카카오: 4.7, 구글: 4.9, 인스타: 4.6 } },
  { city: '서울시', district: '마포구', name: '모먼트 커피 로스터리 2F', bigCategory: '카페', smallCategory: '브루잇 카페', lat: 37.5701, lng: 126.9854, reviews: 1224, summary: '원두 퀄리티와 작업 공간이 잘 어우러지는 인기 카페입니다.', vibe: '카페 / 작업', platforms: { 네이버: 4.7, 카카오: 4.8, 구글: 4.6, 인스타: 4.5 } },
  { city: '서울시', district: '강남구', name: '에이드스테이션 본점', bigCategory: '맛집', smallCategory: '양식', lat: 37.5619, lng: 126.972, reviews: 910, summary: '분위기와 맛 모두 만족도가 높아 저녁 식사에 인기입니다.', vibe: '분위기 / 푸드', platforms: { 네이버: 4.5, 카카오: 4.7, 구글: 4.6, 인스타: 4.3 } },
  { city: '서울시', district: '서초구', name: '오아시스 루프 테라스', bigCategory: '액티비티', smallCategory: '야경/바', lat: 37.5524, lng: 126.989, reviews: 780, summary: '야경과 칵테일 조합이 좋으며 저녁 시간대 체류가 긴 편입니다.', vibe: '야경 / 술집', platforms: { 네이버: 4.4, 카카오: 4.6, 구글: 4.5, 인스타: 4.4 } },
  { city: '서울시', district: '강북구', name: '맑은 실버 스테이', bigCategory: '액티비티', smallCategory: '피트니스', lat: 37.5765, lng: 126.967, reviews: 650, summary: '운동 시설과 분위기가 조화로워 재방문율이 높은 웰빙 공간입니다.', vibe: '운동 / 웰빙', platforms: { 네이버: 4.4, 카카오: 4.5, 구글: 4.3, 인스타: 3.9 } },
  { city: '서울시', district: '성동구', name: '수플레 플래닛', bigCategory: '카페', smallCategory: '디저트', lat: 37.5589, lng: 126.981, reviews: 2050, summary: '디저트와 음료 퀄리티가 우수하고 사진 감성이 강한 공간입니다.', vibe: '디저트 / 인스타', platforms: { 네이버: 4.9, 카카오: 4.8, 구글: 5.0, 인스타: 4.9 } },
  { city: '서울시', district: '용산구', name: '비스트로 노을', bigCategory: '맛집', smallCategory: '양식', lat: 37.5791, lng: 126.9892, reviews: 1180, summary: '플레이팅과 분위기가 우수해 데이트 식사에 추천되는 양식집입니다.', vibe: '모임 / 미식', platforms: { 네이버: 4.6, 카카오: 4.7, 구글: 4.8, 인스타: 4.5 } },
  { city: '서울시', district: '종로구', name: '청춘 한옥 카페', bigCategory: '카페', smallCategory: '한옥/감성', lat: 37.5488, lng: 126.9654, reviews: 930, summary: '한옥 분위기와 수제 디저트가 조화를 이루는 감성 카페입니다.', vibe: '한옥 / 감성', platforms: { 네이버: 4.5, 카카오: 4.6, 구글: 4.7, 인스타: 4.8 } },
  { city: '서울시', district: '중구', name: '골든테이블 한정식', bigCategory: '맛집', smallCategory: '한식', lat: 37.5728, lng: 126.9726, reviews: 1540, summary: '정갈한 반찬과 가족 외식 분위기가 높은 한정식집입니다.', vibe: '가족 / 한식', platforms: { 네이버: 4.8, 카카오: 4.7, 구글: 4.6, 인스타: 4.2 } },
  { city: '서울시', district: '마포구', name: '뮤직팩토리 라이브바', bigCategory: '액티비티', smallCategory: '라이브/파티', lat: 37.5602, lng: 126.9837, reviews: 870, summary: '주말 라이브 공연과 분위기가 좋아 친구 모임에 적합합니다.', vibe: '라이브 / 파티', platforms: { 네이버: 4.4, 카카오: 4.5, 구글: 4.7, 인스타: 4.8 } },
  { city: '서울시', district: '서대문구', name: '포레스트 브루잎', bigCategory: '카페', smallCategory: '브런치', lat: 37.5824, lng: 126.9771, reviews: 690, summary: '아침식사와 감성 인테리어가 조화로운 브런치 카페입니다.', vibe: '브런치 / 힐링', platforms: { 네이버: 4.5, 카카오: 4.4, 구글: 4.7, 인스타: 4.3 } },
  { city: '서울시', district: '동작구', name: '달빛 소담 스튜디오', bigCategory: '카페', smallCategory: '감성/휴식', lat: 37.5513, lng: 126.9918, reviews: 760, summary: '조용하고 아늑한 분위기와 음료 퀄리티가 매력적인 공간입니다.', vibe: '감성 / 휴식', platforms: { 네이버: 4.4, 카카오: 4.6, 구글: 4.5, 인스타: 4.4 } },
  { city: '서울시', district: '광진구', name: '탈출의 정석', bigCategory: '액티비티', smallCategory: '방탈출', lat: 37.5679, lng: 126.9702, reviews: 540, summary: '난이도와 연출이 좋아 커플, 친구 모임에서 입소문이 높은 방탈출입니다.', vibe: '팀플 / 스릴', platforms: { 네이버: 4.1, 카카오: 3.9, 구글: 4.2, 인스타: 4.0 } },
  { city: '서울시', district: '강서구', name: '보드게임 아지트', bigCategory: '액티비티', smallCategory: '보드카페', lat: 37.5733, lng: 126.9829, reviews: 610, summary: '보드게임 종류가 다양하고 친절한 매니저 덕분에 단체 모임이 많습니다.', vibe: '친목 / 보드게임', platforms: { 네이버: 4.0, 카카오: 3.9, 구글: 4.1, 인스타: 4.2 } },
  { city: '서울시', district: '송파구', name: '심야 클라이밍 스테이션', bigCategory: '액티비티', smallCategory: '실내운동', lat: 37.5596, lng: 126.9768, reviews: 430, summary: '암벽 난이도와 안전 시설이 좋고 초보자도 부담 없이 즐길 수 있습니다.', vibe: '운동 / 도전', platforms: { 네이버: 3.8, 카카오: 3.9, 구글: 4.0, 인스타: 4.2 } },
  { city: '서울시', district: '강남구', name: '동네 마라 사우나', bigCategory: '액티비티', smallCategory: '사우나', lat: 37.5641, lng: 126.9885, reviews: 520, summary: '휴식과 힐링을 동시에 누릴 수 있는 편안한 사우나 공간입니다.', vibe: '휴식 / 웰빙', platforms: { 네이버: 3.7, 카카오: 3.9, 구글: 4.1, 인스타: 3.8 } },
  { city: '서울시', district: '강동구', name: '별빛 라운지 바', bigCategory: '액티비티', smallCategory: '야경/바', lat: 37.5389, lng: 127.1224, reviews: 470, summary: '조용한 분위기 속에 감성적인 바 테라스가 매력적인 장소입니다.', vibe: '데이트 / 밤', platforms: { 네이버: 4.0, 카카오: 4.1, 구글: 4.2, 인스타: 4.4 } },
  { city: '서울시', district: '노원구', name: '노원 갤러리 디저트', bigCategory: '카페', smallCategory: '디저트', lat: 37.6542, lng: 127.056, reviews: 710, summary: '무난한 데일리 디저트와 편안한 공간이 인기 있는 디저트 카페입니다.', vibe: '디저트 / 힐링', platforms: { 네이버: 4.2, 카카오: 4.3, 구글: 4.1, 인스타: 4.5 } },
  { city: '서울시', district: '구로구', name: '구로 아트 브런치', bigCategory: '맛집', smallCategory: '브런치', lat: 37.4955, lng: 126.8879, reviews: 840, summary: '가성비와 아트 감성 인테리어가 동시에 좋은 브런치집입니다.', vibe: '브런치 / 회의', platforms: { 네이버: 4.4, 카카오: 4.3, 구글: 4.5, 인스타: 4.6 } },
  { city: '서울시', district: '성북구', name: '성북 루프 방탈출', bigCategory: '액티비티', smallCategory: '방탈출', lat: 37.5898, lng: 127.016, reviews: 530, summary: '상대적으로 난이도가 적당하고 연출이 좋아 초보자도 접근성이 좋습니다.', vibe: '팀플 / 추리', platforms: { 네이버: 4.0, 카카오: 4.1, 구글: 4.2, 인스타: 4.0 } },
  { city: '서울시', district: '용산구', name: '용산 테라스 스낵', bigCategory: '맛집', smallCategory: '분식', lat: 37.5313, lng: 126.9810, reviews: 560, summary: '가볍게 먹기 좋은 메뉴와 빠른 회전율이 장점입니다.', vibe: '간식 / 야식', platforms: { 네이버: 3.9, 카카오: 4.0, 구글: 4.1, 인스타: 4.0 } },
  { city: '서울시', district: '은평구', name: '은평 아늑한 책방카페', bigCategory: '카페', smallCategory: '책방/감성', lat: 37.6020, lng: 126.9260, reviews: 690, summary: '조용한 서재 분위기와 디저트가 잘 어울리는 감성 카페입니다.', vibe: '조용함 / 독서', platforms: { 네이버: 4.1, 카카오: 4.2, 구글: 4.3, 인스타: 4.5 } },
  { city: '부산시', district: '해운대구', name: '해운대 바다브런치', bigCategory: '맛집', smallCategory: '브런치', lat: 35.1631, lng: 129.1636, reviews: 1760, summary: '바다 전망과 맛이 강점인 브런치 카페입니다.', vibe: '바다 / 데이트', platforms: { 네이버: 4.9, 카카오: 4.7, 구글: 4.8, 인스타: 4.8 } },
  { city: '부산시', district: '남포동', name: '남포 스낵 바', bigCategory: '맛집', smallCategory: '분식', lat: 35.0966, lng: 129.0343, reviews: 980, summary: '현지인들이 자주 찾는 간단하고 만족스러운 간식 맛집입니다.', vibe: '분식 / 야식', platforms: { 네이버: 4.3, 카카오: 4.4, 구글: 4.1, 인스타: 4.2 } },
  { city: '부산시', district: '서면', name: '서면 스튜디오 카페', bigCategory: '카페', smallCategory: '감성카페', lat: 35.1577, lng: 129.059, reviews: 1410, summary: '서면에서 인기 있는 감성 카페로 스터디와 데이트 모두 적합합니다.', vibe: '감성 / 작업', platforms: { 네이버: 4.8, 카카오: 4.7, 구글: 4.6, 인스타: 4.8 } },
  { city: '부산시', district: '해운대구', name: '썬셋 클라이밍', bigCategory: '액티비티', smallCategory: '실내운동', lat: 35.169, lng: 129.181, reviews: 510, summary: '뷰와 난이도가 균형이 잘 맞는 클라이밍장입니다.', vibe: '운동 / 도전', platforms: { 네이버: 4.2, 카카오: 4.0, 구글: 4.3, 인스타: 4.4 } },
  { city: '부산시', district: '광안리', name: '광안리 루프 바', bigCategory: '액티비티', smallCategory: '야경/바', lat: 35.1539, lng: 129.1189, reviews: 620, summary: '야경과 바다 전망이 조화로운 루프 바입니다.', vibe: '야경 / 파티', platforms: { 네이버: 4.1, 카카오: 4.3, 구글: 4.4, 인스타: 4.7 } },
  { city: '대구시', district: '동성로', name: '동성로 라이트 카페', bigCategory: '카페', smallCategory: '감성카페', lat: 35.8694, lng: 128.6061, reviews: 820, summary: '도심 속 조용한 감성 카페로 동네 데이트에 잘 맞습니다.', vibe: '데이트 / 휴식', platforms: { 네이버: 4.4, 카카오: 4.5, 구글: 4.3, 인스타: 4.6 } },
  { city: '대구시', district: '수성구', name: '수성 보드파크', bigCategory: '액티비티', smallCategory: '보드카페', lat: 35.8361, lng: 128.6327, reviews: 660, summary: '보드게임 종류가 많고 단체 모임으로 인기 있는 장소입니다.', vibe: '친목 / 보드게임', platforms: { 네이버: 4.1, 카카오: 4.2, 구글: 4.0, 인스타: 4.3 } },
  { city: '대구시', district: '중구', name: '중구 타이닐 라멘', bigCategory: '맛집', smallCategory: '일식', lat: 35.8666, lng: 128.5916, reviews: 580, summary: '깔끔한 국물과 가성비가 좋아 데일리 라멘으로 인기가 높습니다.', vibe: '일식 / 저녁', platforms: { 네이버: 4.2, 카카오: 4.1, 구글: 4.3, 인스타: 4.0 } },
  { city: '인천시', district: '송도', name: '송도 바다브루', bigCategory: '카페', smallCategory: '브루잇 카페', lat: 37.3845, lng: 126.657, reviews: 1370, summary: '송도에서 꾸준히 사랑받는 브루잇 카페입니다.', vibe: '카페 / 작업', platforms: { 네이버: 4.7, 카카오: 4.6, 구글: 4.8, 인스타: 4.7 } },
  { city: '인천시', district: '연수구', name: '연수 감성 포차', bigCategory: '액티비티', smallCategory: '야경/바', lat: 37.4104, lng: 126.6787, reviews: 530, summary: '분위기 있는 포차와 액티비티형 술집으로 밤에 인기가 많습니다.', vibe: '친구 / 술', platforms: { 네이버: 4.0, 카카오: 4.1, 구글: 4.3, 인스타: 4.2 } },
  { city: '인천시', district: '남동구', name: '남동 브런치 로스터리', bigCategory: '맛집', smallCategory: '브런치', lat: 37.4484, lng: 126.7314, reviews: 760, summary: '가족 모임과 브런치 데이트 모두 적합한 편안한 장소입니다.', vibe: '브런치 / 가족', platforms: { 네이버: 4.4, 카카오: 4.3, 구글: 4.5, 인스타: 4.4 } },
  { city: '서울시', district: '강남구', name: '강남 파인 라운지', bigCategory: '액티비티', smallCategory: '야경/바', lat: 37.4991, lng: 127.0267, reviews: 640, summary: '세련된 인테리어와 조용한 주류 선택이 매력적인 분위기 있는 공간입니다.', vibe: '야경 / 모임', platforms: { 네이버: 4.1, 카카오: 4.2, 구글: 4.4, 인스타: 4.3 } },
  { city: '서울시', district: '서초구', name: '서초 로즈 카페', bigCategory: '카페', smallCategory: '감성카페', lat: 37.4916, lng: 127.0108, reviews: 880, summary: '디저트와 조용한 좌석 공간이 균형 좋게 느껴지는 감성 카페입니다.', vibe: '휴식 / 커피', platforms: { 네이버: 4.4, 카카오: 4.3, 구글: 4.5, 인스타: 4.7 } },
  { city: '서울시', district: '노원구', name: '노원 피자 캡슐', bigCategory: '맛집', smallCategory: '양식', lat: 37.6525, lng: 127.0599, reviews: 940, summary: '가성비와 퀄리티가 좋아 가족 단위 방문이 꾸준한 양식집입니다.', vibe: '가족 / 저녁', platforms: { 네이버: 4.3, 카카오: 4.0, 구글: 4.2, 인스타: 4.4 } },
  { city: '서울시', district: '중랑구', name: '중랑 버터하우스', bigCategory: '카페', smallCategory: '디저트', lat: 37.5941, lng: 127.0763, reviews: 760, summary: '버터 기반 디저트와 아담한 분위기가 잘 어울리는 디저트 전문점입니다.', vibe: '디저트 / 데이트', platforms: { 네이버: 4.2, 카카오: 4.3, 구글: 4.1, 인스타: 4.5 } },
  { city: '서울시', district: '양천구', name: '양천 미니 라운지', bigCategory: '액티비티', smallCategory: '라이브/파티', lat: 37.5246, lng: 126.8567, reviews: 510, summary: '젊은 층이 많이 찾는 라이브 파티 분위기와 밝은 인테리어가 장점입니다.', vibe: '친구 / 음악', platforms: { 네이버: 3.9, 카카오: 4.1, 구글: 4.2, 인스타: 4.6 } },
  { city: '서울시', district: '영등포구', name: '영등포 모닝 브루', bigCategory: '카페', smallCategory: '브루잇 카페', lat: 37.5263, lng: 126.8965, reviews: 700, summary: '바쁜 출근 전에도 편하게 이용할 수 있는 브루잇 카페입니다.', vibe: '출근 / 작업', platforms: { 네이버: 4.1, 카카오: 4.2, 구글: 4.3, 인스타: 4.4 } },
  { city: '부산시', district: '부산진구', name: '부산진 우드테이블', bigCategory: '맛집', smallCategory: '양식', lat: 35.1546, lng: 129.0567, reviews: 810, summary: '친절한 서비스와 가성비 좋은 스테이크가 인상적입니다.', vibe: '데이트 / 저녁', platforms: { 네이버: 4.3, 카카오: 4.4, 구글: 4.5, 인스타: 4.2 } },
  { city: '부산시', district: '동래구', name: '동래 맥주 정원', bigCategory: '액티비티', smallCategory: '야경/바', lat: 35.2022, lng: 129.0846, reviews: 570, summary: '분위기 좋은 야외 테라스와 맥주 조합이 인기 포인트입니다.', vibe: '야경 / 주류', platforms: { 네이버: 4.0, 카카오: 4.2, 구글: 4.3, 인스타: 4.4 } },
  { city: '부산시', district: '사상구', name: '사상 수제버거 하우스', bigCategory: '맛집', smallCategory: '패스트푸드', lat: 35.1528, lng: 128.9902, reviews: 620, summary: '빠르고 만족스러운 수제버거와 가성비가 강점입니다.', vibe: '간식 / 푸드', platforms: { 네이버: 4.1, 카카오: 4.0, 구글: 4.2, 인스타: 4.1 } },
  { city: '부산시', district: '중구', name: '중구 골목 스테이크', bigCategory: '맛집', smallCategory: '스테이크', lat: 35.1031, lng: 129.0340, reviews: 690, summary: '고급스러운 맛과 적당한 가격으로 꾸준하다는 평가를 받는 곳입니다.', vibe: '미식 / 저녁', platforms: { 네이버: 4.2, 카카오: 4.3, 구글: 4.5, 인스타: 4.4 } },
  { city: '대구시', district: '수성구', name: '수성 소담 힐링카페', bigCategory: '카페', smallCategory: '브루잇 카페', lat: 35.8303, lng: 128.6509, reviews: 770, summary: '편안한 좌석과 조용한 분위기로 한적한 휴식에 적합한 카페입니다.', vibe: '조용함 / 카페', platforms: { 네이버: 4.3, 카카오: 4.2, 구글: 4.4, 인스타: 4.5 } },
  { city: '대구시', district: '달서구', name: '달서 치즈룸', bigCategory: '맛집', smallCategory: '브런치', lat: 35.8395, lng: 128.5630, reviews: 530, summary: '치즈와 브런치 조합이 좋아 연인 데이트에 많이 찾는 편입니다.', vibe: '데이트 / 브런치', platforms: { 네이버: 4.0, 카카오: 4.1, 구글: 4.2, 인스타: 4.3 } },
  { city: '대구시', district: '북구', name: '북구 escape room', bigCategory: '액티비티', smallCategory: '방탈출', lat: 35.8857, lng: 128.5904, reviews: 440, summary: '직접 만든 스토리와 퀄리티가 좋아 친구나 연인 단위로 인기입니다.', vibe: '팀플 / 추리', platforms: { 네이버: 3.9, 카카오: 4.0, 구글: 4.1, 인스타: 4.0 } },
  { city: '인천시', district: '부평구', name: '부평 박스 네트워크', bigCategory: '액티비티', smallCategory: '보드카페', lat: 37.4895, lng: 126.7244, reviews: 480, summary: '단체 게임과 친절한 안내가 강점인 보드카페입니다.', vibe: '친목 / 보드게임', platforms: { 네이버: 4.0, 카카오: 4.1, 구글: 4.2, 인스타: 4.1 } },
  { city: '인천시', district: '미추홀구', name: '미추홀 해안 카페', bigCategory: '카페', smallCategory: '바다뷰카페', lat: 37.4631, lng: 126.6504, reviews: 910, summary: '바다 전망과 여유로운 분위기로 데이트와 힐링 장소로 인기입니다.', vibe: '바다 / 데이트', platforms: { 네이버: 4.5, 카카오: 4.4, 구글: 4.6, 인스타: 4.7 } },
  { city: '인천시', district: '서구', name: '서구 산책 브런치', bigCategory: '맛집', smallCategory: '브런치', lat: 37.5455, lng: 126.6753, reviews: 660, summary: '풍경과 음식이 어우러져 아침에 자주 찾는 데일리 브런치 장소입니다.', vibe: '브런치 / 산책', platforms: { 네이버: 4.1, 카카오: 4.2, 구글: 4.3, 인스타: 4.4 } }
];

const userLocation = {
  lat: 37.5665,
  lng: 126.978
};

const state = {
  query: '',
  city: '서울시',
  dataVersion: 1
};

const categoryList = document.getElementById('categoryList');
const categorySummary = document.getElementById('categorySummary');
const cityStatus = document.getElementById('cityStatus');
const locationText = document.getElementById('locationText');
const resultsCount = document.getElementById('resultsCount');
const avgRating = document.getElementById('avgRating');
const refreshBtn = document.getElementById('refreshBtn');
const statusBadge = document.getElementById('statusBadge');
const feedbackBtn = document.getElementById('feedbackBtn');
const feedbackModal = document.getElementById('feedbackModal');
const closeFeedbackModal = document.getElementById('closeFeedbackModal');
const feedbackForm = document.getElementById('feedbackForm');
const formStatus = document.getElementById('formStatus');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function getDistanceKm(lat1, lng1, lat2, lng2) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);

  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function averageRating(platforms) {
  const scores = Object.values(platforms);
  const total = scores.reduce((sum, value) => sum + value, 0);
  return total / scores.length;
}

function formatDistance(distance) {
  if (distance < 1) {
    return `${Math.round(distance * 1000)}m`; 
  }
  return `${distance.toFixed(1)}km`;
}

function detectCityName(lat, lng) {
  const isSeoul = lat >= 37.4 && lat <= 37.7 && lng >= 126.7 && lng <= 127.2;
  if (isSeoul) return '서울시';
  const isBusan = lat >= 35.0 && lat <= 35.3 && lng >= 128.8 && lng <= 129.3;
  if (isBusan) return '부산시';
  const isDaegu = lat >= 35.7 && lat <= 36.0 && lng >= 128.4 && lng <= 128.8;
  if (isDaegu) return '대구시';
  const isIncheon = lat >= 37.3 && lat <= 37.7 && lng >= 126.3 && lng <= 126.8;
  if (isIncheon) return '인천시';
  return '서울시';
}

function filterPlacesBySearch(data) {
  const normalizedQuery = state.query.trim().toLowerCase();
  const cityPlaces = data.filter((place) => place.city === state.city);

  if (!normalizedQuery) {
    return cityPlaces.filter((place) => place.score >= 3.0);
  }

  return cityPlaces.filter((place) => {
    const haystack = [
      place.name,
      place.bigCategory,
      place.smallCategory,
      place.vibe,
      place.city,
      place.district
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(normalizedQuery) && place.score >= 3.0;
  });
}

function renderPlaces() {
  const cityPlaces = places.filter((place) => place.city === state.city);
  const filteredPlaces = filterPlacesBySearch(places);

  cityStatus.textContent = `${state.city} 기준으로만 추천합니다. 다른 시의 상점은 표시하지 않습니다.`;

  if (!state.query.trim()) {
    categorySummary.innerHTML = '';
    categoryList.innerHTML = '<div class="empty-state">검색어를 입력하면 현재 거주 시의 추천 결과를 보여드립니다.</div>';
    resultsCount.textContent = '0곳';
    avgRating.textContent = '0.0';
    return;
  }

  const rankedPlaces = filteredPlaces
    .map((place) => {
      const distance = getDistanceKm(userLocation.lat, userLocation.lng, place.lat, place.lng);
      const score = averageRating(place.platforms);
      return { ...place, distance, score };
    })
    .filter((place) => place.score >= 3.0)
    .sort((a, b) => b.score - a.score || a.distance - b.distance);

  resultsCount.textContent = `${rankedPlaces.length}곳`;
  const ratingAverage = rankedPlaces.length
    ? rankedPlaces.reduce((sum, place) => sum + place.score, 0) / rankedPlaces.length
    : 0;
  avgRating.textContent = ratingAverage.toFixed(1);

  const summaryByBigCategory = Object.entries(
    rankedPlaces.reduce((acc, place) => {
      if (!acc[place.bigCategory]) {
        acc[place.bigCategory] = { count: 0, total: 0 };
      }
      acc[place.bigCategory].count += 1;
      acc[place.bigCategory].total += place.score;
      return acc;
    }, {})
  ).map(([name, value]) => ({
    name,
    count: value.count,
    average: value.total / value.count
  }));

  categorySummary.innerHTML = summaryByBigCategory
    .slice()
    .sort((a, b) => b.average - a.average)
    .map(
      (item) => `
        <div class="summary-pill">
          <span class="label">${item.name}</span>
          <strong>${item.count}곳</strong>
          <small>${item.average.toFixed(1)}점 평균</small>
        </div>
      `
    )
    .join('');

  if (!rankedPlaces.length) {
    categoryList.innerHTML = '<div class="empty-state">현재 시 기준으로 검색된 3.0 이상 추천 장소가 아직 없어요.</div>';
    return;
  }

  const grouped = rankedPlaces.reduce((acc, place) => {
    if (!acc[place.bigCategory]) {
      acc[place.bigCategory] = {};
    }
    if (!acc[place.bigCategory][place.smallCategory]) {
      acc[place.bigCategory][place.smallCategory] = [];
    }
    acc[place.bigCategory][place.smallCategory].push(place);
    return acc;
  }, {});

  categoryList.innerHTML = Object.entries(grouped)
    .map(([bigCategory, subCategories]) => {
      const smallCategoryEntries = Object.entries(subCategories)
        .map(([smallCategory, items]) => {
          const avg = items.reduce((sum, item) => sum + item.score, 0) / items.length;
          return `
            <div class="subcategory-block">
              <div class="subcategory-heading">
                <strong>${smallCategory}</strong>
                <span>${items.length}곳 · ${avg.toFixed(1)}점</span>
              </div>
              <ul class="place-list">
                ${items
                  .map((place) => {
                    const platformTags = Object.entries(place.platforms)
                      .map(([name, value]) => `${name} ${value.toFixed(1)}`)
                      .join(' · ');

                    return `
                      <li class="place-card">
                        <div class="place-hero">
                          <span class="place-category">${place.bigCategory}</span>
                          <span class="place-distance">${formatDistance(place.distance)}</span>
                        </div>
                        <h4>${place.name}</h4>
                        <p class="place-summary">${place.summary}</p>
                        <div class="place-meta">
                          <div class="rating-box"><span class="star">★</span> ${place.score.toFixed(1)}</div>
                          <span class="review-count">리뷰 ${place.reviews.toLocaleString()}개</span>
                        </div>
                        <ul class="platform-list">
                          <li>${platformTags}</li>
                        </ul>
                        <div class="card-actions">
                          <a class="route-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name)}" target="_blank" rel="noreferrer">길 찾기</a>
                          <span class="score-pill">${place.score.toFixed(1)}점</span>
                        </div>
                      </li>
                    `;
                  })
                  .join('')}
              </ul>
            </div>
          `;
        })
        .join('');

      const summaryCount = Object.values(subCategories).reduce((total, items) => total + items.length, 0);
      const summaryAverage = rankedPlaces
        .filter((place) => place.bigCategory === bigCategory)
        .reduce((sum, place) => sum + place.score, 0) / summaryCount;

      return `
        <div class="category-group">
          <div class="category-header">
            <h4>${bigCategory}</h4>
            <span>${summaryCount}곳 · 평균 ${summaryAverage.toFixed(1)}점</span>
          </div>
          <div class="subcategory-wrap">${smallCategoryEntries}</div>
        </div>
      `;
    })
    .join('');
}

function collectStoreData() {
  const updateValue = (value) => Number((value + (Math.random() - 0.5) * 0.2).toFixed(1));

  places.forEach((place) => {
    Object.keys(place.platforms).forEach((platform) => {
      const current = place.platforms[platform];
      place.platforms[platform] = Math.min(5, Math.max(3, updateValue(current)));
    });
  });

  state.dataVersion += 1;
  cityStatus.textContent = `${state.city} 기준 데이터가 ${new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}에 갱신되었습니다.`;
  renderPlaces();
}

function startDataCollector() {
  window.setInterval(collectStoreData, 60 * 60 * 1000);
}

function updateLocationText(position) {
  const { latitude, longitude } = position.coords;
  userLocation.lat = latitude;
  userLocation.lng = longitude;
  state.city = detectCityName(latitude, longitude);

  const latLabel = latitude >= 0 ? 'N' : 'S';
  const lngLabel = longitude >= 0 ? 'E' : 'W';

  locationText.textContent = `${Math.abs(latitude).toFixed(4)}° ${latLabel}, ${Math.abs(longitude).toFixed(4)}° ${lngLabel}`;
  statusBadge.textContent = '현재 위치 반영 완료';
  statusBadge.style.borderColor = 'rgba(106, 229, 177, 0.28)';
  statusBadge.style.background = 'rgba(106, 229, 177, 0.08)';
  cityStatus.textContent = `${state.city} 기준으로만 추천합니다. 다른 시의 상점은 표시하지 않습니다.`;
  renderPlaces();
}

function handleLocationError() {
  state.city = '서울시';
  locationText.textContent = '기본 위치 기준 추천 중';
  statusBadge.textContent = '위치 권한 없음';
  statusBadge.style.borderColor = 'rgba(255, 214, 107, 0.32)';
  statusBadge.style.background = 'rgba(255, 214, 107, 0.08)';
  cityStatus.textContent = `${state.city} 기준으로만 추천합니다. 다른 시의 상점은 표시하지 않습니다.`;
  renderPlaces();
}

function requestLocation() {
  if (!navigator.geolocation) {
    handleLocationError();
    return;
  }

  statusBadge.textContent = '위치 탐색 중';
  navigator.geolocation.getCurrentPosition(updateLocationText, handleLocationError, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 600000
  });
}

function openFeedbackModal() {
  feedbackModal.classList.remove('hidden');
  feedbackModal.setAttribute('aria-hidden', 'false');
}

function closeFeedback() {
  feedbackModal.classList.add('hidden');
  feedbackModal.setAttribute('aria-hidden', 'true');
}

searchBtn.addEventListener('click', () => {
  state.query = searchInput.value;
  renderPlaces();
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    state.query = searchInput.value;
    renderPlaces();
  }
});

feedbackBtn.addEventListener('click', openFeedbackModal);
closeFeedbackModal.addEventListener('click', closeFeedback);
feedbackModal.addEventListener('click', (event) => {
  if (event.target === feedbackModal) {
    closeFeedback();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !feedbackModal.classList.contains('hidden')) {
    closeFeedback();
  }
});

feedbackForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  formStatus.textContent = '전송 중입니다...';

  try {
    const response = await fetch('https://formspree.io/f/xeaoznyv', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: new FormData(feedbackForm)
    });

    if (response.ok) {
      formStatus.textContent = '건의사항이 정상적으로 전송되었습니다. 감사합니다!';
      feedbackForm.reset();
      setTimeout(closeFeedback, 1500);
    } else {
      throw new Error('전송 실패');
    }
  } catch (error) {
    formStatus.textContent = '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.';
  }
});

refreshBtn.addEventListener('click', requestLocation);
startDataCollector();
requestLocation();
