 import { observable } from 'mobx';
 import Config from '../../config'


class boxesStore {
     @observable boxes = [];
     @observable error = false;  
     @observable loading = false;

    FetchBoxes() {
        this.loading = true;
        let data = {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        };
        return fetch(Config.API_URL + "/products/boxes")
          .then(response => {
            if (!response.ok) {
              return response.json().then(err => {
                throw err;
              });
            }
            return response.json();
          })
          .then(responseJson => {
            this.boxes = responseJson["d"]["Categories"]
            this.loading = false;
          })
          .catch(error => {
              this.error = true;
              this.loading = false;
          });
      }     
};
export default new boxesStore();