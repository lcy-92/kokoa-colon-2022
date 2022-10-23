const quotes = [ 

 {quote:"일단 시작해라. 나중에 완벽해지면 된다",
    author:"론 무어"
 },
 {quote:"과거를 아무리 열심히 면밀히 바꿔쓴다고 해도, 현재 나 자신이 처한 상황의 큰 줄거리가 변하는 일은 없다.",
 author:"무라카미 하루키"
 },
 {quote:"출발하기위해 위대해질 필요는 없지만 , 출발부터 해야한다.",
 author:"레스브라운"
 },
 {quote:"당신의 인생이 시작되기를 기다리는 동안 인생은 지나간다.",
 author:"세네카"
 },
 {quote:"생각하는 대로 살지 않으면 사는 대로 생각하게 된다",
author:"폴 발레리"
 },
 {quote:"운명은 우연이 아닌 선택이다. 기다리는 것이 아니라 성취하는 것이다.",
 author:"윌리엄 제닝스 브라이언"
 },
 {quote:"모든 인간은 태어나기 전까지 불가능한 존재다.",
author:"랄프 왈도 에머슨"
 },
 {quote:"우리는 생각하는 대로 존재한다.모든것은 생각과 함께 시작된다. 생각에 따라 세계가 만들어진다",
 author:"석가모니"
 },
 {quote:"시간이 지나면 자연히 변한다고들 하지만 자기 스스로 바꾸지 않으면 아무것도 변하지 않는다",
 author:"앤디 워홀"
 }];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");





const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;


