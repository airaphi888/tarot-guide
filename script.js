// 塔羅牌資料
const tarotCards = [
    {
        id: 0,
        name: "愚者",
        image: "images/fool.jpg",
        upright: "新的開始、冒險、純真、自發性、自由奔放",
        reversed: "魯莽、不負責任、過度冒險、不切實際",
        description: "愚者代表一個純真無邪的開始，象徵著踏上新的旅程。"
    },
    {
        id: 1,
        name: "魔術師",
        image: "images/magician.jpg",
        upright: "創造力、技能、意志力、自信、靈活",
        reversed: "技能不足、虛假、濫用力量、機會主義",
        description: "魔術師象徵著創造與實現的能力，代表著將想法轉化為現實的潛力。"
    },
    // 可以繼續添加更多牌
];

// 抽牌功能
function drawCard() {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomIndex];
    const isReversed = Math.random() < 0.5;
    
    displayCard(card, isReversed);
}

// 顯示抽到的牌
function displayCard(card, isReversed) {
    const resultDiv = document.getElementById('reading-result');
    resultDiv.innerHTML = `
        <div class="drawn-card ${isReversed ? 'reversed' : ''}">
            <img src="${card.image}" alt="${card.name}">
            <h3>${card.name}</h3>
            <p class="position">${isReversed ? '逆位' : '正位'}</p>
            <p class="meaning">${isReversed ? card.reversed : card.upright}</p>
            <p class="description">${card.description}</p>
        </div>
    `;
}

// 搜索功能
function searchCards(query) {
    const searchResults = tarotCards.filter(card => 
        card.name.includes(query) || 
        card.upright.includes(query) || 
        card.reversed.includes(query) ||
        card.description.includes(query)
    );
    
    displaySearchResults(searchResults);
}

function displaySearchResults(results) {
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = results.map(card => `
        <div class="card">
            <img src="${card.image}" alt="${card.name}">
            <h3>${card.name}</h3>
            <p><strong>正位：</strong>${card.upright}</p>
            <p><strong>逆位：</strong>${card.reversed}</p>
            <p>${card.description}</p>
        </div>
    `).join('');
} 