const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Алексей', 'Артем', 'Жанна', 'Ирина', 'Ксения', 'Александр', 'Павел', 'Константин', 'Марина', 'Мария', 'Сергей', 'Анна', 'Анастасия', 'Белла', 'Полина', 'Эльвира', 'Юлия', 'Дмитрий', 'Екатерина', 'Евгений', 'Кирилл', 'Наталья', 'Оксана', 'Софья', 'Руслан', 'Артур', 'Глеб', 'Виктория'];

const PHOTO_DESCRIPTIONS = ['Крутой отель с отличным пляжем', 'Указатель на пляж', 'Красивый пляж', 'На оценочку))', 'Милая подача блюд', 'Крутая тачка', 'Красота минимализма', 'Вкуснейший компотик', 'Ловим пролетающий самолет', 'Удобная выджвиная полка для обуви', 'Замечательный день для похода на море', 'Взорванная ауди', 'Непонятное блюдо', 'Кото-суши', 'Домашние тапочки из будущего', '5 секунд, полет нормальный', 'Хор', 'Раритетная машина', 'Тапочки для ночных обжор', 'Площадка с пальмами', 'Вкусный салатик', 'Красивый закат на фоне моря', 'Я крабик, клац-клац', 'Рамштайн отжигают', 'Опасное сафари'];
const photoId = getRandomId(1, 25);
const generatedCommentId = getRandomId(1, 1000);

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomId (min, max) {
  const previousId = [];

  return function () {
    let currentId = getRandomInteger(min, max);
    if (previousId.length >= (max - min + 1)) {
      return null;
    }
    while (previousId.includes(currentId)) {
      currentId = getRandomInteger(min, max);
    }
    previousId.push(currentId);
    return currentId;
  };
}

function getRandomUrl (min, max) {
  const previousUrl = [];

  return function () {
    let currentUrl = getRandomInteger(min, max);
    if (previousUrl.length >= (max - min + 1)) {
      return null;
    }
    while (previousUrl.includes(currentUrl)) {
      currentUrl = getRandomInteger(min, max);
    }
    previousUrl.push(currentUrl);
    return currentUrl;
  };
}

function commentsGenerator () {
  return {
    id: generatedCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: `${COMMENTS[getRandomInteger(0, COMMENTS.length - 1)]}`,
    name: `${NAMES[getRandomInteger(0, NAMES.length - 1)]}`
  };
}

const photoDescription = () => {
  const photoUrl = getRandomUrl(1, 25);
  return {
    id: photoId(),
    url: `photos/${photoUrl()}.jpg`,
    description: `${PHOTO_DESCRIPTIONS[getRandomInteger(0, PHOTO_DESCRIPTIONS.length - 1)]}`,
    likes: getRandomInteger(15, 200),
    comments: commentsGenerator()
  };
};

const similarPhotoDescription = () => Array.from({length: 25}, photoDescription);
similarPhotoDescription();
