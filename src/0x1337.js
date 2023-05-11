document.addEventListener('DOMContentLoaded', function() {
  (function hiddenFunction() {
    var _0x4a12 = `uuuuuvvvvvvvvvvvvuuvvvvvvvvvvvvvuuuuvvvvvvvvvvvvvvvuuuuuuuuuuuuuuuuuuuuuuuuuuvvvuuuu 
uuuvvvuuvvvvvvvuvvvvuuuuuuuuuuuuuuuuuuuuuuuuuvvvvvuuuu 

uuvvvuuuuuuuuuuuuuvvvvuuuuuuuvvvvuuuuuuuvvvvuuuuuuuuuuuuuuuuuuuuuuuuuuuuvvvvvvuuuu 


uvvvvuuuuvvvvvvvuvvvvvvvvvvvvvvuuuuuuuuvvvvuuuuuuuuvvvvvvvvvvvuuuuuuvvvvvvvuuuu 



uvvvvuuuvvvvuvvvvuuuuuuuuuuvvvvuuuuuuuvuuuuuvvvuuvvvvuuuu 




uvvvvuuuuuuuvvvvuvvvvuuuuuuuuuuuuuuuuuuuvvvvuuuuuuuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvu 





uvvvvuuuuuuuvvvvuvvvvuuuuuuuuuuuuuuuuuuuvvvvuuuuuuuuuuuuuuuuuuuuuvvvvuu 






uvvvvvvvvvvvvvuuvvvvuuuuuuuuuuuuuuuuuuuvvvvuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvvvvuuuu 







uuvuuuuvuuuuuuuuuuuuuuuuuuuuvuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvuuuuu 








uuuuuuuuuuuuuuuuuuuuuuuuuflag{test}uuuuuuuuuuuuuuuuuuuuu`;

    function _0x3aef(_0x123456) {
        var _0xabcdef = '';
        for (var _0x10 = 0x0; _0x10 < _0x123456.length; _0x10++) {
            _0xabcdef += String.fromCharCode(_0x123456.charCodeAt(_0x10) ^ 0x2a);
        }
        return _0xabcdef;
    }

    function decrypt() {
        var encodedSecret = _0x4a12;
        return _0x3aef(encodedSecret);
    }

    var currentIndex = 0;
    var decryptedSecret = decrypt();
    var outputElement = document.getElementById('output');

    function clickDecryptBtn() {
      if (currentIndex < decryptedSecret.length) {
        outputElement.textContent += decryptedSecret[currentIndex];
        currentIndex++;
      }
    }

    var GAME = document.getElementById("clickBtn");
    var LAB = document.getElementById("rapidClickBtn");

    GAME.addEventListener("click", clickDecryptBtn);

    LAB.addEventListener("click", function() {
      for (var i = 0; i < 10; i++) {
        clickDecryptBtn();
      }
    });
    
    const clickSound = document.getElementById("click-sound");
    GAME.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });
    LAB.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });

    let clickCounter = 0;
    const maxClickCount = 10;

    LAB.addEventListener("click", function() {
      clickCounter++;
      if (clickCounter >= maxClickCount) {
        alert("您的手速过快，稍事休息，再接再厉~");
        LAB.classList.add("animated", "bounce");
        setTimeout(() => {
          LAB.classList.remove("animated", "bounce");
          const randomDelay = 3000;
          LAB.setAttribute("disabled", true);
          setTimeout(() => {
            LAB.removeAttribute("disabled");
          }, randomDelay);
          clickCounter = 0;
        }, 1000);
        return;
      }

    });


  })();
});


// 这段字符串是通过一种简单的加密算法生成的。具体来说，它是通过将原始字符串中的每个字符与一个固定的值（0x2a）进行异或运算得到的。这个固定的值在代码中被硬编码为一个十进制数，即42。因此，如果我们将这个字符串进行解密，只需要将每个字符再次与42进行异或运算即可得到原始字符串。

// 这个字符串是通过异或加密算法加密得到的。具体来说，每个字符都与数字0x2a进行异或运算，得到加密后的字符。如果要生成这个字符串，可以编写一个加密函数，将需要加密的字符串中的每个字符都进行异或运算，然后将加密后的字符拼接起来即可。以下是一个示例代码：


// var plaintext = "flag{b5cc50bb-627c-47cd-a0e6-947ed0b9132f}";

// function encrypt(plaintext) {
//   var ciphertext = "";
//   var key = 0x2a; // 密钥为固定值 0x2a
//   for (var i = 0; i < plaintext.length; i++) {
//     ciphertext += String.fromCharCode(plaintext.charCodeAt(i) ^ key);
//   }
//   return ciphertext;
// }

// var ciphertext = encrypt(plaintext);
// console.log(ciphertext);

