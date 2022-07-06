//==============================================================================
//  override.js
//  Copyright (c) 2019, Bamtang Games. All Rights Reserved.
//------------------------------------------------------------------------------
/**
 * @fileoverview Overrided functions.
 */
PIXI.Container.prototype.countChildren = function() {
	if ( !this.children ) {
		return 1;
	}
	var count = this.children.length;
	for ( var i = 0, j = this.children.length; i < j; i++ ) {
		if ( this.children[i].countChildren ) {
			count += this.children[i].countChildren();
		}
	}
	return count;
};

