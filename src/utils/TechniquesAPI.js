const URL = 'https://cryptic-brook-20874.herokuapp.com/api/techniques';

export const getAll = () => {
    return fetch(URL)
      .then((response) => response.json())
      .then((data) => data)
}