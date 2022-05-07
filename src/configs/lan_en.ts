interface IJob {
  id: string,
  image: string,
  cover: string,
  companyName: string,
  date: string,
  where: string,
  position: string,
  description: string[],
}

const jobs_lan_en: IJob[] = [
  {
    id: '1', image: '/img/work/livesport.jpeg', cover: '/img/work/livesport-cover.png', companyName: 'Livesport TV', date: 'from: 11.2020', where: 'where: Brno, Czech Republic', position: 'Javascript Developer', description: ['React, Next, Nuxt, MSW, Cypress', 'JavaScript, TypeScript', 'Media service development (IPTV, Flashscore)', 'Introduction of QA process Cypress'],
  },
  {
    id: '2', image: '/img/work/onsemi.jpeg',  cover: '/img/work/onsemi-cover.png', companyName: 'ON Semiconductor', date: 'from: 12.2019 / to: 10.2020', where: 'where: Rožnov pod Radhoštěm, Czech Republic', position: 'Jr. Programmer', description: ['Java', 'SQL', 'Tricentis Tosca', 'Creation test scenarios for manual and automation testing', 'Writing automatic scripts in tool Tosca and extension basic function in Selenium', 'Reporting result of tests'],
  },
  {
    id: '3', image: '/img/work/siemens.jpeg',  cover: '/img/work/siemens-cover.png', companyName: 'Siemens', date: 'from: 09.2018 / to: 11.2019', where: 'where: Ostrava, Czech Republic', position: 'SAP Programmer', description: ['SQL', 'ABAP', 'Maintenance old applications in SAP', 'Creating basic and simple company application'],
  },
];

export { jobs_lan_en };
export type { IJob };
