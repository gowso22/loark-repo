import instance from "./axios_interceptor";

// 공지사항
export const fetchNotices = async () => {
  const response = await instance.get(`/news/notices`);

  return response.data;
};
// 이벤트
export const fetchEvents = async () => {
  const response = await instance.get(`/news/events`);

  return response.data;
};

// 도가토
export const fetchGudian = async () => {
  const response = await instance.get(`/gamecontents/challenge-guardian-raids`);

  return response.data.Raids;
};

// 도비스
export const fetchAbyss = async () => {
  const response = await instance.get(`/gamecontents/challenge-abyss-dungeons`);

  return response.data;
};

// profile
export const fetchProfile = async () => {
  const response = await instance.get(`/armories/characters/대아름/profiles`);

  return response.data;
};

// equipment
export const fetchEquipment = async () => {
  const response = await instance.get(`/armories/characters/대아름/equipment`);

  return response.data;
};

// 무기 툴팁
export const fetchWeaponTooltip = async () => {
  const response = await instance.get(`/armories/characters/대아름/equipment`);

  const tip = await response.data[0].Tooltip;

  return tip;
};

// 투구 툴팁
export const fetchHelmetTooltip = async () => {
  const response = await instance.get(
    `/armories/characters/돌아오는날/equipment`
  );

  const tip = await response.data[1].Tooltip;

  return tip;
};
