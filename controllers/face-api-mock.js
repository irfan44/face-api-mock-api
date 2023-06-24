const router = require("express").Router();

router.get("/", (req, res) => {
  const generateRandomNumbers = () => {
    const numbers = [];
    let sum = 0;

    for (let i = 0; i < 7; i++) {
      let random = Math.random() * (1 - sum);
      random = Math.floor(random * 100) / 100;
      numbers.push(random);
      sum += random;
    }

    return numbers;
  };

  const indexOfMax = (arr) => {
    if (arr.length === 0) {
      return -1;
    }

    let max = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i;
        max = arr[i];
      }
    }

    return maxIndex;
  };

  const predictEmotion = (max) => {
    switch (max) {
      case 0:
        return "neutral";
      case 1:
        return "happy";
      case 2:
        return "sad";
      case 3:
        return "angry";
      case 4:
        return "fearful";
      case 5:
        return "disgusted";
      case 6:
        return "surprised";
    }
  };

  const randomNumbers = generateRandomNumbers();
  const maxIndex = indexOfMax(randomNumbers);
  const predict = predictEmotion(maxIndex);

  const response = {
    neutral: randomNumbers[0],
    happy: randomNumbers[1],
    sad: randomNumbers[2],
    angry: randomNumbers[3],
    fearful: randomNumbers[4],
    disgusted: randomNumbers[5],
    surprised: randomNumbers[6],
    predict: predict,
  };

  return res.status(200).send(response);
});

module.exports = router;
