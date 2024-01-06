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
   id: ,
   type: '', 
   name: ''
},
-----------------*/
//-------------- charTabNames -------------------------------------------
export const charNames = [
    {
        id: 1,
        type: 'default',
        name: 'character 2'
    }, {
        id: 2,
        type: 'default',
        name: 'character 2'
    }, {
        id: 3,
        type: 'default',
        name: 'character 3'
    }, {
        id: 4,
        type: 'default',
        name: 'character 4'
    }
]
//-------------- dailyTasks -------------------------------------------

export const dailyTasks = [
    {  
        id: 1, 
        type: 'Task', 
        name: 'Guild Check-in'
    }, {
        id: 2, 
        type: 'Task', 
        name: 'MPE'
    }, {
        id: 3, 
        type: 'Arcane River', 
        name: 'Vanishing Journey'
    }, {
        id: 4, 
        type: 'Arcane River', 
        name: 'Chu Chu'
    }, {
        id: 5, 
        type: 'Arcane River', 
        name: 'Lachelein'
    }, {
        id: 6, 
        type: 'Arcane River', 
        task: 'Arcana'
    }, {
        id: 7, 
        type: 'Arcane River', 
        name: 'Morass'
    }, {
        id: 8, 
        type: 'Arcane River', 
        name: 'Esfera'
    }, {
        id: 9, 
        type: 'Arcane River', 
        name: 'Tenebris Research'
    }, {
        id: 10, 
        type: 'Grandis', 
        name: 'Erda\'s Request'
    }, {
        id: 11, 
        type: 'Grandis', 
        name: 'Cernium'
    }, {
        id: 12, 
        type: 'Grandis', 
        name: 'Arcus'
    }, {
        id: 13, 
        type: 'Grandis', 
        name: 'Odium'
    }, {
        id: 14, 
        type: 'Grandis', 
        name: 'Shangri-La'
    }, {
        id: 15, 
        type: 'Grandis', 
        name: 'Arteria'
    }
];
//-------------- dailyBosses -------------------------------------------
export const dailyBosses = [
    {
        id: 1,  
        type: 'Easy, Normal',
        name: 'Zakum'
    }, { 
        id: 2,  
        type: 'Easy, Normal',
        name: 'Magnus'
    }, {
        id: 3,  
        type: 'Normal',
        name: 'Hilla'
    }, {
        id: 4,  
        type: 'Normal',
        name: 'OMNI-CLN'
    }, {
        id: 5,  
        type: 'Easy, Normal',
        name: 'Papulatus'
    }, {
        id: 6,  
        type: 'Normal',
        name: 'Crimson Queen'
    }, {
        id: 7,  
        type: 'Normal',
        name: 'Pierre'
    }, {
        id: 8,  
        type: 'Normal',
        name: 'Von Bon'
    }, {
        id: 9,  
        type: 'Normal',
        name: 'Vellum'
    }, {
        id: 10,  
        type: 'Easy, Normal, Hard',
        name: 'Von Leon'
    }, {
        id: 11,  
        type: 'Easy, Normal, Chaos',
        name: 'Horntail'
    }, {
        id: 12,  
        type: 'Easy, Normal',
        name: 'Arkarium'
    }, {
        id: 13,  
        type: 'Normal',
        name: 'Pink Bean'
    }, {
        id: 14,  
        type: 'Normal',
        name: 'Gollux'
    }, {
        id: 15,  
        type: 'Normal',
        name: 'Ranmaru'
    }
];
//-------------- weeklyTasks -------------------------------------------
export const weeklyTasks = [
    {
        id: 1, 
        type: 'Task',
        name: 'Claim Guild Buff'
    }, {
        id: 2, 
        type: 'Task',
        name: 'Dark World Tree'
    }, {
        id: 3, 
        type: 'Task',
        name: 'Mu Lung Dojo'
    }, {
        id: 4, 
        type: 'Task',
        name: 'Flag Race'
    }, {
        id: 5, 
        type: 'Task',
        name: 'Sharenian Culvert'
    }, {
        id: 6, 
        type: 'Arcane River',
        name: 'Erda Spectrum'
    }, {
        id: 7, 
        type: 'Arcane River',
        name: 'Hungry Muto'
    }, {
        id: 8, 
        type: 'Arcane River',
        name: 'Midnight Chaser'
    }, {
        id: 9, 
        type: 'Arcane River',
        name: 'Spirit Savior'
    }, {
        id: 10, 
        type: 'Arcane River',
        name: 'Ranheim Defense'
    }, {
        id: 11, 
        type: 'Arcane River',
        name: 'Esfera Guardian'
    }
];
//-------------- weeklyBosses -------------------------------------------
export const weeklyBosses = [
    {
        id: 1, 
        type: 'Chaos',
        name: 'Zakum'
    }, {
        id: 2, 
        type: 'Hard',
        name: 'Magnus'
    }, {
        id: 3, 
        type: 'Hard',
        name: 'Hilla'
    }, {
        id: 4, 
        type: 'Chaos',
        name: 'Papulatus'
    }, {
        id: 5, 
        type: 'Chaos',
        name: 'Crimson Queen'
    }, {
        id: 6, 
        type: 'Chaos',
        name: 'Pierre'
    }, {
        id: 7, 
        type: 'Chaos',
        name: 'Von Bon'
    }, {
        id: 8, 
        type: 'Chaos',
        name: 'Vellum'
    }, {
        id: 9, 
        type: 'Chaos',
        name: 'Pink Bean'
    }, {
        id: 10, 
        type: 'Easy, Normal',
        name: 'Cygnus'
    }, {
        id: 11, 
        type: 'Normal, Hard',
        name: 'Lotus'
    }, {
        id: 12, 
        type: 'Normal, Hard',
        name: 'Damien'
    }, {
        id: 13, 
        type: 'Normal, Chaos',
        name: 'Guardian Angel Slime'
    }, {
        id: 14, 
        type: 'Easy, Normal, Hard',
        name: 'Lucid'
    }, {
        id: 15, 
        type: 'Easy, Normal, Hard',
        name: 'Will'
    }, {
        id: 16, 
        type: 'Normal, Chaos',
        name: 'Gloom'
    }, {
        id: 17, 
        type: 'Normal, Hard',
        name: 'Versus Hilla'
    }, {
        id: 18, 
        type: 'Normal, Hard',
        name: 'Darknell'
    }, {
        id: 19, 
        type: 'Hard, Extreme',
        name: 'Black Mage'
    }, {
        id: 20, 
        type: 'Normal, Hard, Extreme',
        name: 'Chosen Seren'
    }, {
        id: 21, 
        type: 'Easy, Normal, Chaos, Extreme',
        name: 'Kalos the Guardian'
    }, {
        id: 22, 
        type: 'Easy, Normal, Hard, Extreme',
        name: 'Kaling'
    }, {
        id: 23, 
        type: 'Normal',
        name: 'Princess No'
    }, {
        id: 24, 
        type: 'Normal',
        name: 'Akechi Mitsuhide'
    }
];
//-------------- eventTasks -------------------------------------------
export const eventTasks = [
    {
        id: 1,   
        type: 'Abyssal Expedition',
        name: 'Daily Missions (x3)'
    }, {
        id: 2, 
        type: 'Abyssal Expedition',
        name: 'Boss Lair (x3)'
    }, {
        id: 3, 
        type: 'Abyssal Expedition',
        name: 'AFK: Event Mobbing Maps'
    }, {
        id: 4, 
        type: 'Abyssal Expedition',
        name: 'Claim Reputation & Rewards'
    }, {
        id: 5, 
        type: 'Identisk',
        name: '[Tisk] Toong\'s Prayer'
    }, {
        id: 6, 
        type: 'Identisk Weekly',
        name: '[Tisk] Tropical Adventure'
    }, {
        id: 7, 
        type: 'Identisk Weekly',
        name: '[Tisk] Coconut Smash'
    }, {
        id: 8, 
        type: 'Identisk Weekly',
        name: '[Tisk] Food Storehouse'
    }, {
        id: 9, 
        type: '0to100',
        name: 'Zero to One Hundred'
    }, {
        id: 10, 
        type: 'Legendary Blue Dragon',
        name: 'Collect and Summon Dragon Eggs'
    },
];
//-------------- sharedTasks -------------------------------------------
export const sharedTasks = [
    {
        id: 1,
        type: 'daily',
        name: 'Daily Gift'
    },  {
        id: 2,
        type: 'daily',
        name: 'Legion'
    }, {
        id: 3,
        type: 'daily',
        name: 'House Check-in'
    }, {
        id: 4,
        type: 'weekly',
        name: 'Level Up Zero'
    }
];