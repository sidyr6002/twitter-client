import { graphql } from "@/gql";

export const generateTokenQueryDocument = graphql(`
    #graphql
    query generateToken($data: UserInput!) {
        generateUserToken(data: $data)
    }
`);

export const getCurrentUserQueryDocument = graphql(`
    #graphql
    query currentUser {
        getCurrentUser {
            firstName
            lastName
            email
            profilePicture
        }
    }
`);
