/* global define, _, game, createjs, data, stageWidth, stageHeight */
define([
  'common/spriteSheetManager',
  'common/gameText'
], function(ssm, gameTextHelper) {
  var seenCone = false;
  var seenDoll = false;
  var seenBoost = false;
  function makeTutorialText(key, bounds) {
    //Header
    var instructionText = gameTextHelper.createTextForLocale(key, {
      width: 0.3 * stageWidth,
      height: 0.2 * stageHeight
    }, {
      color: '#fff',
      size: 70,
      textAlign: 'center'
    }, {
      size: 0,
      color: '#3d2228'
    }, {
      color: '#3d2228',
      offsetX: -3,
      offsetY: 7
    });
    instructionText.regY = instructionText.getBounds().height;
    instructionText.y = -bounds.height * 1.15;
    instructionText.x = bounds.width / 2;
    createjs.Tween.get(instructionText, {loop: true})
      .to({scaleX: 1.2, scaleY: 1.2}, 500, createjs.Ease.sineInOut)
      .to({scaleX: 1.2, scaleY: 1.2}, 500, createjs.Ease.sineInOut);
    return instructionText;
  }

  function removeSelf() {
    if (this.parent) {
      this.parent.removeChild(this);
      this.removeAllChildren();
    }
  }

  function imageForType(type, specialIndex) {
    if (type === 'doll') {
      return _.chain([
        _.times(1, _.constant('daisy0')),
        _.times(1, _.constant('daisy1')),
        _.times(1, _.constant('daisy2')),
        _.times(1, _.constant('daisy3'))
      ]).flatten().sample().value();
    } else if(type === 'special') {
      switch (specialIndex) {
        case 1:
          return 'soda';
          break;
        case 2:
          return 'candy';
          break;
        case 3:
          return 'cereal';
          break;
        case 4:
          return 'tp';
          break;
        default:
          return 'soda';
      }
    } else {
      return type;
    }
  }

  /**
   * Creates a new obstacle as a container and a sprite inside
   * @param {Object} params
   * @param {Number} params.x The x location
   * @param {Number} params.row The semantic row location
   * @returns {Object} instance of createjs.Container
   */
  function createObstacle(params) {
    var cont = new createjs.Container();
    cont.removeSelf = removeSelf;
    return cont;
  }

  /**
   * Creates a new obstacle as a container and a sprite inside
   * @param {Object} obstacle the container that represents the obstacle
   * @param {Object} params
   * @param {Number} params.x The x location
   * @param {Number} params.row The semantic row location
   * @param {String} params.type The semantic type of the obstacle
   * @param {Boolean} params.special Whether this pick-up is special
   * @returns {Object} instance of createjs.Container
   */
  function initObstacle(obstacle, params) {
    createjs.Tween.removeTweens(obstacle);
    obstacle.rotation = 0;
    obstacle.alpha = 1;
    _.extend(obstacle, _.pick(params, 'row', 'type', 'specialIndex'));
    var ray;
    var spriteKey =
      imageForType(params.special ? 'special' : params.type, params.specialIndex);
    var sh = new createjs.Sprite(ssm.get('propsSheet'), spriteKey);
    sh.type = 'mainImage';
    if (params.type === 'doll') {
      sh.regY = data[spriteKey + 'ShadowY'];
    } else {
      sh.regY = sh.getBounds().height;
    }
    if (params.special) {
      ray = new createjs.Sprite(ssm.get('propsSheet'), 'rays');
      ray.regX = ray.getBounds().width / 2;
      ray.regY = ray.getBounds().height / 2;
      _.extend(ray, data[spriteKey + 'Center']);
      createjs.Tween.get(ray, {loop: true})
        .to({rotation: 359}, 2500);
    }
    //shadow
    var shadow = new createjs.Sprite(ssm.get('propsSheet'), 'shadow');
    shadow.y = stageHeight * -0.3;
    shadow.x = stageWidth * -0.03;
    shadow.alpha = 0.7;
    obstacle.special = !!params.special;
    if(params.type === 'doll') {
      obstacle.addChild(shadow);
    }
    obstacle.addChild(ray);
    obstacle.addChild(sh);
    var segmentHeight = stageHeight *
      data.gameFeel.movementRegionYPercent;
    var roadHeight = segmentHeight *
      data.gameFeel.movementRegionChunks;
    var bottomHeight = stageHeight *
      data.gameFeel.movementRegionBottomPadding;
    var scale = 1;
    if (params.type === 'doll') {
      scale = 0.8;
    }
    obstacle.scaleX = obstacle.scaleY = scale;
    obstacle.x = params.x + gridColumnWidth / 2;
    obstacle.y = (segmentHeight * (params.row + 0.5)) +
      (stageHeight - bottomHeight - roadHeight);
    if(params.type === 'slow'){
      obstacle.y += stageHeight * 0.04;
    }
    switch (params.row) {
      case 0:
        obstacle.z = ZLayer.topRoad;
        break;
      case 1:
        obstacle.z = ZLayer.topMiddleRoad;
        break;
      case 2:
        obstacle.z = ZLayer.middleRoad;
        break;
      case 3:
        obstacle.z = ZLayer.bottomMiddleRoad;
        break;
      case 4:
        obstacle.z = ZLayer.bottomRoad;
        break;
    }
    obstacle.collided = false;
    if (params.type === 'doll' && !seenDoll) {
      seenDoll = true;
      obstacle.addChild(makeTutorialText('tutorial1Line1', sh.getBounds()));
    } else if (params.type === 'slow' && !seenCone) {
      seenCone = true;
      obstacle.addChild(makeTutorialText('tutorial1Line2', sh.getBounds()));
    } else if (params.type === 'boost' && !seenBoost) {
      seenBoost = true;
      var tutBounds = sh.getBounds();
      var tut = makeTutorialText('tutorial2Line1', tutBounds);
      tut.x += tutBounds.width / 2;
      obstacle.addChild(tut);
    }

    if (data.debug.drawButtonHitAreas) {
      var center = new createjs.Shape();
      center.graphics.beginFill('#f00').drawCircle(0, 0, 10);
      obstacle.addChild(center);
    }
  }
  return {
    acquire: function(params) {
      var ob = createObstacle(params);
      initObstacle(ob, params);
      return ob;
    }
  };
});