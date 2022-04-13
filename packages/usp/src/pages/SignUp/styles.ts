import { css } from '@emotion/react';

export const container = css`
  position: relative;
  background-color: #1f2437;
  height: 100vh;
`;
export const content = css`
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  padding: 200px 0;
  max-width: 1100px;
  margin: 0 auto;
  .tit {
    h1 {
    font-size: 43px;
    letter-spacing: -1.2px;
    }
    p{
      font-size: 14px;
      color: #8f929b;
      line-height: 30px;
      margin-bottom: 70px;
      letter-spacing: -0.6px;
    }
  }
  & .MuiCard-root{
    padding: 10px 20px 40px;
    text-align: center;
    min-width: 381px;
    letter-spacing: -1.2px;
    h3 {
      font-size: 20px;
      margin-bottom: 12px;
    }
    p {
      margin: 0;
    }
  }
  & .MuiGrid-item{
    > div {
      font-size: 18px;
      font-weight: bold;
    }
    > p {
      letter-spacing: -0.4px;
    }
  }
`;
export const signbtn = css`
  height: 60px;
  button{
    font-size: 16px;
    line-height: 1;
    border-radius: 50px;
    background-color: #4063ec;
    width: 220px;
    font-weight: bold;
    margin: 0 auto;
  }
`
