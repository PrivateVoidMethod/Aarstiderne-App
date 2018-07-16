import { observable } from 'mobx';
import Config from '../../config'


class detailsStore {
  @observable item = null;
  @observable error = false;
  @observable loading = false;
  @observable ingredients = [];

  FetchDetails(url) {
    this.loading = true;
    let data = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw err;
          });
        }
        return response.json();
      })
      .then(responseJson => {
        this.item = responseJson["d"];
        this.FetchIngredients(this.item.Ingredients)
        this.loading = false;
      })
      .catch(error => {
        this.error = true;
        this.loading = false;
      });
  }

  FetchIngredients(url) {
    this.loading = true;
    let data = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw err;
          });
        }
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson["d"]["Ingredients"])
        this.ingredients = responseJson["d"]["Ingredients"];
        this.loading = false;
      })
      .catch(error => {
        this.error = true;
        this.loading = false;
      });
  }
};
export default new detailsStore();