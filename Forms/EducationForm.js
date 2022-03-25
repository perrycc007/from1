import React from 'react';
import { Grid, Typography } from '@mui/material';
import { InputField, CheckboxField, SelectField } from '../FormFields';

const cities = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'New York'
  },
  {
    value: '2',
    label: 'Chicago'
  },
  {
    value: '3',
    label: 'Saigon'
  }
];

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '11',
    label: 'Florida'
  },
  {
    value: '22',
    label: 'Michigan'
  },
  {
    value: '33',
    label: 'Texas'
  }
];

const countries = [
  {
    value: null,
    label: 'None'
  },
  {
    value: '111',
    label: 'United States'
  },
  {
    value: '222',
    label: 'Italy'
  },
  {
    value: '333',
    label: 'Vietnam'
  }
];

export default function EducationForm(props) {
  const {
    formField: {
      Occupation,
      YearOfExperience,
      Experience,
      HighestTeachingLevel,
      Notes,
      EducatoionLevel,
      SecondarySchool,
      PrimarySchool,
      SchoolCat,
      PublicExamGrade,
      University,
      Major,
      OtherCert,
      Year
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={Occupation.name} label={Occupation.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={YearOfExperience.name}
            label={YearOfExperience.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={Experience.name}
            label={Experience.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={HighestTeachingLevel.name}
            label={HighestTeachingLevel.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={Notes.name}
            label={Notes.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={SecondarySchool.name}
            label={SecondarySchool.label}
            data={cities}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SelectField
            name={EducatoionLevel.name}
            label={EducatoionLevel.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={SecondarySchool.name} label={SecondarySchool.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={PrimarySchool.name} label={PrimarySchool.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={SchoolCat.name}
            label={SchoolCat.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <InputField name={PublicExamGrade.name} label={PublicExamGrade.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={University.name} label={University.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={Major.name} label={Major.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={OtherCert.name} label={OtherCert.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SelectField
            name={Year.name}
            label={Year.label}
            data={states}
            fullWidth
          />
        </Grid>


      </Grid>
    </React.Fragment>
  );
}
