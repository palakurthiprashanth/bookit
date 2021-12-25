import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

import User from '../../../models/user'
import dbConnect from '../../../config/dbConnect'

export default NextAuth({
    name: "Credentials",
    session: {
        strategy: 'jwt'
    },
    secret: 'Rl3k+u662sVI8dHigjsScDdgfJxTE+4pg01MEmHOg1Q=',
    jwt: {
        secret: 'Rl3k+u662sVI8dHigjsScDdgfJxTE+4pg01MEmHOg1Q=',
        encryption: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {

                dbConnect();

                const { email, password } = credentials;

                // Check if email and password is entered
                if (!email || !password) {
                    throw new Error('Please enter email or password');
                }

                // Find user in the database
                const user = await User.findOne({ email }).select('+password')

                if (!user) {
                    throw new Error('Invalid Email or Password')
                }

                // Check if password is correct or not
                const isPasswordMatched = await user.comparePassword(password);

                if (!isPasswordMatched) {
                    throw new Error('Invalid Email or Password')
                }
                //return Promise.resolve(user)
                return user; 

            }
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            user && (token.user = user)
            return token
        },
        session: ({ session, token }) => {
            session.user = token.user
            return session
        }
    }
})