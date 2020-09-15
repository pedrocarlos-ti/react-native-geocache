const BASE_URL = "http://192.168.15.8:3000";

export const geoFetch = (path, options = {}) => {
  return fetch(`${BASE_URL}/${path}`, options).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Something went wrong... please try again.");
  });
};
