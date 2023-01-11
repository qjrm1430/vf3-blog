// 주석
/*
긴주석
*/

// 출력
console.log('hello world');
console.error('error is...');

// 변수
var v1 = 1;
let l1 = 2;
const c1 = 3; // 정적
console.log('var', v1, l1, c1);

v1 = 4;
l1 = 5;
// c1 = 6; // 못바꿈
console.log('var', v1, l1, c1);

// 데이터 형식
let a = 3; // 숫자
a = -3.3; // 실수
a = '문자';
// a = "쌍따옴표도 문자";
a = `어퍼스트로피`;
a = '33'; // 문자
a = Number(a); //숫자
let b = 1;
let c = a + b; // 숫자
c = a + b + 'more'; // 문자로 변환
a = null;
let u; // undefined
a = 0 / 0; // NaN
a = false; // or true (boolen)

console.log('data', a);
console.log('data', 'type', typeof a);
console.log('data', c);
console.log('data', u);
console.log('data', 'type', typeof u);

// 조건
const ca = 4,
  cb = 5;
if (ca > cb) console.log('con', 'good');
// else if (ca == cb) console.log('con', 'equal');
else console.log('con', 'bad');

// 삼항 연산자
console.log('con', ca > cb ? 'good' : 'bad');
console.log('con', ca < cb); // boolen형 반환

// array 배열
const ar = [1, 2, 3];
console.log('ar', ar);
console.log('ar', ar.pop(), ar); // 뒤에서 빼가기
console.log('ar', ar.shift(), ar); // 앞에서 빼가기
console.log('ar', ar.unshift(0), ar); // 앞에서 넣기
console.log('ar', ar.push(4), ar); // 뒤에서넣기
console.log('ar', ar.indexOf(4)); // 해당값의 인덱스 찾기, 없으면 -1반환

// function
function sum(a, b) {
  return a + b;
}
console.log('func', 'sum', sum(1, 2));

const multi = (a, b) => {
  return a * b;
};
console.log('func', 'sum', multi(3, 4));

const multi2 = (a, b) => a * b;
console.log('func', 'sum', multi2(3, 4));

// *** Object : JSON..
// nosql
const obj = {
  a: 1,
  b: '한글',
  c: [1, '2', 3],
  d: {
    a: 2,
    b: null
  },
  e: function () {
    console.log('obj', 'func');
    return 'good func';
  }
};

console.log('obj', obj);
console.log('obj', obj.a);
obj.a = 123;
console.log('obj', obj.a);
console.log('obj', obj.e());

const obj2 = obj;
obj2.a = 44; // 같은 번지이기 때문에 obj도 같이 바뀜
console.log('obj', obj.a, obj2.a);

// 얕은 복제
const obj3 = Object.assign({}, obj);
obj3.a = 55;
console.log('obj', obj.a, obj2.a, obj3.a);

// object안의 object는 복제가 안된다, 번지만 가져옴.
obj3.d.a = 555;
console.log('obj', obj.d.a, obj2.d.a, obj3.d.a);

// 반복문 iterator
const ts = [];
// ts.push(1)
// ts.push(2)
for (let i = 0; i < 3; i++) ts.push(i);
console.log('it', ts);

for (let i = 0; i < ts.length; i++) {
  ts[i] += 'add';
}
console.log('it', ts);
//위 구문과 동일
for (let i in ts) {
  ts[i] = `${i} in`;
}
console.log('it', ts);

let str = '';
for (const t of ts) {
  str += t + ' of';
}
console.log('it', str);
// 위 구문과 동일 forEach
str = '';
ts.forEach((t) => {
  str += t + ' forE';
});
console.log('it', str);

const result = ts.map((t, i) => {
  return {
    name: `${i} n`,
    value: t
  };
});

console.log('it', result);

// spread ...
const sums = [4, 5];
console.log('sp', ...sums);
console.log('sp', sum(...sums));

const as = [1, 2, 3];
const bs = [4, 5, 6];

let cs = as.concat(bs);
console.log('sp', cs);
// 위 구문과 동일
cs = [...as, ...bs];
console.log('sp', cs);

//얕은 복제
const o1 = { a: 1, b: 2 };
const o2 = { ...o1 };
o2.a = 2;
console.log('sp', o2);
console.log('sp', o2.a, o1.a);

// promise
const foo1 = () => {
  console.log('pr', 'job1');
  setTimeout(() => {
    // setTimeout은 인자가 무조건 있어야함.
    // 그 인자만큼의 시간이 지나면 실행하는 함수
    console.log('pr', 'job2');
  }, 1000);
  console.log('pr', 'job3');
};

const pr = new Promise((resolve) => {
  setTimeout(() => {
    resolve('job2');
  }, 1000);
});

function foo2() {
  console.log('pr', 'job1');
  pr.then((r) => {
    // pr이 끝나면
    // r은 resolve된 결과
    console.log('pr', r);
    console.log('pr', 'job3');
  });
  setTimeout(() => {
    console.log('pr', 'job2');
  });
  console.log('pr', 'job3');
}

function foo3() {
  console.log('pr', 'job1');
  pr.then((r) => {
    console.log('pr', r);
    return pr;
  }).then((r) => {
    console.log('pr', r);
    console.log('pr', 'job3');
  });
}

const pr2 = (r) => {
  return new Promise((resolve, reject) => {
    if (r < 5) {
      setTimeout(() => {
        resolve('job2');
      }, 1000);
    } else {
      reject(new Error(`5보다 큼`));
    }
  });
};

function foo4() {
  console.log('pr', 'job1');
  pr2(4)
    .then((r) => {
      console.log('pr', r);
      return pr2(6);
    })
    .then((r) => {
      console.log('pr', r);
      console.log('pr', 'job3');
    })
    .catch((e) => {
      console.error('pr', e.message);
    });
}

const foo5 = async () => {
  console.log('pr', 'job1');
  try {
    const r = await pr2(4);
    console.log('pr', r);
    console.log('pr', 'job3');
  } catch (e) {
    console.error('pr', e.message);
  } finally {
    console.log('fin...');
  }
};

// foo1();
// foo2();
// foo3();
// foo4();
foo5();
