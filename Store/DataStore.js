import { observable, action, decorate } from 'mobx';

class DataStore{
    hlthparams = {
        hba1c:'',
        serchol:'',
        reninv:'',
        smoke:'',
        dur:'',
        cordis:'',
        gfu:'',
    }
    
    updateHBA1C(val){
        this.hlthparams.hba1c=val;
    }

    updateSerChol(val){
        this.hlthparams.serchol=val;
    }

    updateRenInv(val){
        this.hlthparams.reninv=val;
    }

    updateSmoke(val){
        this.hlthparams.smoke=val;
    }

    updateDur(val){
        this.hlthparams.dur=val;
    }

    updateHisCorDis(val){
        this.hlthparams.cordis=val;
    }

    updateRegFollowUp(val){
        this.hlthparams.gfu=val;
    }
}

decorate(DataStore,{
    hlthparams:observable,
    updateHBA1C:action,
    updateSerChol:action,
    updateRenInv:action,
    updateSmoke:action,
    updateDur:action,
    updateHisCorDis:action,
    updateRegFollowUp:action

});

export default new DataStore();