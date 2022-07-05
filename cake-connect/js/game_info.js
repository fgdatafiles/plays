// load/save game score
function GAMEINFO()
{
    // create game info and store to local storage
    this.resetToDefault= function()
    {
        if(this.isStorageSupported() === false)
        {
            console.log("Brouser does not support localstorage");
            return;
        }

        // default value
        var gameDefaultValue = {"ver":1.0,                  // for verion check, reserved for future use 
                                "magic":"04599c49999953745", // for check data, reserved for future use 
                                "totalLevelsCount": GAME_LEVELS.length,
                                "completedLevels": 0,
                                "levelsInfo": new Array(),
                                "soundEnabled":true
                                };

        for(var i = 0; i < GAME_LEVELS.length; i++)
        {
            var level = {   "score": undefined,
                            "totalScore": undefined,
                            "time": undefined
                        };
            
            gameDefaultValue.levelsInfo.push(level);
        }

        var jsonData = JSON.stringify(gameDefaultValue, null, 2);
        localStorage.setItem("gameInfo", jsonData);
        return gameDefaultValue;
    }

    // store sound value in storage
    this.enableSound = function(enabled)
    {
        var obj = this.getGameInfo();
        if(obj === undefined)
            return ;
        
        obj.soundEnabled = enabled;

        var jsonData = JSON.stringify(obj, null, 2);
        localStorage.setItem("gameInfo", jsonData);
    }

    // return true if sound enabled
    this.isSoundEnabled = function()
    {
        var obj = this.getGameInfo();
        if(obj === undefined)
            return false;

        return obj.soundEnabled;
    }

    // return total score for all levels
    this.getTotalScore = function() 
    {
        var obj = this.getGameInfo();
        if(obj === undefined)
            return;

        var score  = 0;
        var completedLevelsNum = this.currentCompletedLevelsNum();
        for(var i = 0; i < completedLevelsNum; ++i)
            score += obj.levelsInfo[i].totalScore;

        return score;
    }

    // return true if all levels completed
    this.isNextLevelAvailable = function()
    {
        console.log("getTotalLevelsNum:" +this.getTotalLevelsNum());
        console.log("currentCompletedLevelsNum:" +this.currentCompletedLevelsNum());

        return this.getTotalLevelsNum() - 1 >= this.currentCompletedLevelsNum()+1; 
    }

    // return how many levels user completed
    this.currentCompletedLevelsNum = function()
    {
        var obj = this.getGameInfo();
        if(obj === undefined)
            return 0;

        // detect how many levels completed
        var count = 0;
        for(var i = 0; i < obj.totalLevelsCount; i++)
        {
            if( obj.levelsInfo[i].score === undefined &&
                obj.levelsInfo[i].totalScore === undefined &&
                obj.levelsInfo[i].time === undefined)
            {
                return count;
            }
            count++;
        }
        return count;
    }

    // get total levels number
    this.getTotalLevelsNum = function()
    {
        var obj = this.getGameInfo();
        if(obj === undefined)
            return 0;

        return obj.totalLevelsCount;
    }

    // get info about given level
    // if return undeined - there error
    this.getInfo = function(index)
    {
        var obj = this.getGameInfo();
        if(obj === undefined)
            return undefined;

        if(index >= obj.totalLevelsCount)
        {
            console.log("getInfo: Index out of bounds");
            return;
        }

        return obj.levelsInfo[index];
    }

    // update info about current level
    // score - score for stars collect
    // total_score - total score per level
    // time - time to complere level
    this.updateInfo = function(index, score, total_score, time)
    {
        var obj = this.getGameInfo();
        if(obj === undefined)
            return ;
        
        if(index >= obj.totalLevelsCount)
        {
            console.log("Index out of bounds");
            return;
        }

        obj.levelsInfo[index].score = score;
        obj.levelsInfo[index].totalScore= total_score;
        obj.levelsInfo[index].time = time;

        // save data
        var jsonData = JSON.stringify(obj, null, 2);
        localStorage.setItem("gameInfo", jsonData);
    }

    // get info from local storage,
    // return undefined if there is error(storage not supported or data is not in storage)
    // return game info object (see resetToDefault function)
    this.getGameInfo = function()
    {
        if(this.isStorageSupported() === false)
        {
            console.log("Brouser does not support localstorage");
            return undefined;
        }

        var jsonData = localStorage["gameInfo"]; 
        if(jsonData === undefined)
        {
            // first time start, init by default                
            return this.resetToDefault();
        }

        return JSON.parse(jsonData);
    }

    // Check if current brouser support localstorage
    this.isStorageSupported = function() 
    {
        try 
        {
            return 'localStorage' in window && window['localStorage'] !== null;
        } 
        catch (e) 
        {
            return false;
        }
    }

    // clear local storage
    this.Clear = function()
    {
        if(this.isStorageSupported() === false)
        {
            console.log("Brouser does not support localstorage");
            return;
        }

        localStorage.clear();
    }            
}
GAMEINFO = new GAMEINFO();
//GAMEINFO.resetToDefault();
//GAMEINFO.Clear();
