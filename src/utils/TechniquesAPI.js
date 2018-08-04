const API = 'https://cryptic-brook-20874.herokuapp.com/api/techniques';

export const getAll = () => {
    return fetch(API)
      .then((response) => response.json())
      .then((data) => console.log(data));
}