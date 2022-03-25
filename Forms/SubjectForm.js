import React from 'react';
import {Typography } from '@mui/material';
import BasicTabs from '../BasicTabs';


const experts = [
  "全科",
  "文科",
  "理科",
  "商科",
  "中文",
  "英文",
  "數學",
  "數學(M1)",
  "數學(M2)",
  "中國文學",
  "英國文學",
  "中國歷史",
  "世界歷史",
  "地理",
  "通識教育",
  "綜合科學",
  "綜合人文學",
  "附加數學",
  "純粹數學",
  "應用數學",
  "物理",
  "生物",
  "化學",
  "商業學",
  "會計",
  "經濟",
  "企業概論",
  "政府及公共事務",
  "數學及統計學",
  "BAFS",
];
const SubjectForm = (props) => {



  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <BasicTabs experts={experts}/>
    </React.Fragment>
  );
}
export default SubjectForm;