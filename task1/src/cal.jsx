import { useEffect } from 'react';
import { useState } from 'react';

const accessCode="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTYyNTUyLCJpYXQiOjE3MTUxNjIyNTIsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFjNWE0MTcwLTJiMzktNDZhMS1hNjM5LTkzYzI1Yjc0YmZiNSIsInN1YiI6IjcyMDcyMTExMDA2OS05QGhpY2V0LmFjLmluIn0sImNvbXBhbnlOYW1lIjoiQWZmb3JkTWVkIiwiY2xpZW50SUQiOiIxYzVhNDE3MC0yYjM5LTQ2YTEtYTYzOS05M2MyNWI3NGJmYjUiLCJjbGllbnRTZWNyZXQiOiJCSkNOeU9zQ3ZXQkVyYkdHIiwib3duZXJOYW1lIjoiR293dGhhbSIsIm93bmVyRW1haWwiOiI3MjA3MjExMTAwNjktOUBoaWNldC5hYy5pbiIsInJvbGxObyI6IjcyMDcyMTExMDA2OSJ9.rnnKa1uTl34FhWbYHzyhwnoiRftyVQ3KPSOdTlv8XTM"
const AverageCalculator = () => {

  useEffect(()=>{
    const handlefibo = async (event) => {
        event.preventDefault();
        function fibonacci(n) {
          
            let fibSequence = [0, 1];
            for (let i = 2; i < n && i <= 100; i++) {
                fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
            }
            return fibSequence;
          
        }
        fibonacci(100)
        try {
            const  res = await fetch(`http://20.244.56.144/test/fibo`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessCode}` 
                },
                body:JSON.stringify({number:fibSequence})
                
            });
            const data =await res.json()
            console.log(data)
        } catch (error) {
            console.error('Error:', error.response.data);
        }
        handlefibo()
    };
    const handleprime = async (event) => {
        event.preventDefault();
        function generatePrimes(max) {
          const primes = [];
          for (let num = 2; num <= max; num++) {
              let isPrime = true;
              for (let i = 2; i <= Math.sqrt(num); i++) {
                  if (num % i === 0) {
                      isPrime = false;
                      break;
                  }
              }
              if (isPrime) primes.push(num);
          }
          return primes;
      }
      
      const primesArray = generatePrimes(100);
      console.log( primesArray);
        try {
            const  res = await fetch(`http://20.244.56.144/test/primes`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessCode}` 
                },
                body:JSON.stringify({number:primesArray})
                
            });
            const data =await res.json()
            console.log(data)
        } catch (error) {
            console.error('Error:', error.response.data);
        }
        handleprime()
      
    };
    const handleeven = async (event) => {
        event.preventDefault();
        function generateEvenNumbers(max) {
          const evens = [];
          for (let num = 2; num <= max; num += 2) {
              evens.push(num);
          }
          return evens;
      }
      
      const evenNumbers = generateEvenNumbers(20);
      console.log( evenNumbers);
        try {
            const  res = await fetch(`http://20.244.56.144/test/fibo`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessCode}` 
                },
                body:JSON.stringify({number:fibSequence})
                
            });
            const data =await res.json()
            console.log(data)
        } catch (error) {
            console.error('Error:', error.response.data);
        }
        handleeven()
    };
    const handler = async (event) => {
      event.preventDefault();
      function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    function generateRandomArray(length, min, max) {
        const randomArray = [];
        for (let i = 0; i < length; i++) {
            randomArray.push(getRandomNumber(min, max));
        }
        return randomArray;
    }
    
    const randomArray = generateRandomArray(10, 1, 10);
    console.log( randomArray);
      try {
          const  res = await fetch(`http://20.244.56.144/test/fibo`, {
              method: 'POST',
              headers: {
                  Authorization: `Bearer ${accessCode}` 
              },
              body:JSON.stringify({number:fibSequence})
              
          });
          const data =await res.json()
          console.log(data)
      } catch (error) {
          console.error('Error:', error.response.data);
      }
      handler()
  };
  },[])
  
    return (
        <>
        HI
        </>
    );
};

export default AverageCalculator;
