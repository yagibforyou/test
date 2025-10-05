// --- 카테고리 정보 관리 --- //
// 각 카테고리 이름에 해당하는 아이콘 경로를 지정합니다.
const categoryInfo = {
    "전체": "images/CategoryIcon/All.webp", // '전체' 카테고리 아이콘
    "화상": "images/CategoryIcon/Burn.webp",
    "출혈": "images/CategoryIcon/Bleed.webp",
    "진동": "images/CategoryIcon/Tremor.webp",
    "파열": "images/CategoryIcon/Rupture.webp",
    "침잠": "images/CategoryIcon/Skinking.webp",
    "호흡": "images/CategoryIcon/Poise.webp",
    "충전": "images/CategoryIcon/Charge.webp",
    "참격": "images/CategoryIcon/Slash.webp",
    "관통": "images/CategoryIcon/Pierce.webp",
    "타격": "images/CategoryIcon/Blunt.webp",
    "범용": "images/CategoryIcon/LunarMemory.webp",
};

// --- 아이템 데이터 관리 --- //
const items = [

    {
        id: "Burn-001",
        category: "화상",
        name: "불꽃의 편린",
        grade: 4,
        icon: "images/Burn/Glimpse of Flames.webp",
        short_desc: "한턴 뒤 방깎",
        details: `
            <p><strong>기본 효과</strong> :
턴 종료 시, 화상 상태인 적에게 대상이 보유한 화상 횟수의 절반만큼을 소모하여 (화상 위력 × 소모한 화상 횟수)만큼 추가 분노 피해를 입힘. (화상 횟수 최대 5 소모)
불꽃의 편린 효과로 소모한 화상 횟수만큼, 다음 턴 동안 대상의 방어 레벨 감소 (최대 3)</p>
            <p><strong>+</strong> :
턴 종료 시, 화상 상태인 적에게 대상이 보유한 화상 횟수의 절반만큼을 소모하여 (화상 위력 × 소모한 화상 횟수)만큼 추가 분노 피해를 입힘. (화상 횟수 최대 7 소모)
불꽃의 편린 효과로 소모한 화상 횟수만큼, 다음 턴 동안 대상의 방어 레벨 감소 (최대 5)</p>
            <p><strong>++</strong> :
턴 종료 시, 화상 상태인 적에게 대상이 보유한 화상 횟수의 절반만큼을 소모하여 (화상 위력 × 소모한 화상 횟수)만큼 추가 분노 피해를 입힘. (화상 횟수 최대 10 소모)
불꽃의 편린 효과로 소모한 화상 횟수만큼, 다음 턴 동안 대상의 방어 레벨 감소 (최대 8)</p>
        `
    },

    {
        id: "Burn-002",
        category: "화상",
        name: "먼지에서 먼지로",
        grade: 3,
        icon: "images/Burn/Dust to Dust.webp",
        short_desc: "화상 스택 보조",
        details: `
            <p><strong>기본효과</strong> :
웨이브 첫 턴 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 화상 위력 5, 화상 횟수 3 부여.
나태 완전 공명을 발동하였다면 전투 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 화상 위력 3, 화상 횟수 2 부여</p>
            <p><strong>+</strong> :
웨이브 첫 턴 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 화상 위력 6, 화상 횟수 3 부여.
나태 완전 공명을 발동하였다면 전투 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 화상 위력 4, 화상 횟수 2 부여</p>
            <p><strong>++</strong> :
웨이브 첫 턴 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 화상 위력 8, 화상 횟수 3 부여.
나태 공명을 발동하였다면 전투 시작 시, 모든 적(환상체일 경우, 무작위 부위 하나)에게 화상 위력 4, 화상 횟수 3 부여)</p>
        `
    },

        {
        id: "Burn-003",
        category: "화상",
        name: "재에서 재로",
        grade: 1,
        icon: "images/Burn/Ashes to Ashes.webp",
        short_desc: "화상 스택 보조",
        details: `
            <p><strong>기본효과</strong> :
전투 시작 시 모든 적(환상체일 경우, 모든 부위)이 화상에 걸린 경우, 적 전체(환상체일 경우, 모든 부위)에게 화상 위력 2 부여</p>
            <p><strong>+</strong> :
전투 시작 시 화상에 걸린 적 전체(환상체일 경우, 모든 부위)에게 화상 위력 2 부여</p>
            <p><strong>++</strong> :
전투 시작 시 적 전체(환상체일 경우, 모든 부위)에게 화상 위력 3 부여</p>
        `
    },

            {
        id: "Burn-004",
        category: "화상",
        name: "그을린 원반",
        grade: 3,
        icon: "images/Burn/Charred Disk.webp",
        short_desc: "적 공렙감 4",
        details: `
            <p>	
화상 상태인 적이 사망하였을 경우(환상체일 경우, 본체 사망 시), 남은 화상 위력 수치의 절반만큼을 다음 턴 시작 시 화상 위력 수치가 제일 적은 적 중 하나에게 부여.
턴 시작 시 화상 상태인 적에게 이번 턴 동안 공격 레벨 감소 4 부여</p>
        `
    },
                {
        id: "Burn-005",
        category: "화상",
        name: "부화하지 않은 불씨",
        grade: 4,
        icon: "images/Burn/Unhatched Embers.webp",
        short_desc: "1회 부활",
        theme: "<b>하드 4층 테마팩 '3호선' 한정</b>",
        details: `
        <p>	
        <b>기본효과</b> :
        사망할 정도의 피해를 입었다면, 해당 공격 동안 체력이 1로 유지되고 해당 공격 종료시 전체 체력의 20%만큼 회복함. (전투당 1회 발동)</p>
        <p><b>+</b> :
        사망할 정도의 피해를 입었다면, 해당 공격 동안 체력이 1로 유지되고 해당 공격 종료시 전체 체력의 20%만큼 회복함. (전투당 1회 발동)
        자신에게 화상이 있으면, 대신 해당 공격 동안 체력이 1로 유지되고 해당 공격 종료시 전체 체력의 30%만큼 회복함.(위 효과와 합쳐 전투 당 1회 발동)</p>
        <p><b>++</b> :
        사망할 정도의 피해를 입었다면, 해당 공격 동안 체력이 1로 유지되고 해당 공격 종료시 전체 체력의 20%만큼 회복함. (전투당 1회 발동)
        자신에게 화상이 있으면, 대신 해당 공격 동안 체력이 1로 유지되고 해당 공격 종료시 전체 체력의 40%만큼 회복함.(위 효과와 합쳐 전투 당 1회 발동)</p>
        `
    },

                    {
        id: "Bleed-001",
        category: "출혈",
        name: "피목화",
        grade: 4,
        icon: "images/Bleed/Red-stained Gossypium.webp",
        short_desc: "스택 보조 / 적공방렙감",
        details: `
            <p>	
<b>기본효과</b> :
스테이지 첫 턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 출혈 위력 1, 출혈 횟수 15 부여.
턴 시작 시 출혈 상태인 적의 공격 레벨과 방어 레벨이 이번 턴 동안 (출혈 위력 / 3)만큼 감소. (출혈 위력 30 스택 시, 효과 최대)</p>
<p><b>+</b> :
웨이브 첫 턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 출혈 위력 2, 출혈 횟수 15 부여.
턴 시작 시 출혈 상태인 적의 공격 레벨과 방어 레벨이 이번 턴 동안 (출혈 위력 / 3)만큼 감소. (출혈 위력 30 스택 시, 효과 최대)</p>
<p><b>++</b> :
웨이브 첫 턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 출혈 위력 4, 출혈 횟수 20 부여.
턴 시작 시 출혈 상태인 적의 공격 레벨과 방어 레벨이 이번 턴 동안 (출혈 위력 / 2)만큼 감소. (출혈 위력 30 스택 시, 효과 최대)</p>
        `
    },

    {
        id: "Bleed-002",
        category: "출혈",
        name: "억류된 찬송",
        grade: 1,
        icon: "images/Bleed/Arrested Hymn.webp",
        short_desc: "공렙증 / 주피증",
        details: `
            <p>	
<b>기본효과</b> :
전투 시작 시 모든 적(환상체의 경우, 모든 부위)이 출혈에 걸린 경우, 다음 턴에 모든 아군이 신속 1 얻음.</p>
<p><b>+</b> :
전투 시작 시 모든 적(환상체의 경우, 모든 부위)이 출혈에 걸린 경우, 다음 턴에 모든 아군이 신속 1, 피해량 증가 1 얻음.
</p>
<p><b>++</b> :
전투 시작 시 모든 적(환상체의 경우, 모든 부위)이 출혈에 걸린 경우, 다음 턴에 모든 아군이 신속 2, 피해량 증가 1, 공격 레벨 증가 2 얻음.</p>
        `
    },

    {
        id: "Bleed-003",
        category: "출혈",
        name: "작고 나쁠 인형",
        grade: 2,
        icon: "images/Bleed/Little and To-be-Naughty Plushie.webp",
        short_desc: "주피증 / 받피감",
        details: `
            <p>	
전투 시작 단계에서 출혈에 걸린 적에게 가하는 피해량 +10%
전투 시작 단계에서 출혈에 걸린 적에게 대상에게 받는 피해량 -20%
오만 속성 공격 스킬을 보유한 아군의 경우, 효과가 강화되어 출혈에 걸린 적에게 가하는 피해량 +20%
오만 속성 공격 스킬을 보유한 아군의 경우, 효과가 강화되어 출혈에 걸린 적에게 받는 피해량 -30%</p>
        `
    },

        {
        id: "Bleed-004",
        category: "출혈",
        name: "녹슨 입마개",
        grade: 1,
        icon: "images/Bleed/Rusted Muzzle.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
스킬을 사용하여 적에게 적중 시 12 이상의 체력 피해를 입혔다면, 대상에게 출혈 위력 2 부여.
참격 스킬을 사용할 경우, 효과가 강화되어 출혈 4 부여.
</p>
<p><b>+</b> :
스킬을 사용하여 적에게 적중 시 12 이상의 체력 피해를 입혔다면, 대상에게 출혈 위력 3 부여.
참격 스킬을 사용할 경우, 효과가 강화되어 출혈 위력 5 부여.
</p>
<p><b>++</b> :
스킬을 사용하여 적에게 적중 시 1 이상의 체력 피해를 입혔다면, 대상에게 출혈 위력 3 부여.
참격 스킬을 사용할 경우, 효과가 강화되어 출혈 위력 5, 출혈 횟수 1 부여.
</p>
        `
    },

    

    // {
    //     id: "Burn-",
    //     category: "범용",
    //     name: "대화재",
    //     grade: 5,
    //     icon: "images/Burn/Inferno.webp",
    //     short_desc: "모든 것을 태운다",
    //     theme : "어쩌고저쩌고",
    //     details: `<p>설명 준비중</p>`,
    //     recipe: ["Burn-002", "Burn-001", { icon: "images/custom/special_ore.png", grade: 5 }]
    // },

];

// --- 페이지 로직 (이 아래는 수정할 필요가 없습니다) --- //

// 숫자 등급을 로마 숫자로 변환하는 함수
function toRoman(num) {
    const romanMap = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V' };
    return romanMap[num] || '';
}

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('item-grid-container');
    const categoryList = document.getElementById('category-list');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // 카테고리 목록 생성
    const uniqueCategories = [...new Set(items.map(item => item.category))];
    const categories = ['전체', ...uniqueCategories];
    
    categories.forEach(category => {
        const li = document.createElement('li');
        li.dataset.category = category;

        const icon = document.createElement('img');
        icon.className = 'category-icon';
        icon.src = categoryInfo[category] || 'images/default_category.png'; // 정보가 없으면 기본 아이콘
        icon.onerror = () => { icon.src = 'images/default_category.png'; };

        const text = document.createElement('span');
        text.textContent = category;

        li.appendChild(icon);
        li.appendChild(text);
        categoryList.appendChild(li);

        li.addEventListener('click', () => {
            document.querySelector('#category-list li.active').classList.remove('active');
            li.classList.add('active');
            renderItems(category);
        });
    });

    // 아이템 목록 렌더링 함수
    function renderItems(selectedCategory) {
        mainContainer.innerHTML = ''; // 기존 아이템 목록 초기화

        const categoriesToRender = selectedCategory === '전체' 
            ? uniqueCategories 
            : [selectedCategory];

        categoriesToRender.forEach(category => {
            const header = document.createElement('h3');
            header.className = 'category-header';

            const icon = document.createElement('img');
            icon.className = 'category-header-icon';
            icon.src = categoryInfo[category] || 'images/default_category.png';
            icon.onerror = () => { icon.src = 'images/default_category.png'; };

            const text = document.createElement('span');
            text.textContent = category;

            header.appendChild(icon);
            header.appendChild(text);
            mainContainer.appendChild(header);

            const grid = document.createElement('div');
            grid.className = 'item-grid';
            
            const itemsInCategory = items.filter(item => item.category === category);

            itemsInCategory.forEach(item => {
                const card = document.createElement('div');
                card.className = 'item-card';
                card.dataset.id = item.id;

                const shortDesc = document.createElement('p');
                shortDesc.className = 'item-short-desc';
                shortDesc.textContent = item.short_desc;
                card.appendChild(shortDesc);

                const imageContainer = document.createElement('div');
                imageContainer.className = 'item-image-container';
                
                const img = document.createElement('img');
                img.src = item.icon;
                img.alt = item.name;
                img.onerror = () => { img.src = 'images/default.png'; };

                imageContainer.appendChild(img);

                const nameContainer = document.createElement('div');
                nameContainer.className = 'item-name-container';

                if (item.grade) {
                    const grade = document.createElement('span');
                    grade.className = 'item-grade';
                    grade.textContent = toRoman(item.grade);
                    nameContainer.appendChild(grade);
                }

                const name = document.createElement('p');
                name.className = 'item-name';
                name.textContent = item.name;
                nameContainer.appendChild(name);

                card.appendChild(imageContainer);
                card.appendChild(nameContainer);
                grid.appendChild(card);

                card.addEventListener('click', () => showModal(item));
            });

            mainContainer.appendChild(grid);
        });
    }

    // 모달 표시 함수
    function showModal(item) {
        document.getElementById('modal-item-icon').src = item.icon;
        
        const modalItemName = document.getElementById('modal-item-name');
        modalItemName.innerHTML = ''; // Clear previous content
    
        if (item.grade) {
            const gradeSpan = document.createElement('span');
            gradeSpan.className = 'item-grade';
            gradeSpan.textContent = toRoman(item.grade);
            modalItemName.appendChild(gradeSpan);
        }
    
        const nameSpan = document.createElement('span');
        nameSpan.textContent = item.name;
        modalItemName.appendChild(nameSpan);
    
        const modalDetails = document.getElementById('modal-item-details');
        modalDetails.innerHTML = item.details;

        // --- NEW THEME LOGIC ---
        if (item.theme) {
            const themeContainer = document.createElement('div');
            themeContainer.className = 'theme-container';
            themeContainer.innerHTML = item.theme;
            modalDetails.appendChild(themeContainer);
        }
        // --- END OF THEME LOGIC ---

        // --- NEW FLEXIBLE RECIPE LOGIC ---
        if (item.recipe && Array.isArray(item.recipe) && item.recipe.length > 0) {
            const recipeContainer = document.createElement('div');
            recipeContainer.className = 'recipe-container';

            // Function to create a recipe item (icon + grade)
            const createRecipeItem = (recipeItem) => {
                const itemContainer = document.createElement('div');
                itemContainer.className = 'recipe-item-container';

                const img = document.createElement('img');
                img.src = recipeItem.icon;
                img.onerror = () => { img.src = 'images/default.png'; };
                itemContainer.appendChild(img);

                if (recipeItem.grade) {
                    const grade = document.createElement('span');
                    grade.className = 'item-grade recipe-item-grade';
                    grade.textContent = toRoman(recipeItem.grade);
                    itemContainer.appendChild(grade);
                }
                return itemContainer;
            };

            // Add ingredients
            item.recipe.forEach((recipeElement, index) => {
                let ingredientData = null;

                if (typeof recipeElement === 'string') {
                    // It's an ID, find the full item
                    ingredientData = items.find(i => i.id === recipeElement);
                } else if (typeof recipeElement === 'object' && recipeElement !== null) {
                    // It's a custom ingredient object
                    ingredientData = recipeElement;
                }

                if (ingredientData) {
                    recipeContainer.appendChild(createRecipeItem(ingredientData));

                    // Add '+' if not the last ingredient
                    if (index < item.recipe.length - 1) {
                        const plus = document.createElement('span');
                        plus.className = 'recipe-operator';
                        plus.textContent = '+';
                        recipeContainer.appendChild(plus);
                    }
                }
            });

            // Add '='
            const equals = document.createElement('span');
            equals.className = 'recipe-operator';
            equals.textContent = '=';
            recipeContainer.appendChild(equals);

            // Add result item
            recipeContainer.appendChild(createRecipeItem(item));
            
            modalDetails.appendChild(recipeContainer);
        }
        // --- END OF RECIPE LOGIC ---

        modalOverlay.classList.remove('hidden');
    }
    // 모달 닫기 함수
    function closeModal() {
        modalOverlay.classList.add('hidden');
    }

    // 초기화
    document.querySelector('#category-list li').classList.add('active');
    renderItems('전체');

    // 이벤트 리스너
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modalOverlay.classList.contains('hidden')) closeModal();
    });
});
