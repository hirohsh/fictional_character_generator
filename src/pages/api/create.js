import { getName } from 'src/utils/names';
import { getResidence } from 'src/utils/prefectures';
import { getPersonality } from 'src/utils/personality';
import { getJob } from 'src/utils/jobs';
import { getHobby } from 'src/utils/hobbies';
import { getSomeFood } from 'src/utils/foods';
import { getRandomNumber } from 'src/utils/randomNumber';

const getAge = (ageRange) => {
  let age;
  switch (ageRange) {
    case '子供':
      age = getRandomNumber(13, 20);
      break;
    case '大人':
      age = getRandomNumber(20, 65);
      break;
    case '高齢':
      age = getRandomNumber(65, 91);
      break;
    case 'ランダム':
      age = getRandomNumber(13, 91);
      break;
    default:
      age = null;
      break;
  }
  return age;
};

const createData = (sexOpt, ageRange, foodOpt, regidenceOpt, hobbyOpt, jobOpt, personalityOpt, times) => {
  const resAry = [];
  let n = times;
  if (n > 1000) {
    n = 1000;
  }

  for (let i = 0; i < n; i++) {
    const someFood = getSomeFood(foodOpt);
    const { name, sex } = getName(sexOpt);
    const age = getAge(ageRange);
    const residence = getResidence(regidenceOpt);
    const personality = getPersonality(personalityOpt);
    const hobbies = getHobby(ageRange, hobbyOpt);
    const job = getJob(ageRange, jobOpt);

    const result = {
      name,
      sex,
      age,
      someFood,
      residence,
      personality,
      hobbies,
      job,
    };

    resAry.push(result);
  }
  return resAry;
};

export default function handler(req, res) {
  const { sexOpt, ageRange, foodOpt, regidenceOpt, hobbyOpt, jobOpt, personalityOpt, times } = req.body;
  const result = createData(sexOpt, ageRange, foodOpt, regidenceOpt, hobbyOpt, jobOpt, personalityOpt, times);
  res.status(200).json(result);
}
