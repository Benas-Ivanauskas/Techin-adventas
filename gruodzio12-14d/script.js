function test(message, key) {
  let result = "";
  for (let i = 0; i < message.length; i++) {
    //message.charCodeAt(i) - gauna unikalu numeri, nurodanti siboli esant i pozicijoje
    //^ - sujungia unikalu numeri su raktu
    //String.fromCharCode - pavercia atgal i simboli
    result += String.fromCharCode(message.charCodeAt(i) ^ key);
  }
  return result;
}
const originalMessage = "Merry Christmas";
const key = 3;

const encryptedMessage = test(originalMessage, key);
console.log(`Encrypted :${encryptedMessage}`);

const decryptedMessage = test(encryptedMessage, key);
console.log(`Decrypted ${decryptedMessage}`);
