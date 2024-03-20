"use server";
import { getGraphClient } from "@/graphQLClient/api";
import { getCurrentUserQueryDocument } from "@/graphql/queries/user";

export const getCurrentUser = async () => {
    try {
        const graphClient = getGraphClient();
        const data = await graphClient.request(getCurrentUserQueryDocument);
        //console.log("data", data);
        return { data: data };
    } catch (error) {
        console.log("Error(getCurrentUser)", error);
        return { data: null };
    }
};
