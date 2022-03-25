import React from 'react';
import { Grid, Typography } from '@mui/material';
import BasicTabs from '../BasicTabs';
import { InputField, CheckboxField, SelectField } from '../FormFields';



const 香港島 = [
  '中半山',	'薄扶林',	'中上環',	'西環',
  '灣仔',	'銅鑼灣',	'跑馬地',	'北角',
  '則魚涌','太古',	'筲箕灣','西灣河'	,'柴灣','小西灣',	'香港仔',
  '鴨利洲'	,'赤柱'
  
];
const 九龍 = [
  '美孚',	'荔枝角',	'長沙灣',	'深水步',
  '大角咀',	'旺角',	'何文田',	'油麻地',
  '佐敦',	'尖沙咀',	'土瓜灣',	'紅磡',
  '石硤尾',	'九龍塘',	'樂富',	'慈雲山',
  '黃大仙',	'鑽石山','新蒲崗',	'彩虹及牛池灣',	'牛頭角及九龍灣',
  '秀茂坪',	'觀塘',	'藍田','油塘',	'九龍城',];



  const LocationForm = (props) => {

    const {
      formField: {
        Place
      }
    } = props;


    <CheckboxField
      name={香港島}
      label={香港島}
    />
  
  return (
    <React.Fragment>
      <BasicTabs items1={香港島} items2={九龍}/>
    </React.Fragment>
  );
}
export default LocationForm;