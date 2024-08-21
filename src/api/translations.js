export const regionTranslations = {
    SEOUL: "서울",
    BUSAN: "부산",
    DAEGU: "대구",
    INCHEON: "인천",
    GWANGJU: "광주",
    DAEJEON: "대전",
    ULSAN: "울산",
    SEJONG: "세종",
    GYEONGGI: "경기",
    GANGWON: "강원",
    CHUNGCHEONG: "충청",
    JEOLLA: "전라",
    GYEONGSANG: "경상",
    JEJU: "제주"
  };

export const approveStatusTranslations = {
WAITING: "대기중",
APPROVE: "수락됨",
REJECT: "거절됨",
CANCELLED: "취소됨",
};
  
  export const translateRegion = (region) => {
    return regionTranslations[region] || region;
  };
  export const translateApproveStatus = (approveStatus) => {
    return approveStatusTranslations[approveStatus] || approveStatus;
  };