//==============================================================================
//  swit.js
//  Copyright (c) 2019, Bamtang Games. All Rights Reserved.
//------------------------------------------------------------------------------
/**
 * @constructor
 * @struct
 */
function DebugGame() {
	DebugGame.instance = this;
};

DebugGame.instance = null;

DebugGame.prototype.free = function() {
	DebugGame.instance = null;
};

DebugGame.prototype.onDebugInit = function() {
};

/** @param {Object} object */
DebugGame.prototype.onDebugCreateObject = function( x, y, object ) {
};

/** @param {Object} object */
DebugGame.prototype.onDebugRemoveObject = function( object ) {
};

/** @param {number} keyCode */
DebugGame.prototype.onDebugKeyDown = function( keyCode ) {
};

/** @param {number} keyCode */
DebugGame.prototype.onDebugKeyUp = function( keyCode ) {
};

DebugGame.prototype.onDebugPointerPress = function( e ) {
	if ( Application.sandbox['addObjectEnable'] && Application.sandbox['objectToCreate'] ) {
		var log = '[SANDBOX] [ADD OBJECT] ';
		for ( var prop in Application.sandbox['objectToCreate'] ) {
			log += prop + ':' + Application.sandbox['objectToCreate'][prop] + ', ';
		}
		Application.log( log.substring( 0, log.length - 2 ) );

		this.onDebugCreateObject( e.data.global.x,
								  e.data.global.y,
								  Application.sandbox['objectToCreate'] );
	}
};

DebugGame.prototype.onDebugUpdate = function( dt ) {
};

DebugGame.prototype.onDebugPointerRelease = function( e ) {
};

DebugGame.prototype.onDebugPointerPressAndRelease = function( e ) {
};

DebugGame.prototype.onDebugPointerOver = function( e ) {
};

DebugGame.prototype.onDebugPointerMove = function( e ) {
};

DebugGame.prototype.onDebugGetSandboxConfig = function() {
	return [];
};

DebugGame.prototype.onDebugSandboxLoadConfig = function() {
};

/**
 * @constructor
 * @struct
 */
function DebugObject() {
	this.onDebugInit();
};

DebugObject.prototype.free = function() {

};

DebugObject.prototype.onDebugInit = function() {

};

DebugObject.prototype.onDebugDelete = function() {
};

/** @param {number} dt */
DebugObject.prototype.onDebugUpdate = function( dt ) {
	var sandbox = Application.sandbox;
	if ( sandbox ) {
		if ( sandbox['objectSelected'] && sandbox['objectViewPropertiesRealTime'] ) {
			if ( sandbox['objectSelected'] === this ) {
				sandbox['setObjectViewProperties']( this );
			}
		}
	}
};

DebugObject.prototype.onDebugPointerPress = function( e ) {
};

/** @param {Object} data */
DebugObject.prototype.onDebugChangeProperties = function( data ) {
	Application.info( 'SANDBOX OBJECT PROPERTY :: Change [' + data['property'] + '] by [' + data['value'] + ']' );
};

DebugObject.prototype.onDebugSelectObject = function() {
	if ( Application.sandbox ) {
		Application.sandbox['setObjectViewProperties']( this );
	}
};

/** @return {Object} */
DebugObject.prototype.onDebugGetProperties = function() {
	var properties = [];
	return properties;
};


/**
 * Creates a Path.
 * @constructor
 * @param {Object} pathXml
 */
function Path( pathXml ) {
	this.m_sections = [];
	this.m_length = 0;

	var sections = pathXml['point'].length();
	for ( var k = 0; k < sections; ++k ) {
		var order = pathXml['point'][k]['n'];
		var points = [];
		for ( var i = 0; i < order; ++i ) {
			points.push( new Vector2D( parseFloat( pathXml['point'][k]['x' + i] ),
									 parseFloat( pathXml['point'][k]['y' + i] ) ) );
		}
		points.push( new Vector2D( parseFloat( pathXml['point'][( k + 1 ) % sections]['x0'] ),
								 parseFloat( pathXml['point'][( k + 1 ) % sections]['y0'] ) ) );
		var section = new PathSection( points, this.m_length );
		this.m_length += section.length();
		this.m_sections.push( section );
	}
}

Path.prototype.free = function() {
	this.m_sections = null;
};

Path.prototype.update = function( distance, actor ) {
	this.m_sections[actor['pathPosition']['section']].update( distance, actor );
	if ( actor['pathPosition']['point'] ) {
		actor.setPosition( actor['pathPosition']['point']['x'], actor['pathPosition']['point']['y'] );
	}
	else {
		if ( actor['pathPosition']['section'] < this.m_sections.length - 1 ) {
			actor['pathPosition']['section'] += 1;
		}
		else {
			actor['pathPosition']['section'] = 0;
			actor['pathPosition']['distance'] = 0;
		}
		this.m_sections[actor['pathPosition']['section']].update( distance, actor );
		if ( actor['pathPosition']['point'] ) {
			actor.setPosition( actor['pathPosition']['point']['x'], actor['pathPosition']['point']['y'] );
		}
		else {
			Application.info( 'ERROR' );
		}
	}
};

Path.prototype.toString = function() {
	var ret = 'Path:';
	var l = this.m_sections.length;
	for ( var k = 0; k < l; ++k ) {
		ret += "\n" + this.m_sections[k];
	}
	return ret;
};

/**
 * Creates a Path Section.
 * @constructor
 * @param {Array} basePoints
 * @param {number} startLength
 */
function PathSection( basePoints, startLength ) {
	this.m_order = basePoints.length - 1;
	this.m_points = basePoints;
	this.m_initLength = startLength;
	this.m_length = 0;
	this.m_oldPos = null;

	switch ( this.m_order ) {
		case PathSection.CONIC:
		case PathSection.CUBIC:
		case PathSection.LINE:
			this.m_dir = new Vector2D( this.m_points[this.m_order].x - this.m_points[0].x,
								 this.m_points[this.m_order].y - this.m_points[0].y );
			this.m_length = this.m_dir.length();
			this.m_angle = this.m_dir.angle();
			this.m_dir.normalize();
			break;
			break;
		default:
			Application.error( 'Invalid path section order: ' + this.m_order );
	}
}

PathSection.LINE = 1;
PathSection.CONIC = 2;
PathSection.CUBIC = 3;

/** @protected */
PathSection.SECTIONS = 3;

PathSection.prototype.free = function() {
	this.m_points = null;
};

PathSection.prototype.length = function() {
	return this.m_length;
};

PathSection.prototype.update = function( deltaDistance, actor ) {
	var dist = actor['pathPosition']['distance'] + deltaDistance;
	var t;

	if ( dist <= this.m_initLength + this.m_length ) {
		switch ( this.m_order ) {
			case PathSection.LINE:
				actor['pathPosition']['point'] = this.m_dir.clone();
				actor['pathPosition']['point'].scale( dist - this.m_initLength );
				actor['pathPosition']['point'].add( this.m_points[0] );
				actor['pathPosition']['tangent'] = this.m_angle;
				break;
			case PathSection.CONIC:
				actor['pathPosition']['point'] = new Vector2D();
				t = ( dist - this.m_initLength ) / this.m_length;
				actor['pathPosition']['point']['x'] = ( 1 - t ) * ( 1 - t ) * this.m_points[0].x +
														 2 * ( 1 - t ) * t * this.m_points[1].x +
														 t * t * this.m_points[2].x;

				actor['pathPosition']['point']['y'] = ( 1 - t ) * ( 1 - t ) * this.m_points[0].y +
														 2 * ( 1 - t ) * t * this.m_points[1].y +
														 t * t * this.m_points[2].y;
				if ( this.m_oldPos ) {
					this.m_oldPos.subtract( actor['pathPosition']['point'] );
					this.m_oldPos.scale( -1 );
					actor['pathPosition']['tangent'] = this.m_oldPos.angle();
				}
				this.m_oldPos = actor['pathPosition']['point'];
				break;
			case PathSection.CUBIC:
				actor['pathPosition']['point'] = new Vector2D();
				t = ( dist - this.m_initLength ) / this.m_length;
				actor['pathPosition']['point']['x'] = ( 1 - t ) * ( 1 - t ) * ( 1 - t ) * this.m_points[0].x +
														 3 * ( 1 - t ) * ( 1 - t ) * t * this.m_points[1].x +
														 3 * ( 1 - t ) * t * t * this.m_points[2].x +
														 t * t * t * this.m_points[3].x;

				actor['pathPosition']['point']['y'] = ( 1 - t ) * ( 1 - t ) * ( 1 - t ) * this.m_points[0].y +
														 3 * ( 1 - t ) * ( 1 - t ) * t * this.m_points[1].y +
														 3 * ( 1 - t ) * t * t * this.m_points[2].y +
														 t * t * t * this.m_points[3].y;
				if ( this.m_oldPos ) {
					this.m_oldPos.subtract( actor['pathPosition']['point'] );
					this.m_oldPos.scale( -1 );
					actor['pathPosition']['tangent'] = this.m_oldPos.angle();
				}
				this.m_oldPos = actor['pathPosition']['point'];
				break;
			default:
				Application.error( 'Invalid path section order: ' + this.m_order );
		}
		actor['pathPosition']['distance'] = dist;
	}
	else {
		actor['pathPosition']['point'] = null;
		this.m_oldPos = null;
	}
};

PathSection.prototype.toString = function() {
	var ret = 'section:';
	for ( var k = 0; k < this.m_points.length; ++k ) {
		ret += this.m_points[k] + ' ';
	}
	return ret;
};


/**
 * @constructor
 */
function SMath() { }


/**
 * Returns the signed direction in degrees of a vector ( x1, y1 ) and ( x2, y2 ).
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} angle in radians
 */
SMath.radsFromAtoB = function( x1, y1, x2, y2 ) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	if ( dx === 0 ) {
		return ( dy < 0 ) ? -Math.PI * 0.5 : Math.PI * 0.5;
	}
	var angle = Math.atan2( dy, dx );
	while ( angle > Math.PI ) {
		angle -= Math.PI * 2;
	}
	while ( angle < -Math.PI ) {
		angle += Math.PI * 2;
	}
	return angle;
};

/**
 * Returns the direction in degrees of a vector (dx, dy).
 * @param {number} dx
 * @param {number} dy
 * @return {number} angle in degrees
 */
SMath.degrees = function( dx, dy ) {
	return Math.atan2( dx, dy ) * SMath.RAD_TO_DEG;
};

/**
 * Returns an angle in radians given an angle in degrees.
 * @param {number} degrees
 * @return {number} angle in radians
 */
SMath.toRadians = function( degrees ) {
	return degrees * SMath.DEG_TO_RAD;
};

/**
 * Returns an angle in degrees given an angle in radians.
 * @param {number} radians
 * @return {number} angle in degrees
 */
SMath.toDegrees = function( radians ) {
	return radians * SMath.RAD_TO_DEG;
};

/**
 * Limites the value given betwen min and max.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number} value limited
 */
SMath.setRange = function( value, max, min ) {
	return ( value > max ) ? max : ( ( value < min ) ? min : value );
};

/**
 * Returns the absolute value of a number.
 * @param {number} num
 * @return {number} absolute value of num
 */
SMath.abs = function( num ) {
	return ( num < 0 ) ? -num : num;
};

/**
 * Returns the sign of a number.
 * @param {number} num
 * @return {number} the sign of the given number
 */
SMath.sign = function( num ) {
	return ( num > 0 ) ? 1 : ( ( num === 0 ) ? 0 : -1 );
};

/**
 * A fast Math.sin implementation.
 * @param {number} x
 * @return {number}
 */
SMath.fastSin = function( x ) {
	x = x % 6.28318531;
	if ( x < -3.14159265 ) {
		x += 6.28318531;
	}
	else if ( x > 3.14159265 ) {
		x -= 6.28318531;
	}

	if ( x < 0 ) {
		return 1.27323954 * x + 0.405284735 * x * x;
	}
	return 1.27323954 * x - 0.405284735 * x * x;
};

/**
 * A fast Math.cos implementation.
 * @param {number} x
 * @return {number}
 */
SMath.fastCos = function( x ) {
	x = x % 6.28318531;
	x += 1.57079632;
	if ( x < -3.14159265 ) {
		x += 6.28318531;
	}
	else if ( x > 3.14159265 ) {
		x -= 6.28318531;
	}

	if ( x < 0 ) {
		return 1.27323954 * x + 0.405284735 * x * x;
	}
	return 1.27323954 * x - 0.405284735 * x * x;
};

/**
 * Returns the absolute area of a 2D polygon.
 * @param {Array<Object>} polygon
 * @return {number}
 */
SMath.polygonArea = function( polygon ) {
	var sumLeft = 0;
	var sumRight = 0;
	if ( polygon.length < 3 ) {
		return 0;
	}
	for ( var i = 0; i < polygon.length; i++ ) {
		if ( i !== polygon.length - 1 ) {
			var pointA = polygon[i];
			var pointB = polygon[i + 1];
		} else {
			var pointA = polygon[i];
			var pointB = polygon[0];
		}
		sumLeft += pointA.x * pointB.y;
		sumRight += pointA.y * pointB.x;
	}

	return SMath.abs( 0.5 * ( sumLeft - sumRight ) );
};

/**
 * Returns if given point {x,y} is inside a simple convex polygon.
 * @param {Object} point
 * @param {Array<Object>} polygon
 * @param {boolean} inclusive
 * @return {boolean}
 */
SMath.polyContainsPoint = function( point, polygon, inclusive ) {
	var isInside = false;
	if ( !polygon || polygon.length < 3 ) {
		return false;
	};

	var polyArea = SMath.polygonArea( polygon );
	var sumAreas = 0;

	for ( var i = 0; i < polygon.length; i++ ) {
		var polygonPointA = polygon[i];
		if ( i !== polygon.length - 1 ) {
			var polygonPointB = polygon[i + 1];
		} else {
			var polygonPointB = polygon[0];
		}
		var subPoly = [polygonPointA, polygonPointB, point];
		sumAreas += SMath.polygonArea( subPoly );
	}

	if ( polyArea === sumAreas || SMath.abs( polyArea - sumAreas ) <= 1 ) {
		if ( inclusive ) {
			return true;
		} else {
			for ( var i = 0; i < polygon.length; i++ ) {
				if ( i !== polygon.length - 1 ) {
					var line = [polygon[i], polygon[i + 1]];
				} else {
					var line = [polygon[i], polygon[0]];
				}
				if ( SMath.lineContainsPoint( point, line ) ) {
					return false;
				}
			}
			return true;
		}
	} else {
		return false;
	}
};

/**
 * Returns if given point {x,y} is contained on line.
 * @param {Object} point
 * @param {Array<Object>} line
 * @return {boolean}
 */
SMath.lineContainsPoint = function( point, line ) {
	var isInside = false;
	if ( !line || line.length < 2 ) {
		return false;
	};

	var tx = ( point.x - line[0].x ) / ( line[1].x - line[0].x );
	var ty = ( point.y - line[0].y ) / ( line[1].y - line[0].y );

	return ( tx >= 0 && tx <= 1 && ty >= 0 && ty <= 1 );
};

/**
 * Returns if rect A contains rect B.
 * @param {Array<Object>} polygonA
 * @param {Array<Object>} polygonB
 * @return {boolean}
 */
SMath.rectContainsRect = function( polygonA, polygonB ) {
	return ( polygonB[2].x <= polygonA[2].x &&
			 polygonB[0].x >= polygonA[0].x &&
			 polygonB[2].y <= polygonA[2].y &&
			 polygonB[0].y >= polygonA[0].y );
};

/**
 * @param {Array<Object>} lineA
 * @param {Array<Object>} lineB
 * @return {boolean}
 */

SMath.lineIntersectLine = function( lineA, lineB ) {

	var denominator;
	var a;
	var b;
	var numerator1;
	var numerator2;
	var result = { x: 0, y: 0 };

	denominator = ( ( lineB[1].y - lineB[0].y ) * ( lineA[1].x - lineA[0].x ) ) - ( ( lineB[1].x - lineB[0].x ) * ( lineA[1].y - lineA[0].y ) );
	if ( denominator == 0 ) {
		return false;
	}
	a = lineA[0].y - lineB[0].y;
	b = lineA[0].x - lineB[0].x;
	numerator1 = ( ( lineB[1].x - lineB[0].x ) * a ) - ( ( lineB[1].y - lineB[0].y ) * b );
	numerator2 = ( ( lineA[1].x - lineA[0].x ) * a ) - ( ( lineA[1].y - lineA[0].y ) * b );
	a = numerator1 / denominator;
	b = numerator2 / denominator;


	/*
	 x = line2StartX + ( b * ( line2EndX - line2StartX ) );
	 y = line2StartX + ( b * ( line2EndY - line2StartY ) );
	 */
	return ( a > 0 && a < 1 && b > 0 && b < 1 );
};

/**
 * @param {Array<Object>} line
 * @param {Array<Object>} polygon
 * @return {boolean}
 */
SMath.polyContainsLine = function( line, polygon ) {
	for ( var i = 0; i < polygon.length; i++ ) {
		if ( i !== polygon.length - 1 ) {
			var polyLine = [polygon[i], polygon[i + 1]];
		} else {
			var polyLine = [polygon[i], polygon[0]];
		}

		if ( SMath.lineIntersectLine( polyLine, line ) ) {
			return true;
		}
	}
	return false;
};

/**
 * Linear interpolation with alpha as speed and dt.
 * @param {number} from
 * @param {number} to
 * @param {number} alpha
 * @param {number} dt
 * @return {number}
 */
SMath.lerp = function( from, to, alpha, dt ) {
	return ( to - from ) * alpha * ( dt / 1000 );
};

/** @const */
SMath.RAD_TO_DEG = 57.2957795;
/** @const */
SMath.DEG_TO_RAD = 0.0174533;
/** @const */
SMath._180_over_PI = 57.2957795;

/**
 * @constructor
 */
function ScrollHandler() {
	this.tweenScroll = null;
	this.index = 0;
	this.maxIndex = 0;
	this.duration = 2000;
	this.x = 0;
	this.y = 0;

	this.displaceX = 0;
	this.displaceY = 0;
	this.m_onUpdate = null;
	this.m_onUpdateCaller = null;
	this.m_onComplete = null;
	this.m_onCompleteCaller = null;
	this.m_onStart = null;
	this.m_onStartCaller = null;
}
ScrollHandler.prototype.free = function() {
	this.cancel();
	if ( this.tweenScroll ) {
		this.tweenScroll.free();
		this.tweenScroll = null;
	}
	this.m_onUpdate = null;
	this.m_onUpdateCaller = null;
	this.m_onComplete = null;
	this.m_onCompleteCaller = null;
	this.m_onStart = null;
	this.m_onStartCaller = null;
};

ScrollHandler.prototype.goto = function( i ) {

	this.tweenScroll = new Tween( this )
					  .to( { x:this.displaceX * i, y:this.displaceY * i }, this.duration )
					  .easing( TweenEasing.BackOut )
					  .onUpdate( this.tweenUpdate )
					  .onComplete( this.tweenComplete );
	this.tweenScroll.start();
	this.index = i;

	if ( this.m_onStart ) {
		this.m_onStart.call( this.m_onStartCaller, this );
	}
};

ScrollHandler.prototype.setIndex = function( i ) {
	this.index = i;
	this.x = this.index * this.displaceX;
	this.y = this.index * this.displaceY;
};

ScrollHandler.prototype.addStartListener = function( caller, command ) {
	this.m_onStart = command;
	this.m_onStartCaller = caller;
};

ScrollHandler.prototype.addUpdateListener = function( caller, command ) {
	this.m_onUpdate = command;
	this.m_onUpdateCaller = caller;
};

ScrollHandler.prototype.addCompleteListener = function( caller, command ) {
	this.m_onComplete = command;
	this.m_onCompleteCaller = caller;
};

ScrollHandler.prototype.cancel = function() {
	if ( !this.tweenScroll ) {
		return;
	}

	TweenManager.instance.remove( this.tweenScroll );
	this.tweenScroll = null;
};

ScrollHandler.prototype.next = function() {
	if ( this.tweenScroll ) { return; }

	if ( this.index >= this.maxIndex ) { return; }
	this.goto( this.index + 1 );
};

ScrollHandler.prototype.lastNext = function() {
	if ( this.tweenScroll ) { return; }
	this.goto( this.maxIndex );
};

ScrollHandler.prototype.lastBack =  function() {
	if ( this.tweenScroll ) { return; }
	this.goto( 0 );
};

ScrollHandler.prototype.back = function() {
	if ( this.tweenScroll ) { return; }

	if ( this.index <= 0 ) { return; }
	this.goto( this.index - 1 );
};

ScrollHandler.prototype.tweenUpdate = function( tw ) {
	if ( this.m_onUpdate ) {
		this.m_onUpdate.call( this.m_onUpdateCaller, this );
	}
};

ScrollHandler.prototype.tweenComplete = function( tw ) {
	if ( this.m_onComplete ) {
		this.m_onComplete.call( this.m_onCompleteCaller, this );
	}
	this.tweenScroll = null;
};

/**
 * @constructor
 * @param {number=} seed
 */
function SRandom( seed ) {
	if ( typeof seed === 'undefined' ) {
		seed = 0;
	}
	else {
		this.m_seed = seed;
	}
	if ( this.m_seed <= 0 ) {
		this.srand();
	}
	this.m_initSeed = this.m_seed;
	Application.info( 'SEED: ' + this.m_seed );

	this.random();
}

SRandom.prototype.reset = function() {
	this.m_seed = this.m_initSeed;
	this.random();
};

SRandom.prototype.random = function() {
	this.m_seed = ( this.m_seed * 16807 ) % 2147483647;
	return ( this.m_seed / 2147483647 );
};

SRandom.prototype.srand = function() {
	this.m_seed = 1 + Math.floor( Math.random() * 2147483646 );
};

SRandom.prototype.randomInt = function( min, max ) {
	return ( min + Math.floor( this.random() * ( max - min + 1 ) ) );
};

SRandom.prototype.getArrayIndex = function( arraySize, avoidIndex ) {
	if ( typeof avoidIndex === 'undefined' ) {
		avoidIndex = -1;
	}

	if ( arraySize > 1 ) {
		var index = this.randomInt( 0, arraySize - 1 );
		if ( index == avoidIndex ) {
			index = ( index + 1 ) % arraySize;
		}
		return index;
	}
	return ( arraySize < 1 ) ? -1 : 0;
};

SRandom.prototype.shuffleArray = function( vectorToShuffle ) {
	var k = vectorToShuffle.length - 1;
	while ( k > 0 ) {
		var index = Math.floor( this.random() * ( k + 1 ) );
		var tmp = vectorToShuffle[k];
		vectorToShuffle[k] = vectorToShuffle[index];
		vectorToShuffle[index] = tmp;
		--k;
	}
};

/**
 * Create a TweenManager.
 * @constructor
 */
function TweenManager () {
	this._tweens = [];
	TweenManager.instance = this;
}

TweenManager.prototype.getAll = function() {
	return this._tweens;
};

TweenManager.prototype.removeAll = function() {
	this._tweens = [];
};

/**
* @param {Tween} tween
*/
TweenManager.prototype.add = function( tween ) {
	this._tweens.push( tween );
};

/**
* @param {Tween} tween
*/
TweenManager.prototype.remove = function( tween ) {
	var i = this._tweens.indexOf( tween );
	if ( i !== -1 ) {
		this._tweens.splice( i, 1 );
	}
};
/**
* @param {number=} time
*/
TweenManager.prototype.update = function( time ) {

	if ( this._tweens.length === 0 ) {
		return false;
	}
	var i = 0, numTweens = this._tweens.length;
	time = time !== undefined ? time : ( typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined ? window.performance.now() : Date.now() );

	while ( i < numTweens ) {
		if ( this._tweens[ i ] && this._tweens[ i ].update( time ) ) {
			i ++;
		}
		else {
			this._tweens[i].free();
			this._tweens.splice( i, 1 );
			numTweens --;
		}
	}
	return true;
};


/**
 * Create a TweenEasing.
 * @constructor
 */
function TweenEasing () {
}

TweenEasing.LinearNone = function( k ) {
	return k;
};

TweenEasing.QuadraticIn = function( k ) {
	return k * k;
};

TweenEasing.QuadraticOut = function( k ) {
	return k * ( 2 - k );
};

TweenEasing.QuadraticInOut = function( k ) {
	if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
	return - 0.5 * ( --k * ( k - 2 ) - 1 );
};

TweenEasing.CubicIn = function( k ) {
	return k * k * k;
};

TweenEasing.CubicOut = function( k ) {
	return --k * k * k + 1;
};

TweenEasing.CubicInOut = function( k ) {
	if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
	return 0.5 * ( ( k -= 2 ) * k * k + 2 );
};

TweenEasing.QuarticIn = function( k ) {
	return k * k * k * k;
};

TweenEasing.QuarticOut = function( k ) {
	return 1 - ( --k * k * k * k );
};

TweenEasing.QuarticInOut = function( k ) {
	if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k;
	return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );
};

TweenEasing.QuinticIn = function( k ) {
	return k * k * k * k * k;
};

TweenEasing.QuinticOut = function( k ) {
	return --k * k * k * k * k + 1;
};

TweenEasing.QuinticInOut = function( k ) {
	if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
	return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );
};

TweenEasing.SinusoidalIn = function( k ) {
	return 1 - Math.cos( k * Math.PI / 2 );
};

TweenEasing.SinusoidalOut = function( k ) {
	return Math.sin( k * Math.PI / 2 );
};

TweenEasing.SinusoidalInOut = function( k ) {
	return 0.5 * ( 1 - Math.cos( Math.PI * k ) );
};

TweenEasing.ExponentialIn = function( k ) {
	return k === 0 ? 0 : Math.pow( 1024, k - 1 );
};

TweenEasing.ExponentialOut = function( k ) {
	return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );
};

TweenEasing.ExponentialInOut = function( k ) {
	if ( k === 0 ) return 0;
	if ( k === 1 ) return 1;
	if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
	return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );
};

TweenEasing.CircularIn = function( k ) {
	return 1 - Math.sqrt( 1 - k * k );
};

TweenEasing.CircularOut = function( k ) {
	return Math.sqrt( 1 - ( --k * k ) );
};

TweenEasing.CircularInOut = function( k ) {
	if ( ( k *= 2 ) < 1 ) return - 0.5 * ( Math.sqrt( 1 - k * k ) - 1 );
	return 0.5 * ( Math.sqrt( 1 - ( k -= 2 ) * k ) + 1 );
};

TweenEasing.ElasticIn = function( k ) {
	var s, a = 0.1, p = 0.4;
	if ( k === 0 ) return 0;
	if ( k === 1 ) return 1;
	if ( !a || a < 1 ) { a = 1; s = p / 4; }
	else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
	return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
};

TweenEasing.ElasticOut = function( k ) {
	var s, a = 0.1, p = 0.4;
	if ( k === 0 ) return 0;
	if ( k === 1 ) return 1;
	if ( !a || a < 1 ) { a = 1; s = p / 4; }
	else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
	return ( a * Math.pow( 2, - 10 * k ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );
};

TweenEasing.ElasticInOut = function( k ) {
	var s, a = 0.1, p = 0.4;
	if ( k === 0 ) return 0;
	if ( k === 1 ) return 1;
	if ( !a || a < 1 ) { a = 1; s = p / 4; }
	else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
	if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
	return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;
};

TweenEasing.BackIn = function( k ) {
	var s = 1.70158;
	return k * k * ( ( s + 1 ) * k - s );
};

TweenEasing.BackOut = function( k ) {
	var s = 1.70158;
	return --k * k * ( ( s + 1 ) * k + s ) + 1;
};

TweenEasing.BackInOut = function( k ) {
	var s = 1.70158 * 1.525;
	if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
	return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );
};

TweenEasing.BounceIn = function( k ) {
	return 1 - TweenEasing.BounceOut( 1 - k );
};

TweenEasing.BounceOut = function( k ) {
	if ( k < ( 1 / 2.75 ) ) {
		return 7.5625 * k * k;
	} else if ( k < ( 2 / 2.75 ) ) {
		return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
	} else if ( k < ( 2.5 / 2.75 ) ) {
		return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
	} else {
		return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
	}
};

TweenEasing.BounceInOut = function( k ) {
	if ( k < 0.5 ) return TweenEasing.BounceIn( k * 2 ) * 0.5;
	return TweenEasing.BounceOut( k * 2 - 1 ) * 0.5 + 0.5;
};

/**
 * Create a TweenInterpolation.
 * @constructor
 */
function TweenInterpolation () {
}

TweenInterpolation.Linear = function( v, k ) {
	var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TweenInterpolation.UtilsLinear;
	if ( k < 0 ) return fn( v[ 0 ], v[ 1 ], f );
	if ( k > 1 ) return fn( v[ m ], v[ m - 1 ], m - f );
	return fn( v[ i ], v[ i + 1 > m ? m : i + 1 ], f - i );
};

TweenInterpolation.Bezier = function( v, k ) {
	var b = 0, n = v.length - 1, pw = Math.pow, bn = TweenInterpolation.UtilsBernstein, i;
	for ( i = 0; i <= n; i++ ) {
		b += pw( 1 - k, n - i ) * pw( k, i ) * v[ i ] * bn( n, i );
	}
	return b;
};

TweenInterpolation.CatmullRom = function( v, k ) {
	var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TweenInterpolation.UtilsCatmullRom;
	if ( v[ 0 ] === v[ m ] ) {
		if ( k < 0 ) i = Math.floor( f = m * ( 1 + k ) );
		return fn( v[ ( i - 1 + m ) % m ], v[ i ], v[ ( i + 1 ) % m ], v[ ( i + 2 ) % m ], f - i );
	} else {
		if ( k < 0 ) return v[ 0 ] - ( fn( v[ 0 ], v[ 0 ], v[ 1 ], v[ 1 ], -f ) - v[ 0 ] );
		if ( k > 1 ) return v[ m ] - ( fn( v[ m ], v[ m ], v[ m - 1 ], v[ m - 1 ], f - m ) - v[ m ] );
		return fn( v[ i ? i - 1 : 0 ], v[ i ], v[ m < i + 1 ? m : i + 1 ], v[ m < i + 2 ? m : i + 2 ], f - i );
	}
};

TweenInterpolation.UtilsLinear = function( p0, p1, t ) {
	return ( p1 - p0 ) * t + p0;
};

TweenInterpolation.UtilsBernstein =  function( n , i ) {
	var fc = TweenInterpolation.UtilsFactorial;
	return fc( n ) / fc( i ) / fc( n - i );
};

TweenInterpolation.UtilsFactorial = function( n ) {
	var value = 1;
	for ( var i = 1; i <= n; i++ ) {
		value = value * i;
	}
	return value;
};

TweenInterpolation.UtilsCatmullRom = function( p0, p1, p2, p3, t ) {
	var v0 = ( p2 - p0 ) * 0.5, v1 = ( p3 - p1 ) * 0.5, t2 = t * t, t3 = t * t2;
	return ( 2 * p1 - 2 * p2 + v0 + v1 ) * t3 + ( - 3 * p1 + 3 * p2 - 2 * v0 - v1 ) * t2 + v0 * t + p1;
};

/**
 * Create a Tween.
 * @constructor
 * @param {Object} object
 */
function Tween ( object ) {
	this.target = object;
	this._object = object;
	this._valuesStart = {};
	this._valuesEnd = {};
	this._valuesStartRepeat = {};
	this._duration = 1000;
	this._repeat = 0;
	this._yoyo = false;
	this._reversed = false;
	this._delayTime = 0;
	this._startTime = null;
	this._easingFunction = TweenEasing.LinearNone;
	this._interpolationFunction = TweenInterpolation.Linear;
	this._chainedTweens = [];
	this._onStartCallback = null;
	this._onStartCallbackFired = false;
	this._onUpdateCallback = null;
	this._onCompleteCallback = null;

	for ( var field in object ) {
		this._valuesStart[ field ] = parseFloat( object[field] );
	}
}

Tween.prototype.free = function() {
	this.target = null;
	this._object = null;
	this._valuesStart = null;
	this._valuesEnd = null;
	this._valuesStartRepeat = null;
	this._easingFunction = null;
	this._interpolationFunction = null;
	this._chainedTweens = null;
	this._onStartCallback = null;
	this._onUpdateCallback = null;
	this._onCompleteCallback = null;
};

Tween.prototype.to = function( properties, duration ) {
	if ( duration !== undefined ) {
		this._duration = duration;
	}

	this._valuesEnd = properties;
	return this;
};

Tween.prototype.start = function( time ) {

	TweenManager.instance.add( this );
	this._onStartCallbackFired = false;
	this._startTime = time !== undefined ? time : ( typeof window !== 'undefined' && window.performance !== undefined && window.performance.now !== undefined ? window.performance.now() : Date.now() );
	this._startTime += this._delayTime;

	for ( var property in this._valuesEnd ) {
		if ( this._valuesEnd[ property ] instanceof Array ) {
			if ( this._valuesEnd[ property ].length === 0 ) {
				continue;
			}

			this._valuesEnd[ property ] = [ this._object[ property ] ].concat( this._valuesEnd[ property ] );
		}

		this._valuesStart[ property ] = this._object[ property ];

		if ( ( this._valuesStart[ property ] instanceof Array ) === false ) {
			this._valuesStart[ property ] *= 1.0; // Ensures we're using numbers, not strings
		}

		this._valuesStartRepeat[ property ] = this._valuesStart[ property ] || 0;
	}
	return this;
};

Tween.prototype.stop = function() {
	TweenManager.instance.remove( this );
	return this;
};

Tween.prototype.delay = function( amount ) {
	this._delayTime = amount;
	return this;
};

Tween.prototype.repeat = function( times ) {
	this._repeat = times;
	return this;
};

Tween.prototype.yoyo = function( yo ) {
	this._yoyo = yo;
	return this;
};

Tween.prototype.easing = function( ease ) {
	this._easingFunction = ease;
	return this;
};

Tween.prototype.interpolation = function( inter ) {
	this._interpolationFunction = inter;
	return this;
};

Tween.prototype.chain = function() {
	this._chainedTweens = arguments;
	return this;
};

Tween.prototype.onStart = function( callback ) {
	this._onStartCallback = callback;
	return this;
};

Tween.prototype.onUpdate = function( callback ) {
	this._onUpdateCallback = callback;
	return this;
};

Tween.prototype.onComplete = function( callback ) {
	this._onCompleteCallback = callback;
	return this;
};

Tween.prototype.update = function( time ) {
	var property;
	if ( time < this._startTime ) {
		return true;
	}
	if ( this._onStartCallbackFired === false ) {
		if ( this._onStartCallback !== null ) {
			this._onStartCallback.call( this._object, this );
		}
		this._onStartCallbackFired = true;
	}

	var elapsed = ( time - this._startTime ) / this._duration;
	elapsed = elapsed > 1 ? 1 : elapsed;

	var value = this._easingFunction( elapsed );

	for ( property in this._valuesEnd ) {
		var start = this._valuesStart[ property ] || 0;
		var end = this._valuesEnd[ property ];
		if ( end instanceof Array ) {
			this._object[ property ] = this._interpolationFunction( end, value );
		} else {
			if ( typeof( end ) === 'string' ) {
				end = start + parseFloat( end );
			}
			if ( typeof( end ) === 'number' ) {
				this._object[ property ] = start + ( end - start ) * value;
			}
		}
	}

	if ( elapsed == 1 ) {
		if ( this._repeat > 0 ) {
			if ( isFinite( this._repeat ) ) {
				this._repeat--;
			}

			for ( property in this._valuesStartRepeat ) {
				if ( typeof( this._valuesEnd[ property ] ) === 'string' ) {
					this._valuesStartRepeat[ property ] = this._valuesStartRepeat[ property ] + parseFloat( this._valuesEnd[ property ] );
				}

				if ( this._yoyo ) {
					var tmp = this._valuesStartRepeat[ property ];
					this._valuesStartRepeat[ property ] = this._valuesEnd[ property ];
					this._valuesEnd[ property ] = tmp;
					this._reversed = !this._reversed;
				}
				this._valuesStart[ property ] = this._valuesStartRepeat[ property ];
			}

			this._startTime = time + this._delayTime;
			return true;

		} else {
			if ( this._onCompleteCallback !== null ) {
				this._onCompleteCallback.call( this._object, this );
			}
			for ( var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i ++ ) {
				this._chainedTweens[ i ].start( time );
			}
			return false;
		}
	}

	if ( this._onUpdateCallback !== null && this._object !== null ) {
		this._onUpdateCallback.call( this._object, this );
	}
	return true;
};


/**
 * @constructor
 */
function Common() {
}

/**
 * Returns the ID of the sound array.
 * @param {number} level
 * @return {number}
 */
Common.onIDSounds = function( level ) {
	if ( level >= 7 ) {
		return 2;
	}

	var idLvl = ( level <= 3 )? 0:1;
	return idLvl;
};

/**
 * Save Cookie.
 * @param {string} id
 * @param {string} value
 */
Common.saveData = function( id, value ) {
	if ( value.indexOf( ';' ) > 0 ) {
		Application.fatal( "Saving invalid string with ';' character" + id );
	}
	if ( value.length > Common.COOKIE_MAX_LENGTH ) {
		Application.error( "Can't save string of size " + value.length );
	}
	var expirationDate = new Date();
	expirationDate.setDate( expirationDate.getDate() + Common.COOKIE_EXPIRATION_DAYS );
	var expires = '; expires=' + expirationDate.toUTCString();

	document.cookie = id + '=' + value + expires + '; path=/';
};
Common.COOKIE_EXPIRATION_DAYS = 540;
Common.COOKIE_MAX_LENGTH = 4090; // http://browsercookielimits.squawky.net/

/**
 *
 * @param {SDisplayObjectContainer|SSprite} clip
 * @param {number} duration time duration
 * @param {number=} strong pixels moves
 * @param {number=} frecuency time frecuency
 * @param {Object=} caller caller class
 * @param {Function=} callback function to call
 * @param {Object=} params data
 */
Common.shake = function( clip, duration, strong, frecuency, caller, callback, params ) {
	if ( !clip['isShaking'] ) {
		clip['isShaking'] = true;
		var _strong = strong || 5;
		frecuency = frecuency || 50;
		var timeElapse = 0;
		var x = clip.position.x;
		var y = clip.position.y;
		var interval = setInterval( internalAction, frecuency );
	}

	function internalAction() {
		timeElapse += frecuency;
		if ( clip && clip.parent ) {
			clip.position.x = x + Common.randomInt( -_strong , _strong );
			clip.position.y = y + Common.randomInt( -_strong , _strong );
		}
		if ( timeElapse >= duration ) {
			if ( clip ) {
				clip['isShaking'] = false;
			}
			if ( clip && clip.parent ) {
				clip.position.x = x;
				clip.position.y = y;
			}
			if ( callback ) {
				if ( caller ) {
					callback.call( caller, params );
				}
				else {
					callback( params );
				}
			}
			clearInterval( interval );
		}
	}
};

/**
 * Load Cookie.
 * @param {string} id
 * @param {string} defaultValue
 */
Common.loadData = function( id, defaultValue ) {
	/** @type {string|null} */
	var data = defaultValue;
	var nameEQ = id + '=';
	var ca = document.cookie.split( ';' );
	for ( var i = 0; i < ca.length; ++i ) {
		var c = ca[i];
		while ( c.charAt( 0 ) === ' ' ) {
			c = c.substring( 1, c.length );
		}
		if ( c.indexOf( nameEQ ) === 0 ) {
			data = c.substring( nameEQ.length, c.length );
			break;
		}
	}
	return data;
};

/**
 * Returns a string of the form 'elem1|..|elemN' formed by the elements of the array.
 * @param {Array.<*>} array
 * @param {string=} defaultSplit
 * @return {string}
 */
Common.storageString = function( array, defaultSplit ) {
	defaultSplit = ( typeof defaultSplit !== 'undefined' ) ? defaultSplit : '|';
	var stored = '';
	for ( var i = 0; i < array.length; i++ ) {
		stored += ( i !== 0 ) ? defaultSplit : '';
		stored += array[i];
	}
	return stored;
};

/**
* Copies the data of a given array src (just numeric arrays)
* @param {Object} src
*/
Common.copyNumericArray = function copyNumericArray( src ) {
	var newArray = [];
	for ( var i = 0; i < src.length; i++ ) {
		newArray.push( src[i] );
	}
	return newArray;
};

/**
 * Returns an array initialized with the element of the specified length.
 * @param {*} element
 * @param {number} size
*/
Common.initArray = function( element, size ) {
	var array = [];
	for ( var i = 0; i < size; i++ ) {
		array.push( element );
	}
	return array;
};

/**
 * Check if object in array
 * @param {Object} obj
 * @param {Array} array
 */
Common.inArray = function( obj, array ) {
	return array.indexOf( obj ) !== -1;
};

/**
 * Returns a random value between [min] (inclusive) and [max] (inclusive)
 * @param {number} min
 * @param {number} max
 */
Common.random = function( min, max ) {
	return ( Math.floor( Math.random() * ( max - min + 1 ) ) + min );
};

/**
 * Returns a random integer number between [min] (inclusive) and [max] (inclusive)
 * @param {number} min
 * @param {number} max
 */
Common.randomInt = function( min, max ) {
	return ( min + Math.floor( Math.random() * ( max - min + 1 ) ) );
};

/**
 * Returns array mixer.
 * @param {Array.<*>} ids
*/
Common.mixer = function( ids ) {
	var toMixer = ids.slice( 0 );
	var pos = 0;
	for ( var i = 0; i < toMixer.length; i++ ) {
		pos = ( Math.round( Math.random() * ( ( toMixer.length - 1 ) - i ) ) ) + i;
		toMixer.splice( i, 0, toMixer[pos] );
		toMixer.splice( pos + 1, 1 );
	}
	return toMixer;
};

/**
 * Get a random index for an array of size [arraySize]
 * If [avoidIndex] is passed it will try to avoid it (if possible).
 * @param {number} arraySize
 * @param {number=} avoidIndex If possible doesn't choose this value.
 */
Common.getRandomArrayIndex = function( arraySize, avoidIndex ) {
	if ( arraySize > 1 ) {
		var index = Common.randomInt( 0, arraySize - 1 );
		while ( index == avoidIndex ) {
			index = ( index + 1 ) % arraySize;
		}
		return index;
	}
	return 0;
};

/**
 * Returns a random value from an array.
 * @param {Array.<T>} array
 * @param {T=} avoidValue If possible doesn't choose this value.
 * @template T
 */
Common.getRandomFromArray = function( array, avoidValue ) {
	var size = array.length;
	if ( size > 1 ) {
		if ( typeof avoidValue !== 'undefined' ) {
			var validIndexes = [];
			for ( var k = 0; k < size; ++k ) {
				if ( array[k] !== avoidValue ) {
					validIndexes.push( k );
				}
			}
			if ( validIndexes.length > 0 ) {
				return array[validIndexes[Math.floor( validIndexes.length * Math.random() )]];
			}
		}
		return array[Math.floor( size * Math.random() )];
	}
	else if ( size === 1 ) {
		return array[0];
	}
	return null;
};

Common.randomAndSpliceFromArray = function( array ) {
	return array.splice( Common.random( 0, array.length - 1 ), 1 );
}

/**
 * Shuffles an array in-place with the Fisher-Yates algorithm.
 * @param {Array} array
 */
Common.shuffleArray = function( array ) {
	var j, temp;
	for ( var k = array.length - 1; k >= 1; --k ) {
		j = Math.floor( Math.random() * ( k + 1 ) );
		temp = array[j];
		array[j] = array[k];
		array[k] = temp;
	}
};

/**
 * Obtain object from string. ex : 'a:1;b:2;c:3'
 * @param {string} stringParams
 * @return {Object.<string, string>}
 */
Common.getParams = function( stringParams ) {
	/** @type {Object.<string, string>} */
	var params = {};
	/** @type {Array.<string>} */
	var array = stringParams.split( ';' );
	for ( var i = 0; i < array.length; i++ ) {
		/** @type {Array.<string>} */
		var tempArray = array[i].split( ':' );
		for ( var z = 0; z < tempArray.length; z++ ) {
			params[String( tempArray[0] ).concat()] = tempArray[1];
		}
	}
	return params;
};

/**
 * Obtain object from multi string. ex :  "x:1;y:1|x:2;y:3|x:5;y:8"
 * @param {string} stringParams
 * @param {string} separator
 * @return {Object|Array<Object>}
 */
Common.getParamsMultiple = function( stringParams, separator ) {
	var tmp = stringParams.split( separator );
	if ( tmp.length > 1 ) {
		var arr = [];
		for ( var k = 0; k < tmp.length; k++ ) {
			arr.push( Common.getParams( tmp[k] ) );
		}
		return arr;
	}
	return Common.getParams( tmp[0] );
};

/**
 * Obtain cant of properties.
 * @param {Object} obj
 */
Common.lengthObject = function( obj ) {
	var count = 0;
	for ( var k in obj ) {
		if ( obj.hasOwnProperty( k ) ) {
			++count;
		}
	}
	return count;
};

/**
 * Obtain Rectangle.
 * @param {string} str
 */
Common.parseRect = function( str ) {
	var temp = str.split( ';' );
	if ( temp.length !== 4 ) { return null; }
	return new Rectangle( parseInt( temp[0], 10 ),
						  parseInt( temp[1], 10 ),
						  parseInt( temp[2], 10 ),
						  parseInt( temp[3], 10 ) );
};

/**
 * Obtain string trimmed.
 * @param {string} str
 */
Common.trim = function( str ) {
	return String( str ).replace( /^\s*(.*?)\s*$/g, "$1" );
};

/**
 * Obtain sum of all array elements.
 * @param {Array} array
 */
Common.sumArray = function( array ) {
	var sum = 0;
	for ( var i = 0; i < array.length; i++ ) {
		sum += array[i];
	}
	return sum;
};

/**
 * Parse Num to String with 2 characters.
 * @param {number} num
 * @return {string}
 */
Common.parseNum = function( num ) {
	return ( num < 10 ) ? ( '0' + num ) : ( '' + num );
};

/**
 * Angle from 0 to 360(almost) from x, y coordinates (0 in 1,0);
 * @param {number} xx
 * @param {number} yy
 */
Common.circumferenceAngle = function( xx, yy ) {
	var angle = Math.atan2( yy, xx );
	angle *= 180 / Math.PI;
	angle = ( angle < 0 ) ? 360 + angle : angle;
	return angle;
};

/**
 * Create Tween to animate clip.
 * @param {Object} start
 * @param {Object} finish
 * @param {number} time
 * @param {boolean=} run
 * @param {number=} delay
 * @param {Object=} easyFunction
 */
Common.tween = function( start, finish, time, run, delay, easyFunction ) {
	var tw = new Tween( start )
			.to( finish, time )
			.easing( ( typeof easyFunction === 'undefined' ) ? TweenEasing.BackOut : easyFunction )
			.onUpdate( Common.tweenUpdate )
			.onComplete( Common.tweenComplete )
			.delay( ( typeof delay === 'undefined' ) ? 0 : delay );

	Common.tweenUpdate( tw, true )

	if ( run ) {
		tw.start();
	}
	return tw;
};

Common.tweenUpdate = function( tw, forceInit ) {
	try {
		var parent = tw['target']['parent'];
		var clip = tw['target']['clip'];
		if ( parent && tw['target']['onUpdate'] && !forceInit ) {
			tw['target']['onUpdate'].call( parent, tw['target'] );
		}
		if ( clip ) {
			for ( var prop in tw['target'] ) {
				switch ( prop ) {
					case 'alpha':
						var a = ( tw['target']['alpha'] > 1 ) ? 1 : tw['target']['alpha'];
						a = ( tw['target']['alpha'] < 0 ) ? 0 : a;
						clip.alpha = a;
					break;
					case 'sx': clip.scale.x = tw['target']['sx']; break;
					case 'sy': clip.scale.y = tw['target']['sy']; break;
					case 'scale':
						clip.scale.x = tw['target']['scale'];
						clip.scale.y = tw['target']['scale'];
						break;
					case 'x': clip.position.x = tw['target']['x']; break;
					case 'y': clip.position.y = tw['target']['y']; break;
					case 'rotation': clip.rotation = tw['target']['rotation']; break;
				}
			}
		}
	}
	catch ( e ) {
		Application.warn( ' Tween onUpdate ::' + e );
	}
};

Common.tweenComplete = function( tw ) {
	try {
		var parent = tw['target']['parent'];
		var clip = tw['target']['clip'];
		if ( parent && tw['target']['onComplete'] ) {
			tw['target']['onComplete'].call( parent, tw['target'] );
			tw['target']['parent'] = null;
			tw['target']['onComplete'] = null;
		}
		if ( clip ) {
			for ( var prop in tw['_valuesEnd'] ) {
				switch ( prop ) {
					case 'alpha':
						var a = ( tw['_valuesEnd']['alpha'] > 1 ) ? 1 : tw['_valuesEnd']['alpha'];
						a = ( tw['_valuesEnd']['alpha'] < 0 ) ? 0 : a;
						clip.alpha = a;
						break;
					case 'sx': clip.scale.x = tw['_valuesEnd']['sx']; break;
					case 'sy': clip.scale.y = tw['_valuesEnd']['sy']; break;
					case 'scale':
						clip.scale.x = tw['_valuesEnd']['scale'];
						clip.scale.y = tw['_valuesEnd']['scale'];
						break;
					case 'x': clip.position.x = tw['_valuesEnd']['x']; break;
					case 'y': clip.position.y = tw['_valuesEnd']['y']; break;
					case 'rotation': clip.rotation = tw['_valuesEnd']['rotation']; break;
				}
			}
		}
	}
	catch ( e ) {
		Application.warn( ' Tween onComplete ::' + e );
	}
};

/**
 * Distance between the points (x1, y1) and (x2, y2).
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} distance
 */
Common.distance = function( x1, y1, x2, y2 ) {
	return Math.sqrt( ( x2 - x1 ) * ( x2 - x1 ) + ( y2 - y1 ) * ( y2 - y1 ) );
};

/**
 * Distance squared between the points (x1, y1) and (x2, y2).
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} distance squared
 */
Common.distanceSquared = function( x1, y1, x2, y2 ) {
	return ( ( x2 - x1 ) * ( x2 - x1 ) + ( y2 - y1 ) * ( y2 - y1 ) );
};

/**
 * Obtain object from time string.
 * @param {number} milliseconds
 * @return {Object}
 */
Common.makeClockTime = function( milliseconds ) {
	var time = {};
	var currentTotal = Math.ceil( milliseconds / 1000 );
	var currentMinutes = Math.floor( currentTotal / 60 );
	var currentSeconds = Math.floor( currentTotal % 60 );

	time['total'] = currentTotal;
	time['minutes'] = currentMinutes;
	time['seconds'] = currentSeconds;

	return time;
};

/**
 * @param {number} value
 * @param {number} num_digits
*/
Common.getDigitsByValue = function( value, num_digits ) {
	var s = String( value );
	var digits = [];
	var offset = num_digits - s.length;
	for ( var i = 0; i < offset; i++ ) {
		s = '0' + s;
	}
	digits = s.split( '' );
	return digits;
}

/**
 * Return data contained in an array, if no data exist it throws an error.
 * @param {Object} data
 * @param {string} dataName
 * @param {T=} defaultVal
 * @return {T} .
 * @template T
 */
Common.getData = function( data, dataName, defaultVal ) {
	if ( data == null ) {
		Application.error( 'Common:: data is null' );
	}
	else if ( typeof dataName === 'undefined' ) {
		Application.error( 'Common:: dataName is undefined: ' + dataName );
	}
	else if ( typeof data[dataName] !== 'undefined' ) {
		return data[dataName];
	}
	else {
		Application.error( 'Property not found: ' + dataName );
	}

	if ( typeof defaultVal !== 'undefined' ) {
		return defaultVal;
	}
	return null;
};

/**
 * @param {number} number
 * @return {boolean}
 */
Common.isValidNumber = function( number ) {
	if ( typeof number !== 'number' ) {
		return false;
	}
	if ( isNaN( number ) || !isFinite( number ) ) {
		return false;
	}

	return true;
};

/**
 * @param {string} s
 * @param {number} defaultValue
 * @return {number}
 */
Common.sparseInt = function( s, defaultValue ) {
	/** @type {number} */
	var num = parseInt( s, 10 );
	if ( isNaN( num ) ) {
		return defaultValue;
	}
	return num;
};

/**
 * @param {string} s
 * @param {number} defaultValue
 * @return {number}
 */
Common.sparseFloat = function( s, defaultValue ) {
	/** @type {number} */
	var num = parseFloat( s );
	if ( isNaN( num ) ) {
		return defaultValue;
	}
	return num;
};

/**
 * A wrapper for ajax requests to be handled cross browser
 * @return {Object}
 */
Common.ajaxRequest = function ajaxRequest() {
	var activexmodes = ['Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.3.0', 'Microsoft.XMLHTTP']; //activeX versions to check for in IE
	if ( window.ActiveXObject ) {
		for ( var i = 0; i < activexmodes.length; i++ ) {
			try {
				return new window.ActiveXObject( activexmodes[i] );
			}
			catch( e ) {
			}
		}
	}
	else if ( window.XMLHttpRequest ) {
		return new window.XMLHttpRequest();
	}
	return null;
};

/**
 * @param {SPoint} p1
 * @param {SPoint} p2
 * @param {number} quantitySegments
 * @return {Array<SPoint>}
 */
Common.splitSegmentToPoints = function( p1, p2, quantitySegments ) {
	if ( quantitySegments < 2 ) {
		Application.error( 'Error to split, segment mus be mora than 2' );
		quantitySegments = 2;
	}

	var points = [];
	var dx = p2.x - p1.x;
	var dy = p2.y - p1.y;
	var angle = Math.atan2( dy, dx );
	var d = Math.sqrt( dx * dx + dy * dy );
	var ds = d / ( quantitySegments - 1 );

	for ( var k = 0; k < quantitySegments; k++ ) {
		points.push( new SPoint( ~~( p1.x + ds * k * Math.cos( angle ) ),
								 ~~( p1.y + ds * k * Math.sin( angle ) ) ) );
	}
	return points;
};

/**
 * @param {SPoint} p1
 * @param {SPoint} p2
 * @param {number} separation
 * @return {Array<SPoint>}
 */
Common.splitSegmentToSeparation = function( p1, p2, separation ) {
	var points = [];
	var dx = p2.x - p1.x;
	var dy = p2.y - p1.y;
	var angle = Math.atan2( dy, dx );
	var d = Math.sqrt( dx * dx + dy * dy );
	var sum = 0;
	for ( var k = 0; k < 1000; k++ ) {
		if ( sum <= d ) {
			points.push( new SPoint( ~~( p1.x + separation * k * Math.cos( angle ) ),
									 ~~( p1.y + separation * k * Math.sin( angle ) ) ) );
		}
		else {
			break;
		}
		sum += separation;
	}
	return points;
};

/**
 * @param {number} center
 * @param {number} range
 * @return {number}
 */
Common.randomRangeInt = function( center, range ) {
	return ( center - range + Math.floor( Math.random() * ( 2 * range + 1 ) ) );
};

/**
 * @param {number} center
 * @param {number} range
 * @return {number}
 */
Common.randomRangeFloat = function( center, range ) {
	return ( center - range + Math.random() * ( 2 * range ) );
};

/**
 * @param {number} value
 * @return {number}
 */
Common.trunc = function( value ) {
	return ( value < 0 ? Math.ceil( value ) : Math.floor( value ) );
};

/**
 * @param {Array.<number>} weights
 * @return {number}
 */
Common.weightedRandom = function( weights ) {
	var cumSum = 0;
	for ( var i = 0; i < weights.length; i++ ) {
		cumSum += weights[i];
	}

	var rndPicker = Math.random() * cumSum;
	var pickedIndx = 0;
	for ( var i = 0; i < weights.length; i++ ) {
		if ( rndPicker < weights[i] ) {
			pickedIndx = i;
			break;
		}
		rndPicker -= weights[i];
	}

	return pickedIndx;
};

/**
 * @param {number} color
 * @return {number}
 */
Common.colorDecimalToHex = function( color ) {
	return ( ( color % 1000 ) + ( ( Common.trunc( color / 1000 ) % 1000 ) << 8 )
		+ ( ( Common.trunc( color / 1000000 ) % 1000 ) << 16 ) );
};

/**
 * @param {number} color
 * @return {number}
 */
Common.getR = function( color ) {
	return ( ( ( color >> 16 ) & 0xFF ) );
};

/**
 * @param {number} color
 * @return {number}
 */
Common.getG = function( color ) {
	return ( ( ( color >> 8 ) & 0xFF ) );
};

/**
 * @param {number} color
 * @return {number}
 */
Common.getB = function( color ) {
	return ( ( color & 0xFF ) );
};

/**
 * @param {number} color
 * @return {number}
 */
Common.getR_float = function( color ) {
	return Common.getR( color ) / 255.0;
};

/**
 * @param {number} color
 * @return {number}
 */
Common.getG_float = function( color ) {
	return Common.getG( color ) / 255.0;
};

/**
 * @param {number} color
 * @return {number}
 */
Common.getB_float = function( color ) {
	return Common.getB( color ) / 255.0;
};

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
Common.validateRandom = function( num1, num2 ) {
	/** @type {number}*/
	var random = 0;
	if ( num1 < num2 ) {
		random = Common.trunc( Common.randomInt( num1, num2 ) );
	}
	else if ( num1 == num2 ) {
		random = num1;
	}
	else {
		random = Common.trunc( Common.randomInt( num2, num1 ) );
	}
	return random;
};

/**
 * @param {number} grad
 * @return {number}
 */
Common.gradToRadian = function( grad ) {
	return grad * 0.017453292519943295;
};

/**
 * @param {number} radius
 * @param {number} initAngle // Angle in Grade
 * @param {number} endAngle  // Angle in Grade
 * @param {number} steps
 * @return {Array<number>}
 */
Common.getArcPoints = function( radius, initAngle, endAngle, steps ) {
	var initAngleRad = Common.gradToRadian( initAngle );
	var endAngleRad = Common.gradToRadian( endAngle );
	var stepAngle = ( endAngleRad - initAngleRad ) / steps;
	var points = [];
	var angle = initAngleRad;
	points.push( 0, 0 );
	for ( var i = 0; i <= steps; i++ ) {
		points.push( radius * Math.cos( angle ) );
		points.push( radius * Math.sin( angle ) );
		angle += stepAngle;
		angle = ( i === steps ) ? endAngleRad : angle;
	}
	return points;
};

/**
 * @param {number} val
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
Common.clamp = function( val, min, max ) {
	return Math.max( min, Math.min( max, val ) );
};

Common.createArraySize = function( size, value ) {
	if ( Array.prototype.fill ) {
		var array = new Array( size );
		array.fill( value );
		return array;
	}
	var array = [];
	for ( var k = 0; k < size; k++ ) {
		array.push( value );
	}
	return array;
};

Common.createArraySize = function( size, value ) {
	if ( Array.prototype.fill ) {
		var array = new Array( size );
		array.fill( value );
		return array;
	}
	var array = [];
	for ( var k = 0; k < size; k++ ) {
		array.push( value );
	}
	return array;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
Common.maxInt = function( a, b ) {
	return ( ( a > b ) ? a : b );
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
Common.minInt = function( a, b ) {
	return ( ( a < b ) ? a : b );
};

/**
 * @public
 * @param {Array.<number>} points
 * @return {Array.<SPoint>|null}
 */
Common.arrayToSPoints = function( points ) {
	if ( !points ) return null; // if points is null o undefined
	if ( points.length === 0 ) return null; // if points no items

	var sPoints = [];
	for( var i = 0; i < points.length; i += 2 ) {
		sPoints.push( new SPoint( points[i], points[i + 1] ) );
	}
	return sPoints;
};

/**
 * @public
 * @param {Array.<SPoint>} sPoints
 * @return {Array.<number>|null} sPoints
 */
Common.SPointsToArray = function( sPoints ) {
	if ( !sPoints ) return null; // if sPoints is null o undefined
	if ( sPoints.length === 0 ) return null; // if sPoints no items

	var points = [];
	for( var i = 0; i < sPoints.length; i++ ) {
		points.push( sPoints[i].x );
		points.push( sPoints[i].y );
	}
	return points;
};

/**
 * @param {Object} e
 * @return {number}
 */
Common.getIdentifier = function( e ) {
	if ( typeof( e['data']['identifier'] ) !== 'undefined' ) {
		return e['data']['identifier'];
	}
	return e['data']['originalEvent']['which'];
};

/** @const {number} */ Common.KEY_1 = 49;
/** @const {number} */ Common.KEY_2 = 50;
/** @const {number} */ Common.KEY_3 = 51;
/** @const {number} */ Common.KEY_4 = 52;
/** @const {number} */ Common.KEY_5 = 53;
/** @const {number} */ Common.KEY_6 = 54;
/** @const {number} */ Common.KEY_7 = 55;
/** @const {number} */ Common.KEY_8 = 56;
/** @const {number} */ Common.KEY_9 = 57;
/** @const {number} */ Common.KEY_0 = 48;
/** @const {number} */ Common.KEY_A = 65;
/** @const {number} */ Common.KEY_B = 66;
/** @const {number} */ Common.KEY_C = 67;
/** @const {number} */ Common.KEY_D = 68;
/** @const {number} */ Common.KEY_E = 69;
/** @const {number} */ Common.KEY_F = 70;
/** @const {number} */ Common.KEY_G = 71;
/** @const {number} */ Common.KEY_H = 72;
/** @const {number} */ Common.KEY_I = 73;
/** @const {number} */ Common.KEY_J = 74;
/** @const {number} */ Common.KEY_K = 75;
/** @const {number} */ Common.KEY_L = 76;
/** @const {number} */ Common.KEY_M = 77;
/** @const {number} */ Common.KEY_N = 78;
/** @const {number} */ Common.KEY_O = 79;
/** @const {number} */ Common.KEY_P = 80;
/** @const {number} */ Common.KEY_Q = 81;
/** @const {number} */ Common.KEY_R = 82;
/** @const {number} */ Common.KEY_S = 83;
/** @const {number} */ Common.KEY_T = 84;
/** @const {number} */ Common.KEY_U = 85;
/** @const {number} */ Common.KEY_V = 86;
/** @const {number} */ Common.KEY_W = 87;
/** @const {number} */ Common.KEY_X = 88;
/** @const {number} */ Common.KEY_Z = 90;
/** @const {number} */ Common.KEY_ESC = 27;
/** @const {number} */ Common.KEY_SPACE = 32;
/** @const {number} */ Common.KEY_ENTER = 13;
/** @const {number} */ Common.KEY_LEFT = 37;
/** @const {number} */ Common.KEY_RIGHT = 39;
/** @const {number} */ Common.KEY_DOWN = 40;
/** @const {number} */ Common.KEY_UP = 38;
/** @const {number} */ Common.KEY_SHIFT = 16;

/** @const {number} */ Common.IDENTIFIER_NONE = -1;

/** @const {string} */ Common.COLOR_NONE = 'rgba(0, 0, 0, 0)';
/** @const {string} */ Common.COLOR_RED = '#FF0000';
/** @const {string} */ Common.COLOR_GREEN = '#00FF00';
/** @const {string} */ Common.COLOR_BLUE = '#0000FF';
/** @const {string} */ Common.COLOR_BLACK = '#000000';
/** @const {string} */ Common.COLOR_WHITE = '#FFFFFF';
/** @const {string} */ Common.COLOR_ORANGE = '#FF9900';
/** @const {string} */ Common.COLOR_MAGENTA = '#FF00FF';
/** @const {string} */ Common.COLOR_PURPLE = '#990066';
/** @const {string} */ Common.COLOR_PINK = '#FF66FF';
/** @const {string} */ Common.COLOR_BROWN = '#663300';
/** @const {string} */ Common.COLOR_YELLOW = '#FFFF00';
/** @const {string} */ Common.COLOR_GREY = '#666666';
/** @const {string} */ Common.COLOR_DARK_BLUE = '#000066';

/**
 * @constructor
 */
function ContextGraphics() { }

/**
 * Draws a line.
 * @param {Object} context Canvas context.
 * @param {number} startX
 * @param {number} startY
 * @param {number} endX
 * @param {number} endY
 * @param {string=} color
 * @param {number=} size
 */
ContextGraphics.drawLine = function( context, startX, startY, endX, endY, color, size ) {
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		context.beginPath();
		context.strokeStyle = ( typeof color === 'undefined' ) ? Common.COLOR_BLACK : color;
		context.lineWidth = ( typeof size === 'undefined' ) ? 1 : size;
		context.moveTo( startX, startY );
		context.lineTo( endX, endY );
		context.stroke();
		context.closePath();
	}
};

ContextGraphics.drawRectangle = function( context, x, y, w, h, borderWidth, borderColor, colorFill ) {
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		context.strokeStyle = ( typeof borderColor === 'undefined' ) ? Common.COLOR_BLUE : borderColor;
		context.lineWidth = ( typeof borderWidth === 'undefined' ) ? 1 : borderWidth;
		context.fillStyle = ( typeof colorFill === 'undefined' ) ? 'rgba(0, 0, 0, 0)' : colorFill;
		context.fillRect( x, y, w, h );
		context.strokeRect( x, y, w, h );
	}
};

/**
 * Draws a rectangle.
 * @param {Object} context Canvas context.
 * @param {Object} rectangle Rectangle to draw.
 * @param {string=} borderColor Color of border.
 * @param {string=} colorFill Color of body.
 */
ContextGraphics.drawRect = function( context, rectangle, borderColor, colorFill ) {
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		context.strokeStyle = ( typeof borderColor === 'undefined' ) ? Common.COLOR_BLUE : borderColor;
		context.fillStyle = ( typeof colorFill === 'undefined' ) ? 'rgba(0, 0, 0, 0)' : colorFill;
		context.lineWidth = 1;
		context.fillRect( rectangle.x, rectangle.y, rectangle.w, rectangle.h );
		context.strokeRect( rectangle.x, rectangle.y, rectangle.w, rectangle.h );
	}
};

/**
 * Draws a circle.
 * @param {Object} context Canvas context.
 * @param {number} centerX Center X.
 * @param {number} centerY Center Y.
 * @param {number} radius Radius.
 * @param {string=} borderColor Color of border.
 * @param {string=} colorFill Color of body.
 */
ContextGraphics.drawCircle = function( context, centerX, centerY, radius, borderColor, colorFill ) {
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		context.beginPath();
		context.lineWidth = 1;
		context.strokeStyle = ( typeof borderColor === 'undefined' ) ? Common.COLOR_BLUE : borderColor;
		context.arc( centerX, centerY, radius, 0, Math.PI * 2, true );
		context.stroke();
		context.fillStyle = ( typeof colorFill === 'undefined' ) ? 'rgba(0, 0, 0, 0)' : colorFill;
		context.fill();
		context.closePath();
	}
};

ContextGraphics.drawArc = function( context, centerX, centerY, radius, angleIni, angleEnd, borderColor, colorFill ) {
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		context.beginPath();
		context.strokeStyle = ( typeof borderColor === 'undefined' ) ? Common.COLOR_BLUE : borderColor;
		context.fillStyle = ( typeof colorFill === 'undefined' ) ? 'rgba(0, 0, 0, 0)' : colorFill;
		context.lineWidth = 1;
		context.arc( centerX, centerY, radius, angleIni, angleEnd, true );
		context.closePath();
		context.stroke();
		context.fill();
	}
};

/**
 * Draws a cross.
 * @param {Object} context Canvas context.
 * @param {number} x X.
 * @param {number} y Y.
 * @param {number} radius Cross size.
 * @param {string=} borderColor Color of border.
 * @param {number=} lineWidth Width of line.
 */
ContextGraphics.drawCross = function( context, x, y, radius, borderColor, lineWidth ) {
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		context.beginPath();
		context.strokeStyle = ( typeof borderColor === 'undefined' ) ? Common.COLOR_GREEN : borderColor;
		context.lineWidth = ( typeof lineWidth === 'undefined' ) ? 1 : lineWidth;
		context.moveTo( x - radius, y - radius );
		context.lineTo( x + radius, y + radius );
		context.moveTo( x - radius, y + radius );
		context.lineTo( x + radius, y - radius );
		context.stroke();
		context.closePath();
	}
};

/**
 * Draws an arrow.
 * @param {Object} context Canvas context.
 * @param {number} startX Start X.
 * @param {number} startY Start Y.
 * @param {number} endX End X.
 * @param {number} endY End Y.
 * @param {string=} borderColor Color of border.
 * @param {number=} sizeHead Size of arrow head.
 * @param {number=} lineWidth Width of line.
 */
ContextGraphics.drawArrow = function drawArrow( context, startX, startY, endX, endY,
										 borderColor, sizeHead, lineWidth ) {
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		context.beginPath();
		context.strokeStyle = ( typeof borderColor === 'undefined' ) ? Common.COLOR_YELLOW : borderColor;
		context.lineWidth = ( typeof lineWidth === 'undefined' ) ? 1 : lineWidth;
		if ( typeof sizeHead === 'undefined' ) {
			sizeHead = 5;
		}
		context.moveTo( startX, startY );
		context.lineTo( endX, endY );
		var u = new Vector2D( endX - startX, endY - startY );
		u.normalize();
		context.lineTo( endX - sizeHead * ( u.x + u.y ), endY - sizeHead * ( u.y - u.x ) );
		context.moveTo( endX, endY );
		context.lineTo( endX - sizeHead * ( u.x - u.y ), endY - sizeHead * ( u.y + u.x ) );
		context.stroke();
		context.closePath();
	}
};

/**
 * Draws a curve path.
 * @param {Object} context Canvas context.
 * @param {Array} points Anchor points.
 * @param {string=} borderColor Color of border.
 * @param {number=} lineWidth Width of line.
 */
ContextGraphics.drawPath = function( context, points, borderColor, lineWidth ) {
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		var size = points.length;
		if ( size < 3 ) {
			return;
		}
		context.beginPath();
		context.moveTo( points[0][0], points[0][1] );
		for ( var k = 1; k < size - 2; ++k ) {
			var xc = ( points[k][0] + points[k + 1][0] ) / 2;
			var yc = ( points[k][1] + points[k + 1][1] ) / 2;
			context.quadraticCurveTo( points[k][0], points[k][1], xc, yc );
		}
		context.quadraticCurveTo( points[k][0], points[k][1], points[k + 1][0], points[k + 1][1] );
		context.strokeStyle = ( typeof borderColor === 'undefined' ) ? Common.COLOR_RED : borderColor;
		context.lineWidth = ( typeof lineWidth === 'undefined' ) ? 1 : lineWidth;
		context.stroke();
		context.closePath();
	}
};

/**
 * Draws a curve path.
 * @param {Object} context Canvas context.
 * @param {Array} points Anchor points.
 * @param {string=} borderColor Color of border.
 * @param {number=} lineWidth Width of line.
 */
ContextGraphics.drawBezier = function( context, points, borderColor, lineWidth ) {
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		context.beginPath();
		context.moveTo( points[0]['x'], points[0]['y'] );
		context.quadraticCurveTo( points[1]['x'], points[1]['y'], points[2]['x'], points[2]['y'] );
		context.strokeStyle = ( typeof borderColor === 'undefined' ) ? Common.COLOR_RED : borderColor;
		context.lineWidth = ( typeof lineWidth === 'undefined' ) ? 1 : lineWidth;
		context.stroke();
		context.closePath();
	}
};

/**
 * Draws the border of a reactangle.
 * @param {Object} context Canvas context.
 * @param {number} x Top left X.
 * @param {number} y Top left Y.
 * @param {number} w Width.
 * @param {number} h Height.
 * @param {string=} borderColor Color of border.
 * @param {number=} lineWidth Width of line.
 */
ContextGraphics.drawQuad = function( context, x, y, w, h, borderColor, lineWidth ) {
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		context.strokeStyle = ( typeof borderColor === 'undefined' ) ? Common.COLOR_BLUE : borderColor;
		context.lineWidth = ( typeof lineWidth === 'undefined' ) ? 1 : lineWidth;
		context.strokeRect( x, y, w, h );
	}
};

/**
 * Creates a Virtual Stick.
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {number=} maxForce
 * @param {number=} x
 * @param {number=} y
 */
function VirtualStick( canvas, maxForce, x, y ) {
	/** @type {number} */
	this.maxForce = ( typeof maxForce === 'undefined' ) ? 0.0 : maxForce;
	/** @type {number} */
	this.x = ( typeof x === 'undefined' ) ? 0.0 : x;
	/** @type {number} */
	this.y = ( typeof y === 'undefined' ) ? 0.0 : y;
	/** @type {boolean} */
	this.anchor = ( this.x === 0 && this.y === 0 ) ? false : true;
	/** @type {number} */
	this.identifier = Common.IDENTIFIER_NONE;
	/** @type {number} */
	this.force = 0;
	/** @type {number} */
	this.oldAngle = 0;
	/** @type {number} */
	this.angle = 0;
	/** @type {number} */
	this.deltaAngle = 0;
	/** @type {number} */
	this.preOldAngle = 0;
	/** @type {number} */
	this.forceX = 0;
	/** @type {number} */
	this.forceY = 0;
	this.canvas = canvas;
	/** @type {Animation} */
	this.clipBase = Application.instance.getAnimation( 'mcUIStickBase01' );
	/** @type {Animation} */
	this.clipPointer = Application.instance.getAnimation( 'mcUIStickPointer01' );
	this.canvas.addChild( this.clipBase );
	this.canvas.addChild( this.clipPointer );
	this.clipBase.setPosition( this.x, this.y );
	this.clipPointer.setPosition( this.x, this.y );

	if ( !this.anchor ) {
		this.clipBase.visible = false;
		this.clipPointer.visible = false;
	}

	/** @type {Object} */
	this.m_callbackPressObject = null;
	/** @type {Function} */
	this.m_callbackPressFunction = null;
	/** @type {Object} */
	this.m_callbackReleaseObject = null;
	/** @type {Function} */
	this.m_callbackReleaseFunction = null;
	/** @type {Object} */
	this.m_callbackChangeObject = null;
	/** @type {Function} */
	this.m_callbackChangeFunction = null;

	this.setVisible( false );
}

/**
 * @public
 */
VirtualStick.prototype.free = function() {
	this.m_callbackPressObject = null;
	this.m_callbackPressFunction = null;
	this.m_callbackReleaseObject = null;
	this.m_callbackReleaseFunction = null;
	this.m_callbackChangeObject = null;
	this.m_callbackChangeFunction = null;
	this.canvas.removeChild( this.clipBase );
	this.canvas.removeChild( this.clipPointer );
	this.clipBase.free();
	this.clipBase = null;
	this.clipPointer.free();
	this.clipPointer = null;
	this.canvas = null;
};

/**
 * Set listeners when Press.
 * @public
 * @param {Object} callback
 * @param {Function} funct
 */
VirtualStick.prototype.addPressListener = function( callback, funct ) {
	this.m_callbackPressObject = callback;
	this.m_callbackPressFunction = funct;
};

/**
 * @public
 * @param {string} baseClipName
 * @param {string} pointerClipName
 */
VirtualStick.prototype.setClips = function( baseClipName, pointerClipName ) {
	if ( this.clipBase ) {
		this.canvas.removeChild( this.clipBase );
	}
	if ( this.clipPointer ) {
		this.canvas.removeChild( this.clipPointer );
	}
	this.clipBase = Application.instance.getAnimation( baseClipName );
	this.clipPointer = Application.instance.getAnimation( pointerClipName );
	this.canvas.addChild( this.clipBase );
	this.canvas.addChild( this.clipPointer );
	this.clipBase.setPosition( this.x, this.y );
	this.clipPointer.setPosition( this.x, this.y );

	if ( !this.anchor ) {
		this.clipBase.visible = false;
		this.clipPointer.visible = false;
	}
};

/**
 * Set listeners when Release.
 * @public
 * @param {Object} callback
 * @param {Function} funct
 */
VirtualStick.prototype.addReleaseListener = function( callback, funct ) {
	this.m_callbackReleaseObject = callback;
	this.m_callbackReleaseFunction = funct;
};

/**
 * Set listeners when change values.
 * @public
 * @param {Object} callback
 * @param {Function} funct
 */
VirtualStick.prototype.addChangeListener = function( callback, funct ) {
	this.m_callbackChangeObject = callback;
	this.m_callbackChangeFunction = funct;
};

VirtualStick.prototype.onPointerPress = function( e ) {
	if ( this.identifier === Common.IDENTIFIER_NONE ) {
		if ( !this.anchor ) {
			this.x = e.data.global.x;
			this.y = e.data.global.y;
			this.clipBase.setPosition( this.x, this.y );
			this.clipPointer.setPosition( this.x, this.y );
		}
		this.clipBase.visible = true;
		this.clipPointer.visible = true;
		this.identifier = this.getIdentifier( e );

		if ( this.m_callbackPressObject !== null && this.m_callbackPressFunction !== null ) {
			this.m_callbackPressFunction.call( this.m_callbackPressObject, this );
		}
	}
};

VirtualStick.prototype.onPointerRelease = function( e ) {
	if ( this.identifier === this.getIdentifier( e ) ) {
		if ( !this.anchor ) {
			this.clipBase.visible = false;
			this.clipPointer.visible = false;
		}

		this.force = 0;
		this.angle = 0;
		this.clipPointer.setPosition( this.x, this.y );
		this.identifier = Common.IDENTIFIER_NONE;

		if ( this.m_callbackReleaseObject !== null && this.m_callbackReleaseFunction !== null ) {
			this.m_callbackReleaseFunction.call( this.m_callbackReleaseObject, this );
		}
	}
};

VirtualStick.prototype.onPointerMove = function( e ) {





	if ( this.identifier === this.getIdentifier( e ) ) {
        this.force = e.data.global.x - this.x;

        if ( this.force > 0 && this.force > this.maxForce ) {
            this.force = this.maxForce;
        }
        else if ( this.force < 0 && this.force < -this.maxForce ) {
            this.force = -this.maxForce;
        }

        this.clipPointer.setPosition( this.x + this.force, this.y );

        if ( this.m_callbackChangeObject !== null && this.m_callbackChangeFunction !== null ) {
            this.m_callbackChangeFunction.call( this.m_callbackChangeObject, this );
        }
    }
};

VirtualStick.prototype.getIdentifier = function( e ) {
	if ( typeof( e.data.identifier ) !== 'undefined' ) {
		return e.data.identifier;
	}
	return e.data['originalEvent']['which'];
};

/**
 * @public
 * @param {boolean} visible
 * */
VirtualStick.prototype.setVisible = function( visible ) {
	this.canvas.visible = visible
};

/**
 * @public
 * @return {boolean}
 * */
VirtualStick.prototype.pressTest = function( x, y ) {
	var width = 142;
	var height = 142;
	return ( SMath.abs( x - this.x ) <= width * 0.5 && SMath.abs( y - this.y ) <= height * 0.5 );
}
/**
 * @constructor
 * Creates a TouchControl.
 * @struct
 */
function TouchControl() {
	/** @type {number} */
	this.x = 0;
	/** @type {number} */
	this.y = 0;
	/** @type {number} */
	this.identifier = Common.IDENTIFIER_NONE;
	/** @type {number} */
	this.angle = 0;
	/** @type {number} */
	this.direction = 0;
	/** @type {Object} */
	this.callerObject = null;
	/** @type {Function} */
	this.onTapListener = null;
	/** @type {Function} */
	this.onSwipeListener = null;
	/** @type {Function} */
	this.onHoldListener = null;
	/** @type {Function} */
	this.onReleaseHoldListener = null;
	/** @type {number} */
	this.m_minDistance = 70;
	/** @type {number} */
	this.m_minTime = 400;
	/** @type {number} */
	this.m_timeReset = 0;
	/** @type {number} */
	this.swipeX = 0;
	/** @type {number} */
	this.swipeY = 0;
	/** @type {boolean} */
	this.hold = false;
}

/** @const {number} */ TouchControl.DIR_RIGHT   = 1;
/** @const {number} */ TouchControl.DIR_DOWN    = 2;
/** @const {number} */ TouchControl.DIR_LEFT    = 3;
/** @const {number} */ TouchControl.DIR_UP      = 4;

TouchControl.prototype.free = function() {
	this.callerObject = null;
	this.onTapListener = null;
	this.onSwipeListener = null;
	this.onHoldListener = null;
};

TouchControl.prototype.onPointerPress = function( e ) {
	if ( this.identifier === Common.IDENTIFIER_NONE ) {
		this.identifier = this.getIdentifier( e );
		this.x = e.data.global.x;
		this.y = e.data.global.y;
		this.m_timeReset = this.m_minTime;
	}
};

TouchControl.prototype.onPointerRelease = function( e ) {
	if ( this.identifier === this.getIdentifier( e ) ) {
		this.angle = 0;
		this.identifier = Common.IDENTIFIER_NONE;

		if ( !this.hold ) {
			if ( this.callerObject && this.onTapListener ) {
				this.onTapListener.call( this.callerObject, this );
			}
		}
		else {
			if ( this.callerObject && this.onReleaseHoldListener ) {
				this.onReleaseHoldListener.call( this.callerObject, this );
			}
		}
		this.hold = false;
	}
};

TouchControl.prototype.onPointerMove = function( e ) {
	if ( this.identifier === this.getIdentifier( e ) ) {
		var distance = Math.sqrt( ( e.data.global.x - this.x ) * ( e.data.global.x - this.x ) +
								  ( e.data.global.y - this.y ) * ( e.data.global.y - this.y ) );

		this.angle = Math.atan2( e.data.global.y - this.y, e.data.global.x - this.x );
		this.angle = this.angle * 180 / Math.PI;

		if ( this.m_timeReset > 0 && distance > this.m_minDistance ) {

			this.swipeX = e.data.global.x;
			this.swipeY = e.data.global.y;

			if ( this.angle > 0 && this.angle <= 45 ) {
				this.direction = TouchControl.DIR_RIGHT;
			}
			else if ( this.angle > 45 && this.angle <= 135 ) {
				this.direction = TouchControl.DIR_DOWN;
			}
			else if ( this.angle > 135 && this.angle <= 180 ) {
				this.direction = TouchControl.DIR_LEFT;
			}
			else if ( this.angle > -180 && this.angle <= -135 ) {
				this.direction = TouchControl.DIR_LEFT;
			}
			else if ( this.angle > -135 && this.angle <= -45 ) {
				this.direction = TouchControl.DIR_UP;
			}
			else if ( this.angle > -45 && this.angle <= 0 ) {
				this.direction = TouchControl.DIR_RIGHT;
			}

			this.identifier = Common.IDENTIFIER_NONE;
			if ( this.callerObject && this.onSwipeListener ) {
				this.onSwipeListener.call( this.callerObject, this );
			}
		}
	}
};

/**
 * @param {number} dt
 */
TouchControl.prototype.update = function( dt ) {
	if ( this.identifier !== Common.IDENTIFIER_NONE ) {
		this.m_timeReset -= dt;

		if ( this.m_timeReset <= 0 ) {
			if ( !this.hold && this.callerObject && this.onHoldListener ) {
				this.onHoldListener.call( this.callerObject, this );
			}
			this.hold = true;
		}
	}
};

TouchControl.prototype.reset = function() {
	this.identifier = Common.IDENTIFIER_NONE;
};

TouchControl.prototype.getIdentifier = function( e ) {
	if ( typeof( e.data.identifier ) !== 'undefined' ) {
		return e.data.identifier;
	}
	return e.data['originalEvent']['which'];
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} clip
 * @param {number} duration
 * @param {number} frecuency
 * @param {Array=} colors
 */
function TintInterval( clip, duration, frecuency, colors ) {
	colors = ( typeof colors === 'undefined' ) ? null : colors;
	this.m_timeFrecuency = 0;
	this.m_timeFrecuencyElapse = frecuency;
	this.m_timeDuration = duration;
	this.m_timeElapse = 0;
	this.m_indexColor = 0;
	this.m_clip = clip;
	this.m_colors = colors;
	this.m_start = false;

	this.target = null;
}

/**
 * @param {number=} duration
 * @param {number=} frecuency
 */
TintInterval.prototype.start = function( duration, frecuency ) {
	duration = ( typeof duration === 'undefined' ) ? 0 : duration;
	frecuency = ( typeof frecuency === 'undefined' ) ? 0 : frecuency;
	if ( duration != 0 ) {
		this.m_timeDuration = duration;
	}
	if ( frecuency != 0 ) {
		this.m_timeFrecuency = frecuency;
	}
	this.m_start = true;
	this.m_timeElapse = 0;
	this.m_timeFrecuencyElapse = 0;
	this.change();
};

TintInterval.prototype.stop = function() {
	if ( !this.m_start ) {
		return;
	}
	if ( this.onFinish && this.target ) {
		this.target[this.onFinish]();
	}
	this.m_start = false;
	this.m_indexColor = 0;
	this.change();
};

TintInterval.prototype.setColors = function( colors ) {
	this.m_colors = colors;
};

TintInterval.prototype.setClip = function( clip ) {
	this.m_clip = clip;
};

TintInterval.prototype.update = function( dt ) {
	if ( !this.m_start ) {
		return;
	}
	this.m_timeElapse += dt;
	this.m_timeFrecuencyElapse += dt;
	if ( this.m_timeFrecuencyElapse >= this.m_timeFrecuency ) {
		this.change();
		this.m_timeFrecuencyElapse = 0;
	}
	if ( this.m_timeElapse >= this.m_timeDuration ) {
		this.m_start = false;
		this.m_indexColor = 0;
		this.change();
		if ( this.onFinish && this.target ) {
			this.target[this.onFinish]();
		}
	}
};

TintInterval.prototype.change = function() {
	this.m_indexColor++;
	if ( this.m_indexColor >= this.m_colors.length ) {
		this.m_indexColor = 0;
	}
};

TintInterval.prototype.free = function() {
	this.onFinish = null;
	this.m_clip = null;
	this.m_colors = null;
	this.target = null;
};

/**
 * @constructor
 * @param {Object} caller
 * @param {string} onEndCallback
 * @param {number} timeToTrigger
 * @param {number=} loop
 * @param {*=} params
 * @param {boolean=} stopped
 * @param {string=} onLoopCallback
 */
function SInterval( caller, onEndCallback,
				   timeToTrigger, loop,
				   params, stopped,
				   onLoopCallback ) {

	if ( typeof loop === 'undefined' ) {
		loop = 1;
	}
	if ( typeof stopped === 'undefined' ) {
		stopped = false;
	}

	this.m_timeElapsed = 0;
	this.m_timeToTrigger = timeToTrigger;

	this.m_initLoops = this.m_loop = loop;
	this.m_stopped = stopped;
	this.m_isOver = false;

	this.m_caller = caller;
	this.m_params = params;
	this.m_onEndCallback = onEndCallback;
	this.m_onLoopCallback = onLoopCallback;
}

/**
 * Reset.
 * @param {number=} newTime
 */
SInterval.prototype.reset = function( newTime ) {

	var time = ( typeof newTime === 'undefined' ) ? -1 : newTime;
	if ( time > 0 ) {
		this.m_timeToTrigger = time;
	}
	this.m_timeElapsed = 0;
	this.m_loop = this.m_initLoops;
	this.m_isOver = false;
	this.m_stopped = false;
};

SInterval.prototype.stop = function() {
	this.m_stopped = true;
};

SInterval.prototype.resume = function() {
	this.m_stopped = false;
};

SInterval.prototype.update = function( dt ) {

	if ( this.m_stopped || this.m_isOver ) {
		return;
	}

	this.m_timeElapsed += dt;

	if ( this.m_timeElapsed >= this.m_timeToTrigger ) {
		this.m_timeElapsed = 0;
		this.m_loop -= 1;

		if ( this.m_loop <= 0 ) {
			this.m_isOver = true;
			if ( this.m_onEndCallback ) {
				if ( this.m_params ) {
					this.m_caller[this.m_onEndCallback]( this.m_params );
				}
				else {
					this.m_caller[this.m_onEndCallback]();
				}
			}
		}
		else if ( this.m_onLoopCallback ) {
			if ( this.m_params ) {
				this.m_caller[this.m_onLoopCallback]( this.m_params );
			}
			else {
				this.m_caller[this.m_onLoopCallback]();
			}
		}
	}
};

SInterval.prototype.free = function() {
	this.m_caller = null;
};

/**
 * Creates a point.
 * @constructor
 * @param {number=} x The x component of this vector (or 0.0 if left out)
 * @param {number=} y The y component of this vector (or 0.0 if left out)
 */
function SPoint( x, y ) {
	/**
	 * The x component of this point
	 * @type {number}
	 */
	this.x = ( typeof x === 'undefined' ) ? 0.0 : x;
	/**
	 * The y component of this point
	 * @type {number}
	 */
	this.y = ( typeof y === 'undefined' ) ? 0.0 : y;
}

SPoint.prototype.distanceTo = function( x, y ) {
	return Math.sqrt( ( x - this.x ) * ( x - this.x ) + ( y - this.y ) * ( y - this.y ) );
};

/**
 * @constructor
 * @struct
 * @param {number} x
 * @param {number} y
 * @param {number} speed
 * @param {boolean=} isLoop
 * @param {boolean=} isReversible
 */
function Movement( x, y, speed, isLoop, isReversible ) {
	isLoop = ( typeof isLoop === 'undefined' ) ? false : isLoop;
	isReversible = ( typeof isReversible === 'undefined' ) ? false : isReversible;

	/** @type {number} */
	this.m_x = x;
	/** @type {number} */
	this.m_y = y;
	/** @type {number} */
	this.m_initX = this.m_x;
	/** @type {number} */
	this.m_initY = this.m_y;
	/** @type {number} */
	this.m_targetX = 0;
	/** @type {number} */
	this.m_targetY = 0;
	/** @type {number} */
	this.m_speed = 0.0;
	/** @type {boolean} */
	this.m_isPaused = false;

	/** @type {boolean} */
	this.m_isLoop = isLoop;
	/** @type {boolean} */
	this.m_isReversible = isReversible;
	/** @type {boolean} */
	this.m_isAwaitingDelete = false;

	/** @type {number} */
	this.m_state = Movement.ST_INIT;
	/** @type {number} */
	this.m_typeMovement = Movement.TYPE_DEFAULT;

	this.setSpeed( speed );

	/** @type {Object} */
	this.m_callerObject = null;
	/** @type {Function} */
	this.m_endCallback = null;
	/** @type {Function} */
	this.m_cycleCallback = null;
}

Movement.prototype.free = function() {
	this.m_endCallback = null;
	this.m_cycleCallback = null;
	this.m_callerObject = null;
};

/** @const */ Movement.TYPE_DEFAULT = 0;
/** @const */ Movement.TYPE_CIRCLE  = 1;
/** @const */ Movement.TYPE_LINEAR  = 2;
/** @const */ Movement.TYPE_PARAMETRIC_PARABOLIC  = 3;

/** @const */ Movement.MIN_SPEED = 0.00001;
/** @const */ Movement.DEFAULT_SPEED = 1;

/** @const */ Movement.ST_INDEF = -1;
/** @const */ Movement.ST_INIT  = 0;
/** @const */ Movement.ST_MOVEMENT = 1;
/** @const */ Movement.ST_PAUSED = 2;
/** @const */ Movement.ST_END    = 3;

/** @return {number} */
Movement.prototype.getX = function() {
	return this.m_x;
};

/** @return {number} */
Movement.prototype.getY = function() {
	return this.m_y;
};

/** @return {number} */
Movement.prototype.getSpeed = function() {
	return this.m_speed;
};

/** @param {number} speed */
Movement.prototype.setSpeed = function( speed ) {
	if ( speed > Movement.MIN_SPEED ) {
		this.m_speed = speed;
	}
	else {
		Application.error( 'setSpeed: ' + speed );
		this.m_speed = Movement.DEFAULT_SPEED;
	}
};

/** @return {number} */
Movement.prototype.type = function() {
	return this.m_typeMovement;
};

/** @return {number} */
Movement.prototype.targetX = function() {
	return this.m_targetX;
};

/** @return {number} */
Movement.prototype.targetY = function() {
	return this.m_targetY;
};

/** @return {boolean} */
Movement.prototype.isAwaitingDelete = function() {
	return this.m_isAwaitingDelete;
};

/** @param {boolean} value */
Movement.prototype.setAwaitingToDelete = function( value ) {
	this.m_isAwaitingDelete = value;
	if ( this.m_isAwaitingDelete ) {
		this.m_state = Movement.ST_INDEF;
	}
};

/** @return {boolean} */
Movement.prototype.isPaused = function() {
	return this.m_isPaused;
};

/** @param {boolean} pause */
Movement.prototype.setPause = function( pause ) {
	this.m_isPaused = pause;
};

/**
 * @param {Object} caller
 * @param {function(Movement)|null} endCallback
 * @param {function(Movement)|null} cycleCallback
 */
Movement.prototype.setCallbacks = function( caller, endCallback, cycleCallback ) {
	this.m_callerObject = caller;
	this.m_endCallback = endCallback;
	this.m_cycleCallback = cycleCallback;
};

/**
 * @param {number} x
 * @param {number} y
 */
Movement.prototype.resetPosition = function( x, y ) {
	if ( this.m_state === Movement.ST_MOVEMENT ) {
		Application.warn( 'Movement::resetPosition() - The movement is in progres...' );
	}
	if ( this.m_isPaused ) {
		Application.warn( 'Movement::resetPosition() - The movement is paused...' );
	}

	this.m_x = x;
	this.m_y = y;
};

Movement.prototype.cancelMotion = function() {
	this.m_state = Movement.ST_END;
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number=} newSpeed (default: 0).
 */
Movement.prototype.gotoPosition = function( x, y, newSpeed ) {
	this.m_targetX = x;
	this.m_targetY = y;

	if ( ( typeof newSpeed !== 'undefined' ) && ( newSpeed > 0 ) ) {
		this.m_speed = newSpeed;
	}
};

Movement.prototype.onEndMovement = function() {
	this.m_state = Movement.ST_END;
	if ( this.m_callerObject && this.m_endCallback ) {
		this.m_endCallback.call( this.m_callerObject, this );
	}
};

Movement.prototype.onCycleEnd = function() {
	if ( this.m_callerObject && this.m_cycleCallback ) {
		this.m_cycleCallback.call( this.m_callerObject, this );
	}
};

/** @param {number} dt */
Movement.prototype.update = function( dt ) {
};

/**
 * @constructor
 * @struct
 * @param {number} x
 * @param {number} y
 * @param {number} speed
 * @param {boolean=} isLoop
 * @param {boolean=} isReversible
 * @extends Movement
 */
function LinearMovement( x, y, speed, isLoop, isReversible ) {
	Movement.call( this, x, y, speed, isLoop, isReversible );

	/** @type {number} */
	this.m_angle = 0;
	/** @type {number} */
	this.m_vx = 0;
	/** @type {number} */
	this.m_vy = 0;
	/** @type {boolean} */
	this.m_toFront = true;

	/** @type {number} */
	this.m_currentTargetX = 0;
	/** @type {number} */
	this.m_currentTargetY = 0;

	/** @type {Rectangle} */
	this.m_motionLimit = new Rectangle();
	/** @type {number} */
	this.m_typeMovement = Movement.TYPE_LINEAR;
}
Application.subclass( LinearMovement, Movement );

/** @override */
LinearMovement.prototype.free = function() {
	this.m_motionLimit = null;
	Movement.prototype.free.call( this );
};

/** @return {number} */
LinearMovement.prototype.getAngle = function() {
	return this.m_angle;
};

/** @return {number} */
LinearMovement.prototype.getLinearVelocityX = function() {
	return this.m_vx;
};

/** @return {number} */
LinearMovement.prototype.getLinearVelocityY = function() {
	return this.m_vy;
};

/**
 * @override
 * @param {number} x
 * @param {number} y
 */
LinearMovement.prototype.resetPosition = function( x, y ) {
	Movement.prototype.resetPosition.call( this, x, y );
	this.m_initX = x;
	this.m_initY = y;
};

/**
 * @protected
 * @param {number} x
 * @param {number} y
 * @param {number} dx
 * @param {number} dy
 */
LinearMovement.prototype.settingMotionLimit = function( x, y, dx, dy ) {
	this.m_motionLimit.x = ( ( dx >= 0 ) ? x : x + dx );
	this.m_motionLimit.y = ( ( dy >= 0 ) ? y : y + dy );
	this.m_motionLimit.w = ( ( dx >= 0 ) ? dx : -dx );
	this.m_motionLimit.h = ( ( dy >= 0 ) ? dy : -dy );
};

/**
 * @override
 * @param {number} x
 * @param {number} y
 * @param {number=} newSpeed (default: 0).
 */
LinearMovement.prototype.gotoPosition = function( x, y, newSpeed ) {
	Movement.prototype.gotoPosition.call( this, x, y, newSpeed );

	this.m_currentTargetX = this.m_targetX;
	this.m_currentTargetY = this.m_targetY;

	/** @type {number} */
	var dx = this.m_targetX - this.m_x;
	/** @type {number} */
	var dy = this.m_targetY - this.m_y;
	if ( ( dx === 0 ) && ( dy === 0 ) ) {
		this.onEndMovement();
		return;
	}

	this.settingMotionLimit( this.m_x, this.m_y, dx, dy );

	/** @type {number} */
	var distance = Math.sqrt( dx * dx + dy * dy );
	this.m_vx = this.m_speed * ( dx / distance );
	this.m_vy = this.m_speed * ( dy / distance );
	this.m_angle = Math.atan2( dy, dx );
	this.m_state = Movement.ST_MOVEMENT;
};

/**
 * @param {number} distance
 * @param {number} radians
 * @param {number=} newSpeed (default: 0).
 */
LinearMovement.prototype.gotoRadialPoint = function( distance, radians, newSpeed ) {
	newSpeed = ( typeof newSpeed !== 'undefined' ) ? newSpeed : 0;

	var targetX = 0;
	var targetY = 0;
	if ( distance < 0 ) {
		Application.error( 'LinearMovement::gotoRadialPoint() - distance: ' + distance );
		distance *= -1;
	}
	if ( distance === 0 ) {
		this.onEndMovement();
	}
	else {
		this.m_angle = radians;
		/** @type {number} */
		var dx = distance * Math.cos( this.m_angle );
		/** @type {number} */
		var dy = distance * Math.sin( this.m_angle );
		this.settingMotionLimit( this.m_x, this.m_y, dx, dy );
		if ( newSpeed > 0 ) {
			this.m_speed = newSpeed;
		}
		this.m_vx = this.m_speed * ( dx / distance );
		this.m_vy = this.m_speed * ( dy / distance );
		this.m_currentTargetX = this.m_targetX = this.m_x + dx;
		this.m_currentTargetY = this.m_targetY = this.m_y + dy;
		this.m_state = Movement.ST_MOVEMENT;
	}
};

/**
 * @param {number} dt
 * @return {Vector2D}
 */
LinearMovement.prototype.simulateUpdate = function( dt ) {
	/** @type {Vector2D} */
	var vec = null;
	if ( this.m_state === Movement.ST_MOVEMENT ) {
		vec = new Vector2D( this.m_vx * dt, this.m_vy * dt );
	}
	return vec;
};

/**
 * @override
 * @param {number} dt
 */
LinearMovement.prototype.update = function( dt ) {
	if ( ( this.m_state !== Movement.ST_MOVEMENT )
		|| this.m_isPaused ) {
		return;
	}

	this.m_x += this.m_vx * dt;
	this.m_y += this.m_vy * dt;

	if ( ( this.m_x < this.m_motionLimit.left() )
		|| ( this.m_x > this.m_motionLimit.right() )
		|| ( this.m_y < this.m_motionLimit.top() )
		|| ( this.m_y > this.m_motionLimit.bottom() ) ) {
		this.m_x = this.m_currentTargetX;
		this.m_y = this.m_currentTargetY;
		if ( this.m_isLoop ) {
			if ( this.m_isReversible ) {
				if ( this.m_toFront ) {
					this.m_currentTargetX = this.m_initX;
					this.m_currentTargetY = this.m_initY;
				}
				else {
					this.m_currentTargetX = this.m_targetX;
					this.m_currentTargetY = this.m_targetY;
				}

				this.m_toFront = !this.m_toFront;
				this.m_vx *= -1;
				this.m_vy *= -1;
			}
			else {
				this.m_x = this.m_initX;
				this.m_y = this.m_initY;
			}
			this.onCycleEnd();
		}
		else {
			this.onEndMovement();
		}
	}
};

/**
 * @constructor
 * @param {number} x
 * @param {number} y
 * @param {number} speed
 * @param {boolean=} isLoop
 * @param {boolean=} isReversible
 * @extends Movement
 */
function CircularMovement( x, y, speed, isLoop, isReversible ) {
	Movement.call( this, x, y, speed, isLoop, isReversible );

	/** @type {number} */
	this.m_initRandians = 0;
	/** @type {number} */
	this.m_radiansToDisplace = 0;
	/** @type {number} */
	this.m_currentRadiansDisplaced = 0;
	/** @type {number} */
	this.m_factorDirection = 1;
	/** @type {number} */
	this.m_centroidX = 0;
	/** @type {number} */
	this.m_centroidY = 0;
	/** @type {number} */
	this.m_radio = 0;
	/** @type {number} */
	this.m_angularSpeed = 0;

	this.m_typeMovement = Movement.TYPE_CIRCLE;
}
Application.subclass( CircularMovement, Movement );

/**
 * @override
 * @param {number} x
 * @param {number} y
 * @param {number=} newSpeed (default: 0).
 */
CircularMovement.prototype.gotoPosition = function( x, y, newSpeed ) {
	Movement.prototype.gotoPosition.call( this, x, y, newSpeed );

	this.startMovement( ( this.m_x + this.m_targetX ) * 0.5,
						( this.m_y + this.m_targetY ) * 0.5,
						270 );
};

/**
 * @param {number} centroidX
 * @param {number} centroidY
 * @param {number} displacementDegrees
 */
CircularMovement.prototype.startMovement = function( centroidX,
													 centroidY,
													 displacementDegrees ) {
	this.m_centroidX = centroidX;
	this.m_centroidY = centroidY;

	var dx = this.m_x - this.m_centroidX;
	var dy = -this.m_y + this.m_centroidY;
	this.m_radio = Math.sqrt( dx * dx + dy * dy );
	if ( this.m_radio <= 1 ) {
		Application.error( 'CircularMovement::startMovement() - Radio very small: ' + this.m_radio );
		this.onEndMovement();
		return;
	}

	this.m_factorDirection = ( ( displacementDegrees < 0 ) ? -1 : 1 );
	if ( displacementDegrees == 0 ) {
		this.onEndMovement();
		return;
	}

	if ( displacementDegrees < 0 ) {
		displacementDegrees *= -1;
	}

	this.m_initRandians = Math.atan2( dy, dx );
	this.m_radiansToDisplace = Math.PI * ( displacementDegrees / 180 );
	this.m_currentRadiansDisplaced = 0;

	var distance = 2 * Math.PI * this.m_radio * ( displacementDegrees / 360 );
	var totalTime = distance / this.m_speed;
	this.m_angularSpeed = this.m_radiansToDisplace / totalTime;

	var radians = this.m_initRandians + this.m_radiansToDisplace * this.m_factorDirection;
	this.m_targetX = this.m_centroidX + this.m_radio * Math.cos( radians );
	this.m_targetY = this.m_centroidY - this.m_radio * Math.sin( radians );

	this.m_state = Movement.ST_MOVEMENT;
};

/**
 * @param {number} radio
 * @param {number} initDegrees
 * @param {number} displacementDegrees
 */
CircularMovement.prototype.startMovement2 = function( radio, initDegrees, displacementDegrees ) {
	this.m_radio = radio;
	if ( this.m_radio <= 1 ) {
		Application.error( 'CircularMovement::startMovement2() - Radio very small: ' + this.m_radio );
		this.onEndMovement();
		return;
	}

	this.m_factorDirection = ( ( displacementDegrees < 0 ) ? -1 : 1 );

	if ( displacementDegrees == 0 ) {
		this.onEndMovement();
		return;
	}

	if ( displacementDegrees < 0 ) {
		displacementDegrees *= -1;
	}

	this.m_radiansToDisplace = Math.PI * ( displacementDegrees / 180 );

	var distance = 2 * Math.PI * this.m_radio * ( displacementDegrees / 360 );
	var totalTime = distance / this.m_speed;
	this.m_angularSpeed = this.m_radiansToDisplace / totalTime;

	this.m_initRandians = Math.PI * ( initDegrees / 180 );
	this.m_currentRadiansDisplaced = 0;
	this.m_centroidX = this.m_x - this.m_radio * Math.cos( this.m_initRandians );
	this.m_centroidY = this.m_y + this.m_radio * Math.sin( this.m_initRandians );

	var radians = this.m_initRandians + this.m_radiansToDisplace * this.m_factorDirection;
	this.m_targetX = this.m_centroidX + this.m_radio * Math.cos( radians );
	this.m_targetY = this.m_centroidY - this.m_radio * Math.sin( radians );

	this.m_state = Movement.ST_MOVEMENT;
};

/**
 * @override
 * @param {number} dt
 */
CircularMovement.prototype.update = function( dt ) {
	if ( ( this.m_state !== Movement.ST_MOVEMENT )
		|| this.m_isPaused ) {
		return;
	}

	this.m_currentRadiansDisplaced += this.m_angularSpeed * dt;
	if ( this.m_currentRadiansDisplaced > this.m_radiansToDisplace ) {
		this.m_currentRadiansDisplaced = this.m_radiansToDisplace;
	}

	var radians = this.m_initRandians + this.m_currentRadiansDisplaced * this.m_factorDirection;
	this.m_x = this.m_centroidX + this.m_radio * Math.cos( radians );
	this.m_y = this.m_centroidY - this.m_radio * Math.sin( radians );

	if ( this.m_currentRadiansDisplaced == this.m_radiansToDisplace ) {
		if ( this.m_isLoop ) {
			this.m_currentRadiansDisplaced = 0;
			if ( this.m_isReversible ) {
				this.m_factorDirection *= -1;
				this.m_initRandians = radians;
			}
			this.onCycleEnd();
		}
		else {
			this.onEndMovement();
		}
	}
};

/**
 * @constructor
 * @struct
 * @param {number} x
 * @param {number} y
 * @param {DataMovement} motionData
 */
function MotionController( x, y, motionData ) {
	/** @type {Movement} */
	this.m_currentMovement = null;
	/** @type {number} */
	this.m_currentIndexMovement = 0;
	/** @type {number} */
	this.m_advanceFactor = 1;


	/** @type {number} */
	this.m_x = x;
	/** @type {number} */
	this.m_y = y;
	/** @type {number} */
	this.m_speed = motionData.speed;
	/** @type {DataMovement} */
	this.m_motionData = motionData;
	/** @type {boolean} */
	this.m_isLoop = this.m_motionData.isLoop;
	/** @type {boolean} */
	this.m_isReversible = this.m_motionData.isReverse;
	/** @type {boolean} */
	this.m_isStarted = false;
	/** @type {Array.<Movement>} */
	this.m_movements = [];
}

MotionController.prototype.free = function() {
	this.m_motionData.free();
	this.m_motionData = null;
	this.m_currentMovement = null;

	var k = this.m_movements.length - 1;
	while ( k >= 0 ) {
		this.m_movements[k].free();
		this.m_movements[k] = null;
		--k;
	}
	this.m_movements = null;
};

MotionController.prototype.isStarted = function() {
	return this.m_isStarted;
};

MotionController.prototype.startMotion = function() {
	if ( this.m_isStarted ) {
		return;
	}

	this.m_isStarted = true;

	this.createMovements();
	this.m_currentIndexMovement = -1;
	this.gotoNextMovement();
};

/** @const */ MotionController.CIRCLE_POLAR = "cp";
/** @const */ MotionController.CIRCLE_CARTESIAN = "cc";
/** @const */ MotionController.LINEAR_POLAR = "lp";
/** @const */ MotionController.LINEAR_CARTESIAN = "lc";
/** @const */ MotionController.RELATIVE_LINEAR_CARTESIAN = "rlc";

/** @return {number} */
MotionController.prototype.getX = function() {
	return this.m_x;
};

/** @return {number} */
MotionController.prototype.getY = function() {
	return this.m_y;
};

MotionController.prototype.createMovements = function() {
	var circleMov = null;
	var linearMov = null;
	var newMovement = null;
	var currentX = this.m_x;
	var currentY = this.m_y;
	var block = null;
	var k = 0;

	while ( k < this.m_motionData.motionParams.length ) {

		block = this.m_motionData.motionParams[k];

		if ( block[0] == MotionController.CIRCLE_POLAR ) {
			circleMov = new CircularMovement( currentX, currentY, this.m_speed, this.m_isLoop, this.m_isReversible );
			circleMov.startMovement2( parseFloat( block[1] ), parseFloat( block[2] ), parseFloat( block[3] ) );
			newMovement = circleMov;
		}
		else if ( block[0] == MotionController.CIRCLE_CARTESIAN ) {
			circleMov = new CircularMovement( currentX, currentY, this.m_speed, this.m_isLoop, this.m_isReversible );
			circleMov.startMovement( parseFloat( block[1] ), parseFloat( block[2] ), parseFloat( block[3] ) );
			newMovement = circleMov;
		}
		else if ( block[0] == MotionController.LINEAR_POLAR ) {
			linearMov = new LinearMovement( currentX, currentY, this.m_speed, this.m_isLoop, this.m_isReversible );
			linearMov.gotoRadialPoint( parseFloat( block[1] ), parseFloat( block[2] ) );
			newMovement = linearMov;
		}
		else if ( block[0] == MotionController.LINEAR_CARTESIAN ) {
			linearMov = new LinearMovement( currentX, currentY, this.m_speed, this.m_isLoop, this.m_isReversible );
			linearMov.gotoPosition( parseFloat( block[1] ), parseFloat( block[2] ) );
			newMovement = linearMov;
		}
		else if ( block[0] == MotionController.RELATIVE_LINEAR_CARTESIAN ) {
			linearMov = new LinearMovement( currentX, currentY, this.m_speed, this.m_isLoop, this.m_isReversible );
			linearMov.gotoPosition( parseFloat( block[1] ) + currentX, parseFloat( block[2] ) + currentY );
			newMovement = linearMov;
		}

		if ( newMovement ) {
			this.m_movements.push( newMovement );
			newMovement.setPause( true );
			newMovement.setCallbacks( this, this.onEndMovement, this.onCycleMovement );
			currentX = newMovement.targetX();
			currentY = newMovement.targetY();
		}
		++k;
	}
};

MotionController.prototype.gotoNextMovement = function() {
	this.m_currentIndexMovement += this.m_advanceFactor;
	if ( ( this.m_currentIndexMovement >= 0 ) && ( this.m_currentIndexMovement < this.m_movements.length ) ) {
		this.m_currentMovement = this.m_movements[this.m_currentIndexMovement];
		this.m_currentMovement.setPause( false );
	}
	else {
		if ( this.m_isLoop ) {
			if ( this.m_isReversible ) {
				this.m_advanceFactor *= -1;
			}
			else {
				this.m_currentIndexMovement = -1;
			}

			this.gotoNextMovement();
		}
	}
};

MotionController.prototype.update = function( dt ) {
	if ( this.m_currentMovement ) {
		this.m_currentMovement.update( dt );
		this.m_x = this.m_currentMovement.getX();
		this.m_y = this.m_currentMovement.getY();
	}
};

/** @param {Movement} movement */
MotionController.prototype.onEndMovement = function( movement ) {
	if ( this.m_currentIndexMovement < ( this.m_movements.length - 1 ) ) {
		return;
	}
};

/** @param {Movement} movement */
MotionController.prototype.onCycleMovement = function( movement ) {
	if ( this.m_currentMovement != movement ) {
		Application.error( 'MotionController::onCycleMovement()' );
		return;
	}
	movement.setPause( true );
	this.gotoNextMovement();
};

/**
 * @constructor
 * @param {number} pivotX
 * @param {number} pivotY
 * @param {number} x
 * @param {number} y
 * @param {number} angle
 * @param {number} gravity
 * @param {number} longitude
 */
function PendularMovement( pivotX, pivotY, x, y, angle, gravity, longitude ) {
	this.m_angle = 0.0;
	this.m_alpha = 0.0;
	this.m_x = x;
	this.m_y = y;
	this.m_len = 0.0;
	this.m_dx = 0.0;
	this.m_dy = 0.0;
	this.m_gravity = gravity;
	this.m_w = 0.0;
	this.m_time = 0.0;
	this.m_pivotX = pivotX;
	this.m_pivotY = pivotY;
	this.m_longitudeMax = longitude;
	this.m_beta = angle;
	this.m_velocity = 0.0;

	this.initAngleDeg = 0;

	this.angleSpeed = 0;
	this.angleAccel = 0.000009;
	this.maxAngleSpeed = 0.004;
	this.oldX = 0;

	this.init();
}

PendularMovement.prototype.getX = function() {
	return this.m_x;
};

PendularMovement.prototype.getY = function() {
	return this.m_y;
};

PendularMovement.prototype.getAngle = function() {
	return this.m_angle;
};

PendularMovement.prototype.getVelocity = function() {
	return this.m_velocity;
};

PendularMovement.prototype.getMaxLongitude = function() {
	return this.m_longitudeMax;
};

PendularMovement.prototype.init = function() {
	this.m_dx = this.m_x - this.m_pivotX;
	this.m_dy = this.m_y - this.m_pivotY;
	this.m_len = Math.sqrt( this.m_dx * this.m_dx + this.m_dy * this.m_dy );
	if ( this.m_len < PendularMovement.LONGITUDE_MIN ) {
		this.m_len = PendularMovement.LONGITUDE_MIN;
	}
	if ( this.m_len > this.m_longitudeMax ) {
		this.m_len = this.m_longitudeMax;
	}
	this.m_angle = Math.atan2( this.m_dx, this.m_dy );
	this.m_alpha = this.m_beta;
	this.m_w = ( 2 * Math.PI ) / this.period();
	this.m_time = (Math.acos(this.m_angle / this.m_alpha) / this.m_w) * 180 / Math.PI;

	this.initAngleDeg = this.m_angle * ( 180 / Math.PI );

	this.maxAngleSpeed *= ( this.m_longitudeMax / this.m_len );

	this.maxAngleSpeed *= ( this.m_dx < 0 ? 1 : -1 );
	this.angleAccel *= ( this.m_dx < 0 ? 1 : -1 );
};

PendularMovement.prototype.update = function( dt ) {
	if ( this.maxAngleSpeed !== 0 ) {
		this.angleSpeed += this.angleAccel * dt;
		if ( this.angleAccel > 0 && this.angleSpeed > this.maxAngleSpeed ) {
			this.angleSpeed = this.maxAngleSpeed;
		}
		else if ( this.angleAccel < 0 && this.angleSpeed < this.maxAngleSpeed ) {
			this.angleSpeed = this.maxAngleSpeed;
		}
		this.m_angle += this.angleSpeed * dt;
		this.oldX = this.m_x;
		this.m_x = this.m_len * Math.sin( this.m_angle ) + this.m_pivotX;
		this.m_y = this.m_len * Math.cos( this.m_angle ) + this.m_pivotY;
		this.m_velocity = ( this.m_x - this.oldX ) / dt; // this.maxAngleSpeed * this.m_len * Math.sin( this.m_angle );
		return;
	}

	this.m_len += PendularMovement.INCREMENT_LONGITUDE;
	if ( this.m_len > this.m_longitudeMax ) {
		this.m_len = this.m_longitudeMax;
	}
	this.m_w = ( 2 * Math.PI ) / this.period();
	this.m_angle = this.m_alpha * Math.cos( this.m_w * this.m_time * Math.PI / 180 );
	this.m_velocity = -this.m_w * this.m_alpha * Math.sin( this.m_w * this.m_time * Math.PI / 180 );
	this.m_x = this.m_len * Math.sin( this.m_angle ) + this.m_pivotX;
	this.m_y = this.m_len * Math.cos( this.m_angle ) + this.m_pivotY;
	this.m_time = this.m_time + PendularMovement.DT;
};

PendularMovement.prototype.fastPow = function( base, exp ) {
	if ( exp == 0 ) {
		return 1;
	}
	if ( exp % 2 == 0 ) {
		var x = this.fastPow( base, exp * 0.5 );
		return x * x;
	}
	else {
		return base * this.fastPow( base, exp - 1 );
	}
};

PendularMovement.prototype.factorial = function( n ) {
	var fact = 1;
	var i = 1;
	while ( i <= n ) {
		fact = fact * i;
		i++;
	}
	return fact;
};

PendularMovement.prototype.period = function() {
	var s = 0;
	var i = 0;
	while ( i <= PendularMovement.N ) {
		s += this.fastPow( this.factorial( 2 * i ) / ( this.fastPow( this.fastPow( 2, i ) *
			 this.factorial( i ), 2 ) ), 2 ) * this.fastPow( Math.sin( this.m_alpha / 2 ), 2 * i );
		i++;
	}
	return 2 * Math.PI * Math.sqrt( this.m_len / this.m_gravity ) * s;
};

PendularMovement.DT = 4;
PendularMovement.N = 30;
PendularMovement.LONGITUDE_MIN = 50;
PendularMovement.INCREMENT_LONGITUDE = 0.9;

/**
 * @constructor
 * @param {number} initX
 * @param {number} initY
 * @param {number} gravity
 * @param {number} speed
 * @extends Movement
 */
function ParametricParabolicMovement( initX, initY, gravity, speed ) {
	Movement.call( this, initX, initY, speed, false, false );

	/** @type {number} */
	this.m_gravity = gravity;

	/** @type {number} */
	this.m_currentTime = 0;
	/** @type {number} */
	this.m_finalTime = ParametricParabolicMovement.STD_FINAL_TIME;

	/** @type {number} */
	this.m_vx = 0;
	/** @type {number} */
	this.m_vy = 0;

	this.m_typeMovement = Movement.TYPE_PARAMETRIC_PARABOLIC;
}
Application.subclass( ParametricParabolicMovement, Movement );

/** @const */ParametricParabolicMovement.STD_FINAL_TIME = 100;

/**
 * @override
 * @param {number} x
 * @param {number} y
 * @param {number=} newSpeed (default: 0).
 */
ParametricParabolicMovement.prototype.gotoPosition = function( x, y, newSpeed ) {
	Movement.prototype.gotoPosition.call( this, x, y, newSpeed );

	/** @type {number} */
	var dx = this.m_targetX - this.m_x;
	/** @type {number} */
	var dy = this.m_targetY - this.m_y;

	this.m_vx = dx / this.m_finalTime;
	this.m_vy = ( dy - this.m_gravity * this.m_finalTime * this.m_finalTime / 2 ) / this.m_finalTime;

	this.m_state = Movement.ST_MOVEMENT;
};

/**
 * @public
 * @return {number}
 */
ParametricParabolicMovement.prototype.vX = function() {
	return this.m_vx;
};

/**
 * @override
 * @param {number} dt
 */
ParametricParabolicMovement.prototype.update = function( dt ) {
	if ( ( this.m_state !== Movement.ST_MOVEMENT )
		|| this.m_isPaused ) {
		return;
	}

	this.m_x = Math.floor( this.m_initX + this.m_currentTime * this.m_vx );
	this.m_y = Math.floor( this.m_initY + this.m_currentTime * this.m_vy + this.m_gravity * this.m_currentTime * this.m_currentTime / 2 );

	if ( this.m_currentTime < this.m_finalTime ) {
		this.m_currentTime += this.m_speed * dt * 2;
	}
	else {
		this.m_currentTime = this.m_finalTime;

		this.m_x = this.m_targetX;
		this.m_y = this.m_targetY;

		this.onEndMovement();
	}
};

/**
 * @constructor
 */

function GeometricUtils() { }

GeometricUtils.intersectLines = function( a1, b1, a2, b2 ) {
	var d = b1.minus( a1 );
	var v1 = b1.minus( a2 );
	var v2 = b1.minus( b2 );

	var temp1 = d.product( v1 );
	var temp2 = d.product( v2 );

	if ( temp1 == 0 ) {
		return null;
	}
	else if ( temp2 == 0 ) {
		return null;
	}
	else if ( temp1 * temp2 > 0 ) {
		return null;
	}
	else {
		var area_a = Math.abs( GeometricUtils.triarea( a1, b1, a2 ) );
		var area_b = Math.abs( GeometricUtils.triarea( a1, b1, b2 ) );

		var rx = ( a2.x * area_b + b2.x * area_a ) / ( area_a + area_b );
		var ry = ( a2.y * area_b + b2.y * area_a ) / ( area_a + area_b );

		if ( ( a1.x - rx ) * ( rx - b1.x ) < 0 ) {
			return null;
		}

		if ( ( a1.y - ry ) * ( ry - b1.y ) < 0 ) {
			return null;
		}

		return new Vector2D( rx, ry );
	}
};

GeometricUtils.intersectLinePolygon = function( a1, b1, pol ) {
	var points = [];

	for ( var j = 0; j < pol.length; j++ ) {
		var p = GeometricUtils.intersectLines( a1, b1, pol[j], pol[( j + 1 ) % pol.length] );
		if ( p ) {
			points.push( p );
		}
	}

	return points;
};

GeometricUtils.intersectLinePolygon2 = function( a1, b1, pol ) {
	var points = [];
	var index = [];

	for ( var j = 0; j < pol.length; j++ ) {
		var p = GeometricUtils.intersectLines( a1, b1, pol[j], pol[( j + 1 ) % pol.length] );
		if ( p ) {
			points.push( p );
			index.push( j );
		}
	}

	var res = {
		points: points,
		index: index
	};

	return res;
};

GeometricUtils.trap = function( a, b ) {
	return ( 0.5 * ( b.x - a.x ) * ( b.y + a.y ) );
};

GeometricUtils.triarea = function( a, b, c ) {
	return GeometricUtils.trap( a, b ) + GeometricUtils.trap( b, c ) + GeometricUtils.trap( c, a );
};

/**
 * Creates a PathFinding.
 * @constructor
 */
function PathFinding() {
	/** @private */
	this.m_listOpen = [];
	/** @private */
	this.m_listClose = [];
	/** @private */
	this.m_mapOpen = [];
}

PathFinding.ALLOW_DIAGONAL = true;
PathFinding.ALLOW_DIAGONAL_CORNERING = false;

PathFinding.getPath = function( map, initRow, initCol, endRow, endCol, idWalk ) {
	/** @type {PathFinding} */
	var objClass = new PathFinding();
	var r = objClass.getPathPrivate( map, initRow, initCol, endRow, endCol, idWalk );
	return r;
};

/** @private */
PathFinding.prototype.getPathPrivate = function( map, initRow, initCol, endRow, endCol, idWalk ) {
	initRow = Math.floor( initRow );
	initCol = Math.floor( initCol );

	var parent = this.getSelectOpen( initRow, initCol );
	this.addOpenList( parent );

	var wMap = map[0].length;
	var hMap = map.length;

	var g, gF, h, f, a, b, aMin, aMax, bMin, bMax;
	var node, findOpen;
	while ( this.m_listOpen.length > 0 && !this.isInCloseListById( endRow, endCol ) ) {
		aMin = parent.i - 1;
		aMax = parent.i + 2;
		bMin = parent.j - 1;
		bMax = parent.j + 2;
		for ( a = aMin; a < aMax; a++ ) {
			for ( b = bMin; b < bMax; b++ ) {
				if ( a < hMap && a > -1 && b < wMap && b > -1 &&
						!this.isInCloseListById( a, b ) &&
						( PathFinding.ALLOW_DIAGONAL || a === parent.i || b === parent.j ) &&
						( PathFinding.ALLOW_DIAGONAL_CORNERING || a === parent.i || b === parent.j ||
								( map[a][parent.j] == idWalk && map[parent.i][b] === idWalk ) ) ) {
					if ( map[a][b] === idWalk ) { // Check Terrain
						findOpen = this.isInOpenList( a, b );
						gF = ( a == parent.i || b == parent.j ) ? 10 : 14;
						g = parent.g + gF;
						if ( findOpen === null ) {
							node = new clsNode( parent, a, b );
							h = ( Math.abs( a - endRow ) + Math.abs( b - endCol ) ) * 10;
							node.g = g; node.h = h; node.f = g + h;
							this.addOpenList( node );
						} else { // If Exist in Open List
							if ( g < findOpen.g ) {
								findOpen.g = g;
								findOpen.f = findOpen.h + findOpen.g;
								findOpen.parent = parent;
							}
						}
					}
				}
			}
		}
		this.removeOpenList( parent );
		this.addCloseList( parent );
		parent = this.getSelectOpen( initRow, initCol );
	}
	var result = null;
	if ( this.isInCloseListById( endRow, endCol ) ) {
		result = [];
		var tempNode = null;
		tempNode = this.m_listClose[this.m_listClose.length - 1];
		while ( tempNode !== null ) {
			result.push( tempNode );
			tempNode = tempNode.parent;
		}
		result = result.reverse();
	}
	return result;
};

/** @private */
PathFinding.prototype.getSelectOpen = function( initRow, initCol ) {
	var minor = null;
	var size = this.m_listOpen.length;
	if ( size > 0 ) {
		minor = this.m_listOpen[size - 1];
		var node;
		for ( var k = 0; k < size; k++ ) {
			node = this.m_listOpen[k];
			if ( node.f < minor.f ) {
				minor = node;
			}
		}
	} else {
		minor = new clsNode( null, initRow, initCol );
	}
	return minor;
};

/** @private */
PathFinding.prototype.isInCloseListById = function( i, j ) {
	if ( typeof this.m_mapOpen[i] !== 'undefined' &&
			this.m_mapOpen[i] !== null ) {
		if ( typeof this.m_mapOpen[i][j] !== 'undefined' &&
				this.m_mapOpen[i][j] !== null ) {
			return this.m_mapOpen[i][j].isClose;
		}
	}
	return false;
};

/** @private */
PathFinding.prototype.isInCloseList = function( node ) {
	return node.isClose;
};

/** @private */
PathFinding.prototype.addCloseList = function( node ) {
	node.isClose = true;
	this.m_listClose.push( node );
};

/** @private */
PathFinding.prototype.isInOpenList = function( i, j ) {
	if ( typeof this.m_mapOpen[i] !== 'undefined' &&
			this.m_mapOpen[i] !== null ) {
		if ( typeof this.m_mapOpen[i][j] !== 'undefined' &&
				this.m_mapOpen[i][j] !== null ) {
			return this.m_mapOpen[i][j];
		}
	}
	return null;
};

/** @private */
PathFinding.prototype.removeOpenList = function( node ) {
	var i = this.m_listOpen.indexOf( node );
	if ( i > -1 ) {
		this.m_listOpen.splice( i, 1 );
	}
	node.isOpen = false;
};

/** @private */
PathFinding.prototype.addOpenList = function( node ) {
	node.isOpen = true;
	this.m_listOpen.push( node );
	if ( this.m_mapOpen[node.i] ) {
		this.m_mapOpen[node.i][node.j] = node;
	} else {
		this.m_mapOpen[node.i] = [];
		this.m_mapOpen[node.i][node.j] = node;
	}
};

/**
 * Creates a clsNode.
 * @constructor
 * @struct
 * @param {clsNode} iParent
 * @param {number} I
 * @param {number} J
 */
function clsNode( iParent, I, J ) {
	this.g = 0;
	this.h = 0;
	this.f = 0;
	this.i = I;
	this.j = J;
	this.isOpen = false;
	this.isClose = false;
	this.parent = iParent;
}

/**
 * @constructor
 * @param {number=} impulse
 * @param {number=} gravity
 */

function JumpControl( impulse, gravity ) {
	impulse = ( typeof impulse !== 'undefined' ) ? impulse : JumpControl.IMPULSE;
	gravity = ( typeof gravity !== 'undefined' ) ? gravity : JumpControl.GRAVITY;

	/** @type {number} */
	this.m_gravity = gravity;
	/** @type {number} */
	this.m_factorGravity = 1;
	/** @type {number} */
	this.m_vo = impulse;
	/** @type {number} */
	this.m_z = 0.0;
	/** @type {number} */
	this.m_nextZ = 0.0;
	/** @type {number} */
	this.m_time = 0.0;
	/** @type {number} */
	this.m_initVelocity = this.m_vo;
	/** @type {number} */
	this.m_initPosition = 0.0;
	/** @type {boolean} */
	this.m_isJump = false;
	/** @type {boolean} */
	this.m_isPaused = false;
	/** @type {boolean} */
	this.m_checkMaxHeight = true;

	/** @type {Object} */
	this.targetCallback = null;
	/** @type {Object} */
	this.onCompleteJumpCallback = null;
	/** @type {Object} */
	this.onMaxHeightReachedCallback = null;
}

JumpControl.prototype.free = function() {
	this.targetCallback = null;
	this.onCompleteJumpCallback = null;
	this.onMaxHeightReachedCallback = null;
};

/** @const {number} */ JumpControl.GRAVITY = 9.8;
/** @const {number} */ JumpControl.IMPULSE = -45;

JumpControl.prototype.setHeightInit = function( height ) {
	this.m_initPosition = height;
	this.m_vo = 0;
	this.m_time = 0;
	this.m_isJump = true;
};

JumpControl.prototype.cancel = function() {
	this.m_isJump = false;
	this.m_initPosition = 0;
	this.m_time = 0;
	this.m_vo = 0;
	this.m_z = 0;
};

JumpControl.prototype.getCurrentHeight = function() {
	return this.m_z;
};

JumpControl.prototype.getElapseTime = function() {
	return this.m_time;
};

JumpControl.prototype.getGravity = function() {
	return this.m_gravity;
};

JumpControl.prototype.setGravity = function( value ) {
	this.m_gravity = value;
};

JumpControl.prototype.getIsJump = function() {
	return this.m_isJump;
};

JumpControl.prototype.getFactorGravity = function() {
	return this.m_factorGravity;
};

JumpControl.prototype.setFactorGravity = function( factor ) {
	this.m_factorGravity = factor;
};

JumpControl.prototype.getPaused = function() {
	return this.m_isPaused;
};

JumpControl.prototype.setPaused = function( value ) {
	this.m_isPaused = value;
};

JumpControl.prototype.init = function( pz ) {
	pz = ( typeof pz !== 'undefined' ) ? pz : 0;
	this.m_z = pz;
	this.m_nextZ = this.m_z;
	this.m_time = 0;
	this.m_isJump = true;
	this.m_checkMaxHeight = true;
};

JumpControl.prototype.getInitVelocity = function() {
	return this.m_vo;
};

JumpControl.prototype.setInitVelocity = function( vel ) {
	this.m_vo = vel;
	this.m_initVelocity = vel;
};

JumpControl.prototype.applyForceY = function( impulse ) {
	if ( !this.m_isJump ) {
		return false;
	}
	this.m_initPosition = this.m_nextZ;
	this.m_vo = impulse;
	this.m_time = 0;
	return true;
};

JumpControl.prototype.applyImpulse = function( impulse ) {
	this.m_initPosition = this.m_z;
	this.m_vo = impulse;
	this.m_time = 0;
	this.m_isJump = true;
};

JumpControl.prototype.completeJump = function() {
	this.m_vo = this.m_initVelocity;
	this.m_initPosition = 0;
	this.m_z = 0;
	this.m_isJump = false;

	if ( this.targetCallback && this.onCompleteJumpCallback ) {
		this.targetCallback[this.onCompleteJumpCallback]( this );
	}
};

JumpControl.prototype.update = function( dt ) {
	if ( this.m_isPaused ) {
		return;
	}

	if ( this.m_isJump ) {
		this.m_time += ( dt * 0.011 );
		this.m_nextZ = ( this.m_vo * this.m_time ) + ( ( this.m_gravity * this.m_factorGravity * this.m_time * this.m_time ) * 0.5 ) + this.m_initPosition;
		if ( this.m_nextZ <= 0 ) {
			if ( this.m_checkMaxHeight && ( this.m_nextZ > this.m_z ) ) {
				this.m_checkMaxHeight = false;
				if ( this.targetCallback && this.onMaxHeightReachedCallback ) {
					this.targetCallback[this.onMaxHeightReachedCallback]( this );
				}
			}
			this.m_z = this.m_nextZ;
		}
		else {
			this.completeJump();
		}
	}
};
/**
 * @constructor
 * @param {number} x
 * @param {number} y
 */
function Displace( x, y ) {
	this.position = new Vector2D( x, y );
	this.positionTarget = new Vector2D( 0, 0 );
	this.accelerationMagnitude = 0.0;
	this.speedMagnitude = 0.0;
	this.speedFactor = 0.0;
	this.angle = 0;
	this.onEndDisplaceCallback = null;
	this.targetCallback = null;

	this.m_timeElapse = 0;
	this.m_positionStart = this.position.clone();
	this.m_acceleration = new Vector2D( 0, 0 );
	this.m_speedInitial = new Vector2D( 0, 0 );
	this.m_totalDisplacement = 0;
	this.m_onMove = false;
}

Displace.prototype.currentSpeed = function() {
	var speed = new Vector2D( 0, 0 );
	speed.x = this.m_speedInitial.x * this.speedFactor + this.m_acceleration.x * this.m_timeElapse;
	speed.y = this.m_speedInitial.y * this.speedFactor + this.m_acceleration.y * this.m_timeElapse;
	return speed.length();
};

Displace.prototype.toLeft = function() {
	var testAngle = this.angle;
	testAngle = ( testAngle * ( 180 / Math.PI ) );
	while ( testAngle < 0 ) { testAngle += 360; }
	testAngle = testAngle % 360;
	return ( testAngle > 90 && testAngle < 270 );
};

Displace.prototype.getX = function() {
	return this.position.x;
};

Displace.prototype.getY = function() {
	return this.position.y;
};

Displace.prototype.resetPosition = function( x, y ) {
	this.position.x = x;
	this.position.y = y;
};

Displace.prototype.updateSpeed = function( speed ) {
	this.speedMagnitude = speed;
	this.m_speedInitial.setVector( this.speedMagnitude, this.angle );
};

Displace.prototype.updateAcceleration = function( acceleration ) {
	this.m_timeElapse = 0;
	this.m_speedInitial.x = this.m_speedInitial.x * this.speedFactor + this.m_acceleration.x * this.m_timeElapse;
	this.m_speedInitial.y = this.m_speedInitial.y * this.speedFactor + this.m_acceleration.y * this.m_timeElapse;
	this.m_positionStart = this.position.clone();
	this.accelerationMagnitude = acceleration;
	this.m_acceleration.setVector( this.accelerationMagnitude, this.angle );
};

Displace.prototype.cancel = function() {
	this.m_positionStart = this.position.clone();
	this.m_speedInitial.x = 0;
	this.m_speedInitial.y = 0;
	this.m_acceleration.x = 0;
	this.m_acceleration.y = 0;
	this.m_timeElapse = 0;
	this.speedFactor = 1;
	this.m_onMove = false;
	if ( this.onEndDisplaceCallback && this.targetCallback ) {
		this.targetCallback[this.onEndDisplaceCallback]();
	}
};

/**
* @param {number} x
* @param {number} y
* @param {number=} speedMagnitude
* @param {number=} accelerationMagnitude
* @param {number=} speedFactor
*/
Displace.prototype.gotoPosition = function( x, y, speedMagnitude, accelerationMagnitude, speedFactor ) {
	this.accelerationMagnitude = ( typeof ( accelerationMagnitude ) === 'undefined' ) ? 0 : accelerationMagnitude;
	this.speedMagnitude = ( typeof ( speedMagnitude ) === 'undefined' ) ? 0 : speedMagnitude;
	this.speedFactor = ( typeof ( speedFactor ) === 'undefined' ) ? 1 : speedFactor;
	this.m_timeElapse = 0;
	this.m_positionStart = this.position.clone();
	this.positionTarget.x = x;
	this.positionTarget.y = y;
	this.angle = this.positionTarget.minus( this.m_positionStart ).angle();
	this.m_speedInitial.setVector( this.speedMagnitude, this.angle );
	this.m_acceleration.setVector( this.accelerationMagnitude, this.angle );
	this.m_totalDisplacement = this.positionTarget.minus( this.m_positionStart ).length();
	this.m_onMove = true;
};

/**
* @param {number} totalDisplacement
* @param {number} angle
* @param {number=} speedMagnitude
* @param {number=} accelerationMagnitude
* @param {number=} speedFactor
*/
Displace.prototype.gotoDirection = function( totalDisplacement, angle, speedMagnitude, accelerationMagnitude, speedFactor ) {
	this.accelerationMagnitude = ( typeof ( accelerationMagnitude ) === 'undefined' ) ? 0 : accelerationMagnitude;
	this.speedMagnitude = ( typeof ( speedMagnitude ) === 'undefined' ) ? 0 : speedMagnitude;
	this.speedFactor = ( typeof ( speedFactor ) === 'undefined' ) ? 1 : speedFactor;
	this.angle = angle;
	this.m_timeElapse = 0;
	this.m_positionStart = this.position.clone();
	this.m_speedInitial.setVector( this.speedMagnitude, this.angle );
	this.m_acceleration.setVector( this.accelerationMagnitude, this.angle );
	this.m_totalDisplacement = totalDisplacement;
	this.m_onMove = true;
	this.positionTarget.x = this.m_positionStart.x + totalDisplacement * Math.cos( angle );
	this.positionTarget.y = this.m_positionStart.y + totalDisplacement * Math.sin( angle );
};

Displace.prototype.estimatePositionAfterTime = function( time ) {
	time *= 0.001;
	var positionOnGround = new Point( 0, 0 );
	positionOnGround.x = this.position.x + this.m_speedInitial.x * time * this.speedFactor + this.m_acceleration.x * 0.5 * time * time;
	positionOnGround.y = this.position.y + this.m_speedInitial.y * time * this.speedFactor + this.m_acceleration.y * 0.5 * time * time;
	return positionOnGround;
};

Displace.prototype.onBounce = function( direction ) {
	var initAngle = 0;
	if ( direction == Displace.DIRECTION_LEFT ) {
		initAngle = 180;
	}
	this.m_timeElapse = 0;
	this.m_positionStart = this.position.clone();
	this.angle = ( initAngle + Common.random( -Displace.BOUNCE_ANGLE_VAR, Displace.BOUNCE_ANGLE_VAR ) ) * ( Math.PI / 180 );
	this.m_speedInitial.setVector( this.speedMagnitude * Displace.ENERGY_AFTER_BOUNCE, this.angle );
	this.m_acceleration.setVector( this.accelerationMagnitude, this.angle );
};

Displace.prototype.update = function( dt ) {
	if ( this.m_onMove == false ) {
		return;
	}

	this.m_timeElapse += dt * 0.001;
	this.position.x = this.m_positionStart.x + this.m_speedInitial.x * this.m_timeElapse * this.speedFactor + this.m_acceleration.x * 0.5 * this.m_timeElapse * this.m_timeElapse;
	this.position.y = this.m_positionStart.y + this.m_speedInitial.y * this.m_timeElapse * this.speedFactor + this.m_acceleration.y * 0.5 * this.m_timeElapse * this.m_timeElapse;

	var speed = new Vector2D( 0, 0 );
	speed.x = this.m_speedInitial.x * this.speedFactor + this.m_acceleration.x * this.m_timeElapse;
	speed.y = this.m_speedInitial.y * this.speedFactor + this.m_acceleration.y * this.m_timeElapse;

	if ( this.m_positionStart.minus( this.position ).length() >= this.m_totalDisplacement
		|| ( Math.abs( speed.x ) < Displace.NO_SPEED_VALUE && Math.abs( speed.y ) < Displace.NO_SPEED_VALUE ) ) {
		if ( this.onEndDisplaceCallback && this.targetCallback ) {
			this.targetCallback[this.onEndDisplaceCallback]();
		}
		this.m_onMove = false;
	}
};

Displace.prototype.free = function() {
	this.position = null;
	this.m_positionOrigin = null;
	this.m_acceleration = null;
	this.m_speedInitial = null;
};

Displace.DIRECTION_RIGHT = 1;
Displace.DIRECTION_LEFT = -1;
Displace.BOUNCE_ANGLE_VAR = 15;
Displace.ENERGY_AFTER_BOUNCE = 0.6;
Displace.NO_SPEED_VALUE = 5;

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {number=} level
 */
function SlidingBackgrounds( canvas, level ) {
	this.m_canvas = canvas;
	this.m_file = window['slidingbackground']['slidingbackground'];
	this.m_level = level;

	this.m_objects = [];
	this.m_objectsX = [];
	this.m_objectsY = [];
	this.m_objectsSpeed = [];
	this.m_objectsResetDistance = [];
	this.m_objectsVertical = [];
	this.m_objectsBackground = [];

	this.init();
}

SlidingBackgrounds.prototype.init = function() {
	for ( var i = 0; i < this.m_file.length; i++ ) {
		if ( this.m_file[i]['Level'] === this.m_level ) {
			this.m_objects.push( Application.instance.getClip( this.m_file[i]['ClipName'] ) );
			this.m_objectsX.push( this.m_file[i]['StartX'] );
			this.m_objectsY.push( this.m_file[i]['StartY'] );
			this.m_objectsBackground.push( this.m_file[i]['Background'] === 1 );
			this.m_objectsVertical.push( this.m_file[i]['Vertical'] === 1 );
			this.m_objectsSpeed.push( this.m_objectsVertical[this.m_objects.length - 1] ? this.m_file[i]['SpeedY'] : this.m_file[i]['SpeedX'] );
			this.m_objectsResetDistance.push( this.m_objectsVertical[this.m_objects.length - 1] ? this.m_file[i]['ResetDistanceY'] : this.m_file[i]['ResetDistanceX'] );
			this.m_objects[this.m_objects.length - 1].setPosition( this.m_objectsX[this.m_objects.length - 1], this.m_objectsY[this.m_objects.length - 1] );
			this.m_canvas.addChild( this.m_objects[this.m_objects.length - 1] );
		}
	}
};

SlidingBackgrounds.prototype.update = function( dt ) {
	for ( var i = 0; i < this.m_objects.length; i++ ) {
		if ( this.m_objectsVertical[i] ) {
			this.m_objectsY[i] += dt * this.m_objectsSpeed[i];
			this.m_objectsY[i] += ( ( ( this.m_objectsY[i] + ( this.m_objectsBackground[i] ? 1 : 0.5 ) * Application.APP_HEIGHT ) <= 0 ) ?
					( ( Application.APP_HEIGHT - 2 ) * this.m_objectsResetDistance[i] ) : 0 );
		}
		else {
			this.m_objectsX[i] += dt * this.m_objectsSpeed[i];
			this.m_objectsX[i] += ( ( ( this.m_objectsX[i] + ( this.m_objectsBackground[i] ? 1 : 0.5 ) * Application.APP_WIDTH ) <= 0 ) ?
					( ( Application.APP_WIDTH - 2 ) * this.m_objectsResetDistance[i] ) : 0 );
		}
		this.m_objects[i].update( dt );
		this.m_objects[i].setPosition( this.m_objectsX[i], this.m_objectsY[i] );
	}
};

SlidingBackgrounds.prototype.free = function() {
	for ( var i = 0; i < this.m_objects.length; i++ ) {
		this.m_objects[i].free();
		this.m_objects[i] = null;
	}
	this.m_objects = null;

	this.m_objectsX = null;
	this.m_objectsY = null;
	this.m_objectsSpeed = null;
	this.m_objectsResetDistance = null;
	this.m_objectsVertical = null;
	this.m_objectsBackground = null;

	this.m_canvas = null;
	this.m_file = null;
};
/**
 * @constructor
 * @param {number} initValue
 * @param {number} finalValue
 * @param {number} duration
 * @param {number=} timeInit
 */
function ValueInterpolation( initValue, finalValue, duration, timeInit ) {
	/** @type {boolean} */
	this.stop = false;
	/** @type {boolean} */
	this.isAwaitingDelete = false;

	this.dataInterpolation = null;
	/** @type {boolean} */
	this.isCreatedByPool = false;
	/** @type {boolean} */
	this.isDisposed = false;

	/** @type {number} */
	this.m_currentTime = 0;
	/** @type {number} */
	this.m_timeInit = 0;
	/** @type {number} */
	this.m_timeEnd = 0;
	/** @type {boolean} */
	this.m_startCalculation = false;
	/** @type {number} */
	this.m_duration = 0;
	/** @type {number} */
	this.m_currentValue = 0;
	/** @type {number} */
	this.m_initValue = 0;
	/** @type {number} */
	this.m_finalValue = 0;
	/** @type {Object} */
	this.m_caller = null;
	/** @type {Function} */
	this.m_callback = null;
}

/**
 * @param {number} initValue
 * @param {number} finalValue
 * @param {number=} duration
 * @param {number=} timeInit
 * @param {number=} expConst
 * @param {number=} overshoot
 * @param {number=} waves
 * @return {ValueInterpolation}
 */
ValueInterpolation.prototype.reset = function reset( initValue,
													 finalValue,
													 duration,
													 timeInit,
													 expConst,
													 overshoot,
													 waves ) {
	timeInit = ( typeof timeInit !== 'undefined' ) ? timeInit : 0;
	duration = ( typeof duration !== 'undefined' ) ? duration : this.m_duration;

	this.m_initValue = initValue;
	this.m_finalValue = finalValue;
	this.m_duration = duration;
	this.m_timeInit = timeInit;
	this.m_timeEnd = timeInit + duration;

	this.dataInterpolation = null;
	this.stop = false;
	this.isAwaitingDelete = false;
	this.m_currentTime = 0;
	this.m_startCalculation = ( timeInit < 0 ) ? false : true;
	this.m_caller = null;
	this.m_callback = null;
	return this;
};

ValueInterpolation.prototype.onEndInterpolation = function( caller, callback ) {
	this.m_caller = caller;
	this.m_callback = callback;
};

ValueInterpolation.prototype.timeInit = function() {
	return this.m_timeInit;
};

ValueInterpolation.prototype.timeEnd = function() {
	return this.m_timeEnd;
};

ValueInterpolation.prototype.value = function() {
	return this.m_currentValue;
};

ValueInterpolation.prototype.calculateValue = function( time ) {
	return 0;
};

ValueInterpolation.prototype.update = function( dt ) {
	if ( !this.stop ) {
		if ( !this.m_startCalculation ) {
			this.m_currentTime += dt;
			if ( this.m_currentTime >= this.m_timeInit ) {
				this.m_startCalculation = true;
				this.m_currentTime = 0;
			}
		}
		else {
			this.m_currentTime += dt;
			this.m_currentValue = this.calculateValue( this.m_currentTime );
			if ( this.m_currentTime >= this.m_duration ) {
				this.m_currentValue = this.m_finalValue;
				this.stop = true;
				if ( ( this.m_caller !== null )
						&& ( this.m_callback !== null ) ) {
					this.m_callback.call( this.m_caller, this );
				}
			}
		}
	}
};

ValueInterpolation.prototype.free = function() {
	this.m_callback = null;
	this.m_caller = null;
	this.dataInterpolation = null;
};

/**
 * @constructor
 * @param {number} initValue
 * @param {number} finalValue
 * @param {number} duration
 * @param {number=} timeInit
 * @extends ValueInterpolation
 */
function LinearInterpolation( initValue, finalValue, duration, timeInit ) {
	ValueInterpolation.call( this, initValue, finalValue, duration, timeInit );
	/** @type {number} */
	this.m_rateOfChange = 0;
	this.reset( initValue, finalValue, duration, timeInit );
}
Application.subclass( LinearInterpolation, ValueInterpolation );

LinearInterpolation.freeObject = [];
LinearInterpolation.lastCreated = null;

LinearInterpolation.create = function create( initValue,
											  finalValue,
											  duration,
											  timeInit ) {

	if ( LinearInterpolation.freeObject.length > 0 ) {
		LinearInterpolation.lastCreated = LinearInterpolation.freeObject.pop();
		LinearInterpolation.lastCreated.reset( initValue,
											   finalValue,
											   duration,
											   timeInit,
											   0, 0, 0 );
	}
	else {
		LinearInterpolation.lastCreated = new LinearInterpolation( initValue,
																   finalValue,
																   duration,
																   timeInit );
	}

	LinearInterpolation.lastCreated.isCreatedByPool = true;
	LinearInterpolation.lastCreated.isDisposed = false;

	return LinearInterpolation.lastCreated;
};

LinearInterpolation.disposeObject = function( linearInterpolation ) {
	if ( linearInterpolation.isCreatedByPool ) {
		if ( !linearInterpolation.isDisposed ) {
			LinearInterpolation.freeObject.push( linearInterpolation );
			linearInterpolation.isDisposed = true;
		}
	}
};

LinearInterpolation.clear = function() {
	LinearInterpolation.freeObject = [];
};

/**
 * @param {number} initValue
 * @param {number} finalValue
 * @param {number=} duration
 * @param {number=} timeInit
 * @param {number=} expConst
 * @param {number=} overshoot
 * @param {number=} waves
 * @return {ValueInterpolation}
 */
LinearInterpolation.prototype.reset = function reset( initValue, finalValue,
													  duration, timeInit,
													  expConst, overshoot, waves ) {

	ValueInterpolation.prototype.reset.call( this, initValue, finalValue,
										  duration, timeInit, expConst,
										  overshoot, waves );
	this.m_rateOfChange = ( finalValue - initValue ) / duration;
	return this;
};

LinearInterpolation.prototype.calculateValue = function( time ) {
	return ( this.m_initValue + time * this.m_rateOfChange );
};

LinearInterpolation.prototype.free = function() {
	ValueInterpolation.prototype.free.call( this );
	LinearInterpolation.disposeObject( this );
};

/**
 * @constructor
 * @param {number} initValue
 * @param {number} finalValue
 * @param {number} duration
 * @param {number} alpha
 * @param {number=} timeInit
 * @extends ValueInterpolation
 */
function ExponentialInterpolation( initValue, finalValue, duration, alpha, timeInit ) {
	ValueInterpolation.call( this, initValue, finalValue, duration, timeInit );
	/** @type {number} */
	this.m_alpha = 0;
	/** @type {number} */
	this.m_c1 = 0;
	/** @type {number} */
	this.m_c2 = 0;
	this.reset( initValue, finalValue, duration, timeInit, alpha );
}

Application.subclass( ExponentialInterpolation, ValueInterpolation );

ExponentialInterpolation.freeObject = [];
ExponentialInterpolation.lastCreated = null;

ExponentialInterpolation.create = function create( initValue,
												   finalValue,
												   duration,
												   alpha,
												   timeInit ) {

	if ( ExponentialInterpolation.freeObject.length > 0 ) {
		ExponentialInterpolation.lastCreated = ExponentialInterpolation.freeObject.pop();
		ExponentialInterpolation.lastCreated.reset( initValue,
													finalValue,
													duration,
													timeInit,
													alpha, 0,
													0 );
	}
	else {
		ExponentialInterpolation.lastCreated = new ExponentialInterpolation( initValue,
																			 finalValue,
																			 duration,
																			 alpha,
																			 timeInit );
	}

	ExponentialInterpolation.lastCreated.isCreatedByPool = true;
	ExponentialInterpolation.lastCreated.isDisposed = false;

	return ExponentialInterpolation.lastCreated;
};

ExponentialInterpolation.disposeObject = function( exponentialInterpolation ) {
	if ( exponentialInterpolation.isCreatedByPool ) {
		if ( !exponentialInterpolation.isDisposed ) {
			exponentialInterpolation.isDisposed = true;
			ExponentialInterpolation.freeObject.push( exponentialInterpolation );
		}
	}
};

ExponentialInterpolation.clear = function() {
	ExponentialInterpolation.freeObject = [];
};

/**
 * @override
 * @param {number} initValue
 * @param {number} finalValue
 * @param {number=} duration
 * @param {number=} timeInit
 * @param {number=} expConst
 * @param {number=} overshoot
 * @param {number=} waves
 * @return {ValueInterpolation}
 */
ExponentialInterpolation.prototype.reset = function reset( initValue, finalValue,
														   duration, timeInit,
														   expConst, overshoot, waves ) {

	ValueInterpolation.prototype.reset.call( this, initValue, finalValue, duration,
											   timeInit, expConst, overshoot, waves );
	this.m_alpha = expConst * 1000 / duration;
	this.m_c1 = ( finalValue - initValue ) / ( Math.exp( this.m_alpha * this.m_duration * 0.001 ) - 1 );
	this.m_c2 = this.m_initValue - this.m_c1;
	return this;
};

ExponentialInterpolation.prototype.calculateValue = function( time ) {
	return ( this.m_c1 * Math.exp( this.m_alpha * time * 0.001 ) + this.m_c2 );
};

ExponentialInterpolation.prototype.free = function() {
	ValueInterpolation.prototype.free.call( this );
	ExponentialInterpolation.disposeObject( this );
};

/**
 * @constructor
 * @param {number} initValue
 * @param {number} finalValue
 * @param {number} duration
 * @param {number} overshoot
 * @param {number} waves
 * @param {number=} timeInit
 * @extends ValueInterpolation
 */
function ElasticInterpolation( initValue, finalValue, duration, overshoot, waves, timeInit ) {

	ValueInterpolation.call( this, initValue, finalValue, duration, timeInit );
	/** @type {number} */
	this.m_c1 = 0;
	/** @type {number} */
	this.m_c2 = 0;
	/** @type {number} */
	this.m_c3 = 0;
	/** @type {number} */
	this.m_c4 = 0;
	/** @type {number} */
	this.m_zetaConst = 0;
	/** @type {number} */
	this.m_overshoot = 0;
	/** @type {number} */
	this.m_waves = 0;
	this.reset( initValue, finalValue, duration, timeInit, 0, overshoot, waves );
}
Application.subclass( ElasticInterpolation, ValueInterpolation );

ElasticInterpolation.MAX_OVERSHOOT = 0.8;
ElasticInterpolation.INVERSE_PI = 0.3183098862
ElasticInterpolation.freeObject = [];
ElasticInterpolation.lastCreated = null;

ElasticInterpolation.create = function create( initValue,
											   finalValue,
											   duration,
											   overshoot,
											   waves,
											   timeInit ) {

	if ( ElasticInterpolation.freeObject.length > 0 ) {
		ElasticInterpolation.lastCreated = ElasticInterpolation.freeObject.pop();
		ElasticInterpolation.lastCreated.reset( initValue,
												finalValue,
												duration,
												timeInit,
												0, overshoot,
												waves );
	}
	else {
		ElasticInterpolation.lastCreated = new ElasticInterpolation( initValue,
																	 finalValue,
																	 duration,
																	 overshoot,
																	 waves,
																	 timeInit );
	}

	ElasticInterpolation.lastCreated.isCreatedByPool = true;
	ElasticInterpolation.lastCreated.isDisposed = false;

	return  ElasticInterpolation.lastCreated;
};

ElasticInterpolation.disposeObject = function( elasticInterpolation ) {
	if ( elasticInterpolation.isCreatedByPool ) {
		if ( !elasticInterpolation.isDisposed ) {
			elasticInterpolation.isDisposed = true;
			ElasticInterpolation.freeObject.push( elasticInterpolation );
		}
	}
};

ElasticInterpolation.clear = function() {
	ElasticInterpolation.freeObject = [];
};

/**
 * @override
 * @param {number} initValue
 * @param {number} finalValue
 * @param {number=} duration
 * @param {number=} timeInit
 * @param {number=} expConst
 * @param {number=} overshoot
 * @param {number=} waves
 * @return {ValueInterpolation}
 */
ElasticInterpolation.prototype.reset = function reset( initValue, finalValue,
													   duration, timeInit,
													   expConst, overshoot, waves ) {

	ValueInterpolation.prototype.reset.call( this, initValue, finalValue, duration,
										   timeInit, expConst, overshoot, waves );

	overshoot = ( typeof overshoot !== 'undefined' ) ? overshoot : 0;
	waves = ( typeof waves !== 'undefined' ) ? waves : 0;
	if ( overshoot > ElasticInterpolation.MAX_OVERSHOOT ) {
		overshoot = ElasticInterpolation.MAX_OVERSHOOT;
	}
	this.m_overshoot = overshoot;
	var logOvershoot = Math.log( overshoot ) * ElasticInterpolation.INVERSE_PI;
	this.m_zetaConst = Math.sqrt( 1 - 1 / ( logOvershoot * logOvershoot + 1 ) );
	this.m_waves = waves;

	var phaseConst = -Math.atan( Math.sqrt( 1 - this.m_zetaConst * this.m_zetaConst ) / this.m_zetaConst );
	var period = duration / ( waves + phaseConst * ElasticInterpolation.INVERSE_PI * 0.5 + ( ( phaseConst < 0 ) ? 1 : 0 ) );
	var dampedFrequency = 2 * Math.PI / period;
	var naturalFrequency = dampedFrequency / Math.sqrt( 1 - this.m_zetaConst * this.m_zetaConst );
	this.m_c1 = finalValue - initValue;
	this.m_c2 = -this.m_zetaConst * naturalFrequency;
	this.m_c3 = dampedFrequency;
	this.m_c4 = -this.m_c2 / dampedFrequency;
	return this;
};

ElasticInterpolation.prototype.calculateValue = function( time ) {
	return ( this.m_c1 * ( 1 - Math.exp( this.m_c2 * time ) * ( SMath.fastCos( this.m_c3 * time ) + this.m_c4 * SMath.fastSin( this.m_c3 * time ) ) ) + this.m_initValue );
};

ElasticInterpolation.prototype.free = function() {
	ValueInterpolation.prototype.free.call( this );
	ElasticInterpolation.disposeObject( this );
};

/**
 * @constructor
 */
function SATCollisionDetector() {
}

/**
 * Calculate polygon-polygon intersection.
 * @param {Array} polygon1
 * @param {Array} polygon2
 * @return {boolean}
 */
SATCollisionDetector.calculatePolyPolyIntersection = function calculatePolyPolyIntersection( polygon1, polygon2 ) {
	var normalsAnalyzed = [];
	var limitsPolygon1 = [];
	var limitsPolygon2 = [];

	var normal = 0;
	for ( var i = 0; i < polygon1.length; i++ ) {
		if ( i === 0 ) {
			normal = -( polygon1[0][0] - polygon1[polygon1.length - 1][0] ) / ( polygon1[0][1] - polygon1[polygon1.length - 1][1] );
		}
		else {
			normal = -( polygon1[i][0] - polygon1[i - 1][0] ) / ( polygon1[i][1] - polygon1[i - 1][1] );
		}
		if ( normalsAnalyzed.indexOf( normal ) !== -1 ) {
			continue;
		}

		normalsAnalyzed.push( normal );
		limitsPolygon1 = SATCollisionDetector.projectPolygonOntoLine( polygon1, normal );
		limitsPolygon2 = SATCollisionDetector.projectPolygonOntoLine( polygon2, normal );
		if ( ( limitsPolygon1[0] > limitsPolygon2[1] ) || ( limitsPolygon1[1] < limitsPolygon2[0] ) ) {
			return false;
		}
	}

	for ( var j = 0; j < polygon2.length; j++ ) {
		if ( j === 0 ) {
			normal = -( polygon2[0][0] - polygon2[polygon2.length - 1][0] ) / ( polygon2[0][1] - polygon2[polygon2.length - 1][1] );
		}
		else {
			normal = -( polygon2[j][0] - polygon2[j - 1][0] ) / ( polygon2[j][1] - polygon2[j - 1][1] );
		}
		if ( normalsAnalyzed.indexOf( normal ) !== -1 ) {
			continue;
		}

		normalsAnalyzed.push( normal );
		limitsPolygon1 = SATCollisionDetector.projectPolygonOntoLine( polygon1, normal );
		limitsPolygon2 = SATCollisionDetector.projectPolygonOntoLine( polygon2, normal );
		if ( ( limitsPolygon1[0] > limitsPolygon2[1] ) || ( limitsPolygon1[1] < limitsPolygon2[0] ) ) {
			return false;
		}
	}

	return true;
};

/**
 * Calculate polygon-circle intersection.
 * @param {Array} polygon
 * @param {Array} circle
 * @return {boolean}
 */
SATCollisionDetector.calculatePolyCircleIntersection = function calculatePolyCircleIntersection( polygon, circle ) {
};

SATCollisionDetector.projectPolygonOntoLine = function projectPolygonOntoLine( polygon, lineSlope ) {
	var limits = [];
	var directionSlope = 0;
	var directionOffset = 0;

	for ( var m = 0; m < polygon.length; m++ ) {
		if ( ( lineSlope === Infinity ) || ( lineSlope === Infinity ) ) {
			var limit = polygon[m][1];
		}
		else if ( lineSlope === 0 ) {
			var limit = polygon[m][0];
		}
		else {
			directionSlope = -1 / lineSlope;
			directionOffset = polygon[m][1] - directionSlope * polygon[m][0];
			var limit = directionOffset / ( lineSlope - directionSlope );
		}

		if ( limits.length === 0 ) {
			limits.push( limit );
		}
		else if ( limits.length === 1 ) {
			if ( limit >= limits[0] ) {
				limits.push( limit );
			}
			else {
				limits.unshift( limit );
			}
		}
		else {
			if ( limit > limits[1] ) {
				limits[1] = limit;
			}
			else if ( limit < limits[0] ) {
				limits[0] = limit;
			}
		}
	}

	return limits;
};
/**
 * @constructor
 */
function PhysicsContacListener( contactListener ) {
	this.listener = contactListener; //GameMatch3.instance.b2ContactListener;

	this.listener.BeginContact = function BeginContact( contact ) {
		var userDataA = contact['GetFixtureA']()['GetBody']()['GetUserData']();
		var userDataB = contact['GetFixtureB']()['GetBody']()['GetUserData']();
		if ( userDataA !== null ) {
			userDataA.BeginContact( contact['GetFixtureB']()['GetBody'](), contact );
		}
		if ( userDataB !== null ) {
			userDataB.BeginContact( contact['GetFixtureA']()['GetBody'](), contact );
		}
	};

	this.listener.EndContact = function EndContact( contact ) {
		var userDataA = contact['GetFixtureA']()['GetBody']()['GetUserData']();
		var userDataB = contact['GetFixtureB']()['GetBody']()['GetUserData']();
		if ( userDataA !== null ) {
			userDataA.EndContact( contact['GetFixtureB']()['GetBody'](), contact );
		}
		if ( userDataB !== null ) {
			userDataB.EndContact( contact['GetFixtureA']()['GetBody'](), contact );
		}
	};

	this.listener.PostSolve = function( contact, impulse ) {
		var userDataA = contact['GetFixtureA']()['GetBody']()['GetUserData']();
		var userDataB = contact['GetFixtureB']()['GetBody']()['GetUserData']();
		if ( userDataA !== null ) {
			userDataA.PostSolve( contact['GetFixtureB']()['GetBody'](), contact, impulse );
		}
		if ( userDataB !== null ) {
			userDataB.PostSolve( contact['GetFixtureA']()['GetBody'](), contact, impulse );
		}
	};

	this.listener.PreSolve = function( contact, oldManifold ) {
		var userDataA = contact['GetFixtureA']()['GetBody']()['GetUserData']();
		var userDataB = contact['GetFixtureB']()['GetBody']()['GetUserData']();
		if ( userDataA !== null ) {
			userDataA.PreSolve( contact['GetFixtureB']()['GetBody'](), contact, oldManifold );
		}
		if ( userDataB !== null ) {
			userDataB.PreSolve( contact['GetFixtureA']()['GetBody'](), contact, oldManifold );
		}
	};
}

/**
 * @constructor
 * @struct
 * @param {SDisplayObjectContainer} canvas
 */
function Shaker( canvas ) {

	/** @type {SDisplayObjectContainer} */
	this.m_canvas = canvas;
	/** @type {boolean} */
	this.m_xEnabled = true;
	/** @type {boolean} */
	this.m_yEnabled = true;
	/** @type {boolean} */
	this.m_shaked = false;

	/** @type {number} */
	this.m_amp = 0;
	/** @type {number} */
	this.m_frequency = 1;
	/** @type {number} */
	this.m_duration = 1;
	/** @type {boolean} */
	this.m_updateable = false;
	/** @type {number} */
	this.m_timer = 0;
	/** @type {number} */
	this.m_timerFrequency = 1;

	this.ox = 0;
	this.oy = 0;
};

Shaker.prototype.free = function() {
	this.m_canvas = null;
};

/**
 * @param {boolean} xEnabled
 * @param {boolean} yEnabled
 */
Shaker.prototype.enableDirection = function( xEnabled, yEnabled ) {
	this.m_xEnabled = xEnabled;
	this.m_yEnabled = yEnabled;
};

/**
 * @param {number} amp
 * @param {number} frequency
 * @param {number} duration
 */
Shaker.prototype.shake = function( amp, frequency, duration ) {
	if ( !this.m_updateable ) {
		this.ox = this.m_canvas.position.x;
		this.oy = this.m_canvas.position.y;
	}
	this.stop();
	this.m_duration = duration;
	this.m_frequency = frequency;
	this.m_amp = amp;

	if ( this.m_duration == 0 ) {
		this.m_duration = -1;
	}
};

/**
 * @param {number} amp
 */
Shaker.prototype.setAmplitude = function( amp ) {
	this.m_amp = amp;
};

Shaker.prototype.start = function() {
	this.m_updateable = true;
};

Shaker.prototype.stop = function() {
	this.m_canvas.position.x = this.ox;
	this.m_canvas.position.y = this.oy;

	this.m_updateable = false;
	this.m_duration = -1;
	this.m_frequency = 0;
	this.m_timerFrequency = 0;
	this.m_timer = 0;
};

/**
 * @return {boolean}
 */
Shaker.prototype.isShaking = function() {
	return this.m_updateable;
};

Shaker.prototype.updateClipPosition = function() {
	if ( this.m_xEnabled ) {
		this.m_canvas.position.x = this.ox + ( this.m_amp * Math.random() );
	}
	if ( this.m_yEnabled ) {
		this.m_canvas.position.y = this.oy + ( this.m_amp * Math.random() );
	}
};

/**
 * @param {number} dt
 */
Shaker.prototype.update = function( dt ) {
	if ( this.m_updateable ) {
		if ( this.m_duration != -1 ) {
			if ( this.m_timer < this.m_duration ) {
				this.m_timer += dt;
				this.m_timerFrequency += dt;
				if ( this.m_frequency < this.m_timerFrequency ) {
					this.m_timerFrequency = 0;
					this.updateClipPosition();
				}
			}
			else {
				this.stop();
			}
		}
	}
};
/**
 * @constructor
 * @struct
 * @param {number} followX
 * @param {number} followY
 * @param {number} turnFactor
 * @param {number} speed
 * @param {number} rotationBufferQty
 */
function Homing2DPath( followX, followY,
					   turnFactor, speed,
					   rotationBufferQty ) {

	/** @type {number} */
	this.targetX = 0;
	/** @type {number} */
	this.targetY = 0;
	/** @type {number} */
	this.m_followX = followX;
	/** @type {number} */
	this.m_followY = followY;
	/** @type {number} */
	this.m_speed = speed;
	/** @type {number} */
	this.m_turnFactor = turnFactor;

	/** @type {number} */
	this.accuracy = 35;
	/** @type {number} */
	this.plusFactor = 3;
	/** @type {number} */
	this.m_plusTurnFactor = 0;
	/** @type {number} */
	this.accuracyForPlusTurnFactor = 80;
	/** @type {number} */
	this.m_rotationCorrection = Math.PI / 2;
	/** @type {Array} */
	this.m_oldRotations = [];
	for ( var i = 0; i < rotationBufferQty; i++ ) {
		this.m_oldRotations.push( 0 );
	}

	/** @type {Vector2D} */
	this.m_directionVector = new Vector2D( this.targetX - followX, this.targetY - followY );
	/** @type {Vector2D} */
	this.m_velocityVector = new Vector2D( 0, 0 );
	this.m_directionVector.normalize2( 1 );

	/** @type {Object} */
	this.m_callerActor = null;
	/** @type {Function} */
	this.m_onArriveFunction = null;
}

Homing2DPath.prototype.free = function() {
	this.m_oldRotations = null;
	this.m_velocityVector = null;
	this.m_directionVector = null;
	this.m_callerActor = null;
	this.m_onArriveFunction = null;
};

/** @param {number} val */
Homing2DPath.prototype.setX = function( val ) { this.m_followX = val; }
/** @return {number} */
Homing2DPath.prototype.getX = function() { return this.m_followX; }
/** @param {number} val */
Homing2DPath.prototype.setY = function( val ) { this.m_followY = val; }
/** @return {number} */
Homing2DPath.prototype.getY = function() { return this.m_followY; }
/** @return {number} */
Homing2DPath.prototype.getSpeed = function() { return this.m_speed; }
/** @return {number} */
Homing2DPath.prototype.getRotation = function() { return this.m_oldRotations[0]; }
/** @return {Vector2D} */
Homing2DPath.prototype.getVelocityVec = function() { return this.m_velocityVector; }
/** @param {number} val */
Homing2DPath.prototype.setSpeed = function( val ) { this.m_speed = val; }
/** @param {number} val */
Homing2DPath.prototype.setTurnFactor = function( val ) { this.m_turnFactor = val; }

/** @param {Object} caller */
/** @param {function(Homing2DPath)|null} funct */
Homing2DPath.prototype.onArrivePointFunction = function( caller, funct ) {
	this.m_callerActor = caller;
	this.m_onArriveFunction = funct;
};

/** @param {number} rotation */
Homing2DPath.prototype.addNewRotation = function( rotation ) {
	var length = this.m_oldRotations.length;

	for ( var i = 0; i < length; i++ ) {
		this.m_oldRotations[i] = this.m_oldRotations[( i + 1 ) == length ? i : i + 1];
	}

	this.m_oldRotations[length - 1] = rotation;
};

/** @param {number} dt */
Homing2DPath.prototype.update = function( dt ) {
	var dx = this.m_directionVector.x = this.targetX - this.m_followX;
	var dy = this.m_directionVector.y = this.targetY - this.m_followY;
	this.m_directionVector.normalize2( this.m_turnFactor + this.m_plusTurnFactor );
	this.m_velocityVector.add( this.m_directionVector );
	this.m_velocityVector.normalize2( this.m_speed * dt );

	this.m_followX += this.m_velocityVector.x;
	this.m_followY += this.m_velocityVector.y;

	this.addNewRotation( Math.atan2( this.m_velocityVector.y, this.m_velocityVector.x ) );

	var distance = Math.sqrt( dx * dx + dy * dy );

	if ( distance < this.accuracy ) {
		if ( this.m_callerActor !== null && this.m_onArriveFunction !== null ) {
			this.m_plusTurnFactor = 0;
			this.m_onArriveFunction.call( this.m_callerActor, this );
		}
	}
	else if ( distance < this.accuracyForPlusTurnFactor ) {
		this.m_plusTurnFactor = this.plusFactor;
	}
};

/**
 * @constructor
 */
function Dir() { }
/**@const {number}*/Dir.RIGHT = 1;
/**@const {number}*/Dir.DOWN  = 2;
/**@const {number}*/Dir.LEFT  = 3;
/**@const {number}*/Dir.UP    = 4;

/**@const {number}*/Dir.E  = 1;
/**@const {number}*/Dir.SE = 2;
/**@const {number}*/Dir.S  = 3;
/**@const {number}*/Dir.SW = 4;
/**@const {number}*/Dir.W  = 5;
/**@const {number}*/Dir.NW = 6;
/**@const {number}*/Dir.N  = 7;
/**@const {number}*/Dir.NE = 8;

/**@const {number}*/Dir.PI      = 3.141592653589793;
/**@const {number}*/Dir._PI_180 = 0.017453292519943295;
/**@const {number}*/Dir._180_PI = 57.29577951308232;

/**@const {number}*/Dir.SIDES_4 = 4;
/**@const {number}*/Dir.SIDES_8 = 8;

/**
 * Fix negative angle
 * @public
 * @param {number} angle // in Radians
 * @return {number}
 */
Dir.fixAngle = function( angle ) {
	return ( angle > 0 ) ? angle : 2 * Dir.PI + angle;
};

/**
 * Return angle in 'GRADES' by direction
 * @public
 * @param {number} direction
 * @param {boolean=} returnInRadians
 * @return {number|null}
 */
Dir.getAngleByDirection = function( direction, returnInRadians ) {
	var dir = null;
	switch ( direction ) {
		case Dir.E  : dir = 0; break;
		case Dir.SE : dir = 45; break;
		case Dir.S  : dir = 90; break;
		case Dir.SW : dir = 135; break;
		case Dir.W  : dir = 180; break;
		case Dir.NW : dir = 225; break;
		case Dir.N  : dir = 270; break;
		case Dir.NE : dir = 315; break;
	}

	if ( dir !== null && returnInRadians ) {
		dir = dir * Dir._PI_180;
	}
	return dir;
};

/**
 * @public
 * @param {number} angle in radians
 * @param {number=} sides define sides directions
 * @return {number}
 */
Dir.getDirection = function( angle, sides ) {
	angle = Dir.fixAngle( angle ); // Fix negative angle
	sides = sides || Dir.SIDES_4;
	angle += ( Dir.PI / sides );
	var section = Dir.PI / ( sides * 0.5 );
	var dir = ~~( angle / section ) + 1;
	dir = ( dir > sides ) ? 1 : dir;
	return dir;
}

/**
 * @public
 * @param {number} grades
 * @return {number}
 */
Dir.toRadian = function( grades ) {
	return grades * Dir._PI_180; // << grades * ( PI / 180 )
};

/**
 * @public
 * @param {number} radians
 * @return {number}
 */
Dir.toGrades = function( radians ) {
	return radians * Dir._180_PI; // << radians * ( 180 / PI )
};
/**
 * @constructor
 * @param {number} keycodeRigth
 * @param {number} keycodeDown
 * @param {number} keycodeLeft
 * @param {number} keycodeUp
 */
function MapKeyMove( keycodeRigth, keycodeDown, keycodeLeft, keycodeUp ) {
	/** @type {Object} */
	this.map = {}
	this.map[keycodeRigth] = Dir.RIGHT;
	this.map[keycodeDown]  = Dir.DOWN;
	this.map[keycodeLeft]  = Dir.LEFT;
	this.map[keycodeUp]    = Dir.UP;
	/** @type {Array<number>} */
	this.press = [0, 0, 0, 0, 0]; // --, R:1, D:10, L:100, U:1000 ( index 0 no use )
}

/**
 * @public
 */
MapKeyMove.prototype.reset = function() {
	this.press = [0, 0, 0, 0, 0];
};

/**
 * @public
 * @param {number} keycode
 */
MapKeyMove.prototype.onPress = function( keycode ) {
	switch ( this.map[keycode] ) {
		case Dir.RIGHT: this.press[Dir.RIGHT] = 1; break;
		case Dir.DOWN : this.press[Dir.DOWN]  = 10; break;
		case Dir.LEFT : this.press[Dir.LEFT]  = 100; break;
		case Dir.UP   : this.press[Dir.UP]    = 1000; break;
	}
};

/**
 * @public
 * @param {number} keycode
 */
MapKeyMove.prototype.onRelease = function( keycode ) {
	if ( this.map[keycode] ) {
		this.press[this.map[keycode]] = 0;
	}
};

/**
 * @public
 * @return {number}
 */
MapKeyMove.prototype.getDirection = function() {
	var pressed = this.press[1] + this.press[2] + this.press[3] + this.press[4];
	switch ( pressed ) {
		case 1    : return Dir.E;
		case 10   : return Dir.S;
		case 100  : return Dir.W;
		case 1000 : return Dir.N;
		case 11   : return Dir.SE;
		case 110  : return Dir.SW;
		case 1100 : return Dir.NW;
		case 1001 : return Dir.NE;
		case 101  : return Dir.E;
		case 1010 : return Dir.N;
	}
	return 0;
};
/**
 * @constructor
 */
function EDIUtils() { }

/** @const {string} */EDIUtils.SHAPE_PATH         = 'path';
/** @const {string} */EDIUtils.SHAPE_CIRCLE       = 'circle';
/** @const {string} */EDIUtils.SHAPE_RECTANGLE    = 'rectangle';
/** @const {string} */EDIUtils.SHAPE_POLYGON      = 'polygon';

/**
 * @public
 * @param {Object} node
 * @return {Object|null}
 */
EDIUtils.getPointsFromShape = function( node ) {
	if ( !node ) return null; // if node is null o undefined

	var k = 0;
	var data = {};
	data['type'] = node['type'];
	switch( node['type'] ) {
		case EDIUtils.SHAPE_PATH:
			data['points'] = [];
			for ( k = 0; k < node['points'].length; k++ ) {
				data['points'].push( node['points'][k]['x0'] );
				data['points'].push( node['points'][k]['y0'] );
			}
			break;
		case EDIUtils.SHAPE_RECTANGLE:
			data['points'] = [];
			data['points'].push( node['x'] );
			data['points'].push( node['y'] );
			data['points'].push( node['x'] + node['w'] );
			data['points'].push( node['y'] );
			data['points'].push( node['x'] + node['w'] );
			data['points'].push( node['y'] + node['h'] );
			data['points'].push( node['x'] );
			data['points'].push( node['y'] + node['h'] );
			break;
		case EDIUtils.SHAPE_POLYGON:
			data['points'] = [];
			for ( k = 0; k < node['vertex'].length; k++ ) {
				data['vertex'].push( node['vertex'][k]['x'] );
				data['vertex'].push( node['vertex'][k]['y'] );
			}
			break;
		case EDIUtils.SHAPE_CIRCLE:
			data['x'] = node['x'];
			data['y'] = node['y'];
			data['r'] = node['r'];
			break;
	}
	return data;
};

/**
 * @public
 * @param {Object} node
 * @return {Array<Array<number>>|null}
 */
EDIUtils.getMatrix = function( node ) {
	if ( !node['matrix'] ) {  // Exit to undefined or null value
		return null;
	}

	var matrix = node['matrix'];
	var cols = node['cols'];
	var rows = node['rows'];
	var matrixReturn = [];
	var i = 0;
	var j = 0;
	for ( i = 0; i < matrix.length; i++ ) {
		var tmp = [];
		if ( matrix[i] === null ) {
			tmp = Common.createArraySize( rows, 0 );
		}
		else {
			for ( j = 0; j < matrix[i].length; j++ ) {
				if ( typeof matrix[i][j] === 'string' ) {
					var info = matrix[i][j].split( 'x' );
					tmp = tmp.concat( Common.createArraySize( parseInt( info[1], 10 ),
															  parseInt( info[0], 10 ) ) );
				}
				else {
					tmp.push( matrix[i][j] );
				}
			}
		}
		matrixReturn.push( tmp );
	}
	return matrixReturn;
};

/**
 * @param {Object} dataObject
 * @returns {Object}
 */
EDIUtils.cloneObject = function( dataObject ) {
	var ob = {}
	for ( var prop in dataObject ) {
		ob[prop] = dataObject[prop];
	}
	return ob;
};

/**
 * @param {Object} dataObject
 * @param {SWorld} world
 * @returns {Array<Object>|null}
 */
EDIUtils.checkNpcToClone = function( dataObject, world ) {
	var info = dataObject['paramsClonePath'];
	var clones = [];
	if ( info ) {
		info = ( typeof info === 'string' ) ? Common.getParamsMultiple( info, '|' ) : info;
		info = ( info.length >= 1 ) ? info : [info]; // object or array objects
		for ( var i = 0; i < info.length; i++ ) {
			var path = world.getPath( info[i]['path'] );
			var q = parseInt( info[i]['q'], 10 );
			var sep = parseInt( info[i]['sep'], 10 );
			var positions = [];
			if ( path ) {
				var points = Common.arrayToSPoints( path.points );
				if ( path.type === 'path' &&  points.length === 2 ) {
					positions = ( sep === 0 ) ? Common.splitSegmentToPoints( points[0], points[1], q ):
												Common.splitSegmentToSeparation( points[0], points[1], sep );
					for ( var k = 0; k < positions.length; k++ ) {
						var clon = EDIUtils.cloneObject( dataObject );
						clon.x = positions[k].x;
						clon.y = positions[k].y;
						clones.push( clon );
					}
				}
			}
			else {
				Application.warn( 'Path to clone [' + info[i]['path'] + '] no found' );
			}
		}
	}
	return clones.length > 0 ? clones : null;
};
/**
 * @constructor
 * @param {Array.<SPoint>=} points
 * @param {number=} speed
 */
function PointsMovement( points, speed ) {
	/** @public @type {number} */
	this.x = 0;
	/** @public @type {number} */
	this.y = 0;
	/** @public @type {number} */
	this.angle = 0;
	/** @public @type {number} */
	this.speed = speed || PointsMovement.DEFAUL_SPEED;
	/** @public @type {Array.<SPoint>} */
	this.pathPoints = points || [];
	/** @private @type {number} */
	this.m_vx = 0;
	/** @private @type {number} */
	this.m_vy = 0;
	/** @private @type {number} */
	this.m_dx = 0;
	/** @private @type {number} */
	this.m_dy = 0;
	/** @private @type {number} */
	this.m_xTarget = 0;
	/** @private @type {number} */
	this.m_yTarget = 0;
	/** @private @type {number} */
	this.m_xOld = 0;
	/** @private @type {number} */
	this.m_yOld = 0;
	/** @private @type {number} */
	this.m_d = 0;
	/** @public @type {boolean} */
	this.isStopped = true;
	/** @public @type {boolean} */
	this.isReverse = false;
	/** @protected @type {Array.<SPoint>} */
	this.m_tempLastPath = null;
	/** @protected @type {Object} */
	this.m_caller = null;
	/** @protected @type {Function} */
	this.m_callbackComplete = null;
	/** @protected @type {Function} */
	this.m_callbackChangePoint = null;
}

/** @const {number} */PointsMovement.DEFAUL_SPEED = 0.05;

/**
 * @public
 */
PointsMovement.prototype.free = function() {
	this.pathPoints = null;
	this.m_tempLastPath = null;
	this.m_caller = null;
	this.m_callbackComplete = null;
	this.m_callbackChangePoint = null;
};

/**
 * @public
 * @param {Object} caller
 * @param {Function|null} callbackComplete
 * @param {Function|null} callbackChangePoint
 */
PointsMovement.prototype.addListeners = function( caller, callbackComplete, callbackChangePoint ) {
	this.m_caller = caller;
	this.m_callbackComplete = callbackComplete;
	this.m_callbackChangePoint = callbackChangePoint;
};

/** @public
 * @param {boolean} resetPosition
 * @param {Array.<SPoint|Object>=} pointsPath
 * @param {number=} speed
 */
PointsMovement.prototype.onStartPath = function( resetPosition, pointsPath, speed ) {
	this.isStopped = false;
	this.pathPoints = pointsPath || this.pathPoints;
	this.m_tempLastPath = this.pathPoints.slice( 0, this.pathPoints.length ); // << COPY ELEMENTS ARRAY
	this.speed = speed || this.speed;
	if ( resetPosition ) {
		this.x = this.m_xOld = this.pathPoints[0].x;
		this.y = this.m_yOld = this.pathPoints[0].y;
	}
	this.nextPoint();
};

/**
 * @public
 */
PointsMovement.prototype.nextPoint = function() {
	if ( this.pathPoints.length > 0 ) {
		var point = this.pathPoints.splice( 0, 1 )[0];
		this.goto( point.x, point.y );
		if ( this.m_caller && this.m_callbackChangePoint ) {
			this.m_callbackChangePoint.call( this.m_caller, this );
		}
	}
	else {
		if ( this.isReverse ) {
			this.onStartPath( false, this.m_tempLastPath.reverse() );
		}
		else {
			this.onStartPath( false, this.m_tempLastPath );
		}
		if ( this.m_caller &&  this.m_callbackComplete ) {
			this.m_callbackComplete.call( this.m_caller, this );
		}
	}
};

/**
 * @return {number}
 */
PointsMovement.prototype.getVX = function() {
	return this.m_vx;
};

/**
 * @public
 * @param {number} x
 * @param {number} y
*/
PointsMovement.prototype.set = function( x, y ) {
	this.x = this.m_xOld = x;
	this.y = this.m_yOld = y;
};

/**
 * @public
*/
PointsMovement.prototype.stop = function() {
	this.isStopped = true;
};

/**
 * @public
*/
PointsMovement.prototype.continue = function() {
	this.isStopped = false;
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {number=} speed
*/
PointsMovement.prototype.goto = function( x, y, speed ) {
	this.speed = speed || this.speed;
	this.m_xTarget = x;
	this.m_yTarget = y;
	this.m_xOld = this.x;
	this.m_yOld = this.y;
	this.m_dx = this.m_xTarget - this.x;
	this.m_dy = this.m_yTarget - this.y;
	this.angle = Math.atan2( this.m_dy, this.m_dx );
	this.m_d = Math.sqrt( this.m_dx * this.m_dx + this.m_dy * this.m_dy );

	if ( this.m_d === 0 ) {
		this.m_vx = this.m_vy = 0;
		this.nextPoint();
	}
	else {
		this.m_vx = ( this.m_dx / this.m_d ) * this.speed;
		this.m_vy = ( this.m_dy / this.m_d ) * this.speed;
	}
};

/**
 * @public
 * @param {number} dt
*/
PointsMovement.prototype.update = function( dt ) {
	if ( this.isStopped ) {
		return
	};

	this.x += this.m_vx * dt;
	this.y += this.m_vy * dt;
	this.m_dx = this.m_xOld - this.x;
	this.m_dy = this.m_yOld - this.y;
	if ( Math.sqrt( this.m_dx * this.m_dx + this.m_dy * this.m_dy ) >= this.m_d ) {
		this.nextPoint();
	}
};
/**
* Tween2
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*
*
* @class Tween
* @param {Object} target The target object that will have its properties tweened.
* @param {Object} [props] The configuration properties to apply to this tween instance (ex. `{loop:true, paused:true}`.
* All properties default to false. Supported props are:<UL>
*    <LI> loop: sets the loop property on this tween.</LI>
*    <LI> useTicks: uses ticks for all durations instead of milliseconds.</LI>
*    <LI> ignoreGlobalPause: sets the {{#crossLink "Tween/ignoreGlobalPause:property"}}{{/crossLink}} property on this tween.</LI>
*    <LI> override: if true, `Tween.removeTweens(target)` will be called to remove any other tweens with the same target.
*    <LI> paused: indicates whether to start the tween paused.</LI>
*    <LI> position: indicates the initial position for this tween.</LI>
*    <LI> onChange: specifies a listener for the "change" event.</LI>
*    <LI> onComplete: specifies a listener for the "change" event.</LI>
* </UL>
* @param {Object} [pluginData] An object containing data for use by installed plugins. See individual
* plugins' documentation for details.
* @constructor
*/

function Tween2( target, props, pluginData ) {

			/**
			 * Causes this tween to continue playing when a global pause is active. For example, if TweenJS is using {{#crossLink "Ticker"}}{{/crossLink}},
			 * then setting this to true (the default) will cause this tween to be paused when <code>Ticker.setPaused(true)</code>
			 * is called. See the Tween2 {{#crossLink "Tween2/tick"}}{{/crossLink}} method for more info. Can be set via the props
			 * parameter.
			 * @property ignoreGlobalPause
			 * @type boolean
			 * @default false
			 */
			this.ignoreGlobalPause = false;

			/**
			 * If true, the tween will loop when it reaches the end. Can be set via the props param.
			 * @property loop
			 * @type {boolean}
			 * @default false
			 */
			this.loop = false;

			/**
			 * Specifies the total duration of this tween in milliseconds (or ticks if useTicks is true).
			 * This value is automatically updated as you modify the tween. Changing it directly could result in unexpected
			 * behaviour.
			 * @property duration
			 * @type {number}
			 * @default 0
			 * @readonly
			 */
			this.duration = 0;

			/**
			 * Allows you to specify data that will be used by installed plugins. Each plugin uses this differently, but in general
			 * you specify data by setting it to a property of pluginData with the same name as the plugin class.
			 * @example
			 *    myTween.pluginData.PluginClassName = data;
			 * <br/>
			 * Also, most plugins support a property to enable or disable them. This is typically the plugin class name followed by "_enabled".<br/>
			 * @example
			 *    myTween.pluginData.PluginClassName_enabled = false;<br/>
			 * <br/>
			 * Some plugins also store instance data in this object, usually in a property named _PluginClassName.
			 * See the documentation for individual plugins for more details.
			 * @property pluginData
			 * @type {Object}
			 */
			this.pluginData = pluginData || {};

			/**
			 * The target of this tween. This is the object on which the tweened properties will be changed. Changing
			 * this property after the tween is created will not have any effect.
			 * @property target
			 * @type {Object}
			 * @readonly
			 */
			this.target = target;

			/**
			 * The current normalized position of the tween. This will always be a value between 0 and duration.
			 * Changing this property directly will have no effect.
			 * @property position
			 * @type {number}
			 * @readonly
			 */
			this.position = 0;

			/**
			 * Indicates the tween's current position is within a passive wait.
			 * @property passive
			 * @type {boolean}
			 * @default false
			 * @readonly
			 **/
			this.passive = false;

			/**
			 * @property _paused
			 * @type {boolean}
			 * @default false
			 * @protected
			 */
			this._paused = false;

			/**
			 * @property _curQueueProps
			 * @type {Object}
			 * @protected
			 */
			this._curQueueProps = {};

			/**
			 * @property _initQueueProps
			 * @type {Object}
			 * @protected
			 */
			this._initQueueProps = {};

			/**
			 * @property _steps
			 * @type {Array}
			 * @protected
			 */
			this._steps = [];

			/**
			 * @property _actions
			 * @type {Array}
			 * @protected
			 */
			this._actions = [];

			/**
			 * Raw position.
			 * @property _prevPosition
			 * @type {number}
			 * @default 0
			 * @protected
			 */
			this._prevPosition = 0;

			/**
			 * The position within the current step.
			 * @property _stepPosition
			 * @type {number}
			 * @default 0
			 * @protected
			 */
			this._stepPosition = 0; // this is needed by MovieClip.

			/**
			 * Normalized position.
			 * @property _prevPos
			 * @type {number}
			 * @default -1
			 * @protected
			 */
			this._prevPos = -1;

			/**
			 * @property _target
			 * @type {Object}
			 * @protected
			 */
			this._target = target;

			/**
			 * Indicates whether the tween is currently registered with Tween2.
			 * @property _registered
			 * @type {boolean}
			 * @default false
			 * @protected
			 */
			this._registered = false;

			this._onChangeCallback = null;
			this._onCompleteCallback = null;

			if ( props ) {
				this.ignoreGlobalPause = props.ignoreGlobalPause;
				this.loop = props.loop;
				this._onChangeCallback = props['onChange'];
				this._onCompleteCallback = props['onComplete'];
				if ( props.override ) { Tween2.removeTweens( target ); }
			}
			if ( props && props.paused ) { this._paused = true; }
			else { Tween2._register( this, true ); }
			if ( props && props.position != null ) { this.setPosition( props.position, Tween2.NONE ); }

		};

		/**
		 * Constant defining the none actionsMode for use with setPosition.
		 * @property NONE
		 * @type number
		 * @default 0
		 * @static
		 */
		Tween2.NONE = 0;

		/**
		 * Constant defining the loop actionsMode for use with setPosition.
		 * @property LOOP
		 * @type number
		 * @default 1
		 * @static
		 */
		Tween2.LOOP = 1;

		/**
		 * Constant defining the reverse actionsMode for use with setPosition.
		 * @property REVERSE
		 * @type number
		 * @default 2
		 * @static
		 */
		Tween2.REVERSE = 2;

		/**
		 * Constant returned by plugins to tell the tween not to use default assignment.
		 * @property IGNORE
		 * @type Object
		 * @static
		 */
		Tween2.IGNORE = {};

		/**
		 * @property _listeners
		 * @type Array[Tween2]
		 * @static
		 * @protected
		 */
		Tween2._tweens = [];

		/**
		 * @property _plugins
		 * @type Object
		 * @static
		 * @protected
		 */
		Tween2._plugins = {};

		/**
		 * Returns a new tween instance. This is functionally identical to using "new Tween2(...)", but looks cleaner
		 * with the chained syntax of TweenJS.
		 * <h4>Example</h4>
		 *
		 *        var tween = createjs.Tween2.get(target);
		 *
		 * @method get
		 * @param {Object} target The target object that will have its properties tweened.
		 * @param {Object} [props] The configuration properties to apply to this tween instance (ex. `{loop:true, paused:true}`).
		 * All properties default to `false`. Supported props are:
		 * <UL>
		 *    <LI> loop: sets the loop property on this tween.</LI>
		 *    <LI> useTicks: uses ticks for all durations instead of milliseconds.</LI>
		 *    <LI> ignoreGlobalPause: sets the {{#crossLink "Tween2/ignoreGlobalPause:property"}}{{/crossLink}} property on
		 *    this tween.</LI>
		 *    <LI> override: if true, `createjs.Tween2.removeTweens(target)` will be called to remove any other tweens with
		 *    the same target.
		 *    <LI> paused: indicates whether to start the tween paused.</LI>
		 *    <LI> position: indicates the initial position for this tween.</LI>
		 *    <LI> onChange: specifies a listener for the {{#crossLink "Tween2/change:event"}}{{/crossLink}} event.</LI>
		 * </UL>
		 * @param {Object} [pluginData] An object containing data for use by installed plugins. See individual plugins'
		 * documentation for details.
		 * @param {boolean} [override=false] If true, any previous tweens on the same target will be removed. This is the
		 * same as calling `Tween2.removeTweens(target)`.
		 * @return {Tween2} A reference to the created tween. Additional chained tweens, method calls, or callbacks can be
		 * applied to the returned tween instance.
		 * @static
		 */
		Tween2.get = function( target, props, pluginData, override ) {
			if ( override ) { Tween2.removeTweens( target ); }
			return new Tween2( target, props, pluginData );
		};

		/**
		 * Advances all tweens. This typically uses the {{#crossLink "Ticker"}}{{/crossLink}} class, but you can call it
		 * manually if you prefer to use your own "heartbeat" implementation.
		 * @method tick
		 * @param {number} delta The change in time in milliseconds since the last tick. Required unless all tweens have
		 * `useTicks` set to true.
		 * @param {boolean=} paused Indicates whether a global pause is in effect. Tweens with {{#crossLink "Tween2/ignoreGlobalPause:property"}}{{/crossLink}}
		 * will ignore this, but all others will pause if this is `true`.
		 * @static
		 */
		Tween2.tick = function( delta, paused ) {
			var tweens = Tween2._tweens.slice(); // to avoid race conditions.
			for ( var i = 0; i < tweens.length; i++ ) {
				var tween = tweens[i];
				if ( ( paused && !tween.ignoreGlobalPause ) || tween._paused ) { continue; }
				tween.tick( delta );
			}
		};

		/**
		 * Removes all existing tweens for a target. This is called automatically by new tweens if the `override`
		 * property is `true`.
		 * @method removeTweens
		 * @param {Object} target The target object to remove existing tweens from.
		 * @static
		 */
		Tween2.removeTweens = function( target ) {
			if ( !target.tweenjs_count ) { return; }
			var tweens = Tween2._tweens;
			for ( var i = tweens.length - 1; i >= 0; i-- ) {
				var tween = tweens[i];
				if ( tween._target == target ) {
					tween._paused = true;
					tweens.splice( i, 1 );
				}
			}
			target.tweenjs_count = 0;
		};

		/**
		 * Stop and remove all existing tweens.
		 * @method removeAllTweens
		 * @static
		 * @since 0.4.1
		 */
		Tween2.removeAllTweens = function() {
			var tweens = Tween2._tweens;
			for ( var i = 0, l = tweens.length; i < l; i++ ) {
				var tween = tweens[i];
				tween._paused = true;
				tween.target && ( tween.target.tweenjs_count = 0 );
			}
			tweens.length = 0;
		};

		/**
		 * Indicates whether there are any active tweens (and how many) on the target object (if specified) or in general.
		 * @method hasActiveTweens
		 * @param {Object} [target] The target to check for active tweens. If not specified, the return value will indicate
		 * if there are any active tweens on any target.
		 * @return {boolean} If there are active tweens.
		 * @static
		 */
		Tween2.hasActiveTweens = function( target ) {
			if ( target ) { return target.tweenjs_count != null && !!target.tweenjs_count; }
			if ( Tween2._tweens ) {
				return Tween2._tweens && !!Tween2._tweens.length;
			}
			return false;
		};

		/**
		 * Installs a plugin, which can modify how certain properties are handled when tweened. See the {{#crossLink "CSSPlugin"}}{{/crossLink}}
		 * for an example of how to write TweenJS plugins.
		 * @method installPlugin
		 * @static
		 * @param {Object} plugin The plugin class to install
		 * @param {Array} properties An array of properties that the plugin will handle.
		 */
		Tween2.installPlugin = function( plugin, properties ) {
			var priority = plugin.priority;
			if ( priority == null ) { plugin.priority = priority = 0; }
			for ( var i = 0, l = properties.length, p = Tween2._plugins; i < l; i++ ) {
				var n = properties[i];
				if ( !p[n] ) { p[n] = [plugin]; }
				else {
					var arr = p[n];
					for ( var j = 0, jl = arr.length; j < jl; j++ ) {
						if ( priority < arr[j].priority ) { break; }
					}
					p[n].splice( j, 0, plugin );
				}
			}
		};

		/**
		 * Registers or unregisters a tween with the ticking system.
		 * @method _register
		 * @param {Tween2|Timeline} tween The tween instance to register or unregister.
		 * @param {boolean} value If `true`, the tween is registered. If `false` the tween is unregistered.
		 * @static
		 * @protected
		 */
		Tween2._register = function( tween, value ) {
			var target = tween._target;
			var tweens = Tween2._tweens;
			if ( value && !tween._registered ) {
				if ( target ) { target.tweenjs_count = target.tweenjs_count ? target.tweenjs_count + 1 : 1; }
				tweens.push( tween );
			} else if ( !value && tween._registered ) {
				if ( target ) { target.tweenjs_count--; }
				var i = tweens.length;
				while ( i-- ) {
					if ( tweens[i] == tween ) {
						tweens.splice( i, 1 );
						break;
					}
				}
			}
			tween._registered = value;
		};

		/**
		 * Queues a wait (essentially an empty tween).
		 * <h4>Example</h4>
		 *
		 *        //This tween will wait 1s before alpha is faded to 0.
		 *        createjs.Tween2.get(target).wait(1000).to({alpha:0}, 1000);
		 *
		 * @method wait
		 * @param {number} duration The duration of the wait in milliseconds (or in ticks if `useTicks` is true).
		 * @param {boolean} [passive] Tween2 properties will not be updated during a passive wait. This
		 * is mostly useful for use with {{#crossLink "Timeline"}}{{/crossLink}} instances that contain multiple tweens
		 * affecting the same target at different times.
		 * @return {Tween2} This tween instance (for chaining calls).
		 **/
		Tween2.prototype.wait = function( duration, passive ) {
			if ( duration == null || duration <= 0 ) { return this; }
			var o = this._cloneProps( this._curQueueProps );
			return this._addStep( { d: duration, p0: o, e: TweenEasing.LinearNone, p1: o, v: passive } );
		};

		/**
		 * Queues a tween from the current values to the target properties. Set duration to 0 to jump to these value.
		 * Numeric properties will be tweened from their current value in the tween to the target value. Non-numeric
		 * properties will be set at the end of the specified duration.
		 * <h4>Example</h4>
		 *
		 *        createjs.Tween2.get(target).to({alpha:0}, 1000);
		 *
		 * @method to
		 * @param {Object} props An object specifying property target values for this tween (Ex. `{x:300}` would tween the x
		 * property of the target to 300).
		 * @param {number} [duration=0] The duration of the wait in milliseconds (or in ticks if `useTicks` is true).
		 * @param {Function} [ease="linear"] The easing function to use for this tween. See the {{#crossLink "Ease"}}{{/crossLink}}
		 * class for a list of built-in ease functions.
		 * @return {Tween2} This tween instance (for chaining calls).
		 */
		Tween2.prototype.to = function( props, duration, ease ) {
			if ( isNaN( duration ) || duration < 0 ) { duration = 0; }
			return this._addStep( { d: duration || 0, p0: this._cloneProps( this._curQueueProps ), e: ease, p1: this._cloneProps( this._appendQueueProps( props ) ) } );
		};

		/**
		 * Queues an action to call the specified function.
		 * <h4>Example</h4>
		 *
		 *       //would call myFunction() after 1 second.
		 *       myTween.wait(1000).call(myFunction);
		 *
		 * @method call
		 * @param {Function} callback The function to call.
		 * @param {Array} [params]. The parameters to call the function with. If this is omitted, then the function
		 *      will be called with a single param pointing to this tween.
		 * @param {Object} [scope]. The scope to call the function in. If omitted, it will be called in the target's
		 *      scope.
		 * @return {Tween2} This tween instance (for chaining calls).
		 */
		Tween2.prototype.call = function( callback, params, scope ) {
			return this._addAction( { f: callback, p: params ? params : [this], o: scope ? scope : this._target } );
		};

		/**
		 * Queues an action to set the specified props on the specified target. If target is null, it will use this tween's
		 * target.
		 * <h4>Example</h4>
		 *
		 *        myTween.wait(1000).set({visible:false},foo);
		 *
		 * @method set
		 * @param {Object} props The properties to set (ex. `{visible:false}`).
		 * @param {Object} [target] The target to set the properties on. If omitted, they will be set on the tween's target.
		 * @return {Tween2} This tween instance (for chaining calls).
		 */
		Tween2.prototype.set = function( props, target ) {
			return this._addAction( { f: this._set, o: this, p: [props, target ? target : this._target] } );
		};

		/**
		 * Queues an action to play (unpause) the specified tween. This enables you to sequence multiple tweens.
		 * <h4>Example</h4>
		 *
		 *        myTween.to({x:100},500).play(otherTween);
		 *
		 * @method play
		 * @param {Tween2} tween The tween to play.
		 * @return {Tween2} This tween instance (for chaining calls).
		 */
		Tween2.prototype.play = function( tween ) {
			if ( !tween ) { tween = this; }
			return this.call( tween.setPaused, [false], tween );
		};

		/**
		 * Queues an action to pause the specified tween.
		 * @method pause
		 * @param {Tween2} tween The tween to pause. If null, it pauses this tween.
		 * @return {Tween2} This tween instance (for chaining calls)
		 */
		Tween2.prototype.pause = function( tween ) {
			if ( !tween ) { tween = this; }
			return this.call( tween.setPaused, [true], tween );
		};

		/**
		 * Advances the tween to a specified position.
		 * @method setPosition
		 * @param {number} value The position to seek to in milliseconds (or ticks if useTicks is true).
		 * @param {number} [actionsMode=1] Specifies how actions are handled (ie. call, set, play, pause):
		 * <ul>
		 *      <li>{{#crossLink "Tween2/NONE:property"}}{{/crossLink}} (0) - run no actions.</li>
		 *      <li>{{#crossLink "Tween2/LOOP:property"}}{{/crossLink}} (1) - if new position is less than old, then run all
		 *      actions between old and duration, then all actions between 0 and new.</li>
		 *      <li>{{#crossLink "Tween2/REVERSE:property"}}{{/crossLink}} (2) - if new position is less than old, run all
		 *      actions between them in reverse.</li>
		 * </ul>
		 * @return {boolean} Returns `true` if the tween is complete (ie. the full tween has run & {{#crossLink "Tween2/loop:property"}}{{/crossLink}}
		 * is `false`).
		 */
		Tween2.prototype.setPosition = function( value, actionsMode ) {
			if ( value < 0 ) { value = 0; }
			if ( actionsMode == null ) { actionsMode = 1; }

			var t = value;
			var end = false;
			if ( t >= this.duration ) {
				if ( this.loop ) { t = t % this.duration; }
				else {
					t = this.duration;
					end = true;
				}
			}
			if ( t == this._prevPos ) { return end; }

			var prevPos = this._prevPos;
			this.position = this._prevPos = t; // set this in advance in case an action modifies position.
			this._prevPosition = value;

			if ( this._target ) {
				if ( end ) {
					this._updateTargetProps( null, 1 );
				} else if ( this._steps.length > 0 ) {
					for ( var i = 0, l = this._steps.length; i < l; i++ ) {
						if ( this._steps[i].t > t ) { break; }
					}
					var step = this._steps[i - 1];
					this._updateTargetProps( step, ( this._stepPosition = t - step.t ) / step.d );
				}
			}

			if ( actionsMode != 0 && this._actions.length > 0 ) {
				if ( actionsMode == 1 && t < prevPos ) {
					if ( prevPos != this.duration ) { this._runActions( prevPos, this.duration ); }
					this._runActions( 0, t, true );
				} else {
					this._runActions( prevPos, t );
				}
			}

			if ( this._onChangeCallback ) {
				this._onChangeCallback( this );
			}

			if ( end ) {
				this.setPaused( true );
				if ( this._onCompleteCallback ) {
					this._onCompleteCallback( this );
				}
			}

			return end;
		};

		/**
		 * Advances this tween by the specified amount of time in milliseconds (or ticks if`useTicks` is `true`).
		 * This is normally called automatically by the Tween2 engine (via {{#crossLink "Tween2/tick"}}{{/crossLink}}), but is
		 * exposed for advanced uses.
		 * @method tick
		 * @param {number} delta The time to advance in milliseconds (or ticks if `useTicks` is `true`).
		 */
		Tween2.prototype.tick = function( delta ) {
			if ( this._paused ) { return; }
			this.setPosition( this._prevPosition + delta );
		};

		/**
		 * Pauses or plays this tween.
		 * @method setPaused
		 * @param {boolean} [value=true] Indicates whether the tween should be paused (`true`) or played (`false`).
		 * @return {Tween2} This tween instance (for chaining calls)
		 */
		Tween2.prototype.setPaused = function( value ) {
			if ( this._paused === !!value ) { return this; }
			this._paused = !!value;
			Tween2._register( this, !value );
			return this;
		};

		Tween2.prototype.w = Tween2.prototype.wait;
		Tween2.prototype.t = Tween2.prototype.to;
		Tween2.prototype.c = Tween2.prototype.call;
		Tween2.prototype.s = Tween2.prototype.set;

		/**
		 * Returns a string representation of this object.
		 * @method tostring
		 * @return {string} a string representation of the instance.
		 */
		Tween2.prototype.tostring = function() {
			return '[Tween2]';
		};

		/**
		 * @method clone
		 * @protected
		 */
		Tween2.prototype.clone = function() {
			throw ( 'Tween2 can not be cloned.' )
		};

		/**
		 * @method _updateTargetProps
		 * @param {Object} step
		 * @param {number} ratio
		 * @protected
		 */
		Tween2.prototype._updateTargetProps = function( step, ratio ) {
			var p0, p1, v, v0, v1, arr;
			if ( !step && ratio == 1 ) {
				this.passive = false;
				p0 = p1 = this._curQueueProps;
			} else {
				this.passive = !!step.v;
				if ( this.passive ) { return; } // don't update props.
				if ( step.e ) { ratio = step.e( ratio, 0, 1, 1 ); }
				p0 = step.p0;
				p1 = step.p1;
			}

			for ( var n in this._initQueueProps ) {
				if ( ( v0 = p0[n] ) == null ) { p0[n] = v0 = this._initQueueProps[n]; }
				if ( ( v1 = p1[n] ) == null ) { p1[n] = v1 = v0; }
				if ( v0 == v1 || ratio == 0 || ratio == 1 || ( typeof ( v0 ) != 'number' ) ) {
					v = ratio == 1 ? v1 : v0;
				} else {
					v = v0 + ( v1 - v0 ) * ratio;
				}

				var ignore = false;
				if ( arr = Tween2._plugins[n] ) {
					for ( var i = 0, l = arr.length; i < l; i++ ) {
						var v2 = arr[i].tween( this, n, v, p0, p1, ratio, !!step && p0 == p1, !step );
						if ( v2 == Tween2.IGNORE ) { ignore = true; }
						else { v = v2; }
					}
				}
				if ( !ignore ) { this._target[n] = v; }
			}

		};

		/**
		 * @method _runActions
		 * @param {number} startPos
		 * @param {number} endPos
		 * @param {boolean=} includeStart
		 * @protected
		 */
		Tween2.prototype._runActions = function( startPos, endPos, includeStart ) {
			var sPos = startPos;
			var ePos = endPos;
			var i = -1;
			var j = this._actions.length;
			var k = 1;
			if ( startPos > endPos ) {
				sPos = endPos;
				ePos = startPos;
				i = j;
				j = k = -1;
			}
			while ( ( i += k ) != j ) {
				var action = this._actions[i];
				var pos = action.t;
				if ( pos == ePos || ( pos > sPos && pos < ePos ) || ( includeStart && pos == startPos ) ) {
					action.f.apply( action.o, action.p );
				}
			}
		};

		/**
		 * @method _appendQueueProps
		 * @param {Object} o
		 * @protected
		 */
		Tween2.prototype._appendQueueProps = function( o ) {
			var arr, oldValue, i, l, injectProps;
			for ( var n in o ) {
				if ( this._initQueueProps[n] === undefined ) {
					oldValue = this._target[n];

					if ( arr = Tween2._plugins[n] ) {
						for ( i = 0, l = arr.length; i < l; i++ ) {
							oldValue = arr[i].init( this, n, oldValue );
						}
					}
					this._initQueueProps[n] = this._curQueueProps[n] = ( oldValue === undefined ) ? null : oldValue;
				} else {
					oldValue = this._curQueueProps[n];
				}
			}

			for ( var n in o ) {
				oldValue = this._curQueueProps[n];
				if ( arr = Tween2._plugins[n] ) {
					injectProps = injectProps || {};
					for ( i = 0, l = arr.length; i < l; i++ ) {
						if ( arr[i].step ) { arr[i].step( this, n, oldValue, o[n], injectProps ); }
					}
				}
				this._curQueueProps[n] = o[n];
			}
			if ( injectProps ) { this._appendQueueProps( injectProps ); }
			return this._curQueueProps;
		};

		/**
		 * @method _cloneProps
		 * @param {Object} props
		 * @protected
		 */
		Tween2.prototype._cloneProps = function( props ) {
			var o = {};
			for ( var n in props ) {
				o[n] = props[n];
			}
			return o;
		};

		/**
		 * @method _addStep
		 * @param {Object} o
		 * @protected
		 */
		Tween2.prototype._addStep = function( o ) {
			if ( o.d > 0 ) {
				this._steps.push( o );
				o.t = this.duration;
				this.duration += o.d;
			}
			return this;
		};

		/**
		 * @method _addAction
		 * @param {Object} o
		 * @protected
		 */
		Tween2.prototype._addAction = function( o ) {
			o.t = this.duration;
			this._actions.push( o );
			return this;
		};

		/**
		 * @method _set
		 * @param {Object} props
		 * @param {Object} o
		 * @protected
		 */
		Tween2.prototype._set = function( props, o ) {
			for ( var n in props ) {
				o[n] = props[n];
			}
		};


		/*
		* Timeline
		* Visit http://createjs.com/ for documentation, updates and examples.
		*
		* Copyright (c) 2010 gskinner.com, inc.
		*
		* Permission is hereby granted, free of charge, to any person
		* obtaining a copy of this software and associated documentation
		* files (the "Software"), to deal in the Software without
		* restriction, including without limitation the rights to use,
		* copy, modify, merge, publish, distribute, sublicense, and/or sell
		* copies of the Software, and to permit persons to whom the
		* Software is furnished to do so, subject to the following
		* conditions:
		*
		* The above copyright notice and this permission notice shall be
		* included in all copies or substantial portions of the Software.
		*
		* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
		* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
		* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
		* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
		* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
		* OTHER DEALINGS IN THE SOFTWARE.
		*/

		/**
		 * The Timeline class synchronizes multiple tweens and allows them to be controlled as a group. Please note that if a
		 * timeline is looping, the tweens on it may appear to loop even if the "loop" property of the tween is false.
		 * @class Timeline
		 * @param {Array} tweens An array of Tweens to add to this timeline. See {{#crossLink "Timeline/addTween"}}{{/crossLink}}
		 * for more info.
		 * @param {Object} labels An object defining labels for using {{#crossLink "Timeline/gotoAndPlay"}}{{/crossLink}}/{{#crossLink "Timeline/gotoAndStop"}}{{/crossLink}}.
		 * See {{#crossLink "Timeline/setLabels"}}{{/crossLink}}
		 * for details.
		 * @param {Object} props The configuration properties to apply to this tween instance (ex. `{loop:true}`). All properties
		 * default to false. Supported props are:<UL>
		 *    <LI> loop: sets the loop property on this tween.</LI>
		 *    <LI> useTicks: uses ticks for all durations instead of milliseconds.</LI>
		 *    <LI> ignoreGlobalPause: sets the ignoreGlobalPause property on this tween.</LI>
		 *    <LI> paused: indicates whether to start the tween paused.</LI>
		 *    <LI> position: indicates the initial position for this timeline.</LI>
		 *    <LI> onChange: specifies a listener to add for the {{#crossLink "Timeline/change:event"}}{{/crossLink}} event.</LI>
		 *    <LI> onEnd: specifies a listener to add for the {{#crossLink "Timeline/end:event"}}{{/crossLink}} event.</LI>
		 * </UL>
		 * @constructor
		 **/
		function Timeline( tweens, labels, props ) {

			/**
			 * Causes this timeline to continue playing when a global pause is active.
			 * @property ignoreGlobalPause
			 * @type boolean
			 **/
			this.ignoreGlobalPause = false;

			/**
			 * The total duration of this timeline in milliseconds (or ticks if `useTicks `is `true`). This value is usually
			 * automatically updated as you modify the timeline. See {{#crossLink "Timeline/updateDuration"}}{{/crossLink}}
			 * for more information.
			 * @property duration
			 * @type number
			 * @default 0
			 * @readonly
			 **/
			this.duration = 0;

			/**
			 * If true, the timeline will loop when it reaches the end. Can be set via the props param.
			 * @property loop
			 * @type boolean
			 **/
			this.loop = false;

			/**
			 * The current normalized position of the timeline. This will always be a value between 0 and
			 * {{#crossLink "Timeline/duration:property"}}{{/crossLink}}.
			 * Changing this property directly will have no effect.
			 * @property position
			 * @type number
			 * @readonly
			 **/
			this.position = 0;

			/**
			 * @property _paused
			 * @type boolean
			 * @protected
			 **/
			this._paused = false;

			/**
			 * @property _tweens
			 * @type Array[Tween]
			 * @protected
			 **/
			this._tweens = [];

			/**
			 * @property _labels
			 * @type Object
			 * @protected
			 **/
			this._labels = null;

			/**
			 * @property _labelList
			 * @type Array[Object]
			 * @protected
			 **/
			this._labelList = null;

			/**
			 * @property _prevPosition
			 * @type number
			 * @default 0
			 * @protected
			 **/
			this._prevPosition = 0;

			/**
			 * @property _prevPos
			 * @type number
			 * @default -1
			 * @protected
			 **/
			this._prevPos = -1;

			/**
			 * Indicates whether the timeline is currently registered with Tween.
			 * @property _registered
			 * @type {boolean}
			 * @default false
			 * @protected
			 */
			this._registered = false;

			this._onChangeCallback = null;
			this._onCompleteCallback = null;

			if ( props ) {
				this.loop = props.loop;
				this.ignoreGlobalPause = props.ignoreGlobalPause;
				this._onChangeCallback = ( typeof props.onChange !== 'undefined' ? props.onChange : null );
				this._onCompleteCallback = ( typeof props.onEnd !== 'undefined' ? props.onEnd : null );
			}
			if ( tweens ) { this.addTween.apply( this, tweens ); }
			this.setLabels( labels );
			if ( props && props.paused ) { this._paused = true; }
			else { Tween2._register( this, true ); }
			if ( props && props.position != null ) { this.setPosition( props.position, Tween2.NONE ); }
		};

		/**
		 * Adds one or more tweens (or timelines) to this timeline. The tweens will be paused (to remove them from the
		 * normal ticking system) and managed by this timeline. Adding a tween to multiple timelines will result in
		 * unexpected behaviour.
		 * @method addTween
		 * @param {Tween2} tween The tween(s) to add. Accepts multiple arguments.
		 * @return {Tween2} The first tween that was passed in.
		 **/
		Timeline.prototype.addTween = function( tween ) {
			var l = arguments.length;
			if ( l > 1 ) {
				for ( var i = 0; i < l; i++ ) { this.addTween( arguments[i] ); }
				return arguments[0];
			} else if ( l == 0 ) { return null; }
			this.removeTween( tween );
			this._tweens.push( tween );
			tween.setPaused( true );
			tween._paused = false;
			if ( tween.duration > this.duration ) { this.duration = tween.duration; }
			if ( this._prevPos >= 0 ) { tween.setPosition( this._prevPos, Tween2.NONE ); }
			return tween;
		};

		/**
		 * Removes one or more tweens from this timeline.
		 * @method removeTween
		 * @param {Tween2} tween The tween(s) to remove. Accepts multiple arguments.
		 * @return boolean Returns `true` if all of the tweens were successfully removed.
		 **/
		Timeline.prototype.removeTween = function( tween ) {
			var l = arguments.length;
			if ( l > 1 ) {
				var good = true;
				for ( var i = 0; i < l; i++ ) { good = good && this.removeTween( arguments[i] ); }
				return good;
			} else if ( l == 0 ) { return false; }

			var tweens = this._tweens;
			var i = tweens.length;
			while ( i-- ) {
				if ( tweens[i] == tween ) {
					tweens.splice( i, 1 );
					if ( tween.duration >= this.duration ) { this.updateDuration(); }
					return true;
				}
			}
			return false;
		};

		/**
		 * Adds a label that can be used with {{#crossLink "Timeline/gotoAndPlay"}}{{/crossLink}}/{{#crossLink "Timeline/gotoAndStop"}}{{/crossLink}}.
		 * @method addLabel
		 * @param {string} label The label name.
		 * @param {number} position The position this label represents.
		 **/
		Timeline.prototype.addLabel = function( label, position ) {
			this._labels[label] = position;
			var list = this._labelList;
			if ( list ) {
				for ( var i = 0, l = list.length; i < l; i++ ) { if ( position < list[i].position ) { break; } }
				list.splice( i, 0, { label: label, position: position } );
			}
		};

		/**
		 * Defines labels for use with gotoAndPlay/Stop. Overwrites any previously set labels.
		 * @method setLabels
		 * @param {Object} o An object defining labels for using {{#crossLink "Timeline/gotoAndPlay"}}{{/crossLink}}/{{#crossLink "Timeline/gotoAndStop"}}{{/crossLink}}
		 * in the form `{labelName:time}` where time is in milliseconds (or ticks if `useTicks` is `true`).
		 **/
		Timeline.prototype.setLabels = function( o ) {
			this._labels = o ? o : { };
		};

		/**
		 * Returns a sorted list of the labels defined on this timeline.
		 * @method getLabels
		 * @return {Array<Object>} A sorted array of objects with label and position properties.
		 **/
		Timeline.prototype.getLabels = function() {
			var list = this._labelList;
			if ( !list ) {
				list = this._labelList = [];
				var labels = this._labels;
				for ( var n in labels ) {
					list.push( { label: n, position: labels[n] } );
				}
				list.sort( function( a, b ) { return a.position - b.position; } );
			}
			return list;
		};

		/**
		 * Returns the name of the label on or immediately before the current position. For example, given a timeline with
		 * two labels, "first" on frame index 4, and "second" on frame 8, getCurrentLabel would return:
		 * <UL>
		 *         <LI>null if the current position is 2.</LI>
		 *         <LI>"first" if the current position is 4.</LI>
		 *         <LI>"first" if the current position is 7.</LI>
		 *         <LI>"second" if the current position is 15.</LI>
		 * </UL>
		 * @method getCurrentLabel
		 * @return {string|null} The name of the current label or null if there is no label
		 **/
		Timeline.prototype.getCurrentLabel = function() {
			var labels = this.getLabels();
			var pos = this.position;
			var l = labels.length;
			if ( l ) {
				for ( var i = 0; i < l; i++ ) { if ( pos < labels[i].position ) { break; } }
				return ( i == 0 ) ? null : labels[i - 1].label;
			}
			return null;
		};

		/**
		 * Unpauses this timeline and jumps to the specified position or label.
		 * @method gotoAndPlay
		 * @param {string|number} positionOrLabel The position in milliseconds (or ticks if `useTicks` is `true`)
		 * or label to jump to.
		 **/
		Timeline.prototype.gotoAndPlay = function( positionOrLabel ) {
			this.setPaused( false );
			this._goto( positionOrLabel );
		};

		/**
		 * Pauses this timeline and jumps to the specified position or label.
		 * @method gotoAndStop
		 * @param {string|number} positionOrLabel The position in milliseconds (or ticks if `useTicks` is `true`) or label
		 * to jump to.
		 **/
		Timeline.prototype.gotoAndStop = function( positionOrLabel ) {
			this.setPaused( true );
			this._goto( positionOrLabel );
		};

		/**
		 * Advances the timeline to the specified position.
		 * @method setPosition
		 * @param {number} value The position to seek to in milliseconds (or ticks if `useTicks` is `true`).
		 * @param {number} [actionsMode] parameter specifying how actions are handled. See the Tween {{#crossLink "Tween/setPosition"}}{{/crossLink}}
		 * method for more details.
		 * @return {boolean} Returns `true` if the timeline is complete (ie. the full timeline has run & {{#crossLink "Timeline/loop:property"}}{{/crossLink}}
		 * is `false`).
		 **/
		Timeline.prototype.setPosition = function( value, actionsMode ) {
			if ( value < 0 ) { value = 0; }
			if ( actionsMode == null ) { actionsMode = 1; }

			var t = value;
			var end = false;
			if ( t >= this.duration ) {
				if ( this.loop ) { t = t % this.duration; }
				else {
					t = this.duration;
					end = true;
				}
			}
			if ( t == this._prevPos ) { return end; }

			this._prevPosition = value;
			this.position = this._prevPos = t; // in case an action changes the current frame.

			for ( var i = 0, l = this._tweens.length; i < l; i++ ) {
				this._tweens[i].setPosition( t, actionsMode );
				if ( t != this._prevPos ) { return false; } // an action changed this timeline's position.
			}

			if ( this._onChangeCallback ) {
				this._onChangeCallback( this );
			}

			if ( end ) {
				if ( this._onCompleteCallback ) {
					this._onCompleteCallback( this );
				}
				this.setPaused( true );
			}

			return end;
		};

		/**
		 * Pauses or plays this timeline.
		 * @method setPaused
		 * @param {boolean} value Indicates whether the tween should be paused (`true`) or played (`false`).
		 **/
		Timeline.prototype.setPaused = function( value ) {
			this._paused = !!value;
			Tween2._register( this, !value );
		};

		/**
		 * Recalculates the duration of the timeline. The duration is automatically updated when tweens are added or removed,
		 * but this method is useful if you modify a tween after it was added to the timeline.
		 * @method updateDuration
		 **/
		Timeline.prototype.updateDuration = function() {
			this.duration = 0;
			for ( var i = 0, l = this._tweens.length; i < l; i++ ) {
				var tween = this._tweens[i];
				if ( tween.duration > this.duration ) { this.duration = tween.duration; }
			}
		};

		/**
		 * Advances this timeline by the specified amount of time in milliseconds (or ticks if `useTicks` is `true`).
		 * This is normally called automatically by the Tween engine (via the {{#crossLink "Tween/tick:event"}}{{/crossLink}}
		 * event), but is exposed for advanced uses.
		 * @method tick
		 * @param {number} delta The time to advance in milliseconds (or ticks if useTicks is true).
		 **/
		Timeline.prototype.tick = function( delta ) {
			this.setPosition( this._prevPosition + delta );
		};

		/**
		 * If a numeric position is passed, it is returned unchanged. If a string is passed, the position of the
		 * corresponding frame label will be returned, or `null` if a matching label is not defined.
		 * @method resolve
		 * @param {string|number} positionOrLabel A numeric position value or label string.
		 **/
		Timeline.prototype.resolve = function( positionOrLabel ) {
			var pos = Number( positionOrLabel );
			if ( isNaN( pos ) ) { pos = this._labels[positionOrLabel]; }
			return pos;
		};

		/**
		 * Returns a string representation of this object.
		 * @method tostring
		 * @return {string} a string representation of the instance.
		 **/
		Timeline.prototype.tostring = function() {
			return '[Timeline]';
		};

		/**
		 * @method clone
		 * @protected
		 **/
		Timeline.prototype.clone = function() {
			throw ( 'Timeline can not be cloned.' )
		};

		/**
		 * @method _goto
		 * @param {string | number} positionOrLabel
		 * @protected
		 **/
		Timeline.prototype._goto = function( positionOrLabel ) {
			var pos = this.resolve( positionOrLabel );
			if ( pos != null ) { this.setPosition( pos ); }
		};
/**
 * @constructor
 * @struct
 */
function ShaderRing() {
	this.spriteDisplace = null;
	this.canvas = null;
	this.spriteDisplaceMaxScale = 1;

	if ( Application.RENDER_MODE === Application.RENDER_WEBGL && !Application.isLowDevice ) {
		this.spriteDisplace = Application.instance.getSpriteFromUrl( 'media/images/animo/shader_ring.jpg' );
		this.spriteDisplace['pivot'].x = 60;
		this.spriteDisplace['pivot'].y = 60;
		this.displacementFilter = new window['PIXI']['filters']['DisplacementFilter']( this.spriteDisplace );
	}
}

ShaderRing.prototype.create = function( canvas, x, y, scaleEnd, scaleInit ) {
	this.remove();
	this.canvas = canvas;
	if ( this.spriteDisplace && this.canvas ) {
		this.spriteDisplaceMaxScale = scaleEnd;
		this.spriteDisplace.scale.x = scaleInit || 1;
		this.spriteDisplace.scale.y = scaleInit || 1;
		this.spriteDisplace.position.x = x;
		this.spriteDisplace.position.y = y;
		this.canvas.addChild( this.spriteDisplace );
		this.canvas.filters = [this.displacementFilter];
	}
};

ShaderRing.prototype.remove = function() {
	if ( this.spriteDisplace && this.spriteDisplace.parent && this.canvas ) {
		this.canvas.removeChild( this.spriteDisplace );
		this.canvas.filters = null;
		this.canvas = null;
	}
};

/**
 * @public
 * @param {number} dt
 */
ShaderRing.prototype.update = function( dt ) {
	if ( this.spriteDisplace && this.spriteDisplace.parent ) {
		this.spriteDisplace.rotation += 0.1;
		this.spriteDisplace.scale.x += 0.021 * dt;
		this.spriteDisplace.scale.y += 0.021 * dt;
		if ( this.spriteDisplace.scale.x > this.spriteDisplaceMaxScale ) {
			this.remove();
		}
	}
};

ShaderRing.prototype.free = function() {
	this.remove();
	this.spriteDisplace = null;
	this.canvas = null;
};

/**
 * @constructor
 * @struct
 * @param {SJsonLoader} jsonLoader
*/
function SLoader( jsonLoader ) {
	this.onLoadCaller = null;
	this.onLoadCallback = null;
	this.jsonLoader = jsonLoader;

	var animations = this.jsonLoader.json['animations'];
	if ( animations ) {
		for ( var i = 0; i < animations['length']; i++ ) {
			animations[i]['atlas'] = this.jsonLoader.json['meta']['atlas'];
			if ( typeof window['globalAnimations'][animations[i]['n']] !== 'undefined' ) {
				Application.warn( 'Clip [' + animations[i]['n'] + '] is duplicated in multiple JSON files : '
							  + this.jsonLoader.url + ' || ' + window['globalAnimations'][animations[i]['n'] + '_url'] );
			}
			window['globalAnimations'][animations[i]['n']] = animations[i];
			window['globalAnimations'][animations[i]['n'] + '_url'] = this.jsonLoader.url;
		}
	}
}

SLoader.prototype.addLoadListener = function( caller, callback ) {
	this.onLoadCaller = caller;
	this.onLoadCallback = callback;
};

SLoader.prototype.load = function() {
	var self = this;
	var i = 0;
	var j = 0;
	var meta = this.jsonLoader.json['meta'];
	var imageList = [];

	SLoader.JsonTextures[this.jsonLoader.url] = [];

	for ( i = 0; i < meta['atlas']['length']; i++ ) {
		var textureUrl = this.jsonLoader.baseUrl + meta['atlas'][i];
		imageList[i] = new PIXI.loaders.Loader();
		imageList[i].add( meta['atlas'][i], textureUrl );
		imageList[i]['parent'] = this;
		imageList[i]['metaImage'] = meta['atlas'][i];
		imageList[i]['metaIndex'] = i;
		imageList[i].once( 'complete', function() {
			if ( this.parent ) {
				this.parent.onLoaded( this );
			}
		} );
		imageList[i].load();
	}
};

SLoader.prototype.onLoaded = function( loader ) {

	if ( this.onLoadCaller && this.onLoadCallback ) {
		this.onLoadCallback.call( this.onLoadCaller );
	}

	if ( typeof this.jsonLoader.json['atlas'] === 'undefined' ) {
		return;
	}
	Application.info( 'SLoader::onLoaded: ' + loader['metaImage'] );

	var index = loader['metaIndex'];
	var texture = loader['resources'][loader['metaImage']]['texture']['baseTexture'];
	var atlas = this.jsonLoader.json['atlas'][index];
	var tmpTextureExportName = '';
	for ( var j = 0; j < atlas['length']; j++ ) {
		var info = atlas[j];
		tmpTextureExportName = this.jsonLoader.json['meta']['atlas'][index] + '_' + j;

		var frame = new window['PIXI']['Rectangle']( info['x'], info['y'], info['w'], info['h'] );
		frame['p'] = info['p'];
		frame['q'] = info['q'];
		frame['ax'] = info['p'] / info['w'];
		frame['ay'] = info['q'] / info['h'];
		window['PIXI'].utils.TextureCache[tmpTextureExportName] = new window['PIXI'].Texture( texture, frame );

		if ( atlas[j]['n'] !== '' ) {
			window['PIXI'].utils.TextureCache[atlas[j]['n']] = new window['PIXI'].Texture( texture, frame );
		}
	}
	/** @type {SLoader} */
	var parent = loader['parent']
	SLoader.JsonTextures[parent.jsonLoader.url].push( texture );
};

/** @type {Object.<string, Array.<PIXI.BaseTexture>>} */
SLoader.JsonTextures = {};

/**
 * @param {Array.<string>} assets
 * @return {boolean}
 */
SLoader.checkTexturesLoaded = function( assets ) {
	if ( !assets ) {
		return false;
	}
	for ( var i = 0; i < assets.length; i++ ) {
		if ( typeof SLoader.JsonTextures[assets[i]] === 'undefined' ) {
			return false;
		}
	}
	return true;
};

SLoader.showAllTextures = function() {
	for ( var texture in SLoader.JsonTextures ) {
		Application.info( 'SLoader >> Textures :: id [' + texture + ']' );
	}
};

SLoader.unloadFromList = function( list ) {
	for ( var i = 0; i < list.length; i++ ) {
		SLoader.unloadTextureFromJson( list[i] );
	}
};

SLoader.unloadTextureFromJson = function( id ) {
	if ( SLoader.JsonTextures[id] ) {
		Application.warn( 'SLoader >> unloadTexture from Json[' + id + ']' );
		for ( var i = 0; i < SLoader.JsonTextures[id].length; i++ ) {
			Application.warn( 'SLoader > unload ' + SLoader.JsonTextures[id][i].imageUrl );
			for ( var s in window['PIXI']['utils']['TextureCache'] ) {
				if ( window['PIXI']['utils']['TextureCache'][s] &&
					 window['PIXI']['utils']['TextureCache'][s].baseTexture === SLoader.JsonTextures[id][i] ) {
					window['PIXI']['utils']['TextureCache'][s] = null;
				}
			}
			for ( var m in window['globalAnimations'] ) {
				if ( window['globalAnimations'][m + '_url'] === id ) {
					window['globalAnimations'][m] = null;
					delete window['globalAnimations'][m];
					delete window['globalAnimations'][m + '_url'];
				}
			}
			SLoader.JsonTextures[id][i].destroy();
		}
		SLoader.JsonTextures[id] = null;
		delete SLoader.JsonTextures[id];
	}
	else {
		Application.info( 'SLoader >> unloadTexture, texture [' + id + '] no found' );
	}
};

/**
* @constructor
* @extends PIXI.Container
*/
function SDisplayObjectContainer() {

	PIXI.Container.call( this );

	this.m_pressCaller = null;
	this.m_pressCallback = null;
	this.m_releaseCaller = null;
	this.m_releaseCallback = null;
	this.m_pressAndReleaseCaller = null;
	this.m_pressAndReleaseCallback = null;
	this.m_pointerOverCaller = null;
	this.m_pointerOverCallback = null;
	this.m_pointerMoveCaller = null;
	this.m_pointerMoveCallback = null;

	/** @type {Array.<SGraphics>} */
	this.collisionsClips = [];
	/** @type {Object.<string, Rectangle>} */
	this.collisions = {};

	this['showCollision'] = this.showCollision;
	this['toggleCollision'] = this.toggleCollision;
	this['_onPointerPress'] = this._onPointerPress;
	this['_onPointerRelease'] = this._onPointerRelease;
	this['_onPointerPressAndRelease'] = this._onPointerPressAndRelease;
	this['_onPointerOver'] = this._onPointerOver;
	this['onPointerMove'] = this.onPointerMove;
}
Application.subclass( SDisplayObjectContainer, PIXI.Container );

/** @override */
SDisplayObjectContainer.prototype.free = function() {
	if ( this.collisionsClips ) {
		while ( this.collisionsClips.length > 0 ) {
			this.removeChild( this.collisionsClips[0] );
			this.collisionsClips[0].free();
			this.collisionsClips[0] = null;
			this.collisionsClips.splice( 0, 1 );
		}
		this.collisionsClips = null;
	}

	if ( this.children.length > 0 ) {
		Application.warn( 'An animation with children is being deleted!' );
	}

	while ( this.children && this.children.length > 0 ) {
		if ( this.children[0].free ) {
			this.children[0].free();
		}
		this.removeChild( this.children[0] );
	}

	for ( var coll in this.collisions ) {
		this.collisions[coll] = null;
	}
	this.collisions = null;

	PIXI.Container.prototype.free.call( this );
	this._pressCaller = null;
	this._pressCallback = null;
	this._releaseCaller = null;
	this._releaseCallback = null;
	this._pressAndReleaseCaller = null;
	this._pressAndReleaseCallback = null;
};

/**
 * @param {number} x
 * @param {number} y
 */
SDisplayObjectContainer.prototype.setPosition = function( x, y ) {
	this.position.x = x;
	this.position.y = y;
};

/**
 * @param {number} sx
 * @param {number=} sy
 */
SDisplayObjectContainer.prototype.setScale = function( sx, sy ) {
	this.scale.x = sx;
	this.scale.y = sy || sx;
};

/**
 * @param {number} angle
 */
SDisplayObjectContainer.prototype.setRotation = function( angle ) {
	this.rotation = angle;
};

/**
 * @override
 */
SDisplayObjectContainer.prototype.addChild = function( child ) {
	child['collisionView'] = this['collisionView'];
	if ( child['collisionView'] && child['showCollision'] ) {
		child['showCollision']();
	}
	return PIXI.Container.prototype['addChild']['call']( this, child );
};

/**
 * @override
 */
SDisplayObjectContainer.prototype.removeChild = function( child ) {
	return PIXI.Container.prototype['removeChild']['call']( this, child );
};

SDisplayObjectContainer.prototype.toggleCollision = function() {
	PIXI.Container.prototype['toggleCollision']['call']( this );
	this.showCollision();
};

SDisplayObjectContainer.prototype.showCollision = function() {
	while ( this.collisionsClips.length > 0 ) {
		this.removeChild( this.collisionsClips[0] );
		this.collisionsClips[0].free();
		this.collisionsClips[0] = null;
		this.collisionsClips.splice( 0, 1 );
	}

	if ( this['collisionView'] ) {
		for ( var collision in this.collisions ) {
			if ( this.collisions[collision] ) {
				var rect = this.collisions[collision];
				var cc = new SGraphics();
				var color = ( collision === 'mcCollision' ) ? this['collisionColor'] : 0x0000FF;
				cc.drawRectangle( rect.x, rect.y, rect.w, rect.h, 1, this['collisionColor'], color, 1, 0.1 );
				this.collisionsClips.push( cc );
				this.addChild( cc );
			}
		}
	}
};

/**
 * @param {string} name
 * return {Rectangle}
 */
SDisplayObjectContainer.prototype.getCollision = function( name ) {
	return this.collisions[name] || null;
};

/** @param {string} name */
/** @param {Rectangle} rectangle */
SDisplayObjectContainer.prototype.addCollision = function( name, rectangle ) {
	this.collisions[name] = rectangle;
};

/**
 * Add Listener interactive object ( Mouse & Touch )
 * @param {Object} caller
 * @param {function(Object)|null} callback
 */
SDisplayObjectContainer.prototype.addPressListener = function( caller, callback ) {
	this['interactive'] = true;
	this['self'] = this;
	this['mousedown'] = this['touchstart'] = function( e ) { this['self']['_onPointerPress']( e ); }
	this.m_pressCaller = caller;
	this.m_pressCallback = callback;
};

/**
 * @param {Object} caller
 * @param {function(Object)|null} callback
 */
SDisplayObjectContainer.prototype.addReleaseListener = function( caller, callback ) {
	this['interactive'] = true;
	this['self'] = this;
	this['mouseup'] = this['mouseupoutside'] = function( e ) { this['self']['_onPointerRelease']( e ); }
	this['touchend'] = this['touchendoutside'] = function( e ) { this['self']['_onPointerRelease']( e ); }
	this.m_releaseCaller = caller;
	this.m_releaseCallback = callback;
};

/**
 * @param {Object} caller
 * @param {function(Object)|null} callback
 */
SDisplayObjectContainer.prototype.addPressAndReleaseListener = function( caller, callback ) {
	this['interactive'] = true;
	this['self'] = this;
	this['click'] = this['tap'] = function( e ) { this['self']['_onPointerPressAndRelease']( e ); }
	this.m_pressAndReleaseCaller = caller;
	this.m_pressAndReleaseCallback = callback;
};

/**
 * @param {Object} caller
 * @param {function(Object)|null} callback
 */
SDisplayObjectContainer.prototype.addPointerOverListener = function( caller, callback ) {
	this['interactive'] = true;
	this['self'] = this;
	this['mouseover'] = function( e ) { this['self']['_onPointerOver']( e ); }
	this.m_pointerOverCaller = caller;
	this.m_pointerOverCallback = callback;
};

/**
 * @param {Object} caller
 * @param {function(Object)|null} callback
 */
SDisplayObjectContainer.prototype.addPointerMoveListener = function( caller, callback ) {
	this['interactive'] = true;
	this['self'] = this;
	this['mousemove'] = this['touchmove'] = function( e ) { this['self']['onPointerMove']( e ); }
	this.m_pointerMoveCaller = caller;
	this.m_pointerMoveCallback = callback;
};

SDisplayObjectContainer.prototype._onPointerPress = function( e ) {
	if ( this.m_pressCaller !== null && this.m_pressCallback !== null ) {
		e.data.global.x = Math.floor( ( e.data.global.x - Application.instance.canvas.position.x ) / Layout.scale );
		e.data.global.y = Math.floor( ( e.data.global.y - Application.instance.canvas.position.y ) / Layout.scale );
		this.m_pressCallback.call( this.m_pressCaller, e );
	}
};

SDisplayObjectContainer.prototype._onPointerRelease = function( e ) {
	if ( this.m_releaseCaller !== null && this.m_releaseCallback !== null ) {
		e.data.global.x = Math.floor( ( e.data.global.x - Application.instance.canvas.position.x ) / Layout.scale );
		e.data.global.y = Math.floor( ( e.data.global.y - Application.instance.canvas.position.y ) / Layout.scale );
		this.m_releaseCallback.call( this.m_releaseCaller, e );
	}
};

SDisplayObjectContainer.prototype._onPointerPressAndRelease = function( e ) {
	if ( this.m_pressAndReleaseCaller !== null && this.m_pressAndReleaseCallback !== null ) {
		e.data.global.x = Math.floor( ( e.data.global.x - Application.instance.canvas.position.x ) / Layout.scale );
		e.data.global.y = Math.floor( ( e.data.global.y - Application.instance.canvas.position.y ) / Layout.scale );
		this.m_pressAndReleaseCallback.call( this.m_pressAndReleaseCaller, e );
	}
};

SDisplayObjectContainer.prototype._onPointerOver = function( e ) {
	if ( this.m_pointerOverCaller !== null && this.m_pointerOverCallback !== null ) {
		e.data.global.x = Math.floor( ( e.data.global.x - Application.instance.canvas.position.x ) / Layout.scale );
		e.data.global.y = Math.floor( ( e.data.global.y - Application.instance.canvas.position.y ) / Layout.scale );
		this.m_pointerOverCallback.call( this.m_pointerOverCaller, e );
	}
};

SDisplayObjectContainer.prototype.onPointerMove = function( e ) {
	if ( this.m_pointerMoveCaller !== null && this.m_pointerMoveCallback !== null ) {
		e.data.global.x = Math.floor( ( e.data.global.x - Application.instance.canvas.position.x ) / Layout.scale );
		e.data.global.y = Math.floor( ( e.data.global.y - Application.instance.canvas.position.y ) / Layout.scale );
		this.m_pointerMoveCallback.call( this.m_pointerMoveCaller, e );
	}
};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
SDisplayObjectContainer.prototype.hitTestPoint = function( x, y ) {
	/** @type {Rectangle} */
	var bounds = this.getCollision( 'mcCollision' );
	if ( bounds != null ) {
		var point = new PIXI.Point( x, y );
		this['worldTransform']['applyInverse']( point, point );
		return bounds.contains( point['x'], point['y'] );
	}
	return false;
};

/**
 * @param {SDisplayObjectContainer|SSprite} display
 * @return {boolean}
 */
SDisplayObjectContainer.prototype.hitTest = function( display ) {
	var b1 = this.getCollision( 'mcCollision' );
	var b2 = display.getCollision( 'mcCollision' );

	if ( b1 && b2 ) {
		if ( this['worldTransform']['a'] === 1 && this['worldTransform']['b'] === 0 ) {
			this['displayObjectUpdateTransform']();
		}

		if ( display['worldTransform']['a'] === 1 && display['worldTransform']['b'] === 0 ) {
			display['displayObjectUpdateTransform']();
		}

		return SATCollisionDetector.calculatePolyPolyIntersection(
					SDisplayObjectContainer.getCoordinatesMatrix( this['worldTransform'],
																  b1.x,
																  b1.y,
																  b1.w,
																  b1.h ),
					SDisplayObjectContainer.getCoordinatesMatrix( display['worldTransform'],
																  b2.x,
																  b2.y,
																  b2.w,
																  b2.h ) );
	}
	return false;
};


/**
 * @param {SDisplayObjectContainer|SSprite} display1
 * @param {Rectangle} bounds1
 * @param {SDisplayObjectContainer|SSprite}display2
 * @param {Rectangle} bounds2
 * @return {boolean}
 */
SDisplayObjectContainer.hitTestByBounds = function( display1, bounds1, display2, bounds2 ) {
	if ( display1 && bounds1 && display2 && bounds2 ) {
		if ( display1['worldTransform']['a'] === 1 && display1['worldTransform']['b'] === 0 ) {
			display1['displayObjectUpdateTransform']();
		}

		if ( display2['worldTransform']['a'] === 1 && display2['worldTransform']['b'] === 0 ) {
			display2['displayObjectUpdateTransform']();
		}

		return SATCollisionDetector.calculatePolyPolyIntersection(
					SDisplayObjectContainer.getCoordinatesMatrix( display1['worldTransform'],
																  bounds1.x,
																  bounds1.y,
																  bounds1.w,
																  bounds1.h ),
					SDisplayObjectContainer.getCoordinatesMatrix( display2['worldTransform'],
																  bounds2.x,
																  bounds2.y,
																  bounds2.w,
																  bounds2.h ) );
	}
	return false;
};

/**
 * @param {PIXI.Matrix} matrix
 * @param {number} x1
 * @param {number} y1
 * @param {number} w1
 * @param {number} h1
 */
SDisplayObjectContainer.getCoordinatesMatrix = function( matrix, x1, y1, w1, h1 ) {
	var points = [];
	points.push( [x1, y1] );
	points.push( [x1 + w1, y1] );
	points.push( [x1 +  w1, y1 + h1] );
	points.push( [x1, y1 + h1] );

	var x, y;
	for ( var i = 0; i < points.length; i++ ) {
		x = points[i][0];
		y = points[i][1];
		points[i][0] = matrix.a * x + matrix.c * y + matrix.tx;
		points[i][1] = matrix.b * x + matrix.d * y + matrix.ty;
	}
	return points;
};

/**
* @constructor
* @param {string=} name
* @param {boolean=} crossorigin
* @param {boolean=} scaleMode
* @extends PIXI.Sprite
*/
function SSprite( name, crossorigin, scaleMode ) {
	this.name = name || '';
	var texture = name ? window['PIXI'].Texture.fromImage( name, crossorigin, scaleMode ) : window['PIXI'].Texture['EMPTY'];
	this.isSprite = true;
	PIXI.Sprite.call( this, texture );
}
Application.subclass( SSprite, PIXI.Sprite );

/**
 * @param {number} x
 * @param {number} y
 */
SSprite.prototype.setPosition = function( x, y ) {
	this.position.x = x;
	this.position.y = y;
};

/**
 * @param {number} sx
 * @param {number=} sy
 */
SSprite.prototype.setScale = function( sx, sy ) {
	this.scale.x = sx;
	this.scale.y = sy || sx;
};

/**
* @constructor
* @extends PIXI.Text
*/
function SPixiText( text, style ) {


	this.collisionsClips = [];
	this.debugRect = null;

	PIXI.Text.call( this, text, style );

	if ( Application.RIGHT_TO_LEFT ) {
		this.rtl = true;
		this.canvas.setAttribute( 'dir', 'rtl' );
		this.canvas.style.top = '-1000px';
		this.canvas.style.left = '-1000px';
		this.canvas.style.position = 'absolute';
		this.canvas.style.opacity = 0;
		document.body.appendChild( this.canvas );
	}
}
Application.subclass( SPixiText, PIXI.Text );

SPixiText.prototype.toggleCollision = function() {
	PIXI.Container.prototype.toggleCollision.call( this );
	this.showCollision();
};

SPixiText.prototype.showCollision = function() {
	while ( this.collisionsClips.length > 0 ) {
		this['removeChild']( this.collisionsClips[0] );
		this.collisionsClips[0].free();
		this.collisionsClips[0] = null;
		this.collisionsClips.splice( 0, 1 );
	}

	if ( this.collisionView ) {
		var cc = new SGraphics();
		cc.drawRectangle( this.debugRect.x - this.position.x,
						  this.debugRect.y - this.position.y,
						  this.debugRect.w,
						  this.debugRect.h, 1, 0xFFFF00, 0xFFFF100, 1, 0.1 );
		this.collisionsClips.push( cc );
		this['addChild']( cc );
	}
};

SPixiText.prototype.free = function() {
	if ( Application.RIGHT_TO_LEFT ) {
		document.body.removeChild( this.canvas );
	}

	this.context.dispose && this.context.dispose();
	this.canvas.dispose && this.canvas.dispose();
	this.destroy( true );
	this.collisionsClips = null;
	this.debugRect = null;
};

/**
* @constructor
* @extends PIXI.Graphics
*/
function SGraphics() {

	PIXI.Graphics.call( this );
}
Application.subclass( SGraphics, PIXI.Graphics );

SGraphics.prototype.free = function() {
	PIXI.Graphics.prototype.destroy.call( this );
};

/**
 * Draw a Line.
 * @param {number} startX
 * @param {number} startY
 * @param {number} endX
 * @param {number} endY
 * @param {number=} borderColor
 * @param {number=} borderWidth
 * @param {number=} borderAlpha
 */
SGraphics.prototype.drawLine = function drawLine( startX, startY,
												  endX, endY,
												  borderColor,
												  borderWidth,
												  borderAlpha ) {
	this.lineStyle( typeof borderWidth === 'undefined' ? 1 : borderWidth,
					typeof borderColor === 'undefined' ? Common.COLOR_BLACK : borderColor,
					typeof borderAlpha === 'undefined' ? 1 : borderAlpha );
	this.moveTo( startX, startY );
	this.lineTo( endX, endY );
};

/**
 * Draw a Rectangle.
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number=} borderWidth
 * @param {number=} borderColor
 * @param {number=} colorFill
 * @param {number=} borderAlpha
 * @param {number=} fillAlpha
 */
SGraphics.prototype.drawRectangle = function drawRectangle( x, y, w, h,
															borderWidth,
															borderColor,
															colorFill,
															borderAlpha,
															fillAlpha ) {
	if ( typeof colorFill === 'undefined' ) {
		this.fillColor = undefined;
	}
	else {
		this.beginFill( colorFill,
						typeof fillAlpha === 'undefined' ? 1 : fillAlpha );
	}

	this.lineStyle( typeof borderWidth === 'undefined' ? 1 : borderWidth,
					typeof borderColor === 'undefined' ? Common.COLOR_BLACK : borderColor,
					typeof borderAlpha === 'undefined' ? 1 : borderAlpha );
	this.drawRect( x, y, w, h );
	this.endFill();
};

/**
 * Draw a Polygon.
 * @param {Array} path
 * @param {number=} borderWidth
 * @param {number=} borderColor
 * @param {number=} colorFill
 * @param {number=} borderAlpha
 * @param {number=} fillAlpha
 */
SGraphics.prototype.drawPoly = function drawPoly( path,
												  borderWidth,
												  borderColor,
												  colorFill,
												  borderAlpha,
												  fillAlpha ) {
	if ( typeof colorFill === 'undefined' ) {
		this.fillColor = undefined;
	}
	else {
		this.beginFill( colorFill,
						typeof fillAlpha === 'undefined' ? 1 : fillAlpha );
	}

	this.lineStyle( typeof borderWidth === 'undefined' ? 1 : borderWidth,
					typeof borderColor === 'undefined' ? Common.COLOR_BLACK : borderColor,
					typeof borderAlpha === 'undefined' ? 1 : borderAlpha );
	this.drawPolygon( path );
	this.endFill();
}

/**
 * Draw a circle.
 * @param {number} cx Center X.
 * @param {number} cy Center Y.
 * @param {number} radius
 * @param {number=} borderWidth
 * @param {number=} borderColor
 * @param {number|string=} colorFill
 * @param {number=} borderAlpha
 * @param {number=} fillAlpha
 */
SGraphics.prototype.drawCircle = function drawCircle( cx, cy, radius,
											borderWidth,
											borderColor,
											colorFill,
											borderAlpha,
											fillAlpha ) {

	if ( typeof colorFill === 'undefined' ) {
		this.fillColor = undefined;
	}
	else {
		this.beginFill( colorFill,
						typeof fillAlpha === 'undefined' ? 1 : fillAlpha );
	}

	this.lineStyle( typeof borderWidth === 'undefined' ? 1 : borderWidth,
					typeof borderColor === 'undefined' ? Common.COLOR_BLACK : borderColor,
					typeof borderAlpha === 'undefined' ? 1 : borderAlpha );
	PIXI.Graphics.prototype.drawCircle.call( this, cx, cy, radius );
	this.endFill();
};

/**
 * Draw a Elipse.
 * @param {number} x
 * @param {number} y
 * @param {number} w
 * @param {number} h
 * @param {number=} borderWidth
 * @param {number=} borderColor
 * @param {number=} colorFill
 * @param {number=} borderAlpha
 * @param {number=} fillAlpha
 */
SGraphics.prototype.drawEllipse = function drawEllipse( x, y, w, h,
														borderWidth,
														borderColor,
														colorFill,
														borderAlpha,
														fillAlpha ) {

	if ( typeof colorFill === 'undefined' ) {
		this.fillColor = undefined;
	}
	else {
		this.beginFill( colorFill,
						typeof fillAlpha === 'undefined' ? 1 : fillAlpha );
	}

	this.lineStyle( typeof borderWidth === 'undefined' ? 1 : borderWidth,
					typeof borderColor === 'undefined' ? Common.COLOR_BLACK : borderColor,
					typeof borderAlpha === 'undefined' ? 1 : borderAlpha );
	PIXI.Graphics.prototype.drawEllipse.call( this, x, y, w, h );
	this.endFill();
};

/**
 * Draws a cross.
 * @param {number} x
 * @param {number} y
 * @param {number} radius Cross size.
 * @param {number=} borderColor
 * @param {number=} borderWidth
 * @param {number=} borderAlpha
 */
SGraphics.prototype.drawCross = function drawCross( x, y,
										  radius,
										  borderColor,
										  borderWidth,
										  borderAlpha ) {
	this.lineStyle( typeof borderWidth === 'undefined' ? 1 : borderWidth,
					typeof borderColor === 'undefined' ? Common.COLOR_BLACK : borderColor,
					typeof borderAlpha === 'undefined' ? 1 : borderAlpha );
	this.moveTo( x - radius, y - radius );
	this.lineTo( x + radius, y + radius );
	this.moveTo( x - radius, y + radius );
	this.lineTo( x + radius, y - radius );
};

/**
 * Draws an arrow.
 * @param {number} startX Start X.
 * @param {number} startY Start Y.
 * @param {number} endX End X.
 * @param {number} endY End Y.
 * @param {number=} sizeHead Size of arrow head.
 * @param {number=} borderWidth
 * @param {number=} borderColor
 * @param {number=} colorFill
 * @param {number=} borderAlpha
 * @param {number=} fillAlpha
 */
SGraphics.prototype.drawArrow = function drawArrow( startX, startY,
													endX, endY,
													sizeHead,
													borderWidth,
													borderColor,
													colorFill,
													borderAlpha,
													fillAlpha ) {

	if ( typeof sizeHead === 'undefined' ) {
		sizeHead = 5;
	}
	if ( typeof colorFill === 'undefined' ) {
		this.fillColor = undefined;
	}
	else {
		this.beginFill( colorFill,
						typeof fillAlpha === 'undefined' ? 1 : fillAlpha );
	}

	this.lineStyle( typeof borderWidth === 'undefined' ? 1 : borderWidth,
					typeof borderColor === 'undefined' ? Common.COLOR_BLACK : borderColor,
					typeof borderAlpha === 'undefined' ? 1 : borderAlpha );

	this.moveTo( startX, startY );
	this.lineTo( endX, endY );
	var u = new Vector2D( endX - startX, endY - startY );
	u.normalize();
	this.lineTo( endX - sizeHead * ( u.x + u.y ), endY - sizeHead * ( u.y - u.x ) );
	this.moveTo( endX, endY );
	this.lineTo( endX - sizeHead * ( u.x - u.y ), endY - sizeHead * ( u.y + u.x ) );
};

/**
 * Create a Animation.
 * @constructor
 * @param {string} name
 * @extends SDisplayObjectContainer
 */
function Animation( name ) {

	SDisplayObjectContainer.call( this );

	/** @type {Array.<Interpolation>} */
	this.m_interpolations = [];
	/** @type {Array.<number>} */
	this.m_endedInterpolations = [];

	/** @type {Object.<string, SSprite>} */
	this.m_layerNames = {};

	/** @type {Object.<string, Point>} */
	this.m_offsetsLayers = {};
	/** @type {SScreen} */
	this.screenLinked = null;
	/** @type {number} */
	this.screenActionStop = 0;
	/** @type {Array.<string>} */
	this.atlas = null;
	/** @type {Array.<Object>} */
	this.dataLayers = [];
	/** @type {Object} */
	this.params = null;
	/** @type {number} */
	this.blend = 0;

	/** @type {string} */
	this.name = name;
	/** @type {boolean} */
	this.loop = true;
	/** @type {Object} */
	this.data = null;

	if ( typeof this.name == 'string' ) {
		if ( this.name.length == 0 ) {
			Application.info( 'Animation: Creating an empty animation.' );
		}
		else {
			this.data = window['globalAnimations'][this.name];

			if ( !this.data ) {
				Application.error( 'Animation: invalid data for ' + this.name );
			}
			else {
				this.params = this.data['params'];
				this.atlas = this.data['atlas'];
				this.dataLayers = this.data['l'];
			}

			if ( !this.atlas ) {
				Application.error( 'Animation: invalid atlas for ' + this.name );
				this.data = null;
			}
		}
	}
	else {
		Application.error( 'Animation: invalid name: ' + this.name );
	}

	/** @type {Object.<string, Array<Object>>} */
	this.indexFrames = {};
	/** @type {Object.<string, Array.<AnimationActions>>} */
	this.indexActions = {};
	/** @type {Array.<SSprite>} */
	this.displayLayers = [];

	this.createLayers();

	/** @type {number} */
	this.m_changeTimeCounter = 0;
	/** @type {number} */
	this.m_frameTime = 33;
	/** @type {number} */
	this.m_maxdt = 0;
	/** @type {number} */
	this.totalFrames = 0;
	if ( this.data ) {
		this.m_frameTime = ( 1000 / Common.sparseInt( this.data[Animation.FPS], 30 ) );
		this.m_maxdt = Math.floor( this.m_frameTime );
		this.totalFrames = Common.sparseInt( this.data[Animation.FRAMES], 0 );
	}

	/** @type {Object} */
	this.m_endAniCaller = null;
	/** @type {Function} */
	this.m_endAniFunction = null;

	/** @type {boolean} */
	this.m_stopped = false;
	/** @type {boolean} */
	this.m_updateChildren = true;
	/** @type {number} */
	this.m_delay = -1;

	/** @type {number} */
	this.currentFrame = -1;
	this.setFrame( 0 );
}
Application.subclass( Animation, SDisplayObjectContainer );

/** @const {string} */Animation.POS_X = 'x';
/** @const {string} */Animation.POS_Y = 'y';
/** @const {string} */Animation.ASSET = 'a';
/** @const {string} */Animation.ASSET_LIST = 'i';
/** @const {string} */Animation.ASSET_ID = 'k';
/** @const {string} */Animation.CENTER_X = 'u';	// default 0
/** @const {string} */Animation.CENTER_Y = 'v';	// default 0
/** @const {string} */Animation.SCALE_X = 'w';	// default 1
/** @const {string} */Animation.SCALE_Y = 'h';	// default 1
/** @const {string} */Animation.ANGLE = 'g';	// default 0
/** @const {string} */Animation.ALPHA = 't';	// default 1
/** @const {string} */Animation.COLLISION = 'c';	// default 0 (no collision)
/** @const {string} */Animation.INSTANCE_NAME = 'o'; // default ""
/** @const {string} */Animation.BLEND_MODE = 'b';

/** @const {string} */Animation.NAME = 'n';
/** @const {string} */Animation.FPS = 'r';
/** @const {string} */Animation.LAYER = 'l';
/** @const {string} */Animation.FRAMES = 'f';
/** @const {string} */Animation.FRAMES_ACTIONS = 'fa';
/** @const {string} */Animation.ACTIONS = 'a';
/** @const {string} */Animation.FRAME = 'n';
/** @const {string} */Animation.INTERPOLATE = 'p';

/**
 * @param {SSprite} sprite
 * @param {string} spriteName
 * @return {Animation}
 */
Animation.createFromSprite = function( sprite, spriteName ) {
	/** @type {Animation} */
	var anim = new Animation( '' );

	if ( sprite != null ) {
		anim.displayLayers.push( sprite );
		anim.addChild( anim.displayLayers[0] );
		anim.m_layerNames['layer1'] = anim.displayLayers[0];

		anim.name = spriteName;
		anim.totalFrames = 1;
	}
	else {
		Application.error( 'Animation::createFromSprite() - Invalid sprite name: ' + spriteName );
	}

	return anim;
};

/** @override */
Animation.prototype.free = function() {
	this.m_layerNames = null;

	if ( this.displayLayers ) {
		for ( var i = 0; i < this.displayLayers.length; i++ ) {
			if ( this.displayLayers[i] != null ) {
				this.removeChild( this.displayLayers[i] );
				this.displayLayers[i].free();
				this.displayLayers[i] = null;
			}
		}
	}

	this.m_offsetsLayers = null;
	this.displayLayers = null;
	this.indexFrames = null;
	this.indexActions = null;
	this.m_endAniCaller = null;
	this.m_endAniFunction = null;
	this.screenLinked = null;

	this.atlas = null;
	this.dataLayers = null;
	this.params = null;
	this.data = null;
	this['hitArea'] = null;

	if ( this.m_interpolations ) {
		for ( var key = 0; key < this.m_interpolations.length; ++key ) {
			if ( this.m_interpolations[key] ) {
				this.m_interpolations[key].free();
				this.m_interpolations[key] = null;
			}
		}
	}
	this.m_interpolations = null;
	this.m_endedInterpolations = null;

	SDisplayObjectContainer.prototype.free.call( this );
};

/** @param {number} tint */
Animation.prototype.setTint = function( tint ) {
	this.tint = tint;
	for ( var j = 0; j < this.displayLayers.length; j++ ) {
		if ( this.displayLayers[j] ) {
			this.displayLayers[j].tint = tint;
		}
	}
};

/** @param {number} blend */
Animation.prototype.setBlend = function( blend ) {
	this.blend = blend;
	for ( var j = 0; j < this.displayLayers.length; j++ ) {
		if ( this.displayLayers[j] ) {
			this.displayLayers[j].blendMode = blend;
		}
	}
};

/**
 * @param {string} layer
 * @return {SSprite}
 */
Animation.prototype.getLayer = function( layer ) {
	return this.m_layerNames[layer] || null;
};

/**
 * @param {string} layerName
 * @param {number} offsetX
 * @param {number} offsetY
 */
Animation.prototype.setOffsetLayer = function( layerName, offsetX, offsetY ) {
	for ( var i = 0; i < this.dataLayers.length; i++ ) {
		if ( layerName == this.dataLayers[i][Animation.NAME] ) {
			if ( typeof this.m_offsetsLayers[layerName] === 'undefined' ) {
				this.m_offsetsLayers[layerName] = new Point( offsetX, offsetY );
			}
			else {
				this.m_offsetsLayers[layerName].x = offsetX;
				this.m_offsetsLayers[layerName].y = offsetY;
			}

			if ( typeof this.indexFrames['' + i] !== 'undefined' ) {
				var dataFrame = Animation.binarySearch( this.indexFrames['' + i], this.currentFrame );
				if ( dataFrame ) {
					this.displayLayers[i].position.x = dataFrame[Animation.POS_X] + offsetX;
					this.displayLayers[i].position.y = dataFrame[Animation.POS_Y] + offsetY;

					if ( this.m_interpolations[i] ) {
						this.m_interpolations[i].setOffsetPosition( offsetX, offsetY );
					}
				}
			}
		}
	}
}

Animation.prototype.stop = function() {
	this.m_stopped = true;
};

Animation.prototype.resume = function() {
	this.m_stopped = false;
};

/** @param {number} frame */
Animation.prototype.gotoAndStop = function( frame ) {
	this.setFrameStatic( frame - 1 );
	this.stop();
};

/** @param {number} frame */
Animation.prototype.gotoAndPlay = function( frame ) {
	this.setFrameStatic( frame - 1 );
	this.resume();
};

/** @param {number} delay */
Animation.prototype.startDelay = function( delay ) {
	if ( delay > 0 ) {
		this.m_delay = delay;
	}
};

/**
 * @param {Object} caller
 * @param {function(Animation)|null} callback
 */
Animation.prototype.onEndAnimation = function( caller, callback ) {
	this.m_endAniCaller = caller;
	this.m_endAniFunction = callback;
};

/** @param {number} dt */
Animation.prototype.update = function( dt ) {
	if ( this.m_updateChildren ) {
		for ( var i = 0; i < this.displayLayers.length; i++ ) {
			if ( this.displayLayers[i] && this.displayLayers[i]['children'] ) {
				for ( var j = 0; j < this.displayLayers[i]['children'].length; j++ ) {
					if ( this.displayLayers[i]['children'][j].update ) {
						this.displayLayers[i]['children'][j].update( dt );
					}
				}
			}
		}
	}

	if ( this.m_stopped ) {
		return;
	}

	if ( this.totalFrames <= 1 ) {
		return;
	}

	if ( this.m_delay > 0 ) {
		this.m_delay -= dt;
		if ( this.m_delay >= 0 ) {
			return;
		}

		dt = -this.m_delay;
		this.m_delay = -1;
	}

	dt = Math.min( dt, this.m_maxdt );

	for ( var key = 0; key < this.m_interpolations.length; ++key ) {
		if ( this.m_interpolations[key] ) {
			if ( this.m_interpolations[key].update( dt ) ) {
				this.m_endedInterpolations.push( key );
			}
		}
	}

	if ( this.m_endedInterpolations ) {
		while ( this.m_endedInterpolations.length > 0 ) {
			var index = this.m_endedInterpolations.pop();
			this.m_interpolations[index].free();
			this.m_interpolations[index] = null;
		}
	}

	this.m_changeTimeCounter += dt;
	if ( this.m_changeTimeCounter >= this.m_frameTime ) {
		this.m_changeTimeCounter -= this.m_frameTime;

		var nextFrame = this.currentFrame + 1;
		if ( nextFrame >= this.totalFrames ) {
			nextFrame = 0;
		}
		this.setFrame( nextFrame );

		if ( ( this.data != null ) && ( this.currentFrame >= this.totalFrames - 1 ) ) {
			if ( !this.loop ) {
				this.m_stopped = true;
			}

			if ( ( this.m_endAniCaller != null ) && ( this.m_endAniFunction != null ) ) {
				this.m_endAniFunction.call( this.m_endAniCaller, this );
			}
		}
	}
};

/**
 * @protected
 * @param {number} frame
 */
Animation.prototype.setFrame = function( frame ) {
	frame = Common.clamp( frame, 0, this.totalFrames - 1 );
	if ( frame == this.currentFrame ) {
		return;
	}

	this.currentFrame = frame;

	for ( var i = 0; i < this.dataLayers.length; i++ ) {
		if ( ( typeof this.indexFrames['' + i] !== 'undefined' ) && !this.m_interpolations[i] ) {
			var data = Animation.binarySearch( this.indexFrames['' + i], frame );
			if ( data[Animation.FRAME] === frame ) {
				this.setSprite( i, data );
			}
		}
	}

	if ( this.indexActions['act_' + frame] ) {
		/** @type {Array.<AnimationActions>} */
		var actions = this.indexActions['act_' + frame];
		/** @type {number} */
		var actionsLength = actions.length;
		for ( var i = 0; i < actionsLength; i++ ) {
			AnimationActions.applyAction( this, actions[i] );

			if ( this.indexActions == null ) {
				if ( ( i + 1 ) < actionsLength ) {
					Application.error( 'Animation:: There are still actions to be performed, but the current animation is just deleted.' );
				}
				break;
			}
		}
	}
};

/**
 * @protected
 * @param {number} frame
 */
Animation.prototype.setFrameStatic = function( frame ) {
	this.m_changeTimeCounter = 0;

	frame = Common.clamp( frame, 0, this.totalFrames - 1 );
	if ( frame == this.currentFrame ) {
		return;
	}

	this.currentFrame = frame;

	for ( var i = 0; i < this.dataLayers.length; i++ ) {
		if ( this.m_interpolations[i] ) {
			this.m_interpolations[i].free();
			this.m_interpolations[i] = null;
		}

		if ( typeof this.indexFrames['' + i] !== 'undefined' ) {
			var data = Animation.binarySearch( this.indexFrames['' + i], frame );
			this.setSprite( i, data );
			if ( this.m_interpolations[i] ) {
				this.m_interpolations[i].update( ( frame - data[Animation.FRAME] ) * this.m_frameTime );
			}
		}
	}

	if ( this.indexActions['act_' + frame] ) {
		/** @type {Array.<AnimationActions>} */
		var actions = this.indexActions['act_' + frame];
		/** @type {number} */
		var actionsLength = actions.length;
		for ( var i = 0; i < actionsLength; i++ ) {
			AnimationActions.applyAction( this, actions[i] );

			if ( this.indexActions == null ) {
				if ( ( i + 1 ) < actionsLength ) {
					Application.error( 'Animation:: There are still actions to be performed, but the current animation is just deleted.' );
				}
				break;
			}
		}
	}
};

/** @protected */
Animation.prototype.createLayers = function() {
	for ( var i = 0; i < this.dataLayers.length; i++ ) {
		if ( this.dataLayers[i][Animation.FRAMES] ) {
			this.indexFrames['' + i] = [];
			for ( var j = 0; j < this.dataLayers[i][Animation.FRAMES].length; j++ ) {
				this.indexFrames['' + i].push( this.dataLayers[i][Animation.FRAMES][j] );
			}
			this.displayLayers.push( null );
			this.m_layerNames[this.dataLayers[i][Animation.NAME]] = null;
		}
		else if ( this.dataLayers[i][Animation.FRAMES_ACTIONS] ) {
			for ( var j = 0; j < this.dataLayers[i][Animation.FRAMES_ACTIONS].length; j++ ) {
				this.parseActions( this.dataLayers[i][Animation.FRAMES_ACTIONS][j][Animation.FRAME],
								   this.dataLayers[i][Animation.FRAMES_ACTIONS][j] )
			}
		}
	}
};

/**
 * @protected
 * @param {number} frame
 * @param {Object} object
 */
Animation.prototype.parseActions = function( frame, object ) {
	var index = 'act_' + frame;
	if ( !this.indexActions[index] ) {
		this.indexActions[index] = [];
	}

	var data = Common.trim( object[Animation.ACTIONS] ).split( ';' )

	for ( var i = 0; i < data.length; i++ ) {
		var actData = data[i].split( ':' );
		var action = new AnimationActions();
		action.name = Common.trim( actData[0].toLowerCase() );
		if ( actData.length > 1 ) {
			action.params = Common.trim( actData[1] );
		}

		if ( action.name === AnimationActions.ACT_STOP_GUI ) {
			this.screenActionStop = frame;
		}

		this.indexActions[index].push( action );
	}
};

/**
 * @param {string} id
 * @return {SSprite}
 */
Animation.prototype.getInstance = function( id ) {
	if ( typeof this[id] === 'undefined' ) {
		Application.error( 'Instance [' + id + '] no found in clip' );
		return null;
	}
	return this[id];
};

/**
 * @param {string} id
 * @return {SSprite}
 */
Animation.prototype.getInstanceNotException = function( id ) {
	if ( typeof this[id] === 'undefined' ) {
		return null;
	}
	return this[id];
};

/**
 * @param {number} i
 * @param {Object} data
 */
Animation.prototype.setSprite = function( i, data ) {
	if ( this.m_interpolations[i] ) {
		this.m_interpolations[i].free();
		this.m_interpolations[i] = null;
	}

	var layerName = this.dataLayers[i][Animation.NAME];

	data[Animation.CENTER_X] = data[Animation.CENTER_X] || 0;
	data[Animation.CENTER_Y] = data[Animation.CENTER_Y] || 0;

	if ( ( data[Animation.COLLISION] === 1 )
		&& data[Animation.INSTANCE_NAME]
		&& ( data['w'] > 1 )
		&& ( data['h'] > 1 ) ) {
		var rectCollision = null;
		if ( data[Animation.ALPHA] !== 0 ) {
			rectCollision = new Rectangle( data[Animation.POS_X],
										   data[Animation.POS_Y],
				data[Animation.SCALE_X] / Application.DPI,
				data[Animation.SCALE_Y] / Application.DPI );
		}
		this.addCollision( data[Animation.INSTANCE_NAME], rectCollision );
		if ( rectCollision !== null ) {
			if ( data[Animation.INSTANCE_NAME] === 'mcCollision' ) {
				if ( this['hitArea'] == null ) {
					this['hitArea'] = new PIXI.Rectangle( rectCollision.x, rectCollision.y,
														  rectCollision.w, rectCollision.h );
				}
				else {
					this['hitArea']['x'] = rectCollision.x;
					this['hitArea']['y'] = rectCollision.y;
					this['hitArea']['width'] = rectCollision.w;
					this['hitArea']['height'] = rectCollision.h;
				}
			}
		}
	}

	if ( this.displayLayers[i] === null ) {
		this.displayLayers[i] = new SSprite();
		if ( Application.RENDER_MODE === Application.RENDER_WEBGL ) {
			this.displayLayers[i].blendMode = this.dataLayers[i][Animation.BLEND_MODE] || 0;
		}
		this.addChild( this.displayLayers[i] );
		this.m_layerNames[layerName] = this.displayLayers[i];
	}

	if ( typeof data[Animation.ASSET_LIST] === 'undefined' ) {
		data[Animation.ASSET_LIST] = 0;
	}

	if ( data[Animation.ASSET_ID] === -1 || data[Animation.ASSET_LIST] === -1 ) {
		this.displayLayers[i].texture = PIXI.Texture['EMPTY'];
	}
	else {
		var textureName = this.atlas[data[Animation.ASSET_LIST]] + '_' + data[Animation.ASSET_ID];
		this.displayLayers[i].texture = PIXI.Texture.fromImage( textureName, false, 0 );
	}

	var offsetX = 0;
	var offsetY = 0;
	if ( typeof this.m_offsetsLayers[layerName] !== 'undefined' ) {
		offsetX = this.m_offsetsLayers[layerName].x;
		offsetY = this.m_offsetsLayers[layerName].y;
	}

	this.displayLayers[i].position.x = data[Animation.POS_X] + offsetX;
	this.displayLayers[i].position.y = data[Animation.POS_Y] + offsetY;

	data[Animation.ANGLE] = data[Animation.ANGLE] || 0;
	this.displayLayers[i].rotation = ( data[Animation.ANGLE] * Math.PI / 180 );

	if ( typeof data[Animation.SCALE_X] === 'undefined' ) {
		data[Animation.SCALE_X] = 1;
	}
	this.displayLayers[i].scale.x = data[Animation.SCALE_X];
	if ( typeof data[Animation.SCALE_Y] === 'undefined' ) {
		data[Animation.SCALE_Y] = 1;
	}
	this.displayLayers[i].scale.y = data[Animation.SCALE_Y];

	if ( typeof data[Animation.ALPHA] === 'undefined' ) {
		data[Animation.ALPHA] = 1;
	}
	this.displayLayers[i].alpha = data[Animation.ALPHA];

	if ( data[Animation.INTERPOLATE] && ( data[Animation.INTERPOLATE] !== 0 ) ) {
		var nextFrameData = Animation.binarySearch( this.indexFrames['' + i], data[Animation.INTERPOLATE] );
		nextFrameData[Animation.CENTER_X] = nextFrameData[Animation.CENTER_X] || 0;
		nextFrameData[Animation.CENTER_Y] = nextFrameData[Animation.CENTER_Y] || 0;
		nextFrameData[Animation.ANGLE] = nextFrameData[Animation.ANGLE] || 0;

		if ( typeof nextFrameData[Animation.SCALE_X] === 'undefined' ) {
			nextFrameData[Animation.SCALE_X] = 1;
		}
		if ( typeof nextFrameData[Animation.SCALE_Y] === 'undefined' ) {
			nextFrameData[Animation.SCALE_Y] = 1;
		}
		if ( typeof nextFrameData[Animation.ALPHA] === 'undefined' ) {
			nextFrameData[Animation.ALPHA] = 1;
		}
		var timeInterpolation = ( nextFrameData[Animation.FRAME] - data[Animation.FRAME] ) * this.m_frameTime;
		this.m_interpolations[i] = new Interpolation( this.displayLayers[i], true,
													  data, nextFrameData,
													  this.m_changeTimeCounter,
													  timeInterpolation );
		this.m_interpolations[i].setOffsetPosition( offsetX, offsetY );
	}

	if ( data[Animation.INSTANCE_NAME] && ( data[Animation.INSTANCE_NAME] !== '' ) ) {
		this.displayLayers[i].name = data[Animation.INSTANCE_NAME];
		this[data[Animation.INSTANCE_NAME]] = this.displayLayers[i];
	}
};

/**
 * @private
 * @param {Array.<Object>} values
 * @param {number} target
 * @return {Object}
 */
Animation.binarySearch = function( values, target ) {
	var low = 0;
	var high = values.length - 1;
	if ( !high ) {
		return values[0];
	}

	var current = high >>> 1;
	while ( true ) {
		if ( values[current + 1][Animation.FRAME] <= target ) {
			low = current + 1;
		}
		else {
			high = current;
		}
		if ( low == high ) {
			return values[low];
		}
		current = ( low + high ) >>> 1;
	}
};

/**
 * @constructor
 * @param {Animation} animation
 */
function AnimationLayer( animation ) {
	/** @type {Animation} animation */
	this.m_animation = animation;
	/** @type {boolean} */
	this.m_visible = true;
};

AnimationLayer.prototype.free = function() { };

/** @param {number} dt */
AnimationLayer.prototype.update = function( dt ) { };

AnimationLayer.prototype.clear = function() { };

/** @param {number} tint */
AnimationLayer.prototype.setTint = function( tint ) { };

/** @param {number} blendMode */
AnimationLayer.prototype.setBlendMode = function( blendMode ) { };

/** @param {boolean} visible */
AnimationLayer.prototype.setVisible = function( visible ) {
	this.m_visible = visible;
};

/** @param {Object} data */
AnimationLayer.prototype.updateParams = function( data ) { };

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number} scaleX
 * @param {number} scaleY
 * @param {number} rot
 * @param {number} alpha
 */
AnimationLayer.prototype.setParams = function( posX, posY, scaleX, scaleY, rot, alpha ) { };

/**
 * @constructor
 * @struct
 * @param {Animation} animation
 * @param {string} textureName
 * @extends AnimationLayer
 */
function AnimationSpriteLayer( animation, textureName ) {
	AnimationLayer.call( this, animation );
	/** @type {SSprite} */
	this.m_sprite = new SSprite( textureName );

	this.m_animation.addChild( this.m_sprite );
};
Application.subclass( AnimationSpriteLayer, AnimationLayer );

/** @override */
AnimationSpriteLayer.prototype.free = function() {
	this.m_animation.removeChild( this.m_sprite );
	this.m_sprite.free();
	this.m_sprite = null;
};

/** @return {SSprite} */
AnimationSpriteLayer.prototype.getSprite = function() {
	return this.m_sprite;
};

/** @override */
AnimationSpriteLayer.prototype.clear = function() {
	this.m_sprite.texture = PIXI.Texture['EMPTY'];
};

/** @override */
AnimationSpriteLayer.prototype.setTint = function( tint ) {
	this.m_sprite.tint = tint;
};

/** @override */
AnimationSpriteLayer.prototype.setVisible = function( visible ) {
	AnimationLayer.prototype.setVisible.call( this, visible );
	this.m_sprite.visible = visible;
};

/** @override */
AnimationSpriteLayer.prototype.setBlendMode = function( blendMode ) {
	this.m_sprite.blendMode = blendMode;
};

/** @param {string} textureName */
AnimationSpriteLayer.prototype.setTexture = function( textureName ) {
	this.m_sprite.texture = PIXI.Texture.fromImage( textureName, false, 0 );
};

/** @override */
AnimationSpriteLayer.prototype.updateParams = function( data ) {
	this.m_sprite.setPosition( data[Animation.POS_X], data[Animation.POS_Y] );
	this.m_sprite.rotation = ( data[Animation.ANGLE] * Math.PI / 180 );
	this.m_sprite.scale.x = data[Animation.SCALE_X];
	this.m_sprite.scale.y = data[Animation.SCALE_Y];
	this.m_sprite.alpha = data[Animation.ALPHA];
};

/** @override */
AnimationSpriteLayer.prototype.setParams = function( posX, posY, scaleX, scaleY, rot, alpha ) {
	this.m_sprite.position.x = posX;
	this.m_sprite.position.y = posY;
	this.m_sprite.scale.x = scaleX;
	this.m_sprite.scale.y = scaleY;
	this.m_sprite.rotation = 0.0174532925199432957692 * rot;
	this.m_sprite.alpha = alpha;
};

/**
 * @constructor
 * @struct
 * @param {Animation} animation
 * @param {string} clipName
 * @param {number} frame
 * @extends AnimationLayer
 */
function AnimationClipLayer( animation, clipName, frame ) {
	AnimationLayer.call( this, animation );
	/** @type {string} */
	this.m_clipName = clipName;
	/** @type {Animation} */
	this.m_clip = Application.instance.getAnimation( this.m_clipName );
	this.m_clip.gotoAndPlay( frame );

	/** @type {SDisplayObjectContainer} */
	this.m_canvas = Application.instance.addDisplayContainer();

	this.m_canvas.addChild( this.m_clip );
	this.m_animation.addChild( this.m_canvas );
};
Application.subclass( AnimationClipLayer, AnimationLayer );

/** @override */
AnimationClipLayer.prototype.free = function() {
	if ( this.m_clip ) {
		this.m_clip.free();
		this.m_clip = null;
	}

	this.m_canvas.free();
	this.m_canvas = null;
};

/** @override */
AnimationClipLayer.prototype.update = function( dt ) {
	if ( this.m_clip ) {
		this.m_clip.update( dt );
	}
};

/** @override */
AnimationClipLayer.prototype.clear = function() {
	if ( this.m_clip ) {
		this.m_clip.free();
		this.m_clip = null;
	}
	this.m_clipName = '';
};

/** @override */
AnimationClipLayer.prototype.setTint = function( tint ) { };

/** @override */
AnimationClipLayer.prototype.setBlendMode = function( blendMode ) { };

/** @override */
AnimationClipLayer.prototype.setVisible = function( visible ) {
	AnimationLayer.prototype.setVisible.call( this, visible );
	if ( this.m_clip ) {
		this.m_clip.visible = this.m_visible;
	}
};

/**
 * @param {string} clipName
 * @param {number} frame
 */
AnimationClipLayer.prototype.setClip = function( clipName, frame ) {
	if ( this.m_clipName !== clipName ) {
		this.m_clipName = clipName;

		if ( this.m_clip ) {
			this.m_clip.free();
		}
		this.m_clip = Application.instance.getAnimation( this.m_clipName );
		this.m_clip.visible = this.m_visible;
		this.m_clip.gotoAndPlay( frame );

		this.m_canvas.addChild( this.m_clip );
	}
};

/** @override */
AnimationClipLayer.prototype.updateParams = function( data ) {
	if ( this.m_clip ) {
		this.m_clip.setPosition( data[Animation.POS_X], data[Animation.POS_Y] );
		this.m_clip.rotation = ( data[Animation.ANGLE] * Math.PI / 180 );
		this.m_clip.scale.x = data[Animation.SCALE_X] / Application.DPI;
		this.m_clip.scale.y = data[Animation.SCALE_Y] / Application.DPI;
		this.m_clip.alpha = data[Animation.ALPHA];
	}
};

/** @override */
AnimationClipLayer.prototype.setParams = function( posX, posY, scaleX, scaleY, rot, alpha ) {
	if ( this.m_clip ) {
		this.m_clip.setPosition( posX, posY );
		this.m_clip.setScale( scaleX, scaleY );
		this.m_clip.rotation = 0.0174532925199432957692 * rot;
		this.m_clip.alpha = alpha;
	}
};

/**
 * Create a Actions to Animation.
 * @constructor
 */
function AnimationActions() {
	this.name = null;
	this.params = null;
}

AnimationActions.ACT_STOP = 's';
AnimationActions.ACT_STOP_GUI = 'sg';
AnimationActions.ACT_FINISH_GUI = 'fg';
AnimationActions.ACT_PLAY = 'p';
AnimationActions.ACT_PLAY_SOUND = 'ps';
AnimationActions.ACT_STOP_SOUND = 'ss';
AnimationActions.ACT_GO_TO_AND_PLAY = 'gp';
AnimationActions.ACT_GO_TO_AND_STOP = 'gs';
AnimationActions.ACT_GO_TO_RANDOM_AND_STOP = 'rs';
AnimationActions.ACT_GO_TO_RANDOM_AND_PLAY = 'rp';
AnimationActions.ACT_CREATE_FX = 'fx';
AnimationActions.ACT_CALL_FUNCTION = 'f';

AnimationActions.applyAction = function( animation, action ) {
	switch ( action.name ) {
		case AnimationActions.ACT_STOP:
			animation.stop();
			break;
		case AnimationActions.ACT_PLAY:
			animation.resume();
			break;
		case AnimationActions.ACT_GO_TO_AND_PLAY:
			animation.gotoAndPlay( parseInt( action.params, 10 ) )
			break;
		case AnimationActions.ACT_GO_TO_AND_STOP:
			animation.gotoAndStop( parseInt( action.params, 10 ) )
			break;
		case AnimationActions.ACT_GO_TO_RANDOM_AND_STOP:
			var frame = Common.randomInt( 1, animation.totalFrames );
			animation.gotoAndStop( frame );
			break;
		case AnimationActions.ACT_GO_TO_RANDOM_AND_PLAY:
			var frame = Common.randomInt( 1, animation.totalFrames );
			animation.gotoAndPlay( frame );
			break;
		case AnimationActions.ACT_PLAY_SOUND:
			Application.instance.playSound( Common.trim( action.params ) );
			break;
		case AnimationActions.ACT_STOP_SOUND:
			Application.instance.stopSound( Common.trim( action.params ) );
			break;
		case AnimationActions.ACT_CREATE_FX:

			action.params = action.params.replace(/\s/g, "");
			var p = action.params.split( ',' );
			var fxName = p[0];
			var x = ( p.length > 1 ) ? parseInt( p[1], 10 ) : 0;
			var y = ( p.length > 2 ) ? parseInt( p[2], 10 ) : 0;
			var canvas = ( p.length > 3 ) ? animation.getLayer( p[3] ) : animation.screenLinked.canvas;
			if ( canvas == null ) {
				canvas = animation.getLayer( p[3] );
			}
			var fx = Application.instance.effectManager.createEffect( fxName, x, y, canvas );
			break;
		case AnimationActions.ACT_CALL_FUNCTION:
			break;
		case AnimationActions.ACT_STOP_GUI:
			if ( animation.screenLinked ) {
				animation.screenLinked.onStopScreen();
			}
			break;
		case AnimationActions.ACT_FINISH_GUI:
			if ( animation.screenLinked ) {
				animation.screenLinked.onFinishScreen();
			}
			break;
		default:
			Application.warn( 'Please define Action[ ' +  action.name + ' ] in animation' );
	}
};

/**
 * @constructor
 * @param {SSprite} sprite
 * @param {boolean} smooth
 * @param {Object} startData
 * @param {Object} endData
 * @param {number} initTime
 * @param {number} totalTime
 */
function Interpolation( sprite, smooth, startData, endData, initTime, totalTime ) {
	/** @type {SSprite} */
	this.m_sprite = sprite;
	/** @type {boolean} */
	this.m_smooth = smooth;

	/** @type {number} */
	this.m_alpha = startData[Animation.ALPHA];
	/** @type {number} */
	this.m_angle = startData[Animation.ANGLE];
	/** @type {number} */
	this.m_scaleX = startData[Animation.SCALE_X];
	/** @type {number} */
	this.m_scaleY = startData[Animation.SCALE_Y];

	/** @type {Object} */
	this.m_start = startData;
	/** @type {Object} */
	this.m_end = endData;
	/** @type {number} */
	this.m_time = initTime;
	/** @type {number} */
	this.m_totalTime = totalTime;
	/** @type {number} */
	this.m_x = startData[Animation.POS_X];
	/** @type {number} */
	this.m_y = startData[Animation.POS_Y];
	/** @type {number} */
	this.m_startCornerX = 0;
	/** @type {number} */
	this.m_startCornerY = 0;

	/** @type {Vector2D} */
	this.m_c = null;
	/** @type {Vector2D} */
	this.m_c1 = null;
	/** @type {Vector2D} */
	this.m_c2 = null;

	/** @type {number} */
	this.m_offsetX = 0;
	/** @type {number} */
	this.m_offsetY = 0;

	/** @type {boolean} */
	this.m_interpolateX = ( startData[Animation.POS_X] !== endData[Animation.POS_X] );
	/** @type {boolean} */
	this.m_interpolateY = ( startData[Animation.POS_Y] !== endData[Animation.POS_Y] );
	/** @type {boolean} */
	this.m_interpolateScaleX = ( startData[Animation.SCALE_X] !== endData[Animation.SCALE_X] );
	/** @type {boolean} */
	this.m_interpolateScaleY = ( startData[Animation.SCALE_Y] !== endData[Animation.SCALE_Y] );
	/** @type {boolean} */
	this.m_interpolateAlpha = ( startData[Animation.ALPHA] !== endData[Animation.ALPHA] );
	/** @type {boolean} */
	this.m_interpolateAngle = ( startData[Animation.ANGLE] !== endData[Animation.ANGLE] );

	if ( this.m_interpolateAngle ) {
		this.m_c1 = new Vector2D( startData[Animation.SCALE_X] * startData[Animation.CENTER_X], startData[Animation.SCALE_Y] * startData[Animation.CENTER_Y] );
		this.m_c1.rotate( Math.PI * startData[Animation.ANGLE] / 180 );
		var tempVector = new Vector2D( startData[Animation.POS_X], startData[Animation.POS_Y] );
		this.m_c1.add( tempVector );

		this.m_c2 = new Vector2D( endData[Animation.SCALE_X] * startData[Animation.CENTER_X], endData[Animation.SCALE_Y] * startData[Animation.CENTER_Y] );
		this.m_c2.rotate( Math.PI * endData[Animation.ANGLE] / 180 );
		tempVector = new Vector2D( endData[Animation.POS_X], endData[Animation.POS_Y] );
		this.m_c2.add( tempVector );

		this.m_c = new Vector2D();
	}
}

/**
 * @param {number} x
 * @param {number} y
 */
Interpolation.prototype.setOffsetPosition = function( x, y ) {
	this.m_offsetX = x;
	this.m_offsetY = y;
};

/** @param {number} dt */
Interpolation.prototype.update = function( dt ) {
	var finished = false;
	this.m_time += dt;
	if ( this.m_time >= this.m_totalTime ) {
		finished = true;
		this.m_time = this.m_totalTime;
	}

	if ( this.m_interpolateAlpha ) {
		this.m_alpha = this.interpolate( this.m_start[Animation.ALPHA], this.m_end[Animation.ALPHA], this.m_time );
	}
	if ( this.m_interpolateAngle ) {
		this.m_angle = this.interpolate( this.m_start[Animation.ANGLE], this.m_end[Animation.ANGLE], this.m_time );
	}
	if ( this.m_interpolateScaleX ) {
		this.m_scaleX = this.interpolate( this.m_start[Animation.SCALE_X], this.m_end[Animation.SCALE_X], this.m_time );
	}
	if ( this.m_interpolateScaleY ) {
		this.m_scaleY = this.interpolate( this.m_start[Animation.SCALE_Y], this.m_end[Animation.SCALE_Y], this.m_time );
	}

	var m00 = this.m_scaleX;
	var m01 = 0;
	var m10 = 0;
	var m11 = this.m_scaleY;

	var px = 0;
	var py = 0;
	var angleRadians, cosAngle, sinAngle;

	if ( this.m_interpolateAngle ) {
		angleRadians = 0.0174532925199432957692 * this.m_angle;
		cosAngle = Math.cos( angleRadians );
		sinAngle = Math.sin( angleRadians );

		m00 *= cosAngle;
		m01 = this.m_scaleX * sinAngle;
		m10 = -this.m_scaleY * sinAngle;
		m11 *= cosAngle;

		this.m_c.x = this.interpolate( this.m_c1.x, this.m_c2.x, this.m_time );
		this.m_c.y = this.interpolate( this.m_c1.y, this.m_c2.y, this.m_time );

		var toCenter = new Vector2D( this.m_scaleX * this.m_start[Animation.CENTER_X],
									 this.m_scaleY * this.m_start[Animation.CENTER_Y] );
		toCenter.rotate( angleRadians );

		var toCorner = new Vector2D( this.m_scaleX * this.m_startCornerX,
									 this.m_scaleY * this.m_startCornerY );
		toCorner.rotate( angleRadians );

		px = this.m_c.x - toCenter.x - toCorner.x;
		py = this.m_c.y - toCenter.y - toCorner.y;
	}
	else {
		this.m_x = this.m_start[Animation.POS_X];
		if ( this.m_interpolateX ) {
			this.m_x = this.interpolate( this.m_start[Animation.POS_X], this.m_end[Animation.POS_X], this.m_time );
		}

		this.m_y = this.m_start[Animation.POS_Y];
		if ( this.m_interpolateY ) {
			this.m_y = this.interpolate( this.m_start[Animation.POS_Y], this.m_end[Animation.POS_Y], this.m_time );
		}

		var cx = this.m_startCornerX;
		var cy = this.m_startCornerY;

		px = this.m_x;
		py = this.m_y;

		if ( this.m_angle !== 0 ) {

			angleRadians = 0.0174532925199432957692 * this.m_angle;
			cosAngle = Math.cos( angleRadians );
			sinAngle = Math.sin( angleRadians );

			m00 *= cosAngle;
			m01 = this.m_scaleX * sinAngle;
			m10 = -this.m_scaleY * sinAngle;
			m11 *= cosAngle;

			if ( this.m_scaleX !== 1 ) {
				cx *= this.m_scaleX;
			}
			if ( this.m_scaleY !== 1 ) {
				cy *= this.m_scaleY;
			}

			px += cy * sinAngle - cx * cosAngle;
			py += -cx * sinAngle - cy * cosAngle;
		}
		else {
			if ( this.m_scaleX !== 1 ) {
				cx *= this.m_scaleX;
			}
			if ( this.m_scaleY !== 1 ) {
				cy *= this.m_scaleY;
			}

			px -= cx;
			py -= cy;
		}
	}

	this.m_sprite.position.x = px + this.m_offsetX;
	this.m_sprite.position.y = py + this.m_offsetY;
	this.m_sprite.scale.x = this.m_scaleX;
	this.m_sprite.scale.y = this.m_scaleY;
	this.m_sprite.rotation = 0.0174532925199432957692 * this.m_angle;
	this.m_sprite.alpha = this.m_alpha;

	return finished;
};

/**
 * @param {number} valueInit
 * @param {number} valueEnd
 * @param {number} time
 * @return {number}
 */
Interpolation.prototype.interpolate = function( valueInit, valueEnd, time ) {
	return time * ( valueEnd - valueInit ) / this.m_totalTime + valueInit;
}

/** @return {string} */
Interpolation.prototype.toString = function() {
	return 'INTERPOLATION:   ' + this.m_start + ' to ' + this.m_end;
};

Interpolation.prototype.free = function() {
	this.m_start = null;
	this.m_end = null;
	this.m_c = null;
	this.m_c1 = null;
	this.m_c2 = null;
	this.m_sprite = null;
};

/**
 * @constructor
 * @param {string} nameEffect
 * @param {number} x
 * @param {number} y
 * @param {SDisplayObjectContainer|Animation|SSprite} canvas
 * @param {Object=} params
 */
function NanoEffect( nameEffect, x, y, canvas, params ) {

	this.x = x;
	this.y = y;
	this.canvas = canvas;
	this.name = nameEffect;
	this.isAwaitingDelete = false;
	this.data = window['nano']['effects'][nameEffect];
	this.params = params || {};
	this.emitters = [];
	this.emittersIndex = {};
	this.emitterCanvas = [];

	if ( !this.canvas ) {
		this.isAwaitingDelete = true;
		return;
	}

	for ( var i = 0; i < this.data.length; i++ ) {
		var nameEmitter = this.data[i]['emitter'];
		if ( window['nano']['emitters'][nameEmitter] ) {
			var emitterCanvas = Application.instance.addDisplayContainer();
			this.canvas.addChild( emitterCanvas );
			this.emitterCanvas.push( emitterCanvas );
			var emitter = new NanoEmitter( this, window['nano']['emitters'][nameEmitter], emitterCanvas );
			emitter.ox = this.data[i]['pos_x'];
			emitter.oy = this.data[i]['pos_y'];
			emitter.name = this.data[i]['emitter'];
			this.emittersIndex[this.data[i]['emitter']] = emitter;
			this.emitters.push( emitter );
		}
		else {
			Application.warn( 'Emiiter [' +  nameEmitter + '] no found' );
		}
	}
};

NanoEffect.prototype.setPause = function( value ) {
	for ( var i = 0; i < this.emitters.length; i++ ) {
		this.emitters[i].pause = value;
	}
};

NanoEffect.prototype.update = function( dt ) {
	for ( var i = 0; i < this.emitters.length; i++ ) {
		if ( this.emitters[i] ) {
			this.emitters[i].update( dt );
			if ( this.emitters[i].isAwaitingDelete ) {
				delete this.emittersIndex[this.emitters[i].name];
				this.emitters[i].free();
				this.emitters[i] = null;
				this.emitters.splice( i, 1 );
				this.canvas.removeChild( this.emitterCanvas[i] );
				this.emitterCanvas[i].free();
				this.emitterCanvas[i] = null;
				this.emitterCanvas.splice( i, 1 );
				i--;
			}
		}
	}

	if ( this.emitters.length === 0 ) {
		this.isAwaitingDelete = true;
	}
};

NanoEffect.prototype.free = function() {
	for ( var index in this.emittersIndex ) {
		delete this.emittersIndex[index];
	}
	this.emittersIndex = null;

	for ( var i = 0; i < this.emitters.length; i++ ) {
		this.emitters[i].free();
		this.emitters[i] = null;
		this.canvas.removeChild( this.emitterCanvas[i] );
		this.emitterCanvas[i].free();
		this.emitterCanvas[i] = null;
	}

	this.emitters = [];
	this.emitterCanvas = [];
	this.canvas = null;
};

NanoEffect.random = function( min, max ) {
	return ( Math.random() * ( max - min  ) + min );
};

NanoEffect.randomInt = function( min, max ) {
	return ( min + Math.floor( Math.random() * ( max - min + 1 ) ) );
};

/**
 * @constructor
 * @param {NanoEffect} effect
 * @param {Object} data
 * @param {Object} canvas
 */
function NanoEmitter( effect, data, canvas ) {
	this.effect = effect;
	this.data = data;

	this.data[NanoParticle.CLIP_ARRAY] = this.data[NanoParticle.CLIP].split( ',' );
	this.data[NanoParticle.TINT_ARRAY] = this.data[NanoParticle.TINT].split( ',' );
	this.canvas = canvas;
	this.frequency = data[NanoEmitter.FRECUENCY];
	this.delay = data[NanoEmitter.DELAY];
	this.particles = [];
	this.isAwaitingDelete = false;
	this.counter = 0;
	this.ox = 0;
	this.oy = 0;
	this.name = '';
	this.state = NanoEmitter.ST_INTRO;
	this.pause = false;
}

NanoEmitter.ST_INTRO = 1;
NanoEmitter.ST_EMISSION = 2;

NanoEmitter.FRECUENCY = 'em_frequency';
NanoEmitter.QUANTITY_MIN = 'em_quantity_min';
NanoEmitter.QUANTITY_MAX = 'em_quantity_max';
NanoEmitter.MAX_PARTICLES = 'em_max_particles';
NanoEmitter.ANGLE_MIN = 'em_angle_min';
NanoEmitter.ANGLE_MAX = 'em_angle_max';
NanoEmitter.ROTATION_SPEED = 'em_rotation_speed';
NanoEmitter.DISTRIBUTE = 'em_distribute';
NanoEmitter.DELAY = 'em_delay';
NanoEmitter.POS_X = 'pos_x';
NanoEmitter.POS_Y = 'pos_y';

NanoEmitter.prototype.createParticles = function() {

	if ( this.pause ) {
		return;
	}

	if ( this.data[NanoEmitter.MAX_PARTICLES] !== 0 &&
		 this.counter >= this.data[NanoEmitter.MAX_PARTICLES] ) {

		return;
	}

	var q = NanoEffect.randomInt( this.data[NanoEmitter.QUANTITY_MIN], this.data[NanoEmitter.QUANTITY_MAX] );
	var particle;
	var angle;

	if ( this.data[NanoEmitter.DISTRIBUTE] ) {
		if ( q > 1 ) {
			angle = ( this.data[NanoEmitter.ANGLE_MAX] - this.data[NanoEmitter.ANGLE_MIN] ) / ( q - 1 );
		}
		else {
			angle = this.data[NanoEmitter.ANGLE_MIN]
		}
	}

	for ( var i = 0; i < q; i++ ) {
		if ( this.data[NanoEmitter.DISTRIBUTE] ) {
			particle = new NanoParticle( this,
										 this.data[NanoEmitter.ANGLE_MIN] + ( i * angle ) )
		}
		else {
			particle = new NanoParticle( this,
										 NanoEffect.random( this.data[NanoEmitter.ANGLE_MIN], this.data[NanoEmitter.ANGLE_MAX] ) );
		}
		this.counter++;
		this.particles.push( particle );
	}
};

NanoEmitter.prototype.update = function( dt ) {
	switch ( this.state ) {
	case NanoEmitter.ST_INTRO:
		if ( this.delay <= 0 ) {
			this.createParticles();
			this.state = NanoEmitter.ST_EMISSION;
		}
		this.delay -= dt;
		break;
	case NanoEmitter.ST_EMISSION:
		this.frequency -= dt;
		if ( this.frequency <= 0 ) {
			this.createParticles();
			this.frequency = this.data[NanoEmitter.FRECUENCY];
		}

		for ( var i = 0; i < this.particles.length; i++ ) {
			this.particles[i].update( dt );
			if ( this.particles[i].isAwaitingDelete ) {
				this.particles[i].free();
				this.particles[i] = null;
				this.particles.splice( i, 1 );
				i--;
			}
		}

		if ( this.data[NanoEmitter.MAX_PARTICLES] > 0 &&
			 this.counter >= this.data[NanoEmitter.MAX_PARTICLES] &&
			 this.particles.length === 0 ) {

			this.isAwaitingDelete = true;
		}
		break;
	}
};

NanoEmitter.prototype.free = function() {
	for ( var i = 0; i < this.particles.length; i++ ) {
		this.particles[i].free();
	}

	this.effect = null;
	this.data = null;
};


/**
 * @constructor
 * @param {NanoEmitter} emitter
 */
function NanoParticle( emitter, angle ) {
	this.canvas = emitter.canvas;
	this.data = emitter.data;
	this.isAwaitingDelete = false;
	this.time = 0;

	var textureName = Common.getRandomFromArray( this.data[NanoParticle.CLIP_ARRAY] );
	if ( window['PIXI'].utils.TextureCache[textureName] ) {
		this.clip = new window['PIXI'].Sprite( window['PIXI'].Texture.fromImage( textureName ) );
	}
	else {
		this.clip = Application.instance.getClip( Common.getRandomFromArray( this.data[NanoParticle.CLIP_ARRAY] ) );
	}

	if ( this.canvas && this.canvas.children && this.canvas.transform ) {
		this.canvas.addChild( this.clip );
	}
	else {
		this.isAwaitingDelete = true;
	}

	var scale = NanoEffect.random( this.data[NanoParticle.SCALE_MIN], this.data[NanoParticle.SCALE_MAX] );
	scale = this.clip.isSprite ? scale * Application.DPI : scale;
	this.clip.scale.x = this.clip.scale.y = scale;
	this.clip.position.x = emitter.effect.x + emitter.ox + NanoEffect.random( this.data[NanoParticle.X_MIN], this.data[NanoParticle.X_MAX] );
	this.clip.position.y = emitter.effect.y + emitter.oy + NanoEffect.random( this.data[NanoParticle.Y_MIN], this.data[NanoParticle.Y_MAX] );
	this.clip.rotation = NanoEffect.random( this.data[NanoParticle.ROTATION_MIN], this.data[NanoParticle.ROTATION_MAX] );
	this.clip.alpha = NanoEffect.random( this.data[NanoParticle.ALPHA_MIN], this.data[NanoParticle.ALPHA_MAX] );
	this.timelife = NanoEffect.randomInt( this.data[NanoParticle.TIMELIFE_MIN], this.data[NanoParticle.TIMELIFE_MAX] );
	this.rotationSpeed = NanoEffect.random( this.data[NanoParticle.ROTATION_SPEED_MIN], this.data[NanoParticle.ROTATION_SPEED_MAX] );

	var tint = Common.getRandomFromArray( this.data[NanoParticle.TINT_ARRAY] );
	if ( tint > 0 ) {
		this.clip.tint = tint;
	}

	this.clip.blendMode = window['PIXI']['BLEND_MODES'][this.data[NanoParticle.BLEND]];

	var speed = NanoEffect.random( this.data[NanoParticle.SPEED_MIN], this.data[NanoParticle.SPEED_MAX] );
	this.ox = this.clip.position.x;
	this.oy = this.clip.position.y;

	this.vx = speed * Math.cos( angle );
	this.vy = speed * Math.sin( angle );

	if ( this.data[NanoParticle.ROTATION_MIN] === 0 && this.data[NanoParticle.ROTATION_MAX] === 0 ) {
		this.clip.rotation = angle;
	}
}

NanoParticle.CLIP = 'pt_clip';
NanoParticle.TINT = 'pt_tint';
NanoParticle.CLIP_ARRAY = 'pt_clip_array';
NanoParticle.TINT_ARRAY = 'pt_tint_array';
NanoParticle.BLEND = 'pt_blend';
NanoParticle.X_MIN = 'pt_x_min';
NanoParticle.X_MAX = 'pt_x_max';
NanoParticle.Y_MIN = 'pt_y_min';
NanoParticle.Y_MAX = 'pt_y_max';
NanoParticle.SCALE_MIN = 'pt_scale_min';
NanoParticle.SCALE_MAX = 'pt_scale_max';
NanoParticle.SCALE_SPEED = 'pt_scale_speed';
NanoParticle.SPEED_MIN = 'pt_speed_min';
NanoParticle.SPEED_MAX = 'pt_speed_max';
NanoParticle.ACCELERATION_X = 'pt_acceleration_x';
NanoParticle.ACCELERATION_Y = 'pt_acceleration_y';
NanoParticle.TIMELIFE_MIN = 'pt_timelife_min';
NanoParticle.TIMELIFE_MAX = 'pt_timelife_max';
NanoParticle.ROTATION_MIN = 'pt_rotation_min';
NanoParticle.ROTATION_MAX = 'pt_rotation_max';
NanoParticle.ROTATION_SPEED_MIN = 'pt_rotation_speed_min';
NanoParticle.ROTATION_SPEED_MAX = 'pt_rotation_speed_max';
NanoParticle.ALPHA_MIN = 'pt_alpha_min';
NanoParticle.ALPHA_MAX = 'pt_alpha_max';
NanoParticle.ALPHA_SPEED = 'pt_alpha_speed';

NanoParticle.prototype.update = function( dt ) {

	this.time += dt;

	if ( this.clip.update ) {
		this.clip.update( dt );
	}

	this.clip.position.x = this.ox + this.vx * this.time + 0.5 * this.data[NanoParticle.ACCELERATION_X] * 0.001 * this.time * this.time;
	this.clip.position.y = this.oy + this.vy * this.time + 0.5 * this.data[NanoParticle.ACCELERATION_Y] * 0.001 * this.time * this.time;

	if ( this.rotationSpeed !== 0 ) {
		this.clip.rotation += this.rotationSpeed * 0.01 * dt;
	}
	this.clip.scale.x += this.data[NanoParticle.SCALE_SPEED] * 0.001 * dt;
	this.clip.scale.y += this.data[NanoParticle.SCALE_SPEED] * 0.001 * dt;
	this.clip.alpha += this.data[NanoParticle.ALPHA_SPEED] * 0.001 * dt;

	if ( this.clip.alpha > 1 ) {
		this.clip.alpha = 1;
	}

	if ( this.clip.alpha <= 0 ) {
		this.isAwaitingDelete = true;
	}

	if ( this.time >= this.timelife ) {
		this.isAwaitingDelete = true;
	}
};

NanoParticle.prototype.free = function() {
	if ( this.clip && this.clip.parent ) {
		this.clip.parent.removeChild( this.clip );
	}

	if ( this.clip.free ) {
		this.clip.free();
	}
	else {
		this.clip.destroy();
	}

	this.clip = null;
	this.canvas = null;
	this.data = null;
};

/**
 * @constructor
 * @param {string} url
 */
function SJsonLoader( url ) {
	this.ajaxRequest = null;
	this.json = null;
	this.url = url;
	this.baseUrl = url.replace(/[^\/]*$/, '');

	this.m_loadCaller = null;
	this.m_loadFunction = null;
	this.m_errorCaller = null;
	this.m_errorFunction = null;
}

SJsonLoader.prototype.addLoadedListener = function( caller, funct ) {
	this.m_loadCaller = caller;
	this.m_loadFunction = funct;
};

SJsonLoader.prototype.addErrorListener = function( caller, funct ) {
	this.m_errorCaller = caller;
	this.m_errorFunction = funct;
};

SJsonLoader.prototype.load = function() {
	this.ajaxRequest = Common.ajaxRequest();
	if ( this.ajaxRequest ) {
		var me = this;
		this.ajaxRequest.onreadystatechange = function() {
			me.onJSONLoaded();
		};
		this.ajaxRequest.open( 'GET', this.url, true );
		if ( this.ajaxRequest.overrideMimeType ) {
			this.ajaxRequest.overrideMimeType( 'application/json' );
		}
		this.ajaxRequest.send( null );
	}
	else {
		Application.error( 'Not found [ AJAX object ] in Browser' );
	}
};

SJsonLoader.prototype.onJSONLoaded = function() {

	if ( this.ajaxRequest.readyState === 4 ) {
		if ( this.ajaxRequest.status === 200 || window.location.protocol.indexOf( 'http' ) === -1 ) {
			this.json = JSON.parse( this.ajaxRequest.responseText );

			if ( this.m_loadCaller && this.m_loadFunction ) {
				this.m_loadFunction.call( this.m_loadCaller, this );
			}
			else if ( this.m_loadFunction ) {
				this.m_loadFunction( this );
			}
		}
		else {

			if ( this.m_erroCaller && this.m_errorFunction ) {
				this.m_errorFunction.call( this.m_erroCaller, this );
			}
			else if ( this.m_errorFunction ) {
				this.m_errorFunction( this );
			}
		}
	}
};

/**
 * @constructor
 * @struct
 */
function SndManager() {
	/** @type {boolean} */
	this.m_muted = false;
	/** @type {boolean} */
	this.callbackBug = false;
}

/** @type {SndManager} */
SndManager.instance = null;

/**
 * @param {Array.<Object>} sounds
 */
SndManager.prototype.loadSounds = function( sounds ) {
};

/**
 * @param {Array.<Object>} sounds
 */
SndManager.prototype.removeSounds = function( sounds ) {
};

/** @return {boolean} */
SndManager.prototype.isMuted = function() {
	return this.m_muted;
};

/** @param {string} id
 * @return {Object}
 */
SndManager.prototype.play = function( id ) {
};

/** @param {string} id */
SndManager.prototype.stop = function( id ) {
};

/** @param {string} id */
SndManager.prototype.pauseSound = function( id ) {
};

SndManager.prototype.pauseAll = function() {
};

SndManager.prototype.resumeAll = function() {
};

SndManager.prototype.stopAllSounds = function() {
};

SndManager.prototype.toggleMute = function() {
	this.m_muted = !this.m_muted;
	Application.info( 'toggleMute: ' + this.m_muted );
};

SndManager.prototype.stopAllMusics = function() {
};

/**
 * @param {string} id
 * @return {boolean}
 */
SndManager.prototype.isPlayingSound = function( id ) {
};

/** @param {string} id */
SndManager.prototype.resumeSound = function( id ) {
};

/**
 * @param {string} id
 * @param {number} vol
 */
SndManager.prototype.setVolumeById = function( id, vol ) {
};

/**
 * @param {string} id
 * @param {number} factor
 */
SndManager.prototype.setVolumeFactor = function( id, factor ) {
};

/**
 * @constructor
 * @struct
 * @extends {SndManager}
 */
function SndManagerIE( callback ) {

	SndManager.call( this );
	SndManager.instance = this;

	if ( !SwitJS.isIE ) {
		Application.error( 'Using SndManagerIE for no IE browsers' );
	}

	this.soundList = {};
	this.callback = callback;
	this.soundsLoaded = 0;
	this.soundsTotal = 0;

	this.soundsToLoad = null;

	var soundManager = window['soundManager'];

	soundManager['setup']( {
							   url: 'media/swf/',
							   flashVersion: 9,
							   useHTML5Audio: true,
							   preferFlash: true,
							   useHighPerformance: true, // use high performance Flash
							   flashLoadTimeout: 2000,
							   noSWFCache: false,
							   consoleOnly: true,
							   wmode: null,
							   debugMode: false,
							   onready: this.onReady,
							   ontimeout: function() {
								   Application.instance.onErrorSndManagerIE();
							   }
						   } );
}
Application.subclass( SndManagerIE, SndManager );

/**
 * @override
 * @param {Array.<Object>} sounds
 */
SndManagerIE.prototype.loadSounds = function( sounds ) {
	Application.info( '[SndManagerIE - LOADING SOUNDS...] - ' + sounds.length );
	var soundManager = window['soundManager'];
	if ( !soundManager.ok() ) {
		this.soundsToLoad = sounds;
		return;
	}

	this.soundsLoaded = 0;
	this.soundsTotal = sounds.length;

	var assetsPath = Application.ASSETS_PATH + "media/sounds/";
	for ( var i = 0; i < sounds.length; i++ ) {
		this.soundList[sounds[i]['id']] = sounds[i];
		soundManager.createSound( {
									  id: sounds[i]['id'],
									  url: assetsPath + sounds[i]['file'] + '.mp3',
									  autoLoad: true,
									  onload: /** @type {SndManagerIE} */( SndManager.instance ).onLoad } );
	}
};

/**
 * @override
 * @param {Array.<Object>} sounds
 */
SndManagerIE.prototype.removeSounds = function( sounds ) {
	var soundManager = window['soundManager'];
	var assetsPath = Application.ASSETS_PATH + "media/sounds/";
	for ( var i = 0; i < sounds.length; i++ ) {
		Application.warn( 'SndManagerIE > removing sound: ' + sounds[i]['id'] );
		this.soundList[sounds[i]['id']] = null;
		soundManager['destroySound']( sounds[i]['id'] );
	}
};

SndManagerIE.prototype.onReady = function() {
	/** @type {SndManagerIE} */
	var sndManager = /** @type {SndManagerIE} */( SndManager.instance );
	if ( !sndManager.soundsToLoad ) {
		return;
	}

	SndManager.instance.loadSounds( sndManager.soundsToLoad );
	sndManager.soundsToLoad = null;
};

/** @param {boolean} stOk */
SndManagerIE.prototype.onLoad = function( stOk ) {
	/** @type {SndManagerIE} */
	var sndManager = /** @type {SndManagerIE} */( SndManager.instance );

	sndManager.soundsLoaded++;
	Application.log( 'SndManagerIE.onLoad: (' + stOk + ') - '
					 + sndManager.soundsLoaded +
					 '/' +
					 sndManager.soundsTotal );

	if ( SLoaderScreen.instance != null ) {
		SLoaderScreen.instance.onFileLoaded();
	}
};

/**
 * @override
 * @param {string} id
 * @return {Object}
 */
SndManagerIE.prototype.play = function( id ) {

	if ( this.m_muted ) {
		return null;
	}
	if ( !this.soundList[id] ) {
		return null;
	}
	var soundManager = window['soundManager'];

	var count = this.soundList[id]['loops'];
	if ( count !== 1 ) {
		if ( count === 0 ) {
			count = 999999;
		}
		var sound = soundManager['sounds'][id];
		if ( sound['instanceCount'] === 0 ) {
			soundManager.play( id, {
				volume: this.soundList[id]['vol'] * 100,
				loops: count
			} );
		}
	}
	else {
		soundManager.play( id, { volume: this.soundList[id]['vol'] * 100 } );
	}
	return null;
};

/**
 * @override
 * @param {string} id
 */
SndManagerIE.prototype.stop = function( id ) {
	window['soundManager'].stop( id );
};

/** @override */
SndManagerIE.prototype.pauseAll = function() {
	window['soundManager'].pauseAll();
};

/** @override */
SndManagerIE.prototype.resumeAll = function() {
	if ( !this.m_muted ) {
		window['soundManager'].resumeAll();
	}
};

/** @override */
SndManagerIE.prototype.stopAllSounds = function() {
	window['soundManager'].stopAll();
};

/** @override */
SndManagerIE.prototype.toggleMute = function() {
	SndManager.prototype.toggleMute.call( this );
	if ( this.m_muted ) {
		window['soundManager'].pauseAll();
	} else {
		window['soundManager'].resumeAll();
	}
};

/** @override */
SndManagerIE.prototype.stopAllMusics = function() {
	var sm2 = window['soundManager'];
	var i, sound, id;
	for ( i = sm2['soundIDs']['length'] - 1; i >= 0; i-- ) {
		sound = sm2['sounds'][sm2['soundIDs'][i]];
		if ( sound['playState'] === 1 ) {
			id = sound['id'];
			if ( this.soundList[id]['loops'] === 0 ) {
				window['soundManager'].stop( id );
			}
		}
	}
};

/**
 * @override
 * @param {string} id
 * @return {boolean}
 */
SndManagerIE.prototype.isPlayingSound = function( id ) {
	var sound = window['soundManager']['getSoundById']( id );
	if ( sound ) {
		return ( sound['playState'] === 1 );
	}
	return false;
};

/**
 * @override
 * @param {string} id
 */
SndManagerIE.prototype.resumeSound = function( id ) {
	var sound = window['soundManager']['getSoundById']( id );
	if ( sound ) {
		sound['resume']();
	}
};

/**
 * @override
 * @param {string} id
 * @param {number} vol
 */
SndManagerIE.prototype.setVolumeById = function( id, vol ) {
	var sound = window['soundManager']['getSoundById']( id );
	if ( sound ) {
		if ( sound['playState'] === 1 ) {
			sound.setVolume( vol * 100 );
		}
	}
};

/**
 * @override
 * @param {string} id
 * @param {number} factor
 */
SndManagerIE.prototype.setVolumeFactor = function( id, factor ) {
	var sound = window['soundManager']['getSoundById']( id );
	if ( sound ) {
		if ( sound['playState'] === 1 ) {
			sound.setVolume( this.soundList[id]['vol'] * 100 * factor );
		}
	}
};

/**
 * @constructor
 * @struct
 * @param {function()} callback
 * @extends {SndManager}
 */
function SndManagerWeb( callback ) {

	SndManager.call( this );
	SndManager.instance = this;

	/** @type {Object} */
	this.soundjs = window['createjs'];
	/** @type {Object.<string, Object>} */
	this.soundList = {};
	/** @type {Function} */
	this.callback = callback;

	/** @type {boolean} */
	var isIE = SwitJS.isIE;
	/** @type {number} */
	var version = SwitJS.browserVersion;
	if ( isIE && ( version < 10 ) ) {
		Application.warn( 'Using SndManagerWeb for IE' + version );
	}

	if ( SwitJS.iDevice && SwitJS.platformVersion < 6 ) {
		Application.warn( 'IOS < 6' );
		this.soundjs.HTMLAudioPlugin.enableIOS = true;
		this.callbackBug = true;
	}

	/** @type {number} */
	this.soundsLoaded = 0;
	/** @type {number} */
	this.soundsTotal = 0;

	this.soundjs['Sound']['alternateExtensions'] = ['mp3'];

	this.soundjs['Sound']['addEventListener']( 'fileload',
											   this.soundjs.proxy( this.onFileload, this ) );
	this.soundjs['Sound']['addEventListener']( 'fileerror',
											   this.soundjs.proxy( this.onFileloadError, this ) );

	if ( this.callbackBug ) {
		this.callback();
	}
}
Application.subclass( SndManagerWeb, SndManager );

/**
 * @override
 * @param {Array.<Object>} sounds
 */
SndManagerWeb.prototype.loadSounds = function( sounds ) {
	Application.info( 'SndManagerWeb::loadSounds() - ' + sounds );
	Application.info( '[SndManagerWeb - LOADING SOUNDS...] - ' + sounds.length );
	this.soundsLoaded = 0;
	this.soundsTotal = sounds.length;

	var assetsPath = Application.ASSETS_PATH + "media/sounds/";
	for ( var i = 0; i < sounds.length; i++ ) {
		this.soundList[sounds[i]['id']] = sounds[i];
		this.soundjs['Sound']['registerSound']( {
													id: sounds[i]['id'],
													src: assetsPath + sounds[i]['file'] + '.ogg',
													data: sounds[i]['instances']
												} );
	}
};

/**
 * @override
 * @param {Array.<Object>} sounds
 */
SndManagerWeb.prototype.removeSounds = function( sounds ) {
	for ( var i = 0; i < sounds.length; i++ ) {
		Application.warn( 'SndManagerWeb > removing sound: ' + sounds[i]['id'] );
		this.soundList[sounds[i]['id']] = null;
		this.soundjs['Sound']['removeSound']( sounds[i]['id'] );
	}
};

/** @param {Object} target ( Event )*/
SndManagerWeb.prototype.onFileload = function( target ) {
	this.soundsLoaded++;
	Application.info( 'SndManagerWeb preloading: ' + target.id + ' ' + this.soundsLoaded + '/' + this.soundsTotal );

	if ( !this.callbackBug ) {
		if ( SLoaderScreen.instance ) {
			SLoaderScreen.instance.onFileLoaded();
		}
	}
};

/** @param {Object} target ( Event )*/
SndManagerWeb.prototype.onFileloadError = function( target ) {
	Application.error( 'SndManagerWeb preloading error: ' + target.id + ' ' + this.soundsLoaded + '/' + this.soundsTotal );
	Application.warn( 'SndManagerWeb::onFileloadError() - Forcing to continue the loader...' );
	this.onFileload( target );
};

SndManagerWeb.prototype.onPlayComplete = function( evt ) {
	this.play( evt['target']['switId'] );
};

/**
 * @override
 * @param {string} id
 * @return {Object}
 */
SndManagerWeb.prototype.play = function( id ) {

	if ( this.m_muted ) {
		return null;
	}
	if ( !this.soundList[id] ) {
		Application.warn( 'SndManagerWeb: sound with id [' + id + '] not found' );
		return null;
	}

	if ( this.soundjs['HTMLAudioPlugin'].enableIOS && ( this.soundList[id]['ios'] == 0 ) ) {
		return null;
	}

	/** @type {Object} */
	var snd = null;
	if ( this.soundjs['HTMLAudioPlugin'].enableIOS ) {
		snd = this.soundjs['Sound'].play( id );
		snd.addEventListener( 'complete', this.soundjs.proxy( this.onPlayComplete, this ) );
	}
	else {
		/** @type {number} */
		var loop = ( this.soundList[id]['loops'] === 0 ) ? 999999 : this.soundList[id]['loops'] - 1;
		snd = this.soundjs['Sound'].play( id, null, 0, 0, loop, this.soundList[id]['vol'] );
	}

	snd['switId'] = id;
	return snd;
};

/**
 * @override
 * @param {string} id
 */
SndManagerWeb.prototype.stop = function( id ) {
	/** @type {Array.<Object>} */
	var instances = this.soundjs['Sound']['_instances'];
	for ( var i = 0; i < instances.length; ++i ) {
		if ( instances[i]['switId'] === id ) {
			instances[i].stop();
		}
	}
};

/**
 * @override
 * @param {string} id
 */
SndManagerWeb.prototype.pauseSound = function( id ) {
	/** @type {Array.<Object>} */
	var instances = this.soundjs['Sound']['_instances'];
	for ( var i = 0; i < instances.length; ++i ) {
		if ( instances[i]['switId'] === id ) {
			instances[i].paused = true;
		}
	}
};

/**
 * @override
 * @param {string} id
 */
SndManagerWeb.prototype.resumeSound = function( id ) {
	/** @type {Array.<Object>} */
	var instances = this.soundjs['Sound']['_instances'];
	for ( var i = 0; i < instances.length; ++i ) {
		if ( instances[i]['switId'] === id ) {
			instances[i].paused = false;
		}
	}
};

/** @param {number} volume */
SndManagerWeb.prototype.setMasterVolume = function( volume ) {
	try {
		this.soundjs['Sound'].setVolume( volume );
	}
	catch ( e ) {
		Application.error( 'SndManagerWeb: ' + e );
	}
};

/** @override */
SndManagerWeb.prototype.pauseAll = function() {
	/** @type {Array.<Object>} */
	var instances = this.soundjs['Sound']['_instances'];
	for ( var i = 0; i < instances.length; ++i ) {
		instances[i].paused = true;
	}
};

/** @override */
SndManagerWeb.prototype.resumeAll = function() {
	if ( this.m_muted ) {
		return;
	}
	/** @type {Array.<Object>} */
	var instances = this.soundjs['Sound']['_instances'];
	for ( var i = 0; i < instances.length; ++i ) {
		instances[i].paused = false;
	}
};

/** @override */
SndManagerWeb.prototype.stopAllSounds = function() {
	this.soundjs['Sound']['stop']();
};

SndManagerWeb.prototype.removeAllSounds = function() {
	this.soundjs['Sound']['removeAllSounds']();
	this.soundjs['Sound'] = null;
};

/** @override */
SndManagerWeb.prototype.toggleMute = function() {
	SndManager.prototype.toggleMute.call( this );
	if ( this.m_muted ) {
		this.soundjs['Sound']['setMute']( true );
	}
	else {
		this.soundjs['Sound']['setMute']( false );
	}
};

/** @override */
SndManagerWeb.prototype.stopAllMusics = function() {
	/** @type {string} */
	var id = '';
	/** @type {Array.<Object>} */
	var instances = this.soundjs['Sound']['_instances'];
	for ( var i = 0; i < instances.length; ++i ) {
		id = instances[i]['switId'];
		if ( this.soundList[id]['loops'] === 0 ) {
			instances[i].stop( id );
		}
	}
};

/**
 * @override
 * @param {string} id
 * @return {boolean}
 */
SndManagerWeb.prototype.isPlayingSound = function( id ) {
	/** @type {Array.<Object>} */
	var instances = this.soundjs['Sound']['_instances'];
	for ( var i = 0; i < instances.length; ++i ) {
		if ( instances[i]['switId'] === id ) {
			return ( instances[i]['playState'] === this.soundjs['Sound']['PLAY_SUCCEEDED'] );
		}
	}
	return false;
};

/**
 * @override
 * @param {string} id
 * @param {number} vol
 */
SndManagerWeb.prototype.setVolumeById = function( id, vol ) {
	var instances = this.soundjs['Sound']['_instances'];
	for ( var i = 0; i < instances.length; ++i ) {
		if ( instances[i]['switId'] === id ) {
			if ( instances[i]['playState'] === this.soundjs['Sound']['PLAY_SUCCEEDED'] ) {
				instances[i].setVolume( vol );
			}
		}
	}
};

/**
 * @override
 * @param {string} id
 * @param {number} factor
 */
SndManagerWeb.prototype.setVolumeFactor = function( id, factor ) {
	var instances = this.soundjs['Sound']['_instances'];
	for ( var i = 0; i < instances.length; ++i ) {
		if ( instances[i]['switId'] === id ) {
			if ( instances[i]['playState'] === this.soundjs['Sound']['PLAY_SUCCEEDED'] ) {
				instances[i].setVolume( this.soundList[id]['vol'] * factor );
			}
		}
	}
};

/**
 * @constructor
 * @param {string} nameClip
 * @param {number=} x Position X.
 * @param {number=} y Position Y.
 * @extends DebugObject
 */
function Actor( nameClip, x, y ) {
	/** @type {number} */
	this.m_x = ( typeof x !== 'undefined' ) ? x : 0;
	/** @type {number} */
	this.m_y = ( typeof y !== 'undefined' ) ? y : 0;
	/** @type {Animation} */
	this.clip = Application.instance.getAnimation( nameClip );
	this.clip.setPosition( this.m_x, this.m_y );





	DebugObject.call( this );
}
Application.subclass( Actor, DebugObject );

/** @override */
Actor.prototype.free = function() {
	this.clip.free();
	this.clip = null;
};

/** @param {number} x */
Actor.prototype.setX = function( x ) {
	this.clip.x = x;
	this.m_x = x;
};

/** @param {number} y */
Actor.prototype.setY = function( y ) {
	this.clip.y = y;
	this.m_y = y;
};

/**
 * @param {number} x
 * @param {number} y
 */
Actor.prototype.setPosition = function( x, y ) {
	this.clip.x = x;
	this.clip.y = y;
	this.m_x = x;
	this.m_y = y;
};

/** @return {number} */
Actor.prototype.getX = function() {
	return this.m_x;
};

/** @return {number} */
Actor.prototype.getY = function() {
	return this.m_y;
};

/** @param {number} scale */
Actor.prototype.setScale = function( scale ) {
	this.clip.scale.x = scale;
	this.clip.scale.y = scale;
};

/** @param {number} scale */
Actor.prototype.setScaleX = function( scale ) {
	this.clip.scale.x = scale;
};

/** @param {number} scale */
Actor.prototype.setScaleY = function( scale ) {
	this.clip.scale.y = scale;
};

/** @param {number} angle */
Actor.prototype.setRotation = function( angle ) {
	this.clip.rotation = angle;
};

/**
 * @param {Object} caller
 * @param {function(Animation)} callback
 */
Actor.prototype.onEndAnimation = function( caller, callback ) {
	if ( this.clip != null ) {
		this.clip.onEndAnimation( caller, callback );
	}
};

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
Actor.prototype.onDebugDraw = function( ctx ) {
};

/** @param {string} nameClip */
Actor.prototype.setClip = function( nameClip ) {
	if ( this.clip != null ) {
		this.clip.free();
	}
	this.clip = Application.instance.getAnimation( nameClip );
	this.clip.x = this.m_x;
	this.clip.y = this.m_y;
};

/** @param {number} dt */
Actor.prototype.update = function( dt ) {
	if ( this.clip != null ) {
		this.clip.x = this.m_x;
		this.clip.y = this.m_y;
		this.clip.update( dt );
	};
};

/**
 * @constructor
 * @struct
 * @param {number} x Position X.
 * @param {number} y Position Y.
 * @param {SDisplayObjectContainer} canvas Container.
 */
function Character( x, y, canvas ) {
	/** @type {SDisplayObjectContainer} */
	this.canvas = canvas;
	/** @type {number} */
	this.m_x = x || 0;
	/** @type {number} */
	this.m_y = y || 0;
	/** @type {Animation} */
	this.clip = null;
	/** @type {Object.<string, string>} */
	this.states = {};
	/** @type {string} */
	this.animation = '';
	/** @type {string} */
	this.state = '';
	/** @type {Object} */
	this.m_endAniCaller = null;
	/** @type {Function} */
	this.m_endAniFunction = null;
	/** @type {number} */
	this.lastFrame = -1;
	/** @type {Object.<string, Object>} */
	this.functions = {};
	/** @type {boolean} */
	this.toDelete = false;
}

Character.prototype.free = function() {
	if ( this.clip ) {
		if ( this.clip.parent ) {
			this.clip.parent.removeChild( this.clip );
		}
		this.clip.free();
		this.clip = null;
	}

	this.canvas = null;
	this.states = null;
	this.m_endAniCaller = null;
	this.m_endAniFunction = null;
	this.functions = null;
};

/** @param {number} x */
Character.prototype.setX = function( x ) {
	this.m_x = x;
	if ( this.clip ) {
		this.clip.position.x = this.m_x;
	}
};

/** @param {number} y */
Character.prototype.setY = function( y ) {
	this.m_y = y;
	if ( this.clip ) {
		this.clip.position.y = this.m_y;
	}
};

/** @return {number} */
Character.prototype.getX = function() {
	return this.m_x;
};

/** @return {number} */
Character.prototype.getY = function() {
	return this.m_y;
};

/**
 * @param {Object} caller
 * @param {function(string)|null} callback
 */
Character.prototype.onEndAnimation = function( caller, callback ) {
	this.m_endAniCaller = caller;
	this.m_endAniFunction = callback;
};

/** @param {Animation} clip */
Character.prototype._endAnimation = function( clip ) {
	if ( ( this.m_endAniCaller != null ) && ( this.m_endAniFunction != null ) ) {
		this.m_endAniFunction.call( this.m_endAniCaller, this.state );
	}
};

/**
 * @param {number} x
 * @param {number} y
 */
Character.prototype.setPosition = function( x, y ) {
	this.m_x = x;
	this.m_y = y;
	if ( this.clip ) {
		this.clip.position.x = this.m_x;
		this.clip.position.y = this.m_y;
	}
};

/**
 * @param {string} idState
 * @param {string} idSymbol
 * @param {Array.<Object>=} functionsInFrame
 */
Character.prototype.addState = function( idState, idSymbol, functionsInFrame ) {
	this.states[idState] = idSymbol;
	functionsInFrame = ( typeof functionsInFrame !== 'undefined' ) ? functionsInFrame : [];

	for ( var prop in this.functions ) {
		if ( prop.indexOf( idState + '_' ) != -1 ) {
			delete this.functions[prop];
		}
	}

	for ( var i = 0; i < functionsInFrame.length; i++ ) {
		this.functions[idState + '_' + functionsInFrame[i].frame] = functionsInFrame[i];
	}
};

/**
 * @param {string} idState
 * @param {boolean=} isLoop
 */
Character.prototype.gotoState = function( idState, isLoop ) {
	isLoop = ( typeof isLoop !== 'undefined' ) ? isLoop : true;
	if ( this.states[idState] ) {
		this.state = idState;

		if ( this.clip != null ) {
			if ( this.clip.parent != null ) {
				this.clip.parent.removeChild( this.clip );
			}
			this.clip.free();
		}

		this.clip = Application.instance.getAnimation( this.states[idState] );
		this.clip.position.x = this.m_x;
		this.clip.position.y = this.m_y;
		this.clip.onEndAnimation( this, this._endAnimation );
		this.clip.loop = isLoop;
		this.animation = this.states[idState];
		this.canvas.addChild( this.clip );

		this.lastFrame = -1;
	}
	else {
		Application.error( 'Character::gotoState() - State: [' + idState + '] is not registered' );
	}
};

/** @param {number} dt */
Character.prototype.update = function( dt ) {
	if ( this.clip != null ) {
		this.clip.update( dt );
		if ( this.lastFrame !== this.clip.currentFrame ) {
			this.lastFrame = this.clip.currentFrame;
			if ( this.functions[this.state + '_' + this.clip.currentFrame] ) {
				var obj = this.functions[this.state + '_' + this.clip.currentFrame];
				obj.callback.call( obj.caller );
			}
		}
	}
};


/** @param {number} value */
Character.prototype.setDepth = function( value ) {
};

/**
 * @constructor
 */
function Layout() {
}
Layout.ALIGN_TOP_LEFT = 0;
Layout.ALIGN_TOP_CENTER = 1;
Layout.ALIGN_CENTER = 2;

/** @type {number} */
Layout.scale = 1;
/** @type {number} */
Layout.dpi = 1;
/** @type {number} */
Layout.align = Layout.ALIGN_CENTER;
/** @type {boolean} */
Layout.resizeEnable = true;
/** @type {number} */
Layout.offsetX = 0;
/** @type {number} */
Layout.offsetY = 0;
/** @type {number} */
Layout.top = 0;
/** @type {number} */
Layout.left = 0;
/** @type {number} */
Layout.width = 0;
/** @type {number} */
Layout.height = 0;
/** @type {number} */
Layout.minAspectRatio = Application.APP_WIDTH / Application.APP_HEIGHT;
/** @type {number} */
Layout.maxAspectRatio = 16 / 9;
/** @type {number} */
Layout.aspectRatio = Layout.minAspectRatio;
/** @type {Object} */
Layout.supports3dTransform = window.WebKitCSSMatrix || window.MSCSSMatrix;

/**
 * @param {number} width
 * @param {number} height
 */
Layout.onResize = function( width, height ) {

	Layout.width = Math.floor( width );
	Layout.height = Math.floor( height );
	Layout.dpi = window.devicePixelRatio || window.screen['deviceXDPI'] / window.screen['logicalXDPI'] || 1;

	Layout.scale = 1;
	Layout.top = 0;
	Layout.left = 0;
	Layout.offsetX = 0;
	Layout.offsetY = 0;

	/** @type {number} */
	var stageScaleX = width / Application.APP_WIDTH;
	/** @type {number} */
	var stageScaleY = height / Application.APP_HEIGHT;

	if ( stageScaleY < stageScaleX ) {
		Layout.scale = stageScaleY;
		Layout.left = Math.floor( ( width - Application.APP_WIDTH * Layout.scale ) / 2 );
	}
	else if ( stageScaleY > stageScaleX ) {
		Layout.scale = stageScaleX;
		Layout.top = Math.floor( ( height - Application.APP_HEIGHT * Layout.scale ) / 2 );
	}

	Layout.aspectRatio = Math.min( Layout.maxAspectRatio, Math.max( Layout.minAspectRatio, Layout.width / Layout.height ) );

	if ( Application.WIDE_SCREEN ) {

		if ( stageScaleY < stageScaleX ) {
			Layout.offsetX = Layout.left;
			Application.instance.pixiApp.renderer.resize( Math.ceil( width / Layout.scale ), Application.APP_HEIGHT );
			Application.instance.canvas.position.x = Layout.offsetX / Layout.scale;
			Application.instance.canvas.position.y = 0;
		}
		else {
			Layout.offsetY = Layout.top;
			Application.instance.pixiApp.renderer.resize( Application.APP_WIDTH, Math.ceil( height / Layout.scale ) );
			Application.instance.canvas.position.x = 0;
			Application.instance.canvas.position.y = Layout.offsetY / Layout.scale;
		}

		Application.log( 'posX: ' + Application.instance.canvas.position.x );
		Application.log( 'posY: ' + Application.instance.canvas.position.y );

		Application.instance.pixiApp.renderer.view.style.top = '0px';
		Application.instance.pixiApp.renderer.view.style.left = '0px';
		Application.instance.pixiApp.renderer.view.style['transform-origin'] = '0px 0px';
		Application.instance.pixiApp.renderer.view.style['transform'] = 'scale(' + Layout.scale + ', ' + Layout.scale + ')';
		Layout.transform( Application.instance.pixiApp.renderer.view );
	}
	else {
		Application.instance.canvas.scale.x = Layout.scale;
		Application.instance.canvas.scale.y = Layout.scale;
		Application.instance.canvas.position.x = Layout.left;
		Application.instance.canvas.position.y = Layout.top;

		Application.log( 'Layout.left: ' + Layout.left );
		Application.log( 'Layout.top: ' + Layout.top );

		if ( Layout.left !== 0 ) {
			Application.instance.pixiApp.renderer.resize( width - Layout.left, Layout.scale * Application.APP_HEIGHT );
		}
		else {
			Application.instance.pixiApp.renderer.resize( Layout.scale * Application.APP_WIDTH, height - Layout.top );
		}
	}

	if ( GuiGame.instance ) {
		GuiGame.instance.fixGameScale();
	}
};

Layout.fixInteractionEvent = function( e ) {
	if ( Application.WIDE_SCREEN ) {
		var pointerEvent = {};
		pointerEvent['data'] = {}
		pointerEvent['data']['identifier'] = typeof e['data']['identifier'] !== 'undefined' ? e['data']['identifier'] : 0;
		pointerEvent['data']['originalEvent'] = e['data']['originalEvent'];
		pointerEvent['data']['target'] = e['data']['target'];
		pointerEvent['data']['global'] = {};
		pointerEvent['data']['global']['x'] = Math.floor( ( e['data']['global']['x'] - Application.instance.canvas.position.x ) * Layout.scale + Layout.left );
		pointerEvent['data']['global']['y'] = Math.floor( ( e['data']['global']['y'] - Application.instance.canvas.position.y ) * Layout.scale + Layout.top );
		pointerEvent['target'] = e['target'];
		return pointerEvent;
	}
	return e;
};

Layout.position = function( id, top, left ) {
	var elem = document.getElementById( id );
	if ( elem ) {
		elem.style['top'] = top + 'px';
		elem.style['left'] = left + 'px';
	}
};

/** @param {Object} elem */
Layout.transform = function( elem ) {
	if ( elem ) {
		elem.style['transformOrigin'] = '0 0';
		elem.style['transform'] = 'scale(' + Layout.scale + ', ' + Layout.scale + ')';
		elem.style['webkitTransformOrigin'] = '0 0';
		elem.style['webkitTransform'] = 'scale(' + Layout.scale + ', ' + Layout.scale + ')';
		elem.style['OTransformOrigin'] = '0 0';
		elem.style['OTransform'] = 'scale(' + Layout.scale + ', ' + Layout.scale + ')';
		if ( SwitJS.isIE ) {
			if ( window['config']['settings']['RIGHT_TO_LEFT'] ) {
				elem.style['msTransformOrigin'] = '100% 0%';
				elem.style['msTransform'] = 'scale(' + Layout.scale + ', ' + Layout.scale + ')';
			}
			else {
				elem.style['msTransformOrigin'] = '0 0';
				elem.style['msTransform'] = 'scale(' + Layout.scale + ', ' + Layout.scale + ')';
			}
		}
	}
};

/**
 * Creates a point.
 * @constructor
 * @struct
 * @param {number=} x The x component of this vector (or 0.0 if left out)
 * @param {number=} y The y component of this vector (or 0.0 if left out)
 */
function Point( x, y ) {
	/**
	 * The x component of this point
	 * @type {number}
	 */
	this.x = ( typeof x === 'undefined' ) ? 0.0 : x;
	/**
	 * The y component of this point
	 * @type {number}
	 */
	this.y = ( typeof y === 'undefined' ) ? 0.0 : y;
}

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
Point.prototype.distanceTo = function( x, y ) {
	return Math.sqrt( ( x - this.x ) * ( x - this.x ) + ( y - this.y ) * ( y - this.y ) );
};

/**
 * @constructor
 * @struct
 * @param {number=} x
 * @param {number=} y
 * @param {number=} w
 * @param {number=} h
 */
function Rectangle( x, y, w, h ) {
	/**
	 * The x component of this point
	 * @type {number}
	 */
	this.x = ( typeof x !== 'undefined' ) ? x : 0;
	/**
	 * The y component of this point
	 * @type {number}
	 */
	this.y = ( typeof y !== 'undefined' ) ? y : 0;
	/**
	 * The w component of this point
	 * @type {number}
	 */
	this.w = ( typeof w !== 'undefined' ) ? w : 0;
	/**
	 * The h component of this point
	 * @type {number}
	 */
	this.h = ( typeof h !== 'undefined' ) ? h : 0;
}

/** @return {number} */
Rectangle.prototype.left = function() {
	return this.x;
};

/** @param {number} value */
Rectangle.prototype.setLeft = function( value ) {
	this.x = value;
};

/** @return {number} */
Rectangle.prototype.right = function() {
	return this.x + this.w;
};

/** @param {number} value */
Rectangle.prototype.setRight = function( value ) {
	if ( value < this.x ) {
		return;
	}
	this.w = value - this.x;
};

/** @return {number} */
Rectangle.prototype.top = function() {
	return this.y;
};

/** @param {number} value */
Rectangle.prototype.setTop = function( value ) {
	this.y = value;
};

/** @return {number} */
Rectangle.prototype.bottom = function() {
	return this.y + this.h;
};

/** @param {number} value */
Rectangle.prototype.setBottom = function( value ) {
	if ( value < this.y ) {
		return;
	}
	this.h = value - this.y;
};

Rectangle.prototype.isEqual = function( rect ) {
	return ( ( this.x === rect.x ) && ( this.y === rect.y )
		   && ( this.w === rect.w ) && ( this.h === rect.h ) );
};

/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
Rectangle.prototype.intersectPoint = function( x, y ) {
	return ( ( x >= this.x ) && ( x <= this.x + this.w )
		  && ( y >= this.y ) && ( y <= this.y + this.h ) );
};

Rectangle.prototype.contains = function( x, y ) {
	return ( ( x >= this.x && x <= this.x + this.w ) && ( y >= this.y && y <= this.y + this.h ) );
};

/**
 * @param {Rectangle} rect
 * @return {boolean}
 */
Rectangle.prototype.intersectRect = function( rect ) {
	return ( ( this.right() >= rect.x ) && ( this.x <= rect.right() ) &&
			( this.bottom() >= rect.y ) && ( this.y <= rect.bottom() ) );
};

/**
 * @param {Rectangle} rect
 * @return {Rectangle}
 */
Rectangle.prototype.intersection = function( rect ) {
	if ( !this.intersectRect( rect ) ) {
		return null;
	}
	/** @type {Rectangle} */
	var tmpRect = new Rectangle();
	tmpRect.x = ( this.x > rect.x ) ? this.x : rect.x;
	tmpRect.y = ( this.y > rect.y ) ? this.y : rect.y;
	tmpRect.setRight( ( this.right() < rect.right() ) ? this.right() : rect.right() );
	tmpRect.setBottom( ( this.bottom() < rect.bottom() ) ? this.bottom() : rect.bottom() );
	return tmpRect;
};

/** @return {boolean} */
Rectangle.prototype.containsRect = function( rect ) {
	return ( ( rect.x >= this.x ) && ( rect.y >= this.y ) &&
			( rect.right() <= this.right() ) && ( rect.bottom() <= this.bottom() ) );
};

/** @return {Rectangle} */
Rectangle.prototype.clone = function() {
	return new Rectangle( this.x, this.y, this.w, this.h );
};

/** @param {Rectangle} rect */
Rectangle.prototype.copyRectangle = function( rect ) {
	this.x = rect.x;
	this.y = rect.y;
	this.w = rect.w;
	this.h = rect.h;
};

/** @return {boolean} */
Rectangle.prototype.isEmpty = function() {
	return ( ( this.w === 0 ) && ( this.h === 0 ) );
};

Rectangle.prototype.setEmpty = function() {
	this.w = 0;
	this.h = 0;
};

/** @return {string} */
Rectangle.prototype.toString = function() {
	return 'x:' + this.x + ' y:' + this.y + ' w:' + this.w + ' h:' + this.h;
};

/**
 * @constructor
 * @param {Object} object
 * @param {number=} x
 * @param {number=} y
 * @param {number=} w
 * @param {number=} h
 * @extends Rectangle
 */
function NamedRectangle( object, x, y, w, h ) {
	/** @type {Object} */
	this.m_object = object;
	Rectangle.call( this, x, y, w, h );
}
Application.subclass( NamedRectangle, Rectangle );

/** @returns {Object} */
NamedRectangle.prototype.getObject = function() {
	return this.m_object;
}

/** @override */
NamedRectangle.prototype.toString = function() {
	return this.m_object + ' (' + this.x + ', ' + this.y + ', ' + this.w + ', ' + this.h + ')';
}

/**
 * @constructor
 * @param {Rectangle} bounds
 * @param {number} level
 * @param {number} pxFactor
 * @param {number} pyFactor
 * @param {number} xoff
 * @param {number} yoff
 */
function QuadTree( bounds, level, pxFactor, pyFactor, xoff, yoff ) {
	/** @type {Rectangle} */
	this.bounds = bounds;
	/** @type {number} */
	this.level = level;
	/** @type {number} */
	this.parallaxXFactor = pxFactor;
	/** @type {number} */
	this.parallaxYFactor = pyFactor;
	/** @type {number} */
	this.xOffset = xoff;
	/** @type {number} */
	this.yOffset = yoff;
	/** @type {Array.<QuadTree>|null} */
	this.children = null;
	/** @type {Array.<NamedRectangle>} */
	this.objects = [];
	/** @type {number} */
	this.m_count = 0;

	/** @type {Rectangle} */
	this.lastCamera = null;
}

QuadTree.minWidth = 100;
QuadTree.minHeight = 100;
QuadTree.MAX_OBJECTS_PER_NODE = 4;
QuadTree.MAX_WIDTH = 1000;
QuadTree.MAX_HEIGHT = 768;

/** @returns {number} */
QuadTree.prototype.count = function() {
	return this.m_count;
}

/**
 * @param {boolean} splitHorizontally
 * @param {boolean} splitVertically
 */
QuadTree.prototype.split = function( splitHorizontally, splitVertically ) {
	var x = this.bounds.left();
	var y = this.bounds.top();
	var hw = this.bounds.w / 2;
	var hh = this.bounds.h / 2;

	if ( splitHorizontally && splitVertically ) {
		var topLeft = new QuadTree( new Rectangle( x, y, hw, hh ), this.level + 1,
			this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset );
		var topRight = new QuadTree( new Rectangle( x + hw, y, hw, hh ), this.level + 1,
			this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset );
		var bottomLeft = new QuadTree( new Rectangle( x, y + hh, hw, hh ), this.level + 1,
			this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset );
		var bottomRight = new QuadTree( new Rectangle( x + hw, y + hh, hw, hh ), this.level + 1,
			this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset );
		this.children = [topLeft, topRight, bottomLeft, bottomRight];
	} else if ( splitHorizontally ) {
		var left = new QuadTree( new Rectangle( x, y, hw, hh * 2 ), this.level + 1,
			this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset );
		var right = new QuadTree( new Rectangle( x + hw, y, hw, hh * 2 ), this.level + 1,
			this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset );
		this.children = [left, right];
	} else if ( splitVertically ) {
		var top = new QuadTree( new Rectangle( x, y, hw * 2, hh ), this.level + 1,
			this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset );
		var bottom = new QuadTree( new Rectangle( x, y + hh, hw * 2, hh ), this.level + 1,
			this.parallaxXFactor, this.parallaxYFactor, this.xOffset, this.yOffset );
		this.children = [top, bottom];
	} else {
		return;
	}

	var newObjects = [];
	var l = this.objects.length;
	var k = this.children.length;
	for ( var i = 0; i < l; i++ ) {
		var item = this.objects[i];
		var fitInside = false;
		for ( var j = 0; j < k; j++ ) {
			if ( this.children[j].insert( item ) ) {
				fitInside = true;
				break;
			}
		}
		if ( !fitInside ) {
			newObjects.push( item );
		}
	}
	this.objects = newObjects;
}

/**
 * @param {NamedRectangle} item
 * @returns {boolean}
 */
QuadTree.prototype.tryToInsertIntoChildren = function( item ) {
	var l = this.children.length;
	for ( var i = 0; i < l; i++ ) {
		var child = this.children[i];
		if ( child.insert( item ) ) {
			return true;
		}
	}
	return false;
}

/**
 * @param {NamedRectangle} item
 * @returns {boolean}
 */
QuadTree.prototype.insert = function( item ) {
	if ( this.bounds.containsRect( item ) ) {
		if ( this.children === null ) {
			this.objects.push( item );
			if ( this.objects.length > QuadTree.MAX_OBJECTS_PER_NODE ) {
				var splitHorizontally = this.bounds.w > QuadTree.minWidth * 2;
				var splitVertically = this.bounds.h > QuadTree.minHeight * 2;
				this.split( splitHorizontally, splitVertically );
			}
		} else if ( !this.tryToInsertIntoChildren( item ) ) {
			this.objects.push( item );
		}
		this.m_count++;
		return true;
	} else {
		return false;
	}
}

/**
 * @param {Rectangle} camera
 * @returns {Array.<NamedRectangle>}
 */
QuadTree.prototype.queryObjectsAdjusted = function( camera ) {
	var result = [];
	var l = this.objects.length;
	for ( var i = 0; i < l; i++ ) {
		var item = this.objects[i];
		if ( item.intersectRect( camera ) ) {
			result.push( item );
		}
	}
	return result;
}

/**
 * @param {Rectangle} camera
 * @returns {Array.<NamedRectangle>}
 */
QuadTree.prototype.queryAdjusted = function( camera ) {
	this.lastCamera = camera;
	var result = [];
	if ( this.bounds.intersectRect( camera ) ) {
		if ( this.children !== null ) {
			var l = this.children.length;
			for ( var i = 0; i < l; i++ ) {
				result = result.concat( this.children[i].queryAdjusted( camera ) );
			}
		}
		result = result.concat( this.queryObjectsAdjusted( camera ) );
	}
	return result;
}

/**
 * @param {Rectangle} camera
 * @returns {Array.<NamedRectangle>}
 */
QuadTree.prototype.query = function( camera ) {
	if ( this.parallaxXFactor === 1 && this.parallaxYFactor === 1 &&
		this.xOffset === 0 && this.yOffset === 0 ) {
		return this.queryAdjusted( camera );
	} else {
		return this.queryAdjusted( new Rectangle(
			camera.left() * this.parallaxXFactor - this.xOffset,
			camera.top() * this.parallaxYFactor - this.yOffset,
			camera.w, camera.h ) );
	}
}

/**
 * @param {NamedRectangle} rect
 * @returns {boolean}
 */
QuadTree.prototype.remove = function( rect ) {
	if ( rect && this.bounds.containsRect( rect ) ) {
		if ( this.children !== null ) {
			var l = this.children.length;
			for ( var i = 0; i < l; i++ ) {
				var child = this.children[i];
				if ( child.remove( rect ) ) {
					if ( child.children === null && child.objects.length === 0 ) {
						this.children.splice( i, 1 );
						if ( this.children.length === 0 ) {
							this.children = null;
						}
					}
					return true;
				}
			}
		}

		var l = this.objects.length;
		for ( var i = 0; i < l; i++ ) {
			if ( this.objects[i] === rect ) {
				this.objects.splice( i, 1 );
				return true;
			}
		}
	}
	return false;
}

QuadTree.prototype.free = function() {
	if ( this.children !== null ) {
		var l = this.children.length;
		for ( var i = 0; i < l; i++ ) {
			this.children[i].free();
		}
		this.children = null;
	}
	this.objects = null;
	this.bounds = null;
	this.lastCamera = null;
}

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
QuadTree.prototype.onDebugDraw = function( ctx ) {
	if ( this.lastCamera !== null && this.bounds.intersectRect( this.lastCamera ) ) {
		ContextGraphics.drawRectangle( ctx, this.bounds.left() - this.lastCamera.left(), this.bounds.top() - this.lastCamera.top(),
			this.bounds.w, this.bounds.h, 2, Common.COLOR_RED, Common.COLOR_NONE );
		var l = this.objects.length;
		for ( var i = 0; i < l; i++ ) {
			var item = this.objects[i];
			ContextGraphics.drawRectangle( ctx, item.left() - this.lastCamera.left(), item.top() - this.lastCamera.top(),
				item.w, item.h, 2, Common.COLOR_GREEN, Common.COLOR_NONE );
		}
		if ( this.children !== null ) {
			l = this.children.length;
			for ( var i = 0; i < l; i++ ) {
				this.children[i].onDebugDraw( ctx );
			}
		}
	}
}
/**
 * Creates a SScreen.
 * @constructor
 * @struct
 * @param {string=} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 */
function SScreen( clipName, x, y, screenParent ) {
	clipName = ( typeof clipName === 'undefined' ) ? '' : clipName;

	/** @type {SScreen} */
	this.screenParent = ( typeof screenParent === 'undefined' ) ? null : screenParent;
	/** @type {SSprite} */
	this.blurBG = null;

	/** @type {SDisplayObjectContainer} */
	this.canvas = Application.instance.addDisplayContainer();
	Application.instance.canvas.addChild( this.canvas );

	this.canvas['hitArea'] = new PIXI.Rectangle( -Application.APP_WIDTH * 0.5, -100,
											 Application.APP_WIDTH * 2,
											 Application.APP_HEIGHT + 200 );
	this.canvas.addPressListener( this, this.onPointerPress );
	this.canvas.addReleaseListener( this, this.onPointerRelease );
	this.canvas.addPointerMoveListener( this, this.onPointerMove );
	this.setInteractive( false );

	/** @type {SDisplayObjectContainer} */
	this.blurContent = Application.instance.addDisplayContainer();
	this.canvas.addChild( this.blurContent );

	/** @type {number} */
	this.frameWaitActionStop = 0;

	/** @type {Animation} */
	this.clip = null;

	if ( clipName ) {
		this.clip = Application.instance.getAnimation( clipName );
		this.clip.screenLinked = this;
		this.frameWaitActionStop = this.clip.screenActionStop;
		this.canvas.addChild( this.clip );
	}

	/** @type {number} */
	this.skipCode = 32;

	this.canvas.position.x = x || 0;
	this.canvas.position.y = y || 0;

	/** @type {SScreen|Object} */
	this.popup = null;
	/** @type {Object.<string, GuiControl>} */
	this.controls = {};
	/** @type {boolean} */
	this.spaceBarEnabled = false;
	/** @type {boolean} */
	this.activePress = true;
	/** @type {string} */
	this.lastInteractionControl = '';

	this.m_debugText = null;

	SScreen.parseControls( this, clipName );

	/** @type {SEffect} */
	this.m_transitionFx = null;
	/** @type {number} */
	this.state = 0;
	this.init();

	/** @type {Object.<string, Point>} */
	this.m_controlPos = {};
}

SScreen.prototype.createTransitionIn = function() {
};

SScreen.prototype.createTransitionOut = function() {
};

SScreen.prototype.onEndTransitionIn = function() {
};

SScreen.prototype.onEndTransitionOut = function() {
};

SScreen.prototype.onActionScreen = function() {
};

/**
 * @public
 */
SScreen.prototype.onAppLostFocus = function() {
};

/**
 * @public
 */
SScreen.prototype.onAppGotFocus = function() {
};

/**
 * @param {number=} blur
 */
SScreen.prototype.applyBlur = function( blur ) {
	blur = blur || 2;
	var image = new Image();
	image.src = Application.instance.captureScreen();
	this.blurBG = new SSprite( image.src );
	this.blurBG.position.x = -Layout.left / Layout.scale;
	this.blurContent.addChild( this.blurBG );
	var filter = new window['PIXI']['filters']['BlurFilter']();
	filter.blur = blur;
	this.blurBG.filters = [filter];
};

/**
 * @param {string} nameClip
 * @param {number=} x
 * @param {number=} y
 * @param {Object=} params
 * @param {SDisplayObjectContainer=} canvas
 */
SScreen.prototype.createTransition = function( nameClip, x, y, params, canvas ) {
	x = ( typeof x === 'undefined' ) ? 0 : x;
	y = ( typeof y === 'undefined' ) ? 0 : y;
	params = ( typeof params === 'undefined' ) ? null : params;
	canvas = ( typeof canvas === 'undefined' ) ? null : canvas;

	if ( this.m_transitionFx !== null ) {
		this.m_transitionFx.free();
	}

	this.m_transitionFx = new SEffectAnimo( nameClip, x, y, canvas || this.clip, 1 );
	this.m_transitionFx.onComplete( this, this.onEndTransition );
	this.m_transitionFx.params = params;
};

/**
 * @param {Function} typeClass
 * @param {Object=} params
 * @param {Object=} canvas
 */
SScreen.prototype.createCustomTransition = function( typeClass, params, canvas ) {
	params = params || null;
	if ( this.m_transitionFx !== null ) {
		this.m_transitionFx.free();
	}

	this.m_transitionFx = new typeClass( params, canvas || this.clip );
	this.m_transitionFx.onEndAnimation( this, this.onEndTransition );
};

/** @param {boolean} value */
SScreen.prototype.setInteractive = function( value ) {
	this.canvas['interactive'] = value;
};

/**
 * @param {string} id
 * @return {GuiControl}
 */
SScreen.prototype.getControl = function( id ) {
	if ( this.controls && this.controls[id] ) {
		return this.controls[id];
	}
	Application.warn( 'Control [' + id + '] no found' );
	return null;
};

SScreen.prototype.init = function() {
};

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
SScreen.prototype.onDebugDraw = function( ctx ) {
};

/** @param {SEffect} fx */
SScreen.prototype.onEndTransition = function( fx ) {
	fx.isAwaitingDelete = true;
};

SScreen.prototype.onUIPress = function( control ) {
	if ( this.popup !== null ) {
		this.popup.onUIPress( control );
		return;
	}
	this.lastInteractionControl = control.name;
};

SScreen.prototype.onUIRelease = function( control ) {
	if ( this.popup !== null ) {
		this.popup.onUIRelease( control );
		return;
	}
};

SScreen.prototype.onUIPressAndRelease = function( control ) {
	if ( this.popup !== null ) {
		this.popup.onUIPressAndRelease( control );
		return;
	}
};

SScreen.prototype.onUIMove = function( control ) {
	if ( this.popup !== null ) {
		this.popup.onUIMove( control );
		return;
	}
};

SScreen.prototype.onUIOver = function( control ) {
	if ( this.popup !== null ) {
		this.popup.onUIOver( control );
		return;
	}
};

SScreen.prototype.onUIOut = function( control ) {
	if ( this.popup !== null ) {
		this.popup.onUIOut( control );
		return;
	}
};

SScreen.prototype.onStopScreen = function() {
	if ( this.clip ) {
		this.clip.stop();
	}
};

SScreen.prototype.onResumeScreen = function() {
	if ( this.clip ) {
		this.clip.resume();
	}
};

SScreen.prototype.onFinishScreen = function() {
};

SScreen.prototype.onPointerPress = function( event ) {
};

SScreen.prototype.onPointerRelease = function( event ) {
};

SScreen.prototype.onPointerPressAndRelease = function( event ) {
};

SScreen.prototype.onPointerOver = function( event ) {
};

SScreen.prototype.onPointerMove = function( event ) {
};
SScreen.prototype.activePressBar = function() {
	this.spaceBarEnabled = true;
};

SScreen.prototype.onPressSpaceBar = function() {
	this.spaceBarEnabled = false;
};

SScreen.prototype.update = function( dt ) {
	if ( this.popup !== null ) {
		this.popup.update( dt );
	}

	if ( this.clip ) {
		this.clip.update( dt );
	}

	if ( this.m_transitionFx ) {
		if ( this.m_transitionFx.isAwaitingDelete ) {
			this.m_transitionFx.free();
			this.m_transitionFx = null;
		}
		else {
			this.m_transitionFx.update( dt );
		}
	}
};

SScreen.prototype.onResize = function( e ) {
	if ( this.popup !== null ) {
		this.popup.onResize( e );
	}

	if ( this.clip ) {
		var deltaX = Application.instance.canvas.x;
		var deltaY = Application.instance.canvas.y;

		for ( var k in this.controls ) {
			var control = this.controls[k];
			if ( control.isHRelative || control.isVRelative ) {
				var offsetX = 0;
				var offsetY = 0;

				if ( control.isHRelative ) {
					offsetX = ( control.getX() < Application.APP_WIDTH * 0.5 ) ? -deltaX : deltaX;
				}
				if ( control.isVRelative ) {
					offsetY = ( control.getY() < Application.APP_HEIGHT * 0.5 ) ? -deltaY : deltaY;
				}

				this.clip.setOffsetLayer( control.name, offsetX, offsetY );
			}
		}
	}
};

SScreen.prototype.onKeyDown = function( keyCode ) {
	if ( this.popup !== null ) {
		this.popup.onKeyDown( keyCode );
	}
	if ( this.spaceBarEnabled && keyCode === this.skipCode ) {
		this.onPressSpaceBar();
	}
};

SScreen.prototype.onKeyUp = function( keyCode ) {
	if ( this.popup !== null ) {
		this.popup.onKeyUp( keyCode );
	}
};

SScreen.prototype.onActivate = function( activate ) {
	if ( this.popup !== null ) {
		this.popup.onActivate( activate );
	}
};

/**
 * @param {Function} typeClass
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @return {SScreen|Object}
 */
SScreen.prototype.addPopup = function( typeClass, clipName, x, y ) {
	x = x || 0;
	y = y || 0;
	this.dropPopup();
	this.popup = new typeClass( clipName, x, y, this );
	return this.popup;
};

SScreen.prototype.dropPopup = function() {
	if ( this.popup !== null ) {
		this.popup.free();
		this.popup = null;
	}
};

SScreen.prototype.destroyToolTips = function() {
};

SScreen.prototype.createTooltips = function( x, y, clipControl, idString, type ) {
};

SScreen.prototype.free = function() {

	if ( this.m_debugText ) {
		this.canvas.removeChild( this.m_debugText );
		this.m_debugText = null;
	}

	if ( this.blurBG ) {
		this.blurContent.removeChild( this.blurBG );
		this.blurBG.free();
		this.blurBG = null;
	}
	if ( this.blurContent != null ) {
		this.blurContent.free();
		this.blurContent = null;
	}

	var DOMCanvas = document.getElementById( 'MainCanvasDraw' );
	if ( DOMCanvas ) {
		DOMCanvas.focus();
		DOMCanvas.parentElement.focus();
	}

	this.dropPopup();
	this.destroyToolTips();
	this.screenParent = null;

	for ( var k in this.controls ) {
		this.controls[k].free();
		this.controls[k] = null;
	}
	this.controls = null;

	if ( this.m_transitionFx != null ) {
		this.m_transitionFx.free();
		this.m_transitionFx = null;
	}

	if ( this.clip ) {
		if ( this.clip.parent ) {
			this.clip.parent.removeChild( this.clip );
		}
		this.clip.free();
		this.clip = null;
	}
	if ( this.canvas ) {
		this.canvas['hitArea'] = null;
		if ( this.canvas.parent != null ) {
			this.canvas.parent.removeChild( this.canvas );
		}
		this.canvas.free();
		this.canvas = null;
	}

	if ( Application.instance.canvasEvents ) {
		document.getElementById( 'MainCanvasEvents' ).style.cursor = 'default';
	}

	this.m_controlPos = null;
};

/** @param {Array.<string>} controlNames */
SScreen.prototype.initControlPositions = function( controlNames ) {
    for ( var i = 0; i < controlNames.length; i++ ) {
        if ( this.controls[controlNames[i]] ) {
            this.m_controlPos[controlNames[i]] = new Point(
                this.getControl( controlNames[i] ).canvas['position']['x'],
                this.getControl( controlNames[i] ).canvas['position']['y'] );
        }
    }
};

SScreen.prototype.fixGameScale = function() {
    var screenXOffset = Layout.left / Layout.scale;
    var screenYOffset = Layout.top / Layout.scale;
    for ( var key in this.m_controlPos ) {
        var Xsign = this.m_controlPos[key].x < Application.APP_WIDTH * 0.5 ? -1 : 1;
        this.getControl( key ).canvas.position.x = this.m_controlPos[key].x + Xsign * screenXOffset;
        var Ysign = this.m_controlPos[key].y < Application.APP_HEIGHT * 0.5 ? -1 : 1;
        this.getControl( key ).canvas.position.y = this.m_controlPos[key].y + Ysign * screenYOffset;
    }
};

/**
* @param {SScreen|Object} screen
* @param {string} clipName
*/
SScreen.parseControls = function( screen, clipName ) {
	var ui = window['swt_ui'];
	var suffix = ( Application.RIGHT_TO_LEFT ? '_rtl' : '_ltr' );
	/** @type {GuiControl|GuiControlInteractive} */
	var control = null;
	var style = null;
	var tempArray = null;

	for ( var prop in ui ) {
		if ( ui[prop]['gui'] === clipName ) {
			var clipControl = screen.clip.getLayer( ui[prop]['control'] );
			if ( !clipControl ) {
				continue;
			}

			switch ( Common.trim( ui[prop]['type'] ).toUpperCase() ) {
				case GuiControl.TYPE_TEXT:
					control = new GuiText( clipControl, parseInt( ui[prop]['width'], 10 ), parseInt( ui[prop]['height'], 10 ) );
					control.align = Common.trim( ui[prop]['hAlign' + suffix] );
					control.valign = Common.trim( ui[prop]['vAlign'] );

					style = new window['PIXI']['TextStyle']();
					style.fontFamily    = ui[prop]['font' + suffix];
					style.fontSize      = parseInt( ui[prop]['size' + suffix], 10 );
					style.fill          = ui[prop]['color'];
					style.align         = control.align;

					tempArray = ( ui[prop]['border'] ) ? ui[prop]['border'].split( ',' ) : [];
					if ( tempArray.length === 2 ) {
						style.strokeThickness   = parseInt( tempArray[0], 10 );
						style.stroke            = tempArray[1];
					}

					tempArray = ( ui[prop]['shadow'] ) ? ui[prop]['shadow'].split( ',' ) : [];
					if ( tempArray.length === 4 ) {
						style.dropShadow = true;
						style.dropShadowDistance    = parseInt( tempArray[0], 10 );
						style.dropShadowColor       = tempArray[1];
						style.dropShadowAngle       = Common.gradToRadian( parseInt( ui[prop]['shadow'][2], 10 ) );
						style.dropShadowBlur        = parseInt( tempArray[3], 10 );
					}

					tempArray = ( ui[prop]['spacing'] ) ? ui[prop]['spacing'].split( ',' ) : [];
					if ( tempArray.length === 2 ) {
						style.letterSpacing = parseInt( tempArray[0], 10 );
						if ( parseInt( tempArray[1], 10 ) !== 0 ) {
							style.lineHeight = style.fontSize + parseInt( tempArray[1], 10 );
						}
					}

					var ww = ( ui[prop]['wordWrap'] ) ? parseInt( ui[prop]['wordWrap'], 10 ) : 0;
					if ( ww === 1 ) {
						style.wordWrap = true;
						style.wordWrapWidth = control.baseWidth;
					}

					style.padding = 20;

					if ( control.textfield ) {
						control.textfield.style = style;
					}
					else {
						Application.warn( 'SScreen: control text id [' + ui[prop]['control'] + '] was not created' );
					}

					if ( typeof Application.strings[ui[prop]['string']] !== 'undefined' ) {
						control.setTextLocalized( ui[prop]['string'] );
					}
					else {
						Application.warn( 'SScreen: string/style id [' + ui[prop]['string'] + '] no found' );
					}

					break;

				case GuiControl.TYPE_CLIP:
					control = new GuiClip( clipControl );
					control.setClip( ui[prop]['link'] );
					break;

				case GuiControl.TYPE_ON_OFF:
					control = new GuiOnOff( clipControl );
					control.setOnClip( ui[prop]['aniData'][0] );
					control.setOffClip( ui[prop]['aniData'][1] );
					control.gotoState( GuiOnOff.ST_ON );
					control.addPressListener( screen, screen.onUIPress );
					break;

				case GuiControl.TYPE_BUTTON:
					var clipname = ui[prop]['link'];
					clipname = clipname.replace( /_.*$/, '' );
					if ( Application.instance.existsAnimation( clipname + '_press' ) ) {
						control = new GuiButtonState( clipControl, clipname );
					}
					else {
						control = new GuiButton( clipControl );
						control.setClip( clipname );
					}

					control.screenContainer = screen;
					control.addPressListener( screen, screen.onUIPress );
					control.addReleaseListener( screen, screen.onUIRelease );
					break;

				case GuiControl.TYPE_4STATES:
					control = new GuiThumbs4State( clipControl,
												   ui[prop]['link'],
												   ui[prop]['disableLink'],
												   ui[prop]['selectedLink'],
												   ui[prop]['soonLink'] );
					control.addPressListener( screen, screen.onUIPress );
					control.addReleaseListener( screen, screen.onUIRelease );
					break;

				case GuiControl.TYPE_CLIP_MOUSE:
					control = new GuiControlInteractive( clipControl );
					control.setClip( ui[prop]['link'] );
					control.setInteractive( true );
					control.addPressListener( screen, screen.onUIPress );
					control.addReleaseListener( screen, screen.onUIRelease );
					control.addMoveListener( screen, screen.onUIMove );
					break;
				case GuiControl.TYPE_CONTENT:
					control = new GuiContent( clipControl );
					break;
			}

			if ( control ) {
				control.name = Common.trim( ui[prop]['control'] );
				screen.controls[control.name] = control;

				var hRrelative = ( Common.sparseInt( ui[prop]['hRelative'], 0 ) == 1 );
				var vRelative  = ( Common.sparseInt( ui[prop]['vRelative'], 0 ) == 1 );

				if ( hRrelative || vRelative ) {
					var offsetX = 0;
					var offsetY = 0;

					if ( hRrelative ) {
						control.isHRelative = true;

						offsetX = Application.instance.canvas.x;
						if ( control.getX() < Application.APP_WIDTH * 0.5 ) {
							offsetX *= -1;
						}
					}
					if ( vRelative ) {
						control.isVRelative = true;

						offsetY = Application.instance.canvas.y;
						if ( control.getY() < Application.APP_HEIGHT * 0.5 ) {
							offsetY *= -1;
						}
					}

					screen.clip.setOffsetLayer( control.name, offsetX, offsetY );
				}
			}
		}
	}
};

/**
 * @param {number} posX
 * @param {number} posY
 * @param {number=} size
 * @param {string=} color
 */

SScreen.prototype.addDebugText = function( posX, posY, size, color ) {
	color = color || '#FF0000';
	size = size || 18;
	this.m_debugText = new window['PIXI']['Text']( '', { fontSize: size, fontFamily: 'Arial', fill: color } );
	this.canvas.addChild( this.m_debugText );
	this.m_debugText['position']['x'] = posX;
	this.m_debugText['position']['y'] = posY;
};

SScreen.prototype.setDebugText = function( text ) {
	if ( this.m_debugText ) {
		this.m_debugText.text = text;
	}
};


/**
 * Creates a SLoaderScreen.
 * @constructor
 * @param {string} clipName
 * @param {Array.<string>} jsonFiles
 * @param {string} gotoScreen
 * @param {Array.<number>=} soundGroup
 * @param {number=} start
 * @param {number=} end
 * @param {boolean=} preload
 * @param {Array.<string>=} extraAssets
 * @extends SScreen
 */
function SLoaderScreen( clipName, jsonFiles, gotoScreen, soundGroup, start, end, preload, extraAssets ) {
	soundGroup = ( typeof soundGroup === 'undefined' ) ? null : soundGroup;

	SScreen.call( this, clipName );
	/** @type {number} */
	this.m_start = ( typeof start === 'undefined' ) ? 0 : start;
	/** @type {number} */
	this.m_end = ( typeof end === 'undefined' ) ? 100 : end;
	/** @type {Array.<string>} */
	this.m_jsonFiles = jsonFiles;

	SLoaderScreen.instance = this;

	/** @type {Array.<Object>} */
	this.m_soundGroup = null;
	if ( soundGroup != null ) {
		this.m_soundGroup = [];
		/** @type {Object} */
		var group = null;
		for ( var k = soundGroup.length - 1; k >= 0; --k ) {
			group = Application.instance.getSoundGroup( soundGroup[k] );
			if ( group != null ) {
				this.m_soundGroup.push( group );
			}
		}
	}

	/** @type {number} */
	this.m_totalFiles = 0;
	/** @type {number} */
	this.m_loadedfiles = 0;
	/** @type {string} */
	this.m_nextScreen = gotoScreen;
	/** @type {boolean} */
	this.m_isReady = false;
	/** @type {number} */
	this.m_waitTime = 600;
	/** @type {boolean} */
	this.m_isPreload = ( typeof preload === 'undefined' ) ? false : preload;
	/** @type {Array.<string>} */
	this.m_extraAssets = ( typeof extraAssets === 'undefined' ) ? [] : extraAssets;

	/** @type {GuiControl} */
	this.m_btnNext = null;
	if ( this.controls && this.controls['mcGuiBtnNext'] ) {
		this.m_btnNext = this.controls['mcGuiBtnNext'];
		this.m_btnNext.setVisible( false );
	}

	if ( this.m_isPreload ) {
		this.m_waitTime = 0;
	}

	/** @type {number} */
	this.loadedJsonFiles = 0;
	if ( this.m_jsonFiles != null ) {
		var i = 0;
		var jsonLoader = null;

		for ( i = 0; i < this.m_jsonFiles.length; i++ ) {
			if ( !Application.jsonFiles[this.m_jsonFiles[i]] ) {
				jsonLoader = new SJsonLoader( this.m_jsonFiles[i] );
				jsonLoader.addLoadedListener( this, this.onJsonLoaded );
				jsonLoader.addErrorListener( this, this.onJsonError );
				jsonLoader.load();
			}
			else {
				this.onJsonLoaded( Application.jsonFiles[this.m_jsonFiles[i]] );
			}
		}
	}
	else {
		Application.error( 'SLoaderScreen: invalid JSON file' );
		this.m_isReady = true;
	}
}
Application.subclass( SLoaderScreen, SScreen );

/** @type {boolean} */
SLoaderScreen.showButtonNext = true;
/** @type {SLoaderScreen} */
SLoaderScreen.instance = null;

/** @override */
SLoaderScreen.prototype.free = function() {
	this.m_btnNext = null;
	this.m_jsonFiles = null;
	this.m_soundGroup = null;
	SLoaderScreen.instance = null;
	SScreen.prototype.free.call( this );
};

SLoaderScreen.prototype.createTransitionIn = function() {
	if ( !this.m_isPreload ) {
		if ( this.m_start == 0 ) {
			SScreen.prototype.createTransitionIn.call( this );
		}
	}
};

SLoaderScreen.prototype.createTransitionOut = function() {
	if ( !this.m_isPreload ) {
		SScreen.prototype.createTransitionOut.call( this );
	}
};

/** @param {SJsonLoader} loader */
SLoaderScreen.prototype.onJsonLoaded = function( loader ) {
	Application.log( '[JSON loaded] ' + loader.url );
	this.loadedJsonFiles++;
	Application.jsonFiles[loader.url] = loader;
	if ( this.loadedJsonFiles >= this.m_jsonFiles.length ) {
		this.onAllJsonLoaded();
	}
};

/** @param {SJsonLoader} loader */
SLoaderScreen.prototype.onJsonError = function( loader ) {
	Application.error( 'JSON no found ' + loader.url );
};

SLoaderScreen.prototype.onAllJsonLoaded = function() {
	Application.info( '[ALL JSON COMPLETE]' );

	/** @type {Array<SLoader>} */
	var loaders = [];
	var i;
	for ( i = 0; i < this.m_jsonFiles.length; i++ ) {
		this.m_totalFiles += Application.jsonFiles[this.m_jsonFiles[i]].json['meta']['atlas'].length;
		var loader = new SLoader( Application.jsonFiles[this.m_jsonFiles[i]] );
		loader.addLoadListener( this, this.onFileLoaded );
		loaders.push( loader );
	}
	if ( this.m_extraAssets && ( this.m_extraAssets.length > 0 ) ) {
		this.m_totalFiles += this.m_extraAssets.length;

		var tmpJson = new SJsonLoader( '' );
		tmpJson.json  = { 'meta': { 'atlas': this.m_extraAssets } };
		tmpJson.baseUrl = '';
		var loader = new SLoader( tmpJson );
		loader.addLoadListener( this, this.onFileLoaded );
		loaders.push( loader );
	}
	for ( i = 0; i < loaders.length; i++ ) {
		loaders[i].load();
	}

	if ( ( this.m_soundGroup != null ) && ( this.m_soundGroup.length > 0 ) ) {
		for ( i = this.m_soundGroup.length - 1; i >= 0; --i ) {
			if ( !Application.soundGroups[this.m_soundGroup[i]['group']] ) {
				this.m_totalFiles += this.m_soundGroup[i]['sounds'].length;
				Application.instance.soundManager.loadSounds( this.m_soundGroup[i]['sounds'] );
				Application.soundGroups[this.m_soundGroup[i]['group']] = true;
			}
		}
		this.m_soundGroup = null;
	}
}

SLoaderScreen.prototype.onUIPress = function( control ) {
};

SLoaderScreen.prototype.onFileLoaded = function() {
	this.m_loadedfiles++;
	if ( this.m_loadedfiles === this.m_totalFiles ) {
		this.m_isReady = true;
	}
};

SLoaderScreen.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );
	if ( this.m_isReady ) {
		this.m_waitTime -= dt;
		if ( this.m_waitTime < 0 ) {
			this.onLoadComplete();
			this.m_isReady = false;
		}
	}
};

SLoaderScreen.prototype.onLoadComplete = function() {
	if ( this.m_isPreload ) {
		Application.instance.onLoaderReady();
	}
	else {
		if ( Application.instance.isMobileDevice && ( this.m_jsonFiles !== null ) && this.m_end === 100 ) {
			if ( SLoaderScreen.showButtonNext ) {
				SLoaderScreen.showButtonNext = false;
				if ( this.m_btnNext ) {
					this.m_btnNext.setVisible( true );
				}
			}
			else {
				GuiManager.instance.gotoScreen( this.m_nextScreen );
			}
		}
		else {
			GuiManager.instance.gotoScreen( this.m_nextScreen );
		}
	}
};

/**
 * Creates a DebugScreen.
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function DebugScreen( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );
}
Application.subclass( DebugScreen, SScreen );

DebugScreen.prototype.onUIPress = function( elem ) {
	Application.instance.playSound( 'SND_UI_CLICK' );
	this.onResumeScreen();
};
/**
 * Creates a DebugScreenNano.
 * @constructor
 * @extends SScreen
 */
function DebugScreenNano() {
	SScreen.call( this, '', 0, 0 );
	DebugScreenNano.instance = this;
	this.setInteractive( true );
	this.fx = null;
	this.effectName = '';
	this.followCursor = false;
	this.bgImage = null;
	this.canvasBg = Application.instance.addDisplayContainer();
	this.bgClip = null;
	this.canvasClip = Application.instance.addDisplayContainer();
	this.canvasEffect = Application.instance.addDisplayContainer();
	this.canvasGuides = Application.instance.addDisplayContainer();
	this.canvas.addChild( this.canvasBg );
	this.canvas.addChild( this.canvasClip );
	this.canvas.addChild( this.canvasEffect );
	this.canvas.addChild( this.canvasGuides );
	this.max = 0;
	this.centerX = Application.APP_WIDTH * 0.5;
	this.centerY = Application.APP_HEIGHT * 0.5;

	var guides = new SGraphics();
	guides.drawLine( this.centerX - 100, this.centerY, this.centerX + 100, this.centerY, 0x00FF00 );
	guides.drawLine( this.centerX, this.centerY - 100, this.centerX, this.centerY + 100, 0x00FF00 );
	guides.drawRectangle( 10, 10, Application.APP_WIDTH - 20, Application.APP_HEIGHT - 20, 1, 0x00FF00 );
	this.canvasGuides.addChild( guides );

	this.m_debugText = new SPixiText( '', { size: 15, font: '15px Arial', fill: '#00FF00' } );
	this.m_debugText.position.x = 14;
	this.m_debugText.position.y = 12;
	this.canvas.addChild( this.m_debugText );
}
Application.subclass( DebugScreenNano, SScreen );

DebugScreenNano.prototype.onKeyDown = function( keyCode ) {
	switch ( keyCode ) {
		case Common.KEY_F:
			this.followCursor = !this.followCursor;
			if ( !this.followCursor ) {
				this.fx.x = this.centerX;
				this.fx.y = this.centerY;
			}
			break;
	}
};

DebugScreenNano.prototype.onPointerPress = function( event ) {
	if ( this.effectName !== '' ) {
		this.createEffect( this.effectName, event.data.global.x, event.data.global.y );
	}
};

DebugScreenNano.prototype.onPointerMove = function( event ) {
	if ( this.fx && this.followCursor ) {
		this.fx.x = event.data.global.x;
		this.fx.y = event.data.global.y;
	}
};

DebugScreenNano.prototype.setBackground = function( name ) {
	if ( this.bgImage ) {
		this.canvasBg.removeChild( this.bgImage );
		this.bgImage = null;
	}
	this.bgImage = window['PIXI']['Sprite']['fromImage']( name, false, PIXI.SCALE_MODES.DEFAULT );
	this.canvasBg.addChild( this.bgImage );
};

DebugScreenNano.prototype.setClip = function( name ) {
	if ( this.bgClip ) {
		this.canvasClip.removeChild( this.bgClip );
		this.bgClip = null;
	}
	if ( name ) {
		this.bgClip = Application.instance.getClip( name );
		if ( this.bgClip.name !== '__errorSprite' ) {
			this.bgClip.setPosition( this.centerX, this.centerY );
			this.canvasClip.addChild( this.bgClip );
		} else {
			this.bgClip.free();
			this.bgClip = null;
		}
	}
};

DebugScreenNano.prototype.setClipInFront = function( value ) {
	this.canvas.removeChild( this.canvasClip );
	this.canvas.addChildAt( this.canvasClip, value ? 3 : 1 );
};

DebugScreenNano.prototype.createEffect = function( effectName, x, y ) {
	if ( this.fx ) {
		this.fx.free();
		this.fx = null;
	}
	this.max = 0;
	this.effectName = effectName;
	this.fx = new NanoEffect( effectName, x || this.centerX, y || this.centerY, this.canvasEffect );
};

DebugScreenNano.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );
	if ( this.bgClip ) {
		this.bgClip.update( dt );
	}
	if ( this.fx ) {
		this.fx.update( dt );

		var fxObj = window['nano']['effects'][this.effectName];
		for ( var i = 0; i < fxObj.length; i++ ) {
			if ( this.fx.emittersIndex[fxObj[i]['emitter']] ) {
				this.fx.emittersIndex[fxObj[i]['emitter']].ox = fxObj[i]['pos_x'];
				this.fx.emittersIndex[fxObj[i]['emitter']].oy = fxObj[i]['pos_y'];
			}
		}
	}

	if ( this.max < this.canvasEffect.countChildren() ) {
		this.max = this.canvasEffect.countChildren();
	}

	this.m_debugText.text = 'Particles : ' + this.canvasEffect.countChildren() +
							' fps : ' + Application.instance.fps + ( ( Application.RENDER_MODE === Application.RENDER_CANVAS ) ? ' (canvas)' : ' (webgl)' ) +
							' Max : ' + this.max;

};

DebugScreenNano.prototype.addDebugText = function( posX, posY, size, color ) {
	if ( typeof color === 'undefined' ) {
		color = '#FF0000';
	}
	if ( typeof size === 'undefined' ) {
		size = 18;
	}
	this.m_debugText = new SPixiText( '', { fontSize: size, fontFamily: 'Arial', fill: color } );
	this.canvas.addChild( this.m_debugText );
	this.m_debugText['position']['x'] = posX;
	this.m_debugText['position']['y'] = posY;
};

DebugScreenNano.prototype.setDebugText = function( text ) {
	if ( this.m_debugText ) {
		this.m_debugText.text = text;
	}
};

/**
 * Creates a ScreenManager.
 * @constructor
 */
function ScreenManager() {
	/** @type {SScreen} */
	this.currentScreen = null;
	/** @type {string} */
	this.currentScreenName = '';
	/** @type {boolean} */
	this.debugDrawModeOn = true;
}

ScreenManager.prototype.free = function() {
	if ( this.currentScreen ) {
		this.currentScreen.free();
	}
	this.currentScreen = null;
};

/** @param {string} idScreen */
ScreenManager.prototype.gotoScreen = function( idScreen ) {
	if ( this.currentScreen ) {
		this.currentScreen.free();
	}
	this.currentScreen = null;
	this.currentScreenName = idScreen;
	Application.log( 'GO TO SCREEN :: ' + idScreen );
};

/** @param {number} dt */
ScreenManager.prototype.update = function( dt ) {

	if ( dt > Application.MAX_DELTA_TIME ) {
		dt = Application.MAX_DELTA_TIME;
	}
	if ( this.currentScreen ) {
		this.currentScreen.update( dt );
	}
};

/**
 * @public
 */
ScreenManager.prototype.onAppLostFocus = function() {
	if ( this.currentScreen ) {
		this.currentScreen.onAppLostFocus();
	}
};

/**
 * @public
 */
ScreenManager.prototype.onAppGotFocus = function() {
	if ( this.currentScreen ) {
		this.currentScreen.onAppGotFocus();
	}
};

ScreenManager.prototype.onResize = function( event ) {
	if ( this.currentScreen ) {
		this.currentScreen.onResize( event );
	}
};

/** @param {number} keyCode */
ScreenManager.prototype.onKeyDown = function( keyCode ) {
	if ( this.currentScreen ) {
		this.currentScreen.onKeyDown( keyCode );
	}
};

/** @param {number} keyCode */
ScreenManager.prototype.onKeyUp = function( keyCode ) {
	if ( this.currentScreen ) {
		this.currentScreen.onKeyUp( keyCode );
	}
};

/** @param {boolean} activate */
ScreenManager.prototype.onActivate = function( activate ) {
	if ( this.currentScreen ) {
		this.currentScreen.onActivate( activate );
	}
};

ScreenManager.prototype.onTilt = function( event ) {
};

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
ScreenManager.prototype.onDebugDraw = function( ctx ) {
	if ( !this.debugDrawModeOn ) {
		return;
	}

	if ( this.currentScreen !== null ) {
		this.currentScreen.onDebugDraw( ctx );
	}
};

ScreenManager.prototype.toggleDebugDraw = function() {
	this.debugDrawModeOn = !this.debugDrawModeOn;
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 */
function RotateScreen( canvas ) {
	this.canvas = canvas;
	this.file = ( SwitJS.isPhone ) ?
				'media/images/ui_images/gui_rotatescreen_phone.jpg' :
				'media/images/ui_images/gui_rotatescreen.jpg';

	this.bg = new PIXI.Graphics();
	this.bg.beginFill( 0x000000, 1 );
	this.bg.drawRect( 0, 0, 100, 100 );

	this.image = PIXI.Sprite.fromImage( this.file, false, window['PIXI']['settings']['SCALE_MODE'] );
	this.image.pivot.x = 150;
	this.image.pivot.y = 150;

	this.canvas['interactive'] = true;
	this.visible = false;
	this.animate = false;
}

RotateScreen.prototype.show = function() {
	this.canvas.addChild( this.bg );
	this.canvas.addChild( this.image );
	var sc = 1 / Layout.scale;
	sc = sc < 1.2 ? 1.2 : sc;
	Common.tween( { parent: this, clip: this.image, scale: 0.2, onComplete:this.onCompleteAnimation },
				  { scale: sc },
				   1500,
				   true,
				   150,
				   TweenEasing.ElasticOut );

	this.visible = true;
	this.animate = true;
};

RotateScreen.prototype.onCompleteAnimation = function( tw ) {
	this.animate = true;
};

RotateScreen.prototype.hide = function() {
	this.canvas.removeChild( this.bg );
	this.canvas.removeChild( this.image );
	this.visible = false;
};

RotateScreen.prototype.onResize = function()  {
	if ( Application.WIDE_SCREEN ) {
		this.image.position.x = ( window.innerWidth * 0.5 ) / Layout.scale;
		this.image.position.y = ( window.innerHeight * 0.5 ) / Layout.scale;
		this.bg.width = window.innerWidth;
		this.bg.height = window.innerHeight;
		this.bg.scale.x /= Layout.scale;
		this.bg.scale.y /= Layout.scale;
	}
	else {
		this.image.position.x = Application.APP_WIDTH * 0.5;
		this.image.position.y = Application.APP_HEIGHT * 0.5;
		this.bg.width = Application.APP_WIDTH;
		this.bg.height = Application.APP_HEIGHT;
	}
};

/**
 * Creates a Vector.
 * @constructor
 * @struct
 * @param {number=} x The x component of this vector (or 0.0 if left out)
 * @param {number=} y The y component of this vector (or 0.0 if left out)
 */
function Vector2D( x, y ) {
	/**
	 * The x component of this point
	 * @type {number}
	 */
	this.x = ( typeof x === 'undefined' ) ? 0.0 : x;
	/**
	 * The y component of this point
	 * @type {number}
	 */
	this.y = ( typeof y === 'undefined' ) ? 0.0 : y;
}

/**
 * @param {number} x
 * @param {number} y
 */
Vector2D.prototype.set = function( x, y ) {
	this.x = x;
	this.y = y;
};

/**
 * @param {number} magnitude
 * @param {number} angle
 */
Vector2D.prototype.setVector = function( magnitude, angle ) {
	this.x = magnitude * Math.cos( angle );
	this.y = magnitude * Math.sin( angle );
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
Vector2D.prototype.distanceTo = function( x, y ) {
	return Math.sqrt( ( x - this.x ) * ( x - this.x ) + ( y - this.y ) * ( y - this.y ) );
};

/**
 * @param {Vector2D} v
 * @return {number}
 */
Vector2D.prototype.distance = function( v ) {
	return Math.sqrt( ( v.x - this.x ) * ( v.x - this.x ) + ( v.y - this.y ) * ( v.y - this.y ) );
};

/** @return {Vector2D} */
Vector2D.prototype.clone = function() {
	return new Vector2D( this.x, this.y );
};

/**
 * @param {Vector2D} b
 * @return {Vector2D}
 */
Vector2D.prototype.plus = function( b ) {
	return new Vector2D( this.x + b.x, this.y + b.y );
};

/**
 * @param {Vector2D} b
 * @return {Vector2D}
 */
Vector2D.prototype.minus = function( b ) {
	return new Vector2D( this.x - b.x, this.y - b.y );
};

/**
 * @param {Vector2D} v2
 * @return {Vector2D}
 */
Vector2D.prototype.middle = function( v2 ) {
	return new Vector2D( ( this.x + v2.x ) * 0.5, ( this.y + v2.y ) * 0.5 );
};

/** @return {Vector2D} */
Vector2D.prototype.orthogonal = function() {
	return new Vector2D( -this.y, this.x );
};

/** @param {number} angle */
Vector2D.prototype.rotate = function( angle ) {
	var cos = Math.cos( angle );
	var sin = Math.sin( angle );
	var tx = this.x * cos - this.y * sin;
	this.y = this.y * cos + this.x * sin;
	this.x = tx;
};

/** @return {Vector2D} */
Vector2D.prototype.udir = function() {
	/** @type {Vector2D} */
	var ret = this.clone();
	ret.normalize();
	return ret;
};

/**
 * @param {Vector2D} b
 * @return {Vector2D}
 */
Vector2D.prototype.projectionOn = function( b ) {
	/** @type {number} */
	var squareLength = b.dot( b );
	if ( squareLength === 0 ) {
		return this.clone();
	}
	/** @type {Vector2D} */
	var ret = b.clone();
	ret.scale( this.dot( b ) / squareLength );
	return ret;
};

/**
 * @param {Vector2D} b
 * @return {number}
 */
Vector2D.prototype.dot = function( b ) {
	return ( ( this.x * b.x ) + ( this.y * b.y ) );
};

/** @return {number} */
Vector2D.prototype.length = function() {
	return Math.sqrt( ( this.x * this.x ) + ( this.y * this.y ) );
};

/** @return {number} */
Vector2D.prototype.squaredLength = function() {
	return ( this.x * this.x ) + ( this.y * this.y );
};

/** @param {Vector2D} b */
Vector2D.prototype.copy = function( b ) {
	this.x = b.x;
	this.y = b.y;
};

/**
 * @param {number} factor
 */
Vector2D.prototype.scale = function( factor ) {
	this.x *= factor;
	this.y *= factor;
};

Vector2D.prototype.normalize = function() {
	var vectorLength = this.length();
	if ( vectorLength > 0 ) {
		this.x /= vectorLength;
		this.y /= vectorLength;
	}
	else {
		Application.warn( '[WARN]: Vector2D.normalize: called on a zero-length vector.' );
	}
};

/** @param {number} thickness */
Vector2D.prototype.normalize2 = function( thickness ) {
	var vectorLength = this.length();
	if ( vectorLength > 0 ) {
		this.x /= vectorLength;
		this.y /= vectorLength;

		if ( thickness != 1 ) { this.scale( thickness ); }
	}
	else {
		Application.warn( '[WARN]: Vector2D.normalize: called on a zero-length vector.' );
	}
};

/**
 * @param {number} len
 */
Vector2D.prototype.stretch = function( len ) {
	var vectorLength = this.length();
	if ( vectorLength > 0 ) {
		this.x *= len / vectorLength;
		this.y *= len / vectorLength;
	}
	else {
		Application.warn( '[WARN]: Vector2D.stretch: called on a zero-length vector.' );
	}
};

Vector2D.prototype.silentNormalize = function() {
	var vectorLength = this.length();
	if ( vectorLength > 0 ) {
		this.x /= vectorLength;
		this.y /= vectorLength;
	}
};

/**
 * Add b to this vector.
 * @param {Vector2D} b
 */
Vector2D.prototype.add = function( b ) {
	this.x += b.x;
	this.y += b.y;
};

/**
 * Add b to this vector.
 * @param {Vector2D} b
 */
Vector2D.prototype.subtract = function( b ) {
	this.x -= b.x;
	this.y -= b.y;
};

/**
 * Cartesian product.
 * @return {number}
 */
Vector2D.prototype.product = function( a ) {
	return ( this.y * a.x - this.x * a.y );
};

/**
 * Return the angle between the x-axis and the vector (in radians).
 * @return {number}
 */
Vector2D.prototype.angle = function() {
	return Math.atan2( this.y, this.x );
};

/** @return {boolean} */
Vector2D.prototype.isZero = function() {
	return ( ( this.y === 0 ) && ( this.x === 0 ) );
};

/**
 * @return {string}
 */
Vector2D.prototype.toString = function() {
	return 'V2D x:' + this.x + ' y:' + this.y;
};

/**
 * @constructor
 *
 * @param {SDisplayObjectContainer} canvas
 * @extends DebugGame
 */
function SGame( canvas ) {
	/** @type {SDisplayObjectContainer} */
	this.canvas = canvas;
	/** @type {SScreen} */
	this.m_hud = null;
	this.world = null;
	/** @type {number} */
	this.lives = 0;
	/** @type {number} */
	this.score = 0;
	/** @type {boolean} */
	this.isAwaitReset = false;
	/** @type {boolean} */
	this.isAwaitingDelete = false;
	/** @type {boolean} */
	this.showDebugCollision = false;
	/** @type {boolean} */
	this.playerWin = false;

	SGame.instance = this;

	this.init();
	DebugGame.call( this );
}
Application.subclass( SGame, DebugGame );

/** @type {SGame} */
SGame.instance = null;

/** @override */
SGame.prototype.free = function() {
	if ( this.world !== null ) {
		this.world.free();
		this.world = null;
	}
	if ( this.m_hud !== null ) {
		this.m_hud.free();
		this.m_hud = null;
	}

	this.canvas = null;
	SGame.instance = null;

	DebugGame.prototype.free.call( this );
};

SGame.prototype.init = function() {
};

/**
 * @public
 */
SGame.prototype.onAppLostFocus = function() {
};

/**
 * @public
 */
SGame.prototype.onAppGotFocus = function() {
};

SGame.prototype.fixGameScale = function() {
	if ( this.world ) {
		this.world.scaleWorld();
	}
};

/** @return {SScreen} */
SGame.prototype.hud = function() {
	return this.m_hud;
};

/** @param {number} dt */
SGame.prototype.update = function( dt ) {
	this.onDebugUpdate( dt );

	if ( this.m_hud !== null ) {
		this.m_hud.update( dt );
	}
};

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
SGame.prototype.onDebugDraw = function( ctx ) {
};

SGame.prototype.toggleDebugCollision = function() {
	this.showDebugCollision = !this.showDebugCollision;
};

/** @param {boolean} activate */
SGame.prototype.onActivate = function( activate ) {
};

/** @param {number} keyCode */
SGame.prototype.onKeyDown = function( keyCode ) {
	if ( Application.sandbox ) this.onDebugKeyDown( keyCode );
};

/** @param {number} keyCode */
SGame.prototype.onKeyUp = function( keyCode ) {
	if ( Application.sandbox ) this.onDebugKeyUp( keyCode );
};

/**
 * @param {Object} e
 * @param {Object=} originalEvent
 */
SGame.prototype.onPointerPress = function( e, originalEvent ) {
	if ( Application.sandbox ) this.onDebugPointerPress( e );
};

/**
 * @param {Object} e
 * @param {Object=} originalEvent
 */
SGame.prototype.onPointerRelease = function( e, originalEvent ) {
	if ( Application.sandbox ) this.onDebugPointerRelease( e );
};

/** @param {Object} e */
SGame.prototype.onPointerPressAndRelease = function( e ) {
	if ( Application.sandbox ) this.onDebugPointerPressAndRelease( e );
};

/** @param {Object} e */
SGame.prototype.onPointerOver = function( e ) {
	if ( Application.sandbox ) this.onDebugPointerOver( e );
};

/**
 * @param {Object} e
 * @param {Object=} originalEvent
 */
SGame.prototype.onPointerMove = function( e, originalEvent ) {
	if ( Application.sandbox ) this.onDebugPointerMove( e );
};

/**
 * @constructor
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {SDisplayObjectContainer | Animation | SSprite} canvas
 * @param {number=} loops ( default "1", if is bucle infinite setAttribute "0"  )
 * @param {Object=} params
 */
function SEffect( name, x, y, canvas, loops, params ) {
	loops = ( typeof loops !== 'undefined' ) ? loops : 1;

	/** @type {string} */
	this.name = name;
	/** @type {SDisplayObjectContainer | Animation | SSprite} */
	this.canvas = canvas;
	/** @type {SDisplayObjectContainer | Animation | SSprite} */
	this.clip = null;
	/** @type {Object} */
	this.params = params || {};
	/** @type {boolean} */
	this.isAwaitingDelete = false;
	/** @type {number} */
	this.type = 0;
	/** @type {number} */
	this.loops = loops;
	/** @type {number} */
	this.m_repeat = 0;
	/** @type {boolean} */
	this.deleteAtTheEnd = true;

	this.m_endCompleteCallback = null;
	this.m_endCompleteCaller = null;
}

SEffect.prototype.create = function() {
};

SEffect.TYPE_ANIMO = 1;
SEffect.TYPE_NANO = 2;
SEffect.TYPE_GUI = 3;

SEffect.prototype.fix = function( values ) {
	this.clip.position.x = values.x;
	this.clip.position.y = values.y;
};

SEffect.prototype.free = function() {
	if ( this.clip ) {
		if ( this.clip.parent ) {
			this.clip.parent.removeChild( this.clip );
		}
		this.clip.free();
		this.clip = null;
	}

	this.canvas = null;
	this.m_endCompleteCallback = null;
	this.m_endCompleteCaller = null;
	this.params = null;
};

SEffect.prototype.onComplete = function( caller, callback ) {
	this.m_endCompleteCaller = caller || null;
	this.m_endCompleteCallback = callback || null;
};

SEffect.prototype.onEndLoop = function() {
	this.m_repeat++;
	if ( this.loops !== 0 ) {
		if ( this.m_repeat >= this.loops ) {
			if ( ( this.m_endCompleteCallback !== null )
					&& ( this.m_endCompleteCaller !== null ) ) {
				this.m_endCompleteCallback.call( this.m_endCompleteCaller, this );
			}
			if ( this.deleteAtTheEnd ) {
				this.isAwaitingDelete = true;
			}
			else {
				this.clip.gotoAndStop( this.clip.totalFrames - 1 );
			}
		}
	}
};

SEffect.prototype.update = function( dt ) {
};

/**
 * @constructor
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {SDisplayObjectContainer|SSprite} canvas
 * @param {number=} loops ( default "1", if is bucle infinite setAttribute "0"  )
 * @param {Object=} params
 * @extends SEffect
 */
function SEffectAnimo( name, x, y, canvas, loops, params ) {
	SEffect.call( this, name, x, y, canvas, loops, params );
	this.clip = Application.instance.getAnimation( name );
	this.clip.position.x = x;
	this.clip.position.y = y;
	this.canvas.addChild( this.clip );
	this.clip.onEndAnimation( this, this.onEndLoop );
	this.type = SEffect.TYPE_ANIMO;
}
Application.subclass( SEffectAnimo, SEffect );

SEffectAnimo.prototype.update = function( dt ) {
	this.clip.update( dt );
};

/**
 * @constructor
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {SDisplayObjectContainer | Animation | SSprite} canvas
 * @param {Object=} params
 * @extends NanoEffect
 */
function SEffectNano( name, x, y, canvas, params ) {
	NanoEffect.call( this, name, x, y, canvas, params );
	this.type = SEffect.TYPE_NANO;
	this.m_endCompleteCallback = null;
	this.m_endCompleteCaller = null;
}
Application.subclass( SEffectNano, NanoEffect );

SEffectNano.prototype.fix = function( values ) {
	this.x = values.x;
	this.y = values.y;
	for ( var i = 0; i < this.emitters.length; i++ ) {
		for ( var j = 0; j < this.emitters[i].particles.length; j++ ) {
			this.emitters[i].particles[j].ox = values.x + this.emitters[i].ox;
			this.emitters[i].particles[j].oy = values.y + this.emitters[i].oy;
		}
	}
};

SEffectNano.prototype.onComplete = function( caller, callback ) {
	this.m_endCompleteCaller = caller || null;
	this.m_endCompleteCallback = callback || null;
};

SEffectNano.prototype.update = function( dt ) {
	NanoEffect.prototype.update.call( this, dt );
	if ( this.isAwaitingDelete ) {
		if ( this.m_endCompleteCallback !== null &&  this.m_endCompleteCaller !== null ) {
			this.m_endCompleteCallback.call( this.m_endCompleteCaller, this );
		}
	}
};

SEffectNano.prototype.free = function() {
	NanoEffect.prototype.free.call( this );
	this.m_endCompleteCallback = null;
	this.m_endCompleteCaller = null;
};

/**
 * @constructor
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {SDisplayObjectContainer|SSprite} canvas
 * @param {number=} loops ( default "1", if is bucle infinite setAttribute "0"  )
 * @param {Object=} params
 * @extends SEffect
 */
function SEffectGui( name, x, y, canvas, loops, params ) {
	SEffect.call( this, name, x, y, canvas, loops, params );
	this.clip = Application.instance.getClip( name );
	this.canvas.addChild( this.clip );
	this.clip.position.x = x;
	this.clip.position.y = y;
	this.clip.onEndAnimation( this, this.onEndLoop );
	this.type = SEffect.TYPE_GUI;

	/** @type {Object.<string, GuiControl>} */
	this.controls = {};
	this.lastInteractionControl = '';
	SScreen.parseControls( this, name );
}
Application.subclass( SEffectGui, SEffect );

SEffectGui.prototype.update = function( dt ) {
	if ( this.clip ) {
		this.clip.update( dt );
	}
};

/*
SEffectGui.prototype.parseControls = function( clipName ) {
	var ui = window['config']['ui'];
	var suffix = ( Application.RIGHT_TO_LEFT ? '_rtl' : '_ltr' );
	var control = null;
	var fontName = '';
	for ( var prop in ui ) {
		if ( ui[prop]['gui'] === clipName ) {
			var clipControl = this.clip.getInstance( ui[prop]['control'] );
			if ( !clipControl ) {
				continue;
			}

			fontName = ui[prop]['font' + suffix];
			switch ( Common.trim( ui[prop]['type'] ).toUpperCase() ) {
				case GuiControl.TYPE_TEXT:
					control = new GuiText( clipControl );
					control.setClip( ui[prop]['link'] );

					control.setStyle( {
						size: parseInt( ui[prop]['size' + suffix], 0 ),
						font: ui[prop]['size' + suffix] + 'px ' + fontName,
						fill: ui[prop]['color'],
						strokeThickness: parseInt( ui[prop]['border'], 10 ),
						stroke: ui[prop]['borderColor'],
						align: ( ui[prop]['align' + suffix] ) ? parseInt( Common.trim( ui[prop]['align' + suffix] ), 10 ) : GuiText.ALIGN_CENTER,
						valign: ( ui[prop]['valign'] ) ? parseInt( Common.trim( ui[prop]['valign'] ), 10 ) : GuiText.ALIGN_V_TOP,
						wordWrap: ( ui[prop]['wordWrap'] ) ? ( parseInt( Common.trim( ui[prop]['wordWrap'] ), 10 ) === 1 ) : false,
						wordWrapWidth: control.baseWidth,
					} );

					if ( typeof Application.strings[ui[prop]['string']] !== 'undefined' ) {
						control.setTextLocalized( ui[prop]['string'] );
					}
					else {
						Application.warn( 'SEffectGui string id [' + ui[prop]['string'] + '] no found' );
					}
					break;
				case GuiControl.TYPE_CLIP:
					control = new GuiClip( clipControl );
					control.setClip( ui[prop]['link'] );
					break;

				case GuiControl.TYPE_BUTTON:
					control = new GuiButton( clipControl );
					control.setClip( ui[prop]['link'] );
					control.addPressListener( this, this.onUIPress );
					break;
				case GuiControl.TYPE_CLIP_MOUSE:
					control = new GuiClip( clipControl );
					control.setClip( ui[prop]['link'] );
					control.addPressListener( this, this.onUIPress );
					break;
				case GuiControl.TYPE_FX:
					control = new GuiFx( clipControl );
					control.setFx( ui[prop]['link'] );
					break;
				case GuiControl.TYPE_CONTENT:
					control = new GuiContent( clipControl );
					break;
			}
			control.name = Common.trim( ui[prop]['control'] );
			this.controls[ui[prop]['control']] = control;
		}
	}
};
*/
/**
 * @param {string} id
 * @return {GuiControl}
 */
SEffectGui.prototype.getControl = function( id ) {
	if ( typeof this.controls[id] === 'undefined' ) {
		Application.error( 'Control [' + id + '] no found' );
	}
	return this.controls[id];
};

SEffectGui.prototype.onUIPress = function( control ) {
	this.onResumeScreen();
	this.lastInteractionControl = control.name;
};

SEffectGui.prototype.onStopScreen = function() {
	if ( this.clip ) {
		this.clip.stop();
	}
};

SEffectGui.prototype.onResumeScreen = function() {
	if ( this.clip ) {
		this.clip.resume();
	}
};

SEffectGui.prototype.onFinishScreen = function() {
};

SEffectGui.prototype.onKeyDown = function( keyCode ) {
	this.onResumeScreen();
};

SEffectGui.prototype.free = function() {
	for ( var k in this.controls ) {
		this.controls[k].free();
		this.controls[k] = null;
	}
	this.controls = null;

	if ( this.clip &&
		 this.clip.hitArea ) {
		this.clip.hitArea = null;
	}

	SEffect.prototype.free.call( this );
};

/**
 * @constructor
 */
function SEffectManager() {
	this.effects = [];
	this.m_len = 0;
	this.m_k = 0;
}

/**
 * Clear all Effects
*/
SEffectManager.prototype.clear = function() {
	for ( var k = 0; k < this.effects.length; k++ ) {
		this.effects[k].isAwaitingDelete = true;
	}
};

/**
 * Clear all effects of the same name
 * @param {string} name
 */
SEffectManager.prototype.removeEffect = function( name ) {
	for ( var k = 0; k < this.effects.length; k++ ) {
		if ( this.effects[k].name === name ) {
			this.effects[k].isAwaitingDelete = true;
		}
	}
};

/**
 * @param {SEffect | SEffectAnimo | SEffectNano | SEffectGui} effect
*/
SEffectManager.prototype.add = function( effect ) {
	this.effects.push( effect )
};

/**
 * Create autodetect Effect
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {SDisplayObjectContainer | Animation | SSprite} canvas
 * @param {number=} loops ( default "1", if is bucle infinite setAttribute "0"  )
 * @param {Object=} params
 */
SEffectManager.prototype.createEffect = function( name, x, y, canvas, loops, params ) {

	if ( window['nano']['effects'][name] ) {
		return ( this.createEffectNano( name, x, y, canvas, params ) );
	}

	/** @type {Array.<Object>} */
	var ui = window['swt_ui'];
	for ( var i = ui.length - 1; i >= 0; --i ) {
		if ( ui[i]['gui'] === name ) {
			return this.createEffectGui( name, x, y, canvas, loops, params );
		}
	}

	return this.createEffectAnimo( name, x, y, canvas, loops, params );
};

/**
 * Animation Fx
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {SDisplayObjectContainer | Animation | SSprite} canvas
 * @param {number=} loops ( default "1", if is bucle infinite setAttribute "0"  )
 * @param {Object=} params
 */
SEffectManager.prototype.createEffectAnimo = function( name, x, y, canvas, loops, params ) {
	var effect = new SEffectAnimo( name, x, y, canvas, loops, params );
	this.add( effect );
	return effect;
};

/**
 * Nano Fx
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {SDisplayObjectContainer | Animation | SSprite} canvas
 * @param {Object=} params
 */
SEffectManager.prototype.createEffectNano = function( name, x, y, canvas, params ) {
	var effect = new SEffectNano( name, x, y, canvas, params );
	this.add( effect );
	return effect;
};

/**
 * Gui Fx
 * @param {string} name
 * @param {number} x
 * @param {number} y
 * @param {SDisplayObjectContainer | Animation | SSprite} canvas
 * @param {number=} loops ( default "1", if is bucle infinite setAttribute "0"  )
 * @param {Object=} params
 */
SEffectManager.prototype.createEffectGui = function( name, x, y, canvas, loops, params ) {
	var effect = new SEffectGui( name, x, y, canvas, loops, params );
	this.add( effect );
	return effect;
};

/**
 * @param {number} dt
 */
SEffectManager.prototype.update = function( dt ) {
	this.m_len = this.effects.length;
	for ( this.m_k = 0; this.m_k < this.m_len; this.m_k++ ) {
		if ( this.effects[this.m_k].isAwaitingDelete ) {
			this.effects[this.m_k].free();
			this.effects[this.m_k] = null;
			this.effects.splice( this.m_k, 1 );
			this.m_k--;
			this.m_len--;
		}
		else {
			this.effects[this.m_k].update( dt );
		}
	}
};

/**
* @constructor
* @extends PIXI.Filter
*/
function SFilter( vertexSrc, fragmentSrc, uniforms ) {

	this.timeElapsed = 0;
	this.timeFactor = 1;


	PIXI.Filter.call( this,
					  vertexSrc || SFilter.defaultVertexSrc(),
					  fragmentSrc || SFilter.defaultFragmentSrc(),
					  uniforms );


	if ( Application.RENDER_MODE !== Application.RENDER_WEBGL ) {
		Application.warn( '[SFilter] >> Shaders no active by no use WEBGL Render' );
	}
}
Application.subclass( SFilter, PIXI.Filter );

SFilter.prototype.update = function( dt ) {
	this.timeElapsed += dt * this.timeFactor;
	if ( this.uniforms ) {
		this.uniforms.time = this.timeElapsed;
	}
}

SFilter.prototype.setResolution = function( w, h ) {
	if ( this.uniforms && this.uniforms.resolution )
	{
		this.uniforms.resolution.x = w;
		this.uniforms.resolution.y = h;
	}
}

SFilter.prototype.free = function() {
	PIXI.Filter.prototype.free.call( this );
}
SFilter.defaultVertexSrc = function() {
	return [
		'attribute vec2 aVertexPosition;',
		'attribute vec2 aTextureCoord;',

		'uniform mat3 projectionMatrix;',
		'uniform mat3 filterMatrix;',

		'varying vec2 vTextureCoord;',
		'varying vec2 vFilterCoord;',

		'void main(void){',
		'   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
		'   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;',
		'   vTextureCoord = aTextureCoord ;',
		'}',
	].join( '\n' );
}
SFilter.defaultFragmentSrc = function() {
	return [
		'varying vec2 vTextureCoord;',
		'varying vec2 vFilterCoord;',

		'uniform sampler2D uSampler;',
		'uniform sampler2D filterSampler;',

		'void main(void){',
		'   vec4 masky = texture2D(filterSampler, vFilterCoord);',
		'   vec4 sample = texture2D(uSampler, vTextureCoord);',
		'   vec4 color;',
		'   if(mod(vFilterCoord.x, 1.0) > 0.5)',
		'   {',
		'     color = vec4(1.0, 0.0, 0.0, 1.0);',
		'   }',
		'   else',
		'   {',
		'     color = vec4(0.0, 1.0, 0.0, 1.0);',
		'   }',
		'   gl_FragColor = mix(sample, masky, 0.5);',
		'   gl_FragColor *= sample.a;',
		'}',
	].join( '\n' );
}
/**
 * @constructor
 */
function ControlGroup() {
	this.controls = [];
	this.controlSelected = null;
}

ControlGroup.prototype.addControl = function( control ) {
	this.controls.push( control );
};

ControlGroup.prototype.onSelectControl = function( controlName ) {
	for ( var k = 0; k < this.controls.length; k++ ) {
		if ( this.controls[k].name === controlName ) {
			this.controls[k].gotoState( GuiControl.ST_SELECTED );
			this.controlSelected = this.controls[k];
		}
		else {
			this.controls[k].gotoState( GuiControl.ST_ENABLE );
		}
	}
}

ControlGroup.prototype.onSelectDisabled = function( controlName ) {
	for ( var k = 0; k < this.controls.length; k++ ) {
		if ( this.controls[k].name === controlName ) {
			this.controls[k].gotoState( GuiControl.ST_DISABLE );
			this.controlSelected = this.controls[k];
		}
		else {
			this.controls[k].gotoState( GuiControl.ST_ENABLE );
		}
	}
}

ControlGroup.prototype.free = function() {
	this.controls = null;
	this.controlSelected = null;
};

/**
 * @constructor
 * @param {SSprite|SDisplayObjectContainer} display
 */
function GuiControl( display ) {
	if ( display && display.children.length === 0 ) {
		display.texture._frame.width = 0;
		display.texture._frame.height = 0;
	}

	/** @type {SSprite|SDisplayObjectContainer} */
	this.canvas = display;
	/** @type {Animation} */
	this.clip = null;
	/** @type {string} */
	this.name = '';
	/** @type {string} */
	this.clipName = '';
	/** @type {number} */
	this.state = 1;
	/** @type {boolean} */
	this.enabled = true;
	/** @type {SScreen|Object} */
	this.screenContainer = null;
	/** @type {boolean} */
	this.isVisible = true;

	/** @type {boolean} */
	this.isHRelative = false;
	/** @type {boolean} */
	this.isVRelative = false;
}

GuiControl.prototype.free = function() {
	while ( this.canvas.children.length > 0 ) {
		this.canvas['removeChild']( this.canvas['getChildAt']( 0 ) );
	}
	this.screenContainer = null;

	if ( this.clip != null ) {
		this.clip.free();
		this.clip = null;
	}

	this.canvas = null;
};

/** @return {number} */
GuiControl.prototype.getX = function() {
	return this.canvas.x;
}

/** @return {number} */
GuiControl.prototype.getY = function() {
	return this.canvas.y;
}

/** @param {boolean} value */
GuiControl.prototype.setVisible = function( value ) {
	this.isVisible = value;

	this.canvas.visible = this.isVisible;
	if ( this.clip ) {
		this.clip.visible = this.isVisible;
	}
};

/** @param {boolean} enabled */
GuiControl.prototype.setEnabled = function( enabled ) {
	this.enabled = enabled;
};

/** @param {string} clipname */
GuiControl.prototype.setClip = function( clipname ) {
	if ( this.clip != null ) {
		if ( this.clip.parent != null ) {
			this.clip.parent.removeChild( this.clip );
		}
		this.clip.free();
	}

	this.clipName = clipname;
	while ( this.canvas.children.length > 0 ) {
		Application.warn( 'This should not happen !!' );
		this.canvas['removeChild']( this.canvas['getChildAt']( 0 ) );
	}

	this.clip = Application.instance.getAnimation( this.clipName );
	this.clip.visible = this.isVisible;
	this.canvas['addChild']( this.clip );
};

GuiControl.prototype.onResetState = function() {
};

/** @param {number} st */
GuiControl.prototype.gotoState = function( st ) {
	this.state = st;
};

/** @param {number} dt */
GuiControl.prototype.update = function( dt ) {
};

/** @const {string} */GuiControl.TYPE_TEXT       = "TEXT";
/** @const {string} */GuiControl.TYPE_CLIP       = "CLIP";
/** @const {string} */GuiControl.TYPE_ON_OFF     = "ON_OFF";
/** @const {string} */GuiControl.TYPE_BUTTON     = "BUTTON";
/** @const {string} */GuiControl.TYPE_4STATES    = "4STATES";
/** @const {string} */GuiControl.TYPE_CLIP_MOUSE = "CLIPMOUSE";
/** @const {string} */GuiControl.TYPE_CONTENT    = "CONTENT";
/** @const {string} */GuiControl.TYPE_ANI_BUTTON = "ANI_BUTTON";

/** @const {number} */GuiControl.ST_ENABLE       = 1;
/** @const {number} */GuiControl.ST_DISABLE      = 2;
/** @const {number} */GuiControl.ST_SELECTED     = 3;
/** @const {number} */GuiControl.ST_COMMING_SOON = 4;
/** @const {number} */GuiControl.ST_RELEASE      = 5;
/** @const {number} */GuiControl.ST_OVER         = 6;
/** @const {number} */GuiControl.ST_OUT          = 7;

/** @const {number} */GuiControl.I_OX            = 1;
/** @const {number} */GuiControl.I_OY            = 2;
/** @const {number} */GuiControl.I_SCALE_X       = 3;
/** @const {number} */GuiControl.I_SCALE_Y       = 4;
/** @const {number} */GuiControl.I_SCALE         = 5;
/** @const {number} */GuiControl.I_ROTATION      = 6;
/** @const {number} */GuiControl.I_ALPHA         = 7;

/**
 * @constructor
 * @param {Animation|SSprite|SDisplayObjectContainer} display
 * @extends GuiControl
 */
function GuiControlInteractive( display ) {
	GuiControl.call( this, display );

	/** @type {boolean} */
	this.m_interactive = false;
	/** @type {SScreen} */
	this._pressCaller = null;
	/** @type {Function} */
	this._pressCallback = null;
	/** @type {SScreen} */
	this._releaseCaller = null;
	/** @type {Function} */
	this._releaseCallback = null;
	/** @type {SScreen} */
	this._pressAndReleaseCaller = null;
	/** @type {Function} */
	this._pressAndReleaseCallback = null;
	/** @type {SScreen} */
	this._moveCaller = null;
	/** @type {Function} */
	this._moveCallback = null;
	/** @type {GuiText} */
	this.containerText = null;
	/** @type {boolean} */
	this.onPressActive = false;

	/** @type {string} */
	this.enableLink = '';
	/** @type {string} */
	this.disableLink = '';
	/** @type {string} */
	this.selectedLink = '';
	/** @type {string} */
	this.releaseLink = '';
	/** @type {string} */
	this.overLink = '';
	/** @type {string} */
	this.outLink = '';
	/** @type {string} */
	this.commingSoonLink = '';
	/** @type {boolean} */
	this.onPressButton = false;

	/** @type {GuiControl} */
	this._overCaller = null;
	/** @type {Function} */
	this._overCallback = null;
	/** @type {GuiControl} */
	this._outCaller = null;
	/** @type {Function} */
	this._outCallback = null;
	/** @type {boolean} */
	this.buttonMode = false;
}
Application.subclass( GuiControlInteractive, GuiControl );

/** @override */
GuiControlInteractive.prototype.free = function() {
	this.setInteractive( false );
	this._overCaller = null;
	this._overCallback = null;
	this._outCallback = null;
	this._outCaller = null;
	this._pressCaller = null;
	this._pressCallback = null;
	this._releaseCaller = null;
	this._releaseCallback = null;
	this._pressAndReleaseCaller = null;
	this._pressAndReleaseCallback = null;
	this._moveCaller = null;
	this._moveCallback = null;
	this.containerText = null;
	this.screenContainer = null;

	GuiControl.prototype.free.call( this );
};

/** @param {boolean} value */
GuiControlInteractive.prototype.setInteractive = function( value ) {
	this.m_interactive = value;
	if ( this.clip ) {
		this.clip['interactive'] = this.m_interactive;
		if ( value ) {
			this.clip['self'] = this;
			this.clip['mousedown']        = function( e ) { this.self.onPress( e ); };
			this.clip['touchstart']        = function( e ) { this.self.onPress( e ); };
			this.clip['mouseup']           = function( e ) { this.self.onRelease( e ); };
			this.clip['mouseupoutside']    = function( e ) { this.self.onRelease( e ); };
			this.clip['touchend']          = function( e ) { this.self.onRelease( e ); };
			this.clip['touchendoutside']   = function( e ) { this.self.onRelease( e ); };
			this.clip['mousemove']         = function( e ) { this.self.onMove( e ) };
			this.clip['touchmove']         = function( e ) { this.self.onMove( e ) };
			this.clip['mouseover']         = function( e ) { this.self.onOver( e ) };
			this.clip['mouseout']          = function( e ) { this.self.onOut( e ) };
		}
		else {
			this.clip['self'] = null;
			this.clip['mousedown'] = null;
			this.clip['touchstart'] = null;
			this.clip['mouseup'] = null;
			this.clip['mouseupoutside'] = null;
			this.clip['touchend'] = null;
			this.clip['touchendoutside'] = null;
			this.clip['mousemove'] = null;
			this.clip['touchmove'] = null;
			this.clip['mouseover'] = null;
			this.clip['mouseout'] = null;
		}
		this.clip['buttonMode'] = true;
	}
};

/** @param {string} clipname */
GuiControlInteractive.prototype.setClip = function( clipname ) {
	GuiControl.prototype.setClip.call( this, clipname );
	this.setInteractive( this.m_interactive );
};

GuiControlInteractive.prototype.addPressListener = function( caller, callback ) {
	this._pressCaller = caller;
	this._pressCallback = callback;
};

GuiControlInteractive.prototype.addReleaseListener = function( caller, callback ) {
	this._releaseCaller = caller;
	this._releaseCallback = callback;
};

GuiControlInteractive.prototype.addPressAndReleaseListener = function( caller, callback ) {
	this._pressAndReleaseCaller = caller;
	this._pressAndReleaseCallback = callback;
};

GuiControlInteractive.prototype.addMoveListener = function( caller, callback ) {
	this._moveCallback = callback;
	this._moveCaller = caller;
};

GuiControlInteractive.prototype.addOverListener = function( callerin, callbackin, callerout, callbackout ) {
	this._overCallback = callbackin;
	this._overCaller = callerin;
	this._outCallback = callbackout;
	this._outCaller = callerout;
};

GuiControlInteractive.prototype.onPress = function( e ) {
	if ( this._pressCaller !== null && this._pressCallback !== null ) {
		this._pressCallback.call( this._pressCaller, this );
	}
	this.onPressActive = true;
};

GuiControlInteractive.prototype.onRelease = function( e ) {
	if ( this._releaseCaller !== null && this._releaseCallback !== null ) {
		this._releaseCallback.call( this._releaseCaller, this );
	}
};

GuiControlInteractive.prototype.onPressAndRelease = function( e ) {
	if ( this._pressAndReleaseCaller !== null && this._pressAndReleaseCallback !== null ) {
		this._pressAndReleaseCallback.call( this._pressAndReleaseCaller, this );
	}
};

GuiControlInteractive.prototype.onMove = function( e ) {
	if ( this._moveCaller !== null && this._moveCallback !== null ) {
		this._moveCallback.call( this._moveCaller, this, e );
	}
};

GuiControlInteractive.prototype.onOver = function( e ) {
	if ( this._overCaller !== null && this._overCallback !== null ) {
		this._overCallback.call( this._overCaller, this, e );
	}

	if ( this.buttonMode ) {
		if ( this.containerText !== null ) {
			this.containerText.canvas.scale.x = 1.15;
			this.containerText.canvas.scale.y = 1.15;
		}
		if ( Application.instance.canvasEvents ) {
			document.getElementById( 'MainCanvasEvents' ).style.cursor = 'pointer';
		}
	}
};

GuiControlInteractive.prototype.onOut = function( e ) {
	if ( this._outCaller !== null && this._outCallback !== null ) {
		this._outCallback.call( this._outCaller, this, e );
	}

	if ( this.containerText !== null ) {
		this.containerText.canvas.scale.x = 1;
		this.containerText.canvas.scale.y = 1;
	}

	if ( Application.instance.canvasEvents ) {
		document.getElementById( 'MainCanvasEvents' ).style.cursor = 'default';
	}
};

/**
 * @constructor
 * @param {SSprite} display
 * @param {string} enable
 * @param {string} disable
 * @param {string} selected
 * @param {string} soon
 * @extends GuiControlInteractive
 */
function GuiThumbs4State( display, enable, disable, selected, soon ) {
	GuiControlInteractive.call( this, display );
	this.enableLink = enable || '';
	this.disableLink = disable || '';
	this.selectedLink = selected || '';
	this.commingSoonLink = soon || '';
	this.gotoState( GuiControl.ST_ENABLE );
}
Application.subclass( GuiThumbs4State, GuiControlInteractive );

GuiThumbs4State.prototype.setEnabled = function( value ) {
	this.enabled = value;
	if ( !value ) {
		this.gotoState( GuiControl.ST_DISABLE );
	}
};

GuiThumbs4State.prototype.gotoState = function( st ) {
	if ( !this.enabled ) {
		return;
	}

	switch ( st ) {
		case GuiControl.ST_ENABLE:
			if ( this.enableLink !== '' ) {
				this.setClip( this.enableLink );
				this.setInteractive( true );
				this.state = st;
			}
			break;
		case GuiControl.ST_DISABLE:
			if ( this.disableLink !== '' ) {
				this.setClip( this.disableLink );
				this.setInteractive( false );
				this.enabled = false;
				this.state = st;
			}
			break;
		case GuiControl.ST_SELECTED:
			if ( this.selectedLink !== '' ) {
				this.setClip( this.selectedLink );
				this.setInteractive( false );
				this.state = st;
			}
			break;
		case GuiControl.ST_COMMING_SOON:
			if ( this.commingSoonLink !== '' ) {
				this.setClip( this.commingSoonLink );
				this.setInteractive( false );
				this.state = st;
				this.enabled = false;
			}
			break;
	}
};

/**
 * @constructor
 * @param {SSprite} display
 * @extends GuiControl
 */
function GuiClip( display ) {
	GuiControl.call( this, display );

	this.m_type = GuiControl.TYPE_CLIP;
}
Application.subclass( GuiClip, GuiControl );

/** @param {number} frame */
GuiClip.prototype.gotoAndStop = function( frame ) {
	if ( this.clip != null ) {
		this.clip.gotoAndStop( frame );
	}
};

/** @param {number} frame */
GuiClip.prototype.gotoAndPlay = function( frame ) {
	if ( this.clip != null ) {
		this.clip.gotoAndPlay( frame );
	}
};

/**
 * @override
 * @param {number} dt
 */
GuiClip.prototype.update = function( dt ) {
	if ( ( this.clip != null ) && ( this.clip.visible ) ) {
		this.clip.update( dt );
	}
};

/**
 * @constructor
 * @param {SSprite} display
 * @extends GuiControlInteractive
 */
function GuiOnOff( display ) {
	GuiControlInteractive.call( this, display );
	this.setInteractive( true );
	this.m_onLink = null;
	this.m_offLink = null;
	this.m_callerSwitch = null;
	this.m_callbackOn = null;
	this.m_callbackOff = null;
	this.buttonMode = true;
}
Application.subclass( GuiOnOff, GuiControlInteractive );

/** @override */
GuiOnOff.prototype.free = function() {
	this.m_onLink = null;
	this.m_offLink = null;

	this.m_callerSwitch = null;
	this.m_callbackOn = null;
	this.m_callbackOff = null;

	GuiControlInteractive.prototype.free.call( this );
};

GuiOnOff.prototype.onTurnOn = function( caller, callback ) {
	this.m_callerSwitch = caller;
	this.m_callbackOn = callback;
};

GuiOnOff.prototype.onTurnOff = function( caller, callback ) {
	this.m_callerSwitch = caller;
	this.m_callbackOff = callback;
};

/** @override */
GuiOnOff.prototype.setClip = function( clipname ) {
	GuiControlInteractive.prototype.setClip.call( this, clipname );
	if ( this.clip !== null ) {
		this.clip.stop();
	}
};

GuiOnOff.prototype.setOnClip = function( clipname ) {
	this.m_onLink = clipname;
};

GuiOnOff.prototype.setOffClip = function( clipname ) {
	this.m_offLink = clipname;
};

/**
 * @override
 * @param {boolean} enabled
 */
GuiOnOff.prototype.setEnabled = function( enabled ) {
	GuiControlInteractive.prototype.setEnabled.call( this, enabled );
	if ( this.clip !== null ) {
		this.clip.gotoAndStop( this.enabled ? 1 : 4 );
	}
};

/**
 * @param {number} _state
 */
GuiOnOff.prototype.gotoState = function( _state ) {
	this.state = _state;
	this.setClip( ( _state === GuiOnOff.ST_ON ) ? this.m_onLink : this.m_offLink );
};

/** @override */
GuiOnOff.prototype.onPress = function( e ) {
	if ( !this.enabled ) {
		return;
	}

	GuiControlInteractive.prototype.onPress.call( this, e );

	if ( this.state === GuiOnOff.ST_OFF ) {
		this.gotoState( GuiOnOff.ST_ON );
		if ( ( this.m_callerSwitch != null ) && ( this.m_callbackOn != null ) ) {
			this.m_callbackOn.call( this.m_callerSwitch );
		}
	}
	else if ( this.state === GuiOnOff.ST_ON ) {
		this.gotoState( GuiOnOff.ST_OFF );
		if ( ( this.m_callerSwitch != null ) && ( this.m_callbackOff != null ) ) {
			this.m_callbackOff.call( this.m_callerSwitch );
		}
	}
};

/** @override */
GuiOnOff.prototype.onRelease = function( e ) {
	if ( !this.enabled ) {
		return;
	}

	GuiControlInteractive.prototype.onRelease.call( this, e );
};

/** @type {number} */GuiOnOff.ST_ON = 1;
/** @type {number} */GuiOnOff.ST_OFF = 2;

/**
 * @constructor
 * @param {SSprite} display
 * @extends GuiControlInteractive
 */
function GuiButton( display ) {
	GuiControlInteractive.call( this, display );
	this.addOverListener( this, this.onOverCallback, this, this.onOutCallback );
	this.setInteractive( true );
	this.buttonMode = true;
}
Application.subclass( GuiButton, GuiControlInteractive );

/** @override */
GuiButton.prototype.setClip = function( clipname ) {
	GuiControlInteractive.prototype.setClip.call( this, clipname );
	if ( this.clip !== null ) {
		this.clip.gotoAndStop( 1 );
	}
};

/**
 * @override
 * @param {boolean} enabled
 */
GuiButton.prototype.setEnabled = function( enabled ) {
	GuiControlInteractive.prototype.setEnabled.call( this, enabled );
	if ( this.clip !== null ) {
		this.clip.gotoAndStop( this.enabled ? 1 : 4 );
	}
};

/** @override */
GuiButton.prototype.onPress = function( e ) {
	if ( !this.enabled ) {
		return;
	}

	GuiControlInteractive.prototype.onPress.call( this, e );
	if ( this.clip !== null ) {
		this.clip.gotoAndStop( 2 );
	}
};

/** @override */
GuiButton.prototype.onRelease = function( e ) {
	GuiControlInteractive.prototype.onRelease.call( this, e );
	if ( this.clip !== null ) {
		this.clip.gotoAndStop( this.enabled ? 1 : 4 );
	}
};

GuiButton.prototype.onOverCallback = function( e ) {
	if ( this.clip !== null ) {
		this.clip.gotoAndStop( this.enabled ? 3 : 4 );
	}
	if ( this.screenContainer && !Application.instance.isMobileDevice ) {
		this.screenContainer.onUIOver( this );
	}
};

GuiButton.prototype.onOutCallback = function( e ) {
	if ( this.clip !== null ) {
		this.clip.gotoAndStop( this.enabled ? 1 : 4 );
	}
	if ( this.screenContainer && !Application.instance.isMobileDevice ) {
		this.screenContainer.onUIOut( this );
	}
};
/**
 * @constructor
 * @param {SSprite} display
 * @param {string} nameClip
 * @extends GuiControlInteractive
 */
function GuiButtonState( display, nameClip ) {
	GuiControlInteractive.call( this, display );

	this.nameClip = nameClip;

	this.outLink = nameClip + '_out';
	this.overLink = nameClip + '_over';
	this.enableLink = nameClip + '_on';
	this.disableLink = nameClip + '_off';
	this.releaseLink = nameClip + '_out';
	this.selectedLink = nameClip + '_press';

	this.m_interactive = true;
	this.setClip( this.enableLink );
	this.clip.alpha = 0;

	/** @type {string} */
	this.m_instanceName = '';

	/** @type {Animation} */
	this.m_clipState = null;

	this.addOverListener( this, this.onOverCallback, this, this.onOutCallback );
	this.gotoState( GuiControl.ST_ENABLE );
	this.buttonMode = true;

	this.m_type = GuiControl.TYPE_ANI_BUTTON;
}
Application.subclass( GuiButtonState, GuiControlInteractive );

/** @override */
GuiButtonState.prototype.free = function() {
	if ( this.m_clipState != null ) {
		this.m_clipState.free();
		this.m_clipState = null;
	}
	GuiControlInteractive.prototype.free.call( this );
};

GuiButtonState.prototype.setNameClipBase = function( nameClip ) {
	this.nameClip = nameClip;

	this.outLink = nameClip + '_out';
	this.overLink = nameClip + '_over';
	this.enableLink = nameClip + '_on';
	this.disableLink = nameClip + '_off';
	this.releaseLink = nameClip + '_out';
	this.selectedLink = nameClip + '_press';

	this.gotoState( this.state );
};

/**
 * @override
 * @param {boolean} enabled
 */
GuiButtonState.prototype.setEnabled = function( enabled ) {
	GuiControlInteractive.prototype.setEnabled.call( this, enabled );
	this.gotoState( this.enabled ? GuiControl.ST_ENABLE : GuiControl.ST_DISABLE );
};

/**
 * @override
 * @param {boolean} value
 */
GuiButtonState.prototype.setVisible = function( value ) {
	GuiControlInteractive.prototype.setVisible.call( this, value );
	if ( this.m_clipState != null ) {
		this.m_clipState.visible = this.isVisible;
	}
};

/** @override */
GuiButtonState.prototype.onPress = function( e ) {
	if ( !this.enabled || !this.m_interactive || this.m_eventsLocked ) {
		return;
	}
	GuiControlInteractive.prototype.onPress.call( this, e );
	this.gotoState( GuiControl.ST_SELECTED );
};

/** @override */
GuiButtonState.prototype.onRelease = function( e ) {
	if ( !this.enabled || !this.m_interactive ) {
		return;
	}
	GuiControlInteractive.prototype.onRelease.call( this, e );
	if ( this.state === GuiControl.ST_SELECTED ) {
		this.gotoState( GuiControl.ST_RELEASE );
	}
};

GuiButtonState.prototype.onOverCallback = function( e ) {
	if ( ( this.state === GuiControl.ST_OVER )
		 || this.onPressButton
		 || !this.m_interactive
		 || this.m_eventsLocked ) {
		return;
	}
	this.gotoState( GuiControl.ST_OVER );
	if ( this.screenContainer && !Application.instance.isMobileDevice ) {
		this.screenContainer.onUIOver( this );
	}
};

GuiButtonState.prototype.onOutCallback = function( e ) {
	if ( ( this.state === GuiControl.ST_OUT )
		 || ( this.state === GuiControl.ST_RELEASE )
		 || this.onPressButton
		 || !this.m_interactive ) {
		if ( this.onPressButton ) {
			this.onPressButton = false;
			if ( this.state == GuiControl.ST_SELECTED ) {
				this.gotoState( GuiControl.ST_OUT );
				if ( this.screenContainer && !Application.instance.isMobileDevice ) {
					this.screenContainer.onUIOut( this );
				}
			}
		}
		return;
	}
	if ( this.state != GuiControl.ST_RELEASE ) {
		this.gotoState( GuiControl.ST_OUT );
	}
	if ( this.screenContainer && !Application.instance.isMobileDevice ) {
		this.screenContainer.onUIOut( this );
	}
};

GuiButtonState.prototype.onResetState = function() {
	if ( !this.enabled ) {
		return;
	}
	this.onPressButton = false;
	this.gotoState( GuiControl.ST_ENABLE );
};

/**
 * @param {string} clipname
 * @param {boolean} interactive
 */
GuiButtonState.prototype.setClipState = function( clipname, interactive ) {
	if ( this.isVisible && this.canvas !== null ) {
		if ( this.m_clipState != null ) {
			this.m_clipState.free();
		}

		while ( this.canvas.children.length > 1 ) {
			Application.warn( 'The canvas still has children! - This should not happen.' );
			this.canvas['removeChild']( this.canvas['getChildAt']( 1 ) );
		}

		this.m_clipState = Application.instance.getAnimation( clipname );
		if ( this.m_clipState === null ) {
			this.gotoState( GuiControl.ST_ENABLE );
			return;
		}
		this.m_clipState.visible = this.isVisible;
		this.m_clipState.interactive = false;
		this.canvas['addChild']( this.m_clipState );
	}

	if ( this.m_interactive != interactive ) {
		this.setInteractive( interactive )
	}
};

/**
 * @param {boolean} fade
 * @param {number=} time
 */
GuiButtonState.prototype.onFade = function( fade, time ) {
	time = time || 500;
	var minAlpha = 0;
	var maxAlpha = 0;
	this.m_clipState.visible = true;
	this.isVisible = fade;

	if ( fade ) {
		if ( this.m_clipState.alpha === 1 ) {
			return;
		}

		this.gotoState( GuiControl.ST_ENABLE );
		minAlpha = 0;
		maxAlpha = 1;
	}
	else {
		if ( this.m_clipState.alpha === 0 ) {
			return;
		}

		minAlpha = 1;
		maxAlpha = 0;
	}

	Common.tween( { parent: this, clip: this.m_clipState, alpha: minAlpha },
				  { alpha: maxAlpha },
				  time,
				  true,
				  0,
				  TweenEasing.LinearNone );

	this.setInteractive( this.isVisible );
};

/**
 * @override
 * @param {number} dt
 */
GuiButtonState.prototype.update = function( dt ) {
	if ( ( this.m_clipState !== null ) && ( this.m_clipState.visible ) ) {
		this.m_clipState.update( dt );

		if ( ( this.state === GuiControl.ST_OUT ) || ( this.state === GuiControl.ST_RELEASE ) ) {
			if ( this.m_clipState.currentFrame === this.m_clipState.totalFrames - 1 ) {
				this.gotoState( this.enabled ? GuiControl.ST_ENABLE : GuiControl.ST_DISABLE );
			}
		}
	}
}

/**
 * @override
 * @param {number} st
 */
GuiButtonState.prototype.gotoState = function( st ) {
	switch ( st ) {
		case GuiControl.ST_ENABLE:
			this.setClipState( this.enableLink, true );
			this.state = st;
			break;
		case GuiControl.ST_DISABLE:
			this.setClipState( this.disableLink, false );
			this.enabled = false;
			this.state = st;
			break;
		case GuiControl.ST_SELECTED:
			this.onPressButton = true;
			this.setClipState( this.selectedLink, true );
			this.state = st;
			break;
		case GuiControl.ST_RELEASE:
			this.setClipState( this.outLink, true );
			this.state = st;
			break;
		case GuiControl.ST_OVER:
			this.setClipState( this.overLink, true );
			this.state = st;
			break;
		case GuiControl.ST_OUT:
			this.setClipState( this.outLink, true );
			this.state = st;
			break;
	}
};

/**
 * @constructor
 * @param {SSprite} display
 * @param {number=} width
 * @param {number=} height
 * @extends GuiControl
 */
function GuiText( display, width, height ) {
	GuiControl.call( this, display );

	this.align = GuiText.ALIGN_CENTER;
	this.valign = GuiText.ALIGN_V_MIDDLE;

	this.textfield = new SPixiText( '', {} );
	this.canvas.addChild( this.textfield );

	this.baseWidth = width || 50;
	this.baseHeight = height || 50;
	this.offsetX = -this.baseWidth * 0.5;
	this.offsetY = -this.baseHeight * 0.5;

	this.textfield.debugRect = new Rectangle( this.offsetX,
											  this.offsetY,
											  this.baseWidth,
											  this.baseHeight );
}
Application.subclass( GuiText, GuiControl );

/** @override */
GuiText.prototype.free = function() {
	if ( this.textfield ) {
		this.textfield.free();
		this.canvas.removeChild( this.textfield );
		this.textfield = null;
	}
	GuiControl.prototype.free.call( this );
};

GuiText.prototype.setText = function( text ) {
	if ( !this.textfield ) {
		return;
	}
	this.textfield.text = text;
	GuiText.updateAlign( this );
};

GuiText.prototype.setTextEmpty = function() {
	this.setTextLocalized( 'STR_EMPTY' );
};

/**
 * @param {string} text
 * @param {Array.<number>} possibleValues
 * @param {number} value
 * @param {boolean=} force
 */
GuiText.prototype.setTextJoined = function( text, possibleValues, value, force ) {
	if ( force || possibleValues.indexOf( value ) !== -1 ) {
		var stringValue = ( ( value >= 10 ) ? '' : '0' ) + value;
		this.setTextLocalized( text + stringValue );
	}
	else {
		Application.warn( 'GuiText::setTextJoined: value ' + value + ' not in range ' + possibleValues + '.' );
	}
};

/**
 * @param {string} text
 */
GuiText.prototype.setTextLocalized = function( text ) {
	if ( Application.strings[text] ) {
		this.setText( Application.strings[text]['value'] );
	}
	else {
		Application.error( 'setTextLocalized with id [' + text + ']' );
	}
};

/**
 * @param {number} text
 */
GuiText.prototype.setTextNumeric = function( text ) {
	if ( typeof text === 'number' ) {
		this.setText( text.toString() );
	}
	else {
		Application.warn( 'GuiText::setTextNumeric: text not numeric.' );
	}
};

GuiText.prototype.setTextRaw = function( text ) {
	Application.warn( 'setTextRaw: ' + text );
	this.setText( text );
};

/**
 * @param {string} text
 * @param {Array.<string>} replacementCharacters
 * @param {Array.<number|string>} values
 */
GuiText.prototype.setTextReplace = function( text, replacementCharacters, values ) {
	if ( replacementCharacters.length !== values.length ) {
		Application.warn( 'GuiText::setTextReplace: array inputs do not have the same length.' );
	}
	else {
		if ( Application.strings[text] ) {
			var string = Application.strings[text]['value'];
			for ( var i = 0; i < replacementCharacters.length; i++ ) {
				string = string.replace( replacementCharacters[i], values[i] );
			}
			this.setText( string );
		}
		else {
			Application.warn( 'GuiText::setTextReplace: id ' + text + ' not found.' );
		}
	}
};

GuiText.prototype.setVisible = function( visible ) {
	this.canvas.visible = visible;
};

GuiText.updateAlign = function( gui ) {
	var offset = 0;
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		offset = gui.textfield.style.padding;
	}

	if ( !gui.textfield ) {
		return;
	}

	switch ( gui.align ) {
		case GuiText.ALIGN_LEFT:
			gui.textfield['position']['x'] = gui.offsetX - offset;
			break;
		case GuiText.ALIGN_CENTER:
			gui.textfield['position']['x'] = -gui.textfield.width * 0.5 - offset;
			break;
		case GuiText.ALIGN_RIGHT:
			gui.textfield['position']['x'] = gui.baseWidth * 0.5 - gui.textfield.width - offset;
			break;
	}

	switch ( gui.valign ) {
		case GuiText.ALIGN_V_TOP:
			gui.textfield['position']['y'] = gui.offsetY - offset;
			break;
		case GuiText.ALIGN_V_MIDDLE:
			gui.textfield['position']['y'] = -gui.textfield.height * 0.5 - offset;
			break;
		case GuiText.ALIGN_V_BOTTOM:
			gui.textfield['position']['y'] = gui.baseHeight * 0.5 - gui.textfield.height - offset;
			break;
	}
};

GuiText.ALIGN_LEFT = 'left';
GuiText.ALIGN_CENTER = 'center';
GuiText.ALIGN_RIGHT = 'right';

GuiText.ALIGN_V_TOP = 'top';
GuiText.ALIGN_V_MIDDLE = 'center';
GuiText.ALIGN_V_BOTTOM = 'bottom';

/**
 * Creates a GuiSlider.
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {string} nameClip
 * @param {number} x
 * @param {number} y
 */
function GuiSlider( canvas, nameClip, x, y ) {
	/** @type {number} */
	this.x = x;
	/** @type {number} */
	this.y = y;
	/** @type {boolean} */
	this.m_pressed = false;
	/** @type {SDisplayObjectContainer} */
	this.canvas = canvas;
	/** @type {SSprite|Animation} */
	this.m_animation = null;
	/** @type {SSprite} */
	this.m_pointer = null;
	/** @type {Rectangle} */
	this.m_collision = null;
	/** @type {string} */
	this.m_nameClip = nameClip;

	this.m_callback = null;
	this.m_caller = null;

	/** @type {number} */
	this.m_collisionPositionX = 0;

	this.createGuiSlider();

	/** @type {number} */
	this.m_currentIdTouch = -1;

	/** @type {number} */
	this.m_virtualPointerPositionX = 0;
	/** @type {number} */
	this.m_lastX = 0;
}

/** @type {number} */GuiSlider.HALF_TOTAL_DISTANCE = 50;
/** @type {number} */GuiSlider.POINTER_RADIO = 15;
/** @type {number} */GuiSlider.POINTER_RADIO_POW2 = 225;

/** @type {string} */GuiSlider.POINTER_NAME_INSTANCE = "pointer";
/** @type {string} */GuiSlider.COLLISION_NAME_INSTANCE = "mcCollision";

GuiSlider.prototype.linkFunction = function( caller, callback ) {
	this.m_callback = callback;
	this.m_caller = caller;
};

GuiSlider.prototype.createGuiSlider = function() {
	this.m_animation = Application.instance.getClip( this.m_nameClip );
	this.canvas.addChild( this.m_animation );
	this.m_animation.position.x = this.x;
	this.m_animation.position.y = this.y;
	this.m_pointer = this.m_animation.getInstance( GuiSlider.POINTER_NAME_INSTANCE );
	this.m_collision = this.m_animation.collisions[GuiSlider.COLLISION_NAME_INSTANCE];

	this.m_collisionPositionX = this.m_collision.x - this.m_pointer.position.x;

	this.m_animation.interactive = true;
	this.m_animation.self = this;
	this.m_animation.mousedown = function( e ) { this.self.onPointerPress( e ); };
	this.m_animation.touchstart = function( e ) { this.self.onPointerPress( e ); };
	this.m_animation.mouseup = function( e ) { this.self.onPointerRelease( e ); };
	this.m_animation.mouseupoutside = function( e ) { this.self.onPointerRelease( e ); };
	this.m_animation.touchend = function( e ) { this.self.onPointerRelease( e ); };
	this.m_animation.touchendoutside = function( e ) { this.self.onPointerRelease( e ); };
	this.m_animation.mousemove = function( e ) { this.self.onPointerMove( e ) };
	this.m_animation.touchmove = function( e ) { this.self.onPointerMove( e ) };
};

GuiSlider.prototype.onPointerPress = function( e ) {
	if ( Application.instance.isMobileDevice ) {
		if ( this.m_currentIdTouch !== -1 ) { return; }
	}

	/** @type {number} */
	var dx = this.x + this.m_virtualPointerPositionX - e.data.global.x - GuiSlider.HALF_TOTAL_DISTANCE;
	/** @type {number} */
	var dy = this.y - e.data.global.y;

	if ( dx * dx + dy * dy < GuiSlider.POINTER_RADIO_POW2 ) {
		if ( Application.instance.isMobileDevice ) {
			this.m_currentIdTouch = e['currentTouchEvent']['identifier'];
		}
		this.m_lastX = e.data.global.x;
		this.m_pressed = true;
	}
};

GuiSlider.prototype.onPointerRelease = function( e ) {
	if ( Application.instance.isMobileDevice ) {
		if ( this.m_currentIdTouch !== e['currentTouchEvent']['identifier'] ) { return; }
	}
	this.m_pressed = false;
	this.m_currentIdTouch = -1;

	if ( this.m_virtualPointerPositionX > 2 * GuiSlider.HALF_TOTAL_DISTANCE ) {
		this.m_virtualPointerPositionX = 2 * GuiSlider.HALF_TOTAL_DISTANCE;
	}
	else if ( this.m_virtualPointerPositionX < 0 ) {
		this.m_virtualPointerPositionX = 0;
	}
};

GuiSlider.prototype.onPointerMove = function( e ) {
	if ( Application.instance.isMobileDevice ) {
		if ( this.m_currentIdTouch !== e['currentTouchEvent']['identifier'] ) { return; }
	}
	if ( !this.m_pressed ) { return; }
	/** @type {number} */
	var dx = e.data.global.x - this.m_lastX;
	this.m_lastX = e.data.global.x;
	this.setPointerPosition( ( this.m_virtualPointerPositionX + dx ) / ( 2 * GuiSlider.HALF_TOTAL_DISTANCE ) );
};

/**
 * @param {number} value
 */
GuiSlider.prototype.setPointerPosition = function( value ) {
	value *= 2 * GuiSlider.HALF_TOTAL_DISTANCE;
	this.m_virtualPointerPositionX = value;
	this.updatePointerPosition( value );
};

/**
 * @param {number} value
 */
GuiSlider.prototype.updatePointerPosition = function( value ) {
	/** @type {number} */
	var lastVal = this.m_pointerPositionX;

	if ( value > 2 * GuiSlider.HALF_TOTAL_DISTANCE ) {
		this.m_pointerPositionX = 2 * GuiSlider.HALF_TOTAL_DISTANCE;
	}
	else if ( value < 0 ) {
		this.m_pointerPositionX = 0;
	}
	else {
		this.m_pointerPositionX = value;
	}

	if ( this.m_pointerPositionX !== lastVal ) {
		this.m_pointer.position.x = this.m_pointerPositionX - GuiSlider.HALF_TOTAL_DISTANCE;
		this.m_collision.x = this.m_pointer.position.x + this.m_collisionPositionX;

		if ( this.m_callback !== null ) {
			this.m_callback.call( this.m_caller, this, this.m_pointerPositionX / ( 2 * GuiSlider.HALF_TOTAL_DISTANCE ) );
		}
	}
};

GuiSlider.prototype.free = function() {
	if ( this.m_animation != null ) {
		this.canvas.removeChild( this.m_animation );
		this.m_animation.free();
		this.m_animation = null;
	}
	this.m_pointer = null;
	this.m_collision = null;

	this.m_callback = null;
	this.m_caller = null;
	this.canvas = null;
};

/**
 * @constructor
 * @param {SSprite} display
 * @extends GuiControl
 */
function GuiContent( display ) {
	GuiControl.call( this, display );
	this.clip = Application.instance.getEmtpyAnimation();
	this.canvas.addChild( this.clip );
}
Application.subclass( GuiContent, GuiControl );

/**
 * @constructor
 * @param {string} attribs
 * @param {string} params
 */
function DataMovement( attribs, params ) {
	/** @type {Object} */
	this.motionParams = null;

	/** @type {Object.<string, string>} */
	var objAttribs = Common.getParams( attribs );

	/** @type {boolean} */
	this.isLoop = ( parseInt( objAttribs.loop, 10 ) == 1 );
	/** @type {boolean} */
	this.isReverse = ( parseInt( objAttribs.reverse, 10 ) == 1 );
	/** @type {number} */
	this.speed = parseFloat( objAttribs.speed );

	this.setMotionParams( params );
}

/**
 * @param {string} params
 * Example of 'params': "lp:180,0;lp:200,270;lp:180,180;lp:200,90"
 */
DataMovement.prototype.setMotionParams = function( params ) {
	this.motionParams = [];
	/** @type {Array.<string>} */
	var bloks = params.split( ';' );
	/** @type {number} */
	var k = 0;
	while ( k < bloks.length ) {
		var temp = [];
		/** @type {Array.<string>} */
		var array = bloks[k].split( ':' );
		if ( array.length < 2 ) {
			Application.error( 'DataMovement::setMotionParams(): ' + bloks[k] );
			++k;
			continue;
		}
		temp.push( array[0] );
		var values = array[1].split( ',' );
		var p = 0;
		while ( p < values.length ) {
			temp.push( values[p] );
			++p;
		}
		this.motionParams.push( temp );
		++k;
	}
};

DataMovement.prototype.free = function() {
	this.motionParams = null;
};

/**
 * @constructor
 * @struct
 * @param {SWorldActor} actor
 */
function SActorControl( actor ) {

	/** @type {number} */
	this.gravity = 0.0;
	/** @type {number} */
	this.regularGravity = 0.0;
	/** @type {number} */
	this.wallJumpGravityFactor = 1.0;
	/** @type {number} */
	this.doubleJumpGravityFactor = 1.0;
	/** @type {number} */
	this.elasticity = 0.0;
	/** @type {number} */
	this.friction = 0.0;
	/** @type {number} */
	this.slopeFriction = 0.0;
	/** @type {number} */
	this.normalMaxVerletUpDisplace = 0;
	/** @type {number} */
	this.alteredMaxVerletUpDisplace = 0;
	/** @type {number} */
	this.maxVerletUpDisplace = 0;
	/** @type {number} */
	this.maxVerletDownDisplace = 0;
	/** @type {number} */
	this.maxVerletHorizontalDisplace = 0;

	/** @type {number} */
	this.m_forceX = 0.0;
	/** @type {number} */
	this.m_forceY = 0.0;
	/** @type {boolean} */
	this.m_isRunning = false;
	/** @type {boolean} */
	this.m_isJumping = false;
	/** @type {boolean} */
	this.m_isJumpingUp = false;
	/** @type {boolean} */
	this.m_isJumpingDown = false;
	/** @type {boolean} */
	this.m_isInAction = false;
	/** @type {boolean} */
	this.m_isInDashAttack = false;

	/** @type {number} */
	this.airSpeed = 0;
	/** @type {number} */
	this.walkSpeed = 0;
	/** @type {number} */
	this.runFactor = 0;
	/** @type {boolean} */
	this.canRun = false;
	/** @type {boolean} */
	this.canClimb = false;
	/** @type {number} */
	this.maxSpeedFloor = 0;
	/** @type {number} */
	this.maxSpeedAir = 0;

	/** @type {number} */
	this.normalAirSpeed = 0;
	/** @type {number} */
	this.alteredAirSpeed = 0;
	/** @type {number} */
	this.wallImpulseY = 0;

	/** @type {SWorldActor} */
	this.m_actor = actor;

	this.reset();
}

SActorControl.prototype.free = function() {
	this.m_actor = null;
};

/**
 * @public
 * @return {number}
 */
SActorControl.prototype.forceX = function() {
	return this.m_forceX;
};

/**
 * @public
 * @return {number}
 */
SActorControl.prototype.forceY = function() {
	return this.m_forceY;
};

/**
 * @public
 * @return {boolean}
 */
SActorControl.prototype.isRunning = function() {
	return this.m_isRunning;
};

/**
 * @public
 * @return {boolean}
 */
SActorControl.prototype.isJumping = function() {
	return this.m_isJumping;
};

/**
 * @public
 * @return {boolean}
 */
SActorControl.prototype.isJumpingUp = function() {
	return this.m_isJumpingUp;
};

/**
 * @public
 * @return {boolean}
 */
SActorControl.prototype.isJumpingDown = function() {
	return this.m_isJumpingDown;
};

/**
 * @public
 * @return {boolean}
 */
SActorControl.prototype.isInAction = function() {
	return this.m_isInAction;
};

/**
 * @public
 * @param {boolean} value
 */
SActorControl.prototype.onAction = function( value ) {
	this.m_isInAction = value;
};

/**
 * @public
 * @return {boolean}
 */
SActorControl.prototype.isInDashAttack = function() {
	return this.m_isInDashAttack;
};

/**
 * @public
 */
SActorControl.prototype.reset = function() {
	this.m_forceX = 0;
	this.m_forceY = 0;
	this.m_isJumping = false;
	this.m_isJumpingUp = false;
	this.m_isJumpingDown = false;
	this.m_isRunning = false;
	this.m_isInAction = false;
};

/**
 * @public
 * @param {Object} data
 */
SActorControl.prototype.loadData = function( data ) {
	this.setDefaultData( data );
};

/**
 * @public
 * @param {Object} data
 */
SActorControl.prototype.setDefaultData = function( data ) {
	this.setData( data );// had an extra parameter false
};

/**
 * @public
 * @param {Object} data
 */
SActorControl.prototype.setData = function( data ) {
	this.gravity = Common.getData( data, 'gravity', this.gravity );
	this.regularGravity = this.gravity;
	this.wallJumpGravityFactor = Common.getData( data, 'wallJumpGravityFactor', this.wallJumpGravityFactor );
	this.doubleJumpGravityFactor = Common.getData( data, 'doubleJumpGravityFactor', this.doubleJumpGravityFactor );
	this.elasticity = Common.getData( data, 'elasticity', this.elasticity );
	this.friction = Common.getData( data, 'friction', this.friction );
	this.slopeFriction = Common.getData( data, 'slopeFriction', this.slopeFriction );
	this.maxVerletUpDisplace = Common.getData( data, 'maxVerletUpDisplace', this.maxVerletUpDisplace );
	this.normalMaxVerletUpDisplace = this.maxVerletUpDisplace;
	this.alteredMaxVerletUpDisplace = this.maxVerletUpDisplace * 0.5;
	this.maxVerletDownDisplace = Common.getData( data, 'maxVerletDownDisplace', this.maxVerletDownDisplace );
	this.maxVerletHorizontalDisplace = Common.getData( data, 'maxVerletHorizontalDisplace', this.maxVerletHorizontalDisplace );
};

/**
 * @public
 * @param {number} dt
 */
SActorControl.prototype.update = function( dt ) {
};

/**
 * @public
 * @param {Vector2D} coll
 * @param {number} dt
 */
SActorControl.prototype.onCollision = function( coll, dt ) {
};

/**
 * @constructor
 * @struct
 * @param {SDisplayObjectContainer} canvas
 * @param {number} x
 * @param {number} y
 * @param {string=} clipName
 * @extends DebugObject
 */
function SActor( canvas, x, y, clipName ) {
	/**
	 * @public
	 * @type {number}
	 */
	this.actorId = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_uniqueId = -1;
	/**
	 * @protected
	 * @type {string}
	 */
	this.m_state = '';
	/**
	 * @protected
	 * @type {string}
	 */
	this.m_skin = '';
	/**
	 * @public
	 * @type {number}
	 */
	this.m_x = 0;
	/**
	 * @public
	 * @type {number}
	 */
	this.m_y = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_oldX = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_oldY = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_depth = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_health = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_scale = 1;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_scaleX = 1;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_scaleY = 1;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_isIdle = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_flipX = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_clipLookingRight = true;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_isAwaitingDelete = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_isRangeControlled = true;
	/**
	 * @protected
	 * @type {Vector2D}
	 */
	this.m_speed = new Vector2D();
	/**
	 * @protected
	 * @type {Animation|SSprite}
	 */
	this.m_clip = null;
	/**
	 * @protected
	 * @type {Character}
	 */
	this.m_character = null;
	/**
	 * @protected
	 * @type {SDisplayObjectContainer}
	 */
	this.m_canvas = Application.instance.addDisplayContainer();
	canvas.addChild( this.m_canvas );

	/**
	 * @protected
	 * @type {Object}
	 */
	this.m_config = null;
	/**
	 * @protected
	 * @type {SNpcManager}
	 */
	this.m_manager = null;
	/**
	 * @protected
	 * @type {number|string}
	 */
	this.m_type = 0;
	/**
	 * @public
	 * @type {number}
	 * */
	this.screenX = 0;
	/**
	 * @public
	 * @type {number}
	 * */
	this.screenY = 0;

	this.setActorClip( clipName );
	this.setPosition( x, y );
	DebugObject.call( this );
}
Application.subclass( SActor, DebugObject );

SActor.prototype.free = function() {
	DebugObject.prototype.free.call( this );



	if ( this.m_character !== null ) {
		this.m_character.free();
		this.m_character = null;
		this.m_clip = null;
	}

	if ( this.m_clip !== null ) {
		this.m_clip.free();
		this.m_canvas.removeChild( this.m_clip );
		this.m_clip = null;
	}

	if ( this.m_canvas.parent ) {
		this.m_canvas.parent.removeChild( this.m_canvas );
	}

	this.m_config = null;
	this.m_speed = null;
	this.m_canvas = null;
	this.m_manager = null;
};

/**
 * @public
 */
SActor.prototype.initPhysics = function() {
};

/**
 * @public
 */
SActor.prototype.initCharacter = function() {
};

/**
 * @public
 * @return {number}
 */
SActor.prototype.uniqueId = function() {
	return this.m_uniqueId;
};

/**
 * @public
 * @return {number}
 */
SActor.prototype.getHealth = function() {
	return this.m_health;
};

/**
 * @public
 * @param {number} value
 */
SActor.prototype.setHealth = function( value ) {
	this.m_health = value;
};

/**
 * @public
 * @param {number|string} type
 */
SActor.prototype.setType = function( type ) {
	this.m_type = type;
};

/**
 * @public
 * @return {number|string}
 */
SActor.prototype.getType = function() {
	return this.m_type;
};

/**
 * @public
 * @return {boolean}
 */
SActor.prototype.isAwaitingDelete = function() {
	return this.m_isAwaitingDelete;
};

/**
 * @public
 * @return {boolean}
 */
SActor.prototype.isRangeControlled = function() {
	return this.m_isRangeControlled;
};

/**
 * @public
 * @param {boolean} value
 */
SActor.prototype.setAwaitingDelete = function( value ) {
	this.m_isAwaitingDelete = value;
};

/**
 * @public
 * @param {boolean} value
 */
SActor.prototype.setRangeControlled = function( value ) {
	this.m_isRangeControlled = value;
};

/**
 * @public
 * @param {SNpcManager} value
 */
SActor.prototype.setManager = function( value ) {
	this.m_manager = value;
};

/**
 * @public
 * @return {Animation|SSprite}
 */
SActor.prototype.clip = function() {
	return this.m_clip;
};

/**
 * @public
 * @return {Vector2D}
 */
SActor.prototype.speed = function() {
	return this.m_speed;
};

/**
 * @public
 * @param {number} sx
 * @param {number=} sy
 */
SActor.prototype.setSpeed = function( sx, sy ) {
	sy = ( typeof sy === 'undefined' ) ? sx : sy;
	this.m_speed.x = sx;
	this.m_speed.y = sy;
};

/**
 * @public
 * @return {boolean}
 */
SActor.prototype.isIdle = function() {
	return this.m_isIdle;
};

/**
 * @public
 * @return {number}
 */
SActor.prototype.depth = function() {
	return this.m_depth;
};

/**
 * @public
 * @return {number}
 */
SActor.prototype.scale = function() {
	return this.m_scale;
};

/**
 * @public
 * @param {number} val
 */
SActor.prototype.setX = function( val ) {
	this.m_x = val;
};

/**
 * @public
 * @param {number} val
 */
SActor.prototype.setY = function( val ) {
	this.m_y = val;
};

/**
 * @public
 * @return {number}
 */
SActor.prototype.getX = function() {
	return this.m_x;
};

/**
 * @public
 * @return {number}
 */
SActor.prototype.getY = function() {
	return this.m_y;
};

/**
 * @public
 * @return {boolean}
 */
SActor.prototype.flipX = function() {
	return this.m_flipX;
};

/**
 * @public
 * @return {SDisplayObjectContainer}
 */
SActor.prototype.canvas = function() {
	return this.m_canvas;
};

/**
 * @public
 * @param {number} damage
 * @param {SActor=} source
 * @param {number=} px
 * @param {number=} py
 * @return {boolean}
 */
SActor.prototype.onHit = function( damage, source, px, py ) {
	return false;
};

/**
 * @public
 * @return {string}
 */
SActor.prototype.state = function() {
	return this.m_state;
};

/**
 * @public
 * @return {Character}
 */
SActor.prototype.character = function() {
	return this.m_character;
};

/**
 * @public
 * @param {string=} clipName
 */
SActor.prototype.setActorClip = function( clipName ) {
	if ( clipName ) {
		this.m_clip = Application.instance.getClip( clipName );
		this.m_clip.position.x = this.m_x;
		this.m_clip.position.y = this.m_y;
		this.m_canvas.addChild( this.m_clip );
	}
};

/**
 * @public
 * @param {Point} p
 */
SActor.prototype.setPositionPoint = function( p ) {
	this.m_x = p.x;
	this.m_y = p.y;
};

/**
 * @public
 * @param {number} px
 * @param {number} py
 */
SActor.prototype.setPosition = function( px, py ) {
	this.m_x = px;
	this.m_y = py;
	if ( this.m_clip ) {
		this.m_clip.position.x = this.m_x;
		this.m_clip.position.y = this.m_y;
	}
};

/**
 * @public
 * @param {boolean} flip
 */
SActor.prototype.setFlipX = function( flip ) {
	this.m_flipX = flip;
	if ( this.m_clip !== null ) {
		var sign = this.m_clipLookingRight ? 1 : -1;
		this.m_clip.scale.x = this.m_flipX ? -this.m_scaleX * sign : this.m_scaleX * sign;
	}
};

/**
 * @public
 * @param {number} val
 */
SActor.prototype.setScale = function( val ) {
	if ( this.m_scale !== val ) {
		if ( this.m_clip !== null ) {
			this.m_clip.setScale( ( this.m_flipX ) ? -val : val,
								  val );
		}
		this.m_scale = val;
		this.m_scaleX = val;
		this.m_scaleY = val;
	}
};

/**
 * @public
 * @param {number} val
 */
SActor.prototype.setScaleX = function( val ) {
	if ( this.m_scaleX !== val ) {
		if ( this.m_clip !== null ) {
			var sign = this.m_clipLookingRight ? 1 : -1;
			this.m_clip.scale.x = this.m_flipX ? -val * sign : val * sign;
		}
		this.m_scaleX = val;
	}
};

/**
 * @public
 * @param {number} val
 */
SActor.prototype.setScaleY = function( val ) {
	if ( this.m_scaleY !== val ) {
		if ( this.m_clip !== null ) {
			this.m_clip.scale.y = val;
		}
		this.m_scaleY = val;
	}
};

/**
 * @public
 * @param {number} valX
 * @param {number} valY
 */
SActor.prototype.setScaleXY = function( valX, valY ) {
	this.setScaleX( valX );
	this.setScaleY( valY );
};

/**
 * @public
 * @param {number} w
 * @param {number} h
 */
SActor.prototype.resize = function( w, h ) {
	if ( this.m_clip !== null ) {
		this.setScaleXY( w / this.m_clip.width, h / this.m_clip.height );
	}
};

/**
 * @public
 * @param {string} state
 */
SActor.prototype.onEndAnimation = function( state ) {
};

/**
 * @public
 * @param {string} state
 */
SActor.prototype.gotoState = function( state ) {
	if ( state !== this.m_state ) {
		this.characterGotoState( state );
		this.m_state = state;
	}
};

/**
 * @public
 * @param {string} st
 */
SActor.prototype.characterGotoState = function( st ) {
	if ( st !== this.m_state && this.m_character !== null ) {
		this.m_character.gotoState( st );
		this.m_clip = this.m_character.clip;
		var sign = this.m_clipLookingRight ? 1 : -1;
		this.m_clip.scale.x = this.m_flipX ? -this.m_scaleX * sign : this.m_scaleX * sign;
		this.m_clip.scale.y = this.m_scaleY;
	}
};

/**
 * @public
 */
SActor.prototype.saveData = function() {
};

/**
 * @public
 * @param {number} dt
 */
SActor.prototype.update = function( dt ) {
	this.onDebugUpdate( dt );
	this.render( dt );
};

/**
 * @public
 * @param {number} dt
 */
SActor.prototype.render = function( dt ) {
	if ( this.m_character !== null ) {
		this.m_character.setPosition( this.m_x, this.m_y );
		this.m_character.update( dt );
	}
	else if ( this.m_clip !== null ) {
		this.m_clip.setPosition( this.m_x, this.m_y );
		this.m_clip.update( dt );
	}
};

/**
 * @public
 * @param {Object} actor
 * @param {string=} collisionName
 */
SActor.prototype.onCollisionActor = function( actor, collisionName ) {
};

/**
 * @public
 * @param {Object} bullet
 * @return {boolean}
 */
SActor.prototype.onCollisionBullet = function( bullet ) {
	return true;
};

/**
 * @public
 * @param {SActor} actor
 * @param {string=} myBoundsName
 * @param {string=} actorBoundsName
 * @return {boolean}
 */
SActor.prototype.hitTest = function( actor, myBoundsName, actorBoundsName ) {
	myBoundsName = typeof myBoundsName !== 'undefined' ? myBoundsName : 'mcCollision';
	actorBoundsName = typeof actorBoundsName !== 'undefined' ? actorBoundsName : 'mcCollision';
	if ( actor === null ) {
		return false;
	}
	if ( typeof actor.clip === 'undefined' || actor.clip() === null ) {
		return false;
	}
	if ( actor.clip().getCollision( actorBoundsName ) === null ) {
		return false;
	}
	if ( this.m_clip === null ||
		 this.m_clip.getCollision( myBoundsName ) === null ) {
		return false;
	}
	var coll = SDisplayObjectContainer.hitTestByBounds( this.m_clip,
														this.m_clip.getCollision( myBoundsName ),
														actor.clip(),
														actor.clip().getCollision( actorBoundsName ) );
	return coll;
};

/**
 * @public
 * @param {number=} margin
 * @return {boolean}
 */
SActor.prototype.isInCamera = function( margin ) {
	return true;
}

/**
 * @public
 * @param {boolean} idle
 */
SActor.prototype.onIdle = function( idle ) {
	this.m_isIdle = idle;
	if ( this.m_clip !== null ) {
		this.m_clip.visible = !idle;
	}
};

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
SActor.prototype.onDebugDraw = function( ctx ) {
};

/**
 * @constructor
 * @struct
 * @param {SWorld} world
 * @param {number} widthSCamera
 * @param {number} heightSCamera
 * @param {number=} positionScreenX
 * @param {number=} positionScreenY
 * @param {number=} initCamX
 * @param {number=} initCamY
 */
function SCamera( world,
				  widthSCamera,
				  heightSCamera,
				  positionScreenX,
				  positionScreenY,
				  initCamX,
				  initCamY ) {

	positionScreenX = ( typeof positionScreenX !== 'undefined' ) ? positionScreenX : 0;
	positionScreenY = ( typeof positionScreenY !== 'undefined' ) ? positionScreenY : 0;
	initCamX = ( typeof initCamX !== 'undefined' ) ? initCamX : 0;
	initCamY = ( typeof initCamY !== 'undefined' ) ? initCamY : 0;

	/** @type {number} */
	this.m_x = initCamX;
	/** @type {number} */
	this.m_y = initCamY;
	/** @type {SWorld} */
	this.m_world = world;
	/** @type {boolean} */
	this.m_fixedX = ( this.m_world.cameraXMin === this.m_world.cameraXMax );
	/** @type {boolean} */
	this.m_fixedY = ( this.m_world.cameraYMax === this.m_world.cameraYMin );
	/** @type {number} */
	this.m_scale = 1;

	/** @type {number} */
	this.m_width = widthSCamera;
	/** @type {number} */
	this.m_height = heightSCamera;
	/** @type {number} */
	this.screenX = positionScreenX;
	/** @type {number} */
	this.screenY = positionScreenY;
	/** @type {number} */
	this.leftLimit = Math.round( this.m_world.cameraXMin * this.m_width );
	/** @type {number} */
	this.rightLimit = Math.round( this.m_world.cameraXMax * this.m_width );
	/** @type {number} */
	this.upLimit = Math.round( this.m_world.cameraYMin * this.m_height );
	/** @type {number} */
	this.downLimit = Math.round( this.m_world.cameraYMax * this.m_height );
	/** @type {boolean} */
	this.parallaxX = ( this.m_world.width() > this.m_width );
	/** @type {boolean} */
	this.parallaxY = ( this.m_world.height() > this.m_height );
	/** @type {boolean} */
	this.m_freeDebugMove = false;

	/** @type {LinearMovement} */
	this.movement = null;
};

SCamera.DEBUG_DISPLACE = 20;

SCamera.prototype.free = function() {
	this.m_world = null;
};

/**
 * @public
 */
SCamera.prototype.toggleDebugFreeMove = function() {
	this.m_freeDebugMove = !this.m_freeDebugMove;
};

/**
 * @public
 */
SCamera.prototype.updateLimits = function() {
	this.leftLimit = Math.round( this.m_world.cameraXMin * this.m_width );
	this.rightLimit = Math.round( this.m_world.cameraXMax * this.m_width );
	this.upLimit = Math.round( this.m_world.cameraYMin * this.m_height );
	this.downLimit = Math.round( this.m_world.cameraYMax * this.m_height );
};

/**
 * @public
 * @return {number}
 */
SCamera.prototype.getX = function() {
	return this.m_x;
};

/**
 * @public
 * @return {number}
 */
SCamera.prototype.getY = function() {
	return this.m_y;
};

/**
 * @public
 * @param {number} val
 */
SCamera.prototype.setX = function( val ) {
	this.m_x = val;
};

/**
 * @public
 * @param {number} val
 */
SCamera.prototype.setY = function( val ) {
	this.m_y = val;
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 */
SCamera.prototype.setPosition = function( x, y ) {
	this.m_x = x;
	this.m_y = y;
};

/**
 * @public
 * @param {boolean} value
 */
SCamera.prototype.setFixedX = function( value ) {
	this.m_fixedX = value;
};

/**
 * @public
 * @param {boolean} value
 */
SCamera.prototype.setFixedY = function( value ) {
	this.m_fixedY = value;
};

/**
 * @public
 * @param {boolean} value
 */
SCamera.prototype.setFixed = function( value ) {
	this.m_fixedX = value;
	this.m_fixedY = value;
};

/**
 * @public
 * @return {number}
 */
SCamera.prototype.scale = function() {
	return this.m_scale;
};

/**
 * @public
 * @return {number}
 */
SCamera.prototype.width = function() {
	return this.m_width;
};

/**
 * @public
 * @return {number}
 */
SCamera.prototype.height = function() {
	return this.m_height;
};

/**
 * @public
 * @param {number} value
 */
SCamera.prototype.setWidth = function( value ) {
	this.m_width = value;
};

/**
 * @public
 * @param {number} value
 */
SCamera.prototype.setHeight = function( value ) {
	this.m_height = value;
};

/**
 * @public
 * @param {number} val
 */
SCamera.prototype.setScale = function( val ) {
	this.m_scale = val;
	this.m_world.setScale( val );
};

/**
 * @public
 * @param {number} keycode
 */
SCamera.prototype.onKeyDown = function( keycode ) {
	if ( this.m_freeDebugMove ) {
		if ( keycode === Common.KEY_RIGHT ) {
			this.m_x += SCamera.DEBUG_DISPLACE;
		}
		else if ( keycode === Common.KEY_LEFT ) {
			this.m_x -= SCamera.DEBUG_DISPLACE;
		}

		if ( keycode === Common.KEY_UP ) {
			this.m_y -= SCamera.DEBUG_DISPLACE;
		}
		else if ( keycode === Common.KEY_DOWN ) {
			this.m_y += SCamera.DEBUG_DISPLACE;
		}
	}
};


/**
 * @param {number} speed
 * @param {number} x
 * @param {number} y
 * @param {Object} caller
 * @param {function(Movement)|null} endCallback
 */
SCamera.prototype.setMovement = function ( speed, x, y, caller, endCallback ) {
	this.movement = new LinearMovement( this.m_x, this.m_y, speed  );
	this.movement.gotoPosition( x - Layout.left / Layout.scale, y - Layout.top / Layout.scale );
	this.movement.setCallbacks( caller, endCallback, null );
};

SCamera.prototype.nullMovement = function () {
	if ( this.movement ) {
		this.movement.free();
		this.movement = null;
	}
};

/**
 * @public
 * @param {number} keycode
 */
SCamera.prototype.onKeyUp = function( keycode ) {

};

/**
 * @public
 * @param {number} dt
 */
SCamera.prototype.update = function( dt ) {
	if ( !this.m_freeDebugMove ) {
		if ( this.movement ) {
			this.m_x = this.movement.getX();
			this.m_y = this.movement.getY();
			this.movement.update( dt );
		}
		else {

			var updateableObject = this.m_world.actorManager().getUpdateableObject() || this.m_world.player();
			if ( updateableObject ) {
				if ( !this.m_fixedX ) {
					if ( this.m_x + this.leftLimit > updateableObject.getX() ) {
						this.m_x = updateableObject.getX() - this.leftLimit;
					}
					if ( this.m_x + this.rightLimit < updateableObject.getX() ) {
						this.m_x = updateableObject.getX() - this.rightLimit;
					}
				}
				if ( !this.m_fixedY ) {
					if ( this.m_y + this.upLimit > updateableObject.getY() ) {
						this.m_y = updateableObject.getY() - this.upLimit;
					}
					if ( this.m_y + this.downLimit < updateableObject.getY() ) {
						this.m_y = updateableObject.getY() - this.downLimit;
					}
				}
			}

		}
	}

	if ( !this.m_world.isLoop ) {
		if ( this.m_x > this.m_world.width() - this.width() ) {
			this.m_x = this.m_world.width() - this.width();
		}
		if ( this.m_x < 0 ) {
			this.m_x = 0;
		}

		if ( this.m_y > this.m_world.height() - this.height() ) {
			this.m_y = this.m_world.height() - this.height();
		}
		if ( this.m_y < 0 ) {
			this.m_y = 0;
		}
	}

	GuiGame.instance.canvasEffects.position.x = -this.m_x * Global.baseScale;
    GuiGame.instance.canvasEffects.position.y = -this.m_y * Global.baseScale;

    if ( Application.WIDE_SCREEN ) {
        GuiGame.instance.canvasEffects.position.x -= Layout.left / Layout.scale;
        GuiGame.instance.canvasEffects.position.y -= Layout.top / Layout.scale;
    }
};

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
SCamera.prototype.onDebugDraw = function( ctx ) {
	ContextGraphics.drawRectangle( ctx, 0, 0, this.width, this.height, 4,
								   Common.COLOR_RED, Common.COLOR_NONE );
};

/**
 * @constructor
 * @struct
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} normalX
 * @param {number} normalY
 */
function SCollisionPoint( positionX, positionY, normalX, normalY ) {
	/** @type {Vector2D} */
	this.position = new Vector2D( positionX, positionY );
	/** @type {Vector2D} */
	this.normal = new Vector2D( normalX, normalY );
}

SCollisionPoint.prototype.free = function() {
	this.position = null;
	this.normal = null;
};

SCollisionPoint.prototype.toString = function() {
	return "\n[COLL] " + this.position + ' ' + this.normal;
};
/**
 * @constructor
 */
function SConditionalType() {
}

SConditionalType.AND = 0;
SConditionalType.OR = 1;

/**
 * @constructor
 * @param {number} id
 * @param {Object} callbackEval
 */
function SConditional( id, callbackEval, caller ) {
	this.m_id = id;
	this.m_callbackEval = callbackEval;
	this.m_idCaller = caller;
}

SConditional.prototype.id = function() {
	return this.m_id;
};

SConditional.prototype.evalue = function() {
	return this.m_callbackEval.call( this.m_idCaller, this );
};

/**
 * @constructor
 * @param {number} type
 * @param {number=} id
 * @extends SConditional
 */
function SConditionalChecker( type, id ) {
	if ( typeof id === 'undefined' ) {
		id = -1;
	}
	SConditional.call( this, id, null, null );

	this.m_isAnd = ( type === SConditionalType.AND );
	this.m_conditions = [];
}
Application.subclass( SConditionalChecker, SConditional );

SConditionalChecker.prototype.addCondition = function( condition ) {
	this.m_conditions.push( condition );
};

/** @override */
SConditionalChecker.prototype.evalue = function() {
	var value = this.m_isAnd;

	for ( var k = 0; k < this.m_conditions.length; k++ ) {

		if ( this.m_isAnd ) {
			value = value && this.m_conditions[k].evalue();
			if ( !value ) {
				return false;
			}
		}
		else {
			value = value || this.m_conditions[k].evalue();
			if ( value ) {
				return true;
			}
		}
	}
	return value;
};
/**
 * @constructor
 */
function SNpc() {
	/**
	 * @public
	 * @type {number}
	 */
	this.id = 0;
	/**
	 * @public
	 * @type {number}
	 */
	this.x = 0.0;
	/**
	 * @public
	 * @type {number}
	 */
	this.y = 0.0;
	/**
	 * @public
	 * @type {number}
	 */
	this.kipuIndex = -1;
	/**
	 * @public
	 * @type {string}
	 */
	this.kipuName = '';
	/**
	 * @public
	 * @type {string}
	 */
	this.params = '';
	/**
	 * @public
	 * @type {Object}
	 */
	this.rawData = null;
	/**
	 * @public
	 * @type {number}
	 */
	this.layerIndex = 0;
}

SNpc.prototype.free = function() {
	this.rawData = null;
};


/**
 * @constructor
 * @struct
 * @param {SWorld} world
 */
function SNpcManager( world ) {
	/**
	 * @protected
	 * @type {SWorld}
	 */
	this.m_world = world;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_showCollisions = false;
	/**
	 * @public
	 * @type {Array.<SNpc>}
	 */
	this.m_buffer = [];
	/**
	 * @protected
	 * @type {Array.<SWorldActor|SActor>}
	 */
	this.m_actors = [];
	/**
	 * @protected
	 * @type {SWorldActor|SActor}
	 */
	this.m_player = null;
	/**
	 * @protected
	 * @type {SWorldActor|SActor}
	 */
	this.m_updateableObject = null;
}

SNpcManager.prototype.free = function() {
	var k;
	for ( k = 0; k < this.m_buffer.length; k++ ) {
		this.m_buffer[k].free();
	}
	this.m_buffer = null;
	for ( k = 0; k < this.m_actors.length; k++ ) {
		this.m_actors[k].free();
		this.m_actors[k] = null;
	}
	this.m_actors = null;
	this.m_world = null;
};

/**
 * @public
 * @return {boolean}
 */
SNpcManager.prototype.collisionsOn = function() {
	return this.m_showCollisions;
};

/**
 * @public
 * @return {Array.<SWorldActor>}
 */
SNpcManager.prototype.getActors = function() {
	return this.m_actors;
};

/**
 * @public
 * @param {SWorldActor|SActor} player
 */
SNpcManager.prototype.init = function( player ) {
};

/**
 * @public
 * @param {boolean} show
 */
SNpcManager.prototype.showCollision = function( show ) {
	this.m_showCollisions = show;
};

/**
 * @public
 * @param {SNpc} object
 */
SNpcManager.prototype.addNpc = function( object ) {
	this.m_buffer.push( object );
};

/**
 * @public
 * @param {SWorldActor|SActor} actor
 */
SNpcManager.prototype.add = function( actor ) {
	actor.setManager( this );
	this.m_actors.push( actor );
	return actor;
};

/**
 * @public
 * @param {SWorldActor|SActor} obj
 */
SNpcManager.prototype.setUpdateableObject = function( obj ) {
	this.m_updateableObject = obj;
};

/**
 * @public
 * @return {SWorldActor|SActor}
 */
SNpcManager.prototype.getUpdateableObject = function() {
	return this.m_updateableObject;
};

/**
 * @public
 */
SNpcManager.prototype.saveData = function() {
	if ( this.m_player !== null ) {
		this.m_player.saveData();
	}

	for ( var k = this.m_actors.length - 1; k >= 0; k-- ) {
		if ( this.m_actors[k] ) {
			this.m_actors[k].saveData();
		}
	}
};

/**
 * @public
 * @param {number} dt
 */
SNpcManager.prototype.update = function( dt ) {
	for ( var k = 0; k < this.m_actors.length; k++ ) {
		if ( this.m_actors[k].isAwaitingDelete() ) {
			this.m_actors[k].free();
			this.m_actors[k] = null;
			this.m_actors.splice( k--, 1 );
		}
		else {
			if ( !this.m_actors[k].isRangeControlled() ) {
				this.m_actors[k].update( dt );
			}
			else {
				if ( !this.m_actors[k].isInCamera() ) {
					if ( !this.m_actors[k].isIdle() ) {
						this.m_actors[k].onIdle( true );
					}
					if ( this.m_actors[k].movementUpdate ) {
						this.m_actors[k].movementUpdate( dt );
					}
					if ( this.m_actors[k].validateSoundLoop ) {
						this.m_actors[k].validateSoundLoop();
					}
				}
				else {
					if ( this.m_actors[k].isIdle() ) {
						this.m_actors[k].onIdle( false );
					}
					this.m_actors[k].update( dt );
				}
			}
		}
	}
};

/**
 * @public
 */
SNpcManager.prototype.fixGameScale = function() {

};

/**
 * @public
 * @param {number} id
 * @return {SWorldActor|SActor}
 */
SNpcManager.prototype.getActorByUniqueID = function( id ) {
	for ( var i = 0; i < this.m_actors.length; ++i ) {
		if ( this.m_actors[i].uniqueId() === id ) {
			return this.m_actors[i];
		}
	}

	return null;
};


/** @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx */
SNpcManager.prototype.onDebugDraw = function( ctx ) {
	for ( var k = 0; k < this.m_actors.length; k++ ) {
		this.m_actors[k].onDebugDraw( ctx );
	}
};

/**
 * @constructor
 * @struct
 * @param {SDisplayObjectContainer} canvas
 * @param {SGame} game
 */
function SWorld( canvas, game ) {
	/** @type {number} */
	this.playerInitX = 0;
	/** @type {number} */
	this.playerInitY = 0;
	/** @type {boolean} */
	this.showCollisions = false;
	/** @type {number} */
	this.cameraWidth = 0;
	/** @type {number} */
	this.cameraHeight = 0;
	/** @type {number} */
	this.cameraScreenX = 0;
	/** @type {number} */
	this.cameraScreenY = 0;
	/** @type {number} */
	this.cameraYMax = 0.0;
	/** @type {number} */
	this.cameraYMin = 0.0;
	/** @type {number} */
	this.cameraXMax = 0.0;
	/** @type {number} */
	this.cameraXMin = 0.0;
	/** @type {number} */
	this.cameraInitX = 0;
	/** @type {number} */
	this.cameraInitY = 0;
	/** @type {number} */
	this.cameraInitWidth = 0;
	/** @type {number} */
	this.cameraInitHeight = 0;
	/** @type {boolean} */
	this.useEmbeddedAssets = false;

	/** @type {number} */
	this.m_rangeTilesBelow = 0;
	/** @type {number} */
	this.m_width = 0;
	/** @type {number} */
	this.m_height = 0;
	/** @type {number} */
	this.m_pointX = 0;
	/** @type {number} */
	this.m_pointY = 0;

	/** @type {SGame} */
	this.m_game = game;
	/** @type {Array.<SWorldBaseLayer>} */
	this.m_layers = [];
	/** @type {SDisplayObjectContainer} */
	this.m_playerCanvas = null;
	/** @type {Array.<SDisplayObjectContainer>} */
	this.m_objectsCanvas = [];
	/** @type {SWorldActor|SActor} */
	this.m_player = null;

	/** @type {Object} */
	this.m_layerNames = {};
	/** @type {SWorldCollisionLayer} */
	this.m_collisions = null;
	/** @type {SCamera} */
	this.m_camera = null;
	/** @type {SNpcManager} */
	this.m_actorManager = null;
	/** @type {Object} */
	this.m_worldData = null;
	/** @type {Object} */
	this.m_mapWords = null;
	/** @type {SWorldMarkerLayer} */
	this.m_markers = null;
	/** @type {SDisplayObjectContainer} */
	this.canvas = canvas;
	/** @type {Object} */
	this.m_mapPaths = {};
	/** @type {boolean} */
	this.dirtyCollisionMatrix = false;
	/** @type {boolean} */
	this.isLoop = false;
	/** @type {boolean} */
	this.usePhysicCollision = false;
}

/** @type {string} */SWorld.LAYER_EFFECTS_NAME = 'effects';

SWorld.prototype.free = function() {
	Application.externalTrack( 'Level End' );
	if ( this.m_player !== null ) {
		this.m_player.free();
	}
	if ( this.m_actorManager !== null ) {
		this.m_actorManager.free();
	}
	if ( this.m_playerCanvas !== this.m_objectsCanvas[0] ) {
		this.canvas.removeChild( this.m_playerCanvas );
	}
	for ( var k = this.m_objectsCanvas.length - 1; k >= 0; k-- ) {
		this.canvas.removeChild( this.m_objectsCanvas[k] );
	}
	if ( this.m_camera !== null ) {
		this.m_camera.free();
	}
	for ( var k = 0; k < this.m_layers.length; k++ ) {
		this.m_layers[k].free();
		this.m_layers[k] = null;
	}

	this.m_game = null;
	this.m_layers = null;
	this.m_markers = null;
	this.m_playerCanvas = null;
	this.m_objectsCanvas = null;
	this.m_player = null;
	this.m_layerNames = null;
	this.m_collisions = null;
	this.m_camera = null;
	this.m_actorManager = null;
	this.m_worldData = null;
	this.m_mapWords = null;
	this.canvas = null;
};

SWorld.prototype.showPhysicZone = function( type, x, y, width, height ) {
};

/** @const {number} */ SWorld.MAX_SCAN_FLOOR = 750;

SWorld.prototype.scaleWorld = function() {
	if ( Application.WIDE_SCREEN ) {
		if ( Layout.left !== 0 ) {
			this.m_camera.setWidth( Math.floor( ( this.cameraWidth + ( 2 * Layout.left / Layout.scale ) ) / Global.baseScale ) );
			this.m_camera.setHeight( Math.floor( this.cameraHeight / Global.baseScale ) );
		}
		else if ( Layout.top !== 0 ) {
			this.m_camera.setWidth( Math.floor( this.cameraWidth / Global.baseScale ) );
			this.m_camera.setHeight( Math.floor( ( this.cameraHeight + ( 2 * Layout.top / Layout.scale ) ) / Global.baseScale ) );
		}
		else {
			this.m_camera.setWidth( Math.floor( this.cameraWidth / Global.baseScale ) );
			this.m_camera.setHeight( Math.floor( this.cameraHeight / Global.baseScale ) );
		}
	}
	else {
		this.m_camera.setWidth( Math.floor( this.cameraWidth / Global.baseScale ) );
		this.m_camera.setHeight( Math.floor( this.cameraHeight / Global.baseScale ) );
	}
	this.m_camera.updateLimits();
	if ( this.m_actorManager !== null ) {
		this.m_actorManager.fixGameScale();
	}
};

SWorld.prototype.game = function() {
	return this.m_game;
};

SWorld.prototype.setScale = function( scale ) {
};

SWorld.prototype.setX = function( x ) {
	for ( var k = 0; k < this.m_layers.length; k++ ) {
		this.m_layers[k].setX( x );
	}
};

SWorld.prototype.setY = function( y ) {
	for ( var k = 0; k < this.m_layers.length; k++ ) {
		this.m_layers[k].setY( y );
	}
};

SWorld.prototype.objectCanvas = function() {
	return this.m_objectsCanvas[0];
};

SWorld.prototype.player = function() {
	return this.m_player;
};

SWorld.prototype.camera = function() {
	return this.m_camera;
};

SWorld.prototype.width = function() {
	return this.m_width;
};

SWorld.prototype.height = function() {
	return this.m_height;
};

SWorld.prototype.tileWidth = function() {
	return this.m_collisions.tileWidth();
};

SWorld.prototype.tileHeight = function() {
	return this.m_collisions.tileHeight();
};

/** @return {SNpcManager} */
SWorld.prototype.actorManager = function() {
	return this.m_actorManager;
};

SWorld.prototype.getLayer = function( name ) {
	return this.m_layerNames[name];
};

/**
 * @public
 * @param {string} worldFile
 * @param {Object=} generalFile
 */
SWorld.prototype.onCreate = function( worldFile, generalFile ) {
	this.m_worldData = window[worldFile];
	this.m_mapWords = this.m_worldData['mapWords'];
	var data = this.m_worldData['properties'];
	this.m_width = this.getData( data, 'width' );
	this.m_height = this.getData( data, 'height' );
	this.showCollisions = ( this.getData( data, 'showCollisions' ) === 1 );
	if ( Application.instance.isMobileDevice ) { this.showCollisions = false; }
	this.playerInitX = this.getData( data, 'playerX' );
	this.playerInitY = this.getData( data, 'playerY' );
	this.cameraInitWidth = this.cameraWidth = this.getData( data, 'cameraWidth' );
	this.cameraInitHeight = this.cameraHeight = this.getData( data, 'cameraHeight' );
	if ( this.cameraWidth <= 0 ) {
		this.cameraWidth = Application.APP_WIDTH;
	}
	if ( this.cameraHeight <= 0 ) {
		this.cameraHeight = Application.APP_HEIGHT;
	}
	this.cameraScreenX = this.getData( data, 'cameraScreenX' );
	this.cameraScreenY = this.getData( data, 'cameraScreenY' );
	this.cameraYMax = this.getData( data, 'cameraYMax' );
	this.cameraYMin = this.getData( data, 'cameraYMin' );
	this.cameraXMax = this.getData( data, 'cameraXMax' );
	this.cameraXMin = this.getData( data, 'cameraXMin' );
	this.useEmbeddedAssets = this.getData( data, 'useEmbeddedAssets' );
	this.usePhysicCollision = ( this.getOptionalData( data, 'usePhysicCollision', 0 ) === 1 );
	this.isLoop = ( this.getOptionalData( data, 'isLoop', 0 ) === 1 );

	this.createCamera();
	this.createNpcManagers();
	this.createLayers();
};

/**
 * @protected
 */
SWorld.prototype.createCamera = function() {
	this.m_camera = new SCamera( this, this.cameraWidth, this.cameraHeight,
								 this.cameraScreenX, this.cameraScreenY );

	var offset = 100;
	if ( this.m_width <= this.cameraWidth + offset ) {
		this.m_camera.setFixedX( true );
		this.m_camera.setX( 0 );
	}
	if ( this.m_height <= this.cameraHeight + offset ) {
		this.m_camera.setFixedY( true );
		this.m_camera.setY( 0 );
	}
	this.scaleWorld();
};

/**
 * @protected
 */
SWorld.prototype.createNpcManagers = function() {
};

/**
 * @protected
 * @param {Object} dataNpc
 */
SWorld.prototype.addNpc = function( dataNpc ) {
	var npc = new SNpc();
	npc.id = dataNpc['id'];
	npc.x = dataNpc['x'];
	npc.y = dataNpc['y'];
	npc.params = dataNpc['params'];
	npc.rawData = dataNpc;
	this.m_actorManager.addNpc( npc );
};

/**
 * @protected
 */
SWorld.prototype.createLayers = function() {
	this.m_layerNames = {};

	var i = 0;
	var temp = this.m_worldData['layerTypes'];
	for ( i = 0; i < temp.length; i++ ) {
		this.addLayer( temp[i]['type'], temp[i] );
	}

	if ( this.m_playerCanvas === null ) {
		this.m_playerCanvas = this.m_objectsCanvas[0];
	}

	if ( !this.m_layerNames[SWorld.LAYER_EFFECTS_NAME] ) {
		var container = new SWorldContainerLayer( this, {} );
		this.m_layerNames[SWorld.LAYER_EFFECTS_NAME] = container;
		this.m_layers.push( container );
	}
	this.m_worldData = null;

	var npcsBuffers = this.m_actorManager.m_buffer;
	var npcClones = [];
	for ( i = 0; i < npcsBuffers.length; i++ ) {
		var clones = EDIUtils.checkNpcToClone( npcsBuffers[i], this );
		if ( clones ) {
			npcClones = npcClones.concat( clones );
			npcsBuffers.splice( i, 1 );
			i--;
		}
	}
	this.m_actorManager.m_buffer = npcsBuffers.concat( npcClones );
};

/**
 * @protected
 * @param {SWorldBaseLayer} layer
 */
SWorld.prototype.registerLayer = function( layer ) {
	if ( this.m_layerNames[layer.name()] ) {
		Application.error( 'Layer with name [' + layer.name() + '] is duplicate please rename layer in EDI' );
	}
	this.m_layerNames[layer.name()] = layer;
	this.m_layers.push( layer );
};

/**
 * @protected
 * @param {string} type
 * @param {Object} node
 */
SWorld.prototype.addLayer = function( type, node ) {
	var i = 0;
	var k = 0;
	var layer = null;
	if ( type === SWorldBaseLayer.ID_OBJECTS ) {
		layer = new SWorldContainerLayer( this, node );
		this.registerLayer( layer );
		this.m_objectsCanvas.push( layer.canvas() );

		var objects = node['object'];
		objects['layerIndex'] = this.m_objectsCanvas.length - 1;

		for ( i = 0; i < objects.length; i++ ) {
			var object = {};
			for ( k = 0; k < objects[i].length; k += 2 ) {
				if ( objects[i][k] >= 0 ) {
					object[this.m_mapWords[objects[i][k]]] = objects[i][k + 1];
				}
				else {
					object[this.m_mapWords[-objects[i][k]]] = this.m_mapWords[objects[i][k + 1]];
				}
			}
			this.addNpc( object );
		}
	}
	else if ( type === SWorldBaseLayer.ID_SPRITES ) {
		layer = new SWorldSpriteLayer( this, node );
		this.registerLayer( layer );
	}
	else if ( type === SWorldBaseLayer.ID_PLAYER ) {
		layer = new SWorldContainerLayer( this, node );
		this.m_playerCanvas = layer.canvas();
		this.registerLayer( layer );
	}
	else if ( type === SWorldBaseLayer.ID_MARKERS ) {
		if ( this.m_markers === null ) {
			this.m_markers = new SWorldMarkerLayer( this, node );
			this.m_layers.push( this.m_markers );
		}
		else {
			this.m_markers.loadData( node );
		}
	}
	else if ( type === SWorldBaseLayer.ID_PATHS ) {
		for ( k = 0; k <= node['object'].length; k++ ) {
			if ( node['object'][k] ) {
				var id = node['object'][k]['id'];
				if ( this.m_mapPaths[id] ) {
					Application.error( 'Path id [' +  id + '] is duplicated' );
				}
				this.m_mapPaths[id] = node['object'][k];
			}
		}
	}
	else if ( type === SWorldBaseLayer.ID_COLLISIONS ) {
		this.m_collisions = new SWorldCollisionLayer( this, node );
		this.registerLayer( this.m_collisions );
		this.m_rangeTilesBelow = 2 * this.m_collisions.tileHeight();

	}
	else if ( type === SWorldBaseLayer.ID_CONTAINER ) {
		layer = new SWorldContainerLayer( this, node );
		this.registerLayer( layer );
	}
	else {
		layer = new SWorldTileLayer( this, node, true );
		this.registerLayer( layer );
	}
};

/**
 * @public
 * @param {number|string} id
 * @return {Object|null}
 */
SWorld.prototype.getPath = function( id ) {
	id = ( typeof id === 'string' ? parseInt( id, 10 ) : id );
	return EDIUtils.getPointsFromShape( this.m_mapPaths[id] ) || null;
};

/**
 * @public
 * @param {SWorldActor} actor
 */
SWorld.prototype.checkZones = function( actor ) {
	if ( this.m_markers !== null && actor && actor.getBounds() ) {
		var length = this.m_markers.actionZones.length;
		for ( var k = 0; k < length; k++ ) {
			var zone = this.m_markers.actionZones[k];
			if ( zone.ignore ) { continue; }
			var bounds = actor.getBounds().clone();
			bounds.x += actor.getX();
			bounds.y += actor.getY();
			if ( bounds !== null &&
				 zone.intersectRect( bounds ) ) {
				if ( !zone.active ) {
					zone.active = true;
					actor.onEnterZone( zone );
				}
			}
			else {
				if ( zone.active ) {
					zone.active = false;
					actor.onLeaveZone( zone );
				}
			}
		}
	}
};

/**
 * @param {number} id
 * @param {boolean} value
 */
SWorld.prototype.setIgnoreZone = function( id, value ) {
	if ( this.m_markers !== null ) {
		var length = this.m_markers.actionZones.length;
		for ( var k = 0; k < length; k++ ) {
			var zone = this.m_markers.actionZones[k];
			if ( zone.id === id ) {
				zone.ignore = value;
				return;
			}
		}
	}
};

/**
 * Create Effect Animo or Nano
 * @param {string} name
 * @param {number} x in the world
 * @param {number} y in the world
 * @param {number=} loops ( default "1", if is bucle infinite setAttribute "0"  )
 * @param {SDisplayObjectContainer=} canvas
 * @return {SEffect}
 */
SWorld.prototype.createEffect = function( name, x, y, loops, canvas ) {
	var fx = Application.instance.effectManager.createEffect(
		name, x, y,
		canvas || this.getLayer( SWorld.LAYER_EFFECTS_NAME ).canvas(),
		loops );
	return fx;
};

/**
 * @protected
 */
SWorld.prototype.init = function() {
	this.setX( this.m_camera.screenX );
	this.setY( this.m_camera.screenY );
	for ( var k = 0; k < this.m_layers.length; k++ ) {
		this.m_layers[k].init();
	}
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
SWorld.prototype.getTileBelow = function( x, y ) {
	if ( this.m_collisions !== null ) {
		return this.m_collisions.getTileBelow( x, y, this.m_rangeTilesBelow );
	}
	Application.error( 'getTileBelow: no collisions' );
	return SWorldCollisionLayer.CELL_EMPTY;
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @return {Vector2D}
 */
SWorld.prototype.getFloorCollision = function( x, y ) {
	if ( this.m_collisions !== null ) {
		return this.m_collisions.getFloorCollision( x, y );
	}
	Application.error( 'getFloorCollision: no collisions' );
	return new Vector2D( x, y );
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {number=} max
 * @return {Rectangle}
 */
SWorld.prototype.getMaxFloorRange = function( x, y, max ) {
	if ( this.m_collisions !== null ) {
		if ( typeof max === 'undefined' ) {
			max = SWorld.MAX_SCAN_FLOOR;
		}
		return this.m_collisions.getMaxFloorRange( x, y, max );
	}
	Application.error( 'getMaxFloorRange: no collisions' );
	return new Rectangle( x, y );
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {number=} max
 * @return {Rectangle}
 */
SWorld.prototype.getMaxFloorRangeElevations = function( x, y, max ) {
	if ( this.m_collisions !== null ) {
		if ( typeof max === 'undefined' ) {
			max = SWorld.MAX_SCAN_FLOOR;
		}
		return this.m_collisions.getMaxFloorRangeElevations( x, y, max );
	}
	Application.error( 'getMaxFloorRangeElevations: no collisions' );
	return new Rectangle( x, y );
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {Vector2D} dir
 * @param {number} range
 * @return {Vector2D}
 */
SWorld.prototype.getRayCollision = function( x, y, dir, range ) {
	if ( this.m_collisions !== null ) {
		return this.m_collisions.getRayCollision( x, y, dir, range );
	}
	Application.error( 'getRayCollision: no collisions' );
	return null;
};

/**
 * @public
 * @param {number=} index
 * @return {SDisplayObjectContainer}
 */
SWorld.prototype.objectsCanvas = function( index ) {
	index = typeof index !== 'undefined' ? index : 0;
	return this.m_objectsCanvas[index];
};

SWorld.prototype.showCollision = function( show ) {
	if ( this.m_collisions ) {
		this.m_collisions.setVisible( show );
	}
};

SWorld.prototype.refreshCollision = function() {
};

SWorld.prototype.setCollisionCell = function( x, y, cell ) {
	this.m_collisions.setCell( x, y, cell );
};

SWorld.prototype.getTilePosition = function( x, y ) {
	return this.m_collisions.getTilePosition( x, y );
};

/**
 * @param {number} leftUpX
 * @param {number} leftUpY
 * @param {number} bottomRightX
 * @param {number} bottomRightY
 * @param {number} typeCell
 * @param {boolean} refresh
 */
SWorld.prototype.setRangeCollisionCell = function( leftUpX, leftUpY, bottomRightX, bottomRightY, typeCell, refresh ) {
	for ( var x = leftUpX; x <= bottomRightX; x++ ) {
		for ( var y = leftUpY; y <= bottomRightY; y++ ) {
			this.setCollisionCell( x, y, typeCell );
		}
	}
	if ( refresh ) {
		this.refreshCollision();
	}
};

SWorld.prototype.getCellInPosition = function( x, y ) {
	return this.m_collisions.getCellInPosition( x, y );
};

SWorld.prototype.getCell = function( col, row ) {
	return this.m_collisions.getCell( col, row );
};

/**
 * @param {SWorldActor} actor
 */
SWorld.prototype.checkWorldBoundaries = function( actor ) {

	/** @type {Rectangle} */
	var actorBounds = null;

	actorBounds = actor.bounds();

	if ( actorBounds !== null ) {
		if ( actor.limitLeft() && actor.getX() + actorBounds.left() < this.m_collisions.tileWidth() ) {
			actor.setX( this.m_collisions.tileWidth() - actorBounds.left() );
		}
		if ( actor.limitRight() && actor.getX() + actorBounds.right() > this.m_width - this.m_collisions.tileWidth() ) {
			actor.setX( this.m_width - this.m_collisions.tileWidth() - actorBounds.right() );
		}
		if ( actor.limitUp() && actor.getY() + actorBounds.top() <= 0 ) {
			actor.setY( -actorBounds.top() );
		}
		if ( actor.limitBottom() && actor.getY() + actorBounds.bottom() >= this.m_height ) {
			actor.setY( this.m_height - actorBounds.bottom() );
		}
	}
};

/**
 * @public
 * @param {SWorldActor} actor
 * @return {Vector2D}
 */
SWorld.prototype.checkCollision = function( actor ) {
	/** @type {Vector2D} */
	var collision = new Vector2D( 0, 0 );
	var corners = actor.corners();
	if ( corners !== null ) {
		var overPlatform = false;
		for ( var k = 0; k < corners.length; k++ ) {
			if ( corners[k] ) {
				var collisionPoint = corners[k];
				this.m_pointX = ~~( actor.getX() + collisionPoint.position.x );
				this.m_pointY = ~~( actor.getY() + collisionPoint.position.y );
				var coll = this.m_collisions.checkCollision( this.m_pointX, this.m_pointY, collisionPoint.normal, actor );
				if ( coll ) {
					if ( collision.x == 0 && coll.x != 0 ) {
						collision.x += coll.x;
					}
					if ( collision.y == 0 && coll.y != 0 ) {
						collision.y += coll.y;
					}
				}
				if ( !overPlatform ) {
					coll = this.m_collisions.checkPlatforms( this.m_pointX, this.m_pointY, collisionPoint.normal, actor );
					if ( coll ) {
						overPlatform = true;
						if ( collision.x == 0 && coll.x != 0 ) {
							collision.x += coll.x;
						}
						if ( collision.y == 0 && coll.y != 0 ) {
							collision.y += coll.y;
						}
					}
				}
				if ( ( collision.x !== 0 ) && ( collision.y !== 0 ) ) {
					break;
				}
			}
		}
		corners = null;
		if ( ( collision.y ) !== 0 || ( collision.x !== 0 ) ) {
			return collision;
		}
		return null;
	}
	return null;
};

SWorld.prototype.update = function( dt ) {
	var k;
	this.m_camera.update( dt );
	this.m_actorManager.update( dt );
	for ( k = 0; k < this.m_layers.length; k++ ) {
		if ( this.m_layers[k].visible() ) {
			this.m_layers[k].render( dt );
		}
	}

	if ( this.m_player ) {
		this.m_player.update( dt );
	}

};

/**
 * @public
 * @param {MobilePlatform} platform
 */
SWorld.prototype.addMobilePlatform = function( platform ) {
	this.m_collisions.addMobilePlatform( platform );
};

SWorld.prototype.getData = function( data, dataName ) {
	if ( data === null ) {
		Application.error( 'World:: data is null' );
	}
	else if ( dataName === null ) {
		Application.error( 'World:: data is null: ' + dataName )
	}
	else if ( typeof data[dataName] !== 'undefined' ) {
		return data[dataName];
	}
	else {
		Application.error( 'Property [' + dataName + '] in EDI Map not found' );
	}
};

SWorld.prototype.getOptionalData = function( data, dataName, defaultVal ) {
	if ( typeof data === 'undefined' ) {
		Application.error( 'World:: data is undefined' );
	}
	else if ( typeof dataName === 'undefined' ) {
		Application.error( 'World:: data is undefined: ' + dataName )
	}
	else if ( typeof data[dataName] !== 'undefined' ) {
		return data[dataName];
	}
	else {
		Application.warn( 'Optional property not found: ' + dataName + ' using: ' + defaultVal );
		return defaultVal;
	}
};


/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
SWorld.prototype.onDebugDraw = function( ctx ) {
	if ( this.m_player ) {
		this.m_player.onDebugDraw( ctx );
	}
	this.m_actorManager.onDebugDraw( ctx );
	this.m_camera.onDebugDraw( ctx );
};

/**
 * @constructor
 * @struct
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {string=} clipName
 * @extends DebugObject
 */
function SWorldActor( canvas, world, x, y, clipName ) {
	/**
	 * @protected
	 * @type {string}
	 */
	this.m_state = '';
	/**
	 * @protected
	 * @type {string}
	 */
	this.m_skin = '';
	/**
	 * @protected
	 * @type {string}
	 */
	this.m_className = 'SWorldActor';
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_x = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_oldX = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_oldY = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_y = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_depth = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_uniqueId = -1;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_health = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_magic = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_scale = 1;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_scaleX = 1;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_scaleY = 1;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_indexCornersArray = 0;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_isIdle = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_isVehicle = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_limitBottom = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_limitUp = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_limitLeft = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_limitRight = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_flipX = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_clipLookingRight = true;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_isAwaitingDelete = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_isRangeControlled = true;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_isFallingOverWall = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_climbEnabled = false;

	/**
	 * @protected
	 * @type {Vector2D}
	 */
	this.m_speed = new Vector2D();
	/**
	 * @protected
	 * @type {Rectangle}
	 */
	this.m_bounds = null;
	/**
	 * @protected
	 * @type {Rectangle}
	 */
	this.m_boundsAttack = null;
	/**
	 * @protected
	 * @type {Animation|SSprite}
	 */
	this.m_clip = null;
	/**
	 * @protected
	 * @type {Array.<Array.<SCollisionPoint>>}
	 */
	this.m_cornersArray = [];
	/**
	 * @protected
	 * @type {Array.<SCollisionPoint>}
	 */
	this.m_corners = null;
	/**
	 * @protected
	 * @type {Object}
	 */
	this.pathPosition = null;
	/**
	 * @protected
	 * @type {Character}
	 */
	this.m_character = null;
	/**
	 * @protected
	 * @type {MobileObject}
	 */
	this.m_vehicle = null;
	/**
	 * @protected
	 * @type {SNpcManager}
	 */
	this.m_manager = null;
	/**
	 * @protected
	 * @type {SActorControl}
	 */
	this.m_control = null;
	/**
	 * @protected
	 * @type {SDisplayObjectContainer}
	 */
	this.m_canvas = canvas;
	/**
	 * @protected
	 * @type {SWorld}
	 */
	this.m_world = world;
	/**
	 * @protected
	 * @type {Movement}
	 */
	this.m_movement = null;
	/**
	 * @protected
	 * @type {Object}
	 */
	this.m_config = null;

	/** @type {Animation} */
	this.clipShadow = null;

	/**
	 * @protected
	 * @type {number}
	 */
	this.m_impulseX = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_impulseY = 0;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_continuousCollisionDetection = false;

	/** @type {PointsMovement} */
	this.movementToPoints = null;

	this.setActorClip( clipName );
	this.setPosition( x, y );
	DebugObject.call( this );
}
Application.subclass( SWorldActor, DebugObject );

SWorldActor.prototype.free = function() {
	DebugObject.prototype.free.call( this );

	if ( this.clipShadow ) {
        this.m_world.getLayer( 'shadows' ).canvas().removeChild( this.clipShadow );
        this.clipShadow = null;
    }

	if ( this.m_cornersArray !== null ) {
		for ( var i = 0; i < this.m_cornersArray.length; i++ ) {
			this.m_cornersArray[i] = null;
		}
	}

	if ( this.m_corners !== null ) {
		for ( var i = this.m_corners.length - 1; i >= 0; i-- ) {
			if ( this.m_corners[i] !== null ) {
				this.m_corners.splice( i, 1 )[0].free();
			}
		}
	}

	if ( this.m_character !== null ) {
		this.m_character.free();
		this.m_character = null;
		this.m_clip = null;
	}

	if ( this.m_clip !== null ) {
		this.m_clip.free();
		this.m_canvas.removeChild( this.m_clip );
		this.m_clip = null;
	}

	if ( this.m_control !== null ) {
		this.m_control.free();
		this.m_control = null;
	}

	if ( this.m_movement !== null ) {
		this.m_movement.free();
		this.m_movement = null;
	}

	if ( this.movementToPoints ) {
		this.movementToPoints.free();
		this.movementToPoints = null;
	}

	this.m_config = null;
	this.m_speed = null;
	this.m_bounds = null;
	this.m_boundsAttack = null;
	this.m_cornersArray = null;
	this.pathPosition = null;
	this.m_corners = null;
	this.m_vehicle = null;
	this.m_manager = null;
	this.m_canvas = null;
	this.m_world = null;
};

/** @const {number} */ SWorldActor.ID_UNUSED = -1;

/**
 * @public
 * @return {string}
 */
SWorldActor.prototype.getClassName = function() {
	return this.m_className;
};

/**
 * @public
 * @return {number}
 */
SWorldActor.prototype.getHealth = function() {
	return this.m_health;
};

/**
 * @public
 * @param {number} value
 */
SWorldActor.prototype.setHealth = function( value ) {
	this.m_health = value;
};

/**
 * @public
 * @return {boolean}
 */
SWorldActor.prototype.isAwaitingDelete = function() {
	return this.m_isAwaitingDelete;
};

/**
 * @public
 * @return {boolean}
 */
SWorldActor.prototype.isRangeControlled = function() {
	return this.m_isRangeControlled;
};

/**
 * @public
 * @return {boolean}
 */
SWorldActor.prototype.isFallingOverWall = function() {
	return this.m_isFallingOverWall;
};

/**
 * @public
 * @return {SWorldActor}
 */
SWorldActor.prototype.vehicle = function() {
	return this.m_vehicle;
};

/**
 * @public
 * @return {boolean}
 */
SWorldActor.prototype.isVehicle = function() {
	return this.m_isVehicle;
};

/**
 * @public
 * @param {boolean} value
 */
SWorldActor.prototype.setAwaitingDelete = function( value ) {
	this.m_isAwaitingDelete = value;
};

/**
 * @public
 * @param {boolean} value
 */
SWorldActor.prototype.setRangeControlled = function( value ) {
	this.m_isRangeControlled = value;
};

/**
 * @public
 * @param {boolean} value
 */
SWorldActor.prototype.setFallingOverWall = function( value ) {
	this.m_isFallingOverWall = value;
};

/**
 * @public
 * @param {MobileObject} value
 */
SWorldActor.prototype.setVehicle = function( value ) {
	this.m_vehicle = value;
};

/**
 * @public
 * @param {SNpcManager} value
 */
SWorldActor.prototype.setManager = function( value ) {
	this.m_manager = value;
};

/**
 * @public
 * @return {Animation|SSprite}
 */
SWorldActor.prototype.clip = function() {
	return this.m_clip;
};

/**
 * @public
 * @return {Rectangle}
 */
SWorldActor.prototype.bounds = function() {
	return this.m_bounds;
};

/**
 * @public
 * @return {Vector2D}
 */
SWorldActor.prototype.speed = function() {
	return this.m_speed;
};

/**
 * @public
 * @return {SWorld}
 */
SWorldActor.prototype.world = function() {
	return this.m_world;
};

/**
 * @public
 * @return {SActorControl}
 */
SWorldActor.prototype.control = function() {
	return this.m_control;
};

/**
 * @public
 * @return {boolean}
 */
SWorldActor.prototype.limitBottom = function() {
	return this.m_limitBottom;
};

/**
 * @public
 * @return {boolean}
 */
SWorldActor.prototype.limitUp = function() {
	return this.m_limitUp;
};

/**
 * @public
 * @return {boolean}
 */
SWorldActor.prototype.limitLeft = function() {
	return this.m_limitLeft;
};

/**
 * @public
 * @return {boolean}
 */
SWorldActor.prototype.limitRight = function() {
	return this.m_limitRight;
};

/**
 * @public
 * @return {boolean}
 */
SWorldActor.prototype.isIdle = function() {
	return this.m_isIdle;
};

/**
 * @public
 * @return {number}
 */
SWorldActor.prototype.depth = function() {
	return this.m_depth;
};

/**
 * @public
 * @return {number}
 */
SWorldActor.prototype.scale = function() {
	return this.m_scale;
};

/**
 * @public
 * @return {number}
 */
SWorldActor.prototype.magic = function() {
	return this.m_magic;
};

/**
 * @public
 * @return {number}
 */
SWorldActor.prototype.getOldX = function() {
	return this.m_oldX;
};

/**
 * @public
 * @param {number} val
 */
SWorldActor.prototype.setX = function( val ) {
	this.m_x = val;
};

/**
 * @public
 * @param {number} val
 */
SWorldActor.prototype.setY = function( val ) {
	this.m_y = val;
};

/**
 * @public
 * @param {number} val
 */
SWorldActor.prototype.setOldX = function( val ) {
	this.m_oldX = val;
};

/**
 * @public
 * @param {number} val
 */
SWorldActor.prototype.setOldY = function( val ) {
	this.m_oldY = val;
};

/**
 * @public
 * @return {number}
 */
SWorldActor.prototype.getOldY = function() {
	return this.m_oldY;
};

/**
 * @public
 * @return {number}
 */
SWorldActor.prototype.getX = function() {
	return this.m_x;
};

/**
 * @public
 * @return {number}
 */
SWorldActor.prototype.getY = function() {
	return this.m_y;
};

/**
 * @public
 * @return {number}
 */
SWorldActor.prototype.uniqueId = function() {
	return this.m_uniqueId;
};

/**
 * @public
 * @return {boolean}
 */
SWorldActor.prototype.flipX = function() {
	return this.m_flipX;
};

/**
 * @public
 * @return {SDisplayObjectContainer}
 */
SWorldActor.prototype.canvas = function() {
	return this.m_canvas;
};

/**
 * @public
 * @param {number} damage
 * @param {SWorldActor=} source
 * @param {number=} px
 * @param {number=} py
 * @return {boolean}
 */
SWorldActor.prototype.onHit = function( damage, source, px, py ) {
	return false;
};

/**
 * @public
 * @return {string}
 */
SWorldActor.prototype.state = function() {
	return this.m_state;
};

/**
 * @public
 * @return {Character}
 */
SWorldActor.prototype.character = function() {
	return this.m_character;
};

/**
 * @public
 * @param {SEdiZone} zone
 */
SWorldActor.prototype.onEnterZone = function( zone ) {
	if ( zone.type === SEdiZone.CLIMB ) {
		this.m_climbEnabled = true;
	}
};

/**
 * @public
 * @param {SEdiZone} zone
 */
SWorldActor.prototype.onLeaveZone = function( zone ) {
	if ( zone.type === SEdiZone.CLIMB ) {
		this.m_climbEnabled = false;
	}
};

/**
 * @public
 * @param {string=} clipName
 */
SWorldActor.prototype.setActorClip = function( clipName ) {
	if ( typeof clipName !== 'undefined' ) {
		this.m_clip = Application.instance.getClip( clipName );
		this.m_clip.position.x = this.m_x;
		this.m_clip.position.y = this.m_y;
		this.m_canvas.addChild( this.m_clip );
		this.createCorners();
	}
};

/**
 * @public
 * @param {string} nameClip
 */
SWorldActor.prototype.createShadow = function( nameClip ) {
	if ( this.clipShadow ) { return; }
	var layer = this.m_world.getLayer( 'shadows' );
	if ( layer ) {
		this.clipShadow = Application.instance.getAnimation( nameClip );
		layer.canvas().addChild( this.clipShadow );
	}
};

SWorldActor.prototype.destroyShadow = function () {
	if ( this.clipShadow ) {
        this.m_world.getLayer( 'shadows' ).canvas().removeChild( this.clipShadow );
        this.clipShadow = null;
    }
};

/**
 * @public
 * @param {Point} p
 */
SWorldActor.prototype.setPositionPoint = function( p ) {
	this.m_oldX = this.m_x = p.x;
	this.m_oldY = this.m_y = p.y;
};

/**
 * @public
 * @param {number} px
 * @param {number} py
 */
SWorldActor.prototype.setPosition = function( px, py ) {
	this.m_oldX = this.m_x = px;
	this.m_oldY = this.m_y = py;
};

/**
 * @public
 * @param {boolean} flip
 */
SWorldActor.prototype.setFlipX = function( flip ) {
	this.m_flipX = flip;
	if ( this.m_clip !== null ) {
		var sign = this.m_clipLookingRight ? 1 : -1;
		this.m_clip.scale.x = this.m_flipX ? -this.m_scaleX * sign : this.m_scaleX * sign;
		this.createCorners();
	}
};

/**
 * @public
 * @param {number} val
 */
SWorldActor.prototype.setScale = function( val ) {
	if ( this.m_scale !== val ) {
		if ( this.m_clip !== null ) {
			this.m_clip.setScale( ( this.m_flipX ) ? -val : val,
								  val );
		}
		this.m_scale = val;
		this.m_scaleX = val;
		this.m_scaleY = val;
		this.createCorners();
	}
};

/**
 * @public
 * @param {number} val
 */
SWorldActor.prototype.setScaleX = function( val ) {
	if ( this.m_scaleX !== val ) {
		if ( this.m_clip !== null ) {
			var sign = this.m_clipLookingRight ? 1 : -1;
			this.m_clip.scale.x = this.m_flipX ? -val * sign : val * sign;
		}
		this.m_scaleX = val;
		this.createCorners();
	}
};

/**
 * @public
 * @param {number} val
 */
SWorldActor.prototype.setScaleY = function( val ) {
	if ( this.m_scaleY !== val ) {
		if ( this.m_clip !== null ) {
			this.m_clip.scale.y = val;
		}
		this.m_scaleY = val;
		this.createCorners();
	}
};

/**
 * @public
 * @param {number} valX
 * @param {number} valY
 */
SWorldActor.prototype.setScaleXY = function( valX, valY ) {
	this.setScaleX( valX );
	this.setScaleY( valY );
};

/**
 * @public
 * @param {number} w
 * @param {number} h
 */
SWorldActor.prototype.resize = function( w, h ) {
	if ( this.m_clip !== null ) {
		this.setScaleXY( w / this.m_clip.width, h / this.m_clip.height );
	}
};

/**
 * @public
 * @return {Rectangle}
 */
SWorldActor.prototype.getBounds = function() {
	if ( this.m_bounds !== null ) {
		return this.m_bounds.clone();
	}
	return null;
};

/**
 * @public
 * @return {Rectangle}
 */
SWorldActor.prototype.boundsAttack = function() {
	if ( this.m_boundsAttack !== null ) {
		return this.m_boundsAttack.clone();
	}
	return null;
};

/**
 * @public
 * @return {Rectangle}
 */
SWorldActor.prototype.getBoundsAttack = function() {
	if ( this.m_boundsAttack !== null ) {
		return new Rectangle( this.m_x + this.m_boundsAttack.x,
			parseFloat( this.m_y + this.m_boundsAttack.y ),
			this.m_boundsAttack.w,
			this.m_boundsAttack.h );
	}
	return null;
};

/**
 * @protected
 */
SWorldActor.prototype.createCorners = function() {
	/** @type {Rectangle} */
	var mcCollision = null;

	if ( this.m_bounds !== null ) {
		mcCollision = new Rectangle();
		mcCollision.x = this.m_bounds.x;
		mcCollision.y = this.m_bounds.y;
		mcCollision.w = this.m_bounds.w;
		mcCollision.h = this.m_bounds.h;
	}

	if ( mcCollision !== null ) {
		this.m_corners = [];
		var _scaleX = this.m_scaleX;
		var _scaleY = this.m_scaleY;

		if ( this.m_scaleX === this.m_scaleY ) {
			this.m_scale = this.m_scaleX;
		}
		this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + mcCollision.h ), 1, 1 ) );
		if ( Math.abs( _scaleX * mcCollision.w ) > this.m_world.tileWidth() ) {
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + 0.5 * mcCollision.w ), _scaleY * ( mcCollision.y + mcCollision.h ), 0, 1 ) );
		}
		else {
			this.m_corners.push( null );
		}
		this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + mcCollision.h ), -1, 1 ) );
		if ( _scaleY * mcCollision.h > 3 * this.m_world.tileHeight() ) {
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.75 * mcCollision.h ), 1, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.75 * mcCollision.h ), -1, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.5 * mcCollision.h ), 1, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.5 * mcCollision.h ), -1, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.25 * mcCollision.h ), 1, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.25 * mcCollision.h ), -1, 0 ) );
		}
		else if ( _scaleY * mcCollision.h > 2 * this.m_world.tileHeight() ) {
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.67 * mcCollision.h ), ( this.m_flipX ) ? -1 : 1, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.67 * mcCollision.h ), -1, 0 ) );
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.33 * mcCollision.h ), ( this.m_flipX ) ? -1 : 1, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.33 * mcCollision.h ), -1, 0 ) );
		}
		else if ( _scaleY * mcCollision.h > this.m_world.tileHeight() ) {
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.5 * mcCollision.h ), 1, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.5 * mcCollision.h ), -1, 0 ) );
			this.m_corners.push( null );
			this.m_corners.push( null );
		}
		else {
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( null );
		}

		this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y ), 1, -1 ) );
		if ( Math.abs( _scaleX * mcCollision.w ) > this.m_world.tileWidth() ) {
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + 0.5 * mcCollision.w ), _scaleY * ( mcCollision.y ), 0, -1 ) );
		}
		else {
			this.m_corners.push( null );
		}

		this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y ), -1, -1 ) );
		this.m_cornersArray = [];
		this.m_cornersArray.push( [] );
		this.m_cornersArray.push( [] );
		this.m_cornersArray.push( [] );
		this.m_cornersArray.push( [] );
		var indexesArray = [];
		indexesArray.push( [0, 1, 3, 2, 5, 7, 9] );
		indexesArray.push( [2, 1, 4, 0, 6, 8, 11] );
		indexesArray.push( [9, 10, 7, 11, 5, 3, 0] );
		indexesArray.push( [11, 10, 8, 9, 6, 4, 2] );

		for ( var i = 0; i < this.m_cornersArray.length; i++ ) {
			for ( var j = 0; j < indexesArray[i].length; j++ ) {
				if ( this.m_corners[indexesArray[i][j]] !== null ) {
					this.m_cornersArray[i].push( this.m_corners[indexesArray[i][j]] );
				}
			}
		}
	}
	else {
		this.m_cornersArray = null;
	}
	this.updateBounds();
};

/**
 * @protected
 */
SWorldActor.prototype.updateBounds = function() {
	this.m_bounds = null;
	if ( this.m_clip === null ) { return; }
	if ( typeof this.m_clip.getCollision !== 'undefined' ) {
		this.m_bounds = this.m_clip.getCollision( 'mcCollision' );
		if ( this.m_bounds ) {
			this.m_bounds.x *= this.m_scaleX;
			this.m_bounds.y *= this.m_scaleY;
			this.m_bounds.w *= this.m_scaleX;
			this.m_bounds.h *= this.m_scaleY;
		}
	}
};

/**
 * @protected
 */
SWorldActor.prototype.updateBoundsAttack = function() {
	this.m_boundsAttack = null;
	if ( this.m_clip === null ) { return; }
	if ( typeof this.m_clip.getCollision !== 'undefined' ) {
		this.m_boundsAttack = this.m_clip.getCollision( 'mcCollisionAttack' );
		if ( this.m_boundsAttack ) {
			this.m_boundsAttack.x *= this.m_scaleX;
			this.m_boundsAttack.y *= this.m_scaleY;
			this.m_boundsAttack.w *= this.m_scaleX;
			this.m_boundsAttack.h *= this.m_scaleY;
		}
	}
};

/**
 * @public
 * @return {boolean}
 */
SWorldActor.prototype.isOverPlatform = function() {
	var mcCollision = this.m_bounds;

	if ( this.m_vehicle ) {
		return true;
	}
	else if ( mcCollision !== null ) {
		var px = this.m_x + mcCollision.x;
		var py = this.m_y + 3;
		if ( this.m_world.getCellInPosition( px + mcCollision.w, py ) === SWorldCollisionLayer.CELL_PLATFORM
			 || this.m_world.getCellInPosition( this.m_x, py ) === SWorldCollisionLayer.CELL_PLATFORM
			 || this.m_world.getCellInPosition( px, py ) === SWorldCollisionLayer.CELL_PLATFORM ) {
			return true;
		}
	}
	return false;
};

/**
 * @public
 * @param {string} state
 */
SWorldActor.prototype.gotoState = function( state ) {
	if ( state !== this.m_state ) {
		this.characterGotoState( state );
		this.m_state = state;
	}
};

/**
 * @public
 * @param {string} st
 */
SWorldActor.prototype.characterGotoState = function( st ) {
	if ( st !== this.m_state && this.m_character !== null ) {
		this.m_character.gotoState( st );
		this.m_clip = this.m_character.clip;
		var sign = this.m_clipLookingRight ? 1 : -1;
		this.m_clip.scale.x = this.m_flipX ? -this.m_scaleX * sign : this.m_scaleX * sign;
		this.m_clip.scale.y = this.m_scaleY;
	}
};

/**
 * @public
 * @return {Array.<SCollisionPoint>}
 */
SWorldActor.prototype.corners = function() {
	if ( this.m_cornersArray === null ) {
		return null;
	}
	if ( this.m_speed.y < 0 ) {
		if ( this.m_speed.x >= 0 ) {
			this.m_indexCornersArray = 2;
		}
		else {
			this.m_indexCornersArray = 3;
		}
	}
	else if ( this.m_speed.x < 0 ) {
		this.m_indexCornersArray = 1;
	}
	else {
		this.m_indexCornersArray = 0;
	}
	return this.m_cornersArray[this.m_indexCornersArray];
};

/**
 * @public
 */
SWorldActor.prototype.saveData = function() {
};

/**
 * @public
 * @param {number} dt
 */
SWorldActor.prototype.movementUpdate = function( dt ) {
	if ( this.m_movement !== null ) {
		this.m_movement.update( dt );
	}
};

/**
 * @public
 */
SWorldActor.prototype.validateSoundLoop = function() {

};

/**
 * @public
 * @param {number} dt
 */
SWorldActor.prototype.update = function( dt ) {
	this.onDebugUpdate( dt );
	if ( this.m_character !== null ) {
		this.m_character.setPosition( this.m_x, this.m_y );
		this.m_character.update( dt );
	}
	else if ( this.m_clip !== null ) {
		this.m_clip.setPosition( this.m_x, this.m_y );
		this.m_clip.update( dt );
	}

    if ( this.clipShadow ) {
        this.clipShadow.position.x = this.m_x;
        this.clipShadow.position.y = this.m_y;
    }
};

/**
 * @public
 * @param {number=} margin
 * @return {boolean}
 */
SWorldActor.prototype.isInCamera = function( margin ) {
	margin = typeof margin !== 'undefined' ? margin : 100;
	var left = this.m_x;
	var right = this.m_x;
	var up = this.m_y;
	var down = this.m_y;
	if ( this.m_bounds ) {
		left += this.m_bounds.x;
		right = left + this.m_bounds.w;
		up += this.m_bounds.y;
		down = up + this.m_bounds.h;
	}
	var layoutLeft = Application.WIDE_SCREEN ? Layout.left : 0;
	var layoutTop = Application.WIDE_SCREEN ? Layout.top : 0;
	var r = right >= ( this.m_world.camera().getX() - layoutLeft / Layout.scale - margin );
	var l = left <= ( this.m_world.camera().getX() + this.m_world.camera().width() + margin );
	var d = down >= ( this.m_world.camera().getY() - layoutTop / Layout.scale - margin );
	var u = up <= ( this.m_world.camera().getY() + this.m_world.camera().height() + margin );

	var inside = r &&
				 l &&
				 d &&
				 u;
	return inside;
};

/**
 * @public
 * @return {Vector2D}
 */
SWorldActor.prototype.checkCollision = function() {
	var collision = null;

	if ( this.m_continuousCollisionDetection )
	{
		var deltaPos = new Vector2D( this.m_x - this.m_oldX, this.m_y - this.m_oldY );
		if ( deltaPos.x > this.m_control.maxVerletHorizontalDisplace
			|| deltaPos.x < -this.m_control.maxVerletHorizontalDisplace
			|| deltaPos.y > this.m_control.maxVerletDownDisplace
			|| deltaPos.y < -this.m_control.maxVerletUpDisplace )
		{
			var N;
			var finalX = this.m_x;
			var finalY = this.m_y;
			var nX = deltaPos.x / this.m_control.maxVerletHorizontalDisplace;
			nX = ( nX < 0 ) ? -nX : nX;
			var nY = deltaPos.y / ( ( deltaPos.y < 0 ) ? this.m_control.maxVerletUpDisplace : this.m_control.maxVerletDownDisplace );
			nY = ( nY < 0 ) ? -nY : nY;
			N = Math.floor( nY + nX ) + 1;

			var inverseN = 1.0 / N;
			var stepX = inverseN * deltaPos.x;
			var stepY = inverseN * deltaPos.y;
			this.m_x = this.m_oldX;
			this.m_y = this.m_oldY;

			for ( var k = 1; k <= N + 1; ++k ) {
				this.m_x += stepX;
				this.m_y += stepY;
				collision = this.m_world.checkCollision( this );
				if ( collision != null ) {
					deltaPos.x = finalX - this.m_x;
					deltaPos.y = finalY - this.m_y;
					collision = collision.minus( deltaPos.projectionOn( collision ) );
					this.m_x = finalX + collision.x;
					this.m_y = finalY + collision.y;
					var postCollision = this.m_world.checkCollision( this );
					if ( postCollision != null ) {
						collision.add( postCollision );
					}
					this.m_x = finalX;
					this.m_y = finalY;
					break;
				}
			}
		}
		else
		{
			collision = this.m_world.checkCollision( this );
		}
	}
	else
	{
		collision = this.m_world.checkCollision( this );
	}
	return collision;
};

/**
 * @public
 * @param {number} fx
 * @param {number} fy
 */
SWorldActor.prototype.applyImpulse = function( fx, fy ) {
	this.m_impulseX = fx * 0.1;
	this.m_impulseY = fy * 0.1;
};

/**
 * @public
 * @param {SWorldActor} actor
 * @param {string=} myBoundsName
 * @param {string=} actorBoundsName
 * @return {boolean}
 */
SWorldActor.prototype.hitTest = function( actor, myBoundsName, actorBoundsName ) {
	myBoundsName = typeof myBoundsName !== 'undefined' ? myBoundsName : 'mcCollision';
	actorBoundsName = typeof actorBoundsName !== 'undefined' ? actorBoundsName : 'mcCollision';
	if ( actor === null ) {
		return false;
	}
	if ( typeof actor.clip === 'undefined' ||
		 actor.clip() === null ) {
		return false;
	}
	if ( actor.clip().getCollision( actorBoundsName ) === null ) {
		return false;
	}
	if ( this.m_clip === null ||
		 this.m_clip.getCollision( myBoundsName ) === null ) {
		return false;
	}
	var coll = SDisplayObjectContainer.hitTestByBounds( this.m_clip,
														this.m_clip.getCollision( myBoundsName ),
														actor.clip(),
														actor.clip().getCollision( actorBoundsName ) );
	return coll;
};

/**
 * @public
 * @param {SWorldActor} actor
 * @return {boolean}
 */
SWorldActor.prototype.hitIntersection = function( actor ) {
	if ( this.m_bounds !== null ) {
		/** @type {Rectangle} */
		var ra = new Rectangle( this.m_bounds.x,
								this.m_bounds.y,
								this.m_bounds.w,
								this.m_bounds.h );
		ra.x += this.m_x;
		ra.y += this.m_y;
		/** @type {Rectangle} */
		var rb = actor.getBounds();
		if ( rb !== null ) {
			return ra.intersectRect( rb );
		}
	}
	return false;
};

/**
 * Verlet integration:
 * http://en.wikipedia.org/wiki/Verlet_integration.
 * @public
 * @param {number} dt
 */
SWorldActor.prototype.integrateVerlet = function( dt ) {
	var oldX = this.m_oldX;
	var oldY = this.m_oldY;
	this.m_oldX = this.m_x;
	this.m_oldY = this.m_y;

	this.m_x += ( this.m_impulseX == 0 ) ? ( this.m_x - oldX ) : this.m_impulseX * dt;
	this.m_y += ( this.m_impulseY == 0 ) ? ( this.m_y - oldY ) + this.m_control.gravity * dt * dt : this.m_impulseY * dt;
	this.m_impulseX = 0;
	this.m_impulseY = 0;
};

/**
 * @public
 * @param {boolean} idle
 */
SWorldActor.prototype.onIdle = function( idle ) {
	this.m_isIdle = idle;
	if ( this.m_clip !== null ) {
		this.m_clip.visible = !idle;
	}
};

/**
 * @public
 * @param {boolean} val
 */
SWorldActor.prototype.showCollision = function( val ) {
	if ( this.m_clip !== null &&
		 typeof this.m_clip.toggleCollision !== 'undefined' ) {
		/** @type {Animation} */ ( this.m_clip ).toggleCollision();
	}
};

/**
 * @public
 * @return {Array.<Array.<SCollisionPoint>>}
 */
SWorldActor.prototype.cornersArray = function() {
	return this.m_cornersArray;
};

/**
 * @public
 * @return {Object}
 */
SWorldActor.prototype.shoot = function() {
	return null;
};

/**
 * This module use when move object in the path world
 * @public
 */
SWorldActor.prototype.initMovementPoints = function() {
	var _id = this.m_config['paramsPath']['id'];
	if ( _id === 0 || _id === '0' ) {
		return;
	}
	var path = this.m_world.getPath( this.m_config['paramsPath']['id'] );
	if ( path && path['points'] ) {
		this.movementToPoints = new PointsMovement( Common.arrayToSPoints( path['points'] ),
											parseFloat( this.m_config['paramsPath']['speed'] ) );
		this.movementToPoints.isReverse = parseInt( this.m_config['paramsPath']['isReverse'], 10 ) === 1 ? true : false;
		this.movementToPoints.addListeners( this, this.onCompletePath, this.onChangePathPoint );
		this.movementToPoints.onStartPath( true );
	}
	else {
		Application.warn( 'Path movement id [' + this.m_config['paramsPath']['id'] + '] no found' );
	}
};

/**
 * @public
 * @param {PointsMovement} movement
 */
SWorldActor.prototype.onCompletePath = function( movement ) {
};

/**
 * @public
 * @param {PointsMovement} movement
 */
SWorldActor.prototype.onChangePathPoint = function( movement ) {
};

/**
 * @public
 * @param {number} dt
 */
SWorldActor.prototype.onUpdatePointsMovement = function( dt ) {
	if ( this.movementToPoints ) {
		this.movementToPoints.update( dt );
		this.m_x = this.movementToPoints.x;
		this.m_y = this.movementToPoints.y;
	}
};

/**
 * @public
 * @param {Object} e
 */
SWorldActor.prototype.onPointerPress = function( e ) {
};

/**
 * @public
 * @param {Object} e
 */
SWorldActor.prototype.onPointerRelease = function( e ) {
};

/**
 * @public
 * @param {Object} e
 */
SWorldActor.prototype.onPointerMove = function( e ) {
};

/**
 * @public
 * @param {number} keycode
 */
SWorldActor.prototype.onKeyDown = function( keycode ) {
};

/**
 * @public
 * @param {number} keycode
 */
SWorldActor.prototype.onKeyUp = function( keycode ) {
};

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
SWorldActor.prototype.onDebugDraw = function( ctx ) {
	if ( this.m_bounds !== null ) {
		ContextGraphics.drawRectangle( ctx,
			this.m_x - this.m_world.camera().getX() + this.m_bounds.x,
			this.m_y - this.m_world.camera().getY() + this.m_bounds.y,
									   this.m_bounds.w,
									   this.m_bounds.h,
									   1, Common.COLOR_RED,
									   Common.COLOR_NONE );
	}
	if ( this.m_boundsAttack !== null ) {
		ContextGraphics.drawRectangle( ctx,
			this.m_x - this.m_world.camera().getX() + this.m_boundsAttack.x,
			this.m_y - this.m_world.camera().getY() + this.m_boundsAttack.y,
									   this.m_boundsAttack.w,
									   this.m_boundsAttack.h,
									   1, Common.COLOR_BLUE,
									   Common.COLOR_NONE );
	}
	if ( this.m_corners ) {
		for ( var i = 0; i < this.m_cornersArray[this.m_indexCornersArray].length; i++ ) {
			if ( this.m_cornersArray[this.m_indexCornersArray][i] ) {
				ContextGraphics.drawCircle( ctx,
					this.m_x - this.m_world.camera().getX() + this.m_cornersArray[this.m_indexCornersArray][i].position.x,
					this.m_y - this.m_world.camera().getY() + this.m_cornersArray[this.m_indexCornersArray][i].position.y,
											3, Common.COLOR_MAGENTA,
											Common.COLOR_MAGENTA );
			}
		}
	}
};

/**
 * @public
 * @param {Object} e
 */
SWorldActor.prototype.onDebugPointerPress = function( e ) {
	DebugObject.prototype.onDebugPointerPress.call( this, e );
	var bounds = this.getBounds();
	if ( bounds && bounds.intersectPoint( e.data.global.x + this.m_world.camera().getX(),
			e.data.global.y + this.m_world.camera().getY() ) ) {
		this.onDebugSelectObject();
	}
};

/**
 * @public
 */
SWorldActor.prototype.onDebugGetProperties = function() {
	var properties = [];
	properties.push( { property: 'name', value: this.m_className } );
	properties.push( { property: 'position', value: parseInt( this.m_x, 10 ) + ' , ' + parseInt( this.m_y, 10 ) } );
	return properties;
};

/**
 * @public
 * @param {Object} data
 */
SWorldActor.prototype.onDebugChangeProperties = function( data ) {
	DebugObject.prototype.onDebugChangeProperties.call( this, data );
	switch ( data['property'] ) {
		case 'position':
			var pos = data['value'].split( ',' );
			this.m_x = parseFloat( pos[0] );
			this.m_y = parseFloat( pos[1] );
			break;
		default:
			Application.warn( 'SANDBOX property [' + data['property'] + '] no set in Object' );
	}
};

/**
 * @public
 */
SWorldActor.prototype.onDebugDelete = function() {
	DebugObject.prototype.onDebugDelete.call( this );
	this.m_isAwaitingDelete = true;
};

/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} layerData
 * @param {boolean=} optimize
 */
function SWorldBaseLayer( world, layerData, optimize ) {
	optimize = typeof optimize !== 'undefined' ? optimize : false;

	/**
	 * @protected
	 * @type {string}
	 */
	this.m_name = '';
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_width = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_height = 0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_x = 0.0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_y = 0.0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_parallaxXFactor = 0.0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_type = 0;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_useEmbeddedAssets = false;

	/**
	 * @protected
	 * @type {SWorld}
	 */
	this.m_world = world;
	/**
	 * @protected
	 * @type {SDisplayObjectContainer}
	 */
	this.m_canvas = null;

	this.m_name = layerData['name'];
	this.m_width = layerData['width'];
	this.m_height = layerData['height'];
	/** @type {number} */
	this.m_offsetX = layerData['offsetX'] || 0;
	/** @type {number} */
	this.m_offsetY = layerData['offsetY'] || 0;

	Application.log( ' Layer: ' + this.m_name + ' w:' + this.m_width + ' h:' + this.m_height
					 + ' ox:' + this.m_offsetX + ' oy:' + this.m_offsetY );
	this.m_useEmbeddedAssets = this.m_world.useEmbeddedAssets;


	this.m_canvas = Application.instance.addDisplayContainer();
	world.canvas.addChild( this.m_canvas );
}

/** @const {number} */ SWorldBaseLayer.TYPE_COLLISIONS = 1;
/** @const {number} */ SWorldBaseLayer.TYPE_TILES = 2;
/** @const {number} */ SWorldBaseLayer.TYPE_SPRITES = 3;
/** @const {number} */ SWorldBaseLayer.TYPE_OBJECTS = 4;
/** @const {number} */ SWorldBaseLayer.TYPE_MARKERS = 5;
/** @const {number} */ SWorldBaseLayer.TYPE_BOX2D = 6;
/** @const {number} */ SWorldBaseLayer.TYPE_KIPU = 7;
/** @const {number} */ SWorldBaseLayer.TYPE_CONTINUOUS = 8;
/** @const {number} */ SWorldBaseLayer.TYPE_GENERATOR_TILE = 9;
/** @const {number} */ SWorldBaseLayer.TYPE_PATHS = 10;
/** @const {number} */ SWorldBaseLayer.TYPE_CONTAINER = 11;

/** @const {string} */ SWorldBaseLayer.ID_PLAYER = 'player';
/** @const {string} */ SWorldBaseLayer.ID_COLLISIONS = 'collision';
/** @const {string} */ SWorldBaseLayer.ID_TILES = 'cell';
/** @const {string} */ SWorldBaseLayer.ID_SPRITES = 'sprites';
/** @const {string} */ SWorldBaseLayer.ID_OBJECTS = 'objects';
/** @const {string} */ SWorldBaseLayer.ID_MARKERS = 'markers';
/** @const {string} */ SWorldBaseLayer.ID_BOX2D = 'b2d';
/** @const {string} */ SWorldBaseLayer.ID_KIPU = 'kipu';
/** @const {string} */ SWorldBaseLayer.ID_CONTINUOUS = 'continuous';
/** @const {string} */ SWorldBaseLayer.ID_GENERATOR_TILE = 'BeziZone';
/** @const {string} */ SWorldBaseLayer.ID_PATHS = 'paths';
/** @const {string} */ SWorldBaseLayer.ID_CONTAINER = 'container';

SWorldBaseLayer.prototype.free = function() {
	this.m_world = null;
	if ( this.m_canvas !== null ) {
		if ( this.m_canvas.parent !== null ) {
			this.m_canvas.parent.removeChild( this.m_canvas );
		}
		this.m_canvas.free();
		this.m_canvas = null;
	}
};

/** @returns {number} */
SWorldBaseLayer.prototype.type = function() {
	return this.m_type;
};

/** @returns {number} */
SWorldBaseLayer.prototype.getX = function() {
	return this.m_x;
};

/** @returns {number} */
SWorldBaseLayer.prototype.getY = function() {
	return this.m_y;
};

/** @returns {SDisplayObjectContainer} */
SWorldBaseLayer.prototype.canvas = function() {
	return this.m_canvas;
};

/** @returns {number} */
SWorldBaseLayer.prototype.width = function() {
	return this.m_width;
};

/** @returns {number} */
SWorldBaseLayer.prototype.height = function() {
	return this.m_height;
};

/** @returns {boolean} */
SWorldBaseLayer.prototype.visible = function() {
	return true;
};

/** @param {boolean} value */
SWorldBaseLayer.prototype.setVisible = function( value ) {
	this.m_canvas.visible = value;
};

/** @returns {string} */
SWorldBaseLayer.prototype.name = function() {
	return this.m_name;
};

/** @param {number} val */
SWorldBaseLayer.prototype.setX = function( val ) {
	this.m_x = val;
};

/** @param {number} val */
SWorldBaseLayer.prototype.setY = function( val ) {
	this.m_y = val;
};

SWorldBaseLayer.prototype.refresh = function() {
};

SWorldBaseLayer.prototype.init = function() {
	if ( this.m_world.camera().parallaxX ) {
		this.m_parallaxXFactor = ( this.m_width - this.m_world.cameraWidth ) / ( this.m_world.width() - this.m_world.cameraWidth );
	}

	if ( this.m_world.camera().parallaxY ) {
		this.m_parallaxYFactor = ( this.m_height - this.m_world.cameraHeight ) / ( this.m_world.height() - this.m_world.cameraHeight );
	}
};

/** @param {number} dt */
SWorldBaseLayer.prototype.render = function( dt ) {
	if ( this.m_world.camera().parallaxX ) {
		this.m_canvas.x = -this.parallaxX();
	}
	if ( this.m_world.camera().parallaxY ) {
		this.m_canvas.y = -this.parallaxY();
	}
};

/** @returns {number} */
SWorldBaseLayer.prototype.parallaxX = function() {
	return ~~( this.m_world.camera().getX() * this.m_parallaxXFactor ) - this.m_offsetX;
};

/** @returns {number} */
SWorldBaseLayer.prototype.parallaxY = function() {
	return ~~( this.m_world.camera().getY() * this.m_parallaxYFactor ) - this.m_offsetY;
};
/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} layerData
 * @extends SWorldBaseLayer
 */
function SWorldContainerLayer( world, layerData ) {
	this.m_world = world;
	this.m_name = layerData['name'];
	this.m_offsetX = layerData['offsetX'] || 0;
	this.m_offsetY = layerData['offsetY'] || 0;
	this.m_canvas = Application.instance.addDisplayContainer();
	this.m_world.canvas.addChild( this.m_canvas );
	this.updateWithCamera = true;
	this.m_type = SWorldBaseLayer.TYPE_CONTAINER;
}
Application.subclass( SWorldContainerLayer, SWorldBaseLayer );

/**
 * @public
 */
SWorldContainerLayer.prototype.free = function() {
	this.m_world.canvas.removeChild( this.m_canvas );
	this.m_canvas.free();
	this.m_canvas = null;
	this.m_world = null;
};

/**
 * @public
 * @param {number} dt
 */
SWorldContainerLayer.prototype.render = function( dt ) {
	if ( this.updateWithCamera ) {
		this.m_canvas.position.x = -this.m_world.camera().getX() - this.m_offsetX;
		this.m_canvas.position.y = -this.m_world.camera().getY() - this.m_offsetY;
	}
};

/**
 * @override
 */
SWorldContainerLayer.prototype.init = function() { };

/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} layerData
 * @param {boolean=} optimize
 * @extends SWorldBaseLayer
 */
function SWorldTileLayer( world, layerData, optimize ) {
	SWorldBaseLayer.call( this, world, layerData, optimize );

	/** @type {number} */
	this.m_columns = 0;
	/** @type {number} */
	this.m_rows = 0;
	/** @type {number} */
	this.m_tileWidth = 0;
	/** @type {number} */
	this.m_tileHeight = 0;
	/** @type {Array.<string>} */
	this.m_tiles = null;
	/** @type {number} */
	this.m_minX = 0;
	/** @type {number} */
	this.m_minY = 0;
	/** @type {number} */
	this.m_maxX = 0;
	/** @type {number} */
	this.m_maxY = 0;
	/** @type {Array.<SSprite>} */
	this.m_buffer = [];
	/** @type {number} */
	this.m_bufferWidth = 0;
	/** @type {number} */
	this.m_bufferHeight = 0;
	/** @type {number} */
	this.m_bufferX = 0;
	/** @type {number} */
	this.m_bufferY = 0;

	this.m_type = SWorldBaseLayer.TYPE_TILES;

	this.m_columns = layerData['cols'];
	this.m_rows = layerData['rows'];
	this.m_tileWidth = layerData['tileW'];
	this.m_tileHeight = layerData['tileH'];
	this.m_tiles = layerData['image'];
	/** @type {Array<Array<number>>} */
	this.m_matrix = EDIUtils.getMatrix( layerData );
	/** @type {string} */
	this.m_tilePrefix = layerData['prefix'];
	/** @type {number} */
	this.m_tempCol = 0;
	/** @type {number} */
	this.m_tempRow = 0;
}
Application.subclass( SWorldTileLayer, SWorldBaseLayer );

/**
 * @public
 * @return {number}
 */
SWorldTileLayer.prototype.tileWidth = function() {
	return this.m_tileWidth;
};

/**
 * @public
 * @return {number}
 */
SWorldTileLayer.prototype.tileHeight = function() {
	return this.m_tileHeight;
};

SWorldTileLayer.prototype.getTileName = function( index ) {
	if ( index >= 0 && index < this.m_tiles.length ) {
		var tileName = this.m_tiles[index];
		if ( tileName.indexOf( '?' ) == 0 ) {
			return this.m_tilePrefix + tileName.substr( 1 );
		}
		return tileName;
	}
	return null;
};

SWorldTileLayer.prototype.getBufferCell = function( x, y ) {
	return this.m_buffer[( x + this.m_bufferX ) % this.m_bufferWidth + ( ( y + this.m_bufferY ) % this.m_bufferHeight ) * this.m_bufferWidth];
};

SWorldTileLayer.prototype.setBufferCell = function( x, y, clip ) {
	this.m_buffer[( x + this.m_bufferX ) % this.m_bufferWidth + ( ( y + this.m_bufferY ) % this.m_bufferHeight ) * this.m_bufferWidth] = clip;
};

SWorldTileLayer.prototype.initCell = function( kx, ky ) {
	var tileIndex = this.getCell( kx + this.m_minX, ky + this.m_minY );
	if ( tileIndex > 0 ) {
		var tile = null;

		tile = Application.instance.getClip( this.getTileName( tileIndex - 1 ) );
		this.m_canvas.addChild( tile );
		tile.parent = this.m_canvas;
		tile.position.x = ( kx + this.m_minX ) * this.m_tileWidth;
		tile.position.y = ( ky + this.m_minY ) * this.m_tileHeight;
		tile.scale.x = tile.scale.y = 1.025 * Application.DPI;
		this.setBufferCell( kx, ky, tile );
	}
};

SWorldTileLayer.prototype.refresh = function() {
	SWorldBaseLayer.prototype.refresh.call( this );
	this.m_bufferX = 0;
	this.m_bufferY = 0;
	var kx = 0;
	while ( kx < this.m_bufferWidth ) {
		var ky = 0;
		while ( ky < this.m_bufferHeight ) {
			var clip = this.m_buffer[kx + ( ky * this.m_bufferWidth )];
			if ( clip ) {
				this.m_canvas.removeChild( clip );
				this.m_buffer[kx + ( ky * this.m_bufferWidth )] = null;
			}
			this.initCell( kx, ky );
			++ky;
		}
		++kx;
	}
};

SWorldTileLayer.prototype.init = function() {
	SWorldBaseLayer.prototype.init.call( this );
	this.m_bufferWidth = Math.ceil( this.m_world.camera().width() / this.m_tileWidth + 1 );
	this.m_bufferHeight = Math.ceil( this.m_world.camera().height() / this.m_tileHeight + 1 );
	this.m_bufferX = 0;
	this.m_bufferY = 0;
	this.m_buffer = [];
	this.m_minX = ~~( this.m_world.camera().getX() / this.m_tileWidth );
	if ( this.m_minX < 0 ) {
		this.m_minX = 0;
	}

	if ( this.m_world.isLoop ) {
		this.m_bufferWidth++;
	}

	this.m_maxX = this.m_minX + this.m_bufferWidth;
	this.m_minY = ~~( this.m_world.camera().getY() / this.m_tileHeight );
	if ( this.m_minY < 0 ) {
		this.m_minY = 0;
	}
	this.m_maxY = this.m_minY + this.m_bufferHeight;
	var kx = 0;
	while ( kx < this.m_bufferWidth ) {
		var ky = 0;
		while ( ky < this.m_bufferHeight ) {
			this.initCell( kx, ky );
			++ky;
		}
		++kx;
	}
};

SWorldTileLayer.prototype.getCellInPosition = function( x, y ) {
	this.m_tempCol = this.fixedColTile( ~~( x / this.m_tileWidth ) );
	this.m_tempRow = this.fixedRowTile( ~~( y / this.m_tileHeight ) );

	if ( this.m_tempCol >= 0 && this.m_tempRow >= 0 && this.m_tempCol < this.m_columns && this.m_tempRow < this.m_rows ) {
		if ( this.m_matrix[this.m_tempCol] ) {
			return this.m_matrix[this.m_tempCol][this.m_tempRow];
		}
	}
	return 0;
};

SWorldTileLayer.prototype.fixedColTile = function( col ) {
	if ( this.m_world.isLoop ) {
		col = col < 0  ? col + this.m_columns * ~~( ( -col / this.m_columns ) + 1 ) : col;
		col = col % this.m_columns;
	}
	return col;
};

SWorldTileLayer.prototype.fixedRowTile = function( row ) {
	return row;
};

SWorldTileLayer.prototype.getCell = function( col, row ) {
	col = this.fixedColTile( col );
	row = this.fixedRowTile( row );

	if ( col >= 0 && row >= 0 && col < this.m_columns && row < this.m_rows
				  && this.m_matrix[col] && this.m_matrix[col][row] ) {
		if ( this.m_matrix[col] ) {
			return this.m_matrix[col][row];
		}
	}
	return 0;
};

SWorldTileLayer.prototype.setCell = function( col, row, val ) {
	if ( col >= 0 && row >= 0 && col < this.m_columns && row < this.m_rows ) {
		if ( !this.m_matrix[col] ) {
			this.m_matrix[col] = Common.createArraySize( this.m_rows, 0 );
		}
		this.m_matrix[col][row] = val;
	}
	return 0;
};

SWorldTileLayer.prototype.addTileCell = function( tileX, tileY, bufferX, bufferY ) {
	var tileIndex = this.getCell( tileX, tileY );
	if ( tileIndex > 0 ) {
		var tile = null;

		tile = Application.instance.getClip( this.getTileName( tileIndex - 1 ) );
		this.m_canvas.addChild( tile );
		tile.parent = this.m_canvas;
		tile.position.x = tileX * this.m_tileWidth;
		tile.position.y = tileY * this.m_tileHeight;
		tile.scale.x = tile.scale.y = 1.025 * Application.DPI;
		this.setBufferCell( bufferX, bufferY, tile );
	}
};

SWorldTileLayer.prototype.render = function( dt ) {
	var redrawAll = false;
	var minTile = 0;
	var inc = 0;
	var paralax = 0;

	if ( this.m_world.camera().parallaxX ) {
		paralax = this.parallaxX();
		minTile = ~~( paralax / this.m_tileWidth );

		if ( this.m_world.isLoop ) {
			minTile -= 1;
		}

		inc = minTile - this.m_minX;
		if ( inc <= -this.m_bufferWidth || inc >= this.m_bufferWidth ) {
			redrawAll = true;
		}
		else {
			if ( minTile > this.m_minX ) {
				var kx = 0;
				while ( kx < inc ) {
					var ky = 0;
					while ( ky < this.m_bufferHeight ) {
						var tile = this.getBufferCell( kx, ky );
						if ( tile ) {
							if ( typeof tile !== 'undefined' ) {
								this.m_canvas.removeChild( tile );
							} else {
								this.m_canvas.removeChild( tile );
							}
							this.setBufferCell( kx, ky, null );
						}
						this.addTileCell( kx + this.m_maxX, ky + this.m_minY, kx, ky );
						++ky;
					}
					++kx;
				}
				this.m_bufferX = ( this.m_bufferX + inc ) % this.m_bufferWidth;
			}
			else if ( minTile < this.m_minX ) {
				var kx = 1;
				while ( kx <= -inc ) {
					var ky = 0;
					while ( ky < this.m_bufferHeight ) {
						var tile = this.getBufferCell( this.m_bufferWidth - kx, ky );
						if ( tile ) {
							if ( typeof tile !== 'undefined' ) {
								this.m_canvas.removeChild( tile );
							} else {
								this.m_canvas.removeChild( tile );
							}
							this.setBufferCell( this.m_bufferWidth - kx, ky, null );
						}
						this.addTileCell( this.m_minX - kx, ky + this.m_minY, this.m_bufferWidth - kx, ky );
						++ky;
					}
					++kx;
				}
				this.m_bufferX = ( this.m_bufferWidth + this.m_bufferX + inc ) % this.m_bufferWidth;
			}
		}

		if ( inc != 0 ) {
			this.m_minX = minTile;
			this.m_maxX = this.m_minX + this.m_bufferWidth;
		}

		this.m_canvas.position.x = -Math.floor( paralax );
	}

	if ( this.m_world.camera().parallaxY ) {
		paralax = this.parallaxY();
		minTile = ~~( paralax / this.m_tileHeight );
		inc = minTile - this.m_minY;
		if ( inc <= -this.m_bufferHeight || inc >= this.m_bufferHeight ) {
			redrawAll = true;
		}
		else {
			if ( minTile > this.m_minY ) {
				var ky = 0;
				while ( ky < inc ) {
					var kx = 0;
					while ( kx < this.m_bufferWidth ) {
						var tile = this.getBufferCell( kx, ky );
						if ( tile ) {
							if ( typeof tile !== 'undefined' ) {
								this.m_canvas.removeChild( tile );
							} else {
								this.m_canvas.removeChild( tile );
							} this.setBufferCell( kx, ky, null );
						}
						this.addTileCell( kx + this.m_minX, ky + this.m_maxY, kx, ky );
						++kx;
					}
					++ky;
				}
				this.m_bufferY = ( this.m_bufferY + inc ) % this.m_bufferHeight;
			}
			else if ( minTile < this.m_minY ) {
				var ky = 1;
				while ( ky <= -inc ) {
					var kx = 0;
					while ( kx < this.m_bufferWidth ) {
						var tile = this.getBufferCell( kx, this.m_bufferHeight - ky );
						if ( tile ) {
							if ( typeof tile !== 'undefined' ) {
								this.m_canvas.removeChild( tile );
							} else {
								this.m_canvas.removeChild( tile );
							} this.setBufferCell( kx, this.m_bufferHeight - ky, null );
						}
						this.addTileCell( kx + this.m_minX, this.m_minY - ky, kx, this.m_bufferHeight - ky );
						++kx;
					}
					++ky;
				}
				this.m_bufferY = ( this.m_bufferHeight + this.m_bufferY + inc ) % this.m_bufferHeight;
			}
		}

		if ( inc != 0 ) {
			this.m_minY = minTile;
			this.m_maxY = this.m_minY + this.m_bufferHeight;
		}

		this.m_canvas.position.y = -Math.floor( paralax );
	}

	if ( redrawAll ) {
		this.refresh();
	}
};

/** @return {Array.<Array.<number>>} */
SWorldTileLayer.prototype.matrix = function() {
	return this.m_matrix;
};

SWorldTileLayer.prototype.resetMatrix = function() {
	this.m_matrix = [];
};

SWorldTileLayer.prototype.resetTiles = function() {
	this.m_tiles = [];
};

/** @param {Array.<string>} val */
SWorldTileLayer.prototype.setTiles = function( val ) {
	this.m_tiles = val;
};

/** @param {number} val */
SWorldTileLayer.prototype.setTileW = function( val ) {
	this.m_tileWidth = val;
};

/** @param {number} val */
SWorldTileLayer.prototype.setTileH = function( val ) {
	this.m_tileHeight = val;
};

/** @param {Array.<Array>} val */
SWorldTileLayer.prototype.setMatrix = function( val ) {
	this.m_matrix = null;
	this.m_matrix = val;
};

/** @return {Array.<string>} */
SWorldTileLayer.prototype.tiles = function() {
	return this.m_tiles;
};

SWorldTileLayer.prototype.free = function() {
	var kx = 0;
	while ( kx < this.m_bufferWidth ) {
		var ky = 0;
		while ( ky < this.m_bufferHeight ) {
			/** @type {SSprite} */
			var clip = this.m_buffer[kx + ( ky * this.m_bufferWidth )];
			if ( clip ) {
				if ( typeof clip !== 'undefined' ) {
					clip.parent.removeChild( clip );
					clip.free();
				} else {
					clip.parent.removeChild( clip );
				}
				clip = null;
			}
			++ky;
		}
		++kx;
	}
	this.m_matrix = null;
	SWorldBaseLayer.prototype.free.call( this );
};

/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} layerData
 * @extends SWorldTileLayer
 */
function SWorldCollisionLayer( world, layerData ) {
	/** @type {number} */
	this.m_tileX = 0;
	/** @type {number} */
	this.m_tileY = 0;
	/** @type {Array.<string>} */
	this.m_frames = [];
	/** @type {Array.<MobilePlatform>} */
	this.m_platforms = [];

	/** @type {number} */
	this.m_dx = 0;
	/** @type {number} */
	this.m_dy = 0;

	/** @type {number} */
	this.m_sw0 = 0;

	SWorldTileLayer.call( this, world, layerData );

	this.m_type = SWorldBaseLayer.TYPE_COLLISIONS;

	var k = SWorldCollisionLayer.CELL_EMPTY;
	while ( k <= SWorldCollisionLayer.CELL_QUART_CIRCLE_4 ) {
		this.m_frames.push( SWorldCollisionLayer.COLLISION_SET + k );
		++k;
	}

	this.setVisible( false );
}
Application.subclass( SWorldCollisionLayer, SWorldTileLayer );

SWorldCollisionLayer.prototype.free = function() {
	this.m_platforms = null;
	this.m_frames = null;
	SWorldTileLayer.prototype.free.call( this );
};

/** @const {number} */ SWorldCollisionLayer.CELL_EMPTY = 0;
/** @const {number} */ SWorldCollisionLayer.CELL_FULL = 1;
/** @const {number} */ SWorldCollisionLayer.CELL_DIAG_UP_LEFT = 2;
/** @const {number} */ SWorldCollisionLayer.CELL_DIAG_UP_RIGHT = 3;
/** @const {number} */ SWorldCollisionLayer.CELL_DIAG_DOWN_RIGHT = 4;
/** @const {number} */ SWorldCollisionLayer.CELL_DIAG_DOWN_LEFT = 5;
/** @const {number} */ SWorldCollisionLayer.CELL_PLATFORM = 6;
/** @const {number} */ SWorldCollisionLayer.CELL_FULL_WALL = 7; // >> setIn this project
/** @const {number} */ SWorldCollisionLayer.CELL_FULL_WATER = 8;
/** @const {number} */ SWorldCollisionLayer.CELL_FULL_SAND = 9;
/** @const {number} */ SWorldCollisionLayer.CELL_MD_UP_RIGHT = 10;
/** @const {number} */ SWorldCollisionLayer.CELL_MD_UP_LEFT = 11;
/** @const {number} */ SWorldCollisionLayer.CELL_HMD_UP_RIGHT = 12;
/** @const {number} */ SWorldCollisionLayer.CELL_HMD_UP_LEFT = 13;
/** @const {number} */ SWorldCollisionLayer.CELL_HALF_DOWN = 14;
/** @const {number} */ SWorldCollisionLayer.CELL_HALF_LEFT = 15;
/** @const {number} */ SWorldCollisionLayer.CELL_HALF_RIGHT = 16;
/** @const {number} */ SWorldCollisionLayer.CELL_HALF_UP = 17;
/** @const {number} */ SWorldCollisionLayer.CELL_FULL_CIRCLE = 26;
/** @const {number} */ SWorldCollisionLayer.CELL_QUART_CIRCLE_1 = 28;
/** @const {number} */ SWorldCollisionLayer.CELL_QUART_CIRCLE_2 = 29;
/** @const {number} */ SWorldCollisionLayer.CELL_QUART_CIRCLE_3 = 30;
/** @const {number} */ SWorldCollisionLayer.CELL_QUART_CIRCLE_4 = 31;

/** @const {number} */ SWorldCollisionLayer.MIN_VY_FRICTION = -2;
/** @const {number} */ SWorldCollisionLayer.MAX_VY_SPEED_PLATFORM = -2;

/** @const {string} */ SWorldCollisionLayer.COLLISION_SET = 'coll_';

SWorldCollisionLayer.prototype.setX = function( val ) {
	this.m_x = val;
};

SWorldCollisionLayer.prototype.setY = function( val ) {
	this.m_y = val;
};

SWorldCollisionLayer.prototype.name = function() {
	return this.m_name;
};

SWorldCollisionLayer.prototype.tileHeight = function() {
	return this.m_tileHeight;
};

/**
 * @public
 * @param {MobilePlatform} platform
 */
SWorldCollisionLayer.prototype.addMobilePlatform = function( platform ) {
	this.m_platforms.push( platform );
};

SWorldCollisionLayer.prototype.checkPlatforms = function( px, py, normal, actor ) {
	actor.setVehicle( null );
	if ( normal.y > 0 && actor.speed().y > 0 && !actor.control().isJumpingDown() ) {
		var k = 0;
		while ( k < this.m_platforms.length ) {
			if ( !this.m_platforms[k].isVehicle() ) {
				++k;
				continue;
			}
			var ax = this.m_platforms[k].getX();
			var bx = this.m_platforms[k].bounds().x;
			var ay = this.m_platforms[k].getY();
			var by = this.m_platforms[k].bounds().y;
			if ( px <= ax + bx + this.m_platforms[k].bounds().w && px >= ax + bx && py >= ay + by && py <= ay + by + this.m_platforms[k].bounds().h ) {
				actor.setVehicle( this.m_platforms[k] );
				return new Vector2D( 0, ay + by - py );
			}
			++k;
		}
	}
	return null;
};

/**
 * @public
 * @param {number} px
 * @param {number} py
 * @return {number}
 */
SWorldCollisionLayer.prototype.checkCollisionPoint = function( px, py ) {
	this.m_tileX = ~~( px / this.m_tileWidth );
	this.m_tileY = ~~( py / this.m_tileHeight );
	return this.getCell( this.m_tileX, this.m_tileY );
};

/**
 * @public
 * @param {boolean} val
 */
SWorldCollisionLayer.prototype.setVisible = function( val ) {
	if ( val ) {
		this.m_world.canvas.addChild( this.m_canvas );
	}
	else {
		this.m_world.canvas.removeChild( this.m_canvas );
	}
};

/**
 * @public
 * @param {number} px
 * @param {number} py
 * @param {Vector2D} normal
 * @param {SWorldActor} actor
 * @return {Vector2D}
 */
SWorldCollisionLayer.prototype.checkCollision = function( px, py, normal, actor ) {

	this.m_tileX = ~~( px / this.m_tileWidth );
	this.m_tileY = ~~( py / this.m_tileHeight );

	this.m_dx = 0;
	this.m_dy = 0;
	this.m_sw0 = ( this.getCell( this.m_tileX, this.m_tileY ) );
	var num = 0;

	switch ( this.m_sw0 ) {
		case SWorldCollisionLayer.CELL_PLATFORM:
			if ( normal.y > 0 && !actor.control().isJumpingUp() && !actor.control().isJumpingDown() ) {
				if ( normal.x > 0 && this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_DIAG_UP_LEFT ) {
					this.m_dy = px - this.m_tileX * this.m_tileWidth;
					return new Vector2D( 0, this.m_tileY * this.m_tileHeight - py - this.m_dy );
				}
				if ( normal.x < 0 && this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_DIAG_UP_RIGHT ) {
					this.m_dy = ( this.m_tileX + 1 ) * this.m_tileWidth - px;
					return new Vector2D( 0, this.m_tileY * this.m_tileHeight - py - this.m_dy );
				}
				if ( actor.speed().y > 0 && this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_EMPTY ) {
					if ( actor.speed().y >= SWorldCollisionLayer.MAX_VY_SPEED_PLATFORM || ( py - this.m_tileY * this.m_tileHeight <= 0.5 * this.m_tileHeight ) ) {
						return new Vector2D( 0, this.m_tileY * this.m_tileHeight - py );
					}
				}
			}
			break;
		case SWorldCollisionLayer.CELL_HALF_DOWN:
			if ( normal.y > 0 && !actor.control().isJumpingUp() ) {
				this.m_dy = py - ( this.m_tileY + 0.5 ) * this.m_tileWidth;
				if ( this.m_dy > 0 ) {
					return new Vector2D( 0, -this.m_dy );
				}
			}
			break;
		case SWorldCollisionLayer.CELL_DIAG_UP_RIGHT:
			if ( normal.y > 0 && !actor.control().isJumpingUp() ) {
				this.m_dx = px - this.m_tileX * this.m_tileWidth;
				this.m_dy = py - this.m_tileY * this.m_tileWidth;
				if ( this.m_dx < this.m_dy ) {
					if ( normal.x <= 0 ) {
						if ( actor.control().forceX() === 0 ) {
							return new Vector2D( 0, this.m_dx - this.m_dy );
						}
						this.m_dx = ( this.m_dy - this.m_dx ) * 0.5;
						num = actor.control().slopeFriction * this.m_dx;
						return new Vector2D( this.m_dx + num, -this.m_dx + num );
					}
				}
			}
			break;
		case SWorldCollisionLayer.CELL_HMD_UP_LEFT:
			if ( normal.y > 0 && !actor.control().isJumpingUp() ) {
				this.m_dx = px - this.m_tileX * this.m_tileWidth;
				this.m_dy = py - this.m_tileY * this.m_tileWidth;
				if ( this.m_dx < 2 * this.m_dy ) {
					return new Vector2D( 0, -py + ( 0.5 * this.m_dx + this.m_tileY * this.m_tileWidth ) );
				}
			}
			break;
		case SWorldCollisionLayer.CELL_MD_UP_LEFT:
			if ( normal.y > 0 && !actor.control().isJumpingUp() ) {
				this.m_dx = px - this.m_tileX * this.m_tileWidth;
				this.m_dy = py - ( this.m_tileY + 0.5 ) * this.m_tileWidth;
				if ( this.m_dx < 2 * this.m_dy ) {
					return new Vector2D( 0, -py + ( 0.5 * this.m_dx + ( this.m_tileY + 0.5 ) * this.m_tileWidth ) );
				}
			}
			break;
		case SWorldCollisionLayer.CELL_DIAG_UP_LEFT:
			if ( normal.y > 0 && !actor.control().isJumpingUp() ) {
				this.m_dx = ( this.m_tileX + 1 ) * this.m_tileWidth - px;
				this.m_dy = py - this.m_tileY * this.m_tileWidth;
				if ( this.m_dx < this.m_dy ) {
					if ( normal.x >= 0 ) {
						if ( actor.control().forceX() === 0 ) {
							return new Vector2D( 0, this.m_dx - this.m_dy );
						}
						this.m_dx = ( this.m_dy - this.m_dx ) * 0.5;
						num = actor.control().slopeFriction * this.m_dx;
						return new Vector2D( -this.m_dx - num, -this.m_dx + num );
					}
				}
			}
			break;
		case SWorldCollisionLayer.CELL_HMD_UP_RIGHT:
			if ( normal.y > 0 && !actor.control().isJumpingUp() ) {
				this.m_dx = -px + this.m_tileWidth * ( this.m_tileX + 1 );
				this.m_dy = py - this.m_tileY * this.m_tileWidth;
				if ( this.m_dx < 2 * this.m_dy ) {
					return new Vector2D( 0, -py + ( 0.5 * this.m_dx + this.m_tileY * this.m_tileWidth ) );
				}
			}
			break;
		case SWorldCollisionLayer.CELL_MD_UP_RIGHT:
			if ( normal.y > 0 && !actor.control().isJumpingUp() ) {
				this.m_dx = -px + this.m_tileWidth * ( this.m_tileX + 1 );
				this.m_dy = py - ( this.m_tileY + 0.5 ) * this.m_tileWidth;
				if ( this.m_dx < 2 * this.m_dy ) {
					return new Vector2D( 0, -py + ( 0.5 * this.m_dx + ( this.m_tileY + 0.5 ) * this.m_tileWidth ) );
				}
			}
			break;
		case SWorldCollisionLayer.CELL_FULL:
			if ( normal.x === 0 ) {
				if ( normal.y > 0 ) {
					return new Vector2D( 0, this.m_tileY * this.m_tileHeight - py );
				}
				else {
					return new Vector2D( 0, ( this.m_tileY + 1 ) * this.m_tileHeight - py );
				}
			}
			else if ( normal.y === 0 ) {
				if ( actor.speed().y >= SWorldCollisionLayer.MIN_VY_FRICTION ) {
					actor.setFallingOverWall( true );
				}
				if ( normal.x > 0 ) {
					if ( this.getCell( this.m_tileX - 1, this.m_tileY ) === SWorldCollisionLayer.CELL_EMPTY ) {
						return new Vector2D( this.m_tileX * this.m_tileWidth - px, 0 );
					}
				}
				else {
					if ( this.getCell( this.m_tileX + 1, this.m_tileY ) === SWorldCollisionLayer.CELL_EMPTY ) {
						return new Vector2D( ( this.m_tileX + 1 ) * this.m_tileWidth - px, 0 );
					}
				}
			}
			else if ( normal.y > 0 ) { // Colliding with floor.

				if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_MD_UP_RIGHT ) {
					this.m_dx = 0;
					this.m_dy = ( this.m_tileY * this.m_tileHeight - ( 0.5 * ( px - this.m_tileX * this.m_tileWidth ) ) ) - py;
					return new Vector2D( this.m_dx, this.m_dy );
				}
				if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_MD_UP_LEFT ) {
					this.m_dx = 0;
					this.m_dy = ( this.m_tileY * this.m_tileHeight - this.m_tileHeight * 0.5 - ( -0.5 * ( px - this.m_tileX * this.m_tileWidth ) ) ) - py;
					return new Vector2D( this.m_dx, this.m_dy );
				}
				if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_HMD_UP_RIGHT ) {
					this.m_dx = 0;
					this.m_dy = ( this.m_tileY * this.m_tileHeight - ( 0.5 * ( px - this.m_tileX * this.m_tileWidth ) ) ) - py;
					return new Vector2D( this.m_dx, this.m_dy );
				}
				if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_HMD_UP_LEFT ) {
					this.m_dx = 0;
					this.m_dy = ( this.m_tileY * this.m_tileHeight - this.m_tileHeight * 0.5 - ( -0.5 * ( px - this.m_tileX * this.m_tileWidth ) ) ) - py;
					return new Vector2D( this.m_dx, this.m_dy );
				}
				if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_HALF_DOWN ) {
					this.m_dx = 0;
					this.m_dy = py - ( this.m_tileY + 0.5 ) * this.m_tileWidth;
					if ( this.m_dy > 0 ) {
						return new Vector2D( 0, -this.m_dy );
					}
				}

				if ( normal.x > 0 ) {
					if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_DIAG_UP_LEFT ) {
						if ( this.getCell( this.m_tileX - 1, this.m_tileY ) === SWorldCollisionLayer.CELL_DIAG_UP_LEFT ) {
							this.m_dx = px - this.m_tileX * this.m_tileWidth;
							this.m_dx += py - this.m_tileY * this.m_tileHeight;
							if ( actor.control().forceX() === 0 ) {
								return new Vector2D( 0, -this.m_dx );
							}
							this.m_dx /= 2;
							num = actor.control().slopeFriction * this.m_dx;
							return new Vector2D( -this.m_dx - num, -this.m_dx + num );
						}
						this.m_dy = px - this.m_tileX * this.m_tileWidth;
						return new Vector2D( 0, this.m_tileY * this.m_tileHeight - py - this.m_dy );
					}
					else if ( this.getCell( this.m_tileX - 1, this.m_tileY ) === SWorldCollisionLayer.CELL_DIAG_UP_LEFT ) {
						if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_FULL ) {
							this.m_dx = px - this.m_tileX * this.m_tileWidth;
							this.m_dx = ( this.m_dx + py - this.m_tileY * this.m_tileHeight ) * 0.5;
							num = -this.m_dx - actor.control().slopeFriction * this.m_dx;
							if ( px + num > this.m_tileX * this.m_tileWidth ) {
								return new Vector2D( -px + this.m_tileX * this.m_tileWidth, -py + this.m_tileY * this.m_tileHeight );
							}
							return new Vector2D( num, -this.m_dx + actor.control().slopeFriction * this.m_dx );
						}
						else if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_EMPTY ) {
							this.m_dx = px - this.m_tileX * this.m_tileWidth;
							this.m_dx = ( this.m_dx + py - this.m_tileY * this.m_tileHeight ) * 0.5;
							num = -this.m_dx - actor.control().slopeFriction * this.m_dx;
							if ( px + num > this.m_tileX * this.m_tileWidth || actor.control().forceX() === 0 ) {
								return new Vector2D( 0, -py + this.m_tileY * this.m_tileHeight );
							}
							return new Vector2D( num, -this.m_dx + actor.control().slopeFriction * this.m_dx );
						}
					}
					else if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_FULL ) {
						if ( this.getCell( this.m_tileX - 1, this.m_tileY ) === SWorldCollisionLayer.CELL_FULL ) {
							return new Vector2D( this.m_tileX * this.m_tileWidth - px, this.m_tileY * this.m_tileHeight - py );
						}
						else {
							if ( actor.speed().y >= SWorldCollisionLayer.MIN_VY_FRICTION ) {
								actor.setFallingOverWall( true );
							}
							return new Vector2D( this.m_tileX * this.m_tileWidth - px, 0 );
						}
					}
					else if ( this.getCell( this.m_tileX - 1, this.m_tileY ) === SWorldCollisionLayer.CELL_FULL ) {
						return new Vector2D( 0, this.m_tileY * this.m_tileHeight - py );
					}
					else if ( py - this.m_tileY * this.m_tileHeight > px - this.m_tileX * this.m_tileWidth ) {
						if ( actor.speed().y >= SWorldCollisionLayer.MIN_VY_FRICTION ) {
							actor.setFallingOverWall( true );
						}
						return new Vector2D( this.m_tileX * this.m_tileWidth - px, 0 );
					}
					else {
						return new Vector2D( 0, this.m_tileY * this.m_tileHeight - py );
					}
				}
				else {
					if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_DIAG_UP_RIGHT ) {
						if ( this.getCell( this.m_tileX + 1, this.m_tileY ) === SWorldCollisionLayer.CELL_DIAG_UP_RIGHT ) {
							this.m_dx = ( this.m_tileX + 1 ) * this.m_tileWidth - px;
							this.m_dx += py - this.m_tileY * this.m_tileHeight;
							if ( actor.control().forceX() === 0 ) {
								return new Vector2D( 0, -this.m_dx );
							}
							this.m_dx /= 2;
							num = actor.control().slopeFriction * this.m_dx;
							return new Vector2D( this.m_dx + num, -this.m_dx + num );
						}
						this.m_dy = ( this.m_tileX + 1 ) * this.m_tileWidth - px;
						return new Vector2D( 0, this.m_tileY * this.m_tileHeight - py - this.m_dy );
					}
					else if ( this.getCell( this.m_tileX + 1, this.m_tileY ) === SWorldCollisionLayer.CELL_DIAG_UP_RIGHT ) {
						if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_FULL ) {
							this.m_dx = ( this.m_tileX + 1 ) * this.m_tileWidth - px;
							this.m_dx = ( this.m_dx + py - this.m_tileY * this.m_tileHeight ) * 0.5;
							num = this.m_dx + actor.control().slopeFriction * this.m_dx;
							if ( px + num < ( this.m_tileX + 1 ) * this.m_tileWidth ) {
								return new Vector2D( ( this.m_tileX + 1 ) * this.m_tileWidth - px, -py + this.m_tileY * this.m_tileHeight );
							}
							return new Vector2D( num, -this.m_dx + actor.control().slopeFriction * this.m_dx );
						}
						else if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_EMPTY ) {
							this.m_dx = ( this.m_tileX + 1 ) * this.m_tileWidth - px;
							this.m_dx = ( this.m_dx + py - this.m_tileY * this.m_tileHeight ) * 0.5;
							num = this.m_dx + actor.control().slopeFriction * this.m_dx;
							if ( px + num < ( this.m_tileX + 1 ) * this.m_tileWidth || actor.control().forceX() === 0 ) {
								return new Vector2D( 0, -py + this.m_tileY * this.m_tileHeight );
							}
							return new Vector2D( num, -this.m_dx + actor.control().slopeFriction * this.m_dx );
						}
					}
					else if ( this.getCell( this.m_tileX, this.m_tileY - 1 ) === SWorldCollisionLayer.CELL_FULL ) {
						if ( this.getCell( this.m_tileX + 1, this.m_tileY ) === SWorldCollisionLayer.CELL_FULL ) {
							return new Vector2D( ( this.m_tileX + 1 ) * this.m_tileWidth - px, this.m_tileY * this.m_tileHeight - py );
						}
						else {
							if ( actor.speed().y >= SWorldCollisionLayer.MIN_VY_FRICTION ) {
								actor.setFallingOverWall( true );
							}
							return new Vector2D( ( this.m_tileX + 1 ) * this.m_tileWidth - px, 0 );
						}
					}
					else if ( this.getCell( this.m_tileX + 1, this.m_tileY ) === SWorldCollisionLayer.CELL_FULL ) {
						return new Vector2D( 0, this.m_tileY * this.m_tileHeight - py );
					}
					else if ( py - this.m_tileY * this.m_tileHeight > ( this.m_tileX + 1 ) * this.m_tileWidth - px ) {
						if ( actor.speed().y >= SWorldCollisionLayer.MIN_VY_FRICTION ) {
							actor.setFallingOverWall( true );
						}
						return new Vector2D( ( this.m_tileX + 1 ) * this.m_tileWidth - px, 0 );
					}
					else {
						return new Vector2D( 0, this.m_tileY * this.m_tileHeight - py );
					}
				}
			}
			else if ( normal.x > 0 ) {
				if ( this.getCell( this.m_tileX, this.m_tileY + 1 ) === SWorldCollisionLayer.CELL_FULL ) {
					if ( this.getCell( this.m_tileX - 1, this.m_tileY ) === SWorldCollisionLayer.CELL_FULL ) {
						return new Vector2D( this.m_tileX * this.m_tileWidth - px, ( this.m_tileY + 1 ) * this.m_tileHeight - py );
					}
					else {
						if ( actor.speed().y >= SWorldCollisionLayer.MIN_VY_FRICTION ) {
							actor.setFallingOverWall( true );
						}
						return new Vector2D( this.m_tileX * this.m_tileWidth - px, 0 );
					}
				}
				else if ( this.getCell( this.m_tileX - 1, this.m_tileY ) === SWorldCollisionLayer.CELL_FULL ) {
					return new Vector2D( 0, ( this.m_tileY + 1 ) * this.m_tileHeight - py );
				}
				else if ( ( this.m_tileY + 1 ) * this.m_tileHeight - py > px - this.m_tileX * this.m_tileWidth ) {
					actor.setFallingOverWall( true );
					return new Vector2D( this.m_tileX * this.m_tileWidth - px, 0 );
				}
				else {
					return new Vector2D( 0, ( this.m_tileY + 1 ) * this.m_tileHeight - py );
				}
			}
			else {
				if ( this.getCell( this.m_tileX, this.m_tileY + 1 ) === SWorldCollisionLayer.CELL_FULL ) {
					if ( this.getCell( this.m_tileX + 1, this.m_tileY ) === SWorldCollisionLayer.CELL_FULL ) {
						return new Vector2D( ( this.m_tileX + 1 ) * this.m_tileWidth - px, ( this.m_tileY + 1 ) * this.m_tileHeight - py );
					}
					else {
						if ( actor.speed().y >= SWorldCollisionLayer.MIN_VY_FRICTION ) {
							actor.setFallingOverWall( true );
						}
						return new Vector2D( ( this.m_tileX + 1 ) * this.m_tileWidth - px, 0 );
					}
				}
				else if ( this.getCell( this.m_tileX + 1, this.m_tileY ) === SWorldCollisionLayer.CELL_FULL ) {
					return new Vector2D( 0, ( this.m_tileY + 1 ) * this.m_tileHeight - py );
				}
				else if ( ( this.m_tileY + 1 ) * this.m_tileHeight - py > ( this.m_tileX + 1 ) * this.m_tileWidth - px ) {
					if ( actor.speed().y >= SWorldCollisionLayer.MIN_VY_FRICTION ) {
						actor.setFallingOverWall( true );
					}
					return new Vector2D( ( this.m_tileX + 1 ) * this.m_tileWidth - px, 0 );
				}
				else {
					return new Vector2D( 0, ( this.m_tileY + 1 ) * this.m_tileHeight - py );
				}
			}
	}
	return null;
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {number} max
 * @return {Rectangle}
 */
SWorldCollisionLayer.prototype.getMaxFloorRange = function( x, y, max ) {
	var ty = ~~( y / this.m_tileHeight );
	var tx = ~~( x / this.m_tileWidth );
	while ( ty < this.m_height ) {
		if ( this.getCell( tx, ty ) !== SWorldCollisionLayer.CELL_EMPTY ) {
			var px = tx - 1;
			while ( this.getCell( px, ty ) !== SWorldCollisionLayer.CELL_EMPTY && this.getCell( px, ty - 1 ) === SWorldCollisionLayer.CELL_EMPTY ) {
				if ( x - --px * this.m_tileWidth >= max ) {
					break;
				}
			}

			var left = ( px + 1 ) * this.m_tileWidth;
			px = tx + 1;
			while ( this.getCell( px, ty ) !== SWorldCollisionLayer.CELL_EMPTY && this.getCell( px, ty - 1 ) === SWorldCollisionLayer.CELL_EMPTY ) {
				if ( ++px * this.m_tileWidth - x >= max ) {
					break;
				}
			}

			return new Rectangle( left, ty * this.m_tileHeight, px * this.m_tileWidth - left );
		}
		++ty;
	}

	Application.warn( 'getMaxFloorRange: no floor found at x:' + x + ' y:' + y );
	return new Rectangle( x, y, 0 );
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {number} range
 * @return {Rectangle}
 */
SWorldCollisionLayer.prototype.getMaxFloorRangeElevations = function( x, y, range ) {
	var ty = ~~( y / this.m_tileHeight );
	var tx = ~~( x / this.m_tileWidth );
	while ( ty < this.m_height ) {
		var cell = this.getCell( tx, ty );
		if ( cell !== SWorldCollisionLayer.CELL_EMPTY ) {
			var limit = ~~( ( ( x - range ) / this.m_tileWidth ) );
			var loop = true;
			var px = tx;
			var py = ty;
			do {
				switch ( cell ) {
					case SWorldCollisionLayer.CELL_FULL:
					case SWorldCollisionLayer.CELL_PLATFORM:
						var _sw1_ = ( this.getCell( px - 1, py ) );
						switch ( _sw1_ ) {
							case SWorldCollisionLayer.CELL_EMPTY:
								loop = false;
								break;
							default:
								var _sw2_ = ( this.getCell( px - 1, py - 1 ) );
								switch ( _sw2_ ) {
									case SWorldCollisionLayer.CELL_FULL:
										loop = false;
										break;
									case SWorldCollisionLayer.CELL_DIAG_UP_RIGHT:
										--py;
										break;
								}
								break;
						}
						break;
					case SWorldCollisionLayer.CELL_DIAG_UP_LEFT:
						var _sw3_ = ( this.getCell( px - 1, py + 1 ) );
						switch ( _sw3_ ) {
							case SWorldCollisionLayer.CELL_EMPTY:
								loop = false;
								break;
							default:
								++py;
								break;
						}
						break;
					case SWorldCollisionLayer.CELL_DIAG_UP_RIGHT:
						var _sw4_ = ( this.getCell( px - 1, py - 1 ) );
						switch ( _sw4_ ) {
							case SWorldCollisionLayer.CELL_EMPTY:
								if ( this.getCell( px - 1, py ) === SWorldCollisionLayer.CELL_EMPTY ) {
									loop = false;
								}
								break;
							case SWorldCollisionLayer.CELL_FULL:
								loop = false;
								break;
							case SWorldCollisionLayer.CELL_DIAG_UP_RIGHT:
								--py;
								break;
						}
						break;
					case SWorldCollisionLayer.CELL_EMPTY:
						loop = false;
						break;
				}
				cell = this.getCell( --px, py );
			} while ( ( loop && px >= limit ) );

			var left = ( px + 1 ) * this.m_tileWidth;
			var floorY = py * this.m_tileHeight;
			loop = true;
			limit = ~~( ( x + range ) / this.m_tileWidth );
			++limit;
			px = tx;
			py = ty;
			cell = this.getCell( tx, ty );
			do {
				switch ( cell ) {
					case SWorldCollisionLayer.CELL_FULL:
					case SWorldCollisionLayer.CELL_PLATFORM:
						var _sw5_ = ( this.getCell( px + 1, py ) );
						switch ( _sw5_ ) {
							case SWorldCollisionLayer.CELL_EMPTY:
								loop = false;
								break;
							default:
								var _sw6_ = ( this.getCell( px + 1, py - 1 ) );
								switch ( _sw6_ ) {
									case SWorldCollisionLayer.CELL_FULL:
										loop = false;
										break;
									case SWorldCollisionLayer.CELL_DIAG_UP_LEFT:
										--py;
										break;
								}
								break;
						}
						break;
					case SWorldCollisionLayer.CELL_DIAG_UP_LEFT:
						var _sw7_ = ( this.getCell( px + 1, py - 1 ) );
						switch ( _sw7_ ) {
							case SWorldCollisionLayer.CELL_EMPTY:
								if ( this.getCell( px + 1, py ) === SWorldCollisionLayer.CELL_EMPTY ) {
									loop = false;
								}
								break;
							case SWorldCollisionLayer.CELL_FULL:
								loop = false;
								break;
							case SWorldCollisionLayer.CELL_DIAG_UP_LEFT:
								--py;
								break;
						}
						break;
					case SWorldCollisionLayer.CELL_DIAG_UP_RIGHT:
						var _sw8_ = ( this.getCell( px + 1, py + 1 ) );
						switch ( _sw8_ ) {
							case SWorldCollisionLayer.CELL_EMPTY:
								loop = false;
								break;
							default:
								++py;
								break;
						}
						break;
					case SWorldCollisionLayer.CELL_EMPTY:
						loop = false;
						break;
				}
				cell = this.getCell( ++px, py );
			} while ( ( loop && px <= limit ) );

			return new Rectangle( left, floorY, px * this.m_tileWidth - left, py * this.m_tileHeight - floorY );
		}
		++ty;
	}

	Application.warn( 'getMaxFloorRange: no floor found at x:' + x + ' y:' + y );
	return new Rectangle( x, y, 0 );
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @return {Vector2D}
 */
SWorldCollisionLayer.prototype.getFloorCollision = function( x, y ) {
	var ty = ~~( y / this.m_tileHeight );
	var tx = ~~( x / this.m_tileWidth );
	while ( ty < this.m_height ) {
		var cell = this.getCell( tx, ty );
		if ( cell !== SWorldCollisionLayer.CELL_EMPTY ) {
			switch ( cell ) {
				case SWorldCollisionLayer.CELL_DIAG_UP_LEFT:
				case SWorldCollisionLayer.CELL_DIAG_UP_RIGHT:
					switch ( cell ) {
						case SWorldCollisionLayer.CELL_DIAG_UP_LEFT:
							return new Vector2D( x, ty * this.m_tileHeight + ( tx + 1 ) * this.m_tileWidth - x );
					}
					return new Vector2D( x, ty * this.m_tileHeight + x - tx * this.m_tileWidth );
					break;
			}
			return new Vector2D( x, ty * this.m_tileHeight );
		}
		++ty;
	}

	Application.warn( 'getFloorCollision: no floor found' );
	return new Vector2D( x, y );
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @return {Point}
 */
SWorldCollisionLayer.prototype.getTilePosition = function( x, y ) {
	var col = ~~( x / this.m_tileWidth );
	var row = ~~( y / this.m_tileHeight );
	return new Point( col, row );
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {number} range
 * @return {number}
 */
SWorldCollisionLayer.prototype.getTileBelow = function( x, y, range ) {
	var distance = 0;
	var tx = ~~( x / this.m_tileWidth );
	while ( distance <= range ) {
		var cell = this.getCell( tx, ~~( y / this.m_tileHeight ) );
		if ( cell != SWorldCollisionLayer.CELL_EMPTY ) {
			return cell;
		}
		y += this.m_tileHeight;
		distance += this.m_tileHeight;
	}

	return SWorldCollisionLayer.CELL_EMPTY;
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {Vector2D} dir
 * @param {number} range
 * @return {Vector2D}
 */
SWorldCollisionLayer.prototype.getRayCollision = function( x, y, dir, range ) {
	var ty = ~~( y / this.m_tileHeight );
	var tx = ~~( x / this.m_tileWidth );
	while ( ty < this.m_height ) {
		if ( this.getCell( tx, ty ) != SWorldCollisionLayer.CELL_EMPTY ) {
			return new Vector2D( x, ty * this.m_tileHeight );
		}
		++ty;
	}
	return null;
	/*
	if ( ( dir.x != 0 ) && ( dir.y != 0 ) ) {
		return null;
	}
	var ty = ~~( y / this.m_tileHeight );
	var tx = ~~( x / this.m_tileWidth );
	var inc = 0;
	var maxDis = 0;
	var countTiles = 0;
	if ( dir.x != 0 ) {
		maxDis = ~~( ( ( x + range ) / m_tileWidth ) - tx );
		inc = ( ( dir.x > 0 ) ) ? 1 : -1;
		while ( countTiles <= maxDis ) {
			if ( this.getCell( tx, ty ) != SWorldCollisionLayer.CELL_EMPTY ) {
				return new Vector2D( ( tx - inc ) * this.m_tileWidth, y );
			}
			++countTiles;
			tx += inc;
		}
	}
	else {
		maxDis = ~~( ( y + range ) / this.m_tileHeight ) - ty;
		inc = ( ( dir.y > 0 ) ) ? 1 : -1;
		while ( countTiles <= maxDis ) {
			if ( this.getCell( tx, ty ) != SWorldCollisionLayer.CELL_EMPTY ) {
				return new Vector2D( x, ty * this.m_tileHeight );
			}
			++countTiles;
			ty += inc;
		}
	}
	return null;
	*/
};

/**
 * @protected
 * @param {number} tileX
 * @param {number} tileY
 * @param {number} bufferX
 * @param {number} bufferY
 */
SWorldCollisionLayer.prototype.addTileCell = function( tileX, tileY, bufferX, bufferY ) {
	if ( this.m_world.showCollisions ) {
		var cell = this.getCell( tileX, tileY );
		if ( cell > SWorldCollisionLayer.CELL_EMPTY ) {
			var tile = Application.instance.getClip( this.m_frames[cell] );
			this.setBufferCell( bufferX, bufferY, tile );
			this.m_canvas.addChild( tile );
			tile.position.x = tileX * this.m_tileWidth;
			tile.position.y = tileY * this.m_tileHeight;
			tile.scale.x = this.m_tileWidth / 32;
			tile.scale.y = this.m_tileHeight / 32;
		}
	}
};

/**
 * @protected
 * @param {number} kx
 * @param {number} ky
 */
SWorldCollisionLayer.prototype.initCell = function( kx, ky ) {
	if ( this.m_world.showCollisions ) {
		var cell = this.getCell( kx + this.m_minX, ky + this.m_minY );
		if ( cell > SWorldCollisionLayer.CELL_EMPTY ) {
			var tile = Application.instance.getClip( this.m_frames[cell] );
			this.m_canvas.addChild( tile );
			tile.position.x = ( kx + this.m_minX ) * this.m_tileWidth;
			tile.position.y = ( ky + this.m_minY ) * this.m_tileHeight;
			tile.scale.x = this.m_tileWidth / 32;
			tile.scale.y = this.m_tileHeight / 32;
			this.setBufferCell( kx, ky, tile );
		}
	}
};

/**
 * @override
 * @return {number}
 */
SWorldCollisionLayer.prototype.parallaxX = function() {
	return this.m_world.camera().getX();
};

/**
 * @override
 * @return {number}
 */
SWorldCollisionLayer.prototype.parallaxY = function() {
	return this.m_world.camera().getY();
};

/**
 * @override
 * @param {number} dt
 */
SWorldCollisionLayer.prototype.render = function( dt ) {
	if ( this.m_world.showCollisions ) {
		SWorldTileLayer.prototype.render.call( this, dt );
	}
};

/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} layerData
 * @extends SWorldBaseLayer
 */
function SWorldMarkerLayer( world, layerData ) {
	SWorldBaseLayer.call( this, world, layerData );

	this.m_width = world.width();
	this.m_height = world.height();
	this.m_type = SWorldBaseLayer.TYPE_MARKERS;
	this.actionZones = [];
	this.loadData( layerData );
}
Application.subclass( SWorldMarkerLayer, SWorldBaseLayer );

SWorldMarkerLayer.ID_PHYSICS = 'physics';

/**
 * @param {Object} layerData
 */
SWorldMarkerLayer.prototype.loadData = function( layerData ) {
	if ( this.m_name == SWorldMarkerLayer.ID_PHYSICS ) {
		for ( var k = 0; k < layerData['elements'].length; k++ ) {
			if ( layerData['elements'][k].type === 'rectangle' ) {
				var zone = new SEdiZone( layerData['elements'][k].filter,
					layerData['elements'][k].id,
					layerData['elements'][k].x,
					layerData['elements'][k].y,
					layerData['elements'][k].w,
					layerData['elements'][k].h,
					( layerData['elements'][k].params == null ) ? '' : layerData['elements'][k].params );
				this.actionZones.push( zone );
			}
		}
	}
};

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
SWorldMarkerLayer.prototype.onDebugDraw = function( ctx ) {
	for ( var i = 0; i < this.actionZones.length; i++ ) {
		ContextGraphics.drawRectangle( ctx, this.actionZones[i].x,
									   this.actionZones[i].y,
									   this.actionZones[i].w,
									   this.actionZones[i].h, 2,
									   Common.COLOR_YELLOW, Common.COLOR_NONE );
	}
};

SWorldMarkerLayer.prototype.render = function( dt ) {
	if ( this.m_world.showCollisions ) {
		SWorldBaseLayer.prototype.render.call( this, dt );
	}
};

SWorldMarkerLayer.prototype.free = function() {
	var k = 0;
	if ( this.actionZones ) {
		while ( k < this.actionZones.length ) {
			this.actionZones[k] = null;
			++k;
		}
		this.actionZones = null;
	}
	SWorldBaseLayer.prototype.free.call( this );
};

/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} layerData
 * @extends SWorldBaseLayer
 */
function SWorldSpriteLayer( world, layerData ) {
	SWorldBaseLayer.call( this, world, layerData );

	this.m_type = SWorldBaseLayer.TYPE_SPRITES;
	/** @type {Array.<SSpriteActor>} */
	this.m_actors = [];
	/** @type {Rectangle} */
	this.m_cameraRect = new Rectangle( 0, 0, world.camera().width(), world.camera().height() );

	/** @type {number} */
	var parallaxWidth = layerData['width'];
	if ( this.m_world.width() <= this.m_world.camera().width() ) {
		/** @type {number} */
		var parallaxXFactor = 1;
	} else {
		parallaxXFactor = ( parallaxWidth - this.m_world.camera().width() )
			/ ( this.m_world.width() - this.m_world.camera().width() );
	}
	/** @type {number} */
	var parallaxHeight = layerData['height'];
	if ( this.m_world.height() <= this.m_world.camera().height() ) {
		/** @type {number} */
		var parallaxYFactor = 1;
	} else {
		parallaxYFactor = ( parallaxHeight - this.m_world.camera().height() )
			/ ( this.m_world.height() - this.m_world.camera().height() );
	}
	/** @type {number} */
	var xoff = layerData['offsetX'];
	/** @type {number} */
	var yoff = layerData['offsetY'];
	/** @type {Rectangle} */
	var bounds = new Rectangle( layerData['left'] - 2, layerData['top'] - 2,
								layerData['right'] - layerData['left'] + 4,
								layerData['bottom'] - layerData['top'] + 4 );
	/** @type {QuadTree} */
	this.m_quadtree = new QuadTree( bounds, 0, parallaxXFactor, parallaxYFactor, xoff, yoff );

	var sprites = layerData['image'];
	var images = layerData['palette'];
	var numSprites = sprites.length;
	var k = 0;
	while ( k < numSprites ) {
		this.readSprite( world, sprites[k], parallaxXFactor, parallaxYFactor,
						 xoff, yoff, images, layerData['name'] );
		++k;
	}
}
Application.subclass( SWorldSpriteLayer, SWorldBaseLayer );

/** @const {number} */SWorldSpriteLayer.INDEX_X        = 0;
/** @const {number} */SWorldSpriteLayer.INDEX_Y        = 1;
/** @const {number} */SWorldSpriteLayer.INDEX_W        = 2;
/** @const {number} */SWorldSpriteLayer.INDEX_H        = 3;
/** @const {number} */SWorldSpriteLayer.INDEX_CLIPNAME = 4;

/**
 * @param {SWorld} world
 * @param {Object} spriteK
 * @param {number} pxFactor
 * @param {number} pyFactor
 * @param {number} xoff
 * @param {number} yoff
 * @param {Array.<string>} images
 * @param {string} layerName
 */
SWorldSpriteLayer.prototype.readSprite = function( world, spriteK, pxFactor, pyFactor,
												  xoff, yoff, images, layerName ) {
	/** @type {Array.<number>} */
	var data = spriteK['d'];
	/** @type {number} */
	var x = data[SWorldSpriteLayer.INDEX_X];
	/** @type {number} */
	var y = data[SWorldSpriteLayer.INDEX_Y];
	/** @type {SSpriteActor} */
	var actor = new SSpriteActor( this.m_canvas, world, x, y, pxFactor, pyFactor, xoff, yoff );
	actor.m_clip = Application.instance.getClip( images[data[SWorldSpriteLayer.INDEX_CLIPNAME]] );
	actor.m_clip.setPosition( this.m_x - this.m_world.camera().getX(),
							  this.m_y - this.m_world.camera().getY() );
	var blend = ( typeof spriteK['blend'] === 'undefined' ) ? 0 : spriteK['blend'];
	if ( actor.m_clip.setBlend ) {
		actor.m_clip.setBlend( blend );
	}
	else {
		actor.m_clip.blendMode = blend;
	}

	actor.setAlwaysVisible( parseInt( spriteK['av'], 10 ) === 1 );
	/** @type {number} */
	var sx = ( typeof spriteK['sx'] !== 'undefined' ? spriteK['sx'] : 1 );
	/** @type {number} */
	var sy = ( typeof spriteK['sy'] !== 'undefined' ? spriteK['sy'] : 1 );
	actor.m_clip.setScale( sx * Application.DPI, sy * Application.DPI );
	/** @type {number} */
	var rot = ( typeof spriteK['rot'] !== 'undefined' ? spriteK['rot'] : 0 );
	actor.m_clip.rotation = rot;
	this.m_actors.push( actor );
	this.m_canvas.addChild( actor.m_clip );
	/** @type {number} */
	var w = Math.abs( data[SWorldSpriteLayer.INDEX_W] * sx );
	/** @type {number} */
	var h = Math.abs( data[SWorldSpriteLayer.INDEX_H] * sy );
	if ( rot === 0 ) {
		/** @type {NamedRectangle} */
		var rect = new NamedRectangle( actor, x - w / 2, y - h / 2, w, h );
	}
	else {
		var cosr = Math.cos( rot );
		var sinr = Math.sin( rot );
		var x1 = w / 2; var y1 = -h / 2;
		var x2 = w / 2; var y2 = h / 2;
		var x3 = -w / 2; var y3 = h / 2;
		var x4 = -w / 2; var y4 = -h / 2;

		var x11 = x + x1 * cosr - y1 * sinr;
		var y11 = y + x1 * sinr + y1 * cosr;
		var x21 = x + x2 * cosr - y2 * sinr;
		var y21 = y + x2 * sinr + y2 * cosr;
		var x31 = x + x3 * cosr - y3 * sinr;
		var y31 = y + x3 * sinr + y3 * cosr;
		var x41 = x + x4 * cosr - y4 * sinr;
		var y41 = y + x4 * sinr + y4 * cosr;

		var left = Math.min( x11, x21, x31, x41 );
		var top = Math.min( y11, y21, y31, y41 );
		var right = Math.max( x11, x21, x31, x41 );
		var bottom = Math.max( y11, y21, y31, y41 );
		rect = new NamedRectangle( actor, left, top, right - left, bottom - top );
	}
	if ( this.m_quadtree.insert( rect ) ) {
		actor.setQuadtreeRect( rect );
	}
	else {
		Application.log( 'Sprite ' + spriteK['image'] + ' not inserted in layer ' + layerName +
			'(' + rect.x + ', ' + rect.y + ', ' + rect.w + ', ' + rect.h + ')' );
	}
}

/**
 * @override
 * @param {number} dt
 */
SWorldSpriteLayer.prototype.render = function( dt ) {
	var x = this.m_world.camera().getX();
	var y = this.m_world.camera().getY();
	this.m_cameraRect.setLeft( x );
	this.m_cameraRect.setTop( y );
	this.m_cameraRect.setRight( x + this.m_world.camera().width() );
	this.m_cameraRect.setBottom( y + this.m_world.camera().height() );
	/** @type {Array.<NamedRectangle>} */
	var cameraVisible = this.m_quadtree.query( this.m_cameraRect );

	var l = this.m_actors.length;
	for ( var k = 0; k < l; k++ ) {
		/** @type {SSpriteActor} */
		var actorK = this.m_actors[k];
		actorK.updatePosition( dt );
		if ( actorK.isAwaitingDelete() ) {
			this.m_quadtree.remove( actorK.getQuadtreeRect() );
			actorK.free();
			this.m_actors[k] = null;
			this.m_actors.splice( k--, 1 );
		}
		else {
			if ( this.isVisible( cameraVisible, actorK ) ) {
				if ( actorK.isIdle() ) {
					actorK.onIdle( false );
				}
				actorK.update( dt );
			} else if ( !actorK.isIdle() ) {
				actorK.onIdle( true );
			}
		}
	}
}

/**
 * @param {Array} cameraVisible
 * @param {SSpriteActor} actor
 * @returns boolean
 */
SWorldSpriteLayer.prototype.isVisible = function( cameraVisible, actor ) {
	if ( actor.isAlwaysVisible() ) {
		return true;
	}
	var l = cameraVisible.length;
	for ( var i = 0; i < l; i++ ) {
		if ( cameraVisible[i].getObject() === actor ) {
			cameraVisible.splice( i, 1 );
			return true;
		}
	}
	return false;
}

SWorldSpriteLayer.prototype.free = function() {
	this.m_quadtree.free();
	this.m_quadtree = null;
	this.m_cameraRect = null;
	var l = this.m_actors.length;
	for ( var i = 0; i < l; i++ ) {
		this.m_actors[i].free();
		this.m_actors[i] = null;
	}
	this.m_actors = null;
	SWorldBaseLayer.prototype.free.call( this );
}

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
SWorldSpriteLayer.prototype.onDebugDraw = function( ctx ) {
	this.m_quadtree.onDebugDraw( ctx );
}

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {number} pxFactor
 * @param {number} pyFactor
 * @param {number} xoff
 * @param {number} yoff
 */
function SSpriteActor( canvas, world, x, y, pxFactor, pyFactor, xoff, yoff ) {
	/** @type {SDisplayObjectContainer} */
	this.m_canvas = canvas;
	/** @type {SWorld} */
	this.m_world = world;
	/** @type {SSprite|Animation} */
	this.m_clip = null;
	/** @type {number} */
	this.m_x = x;
	/** @type {number} */
	this.m_y = y;
	/** @type {number} */
	this.screenX = x;
	/** @type {number} */
	this.screenY = y;
	/** @type {number} */
	this.m_parallaxXFactor = pxFactor;
	/** @type {number} */
	this.m_parallaxYFactor = pyFactor;
	/** @type {number} */
	this.m_xOffset = xoff;
	/** @type {number} */
	this.m_yOffset = yoff;
	/** @type {boolean} */
	this.m_isIdle = false;
	/** @type {boolean} */
	this.m_alwaysVisible = false;
	/** @type {NamedRectangle|null} */
	this.m_quadtreeRect = null;
	/** @type {boolean} */
	this.m_isAwaitingDelete = false;
}

/** @returns {boolean} */
SSpriteActor.prototype.isIdle = function() {
	return this.m_isIdle;
};

/** @param {boolean} idle */
SSpriteActor.prototype.onIdle = function( idle ) {
	this.m_isIdle = idle;
	if ( this.m_clip !== null ) {
		this.m_clip.visible = !idle;
	}
};

/** @returns {boolean} */
SSpriteActor.prototype.isAlwaysVisible = function() {
	return this.m_alwaysVisible;
};

/** @param {boolean} value */
SSpriteActor.prototype.setAlwaysVisible = function( value ) {
	this.m_alwaysVisible = value;
};

/** @returns {NamedRectangle|null} */
SSpriteActor.prototype.getQuadtreeRect = function() {
	return this.m_quadtreeRect;
}

/** @param {NamedRectangle|null} rect */
SSpriteActor.prototype.setQuadtreeRect = function( rect ) {
	this.m_quadtreeRect = rect;
}

/** @returns {boolean} */
SSpriteActor.prototype.isAwaitingDelete = function() {
	return this.m_isAwaitingDelete;
};

/** @param {boolean} value */
SSpriteActor.prototype.setAwaitingDelete = function( value ) {
	this.m_isAwaitingDelete = value;
};

SSpriteActor.prototype.free = function() {
	if ( this.m_clip !== null ) {
		this.m_clip.free();
		this.m_canvas.removeChild( this.m_clip );
		this.m_clip = null;
	}

	this.m_canvas = null;
	this.m_world = null;
	this.m_quadtreeRect = null;
};

/** @param {number} dt */
SSpriteActor.prototype.updatePosition = function( dt ) {
	this.screenX = this.m_x - ( ~~( this.m_world.camera().getX() * this.m_parallaxXFactor ) - this.m_xOffset );
	this.screenY = this.m_y - ( ~~( this.m_world.camera().getY() * this.m_parallaxYFactor ) - this.m_yOffset );
}

/** @param {number} dt */
SSpriteActor.prototype.update = function( dt ) {
	if ( this.m_clip ) {
		this.m_clip.position.x = this.screenX;
		this.m_clip.position.y = this.screenY;
		if ( this.m_clip.update ) {
			this.m_clip.update( dt );
		}
	}
}
/**
 * @constructor
 * @param {string} zoneType
 * @param {number} id
 * @param {number} posX
 * @param {number} posY
 * @param {number} zoneWidth
 * @param {number} zoneHeight
 * @param {string} params
 * @extends Rectangle
 */
function SEdiZone( zoneType,
				   id,
				   posX,
				   posY,
				   zoneWidth,
				   zoneHeight,
				   params ) {
	Rectangle.call( this, posX - zoneWidth / 2, posY - zoneHeight / 2, zoneWidth, zoneHeight );

	this.id = id;
	this.type = 0;
	this.active = false;
	this.ignore = false;
	this.params = Common.getParams( params );

	switch ( zoneType ) {
		case SEdiZone.ID_CLIMB:
			this.type = SEdiZone.CLIMB;
			break;
		case SEdiZone.ID_CAMERA:
			this.type = SEdiZone.CAMERA;
			break;
		case SEdiZone.ID_FLUID:
			this.type = SEdiZone.FLUID;
			break;
		case SEdiZone.ID_FORCE:
			this.type = SEdiZone.FORCE;
			break;
		case SEdiZone.ID_FRICTION:
			this.type = SEdiZone.FRICTION;
			break;
		default:
			break;
	}
}
Application.subclass( SEdiZone, Rectangle );

SEdiZone.CLIMB = 1;
SEdiZone.FLUID = 2;
SEdiZone.FORCE = 3;
SEdiZone.FRICTION = 4;
SEdiZone.CAMERA = 5;

SEdiZone.ID_CLIMB = 'climb';
SEdiZone.ID_FLUID = 'fluid';
SEdiZone.ID_FORCE = 'force';
SEdiZone.ID_CAMERA = 'camera';
SEdiZone.ID_FRICTION = 'friction';
/**
 * @constructor
 * @param {*} caller
 */
function SKeyboard( caller ) {
	/**@type {*} */
	this.caller = caller;
	/**@type {Object} */
	this.keyMap = {};
}

/**
 * @public
 * @param {number} keycode
 * @param {Function} callbackPress
 * @param {Function=} callbackRelease
 * @param {Function=} callbackHold
 */
SKeyboard.prototype.bind = function( keycode,
									 callbackPress,
									 callbackRelease,
									 callbackHold ) {

	this.keyMap[keycode] = new KeyboardFunctionsBind(
		keycode,
		this.caller,
		callbackPress,
		callbackRelease,
		callbackHold );
};

/**
 * @public
 * @param {number} keycode
 */
SKeyboard.prototype.resetKey = function( keycode ) {
	if ( this.keyMap[keycode] ) {
		this.keyMap[keycode].isPressed = false;
	}
};

/**
 * @public
 */
SKeyboard.prototype.reset = function() {
	for ( var key in this.keyMap ) {
		this.keyMap[key].isPressed = false;
	}
};

/**
 * @public
 * @param {number} keycode
 */
SKeyboard.prototype.isPressed = function( keycode ) {
	return this.keyMap[keycode].isPressed;
};

/**
 * @public
 * @param {number} keycode
 */
SKeyboard.prototype.onKeyPress = function( keycode ) {
	if ( this.keyMap[keycode] ) {
		this.keyMap[keycode].onPress();
	}
};

/**
 * @public
 * @param {number} keycode
 */
SKeyboard.prototype.onKeyRelease = function( keycode ) {
	if ( this.keyMap[keycode] ) {
		this.keyMap[keycode].onRelease();
	}
};

/**
 * @public
 */
SKeyboard.prototype.update = function( dt ) {
	for ( var key in this.keyMap ) {
		if ( this.keyMap[key].checkHold ) {
			this.keyMap[key].onHold( dt );
		}
	}
};

/**
 * @public
 */
SKeyboard.prototype.free = function() {
	this.caller = null;
	for ( var key in this.keyMap ) {
		this.keyMap[key].free();
		this.keyMap[key] = null;
		delete this.keyMap[key];
	}
	this.keyMap = null;
};

/**
 * @constructor
 * @param {number} keycode
 * @param {*} caller
 * @param {Function=} callbackPress
 * @param {Function=} callbackRelease
 * @param {Function=} callbackHold
 */
function KeyboardFunctionsBind( keycode, caller, callbackPress, callbackRelease, callbackHold ) {
	/**@type {number} */
	this.keycode = keycode;
	/**@type {*} */
	this.caller = caller;
	/**@type {Function} */
	this.callbackPress = callbackPress || null;
	/**@type {Function} */
	this.callbackRelease = callbackRelease || null;
	/**@type {Function|null} */
	this.callbackHold = callbackHold || null;
	/**@type {boolean} */
	this.isPressed = false;
	/**@type {boolean} */
	this.checkHold = ( this.callbackHold ) ? true : false;
	/**@type {number} */
	this.timePressed = 0;
};

/** @public */
KeyboardFunctionsBind.prototype.free = function() {
	this.caller = null;
	this.callbackPress = null;
	this.callbackRelease = null;
};

/** @public */
KeyboardFunctionsBind.prototype.onPress = function() {
	if ( !this.isPressed ) {
		this.isPressed = true;
		this.timePressed = 0;
		if ( this.callbackPress ) {
			this.callbackPress.call( this.caller, this.keycode );
		}
	}
};

/** @public */
KeyboardFunctionsBind.prototype.onRelease = function() {
	if ( this.isPressed ) {
		this.isPressed = false;
		if ( this.callbackRelease ) {
			this.callbackRelease.call( this.caller, this.keycode );
		}
	}
};

/** @public */
KeyboardFunctionsBind.prototype.onHold = function( dt ) {
	if ( this.isPressed ) {
		this.timePressed += dt;
		if ( this.callbackHold ) {
			this.callbackHold.call( this.caller, this.timePressed, this.keycode );
		}
	}
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {string} clipName
 * @param {number} x
 * @param {number} y
 * @param {DataMovement} motionData
 * @extends SWorldActor
 */
function MobileObject( canvas, world, clipName, x, y, motionData ) {
	SWorldActor.call( this, canvas, world, x, y, clipName );
	this.m_speed = new Vector2D();
	this.m_prevX = this.m_x;
	this.m_prevY = this.m_y;

	this.m_motionController = null;

	if ( motionData ) {
		this.m_motionController = new MotionController( this.m_x, this.m_y, motionData );
		this.m_motionController.startMotion();
	}
}
Application.subclass( MobileObject, SWorldActor );

/**
 * @param {DataMovement} motionData
 */
MobileObject.prototype.setMotionController = function( motionData ) {
	this.m_motionController = new MotionController( this.m_x, this.m_y, motionData );
	this.m_motionController.startMotion();
};

MobileObject.prototype.update = function( dt ) {
	if ( this.m_motionController ) {
		this.m_motionController.update( dt );
		this.m_x = this.m_motionController.getX();
		this.m_y = this.m_motionController.getY();
		this.m_speed.x = ( this.m_x - this.m_prevX ) / dt;
		this.m_speed.y = ( this.m_y - this.m_prevY ) / dt;
		this.m_prevX = this.m_x;
		this.m_prevY = this.m_y;
	}
	SWorldActor.prototype.update.call( this, dt );
};

MobileObject.prototype.free = function() {
	if ( this.m_motionController ) {
		this.m_motionController.free();
	}
	this.m_motionController = null;
	this.m_speed = null;
	SWorldActor.prototype.free.call( this );
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {string} clipName
 * @param {number} x
 * @param {number} y
 * @param {DataMovement} motionData
 * @param {Object} rawData
 * @extends MobileObject
 */

function MobilePlatform( canvas, world, clipName, x, y, motionData, rawData ) {
	var pathDataExist = false;

	if ( rawData && rawData['paramsPath'] && rawData['paramsPath'] !== 'id:0;speed:0;isReverse:0' ) {
		motionData = null;
		pathDataExist = true;
	}

	MobileObject.call( this, canvas, world, clipName, x, y, motionData );

	/** @type {number} */
	this.linkId = ( rawData && rawData['linkId'] ? rawData['linkId'] : -1 );
	/** @type {number} */
	this.initState = ( rawData && rawData.hasOwnProperty( 'initState' ) ? rawData['initState'] : 1 );

	if ( pathDataExist ) {
		this.m_config = null;
		this.m_config = {};
		this.m_config['paramsPath'] = Common.getParams( rawData['paramsPath'] );
		if ( this.initState === 1 ) {
			this.initMovementPoints();
		}
	}

	this.m_isVehicle = true;
	this.m_world.addMobilePlatform( this );
	this.updateBounds();

	if ( rawData && rawData['alwaysAwake'] === 1 ) {
		this.m_isRangeControlled = false;
	}
}

Application.subclass( MobilePlatform, MobileObject );

MobilePlatform.prototype.toggle = function() {
	if ( this.movementToPoints ) {
		this.movementToPoints.free();
		this.movementToPoints = null;
	}
	else {
		this.initMovementPoints();
	}
};

/**
 * @override
 * @param {number} dt
 */
MobilePlatform.prototype.update = function( dt ) {
	MobileObject.prototype.update.call( this, dt );

	if ( this.movementToPoints && !this.m_motionController ) {
		this.onUpdatePointsMovement( dt );
		this.m_speed.x = ( this.m_x - this.m_prevX ) / dt;
		this.m_speed.y = ( this.m_y - this.m_prevY ) / dt;
		this.m_prevX = this.m_x;
		this.m_prevY = this.m_y;
	}
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @extends SWorldActor
 */
function Player( canvas, world, x, y ) {
	SWorldActor.call( this, canvas, world, x, y );

	/** @type {boolean} */
	this.isFacingLeft = false;
	/** @type {boolean} */
	this.jumpDownReplaced = false;
	/** @type {boolean} */
	this.doubleDownReplaced = false;

	/**
	 * @type {number}
	 */
	this.mode = 0

	/**
	 * @protected
	 * @type {number}
	 */
	this.m_factorSpeedX = 1.0;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_factorSpeedY = 1.0;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_disablePlayer = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_inGlide = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_freeMovement = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_isInvulnerable = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_isDead = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_climbEnabled = true;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_isClimbing = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_debugCollisionOn = false;
	/**
	 * @protected
	 * @type {string}
	 */
	this.m_state = '';

	/**
	 * @protected
	 * @type {LinearMovement}
	 */
	this.m_move = null;
	/**
	 * @protected
	 * @type {Vector2D}
	 */
	this.m_collision = null;
	/**
	 * @protected
	 * @type {Array.<SCollisionPoint>}
	 */
	this.m_climbCorners = null;

	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_clampForceX = false;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_timeCounter = Player.TIME_REFRESH_FRAME_SPEED_LIMIT;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_previousDt = 50;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_currentDtSpeedLimit = 50;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_numberOfFrames = 0;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_initFrameCounter = true;
	/**
	 * @protected
	 * @type {MobileObject}
	 */
	this.m_lastVehicle = null;

	/** @type {number} */
	this.wallJumpDir = 0;
	/** @type {number} */
	this.timerTempDisable = 0;
	/** @type {number} */
	this.totalTimeTempDisable = window['platform_general']['player']['wallJumpTime'];
	/** @type {number} */
	this.totalTimeTempDisableHook = window['platform_general']['player']['pivotReleaseTime'];
	/** @type {boolean} */
	this.isWallJumping = false;

	/** @type {boolean} */
	this.isPressingL = false;
	/** @type {boolean} */
	this.isPressingR = false;

	/** @type {boolean} */
	this.justRemovePendular = false;

	/** @type {boolean} */
	this.auxIsPressingL = false;
	/** @type {boolean} */
	this.auxIsPressingR = false;

	/** @type {Blinker} */
	this.blinker = null;

	/** @type {number} */
	this.isInWalljumpZone = 0;
}
Application.subclass( Player, SWorldActor );

Player.prototype.free = function() {
	if ( this.m_climbCorners !== null ) {
		for ( var i = this.m_climbCorners.length - 1; i >= 0; i-- ) {
			this.m_climbCorners.splice( i, 1 )[0].free();
		}
	}
	if ( this.m_move !== null ) {
		this.m_move.free();
	}
	this.m_collision = null;
	this.m_speed = null;
	this.m_climbCorners = null;
	this.m_move = null;

	this.m_lastVehicle = null;

	SWorldActor.prototype.free.call( this );
};

/** @const {number} */ Player.FACTOR_WALL_ALONE = 1;
/** @const {number} */ Player.FACTOR_WALL_WITH_ENEmy = 0.5;
/** @const {number} */ Player.MAX_LIMIT_SPEED_IMPULSE = 20;
/** @const {number} */ Player.TIME_REFRESH_FRAME_SPEED_LIMIT = 500;

/** @const {string} */ Player.ST_PLAYER_STAND = 'st100';
/** @const {string} */ Player.ST_PLAYER_STAND_2 = 'st101';
/** @const {string} */ Player.ST_PLAYER_WALK = 'st102';
/** @const {string} */ Player.ST_PLAYER_RUN = 'st103';
/** @const {string} */ Player.ST_PLAYER_JUMP_UP = 'st104';
/** @const {string} */ Player.ST_PLAYER_JUMP_DOWN = 'st105';
/** @const {string} */ Player.ST_PLAYER_HIT = 'st106';
/** @const {string} */ Player.ST_PLAYER_LOSE = 'st107';
/** @const {string} */ Player.ST_PLAYER_WIN = 'st108';
/** @const {string} */ Player.ST_PLAYER_LAND = 'st109';
/** @const {string} */ Player.ST_PLAYER_CLIMB = 'st110';
/** @const {string} */ Player.ST_PLAYER_WALL = 'st111';

/**
 * @override
 * @param {string=} clipName
 */
Player.prototype.setActorClip = function( clipName ) {
};

/**
 * @public
 * @return {Vector2D}
 */
Player.prototype.collision = function() {
	return this.m_collision;
};

Player.prototype.getDisable = function() {
	return this.m_disablePlayer;
};

Player.prototype.setDisable = function( val ) {
	this.m_disablePlayer = val;
};

/**
 * @public
 * @return {boolean}
 */
Player.prototype.isInvulnerable = function() {
	return this.m_isInvulnerable;
};

/**
 * @public
 * @return {boolean}
 */
Player.prototype.isDead = function() {
	return this.m_isDead;
};

/**
 * @public
 * @param {boolean} val
 */
Player.prototype.setIsDead = function( val ) {
	this.m_isDead = val;
};

/**
 * @public
 * @return {number}
 */
Player.prototype.factorSpeedX = function() {
	return this.m_factorSpeedX;
};

/**
 * @public
 * @param {number} val
 */
Player.prototype.setFactorSpeedX = function( val ) {
	this.m_factorSpeedX = val;
};

/**
 * @public
 * @return {number}
 */
Player.prototype.factorSpeedY = function() {
	return this.m_factorSpeedY;
};

/**
 * @public
 * @param {number} val
 */
Player.prototype.setFactorSpeedY = function( val ) {
	this.m_factorSpeedY = val;
};

/**
 * @public
 * @param {string} state
 */
Player.prototype.gotoState = function( state ) {
	if ( ( state !== this.m_state ) && ( !this.m_isDead ) ) {
		this.characterGotoState( state );
		switch ( state ) {
			case Player.ST_PLAYER_LAND:
				this.onFloor();
				break;
			case Player.ST_PLAYER_LOSE:
				this.m_isDead = true;
				break;
			case Player.ST_PLAYER_JUMP_DOWN:
				break;
		}

		if ( /** @type {PlayerControl} */ ( this.m_control ).isInAction() ) {
			/** @type {PlayerControl} */ ( this.m_control ).onAction( false );
		}

		this.m_clip = this.m_character.clip;

		if ( this.m_scaleX === this.m_scaleY ) {
			this.m_clip.scale.x = ( this.m_flipX ) ? -this.m_scale : this.m_scale;
			this.m_clip.scale.y = this.m_scale;
		}
		else {
			this.m_clip.scale.x = ( this.m_flipX ) ? -this.m_scaleX : this.m_scaleX;
			this.m_clip.scale.y = this.m_scaleY;
		}

		this.m_state = state;
	}
};

/**
 * @override
 */
Player.prototype.createCorners = function() {
	if ( !/** @type {PlayerControl} */ ( this.m_control ).canClimb ) {
		SWorldActor.prototype.createCorners.call( this );
		this.m_climbCorners = null;
		return;
	}

	/** @type {Rectangle} */
	var mcCollision = null;

	if ( this.m_bounds !== null ) {
		mcCollision = new Rectangle();
		mcCollision.x = this.m_bounds.x;
		mcCollision.y = this.m_bounds.y;
		mcCollision.w = this.m_bounds.w;
		mcCollision.h = this.m_bounds.h;
	}

	if ( mcCollision !== null ) {
		this.m_corners = [];
		var _scaleX = this.m_flipX ? -this.m_scaleX : this.m_scaleX;
		var _scaleY = this.m_scaleY;
		var dx = ( this.m_flipX ) ? -1 : 1;

		if ( this.m_scaleX === this.m_scaleY ) {
			this.m_scale = this.m_scaleX;
		}
		this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + mcCollision.h ), dx, 1 ) );
		if ( Math.abs( _scaleX * mcCollision.w ) > this.m_world.tileWidth() ) {
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + 0.5 * mcCollision.w ), _scaleY * ( mcCollision.y + mcCollision.h ), 0, 1 ) );
		}
		else {
			this.m_corners.push( null );
		}
		this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + mcCollision.h ), -dx, 1 ) );

		if ( _scaleY * mcCollision.h > 3 * this.m_world.tileHeight() ) {
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.75 * mcCollision.h ), dx, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.75 * mcCollision.h ), -dx, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.5 * mcCollision.h ), dx, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.5 * mcCollision.h ), -dx, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.25 * mcCollision.h ), dx, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.25 * mcCollision.h ), -dx, 0 ) );
		}
		else if ( _scaleY * mcCollision.h > 2 * this.m_world.tileHeight() ) {
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.67 * mcCollision.h ), dx, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.67 * mcCollision.h ), -dx, 0 ) );
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.33 * mcCollision.h ), dx, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.33 * mcCollision.h ), -dx, 0 ) );
		}
		else if ( _scaleY * mcCollision.h > this.m_world.tileHeight() ) {
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y + 0.5 * mcCollision.h ), dx, 0 ) );
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y + 0.5 * mcCollision.h ), -dx, 0 ) );
			this.m_corners.push( null );
			this.m_corners.push( null );
		}
		else {
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( null );
			this.m_corners.push( null );
		}
		this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ), _scaleY * ( mcCollision.y ), dx, -1 ) );
		if ( Math.abs( _scaleX * mcCollision.w ) > this.m_world.tileWidth() ) {
			this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + 0.5 * mcCollision.w ), _scaleY * ( mcCollision.y ), 0, -1 ) );
		}
		else {
			this.m_corners.push( null );
		}
		this.m_corners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ), _scaleY * ( mcCollision.y ), -dx, -1 ) );

		this.m_cornersArray = [];
		this.m_cornersArray.push( [] );
		this.m_cornersArray.push( [] );
		this.m_cornersArray.push( [] );
		this.m_cornersArray.push( [] );
		var indexesArray = [];

		if ( this.m_flipX ) {
			indexesArray.push( [2, 1, 4, 0, 6, 8, 11] );
			indexesArray.push( [0, 1, 3, 2, 5, 7, 9] );
			indexesArray.push( [11, 10, 8, 9, 6, 4, 2] );
			indexesArray.push( [9, 10, 7, 11, 5, 3, 0] );
		}
		else {
			indexesArray.push( [0, 1, 3, 2, 5, 7, 9] );
			indexesArray.push( [2, 1, 4, 0, 6, 8, 11] );
			indexesArray.push( [9, 10, 7, 11, 5, 3, 0] );
			indexesArray.push( [11, 10, 8, 9, 6, 4, 2] );
		}

		for ( var i = 0; i < this.m_cornersArray.length; i++ ) {
			for ( var j = 0; j < indexesArray[i].length; j++ ) {
				if ( this.m_corners[indexesArray[i][j]] ) {
					this.m_cornersArray[i].push( this.m_corners[indexesArray[i][j]] );
				}
			}
		}

		this.m_climbCorners = [];

		if ( this.m_flipX ) {
			this.m_climbCorners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ),
				_scaleY * ( mcCollision.y + mcCollision.h ),
				1, 1 ) );
			this.m_climbCorners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ),
				_scaleY * ( mcCollision.y + /** @type {PlayerControl} */ ( this.m_control ).climbFactor * mcCollision.h ),
				1, -1 ) );
			this.m_climbCorners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ),
				_scaleY * ( mcCollision.y + mcCollision.h ),
				-1, 1 ) );
			this.m_climbCorners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ),
				_scaleY * ( mcCollision.y + /** @type {PlayerControl} */ ( this.m_control ).climbFactor * mcCollision.h ),
				-1, -1 ) );
		}
		else {
			this.m_climbCorners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ),
				_scaleY * ( mcCollision.y + mcCollision.h ),
				1, 1 ) );
			this.m_climbCorners.push( new SCollisionPoint( _scaleX * ( mcCollision.x + mcCollision.w ),
				_scaleY * ( mcCollision.y + /** @type {PlayerControl} */ ( this.m_control ).climbFactor * mcCollision.h ),
				1, -1 ) );
			this.m_climbCorners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ),
				_scaleY * ( mcCollision.y + mcCollision.h ),
				-1, 1 ) );
			this.m_climbCorners.push( new SCollisionPoint( _scaleX * ( mcCollision.x ),
				_scaleY * ( mcCollision.y + /** @type {PlayerControl} */ ( this.m_control ).climbFactor * mcCollision.h ),
				-1, -1 ) );
		}
	}
	else {
		this.m_cornersArray = null;
	}
	this.updateBounds();
};

/**
 * @public
 * @param {number} forceX
 * @param {number} initSpeedY
 * @param {number} type
 * @param {Spring} spring
 */
Player.prototype.onSpringCollision = function( forceX, initSpeedY, type, spring ) {
	switch ( type ) {
		case 1:
			/** @type {PlayerControl} */ ( this.m_control ).onCustomJump( initSpeedY );
			break;
		case 2:
			/** @type {PlayerControl} */ ( this.m_control ).onCustomJumpDirected( forceX, initSpeedY );
			break;
		case 3:
			/** @type {PlayerControl} */ ( this.m_control ).onCustomJumpDirected( forceX, initSpeedY );
			break;
		case 4:
			/** @type {PlayerControl} */ ( this.m_control ).onCustomJumpDirected( forceX, initSpeedY );
			break;
	}
};

/**
 * @public
 * @param {string} state
 */
Player.prototype.onEndAnimation = function( state ) {
	if ( state === Player.ST_PLAYER_JUMP_UP ) {
		this.gotoState( Player.ST_PLAYER_JUMP_DOWN );
	}
	else if ( state === Player.ST_PLAYER_LAND ) {
		this.gotoState( Player.ST_PLAYER_STAND );
	}
	else if ( state === Player.ST_PLAYER_STAND ) {
		var rand = Math.random();
		if ( rand < 0.3 ) {
			this.gotoState( Player.ST_PLAYER_STAND_2 );
		}
	}
	else if ( state === Player.ST_PLAYER_STAND_2 ) {
		this.gotoState( Player.ST_PLAYER_STAND );
	}
};

/**
 * @return {boolean}
 */
Player.prototype.isJumping = function () {
	return /** @type {PlayerControl} */ ( this.m_control ).isJumping();
};

/**
 * @public
 * @param {number} keycode
 */
Player.prototype.onKeyDown = function( keycode ) {
	if ( this.m_isDead || this.m_state === Player.ST_PLAYER_HIT
		 || this.m_state === Player.ST_PLAYER_WIN ) {
		return;
	}

	switch ( keycode ) {
		case PlayerControl.CMD_LEFT_A:
			if ( this.timerTempDisable > 0 ) { return; }
			/** @type {PlayerControl} */ ( this.m_control ).onRight( false );
			/** @type {PlayerControl} */ ( this.m_control ).onLeft( true );
			if ( this.m_isClimbing && !this.m_flipX ) {
				this.onClimbOut();
			}
			this.isPressingL = true;
			break;
		case PlayerControl.CMD_RIGHT_A:
			if ( this.timerTempDisable > 0 ) { return; }
			/** @type {PlayerControl} */ ( this.m_control ).onLeft( false );
			/** @type {PlayerControl} */ ( this.m_control ).onRight( true );
			if ( this.m_isClimbing && this.m_flipX ) {
				this.onClimbOut();
			}
			this.isPressingR = true;
			break;
		case PlayerControl.CMD_DOWN_A:
		case PlayerControl.CMD_DOWN_B:
			if ( !this.m_freeMovement ) { break; }
			/** @type {PlayerControl} */ ( this.m_control ).onDown( true );
			if ( !this.m_isClimbing ) {
				/** @type {PlayerControl} */ ( this.m_control ).onJumpDown( true );
			}
			break;
		case PlayerControl.CMD_CIRCLE:
			if ( this.m_freeMovement ) {
				/** @type {PlayerControl} */ ( this.m_control ).onUp( true );
				break;
			}

			if ( !this.m_isClimbing ) {
				if ( this.wallJumpDir === 0 || this.mode === PlayerPlatform.MODE_BOY ) {

					/** @type {PlayerControl} */ ( this.m_control ).onJump( true );

					if ( this.isInWalljumpZone !== 0 && this.wallJumpDir === 0 ) {
						this.wallJumpDir = this.isInWalljumpZone;
					}
				}
				else if ( /** @type {PlayerControl} */ ( this.m_control ).isJumping() &&
					/** @type {PlayerControl} */ ( this.m_control ).m_jumpAllowed ) {

					/** @type {PlayerControl} */ ( this.m_control ).onCustomJump( this.m_control.wallImpulseY );
					this.m_control.gravity *= this.m_control.wallJumpGravityFactor;
					Common.shake( this.m_world.game().canvas, 150, 3, 30 );
					this.m_world.game().createShaderRing( this.m_x - this.m_world.camera().getX(), this.m_y - this.m_world.camera().getY(), 3, 0.5 );
					if ( this.wallJumpDir === -1 ) {
						/** @type {PlayerControl} */ ( this.m_control ).onRight( false );
						/** @type {PlayerControl} */ ( this.m_control ).onLeft( true );
						this.m_world.createEffect( 'FxKimWallJumpL', this.m_x, this.m_y );
					}
					else if ( this.wallJumpDir === 1 ) {
						/** @type {PlayerControl} */ ( this.m_control ).onLeft( false );
						/** @type {PlayerControl} */ ( this.m_control ).onRight( true );
						this.m_world.createEffect( 'FxKimWallJumpR', this.m_x, this.m_y );
					}
					this.timerTempDisable = this.totalTimeTempDisable; // 500;
					this.isWallJumping = true;
				}
			}
			break;
	}
};

/**
 *
 * @public
 * @param {number} keycode
 */
Player.prototype.onKeyUp = function( keycode ) {
	switch ( keycode ) {
		case PlayerControl.CMD_LEFT_A:
			if ( this.timerTempDisable > 0 ) { return; }
			/** @type {PlayerControl} */ ( this.m_control ).onLeft( false );
			this.isPressingL = false;
			break;
		case PlayerControl.CMD_RIGHT_A:
			if ( this.timerTempDisable > 0 ) { return; }
			/** @type {PlayerControl} */ ( this.m_control ).onRight( false );
			this.isPressingR = false;
			break;
		case PlayerControl.CMD_DOWN_A:
		case PlayerControl.CMD_DOWN_B:
			if ( !this.m_freeMovement ) { break; }
			/** @type {PlayerControl} */ ( this.m_control ).onDown( false );
			/** @type {PlayerControl} */ ( this.m_control ).onJumpDown( false );
			break;
		case PlayerControl.CMD_CIRCLE:
			if ( this.m_freeMovement ) {
				/** @type {PlayerControl} */ ( this.m_control ).onUp( false );
				break;
			}
			/** @type {PlayerControl} */ ( this.m_control ).onJump( false );
			break;
	}
};

/**
 * @public
 * @param {number} dt
 */
Player.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );

	/** @type {PlayerControl} */ ( this.m_control ).update( dt );
	if ( this.m_freeMovement ) {
		this.moveFree( dt );
		return;
	}

	if ( this.m_isClimbing ) {
		this.moveClimb( dt );
		return;
	}

	var isJumping = /** @type {PlayerControl} */ ( this.m_control ).isJumping();

	if ( !isJumping ) {
		this.isWallJumping = false;
		this.wallJumpDir = 0;

		if ( this.doubleDownReplaced ) {
			this.doubleDownReplaced = false;
			this.prepareDoubleJump( false );
		}
	}

	if ( this.timerTempDisable > 0 ) {
		this.timerTempDisable -= dt;
		if ( this.timerTempDisable <= 0 ) {
			this.timerTempDisable = 0;
			if ( !this.auxIsPressingL ) { // !this.isPressingL ) {
				/** @type {PlayerControl} */ ( this.m_control ).onLeft( false );
			}
			if ( !this.auxIsPressingR ) { // !this.isPressingR ) {
				/** @type {PlayerControl} */ ( this.m_control ).onRight( false );
			}
		}
	}

	var limit = 0;
	var tempOldX = this.m_oldX;

	var iniY = this.m_y;
	this.integrateVerlet( dt );

	if ( this.m_vehicle !== null ) {
		if ( isNaN( this.m_vehicle.speed().y ) ) {
			Application.warn( '(fix)Vehicle speed Y is NaN' );
		}
		else {
			if ( this.m_vehicle.speed().y > 0 ) {
				this.m_y += 1.5 * dt * this.m_vehicle.speed().y;
			}
		}

		if ( isNaN( this.m_vehicle.speed().x ) ) {
			Application.warn( '(fix)Vehicle speed X is NaN' );
		}
		else {
			var deltaX = this.m_x - this.m_oldX;

			this.m_x += dt * this.m_vehicle.speed().x;

			if ( this.m_collision != null ) {
				this.m_oldX = this.m_x - deltaX;
			}
			else
			{
				this.m_oldX = this.m_x;
			}
			tempOldX = this.m_x;
		}
		this.m_lastVehicle = this.m_vehicle;
	}
	else if ( this.m_lastVehicle != null ) {
		if ( !isNaN( this.m_lastVehicle.speed().x ) ) {
			var deltaX = this.m_x - this.m_oldX;
			this.m_x += dt * this.m_lastVehicle.speed().x;
			if ( this.m_collision != null ) {
				this.m_oldX = this.m_x - deltaX;
			}
			else {
				this.m_oldX = this.m_x;
			}
			tempOldX = this.m_x;
		}
		this.m_oldY = this.m_y;
		this.m_lastVehicle = null;
	}

	var incX = 0;
	var forceX = /** @type {PlayerControl} */ ( this.m_control ).forceX();
	if ( forceX !== 0 ) {

		if ( /** @type {PlayerControl} */ ( this.m_control ).isInAction() && !/** @type {PlayerControl} */ ( this.m_control ).isJumping() ) {
			incX = 0;
		}
		else if ( !/** @type {PlayerControl} */ ( this.m_control ).isJumping() && this.m_collision ) {
			incX = /** @type {PlayerControl} */ ( this.m_control ).walkSpeed * forceX * dt;
		}
		else {
			incX = /** @type {PlayerControl} */ ( this.m_control ).airSpeed * forceX * dt;
		}

		if ( this.m_state !== Player.ST_PLAYER_WIN && this.m_state !== Player.ST_PLAYER_LOSE
			 && !/** @type {PlayerControl} */ ( this.m_control ).isJumping()
			 && !/** @type {PlayerControl} */ ( this.m_control ).isInAction() ) {
			if ( /** @type {PlayerControl} */ ( this.m_control ).isRunning() ) {
				if ( this.m_state !== Player.ST_PLAYER_RUN ) {
					this.gotoState( Player.ST_PLAYER_RUN );
				}
			}
			else {
				if ( this.m_state !== Player.ST_PLAYER_WALK ) {
					this.gotoState( Player.ST_PLAYER_WALK );
				}
			}
		}
		if ( forceX * ( this.isFacingLeft ? -1 : 1 ) < 0 ) {
			this.setFlipX( !this.isFacingLeft );
		}
	}
	else {
		if ( this.m_speed.x > -0.5 && this.m_speed.x < 0.5
			 && ( this.m_state === Player.ST_PLAYER_WALK || this.m_state === Player.ST_PLAYER_RUN )
			 && !/** @type {PlayerControl} */ ( this.m_control ).isJumping() ) {
			this.gotoState( Player.ST_PLAYER_STAND );
		}
	}

	if ( /** @type {PlayerControl} */ ( this.m_control ).isJumpingUp() ) {
		this.m_y += /** @type {PlayerControl} */ ( this.m_control ).deltaHeight();
	}

	var deltaX = this.m_x + incX - this.m_oldX;

	if ( this.m_timeCounter >= Player.TIME_REFRESH_FRAME_SPEED_LIMIT ) {
		if ( this.m_numberOfFrames != 0 ) {
			this.m_currentDtSpeedLimit = Math.floor( this.m_timeCounter / this.m_numberOfFrames );
			this.m_initFrameCounter = false;
		}
		else {
			this.m_currentDtSpeedLimit = dt;
		}
		this.m_timeCounter = 0;
		this.m_numberOfFrames = 0;
	}
	this.m_timeCounter += dt;
	this.m_numberOfFrames++;

	if ( this.m_initFrameCounter ) {
		this.m_currentDtSpeedLimit = dt;
	}

	limit = this.m_factorSpeedX * ( dt ) * ( ( !this.m_control.isJumping() && ( this.m_collision != null ) ) ?
			this.m_control.maxSpeedFloor : this.m_control.maxSpeedAir );
	if ( this.m_control.isRunning() )
	{
		limit *= this.m_control.runFactor;
	}

	var limitByImpulse = /** @type { PlayerControl } */( this.m_control ).getWasImpulsed();

	if ( limitByImpulse )
	{
		if ( Math.abs( deltaX ) >= Math.abs( limit ) )
		{
			if ( deltaX * incX > 0 )
			{
				this.m_clampForceX = true;
			}
		}
		else
		{
			/** @type{PlayerControl} */( this.m_control ).setWasImpulsed( false );
		}
		limit = Player.MAX_LIMIT_SPEED_IMPULSE * dt;
	}


	if ( deltaX < -limit ) {
		incX = 0;
		this.m_x = this.m_oldX - limit;
	}
	else if ( deltaX > limit ) {
		incX = 0;
		this.m_x = this.m_oldX + limit;
	}

	if ( this.m_clampForceX ) {
		incX = 0;
		this.m_clampForceX = false;
	}

	this.m_x += incX;
	if ( this.m_vehicle != null || this.m_lastVehicle != null ) {
		this.m_speed.x = ( this.m_x - tempOldX ) / dt;
	}
	else
	{
		this.m_speed.x = ( this.m_x - this.m_oldX ) / dt;
	}
	this.m_speed.y = ( this.m_y - this.m_oldY ) / dt;

	this.m_world.checkZones( this );

	this.m_collision = this.checkCollision();
	/** @type {PlayerControl} */ ( this.m_control ).onCollision( this.m_collision, dt );

	if ( this.m_collision ) {

		if ( /** @type {PlayerControl} */ ( this.m_control ).canClimb && this.m_climbEnabled ) {
			var index = this.m_flipX ? 2 : 0;
			var px = this.m_climbCorners[index].position.x + this.m_x;
			var py = this.m_climbCorners[index].position.y + this.m_y;
			if ( this.m_world.getCellInPosition( px, py ) === SWorldCollisionLayer.CELL_FULL ) {
				px = this.m_climbCorners[index + 1].position.x + this.m_x;
				py = this.m_climbCorners[index + 1].position.y + this.m_y;
				if ( this.m_world.getCellInPosition( px, py ) === SWorldCollisionLayer.CELL_FULL ) {
					this.m_isClimbing = true;
					this.m_y += this.m_collision.y;
					this.gotoState( Player.ST_PLAYER_CLIMB );
					this.createCorners();
					px = this.m_climbCorners[index].position.x + this.m_x;
					py = this.m_climbCorners[index + 1].position.y + this.m_y;
					if ( this.m_world.getCellInPosition( px, py ) === SWorldCollisionLayer.CELL_FULL ) {
						px = this.m_world.getTilePosition( px, py ).x;
						if ( this.m_flipX ) {
							this.m_x = ( px + 1 ) * this.m_world.tileWidth() - this.m_climbCorners[index].position.x;
						}
						else {
							this.m_x = px * this.m_world.tileWidth() - this.m_climbCorners[index].position.x;
						}
					}
					else {
						px = this.m_world.getTilePosition( px, py ).x;
						if ( this.m_flipX ) {
							this.m_x = px * this.m_world.tileWidth() - this.m_climbCorners[index].position.x;
						}
						else {
							this.m_x = ( px + 1 ) * this.m_world.tileWidth() - this.m_climbCorners[index].position.x;
						}
					}
					this.m_collision = this.m_world.checkCollision( this );
					if ( this.m_collision ) {
						this.m_y += this.m_collision.y;
					}
					return;
				}
			}
		}

		if ( ( this.m_collision.x != 0 )
				&& ( this.m_vehicle != null || this.m_lastVehicle != null ) ) {
			this.m_oldX = this.m_x;
			this.m_speed.x = 0;
		}

		var d = new Vector2D( this.m_x - this.m_oldX, this.m_y - this.m_oldY );
		var normal = d.projectionOn( this.m_collision );
		var tangent = d.minus( normal );

			normal.scale( 1 + Number( /** @type {PlayerControl} */ ( this.m_control ).elasticity ) );

		if ( !this.m_isFallingOverWall ) {
			tangent.scale( /** @type {PlayerControl} */ ( this.m_control ).friction );
			normal.add( tangent );
		}
		else {
			this.m_isFallingOverWall = false;
		}

		this.m_oldX += normal.x + this.m_collision.x;
		this.m_oldY += normal.y + this.m_collision.y;

		this.m_x += this.m_collision.x;

		if ( this.m_collision.y !== 0 ) {
			var vy = this.m_y + this.m_collision.y - iniY;
			if ( vy > -1 && vy < 1 ) {
				this.m_y = iniY;
			}
			else {
				this.m_y += this.m_collision.y;
			}
		}
	}

	this.m_world.checkWorldBoundaries( this );

	if ( ( this.m_y - this.m_clip.height ) > this.m_world.height() ) {
		this.onPlayerFellOutOfWorld();
	}
};

/**
 * @public
 */
Player.prototype.onFloor = function() {

};

/**
 * @public
 * @param {number} fx
 * @param {number} fy
 */
Player.prototype.applyImpulse = function( fx, fy ) {
	if ( this.m_isDead ) {
		return;
	}
	SWorldActor.prototype.applyImpulse.call( this, fx, fy );
};

/**
 * @public
 * @param {number} dt
 */
Player.prototype.integrateVerlet = function( dt ) {
	var oldX = this.m_oldX;
	var oldY = this.m_oldY;
	this.m_oldX = this.m_x;
	this.m_oldY = this.m_y;

	var timeCorrection = dt / this.m_previousDt;

	var enableInertiaX = false;

	if ( enableInertiaX ) {
		var incX = ( this.m_impulseX == 0 ) ? ( this.m_x - oldX ) * timeCorrection : this.m_impulseX * dt;
		if ( incX < -/** @type {PlayerControl} */ ( this.m_control ).maxVerletHorizontalDisplace ) {
			incX = -/** @type {PlayerControl} */ ( this.m_control ).maxVerletHorizontalDisplace;
		}
		else if ( incX > /** @type {PlayerControl} */ ( this.m_control ).maxVerletHorizontalDisplace ) {
			incX = /** @type {PlayerControl} */ ( this.m_control ).maxVerletHorizontalDisplace;
		}
		this.m_x += incX;
	}

	if ( !/** @type {PlayerControl} */ ( this.m_control ).isJumpingUp() ) { // && this.m_vehicle === null ) {
		var incY = ( this.m_impulseY == 0 ) ? ( this.m_y - oldY ) * timeCorrection + /** @type {PlayerControl} */ ( this.m_control ).gravity * dt * dt : this.m_impulseY * dt;
		if ( incY < -/** @type {PlayerControl} */ ( this.m_control ).maxVerletUpDisplace ) {
			incY = -/** @type {PlayerControl} */ ( this.m_control ).maxVerletUpDisplace;
		}
		else if ( incY > /** @type {PlayerControl} */ ( this.m_control ).maxVerletDownDisplace ) {
			incY = /** @type {PlayerControl} */ ( this.m_control ).maxVerletDownDisplace;
		}
		this.m_y += ( this.m_inGlide && incY > 0 ) ? incY * 0.8 : incY;
	}

	this.m_impulseX = 0;
	this.m_impulseY = 0;

	this.m_previousDt = dt;
};

/**
 * @public
 */
Player.prototype.resetControl = function() {
	if ( /** @type {PlayerControl} */ ( this.m_control ) !== null ) {
		/** @type {PlayerControl} */ ( this.m_control ).reset();
	}
};

/**
 * @public
 */
Player.prototype.resetMovement = function() {
	this.m_oldX = this.m_x;
	this.m_oldY = this.m_y;
};

Player.prototype.onEnemyCollision = function( enemy, damage ) {

};

Player.prototype.onPlayerFellOutOfWorld = function() {

};

/**
 * @public
 */
Player.prototype.freeClimbMovement = function() {
	if ( this.m_move !== null ) {
		this.m_move.free();
		this.m_move = null;
	}
};

/**
 * @public
 * @param {Movement} move
 */
Player.prototype.onMoveEnd = function( move ) {
	this.freeClimbMovement();
	this.m_isClimbing = false;
	/** @type {PlayerControl} */ ( this.m_control ).onCustomJump( 0 );
};

/**
 * @public
 * @param {number} dt
 */
Player.prototype.moveClimb = function( dt ) {
	if ( this.m_move !== null ) {
		this.m_oldX = this.m_x = this.m_move.getX();
		this.m_oldY = this.m_y = this.m_move.getY();
		this.m_move.update( dt );
		return;
	}
	var forceY = /** @type {PlayerControl} */ ( this.m_control ).forceY();
	if ( forceY !== 0 ) {
		this.gotoState( Player.ST_PLAYER_CLIMB );

		this.m_y -= forceY * /** @type {PlayerControl} */ ( this.m_control ).climbSpeed * dt;
		this.m_oldY = this.m_y;

		var coll = this.m_world.checkCollision( this );
		if ( coll ) {
			this.m_y += coll.y;
		}
		var index = this.m_flipX ? 2 : 0;
		var px = this.m_climbCorners[index].position.x + this.m_x;
		var py = this.m_climbCorners[index + 1].position.y + this.m_y;
		px += this.m_flipX ? -this.m_world.tileWidth() / 2 : this.m_world.tileWidth() / 2;
		if ( this.m_world.getCellInPosition( px, py ) === SWorldCollisionLayer.CELL_EMPTY ) {
			this.gotoState( Player.ST_PLAYER_JUMP_UP );

			this.m_move = new LinearMovement( this.m_x, this.m_y, 0.5 );
			this.m_move.setCallbacks( this, this.onMoveEnd, null );
			this.m_move.gotoPosition( px, py );
		}
	}
	else {
		this.gotoState( Player.ST_PLAYER_WALL );
	}
};

/**
 * @public
 */
Player.prototype.onClimbOut = function() {
	this.m_isClimbing = false;
	this.setFlipX( !this.m_flipX );
	if ( /** @type {PlayerControl} */ ( this.m_control ).forceY() < 0 ) {
		/** @type {PlayerControl} */ ( this.m_control ).onCustomJump( /** @type {PlayerControl} */ ( this.m_control ).climbJumpUp );
	}
	else {
		/** @type {PlayerControl} */ ( this.m_control ).onCustomJump( 0 );
	}
	this.freeClimbMovement();
};

/**
 * @override
 * @param {SEdiZone} zone
 */
Player.prototype.onEnterZone = function( zone ) {
	SWorldActor.prototype.onEnterZone.call( this, zone );
	this.isInWalljumpZone = 0;
	this.wallJumpDir = 0;
	if ( /** @type {PlayerControl} */ ( this.m_control ).isJumping() ) {
		if ( this.isFacingLeft ) { // this.m_x > zone.x ) { // && !this.m_flipX ) {
			this.wallJumpDir = 1;
		}
		else { // if ( this.m_x < zone.x ) { // && this.m_flipX ) {
			this.wallJumpDir = -1;
		}
	}

	if ( this.isFacingLeft ) { // this.m_x > zone.x ) { // && !this.m_flipX ) {
		this.isInWalljumpZone = 1;
	}
	else { //if ( this.m_x < zone.x ) { // && this.m_flipX ) {
		this.isInWalljumpZone = -1;
	}
};

/**
 * @override
 * @param {SEdiZone} zone
 */
Player.prototype.onLeaveZone = function( zone ) {
	SWorldActor.prototype.onLeaveZone.call( this, zone );
	this.isInWalljumpZone = 0;
	this.wallJumpDir = 0;
};

Player.prototype.replaceJumpDown = function () {

};

/**
 * @param {boolean} regular
 */
Player.prototype.replaceJumpUp = function ( regular ) {

};

/**
 * @param {boolean} prepare
 */
Player.prototype.prepareDoubleJump = function ( prepare ) {

};


/**
 * @public
 * @param {number} dt
 */
Player.prototype.moveFree = function( dt ) {
	var factor = ( /** @type {PlayerControl} */ ( this.m_control ).isRunning() ) ? 3 : 1;
	var forceX = /** @type {PlayerControl} */ ( this.m_control ).forceX();
	if ( forceX !== 0 ) {
		this.m_x += factor * /** @type {PlayerControl} */ ( this.m_control ).debugSpeed * forceX * dt;
	}
	var forceY = /** @type {PlayerControl} */ ( this.m_control ).forceY();
	if ( forceY !== 0 ) {
		this.m_y += factor * /** @type {PlayerControl} */ ( this.m_control ).debugSpeed * forceY * dt;
	}

	this.m_speed.x = forceX;
	this.m_speed.y = forceY;

	this.m_oldX = this.m_x;
	this.m_oldY = this.m_y;

	if ( this.m_debugCollisionOn ) {
		var coll = this.checkCollision();
		if ( coll ) {
			this.m_x += coll.x;
			this.m_y += coll.y;
		}
	}
};

/**
 * @public
 */
Player.prototype.toogleFreeMovement = function() {
	this.m_freeMovement = !this.m_freeMovement;
	this.m_isInvulnerable = this.m_freeMovement;
	if ( !this.m_freeMovement ) {
		this.resetControl();
	}
	Application.log( 'FreeMove: ' + this.m_freeMovement );
};

/**
 * @public
 */
Player.prototype.toogleDebugCollision = function() {
	this.m_debugCollisionOn = !this.m_debugCollisionOn;
	Application.log( 'Player collision: ' + this.m_debugCollisionOn );
};

/**
 * @constructor
 * @param {Player} player
 * @param {Object} data
 * @extends SActorControl
 */
function PlayerControl( player, data ) {
	/** @type {number} */
	this.climbSpeed = 0.0;
	/** @type {number} */
	this.climbCornerSpeed = 0.0;
	/** @type {number} */
	this.climbFactor = 0.0;
	/** @type {number} */
	this.climbJumpUp = 0.0;
	/** @type {number} */
	this.debugSpeed = 0.0;

	/** @type {number} */
	this.m_smallJumpTimer = 0;
	/** @type {number} */
	this.m_floatingTimer = 0;
	/** @type {Array.<number>} */
	this.m_horizontalBuffer = [0, 0];
	/** @type {Array.<number>} */
	this.m_verticalBuffer = [0, 0];
	/** @type {number} */
	this.m_deltaHeight = 0.0;
	/** @type {number} */
	this.m_timeJumping = 0;
	/** @type {boolean} */
	this.m_doubleJumpEnabled = false;
	/** @type {boolean} */
	this.m_canDoubleJump = false;
	/** @type {number} */
	this.m_jumpSpeed = 0.0;
	/** @type {number} */
	this.m_jumpInitSpeed = 0.0;
	/** @type {number} */
	this.m_jumpRunSpeed = 0.0;
	/** @type {number} */
	this.m_smallJumpTime = 0.0;
	/** @type {number} */
	this.m_smallJumpSpeed = 0.0;
	/** @type {number} */
	this.m_doubleJumpStart = 0;
	/** @type {number} */
	this.m_doubleJumpEnd = 0;
	/** @type {number} */
	this.m_doubleJumpSpeed = 0.0;
	/** @type {number} */
	this.m_jumpDownTimer = 0.0;
	/** @type {number} */
	this.m_jumpDownInterval = 0.0;
	/** @type {number} */
	this.m_impulseX = 0.0;
	/** @type {number} */
	this.m_impulseY = 0.0;
	/** @type {boolean} */
	this.m_canJumpDown = false;
	/** @type {boolean} */
	this.m_isCatchEnemy = false;
	/** @type {boolean} */
	this.m_jumpDownAllowed = false;
	/** @type {boolean} */
	this.m_wasImpulsed = false;
	/** @type {boolean} */
	this.m_jumpAllowed = false;

	/** @type {number} */
	this.TIME_FALL = 75;
	/** @type {number} */
	this.TIME_LAND = 400;

	/** @type {number} */
	this.m_currentHeight = 0;

	SActorControl.call( this, player );
	this.m_doubleJumpEnabled = true;
	this.m_canDoubleJump = this.m_doubleJumpEnabled;
	this.loadData( data );

	this.m_impulseX = 0;

	/** @type {Object} */
	this.configData = data;
}
Application.subclass( PlayerControl, SActorControl );

/** @const {number} */ PlayerControl.CMD_LEFT_A = Common.KEY_LEFT;
/** @const {number} */ PlayerControl.CMD_LEFT_B = Common.KEY_A;
/** @const {number} */ PlayerControl.CMD_RIGHT_A = Common.KEY_RIGHT;
/** @const {number} */ PlayerControl.CMD_RIGHT_B = Common.KEY_D;
/** @const {number} */ PlayerControl.CMD_UP_A = Common.KEY_UP;
/** @const {number} */ PlayerControl.CMD_UP_B = Common.KEY_W;
/** @const {number} */ PlayerControl.CMD_DOWN_A = Common.KEY_DOWN;
/** @const {number} */ PlayerControl.CMD_DOWN_B = Common.KEY_S;
/** @const {number} */ PlayerControl.CMD_CROSS = Common.KEY_Z; // Common.KEY_X;
/** @const {number} */ PlayerControl.CMD_CIRCLE = Common.KEY_UP; // Common.KEY_Z;
/** @const {number} */ PlayerControl.CMD_SQUARE = Common.KEY_C;
/** @const {number} */ PlayerControl.CDM_TRIANGLE = Common.KEY_B;
/** @const {number} */ PlayerControl.CMD_R1 = Common.KEY_V;
/** @const {number} */ PlayerControl.CMD_R2 = Common.KEY_8;

PlayerControl.prototype.deltaHeight = function() {
	return this.m_deltaHeight;
};

PlayerControl.prototype.isCatchEnemy = function() {
	return this.m_isCatchEnemy;
};

PlayerControl.prototype.getWasImpulsed = function() {
	return this.m_wasImpulsed;
};

PlayerControl.prototype.setWasImpulsed = function( value ) {
	this.m_wasImpulsed = value;
};

PlayerControl.prototype.horizontalBuffer = function() {
	return this.m_horizontalBuffer[0];
};

PlayerControl.prototype.verticalBuffer = function() {
	return this.m_verticalBuffer[0];
};

PlayerControl.prototype.forceX = function() {
	if ( this.m_isRunning ) {
		return this.runFactor * this.m_forceX;
	}
	return this.m_forceX;
};

PlayerControl.prototype.onCompleteJump = function() {
	this.m_isJumping = false;
	this.m_actor.gotoState( Player.ST_PLAYER_STAND );
};

PlayerControl.prototype.onActiveDash = function( toLeft ) {
	this.m_isRunning = true;
};

PlayerControl.prototype.loadData = function( data ) {
	SActorControl.prototype.loadData.call( this, data );

	this.debugSpeed = Common.getData( data, 'debugSpeed', this.debugSpeed );
	this.walkSpeed = Common.getData( data, 'walkSpeed', this.walkSpeed );
	this.airSpeed = Common.getData( data, 'airSpeed', this.airSpeed );
	this.normalAirSpeed = this.airSpeed;
	this.alteredAirSpeed = Common.getData( data, 'wallImpulseX', this.alteredAirSpeed );
	this.runFactor = Common.getData( data, 'runFactor', this.runFactor );
	this.canClimb = Common.getData( data, 'canClimb' );
	this.canRun = Common.getData( data, 'canRun', this.canClimb );
	this.maxSpeedFloor = Common.getData( data, 'maxSpeedFloor', this.maxSpeedFloor );
	this.maxSpeedAir = Common.getData( data, 'maxSpeedAir', this.maxSpeedAir );
	this.m_jumpRunSpeed = -Common.getData( data, 'jumpRunInitSpeed', this.m_jumpRunSpeed );
	this.m_smallJumpTime = Common.getData( data, 'smallJumpTime', this.m_smallJumpTime );
	this.m_smallJumpSpeed = -Common.getData( data, 'smallJumpSpeed', this.m_smallJumpSpeed );
	this.m_doubleJumpStart = Common.getData( data, 'doubleJumpStart', this.m_doubleJumpStart );
	this.m_doubleJumpEnd = Common.getData( data, 'doubleJumpEnd', this.m_doubleJumpEnd );

	if ( Application.instance.isMobileDevice ) {
		this.wallImpulseY = -Common.getData( data, 'wallImpulseYMOB', this.wallImpulseY );
		this.m_jumpSpeed = -Common.getData( data, 'jumpInitSpeedMOB', this.m_jumpSpeed );
		this.m_doubleJumpSpeed = -Common.getData( data, 'doubleJumpSpeedMOB', this.m_doubleJumpSpeed );
	}
	else {
		this.wallImpulseY = -Common.getData( data, 'wallImpulseY', this.wallImpulseY );
		this.m_jumpSpeed = -Common.getData( data, 'jumpInitSpeed', this.m_jumpSpeed );
		this.m_doubleJumpSpeed = -Common.getData( data, 'doubleJumpSpeed', this.m_doubleJumpSpeed );
	}

	this.m_jumpDownInterval = Common.getData( data, 'jumpDownTime', -1 );// had an extra parameter false
	this.m_canJumpDown = ( this.m_jumpDownInterval > 0 );

	if ( this.canClimb ) {
		this.climbFactor = 1 - Common.getData( data, 'climbFactor', 0.75 );
		this.climbSpeed = -Common.getData( data, 'climbSpeed', 0.33 );
		this.climbCornerSpeed = -Common.getData( data, 'climbCornerSpeed', 0.5 );
		this.climbJumpUp = -Common.getData( data, 'climbJumpUp', 1.1 );
	}
};

PlayerControl.prototype.reset = function() {
	SActorControl.prototype.reset.call( this );
	this.m_horizontalBuffer[0] = 0;
	this.m_horizontalBuffer[1] = 0;
	this.m_verticalBuffer[0] = 0;
	this.m_verticalBuffer[1] = 0;
	this.m_deltaHeight = 0;
	this.m_timeJumping = 0;
	this.m_smallJumpTimer = -1;
	this.m_floatingTimer = this.TIME_FALL;
	this.m_jumpAllowed = true;
	this.m_jumpDownTimer = -1;
	this.m_jumpDownAllowed = true;
};

PlayerControl.prototype.onCollision = function( coll, dt ) {
	if ( coll ) {
		if ( coll.y < 0 && ( this.m_isJumping || this.m_actor.state() === Player.ST_PLAYER_HIT  ) ) {
			this.m_isInAction = false;
			this.m_isJumping = false;
			this.m_actor.gotoState( Player.ST_PLAYER_LAND );
			this.m_floatingTimer = this.TIME_LAND;
		}
		if ( this.m_floatingTimer < this.TIME_FALL ) {
			this.m_floatingTimer = this.TIME_FALL;
		}
		if ( this.m_actor.vehicle() != null && this.m_floatingTimer < this.TIME_LAND ) {
			this.m_floatingTimer = this.TIME_LAND;
		}
		if ( coll.y != 0 ) {
			this.m_isJumpingUp = false;
		}

		this.m_wasImpulsed = false;
	}
	else {
		var id = this.m_actor.world().getTileBelow( this.m_actor.getX(), this.m_actor.getY() );
		if ( this.m_floatingTimer > 0
			&& ( id !== SWorldCollisionLayer.CELL_DIAG_UP_LEFT
			&& id !== SWorldCollisionLayer.CELL_DIAG_UP_RIGHT
			&& id !== SWorldCollisionLayer.CELL_MD_UP_LEFT
			&& id !== SWorldCollisionLayer.CELL_MD_UP_RIGHT
			&& id !== SWorldCollisionLayer.CELL_HMD_UP_LEFT
			&& id !== SWorldCollisionLayer.CELL_HMD_UP_RIGHT ) ) {
			this.m_floatingTimer -= dt;
			if ( this.m_floatingTimer <= 0 && !this.m_isJumping ) {
				if ( this.m_actor.state() !== Player.ST_PLAYER_HIT ) {
					this.m_actor.gotoState( Player.ST_PLAYER_JUMP_DOWN );
				}
				this.m_isJumping = true;
			}
		}
	}
};

PlayerControl.prototype.onLeft = function( pressed ) {
	if ( pressed ) {
		if ( this.m_horizontalBuffer[0] == 1 ) {
			this.m_horizontalBuffer[1] = 1;
		}
		this.m_horizontalBuffer[0] = -1;
	}
	else {
		if ( this.m_horizontalBuffer[0] == -1 ) {
			this.m_horizontalBuffer[0] = this.m_horizontalBuffer[1];
		}
		this.m_horizontalBuffer[1] = 0;
	}
};

PlayerControl.prototype.onRight = function( pressed ) {
	if ( pressed ) {
		if ( this.m_horizontalBuffer[0] == -1 ) {
			this.m_horizontalBuffer[1] = -1;
		}
		this.m_horizontalBuffer[0] = 1;
	}
	else {
		if ( this.m_horizontalBuffer[0] == 1 ) {
			this.m_horizontalBuffer[0] = this.m_horizontalBuffer[1];
		}
		this.m_horizontalBuffer[1] = 0;
	}
};

PlayerControl.prototype.onUp = function( pressed ) {
	if ( pressed ) {
		if ( this.m_verticalBuffer[0] == 1 ) {
			this.m_verticalBuffer[1] = 1;
		}
		this.m_verticalBuffer[0] = -1;
	}
	else {
		if ( this.m_verticalBuffer[0] == -1 ) {
			this.m_verticalBuffer[0] = this.m_verticalBuffer[1];
		}
		this.m_verticalBuffer[1] = 0;
	}
};

PlayerControl.prototype.onDown = function( pressed ) {
	if ( pressed ) {
		if ( this.m_verticalBuffer[0] == -1 ) {
			this.m_verticalBuffer[1] = -1;
		}
		this.m_verticalBuffer[0] = 1;
	}
	else {
		if ( this.m_verticalBuffer[0] == 1 ) {
			this.m_verticalBuffer[0] = this.m_verticalBuffer[1];
		}
		this.m_verticalBuffer[1] = 0;
	}
};

PlayerControl.prototype.onRun = function( pressed ) {
	if ( this.canRun ) {
		this.m_isRunning = pressed;
	}
};

PlayerControl.prototype.onCustomJump = function( initSpeed ) {
	Application.instance.playSound( 'SND_PLAYER_WALL_JUMP' );
	this.m_actor.gotoState( Player.ST_PLAYER_JUMP_UP );
	var player = /** @type {PlayerPlatform} */ ( this.m_actor );
	var rdSound = Common.random( 1, 2);
	if ( player.mode === PlayerPlatform.MODE_GIRL ) {
		Application.instance.playSound( 'SND_VO_PLAYER_WALL_JUMP_' + rdSound );
	}
	this.m_isJumping = true;
	this.m_isJumpingUp = true;
	this.m_timeJumping = 0;
	this.m_smallJumpTimer = -1;
	this.m_jumpInitSpeed = initSpeed;
	this.m_canDoubleJump = false;
};

PlayerControl.prototype.onCustomJumpDirected = function( forceX, initSpeed ) {
	this.m_actor.gotoState( Player.ST_PLAYER_JUMP_UP );
	this.m_isJumping = true;
	this.m_isJumpingUp = true;
	this.m_timeJumping = 0;
	this.m_smallJumpTimer = -1;
	this.m_jumpInitSpeed = initSpeed;
	this.m_impulseX = forceX;
	this.m_canDoubleJump = true;
	this.m_wasImpulsed = true;
};

PlayerControl.prototype.onJumpDown = function( pressed ) {
	if ( this.m_canJumpDown ) {
		if ( pressed ) {
			if ( this.m_jumpDownAllowed && !this.m_isJumping && this.m_actor.isOverPlatform() ) {
				this.m_jumpDownAllowed = false;
				this.m_isJumpingDown = true;
				this.m_jumpDownTimer = this.m_jumpDownInterval;
				this.m_actor.gotoState( Player.ST_PLAYER_JUMP_DOWN );
			}
			this.m_jumpDownAllowed = false;
		}
		else {
			this.m_jumpDownAllowed = true;
		}
	}
};

PlayerControl.prototype.onJump = function( pressed ) {
	if ( pressed ) {
		if ( this.m_jumpAllowed ) {
			if ( !this.m_isJumping ) {
				Application.instance.playSound( 'SND_PLAYER_JUMP_UP' );
				this.m_actor.gotoState( Player.ST_PLAYER_JUMP_UP );
				var player = /** @type {PlayerPlatform} */ ( this.m_actor );
				var rdSound = Common.random( 1, 3 );
				if ( player.mode === PlayerPlatform.MODE_GIRL && rdSound !== 3 ) {
					Application.instance.playSound( 'SND_VO_PLAYER_WALL_JUMP_' + rdSound );
				}
				else if( player.mode === PlayerPlatform.MODE_BOY && rdSound !== 3 ) {
					Application.instance.playSound( 'SND_VO_PLAYER_RON_JUMP_' + rdSound );
				}

				this.m_smallJumpTimer = this.m_smallJumpTime;
				this.m_isJumping = true;
				this.m_isJumpingUp = true;
				this.m_jumpAllowed = false;
				this.m_timeJumping = 0;
				this.m_canDoubleJump = this.m_doubleJumpEnabled;
				if ( this.m_isRunning ) {
					this.m_jumpInitSpeed = /** @type Player*/( this.m_actor ).factorSpeedY() * this.m_jumpRunSpeed;
				}
				else {
					this.m_jumpInitSpeed = /** @type Player*/( this.m_actor ).factorSpeedY() * this.m_jumpSpeed;
				}
			}
			else if ( this.m_canDoubleJump && this.m_timeJumping >= this.m_doubleJumpStart && this.m_timeJumping <= this.m_doubleJumpEnd ) {
				Application.instance.playSound( 'SND_PLAYER_JET_PACK' );
				/** @type {Player} */ ( this.m_actor ).prepareDoubleJump( true );
				this.m_actor.gotoState( Player.ST_PLAYER_JUMP_UP );
				this.m_smallJumpTimer = this.m_smallJumpTime;
				this.m_isJumpingUp = true;
				this.m_jumpAllowed = false;
				this.m_canDoubleJump = false;
				this.m_timeJumping = 0;
				this.m_jumpInitSpeed = this.m_doubleJumpSpeed;
				this.gravity *= this.doubleJumpGravityFactor;
			}
		}
	}
	else {
		this.m_jumpAllowed = true;
	}
};

PlayerControl.prototype.onAction = function( value ) {
	this.m_isInAction = value;
};

PlayerControl.prototype.onCatchEnemy = function( value ) {
	this.m_isCatchEnemy = value;
};

PlayerControl.prototype.onDashAttack = function( pressed ) {
	this.m_isInDashAttack = pressed;
};

PlayerControl.prototype.update = function( dt ) {
	if ( this.m_jumpDownTimer > 0 ) {
		this.m_jumpDownTimer -= dt;
		if ( this.m_jumpDownTimer <= 0 ) {
			this.m_isJumpingDown = false;
		}
	}

	if ( this.m_isJumping ) {
		this.m_timeJumping += dt;

		var height = this.m_jumpInitSpeed * this.m_timeJumping + 0.5 * this.gravity * this.m_timeJumping * this.m_timeJumping;

		if ( this.m_timeJumping - dt > 0 )
		{
			this.m_deltaHeight = height - this.m_currentHeight;
			this.m_currentHeight = height;
		}
		else
		{
			this.m_deltaHeight = this.m_currentHeight = height;
		}
		if ( this.m_deltaHeight > 0 ) {
			this.m_isJumpingUp = false;
			this.m_deltaHeight = 0;
		}
		if ( !this.m_isJumpingUp ) {
			this.gravity = this.regularGravity;
		}

		if ( this.m_smallJumpTimer > 0 ) {
			this.m_smallJumpTimer -= dt;
		}
	}

	if ( this.m_horizontalBuffer[0] != 0 ) {
		this.m_forceX = this.m_horizontalBuffer[0];
	}
	else if ( this.m_horizontalBuffer[1] != 0 ) {
		this.m_forceX = this.m_horizontalBuffer[1];
	}
	else {
		this.m_forceX = 0;
	}

	if ( this.m_verticalBuffer[0] != 0 ) {
		this.m_forceY = this.m_verticalBuffer[0];
	}
	else if ( this.m_verticalBuffer[1] != 0 ) {
		this.m_forceY = this.m_verticalBuffer[1];
	}
	else {
		this.m_forceY = 0;
	}

	if ( this.m_impulseX != 0 ) {
		this.m_forceX += this.m_impulseX / dt;
		this.m_impulseX = 0;
	}
};

/**
 * @param {boolean} value
 */
PlayerControl.prototype.hardcodeEnableDoubleJump = function( value ) {
	this.m_doubleJumpEnd = value ? 1000 : 0;
};

/**
 * @constructor
 */
function Global() { }

/** @type {number}*/
Global.baseScale = 1;
/** @type {number}*/
Global.minScale = 1;
/** @type {number}*/
Global.maxScale = 1;
/** @type {number}*/
Global.offsetZoomX = 0;
/** @type {number}*/
Global.offsetZoomY = 0;

/** @type {number}*/
Global.TOTAL_LEVELS = 10;
/** @type {Object} */
Global.game = null;
/** @type {number}*/
Global.level = 1;
/** @type {number}*/
Global.totalStars = 0;
/** @type {Array.<string>} */
Global.loaded_gameplay_assets = [];
/** @type {Array.<number>} */
Global.sound_content = [0];
/** @type {Array.<number>} */
Global.sound_elements = [0];
/** @type {Array.<Array.<number>>} */
Global.sound_gameplay = [
                            [1, 2, 4, 7], //SOUNDS LEVEL 1 al 3
                            [1, 2, 5, 7], //SOUNDS LEVEL 4 al 6
                            [1, 3, 6, 8]  //SOUNDS LEVEL 5 al 10
                        ];

/**
 * @constructor
 */
function Cheats() { }

Cheats.enabled = false; //Application.USE_CHEATS;
Cheats.EVENT_ON_WIN = 'onWin';
Cheats.EVENT_ON_LOSE = 'onLose';
Cheats.EVENT_ON_ADDLIFE = 'addLife';
Cheats.EVENT_ON_TOGGLE_COLLISION = 'toggleCollision';
Cheats.EVENT_ENABLE_MOUSECONTROL = 'enabledMouseControl';

Cheats.onShowHUD = false;

Cheats.events = [ Cheats.EVENT_ON_TOGGLE_COLLISION,
				  Cheats.EVENT_ON_WIN,
				  Cheats.EVENT_ON_LOSE,
				  Cheats.EVENT_ON_ADDLIFE,
				  Cheats.EVENT_ENABLE_MOUSECONTROL];

Cheats.onEvent = function( event ) {
};

Cheats.onKeyDown = function( keycode ) {
};

/**
 * @constructor
 */
function DataManager() {
    /** @type {Array.<Array.<number>>} */
    this.m_levelRegisters = [];
    /** @type {Array.<number>} */
    this.m_globalRegisters = [];

    for ( var k = 0; k < Global.TOTAL_LEVELS; ++k ) {
        this.m_levelRegisters.push( [] );
        for ( var p = 0; p < DataManager.TOTAL_LEVEL_REGISTERS; ++p ) {
            this.m_levelRegisters[k].push( 0 );
        }
    }

    for ( var k = 0; k < DataManager.TOTAL_REGISTERS; ++k ) {
        this.m_globalRegisters.push( 0 );
    }

    this.loadData();

    DataManager.instance = this;
}

/** @type {DataManager} */
DataManager.instance = null;

/** @const */DataManager.DATA_VERSION = 2;

/** @const */DataManager.KEY_VERSION = 'switDataKimPossibleV';
/** @const */DataManager.KEY_REGISTERS = 'switDataKimPossibleR';

/** @const */DataManager.REG_MAX_LEVEL_REACHED      = 0;
/** @const */DataManager.REG_ACHIEVEMENT_1          = 1;
/** @const */DataManager.REG_ACHIEVEMENT_2          = 2;
/** @const */DataManager.REG_ACHIEVEMENT_3          = 3;
/** @const */DataManager.REG_ACHIEVEMENT_4          = 4;
/** @const */DataManager.REG_ACHIEVEMENT_5          = 5;
/** @const */DataManager.REG_ACHIEVEMENT_6          = 6;
/** @const */DataManager.REG_LEVEL_UNLOCKED         = 7;
/** @const */DataManager.REG_TUTORIAL_DONE          = 8;
/** @const */DataManager.REG_MINIGAME_HELP          = 9;
/** @const */DataManager.REG_VIEW_CUTSCENE_INIT     = 10;
/** @const */DataManager.REG_VIEW_CUTSCENE_END      = 11;
/** @const */DataManager.REG_VIEW_CUTSCENE_SPECIAL  = 12;
/** @const */DataManager.REG_BOSS_ACTIVE            = 13;
/** @const */DataManager.TOTAL_REGISTERS            = 14;

/** @const */DataManager.REGLEVEL_TOKENS	   = 0;
/** @const */DataManager.REGLEVEL_TOKENS_IDS   = 1;
/** @const */DataManager.TOTAL_LEVEL_REGISTERS = 2;

DataManager.prototype.free = function() {
    this.m_levelRegisters = null;
    this.m_globalRegisters   = null;

    DataManager.instance = null;
};

/**
 * @param {number} register
 * @param {number} value
 * @return {boolean}
 */
DataManager.prototype.setGlobalRegister = function( register, value ) {
    if ( this.validateGlobalRegister( register ) ) {
        this.m_globalRegisters[register] = value;
        return true;
    }

    Application.error( 'DataManager::setGlobalRegister() - Invalid register: ' + register );
    return false;
};

/**
 * @param {number} register
 * @return {number}
 */
DataManager.prototype.getGlobalRegister = function( register ) {
    if ( this.validateGlobalRegister( register ) ) {
        return this.m_globalRegisters[register];
    }

    Application.error( 'DataManager::getGlobalRegister() - Invalid register: ' + register );
    return 0;
};

/**
 * @param {number} register
 * @param {number} level
 * @param {number} value
 * @return {boolean}
 */
DataManager.prototype.setLevelRegister = function( register, level, value ) {
    if ( this.validateLevelRegister( level, register ) ) {
        this.m_levelRegisters[level][register] = value;
        return true;
    }

    Application.error( 'DataManager::setLevelRegister() - Invalid register: ' + register );
    return false;
};

/**
 * @param {number} register
 * @param {number} level
 * @return {number}
 */
DataManager.prototype.getLevelRegister = function( register, level ) {
    if ( this.validateLevelRegister( level, register ) ) {
        return this.m_levelRegisters[level][register];
    }

    Application.error( 'DataManager::getLevelRegister() - Invalid register: ' + register );
    return 0;
};

/**
 * @private
 * @param {number} index
 * @return {boolean}
 */
DataManager.prototype.validateLevelRegister = function( level, index ) {
    return ( ( level >= 0 ) && ( level < Global.TOTAL_LEVELS ) ) &&
           ( ( index >= 0 ) && ( index < DataManager.TOTAL_LEVEL_REGISTERS ) );
};

/**
 * @private
 * @param {number} index
 * @return {boolean}
 */
DataManager.prototype.validateGlobalRegister = function( index ) {
    return ( ( index >= 0 ) && ( index < DataManager.TOTAL_REGISTERS ) );
};

DataManager.prototype.resetData = function() {
    this.clearRegisters();
    this.saveData();
};

DataManager.prototype.saveData = function() {
    /** @type {string} */
    var strData = "";
    /** @type {number} */
    var k = 0;
    /** @type {number} */
    var p = 0;

    for ( k = 0; k < DataManager.TOTAL_REGISTERS; ++k ) {
        strData += this.m_globalRegisters[k];
        if ( k < DataManager.TOTAL_REGISTERS - 1 ) {
            strData += "|";
        }
    }

    strData += "^";
    for ( k = 0; k < Global.TOTAL_LEVELS; ++k ) {
        for ( p = 0; p < DataManager.TOTAL_LEVEL_REGISTERS; ++p ) {
            strData += this.m_levelRegisters[k][p];
            if ( p < DataManager.TOTAL_LEVEL_REGISTERS - 1 ) {
                strData += ",";
            }
        }
        if ( k < Global.TOTAL_LEVELS - 1 ) {
            strData += "|";
        }
    }

    Common.saveData( DataManager.KEY_REGISTERS, strData );
    Application.log( "DataManager::saveData() - data: " + strData );
};

DataManager.prototype.loadData = function() {
    /** @type {number} */
    var dataVersion = ~~Common.loadData( DataManager.KEY_VERSION, "0" );
    if ( dataVersion !== DataManager.DATA_VERSION ) {
        Application.warn( 'DataManager::loadData() - incomplatible version: ' + dataVersion );

        Common.saveData( DataManager.KEY_VERSION, "" + DataManager.DATA_VERSION );
        this.resetData();
        return;
    }

    /** @type {string} */
    var strData = Common.loadData( DataManager.KEY_REGISTERS, "" );
    Application.log( 'DataManager::loadData() - data: ' + strData );

    /** @type {Array.<string>} */
    var arrayData = strData.split( '^' );

    if ( arrayData.length < 2 ) {
        return;
    }

    /** @type {Array.<string>} */
    var arrayRegisters = null;
    /** @type {number} */
    var k = 0;
    /** @type {number} */
    var p = 0;

    arrayRegisters = arrayData[0].split( '|' );
    for ( k = 0; k < arrayRegisters.length; ++k ) {
        this.m_globalRegisters[k] = ~~arrayRegisters[k];
    }

    arrayRegisters = arrayData[1].split( '|' );
    /** @type {Array.<string>} */
    var arrayLevel = null;
    for ( k = 0; k < arrayRegisters.length; ++k ) {
        arrayLevel = arrayRegisters[k].split( ',' );
        for ( p = 0; p < arrayLevel.length; ++p ) {
            this.m_levelRegisters[k][p] = ~~arrayLevel[p];
        }
    }
};

/** @private */
DataManager.prototype.clearRegisters = function() {
    for ( var k = 0; k < Global.TOTAL_LEVELS; ++k ) {
        for ( var p = 0; p < DataManager.TOTAL_LEVEL_REGISTERS; ++p ) {
            this.m_levelRegisters[k][p] = 0;
        }
    }
    for ( var k = DataManager.TOTAL_REGISTERS - 1; k >= 0; --k ) {
        this.m_globalRegisters[k] = 0;
    }

    this.setGlobalRegister( DataManager.REG_MAX_LEVEL_REACHED, 1 );
    this.setGlobalRegister( DataManager.REG_LEVEL_UNLOCKED, 1 );
};

/**
 * @param {number} achId
 * @return {boolean}
 */
DataManager.prototype.checkAchievement = function ( achId ) {

    var current = this.m_globalRegisters[achId];

    if ( current >= 1100 ) {
        Application.log( 'ACHIEVEMENT ALREADY UNLOCKED: ' + achId );
        return true;
    }

    var req = window['platform_general']['achievReq'][achId - 1]['req'];
    req += 1000;

    if ( current === 0 ) { current = 1000; }
    current++;

    if ( current >= req ) {
        current += 100;
        Application.log( 'ACHIEVEMENT UNLOCKED: ' + achId );
        this.m_globalRegisters[achId] = current;
        this.saveData();

        if ( GuiGame.instance.trophyManager ) {
            GuiGame.instance.trophyManager.addInfoPanel( 'STR_REP_SCREEN_TITLE_TROPHY0' + achId,
                'STR_REP_SCREEN_DESCRIPTION_TROPHY0' + achId,
                'mcGuiAchievement0',
                achId );
        }

        return true;
    }

    this.m_globalRegisters[achId] = current;
    Application.log( 'ACHIEVEMENT CURRENT DATA: ' + ( current - 1000 ) );
    this.saveData();
    return false;
};

/**
 * @param {number} achId
 * @return {boolean}
 */
DataManager.prototype.checkAchievementDone = function ( achId ) {
    var current = this.m_globalRegisters[achId];

    if ( current >= 1100 ) {
        Application.log( 'ACHIEVEMENT ALREADY UNLOCKED: ' + achId );
        return true;
    }

    return false;
};
/**
 * @constructor
 * @struct
 * @param {SDisplayObjectContainer} canvas
 * @param {SGame} game
 */
function ZoomManager( canvas, game ) {
	/** @type {SDisplayObjectContainer} */
	this.m_canvas = canvas;
	/** @type {number} */
	this.m_mode = ZoomManager.MODE_NONE;

	/** @type {SGame} */
	this.m_game = game;

	/** @type {number} */
	this.m_factorX = 0;
	/** @type {number} */
	this.m_factorY = 0;
	/** @type {number} */
	this.m_zoomInSpeed = 0;
	/** @type {number} */
	this.m_zoomOutSpeed = 0;

	/** @type {number} */
	this.m_timeIn = 0;
	/** @type {number} */
	this.m_timeOut = 0;

	/** @type {number} */
	this.m_zoomDisplaceTime = 0;
	/** @type {number} */
	this.m_zoomDisplaceXGoal = 0;
	/** @type {number} */
	this.m_zoomDisplaceYGoal = 0;
	/** @type {number} */
	this.m_zoomDisplaceXSpeed = 0;
	/** @type {number} */
	this.m_zoomDisplaceYSpeed = 0;
	/** @type {boolean} */
	this.m_returEnabled = false;
	/** @type {number} */
	this.m_stayTime = 0;

	this.m_zoomOutInterpolator = null;
	this.m_zoomInInterpolator = null;

	var x = this.m_game.world.camera().width() / 2;
	var y = this.m_game.world.camera().height() / 2;
	this.m_x = x * Global.baseScale;
	this.m_y = y * Global.baseScale;
	this.m_initAngle = Math.atan2( this.m_y, this.m_x );
	this.m_rotation = this.m_initAngle;
	this.m_turningRadius = Math.sqrt( this.m_x * this.m_x + this.m_y * this.m_y );
	this.m_rotationSpeed = 0.002 * Math.random();

	if ( Application.config['settings']['rotationInZoomEnabled'] ) {
		ZoomManager.ROTATION_ENABLED = Application.config['settings']['rotationInZoomEnabled'];
	}

	this.m_mode = ZoomManager.MODE_ZOOM_FOLLOW;
	/** @type {ElasticInterpolation} */
	this.m_valFollowInterpolator = null;
	/** @type {LinearInterpolation} */
	this.m_valFollowInterpolatorLinear = null;
	/** @type {SWorldActor} */
	this.m_actorToFollow = null;

	this.m_endInterpolatorCaller = null;
	this.m_endInterpolatorCallback = null;

	this.m_lastInterpolatorValue = -1;
};

ZoomManager.DEFAULT_TIME = 500;
ZoomManager.ROTATION_ENABLED = false;

ZoomManager.prototype.setEndInterpolatorCallback = function( caller, callback ) {
	this.m_endInterpolatorCaller = caller;
	this.m_endInterpolatorCallback = callback;
};

ZoomManager.prototype.free = function() {
	this.m_game = null;
	this.m_actorToFollow = null;

	this.m_zoomOutInterpolator = null;
	this.m_zoomInInterpolator = null;

	if ( this.m_valFollowInterpolator ) {
		ElasticInterpolation.disposeObject( this.m_valFollowInterpolator );
		this.m_valFollowInterpolator = null;
	}
	if ( this.m_valFollowInterpolatorLinear ) {
		LinearInterpolation.disposeObject( this.m_valFollowInterpolatorLinear );
		this.m_valFollowInterpolatorLinear = null;
	}

	this.m_endInterpolatorCaller = null;
	this.m_endInterpolatorCallback = null;

	this.m_canvas = null;
	this.m_mode = ZoomManager.MODE_NONE;
};

/**
* @param {number} timeIn
* @param {number} timeOut
* @param {number} x
* @param {number} y
*/
ZoomManager.prototype.setParams = function( timeIn, timeOut, timeStand, x, y ) {
	x = typeof x !== 'undefined' ? x : 0;
	y = typeof y !== 'undefined' ? y : 0;
	timeIn = typeof timeIn !== 'undefined' ? timeIn : ZoomManager.DEFAULT_TIME;
	timeOut = typeof timeOut !== 'undefined' ? timeOut : ZoomManager.DEFAULT_TIME;
	timeStand = typeof timeStand !== 'undefined' ? timeStand : ZoomManager.DEFAULT_TIME;

	if ( this.m_mode !== ZoomManager.MODE_NONE ) {
		return;
	}

	this.m_factorX = this.limitFactors( x, true );
	this.m_factorY = this.limitFactors( y, false );

	this.m_timeIn = timeIn;
	this.m_timeOut = timeOut;

	this.m_zoomInSpeed = ( Global.maxScale - Global.minScale ) / timeIn;
	this.m_zoomOutSpeed = ( -Global.maxScale + Global.minScale ) / timeOut;
	this.m_stayTime = timeStand;
};

/**
* @param {number} time
* @param {number} x
* @param {number} y
*/
ZoomManager.prototype.onDisplaceXY = function( time, x, y ) {
	if ( this.m_mode !== ZoomManager.MODE_NONE ) {
		return;
	}

	this.m_zoomDisplaceTime = time;
	this.m_zoomDisplaceXGoal = this.limitFactors( x, true );
	this.m_zoomDisplaceYGoal = this.limitFactors( y, false );
	this.m_zoomDisplaceXSpeed = ( this.m_zoomDisplaceXGoal - this.m_factorX ) / time;
	this.m_zoomDisplaceYSpeed = ( this.m_zoomDisplaceYGoal - this.m_factorY ) / time;
	this.m_mode = ZoomManager.MODE_ZOOM_DISPLACE;
};

/** @param {boolean=} autoReturn */
ZoomManager.prototype.onZoomIn = function( autoReturn ) {
	autoReturn = typeof autoReturn !== 'undefined' ? autoReturn : false;
	if ( this.m_mode === ZoomManager.MODE_NONE ) {
		this.m_mode = ZoomManager.MODE_ZOOM_IN;
	}

	this.m_returEnabled = autoReturn;

	if ( ZoomManager.ROTATION_ENABLED ) {
		this.m_rotationSpeed = 2 * Math.PI / this.m_timeIn;
	}

	if ( ZoomManager.ROTATION_ENABLED ) {
		this.m_zoomInInterpolator = ExponentialInterpolation.create( Global.baseScale,
			Global.maxScale, this.m_timeIn, 10, 0 );
	} else {
		this.m_zoomInInterpolator = ElasticInterpolation.create( Global.baseScale,
			Global.maxScale, this.m_timeIn, 0.2, 2, 0 );
	}
	this.m_zoomInInterpolator.onEndInterpolation( this, this.onEndZoomIn );
};

ZoomManager.prototype.onZoomOut = function() {
	if ( this.m_mode === ZoomManager.MODE_NONE ) {
		this.m_mode = ZoomManager.MODE_ZOOM_OUT;
	}

	if ( ZoomManager.ROTATION_ENABLED ) {
		this.m_rotationSpeed = -2 * Math.PI / this.m_timeOut;
	}

	this.m_zoomOutInterpolator = ExponentialInterpolation.create( Global.maxScale,
		Global.minScale, this.m_timeOut, 10, 0 );
	this.m_zoomOutInterpolator.onEndInterpolation( this, this.onEndZoomOut );
};

ZoomManager.prototype.onEndZoomIn = function() {
	if ( ZoomManager.ROTATION_ENABLED ) {
		this.m_rotation = this.m_initAngle;
	}

	Global.baseScale = Global.maxScale;
	this.m_mode = ZoomManager.MODE_NONE;
	if ( this.m_stayTime > 0 ) {
		this.m_mode = ZoomManager.MODE_ZOOM_STAND_IN_ZOOM;
	}
	else if ( this.m_returEnabled ) {
		this.onZoomOut();
		this.m_returEnabled = false;
	}
};

ZoomManager.prototype.onEndZoomOut = function() {
	if ( ZoomManager.ROTATION_ENABLED ) {
		this.m_rotation = this.m_initAngle;
	}

	Global.baseScale = Global.minScale;
	this.m_mode = ZoomManager.MODE_NONE;
};

/**
* @param {number} dt
*/
ZoomManager.prototype.update = function( dt ) {
	switch ( this.m_mode ) {
		case ZoomManager.MODE_NONE:
			return;
			break;
		case ZoomManager.MODE_ZOOM_STAND_IN_ZOOM:
			this.m_stayTime -= dt;
			if ( this.m_stayTime < 0 ) {
				this.m_stayTime = 0;
				this.m_mode = ZoomManager.MODE_ZOOM_OUT;
				this.m_zoomOutInterpolator = ExponentialInterpolation.create( Global.maxScale,
					Global.minScale, this.m_timeOut, 10, 0 );
				this.m_zoomOutInterpolator.onEndInterpolation( this, this.onEndZoomOut );

				if ( ZoomManager.ROTATION_ENABLED ) {
					this.m_rotationSpeed = -2 * Math.PI / this.m_timeOut;
				}
			}
			break;
		case ZoomManager.MODE_ZOOM_IN:
			if ( ZoomManager.ROTATION_ENABLED ) {
				this.m_rotation += this.m_rotationSpeed * dt;
			}
			this.m_zoomInInterpolator.update( dt );
			Global.baseScale = this.m_zoomInInterpolator.value();
			this.updateScale();
			break;
		case ZoomManager.MODE_ZOOM_DISPLACE:
			this.m_zoomDisplaceTime -= dt;
			if ( this.m_zoomDisplaceTime <= 0 ) {
				this.m_factorX = this.m_zoomDisplaceXGoal;
				this.m_factorY = this.m_zoomDisplaceYGoal;
				this.m_mode = ZoomManager.MODE_NONE;
			}
			else {
				this.m_factorX += dt * this.m_zoomDisplaceXSpeed;
				this.m_factorY += dt * this.m_zoomDisplaceYSpeed;
			}
			this.updateScale();
			break;
		case ZoomManager.MODE_ZOOM_OUT:
			if ( ZoomManager.ROTATION_ENABLED ) {
				this.m_rotation += this.m_rotationSpeed * dt;
			}
			this.m_zoomOutInterpolator.update( dt );
			Global.baseScale = this.m_zoomOutInterpolator.value();
			this.updateScale();
			break;
		case ZoomManager.MODE_ZOOM_FOLLOW:
			if ( this.getFollowInterpolator() ) {
				Global.baseScale = this.getFollowInterpolator().value() * ( Global.minScale - Global.maxScale ) + Global.maxScale;
				this.getFollowInterpolator().update( dt );
			}
			if ( this.m_actorToFollow ) {
				this.updatePosition( this.m_actorToFollow.getX(), this.m_actorToFollow.getY() );
			}
			else {
				this.updatePosition( 0, 0 );
			}
			break;
	}
};

ZoomManager.prototype.limitFactors = function( value, isHorizontal ) {
	var factor = ( 1 - ( Global.minScale / Global.maxScale ) ) / 2;
	var pos1 = 0;
	var pos2 = 0;
	if ( isHorizontal ) {
		pos1 = this.m_game.world.camera().getX() + this.m_game.world.camera().width() * factor;
		pos2 = pos1 + ( Global.minScale / Global.maxScale ) * this.m_game.world.camera().width();
	}
	else {
		pos1 = this.m_game.world.camera().getY() + this.m_game.world.camera().height() * factor;
		pos2 = pos1 + ( Global.minScale / Global.maxScale ) * this.m_game.world.camera().height();
	}

	if ( value === 0 ) {
		return 0.5;
	}
	else if ( value <= pos1 ) {
		return 0;
	}
	else if ( value >= pos2 ) {
		return 1;
	}
	else {
		return ( value - pos1 ) / ( pos2 - pos1 );
	}
};

ZoomManager.prototype.updateScale = function() {
	if ( this.m_game ) {
		this.m_canvas.scale.x = Global.baseScale;
		this.m_canvas.scale.y = Global.baseScale;
		Global.offsetZoomX = -this.m_factorX * ( Global.baseScale - Global.minScale )
			* this.m_game.world.camera().width();
		Global.offsetZoomY = -this.m_factorY * ( Global.baseScale - Global.minScale )
			* this.m_game.world.camera().height();

		if ( ZoomManager.ROTATION_ENABLED ) {
			this.m_canvas.rotation = this.m_rotation - this.m_initAngle;
			this.m_canvas.position.x = Global.offsetZoomX - Layout.left / Layout.scale
				+ this.m_x - this.m_turningRadius * Math.cos( this.m_rotation );
			this.m_canvas.position.y = Global.offsetZoomY - Layout.top / Layout.scale
				+ this.m_y - this.m_turningRadius * Math.sin( this.m_rotation );
		}
		else {
			if ( Application.WIDE_SCREEN ) {
				this.m_canvas.position.x = Global.offsetZoomX - Layout.left / Layout.scale;
				this.m_canvas.position.y = Global.offsetZoomY - Layout.top / Layout.scale;
			}
			else {
				this.m_canvas.position.x = Global.offsetZoomX;
				this.m_canvas.position.y = Global.offsetZoomY;
			}
		}
	}
};

/**
 * @param {number} target
 * @param {number} time
 */
ZoomManager.prototype.setValueToFollowElastic = function( target, time ) {
	if ( target > 1 ) { target = 1; }
	if ( target < 0 ) { target = 0; }
	this.m_valFollowInterpolator = ElasticInterpolation.create(
		this.m_valFollowInterpolator ? this.m_valFollowInterpolator.value() :
		( this.m_valFollowInterpolatorLinear ? this.m_valFollowInterpolator.value() :
		( this.m_lastInterpolatorValue !== -1 ) ?this.m_lastInterpolatorValue:0 ),
		target, time, 0.001, 0, 0 );

	if ( this.m_valFollowInterpolatorLinear ) {
		LinearInterpolation.disposeObject( this.m_valFollowInterpolatorLinear );
		this.m_valFollowInterpolatorLinear = null;
	}

	this.m_valFollowInterpolator.onEndInterpolation( this, this.onEndInterpolation );
	this.m_valFollowInterpolator.update( 0 );
};

/**
 * @param {number} target
 * @param {number} time
 */
ZoomManager.prototype.setValueToFollowLinear = function( target, time ) {
	if ( target > 1 ) { target = 1; }
	if ( target < 0 ) { target = 0; }
	if ( this.m_valFollowInterpolatorLinear ) {
		LinearInterpolation.disposeObject( this.m_valFollowInterpolatorLinear );
	}
	this.m_valFollowInterpolatorLinear = LinearInterpolation.create(
		( this.m_lastInterpolatorValue !== -1 ) ? this.m_lastInterpolatorValue :
		this.m_valFollowInterpolatorLinear ? this.m_valFollowInterpolatorLinear.value() : 0,
		target, time, 0 );
	if ( this.m_lastInterpolatorValue !== -1 ) {
		this.m_lastInterpolatorValue = -1;
	}
	this.m_valFollowInterpolatorLinear.update( 0 );
};

ZoomManager.prototype.getFollowInterpolator = function() {
	if ( this.m_valFollowInterpolator ) {
		return this.m_valFollowInterpolator;
	}
	return this.m_valFollowInterpolatorLinear;
};

/**
 * @param {SWorldActor} actor
 */
ZoomManager.prototype.setActorToFollow = function( actor ) {
	this.m_actorToFollow = actor;
};

/**
 * @param {ValueInterpolation} interpolator
 */
ZoomManager.prototype.onEndInterpolation = function( interpolator ) {
	if ( this.m_endInterpolatorCallback && this.m_endInterpolatorCaller ) {
		this.m_endInterpolatorCallback.call( this.m_endInterpolatorCaller );
	}
	this.m_lastInterpolatorValue = interpolator.value();
	ElasticInterpolation.disposeObject( interpolator );
	this.m_valFollowInterpolator = null;
};

/**
 * @param {number} x
 * @param {number} y
 */
ZoomManager.prototype.updatePosition = function( x, y ) {
	this.m_factorX = this.limitFactors( x, true );
	this.m_factorY = this.limitFactors( y, false );
	this.updateScale();
};

/**
 * @param {number} x
 * @param {number} y
 * @param {number} factorScale
 * @param {number} angle
 */
ZoomManager.prototype.setDynamicScale = function( x, y, factorScale, angle ) {
	if ( factorScale > 1 ) { factorScale = 1; }
	if ( factorScale < 0 ) { factorScale = 0; }
	angle /= 10;
	if ( angle < -Math.PI / 18 ) {
		angle = -Math.PI / 18;
	}
	if ( angle > Math.PI / 18 ) {
		angle = Math.PI / 18;
	}
	this.m_rotation = this.m_initAngle + angle;

	factorScale = factorScale * ( 1 - Math.abs( angle * 18 / Math.PI ) );

	Global.baseScale = factorScale * ( Global.minScale - Global.maxScale ) + Global.maxScale;

	this.updatePosition( x, y );
};

ZoomManager.MODE_NONE = 0;
ZoomManager.MODE_ZOOM_IN = 1;
ZoomManager.MODE_ZOOM_DISPLACE = 2;
ZoomManager.MODE_ZOOM_OUT = 3;
ZoomManager.MODE_ZOOM_STAND_IN_ZOOM = 4;
ZoomManager.MODE_ZOOM_FOLLOW = 5;

/**
 * Creates a GuiLoader.
 * @constructor
 * @param {string} clipName
 * @param {Array.<string>} jsonFiles
 * @param {string} gotoScreen
 * @param {Array.<number>=} soundGroup
 * @param {number=} start
 * @param {number=} end
 * @param {boolean=} preload
 * @param {Array=} extraAssets
 * @extends SLoaderScreen
 */
function GuiLoader( clipName, jsonFiles, gotoScreen, soundGroup, start, end,
					preload,
					extraAssets ) {
	/** @type {number} */
	this.m_angle = 0;

	SLoaderScreen.call( this, clipName, jsonFiles, gotoScreen, soundGroup,
						start, end, preload, extraAssets );
	GuiLoader.instance = this;

	/** @type {PIXI.Sprite} */
	this.m_logo = null;

	this.txtLoading = this.controls['mcGuiLoading'];
	if ( this.txtLoading ) {
		this.txtLoading.setTextReplace( 'STR_REP_LOADING_PERCENT', ['N'], [this.m_start] );
	}

	/** @type {GuiControl} */
	this.mcGuiLoaderFill = null;
	/** @type {GuiControl} */
	this.m_circle = null;

	if ( this.controls['mcGuiBar'] ) {
		this.mcGuiLoaderFill = this.getControl( 'mcGuiBar' );
		var value = start / 100;
		this.mcGuiLoaderFill.clip.scale.y = 1 - value;
	}

	if ( this.controls['mcGuiCircleBar'] ) {
		this.m_circle = this.getControl( 'mcGuiCircleBar' );
	}

	this.initLocalizedSprites();
}
Application.subclass( GuiLoader, SLoaderScreen );

/** @type {GuiLoader} */
GuiLoader.instance = null;

GuiLoader.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};

GuiLoader.prototype.initLocalizedSprites = function() {
};

/** @override */
GuiLoader.prototype.free = function() {
	if ( this.m_logo != null ) {
		this.m_logo.free();
		this.m_logo = null;
	}
	this.mcGuiLoaderFill = null;
	GuiLoader.instance = null;
	SLoaderScreen.prototype.free.call( this );
};

GuiLoader.prototype.update = function( dt ) {
	SLoaderScreen.prototype.update.call( this, dt );
};

/** @override */
GuiLoader.prototype.onFileLoaded = function() {
	SLoaderScreen.prototype.onFileLoaded.call( this );

	var percent = this.m_start;
	percent += ( this.m_loadedfiles / this.m_totalFiles ) * ( this.m_end - this.m_start );
	percent = parseInt( percent, 10 );

	if ( this.mcGuiLoaderFill ) {
		var value = percent / 100;
		this.mcGuiLoaderFill.clip.scale.y = 1 - value;
	}

	if ( this.txtLoading ) {
		this.txtLoading.setTextReplace( 'STR_REP_LOADING_PERCENT', ['N'], [percent] );
	}

	Application.info( 'onLoadProgress > ' + this.m_loadedfiles + ' of ' + this.m_totalFiles
					  + ' percent : ' + percent + '%' );
};

/** @override */
GuiLoader.prototype.onFinishScreen = function() {
	SScreen.prototype.onFinishScreen.call( this );

	if ( this.lastInteractionControl === 'mcGuiBtnNext' ) {
		Application.instance.playSound( 'MUSIC_MAIN_MENU' );
		GuiManager.instance.gotoScreen( this.m_nextScreen );
	}
};

/**
 * @override
 * @param {GuiControl} control
 */
GuiLoader.prototype.onUIPress = function( control ) {
	if ( this.activePress ) {
		return;
	}

	switch ( control.name ) {
		case 'mcGuiBtnNext':
			this.lastInteractionControl = control.name;
			break;
	}
};

/**
 * @override
 * @param {GuiControl} control
 */
GuiLoader.prototype.onUIRelease = function( control ) {
	try {
		if ( createjs['WebAudioPlugin']['context']['state'] === 'suspended' ) {
			createjs['WebAudioPlugin']['context'].resume();
		}
	}
	catch ( e ) {
		Application.error( 'There was an error while trying to resume the SoundJS Web Audio context...' );
		Application.error( e );
	}

	switch ( control.name ) {
		case 'mcGuiBtnNext':
			Application.instance.hideAddressBar();
			Application.instance.fullScreen();
			this.onResumeScreen();
			break;
	}
};

/**
 * Creates a GuiConfirm.
 * @constructor
 * @param {string} clipName
 * @param {number} x
 * @param {number} y
 * @param {SScreen} sceenParent
 * @extends SScreen
 */
function GuiConfirm( clipName, x, y, sceenParent ) {
	SScreen.call( this, clipName, x, y, sceenParent );
	this.setInteractive( true );
}
Application.subclass( GuiConfirm, SScreen );

/**
 * @param {string} idString
 */
GuiConfirm.prototype.localizedText = function( idString ) {
	this.getControl( 'mcGuiTxtTitle' ).setTextLocalized( idString );
	this.getControl( 'mcGuiTxtTitle_s' ).setTextLocalized( idString );
};

GuiConfirm.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};

GuiConfirm.prototype.onFinishScreen = function() {
	SScreen.prototype.onFinishScreen.call( this );
	Application.instance.playSound( 'SND_UI_CLICK' );
	switch ( this.lastInteractionControl ) {
		case 'mcGuiBtnYes':
			this.onPressYes();
			break;
		case 'mcGuiBtnNo':
			this.onPressNo();
			break;
	}
};

GuiConfirm.prototype.onPressNo = function() {

};

GuiConfirm.prototype.onPressYes = function() {

};

GuiConfirm.prototype.onUIPress = function( control ) {
	SScreen.prototype.onUIPress.call( this, control );
	if ( this.activePress ) {
		return;
	}

	switch ( control.name ) {
		case 'mcGuiBtnYes':
		case 'mcGuiBtnNo':
			this.activePress = true;
			this.onResumeScreen();
			break;
	}
};

/**
 * Creates a GuiCutScene
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiCutScene( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );
	this.name = 'cutscene';
	/** @type {number} */
	this.m_page = 1;
	/** @type {number} */
	this.m_oldIDImage = 0;
	/** @type {number} */
	this.m_iDImage = 0;
	/** @type {number} */
	this.m_maxPage = 1;
	/** @type {number} */
	this.m_currentID = 0;
	this.m_content = this.getControl( 'mcGuiContent' );
	/** @type {Object} */
	this.m_data = null;
	/** @type {Array.<Object>} */
	this.m_dataInfo = [
						{ 'idStringPage':'STR_REP_DIAG_INTRO_',
						  'idStTitle_1':'STR_REP_DIALOG_CHARACTER_NAME01',
						  'idStTitle_2':'STR_REP_DIALOG_CHARACTER_NAME07',
						  'idStTitle_3':'STR_REP_DIALOG_CHARACTER_NAME01',
						  'idStTitle_4':'STR_REP_DIALOG_CHARACTER_NAME02',
						  'idStTitle_5':'STR_REP_DIALOG_CHARACTER_NAME05',
						  'idImage':1,
						  'maxPage':5
						},
						{ 'idStringPage':'STR_REP_DIAG_ENDING_',
						  'idStTitle_1':'STR_REP_DIALOG_CHARACTER_NAME02',
						  'idStTitle_2':'STR_REP_DIALOG_CHARACTER_NAME03',
						  'idStTitle_3':'STR_REP_DIALOG_CHARACTER_NAME01',
						  'idStTitle_4':'STR_REP_DIALOG_CHARACTER_NAME05',
						  'idImage':2,
						  'maxPage':4
						},
						{ 'idStringPage':'STR_REP_DIAG_SECRET_',
						  'idStTitle_1':'STR_REP_DIALOG_CHARACTER_NAME04',
						  'idStTitle_2':'STR_REP_DIALOG_CHARACTER_NAME06',
						  'idStTitle_3':'STR_REP_DIALOG_CHARACTER_NAME04',
						  'idStTitle_4':'STR_REP_DIALOG_CHARACTER_NAME06',
						  'idStTitle_5':'STR_REP_DIALOG_CHARACTER_NAME02',
						  'idStTitle_6':'STR_REP_DIALOG_CHARACTER_NAME01',
						  'idStTitle_7':'STR_REP_DIALOG_CHARACTER_NAME05',
						  'idImage':3,
						  'maxPage':7
						}
					  ];

	if ( !Application.instance.isPlayingSound( 'MUSIC_MAIN_MENU' ) ) {
		Application.instance.stopAllSounds();
		Application.instance.playSound( 'MUSIC_MAIN_MENU' );
	}

	this.m_currentID = GuiCutScene.VIEW_ID_CUTSCENE;
	this.m_data = this.m_dataInfo[this.m_currentID - 1];
	this.m_maxPage = this.m_dataInfo[this.m_currentID - 1]['maxPage'];
	this.m_iDImage = this.m_dataInfo[this.m_currentID - 1]['idImage'];;


	this.loadData();
}
Application.subclass( GuiCutScene, SScreen );

GuiCutScene.VIEW_ID_CUTSCENE = 1;

GuiCutScene.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};//

GuiCutScene.prototype.loadData = function() {
	this.onShowScroll( this.m_page );
	this.onChargeImage( this.m_iDImage );
	this.getControl( 'mcGuiBtnNext' ).setVisible( !( this.m_currentID === 3 ) );
	if ( this.m_currentID === 3 ) {
		this.getControl( 'mcGuiBtnNext' ).setVisible( !( Global.level === 10 ) );
		this.getControl( 'mcGuiBtnMainmenu' ).setVisible( ( Global.level === 10 ) );
	}
	else {
		this.getControl( 'mcGuiBtnMainmenu' ).setVisible( false );
	}
};

GuiCutScene.prototype.nextPage = function() {
	this.m_page ++;
	this.m_page = ( ( this.m_page >= this.m_maxPage ) ? this.m_maxPage:this.m_page );
	this.onShowScroll( this.m_page );
};

GuiCutScene.prototype.backPage = function() {
	this.m_page --;
	this.m_page = ( ( this.m_page <= 0 ) ? 1:this.m_page );
	this.onShowScroll( this.m_page );
};

GuiCutScene.prototype.onShowScroll = function( page ) {
	this.getControl( 'mcGuiBtnScrollNextL' ).setVisible( !( page === 1 ) );
	this.getControl( 'mcGuiBtnScrollNextR' ).setVisible( !( page === this.m_maxPage ) );

	this.getControl( 'mcGuiTxtTitle' ).setTextLocalized( this.m_data[ 'idStTitle_' + page ] );
	this.getControl( 'mcGuiTxtTitle_s' ).setTextLocalized( this.m_data[ 'idStTitle_' + page ] +'_S' );
	this.getControl( 'mcGuiTxtScript' ).setTextLocalized( this.m_data['idStringPage'] + page );

	this.onChargeImage( this.m_iDImage );
};

GuiCutScene.prototype.onChargeImage = function( id ) {
	this.m_iDImage = id;
	if ( this.m_currentID === 3 ) {
		if ( this.m_page <= 3 ) {
			this.m_iDImage = 3;
		}
		else if ( this.m_page === 4 ) {
			this.m_iDImage = 4;
			Application.instance.playSound( 'SND_CUTSCENE_EXPLOTION' );
		}
		else {
			this.m_iDImage = 5;
		}
	}

	if ( this.m_oldIDImage !== this.m_iDImage ) {
		this.getControl( 'mcGuiContent' ).setClip( 'gui_screens_cutscene_img_0' + this.m_iDImage );
		this.getControl( 'mcGuiContent' ).clip.gotoAndPlay( 1 );
		this.m_oldIDImage = this.m_iDImage;
	}
};

GuiCutScene.prototype.onUIPress = function( control ) {
	if ( this.activePress ) {
		return;
	}

	SScreen.prototype.onUIPress.call( this, control );
	Application.instance.playSound( 'SND_UI_CLICK' );
	switch ( control.name ) {
		case 'mcGuiBtnScrollNextL':
			this.backPage();
			break;
		case 'mcGuiBtnScrollNextR':
			this.nextPage();
			break;
		case 'mcGuiBtnNext':
		case 'mcGuiBtnMainmenu':
			this.activePress = true;
			this.onResumeScreen();
			break;
	}
};

GuiCutScene.prototype.onFinishScreen = function() {
	SScreen.prototype.onFinishScreen.call( this );
	switch ( this.lastInteractionControl ) {
		case 'mcGuiBtnNext':
			if ( this.m_currentID === 1 ) {
				Global.level = 1;
				GuiManager.instance.gotoScreen( GuiManager.SC_GAME );
				return;
			}

			var nextSC = ( this.m_currentID === 2 )? GuiManager.SC_END_GAME:GuiManager.SC_GAME;
			GuiManager.instance.gotoScreen( nextSC );
			break;
		case 'mcGuiBtnMainmenu':
			GuiManager.instance.gotoScreen( GuiManager.SC_MAIN_MENU );
			break;
	}
};

GuiCutScene.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );
};


/**
 * Creates a GuiEndGame
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiEndGame( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );
	/** @type {boolean} */
	this.m_allToken = false;
	this.name = 'endGame';

	if ( !Application.instance.isPlayingSound( 'MUSIC_MAIN_MENU' ) ) {
		Application.instance.stopAllSounds();
		Application.instance.playSound( 'MUSIC_MAIN_MENU' );
	}

	this.loadData();
}
Application.subclass( GuiEndGame, SScreen );

GuiEndGame.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};

GuiEndGame.prototype.loadData = function() {
	var numToken = 0;
	for ( var k = 0; k < Global.TOTAL_LEVELS; k++ ) {
		var token = DataManager.instance.getLevelRegister( DataManager.REGLEVEL_TOKENS, k );
		numToken += token;
	}

	this.getControl( 'mcGuiTxtToken' ).setTextReplace( 'STR_REP_ENDGAME_TOKEN_COUNTER', ['#', '%'], [numToken, 30] );
	this.m_allToken = ( numToken === 30 )? true:false;
};

GuiEndGame.prototype.checkAllTokens = function() {
	if ( this.m_allToken ) {
		var view = DataManager.instance.getGlobalRegister( DataManager.REG_VIEW_CUTSCENE_SPECIAL );
		if ( view === 0 ) {
			DataManager.instance.setGlobalRegister( DataManager.REG_VIEW_CUTSCENE_SPECIAL, 1 );
			DataManager.instance.saveData();
			GuiCutScene.VIEW_ID_CUTSCENE = 3;
			GuiManager.instance.gotoScreen( GuiManager.SC_CUTSCENE );
			return;
		}
	}

	GuiManager.instance.gotoScreen( GuiManager.SC_MAIN_MENU );
};

GuiEndGame.prototype.onUIPress = function( control ) {
	if ( this.activePress ) {
		return;
	}

	SScreen.prototype.onUIPress.call( this, control );

	switch ( control.name ) {
		case 'mcGuiBtnMainmenu':
			Application.instance.playSound( 'SND_UI_BACK' );
			this.activePress = true;
			this.onResumeScreen();
			break;
	}
};

GuiEndGame.prototype.onFinishScreen = function() {
	SScreen.prototype.onFinishScreen.call( this );
	switch ( this.lastInteractionControl ) {
		case 'mcGuiBtnMainmenu':
			this.checkAllTokens();
			break;
	}
};


/**
 * Creates a GuiGame.
 * @constructor
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} parent
 * @extends SScreen
 */
function GuiGame( x, y, parent ) {
	SScreen.call( this, '', x, y );
	GuiGame.instance = this;
	this.game = null;
	this.zoomManager = null;
	/** @type {boolean} */
	this.deleteGame = false;
    /** @type {Array<number>} */
	this.loadedSoundGroups = [];

	this.setInteractive( true );

	this.canvasBackground = Application.instance.addDisplayContainer();
	this.canvasGame = Application.instance.addDisplayContainer();
	this.canvasControl = Application.instance.addDisplayContainer();
	this.canvasEffects = Application.instance.addDisplayContainer();
	this.canvas.addChild( this.canvasBackground );
	this.canvas.addChild( this.canvasGame );
	this.canvas.addChild( this.canvasControl );
	this.canvas.addChild( this.canvasEffects );

	this.createGame();
	this.onStart();

/*
	this.addDebugText( 250, 80 );
	var self = this;
	Application.registerTrace( function( text ) {
		self.setDebugText( text );
	} );
*/

	this.fixGameScale();
	this.deleteGame = false;

	/** @type {TrophyPopupManager} */
	this.trophyManager = new TrophyPopupManager();
}
Application.subclass( GuiGame, SScreen );

GuiGame.instance = null;
GuiGame.TX_INIT_GAME = 0;
GuiGame.TX_REMOVE_GAME = 1;
GuiGame.TIME_TUTORIAL = 800;
GuiGame.ID_MUSIC_GAME = '';

GuiGame.prototype.onStart = function() {
	if ( this.game && this.game.onStart ) {
		this.game.onStart();
	}
};

GuiGame.prototype.createZoomManager = function( game ) {
	this.zoomManager = new ZoomManager( this.canvasGame, game );
};

/** @override */
GuiGame.prototype.onAppLostFocus = function() {
	if ( this.game ) {
		this.game.onAppLostFocus();
	}
};

/** @override */
GuiGame.prototype.onAppGotFocus = function() {
	if ( this.game ) {
		this.game.onAppGotFocus();
	}
};

GuiGame.prototype.fixGameScale = function() {
	if ( this.canvasGame ) {
		if ( Application.WIDE_SCREEN ) {
			var posX = -( Layout.left / Layout.scale );
			var posY = -( Layout.top / Layout.scale );
			this.canvasGame.position.x = posX;
			this.canvasGame.position.y = posY;
			this.canvasEffects.position.x = posX;
			this.canvasEffects.position.y = posY;

			if ( this.game !== null ) {
				this.game.fixGameScale();
			}
		}
	}
};

GuiGame.prototype.createGame = function() {
	var levelIndex = Global.level;
	if ( Application.sandbox ) {
		Application.instance.isMobileDevice = Application.sandbox['startSettings']['setAsMobileDevice'];
		Application.log( '-----------------------------------' );
		Application.log( 'SANDBOX START SETTINGS' );
		for ( var property in Application.sandbox['startSettings'] ) {
			Application.log( 'SANDBOX ' + property + ' : ' + Application.sandbox['startSettings'][property] )
		}
		Application.log( '-----------------------------------' );

		levelIndex = Application.sandbox['startSettings']['level'];
	}

	var configLevel = String( 'kp_lvl_' + ( ( levelIndex === 10 ) ? '' : '0' ) + levelIndex );

	this.game = new PlatformGame( this.canvasGame, this.canvasControl, configLevel, 'platform_general' );
	this.fixGameScale();
	this.loadedSoundGroups = Global.sound_gameplay[ Common.onIDSounds(Global.level) ].slice();
	Global.game = this.game;

	if ( Application.sandbox ) {
		this.game.onDebugInit();
	}

	var idMusic = '';
	switch( Global.level ) {
		case 1:
		case 2:
		case 3:
			idMusic = 'MUSIC_GAME_HIGH_SCHOOL';
			break;
		case 4:
		case 5:
		case 6:
			idMusic = 'MUSIC_GAME_LAB';
			break;
		case 7:
		case 8:
		case 9:
		case 10:
			idMusic = 'MUSIC_GAME_LAB_2';
			break;
	}

	if ( idMusic !== '' ) {
		GuiGame.ID_MUSIC_GAME = idMusic;
		Application.instance.stopAllSounds();
		Application.instance.playSound( GuiGame.ID_MUSIC_GAME );
	}
};

GuiGame.prototype.destroyGame = function() {
	this.dropPopup();
	if ( this.game !== null ) {
		this.game.free();
		this.game = null;
	}
};

GuiGame.prototype.removeGame = function() {
	if ( !this.deleteGame ) {
		this.deleteGame = true;
		if ( this.game.playerWin ) {
			this.addPopup( GuiPopupEndLevel, 'mcGuiScreensEndlevel', 0, 0 );
		}
		else {
			this.addPopup( GuiPopupTryAgain, 'mcGuiPopupTryAgain', 0, 0 );
		}
	}
};

GuiGame.prototype.onEndTransition = function( fx ) {
	SScreen.prototype.onEndTransition.call( this, fx );
	if ( fx.params ) {
		switch ( fx.params.action ) {
			case GuiGame.TX_INIT_GAME:
				break;
			case GuiGame.TX_REMOVE_GAME:
				this.game.free();
				this.game = null;
				Application.instance.guiManager.gotoScreen( GuiManager.SC_MAIN_MENU );
				break;
		}
	}
};

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
GuiGame.prototype.onDebugDraw = function( ctx ) {
	if ( this.game !== null ) {
		this.game.onDebugDraw( ctx );
	}
};

GuiGame.prototype.onPointerPress = function( e ) {
	var event = Layout.fixInteractionEvent( e );
	if ( this.game ) {
		this.game.onPointerPress( event );
	}
};

GuiGame.prototype.onPointerRelease = function( e ) {
	var event = Layout.fixInteractionEvent( e );
	if ( this.game ) {
		this.game.onPointerRelease( event );
	}
};

GuiGame.prototype.onPointerMove = function( e ) {
	var event = Layout.fixInteractionEvent( e );
	if ( this.game ) {
		this.game.onPointerMove( event );
	}
};

GuiGame.prototype.onKeyUp = function( keyCode ) {
	SScreen.prototype.onKeyUp.call( this, keyCode );
	if ( keyCode === Common.KEY_SPACE && GuiPopupDialog.instance ) {
		GuiPopupDialog.instance.onPointerRelease( null );
		return;
	}

	if ( this.game !== null && this.popup === null ) {
		this.game.onKeyUp( keyCode );
	}
};

GuiGame.prototype.onKeyDown = function( keyCode ) {
	SScreen.prototype.onKeyDown.call( this, keyCode );
	if ( this.game !== null && this.popup === null ) {
		this.game.onKeyDown( keyCode );
	}
};

GuiGame.prototype.update = function( dt ) {
/*
	Application.trace( 'game', this.canvasGame.countChildren() + ' fps :' + Application.instance.fps + ( ( Application.RENDER_MODE === Application.RENDER_CANVAS ) ? ' (canvas)' : ' (webgl)' ) );
*/

	if ( this.zoomManager ) {
		this.zoomManager.update( dt );
	}

	if ( this.trophyManager ) {
		this.trophyManager.update( dt );
	}

	if ( this.game !== null && this.popup === null ) {
		this.game.update( dt );
	}

	SScreen.prototype.update.call( this, dt );
}

GuiGame.prototype.free = function() {
	Application.instance.stopAllSounds();
	Application.instance.tweenManager.removeAll();
	Application.instance.effectManager.clear();

	if ( this.zoomManager ) {
		this.zoomManager.free();
		this.zoomManager = null;
	}

	if ( this.trophyManager ) {
		this.trophyManager.free();
	}

	if ( this.game != null ) {
		this.game.free();
		this.game = null;
	}

	Global.game = null;
	this.canvas.removeChild( this.canvasBackground );
	this.canvasBackground.free();
	this.canvasBackground = null;
	this.canvas.removeChild( this.canvasGame );
	this.canvasGame.free();
	this.canvasGame = null;
	this.canvas.removeChild( this.canvasControl );
	this.canvasControl.free();
	this.canvasControl = null;
	this.canvas.removeChild( this.canvasEffects );
	this.canvasEffects.free();
	this.canvasEffects = null;

	GuiGame.instance = null;

	SScreen.prototype.free.call( this );

	SLoader.unloadFromList( Global.loaded_gameplay_assets );
	Application.instance.unloadSoundsFromList( this.loadedSoundGroups );
};

/**
 * Creates a GuiGameSandbox.
 * @constructor
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} parent
 * @extends SScreen
 */
function GuiGameSandbox( x, y, parent ) {
	SScreen.call( this, '', x, y );
	GuiGameSandbox.instance = this;
	this.game = null;
	/** @type {boolean} */
	this.deleteGame = false;
	this.canvasGame = Application.instance.addDisplayContainer();
	this.canvasControl = Application.instance.addDisplayContainer();
	this.canvas.addChild( this.canvasGame );
	this.canvas.addChild( this.canvasControl );
	this.createGame();

	this.canvasGame.addCollision( 'mcCollision', new Rectangle( -Application.APP_WIDTH * 0.5, 0, 2 * Application.APP_WIDTH, Application.APP_HEIGHT ) );
	this.canvasGame.addPressListener( this, this.onPointerPress );
	this.canvasGame.addReleaseListener( this, this.onPointerRelease );
	this.canvasGame.addPointerMoveListener( this, this.onPointerMove );

	this.deleteGame = false;
}
Application.subclass( GuiGameSandbox, SScreen );

GuiGameSandbox.prototype.createGame = function() {

	switch ( Application.sandbox['id'] ) {
		case window['DebugSandbox']['ID_PLATFORM']:
			this.game = new PlatformGame( this.canvasGame, this.canvasControl, 'test_game_platform_lvl01', 'PlatformGeneral' );
			break;
		default:
			Application.warn( 'SANDBOX: config to sandbox id[ ' + Application.sandbox['id'] + ' ] not found' );
	}

	if ( this.game ) {
		this.game.onDebugSandboxLoadConfig();
		Application.sandbox['setSandboxDataConfig']( this.game.onDebugGetSandboxConfig() );
		Global.game = this.game;
	}

};

GuiGameSandbox.prototype.removeGame = function() {
	if ( !this.deleteGame ) {
		this.deleteGame = true;
		this.game.free();
		this.game = null;
		Application.instance.guiManager.gotoScreen( GuiManager.SC_MAIN_MENU );
	}
};

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
GuiGameSandbox.prototype.onDebugDraw = function( ctx ) {
	if ( this.game !== null ) {
		this.game.onDebugDraw( ctx );
	}
};

GuiGameSandbox.prototype.onPointerPress = function( e ) {
	SScreen.prototype.onPointerPress.call( this, e );
	if ( this.game !== null && this.popup === null ) {
		this.game.onPointerPress( e );
	}
};

GuiGameSandbox.prototype.onPointerRelease = function( e ) {
	SScreen.prototype.onPointerRelease.call( this, e );
	if ( this.game !== null && this.popup === null ) {
		this.game.onPointerRelease( e );
	}
};

GuiGameSandbox.prototype.onPointerMove = function( e ) {
	SScreen.prototype.onPointerMove.call( this, e );
	if ( this.game !== null && this.popup === null ) {
		this.game.onPointerMove( e );
	}
};

GuiGameSandbox.prototype.onKeyUp = function( keyCode ) {
	SScreen.prototype.onKeyUp.call( this, keyCode );
	if ( this.game !== null && this.popup === null ) {
		this.game.onKeyUp( keyCode );
	}
};

GuiGameSandbox.prototype.onKeyDown = function( keyCode ) {
	SScreen.prototype.onKeyDown.call( this, keyCode );
	if ( this.game !== null && this.popup === null ) {
		this.game.onKeyDown( keyCode );
	}
};

GuiGameSandbox.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );
	if ( this.game !== null && this.popup === null ) {
		this.game.update( dt );
	}
}

GuiGameSandbox.prototype.free = function() {
	Application.instance.stopAllSounds();

	if ( this.game ) {
		this.game.free();
		this.game = null;
		Global.game = null;
	}

	this.canvas.removeChild( this.canvasGame );
	this.canvasGame = null;
	this.canvas.removeChild( this.canvasControl );
	this.canvasControl = null;
	GuiGame.instance = null;
	SScreen.prototype.free.call( this );
};

/**
 * Creates a GuiPopupPause.
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiPopupPause( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );
	this.setInteractive( true );
	this.name = 'pause';

	this.getControl( 'mcGuiBtnSound' ).gotoState( GuiOnOff.ST_ON );
	if ( !Application.instance.isSoundOn() ) {
		this.getControl( 'mcGuiBtnSound' ).gotoState( GuiOnOff.ST_OFF );
	}

	Application.instance.pauseAllSounds();
}
Application.subclass( GuiPopupPause, SScreen );

GuiPopupPause.ROWS = 6;
GuiPopupPause.COLUMNS = 10;
GuiPopupPause.X_SPEED = -0.05;
GuiPopupPause.Y_SPEED = 0.05;

GuiPopupPause.prototype.onUIPress = function( control ) {
	if ( this.activePress ) {
		return;
	}
	SScreen.prototype.onUIPress.call( this, control );
	Application.instance.playSound( 'SND_UI_CLICK' );
	switch ( control.name ) {
		case 'mcGuiBtnResume':
		case 'mcGuiBtnMainmenu':
		case 'mcGuiBtnHelp':
			this.activePress = true;
			this.onResumeScreen();
			break;
		case 'mcGuiBtnSound':
			Application.instance.toggleMute();
			break;
	}
};

GuiPopupPause.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};

GuiPopupPause.prototype.onFinishScreen = function() {
	SScreen.prototype.onFinishScreen.call( this );
	switch ( this.lastInteractionControl ) {
		case 'mcGuiBtnResume':
			this.screenParent.dropPopup();
			Application.instance.resumeAllSounds();
			break;
		case 'mcGuiBtnHelp':
			this.screenParent.addPopup( GuiPopupHelp, 'mcGuiPopupHelp', 0, 0 );
			break;
		case 'mcGuiBtnMainmenu':
			this.screenParent.addPopup( GuiPopupQuit, 'mcGuiPopupConfirm', 0, 0 );
			break;
	}
};

GuiPopupPause.prototype.onEndTransition = function( fx ) {
	SScreen.prototype.onEndTransition.call( this, fx );

	if ( fx.params ) {
		Application.instance.guiManager.gotoScreen( fx.params.screen );
	}
};

GuiPopupPause.prototype.onPressSpaceBar = function() {
};

GuiPopupPause.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );
};

GuiPopupPause.prototype.free = function() {
	SScreen.prototype.free.call( this );
};

/**
 * Creates a GuiMetamap.
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiSoundTest( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );

	Application.instance.stopAllSounds();

	/** @type {string} */
	this.m_bgm = '';
	/** @type {Array.<string>} */
	this.soundList = ['SND_BGM_SWD_BONUS',
					  'SND_BGM_SWD_CUTSCENE',
					  'SND_BGM_SWD_GAMEPLAY'];

	this.canvas.addCollision( 'mcCollision', new Rectangle( -Application.APP_WIDTH * 0.5, 0, 2 * Application.APP_WIDTH, Application.APP_HEIGHT ) );
	this.canvas.addPressListener( this, this.onPointerPress );
	this.canvas.addReleaseListener( this, this.onPointerRelease );
	this.canvas.addPointerMoveListener( this, this.onPointerMove );

	/** @type {GuiSlider} */
	this.m_slider = new GuiSlider( this.canvas, 'gui_slider', 375, 450 );
	this.m_slider.linkFunction( this, this.setBGVolume );

	/** @type {number} */
	this.m_currentValueSlider = GuiSoundTest.INIT_VALUE_SLIDER;
	this.m_slider.setPointerPosition( this.m_currentValueSlider );

	this.playRandomBGM();
}
Application.subclass( GuiSoundTest, SScreen );

/** @type {number} */
GuiSoundTest.INIT_VALUE_SLIDER = 0.75;

GuiSoundTest.prototype.onPointerPress = function( event ) {
	if ( this.m_slider !== null ) {
		this.m_slider.onPointerPress( event );
	}
};

GuiSoundTest.prototype.onPointerRelease = function( event ) {
	if ( this.m_slider !== null ) {
		this.m_slider.onPointerRelease( event );
	}
};

GuiSoundTest.prototype.onPointerMove = function( event ) {
	if ( this.m_slider !== null ) {
		this.m_slider.onPointerMove( event );
	}
};

GuiSoundTest.prototype.setBGVolume = function( value ) {
	Application.instance.setVolumeById( this.m_bgm, value );
	this.m_currentValueSlider = value;
};

GuiSoundTest.prototype.playRandomBGM = function() {
	if ( this.m_bgm !== '' ) {
		Application.instance.stopSound( this.m_bgm );
	}
	var soundIndex = Math.floor( Math.random() * this.soundList.length );
	this.m_bgm = this.soundList[soundIndex];
	Application.instance.playSound( this.m_bgm );
	Application.instance.setVolumeById( this.m_bgm, this.m_currentValueSlider );
};

GuiSoundTest.prototype.onUIPress = function( control ) {
	switch ( control.name ) {
		case 'mcBtnBack':
			GuiManager.instance.gotoScreen( GuiManager.SC_MAIN_MENU );
			break;
		case 'btn_random_bg':
			this.playRandomBGM();
			break;
		case 'btn_play_bg':
			Application.instance.stopSound( this.m_bgm );
			Application.instance.playSound( this.m_bgm );
			Application.instance.setVolumeById( this.m_bgm, this.m_currentValueSlider );
			break;
		case 'btn_pause_bg':
			Application.instance.stopSound( this.m_bgm );
			break;
		case 'btn_back':
			GuiManager.instance.gotoScreen( GuiManager.SC_MAIN_MENU );
			break;
		case 'btn_snd_1':
			Application.instance.playSound( 'SND_SWD_LOSE' );
			break;
		case 'btn_snd_2':
			Application.instance.playSound( 'SND_SWD_WIN' );
			break;
		case 'btn_snd_3':
			Application.instance.playSound( 'SND_SWD_1UP' );
			break;
		case 'btn_snd_4':
			Application.instance.playSound( 'SND_SWD_ALLTHEFOOD' );
			break;
		case 'btn_snd_5':
			Application.instance.playSound( 'SND_SWD_BONUSHIGH' );
			break;
		case 'btn_snd_6':
			Application.instance.playSound( 'SND_SWD_BOUNCE1' );
			break;
		case 'btn_snd_7':
			Application.instance.playSound( 'SND_SWD_BUMPERBIG' );
			break;
		case 'btn_snd_8':
			Application.instance.playSound( 'SND_SWD_BUMPERSMALL' );
			break;
		case 'btn_snd_9':
			Application.instance.playSound( 'SND_SWD_BUTTON' );
			break;
		case 'btn_snd_10':
			Application.instance.playSound( 'SND_SWD_EXTRAFOOD' );
			break;
		case 'btn_snd_11':
			Application.instance.playSound( 'SND_SWD_FOOD1' );
			break;
		case 'btn_snd_12':
			Application.instance.playSound( 'SND_SWD_FOOD2' );
			break;
		case 'btn_snd_13':
			Application.instance.playSound( 'SND_SWD_FOOD3' );
			break;
		case 'btn_snd_14':
			Application.instance.playSound( 'SND_SWD_HUGEWADDLES' );
			break;
		case 'btn_snd_15':
			Application.instance.playSound( 'SND_SWD_LIGHTSTAR' );
			break;
		case 'btn_snd_16':
			Application.instance.playSound( 'SND_SWD_LIGHTSTARBONUS' );
			break;
		case 'btn_snd_17':
			Application.instance.playSound( 'SND_SWD_NOBONUS' );
			break;
		case 'btn_snd_18':
			Application.instance.playSound( 'SND_SWD_POWERUP1' );
			break;
		case 'btn_snd_19':
			Application.instance.playSound( 'SND_SWD_POWERUP2' );
			break;
		case 'btn_snd_20':
			Application.instance.playSound( 'SND_SWD_RELEASELAUNCH' );
			break;
		case 'btn_snd_21':
			Application.instance.playSound( 'SND_SWD_STANBUCKS' );
			break;
		case 'btn_snd_22':
			Application.instance.playSound( 'SND_SWD_START' );
			break;
		case 'btn_snd_23':
			Application.instance.playSound( 'SND_SWD_APPEAR' );
			break;
		case 'btn_snd_24':
			Application.instance.playSound( 'SND_SWD_FULLBELLY' );
			break;
		case 'btn_snd_25':
			Application.instance.playSound( 'SND_SWD_FULLCLOTHES' );
			break;
		case 'btn_snd_26':
			Application.instance.playSound( 'SND_SWD_STANCOUGH' );
			break;
		case 'btn_snd_27':
			Application.instance.playSound( 'SND_SWD_STANGRUNT1' );
			break;
		case 'btn_snd_28':
			Application.instance.playSound( 'SND_SWD_STANGRUNT2' );
			break;
		case 'btn_snd_29':
			Application.instance.playSound( 'SND_SWD_STANGRUNT3' );
			break;
		case 'btn_snd_30':
			Application.instance.playSound( 'SND_SWD_STANOW' );
			break;
		case 'btn_snd_31':
			Application.instance.playSound( 'SND_SWD_STANYAY' );
			break;
		case 'btn_snd_32':
			Application.instance.playSound( 'SND_DKO_KICKSHOOTSP' );
			break;
		case 'btn_snd_33':
			Application.instance.playSound( 'SND_DKO_SPEED' );
			break;
		case 'btn_snd_34':
			Application.instance.playSound( 'SND_DKO_WHISTLE2' );
			break;
		case 'btn_snd_35':
			Application.instance.playSound( 'SND_DKO_WHISTLE3' );
			break;
		case 'btn_snd_36':
			Application.instance.playSound( 'SND_DXDA_COLLECTPOWERUP' );
			break;
		case 'btn_snd_37':
			Application.instance.playSound( 'SND_DXDA_COLLIDE' );
			break;
		case 'btn_snd_38':
			Application.instance.playSound( 'SND_DXDA_INVINCIBLE_POWERUP' );
			break;
		case 'btn_snd_39':
			Application.instance.playSound( 'SND_DXDA_LAUNCH' );
			break;
		case 'btn_snd_40':
			Application.instance.playSound( 'SND_DXDA_SPEEDOMETER0' );
			break;
		case 'btn_snd_41':
			Application.instance.playSound( 'SND_DXDA_SPEEDOMETER7' );
			break;
		case 'btn_snd_42':
			Application.instance.playSound( 'SND_DXDA_POWERUPADAM' );
			break;
		case 'btn_snd_43':
			Application.instance.playSound( 'SND_DXDA_SPEEDOMETERRED' );
			break;
		case 'btn_snd_44':
			Application.instance.playSound( 'SND_DXDA_POWERUPLEO' );
			break;
		case 'btn_snd_45':
			Application.instance.playSound( 'SND_DXDA_POWERUPSUMO' );
			break;
		case 'btn_snd_46':
			Application.instance.playSound( 'SND_RCP_BOSSELECTRIC' );
			break;
		case 'btn_snd_47':
			Application.instance.playSound( 'SND_RCP_BOSSELECTRO' );
			break;
		case 'btn_snd_48':
			Application.instance.playSound( 'SND_RCP_BOSSINVULNERABLE' );
			break;
		case 'btn_snd_49':
			Application.instance.playSound( 'SND_MM_DETECT' );
			break;
		case 'btn_snd_50':
			Application.instance.playSound( 'SND_MM_DRESS' );
			break;
		case 'btn_snd_51':
			Application.instance.playSound( 'SND_MM_HEAL1' );
			break;
		case 'btn_snd_52':
			Application.instance.playSound( 'SND_MM_HEAL4' );
			break;
		case 'btn_snd_53':
			Application.instance.playSound( 'SND_MM_POWERFLUX' );
			break;
		case 'btn_snd_54':
			Application.instance.playSound( 'SND_MM_URGENCY' );
			break;
	}
};

GuiSoundTest.prototype.onPressSpaceBar = function() {
	GuiManager.instance.gotoScreen( GuiManager.SC_GAME );
	SScreen.prototype.onPressSpaceBar.call( this );
};

GuiSoundTest.prototype.onEndTransition = function( fx ) {
	SScreen.prototype.onEndTransition.call( this, fx );
	if ( fx.params ) {
		Application.instance.guiManager.gotoScreen( fx.params.screen );
	}
};

GuiSoundTest.prototype.free = function() {
	this.m_slider.free();
	this.m_slider = null;
	this.soundList = null;
	SScreen.prototype.free.call( this );
};
/**
 * Creates a GuiTestsMenu.
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiTestsMenu( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );
}
Application.subclass( GuiTestsMenu, SScreen );

GuiTestsMenu.prototype.onClick = function( elem ) {
	Application.instance.playSound( 'SND_UI_CLICK' );
	switch ( elem.name ) {
		case 'btn_play':
			GuiManager.instance.gotoScreen( GuiManager.SC_SOUND_TEST );
			break;
	}
};

GuiTestsMenu.prototype.onEndTransition = function( fx ) {
	SScreen.prototype.onEndTransition.call( this, fx );
	if ( fx.params ) {
		Application.instance.guiManager.gotoScreen( fx.params.screen );
	}
};

GuiTestsMenu.prototype.onPressSpaceBar = function() {
	SScreen.prototype.onPressSpaceBar.call( this );
	GuiManager.instance.gotoScreen( GuiManager.SC_METAMAP );
};


/**
 * Creates a GuiMainMenu.
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiMainMenu( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );
	/** @type {PIXI.Sprite} */
	this.m_logo = null;
	/** @type {Array.<Object>} */
    this.m_parallax = [];
	/** @type {number} */
    this.percentageParallaxX = 0;
	/** @type {number} */
    this.percentageParallaxY = 0;
	/** @type {Animation} */
    this.m_chapter01 = null;
	/** @type {Animation} */
    this.m_chapter02 = null;
	/** @type {Animation} */
    this.m_chapter03 = null;
	/** @type {number} */
    this.m_initPostX_chapter01 = 0;
	/** @type {number} */
    this.m_initPostY_chapter01 = 0;
	/** @type {number} */
    this.m_initPostX_chapter02 = 0;
	/** @type {number} */
    this.m_initPostY_chapter02 = 0;
	/** @type {number} */
    this.m_initPostX_chapter03 = 0;
	/** @type {number} */
    this.m_initPostY_chapter03 = 0;

	if ( !Application.instance.isPlayingSound( 'MUSIC_MAIN_MENU' ) ) {
		Application.instance.stopAllSounds();
		Application.instance.playSound( 'MUSIC_MAIN_MENU' );
	}

	GuiMainMenu.doneFirstLoader = true;
	this.m_count = 0;
	this.initLocalizedSprites();
	this.chargeImageParallax();

	this.percentageParallaxX = 0;
	this.percentageParallaxY = 0;
	this.m_isClickable = true;


	this.setInteractive( true );
}
Application.subclass( GuiMainMenu, SScreen );

GuiMainMenu.doneFirstLoader = false;

GuiMainMenu.prototype.chargeImageParallax = function() {
	this.m_parallax = [
						{
							'clip':this.getControl( 'mcGuiCharacterRuffus' ).clip,
							'initX':this.getControl( 'mcGuiCharacterRuffus' ).clip.position.x,
							'initY':this.getControl( 'mcGuiCharacterRuffus' ).clip.position.y,
							'amplitudeX':320,
							'amplitudeY':200
						},
						{
							'clip':this.getControl( 'mcGuiCharacterKim' ).clip,
							'initX':this.getControl( 'mcGuiCharacterKim' ).clip.position.x,
							'initY':this.getControl( 'mcGuiCharacterKim' ).clip.position.y,
							'amplitudeX':80,
							'amplitudeY':120
						},
						{
							'clip':this.getControl( 'mcGuiCharacterRon' ).clip,
							'initX':this.getControl( 'mcGuiCharacterRon' ).clip.position.x,
							'initY':this.getControl( 'mcGuiCharacterRon' ).clip.position.y,
							'amplitudeX':200,
							'amplitudeY':100
						}
					  ];
};

GuiMainMenu.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};

GuiMainMenu.prototype.init = function() {
	SScreen.prototype.init.call( this );
	Application.instance.onOrientationchange( null );
};

GuiMainMenu.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );

};

GuiMainMenu.prototype.onPointerMove = function( event ) {
	if ( this.popup ) { return }

	this.percentageParallaxX = ( ( event.data.global.x - Application.APP_WIDTH / 2 ) / Application.APP_WIDTH ) * 0.2;
	this.percentageParallaxY = ( ( event.data.global.y - Application.APP_HEIGHT / 2 ) / Application.APP_HEIGHT ) * 0.2;

	if ( this.percentageParallaxX > 1 ) {
		this.percentageParallaxX = 1;
	}
	else if ( this.percentageParallaxX < -1 ) {
		this.percentageParallaxX = -1;
	}

	if ( this.percentageParallaxY > 1 ) {
		this.percentageParallaxY = 1;
	}
	else if ( this.percentageParallaxY < -1 ) {
		this.percentageParallaxY = -1;
	}

	for ( var k = 0; k < this.m_parallax.length; k++ ) {
		if ( this.m_parallax[k]['clip'] ) {
			this.m_parallax[k]['clip'].position.x = this.m_parallax[k]['initX'] + this.percentageParallaxX * this.m_parallax[k]['amplitudeX'];
			this.m_parallax[k]['clip'].position.y = this.m_parallax[k]['initY'] + this.percentageParallaxY * this.m_parallax[k]['amplitudeY'];
		}
	}
};

GuiMainMenu.prototype.free = function() {
	if ( this.m_logo != null ) {
		this.m_logo.free();
		this.m_logo = null;
	}
	SScreen.prototype.free.call( this );
};

GuiMainMenu.prototype.initLocalizedSprites = function() {
	var localizedImg = Application.instance.getLocalizedImage( 'gui_screens_mainmenu_logo.png' );
	this.m_logo = localizedImg;

	if ( this.controls['mcGuiLogo'] ) {
	    this.getControl( 'mcGuiLogo' ).clip.addChild( this.m_logo );
	    this.m_logo['pivot']['x'] = 402;
	    this.m_logo['pivot']['y'] = 99;
	}
};

GuiMainMenu.prototype.onUIPress = function( control ) {
	if ( this.activePress ) {
		return;
	}

	SScreen.prototype.onUIPress.call( this, control );
	Application.instance.fullScreen();

	switch ( control.name ) {
		case 'mcGuiBtnPlay':
			Application.instance.playSound( 'SND_UI_PLAY' );
			this.activePress = true;
			Application.externalTrack( 'Game Start' );
			this.onResumeScreen();
			break;
		case 'mcGuiBtnReset':
			Application.instance.playSound( 'SND_UI_CLICK' );
			this.addPopup( GuiPopupReset, 'mcGuiPopupConfirm', 0, 0 );
			break;
		case 'mcGuiBtnTrophies':
			this.activePress = true;
			Application.instance.playSound( 'SND_UI_CLICK' );
			this.onResumeScreen();
			break;
	}
};

GuiMainMenu.prototype.onFinishScreen = function() {
	switch ( this.lastInteractionControl ) {
		case 'mcGuiBtnPlay':
			var view = DataManager.instance.getGlobalRegister( DataManager.REG_VIEW_CUTSCENE_INIT );
			if ( view === 0 ) {
				DataManager.instance.setGlobalRegister( DataManager.REG_VIEW_CUTSCENE_INIT, 1 );
				DataManager.instance.saveData();
				GuiCutScene.VIEW_ID_CUTSCENE = 1;
				GuiManager.instance.gotoScreen( GuiManager.SC_CUTSCENE )
				return;
			}
			GuiManager.instance.gotoScreen( GuiManager.SC_METAMAP );
			break;
		case 'mcGuiBtnTrophies':
			GuiManager.instance.gotoScreen( GuiManager.SC_TROPHIES );
			break;
	}
};

GuiMainMenu.prototype.onEndTransition = function( fx ) {
	SScreen.prototype.onEndTransition.call( this, fx );
	if ( fx.params !== null ) {
		if ( typeof fx.params.screen !== 'undefined' ) {
			GuiManager.instance.gotoScreen( fx.params.screen );
		}
	}
};

GuiMainMenu.prototype.onPressSpaceBar = function() {
	SScreen.prototype.onPressSpaceBar.call( this );
	GuiManager.instance.gotoScreen( GuiManager.SC_METAMAP );
};


/**
 * Creates a GuiMetamap.
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiMetamap( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );
	/** @type {Array.<GuiMetamapPage>} */
	this.m_pages = [];
	/** @type {ScrollHandler} */
	this.m_scroll = null;
	/** @type {number} */
	this.m_currentPage = 0;
	/** @type {number} */
	this.m_levelUnlocked = 0;
	/** @type {number} */
	this.m_maxLevelUnlocked = 0;
	/** @type {boolean} */
	this.m_isScrolling = false;
	/** @type {GuiControl} */
	this.m_content = null;
	if ( this.controls['mcGuiContent'] ) {
		this.m_content = this.getControl( 'mcGuiContent' );
	}

	if ( !Application.instance.isPlayingSound( 'MUSIC_MAIN_MENU' ) ) {
		Application.instance.stopAllSounds();
		Application.instance.playSound( 'MUSIC_MAIN_MENU' );
	}

	this.m_levelUnlocked = DataManager.instance.getGlobalRegister( DataManager.REG_LEVEL_UNLOCKED );
	this.m_maxLevelUnlocked = DataManager.instance.getGlobalRegister( DataManager.REG_MAX_LEVEL_REACHED );

	this.setInteractive( true );
	this.loadData();
}
Application.subclass( GuiMetamap, SScreen );

GuiMetamap.SCROLL_TIME_PRESS = 500;
GuiMetamap.MAX_PAGE = 2;

GuiMetamap.prototype.loadData = function() {
	for ( var k = 1; k <= 3; k++ ) {
		var page = new GuiMetamapPage( this, ( ( k == 3 ) ? 4:3 ), k );
		page.canvas.position.x = ( ( k - 1 ) * 1024 ) + 512;
		this.m_content.canvas['addChild']( page.canvas );
		this.m_pages.push( page );
	}

	this.m_scroll = new ScrollHandler();
	this.m_scroll.maxIndex = GuiMetamap.MAX_PAGE;
	this.m_scroll.displaceX = 1024;
	this.m_scroll.duration = GuiMetamap.SCROLL_TIME_PRESS;
	this.m_scroll.index = this.m_currentPage;
	this.m_scroll.addUpdateListener( this, this.updatePositions );
	this.m_scroll.addCompleteListener( this, this.onCompleteScroll );
	this.onMoveScroll( this.m_currentPage );
};

GuiMetamap.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
	for ( var k = 0; k < this.m_pages.length; k++ ) {
		if ( this.m_pages[k] !== null ) {
			this.m_pages[k].activePress = false;
		}
	}
};

/**
 * @return {boolean}
 */
GuiMetamap.prototype.onCheckLevelUnlocked = function( id ) {
	return ( id <= this.m_maxLevelUnlocked );
};

/**
 * @return {number}
 */
GuiMetamap.prototype.onCheckTokens = function( id ) {
	var numToken = DataManager.instance.getLevelRegister( DataManager.REGLEVEL_TOKENS, id - 1 );
	var frame = numToken + 1;
	return frame;
};

GuiMetamap.prototype.onUIPress = function( control ) {
	if ( this.activePress ) {
		return;
	}

	SScreen.prototype.onUIPress.call( this, control );
	switch ( control.name ) {
		case 'mcGuiBtnMainmenu':
			this.activePress = true;
			this.onResumeScreen();
			Application.instance.playSound( 'SND_UI_BACK' );
			break;
		case 'mcGuiBtnScrollL':
			Application.instance.playSound( 'SND_UI_CLICK' );
			this.scrollImageLeft();
			break;
		case 'mcGuiBtnScrollR':
			Application.instance.playSound( 'SND_UI_CLICK' );
			this.scrollImageRight();
			break;
	}
};

GuiMetamap.prototype.onActionBack = function() {

};

GuiMetamap.prototype.onActionMain = function() {
	GuiManager.instance.gotoScreen( GuiManager.SC_MAIN_MENU );
};

GuiMetamap.prototype.onFinishScreen = function() {
	switch ( this.lastInteractionControl ) {
		case 'mcGuiBtnMainmenu':
			this.onActionMain();
			break;
		case 'mcGuiButtonGame':
			GuiManager.instance.gotoScreen( GuiManager.SC_GAME );
			break;
	}
};

GuiMetamap.prototype.scrollImageLeft = function() {
	this.m_currentPage --;
	this.m_currentPage = ( ( this.m_currentPage <= 0 ) ? 0:this.m_currentPage );
	this.onMoveScroll( this.m_currentPage );
};

GuiMetamap.prototype.scrollImageRight = function() {
	this.m_currentPage ++;
	this.m_currentPage = ( ( this.m_currentPage >= GuiMetamap.MAX_PAGE ) ? GuiMetamap.MAX_PAGE:this.m_currentPage );
	this.onMoveScroll( this.m_currentPage );
};

GuiMetamap.prototype.onMoveScroll = function( page ) {
	this.m_currentPage = page;
	this.m_scroll.goto( this.m_currentPage );
	this.getControl( 'mcGuiBtnScrollL' ).canvas.visible = !( this.m_currentPage === 0 );
	this.getControl( 'mcGuiBtnScrollR' ).canvas.visible = !( this.m_currentPage === GuiMetamap.MAX_PAGE );
};

GuiMetamap.prototype.updatePositions = function( scroll ) {
	if ( this.m_content !== null ) {
		this.m_content.canvas.position.x = -scroll.x;
	}
};

GuiMetamap.prototype.onCompleteScroll = function( scroll ) {
	this.m_isScrolling = false;
};

GuiMetamap.prototype.onEndTransition = function( fx ) {
	SScreen.prototype.onEndTransition.call( this, fx );
	if ( fx.params ) {
		Application.instance.guiManager.gotoScreen( fx.params.screen );
	}
};

GuiMetamap.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );

	for ( var k = 0; k < this.m_pages.length; k++ ) {
		if ( this.m_pages[k] !== null ) {
			this.m_pages[k].update( dt );
		}
	}
};

GuiMetamap.prototype.free = function() {
	for ( var k = 0; k < this.m_pages.length; k++ ) {
		if ( this.m_pages[k] !== null ) {
			this.getControl( 'mcGuiContent' ).canvas['removeChild']( this.m_pages[k].canvas );
			this.m_pages[k].free();
			this.m_pages[k] = null;
			this.m_pages.splice( k, 1 );
			k--;
		}
	}

	if ( this.m_scroll !== null ) {
		this.m_scroll.free();
		this.m_scroll = null;
	}

	SScreen.prototype.free.call( this );
};

/**
 * @constructor
 * @param {GuiMetamap} parent
 * @param {number} idMap
 * @param {number} idPage
 * @extends SScreen
 */
function GuiMetamapPage( parent, idMap, idPage ) {
	/** @type {GuiMetamap} */
	this.parentSC = parent;
	/** @type {number} */
	this.idPage = idPage;
	/** @type {number} */
	this.idMap = idMap;

	var skinPage = String( 'mcGuiScreenMetamapLvl' + this.idMap );
	SScreen.call( this, skinPage, 0, 0, null );

	this.loadPage();
}
Application.subclass( GuiMetamapPage, SScreen );

GuiMetamapPage.prototype.loadPage = function() {
	this.onSetControls();
	this.getControl( 'mcGuiCharacter' ).clip.gotoAndStop( this.idPage );

	this.activePress = true;
};

GuiMetamapPage.prototype.onSetControls = function() {
	var baseLevel = ( this.idPage - 1 ) * 3;
	for ( var k = 1; k <= this.idMap; k++ ) {
		var idLevel = baseLevel + k;
		this.getControl( 'mcGuiTextLevel_' + k + '_over' ).setText( idLevel );
		this.getControl( 'mcGuiTextLevel_' + k + '_s' ).setText( idLevel );
		this.getControl( 'mcGuiTextLevel_' + k ).setText( idLevel );

		var validate = this.parentSC.onCheckLevelUnlocked( idLevel );
		/** @type {GuiButtonState} */ ( this.getControl( 'mcGuiBtnLvl0' + k  ) ).setEnabled( validate );
		this.getControl( 'mcGuiTextLevel_' + k + '_s' ).setVisible( validate );
		this.getControl( 'mcGuiTextLevel_' + k ).setVisible( validate );
		this.getControl( 'mcGuiToken0' + k  ).setVisible( validate );

		var frameToken = this.parentSC.onCheckTokens( idLevel );
		this.getControl( 'mcGuiToken0' + k  ).clip.gotoAndStop( frameToken );
	}

	this.overText( 0 );
};

GuiMetamapPage.prototype.overText = function( id ) {
	for ( var k = 1; k <= this.idMap; k++ ) {
		this.getControl( 'mcGuiTextLevel_' + k + '_over' ).setVisible( false );
	}

	if ( id === 0 ) {
		return;
	}
};

GuiMetamapPage.prototype.onUIPress = function( control ) {
	if ( this.activePress ) {
		return;
	}
	SScreen.prototype.onUIPress.call( this, control );
	switch ( control.name ) {
		case 'mcGuiBtnLvl01':
		case 'mcGuiBtnLvl02':
		case 'mcGuiBtnLvl03':
		case 'mcGuiBtnLvl04':
			Application.instance.stopSound( 'MUSIC_MAIN_MENU' );
			Application.instance.playSound( 'SND_UI_BEEP' );

			var baseLevel = ( ( this.idPage - 1 ) * 3 ) + ( parseInt( control.name.substr( 12 ), 10 ) );
			Global.level = baseLevel;
			this.activePress = true;
			this.parentSC.activePress = true;
			this.parentSC.lastInteractionControl = 'mcGuiButtonGame';
			this.parentSC.onResumeScreen();
			break;
	}
};


/**
 * Creates a GuiTrophies.
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiTrophies( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );
	this.name = 'trophies';
	/** @type {string} */
	this.m_stateDisplace = GuiTrophies.ST_NONE;
	/** @type {Array.<GuiTrophiesItems>} */
	this.m_trophies = [];
	/** @type {number} */
	this.m_idTrophie = 0;

	for ( var k = 1; k <= GuiTrophies.ST_TOTAL_TROPHIES; k++ ) {
		var items = new GuiTrophiesItems( this, k );
		items.canvas.position.x = 0;
		items.canvas.position.y = 0;
		this.getControl( 'mcGuiAchievement0' + k ).canvas['addChild']( items.canvas );
		this.m_trophies.push( items );
	}

	this.changeInformation( 1 );
}
Application.subclass( GuiTrophies, SScreen );

GuiTrophies.ST_TOTAL_TROPHIES = 6;

GuiTrophies.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};

GuiTrophies.prototype.onFinishScreen = function() {
	switch ( this.lastInteractionControl ) {
		case 'mcGuiBtnMainmenu':
			GuiManager.instance.gotoScreen( GuiManager.SC_MAIN_MENU );
			break;
	}
};

GuiTrophies.prototype.onUIPress = function( control ) {
	SScreen.prototype.onUIPress.call( this, control );
	if ( this.activePress ) {
		return;
	}

	Application.instance.playSound( 'SND_UI_CLICK' );
	switch ( control.name ) {
		case 'mcGuiBtnMainmenu':
			this.activePress = true;
			this.onResumeScreen();
			break;
	}
};

GuiTrophies.prototype.changeInformation = function( id ) {
	var title = String( 'STR_REP_SCREEN_TITLE_TROPHY0' + id );
	var description = String( 'STR_REP_SCREEN_DESCRIPTION_TROPHY0' + id );
	this.getControl( 'mcGuiTxtATitle' ).setTextLocalized( title );

	var req = window['platform_general']['achievReq'][id - 1]['req'];
	switch ( id ) {
		case 1:
		case 2:
		case 3:
			this.getControl( 'mcGuiTxtADescription' ).setTextReplace( description, ['#'], ['' + req] );
			break;
		default:
			this.getControl( 'mcGuiTxtADescription' ).setTextLocalized( description );
	}

	var unlocked = false;
	var charID = '';
	if ( DataManager.instance ) {
		unlocked = DataManager.instance.checkAchievementDone( id );
	}
	charID = ( unlocked )? 's':'i';
	this.getControl( 'mcGuiTrophy' ).setClip( 'mcGuiAchievement0' + id + '_' + charID );
};

GuiTrophies.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );
};

/**
 * Creates a GuiTrophiesItems.
 * @constructor
 * @param {GuiTrophies} parentSC
 * @param {number} idTrophy
 * @extends SScreen
 */
function GuiTrophiesItems( parentSC, idTrophy ) {
	/** @type {GuiTrophies} */
	this.parentSC = parentSC;
	/** @type {number} */
	this.idTrophy = idTrophy;
	/** @type {boolean} */
	this.isUnlocked = false;
	if ( DataManager.instance ) {
		this.isUnlocked = DataManager.instance.checkAchievementDone( idTrophy );
	}

	SScreen.call( this, 'mcGuiTrohy', 0, 0, null );
	this.name = 'trophy_item';

	this.loadData();
}
Application.subclass( GuiTrophiesItems, SScreen );

GuiTrophiesItems.prototype.loadData = function() {
	var unlocked = ( this.isUnlocked )? 'n':'i';
	this.getControl( 'mcTrophy' ).setClip( 'mcGuiAchievement0' + this.idTrophy + '_' + unlocked );
};

GuiTrophiesItems.prototype.onUIPress = function( control ) {
	SScreen.prototype.onUIPress.call( this, control );
	switch ( control.name ) {
		case 'mcButton':
			Application.instance.playSound( 'SND_UI_CLICK' );
			this.onOverButton();
			break;
	}
};

GuiTrophiesItems.prototype.onUIOver = function( control ) {
	SScreen.prototype.onUIOver.call( this, control );

	switch ( control.name ) {
		case 'mcButton':
			this.onOverButton();
			break;
	}
};

GuiTrophiesItems.prototype.onOverButton = function() {
	this.parentSC.changeInformation( this.idTrophy );
	this.getControl( 'mcTrophy' ).clip.setScale( 1.15, 1.15 );
};

GuiTrophiesItems.prototype.onUIOut = function( control ) {
	SScreen.prototype.onUIOut.call( this, control );

	switch ( control.name ) {
		case 'mcButton':
			this.onOutButton();
			break;
	}
};

GuiTrophiesItems.prototype.onOutButton = function() {
	this.getControl( 'mcTrophy' ).clip.setScale( 1, 1 );
};


/**
 * @constructor
 * @extends ScreenManager
 */
function GuiManager() {
	new DataManager();

	ScreenManager.call( this );
	GuiManager.instance = this;

	/** @type {number} */
	this.loaderStart = 0;
}

Application.subclass( GuiManager, ScreenManager );

GuiManager.instance = null;
GuiManager.oldScreen = '';
GuiManager.sandboxGuiView = ''; // set in sandbox "GuiList.js"

GuiManager.SC_SANDBOX = 'gui_sandbox';
GuiManager.SC_SANBOX_GUI_VIEW = 'gui_sandbox_gui_view';
GuiManager.SC_SANBOX_NANO_VIEW = 'gui_sandbox_nano_view';
GuiManager.SC_SOUND_LOADER = 'gui_soundloader';
GuiManager.SC_PRELOAD = 'gui_preload';
GuiManager.SC_LOADER = 'gui_loader';
GuiManager.SC_MAIN_MENU = 'gui_main_menu';
GuiManager.SC_CUTSCENE = 'gui_sc_cutscene';
GuiManager.SC_GAME = 'gui_game';
GuiManager.SC_METAMAP = 'gui_metamap';
GuiManager.SC_TROPHIES = 'gui_trophies';
GuiManager.SC_END_GAME = 'gui_end_game';
GuiManager.SC_TESTMENU = 'gui_test_menu';
GuiManager.SC_SOUND_TEST = 'gui_sound_test';

GuiManager.prototype.gotoScreen = function( idScreen ) {

	ScreenManager.prototype.gotoScreen.call( this, idScreen );

	/** @type {Array.<string>} */
	var assetsGroup = null;
	var assetsRTL = ( Application.RIGHT_TO_LEFT ) ? '_rtl' : '';

	switch ( idScreen ) {
		case GuiManager.SC_PRELOAD:
			assetsGroup = window['SWT_BUNDLES']['preload' + assetsRTL];
			if ( !SLoader.checkTexturesLoaded( assetsGroup ) ) {
				this.currentScreen = new GuiLoader( '',
													assetsGroup,
													'',
													null,
													0, 100,
													true,
													window['SWT_BUNDLES']['localized'] );
			}
			break;
		case GuiManager.SC_MAIN_MENU:
			assetsGroup = window['SWT_BUNDLES']['media_content' + assetsRTL];
			if ( !SLoader.checkTexturesLoaded( assetsGroup ) ) {
				this.currentScreen = new GuiLoader( 'mcGuiScreenLoader',
													assetsGroup,
													GuiManager.SC_MAIN_MENU,
													Global.sound_content,
													0, Application.SOUND_PERCENT );
			}
			else {
				assetsGroup = window['SWT_BUNDLES']['media_elements' + assetsRTL];
				if ( !SLoader.checkTexturesLoaded( assetsGroup ) ) {
					this.currentScreen = new GuiLoader( 'mcGuiScreenLoader',
														assetsGroup,
														GuiManager.SC_MAIN_MENU,
														Global.sound_elements,
														Application.SOUND_PERCENT, 100 );
				}
				else {
					this.currentScreen = new GuiMainMenu( 'mcGuiScreenMainMenu' );
				}
			}
			break;
		case GuiManager.SC_GAME:
			this.startGame();
			break;
		case GuiManager.SC_CUTSCENE:
			assetsGroup = window['SWT_BUNDLES']['media_elements' + assetsRTL];
			if ( !SLoader.checkTexturesLoaded( assetsGroup ) ) {
				this.currentScreen = new GuiLoader( 'mcGuiScreenLoader',
													assetsGroup,
													GuiManager.SC_CUTSCENE );
			}
			else {
				this.currentScreen = new GuiCutScene( 'mcGuiCutscene' );
			}
			break;
		case GuiManager.SC_METAMAP:
			assetsGroup = window['SWT_BUNDLES']['media_elements' + assetsRTL];
			if ( !SLoader.checkTexturesLoaded( assetsGroup ) ) {
				this.currentScreen = new GuiLoader( 'mcGuiScreenLoader',
													assetsGroup,
													GuiManager.SC_METAMAP );
			}
			else {
				this.currentScreen = new GuiMetamap( 'mcGuiScreenMetamap' );
			}
			break;
		case GuiManager.SC_TROPHIES:
			this.currentScreen = new GuiTrophies( 'mcGuiScreenAchievements' );
			break;
		case GuiManager.SC_END_GAME:
			assetsGroup = window['SWT_BUNDLES']['media_elements' + assetsRTL];
			if ( !SLoader.checkTexturesLoaded( assetsGroup ) ) {
				this.currentScreen = new GuiLoader( 'mcGuiScreenLoader',
													assetsGroup,
													GuiManager.SC_END_GAME );
			}
			else {
				this.currentScreen = new GuiEndGame( 'mcGuiScreenEndgame' );
			}
			break;
		case GuiManager.SC_TESTMENU:
			break;
		case GuiManager.SC_SOUND_TEST:
			this.currentScreen = new GuiSoundTest( 'mcGuiScreenSoundTest' );
			break;
		case GuiManager.SC_SANDBOX:
			var sounds = Global.sound_content;
			sounds = sounds.concat( Global.sound_elements );
			assetsGroup = window['SWT_BUNDLES']['media_content' + assetsRTL];
			assetsGroup = assetsGroup.concat( window['SWT_BUNDLES']['media_elements' + assetsRTL] );
			if ( !SLoader.checkTexturesLoaded( assetsGroup ) ) {
				this.currentScreen = new GuiLoader( 'mcGuiScreenLoader',
													assetsGroup,
													GuiManager.SC_GAME,
													sounds );
			}
			else {
				this.startGame();
			}
			break;
		case GuiManager.SC_SANBOX_GUI_VIEW:
			assetsGroup = window['SWT_BUNDLES']['media_gameplay' + assetsRTL];
			assetsGroup = assetsGroup.concat( window['SWT_BUNDLES']['media_game'] );
			assetsGroup = assetsGroup.concat( window['SWT_BUNDLES']['media_content' + assetsRTL] );
			assetsGroup = assetsGroup.concat( window['SWT_BUNDLES']['media_elements' + assetsRTL] );
			assetsGroup = assetsGroup.concat( window['SWT_BUNDLES']['preload' + assetsRTL] );
			if ( !SLoader.checkTexturesLoaded( assetsGroup ) ) {
				this.currentScreen = new GuiLoader( 'mcGuiScreenLoader',
													assetsGroup,
													GuiManager.SC_SANBOX_GUI_VIEW );
			}
			else {
				this.currentScreen = new DebugScreen( GuiManager.sandboxGuiView );
			}
			break;
		case GuiManager.SC_SANBOX_NANO_VIEW:
			var assets = 'sandbox_nano';
			if ( window['Assets'][assets] ) {
				this.currentScreen = new GuiLoader( 'mcGuiScreenLoader',
													window['Assets'][assets],
													GuiManager.SC_SANBOX_NANO_VIEW );
				window['Assets'][assets] = null;
			}
			else {
				this.currentScreen = new DebugScreenNano();
			}
			break;
	}
};

GuiManager.prototype.startGame = function() {
	if ( GuiManager.instance.currentScreen ) {
		GuiManager.instance.currentScreen.free();
	}
	Global.loaded_gameplay_assets = [];
	var extraAssets = [];
	var assetsRTL = ( Application.RIGHT_TO_LEFT ) ? '_rtl' : '';
	Global.loaded_gameplay_assets = window['SWT_BUNDLES']['media_gameplay' + assetsRTL].slice();
	var strLevel = ( Global.level < 10 ? '_0'  + Global.level : '_' + Global.level );
	var worldJson = window['SWT_BUNDLES']['media_world' + strLevel].slice();
	Global.loaded_gameplay_assets = Global.loaded_gameplay_assets.concat( window['SWT_BUNDLES']['media_game'] );
	Global.loaded_gameplay_assets = Global.loaded_gameplay_assets.concat( worldJson );

	if ( !SLoader.checkTexturesLoaded( Global.loaded_gameplay_assets ) ) {
		GuiManager.instance.currentScreen = new GuiLoader( 'mcGuiScreenLoader',
														   Global.loaded_gameplay_assets,
														   GuiManager.SC_GAME,
														   Global.sound_gameplay[ Common.onIDSounds(Global.level) ],
														   0,
														   100,
														   false,
														   extraAssets );
	}
	else {
		GuiManager.instance.currentScreen = new GuiGame();
	}
};

GuiManager.prototype.onKeyDown = function( keycode ) {
	ScreenManager.prototype.onKeyDown.call( this, keycode );
	Cheats.onKeyDown( keycode );
};

GuiManager.prototype.free = function() {
	GuiManager.instance = null;
	ScreenManager.prototype.free.call( this );
};

/**
 * Creates a GuiPopupEndLevel
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiPopupEndLevel( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );
	/** @type {boolean} */
	this.m_completedAllLevel = false;
	/** @type {boolean} */
	this.m_allToken = false;

	this.name = 'endLevel';
	Application.instance.stopAllSounds();
	this.loadData();
	Application.instance.playSound( 'MUSIC_STING_WIN' );
}
Application.subclass( GuiPopupEndLevel, SScreen );

GuiPopupEndLevel.instance = null;

GuiPopupEndLevel.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};

GuiPopupEndLevel.prototype.checkAllToken = function() {
	var numToken = 0;
	for ( var k = 0; k < Global.TOTAL_LEVELS; k++ ) {
		var token = DataManager.instance.getLevelRegister( DataManager.REGLEVEL_TOKENS, k );
		numToken += token;
	}

	this.m_allToken = ( numToken === 30 )? true:false;
};

GuiPopupEndLevel.prototype.loadData = function() {
	var numToken = PlatformGame.instance.tokens;
	var timeGame = PlatformGame.instance.currentTime();
	var idPlayer = PlatformGame.instance.world.player().mode + 1;

	this.getTime( timeGame );
	this.getControl( 'mcGuiCharacters' ).setClip('gui_screens_endlevel_character0' + idPlayer);
	this.getControl( 'mcGuiTxtTokenCounter' ).setTextReplace( 'STR_REP_ENDLEVEL_TOKEN_COUNTER', ['#', '%'], [numToken, 3] );
	this.getControl( 'mcGuiTxtTokenCounter_s' ).setTextReplace( 'STR_REP_ENDLEVEL_TOKEN_COUNTER', ['#', '%'], [numToken, 3] );

	var idLevel = ( Global.level - 1 );
    var oldToken = DataManager.instance.getLevelRegister( DataManager.REGLEVEL_TOKENS, idLevel );
    if ( numToken > oldToken ) {
        DataManager.instance.setLevelRegister( DataManager.REGLEVEL_TOKENS, idLevel, numToken );
	}

	var maxLevel = DataManager.instance.getGlobalRegister( DataManager.REG_MAX_LEVEL_REACHED );
    if ( Global.level === maxLevel && Global.level < Global.TOTAL_LEVELS ) {
		var newUnlocked = ( Global.level + 1 );
        DataManager.instance.setGlobalRegister( DataManager.REG_MAX_LEVEL_REACHED, newUnlocked );
        DataManager.instance.setGlobalRegister( DataManager.REG_LEVEL_UNLOCKED, 1 );
	}

	DataManager.instance.saveData();

	if ( Global.level === Global.TOTAL_LEVELS ) {
		this.m_completedAllLevel = true;
	}

	Global.level = ( Global.level === Global.TOTAL_LEVELS )? Global.TOTAL_LEVELS:(Global.level + 1);

	this.checkAllToken();
};

GuiPopupEndLevel.prototype.getTime = function( params ) {
	var time = Common.makeClockTime( params );
	var minutes = Common.getDigitsByValue( time['minutes'], 2 ).join( '' );
	var seconds = Common.getDigitsByValue( time['seconds'], 2 ).join( '' );
	var totalTime = String( minutes + ':' + seconds );

	this.getControl( 'mcGuiTxtTimer' ).setText( totalTime );
};

GuiPopupEndLevel.prototype.onUIPress = function( control ) {
	SScreen.prototype.onUIPress.call( this, control );
	if ( this.activePress ) {
		return;
	}

	Application.instance.playSound( 'SND_UI_CLICK' );
	switch ( control.name ) {
		case 'mcGuiBtnHome':
		case 'mcGuiBtnNext':
			this.activePress = true;
			this.onResumeScreen();
			break;
	}
};

GuiPopupEndLevel.prototype.onFinishScreen = function() {
	SScreen.prototype.onFinishScreen.call( this );
	switch ( this.lastInteractionControl ) {
		case 'mcGuiBtnHome':
			this.screenParent.dropPopup();
			GuiManager.instance.gotoScreen( GuiManager.SC_MAIN_MENU );
			break;
		case 'mcGuiBtnNext':
			this.screenParent.dropPopup();
			var viewCS = 0;
			if ( this.m_completedAllLevel ) {
				viewCS = DataManager.instance.getGlobalRegister( DataManager.REG_VIEW_CUTSCENE_END );
				if ( viewCS === 0 ) {
					DataManager.instance.setGlobalRegister( DataManager.REG_VIEW_CUTSCENE_END, 1 );
					DataManager.instance.saveData();
					GuiCutScene.VIEW_ID_CUTSCENE = 2;
					GuiManager.instance.gotoScreen( GuiManager.SC_CUTSCENE );
					return;
				}
			}
			if ( this.m_allToken ) {
				viewCS = DataManager.instance.getGlobalRegister( DataManager.REG_VIEW_CUTSCENE_SPECIAL );
				if ( viewCS === 0 ) {
					DataManager.instance.setGlobalRegister( DataManager.REG_VIEW_CUTSCENE_SPECIAL, 1 );
					DataManager.instance.saveData();
					GuiCutScene.VIEW_ID_CUTSCENE = 3;
					GuiManager.instance.gotoScreen( GuiManager.SC_CUTSCENE );
					return;
				}
			}
			var nextScreen = ( !this.m_completedAllLevel )? GuiManager.SC_GAME:GuiManager.SC_END_GAME;
			GuiManager.instance.gotoScreen( nextScreen );
			break;
	}
};

/**
 * Creates a GuiPopupTryAgain
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiPopupTryAgain( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );
	this.name = 'tryAgain';

	this.loadData();

	Application.instance.stopAllSounds();
	Application.instance.playSound( 'MUSIC_STING_LOSE' );
}
Application.subclass( GuiPopupTryAgain, SScreen );

GuiPopupTryAgain.instance = null;

GuiPopupTryAgain.prototype.loadData = function() {
	var idPlayer = PlatformGame.instance.world.player().mode + 1;
	this.getControl( 'mcGuiCharacters' ).setClip('gui_screens_tryagain_character0' + idPlayer);

	var numToken = PlatformGame.instance.tokens;
	var idLevel = ( Global.level - 1 );
	var oldToken = DataManager.instance.getLevelRegister( DataManager.REGLEVEL_TOKENS, idLevel );
	if ( numToken > oldToken ) {
		DataManager.instance.setLevelRegister( DataManager.REGLEVEL_TOKENS, idLevel, numToken );
	}
	DataManager.instance.saveData();
};

GuiPopupTryAgain.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};

GuiPopupTryAgain.prototype.onUIPress = function( control ) {
	if ( this.activePress ) {
		return;
	}
	SScreen.prototype.onUIPress.call( this, control );
	Application.instance.playSound( 'SND_UI_CLICK' );
	switch ( control.name ) {
		case 'mcGuiBtnHome':
		case 'mcGuiBtnNext':
			this.activePress = true;
			this.onResumeScreen();
			break;
	}
};

GuiPopupTryAgain.prototype.onFinishScreen = function() {
	SScreen.prototype.onFinishScreen.call( this );
	switch ( this.lastInteractionControl ) {
		case 'mcGuiBtnHome':
			GuiGame.instance.destroyGame();
			GuiManager.instance.gotoScreen( GuiManager.SC_MAIN_MENU );
			break;
		case 'mcGuiBtnNext':
			GuiGame.instance.destroyGame();
			GuiManager.instance.gotoScreen( GuiManager.SC_GAME );
			break;
	}
};

GuiPopupTryAgain.prototype.onEndTransition = function( fx ) {
	SScreen.prototype.onEndTransition.call( this, fx );
	if ( fx.params ) {
		Application.instance.guiManager.gotoScreen( fx.params.screen );
	}
};


/**
 * Creates a GuiPopupHelp.
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiPopupHelp( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );

	/** @type {Array.<GuiHelpPage>} */
	this.m_pages = [];
	/** @type {ScrollHandler} */
	this.m_scroll = null;
	/** @type {number} */
	this.m_currentPage = 0;
	/** @type {boolean} */
	this.m_isScrolling = false;
	/** @type {GuiHelpContent} */
	this.m_content = null;

	this.mask = null;

	this.setInteractive( true );
	this.loadData();
}
Application.subclass( GuiPopupHelp, SScreen );

GuiPopupHelp.MAX_PAGE = 7;
GuiPopupHelp.SIZE_PAGE = 500;
GuiPopupHelp.SCROLL_TIME_PRESS = 500;
GuiPopupHelp.doneFirstLoader = false;

GuiPopupHelp.prototype.loadData = function() {
	this.m_content = new GuiHelpContent();
	this.m_content.canvas.position.x = 0;
	this.m_content.canvas.position.y = 0;
	this.getControl( 'mcGuiContent' ).canvas['addChild']( this.m_content.canvas );

	for ( var k = 1; k <= 8; k++ ) {
		var page = new GuiHelpPage( k );
		page.canvas.position.x = ( ( k - 1 ) * GuiPopupHelp.SIZE_PAGE );
		this.m_content.content.canvas['addChild']( page.canvas );
		this.m_pages.push( page );
	}

	var w = 480;
	var h = 460;
    this.mask = new window['PIXI'].Graphics().beginFill( 0x05FA95 ).drawRect( 0, 0, w, h );
	this.mask.position.x = this.getControl( 'mcGuiBase' ).clip.position.x - (w * 0.5);
	this.mask.position.y = this.getControl( 'mcGuiBase' ).clip.position.y - (h * 0.5);
    this.getControl( 'mcGuiBase' ).canvas['addChild']( this.mask );

    this.m_content.clip.mask = this.mask;

	this.m_scroll = new ScrollHandler();
	this.m_scroll.maxIndex = GuiPopupHelp.MAX_PAGE;
	this.m_scroll.displaceX = GuiPopupHelp.SIZE_PAGE;
	this.m_scroll.duration = GuiPopupHelp.SCROLL_TIME_PRESS;
	this.m_scroll.index = this.m_currentPage;
	this.m_scroll.addUpdateListener( this, this.updatePositions );
	this.m_scroll.addCompleteListener( this, this.onCompleteScroll );
	this.onMoveScroll( this.m_currentPage );
};

GuiPopupHelp.prototype.init = function() {
	SScreen.prototype.init.call( this );
	Application.instance.onOrientationchange( null );
};

GuiPopupHelp.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};

GuiPopupHelp.prototype.onFinishScreen = function() {
	SScreen.prototype.onFinishScreen.call( this );
	switch ( this.lastInteractionControl ) {
		case 'mcGuiBtnClose':
			this.screenParent.addPopup( GuiPopupPause, 'mcGuiPopupPause', 0, 0 );
			break;
	}
};

GuiPopupHelp.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );
};


GuiPopupHelp.prototype.scrollImageLeft = function() {
	this.m_currentPage --;
	this.m_currentPage = ( ( this.m_currentPage <= 0 ) ? 0:this.m_currentPage );
	this.onMoveScroll( this.m_currentPage );
};

GuiPopupHelp.prototype.scrollImageRight = function() {
	this.m_currentPage ++;
	this.m_currentPage = ( ( this.m_currentPage >= GuiPopupHelp.MAX_PAGE ) ? GuiPopupHelp.MAX_PAGE:this.m_currentPage );
	this.onMoveScroll( this.m_currentPage );
};

GuiPopupHelp.prototype.onMoveScroll = function( page ) {
	this.m_currentPage = page;
	this.m_scroll.goto( this.m_currentPage );
	this.getControl( 'mcGuiBtnScrollL' ).canvas.visible = !( this.m_currentPage === 0 );
	this.getControl( 'mcGuiBtnScrollR' ).canvas.visible = !( this.m_currentPage === GuiPopupHelp.MAX_PAGE );
};

GuiPopupHelp.prototype.updatePositions = function( scroll ) {
	if ( this.m_content !== null ) {
		this.m_content.content.canvas.position.x = -scroll.x;
	}
};

GuiPopupHelp.prototype.onCompleteScroll = function( scroll ) {
	this.m_isScrolling = false;
};

GuiPopupHelp.prototype.free = function() {
	SScreen.prototype.free.call( this );
};

GuiPopupHelp.prototype.onUIRelease = function( control ) {
	if ( this.activePress ) {
		return;
	}
	SScreen.prototype.onUIRelease.call( this, control );
	Application.instance.playSound( 'SND_UI_CLICK' );
	switch ( control.name ) {
		case 'mcGuiBtnClose':
			this.lastInteractionControl = control.name;
			this.activePress = true;
			this.onResumeScreen();
			break;
		case 'mcGuiBtnScrollL':
			this.scrollImageLeft();
			break;
		case 'mcGuiBtnScrollR':
			this.scrollImageRight();
			break;
	}
};

/**
 * @constructor
 * @extends SScreen
 */
function GuiHelpContent() {
	/** @type {GuiControl} */
	this.content = null;
	SScreen.call( this, 'mcGuiHelpContent', 0, 0, null );

	if ( this.controls['mcGuiContent'] ) {
		this.content = this.getControl( 'mcGuiContent' );
	}
}
Application.subclass( GuiHelpContent, SScreen );


/**
 * @constructor
 * @param {number} idPage
 * @extends SScreen
 */
function GuiHelpPage( idPage ) {
	/** @type {number} */
	this.idPage = idPage;
	/** @type {Array.<number>} */
	this.m_idMaxPage = [3, 2, 2, 2, 2, 1, 1, 1];

	var skinPage = String( 'mcGuiHelpPage_' + (( Application.instance.isMobileDevice ) ? 'mobile' : 'pc' ));
	SScreen.call( this, skinPage, 0, 0, null );

	this.loadPage();
}
Application.subclass( GuiHelpPage, SScreen );

GuiHelpPage.prototype.loadPage = function() {
	this.onHideTexts();
	this.getControl( 'mcGuiImage' ).clip.gotoAndStop( this.idPage );
};

GuiHelpPage.prototype.onHideTexts = function() {
	for ( var k = 1; k <= 8; k++ ) {
		var maxInfo = this.m_idMaxPage[k - 1];
		for ( var p = 1; p <= maxInfo; p++ ) {
			this.getControl( 'mcGuiTextPage_' + k + '_' + p ).setVisible( ( k === this.idPage ) );
		}
	}
};

/**
 * Creates a GuiPopupHelpMinigame.
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiPopupHelpMinigame( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );

	/** @type {number} */
	this.m_currentPage = 0;
	/** @type {MGIntro} */
	this.m_intro = null;

	this.setInteractive( true );
	this.loadData();
}
Application.subclass( GuiPopupHelpMinigame, SScreen );

GuiPopupHelpMinigame.prototype.loadData = function() {
	var page = new GuiHelpPage( 8 );
	page.canvas.position.x = 0;
	page.canvas.position.y = 0;
	this.getControl( 'mcGuiContent' ).canvas['addChild']( page.canvas );

	this.getControl( 'mcGuiBtnScrollL' ).setVisible( false );
	this.getControl( 'mcGuiBtnScrollR' ).setVisible( false );
};

/**
 * @public
 * @param {MGIntro} intro
 */
GuiPopupHelpMinigame.prototype.addParams = function( intro ) {
	this.m_intro = intro;
};

GuiPopupHelpMinigame.prototype.init = function() {
	SScreen.prototype.init.call( this );
	Application.instance.onOrientationchange( null );
};

GuiPopupHelpMinigame.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};

GuiPopupHelpMinigame.prototype.onFinishScreen = function() {
	SScreen.prototype.onFinishScreen.call( this );
	switch ( this.lastInteractionControl ) {
		case 'mcGuiBtnClose':
			this.m_intro.onIntro();
			this.screenParent.dropPopup();
			break;
	}
};

GuiPopupHelpMinigame.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );
};

GuiPopupHelpMinigame.prototype.free = function() {
	SScreen.prototype.free.call( this );
};

GuiPopupHelpMinigame.prototype.onUIRelease = function( control ) {
	SScreen.prototype.onUIRelease.call( this, control );
	if ( this.activePress ) {
		return;
	}

	Application.instance.playSound( 'SND_UI_CLICK' );
	switch ( control.name ) {
		case 'mcGuiBtnClose':
			this.lastInteractionControl = control.name;
			this.activePress = true;
			this.onResumeScreen();
			break;
	}
};

/**
 * Creates a GuiConfirm.
 * @constructor
 * @param {string} clipName
 * @param {number} x
 * @param {number} y
 * @param {SScreen} sceenParent
 * @extends GuiConfirm
 */
function GuiPopupQuit( clipName, x, y, sceenParent ) {
	GuiConfirm.call( this, clipName, x, y, sceenParent );
	this.name = 'popup_quit';

	this.localizedText( 'STR_REP_POPUP_QUIT_TITLE' );
}
Application.subclass( GuiPopupQuit, GuiConfirm );

/** @override */
GuiPopupQuit.prototype.onPressNo = function() {
	if ( this.screenParent ) {
		this.screenParent.addPopup( GuiPopupPause, 'mcGuiPopupPause', 0, 0 );
	}
};

/** @override */
GuiPopupQuit.prototype.onPressYes = function() {
	GuiManager.instance.gotoScreen( GuiManager.SC_MAIN_MENU );
};

/**
 * Creates a GuiConfirm.
 * @constructor
 * @param {string} clipName
 * @param {number} x
 * @param {number} y
 * @param {SScreen} sceenParent
 * @extends GuiConfirm
 */
function GuiPopupReset( clipName, x, y, sceenParent ) {
	GuiConfirm.call( this, clipName, x, y, sceenParent );
	this.name = 'popup_reset';

	this.localizedText( 'STR_REP_POPUP_RESET_TITLE' );
}
Application.subclass( GuiPopupReset, GuiConfirm );

/** @override */
GuiPopupReset.prototype.onPressNo = function() {
	if ( this.screenParent ) {
		this.screenParent.dropPopup();
	}
};
/** @override */
GuiPopupReset.prototype.onPressYes = function() {
	if ( this.screenParent ) {
		DataManager.instance.resetData();
		this.screenParent.dropPopup();
	}
};

/**
 * Creates a GuiPopupPause.
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiPopupDialog( clipName, x, y, screenParent ) {
	SScreen.call( this, clipName, x, y, screenParent );
	this.setInteractive( true );
    this.name = 'dialog';

    /** @type {Array} */
    this.dataName = [];
    /** @type {Array} */
    this.dataStatement = [];

    var config = window['platform_general']['dlogs'];

    /** @type {Array} */
    this.dialogsKim = [[], [], []];

    var sufix = ( GuiPopupDialog.isAfter ? '_after' : '' );

    for ( var i = 0; i < config.length; i++ ) {
        var row = config[i];
        if ( row['dlogId'] === ( 'kim_vs_athena_1' + sufix ) ) {
            this.dialogsKim[0].push( row['charName'] );
            this.dialogsKim[0].push( row['statement'] );
        }
        else if ( row['dlogId'] === ( 'kim_vs_athena_2' + sufix ) ) {
            this.dialogsKim[1].push( row['charName'] );
            this.dialogsKim[1].push( row['statement'] );
        }
        else if ( row['dlogId'] === ( 'kim_vs_shego' ) ) {
            this.dialogsKim[2].push( row['charName'] );
            this.dialogsKim[2].push( row['statement'] );
        }
    }

    /** @type {Array} */
    this.dialogs = [];
    this.dialogs = this.dialogsKim

    var data = [];
    if ( Global.level === 3 ) {
        data = this.dialogs[0];
    }
    else if ( Global.level === 6 ) {
        data = this.dialogs[1];
    }
    else {
        data = this.dialogs[2];
    }

    for ( var i = 0; i < data.length; i++ ) {
        if ( i % 2 === 0 ) {
            this.dataName.push( data[i] );
        }
        else {
            this.dataStatement.push( data[i] );
        }
    }

    /** @type {number} */
    this.index = -1;

    /** @type {GuiControl} */
    this.face = this.getControl( 'mcGuiCharacter' );
    /** @type {GuiText} */
    this.title = /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtTitle' ) );
    /** @type {GuiText} */
    this.title_s = /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtTitle_s' ) );
    /** @type {GuiText} */
    this.statment = /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription' ) );

    GuiPopupDialog.instance = this;

    this.passDialog();
}
Application.subclass( GuiPopupDialog, SScreen );

/** @static {boolean} */GuiPopupDialog.isAfter = false;

/** @static {GuiPopupDialog} */ GuiPopupDialog.instance = null;

GuiPopupDialog.prototype.passDialog = function () {
    this.title.setText( ' ' );
    this.title_s.setText( ' ' );
    this.statment.setText( ' ' );

    this.index++;
    if ( this.index >= this.dataName.length ) {
        if ( GuiPopupDialog.isAfter ) {
            if ( DataManager.instance && Global.level === 6 ) {
                PlatformGame.instance.world.player().isReadyToWinAnim = true;
				DataManager.instance.checkAchievement( DataManager.REG_ACHIEVEMENT_4 );
            }
            else if ( DataManager.instance && Global.level === 3 ) {
                if ( Athena.instance ) {
                    Athena.instance.doScape();
                }
                else {
                    PlatformGame.instance.world.player().isReadyToWinAnim = true;
                }
            }
        }
        else {
            if ( Shego.instance ) {
                Shego.instance.charge();

                PlatformGame.instance.hud().onShowPanelBoss( true, 2 );
            }
            if ( Athena.instance ) {
                PlatformGame.instance.world.player().resetControl();
                PlatformGame.instance.world.player().setDisablePlayer( false );
                Athena.instance.doNext();

                PlatformGame.instance.hud().onShowPanelBoss( true, 1 );
            }
        }
        GuiGame.instance.dropPopup();
        return;
    }

    var nameTxt = this.dataName[this.index]; // Application.strings[this.dataName[this.index]]['value'];
    if ( nameTxt === 'STR_REP_DIALOG_CHARACTER_NAME01' ) { // 'KIM' ) {
        this.face.clip.gotoAndStop( 1 );
    }
    else if ( nameTxt === 'STR_REP_DIALOG_CHARACTER_NAME03' ) { // 'ATHENA' ) {
        this.face.clip.gotoAndStop( 3 );
    }
    else if ( nameTxt === 'STR_REP_DIALOG_CHARACTER_NAME04' ) { // 'SHEGO' ) {
        this.face.clip.gotoAndStop( 2 );
    }
    else {
        this.face.clip.gotoAndStop( 1 );
    }

    if ( typeof Application.strings[this.dataName[this.index]] === 'undefined' ) {
        this.title.setText( this.dataName[this.index] );
        this.title_s.setText( this.dataName[this.index] );
    }
    else {
        this.title.setTextLocalized( this.dataName[this.index] );
        this.title_s.setTextLocalized( this.dataName[this.index] );
    }

    if ( typeof Application.strings[this.dataStatement[this.index]] === 'undefined' ) {
        this.statment.setText( this.dataStatement[this.index] );
    }
    else {
        this.statment.setTextLocalized( this.dataStatement[this.index] );
    }
};

/**
 * @override
 */
GuiPopupDialog.prototype.free = function () {
    SScreen.prototype.free.call( this );
    GuiPopupDialog.instance = null;
    GuiPopupDialog.isAfter = false;
};

/**
 * @override
 */
GuiPopupDialog.prototype.onPointerRelease = function( event ) {
    this.passDialog();
    Application.instance.playSound( 'SND_UI_CLICK' );
};


/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SGame} game
 * @extends SWorld
 */
function WorldPlatform( canvas, game ) {
	SWorld.call( this, canvas, game );
	this.m_tempNpc = null;
}
Application.subclass( WorldPlatform, SWorld );

WorldPlatform.prototype.onCreate = function( worldFile, generalFile ) {
	SWorld.prototype.onCreate.call( this, worldFile, generalFile );
	generalFile = typeof generalFile !== 'undefined' ? generalFile : null;

	this.checkPlayerInitPos();

	this.m_player = new PlayerPlatform( this.m_playerCanvas, this,
									  this.playerInitX,
									  this.playerInitY,
									  generalFile );
	this.m_actorManager.init( this.m_player );
	this.m_actorManager.setUpdateableObject( this.m_player );
	this.init();

	Application.externalTrack( 'Level Start', worldFile );

	this.checkBarriersAfterCreation();
};

WorldPlatform.prototype.checkPlayerInitPos = function () {
	if ( DataManager.instance.checkAchievementDone( 5 ) ) { return; }

	if ( Global.level === 3 || Global.level === 6 || Global.level === 10 ) {
		var maxLevel = DataManager.instance.getGlobalRegister( DataManager.REG_MAX_LEVEL_REACHED );
		if ( maxLevel <= Global.level ) {
			
			var bossActive = DataManager.instance.getGlobalRegister( DataManager.REG_BOSS_ACTIVE );
			if ( bossActive === 0 ) {
				return;
			}
			else {
				switch ( Global.level ) {
					case 3:
						if ( bossActive >= 1001 ) {
							this.playerInitX = 13000;
							this.playerInitY = 830;
						}
						break;
					case 6:
						if ( bossActive >= 1011 ) {
							this.playerInitX = 6860;
							this.playerInitY = 2620;
						}
						break;
					default:
						if ( bossActive >= 1111 ) {
							this.playerInitX = 4280;
							this.playerInitY = 1920;
						}
				}
			}
		}
	}
};

WorldPlatform.prototype.free = function() {
	this.m_tempNpc = null;
	SWorld.prototype.free.call( this );
}

/**
 * @override
 */
WorldPlatform.prototype.createNpcManagers = function() {
	this.m_actorManager = new ActorManagerPlatform( this );
};

/**
 * @override
 * @param {Object} dataNpc
 */
WorldPlatform.prototype.addNpc = function( dataNpc ) {
	this.m_tempNpc = new NpcPlatform();
	this.m_tempNpc.id = dataNpc['id'];
	this.m_tempNpc.x = dataNpc['x'];
	this.m_tempNpc.y = dataNpc['y'];
	this.m_tempNpc.rotation = dataNpc['rot'];
	this.m_tempNpc.movement = dataNpc['movement'];
	this.m_tempNpc.alwaysAwake = ( dataNpc['alwaysAwake'] === 1 );
	this.m_tempNpc.params = dataNpc['params'];
	this.m_tempNpc.rawData = dataNpc;

	this.m_actorManager.addNpc( this.m_tempNpc );
};

WorldPlatform.prototype.checkBarriersAfterCreation = function() {
	var actors =  this.m_actorManager .getActors();
	for ( var i = 0; i < actors.length; i++ ) {
		if ( actors[i] instanceof Barrier ) {
			var barrier = /** @type {Barrier} */ ( actors[i] );
			if ( barrier.isInitOpen ) {
				this.setIgnoreZone( barrier.linkId, true );
			}
		}
	}
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SDisplayObjectContainer} canvasControl
 * @param {string} dataWorld
 * @param {string} dataGeneral
 * @extends SGame
 */
function PlatformGame( canvas, canvasControl, dataWorld, dataGeneral ) {
	/**
	 * @private
	 * @type {string}
	 */
	this.m_dataWorld = dataWorld;
	/**
	 * @private
	 * @type {Object}
	 */
	this.m_dataGeneral = window[dataGeneral];

	SGame.call( this, canvas );
	/** @type {number} */
	this.m_currentTimeGame = 0;
	/** @type {boolean} */
	this.isPaused = false;
	/** @type {boolean} */
	this.inTransition = false;
	/** @type {GameIntro} */
	this.intro = null;
	/** @type {GameOutro} */
	this.outro = null;

	PlatformGame.instance = this;

	this.reset = false;
	this.world = null;
	this.finish = false;
	this.m_collisionVisible = false;

	this.lives = 0;
	this.score = 0;
	this.tokens = 0;
	this.onReset();
	this.m_effect = null;
	this.virtualStickMove = null;

	if ( Application.instance.isMobileDevice ) {
		var ox = Layout.left / Layout.scale;
        this.virtualStickMove = new VirtualStick( canvasControl, 100, 200 - ox, 600 );
		this.virtualStickMove.addChangeListener( this, this.onChangeStickMove );
		this.virtualStickMove.addReleaseListener( this, this.onReleaseStickMove );
	}

	/** @type {number} */
	this.halfScreen = Application.APP_WIDTH * 0.5;

	this.intro = new GameIntro( this );
	this.outro = new GameOutro( this );

	/** @type {ShaderRing} */
	this.shaderRing = null;
	if ( Application.RENDER_MODE === Application.RENDER_WEBGL && !Application.isLowDevice ) {
		this.shaderRing = new ShaderRing();
	}

	/**
	 * @type {number}
	 */
	this.maxLevel = DataManager.instance.getGlobalRegister( DataManager.REG_MAX_LEVEL_REACHED );
	if ( this.maxLevel < Global.level ) {
		this.maxLevel = Global.level;
        DataManager.instance.setGlobalRegister( DataManager.REG_MAX_LEVEL_REACHED, this.maxLevel );
		DataManager.instance.setGlobalRegister( DataManager.REG_LEVEL_UNLOCKED, 1 );
		DataManager.instance.saveData();
	}
}
Application.subclass( PlatformGame, SGame );

/** @const */PlatformGame.MAX_DELTA = 50;

/** @type {PlatformGame} */
PlatformGame.instance = null;

/** @override */
PlatformGame.prototype.init = function() {
	this.m_hud = new HudPlatform( 'mcGuiHud' );
	var timeData = {};
	timeData['initTime'] = window['platform_general']['initTimes'][this.m_dataWorld];
	timeData['maxTime'] = window['platform_general']['levelTimes'][this.m_dataWorld];
	Application.log( 'TIME DATA ::: ' + this.m_dataWorld + ' ' + timeData['initTime'] + ' ' + timeData['maxTime'] );
	this.m_hud.loadDataGame( timeData );
};

/**
 * @override
 * @return {HudPlatform}
 */
PlatformGame.prototype.hud = function() {
	return /** @type {HudPlatform} */( this.m_hud );
};

PlatformGame.prototype.createShaderRing = function( x, y, scaleEnd, scaleInit ) {
	if ( this.shaderRing ) {
		this.shaderRing.create( this.canvas, x, y, scaleEnd, scaleInit );
	}
};

/**
 * @public
 * @param {Panel} panel
 */
PlatformGame.prototype.createMinigame = function( panel ) {
	var miniGame = GuiGame.instance.addPopup( GuiPopupMinigame, 'mcGuiPopupMinigame', 0, 0 );
	/** @type {GuiPopupMinigame} */ ( miniGame ).addPanel( panel );
};

PlatformGame.prototype.free = function() {
	Application.externalTrack( 'Game End' );
	this.m_dataGeneral = null;

	if ( this.virtualStickMove ) {
		this.virtualStickMove.free();
		this.virtualStickMove = null;
	}

	if ( this.intro ) {
		this.intro.free();
		this.intro = null;
	}

	if ( this.outro ) {
		this.outro.free();
		this.outro = null;
	}

	if ( this.shaderRing ) {
		this.shaderRing.free();
		this.shaderRing = null;
	}

	if ( this.world ) {
		this.world.free();
		this.world = null;
	}

	if ( this.m_effect ) {
		this.m_effect.free();
		this.m_effect = null;
	}
	PlatformGame.instance = null;
	SGame.prototype.free.call( this );
};

PlatformGame.prototype.onAppGotFocus = function() {
};

PlatformGame.prototype.onAppLostFocus = function() {
	if ( this.world.player() ) {
		this.world.player().resetControl();
	}
};

PlatformGame.prototype.onReleaseStickMove = function( stick ) {

	if ( this.world ) {
        this.world.player().onKeyUp( PlayerControl.CMD_LEFT_A );
        this.world.player().onKeyUp( PlayerControl.CMD_RIGHT_A );
    }
};

PlatformGame.prototype.onChangeStickMove = function( stick ) {


	if ( this.world ) {
        if ( stick.force > 0 ) {
            this.world.player().onKeyDown( PlayerControl.CMD_RIGHT_A );
            this.world.player().onKeyUp( PlayerControl.CMD_LEFT_A );
        }
        else {
            this.world.player().onKeyDown( PlayerControl.CMD_LEFT_A );
            this.world.player().onKeyUp( PlayerControl.CMD_RIGHT_A );
        }
    }
};

PlatformGame.prototype.fixGameScale = function() {
	SGame.prototype.fixGameScale.call( this );
	if ( this.m_hud ) {
		/** @type {HudPlatform} */ ( this.m_hud ).fixGameScale();
	}
};

PlatformGame.prototype.onPointerPress = function( e ) {
	SGame.prototype.onPointerPress.call( this, e );
	if ( this.virtualStickMove !== null && e.data.global.x < this.halfScreen ) {
		this.virtualStickMove.onPointerPress( e );
	}
	else if ( this.virtualStickMove !== null && e.data.global.x >= this.halfScreen ) {
		this.world.player().onKeyDown( PlayerControl.CMD_CIRCLE );
	}
};

PlatformGame.prototype.onPointerRelease = function( e ) {
	SGame.prototype.onPointerRelease.call( this, e );
	if ( this.virtualStickMove !== null && e.data.global.x < this.halfScreen ) {
		this.virtualStickMove.onPointerRelease( e );
	}
	else if ( this.virtualStickMove !== null && e.data.global.x >= this.halfScreen ) {
		this.world.player().onKeyUp( PlayerControl.CMD_CIRCLE );
	}
};

PlatformGame.prototype.onPointerMove = function( e ) {
	SGame.prototype.onPointerMove.call( this, e );
	if ( this.virtualStickMove !== null && e.data.global.x < this.halfScreen ) {
		this.virtualStickMove.onPointerMove( e );
	}
	else if ( this.virtualStickMove !== null && e.data.global.x >= this.halfScreen ) {
		this.virtualStickMove.onPointerRelease( e );
	}
};

PlatformGame.prototype.addScore = function( value ) {
	this.score += value;
	Global.totalStars = this.score;
	this.hud().setScore( this.score );
};

PlatformGame.prototype.setScore = function( value ) {
	this.score = value;
	this.hud().setScore( this.score );
};

/**
 * @return {boolean}
 */
PlatformGame.prototype.setLives = function( inc, id ) {
	var validate = false;
	validate = this.hud().setLives( inc, id );
	return validate;
};

/**
 * @param {number} time
 */
PlatformGame.prototype.addTime = function( time ) {
	this.hud().addTime( time );
};

/**
 * @param {number} id
 */
PlatformGame.prototype.addToken = function( id ) {
	this.tokens++;
	if ( this.tokens >= 3 ) { this.tokens = 3; }
	this.hud().setTokens( id );
};

/**
 * @param {boolean} win
 */
PlatformGame.prototype.onGameEnd = function( win ) {
	this.finish = true;
	this.playerWin = win;
};

/**
 * @public
 * @return {boolean}
*/
PlatformGame.prototype.gameplayEnable = function() {
	if ( this.intro.state !== GameIntro.ST_NONE ) {
		return false;
	}

	if ( this.outro.state !== GameOutro.ST_NONE ) {
		return false;
	}

	return true;
};

PlatformGame.prototype.onReset = function() {
	if ( this.world ) {
		this.world.free();
		this.world = null;
	}

	this.world = new WorldPlatform( this.canvas, this );
	this.world.onCreate( this.m_dataWorld, this.m_dataGeneral );
	this.setScore( Global.totalStars );

	this.hud().onSelectionFace( this.world.player().mode );
	this.reset = false;

	if ( Application.sandbox ) {
		this.onDebugInit();
	}

	this.m_currentTimeGame = 0;
	this.halfScreen = this.world.camera().width() * 0.5;
};

PlatformGame.prototype.update = function( dt ) {
	if ( this.reset ) {
		this.onReset();
	}
	else if ( this.finish ) {
		if ( GuiGame.instance ) {
			GuiGame.instance.removeGame();
		}
	}
	else {
		if ( this.m_effect ) {
			this.m_effect.update( dt );
		}

		if ( dt > PlatformGame.MAX_DELTA ) {
			dt = PlatformGame.MAX_DELTA;
		}

		if ( this.intro ) {
			this.intro.update( dt );
		}

		if ( this.outro ) {
			this.outro.update( dt );
		}

		if ( this.shaderRing ) {
			this.shaderRing.update( dt );
		}

		SGame.prototype.update.call( this, dt );
		this.world.update( dt );
		this.m_currentTimeGame += dt;
	}
};

PlatformGame.prototype.currentTime = function() {
	return this.m_currentTimeGame;
};

PlatformGame.prototype.onKeyDown = function( keycode ) {
	SGame.prototype.onKeyDown.call( this, keycode );
	this.world.player().onKeyDown( keycode );
};

PlatformGame.prototype.onKeyUp = function( keycode ) {
	SGame.prototype.onKeyUp.call( this, keycode );
	this.world.player().onKeyUp( keycode );
};

PlatformGame.prototype.toggleDebugCollision = function() {
	SGame.prototype.toggleDebugCollision.call( this )
	this.m_collisionVisible = !this.m_collisionVisible;
	this.world.showCollision( this.m_collisionVisible );
};

PlatformGame.prototype.onDebugDraw = function( ctx ) {
	SGame.prototype.onDebugDraw.call( this, ctx );
	if ( this.showDebugCollision ) {
		this.world.onDebugDraw( ctx );
	}
};

PlatformGame.prototype.onDebugInit = function() {

	Application.sandbox['clearGameSettings']();
	Application.sandbox['addGameSettings']( this.world.player().control() , 'walkSpeed', 0, 0.0100 );
	Application.sandbox['addGameSettings']( this.world.player(), 'm_health', 0 , 100 );

	Application.sandbox['addGameSettings']( this.world.player().control() , 'm_jumpSpeed', -3, 3, 0.0100 ); // 'jumpInitSpeed', 0, 1.01000 );
	Application.sandbox['addGameSettings']( this.world.player().control() , 'm_doubleJumpSpeed', -3, 3, 0.0100 );
	Application.sandbox['addGameSettings']( this.world.player().control() , 'wallImpulseY', -3, 3, 0.0100 );

	var objectsToCreate = [];
	var object;

	object = {};
	object.name = 'icon';
	object.speed =  { value:10 };
	object.gravity = { value:10, min:0, max:20, step:1 };
	object.collidable = { value:true };
	objectsToCreate.push( object )
	object = {};
	object.name = 'coin';
	object.score =  { value:150 };
	objectsToCreate.push( object );

	Application.sandbox['setObjectsToCreate']( objectsToCreate );
}

PlatformGame.prototype.onDebugCreateObject = function( x, y, object ) {
	Application.log( '[PLATFORM]' + object )
};

/*
PlatformGame.prototype.onDebugCreateSandboxObject = function( x, y, data ) {
	SGame.prototype.onDebugCreateSandboxObject.call( this, x, y, data );

	switch ( data.name ) {
		case 'coin':
			this.world.actorManager().add( new Item( this.world.objectCanvas(),
										   this.world,
										   x + this.world.camera().getX(),
										   y + this.world.camera().getY(),
										   Item.TYPE_COIN ) );
			break;
		case 'spring':
			this.world.actorManager().add( new Spring( this.world.objectCanvas(),
											this.world,
											x + this.world.camera().getX(),
											y + this.world.camera().getY(),
											data['rotation'],
											'speedY:' + data['speedY'] + ';forceX:' + data['forceX'],
											1 ) );
			break;
		default:
			Application.warn( 'SANDBOX object [' + data.name + '] no create' );
	}
};
*/

/**
 * @constructor
 * @extends SNpc
 */
function NpcPlatform() {
	SNpc.call( this );
	/** @type {number} */
	this.eSquashFactor = 0.0;
	/** @type {number} */
	this.rotation = 0.0;
	/** @type {boolean} */
	this.eDetectFloor = false;
	/** @type {string} */
	this.ePattern = '';
	/** @type {string} */
	this.eBodyEnabled = '';
	/** @type {string} */
	this.movement = '';
	/** @type {boolean} */
	this.alwaysAwake = false;
	/** @type {Object} */
	this.rawData = null;
}
Application.subclass( NpcPlatform, SNpc );


/**
 * @constructor
 * @param {SWorld} world
 * @extends SNpcManager
 */
function ActorManagerPlatform( world ) {
	/** @type {number} */
	this.m_countLaser = 0;
	/** @type {number} */
	this.m_countOrb = 0;
	/** @type {number} */
	this.m_countGoo = 0;

	/**
     * @type {Array.<TutorialSignboard>}
     */
    this.m_tutorialBoards = [];
    /**
     * @type {Array.<TutorialControlArea>}
     */
    this.m_tutorialAreas = [];

	SNpcManager.call( this, world );
}
Application.subclass( ActorManagerPlatform, SNpcManager );

ActorManagerPlatform.ITEM_MOBILE_PLATFORM = 1;
ActorManagerPlatform.ITEM_COIN = 2;
ActorManagerPlatform.ITEM_HEALTH = 3;
ActorManagerPlatform.ITEM_TOKEN = 4;
ActorManagerPlatform.ITEM_SPRING = 5;
ActorManagerPlatform.ITEM_TELEPORTER = 6;
ActorManagerPlatform.ITEM_HAZARD_CHASER = 7;
ActorManagerPlatform.ITEM_HAZARD_GOO = 8;
ActorManagerPlatform.ITEM_HAZARD_ORB = 9;
ActorManagerPlatform.ITEM_HAZARD_PLATFORM = 10;
ActorManagerPlatform.ITEM_HAZARD_LASER = 11;
ActorManagerPlatform.ITEM_BARRIER = 12;
ActorManagerPlatform.ITEM_PANEL = 13;
ActorManagerPlatform.ITEM_MOBILE_PLATFORM_2 = 14;
ActorManagerPlatform.ITEM_MOBILE_PLATFORM_3 = 15;
ActorManagerPlatform.ITEM_EXIT = 16;
ActorManagerPlatform.ITEM_PIVOT = 20;
ActorManagerPlatform.ITEM_TUTO_PANEL = 21;
ActorManagerPlatform.ITEM_TUTO_AREA = 22;
ActorManagerPlatform.ITEM_PRE_BOSS_EVENT = 23;
ActorManagerPlatform.ITEM_DOOR_ENDING = 24;

ActorManagerPlatform.ITEM_ENEMY_HENCHMAN = 30;
ActorManagerPlatform.ITEM_ENEMY_ARMED = 31;
ActorManagerPlatform.ITEM_ENEMY_NINJA = 32;
ActorManagerPlatform.ITEM_BOSS_ATHENA = 33;
ActorManagerPlatform.ITEM_BOSS_SHEGO = 34;

/**
 * @override
 * @param {SWorldActor|SActor} player
 */
ActorManagerPlatform.prototype.init = function( player ) {
	var maxLevel = DataManager.instance.getGlobalRegister( DataManager.REG_MAX_LEVEL_REACHED );
	this.m_player = player;
	var actor = null;
	var k = 0;
	while ( k < this.m_buffer.length ) {
		var px = this.m_buffer[k].x;
		var py = this.m_buffer[k].y;
		switch ( this.m_buffer[k].id ) {
			case ActorManagerPlatform.ITEM_COIN:
				this.add( new Item( this.m_world.objectCanvas(),
									this.m_world,
									this.m_buffer[k].x,
									this.m_buffer[k].y,
									Item.TYPE_COIN ) );
				break;
			case ActorManagerPlatform.ITEM_HEALTH:
				this.add( new Item( this.m_world.objectCanvas(),
									this.m_world,
									this.m_buffer[k].x,
									this.m_buffer[k].y,
									Item.TYPE_ADD_HEALTH ) );
				break;
			case ActorManagerPlatform.ITEM_TOKEN:
				var tokenId = this.m_buffer[k].rawData['idToken'];
				var savedId = DataManager.instance.getLevelRegister( DataManager.REGLEVEL_TOKENS_IDS, Global.level - 1 );
				if ( savedId >= 1000 ) {
					var savedIdStr = '' + savedId;
					var charId = savedIdStr.charAt( tokenId );
					if ( charId === '1' ) {
						PlatformGame.instance.tokens++;
						if ( PlatformGame.instance.tokens >= 3 ) { PlatformGame.instance.tokens = 3; }
						HudPlatform.instance.setTokensNoFx( tokenId );
						break;
					}
				}

				this.add( new Item( this.m_world.objectCanvas(),
									this.m_world,
									this.m_buffer[k].x,
									this.m_buffer[k].y,
									Item.TYPE_TOKEN,
									this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_MOBILE_PLATFORM:
				var npcPlatform = /** @type {NpcPlatform} */ ( this.m_buffer[k] );
				this.add( new MobilePlatform( this.m_world.objectCanvas(),
											  this.m_world, 'mc_moving_platform',
											  this.m_buffer[k].x,
											  this.m_buffer[k].y,
											  new DataMovement( npcPlatform.params, npcPlatform.movement ),
											  this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_MOBILE_PLATFORM_2:
				var npcPlatform = /** @type {NpcPlatform} */ ( this.m_buffer[k] );
				this.add( new MobilePlatform( this.m_world.objectCanvas(),
											  this.m_world, 'mc_moving_platform_2',
											  this.m_buffer[k].x,
											  this.m_buffer[k].y,
											  new DataMovement( npcPlatform.params, npcPlatform.movement ),
											  this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_MOBILE_PLATFORM_3:
				var npcPlatform = /** @type {NpcPlatform} */ ( this.m_buffer[k] );
				this.add( new MobilePlatform( this.m_world.objectCanvas(),
											  this.m_world, 'mc_moving_platform_3',
											  this.m_buffer[k].x,
											  this.m_buffer[k].y,
											  new DataMovement( npcPlatform.params, npcPlatform.movement ),
											  this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_ENEMY_HENCHMAN:
				this.add( new Henchman( this.m_world.objectCanvas(),
										this.m_world,
										this.m_buffer[k].x,
										this.m_buffer[k].y,
										this.m_buffer[k].params,
										window['platform_general']['enemy_henchman'],
										this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_ENEMY_ARMED:
				this.add( new Armed( this.m_world.objectCanvas(),
										this.m_world,
										this.m_buffer[k].x,
										this.m_buffer[k].y,
										this.m_buffer[k].params,
										window['platform_general']['enemy_armed'],
										this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_ENEMY_NINJA:
				this.add( new Ninja( this.m_world.objectCanvas(),
										this.m_world,
										this.m_buffer[k].x,
										this.m_buffer[k].y,
										this.m_buffer[k].params,
										window['platform_general']['enemy_ninja'],
										this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_BOSS_ATHENA:

				this.add( new Athena( this.m_world.objectCanvas(),
										this.m_world,
										this.m_buffer[k].x,
										this.m_buffer[k].y,
										null,
										{ health:100, damage:1 },
										-1,
										this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_BOSS_SHEGO:

				this.add( new Shego( this.m_world.objectCanvas(),
										this.m_world,
										this.m_buffer[k].x,
										this.m_buffer[k].y,
										null,
										{ health:100, damage:1 },
										-1,
										this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_SPRING:
				var npcPlatform = /** @type {NpcPlatform} */ ( this.m_buffer[k] );
				this.add( new Spring( this.m_world.objectCanvas(),
									  this.m_world,
									  this.m_buffer[k].x,
									  this.m_buffer[k].y,
									  npcPlatform.rotation,
									  npcPlatform.params,
									  1 ) );
				break;
			case ActorManagerPlatform.ITEM_TELEPORTER:
				this.add( new Teleporter( this.m_world.objectCanvas(),
										  this.m_world,
										  this.m_buffer[k].x,
										  this.m_buffer[k].y,
										  this.m_buffer[k].params ) );
				break;
			case ActorManagerPlatform.ITEM_PIVOT:
				this.add( new Pivot( this.m_world.objectCanvas(),
									 this.m_world,
									 this.m_buffer[k].x,
									 this.m_buffer[k].y,
									 this.m_buffer[k].params,
									 this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_HAZARD_CHASER:
				this.add( new Chaser( this.m_world.objectCanvas(),
									  this.m_world,
									  this.m_buffer[k].x,
									  this.m_buffer[k].y,
									  this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_HAZARD_GOO:
				this.m_countGoo = ( this.m_countGoo > 5 ) ? 1:( this.m_countGoo + 1 );
				this.add( new Goo( this.m_world.objectCanvas(),
								   this.m_world,
								   this.m_buffer[k].x,
								   this.m_buffer[k].y,
								   this.m_buffer[k].rawData,
								   this.m_countGoo ) );
				break;
			case ActorManagerPlatform.ITEM_HAZARD_ORB:
				this.m_countOrb = ( this.m_countOrb > 10 ) ? 1:( this.m_countOrb + 1 );
				this.add( new Orb( this.m_world.objectCanvas(),
								   this.m_world,
								   this.m_buffer[k].x,
								   this.m_buffer[k].y,
								   this.m_buffer[k].rawData,
								   this.m_countOrb ) );
				break;
			case ActorManagerPlatform.ITEM_HAZARD_PLATFORM:
				this.add( new FallingPlatform( this.m_world.objectCanvas(),
											   this.m_world,
											   this.m_buffer[k].x,
											   this.m_buffer[k].y,
											   this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_HAZARD_LASER:
				this.m_countLaser = ( this.m_countLaser > 10 ) ? 1:( this.m_countLaser + 1 );
				this.add( new Laser( this.m_world.objectCanvas(),
									 this.m_world,
									 this.m_buffer[k].x,
									 this.m_buffer[k].y,
									 this.m_buffer[k].rawData,
									 this.m_countLaser ) );
				break;
			case ActorManagerPlatform.ITEM_BARRIER:
				this.add( new Barrier( this.m_world.objectCanvas(),
									   this.m_world,
									   this.m_buffer[k].x,
									   this.m_buffer[k].y,
									   this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_PANEL:
				this.add( new Panel( this.m_world.objectCanvas(),
									 this.m_world,
									 this.m_buffer[k].x,
									 this.m_buffer[k].y,
									 this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_EXIT:
				this.add( new Exit( this.m_world.objectCanvas(),
									this.m_world,
									this.m_buffer[k].x,
									this.m_buffer[k].y,
									this.m_buffer[k].rawData ) );
			case ActorManagerPlatform.ITEM_DOOR_ENDING:
				this.add( new AnimExit( this.m_world.objectCanvas(),
									this.m_world,
									this.m_buffer[k].x,
									this.m_buffer[k].y,
									this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_PRE_BOSS_EVENT:
				this.add( new PreBossEvent( this.m_world.objectCanvas(),
									this.m_world,
									this.m_buffer[k].x,
									this.m_buffer[k].y,
									this.m_buffer[k].rawData ) );
				break;
			case ActorManagerPlatform.ITEM_TUTO_PANEL:
				var newBoard = new TutorialSignboard( this.m_world,
						this.m_buffer[k].x,
						this.m_buffer[k].y,
						this.m_buffer[k].rawData );
				this.m_tutorialBoards.push( newBoard );
				break;
			case ActorManagerPlatform.ITEM_TUTO_AREA:
				this.m_tutorialAreas.push( new TutorialControlArea( this.m_world, this.m_buffer[k].rawData ) );
				break;
		}
		k++;
	}

	this.registerTutorials();
};

ActorManagerPlatform.prototype.fixGameScale = function() {
    for ( var i = 0; i < this.m_tutorialBoards.length; i++ ) {
        this.m_tutorialBoards[i].fixGameScale();
    }
};

/**
 * @private
 */
ActorManagerPlatform.prototype.registerTutorials = function() {
    for ( var i = this.m_tutorialBoards.length - 1; i >= 0; i-- ) {
        var areaId = this.m_tutorialBoards[i].areaId();
        for ( var j = 0; j < this.m_tutorialAreas.length; j++ ) {
            if ( this.m_tutorialAreas[j].areaId() === areaId ) {
                this.m_tutorialAreas[j].setSignboard( this.m_tutorialBoards.splice( i, 1 )[0] );
            }
        }
    }
};

/**
 * @public
 */
ActorManagerPlatform.prototype.destroyAllTutorials = function() {
    var i;
    for ( i = this.m_tutorialBoards.length - 1; i >= 0; i-- ) {
        this.m_tutorialBoards.splice( i, 1 )[0].free();
    }
    for ( i = this.m_tutorialAreas.length - 1; i >= 0; i-- ) {
        this.m_tutorialAreas.splice( i, 1 )[0].free();
    }
};

/**
 * @public
 * @param {number} type
 */
ActorManagerPlatform.prototype.announceAction = function( type ) {
    if ( this.m_tutorialAreas.length === 0 ) {
        return;
    }
    for ( var i = 0; i < this.m_tutorialAreas.length; i++ ) {
        if ( this.m_tutorialAreas[i].signboard() !== null &&
             this.m_tutorialAreas[i].signboard().type() === type &&
             this.m_tutorialAreas[i].isActive() ) {
            this.m_tutorialAreas.splice( i, 1 )[0].free();
            break;
        }
    }
};

/**
 * @public
 * @return {Array.<TutorialControlArea>}
 */
ActorManagerPlatform.prototype.getTutorials = function() {
    return this.m_tutorialAreas;
};

/**
 * @override
 * @param {number} dt
 */
ActorManagerPlatform.prototype.update = function ( dt ) {
	SNpcManager.prototype.update.call( this, dt );

	if ( /** @type {PlayerPlatform} */ ( this.m_world.player() ).getDisable() === false ) { 

		var playerColl = ( this.m_world.player().clip() !== null ) ? this.m_world.player().clip().getCollision( 'mcCollision' ) : null;
		if ( playerColl ) {
			var i;
	
			for ( i = this.m_tutorialAreas.length - 1; i >= 0; i-- ) {
				if ( this.m_tutorialAreas[i].areaIntersect( this.m_world.player().getX(),
															this.m_world.player().getY(),
															playerColl ) ) {
					this.m_tutorialAreas[i].activate();
				}
				else {
					if ( this.m_tutorialAreas[i].isActive() ) {
						this.m_tutorialAreas[i].activate( false );
					}
				}
				if ( this.m_tutorialAreas[i].isActive() ) {
					this.m_tutorialAreas[i].update( dt );
				}
			}
		}


	}

	for ( var i = 0; i < this.m_tutorialBoards.length; i++ ) {
        if ( this.m_tutorialBoards[i] !== null ) {
            this.m_tutorialBoards[i].update( dt );
        }
    }
};

/** 
 * @override
 */
ActorManagerPlatform.prototype.free = function () {
	SNpcManager.prototype.free.call( this );

	for ( var k = this.m_tutorialAreas.length - 1; k >= 0; k-- ) {
        this.m_tutorialAreas.splice( k, 1 )[0].free();
    }

	this.m_tutorialAreas = null;
    this.m_tutorialBoards = null;
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {string} params
 * @extends SWorldActor
 */
function Teleporter( canvas, world, x, y, params ) {
	this.m_params = null;
	this.m_targetX = 0;
	this.m_targetY = 0;
	this.m_prePlayerCollision = false;
	this.m_currentPlayerCollision = false;

	SWorldActor.call( this, canvas, world, x, y );

	this.m_clip = Application.instance.getClip( 'mcItemDoorWarp' );
	canvas.addChild( this.m_clip );
	this.m_clip.position.x = x;
	this.m_clip.position.y = y;

	this.m_params = Common.getParams( params );
	this.m_targetX = parseInt( this.m_params['targetX'], 10 );
	this.m_targetY = parseInt( this.m_params['targetY'], 10 );

	this.setFlipX( parseInt( this.m_params['flip'], 10 ) === 1 );
	this.updateBounds();
}
Application.subclass( Teleporter, SWorldActor );

/**
 * @param {SWorldActor} player
 */
Teleporter.prototype.teleportPlayer = function( player ) {
	player.setPosition( this.m_targetX, this.m_targetY );
};

/**
 * @override
 * @param {number} dt
 */
Teleporter.prototype.update = function( dt ) {
	var player = this.m_world.player();
	{
		this.m_prePlayerCollision = this.m_currentPlayerCollision;
		if ( !player.isDead() && player.hitTest( this ) ) {
			player.isReadyToTeleport = true;
			this.m_currentPlayerCollision = true;
		}
		else {
			this.m_currentPlayerCollision = false;
			if ( this.m_prePlayerCollision ) {
				player.isReadyToTeleport = false;
			}
		}

		if ( this.m_currentPlayerCollision && !player.isDead() && player.doTeleport ) {
			this.teleportPlayer( player );
			player.doTeleport = false;
		}
	}
	SWorldActor.prototype.update.call( this, dt );
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {number} itemType
 * @param {Object=} config
 * @param {string=} msg
 * @extends SWorldActor
 */

function Item( canvas, world, x, y, itemType, config, msg ) {
	/** @type {number} */
	this.idItem = 0;

	SWorldActor.call( this, canvas, world, x, y );
	config = ( config !== undefined ) ? config : null;
	msg = ( msg !== undefined ) ? msg : '';
	this.type = itemType;

	var clipName = '';
	var vfxName = '';

	switch ( this.type ) {
		case Item.TYPE_COIN:
			clipName = 'mcCoin';
			this.m_className = 'ItemCoin';
			vfxName = 'FxItemEnergy';
			break;
		case Item.TYPE_ADD_HEALTH:
			clipName = 'mcHealth';
			this.m_className = 'ItemHealth';
			vfxName = 'FxItemHp';
			break;
		case Item.TYPE_TOKEN:
			clipName = 'mcToken';
			this.m_className = 'ItemToken';
			vfxName = 'FxItemToken';
			if( config !== null ) {
				this.idItem = config['idToken'];
			}
			break;
	}

	this.m_character = new Character( 0, 0, this.m_canvas );
	this.m_character.addState( Item.ST_ITEM_STAND, clipName );
	this.gotoState( Item.ST_ITEM_STAND );
	this.updateBounds();

	/** @type {number} */
	this.bonusTime = window['platform_general']['player']['energyCubeTime'];

	if ( this.type === Item.TYPE_COIN ) {
		this.m_clip.setScale( 0.5 );
	}

	/** @type {SEffect} */
	this.vfx = null; //this.m_world.createEffect( vfxName, this.m_x, this.m_y, 0, this.m_canvas );

	/** @type {SEffect} */
	this.trail = null;
	/** @type {ParametricParabolicMovement} */
	this.trailMov = null;

	/** @type {number} */
	this.initY = this.m_y;
	/** @type {number} */
	this.angleSpeed = 0.005;
	/** @type {number} */
	this.angle = 0;

	var angleSpeedOffset = [-0.001, 0.001];
	this.angleSpeed += angleSpeedOffset[Common.random( 0, 1 )];
}
Application.subclass( Item, SWorldActor );

Item.TYPE_COIN = 900;
Item.TYPE_ADD_HEALTH = 901;
Item.TYPE_TOKEN = 902;

Item.ST_ITEM_STAND = 'st1';
Item.ST_ITEM_FADING = 'st2';

Item.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );

	switch ( this.m_state ) {
		case Item.ST_ITEM_STAND:
			if ( this.m_world.player().hitTest( this ) ) {
				switch ( this.type ) {
					case Item.TYPE_COIN:
						Application.instance.playSound( 'SND_OBJ_ENERGY_CUBE' );
						this.m_world.game().addTime( this.bonusTime );
						this.m_world.createEffect( 'FxPickEnergy', this.m_x, this.m_y, 1, this.m_canvas );
						break;
					case Item.TYPE_ADD_HEALTH:
						Application.instance.playSound( 'SND_OBJ_HP' );
						this.m_world.game().setLives( 2, /** @type {PlayerPlatform} */ ( this.m_world.player() ).mode );
						this.m_world.createEffect( 'FxPickHp', this.m_x, this.m_y, 1, this.m_canvas );
						this.m_world.game().createShaderRing( this.m_x - this.m_world.camera().getX(), this.m_y - this.m_world.camera().getY(), 6, 0.5 );
						break;
					case Item.TYPE_TOKEN:
						Application.instance.playSound( 'SND_OBJ_TOKENS' );
						this.m_world.game().addToken( this.idItem );
						this.m_world.createEffect( 'FxPickToken', this.m_x, this.m_y, 1, this.m_canvas );
						this.m_world.game().createShaderRing( this.m_x - this.m_world.camera().getX(), this.m_y - this.m_world.camera().getY(), 6, 0.5 );
						if ( DataManager.instance ) {
							DataManager.instance.checkAchievement( DataManager.REG_ACHIEVEMENT_6 );
						}

						if ( this.idItem > 0 ) {
							var idTokenSaved = DataManager.instance.getLevelRegister( DataManager.REGLEVEL_TOKENS_IDS, Global.level - 1 );
							if ( idTokenSaved < 1000 ) { idTokenSaved = 1000; }
							idTokenSaved += Math.pow( 10, 3 - this.idItem )
							DataManager.instance.setLevelRegister( DataManager.REGLEVEL_TOKENS_IDS, Global.level - 1, idTokenSaved );
							DataManager.instance.saveData();
						}
						break;
				}
				this.m_state = Item.ST_ITEM_FADING;
				if ( this.vfx ) {
					this.vfx.isAwaitingDelete = true;
				}

				this.m_clip.alpha = 0.05;
			}
			else {
				this.angle += this.angleSpeed * dt
				if ( this.angle >= Math.PI * 2 ) {
					this.angle = 0;
				}
				this.m_y = this.initY + 5 * Math.sin( this.angle );
			}
			break;

		case Item.ST_ITEM_FADING:
			this.m_clip.alpha -= 0.002 * dt;
			this.m_y -= 0.25 * dt;
			if ( this.m_clip.alpha < 0.05 ) {
				this.m_clip.alpha = 0;
				this.setAwaitingDelete( true );
			}


			break;
	}
};







/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {string} params
/* @param {Object} rawData
 * @extends SWorldActor
 */
function Pivot( canvas, world, x, y, params, rawData ) {
	this.m_xPlayer = 0.0;
	this.m_yPlayer = 0.0;
	this.m_dx = 0.0;
	this.m_dy = 0.0;
	this.m_longitude = 0.0;
	this.m_d = 0.0;
	this.m_angle = 0.0;
	this.m_alpha = 0.0;
	this.m_gravity = 0.0;
	this.m_timeON = 0;
	this.m_timeOFF = 0;
	this.m_timeElapse = 0;

	SWorldActor.call( this, canvas, world, x, y );
	var objParams = Common.getParams( params );
	var angleFromParams = 135; // objParams['angle'];
	this.m_angle = parseFloat( angleFromParams * Math.PI / 180 );
	this.m_longitude = parseFloat( objParams['longitude'] );
	this.m_gravity = 180; //parseFloat( objParams['gravity'] );
	this.m_timeON = parseFloat( objParams['timeON'] );
	this.m_timeOFF = parseFloat( objParams['timeOFF'] );

	this.angleRelease = 45;
	if ( rawData && rawData.hasOwnProperty( 'angleRelease' ) ) {
		this.angleRelease = rawData['angleRelease'];
	}

	this.releaseImpulseY = -1.2;
	if ( rawData && rawData.hasOwnProperty( 'releaseImpulseY' ) ) {
		this.releaseImpulseY = -rawData['releaseImpulseY'];
	}

	this.m_character = new Character( 0, 0, this.m_canvas );
	this.m_character.addState( Pivot.ST_ON, 'mc_hook' );// 'mcItemPivotOn' );
	this.m_character.addState( Pivot.ST_ALERT, 'mc_hook' );// 'mcItemPivotAlert' );
	this.m_character.addState( Pivot.ST_OFF, 'mc_hook' );// 'mcItemPivotOff' );
	this.m_character.addState( Pivot.ST_APPEAR, 'mc_hook' );// 'mcItemPivotApear' );
	this.gotoState( Pivot.ST_ON );

	this.lastDetected = false;
}
Application.subclass( Pivot, SWorldActor );
Pivot.ST_ON     = 'st_101';
Pivot.ST_ALERT  = 'st_102';
Pivot.ST_OFF    = 'st_103';
Pivot.ST_APPEAR = 'st_104';

Pivot.prototype.update = function( dt ) {
	switch ( this.m_state ) {
		case Pivot.ST_ON:
			this.onCheckCollisionPlayer();
			this.m_timeElapse += dt;
			if ( this.m_timeElapse >= this.m_timeON && this.m_timeOFF != 0 ) {
				this.m_timeElapse = 0;
				this.gotoState( Pivot.ST_ALERT );
			}
			break;
		case Pivot.ST_ALERT:
			this.onCheckCollisionPlayer();
			this.m_timeElapse += dt;
			if ( this.m_timeElapse >= 3000 ) {
				this.m_timeElapse = 0;
				this.gotoState( Pivot.ST_OFF );
				this.m_world.player().removePendularMove();
			}
			break;
		case Pivot.ST_OFF:
			this.m_timeElapse += dt;
			if ( this.m_timeElapse >= this.m_timeOFF ) {
				this.m_timeElapse = 0;
				this.gotoState( Pivot.ST_APPEAR );
			}
			break;
		case Pivot.ST_APPEAR:
			if ( this.m_clip.currentFrame == this.m_clip.totalFrames - 1 ) {
				this.gotoState( Pivot.ST_ON );
			}
			break;
	}
	SWorldActor.prototype.update.call( this, dt );
};

Pivot.prototype.onCheckCollisionPlayer = function() {
	var player = /** @type {PlayerPlatform} */ ( this.m_world.player() );
	var wrongOrientation = false;
	if ( this.m_x > player.getX() && player.isFacingLeft ) {
		wrongOrientation = true;
	}
	else if ( this.m_x < player.getX() && !player.isFacingLeft ) {
		wrongOrientation = true;
	}

	if ( player.mode !== PlayerPlatform.MODE_GIRL || wrongOrientation || player.state() === Player.ST_PLAYER_HIT ) {
		if ( player.enableButtonforGirl ) {
			player.enableButtonforGirl = false;
		}
		if ( player.isNearPivot ) {
			player.isNearPivot = false;
		}
		if ( this.m_clip && this.m_clip.name === 'mc_hook2' ) {
			this.m_state = '-1';
			this.m_character.addState( Pivot.ST_ON, 'mc_hook' );
			this.gotoState( Pivot.ST_ON );
		}
		return; 
	}

	var currentDetected = false;

	this.m_xPlayer = this.m_world.player().getX();
	this.m_yPlayer = this.m_world.player().getY();
	this.m_dx = this.m_x - this.m_xPlayer;
	this.m_dy = this.m_y - this.m_yPlayer;
	this.m_d = this.m_dx * this.m_dx + this.m_dy * this.m_dy;
	this.m_alpha = Math.atan2( this.m_dx, this.m_dy );
	this.m_alpha = ( this.m_alpha + 2 * Math.PI ) % ( 2 * Math.PI ) - Math.PI;

	var long = 1.6 * this.m_longitude;

	if ( this.m_d <= long * long && Math.abs( this.m_alpha ) <= this.m_angle && this.onAirValidation() ) {
		if ( /** @type {PlayerPlatform} */ ( this.m_world.player() ).justRemovePendular ) {
			if ( /** @type {PlayerPlatform} */ ( this.m_world.player() ).pivot !== this ) {
				/** @type {PlayerPlatform} */ ( this.m_world.player() ).justRemovePendular = false;
			}
		}

		player.isNearPivot = true;
		this.m_state = '-1';
		this.m_character.addState( Pivot.ST_ON, 'mc_hook2' );
		this.gotoState( Pivot.ST_ON );
		this.m_world.player().onCheckCollisionPivot( this.m_x, this.m_y, this.m_angle, this.m_gravity, this.m_longitude, this.angleRelease, this.releaseImpulseY, this );
		currentDetected = true;
		player.enableButtonforGirl = true;
	}

	if ( !currentDetected && this.lastDetected ) {
		player.isNearPivot = false;
		player.enableButtonforGirl = false;
		this.m_state = '-1';
		this.m_character.addState( Pivot.ST_ON, 'mc_hook' );
		this.gotoState( Pivot.ST_ON );
	}

	this.lastDetected = currentDetected;
};

/**
 * @return {boolean}
 */
Pivot.prototype.onAirValidation = function () {
	var player = /** @type {PlayerPlatform} */ ( this.m_world.player() );

	var isJumping = player.isJumping();
	var noHook = ( player.m_pendularMove  === null );
	var isFacingLeft = player.isFacingLeft;
	var px = player.getX();

	if ( !noHook ) { return false; }

	if ( isJumping ) { 
		if ( px > this.m_x && isFacingLeft ) { return true; }
		if ( px < this.m_x && !isFacingLeft ) { return true; }
		return false;
	}
	
	return true;
};

/**
 * @constructor
 * @param {string} bulletName
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {number} speed
 * @param {number} distance
 * @param {number=} angle
 * @param {number=} damage
 * @extends SWorldActor
 */
function Bullet( bulletName, world, x, y, speed, distance, angle, damage ) {
	angle = ( typeof angle !== 'undefined' ) ? angle : 0.0;
	damage = ( typeof damage !== 'undefined' ) ? damage : 0.0;

	SWorldActor.call( this, world.objectCanvas(), world, x, y, bulletName );
	this.m_clip.rotation = angle;
	this.damage = damage;
	this.bullet = bulletName;

	angle = angle * ( Math.PI / 180 );

	var targetX = x + distance * Math.cos( angle );
	var targetY = y + distance * Math.sin( angle );

	this.m_move = new LinearMovement( x, y, speed );
	this.m_move.gotoRadialPoint( distance, angle );
	this.m_move.setCallbacks( this, this.onEndMove, null );

	this.m_world.actorManager().add( this );
	this.update( 0 );
}
Application.subclass( Bullet, SWorldActor );

Bullet.BULLET_WEB = 'mcItemPivotAlert';

/** @param {Movement} movement */
Bullet.prototype.onEndMove = function( movement ) {
	this.m_isAwaitingDelete = true;
};

Bullet.prototype.update = function( dt ) {
	this.m_move.update( dt );
	this.m_x = this.m_move.getX();
	this.m_y = this.m_move.getY();
	SWorldActor.prototype.update.call( this, dt );
};

Bullet.prototype.free = function() {
	this.m_move.free();
	this.m_move = null;
	SWorldActor.prototype.free.call( this );
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} pivotX
 * @param {number} pivotY
 * @param {number} angle
 * @param {number} gravity
 * @param {number} longitude
 * @param {string} name
 * @param {number} angleRelease
 * @param {number} releaseImpulseY
 * @extends SWorldActor
 */
function FlyPendular( canvas, world, pivotX, pivotY, x, y, angle, gravity, longitude, name, angleRelease, releaseImpulseY ) {
	SWorldActor.call( this, canvas, world, pivotX, pivotY );
	this.m_pendulum = new PendularMovement( this.m_x, this.m_y, x, y, angle, gravity, longitude );
	this.m_xFly = x;
	this.m_yFly = y;
	this.angleRelease = angleRelease;
	this.setActorClip( name );

	this.releaseImpulseY = ( releaseImpulseY ? releaseImpulseY : -1.2 );

	this.isDone = false;
}
Application.subclass( FlyPendular, SWorldActor );

FlyPendular.prototype.getX = function() {
	return this.m_xFly;
};

FlyPendular.prototype.getY = function() {
	return this.m_yFly;
};

/**
 * @return {number}
 */
FlyPendular.prototype.getAngle = function() {
	if ( this.m_clip ) {
		var a = this.m_clip.rotation * ( 180 / Math.PI );
		return  a;
	}
	return 0;
};

/**
 * @return {number}
 */
FlyPendular.prototype.getVelocity = function() {
	if ( this.m_pendulum ) {
		return this.m_pendulum.getVelocity();
	}
	return 0;
};

/**
 * @return {number}
 */
FlyPendular.prototype.getVelocitySign = function() {
	if ( this.m_pendulum && this.m_pendulum.maxAngleSpeed !== 0 ) {
		return this.m_pendulum.maxAngleSpeed;
	}
	return 0;
};

FlyPendular.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );
	this.m_pendulum.update( dt );
	this.m_xFly = this.m_pendulum.getX();
	this.m_yFly = this.m_pendulum.getY();

	var mDx = this.m_x - this.m_xFly;
	var mDy = this.m_y - this.m_yFly;
	var mD = mDx * mDx + mDy * mDy;
	var mAngulo = Math.atan2( mDx, mDy );

	this.m_clip.rotation = Math.PI - mAngulo;
	this.m_clip.scale.y = Math.sqrt( mD ) / 200; // this.m_pendulum.getMaxLongitude();

	if ( this.getVelocitySign() > 0 ) {// .m_pendulum.getVelocity() > 0 ) {
		this.m_world.player().setFlipX( false );
	}
	else {
		this.m_world.player().setFlipX( true );
	}

	this.isDone = this.checkIsDone();
};

/**
 * @return {boolean}
 */
FlyPendular.prototype.checkIsDone = function() {
	var angDeg = this.m_pendulum.m_angle * ( 180 / Math.PI );
	var betaDeg = this.angleRelease;
	var vel = this.getVelocitySign(); // this.m_pendulum.getVelocity();
	if ( vel > 0 ) {
		if ( angDeg >= betaDeg ) {
			return true;
		}
	}
	else {
		if ( angDeg <= -betaDeg ) {
			return true;
		}
	}
	return false;
};


/**
 * @constructor
 * @param {string} bulletName
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {number} speed
 * @param {number} distance
 * @param {number=} angle
 * @param {number=} damage
 * @extends Bullet
 */
function BulletPlayer( bulletName, world, x, y, speed, distance, angle, damage ) {
	angle = ( typeof angle !== 'undefined' ) ? angle : 0.0;
	damage = ( typeof damage !== 'undefined' ) ? damage : 0.0;

	Bullet.call( this, bulletName, world, x, y, speed, distance, angle, damage );
}
Application.subclass( BulletPlayer, Bullet );

BulletPlayer.prototype.update = function( dt ) {
	Bullet.prototype.update.call( this, dt );
	var length = this.m_world.actorManager().getActors().length;
	var k = 0;
	for ( k = 0; k < length; k++ ) {
		var tmpActor = this.m_world.actorManager().getActors()[k];
		if ( !tmpActor.isIdle() ) {
				if ( tmpActor.getBounds() !== null ) {
					if ( tmpActor.getBounds().intersectRect( this.getBounds() ) ) {
						tmpActor.onHit( this.damage, this, 0, 0 );
						this.m_isAwaitingDelete = true;
					}
				}
		}
	}
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {number} rotation
 * @param {string} params
 * @param {number} type
 * @extends SWorldActor
 */
function Spring( canvas, world, x, y, rotation, params, type ) {
	SWorldActor.call( this, canvas, world, x, y );
	this.m_type = type;
	this.m_params = Common.getParams( params );
	if ( rotation === undefined ) rotation = 0;
	this.m_rotation = rotation;

	this.m_character = new Character( x, y, canvas );
	this.m_character.addState( Spring.ST_SPRING_STAND, 'mcItemArrowSpring0' + this.m_type );
	this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.gotoState( Spring.ST_SPRING_STAND );
	this.updateBounds();

	this.m_clip.rotation = 180 * rotation / Math.PI;
}
Application.subclass( Spring, SWorldActor );

Spring.ST_SPRING_STAND = 'st01';
Spring.ST_SPRING_RELEASE = 'st02';

Spring.prototype.onEndAnimation = function( state ) {
	if ( state == Spring.ST_SPRING_RELEASE || state == Spring.ST_SPRING_STAND ) {
		this.gotoState( Spring.ST_SPRING_STAND );
		this.m_clip.rotation = 180 * this.m_rotation / Math.PI;
	}
};

Spring.prototype.update = function( dt ) {
	switch ( this.m_state ) {
		case Spring.ST_SPRING_STAND:
			if ( this.m_state != Spring.ST_SPRING_RELEASE && this.m_world.player().hitTest( this ) ) {
				this.m_world.player().onSpringCollision( parseFloat( this.m_params['forceX'] ),
														 parseFloat( this.m_params['speedY'] ),
														 this.m_type, this );
			}
			break;
		case Spring.ST_SPRING_RELEASE:
			break;
	}
	SWorldActor.prototype.update.call( this, dt );
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {number} x
 * @param {number} y
 * @param {string} nameClip
*/
function Ball( canvas, x, y, nameClip ) {
	nameClip = ( typeof nameClip !== 'undefined' ) ? nameClip : '';

	this.m_canvas = canvas;
	this.x = x;
	this.y = y;
	this.m_clip = Application.instance.getClip( nameClip );
	this.m_clip.position.x = ( x );
	this.m_clip.position.y = ( y );

	this.parent = canvas;
	this.parent.addChild( this.m_clip );
	this.m_clip.parent = this.parent;

	this.velocity = new Vector2D();
}

Ball.MAX_VEL = 1.5;

Ball.prototype.clip = function() {
	return this.m_clip;
};

Ball.prototype.applyImpulse = function() {
	this.m_clip.alpha = 0.5;
};

Ball.prototype.update = function( dt ) {
	this.x += this.velocity.x * dt;
	this.y += this.velocity.y * dt;

	this.velocity.x *= 0.9;
	this.velocity.y *= 0.9;

	if ( Math.abs( this.velocity.x ) <= 0.01 ) {
		this.velocity.x = 0;
	}

	if ( Math.abs( this.velocity.y ) <= 0.01 ) {
		this.velocity.y = 0;
	}

	if ( this.m_clip.alpha < 1 ) {
		this.m_clip.alpha += 0.02;
	}

	if ( this.x <= 50 ) {
		this.x = 50;
		this.velocity.x *= -1;
	}
	else if ( this.x >= 700 ) {
		this.x = 700;
		this.velocity.x *= -1;
	}

	if ( this.y <= 50 ) {
		this.y = 50;
		this.velocity.y *= -1;
	}
	else if ( this.y >= 450 ) {
		this.y = 450;
		this.velocity.y *= -1;
	}

	this.m_clip.position.x = ( this.x );
	this.m_clip.position.y = ( this.y );
};

Ball.prototype.free = function() {
	this.parent.removeChild( this.m_clip );
	this.m_clip.free();
	this.m_clip = null;
	this.parent = null;
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} params
 * @param {Object} data
 * @param {number=} type
 * @extends SWorldActor
 */
function BaseEnemy( canvas, world, x, y, params, data, type ) {
    type = ( typeof type === 'undefined' ) ? BaseEnemy.ENEMY_GENERIC : type;
	/** @type {number} */
    this.initX = x;
    /** @type {number} */
	this.initY = y;
	/** @type {number} */
	this.m_timer = 0;
	/** @type {number} */
	this.m_timeHit = 0;
	/** @type {number} */
	this.m_plusScore = 0;
	/** @type {Object} */
	this.m_data = null;
	/** @type {Rectangle} */
	this.m_limits = null;
	/** @type {string} */
	this.m_oldState = '';
	/** @type {string} */
	this.m_stateBeforeHit = BaseEnemy.ST_STAND;
	/** @type {number} */
	this.m_typeEnemy = 0;
	/** @type {boolean} */
	this.m_canGetHit = true;
	/** @type {boolean} */
	this.m_isCollisionEnabled = true;
	/** @type {boolean} */
	this.m_toLeft = false;
	/** @type {boolean} */
	this.m_defaultViewLeft = true;
	/** @type {boolean} */
	this.m_isInvulnerable = false;
	/** @type {number} */
	this.m_bulletSpeed = 0;
	/** @type {number} */
	this.m_bulletDistance = 0;
	/** @type {number} */
	this.m_bulletDamage = 0;
	/** @type {number} */
	this.m_bulletGravity = 0;
	/** @type {number} */
	this.m_bulletTimeALive = 0;
	/** @type {number} */
	this.m_impulsePlayerEnemyX = 0;
	/** @type {number} */
	this.m_impulsePlayerEnemyY = 0;
	/** @type {number} */
	this.m_impulseEnemyPlayerX = 0;
	/** @type {number} */
	this.m_impulseEnemyPlayerY = 0;

	this.m_impulsePlayerEnemyX = window['platform_general']['player']['colPlayerEnemyImpulseX'];
	this.m_impulsePlayerEnemyY = window['platform_general']['player']['colPlayerEnemyImpulseY'];
	this.m_impulseEnemyPlayerX = window['platform_general']['player']['colEnemyPlayerImpulseX'];
	this.m_impulseEnemyPlayerY = window['platform_general']['player']['colEnemyPlayerImpulseY'];

	this.settings( canvas, world, x, y, params, data );
	this.m_typeEnemy = type;

	SWorldActor.call( this, canvas, world, x, this.m_limits.y );

	this.setHealth( this.m_data.health );
}
Application.subclass( BaseEnemy, SWorldActor );

BaseEnemy.ST_HIT      = 'st_hit';
BaseEnemy.ST_DIE      = 'st_die';
BaseEnemy.ST_WALK     = 'st_walk';
BaseEnemy.ST_DASH     = 'st_dash';
BaseEnemy.ST_STAND    = 'st_stand';
BaseEnemy.ST_ALERT    = 'st_alert';
BaseEnemy.ST_SHOOT    = 'st_shoot';
BaseEnemy.ST_CHARGE   = 'st_charge';
BaseEnemy.ST_APPEAR   = 'st_appear';
BaseEnemy.ST_ATTACK   = 'st_attack';
BaseEnemy.ST_DASH_IN  = 'st_dash_in';
BaseEnemy.ST_DASH_OUT = 'st_dash_out';

BaseEnemy.ENEMY_GENERIC = 0;
BaseEnemy.ENEMY_HENCHMAN = 1;
BaseEnemy.ENEMY_ARMED = 2;
BaseEnemy.ENEMY_NINJA = 3;
BaseEnemy.ENEMY_BOSS = 4;

/**
 * @override
 * @param {string} st
 */
BaseEnemy.prototype.gotoState = function( st ) {
	SWorldActor.prototype.gotoState.call( this, st );

	if ( st === BaseEnemy.ST_HIT || st === BaseEnemy.ST_DIE ) {
		this.m_world.createEffect( 'FxEnemyHit', this.m_x, this.m_y - 50, 1, this.m_canvas );
	}

	if ( st === BaseEnemy.ST_DIE ) {
		this.onSoundDefeat();
	}
};

/**
 * @public
 */
BaseEnemy.prototype.onSoundDefeat = function() {
	var idSound = Common.random( 1, 3 );
	Application.instance.playSound( 'SND_ENEMY_DEFEAT' );
	Application.instance.playSound( 'SND_ENEMY_VO_DEFEAT_' + idSound );
};

BaseEnemy.prototype.settings = function( canvas, world, x, y, params, data ) {
	this.m_data = data;
	this.m_limits = new Rectangle( x, y );
};

BaseEnemy.prototype.setDefaultViewLeft = function( val ) {
	this.m_defaultViewLeft = val;
};

BaseEnemy.prototype.setState = function( state, toLeft ) {
	toLeft = ( typeof toLeft !== 'undefined' ) ? toLeft : false;
	this.gotoState( state );
	this.setLookAtLeft( toLeft );
};

BaseEnemy.prototype.setLookAtLeft = function( toLeft ) {
	this.m_toLeft = toLeft;
	this.setFlipX( this.m_defaultViewLeft != this.m_toLeft );
	this.updateBounds();
	this.updateBoundsAttack();
};

BaseEnemy.prototype.onCheckCollisionPlayer = function() {
	if ( this.m_isCollisionEnabled && this.m_world.player().hitTest( this ) ) {
		this.m_world.player().onEnemyCollision( this, this.m_data.damage );
	}
};

BaseEnemy.prototype.onCheckCollisionBulletPlayer = function() {
};

/**
 * @override
 * @param {number} damage
 * @param {SWorldActor=} source
 * @param {number=} px
 * @param {number=} py
 * @return {boolean}
 */
BaseEnemy.prototype.onHit = function( damage, source, px, py ) {
	if ( !this.m_canGetHit || this.m_isInvulnerable ) {
		return false;
	}
	this.m_health -= damage;
	if ( this.m_health <= 0 ) {
		this.m_health = 0;
		this.m_canGetHit = false;
	}
	else {
		this.setState( BaseEnemy.ST_HIT, this.m_toLeft );
		this.m_isInvulnerable = true;
		return false;
	}
	return true;
};
/**
 * @override
 * @param {PointsMovement} movement
 */
BaseEnemy.prototype.onChangePathPoint = function( movement ) {
	this.m_state = '-1';
	this.gotoState( BaseEnemy.ST_WALK );
	this.setFlipX( movement.getVX() < 0 );
};

BaseEnemy.prototype.doNextAttack = function () {

};

BaseEnemy.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );
	this.onCheckCollisionPlayer();
	this.onCheckCollisionBulletPlayer();
};

BaseEnemy.prototype.free = function() {
	this.m_data = null;
	this.m_limits = null;
	SWorldActor.prototype.free.call( this );
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {string} params
 * @param {Object} data
 * @param {Object} config
 * @extends BaseEnemy
 */
function Henchman( canvas, world, x, y, params, data, config ) {
	/** @type {number} */
	this.m_walkRange = 0;
	/** @type {number} */
	this.m_speedEnemy = 0;
	/** @type {number} */
	this.m_normalSpeed = 0;
	/** @type {number} */
	this.m_chaseSpeed = 0;
	/** @type {number} */
	this.m_actionWalk = 0;
	/** @type {number} */
	this.m_limitAttack = 0;
	/** @type {boolean} */
	this.m_activeChase = false;

	this.m_walkRange = config['walkRange'];
	BaseEnemy.call( this, canvas, world, x, y, Common.getParams( params ), data, BaseEnemy.ENEMY_HENCHMAN );

	this.m_className = 'henchman';
	this.m_skin = config['skin'];
	this.m_plusScore = 10;
	this.setDefaultViewLeft( false );

	var rand = Common.random( 1, 2 );

	this.m_character = new Character( x, y, canvas );
	this.m_character.addState( BaseEnemy.ST_HIT,    this.m_skin + '_hit' );
	this.m_character.addState( BaseEnemy.ST_DIE,    this.m_skin + '_defeat0' + rand );
	this.m_character.addState( BaseEnemy.ST_WALK,   this.m_skin + '_walk' );
	this.m_character.addState( BaseEnemy.ST_ALERT,  this.m_skin + '_alert' );
	this.m_character.addState( BaseEnemy.ST_STAND,  this.m_skin + '_stand' );
	this.m_character.addState( BaseEnemy.ST_APPEAR, this.m_skin + '_appear' );
	this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.setState( BaseEnemy.ST_APPEAR, true );

	this.m_actionWalk = Henchman.ACTION_WALK_PATROL;
}
Application.subclass( Henchman, BaseEnemy );

Henchman.ACTION_WALK_PATROL = 20;
Henchman.ACTION_WALK_CHASE  = 21;

Henchman.prototype.settings = function( canvas, world, x, y, params, data ) {
	BaseEnemy.prototype.settings.call( this, canvas, world, x, y, params, data );
	this.m_normalSpeed = this.m_data['speed'];
	this.m_chaseSpeed = this.m_data['chaseSpeed'];
	this.m_speedEnemy = this.m_normalSpeed;

	this.m_limits = world.getMaxFloorRange( x, y, Math.floor( this.m_walkRange ) );
};

Henchman.prototype.setState = function( state, toLeft ) {
	toLeft = ( typeof toLeft !== 'undefined' ) ? toLeft : false;
	BaseEnemy.prototype.setState.call( this, state, toLeft );
	this.m_isCollisionEnabled = ( ( this.m_state != BaseEnemy.ST_HIT ) || ( this.m_state != BaseEnemy.ST_DIE ) );
};

Henchman.prototype.onEndAnimation = function( state ) {
	switch ( state ) {
		case BaseEnemy.ST_APPEAR:
			this.gotoState( BaseEnemy.ST_STAND );
			this.createShadow( 'mcShadow' );
			break;
		case BaseEnemy.ST_ALERT:
			this.setState( BaseEnemy.ST_WALK, this.m_toLeft );
			break;
		case BaseEnemy.ST_DIE:
			this.m_isAwaitingDelete = true;
			break;
		case BaseEnemy.ST_HIT:
			this.m_isInvulnerable = false;
			this.gotoState( BaseEnemy.ST_STAND );
			break;
	}
};

/**
 * @override
 * @param {number} damage
 * @param {SWorldActor=} source
 * @param {number=} px
 * @param {number=} py
 * @return {boolean}
 */
Henchman.prototype.onHit = function( damage, source, px, py ) {
	if ( !BaseEnemy.prototype.onHit.call( this, damage, source, px, py ) ) {
		return false;
	}
	this.setState( BaseEnemy.ST_DIE, this.m_toLeft );
	this.m_world.game().addScore( this.m_plusScore );
	this.destroyShadow();
	if ( DataManager.instance ) {
		DataManager.instance.checkAchievement( DataManager.REG_ACHIEVEMENT_1 );
		DataManager.instance.checkAchievement( DataManager.REG_ACHIEVEMENT_3 );
	}
	return true;
};

Henchman.prototype.onCheckCollisionPlayer = function() {
	if ( this.m_world.player().boundsAttack() !== null ) {
		if ( this.getBounds() !== null ) {
			if ( this.m_world.player().getBoundsAttack().intersectRect( this.getBounds() ) ) {
				this.onHit( 10, this.m_world.player(), 0, 0 );
				return;
			}
		}
	}

	if ( this.m_timeHit < 0 &&
		this.m_isCollisionEnabled && ( this.m_world.player().hitTest( this ) ) &&
		this.m_world.player().state() !== Player.ST_PLAYER_LOSE &&
		this.m_world.player().state() !== Player.ST_PLAYER_HIT ) {

		var impulseX = 0;
		var impulseY = 0;
		if ( this.m_world.player().getY() < ( this.m_y - 40 ) ) {
			this.onHit( 50, this.m_world.player(), 0, 0 );

			impulseX = -1 * this.m_impulsePlayerEnemyX;
			impulseY = -1 * this.m_impulsePlayerEnemyY;

			/** @type {PlayerPlatform} */ ( this.m_world.player() ).replaceJumpDown();
			this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x ) ? Math.abs( impulseX ):impulseX, impulseY );
		}
		else {
			this.m_world.player().onEnemyCollision( this, this.m_data['damage'] );

			impulseX = -1 * this.m_impulseEnemyPlayerX;
			impulseY = -1 * this.m_impulseEnemyPlayerY;
			this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x ) ? Math.abs( impulseX ):impulseX, impulseY );
		}

		this.m_speedEnemy = this.m_normalSpeed;
		this.m_activeChase = false;
		this.m_actionWalk = Henchman.ACTION_WALK_PATROL;
		this.m_timeHit = this.m_data['hitTimer'];
	}
};

Henchman.prototype.updateStates = function( dt ) {
	var limitReached = false;
	this.m_timeHit -= dt;

	switch ( this.m_state ) {
		case BaseEnemy.ST_STAND:
			this.m_timer -= dt;
			if ( this.m_timer <= 0 ) {
				this.setState( BaseEnemy.ST_WALK, this.m_toLeft );
			}
			break;

		case BaseEnemy.ST_WALK:
			if ( this.proximityActivation() ) {
				this.m_oldState = this.m_state;
				this.m_limitAttack = this.m_world.player().getX();
				this.m_actionWalk = Henchman.ACTION_WALK_CHASE;
				this.m_speedEnemy = this.m_chaseSpeed;

				Application.instance.playSound( 'SND_ENEMY_ALERT' );
				this.setState( BaseEnemy.ST_ALERT, this.m_x > this.m_world.player().getX() );
			}
			else {
				var limitX = 0;
				if ( this.m_toLeft ) {
					this.m_x -= this.m_speedEnemy * dt;
					switch ( this.m_actionWalk ) {
						case Henchman.ACTION_WALK_PATROL:
							limitX = this.m_limits.left();
							if ( this.m_x <= limitX ) {
								this.setPosition( limitX, this.m_y );
								limitReached = true;
							}
							break;
						case Henchman.ACTION_WALK_CHASE:
							limitX = ( this.m_limitAttack < this.m_limits.left() ) ? this.m_limits.left():this.m_limitAttack;
							if ( this.m_x <= limitX ) {
								this.setPosition( limitX, this.m_y );
								this.m_speedEnemy = this.m_normalSpeed;
								this.m_activeChase = false;
								this.m_actionWalk = Henchman.ACTION_WALK_PATROL;
								this.m_timer = this.m_data['timeRest'];
								this.setState( BaseEnemy.ST_STAND, !this.m_toLeft );
							}
							break;
					}
				}
				else {
					this.m_x += this.m_speedEnemy * dt;
					switch ( this.m_actionWalk ) {
						case Henchman.ACTION_WALK_PATROL:
							limitX = this.m_limits.right();
							if ( this.m_x >= limitX ) {
								this.setPosition( limitX, this.m_y );
								limitReached = true;
							}
							break;
						case Henchman.ACTION_WALK_CHASE:
							limitX = ( this.m_limitAttack > this.m_limits.right() ) ? this.m_limits.right():this.m_limitAttack;
							if ( this.m_x >= limitX ) {
								this.setPosition( limitX, this.m_y );
								this.m_speedEnemy = this.m_normalSpeed;
								this.m_activeChase = false;
								this.m_actionWalk = Henchman.ACTION_WALK_PATROL;
								this.m_timer = this.m_data['timeRest'];
								this.setState( BaseEnemy.ST_STAND, !this.m_toLeft );
							}
							break;
					}
				}

				if ( limitReached ) {
					this.m_timer = this.m_data['timeRest'];
					this.setState( BaseEnemy.ST_STAND, !this.m_toLeft );
				}
			}
			break;
	}
};

Henchman.prototype.proximityActivation = function() {
	if ( this.m_world.player().isDead() || this.m_activeChase ) {
		return false;
	}

	var px = this.m_world.player().getX();
	if ( px < this.m_limits.left() || px > this.m_limits.right() ) {
		return false;
	}
	var py = this.m_world.player().getY();
	var dx = Math.abs( px - this.m_x );
	var dy = Math.abs( py - this.m_y );

	if ( dy <= 10 && dx <= this.m_data['distanceAttack'] ) {
		this.m_activeChase = true;
		return true;
	}
	return false;
};

Henchman.prototype.update = function( dt ) {
	this.updateStates( dt );
	BaseEnemy.prototype.update.call( this, dt );
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {string} params
 * @param {Object} data
 * @param {Object} config
 * @extends BaseEnemy
 */
function Armed( canvas, world, x, y, params, data, config ) {
	/** @type {number} */
	this.m_walkRange = 0;
	/** @type {number} */
	this.m_typeWeapon = 0;
	/** @type {boolean} */
	this.m_detectFloorSlopes = false;
	/** @type {number} */
	this.m_detectPlayerDirection = 0;
	/** @type {number} */
	this.m_timeShoot = 0;

	this.m_walkRange = config['walkRange'];
	this.m_timeShoot = ( ( typeof config['timeShoot'] === 'undefined' ) ? 1500:config['timeShoot'] );

	BaseEnemy.call( this, canvas, world, x, y, Common.getParams( params ), data, BaseEnemy.ENEMY_ARMED );

	this.m_className = 'armed';
	this.m_skin = config['skin'];
	this.m_plusScore = 10;
	this.m_typeWeapon = config['typeWeapon'];

	this.m_bulletSpeed     = 0.5; //SPEED
	this.m_bulletDamage    = 8;   //DAMAGE
	this.m_bulletGravity   = 1;   //GRAVITY
	this.m_bulletDistance  = 400; //DISTANCE
	this.m_bulletTimeALive = 2;   //TIME A LIVE

	var bulletParams = null;
	switch ( this.m_typeWeapon ) {
		case Armed.WEAPON_BULLET_LINEAR:
			this.m_bulletGravity = 0;
			this.m_bulletTimeALive = 0;
			if ( typeof config['linearBullet'] !== 'undefined' ) {
				bulletParams = Common.getParams( String( config['linearBullet'] ) );
				this.m_bulletDistance = parseFloat( bulletParams['distance'] );
				this.m_bulletDamage   = parseFloat( bulletParams['damage'] );
				this.m_bulletSpeed    = parseFloat( bulletParams['speed'] );
			}
			break;

		case Armed.WEAPON_BULLET_PARABOLIC:
			this.m_bulletDistance = 0;
			if ( typeof config['parabolicBullet'] !== 'undefined' ) {
				bulletParams = Common.getParams( String( config['parabolicBullet'] ) );
				this.m_bulletSpeed     = parseFloat( bulletParams['speed'] );
				this.m_bulletDamage    = parseFloat( bulletParams['damage'] );
				this.m_bulletGravity   = parseFloat( bulletParams['gravity'] );
				this.m_bulletTimeALive = parseFloat( bulletParams['timeALive'] );
			}
			break;
	}

	this.setDefaultViewLeft( false );

	var rand = Common.random( 1, 2 );

	this.m_character = new Character( x, y, canvas );
	this.m_character.addState( BaseEnemy.ST_HIT,     this.m_skin + '_hit0' + this.m_typeWeapon );
	this.m_character.addState( BaseEnemy.ST_DIE,     this.m_skin + '_defeat0' + this.m_typeWeapon + '' + rand );
	this.m_character.addState( BaseEnemy.ST_STAND,   this.m_skin + '_stand0' + this.m_typeWeapon );
	this.m_character.addState( BaseEnemy.ST_CHARGE,  this.m_skin + '_charge0' + this.m_typeWeapon );
	this.m_character.addState( BaseEnemy.ST_SHOOT,   this.m_skin + '_shoot0' + this.m_typeWeapon , [{ caller: this, callback: this.createBullet, frame:2 }] );
	this.m_character.addState( BaseEnemy.ST_APPEAR,  this.m_skin + '_appear0' + this.m_typeWeapon );
	this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.setState( BaseEnemy.ST_APPEAR, config['flipX'] );
}
Application.subclass( Armed, BaseEnemy );

Armed.WEAPON_BULLET_LINEAR = 1;
Armed.WEAPON_BULLET_PARABOLIC = 2;

/**
 * @public
 */
Armed.prototype.createBullet = function() {
	var offSetX = ( this.m_typeWeapon === Armed.WEAPON_BULLET_LINEAR )? 75:55;
	var offSetY = ( this.m_typeWeapon === Armed.WEAPON_BULLET_LINEAR )? 82:90;
	var posX = ( this.m_x + ( this.flipX() ? -1 : 1 ) * offSetX );
	var posY = ( this.m_y - offSetY )
	var world = /** @type {SWorld} */ ( this.m_world );
	var angleBullet = 0;

	var bullet = new EnemyBullet( 'enemy_02_bullet0' + this.m_typeWeapon, world, posX, posY );
	switch ( this.m_typeWeapon ) {
		case Armed.WEAPON_BULLET_LINEAR:
			angleBullet = ( this.flipX() ) ? Math.PI : 0;
			bullet.motionSettings( this.m_bulletSpeed,    //SPEED
								   this.m_bulletDistance, //DISTANCE
								   this.m_bulletDamage,   //DAMAGE
								   angleBullet,           //ANGLE
								   0,                     //GRAVITY
								   0 );                   //TIME A LIVE
			break;

		case Armed.WEAPON_BULLET_PARABOLIC:
			angleBullet = ( this.flipX() ) ? 1.25 * Math.PI : 1.75 * Math.PI;
			bullet.motionSettings( this.m_bulletSpeed,       //SPEED
								   0,                        //DISTANCE
								   this.m_bulletDamage,      //DAMAGE
								   angleBullet,              //ANGLE
								   this.m_bulletGravity,     //GRAVITY
								   this.m_bulletTimeALive ); //TIME A LIVE
			break;
	}

	Application.instance.playSound( 'SND_ENEMY_SHOOT' );
};

Armed.prototype.settings = function( canvas, world, x, y, params, data ) {
	BaseEnemy.prototype.settings.call( this, canvas, world, x, y, params, data );

	this.m_timer = this.m_timeShoot;
	this.m_detectFloorSlopes = params['detectFloorSlopes'] === 1;
	this.m_detectPlayerDirection = parseInt( params['detectPlayerDirection'], 10 );
	if ( this.m_detectFloorSlopes ) {
		this.m_limits = world.getMaxFloorRangeElevations( x, y, Math.floor( this.m_walkRange ) );
	}
	else {
		this.m_limits = world.getMaxFloorRange( x, y, Math.floor( this.m_walkRange ) );
	}
};

Armed.prototype.setState = function( state, toLeft ) {
	toLeft = ( typeof toLeft !== 'undefined' ) ? toLeft : false;
	BaseEnemy.prototype.setState.call( this, state, toLeft );
	this.m_isCollisionEnabled = ( ( this.m_state != BaseEnemy.ST_HIT ) || ( this.m_state != BaseEnemy.ST_DIE ) );
};

Armed.prototype.onEndAnimation = function( state ) {
	switch ( state ) {
		case BaseEnemy.ST_APPEAR:
			this.gotoState( BaseEnemy.ST_STAND );
			this.createShadow( 'mcShadow' );
			break;
		case BaseEnemy.ST_CHARGE:
			this.gotoState( BaseEnemy.ST_SHOOT );
			break;
		case BaseEnemy.ST_SHOOT:
			this.gotoState( BaseEnemy.ST_STAND );
			break;
		case BaseEnemy.ST_DIE:
			this.m_isAwaitingDelete = true;
			break;
		case BaseEnemy.ST_HIT:
			this.m_isInvulnerable = false;
			this.gotoState( BaseEnemy.ST_STAND );
			break;
	}
};

/**
 * @override
 * @param {number} damage
 * @param {SWorldActor=} source
 * @param {number=} px
 * @param {number=} py
 * @return {boolean}
 */
Armed.prototype.onHit = function( damage, source, px, py ) {
	if ( !BaseEnemy.prototype.onHit.call( this, damage, source, px, py ) ) {
		return false;
	}

	this.setState( BaseEnemy.ST_DIE, this.m_toLeft );
	this.m_world.game().addScore( this.m_plusScore );
	this.destroyShadow();
	if ( DataManager.instance ) {
		DataManager.instance.checkAchievement( DataManager.REG_ACHIEVEMENT_1 );
		DataManager.instance.checkAchievement( DataManager.REG_ACHIEVEMENT_3 );
	}
	return true;
};

Armed.prototype.onCheckCollisionPlayer = function() {
	if ( this.m_world.player().boundsAttack() !== null ) {
		if ( this.getBounds() !== null ) {
			if ( this.m_world.player().getBoundsAttack().intersectRect( this.getBounds() ) ) {
				this.onHit( 10, this.m_world.player(), 0, 0 );
				return;
			}
		}
	}

	if ( this.m_timeHit < 0 &&
		this.m_isCollisionEnabled && ( this.m_world.player().hitTest( this ) ) &&
		this.m_world.player().state() !== Player.ST_PLAYER_LOSE &&
		this.m_world.player().state() !== Player.ST_PLAYER_HIT ) {

		var impulseX = 0;
		var impulseY = 0;
		if ( this.m_world.player().getY() < ( this.m_y - 40 ) ) {
			this.onHit( 50, this.m_world.player(), 0, 0 );

			impulseX = -1 * this.m_impulsePlayerEnemyX;
			impulseY = -1 * this.m_impulsePlayerEnemyY;
			/** @type {PlayerPlatform} */ ( this.m_world.player() ).replaceJumpDown();
			this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x ) ? Math.abs( impulseX ):impulseX, impulseY );
		}
		else {
			this.m_world.player().onEnemyCollision( this, this.m_data['damage'] );
			impulseX = -1 * this.m_impulseEnemyPlayerX;
			impulseY = -1 * this.m_impulseEnemyPlayerY;
			this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x ) ? Math.abs( impulseX ):impulseX, impulseY );
		}

		this.m_timeHit = this.m_data['hitTimer'];
	}
};

Armed.prototype.changeDirection = function() {
	if ( this.m_detectPlayerDirection === 0 ) {
		return;
	}

	var diffY = Math.abs( this.m_world.player().getY() - this.m_y );
	var distance = Common.distance( this.m_world.player().getX(), this.m_world.player().getY(), this.m_x, this.m_y );
	if ( diffY <= 10 && distance <= 200 ) {
		this.setLookAtLeft( ( this.m_world.player().getX() < this.m_x ) );
	}
};

Armed.prototype.updateStates = function( dt ) {
	switch ( this.m_state ) {
		case BaseEnemy.ST_STAND:
			this.m_timer -= dt;
			this.m_timeHit -= dt;

			if ( this.m_timer <= 0 ) {
				this.changeDirection();
				this.m_timer = this.m_timeShoot;
				this.setState( BaseEnemy.ST_CHARGE, this.m_toLeft );
			}
			break;
	}
};

Armed.prototype.update = function( dt ) {
	this.updateStates( dt );
	BaseEnemy.prototype.update.call( this, dt );
};

/**
 * @constructor
 * @param {string} bulletName
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @extends SWorldActor
 */
function EnemyBullet( bulletName, world, x, y ) {
	/** @type {number} */
	this.speed = 0;
	/** @type {number} */
	this.distance = 0;
	/** @type {number} */
	this.angle = 0;
	/** @type {number} */
	this.damage = 0;
	/** @type {string} */
	this.bullet = '';
	/** @type {XYMovement} */
	this.m_move = null;
	/** @type {number} */
	this.gravity = 0;
	/** @type {number} */
	this.timeAlive = 0;
	/** @type {number} */
	this.m_impulseBulletX = 0;
	/** @type {number} */
	this.m_impulseBulletY = 0;

	this.m_impulseBulletX = window['platform_general']['player']['colBulletImpulseX'];
	this.m_impulseBulletY = window['platform_general']['player']['colBulletImpulseY'];

	this.bullet = bulletName;
	SWorldActor.call( this, world.objectCanvas(), world, x, y, this.bullet );

	this.m_x = x;
	this.m_y = y;
}
Application.subclass( EnemyBullet, SWorldActor );

/**
 * @param {number} speed
 * @param {number} distance
 * @param {number} damage
 * @param {number} angle
 * @param {number} gravity
 * @param {number} timeALive
 */
EnemyBullet.prototype.motionSettings = function( speed, distance, damage, angle, gravity, timeALive ) {
	this.speed = speed;
	this.distance = distance;
	this.angle = angle;
	this.damage = damage;
	this.gravity = gravity;
	this.timeAlive = ( timeALive * 1000 );

	this.addMovement();
};

EnemyBullet.prototype.addMovement = function() {
	this.m_move = new XYMovement();
	this.m_move.set( this.m_x, this.m_y, this.speed, this.angle, 0, this.gravity );
	this.m_move.distanceAlive = this.distance;
	this.m_move.timeAlive = this.timeAlive;

	this.m_world.actorManager().add( this );
	this.update( 0 );
};

EnemyBullet.prototype.onCheckCollisionPlayer = function() {
	if ( this.m_world.player().hitTest( this ) ) {
		this.m_world.player().onEnemyCollision( this, this.damage );

		var impulseX = -1 * this.m_impulseBulletX;
		var impulseY = -1 * this.m_impulseBulletY;
		this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x ) ? Math.abs( impulseX ):impulseX, impulseY );

		Application.instance.playSound( 'SND_ENEMY_IMPACT' );
		this.m_isAwaitingDelete = true;

		this.m_world.createEffect( ( Shego.instance && Shego.instance.isActive ) ? 'shego_bullet_disappear' : 'enemy_02_bullet_disappear', 
			this.m_x, this.m_y, 1, 
			GuiGame.instance.canvasEffects );
	}
};

/** @param {Movement} movement */
EnemyBullet.prototype.onEndMove = function( movement ) {
	this.m_isAwaitingDelete = true;
};

EnemyBullet.prototype.update = function( dt ) {
	if ( this.m_move !== null ) {
		this.m_move.update( dt );
		this.m_x = this.m_move.x;
		this.m_y = this.m_move.y;

		if ( this.m_move.isAwaitingDelete ) {
			this.m_isAwaitingDelete = true;
		}

		if ( this.m_world.getCellInPosition( this.m_x, this.m_y ) !== 0 ) {
			this.m_isAwaitingDelete = true;
		}

		this.onCheckCollisionPlayer();
	}

	SWorldActor.prototype.update.call( this, dt );
};

EnemyBullet.prototype.free = function() {
	if ( this.m_move !== null ) {
		this.m_move.free();
		this.m_move = null;
	}

	SWorldActor.prototype.free.call( this );
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {string} params
 * @param {Object} data
 * @param {Object} config
 * @extends BaseEnemy
 */
function Ninja( canvas, world, x, y, params, data, config ) {
	/** @type {number} */
	this.m_walkRange = 0;
	/** @type {number} */
	this.m_speedEnemy = 0;
	/** @type {number} */
	this.m_normalSpeed = 0;
	/** @type {number} */
	this.m_dashSpeed = 0;
	/** @type {number} */
	this.m_limitAttack = 0;
	/** @type {boolean} */
	this.m_activeDash = false;

	this.m_walkRange = config['walkRange'];
	BaseEnemy.call( this, canvas, world, x, y, Common.getParams( params ), data, BaseEnemy.ENEMY_NINJA );

	this.m_className = 'ninja';
	this.m_skin = config['skin'];
	this.m_plusScore = 10;
	this.setDefaultViewLeft( false );

	var rand = Common.random( 1, 2 );

	this.m_character = new Character( x, y, canvas );
	this.m_character.addState( BaseEnemy.ST_HIT,      this.m_skin + '_hit' );
	this.m_character.addState( BaseEnemy.ST_DIE,      this.m_skin + '_defeat0' + rand );
	this.m_character.addState( BaseEnemy.ST_WALK,     this.m_skin + '_walk' );
	this.m_character.addState( BaseEnemy.ST_DASH,     this.m_skin + '_dash_stand' );
	this.m_character.addState( BaseEnemy.ST_ALERT,    this.m_skin + '_alert' );
	this.m_character.addState( BaseEnemy.ST_STAND,    this.m_skin + '_stand' );
	this.m_character.addState( BaseEnemy.ST_APPEAR,   this.m_skin + '_appear' );
	this.m_character.addState( BaseEnemy.ST_DASH_IN,  this.m_skin + '_dash_intro' );
	this.m_character.addState( BaseEnemy.ST_DASH_OUT, this.m_skin + '_dash_out' );

	this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.setState( BaseEnemy.ST_APPEAR, true );
}
Application.subclass( Ninja, BaseEnemy );

Ninja.prototype.settings = function( canvas, world, x, y, params, data ) {
	BaseEnemy.prototype.settings.call( this, canvas, world, x, y, params, data );
	this.m_normalSpeed = this.m_data['speed'];
	this.m_dashSpeed = this.m_data['dashSpeed'];
	this.m_speedEnemy = this.m_normalSpeed;

	this.m_limits = world.getMaxFloorRange( x, y, Math.floor( this.m_walkRange ) );
};

Ninja.prototype.setState = function( state, toLeft ) {
	toLeft = ( typeof toLeft !== 'undefined' ) ? toLeft : false;
	BaseEnemy.prototype.setState.call( this, state, toLeft );
	this.m_isCollisionEnabled = ( ( this.m_state != BaseEnemy.ST_HIT ) || ( this.m_state != BaseEnemy.ST_DIE ) );
};

Ninja.prototype.onEndAnimation = function( state ) {
	switch ( state ) {
		case BaseEnemy.ST_APPEAR:
		case BaseEnemy.ST_DASH_OUT:
			if ( state === BaseEnemy.ST_APPEAR ) {
				this.createShadow( 'mcShadow' );
			}
			this.gotoState( BaseEnemy.ST_STAND );
			break;
		case BaseEnemy.ST_ALERT:
			this.setState( BaseEnemy.ST_DASH_IN, this.m_toLeft );
			break;
		case BaseEnemy.ST_DIE:
			this.m_isAwaitingDelete = true;
			break;
		case BaseEnemy.ST_HIT:
			this.m_isInvulnerable = false;
			this.gotoState( BaseEnemy.ST_STAND );
			break;
		case BaseEnemy.ST_DASH_IN:
			Application.instance.playSound( 'SND_ENEMY_DASH' );
			this.gotoState( BaseEnemy.ST_DASH );
			break;
	}
};

/**
 * @override
 * @param {number} damage
 * @param {SWorldActor=} source
 * @param {number=} px
 * @param {number=} py
 * @return {boolean}
 */
Ninja.prototype.onHit = function( damage, source, px, py ) {
	if ( !BaseEnemy.prototype.onHit.call( this, damage, source, px, py ) ) {
		return false;
	}
	this.setState( BaseEnemy.ST_DIE, this.m_toLeft );
	this.m_world.game().addScore( this.m_plusScore );
	this.destroyShadow();
	if ( DataManager.instance ) {
		DataManager.instance.checkAchievement( DataManager.REG_ACHIEVEMENT_1 );
		DataManager.instance.checkAchievement( DataManager.REG_ACHIEVEMENT_3 );
	}
	return true;
};

Ninja.prototype.onCheckCollisionPlayer = function() {
	if ( this.m_world.player().boundsAttack() !== null ) {
		if ( this.getBounds() !== null ) {
			if ( this.m_world.player().getBoundsAttack().intersectRect( this.getBounds() ) ) {
				this.onHit( 10, this.m_world.player(), 0, 0 );
				return;
			}
		}
	}

	if ( this.m_timeHit < 0 &&
		this.m_isCollisionEnabled && ( this.m_world.player().hitTest( this ) ) &&
		this.m_world.player().state() !== Player.ST_PLAYER_LOSE &&
		this.m_world.player().state() !== Player.ST_PLAYER_HIT ) {

		var impulseX = 0;
		var impulseY = 0;
		if ( this.m_world.player().getY() < ( this.m_y - 40 ) ) {
			this.onHit( 50, this.m_world.player(), 0, 0 );

			impulseX = -1 * this.m_impulsePlayerEnemyX;
			impulseY = -1 * this.m_impulsePlayerEnemyY;
			/** @type {PlayerPlatform} */ ( this.m_world.player() ).replaceJumpDown();
			this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x ) ? Math.abs( impulseX ):impulseX, impulseY );
		}
		else {
			this.m_world.player().onEnemyCollision( this, this.m_data['damage'] );
			this.setState( BaseEnemy.ST_DASH_OUT, this.m_toLeft );

			impulseX = -1 * this.m_impulseEnemyPlayerX;
			impulseY = -1 * this.m_impulseEnemyPlayerY;
			this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x ) ? Math.abs( impulseX ):impulseX, impulseY );
		}

		this.m_timer = this.m_data['timeRest'];
		this.m_speedEnemy = this.m_normalSpeed;
		this.m_activeDash = false;
		this.m_timeHit = this.m_data['hitTimer'];
	}
};

Ninja.prototype.updateStates = function( dt ) {
	var limitReached = false;
	this.m_timeHit -= dt;

	var limitX = 0;
	switch ( this.m_state ) {
		case BaseEnemy.ST_STAND:
			this.m_timer -= dt;
			if ( this.m_timer <= 0 ) {
				this.setState( BaseEnemy.ST_WALK, this.m_toLeft );
			}
			break;

		case BaseEnemy.ST_DASH:
			if ( this.m_toLeft ) {
				this.m_x -= this.m_speedEnemy * dt;
				limitX = ( this.m_limitAttack < this.m_limits.left() ) ? this.m_limits.left():this.m_limitAttack;
				if ( this.m_x <= limitX ) {
					this.setPosition( limitX, this.m_y );
					this.m_speedEnemy = this.m_normalSpeed;
					this.m_activeDash = false;
					this.m_timer = this.m_data['timeRest'];
					this.setState( BaseEnemy.ST_DASH_OUT, this.m_toLeft );
				}
			}
			else {
				this.m_x += this.m_speedEnemy * dt;
				limitX = ( this.m_limitAttack > this.m_limits.right() ) ? this.m_limits.right():this.m_limitAttack;
				if ( this.m_x >= limitX ) {
					this.setPosition( limitX, this.m_y );
					this.m_speedEnemy = this.m_normalSpeed;
					this.m_activeDash = false;
					this.m_timer = this.m_data['timeRest'];
					this.setState( BaseEnemy.ST_DASH_OUT, this.m_toLeft );
				}
			}
			break;

		case BaseEnemy.ST_WALK:
			if ( this.proximityActivation() ) {
				this.m_oldState = this.m_state;
				this.m_limitAttack = this.m_world.player().getX();
				this.m_speedEnemy = this.m_dashSpeed;

				Application.instance.playSound( 'SND_ENEMY_ALERT' );
				this.setState( BaseEnemy.ST_ALERT, this.m_x > this.m_world.player().getX() );
			}
			else {
				if ( this.m_toLeft ) {
					this.m_x -= this.m_speedEnemy * dt;
					limitX = this.m_limits.left();
					if ( this.m_x <= limitX ) {
						this.setPosition( limitX, this.m_y );
						limitReached = true;
					}
				}
				else {
					this.m_x += this.m_speedEnemy * dt;
					limitX = this.m_limits.right();
					if ( this.m_x >= limitX ) {
						this.setPosition( limitX, this.m_y );
						limitReached = true;
					}
				}

				if ( limitReached ) {
					this.m_timer = this.m_data['timeRest'];
					this.setState( BaseEnemy.ST_STAND, !this.m_toLeft );
				}
			}
			break;
	}
};

Ninja.prototype.proximityActivation = function() {
	if ( this.m_world.player().isDead() || this.m_activeDash ) {
		return false;
	}

	var px = this.m_world.player().getX();
	if ( px < this.m_limits.left() || px > this.m_limits.right() ) {
		return false;
	}
	var py = this.m_world.player().getY();
	var dx = Math.abs( px - this.m_x );
	var dy = Math.abs( py - this.m_y );

	if ( dy <= 10 && dx <= this.m_data['distanceAttack'] ) {
		this.m_activeDash = true;
		return true;
	}
	return false;
};

Ninja.prototype.update = function( dt ) {
	this.updateStates( dt );
	BaseEnemy.prototype.update.call( this, dt );
};

/**
 * @override
 */
Ninja.prototype.onSoundDefeat = function() {
	var idSound = Common.random( 1, 2 );
	Application.instance.playSound( 'SND_ENEMY_DEFEAT' );
	Application.instance.playSound( 'SND_ENEMY_NINJA_DEFEAT_' + idSound );
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} params
 * @param {Object} data
 * @param {number} type
 * @param {Object} rawData
 * @extends BaseEnemy
 */
function Athena ( canvas, world, x, y, params, data, type, rawData ) {
    y += 50;
    BaseEnemy.call( this, canvas, world, x, y, params, data, type );

    /** @type {boolean} */
    this.isDefeated = false;

    /** @type {boolean} */
	this.isFacingLeft = false;

    /** @type {BossAttack} */
    this.attack = null;

    /** @type {Object} */
    this.rawData = rawData;

    /** @type {number} */
    this.idleTime = rawData['idleTime'];

    /** @type {number} */
    this.rangeDetection = rawData['rangeDetection'];
    /** @type {boolean} */
    this.isActive = false;

    /** @type {SInterval} */
    this.restInterval = null;

    /** @type {boolean} */
    this.waitPreEvent = ( rawData['waitPreEvent'] === 1 );

    Athena.instance = this;

    /** @type {Array} */
    this.order = [];
    var orderParams = Common.getParams( rawData['order'] );
    for ( var p in orderParams ) {
        this.order.push( orderParams[p] );
    }
    /** @type {number} */
    this.orderIndex = -1;

    this.m_character = new Character( x, y, canvas );
    this.refreshCharStates();
    this.m_character.onEndAnimation( this, this.onEndAnimation );
    this.gotoState( BaseEnemy.ST_STAND );

    this.m_health = 150;

    this.setFlipX( true );

    this.m_isRangeControlled = false;


    /** @type {number} */
    this.delay = 0;
    /** @type {number} */
    this.wait = ( rawData['delay'] > 0 ? rawData['delay'] : 2000 );

    /** @type {boolean} */
    this.enableDlog = true;

    this.createShadow( 'mcShadow' );
}
Application.subclass( Athena, BaseEnemy );

/** @static {Athena} */ Athena.instance = null;

/** @const {string} */ Athena.ST_MOCK_STAFF = 'stMockStaff';
/** @const {string} */ Athena.ST_STAFF_IN = 'stStaffIn';
/** @const {string} */ Athena.ST_STAFF_LOOP = 'stStaffLoop';
/** @const {string} */ Athena.ST_STAFF_KICK = 'stStaffKick';
/** @const {string} */ Athena.ST_STAND_HAPPY = 'stStandHappy';
/** @const {string} */ Athena.ST_MOCK_SUMMON = 'stMockSummon';
/** @const {string} */ Athena.ST_SUMMON = 'stSummon';
/** @const {string} */ Athena.ST_MOCK_AIRKICK = 'stMockAirkick';
/** @const {string} */ Athena.ST_AIR_KICK = 'stAirKick';
/** @const {string} */ Athena.ST_AIR_JUMP = 'stAirJump';
/** @const {string} */ Athena.ST_AIR_STOMP = 'stAirStomp';
/** @const {string} */ Athena.ST_INIT_MOCK = 'stInitMock';
/** @const {string} */ Athena.ST_FINAL_HAPPY = 'stFinalHappy';
/** @const {string} */ Athena.ST_SCAPE = 'stScape';

/**
 * @override
 * @param {string} st
 */
Athena.prototype.gotoState = function ( st ) {
    BaseEnemy.prototype.gotoState.call( this, st );
};

Athena.prototype.doNext = function () {
    this.isActive = true;
    this.doNextAttack();
};

Athena.prototype.cheatDefeat = function () {
    this.onHit( this.m_health, this.m_world.player(), 0, 0 );
};

/**
 * @param {string} st
 */
Athena.prototype.onEndAnimation = function ( st ) {

    switch ( st ) {
        case Athena.ST_INIT_MOCK:

            if ( this.enableDlog ) {
                GuiGame.instance.addPopup( GuiPopupDialog, 'mcGuiHudDialog', 0, 0 );
                break;
            }

            PlatformGame.instance.world.player().resetControl();
            PlatformGame.instance.world.player().setDisablePlayer( false );
            this.doNext();

            break;
        case Athena.ST_MOCK_SUMMON:
            Application.instance.stopSound( 'SND_BOSS_SPIN' );
            this.gotoState( Athena.ST_SUMMON );
            break;
        case Athena.ST_SUMMON:
            this.gotoState( BaseEnemy.ST_STAND );
            this.doSummonHenchmen();
            break;
        case Athena.ST_MOCK_AIRKICK:
            Application.instance.stopSound( 'SND_BOSS_SPIN' );
            this.doAirKick();
            break;
        case Athena.ST_AIR_JUMP:
            this.gotoState( Athena.ST_AIR_STOMP );
            break;
        case BaseEnemy.ST_ALERT:
            this.doKickAttack();
            break;
        case Athena.ST_STAFF_IN:

            this.doStaffAttack();
            break;
        case BaseEnemy.ST_HIT:
            this.m_isInvulnerable = false;
            this.gotoState( BaseEnemy.ST_STAND );
            this.onEndRestInterval();
            break;
        case BaseEnemy.ST_DIE:
            if ( this.attack ) {
                this.attack.free();
                this.attack = null;
            }
            if ( this.restInterval ) {
                this.restInterval.free();
                this.restInterval = null;
            }

            if ( PlatformGame.instance.world.player().mode === PlayerPlatform.MODE_BOY ) {
                PlatformGame.instance.world.player().simulatePressChangeCharacter();
            }
                GuiPopupDialog.isAfter = true;
                GuiGame.instance.addPopup( GuiPopupDialog, 'mcGuiHudDialog', 0, 0 );

            if ( this.m_x >= this.m_world.player().getX() ) {
                this.setFlipX( true );
                this.m_world.player().setFlipX( false );
            }
            else {
                this.setFlipX( false );
                this.m_world.player().setFlipX( true );
            }

            this.gotoState( BaseEnemy.ST_STAND );
            break;
        case Athena.ST_SCAPE:
            PlatformGame.instance.world.player().isReadyToWinAnim = true;
            break;
    }
};

Athena.prototype.doScape = function () {
        if ( Global.level === 3 ) {
            this.gotoState( Athena.ST_SCAPE );
            this.m_clip.loop = false;
        }
};

Athena.prototype.doPreStaffAttack = function () {
    this.gotoState( Athena.ST_STAFF_IN );
    this.setFlipX( this.m_world.player().getX() < this.m_x );
};

Athena.prototype.doStaffAttack = function () {
    this.attack = new Staff( this.m_world, this.rawData, this );
};

Athena.prototype.doPreKickAttack = function () {
    this.gotoState( BaseEnemy.ST_ALERT );
};

Athena.prototype.doKickAttack = function () {
    this.attack = new WallKick( this.m_world, this.rawData, this );
};

Athena.prototype.doPreSummonHenchmen = function () {
    Application.instance.playSound( 'SND_BOSS_SPIN' );
    this.gotoState( Athena.ST_MOCK_SUMMON );
    this.setFlipX( this.m_world.player().getX() < this.m_x );
};

Athena.prototype.doSummonHenchmen = function () {
    this.attack = new Summon( this.m_world, this.rawData, this );
};

Athena.prototype.doPreAirKick = function () {
    Application.instance.playSound( 'SND_BOSS_SPIN' );
    this.gotoState( Athena.ST_MOCK_AIRKICK );
    this.setFlipX( this.m_world.player().getX() < this.m_x );
};

Athena.prototype.doAirKick = function () {
    this.attack = new AirKick( this.m_world, this.rawData, this );
};

Athena.prototype.cancelAttack = function () {
    if ( this.attack ) {
        this.attack.free();
        this.attack = null;
    }

    this.gotoState( BaseEnemy.ST_STAND );
    this.setPosition( this.initX, this.initY );
    this.setFlipX( this.m_world.player().getX() < this.m_x );
};

/**
 * @override
 * @param {number} damage
 * @param {SWorldActor=} source
 * @param {number=} px
 * @param {number=} py
 * @return {boolean}
 */
Athena.prototype.onHit = function( damage, source, px, py ) {
    var actors = this.m_world.actorManager().getActors();
    for ( var i = 0; i < actors.length; i++ ) {
        if ( actors[i] && !actors[i].isAwaitingDelete() && ( actors[i] instanceof Henchman || actors[i] instanceof Ninja ) ) {
            actors[i].gotoState( BaseEnemy.ST_DIE );
        }
    }

    if ( this.attack ) {
        this.attack.free();
        this.attack = null;
    }
    if ( this.restInterval ) {
        this.restInterval.free();
        this.restInterval = null;
    }

    if ( !BaseEnemy.prototype.onHit.call( this, damage, source, px, py ) ) {
        Application.instance.playSound( 'SND_BOSS_ATHENA_DAMAGE' );
        PlatformGame.instance.hud().barDamageBoss( 150, this.m_health );
        return false;
    }

    this.isDefeated = true;
    this.setState( BaseEnemy.ST_DIE, this.m_toLeft );
    Application.instance.playSound( 'SND_BOSS_ATHENA_DEFEAT' );
    PlatformGame.instance.hud().barDamageBoss( 150, this.m_health );
    HudPlatform.instance.onShowHud( false );

    var actor = this.m_world.player();
    actor.resetControl();
    actor.setDisablePlayer( true );

    return true;
};

Athena.prototype.onCheckCollisionPlayer = function() {
    var impulseX = 0;
    var impulseY = 0;

    if ( !this.isActive ) {
        return;
    }

    if ( this.attack || this.restInterval === null ) {
        if ( this.m_timeHit < 0 &&
             this.m_world.player().hitTest( this ) &&
             this.m_world.player().state() !== Player.ST_PLAYER_LOSE &&
             this.m_world.player().state() !== Player.ST_PLAYER_HIT ) {

            if ( this.attack && ( this.attack instanceof Summon || this.attack instanceof Staff ) && !this.isSpinLooping() ) {
                if ( this.m_world.player().getY() < ( this.m_y - 100 ) &&
                    ( Math.abs(  this.m_world.player().getX() - this.m_x ) <= 40  ) ) {
                    this.onHit( 50, this.m_world.player(), 0, 0 );

                    impulseX = -1 * this.m_impulsePlayerEnemyX;
                    impulseY = -1 * this.m_impulsePlayerEnemyY;
                    this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x )? Math.abs(impulseX):impulseX, impulseY );

                    this.m_timeHit = 1000;
                }
                else if ( this.attack instanceof Staff  ) {
                    this.m_world.player().onEnemyCollision( this, this.m_data['damage'] );

                    impulseX = -1 * this.m_impulseEnemyPlayerX;
                    impulseY = -1 * this.m_impulseEnemyPlayerY;
                    this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x )? Math.abs(impulseX):impulseX, impulseY );

                    this.m_timeHit = 1000;
                }
                return;
            }

            this.m_world.player().onEnemyCollision( this, this.m_data['damage'] );

            impulseX = -1 * this.m_impulseEnemyPlayerX;
            impulseY = -1 * this.m_impulseEnemyPlayerY;
            this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x )? Math.abs(impulseX):impulseX, impulseY );

            this.m_timeHit = 1000;
        }
        return;
    }

    if ( this.m_timeHit < 0 &&
        ( this.m_world.player().hitTest( this ) ) && //this.m_isCollisionEnabled &&
        this.m_world.player().state() !== Player.ST_PLAYER_LOSE &&
        this.m_world.player().state() !== Player.ST_PLAYER_HIT ) {

        if ( this.m_world.player().getY() < ( this.m_y - 100 ) &&
            ( Math.abs(  this.m_world.player().getX() - this.m_x ) <= 40  ) &&
            !this.isSpinLooping() ) {
            this.onHit( 50, this.m_world.player(), 0, 0 );

            impulseX = -1 * this.m_impulsePlayerEnemyX;
            impulseY = -1 * this.m_impulsePlayerEnemyY;
            this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x )? Math.abs(impulseX):impulseX, impulseY );
        }
        else {
            this.m_world.player().onEnemyCollision( this, this.m_data['damage'] );

            impulseX = -1 * this.m_impulseEnemyPlayerX;
            impulseY = -1 * this.m_impulseEnemyPlayerY;
            this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x )? Math.abs(impulseX):impulseX, impulseY );
        }

        this.m_timeHit = 1000; //this.m_data['hitTimer'];
    }
};

Athena.prototype.forceHappy = function () {
    this.gotoState( Athena.ST_FINAL_HAPPY );
    this.isActive = false;

    if ( this.attack ) {
        this.attack.free();
        this.attack = null;
    }
    if ( this.restInterval ) {
        this.restInterval.free();
        this.restInterval = null;
    }
};

Athena.prototype.forceActivation = function () {

    this.gotoState( Athena.ST_INIT_MOCK );
};

/**
 * @override
 * @param {number} dt
 */
Athena.prototype.update = function ( dt ) {
    BaseEnemy.prototype.update.call( this, dt );

    if ( this.isDefeated ) {
        return;
    }

    if ( !this.isActive ) {
        if ( !this.waitPreEvent ) {
            var player = this.m_world.player();
            var px = player.getX();
            var py = player.getY();
            var dx = this.m_x - px;
            var dy = this.m_y - py;
            var dx2 = dx * dx;
            var dy2 = dy * dy;
            var d2 = dx2 + dy2;
            var r2 = this.rangeDetection * this.rangeDetection;
            if ( d2 < r2 ) {
                this.isActive = true;
                this.doNextAttack();
            }
        }
        return;
    }

    if ( this.delay > 0 ) {
        this.delay -= dt;
        if ( this.delay <= 0 ) {
            this.delay = 0;

            Application.instance.stopSound( 'SND_BOSS_SPIN' );

            var name = this.order[this.orderIndex];

            switch ( name ) {
                case 'staff': this.doPreStaffAttack(); break;
                case 'airKick': this.doPreAirKick(); break;
                case 'summon': this.doPreSummonHenchmen(); break;
            }
        }
        return;
    }

    this.m_timeHit -= dt;

    if ( this.attack ) {
        this.attack.update( dt );
    }

    if ( this.restInterval ) {
        this.restInterval.update( dt );
    }

    if ( this.clipShadow ) {
        this.clipShadow.visible = ( this.m_state !== Athena.ST_AIR_JUMP && this.m_state !== Athena.ST_AIR_STOMP );
    }
};

/**
 * @override
 */
Athena.prototype.doNextAttack = function () {
    if ( this.attack ) {
        this.attack.free();
        this.attack = null;
    }

    if ( this.isDefeated ) {
        return;
    }

    this.orderIndex++;

    if ( this.orderIndex >= this.order.length ) {
        this.gotoState( BaseEnemy.ST_STAND );
        this.orderIndex = -1;
        if ( this.restInterval ) {
            this.restInterval.free();
            this.restInterval = null;
        }
        this.m_isInvulnerable = false;
        this.restInterval = new SInterval( this, 'onEndRestInterval', this.idleTime );
    }
    else {
        this.delay = this.wait;
        this.gotoState( Athena.ST_STAFF_LOOP );
        Application.instance.playSound( 'SND_BOSS_SPIN' );
        this.setFlipX( this.m_world.player().getX() < this.m_x );


    }
};

/**
 * @return {boolean}
 */
Athena.prototype.isSpinLooping = function () {
    switch ( this.m_state ) {
        case Athena.ST_MOCK_AIRKICK:
        case Athena.ST_STAND_HAPPY:
        case Athena.ST_MOCK_SUMMON:
        case Athena.ST_STAFF_LOOP:
            return true;
    }

    return false;
};

Athena.prototype.onEndRestInterval = function () {
    if ( this.restInterval ) {
        this.restInterval.free();
        this.restInterval = null;
    }

    if ( this.isDefeated ) {
        return;
    }

    this.doNextAttack();
};

/**
 * @override
 * @param {boolean} flip
 */
Athena.prototype.setFlipX = function ( flip ) {
	this.isFacingLeft = flip;
	var st = this.m_state;
	this.m_state = '-1';
	this.refreshCharStates();
	this.gotoState( st );
};

Athena.prototype.refreshCharStates = function () {
	var skin = 'athena';
	var side = ( this.isFacingLeft ? '_left' : '_right' );
	skin += side;

    this.m_character.addState( Athena.ST_INIT_MOCK, skin + '_mock' );
    this.m_character.addState( Athena.ST_FINAL_HAPPY, skin + '_standhappy' );
    this.m_character.addState( BaseEnemy.ST_STAND, skin + '_stand' );
    this.m_character.addState( Athena.ST_STAND_HAPPY, skin + '_spinloop' );
    this.m_character.addState( BaseEnemy.ST_ALERT, skin + '_mock' );
    this.m_character.addState( Athena.ST_MOCK_AIRKICK, skin + '_spinloop' );
    this.m_character.addState( Athena.ST_AIR_KICK, skin + '_kick', [{caller:this, callback:this.onSoundKick, frame:3}] );
    this.m_character.addState( Athena.ST_AIR_JUMP, skin + '_jumpspin' ); // '_jumpup' );
    this.m_character.addState( Athena.ST_AIR_STOMP, skin + '_jumpstomp' );
    this.m_character.addState( Athena.ST_MOCK_SUMMON, skin + '_spinloop' );
    this.m_character.addState( Athena.ST_SUMMON, skin + '_summon', [{caller:this, callback:this.onSoundSummon, frame:14}] );
    this.m_character.addState( Athena.ST_MOCK_STAFF, skin + '_mock' );
    this.m_character.addState( Athena.ST_STAFF_IN, skin + '_spinin' );
    this.m_character.addState( Athena.ST_STAFF_LOOP, skin + '_spinloop' );
    this.m_character.addState( Athena.ST_STAFF_KICK, skin + '_kick', [{caller:this, callback:this.onSoundKick, frame:3}] );
    this.m_character.addState( BaseEnemy.ST_DASH_IN, skin + '_mock' );
    this.m_character.addState( BaseEnemy.ST_DASH_OUT, skin + '_mock' );
    this.m_character.addState( BaseEnemy.ST_ATTACK, skin + '_stand' );
    this.m_character.addState( BaseEnemy.ST_WALK, skin + '_kick', [{caller:this, callback:this.onSoundKick, frame:3}] );
    this.m_character.addState( BaseEnemy.ST_HIT, skin + '_hit' );
    this.m_character.addState( BaseEnemy.ST_DIE, skin + '_defeat' );
    this.m_character.addState( Athena.ST_SCAPE, skin + '_outro', [{caller:this, callback:this.onSoundAbducted, frame:4}] );
};

Athena.prototype.onSoundSummon = function () {
    Application.instance.playSound( 'SND_BOSS_ATHENA_SUMMONING' );
};

Athena.prototype.onSoundAbducted = function () {
    Application.instance.playSound( 'SND_BOSS_ATHENA_ABDUCTED' );
};

Athena.prototype.onSoundKick = function () {
    Application.instance.playSound( 'SND_ENEMY_DASH' );
};

/**
 * @override
 */
Athena.prototype.free = function () {
    BaseEnemy.prototype.free.call( this );

    Athena.instance = null;

    this.rawData = null;
    this.order = null;

    if ( this.attack ) {
        this.attack.free();
        this.attack = null;
    }

    if ( this.restInterval ) {
        this.restInterval.free();
        this.restInterval = null;
    }
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} params
 * @param {Object} data
 * @param {number} type
 * @param {Object} rawData
 * @extends BaseEnemy
 */
function Shego ( canvas, world, x, y, params, data, type, rawData ) {
    y += 50;
    BaseEnemy.call( this, canvas, world, x, y, params, data, type );

    Shego.instance = this;

    /** @type {LinearMovement} */
    this.introMove = null;

    /** @type {boolean} */
    this.isDefeated = false;

    /** @type {boolean} */
	this.isFacingLeft = false;

    /** @type {BossAttack} */
    this.attack = null;

    /** @type {Object} */
    this.rawData = rawData;

    /** @type {number} */
    this.idleTime = rawData['idleTime'];

    /** @type {boolean} */
    this.isActive = false;

    /** @type {SInterval} */
    this.restInterval = null;

    /** @type {Array} */
    this.order = [];
    var orderParams = Common.getParams( rawData['order'] );
    for ( var p in orderParams ) {
        this.order.push( orderParams[p] );
    }
    /** @type {number} */
    this.orderIndex = -1;

    this.m_character = new Character( x, y, canvas );
    this.refreshCharStates();
    this.m_character.onEndAnimation( this, this.onEndAnimation );
    this.gotoState( BaseEnemy.ST_STAND );

    this.m_health = 250;
    this.m_isRangeControlled = false;

    /** @type {number} */
    this.delay = 0;
    /** @type {number} */
    this.wait = ( rawData['delay'] > 0 ? rawData['delay'] : 2000 );


    this.m_clip.visible = false;

    /** @type {number} */
    this.timerToWin = 0;

    /** @type {boolean} */
    this.enableDlog = true;

    this.shieldFx = this.m_world.createEffect( 'shego_shield', this.m_x, this.m_y, 0, GuiGame.instance.canvasEffects );
    this.shieldFx.clip.visible = false;
}
Application.subclass( Shego, BaseEnemy );

/** @type {Shego} */ Shego.instance = null;

/** @const {string} */ Shego.ST_INIT_MOCK = 'stInitMock';
/** @const {string} */ Shego.ST_MOCK_LOOP = 'stMockLoop';
/** @const {string} */ Shego.ST_PRE_SHOOT = 'stPreShoot';
/** @const {string} */ Shego.ST_SHOOT = 'stShoot';
/** @const {string} */ Shego.ST_PRE_WALLJUMP = 'stPreWalljump';
/** @const {string} */ Shego.ST_FLOAT = 'stFloat';
/** @const {string} */ Shego.ST_WALL_STAND = 'stWallStand';
/** @const {string} */ Shego.ST_WALL_IMPULSE = 'stWallImpulse';
/** @const {string} */ Shego.ST_PRE_SUMMON = 'stPreSummon';
/** @const {string} */ Shego.ST_SUMMON = 'stSummon';
/** @const {string} */ Shego.ST_KICK = 'stKick';
/** @const {string} */ Shego.ST_PRE_SUMMON_ORBS = 'stPreSummonOrbs';
/** @const {string} */ Shego.ST_SUMMON_ORBS = 'stSummonOrbs';
/** @const {string} */ Shego.ST_CHARGE = 'stCharge';
/** @const {string} */ Shego.ST_CHARGE_AGAIN = 'stChargeAgain';

Shego.prototype.charge = function () {
    this.gotoState( Shego.ST_CHARGE );
};

Shego.prototype.doNext = function () {
    PlatformGame.instance.world.player().resetControl();
    PlatformGame.instance.world.player().setDisablePlayer( false );
    this.isActive = true;
    this.doNextAttack();
};

/**
 * @param {string} st
 */
Shego.prototype.onEndAnimation = function ( st ) {
    switch ( st ) {
        case Shego.ST_CHARGE_AGAIN:
            this.doNextAttack();
            break;
        case Shego.ST_CHARGE:
            this.doNext();
            this.shieldFx.clip.visible = true;
            break;
        case Shego.ST_FLOAT:
        case Shego.ST_INIT_MOCK:

            this.createShadow( 'mcShadow' );
            if ( this.enableDlog ) {
                GuiGame.instance.addPopup( GuiPopupDialog, 'mcGuiHudDialog', 0, 0 );
                break;
            }

            PlatformGame.instance.world.player().resetControl();
            PlatformGame.instance.world.player().setDisablePlayer( false );
            this.doNext();
            break;
        case Shego.ST_PRE_SHOOT:
            this.doShootAttack();
            break;
        case Shego.ST_PRE_WALLJUMP:
            this.doWalljumpAttack();
            break;
        case Shego.ST_SHOOT:
            if ( this.attack && ( this.attack instanceof Shoot ) ) {
                /** @type {Shoot} */ ( this.attack ).doWait();
            }
            break;
        case Shego.ST_WALL_IMPULSE:
            if ( this.attack && ( this.attack instanceof WallKick ) ) {
                /** @type {WallKick} */ ( this.attack ).start();
                Application.instance.playSound( 'SND_BOSS_SHEGO_WALL_JUMP' );
            }
            break;
        case Shego.ST_PRE_SUMMON:
            this.gotoState( Shego.ST_SUMMON );
            break;
        case Shego.ST_SUMMON:
            this.gotoState( BaseEnemy.ST_STAND );
            this.doSummonNinja();
            break;
        case Shego.ST_PRE_SUMMON_ORBS:
            this.gotoState( Shego.ST_SUMMON_ORBS );
            break;
        case Shego.ST_SUMMON_ORBS:
            var skin = 'shego';
            var side = ( this.isFacingLeft ? '_left' : '_right' );
            skin += side;
            this.m_character.addState( Shego.ST_MOCK_LOOP, skin + '_mock' );
            this.gotoState( Shego.ST_MOCK_LOOP ); //  BaseEnemy.ST_STAND );
            this.doSummonOrbs();
            break;

        case Shego.ST_MOCK_LOOP:
            this.gotoState( BaseEnemy.ST_STAND );
            break;

        case BaseEnemy.ST_HIT:
            this.m_isInvulnerable = false;
            this.gotoState( BaseEnemy.ST_STAND );
            this.onEndRestInterval();
            break;
        case BaseEnemy.ST_DIE:
            if ( this.attack ) {
                this.attack.free();
                this.attack = null;
            }
            if ( this.restInterval ) {
                this.restInterval.free();
                this.restInterval = null;
            }

            PlatformGame.instance.world.player().isReadyToWinAnim = true;

            if ( DataManager.instance ) {
			 	DataManager.instance.checkAchievement( DataManager.REG_ACHIEVEMENT_5 );
			}
            break;
    }
};

Shego.prototype.forceActivation = function () {
    this.gotoState( Shego.ST_FLOAT );
    this.m_clip.alpha = 1;


    this.setFlipX( false );
};

Shego.prototype.onEndIntroMove = function () {
    this.m_y = this.initY;

    this.introMove.free();
    this.introMove = null;

    this.gotoState( Shego.ST_INIT_MOCK );
};

Shego.prototype.doNextAttack = function () {
    if ( this.attack ) {
        this.attack.free();
        this.attack = null;
    }

    if ( this.isDefeated ) {
        return;
    }

    this.orderIndex++;

    if ( this.orderIndex >= this.order.length ) {
        this.gotoState( BaseEnemy.ST_STAND );
        this.orderIndex = -1;
        if ( this.restInterval ) {
            this.restInterval.free();
            this.restInterval = null;
        }
        this.m_isInvulnerable = false;
        this.restInterval = new SInterval( this, 'onEndRestInterval', this.idleTime );

        this.shieldFx.clip.visible = false;
    }
    else {
        var skin = 'shego';
        var side = ( this.isFacingLeft ? '_left' : '_right' );
        skin += side;
        var name = this.order[this.orderIndex];
        switch ( name ) {
            case 'walljump':
            case 'orbs':
                this.m_character.addState( Shego.ST_MOCK_LOOP, skin + '_stand' );
                break;
            case 'shooting':
                this.m_character.addState( Shego.ST_MOCK_LOOP, skin + '_mock' );
                break;
        }

        this.delay = this.wait;
        this.gotoState( Shego.ST_MOCK_LOOP );

        this.shieldFx.clip.visible = true;
    }
};

Shego.prototype.onEndRestInterval = function () {
    if ( this.restInterval ) {
        this.restInterval.free();
        this.restInterval = null;
    }

    if ( this.isDefeated ) {
        return;
    }

    this.gotoState( Shego.ST_CHARGE_AGAIN );
};

/**
 * @override
 * @param {boolean} flip
 */
Shego.prototype.setFlipX = function ( flip ) {
	this.isFacingLeft = flip;
	var st = this.m_state;
	this.m_state = '-1';
	this.refreshCharStates();
	this.gotoState( st );
};

Shego.prototype.refreshCharStates = function () {
	var skin = 'shego';
	var side = ( this.isFacingLeft ? '_left' : '_right' );
	skin += side;

    this.m_character.addState( BaseEnemy.ST_STAND, skin + '_stand' );
    this.m_character.addState( Shego.ST_INIT_MOCK, skin + '_mock' );
    this.m_character.addState( Shego.ST_MOCK_LOOP, skin + '_stand' );
    this.m_character.addState( Shego.ST_PRE_SHOOT, skin + '_stand_2' );
    this.m_character.addState( Shego.ST_SHOOT, skin + '_shootfront', [{caller:this, callback:this.createBulletA, frame:6}] );
    this.m_character.addState( Shego.ST_PRE_WALLJUMP, skin + '_stand_2' );
    this.m_character.addState( Shego.ST_FLOAT, skin + '_intro' );
    this.m_character.addState( Shego.ST_WALL_STAND, skin + '_wallstand' );
    this.m_character.addState( Shego.ST_WALL_IMPULSE, skin + '_walljump' );
    this.m_character.addState( Shego.ST_PRE_SUMMON, skin + '_stand_2' );
    this.m_character.addState( Shego.ST_SUMMON, skin + '_summon', [{caller:this, callback:this.onSoundSummon, frame:9}] );
    this.m_character.addState( Shego.ST_KICK, skin + '_kick' );
    this.m_character.addState( BaseEnemy.ST_HIT, skin + '_hit' );
    this.m_character.addState( BaseEnemy.ST_DIE, skin + '_defeat' );
    this.m_character.addState( Shego.ST_PRE_SUMMON_ORBS, skin + '_stand_2' );
    this.m_character.addState( Shego.ST_SUMMON_ORBS, skin + '_summon', [{caller:this, callback:this.onSoundSummon, frame:9}] );
    this.m_character.addState( Shego.ST_CHARGE, skin + '_charge', [{caller:this, callback:this.onSoundCharge, frame:10}] );
    this.m_character.addState( Shego.ST_CHARGE_AGAIN, skin + '_charge', [{caller:this, callback:this.onSoundCharge, frame:10}] );
};

Shego.prototype.onSoundCharge = function () {
    Application.instance.playSound( 'SND_BOSS_SHEGO_RECOVER' );
};

Shego.prototype.onSoundSummon = function () {
    Application.instance.playSound( 'SND_BOSS_SHEGO_SNAP' );
};

/**
 * @override
 * @param {string} st
 */
Shego.prototype.gotoState = function( st ) {
	BaseEnemy.prototype.gotoState.call( this, st );

	if ( this.m_state === Shego.ST_WALL_IMPULSE ) {
        var idSound = Common.random( 1, 2 );
        Application.instance.playSound( 'SND_BOSS_SHEGO_WALL_JUMP_' + idSound );
	}
};

Shego.prototype.gotoShootState = function () {
    var skin = 'shego';
	var side = ( this.isFacingLeft ? '_left' : '_right' );
	skin += side;

    var r = Common.random( 0, 1 );
    var shootAnim = ( r === 0 ? '_shootfront' : '_shootup' );

    this.m_character.addState( Shego.ST_SHOOT, skin + shootAnim,
        [{caller:this,
            callback: ( r === 0 ? this.createBulletA : this.createBulletB ),
            frame:6}] );
    this.gotoState( Shego.ST_SHOOT );

};

Shego.prototype.createBulletA = function () {
	var offSetX = 55;
	var offSetY = 90;
	var posX = ( this.m_x + ( this.isFacingLeft ? -1 : 1 ) * offSetX );
	var posY = ( this.m_y - offSetY )
	var angleBullet = ( this.isFacingLeft ? Math.PI : 0 );

    var params = Common.getParams( this.rawData['shooting'] );
    var bSpeed = parseFloat( params['bulletSpeed'] );

    var bullet = new EnemyBullet( 'shego_bullet', this.m_world, posX, posY );
    bullet.motionSettings( bSpeed,       //SPEED
                           1000,                        //DISTANCE
                           1,      //DAMAGE
                           angleBullet,              //ANGLE
                           0,     //GRAVITY
                           3 ); //TIME A LIVE

	Application.instance.playSound( 'SND_ENEMY_SHOOT' );
};

Shego.prototype.createBulletB = function () {
    var offSetX = 55;
	var offSetY = 90;
	var posX = ( this.m_x + ( this.isFacingLeft ? -1 : 1 ) * offSetX );
	var posY = ( this.m_y - offSetY )
	var angleBullet = ( this.isFacingLeft ? 1.25 * Math.PI : 1.75 * Math.PI );

    var params = Common.getParams( this.rawData['shooting'] );
    var bSpeed = parseFloat( params['bulletSpeed'] );
    var bGravity = parseFloat( params['bulletGravity'] );

    var bullet = new EnemyBullet( 'shego_bullet2', this.m_world, posX, posY );
    bullet.motionSettings( bSpeed,       //SPEED
                           0,                        //DISTANCE
                           1,      //DAMAGE
                           angleBullet,              //ANGLE
                           bGravity,     //GRAVITY
                           3 ); //TIME A LIVE

    Application.instance.playSound( 'SND_ENEMY_SHOOT' );
};

/**
 * @override
 * @param {number} damage
 * @param {SWorldActor=} source
 * @param {number=} px
 * @param {number=} py
 * @return {boolean}
 */
Shego.prototype.onHit = function( damage, source, px, py ) {
    var actors = this.m_world.actorManager().getActors();
    for ( var i = 0; i < actors.length; i++ ) {
        if ( actors[i] && !actors[i].isAwaitingDelete() && ( actors[i] instanceof Henchman || actors[i] instanceof Ninja ) ) {
            actors[i].gotoState( BaseEnemy.ST_DIE );
        }
    }

    Application.instance.playSound( 'SND_PLAYER_DAMAGE' );

    if ( !BaseEnemy.prototype.onHit.call( this, damage, source, px, py ) ) {
        this.setFlipX( false );
        Application.instance.playSound( 'SND_BOSS_SHEGO_DAMAGE' );
        PlatformGame.instance.hud().barDamageBoss( 250, this.m_health );
        return false;
    }
    if ( this.attack ) {
        this.attack.free();
        this.attack = null;
    }
    if ( this.restInterval ) {
        this.restInterval.free();
        this.restInterval = null;
    }
    this.isDefeated = true;
    this.setState( BaseEnemy.ST_DIE, this.m_toLeft );
    this.setFlipX( false );
    Application.instance.playSound( 'SND_BOSS_SHEGO_DEFEAT' );
    PlatformGame.instance.hud().barDamageBoss( 250, this.m_health );
    HudPlatform.instance.onShowHud( false );

    if ( this.shieldFx ) {
        this.shieldFx.isAwaitingDelete = true;
    }
    this.shieldFx = null;

    var actor = this.m_world.player();
    actor.resetControl();
    actor.setDisablePlayer( true );

    return true;
};

Shego.prototype.cheatDefeat = function () {
    this.onHit( this.m_health, this.m_world.player(), 0, 0 );
};

Shego.prototype.onHitByHook = function () {
    if ( this.attack || this.restInterval === null ) {
        return;
    }
    if ( this.m_timeHit < 0 ) {
        this.onHit( 50, this.m_world.player(), 0, 0 );
    }
};

Shego.prototype.onCheckCollisionPlayer = function() {
    if ( !this.isActive ) {
        return;
    }

    if ( this.attack || this.restInterval === null ) {
        if ( this.m_timeHit < 0 &&
             this.m_world.player().hitTest( this ) &&
             this.m_world.player().state() !== Player.ST_PLAYER_LOSE &&
             this.m_world.player().state() !== Player.ST_PLAYER_HIT ) {

            this.m_world.player().onEnemyCollision( this, this.m_data['damage'] );

            impulseX = -1 * this.m_impulseEnemyPlayerX;
            impulseY = -1 * this.m_impulseEnemyPlayerY;
            this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x )? Math.abs(impulseX):impulseX, impulseY );

            this.m_timeHit = 1000;
        }
        return;
    }

    if ( this.m_timeHit < 0 &&
        ( this.m_world.player().hitTest( this ) ) && //this.m_isCollisionEnabled &&
        this.m_world.player().state() !== Player.ST_PLAYER_LOSE &&
        this.m_world.player().state() !== Player.ST_PLAYER_HIT ) {

        var impulseX = 0;
        var impulseY = 0;

        if ( this.m_world.player().getY() < ( this.m_y - 40 ) ) {
            this.onHit( 50, this.m_world.player(), 0, 0 );

            impulseX = -1 * this.m_impulsePlayerEnemyX;
            impulseY = -1 * this.m_impulsePlayerEnemyY;
            this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x )? Math.abs(impulseX):impulseX, impulseY );
        }
        else {
            this.m_world.player().onEnemyCollision( this, this.m_data['damage'] );

            impulseX = -1 * this.m_impulseEnemyPlayerX;
            impulseY = -1 * this.m_impulseEnemyPlayerY;
            this.m_world.player().applyImpulse( ( this.m_world.player().getX() > this.m_x )? Math.abs(impulseX):impulseX, impulseY );
        }

        this.m_timeHit = 1000; //this.m_data['hitTimer'];
    }
};

/**
 * @override
 * @param {number} dt
 */
Shego.prototype.update = function ( dt ) {
    BaseEnemy.prototype.update.call( this, dt );

    if ( this.introMove ) {
        this.m_y = this.introMove.getY();
        this.introMove.update( dt );
        return;
    }

    if ( this.isDefeated ) {
        return;
    }

    if ( !this.isActive ) {
        return;
    }

    if ( this.delay > 0 ) {
        this.delay -= dt;
        if ( this.delay <= 0 ) {
            this.delay = 0;


            var name = this.order[this.orderIndex];

            switch ( name ) {
                case 'shooting': this.doPreShooting(); break;
                case 'walljump': this.doPreWalljump(); break;
                case 'summon': this.doPreSummonNinja(); break;
                case 'orbs': this.doPreSummonOrbs(); break;
            }
        }
        return;
    }

    this.m_timeHit -= dt;

    if ( this.attack ) {
        this.attack.update( dt );
    }

    if ( this.restInterval ) {
        this.restInterval.update( dt );
    }

    if ( this.clipShadow ) {
        this.clipShadow.visible = ( this.m_state !== Shego.ST_KICK &&
            this.m_state !== Shego.ST_WALL_IMPULSE &&
            this.m_state !== Shego.ST_WALL_STAND );
    }
};

Shego.prototype.doPreShooting = function () {
    this.gotoState( Shego.ST_PRE_SHOOT );
    this.setFlipX( false ); // this.m_world.player().getX() < this.m_x );
};

Shego.prototype.doPreWalljump = function () {
    this.gotoState( Shego.ST_PRE_WALLJUMP );
    this.setFlipX( false ); // this.m_world.player().getX() < this.m_x );
};

Shego.prototype.doShootAttack = function () {
    this.attack = new Shoot( this.m_world, this.rawData, this );
};

Shego.prototype.doWalljumpAttack = function () {
    this.attack = new WallKick( this.m_world, this.rawData, this );
    this.shieldFx.clip.visible = false;
};

Shego.prototype.doPreSummonNinja = function () {
    this.gotoState( Shego.ST_PRE_SUMMON );
    this.setFlipX( false ); // this.m_world.player().getX() < this.m_x );
};

Shego.prototype.doSummonNinja = function () {
    this.attack = new Summon( this.m_world, this.rawData, this );
};

Shego.prototype.doPreSummonOrbs = function () {
    this.gotoState( Shego.ST_PRE_SUMMON_ORBS );
    this.setFlipX( false ); // this.m_world.player().getX() < this.m_x );
};

Shego.prototype.doSummonOrbs = function () {
    this.attack = new SummonOrbs( this.m_world, this.rawData, this );
};

/**
 * @override
 */
Shego.prototype.free = function () {
    SWorldActor.prototype.free.call( this );

    if ( this.shieldFx ) {
        this.shieldFx.isAwaitingDelete = true;
    }
    this.shieldFx = null;

    Shego.instance = null;
};

/**
 * @constructor
 * @param {PlatformGame} game
 */
function GameIntro( game ) {
	/** @type {PlatformGame} */
	this.game = game;
	/** @type {number} */
	this.state = GameIntro.ST_NONE;
}

/** @const {number} */
GameIntro.ST_NONE = 0;
GameIntro.ST_INIT = 1;

/**
 * @public
 */
GameIntro.prototype.init = function() {
	this.state = GameIntro.ST_INIT;
	this.createMessage();
};

GameIntro.prototype.createMessage = function() {
	Application.instance.playSound( 'SND_UI_MISSION' );
	var message = Application.instance.effectManager.createEffectGui( 'mcGuiMessageMissionName', 0, 0, this.game.hud().canvas );
	message.getControl( 'mcGuiText' ).setTextReplace( 'STR_REP_MESSAGE_MISSION', ['#'], [ Global.level ] );
	message.getControl( 'mcGuiText_s1' ).setTextReplace( 'STR_REP_MESSAGE_MISSION', ['#'], [ Global.level ] );
	message.onComplete( this, this.onFinishMissionMessage );
};

GameIntro.prototype.onFinishMissionMessage = function() {
	Application.instance.playSound( 'SND_UI_START' );
	var message = Application.instance.effectManager.createEffectGui( 'mcGuiMessageGame', 0, 0, this.game.hud().canvas );
	message.onComplete( this, this.onFinishMessage );
};

GameIntro.prototype.onFinishMessage = function() {
	this.state = GameIntro.ST_NONE;
	this.game.hud().pauseTime( false );
	this.game.world.player().setDisablePlayer( false );

	HudPlatform.instance.onShowHud( true );
};

/**
 * @public
 */
GameIntro.prototype.free = function() {

};

/**
 * @public
 * @param {number} dt
 */
GameIntro.prototype.update = function( dt ) {

};


/**
 * @constructor
 * @param {PlatformGame} game
 */
function GameOutro( game ) {
	/** @type {PlatformGame} */
	this.game = game;
	/** @type {number} */
	this.state = GameOutro.ST_NONE;
}

/** @const {number} */ GameOutro.ST_NONE = 0;
/** @const {number} */ GameOutro.ST_INIT = 1;

/**
 * @public
 */
GameOutro.prototype.free = function() {
	this.game = null;
};

/**
 * @public
 */
GameOutro.prototype.init = function() {
	this.state = GameOutro.ST_INIT;
	this.createMessage();
};

/**
 * @public
 */
GameOutro.prototype.endTime = function() {
	this.state = GameOutro.ST_INIT;
	this.game.world.player().setDisablePlayer( true );
	this.createMessageEndTime();
};

GameOutro.prototype.createMessageEndTime = function() {
	var message = Application.instance.effectManager.createEffectGui( 'mcGuiMessageTimeup', 0, 0, this.game.hud().canvas );
	message.onComplete( this, this.onFinishTime );
	Application.instance.playSound( 'SND_UI_TIME_RED' );
};

GameOutro.prototype.createMessage = function() {
	Application.instance.playSound( 'SND_UI_LEVEL_COMPLETE' );
	var message = Application.instance.effectManager.createEffectGui( 'mcGuiMessageMissionComplete', 0, 0, this.game.hud().canvas );
	message.onComplete( this, this.onFinishMessage );
};

GameOutro.prototype.onFinishTime = function() {
	this.state = GameIntro.ST_NONE;
	this.game.onGameEnd( false );
};

GameOutro.prototype.onFinishMessage = function() {
	this.state = GameIntro.ST_NONE;
	this.game.onGameEnd( true );
};

/**
 * @public
 */
GameOutro.prototype.onEndWinPlayerAnimation = function() {
	this.game.onGameEnd( true );
};

/**
 * @public
 * @param {number} dt
 */
GameOutro.prototype.update = function( dt ) {

};
/**
 * @constructor
 */
function XYMovement() {
	/** @type {number} */
	this.x = 0;
	/** @type {number} */
	this.y = 0;
	/** @type {number} */
	this.ox = 0;
	/** @type {number} */
	this.oy = 0;
	/** @type {number} */
	this.vx = 0;
	/** @type {number} */
	this.vy = 0;
	/** @type {number} */
	this.ax = 0;
	/** @type {number} */
	this.ay = 0;
	/** @type {number} */
	this.time = 0;
	/** @type {number} */
	this.timeAlive = 0;
	/** @type {number} */
	this.distanceAlive = 0;
	/** @type {number} */
	this.timeFactor = 1;
}

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {number} speed
 * @param {number} angle in radians
 * @param {number=} ax
 * @param {number=} ay
 */
XYMovement.prototype.set = function( x, y, speed, angle, ax, ay ) {
	this.x = x;
	this.y = y;
	this.ox = this.x;
	this.oy = this.y;
	this.ax = ax || 0;
	this.ay = ay || 0;
	this.vx = speed * Math.cos( angle );
	this.vy = speed * Math.sin( angle );
	this.time = 0;
	this.distanceAlive = 0;
	this.timeAlive = 0;
	this.timeFactor = 1;
};

/**
 * @public
 * @param {number} dt
 */
XYMovement.prototype.update = function( dt ) {
	this.x = this.ox + ( this.vx * this.time ) + ( 0.5 * 0.001 * this.ax * this.time * this.time );
	this.y = this.oy + ( this.vy * this.time ) + ( 0.5 * 0.001 * this.ay * this.time * this.time );

	if ( this.distanceAlive !== 0 ) {
		var dx = this.x - this.ox;
		var dy = this.y - this.oy;
		if ( Math.sqrt( dx * dx + dy * dy ) > this.distanceAlive ) {
			this.isAwaitingDelete = true;
		}
	}

	if ( this.timeAlive !== 0 && this.time > this.timeAlive ) {
		this.isAwaitingDelete = true;
	}

	this.time += dt * this.timeFactor;
};

/**
 * @public
 */
XYMovement.prototype.free = function() {
};

/**
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @extends SScreen
 */
function HudPlatform( clipName, x, y ) {
	/** @type {SEffectNano} */
	this.tutoVfx = null;

	/** @type {number} */
	this.m_timer = 0;
	/** @type {number} */
	this.m_totalTime = 0;
	/** @type {boolean} */
	this.m_pauseTime = false;
	/** @type {GuiControl} */
	this.m_timeBar = null;
	/** @type {GuiControl} */
	this.m_timeBarRed = null;
	/** @type {Array.<HudCharacter>} */
	this.m_character = [null, null];
	/** @type {boolean} */
	this.onReadyChange = true;
	/** @type {number} */
	this.idPlayerSelected = -1;
	/** @type {number} */
	this.m_currentToken = 0;
	/** @type {boolean} */
	this.m_activeShake = false;
	/** @type {number} */
	this.m_timeShake = 0;
	/** @type {number} */
	this.m_countShake = 0;
    /** @type {Array.<number>} */
    this.m_leftInitX = [];
    /** @type {Array.<number>} */
	this.m_rightInitX = [];
	/** @type {boolean} */
	this.m_show = false;

	SScreen.call( this, clipName, x, y );

	HudPlatform.instance = this;
	this.canvas.hitArea = null;

	this.m_timeBar = this.getControl( 'mcGuiTimerBar' );
	this.m_timeBarRed = this.getControl( 'mcGuiTimerBar02' );
	this.m_timeBarRed.setVisible( false );
	this.m_leftInitX = [
							this.getControl('mcGuiBtnPause').canvas.position.x,
							this.getControl('mcGuiRedBgLeft').canvas.position.x
					   ];

	this.m_rightInitX = [
							this.getControl('mcGuiRedBgRight').canvas.position.x,
							this.getControl('mcGuiButtonAttackRon').canvas.position.x,
							this.getControl('mcGuiButtonAttackKim').canvas.position.x
						];

	this.createCharacter();
	this.setAbilityButton( Global.level % 2 !== 0 ? PlayerPlatform.MODE_GIRL : PlayerPlatform.MODE_BOY );

	this.pauseTime( true );
	this.showWarningShine( false );

	this.onShowPanelBoss( false, 1 );

	this.onShowHud( false );
}
Application.subclass( HudPlatform, SScreen );

HudPlatform.TIME_SHAKE = 1800;

HudPlatform.prototype.onShowHud = function( value ) {

	for ( var k in this.controls ) {
		if ( k === 'mcGuiBgShadow' ) {
			continue;
		}
		var control = this.controls[k];
		control.canvas.alpha = ( value ? 1 : 0 );
	}

	if ( PlatformGame.instance && PlatformGame.instance.virtualStickMove ) {
		PlatformGame.instance.virtualStickMove.setVisible( value );
	}
};

HudPlatform.prototype.loadDataGame = function( data ) {
	this.m_timer = ( data['initTime'] * 1000 );
	this.m_totalTime = ( data['maxTime'] * 1000 );

	this.getTime( this.m_timer );
};

HudPlatform.prototype.showWarningShine = function( value ) {
	this.getControl('mcGuiRedBgLeft').setVisible( value );
	this.getControl('mcGuiRedBgRight').setVisible( value );
	this.getControl('mcGuiRedBgUpDown').setVisible( value );
};

/**
 * @param {number} time
 */
HudPlatform.prototype.getTime = function( time ) {
	var scBarTime = time / this.m_totalTime;

	scBarTime = ( ( scBarTime > 1 ) ? 1: scBarTime );

	this.m_timeBar.clip.scale.x = scBarTime;
	this.m_timeBarRed.clip.scale.x = scBarTime;

	var valueTime = ( scBarTime <= 0.25 );
	var valueShine = ( scBarTime <= 0.15 );

	this.m_timeBar.setVisible( !valueTime );
	this.m_timeBarRed.setVisible( valueTime );

	var clock = Common.makeClockTime( time );
	var minutes = Common.getDigitsByValue( clock['minutes'], 2).join( '' );
	var seconds = Common.getDigitsByValue( clock['seconds'], 2).join( '' );
	var totalTime = String( minutes + ':' + seconds );

	this.getControl('mcGuiTxtTimer').setText(totalTime);
	this.getControl('mcGuiTxtTimer').setVisible( !valueTime );
	this.getControl('mcGuiTxtTimerCritical').setText(totalTime);
	this.getControl('mcGuiTxtTimerCritical').setVisible( valueTime );

	this.m_activeShake = valueTime;
	this.showWarningShine( valueShine );
};

/**
 * @public
 */
HudPlatform.prototype.fixGameScale = function() {
	var left = [];
	var right = [];
	for ( var lf = 0; lf < this.m_leftInitX.length; lf++ ) {
		var xLeft = this.m_leftInitX[lf];
		if ( Application.WIDE_SCREEN ) {
			xLeft -= Layout.left / Layout.scale;
		}
		left.push( xLeft );
	}

	for ( var rg = 0; rg < this.m_rightInitX.length; rg++ ) {
		var xRight = this.m_rightInitX[rg];
		if ( Application.WIDE_SCREEN ) {
			xRight += Layout.left / Layout.scale;
		}
		right.push( xRight );
	}

    this.getControl('mcGuiBtnPause').canvas.position.x = left[0];
	this.getControl('mcGuiRedBgLeft').canvas.position.x = left[0] - 50;

    this.getControl('mcGuiRedBgRight').canvas.position.x = right[1] + 50;
    this.getControl('mcGuiButtonAttackRon').canvas.position.x = right[1];
    this.getControl('mcGuiButtonAttackKim').canvas.position.x = right[2];
};

/**
 * @param {boolean} value
 * @param {number} id
 */
HudPlatform.prototype.onShowPanelBoss = function( value, id ) {
	this.getControl( 'mcGuiEnemyMask' ).setVisible( value );
	this.getControl( 'mcGuiEnemyBar' ).setVisible( value );
	this.getControl( 'mcGuiEnemyBase' ).setVisible( value );
	this.getControl( 'mcGuiTxtEnemyName' ).setVisible( value );
	this.getControl( 'mcGuiTxtEnemyName_s' ).setVisible( value );

	if ( !value ) {
		return;
	}
	var nameBoss = ( id === 1 )? 'STR_REP_DIALOG_CHARACTER_NAME03':'STR_REP_DIALOG_CHARACTER_NAME04';
	var nameBar = ( id === 1 )? 'gui_hud_enemy_athena_bar':'gui_hud_enemy_shego_bar';
	this.getControl( 'mcGuiTxtEnemyName' ).setTextLocalized( nameBoss );
	this.getControl( 'mcGuiTxtEnemyName_s' ).setTextLocalized( nameBoss + '_S' );

	this.getControl( 'mcGuiEnemyMask' ).clip.gotoAndStop( id );
	this.getControl( 'mcGuiEnemyBar' ).setClip( nameBar );
};

HudPlatform.prototype.barDamageBoss = function( total, current ) {
	var damage = current / total;
	damage = ( ( damage > 1 ) ? 1: damage );

	this.getControl( 'mcGuiEnemyBar' ).clip.scale.x = damage;
};

HudPlatform.prototype.onFXSelectRon = function() {
	this.deleteTutoVfx();
	this.tutoVfx = Application.instance.effectManager.createEffectNano( 'FxHudSwitchPlayerStand',
														 0, 0,
														 this.getControl('mcGuiFxChangeCharacter02').canvas );
};

HudPlatform.prototype.onFXSelectKin = function() {
	this.deleteTutoVfx();
	this.tutoVfx = Application.instance.effectManager.createEffectNano( 'FxHudSwitchPlayerStand',
														 0, 0,
														 this.getControl('mcGuiFxChangeCharacter01').canvas );
};

HudPlatform.prototype.deleteTutoVfx = function () {
	if ( this.tutoVfx ) {
		this.tutoVfx.isAwaitingDelete = true;
	}
	this.tutoVfx = null;
};

/**
 * @param {boolean} value
 */
HudPlatform.prototype.pauseTime = function( value ) {
	this.m_pauseTime = value;
};

HudPlatform.prototype.updateTime = function( dt ) {
	if ( !PlatformGame.instance.gameplayEnable() ||
		this.m_pauseTime ) {
		return;
	}

	this.m_timer -= dt;
	if ( this.m_timer < 0 ) {
		this.m_timer = 0;
		this.m_pauseTime = true;
		PlatformGame.instance.outro.endTime();
	}
	this.getTime( this.m_timer );

	if ( this.m_activeShake ) {
		this.m_timeShake -= dt;
		if ( this.m_timeShake <= 0 ) {
			this.m_countShake ++;
			this.m_timeShake = HudPlatform.TIME_SHAKE;
			if ( this.m_countShake <= 2 ) {
				Application.instance.playSound( 'SND_UI_TIME_RED' );
			}
			Common.shake( this.getControl( 'mcGuiTimer' ).clip, 600 );
		}
	}
};

HudPlatform.prototype.addTime = function( time ) {
	this.m_timer += time;
	this.m_timer = ( ( this.m_timer > this.m_totalTime ) ? this.m_totalTime:this.m_timer );
	this.getTime( this.m_timer );
	PlatformGame.instance.world.createEffect( 'FxPickEnergy', this.m_timeBar.canvas.x + 150, this.m_timeBar.canvas.y, 1, this.canvas );
};

/**
 * @param {number} numToken
 */
HudPlatform.prototype.setTokens = function( numToken ) {
	if ( numToken === 0 ) {
		return;
	}
	this.m_currentToken = numToken;
	this.getControl( 'mcGuiToken0' + this.m_currentToken ).clip.gotoAndStop( 2 );
	var x = this.getControl( 'mcGuiToken0' + this.m_currentToken ).canvas.x;
	var y = this.getControl( 'mcGuiToken0' + this.m_currentToken ).canvas.y;
	PlatformGame.instance.world.createEffect( 'FxPickToken', x, y, 1, this.canvas );
};

/**
 * @param {number} numToken
 */
HudPlatform.prototype.setTokensNoFx = function( numToken ) {
	if ( numToken === 0 ) {
		return;
	}
	this.m_currentToken = numToken;
	this.getControl( 'mcGuiToken0' + this.m_currentToken ).clip.gotoAndStop( 2 );
};

/**
 * @param {number} dt
 */
HudPlatform.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );

	this.updateTime( dt );
};

HudPlatform.prototype.createCharacter = function() {
	var kim = new HudCharacter( PlayerPlatform.MODE_GIRL, this );
	this.getControl( 'mcGuiContentKin' ).canvas['addChild']( kim.canvas );
	this.m_character[PlayerPlatform.MODE_GIRL] = kim;

	var ron = new HudCharacter( PlayerPlatform.MODE_BOY, this );
	this.getControl( 'mcGuiContentRon' ).canvas['addChild']( ron.canvas );
	this.m_character[PlayerPlatform.MODE_BOY] = ron;
};

HudPlatform.prototype.playerEnabled = function( id ) {
	return true;
};

HudPlatform.prototype.onNextPlayer = function( id ) {
	var next = ( id === PlayerPlatform.MODE_GIRL ? PlayerPlatform.MODE_BOY : PlayerPlatform.MODE_GIRL );

	if ( this.m_character[next].lives === 0 ) {
		PlatformGame.instance.onGameEnd( false );
		return;
	}
	PlatformGame.instance.world.player().setIsDead( false );
	this.changePlayer( next );
};

HudPlatform.prototype.changePlayer = function( id ) {
	if ( this.idPlayerSelected === id ) {
		return;
	}

	var validate = PlatformGame.instance.world.player().setPlayerMode( id );
	if( validate ) {
		this.onSelectionFace( id );
		this.setAbilityButton( id );
		Application.instance.playSound( 'SND_PLAYER_CHANGE' );
	}
};

/**
 * @public
 * @param {number} id
 */
HudPlatform.prototype.onSelectionFace = function( id ) {
	this.idPlayerSelected = id;
	this.m_character[PlayerPlatform.MODE_GIRL].onSelection( ( this.idPlayerSelected === PlayerPlatform.MODE_GIRL ) ?
	 													     HudCharacter.ST_ON:HudCharacter.ST_OFF );

	this.m_character[PlayerPlatform.MODE_BOY].onSelection( ( this.idPlayerSelected === PlayerPlatform.MODE_BOY ) ?
															 HudCharacter.ST_ON:HudCharacter.ST_OFF );
};

HudPlatform.prototype.showTeleportButton = function( value ) {

};

HudPlatform.prototype.onDebugDraw = function( ctx ) {
};

HudPlatform.prototype.onUIPress = function( control ) {
	if ( !GuiGame.instance ) {
		return;
	}
	if ( GuiPopupDialog.instance ) {
		return;
	}
	if ( control.canvas.alpha === 0 ) {
		return;
	}
	switch ( control.name ) {
		case 'mcGuiBtnPause':
			GuiGame.instance.addPopup( GuiPopupPause, 'mcGuiPopupPause', 0, 0 );
			break;
		case 'mcGuiBtnAttack':
			PlatformGame.instance.world.player().onKeyDown( PlayerControl.CMD_CROSS );
			break;
		case 'mcGuiButtonAttackKim':
		case 'mcGuiButtonAttackRon':
			PlatformGame.instance.onKeyDown( PlayerControl.CMD_CROSS );
			break;
	}
};

HudPlatform.prototype.onUIRelease = function( control ) {
	if ( GuiPopupDialog.instance ) {
		return;
	}
	if ( control.canvas.alpha === 0 ) {
		return;
	}
	switch ( control.name ) {
		case 'mcGuiBtnAttack':
			PlatformGame.instance.world.player().onKeyUp( PlayerControl.CMD_CROSS );
			break;
		case 'mcGuiButtonAttackKim':
		case 'mcGuiButtonAttackRon':
			PlatformGame.instance.onKeyUp( PlayerControl.CMD_CROSS );
			break;
	}
};

HudPlatform.prototype.setScore = function( score ) {
};

/**
 * @return {boolean}
 */
HudPlatform.prototype.setLives = function( value, idPlayer ) {
	return this.m_character[idPlayer].setLives( value );
};

HudPlatform.prototype.addLivePartner = function( value, idPlayer ) {
	var newId = ( idPlayer === PlayerPlatform.MODE_GIRL ) ? PlayerPlatform.MODE_BOY:PlayerPlatform.MODE_GIRL;
	var oldLive = this.m_character[newId].lives;

	if ( oldLive === HudCharacter.TOTAL_LIVES ) {
		return;
	}

	if ( oldLive === 0 ) {
		this.m_character[newId].isEnabled = true;
		this.m_character[newId].loadData();
	}

	this.m_character[newId].setLives( value, false );
};

/**
 * @param {number} id
 */
HudPlatform.prototype.setAbilityButton = function( id ) {
	if ( Application.instance.isMobileDevice ) {
		this.getControl( 'mcGuiButtonAttackRon' ).setVisible( id === PlayerPlatform.MODE_BOY );
		this.getControl( 'mcGuiButtonAttackKim' ).setVisible( id === PlayerPlatform.MODE_GIRL );
	}
	else {
		this.getControl( 'mcGuiButtonAttackRon' ).setVisible( false );
		this.getControl( 'mcGuiButtonAttackKim' ).setVisible( false );
	}
};

/**
 * @param {boolean} enableGirl
 * @param {boolean} enableBoy
 */
HudPlatform.prototype.checkEnableButtonsByMode = function( enableGirl, enableBoy ) {
	if ( !Application.instance.isMobileDevice ) { return; }

	this.getControl( 'mcGuiButtonAttackRon' ).setEnabled( enableBoy );
	this.getControl( 'mcGuiButtonAttackKim' ).setEnabled( enableGirl
		|| Global.level >= 7 || PlatformGame.instance.maxLevel >= 7 );
};

HudPlatform.prototype.free = function() {
	HudPlatform.instance = null;
	this.deleteTutoVfx();
	SScreen.prototype.free.call( this );
};

/**
 * Creates a HudCharacter.
 * @constructor
 * @param {number} idPlayer
 * @param {HudPlatform} hud
 * @extends SScreen
 */
function HudCharacter( idPlayer, hud ) {
	SScreen.call( this, 'mcHudPlayer', 0, 0, null );
	this.name = 'hud_characters';
	/** @type {number} */
	this.lives = HudCharacter.TOTAL_LIVES;
	/** @type {number} */
	this.idPlayer = idPlayer;
	/** @type {boolean} */
	this.isEnabled = false;
	/** @type {HudPlatform} */
	this.m_parentHud = hud;

	this.isEnabled = this.m_parentHud.playerEnabled( this.idPlayer );

	this.loadData();
}
Application.subclass( HudCharacter, SScreen );

HudCharacter.ST_ON = 'on';
HudCharacter.ST_OFF = 'off';
HudCharacter.MIN_SCALE = 0.90;
HudCharacter.MAX_SCALE = 1.15;
HudCharacter.TOTAL_LIVES = 6;

HudCharacter.prototype.loadData = function() {
	this.getControl( 'mcHearts' ).clip.gotoAndStop( this.lives + 1 );

	var nmBase = String( ( ( this.idPlayer === 0 ) ? 'mcGuiCharacterKim' : 'mcGuiCharacterRon' ) + '_on' );
	this.getControl( 'mcBaseCharacter' ).setClip( nmBase );
};

HudCharacter.prototype.onSelection = function( state ) {
	var enable = ( state  === HudCharacter.ST_ON ) ? true:false;
	var alpha = ( state  === HudCharacter.ST_ON ) ? 1:0.5;
	var skin = String( ( ( this.idPlayer === 0 ) ? 'mcGuiCharacterKim' : 'mcGuiCharacterRon' ) + '_' +
												( ( state  === HudCharacter.ST_ON ) ? 'select' : 'off' ) );

	/** @type {GuiButton}*/ ( this.getControl( 'mcBaseCharacter' ) ).setEnabled( enable );
	this.getControl( 'mcHearts' ).clip.alpha = alpha;
	this.getControl( 'mcBaseCharacter' ).setClip( skin );

	this.canvas.scale.x = ( state  === HudCharacter.ST_ON ) ? HudCharacter.MAX_SCALE:HudCharacter.MIN_SCALE;
	this.canvas.scale.y = ( state  === HudCharacter.ST_ON ) ? HudCharacter.MAX_SCALE:HudCharacter.MIN_SCALE;
};

HudCharacter.prototype.onUIPress = function( control ) {
	if ( !this.m_parentHud.onReadyChange || !this.isEnabled ) {
		return;
	}
	if ( GuiPopupDialog.instance ) {
		return;
	}
	if ( control.canvas.alpha === 0 ) {
		return;
	}

	switch ( control.name ) {
		case 'mcBtnSelected':
			if ( PlatformGame.instance.world.player().doChangeEffect() ) {
				break;
			}
			this.m_parentHud.changePlayer( this.idPlayer );
			break;
	}
};

/**
 * @param {number} lives
 * @param {boolean=} validate
 * @return {boolean}
 */
HudCharacter.prototype.setLives = function( lives, validate ) {
	validate = ( typeof validate === 'undefined' ) ? true : validate;
	var oldLive = this.lives;
	this.lives += lives;

	if ( this.lives <= 0 ) {
		this.lives = 0;
		this.isEnabled = false;
		this.loadData();
		return true;
	}

	if ( this.lives > HudCharacter.TOTAL_LIVES ) {
		this.lives = HudCharacter.TOTAL_LIVES;
		if ( validate ) {
			var value = ( oldLive - HudCharacter.TOTAL_LIVES ) + 2;
			this.m_parentHud.addLivePartner( value, this.idPlayer );
		}
	}

	this.getControl( 'mcHearts' ).clip.gotoAndStop( this.lives + 1 );
	var x = this.getControl( 'mcHearts' ).canvas.x;
	var y = this.getControl( 'mcHearts' ).canvas.y;
	PlatformGame.instance.world.createEffect( 'FxPickHp', x, y, 1, this.canvas );
	return false;
};


/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} config
 * @extends Player
 */
function PlayerPlatform( canvas, world, x, y, config ) {

	var floor = world.getFloorCollision( x, y );
	if ( floor ) {
		y = floor.y;
	}

	/** @type {number} */
	this.timerDisabled = 0;

	/**
	 * @protected
	 * @type {boolean}
	 */
	this.passedCheckPoint = false;
	/**
	 * @type {boolean}
	 */
	this.isReadyToTeleport = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.doTeleport = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.isInStretch = false;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_timerDie = -1;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_positionCounter = PlayerPlatform.POSITION_COUNTER;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_disablePlayer = false;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_lastStateOfJumping = false;

	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_stretching = false;
	/**
	 * @protected
	 * @type {number}
	 */
	this.m_lastPosOfJumping = 0.0;

	/**
	 * @protected
	 * @type {LinearMovement}
	 */
	this.m_dashMove = null;
	/**
	 * @protected
	 * @type {TouchControl}
	 */
	this.m_dashTouch = null;
	/**
	 * @protected
	 * @type {boolean}
	 */
	this.m_dashEnabledJump = true;
	/**
	 * @type {FlyPendular}
	 */
	this.m_pendularMove = null;
	/**
	 * @type {boolean}
	 */
	this.m_pendularReady = false;
	/**
	 * @protected
	 * @type {ParametricParabolicMovement}
	 */
	this.m_hitMove = null;
	/**
	 * @protected
	 * @type {TintInterval}
	 */
	this.m_hitTintInvertal = null;
	/**
	 * @protected
	 * @type {Rectangle}
	 */
	this.m_boundsAttack = null;
	/**
	 * @protected
	 * @type {Vector2D}
	 */
	this.m_tempCol = null;

	/** @type {number} */
	this.m_timeDron = 0;

	/** @type {number} */
	this.configScale = 1;
	if ( config['player']['playerScale'] ) {
		this.configScale = config['player']['playerScale'];
	}

	Player.call( this, canvas, world, x, y );

	this.mode = ( Global.level % 2 !== 0 ? PlayerPlatform.MODE_GIRL : PlayerPlatform.MODE_BOY );




	/** @type {string} */
	this.preState = '';

	/** @type {PlayerControl} */ ( this.m_control ) = new PlayerControl( this, config['player'] );
	/** @type {PlayerControl} */ ( this.m_control ).canClimb = false;

	/** @type {boolean} */
	this.introDone = false;

	this.m_character = new Character( x, y, this.m_canvas );
	this.m_state = Player.ST_PLAYER_STAND;
	this.setPlayerMode( this.mode );

	this.m_limitUp = true;
	this.m_limitLeft = true;
	this.m_limitRight = true;

	this.m_health = 100;

	this.m_dashTouch = new TouchControl();
	this.m_dashTouch.callerObject = this;
	this.m_dashTouch.onSwipeListener = this.onDash;

	this.m_lastPosOfJumping = this.m_y;

	/** @type {Hook} */
	this.hook = null;

	/** @type {number} */
	this.celebrationCouner = 0;

	/** @type {boolean} */
	this.hitByGoo = false;

	/** @type {Panel} */
	this.nearPanel = null;

	/** @type {boolean} */
	this.justRemovePendular = false;

	/** @type {boolean} */
	this.enableButtonforBoy = false;
	/** @type {boolean} */
	this.enableButtonforGirl = false;

	/** @type {Pivot} */
	this.pivot = null;

	this.m_className = 'Player';

	/** @type {PreBossEvent} */
	this.preBossEvent = null;

	/** @type {SEffect} */
	this.fxChangeIn = null;

	/** @type {boolean} */
	this.hitDuringHook = false;

	/** @type {SEffect} */
	this.recoverFx = null;
	/** @type {LinearMovement} */
	this.recoverMove = null;

	/** @type {boolean} */
	this.isNearPivot = false;

	/** @type {boolean} */
	this.isReadyToWinAnim = false;
}
Application.subclass( PlayerPlatform, Player );

PlayerPlatform.prototype.free = function() {
	if ( this.m_hitMove ) {
		this.m_hitMove.free();
		this.m_hitMove = null;
	}
	if ( this.m_pendularMove ) {
		this.m_pendularMove.free();
		this.m_pendularMove = null;
	}
	if ( this.m_hitTintInvertal ) {
		this.m_hitTintInvertal.free();
		this.m_hitTintInvertal = null;
	}
	if ( this.m_dashMove ) {
		this.m_dashMove.free();
		this.m_dashMove = null;
	}
	if ( this.m_dashTouch ) {
		this.m_dashTouch = null;
	}
	this.m_boundsAttack = null;
	this.m_tempCol = null;
	if ( this.hook ) {
		this.hook.free();
		this.hook = null;
	}

	if ( this.preBossEvent ) {
		this.preBossEvent.free();
		this.preBossEvent = null;
	}

	if ( this.recoverFx ) {
		this.recoverFx.isAwaitingDelete = true;
		this.recoverFx = null;
	}
	if ( this.recoverMove ) {
		this.recoverMove.free();
		this.recoverMove = null;
	}

	this.fxChangeIn = null;

	Player.prototype.free.call( this );
};

/** @const {number} */ PlayerPlatform.DIE_TIME = 500;
/** @const {number} */ PlayerPlatform.POSITION_COUNTER = 5;

/** @const {string} */ PlayerPlatform.ST_PLAYER_INTRO = 'stIntro';
/** @const {string} */ PlayerPlatform.ST_PLAYER_PUNCH = 'st200';
/** @const {string} */ PlayerPlatform.ST_PLAYER_SHOOT = 'st201';
/** @const {string} */ PlayerPlatform.ST_PLAYER_DASH = 'st202';
/** @const {string} */ PlayerPlatform.ST_PLAYER_PENDULUM = 'st203';
/** @const {string} */ PlayerPlatform.ST_PLAYER_STRETCH = 'st204';

/** @const {number} */ PlayerPlatform.KEY_PUNCH = PlayerControl.CMD_CROSS;
/** @const {number} */ PlayerPlatform.KEY_SHOOT = PlayerControl.CDM_TRIANGLE;
/** @const {number} */ PlayerPlatform.KEY_CACTH_PIVOT = PlayerControl.CMD_SQUARE;

/** @const {number} */ PlayerPlatform.MODE_GIRL = 0;
/** @const {number} */ PlayerPlatform.MODE_BOY = 1;

/**
 * @override
 * @return {Array.<SCollisionPoint>}
 */
PlayerPlatform.prototype.corners = function() {
	if ( this.m_cornersArray === null ) {
		return null;
	}
	if ( this.m_speed.y < 0 ) {
		if ( this.m_hitMove !== null ) {
			if ( this.m_hitMove.vX() >= 0 ) {
				this.m_indexCornersArray = 2;
			}
			else {
				this.m_indexCornersArray = 3;
			}
		}
		else {
			if ( this.m_speed.x >= 0 ) {
				this.m_indexCornersArray = 2;
			}
			else {
				this.m_indexCornersArray = 3;
			}
		}
	}
	else {
		if ( this.m_hitMove !== null ) {
			if ( this.m_hitMove.vX() < 0 ) {
				this.m_indexCornersArray = 1;
			}
			else {
				this.m_indexCornersArray = 0;
			}
		}
		else {
			if ( this.m_speed.x < 0 ) {
				this.m_indexCornersArray = 1;
			}
			else {
				this.m_indexCornersArray = 0;
			}
		}
	}
	return this.m_cornersArray[this.m_indexCornersArray];
};

/**
 * @public
 * @param {number} keycode
 */
PlayerPlatform.prototype.onKeyDown = function( keycode ) {
	if ( keycode === PlayerControl.CMD_LEFT_A ) {
		this.auxIsPressingL = true;
		this.auxIsPressingR = false;
	}
	else if ( keycode === PlayerControl.CMD_RIGHT_A ) {
		this.auxIsPressingL = false;
		this.auxIsPressingR = true;
	}

	if ( this.m_disablePlayer ) { return; }
	if ( ( keycode === PlayerControl.CMD_CIRCLE || keycode === PlayerControl.CMD_CROSS ) &&
		this.m_pendularMove ) { return; }
	if ( ( keycode === PlayerControl.CMD_CIRCLE || keycode === PlayerControl.CMD_CROSS ) &&
		this.m_state === Player.ST_PLAYER_HIT ) { return; }

	Player.prototype.onKeyDown.call( this, keycode );

	switch ( keycode ) {
		case PlayerControl.CMD_CROSS:
			if ( this.mode === PlayerPlatform.MODE_BOY ) {
				this.onPunch();
			}
			else {
				if ( this.isNearPivot && !this.isJumping() && !this.m_pendularMove ) {
					Player.prototype.onKeyDown.call( this, PlayerControl.CMD_CIRCLE );
				}

				if ( /** @type {PlayerControl} */ ( this.m_control ).isJumping() ) {
					if ( !this.m_pendularReady ) {
						if ( this.m_pendularMove ) {
							/** @type {PlayerControl} */ ( this.m_control ).onCustomJump( this.m_pendularMove.releaseImpulseY ); // -1.2 );
							this.removePendularMove();
							Application.log( 'remove pendular' );
						}
						else if ( !this.justRemovePendular ) {
							this.m_pendularReady = true;
						}
					}
					break;
				}
				this.onShoot();
			}
			break;
		case PlayerControl.CMD_CIRCLE:
			this.onGlide( true );
				if ( this.m_pendularMove ) {
					/** @type {PlayerControl} */ ( this.m_control ).onCustomJump( this.m_pendularMove.releaseImpulseY ); // -1.2 );
					this.removePendularMove();
					Application.log( 'remove pendular' );
				}
			break;
	}
};

/**
 * @public
 * @return {boolean}
 */
PlayerPlatform.prototype.onStretch = function() {
	if ( this.m_state === Player.ST_PLAYER_STAND
		 || this.m_state === Player.ST_PLAYER_WALK
		 || this.m_state === Player.ST_PLAYER_STAND_2 ) {
		this.resetControl();
	}
	else {
		return false;
	}
	this.gotoState( PlayerPlatform.ST_PLAYER_STRETCH );
	this.m_stretching = true;
	return true;
};

/**
 * @public
 * @param {number} keycode
 */
PlayerPlatform.prototype.onKeyUp = function( keycode ) {
	if ( keycode === PlayerControl.CMD_LEFT_A ) {
		this.auxIsPressingL = false;
	}
	else if ( keycode === PlayerControl.CMD_RIGHT_A ) {
		this.auxIsPressingR = false;
	}

	if ( this.m_disablePlayer ) { return; }
	if ( ( keycode === PlayerControl.CMD_CIRCLE || keycode === PlayerControl.CMD_CROSS ) &&
		this.m_pendularMove ) { return; }

	Player.prototype.onKeyUp.call( this, keycode );
	switch ( keycode ) {
		case PlayerControl.CMD_CROSS:
			this.m_pendularReady = false;
			break;
		case Common.KEY_SPACE:
			if ( HudPlatform.instance ) {
				this.simulatePressChangeCharacter();
			}
			break;
		case PlayerControl.CMD_CIRCLE:
			this.onGlide( false );
			this.m_pendularReady = false;
			break;
	}
	this.m_dashTouch.reset();
};

/**
 * @override
 */
PlayerPlatform.prototype.resetControl = function() {
	/** @type {PlayerControl} */ ( this.m_control ).onLeft( false );
	/** @type {PlayerControl} */ ( this.m_control ).onRight( false );
	this.isPressingL = false;
	this.isPressingR = false;
	/** @type {PlayerControl} */ ( this.m_control ).onDown( false );
	/** @type {PlayerControl} */ ( this.m_control ).onJumpDown( false );
	/** @type {PlayerControl} */ ( this.m_control ).onJump( false );
	this.m_pendularReady = false;
	this.onGlide( false );
};

PlayerPlatform.prototype.simulatePressChangeCharacter = function() {
	var hudCharGirl = HudPlatform.instance.m_character[PlayerPlatform.MODE_GIRL];
	var hudCharBoy = HudPlatform.instance.m_character[PlayerPlatform.MODE_BOY];
	var control = null;

	if ( hudCharGirl.lives === 0 || hudCharBoy.lives === 0 ) {
		return;
	}

	if ( this.mode === PlayerPlatform.MODE_GIRL ) {
		control = hudCharBoy.getControl( 'mcBtnSelected' );
		hudCharBoy.onUIPress( control );
	}
	else {
		control = hudCharGirl.getControl( 'mcBtnSelected' );
		hudCharGirl.onUIPress( control );
	}
};

/**
 * @public
 * @return {number}
 */
PlayerPlatform.prototype.KEY_CACTH_PIVOT = function() {
	return PlayerControl.CDM_TRIANGLE;
};

/**
 * @public
 * @return {boolean}
 */
PlayerPlatform.prototype.isInDash = function() {
	return ( this.m_dashMove !== null );
};

/**
 * @public
 * @return {Rectangle}
 */
PlayerPlatform.prototype.boundsAttack = function() {
	return this.m_boundsAttack;
};

/**
 * @public
 * @param {boolean} val
 */
PlayerPlatform.prototype.setInvulnerability = function( val ) {
	this.m_isInvulnerable = val;
};

/**
 * @public
 * @return {boolean}
 */
PlayerPlatform.prototype.isJumping = function() {
	return /** @type {PlayerControl} */ ( this.m_control ).isJumping();
};

/**
 * @public
 */
PlayerPlatform.prototype.toogleFreeMovement = function() {
	this.m_freeMovement = !this.m_freeMovement;
	Application.info( 'Player Free movement: ' + this.m_freeMovement );
};

/**
 * @public
 */
PlayerPlatform.prototype.onDash = function() {
	if ( !this.canChangeState() ) { return; }
	if ( !this.m_dashEnabledJump ) { return; }
	this.m_dashMove = new LinearMovement( this.m_x, this.m_y, 0.7 );
	this.m_dashMove.setCallbacks( this, this.removeDashMove, null );
	this.m_dashMove.gotoPosition( this.m_x + ( ( this.m_flipX ) ? -280 : 280 ),
		this.m_y );
	this.gotoState( PlayerPlatform.ST_PLAYER_DASH );
};

/**
 * @public
 */
PlayerPlatform.prototype.createBullet = function() {
	var notPass = this.isJumping() 
		|| this.m_state === Player.ST_PLAYER_HIT
		|| !this.m_collision;

	if ( notPass ) {
		if ( this.m_state === PlayerPlatform.ST_PLAYER_SHOOT ) {
			this.backToStandAfterShoot();
		}
		return;
	}

	if ( this.hook ) {
		this.hook.free();
		this.hook = null;
	}

	var x = ( this.m_x + ( this.isFacingLeft ? -1 : 1 ) * 60 );
	var y = ( this.m_y - 87 );

	this.hook = new Hook( this.m_canvas, this.m_world,
					x, y,
					this.isFacingLeft );

	this.m_world.createEffect( 'FxPlayerGrapplingHookShoot', x, y, 1, this.m_canvas );
};

/**
 * @public
 */
PlayerPlatform.prototype.onFloor = function() {
	this.m_dashEnabledJump = true;
};

/**
 * @public
 * @param {string} state
 */
PlayerPlatform.prototype.gotoState = function( state ) {
	this.preState = this.m_state;
	if ( this.hitByGoo ) {
		return;
	}
	Player.prototype.gotoState.call( this, state );

	switch ( state ) {
		case Player.ST_PLAYER_HIT:
		case PlayerPlatform.ST_PLAYER_PENDULUM:
		case Player.ST_PLAYER_LOSE:
		case Player.ST_PLAYER_WIN:
			this.m_character.clip.loop = false;
			break;
	}

	this.updateBounds();

	if ( this.m_state === Player.ST_PLAYER_HIT ) {
		this.m_world.createEffect( 'FxPlayerHit', this.m_x, this.m_y - 50, 1, this.m_canvas );
		if ( this.blinker === null ) {
			var itime = window['platform_general']['player']['invulnerableTime'];
			this.blinker = new Blinker( itime, 25 );
		}
	}
	else if ( this.m_state === Player.ST_PLAYER_LOSE ) {
		this.m_world.createEffect( 'FxPlayerHit', this.m_x, this.m_y - 50, 1, this.m_canvas );
		this.destroyShadow();
	}
	else if ( this.m_state === Player.ST_PLAYER_LAND ) {
		Application.instance.playSound( 'SND_PLAYER_JUMP_DOWN' );
		this.m_world.createEffect( 'FxPlayerLanding', this.m_x, this.m_y, 1, this.m_canvas );
	}

	this.setScale( this.configScale );
};

/**
 * @public
 * @param {SWorldActor} enemy
 * @param {number} damage
 */
PlayerPlatform.prototype.onEnemyCollision = function( enemy, damage ) {
	if( !PlatformGame.instance.gameplayEnable() || this.blinker || this.m_pendularMove ) {
		return;
	}

	var valueSound = false;
	if ( !this.m_isInvulnerable ) {
		if ( enemy instanceof Chaser ||
			 enemy instanceof Laser ||
			 enemy instanceof Orb ||
			 enemy instanceof FallingPlatform ) {

			if ( !valueSound ) {
				valueSound = true;
				Application.instance.playSound( 'SND_PLAYER_SHOCK' );
			}
		}

		this.onGlide( false );
		Application.instance.playSound( 'SND_PLAYER_DAMAGE' );
		if ( enemy instanceof Goo ) {
			var value = this.m_world.game().setLives( -1, this.mode );
			if ( value ) {
				this.gotoState( Player.ST_PLAYER_LOSE );
			}
			else {
				this.gotoState( Player.ST_PLAYER_HIT );
				this.hitByGoo = true;
			}

			Application.instance.playSound( 'SND_PLAYER_FALL_PINK_GOO' );
			var idVO = ( this.mode === PlayerPlatform.MODE_GIRL ? 'SND_PLAYER_KIM_DAMAGE' : 'SND_PLAYER_RON_DAMAGE' );
			Application.instance.playSound( idVO );
			return;
		}

		var idVO = ( this.mode === PlayerPlatform.MODE_GIRL ? 'SND_PLAYER_KIM_DAMAGE' : 'SND_PLAYER_RON_DAMAGE' );
		Application.instance.playSound( idVO );

		var offset = 80;
		if ( this.m_x < enemy.getX() ) {
			offset = -80;
		}

		this.hitDuringHook = ( this.m_state === PlayerPlatform.ST_PLAYER_SHOOT );

		if ( this.onHit( offset * 0.5 ) ) {
			var value = this.m_world.game().setLives( -1, this.mode );
			if ( value ) {
				this.gotoState( Player.ST_PLAYER_LOSE );
			}
		}



		if ( this.hook ) {
			this.hook.free();
			this.hook = null;
		}
	}
};

PlayerPlatform.prototype.damageTest = function () {
	if ( this.onHit( 0 ) ) {
		var value = this.m_world.game().setLives( -1, this.mode );
		if ( value ) {
			this.gotoState( Player.ST_PLAYER_LOSE );
		}
	}
};

/**
 * @public
 * @param {number} displace
 */
PlayerPlatform.prototype.onHit = function( displace ) {
	if ( this.m_hitTintInvertal ) { return false; }
	if ( this.m_state === Player.ST_PLAYER_HIT ) { return false; }
	if ( this.m_state === Player.ST_PLAYER_LOSE ) { return false; }

	if ( this.m_isClimbing ) {
		this.freeClimbMovement();
		this.m_isClimbing = false;
	}

	this.m_pendularReady = false;
	this.removePendularMove();

	Common.shake( this.m_world.game().canvas, 300, 4, 30 );

	this.removeDashMove( null );

	this.gotoState( Player.ST_PLAYER_HIT );

	this.m_hitMove = new ParametricParabolicMovement( Math.floor( this.m_x ),
													  Math.floor( this.m_y ),
													  0.04,
													  0.13 );
	this.m_hitMove.setCallbacks( this, this.removeHit, null );
	this.m_hitMove.gotoPosition( Math.floor( this.m_x + displace ),
								 Math.floor( this.m_y - ( displace === 0 ? 0 : 50 ) ) );

	return true;
};

/**
 * @private
 */
PlayerPlatform.prototype.removePendularMove = function() {
	if ( this.m_pendularMove ) {
		if ( this.m_pendularMove.getVelocitySign() < 0 ) {// m_pendulum.getVelocity() < 0 ) {
			/** @type {PlayerControl} */ ( this.m_control ).onRight( false );
			/** @type {PlayerControl} */ ( this.m_control ).onLeft( true );
		}
		else if ( this.m_pendularMove.getVelocitySign() > 0 ) {// .m_pendulum.getVelocity() > 0 ) {
			/** @type {PlayerControl} */ ( this.m_control ).onLeft( false );
			/** @type {PlayerControl} */ ( this.m_control ).onRight( true );
		}
		this.timerTempDisable = this.totalTimeTempDisableHook; // 500;

		this.m_pendularMove.free();
		this.m_pendularMove = null;

		this.gotoState( Player.ST_PLAYER_JUMP_DOWN );
	}
	/** @type {PlayerControl} */ ( this.m_control ).onJump( false );
	this.m_pendularReady = false;
};

/**
 * @private
 * @param {Movement} move
 */
PlayerPlatform.prototype.removeHit = function( move ) {
	if ( this.m_hitMove ) {
		this.m_hitMove.free();
		this.m_hitMove = null;
	}

	this.m_impulseX = 0;
	this.m_impulseY = 0;

	if ( this.hitDuringHook ) {
		this.hitDuringHook = false;
		this.resetControl();
		this.setDisablePlayer( false );
		this.gotoState( Player.ST_PLAYER_STAND );
		return;
	}

};

/**
 * @public
 */
PlayerPlatform.prototype.removeHitTint = function() {
	if ( this.m_hitTintInvertal ) {
		this.m_hitTintInvertal.free();
		this.m_hitTintInvertal = null;
	}
};

PlayerPlatform.prototype.setCheckpointBoss = function () {
	if ( Shego.instance ) {
        DataManager.instance.setGlobalRegister( DataManager.REG_BOSS_ACTIVE, 1111 );
        DataManager.instance.saveData();
    }
	else if ( Athena.instance ) {
        DataManager.instance.setGlobalRegister( DataManager.REG_BOSS_ACTIVE, Global.level === 3 ? 1001 : 1011 );
        DataManager.instance.saveData();
    }
};

/**
 * @public
 * @param {string} state
 */
PlayerPlatform.prototype.onEndAnimation = function( state ) {
	Player.prototype.onEndAnimation.call( this, state );
	switch ( state ) {
		case Player.ST_PLAYER_WIN:
			this.celebrationCouner++;
			if ( this.celebrationCouner >= 1 &&
				PlatformGame.instance.outro.state === GameOutro.ST_NONE ) {
				PlatformGame.instance.outro.init();
			}
			break;
		case Player.ST_PLAYER_LOSE:
			this.setDisablePlayer( true );
			this.setInvulnerability( true );
			this.m_state = Player.ST_PLAYER_STAND;
			this.m_clip.visible = false;


			this.doRecoverAnim();

			this.setCheckpointBoss();
			break;
		case PlayerPlatform.ST_PLAYER_PUNCH:
		case Player.ST_PLAYER_HIT:
			if ( this.hitByGoo ) {
				break;
			}

			if ( this.hitDuringHook ) {
				this.hitDuringHook = false;
				this.resetControl();
				this.setDisablePlayer( false );
				this.gotoState( Player.ST_PLAYER_STAND );
				this.updateBoundsAttack();
				break;
			}

			if ( this.preState === PlayerPlatform.ST_PLAYER_SHOOT ) {
				this.backToStandAfterShoot();
				break;
			}


			this.updateBoundsAttack();
			break;
		case Player.ST_PLAYER_LAND:
			if ( this.doubleDownReplaced ) {
				this.doubleDownReplaced = false;
				this.prepareDoubleJump( false );
			}
			if ( this.isReadyToWinAnim ) { break; }
			if ( this.preBossEvent ) { break; }
			if ( Athena.instance && Athena.instance.isDefeated ) { break; }
			if ( Shego.instance && Shego.instance.isDefeated ) { break; }
			if ( !this.m_disablePlayer ) { break; }
			this.setDisablePlayer( false );
			break;
		case Player.ST_PLAYER_JUMP_DOWN:
			if ( !this.jumpDownReplaced ) { break; }
			var skin = ( this.mode === PlayerPlatform.MODE_GIRL ? 'kim' : 'ron' );
			var side = ( this.isFacingLeft ? '_left' : '_right' );
			skin += side;
			this.m_character.addState( Player.ST_PLAYER_JUMP_DOWN,  skin + ( this.m_inGlide ? '_drone' : '_jump' ) );
			this.jumpDownReplaced = false;
			break;
		case PlayerPlatform.ST_PLAYER_INTRO:
			PlatformGame.instance.intro.init();
			this.gotoState( Player.ST_PLAYER_STAND );
			break;
	}
};

PlayerPlatform.prototype.backToStandAfterShoot = function() {
	if ( /** @type {PlayerControl} */ ( this.m_control ).isJumping() ) {
		this.gotoState( Player.ST_PLAYER_JUMP_DOWN );
	}
	else {
		this.gotoState( Player.ST_PLAYER_STAND );
	}
	this.updateBoundsAttack();

	this.resetControl();
	this.setDisablePlayer( false );

	if ( this.hook ) {
		this.hook.free();
		this.hook = null;
	}

	if ( this.m_state === Player.ST_PLAYER_STAND ) {
		if ( this.auxIsPressingL ) {
			/** @type {PlayerControl} */ ( this.m_control ).onLeft( true );
		}
		if ( this.auxIsPressingR ) {
			/** @type {PlayerControl} */ ( this.m_control ).onRight( true );
		}
	}
};

/**
 * @public
 */
PlayerPlatform.prototype.onPlayerFellOutOfWorld = function() {
	if ( !this.m_isDead ) {
		this.m_timerDie = PlayerPlatform.DIE_TIME;
		this.m_isDead = true;
	}
};

/**
 * @public
 * @param {boolean} pressed
 */
PlayerPlatform.prototype.onGlide = function( pressed ) {
	if ( this.mode === PlayerPlatform.MODE_GIRL ) {
		return;
	}
	if ( Global.level < 7 && PlatformGame.instance.maxLevel < 7 ) { return; }

	if ( this.m_inGlide === pressed ) { return; }
	this.m_inGlide = pressed;

	var skin = 'ron';
	var side = ( this.isFacingLeft ? '_left' : '_right' );
	skin += side;

	if ( this.m_inGlide ) {
		this.m_character.addState( Player.ST_PLAYER_JUMP_DOWN, skin + '_drone' );
		if ( this.m_state === Player.ST_PLAYER_JUMP_DOWN ) {
			this.gotoState( Player.ST_PLAYER_STAND );
			this.gotoState( Player.ST_PLAYER_JUMP_DOWN );
		}
	}
	else {
		this.m_character.addState( Player.ST_PLAYER_JUMP_DOWN, skin + '_jump' );
		if ( this.m_state === Player.ST_PLAYER_JUMP_DOWN ) {
			this.gotoState( Player.ST_PLAYER_STAND );
			this.gotoState( Player.ST_PLAYER_JUMP_DOWN );
		}
		this.m_timeDron = 0;
		Application.instance.stopSound( 'SND_PLAYER_DRON' );
	}
};

/**
 * @public
 * @param {Movement} move
 */
PlayerPlatform.prototype.removeDashMove = function( move ) {
	if ( this.m_dashMove === null ) {
		return;
	}

	this.m_dashMove.free();
	this.m_dashMove = null;

	if ( this.m_tempCol === null ) {
		this.m_dashEnabledJump = false;
		/** @type {PlayerControl} */ ( this.m_control ).onCustomJump( -0.1 );
	}
	else {
		this.gotoState( Player.ST_PLAYER_STAND );
	}
};

/**
 * @public
 */
PlayerPlatform.prototype.onPunch = function() {
	if ( !this.canChangeState() ) { return; }
	if ( !this.nearPanel ) { return; }
	this.gotoState( PlayerPlatform.ST_PLAYER_PUNCH );
	/** @type {PlayerControl} */ ( this.m_control ).onAction( true );
};

/**
 * @public
 */
PlayerPlatform.prototype.onShoot = function() {
	if ( !this.canChangeState() ) { return; }
	if ( Global.level < 7 && PlatformGame.instance.maxLevel < 7 ) { return; }

	this.gotoState( PlayerPlatform.ST_PLAYER_SHOOT );
	/** @type {PlayerControl} */ ( this.m_control ).onAction( true );

	this.m_clip.loop = false;
	this.resetControl();
	this.setDisablePlayer( true );
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {number} angle
 * @param {number} gravity
 * @param {number} longitude
 * @param {number} angleRelease
 * @param {number} releaseImpulseY
 * @param {Pivot} pivotRef
 */
PlayerPlatform.prototype.onCheckCollisionPivot = function( x, y, angle, gravity, longitude, angleRelease, releaseImpulseY, pivotRef ) {
	if ( !this.canChangeState() ) {
		return;
	}

	if ( this.m_pendularReady ) {
		this.gotoState( PlayerPlatform.ST_PLAYER_PENDULUM );
		if ( this.m_x < x ) {
			angle = -angle;
		}

		var offX = 0;
		var offY = 0;
		var anchor = this.m_clip.getInstanceNotException( 'anchor' );
		if ( anchor ) {
			offX = anchor.x;
			offY = anchor.y;
		}

		var world = /** @type {SWorld} */ ( this.m_world );
		this.m_pendularMove = new FlyPendular( this.m_canvas, world, x, y, this.m_x + offX, this.m_y + offY,
											   angle, gravity, longitude, 'mcHookRope', angleRelease, releaseImpulseY );
		this.m_world.createEffect( 'FxPlayerGrapplingHookShoot', this.m_x, this.m_y, 1, this.m_canvas );
		this.m_world.createEffect( 'FxPlayerGrapplingHookMatch', x, y, 1, this.m_canvas );

		this.pivot = pivotRef;

		Application.instance.playSound( 'SND_PLAYER_HOOK' );
	}
};

/**
 * @public
 * @return {boolean}
 */
PlayerPlatform.prototype.canChangeState = function() {
	if ( this.m_state === Player.ST_PLAYER_HIT ) { return false; }
	if ( this.m_state === Player.ST_PLAYER_LOSE ) { return false; }
	if ( this.m_dashMove ) { return false; }
	if ( this.m_pendularMove ) { return false; }
	if ( /** @type {PlayerControl} */ ( this.m_control ).isInAction() ) { return false; }
	if ( this.m_isClimbing ) { return false; }
	return true;
};

/**
 * @public
 * @param {number} dt
 */
PlayerPlatform.prototype.update = function( dt ) {
	this.onDebugUpdate( dt );
	Player.prototype.update.call( this, dt );

	if ( this.m_disablePlayer ) {
		this.timerDisabled += dt;
	}
	else {
		this.timerDisabled = 0;
	}

	if ( this.isReadyToWinAnim ) {
		if ( this.m_state === Player.ST_PLAYER_STAND ) {
			this.gotoState( Player.ST_PLAYER_WIN );
			return;
		}
		if ( this.timerDisabled > 3000 && this.m_state !== Player.ST_PLAYER_WIN ) {
			this.gotoState( Player.ST_PLAYER_WIN );
			return;
		}
	}

	if ( this.preBossEvent ) { return; }

	if ( this.clipShadow ) {
		this.clipShadow.visible = ( !this.isJumping() && this.m_state !== Player.ST_PLAYER_HIT && !this.m_hitMove && this.m_collision !== null );
	}

	if ( this.m_timerDie > 0 ) {
		this.m_timerDie -= dt;
		if ( this.m_timerDie <= 0 ) {
			this.gotoState( Player.ST_PLAYER_STAND );
			this.m_world.game().setLives( -1, this.mode );
		}
	}

	if ( this.recoverFx && !this.recoverFx.isAwaitingDelete ) {
		if ( this.recoverMove ) {
			this.recoverFx.fix( {'x':this.recoverMove.getX(), 'y':this.recoverMove.getY()} );
			this.recoverMove.update( dt );
		}
		return;
	}

	this.m_dashTouch.update( dt );

	if ( this.m_state === Player.ST_PLAYER_JUMP_DOWN && this.m_inGlide ) {
		this.m_timeDron += dt;
		if ( this.m_timeDron >= 100 ) {
			this.m_timeDron = 0;
			if ( !Application.instance.isPlayingSound( 'SND_PLAYER_DRON' ) ) {
				Application.instance.playSound( 'SND_PLAYER_DRON' );
			}
		}
	}

	if ( this.m_dashMove ) {
		this.m_oldX = this.m_x;
		this.m_oldY = this.m_y;
		var p = new Vector2D( this.m_x, this.m_y );
		var d = this.m_dashMove.simulateUpdate( dt );
		var r = d.clone();
		r.stretch( 0.9 * this.m_world.tileWidth() );

		this.m_tempCol = null;
		while ( this.m_tempCol === null ) {
			if ( d.length() > r.length() ) {
				p.add( r );
				d.subtract( r );

				this.m_x = p.x;
				this.m_y = p.y;
				this.m_tempCol = this.m_world.checkCollision( this );
				if ( this.m_tempCol ) {
					this.m_x += this.m_tempCol.x;
					this.m_y += this.m_tempCol.y;
					this.removeDashMove( null );
				}
			}
			else {
				p.add( d );
				this.m_x = p.x;
				this.m_y = p.y;
				this.m_tempCol = this.m_world.checkCollision( this );
				if ( this.m_tempCol ) {
					this.m_x += this.m_tempCol.x;
					this.m_y += this.m_tempCol.y;
					this.removeDashMove( null );
				}
				break;
			}
		}
		if ( this.m_tempCol === null ) {
			this.m_dashMove.update( dt );
		}
		return;
	}

	if ( this.isReadyToTeleport ) {
		HudPlatform.instance.showTeleportButton( true );
	}
	else {
		HudPlatform.instance.showTeleportButton( false );
	}

	if ( this.m_pendularMove ) {
		this.m_oldX = this.m_x;
		this.m_oldY = this.m_y;
		this.m_pendularMove.update( dt );
		var offX = 0;
		var offY = 0;
		var anchor = this.m_clip.getInstanceNotException( 'anchor' );
		if ( anchor ) {
			offX = anchor.x;
			offY = anchor.y;
		}
		this.m_x = this.m_pendularMove.getX() - offX;
		this.m_y = this.m_pendularMove.getY() - offY;

		if ( this.m_pendularMove.isDone ) {
			/** @type {PlayerControl} */ ( this.m_control ).onCustomJump( this.m_pendularMove.releaseImpulseY ); // -1.2 );
			this.removePendularMove();
			this.justRemovePendular = true;
		}
		this.enableButtonforGirl = false;
		this.enableButtonforBoy = false;
		HudPlatform.instance.checkEnableButtonsByMode( this.enableButtonforGirl, this.enableButtonforBoy );
		return;
	}

	if ( !/** @type {PlayerControl} */ ( this.m_control ).isJumping() ) {
		this.justRemovePendular = false;
	}
	if ( this.m_hitTintInvertal ) {
		this.m_hitTintInvertal.setClip( this.m_clip );
		this.m_hitTintInvertal.update( dt );
	}
	if ( this.m_hitMove ) {
		this.m_oldX = this.m_x;
		this.m_oldY = this.m_y;
		this.m_x = this.m_hitMove.getX();
		this.m_y = this.m_hitMove.getY();
		this.m_hitMove.update( dt );
		this.m_tempCol = this.m_world.checkCollision( this );
		if ( this.m_tempCol ) {
			this.m_x += this.m_tempCol.x;
			this.m_y += this.m_tempCol.y;
			this.removeHit( null );
		}
		return;
	}

	if ( this.hook ) {
		this.hook.update( dt );
		if ( this.hook.isDone ) {
			this.backToStandAfterShoot();
		}
	}

	if ( this.blinker ) {
		this.blinker.update( dt );
		this.m_clip.alpha = this.blinker.alpha;
		if ( this.blinker.isDone ) {
			this.blinker = null;
		}
	}

	if ( !this.nearPanel ) {
		this.enableButtonforBoy = false;
	}
	if ( this.justRemovePendular ) {
		this.enableButtonforGirl = false;
	}
	HudPlatform.instance.checkEnableButtonsByMode( this.enableButtonforGirl, this.enableButtonforBoy );
};

/**
 * @public
 * @param {number} forceX
 * @param {number} initSpeedY
 * @param {number} type
 * @param {Spring} spring
 */
PlayerPlatform.prototype.onSpringCollision = function( forceX, initSpeedY, type, spring ) {
	if ( this.m_state !== Player.ST_PLAYER_JUMP_UP ) {
		Application.externalTrack( 'Spring Activated', 'x: ' + spring.getX() + ' y: ' + spring.getY() );
	}
	Player.prototype.onSpringCollision.call( this, forceX, initSpeedY, type, spring );
};

/**
 * @override
 * @param {SEdiZone} zone
 */
PlayerPlatform.prototype.onEnterZone = function( zone ) {
	Player.prototype.onEnterZone.call( this, zone );
};

/**
 * @override
 * @param {SEdiZone} zone
 */
PlayerPlatform.prototype.onLeaveZone = function( zone ) {
	Player.prototype.onLeaveZone.call( this, zone );
};

/**
 * @param {number} value
 * @return {boolean}
 */
PlayerPlatform.prototype.setPlayerMode = function( value ) {
	if ( this.m_state !== Player.ST_PLAYER_STAND ) {
		if ( this.m_state !== Player.ST_PLAYER_STAND_2 ) {
			if ( this.m_state !== Player.ST_PLAYER_WALK ) {
				return false;
			}
		}
	}

	this.mode = value;
	this.refreshCharStates();

	this.m_character.onEndAnimation( this, this.onEndAnimation );

	this.m_state = '-1';

	this.gotoState( Player.ST_PLAYER_STAND );
	this.createCorners();

	if ( this.mode === PlayerPlatform.MODE_BOY ) {
		/** @type { PlayerControl } */ ( this.m_control ).hardcodeEnableDoubleJump( true );
	}
	else {
		/** @type { PlayerControl } */ ( this.m_control ).hardcodeEnableDoubleJump( false );
	}

	if ( this.introDone ) {
		this.m_world.createEffect( 'FxPlayerSwitch', this.m_x, this.m_y, 1, this.m_canvas );
		HudPlatform.instance.deleteTutoVfx();
	}
	else {
		this.introDone = true;
		this.setDisablePlayer( true );
		this.gotoState( PlayerPlatform.ST_PLAYER_INTRO );

		var nameFx = ( this.mode === PlayerPlatform.MODE_GIRL ? 'ron' : 'kim' );
		var offX =  ( this.mode === PlayerPlatform.MODE_GIRL ? 0 : 75 );
		var introFx = this.m_world.createEffect( nameFx + '_left_intro', this.m_x + offX, this.m_y, 1, GuiGame.instance.canvasEffects );
		introFx.clip.scale.x = this.configScale;
		introFx.clip.scale.y = this.configScale;
		if ( nameFx === 'kim' ) {
			introFx.clip.scale.x *= -1;
		}

		this.createShadow( 'mcShadow' );
	}

	return true;
};


/**
 * @return {boolean}
 */
PlayerPlatform.prototype.doChangeEffect = function () {




	return false;
};

/**
 * @param {SEffect} fx
 */
PlayerPlatform.prototype.onEndFxChangeIn = function ( fx ) {
	this.fxChangeIn = null;
	var nextMode = ( this.mode === PlayerPlatform.MODE_GIRL ? PlayerPlatform.MODE_BOY : PlayerPlatform.MODE_GIRL );
	HudPlatform.instance.changePlayer( nextMode );
	this.m_canvas.visible = true;
	this.setDisablePlayer( false );
};

/**
 * @param {boolean} value
 */
PlayerPlatform.prototype.setDisablePlayer = function( value ) {
	this.m_disablePlayer = value;
};

/**
 * @override
 * @param {boolean} flip
 */
PlayerPlatform.prototype.setFlipX = function ( flip ) {
	if ( this.isFacingLeft === flip )  {
		return;
	}

	this.isFacingLeft = flip;
	var st = this.m_state;
	this.m_state = '-1';
	this.refreshCharStates();
	this.gotoState( st );
};

PlayerPlatform.prototype.refreshCharStates = function () {
	var skin = ( this.mode === PlayerPlatform.MODE_GIRL ? 'kim' : 'ron' );
	var side = ( this.isFacingLeft ? '_left' : '_right' );
	skin += side;

	this.m_character.addState( PlayerPlatform.ST_PLAYER_INTRO, skin + '_intro' );
	this.m_character.addState( Player.ST_PLAYER_STAND, skin + '_stand' );
	this.m_character.addState( Player.ST_PLAYER_STAND_2, skin + '_idle' );
	this.m_character.addState( Player.ST_PLAYER_WALK, skin + '_walk' );
	this.m_character.addState( Player.ST_PLAYER_RUN, skin + '_stand' );
	this.m_character.addState( Player.ST_PLAYER_JUMP_UP, skin + '_jump_up' );
	this.m_character.addState( Player.ST_PLAYER_JUMP_DOWN, skin + ( this.m_inGlide ? '_drone' : '_jump' ) );
	this.m_character.addState( Player.ST_PLAYER_LAND, skin + '_jump_down' );
	this.m_character.addState( Player.ST_PLAYER_HIT, skin + '_hit' );
	this.m_character.addState( Player.ST_PLAYER_LOSE, skin + '_defeat' );
	this.m_character.addState( Player.ST_PLAYER_WIN, skin + '_win' );
	this.m_character.addState( Player.ST_PLAYER_CLIMB, skin + '_climb' );
	this.m_character.addState( Player.ST_PLAYER_WALL, skin +  '_wall' );
	this.m_character.addState( PlayerPlatform.ST_PLAYER_PUNCH, skin + '_rufus', [{ caller: this, callback: this.updateBoundsAttack, frame: 6 }] );
	this.m_character.addState( PlayerPlatform.ST_PLAYER_SHOOT, skin + '_shoot', [{ caller: this, callback: this.createBullet, frame: 5 }] );
	this.m_character.addState( PlayerPlatform.ST_PLAYER_DASH, skin + '_dash' );
	this.m_character.addState( PlayerPlatform.ST_PLAYER_PENDULUM, skin + '_pendulum' );
	this.m_character.addState( PlayerPlatform.ST_PLAYER_STRETCH, skin + '_stand' );
};

/**
 * @override
 */
PlayerPlatform.prototype.replaceJumpDown = function () {
	var skin = ( this.mode === PlayerPlatform.MODE_GIRL ? 'kim' : 'ron' );
	var side = ( this.isFacingLeft ? '_left' : '_right' );
	skin += side;

	var st = this.m_state;
	this.m_character.addState( Player.ST_PLAYER_JUMP_DOWN, skin + '_attack' );
	this.m_state = '-1';
	this.gotoState( st );

	this.jumpDownReplaced = true;
};

/**
 * @override
 * @param {boolean} regular
 */
PlayerPlatform.prototype.replaceJumpUp = function ( regular ) {


};

/**
 * @override
 * @param {boolean} prepare
 */
PlayerPlatform.prototype.prepareDoubleJump = function ( prepare ) {
	var skin = ( this.mode === PlayerPlatform.MODE_GIRL ? 'kim' : 'ron' );
	var side = ( this.isFacingLeft ? '_left' : '_right' );
	skin += side

	var jump = '_jump_up';
	var jump2 = ( this.m_inGlide ? '_drone' : '_jump' );

	if ( prepare && this.mode === PlayerPlatform.MODE_BOY ) {
		jump = '_jetpack_up';
		jump2 = '_jetpack';
		this.doubleDownReplaced = true;
	}

	this.m_character.addState( Player.ST_PLAYER_JUMP_UP, skin + jump );
	this.m_character.addState( Player.ST_PLAYER_JUMP_DOWN, skin + jump2 );
};

PlayerPlatform.prototype.doRecoverAnim = function () {
	var idSoundPL = ( this.mode === PlayerPlatform.MODE_GIRL ? 'ron' : 'kim' );
	var skin = idSoundPL;
	var side = ( this.isFacingLeft ? '_left' : '_right' );
	skin += side;
	skin += '_recover';

	this.recoverFx = this.m_world.createEffect( skin,
		this.m_x,
		this.m_world.camera().getY() + this.m_world.camera().height() + 200, //this.m_y,
		1, GuiGame.instance.canvasEffects );
	this.recoverFx.deleteAtTheEnd = false;
	this.recoverFx.onComplete( this, this.onRecoverComplete );

	Application.instance.playSound( 'SND_PLAYER_' + idSoundPL.toUpperCase() + '_RESCUE' );

};

PlayerPlatform.prototype.onRecoverComplete = function () {
	this.recoverFx.isAwaitingDelete = true;

	if ( this.recoverMove ) {
		this.recoverMove.free();
		this.recoverMove = null;
	}

	PlatformGame.instance.onGameEnd( false );
};

/**
* @constructor
* @param {number} time
* @param {number} cycles
*/
function Blinker( time, cycles ) {
	/** @type {number} */
	this.totalTime = time;
	/** @type {number} */
	this.time = time;
	/** @type {number} */
	this.cycles = cycles;
	/** @type {number} */
	this.cycleTime = this.totalTime / this.cycles;
	/** @type {number} */
	this.mode = 0;
	/** @type {boolean} */
	this.isDone = false;
	/** @type {number} */
	this.alpha = 0.5;

	this.color = 0xFF0000;
}

/**
 * @param {number} dt
 */
Blinker.prototype.update = function( dt ) {
	if ( this.time > 0 ) {
		this.time -= dt;
		this.cycleTime -= dt;
		if ( this.time <= 0 ) {
			this.time = 0;
			this.isDone = true;
			this.alpha = 1;
			this.color = 0xFFFFFF;
			return;
		}
		else if ( this.cycleTime <= 0 ) {
			this.cycleTime = this.totalTime / this.cycles;
			this.mode++;
		}
		this.alpha = ( this.mode % 2 === 0 ? 0.5 : 1 );
		this.color = ( this.mode % 2 === 0 ? 0xFF0000 : 0xFFFFFF );
	}
};


/**
 * @constructor
 */
function TrophyPopupManager () {
    /** @type {SEffectGui} */
    this.infoPanel = null;
    /** @type {Array<Object>} */
    this.poolMessages = [];
}

/**
 * @public
 * @param {string} title
 * @param {string} info
 * @param {string=} clipContent
 * @param {number=} frame
 */
TrophyPopupManager.prototype.addInfoPanel = function( title, info, clipContent, frame ) {
    var params = { 'title' : title,
                   'info' : info,
                   'clipContent' : clipContent || '',
                   'frame' : frame || 1 };
    this.poolMessages.push( params );
};

/**
 * @public
 * @param {Object} data
 */
TrophyPopupManager.prototype.createInfoPanel = function( data ) {
    this.infoPanel = Application.instance.effectManager.createEffectGui( 'mcGuiHudDialog',  0, 0, HudPlatform.instance.canvas );
    this.infoPanel.getControl( 'mcGuiTxtTitle' ).setTextLocalized( data['title'] );
    this.infoPanel.getControl( 'mcGuiTxtTitle_s' ).setTextLocalized( data['title'] );

    var req = window['platform_general']['achievReq'][data['frame'] - 1]['req'];
    switch ( data['frame'] ) {
		case 1:
		case 2:
		case 3:
            this.infoPanel.getControl( 'mcGuiTxtDescription' ).setTextReplace( data['info'], ['#'], [req] );
			break;
		default:
            this.infoPanel.getControl( 'mcGuiTxtDescription' ).setTextLocalized( data['info'] );
	}

    if ( data['clipContent'] !== '' ) {
        this.infoPanel.getControl( 'mcGuiCharacter' ).setClip( data['clipContent'] + data['frame'] + '_n' );
    }
    this.infoPanel.onComplete( this, this.onEndAnimationPanel );

    Application.instance.playSound( 'SND_UI_ACHIEVEMENT' );
};

/**
 * @public
 */
TrophyPopupManager.prototype.onEndAnimationPanel = function( panel ) {
    this.infoPanel = null;
};

/**
 * @param {number} dt
 */
TrophyPopupManager.prototype.update = function ( dt ) {
    if ( this.poolMessages && this.poolMessages.length > 0 ) {
        if ( !this.infoPanel ) {
            this.createInfoPanel( this.poolMessages.splice( 0, 1 )[0] );
        }
    }
};

TrophyPopupManager.prototype.free = function () {
    this.infoPanel = null;
    this.poolMessages = null;
};
/**
 * @constructor
 * @param {number} level
 */
function MGSettings( level ) {
	/** @type {Array.<MGData>} */
	this.dtLevel = [];

	var k = 0;
	var dt = window['config_minigame']['dtMinigame'];
	for ( k = 0; k < dt.length; k++ ) {
		var tempData = new MGData( dt[k] );
		this.dtLevel.push( tempData );
	}
}

/**
 * @constructor
 * @param {Object} data
 */
function MGData( data ) {
	this.timeGame = data['timeGame'];
	this.totalControls = data['totalControls'];
	this.slot1 = data['slot_1'];
	this.slot2 = data['slot_2'];
	this.slot3 = data['slot_3'];
	this.skinLine1 = data['skinLine_1'];
	this.skinLine2 = data['skinLine_2'];
	this.skinLine3 = data['skinLine_3'];
}

/**
 * Creates a GuiPopupMinigame.
 * @constructor
 * @param {string} clipName
 * @param {number=} x
 * @param {number=} y
 * @param {SScreen=} screenParent
 * @extends SScreen
 */
function GuiPopupMinigame( clipName, x, y, screenParent ) {
	this.game = null;
	SScreen.call( this, clipName, x, y, screenParent );
	this.setInteractive( true );
	this.name = 'minigame';

	this.createGame();
}
Application.subclass( GuiPopupMinigame, SScreen );

GuiPopupMinigame.prototype.createGame = function() {
	this.game = new MGGame( this.canvas, Global.level );
};

/**
 * @public
 * @param {Panel} panel
 */
GuiPopupMinigame.prototype.addPanel = function( panel ) {
	if ( this.game !== null ) {
		this.game.addPanel( panel );
	}
};

GuiPopupMinigame.prototype.onStopScreen = function() {
	SScreen.prototype.onStopScreen.call( this );
	this.activePress = false;
};

GuiPopupMinigame.prototype.onFinishScreen = function() {
	SScreen.prototype.onFinishScreen.call( this );
};

GuiPopupMinigame.prototype.onEndTransition = function( fx ) {
	SScreen.prototype.onEndTransition.call( this, fx );

	if ( fx.params ) {
		Application.instance.guiManager.gotoScreen( fx.params.screen );
	}
};

GuiPopupMinigame.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );
	if ( this.game !== null ) {
		this.game.update( dt );
	}
};

GuiPopupMinigame.prototype.free = function() {
	if ( this.game !== null ) {
		this.game.free();
		this.game = null;
	}
	SScreen.prototype.free.call( this );
};

/**
 * @constructor
 * @struct
 * @param {SDisplayObjectContainer} canvas
 * @param {number} level
 * @extends SGame
 */
function MGGame( canvas, level ) {
	SGame.call( this, canvas );

	MGGame.instance = this;

	/** @type {boolean} */
	this.win = false;
	/** @type {boolean} */
	this.m_reset = false;
	/** @type {boolean} */
	this.finishGame = false;
	/** @type {number} */
	this.level = level;
	/** @type {number} */
	this.m_timeEndGame = 2500;
	/** @type {number} */
	this.idResult = 0;
	/** @type {number} */
	this.idSelected = 0;
	/** @type {Panel} */
	this.m_panel = null;
	/** @type {MGBoard} */
	this.board = null;
	/** @type {MGRufus} */
	this.rufus = null;
	/** @type {SDisplayObjectContainer} */
	this.canvasBoard = null;
	/** @type {SDisplayObjectContainer} */
	this.canvasObjects = null;
	/** @type {SDisplayObjectContainer} */
	this.canvasRufus = null;
	/** @type {SDisplayObjectContainer} */
	this.canvasTop = null;
	/** @type {SSprite|Animation} */
	this.m_background = null;
	/** @type {MGData} */
	this.dataLevel = null;
	/** @type {MGSettings} */
	this.m_settings = null;
	/** @type {MGIntro} */
	this.intro = null;

	this.intro = new MGIntro( this );
	this.m_settings = new MGSettings( this.level );
	var h = h;

	var rdnId = Common.random( 0, this.m_settings.dtLevel.length - 1 );
	this.dataLevel = this.m_settings.dtLevel[rdnId];
	this.idResult = Common.random( 1, this.dataLevel.totalControls );

	this.canvasBackground = Application.instance.addDisplayContainer();
	this.canvasRufus = Application.instance.addDisplayContainer();
	this.canvasObjects = Application.instance.addDisplayContainer();
	this.canvasBoard = Application.instance.addDisplayContainer();
	this.canvasTop = Application.instance.addDisplayContainer();

	this.canvas.addChild( this.canvasBackground );
	this.canvas.addChild( this.canvasRufus );
	this.canvas.addChild( this.canvasObjects );
	this.canvas.addChild( this.canvasBoard );
	this.canvas.addChild( this.canvasTop );

	this.canvas.addPressListener( this, this.onPointerPress );
	this.canvas.addReleaseListener( this, this.onPointerRelease );

	this.board = new MGBoard( this.canvasBoard, this.canvasObjects, this.dataLevel, this.level, this.idResult );
	this.rufus = new MGRufus( this, this.canvasRufus, 100, 600 );
	this.m_hud = new MGHud( 'mcGuiHud_minigame', this );
	this.m_hud.loadDataGame();
	this.loadBackGround();
}
Application.subclass( MGGame, SGame );

/** @override */
MGGame.prototype.init = function() {

};

/**
 * @public
 * @param {Panel} panel
 */
MGGame.prototype.addPanel = function( panel ) {
	this.m_panel = panel;
};

/**
 * @override
 * @return {MGHud}
 */
MGGame.prototype.hud = function() {
	return /** @type {MGHud} */( this.m_hud );
};

MGGame.prototype.showWorldFilter = function( show ) {
	if ( Application.RENDER_MODE === Application.RENDER_WEBGL && !Application.isLowDevice ) {
		var filter = new window['PIXI']['filters']['ColorMatrixFilter']();
		filter['lsd']( true );
		this.canvas.filters = ( show ? [filter] : null );
	}
};

/**
 * @public
 */
MGGame.prototype.onResultMinigame = function() {
	this.board.onShowResult( this.idSelected );

	var idSound = (( this.idResult === this.idSelected ) ? 'SND_RUFUS_CUT_CORRET':'SND_RUFUS_CUT_WRONG');
	Application.instance.playSound( idSound );
	var stateRufus = (( this.idResult === this.idSelected ) ? MGRufus.ST_RUFUS_WIN:MGRufus.ST_RUFUS_ELECTROCUTED);
	this.win = ((this.idResult === this.idSelected) ? true:false);
	this.rufus.gotoState( stateRufus );
	if ( stateRufus === MGRufus.ST_RUFUS_ELECTROCUTED ) {
		Common.shake( this.canvas, 800, 4, 30 );
	}
	this.intro.createOutro( this.win );
};

/**
 * @public
 * @param {number} id
 */
MGGame.prototype.checkCircuit = function( id ) {
	this.board.activePress = false;
	this.idSelected = id;
	this.hud().pauseTime( true );
	this.rufus.onWalk();
	for ( var k = 1; k <= 3; k++ ) {
		this.hud().onShowArrow( false, k );
	}

	this.board.changeAlert();
	Application.instance.stopSound( 'SND_MINIGAME_RUFUS' );
};

/**
 * @public
 * @return {number}
 */
MGGame.prototype.positionTarget = function() {
	return this.board.onTargetPositionX( this.idSelected );
};

MGGame.prototype.onFinishMiniGame = function() {
	if ( this.win && this.m_panel !== null ) {
		this.m_panel.openBarrier();
	}
	this.onGameEnd( this.win );
};

/** @override */
MGGame.prototype.fixGameScale = function() {
	if ( this.m_hud ) {
		/** @type {MGHud} */ ( this.m_hud ).fixGameScale();
	}
};

MGGame.prototype.onDebugInit = function() {

};

MGGame.prototype.loadBackGround = function() {
	this.m_background = Application.instance.getClip( 'mcMGBackground' );
	this.m_background.setPosition( 0, 0 );
	this.canvasBackground.addChild( this.m_background );
};

/**
 * @param {boolean} win
 */
MGGame.prototype.onGameEnd = function( win ) {
	this.finishGame = true;
	this.win = win;
};

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
MGGame.prototype.onDebugDraw = function( ctx ) {

};

MGGame.prototype.onPointerPress = function( e ) {
	SGame.prototype.onPointerPress.call( this, e );
	var event = Layout.fixInteractionEvent( e );
	var posX = event.data.global.x;
	var posY = event.data.global.y;

	if ( this.board !== null && !this.win ) {
		this.board.onPointerPress( posX, posY );
	}
};

MGGame.prototype.onPointerRelease = function( e ) {
	SGame.prototype.onPointerRelease.call( this, e );
	var event = Layout.fixInteractionEvent( e );
	var posX = event.data.global.x;
	var posY = event.data.global.y;

	if ( this.board !== null && !this.win ) {
		this.board.onPointerRelease( posX, posY );
	}
};

MGGame.prototype.update = function( dt ) {
	if ( this.finishGame ) {
		this.free();
		GuiGame.instance.dropPopup();
		if ( !this.win ) {
			 /** @type {PlayerPlatform} */ ( PlatformGame.instance.world.player() ).damageTest();
		}

		if ( GuiGame.ID_MUSIC_GAME !== '' ) {
			Application.instance.playSound( GuiGame.ID_MUSIC_GAME );
		}
	}
	else {
		if ( this.m_background !== null ) {
			this.m_background.update( dt );
		}

		if ( this.intro !== null ) {
			this.intro.update( dt );
		}

		if ( this.board !== null ) {
			this.board.update( dt );
		}

		if ( this.rufus !== null ) {
			this.rufus.update( dt );
		}
	}

	SGame.prototype.update.call( this, dt );
};

MGGame.prototype.free = function() {
	if ( this.m_background !== null ) {
		this.canvasBackground.removeChild( this.m_background );
		this.m_background = null;
	}

	if ( this.board !== null ) {
		this.board.free();
		this.board = null;
	}

	if ( this.rufus !== null ) {
		this.rufus.free();
		this.rufus= null;
	}

	if ( this.m_hud !== null ) {
		this.m_hud.free();
		this.m_hud = null;
	}

	if( this.canvasBackground ) {
		this.canvas.removeChild( this.canvasBackground );
	}
	if( this.canvasRufus ) {
		this.canvas.removeChild( this.canvasRufus );
	}
	if( this.canvasObjects ) {
		this.canvas.removeChild( this.canvasObjects );
	}
	if( this.canvasBoard ) {
		this.canvas.removeChild( this.canvasBoard );
	}
	if( this.canvasTop ) {
		this.canvas.removeChild( this.canvasTop );
	}
	this.canvasBackground = null;
	this.canvasRufus = null;
	this.canvasObjects = null;
	this.canvasBoard = null;
	this.canvasTop = null;

	MGGame.instance = null;
};
/**
 * @constructor
 * @param {string} clipName
 * @param {MGGame} game
 * @param {number=} x
 * @param {number=} y
 * @extends SScreen
 */
function MGHud( clipName, game, x, y ) {
	x = ( typeof x === 'undefined' ) ? 0 : x;
	y = ( typeof y === 'undefined' ) ? 0 : y;
	SScreen.call( this, clipName, x, y );

	this.canvas.hitArea = null;
	/** @type {number} */
	this.m_timer = 0;
	/** @type {number} */
	this.m_totalTime = 0;
	/** @type {MGGame} */
	this.m_game = game;
	/** @type {boolean} */
	this.m_isHazard = false;
	/** @type {number} */
	this.m_typeHazard = 0;
	/** @type {boolean} */
	this.m_finishTime = false;
	/** @type {GuiControl} */
	this.m_timeBar = null;
	/** @type {boolean} */
	this.m_pauseTime = false;

	this.m_timeBar = this.getControl( 'mcGuiTimerBar' );

	this.pauseTime( true );
	MGHud.instance = this;

	for ( var k = 1; k <= 3; k++ ) {
		this.onShowArrow( false, k );
	}
}
Application.subclass( MGHud, SScreen );

/**
 * @public
 * @param {CanvasRenderingContext2D|WebGLRenderingContext} ctx
 */
MGHud.prototype.onDebugDraw = function( ctx ) {
};

/**
 * @public
 */
MGHud.prototype.fixGameScale = function() {

};

/**
 * @public
 * @param {boolean} value
 * @param {number} id
 */
MGHud.prototype.onShowArrow = function( value, id ) {
	this.getControl( 'mcGuiTutorialArrow0' + id ).setVisible( value );
};


MGHud.prototype.loadDataGame = function() {
	this.m_timer = ( this.m_game.dataLevel.timeGame * 1000 );
	this.m_totalTime = this.m_timer;

	this.getTime( this.m_timer );
};

MGHud.prototype.addTime = function( time ) {
	this.m_timer += ( time * 1000 );
	this.m_timer = ( ( this.m_timer > this.m_totalTime ) ? this.m_totalTime:this.m_timer );
	this.getTime( this.m_timer );
};

MGHud.prototype.getTime = function( time ) {
	var scBarTime = time / this.m_totalTime;

	scBarTime = ( ( scBarTime > 1 ) ? 1: scBarTime );
	this.m_timeBar.clip.scale.x = scBarTime;
};

MGHud.prototype.pauseTime = function( value ) {
	this.m_finishTime = value;
};

MGHud.prototype.updateTime = function( dt ) {
	if ( this.m_finishTime ) {
		return;
	}

	this.m_timer -= dt;
	if ( this.m_timer <= 0 ) {
		this.m_timer = 0;
		this.m_finishTime = true;
		Application.instance.stopSound( 'SND_MINIGAME_RUFUS' );
		this.m_game.onGameEnd( false );
	}
	this.getTime( this.m_timer );
};

MGHud.prototype.update = function( dt ) {
	SScreen.prototype.update.call( this, dt );

	if ( !this.m_pauseTime ) {
		this.updateTime( dt );
	}
};

MGHud.prototype.free = function() {
	SScreen.prototype.free.call( this );
};

/**
 * @constructor
 * @struct
 * @param {SDisplayObjectContainer} canvas
 * @param {number} x
 * @param {number} y
 * @param {string} skin
 */
function MGLine( canvas, x, y, skin ) {
	/** @type {SDisplayObjectContainer} */
	this.m_canvas = canvas;
	/** @type {string} */
	this.m_state = '';
	/** @type {string} */
	this.m_skin = '';
	/** @type {number} */
	this.x = 0;
	/** @type {number} */
	this.y = 0;
	/** @type {number} */
	this.idLine = 0;
	/** @type {boolean} */
	this.m_isAwaitingDelete = false;
	/** @type {Animation|SSprite} */
	this.clip = null;
	/** @type {Character} */
	this.m_character = null;

	this.x = x;
	this.y = y;
	this.m_skin = skin;
	this.idLine = Common.random( 1, 3 );
	this.m_character = new Character( this.x, this.y, this.m_canvas );
	this.m_character.addState( MGLine.ST_LINE_ON,  String( this.m_skin + '_' + this.idLine ));
	this.m_character.addState( MGLine.ST_LINE_OFF, String( this.m_skin + '_' + this.idLine ));

	this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.gotoState( MGLine.ST_LINE_ON );
}

/** @const {string} */ MGLine.ST_LINE_ON = 'st_on';
/** @const {string} */ MGLine.ST_LINE_OFF = 'st_off';

/**
 * @public
 * @param {string} state
 */
MGLine.prototype.onEndAnimation = function( state ) {
	switch ( state ) {
		case MGLine.ST_LINE_OFF:
			break;
	}
};

MGLine.prototype.free = function() {
	if ( this.m_character !== null ) {
		this.m_character.free();
		this.m_character = null;
		this.clip = null;
	}

	this.m_canvas = null;
};

/**
 * @public
 * @return {SDisplayObjectContainer}
 */
MGLine.prototype.canvas = function() {
	return this.m_canvas;
};

/**
 * @public
 * @return {string}
 */
MGLine.prototype.state = function() {
	return this.m_state;
};

/**
 * @public
 * @param {number} px
 * @param {number} py
 */
MGLine.prototype.setPosition = function( px, py ) {
	this.x = px;
	this.y = py;
	if ( this.clip ) {
		this.clip.position.x = this.x;
		this.clip.position.y = this.y;
	}
};

/**
 * @public
 * @param {string} state
 */
MGLine.prototype.gotoState = function( state ) {
	if ( state !== this.m_state ) {
		this.m_character.gotoState( state );
		this.clip = this.m_character.clip;

		this.m_state = state;
	}
};

/**
 * @public
 * @param {number} dt
 */
MGLine.prototype.update = function( dt ) {
	if ( this.m_character !== null ) {
		this.m_character.update( dt );
	}
};

/**
 * @constructor
 * @param {MGGame} game
 */
function MGIntro( game ) {
	/** @type {boolean} */
	this.m_win = false;
	/** @type {MGGame} */
	this.game = game;
	/** @type {number} */
	this.m_timeFinish = 0;
	/** @type {number} */
	this.state = MGIntro.ST_NONE;
}

/** @const {number} */
MGIntro.ST_NONE = 0;
MGIntro.ST_INIT = 1;
MGIntro.ST_WAITING = 2;

/**
 * @public
 */
MGIntro.prototype.init = function() {
	this.state = MGIntro.ST_INIT;
	if ( Global.level === 1 ) {
		this.createHelp();
	}
	else {
		this.onIntro();
	}
};

/**
 * @public
 * @param {boolean} win
 */
MGIntro.prototype.createOutro = function( win ) {
	this.state = MGIntro.ST_INIT;
	this.m_win = win;
};

MGIntro.prototype.onInitOutro = function() {
	this.state = MGIntro.ST_WAITING;
};

MGIntro.prototype.createHelp = function() {
	var popup = this.game.hud().addPopup( GuiPopupHelpMinigame, 'mcGuiPopupHelp', 0, 0 );
	popup.addParams( this );
};

MGIntro.prototype.onIntro = function() {
	this.state = MGIntro.ST_NONE;
	this.game.hud().pauseTime( false );
	this.game.board.activePress = true;

	for ( var k = 1; k <= 3; k++ ) {
		this.game.hud().onShowArrow( true, k );
	}

	Application.instance.playSound( 'SND_MINIGAME_RUFUS' );
};

/**
 * @public
 */
MGIntro.prototype.free = function() {

};

/**
 * @public
 * @param {number} dt
 */
MGIntro.prototype.update = function( dt ) {
	if ( this.state === MGIntro.ST_WAITING ) {
		this.m_timeFinish += dt;
		if ( this.m_timeFinish >= 800 ) {
			this.m_timeFinish = 0;
			this.state = MGIntro.ST_NONE;
			this.game.onFinishMiniGame();
		}
	}
};


/**
 * @constructor
 * @struct
 * @param {MGGame} game
 * @param {SDisplayObjectContainer} canvas
 * @param {number} x
 * @param {number} y
 */
function MGRufus( game, canvas, x, y ) {
	/** @type {MGGame} */
	this.m_game = game;
	/** @type {SDisplayObjectContainer} */
	this.m_canvas = canvas;
	/** @type {string} */
	this.m_state = '';
	/** @type {string} */
	this.m_skin = '';
	/** @type {string} */
	this.m_className = 'rufus';
	/** @type {number} */
	this.chewCounter = 0;
	/** @type {number} */
	this.endCounter = 0;
	/** @type {number} */
	this.x = 0;
	/** @type {number} */
	this.y = 0;
	/** @type {boolean} */
	this.m_isAwaitingDelete = false;
	/** @type {Character} */
	this.m_character = null;
	/** @type {LinearMovement} */
	this.movement = null;
	/** @type {number} */
	this.m_timeChew = 0;

	this.x = x;
	this.y = y;
	this.m_character = new Character( this.x, this.y, this.m_canvas );
	this.m_character.addState( MGRufus.ST_RUFUS_ELECTROCUTED, 'rufus_electrocuted' );
	this.m_character.addState( MGRufus.ST_RUFUS_APPEAR, 'rufus_appear' );
	this.m_character.addState( MGRufus.ST_RUFUS_STAND, 'rufus_stand' );
	this.m_character.addState( MGRufus.ST_RUFUS_WALK, 'rufus_walk' );
	this.m_character.addState( MGRufus.ST_RUFUS_CHEW, 'rufus_chew' );
	this.m_character.addState( MGRufus.ST_RUFUS_LOSE, 'rufus_lose' );
	this.m_character.addState( MGRufus.ST_RUFUS_WIN, 'rufus_win' );

	this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.gotoState( MGRufus.ST_RUFUS_APPEAR );
}

/** @const {string} */ MGRufus.ST_RUFUS_ELECTROCUTED = 'st_electrocuted';
/** @const {string} */ MGRufus.ST_RUFUS_APPEAR = 'st_appear';
/** @const {string} */ MGRufus.ST_RUFUS_STAND = 'st_stand';
/** @const {string} */ MGRufus.ST_RUFUS_WALK = 'st_walk';
/** @const {string} */ MGRufus.ST_RUFUS_CHEW = 'st_chew';
/** @const {string} */ MGRufus.ST_RUFUS_LOSE = 'st_lose';
/** @const {string} */ MGRufus.ST_RUFUS_WIN = 'st_win';

/** @const {number} */ MGRufus.TOTAL_COUNT_CHEW = 3;
/** @const {number} */ MGRufus.TOTAL_COUNT_FINISH = 2;

/**
 * @public
 */
MGRufus.prototype.onWalk = function() {
	var speedRufus = 0.32;
	var endX = this.m_game.positionTarget() - 50;
	this.movement = new LinearMovement( this.x, this.y, speedRufus );
	this.movement.setCallbacks( this, this.onEndMovement, null );
	this.movement.gotoPosition( endX, this.y );

	this.gotoState( MGRufus.ST_RUFUS_WALK );
};

/**
 * @param {Movement} m
 */
MGRufus.prototype.onEndMovement = function( m ) {
	Application.instance.playSound( 'SND_RUFUS_CUT' );
	this.gotoState( MGRufus.ST_RUFUS_CHEW );

	if ( this.movement ) {
		this.movement.free();
		this.movement = null;
	}
};

/**
 * @public
 * @param {string} state
 */
MGRufus.prototype.onEndAnimation = function( state ) {
	switch ( state ) {
		case MGRufus.ST_RUFUS_APPEAR:
			this.m_game.intro.init();
			this.gotoState( MGRufus.ST_RUFUS_STAND );
			break;
		case MGRufus.ST_RUFUS_ELECTROCUTED:
			this.gotoState( MGRufus.ST_RUFUS_LOSE );
			break;
		case MGRufus.ST_RUFUS_CHEW:
			this.chewCounter ++;
			if ( this.chewCounter === MGRufus.TOTAL_COUNT_CHEW ) {
				this.m_game.onResultMinigame();
			}
			break;
		case MGRufus.ST_RUFUS_LOSE:
		case MGRufus.ST_RUFUS_WIN:
			this.endCounter ++;
			if ( this.endCounter === MGRufus.TOTAL_COUNT_FINISH ) {
				this.m_game.intro.onInitOutro();
			}
			break;
	}
};

MGRufus.prototype.free = function() {
	if ( this.m_character !== null ) {
		this.m_character.free();
		this.m_character = null;
	}

	if ( this.movement !== null ) {
		this.movement.free();
		this.movement = null;
	}
	this.m_canvas = null;
};

/**
 * @public
 * @return {SDisplayObjectContainer}
 */
MGRufus.prototype.canvas = function() {
	return this.m_canvas;
};

/**
 * @public
 * @return {string}
 */
MGRufus.prototype.state = function() {
	return this.m_state;
};

/**
 * @public
 * @param {number} px
 * @param {number} py
 */
MGRufus.prototype.setPosition = function( px, py ) {
	this.x = px;
	this.y = py;
	if ( this.m_character !== null ) {
		this.m_character.setPosition( this.x, this.y );
	}
};

/**
 * @public
 * @param {string} state
 */
MGRufus.prototype.gotoState = function( state ) {
	if ( state !== this.m_state ) {
		this.m_character.gotoState( state );
		this.m_state = state;
	}
};

/**
 * @public
 * @param {number} dt
 */
MGRufus.prototype.update = function( dt ) {
	if ( this.m_character !== null ) {
		this.m_character.update( dt );
	}

	if ( this.m_state === MGRufus.ST_RUFUS_CHEW ) {
		this.m_timeChew += dt;
		if ( this.m_timeChew >= 600 ) {
			this.m_timeChew = 0;
			Application.instance.playSound( 'SND_RUFUS_CUT' );
		}
	}

	if ( this.m_state === MGRufus.ST_RUFUS_ELECTROCUTED ) {
		if ( this.m_character.clip.currentFrame % 2 == 0 ) {
			this.m_game.showWorldFilter( false );
		}
		else {
			this.m_game.showWorldFilter( true );
		}
	}

	if ( this.movement !== null ) {
		var x = this.movement.getX();
		var y = this.movement.getY();
		this.setPosition( x, y );

		this.movement.update( dt );
	}
};

/**
 * @constructor
 * @struct
 * @param {SDisplayObjectContainer} canvas
 * @param {number} x
 * @param {number} y
 * @param {number} id
 */
function MGSwitch( canvas, x, y, id ) {
	/** @type {SDisplayObjectContainer} */
	this.m_canvas = canvas;
	/** @type {string} */
	this.m_state = '';
	/** @type {string} */
	this.m_skin = '';
	/** @type {string} */
	this.m_className = 'switch';
	/** @type {number} */
	this.x = 0;
	/** @type {number} */
	this.y = 0;
	/** @type {number} */
	this.idSelect = 0;
	/** @type {boolean} */
	this.m_isAwaitingDelete = false;
	/** @type {Animation|SSprite} */
	this.clip = null;
	/** @type {Character} */
	this.m_character = null;

	this.x = x;
	this.y = y;
	this.idSelect = id;
	this.m_character = new Character( this.x, this.y, this.m_canvas );
	this.m_character.addState( MGSwitch.ST_SWITCH_ON,     'mcSwitch_on' );
	this.m_character.addState( MGSwitch.ST_SWITCH_OFF,    'mcSwitch_off' );
	this.m_character.addState( MGSwitch.ST_SWITCH_NEU,    'mcSwitch_ne' );
	this.m_character.addState( MGSwitch.ST_SWITCH_ACTIVE, 'mcSwitch_active' );
	this.m_character.addState( MGSwitch.ST_SWITCH_FAILED, 'mcSwitch_failed' );
	this.m_character.addState( MGSwitch.ST_SWITCH_NEUTRO, 'mcSwitch_neutral' );

	this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.gotoState( MGSwitch.ST_SWITCH_OFF );
}

/** @const {string} */ MGSwitch.ST_SWITCH_ON = 'st_on';
/** @const {string} */ MGSwitch.ST_SWITCH_OFF = 'st_off';
/** @const {string} */ MGSwitch.ST_SWITCH_NEU = 'st_neu';
/** @const {string} */ MGSwitch.ST_SWITCH_ACTIVE = 'st_active';
/** @const {string} */ MGSwitch.ST_SWITCH_FAILED = 'st_failed';
/** @const {string} */ MGSwitch.ST_SWITCH_NEUTRO = 'st_neutral';

/**
 * @public
 * @param {string} state
 */
MGSwitch.prototype.onEndAnimation = function( state ) {
	switch ( state ) {
		case MGSwitch.ST_SWITCH_ACTIVE:
			break;
		case MGSwitch.ST_SWITCH_OFF:
			break;
	}
};

MGSwitch.prototype.free = function() {
	if ( this.m_character !== null ) {
		this.m_character.free();
		this.m_character = null;
		this.clip = null;
	}

	this.m_canvas = null;
};

/**
 * @public
 * @return {SDisplayObjectContainer}
 */
MGSwitch.prototype.canvas = function() {
	return this.m_canvas;
};

/**
 * @public
 * @return {string}
 */
MGSwitch.prototype.state = function() {
	return this.m_state;
};

/**
 * @public
 * @param {number} px
 * @param {number} py
 */
MGSwitch.prototype.setPosition = function( px, py ) {
	this.x = px;
	this.y = py;
	if ( this.clip ) {
		this.clip.position.x = this.x;
		this.clip.position.y = this.y;
	}
};

/**
 * @public
 * @param {string} state
 */
MGSwitch.prototype.gotoState = function( state ) {
	if ( state !== this.m_state ) {
		this.m_character.gotoState( state );
		this.clip = this.m_character.clip;

		this.m_state = state;
	}
};

/**
 * @public
 * @param {number} dt
 */
MGSwitch.prototype.update = function( dt ) {
	if ( this.m_character !== null ) {
		this.m_character.update( dt );
	}
};

/**
 * @constructor
 * @struct
 * @param {SDisplayObjectContainer} canvas
 * @param {number} x
 * @param {number} y
 * @param {number} id
 */
function MGTarget( canvas, x, y, id ) {
	/** @type {SDisplayObjectContainer} */
	this.m_canvas = canvas;
	/** @type {string} */
	this.m_state = '';
	/** @type {string} */
	this.m_skin = '';
	/** @type {string} */
	this.m_className = 'target';
	/** @type {number} */
	this.x = 0;
	/** @type {number} */
	this.y = 0;
	/** @type {boolean} */
	this.m_isAwaitingDelete = false;
	/** @type {Animation|SSprite} */
	this.clip = null;
	/** @type {Character} */
	this.m_character = null;
	/** @type {number} */
	this.idSelect = 0;
	/** @type {Rectangle} */
	this.bounds = null;
	/** @type {boolean} */
	this.isDisabled = false;
	/** @type {boolean} */
	this.boundsView = false;

	this.x = x;
	this.y = y;
	this.idSelect = id;
	this.bounds = new Rectangle( -30, -40, 60, 80 );
	this.boundsView = false;

	this.m_character = new Character( this.x, this.y, this.m_canvas );
	this.m_character.addState( MGTarget.ST_TARGET_TOUCH, 'mcTarget_choice' );
	this.m_character.addState( MGTarget.ST_TARGET_OFF,   'mcTarget_off' );
	this.m_character.addState( MGTarget.ST_TARGET_ON,    'mcTarget_on' );

	this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.gotoState( MGTarget.ST_TARGET_OFF );

	if ( this.boundsView ) {
		var cc = new SGraphics();
		cc.drawRectangle( this.bounds.x, this.bounds.y, this.bounds.w, this.bounds.h, 1, 0xFF0000, 0xFF0000, 1, 0.1 );
		this.clip.addChild( cc );
	}
}

/** @const {string} */ MGTarget.ST_TARGET_TOUCH = 'st_touch';
/** @const {string} */ MGTarget.ST_TARGET_OFF   = 'st_off';
/** @const {string} */ MGTarget.ST_TARGET_ON    = 'st_on';

MGTarget.prototype.free = function() {
	if ( this.m_character !== null ) {
		this.m_character.free();
		this.m_character = null;
		this.clip = null;
	}

	this.m_canvas = null;
	this.bounds = null;
};

/**
 * @public
 * @param {string} st
 */
MGTarget.prototype.addEffectTarget = function( st ) {
	var skin = ( st === 'on' )? 'vfxGoodChoice':'vfxBadChoice';
	Application.instance.effectManager.createEffectAnimo( skin, this.x, this.y, this.m_canvas, 0 );
};

/**
 * @public
 * @param {string} state
 */
MGTarget.prototype.onEndAnimation = function( state ) {
	switch ( state ) {
		case MGTarget.ST_TARGET_TOUCH:
			this.gotoState( MGTarget.ST_TARGET_OFF );
			break;
	}
};

/**
 * @public
 * @return {SDisplayObjectContainer}
 */
MGTarget.prototype.canvas = function() {
	return this.m_canvas;
};

/**
 * @public
 * @return {string}
 */
MGTarget.prototype.state = function() {
	return this.m_state;
};

/**
 * @public
 * @param {number} px
 * @param {number} py
 */
MGTarget.prototype.setPosition = function( px, py ) {
	this.x = px;
	this.y = py;
	if ( this.clip ) {
		this.clip.position.x = this.x;
		this.clip.position.y = this.y;
	}
};

/**
 * @public
 * @param {string} state
 */
MGTarget.prototype.gotoState = function( state ) {
	if ( state !== this.m_state ) {
		this.m_character.gotoState( state );
		this.clip = this.m_character.clip;

		this.m_state = state;
	}
};

/**
 * @public
 * @param {number} dt
 */
MGTarget.prototype.update = function( dt ) {
	if ( this.m_character !== null ) {
		this.m_character.update( dt );
	}
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 */
MGTarget.prototype.onPointerPress = function( x, y ) {
	if ( this.isDisabled ) {
		return;
	}
	if ( this.bounds.intersectPoint( x - this.x, y - this.y ) ) {
		MGGame.instance.checkCircuit( this.idSelect );
		this.gotoState( MGTarget.ST_TARGET_TOUCH );
	}
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 */
MGTarget.prototype.onPointerRelease = function( x, y ) {
	if ( this.isDisabled ) {
		return;
	}
};


/**
 * @constructor
 * @struct
 * @param {SDisplayObjectContainer} canvas
 * @param {MGData} data
 * @param {number} level
 * @param {number} idSelect
 */
function MGBoard( canvas, canvasObject, data, level, idSelect ) {
	/** @type {SDisplayObjectContainer} */
	this.m_canvas = canvas;
	/** @type {SDisplayObjectContainer} */
	this.m_canvasObject = canvasObject;
	/** @type {MGData} */
	this.m_data = data;
	/** @type {number} */
	this.m_level = level;
	/** @type {string} */
	this.m_className = 'board';
	/** @type {number} */
	this.idSelect = 0;
	/** @type {number} */
	this.m_maxControls = 0;
	/** @type {Array.<MGSwitch>} */
	this.m_switchs = [];
	/** @type {Array.<MGTarget>} */
	this.m_targets = [];
	/** @type {Array.<MGLine>} */
	this.m_lines = [];
	/** @type {boolean} */
	this.m_isAwaitingDelete = false;
	/** @type {boolean} */
	this.activePress = false;

	this.idSelect = idSelect;
	this.m_maxControls = this.m_data.totalControls;
	this.createSlots();
}

/** @const {number} */ MGBoard.SIZE_CONTROL = 265;

/**
 * @public
 */
MGBoard.prototype.createSlots = function() {
	for ( var k = 0; k < this.m_maxControls; k++ ) {
		var skin = this.m_data['skinLine' + ( k + 1 )];
		var dtSlot = this.m_data['slot' + ( k + 1 )];
		var width = MGBoard.SIZE_CONTROL * this.m_maxControls;
		var initX = ( ( Application.APP_WIDTH * 0.5 ) - ( width * 0.5 ) ) + ( MGBoard.SIZE_CONTROL * 0.5 );
		var sX = initX + ( ( dtSlot[0] - 1 ) * MGBoard.SIZE_CONTROL );
		var tX = initX + ( ( dtSlot[1] - 1 ) * MGBoard.SIZE_CONTROL );

		var sw = new MGSwitch( this.m_canvas, sX, 238, ( k + 1 ) );
		var tg = new MGTarget( this.m_canvas, tX, 570, ( k + 1 ) );
		var ln = new MGLine( this.m_canvasObject, ( Application.APP_WIDTH * 0.5 ), ( Application.APP_HEIGHT * 0.5 ), skin );
		this.m_switchs.push( sw );
		this.m_targets.push( tg );
		this.m_lines.push( ln );
	}

	this.m_switchs[ this.idSelect - 1 ].gotoState( MGSwitch.ST_SWITCH_NEU );
};

/**
 * @public
 */
MGBoard.prototype.changeAlert = function() {
	this.m_switchs[ this.idSelect - 1 ].gotoState( MGSwitch.ST_SWITCH_NEUTRO );
};

/**
 * @public
 */
MGBoard.prototype.destroySwitchs = function() {
	for ( var k = 0; k < this.m_switchs.length; k++ ) {
		if ( this.m_switchs[k] !== null ) {
			this.m_switchs[k].free();
			this.m_switchs[k] = null;
			this.m_switchs.splice( k , 1 );
			k--;
		}
	}
	this.m_switchs = [];
};

/**
 * @public
 */
MGBoard.prototype.destroyTargets = function() {
	for ( var k = 0; k < this.m_targets.length; k++ ) {
		if ( this.m_targets[k] !== null ) {
			this.m_targets[k].free();
			this.m_targets[k] = null;
			this.m_targets.splice( k , 1 );
			k--;
		}
	}
	this.m_targets = [];
};

/**
 * @public
 */
MGBoard.prototype.disabledAllTarget = function() {
	for ( var k = 0; k < this.m_targets.length; k++ ) {
		if ( this.m_targets[k] !== null ) {
			this.m_targets[k].isDisabled = true;
		}
	}
};

/**
 * @public
 */
MGBoard.prototype.onShowResult = function( id ) {
	this.disabledAllTarget();
	this.m_switchs[ this.idSelect - 1 ].gotoState( ( this.idSelect === id ) ? MGSwitch.ST_SWITCH_ACTIVE:MGSwitch.ST_SWITCH_FAILED );
	this.m_targets[ id - 1 ].gotoState( MGTarget.ST_TARGET_ON );

	var fx = ( ( this.idSelect === id ) ? 'on':'off' );
	this.m_targets[ id - 1 ].addEffectTarget( fx );
};

/**
 * @public
 * @return {number}
 */
MGBoard.prototype.onTargetPositionX = function( id ) {
	return this.m_targets[ id - 1 ].x;
};

/**
 * @public
 * @param {number} dt
 */
MGBoard.prototype.update = function( dt ) {
	for ( var k = 0; k < this.m_switchs.length; k++ ) {
		if ( this.m_switchs[k] !== null ) {
			this.m_switchs[k].update( dt );
		}
	}

	for ( var p = 0; p < this.m_targets.length; p++ ) {
		if ( this.m_targets[p] !== null ) {
			this.m_targets[p].update( dt );
		}
	}
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 */
MGBoard.prototype.onPointerPress = function( x, y ) {
	if ( !this.activePress ) {
		return;
	}

	for ( var p = 0; p < this.m_targets.length; p++ ) {
		if ( this.m_targets[p] !== null ) {
			this.m_targets[p].onPointerPress( x, y );
		}
	}
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 */
MGBoard.prototype.onPointerRelease = function( x, y ) {
	if ( !this.activePress ) {
		return;
	}

	for ( var p = 0; p < this.m_targets.length; p++ ) {
		if ( this.m_targets[p] !== null ) {
			this.m_targets[p].onPointerRelease( x, y );
		}
	}
};

/**
 * @public
 */
MGBoard.prototype.free = function() {
	this.destroySwitchs();
	this.destroyTargets();

	this.m_canvas = null;
	this.m_canvasObject = null;
};

/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} rawData
 * @extends SWorldActor
 */
function Chaser( canvas, world, x, y, rawData ) {
	SWorldActor.call( this, canvas, world, x, y );

	/** @type {number} */
	this.initX = x;
	/** @type {number} */
	this.offsetRight = rawData['offsetRight'];
	/** @type {number} */
	this.offsetLeft = rawData['offsetLeft'];
	/** @type {LinearMovement} */
	this.movement = null;
	/** @type {number} */
	this.speedX = window['platform_general']['player']['chaserSpeed'];
	/** @type {boolean} */
	this.enableDamage = true;
	/** @type {number} */
	this.damage = 1;
	/** @type {number} */
	this.m_timeMove = 0;
	/** @type {boolean} */
	this.m_playSoundMove = false;
	/** @type {SDisplayObjectContainer} */
	this.canvasFX = Application.instance.addDisplayContainer();
	GuiGame.instance.canvasEffects.addChild( this.canvasFX );
	this.canvasFX.setPosition( this.m_x, this.m_y );

	/** @type {Rectangle} */
	this.sensorArea = new Rectangle();
	this.sensorArea.x = this.initX - this.offsetLeft;
	this.sensorArea.y = this.m_y - 25;
	this.sensorArea.w = this.offsetRight + this.offsetLeft;
	this.sensorArea.h = 50;

	this.vfx = this.m_world.createEffect( 'FxHazardRobotElectric', 0, 0, 0, this.canvasFX );

	this.m_character = new Character( 0, 0, this.m_canvas );
	this.m_character.addState( Chaser.ST_STAND, 'mc_chaser_off' );
	this.m_character.addState( Chaser.ST_STAND_ON, 'mc_chaser_active' );
	this.gotoState( Chaser.ST_STAND );

	/** @type {number} */
	this.waitTimeToChase = window['platform_general']['player']['waitTimeToChase'];

	/** @type {Blinker} */
	this.blinker = null;
}
Application.subclass( Chaser, SWorldActor );

/** @const {string} */ Chaser.ST_STAND = 'stand';
/** @const {string} */ Chaser.ST_STAND_ON = 'standOn';

/**
 * @param {Movement} m
 */
Chaser.prototype.onEndMovement = function( m ) {
	if ( this.movement ) {
		this.m_x = this.movement.getX();

		this.movement.free();
		this.movement = null;
	}
	this.enableDamage = true;

	this.gotoState( Chaser.ST_STAND );
};

Chaser.prototype.setMovement = function() {
	if ( this.movement ) {
		this.m_x = this.movement.getX();

		this.movement.free();
		this.movement = null;
	}

	var playerX = this.m_world.player().getX();
	var nextX = 0;
	if ( this.m_x > playerX ) {
		nextX = this.initX - this.offsetLeft;
	}
	else if ( this.m_x < playerX ) {
		nextX = this.initX + this.offsetRight;
	}

	this.movement = new LinearMovement( this.m_x, this.m_y, this.speedX );
	this.movement.setCallbacks( this, this.onEndMovement, null );
	this.movement.gotoPosition( nextX, this.m_y, this.speedX );

	Application.instance.playSound( 'SND_OBJ_CHASER_DETECT' );
	this.m_playSoundMove = false;

	this.gotoState( Chaser.ST_STAND_ON );
};

/**
 * @override
 * @param {number} dt
 */
Chaser.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );

	this.canvasFX.setPosition( this.m_x, this.m_y );

	if ( this.blinker ) {
		this.blinker.update( dt );
		this.m_clip.setTint( this.blinker.color );
		if ( this.blinker.isDone ) {
			this.setMovement();
			this.blinker = null;
		}
		return;
	}

	var actor = this.m_world.player();

	if ( this.movement ) {
		this.m_x = this.movement.getX();
		this.movement.update( dt );

		var validateSound = this.isInCamera( 50 );
		if ( validateSound ) {
			this.m_timeMove += dt;
			if ( this.m_timeMove >= 100 && !this.m_playSoundMove ) {
				this.m_timeMove = 0;
				this.m_playSoundMove = true;
				Application.instance.playSound( 'SND_OBJ_CHASER_MOVE' );
			}
		}
	}
	else if ( actor && actor.getBounds() ) {
		var bounds = actor.getBounds().clone();
		if ( bounds ) {
			bounds.x += actor.getX();
			bounds.y += actor.getY();
			if ( this.sensorArea.intersectRect( bounds ) ) {
				this.blinker = new Blinker( this.waitTimeToChase, 50 );
			}
		}
	}

	if ( this.enableDamage && actor && !actor.blinker && actor.hitTest( this ) ) {
		actor.onEnemyCollision( this, this.damage );
		this.enableDamage = false;
	}
};

/**
 * @override
 */
Chaser.prototype.free = function() {
	if ( this.vfx ) {
		this.vfx.isAwaitingDelete = true;
		this.vfx = null;
	}

	this.canvasFX = null;

	this.blinker = null;

	SWorldActor.prototype.free.call( this );
	if ( this.movement ) {
		this.movement.free();
		this.movement = null;
	}
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} rawData
 * @param {number} idGoo
 * @extends SWorldActor
 */
function Goo( canvas, world, x, y, rawData, idGoo ) {
	/** @type {string} */
	this.m_stateSound = '';
	/** @type {number} */
	this.idGoo = idGoo;
	/** @type {number} */
	this.m_countFX = 0;

	SWorldActor.call( this, canvas, world, x, y );

	/** @type {number} */
	this.poolLength = rawData['length'];

	/** @type {boolean} */
	this.isPlayerPosRelative = ( rawData['isPlayerPosRelative'] === 1 );
	/** @type {number} */
	this.playerX1 = rawData['playerX1'];
	/** @type {number} */
	this.playerY1 = rawData['playerY1'];
	/** @type {number} */
	this.playerX2 = rawData['playerX2'];
	/** @type {number} */
	this.playerY2 = rawData['playerY2'];

	/** @type {number} */
	this.damage = 1; // Application.config['hazards']['gooDamage'];

	this.m_character = new Character( 0, 0, this.m_canvas );
	this.m_character.addState( Goo.ST_STAND, 'mcGoo' );
	this.gotoState( Goo.ST_STAND );
	this.m_clip.scale.x = this.poolLength / 250;  //  250 from animo.
	this.m_clip.alpha = 0.0;

	/** @type {number} */
	this.timerToTeleport = 0;

	var numVfx = Math.ceil( this.poolLength / 250 ); // Single vfx lenght = 250.
	numVfx--;
	var vfxSpaceX = numVfx * 250;
	var refX = this.m_x - vfxSpaceX * 0.5 + 250 * 0.5;

	/** @type {Array.<SEffect>} */
	this.vfx = [];
	for ( var i  = 0; i < numVfx; i++ ) {
		this.m_countFX += 1;
		this.vfx.push( this.m_world.createEffect( 'FxHazardAcidSlime', refX + i * 250, this.m_y, 0, this.m_canvas ) );
	}

	this.m_stateSound = Goo.ST_SOUND_OFF;
}
Application.subclass( Goo, SWorldActor );

/** @const {string} */ Goo.ST_STAND = 'stand';
/** @const {string} */ Goo.ST_SOUND_OFF = 'st_sound_off';
/** @const {string} */ Goo.ST_SOUND_ON = 'st_sound_on';

/**
 * @public
 */
Goo.prototype.validateSoundLoop = function() {
	var size = Math.floor( this.m_clip.scale.x * 110 );
	var validateSound = this.isInCamera( size );
	var idSound = '';
	if ( validateSound ) {
		if ( this.m_stateSound === Goo.ST_SOUND_OFF ) {
			this.m_stateSound = Goo.ST_SOUND_ON;
			idSound = String( 'SND_OBJ_PINK_' + this.idGoo );
			if ( !Application.instance.isPlayingSound( idSound ) ) {
				Application.instance.playSound( idSound );
			}
		}
	}
	else {
		if ( this.m_stateSound === Goo.ST_SOUND_ON ) {
			this.m_stateSound = Goo.ST_SOUND_OFF;
			idSound = String( 'SND_OBJ_PINK_' + this.idGoo );
			if ( Application.instance.isPlayingSound( idSound ) ) {
				Application.instance.stopSound( idSound );
			}
		}
	}
};

/**
 * @override
 * @param {number} dt
 */
Goo.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );

	this.validateSoundLoop();
	var actor = /** @type {PlayerPlatform} */ ( this.m_world.player() );
	if ( this.timerToTeleport > 0 ) {
		this.timerToTeleport -= dt;
		if ( this.timerToTeleport <= 0 ) {
			this.timerToTeleport = 0;

			if ( this.m_x > actor.getX() ) {
				if ( this.isPlayerPosRelative ) {
					actor.setPosition( this.m_x + this.playerX1, this.m_y + this.playerY1 );
				}
				else {
					actor.setPosition( this.playerX1, this.playerY1 );
				}
			}
			else {
				if ( this.isPlayerPosRelative ) {
					actor.setPosition( this.m_x + this.playerX2, this.m_y + this.playerY2 );
				}
				else {
					actor.setPosition( this.playerX2, this.playerY2 );
				}
			}

			actor.hitByGoo = false;
			actor.gotoState( Player.ST_PLAYER_STAND );
			actor.resetControl();
			actor.setDisablePlayer( false );
			actor.isReadyToTeleport = false;
		}
	}
	else if ( actor.hitTest( this ) ) {
		actor.resetControl();
		actor.onEnemyCollision( this, this.damage );
		actor.setDisablePlayer( true );
		this.timerToTeleport = 10;
		actor.isReadyToTeleport = true;
	}
};

Goo.prototype.free = function() {
	for ( var i = 0; i < this.vfx.length; i++ ) {
		if ( this.vfx[i] ) {
			this.vfx[i].isAwaitingDelete = true;
		}
	}
	this.m_stateSound = Goo.ST_SOUND_OFF;
	var idSound = String( 'SND_OBJ_PINK_' + this.idGoo );
	Application.instance.stopSound( idSound );
	SWorldActor.prototype.free.call( this );
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} rawData
 * @param {number} idOrb
 * @extends SWorldActor
 */
function Orb( canvas, world, x, y, rawData, idOrb ) {
	/** @type {string} */
	this.m_stateSound = '';
	/** @type {number} */
	this.idOrb = idOrb;
	SWorldActor.call( this, canvas, world, x, y );

	/**
	 * @type {number}
	 */
	this.damage = 1; // Application.config['hazards']['orbDamage'];

	this.m_character = new Character( 0, 0, this.m_canvas );
	this.m_character.addState( Orb.ST_STAND, 'mc_electric_orb' );
	this.gotoState( Orb.ST_STAND );

	this.m_config = {};
	this.m_config['paramsPath'] = Common.getParams( rawData['paramsPath'] );

	this.initMovementPoints();


	if ( rawData && rawData['alwaysAwake'] === 1 ) {
		this.m_isRangeControlled = false;
	}

	/** @type {boolean} */
	this.deleteAtEndPath = false;

	this.m_stateSound = Orb.ST_SOUND_OFF;
	this.vfx = this.m_world.createEffect( 'FxHazardDroneElectric', 0, 0, 0, /** @type {SDisplayObjectContainer} */ ( this.m_clip ) );
}
Application.subclass( Orb, SWorldActor );

/** @const {string} */ Orb.ST_STAND = 'stand';
/** @const {string} */ Orb.ST_SOUND_OFF = 'st_sound_off';
/** @const {string} */ Orb.ST_SOUND_ON = 'st_sound_on';

/**
 * @override
 * @param {number} dt
 */
Orb.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );

	if ( this.movementToPoints ) {
		this.onUpdatePointsMovement( dt );
	}

	var validateSound = this.isInCamera( 50 );
	if ( validateSound ) {
		if ( this.m_stateSound === Orb.ST_SOUND_OFF ) {
			this.m_stateSound = Orb.ST_SOUND_ON;
		}
	}
	else {
		if ( this.m_stateSound === Orb.ST_SOUND_ON ) {
			this.m_stateSound = Orb.ST_SOUND_OFF;
		}
	}

	var actor = this.m_world.player();
	if ( !actor.blinker && actor.hitTest( this ) ) {
		actor.onEnemyCollision( this, this.damage );
	}
};

/**
 * @override
 * @param {PointsMovement} movement
 */
Orb.prototype.onCompletePath = function( movement ) {
	if ( this.deleteAtEndPath ) {
		this.m_isAwaitingDelete = true;
	}
};

Orb.prototype.free = function() {
	this.vfx.isAwaitingDelete = true;
	SWorldActor.prototype.free.call( this );
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} rawData
 * @extends MobilePlatform
 */
function FallingPlatform( canvas, world, x, y, rawData ) {
	MobilePlatform.call( this, canvas, world, 'mc_falling_platform_inactive', x, y, null, null );

	/** @type {number} */
	this.damage = 1; // Application.config['hazards']['fallingPlatformDamage'];

	/** @type {number} */
	this.speedDown = rawData['speedDown'];
	/** @type {number} */
	this.speedUp = rawData['speedUp'];
	/** @type {number} */
	this.distance = rawData['distance'];

	/** @type {Rectangle} */
	this.sensorArea = new Rectangle();
	this.sensorArea.x = this.m_x - 65;
	this.sensorArea.y = this.m_y;
	this.sensorArea.w = 130;
	this.sensorArea.h = this.distance;

	/** @type {Rectangle} */
	this.damageArea = new Rectangle();
	this.damageArea.x = this.m_x - 65;
	this.damageArea.y = this.m_y + 25;
	this.damageArea.w = 130;
	this.damageArea.h = 25;

	/** @type {number} */
	this.moveState = FallingPlatform.ST_MOVE_STAND;

	/** @type {number} */
	this.timerWait = 0;
	/** @type {number} */
	this.waitTimeToFall = rawData['waitTimeToFall'];
	/** @type {number} */
	this.waitTimeToGoUp = rawData['waitTimeToGoUp'];
	/** @type {number} */
	this.frameCounter = 0;

	/** @type {number} */
	this.timerDisable = 0;

	this.m_clip.setTint( 0xFFFFFF );
}
Application.subclass( FallingPlatform, MobilePlatform );

/** @const {number} */ FallingPlatform.ST_MOVE_STAND = 0;
/** @const {number} */ FallingPlatform.ST_MOVE_WAIT_TO_DOWN = 1;
/** @const {number} */ FallingPlatform.ST_MOVE_DOWN = 2;
/** @const {number} */ FallingPlatform.ST_MOVE_WAIT_TO_UP = 3;
/** @const {number} */ FallingPlatform.ST_MOVE_UP = 4;

/**
 * @override
 * @param {number} dt
 */
FallingPlatform.prototype.update = function( dt ) {
	MobilePlatform.prototype.update.call( this, dt );

	var actor = this.m_world.player();
	var bounds = null;
	if ( actor && actor.getBounds() ) {
		bounds = actor.getBounds().clone();
	}

	switch ( this.moveState ) {
		case FallingPlatform.ST_MOVE_STAND:
			if ( bounds ) {
				bounds.x += actor.getX();
				bounds.y += actor.getY();

				if ( this.sensorArea.intersectRect( bounds ) ) {
					this.moveState = FallingPlatform.ST_MOVE_WAIT_TO_DOWN;
					this.timerWait = this.waitTimeToFall;
					Application.instance.playSound( 'SND_OBJ_PLATFORM_ALERT' );
				}
			}
			break;
		case FallingPlatform.ST_MOVE_WAIT_TO_DOWN:
			if ( this.timerWait > 0 ) {
				this.timerWait -= dt;
				if ( this.timerWait <= 0 ) {
					this.timerWait = 0;
					this.moveState = FallingPlatform.ST_MOVE_DOWN;
					var dataMov = new DataMovement( 'speed:' + this.speedDown + ';loop:0;reverse:0', 'rlc:0,' + this.distance );
					this.setMotionController( dataMov );
					this.m_clip.setTint( 0xFFFFFF );
					this.frameCounter = 0;

					this.setActorClip( 'mc_falling_platform' );
				}
				else {
					this.frameCounter++;
					if ( this.frameCounter % 2 ) {
						this.m_clip.setTint( 0x0000FF );
					}
					else {
						this.m_clip.setTint( 0xFF0000 );
					}
				}
			}
			break;
		case FallingPlatform.ST_MOVE_DOWN:
			if ( this.checkIfMoveEnded() ) {
				this.m_motionController.free();
				this.m_motionController = null;

				this.moveState = FallingPlatform.ST_MOVE_WAIT_TO_UP;
				this.timerWait = this.waitTimeToGoUp;

				this.setActorClip( 'mc_falling_platform_inactive' );
			}
			break;
		case FallingPlatform.ST_MOVE_WAIT_TO_UP:
			if ( this.timerWait > 0 ) {
				this.timerWait -= dt;
				if ( this.timerWait <= 0 ) {
					this.timerWait = 0;
					this.moveState = FallingPlatform.ST_MOVE_UP;
					var dataMov = new DataMovement( 'speed:' + this.speedUp + ';loop:0;reverse:0', 'rlc:0,-' + this.distance );
					this.setMotionController( dataMov );

					this.setActorClip( 'mc_falling_platform' );
				}
			}
			break;
		case FallingPlatform.ST_MOVE_UP:
			if ( this.checkIfMoveEnded() ) {
				this.m_motionController.free();
				this.m_motionController = null;

				this.moveState = FallingPlatform.ST_MOVE_STAND;

				this.setActorClip( 'mc_falling_platform_inactive' );
			}
			break;
	}

	if ( this.timerDisable <= 0 ) {
		if ( bounds ) {
			bounds.x += actor.getX();
			bounds.y += actor.getY();

			var area = this.damageArea.clone();
			area.x = this.m_x - 65;
			area.y = this.m_y + 25;

			if ( !actor.blinker && area.intersectRect( bounds ) ) {
				actor.onEnemyCollision( this, this.damage );
			}
		}
	}
	else {
		this.timerDisable -= dt;
		if ( this.timerDisable < 0 ) {
			this.timerDisable = 0;
		}
	}
};

/**
 * @override
 * @param {string=} clipName
 */
FallingPlatform.prototype.setActorClip = function( clipName ) {
	if ( typeof clipName !== 'undefined' ) {
		if ( this.m_clip ) {
			this.m_canvas.removeChild( this.m_clip );
			this.m_clip.free();
			this.m_clip = null;
		}

		this.m_clip = Application.instance.getClip( clipName );
		this.m_clip.position.x = this.m_x;
		this.m_clip.position.y = this.m_y;
		this.m_canvas.addChild( this.m_clip );
		this.createCorners();
	}
};

/**
 * @return {boolean}
 */
FallingPlatform.prototype.checkIfMoveEnded = function() {
	if ( !this.m_motionController ) {
		return false;
	}

	var stMov = this.m_motionController.m_movements[this.m_motionController.m_currentIndexMovement].m_state;
	return ( stMov === Movement.ST_END );
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} rawData
 * @param {number} idLaser
 * @extends SWorldActor
 */
function Laser( canvas, world, x, y, rawData, idLaser ) {
	/** @type {number} */
	this.idLaser = idLaser;

	SWorldActor.call( this, canvas, world, x, y );
	/** @type {string} */
	this.direction = rawData['direction'];
	/** @type {number} */
	this.rotation = 90;
	/** @type {number} */
	this.animoLength = 200;
	/** @type {number} */
	this.ediLength = rawData['length'];

	/** @type {number} */
	this.damage = 1; // Application.config['hazards']['laserDamage'];

	/** @type {Rectangle} */
	this.damageArea = new Rectangle();

	switch ( this.direction ) {
		case 'down':
			this.rotation = 90;
			this.damageArea.x = this.m_x - 25;
			this.damageArea.y = this.m_y;
			this.damageArea.w = 50;
			this.damageArea.h = this.ediLength;
			break;
		case 'up':
			this.rotation = -90;
			this.damageArea.x = this.m_x - 25;
			this.damageArea.y = this.m_y - this.ediLength;
			this.damageArea.w = 50;
			this.damageArea.h = this.ediLength;
			break;
		case 'left':
			this.rotation = 180;
			this.damageArea.x = this.m_x - this.ediLength;
			this.damageArea.y = this.m_y - 25;
			this.damageArea.w = this.ediLength;
			this.damageArea.h = 50;
			break;
		case 'right':
			this.rotation = 0;
			this.damageArea.x = this.m_x;
			this.damageArea.y = this.m_y - 25;
			this.damageArea.w = this.ediLength;
			this.damageArea.h = 50;
			break;
	}

	/** @type {Animation} */
	this.laserClip = Application.instance.getAnimation( 'mcLaserBeam' );
	this.laserClip.setPosition( x, y );
	this.laserClip.scale.y = 0.01;
	this.laserClip.rotation = this.rotation * ( Math.PI / 180 ) - Math.PI / 2;
	this.m_canvas.addChild( this.laserClip );

	this.m_character = new Character( 0, 0, this.m_canvas );
	this.m_character.addState( Laser.ST_STAND, 'mc_laser_inactive' );
	this.m_character.addState( Laser.ST_TURN_ON, 'mc_laser_on', [{ caller: this, callback: this.createSound, frame:20 }] );
	this.m_character.addState( Laser.ST_ON, 'mc_laser_active' );
	this.m_character.addState( Laser.ST_TURN_OFF, 'mc_laser_off' );
	this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.gotoState( Laser.ST_STAND );

	/** @type {number} */
	this.timerDisable = 0;

	/** @type {number} */
	this.timer = 0;
	/** @type {number} */
	this.timeInit = rawData['timeOffset'];
	/** @type {number} */
	this.timeOn = rawData['timeOn'];
	/** @type {number} */
	this.timeOff = rawData['timeOff'];

	/** @type {number} */
	this.dangerState = Laser.ST_DANGER_WAIT;

	this.timer = this.timeInit;

	this.m_isRangeControlled = false;

	/** @type {Blinker} */
	this.blinker = null;

	/** @type {SEffect} */
	this.vfx = null;
}
Application.subclass( Laser, SWorldActor );

/** @const {string} */ Laser.ST_STAND = 'stand';
/** @const {string} */ Laser.ST_TURN_ON = 'turnOn';
/** @const {string} */ Laser.ST_ON = 'on';
/** @const {string} */ Laser.ST_TURN_OFF = 'turnOff';

/** @const {number} */ Laser.ST_DANGER_OFF = 0;
/** @const {number} */ Laser.ST_DANGER_ON = 1;
/** @const {number} */ Laser.ST_DANGER_WAIT = 2;

Laser.prototype.createSound = function () {
	var validateSound = this.isInCamera( 50 );
	if ( validateSound ) {
		Application.instance.playSound( 'SND_OBJ_LASER_PRE' );
	}
};

Laser.prototype.turnOn = function() {
	this.timer = this.timeOn;
	this.dangerState = Laser.ST_DANGER_ON;
	this.laserClip.scale.y = this.ediLength / this.animoLength;

	if ( this.vfx ) {
		this.vfx.isAwaitingDelete = true;
		this.vfx = null;
	}
	var x = 0;
	var y = 0;
	switch ( this.direction ) {
		case 'down':
			x = this.m_x;
			y = this.m_y + this.ediLength;
			break;
		case 'up':
			x = this.m_x;
			y = this.m_y - this.ediLength;
			break;
		case 'left':
			x = this.m_x - this.ediLength;
			y = this.m_y;
			break;
		case 'right':
			x = this.m_x + this.ediLength;
			y = this.m_y;
			break;
	}
	this.vfx = this.m_world.createEffect( 'mc_laser_end', x, y, 0, GuiGame.instance.canvasEffects );
	this.vfx.clip.rotation = this.rotation * ( Math.PI / 180 ) - Math.PI / 2;

	var validateSound = this.isInCamera( 50 );
	if ( validateSound ) {
		Application.instance.playSound( 'SND_OBJ_LASER' );
		Application.instance.playSound( String( 'SND_OBJ_LASER_SHOOT_' + this.idLaser ) );
	}
};

/**
 * @override
 * @param {string} st
 */
Laser.prototype.gotoState = function ( st ) {
	SWorldActor.prototype.gotoState.call( this, st );
	this.m_clip.rotation = this.rotation * ( Math.PI / 180 ) - Math.PI / 2;
};

/**
 * @param {string} st
 */
Laser.prototype.onEndAnimation = function ( st ) {
	switch ( st ) {
		case Laser.ST_TURN_ON:
			this.gotoState( Laser.ST_ON );
			this.turnOn();
			break;
		case Laser.ST_TURN_OFF:
			this.gotoState( Laser.ST_STAND );
			this.timer = this.timeOff;
			break;
	}
};

Laser.prototype.startBlinking = function() {
	this.blinker = new Blinker( 1000, 50 );
};

/**
 * @override
 * @param {number} dt
 */
Laser.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );

	if ( this.blinker ) {
		this.blinker.update( dt );
		this.m_clip.setTint( this.blinker.color );
		if ( this.blinker.isDone ) {
			var validateSound = this.isInCamera( 50 );
			if ( validateSound ) {
				Application.instance.playSound( 'SND_OBJ_LASER_ON' );
			}
			this.gotoState( Laser.ST_TURN_ON );
			this.blinker = null;
		}
		return;
	}

	switch ( this.dangerState ) {
		case Laser.ST_DANGER_WAIT:
			if ( this.timer > 0 ) {
				this.timer -= dt;
				if ( this.timer <= 0 ) {
					this.startBlinking();
				}
			}
			else if ( this.timer === 0 ) {
				this.startBlinking();
			}
			break;
		case Laser.ST_DANGER_ON:
			if ( this.timerDisable <= 0 ) {
				var actor = this.m_world.player();
				if ( actor && !actor.blinker && actor.getBounds() ) {
					var bounds = actor.getBounds().clone();

					if ( bounds ) {
						bounds.x += actor.getX();
						bounds.y += actor.getY();

						if ( this.damageArea.intersectRect( bounds ) ) {
							actor.onEnemyCollision( this, this.damage );
							this.timerDisable = 1000;
						}
					}
				}
			}
			else {
				this.timerDisable -= dt;
				if ( this.timerDisable < 0 ) {
					this.timerDisable = 0;
				}
			}

			if ( this.timer > 0 ) {
				this.timer -= dt;
				if ( this.timer <= 0 ) {
					this.gotoState( Laser.ST_TURN_OFF );

					this.dangerState = Laser.ST_DANGER_OFF;
					this.laserClip.scale.y = 0.01;

					var idSound = String( 'SND_OBJ_LASER_SHOOT_' + this.idLaser );
					if ( Application.instance.isPlayingSound( idSound ) ) {
						Application.instance.stopSound( idSound );
					}

					if ( this.vfx ) {
						this.vfx.isAwaitingDelete = true;
						this.vfx = null;
					}
				}
			}
			break;
		case Laser.ST_DANGER_OFF:
			if ( this.timer > 0 ) {
				this.timer -= dt;
				if ( this.timer <= 0 ) {
					this.startBlinking();
				}
			}
			break;
	}
};

/**
 * @override
 */
Laser.prototype.free = function() {
	if ( this.vfx ) {
		this.vfx.isAwaitingDelete = true;
		this.vfx = null;
	}

	if ( this.laserClip ) {
		this.m_canvas.removeChild( this.laserClip );
	}
	this.laserClip = null;

	this.blinker = null;

	SWorldActor.prototype.free.call( this );
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} rawData
 * @extends SWorldActor
 */
function Barrier( canvas, world, x, y, rawData ) {
	var isVertical = ( rawData['isVertical'] === 1 );
	var sufix = '_2';
	if ( isVertical ) {
		y += 225 * 0.5;
		sufix = '';
	}

	SWorldActor.call( this, canvas, world, x, y );

	/** @type {boolean} */
	this.enableFlipX = false;
	if ( rawData.hasOwnProperty( 'enableFlipX' ) ) {
		this.enableFlipX = ( rawData['enableFlipX'] === 1 );
	}

	/** @type {number} */
	this.linkId = rawData['linkId'];

	/** @type {boolean} */
	this.isInitOpen = ( rawData['initState'] === 1 );

	this.m_character = new Character( 0, 0, this.m_canvas );
	this.m_character.addState( Barrier.ST_CLOSE, 'mc_door_locked' + sufix );
	this.m_character.addState( Barrier.ST_OPENING, 'mc_door_ani_open' + sufix );
	this.m_character.addState( Barrier.ST_OPEN, 'mc_door_open' + sufix );
	this.m_character.addState( Barrier.ST_CLOSING, 'mc_door_ani_close' + sufix );
	this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.gotoState( Barrier.ST_CLOSE );


	/** @type {number} */
	this.m_initXCell = ( rawData['collInitX'] > 0 ? rawData['collInitX'] : 0 );
	/** @type {number} */
	this.m_initYCell = ( rawData['collInitY'] > 0 ? rawData['collInitY'] : 0 );
	/** @type {number} */
	this.m_finalXCell = ( rawData['collEndX'] > 0 ? rawData['collEndX'] : 0 );
	/** @type {number} */
	this.m_finalYCell = ( rawData['collEndY'] > 0 ? rawData['collEndY'] : 0 );

	if ( this.m_initXCell === 0 ||
		this.m_initYCell === 0 ||
		this.m_finalXCell === 0 ||
		this.m_finalYCell === 0 ) {

		var barrierLength = 225; //rawData['length'];

		var tileWidth = this.m_world.tileWidth();
		var ix = 0;
		var iy = 0;
		var countH = 0;
		var countV = 0;

		if ( isVertical ) {
			ix = this.m_x - tileWidth;
			iy = this.m_y - barrierLength; // * 0.5;
			this.m_initXCell = Math.floor( ix / tileWidth ) + 1; // + ( this.enableFlipX ? 0 : 1 );
			this.m_initYCell = Math.floor( iy / tileWidth ) + 1;
			countH = 0;
			countV = Math.floor( barrierLength / tileWidth );
			this.m_finalXCell = this.m_initXCell + countH;
			this.m_finalYCell = this.m_initYCell + countV - 1;

		}
		else {
			ix = this.m_x - barrierLength * 0.5;
			iy = this.m_y - tileWidth;
			this.m_initXCell = Math.floor( ix / tileWidth ) + 1;
			this.m_initYCell = Math.floor( iy / tileWidth ) + 1;
			countH = Math.floor( barrierLength / tileWidth );
			countV = 0;
			this.m_finalXCell = this.m_initXCell + countH - 1;
			this.m_finalYCell = this.m_initYCell + countV;

		}

	}

	if ( this.isInitOpen ) {
		this.gotoState( Barrier.ST_OPEN );
	}
	else {
		this.setDynamicCollision( true );
	}
}
Application.subclass( Barrier, SWorldActor );

/** @const {string} */ Barrier.ST_CLOSE = 'close';
/** @const {string} */ Barrier.ST_OPENING = 'opening';
/** @const {string} */ Barrier.ST_OPEN = 'open';
/** @const {string} */ Barrier.ST_CLOSING = 'closing';

/**
 * @override
 * @param {string} st
 */
Barrier.prototype.gotoState = function( st ) {
	SWorldActor.prototype.gotoState.call( this, st );
	this.setFlipX( this.enableFlipX );
};

/**
 * @param {string} st
 */
Barrier.prototype.onEndAnimation = function( st ) {
	switch ( st ) {
		case Barrier.ST_OPENING:
			this.gotoState( Barrier.ST_OPEN );
			this.setDynamicCollision( false );
			this.m_world.setIgnoreZone( this.linkId, true );
			break;
		case Barrier.ST_CLOSING:
			this.gotoState( Barrier.ST_CLOSE );
			this.setDynamicCollision( true );
			this.m_world.setIgnoreZone( this.linkId, false );
			break;
	}
};

Barrier.prototype.setDynamicCollision = function( visible ) {
	this.m_world.setRangeCollisionCell( this.m_initXCell, this.m_initYCell,
										this.m_finalXCell, this.m_finalYCell,
										visible ? SWorldCollisionLayer.CELL_FULL : SWorldCollisionLayer.CELL_EMPTY,
										false );
	this.m_world.refreshCollision();
};

Barrier.prototype.toggle = function() {
	if ( this.isInitOpen ) {
		this.gotoState( Barrier.ST_CLOSING );
	}
	else {
		this.gotoState( Barrier.ST_OPENING );
	}
	Application.instance.playSound( 'SND_OBJ_DOOR' );
};

/**
 * @override
 * @param {number} dt
 */
Barrier.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );

};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} rawData
 * @extends SWorldActor
 */
function Panel( canvas, world, x, y, rawData ) {
	y += 46;
	SWorldActor.call( this, canvas, world, x, y );

	/** @type {boolean} */
	this.enableFlipX = false;
	if ( rawData.hasOwnProperty( 'enableFlipX' ) ) {
		this.enableFlipX = ( rawData['enableFlipX'] === 1 );
	}

	/** @type {number} */
	this.linkId = rawData['linkId'];
	/** @type {number} */
	this.m_timeExplode = 0;

	/** @type {boolean} */
	this.isActive = true;

	this.m_character = new Character( 0, 0, this.m_canvas );
	this.m_character.addState( Panel.ST_STAND, 'mc_switch1_on' );
	this.m_character.addState( Panel.ST_STAND_OFF, 'mc_switch1_off' );
	this.m_character.addState( Panel.ST_EXPLODE, 'mc_switch1_explode' );
	this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.gotoState( Panel.ST_STAND );
}
Application.subclass( Panel, SWorldActor );

/** @const {string} */ Panel.ST_STAND = 'stand';
/** @const {string} */ Panel.ST_STAND_OFF = 'standOff';
/** @const {string} */ Panel.ST_EXPLODE = 'explode';

/**
 * @override
 * @param {string} st
 */
Panel.prototype.gotoState = function( st ) {
	SWorldActor.prototype.gotoState.call( this, st );
	this.setFlipX( this.enableFlipX );
};

/**
 * @param {string} st
 */
Panel.prototype.onEndAnimation = function ( st ) {
	if ( st === Panel.ST_EXPLODE ) {
		Application.instance.playSound( 'SND_OBJ_SWITCH_OFF' );
		this.gotoState( Panel.ST_STAND_OFF );
		if ( DataManager.instance ) {
			DataManager.instance.checkAchievement( DataManager.REG_ACHIEVEMENT_2 );
		}
	}
};

/**
 * @override
 * @param {number} dt
 */
Panel.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );

	if ( this.linkId < 1 ) {
		return;
	}

	if ( !this.isActive ) {
		if ( this.m_state === Panel.ST_STAND_OFF ) {
			this.m_timeExplode += dt;
			if( this.m_timeExplode >= 2800 ) {
				this.m_timeExplode = 0;
				this.validateSoundSwitch();
			}
		}
		return;
	}

	if ( this.m_state === Panel.ST_STAND_OFF ) {
		return;
	}

	if ( MGGame.instance ) {
		return;
	}

	this.checkPlayerNear();

	if ( this.m_world.player().state() !== PlayerPlatform.ST_PLAYER_PUNCH ) {
		return;
	}

	if ( this.m_world.player().boundsAttack() !== null ) {
		var plBounds = this.m_world.player().boundsAttack().clone();
		if ( this.m_world.player().flipX() ) {
			plBounds.x = this.m_world.player().getX() - plBounds.x - plBounds.w;
			plBounds.y = this.m_world.player().getY() + plBounds.y;
		}
		else {
			plBounds.x = this.m_world.player().getX() + plBounds.x;
			plBounds.y = this.m_world.player().getY() + plBounds.y;
		}

		if ( this.m_clip.getCollision( 'mcCollision' ) !== null ) {
			var myBounds = this.m_clip.getCollision( 'mcCollision' ).clone();
			myBounds.x += this.m_x;
			myBounds.y += this.m_y;

			if ( plBounds.intersectRect( myBounds ) ) {
				this.m_world.player().gotoState( Player.ST_PLAYER_STAND );
				PlatformGame.instance.createMinigame( this );

			}
		}
	}
};

/**
 * @public
 */
Panel.prototype.validateSoundSwitch = function() {
	var size = Math.floor( this.m_clip.scale.x * 100 );
	var validate = this.isInCamera( size );
	if ( validate ) {
		Application.instance.playSound( 'SND_OBJ_SWITCH_OFF' );
	}
};

Panel.prototype.openBarrier = function() {
	var actors = this.m_world.actorManager().getActors();
	for ( var i = 0; i < actors.length; i++ ) {
		if ( actors[i] instanceof Barrier ) {
			var barrier = /** @type {Barrier} */ ( actors[i] );
			if ( barrier.linkId === this.linkId ) {
				barrier.toggle();

				this.isActive = false;
				Application.instance.playSound( 'SND_OBJ_SWITCH_OFF' );
				this.gotoState( Panel.ST_EXPLODE );
				/** @type {PlayerPlatform} */ ( this.m_world.player() ).nearPanel = null;
				return;
			}
		}
		else if ( actors[i] instanceof MobilePlatform ) {
			var plat = /** @type {MobilePlatform} */ ( actors[i] );
			if ( plat.linkId === this.linkId ) {
				plat.toggle();

				this.isActive = false;
				Application.instance.playSound( 'SND_OBJ_SWITCH_OFF' );
				this.gotoState( Panel.ST_EXPLODE );
				/** @type {PlayerPlatform} */ ( this.m_world.player() ).nearPanel = null;
				/** @type {PlayerPlatform} */ ( this.m_world.player() ).enableButtonforBoy = false;
				return;
			}
		}
	}
};

Panel.prototype.checkPlayerNear = function() {
	var player = /** @type {PlayerPlatform} */ ( this.m_world.player() );
	if ( this.m_state !== Panel.ST_STAND ) {
		player.enableButtonforBoy = false;
		return;
	}
	if ( player.mode !== PlayerPlatform.MODE_BOY ) {
		if ( player.nearPanel === this ) {
			player.nearPanel = null;
		}
		if ( player.enableButtonforBoy ) {
			player.enableButtonforBoy = false;
			if ( this.m_state === Panel.ST_STAND ) {
				this.m_state = '-1';
				this.m_character.addState( Panel.ST_STAND, 'mc_switch1_on' );
				this.gotoState( Panel.ST_STAND );
			}
		}
		return;
	}

	var px = player.getX();
	var py = player.getY();

	var dist2D = new Vector2D( px - this.m_x, py - this.m_y );

	if ( dist2D.length() <= 50 ) {
		if ( player.nearPanel !== this ) {
			player.nearPanel = this;
			player.enableButtonforBoy = true;
			if ( this.m_state === Panel.ST_STAND ) {
				this.m_state = '-1';
				this.m_character.addState( Panel.ST_STAND, 'mc_switch1_ron_on' );
				this.gotoState( Panel.ST_STAND );
			}
		}
	}
	else if ( player.nearPanel === this ) {
		player.nearPanel = null;
		player.enableButtonforBoy = false;
		if ( this.m_state === Panel.ST_STAND ) {
			this.m_state = '-1';
			this.m_character.addState( Panel.ST_STAND, 'mc_switch1_on' );
			this.gotoState( Panel.ST_STAND );
		}
	}
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {boolean} toLeft
 * @extends SWorldActor
 */
function Hook( canvas, world, x, y, toLeft ) {
	/** @type {number} */
	this.currentScale = 0.1;
	/** @type {number} */
	this.scaleSpeed = 0.005;
	/** @type {boolean} */
	this.toLeft = toLeft;

	/** @type {boolean} */
	this.isDone = false;

	/** @type {number} */
	this.damage = window['platform_general']['player']['hookDamage'];
	/** @type {number} */
	this.configLength = window['platform_general']['player']['hookLength'];
	/** @type {number} */
	this.animoLength = 200;
	/** @type {number} */
	this.maxLength = this.configLength / this.animoLength;
	/** @type {number} */
	this.minLength = 0.1;

	SWorldActor.call( this, canvas, world, x, y );
	this.setActorClip( 'mcHookRope' );
	this.m_clip.scale.y = this.currentScale;
	this.m_clip.rotation = -Math.PI / 2;

	this.scaleState = Hook.ST_SCALE_TO_MAX;

	this.vfx = this.m_world.createEffect( 'mcHookHead', x, y, 0, GuiGame.instance.canvasEffects );
	this.vfx.clip.scale.x = ( this.toLeft ? -1 : 1 );

	var shine = this.m_world.createEffect( 'mcHookFx', x, y, 1, GuiGame.instance.canvasEffects );
	shine.clip.scale.x = ( this.toLeft ? -0.75 : 0.75 );

	Application.instance.playSound( 'SND_PLAYER_HOOK' );
}
Application.subclass( Hook, SWorldActor );

/** @const {number} */ Hook.ST_SCALE_TO_MAX = 0;
/** @const {number} */ Hook.ST_SCALE_TO_MIN = 1;

/**
 * @override
 * @param {number} dt
 */
Hook.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );

	if ( this.isDone ) { return; }

	switch ( this.scaleState ) {
		case Hook.ST_SCALE_TO_MAX:
			this.currentScale += this.scaleSpeed * dt;
			if ( this.currentScale >= this.maxLength ) {
				this.currentScale = this.maxLength;
				this.scaleState = Hook.ST_SCALE_TO_MIN;
			}
			this.m_clip.scale.y = this.currentScale * ( this.toLeft ? -1 : 1 );
			break;
		case Hook.ST_SCALE_TO_MIN:
			this.currentScale -= this.scaleSpeed * dt;
			if ( this.currentScale <= this.minLength ) {
				this.currentScale = this.minLength;
				this.isDone = true;
				if ( this.vfx ) {
					this.vfx.isAwaitingDelete = true;
					this.vfx = null;
				}
			}
			this.m_clip.scale.y = this.currentScale * ( this.toLeft ? -1 : 1 );
			break;
	}

	if ( this.vfx ) {
		var dist = this.animoLength * this.currentScale * ( this.toLeft ? -1 : 1 );
		this.vfx.fix( {'x':this.m_x + dist, 'y':this.m_y} );
	}

	this.checkCollisionWithEnemy();
};

Hook.prototype.checkCollisionWithEnemy = function() {
	var myBounds = new Rectangle();
	myBounds.w = this.currentScale * this.animoLength;
	myBounds.h = 50;
	myBounds.x = this.m_x + ( this.toLeft ? -myBounds.w : 0 );
	myBounds.y = this.m_y;

	var actors = this.m_world.actorManager().getActors();
	for ( var i = 0; i < actors.length; i++ ) {
		if ( actors[i] &&
			!actors[i].isAwaitingDelete() &&
			actors[i] instanceof BaseEnemy ) {

			var enBounds = new Rectangle(); //actors[i].getBounds().clone();
			enBounds.w = 50;
			enBounds.h = 90;
			enBounds.x = actors[i].getX() - 25;
			enBounds.y = actors[i].getY() - 90;

			if ( myBounds.intersectRect( enBounds ) ) {
				if ( actors[i] instanceof Shego ) {
					/** @type {Shego} */ ( actors[i] ).onHitByHook();
				}
				else {
					actors[i].onHit( this.damage );
				}
			}
		}
	}
};

Hook.prototype.free = function () {
	SWorldActor.prototype.free.call( this );
	if ( this.vfx ) {
		this.vfx.isAwaitingDelete = true;
		this.vfx = null;
	}
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} rawData
 * @extends SWorldActor
 */
function Exit( canvas, world, x, y, rawData ) {
	y += 90;
	SWorldActor.call( this, canvas, world, x, y );

	/** @type {boolean} */
	this.isActive = true;

	this.m_character = new Character( 0, 0, this.m_canvas );
	this.m_character.addState( Exit.ST_STAND, 'mc_door_exit' );
	this.gotoState( Exit.ST_STAND );


	this.m_clip.alpha = 0.0;
}
Application.subclass( Exit, SWorldActor );

/** @const {string} */ Exit.ST_STAND = 'stand';

/**
 * @override
 * @param {number} dt
 */
Exit.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );

	if ( !this.isActive ) { return; }

	var actor = this.m_world.player();


	if ( actor.hitTest( this ) ) {
		this.isActive = false;
		actor.resetControl();
		actor.setDisablePlayer( true );
		actor.isReadyToWinAnim = true;
		this.m_isAwaitingDelete = true;

		if ( AnimExit.instance ) {
			AnimExit.instance.gotoState( AnimExit.ST_OPENING );
			switch ( Global.level ) {
				case 1:
				case 2:
				case 3:
					Application.instance.playSound( 'SND_OBJ_DOOR_HIGH_SCHOOL' );
					break;
				case 4:
				case 5:
				case 7:
				case 8:
				case 9:
					Application.instance.playSound( 'SND_OBJ_DOOR' );
					break;
			}

		}

		HudPlatform.instance.onShowHud( false );
	}
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} rawData
 * @extends SWorldActor
 */
function PreBossEvent( canvas, world, x, y, rawData ) {
	y += 90;
	SWorldActor.call( this, canvas, world, x, y );

	/** @type {boolean} */
    this.isActive = true;

    /** @type {number} */
    this.targetX = rawData['playerX'];
    /** @type {number} */
    this.camSpeed = rawData['camSpeed'];
    /** @type {number} */
    this.camX = rawData['camX'];
    /** @type {number} */
    this.camY = rawData['camY'] + 50;
    /** @type {number} */
    this.linkId = rawData['barrierLinkId'];

    /** @type {PlayerPlatform} */
    this.player = /** @type {PlayerPlatform} */ ( world.player() );
    /** @type {SCamera} */
    this.camera = world.camera();

	this.m_character = new Character( 0, 0, this.m_canvas );
	this.m_character.addState( PreBossEvent.ST_STAND, 'mc_door_exit' );
    this.gotoState( PreBossEvent.ST_STAND );
    this.m_clip.alpha = 0.0;

    /** @type {boolean} */
    this.toRight = false;
}
Application.subclass( PreBossEvent, SWorldActor );

/** @const {string} */ PreBossEvent.ST_STAND = 'stand';

/**
 * @override
 * @param {number} dt
 */
PreBossEvent.prototype.update = function( dt ) {
	SWorldActor.prototype.update.call( this, dt );

	if ( !this.isActive ) {
        if ( ( this.toRight && this.player.getX() >= this.targetX ) || ( !this.toRight && this.player.getX() <= this.targetX ) ) {
            this.player.setX( this.targetX );
            PlatformGame.instance.world.player().resetControl();
            this.player.preBossEvent = null;
            this.m_isAwaitingDelete = true;
            this.closeBarrier();
            this.camera.setMovement( this.camSpeed, this.camX, this.camY, this, this.onEndCamMove );
        }
        return;
    }

	if ( this.player.hitTest( this ) ) {
		this.isActive = false;
        this.player.resetControl();

        this.toRight = ( this.targetX > this.player.getX() );

        this.player.onKeyDown( this.toRight ? PlayerControl.CMD_RIGHT_A : PlayerControl.CMD_LEFT_A );
        this.player.setDisablePlayer( true );
        this.player.preBossEvent = this;

        HudPlatform.instance.pauseTime( true );
        Application.instance.stopAllSounds();
	}
};

/**
 * @param {Movement} m
 */
PreBossEvent.prototype.onEndCamMove = function ( m ) {
    PlatformGame.instance.world.camera().setFixed( true );
    PlatformGame.instance.world.camera().nullMovement();

    if ( PlatformGame.instance.world.player().mode === PlayerPlatform.MODE_BOY ) {
        PlatformGame.instance.world.player().simulatePressChangeCharacter();
    }

    if ( Shego.instance ) {
        Shego.instance.forceActivation();


		GuiGame.ID_MUSIC_GAME = 'MUSIC_BOSS_SHEGO';
		Application.instance.playSound( GuiGame.ID_MUSIC_GAME );
        return;
    }

    if ( Athena.instance ) {
        Athena.instance.forceActivation();


		GuiGame.ID_MUSIC_GAME = 'MUSIC_BOSS_ATHENA';
		Application.instance.playSound( GuiGame.ID_MUSIC_GAME );
        return;
    }

    PlatformGame.instance.world.player().gotoState( Player.ST_PLAYER_WIN );
};

PreBossEvent.prototype.closeBarrier = function() {
	var actors = this.m_world.actorManager().getActors();
	for ( var i = 0; i < actors.length; i++ ) {
		if ( actors[i] instanceof Barrier ) {
			var barrier = /** @type {Barrier} */ ( actors[i] );
			if ( barrier.linkId === this.linkId ) {
				barrier.toggle();
				return;
			}
		}
	}
};

/**
 * @override
 */
PreBossEvent.prototype.free = function () {
    SWorldActor.prototype.free.call( this );
    this.player = null;
    this.camera = null;
};
/**
 * @constructor
 * @param {SDisplayObjectContainer} canvas
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @param {Object} rawData
 * @extends SWorldActor
 */
function AnimExit( canvas, world, x, y, rawData ) {
    y += 90;
    SWorldActor.call( this, canvas, world, x, y );
    
    AnimExit.instance = this;

    var place = 'school';

    switch ( Global.level ) {
        case 1:
        case 2:
            place = 'school'
            break;
        case 4:
        case 5:
            place = 'entrance'
            break;
        case 7:
        case 8:
        case 9:
            place = 'lab'
            break;
    }

    this.m_character = new Character( 0, 0, this.m_canvas );
    this.m_character.addState( AnimExit.ST_CLOSED, 'scn_door_' + place + '_closed' );
    this.m_character.addState( AnimExit.ST_OPENING, 'scn_door_' + place + '_ani' );
    this.m_character.addState( AnimExit.ST_OPEN, 'scn_door_' + place + '_open' );
    this.m_character.onEndAnimation( this, this.onEndAnimation );
	this.gotoState( AnimExit.ST_CLOSED );
}
Application.subclass( AnimExit, SWorldActor );

/** @static {AnimExit} */ AnimExit.instance = null;

/** @const {string} */ AnimExit.ST_CLOSED = 'closed';
/** @const {string} */ AnimExit.ST_OPENING = 'opening';
/** @const {string} */ AnimExit.ST_OPEN = 'open';

/**
 * @override
 * @param {string} st
 */
AnimExit.prototype.gotoState = function ( st ) {
    SWorldActor.prototype.gotoState.call( this, st );
};

/**
 * @param {string} st
 */
AnimExit.prototype.onEndAnimation = function ( st ) {
    if ( st === AnimExit.ST_OPENING ) {
        this.gotoState( AnimExit.ST_OPEN );
    }
};

/**
 * @override
 */
AnimExit.prototype.free = function () {
    SWorldActor.prototype.free.call( this );
    AnimExit.instance = null;
};
/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} rawData
 * @param {BaseEnemy} boss
 */
function BossAttack ( world, rawData, boss ) {
    /** @type {SWorld} */
    this.world = world;
    /** @type {Object} */
    this.rawData = rawData;
    /** @type {BaseEnemy} */
    this.boss = boss;
}

/**
 * @param {number} dt
 */
BossAttack.prototype.update = function ( dt ) {

};

BossAttack.prototype.free = function () {
    this.world = null;
    this.rawData = null;
    this.boss = null;
};
/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} rawData
 * @param {BaseEnemy} boss
 * @extends BossAttack
 */
function AirKick ( world, rawData, boss ) {
    BossAttack.call( this, world, rawData, boss );

    /** @type {boolean} */
    this.m_activeChase = false;
    /** @type {LinearMovement} */
    this.chaseMove = null;
    /** @type {number} */
    this.chaseSpeed = 0.9;
    /** @type {SInterval} */
    this.chaseInterval = null;
    /** @type {SInterval} */
    this.chaseRestInterval = null;

    /** @type {number} */
    this.airKickChaseSpeed = this.chaseSpeed * 2;
    /** @type {number} */
    this.airKickCounter = 0;
    /** @type {number} */
    this.airKickCounterMax = 30;
    /** @type {number} */
    this.airKickDetection = 200;
    /** @type {number} */
    this.gravityKick = 0.16;
    /** @type {number} */
    this.speedKick = 0.13;
    /** @type {number} */
    this.airKickTargetX = 0;
    /** @type {ParametricParabolicMovement} */
    this.airKickMove = null;

    var staffParams = Common.getParams( rawData['airKick'] );

    /** @type {number} */
    this.restSpinTime = 1500;
    if ( staffParams.hasOwnProperty( 'spinTime' ) ) {
        this.restSpinTime = parseInt( staffParams['spinTime'], 10 );
    }


    this.chaseSpeed = parseFloat( staffParams['chaseSpeed'] );
    this.airKickCounterMax = parseInt( staffParams['numKick'], 10 );
    this.airKickDetection = parseInt( staffParams['rangeKick'], 10 );
    this.gravityKick = parseFloat( staffParams['gravityKick'] );
    this.speedKick = parseFloat( staffParams['speedKick'] );

    this.m_activeChase = true;
    this.airKickCounter = 0;
    this.airKickTargetX = this.world.player().getX();

    var d = Math.abs( this.world.player().getX() - this.boss.getX() );
    if ( d <= this.airKickDetection ) {
        this.onEndChaseMoveAirKick( null );
    }
    else {
        this.boss.gotoState( Athena.ST_AIR_KICK );
        this.chaseMove = new LinearMovement( this.boss.getX(), this.boss.getY(), this.airKickChaseSpeed );
        this.chaseMove.setCallbacks( this, this.onEndChaseMoveAirKick, null );
        var range = ( this.world.player().getX() < this.boss.getX() ? this.airKickDetection : -this.airKickDetection );
        this.chaseMove.gotoPosition( this.world.player().getX() + range, this.boss.getY() );
        this.boss.setFlipX( this.world.player().getX() < this.boss.getX() );
    }
}
Application.subclass( AirKick, BossAttack );

/**
 * @param {Movement} m
 */
AirKick.prototype.onEndChaseMoveAirKick = function ( m ) {
    if ( this.chaseMove ) {
        this.chaseMove.free();
        this.chaseMove = null;
    }

    this.airKickTargetX = this.world.player().getX();
    this.airKickMove = new ParametricParabolicMovement( this.boss.getX(), this.boss.getY(), this.gravityKick, this.speedKick );
    this.airKickMove.gotoPosition( this.airKickTargetX, this.boss.getY() );
    this.airKickMove.setCallbacks( this, this.onEndAirKickMove, null );
    this.boss.gotoState( Athena.ST_AIR_JUMP );

    Application.instance.stopSound( 'SND_BOSS_SPIN' );
    Application.instance.playSound( 'SND_BOSS_JUMP_UP' );
    this.boss.setFlipX( this.airKickTargetX < this.boss.getX() );
};

/**
 * @param {Movement} m
 */
AirKick.prototype.onEndAirKickMove = function ( m ) {
    if ( this.airKickMove ) {
        this.airKickMove.free();
        this.airKickMove = null;
    }
    this.boss.setY( this.boss.initY );
    Application.instance.playSound( 'SND_BOSS_SPIN' );
    this.boss.gotoState( Athena.ST_STAND_HAPPY );
    this.boss.setFlipX( this.world.player().getX() < this.boss.getX() );
    this.airKickCounter++;

    if ( this.airKickCounter >= this.airKickCounterMax ) {
        this.airKickCounter = 0;
        this.boss.doNextAttack();
        this.m_activeChase = false;
        return;
    }

    this.chaseRestInterval = new SInterval( this, 'onEndAirKickRestInterval', this.restSpinTime );
};

AirKick.prototype.onEndAirKickRestInterval = function () {
    Application.instance.stopSound( 'SND_BOSS_SPIN' );
    this.boss.gotoState( BaseEnemy.ST_WALK );

    var d = Math.abs( this.world.player().getX() - this.boss.getX() );
    if ( d <= this.airKickDetection ) {
        this.onEndChaseMoveAirKick( null );
    }
    else {
        this.chaseMove = new LinearMovement( this.boss.getX(), this.boss.getY(), this.airKickChaseSpeed );
        this.chaseMove.setCallbacks( this, this.onEndChaseMoveAirKick, null );
        this.airKickTargetX = this.world.player().getX();
        var range = ( this.world.player().getX() < this.boss.getX() ? this.airKickDetection : -this.airKickDetection );
        this.chaseMove.gotoPosition( this.world.player().getX() + range, this.boss.getY() );
    }
};

/**
 * @override
 * @param {number} dt
 */
AirKick.prototype.update = function ( dt ) {
    if ( this.m_activeChase ) {
        if ( this.chaseMove ) {
            this.boss.setX( this.chaseMove.getX() );
            this.chaseMove.update( dt );
        }
        if ( this.chaseInterval ) {
            this.chaseInterval.update( dt );
        }
        if ( this.chaseRestInterval ) {
            this.chaseRestInterval.update( dt );
        }
        if ( this.airKickMove ) {
            this.boss.setX( this.airKickMove.getX() );
            this.boss.setY( this.airKickMove.getY() );
            this.airKickMove.update( dt );
        }
    }
};

/**
 * @override
 */
AirKick.prototype.free = function () {
    BossAttack.prototype.free.call( this );

    if ( this.airKickMove ) {
        this.airKickMove.free();
        this.airKickMove = null;
    }

    if ( this.chaseMove ) {
        this.chaseMove.free();
        this.chaseMove = null;
    }

    if ( this.chaseInterval ) {
        this.chaseInterval.free();
        this.chaseInterval = null;
    }

    if ( this.chaseRestInterval ) {
        this.chaseRestInterval.free();
        this.chaseRestInterval = null;
    }

    this.airKickCounter = 0;
    this.m_activeChase = false;
};
/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} rawData
 * @param {BaseEnemy} boss
 * @extends BossAttack
 */
function Staff ( world, rawData, boss ) {
    BossAttack.call( this, world, rawData, boss );

    /** @type {boolean} */
    this.m_activeChase = false;
    /** @type {LinearMovement} */
    this.chaseMove = null;
    /** @type {number} */
    this.chaseSpeed = 0.9;
    /** @type {number} */
    this.chaseTimeByDash = 10000;
    /** @type {SInterval} */
    this.chaseDashInterval = null;
    /** @type {SInterval} */
    this.chaseRestInterval = null;
		
    /** @type {number} */
    this.chaseDashCounter = 0;
    /** @type {number} */
    this.chaseDashCounterMax = 5;

    /** @type {number} */
    this.limitL = 0;
    /** @type {number} */
    this.limitR = 0;


    var staffParams = Common.getParams( rawData['staff'] );

    /** @type {number} */
    this.restSpinTime = 1500;
    if ( staffParams.hasOwnProperty( 'spinTime' ) ) {
        this.restSpinTime = parseInt( staffParams['spinTime'], 10 );
    } 

    this.chaseTimeByDash = parseInt( staffParams['timeByDash'], 10 );
    this.chaseSpeed = parseFloat( staffParams['speed'] );
    this.chaseDashCounterMax = parseInt( staffParams['numDash'], 10 );
    this.limitL = this.boss.initX + parseInt( staffParams['limitL'], 10 );
    this.limitR = this.boss.initX + parseInt( staffParams['limitR'], 10 );

    this.m_activeChase = true;
    this.boss.gotoState( Athena.ST_STAFF_KICK );
    this.chaseMove = new LinearMovement( this.boss.getX(), this.boss.getY(), this.chaseSpeed );
    this.chaseMove.setCallbacks( this, this.onEndChaseMove, null );

    var range = ( this.world.player().getX() < this.boss.getX() ? -2000 : 2000 );
    this.chaseMove.gotoPosition( this.boss.getX() + range, this.boss.getY() );
    
    this.boss.setFlipX( this.world.player().getX() < this.boss.getX() );
    this.chaseDashInterval = new SInterval( this, 'onEndChaseDashInterval', this.chaseTimeByDash );
}
Application.subclass( Staff, BossAttack );

/**
 * @param {Movement} m
 */
Staff.prototype.onEndChaseMove = function ( m ) {
    if ( this.chaseMove ) {
        this.chaseMove.free();
        this.chaseMove = null;
    }
    this.chaseRestInterval = new SInterval( this, 'onEndChaseRestInterval', this.restSpinTime );
    Application.instance.playSound( 'SND_BOSS_SPIN' );
    this.boss.gotoState( Athena.ST_STAND_HAPPY );
};

Staff.prototype.onEndChaseRestInterval = function () {
    if ( this.chaseRestInterval ) {
        this.chaseRestInterval.free();
        this.chaseRestInterval = null;
    }
    this.forceStaff();



};

Staff.prototype.forceStaff = function () {
    Application.instance.stopSound( 'SND_BOSS_SPIN' );
    this.boss.gotoState( Athena.ST_STAFF_KICK );
    this.chaseMove = new LinearMovement( this.boss.getX(), this.boss.getY(), this.chaseSpeed );
    this.chaseMove.setCallbacks( this, this.onEndChaseMove, null );

    var range = ( this.world.player().getX() < this.boss.getX() ? -1000 : 1000 );
    this.chaseMove.gotoPosition( this.boss.getX() + range, this.boss.getY() );

    this.boss.setFlipX( this.world.player().getX() < this.boss.getX() );
    this.chaseDashInterval = new SInterval( this, 'onEndChaseDashInterval', this.chaseTimeByDash );
};

Staff.prototype.onEndChaseDashInterval = function () {
    if ( this.chaseMove ) {
        this.chaseMove.free();
        this.chaseMove = null;
    }
    if ( this.chaseDashInterval ) {
        this.chaseDashInterval.free();
        this.chaseDashInterval = null;
    }

    Application.instance.playSound( 'SND_BOSS_SPIN' );
    this.boss.gotoState( Athena.ST_STAFF_LOOP );
    this.chaseDashCounter++;
    if ( this.chaseDashCounter >= this.chaseDashCounterMax ) {
        this.chaseDashCounter = 0;
        this.m_activeChase = false;
        
        this.boss.doNextAttack();
        return;
    }

    this.chaseRestInterval = new SInterval( this, 'onEndChaseRestInterval', this.restSpinTime );
};

/**
 * @override
 * @param {number} dt
 */
Staff.prototype.update = function ( dt ) {
    if ( this.m_activeChase ) {
        if ( this.chaseMove ) {
            this.boss.setX( this.chaseMove.getX() );
            if ( ( this.chaseMove.getLinearVelocityX() > 0 && this.boss.getX() > this.limitR ) || //7990
                ( this.chaseMove.getLinearVelocityX() < 0 && this.boss.getX() < this.limitL ) ) { //7130
                this.onEndChaseDashInterval();
                return;
            }
            this.chaseMove.update( dt );
        }
        if ( this.chaseDashInterval ) {
            this.chaseDashInterval.update( dt );
        }
        if ( this.chaseRestInterval ) {
            this.chaseRestInterval.update( dt );
        }
    }
};

/**
 * @override
 */
Staff.prototype.free = function () {
    BossAttack.prototype.free.call( this );

    if ( this.chaseMove ) {
        this.chaseMove.free();
        this.chaseMove = null;
    }

    if ( this.chaseDashInterval ) {
        this.chaseDashInterval.free();
        this.chaseDashInterval = null;
    }

    if ( this.chaseRestInterval ) {
        this.chaseRestInterval.free();
        this.chaseRestInterval = null;
    }

    this.m_activeChase = false;
};
/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} rawData
 * @param {BaseEnemy} boss
 * @extends BossAttack
 */
function Summon ( world, rawData, boss ) {
    BossAttack.call( this, world, rawData, boss );

    /** @type {Array.<BaseEnemy>} */
    this.summonEnemies = null;
    /** @type {Array} */
    this.summonPos = [];
    var summonObj = Common.getParams( rawData['summon'] );
    for ( var p in summonObj ) {
        this.summonPos.push( parseInt( summonObj[p], 10 ) );
    }

    this.summonEnemies = [];
    for ( var  i = 0; i < this.summonPos.length; i++ ) {

        var enemy = null;

        if ( this.boss instanceof Athena ) {

            if ( Global.level > 3 ) {
                enemy = new Ninja( this.world.objectCanvas(),
                    this.world,
                    this.boss.initX + this.summonPos[i],
                    this.boss.initY,
                    'detectFloorSlopes:0',
                    window['platform_general']['enemy_ninja'],
                    {'walkRange':200,'skin':'enemy_03'} );
            }
            else {
                enemy = new Henchman( this.world.objectCanvas(),
                    this.world,
                    this.boss.initX + this.summonPos[i],
                    this.boss.initY,
                    'detectFloorSlopes:0',
                    window['platform_general']['enemy_henchman'],
                    {'walkRange':200,'skin':'enemy_01'} );
            }
        }
        else {
            enemy = new Ninja( this.world.objectCanvas(),
                this.world,
                this.boss.initX + this.summonPos[i],
                this.boss.initY,
                'detectFloorSlopes:0',
                window['platform_general']['enemy_ninja'],
                {'walkRange':200,'skin':'enemy_03'} );
        }
    
        this.world.actorManager().add( enemy );
        this.summonEnemies.push( enemy );
    }


    this.timer = 500;
}
Application.subclass( Summon, BossAttack );

/**
 * @override
 * @param {number} dt
  */
Summon.prototype.update = function ( dt ) {
    if ( this.timer > 0 ) {
        this.timer -= dt;
        if ( this.timer <= 0 ) {
            this.timer = 0;
            this.boss.doNextAttack();
        }
    }
};

/**
 * @override
 */
Summon.prototype.free = function () {
    BossAttack.prototype.free.call( this );

    this.summonEnemies = null;
    this.summonPos = null;
};
/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} rawData
 * @param {BaseEnemy} boss
 * @extends BossAttack
 */
function WallKick ( world, rawData, boss ) {
    BossAttack.call( this, world, rawData, boss );

    /** @type {LinearMovement} */
    this.kickMove = null;
    /** @type {SInterval} */
    this.kickInterval = null;

    var kickParams = Common.getParams( rawData['walljump'] );

    /** @type {number} */
    this.kickLx = boss.initX + parseInt( kickParams['limitL'], 10 );
    /** @type {number} */
    this.kickRx = boss.initX + parseInt( kickParams['limitR'], 10 );
    /** @type {number} */
    this.kickDeltaY = parseInt( kickParams['deltaY'], 10 );
    /** @type {Array} */
    this.kickPathL = [];
    this.kickPathL.push( new Vector2D( this.kickLx, this.boss.initY - this.kickDeltaY ) );
    this.kickPathL.push( new Vector2D( this.kickRx, this.boss.initY - this.kickDeltaY * 2 ) );
    this.kickPathL.push( new Vector2D( this.kickLx, this.boss.initY - this.kickDeltaY * 3 ) );
    this.kickPathL.push( new Vector2D( this.kickRx, this.boss.initY - this.kickDeltaY * 2 ) );
    this.kickPathL.push( new Vector2D( this.kickLx, this.boss.initY - this.kickDeltaY ) );
    this.kickPathL.push( new Vector2D( this.boss.initX, this.boss.initY ) );
    /** @type {Array} */
    this.kickPathR = [];
    this.kickPathR.push( new Vector2D( this.kickRx, this.boss.initY - this.kickDeltaY ) );
    this.kickPathR.push( new Vector2D( this.kickLx, this.boss.initY - this.kickDeltaY * 2 ) );
    this.kickPathR.push( new Vector2D( this.kickRx, this.boss.initY - this.kickDeltaY * 3 ) );
    this.kickPathR.push( new Vector2D( this.kickLx, this.boss.initY - this.kickDeltaY * 2 ) );
    this.kickPathR.push( new Vector2D( this.kickRx, this.boss.initY - this.kickDeltaY ) );
    this.kickPathR.push( new Vector2D( this.boss.initX, this.boss.initY ) );
    /** @type {Array} */
    this.kickPath = null;
    /** @type {number} */
    this.kickIndex = 0;
    /** @type {number} */
    this.kickTurns = 0;
    /** @type {number} */
    this.kickSpeed = parseFloat( kickParams['speed'] );

    this.start();
}
Application.subclass( WallKick, BossAttack );

WallKick.prototype.start = function () {
    this.boss.gotoState( Shego.ST_KICK );

    this.kickMove = new LinearMovement( this.boss.getX(), this.boss.getY(), this.kickSpeed );
    this.kickMove.setCallbacks( this, this.onEndKickMove, null );

    var nextX = 0;
    var nextY = 0;

    if ( this.kickIndex === 0 && this.kickTurns === 0 ) {
        this.kickPath = null;
        this.kickPath = this.kickPathR;
    }
    else if ( this.kickIndex === 0 && this.kickTurns === 1 ) {
        this.kickPath = null;
        this.kickPath = this.kickPathL;
    }

    nextX = this.kickPath[this.kickIndex].x;
    nextY = this.kickPath[this.kickIndex].y;
    this.kickMove.gotoPosition( nextX, nextY );
    this.boss.setFlipX( nextX < this.boss.getX() );

    this.kickIndex++;
    if ( this.kickIndex > 5 ) {
        this.kickIndex = 0;
        this.kickTurns++;
    }
};

/**
 * @param {Movement} m
 */
WallKick.prototype.onEndKickMove = function ( m ) {
    var tx = this.kickMove.targetX();
    var ty = this.kickMove.targetY();
    this.boss.setX( tx );
    this.boss.setY( ty );

    this.kickMove.free();
    this.kickMove = null;

    if ( this.kickTurns >= 1 ) {
        this.kickTurns = 0;
        this.kickIndex = 0;
        this.boss.setFlipX( false );
        this.boss.doNextAttack();
        return;
    }

    if ( this.kickInterval ) {
        this.kickInterval.free();
        this.kickInterval = null;
    }

    this.boss.gotoState( Shego.ST_WALL_STAND);
    this.kickInterval = new SInterval( this, 'onEndKickInterval', 250 );
};

WallKick.prototype.onEndKickInterval = function () {
    this.kickInterval.free();
    this.kickInterval = null;

    this.boss.gotoState( Shego.ST_WALL_IMPULSE );
};

/**
 * @override
 * @param {number} dt
 */
WallKick.prototype.update = function ( dt ) {
    if ( this.kickInterval ) {
        this.kickInterval.update( dt );
    }
    if ( this.kickMove ) {
        this.boss.setX( this.kickMove.getX() );
        this.boss.setY( this.kickMove.getY() );
        this.kickMove.update( dt );
    }
};

/**
 * @override
 */
WallKick.prototype.free = function () {
    BossAttack.prototype.free.call( this );

    if ( this.kickMove ) {
        this.kickMove.free();
        this.kickMove = null;
    }

    if ( this.kickInterval ) {
        this.kickInterval.free();
        this.kickInterval = null;
    }

    this.kickPath = null;
    this.kickPathL = null;
    this.kickPathR = null;

    this.kickIndex = 0;
    this.kickTurns = 0;
};
/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} rawData
 * @param {BaseEnemy} boss
 * @extends BossAttack
 */
function Shoot ( world, rawData, boss ) {
    BossAttack.call( this, world, rawData, boss );

    var params = Common.getParams( rawData['shooting'] );

    /** @type {number} */
    this.counter = 0;
    /** @type {number} */
    this.max = parseInt( params['numShoots'], 10 );

    /** @type {number} */
    this.timer = 0;
    /** @type {number} */
    this.wait = parseInt( params['timeBtwShoots'], 10 );

    /** @type {Shego} */ ( this.boss ).gotoShootState();
}
Application.subclass( Shoot, BossAttack );

Shoot.prototype.doWait = function () {
    this.counter++;
    if ( this.counter >= this.max ) {
        this.counter = 0;
        this.boss.doNextAttack();
    }
    else {
        this.timer = this.wait;
        this.boss.gotoState( Shego.ST_MOCK_LOOP );
    }
};

/**
 * @override
 * @param {number} dt
 */
Shoot.prototype.update = function ( dt ) {
    if ( this.timer > 0 ) {
        this.timer -= dt;
        if ( this.timer <= 0 ) {
            this.timer = 0;

            /** @type {Shego} */ ( this.boss ).gotoShootState();
        }
    }
};
/**
 * @constructor
 * @param {SWorld} world
 * @param {Object} rawData
 * @param {BaseEnemy} boss
 * @extends BossAttack
 */
function SummonOrbs ( world, rawData, boss ) {
    BossAttack.call( this, world, rawData, boss );

    var config = window['platform_general']['summonOrbs'];
    var index = Common.random( 0, config.length - 1 );
    var rowData = config[index]; 
    var numOrbs = rowData['pathIds'].length;
    var i = 0;

    var ids = [];
    var speeds = [];

    for ( i = 0; i < numOrbs; i++ ) {
        ids.push( rowData['pathIds'][i] );
        speeds.push( rowData['speeds'][i] );
    }

    for ( i = 0; i < numOrbs; i++ ) {
        var orb = null;
        var paramsPath = 'id:' + ids[i] + ';speed:' + speeds[i] + ';isReverse:0';

        orb = new Orb( this.world.objectCanvas(),
            this.world,
            this.boss.getX(),
            this.boss.getY(),
            {'paramsPath':paramsPath},
            1 );
    
        this.world.actorManager().add( orb );

        orb.deleteAtEndPath = true;
        orb.setRangeControlled( false );
    }

    this.timer = 500;
}
Application.subclass( SummonOrbs, BossAttack );

/**
 * @override
 * @param {number} dt
  */
 SummonOrbs.prototype.update = function ( dt ) {
    if ( this.timer > 0 ) {
        this.timer -= dt;
        if ( this.timer <= 0 ) {
            this.timer = 0;
            this.boss.doNextAttack();
        }
    }
};
/**
 * @constructor
 * @struct
 * @param {Object} rawData
 * @param {number=} ediWidth
 * @param {number=} ediHeight
 * @extends Rectangle
 */
function TriggerArea( rawData, ediWidth, ediHeight ) {
    ediWidth = typeof ediWidth !== 'undefined' ? ediWidth : TriggerArea.EDI_WIDTH;
    ediHeight = typeof ediHeight !== 'undefined' ? ediHeight : TriggerArea.EDI_HEIGHT;

    /**
     * @protected
     * @type {Object}
     */
    this.m_rawData = rawData ? rawData : null;

    this.initArea( ediWidth, ediHeight );
}
Application.subclass( TriggerArea, Rectangle );

/**
 * @public
 */
TriggerArea.prototype.free = function() {
    this.m_rawData = null;
};

/** @const {number} */ TriggerArea.EDI_WIDTH = 96;
/** @const {number} */ TriggerArea.EDI_HEIGHT = 96;

/**
 * @public
 * @return {number}
 */
TriggerArea.prototype.getX = function() {
    return this.x;
};

/**
 * @public
 * @return {number}
 */
TriggerArea.prototype.getY = function() {
    return this.y;
};

/**
 * @protected
 * @param {number} ediWidth
 * @param {number} ediHeight
 */
TriggerArea.prototype.initArea = function( ediWidth, ediHeight ) {
    if ( this.m_rawData !== null ) {
        var sx = typeof this.m_rawData['sx'] !== 'undefined' ? this.m_rawData['sx'] : 1;
        var sy = typeof this.m_rawData['sy'] !== 'undefined' ? this.m_rawData['sy'] : 1;
        var iniX = this.m_rawData['x'] - sx * 0.5 * ediWidth;
        var iniY = this.m_rawData['y'] - sy * 0.5 * ediHeight;

        Rectangle.call( this, iniX, iniY, sx * ediWidth, sy * ediHeight );
    }
};

/**
 * @public
 * @param {number} x
 * @param {number} y
 * @param {Rectangle} coll
 * @return {boolean}
 */
TriggerArea.prototype.areaIntersect = function( x, y, coll ) {
    if ( coll === null ) {
        return false;
    }
    var rect = new Rectangle( x + coll.x, y + coll.y, coll.w, coll.h );
    return this.intersectRect( rect );
};
/**
 * @constructor
 * @struct
 * @param {SWorld} world
 * @param {Object} rawData
 * @extends TriggerArea
 */
function TutorialControlArea( world, rawData ) {
    TriggerArea.call( this, rawData );
    /**
     * @private
     * @type {boolean}
     */
    this.m_isActive = false;
    /**
     * @private
     * @type {number}
     */
    this.m_areaId = rawData['tutorialId'];
    this.m_areaId += 10;

    /**
     * @private
     * @type {SWorld}
     */
    this.m_world = world;
    /**
     * @private
     * @type {TutorialSignboard}
     */
    this.m_signboard = null;
}
Application.subclass( TutorialControlArea, TriggerArea );

/**
 * @public
 */
TutorialControlArea.prototype.free = function() {
    this.m_world = null;
    if ( this.m_signboard ) {
        this.m_signboard.free();
        this.m_signboard = null;
    }
    TriggerArea.prototype.free.call( this );
};

/**
 * @public
 * @return {boolean}
 */
TutorialControlArea.prototype.isActive = function() {
    return this.m_isActive;
};

/**
 * @public
 * @param {TutorialSignboard} signboard
 */
TutorialControlArea.prototype.setSignboard = function( signboard ) {
    this.m_signboard = signboard;
};

/**
 * @public
 * @return {TutorialSignboard}
 */
TutorialControlArea.prototype.signboard = function() {
    return this.m_signboard;
};

/**
 * @public
 * @return {number}
 */
TutorialControlArea.prototype.areaId = function() {
    return this.m_areaId;
};

/**
 * @public
 * @param {boolean=} val
 */
TutorialControlArea.prototype.activate = function( val ) {
    val = typeof val !== 'undefined' ? val : true;
    this.m_isActive = val;


    if ( this.m_signboard ) {
        this.m_signboard.activate( this.m_isActive );
    }
    else {
        this.free();
    }
};

/**
 * @public
 * @param {number} dt
 */
TutorialControlArea.prototype.update = function( dt ) {
    if ( this.m_signboard ) {
        this.m_signboard.update( dt );
    }
};
/**
 * @constructor
 * @struct
 * @param {SWorld} world
 * @param {number} x
 * @param {number} y
 * @extends SScreen
 */
function TutorialSignboard( world, x, y, rawData ) {

    /**
     * @private
     * @type {boolean}
     */
    this.m_usingString1 = true;
    /**
     * @private
     * @type {number}
     */
    this.m_type = rawData['type'];
    this.m_type += 10;
    /**
     * @private
     * @type {number}
     */
    this.m_areaId = rawData['tutorialId'];
    this.m_areaId += 10;
    /**
     * @private
     * @type {number}
     */
    this.m_x = x;
    /**
     * @private
     * @type {number}
     */
    this.m_y = y;

    /**
     * @private
     * @type {SWorld}
     */
    this.m_world = world;

    if ( Application.instance.isMobileDevice ) {
        SScreen.call( this, 'mcGuiTutorialMobile', 0, 0 );
        this.hideAll();

        switch ( this.m_type ) {
            case TutorialSignboard.TUTO_MOVE:
                this.getControl( 'mcGuiInstruction01' ).setVisible( true );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription01' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_MOBILE_INSTRUCTION01' );
                break;
            case TutorialSignboard.TUTO_JUMP:
                this.getControl( 'mcGuiInstruction02' ).setVisible( true );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription02' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_MOBILE_INSTRUCTION02' );
                break;
            case TutorialSignboard.TUTO_JUMP_OVER:
                this.getControl( 'mcGuiInstruction04' ).setVisible( true );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription04' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_MOBILE_INSTRUCTION04' );
                break;
            case TutorialSignboard.TUTO_CHANGE:
                this.getControl( 'mcGuiInstruction03' ).setVisible( true );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription03' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_MOBILE_INSTRUCTION03' );
                break;
            case TutorialSignboard.TUTO_DRONE:
                this.getControl( 'mcGuiInstruction05' ).setVisible( true );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription05' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_MOBILE_INSTRUCTION05' );
                break;
            case TutorialSignboard.TUTO_GLIDE:
                this.getControl( 'mcGuiInstruction05' ).setVisible( true );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription05' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_MOBILE_INSTRUCTION10' );
                break;
            case TutorialSignboard.TUTO_WALL_JUMP:
                this.getControl( 'mcGuiInstruction06' ).setVisible( true );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription06' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_MOBILE_INSTRUCTION06' );
                break;
            case TutorialSignboard.TUTO_HACK:
                this.getControl( 'mcGuiInstruction08' ).setVisible( true );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription08' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_MOBILE_INSTRUCTION08' );
                break;
            case TutorialSignboard.TUTO_JUMP_HOOK:
                this.getControl( 'mcGuiInstruction07' ).setVisible( true );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription07' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_MOBILE_INSTRUCTION07' );
                break;
            case TutorialSignboard.TUTO_HOOKSHOOT:
                this.getControl( 'mcGuiInstruction07' ).setVisible( true );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription07' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_MOBILE_INSTRUCTION09' );
                break;
        }
        HudPlatform.instance.canvas.addChild( this.canvas );


        this.fixGameScale();
    }
    else {
        SScreen.call( this, 'mcGuiTutorialPc', x, y );

        switch ( this.m_type ) {
            case TutorialSignboard.TUTO_MOVE:
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtLetter' ) ).setTextEmpty();
                this.getControl( 'mcGuiInstruction' ).setClip( 'mcGuiTutorialsDirectional' );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription01' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_INSTRUCTION01' );
                break;
            case TutorialSignboard.TUTO_JUMP:
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtLetter' ) ).setTextEmpty();
                this.getControl( 'mcGuiInstruction' ).setClip( 'mcGuiTutorialsJump' );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription01' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_INSTRUCTION02' );
                break;
            case TutorialSignboard.TUTO_JUMP_OVER:
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtLetter' ) ).setTextEmpty();
                this.getControl( 'mcGuiInstruction' ).setClip( 'mcGuiTutorialsJump' );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription01' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_INSTRUCTION04' );
                break;
            case TutorialSignboard.TUTO_CHANGE:
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtLetter' ) ).setTextEmpty();
                this.getControl( 'mcGuiInstruction' ).setClip( 'mcGuiTutorialsSpacebar' );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription01' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_INSTRUCTION03' );
                break;
            case TutorialSignboard.TUTO_DRONE:
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtLetter' ) ).setTextEmpty();
                this.getControl( 'mcGuiInstruction' ).setClip( 'mcGuiTutorialsJump' );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription01' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_INSTRUCTION05' );
                break;
            case TutorialSignboard.TUTO_GLIDE:
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtLetter' ) ).setTextEmpty();
                this.getControl( 'mcGuiInstruction' ).setClip( 'mcGuiTutorialsJump' );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription01' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_INSTRUCTION10' );
                break;
            case TutorialSignboard.TUTO_WALL_JUMP:
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtLetter' ) ).setTextEmpty();
                this.getControl( 'mcGuiInstruction' ).setClip( 'mcGuiTutorialsJump' );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription01' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_INSTRUCTION06' );
                break;
            case TutorialSignboard.TUTO_HACK:
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtLetter' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_LETTER' );
                this.getControl( 'mcGuiInstruction' ).setClip( 'mcGuiTutorialsSpecial' );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription01' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_INSTRUCTION08' );
                break;
            case TutorialSignboard.TUTO_JUMP_HOOK:
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtLetter' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_LETTER' );
                this.getControl( 'mcGuiInstruction' ).setClip( 'mcGuiTutorialsSpecial' );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription01' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_INSTRUCTION07' );
                break;
            case TutorialSignboard.TUTO_HOOKSHOOT:
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtLetter' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_LETTER' );
                this.getControl( 'mcGuiInstruction' ).setClip( 'mcGuiTutorialsSpecial' );
                /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription01' ) ).setTextLocalized( 'STR_REP_HUD_TUTORIAL_PC_INSTRUCTION09' );
                break;
        }
        GuiGame.instance.canvasEffects.addChild( this.canvas );
    }

    this.canvas.visible = false;
}
Application.subclass( TutorialSignboard, SScreen );

TutorialSignboard.prototype.hideAll = function () {
    if ( !Application.instance.isMobileDevice ) {
        return;
    }

    for ( var i = 1; i <= 8; i++ ) {
        this.getControl( 'mcGuiInstruction0' + i ).setVisible( false );
        /** @type {GuiText} */ ( this.getControl( 'mcGuiTxtDescription0' + i ) ).setTextEmpty();
    }
};

/**
 * @public
 */
TutorialSignboard.prototype.free = function() {
    if ( Application.instance.isMobileDevice ) {
        HudPlatform.instance.canvas.removeChild( this.canvas );
    }
    else {
        GuiGame.instance.canvasEffects.removeChild( this.canvas );
    }

    this.m_world = null;
    SScreen.prototype.free.call( this );
};

/** @const {number} */ TutorialSignboard.TUTO_MOVE = 10;
/** @const {number} */ TutorialSignboard.TUTO_JUMP = 11;
/** @const {number} */ TutorialSignboard.TUTO_JUMP_OVER = 12;
/** @const {number} */ TutorialSignboard.TUTO_CHANGE = 13;
/** @const {number} */ TutorialSignboard.TUTO_DRONE = 14;
/** @const {number} */ TutorialSignboard.TUTO_WALL_JUMP = 15;
/** @const {number} */ TutorialSignboard.TUTO_HACK = 16;
/** @const {number} */ TutorialSignboard.TUTO_JUMP_HOOK = 17;
/** @const {number} */ TutorialSignboard.TUTO_HOOKSHOOT = 18;
/** @const {number} */ TutorialSignboard.TUTO_GLIDE = 19;

/**
 * @public
 * @param {boolean=} val
 */
TutorialSignboard.prototype.activate = function( val ) {
    val = typeof val !== 'undefined' ? val : true;

    if ( this.canvas.visible === val ) {
        return;
    }

    this.canvas.visible = val;

    if ( !val ) {
        HudPlatform.instance.deleteTutoVfx();
        return;
    }

    switch ( this.m_type ) {
        case TutorialSignboard.TUTO_CHANGE:
            HudPlatform.instance.onFXSelectRon();
            break;
        case TutorialSignboard.TUTO_DRONE:
        case TutorialSignboard.TUTO_GLIDE:
        case TutorialSignboard.TUTO_HACK:
            if ( this.isPlayerKim() ) {
                HudPlatform.instance.onFXSelectRon();
            }
            break;
        case TutorialSignboard.TUTO_WALL_JUMP:
        case TutorialSignboard.TUTO_JUMP_HOOK:
        case TutorialSignboard.TUTO_HOOKSHOOT:
            if ( !this.isPlayerKim() ) {
                HudPlatform.instance.onFXSelectKin();
            }
            break;
    }
};

/**
 * @return {boolean}
 */
TutorialSignboard.prototype.isPlayerKim = function () {
    return PlatformGame.instance.world.player().mode === PlayerPlatform.MODE_GIRL;
};

/**
 * @public
 * @return {number}
 */
TutorialSignboard.prototype.type = function() {
    return this.m_type;
};

/**
 * @public
 * @return {number}
 */
TutorialSignboard.prototype.areaId = function() {
    return this.m_areaId;
};

TutorialSignboard.prototype.setPosition = function( x, y ) {
    this.m_x = x;
    this.m_y = y;
    if ( !Application.instance.isMobileDevice ) {
        this.canvas.position.x = x;
        this.canvas.position.y = y;
    }
};

