<!DOCTYPE html>
<html lang="cn">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>点击签到</title>
  <link rel=stylesheet type="text/css" href="gamelab.css">
</head>

<body>
  <audio id="click-sound">
    <source src="click-sound.mp3" type="audio/mpeg">
  </audio>
  <div class="card">
    <div class="card-title">
      <span>帮我点一下</span>
    </div>
    <div>
      <button id="clickBtn" class="card-btn">点击</button>
      <button id="rapidClickBtn" class="card-btn card-btn--rapid">连点10次</button>
    </div>
    <pre id="output"></pre>
  </div>
  <script type="text/javascript" src="0x1337.js"></script>
  <footer>
    <p>coded by GPT-4</p>
  </footer>

</body>

</html>