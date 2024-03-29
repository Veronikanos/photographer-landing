const business = require('../../images/jpg/business.jpeg');
const product = require('../../images/jpg/product.jpeg');
const family = require('../../images/jpg/family.jpeg');
const content = require('../../images/jpg/stylist.jpg');
const loveStory = require('../../images/jpg/loveStory/loveStory6.jpg');
const sacraments = require('../../images/jpg/sacraments.jpeg');
// const wedding = require('../../images/jpg/wedding.jpeg');
// const portrait = require('../../images/jpg/woman-portrait.jpeg');
const portrait = require('../../images/jpg/portrait.jpeg');
const video = require('../../images/jpg/video.jpg');

export const categories = [
  'business',
  'content',
  'family',
  'product',
  'loveStory',
  'sacraments',
  'video',
];

export const sliderContent = [
  {
    id: 1,
    src: portrait,
    name: categories[6],
    alt: 'Дівчина малює біля вікна',
    title: 'Портретна',
    description:
      'Погляньте на себе по-новому! Фотографії, які скажуть про Вас більше, ніж слова. Ідеально підійдуть для Ваших соціальних мереж, робочого або особистого використання.',
  },
  {
    id: 2,
    src: content,
    name: categories[1],
    alt: 'Підставка з епоксидної смоли з сухоцвітами в руці',
    title: 'Контентна',
    description:
      'Покажіть Ваш світ та свою експертність вашим читачам через ваші дописи у соцмережах чи блогах, доповнюючи їх професійним фото-контентом. Ваш блог стане ще більш неповторним!',
  },
  {
    id: 3,
    src: business,
    name: categories[0],
    alt: 'Дівчина архітектор креслить схеми креслення',
    title: 'Бізнес',
    description:
      'Ваша візитна картка у світі виробництва та послуг. Від корпоративних портретів до атмосферних знімків робочого процесу - я зроблю ваш бізнес видимим та привабливим для вашої аудиторії.',
  },
  {
    id: 4,
    src: product,
    name: categories[3],
    alt: 'Дівчина в помаранчевому піджаку стоїть з планшетом',
    title: 'Предметна',
    description:
      'Зйомка для товарного бізнесу: взуття, одяг, аксесуари, ювелірні вироби, біжутерія, витвори мистецтва, посуд, фуд зйомка тощо',
  },
  {
    id: 5,
    src: loveStory,
    name: categories[4],
    alt: 'Закохана пара обіймається',
    title: 'Love Story',
    description:
      'Особлива фотосесія, де ваша історія кохання стає основним сюжетом. Ви отримаєте неповторні кадри, які залишаться часткою вашого кохання назавжди.',
  },
  {
    id: 6,
    src: family,
    name: categories[2],
    alt: 'Жінка, чоловік та дитина сидять на пікніку в лісі',
    title: 'Cімейна',
    description:
      'Сімейна фотосесія - це час вашого родинного щастя. Від усмішок до сердечних митей – у знімках я збережу те тепло та любов, які заповнюють ваш дім. ',
  },
  {
    id: 7,
    src: sacraments,
    name: categories[5],
    alt: 'Пара стоїть в церкві перед вівтарем',
    title: 'Таїнства',
    description:
      'Від хрещення до вінчання – я зафіксую кожну таїнственну подію з відчуттями та святістю, яку вони несуть.',
  },
  {
    id: 8,
    src: video,
    name: categories[7],
    alt: '',
    title: 'Відеозйомка',
    description: 'Текст ',
  },
  // {
  //   id: 7,
  //   src: wedding,
  //   alt: 'Весільна пара тримається за руки',
  //   title: 'Весільна',
  //   description:
  //     'Довірте мені зафіксувати кожен незабутній момент вашого весілля, щоб ви могли насолоджуватися цими спогадами весь свій шлях разом.',
  // },
];
