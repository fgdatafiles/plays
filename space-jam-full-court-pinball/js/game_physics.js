





Game.prototype.doGenerateTable = function(table_layer_obj){

		trace("doGenerateTable() ");


		var physics_items = table_layer_obj.items;
		var physics_layer = table_layer_obj.layer;

		trace("doGenerateTable() " + physics_layer);


		for(var i=0; i<physics_items.length; i++){
			var o = physics_items[i];

			//special names
			switch(o.id){

				case "bugs_1":
				case "bugs_2":

					var bodyDef = {type:"kinematic"};
					
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					
					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));

					if(o.id){oTABLE.items[o.id] = body;}

					continue;
					break;

				case "speedy_booster":
	
					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setActive(false);
					body.createFixture(fixtureDef);
					body.setAngle(__utils.radFromDeg(o.rotation));

					if(o.id){oTABLE.items[o.id] = body;}

					continue;
					break;

				case "foghorn":
				case "sam":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					
					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));

					if(o.id){oTABLE.items[o.id] = body;}

					continue;
					break;

				case "foghorn_show":
				case "foghorn_hide":
				case "sam_show":
				case "sam_hide":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					
					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));

					if(o.id){oTABLE.items[o.id] = body;}

					continue;
					break;


				case "tweety_dunk":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));
					body.createFixture(fixtureDef);

					if(o.id){oTABLE.items[o.id] = body;}

					continue;
					break;

				case "daffy_1":
				case "daffy_2":
				case "daffy_1_shoot":
				case "daffy_2_shoot":
				case "daffy_dunk":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));
					body.createFixture(fixtureDef);

					if(o.id){oTABLE.items[o.id] = body;}
					
					continue;
					break;

				case "granny":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));

					if(o.id){oTABLE.items[o.id] = body;}
					
					continue;
					break;

				case "roadrunner_booster":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.createFixture(fixtureDef);
					body.setAngle(__utils.radFromDeg(o.rotation));

					if(o.id){oTABLE.items[o.id] = body;}
					continue;
					break;

				case "gossamer_target":

					var bodyDef = {type:"kinematic"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					
					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));
					body.setActive(false);

					if(o.id){oTABLE.items[o.id] = body;}
					continue;
					break;

				case "bugs_transporter":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					
					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					
					if(o.id){oTABLE.items[o.id] = body;}

					continue;
					break;

				case "lola_1":
				case "lola_2":
				case "lola_3":
				case "lola_4":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					
					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));
					body.setActive(false);

					if(o.id){oTABLE.items[o.id] = body;}

					continue;
					break;

				case "coyote_1":
				case "coyote_2":
				case "coyote_3":
				case "coyote_4":
				case "coyote_5":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					
					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setActive(false);

					if(o.id){oTABLE.items[o.id] = body;}

					continue;
					break;

				case "coyote_trap_1":
				case "coyote_trap_2":
				case "coyote_trap_3":
				case "coyote_trap_4":
				case "coyote_trap_5":


					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					
					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setActive(false);

					var user_data = {};
					user_data.radius = o.r * P2M;
					body.setUserData(user_data);
					
					if(o.id){oTABLE.items[o.id] = body;}

					continue;
					break;

				case "marvin_target":
							
					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					
					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));

					if(o.id){oTABLE.items[o.id] = body;}
					continue;
					break;


				case "marvin_spawner":
				
					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setActive(false);

					if(o.id){oTABLE.items[o.id] = body;}

					continue;
					break;

				case "taz":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));

					var user_data = {};
					user_data.radius = o.r * P2M;
					body.setUserData(user_data);

					if(o.id){oTABLE.items[o.id] = body;}

					continue;
					break;
			}



			
			switch(o.type){

				case "helper":
					if(o.id){oTABLE.helpers[o.id] = o;}
					break;

				
				case "box":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					
					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));
					
					break;

				case "circle":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					
					break;

				case "circle_bumper":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.createFixture(fixtureDef);

					var game_object = GAME.table.getObjectByName(o.obj);
					game_object.rb = body;

					var user_data = {};
					user_data.bounce = o.bounce;
					user_data.pnts = o.pnts;
					user_data.is_ball = false;
					user_data.shape = "circle";
					user_data.hit_callback = GAME.doHitBumper;
					user_data.object = game_object;
					user_data.snd = o.snd;
	
					body.setUserData(user_data);

					if(o.id){oTABLE.items[o.id] = body;}

					break;	

				case "bumper_box":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));

					var user_data = {};
					user_data.bounce = o.bounce;
					user_data.pnts = o.pnts;
					user_data.is_ball = false;
					user_data.shape = "box";
					user_data.hit_callback = GAME.doHitBumper;
					user_data.object = GAME.table.getObjectByName(o.obj);
					user_data.snd = o.snd;

					body.setUserData(user_data);

					if(o.id){oTABLE.items[o.id] = body;}

					break;

				case "spawner":
					oGAME.ball_spawn_pos = pl.Vec2(o.x * P2M, o.y * P2M);
					break;

				case "transporter":
					oGAME.ball_transport_pos = pl.Vec2(o.x * P2M, o.y * P2M);
					break;


				case "hole":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.isSensor = true;
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));

					var user_data = {};
					user_data.impulse = 0;
					user_data.pnts = 0;
					user_data.is_ball = false;
					user_data.enter_callback = GAME.doHitHole;
					user_data.object = null;

					body.setUserData(user_data);

					if(o.id){oTABLE.items[o.id] = body;}
					break;

				case "booster":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setActive(false);
					body.createFixture(fixtureDef);

					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));

					var user_data = {};
					user_data.is_booster = true;
					user_data.speed = o.speed;
					user_data.exit_callback = GAME.doBooster;
					user_data.object = null;
					user_data.snd = o.snd;
					user_data.action = o.action;
					body.setUserData(user_data);

					if(o.id){oTABLE.items[o.id] = body;}
					break;	
						
				case "oneway":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));

					var user_data = {};
					user_data.is_door = true;
					user_data.presolve_callback = GAME.doOneWayDoor;
					user_data.object = null;
					user_data.snd = null;
					body.setUserData(user_data);

					if(o.id){oTABLE.items[o.id] = body;}
					break;	

				case "level_switcher":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					fixtureDef.isSensor = true;

					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));

					var user_data = {};
					user_data.switchTo = o.switchTo;
					user_data.enter_callback = GAME.doLevelSwitcherEnter;
					user_data.exit_callback = GAME.doLevelSwitcherExit;
					body.setUserData(user_data);

					if(o.id){oTABLE.items[o.id] = body;}
					break;			


				case "launcher":

					//anchor
					var anchor_body_def = {type:"static"};

					var anchor_fixture_def = {friction:0, restitution:0};
					anchor_fixture_def.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					anchor_fixture_def.filterGroupIndex = 1;
					anchor_fixture_def.filterCategoryBits = physics_layer;

					var anchor_body =  PHYSICS.world.createBody(anchor_body_def);
					anchor_body.setPosition(pl.Vec2(o.x * P2M, (o.y+200) * P2M));
					anchor_body.createFixture(anchor_fixture_def);

					//launcher
					var launcher_body_def = {type:"static", allowSleep:true};
					
					var launcher_fixture_def = {friction:0, restitution:0.05, density:1.0};
					launcher_fixture_def.isBullet = true;
					launcher_fixture_def.filterGroupIndex = -1;
					launcher_fixture_def.filterCategoryBits = physics_layer;

					launcher_fixture_def.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);

					var launcher_body = PHYSICS.world.createBody(launcher_body_def);
					launcher_body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					launcher_body.createFixture(launcher_fixture_def);

					//joint
					var launcher_joint_def = {};
					launcher_joint_def.upperTranslation = 31*P2M;
					launcher_joint_def.lowerTranslation = 0;
					launcher_joint_def.enableLimit = true;
					launcher_joint = PHYSICS.world.createJoint(pl.PrismaticJoint(launcher_joint_def,
						anchor_body,
						launcher_body,
						launcher_body.getPosition(),
						pl.Vec2(0,1))
					);

					var dummy = {};
					dummy.doUpdate = __game.doUpdatePlunger;
					dummy.state = 0;
					dummy.force = -25;
					dummy.base_x = o.x * P2M;
					dummy.base_y = o.y * P2M;
					dummy.me = launcher_body;
					dummy.travel = (31*P2M);
					dummy.joint = launcher_joint;
					dummy.need_destroy = false;
					dummy.object = GAME.table.getObjectByName("plunger");
					dummy.object.scale.set(0.8, 0.8, 1);
					dummy.snd = 'pinball_launch';
					GAME.actives.push(dummy);
					break;

	
				case "gate":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));

					var user_data = {};
					if(o.obj != 'none'){
						user_data.object = GAME.table.getObjectByName(o.obj);
					}

					if(!o.is_on){
						body.setActive(false);
						if(user_data.object){
							user_data.object.visible = false;
						}
					}
					
					body.setUserData(user_data);

					if(o.id){oTABLE.items[o.id] = body;}

					break;
						
				case "bonus":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setActive(false);
					body.createFixture(fixtureDef);

					var user_data = {};
					user_data.name = "bonus_" + o.group + "_" + o.target;
					user_data.is_ball = false;
					user_data.group = o.group;
					user_data.pnts = o.pnts;
					user_data.target = o.target;
					user_data.is_virtual = true;
					user_data.is_complete = false;
					user_data.complete_callback = __game[o.complete_callback];
					user_data.enter_callback = GAME.doBonus;
					
					user_data.object = GAME.table.getObjectByName("bonus_" + o.group + "_" + o.target);
					body.setUserData(user_data);

					oTABLE.bonus_groups['group_' + o.group] = oTABLE.bonus_groups['group_' + o.group] || new Array();
					var group_array = oTABLE.bonus_groups['group_' + o.group];
					group_array.push(body);

					if(o.id){oTABLE.items[o.id] = body;}

					break;	
					

				case "trigger":
					
					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Box(o.scalex * P2M, o.scaley * P2M);
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;
					if(o.virtual){
						fixtureDef.isSensor = true;	
					}
					var body = PHYSICS.world.createBody(bodyDef);
					body.createFixture(fixtureDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setAngle(__utils.radFromDeg(o.rotation));
					body.createFixture(fixtureDef);

					var user_data = {};
					user_data.name = "target_" + o.group + "_" + o.target;
					user_data.is_ball = false;
					user_data.group = o.group;
					user_data.target = o.target;
					user_data.up = true;
					user_data.is_hit = false;
					user_data.is_virtual = o.virtual;	
					user_data.pnts = o.pnts;
					user_data.snd = o.snd;

					if(o.virtual){
						user_data.enter_callback = __game.doHitTrigger;
					}else{
						user_data.hit_callback = __game.doHitTrigger;
					}

					user_data.complete_callback = __game[o.complete_callback];
					user_data.object = GAME.table.getObjectByName(o.obj);
					user_data.light = GAME.table.getObjectByName(o.obj + "_light");

					body.setUserData(user_data);

					//register trigger group
					oTABLE.trigger_groups['group_' + o.group] = oTABLE.trigger_groups['group_' + o.group] || new Array();
					
					var group_array = oTABLE.trigger_groups['group_' + o.group];
					group_array.push(body);

					if(o.id){oTABLE.items[o.id] = body;}
					
					break;
					
				case "multiplier":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.setActive(false);
					body.createFixture(fixtureDef);

					var user_data = {};
					user_data.enter_callback = __game.doRequestMultiply;
					user_data.group = 6;
					user_data.object = null;
					user_data.snd = o.snd;
					body.setUserData(user_data);
					
					oTABLE.multiplier = body;

					if(o.id){oTABLE.items[o.id] = body;}
					break;	
	
				case "magnet":

					var magnet_obj = {};
					magnet_obj.pos = pl.Vec2(o.x * P2M, o.y * P2M);
					magnet_obj.radius = o.r * P2M;
					magnet_obj.power = 8;
					oTABLE.magnets.push(magnet_obj);
					break;


					
				case "doer":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.createFixture(fixtureDef);

					var user_data = {};
					user_data.enter_callback = __game[o.action];
					body.setUserData(user_data);

					if(o.id){oTABLE.items[o.id] = body;}
					break;

				
					break;

				case "glue":

					var bodyDef = {type:"static"};
					var fixtureDef = {friction:0, restitution:0};
					fixtureDef.shape = pl.Circle(o.r * P2M);
					fixtureDef.isSensor = true;
					fixtureDef.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var body = PHYSICS.world.createBody(bodyDef);
					body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));
					body.createFixture(fixtureDef);

					var user_data = {};
					user_data.enter_callback = GAME.doEnterGlue;
					user_data.exit_callback = GAME.doExitGlue;
					body.setUserData(user_data);

					if(o.id){oTABLE.items[o.id] = body;}
					
					break;	
					
				case "flipper":

					//pivot
					var pivot_fixture_def = {friction:0, restitution:0.05};
					pivot_fixture_def.shape = pl.Circle(o.scaley * P2M);
					pivot_fixture_def.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var pivot_body = PHYSICS.world.createBody({type:"static"});
					pivot_body.setPosition(pl.Vec2(o.x * P2M, o.y * P2M));					
					pivot_body.createFixture(pivot_fixture_def);

					//flipper
					var flipper_fixture_def = {friction:0, restitution:0.05, isBullet:true, density:1.0};
					flipper_fixture_def.shape = pl.Box(o.scalex * P2M, o.scaley * P2M, pl.Vec2(1,0));
					flipper_fixture_def.filterGroupIndex = -1;
					fixtureDef.filterCategoryBits = physics_layer;

					var flipper_body_def = {type:"dynamic", allowSleep:true};
					var flipper_body = PHYSICS.world.createBody(flipper_body_def);
					flipper_body.setPosition(pl.Vec2(o.x * P2M, (o.y) * P2M));
					flipper_body.setAngle(__utils.radFromDeg(o.rotation));
					
					var flipper_fixture = flipper_body.createFixture(flipper_fixture_def);

					//joint
					var revoluteJointDef = {};
					revoluteJointDef.bodyA = pivot_body;
					revoluteJointDef.bodyB = flipper_body;
				  	revoluteJointDef.collideConnected = false;
					revoluteJointDef.localAnchorA = pl.Vec2(0,0);
  					revoluteJointDef.localAnchorB = pl.Vec2(-1,0);
					revoluteJointDef.referenceAngle = __utils.radFromDeg(o.rotation); 
					revoluteJointDef.enableMotor = true;
				  	revoluteJointDef.maxMotorTorque = 1500;
				 	revoluteJointDef.motorSpeed = 0.0;
					revoluteJointDef.enableLimit = true;
					
					if(o.dir == 1){
						revoluteJointDef.upperAngle = 0;
						revoluteJointDef.lowerAngle = __utils.radFromDeg(-o.dir * o.limit);
					}else{
						revoluteJointDef.upperAngle = __utils.radFromDeg(-o.dir * o.limit);
						revoluteJointDef.lowerAngle = 0;
					}

					var flipper_joint = pl.RevoluteJoint(revoluteJointDef, pivot_body, flipper_body, pivot_body.getPosition());
					PHYSICS.world.createJoint(flipper_joint);

					var dummy = new Object();
					dummy.doUpdate = __game.doUpdateFlipper;
					dummy.joint = flipper_joint;
					dummy.state = 0;
					dummy.flipper = flipper_body;
					dummy.key = (o.key == 'left') ? 1:2;
					dummy.force = -o.dir * 30;
					dummy.need_destroy = false;
					dummy.object = GAME.table.getObjectByName(o.obj);

					dummy.object.position.z += .1;

					GAME.actives.push(dummy);
					


					break;
			}

		}
	}


	Game.prototype.doDeactivateBody = function(me){
		try{
			me.setActive(false);
		}catch(e){};
	}
	
	Game.prototype.doActivateBody = function(me){
		try{
			me.setActive(true);
		}catch(e){

			trace(e);
		};
	}
	
	Game.prototype.doDestroyBody = function(me)
	{
		
		PHYSICS.world.destroyBody(me);
	}

	Game.prototype.doDestroyPhysicsWorld = function()
	{
		if(m_world){
			var node = m_world.getBodyList();
			while (node){
				var b = node;
				node = node.getNext();    
				m_world.destroyBody(b);                     
				b = null;
			}
		}
         m_world = null;
	}




	//=================================================================
	// |||| COLLISIONS ||||||||||||||||||||||||||||||||||||||||||||||
	//=================================================================


	Game.prototype.BeginContact = function(contact)
	{
		var fixtureA = contact.getFixtureA();
		var fixtureB = contact.getFixtureB();
		var body_a = fixtureA.getBody();
		var body_b = fixtureB.getBody();
		var data_a = body_a.getUserData();
		var data_b = body_b.getUserData();
		
		if(fixtureA.isSensor()){
			if(data_a.enter_callback){	
				data_a.enter_callback(contact, body_b, body_a);
			}
		}else if(fixtureB.isSensor()){	
			if(data_b.enter_callback){
				data_b.enter_callback(contact, body_a, body_b);
			}
		}	
	}

	Game.prototype.EndContact = function(contact)
	{
		var fixtureA = contact.getFixtureA();
		var fixtureB = contact.getFixtureB();
		var body_a = fixtureA.getBody();
		var body_b = fixtureB.getBody();
		var data_a = body_a.getUserData();
		var data_b = body_b.getUserData();
		
		if(fixtureA.isSensor()){
			if(data_a.exit_callback){	
				data_a.exit_callback(contact, body_b, body_a);
			}
		}else if(fixtureB.isSensor()){	
			if(data_b.exit_callback){
				data_b.exit_callback(contact, body_a, body_b);
			}
		}
	}




	Game.prototype.PreSolve = function(contact, manifold) 
	{
		//find objects
		var body_a = contact.getFixtureA().getBody();
		var data_a = body_a.getUserData();
		var body_b = contact.getFixtureB().getBody();		
		var data_b = body_b.getUserData();


		if(data_a){
			if(data_a.presolve_callback && data_b){
				if(data_b.is_ball && !data_a.is_ball){
					data_a.presolve_callback(contact, body_b, body_a);
				}
			}
		}

		if(data_b){
			if(data_b.presolve_callback && data_a){
				if(data_a.is_ball && !data_b.is_ball){
					data_b.presolve_callback(contact, body_a, body_b);
				}
			}
		}	
	}


	Game.prototype.PostSolve = function(contact, impulse) 
	{
		var impulse = impulse.normalImpulses[0];
		if (impulse < 0.2){
			return;
		}
		
		//find objects
		var body_a = contact.getFixtureA().getBody();
		var data_a = body_a.getUserData();
		var body_b = contact.getFixtureB().getBody();		
		var data_b = body_b.getUserData();


		if(data_a){
			if(data_a.hit_callback && data_b){
				if(data_b.is_ball && !data_a.is_ball){
					data_a.hit_callback(contact, body_b, body_a);
				}
			}
		}

		if(data_b){
			if(data_b.hit_callback && data_a){
				if(data_a.is_ball && !data_b.is_ball){
					data_b.hit_callback(contact, body_a, body_b);
				}
			}
		}	
	}