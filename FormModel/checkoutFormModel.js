export default {
  formId: 'checkoutForm',
  formField: {
    Email: {
      name: 'Email',
      label: '電郵',
      requiredErrorMsg: 'Required'
    },  
    Password: {
      name: 'Password',
      label: '密碼',
      requiredErrorMsg: 'Required'
    },    
    ConfirmPassword: {
      name: 'ConfirmPassword',
      label: '確認密碼',
      requiredErrorMsg: 'Required'
    },    
    FindUs: {
      name: 'FindUs',
      label: '認識我們的途徑',
      requiredErrorMsg: 'Required'
    },    
    Name: {
      name: 'Name',
      label: '中或英文身份證全名',
      requiredErrorMsg: 'Required'
    },
    PhoneNo: {
      name: 'PhoneNo',
      label: '聯絡電話',
      requiredErrorMsg: 'Required'
    },
    Address: {
      name: 'Address',
      label: '固定住宅地址',
      requiredErrorMsg: 'Required'
    },
    EmergencyContact: {
      name: 'EmergencyContact',
      label: '緊急聯絡人姓名'
    },
    EmergencyPhone: {
      name: 'EmergencyPhone',
      label: '緊急聯絡人電話'
    },
    EmergencyRelationship: {
      name: 'EmergencyRelationship',
      label: '關係'
    },
    Nationality: {
      name: 'Nationality',
      label: '國藉',
      requiredErrorMsg: 'Required'
    },
    Language: {
      name: 'Language',
      label: '主要語言'
    },
    zipcode: {
      name: 'zipcode',
      label: 'Zipcode*',
      requiredErrorMsg: 'Zipcode is required',
      invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
    },
    country: {
      name: 'country',
      label: 'Country*',
      requiredErrorMsg: 'Country is required'
    },
    agreeWith: {
      name: 'agreeWith',
      label: '已閱讀並同意以上條款'
    },
    Occupation: {
      name: 'Occupation',
      label: '現時職業',
      requiredErrorMsg: 'Occupation is required'
    },
    YearOfExperience: {
      name: 'YearOfExperience',
      label: '補習年資',
      requiredErrorMsg: '補習年資 is required'
    },
    Experience: {
      name: 'Experience',
      label: '教育機構經驗',
      requiredErrorMsg: 'Experience is required'
    },
    HighestTeachingLevel: {
      name: 'HighestTeachingLevel',
      label: '最高可補年級',
      requiredErrorMsg: '最高可補年級 is required'
    },
    EducatoionLevel: {
      name: 'EducatoionLevel',
      label: '教育程度',
      requiredErrorMsg: '最高可補年級 is required'
    },
    Notes: {
      name: 'Notes',
      label: '是否有筆記提供',
      requiredErrorMsg: 'Notes is required'
    },
    SecondarySchool: {
      name: 'SecondarySchool',
      label: '就讀中學',
      requiredErrorMsg: '就讀中學 is required'
    },
    PrimarySchool: {
      name: 'PrimarySchool',
      label: '就讀小學',
      requiredErrorMsg: '就讀小學 is required'
    },
    SchoolCat: {
      name: 'SchoolCat',
      label: '中學類別',
      requiredErrorMsg: '中學類別 is required'
    },
    PublicExamGrade: {
      name: 'PublicExamGrade',
      label: '香港中學會考分數（六科總分）',
      requiredErrorMsg: '中學類別 is required'
    },
    University: {
      name: 'University',
      label: '就讀大學',
    },
    Major: {
      name: 'Major',
      label: '大學主修科目',
    },
    OtherCert: {
      name: 'OtherCert',
      label: '其他專業應可課程',
    },
    Year: {
      name: 'Year',
      label: '現時就讀年級',
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Name on card*',
      requiredErrorMsg: 'Name on card is required'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Card number*',
      requiredErrorMsg: 'Card number is required',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Expiry date*',
      requiredErrorMsg: 'Expiry date is required',
      invalidErrorMsg: 'Expiry date is not valid'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'CVV is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    }
  }
};
