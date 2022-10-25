import { SideMenuKeys } from '../components/header/SideMenu'

export const FOLLOW_NETWORKS = {
  facebook: 'https://www.facebook.com/lingwingcom',
  instagram: 'https://www.instagram.com/lingwingcom/',
  linkedin: 'https://www.linkedin.com/company/lingwing',
  youtube: 'https://www.youtube.com/channel/UCQTfPDnmBcLbZueYTM8pNZA',
  tiktok: 'https://www.tiktok.com/@lingwing.georgia',
}

export const FOOTER_LINKS = [
  'footerAboutUs',
  'footerCourses',
  'footerPackages',
  'footerBlog',
  'footerApps',
  'footerPrivacy',
  'footerFAQ',
  'footerContact',
]

export const SIDE_MENU_LINKS = {
  English: 'eng',
  Spanish: 'esp',
  Georgian: 'geo',
  Russian: 'rus',
  French: 'fre',
  German: 'deu',
  Italian: 'ita',
  footerFAQ: 'https://lingwing.com/en/faq/general/',
  menuContactUs: 'https://lingwing.com/en/contact',
  menuStudents: 'https://lingwing.com/en/student',
  menuPrices: 'https://lingwing.com/en/packages',
  menuBuyAGift: 'https://lingwing.com/en/packages/giftTaskReview',
  menuPricesCoupon: 'https://lingwing.com/en/packages',
  menuWhyWithUs: 'https://lingwing.com/en/about-us',
  menuCertificate: 'https://lingwing.com/en/about-us?page=certificate',
  menuPartners: 'https://lingwing.com/en/about-us?page=menuPartners',
  menuBlog: 'https://blog.lingwing.com',
  menuJobs: 'https://lingwing.com/en/about-us?page=cv',
  menuLicenseAgreement: 'https://lingwing.com/en/licensing-agreement?page=cv',
  menuPrivacyPolicy: 'https://lingwing.com/en/privacy?page=cv',
} as const

export const COURSES_KEYS: SideMenuKeys[] = [
  'English',
  'Spanish',
  'Georgian',
  'Russian',
  'French',
  'German',
  'Italian',
]

export const HELP_KEYS: SideMenuKeys[] = ['footerFAQ', 'menuContactUs']

export const PREMIUM_KEYS: SideMenuKeys[] = [
  'menuStudents',
  'menuPrices',
  'menuBuyAGift',
  'menuPricesCoupon',
]
export const ABOUT_COMPANY_KEYS: SideMenuKeys[] = [
  'menuWhyWithUs',
  'menuCertificate',
  'menuPartners',
  'menuBlog',
  'menuJobs',
  'menuLicenseAgreement',
  'menuPrivacyPolicy',
]

export const ABOUT_COMPANY_LINKS = {
  whyWithUs: 'why-with-us',
  certificate: 'certificate',
  partners: 'partners',
  jobs: 'jobs',
}

export const IMAGES_FOR_PARTNERS_PAGE = [
  '../themes/images/partners/beka.png',
  '../themes/images/partners/gau.png',
  '../themes/images/partners/liberty.png',
  '../themes/images/partners/magti.jpg',
  '../themes/images/partners/GITA.png',
  '../themes/images/partners/BankOfGergia.png',
  '../themes/images/partners/BTU-GEO.png',
  '../themes/images/partners/TSU.svg.png',
  '../themes/images/partners/terabank.png',
  '../themes/images/partners/TBC.svg.png',
  '../themes/images/partners/Sulkhan-saba.png',
]

export const LOGIN_NETWORKS = ['facebook', 'google', 'twitter'] as const

export const LOGOUT_SCREENSHOTS = [
  'scr-1.png',
  'scr-2.png',
  'scr-3.png',
  'scr-4.png',
  'scr-5.png',
  'scr-6.png',
  'video-im.png',
]

export const PACKAGES_IMAGES = [
  '/../public/themes/images/V2/Packages/free_package.png',
  '/../public/themes/images/V2/Packages/12-month.png',
  '/../public/themes/images/V2/Packages/6-month.png',
  '/../public/themes/images/V2/Packages/3-month.png',
]
