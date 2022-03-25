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

export default function AccountForm(props) {
  const {
    formField: {
      Email,
      Password,
      ConfirmPassword,
      FindUs,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={Email.name} label={Email.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={Password.name} label={Password.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={ConfirmPassword.name} label={ConfirmPassword.label} fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <SelectField
            name={FindUs.name}
            label={FindUs.label}
            data={cities}
            fullWidth
          />
        </Grid>
        </Grid>
    </React.Fragment>
  );
}
