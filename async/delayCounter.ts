// Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

// When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.

function delayCounter(target: number, wait: number): () => void{
  return function (): void {
    for (let i = 1; i <= target; i++){
      setTimeout(() => console.log(i), wait * i)
    }
  }
}

const delay = delayCounter(10, 1000);
delay(); 