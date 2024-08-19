'use client'
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"
import { NextAuthConfig } from "next-auth";
import connectMongoDb from '@/Mongo/mongodb'
import User from '@/models/model'

export const authOptions = {
  pages: {
    signIn: '/signup',
  },  
  providers: [
    CredentialsProvider({
      type: "credentials",

 credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      }}),
  ],
  async authorize(credentials:any) {
    const credentialDetails = {
      email: credentials.email,
      password: credentials.password,
    };

    const resp = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentialDetails),
    });
    const user = await resp.json();
    if (user.is_success) {
      return user;
    } else {
      console.log("check your credentials");
      return null;
    }
  },
  // session:{
  //   strategy:'jwt'
  // },
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {},
//       async authorize(credentials) {
//         try{
//             // connectMongoDb();
//             // const user =User.findOne({email:credentials.email})
//             // const user = await login(credentials);
//             console.log(credentials)
//         }catch(error){
//             console.log(error)
//             return null;
//         }
//   }
//     })
//   ], 
// callbacks: {
//   jwt: async ({ token, user }) => {
//     if (user) {
//       token.email = user.data.auth.email;
//       token.username = user.data.auth.userName;
//       token.userType = user.data.auth.userType;
//       token.accessToken = user.data.auth.token;
//     }

//     return token;
//   },
//   session: ({ session, token, user }) => {
//     if (token) {
//       session.user.email = token.email;
//       session.user.username = token.userName;
//       session.user.accessToken = token.accessToken;
//     }
//     return session;
//   },
// } satisfies NextAuthConfig,
}
//   callbacks:{
//     async jwt({token,user}){
//         if(user){
//             token.name= user.name;
//             token.email=user.email;
//         }return token;
//     },  
//     async session({session,token}){
//         if(token){
//             session.user.name=token.name;
//             // session.user.email=token.email;
            
//         }return session;
//     },  
//   },  

// satisfies NextAuthConfig;
export default NextAuth(authOptions)
// export {handler as GET, handler as POST};
