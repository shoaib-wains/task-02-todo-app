import { NextResponse } from "next/server"
import connectMongoDb from '@/Mongo/mongodb'
import User from '@/models/model'


export async function POST(req:any){
    try{
   const {name, email, password, confirm}= await req.json()
   await connectMongoDb();
   await User.create({name,email,password,confirm});


   return NextResponse.json({message:'User Registered'})
    }catch(error){
        return NextResponse.json({message:'An error Occured'})
    }
}






// 'use client'
// import CredentialsProvider from "next-auth/providers/credentials";
// import NextAuth from "next-auth"
// import type  {NextAuthConfig}  from 'next-auth';
// import connectMongoDb from '@/Mongo/mongodb'
// import User from '@/models/model'


// async function login(credentials:any) {
//     try{
//         connectMongoDb();
//         const user =User.findOne({email:credentials.email})
//         if(!user){
//           console.log('User Not found')
//         }else{
//           console.log('User Found')
//         }
//     }catch(error){
//         console.log(error)
//         console.log('Error While Conneecting to MongoDB')
//     }
// }
 
// export const authOptions = {
//   pages: {
//     signIn: '/login',
//   },  
//   session:{
//     strategy:'jwt'
//   },
//   secret:'abcdef',
// //   callbacks: {
// //     authorized({ auth, request: { nextUrl } }) {
// //       const isLoggedIn = !!auth?.user;
// //       const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
// //       if (isOnDashboard) {
// //         if (isLoggedIn) return true;
// //         return false; // Redirect unauthenticated users to login page
// //       } else if (isLoggedIn) {
// //         return Response.redirect(new URL('/dashboard', nextUrl));
// //       }
// //       return true;
// //     },
// //   },
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. "Sign in with...")
//       name: "Credentials",
//       // `credentials` is used to generate a form on the sign in page.
//       // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {},
//       async authorize(credentials:any) {
//         try{
//             const user = {id:'1'};
//             // console.log('this is the',user)
//             console.log(credentials)
//             return user;

//         }catch(error){
//             console.log(error)
//             return null;
//         }
//         // Add logic here to look up the user from the credentials supplied
//         connectMongoDb();
//         const user =User.findOne({email:credentials.email})
  
//         if (user) {
//           // Any object returned will be saved in `user` property of the JWT
//           console.log('Loged In Successfully');
//           return user


//         } else {
//           // If you return null then an error will be displayed advising the user to check their details.
//           console.log('User Not found')
  
//         //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//         }
//       }
//     })
//   ], // Add providers with an empty array for now
// //   callbacks:{
// //     async jwt({token,user}){
// //         if(user){
// //             token.name= user.name;
// //             token.email=user.email;
// //         }return token;
// //     },  
// //     async session({session,token}){
// //         if(token){
// //             session.user.name=token.name;
// //             // session.user.email=token.email;
            
// //         }return session;
// //     },  
// //   },  
// } satisfies NextAuthConfig;

// // export const { auth, signIn, signOut } = NextAuth({
// //   ...authConfig,
// // });
// const handler= NextAuth(authOptions)
// export {handler as GET, handler as POST};
