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

export default function SalaryForm(props) {
  const {
    formField: {
      Name,
      PhoneNo,
      Address,
      Nationality,
      Language,
      country
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={Name.name} label={Name.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={PhoneNo.name} label={PhoneNo.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={Address.name} label={Address.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SelectField
            name={Nationality.name}
            label={Nationality.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={Language.name}
            label={Language.label}
            data={states}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
