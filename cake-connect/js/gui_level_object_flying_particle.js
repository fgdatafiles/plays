// single flying particle 
function FlyingParticle()
{
    this.spline = undefined;
    this.speedRange = {"min": 0.01, "max": 0.02};
    this.scaleRange = {"min": 0.7, "max": 1.5}; // depend on speedRange
    this.strange = {"min": GlobalScale(250), "max":GlobalScale(400)};
    this.sprite = undefined;
    this.container = undefined;	// container to store particle 
    this.manager = undefined; // manager for current particle for quick access to it functions
	

    // remove from container, free resources
    this.Free = function()
    {
	this.container.removeChild(this.sprite);
	this.spline = undefined;
	this.sprite = undefined;
    }

    // container - stage to place particle
    this.Init = function(container, manager)
    {
	this.container = container;
	this.manager = manager;
    }
    
    // Init particle
    // from  - vector {x,y} to start fly from
    // to - vector {x,y} to start fly to
    this.SpawnParticle = function(from, to)
    {
	if(this.container == undefined)
	{
	    console.log("call Init to setup container ");
	    return;
	}

	var speed = UTILS.randomBetween(this.speedRange.min, this.speedRange.max);
	var T2 = this.RandomVectorFrom(from);
	var T3 = this.RandomVectorFrom(to);
	this.spline = new BezierKubic();
	this.spline.Init(from, T2, T3, to, speed);
	
	// init texture
        var factor = (speed - this.speedRange.min)/(this.speedRange.max - this.speedRange.min);
        var scale = this.scaleRange.max - (this.scaleRange.max - this.scaleRange.min)* factor;  
        var particles_array = ["particle_1.png", "particle_2.png", "particle_3.png"];
	this.sprite = PIXI.Sprite.fromImage(particles_array[UTILS.intRandomBetween(0, particles_array.length - 1)]);
	this.sprite.anchor.x = 0.5;
	this.sprite.anchor.y = 0.5;
        this.sprite.scale.x = scale;
        this.sprite.scale.y = scale;
	this.container.addChild(this.sprite);
    }

    this.Update = function()
    {
	if(this.spline === undefined || this.sprite === undefined)
	    return;

	this.spline.Update();
	var pos = this.spline.getCurrentPosition();
	this.sprite.position.x = pos.x;
	this.sprite.position.y = pos.y;
	this.sprite.rotation += 0.03;

	if(this.spline.isComplete())
	{
            SoundManager.Play("onsignreach");
	    var flyingParticleCount = this.manager.star.energy.max/this.manager.star.energy.spawnParticleEvery;
	    var flyingParticleEnergy = Math.round(this.manager.star.energy.max/flyingParticleCount);
	    GAME.stages.game.gui.score.addScore(flyingParticleEnergy);
	    
	    GAME.stages.game.gui.energyProgressBar.TouchSign();
	    var alias = GAME.stages.game.gui.energyProgressBar;
	    alias.SetProgress(alias.GetProgress() + flyingParticleEnergy);

	    // drop itself from list
	    this.manager.linkedList.DeleteByData(this);
	}
    }

    // generate random vector from given vector
    this.RandomVectorFrom = function(vec)
    {
	// in polar coordinates
	var rot = UTILS.randomBetween(0, 2* Math.PI);
	var strength = UTILS.randomBetween(this.strange.min, this.strange.max);
	
	var v = {"x":strength * Math.cos(rot), "y": strength * Math.sin(rot)}; // polar -> local 
	return {"x": vec.x + v.x, "y": vec.y + v.y}; 
    }
}

// manage all particles 
function FlyingParticleManager()
{
    this.rootContainer = undefined; // root container passed to Init function
    this.container = undefined; // contain all particles spawned by manager
    this.linkedList = new LinkedList();
    this.star = undefined;
    this.wasSpawnedAgo = undefined; // how ticks ago manager spawn particle, if undefined - not spawned any particle yet

    // free resources alocated by object
    this.Free = function()
    {
	// call Free from each particle
	this.linkedList.Iterate(function(m, obj){obj.data.Free();});
	this.linkedList.Clear();

	this.rootContainer.removeChild(this.container);
	this.container = undefined;

    }


    // Init object 
    this.Init = function(rootContainer)
    {
        this.wasSpawnedAgo = undefined;
	this.rootContainer = rootContainer;
	this.container = new PIXI.DisplayObjectContainer();
	this.container.position.x = 0;
	this.container.position.y = 0;

	this.rootContainer.addChild(this.container);
    }

    // need to check if last particle was spawned many time ago
    this.isSpawnAgo = function()
    {
        return this.wasSpawnedAgo > 170;   // 170 means game ticks 
    }
    // Spawn particle
    // from - point{x,y} to start fly from
    // to - point{x,y} to end fly 
    // star - star game object which spawn particle
    this.SpawnParticle= function(from, to, star)
    {
        this.wasSpawnedAgo = 0;
	this.star = star;

	var particle = new FlyingParticle(); 
	particle.Init(this.container, this);
	particle.SpawnParticle(from, to);
	this.linkedList.AddElement(particle);
    }

    // called to update particles state
    this.Update = function()
    {
        //console.log("was spawned " +this.wasSpawnedAgo);
        this.wasSpawnedAgo +=1;
	this.linkedList.Iterate(function(m, p){p.data.Update();});
    }
}



