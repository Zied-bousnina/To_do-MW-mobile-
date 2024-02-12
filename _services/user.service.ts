/* eslint-disable prettier/prettier */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authHeader, ApiConfigs } from "../_helpers";

export const UserService = {
    getTaskList,
};

async function getTaskList () {
    const requestOptions = {
        method: "GET",
        headers: {
        ...authHeader(),
        'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'false',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',

        },
    };

    try {
        let userJSON = await AsyncStorage.getItem("user").then((value) => {
            return value;
          }).catch((error) => {
            console.log('error', error);

          }
          );
        const response = await fetch(
        `${ApiConfigs.base_url}${"read"}`,
        {
            headers: {
                'Authorization': `Bearer ${userJSON}`,
                'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'false',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',

            }
        }
        );
        const data = await handleResponse(response);
        console.log('data++++++++++++++++', JSON.stringify(data));
        return data;
    } catch (error) {
        // Handle error appropriately
        console.error("Login error:", error);
        throw error;
    }
    }

async function handleResponse(response) {
    try {
        const text = await response.text();
        const data = text ;
        // console.log('data++++++++++++++++', data);
        return data;
    } catch (error) {
        // Handle error appropriately
        console.error("Response error:", error);
        throw error;
    }
}
// }