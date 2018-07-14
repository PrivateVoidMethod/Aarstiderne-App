import { observable } from 'mobx';
import Config from '../../config'


class detailsStore {
  @observable item = null;
  @observable error = false;
  @observable loading = false;

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
        this.loading = false;
      })
      .catch(error => {
        this.error = true;
        this.loading = false;
      });
  }
};
export default new detailsStore();