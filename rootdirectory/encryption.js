var plaintext = "flag{test}";

function encrypt(plaintext) {
  var ciphertext = "";
  var key = 0x2a; // 密钥为固定值 0x2a
  for (var i = 0; i < plaintext.length; i++) {
    ciphertext += String.fromCharCode(plaintext.charCodeAt(i) ^ key);
  }
  return ciphertext;
}

var ciphertext = encrypt(plaintext);
console.log(ciphertext);