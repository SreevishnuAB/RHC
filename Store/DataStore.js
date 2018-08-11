import { observable, action, decorate } from 'mobx';

class DataStore{
    //to store image selected by user
    imageSelected = {id:''};
    
    //to store health parameters
    hlthParams = {
        hba1c:'',
        serchol:'',
        reninv:'',
        smoke:'',
        dur:'',
        cordis:'',
        gfu:'',
    };
    
    updateImageSelected(imgNum){
        this.imageSelected.id=imgNum;
    }

    updateHBA1C(val){
        this.hlthParams.hba1c=val;
    }

    updateSerChol(val){
        this.hlthParams.serchol=val;
    }

    updateRenInv(val){
        this.hlthParams.reninv=val;
    }

    updateSmoke(val){
        this.hlthParams.smoke=val;
    }

    updateDur(val){
        this.hlthParams.dur=val;
    }

    updateHisCorDis(val){
        this.hlthParams.cordis=val;
    }

    updateRegFollowUp(val){
        this.hlthParams.gfu=val;
    }
}

decorate(DataStore,{
    imageSelected:observable,
    hlthparams:observable,
    updateHBA1C:action,
    updateSerChol:action,
    updateRenInv:action,
    updateSmoke:action,
    updateDur:action,
    updateHisCorDis:action,
    updateRegFollowUp:action,
    updateImageSelected:action
});

export default new DataStore();