
const NAMES = ['Мария','Олег','Ирина','Александр','Светлана','Сергей','Антон','Елизавета','Анна'];
const DESCRIPTION = ['Собаня','Котик играет','Готовлю что-то новенькое','Приятный вечер','Готовлюсь ко сну','Мои книги','Моя лучшая картина'];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomElements = (arr) => arr[getRandomNumber(0, arr.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from(
  { length: getRandomNumber(1, 2) },
  () => getRandomElements(COMMENTS),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomElements(NAMES),
});

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElements(DESCRIPTION),
  likes: getRandomNumber(15, 200),
  comments: Array.from(
    { length: getRandomNumber(0, 30) },
    createComment,
  ),
});

const getPhotos = () => Array.from(
  { length: 25 },
  (_, photoIndex) => createPhoto(photoIndex + 1),
);

getPhotos();
