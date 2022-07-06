{
	"tileWidth": 80,
	"tileHeight": 80,
	"width": 13,
	"tileConfigs":
	[
		{
			"id": "wallTileLeft1",
			"images":
			[
				{
					"imageId": "tileWall1",
					"scaleY": -1.0,
					"isForeground": true
				}
			],
			"traversable" : false
		},
		{
			"id": "wallTileLeft2",
			"images":
			[
				{
					"imageId": "tileWall2",
					"scaleY": -1.0,
					"isForeground": true
				}
			],
			"traversable" : false
		},
		{
			"id": "wallTileLeft3",
			"images":
			[
				{
					"imageId": "tileWall3",
					"scaleY": -1.0,
					"isForeground": true
				}
			],
			"traversable" : false
		},
		{
			"id": "wallTileRight1",
			"images":
			[
				{
					"imageId": "tileWall1",
					"rotation": 180.0,
					"isForeground": true
				}
			],
			"traversable" : false
		},
		{
			"id": "wallTileRight2",
			"images":
			[
				{
					"imageId": "tileWall2",
					"rotation": 180.0,
					"isForeground": true
				}
			],
			"traversable" : false
		},
		{
			"id": "wallTileRight3",
			"images":
			[
				{
					"imageId": "tileWall3",
					"rotation": 180.0,
					"isForeground": true
				}
			],
			"traversable" : false
		},		
		{
			"id": "dirtTile1",
			"images":
			[
				{
					"imageId": "tileGround1"
				}
			]
		},
		{
			"id": "dirtTile2",
			"images":
			[
				{
					"imageId": "tileGround2"
				}
			]
		},
		{
			"id": "dirtTile3",
			"images":
			[
				{
					"imageId": "tileGround3"
				}
			]
		},
		{
			"id": "dirtTile4",
			"images":
			[
				{
					"imageId": "tileGround4"
				}
			]
		},
		{
			"id": "riverTile1",
			"images":
			[
				{
					"imageId": "tileGround1"				
				},
				{
					"imageId": "tileWater1"				
				}
			],
			"animations":
			[
				{
					"animationId": "reflection",
					"startOnRandomFrame": true
				}
			],
			"isWater" : true
		},
		{
			"id": "riverTile2",
			"images":
			[
				{
					"imageId": "tileGround1"				
				},
				{
					"imageId": "tileWater1"				
				}
			],			
			"isWater" : true
		},
		{
			"id": "riverTileWithRock1",
			"images":
			[
				{
					"imageId": "tileGround1"				
				},
				{
					"imageId": "tileWater1"				
				},
				{
					"imageId": "waterRock"				
				}
			]
		},
		{
			"id": "railTile1",
			"images":
			[
				{
					"imageId": "tileGround1"				
				},
				{
					"imageId": "tileHole"				
				},
				{
					"imageId": "tileRail"				
				}
			]
		},
		{
			"id": "waterWallTileLeft1",
			"images":
			[
				{
					"imageId": "tileWall1",
					"isForeground": true
				},
				{
					"imageId": "tileWallWater",
					"anchorY": 0.75,
					"isForeground": true
				}
			],
			"animations":
			[
				{
					"animationId" : "waterfallBottom",
					"offsetX" : 65,
					"isForeground": true
				}
			],
			"traversable" : false
		},
		{
			"id": "waterWallTileRight1",
			"images":
			[
				{
					"imageId": "tileWall1",
					"rotation": 180.0,
					"isForeground": true		
				},
				{
					"imageId": "tileWallWater",
					"anchorY": 0.75,
					"scaleX": -1.0,
					"isForeground": true
				}
			],
			"animations":
			[
				{
					"animationId" : "waterfallBottom",
					"offsetX" : -14,
					"isForeground": true
				}
			],
			"traversable" : false
		},
		{
			"id": "waterWallTileLeft2",
			"images":
			[	
				{
					"imageId": "tileGround1"				
				},
				{
					"imageId": "tileWater1"				
				},
				{
					"imageId": "tileWallDoor",
					"anchorY": 0.75,
					"scale": -1.0,
					"isForeground": true
				}
			],
			"traversable" : false
		},
		{
			"id": "waterWallTileRight2",
			"images":
			[
				{
					"imageId": "tileGround1"				
				},
				{
					"imageId": "tileWater1"				
				},
				{
					"imageId": "tileWallDoor",
					"anchorY": 0.75,
					"scaleX": -1.0,
					"isForeground": true
				}
			],
			"traversable" : false
		},
		{
			"id": "railWallTileLeft1",
			"images":
			[
				{
					"imageId": "tileWall1"
				},
				{
					"imageId": "tileWallDoor",
					"anchorY": 0.75,
					"scale": -1.0,
					"isForeground": true
				}
			],
			"traversable" : false
		},
		{
			"id": "railWallTileRight1",
			"images":
			[
				{
					"imageId": "tileWall1",
					"rotation": 180.0		
				},
				{
					"imageId": "tileWallDoor",
					"anchorY": 0.75,
					"scaleX": -1.0	,
					"isForeground": true				
				}
			],
			"traversable" : false
		}
	],
	"rowSectionConfigs":
	[
		{	
			"id": "dirtRowClear1",
			"rowImage": "",
			"width": 13,
			"chance": 1.0,
			"priority": 1,
			"maxRowIndex": 15,
			"rows" :
			[
				{					
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile2"]
						},
						{
							"chance": 0.5,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile1", "dirtTile3", "dirtTile4"]
						},
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["wallTileLeft1", "wallTileLeft2", "wallTileLeft3"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["wallTileRight1", "wallTileRight2", "wallTileRight3"]
						}
					]
				}							
			]
		},
		{	
			"id": "dirtRowClearAlternating",
			"rowImage": "",
			"width": 13,
			"chance": 1.0,
			"priority": 1,
			"indexModuli": [2],
			"rows" :
			[
				{					
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile2"]
						},
						{
							"chance": 0.5,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile1", "dirtTile3", "dirtTile4"]
						},
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["wallTileLeft1", "wallTileLeft2", "wallTileLeft3"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["wallTileRight1", "wallTileRight2", "wallTileRight3"]
						}
					]
				}							
			]
		},
		{	
			"id": "dirtRow1",
			"rowImage": "",
			"width": 13,
			"chance": 1.0,
			"rows" :
			[
				{
					"objectSpawnConfigs": 
					[
						{
							"validColumns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"chance": 1.0,
							"objectTypes": ["barrel1", "barrel2", "crate1", "crate2", "rock1", "rock2", "hazardSheet", "hole"],
							"minIterations": 1,
							"maxIterations": 1					
						},
						{
							"validColumns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"chance": 1.25,
							"objectTypes": ["coveredHole"],
							"minIterations": 1,
							"maxIterations": 1					
						},
						{
							"validColumns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"chance": 0.05,
							"objectTypes": ["scoobySnack"],
							"minIterations": 1,
							"maxIterations": 1					
						},
						{
							"validColumns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"chance": 0.1,
							"objectTypes": ["lostPuppy"],
							"minIterations": 1,
							"maxIterations": 1					
						}
					],
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile2"]
						},
						{
							"chance": 0.5,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile1", "dirtTile3", "dirtTile4"]
						},
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["wallTileLeft1", "wallTileLeft2", "wallTileLeft3"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["wallTileRight1", "wallTileRight2", "wallTileRight3"]
						}
					]
				}							
			]
		},		
		{	
			"id": "lotsOfBoxesLeft",
			"rowImage": "",
			"width": 13,
			"chance": 0.05,			
			"rows" :
			[
				{
					"minNumIterations": 1,
					"maxNumIterations": 1,
					"objectSpawnConfigs": 
					[
						{
							"validColumns": [1, 2, 3, 4, 5, 6],
							"chance": 1.0,
							"objectTypes": ["barrel1", "barrel2", "crate1", "crate2"],
							"minIterations": 3,
							"maxIterations": 4					
						},
						{
							"validColumns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"chance": 0.05,
							"objectTypes": ["scoobySnack"],
							"minIterations": 1,
							"maxIterations": 1					
						},
						{
							"validColumns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"chance": 0.05,
							"objectTypes": ["lostPuppy"],
							"minIterations": 1,
							"maxIterations": 1					
						}
					],
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile2"]
						},
						{
							"chance": 0.5,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile1", "dirtTile3", "dirtTile4"]
						},
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["wallTileLeft1", "wallTileLeft2", "wallTileLeft3"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["wallTileRight1", "wallTileRight2", "wallTileRight3"]
						}
					]
				}							
			]
		},	
		{	
			"id": "lotsOfBoxesRight",
			"rowImage": "",
			"width": 13,
			"chance": 0.05,			
			"rows" :
			[
				{
					"minNumIterations": 1,
					"maxNumIterations": 1,
					"objectSpawnConfigs": 
					[
						{
							"validColumns": [7, 8, 9, 10, 11],
							"chance": 1.0,
							"objectTypes": ["barrel1", "barrel2", "crate1", "crate2"],
							"minIterations": 3,
							"maxIterations": 4					
						},
						{
							"validColumns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"chance": 0.05,
							"objectTypes": ["scoobySnack"],
							"minIterations": 1,
							"maxIterations": 1					
						},
						{
							"validColumns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"chance": 0.05,
							"objectTypes": ["lostPuppy"],
							"minIterations": 1,
							"maxIterations": 1					
						}
					],
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile2"]
						},
						{
							"chance": 0.5,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile1", "dirtTile3", "dirtTile4"]
						},
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["wallTileLeft1", "wallTileLeft2", "wallTileLeft3"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["wallTileRight1", "wallTileRight2", "wallTileRight3"]
						}
					]
				}							
			]
		},	
		{	
			"id": "riverRow1_Right",
			"rowImage": "",
			"width": 13,
			"chance": 0.2,
			"minRowIndex": 15,
			"rows" :
			[				
				{		
					"objectSpawnConfigs": 
					[
						{
							"validColumns": [1],
							"chance": 1.0,
							"objectTypes": ["waterPlatformSpawner"],
							"minIterations": 1,
							"maxIterations": 1,		
							"minObjectSpeed": 125.0,
							"maxObjectSpeed": 200.0,	
							"minObjectSpawnTime": 1.0,
							"maxObjectSpawnTime": 2.0		
						}						
					],
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["waterWallTileLeft1"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["waterWallTileRight1"]
						},
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["riverTile1"]
						},
						{		
							"chance": 0.5,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["riverTile2"]
						}							
					]
				}					
			]
		},
		{	
			"id": "riverRow1_Left",
			"rowImage": "",
			"width": 13,
			"chance": 0.2,
			"minRowIndex": 15,
			"rows" :
			[				
				{		
					"objectSpawnConfigs": 
					[
						{
							"validColumns": [12],
							"chance": 1.0,
							"objectTypes": ["waterPlatformSpawner"],
							"minIterations": 1,
							"maxIterations": 1,		
							"minObjectSpeed": -200.0,
							"maxObjectSpeed": -125.0,	
							"minObjectSpawnTime": 1.0,
							"maxObjectSpawnTime": 2.0		
						}						
					],
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["waterWallTileLeft1", "waterWallTileLeft2"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["waterWallTileRight1", "waterWallTileRight2"]
						},
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["riverTile1"]
						},
						{		
							"chance": 0.5,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["riverTile2"]
						}							
					]
				}					
			]
		},
		{	
			"id": "riverRowWithRocks1",
			"rowImage": "",
			"width": 13,
			"chance": 0.2,
			"minRowIndex": 15,			
			"rows" :
			[				
				{					
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["waterWallTileLeft1", "waterWallTileLeft2"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["waterWallTileRight1", "waterWallTileRight2"]
						},
						{
							"chance": 0.3,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["riverTileWithRock1"],
							"accumulateChance" : true
						},	
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["riverTile1"]
						},
						{		
							"chance": 0.5,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["riverTile2"]
						}							
					]
				},
				{					
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile2"]
						},
						{
							"chance": 0.5,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile1", "dirtTile3", "dirtTile4"]
						},
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["wallTileLeft1", "wallTileLeft2", "wallTileLeft3"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["wallTileRight1", "wallTileRight2", "wallTileRight3"]
						}
					]
				}				
			]
		},
		{	
			"id": "railRow1",
			"rowImage": "",
			"width": 13,
			"chance": 0.2,
			"minRowIndex": 50,
			"rows" :
			[				
				{					
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["railWallTileLeft1"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["railWallTileRight1"]
						},
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["railTile1"]
						}						
					]
				}					
			]
		},
		{	
			"id": "railRowWithCart1_Right",
			"rowImage": "",
			"width": 13,
			"chance": 0.2,
			"minRowIndex": 50,			
			"rows" :
			[							
				{			
					"objectSpawnConfigs": 
					[
						{
							"validColumns": [0],
							"chance": 1.0,
							"objectTypes": ["mineCartSpawner"],
							"minIterations": 1,
							"maxIterations": 1,		
							"minObjectSpeed": 250.0,
							"maxObjectSpeed": 350.0,	
							"minObjectSpawnTime": 2.0,
							"maxObjectSpawnTime": 3.0		
						}						
					],
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["railWallTileLeft1"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["railWallTileRight1"]
						},
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["railTile1"]
						}						
					]
				}					
			]
		},
		{	
			"id": "railRowWithCart1_Left",
			"rowImage": "",
			"width": 13,
			"chance": 0.2,
			"minRowIndex": 50,			
			"rows" :
			[							
				{			
					"objectSpawnConfigs": 
					[
						{
							"validColumns": [12],
							"chance": 1.0,
							"objectTypes": ["mineCartSpawner"],
							"minIterations": 1,
							"maxIterations": 1,		
							"minObjectSpeed": -350.0,
							"maxObjectSpeed": -250.0,	
							"minObjectSpawnTime": 2.0,
							"maxObjectSpawnTime": 3.0		
						}						
					],
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["railWallTileLeft1"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["railWallTileRight1"]
						},
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["railTile1"]
						}						
					]
				}					
			]
		},
		{	
			"id": "minerFortyNiner_right",
			"rowImage": "",
			"width": 13,
			"chance" : 1.0,
			"priority": 2,
			"minRowIndex": 40,					
			"indexModuli": [20],
			"rows" :
			[							
				{			
					"objectSpawnConfigs": 
					[
						{
							"validColumns": [0],
							"chance": 1.0,
							"objectTypes": ["minerFortyNinerSpawner"],
							"minIterations": 1,
							"maxIterations": 1,		
							"minObjectSpeed": 350.0,
							"maxObjectSpeed": 350.0,	
							"minObjectSpawnTime": 4.0,
							"maxObjectSpawnTime": 4.0		
						}						
					],
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["railWallTileLeft1"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["railWallTileRight1"]
						},
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile1", "dirtTile3", "dirtTile4"]
						}						
					]
				}					
			]
		},
		{	
			"id": "minerFortyNiner_left",
			"rowImage": "",
			"width": 13,
			"chance" : 1.0,
			"priority": 2,
			"minRowIndex": 40,			
			"indexModuli": [20],
			"rows" :
			[							
				{			
					"objectSpawnConfigs": 
					[
						{
							"validColumns": [12],
							"chance": 1.0,
							"objectTypes": ["minerFortyNinerSpawner"],
							"minIterations": 1,
							"maxIterations": 1,		
							"minObjectSpeed": -350.0,
							"maxObjectSpeed": -350.0,	
							"minObjectSpawnTime": 4.0,
							"maxObjectSpawnTime": 4.0		
						}						
					],
					"tilePlacements":
					[
						{
							"chance": 1.0,
							"columns": [0],
							"tileIds": ["railWallTileLeft1"]
						},
						{
							"chance": 1.0,
							"columns": [12],
							"tileIds": ["railWallTileRight1"]
						},
						{
							"chance": 1.0,
							"columns": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							"tileIds": ["dirtTile1", "dirtTile3", "dirtTile4"]
						}						
					]
				}					
			]
		}
	]
}