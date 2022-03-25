import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@mui/material';
import { Formik, Form } from 'formik';

import BasicInfo from './Forms/BasicInfo';
import AccountForm from './Forms/AccountForm';
import GradeForm from './Forms/GradeForm';
import EducationForm from './Forms/EducationForm';
import LocationForm from './Forms/LocationForm';
import SubjectForm from './Forms/SubjectForm';
import SalaryForm from './Forms/EducationForm';
import TimeForm from './Forms/TimeForm';
import CheckoutSuccess from './CheckoutSuccess';
import { makeStyles } from '@material-ui/styles';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';


const steps = ['帳戶', '基本資料', '學歷','公開試成績','可教範疇','可教地區','可教時間','薪金'];
const { formId, formField } = checkoutFormModel;

const useStyles = makeStyles({
  stepper: {
    Width : '20vm',
    Height : '20vw',
  },

});

function _renderStepContent(step) {

  switch (step) {
    case 0:
      return <LocationForm formField={formField} />;
    case 1:
      return <BasicInfo formField={formField} />;
    case 2:
      return <EducationForm formField={formField} />;
    case 3:
      return <GradeForm formField={formField} />;
    case 4:
      return <LocationForm formField={formField} />;
    case 5:
      return <SubjectForm formField={formField} />;
    case 6:
      return <TimeForm formField={formField} />;
    case 7:
      return <SalaryForm formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const classess = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} className={classess.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div >
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} >
                      Back
                    </Button>
                  )}
                  <div>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      
                    >
                      {isLastStep ? 'Place order' : 'Next'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
