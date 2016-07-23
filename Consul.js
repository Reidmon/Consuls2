var a,	// Вспомоательные переменные
	b,
	i;

var key,	// Переменные для перебора значений
	key1;

var damageOnTarget,	// Урон на цель
	damageOnPrioritet;	// Урон на приоритет

var battleHelp = {	// Вспомогательная информация
	counter: {	// Кол-во целей
		fleet: 0,
		reptiles: 0,
		defense: 0
	},
	damage: {	// Флаги для установки минимального, максимального или случайного урона
		fleet: 'random',
		reptiles: 'random',
		defense: 'random'
	}
};

var battleStats = {	// Изменяемые параметры для боя
	fleet: {
		gammadrone: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = this.level,
					50 > a ? a : 100 > a ? 2 * a : 4 * a
				},
				life: function(a) {
					return a = this.level,
					50 > a ? 2 * a : 100 > a ? 3 * a : 6 * a
				}
			}
		},
		wasp: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = this.level,
					50 > a ? 2 * a : 100 > a ? 4 * a : 8 * a
				},
				life: function(a) {
					return a = this.level,
					50 > a ? 3 * a : 100 > a ? 5 * a : 10 * a
				}
			}
		},
		mirage: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = this.level,
					50 > a ? 3 * a : 100 > a ? 6 * a : 12 * a
				},
				life: function(a) {
					return a = this.level,
					50 > a ? 5 * a : 100 > a ? 10 * a : 20 * a
				}
			}
		},
		frigate: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = this.level,
					50 > a ? 8 * a : 100 > a ? 15 * a : 30 * a
				},
				life: function(a) {
					return a = this.level,
					50 > a ? 20 * a : 100 > a ? 40 * a : 80 * a
				}
			}
		},
		truckc: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = 0
				},
				life: function(a) {
					return a = 0
				},
				metals: function(a) {
					return a = this.level,
					10 > a ? 2e3 + 20 * a : 50 > a ? 2e3 + 40 * a : 100 > a ? 2e3 + 80 * a : 2e3 + 160 * a
				},
				crystals: function(a) {
					return a = this.level,
					10 > a ? 1e3 + 10 * a : 50 > a ? 1e3 + 20 * a : 100 > a ? 1e3 + 40 * a : 1e3 + 80 * a
				}
			}
		},
		cruiser: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = this.level,
					50 > a ? 15 * a : 100 > a ? 30 * a : 60 * a
				},
				life: function(a) {
					return a = this.level,
					50 > a ? 35 * a : 100 > a ? 70 * a : 140 * a
				}
			}
		},
		battleship: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = this.level,
					50 > a ? 25 * a : 100 > a ? 50 * a : 100 * a
				},
				life: function(a) {
					return a = this.level,
					50 > a ? 70 * a : 100 > a ? 140 * a : 280 * a
				}
			}
		},
		carrier: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = this.level,
					50 > a ? 40 * a : 100 > a ? 80 * a : 160 * a
				},
				life: function(a) {
					return a = this.level,
					50 > a ? 90 * a : 100 > a ? 180 * a : 360 * a
				}
			}
		},
		dreadnought: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = this.level,
					50 > a ? 100 * a : 100 > a ? 200 * a : 400 * a
				},
				life: function(a) {
					return a = this.level,
					50 > a ? 200 * a : 100 > a ? 400 * a : 800 * a
				}
			}
		},
		railgun: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = this.level,
					50 > a ? 250 * a : 100 > a ? 500 * a : 1e3 * a
				},
				life: function(a) {
					return a = this.level,
					50 > a ? 100 * a : 100 > a ? 200 * a : 400 * a
				}
			}
		},
		reaper: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = this.level,
					50 > a ? 300 * a : 100 > a ? 600 * a : 1200 * a
				},
				life: function(a) {
					return a = this.level,
					50 > a ? 600 * a : 100 > a ? 1200 * a : 2400 * a
				}
			}
		},
		flagship: {
			num: 0,
			damage: 0,
			life: 0,
			research: {
				level: 0,
				damage: function(a) {
					return a = this.level,
					50 > a ? 750 * a : 100 > a ? 1500 * a : 3e3 * a
				},
				life: function(a) {
					return a = this.level,
					50 > a ? 2500 * a : 100 > a ? 5e3 * a : 1e4 * a
				}
			}
		}
	},
	reptiles: {
		sphero: {
			num: 0,
			damage: 0,
			life: 0
		},
		blade: {
			num: 0,
			damage: 0,
			life: 0
		},
		lacertian: {
			num: 0,
			damage: 0,
			life: 0
		},
		wyvern: {
			num: 0,
			damage: 0,
			life: 0
		},
		trioniks: {
			num: 0,
			damage: 0,
			life: 0
		},
		dragon: {
			num: 0,
			damage: 0,
			life: 0
		},
		hydra: {
			num: 0,
			damage: 0,
			life: 0
		},
		armadillo: {
			num: 0,
			damage: 0,
			life: 0
		},
		prism: {
			num: 0,
			damage: 0,
			life: 0
		},
		octopus: {
			num: 0,
			damage: 0,
			life: 0
		},
		godzilla: {
			num: 0,
			damage: 0,
			life: 0
		},
		shadow: {
			num: 0,
			damage: 0,
			life: 0
		}
	},
	defense: {
		bomb: {
			num: 0,
			damage: 0,
			life: 0
		},
		ionbomb: {
			num: 0,
			damage: 0,
			life: 0
		},
		turret: {
			num: 0,
			damage: 0,
			life: 0
		},
		laserturret: {
			num: 0,
			damage: 0,
			life: 0
		},
		snipergun: {
			num: 0,
			damage: 0,
			life: 0
		},
		railcannon: {
			num: 0,
			damage: 0,
			life: 0
		},
		plasmakiller: {
			num: 0,
			damage: 0,
			life: 0
		},
		tyrant: {
			num: 0,
			damage: 0,
			life: 0
		},
		crystalgun: {
			num: 0,
			damage: 0,
			life: 0
		},
		trilinear: {
			num: 0,
			damage: 0,
			life: 0
		},
		deforbital: {
			num: 0,
			damage: 0,
			life: 0
		},
		doomsdaygun: {
			num: 0,
			damage: 0,
			life: 0
		}
	}
};

var UNIT = {	// Неизменяемые параметры кораблей
	fleet: {
		gammadrone: {
			name: "Гаммадрон",
			nameEn: "gammadrone",
			damage: 80,
			damageM: 20,
			life: 200,
			research: {
				name: "Усиление Гаммадрона",
				nameD: "Урон Гаммадрона: ",
				nameL: "Броня Гаммадрона: "
			},
			prioritet: ["Сферо", "Клинок", "Ящер"],
			price: {
				metals: 600,
				crystals: 250
			}
		},
		wasp: {
			name: "Оса",
			nameEn: "wasp",
			damage: 240,
			damageM: 60,
			life: 500,
			research: {
				name: "Усиление Осы",
				nameD: "Урон Осы: ",
				nameL: "Броня Осы: "
			},
			prioritet: ["Сферо", "Клинок", "Ящер"],
			prise: {
				humans: 10,
				metals: 1500,
				crystals: 750
			}
		},
		mirage: {
			name: "Мираж",
			nameEn: "mirage",
			damage: 400,
			damageM: 100,
			life: 1e3,
			research: {
				name: "Усиление Миража",
				nameD: "Урон Миража: ",
				nameL: "Броня Миража: "
			},
			prise: {
				humans: 50,
				metals: 3300,
				crystals: 1375
			}
		},
		frigate: {
			name: "Фрегат",
			nameEn: "frigate",
			damage: 1200,
			damageM: 300,
			life: 4e3,
			research: {
				name: "Усиление Фрегата",
				nameD: "Урон Фрегата: ",
				nameL: "Броня Фрегата: "
			},
			prise: {
				humans: 100,
				metals: 13500,
				crystals: 4500
			}
		},
		truckc: {
			name: "Трак C",
			nameEn: "truckc",
			damage: 40,
			damageM: 10,
			life: 2500,
			research: {
				name: "Усиление Трака C",
				nameD: "Урон Трака C: ",
				nameL: "Броня Трака C: "
			},
			prise: {
				humans: 150,
				metals: 15e3,
				crystals: 3e3
			}
		},
		cruiser: {
			name: "Крейсер",
			nameEn: "cruiser",
			damage: 2400,
			damageM: 600,
			life: 7e3,
			research: {
				name: "Усиление Крейсера",
				nameD: "Урон Крейсера: ",
				nameL: "Броня Крейсера: "
			},
			prise: {
				humans: 1500,
				metals: 3e4,
				crystals: 1e4
			}
		},
		battleship: {
			name: "Линкор",
			nameEn: "battleship",
			damage: 4000,
			damageM: 1000,
			life: 15e3,
			research: {
				name: "Усиление Линкора",
				nameD: "Урон Линкора: ",
				nameL: "Броня Линкора: "
			},
			prise: {
				humans: 7500,
				metals: 65e3,
				crystals: 14e3
			}
		},
		carrier: {
			name: "Авианосец",
			nameEn: "carrier",
			damage: 7200,
			damageM: 1800,
			life: 2e4,
			research: {
				name: "Усиление Авианосца",
				nameD: "Урон Авианосца: ",
				nameL: "Броня Авианосца: "
			},
			prise: {
				humans: 17e3,
				metals: 82e3,
				crystals: 25e3
			}
		},
		dreadnought: {
			name: "Дредноут",
			nameEn: "dreadnought",
			damage: 16e3,
			damageM: 4e3,
			life: 5e4,
			research: {
				name: "Усиление Дредноута",
				nameD: "Урон Дредноута: ",
				nameL: "Броня Дредноута: "
			},
			prise: {
				humans: 25e3,
				metals: 17e4,
				crystals: 6e4
			}
		},
		railgun: {
			name: "Рейлган",
			nameEn: "railgun",
			damage: 4e4,
			damageM: 1e4,
			life: 25e3,
			research: {
				name: "Усиление Рейлгана",
				nameD: "Урон Рейлгана: ",
				nameL: "Броня Рейлгана: "
			},
			prise: {
				metals: 1e5,
				crystals: 2e5
			}
		},
		reaper: {
			name: "Пожинатель",
			nameEn: "reaper",
			damage: 48e3,
			damageM: 12e3,
			life: 15e4,
			research: {
				name: "Усиление Пожинателя",
				nameD: "Урон Пожинателя: ",
				nameL: "Броня Пожинателя: "
			},
			prise: {
				humans: 1e5,
				metals: 6e5,
				crystals: 2e5
			}
		},
		flagship: {
			name: "Императорский Флагман",
			nameEn: "flagship",
			damage: 12e4,
			damageM: 3e4,
			life: 6e5,
			research: {
				name: "Усиление Флагмана",
				nameD: "Урон Флагмана: ",
				nameL: "Броня Флагмана: "
			},
			prise: {
				humans: 15e4,
				metals: 3e6,
				crystals: 5e5
			}
		}
	},
	reptiles: {
		sphero: {
			name: "Сферо",
			nameEn: "sphero",
			damage: 40,
			damageM: 10,
			life: 150,
			prioritet: ["Гаммадрон", "Оса", "Мираж"],
			price: {
				metals: 600,
				crystals: 250
			}
		},
		blade: {
			name: "Клинок",
			nameEn: "blade",
			damage: 320,
			damageM: 80,
			life: 700,
			price: {
				humans: 10,
				metals: 1500,
				crystals: 750
			}
		},
		lacertian: {
			name: "Ящер",
			nameEn: "lacertian",
			damage: 560,
			damageM: 140,
			life: 1500,
			price: {
				humans: 50,
				metals: 3300,
				crystals: 1375
			}
		},
		wyvern: {
			name: "Виверна",
			nameEn: "wyvern",
			damage: 1600,
			damageM: 400,
			life: 6e3,
			price: {
				humans: 100,
				metals: 13500,
				crystals: 4500
			}
		},
		trioniks: {
			name: "Трионикс",
			nameEn: "trioniks",
			damage: 80,
			damageM: 20,
			life: 3500,
			price: {
				humans: 150,
				metals: 1500,
				crystals: 300
			}
		},
		dragon: {
			name: "Дракон",
			nameEn: "dragon",
			damage: 3200,
			damageM: 800,
			life: 11e3,
			price: {
				humans: 1500,
				metals: 3e4,
				crystals: 1e4
			}
		},
		hydra: {
			name: "Хайль-Гидра",
			nameEn: "hydra",
			damage: 8e3,
			damageM: 2e3,
			life: 12e3,
			price: {
				humans: 7500,
				metals: 65e3,
				crystals: 14e3
			}
		},
		armadillo: {
			name: "Броненосец",
			nameEn: "armadillo",
			damage: 800,
			damageM: 200,
			life: 5e4,
			price: {
				humans: 17e3,
				metals: 82e3,
				crystals: 25e3
			}
		},
		prism: {
			name: "Призма",
			nameEn: "prism",
			damage: 14400,
			damageM: 3600,
			life: 85e3,
			price: {
				humans: 25e3,
				metals: 17e4,
				crystals: 6e4
			}
		},
		octopus: {
			name: "Спрут",
			nameEn: "octopus",
			damage: 12e3,
			damageM: 3e3,
			life: 1e5,
			price: {
				humans: 5e4,
				metals: 86e3,
				crystals: 155e3
			}
		},
		godzilla: {
			name: "Годзилла",
			nameEn: "godzilla",
			damage: 64e3,
			damageM: 16e3,
			life: 2e5,
			price: {
				humans: 1e5,
				metals: 6e5,
				crystals: 2e5
			}
		},
		shadow: {
			name: "Тень",
			nameEn: "shadow",
			damage: 4e5,
			damageM: 1e5,
			life: 1e6,
			price: {
				humans: 15e4,
				metals: 3e6,
				crystals: 5e5
			}
		}
	},
	defense: {
		bomb: {
			name: "Мины",
			nameEn: "bomb",
			damage: 160,
			damageM: 40,
			life: 5,
			price: {
				metals: 500
			}
		},
		ionbomb: {
			name: "Ионные Мины",
			nameEn: "ionbomb",
			damage: 400,
			damageM: 100,
			life: 10,
			price: {
				credits: 5
			}
		},
		turret: {
			name: "Турель",
			nameEn: "turret",
			damage: 400,
			damageM: 100,
			life: 2e3,
			price: {
				metals: 3e3,
				crystals: 500
			}
		},
		laserturret: {
			name: "Лазерная Турель",
			nameEn: "laserturret",
			damage: 1200,
			damageM: 300,
			life: 5e3,
			price: {
				credits: 50
			}
		},
		snipergun: {
			name: "Снайпер Ган",
			nameEn: "snipergun",
			damage: 2400,
			damageM: 600,
			life: 2e4,
			price: {
				metals: 2e4,
				crystals: 1e4
			}
		},
		railcannon: {
			name: "Рельсовая Пушка",
			nameEn: "railcannon",
			damage: 9600,
			damageM: 2400,
			life: 5e4,
			price: {
				credits: 300
			}
		},
		plasmakiller: {
			name: "Плазменный Убийца",
			nameEn: "plasmakiller",
			damage: 6400,
			damageM: 1600,
			life: 1e5,
			price: {
				metals: 8e4,
				crystals: 2e4
			}
		},
		tyrant: {
			name: "Жидкоплазменный Тиран",
			nameEn: "tyrant",
			damage: 36e3,
			damageM: 9e3,
			life: 25e4,
			price: {
				credits: 1e3,
			}
		},
		crystalgun: {
			name: "Кристалл-Ган",
			nameEn: "crystalgun",
			damage: 16e3,
			damageM: 4e3,
			life: 12e4,
			price: {
				metals: 1e5,
				crystals: 5e4
			}
		},
		trilinear: {
			name: "Трилинейный Кристалл-Ган",
			nameEn: "trilinear",
			damage: 2e5,
			damageM: 5e4,
			life: 15e5,
			price: {
				credits: 5e3
			}
		},
		deforbital: {
			name: "Орбитальная Станция Обороны",
			nameEn: "deforbital",
			damage: 16e4,
			damageM: 4e4,
			life: 8e5,
			price: {
				metals: 12e5,
				crystals: 35e4
			}
		},
		doomsdaygun: {
			name: "Орудие Судного Дня",
			nameEn: "doomsdaygun",
			damage: 8e5,
			damageM: 2e5,
			life: 0,
			price: {
				ruby_plasmoid: 500
			}
		}
	}
};

/*battleEffects
battleEffects.takeFriendsDamage
battleEffects.hitOnDeath
*/

function numTest() {	// Функция для ввода количества кораблей вручную
	battleStats.fleet.gammadrone.num =		0;
	battleStats.fleet.wasp.num =			0;
	battleStats.fleet.mirage.num =			0;
	battleStats.fleet.frigate.num =			0;
	battleStats.fleet.truckc.num =			0;
	battleStats.fleet.cruiser.num =			0;
	battleStats.fleet.battleship.num =		0;
	battleStats.fleet.carrier.num =			0;
	battleStats.fleet.dreadnought.num =		0;
	battleStats.fleet.railgun.num =			0;
	battleStats.fleet.reaper.num =			0;
	battleStats.fleet.flagship.num =		0;
	battleStats.reptiles.sphero.num =		0;
	battleStats.reptiles.blade.num =		0;
	battleStats.reptiles.lacertian.num =	0;
	battleStats.reptiles.wyvern.num =		0;
	battleStats.reptiles.trioniks.num =		0;
	battleStats.reptiles.dragon.num =		0;
	battleStats.reptiles.hydra.num =		0;
	battleStats.reptiles.armadillo.num =	0;
	battleStats.reptiles.prism.num =		0;
	battleStats.reptiles.octopus.num =		0;
	battleStats.reptiles.godzilla.num =		0;
	battleStats.reptiles.shadow.num =		0;
	battleStats.defense.bomb.num =			0;
	battleStats.defense.ionbomb.num =		0;
	battleStats.defense.turret.num =		0;
	battleStats.defense.laserturret.num =	0;
	battleStats.defense.snipergun.num =		0;
	battleStats.defense.railcannon.num =	0;
	battleStats.defense.plasmakiller.num =	0;
	battleStats.defense.tyrant.num =		0;
	battleStats.defense.crystalgun.num =	0;
	battleStats.defense.trilinear.num =		0;
	battleStats.defense.deforbital.num =	0;
	battleStats.defense.doomsdaygun.num =	0
};

function researchTest() {	// Функция для ввода уровней исследований кораблей вручную
	battleStats.fleet.gammadrone.research.level =	0;
	battleStats.fleet.wasp.research.level =			0;
	battleStats.fleet.mirage.research.level =		0;
	battleStats.fleet.frigate.research.level =		0;
	battleStats.fleet.truckc.research.level =		0;
	battleStats.fleet.cruiser.research.level =		0;
	battleStats.fleet.battleship.research.level =	0;
	battleStats.fleet.carrier.research.level =		0;
	battleStats.fleet.dreadnought.research.level =	0;
	battleStats.fleet.railgun.research.level =		0;
	battleStats.fleet.reaper.research.level =		0;
	battleStats.fleet.flagship.research.level =		0
};

function calc() {	// Функция для расчета урона и брони
	var min = 0,
		max = 0;
	for (key in battleStats) {
		battleHelp.counter[key] = 0;
		for (key1 in battleStats[key]) {
			if (battleStats[key][key1].num > 0) battleHelp.counter[key]++;
			min = battleStats[key][key1].num * (UNIT[key][key1].damage + (key == 'fleet' ? battleStats[key][key1].research.damage() : 0));
			max = min + (battleStats[key][key1].num * UNIT[key][key1].damageM);
			switch (battleHelp.damage[key]) {
				case 'min':
					battleStats[key][key1].damage = min * 0.8;
					break;
				case 'max':
					battleStats[key][key1].damage = max;
					break;
				default:
					battleStats[key][key1].damage = Math.floor(Math.random() * (max - min + 1)) + min
			};
			battleStats[key][key1].life = battleStats[key][key1].num * (UNIT[key][key1].life + (key == 'fleet' ? battleStats[key][key1].research.life() : 0))
		}
	}
};

function onScreenTest(a, b) {	// Функция для вывода на экран
	var q, w;
	if (battleStats[a][b].num > 0) {
		if (a == 'fleet') {
			q = '\nУсиление: ';
			w = battleStats[a][b].research.level;
		} else q = w = '';
		alert(UNIT[a][b].name +
		'\nКоличество: ' + battleStats[a][b].num +
		q + w +
		'\nУрон ' + battleStats[a][b].damage +
		'\nБроня ' + battleStats[a][b].life
		)
	}
};

function targeting(a) {	// Функция для коэфициента урона на цель
	for (b in battleStats[a]) {
		if (battleStats[a][b].num > 0) {
			for (i = 0; i < 3; i++) {
				if (UNIT[a][b].name == UNIT[key][key1].prioritet[i]) damageOnTarget = damageOnTarget - (0.4 - 0.1 * i)
			}
		}
	}
};

function prioriteting(a, b) {	// Функция величения урона для приоритетных целей
	for (i = 0; i < 3; i++) {
		if (UNIT[a][b].name == UNIT[key][key1].prioritet[i]) damageOnPrioritet = 0.4 - 0.1 * i
	}
};

function battle() {
	var keyA,
		keyB;
	damageOnTarget = 1;
	if (key == 'fleet' || key == 'defense') {
		keyA = 'reptiles';
		targeting(keyA);
		damageOnTarget /= battleHelp.counter.reptiles
	} else {
		keyA = 'defense';
		targeting(keyA);
		keyA = 'fleet';
		targeting(keyA);
		damageOnTarget /= (battleHelp.counter.fleet + battleHelp.counter.defense)
	};
	for (keyB in battleStats[keyA]) {
		if (battleStats[keyA][keyB].num > 0) {
			prioriteting(keyA, keyB);
			battleStats[keyA][keyB].life -= battleStats[key][key1].damage * (damageOnTarget + damageOnPrioritet);
			if (battleStats[keyA][keyB].life <= 0) battleHelp.counter[keyA]--
		}
	}
};

numTest();	// Вызов функции для заполнения количества кораблей заданных вручную
researchTest();	// Вызов функции для заполнения уровней исследований кораблей заданных вручную
calc();	// Вызов функции для расчета урона и брони

for (var round = 1; round < 4; round++) {
	for (key in battleStats) {
		for (key1 in battleStats[key]) {
			if (battleHelp.counter.fleet > 0 || battleHelp.counter.defense > 0) {
				if (battleHelp.counter.reptiles > 0) {
					if (battleStats[key][key1].num > 0) battle()
				}
			}
		}
	}
};

alert("+++");
