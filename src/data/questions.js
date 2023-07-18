const PATHS = {
  ASSETS_OVERSEAS: 'assets-overseas',
  ASSETS: 'assets',
  BASICS: 'basics',
  BENEFITS: 'benefits',
  BUSINESS_OWNER: 'business-owner',
  BUSINESS_SOLE_OWNER: 'business-sole-owner',
  BUSINESS: 'business',
  CHILDREN: 'children',
  CONGRATULATIONS: 'congratulations',
  FAMILY_CONCERN: 'family-concern',
  INHOUSE_SCOTLAND_NI_CALLBACK: 'inhouse-scotland-ni-callback',
  LOCATION: 'location',
  MEMORY: 'memory',
  ONLINE: 'online',
  PARTNER_DETAILS: 'partner-details',
  PARTNER_INVITED: 'partner-invited',
  PARTNER_SIGN_UP: 'sign-up',
  PARTNER: 'partner',
  PASSWORD: 'password',
  PREFIX: 'start',
  PROPERTY: 'property',
  RELATIONSHIP: 'relationship',
  SCOTLAND_NI: 'scotland-ni',
  TELEPHONE: 'telephone',
  UNSUITABLE: 'unsuitable',
  WAITING_LIST: 'waiting-list',
  WEBSITE_HELP: 'website-help',
};

export const SIGN_UP_START_PATH = `/${PATHS.PREFIX}/${PATHS.RELATIONSHIP}`;
export const ONLINE_WILL_SIGN_UP_PATH = `/${PATHS.PREFIX}/${PATHS.ONLINE}`;
export const TELEPHONE_WILL_SIGN_UP_PATH = `/${PATHS.PREFIX}/${PATHS.TELEPHONE}`;

export const BRANCH_ID = {
  MAIN: 'MAIN',
  DOMICILE: 'DOMICILE',
  CAPACITY: 'CAPACITY',
  BUSINESS: 'BUSINESS',
};

export const BusinessResult = {
  ShareWithAssets: 'SHARE_WITH_ASSETS',
  SeparateFromAssets: 'SEPARATE_FROM_ASSETS',
  Undecided: 'UNDECIDED',
};

export const QUESTION_ID = {
  RELATIONSHIP: 'RELATIONSHIP',
  CHILDREN: 'CHILDREN',
  OWNS_PROPERTY: 'OWNS_PROPERTY',
  ENGLAND_OR_WALES_DOMICILE: 'ENGLAND_OR_WALES_DOMICILE',
  FOREIGN_ASSETS: 'FOREIGN_ASSETS',
  BUSINESS: 'BUSINESS',
  BUSINESS_SOLE_OWNER: 'BUSINESS_SOLE_OWNER',
};

export const QUESTIONS = {
  [QUESTION_ID.RELATIONSHIP]: {
    path: PATHS.RELATIONSHIP,
    title: 'Do you have a partner?',
    illustration: 'blob-signing-will-2',
    options: [
      {
        name: 'No',
        value: false,
        description: 'Including separated, divorced or widowed',
        tracking: {
          category: 'relationship',
          label: 'single',
        },
      },
      {
        name: 'Yes',
        value: true,
        description: 'Including engaged or living with a partner',
        tracking: {
          category: 'relationship',
          label: 'in-relationship',
        },
      },
    ],
  },
  [QUESTION_ID.CHILDREN]: {
    path: PATHS.CHILDREN,
    title: 'Do you have any children?',
    illustration: 'big-cat-little-cat',
    options: [
      {
        name: 'No',
        value: false,
        description: 'Including if you only have step children',
        tracking: {
          category: 'children',
          label: 'no-children',
        },
      },
      {
        name: 'Yes',
        value: true,
        tracking: {
          category: 'children',
          label: 'has-children',
        },
      },
    ],
  },
  [QUESTION_ID.OWNS_PROPERTY]: {
    path: PATHS.PROPERTY,
    title: 'Do you own your home?',
    illustration: 'blob-with-house',
    options: [
      {
        name: 'No',
        value: false,
        tracking: {
          category: 'property',
          label: 'not-property-owner',
        },
      },
      {
        name: 'Yes',
        value: true,
        description: 'Including with a mortgage or jointly',
        tracking: {
          category: 'property',
          label: 'property-owner',
        },
      },
    ],
  },
  [QUESTION_ID.ENGLAND_OR_WALES_DOMICILE]: {
    path: PATHS.LOCATION,
    title: 'Do you live in England or Wales?',
    illustration: 'globe',
    options: [
      {
        name: 'No',
        value: false,
        branchTo: BRANCH_ID.DOMICILE,
        action: 'WAITING_LIST',
        tracking: {
          category: 'location',
          label: 'outside-england-wales',
        },
      },
      {
        name: 'Yes',
        value: true,
        tracking: {
          category: 'location',
          label: 'in-england-wales',
        },
      },
    ],
  },
  [QUESTION_ID.FOREIGN_ASSETS]: {
    path: PATHS.ASSETS,
    title: 'Is everything you own in the UK?',
    illustration: 'globe',
    options: [
      {
        name: 'No',
        value: true,
        description: 'Including bank accounts, property, stocks and shares',
        earlyReturn: true,
        action: 'UNSUITABLE',
        tracking: {
          category: 'foreign-assets',
          label: 'has-foreign-assets',
        },
      },
      {
        name: 'Yes',
        value: false,
        tracking: {
          category: 'foreign-assets',
          label: 'no-foreign-assets',
        },
      },
    ],
  },
  [QUESTION_ID.BUSINESS]: {
    title: 'Do you own a business?',
    path: PATHS.BUSINESS,
    illustration: 'paperwork',
    options: [
      {
        name: 'No',
        value: false,
        tracking: {
          category: 'has-business',
          label: 'no-business',
        },
      },
      {
        name: 'Yes',
        value: true,
        description: 'Either as a sole trader, a partnership, limited liability partnership or as a limited company',
        action: 'UNSUITABLE',
        tracking: {
          category: 'has-business',
          label: 'business-owner',
        },
      },
    ],
  },
  [QUESTION_ID.BUSINESS_SOLE_OWNER]: {
    context: 'About your business',
    title: 'Are you the sole owner of your business?',
    path: PATHS.BUSINESS_SOLE_OWNER,
    illustration: 'paperwork',
    options: [
      {
        name: 'No',
        value: false,
        earlyReturn: true,
        tracking: {
          category: 'business-sole-owner',
          label: 'joint-business-owner',
        },
      },
      {
        name: 'Yes',
        value: true,
        tracking: {
          category: 'business-sole-owner',
          label: 'sole-business-owner',
        },
      },
    ],
  }
};

export const BRANCHES = {
  [BRANCH_ID.MAIN]: {
    questions: [
      QUESTION_ID.RELATIONSHIP,
      QUESTION_ID.CHILDREN,
      QUESTION_ID.OWNS_PROPERTY,
      QUESTION_ID.ENGLAND_OR_WALES_DOMICILE,
      QUESTION_ID.FOREIGN_ASSETS,
      QUESTION_ID.BUSINESS,
    ],
  }
};

export const CALL_REQUEST_LEAD_SOURCE_IDENTIFIERS = {
  SIGN_UP_FOREIGN_ASSETS: 'sign_up_foreign_assets',
  SIGN_UP_BUSINESS: 'sign_up_business_owner',
  SIGN_UP_TELEPHONE: 'sign_up_telephone',
  INHOUSE_SCOTLAND_NI_SIGN_UP: 'inhouse_scotland_ni_signup',
  BESPOKE_CAPACITY_CHECK_FAILED: 'wills_app_bespoke_capacity_check_failed',
};

export const NO_SUITABLE_SERVICE = 'NO_SUITABLE_SERVICE';
