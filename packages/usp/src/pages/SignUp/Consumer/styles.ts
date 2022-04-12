import { css } from '@emotion/react';

export const container = css`
  position: relative;
  background-color: #1f2437;
  height: 100vh;
`;
export const content = css`
  color: #fff;
  padding: 200px 0;
  max-width: 1100px;
  margin: 0 auto;
  .tit {
    h1 {
    font-size: 43px;
    letter-spacing: -1.2px;
    }
  }
  .sub_tit {
    h2 {
    font-size: 32px;
    letter-spacing: -1.2px;
    }
    p{
      font-size: 14px;
      color: #8f929b;
      line-height: 30px;
      margin-bottom: 30px;
      letter-spacing: -0.6px;
    }
  }
  
  .MuiStepLabel-label.Mui-active,.MuiStepLabel-label.Mui-completed{
    color: #1CCDCC;
  }
  .MuiStepIcon-root.Mui-completed,.MuiStepIcon-root.Mui-active{
    color: #1CCDCC;
    .MuiStepIcon-text{
      font-weight: bold;
    }
  }
  .MuiFormGroup-root{
    display: block;
    position: relative;
    > div{
      flex: 0 0 50%;
      border-bottom: 1px solid #515668;
      padding: 10px 0;
    }
  }
  .MuiCheckbox-root{
    color: #fff;
  }
  .MuiFormControlLabel-root{
    color: #fff;
  }
  .MuiInputLabel-root{
    color:#fff;
  }
  .MuiStepIcon-root{
    border: 1px solid #fff;
    border-radius: 20px;
  }
  .MuiStepLabel-alternativeLabel{
    color: #fff;
  }
  .css-nen11g-MuiStack-root{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .Mui-checked{
    color: #fff;
  }
`;

export const listbox = css`
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;

export const errbox = css`
  position: absolute;
  text-align: right;
  color: #fedc00;
  right: 0;
  top: 0; 
  padding-top: 22px;
`;

export const singTextbox = css`
  display: flex;
  margin-bottom: 80px;
  .inputtxt{
    margin-top: 20px;
    width: 160px;
  }
  label{
    &.Mui-focused {
      color: #fff;
    }
  }
  .MuiOutlinedInput-root {
    color: #fff;
    fieldset {
      border-color: #707070;
    }
    &:hover{
      fieldset {
        border-color: #fff;
      }
    }
  }
`;

export const btnGroup = css`
  justify-content: center;
  > button{
    height: 60px;
    border-radius: 40px;
    width: 220px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5; 
    &.linebtn {
      border: 1px solid #fff;
      background-color: #1f2437;
    }
  }
`;