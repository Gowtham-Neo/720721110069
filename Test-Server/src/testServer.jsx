import React, { useEffect, useState } from 'react';

const TestServer = () => {
  const [client, setClient] = useState(null);
  const [secret, setSecret] = useState(null);
  const clientid="1c5a4170-2b39-46a1-a639-93c25b74bfb5"
  const clientSecret="BJCNyOsCvWBErbGG"
  // useEffect(() => {
  //   const fetchPost = async () => {
  //     if (client === null){
  //       const register = {
  //         companyName: "AffordMed",
  //         ownerName: "Gowtham",
  //         rollno: "720721110069",
  //         ownerEmail: "720721110069-9@hicet.ac.in",
  //         accessCode: "MsFBlB",
  //       };
  
  //       const response = await fetch('http://20.244.56.144/test/register', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(register),
  //       });
  //       const data = await response.json();
  //       console.log(data)
  //       setClient(data);
  //     };
  //     console.log(client)
  //     }
      
  //   fetchPost();
  // }, []); 
  useEffect(() => {
    const fetchPost2 = async () => {
     
        const register2 = {
          companyName: "AffordMed",
          clientId: `${clientid}`,
          clientSecret: `${clientSecret}`,
          ownerName: "Gowtham",
          rollno: "720721110069",
          ownerEmail: "720721110069-9@hicet.ac.in",
        };

        const response = await fetch('http://20.244.56.144/test/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(register2),
        });

        const data = await response.json();
        console.log(data)
        setSecret(data);
        console.log(secret)
      }
    

    fetchPost2();
  }, []);

  return (
    <div>test-server</div>
  );
};

export default TestServer;
