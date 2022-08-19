const InternalMedicine= {
    "병원": "내과",
    "증상1": "콧물",
    "증상2": "기침",
    "증상3": "복합적 감기 증상",
    "증상4": "복부 통증",
    "증상5": "심장",
    "증상6": "명치 통증",
    "증상7": "위 통증",
    "증상8": "울렁거림 및 구토",
    "증상9": "컨디션 저하",
    "증상10": "발열"
}

const OTOLARYNGOLOGY= {
    "병원": "이비인후과",
    "증상1": "코가 자주 막힘",
    "증상2": "축농증",
    "증상3": "콧물 및 코막힘이 심함",
    "증상4": "비염",
    "증상5": "코골이가 심함",
    "증상6": "귀가 먹먹함",
    "증상8": "성대결절 의심증상",
    "증상7": "목이 쉬었음",
    "증상9": "참 삼킬때 어려움",
    "증상10": "목에서 피가 남"
}

const ORTHOPEDICS= {
    "병원": "정형외과",
    "증상1": "뼈가 부러짐",
    "증상2": "관절 통증",
    "증상3": "관절에서 소리 남",
    "증상4": "관절에 혹이 생김",
    "증상5": "담 걸림",
    "증상6": "허리를 제외한 사지가 이상함"
}
const NEUROSURGERY= {
    "병원": "신경외과",
    "증상1": "허리가 아픔",
    "증상2": "목이 아픔",
    "증상3": "거북목",
    "증상4": "숨쉬기 힘듬",
    "증상5": "목 디스크가 의심증상",
    "증상6": "쥐가 자주남",
    "증상7": "몸의 특정부분의 계속 저림"
}
// 내과
const InternalMedicine_keys = Object.keys(InternalMedicine); 
const InternalMedicine_values = Object.values(InternalMedicine);


var InternalMedicine_keys_arr = [];
var InternalMedicine_vals_arr = [];

for(var i=1; i < InternalMedicine_keys.length; i++){
    InternalMedicine_vals_arr.push(InternalMedicine_values[i]);
}


// 이비인후과
const OTOLARYNGOLOGY_keys = Object.keys(OTOLARYNGOLOGY); 
const OTOLARYNGOLOGY_values = Object.values(OTOLARYNGOLOGY);


var OTOLARYNGOLOGY_keys_arr = [];
var OTOLARYNGOLOGY_vals_arr = [];

for(var i=1; i < OTOLARYNGOLOGY_keys.length; i++){
    OTOLARYNGOLOGY_vals_arr.push(OTOLARYNGOLOGY_values[i]);
}


// 정형외과
const ORTHOPEDICS_keys = Object.keys(ORTHOPEDICS); 
const ORTHOPEDICS_values = Object.values(ORTHOPEDICS);


var ORTHOPEDICS_keys_arr = [];
var ORTHOPEDICS_vals_arr = [];

for(var i=1; i < ORTHOPEDICS_keys.length; i++){
    ORTHOPEDICS_vals_arr.push(ORTHOPEDICS_values[i]);
}


// 신경외과
const NEUROSURGER_keys = Object.keys(NEUROSURGERY); 
const NEUROSURGER_values = Object.values(NEUROSURGERY);


var NEUROSURGER_keys_arr = [];
var NEUROSURGER_vals_arr = [];

for(var i=1; i < NEUROSURGER_keys.length; i++){
    NEUROSURGER_vals_arr.push(NEUROSURGER_values[i]);
}


/**
 * 질문 변경
 */
    var plus1 = 1;
function change() {
    plus1;
    const InternalMedicineChange = document.getElementById('InternalMedicine');
    const OTOLARYNGOLOGYChange = document.getElementById('OTOLARYNGOLOGY');
    const ORTHOPEDICSChange = document.getElementById('ORTHOPEDICS');
    const NEUROSURGERChange = document.getElementById('NEUROSURGER');
    plus1 += 1;
    InternalMedicineChange.innerText = InternalMedicine_vals_arr[plus1];
    OTOLARYNGOLOGYChange.innerText = OTOLARYNGOLOGY_vals_arr[plus1];
    ORTHOPEDICSChange.innerText = ORTHOPEDICS_vals_arr[plus1];
    if(plus1 == 6) {
        ORTHOPEDICSChange.style.display ='none';
    }

    NEUROSURGERChange.innerText = NEUROSURGER_vals_arr[plus1];
    if(plus1 == 7) {
        NEUROSURGERChange.style.display ='none';
    }

    if(plus1 == 10) {
        hospital = "을 찾지 못했습니다."
        location.href = './result.html';
    }
}
