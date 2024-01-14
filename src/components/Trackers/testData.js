/*=============================================================================
File: testData.js 
-------------------------------------------------------------------------------
Description: contains initial data for the tracker component 
--------------
Includes data for: charTabNames, dailyTasks, dailyBosses, weeklyTasks, 
                   weeklyBosses, eventTasks, sharedTasks
=============================================================================*/
/*-----------------
values setup: 
 {
   id: '',
   category: '',
   title: '', 
   done: ''
},
-----------------*/
//-------------- charTabNames -------------------------------------------
export const charNames = [
    {
        id: 1,
        category: 'character',
        title: 'character 1',
        isActive: true

    }, {
        id: 2,
        category: 'character',
        title: 'character 2',
        isActive: false
    }, {
        id: 3,
        category: 'character',
        title: 'character 3',
        isActive: false
    }, {
        id: 4,
        category: 'character',
        title: 'character 4',
        isActive: false
    }
]
//-------------- dailyTasks -------------------------------------------

export const dailyTasks = [
    {  
        id: 1, 
        category: 'task',
        title: 'Guild Check-in',
        done: false
    }, {
        id: 2, 
        category: 'task',
        title: 'MPE',
        done: false
    },{
        id: 3, 
        category: 'arcane',
        title: 'Vanishing Journey',
        done: false
    }, {
        id: 4, 
        category: 'arcane',
        title: 'Chu Chu',
        done: false
    }, {
        id: 5, 
        category: 'arcane',
        title: 'Lachelein',
        done: false
    }, {
        id: 6,  
        category: 'arcane',
        title: 'Arcana',
        done: false
    }, {
        id: 7, 
        category: 'arcane',
        title: 'Morass',
        done: false
    }, {
        id: 8, 
        category: 'arcane',
        title: 'Esfera',
        done: false
    }, {
        id: 9, 
        category: 'arcane',
        title: 'Tenebris Research',
        done: false
    }, {
        id: 10, 
        category: 'grandis',
        title: 'Erda\'s Request',
        done: false
    }, {
        id: 11, 
        category: 'grandis',
        title: 'Cernium',
        done: false
    }, {
        id: 12, 
        category: 'grandis',
        title: 'Arcus',
        done: false
    }, {
        id: 13, 
        category: 'grandis',
        title: 'Odium',
        done: false
    }, {
        id: 14, 
        category: 'grandis',
        title: 'Shangri-La',
        done: false
    }, {
        id: 15, 
        category: 'grandis',
        title: 'Arteria',
        done: false
    }, {
        id: 16,
        category: 'grandis',
        title: 'Carcion',
        done: false
    }
];
//-------------- dailyBosses -------------------------------------------
export const dailyBosses = [
    {
        id: 1,  
        category: ['easy', 'normal'],
        title: 'Zakum',
        done: false
    }, { 
        id: 2,  
        category: ['easy', 'normal'],
        title: 'Magnus',
        done: false
    }, {
        id: 3,  
        category: ['normal'],
        title: 'Hilla',
        done: false
    }, {
        id: 4,  
        category: ['normal'],
        title: 'OMNI-CLN',
        done: false
    }, {
        id: 5,  
        category: ['easy', 'normal'],
        title: 'Papulatus',
        done: false
    }, {
        id: 6,  
        category: ['normal'],
        title: 'Crimson Queen',
        done: false
    }, {
        id: 7,  
        category: ['normal'],
        title: 'Pierre',
        done: false
    }, {
        id: 8,  
        category: ['normal'],
        title: 'Von Bon',
        done: false
    }, {
        id: 9,  
        category: ['normal'],
        title: 'Vellum',
        done: false
    }, {
        id: 10,  
        category: ['easy', 'normal', 'hard'],
        title: 'Von Leon',
        done: false
    }, {
        id: 11,  
        category: ['easy', 'normal', 'chaos'],
        title: 'Horntail',
        done: false
    }, {
        id: 12,  
        category: ['normal'],
        title: 'Arkarium',
        done: false
    }, {
        id: 13,  
        category: ['normal'],
        title: 'Pink Bean',
        done: false
    }, {
        id: 14,  
        category: ['normal'],
        title: 'Gollux',
        done: false
    }, {
        id: 15,  
        category: ['normal', 'hard'],
        title: 'Ranmaru',
        done: false
    }
];
//-------------- weeklyTasks -------------------------------------------
export const weeklyTasks = [
    {
        id: 1, 
        category: 'guild',
        title: 'Claim Guild Buff',
        done: false
    }, {
        id: 2, 
        category: 'task',
        title: 'Dark World Tree',
        done: false
    }, {
        id: 3, 
        category: 'task',
        title: 'Mu Lung Dojo',
        done: false
    }, {
        id: 4, 
        category: 'guild',
        title: 'Flag Race',
        done: false
    }, {
        id: 5, 
        category: 'guild',
        title: 'Sharenian Culvert',
        done: false
    }, {
        id: 6,
        category: 'arcane', 
        title: 'Erda Spectrum',
        done: false
    }, {
        id: 7, 
        category: 'arcane',
        title: 'Hungry Muto',
        done: false
    }, {
        id: 8, 
        category: 'arcane',
        title: 'Midnight Chaser',
        done: false
    }, {
        id: 9, 
        category: 'arcane',
        title: 'Spirit Savior',
        done: false
    }, {
        id: 10, 
        category: 'arcane',
        title: 'Ranheim Defense',
        done: false
    }, {
        id: 11, 
        category: 'arcane',
        title: 'Esfera Guardian',
        done: false
    }
];
//-------------- weeklyBosses -------------------------------------------
export const weeklyBosses = [
    {
        id: 1, 
        category: ['chaos'],
        title: 'Zakum',
        done: false
    }, {
        id: 2, 
        category: ['hard'],
        title: 'Magnus',
        done: false
    }, {
        id: 3, 
        category: ['hard'],
        title: 'Hilla',
        done: false
    }, {
        id: 4, 
        category: ['chaos'],
        title: 'Papulatus',
        done: false
    }, {
        id: 5, 
        category: ['chaos'],
        title: 'Crimson Queen',
        done: false
    }, {
        id: 6, 
        category: ['chaos'],
        title: 'Pierre',
        done: false
    }, {
        id: 7, 
        category:['chaos'],
        title: 'Von Bon',
        done: false
    }, {
        id: 8, 
        category: ['chaos'],
        title: 'Vellum',
        done: false
    }, {
        id: 9, 
        category: ['chaos'],
        title: 'Pink Bean',
        done: false
    }, {
        id: 10, 
        category: ['easy', 'normal'],
        title: 'Cygnus',
        done: false
    }, {
        id: 11, 
        category: ['normal', 'hard'],
        title: 'Lotus',
        done: false
    }, {
        id: 12, 
        category: ['normal', 'hard'],
        title: 'Damien',
        done: false
    }, {
        id: 13, 
        category: ['normal', 'chaos'],
        title: 'Guardian Angel Slime',
        done: false
    }, {
        id: 14, 
        category: ['easy', 'normal', 'hard'],
        title: 'Lucid',
        done: false
    }, {
        id: 15, 
        category: ['easy', 'normal', 'hard'],
        title: 'Will',
        done: false
    }, {
        id: 16, 
        category: ['normal', 'chaos'],
        title: 'Gloom',
        done: false
    }, {
        id: 17, 
        category: ['normal', 'hard'],
        title: 'Versus Hilla',
        done: false
    }, {
        id: 18, 
        category: ['normal', 'hard'],
        title: 'Darknell',
        done: false
    }, {
        id: 19, 
        category: ['hard', 'extreme'],
        title: 'Black Mage',
        done: false
    }, {
        id: 20, 
        category: ['normal', 'hard', 'extreme'],
        title: 'Chosen Seren',
        done: false
    }, {
        id: 21, 
        category: ['easy', 'normal', 'chaos', 'extreme'],
        title: 'Kalos the Guardian',
        done: false
    }, {
        id: 22, 
        category: ['easy', 'normal', 'hard', 'extreme'],
        title: 'Kaling',
        done: false
    }, {
        id: 23, 
        category: 'normal',
        title: 'Princess No',
        done: false
    }, {
        id: 24, 
        category: 'normal',
        title: 'Akechi Mitsuhide',
        done: false
    }
];
//-------------- eventTasks -------------------------------------------
export const dailyEvents = [
    {
        id: 1,   
        category: 'abyssal',
        title: 'Daily Missions (x3)',
        done: false 
    }, {
        id: 2, 
        category: 'abyssal',
        title: 'Boss Lair (x3)',
        done: false
    }, {
        id: 3, 
        category: 'abyssal',
        title: 'AFK: Event Mobbing Maps',
        done: false
    }, {
        id: 4, 
        category: 'abyssal',
        title: 'Claim Reputation & Rewards',
        done: false
    }, {
        id: 5, 
        category: 'identisk',
        title: '[Tisk] Toong\'s Prayer (x30/day)',
        done: false
    }, {
        id: 6, 
        category: '0to100',
        title: 'Zero to One Hundred (x7/event',
        done: false
    }
]
export const weeklyEvents = [
    {
        id: 1, 
        category: 'identisk',
        title: '[Tisk] Coconut Smash (x3/week)',
        done: false
    }, {
        id: 2, 
        category: 'identisk',
        title: '[Tisk] Food Storehouse (x3/week)',
        done: false
    }
];
export const pastEvents = [
    {
        id: 1, 
        category: 'Legendary Blue Dragon',
        title: 'Collect and Summon Dragon Eggs',
        done: false
    }
]
//-------------- sharedTasks -------------------------------------------
export const dailyShared = [
    {
        id: 1,
        category: 'task',
        title: 'Daily Gift',
        done: false
    },  {
        id: 2,
        category: 'task',
        title: 'Legion Coins',
        done: false
    }, {
        id: 3,
        category: 'task',
        title: 'House Check-in',
        done: false
    }, {
        id: 4,
        category: 'task',
        title: 'Level Up Zero',
        done: false
    }
];
export const weeklyShared = [
    {
        id: 1,
        category: 'task',
        title: 'weekly task',
        done: false
    }
];
