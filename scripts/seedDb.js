const { TeamMember } = require('../backend/model');

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
seed();

async function seed() {
  // create table
  await TeamMember.sync({ force: true });
  // insert data
  await Promise.all([
    TeamMember.create({
      firstName: 'Chidi',
      lastName: 'Anagonye',
      title: 'CEO',
      photoUrl:
        'https://img.nbc.com/sites/nbcunbc/files/images/2016/9/01/2016-0823-TheGoodPlace-WilliamJacksonHarper-1050x1050-CV.jpg',
      favoriteColor: '#F2A745',
      story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, enim vel pellentesque dictum, arcu orci tempor eros, vitae viverra odio purus non mi. Proin porttitor dolor eget suscipit hendrerit.'
    }),
    TeamMember.create({
      firstName: 'Tahini',
      lastName: 'Al-Jamil',
      title: 'CTO',
      photoUrl:
        'https://img.nbc.com/sites/nbcunbc/files/images/2016/9/01/2016-0823-TheGoodPlace-JameelaJamil-1050x1050-CV.jpg',
      favoriteColor: '#4F52B1',
      story:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, enim vel pellentesque dictum, arcu orci tempor eros, vitae viverra odio purus non mi. Proin porttitor dolor eget suscipit hendrerit.'
    }),
    TeamMember.create({
      firstName: 'Just',
      lastName: 'Janet',
      title: 'Founding Engineer',
      favoriteColor: '#FF4369',
      photoUrl:
        'https://img.nbc.com/sites/nbcunbc/files/images/2016/9/01/2016-0823-TheGoodPlace-DArcyCarden-1050x1050-CV.jpg',
        story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, enim vel pellentesque dictum, arcu orci tempor eros, vitae viverra odio purus non mi. Proin porttitor dolor eget suscipit hendrerit.'
    }),
    TeamMember.create({
      firstName: 'Jason',
      lastName: 'Mendoza',
      title: 'Founding Designer',
      favoriteColor: '#07BB87',
      photoUrl:
        'https://img.nbc.com/sites/nbcunbc/files/images/2016/9/01/2016-0823-TheGoodPlace-MannyJacinto-1050x1050-CV.jpg',
        story:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, enim vel pellentesque dictum, arcu orci tempor eros, vitae viverra odio purus non mi. Proin porttitor dolor eget suscipit hendrerit.'
    })
  ]);
}
