import { css } from '@emotion/react';

export const container = css`
  position: relative;
`;

export const maincont01 = css`
  overflow: hidden;
  height: 840px;
  width: 100%;
  display: block;
  color: #fff;
  img {
    width: 100%;
    min-height: 840px;
  }
`;
export const maincont02 = css`
  height: 840px;
  background-color: #1F2437;
  color: #fff;
`;

export const btnstyle = css`
button{
  border-radius: 0;
  font-weight: Bold;
  font-size: 16px;
  padding: 16px 36px;
  letter-spacing: -0.4px;
}
button.lg{
  min-width: 200px;
}
button.md{
  border-radius: 4px;
  font-weight: normal;
  padding: 8px 16px;
}
.blue{
  background-color: #4063EC;
}
.gray{
  background-color: #ADAEB2;
}
.gray:hover{
  background-color: #9B9B9B;
}
.sky{
  background-color: #EBEFFD;
  color: #4063EC;
}
.sky:hover{
  background-color: #d4deff
}
`;
export const link = css`
  a{
    color: blue;
  }
`;
