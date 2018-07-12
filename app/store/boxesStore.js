 import { observable } from 'mobx';


class boxesStore {
    @observable loading = true;

    StartLoading() {
        this.loading = true;
        return loading;
      }    
};
export default new boxesStore();