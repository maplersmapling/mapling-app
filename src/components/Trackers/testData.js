/*=============================================================================
File: testData.js 
-------------------------------------------------------------------------------
Description: contains initial data for the tracker component 
--------------
Includes data for: charNames, dailyTaskTitles, dailyTasks, dailyArcanes, 
                   dailyGrandis, dailyBossTitles, dailyBosses, 
                   weeklyTaskTitles, weeklyTasks, weeklyGuild, weeklyArcanes, 
                   weeklyBossTitles, weeklyBosses, eventTaskTitles, eventTasks, 
                   sharedTaskTitles, sharedTasks
=============================================================================*/
/*-----------------
values setup: 
{
    id: '',
    title: '',
    done: ''
},

or..
{
    id: '',
    title: '',
    isActive: ''
}
-----------------*/
//========================================================
//-------------------------------------- Character Names -------------------------------------------
//========================================================
export const charNames = [
    {
        id: 1,
        title: 'character 1',
        isActive: true

    }, {
        id: 2,
        title: 'character 2',
        isActive: false
    }, {
        id: 3,
        title: 'character 3',
        isActive: false
    }, {
        id: 4,
        title: 'character 4',
        isActive: false
    }
]
//========================================================
//----------------------------------------- CardDaily -------------------------------------------
//========================================================
// daily task titles
export const dailyTaskTitles = [
    {
        id: 1,
        title: 'Tasks',
        isActive: true
    }, {
        id: 2,
        title: 'Arcane River',
        isActive: true
    }, {
        id: 3,
        title: 'Grandis',
        isActive: true
    }
];
// daily tasks
export const dailyTasks = [
    {
        id: 1, 
        title: 'Guild Check-in',
        done: false
    }, {
        id: 2, 
        title: 'MPE',
        done: false
    }
 ];
 // daily arcanes
export const dailyArcanes = [
    {
        id: 1, 
        title: 'Vanishing Journey',
        done: false
    }, {
        id: 2, 
        title: 'Chu Chu',
        done: false
    }, {
        id: 3, 
        title: 'Lachelein',
        done: false
    }, {
        id: 4,  
        title: 'Arcana',
        done: false
    }, {
        id: 5, 
        title: 'Morass',
        done: false
    }, {
        id: 6, 
        title: 'Esfera',
        done: false
    }, {
        id: 7, 
        title: 'Tenebris Research',
        done: false
    }
];
// daily grandis
export const dailyGrandis = [
    {
        id: 1, 
        title: 'Erda\'s Request',
        done: false
    }, {
        id: 2, 
        title: 'Cernium',
        done: false
    }, {
        id: 3, 
        title: 'Arcus',
        done: false
    }, {
        id: 4, 
        title: 'Odium',
        done: false
    }, {
        id: 5, 
        title: 'Shangri-La',
        done: false
    }, {
        id: 6, 
        title: 'Arteria',
        done: false
    }, {
        id: 7,
        title: 'Carcion',
        done: false
    }
];
// daily bosses titles
export const dailyBossTitles = [
    {
        id: 1,
        title: 'Bosses',
        isActive: true
    }
]
// daily bosses
export const dailyBosses = [
    {
        id: 1,  
        title: 'Zakum',
        done: false
    }, { 
        id: 2,  
        title: 'Magnus',
        done: false
    }, {
        id: 3,  
        title: 'Hilla',
        done: false
    }, {
        id: 4,  
        title: 'OMNI-CLN',
        done: false
    }, {
        id: 5,  
        title: 'Papulatus',
        done: false
    }, {
        id: 6,  
        title: 'Crimson Queen',
        done: false
    }, {
        id: 7,  
        title: 'Pierre',
        done: false
    }, {
        id: 8,  
        title: 'Von Bon',
        done: false
    }, {
        id: 9,  
        title: 'Vellum',
        done: false
    }, {
        id: 10,  
        title: 'Von Leon',
        done: false
    }, {
        id: 11,  
        title: 'Horntail',
        done: false
    }, {
        id: 12,  
        title: 'Arkarium',
        done: false
    }, {
        id: 13,  
        title: 'Pink Bean',
        done: false
    }, {
        id: 14,  
        title: 'Gollux',
        done: false
    }, {
        id: 15,  
        title: 'Ranmaru',
        done: false
    }
];
//========================================================
//----------------------------------------- CardWeekly -------------------------------------------
//========================================================
// weekly task titles
export const weeklyTaskTitles = [
    {
        id: 1,
        title: 'Tasks',
        isActive: true
    }, {
        id: 2,
        title: 'Guild',
        isActive: true
    }, {
        id: 3,
        title: 'Arcane River',
        isActive: true
    }
];
// weekly tasks
export const weeklyTasks = [
    {
        id: 1, 
        title: 'Dark World Tree',
        done: false
    }, {
        id: 2, 
        title: 'Scrapyard',
        done: false
    }, {
        id: 3, 
        title: 'Mu Lung Dojo',
        done: false
    }
];
// weekly guild
export const weeklyGuild = [
    {
        id: 1, 
        title: 'Claim Guild Buff',
        done: false
    }, {
        id: 2, 
        title: 'Flag Race',
        done: false
    }, {
        id: 3, 
        title: 'Sharenian Culvert',
        done: false
    }
];
// weekly arcanes
export const weeklyArcanes = [
    {
        id: 1,
        title: 'Erda Spectrum',
        done: false
    }, {
        id: 2, 
        title: 'Hungry Muto',
        done: false
    }, {
        id: 3, 
        title: 'Midnight Chaser',
        done: false
    }, {
        id: 4, 
        title: 'Spirit Savior',
        done: false
    }, {
        id: 5, 
        title: 'Ranheim Defense',
        done: false
    }, {
        id: 6, 
        title: 'Esfera Guardian',
        done: false
    }
];
// weekly boss titles
export const weeklyBossTitles = [
    {
        id: 1,
        title: 'Bosses',
        done: false
    }
];
// weekly bosses
export const weeklyBosses = [
    {
        id: 1, 
        title: 'Chaos Zakum',
        done: false
    }, {
        id: 2, 
        title: 'Hard Magnus',
        done: false
    }, {
        id: 3, 
        title: 'Hard Hilla',
        done: false
    }, {
        id: 4, 
        title: 'Chaos Papulatus',
        done: false
    }, {
        id: 5, 
        title: 'Chaos Crimson Queen',
        done: false
    }, {
        id: 6, 
        title: 'Chaos Pierre',
        done: false
    }, {
        id: 7, 
        title: 'Chaos Von Bon',
        done: false
    }, {
        id: 8, 
        title: 'Chaos Vellum',
        done: false
    }, {
        id: 9, 
        title: 'Chaos Pink Bean',
        done: false
    }, {
        id: 10, 
        title: 'Cygnus',
        done: false
    }, {
        id: 11, 
        title: 'Lotus',
        done: false
    }, {
        id: 12, 
        title: 'Damien',
        done: false
    }, {
        id: 13, 
        title: 'Guardian Angel Slime',
        done: false
    }, {
        id: 14, 
        title: 'Lucid',
        done: false
    }, {
        id: 15, 
        title: 'Will',
        done: false
    }, {
        id: 16, 
        title: 'Gloom',
        done: false
    }, {
        id: 17, 
        title: 'Versus Hilla',
        done: false
    }, {
        id: 18, 
        title: 'Darknell',
        done: false
    }, {
        id: 19, 
        title: 'Black Mage',
        done: false
    }, {
        id: 20, 
        title: 'Chosen Seren',
        done: false
    }, {
        id: 21, 
        title: 'Kalos the Guardian',
        done: false
    }, {
        id: 22, 
        title: 'Kaling',
        done: false
    }, {
        id: 23, 
        title: 'Princess No',
        done: false
    }, {
        id: 24, 
        title: 'Akechi Mitsuhide',
        done: false
    }
];
//========================================================
//------------------------------------------- CardEvent -------------------------------------------
//========================================================
// event titles
export const eventTitles = [
    {
        id: 1,
        title: 'Abyssal Expedition',
        isActive: true
    }, {
        id: 2,
        title: 'Identisk',
        isActive: true
    }, {
        id: 3,
        title: 'Zero to One Hundred',
        isActive: true
    }
];
// abyssal expeditions
export const abyssalExpeditions = [
    {
        id: 1,   
        title: 'Daily Missions (x3)',
        done: false 
    }, {
        id: 2, 
        title: 'Boss Lair (x3)',
        done: false
    }, {
        id: 3, 
        title: 'AFK: Event Mobbing Maps',
        done: false
    }, {
        id: 4, 
        title: 'Claim Reputation & Rewards',
        done: false
    }
];
// daily identisks
export const dailyIdentisks = [
    {
        id: 1, 
        title: '[Identisk] Dance of the Sun and Wind (x30/day)',
        done: false
    }, {
        id: 2,
        title: 'Identisk Festival',
        done: false
    }
];
// weekly identisks
export const weeklyIdentisks = [
    {
        id: 1, 
        category: 'identisk',
        title: '[Identisk] Coconut Smash (x3/week)',
        done: false
    }, {
        id: 2, 
        category: 'identisk',
        title: '[Identisk] Food Storehouse (x3/week)',
        done: false
    }, {
        id: 3,
        title: '[Identisk] Hunting Adventure (x3/week)',
        done: false
    }
]
// identisk wind coins
export const identiskWindCoins = [
    {
        id: 1, 
        title: 'Claim Wind Coins',
        done: false
    }
];
export const zeroHundred = [
    {
        id: 1,
        title: 'Use on seven characters',
        done: false
    }
];

export const legendaryBlueDragon = [
    {
        id: 1, 
        category: 'Legendary Blue Dragon',
        title: 'Collect and Summon Dragon Eggs',
        done: false
    }
];
//========================================================
//------------------------------------------ CardShared -------------------------------------------
//========================================================
// shared tasks titles
export const sharedTitles = [
    {
        id: 1, 
        title: 'Daily',
        isActive: true
    }, {
        id: 2,
        title: 'Weekly',
        isActive: true
    }, {
        id: 3,
        title: 'Other',
        isActive: true
    }
]
// daily shared tasks
export const dailyShared = [
    {
        id: 1,
        title: 'Daily Gift',
        done: false
    },  {
        id: 2,
        title: 'Legion Coins',
        done: false
    }, {
        id: 3,
        title: 'House Check-in',
        done: false
    }
];
// weekly shared Tasks
export const weeklyShared = [
    {
        id: 1,
        category: 'task',
        title: 'weekly task',
        done: false
    }
];
// no limit shared tasks
export const otherShared = [
    {
        id: 1,
        title: 'Level Up Zero',
        done: false
    }
]