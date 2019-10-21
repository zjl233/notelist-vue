import axios from 'axios';

// 创建视频
const postNote = form => axios.post('/api/v1/notes', form).then(res => res.data);

// 读视频详情
const getNote = id => axios.get(`/api/v1/note/${id}`).then(res => res.data);

// 读取视频列表
const getNotes = (start, limit) => axios.get('/api/v1/notes', {params: {start, limit}}).then(res => res.data);

export {
  getNotes,
  getNote,
  postNote,
};