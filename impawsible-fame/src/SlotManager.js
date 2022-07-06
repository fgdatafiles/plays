var g_sharedSlotManager = null;

var SlotManager = cc.Class.extend({

	m_arrSeq:null,
	m_arrSlot:null,
	m_arrType:null,
	m_iActiveSlot:null,

	ctor:function()
	{
		this.init();        
	},

	init:function()
	{
		g_sharedSlotManager = this;

		this.m_arrSeq 	= [];		
		this.m_arrType	= [];
		this.m_arrSlot 	= [null, null, null];
	},

	pickRandomSequence:function()
	{
		if( GC.TUTORIAL_ENABLED )
		{
			 if( GC.TUTORIAL_PROGRESS < GC.TUTORIAL_STEPS.FINISHED ) {
			 	this.m_arrSeq 	= [0,2,1];	
				this.m_arrType	= [0,1,2];

				return;
			 }

		}
		for( var idx = 0; idx < GC.MAX_SLOTS; idx++ ) 
		{
			this.m_arrSeq.push(  this.getAvailableSlot() );
			this.m_arrType.push( this.getAvailableType() );
		}

		cc.log("SEQUENCE " 	+ this.m_arrSeq);
		cc.log("TYPE " 		+ this.m_arrType);
	},

	sequence:function()
	{
		return this.m_arrSeq;
	},

	slots:function()
	{
		return this.m_arrSlot;
	},

	types:function()
	{
		return this.m_arrType;
	},

	setActiveSlot:function(slot)
	{
		m_iActiveSlot = slot;
	},

	activeSlot:function()
	{
		return m_iActiveSlot;
	},

	getAvailableSlot:function()
	{
		if( this.m_arrSeq.length >= GC.MAX_SLOTS ) return;

		var slot;
		var slotIndex = 0; 

		while( slotIndex > -1 )
        {
        	slot 		= Tools.random( 0, 2 );
        	slotIndex 	= this.m_arrSeq.indexOf( slot );
        }

        return slot;
    },

	getAvailableType:function()
	{
		var slot;
		var slotIndex = 0; 

		while( slotIndex > -1 )
        {
        	slot 		= Tools.random( 0, 2 );
        	slotIndex 	= this.m_arrType.indexOf( slot );
        }

        return slot;
	},

	slotFilledCount:function()
	{
		var count = 0;
		for( var idx = 0; idx < GC.MAX_SLOTS; idx++ ) {
			if( this.m_arrSlot[idx] != null )
				count++;
		}

		return count;
	},

	removeBearFromSlot:function(index, type)
	{
		// Remove from types
		var typeIdx = this.m_arrType.indexOf( type );

        if (typeIdx > -1) {
            this.m_arrType.splice(typeIdx, 1);
        }

        // Remove from sequence        
        var seqIdx = this.m_arrSeq.indexOf( m_iActiveSlot );

        if (seqIdx > -1) {
            this.m_arrSeq.splice(seqIdx, 1);
        }

        // Remove from 
		this.m_arrSlot[m_iActiveSlot].removeFromParent();
        this.m_arrSlot[m_iActiveSlot] = null;	

        g_sharedUILayer.updateCheatLabel();

        if( this.m_arrSeq.length <=0 ) g_sharedGameplayLyr.scheduleSpawnSlots();

	}

});