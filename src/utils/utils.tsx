export function getImageUrl(imageId: string, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

export function submitForm(answer: string) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() !== "lima") {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      } else {
        resolve(null);
      }
    }, 1500);
  });
}
