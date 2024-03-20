import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { getGraphClient } from "./graphQLClient/api";
import { generateTokenQueryDocument } from "./graphql/queries/user";
import { cookies } from "next/headers";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    events: {
        async signIn({ profile }) {
            console.log("linkAccount");
            if (profile) {
                if (
                    profile.email &&
                    profile.given_name &&
                    profile.family_name &&
                    profile.picture
                ) {
                    const userData = {
                        email: profile.email,
                        firstName: profile.given_name,
                        lastName: profile.family_name,
                        profilePicture: profile.picture,
                    };
                    
                    //console.log("User Data", userData);
                    const graphClient = getGraphClient();
                    try {             
                        const data = await graphClient.request(generateTokenQueryDocument,{
                                data: userData,
                        });
                        if (data && data.generateUserToken){
                            // console.log("User Token", data.generateUserToken);
                            cookies().set("user_token", data.generateUserToken, {
                                maxAge: 60 * 60 * 24 * 30,
                                secure: true,
                                httpOnly: true,
                            });
                        }
                    } catch (error) {
                        console.log("Error in linking account ", error);
                    }
                
                }
            }
        },
    },
    callbacks: {
        async signIn({ account, profile }) {
            // if (!profile) {
            //     return false
            // }

            // if (!profile.email || !profile.given_name || !profile.family_name || !profile.picture) {
            //     return false
            // }

            // const userData = {
            //     email: profile.email,
            //     firstName: profile.given_name,
            //     lastName: profile.family_name,
            //     profilePicture: profile.picture
            // }

            // const token = await fetchData(userData);

            // console.log("User Token", token);

            return true;
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken as string;
            //console.log("Session", session);
            return session;
        },
        async jwt({ token, account, profile }) {
            if (account) {
                //token.idToken = account.id_token;
                token.accessToken = account.access_token;
            }
            //console.log("Token", token);
            return token;
        },
    },
    session: { strategy: "jwt" },
    ...authConfig,
});
