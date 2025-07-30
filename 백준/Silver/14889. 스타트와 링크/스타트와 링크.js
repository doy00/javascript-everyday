const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
.readFileSync(filePath)
.toString()
.trim()
.split("\n");

const n = parseInt(input[0]);  // 첫번째줄: 선수 수 N 
const abilities = [];   // 능력치 2차원 배열 생성

for (let i = 1; i <= n; i++) {
  abilities.push(input[i].split(' ').map(Number));
}

let minDiff = Infinity;

// 1. 조합 생성 함수
function getCombinations(arr, selectNumber) {
  const results = [];  // 모든 조합 배열

  if (selectNumber === 1) {
    return arr.map(value => [value]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index+1);

    const combinations = getCombinations(rest,selectNumber - 1);

    const attachedCombi = combinations.map(combination => [fixed, ...combination]);

    results.push(...attachedCombi);
  })
  return results;
}

// 2. 모든 가능한 팀 조합 탐색
const players = Array.from({length: n}, (_, i) => i);  // 선수들을 인덱싱

const startTeamCombi = getCombinations(players, n/2);

startTeamCombi.forEach(startTeam => {
  const linkTeam = players.filter(player => !startTeam.includes(player))  // 링크팀은 스타트팀에 속하지 않은 나머지 선수들

  let startAbility = 0;
  for (let i = 0; i < startTeam.length; i++) {
    for (let j = 0; j < startTeam.length; j++) {
      if (i !== j) {
        startAbility += abilities[startTeam[i]][startTeam[j]];
      }
    }
  }

  let linkAbility = 0;
  for (let i = 0; i < linkTeam.length; i++) {
    for (let j = 0; j < linkTeam.length; j++) {
      if (i !== j) {
        linkAbility += abilities[linkTeam[i]][linkTeam[j]];
      }
    }
  }

  const diff = Math.abs(startAbility - linkAbility);  // 절댓값

  minDiff = Math.min(minDiff, diff);  // 현재 최솟값보다 더 작으면 갱신
});

console.log(minDiff);