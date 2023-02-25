const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['Алексей', 'Артем', 'Жанна', 'Ирина', 'Ксения', 'Александр', 'Павел', 'Константин', 'Марина', 'Мария', 'Сергей', 'Анна', 'Анастасия', 'Белла', 'Полина', 'Эльвира', 'Юлия', 'Дмитрий', 'Екатерина', 'Евгений', 'Кирилл', 'Наталья', 'Оксана', 'Софья', 'Руслан', 'Артур', 'Глеб', 'Виктория'];
const PHOTO_DESCRIPTIONS = ['Крутой отель с отличным пляжем', 'Указатель на пляж', 'Красивый пляж', 'На оценочку))', 'Милая подача блюд', 'Крутая тачка', 'Красота минимализма', 'Вкуснейший компотик', 'Ловим пролетающий самолет', 'Удобная выджвиная полка для обуви', 'Замечательный день для похода на море', 'Взорванная ауди', 'Непонятное блюдо', 'Кото-суши', 'Домашние тапочки из будущего', '5 секунд, полет нормальный', 'Хор', 'Раритетная машина', 'Тапочки для ночных обжор', 'Площадка с пальмами', 'Вкусный салатик', 'Красивый закат на фоне моря', 'Я крабик, клац-клац', 'Рамштайн отжигают', 'Опасное сафари'];
const AVATAR_MIN_COUNT = 1; const AVATAR_MAX_COUNT = 6;
const LIKES_MIN_COUNT = 15; const LIKES_MAX_COUNT = 200;
const ID_MIN = 1; const ID_MAX = 25;
const URL_MIN = 1; const URL_MAX = 25;
const COMMENT_ID_MIN = 1; const COMMENT_ID_MAX = 1000;
const PHOTO_ID = getRandomValue(ID_MIN, ID_MAX);
const PHOTO_URL = getRandomValue(URL_MIN, URL_MAX);
const COMMENT_ID = getRandomValue(COMMENT_ID_MIN, COMMENT_ID_MAX);

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomValue (min, max) {
  const PREVIOUS_VALUE = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (PREVIOUS_VALUE.length >= (max - min + 1)) {
      return null;
    }
    while (PREVIOUS_VALUE.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    PREVIOUS_VALUE.push(currentValue);
    return currentValue;
  };
}

function commentsGenerator () {
  return {
    id: COMMENT_ID(),
    avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
    message: `${COMMENTS[getRandomInteger(0, COMMENTS.length - 1)]}`,
    name: `${NAMES[getRandomInteger(0, NAMES.length - 1)]}`
  };
}

function photoDescription () {
  return {
    id: PHOTO_ID(),
    url: `photos/${PHOTO_URL()}.jpg`,
    description: `${PHOTO_DESCRIPTIONS[getRandomInteger(0, PHOTO_DESCRIPTIONS.length - 1)]}`,
    likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
    comments: commentsGenerator()
  };
}

const PHOTO_DESCRIPTIONS_ARRAY = () => Array.from({length: 25}, photoDescription);
PHOTO_DESCRIPTIONS_ARRAY();
