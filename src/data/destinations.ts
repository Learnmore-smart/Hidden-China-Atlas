export interface Destination {
  id: string;
  nameEn: string;
  nameZh: string;
  province: string;
  tagline: string;
  description: string;
  bestSeason: string[];
  tripLength: string;
  vibes: string[];
  crowdLevel: 'Low' | 'Medium' | 'High';
  gettingThere: string;
  coordinates: { x: number; y: number };
  image: string;
}

export const destinations: Destination[] = [
  {
    id: 'kanas',
    nameEn: 'Kanas',
    nameZh: '喀纳斯',
    province: 'Xinjiang',
    tagline: 'The palette of the gods.',
    description: 'An alpine lake hidden deep in the Altai Mountains, famous for its changing colors and pristine Siberian taiga forests. It feels more like Switzerland than typical China.',
    bestSeason: ['Autumn', 'Summer'],
    tripLength: '3-5 days',
    vibes: ['mountains', 'photography', 'nature'],
    crowdLevel: 'Medium',
    gettingThere: 'Fly to Altay Airport or Burqin Kanas Airport, then take a scenic bus ride into the nature reserve.',
    coordinates: { x: 25, y: 15 },
    image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Stunning%20alpine%20lake%20surrounded%20by%20golden%20autumn%20forests%20and%20snow-capped%20mountains,%20cinematic%20lighting,%20National%20Geographic%20style&image_size=landscape_16_9'
  },
  {
    id: 'yubeng',
    nameEn: 'Yubeng Village',
    nameZh: '雨崩村',
    province: 'Yunnan',
    tagline: 'A sacred Tibetan sanctuary.',
    description: 'Accessible only by foot or mule, this remote Tibetan village sits at the foot of the Meili Snow Mountain. It is the ultimate destination for slow travel and spiritual trekking.',
    bestSeason: ['Spring', 'Autumn'],
    tripLength: '4-6 days',
    vibes: ['mountains', 'slow travel', 'quiet'],
    crowdLevel: 'Low',
    gettingThere: 'Fly to Shangri-La (Diqing), drive to Feilaisi, and hike or take an off-road vehicle into the village.',
    coordinates: { x: 45, y: 65 },
    image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Remote%20Tibetan%20village%20in%20a%20lush%20green%20valley%20under%20massive%20snow%20peaks,%20misty%20morning,%20peaceful,%20cinematic&image_size=landscape_16_9'
  },
  {
    id: 'xiapu',
    nameEn: 'Xiapu Mudflats',
    nameZh: '霞浦滩涂',
    province: 'Fujian',
    tagline: 'A living ink painting.',
    description: 'The largest mudflats in China, where bamboo poles, fishing nets, and changing tides create mesmerizing geometric patterns that photographers dream of.',
    bestSeason: ['Spring', 'Autumn'],
    tripLength: '2-3 days',
    vibes: ['coastal', 'photography', 'quiet'],
    crowdLevel: 'Low',
    gettingThere: 'High-speed train directly to Xiapu Station, then hire a local driver to explore the coastal villages.',
    coordinates: { x: 85, y: 65 },
    image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Vast%20ocean%20mudflats%20at%20sunset%20with%20bamboo%20poles%20and%20fishing%20nets%20creating%20geometric%20patterns,%20golden%20hour,%20drone%20shot&image_size=landscape_16_9'
  },
  {
    id: 'hongcun',
    nameEn: 'Hongcun',
    nameZh: '宏村',
    province: 'Anhui',
    tagline: 'Crouching tiger, hidden village.',
    description: 'A 900-year-old village shaped like an ox, featuring iconic whitewashed walls, dark tiles, and tranquil reflecting pools. Featured in the film "Crouching Tiger, Hidden Dragon".',
    bestSeason: ['Spring', 'Autumn'],
    tripLength: '2 days',
    vibes: ['heritage', 'photography', 'slow travel'],
    crowdLevel: 'High',
    gettingThere: 'High-speed train to Huangshan North Station, followed by a 1-hour bus ride.',
    coordinates: { x: 80, y: 50 },
    image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Traditional%20Chinese%20village%20with%20white%20walls%20and%20black%20roofs%20reflected%20in%20a%20still%20moon-shaped%20pond,%20misty,%20poetic,%20high%20resolution&image_size=landscape_16_9'
  },
  {
    id: 'langmusi',
    nameEn: 'Langmusi',
    nameZh: '郎木寺',
    province: 'Gansu / Sichuan',
    tagline: 'The little Switzerland of the East.',
    description: 'A border town straddling two provinces, surrounded by alpine meadows and red sandstone cliffs. Home to two major Tibetan Buddhist monasteries and a deep sense of peace.',
    bestSeason: ['Summer', 'Autumn'],
    tripLength: '3 days',
    vibes: ['heritage', 'mountains', 'quiet'],
    crowdLevel: 'Low',
    gettingThere: 'Fly to Jiuzhai Huanglong Airport or Xiahe Airport, then take a long-distance bus or private car.',
    coordinates: { x: 55, y: 45 },
    image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Tibetan%20monasteries%20with%20golden%20roofs%20nestled%20in%20a%20green%20alpine%20valley%20with%20red%20cliffs%20in%20the%20background,%20sunny%20day,%20vibrant%20colors&image_size=landscape_16_9'
  },
  {
    id: 'enshi',
    nameEn: 'Enshi Grand Canyon',
    nameZh: '恩施大峡谷',
    province: 'Hubei',
    tagline: 'Nature’s sculptural masterpiece.',
    description: 'A spectacular landscape of deep gorges, karst pillars, underground rivers, and the iconic "One Incense Pillar" rock formation. An adventurer’s paradise.',
    bestSeason: ['Spring', 'Summer'],
    tripLength: '2-3 days',
    vibes: ['mountains', 'nature', 'photography'],
    crowdLevel: 'Medium',
    gettingThere: 'Fly to Enshi Xujiaping Airport or take a high-speed train to Enshi Station, then a 1.5-hour bus to the canyon.',
    coordinates: { x: 65, y: 55 },
    image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Dramatic%20deep%20green%20canyon%20with%20towering%20karst%20stone%20pillars%20rising%20from%20the%20mist,%20epic%20scale,%20National%20Geographic&image_size=landscape_16_9'
  },
  {
    id: 'wuyuan',
    nameEn: 'Wuyuan',
    nameZh: '婺源',
    province: 'Jiangxi',
    tagline: 'The most beautiful countryside.',
    description: 'Famous for its sweeping terraces of yellow canola flowers in spring and fiery red maple leaves in autumn, dotted with well-preserved Huizhou-style ancient architecture.',
    bestSeason: ['Spring', 'Autumn'],
    tripLength: '2-3 days',
    vibes: ['heritage', 'slow travel', 'photography'],
    crowdLevel: 'Medium',
    gettingThere: 'High-speed train to Wuyuan Station, then rent a car or take local buses between villages.',
    coordinates: { x: 80, y: 55 },
    image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Terraced%20fields%20of%20bright%20yellow%20canola%20flowers%20surrounding%20ancient%20Chinese%20villages%20with%20white%20walls,%20springtime,%20beautiful%20light&image_size=landscape_16_9'
  },
  {
    id: 'tengchong',
    nameEn: 'Tengchong',
    nameZh: '腾冲',
    province: 'Yunnan',
    tagline: 'Volcanoes, hot springs, and history.',
    description: 'A laid-back border town near Myanmar known for its geothermal hot springs, ancient volcanic craters, and the centuries-old Heshun ancient town.',
    bestSeason: ['Autumn', 'Winter'],
    tripLength: '3-4 days',
    vibes: ['slow travel', 'heritage', 'quiet'],
    crowdLevel: 'Low',
    gettingThere: 'Fly directly to Tengchong Tuofeng Airport.',
    coordinates: { x: 35, y: 70 },
    image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Ancient%20Chinese%20town%20with%20cobblestone%20streets,%20lush%20greenery,%20and%20steam%20rising%20from%20natural%20hot%20springs%20in%20the%20distance,%20warm%20atmosphere&image_size=landscape_16_9'
  },
  {
    id: 'chongzuo',
    nameEn: 'Chongzuo',
    nameZh: '崇左',
    province: 'Guangxi',
    tagline: 'Karst mountains meeting the border.',
    description: 'Home to the magnificent Detian Waterfall on the China-Vietnam border, surrounded by lush sugarcane fields and surreal karst peaks without the crowds of Guilin.',
    bestSeason: ['Summer', 'Autumn'],
    tripLength: '2-3 days',
    vibes: ['nature', 'photography', 'quiet'],
    crowdLevel: 'Low',
    gettingThere: 'Fly to Nanning Wuxu Airport, then drive 2-3 hours to Chongzuo.',
    coordinates: { x: 60, y: 75 },
    image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Massive%20multi-tiered%20waterfall%20surrounded%20by%20tropical%20karst%20mountains%20and%20lush%20greenery,%20epic%20landscape,%20beautiful%20sunlight&image_size=landscape_16_9'
  },
  {
    id: 'pingyao',
    nameEn: 'Pingyao',
    nameZh: '平遥',
    province: 'Shanxi',
    tagline: 'A journey back to the Ming Dynasty.',
    description: 'One of the best-preserved ancient walled cities in the world. Walking its lantern-lit streets at night feels like stepping directly into a historical drama.',
    bestSeason: ['Spring', 'Autumn'],
    tripLength: '2 days',
    vibes: ['heritage', 'photography'],
    crowdLevel: 'High',
    gettingThere: 'High-speed train to Pingyao Ancient City Station.',
    coordinates: { x: 65, y: 35 },
    image: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Ancient%20Chinese%20walled%20city%20street%20at%20dusk,%20glowing%20red%20lanterns,%20traditional%20courtyard%20architecture,%20moody%20and%20cinematic&image_size=landscape_16_9'
  }
];
