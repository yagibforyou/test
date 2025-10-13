// --- 카테고리 정보 관리 --- //
// 각 카테고리 이름에 해당하는 아이콘 경로를 지정합니다.
const categoryInfo = {
    "전체": "images/CategoryIcon/All.webp", // '전체' 카테고리 아이콘
    "화상": "images/CategoryIcon/Burn.webp",
    "출혈": "images/CategoryIcon/Bleed.webp",
    "진동": "images/CategoryIcon/Tremor.webp",
    "파열": "images/CategoryIcon/Rupture.webp",
    "침잠": "images/CategoryIcon/Sinking.webp",
    "호흡": "images/CategoryIcon/Poise.webp",
    "충전": "images/CategoryIcon/Charge.webp",
    "참격": "images/CategoryIcon/Slash.webp",
    "관통": "images/CategoryIcon/Pierce.webp",
    "타격": "images/CategoryIcon/Blunt.webp",
    "필수범용": "images/CategoryIcon/LunarMemory.webp",
    "코스트범용": "images/CategoryIcon/Cost.webp",
    "에고범용": "images/CategoryIcon/Egocost.webp",
    "힐범용": "images/CategoryIcon/Heal.webp",
    "부가범용": "images/CategoryIcon/Plus.webp"
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
        theme:"<b>원만한 적용을 위해 먼지에서 먼지로 / 재에서 재로 ++보다 나중에 획득할 것</b>",
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

            {
        id: "Bleed-005",
        category: "출혈",
        name: "늘어붙은 쇠말뚝",
        grade: 1,
        icon: "images/Bleed/Grimy Iron Stake.webp",
        short_desc: "적 방렙감",
        details: `
            <p>	
단일 코인 스킬을 사용하여 적에게 적중 시, 대상에게 출혈 위력 1 부여하고 다음 턴까지 방어 레벨 감소 2 부여.
대상이 출혈 상태일 경우, 효과가 강화되어 출혈 위력 3 부여.
</p>
        `
    },

            {
        id: "Tremor-001",
        category: "진동",
        name: "폭우",
        grade: 4,
        icon: "images/Tremor/Downpour.webp",
        short_desc: "턴종시 진동폭발 / 스택보조",
        details: `
            <p>	
<b>기본효과</b> :
턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 진동 위력을 (현재 턴 × 2) 부여, 진동 횟수 2 부여.
턴 종료 시, 모든 적(환상체일 경우, 모든 부위)에게 진동 폭발 효과 부여.
</p>
<p><b>+</b> :
턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 진동 위력을 (3 + 현재 턴 × 2) 부여, 진동 횟수 3 부여.
턴 종료 시, 모든 적(환상체일 경우, 모든 부위)에게 진동 폭발 효과 부여.
</p>
<p><b>++</b> :
턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 진동 위력을 (5 + 현재 턴 × 2) 부여, 진동 횟수 3 부여.
턴 종료 시, 모든 적(환상체일 경우, 모든 부위)에게 진동 폭발 효과 2회 부여.
</p>
        `
    },

    
            {
        id: "Tremor-002",
        category: "진동",
        name: "녹아내린 눈알",
        grade: 3,
        icon: "images/Tremor/Melted Eyeball.webp",
        short_desc: "진동폭발 1턴 후 적공방렙감",
        details: `
            <p>	
진동 폭발된 적에게 다음 턴에 공격 레벨 감소 5와 방어 레벨 감소 5 부여. (턴 당 최대 3회)
</p>
        `
    },

    
            {
        id: "Tremor-003",
        category: "진동",
        name: "진실의 종",
        grade: 3,
        icon: "images/Tremor/Bell of Truth.webp",
        short_desc: "진동폭발된 적 취약부여",
        details: `
            <p>	
<b>기본효과</b> :
진동 폭발이 적용된 적에게 이번 턴에 취약 1 부여 (공격 스킬을 사용하여 진동 폭발 부여 시, 스킬 당 최대 1회).
</p>
<p><b>+</b> :
진동 폭발이 적용된 적에게 이번 턴과 다음 턴에 취약 1 부여 (공격 스킬을 사용하여 진동 폭발 부여 시, 스킬 당 최대 1회).
</p>
<p><b>++</b> :
진동 폭발이 적용된 적에게 이번 턴과 다음 턴에 취약 2 부여 (공격 스킬을 사용하여 진동 폭발 부여 시, 스킬 당 최대 1회).
</p>
        `
    },

    
            {
        id: "Tremor-004",
        category: "진동",
        name: "잔향",
        grade: 2,
        icon: "images/Tremor/Reverberation.webp",
        short_desc: "속박 / 마비 / 적 방렙감",
        details: `
            <p>	
<b>기본효과</b> :
턴 종료 시, 진동 위력을 10 이상 보유한 적(환상체일 경우, 해당 부위)에게 다음 턴에 속박 2 부여.
대상이 진동 위력을 20 이상 보유한 경우, 효과가 강화되어 속박 2, 마비 1 부여.
</p>
<p><b>+</b> :
턴 종료 시, 진동 위력을 8 이상 보유한 적(환상체일 경우, 해당 부위)에게 다음 턴에 속박 2, 방어 레벨 감소 2 부여.
대상이 진동 위력을 15 이상 보유한 경우, 효과가 강화되어 속박 2, 마비 1, 방어 레벨 감소 2 부여.
</p>
<p><b>++</b> :
턴 종료 시, 진동 위력을 5 이상 보유한 적(환상체일 경우, 해당 부위)에게 다음 턴에 속박 2, 방어 레벨 감소 3 부여.
대상이 진동 위력을 10 이상 보유한 경우, 효과가 강화되어 속박 2, 마비 1, 방어 레벨 감소 4 부여.
</p>
        `
    },

    
            {
        id: "Tremor-005",
        category: "진동",
        name: "고혈",
        grade: 2,
        icon: "images/Tremor/Blood, Sweat, and Tears.webp",
        short_desc: "흐트러짐 증뎀",
        details: `
            <p>	
<b>기본효과</b> :
흐트러짐 상태의 적에게 스킬을 사용하여 가하는 피해량 +10%.
진동 위력, 진동 횟수를 부여하거나, 진폭 변환, 진동 폭발, 진폭 얽힘 효과를 보유한 스킬 또는 나태 속성 스킬을 사용할 경우, 효과가 강화되어 피해량 +20%.
</p>
<p><b>+</b> :
흐트러짐 상태의 적에게 스킬을 사용하여 가하는 피해량 +12.5%.
진동 위력, 진동 횟수를 부여하거나, 진폭 변환, 진동 폭발, 진폭 얽힘 효과를 보유한 스킬 또는 나태 속성 스킬을 사용할 경우, 효과가 강화되어 피해량 +25%.
</p>
<p><b>++</b> :
흐트러짐 상태의 적에게 스킬을 사용하여 가하는 피해량 +15%.
진동 위력, 진동 횟수를 부여하거나, 진폭 변환, 진동 폭발, 진폭 얽힘 효과를 보유한 스킬 또는 나태 속성 스킬을 사용할 경우, 효과가 강화되어 피해량 +30%.
</p>
        `
    },

    
            {
        id: "Tremor-006",
        category: "진동",
        name: "닉시 다이버전스",
        grade: 1,
        icon: "images/Tremor/Nixie Divergence.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
스테이지 첫 턴 시작 시, 적 전체(환상체일 경우, 모든 부위)에게 진동 위력 4, 진동 횟수 4 부여.
질투 속성 스킬을 사용하여 적에게 적중 시, 대상에게 진동 위력 2 부여

</p>
<p><b>+</b> :
웨이브 첫 턴 시작 시, 적 전체(환상체일 경우, 모든 부위)에게 진동 위력 4, 진동 횟수 4 부여.
질투 속성 스킬을 사용하여 적에게 적중 시, 대상에게 진동 위력 2 부여
</p>
<p><b>++</b> :
웨이브 첫 턴 시작 시, 적 전체(환상체일 경우, 모든 부위)에게 진동 위력 5, 진동 횟수 5 부여.
질투 속성 스킬을 사용하여 적에게 적중 시, 대상에게 진동 위력 3 부여
</p>
        `
    },

    
            {
        id: "Tremor-007",
        category: "진동",
        name: "진동형 팔찌",
        grade: 2,
        icon: "images/Tremor/Oscillating Bracelet.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
스킬을 사용하여 적에게 적중 시, 다음 턴에 대상에게 진동 위력 1 부여
분노 속성 스킬을 사용할 경우, 효과가 강화되어 진동 위력 2 부여.
</p>
<p><b>+</b> :
스킬을 사용하여 적에게 적중 시, 다음 턴에 대상에게 진동 위력 1 부여.
분노 속성 스킬을 사용할 경우, 효과가 강화되어 진동 위력 3 부여.
</p>
<p><b>++</b> :
스킬을 사용하여 적에게 적중 시, 다음 턴에 대상에게 진동 위력 2 부여.
분노 속성 스킬을 사용할 경우, 효과가 강화되어 진동 위력 4 부여.
</p>
        `
    },

            {
        id: "Sinking-001",
        category: "침잠",
        name: "미적 감각",
        grade: 4,
        icon: "images/Sinking/Artistic Sense.webp",
        short_desc: "개쎄짐",
        details: `
            <p>	
<b>기본효과</b> :
정신력 감소로 인하여 부정적 효과(사기 저하, 패닉)를 얻은 적에게 입히는 피해량 35% 증가.
정신력이 없는 적에게 침잠 효과가 적용될 경우, 우울 속성 피해를 입히는 대신 이를 포함한 죄악 속성 중 가장 효과적인 속성 피해로 변경.
</p>
<p><b>+</b> :
정신력이 0 미만인 적에게 입히는 피해량 40% 증가.
정신력이 없는 적에게 침잠 효과가 적용될 경우, 우울 속성 피해를 입히는 대신 이를 포함한 죄악 속성 중 가장 효과적인 속성 피해로 변경.
</p>
<p><b>++</b> :
정신력이 없거나 0 미만인 적에게 입히는 피해량 50% 증가.
정신력이 없는 적에게 침잠 효과가 적용될 경우, 우울 속성 피해를 입히는 대신 이를 포함한 죄악 속성 중 가장 효과적인 속성 피해로 변경.
</p>
        `
    },
    

            {
        id: "Sinking-002",
        category: "침잠",
        name: "한겨울 밤의 악몽",
        grade: 3,
        icon: "images/Sinking/Midwinter Nightmare.webp",
        short_desc: "스택보조",
        details: `
            <p>	
스킬을 사용하여 적에게 적중 시 체력 피해를 입혔다면, 대상에게 침잠 위력 3 부여.
탐식 속성 스킬을 사용할 경우, 효과가 강화되어 대상에게 침잠 위력 5 부여.
</p>
        `
    },
    

    
            {
        id: "Sinking-003",
        category: "침잠",
        name: "고장난 나침반",
        grade: 3,
        icon: "images/Sinking/Broken Compass.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
웨이브 첫 턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 침잠 횟수 (5 + 등장한 적의 수 × 3)만큼 무작위로 나누어 부여 (환상체일 경우, 적 숫자는 본체 하나로 계산).
</p>
<p><b>+</b> :
웨이브 첫 턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 침잠 횟수 (10 + 등장한 적의 수 × 3)만큼 무작위로 나누어 부여 (환상체일 경우, 적 숫자는 본체 하나로 계산).
</p>
<p><b>++</b> :
웨이브 첫 턴 시작 시, 모든 적(환상체일 경우, 모든 부위)에게 침잠 횟수 (10 + 등장한 적의 수 × 4)만큼 무작위로 나누어 부여 (환상체일 경우, 적 숫자는 본체 하나로 계산).
</p>
        `
    },
    

    
            {
        id: "Sinking-004",
        category: "침잠",
        name: "녹아내린 시계태엽",
        grade: 2,
        icon: "images/Sinking/Melted Spring.webp",
        short_desc: "공방렙감",
        theme: "<b>원만한 사용을 위해 고장난 나침반 / 서릿발 발자국 이후에 획득할 것</b>",
        details: `
            <p>	
턴 시작 시 침잠 상태인 적의 공격 레벨과 방어 레벨이 이번 턴 동안 3만큼 감소
</p>
        `
    },
    

    
            {
        id: "Sinking-005",
        category: "침잠",
        name: "유골 부스러기",
        grade: 2,
        icon: "images/Sinking/Skeletal Crumbs.webp",
        short_desc: "주피증 / 받피감",
        theme:"<b>원만한 사용을 위해 고장난 나침반 / 서릿발 발자국 이후에 획득할 것</b>",
        details: `
            <p>	
전투 시작 단계에서 침잠 상태인 적에게 가하는 피해량 +12.5%, 대상에게 받는 피해량 -12.5%.
우울 속성 스킬을 보유한 아군은 효과가 강화되어, 침잠 상태인 적에게 가하는 피해량 +20%, 대상에게 받는 피해량 -20%.
</p>
        `
    },
    

    
            {
        id: "Sinking-006",
        category: "침잠",
        name: "머리 없는 초상화",
        grade: 1,
        icon: "images/Sinking/Headless Portrait.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
전투 시작 시, 정신력이 0 미만인 모든 적(환상체일 경우, 무작위 부위 하나)에게 침잠 위력 2 부여.
질투 속성 스킬을 사용할 때마다 다음 턴에 모든 적(환상체일 경우, 무작위 부위 하나)에게 침잠 위력 1 나누어 부여.
</p>
<p><b>+</b> :
전투 시작 시, 정신력이 0 미만인 모든 적(환상체일 경우, 무작위 부위 하나)에게 침잠 위력 3 부여.
질투 속성 스킬을 사용할 때마다 다음 턴에 모든 적(환상체일 경우, 무작위 부위 하나)에게 침잠 위력 2 나누어 부여.
</p>
<p><b>++</b> :
전투 시작 시, 정신력이 0 미만인 모든 적(환상체일 경우, 무작위 부위 하나)에게 침잠 위력 4, 침잠 횟수 1 부여.
질투 속성 스킬을 사용할 때마다 다음 턴에 모든 적(환상체일 경우, 무작위 부위 하나)에게 침잠 위력 3 나누어 부여.
</p>
        `
    },
    

    
            {
        id: "Sinking-007",
        category: "침잠",
        name: "칸타빌레",
        grade: 1,
        icon: "images/Sinking/Cantabile.webp",
        short_desc: "정신력 회복",
        details: `
            <p>	
기본 공격 스킬 사용시, 적의 침잠 위력이 5 이상이면, 대상의 (침잠 위력 / 10)만큼 자신의 정신력 회복 (최대 3)
</p>
        `
    },
    

    
            {
        id: "Sinking-008",
        category: "침잠",
        name: "모형 저택 오르골",
        grade: 3,
        icon: "images/Sinking/Manor-shaped Music Box.webp",
        short_desc: "편성 1번 흐트 1회 즉시해제",
        theme: "<b>1층 '저택의 부산물' 테마팩 한정 기프트</b>",
        details: `
            <p>	
[편성 1번 인격 전용 효과]
턴 종료시 흐트러짐 상태가 되었을 때, 흐트러짐 상태가 해제되고, 다음 턴 시작 시 모든 적에게 침잠 위력 4, 침잠 횟수 4 부여 (전투당 1회 발동, 집중 전투에서는 부위로 판정)
침잠이 부여된 적 처치 시 침잠 횟수가 가장 낮은 적 1명의 침잠 횟수 2 증가 (집중 전투에서는 부위로 판정)
</p>
        `
    },
    

    
            {
        id: "Sinking-009",
        category: "침잠",
        name: "서릿발 발자국",
        grade: 4,
        icon: "images/Sinking/Hoarfrost Footprint.webp",
        short_desc: "적 합 위력 감소",
        theme:"<b>1,2층 '공장 자동화' 테마팩 & '사랑할 수 없는' 테마팩 한정, 합성 기프트 / 관측 추천</b>",
        recipe:[{icon: "images/Sinking/Haunted Shoes.webp", grade : 2},'+', {icon: "images/Sinking/Frozen Cries.webp", grade : 2}],
        details: `
            <p>	
웨이브 첫 턴 시작 시 아군 전체가 침잠 횟수 3을 획득하고 적 전체(환상체일 경우, 모든 부위)에게 침잠 위력 4, 침잠 횟수 8 부여.
침잠 상태인 적의 합 위력이 2만큼 감소하고 효과를 받은 대상이 아군 인격에게 합 패배 시 침잠 위력 2, 아군 인격에게 피해를 입힐 경우 침잠 위력 3 부여.
</p>
        `
    },
    
            {
        id: "Charge-001",
        category: "충전",
        name: "충전식 장갑",
        grade: 4,
        icon: "images/Charge/Charge-type Gloves.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
충전 횟수 최대치 +10.
스테이지 시작 시, 모든 아군의 충전 횟수 5 증가.
턴 시작 시, 모든 아군의 충전 횟수 2 증가.
<br>[1번 편성 전용 효과] 스테이지 시작시, 초아광축전 1 얻음
</p>
<p><b>+</b> :
충전 횟수 최대치 +10.
스테이지 시작 시, 모든 아군의 충전 횟수 6 증가.
턴 시작 시, 모든 아군의 충전 횟수 3 증가.
<br>[1번 편성 전용 효과] 스테이지 시작시, 초아광축전 10 얻음
</p>
<p><b>++</b> :
충전 횟수 최대치 +10.
스테이지 시작 시, 모든 아군의 충전 횟수 8 증가.
턴 시작 시, 모든 아군의 충전 횟수 4 증가.
<br>[1번 편성 전용 효과] 스테이지 시작시, 초아광축전 20 얻음
</p>
        `
    },

                {
        id: "Charge-002",
        category: "충전",
        name: "피뢰침",
        grade: 3,
        icon: "images/Charge/Lightning Rod.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
스테이지 시작 시, 모든 아군의 충전 횟수 3 증가.
질투 속성 스킬을 보유하고 있는 아군이 전투에 둘 이상 참여한 경우 효과가 강화되어, 모든 아군의 충전 횟수 5 증가.
</p>
<p><b>+</b> :
스테이지 시작 시, 모든 아군의 충전 횟수 4 증가.
질투 속성 스킬을 보유하고 있는 아군이 전투에 둘 이상 참여한 경우 효과가 강화되어, 모든 아군의 충전 횟수 6 증가.
</p>
<p><b>++</b> :
스테이지 시작 시, 모든 아군의 충전 횟수 5 증가.
질투 속성 스킬을 보유하고 있는 아군이 전투에 둘 이상 참여한 경우 효과가 강화되어, 모든 아군의 충전 횟수 7 증가.
</p>
        `
    },

                    {
        id: "Charge-003",
        category: "충전",
        name: "야간투시경",
        grade: 2,
        icon: "images/Charge/Nightvision Goggles.webp",
        short_desc: "공렙증",
        details: `
            <p>	
턴 시작 시, 충전 횟수가 15 이상인 인격이 있을 경우 발동. (특수 충전을 포함)
전투 시작 시, 해당 인격이 충전 횟수를 3 소모하고 이번 턴 동안 공격 레벨 5 증가.
</p>
        `
    },
                    {
        id: "Charge-004",
        category: "충전",
        name: "무정전 전원장치",
        grade: 1,
        icon: "images/Charge/UPS System.webp",
        short_desc: "피해량 증가",
        details: `
            <p>	
<b>기본효과</b> :
턴 종료 시 충전 횟수가 3 미만인 경우에는 다음 턴 시작 시 충전 횟수 3 증가. (특수 충전을 포함)
턴 종료 시 충전 횟수가 3 이상인 경우에는 다음 턴 시작 시 피해량 증가 1 얻음. (특수 충전을 포함)
</p>
<p><b>+</b> :
턴 종료 시 충전 횟수가 4 미만인 경우에는 다음 턴 시작 시 충전 횟수 3 증가. (특수 충전을 포함)
턴 종료 시 충전 횟수가 4 이상인 경우에는 다음 턴 시작 시 피해량 증가 1 얻음. (특수 충전을 포함)

</p>
<p><b>++</b> :
턴 종료 시 충전 횟수가 5 미만인 경우에는 다음 턴 시작 시 충전 횟수 4 증가. (특수 충전을 포함)
턴 종료 시 충전 횟수가 5 이상인 경우에는 다음 턴 시작 시 피해량 증가 2 얻음. (특수 충전을 포함)
</p>
        `
    },
                    {
        id: "Charge-005",
        category: "충전",
        name: "손목 보호대",
        grade: 1,
        icon: "images/Charge/Wrist Guards.webp",
        short_desc: "피해량 증가",
        details: `
            <p>	
<b>기본효과</b> :
턴 시작 시, 충전 횟수와 특수 충전을 합하여 5 이상 보유한 아군이 피해량 증가 1 얻음.
오만 속성 공격 스킬을 보유한 아군의 경우에는 효과가 강화되어, 피해량 증가 2 얻음.
</p>
<p><b>+</b> :
턴 시작 시, 충전 횟수와 특수 충전을 합하여 3 이상 보유한 아군이 피해량 증가 1 얻음.
오만 속성 공격 스킬을 보유한 아군의 경우에는 효과가 강화되어, 피해량 증가 2 얻음.
</p>
<p><b>++</b> :
턴 시작 시, 충전 횟수 또는 특수 충전을 보유한 아군이 피해량 증가 2 얻음.
오만 속성 공격 스킬을 보유한 아군의 경우에는 효과가 강화되어, 피해량 증가 3 얻음.
</p>
        `
    },
                    {
        id: "Charge-006",
        category: "충전",
        name: "휴대용 전지 소켓",
        grade: 2,
        icon: "images/Charge/Portable Battery Socket.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
턴 시작 시, 무작위 아군 둘이 충전 횟수 2 증가 (스킬을 사용하여 충전 횟수 또는 특수 충전을 획득하는 인격을 우선으로 지정).
나태 완전 공명을 발동하였다면 전투 시작 시, 무작위 아군 하나가 충전 횟수 3 증가.
</p>
<p><b>+</b> :
턴 시작 시, 무작위 아군 둘이 충전 횟수 3 증가 (스킬을 사용하여 충전 횟수 또는 특수 충전을 획득하는 인격을 우선으로 지정).
나태 공명을 발동하였다면 전투 시작 시, 무작위 아군 하나가 충전 횟수 3 증가.
</p>
<p><b>++</b> :
턴 시작 시, 무작위 아군 셋이 충전 횟수 3 증가 (스킬을 사용하여 충전 횟수 또는 특수 충전을 획득하는 인격을 우선으로 지정).
나태 공명을 발동하였다면 전투 시작 시, 무작위 아군 하나가 충전 횟수 5 증가.
</p>
        `
    },
                    {
        id: "Charge-007",
        category: "충전",
        name: "물리 간섭 보호장",
        grade: 3,
        icon: "images/Charge/Material Interference Force Field.webp",
        short_desc: "보호막",
        details: `
            <p>	
<b>기본효과</b> :
웨이브 첫 턴 시작 시, 모든 아군이 충전 역장 3 얻음.
</p>
<p><b>+</b> :
웨이브 첫 턴 시작 시, 모든 아군이 충전 역장 5 얻음.
</p>
<p><b>++</b> :
웨이브 첫 턴 시작 시, 모든 아군이 충전 역장 7 얻음.
</p>
        `
    },
                    {
        id: "Charge-008",
        category: "충전",
        name: "순찰용 손전등",
        grade: 2,
        icon: "images/Charge/Patrolling Flashlight.webp",
        short_desc: "보호막 (우선도 낮음)",
        details: `
            <p>	
<b>기본효과</b> :
[편성 1번, 2번 인격 전용 효과]
턴 시작 시 효과 적용 대상 인격이 충전 횟수 또는 특수 충전을 획득하거나 소모하는 스킬을 보유하였다면, 충전 역장 상태일 때 대상의 1스킬 합 위력 +1, 피해량 +10%.
턴 종료 시 효과 대상 인격이 충전 역장을 보유하지 않았다면 다음 턴에 충전 역장 2 부여
</p>
<p><b>+</b> :
[편성 1번, 2번, 3번 인격 전용 효과]
턴 시작 시 효과 적용 대상 인격이 충전 횟수 또는 특수 충전을 획득하거나 소모하는 스킬을 보유하였다면, 충전 역장 상태일 때 대상의 1스킬 합 위력 +1, 피해량 +15%.
턴 종료 시 효과 대상 인격이 충전 역장을 보유하지 않았다면 다음 턴에 충전 역장 3 부여
</p>
<p><b>++</b> :
[편성 1번, 2번, 3번 인격 전용 효과]
턴 시작 시 효과 적용 대상 인격이 충전 횟수 또는 특수 충전을 획득하거나 소모하는 스킬을 보유하였다면, 충전 역장 상태일 때 대상의 1스킬 합 위력 +1, 피해량 +25%.
턴 종료 시 효과 대상 인격이 충전 역장을 보유하지 않았다면 다음 턴에 충전 역장 4 부여
</p>
        `
    },

                    {
        id: "Charge-009",
        category: "충전",
        name: "이력서",
        grade: 1,
        icon: "images/Charge/Curriculum Vitae.webp",
        short_desc: "조건부 공위증",
        details: `
            <p>	
<b>기본효과</b> :
턴 종료 시, 충전 횟수와 특수 충전을 합하여 7 이상 보유한 아군이 다음 턴에 신속 1 얻음.
우울 속성 공격 스킬을 보유한 아군의 경우, 효과가 강화되어 다음 턴에 신속 2, 공격 위력 증가 1 얻음.
</p>
<p><b>+</b> :
턴 종료 시, 충전 횟수와 특수 충전을 합하여 7 이상 보유한 아군이 다음 턴에 신속 2 얻음.
우울 속성 공격 스킬을 보유한 아군의 경우, 효과가 강화되어 다음 턴에 신속 3, 공격 위력 증가 1 얻음.
</p>
<p><b>++</b> :
턴 종료 시, 충전 횟수와 특수 충전을 합하여 7 이상 보유한 아군이 다음 턴에 신속 3 얻음.
우울 속성 공격 스킬을 보유한 아군의 경우, 효과가 강화되어 다음 턴에 신속 4, 공격 위력 증가 1 얻음.
</p>
        `
    },

                    {
        id: "Poise-001",
        category: "호흡",
        name: "네뷸라이저",
        grade: 2,
        icon: "images/Poise/Nebulizer.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
스테이지 첫 턴 시작시 모든 아군이 호흡 위력 4 얻고 호흡 횟수 4 증가
오만 완전 공명을 발동하였다면 전투 시작 시, 모든 아군이 호흡 위력 2 얻고 호흡 횟수 2 증가.
- [중첩 발동 불가] 흉통 료슈 E.G.O 패시브 「숨」발동시, 이 효과가 발동하지 않음.
</p>
<p><b>+</b> :
웨이브 첫 턴 시작시 모든 아군이 호흡 위력 5 얻고 호흡 횟수 4 증가
오만 완전 공명을 발동하였다면 전투 시작 시, 모든 아군이 호흡 위력 3 얻고 호흡 횟수 2 증가
- [중첩 발동 불가] 흉통 료슈 E.G.O 패시브 「숨」발동시, 이 효과가 발동하지 않음.
</p>
<p><b>++</b> :
웨이브 첫 턴 시작시 모든 아군이 호흡 위력 5 얻고 호흡 횟수 5 증가
오만 공명을 발동하였다면 전투 시작 시, 모든 아군이 호흡 위력 3 얻고 호흡 횟수 3 증가
- [중첩 발동 불가] 흉통 료슈 E.G.O 패시브 「숨」발동시, 이 효과가 발동하지 않음.
</p>
        `
    },

                    {
        id: "Poise-002",
        category: "호흡",
        name: "명경지수",
        grade: 4,
        icon: "images/Poise/Clear Mirror, Calm Water.webp",
        short_desc: "피뎀증, 공렙증",
        details: `
            <p>	
<b>기본효과</b> :
아군이 치명타로 가하는 피해량이 1.2배에서 1.7배로 증가.
치명타가 발생하여 호흡 횟수를 소모하였을 경우, 다음 턴에 해당 인격이 공격 레벨 증가 10 얻음 (인격별로 턴 당 1회 발동).
</p>
<p><b>+</b> :
아군이 치명타로 가하는 피해량이 1.2배에서 2배로 증가.
치명타가 발생하여 호흡 횟수를 소모하였을 경우, 다음 턴에 해당 인격이 공격 레벨 증가 12 얻음 (인격별로 턴 당 1회 발동).
</p>
<p><b>++</b> :
아군이 치명타로 가하는 피해량이 1.2배에서 2.5배로 증가.
치명타가 발생하여 호흡 횟수를 소모하였을 경우, 다음 턴에 해당 인격이 공격 레벨 증가 15 얻음 (인격별로 턴 당 1회 발동).
</p>
        `
    },

                    {
        id: "Poise-003",
        category: "호흡",
        name: "물부리",
        grade: 2,
        icon: "images/Poise/Cigarette Holder.webp",
        short_desc: "위력증가",
        details: `
            <p>	
턴 시작 시, 호흡 상태인 아군이 위력 증가 1 얻음.
호흡 횟수를 5 이상 보유한 아군의 경우에는 효과가 강화되어, 위력 증가 2 얻음.
</p>
        `
    },

                    {
        id: "Poise-004",
        category: "호흡",
        name: "네잎클로버",
        grade: 3,
        icon: "images/Poise/Four-leaf Clover.webp",
        short_desc: "스택보조",
        details: `
            <p>	
전투 시작 단계에서 호흡 상태인 아군이 스킬을 사용하여 적에게 치명타 피해를 입힐 경우, 다음 턴 시작 시 호흡 위력 5 얻고 호흡 횟수 2 증가. (턴당 1회 발동)
탐식 속성 스킬을 사용한 경우에는 효과가 강화되어, 다음 턴 시작 시 호흡 위력 7 얻고 호흡 횟수 3 증가.
</p>
        `
    },

                    {
        id: "Poise-005",
        category: "호흡",
        name: "장식된 편자",
        grade: 1,
        icon: "images/Poise/Ornamental Horseshoe.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
턴 시작 시, 호흡 상태가 아닌 무작위 아군 하나에게 호흡 위력 2 부여.
모든 아군이 호흡 상태일 경우, 효과가 변경되어 모든 아군에게 호흡 횟수 1 부여.
</p>
<p><b>+</b> :
턴 시작 시, 호흡 상태가 아닌 무작위 아군 하나에게 호흡 위력 3 부여.
모든 아군이 호흡 상태일 경우, 효과가 변경되어 모든 아군에게 호흡 횟수 2 부여.
</p>
<p><b>++</b> :
턴 시작 시, 호흡 상태가 아닌 무작위 아군 둘에게 호흡 위력 3 부여.
모든 아군이 호흡 상태일 경우, 효과가 변경되어 모든 아군에게 호흡 횟수 3 부여.
</p>
        `
    },

                    {
        id: "Poise-006",
        category: "호흡",
        name: "데블스 셰어",
        grade: 1,
        icon: "images/Poise/Devil's Share.webp",
        short_desc: "신속, 1인 피증, 공렙증",
        details: `
            <p>	
<b>기본효과</b> :
턴 종료 시, 호흡 위력이 제일 높은 아군 하나와 호흡 횟수가 제일 높은 아군 하나에게 다음 턴에 신속 1 부여. (같은 인격일 경우 중복 가능)
색욕 속성 공격 스킬을 보유한 아군일 경우, 효과가 강화되어 신속 2 부여. (E.G.O 스킬 제외)
</p>
<p><b>+</b> :
턴 종료 시, 호흡 위력이 제일 높은 아군 하나와 호흡 횟수가 제일 높은 아군 하나에게 다음 턴에 신속 1, 공격 레벨 증가 1 부여. (같은 인격일 경우 중복 가능)
색욕 속성 공격 스킬을 보유한 아군일 경우, 효과가 강화되어 신속 2, 공격 레벨 증가 2 부여. (E.G.O 스킬 제외)
</p>
<p><b>++</b> :
턴 종료 시, 호흡 위력이 제일 높은 아군 하나와 호흡 횟수가 제일 높은 아군 하나에게 다음 턴에 신속 1, 공격 레벨 증가 1, 피해량 증가 1 부여. (같은 인격일 경우 중복 가능)
색욕 속성 공격 스킬을 보유한 아군일 경우, 효과가 강화되어 신속 2, 공격 레벨 증가 2, 피해량 증가 2 부여. (E.G.O 스킬 제외)
</p>
        `
    },

                    {
        id: "Poise-007",
        category: "호흡",
        name: "미련",
        grade: 3,
        icon: "images/Poise/Finifugality.webp",
        short_desc: "1,2번 피증 합위증",
        details: `
            <p>	
[편성 1번, 2번 인격 전용 효과]
턴 시작 시, 호흡 위력과 호흡 횟수의 합이 10 이상인 아군이 합 위력 +1, 피해량 증가 1 얻음.
수치의 합이 20 이상인 경우, 효과가 강화되어 합 위력 +1, 피해량 증가 3 얻음.
수치의 합이 40 이상인 경우, 효과가 최대로 강화되어 합 위력 +2, 피해량 증가 3 얻음.
</p>
        `
    },

                    {
        id: "Poise-008",
        category: "호흡",
        name: "낡은 목각 인형",
        grade: 2,
        icon: "images/Poise/Old Wooden Doll.webp",
        short_desc: "치명타시 적방렙감",
        details: `
            <p>	
<b>기본효과</b> :
[편성 1번, 2번 인격 전용 효과]
적에게 치명타 피해를 입힐 때마다 다음 턴에 방어 레벨 감소 1 부여 (인격별로 턴 당 3회까지 부여 가능).
[중첩 발동 불가] 홍적 돈키호테 E.G.O의 패시브가 발동시, 이 효과가 발동하지 않음.
</p>
<p><b>+</b> :
[편성 1번, 2번, 3번 인격 전용 효과]
적에게 치명타 피해를 입힐 때마다 다음 턴에 방어 레벨 감소 1 부여 (인격별로 턴 당 4회까지 부여 가능).
[중첩 발동 불가] 홍적 돈키호테 E.G.O의 패시브가 발동시, 이 효과가 발동하지 않음.
</p>
<p><b>++</b> :
[편성 1번, 2번, 3번 인격 전용 효과]
적에게 치명타 피해를 입힐 때마다 다음 턴에 방어 레벨 감소 1 부여 (인격별로 턴 당 6회까지 부여 가능).
[중첩 발동 불가] 홍적 돈키호테 E.G.O의 패시브가 발동시, 이 효과가 발동하지 않음.
</p>
        `
    },

                    {
        id: "Poise-009",
        category: "호흡",
        name: "추억의 펜던트",
        grade: 1,
        icon: "images/Poise/Pendant of Nostalgia.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
전투 시작 시, 무작위 아군 하나가 호흡 위력 3 얻음 (공격 스킬을 사용하여 호흡 횟수를 획득하는 인격을 우선으로 지정).
우울 속성 공격 스킬을 보유한 아군에게 우선으로 적용되며, 이 경우에는 호흡 위력 3 얻고 호흡 횟수 2 증가.
</p>
<p><b>+</b> :
전투 시작 시, 무작위 아군 하나가 호흡 위력 4 얻음 (공격 스킬을 사용하여 호흡 횟수를 획득하는 인격을 우선으로 지정).
우울 속성 공격 스킬을 보유한 아군에게 우선으로 적용되며, 이 경우에는 호흡 위력 4 얻고 호흡 횟수 3 증가.
</p>
<p><b>++</b> :
전투 시작 시, 무작위 아군 둘이 호흡 위력 4 얻음 (공격 스킬을 사용하여 호흡 횟수를 획득하는 인격을 우선으로 지정).
우울 속성 공격 스킬을 보유한 아군에게 우선으로 적용되며, 이 경우에는 호흡 위력 4 얻고 호흡 횟수 3 증가.
</p>
        `
    },

                    {
        id: "Poise-010",
        category: "호흡",
        name: "녹빛 겉날개",
        grade: 1,
        icon: "images/Poise/Emerald Elytra.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
웨이브 첫 턴 시작 시, 속도가 제일 빠른 아군 하나가 호흡 위력 3, 호흡 횟수 2 얻음.
질투 속성 공격 스킬을 보유한 아군일 경우, 효과가 강화되어 호흡 위력 4, 호흡 횟수 3 얻음.
</p>
<p><b>+</b> :
웨이브 첫 턴 시작 시, 속도가 제일 빠른 아군 하나가 호흡 위력 4, 호흡 횟수 4 얻음.
질투 속성 공격 스킬을 보유한 아군일 경우, 효과가 강화되어 호흡 위력 5, 호흡 횟수 5 얻음.
</p>
<p><b>++</b> :
턴 시작시, 속도가 제일 빠른 아군 하나가 호흡 위력 4, 호흡 횟수 4 얻음.
질투 속성 공격 스킬을 보유한 아군일 경우, 효과가 강화되어 호흡 위력 5, 호흡 횟수 5 얻음.
</p>
        `
    },

                    {
        id: "Rupture-001",
        category: "파열",
        name: "부적 묶음",
        grade: 1,
        icon: "images/Rupture/Talisman Bundle.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
스킬을 사용하여 적에게 적중 시 12 이상의 체력 피해를 입혔다면, 대상에게 파열 위력 2 부여.
참격 스킬을 사용할 경우, 효과가 강화되어 파열 위력 4 부여.
</p>
<p><b>+</b> :
스킬을 사용하여 적에게 적중 시 12 이상의 체력 피해를 입혔다면, 대상에게 파열 위력 3 부여.
참격 스킬을 사용할 경우, 효과가 강화되어 파열 위력 5 부여
</p>
<p><b>++</b> :
스킬을 사용하여 적에게 적중 시 1 이상의 체력 피해를 입혔다면, 대상에게 파열 위력 3 부여.
참격 스킬을 사용할 경우, 효과가 강화되어 파열 위력 5 부여, 파열 횟수 1 증가.
</p>
        `
    },

                    {
        id: "Rupture-002",
        category: "파열",
        name: "근무용 통상 배터리",
        grade: 3,
        icon: "images/Rupture/Standard-duty Battery.webp",
        short_desc: "스택보조",
        details: `
            <p>	
스킬을 사용하여 적에게 적중 시, 대상에게 파열 위력 3 부여
질투 속성 스킬을 사용할 경우, 효과가 강화되어 대상에게 파열 위력 5 부여
</p>
        `
    },

                    {
        id: "Rupture-004",
        category: "파열",
        name: "부서진 리볼버",
        grade: 1,
        icon: "images/Rupture/Broken Revolver.webp",
        short_desc: "공렙감 방렙감",
        details: `
            <p>	
턴 시작 시, 파열 상태(환상체일 경우, 부위)인 적의 공격 레벨과 방어 레벨이 이번 턴 동안 2만큼 감소.
</p>
        `
    },

                    {
        id: "Rupture-005",
        category: "파열",
        name: "형광색 램프",
        grade: 2,
        icon: "images/Rupture/Fluorescent Lamp.webp",
        short_desc: "1인피증",
        details: `
            <p>	
<b>기본효과</b> :
턴 종료 시 파열 상태인 적의 수(환상체일 경우, 모든 부위) + 1만큼, 다음 턴에 무작위 아군 하나에게 피해량 증가 1, 신속 1 효과 중 하나를 부여.
</p>
<p><b>+</b> :
턴 종료 시 파열 상태인 적의 수(환상체일 경우, 모든 부위) + 3만큼, 다음 턴에 무작위 아군 하나에게 피해량 증가 1, 신속 1 효과 중 하나를 부여.
</p>
<p><b>++</b> :
턴 종료 시 파열 상태인 적의 수(환상체일 경우, 모든 부위) + 3만큼, 다음 턴에 무작위 아군 하나에게 피해량 증가 1, 신속 1 효과를 부여.
</p>
        `
    },

                    {
        id: "Rupture-006",
        category: "파열",
        name: "쾌감",
        grade: 4,
        icon: "images/Rupture/Thrill.webp",
        short_desc: "1턴 뒤 추가데미지",
        details: `
            <p>	
<b>기본효과</b> :
턴 시작 시, 적 전체(환상체일 경우, 모든 부위)에게 파열 위력 3, 파열 횟수 3 부여
턴 종료 시, 모든 적(환상체일 경우, 부위마다 별도로 판정)이 (파열 위력 × 파열 횟수) 만큼의 탐식 피해를 입음. (파열 횟수 최대 5까지 적용)
</p>
<p><b>+</b> :
턴 시작 시, 적 전체(환상체일 경우, 모든 부위)에게 파열 위력 4, 파열 횟수 3 부여
턴 종료 시, 모든 적(환상체일 경우, 부위마다 별도로 판정)이 (파열 위력 × 파열 횟수) 만큼의 탐식 피해를 입음. (파열 횟수 최대 7까지 적용)
</p>
<p><b>++</b> :
턴 시작 시, 적 전체(환상체일 경우, 모든 부위)에게 파열 위력 6, 파열 횟수 3 부여
턴 종료 시, 모든 적(환상체일 경우, 부위마다 별도로 판정)이 (파열 위력 × 파열 횟수) 만큼의 탐식 피해를 입음. (파열 횟수 최대 10까지 적용)
</p>
        `
    },

                    {
        id: "Rupture-007",
        category: "파열",
        name: "장미 면류관",
        grade: 1,
        icon: "images/Rupture/Crown of Rose.webp",
        short_desc: "스택보조",
        details: `
            <p>	
<b>기본효과</b> :
턴 시작 시, 무작위 적 하나(환상체일 경우, 모든 부위)에게 파열 위력 4 부여.
탐식 완전 공명을 발동하였다면 전투 시작 시, 모든 적에게 파열 위력 2 부여.
</p>
<p><b>+</b> :
턴 시작 시, 무작위 적 둘(환상체일 경우, 모든 부위)에게 파열 위력 4 부여.
탐식 완전 공명을 발동하였다면 전투 시작 시, 모든 적에게 파열 위력 3 부여.
</p>
<p><b>++</b> :
턴 시작 시, 무작위 적 셋(환상체일 경우, 모든 부위)에게 파열 위력 4 부여.
탐식 완전 공명을 발동하였다면 전투 시작 시, 모든 적에게 파열 위력 4 부여.
</p>
        `
    },

                    {
        id: "Rupture-008",
        category: "파열",
        name: "뼈 말뚝",
        grade: 1,
        icon: "images/Rupture/Bone Stake.webp",
        short_desc: "우선도 낮음, 부가 효과",
        details: `
            <p>	
파열 효과가 적이 보유한 보호막에 입히는 피해량 +100%
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

    {
        id: "Essential-001",
        category: "필수범용",
        name: "인연 조각",
        grade: 4,
        icon: "images/Essential/Piece of Relationship.webp",
        short_desc: "레벨 최대 10증가",
        details: `
            <p><strong>기본 효과</strong> :
획득 시, 편성 인격의 레벨 5 증가.</p>
            <p><strong>+</strong> :
획득 시, 편성 인격의 레벨 7 증가.</p>
            <p><strong>++</strong> :
획득 시, 편성 인격의 레벨 10 증가.</p>
        `
    },
    {
        id: "Essential-002",
        category: "필수범용",
        name: "달의 기억",
        grade: 5,
        icon: "images/Essential/LunarMemory.webp",
        recipe:['(', {icon: "images/Burn/Fragment of Hellfire.webp", grade : 4},',', {icon: "images/Bleed/Fragment of Allurement.webp", grade : 4},',', {icon: "images/Tremor/Fragment of Inertia.webp", grade : 4},',', {icon: "images/Poise/Fragment of Conceit.webp", grade : 4},',',{icon: "images/Charge/Fragment of Friction.webp", grade : 4},',',  {icon: "images/Rupture/Fragment of Desire.webp", grade : 4},',', {icon: "images/Sinking/Fragment of Decay.webp", grade : 4},')','중 3개','+',{icon: "images/Slash/Sundered Memory.webp", grade : 4},'+',{icon: "images/Pierce/Punctured Memory.webp", grade : 4},'+',{icon: "images/Blunt/Crushed Memory.webp", grade : 4}],
        short_desc: "진짜개쎄짐",
        details: `
            <p><b>조합식:</b> 잘려나간 기억 + 구멍난 기억 + 바스라진 기억 + 조각 중 택 2종</p><p>
모든 적(환상체일 경우, 모든 부위)의 물리 내성과 속성 내성이 취약 상태가 됨.
</p>
        `
    },
    {
        id: "Essential-003",
        category: "필수범용",
        name: "믿음",
        grade: 4,
        icon: "images/Essential/Faith.webp",
        short_desc: "정신력 보정",
        details: `
            <p>
더하기 코인을 굴리는 스킬을 사용할 경우, 다음 턴 시작 시 해당 아군의 정신력이 최댓값으로 적용. (침식된 대상은 적용되지 않음)
</p>
        `
    },
    {
        id: "Essential-004",
        category: "필수범용",
        name: "거짓 광배",
        grade: 4,
        icon: "images/Essential/False Halo.webp",
        short_desc: "점진적 뎀증",
        theme: "<b>하드 난이도, '1호선' 한정</b>",
        details: `
            <p><strong>기본 효과</strong> :
공격 적중시마다 참선 1 얻음. (스킬 당 2회)
자신이 이번 턴에 적에게 스킬로 피격당한 상태면, 얻는 참선 +1.</p>
            <p><strong>+</strong> :
공격 적중시마다 참선 1 얻음. (스킬 당 3회)
자신이 이번 턴에 적에게 스킬로 피격당한 상태면, 얻는 참선 +1.</p>
            <p><strong>++</strong> :
공격 적중시마다 참선 2 얻음. (스킬 당 3회)
자신이 이번 턴에 적에게 스킬로 피격당한 상태면, 얻는 참선 +1.</p>
        `
    },
    {
        id: "Essential-005",
        category: "필수범용",
        name: "굴레",
        grade: 4,
        icon: "images/Essential/Bridle.webp",
        short_desc: "체력 증가",
        theme: "<b>하드 난이도, '2호선' 한정</b>",
        details: `
            <p><strong>기본 효과</strong> :
스테이지 시작 시 (현재 층 x 2)%만큼 모든 아군의 최대 체력이 증가 (최대 20%)</p>
            <p><strong>+</strong> :
스테이지 시작 시 (현재 층 x 3)%만큼 모든 아군의 최대 체력이 증가 (최대 30%)</p>
            <p><strong>++</strong> :
스테이지 시작 시 (현재 층 x 5)%만큼 모든 아군의 최대 체력이 증가 (최대 50%)</p>
        `
    },
    {
        id: "Essential-006",
        category: "필수범용",
        name: "날카로운 실과 바늘",
        grade: 3,
        icon: "images/Essential/Sharp Needle & Thread.webp",
        short_desc: "추가 데미지 (광역기 시너지)",
        theme: "<b>'헬스 치킨' 한정</b>",
        details: `
            <p>
매 턴마다 처음으로 피해를 입힌 스킬의 (피해량 / 2)만큼 추가 고정 피해를 입힘.
</p>
        `
    },
    {
        id: "Essential-007",
        category: "필수범용",
        name: "주홍 나방떼",
        grade: 2,
        icon: "images/Essential/Eclipse of Scarlet Moths.webp",
        short_desc: "추가 데미지(광역기 시너지)",
        details: `
            <p>
턴 시작 시, 처음으로 적에게 피해를 입힌 공격 스킬의 피해량 절반만큼 무작위 대상 하나에게 고정 피해를 입힘.
색욕 속성의 공격 스킬을 사용할 경우, 효과가 강화되어 무작위 대상 둘에게 고정 피해를 입힘.
</p>
        `
    },
    {
        id: "Essential-008",
        category: "필수범용",
        name: "탱고 닭양념장",
        grade: 3,
        icon: "images/Essential/Tango Marinade.webp",
        short_desc: "합위력 증가",
        theme: "<b>'헬스 치킨' 한정</b>",
        details: `
            <p>
대상보다 속도가 높다면, 합 위력 (속도 / 3)만큼 추가 (최대 3).
</p>
        `
    },
    {
        id: "Essential-009",
        category: "필수범용",
        name: "여우비",
        grade: 3,
        icon: "images/Essential/Sunshower.webp",
        short_desc: "스킬 위력 증가",
        details: `
            <p>
나태 완전 공명을 발동하였거나 공격 가중치가 2 이상인 스킬을 사용하는 경우 발동.
전투 시작 시, 아군 전체 스킬 위력 +2.
</p>
        `
    },
    {
        id: "Essential-010",
        category: "필수범용",
        name: "특별 계약",
        grade: 3,
        icon: "images/Essential/Special Contract.webp",
        short_desc: "보스 체력 비례 추뎀",
        details: `
            <p>
전투 중 피해를 가하여 적이 흐트러질 경우, 대상의 최대 체력 33%만큼 (환상체일 경우, 해당 부위) 고정 체력 피해를 입히고 다음 턴에 취약 2 부여. (전투당 1회 발동)
</p>
        `
    },
    {
        id: "Essential-011",
        category: "필수범용",
        name: "카르밀라",
        grade: 2,
        icon: "images/Essential/Carmilla.webp",
        short_desc: "잡몹 체력 비례 추뎀",
        details: `
            <p><strong>기본 효과</strong> :
전투 스테이지 입장 시, 환상체 이외의 모든 적에게 최대 체력 20%만큼 고정 피해를 입힘.</p>
            <p><strong>+</strong> :
집중 전투 방식이 아닌 전투 스테이지 입장 시, 모든 적에게 최대 체력 25%만큼 고정 피해를 입힘.</p>
            <p><strong>++</strong> :
집중 전투 방식이 아닌 전투 스테이지 입장 시, 모든 적에게 최대 체력 30%만큼 고정 피해를 입힘.</p>
        `
    },
    {
        id: "Essential-012",
        category: "필수범용",
        name: "환상 사냥",
        grade: 3,
        icon: "images/Essential/Illusory Hunt.webp",
        short_desc: "피해량 증가",
        details: `
            <p>
집중 전투 방식의 전투 스테이지 입장 시, 아군 전체에게 피해량 증가 2 부여.
</p>
        `
    },
    {
        id: "Essential-013",
        category: "필수범용",
        name: "블러디 가젯",
        grade: 1,
        icon: "images/Essential/Bloody Gadget.webp",
        short_desc: "피해량 증가",
        details: `
            <p><strong>기본 효과</strong> :
턴 시작 시, 무작위 아군 하나가 피해량 증가 2를 얻음.
색욕 속성 스킬을 보유한 아군에게 우선적으로 적용되며, 이 경우에는 피해량 증가 1을 추가로 얻음.</p>
            <p><strong>+</strong> :
턴 시작 시, 무작위 아군 하나가 피해량 증가 2를 얻음.
색욕 속성 스킬을 보유한 아군에게 우선적으로 적용되며, 이 경우에는 피해량 증가 2를 추가로 얻음.</p>
            <p><strong>++</strong> :
턴 시작 시, 무작위 아군 둘이 피해량 증가 2를 얻음.
색욕 속성 스킬을 보유한 아군에게 우선적으로 적용되며, 이 경우에는 피해량 증가 2를 추가로 얻음.</p>
        `
    },
    {
        id: "Essential-014",
        category: "필수범용",
        name: "녹슨 기념 주화",
        grade: 3,
        icon: "images/Essential/Rusty Commemorative Coin.webp",
        short_desc: "단일코인 재사용",
        details: `
            <p>
전투 시작 시 처음으로 사용된 아군의 단일 코인 스킬로 대상이 되는 적이 아무도 사망하지 않았다면, 해당 스킬을 한 번 더 사용함.
단일 코인 스킬 또는 나태 속성의 스킬로 적을 처치한 경우, 해당 아군이 스킬 위력 +1.
</p>
        `
    },
    {
        id: "Essential-015",
        category: "필수범용",
        name: "대기만성형 타투",
        grade: 2,
        icon: "images/Essential/Late-bloomer’s Tattoo.webp",
        short_desc: "단일코인 오만인격 강화",
        details: `
            <p>
단일 코인 스킬 또는 오만 속성의 스킬을 사용하여 적에게 적중 시, 다음 턴에 해당 아군이 공격 레벨 증가 2, 방어 레벨 증가 2 얻음(최대 5).
</p>
        `
    },
    {
        id: "Essential-016",
        category: "필수범용",
        name: "잿빛 코트",
        grade: 2,
        icon: "images/Essential/Grey Coat.webp",
        short_desc: "광역기 피해량 증가",
        details: `
            <p>
공격 가중치가 2 이상인 스킬을 사용하여 적에게 적중 시, 가하는 피해량 +20%.
공격 가중치가 2 이상인 스킬 또는 우울 속성 스킬을 사용하여 적에게 적중 시, 입힌 피해량의 20%만큼 해당 아군이 체력을 회복.
</p>
        `
    },
    {
        id: "Essential-017",
        category: "필수범용",
        name: "환상통",
        grade: 3,
        icon: "images/Essential/Phantom Pain.webp",
        short_desc: "단일기 피해량증가 / 우울완전공명시 공렙증",
        details: `
            <p>
공격 가중치가 1인 스킬을 사용할 경우, 가하는 피해량 +15%.
우울 완전 공명을 발동하였다면 전투 시작 시, 모든 아군이 공격 레벨 증가 2를 얻음.
</p>
        `
    },
    {
        id: "Essential-018",
        category: "필수범용",
        name: "저주 인형",
        grade: 1,
        icon: "images/Essential/Voodoo Doll.webp",
        short_desc: "적 위력감소",
        details: `
            <p><strong>기본 효과</strong> :
턴 시작 시, 적 전체에게 3만큼 질투 피해를 입힘.
대상의 체력이 33% 미만이면 위력 감소 1 부여.</p>
            <p><strong>+</strong> :
턴 시작 시, 적 전체에게 4만큼 질투 피해를 입힘.
대상의 체력이 50% 미만이면 위력 감소 1 부여.</p>
            <p><strong>++</strong> :
턴 시작 시, 적 전체에게 5만큼 질투 피해를 입힘.
대상의 체력이 50% 미만이면 위력 감소 2 부여.</p>
        `
    },
    {
        id: "Cost-001",
        category: "코스트범용",
        name: "프레스티지 카드",
        grade: 3,
        icon: "images/Cost/Prestige Card.webp",
        short_desc: "에깊 구매 비용 감소",
        details: `
            <p>
상점에서 E.G.O 기프트 구매 비용 30% 감소
</p>
        `
    },
    {
        id: "Cost-002",
        category: "코스트범용",
        name: "체험형 플랜 가이드",
        grade: 3,
        icon: "images/Cost/Trial Plan Guide.webp",
        short_desc: "에깊 강화 비용 감소",
        details: `
            <p>
상점에서 스킬 교체 비용 30% 감소
</p>
        `
    },

    {
        id: "Cost-003",
        category: "코스트범용",
        name: "황금색 항아리",
        grade: 2,
        icon: "images/Cost/Golden Urn.webp",
        short_desc: "전투 승리 보상 코스트 증가",
        details: `
            <p>
전투 승리 시 획득하는 코스트 20% 증가. (시작 버프, 다른 E.G.O 기프트의 영향을 받지 않음)
</p>
        `
    },
    
    {
        id: "Cost-004",
        category: "코스트범용",
        name: "게걸스러운 망치",
        grade: 2,
        icon: "images/Cost/Voracious Hammer.webp",
        short_desc: "죽인 적 수만큼 코스트 증가",
        details: `
            <p>
전투 승리 시, (사망한 적의 수 x 3)만큼 코스트 획득.
</p>
        `
    },

    {
        id: "Cost-005",
        category: "코스트범용",
        name: "생존의 이정표",
        grade: 2,
        icon: "images/Cost/Milepost of Survival.webp",
        short_desc: "층 보스 클리어 코스트 증가",
        details: `
            <p>
층 보스 클리어시, (80 + 해당 전투에 참가한 인격 수 × 5)만큼 코스트 추가로 획득 (전투 클리어 시 코스트 증가 효과는 적용되지 않음).
</p>
        `
    },

    {
        id: "Ego-001",
        category: "에고범용",
        name: "성대한 환대",
        grade: 3,
        icon: "images/Ego/Grand Welcome.webp",
        short_desc: "오만 특화 자원 수급",
        details: `
            <p>
스테이지 시작 시, 오만 속성 E.G.O 자원 +5.
적 사망 시, 오만 속성 E.G.O 자원 +2, 나머지 속성의 E.G.O 자원 중 무작위 2종 +1
</p>
        `
    },

    {
        id: "Ego-002",
        category: "에고범용",
        name: "커피와 종이학",
        grade: 2,
        icon: "images/Ego/Coffee and Cranes.webp",
        short_desc: "부족 자원 보충",
        details: `
            <p>
턴 시작 시, 직전 턴에 사용한 공격 스킬 속성에 해당하지 않는 나머지 모든 속성의 E.G.O 자원 중 무작위 하나 +1.
사용한 공격 스킬 속성 중 색욕이 존재할 경우, 효과가 강화되어 직전 턴에 사용한 공격 스킬 속성에 해당하지 않는 나머지 모든 속성의 E.G.O 자원 전부 +1.
</p>
        `
    },

    {
        id: "Ego-003",
        category: "에고범용",
        name: "오라클",
        grade: 2,
        icon: "images/Ego/Oracle.webp",
        short_desc: "자원의 재분배",
        details: `
            <p>
턴 종료 시, 제일 많이 보유한 무작위 E.G.O 자원 하나를 제일 적게 보유한 무작위 E.G.O 자원 하나로 변경.
</p>
        `
    },

    {
        id: "Ego-004",
        category: "에고범용",
        name: "플라스크 속의 아이",
        grade: 2,
        icon: "images/Ego/Child within a Flask.webp",
        short_desc: "모든 자원 수급",
        details: `
            <p>
스테이지 시작 시, 모든 속성의 E.G.O 자원 +1.
</p>
        `
    },

    {
        id: "Ego-005",
        category: "에고범용",
        name: "도착증",
        grade: 1,
        icon: "images/Ego/Perversion.webp",
        short_desc: "자원 추가 획즉",
        details: `
            <p>
스킬을 사용하여 적을 처치한 경우, 사용한 스킬 속성의 E.G.O 자원 +1.
사용한 스킬 속성이 분노일 경우, 효과가 강화되어 해당 아군이 보유한 모든 스킬 속성의 E.G.O 자원 +1.
</p>
        `
    },

    {
        id: "Ego-006",
        category: "에고범용",
        name: "쪽빛 지포라이터",
        grade: 1,
        icon: "images/Ego/Blue Zippo Lighter.webp",
        short_desc: "우울 특화 자원 수급",
        details: `
            <p>
턴 시작 시, 우울 속성 E.G.O 자원 +1, 나머지 속성의 E.G.O 자원 중 무작위 2종 +1.
</p>
        `
    },

    {
        id: "Ego-007",
        category: "에고범용",
        name: "디스크 파편",
        grade: 3,
        icon: "images/Ego/Disk Fragment.webp",
        short_desc: "EGO 사용시 자원 획득",
        details: `
            <p>
턴 시작 시, 이전 턴에 사용한 탐식 속성 이외의 E.G.O 스킬 횟수만큼 무작위 E.G.O 자원 +1.
탐식 속성 E.G.O 스킬을 사용한 경우에는 효과가 강화되어, 사용한 탐식 속성 E.G.O 스킬 횟수만큼 무작위 E.G.O 자원 +3.
</p>
        `
    },

    {
        id: "Heal-001",
        category: "힐범용",
        name: "휴대용 구급상자",
        grade: 3,
        icon: "images/Heal/First-aid Kit.webp",
        short_desc: "50% 이하 25% 회복",
        details: `
            <p>
턴 시작 시, 체력이 50% 이하인 아군 한 명의 체력을 최대 체력의 25%만큼 회복. (단, 사망 시에는 발동하지 않으며 전투당 1회 발동)
</p>
        `
    },

    {
        id: "Heal-002",
        category: "힐범용",
        name: "진통제",
        grade: 2,
        icon: "images/Heal/Painkiller.webp",
        short_desc: "흐트 보호3 12.5%힐",
        details: `
            <p>
턴 시작 시 흐트러짐 상태인 아군이 있을 경우, 최대 체력의 12.5%만큼 회복하고 이번 턴 동안 보호 3 얻음.
</p>
        `
    },
    {
        id: "Heal-003",
        category: "힐범용",
        name: "혈액 포집팩",
        grade: 1,
        icon: "images/Heal/Phlebotomy Pack.webp",
        short_desc: "적 공격 적중시 12.5%힐",
        details: `
            <p>
스킬을 사용하여 적에게 피해를 입힌 경우, 해당 아군이 잃은 체력의 12.5%만큼 체력을 회복(인격마다 턴당 1회 발동)
사용한 스킬 속성이 분노일 경우, 효과가 강화되어 잃은 체력의 25%만큼 체력을 회복.
</p>
        `
    },
    {
        id: "Heal-004",
        category: "힐범용",
        name: "귀로",
        grade: 2,
        icon: "images/Heal/Homeward.webp",
        short_desc: "입장시 12%힐",
        details: `
            <p>
전투 스테이지 입장 시, 전투에 참여한 모든 아군이 최대 체력의 12%만큼 체력을 회복
</p>
        `
    },
    {
        id: "Heal-005",
        category: "힐범용",
        name: "편견",
        grade: 1,
        icon: "images/Heal/Prejudice.webp",
        short_desc: "첫턴 1인 15%힐 / 오만완전공명 추가힐",
        details: `
            <p>
스테이지 첫 턴 시작 시, 가장 체력이 적은 아군이 최대 체력의 15%만큼 체력을 회복.
오만 완전 공명을 발동하였다면 전투 시작 시, 가장 체력이 적은 아군이 잃은 체력의 12.5%만큼 체력을 회복.
</p>
        `
    },
    {
        id: "Heal-006",
        category: "힐범용",
        name: "문자 석판",
        grade: 1,
        icon: "images/Heal/Lithograph.webp",
        short_desc: "적 흐트시 5% 회복",
        details: `
            <p>
적이 흐트러짐 상태에 빠질 때마다 아군 중 가장 체력이 적은 인격이 최대 체력의 5%만큼 체력을 회복.
회복 효과를 받는 인격이 탐식 속성 스킬을 보유한 경우, 효과가 강화되어 최대 체력의 10%만큼을 회복.
</p>
        `
    },
    {
        id: "Plus-001",
        category: "부가범용",
        name: "오래된 조각상",
        grade: 4,
        icon: "images/Plus/Ancient Effigy.webp",
        short_desc: "속도 증가",
        details: `
            <p>
턴 시작 시, 속도가 제일 빠른 아군 중 하나를 지정하고 다음 턴에 대상에게 신속 5 부여.
다음 턴 시작 시, 오래된 조각상 효과를 받는 아군을 제외한 나머지 아군 중 속도가 제일 빠른 아군 하나를 지정하여 기프트 효과를 다시 적용 (대상으로 지정할 다른 아군이 없을 경우, 효과 소멸).
</p>
        `
    },
    {
        id: "Plus-002",
        category: "부가범용",
        name: "비밀 유지 서약서",
        grade: 4,
        icon: "images/Plus/Non-disclosure Agreement.webp",
        short_desc: "무작위 1명 피증",
        details: `
            <p>
턴 시작 시, 무작위 아군 하나의 가하는 피해량이 10% 증가 (비밀 유지 서약서 효과 해제 전까지 유지).
해당 아군이 스킬을 사용하여 적에게 적중 시 체력 피해를 줄 때마다 가하는 피해량이 10%씩 증가하여 최대 40%까지 증가.
대상이 체력 피해를 받을 경우 해당 기프트의 효과가 해제되고 다음 턴 시작 시, 다시 무작위 다른 아군 하나에게 기프트 효과를 다시 적용 (대상으로 지정할 다른 아군이 없을 경우, 효과 소멸).
</p>
        `
    },
    {
        id: "Plus-003",
        category: "부가범용",
        name: "뱀 허물",
        grade: 2,
        icon: "images/Plus/Snake Slough.webp",
        short_desc: "방렙증, 공렙증",
        theme: "<b>하드 난이도, '1호선' 한정</b>",
        details: `
            <p><strong>기본 효과</strong> :
턴 시작시, 모든 아군이 방어 레벨 증가 2 얻음.
각 아군이 (자신의 방어 레벨 증가/4)만큼 공격 레벨이 증가함. (최대 10)</p>
            <p><strong>+</strong> :
턴 시작시, 모든 아군이 방어 레벨 증가 4 얻음.
각 아군이 (자신의 방어 레벨 증가/3)만큼 공격 레벨이 증가함. (최대 10)</p>
            <p><strong>++</strong> :
턴 시작시, 모든 아군이 방어 레벨 증가 4 얻음.
각 아군이 (자신의 방어 레벨 증가/2)만큼 공격 레벨이 증가함. (최대 10)</p>
        `
    },
    {
        id: "Plus-004",
        category: "부가범용",
        name: "치프 버틀러의 비급서",
        grade: 3,
        icon: "images/Plus/Chief Butler's Secret Arts.webp",
        short_desc: "적 속박, 공렙증, 정신력 회복",
        theme: "<b>'어느 세계' 한정</b>",
        details: `
            <p>
웨이브 첫 턴 시작 시, 속도가 제일 낮은 적 하나(환상체일 경우, 무작위 부위)를 선택하여 다음 턴부터 5턴 동안 속박 5 부여.
합 승리 시 대상보다 속도가 높을 경우, 대상과의 속도 차이만큼 정신력을 회복하고, 그 수치의 절반만큼 공격 레벨이 증가 (해당 스킬에만 적용되며, 공격 레벨 증가량 최대 3).
</p>
        `
    },
    {
        id: "Plus-005",
        category: "부가범용",
        name: "찰랑이는 연료통",
        grade: 3,
        icon: "images/Plus/Swishing Fuel Tank.webp",
        short_desc: "2,4번 확률 부활",
        theme: "<b>'심야청소' 한정</b>",
        details: `
            <p>
[편성 순서 2, 4번 인격 전용 효과]
체력 0이 되는 피해를 받으면 60% 확률로 해당 피해를 받지 않고, 체력을 30 회복함. (전투당 1회 발동)
아래 상황에서는 사망 방지 및 회복 효과가 발동하지 않음
- 피격 시 스킬 피해량이 자신의 최대 체력을 초과
- 체력 회복 감소 효과를 보유
</p>
        `
    },
    {
        id: "Plus-006",
        category: "부가범용",
        name: "원목 술잔",
        grade: 3,
        icon: "images/Plus/Hardwood Liquor Cup.webp",
        short_desc: "합 패배 보정, 파불코 피증",
        theme: "<b>하드 난이도, '육참골단 BokGak' 한정</b>",
        details: `
            <p>
합 패배 시, 보호 1 얻고 정신력 3 ~ 6만큼 회복 (인격 별로 턴 당 1회).
합에서 패배한 스킬의 파괴 불가 코인 효과(E.G.O 스킬 제외)로 적 공격 시, 더하기 코인 스킬이면 더하기 코인 위력 +(3 / 코인 수), 피해량 +20% (더하기 코인 위력 증가값 최소 1), 빼기 코인이면, 피해량 +40%.
</p>
        `
    },
    {
        id: "Plus-007",
        category: "부가범용",
        name: "긴급 부여형 수사관 배지",
        grade: 2,
        icon: "images/Plus/Emergency Investigator Badge.webp",
        short_desc: "1~3번 인격 부활",
        theme: "<b>하드 난이도, '시간살인시간 BokGak' 한정</b>",
        details: `
            <p><strong>기본 효과</strong> :
[편성 순서 3번 인격 전용 효과]
체력이 0이 될 때, 체력이 1 미만으로 감소하지 않고, 전체 체력의 80%만큼 즉시 회복. 흐트러짐 상태 해제 (전투마다 인격당 1회 발동, 소수점 올림)
E.G.O 기프트의 효과 발동 시 다음 턴부터 스테이지 동안 턴 시작 시 공격 위력 증가 2, 취약 1 얻음
T사 직원이면, 시간 대여를 얻을 때 1 추가로 얻음
T사 직원이면, 대상에게 시간 유예가 있으면, 공격 스킬로 가하는 피해량 +10%</p>
            <p><strong>+</strong> :
[편성 순서 2번, 3번 인격 전용 효과]
체력이 0이 될 때, 체력이 1 미만으로 감소하지 않고, 전체 체력의 80%만큼 즉시 회복. 흐트러짐 상태 해제 (전투마다 인격당 1회 발동, 소수점 올림)
E.G.O 기프트의 효과 발동 시 다음 턴부터 스테이지 동안 턴 시작 시 공격 위력 증가 2, 취약 1 얻음
T사 직원이면, 시간 대여를 얻을 때 1 추가로 얻음
T사 직원이면, 대상에게 시간 유예가 있으면, 공격 스킬로 가하는 피해량 +12.5%</p>
            <p><strong>++</strong> :
[편성 순서 1번, 2번, 3번 인격 전용 효과]
체력이 0이 될 때, 체력이 1 미만으로 감소하지 않고, 전체 체력의 80%만큼 즉시 회복. 흐트러짐 상태 해제 (전투마다 인격당 1회 발동, 소수점 올림)
E.G.O 기프트의 효과 발동 시 다음 턴부터 스테이지 동안 턴 시작 시 공격 위력 증가 2 얻음
T사 직원이면, 시간 대여를 얻을 때 2 추가로 얻음
T사 직원이면, 대상에게 시간 유예가 있으면, 공격 스킬로 가하는 피해량 +15%</p>
        `
    },
    {
        id: "Plus-008",
        category: "부가범용",
        name: "경멸의 시선의 경멸",
        grade: 2,
        icon: "images/Plus/Contempt of the Gaze of Contempt.webp",
        short_desc: "1,6번 피해량 증가",
        theme: "<b>하드 난이도, '3호선' 한정</b>",
        details: `
            <p><strong>기본 효과</strong> :
[편성 6번 인격 전용 효과]
전투 시작 시, 자신을 타겟팅한 적의 공격 스킬당 가하는 피해량 +10% (최대 20%)
전투 시작 시 2개 이상의 공격 스킬의 타겟이 되었으면, 자신을 타겟팅한 적에게 타겟팅한 스킬 수만큼 체력 고정 피해와 정신력 피해를 줌. (최대 3. 아군에게는 피해를 주지 않음)</p>
            <p><strong>+</strong> :
[편성 6번 인격 전용 효과]
전투 시작 시, 자신을 타겟팅한 적의 공격 스킬당 가하는 피해량 +10% (최대 20%)
전투 시작 시 2개 이상의 공격 스킬의 타겟이 되었으면, 자신을 타겟팅한 적에게 (2 x 타겟팅한 스킬 수)만큼 체력 고정 피해와 정신력 피해를 줌. (최대 5. 아군에게는 피해를 주지 않음)</p>
            <p><strong>++</strong> :
[편성 1번, 6번 인격 전용 효과]
전투 시작 시, 자신을 타겟팅한 적의 공격 스킬당 가하는 피해량 +10% (최대 30%)
전투 시작 시 2개 이상의 공격 스킬의 타겟이 되었으면, 자신을 타겟팅한 적에게 (2 x 타겟팅한 스킬 수)만큼 체력 고정 피해와 정신력 피해를 줌. (최대 10. 아군에게는 피해를 주지 않음)</p>
        `
    },
    {
        id: "Plus-009",
        category: "부가범용",
        name: "메트로놈",
        grade: 2,
        icon: "images/Plus/Metronome.webp",
        short_desc: "공렙증, 방렙증",
        theme: "<b>하드 난이도, '2호선' 한정</b>",
        details: `
            <p><strong>기본 효과</strong> :
홀수 턴이면, 모든 아군이 피해량 증가 1 얻음. 짝수 턴이면, 모든 아군이 보호 1 얻음.</p>
            <p><strong>+</strong> :
홀수 턴이면, 모든 아군이 피해량 증가 1 얻음. 짝수 턴이면, 모든 아군이 보호 1, 방어 레벨 증가 1 얻음.</p>
            <p><strong>++</strong> :
홀수 턴이면, 모든 아군이 피해량 증가 1, 공격 레벨 증가 1 얻음. 짝수 턴이면, 모든 아군이 보호 1, 방어 레벨 증가 1 얻음.</p>
        `
    }
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
                imageContainer.style.backgroundImage = "url('images/CategoryIcon/Back.webp')";
                
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

            // Function to create an operator/text element
            const createOperator = (text) => {
                const operator = document.createElement('span');
                operator.className = 'recipe-operator';
                operator.textContent = text;
                return operator;
            };

            // Add ingredients and operators from the recipe array
            item.recipe.forEach(recipeElement => {
                let ingredientData = null;

                // Check if the element is an item ID string
                if (typeof recipeElement === 'string') {
                    ingredientData = items.find(i => i.id === recipeElement);
                }
                
                // Check if it's a custom item object
                if (!ingredientData && typeof recipeElement === 'object' && recipeElement !== null) {
                    ingredientData = recipeElement;
                }

                if (ingredientData) {
                    // It's an item, create the icon
                    recipeContainer.appendChild(createRecipeItem(ingredientData));
                } else if (typeof recipeElement === 'string') {
                    // It's not an item ID, so treat as an operator string
                    recipeContainer.appendChild(createOperator(recipeElement));
                }
            });

            // Add '=' to show the result
            recipeContainer.appendChild(createOperator('='));

            // Add the final result item
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
