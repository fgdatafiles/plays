//--------------------------------------------------------------------------------------------------------------------------------------------------------

var sd = [
	{
		// Stage 1
		lizards:[
			{type:2, skin:4, pos:[cc.p(160, 600), cc.p(726, 600)]},      // 0
			{type:0, skin:0, pos:cc.p(262, 84), direction:cc.p(0, 1)},   // 1
			{type:1, skin:3, pos:[cc.p(290, 156), cc.p(680, 156)]},      // 2
			{type:2, skin:4, pos:[cc.p(248, 366), cc.p(594, 340)]},      // 3
			{type:1, skin:3, pos:[cc.p(428, 66), cc.p(912, 66)]},        // 4
			{type:0, skin:1, pos:cc.p(910, 280), direction:cc.p(1, 0)},  // 5
			{type:0, skin:2, pos:cc.p(1024, 494), direction:cc.p(1, 0)}, // 6
			{type:0, skin:2, pos:cc.p(998, 170), direction:cc.p(-1, 0)}, // 7
			{type:2, skin:4, pos:[cc.p(872, 382), cc.p(1214, 382)]},     // 8
			{type:0, skin:0, pos:cc.p(1118, 98), direction:cc.p(0, 1)}   // 9
		],
		masks:[
			{pos:cc.p(154, 607), rect:cc.rect(68, 568, 172, 76)},    // 1
			{pos:cc.p(743, 598), rect:cc.rect(664, 565, 176, 66)},   // 2
			{pos:cc.p(292, 54), rect:cc.rect(292, 54, 0, 0)},        // 3
			{pos:cc.p(288, 159), rect:cc.rect(179, 133, 170, 52)},   // 4
			{pos:cc.p(671, 155), rect:cc.rect(603, 133, 174, 44)},   // 5
			{pos:cc.p(583, 352), rect:cc.rect(514, 313, 161, 79)},   // 6
			{pos:cc.p(271, 357), rect:cc.rect(170, 292, 176, 130)},  // 7
			{pos:cc.p(912, 64), rect:cc.rect(836, 39, 172, 53)},     // 8
			{pos:cc.p(420, 76), rect:cc.rect(328, 45, 165, 63)},     // 9
			{pos:cc.p(873, 274), rect:cc.rect(873, 274, 0, 0)},      // 10
			{pos:cc.p(988, 490), rect:cc.rect(988, 490, 0, 0)},      // 11
			{pos:cc.p(1214, 380), rect:cc.rect(1137, 347, 164, 66)}, // 12
			{pos:cc.p(866, 384), rect:cc.rect(773, 350, 166, 67)},   // 13
			{pos:cc.p(1082, 172), rect:cc.rect(1082, 172, 0, 0)},    // 14
			{pos:cc.p(1106, 57), rect:cc.rect(1107, 57, 0, 0)}       // 15
		],
		character:{
			pos:cc.p(690, 170),
			cheerLoop:2,
			nagLoop:2
		},
		balloon:{
			pos:cc.p(740, 490),
			flipped:false
		},
		cheerDialog:"Lizard lizard,\nlizard!",
		nagDialog:"Oh no, that didn't\nworked at all!"
	},

	{
		// Stage 2
		lizards:[
			{type:0, skin:0, pos:cc.p(306, 170), direction:cc.p(0, 1)},  // 0
			{type:0, skin:0, pos:cc.p(420, 300), direction:cc.p(0, 1)},  // 1
			{type:0, skin:1, pos:cc.p(420, 354), direction:cc.p(1, 0)},  // 2
			{type:1, skin:3, pos:[cc.p(356, 70), cc.p(710, 70)]},		 // 3
			{type:2, skin:4, pos:[cc.p(808, 462), cc.p(808, 826)]},      // 4
			{type:2, skin:4, pos:[cc.p(528, 474), cc.p(790, 474)]},      // 5
			{type:0, skin:1, pos:cc.p(816, 266), direction:cc.p(-1, 0)}, // 6
			{type:1, skin:3, pos:[cc.p(530, 160), cc.p(924, 160)]},      // 7
			{type:2, skin:4, pos:[cc.p(1120, 326), cc.p(1120, 564)]},    // 8
			{type:0, skin:0, pos:cc.p(1065, 80), direction:cc.p(0, 1)}   // 9
		],
		masks:[
			{pos:cc.p(303, 141), rect:cc.rect(303, 141, 0, 0)},      // 1
			{pos:cc.p(405, 263), rect:cc.rect(405, 263, 0, 0)},      // 2
			{pos:cc.p(354, 364), rect:cc.rect(354, 364, 0, 0)},      // 3
			{pos:cc.p(352, 70), rect:cc.rect(270, 46, 154, 47)},     // 4
			{pos:cc.p(750, 77), rect:cc.rect(660, 12, 190, 100)},    // 5
			{pos:cc.p(812, 456), rect:cc.rect(748, 379, 188, 153)},  // 6
			{pos:cc.p(896, 280), rect:cc.rect(896, 280, 0, 0)},      // 7
			{pos:cc.p(949, 176), rect:cc.rect(860, 117, 178, 100)},  // 8
			{pos:cc.p(516, 179), rect:cc.rect(434, 143, 154, 72)},   // 9
			{pos:cc.p(1110, 323), rect:cc.rect(1066, 241, 89, 150)}, // 10
			{pos:cc.p(1116, 563), rect:cc.rect(1076, 499, 80, 148)}, // 11
			{pos:cc.p(1065, 52), rect:cc.rect(1065, 52, 0, 0)},      // 12
			{pos:cc.p(504, 474), rect:cc.rect(435, 447, 130, 54)}    // 13
		],
		character:{
			pos:cc.p(290, 220),
			cheerLoop:2,
			nagLoop:2
		},
		balloon:{
			pos:cc.p(380, 580),
			flipped:false
		},
		cheerDialog:"Lizards!\nLet's get 'em.",
		nagDialog:"What are you\ngettin' at?"
	},

	{
		// Stage 3
		lizards:[
			{type:0, skin:1, pos:cc.p(293, 486), direction:cc.p(1, 0)},  // 0
			{type:1, skin:3, pos:[cc.p(266, 68), cc.p(662, 68)]},        // 1
			{type:0, skin:0, pos:cc.p(396, 138), direction:cc.p(0, 1)},  // 2
			{type:2, skin:4, pos:[cc.p(370, 440), cc.p(698, 440)]},      // 3
			{type:0, skin:1, pos:cc.p(636, 174), direction:cc.p(1, 0)},  // 4
			{type:0, skin:2, pos:cc.p(610, 300), direction:cc.p(-1, 0)}, // 5
			{type:0, skin:0, pos:cc.p(760, 570), direction:cc.p(0, 1)},  // 6
			{type:2, skin:4, pos:[cc.p(608, 368), cc.p(948, 368)]},      // 7
			{type:1, skin:3, pos:[cc.p(664, 136), cc.p(1058, 136)]},     // 8
			{type:0, skin:0, pos:cc.p(1130, 72), direction:cc.p(0, 1)}   // 9
		],
		masks:[
			{pos:cc.p(229, 491), rect:cc.rect(229, 491, 0, 0)},     // 1
			{pos:cc.p(266, 60), rect:cc.rect(179, 55, 173, 35)},    // 2
			{pos:cc.p(668, 66), rect:cc.rect(584, 50, 167, 45)},    // 3
			{pos:cc.p(400, 123), rect:cc.rect(400, 110, 0, 0)},     // 4
			{pos:cc.p(379, 438), rect:cc.rect(301, 407, 140, 61)},  // 5
			{pos:cc.p(700, 438), rect:cc.rect(629, 410, 142, 56)},  // 6
			{pos:cc.p(569, 177), rect:cc.rect(569, 177, 0, 0)},     // 7
			{pos:cc.p(653, 291), rect:cc.rect(653, 291, 0, 0)},     // 8
			{pos:cc.p(748, 543), rect:cc.rect(748, 543, 0, 0)},     // 9
			{pos:cc.p(964, 367), rect:cc.rect(875, 341, 138, 52)},  // 10
			{pos:cc.p(611, 365), rect:cc.rect(557, 343, 134, 48)},  // 11
			{pos:cc.p(1060, 134), rect:cc.rect(972, 110, 175, 47)}, // 12
			{pos:cc.p(671, 155), rect:cc.rect(576, 111, 170, 47)},  // 13
			{pos:cc.p(1121, 48), rect:cc.rect(1121, 48, 0, 0)}      // 14
		],
		character:{
			pos:cc.p(1060, 220),
			cheerLoop:1,
			nagLoop:2
		},
		balloon:{
			pos:cc.p(1000, 610),
			flipped:true
		},
		cheerDialog:"Perfect!",
		nagDialog:"Forget it."
	}
];

//--------------------------------------------------------------------------------------------------------------------------------------------------------