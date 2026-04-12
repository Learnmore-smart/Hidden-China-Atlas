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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=pingtan%20island%20beach%20stone%20houses%20landscape%20photography%20high%20quality&image_size=landscape_16_9'
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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=gannan%20tibetan%20grassland%20monastery%20landscape%20photography%20high%20quality&image_size=landscape_16_9'
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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=hongcun%20ancient%20village%20water%20reflection%20huizhou%20architecture%20landscape%20photography%20high%20quality&image_size=landscape_16_9'
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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=zhoushan%20islands%20fishing%20village%20beach%20sea%20landscape%20photography%20high%20quality&image_size=landscape_16_9'
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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=lijiang%20ancient%20town%20naxi%20architecture%20mountain%20landscape%20photography%20high%20quality&image_size=landscape_16_9'
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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=hulunbuir%20grassland%20mongolian%20yurts%20nature%20landscape%20photography%20high%20quality&image_size=landscape_16_9'
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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=xidi%20ancient%20village%20huizhou%20architecture%20landscape%20photography%20high%20quality&image_size=landscape_16_9'
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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=sansha%20town%20fujian%20traditional%20coastal%20fishing%20village%20sea%20landscape%20photography%20high%20quality&image_size=landscape_16_9'
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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=langmusi%20tibetan%20monastery%20town%20nature%20landscape%20photography%20high%20quality&image_size=landscape_16_9'
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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=fenghuang%20ancient%20town%20miao%20architecture%20river%20landscape%20photography%20night%20view%20high%20quality&image_size=landscape_16_9'
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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=yueyang%20tower%20dongting%20lake%20ancient%20chinese%20architecture%20landscape%20photography%20high%20quality&image_size=landscape_16_9'
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
    imageUrl: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=wuyuan%20rural%20china%20ancient%20village%20huizhou%20architecture%20rape%20flower%20fields%20landscape%20photography%20high%20quality&image_size=landscape_16_9'
  }
];