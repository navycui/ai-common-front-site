import axios from 'shared/libs/axios';
export default () =>
  axios({
    url: '/member/api/login/refresh-token/member',
    method: 'post',
  });
