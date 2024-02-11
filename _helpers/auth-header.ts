import AsyncStorage from "@react-native-async-storage/async-storage";

export function authHeader(): {
  "Authorization"?: any;
  "X-Requested-With": string;
  "Content-Language": string;
} {
  let userJSON: any = AsyncStorage.getItem("user");
  let user: any = JSON.parse(userJSON);
  let language = AsyncStorage.getItem("Language");
  if (user && user.token) {
    return {
      "Authorization": user.token,
      "X-Requested-With": "XMLHttpRequest",
      "Content-Language": language ?? "en",
    };
  }
  return {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Language": language ?? "en",
  };
}

export function guestHeader() {
  let language = AsyncStorage.getItem("Language");
  return {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Language": language ?? "en",
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'false',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',

  };
}
