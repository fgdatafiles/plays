var LOCALSTORAGE_SCORE = "score";

function CLocalStorage(szName){
    
    this._init = function(szName){
        //CHECK IF LOCAL STORAGE IS AVAILABLE ON CURRENT DEVICE
        try{
            this.setItem("ls_available","ok");
        }catch(evt){
            s_bStorageAvailable = false;
            return;
        }
        //localStorage.clear();
        var bFlag = localStorage.getItem(szName);

        if(bFlag === null || bFlag === undefined){   
            localStorage.setItem(szName, true);
            
            var aScore = new Array();
            for(var i=0; i<12; i++){
                aScore[i] = 0;
            }
            this.setItemJson(LOCALSTORAGE_SCORE,aScore);
           
        }
    };
    
    this.setItem = function(szKey, szValue){
        if(s_bStorageAvailable){
            localStorage.setItem(szName+"_"+szKey, szValue);
        }
        
    };
    
    this.getItem = function(szKey){
        if(!s_bStorageAvailable){
            return 0;
        }
        return localStorage.getItem(szName+"_"+szKey);
    };
    
    this.setItemJson = function(szKey, jsonObj){
        if(s_bStorageAvailable){
            localStorage.setItem(szName+"_"+szKey, JSON.stringify(jsonObj));
        }
        
    };
    
    this.getItemJson = function(szKey){
        if(s_bStorageAvailable){
            return JSON.parse(localStorage.getItem(szName+"_"+szKey));
        }
        return 0;
    };

    this._init(szName);
    
}