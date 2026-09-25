const places = [
  {
    name: '라이트하우스 브런치',
    category: '브런치',
    lat: 37.5665,
    lng: 126.978,
    reviews: 1840,
    summary: '감성적인 인테리어와 따뜻한 브런치로 데이트, 회식, 가족 모임 모두 만족도가 높습니다.',
    vibe: '데이트 / 브런치',
    platforms: { 네이버: 4.8, 카카오: 4.7, 구글: 4.9 }
  },
  {
    name: '모먼트 커피 로스터리',
    category: '카페',
    lat: 37.5701,
    lng: 126.9854,
    reviews: 1224,
    summary: '핫한 원두와 넓은 좌석으로 작업, 스터디, 느긋한 휴식이 모두 잘 어울리는 카페입니다.',
    vibe: '카페 / 작업',
    platforms: { 네이버: 4.7, 카카오: 4.8, 구글: 4.6 }
  },
  {
    name: '에이드스테이션',
    category: '음식점',
    lat: 37.5619,
    lng: 126.972,
    reviews: 910,
    summary: '트렌디한 분위기와 퀄리티 높은 음식으로 젊은 층과 직장인 사이에서 인기입니다.',
    vibe: '분위기 / 푸드',
    platforms: { 네이버: 4.5, 카카오: 4.7, 구글: 4.6 }
  },
  {
    name: '오아시스 루프',
    category: '바',
    lat: 37.5524,
    lng: 126.989,
    reviews: 780,
    summary: '야경과 칵테일 조합이 좋고, 저녁 시간대 체류 시간이 긴 인기 술집입니다.',
    vibe: '야경 / 술집',
    platforms: { 네이버: 4.4, 카카오: 4.6, 구글: 4.5 }
  },
  {
    name: '맑은 실버 스테이',
    category: '피트니스',
    lat: 37.5765,
    lng: 126.967,
    reviews: 650,
    summary: '운동 환경과 편안한 시설이 조화롭고 재방문율이 높은 웰빙 공간입니다.',
    vibe: '운동 / 웰빙',
    platforms: { 네이버: 4.4, 카카오: 4.5, 구글: 4.3 }
  },
  {
    name: '수플레 플래닛',
    category: '디저트',
    lat: 37.5589,
    lng: 126.981,
    reviews: 2050,
    summary: '디저트와 음료 퀄리티가 우수하고 인스타 감성 인테리어가 강점입니다.',
    vibe: '디저트 / 인스타',
    platforms: { 네이버: 4.9, 카카오: 4.8, 구글: 5.0 }
  },
  {
    name: '비스트로 노을',
    category: '양식',
    lat: 37.5791,
    lng: 126.9892,
    reviews: 1180,
    summary: '가성비와 화려한 플레이팅이 모두 인상적이며 감성적인 저녁 식사 장소입니다.',
    vibe: '모임 / 미식',
    platforms: { 네이버: 4.6, 카카오: 4.7, 구글: 4.8 }
  },
  {
    name: '청춘 한옥 카페',
    category: '카페',
    lat: 37.5488,
    lng: 126.9654,
    reviews: 930,
    summary: '한옥 분위기와 수제 디저트가 매력적이며 사진 찍기 좋은 장소로 손꼽힙니다.',
    vibe: '한옥 / 감성',
    platforms: { 네이버: 4.5, 카카오: 4.6, 구글: 4.7 }
  },
  {
    name: '골든테이블 한정식',
    category: '한식',
    lat: 37.5728,
    lng: 126.9726,
    reviews: 1540,
    summary: '정갈한 반찬과 깔끔한 분위기 덕분에 가족 외식·기념일 모임에 인기입니다.',
    vibe: '가족 / 한식',
    platforms: { 네이버: 4.8, 카카오: 4.7, 구글: 4.6 }
  },
  {
    name: '뮤직팩토리 라이브바',
    category: '바',
    lat: 37.5602,
    lng: 126.9837,
    reviews: 870,
    summary: '라이브 공연과 칵테일이 잘 어우러져 주말에 찾는 고객이 많은 장소입니다.',
    vibe: '라이브 / 파티',
    platforms: { 네이버: 4.4, 카카오: 4.5, 구글: 4.7 }
  },
  {
    name: '포레스트 브루잎',
    category: '브런치',
    lat: 37.5824,
    lng: 126.9771,
    reviews: 690,
    summary: '자연 친화적인 인테리어와 아침식사 코스가 잘 나와 있어 평판이 꾸준합니다.',
    vibe: '브런치 / 힐링',
    platforms: { 네이버: 4.5, 카카오: 4.4, 구글: 4.7 }
  },
  {
    name: '달빛 소담 스튜디오',
    category: '카페',
    lat: 37.5513,
    lng: 126.9918,
    reviews: 760,
    summary: '조용한 분위기와 예쁜 음료가 조화를 이루며, 꾸준한 재방문 고객이 많은 편입니다.',
    vibe: '감성 / 휴식',
    platforms: { 네이버: 4.4, 카카오: 4.6, 구글: 4.5 }
  }
];

const userLocation = {
  lat: 37.5665,
  lng: 126.978
};

const placeList = document.getElementById('placeList');
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

function renderPlaces() {
  const rankedPlaces = places
    .map((place) => {
      const distance = getDistanceKm(userLocation.lat, userLocation.lng, place.lat, place.lng);
      const score = averageRating(place.platforms);
      return {
        ...place,
        distance,
        score
      };
    })
    .filter((place) => place.score >= 4.0)
    .sort((a, b) => b.score - a.score || a.distance - b.distance);

  resultsCount.textContent = `${rankedPlaces.length}곳`;
  const ratingAverage = rankedPlaces.length
    ? rankedPlaces.reduce((sum, place) => sum + place.score, 0) / rankedPlaces.length
    : 0;
  avgRating.textContent = ratingAverage.toFixed(1);

  if (!rankedPlaces.length) {
    placeList.innerHTML = '<li class="empty-state">주변에 4.0 이상 평점의 추천 장소가 아직 없어요.</li>';
    return;
  }

  placeList.innerHTML = rankedPlaces
    .map((place) => {
      const platformTags = Object.entries(place.platforms)
        .map(([name, value]) => `${name} ${value.toFixed(1)}`)
        .join(' · ');

      return `
        <li class="place-card">
          <div class="place-hero">
            <span class="place-category">${place.category}</span>
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
    .join('');
}

function updateLocationText(position) {
  const { latitude, longitude } = position.coords;
  userLocation.lat = latitude;
  userLocation.lng = longitude;

  const latLabel = latitude >= 0 ? 'N' : 'S';
  const lngLabel = longitude >= 0 ? 'E' : 'W';

  locationText.textContent = `${Math.abs(latitude).toFixed(4)}° ${latLabel}, ${Math.abs(longitude).toFixed(4)}° ${lngLabel}`;
  statusBadge.textContent = '현재 위치 반영 완료';
  statusBadge.style.borderColor = 'rgba(106, 229, 177, 0.28)';
  statusBadge.style.background = 'rgba(106, 229, 177, 0.08)';
  renderPlaces();
}

function handleLocationError() {
  locationText.textContent = '기본 위치 기준 추천 중';
  statusBadge.textContent = '위치 권한 없음';
  statusBadge.style.borderColor = 'rgba(255, 214, 107, 0.32)';
  statusBadge.style.background = 'rgba(255, 214, 107, 0.08)';
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
requestLocation();
