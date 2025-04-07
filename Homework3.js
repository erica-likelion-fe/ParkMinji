const answer = Math.floor(Math.random() * 100) + 1;
    let tries = 0;
    const maxTries = 10;

    while (tries < maxTries) {
      const input = prompt(`1부터 100 사이의 숫자를 입력하세요. (남은 기회: ${maxTries - tries})`);
      
      const guess = parseInt(input, 10);
      tries++;

      if (guess < answer) {
        alert("UP!");
      } else if (guess > answer) {
        alert("DOWN!");
      } else {
        alert("축하합니다! 정답입니다.");
        break;
      }

      if (tries === maxTries) {
        alert("실패!");
      }
    }
