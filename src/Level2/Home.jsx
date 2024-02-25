  
// import React, { useEffect, useState } from 'react';
// import { Auth } from 'aws-amplify';

// function Home() {
//   const [user, setUser] = useState(null);
//   const [tokens, setTokens] = useState(null);
//   const [tokenValidity, setTokenValidity] = useState(null);

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   const fetchUserData = async () => {
//     try {
//       const currentUser = await Auth.currentAuthenticatedUser();
//       const currentTokens = await Auth.currentSession();
//       setUser(currentUser.username);
//       setTokens(currentTokens.getIdToken().getJwtToken());
//       setTokenValidity(currentTokens.isValid());
//     } catch (error) {
//       console.log('Error fetching user data: ', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <div>
//         <p>Logged-in username: {user}</p>
//         <p>Tokens: {tokens}</p>
//         <p>Validity of the token: {tokenValidity ? 'Valid' : 'Invalid'}</p>
//       </div>
//     </div>
//   );
// }

// export default Home;
