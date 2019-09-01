const form = {
    "personalInfo": {
        "name": "personalInfo",
        "required": true,
        "dependsOn": "",
        "title": "Personal information",
        "subtitle": "personalInfo.*.id == personalInfo[0].id ? ' ' : 'For family member'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "salutation",
                "model": "personalInfo.*.name.title",
                "type": "select",
                "label": "Title/Salutation",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "source": "references:salutations",
                "rowSize": 0.5
            },
            {
                "id": "gender",
                "model": "personalInfo.*.gender",
                "type": "option",
                "label": "Gender",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "M",
                        "label": "Male"
                    },
                    {
                        "data": "F",
                        "label": "Female"
                    }
                ],
                "rowSize": 0.5
            },
            {
                "id": "nameFirst",
                "model": "personalInfo.*.name.first",
                "type": "string",
                "maxLen": 60,
                "label": "First name",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "rowSize": 0.5
            },
            {
                "id": "nameLast",
                "model": "personalInfo.*.name.last",
                "type": "string",
                "maxLen": 60,
                "label": "Last name",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "rowSize": 0.5
            },
            {
                "id": "nameMiddle",
                "model": "personalInfo.*.name.middle",
                "type": "string",
                "maxLen": 30,
                "label": "Middle name",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "rowSize": 0.5
            },
            {
                "id": "date",
                "model": "personalInfo.*.dateOfBirth",
                "type": "date",
                "label": "Birth date",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "placeholder": "25 May 1977",
                "cascade": "personalInfo.*.workPay.occupations.0.employment,personalInfo.*.workPay.occupations.0.occupation,personalInfo.*.workPay.occupations.0.businessNature",
                "rowSize": 0.375
            },
            {
                "id": "age",
                "model": "personalInfo.*.age",
                "type": "label",
                "computedValue": "calculateAge(#this.personalInfo.*.dateOfBirth)",
                "label": "Age",
                "required": false,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "rowSize": 0.125
            },
            {
                "id": "countryCallingCode",
                "model": "personalInfo.*.phoneCountryCode",
                "type": "select",
                "label": "Phone Number Country Code",
                "required": "!!personalInfo.*.phone",
                "visible": true,
                "readOnly": false,
                "options": [
                    {
                        "data": "+63",
                        "label": "+63 -PH"
                    },
                    {
                        "data": "+1",
                        "label": "+1 -US"
                    },
                    {
                        "data": "other",
                        "label": "Oth -Others"
                    }
                ],
                "rowSize": 0.5
            },
            {
                "id": "phone",
                "model": "personalInfo.*.phone",
                "type": "phone",
                "defaultValue": "",
                "maxLen": 20,
                "label": "Phone Number",
                "required": "!personalInfo.*.mobile",
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "regex": "^[+]?\\d+$",
                "rowSize": 0.5
            },
            {
                "id": "countryCallingCode",
                "model": "personalInfo.*.mobileCountryCode",
                "type": "select",
                "label": "Mobile Number Country Code",
                "required": "!!personalInfo.*.mobile",
                "visible": true,
                "readOnly": false,
                "options": [
                    {
                        "data": "+63",
                        "label": "+63 -PH"
                    },
                    {
                        "data": "+1",
                        "label": "+1 -US"
                    },
                    {
                        "data": "other",
                        "label": "Oth -Others"
                    }
                ],
                "rowSize": 0.5
            },
            {
                "id": "phone",
                "model": "personalInfo.*.mobile",
                "type": "phone",
                "defaultValue": "",
                "maxLen": 20,
                "label": "Mobile Number",
                "required": "!personalInfo.*.phone",
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "regex": "^[+]?\\d+$",
                "rowSize": 0.5
            },
            {
                "id": "email",
                "model": "personalInfo.*.email",
                "type": "email",
                "maxLen": 50,
                "label": "Email",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "address",
                "model": "personalInfo.*.address",
                "type": "textarea",
                "maxLen": 200,
                "label": "Address",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "country",
                "model": "personalInfo.*.country",
                "type": "select",
                "label": "Country",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "cascade": "personalInfo.*.city,personalInfo.*.cityCustom",
                "source": "references:countries"
            },
            {
                "id": "city",
                "model": "personalInfo.*.city",
                "type": "select",
                "defaultValue": "personalInfo.*.country != '163' ? 13 : undefined",
                "label": "City",
                "required": "personalInfo.*.country",
                "visible": "personalInfo.*.country",
                "dataType": "string",
                "readOnly": false,
                "editable": "personalInfo.*.country == '163'",
                "source": "references:provinces[personalInfo.*.country]"
            },
            {
                "id": "cityCustom",
                "model": "personalInfo.*.cityCustom",
                "type": "string",
                "maxLen": 30,
                "required": "(personalInfo.*.country && personalInfo.*.city == 13)",
                "visible": "(personalInfo.*.country && personalInfo.*.city == 13)",
                "readOnly": false,
                "placeholder": "City"
            },
            {
                "id": "zipcode",
                "model": "personalInfo.*.zipcode",
                "type": "string",
                "maxLen": 10,
                "label": "Zip Code",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "regex": "^\\d+$"
            },
            {
                "id": "occupationCategory",
                "model": "personalInfo.*.workPay.occupations.0.employment",
                "type": "option",
                "label": "Occupation Category",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "cascade": "personalInfo.*.workPay.occupations.0.occupation,personalInfo.*.workPay.occupations.0.businessNature",
                "options": [
                    {
                        "data": "employed",
                        "label": "Employed"
                    },
                    {
                        "data": "selfemployed",
                        "label": "Self employed"
                    },
                    {
                        "data": "notemployed",
                        "label": "Not employed"
                    }
                ]
            },
            {
                "id": "businessNature",
                "model": "personalInfo.*.workPay.occupations.0.businessNature",
                "parent": "personalInfo.*.workPay.occupations.0.employment",
                "type": "select",
                "label": "Nature of work/business",
                "required": "personalInfo.*.workPay.occupations[0].employment == 'employed' || personalInfo.*.workPay.occupations[0].employment == 'selfemployed'",
                "visible": "personalInfo.*.workPay.occupations[0].employment == 'employed' || personalInfo.*.workPay.occupations[0].employment == 'selfemployed'",
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "Accommodation and Food Services",
                        "label": "Accommodation and Food Services"
                    },
                    {
                        "data": "Agriculture, Forestry, Fishing and Hunting",
                        "label": "Agriculture, Forestry, Fishing and Hunting"
                    },
                    {
                        "data": "Arts, Entertainment, and Recreation",
                        "label": "Arts, Entertainment, and Recreation"
                    },
                    {
                        "data": "Construction",
                        "label": "Construction"
                    },
                    {
                        "data": "Educational Services",
                        "label": "Educational Services"
                    },
                    {
                        "data": "Finance and Insurance",
                        "label": "Finance and Insurance"
                    },
                    {
                        "data": "Health Care and Social Assistance",
                        "label": "Health Care and Social Assistance"
                    },
                    {
                        "data": "Information",
                        "label": "Information"
                    },
                    {
                        "data": "Manufacturing",
                        "label": "Manufacturing"
                    },
                    {
                        "data": "Mining, Quarrying, and Oil and Gas Extraction",
                        "label": "Mining, Quarrying, and Oil and Gas Extraction"
                    },
                    {
                        "data": "Not Working",
                        "label": "Not Working"
                    },
                    {
                        "data": "Other Services (except Public Administration)",
                        "label": "Other Services (except Public Administration)"
                    },
                    {
                        "data": "Professional Services",
                        "label": "Professional Services"
                    },
                    {
                        "data": "Public Administration",
                        "label": "Public Administration"
                    },
                    {
                        "data": "Real Estate and Rental and Leasing",
                        "label": "Real Estate and Rental and Leasing"
                    },
                    {
                        "data": "Scientific and Technical Services",
                        "label": "Scientific and Technical Services"
                    },
                    {
                        "data": "Transportation and Warehousing",
                        "label": "Transportation and Warehousing"
                    },
                    {
                        "data": "Utilities",
                        "label": "Utilities"
                    },
                    {
                        "data": "Wholesale and Retail Trade",
                        "label": "Wholesale and Retail Trade"
                    }
                ]
            },
            {
                "id": "occupationList",
                "model": "personalInfo.*.workPay.occupations.0.occupation",
                "parent": "personalInfo.*.workPay.occupations.0.employment",
                "type": "select",
                "label": "Occupation",
                "required": "personalInfo.*.workPay.occupations[0].employment != ''",
                "visible": "personalInfo.*.workPay.occupations[0].employment != ''",
                "dataType": "string",
                "readOnly": false,
                "source": "references:occupations[personalInfo.*.workPay.occupations[0].employment]"
            },
            {
                "id": "policyHolderIndex",
                "model": "personalInfoSummary.policyHolderIndex",
                "type": "select",
                "defaultValue": "'0'",
                "label": "Who will be the owner of this policy?",
                "required": false,
                "visible": "personalInfo.*.id == personalInfo[0].id",
                "dataType": "string",
                "readOnly": false,
                "layout": "gradational"
            },
            {
                "id": "assuredIndex",
                "model": "personalInfoSummary.assuredIndex",
                "type": "select",
                "defaultValue": "'0'",
                "label": "Who is this policy for?",
                "required": false,
                "visible": "personalInfo.*.id == personalInfo[0].id",
                "dataType": "string",
                "readOnly": false,
                "layout": "gradational"
            },
            {
                "id": "relationshipToInsured",
                "model": "personalRelationship.relationshipToInsured",
                "type": "select",
                "label": "Relationship of policyowner to life insured",
                "required": "!(policyHolder.assured) && personalInfo.*.id == personalInfo[0].id",
                "visible": "!(policyHolder.assured) && personalInfo.*.id == personalInfo[0].id",
                "dataType": "string",
                "readOnly": false,
                "layout": "gradational",
                "options": [
                    {
                        "data": "spouse",
                        "label": "Spouse"
                    },
                    {
                        "data": "child",
                        "label": "Child"
                    },
                    {
                        "data": "father",
                        "label": "Father"
                    },
                    {
                        "data": "mother",
                        "label": "Mother"
                    },
                    {
                        "data": "sibling",
                        "label": "Sibling"
                    },
                    {
                        "data": "grandparent",
                        "label": "Grandparent"
                    },
                    {
                        "data": "other",
                        "label": "Other"
                    },
                    {
                        "data": "estate",
                        "label": "Estate"
                    }
                ],
                "placeholder": "Please select"
            },
            {
                "model": "personalRelationship.relationshipToInsuredDetail",
                "type": "string",
                "label": " ",
                "required": "!(policyHolder.assured) && personalInfo.*.id == personalInfo[0].id && personalRelationship.relationshipToInsured == 'other'",
                "visible": "!(policyHolder.assured) && personalInfo.*.id == personalInfo[0].id && personalRelationship.relationshipToInsured == 'other'",
                "readOnly": false,
                "layout": "gradational"
            }
        ]
    },
    "needsPriority": {
        "name": "needsPriority",
        "required": true,
        "dependsOn": "",
        "title": "Needs and priorities",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "needsPriority",
                "model": "needs.priority",
                "type": "option",
                "label": "What is your current priority for today's discussion?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "protection",
                        "label": "Protection"
                    },
                    {
                        "data": "education",
                        "label": "Children's education"
                    },
                    {
                        "data": "retirement",
                        "label": "Retirement"
                    },
                    {
                        "data": "savings",
                        "label": "Savings"
                    },
                    {
                        "data": "criticalNeeds",
                        "label": "CI"
                    },
                    {
                        "data": "otherNeeds",
                        "label": "Other"
                    }
                ]
            }
        ]
    },
    "payment": {
        "name": "payment",
        "required": true,
        "dependsOn": "",
        "title": "Payment",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "paymentMethod",
                "model": "payment.method",
                "type": "option",
                "label": "What is your preferred payment method?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "cash",
                        "label": "Cash"
                    },
                    {
                        "data": "creditCard",
                        "label": "Credit card"
                    },
                    {
                        "data": "scanToPay",
                        "label": "Scan to pay"
                    }
                ]
            }
        ]
    },
    "payment.creditCard": {
        "name": "payment.creditCard",
        "required": true,
        "dependsOn": "payment",
        "title": "Credit card",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "money",
                "model": "payment.creditCard.amount",
                "type": "money",
                "maxLen": 9,
                "label": "Actual amount to be paid",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "quotation.currency"
            },
            {
                "id": "cardNumber",
                "model": "payment.creditCard.cardNumber",
                "label": "Card number",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "name",
                "model": "payment.creditCard.name",
                "label": "Name on the card",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "date",
                "model": "payment.creditCard.expiryDate",
                "type": "date",
                "label": "Expiry date",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "cvv",
                "model": "payment.creditCard.cvv",
                "label": "CVV",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "address",
                "model": "payment.creditCard.address",
                "type": "textarea",
                "maxLen": 150,
                "label": "Address",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "zipcode",
                "model": "payment.creditCard.zipcode",
                "type": "string",
                "maxLen": 10,
                "label": "Zipcode (optional)",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "regex": "^\\d+$"
            },
            {
                "id": "country",
                "model": "payment.creditCard.country",
                "type": "select",
                "label": "Country (optional)",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "source": "references:countries"
            }
        ]
    },
    "payment.scan": {
        "name": "payment.scan",
        "required": true,
        "dependsOn": "payment",
        "title": "Scan to pay",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "money",
                "model": "payment.creditCard.amount",
                "type": "money",
                "maxLen": 6,
                "label": "Actual amount to be paid",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "quotation.currency"
            }
        ]
    },
    "criticalNeeds": {
        "name": "criticalNeeds",
        "required": true,
        "dependsOn": "needsPriority",
        "title": "Needs and priorities",
        "subtitle": "Critical illness or hospitalization",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "need",
                "model": "needs.ci.need",
                "type": "string",
                "label": "Critical illness",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "money",
                "model": "needs.ci.amount",
                "type": "money",
                "maxLen": 9,
                "label": "Amount needed for the critical need",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "money",
                "model": "needs.ci.savings",
                "type": "money",
                "maxLen": 9,
                "label": "Current savings made for the critical need",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "secure": true
            },
            {
                "id": "budgetMin",
                "model": "needs.budgetMin",
                "type": "money",
                "maxLen": 9,
                "label": "The minimum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "budgetMax",
                "model": "needs.budgetMax",
                "type": "money",
                "maxLen": 9,
                "label": "The maximum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "money",
                "model": "needs.ci.shortFall",
                "type": "money",
                "maxLen": 9,
                "computedValue": "needs.ci.amount > needs.ci.savings ? needs.ci.amount - needs.ci.savings : 0",
                "required": false,
                "visible": false,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "ciShortFallRecomendation",
                "model": "needs.shortFallRecommendation",
                "type": "result",
                "computedValue": "needs.ci.shortFall > 0 ? needs.ci.shortFall : 0 - needs.ci.amount",
                "required": false,
                "visible": true,
                "readOnly": false,
                "currency": "'PHP'",
                "labels": [
                    {
                        "min": 0,
                        "max": 0,
                        "status": "inactive",
                        "label": "To see recommendation, please complete the options above."
                    },
                    {
                        "min": 1,
                        "status": "active",
                        "displayValue": true,
                        "label": "Critical illness shortfall "
                    },
                    {
                        "max": 0,
                        "status": "active",
                        "displayValue": true,
                        "label": "Your savings cover your critical illness and hospitalization shortfall, \nwe recommend that you get coverage for "
                    }
                ]
            }
        ]
    },
    "otherNeeds": {
        "name": "otherNeeds",
        "required": true,
        "dependsOn": "needsPriority",
        "title": "Needs and priorities",
        "subtitle": "Other needs",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "otherNeed",
                "model": "needs.other.need",
                "type": "string",
                "label": "Other need",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "money",
                "model": "needs.other.amount",
                "type": "money",
                "maxLen": 9,
                "label": "Amount needed for the identified other need",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "money",
                "model": "needs.other.savings",
                "type": "money",
                "maxLen": 9,
                "label": "Current savings for the identified other need",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "secure": true
            },
            {
                "id": "budgetMin",
                "model": "needs.budgetMin",
                "type": "money",
                "maxLen": 9,
                "label": "The minimum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "budgetMax",
                "model": "needs.budgetMax",
                "type": "money",
                "maxLen": 9,
                "label": "The maximum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "money",
                "model": "needs.other.shortFall",
                "type": "money",
                "maxLen": 9,
                "computedValue": "needs.other.amount > needs.other.savings ? needs.other.amount - needs.other.savings : 0",
                "required": false,
                "visible": false,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "otherShortFallRecomendation",
                "model": "needs.shortFallRecommendation",
                "type": "result",
                "computedValue": "needs.other.shortFall > 0 ? needs.other.shortFall : 0 - needs.other.amount",
                "required": false,
                "visible": true,
                "readOnly": false,
                "currency": "'PHP'",
                "labels": [
                    {
                        "min": 0,
                        "max": 0,
                        "status": "inactive",
                        "label": "To see recommendation, please complete the options above."
                    },
                    {
                        "min": 1,
                        "status": "active",
                        "displayValue": true,
                        "label": "Other needs shortfall "
                    },
                    {
                        "max": 0,
                        "status": "active",
                        "displayValue": true,
                        "label": "Your savings cover your other needs shortfall, \nwe recommend that you get coverage for "
                    }
                ]
            }
        ]
    },
    "protection": {
        "name": "protection",
        "required": true,
        "dependsOn": "needsPriority",
        "title": "Needs and priorities",
        "subtitle": "Protection",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "money",
                "model": "needs.protection.grossIncome",
                "type": "money",
                "maxLen": 9,
                "label": "My monthly income is approximately",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "secure": true
            },
            {
                "id": "money",
                "model": "needs.protection.grossExpenses",
                "type": "money",
                "maxLen": 9,
                "label": "My monthly spend is approximately",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "budgetMin",
                "model": "needs.budgetMin",
                "type": "money",
                "maxLen": 9,
                "label": "The minimum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "budgetMax",
                "model": "needs.budgetMax",
                "type": "money",
                "maxLen": 9,
                "label": "The maximum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "noOfDependents",
                "model": "needs.protection.noOfDependents",
                "type": "number",
                "label": "The number of people who are financially dependent on me",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "yearsToProtect",
                "model": "needs.protection.yearsToProtect",
                "type": "number",
                "label": "Years to protect income",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "money",
                "model": "needs.protection.provisionsMade",
                "type": "money",
                "maxLen": 9,
                "label": "So far, I have saved",
                "required": false,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "secure": true
            },
            {
                "id": "money",
                "model": "needs.protection.grossAnnualBudget",
                "type": "money",
                "maxLen": 9,
                "computedValue": "needs.protection.grossExpenses * 12",
                "required": true,
                "visible": false,
                "dataType": "number",
                "readOnly": true,
                "currency": "'PHP'"
            },
            {
                "id": "money",
                "model": "needs.protection.need",
                "type": "money",
                "maxLen": 9,
                "computedValue": "needs.protection.grossAnnualBudget * needs.protection.yearsToProtect",
                "label": "I would like to have protection coverage for",
                "required": false,
                "visible": false,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "money",
                "model": "needs.protection.shortFall",
                "type": "money",
                "maxLen": 9,
                "computedValue": "needs.protection.need > needs.protection.provisionsMade ? needs.protection.need - needs.protection.provisionsMade : 0",
                "required": false,
                "visible": false,
                "dataType": "number",
                "readOnly": true,
                "currency": "'PHP'"
            },
            {
                "id": "protectionShortFallRecommendation",
                "model": "needs.shortFallRecommendation",
                "type": "result",
                "computedValue": "needs.protection.need > needs.protection.provisionsMade ? needs.protection.shortFall : 0 - needs.protection.need",
                "required": false,
                "visible": true,
                "readOnly": true,
                "currency": "'PHP'",
                "labels": [
                    {
                        "min": 0,
                        "max": 0,
                        "status": "inactive",
                        "label": "To see recommendation, please complete the options above."
                    },
                    {
                        "min": 1,
                        "displayValue": true,
                        "status": "active",
                        "label": "Your protection gap is "
                    },
                    {
                        "max": 0,
                        "status": "active",
                        "displayValue": true,
                        "label": "Your savings cover your protection shortfall, \nwe recommend that you get coverage for "
                    }
                ]
            }
        ]
    },
    "education": {
        "name": "education",
        "required": true,
        "dependsOn": "needsPriority",
        "title": "Needs and priorities",
        "subtitle": "Education",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "money",
                "model": "needs.education.grossIncome",
                "type": "money",
                "maxLen": 9,
                "label": "My monthly income is approximately",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "secure": true
            },
            {
                "id": "money",
                "model": "needs.education.grossExpenses",
                "type": "money",
                "maxLen": 9,
                "label": "My monthly spend is approximately",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "budgetMin",
                "model": "needs.budgetMin",
                "type": "money",
                "maxLen": 9,
                "label": "The minimum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "budgetMax",
                "model": "needs.budgetMax",
                "type": "money",
                "maxLen": 9,
                "label": "The maximum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "dependentsAge",
                "model": "needs.education.dependentsAge",
                "type": "number",
                "label": "The age of my child is",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "preferredCollege",
                "model": "needs.education.preferredCollege",
                "type": "select",
                "label": "The name of the college or university I plan to send my child to",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "source": "references:colleges"
            },
            {
                "id": "money",
                "model": "needs.education.estimatedEducationCost",
                "type": "money",
                "maxLen": 9,
                "computedValue": "estimateEducationCost(needs.education.preferredCollege, needs.education.dependentsAge, references.colleges)",
                "label": "Based on your criteria and current known cost of education, the potential cost of education for my child would be approximately",
                "required": false,
                "visible": true,
                "dataType": "number",
                "readOnly": true,
                "currency": "'PHP'"
            },
            {
                "id": "money",
                "model": "needs.education.provisionsMade",
                "type": "money",
                "maxLen": 9,
                "label": "So far, I have saved",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "secure": true
            },
            {
                "id": "money",
                "model": "needs.education.shortFall",
                "type": "money",
                "maxLen": 9,
                "computedValue": "needs.education.estimatedEducationCost > needs.education.provisionsMade ? needs.education.estimatedEducationCost - needs.education.provisionsMade : 0",
                "required": false,
                "visible": false,
                "dataType": "number",
                "readOnly": true,
                "currency": "'PHP'"
            },
            {
                "id": "educationShortFallRecommendation",
                "model": "needs.shortFallRecommendation",
                "type": "result",
                "computedValue": "needs.education.shortFall > 0 ? needs.education.shortFall : 0 - needs.education.estimatedEducationCost",
                "required": false,
                "visible": true,
                "readOnly": true,
                "currency": "'PHP'",
                "labels": [
                    {
                        "min": 0,
                        "max": 0,
                        "status": "inactive",
                        "label": "To see recommendation, please complete the options above."
                    },
                    {
                        "min": 1,
                        "status": "active",
                        "displayValue": true,
                        "label": "Your education savings gap is"
                    },
                    {
                        "max": 0,
                        "status": "active",
                        "displayValue": true,
                        "label": "Your savings cover your education shortfall, \nwe recommend that you get coverage for "
                    }
                ]
            }
        ]
    },
    "retirement": {
        "name": "retirement",
        "required": true,
        "dependsOn": "needsPriority",
        "title": "Needs and priorities",
        "subtitle": "Retirement",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "money",
                "model": "needs.retirement.grossIncome",
                "type": "money",
                "maxLen": 9,
                "label": "My monthly income is approximately",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "secure": true
            },
            {
                "id": "budgetMin",
                "model": "needs.budgetMin",
                "type": "money",
                "maxLen": 9,
                "label": "The minimum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "budgetMax",
                "model": "needs.budgetMax",
                "type": "money",
                "maxLen": 9,
                "label": "The maximum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "desiredRetirementAge",
                "model": "needs.retirement.desiredRetirementAge",
                "type": "number",
                "label": "I want to retire at the age of",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "desiredRetirementPlan",
                "model": "needs.retirement.desiredRetirementPlan",
                "type": "select",
                "defaultValue": "'travel'",
                "label": "When I retire, I plan to",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "travel",
                        "label": "Travel the world"
                    },
                    {
                        "data": "cruise",
                        "label": "Go on a cruise"
                    },
                    {
                        "data": "volunteer",
                        "label": "Volunteer"
                    },
                    {
                        "data": "golf",
                        "label": "Take up golf"
                    },
                    {
                        "data": "business",
                        "label": "Start a small business"
                    },
                    {
                        "data": "other",
                        "label": "Do something else"
                    }
                ]
            },
            {
                "id": "money",
                "model": "needs.retirement.desiredMonthlyRetirementAllowance",
                "type": "money",
                "maxLen": 9,
                "label": "When I retire, the monthly retirement allowance I want to receive is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "benefitPeriod",
                "model": "needs.retirement.benefitPeriod",
                "type": "number",
                "label": "The number of years I would like to receive this amount",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "money",
                "model": "needs.retirement.provisionsMade",
                "type": "money",
                "maxLen": 9,
                "label": "So far, I have saved",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "secure": true
            },
            {
                "id": "money",
                "model": "needs.retirement.shortFall",
                "type": "money",
                "maxLen": 9,
                "computedValue": "needs.retirement.need > needs.retirement.provisionsMade ? needs.retirement.need - needs.retirement.provisionsMade : 0",
                "required": false,
                "visible": false,
                "dataType": "number",
                "readOnly": true,
                "currency": "'PHP'"
            },
            {
                "id": "money",
                "model": "needs.retirement.need",
                "type": "money",
                "maxLen": 9,
                "computedValue": "needs.retirement.benefitPeriod * 12 * needs.retirement.desiredMonthlyRetirementAllowance",
                "label": "So my retirement need is approximately",
                "required": false,
                "visible": false,
                "dataType": "number",
                "readOnly": true,
                "currency": "'PHP'"
            },
            {
                "id": "retirementShortFallRecommendation",
                "model": "needs.shortFallRecommendation",
                "type": "result",
                "computedValue": "needs.retirement.shortFall > 0 ? needs.retirement.shortFall : 0 - needs.retirement.need",
                "required": false,
                "visible": true,
                "readOnly": true,
                "currency": "'PHP'",
                "labels": [
                    {
                        "min": 0,
                        "max": 0,
                        "status": "inactive",
                        "label": "To see recommendation, please complete the options above."
                    },
                    {
                        "min": 1,
                        "status": "active",
                        "displayValue": true,
                        "label": "Your retirement savings gap is "
                    },
                    {
                        "max": 0,
                        "status": "active",
                        "displayValue": true,
                        "label": "Your savings cover your retirement shortfall, \nwe recommend that you get coverage for "
                    }
                ]
            }
        ]
    },
    "savings": {
        "name": "savings",
        "required": true,
        "dependsOn": "needsPriority",
        "title": "Needs and priorities",
        "subtitle": "Savings",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "money",
                "model": "needs.savings.grossIncome",
                "type": "money",
                "maxLen": 9,
                "label": "My monthly income is approximately",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "secure": true
            },
            {
                "id": "budgetMin",
                "model": "needs.budgetMin",
                "type": "money",
                "maxLen": 9,
                "label": "The minimum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "budgetMax",
                "model": "needs.budgetMax",
                "type": "money",
                "maxLen": 9,
                "label": "The maximum I would like to pay monthly is",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "savingsPlan",
                "model": "needs.savings.savingsPlan",
                "type": "select",
                "defaultValue": "'home'",
                "label": "I plan to save up for",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "home",
                        "label": "A home"
                    },
                    {
                        "data": "vehicle",
                        "label": "A vehicle"
                    },
                    {
                        "data": "holiday",
                        "label": "A holiday around the world"
                    },
                    {
                        "data": "retirement",
                        "label": "Early retirement"
                    },
                    {
                        "data": "other",
                        "label": "Something else"
                    }
                ]
            },
            {
                "id": "money",
                "model": "needs.savings.approximateCost",
                "type": "money",
                "maxLen": 9,
                "label": "I would like to save",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "targetDateOfAccumulation",
                "model": "needs.savings.targetDateOfAccumulation",
                "type": "year",
                "label": "The year I plan to use my savings for",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "money",
                "model": "needs.savings.provisionsMade",
                "type": "money",
                "maxLen": 9,
                "label": "So far, I have saved",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "secure": true
            },
            {
                "id": "money",
                "model": "needs.savings.shortFall",
                "type": "money",
                "maxLen": 9,
                "computedValue": "needs.savings.approximateCost > needs.savings.provisionsMade ? needs.savings.approximateCost - needs.savings.provisionsMade : 0",
                "required": false,
                "visible": false,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'"
            },
            {
                "id": "savingsShortFallRecommendation",
                "model": "needs.shortFallRecommendation",
                "type": "result",
                "computedValue": "needs.savings.shortFall > 0 ? needs.savings.shortFall : 0 - needs.savings.approximateCost",
                "required": false,
                "visible": true,
                "readOnly": true,
                "currency": "'PHP'",
                "labels": [
                    {
                        "min": 0,
                        "max": 0,
                        "status": "inactive",
                        "label": "To see recommendation, please complete the options above."
                    },
                    {
                        "min": 1,
                        "status": "active",
                        "displayValue": true,
                        "label": "Your savings gap is "
                    },
                    {
                        "max": 0,
                        "status": "active",
                        "displayValue": true,
                        "label": "Your savings cover your savings shortfall, \nwe recommend that you get coverage for "
                    }
                ]
            }
        ]
    },
    "product": {
        "name": "product",
        "required": true,
        "dependsOn": "",
        "title": "Product selection",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "needsPriority",
                "model": "needs.priority",
                "type": "option",
                "label": "What is your current priority for today's discussion?",
                "required": true,
                "visible": false,
                "dataType": "string",
                "readOnly": true,
                "options": [
                    {
                        "data": "protection",
                        "label": "Protection"
                    },
                    {
                        "data": "education",
                        "label": "Children's education"
                    },
                    {
                        "data": "retirement",
                        "label": "Retirement"
                    },
                    {
                        "data": "savings",
                        "label": "Savings"
                    },
                    {
                        "data": "criticalNeeds",
                        "label": "CI"
                    },
                    {
                        "data": "otherNeeds",
                        "label": "Other"
                    }
                ]
            },
            {
                "id": "product",
                "model": "product.planCode",
                "type": "select",
                "label": "Products",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "elite",
                        "label": "Elite"
                    },
                    {
                        "data": "paa",
                        "label": "PAA+"
                    }
                ]
            },
            {
                "id": "product.name",
                "model": "product.planName",
                "computedValue": "findProduct(references.products, product.planCode).name",
                "required": false,
                "visible": false,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "secondaryCode",
                "model": "product.secondary.code",
                "computedValue": "needs ==null || needs.priority == null || needs.priority == false ? 'na' : needs.priority =='protection' || needs.priority== 'criticalNeeds' ? 'elite' : 'paa'",
                "required": false,
                "visible": false,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "secondaryName",
                "model": "product.secondary.name",
                "computedValue": "product.secondary.code == 'na' ? 'na' : findProduct(references.products, product.secondary.code).name",
                "required": false,
                "visible": false,
                "dataType": "string",
                "readOnly": false
            }
        ]
    },
    "productCustomisation": {
        "name": "productCustomisation",
        "required": true,
        "dependsOn": "",
        "title": "Product customization",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "heading",
                "model": "productCustomisation.productMode.title",
                "type": "heading",
                "label": "My preference",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "productMode",
                "model": "quotation.productMode",
                "type": "option",
                "defaultValue": "(needs?.shortFallRecommendation && needs.shortFallRecommendation != 0) ? 'Coverage' : 'Premium'",
                "label": "By which way do you want to proceed?",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "Coverage",
                        "label": "Coverage"
                    },
                    {
                        "data": "Premium",
                        "label": "Premium"
                    }
                ]
            },
            {
                "id": "period",
                "model": "quotation.period",
                "parent": "quotation.productMode",
                "type": "select",
                "defaultValue": 5,
                "label": "My preferred premium payment period is",
                "required": "quotation.planCode == 'elite'",
                "visible": "quotation.planCode == 'elite'",
                "dataType": "number",
                "readOnly": false,
                "options": [
                    {
                        "data": 5,
                        "label": "5 Years"
                    },
                    {
                        "data": 7,
                        "label": "7 Years"
                    },
                    {
                        "data": 10,
                        "label": "10 Years"
                    },
                    {
                        "data": 15,
                        "label": "15 Years"
                    }
                ]
            },
            {
                "id": "currency",
                "model": "quotation.currency",
                "parent": "quotation.productMode",
                "type": "option",
                "defaultValue": "'PHP'",
                "label": "My preferred currency is",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "PHP",
                        "label": "PhP"
                    },
                    {
                        "data": "USD",
                        "label": "USD"
                    }
                ]
            },
            {
                "id": "money",
                "model": "quotation.insuredAmountRecommended",
                "parent": "quotation.productMode",
                "type": "result",
                "maxLen": 9,
                "computedValue": "needs.shortFallRecommendation >= 0 ? needs.shortFallRecommendation : 0 - needs.shortFallRecommendation",
                "required": false,
                "visible": "quotation.productMode == 'Coverage'",
                "dataType": "number",
                "readOnly": true,
                "currency": "'PHP'",
                "labels": [
                    {
                        "status": "inactive",
                        "label": "To see recommendation, please complete needs analysis."
                    },
                    {
                        "min": 0,
                        "status": "active",
                        "displayValue": true,
                        "label": "Based on your needs, we recommend coverage of "
                    }
                ]
            },
            {
                "id": "separator",
                "model": "separator",
                "parent": "quotation.productMode",
                "type": "separator",
                "required": false,
                "visible": "quotation.productMode == 'Coverage'",
                "readOnly": false
            },
            {
                "id": "money",
                "model": "quotation.insuredAmount",
                "parent": "quotation.productMode",
                "type": "money",
                "defaultValue": "quotation.insuredAmountRecommended",
                "maxLen": 9,
                "label": "Today, I would like to get coverage for",
                "required": "quotation.productMode == 'Coverage'",
                "visible": "quotation.productMode == 'Coverage'",
                "dataType": "number",
                "readOnly": false,
                "currency": "quotation.currency",
                "placeholder": "Amount"
            },
            {
                "id": "totalModalPremiumRecommended",
                "model": "quotation.totalModalPremiumRecommended",
                "parent": "quotation.productMode",
                "type": "result",
                "required": false,
                "visible": "quotation.productMode == 'Premium'",
                "readOnly": true,
                "paymentMode": "quotation.paymentModeNoun",
                "currency": "quotation.currency",
                "labels": [
                    {
                        "status": "inactive",
                        "label": "To see recommendation, please complete needs analysis."
                    },
                    {
                        "min": 0,
                        "status": "active",
                        "displayValue": true,
                        "label": "Based on your needs, we recommend a premium of"
                    }
                ]
            },
            {
                "id": "separator",
                "model": "separator",
                "parent": "quotation.productMode",
                "type": "separator",
                "required": false,
                "visible": "quotation.productMode == 'Premium'",
                "readOnly": false
            },
            {
                "id": "separator",
                "model": "separator",
                "type": "separator",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "money",
                "model": "quotation.totalModalPremium",
                "parent": "quotation.productMode",
                "type": "money",
                "defaultValue": "quotation.totalModalPremiumRecommended ? quotation.totalModalPremiumRecommended : quotation.baseModalPremium",
                "maxLen": 9,
                "label": "Today, I would like a premium of",
                "required": "quotation.productMode == 'Premium'",
                "visible": "quotation.productMode == 'Premium'",
                "dataType": "number",
                "readOnly": false,
                "currency": "quotation.currency",
                "placeholder": "Amount"
            },
            {
                "id": "frequency",
                "model": "quotation.paymentMode",
                "parent": "quotation.productMode",
                "type": "select",
                "defaultValue": "'A'",
                "label": "I would like to pay",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "A",
                        "label": "Yearly"
                    },
                    {
                        "data": "S",
                        "label": "Half-yearly"
                    },
                    {
                        "data": "Q",
                        "label": "Quarterly"
                    },
                    {
                        "data": "M",
                        "label": "Monthly"
                    }
                ]
            },
            {
                "id": "money",
                "model": "quotation.displayedBaseModalPremium",
                "parent": "quotation.productMode",
                "type": "result",
                "maxLen": 9,
                "computedValue": "quotation?.config?.error ? undefined : quotation.baseModalPremium",
                "required": false,
                "visible": "quotation.productMode == 'Coverage'",
                "dataType": "number",
                "readOnly": true,
                "paymentMode": "quotation.paymentModeNoun",
                "currency": "quotation.currency",
                "labels": [
                    {
                        "status": "inactive",
                        "label": "Base premium will be auto-calculated once above values are set."
                    },
                    {
                        "min": 0,
                        "status": "active",
                        "displayValue": true,
                        "label": "Based on my choices, my base premium will be "
                    }
                ]
            },
            {
                "id": "money",
                "model": "quotation.displayedInsuredAmount",
                "parent": "quotation.productMode",
                "type": "result",
                "maxLen": 9,
                "computedValue": "quotation?.config?.error ? undefined : quotation.insuredAmount",
                "required": false,
                "visible": "quotation.productMode == 'Premium'",
                "dataType": "number",
                "readOnly": true,
                "currency": "quotation.currency",
                "labels": [
                    {
                        "status": "inactive",
                        "label": "Basic coverage will be auto-calculated once above values are set."
                    },
                    {
                        "min": 0,
                        "status": "active",
                        "displayValue": true,
                        "label": "Based on my choices, my basic coverage will be"
                    }
                ]
            },
            {
                "id": "heading",
                "model": "productCustomisation.paymentMethod.title",
                "type": "heading",
                "label": "Payment",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "initialPaymentMethod",
                "model": "quotation.initialPaymentMethod",
                "type": "select",
                "label": "What method will you use for Initial Payment",
                "required": "quotation.inQuotationStage == false",
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "CA",
                        "label": "Cash"
                    },
                    {
                        "data": "CC",
                        "label": "Credit Card"
                    },
                    {
                        "data": "CK",
                        "label": "Dated Check"
                    },
                    {
                        "data": "BT",
                        "label": "Bank Transfer"
                    },
                    {
                        "data": "FT",
                        "label": "Fund Transfer"
                    }
                ]
            },
            {
                "id": "renewalPaymentMethod",
                "model": "quotation.renewalPaymentMethod",
                "type": "select",
                "label": "What method will you use for Renewal Payment",
                "required": "quotation.currency == 'PHP' && quotation.inQuotationStage == false",
                "visible": "quotation.currency == 'PHP'",
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "CA",
                        "label": "Cash"
                    },
                    {
                        "data": "DD",
                        "label": "Auto-Debit Arrangement"
                    },
                    {
                        "data": "CC",
                        "label": "Credit Card"
                    },
                    {
                        "data": "PCK",
                        "label": "Post Dated Check"
                    }
                ]
            },
            {
                "id": "renewalPaymentMethod",
                "model": "quotation.renewalPaymentMethod",
                "type": "select",
                "label": "What method will you use for Renewal Payment",
                "required": "quotation.currency == 'USD' && quotation.inQuotationStage == false",
                "visible": "quotation.currency == 'USD'",
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "CA",
                        "label": "Cash"
                    },
                    {
                        "data": "CC",
                        "label": "Credit Card"
                    },
                    {
                        "data": "PCK",
                        "label": "Post Dated Check"
                    }
                ]
            },
            {
                "id": "planCode",
                "model": "product.planCode",
                "type": "string",
                "label": "Plan Code",
                "required": false,
                "visible": false,
                "readOnly": true
            },
            {
                "id": "quotationPlanCode",
                "model": "quotation.planCode",
                "computedValue": "product.planCode",
                "required": false,
                "visible": false,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "paymentModeNounReadonly",
                "model": "quotation.paymentModeNoun",
                "type": "string",
                "computedValue": "toPaymentModeNoun(#this.quotation.paymentMode)",
                "label": "per",
                "required": false,
                "visible": false,
                "readOnly": true
            },
            {
                "id": "premiumInBudget",
                "model": "quotation.inBudget",
                "computedValue": "quotation.result.totalAnnualPremiumAmount * (quotation?.fxRate ?: 1) >= annualizePremium(needs.budgetMin, 'M') && quotation.result.totalAnnualPremiumAmount * (quotation?.fxRate ?: 1) <= annualizePremium(needs.budgetMax, 'M')",
                "label": "In Budget",
                "required": false,
                "visible": false,
                "dataType": "boolean",
                "readOnly": false
            },
            {
                "id": "mortalityClass",
                "model": "quotation.mortalityClass",
                "type": "string",
                "defaultValue": "quotation.occupation",
                "label": "Mortality Class",
                "required": false,
                "visible": false,
                "readOnly": false
            },
            {
                "id": "flatExtra",
                "model": "quotation.flatExtra",
                "type": "string",
                "label": "Flat Extra",
                "required": false,
                "visible": false,
                "readOnly": false
            },
            {
                "id": "medicalClass",
                "model": "quotation.medicalClass",
                "type": "string",
                "label": "Medical Class",
                "required": false,
                "visible": false,
                "readOnly": false
            }
        ]
    },
    "riderNeeds": {
        "name": "riderNeeds",
        "required": true,
        "dependsOn": "",
        "title": "Product enhancement",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "selectedRiders",
                "model": "quotation.selectedRiders",
                "required": false,
                "visible": true,
                "readOnly": false
            }
        ]
    },
    "shortfall": {
        "name": "shortfall",
        "required": true,
        "dependsOn": "",
        "title": "Identified shortfall",
        "subtitle": "",
        "type": "derivative",
        "group": "",
        "components": [
            {
                "id": "isShortfallAddressed",
                "model": "needs.shortfall.isShortfallAddressed",
                "computedValue": "quotation.insuredAmount >= quotation.insuredAmountRecommended ? 1 : 0",
                "label": "Will the recommended product address the identified shortfall?",
                "required": false,
                "visible": false,
                "dataType": "boolean",
                "readOnly": false
            },
            {
                "id": "shortfallSA",
                "model": "needs.shortfall.shortfallSA",
                "computedValue": "needs.shortfall.isShortfallAddressed",
                "required": false,
                "visible": false,
                "dataType": "boolean",
                "readOnly": false
            },
            {
                "id": "shortfallLBFV",
                "model": "needs.shortfall.shortfallLBFV",
                "computedValue": "needs.shortfall.isShortfallAddressed && product?.planCode ? 1 : 0",
                "required": false,
                "visible": false,
                "dataType": "number",
                "readOnly": false
            },
            {
                "id": "shortfallRiders",
                "model": "needs.shortfall.shortfallRiders",
                "computedValue": "enabledNonCoreRiders(references.products, product.planCode, #this)",
                "required": false,
                "visible": false,
                "dataType": "array",
                "readOnly": false
            },
            {
                "id": "shortfallRider",
                "model": "needs.shortfall.shortfallRider",
                "computedValue": "needs.shortfall.isShortfallAddressed && needs.shortfall.shortfallRiders.length > 0 ? 1 : 0",
                "required": false,
                "visible": false,
                "dataType": "number",
                "readOnly": false
            }
        ]
    },
    "riskProfile": {
        "name": "riskProfile",
        "required": true,
        "dependsOn": "",
        "title": "Risk appetite survey",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "investmentPeriod",
                "model": "riskProfile.investmentPeriod",
                "type": "option",
                "label": "How long will you allow your money to grow before you feel the need to have access to it?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "A",
                        "label": "0 Years"
                    },
                    {
                        "data": "B",
                        "label": "< 3 Years"
                    },
                    {
                        "data": "C-2",
                        "label": "3 - 7 Years"
                    },
                    {
                        "data": "D-3",
                        "label": "7 - 10 Years"
                    },
                    {
                        "data": "E-4",
                        "label": "> 10 Years"
                    }
                ]
            },
            {
                "id": "investmentGoal",
                "model": "riskProfile.investmentGoal",
                "type": "select",
                "label": "What is your goal for this investment? Tap on one.",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "A-1",
                        "label": "Capital preservation with a potential return that is slightly higher than time deposit rate"
                    },
                    {
                        "data": "B-2",
                        "label": "Steady growth in capital"
                    },
                    {
                        "data": "C-3",
                        "label": "A significant level of capital appreciation"
                    }
                ]
            },
            {
                "id": "investmentExperience",
                "model": "riskProfile.investmentExperience",
                "type": "option",
                "label": "Experience with investments and/or financial market\nHave you had any experience investing in the following:\nI. Mutual funds, unit investment trust funds, unit-linked insurance policies, local government and/or corporate bonds, listed stocks in the Philippine Stock Market\nII. Foreign Investments (stocks, bonds, funds outside the Philippine market), foreign currencies, hedge funds, derivatives (options, future, forwards, etc.)\nPlease tap on one of the following answers",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "A-0",
                        "label": "None of the above"
                    },
                    {
                        "data": "B-2",
                        "label": "I only"
                    },
                    {
                        "data": "C-4",
                        "label": "II only"
                    },
                    {
                        "data": "D-4",
                        "label": "Both I and II"
                    }
                ]
            },
            {
                "id": "fundValueDropRisk",
                "model": "riskProfile.fundValueDropRisk",
                "type": "select",
                "label": "What will you do if you experience a significant drop (for example, 30% in fund value, within a year?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "A-0",
                        "label": "Make a full withdrawal"
                    },
                    {
                        "data": "B-1",
                        "label": "Switch to a less risky fund"
                    },
                    {
                        "data": "C-2",
                        "label": "Do nothing or hold on to the funds"
                    },
                    {
                        "data": "D-4",
                        "label": "Do top-ups or make additional investments"
                    }
                ]
            },
            {
                "id": "expectedCapitalLoss",
                "model": "riskProfile.expectedCapitalLoss",
                "type": "select",
                "label": "In the long term (more than 5 years), what is the level of capital loss you can afford to take?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "A",
                        "label": "I cannot afford a loss"
                    },
                    {
                        "data": "B-1",
                        "label": "I can afford up to 5% loss"
                    },
                    {
                        "data": "C-2",
                        "label": "I can afford up to 10% loss"
                    },
                    {
                        "data": "D-3",
                        "label": "I can afford more than 10% loss"
                    }
                ]
            },
            {
                "id": "samplePortfolio",
                "model": "riskProfile.samplePortfolio",
                "type": "select",
                "label": "Which of the sample portfolio would you prefer? Please tap on a portfolio",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "A-1",
                        "label": "Portfolio A: A potential 4% gain to 3% loss"
                    },
                    {
                        "data": "B-1",
                        "label": "Portfolio B: A potential 6% gain to 6% loss"
                    },
                    {
                        "data": "C-2",
                        "label": "Portfolio C: A potential 10% gain to 12% loss"
                    },
                    {
                        "data": "D-3",
                        "label": "Portfolio D: A potential 20+% gain to 28+% loss"
                    }
                ]
            },
            {
                "id": "riskScore",
                "model": "riskProfile.riskScore",
                "type": "number",
                "computedValue": "calculateRiskScore(#this.riskProfile)",
                "required": false,
                "visible": false,
                "readOnly": true
            },
            {
                "id": "investorRiskType",
                "model": "riskProfile.investorRiskType",
                "type": "string",
                "computedValue": "mapRiskScoreToRiskType(#this.riskProfile.riskScore)",
                "label": "Your risk profile is",
                "required": false,
                "visible": true,
                "readOnly": true
            },
            {
                "id": "investorRiskTypeDefinition",
                "model": "riskProfile.investorRiskTypeDefinition",
                "type": "textarea",
                "computedValue": "definitionForRiskType(#this.riskProfile.investorRiskType)",
                "required": false,
                "visible": "riskProfile.riskScore > 0",
                "dataType": "string",
                "readOnly": true
            },
            {
                "id": "investorRiskProductWaiver",
                "model": "riskProfile.productWaiver",
                "type": "check",
                "defaultValue": false,
                "label": "I acknowledge that I decided on my own judgment and accord to avail of a unit-linked product. I am voluntarily purchasing a unit-linked product despite the results of the risk profiler recommending me against the purchase of such product.",
                "required": "riskProfile.riskScore < 0",
                "visible": "riskProfile.riskScore < 0",
                "dataType": "boolean",
                "readOnly": false
            }
        ]
    },
    "fundRecommendation": {
        "name": "fundRecommendation",
        "required": true,
        "dependsOn": "",
        "title": "Fund selection",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "fundName",
                "model": "fundRecommendation.fundName",
                "type": "list",
                "label": "Allocate a percentage (%) of your premium to any of the funds below.\nPlease choose at least one fund from the list below.",
                "required": false,
                "visible": true,
                "readOnly": false
            }
        ]
    },
    "quotation.events.topup": {
        "name": "quotation.events.topup",
        "required": true,
        "dependsOn": "",
        "title": "Top-up",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "yesOrNo",
                "model": "quotation.events.topup",
                "type": "option",
                "label": "Are you planning to top-up your investments over time?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            }
        ]
    },
    "quotation.events.topups": {
        "name": "quotation.events.topups",
        "required": true,
        "dependsOn": "quotation.events.topup",
        "title": "",
        "subtitle": "",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "model": "quotation.events.topups.*.fund",
                "type": "select",
                "label": "Which fund?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "money",
                "model": "quotation.events.topups.*.amount",
                "type": "money",
                "maxLen": 9,
                "label": "By how much?",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "quotation.currency",
                "placeholder": "2,000,000"
            },
            {
                "model": "quotation.events.topups.*.year",
                "type": "number",
                "label": "When(year)?",
                "required": true,
                "visible": true,
                "readOnly": false,
                "placeholder": "YYYY"
            }
        ]
    },
    "quotation.events.withdrawal": {
        "name": "quotation.events.withdrawal",
        "required": true,
        "dependsOn": "",
        "title": "Withdrawals",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "yesOrNo",
                "model": "quotation.events.withdrawal",
                "type": "option",
                "label": "Are you planning to make any partial withdrawals?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            }
        ]
    },
    "quotation.events.withdrawals": {
        "name": "quotation.events.withdrawals",
        "required": true,
        "dependsOn": "quotation.events.withdrawal",
        "title": "Withdrawals",
        "subtitle": "",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "model": "quotation.events.withdrawals.*.fund",
                "type": "select",
                "label": "Which fund?",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "money",
                "model": "quotation.events.withdrawals.*.amount",
                "type": "money",
                "maxLen": 9,
                "label": "By how much?",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "quotation.currency",
                "placeholder": "2,000,000"
            },
            {
                "model": "quotation.events.withdrawals.*.year",
                "type": "number",
                "label": "When(year)?",
                "required": true,
                "visible": true,
                "readOnly": false,
                "placeholder": "YYYY"
            }
        ]
    },
    "productConfirmation": {
        "name": "productConfirmation",
        "required": true,
        "dependsOn": "",
        "title": "Product confirmation",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "sliderType",
                "model": "quotation.investmentPriority",
                "type": "slider",
                "required": false,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "custom": {
                    "min": 0,
                    "max": 100,
                    "step": 1,
                    "showMinValue": false,
                    "showMaxValue": false,
                    "showCurrentValue": false
                }
            }
        ]
    },
    "personalInfo.lifestyle": {
        "name": "personalInfo.lifestyle",
        "required": true,
        "dependsOn": "",
        "title": "Lifestyle information",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.flownAircraft",
                "type": "option",
                "label": "Have you flown an aircraft other than as a passenger?",
                "required": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "visible": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "label",
                "model": "label",
                "parent": "personalInfo.*.lifestyle.flownAircraft",
                "type": "label",
                "label": "Please fill out the Aviation Questionnaire card.",
                "required": false,
                "visible": "personalInfo.*.lifestyle.flownAircraft",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.dangerousSports",
                "type": "option",
                "label": "Do you engage in any dangerous sports or hobbies?",
                "required": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "visible": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingAndJumping",
                "parent": "personalInfo.*.lifestyle.dangerousSports",
                "type": "option",
                "label": "Sky diving, bungee jumping or scuba diving?",
                "required": "personalInfo.*.lifestyle.dangerousSports",
                "visible": "personalInfo.*.lifestyle.dangerousSports",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "label",
                "model": "label",
                "parent": "personalInfo.*.lifestyle.divingAndJumping",
                "type": "label",
                "label": "Please fill out the Diving or Jumping Questionnaire card.",
                "required": false,
                "visible": "personalInfo.*.lifestyle.divingAndJumping",
                "readOnly": false
            },
            {
                "id": "displayDivingAndJumpingForm",
                "model": "personalInfo.*.lifestyle.displayDivingAndJumpingForm",
                "computedValue": "(personalInfo.*.lifestyle?.dangerousSports && personalInfo.*.lifestyle?.divingAndJumping) || (personalInfo.*.workPay?.occupations[0]?.employment == 'employed' && personalInfo.*.workPay?.occupations[0]?.occupation == 'DIVE') || (personalInfo.*.workPay?.occupations[1]?.employment == 'employed' && personalInfo.*.workPay?.occupations[1]?.occupation == 'DIVE')",
                "required": false,
                "visible": false,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.motorcycle",
                "parent": "personalInfo.*.lifestyle.dangerousSports",
                "type": "option",
                "label": "Have you driven a motorcycle?",
                "required": "personalInfo.*.lifestyle.dangerousSports",
                "visible": "personalInfo.*.lifestyle.dangerousSports",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.motorcycleDetails",
                "parent": "personalInfo.*.lifestyle.motorcycle",
                "type": "textarea",
                "maxLen": 200,
                "required": "personalInfo.*.lifestyle.dangerousSports && personalInfo.*.lifestyle.motorcycle",
                "visible": "personalInfo.*.lifestyle.dangerousSports && personalInfo.*.lifestyle.motorcycle",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.racing",
                "parent": "personalInfo.*.lifestyle.dangerousSports",
                "type": "option",
                "label": "Have you ever gone racing?",
                "required": "personalInfo.*.lifestyle.dangerousSports",
                "visible": "personalInfo.*.lifestyle.dangerousSports",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "label",
                "model": "label",
                "parent": "personalInfo.*.lifestyle.racing",
                "type": "label",
                "label": "Please fill out the Racing Questionnaire card.",
                "required": false,
                "visible": "personalInfo.*.lifestyle.racing",
                "readOnly": false
            },
            {
                "id": "displayRacingForm",
                "model": "personalInfo.*.lifestyle.displayRacingForm",
                "computedValue": "personalInfo.*.lifestyle.dangerousSports && personalInfo.*.lifestyle.racing",
                "required": false,
                "visible": false,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.mountaineer",
                "parent": "personalInfo.*.lifestyle.dangerousSports",
                "type": "option",
                "label": "Have you engaged in mountaineering or rock climbing?",
                "required": "personalInfo.*.lifestyle.dangerousSports",
                "visible": "personalInfo.*.lifestyle.dangerousSports",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "label",
                "model": "label",
                "parent": "personalInfo.*.lifestyle.mountaineer",
                "type": "label",
                "label": "Please fill out the Mountaineering or Rock Climbing Questionnaire card.",
                "required": false,
                "visible": "personalInfo.*.lifestyle.mountaineer",
                "readOnly": false
            },
            {
                "id": "displayMountaineerForm",
                "model": "personalInfo.*.lifestyle.displayMountaineerForm",
                "computedValue": "personalInfo.*.lifestyle.dangerousSports && personalInfo.*.lifestyle.mountaineer",
                "required": false,
                "visible": false,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.otherHazardousSport",
                "parent": "personalInfo.*.lifestyle.dangerousSports",
                "type": "option",
                "label": "Any other hazardous sport?",
                "required": "personalInfo.*.lifestyle.dangerousSports",
                "visible": "personalInfo.*.lifestyle.dangerousSports",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "label",
                "model": "label",
                "parent": "personalInfo.*.lifestyle.otherHazardousSport",
                "type": "label",
                "label": "Please fill out the General Sports Questionnaire card.",
                "required": false,
                "visible": "personalInfo.*.lifestyle.otherHazardousSport",
                "readOnly": false
            },
            {
                "id": "displayGeneralSportForm",
                "model": "personalInfo.*.lifestyle.displayGeneralSportForm",
                "computedValue": "personalInfo.*.lifestyle.dangerousSports && personalInfo.*.lifestyle.otherHazardousSport",
                "required": false,
                "visible": false,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.politics",
                "type": "option",
                "label": "Have you been active in politics as a candidate or in any other capacity during the last five (5) years?",
                "required": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "visible": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.politicsDetails",
                "parent": "personalInfo.*.lifestyle.politics",
                "type": "textarea",
                "maxLen": 200,
                "required": "personalInfo.*.lifestyle.politics",
                "visible": "personalInfo.*.lifestyle.politics",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.lifeThreat",
                "type": "option",
                "label": "Have you received any threat in your life, person, or safety?",
                "required": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "visible": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.lifeThreatDetails",
                "parent": "personalInfo.*.lifestyle.lifeThreat",
                "type": "textarea",
                "maxLen": 200,
                "required": "personalInfo.*.lifestyle.lifeThreat",
                "visible": "personalInfo.*.lifestyle.lifeThreat",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.smoke",
                "type": "option",
                "label": "Have you smoked cigarettes/tobacco within the past year?",
                "required": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "visible": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.smokingDetails",
                "parent": "personalInfo.*.lifestyle.smoke",
                "type": "textarea",
                "maxLen": 200,
                "required": "personalInfo.*.lifestyle.smoke",
                "visible": "personalInfo.*.lifestyle.smoke",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "smokingYears",
                "model": "personalInfo.*.lifestyle.smokingYears",
                "parent": "personalInfo.*.lifestyle.smoke",
                "type": "number",
                "maxLen": 3,
                "label": "How many years have you smoked/been smoking cigarettes and/or tobacco?",
                "required": "personalInfo.*.lifestyle.smoke",
                "visible": "personalInfo.*.lifestyle.smoke",
                "readOnly": false
            },
            {
                "id": "smokeQuantity",
                "model": "personalInfo.*.lifestyle.smokeQuantity",
                "parent": "personalInfo.*.lifestyle.smoke",
                "type": "number",
                "maxLen": 3,
                "label": "Average number of sticks you smoke per day?",
                "required": "personalInfo.*.lifestyle.smoke",
                "visible": "personalInfo.*.lifestyle.smoke",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.alcohol",
                "type": "option",
                "label": "Do you consume alcohol?",
                "required": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "visible": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "wineQuantity",
                "model": "personalInfo.*.lifestyle.wineQuantity",
                "parent": "personalInfo.*.lifestyle.alcohol",
                "type": "number",
                "maxLen": 3,
                "label": "Glasses of wine",
                "required": "personalInfo.*.lifestyle.alcohol",
                "visible": "personalInfo.*.lifestyle.alcohol",
                "readOnly": false
            },
            {
                "id": "beerQuantity",
                "model": "personalInfo.*.lifestyle.beerQuantity",
                "parent": "personalInfo.*.lifestyle.alcohol",
                "type": "number",
                "maxLen": 3,
                "label": "Cans of beer (350ml)",
                "required": "personalInfo.*.lifestyle.alcohol",
                "visible": "personalInfo.*.lifestyle.alcohol",
                "readOnly": false
            },
            {
                "id": "liquorQuantity",
                "model": "personalInfo.*.lifestyle.liquorQuantity",
                "parent": "personalInfo.*.lifestyle.alcohol",
                "type": "number",
                "maxLen": 3,
                "label": "Shots of liquor",
                "required": "personalInfo.*.lifestyle.alcohol",
                "visible": "personalInfo.*.lifestyle.alcohol",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.drugs",
                "type": "option",
                "label": "Have you taken habit-forming drugs or had been treated for alcoholism or drug addiction?",
                "required": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "visible": "(personalInfo.*.id == assured.id) || isPolicyHolderAssuredDifferentAndPTOrPWEnabled(#this)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.drugDetails",
                "parent": "personalInfo.*.lifestyle.drugs",
                "type": "textarea",
                "maxLen": 200,
                "required": "personalInfo.*.lifestyle.drugs",
                "visible": "personalInfo.*.lifestyle.drugs",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "displayAviationForm",
                "model": "personalInfo.*.lifestyle.displayAviationForm",
                "computedValue": "personalInfo.*.lifestyle?.flownAircraft || (personalInfo.*.workPay?.occupations[0]?.employment == 'employed' && (personalInfo.*.workPay?.occupations[0]?.occupation == 'FLIG' || personalInfo.*.workPay?.occupations[0]?.occupation == 'PLOT' || personalInfo.*.workPay?.occupations[0]?.occupation == 'FLIP')) || personalInfo.*.workPay?.occupations[1]?.employment == 'employed' && (personalInfo.*.workPay?.occupations[1]?.occupation == 'FLIG' || personalInfo.*.workPay?.occupations[1]?.occupation == 'PLOT' || personalInfo.*.workPay?.occupations[1]?.occupation == 'FLIP')",
                "required": false,
                "visible": false,
                "readOnly": false
            }
        ]
    },
    "personalInfo.additionalPersonalInformation": {
        "name": "personalInfo.additionalPersonalInformation",
        "required": true,
        "dependsOn": "",
        "title": "Additional personal information",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.additionalPersonalInformation.havePriorName",
                "type": "option",
                "label": "Do you have any other legal name or aliases?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "priorName",
                "model": "personalInfo.*.additionalPersonalInformation.priorName",
                "parent": "personalInfo.*.additionalPersonalInformation.havePriorName",
                "type": "string",
                "required": "personalInfo.*.additionalPersonalInformation.havePriorName",
                "visible": "personalInfo.*.additionalPersonalInformation.havePriorName",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "civilStatus",
                "model": "personalInfo.*.additionalPersonalInformation.civilStatus",
                "type": "select",
                "label": "Civil status",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "S",
                        "label": "Single"
                    },
                    {
                        "data": "M",
                        "label": "Married"
                    },
                    {
                        "data": "D",
                        "label": "Divorced"
                    },
                    {
                        "data": "W",
                        "label": "Widowed"
                    },
                    {
                        "data": "A",
                        "label": "Annulled"
                    },
                    {
                        "data": "P",
                        "label": "Separated"
                    },
                    {
                        "data": "N",
                        "label": "Not Specified"
                    }
                ]
            },
            {
                "id": "country",
                "model": "personalInfo.*.additionalPersonalInformation.birthCountry",
                "type": "select",
                "label": "Country of birth",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "cascade": "personalInfo.*.additionalPersonalInformation.birthCity,personalInfo.*.additionalPersonalInformation.birthCityCustom",
                "source": "references:countries",
                "placeholder": "Philippines"
            },
            {
                "id": "city",
                "model": "personalInfo.*.additionalPersonalInformation.birthCity",
                "type": "select",
                "defaultValue": "personalInfo.*.additionalPersonalInformation.birthCountry != '163' ? 13 : undefined",
                "label": "City of birth",
                "required": "personalInfo.*.additionalPersonalInformation.birthCountry != null",
                "visible": "personalInfo.*.additionalPersonalInformation.birthCountry != null",
                "dataType": "string",
                "readOnly": false,
                "editable": "personalInfo.*.additionalPersonalInformation.birthCountry == '163'",
                "source": "references:provinces[personalInfo.*.additionalPersonalInformation.birthCountry]",
                "placeholder": "Please select city"
            },
            {
                "id": "birthCityCustom",
                "model": "personalInfo.*.additionalPersonalInformation.birthCityCustom",
                "type": "string",
                "maxLen": 30,
                "required": "(personalInfo.*.additionalPersonalInformation.birthCountry != null && personalInfo.*.additionalPersonalInformation.birthCity == 13)",
                "visible": "(personalInfo.*.additionalPersonalInformation.birthCountry != null && personalInfo.*.additionalPersonalInformation.birthCity == 13)",
                "readOnly": false,
                "placeholder": "City"
            },
            {
                "id": "nationality",
                "model": "personalInfo.*.additionalPersonalInformation.nationality",
                "type": "select",
                "label": "Nationality",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "163",
                        "label": "Filipino"
                    },
                    {
                        "data": "3",
                        "label": "Afghan"
                    },
                    {
                        "data": "169",
                        "label": "African"
                    },
                    {
                        "data": "4",
                        "label": "Albanian"
                    },
                    {
                        "data": "31",
                        "label": "Algerian"
                    },
                    {
                        "data": "131",
                        "label": "American"
                    },
                    {
                        "data": "5",
                        "label": "Andorran"
                    },
                    {
                        "data": "168",
                        "label": "Angolan"
                    },
                    {
                        "data": "96",
                        "label": "Argentinian"
                    },
                    {
                        "data": "170",
                        "label": "Armenian"
                    },
                    {
                        "data": "6",
                        "label": "Australian"
                    },
                    {
                        "data": "1",
                        "label": "Austrian"
                    },
                    {
                        "data": "229",
                        "label": "Austronesian"
                    },
                    {
                        "data": "174",
                        "label": "Azerbaijani"
                    },
                    {
                        "data": "15",
                        "label": "Bahamian"
                    },
                    {
                        "data": "14",
                        "label": "Bahraini"
                    },
                    {
                        "data": "8",
                        "label": "Bangladeshi"
                    },
                    {
                        "data": "9",
                        "label": "Barbadian"
                    },
                    {
                        "data": "7",
                        "label": "Belgian"
                    },
                    {
                        "data": "11",
                        "label": "Belizean"
                    },
                    {
                        "data": "179",
                        "label": "Belorussian"
                    },
                    {
                        "data": "30",
                        "label": "Beninese"
                    },
                    {
                        "data": "180",
                        "label": "Bermudian"
                    },
                    {
                        "data": "181",
                        "label": "Bhutanese"
                    },
                    {
                        "data": "199",
                        "label": "Bissau-Guinean"
                    },
                    {
                        "data": "12",
                        "label": "Bolivian"
                    },
                    {
                        "data": "177",
                        "label": "Bosnian"
                    },
                    {
                        "data": "13",
                        "label": "Brazilian"
                    },
                    {
                        "data": "47",
                        "label": "British"
                    },
                    {
                        "data": "253",
                        "label": "British"
                    },
                    {
                        "data": "196",
                        "label": "British, Scottish, Irish or Welsh"
                    },
                    {
                        "data": "165",
                        "label": "Bruneian"
                    },
                    {
                        "data": "10",
                        "label": "Bulgarian"
                    },
                    {
                        "data": "176",
                        "label": "Burkinabé"
                    },
                    {
                        "data": "16",
                        "label": "Burmese"
                    },
                    {
                        "data": "175",
                        "label": "Burundian"
                    },
                    {
                        "data": "69",
                        "label": "Cambodian"
                    },
                    {
                        "data": "183",
                        "label": "Cameroonian"
                    },
                    {
                        "data": "19",
                        "label": "Canadian"
                    },
                    {
                        "data": "189",
                        "label": "Caymanian"
                    },
                    {
                        "data": "98",
                        "label": "Central African"
                    },
                    {
                        "data": "245",
                        "label": "Chadian"
                    },
                    {
                        "data": "100",
                        "label": "Chilean"
                    },
                    {
                        "data": "150",
                        "label": "Chinese"
                    },
                    {
                        "data": "23",
                        "label": "Colombian"
                    },
                    {
                        "data": "Congo, (Kinshasa)",
                        "label": "Congolese"
                    },
                    {
                        "data": "58",
                        "label": "Croatian"
                    },
                    {
                        "data": "18",
                        "label": "Cuban"
                    },
                    {
                        "data": "25",
                        "label": "Cypriot"
                    },
                    {
                        "data": "26",
                        "label": "Czech"
                    },
                    {
                        "data": "28",
                        "label": "Dane"
                    },
                    {
                        "data": "190",
                        "label": "Djiboutian"
                    },
                    {
                        "data": "138",
                        "label": "Dominican"
                    },
                    {
                        "data": "167",
                        "label": "Dutchman"
                    },
                    {
                        "data": "36",
                        "label": "Ecuadorean"
                    },
                    {
                        "data": "38",
                        "label": "Egyptian"
                    },
                    {
                        "data": "133",
                        "label": "Emirati"
                    },
                    {
                        "data": "200",
                        "label": "Equatoguinean"
                    },
                    {
                        "data": "191",
                        "label": "Eritrean"
                    },
                    {
                        "data": "40",
                        "label": "Estonian"
                    },
                    {
                        "data": "39",
                        "label": "Ethiopian"
                    },
                    {
                        "data": "43",
                        "label": "Fijian"
                    },
                    {
                        "data": "42",
                        "label": "Finn"
                    },
                    {
                        "data": "41",
                        "label": "Frenchman"
                    },
                    {
                        "data": "195",
                        "label": "Gabonese"
                    },
                    {
                        "data": "Gambia",
                        "label": "Gambian"
                    },
                    {
                        "data": "197",
                        "label": "Georgian"
                    },
                    {
                        "data": "27",
                        "label": "German"
                    },
                    {
                        "data": "53",
                        "label": "Ghanaian"
                    },
                    {
                        "data": "54",
                        "label": "Greek"
                    },
                    {
                        "data": "201",
                        "label": "Greenlandic"
                    },
                    {
                        "data": "139",
                        "label": "Grenadian"
                    },
                    {
                        "data": "202",
                        "label": "Guamanian"
                    },
                    {
                        "data": "52",
                        "label": "Guatemalan"
                    },
                    {
                        "data": "198",
                        "label": "Guinean"
                    },
                    {
                        "data": "55",
                        "label": "Guyanese"
                    },
                    {
                        "data": "101",
                        "label": "Haitian"
                    },
                    {
                        "data": "203",
                        "label": "Honduran"
                    },
                    {
                        "data": "56",
                        "label": "Hungarian"
                    },
                    {
                        "data": "65",
                        "label": "Icelander"
                    },
                    {
                        "data": "61",
                        "label": "Indian"
                    },
                    {
                        "data": "164",
                        "label": "Indonesian"
                    },
                    {
                        "data": "Iran, Islamic Republic of",
                        "label": "Iranian"
                    },
                    {
                        "data": "64",
                        "label": "Iraqi"
                    },
                    {
                        "data": "63",
                        "label": "Irishman"
                    },
                    {
                        "data": "60",
                        "label": "Israeli"
                    },
                    {
                        "data": "59",
                        "label": "Italian"
                    },
                    {
                        "data": "Côte d'Ivoire",
                        "label": "Ivorian"
                    },
                    {
                        "data": "67",
                        "label": "Jamaican"
                    },
                    {
                        "data": "148",
                        "label": "Japanese"
                    },
                    {
                        "data": "68",
                        "label": "Jordanian"
                    },
                    {
                        "data": "204",
                        "label": "Kazakh"
                    },
                    {
                        "data": "33",
                        "label": "Kenyan"
                    },
                    {
                        "data": "206",
                        "label": "Kiribati"
                    },
                    {
                        "data": "Korea (North)",
                        "label": "Korean"
                    },
                    {
                        "data": "70",
                        "label": "Kuwaiti"
                    },
                    {
                        "data": "205",
                        "label": "Kyrgyzstani"
                    },
                    {
                        "data": "Lao PDR",
                        "label": "Laotian"
                    },
                    {
                        "data": "76",
                        "label": "Latvian"
                    },
                    {
                        "data": "104",
                        "label": "Lebanese"
                    },
                    {
                        "data": "209",
                        "label": "Liberian"
                    },
                    {
                        "data": "73",
                        "label": "Libyan"
                    },
                    {
                        "data": "44",
                        "label": "Liechtensteiner"
                    },
                    {
                        "data": "75",
                        "label": "Lithuanian"
                    },
                    {
                        "data": "71",
                        "label": "Luxembourger"
                    },
                    {
                        "data": "Macedonia, Republic of",
                        "label": "Macedonian"
                    },
                    {
                        "data": "105",
                        "label": "Madagascan"
                    },
                    {
                        "data": "84",
                        "label": "Malawian"
                    },
                    {
                        "data": "161",
                        "label": "Malaysian"
                    },
                    {
                        "data": "213",
                        "label": "Maldivian"
                    },
                    {
                        "data": "106",
                        "label": "Malian"
                    },
                    {
                        "data": "77",
                        "label": "Maltese"
                    },
                    {
                        "data": "50",
                        "label": "Manx"
                    },
                    {
                        "data": "185",
                        "label": "Māori or Kiwi"
                    },
                    {
                        "data": "103",
                        "label": "Mauritanian"
                    },
                    {
                        "data": "83",
                        "label": "Mauritian"
                    },
                    {
                        "data": "239",
                        "label": "Melanesian"
                    },
                    {
                        "data": "81",
                        "label": "Mexican"
                    },
                    {
                        "data": "Micronesia, Federated States of",
                        "label": "Micronesian"
                    },
                    {
                        "data": "212",
                        "label": "Moldovan"
                    },
                    {
                        "data": "80",
                        "label": "Monacan"
                    },
                    {
                        "data": "149",
                        "label": "Mongolian"
                    },
                    {
                        "data": "215",
                        "label": "Montenegrin"
                    },
                    {
                        "data": "78",
                        "label": "Moroccan"
                    },
                    {
                        "data": "74",
                        "label": "Mosotho"
                    },
                    {
                        "data": "97",
                        "label": "Motswana"
                    },
                    {
                        "data": "217",
                        "label": "Mozambican"
                    },
                    {
                        "data": "220",
                        "label": "Namibian"
                    },
                    {
                        "data": "225",
                        "label": "Nauruan"
                    },
                    {
                        "data": "224",
                        "label": "Nepalese"
                    },
                    {
                        "data": "87",
                        "label": "Nicaraguan"
                    },
                    {
                        "data": "137",
                        "label": "Nigerian"
                    },
                    {
                        "data": "107",
                        "label": "Nigerien"
                    },
                    {
                        "data": "Faroe Islands",
                        "label": "Norwegian"
                    },
                    {
                        "data": "226",
                        "label": "Omani"
                    },
                    {
                        "data": "Other",
                        "label": "Other"
                    },
                    {
                        "data": "93",
                        "label": "Pakistani"
                    },
                    {
                        "data": "Palestinian Territory",
                        "label": "Palestinian"
                    },
                    {
                        "data": "91",
                        "label": "Panamanian"
                    },
                    {
                        "data": "Paraguay",
                        "label": "Paraguayan"
                    },
                    {
                        "data": "92",
                        "label": "Peruvian"
                    },
                    {
                        "data": "Pitcairn",
                        "label": "Pitcairnese"
                    },
                    {
                        "data": "94",
                        "label": "Pole"
                    },
                    {
                        "data": "233",
                        "label": "Polynesian"
                    },
                    {
                        "data": "90",
                        "label": "Portuguese"
                    },
                    {
                        "data": "234",
                        "label": "Qatari"
                    },
                    {
                        "data": "237",
                        "label": "Roman"
                    },
                    {
                        "data": "108",
                        "label": "Romanian"
                    },
                    {
                        "data": "113",
                        "label": "Russian"
                    },
                    {
                        "data": "114",
                        "label": "Rwandan"
                    },
                    {
                        "data": "192",
                        "label": "Sahrawi"
                    },
                    {
                        "data": "Saint Vincent and Grenadines",
                        "label": "Saint Lucian"
                    },
                    {
                        "data": "37",
                        "label": "Salvadorean"
                    },
                    {
                        "data": "112",
                        "label": "Sammarinese"
                    },
                    {
                        "data": "140",
                        "label": "Samoan"
                    },
                    {
                        "data": "235",
                        "label": "Saudi"
                    },
                    {
                        "data": "120",
                        "label": "Senegalese"
                    },
                    {
                        "data": "241",
                        "label": "Serbian"
                    },
                    {
                        "data": "122",
                        "label": "Seychellois"
                    },
                    {
                        "data": "136",
                        "label": "Sierra Leonean"
                    },
                    {
                        "data": "162",
                        "label": "Singaporean"
                    },
                    {
                        "data": "118",
                        "label": "Slovak"
                    },
                    {
                        "data": "243",
                        "label": "Slovenian"
                    },
                    {
                        "data": "121",
                        "label": "Somali"
                    },
                    {
                        "data": "144",
                        "label": "South African"
                    },
                    {
                        "data": "32",
                        "label": "Spaniard"
                    },
                    {
                        "data": "24",
                        "label": "Spanish"
                    },
                    {
                        "data": "22",
                        "label": "SriLankan"
                    },
                    {
                        "data": "236",
                        "label": "Sudanese"
                    },
                    {
                        "data": "Suriname",
                        "label": "Surinamese"
                    },
                    {
                        "data": "116",
                        "label": "Swazi"
                    },
                    {
                        "data": "115",
                        "label": "Swede"
                    },
                    {
                        "data": "20",
                        "label": "Swiss"
                    },
                    {
                        "data": "Syrian Arab Republic (Syria)",
                        "label": "Syrian"
                    },
                    {
                        "data": "246",
                        "label": "Tadzhik"
                    },
                    {
                        "data": "154",
                        "label": "Taiwanese"
                    },
                    {
                        "data": "Tanzania, United Republic of",
                        "label": "Tanzanian"
                    },
                    {
                        "data": "157",
                        "label": "Thai"
                    },
                    {
                        "data": "248",
                        "label": "Timorese"
                    },
                    {
                        "data": "125",
                        "label": "Togolese"
                    },
                    {
                        "data": "249",
                        "label": "Tongan"
                    },
                    {
                        "data": "Trinidad and Tobago",
                        "label": "Trinidadian"
                    },
                    {
                        "data": "127",
                        "label": "Tunisian"
                    },
                    {
                        "data": "128",
                        "label": "Turk"
                    },
                    {
                        "data": "126",
                        "label": "Turkmen"
                    },
                    {
                        "data": "35",
                        "label": "Ugandan"
                    },
                    {
                        "data": "130",
                        "label": "Ukrainian"
                    },
                    {
                        "data": "110",
                        "label": "Uruguayan"
                    },
                    {
                        "data": "251",
                        "label": "Uzbek"
                    },
                    {
                        "data": "Venezuela (Bolivarian Republic)",
                        "label": "Venezuelan"
                    },
                    {
                        "data": "Viet Nam",
                        "label": "Vietnamese"
                    },
                    {
                        "data": "2",
                        "label": "Yemeni"
                    },
                    {
                        "data": "141",
                        "label": "Yugoslav"
                    },
                    {
                        "data": "143",
                        "label": "Zambian"
                    },
                    {
                        "data": "146",
                        "label": "Zimbabwean"
                    }
                ],
                "placeholder": "Filipino"
            },
            {
                "id": "identificationType",
                "model": "personalInfo.*.additionalPersonalInformation.identificationType",
                "type": "select",
                "label": "Proof of identity",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "TIN",
                        "label": "TIN"
                    },
                    {
                        "data": "SSS",
                        "label": "SSS"
                    },
                    {
                        "data": "GSIS",
                        "label": "GSIS"
                    }
                ],
                "placeholder": "Please select type"
            },
            {
                "id": "identificationNumber",
                "model": "personalInfo.*.additionalPersonalInformation.identificationNumber",
                "type": "string",
                "maxLen": 20,
                "required": true,
                "visible": true,
                "readOnly": false,
                "regex": "^[A-Za-z0-9,'\\-\\.\\s]+$",
                "placeholder": "12345678"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.additionalPersonalInformation.fatcaQuestion",
                "type": "option",
                "label": "Are tax returns currently filed in the United States of America?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "address",
                "model": "personalInfo.*.additionalPersonalInformation.addressPermanent",
                "type": "textarea",
                "maxLen": 200,
                "label": "Permanent address",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Building, street name, city"
            },
            {
                "id": "zipcode",
                "model": "personalInfo.*.additionalPersonalInformation.zipcodePermanent",
                "type": "string",
                "maxLen": 10,
                "label": "Zip Code",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "regex": "^\\d+$",
                "placeholder": "0000"
            },
            {
                "id": "country",
                "model": "personalInfo.*.additionalPersonalInformation.countryPermanent",
                "type": "select",
                "label": "Country",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "cascade": "personalInfo.*.additionalPersonalInformation.cityPermanent,personalInfo.*.additionalPersonalInformation.cityPermanentCustom",
                "source": "references:countries",
                "placeholder": "Philippines"
            },
            {
                "id": "city",
                "model": "personalInfo.*.additionalPersonalInformation.cityPermanent",
                "type": "select",
                "defaultValue": "personalInfo.*.additionalPersonalInformation.countryPermanent != '163' ? 13 : undefined",
                "label": "City",
                "required": "personalInfo.*.additionalPersonalInformation.countryPermanent != null",
                "visible": "personalInfo.*.additionalPersonalInformation.countryPermanent != null",
                "dataType": "string",
                "readOnly": false,
                "editable": "personalInfo.*.additionalPersonalInformation.countryPermanent == '163'",
                "source": "references:provinces[personalInfo.*.additionalPersonalInformation.countryPermanent]",
                "placeholder": "Please select city"
            },
            {
                "id": "cityPermanentCustom",
                "model": "personalInfo.*.additionalPersonalInformation.cityPermanentCustom",
                "type": "string",
                "maxLen": 30,
                "required": "(personalInfo.*.additionalPersonalInformation.countryPermanent != null && personalInfo.*.additionalPersonalInformation.cityPermanent == 13)",
                "visible": "(personalInfo.*.additionalPersonalInformation.countryPermanent != null && personalInfo.*.additionalPersonalInformation.cityPermanent == 13)",
                "readOnly": false,
                "placeholder": "City"
            },
            {
                "id": "preferredMailingAddress",
                "model": "personalInfo.*.additionalPersonalInformation.preferredMailingAddress",
                "type": "option",
                "label": "Preferred mailing address",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "present",
                        "label": "Present"
                    },
                    {
                        "data": "permanent",
                        "label": "Permanent"
                    },
                    {
                        "data": "business",
                        "label": "Business"
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.additionalPersonalInformation.planToChangeAddress",
                "type": "option",
                "label": "Do you plan to change address in the next 12 months?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "changeAddressDetails",
                "model": "personalInfo.*.additionalPersonalInformation.planToChangeAddressDetails",
                "type": "string",
                "required": "personalInfo.*.additionalPersonalInformation.planToChangeAddress",
                "visible": "personalInfo.*.additionalPersonalInformation.planToChangeAddress",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "separator",
                "model": "separator",
                "type": "separator",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "beneficialOwnerNote",
                "model": "beneficialOwnerNote",
                "type": "result",
                "required": "personalInfo.*.id == assured.id",
                "visible": "personalInfo.*.id == assured.id",
                "readOnly": false,
                "labels": [
                    {
                        "status": "active",
                        "label": "Note: Beneficial Owner (BO) refers to an individual who ultimately owns or controls the Policyowner and/or on whose behalf a transaction is being conducted. For example, an individual who finances and/or decides on the material transactions relating to the application/policy is a BO."
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.additionalPersonalInformation.haveBeneficialOwner",
                "type": "option",
                "label": "Do you have a Beneficial Owner?",
                "required": "personalInfo.*.id == assured.id",
                "visible": "personalInfo.*.id == assured.id",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "beneficialOwnerName",
                "model": "personalInfo.*.additionalPersonalInformation.beneficialOwnerName",
                "parent": "personalInfo.*.additionalPersonalInformation.haveBeneficialOwner",
                "type": "textarea",
                "maxLen": 100,
                "label": "Name of Beneficial Owner",
                "required": "personalInfo.*.id == assured.id && personalInfo.*.additionalPersonalInformation.haveBeneficialOwner",
                "visible": "personalInfo.*.id == assured.id && personalInfo.*.additionalPersonalInformation.haveBeneficialOwner",
                "readOnly": false
            },
            {
                "id": "contactNumber",
                "model": "personalInfo.*.additionalPersonalInformation.contactNumber",
                "parent": "personalInfo.*.additionalPersonalInformation.haveBeneficialOwner",
                "maxLen": 25,
                "label": "Contact Number",
                "required": "personalInfo.*.id == assured.id && personalInfo.*.additionalPersonalInformation.haveBeneficialOwner",
                "visible": "personalInfo.*.id == assured.id && personalInfo.*.additionalPersonalInformation.haveBeneficialOwner",
                "readOnly": false
            }
        ]
    },
    "personalInfo.agentReport": {
        "name": "personalInfo.agentReport",
        "required": true,
        "dependsOn": "",
        "title": "Agent report",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "howLongKnown",
                "model": "personalInfo.*.agentReport.howLongKnown",
                "type": "number",
                "maxLen": 3,
                "label": "'How long have you known the ' + (personalInfo.*.id == assured.id ? 'Life Insured' : 'Policyowner') + '? (number of years)'",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.agentReport.isRelatedTo",
                "type": "option",
                "label": "'Are you related to the ' + (personalInfo.*.id == assured.id ? 'Life Insured' : 'Policyowner') + '?'",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "relationshipToInsured",
                "model": "personalInfo.*.agentReport.relationship",
                "parent": "personalInfo.*.agentReport.isRelatedTo",
                "type": "select",
                "label": "'What is your relationship to the ' + (personalInfo.*.id == assured.id ? 'Life Insured' : 'Policyowner') + '?'",
                "required": "personalInfo.*.agentReport.isRelatedTo",
                "visible": "personalInfo.*.agentReport.isRelatedTo",
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "spouse",
                        "label": "Spouse"
                    },
                    {
                        "data": "child",
                        "label": "Child"
                    },
                    {
                        "data": "father",
                        "label": "Father"
                    },
                    {
                        "data": "mother",
                        "label": "Mother"
                    },
                    {
                        "data": "sibling",
                        "label": "Sibling"
                    },
                    {
                        "data": "grandparent",
                        "label": "Grandparent"
                    },
                    {
                        "data": "other",
                        "label": "Other"
                    },
                    {
                        "data": "estate",
                        "label": "Estate"
                    }
                ]
            },
            {
                "id": "relationshipDetails",
                "model": "personalInfo.*.agentReport.relationshipDetails",
                "parent": "personalInfo.*.agentReport.relationship",
                "type": "textarea",
                "label": "Please specify relationship",
                "required": "personalInfo.*.agentReport.isRelatedTo && personalInfo.*.agentReport.relationship == 'other'",
                "visible": "personalInfo.*.agentReport.isRelatedTo && personalInfo.*.agentReport.relationship == 'other'",
                "readOnly": false,
                "maxlen": 200
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.agentReport.isRelatedToFellowActiveAgent",
                "type": "option",
                "label": "'Is the ' + (personalInfo.*.id == assured.id ? 'Life Insured' : 'Policyowner') + ' a fellow active agent or a spouse/child of a fellow agent?'",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "isRelatedToFellowActiveAgentDetails",
                "model": "personalInfo.*.agentReport.isRelatedToFellowActiveAgentDetails",
                "parent": "personalInfo.*.agentReport.isRelatedToFellowActiveAgent",
                "type": "textarea",
                "maxLen": 200,
                "required": "personalInfo.*.agentReport.isRelatedToFellowActiveAgent",
                "visible": "personalInfo.*.agentReport.isRelatedToFellowActiveAgent",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "amountOfLifeInsuredSpouseAllInsurance",
                "model": "personalInfo.*.agentReport.amountOfLifeInsuredSpouseAllInsurance",
                "maxLen": 20,
                "label": "'What amount of life insurance is now in force on the ' + (personalInfo.*.id == assured.id ? 'Life Insured' : 'Policyowner') + '''s spouse in all companies? State None if none.'",
                "required": "personalInfo.*.additionalPersonalInformation.civilStatus == 'M'",
                "visible": "personalInfo.*.additionalPersonalInformation.civilStatus == 'M'",
                "readOnly": false
            },
            {
                "id": "distinctMark",
                "model": "personalInfo.*.agentReport.distinctMark",
                "type": "textarea",
                "maxLen": 200,
                "label": "'Describe any distinct or visible mark on the ' + (personalInfo.*.id == assured.id ? 'Life Insured' : 'Policyowner')",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.agentReport.knowAnyOtherCondition",
                "type": "option",
                "maxLen": 30,
                "label": "'Do you know anything about the ' + (personalInfo.*.id == assured.id ? 'Life Insured' : 'Policyowner') + '''s present physical condition, morals, association, occupation, or habits which would help facilitate the underwriting of this application?'",
                "required": false,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "knowAnyOtherConditionDetails",
                "model": "personalInfo.*.agentReport.knowAnyOtherConditionDetails",
                "parent": "personalInfo.*.agentReport.knowAnyOtherCondition",
                "type": "textarea",
                "maxLen": 200,
                "required": "personalInfo.*.agentReport.knowAnyOtherCondition",
                "visible": "personalInfo.*.agentReport.knowAnyOtherCondition",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "label",
                "model": "personalInfo.*.agentReport.examinedBy",
                "type": "label",
                "label": "(personalInfo.*.id == assured.id ? 'Life Insured' : 'Policyowner') + ' has been or will be examined by'",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "examinedByDoctor",
                "model": "personalInfo.*.agentReport.examinedByDoctor",
                "parent": "personalInfo.*.agentReport.examinedBy",
                "type": "textarea",
                "maxLen": 200,
                "label": "Name of doctor (optional)",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "date",
                "model": "personalInfo.*.agentReport.examinedByDate",
                "parent": "personalInfo.*.agentReport.examinedBy",
                "type": "date",
                "label": "Date",
                "required": "personalInfo.*.agentReport.examinedByDoctor != null && personalInfo.*.agentReport.examinedByDoctor != \"\"",
                "visible": "personalInfo.*.agentReport.examinedByDoctor != null && personalInfo.*.agentReport.examinedByDoctor != \"\"",
                "dataType": "string",
                "readOnly": false,
                "maxDate": "01 Jan 2199"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.agentReport.anyChangeInExistingInsurance",
                "type": "option",
                "label": "Has there been or will there be any change in any existing insurance in force on the life of the Life Insured?",
                "required": "personalInfo.*.id == assured.id",
                "visible": "personalInfo.*.id == assured.id",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.agentReport.anyChangeInExistingInsuranceDetails",
                "type": "textarea",
                "maxLen": 200,
                "required": "personalInfo.*.agentReport.anyChangeInExistingInsurance",
                "visible": "personalInfo.*.agentReport.anyChangeInExistingInsurance",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.agentReport.premiumPaidByLoanOrWithdrawal",
                "type": "option",
                "label": "Will premiums for the insurance be paid by a policy loan or withdrawal from any existing policy?",
                "required": "personalInfo.*.id == assured.id",
                "visible": "personalInfo.*.id == assured.id",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.agentReport.premiumPaidByLoanOrWithdrawalDetails",
                "type": "textarea",
                "maxLen": 200,
                "required": "personalInfo.*.agentReport.premiumPaidByLoanOrWithdrawal",
                "visible": "personalInfo.*.agentReport.premiumPaidByLoanOrWithdrawal",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.agentReport.agentConfirmation",
                "type": "option",
                "label": "'I confirm that the ' + (personalInfo.*.id == assured.id ? 'Life Insured' : 'Policyowner') + ' have filled out and signed the Application Form in my presence'",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "agentConfirmationDetails",
                "model": "personalInfo.*.agentReport.agentConfirmationDetails",
                "parent": "personalInfo.*.agentReport.agentConfirmation",
                "type": "textarea",
                "maxLen": 200,
                "required": "!personalInfo.*.agentReport.agentConfirmation",
                "visible": "!personalInfo.*.agentReport.agentConfirmation",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "examinedByDetails",
                "model": "personalInfo.*.agentReport.examinedByDetails",
                "type": "textarea",
                "maxLen": 200,
                "label": "'Other details or additional remarks for the '+ (personalInfo.*.id == assured.id ? 'Life Insured' : 'Policyowner') + ' (optional)'",
                "required": false,
                "visible": true,
                "readOnly": false
            }
        ]
    },
    "purchaseReview.termsAndCondition": {
        "name": "purchaseReview.termsAndCondition",
        "required": true,
        "dependsOn": "",
        "title": "Terms & Condition",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "declarationOfUnderstandingHeading",
                "description": "",
                "model": "declarationOfUnderstandingHeading",
                "type": "description",
                "label": "PLEASE READ CAREFULLY BEFORE SIGNING THE APPLICATION FORM \n\nDECLARATION OF UNDERSTANDING",
                "required": false,
                "visible": "purchaseReview.role!='agent'",
                "readOnly": false
            },
            {
                "id": "declarationOfUnderstandingAcknowledge",
                "description": "1. All the statements and answers in this Application and any information given to Pru Life UK or its medical examiners, including any amendments, are complete, true, correct, and binding on all parties in interest under the Policy applied for.\n2. Pru Life UK reserves the right to request for additional medical evidence to assess my health. Any physician, hospital, clinic, or medical organization is authorized to furnish Pru Life UK with any medical information pertaining to me.\n3. Prior to the issuance of the Policy applied for, I agree to inform Pru Life UK of any change in my (a) state of health, and (b) occupation or activities.\n4. If a material fact is not disclosed in this Application, the Policy issued may not be valid. I understand that if in doubt as to whether a fact is material, it will be disclosed to Pru Life UK.\n5. The insurance coverage will not commence until this Application has been approved, the initial premium has been received by Pru Life UK, and the Policy has been issued while I am in good health.\n6. I will update Pru Life UK in a timely manner of any change in details previously provided especially with respect to a change in citizenship, tax status, or tax residency. If the Policyowner is a corporation, changes in registered address, address of place of business, substantial shareholders, legal or beneficial owners who own or control more than 10% of the Policyowner will also be disclosed.\n7. I confirm that the benefit illustration, quotation proposal, product summary, and other relevant sales materials relating to this Application were received, completely and clearly explained, and fully understood.\n8. The amounts to be invested in the Policy have been declared to relevant tax authorities and were not derived, directly or indirectly, from illegal activities or sources and/or tax evasion.\n9. This Application is subject to the guidelines on anti-money laundering and financial underwriting. Pru Life UK can disapprove this Application or terminate the Policy if I fail to provide the necessary information relating to the Application or relevant transaction or if the Application violates the said guidelines.\n10. If this Application is declined by Pru Life UK, its only obligation is to return the premium paid. If the Application is cancelled for failure to submit requirements, Pru Life UK will return the premium paid less fees for medical examinations it incurred.\n11. I accept, agree with, and understand the features, benefits, nature, limitations, exclusions, risks, terms, and conditions of the Policy, product and attached riders. For unit-linked products, the next computed unit price following the issue date of the Policy will be applied.\n12. I agree to receive financial and other-policy related information and notifications through the mobile number and email address I have provided to Pru Life UK. In addition, I agree to be pre-registered to PRUaccess, an online facility that will enable me to manage and request certain transactions involving my Policy.\n\nI acknowledge that Pru Life UK shall not be liable for claims or liabilities incurred as a result of the dissemination of my personal information through the said facilities. I understand that if I no longer wish to receive such information or notification through email or mobile and/or be registered to PRUaccess, I may contact Pru Life UK at telephone numbers (632) 887 LIFE (887 5433) for Metro Manila and 1800 10 PRULINK (1 800 10 7785465) for domestic toll-free, or email contact.us@prulifeuk.com.ph.\n",
                "model": "purchaseReview.termsAndCondition.policyHolder.acknowledge",
                "type": "check",
                "defaultValue": false,
                "label": "I, the Policyowner, declare, agree to, and authorize the following:",
                "required": "purchaseReview.role=='policyHolder'",
                "visible": "purchaseReview.role=='policyHolder'",
                "dataType": "boolean",
                "readOnly": false
            },
            {
                "id": "declarationOfUnderstandingAcknowledge",
                "description": "1. All the statements and answers in this Application and any information given to Pru Life UK or its medical examiners, including any amendments, are complete, true, correct, and binding on all parties in interest under the Policy applied for.\n2. Pru Life UK reserves the right to request for additional medical evidence to assess my health. Any physician, hospital, clinic, or medical organization is authorized to furnish Pru Life UK with any medical information pertaining to me.\n3. Prior to the issuance of the Policy applied for, I agree to inform Pru Life UK of any change in my (a) state of health, and (b) occupation or activities.\n4. If a material fact is not disclosed in this Application, the Policy issued may not be valid. I understand that if in doubt as to whether a fact is material, it will be disclosed to Pru Life UK.\n5. The insurance coverage will not commence until this Application has been approved, the initial premium has been received by Pru Life UK, and the Policy has been issued while I am in good health.\n6. I will update Pru Life UK in a timely manner of any change in details previously provided especially with respect to a change in citizenship, tax status, or tax residency. If the Policyowner is a corporation, changes in registered address, address of place of business, substantial shareholders, legal or beneficial owners who own or control more than 10% of the Policyowner will also be disclosed.\n7. I confirm that the benefit illustration, quotation proposal, product summary, and other relevant sales materials relating to this Application were received, completely and clearly explained, and fully understood.\n8. The amounts to be invested in the Policy have been declared to relevant tax authorities and were not derived, directly or indirectly, from illegal activities or sources and/or tax evasion.\n9. This Application is subject to the guidelines on anti-money laundering and financial underwriting. Pru Life UK can disapprove this Application or terminate the Policy if I fail to provide the necessary information relating to the Application or relevant transaction or if the Application violates the said guidelines.\n10. If this Application is declined by Pru Life UK, its only obligation is to return the premium paid. If the Application is cancelled for failure to submit requirements, Pru Life UK will return the premium paid less fees for medical examinations it incurred.\n11. I accept, agree with, and understand the features, benefits, nature, limitations, exclusions, risks, terms, and conditions of the Policy, product and attached riders. For unit-linked products, the next computed unit price following the issue date of the Policy will be applied.\n12. I agree to receive financial and other-policy related information and notifications through the mobile number and email address I have provided to Pru Life UK. In addition, I agree to be pre-registered to PRUaccess, an online facility that will enable me to manage and request certain transactions involving my Policy.\n\nI acknowledge that Pru Life UK shall not be liable for claims or liabilities incurred as a result of the dissemination of my personal information through the said facilities. I understand that if I no longer wish to receive such information or notification through email or mobile and/or be registered to PRUaccess, I may contact Pru Life UK at telephone numbers (632) 887 LIFE (887 5433) for Metro Manila and 1800 10 PRULINK (1 800 10 7785465) for domestic toll-free, or email contact.us@prulifeuk.com.ph.\n",
                "model": "purchaseReview.termsAndCondition.assured.acknowledge",
                "type": "check",
                "defaultValue": false,
                "label": "I, the Life Insured, declare, agree to, and authorize the following:",
                "required": "purchaseReview.role=='policyHolder' && purchaseReview.isAssuredDifferent",
                "visible": "purchaseReview.role=='policyHolder' && purchaseReview.isAssuredDifferent",
                "dataType": "boolean",
                "readOnly": false
            },
            {
                "id": "dataPrivacy",
                "description": "For purposes of this Section:\na. “Pru Life UK” shall refer to Pru Life Insurance Corporation of U.K., its directors, officers, employees, insurance agents, insurance brokers, other agents and representatives, reinsurers, contractors, legal advisers, and Pru Life Insurance Corporation of U.K.’s subsidiaries, affiliates and other related entities, and their directors, officers, employees, insurance agents, insurance brokers, other agents and representatives, contractors and legal advisers.\nb. ”Data subject” shall mean any or all of the Policyowner, the Life Insured, the Beneficial Owner, Beneficiary/ies, and all other individuals whose personal information or sensitive personal information is or will be disclosed to Pru Life UK for processing, which may either be manual or automated, in relation to the issuance, implementation and handling of insurance policies, direct marketing, profiling, risk assessment, underwriting and administration of insurance coverage and claims, data analytics and data sharing with Pru Life UK.\n",
                "model": "dataPrivacy",
                "type": "description",
                "label": "DATA PRIVACY",
                "required": false,
                "visible": "purchaseReview.role!='agent'",
                "readOnly": false
            },
            {
                "id": "dataPrivacyAcknowledge",
                "description": "1. I, together with all other data subjects (“We”), hereby consent to the manual or automated processing of our personal information and/or sensitive personal information by Pru Life UK, within or without the Philippines, in accordance with the Data Privacy Act and its implementing rules and regulations and the publicly available Pru Life UK privacy policy found in the company website at www.prulifeuk.com.ph.,for the purposes deemed fit by Pru Life UK, which shall include issuance, implementation and handling of insurance policies, direct marketing, profiling (which includes product and other offers), risk assessment, underwriting and administration of insurance coverage and claims, data analytics, and data sharing with Pru Life UK.\n2. We hereby authorize Pru Life UK to disclose our particulars or any information to any Authority (governmental and other regulatory authority or self-regulatory body in various jurisdictions) in connection or adherence (whether voluntary or otherwise) with Applicable Requirements (laws, regulations, orders, guidelines, codes, market standard, good practices and requests of or agreements with any Authority as promulgated and amended from time to time). Such disclosure may be effected directly or sent through any of Pru Life UK’s Head Office(s) or other related corporations, or in such manner as may be deemed fit. For purposes of the foregoing and notwithstanding any other provision in this Application or any other agreement between the parties, Pru Life UK may need us to provide further information or documents as may be required for disclosure to any Authority and we shall provide the same within such time as may be reasonably required. We hereby consent to the use and transfer of our particulars under Republic Act No. 10173 the Data Privacy Act of 2012, the Anti-Money Laundering Act of 2001, the E-Commerce Act of 2000, the Philippine AIDS Prevention and Control Act, the Magna Carta for Disabled Persons, Presidential Decree No. 1718, and any other applicable data protection legislation from time to time in force (“Data Privacy Laws”).\n3. Pru Life UK, its duly authorized processors such as but not limited to contractors for services providing anti-money laundering systems, claims investigation, photocopy and scanning, courier, and printing, and reinsurers are allowed to use, collect, store and process our personal and sensitive personal information obtained by Pru Life UK pursuant to this Application or Policy issued by Pru Life UK for legitimate purposes such as underwriting and administration of insurance coverage and claims and processing of after sales transactions. Any such information collected may be retained by the aforementioned parties until ten (10) years from the date of maturity or termination of the Policy or date of denial of this Application, whichever comes earlier.\n4. We warrant that the consent of the Beneficial Owner (if any), Beneficiary/ies and all other data subjects were obtained for the use, storage and processing of their information for purposes of compliance with regulatory requirements, the processing of this Application, and administration of the Policy issued. I undertake to provide Pru Life UK with proof of my authority to give the required consents of the other data subjects with respect to the disclosure and processing of their personal information and/or sensitive personal information for the legitimate purposes set out in this Application or in the Policy issued by Pru Life UK.\n5. In accordance with the Insurance Commission’s Circular Letter No. 2016-54, we understand that our medical information will be uploaded to a Medical Information Database accessible to life insurance companies for the purpose of enhancing risk assessment and preventing fraud. Once uploaded, all life insurance companies will have limited access to our information in order to protect our right to privacy in accordance with law. A copy of Circular Letter No. 2016-54 may be accessed at the Insurance Commission’s website at www.insurance.gov.ph.\n6. I will indemnify Pru Life UK and hold it free and harmless for any damages incurred by Pru Life UK as a result of any claim filed by any of the data subjects in relation to a breach of any of the warranties above, or for any damages arising from any misrepresentation made in this Application or from any material breach of its provisions.\n",
                "model": "purchaseReview.termsAndCondition.dataPrivacy.policyHolder.acknowledge",
                "type": "check",
                "defaultValue": false,
                "label": "I, the Policyowner, together with all other data subjects (“We”) declare, agree to, and authorize the following:",
                "required": "purchaseReview.role=='policyHolder'",
                "visible": "purchaseReview.role=='policyHolder'",
                "dataType": "boolean",
                "readOnly": false
            },
            {
                "id": "dataPrivacyAcknowledge",
                "description": "1. I, together with all other data subjects (“We”), hereby consent to the manual or automated processing of our personal information and/or sensitive personal information by Pru Life UK, within or without the Philippines, in accordance with the Data Privacy Act and its implementing rules and regulations and the publicly available Pru Life UK privacy policy found in the company website at www.prulifeuk.com.ph.,for the purposes deemed fit by Pru Life UK, which shall include issuance, implementation and handling of insurance policies, direct marketing, profiling (which includes product and other offers), risk assessment, underwriting and administration of insurance coverage and claims, data analytics, and data sharing with Pru Life UK.\n2. We hereby authorize Pru Life UK to disclose our particulars or any information to any Authority (governmental and other regulatory authority or self-regulatory body in various jurisdictions) in connection or adherence (whether voluntary or otherwise) with Applicable Requirements (laws, regulations, orders, guidelines, codes, market standard, good practices and requests of or agreements with any Authority as promulgated and amended from time to time). Such disclosure may be effected directly or sent through any of Pru Life UK’s Head Office(s) or other related corporations, or in such manner as may be deemed fit. For purposes of the foregoing and notwithstanding any other provision in this Application or any other agreement between the parties, Pru Life UK may need us to provide further information or documents as may be required for disclosure to any Authority and we shall provide the same within such time as may be reasonably required. We hereby consent to the use and transfer of our particulars under Republic Act No. 10173 the Data Privacy Act of 2012, the Anti-Money Laundering Act of 2001, the E-Commerce Act of 2000, the Philippine AIDS Prevention and Control Act, the Magna Carta for Disabled Persons, Presidential Decree No. 1718, and any other applicable data protection legislation from time to time in force (“Data Privacy Laws”).\n3. Pru Life UK, its duly authorized processors such as but not limited to contractors for services providing anti-money laundering systems, claims investigation, photocopy and scanning, courier, and printing, and reinsurers are allowed to use, collect, store and process our personal and sensitive personal information obtained by Pru Life UK pursuant to this Application or Policy issued by Pru Life UK for legitimate purposes such as underwriting and administration of insurance coverage and claims and processing of after sales transactions. Any such information collected may be retained by the aforementioned parties until ten (10) years from the date of maturity or termination of the Policy or date of denial of this Application, whichever comes earlier.\n4. We warrant that the consent of the Beneficial Owner (if any), Beneficiary/ies and all other data subjects were obtained for the use, storage and processing of their information for purposes of compliance with regulatory requirements, the processing of this Application, and administration of the Policy issued. I undertake to provide Pru Life UK with proof of my authority to give the required consents of the other data subjects with respect to the disclosure and processing of their personal information and/or sensitive personal information for the legitimate purposes set out in this Application or in the Policy issued by Pru Life UK.\n5. In accordance with the Insurance Commission’s Circular Letter No. 2016-54, we understand that our medical information will be uploaded to a Medical Information Database accessible to life insurance companies for the purpose of enhancing risk assessment and preventing fraud. Once uploaded, all life insurance companies will have limited access to our information in order to protect our right to privacy in accordance with law. A copy of Circular Letter No. 2016-54 may be accessed at the Insurance Commission’s website at www.insurance.gov.ph.\n6. I will indemnify Pru Life UK and hold it free and harmless for any damages incurred by Pru Life UK as a result of any claim filed by any of the data subjects in relation to a breach of any of the warranties above, or for any damages arising from any misrepresentation made in this Application or from any material breach of its provisions.\n",
                "model": "purchaseReview.termsAndCondition.dataPrivacy.assured.acknowledge",
                "type": "check",
                "defaultValue": false,
                "label": "I, the Life Insured, together with all other data subjects (“We”) declare, agree to, and authorize the following:",
                "required": "purchaseReview.role=='policyHolder' && purchaseReview.isAssuredDifferent",
                "visible": "purchaseReview.role=='policyHolder' && purchaseReview.isAssuredDifferent",
                "dataType": "boolean",
                "readOnly": false
            },
            {
                "id": "productChosen",
                "description": "{{withRiderNeeds}} The chosen policy was recommended by the Life Insurance Agent/Insurance Broker based on the result of this assessment and I take full responsibility for the choice of insurance product\n{{withoutRiderNeeds}} The chosen policy was recommended by the Life Insurance Agent/Insurance Broker based on the discussions with the Client and not on the result of this assessment and I take full responsibility for the choice of insurance product which was not based on the results of this Suitability Assessment\n\n(In case of product purchase which is not based on or supported by the results of this Product Suitability Assessment)\nI take full responsibility for the choice of insurance product which may or may not be based on the results of this Suitability Assessment.\n",
                "model": "productChosen",
                "type": "description",
                "label": "PRODUCT CHOSEN",
                "required": false,
                "visible": "purchaseReview.role=='policyHolder'",
                "readOnly": false
            },
            {
                "id": "RiskAssessmentDisclaimer",
                "description": "{{productWaiver}} (a) I acknowledge that I decided on my own judgment and accord to avail of a unit-linked product. I am voluntarily purchasing a unit-linked product despite the results of the risk profiler recommending me against the purchase of such product; and/or\n{{fundWaiver}} (b) I confirm that I have decided to invest instead in another fund which I understand has a risk level that is higher than what was identified by the risk profiler based on my responses. I completely understand and accept the risks I am taking in exchange for possible higher returns. I expressly agree to assume these risks.\n\nIn view of the foregoing, I hereby release, discharge, and hold free and harmless Pru Life UK, its shareholders, directors, officers, employees, agents, affiliates and successors-in-interest, and all other persons having interest therein and thereby, from all claims, losses, damages, liabilities, demands, and causes of actions (and those incidentally connected therewith) that may arise from my own decision to invest in the unit-linked product and/or the fund/s with higher risks.\n",
                "model": "RiskAssessmentDisclaimer",
                "type": "description",
                "label": "RISK ASSESSMENT DISCLAIMER",
                "required": false,
                "visible": "purchaseReview.role=='policyHolder'",
                "readOnly": false
            },
            {
                "id": "clientAcknowledgement",
                "description": "My Life Insurance Agent/Insurance Broker made me aware that the policy recommended is a life insurance product.\nMy Life Insurance Agent/Insurance Broker explained the recommended policy effectively in terms of features and benefits.\nMy Life Insurance Agent/Insurance Broker discussed the policy charges\nMy Life Insurance Agent/Insurance Broker explained what “Partial/Full Withdrawal Value” is, its non-guaranteed feature, and its impact on the other benefits of the policy.\nMy Life Insurance Agent/Insurance Broker explained the rights available to me during the cooling off period.\nMy Life Insurance Agent/Insurance Broker explained the policy’s premium-paying period.\nMy Life Insurance Agent/Insurance Broker explained the non-guaranteed fund values and rate of accumulation.\nMy Life Insurance Agent/Insurance Broker explained the impact of not paying the premiums when they fall due.\nI hereby declare that I have read and fully understood this entire Suitability Assessment Form and that the answers I provided are accurate and complete.\nI confirm that my Life Insurance Agent/Insurance Broker has satisfactorily explained to me the result of this Suitability Assessment Form, the product features, the benefits, and the risks.\n",
                "model": "clientAcknowledgement",
                "type": "description",
                "label": "SAF – CLIENT’S ACKNOWLEDGEMENT",
                "required": false,
                "visible": "purchaseReview.role=='policyHolder'",
                "readOnly": false
            },
            {
                "id": "salesIllustrationDisclaimer",
                "description": "I have read and understood the disclosures and the contents presented in the Sales Illustration. My agent has explained to my satisfaction the principal features of the Policy plus the contents of this Sales Illustration and the manner in which the variable benefits will reflect the investment experience of the separate account(s). I fully understand the terms and conditions of this Policy and that when buying this Policy, I am assuming all investment risks associated with it.\n\nI have read and understood the Investment Risk Profile in the Suitability Assessment Form and have made an assessment of my risk appetite with the help of my agent. I have taken my Investment Risk Profile into consideration in my choice of fund allocation.\n\nI also understand that in the event of claim, my Policy, including any optional benefits, will terminate if the aggregate amount of claim on Accelerated Total and Permanent Disability Benefit and/or Accelerated Crisis Cover Benefit and/or Accelerated Life Care Benefit is equal to the sum assured on the basic Policy exclusive of any optional benefits.\n\nI have been provided all relevant sales materials which will help me assess the suitability of this product to my needs.\n\nIn addition, I understand that the Company has the right to vary the Insurance Charge, Policy Fee, Annual Management Charge, and any rider charge and extra charge in the future, but will not do so without prior approval of the Insurance Commission.\n",
                "model": "salesIllustrationDisclaimer",
                "type": "description",
                "label": "SALES ILLUSTRATION DISCLAIMER",
                "required": false,
                "visible": "purchaseReview.role=='policyHolder'",
                "readOnly": false
            },
            {
                "id": "variabilityAndUnderstanding",
                "description": "I acknowledge that:\nI have applied with Pru Life UK for a Variable Life Insurance Policy and have reviewed the illustration(s) that shows how a life insurance Policy could perform using the Company’s assumptions and based on the Insurance Commission's guidelines on investment returns.\nI understand that since the fund performance may vary, the values of my units are not guaranteed and will depend on the actual performance at that given period and that the value of my Policy could be less than the capital invested. The unit values of my Variable Life Insurance Policy are periodically published.\nI understand that the investment risks under the Policy are to be borne solely by me, as the Policyowner.\nI confirm that:\n  a. I have been furnished with copies of the Sales Illustration/Quotation Proposal, product summary, and any other relevant sales materials (\"Materials\");.\n  b. the Materials have been properly, completely and satisfactorily explained to me; and\n  c. I have fully understood the Materials.\n\nI hereby declare that I accept, agree with, and understand the features, benefits, nature, limitations, exclusions, risks, terms and conditions of the Policy that I am applying to purchase.\n",
                "model": "variabilityAndUnderstanding",
                "type": "description",
                "label": "ACKNOWLEDGEMENT OF VARIABILITY AND UNDERSTANDING",
                "required": false,
                "visible": "purchaseReview.role=='policyHolder'",
                "readOnly": false
            },
            {
                "id": "authorizationToFurnishMedicalInformation",
                "description": "Pru Life UK is considering an application for insurance on my life and I hereby authorize YOU* or any physician, surgeon, or other person in your or their employ or who you or they are connected with, in any way, or any hospital or other entity, to give Pru Life UK or its authorized medical doctor or representative, any information which may be desired and which was acquired while attending to me in a professional capacity. A photographic copy of this authorization shall be as valid as the original. This authorization is in connection with my application for insurance only.\n",
                "model": "authorizationToFurnishMedicalInformation",
                "type": "description",
                "label": "AUTHORIZATION TO FURNISH MEDICAL INFORMATION",
                "required": false,
                "visible": "purchaseReview.role=='policyHolder' || purchaseReview.role=='insured'",
                "readOnly": false
            },
            {
                "id": "replacementNotification",
                "description": "In connection with my decision to purchase a product from Pru Life Insurance Corporation of U.K. (“Pru Life UK”), I hereby certify the following:\n1) My purchase of the {{productName}} is a replacement for my existing Policy/ies with Pru Life UK and/or with another insurance company.\n2) My agent has disclosed to me the fees and charges that I will bear in switching from my original Policy/ies to the {{productName}} (“the Replacement Policy”). I understand that the fees and charges would include all fees associated with the disposal of or reduction in coverage or interests under my original Policy/ies and/or fees incurred during the purchase of or increase in coverage or interests under the Replacement Policy.\n3) My agent has advised me of the disadvantages (i.e. loss of financial benefits, higher premium, non-insurability, etc.) that I will or may suffer (temporarily or otherwise) as a result of switching from my original Policy/ies to the Replacement Policy.\n",
                "model": "replacementNotification",
                "type": "description",
                "label": "REPLACEMENT NOTIFICATION",
                "required": false,
                "visible": "purchaseReview.role!='agent' && purchaseReview.isReplacement",
                "readOnly": false
            },
            {
                "id": "agentAcknowledgment",
                "description": "a. I will treat the information given in this “Suitability Assessment Form” with strict confidence and I will use it for the purpose of finding out information for the process of recommending insurance products. I will not use it for any other purpose.\nb. The advice provided herein is based on facts given solely by the client in this “Suitability Assessment Form.” I have taken reasonable steps to make sure that the advice is suitable to the client, taking into consideration the facts disclosed and other relevant facts which are made available to me. I have also explained to the client about the features of the policy/ies recommended and have given him/her enough information so that he/she can make an informed and intelligent decision on the policy/ies he/she intends to purchase.\nc. I declare that there are no conflicts of interest that may affect the recommendations I have provided to my client.\nd. I declare that reasonable effort was exerted in making sure that the plan is suitable to the needs/profile/financial objectives of my client pursuant to IC CL 33-2013: Market Conduct Guidelines: B.3 Agent’s Sales Process:Suitability and my Career Agent’s Master Agreement (CAMA).\n",
                "model": "agentAcknowledgment",
                "type": "description",
                "label": "AGENT’S ACKNOWLEDGEMENT",
                "required": false,
                "visible": "purchaseReview.role=='agent'",
                "readOnly": false
            }
        ]
    },
    "personalInfo.requiredDocuments": {
        "name": "personalInfo.requiredDocuments",
        "required": true,
        "dependsOn": "",
        "title": "Document Checklist",
        "subtitle": "",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "documents",
                "model": "personalInfo.*.documents",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "model": "personalInfo.*.documents.medical.uploadMedicalDocuments",
                "type": "option",
                "defaultValue": true,
                "label": " ",
                "required": false,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Upload medical documents"
                    },
                    {
                        "data": false,
                        "label": "Endorse client to accredited clinic"
                    }
                ]
            }
        ]
    },
    "personalInfo.medical.diabetic": {
        "name": "personalInfo.medical.diabetic",
        "required": true,
        "dependsOn": "",
        "title": "Diabetic Questionnaire",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "floatNumber",
                "model": "personalInfo.*.medical.diabetic.lastYearWeight",
                "type": "floatnumber",
                "maxLen": 10,
                "label": "Weight last year (kg):",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "date",
                "model": "personalInfo.*.medical.diabetic.diagnosedDate",
                "type": "date",
                "label": "Date diabetes was diagnosed",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "currentDoctor",
                "model": "personalInfo.*.medical.diabetic.currentDoctor",
                "type": "dynamic",
                "label": "Doctor(s) currently treating you",
                "required": true,
                "visible": true,
                "readOnly": false,
                "template": "personalInfo.medical.currentDoctor",
                "addLinkText": "Add more doctors",
                "removeLinkText": "Remove doctor"
            },
            {
                "id": "consultationFrequency",
                "model": "personalInfo.*.medical.diabetic.consultationFrequency",
                "type": "string",
                "maxLen": 30,
                "label": "Frequency of consultation",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "date",
                "model": "personalInfo.*.medical.diabetic.dateOfFirstConsultation",
                "type": "date",
                "label": "Date of first consultation",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "date",
                "model": "personalInfo.*.medical.diabetic.dateOfLastConsultation",
                "type": "date",
                "label": "Date of last consultation",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.diabetic.consultedOtherDoctor",
                "type": "option",
                "label": "For the past three (3) years, have you consulted doctor(s) other than the current? ",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "otherDoctor",
                "model": "personalInfo.*.medical.diabetic.otherDoctor",
                "parent": "personalInfo.*.medical.diabetic.consultedOtherDoctor",
                "type": "dynamic",
                "required": "personalInfo.*.medical.diabetic.consultedOtherDoctor",
                "visible": "personalInfo.*.medical.diabetic.consultedOtherDoctor",
                "readOnly": false,
                "template": "personalInfo.medical.currentDoctor",
                "addLinkText": "Add more doctors",
                "removeLinkText": "Remove doctor"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.diabetic.foodExchangeList",
                "type": "option",
                "label": "Do you follow a strict diet and measure your food portions from a food exchange list?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "dietRules",
                "model": "personalInfo.*.medical.diabetic.dietRules",
                "parent": "personalInfo.*.medical.diabetic.foodExchangeList",
                "type": "string",
                "maxLen": 30,
                "label": "Specify the diet rules you follow",
                "required": "personalInfo.*.medical.diabetic.foodExchangeList",
                "visible": "personalInfo.*.medical.diabetic.foodExchangeList",
                "readOnly": false,
                "layout": "normal"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.medical.diabetic.dailyPrescriptioncCarbohydrates",
                "parent": "personalInfo.*.medical.diabetic.foodExchangeList",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Daily prescription of Carbohydrates (grams)",
                "required": "personalInfo.*.medical.diabetic.foodExchangeList",
                "visible": "personalInfo.*.medical.diabetic.foodExchangeList",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.medical.diabetic.dailyPrescriptionProtein",
                "parent": "personalInfo.*.medical.diabetic.foodExchangeList",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Daily prescription of Protein (grams)",
                "required": "personalInfo.*.medical.diabetic.foodExchangeList",
                "visible": "personalInfo.*.medical.diabetic.foodExchangeList",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.medical.diabetic.dailyPrescriptionFats",
                "parent": "personalInfo.*.medical.diabetic.foodExchangeList",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Daily prescription of Fats (grams)",
                "required": "personalInfo.*.medical.diabetic.foodExchangeList",
                "visible": "personalInfo.*.medical.diabetic.foodExchangeList",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.diabetic.useInsulinOrTablet",
                "type": "option",
                "label": "Do you use Insulin and tablets?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "insulinOrTabletType",
                "model": "personalInfo.*.medical.diabetic.insulinOrTabletType",
                "parent": "personalInfo.*.medical.diabetic.useInsulinOrTablet",
                "type": "string",
                "maxLen": 30,
                "label": "Specify the type of insulins or tablets",
                "required": "personalInfo.*.medical.diabetic.useInsulinOrTablet",
                "visible": "personalInfo.*.medical.diabetic.useInsulinOrTablet",
                "readOnly": false,
                "layout": "normal"
            },
            {
                "id": "dailyInsulinOrTabletDose",
                "model": "personalInfo.*.medical.diabetic.dailyInsulinOrTabletDose",
                "parent": "personalInfo.*.medical.diabetic.useInsulinOrTablet",
                "type": "string",
                "maxLen": 30,
                "label": "Daily dose",
                "required": "personalInfo.*.medical.diabetic.useInsulinOrTablet",
                "visible": "personalInfo.*.medical.diabetic.useInsulinOrTablet",
                "readOnly": false
            },
            {
                "id": "frequencyInsulinOrTabletUse",
                "model": "personalInfo.*.medical.diabetic.frequencyInsulinOrTabletUse",
                "parent": "personalInfo.*.medical.diabetic.useInsulinOrTablet",
                "type": "string",
                "maxLen": 30,
                "label": "Frequency of use",
                "required": "personalInfo.*.medical.diabetic.useInsulinOrTablet",
                "visible": "personalInfo.*.medical.diabetic.useInsulinOrTablet",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.diabetic.insulinShock",
                "type": "option",
                "label": "Have you ever had insulin shock or frequent insulin reactions? ",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "insulinShockDetails",
                "model": "personalInfo.*.medical.diabetic.insulinShockDetails",
                "parent": "personalInfo.*.medical.diabetic.insulinShock",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.medical.diabetic.insulinShock",
                "visible": "personalInfo.*.medical.diabetic.insulinShock",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.diabetic.diabeticComa",
                "type": "option",
                "label": "Have you ever been in a diabetic coma or had acidosis severe enough to require hospitalization?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "diabeticComaDetails",
                "model": "personalInfo.*.medical.diabetic.diabeticComaDetails",
                "parent": "personalInfo.*.medical.diabetic.diabeticComa",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.medical.diabetic.diabeticComa",
                "visible": "personalInfo.*.medical.diabetic.diabeticComa",
                "readOnly": false,
                "layout": "normal",
                "placeholder": "Please provide details including dates"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "type": "option",
                "label": "Do you check your urine for sugar content?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "sugarContentUrineTestFrequency",
                "model": "personalInfo.*.medical.diabetic.sugarContentUrineTestFrequency",
                "parent": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "type": "string",
                "maxLen": 30,
                "label": "Frequency of test",
                "required": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "visible": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "readOnly": false
            },
            {
                "id": "sugarContentUrineTestPositiveResult",
                "model": "personalInfo.*.medical.diabetic.sugarContentUrineTestPositiveResult",
                "parent": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "type": "string",
                "maxLen": 30,
                "label": "Frequency of positive test results",
                "required": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "visible": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "readOnly": false
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.medical.diabetic.sugarContentUrineTestPositivePercentage",
                "parent": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Percentage of positive tests",
                "required": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "visible": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "sugarContentUrineTestPositiveDate",
                "model": "personalInfo.*.medical.diabetic.sugarContentUrineTestPositiveDate",
                "parent": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "type": "string",
                "maxLen": 30,
                "label": "Date(s) of positive tests",
                "required": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "visible": "personalInfo.*.medical.diabetic.sugarContentUrine",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.diabetic.heartEyesSystemIllness",
                "type": "option",
                "label": "Have you ever had any illness or disease of the heart, eyes, circulatory or nervous system?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "heartEyesSystemIllnessDoctor",
                "model": "personalInfo.*.medical.diabetic.heartEyesSystemIllnessDoctor",
                "parent": "personalInfo.*.medical.diabetic.heartEyesSystemIllness",
                "type": "dynamic",
                "required": "personalInfo.*.medical.diabetic.heartEyesSystemIllness",
                "visible": "personalInfo.*.medical.diabetic.heartEyesSystemIllness",
                "readOnly": false,
                "template": "personalInfo.medical.heartEyesSystemIllnessDoctor",
                "addLinkText": "Add more doctors",
                "removeLinkText": "Remove doctor"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.diabetic.electrocardiogramMade",
                "type": "option",
                "label": "Have you had an electrocardiogram made lately?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "electrocardiogramMadeByName",
                "model": "personalInfo.*.medical.diabetic.electrocardiogramMadeByName",
                "parent": "personalInfo.*.medical.diabetic.electrocardiogramMade",
                "type": "string",
                "maxLen": 30,
                "label": "Attending Physician's Name",
                "required": "personalInfo.*.medical.diabetic.electrocardiogramMade",
                "visible": "personalInfo.*.medical.diabetic.electrocardiogramMade",
                "readOnly": false,
                "layout": "normal"
            },
            {
                "id": "electrocardiogramMadeAddress",
                "model": "personalInfo.*.medical.diabetic.electrocardiogramMadeAddress",
                "parent": "personalInfo.*.medical.diabetic.electrocardiogramMade",
                "type": "string",
                "maxLen": 30,
                "label": "Address",
                "required": "personalInfo.*.medical.diabetic.electrocardiogramMade",
                "visible": "personalInfo.*.medical.diabetic.electrocardiogramMade",
                "readOnly": false,
                "layout": "normal"
            },
            {
                "id": "date",
                "model": "personalInfo.*.medical.diabetic.electrocardiogramMadeDate",
                "parent": "personalInfo.*.medical.diabetic.electrocardiogramMade",
                "type": "date",
                "label": "Date of last test",
                "required": "personalInfo.*.medical.diabetic.electrocardiogramMade",
                "visible": "personalInfo.*.medical.diabetic.electrocardiogramMade",
                "dataType": "string",
                "readOnly": false,
                "layout": "normal"
            }
        ]
    },
    "personalInfo.medical.currentDoctor": {
        "name": "personalInfo.medical.currentDoctor",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "name",
                "model": "name",
                "maxLen": 30,
                "label": "Attending Physician's Name",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "address",
                "model": "address",
                "type": "string",
                "maxLen": 30,
                "label": "Address",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            }
        ]
    },
    "personalInfo.medical.doctor": {
        "name": "personalInfo.medical.doctor",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "name",
                "model": "name",
                "maxLen": 30,
                "label": "Name",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "address",
                "model": "address",
                "type": "string",
                "maxLen": 30,
                "label": "Address",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            }
        ]
    },
    "personalInfo.medical.heartEyesSystemIllnessDoctor": {
        "name": "personalInfo.medical.heartEyesSystemIllnessDoctor",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "name",
                "model": "name",
                "maxLen": 30,
                "label": "Attending Physician's Name",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "address",
                "model": "address",
                "type": "string",
                "maxLen": 30,
                "label": "Address",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "diagnosis",
                "model": "diagnosis",
                "maxLen": 30,
                "label": "Diagnosis",
                "required": false,
                "visible": true,
                "readOnly": false
            }
        ]
    },
    "personalInfo.previousInsurance.pendingApplicationInOtherInsuranceCompaniesDetail": {
        "name": "personalInfo.previousInsurance.pendingApplicationInOtherInsuranceCompaniesDetail",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "insuranceCompany",
                "model": "insuranceCompany",
                "maxLen": 30,
                "label": "Insurance company",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "policyNumber",
                "model": "policyNumber",
                "maxLen": 20,
                "label": "Policy number (Optional)",
                "required": "optionalField",
                "visible": true,
                "readOnly": false
            },
            {
                "id": "amountOfCoverage",
                "model": "amountOfCoverage",
                "type": "number",
                "maxLen": 12,
                "label": "Amount of coverage",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "reasonForPending",
                "model": "reasonForPending",
                "type": "textarea",
                "maxLen": 200,
                "label": "Reason for pending application",
                "required": false,
                "visible": true,
                "readOnly": false,
                "layout": "normal"
            }
        ]
    },
    "personalInfo.previousInsurance.insuranceInForceDetail": {
        "name": "personalInfo.previousInsurance.insuranceInForceDetail",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "insuranceCompany",
                "model": "insuranceCompany",
                "maxLen": 30,
                "label": "Insurance company",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "policyNumber",
                "model": "policyNumber",
                "maxLen": 20,
                "label": "Policy number (Optional)",
                "required": "optionalField",
                "visible": true,
                "readOnly": false
            },
            {
                "id": "amountOfCoverage",
                "model": "amountOfCoverage",
                "type": "number",
                "maxLen": 12,
                "label": "Amount of coverage",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "dateIssued",
                "model": "dateIssued",
                "type": "date",
                "label": "Date Issued",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "ridersAttached",
                "model": "ridersAttached",
                "maxLen": 70,
                "label": "Rider(s) attached",
                "required": false,
                "visible": true,
                "readOnly": false,
                "layout": "normal"
            }
        ]
    },
    "personalInfo.lifestyle.racingInfoDetails": {
        "name": "personalInfo.lifestyle.racingInfoDetails",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "racingType",
                "model": "racingType",
                "maxLen": 30,
                "label": "Type of racing (e.g. sports car, kart, cross country, modified, jet, etc)",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "racedInPastOneToTwoYears",
                "type": "option",
                "label": "Have you raced this type for the past one (1) to two (2) years?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "number",
                "model": "numberOfRacesInPastOneToTwoYears",
                "parent": "racedInPastOneToTwoYears",
                "type": "number",
                "maxLen": 5,
                "label": "Number of races",
                "required": "racedInPastOneToTwoYears",
                "visible": "racedInPastOneToTwoYears",
                "readOnly": false
            },
            {
                "id": "floatNumber",
                "model": "totalMileRacedInPastOneToTwoYears",
                "parent": "racedInPastOneToTwoYears",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Total miles raced",
                "required": "racedInPastOneToTwoYears",
                "visible": "racedInPastOneToTwoYears",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "racedInPastTwelveMonths",
                "type": "option",
                "label": "Have you raced this type for the past twelve (12) months?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "number",
                "model": "numberOfRacesInPastTwelveMonths",
                "parent": "racedInPastTwelveMonths",
                "type": "number",
                "maxLen": 5,
                "label": "Number of races",
                "required": "racedInPastTwelveMonths",
                "visible": "racedInPastTwelveMonths",
                "readOnly": false
            },
            {
                "id": "floatNumber",
                "model": "totalMileRacedInPastTwelveMonths",
                "parent": "racedInPastTwelveMonths",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Total miles raced",
                "required": "racedInPastTwelveMonths",
                "visible": "racedInPastTwelveMonths",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "fastestAverageSpeed",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Average speed of fastest races for this type of racing (KPH)",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "fastestSpeedAttained",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Fastest speed attained for this type of racing (KPH)",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "raceInNextTwelveMonths",
                "type": "option",
                "label": "Do you plan to race within the next twelve (12) months?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "number",
                "model": "numberOfRacesInNextTwelveMonths",
                "parent": "raceInNextTwelveMonths",
                "type": "number",
                "maxLen": 5,
                "label": "Number of races",
                "required": "raceInNextTwelveMonths",
                "visible": "raceInNextTwelveMonths",
                "readOnly": false
            },
            {
                "id": "floatNumber",
                "model": "raceNextTwelveMonths",
                "parent": "raceInNextTwelveMonths",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Total miles to race",
                "required": "raceInNextTwelveMonths",
                "visible": "raceInNextTwelveMonths",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            }
        ]
    },
    "personalInfo.family.siblingsDetail": {
        "name": "personalInfo.family.siblingsDetail",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "name",
                "model": "name",
                "maxLen": 30,
                "label": "Name of sibling",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "hasIllness",
                "type": "option",
                "label": "Has any of your sibling/s suffered from tuberculosis, diabetes, high blood pressure, heart, kidney or sickle disease, or mental illness?",
                "required": false,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "ageAtDiagnosis",
                "model": "ageAtDiagnosis",
                "parent": "hasIllness",
                "type": "number",
                "maxLen": 3,
                "label": "Age at diagnosis",
                "required": "hasIllness",
                "visible": "hasIllness",
                "readOnly": false
            },
            {
                "id": "detail",
                "model": "detail",
                "parent": "hasIllness",
                "type": "textarea",
                "maxLen": 100,
                "required": "hasIllness",
                "visible": "hasIllness",
                "readOnly": false,
                "placeholder": "Provide details"
            },
            {
                "id": "yesOrNo",
                "model": "isAlive",
                "type": "option",
                "label": "Is your sibling still alive?",
                "required": false,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "ageAtDeath",
                "model": "ageAtDeath",
                "parent": "isAlive",
                "type": "number",
                "maxLen": 3,
                "label": "Age at death",
                "required": "isAlive == false",
                "visible": "isAlive == false",
                "readOnly": false
            },
            {
                "id": "causeOfDeath",
                "model": "causeOfDeath",
                "parent": "isAlive",
                "type": "textarea",
                "maxLen": 100,
                "label": "Cause of death",
                "required": "isAlive == false",
                "visible": "isAlive == false",
                "readOnly": false
            }
        ]
    },
    "personalInfo.family.childrenDetail": {
        "name": "personalInfo.family.childrenDetail",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "name",
                "model": "name",
                "maxLen": 30,
                "label": "Name of child",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "hasIllness",
                "type": "option",
                "label": "Has any of your children suffered from tuberculosis, diabetes, high blood pressure, heart, kidney or sickle disease, or mental illness?",
                "required": false,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "ageAtDiagnosis",
                "model": "ageAtDiagnosis",
                "parent": "hasIllness",
                "type": "number",
                "maxLen": 3,
                "label": "Age at diagnosis",
                "required": "hasIllness",
                "visible": "hasIllness",
                "readOnly": false
            },
            {
                "id": "detail",
                "model": "detail",
                "parent": "hasIllness",
                "type": "textarea",
                "maxLen": 100,
                "required": "hasIllness",
                "visible": "hasIllness",
                "readOnly": false,
                "placeholder": "Provide details"
            },
            {
                "id": "yesOrNo",
                "model": "isAlive",
                "type": "option",
                "label": "Is your child still alive?",
                "required": false,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "ageAtDeath",
                "model": "ageAtDeath",
                "parent": "isAlive",
                "type": "number",
                "maxLen": 3,
                "label": "Age at death",
                "required": "isAlive == false",
                "visible": "isAlive == false",
                "readOnly": false
            },
            {
                "id": "deathDetails",
                "model": "deathDetails",
                "parent": "isAlive",
                "type": "textarea",
                "maxLen": 100,
                "label": "Cause of death",
                "required": "isAlive == false",
                "visible": "isAlive == false",
                "readOnly": false
            }
        ]
    },
    "personalInfo.lifestyle.qualifications": {
        "name": "personalInfo.lifestyle.qualifications",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "name",
                "model": "name",
                "maxLen": 50,
                "label": "Name or title of qualification or certification",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "date",
                "model": "date",
                "type": "date",
                "label": "Date attained",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            }
        ]
    },
    "personalInfo.lifestyle.planToClimbInAnotherCountryDetail": {
        "name": "personalInfo.lifestyle.planToClimbInAnotherCountryDetail",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "countryAndLocation",
                "model": "countryAndLocation",
                "maxLen": 50,
                "label": "Country and location",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "date",
                "model": "date",
                "type": "date",
                "label": "Date",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            }
        ]
    },
    "personalInfo.lifestyle.certifications": {
        "name": "personalInfo.lifestyle.certifications",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "certificationName",
                "model": "certificationName",
                "maxLen": 30,
                "label": "Name or title of certification",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "date",
                "model": "date",
                "type": "date",
                "label": "Date attained",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "provideDetails",
                "model": "certifiedBy",
                "type": "string",
                "maxLen": 30,
                "label": "Certified by",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            }
        ]
    },
    "personalInfo.lifestyle.diveFor": {
        "name": "personalInfo.lifestyle.diveFor",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "depthOfDiveField",
                "model": "depthOfDive",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Depth of dive (in meters)",
                "required": false,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "depthOfDiveField",
                "model": "numberOfDiveLastMonths",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Number of dives with this depth in the last 12 months",
                "required": false,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "depthOfDiveField",
                "model": "timeUnderwaterLastMonths",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Average time (in minutes) underwater with this depth in the last 12 months",
                "required": false,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "depthOfDiveField",
                "model": "numberOfDiveNextMonths",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Number of dives with this depth in the next 12 months",
                "required": false,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "depthOfDiveField",
                "model": "timeUnderwaterNextMonths",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "Average time (in minutes) underwater with this depth in the next 12 months",
                "required": false,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            }
        ]
    },
    "personalInfo.lifestyle.aviation.anotherAircraftDetail": {
        "name": "personalInfo.lifestyle.aviation.anotherAircraftDetail",
        "required": true,
        "dependsOn": "",
        "title": "",
        "subtitle": "",
        "type": "partial",
        "group": "",
        "components": [
            {
                "id": "aircraftName",
                "model": "aircraftName",
                "maxLen": 15,
                "label": "Type of aircraft",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "floatNumber",
                "model": "hoursFlownLastTwelveMonthsAsAPilot",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "For the past twelve (12) months, what is the total number of hours have you flown this aircraft?",
                "required": false,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "hoursPlanFlyNextTwelveMonthsAsAPilot",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "In the next twelve (12) months, what is the total number of hours you plan to fly this aircraft?",
                "required": false,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            }
        ]
    },
    "personalInfo.medical.respiratory": {
        "name": "personalInfo.medical.respiratory",
        "required": true,
        "dependsOn": "",
        "title": "Respiratory Disorder Questionnaire",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "currentDoctor",
                "model": "personalInfo.*.medical.respiratory.currentDoctor",
                "type": "dynamic",
                "label": "Doctor(s) currently treating you:",
                "required": true,
                "visible": true,
                "readOnly": false,
                "template": "personalInfo.medical.doctor",
                "addLinkText": "Add more doctor",
                "removeLinkText": "Remove this doctor"
            },
            {
                "id": "consultationFrequency",
                "model": "personalInfo.*.medical.respiratory.consultationFrequency",
                "type": "string",
                "maxLen": 30,
                "label": "Frequency of consultation",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "date",
                "model": "personalInfo.*.medical.respiratory.dateOfFirstConsultation",
                "type": "date",
                "label": "Date of first consultation",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "date",
                "model": "personalInfo.*.medical.respiratory.dateOfLastConsultation",
                "type": "date",
                "label": "Date of last consultation",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.respiratory.consultedOtherDoctor",
                "type": "option",
                "label": "For the past three (3) years, have you consulted doctor(s) other than the current? ",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "otherDoctor",
                "model": "personalInfo.*.medical.respiratory.otherDoctor",
                "parent": "personalInfo.*.medical.respiratory.consultedOtherDoctor",
                "type": "dynamic",
                "required": "personalInfo.*.medical.respiratory.consultedOtherDoctor",
                "visible": "personalInfo.*.medical.respiratory.consultedOtherDoctor",
                "readOnly": false,
                "template": "personalInfo.medical.doctor",
                "addLinkText": "Add more doctor",
                "removeLinkText": "Remove this doctor"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "type": "option",
                "label": "Do you suffer or have you ever suffered from asthma, bronchitis, emphysema, PTB and other pulmonary diseases?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "otherPulmonaryDiseasesDetails",
                "model": "personalInfo.*.medical.respiratory.otherPulmonaryDiseasesDetails",
                "parent": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "visible": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "otherPulmonaryDiseasesOccurPeriod",
                "model": "personalInfo.*.medical.respiratory.otherPulmonaryDiseasesOccurPeriod",
                "parent": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "type": "string",
                "maxLen": 30,
                "label": "How often do attack occurs?",
                "required": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "visible": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "readOnly": false
            },
            {
                "id": "date",
                "model": "personalInfo.*.medical.respiratory.otherPulmonaryDiseasesLastOccurDate",
                "parent": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "type": "date",
                "label": "What was the date of last attack?",
                "required": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "visible": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "otherPulmonaryDiseasesAttackRate",
                "model": "personalInfo.*.medical.respiratory.otherPulmonaryDiseasesAttackRate",
                "parent": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "type": "select",
                "label": "How would you rate the pain of the attacks?",
                "required": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "visible": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases",
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "minimal",
                        "label": "Minimal"
                    },
                    {
                        "data": "mild",
                        "label": "Mild"
                    },
                    {
                        "data": "moderate",
                        "label": "Moderate"
                    },
                    {
                        "data": "severe",
                        "label": "Severe"
                    },
                    {
                        "data": "unknown",
                        "label": "Unknown"
                    }
                ]
            },
            {
                "id": "otherPulmonaryDiseasesAttackRateDetails",
                "model": "personalInfo.*.medical.respiratory.otherPulmonaryDiseasesAttackRateDetails",
                "parent": "personalInfo.*.medical.respiratory.otherPulmonaryDiseasesAttackRate",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases && personalInfo.*.medical.respiratory.otherPulmonaryDiseasesAttackRate",
                "visible": "personalInfo.*.medical.respiratory.otherPulmonaryDiseases && personalInfo.*.medical.respiratory.otherPulmonaryDiseasesAttackRate",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.respiratory.productiveOfSputum",
                "type": "option",
                "label": "Are they productive of sputum?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "productiveOfSputumDetails",
                "model": "personalInfo.*.medical.respiratory.productiveOfSputumDetails",
                "parent": "personalInfo.*.medical.respiratory.productiveOfSputum",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.medical.respiratory.productiveOfSputum",
                "visible": "personalInfo.*.medical.respiratory.productiveOfSputum",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.respiratory.coughedUpBlood",
                "type": "option",
                "label": "Have you ever coughed up blood?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "coughedUpBloodDetails",
                "model": "personalInfo.*.medical.respiratory.coughedUpBloodDetails",
                "parent": "personalInfo.*.medical.respiratory.coughedUpBlood",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.medical.respiratory.coughedUpBlood",
                "visible": "personalInfo.*.medical.respiratory.coughedUpBlood",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.respiratory.lostTimeOfWork",
                "type": "option",
                "label": "Have you ever lost time from work?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "lostTimeOfWorkDetails",
                "model": "personalInfo.*.medical.respiratory.lostTimeOfWorkDetails",
                "parent": "personalInfo.*.medical.respiratory.lostTimeOfWork",
                "type": "string",
                "maxLen": 30,
                "label": "When and how long?",
                "required": "personalInfo.*.medical.respiratory.lostTimeOfWork",
                "visible": "personalInfo.*.medical.respiratory.lostTimeOfWork",
                "readOnly": false,
                "layout": "normal",
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.respiratory.hospitalized",
                "type": "option",
                "label": "Have you ever been hospitalized?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "hospitalizedDetails",
                "model": "personalInfo.*.medical.respiratory.hospitalizedDetails",
                "parent": "personalInfo.*.medical.respiratory.hospitalized",
                "type": "string",
                "maxLen": 30,
                "label": "When and how long?",
                "required": "personalInfo.*.medical.respiratory.hospitalized",
                "visible": "personalInfo.*.medical.respiratory.hospitalized",
                "readOnly": false,
                "layout": "normal",
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.respiratory.underTreatment",
                "type": "option",
                "label": "Are you under treatment or taking medication?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "underTreatmentDetails",
                "model": "personalInfo.*.medical.respiratory.underTreatmentDetails",
                "parent": "personalInfo.*.medical.respiratory.underTreatment",
                "type": "string",
                "maxLen": 30,
                "label": "For how long?",
                "required": "personalInfo.*.medical.respiratory.underTreatment",
                "visible": "personalInfo.*.medical.respiratory.underTreatment",
                "readOnly": false,
                "layout": "normal",
                "placeholder": "Please provide details"
            },
            {
                "id": "medicationsPrescribed",
                "model": "personalInfo.*.medical.respiratory.medicationsPrescribed",
                "parent": "personalInfo.*.medical.respiratory.underTreatment",
                "type": "string",
                "maxLen": 30,
                "label": "Indicate medications prescribed",
                "required": "personalInfo.*.medical.respiratory.underTreatment",
                "visible": "personalInfo.*.medical.respiratory.underTreatment",
                "readOnly": false,
                "layout": "normal",
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.respiratory.shortBreath",
                "type": "option",
                "label": "Are you short of breath or do you wheeze on exertion?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "shortBreathDetails",
                "model": "personalInfo.*.medical.respiratory.shortBreathDetails",
                "parent": "personalInfo.*.medical.respiratory.shortBreath",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.medical.respiratory.shortBreath",
                "visible": "personalInfo.*.medical.respiratory.shortBreath",
                "readOnly": false,
                "placeholder": "Please provide details"
            }
        ]
    },
    "personalInfo.lifestyle.divingJumpingInfo": {
        "name": "personalInfo.lifestyle.divingJumpingInfo",
        "required": true,
        "dependsOn": "",
        "title": "Diving or Jumping Questionnaire",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "type": "option",
                "label": "Do you engage in scuba diving?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "timeOfDiveJump",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.timeOfScubaDiving",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "type": "string",
                "maxLen": 30,
                "label": "For how long?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "numberFieldOfDiveJump",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.periodOfScubaDiving",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "type": "number",
                "maxLen": 5,
                "label": "What is the average number of scuba dives per year?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "dataType": "number",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInSkyDiving",
                "type": "option",
                "label": "Do you engage in sky diving?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "timeOfDiveJump",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.timeOfSkyDiving",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInSkyDiving",
                "type": "string",
                "maxLen": 30,
                "label": "For how long?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInSkyDiving",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInSkyDiving",
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "numberFieldOfDiveJump",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.periodOfSkyDiving",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInSkyDiving",
                "type": "number",
                "maxLen": 5,
                "label": "What is the average number of sky dives per year?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInSkyDiving",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInSkyDiving",
                "dataType": "number",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "type": "option",
                "label": "Do you engage in bungee jumping?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "timeOfDiveJump",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.timeOfBungeeJumping",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "type": "string",
                "maxLen": 30,
                "label": "For how long?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "numberFieldOfDiveJump",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.periodOfBungeeJumping",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "type": "number",
                "maxLen": 5,
                "label": "What is the average number of jumps per year?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "dataType": "number",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.hasRegisterDiveClub",
                "type": "option",
                "label": "Do you belong to a duly registered diving club or association?",
                "required": "(personalInfo.*.lifestyle.divingJumpingInfo?.hasEngageInSkyDiving) || (personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving)",
                "visible": "(personalInfo.*.lifestyle.divingJumpingInfo?.hasEngageInSkyDiving) || (personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.clubName",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasRegisterDiveClub",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasRegisterDiveClub",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasRegisterDiveClub",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide name of club or association"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.forSalvageOrExploration",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "type": "option",
                "label": "For Scuba Diving, do you dive for salvage or exploration?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.salvageOrExplorationDetails",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.forSalvageOrExploration",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.forSalvageOrExploration",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.forSalvageOrExploration",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.illnessOrInjuryForDive",
                "type": "option",
                "label": "Have you ever suffered any illness or injury as a result of diving?",
                "required": "(personalInfo.*.lifestyle.divingJumpingInfo?.hasEngageInSkyDiving) || (personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving)",
                "visible": "(personalInfo.*.lifestyle.divingJumpingInfo?.hasEngageInSkyDiving) || (personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.illnessOrInjuryDetailsForDive",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.illnessOrInjuryForDive",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.illnessOrInjuryForDive",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.illnessOrInjuryForDive",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.hasAccidentForDive",
                "type": "option",
                "label": "Have you ever had an accident while diving?",
                "required": "(personalInfo.*.lifestyle.divingJumpingInfo?.hasEngageInSkyDiving) || (personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving)",
                "visible": "(personalInfo.*.lifestyle.divingJumpingInfo?.hasEngageInSkyDiving) || (personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.accidentDetailsForDive",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasAccidentForDive",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasAccidentForDive",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasAccidentForDive",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.illnessOrInjuryForJumping",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "type": "option",
                "label": "Have you ever suffered any illness or injury as a result of jumping?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.illnessOrInjuryDetailsForJump",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.illnessOrInjuryForJumping",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.illnessOrInjuryForJumping",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.illnessOrInjuryForJumping",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.hasAccidentForJump",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "type": "option",
                "label": "Have you ever had an accident while jumping?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInBungeeJumping",
                "dataType": "boolean",
                "readOnly": false,
                "commnet": 10,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.accidentDetailsForJump",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasAccidentForJump",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasAccidentForJump",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasAccidentForJump",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.diveWithPartner",
                "type": "option",
                "label": "Do you dive with partners?",
                "required": "(personalInfo.*.lifestyle.divingJumpingInfo?.hasEngageInSkyDiving) || (personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving)",
                "visible": "(personalInfo.*.lifestyle.divingJumpingInfo?.hasEngageInSkyDiving) || (personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "numberFieldOfDiveJump",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.partnerNumber",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.diveWithPartner",
                "type": "number",
                "maxLen": 5,
                "label": "How many partners?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.diveWithPartner",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.diveWithPartner",
                "dataType": "number",
                "readOnly": false
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.howOftenWithPartner",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.diveWithPartner",
                "type": "string",
                "maxLen": 30,
                "label": "How often?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.diveWithPartner",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.diveWithPartner",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.isDivForPleasure",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "type": "option",
                "label": "Do you scuba dive for pleasure purposes?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "divForPleasure",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.diveForPleasure",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.isDivForPleasure",
                "type": "dynamic",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.isDivForPleasure",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.isDivForPleasure",
                "readOnly": false,
                "template": "personalInfo.lifestyle.diveFor",
                "addLinkText": "Add depth of dive",
                "removeLinkText": "Remove depth of dive"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.isDivForCommercial",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "type": "option",
                "label": "Do you scuba dive for commercial purposes?",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasEngageInScubaDiving",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "divForCommercial",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.diveForCommercial",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.isDivForCommercial",
                "type": "dynamic",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.isDivForCommercial",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.isDivForCommercial",
                "readOnly": false,
                "template": "personalInfo.lifestyle.diveFor",
                "addLinkText": "Add depth of dive",
                "removeLinkText": "Remove depth of dive"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.hasCertification",
                "type": "option",
                "label": "Do you have any certifications attained?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "certification",
                "model": "personalInfo.*.lifestyle.divingJumpingInfo.certifications",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasCertification",
                "type": "dynamic",
                "required": "personalInfo.*.lifestyle.divingJumpingInfo.hasCertification",
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasCertification",
                "readOnly": false,
                "template": "personalInfo.lifestyle.certifications",
                "addLinkText": "Add certificate(s)",
                "removeLinkText": "Remove certificate"
            },
            {
                "id": "certificationTips",
                "model": "certificationTips",
                "parent": "personalInfo.*.lifestyle.divingJumpingInfo.hasCertification",
                "type": "label",
                "label": "*Uploading of certificate(s) in the “Document Checklist” card can help during underwriting evaluation",
                "required": false,
                "visible": "personalInfo.*.lifestyle.divingJumpingInfo.hasCertification",
                "readOnly": false,
                "layout": "normal"
            }
        ]
    },
    "personalInfo.lifestyle.generalSports": {
        "name": "personalInfo.lifestyle.generalSports",
        "required": true,
        "dependsOn": "",
        "title": "General Sports Questionnaire",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "sports",
                "model": "personalInfo.*.lifestyle.generalSports.sports",
                "type": "textarea",
                "maxLen": 100,
                "label": "What sport/s do you participate in?",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "date",
                "model": "personalInfo.*.lifestyle.generalSports.startDate",
                "type": "date",
                "label": "When did you first commence in this sport?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "nature",
                "model": "personalInfo.*.lifestyle.generalSports.nature",
                "type": "checkgroup",
                "defaultValue": "[]",
                "label": "What is the nature of your participation to the sport? ",
                "required": true,
                "visible": true,
                "readOnly": false,
                "options": [
                    {
                        "data": "recreational",
                        "label": "Recreational"
                    },
                    {
                        "data": "competitive",
                        "label": "Competitive"
                    },
                    {
                        "data": "amateur",
                        "label": "Amateur"
                    },
                    {
                        "data": "professional",
                        "label": "Professional"
                    }
                ]
            },
            {
                "id": "howOften",
                "model": "personalInfo.*.lifestyle.generalSports.frequency",
                "type": "textarea",
                "maxLen": 100,
                "label": "How often do you participate?",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.generalSports.qualified",
                "type": "option",
                "label": "Do you have any formal qualifications, certifications or rankings attained?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "qualifications",
                "model": "personalInfo.*.lifestyle.generalSports.qualifications",
                "parent": "personalInfo.*.lifestyle.generalSports.qualified",
                "type": "dynamic",
                "required": "personalInfo.*.lifestyle.generalSports.qualified",
                "visible": "personalInfo.*.lifestyle.generalSports.qualified",
                "readOnly": false,
                "template": "personalInfo.lifestyle.qualifications",
                "addLinkText": "Add more qualifications",
                "removeLinkText": "Remove qualification"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.generalSports.isClubMember",
                "type": "option",
                "label": "Are you a member of a club or association?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "club",
                "model": "personalInfo.*.lifestyle.generalSports.club",
                "parent": "personalInfo.*.lifestyle.generalSports.isClubMember",
                "type": "textarea",
                "maxLen": 100,
                "required": "personalInfo.*.lifestyle.generalSports.isClubMember",
                "visible": "personalInfo.*.lifestyle.generalSports.isClubMember",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.generalSports.injured",
                "type": "option",
                "label": "Have you ever had an injury arising from either training or competition that required medical attention?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "injury",
                "model": "personalInfo.*.lifestyle.generalSports.injury",
                "parent": "personalInfo.*.lifestyle.generalSports.injured",
                "type": "textarea",
                "maxLen": 100,
                "required": "personalInfo.*.lifestyle.generalSports.injured",
                "visible": "personalInfo.*.lifestyle.generalSports.injured",
                "readOnly": false,
                "placeholder": "Please provide details including dates"
            },
            {
                "id": "additionalInfo",
                "model": "personalInfo.*.lifestyle.generalSports.additionalInfo",
                "type": "textarea",
                "maxLen": 100,
                "label": "Please provide any additional information that you feel is important (optional)",
                "required": false,
                "visible": true,
                "readOnly": false
            }
        ]
    },
    "personalInfo.lifestyle.mountaineering": {
        "name": "personalInfo.lifestyle.mountaineering",
        "required": true,
        "dependsOn": "",
        "title": "Mountaineering Questionnaire",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "activities",
                "model": "personalInfo.*.lifestyle.mountaineering.activities",
                "maxLen": 30,
                "label": "What type/s of activities do you participate in, e.g. bouldering, hiking, ice climbing, indoor climbing, mountaineering, trekking etc.?",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "howLong",
                "model": "personalInfo.*.lifestyle.mountaineering.howLong",
                "maxLen": 30,
                "label": "How long have you been active in this sport?",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "howOften",
                "model": "personalInfo.*.lifestyle.mountaineering.frequency",
                "maxLen": 30,
                "label": "How often do you participate?",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "location",
                "model": "personalInfo.*.lifestyle.mountaineering.where",
                "maxLen": 30,
                "label": "Where do you do this?",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "equipment",
                "model": "personalInfo.*.lifestyle.mountaineering.equipment",
                "type": "checkgroup",
                "defaultValue": "[]",
                "label": "What equipment do you use?",
                "required": true,
                "visible": true,
                "readOnly": false,
                "options": [
                    {
                        "data": "Altimeter",
                        "label": "Altimeter"
                    },
                    {
                        "data": "GPS Device",
                        "label": "GPS Device"
                    },
                    {
                        "data": "Mountaineering Boots",
                        "label": "Mountaineering Boots"
                    },
                    {
                        "data": "Belay Anchors",
                        "label": "Belay Anchors"
                    },
                    {
                        "data": "Headlights or Flashlights",
                        "label": "Headlights or Flashlights"
                    },
                    {
                        "data": "Oxygen Tanks",
                        "label": "Oxygen Tanks"
                    },
                    {
                        "data": "Cams, Camalots, Spring Loaded Cam Devices",
                        "label": "Cams, Camalots, Spring Loaded Cam Devices"
                    },
                    {
                        "data": "Heavy Winter Clothing",
                        "label": "Heavy Winter Clothing"
                    },
                    {
                        "data": "Perlon Ropes & Carabiners",
                        "label": "Perlon Ropes & Carabiners"
                    },
                    {
                        "data": "Helmet",
                        "label": "Helmet"
                    },
                    {
                        "data": "Pitons or Toucans (beaks)",
                        "label": "Pitons or Toucans (beaks)"
                    },
                    {
                        "data": "Cellular/Mobile Telephone",
                        "label": "Cellular/Mobile Telephone"
                    },
                    {
                        "data": "Ice Axe/Adze",
                        "label": "Ice Axe/Adze"
                    },
                    {
                        "data": "Portaledge",
                        "label": "Portaledge"
                    },
                    {
                        "data": "Chocks & Nuts, Hexes",
                        "label": "Chocks & Nuts, Hexes"
                    },
                    {
                        "data": "Ice Screws",
                        "label": "Ice Screws"
                    },
                    {
                        "data": "Two Way Radio",
                        "label": "Two Way Radio"
                    },
                    {
                        "data": "Climbing Harness",
                        "label": "Climbing Harness"
                    },
                    {
                        "data": "Map & Compass",
                        "label": "Map & Compass"
                    },
                    {
                        "data": "Snow Picket",
                        "label": "Snow Picket"
                    },
                    {
                        "data": "Crampons",
                        "label": "Crampons"
                    },
                    {
                        "data": "Mechanical Ascenders (jumars)",
                        "label": "Mechanical Ascenders (jumars)"
                    },
                    {
                        "data": "Stoppers",
                        "label": "Stoppers"
                    },
                    {
                        "data": "Etriers or Web Ladders",
                        "label": "Etriers or Web Ladders"
                    }
                ]
            },
            {
                "id": "averageClimbHeightAndGrade",
                "model": "personalInfo.*.lifestyle.mountaineering.averageClimbHeightAndGrade",
                "maxLen": 30,
                "label": "What is the average height and grade do you climb?",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "maximumClimbHeightAndGrade",
                "model": "personalInfo.*.lifestyle.mountaineering.maximumClimbHeightAndGrade",
                "maxLen": 30,
                "label": "What is the maximum height and grade you climb to date?",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "maximumHeightPlanToClimb",
                "model": "personalInfo.*.lifestyle.mountaineering.maximumHeightPlanToClimb",
                "maxLen": 30,
                "label": "What is the maximum height and grade you plan to climb in the next two (2) years?",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.mountaineering.climbAloneOrNight",
                "type": "option",
                "label": "Do you ever climb alone or at night?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "detailForClimbAloneOrNight",
                "model": "personalInfo.*.lifestyle.mountaineering.detailForClimbAloneOrNight",
                "parent": "personalInfo.*.lifestyle.mountaineering.climbAloneOrNight",
                "type": "textarea",
                "maxLen": 100,
                "required": "personalInfo.*.lifestyle.mountaineering.climbAloneOrNight",
                "visible": "personalInfo.*.lifestyle.mountaineering.climbAloneOrNight",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.mountaineering.planToClimbInanotherCountry",
                "type": "option",
                "label": "Other than already stated above, have you ever, or do you have any plans to ever climb in another country?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "planToClimbInAnotherCountryDetail",
                "model": "personalInfo.*.lifestyle.mountaineering.planToClimbInAnotherCountryDetail",
                "parent": "personalInfo.*.lifestyle.mountaineering.planToClimbInanotherCountry",
                "type": "dynamic",
                "required": "personalInfo.*.lifestyle.mountaineering.planToClimbInanotherCountry",
                "visible": "personalInfo.*.lifestyle.mountaineering.planToClimbInanotherCountry",
                "readOnly": false,
                "template": "personalInfo.lifestyle.planToClimbInAnotherCountryDetail",
                "addLinkText": "Add more location",
                "removeLinkText": "Remove location"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.mountaineering.qualified",
                "type": "option",
                "label": "Do you have any formal qualifications or certifications attained?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "qualifications",
                "model": "personalInfo.*.lifestyle.mountaineering.qualifications",
                "parent": "personalInfo.*.lifestyle.mountaineering.qualified",
                "type": "dynamic",
                "required": "personalInfo.*.lifestyle.mountaineering.qualified",
                "visible": "personalInfo.*.lifestyle.mountaineering.qualified",
                "readOnly": false,
                "template": "personalInfo.lifestyle.qualifications",
                "addLinkText": "Add more qualification",
                "removeLinkText": "Remove this qualification"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.mountaineering.isClubMember",
                "type": "option",
                "label": "Are you a member of a related club or association?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "club",
                "model": "personalInfo.*.lifestyle.mountaineering.club",
                "parent": "personalInfo.*.lifestyle.mountaineering.isClubMember",
                "type": "textarea",
                "maxLen": 100,
                "required": "personalInfo.*.lifestyle.mountaineering.isClubMember",
                "visible": "personalInfo.*.lifestyle.mountaineering.isClubMember",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.mountaineering.injured",
                "type": "option",
                "label": "Have you ever had an accident or injury arising from these activities that required medical attention?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "injury",
                "model": "personalInfo.*.lifestyle.mountaineering.injury",
                "parent": "personalInfo.*.lifestyle.mountaineering.injured",
                "type": "textarea",
                "maxLen": 100,
                "required": "personalInfo.*.lifestyle.mountaineering.injured",
                "visible": "personalInfo.*.lifestyle.mountaineering.injured",
                "readOnly": false,
                "placeholder": "Please provide details including dates"
            },
            {
                "id": "additionalInfo",
                "model": "personalInfo.*.lifestyle.mountaineering.additionalInfo",
                "type": "textarea",
                "maxLen": 100,
                "label": "Please provide any additional information that you feel is important (optional)",
                "required": false,
                "visible": true,
                "readOnly": false,
                "layout": "normal"
            }
        ]
    },
    "personalInfo.lifestyle.racingInfo": {
        "name": "personalInfo.lifestyle.racingInfo",
        "required": true,
        "dependsOn": "",
        "title": "Racing Questionnaire",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "label",
                "model": "personalInfo.*.lifestyle.racingInfo.forms",
                "type": "label",
                "label": "Have you or do you contemplate on engaging in the following forms of racing:",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.racingInfo.autoMobile",
                "type": "option",
                "label": "Automobile?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.racingInfo.motorCycle",
                "type": "option",
                "label": "Motorcycle?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.racingInfo.motorBoat",
                "type": "option",
                "label": "Motorboat?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.racingInfo.otherForm",
                "type": "option",
                "label": "Or any other forms of racing?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "otherRaceFormDetail",
                "model": "personalInfo.*.lifestyle.racingInfo.otherRaceFormDetail",
                "parent": "personalInfo.*.lifestyle.racingInfo.otherForm",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.racingInfo.otherForm",
                "visible": "personalInfo.*.lifestyle.racingInfo.otherForm",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "heading",
                "model": "heading",
                "type": "heading",
                "label": "Racing details",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "details",
                "model": "personalInfo.*.lifestyle.racingInfo.details",
                "type": "dynamic",
                "required": true,
                "visible": true,
                "readOnly": false,
                "layout": "gradational",
                "template": "personalInfo.lifestyle.racingInfoDetails",
                "addLinkText": "Add more type",
                "removeLinkText": "Remove this type"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.racingInfo.compete",
                "type": "option",
                "label": "Have you ever competed or do you contemplate on competing?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "competeDetails",
                "model": "personalInfo.*.lifestyle.racingInfo.competeDetails",
                "parent": "personalInfo.*.lifestyle.racingInfo.compete",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.racingInfo.compete",
                "visible": "personalInfo.*.lifestyle.racingInfo.compete",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.racingInfo.competeOutsideOfPhilippines",
                "type": "option",
                "label": "Do you contemplate on competing outside of the Philippines?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "competeOutsideOfPhilippinesDetails",
                "model": "personalInfo.*.lifestyle.racingInfo.competeOutsideOfPhilippinesDeatils",
                "parent": "personalInfo.*.lifestyle.racingInfo.competeOutsideOfPhilippines",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.racingInfo.competeOutsideOfPhilippines",
                "visible": "personalInfo.*.lifestyle.racingInfo.competeOutsideOfPhilippines",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.racingInfo.competitiveVehicle",
                "type": "option",
                "label": "Do you own a competitive vehicle?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "competitiveVehicleDetails",
                "model": "personalInfo.*.lifestyle.racingInfo.competitiveVehicleDetails",
                "parent": "personalInfo.*.lifestyle.racingInfo.competitiveVehicle",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.racingInfo.competitiveVehicle",
                "visible": "personalInfo.*.lifestyle.racingInfo.competitiveVehicle",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "raceTimeAYear",
                "model": "personalInfo.*.lifestyle.racingInfo.raceTimeAYear",
                "maxLen": 30,
                "label": "How long a time do you race within a year? (e.g.. a month, six months, two weeks)",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.racingInfo.professional",
                "type": "option",
                "label": "Do you race professionally or for cash prizes?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "professionalDetails",
                "model": "personalInfo.*.lifestyle.racingInfo.professionalDetails",
                "parent": "personalInfo.*.lifestyle.racingInfo.professional",
                "type": "string",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.racingInfo.professional",
                "visible": "personalInfo.*.lifestyle.racingInfo.professional",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "travelRace",
                "model": "personalInfo.*.lifestyle.racingInfo.travelRace",
                "maxLen": 30,
                "label": "How far do you travel to race? (state places you’ve travelled to race)",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "trackType",
                "model": "personalInfo.*.lifestyle.racingInfo.trackType",
                "maxLen": 30,
                "label": "Over what type of track do you race? (e.g. oval, simulated road)",
                "required": true,
                "visible": true,
                "readOnly": false
            }
        ]
    },
    "personalInfo.lifestyle.aviation": {
        "name": "personalInfo.lifestyle.aviation",
        "required": true,
        "dependsOn": "",
        "title": "Aviation Questionnaire",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "type": "option",
                "label": "Do you fly as a passenger on scheduled airlines?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassengerDetail.hoursFlownTwoToThreeYears",
                "parent": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown two (2) to three (3) years ago?",
                "required": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassengerDetail.hoursFlownOneToTwoYears",
                "parent": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown one (1) to two (2) years ago?",
                "required": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassengerDetail.hoursFlownPastTwelveMonths",
                "parent": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown for the past twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassengerDetail.hoursFlownNextTwelveMonths",
                "parent": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours you plan to fly for the next twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "frequentDestination",
                "model": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassengerDetail.frequentDestination",
                "parent": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "maxLen": 15,
                "label": "What is your frequent destination?",
                "required": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.scheduledAirlinesPassenger",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "type": "option",
                "label": "Do you fly as a passenger on a non-scheduled flight?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassengerDetail.hoursFlownTwoToThreeYears",
                "parent": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown two (2) to three (3) years ago?",
                "required": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassengerDetail.hoursFlownOneToTwoYears",
                "parent": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown one (1) to two (2) years ago?",
                "required": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassengerDetail.hoursFlownPastTwelveMonths",
                "parent": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown for the past twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassengerDetail.hoursFlownNextTwelveMonths",
                "parent": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours you plan to fly for the next twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "frequentDestination",
                "model": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassengerDetail.frequentDestination",
                "parent": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "maxLen": 15,
                "label": "What is your frequent destination?",
                "required": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "readOnly": false
            },
            {
                "id": "purpose",
                "model": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassengerDetail.purpose",
                "parent": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "maxLen": 30,
                "label": "What is the purpose of flight?",
                "required": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "readOnly": false
            },
            {
                "id": "aircraft",
                "model": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassengerDetail.aircraft",
                "parent": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "maxLen": 15,
                "label": "What are the kind of aircraft(s) used?",
                "required": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassengerDetail.instructionAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "type": "option",
                "label": "Do you contemplate taking instruction as a pilot?",
                "required": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "visible": "personalInfo.*.lifestyle.aviation.nonScheduledAirlinesPassenger",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "type": "option",
                "label": "Do you fly as a member of the crew?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.memberOfTheCrewDetail.hoursFlownTwoToThreeYears",
                "parent": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown two (2) to three (3) years ago?",
                "required": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "visible": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.memberOfTheCrewDetail.hoursFlownOneToTwoYears",
                "parent": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown one (1) to two (2) years ago?",
                "required": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "visible": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.memberOfTheCrewDetail.hoursFlownPastTwelveMonths",
                "parent": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown for the past twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "visible": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.memberOfTheCrewDetail.hoursFlownNextTwelveMonths",
                "parent": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours you plan to fly for the next twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "visible": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "frequentDestination",
                "model": "personalInfo.*.lifestyle.aviation.memberOfTheCrewDetail.frequentDestination",
                "parent": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "maxLen": 15,
                "label": "What is your frequent destination?",
                "required": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "visible": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "readOnly": false
            },
            {
                "id": "purpose",
                "model": "personalInfo.*.lifestyle.aviation.memberOfTheCrewDetail.purpose",
                "parent": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "maxLen": 30,
                "label": "What is the purpose of flight?",
                "required": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "visible": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "readOnly": false
            },
            {
                "id": "aircraft",
                "model": "personalInfo.*.lifestyle.aviation.memberOfTheCrewDetail.aircraft",
                "parent": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "maxLen": 15,
                "label": "What are the kind of aircraft(s) used?",
                "required": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "visible": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.memberOfTheCrewDetail.instructionAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "type": "option",
                "label": "Do you contemplate taking instruction as a pilot?",
                "required": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "visible": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "crewMemberDuties",
                "model": "personalInfo.*.lifestyle.aviation.memberOfTheCrewDetail.crewMemberDuties",
                "parent": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "maxLen": 30,
                "label": "What are your duties as a member of the crew?",
                "required": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "visible": "personalInfo.*.lifestyle.aviation.memberOfTheCrew",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Do you fly as a pilot, co-pilot or student pilot?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.hoursFlownTwoToThreeYears",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown two (2) to three (3) years ago?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.hoursFlownOneToTwoYears",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown one (1) to two (2) years ago?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.hoursFlownPastTwelveMonths",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours flown for the past twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.hoursFlownNextTwelveMonths",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the average number of hours you plan to fly for the next twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "frequentDestination",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.frequentDestination",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "maxLen": 15,
                "label": "What is your frequent destination?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "readOnly": false
            },
            {
                "id": "purpose",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.purpose",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "maxLen": 30,
                "label": "What is/are the purpose(s) of your flight(s)?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "readOnly": false
            },
            {
                "id": "certificateGrade",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.certificateGrade",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "maxLen": 15,
                "label": "What is the grade of your certificate?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "readOnly": false
            },
            {
                "id": "date",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.certificateIssueDate",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "date",
                "label": "What is your certificate's issue date?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "string",
                "readOnly": false
            },
            {
                "id": "label",
                "model": "label",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "label",
                "label": "* Uploading of certificate(s) in the Document Checklist card can help during underwriting evaluation.",
                "required": false,
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "readOnly": false,
                "layout": "normal"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.hoursFlownAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the number of total hours you have flown as a pilot?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.reprimandedOrAccident",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Have you ever been grounded, fined, reprimanded for violation of air regulations or has an aircraft accident?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "reprimandedOrAccidentDetail",
                "model": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.reprimandedOrAccidentDetail",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.reprimandedOrAccident",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.reprimandedOrAccident && personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilotDetail.reprimandedOrAccident && personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "label",
                "model": "label",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "label",
                "label": "Have you or do you have any plans of flying aircrafts such as:",
                "required": false,
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "readOnly": false,
                "layout": "normal"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.glider",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Glider?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.gliderDetail.hoursFlownLastTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.glider",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "For the past twelve (12) months, what is the total number of hours have you flown this aircraft?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.glider",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.glider",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.gliderDetail.hoursPlanFlyNextTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.glider",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "In the next twelve (12) months, what is the total number of hours you plan to fly this aircraft?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.glider",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.glider",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.singleEngine",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Single-engine?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.singleEngineDetail.hoursFlownLastTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.singleEngine",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "For the past twelve (12) months, what is the total number of hours have you flown this aircraft?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.singleEngine",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.singleEngine",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.singleEngineDetail.hoursPlanFlyNextTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.singleEngine",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "In the next twelve (12) months, what is the total number of hours you plan to fly this aircraft?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.singleEngine",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.singleEngine",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.twoEngine",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Two-engine?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.twoEngineDetail.hoursFlownLastTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.twoEngine",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "For the past twelve (12) months, what is the total number of hours have you flown this aircraft?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.twoEngine",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.twoEngine",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.twoEngineDetail.hoursPlanFlyNextTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.twoEngine",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "In the next twelve (12) months, what is the total number of hours you plan to fly this aircraft?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.twoEngine",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.twoEngine",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.helicopter",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Helicopter?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.helicopterDetail.hoursFlownLastTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.helicopter",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "For the past twelve (12) months, what is the total number of hours have you flown this aircraft?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.helicopter",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.helicopter",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.helicopterDetail.hoursPlanFlyNextTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.helicopter",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "In the next twelve (12) months, what is the total number of hours you plan to fly this aircraft?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.helicopter",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.helicopter",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.anotherAircraft",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Or any another type of aircraft",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "anotherAircraft",
                "model": "personalInfo.*.lifestyle.aviation.anotherAircraftDetail",
                "parent": "personalInfo.*.lifestyle.aviation.anotherAircraft",
                "type": "dynamic",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.anotherAircraft",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.anotherAircraft",
                "readOnly": false,
                "template": "personalInfo.lifestyle.aviation.anotherAircraftDetail",
                "addLinkText": "Add more type of aircraft",
                "removeLinkText": "Remove type of aircraft"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.flyScheduledAirline",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Do you fly in a scheduled airline?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.flyScheduledAirlineDetail.hoursFlownLastTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.flyScheduledAirline",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours flown for the past twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyScheduledAirline",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyScheduledAirline",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.flyScheduledAirlineDetail.hoursPlanFlyNextTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.flyScheduledAirline",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours you plan to fly in the next twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyScheduledAirline",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyScheduledAirline",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.flyForAirCarrier",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Do you fly for an air carrier?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.flyForAirCarrierDetail.hoursFlownLastTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.flyForAirCarrier",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours flown for the past twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForAirCarrier",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForAirCarrier",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.flyForAirCarrierDetail.hoursPlanFlyNextTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.flyForAirCarrier",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours you plan to fly in the next twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForAirCarrier",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForAirCarrier",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.employerOwnedBusinessTransportation",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Do you fly for an employer-owned business transportation?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.employerOwnedBusinessTransportationDetail.hoursFlownLastTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.employerOwnedBusinessTransportation",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours flown for the past twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.employerOwnedBusinessTransportation",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.employerOwnedBusinessTransportation",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.employerOwnedBusinessTransportationDetail.hoursPlanFlyNextTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.employerOwnedBusinessTransportation",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours you plan to fly in the next twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.employerOwnedBusinessTransportation",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.employerOwnedBusinessTransportation",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.flightInstructor",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Do you fly as a flight instructor?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.flightInstructorDetail.hoursFlownLastTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.flightInstructor",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours flown for the past twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flightInstructor",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flightInstructor",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.flightInstructorDetail.hoursPlanFlyNextTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.flightInstructor",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours you plan to fly in the next twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flightInstructor",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flightInstructor",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.flyForPrivatePleasure",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Do you fly for private pleasure?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.flyForPrivatePleasureDetail.hoursFlownLastTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.flyForPrivatePleasure",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours flown for the past twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForPrivatePleasure",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForPrivatePleasure",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.flyForPrivatePleasureDetail.hoursPlanFlyNextTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.flyForPrivatePleasure",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours you plan to fly in the next twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForPrivatePleasure",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForPrivatePleasure",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.flyForPrivateBusinessAerialApplication",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Do you fly for private-business aerial application?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.flyForPrivateBusinessAerialApplicationDetail.hoursFlownLastTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.flyForPrivateBusinessAerialApplication",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours flown for the past twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForPrivateBusinessAerialApplication",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForPrivateBusinessAerialApplication",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.lifestyle.aviation.flyForPrivateBusinessAerialApplicationDetail.hoursPlanFlyNextTwelveMonthsAsAPilot",
                "parent": "personalInfo.*.lifestyle.aviation.flyForPrivateBusinessAerialApplication",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "What is the total number of hours you plan to fly in the next twelve (12) months?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForPrivateBusinessAerialApplication",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.flyForPrivateBusinessAerialApplication",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.militaryServices",
                "parent": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "type": "option",
                "label": "Are you a part of military services?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "rank",
                "model": "personalInfo.*.lifestyle.aviation.militaryServicesDetail.rank",
                "parent": "personalInfo.*.lifestyle.aviation.militaryServices",
                "maxLen": 15,
                "label": "What is your rank?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.militaryServices",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.militaryServices",
                "readOnly": false
            },
            {
                "id": "militaryAppointment",
                "model": "personalInfo.*.lifestyle.aviation.militaryServicesDetail.militaryAppointment",
                "parent": "personalInfo.*.lifestyle.aviation.militaryServices",
                "type": "option",
                "label": "What is the nature of your military appointment?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.militaryServices",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.militaryServices",
                "readOnly": false,
                "options": [
                    {
                        "data": "active",
                        "label": "Active"
                    },
                    {
                        "data": "reserve",
                        "label": "Reserve"
                    }
                ]
            },
            {
                "id": "command",
                "model": "personalInfo.*.lifestyle.aviation.militaryServicesDetail.command",
                "parent": "personalInfo.*.lifestyle.aviation.militaryServices",
                "maxLen": 15,
                "label": "What is your command?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.militaryServices",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.militaryServices",
                "readOnly": false
            },
            {
                "id": "unit",
                "model": "personalInfo.*.lifestyle.aviation.militaryServicesDetail.unit",
                "parent": "personalInfo.*.lifestyle.aviation.militaryServices",
                "maxLen": 15,
                "label": "What is your unit?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.militaryServices",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.militaryServices",
                "readOnly": false
            },
            {
                "id": "typeOfAircraft",
                "model": "personalInfo.*.lifestyle.aviation.militaryServicesDetail.typeOfAircraft",
                "parent": "personalInfo.*.lifestyle.aviation.militaryServices",
                "maxLen": 15,
                "label": "What type of aircraft do you fly?",
                "required": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.militaryServices",
                "visible": "personalInfo.*.lifestyle.aviation.pilotOrCoPilotOrStudentPilot && personalInfo.*.lifestyle.aviation.militaryServices",
                "readOnly": false
            },
            {
                "id": "howLongFlying",
                "model": "personalInfo.*.lifestyle.aviation.howLongFlying",
                "maxLen": 15,
                "label": "How long have you been flying?",
                "required": true,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.flyWithPartners",
                "type": "option",
                "label": "Do you fly with partners?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "numberOfPartners",
                "model": "personalInfo.*.lifestyle.aviation.flyWithPartnersDetail.numberOfPartners",
                "parent": "personalInfo.*.lifestyle.aviation.flyWithPartners",
                "type": "number",
                "maxLen": 5,
                "label": "How many partners?",
                "required": "personalInfo.*.lifestyle.aviation.flyWithPartners",
                "visible": "personalInfo.*.lifestyle.aviation.flyWithPartners",
                "readOnly": false
            },
            {
                "id": "howOften",
                "model": "personalInfo.*.lifestyle.aviation.flyWithPartnersDetail.frequency",
                "parent": "personalInfo.*.lifestyle.aviation.flyWithPartners",
                "maxLen": 15,
                "label": "How often do you fly with your partner(s)?",
                "required": "personalInfo.*.lifestyle.aviation.flyWithPartners",
                "visible": "personalInfo.*.lifestyle.aviation.flyWithPartners",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.lifestyle.aviation.hurtWhenFlying",
                "type": "option",
                "label": "Have you ever suffered any illness or injury as a result of flying?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "hurtWhenFlyingDetail",
                "model": "personalInfo.*.lifestyle.aviation.hurtWhenFlyingDetail",
                "parent": "personalInfo.*.lifestyle.aviation.hurtWhenFlying",
                "maxLen": 30,
                "required": "personalInfo.*.lifestyle.aviation.hurtWhenFlying",
                "visible": "personalInfo.*.lifestyle.aviation.hurtWhenFlying",
                "readOnly": false,
                "placeholder": "Please provide details"
            }
        ]
    },
    "personalInfo.family": {
        "name": "personalInfo.family",
        "required": true,
        "dependsOn": "",
        "title": "Family details",
        "subtitle": "personalInfo.*.family.isAssuredForm ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.family.isAssuredForm",
                "type": "option",
                "computedValue": "personalInfo.*.id == assured.id",
                "required": false,
                "visible": false,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "type": "option",
                "computedValue": "isNotSiblingAndAssuredForm(!#this.personalInfo.*.family.isAssuredForm,#this)",
                "required": false,
                "visible": false,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "familyDetailsNote",
                "model": "familyDetailsNote",
                "type": "result",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "readOnly": false,
                "labels": [
                    {
                        "status": "active",
                        "label": "You are to disclose in this application form (and in any personal statement concerning health made to the company or to the medical examiner of the company) fully and faithfully all the facts which you know or ought to know, otherwise the policy issued hereunder may be rescinded."
                    }
                ]
            },
            {
                "id": "fatherName",
                "model": "personalInfo.*.family.fatherName",
                "maxLen": 30,
                "label": "Name of father",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.family.isFatherHasIllness",
                "type": "option",
                "label": "Has your father suffered from tuberculosis, diabetes, high blood pressure, heart, kidney or sickle disease, or mental illness?",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "ageAtDiagnosis",
                "model": "personalInfo.*.family.ageAtDiagnosis",
                "parent": "personalInfo.*.family.isFatherHasIllness",
                "type": "number",
                "maxLen": 3,
                "label": "Age at diagnosis",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.isFatherHasIllness",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.isFatherHasIllness",
                "readOnly": false
            },
            {
                "id": "detail",
                "model": "personalInfo.*.family.detail",
                "parent": "personalInfo.*.family.isFatherHasIllness",
                "type": "textarea",
                "maxLen": 100,
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.isFatherHasIllness",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.isFatherHasIllness",
                "readOnly": false,
                "placeholder": "Provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.family.IsFatherAlive",
                "type": "option",
                "label": "Is your father still alive?",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "fatherAgeAtDeath",
                "model": "personalInfo.*.family.fatherAgeAtDeath",
                "parent": "personalInfo.*.family.IsFatherAlive",
                "type": "number",
                "maxLen": 3,
                "label": "Age at death",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.IsFatherAlive == false",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.IsFatherAlive == false",
                "readOnly": false
            },
            {
                "id": "fatherCauseOfDeath",
                "model": "personalInfo.*.family.fatherCauseOfDeath",
                "parent": "personalInfo.*.family.IsFatherAlive",
                "type": "textarea",
                "maxLen": 100,
                "label": "Cause of death",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.IsFatherAlive == false",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.IsFatherAlive == false",
                "readOnly": false
            },
            {
                "id": "motherName",
                "model": "personalInfo.*.family.motherName",
                "maxLen": 30,
                "label": "Name of mother",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.family.isMotherHasIllness",
                "type": "option",
                "label": "Has your mother suffered from tuberculosis, diabetes, high blood pressure, heart, kidney or sickle disease, or mental illness?",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "ageAtDiagnosis",
                "model": "personalInfo.*.family.IllnessDetailForMother.ageAtDiagnosis",
                "parent": "personalInfo.*.family.isMotherHasIllness",
                "type": "number",
                "maxLen": 3,
                "label": "Age at diagnosis",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.isMotherHasIllness",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.isMotherHasIllness",
                "readOnly": false
            },
            {
                "id": "detail",
                "model": "personalInfo.*.family.illnessDetailForMother.detail",
                "parent": "personalInfo.*.family.isMotherHasIllness",
                "type": "textarea",
                "maxLen": 100,
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.isMotherHasIllness",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.isMotherHasIllness",
                "readOnly": false,
                "placeholder": "Provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.family.IsMotherAlive",
                "type": "option",
                "label": "Is your mother still alive?",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "motherAgeAtDeath",
                "model": "personalInfo.*.family.motherAgeAtDeath",
                "parent": "personalInfo.*.family.IsMotherAlive",
                "type": "number",
                "maxLen": 3,
                "label": "Age at death",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.IsMotherAlive == false",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.IsMotherAlive == false",
                "readOnly": false
            },
            {
                "id": "motherCauseOfDeath",
                "model": "personalInfo.*.family.motherCauseOfDeath",
                "parent": "personalInfo.*.family.IsMotherAlive",
                "type": "textarea",
                "maxLen": 100,
                "label": "Cause of death",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.IsMotherAlive == false",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.IsMotherAlive == false",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.family.haveSibling",
                "type": "option",
                "label": "Do you have sibling/s?",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "siblings",
                "model": "personalInfo.*.family.siblings",
                "parent": "personalInfo.*.family.haveSibling",
                "type": "dynamic",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.haveSibling",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.haveSibling",
                "readOnly": false,
                "template": "personalInfo.family.siblingsDetail",
                "addLinkText": "Add sibling",
                "removeLinkText": "Remove sibling"
            },
            {
                "id": "spouseName",
                "model": "personalInfo.*.family.spouseName",
                "maxLen": 30,
                "label": "Name of spouse",
                "required": "personalInfo.*.additionalPersonalInformation.civilStatus == 'M'",
                "visible": "personalInfo.*.additionalPersonalInformation.civilStatus == 'M'",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.family.isSpouseHasIllness",
                "type": "option",
                "label": "Has your spouse suffered from tuberculosis, diabetes, high blood pressure, heart, kidney or sickle disease, or mental illness?",
                "required": "personalInfo.*.additionalPersonalInformation.civilStatus == 'M'",
                "visible": "personalInfo.*.additionalPersonalInformation.civilStatus == 'M'",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "ageAtDiagnosis",
                "model": "personalInfo.*.family.illnessDetailForSpouse.ageAtDiagnosis",
                "parent": "personalInfo.*.family.isSpouseHasIllness",
                "type": "number",
                "maxLen": 3,
                "label": "Age at diagnosis",
                "required": "personalInfo.*.family.isSpouseHasIllness",
                "visible": "personalInfo.*.family.isSpouseHasIllness",
                "readOnly": false
            },
            {
                "id": "detail",
                "model": "personalInfo.*.family.illnessDetailForSpouse.detail",
                "parent": "personalInfo.*.family.isSpouseHasIllness",
                "type": "textarea",
                "maxLen": 100,
                "required": "personalInfo.*.family.isSpouseHasIllness",
                "visible": "personalInfo.*.family.isSpouseHasIllness",
                "readOnly": false,
                "placeholder": "Provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.family.isSpouseAlive",
                "type": "option",
                "label": "Is your spouse still alive?",
                "required": "personalInfo.*.additionalPersonalInformation.civilStatus == 'M'",
                "visible": "personalInfo.*.additionalPersonalInformation.civilStatus == 'M'",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "spouseAgeAtDeath",
                "model": "personalInfo.*.family.spouseAgeAtDeath",
                "parent": "personalInfo.*.family.isSpouseAlive",
                "type": "number",
                "maxLen": 3,
                "label": "Age at death",
                "required": "personalInfo.*.family.isSpouseAlive == false",
                "visible": "personalInfo.*.family.isSpouseAlive == false",
                "readOnly": false
            },
            {
                "id": "spouseCauseOfDeath",
                "model": "personalInfo.*.family.spouseCauseOfDeath",
                "parent": "personalInfo.*.family.isSpouseAlive",
                "type": "textarea",
                "maxLen": 100,
                "label": "Cause of death",
                "required": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.isSpouseAlive == false",
                "visible": "personalInfo.*.family.isNotSiblingAndAssuredForm && personalInfo.*.family.isSpouseAlive == false",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.family.haveChild",
                "type": "option",
                "label": "Do you have child/ren?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "siblings",
                "model": "personalInfo.*.family.children",
                "parent": "personalInfo.*.family.haveChild",
                "type": "dynamic",
                "required": "personalInfo.*.family.haveChild",
                "visible": "personalInfo.*.family.haveChild",
                "readOnly": false,
                "template": "personalInfo.family.childrenDetail",
                "addLinkText": "Add child",
                "removeLinkText": "Remove child"
            }
        ]
    },
    "personalInfo.workPay": {
        "name": "personalInfo.workPay",
        "required": true,
        "dependsOn": "",
        "title": "Work and pay",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "heading",
                "model": "personalInfo.*.workPay.primaryHeading",
                "type": "heading",
                "label": "Primary Occupation",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "model": "personalInfo.*.workPay.occupationNote",
                "type": "result",
                "required": false,
                "visible": "!(personalInfo.*.workPay?.occupations[0]?.employment)",
                "readOnly": false,
                "labels": [
                    {
                        "status": "active",
                        "label": "Primary occupation details below are based on the information on Personal Information card and are not editable on this card."
                    }
                ]
            },
            {
                "id": "occupationCategory",
                "model": "personalInfo.*.workPay.occupations.0.employment",
                "type": "option",
                "label": "What do you do for a living?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": true,
                "options": [
                    {
                        "data": "employed",
                        "label": "Employed"
                    },
                    {
                        "data": "selfemployed",
                        "label": "Self employed"
                    },
                    {
                        "data": "notemployed",
                        "label": "Not employed"
                    }
                ]
            },
            {
                "id": "businessNature",
                "model": "personalInfo.*.workPay.occupations.0.businessNature",
                "parent": "personalInfo.*.workPay.occupations.0.employment",
                "type": "select",
                "label": "Nature of work/business",
                "required": "(personalInfo.*.workPay.occupations[0].employment == 'selfemployed') OR ( personalInfo.*.workPay.occupations[0].employment == 'employed')",
                "visible": "(personalInfo.*.workPay.occupations[0].employment == 'selfemployed') OR ( personalInfo.*.workPay.occupations[0].employment == 'employed')",
                "dataType": "string",
                "readOnly": true,
                "options": [
                    {
                        "data": "Accommodation and Food Services",
                        "label": "Accommodation and Food Services"
                    },
                    {
                        "data": "Agriculture, Forestry, Fishing and Hunting",
                        "label": "Agriculture, Forestry, Fishing and Hunting"
                    },
                    {
                        "data": "Arts, Entertainment, and Recreation",
                        "label": "Arts, Entertainment, and Recreation"
                    },
                    {
                        "data": "Construction",
                        "label": "Construction"
                    },
                    {
                        "data": "Educational Services",
                        "label": "Educational Services"
                    },
                    {
                        "data": "Finance and Insurance",
                        "label": "Finance and Insurance"
                    },
                    {
                        "data": "Health Care and Social Assistance",
                        "label": "Health Care and Social Assistance"
                    },
                    {
                        "data": "Information",
                        "label": "Information"
                    },
                    {
                        "data": "Manufacturing",
                        "label": "Manufacturing"
                    },
                    {
                        "data": "Mining, Quarrying, and Oil and Gas Extraction",
                        "label": "Mining, Quarrying, and Oil and Gas Extraction"
                    },
                    {
                        "data": "Not Working",
                        "label": "Not Working"
                    },
                    {
                        "data": "Other Services (except Public Administration)",
                        "label": "Other Services (except Public Administration)"
                    },
                    {
                        "data": "Professional Services",
                        "label": "Professional Services"
                    },
                    {
                        "data": "Public Administration",
                        "label": "Public Administration"
                    },
                    {
                        "data": "Real Estate and Rental and Leasing",
                        "label": "Real Estate and Rental and Leasing"
                    },
                    {
                        "data": "Scientific and Technical Services",
                        "label": "Scientific and Technical Services"
                    },
                    {
                        "data": "Transportation and Warehousing",
                        "label": "Transportation and Warehousing"
                    },
                    {
                        "data": "Utilities",
                        "label": "Utilities"
                    },
                    {
                        "data": "Wholesale and Retail Trade",
                        "label": "Wholesale and Retail Trade"
                    }
                ]
            },
            {
                "id": "occupationList",
                "model": "personalInfo.*.workPay.occupations.0.occupation",
                "parent": "personalInfo.*.workPay.occupations.0.employment",
                "type": "select",
                "label": "Occupation",
                "required": "personalInfo.*.workPay.occupations[0].employment != ''",
                "visible": "personalInfo.*.workPay.occupations[0].employment != ''",
                "dataType": "string",
                "readOnly": true,
                "source": "references:occupations[personalInfo.*.workPay.occupations[0].employment]"
            },
            {
                "model": "personalInfo.*.workPay.occupations.0.occupationDetails",
                "parent": "personalInfo.*.workPay.occupations.0.employment",
                "required": "(personalInfo.*.workPay.occupations[0].employment == 'employed') && personalInfo.*.workPay.occupations[0].occupation == 'other'",
                "visible": "(personalInfo.*.workPay.occupations[0].employment == 'employed') && personalInfo.*.workPay.occupations[0].occupation == 'other'",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "employerName",
                "model": "personalInfo.*.workPay.occupations.0.employerName",
                "parent": "personalInfo.*.workPay.occupations.0.employment",
                "type": "textarea",
                "maxLen": 100,
                "label": "Name of employer",
                "required": "personalInfo.*.workPay.occupations[0].employment == 'employed'",
                "visible": "personalInfo.*.workPay.occupations[0].employment == 'employed'",
                "readOnly": false,
                "regex": "^[\\w\\W]*$",
                "placeholder": "ABC industries"
            },
            {
                "id": "address",
                "model": "personalInfo.*.workPay.occupations.0.addressBusiness",
                "parent": "personalInfo.*.workPay.occupations.0.employment",
                "type": "textarea",
                "maxLen": 200,
                "label": "Business address",
                "required": "(personalInfo.*.workPay.occupations[0].employment == 'employed') OR (personalInfo.*.workPay.occupations[0].employment == 'selfemployed')",
                "visible": "(personalInfo.*.workPay.occupations[0].employment == 'employed') OR (personalInfo.*.workPay.occupations[0].employment == 'selfemployed')",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Building, street name, city"
            },
            {
                "id": "country",
                "model": "personalInfo.*.workPay.occupations.0.countryBusiness",
                "parent": "personalInfo.*.workPay.occupations.0.employment",
                "type": "select",
                "label": "Country",
                "required": "(personalInfo.*.workPay.occupations[0].employment == 'employed') OR (personalInfo.*.workPay.occupations[0].employment == 'selfemployed')",
                "visible": "(personalInfo.*.workPay.occupations[0].employment == 'employed') OR (personalInfo.*.workPay.occupations[0].employment == 'selfemployed')",
                "dataType": "string",
                "readOnly": false,
                "cascade": "personalInfo.*.workPay.occupations.0.city,personalInfo.*.workPay.occupations.0.cityCustom",
                "source": "references:countries"
            },
            {
                "id": "city",
                "model": "personalInfo.*.workPay.occupations.0.city",
                "parent": "personalInfo.*.workPay.occupations.0.employment",
                "type": "select",
                "defaultValue": "personalInfo.*.workPay.occupations[0].countryBusiness != '163' ? 13 : undefined",
                "label": "City",
                "required": "((personalInfo.*.workPay.occupations[0].employment == \"employed\") OR (personalInfo.*.workPay.occupations[0].employment == \"selfemployed\")) && personalInfo.*.workPay.occupations[0].countryBusiness != null",
                "visible": "((personalInfo.*.workPay.occupations[0].employment == \"employed\") OR (personalInfo.*.workPay.occupations[0].employment == \"selfemployed\")) && personalInfo.*.workPay.occupations[0].countryBusiness != null",
                "dataType": "string",
                "readOnly": false,
                "editable": "personalInfo.*.workPay.occupations[0].countryBusiness == '163'",
                "source": "references:provinces[personalInfo.*.workPay.occupations[0].countryBusiness]"
            },
            {
                "id": "cityCustom",
                "model": "personalInfo.*.workPay.occupations.0.cityCustom",
                "parent": "personalInfo.*.workPay.occupations.0.employment",
                "maxLen": 30,
                "required": "((personalInfo.*.workPay.occupations[0].employment == \"employed\") OR (personalInfo.*.workPay.occupations[0].employment == \"selfemployed\")) && (personalInfo.*.workPay.occupations[0].countryBusiness != null && personalInfo.*.workPay.occupations[0].city == 13)",
                "visible": "((personalInfo.*.workPay.occupations[0].employment == \"employed\") OR (personalInfo.*.workPay.occupations[0].employment == \"selfemployed\")) && (personalInfo.*.workPay.occupations[0].countryBusiness != null && personalInfo.*.workPay.occupations[0].city == 13)",
                "readOnly": false,
                "placeholder": "City"
            },
            {
                "id": "zipcode",
                "model": "personalInfo.*.workPay.occupations.0.zipcodeBusiness",
                "parent": "personalInfo.*.workPay.occupations.0.employment",
                "type": "string",
                "maxLen": 10,
                "label": "Zip Code",
                "required": "(personalInfo.*.workPay.occupations[0].employment == 'employed') OR (personalInfo.*.workPay.occupations[0].employment == 'selfemployed')",
                "visible": "(personalInfo.*.workPay.occupations[0].employment == 'employed') OR (personalInfo.*.workPay.occupations[0].employment == 'selfemployed')",
                "dataType": "string",
                "readOnly": false,
                "regex": "^\\d+$",
                "placeholder": "0000"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.workPay.occupations.0.occupationChange",
                "type": "option",
                "label": "Do you plan to change your occupation in the next 12 months?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "occupationChangeDetails",
                "model": "personalInfo.*.workPay.occupations.0.occupationChangeDetails",
                "parent": "personalInfo.*.workPay.occupations.0.occupationChange",
                "type": "textarea",
                "maxLen": 200,
                "required": "personalInfo.*.workPay.occupations[0].occupationChange",
                "visible": "personalInfo.*.workPay.occupations[0].occupationChange",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "heading",
                "model": "personalInfo.*.workPay.income",
                "type": "heading",
                "label": "Income",
                "required": false,
                "visible": true,
                "readOnly": false
            },
            {
                "id": "money",
                "model": "personalInfo.*.workPay.incomeBeforeTax",
                "type": "money",
                "maxLen": 15,
                "label": "Gross annual income",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "placeholder": "Amount"
            },
            {
                "id": "money",
                "model": "personalInfo.*.workPay.netWorth",
                "type": "money",
                "maxLen": 15,
                "label": "Approximate net worth",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "currency": "'PHP'",
                "placeholder": "Amount"
            },
            {
                "id": "sourcesOfFunds",
                "model": "personalInfo.*.workPay.sourcesOfFunds",
                "type": "option",
                "label": "Sources of funds",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "salary",
                        "label": "SALARY"
                    },
                    {
                        "data": "business",
                        "label": "BUSINESS"
                    },
                    {
                        "data": "others",
                        "label": "OTHERS"
                    }
                ]
            },
            {
                "id": "sourcesOfFundsDetails",
                "model": "personalInfo.*.workPay.sourcesOfFundsDetails",
                "parent": "personalInfo.*.workPay.sourcesOfFunds",
                "type": "textarea",
                "maxLen": 100,
                "required": "personalInfo.*.workPay.sourcesOfFunds == 'others'",
                "visible": "personalInfo.*.workPay.sourcesOfFunds == 'others'",
                "readOnly": false,
                "placeholder": "Please provide details"
            }
        ]
    },
    "personalInfo.previousInsurance": {
        "name": "personalInfo.previousInsurance",
        "required": true,
        "dependsOn": "",
        "title": "Previous insurance",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.previousInsurance.optionalField",
                "type": "option",
                "required": false,
                "visible": false,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ],
                "value": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.previousInsurance.hasProblemApplyForLifeInsuranceOrReinstatement",
                "type": "option",
                "label": "Have you ever made an application for life insurance or reinstatement thereof which was declined, postponed, cancelled, or modified in kind, amount, or rate?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.previousInsurance.applyForLifeInsuranceOrReinstatementProblemDetail",
                "parent": "personalInfo.*.previousInsurance.hasProblemApplyForLifeInsuranceOrReinstatement",
                "type": "textarea",
                "maxLen": 200,
                "required": "personalInfo.*.previousInsurance.hasProblemApplyForLifeInsuranceOrReinstatement",
                "visible": "personalInfo.*.previousInsurance.hasProblemApplyForLifeInsuranceOrReinstatement",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.previousInsurance.hasPendingApplicationInOtherInsuranceCompanies",
                "type": "option",
                "label": "Do you have any pending application with other insurance companies?",
                "required": true,
                "visible": true,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "pendingApplicationInOtherInsuranceCompanies",
                "model": "personalInfo.*.previousInsurance.pendingApplicationInOtherInsuranceCompanies",
                "parent": "personalInfo.*.previousInsurance.hasPendingApplicationInOtherInsuranceCompanies",
                "type": "dynamic",
                "required": "personalInfo.*.previousInsurance.hasPendingApplicationInOtherInsuranceCompanies",
                "visible": "personalInfo.*.previousInsurance.hasPendingApplicationInOtherInsuranceCompanies",
                "readOnly": false,
                "template": "personalInfo.previousInsurance.pendingApplicationInOtherInsuranceCompaniesDetail",
                "addLinkText": "Add pending application(s)",
                "removeLinkText": "Remove pending application"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.previousInsurance.hasInsuranceInForce",
                "type": "option",
                "label": "Do you have insurance(s) that is/are now in force?",
                "required": "personalInfo.*.id == assured.id",
                "visible": "personalInfo.*.id == assured.id",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "insuranceInForceDetail",
                "model": "personalInfo.*.previousInsurance.insuranceInForceDetail",
                "parent": "personalInfo.*.previousInsurance.hasInsuranceInForce",
                "type": "dynamic",
                "required": "personalInfo.*.previousInsurance.hasInsuranceInForce",
                "visible": "personalInfo.*.previousInsurance.hasInsuranceInForce",
                "readOnly": false,
                "template": "personalInfo.previousInsurance.insuranceInForceDetail",
                "addLinkText": "Add in force application(s)",
                "removeLinkText": "Remove in force application"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.previousInsurance.hasAnyExistingInsuranceWillInForce",
                "type": "option",
                "label": "Has there been or will there be any change in any existing insurance in force?",
                "required": "personalInfo.*.id == policyHolder.id",
                "visible": "personalInfo.*.id == policyHolder.id",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.previousInsurance.willUsePolicyLoanPaidInsurancePremiums",
                "type": "option",
                "label": "Will premiums for the insurance applied for be paid by a policy loan from any existing policy?",
                "required": "personalInfo.*.id == policyHolder.id",
                "visible": "personalInfo.*.id == policyHolder.id",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.previousInsurance.PolRep",
                "type": "option",
                "computedValue": "(personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "required": false,
                "visible": false,
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "label",
                "model": "personalInfo.*.previousInsurance.replacementNotification",
                "type": "label",
                "label": "'Replacement Notification for ' + getFullName(#this.policyHolder)",
                "required": false,
                "visible": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "readOnly": false
            },
            {
                "id": "reminder",
                "model": "personalInfo.*.previousInsurance.replacementReminder",
                "parent": "personalInfo.*.previousInsurance.replacementNotification",
                "type": "result",
                "required": false,
                "visible": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "readOnly": true,
                "labels": [
                    {
                        "status": "active",
                        "displayValue": true,
                        "label": "REMINDER: It is usually disadvantageous to REPLACE existing life insurance policy/ies with a new one. Some disadvantages are: (a) you may not be insurable under standard terms; (b) you may have to pay higher premiums in view of higher age; or (c) you may lose financial benefits accumulated over the years.Please note that in your own interest, we advise that you consult your present insurer before making a final decision. Hear from both sides and make a careful comparison. You can then be sure that you are making a final decision that is in your best interest."
                    }
                ]
            },
            {
                "id": "address",
                "model": "personalInfo.*.previousInsurance.address",
                "parent": "personalInfo.*.previousInsurance.replacementNotification",
                "type": "option",
                "maxLen": 150,
                "label": "Address ",
                "required": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "visible": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "dataType": "string",
                "readOnly": false,
                "layout": "normal",
                "options": [
                    {
                        "data": "present",
                        "label": "Present"
                    },
                    {
                        "data": "permanent",
                        "label": "Permanent"
                    },
                    {
                        "data": "business",
                        "label": "Business"
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.previousInsurance.isLifeInsuredInOtherApplicant",
                "parent": "personalInfo.*.previousInsurance.replacementNotification",
                "type": "option",
                "label": "Is the applicant other than the Life Insured?",
                "required": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "visible": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "lastName",
                "model": "personalInfo.*.previousInsurance.lifeInsuredInOtherApplicantDetail.lastName",
                "parent": "personalInfo.*.previousInsurance.isLifeInsuredInOtherApplicant",
                "maxLen": 60,
                "label": "Last name",
                "required": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums) && personalInfo.*.previousInsurance.isLifeInsuredInOtherApplicant",
                "visible": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums) && personalInfo.*.previousInsurance.isLifeInsuredInOtherApplicant",
                "readOnly": false
            },
            {
                "id": "firstName",
                "model": "personalInfo.*.previousInsurance.lifeInsuredInOtherApplicantDetail.firstName",
                "parent": "personalInfo.*.previousInsurance.isLifeInsuredInOtherApplicant",
                "maxLen": 60,
                "label": "First name",
                "required": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums) && personalInfo.*.previousInsurance.isLifeInsuredInOtherApplicant",
                "visible": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums) && personalInfo.*.previousInsurance.isLifeInsuredInOtherApplicant",
                "readOnly": false
            },
            {
                "id": "middleName",
                "model": "personalInfo.*.previousInsurance.lifeInsuredInOtherApplicantDetail.middleName",
                "parent": "personalInfo.*.previousInsurance.isLifeInsuredInOtherApplicant",
                "maxLen": 30,
                "label": "Middle name",
                "required": false,
                "visible": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums) && personalInfo.*.previousInsurance.isLifeInsuredInOtherApplicant",
                "readOnly": false
            },
            {
                "id": "label",
                "model": "personalInfo.*.previousInsurance.existingPoliciesToBeReplaced",
                "type": "label",
                "label": "Existing policies to be replaced",
                "required": false,
                "visible": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "readOnly": false
            },
            {
                "id": "insuredsName",
                "model": "personalInfo.*.previousInsurance.existingPoliciesToBeReplacedDetail.insuredsName",
                "parent": "personalInfo.*.previousInsurance.existingPoliciesToBeReplaced",
                "type": "textarea",
                "maxLen": 150,
                "label": "Insured's Name (as it appears in the Policy)",
                "required": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "visible": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "readOnly": false
            },
            {
                "id": "companyName",
                "model": "personalInfo.*.previousInsurance.existingPoliciesToBeReplacedDetail.companyName",
                "parent": "personalInfo.*.previousInsurance.existingPoliciesToBeReplaced",
                "maxLen": 30,
                "label": "Company name",
                "required": "personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums",
                "visible": "personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums",
                "readOnly": false
            },
            {
                "id": "policyNumber",
                "model": "personalInfo.*.previousInsurance.existingPoliciesToBeReplacedDetail.policyNumber",
                "parent": "personalInfo.*.previousInsurance.existingPoliciesToBeReplaced",
                "maxLen": 30,
                "label": "Policy number",
                "required": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "visible": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.previousInsurance.hasProposalOrMadeInsuranceAgainstAccidentOrCI",
                "type": "option",
                "label": "Has any proposal for life or health insurance on the child's life, or for insurance against accident or critical illness ever been made to Pru Life UK \n and/or any other insurance company?",
                "required": "personalInfo.*.id == assured.id && assured.age != null && assured.age < 18",
                "visible": "personalInfo.*.id == assured.id && assured.age != null && assured.age < 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "companyName",
                "model": "personalInfo.*.previousInsurance.proposalOrMadeInsuranceAgainstAccidentOrCIDetail.companyName",
                "parent": "personalInfo.*.previousInsurance.hasProposalOrMadeInsuranceAgainstAccidentOrCI",
                "maxLen": 30,
                "label": "Name of company",
                "required": "personalInfo.*.id == assured.id && assured.age != null && assured.age < 18 && personalInfo.*.previousInsurance.hasProposalOrMadeInsuranceAgainstAccidentOrCI",
                "visible": "personalInfo.*.id == assured.id && assured.age != null && assured.age < 18 && personalInfo.*.previousInsurance.hasProposalOrMadeInsuranceAgainstAccidentOrCI",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.previousInsurance.hasDeclinedDeferredSpecialRatesProposal",
                "type": "option",
                "label": "Has any such proposal ever been declined, deferred, or accepted at special rates?",
                "required": "personalInfo.*.id == assured.id && assured.age != null && assured.age < 18",
                "visible": "personalInfo.*.id == assured.id && assured.age != null && assured.age < 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "companyName",
                "model": "personalInfo.*.previousInsurance.declinedDeferredSpecialRatesProposalDetail.companyName",
                "parent": "personalInfo.*.previousInsurance.hasDeclinedDeferredSpecialRatesProposal",
                "maxLen": 30,
                "label": "Name of company",
                "required": "personalInfo.*.id == assured.id && assured.age != null && assured.age < 18 && personalInfo.*.previousInsurance.hasDeclinedDeferredSpecialRatesProposal",
                "visible": "personalInfo.*.id == assured.id && assured.age != null && assured.age < 18 && personalInfo.*.previousInsurance.hasDeclinedDeferredSpecialRatesProposal",
                "readOnly": false
            },
            {
                "id": "reason",
                "model": "personalInfo.*.previousInsurance.declinedDeferredSpecialRatesProposalDetail.reason",
                "parent": "personalInfo.*.previousInsurance.hasDeclinedDeferredSpecialRatesProposal",
                "type": "textarea",
                "maxLen": 200,
                "label": "Reason",
                "required": "personalInfo.*.id == assured.id && assured.age != null && assured.age < 18 && personalInfo.*.previousInsurance.hasDeclinedDeferredSpecialRatesProposal",
                "visible": "personalInfo.*.id == assured.id && assured.age != null && assured.age < 18 && personalInfo.*.previousInsurance.hasDeclinedDeferredSpecialRatesProposal",
                "readOnly": false,
                "layout": "normal"
            },
            {
                "id": "replacementAgreement",
                "description": "'1) My purchase of the ' + getProductName(#this.product.planName) + ' is a replacement for my existing Policy/ies with Pru Life UK and/or with another insurance company. \n2) My agent has disclosed to me the fees and charges that I will bear in switching from my original Policy/ies to the ' + getProductName(#this.product.planName) + '  (”the Replacement Policy”). I understand that the fees and charges would include all fees associated with the disposal of or reduction in coverage or interests under my original Policy/ies and/or fees incurred during the purchase of or increase in coverage or interests under the Replacement Policy. \n3) My agent has advised me of the disadvantages (i.e. loss of financial benefits, higher premium, non-insurability, etc.) that I will or may suffer (temporarily or otherwise) as a result of switching from my original Policy/ies to the Replacement Policy.'",
                "model": "personalInfo.*.previousInsurance.replacementAgreement",
                "type": "check",
                "defaultValue": false,
                "label": "'In connection with my decision to purchase a product from Pru Life Insurance Corporation of U.K. (”Pru Life UK”), I hereby certify the following:'",
                "required": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "visible": "personalInfo.*.id == policyHolder.id && (personalInfo.*.previousInsurance?.hasAnyExistingInsuranceWillInForce || personalInfo.*.previousInsurance?.willUsePolicyLoanPaidInsurancePremiums)",
                "readOnly": false
            }
        ]
    },
    "beneficiary.basicPlan": {
        "name": "beneficiary.basicPlan",
        "required": true,
        "dependsOn": "",
        "title": "Beneficiary details on basic plan",
        "subtitle": "",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "relationshipToInsured",
                "model": "beneficiary.basicPlan.*.relationship",
                "type": "select",
                "defaultValue": "",
                "label": "Relationship to insured",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "spouse",
                        "label": "Spouse"
                    },
                    {
                        "data": "child",
                        "label": "Child"
                    },
                    {
                        "data": "father",
                        "label": "Father"
                    },
                    {
                        "data": "mother",
                        "label": "Mother"
                    },
                    {
                        "data": "sibling",
                        "label": "Sibling"
                    },
                    {
                        "data": "grandparent",
                        "label": "Grandparent"
                    },
                    {
                        "data": "other",
                        "label": "Other"
                    },
                    {
                        "data": "estate",
                        "label": "Estate"
                    }
                ],
                "rowSize": 0.5
            },
            {
                "id": "specifyRelationship",
                "model": "beneficiary.basicPlan.*.specifyRelationship",
                "maxLen": 30,
                "label": "Specify relationship",
                "required": "beneficiary.basicPlan.*.relationship == 'other'",
                "visible": "beneficiary.basicPlan.*.relationship == 'other'",
                "dataType": "string",
                "readOnly": false,
                "regex": "^[A-Za-z\\s]+$",
                "rowSize": 0.5
            },
            {
                "id": "salutation",
                "model": "beneficiary.basicPlan.*.name.title",
                "type": "select",
                "label": "Title/Salutation",
                "required": "beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "source": "references:salutations",
                "rowSize": 0.5
            },
            {
                "id": "nameLast",
                "model": "beneficiary.basicPlan.*.name.last",
                "type": "string",
                "maxLen": 30,
                "label": "Last name",
                "required": "beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "regex": "^[A-Za-z0-9,'\\-\\.\\s]+$",
                "placeholder": "Doe",
                "rowSize": 0.5
            },
            {
                "id": "nameFirst",
                "model": "beneficiary.basicPlan.*.name.first",
                "type": "string",
                "maxLen": 30,
                "label": "First name",
                "required": "beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "regex": "^[A-Za-z0-9,'\\-\\.\\s]+$",
                "placeholder": "John",
                "rowSize": 0.5
            },
            {
                "id": "nameMiddle",
                "model": "beneficiary.basicPlan.*.name.middle",
                "type": "string",
                "maxLen": 30,
                "label": "Middle name",
                "required": "beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "regex": "^[A-Za-z0-9,'\\-\\.\\s]+$",
                "rowSize": 0.5
            },
            {
                "id": "date",
                "model": "beneficiary.basicPlan.*.dateOfBirth",
                "type": "date",
                "label": "Date of birth",
                "required": "beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "rowSize": 0.5
            },
            {
                "id": "gender",
                "model": "beneficiary.basicPlan.*.gender",
                "type": "option",
                "label": "Gender",
                "required": "beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "M",
                        "label": "Male"
                    },
                    {
                        "data": "F",
                        "label": "Female"
                    }
                ],
                "rowSize": 0.5
            },
            {
                "id": "floatNumber",
                "model": "beneficiary.basicPlan.*.beneficiaryPercentage",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "% Share",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "layout": "gradational",
                "regex": "^\\d+(\\.\\d+)?$",
                "placeholder": "1 to 100"
            },
            {
                "id": "beneficiaryType",
                "model": "beneficiary.basicPlan.*.beneficiaryType",
                "type": "option",
                "defaultValue": "'primary'",
                "label": "What is the beneficiary type?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "layout": "gradational",
                "options": [
                    {
                        "data": "primary",
                        "label": "Primary"
                    },
                    {
                        "data": "secondary",
                        "label": "Secondary"
                    }
                ]
            },
            {
                "id": "beneficiaryDesignation",
                "model": "beneficiary.basicPlan.*.beneficiaryDesignation",
                "type": "select",
                "defaultValue": "'revocable'",
                "label": "What is the beneficiary designation?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "layout": "gradational",
                "options": [
                    {
                        "data": "revocable",
                        "label": "Revocable"
                    },
                    {
                        "data": "irrevocable",
                        "label": "Irrevocable"
                    }
                ],
                "placeholder": "Revocable"
            },
            {
                "id": "country",
                "model": "beneficiary.basicPlan.*.countryOfBirth",
                "type": "select",
                "label": "Country of birth",
                "required": "beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "cascade": "beneficiary.basicPlan.*.birthCity,beneficiary.basicPlan.*.birthCityCustom",
                "source": "references:countries",
                "placeholder": "Philippines",
                "rowSize": 0.5
            },
            {
                "id": "city",
                "model": "beneficiary.basicPlan.*.birthCity",
                "type": "select",
                "defaultValue": "beneficiary.basicPlan.*.countryOfBirth != '163' ? 13 : undefined",
                "label": "City of birth",
                "required": "beneficiary.basicPlan.*.countryOfBirth != null && beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.countryOfBirth != null && beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "editable": "beneficiary.basicPlan.*.countryOfBirth == '163'",
                "source": "references:provinces[beneficiary.basicPlan.*.countryOfBirth]",
                "placeholder": "Please select city",
                "rowSize": 0.5
            },
            {
                "id": "birthCity",
                "model": "beneficiary.basicPlan.*.birthCityCustom",
                "type": "string",
                "maxLen": 30,
                "required": "(beneficiary.basicPlan.*.countryOfBirth != null && beneficiary.basicPlan.*.birthCity == 13) && beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "(beneficiary.basicPlan.*.countryOfBirth != null && beneficiary.basicPlan.*.birthCity == 13) && beneficiary.basicPlan.*.relationship != 'estate'",
                "readOnly": false,
                "placeholder": "City",
                "rowSize": 0.5
            },
            {
                "id": "nationality",
                "model": "beneficiary.basicPlan.*.nationality",
                "type": "select",
                "defaultValue": "beneficiary.basicPlan.*.countryOfBirth",
                "label": "Nationality",
                "required": "beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "163",
                        "label": "Filipino"
                    },
                    {
                        "data": "3",
                        "label": "Afghan"
                    },
                    {
                        "data": "169",
                        "label": "African"
                    },
                    {
                        "data": "4",
                        "label": "Albanian"
                    },
                    {
                        "data": "31",
                        "label": "Algerian"
                    },
                    {
                        "data": "131",
                        "label": "American"
                    },
                    {
                        "data": "5",
                        "label": "Andorran"
                    },
                    {
                        "data": "168",
                        "label": "Angolan"
                    },
                    {
                        "data": "96",
                        "label": "Argentinian"
                    },
                    {
                        "data": "170",
                        "label": "Armenian"
                    },
                    {
                        "data": "6",
                        "label": "Australian"
                    },
                    {
                        "data": "1",
                        "label": "Austrian"
                    },
                    {
                        "data": "229",
                        "label": "Austronesian"
                    },
                    {
                        "data": "174",
                        "label": "Azerbaijani"
                    },
                    {
                        "data": "15",
                        "label": "Bahamian"
                    },
                    {
                        "data": "14",
                        "label": "Bahraini"
                    },
                    {
                        "data": "8",
                        "label": "Bangladeshi"
                    },
                    {
                        "data": "9",
                        "label": "Barbadian"
                    },
                    {
                        "data": "7",
                        "label": "Belgian"
                    },
                    {
                        "data": "11",
                        "label": "Belizean"
                    },
                    {
                        "data": "179",
                        "label": "Belorussian"
                    },
                    {
                        "data": "30",
                        "label": "Beninese"
                    },
                    {
                        "data": "180",
                        "label": "Bermudian"
                    },
                    {
                        "data": "181",
                        "label": "Bhutanese"
                    },
                    {
                        "data": "199",
                        "label": "Bissau-Guinean"
                    },
                    {
                        "data": "12",
                        "label": "Bolivian"
                    },
                    {
                        "data": "177",
                        "label": "Bosnian"
                    },
                    {
                        "data": "13",
                        "label": "Brazilian"
                    },
                    {
                        "data": "47",
                        "label": "British"
                    },
                    {
                        "data": "253",
                        "label": "British"
                    },
                    {
                        "data": "196",
                        "label": "British, Scottish, Irish or Welsh"
                    },
                    {
                        "data": "165",
                        "label": "Bruneian"
                    },
                    {
                        "data": "10",
                        "label": "Bulgarian"
                    },
                    {
                        "data": "176",
                        "label": "Burkinabé"
                    },
                    {
                        "data": "16",
                        "label": "Burmese"
                    },
                    {
                        "data": "175",
                        "label": "Burundian"
                    },
                    {
                        "data": "69",
                        "label": "Cambodian"
                    },
                    {
                        "data": "183",
                        "label": "Cameroonian"
                    },
                    {
                        "data": "19",
                        "label": "Canadian"
                    },
                    {
                        "data": "189",
                        "label": "Caymanian"
                    },
                    {
                        "data": "98",
                        "label": "Central African"
                    },
                    {
                        "data": "245",
                        "label": "Chadian"
                    },
                    {
                        "data": "100",
                        "label": "Chilean"
                    },
                    {
                        "data": "150",
                        "label": "Chinese"
                    },
                    {
                        "data": "23",
                        "label": "Colombian"
                    },
                    {
                        "data": "Congo, (Kinshasa)",
                        "label": "Congolese"
                    },
                    {
                        "data": "58",
                        "label": "Croatian"
                    },
                    {
                        "data": "18",
                        "label": "Cuban"
                    },
                    {
                        "data": "25",
                        "label": "Cypriot"
                    },
                    {
                        "data": "26",
                        "label": "Czech"
                    },
                    {
                        "data": "28",
                        "label": "Dane"
                    },
                    {
                        "data": "190",
                        "label": "Djiboutian"
                    },
                    {
                        "data": "138",
                        "label": "Dominican"
                    },
                    {
                        "data": "167",
                        "label": "Dutchman"
                    },
                    {
                        "data": "36",
                        "label": "Ecuadorean"
                    },
                    {
                        "data": "38",
                        "label": "Egyptian"
                    },
                    {
                        "data": "133",
                        "label": "Emirati"
                    },
                    {
                        "data": "200",
                        "label": "Equatoguinean"
                    },
                    {
                        "data": "191",
                        "label": "Eritrean"
                    },
                    {
                        "data": "40",
                        "label": "Estonian"
                    },
                    {
                        "data": "39",
                        "label": "Ethiopian"
                    },
                    {
                        "data": "43",
                        "label": "Fijian"
                    },
                    {
                        "data": "42",
                        "label": "Finn"
                    },
                    {
                        "data": "41",
                        "label": "Frenchman"
                    },
                    {
                        "data": "195",
                        "label": "Gabonese"
                    },
                    {
                        "data": "Gambia",
                        "label": "Gambian"
                    },
                    {
                        "data": "197",
                        "label": "Georgian"
                    },
                    {
                        "data": "27",
                        "label": "German"
                    },
                    {
                        "data": "53",
                        "label": "Ghanaian"
                    },
                    {
                        "data": "54",
                        "label": "Greek"
                    },
                    {
                        "data": "201",
                        "label": "Greenlandic"
                    },
                    {
                        "data": "139",
                        "label": "Grenadian"
                    },
                    {
                        "data": "202",
                        "label": "Guamanian"
                    },
                    {
                        "data": "52",
                        "label": "Guatemalan"
                    },
                    {
                        "data": "198",
                        "label": "Guinean"
                    },
                    {
                        "data": "55",
                        "label": "Guyanese"
                    },
                    {
                        "data": "101",
                        "label": "Haitian"
                    },
                    {
                        "data": "203",
                        "label": "Honduran"
                    },
                    {
                        "data": "56",
                        "label": "Hungarian"
                    },
                    {
                        "data": "65",
                        "label": "Icelander"
                    },
                    {
                        "data": "61",
                        "label": "Indian"
                    },
                    {
                        "data": "164",
                        "label": "Indonesian"
                    },
                    {
                        "data": "Iran, Islamic Republic of",
                        "label": "Iranian"
                    },
                    {
                        "data": "64",
                        "label": "Iraqi"
                    },
                    {
                        "data": "63",
                        "label": "Irishman"
                    },
                    {
                        "data": "60",
                        "label": "Israeli"
                    },
                    {
                        "data": "59",
                        "label": "Italian"
                    },
                    {
                        "data": "Côte d'Ivoire",
                        "label": "Ivorian"
                    },
                    {
                        "data": "67",
                        "label": "Jamaican"
                    },
                    {
                        "data": "148",
                        "label": "Japanese"
                    },
                    {
                        "data": "68",
                        "label": "Jordanian"
                    },
                    {
                        "data": "204",
                        "label": "Kazakh"
                    },
                    {
                        "data": "33",
                        "label": "Kenyan"
                    },
                    {
                        "data": "206",
                        "label": "Kiribati"
                    },
                    {
                        "data": "Korea (North)",
                        "label": "Korean"
                    },
                    {
                        "data": "70",
                        "label": "Kuwaiti"
                    },
                    {
                        "data": "205",
                        "label": "Kyrgyzstani"
                    },
                    {
                        "data": "Lao PDR",
                        "label": "Laotian"
                    },
                    {
                        "data": "76",
                        "label": "Latvian"
                    },
                    {
                        "data": "104",
                        "label": "Lebanese"
                    },
                    {
                        "data": "209",
                        "label": "Liberian"
                    },
                    {
                        "data": "73",
                        "label": "Libyan"
                    },
                    {
                        "data": "44",
                        "label": "Liechtensteiner"
                    },
                    {
                        "data": "75",
                        "label": "Lithuanian"
                    },
                    {
                        "data": "71",
                        "label": "Luxembourger"
                    },
                    {
                        "data": "Macedonia, Republic of",
                        "label": "Macedonian"
                    },
                    {
                        "data": "105",
                        "label": "Madagascan"
                    },
                    {
                        "data": "84",
                        "label": "Malawian"
                    },
                    {
                        "data": "161",
                        "label": "Malaysian"
                    },
                    {
                        "data": "213",
                        "label": "Maldivian"
                    },
                    {
                        "data": "106",
                        "label": "Malian"
                    },
                    {
                        "data": "77",
                        "label": "Maltese"
                    },
                    {
                        "data": "50",
                        "label": "Manx"
                    },
                    {
                        "data": "185",
                        "label": "Māori or Kiwi"
                    },
                    {
                        "data": "103",
                        "label": "Mauritanian"
                    },
                    {
                        "data": "83",
                        "label": "Mauritian"
                    },
                    {
                        "data": "239",
                        "label": "Melanesian"
                    },
                    {
                        "data": "81",
                        "label": "Mexican"
                    },
                    {
                        "data": "Micronesia, Federated States of",
                        "label": "Micronesian"
                    },
                    {
                        "data": "212",
                        "label": "Moldovan"
                    },
                    {
                        "data": "80",
                        "label": "Monacan"
                    },
                    {
                        "data": "149",
                        "label": "Mongolian"
                    },
                    {
                        "data": "215",
                        "label": "Montenegrin"
                    },
                    {
                        "data": "78",
                        "label": "Moroccan"
                    },
                    {
                        "data": "74",
                        "label": "Mosotho"
                    },
                    {
                        "data": "97",
                        "label": "Motswana"
                    },
                    {
                        "data": "217",
                        "label": "Mozambican"
                    },
                    {
                        "data": "220",
                        "label": "Namibian"
                    },
                    {
                        "data": "225",
                        "label": "Nauruan"
                    },
                    {
                        "data": "224",
                        "label": "Nepalese"
                    },
                    {
                        "data": "87",
                        "label": "Nicaraguan"
                    },
                    {
                        "data": "137",
                        "label": "Nigerian"
                    },
                    {
                        "data": "107",
                        "label": "Nigerien"
                    },
                    {
                        "data": "Faroe Islands",
                        "label": "Norwegian"
                    },
                    {
                        "data": "226",
                        "label": "Omani"
                    },
                    {
                        "data": "Other",
                        "label": "Other"
                    },
                    {
                        "data": "93",
                        "label": "Pakistani"
                    },
                    {
                        "data": "Palestinian Territory",
                        "label": "Palestinian"
                    },
                    {
                        "data": "91",
                        "label": "Panamanian"
                    },
                    {
                        "data": "Paraguay",
                        "label": "Paraguayan"
                    },
                    {
                        "data": "92",
                        "label": "Peruvian"
                    },
                    {
                        "data": "Pitcairn",
                        "label": "Pitcairnese"
                    },
                    {
                        "data": "94",
                        "label": "Pole"
                    },
                    {
                        "data": "233",
                        "label": "Polynesian"
                    },
                    {
                        "data": "90",
                        "label": "Portuguese"
                    },
                    {
                        "data": "234",
                        "label": "Qatari"
                    },
                    {
                        "data": "237",
                        "label": "Roman"
                    },
                    {
                        "data": "108",
                        "label": "Romanian"
                    },
                    {
                        "data": "113",
                        "label": "Russian"
                    },
                    {
                        "data": "114",
                        "label": "Rwandan"
                    },
                    {
                        "data": "192",
                        "label": "Sahrawi"
                    },
                    {
                        "data": "Saint Vincent and Grenadines",
                        "label": "Saint Lucian"
                    },
                    {
                        "data": "37",
                        "label": "Salvadorean"
                    },
                    {
                        "data": "112",
                        "label": "Sammarinese"
                    },
                    {
                        "data": "140",
                        "label": "Samoan"
                    },
                    {
                        "data": "235",
                        "label": "Saudi"
                    },
                    {
                        "data": "120",
                        "label": "Senegalese"
                    },
                    {
                        "data": "241",
                        "label": "Serbian"
                    },
                    {
                        "data": "122",
                        "label": "Seychellois"
                    },
                    {
                        "data": "136",
                        "label": "Sierra Leonean"
                    },
                    {
                        "data": "162",
                        "label": "Singaporean"
                    },
                    {
                        "data": "118",
                        "label": "Slovak"
                    },
                    {
                        "data": "243",
                        "label": "Slovenian"
                    },
                    {
                        "data": "121",
                        "label": "Somali"
                    },
                    {
                        "data": "144",
                        "label": "South African"
                    },
                    {
                        "data": "32",
                        "label": "Spaniard"
                    },
                    {
                        "data": "24",
                        "label": "Spanish"
                    },
                    {
                        "data": "22",
                        "label": "SriLankan"
                    },
                    {
                        "data": "236",
                        "label": "Sudanese"
                    },
                    {
                        "data": "Suriname",
                        "label": "Surinamese"
                    },
                    {
                        "data": "116",
                        "label": "Swazi"
                    },
                    {
                        "data": "115",
                        "label": "Swede"
                    },
                    {
                        "data": "20",
                        "label": "Swiss"
                    },
                    {
                        "data": "Syrian Arab Republic (Syria)",
                        "label": "Syrian"
                    },
                    {
                        "data": "246",
                        "label": "Tadzhik"
                    },
                    {
                        "data": "154",
                        "label": "Taiwanese"
                    },
                    {
                        "data": "Tanzania, United Republic of",
                        "label": "Tanzanian"
                    },
                    {
                        "data": "157",
                        "label": "Thai"
                    },
                    {
                        "data": "248",
                        "label": "Timorese"
                    },
                    {
                        "data": "125",
                        "label": "Togolese"
                    },
                    {
                        "data": "249",
                        "label": "Tongan"
                    },
                    {
                        "data": "Trinidad and Tobago",
                        "label": "Trinidadian"
                    },
                    {
                        "data": "127",
                        "label": "Tunisian"
                    },
                    {
                        "data": "128",
                        "label": "Turk"
                    },
                    {
                        "data": "126",
                        "label": "Turkmen"
                    },
                    {
                        "data": "35",
                        "label": "Ugandan"
                    },
                    {
                        "data": "130",
                        "label": "Ukrainian"
                    },
                    {
                        "data": "110",
                        "label": "Uruguayan"
                    },
                    {
                        "data": "251",
                        "label": "Uzbek"
                    },
                    {
                        "data": "Venezuela (Bolivarian Republic)",
                        "label": "Venezuelan"
                    },
                    {
                        "data": "Viet Nam",
                        "label": "Vietnamese"
                    },
                    {
                        "data": "2",
                        "label": "Yemeni"
                    },
                    {
                        "data": "141",
                        "label": "Yugoslav"
                    },
                    {
                        "data": "143",
                        "label": "Zambian"
                    },
                    {
                        "data": "146",
                        "label": "Zimbabwean"
                    }
                ],
                "placeholder": "Filipino",
                "rowSize": 0.5
            },
            {
                "id": "address",
                "model": "beneficiary.basicPlan.*.address",
                "type": "address",
                "maxLen": 50,
                "label": "Present Address",
                "required": "beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "layout": "gradational",
                "placeholder": "Building, street name, city"
            },
            {
                "id": "country",
                "model": "beneficiary.basicPlan.*.country",
                "type": "select",
                "label": "Country",
                "required": "beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "cascade": "beneficiary.basicPlan.*.cityCustom,beneficiary.basicPlan.*.city",
                "source": "references:countries",
                "placeholder": "Philippines",
                "rowSize": 0.5
            },
            {
                "id": "city",
                "model": "beneficiary.basicPlan.*.city",
                "type": "select",
                "defaultValue": "beneficiary.basicPlan.*.country != '163' ? 13 : undefined",
                "label": "City",
                "required": "beneficiary.basicPlan.*.country != null && beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.country != null && beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "editable": "beneficiary.basicPlan.*.country == '163'",
                "source": "references:provinces[beneficiary.basicPlan.*.country]",
                "placeholder": "Please select city",
                "rowSize": 0.5
            },
            {
                "id": "birthCity",
                "model": "beneficiary.basicPlan.*.cityCustom",
                "type": "string",
                "maxLen": 30,
                "required": "(beneficiary.basicPlan.*.country != null && beneficiary.basicPlan.*.city == 13) && beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "(beneficiary.basicPlan.*.country != null && beneficiary.basicPlan.*.city == 13) && beneficiary.basicPlan.*.relationship != 'estate'",
                "readOnly": false,
                "placeholder": "City",
                "rowSize": 0.5
            },
            {
                "id": "zipcode",
                "model": "beneficiary.basicPlan.*.zipcode",
                "type": "string",
                "maxLen": 10,
                "label": "Zip Code",
                "required": "beneficiary.basicPlan.*.relationship != 'estate'",
                "visible": "beneficiary.basicPlan.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "regex": "^\\d+$",
                "placeholder": "0000",
                "rowSize": 0.5
            }
        ]
    },
    "beneficiary.payorTermOrWaiver": {
        "name": "beneficiary.payorTermOrWaiver",
        "required": true,
        "dependsOn": "",
        "title": "Beneficiary details on payor term rider",
        "subtitle": "",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "id": "relationshipToInsured",
                "model": "beneficiary.payorTermOrWaiver.*.relationship",
                "type": "select",
                "defaultValue": "",
                "label": "Relationship to Policyowner",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "spouse",
                        "label": "Spouse"
                    },
                    {
                        "data": "child",
                        "label": "Child"
                    },
                    {
                        "data": "father",
                        "label": "Father"
                    },
                    {
                        "data": "mother",
                        "label": "Mother"
                    },
                    {
                        "data": "sibling",
                        "label": "Sibling"
                    },
                    {
                        "data": "grandparent",
                        "label": "Grandparent"
                    },
                    {
                        "data": "other",
                        "label": "Other"
                    },
                    {
                        "data": "estate",
                        "label": "Estate"
                    }
                ],
                "rowSize": 0.5
            },
            {
                "id": "specifyRelationship",
                "model": "beneficiary.payorTermOrWaiver.*.specifyRelationship",
                "maxLen": 30,
                "label": "Specify relationship",
                "required": "beneficiary.payorTermOrWaiver.*.relationship == 'other'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship == 'other'",
                "dataType": "string",
                "readOnly": false,
                "regex": "^[A-Za-z\\s]+$",
                "rowSize": 0.5
            },
            {
                "id": "salutation",
                "model": "beneficiary.payorTermOrWaiver.*.name.title",
                "type": "select",
                "label": "Title/Salutation",
                "required": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "source": "references:salutations",
                "rowSize": 0.5
            },
            {
                "id": "nameLast",
                "model": "beneficiary.payorTermOrWaiver.*.name.last",
                "type": "string",
                "maxLen": 30,
                "label": "Last name",
                "required": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "regex": "^[A-Za-z0-9,'\\-\\.\\s]+$",
                "placeholder": "Doe",
                "rowSize": 0.5
            },
            {
                "id": "nameFirst",
                "model": "beneficiary.payorTermOrWaiver.*.name.first",
                "type": "string",
                "maxLen": 30,
                "label": "First name",
                "required": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "regex": "^[A-Za-z0-9,'\\-\\.\\s]+$",
                "placeholder": "John",
                "rowSize": 0.5
            },
            {
                "id": "nameMiddle",
                "model": "beneficiary.payorTermOrWaiver.*.name.middle",
                "type": "string",
                "maxLen": 30,
                "label": "Middle name",
                "required": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "regex": "^[A-Za-z0-9,'\\-\\.\\s]+$",
                "rowSize": 0.5
            },
            {
                "id": "date",
                "model": "beneficiary.payorTermOrWaiver.*.dateOfBirth",
                "type": "date",
                "label": "Date of birth",
                "required": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "rowSize": 0.5
            },
            {
                "id": "gender",
                "model": "beneficiary.payorTermOrWaiver.*.gender",
                "type": "option",
                "label": "Gender",
                "required": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "M",
                        "label": "Male"
                    },
                    {
                        "data": "F",
                        "label": "Female"
                    }
                ],
                "rowSize": 0.5
            },
            {
                "id": "floatNumber",
                "model": "beneficiary.payorTermOrWaiver.*.beneficiaryPercentage",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "% Share",
                "required": true,
                "visible": true,
                "dataType": "number",
                "readOnly": false,
                "layout": "gradational",
                "regex": "^\\d+(\\.\\d+)?$",
                "placeholder": "1 to 100"
            },
            {
                "id": "beneficiaryType",
                "model": "beneficiary.payorTermOrWaiver.*.beneficiaryType",
                "type": "option",
                "defaultValue": "'primary'",
                "label": "What is the beneficiary type?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "layout": "gradational",
                "options": [
                    {
                        "data": "primary",
                        "label": "Primary"
                    },
                    {
                        "data": "secondary",
                        "label": "Secondary"
                    }
                ]
            },
            {
                "id": "beneficiaryDesignation",
                "model": "beneficiary.payorTermOrWaiver.*.beneficiaryDesignation",
                "type": "select",
                "defaultValue": "'revocable'",
                "label": "What is the beneficiary designation?",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "layout": "gradational",
                "options": [
                    {
                        "data": "revocable",
                        "label": "Revocable"
                    },
                    {
                        "data": "irrevocable",
                        "label": "Irrevocable"
                    }
                ],
                "placeholder": "Revocable"
            },
            {
                "id": "country",
                "model": "beneficiary.payorTermOrWaiver.*.countryOfBirth",
                "type": "select",
                "label": "Country of birth",
                "required": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "cascade": "beneficiary.payorTermOrWaiver.*.birthCity,beneficiary.payorTermOrWaiver.*.birthCityCustom",
                "source": "references:countries",
                "placeholder": "Philippines",
                "rowSize": 0.5
            },
            {
                "id": "city",
                "model": "beneficiary.payorTermOrWaiver.*.birthCity",
                "type": "select",
                "defaultValue": "beneficiary.payorTermOrWaiver.*.countryOfBirth != '163' ? 13 : undefined",
                "label": "City of birth",
                "required": "beneficiary.payorTermOrWaiver.*.countryOfBirth != null",
                "visible": "beneficiary.payorTermOrWaiver.*.countryOfBirth != null",
                "dataType": "string",
                "readOnly": false,
                "editable": "beneficiary.payorTermOrWaiver.*.countryOfBirth == '163'",
                "source": "references:provinces[beneficiary.payorTermOrWaiver.*.countryOfBirth]",
                "rowSize": 0.5
            },
            {
                "model": "beneficiary.payorTermOrWaiver.*.birthCityCustom",
                "type": "string",
                "maxLen": 30,
                "label": " ",
                "required": "(beneficiary.payorTermOrWaiver.*.countryOfBirth != null && beneficiary.payorTermOrWaiver.*.birthCity == 13) && beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "(beneficiary.payorTermOrWaiver.*.countryOfBirth != null && beneficiary.payorTermOrWaiver.*.birthCity == 13) && beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "readOnly": false,
                "placeholder": "Please specify city",
                "rowSize": 0.5
            },
            {
                "id": "nationality",
                "model": "beneficiary.payorTermOrWaiver.*.nationality",
                "type": "select",
                "defaultValue": "beneficiary.payorTermOrWaiver.*.countryOfBirth",
                "label": "Nationality",
                "required": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "163",
                        "label": "Filipino"
                    },
                    {
                        "data": "3",
                        "label": "Afghan"
                    },
                    {
                        "data": "169",
                        "label": "African"
                    },
                    {
                        "data": "4",
                        "label": "Albanian"
                    },
                    {
                        "data": "31",
                        "label": "Algerian"
                    },
                    {
                        "data": "131",
                        "label": "American"
                    },
                    {
                        "data": "5",
                        "label": "Andorran"
                    },
                    {
                        "data": "168",
                        "label": "Angolan"
                    },
                    {
                        "data": "96",
                        "label": "Argentinian"
                    },
                    {
                        "data": "170",
                        "label": "Armenian"
                    },
                    {
                        "data": "6",
                        "label": "Australian"
                    },
                    {
                        "data": "1",
                        "label": "Austrian"
                    },
                    {
                        "data": "229",
                        "label": "Austronesian"
                    },
                    {
                        "data": "174",
                        "label": "Azerbaijani"
                    },
                    {
                        "data": "15",
                        "label": "Bahamian"
                    },
                    {
                        "data": "14",
                        "label": "Bahraini"
                    },
                    {
                        "data": "8",
                        "label": "Bangladeshi"
                    },
                    {
                        "data": "9",
                        "label": "Barbadian"
                    },
                    {
                        "data": "7",
                        "label": "Belgian"
                    },
                    {
                        "data": "11",
                        "label": "Belizean"
                    },
                    {
                        "data": "179",
                        "label": "Belorussian"
                    },
                    {
                        "data": "30",
                        "label": "Beninese"
                    },
                    {
                        "data": "180",
                        "label": "Bermudian"
                    },
                    {
                        "data": "181",
                        "label": "Bhutanese"
                    },
                    {
                        "data": "199",
                        "label": "Bissau-Guinean"
                    },
                    {
                        "data": "12",
                        "label": "Bolivian"
                    },
                    {
                        "data": "177",
                        "label": "Bosnian"
                    },
                    {
                        "data": "13",
                        "label": "Brazilian"
                    },
                    {
                        "data": "47",
                        "label": "British"
                    },
                    {
                        "data": "253",
                        "label": "British"
                    },
                    {
                        "data": "196",
                        "label": "British, Scottish, Irish or Welsh"
                    },
                    {
                        "data": "165",
                        "label": "Bruneian"
                    },
                    {
                        "data": "10",
                        "label": "Bulgarian"
                    },
                    {
                        "data": "176",
                        "label": "Burkinabé"
                    },
                    {
                        "data": "16",
                        "label": "Burmese"
                    },
                    {
                        "data": "175",
                        "label": "Burundian"
                    },
                    {
                        "data": "69",
                        "label": "Cambodian"
                    },
                    {
                        "data": "183",
                        "label": "Cameroonian"
                    },
                    {
                        "data": "19",
                        "label": "Canadian"
                    },
                    {
                        "data": "189",
                        "label": "Caymanian"
                    },
                    {
                        "data": "98",
                        "label": "Central African"
                    },
                    {
                        "data": "245",
                        "label": "Chadian"
                    },
                    {
                        "data": "100",
                        "label": "Chilean"
                    },
                    {
                        "data": "150",
                        "label": "Chinese"
                    },
                    {
                        "data": "23",
                        "label": "Colombian"
                    },
                    {
                        "data": "Congo, (Kinshasa)",
                        "label": "Congolese"
                    },
                    {
                        "data": "58",
                        "label": "Croatian"
                    },
                    {
                        "data": "18",
                        "label": "Cuban"
                    },
                    {
                        "data": "25",
                        "label": "Cypriot"
                    },
                    {
                        "data": "26",
                        "label": "Czech"
                    },
                    {
                        "data": "28",
                        "label": "Dane"
                    },
                    {
                        "data": "190",
                        "label": "Djiboutian"
                    },
                    {
                        "data": "138",
                        "label": "Dominican"
                    },
                    {
                        "data": "167",
                        "label": "Dutchman"
                    },
                    {
                        "data": "36",
                        "label": "Ecuadorean"
                    },
                    {
                        "data": "38",
                        "label": "Egyptian"
                    },
                    {
                        "data": "133",
                        "label": "Emirati"
                    },
                    {
                        "data": "200",
                        "label": "Equatoguinean"
                    },
                    {
                        "data": "191",
                        "label": "Eritrean"
                    },
                    {
                        "data": "40",
                        "label": "Estonian"
                    },
                    {
                        "data": "39",
                        "label": "Ethiopian"
                    },
                    {
                        "data": "43",
                        "label": "Fijian"
                    },
                    {
                        "data": "42",
                        "label": "Finn"
                    },
                    {
                        "data": "41",
                        "label": "Frenchman"
                    },
                    {
                        "data": "195",
                        "label": "Gabonese"
                    },
                    {
                        "data": "Gambia",
                        "label": "Gambian"
                    },
                    {
                        "data": "197",
                        "label": "Georgian"
                    },
                    {
                        "data": "27",
                        "label": "German"
                    },
                    {
                        "data": "53",
                        "label": "Ghanaian"
                    },
                    {
                        "data": "54",
                        "label": "Greek"
                    },
                    {
                        "data": "201",
                        "label": "Greenlandic"
                    },
                    {
                        "data": "139",
                        "label": "Grenadian"
                    },
                    {
                        "data": "202",
                        "label": "Guamanian"
                    },
                    {
                        "data": "52",
                        "label": "Guatemalan"
                    },
                    {
                        "data": "198",
                        "label": "Guinean"
                    },
                    {
                        "data": "55",
                        "label": "Guyanese"
                    },
                    {
                        "data": "101",
                        "label": "Haitian"
                    },
                    {
                        "data": "203",
                        "label": "Honduran"
                    },
                    {
                        "data": "56",
                        "label": "Hungarian"
                    },
                    {
                        "data": "65",
                        "label": "Icelander"
                    },
                    {
                        "data": "61",
                        "label": "Indian"
                    },
                    {
                        "data": "164",
                        "label": "Indonesian"
                    },
                    {
                        "data": "Iran, Islamic Republic of",
                        "label": "Iranian"
                    },
                    {
                        "data": "64",
                        "label": "Iraqi"
                    },
                    {
                        "data": "63",
                        "label": "Irishman"
                    },
                    {
                        "data": "60",
                        "label": "Israeli"
                    },
                    {
                        "data": "59",
                        "label": "Italian"
                    },
                    {
                        "data": "Côte d'Ivoire",
                        "label": "Ivorian"
                    },
                    {
                        "data": "67",
                        "label": "Jamaican"
                    },
                    {
                        "data": "148",
                        "label": "Japanese"
                    },
                    {
                        "data": "68",
                        "label": "Jordanian"
                    },
                    {
                        "data": "204",
                        "label": "Kazakh"
                    },
                    {
                        "data": "33",
                        "label": "Kenyan"
                    },
                    {
                        "data": "206",
                        "label": "Kiribati"
                    },
                    {
                        "data": "Korea (North)",
                        "label": "Korean"
                    },
                    {
                        "data": "70",
                        "label": "Kuwaiti"
                    },
                    {
                        "data": "205",
                        "label": "Kyrgyzstani"
                    },
                    {
                        "data": "Lao PDR",
                        "label": "Laotian"
                    },
                    {
                        "data": "76",
                        "label": "Latvian"
                    },
                    {
                        "data": "104",
                        "label": "Lebanese"
                    },
                    {
                        "data": "209",
                        "label": "Liberian"
                    },
                    {
                        "data": "73",
                        "label": "Libyan"
                    },
                    {
                        "data": "44",
                        "label": "Liechtensteiner"
                    },
                    {
                        "data": "75",
                        "label": "Lithuanian"
                    },
                    {
                        "data": "71",
                        "label": "Luxembourger"
                    },
                    {
                        "data": "Macedonia, Republic of",
                        "label": "Macedonian"
                    },
                    {
                        "data": "105",
                        "label": "Madagascan"
                    },
                    {
                        "data": "84",
                        "label": "Malawian"
                    },
                    {
                        "data": "161",
                        "label": "Malaysian"
                    },
                    {
                        "data": "213",
                        "label": "Maldivian"
                    },
                    {
                        "data": "106",
                        "label": "Malian"
                    },
                    {
                        "data": "77",
                        "label": "Maltese"
                    },
                    {
                        "data": "50",
                        "label": "Manx"
                    },
                    {
                        "data": "185",
                        "label": "Māori or Kiwi"
                    },
                    {
                        "data": "103",
                        "label": "Mauritanian"
                    },
                    {
                        "data": "83",
                        "label": "Mauritian"
                    },
                    {
                        "data": "239",
                        "label": "Melanesian"
                    },
                    {
                        "data": "81",
                        "label": "Mexican"
                    },
                    {
                        "data": "Micronesia, Federated States of",
                        "label": "Micronesian"
                    },
                    {
                        "data": "212",
                        "label": "Moldovan"
                    },
                    {
                        "data": "80",
                        "label": "Monacan"
                    },
                    {
                        "data": "149",
                        "label": "Mongolian"
                    },
                    {
                        "data": "215",
                        "label": "Montenegrin"
                    },
                    {
                        "data": "78",
                        "label": "Moroccan"
                    },
                    {
                        "data": "74",
                        "label": "Mosotho"
                    },
                    {
                        "data": "97",
                        "label": "Motswana"
                    },
                    {
                        "data": "217",
                        "label": "Mozambican"
                    },
                    {
                        "data": "220",
                        "label": "Namibian"
                    },
                    {
                        "data": "225",
                        "label": "Nauruan"
                    },
                    {
                        "data": "224",
                        "label": "Nepalese"
                    },
                    {
                        "data": "87",
                        "label": "Nicaraguan"
                    },
                    {
                        "data": "137",
                        "label": "Nigerian"
                    },
                    {
                        "data": "107",
                        "label": "Nigerien"
                    },
                    {
                        "data": "Faroe Islands",
                        "label": "Norwegian"
                    },
                    {
                        "data": "226",
                        "label": "Omani"
                    },
                    {
                        "data": "Other",
                        "label": "Other"
                    },
                    {
                        "data": "93",
                        "label": "Pakistani"
                    },
                    {
                        "data": "Palestinian Territory",
                        "label": "Palestinian"
                    },
                    {
                        "data": "91",
                        "label": "Panamanian"
                    },
                    {
                        "data": "Paraguay",
                        "label": "Paraguayan"
                    },
                    {
                        "data": "92",
                        "label": "Peruvian"
                    },
                    {
                        "data": "Pitcairn",
                        "label": "Pitcairnese"
                    },
                    {
                        "data": "94",
                        "label": "Pole"
                    },
                    {
                        "data": "233",
                        "label": "Polynesian"
                    },
                    {
                        "data": "90",
                        "label": "Portuguese"
                    },
                    {
                        "data": "234",
                        "label": "Qatari"
                    },
                    {
                        "data": "237",
                        "label": "Roman"
                    },
                    {
                        "data": "108",
                        "label": "Romanian"
                    },
                    {
                        "data": "113",
                        "label": "Russian"
                    },
                    {
                        "data": "114",
                        "label": "Rwandan"
                    },
                    {
                        "data": "192",
                        "label": "Sahrawi"
                    },
                    {
                        "data": "Saint Vincent and Grenadines",
                        "label": "Saint Lucian"
                    },
                    {
                        "data": "37",
                        "label": "Salvadorean"
                    },
                    {
                        "data": "112",
                        "label": "Sammarinese"
                    },
                    {
                        "data": "140",
                        "label": "Samoan"
                    },
                    {
                        "data": "235",
                        "label": "Saudi"
                    },
                    {
                        "data": "120",
                        "label": "Senegalese"
                    },
                    {
                        "data": "241",
                        "label": "Serbian"
                    },
                    {
                        "data": "122",
                        "label": "Seychellois"
                    },
                    {
                        "data": "136",
                        "label": "Sierra Leonean"
                    },
                    {
                        "data": "162",
                        "label": "Singaporean"
                    },
                    {
                        "data": "118",
                        "label": "Slovak"
                    },
                    {
                        "data": "243",
                        "label": "Slovenian"
                    },
                    {
                        "data": "121",
                        "label": "Somali"
                    },
                    {
                        "data": "144",
                        "label": "South African"
                    },
                    {
                        "data": "32",
                        "label": "Spaniard"
                    },
                    {
                        "data": "24",
                        "label": "Spanish"
                    },
                    {
                        "data": "22",
                        "label": "SriLankan"
                    },
                    {
                        "data": "236",
                        "label": "Sudanese"
                    },
                    {
                        "data": "Suriname",
                        "label": "Surinamese"
                    },
                    {
                        "data": "116",
                        "label": "Swazi"
                    },
                    {
                        "data": "115",
                        "label": "Swede"
                    },
                    {
                        "data": "20",
                        "label": "Swiss"
                    },
                    {
                        "data": "Syrian Arab Republic (Syria)",
                        "label": "Syrian"
                    },
                    {
                        "data": "246",
                        "label": "Tadzhik"
                    },
                    {
                        "data": "154",
                        "label": "Taiwanese"
                    },
                    {
                        "data": "Tanzania, United Republic of",
                        "label": "Tanzanian"
                    },
                    {
                        "data": "157",
                        "label": "Thai"
                    },
                    {
                        "data": "248",
                        "label": "Timorese"
                    },
                    {
                        "data": "125",
                        "label": "Togolese"
                    },
                    {
                        "data": "249",
                        "label": "Tongan"
                    },
                    {
                        "data": "Trinidad and Tobago",
                        "label": "Trinidadian"
                    },
                    {
                        "data": "127",
                        "label": "Tunisian"
                    },
                    {
                        "data": "128",
                        "label": "Turk"
                    },
                    {
                        "data": "126",
                        "label": "Turkmen"
                    },
                    {
                        "data": "35",
                        "label": "Ugandan"
                    },
                    {
                        "data": "130",
                        "label": "Ukrainian"
                    },
                    {
                        "data": "110",
                        "label": "Uruguayan"
                    },
                    {
                        "data": "251",
                        "label": "Uzbek"
                    },
                    {
                        "data": "Venezuela (Bolivarian Republic)",
                        "label": "Venezuelan"
                    },
                    {
                        "data": "Viet Nam",
                        "label": "Vietnamese"
                    },
                    {
                        "data": "2",
                        "label": "Yemeni"
                    },
                    {
                        "data": "141",
                        "label": "Yugoslav"
                    },
                    {
                        "data": "143",
                        "label": "Zambian"
                    },
                    {
                        "data": "146",
                        "label": "Zimbabwean"
                    }
                ],
                "placeholder": "Filipino",
                "rowSize": 0.5
            },
            {
                "id": "address",
                "model": "beneficiary.payorTermOrWaiver.*.address",
                "type": "address",
                "maxLen": 50,
                "label": "Present Address",
                "required": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "layout": "gradational",
                "placeholder": "Building, street name, city"
            },
            {
                "id": "country",
                "model": "beneficiary.payorTermOrWaiver.*.country",
                "type": "select",
                "label": "Country",
                "required": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "cascade": "beneficiary.payorTermOrWaiver.*.cityCustom, beneficiary.payorTermOrWaiver.*.city",
                "source": "references:countries",
                "placeholder": "Philippines",
                "rowSize": 0.5
            },
            {
                "id": "city",
                "model": "beneficiary.payorTermOrWaiver.*.city",
                "type": "select",
                "defaultValue": "beneficiary.payorTermOrWaiver.*.country != '163' ? 13 : undefined",
                "label": "City",
                "required": "beneficiary.payorTermOrWaiver.*.country != null",
                "visible": "beneficiary.payorTermOrWaiver.*.country != null",
                "dataType": "string",
                "readOnly": false,
                "editable": "beneficiary.payorTermOrWaiver.*.country == '163'",
                "source": "references:provinces[beneficiary.payorTermOrWaiver.*.country]",
                "rowSize": 0.5
            },
            {
                "model": "beneficiary.payorTermOrWaiver.*.cityCustom",
                "type": "string",
                "maxLen": 30,
                "label": " ",
                "required": "(beneficiary.payorTermOrWaiver.*.country != null && beneficiary.payorTermOrWaiver.*.city == 13) && beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "(beneficiary.payorTermOrWaiver.*.country != null && beneficiary.payorTermOrWaiver.*.city == 13) && beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "readOnly": false,
                "placeholder": "Please specify city",
                "rowSize": 0.5
            },
            {
                "id": "zipcode",
                "model": "beneficiary.payorTermOrWaiver.*.zipcode",
                "type": "string",
                "maxLen": 10,
                "label": "Zip Code",
                "required": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "visible": "beneficiary.payorTermOrWaiver.*.relationship != 'estate'",
                "dataType": "string",
                "readOnly": false,
                "regex": "^\\d+$",
                "placeholder": "0000",
                "rowSize": 0.5
            }
        ]
    },
    "personalInfo.medical": {
        "name": "personalInfo.medical",
        "required": true,
        "dependsOn": "",
        "title": "Medical information",
        "subtitle": "personalInfo.*.id == assured.id ? 'Life insured' : 'Policyowner'",
        "type": "dynamicForm",
        "group": "",
        "components": [
            {
                "model": "personalInfo.*.medical.medicalQuestionnaireNote",
                "type": "result",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "readOnly": false,
                "labels": [
                    {
                        "status": "active",
                        "label": "You are to disclose in this application form (and in any personal statement concerning health made to the company or to the medical examiner of the company) fully and faithfully all the facts which you know or ought to know, otherwise the policy issued hereunder may be rescinded."
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.medical.height",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "How tall are you (cm)?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.medical.weight",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "How much do you weigh (lb)?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.weightLoss",
                "type": "option",
                "label": "Have you lost weight in the past 12 months?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.medical.weightLossAmount",
                "parent": "personalInfo.*.medical.weightLoss",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "by how much (lb)?",
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical?.weightLoss",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical?.weightLoss",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.weightLossReason",
                "parent": "personalInfo.*.medical.weightLoss",
                "type": "textarea",
                "maxLen": 200,
                "label": "What was the reason for the weight loss?",
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical?.weightLoss",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical?.weightLoss",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "model": "personalInfo.*.medical.medicalFormNote",
                "type": "result",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "readOnly": false,
                "labels": [
                    {
                        "status": "active",
                        "label": "If you answer \"YES\" to any of the following questions, please provide details as to the nature of illness, operation or treatment, date and duration, severity and results, and name and address of attending physician/s, clinic/s or hospital/s."
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.hospital",
                "type": "option",
                "label": "Have you, within the past five years, consulted or been treated or examined by any physician or medical practitioner?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.hospitalDetails",
                "parent": "personalInfo.*.medical.hospital",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.hospital",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.hospital",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.xRayEcgBloodTest",
                "type": "option",
                "label": "Have you ever had X-ray, electrocardiogram, blood studies or other diagnostic test?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.xRayEcgBloodTestDetails",
                "parent": "personalInfo.*.medical.xRayEcgBloodTest",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.xRayEcgBloodTest",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.xRayEcgBloodTest",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.observationDiagnosisOperationTreatment",
                "type": "option",
                "label": "Have you ever been in a hospital, clinic, sanitarium or institute for observation, diagnosis, operation or treatment?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.observationDiagnosisOperationTreatmentDetails",
                "parent": "personalInfo.*.medical.observationDiagnosisOperationTreatment",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.observationDiagnosisOperationTreatment",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.observationDiagnosisOperationTreatment",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.aidsOrAdisRelated",
                "type": "option",
                "label": "Have you had or had been told you had acquired immune deficiency syndrome (AIDS), AIDS-related complications, or AIDS-related conditions?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.aidsOrAdisRelatedDetails",
                "parent": "personalInfo.*.medical.aidsOrAdisRelated",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.aidsOrAdisRelated",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.aidsOrAdisRelated",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.std",
                "type": "option",
                "label": "Have you had any form of sexually transmitted disease? Is there anything in your lifestyle which could expose you to risk of AIDS and/or STD?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.stdDetails",
                "parent": "personalInfo.*.medical.std",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.std",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.std",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.positiveToAidsAntibodies",
                "type": "option",
                "label": "Have you been tested positive for antibodies to the AIDS virus?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.positiveToAidsAntibodiesDetails",
                "parent": "personalInfo.*.medical.positiveToAidsAntibodies",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.positiveToAidsAntibodies",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.positiveToAidsAntibodies",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.abnormalityDeformityDiseaseOrDisorder",
                "type": "option",
                "label": "Have you had abnormality, deformity, disease or disorder?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.abnormalityDeformityDiseaseOrDisorderDetails",
                "parent": "personalInfo.*.medical.abnormalityDeformityDiseaseOrDisorder",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.abnormalityDeformityDiseaseOrDisorder",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.abnormalityDeformityDiseaseOrDisorder",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.treatmentOrMedicationExperience",
                "type": "option",
                "label": "Have you had and/or presently receiving treatment or taking medication of any kind?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.treatmentOrMedicationExperienceDetails",
                "parent": "personalInfo.*.medical.treatmentOrMedicationExperience",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.treatmentOrMedicationExperience",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.treatmentOrMedicationExperience",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "label",
                "model": "personalInfo.*.medical.adviceFor",
                "type": "label",
                "label": "Have you ever had or been told that you had or sought advice for:",
                "required": false,
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18)",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.brainOrNervousDiseaseDisorder",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "dizziness, fainting spells, epilepsy, nervous breakdown, severe headaches, or any disease or disorder of the brain or nervous system?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.brainOrNervousDiseaseDisorderDetails",
                "parent": "personalInfo.*.medical.brainOrNervousDiseaseDisorder",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.brainOrNervousDiseaseDisorder",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.brainOrNervousDiseaseDisorder",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.respiratoryDiseaseOrDisorder",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "asthma, hay fever, chronic cough, spitting of blood, tuberculosis, or any disease or disorder of the lungs or respiratory system?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "label",
                "model": "personalInfo.*.medical.respiratoryLabel",
                "parent": "personalInfo.*.medical.respiratoryDiseaseOrDisorder",
                "type": "label",
                "label": "Please fill out the Respiratory Disorder Questionnaire card and capture image of Respiratory Disorder Questionnaire for Attending Physician.",
                "required": false,
                "visible": "((personalInfo.*.id == policyHolder.id && policyHolder.id != assured.id ) || assured.age >= 18) && personalInfo.*.medical.respiratoryDiseaseOrDisorder",
                "readOnly": false,
                "layout": "normal"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.highBPOrHeartOrCirculatoryDisease",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "High blood pressure, chest pain, shortness of breath, heart murmur, or any other disease of the heart or circulatory system?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.highBPOrHeartOrCirculatoryDiseaseDetails",
                "parent": "personalInfo.*.medical.highBPOrHeartOrCirculatoryDisease",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.highBPOrHeartOrCirculatoryDisease",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.highBPOrHeartOrCirculatoryDisease",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.stomachIntestinesBowelRectumAppendixLiverGallBladderDiseaseDisorder",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "any disease or disorder of the stomach, intestines, bowel, rectum, appendix, liver, or gall bladder?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.stomachIntestinesBowelRectumAppendixLiverGallBladderDiseaseDisorderDetails",
                "parent": "personalInfo.*.medical.stomachIntestinesBowelRectumAppendixLiverGallBladderDiseaseDisorder",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.stomachIntestinesBowelRectumAppendixLiverGallBladderDiseaseDisorder",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.stomachIntestinesBowelRectumAppendixLiverGallBladderDiseaseDisorder",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.kidneyBladderProstateDiseaseDisorder",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "nephritis, kidney stone, or any disease or disorder of the kidney, bladder, or prostate?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.kidneyBladderProstateDiseaseDisorderDetails",
                "parent": "personalInfo.*.medical.kidneyBladderProstateDiseaseDisorder",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.kidneyBladderProstateDiseaseDisorder",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.kidneyBladderProstateDiseaseDisorder",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.diabetes",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "diabetes?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "label",
                "model": "personalInfo.*.medical.diabetesLabel",
                "parent": "personalInfo.*.medical.diabetes",
                "type": "label",
                "label": "Please fill out the Diabetic Questionnaire card and capture image of Diabetic Questionnaire for Attending Physician.",
                "required": false,
                "visible": "((personalInfo.*.id == policyHolder.id && policyHolder.id != assured.id ) || assured.age >= 18) && personalInfo.*.medical.diabetes",
                "readOnly": false,
                "layout": "normal"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.thyroidOrOtherEndocrineDisorder",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "thyroid, or other endocrine disorders?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.thyroidOrOtherEndocrineDisorderDetails",
                "parent": "personalInfo.*.medical.thyroidOrOtherEndocrineDisorder",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.thyroidOrOtherEndocrineDisorder",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.thyroidOrOtherEndocrineDisorder",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.backSpineBonesJointsMusclesDiseaseOrDisorder",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "arthritis, rheumatism, or any disease or disorder of the back, spine, bones, joints, or muscles?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.backSpineBonesJointsMusclesDiseaseOrDisorderDetails",
                "parent": "personalInfo.*.medical.backSpineBonesJointsMusclesDiseaseOrDisorder",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.backSpineBonesJointsMusclesDiseaseOrDisorder",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.backSpineBonesJointsMusclesDiseaseOrDisorder",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.cancerTumorUlcerOrAbnormalTissueGrowth",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "cancer (including carcinoma in situ) or a tumor or ulcer of any kind or any abnormal tissue growth?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.cancerTumorUlcerOrAbnormalTissueGrowthDetails",
                "parent": "personalInfo.*.medical.cancerTumorUlcerOrAbnormalTissueGrowth",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.cancerTumorUlcerOrAbnormalTissueGrowth",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.cancerTumorUlcerOrAbnormalTissueGrowth",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.varicosePhlebitisHernia",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "varicose veins, varicose ulcers, phlebitis, or hernia of any kind?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.varicosePhlebitisHerniaDetails",
                "parent": "personalInfo.*.medical.varicosePhlebitisHernia",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.varicosePhlebitisHernia",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.varicosePhlebitisHernia",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.eyesEarsNoseThroatDiseaseDisorder",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "any disease or disorder of the eyes, ears, nose, or throat?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.eyesEarsNoseThroatDiseaseDisorderDetails",
                "parent": "personalInfo.*.medical.eyesEarsNoseThroatDiseaseDisorder",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.eyesEarsNoseThroatDiseaseDisorder",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.eyesEarsNoseThroatDiseaseDisorder",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.anySeriousIllnessInJurySurgeryNotMentioned",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "any other serious illness, disease, injury, or surgery not mentioned above?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "visible": "personalInfo.*.id == policyHolder.id || assured.age >= 18",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.anySeriousIllnessInJurySurgeryNotMentionedDetails",
                "parent": "personalInfo.*.medical.anySeriousIllnessInJurySurgeryNotMentioned",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.anySeriousIllnessInJurySurgeryNotMentioned",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.anySeriousIllnessInJurySurgeryNotMentioned",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.pregnant",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "Are you pregnant?",
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.gender == 'F'",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.gender == 'F'",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.pregnantDetails",
                "parent": "personalInfo.*.medical.pregnant",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.pregnant",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.pregnant",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.reproductiveOrganAbnormality",
                "parent": "personalInfo.*.medical.adviceFor",
                "type": "option",
                "label": "Any abnormality in menstruation, pregnancy, or of the breast or reproductive organs?",
                "required": "personalInfo.*.id == policyHolder.id || assured.age >= 18 && personalInfo.*.gender == 'F'",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.gender == 'F'",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.reproductiveOrganAbnormalityDetails",
                "parent": "personalInfo.*.medical.reproductiveOrganAbnormality",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.reproductiveOrganAbnormality",
                "visible": "(personalInfo.*.id == policyHolder.id || assured.age >= 18) && personalInfo.*.medical.reproductiveOrganAbnormality",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "model": "personalInfo.*.medical.medicalQuestionnaireNoteForMinor",
                "type": "result",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "personalInfo.*.id == assured.id && assured.age < 18",
                "readOnly": false,
                "labels": [
                    {
                        "status": "active",
                        "label": "You are to disclose in this application form (and in any personal statement concerning health made to the company or to the medical examiner of the company) fully and faithfully all the facts which you know or ought to know, otherwise the policy issued hereunder may be rescinded."
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.medical.height",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "How tall is the child (cm)?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "personalInfo.*.id == assured.id && assured.age < 18",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.medical.weight",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "How much does the child weigh (lb)?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "personalInfo.*.id == assured.id && assured.age < 18",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.weightLoss",
                "type": "option",
                "label": "Has the child lost weight in the past 12 months?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "floatNumber",
                "model": "personalInfo.*.medical.weightLossAmount",
                "parent": "personalInfo.*.medical.weightLoss",
                "type": "floatnumber",
                "maxLen": 5,
                "label": "by how much (lb)?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18 && personalInfo.*.medical?.weightLoss",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18 && personalInfo.*.medical?.weightLoss)",
                "dataType": "number",
                "readOnly": false,
                "regex": "^\\d+(\\.\\d+)?$"
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.weightLossReason",
                "parent": "personalInfo.*.medical.weightLoss",
                "type": "textarea",
                "maxLen": 200,
                "label": "What was the reason for the weight loss?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18  && personalInfo.*.medical?.weightLoss",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18 && personalInfo.*.medical?.weightLoss)",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "model": "personalInfo.*.medical.medicalFormNoteForMinor",
                "type": "result",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "personalInfo.*.id == assured.id && assured.age < 18",
                "readOnly": false,
                "labels": [
                    {
                        "status": "active",
                        "label": "If you answer \"YES\" to any of the following questions, please provide details as to the nature of illness, operation or treatment, date and duration, severity and results, and name and address of attending physician/s, clinic/s or hospital/s."
                    }
                ]
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.abnormalOrPremature",
                "type": "option",
                "label": "Was the child's birth abnormal or premature?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "weightAtBirth",
                "model": "personalInfo.*.medical.weightAtBirth",
                "parent": "personalInfo.*.medical.abnormalOrPremature",
                "type": "number",
                "maxLen": 5,
                "label": "Child's weight at birth (lb)",
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.abnormalOrPremature",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.abnormalOrPremature",
                "readOnly": false
            },
            {
                "id": "prematureMonths",
                "model": "personalInfo.*.medical.prematureMonths",
                "parent": "personalInfo.*.medical.abnormalOrPremature",
                "type": "number",
                "maxLen": 1,
                "label": "By how many months was the child premature?",
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.abnormalOrPremature",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.abnormalOrPremature",
                "readOnly": false
            },
            {
                "id": "label",
                "model": "personalInfo.*.medical.childAdvicedFor",
                "type": "label",
                "label": "Has the child ever been treated for, or ever had any indication of:",
                "required": false,
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "readOnly": false
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.eyeEarNoseMouthThroatDisorderOrSlowPhysicalMentalDevelopment",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "disorder of eyes, ears, nose, mouth, or throat; or slow physical or mental development?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.eyeEarNoseMouthThroatDisorderOrSlowPhysicalMentalDevelopmentDetails",
                "parent": "personalInfo.*.medical.eyeEarNoseMouthThroatDisorderOrSlowPhysicalMentalDevelopment",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.eyeEarNoseMouthThroatDisorderOrSlowPhysicalMentalDevelopment",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.eyeEarNoseMouthThroatDisorderOrSlowPhysicalMentalDevelopment",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.disorderOfBrainOrNervousSystem",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "epilepsy, febrile fits, or any other disorders of the brain or nervous system?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.disorderOfBrainOrNervousSystemDetails",
                "parent": "personalInfo.*.medical.disorderOfBrainOrNervousSystem",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.disorderOfBrainOrNervousSystem",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.disorderOfBrainOrNervousSystem",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.respiratoryDiseaseOrDisorder",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "asthma, bronchitis, tuberculosis, or respiratory disorder?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "label",
                "model": "personalInfo.*.medical.respiratoryLabel",
                "parent": "personalInfo.*.medical.respiratoryDiseaseOrDisorder",
                "type": "label",
                "label": "Please fill out the Respiratory Disorder Questionnaire card and capture image of Respiratory Disorder Questionnaire for Attending Physician.",
                "required": false,
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.respiratoryDiseaseOrDisorder",
                "readOnly": false,
                "layout": "normal"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.disorderOrDiseaseOfHeartOrBloodVessels",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "rheumatic fever, heart defects, anaemia, or disorder of the blood, and other diseases of the heart or blood vessels?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.disorderOrDiseaseOfHeartOrBloodVesselsDetails",
                "parent": "personalInfo.*.medical.disorderOrDiseaseOfHeartOrBloodVessels",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.disorderOrDiseaseOfHeartOrBloodVessels",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.disorderOrDiseaseOfHeartOrBloodVessels",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.diabetes",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "diabetes",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "label",
                "model": "personalInfo.*.medical.diabetesLabel",
                "parent": "personalInfo.*.medical.diabetes",
                "type": "label",
                "label": "Please fill out the Diabetic Questionnaire card and capture image of Diabetic Questionnaire for Attending Physician.",
                "required": false,
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.diabetes",
                "readOnly": false,
                "layout": "normal"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.stomachIntestinesKidneyBladderReproductiveLiverGallbladderPancreasDisorder",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "disorder of the stomach, intestines, kidney, bladder, reproductive organs, liver, gallbladder, or pancreas?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.stomachIntestinesKidneyBladderReproductiveLiverGallbladderPancreasDisorderDetails",
                "parent": "personalInfo.*.medical.stomachIntestinesKidneyBladderReproductiveLiverGallbladderPancreasDisorder",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.stomachIntestinesKidneyBladderReproductiveLiverGallbladderPancreasDisorder",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.stomachIntestinesKidneyBladderReproductiveLiverGallbladderPancreasDisorder",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.skinInfectionsEnlargedGlandsGrowthCystTumorCancer",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "severe skin infections, enlarged glands, growth, cyst, tumor/cancer?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.skinInfectionsEnlargedGlandsGrowthCystTumorCancerDetails",
                "parent": "personalInfo.*.medical.skinInfectionsEnlargedGlandsGrowthCystTumorCancer",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.skinInfectionsEnlargedGlandsGrowthCystTumorCancer",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.skinInfectionsEnlargedGlandsGrowthCystTumorCancer",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.disorderOfMuscleBonesRelatedOrDeformityLamenessAmputation",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "disorder of the muscles or bones, spine, back or joints, deformity, lameness, or amputation?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.disorderOfMuscleBonesRelatedOrDeformityLamenessAmputationDetails",
                "parent": "personalInfo.*.medical.disorderOfMuscleBonesRelatedOrDeformityLamenessAmputation",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.disorderOfMuscleBonesRelatedOrDeformityLamenessAmputation",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.disorderOfMuscleBonesRelatedOrDeformityLamenessAmputation",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.moreThan7DayIllnessInjuryTreatmentOrAdmittedToHospital",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "Has the child ever had any illness or injury lasting or requiring treatment for more than 7 days, or been admitted to a hospital or medical facility?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.moreThan7DayIllnessInjuryTreatmentOrAdmittedToHospitalDetails",
                "parent": "personalInfo.*.medical.moreThan7DayIllnessInjuryTreatmentOrAdmittedToHospital",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.moreThan7DayIllnessInjuryTreatmentOrAdmittedToHospital",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.moreThan7DayIllnessInjuryTreatmentOrAdmittedToHospital",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.referredToAnySpecialistOrHospital",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "Has the child ever been referred to any specialist or hospital?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.referredToAnySpecialistOrHospitalDetails",
                "parent": "personalInfo.*.medical.referredToAnySpecialistOrHospital",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.referredToAnySpecialistOrHospital",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.referredToAnySpecialistOrHospital",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.exgXrayBloodUrineBiopsyAdisOrOtherTest",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "Has the child ever had or been advised to have any electrocardiogram, x-ray, blood or urine test, biopsy, AIDS test, or other diagnostic test?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.exgXrayBloodUrineBiopsyAdisOrOtherTestDetails",
                "parent": "personalInfo.*.medical.exgXrayBloodUrineBiopsyAdisOrOtherTest",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.exgXrayBloodUrineBiopsyAdisOrOtherTest",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.exgXrayBloodUrineBiopsyAdisOrOtherTest",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "yesOrNo",
                "model": "personalInfo.*.medical.receivingMedicalTreatmentOrUnderMedicalCare",
                "parent": "personalInfo.*.medical.childAdvicedFor",
                "type": "option",
                "label": "Is the child currently receiving medical treatment or under medical care of any kind?",
                "required": "personalInfo.*.id == assured.id && assured.age < 18",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "dataType": "boolean",
                "readOnly": false,
                "options": [
                    {
                        "data": true,
                        "label": "Yes"
                    },
                    {
                        "data": false,
                        "label": "No"
                    }
                ]
            },
            {
                "id": "provideDetails",
                "model": "personalInfo.*.medical.receivingMedicalTreatmentOrUnderMedicalCareDetails",
                "parent": "personalInfo.*.medical.receivingMedicalTreatmentOrUnderMedicalCare",
                "type": "textarea",
                "maxLen": 200,
                "required": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.receivingMedicalTreatmentOrUnderMedicalCare",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18) && personalInfo.*.medical.receivingMedicalTreatmentOrUnderMedicalCare",
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Please provide details"
            },
            {
                "id": "label",
                "model": "personalInfo.*.medical.usualOrLastDoctor",
                "type": "label",
                "label": "Provide details of the child's usual doctor or last doctor consulted.",
                "required": false,
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "readOnly": false
            },
            {
                "id": "doctorName",
                "model": "personalInfo.*.medical.doctorName",
                "parent": "personalInfo.*.medical.usualOrLastDoctor",
                "type": "string",
                "maxLen": 30,
                "label": "Name of doctor",
                "required": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "readOnly": false
            },
            {
                "id": "doctorAddress",
                "model": "personalInfo.*.medical.doctorAddress",
                "parent": "personalInfo.*.medical.usualOrLastDoctor",
                "type": "textarea",
                "maxLen": 200,
                "label": "Address and other details",
                "required": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "readOnly": false
            },
            {
                "id": "yearsKnowChild",
                "model": "personalInfo.*.medical.yearsKnowChild",
                "parent": "personalInfo.*.medical.usualOrLastDoctor",
                "type": "number",
                "maxLen": 2,
                "label": "How many years has he/she known the child?",
                "required": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "readOnly": false
            },
            {
                "id": "lastConsultation",
                "model": "personalInfo.*.medical.lastConsultation",
                "parent": "personalInfo.*.medical.usualOrLastDoctor",
                "type": "date",
                "label": "Child's last consultation with his/her doctor",
                "required": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "readOnly": false
            },
            {
                "id": "consultationReason",
                "model": "personalInfo.*.medical.consultationReason",
                "parent": "personalInfo.*.medical.usualOrLastDoctor",
                "type": "textarea",
                "maxLen": 200,
                "label": "Reason for consultation",
                "required": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "readOnly": false
            },
            {
                "id": "consultationResult",
                "model": "personalInfo.*.medical.consultationResult",
                "parent": "personalInfo.*.medical.usualOrLastDoctor",
                "type": "textarea",
                "maxLen": 200,
                "label": "Result of consultation",
                "required": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "readOnly": false
            },
            {
                "id": "consultationResult",
                "model": "personalInfo.*.medical.treatmentNatureAndDuration",
                "parent": "personalInfo.*.medical.usualOrLastDoctor",
                "type": "textarea",
                "maxLen": 200,
                "label": "If under treatment, indicate the nature and duration of treatment.",
                "required": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "visible": "(personalInfo.*.id == assured.id && assured.age < 18)",
                "readOnly": false
            },
            {
                "id": "requireDiabetesDetails",
                "model": "personalInfo.*.medical.requireDiabetesDetails",
                "computedValue": "personalInfo.*.medical.diabetes",
                "required": false,
                "visible": false,
                "readOnly": false
            },
            {
                "id": "requireRespiratoryDetails",
                "model": "personalInfo.*.medical.requireRespiratoryDetails",
                "computedValue": "personalInfo.*.medical.respiratoryDiseaseOrDisorder",
                "required": false,
                "visible": false,
                "readOnly": false
            }
        ]
    },
    "customer": {
        "name": "customer",
        "required": true,
        "dependsOn": "",
        "title": "Customer Profile",
        "subtitle": "",
        "type": "form",
        "group": "",
        "components": [
            {
                "id": "salutation",
                "model": "currentCustomer.name.title",
                "type": "select",
                "label": "Title/Salutation",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "source": "references:salutations",
                "rowSize": 0.5
            },
            {
                "id": "gender",
                "model": "currentCustomer.gender",
                "type": "option",
                "label": "Gender",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "options": [
                    {
                        "data": "M",
                        "label": "Male"
                    },
                    {
                        "data": "F",
                        "label": "Female"
                    }
                ],
                "rowSize": 0.5
            },
            {
                "id": "nameFirst",
                "model": "currentCustomer.name.first",
                "type": "string",
                "maxLen": 60,
                "label": "First name",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "placeholder": "John",
                "rowSize": 0.5
            },
            {
                "id": "nameLast",
                "model": "currentCustomer.name.last",
                "type": "string",
                "maxLen": 60,
                "label": "Last name",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Doe",
                "rowSize": 0.5
            },
            {
                "id": "nameMiddle",
                "model": "currentCustomer.name.middle",
                "type": "string",
                "maxLen": 30,
                "label": "Middle name",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "rowSize": 0.5
            },
            {
                "id": "date",
                "model": "currentCustomer.dateOfBirth",
                "type": "date",
                "label": "Birth date",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "placeholder": "25 May 1977",
                "rowSize": 0.5
            },
            {
                "id": "countryCallingCode",
                "model": "currentCustomer.phoneCountryCode",
                "type": "select",
                "label": "Phone Number Country Code",
                "required": false,
                "visible": true,
                "readOnly": false,
                "options": [
                    {
                        "data": "+63",
                        "label": "+63 -PH"
                    },
                    {
                        "data": "+1",
                        "label": "+1 -US"
                    },
                    {
                        "data": "other",
                        "label": "Oth -Others"
                    }
                ],
                "rowSize": 0.5
            },
            {
                "id": "phone",
                "model": "currentCustomer.phone",
                "type": "phone",
                "maxLen": 20,
                "label": "Phone Number",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "regex": "^[+]?\\d+$",
                "placeholder": "+09123456789",
                "rowSize": 0.5
            },
            {
                "id": "countryCallingCode",
                "model": "currentCustomer.mobileCountryCode",
                "type": "select",
                "label": "Mobile Number Country Code",
                "required": false,
                "visible": true,
                "readOnly": false,
                "options": [
                    {
                        "data": "+63",
                        "label": "+63 -PH"
                    },
                    {
                        "data": "+1",
                        "label": "+1 -US"
                    },
                    {
                        "data": "other",
                        "label": "Oth -Others"
                    }
                ],
                "rowSize": 0.5
            },
            {
                "id": "phone",
                "model": "currentCustomer.mobile",
                "type": "phone",
                "maxLen": 20,
                "label": "Mobile Number",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "regex": "^[+]?\\d+$",
                "placeholder": "+09123456789",
                "rowSize": 0.5
            },
            {
                "id": "email",
                "model": "currentCustomer.email",
                "type": "email",
                "maxLen": 50,
                "label": "Email",
                "required": true,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "placeholder": "john@johndoe.com"
            },
            {
                "id": "address",
                "model": "currentCustomer.address",
                "type": "textarea",
                "maxLen": 100,
                "label": "Address",
                "required": false,
                "visible": true,
                "dataType": "string",
                "readOnly": false,
                "placeholder": "Building street name; city"
            }
        ]
    }
};

export default form;