/**
 * 게임 도감의 동적 기능을 담당하는 스크립트 파일입니다.
 * JSON 데이터를 불러와 화면에 표시하고, 사용자 상호작용을 처리합니다.
 */

document.addEventListener('DOMContentLoaded', () => {
    // HTML에서 주요 요소들을 가져옵니다.
    const itemListElement = document.getElementById('item-list'); // 왼쪽 아이템 목록
    const itemDetailsElement = document.getElementById('item-details'); // 오른쪽 상세 정보

    // 데이터베이스와 현재 활성화된 아이템을 저장할 변수
    let database = [];
    let activeItem = null;

    // 1. database.json 파일에서 데이터를 비동기적으로 불러옵니다.
    fetch('database.json')
        .then(response => {
            // HTTP 응답이 성공적인지 확인합니다.
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // 응답을 JSON 형태로 파싱합니다.
        })
        .then(data => {
            // 2. 데이터를 성공적으로 불러왔을 때 실행됩니다.
            database = data; // 불러온 데이터를 database 변수에 저장합니다.
            renderItemList(); // 아이템 목록을 화면에 그립니다.

            // 3. 첫 번째 아이템을 기본으로 표시합니다.
            if (database.length > 0) {
                showItemDetails(database[0].id); // 첫 번째 아이템의 상세 정보를 표시합니다.
                
                // 첫 번째 목록 아이템을 활성화 상태로 만듭니다.
                const firstListItem = itemListElement.querySelector('.list-item');
                if (firstListItem) {
                    firstListItem.classList.add('active');
                    activeItem = firstListItem;
                }
            }
        })
        .catch(error => {
            // 데이터 로딩 중 오류가 발생하면 콘솔과 화면에 오류 메시지를 표시합니다.
            console.error('데이터를 불러오는 중 오류 발생:', error);
            itemDetailsElement.innerHTML = '<p style="color: #e74c3c;">데이터를 불러오는 데 실패했습니다. 파일을 확인해주세요.</p>';
        });

    /**
     * 데이터베이스의 모든 항목을 왼쪽 목록에 렌더링하는 함수
     */
    function renderItemList() {
        itemListElement.innerHTML = ''; // 기존 목록을 비웁니다.
        database.forEach(item => {
            const listItem = document.createElement('div');
            listItem.className = 'list-item'; // CSS 클래스 설정
            listItem.textContent = item.name; // 아이템 이름 표시
            listItem.dataset.id = item.id; // 클릭 시 참조할 수 있도록 데이터 ID를 저장

            // 각 목록 아이템에 클릭 이벤트를 추가합니다.
            listItem.addEventListener('click', () => {
                showItemDetails(item.id); // 클릭된 아이템의 상세 정보를 표시
                
                // 이전에 활성화된 아이템의 'active' 클래스를 제거합니다.
                if(activeItem){
                    activeItem.classList.remove('active');
                }
                // 현재 클릭된 아이템에 'active' 클래스를 추가합니다.
                listItem.classList.add('active');
                activeItem = listItem; // 활성화된 아이템을 현재 아이템으로 업데이트
            });
            itemListElement.appendChild(listItem); // 생성된 아이템을 목록에 추가
        });
    }

    /**
     * 지정된 ID를 가진 항목의 상세 정보를 오른쪽에 표시하는 함수
     * @param {number} id - 표시할 항목의 ID
     */
    function showItemDetails(id) {
        const item = database.find(i => i.id === id); // 데이터베이스에서 해당 ID의 아이템을 찾습니다.
        if (!item) return; // 아이템이 없으면 함수를 종료합니다.

        // 아이템의 스탯(stats)이 있는 경우, 이를 HTML 문자열로 만듭니다.
        let statsHtml = '';
        if (item.stats) {
            statsHtml = Object.entries(item.stats)
                .map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`)
                .join('');
        }

        // 최종적으로 표시될 HTML 콘텐츠를 구성합니다.
        itemDetailsElement.innerHTML = `
            <h2>${item.name}</h2>
            <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">
            <p>${item.description}</p>
            <div class="item-stats">
                <h3>기본 정보</h3>
                ${statsHtml}
            </div>
        `;
    }
});
