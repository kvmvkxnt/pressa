// server address
import { SERVER_URI } from "../config";

const commonOptions = {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  }
}

const login = async (username: string, password: string) => {
  try {
    let response = await fetch(SERVER_URI, {
      ...commonOptions,
      body: JSON.stringify({
        query: `
          mutation($username: String!, $password: String!) {
            login(username: $username, password: $password) {
              status
              message
              token
            }
          }
        `,
        variables: {
          username,
          password
        }
      })
    });

    let data = await response.json();
    if (!data?.data || data.errors) {
      throw data;
    }
    return data;
  } catch (e: any) {
    throw e;
  }
}

export { login };
