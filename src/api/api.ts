import instance from "./axios_interceptor";


// 공지사항
export const fetchNotices = async () => {

    const response = await instance.get(`/news/notices`);

    return response.data;
}
// 이벤트
export const fetchEvents = async () => {

    const response = await instance.get(`/news/events`);

    return response.data;
}

