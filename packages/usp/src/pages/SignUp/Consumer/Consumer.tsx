import * as styles from './styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { NavLink } from 'react-router-dom';



const steps = [
  '약관동의/인증',
  '사업자 공동 인증',
  '가입정보 입력',
  '가입완료',
];

function Consumer() {
  return (
    <section css={styles.container}>
      <div css={styles.content}>
        <Stack sx={{}}>
          <div className="tit">
            <h1>AICA 회원가입</h1>
          </div>
          <Stepper activeStep={1} alternativeLabel sx={{ mt : 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
        <Box sx={{mb: 7}}>
          <div className="sub_tit">
            <h2>사업자 회원가입</h2>
            <p>AICA 회원가입을 위해 약관에 동의해주세요.</p>
          </div>
          <FormGroup sx={{ mb: 1 }}>
            <FormControlLabel control={<Checkbox />} label="모든 약관에 동의합니다." />
          </FormGroup>
          <FormGroup css={styles.listbox}>
            <Box>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="AICA 이용약관" /><span>(필수) &gt;</span>
              </div>
              <div css={styles.errbox}>AICA 이용약관에 동의해주세요</div>
            </Box>
            <Box>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="AICA 개인정보 수집 및 이용동의" /><span>(필수) &gt;</span>
              </div>
            </Box>
            <Box>
              <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="AICA  개인정보 제3자 제공 동의" /><span>(필수) &gt;</span>
              </div>
            </Box>
            <Box>
              <div>
                <FormControlLabel control={<Checkbox />} label="마케팅 정보 수신동의" /><span>(필수) &gt;</span>
              </div>
            </Box>
          </FormGroup>
        </Box>
        <Box component="form"
          noValidate
          autoComplete="off"
          css={styles.singTextbox}>
          <div className='inputtxt'>
            사업자 확인 
          </div>
          <TextField
            required
            id="id" 
            label="사업자등록번호" 
            variant="outlined"
            fullWidth
          />
        </Box>
        <Stack spacing={2} direction="row" css={styles.btnGroup}>
          <Button variant="contained" type="button" className="linebtn">
            <NavLink to={'/consumer'}>
              {'이전'}
            </NavLink>
          </Button>
          <Button variant="contained" type="button">
            <NavLink to={'/consumer'}>
              {'사업자 공동 인증'}
            </NavLink>
          </Button>
        </Stack>
      </div>
    </section>
  );
}

export default Consumer;
