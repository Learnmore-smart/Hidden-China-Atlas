export interface Destination {
  id: string;
  name: string;
  chineseName: string;
  province: string;
  tagline: string;
  whySpecial: string;
  bestSeason: string;
  idealTripLength: string;
  vibeTags: string[];
  crowdLevel: string;
  howToGetThere: string;
  description: string;
  imageUrl: string;
}

export const destinations: Destination[] = [
  {
    id: 'pingtan',
    name: 'Pingtan Island',
    chineseName: '平潭岛',
    province: 'Fujian Province',
    tagline: 'The Taiwan Strait Pearl',
    whySpecial: 'Known for its pristine beaches, unique stone houses, and the closest point to Taiwan mainland',
    bestSeason: 'Spring (April-June) and Autumn (September-November)',
    idealTripLength: '2-3 days',
    vibeTags: ['coastal', 'relaxation', 'photography', 'seafood'],
    crowdLevel: 'Low to Medium',
    howToGetThere: 'Take a high-speed train from Fuzhou to Pingtan, then local transport to the island',
    description: 'A coastal gem with crystal-clear waters, white sandy beaches, and traditional stone houses. Perfect for a relaxing getaway away from the crowds.',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Pingtan%20Island%20coastal%20scenery%20with%20traditional%20stone%20houses%20and%20clear%20blue%20waters&image_size=landscape_16_9'
  },
  {
    id: 'gannan',
    name: 'Gannan Tibetan Autonomous Prefecture',
    chineseName: '甘南藏族自治州',
    province: 'Gansu Province',
    tagline: 'Tibetan Plateau Gateway',
    whySpecial: 'Stunning grasslands, Tibetan monasteries, and unique ethnic culture without the crowds of Tibet',
    bestSeason: 'Summer (June-August)',
    idealTripLength: '4-5 days',
    vibeTags: ['mountains', 'culture', 'photography', 'spiritual'],
    crowdLevel: 'Low',
    howToGetThere: 'Fly to Lanzhou, then take a bus or drive to Xiahe',
    description: 'Scenic grasslands, Tibetan monasteries, and nomadic culture in northwestern China. A hidden paradise for nature and culture lovers.',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Gannan%20Tibetan%20Autonomous%20Prefecture%20grasslands%20with%20Tibetan%20monastery%20and%20yaks&image_size=landscape_16_9'
  },
  {
    id: 'hongcun',
    name: 'Hongcun Village',
    chineseName: '宏村',
    province: 'Anhui Province',
    tagline: 'Ancient Water Village',
    whySpecial: 'A UNESCO World Heritage site with well-preserved Hui-style architecture and a unique water system',
    bestSeason: 'Spring (March-April) and Autumn (October-November)',
    idealTripLength: '1-2 days',
    vibeTags: ['heritage', 'culture', 'photography', 'history'],
    crowdLevel: 'Medium to High',
    howToGetThere: 'Take a bus from Huangshan City to Hongcun',
    description: 'An ancient village with traditional Hui-style architecture, narrow stone lanes, and a unique water system. Known as the "Village in Chinese Painting".',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hongcun%20Village%20ancient%20Chinese%20water%20village%20with%20traditional%20Hui-style%20architecture&image_size=landscape_16_9'
  },
  {
    id: 'zhoushan',
    name: 'Zhoushan Islands',
    chineseName: '舟山群岛',
    province: 'Zhejiang Province',
    tagline: 'East China Sea Archipelago',
    whySpecial: 'A group of islands with pristine beaches, fresh seafood, and unique fishing villages',
    bestSeason: 'Summer (June-September)',
    idealTripLength: '3-4 days',
    vibeTags: ['coastal', 'relaxation', 'seafood', 'islands'],
    crowdLevel: 'Medium',
    howToGetThere: 'Take a ferry from Ningbo or Shanghai to Zhoushan',
    description: 'A beautiful archipelago with clear waters, sandy beaches, and fresh seafood. Perfect for a coastal escape.',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Zhoushan%20Islands%20coastal%20scenery%20with%20fishing%20boats%20and%20clear%20blue%20waters&image_size=landscape_16_9'
  },
  {
    id: 'lijiang',
    name: 'Lijiang Ancient Town',
    chineseName: '丽江古城',
    province: 'Yunnan Province',
    tagline: 'Naxi Ethnic Treasure',
    whySpecial: 'A UNESCO World Heritage site with well-preserved Naxi ethnic culture and architecture',
    bestSeason: 'Spring (March-May) and Autumn (September-November)',
    idealTripLength: '2-3 days',
    vibeTags: ['heritage', 'culture', 'photography', 'history'],
    crowdLevel: 'High',
    howToGetThere: 'Fly to Lijiang Airport, then take a taxi to the ancient town',
    description: 'A well-preserved ancient town with Naxi ethnic culture, traditional architecture, and scenic surroundings. A popular but still charming destination.',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Lijiang%20Ancient%20Town%20with%20traditional%20Naxi%20architecture%20and%20cobblestone%20streets&image_size=landscape_16_9'
  },
  {
    id: 'hulunbuir',
    name: 'Hulunbuir Grassland',
    chineseName: '呼伦贝尔草原',
    province: 'Inner Mongolia Autonomous Region',
    tagline: 'Mongolian Nomadic Paradise',
    whySpecial: 'Vast grasslands with traditional Mongolian nomadic culture and stunning natural scenery',
    bestSeason: 'Summer (June-August)',
    idealTripLength: '4-5 days',
    vibeTags: ['mountains', 'culture', 'photography', 'nature'],
    crowdLevel: 'Low to Medium',
    howToGetThere: 'Fly to Hailar Airport, then rent a car or join a tour',
    description: 'Vast grasslands with Mongolian nomadic culture, yurts, and stunning natural scenery. A perfect place to experience traditional Mongolian life.',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Hulunbuir%20Grassland%20vast%20green%20pasture%20with%20Mongolian%20yurts%20and%20herds%20of%20sheep&image_size=landscape_16_9'
  },
  {
    id: 'xidi',
    name: 'Xidi Village',
    chineseName: '西递村',
    province: 'Anhui Province',
    tagline: 'Ancient Hui-style Village',
    whySpecial: 'A UNESCO World Heritage site with well-preserved Hui-style architecture and peaceful atmosphere',
    bestSeason: 'Spring (March-April) and Autumn (October-November)',
    idealTripLength: '1-2 days',
    vibeTags: ['heritage', 'culture', 'photography', 'history'],
    crowdLevel: 'Medium',
    howToGetThere: 'Take a bus from Huangshan City to Xidi',
    description: 'A well-preserved ancient village with traditional Hui-style architecture, intricate wood carvings, and a peaceful atmosphere.',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Xidi%20Village%20ancient%20Chinese%20village%20with%20traditional%20Hui-style%20architecture&image_size=landscape_16_9'
  },
  {
    id: 'sansha',
    name: 'Sansha Town',
    chineseName: '三沙镇',
    province: 'Fujian Province',
    tagline: 'Coastal Fishing Town',
    whySpecial: 'A traditional fishing town with unique coastal architecture and fresh seafood',
    bestSeason: 'Spring (April-June) and Autumn (September-November)',
    idealTripLength: '2-3 days',
    vibeTags: ['coastal', 'food', 'photography', 'relaxation'],
    crowdLevel: 'Low',
    howToGetThere: 'Take a bus from Xiamen to Dongshan Island, then local transport to Sansha',
    description: 'A traditional fishing town with unique coastal architecture, fresh seafood, and a relaxed atmosphere. Perfect for a quiet coastal getaway.',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sansha%20Town%20coastal%20fishing%20town%20with%20traditional%20stone%20houses%20and%20fishing%20boats&image_size=landscape_16_9'
  },
  {
    id: 'langmusi',
    name: 'Langmusi',
    chineseName: '郎木寺',
    province: 'Gansu/Sichuan Provinces',
    tagline: 'Tibetan Border Town',
    whySpecial: 'A small town on the border of Gansu and Sichuan with Tibetan monasteries and stunning natural scenery',
    bestSeason: 'Summer (June-August)',
    idealTripLength: '2-3 days',
    vibeTags: ['mountains', 'culture', 'photography', 'spiritual'],
    crowdLevel: 'Low',
    howToGetThere: 'Take a bus from Xiahe or Chengdu to Langmusi',
    description: 'A small town on the border of Gansu and Sichuan with Tibetan monasteries, stunning natural scenery, and a peaceful atmosphere.',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Langmusi%20Tibetan%20border%20town%20with%20monastery%20and%20mountain%20backdrop&image_size=landscape_16_9'
  },
  {
    id: 'fenghuang',
    name: 'Fenghuang Ancient Town',
    chineseName: '凤凰古城',
    province: 'Hunan Province',
    tagline: 'Phoenix Ancient Town',
    whySpecial: 'A well-preserved ancient town with unique Miao and Tujia ethnic culture and architecture',
    bestSeason: 'Spring (March-May) and Autumn (September-November)',
    idealTripLength: '2-3 days',
    vibeTags: ['heritage', 'culture', 'photography', 'history'],
    crowdLevel: 'Medium to High',
    howToGetThere: 'Take a train to Jishou, then a bus to Fenghuang',
    description: 'A well-preserved ancient town with unique Miao and Tujia ethnic culture, traditional architecture, and scenic river views.',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Fenghuang%20Ancient%20Town%20with%20traditional%20wooden%20houses%20along%20the%20river&image_size=landscape_16_9'
  },
  {
    id: 'yueyang',
    name: 'Yueyang Tower',
    chineseName: '岳阳楼',
    province: 'Hunan Province',
    tagline: 'Ancient Water Tower',
    whySpecial: 'One of the Four Great Towers of China with stunning views of Dongting Lake',
    bestSeason: 'Spring (March-May) and Autumn (September-November)',
    idealTripLength: '1-2 days',
    vibeTags: ['heritage', 'history', 'photography', 'culture'],
    crowdLevel: 'Medium',
    howToGetThere: 'Take a train to Yueyang, then local transport to Yueyang Tower',
    description: 'One of the Four Great Towers of China with stunning views of Dongting Lake and rich historical significance.',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yueyang%20Tower%20ancient%20Chinese%20tower%20with%20Dongting%20Lake%20in%20the%20background&image_size=landscape_16_9'
  },
  {
    id: 'wuyuan',
    name: 'Wuyuan',
    chineseName: '婺源',
    province: 'Jiangxi Province',
    tagline: 'Rural China Paradise',
    whySpecial: 'Known for its beautiful countryside, ancient villages, and rape flower fields',
    bestSeason: 'Spring (March-April) for rape flowers, Autumn (October-November) for autumn colors',
    idealTripLength: '2-3 days',
    vibeTags: ['rural', 'photography', 'nature', 'heritage'],
    crowdLevel: 'Medium to High during peak seasons',
    howToGetThere: 'Take a train to Jingdezhen, then a bus to Wuyuan',
    description: 'Beautiful countryside with ancient villages, rape flower fields, and traditional Huizhou architecture. A perfect place to experience rural China.',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Wuyuan%20countryside%20with%20rape%20flower%20fields%20and%20ancient%20villages&image_size=landscape_16_9'
  }
];
