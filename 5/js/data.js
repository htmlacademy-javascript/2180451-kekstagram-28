import {getRandomInteger} from './util.js';
import {getRandomValue} from './util.js';

const COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['Алексей', 'Артем', 'Жанна', 'Ирина', 'Ксения', 'Александр', 'Павел', 'Константин', 'Марина', 'Мария', 'Сергей', 'Анна', 'Анастасия', 'Белла', 'Полина', 'Эльвира', 'Юлия', 'Дмитрий', 'Екатерина', 'Евгений', 'Кирилл', 'Наталья', 'Оксана', 'Софья', 'Руслан', 'Артур', 'Глеб', 'Виктория'];
const PHOTO_DESCRIPTIONS = ['Крутой отель с отличным пляжем', 'Указатель на пляж', 'Красивый пляж', 'На оценочку))', 'Милая подача блюд', 'Крутая тачка', 'Красота минимализма', 'Вкуснейший компотик', 'Ловим пролетающий самолет', 'Удобная выджвиная полка для обуви', 'Замечательный день для похода на море', 'Взорванная ауди', 'Непонятное блюдо', 'Кото-суши', 'Домашние тапочки из будущего', '5 секунд, полет нормальный', 'Хор', 'Раритетная машина', 'Тапочки для ночных обжор', 'Площадка с пальмами', 'Вкусный салатик', 'Красивый закат на фоне моря', 'Я крабик, клац-клац', 'Рамштайн отжигают', 'Опасное сафари'];
const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const ID_MIN = 1;
const ID_MAX = 25;
const URL_MIN = 1;
const URL_MAX = 25;
const COMMENT_ID_MIN = 1;
const COMMENT_ID_MAX = 1000;
const COMMENT_COUNT_MIN = 1;
const COMMENT_COUNT_MAX = 5;
const DESCRIPTIONS_COUNT = 25;
const photoId = getRandomValue(ID_MIN, ID_MAX);
const photoUrl = getRandomValue(URL_MIN, URL_MAX);
const commentId = getRandomValue(COMMENT_ID_MIN, COMMENT_ID_MAX);

function commentsGenerator () {
  return {
    id: commentId(),
    avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
    message: `${COMMENTS[getRandomInteger(0, COMMENTS.length - 1)]}`,
    name: `${NAMES[getRandomInteger(0, NAMES.length - 1)]}`
  };
}

const commentsArray = () => Array.from({length: getRandomInteger(COMMENT_COUNT_MIN, COMMENT_COUNT_MAX)
}, commentsGenerator);

function photoDescription () {
  return {
    id: photoId(),
    url: `photos/${photoUrl()}.jpg`,
    description: `${PHOTO_DESCRIPTIONS[getRandomInteger(0, PHOTO_DESCRIPTIONS.length - 1)]}`,
    likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
    comments: commentsArray()
  };
}

export const photoDescriptionArray = () => Array.from({length: DESCRIPTIONS_COUNT}, photoDescription);
