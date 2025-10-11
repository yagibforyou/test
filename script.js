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
        recipe:[{icon: "images/Sinking/Haunted Shoes.webp", grade : 2}, {icon: "images/Sinking/Frozen Cries.webp", grade : 2}],
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
