var numLevelRows = 5;
var numLevelCols = 5;

var levelData = {
	1:{
		//['gem1','gem2','gem3','gem4','gem5','gem6','gem7','gem8'],
		'target':1000,
		'tileTypes':['gem1','gem2','gem3','gem4','gem5'],
		'moves':25,
		'xoffset':140,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null]
			]
	},
	2:{
		'target':1500,
		'tileTypes':['gem1','gem2','gem3','gem4','gem5'],
		'moves':20,
		'xoffset':110,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null],
			    [null, null, null, null, null, null],
			    [null, null, null, null, null, null],
			    [null, null, null, null, null, null],
			    [null, null, null, null, null, null],
			    [null, null, null, null, null, null],
			    [null, null, null, null, null, null]
			]
	},
	3:{
		'target':2000,
		'tileTypes':['gem1','gem2','gem3','gem4'],
		'moves':20,
		'xoffset':105,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null]
			]
	},
	4:{
		'target':3500,
		'tileTypes':['gem1','gem2','gem3','gem4'],
		'moves':22,
		'xoffset':105,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null]
			]
	},
	5:{
		'target':4000,
		'tileTypes':['gem8','gem7','gem6','gem4'],
		'moves':30,
		'xoffset':105,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null]
			]
	},
	6:{
		'target':4500,
		'tileTypes':['gem8','gem6','gem4','gem3'],
		'moves':20,
		'xoffset':105,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null]
			]
	},
	7:{
		'target':3000,
		'tileTypes':['gem1','gem2','gem3','gem4','gem5'],
		'moves':25,
		'xoffset':105,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null,null,null]
			]
	},
	8:{
		'target':4500,
		'tileTypes':['gem1','gem2','gem3','gem4','gem5'],
		'moves':28,
		'xoffset':75,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null]
			]
	},
	9:{
		'target':4000,
		'tileTypes':['gem8','gem2','gem7','gem4','gem6'],
		'moves':22,
		'xoffset':140,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null],
			    [null, null, null, null, null, null,null]
			]
	},
	10:{
		'target':3000,
		'tileTypes':['gem1','gem3','gem5','gem6'],
		'moves':18,
		'xoffset':140,
		'yoffset':230,
		'tileGrid': [
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null]
			]
	},
	11:{
		'target':3000,
		'tileTypes':['gem1','gem2','gem3','gem4','gem5'],
		'moves':30,
		'xoffset':75,
		'yoffset':230,
		'tileGrid': [
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null],
			]
	},
	12:{
		'target':4000,
		'tileTypes':['gem4','gem5','gem6','gem7','gem8'],
		'moves':30,
		'xoffset':75,
		'yoffset':180,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null, null],
			]
	},
	13:{
		'target':4000,
		'tileTypes':['gem1','gem2','gem3','gem4','gem5'],
		'moves':26,
		'xoffset':30,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			]
	},
	14:{
		'target':6000,
		'tileTypes':['gem1','gem2','gem3','gem4'],
		'moves':15,
		'xoffset':30,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			]
	},
	15:{
		'target':7500,
		'tileTypes':['gem5','gem6','gem7','gem8'],
		'moves':17,
		'xoffset':30,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			]
	},
	16:{
		'target':8500,
		'tileTypes':['gem2','gem3','gem4','gem5'],
		'moves':22,
		'xoffset':30,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			]
	},
	17:{
		'target':10000,
		'tileTypes':['gem1','gem3','gem5','gem8'],
		'moves':30,
		'xoffset':30,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			]
	},
	18:{
		'target':6500,
		'tileTypes':['gem1','gem2','gem3','gem4','gem5'],
		'moves':30,
		'xoffset':30,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			]
	},
	19:{
		'target':7000,
		'tileTypes':['gem4','gem5','gem6','gem7','gem8'],
		'moves':35,
		'xoffset':30,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			]
	},
	20:{
		'target':9000,
		'tileTypes':['gem2','gem4','gem5','gem7'],
		'moves':30,
		'xoffset':30,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			]
	},
	21:{
		'target':5500,
		'tileTypes':['gem1','gem2','gem3','gem4','gem5','gem6'],
		'moves':25,
		'xoffset':30,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			]
	},
	22:{
		'target':8000,
		'tileTypes':['gem8','gem2','gem3','gem4','gem5'],
		'moves':30,
		'xoffset':30,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    
			]
	},
	23:{
		'target':9000,
		'tileTypes':['gem5','gem3','gem6','gem1','gem8'],
		'moves':30,
		'xoffset':60,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			]
	},
	24:{
		'target':10000,
		'tileTypes':['gem4','gem5','gem6','gem7'],
		'moves':20,
		'xoffset':60,
		'yoffset':220,
		'tileGrid': [
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			    [null, null, null, null, null,null,null],
			]
	},
	25:{
		'target':12000,
		'tileTypes':['gem1','gem2','gem3','gem4'],
		'moves':22,
		'xoffset':150,
		'yoffset':270,
		'tileGrid': [
			    [null, null, null, null, null, null],
			    [null, null, null, null, null, null],
			    [null, null, null, null, null, null],
			    [null, null, null, null, null, null],
			    [null, null, null, null, null, null],
			    [null, null, null, null, null, null],
			]
	},
	26:{
		'target':14000,
		'tileTypes':['gem1','gem2','gem3','gem4','gem5'],
		'moves':25,
		'xoffset':30,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			]
	},
	27:{
		'target':16000,
		'tileTypes':['gem8','gem2','gem3','gem5'],
		'moves':17,
		'xoffset':30,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			]
	},
	28:{
		'target':20000,
		'tileTypes':['gem1','gem2','gem3','gem4'],
		'moves':26,
		'xoffset':30,
		'yoffset':200,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			    [null, null, null, null, null, null, null, null],
			]
	},
	29:{
		'target':13000,
		'tileTypes':['gem8','gem2','gem3','gem4','gem5','gem1'],
		'moves':40,
		'xoffset':30,
		'yoffset':180,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			    [null, null, null, null, null, null, null, null,null],
			]
	},
	30:{
		'target':15000,
		'tileTypes':['gem8','gem2','gem5','gem6','gem1'],
		'moves':30,
		'xoffset':30,
		'yoffset':135,
		'tileGrid': [
			    [null, null, null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null, null, null,null,null],
			    [null, null, null, null, null, null, null, null,null,null],
			]
	},
}

var numLevels = Object.keys(levelData).length;
