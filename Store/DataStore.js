import { observable, action, decorate, computed } from 'mobx';

class DataStore{
    //to store image selected by user
    currentRetina = {image:0};
    futureRetina = {image:0};

    //to store health parameters
    hlthParams = {
        hba1c:0,
        serchol:0,
        reninv:{value:0,label:''},
        smoking:{value:0,label:''},
        duration:{value:0,label:''},
        hiscordis:{value:0,label:''},
        gfu:{value:0,label:''},
        years:0,
    };

    updateImageSelected(imgNum){
        this.currentRetina.image = parseInt(imgNum);
    }

    updateHBA1C(val){
        this.hlthParams.hba1c = val;
    }

    updateSerChol(val){
        this.hlthParams.serchol = parseFloat(val);
    }

    updateRenInv(obj){
        this.hlthParams.reninv = obj;
    }

    updateSmoking(obj){
        this.hlthParams.smoking = obj;
    }

    updateDuration(obj){
        this.hlthParams.duration = obj;
    }

    updateHisCorDis(obj){
        this.hlthParams.hiscordis = obj;
    }

    updateRegFollowUp(obj){
        this.hlthParams.gfu = obj;
    }

    updateNoOfYears(val){
        this.hlthParams.years=val;
    }

    updateFutureRetina(val){
        this.futureRetina.image = val;
    }

    generateHBA1CScore(){
        let hba1cVal = this.hlthParams.hba1c;
        if(hba1cVal > 15) return 10;
        else if(hba1cVal > 14) return 9;
        else if(hba1cVal > 13) return 8;
        else if(hba1cVal > 12) return 7;
        else if(hba1cVal > 11) return 6;
        else if(hba1cVal > 10) return 5;
        else if(hba1cVal > 9) return 4;
        else if(hba1cVal > 8) return 3;
        else if(hba1cVal > 7) return 2;
        else if(hba1cVal > 6) return 1;
        else return 0;
    }

    generateSerCholScore(){
        let sercholVal = this.hlthParams.serchol;
        if(sercholVal >= 400) return 3.5;
        else if(sercholVal > 350) return 3;
        else if(sercholVal > 300) return 2.5;
        else if(sercholVal > 250) return 2;
        else if(sercholVal > 200) return 1.5;
        else if(sercholVal > 150) return 1;
        else if(sercholVal > 100) return 0.5;
        else return 0;
    }

    generateFutureRetina(){
        let totalScore = (this.generateHBA1CScore() + this.generateSerCholScore() + this.hlthParams.reninv.value + this.hlthParams.smoking.value + this.hlthParams.duration.value + this.hlthParams.hiscordis.value + this.hlthParams.gfu.value);
        let futureScore = totalScore * this.hlthParams.years;
        let finalRetina = (this.currentRetina.image + futureScore > 100)? 100: this.currentRetina.image + futureScore;
        this.updateFutureRetina(parseInt(finalRetina)); 
    }
}

decorate(DataStore,{
    currentRetina:observable,
    hlthparams:observable,
    futureRetina:observable,
    updateHBA1C:action,
    updateSerChol:action,
    updateRenInv:action,
    updateSmoking:action,
    updateDuration:action,
    updateHisCorDis:action,
    updateRegFollowUp:action,
    updateImageSelected:action,
    updateFutureRetina:action
});

export default new DataStore();