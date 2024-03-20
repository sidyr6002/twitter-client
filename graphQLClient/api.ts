import { auth } from "@/auth";
import { GraphQLClient } from "graphql-request";
import { cookies } from "next/headers";

const requestURL = "http://localhost:5014/graphql";
let graphClientInstance: GraphQLClient | undefined = undefined;
// ReferenceError: XMLHttpRequest is not defined] occurs ---> fetch : fetch 
export function getGraphClient(): GraphQLClient {
    // auth().then((data) => {
    //     console.log("auth", data);
    // }).catch((error) => {
    //     console.log("auth error", error);
    // });

    if (!graphClientInstance) {
        graphClientInstance = new GraphQLClient(requestURL, {
            headers: () => setGQLClientHeaders(),
            fetch: fetch,
        });
    }

    return graphClientInstance;
}

function setGQLClientHeaders() {
    const headers: Record<string, string> = {};
    const token = getAuthToken();
    if (token) {
        //console.log("Authorization", token);
        headers["Authorization"] = `Bearer ${token}`;
    }

    headers["Content-Type"] = "application/graphql";
    return headers;
}

function getAuthToken(): string | null {
    const tokenCookie = cookies().get("user_token");
    if (tokenCookie) {
      return tokenCookie.value;
    }
  
    // Handle cases where no token is found (e.g., redirect to login)
    return null;
}

// function setGQLClientAuthorizationHeader(token: string) {
//     console.log("setAuthrizationHeader", token);

//     if (graphClientInstance) {
//         graphClientInstance.setHeader("Authorization", `Bearer ${token}`);
//     }
// }
