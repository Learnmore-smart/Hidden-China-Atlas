import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 'kizil-ruku',
    nameZh: '克孜尔千佛洞',
    nameEn: 'Kizil Caves',
    location: '新疆拜城县',
    description: '中国开凿最早、地理位置最西的大型石窟群，被誉为"中国第二敦煌"。',
    longDescription: '克孜尔石窟是中国开凿最早、地理位置最西的大型石窟群，始建于公元3世纪。与莫高窟相比，这里更多保留了古龟兹国浓郁的西域风情与独特的菱形格壁画。站在这片荒凉的红褐色山崖前，千年前的梵音仿佛仍在耳畔回荡。这是一种深邃的留白，不仅在壁画残缺的剥落中，更在历史长河的寂静里。',
    images: [
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Ancient%20Buddhist%20caves%20carved%20into%20red%20sandstone%20cliffs%2C%20Xinjiang%20landscape%2C%20dramatic%20lighting%2C%20cinematic%20photography&image_size=landscape_16_9',
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Close%20up%20of%20ancient%20faded%20Buddhist%20murals%20in%20a%20cave%2C%20diamond%20patterns%2C%20blue%20and%20green%20pigments%2C%20textured%20wall&image_size=landscape_16_9',
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Vast%20desert%20landscape%20with%20red%20mountains%2C%20ancient%20Silk%20Road%20ruins%20at%20sunset%2C%20mysterious%20atmosphere&image_size=landscape_16_9'
    ],
    coverImage: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Cinematic%20wide%20shot%20of%20ancient%20caves%20in%20red%20cliffs%2C%20Kizil%20Xinjiang%2C%20solitary%20and%20mysterious%20eastern%20aesthetic&image_size=landscape_16_9',
    category: 'culture'
  },
  {
    id: 'pingtan-island',
    nameZh: '平潭岛蓝眼泪',
    nameEn: 'Pingtan Blue Tears',
    location: '福建平潭',
    description: '暗夜中海浪泛起幽蓝色微光，宛如繁星坠入大海的奇幻自然秘境。',
    longDescription: '每年春夏之交，福建平潭岛的海岸线会迎来一场如梦如幻的“蓝眼泪”。这是一种发光的海洋浮游生物，在海浪的拍打下散发出幽蓝色的微光。在寂静无人的深夜海滩，浪花碎裂成星河，这种极致的自然浪漫，是海洋留给黑夜最深情的告白。',
    images: [
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Bioluminescent%20blue%20waves%20crashing%20on%20a%20dark%20beach%20at%20night%2C%20magical%20glowing%20ocean%2C%20starry%20sky&image_size=landscape_16_9',
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Close%20up%20of%20glowing%20blue%20plankton%20in%20sand%2C%20ethereal%20night%20photography&image_size=landscape_16_9',
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Rocky%20coastline%20illuminated%20by%20neon%20blue%20waves%20under%20moonlight%2C%20mystical%20atmosphere&image_size=landscape_16_9'
    ],
    coverImage: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Glowing%20blue%20bioluminescent%20waves%20washing%20over%20a%20dark%20beach%20at%20night%2C%20magical%20nature%20phenomenon%2C%20cinematic&image_size=portrait_4_3',
    category: 'nature'
  },
  {
    id: 'ronghua-craft',
    nameZh: '南京绒花',
    nameEn: 'Nanjing Ronghua',
    location: '江苏南京',
    description: '唐代贡品，以蚕丝和铜丝制成，寓意"荣华"的中国非遗绝技。',
    longDescription: '绒花，谐音“荣华”，是中国古代特有的传统手工艺品。它以蚕丝和铜丝为原料，经过染色、打绒、传花等十多道繁琐工序，在匠人指尖绽放出永不凋零的花朵。在快节奏的现代社会，这种耗时极长、极需耐心的手艺，展现了东方人对“慢”与“精”的极致追求，是时间流逝中的一抹留白。',
    images: [
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Traditional%20Chinese%20silk%20velvet%20flower%20hairpin%2C%20intricate%20craftsmanship%2C%20macro%20photography%2C%20elegant%20lighting&image_size=landscape_16_9',
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Artisan%20hands%20making%20delicate%20silk%20flowers%2C%20warm%20ambient%20light%2C%20traditional%20workshop&image_size=landscape_16_9',
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Elegant%20velvet%20peony%20flower%20on%20dark%20background%2C%20minimalist%20eastern%20aesthetic&image_size=landscape_16_9'
    ],
    coverImage: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Close%20up%20of%20a%20beautiful%20traditional%20Chinese%20velvet%20flower%2C%20vibrant%20colors%2C%20dark%20moody%20background%2C%20high%20end%20product%20photography&image_size=landscape_16_9',
    category: 'heritage'
  },
  {
    id: 'nuorilang',
    nameZh: '诺日朗群海',
    nameEn: 'Nuorilang Lakes',
    location: '四川九寨沟',
    description: '隐匿在密林深处的翠蓝色湖泊群，如同散落人间的翡翠。',
    longDescription: '远离九寨沟喧嚣的主景区，诺日朗群海像是一串被遗忘的珍珠。水色随着光线的变化，在孔雀绿与宝石蓝之间流转。倒伏在水底的古木经过钙化，宛如水下的珊瑚礁。这里的静谧与色彩的极致碰撞，诠释了自然界中最不羁却又最内敛的美。',
    images: [
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Crystal%20clear%20turquoise%20alpine%20lakes%20surrounded%20by%20autumn%20forest%2C%20Jiuzhaigou%20valley%2C%20aerial%20view&image_size=landscape_16_9',
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Submerged%20ancient%20tree%20trunks%20in%20clear%20emerald%20water%2C%20nature%20photography&image_size=landscape_16_9',
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Peaceful%20mirror%20like%20lake%20reflecting%20snowy%20mountains%20and%20colorful%20trees&image_size=landscape_16_9'
    ],
    coverImage: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Stunning%20emerald%20green%20lake%20hidden%20in%20a%20deep%20forest%2C%20ethereal%20light%20rays%2C%20nature%20masterpiece&image_size=portrait_4_3',
    category: 'nature'
  },
  {
    id: 'shaxi-ancient-town',
    nameZh: '沙溪古镇',
    nameEn: 'Shaxi Ancient Town',
    location: '云南剑川',
    description: '茶马古道上唯一幸存的古集市，时间在这里停滞的世外桃源。',
    longDescription: '沙溪是茶马古道上唯一幸存的古集市。漫步在四方街的红砂石板上，耳边仿佛还能听到千年前马帮的驼铃声。这里没有过度的商业化，只有斑驳的戏台、流淌的黑潓江和日出而作的村民。沙溪保留了最真实的中国乡村肌理，是现代文明之外的一方净土。',
    images: [
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Ancient%20Chinese%20village%20square%2C%20cobblestone%20streets%2C%20traditional%20wooden%20architecture%2C%20misty%20morning&image_size=landscape_16_9',
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Old%20stone%20bridge%20over%20a%20quiet%20river%20in%20an%20ancient%20Chinese%20town%2C%20willow%20trees%2C%20peaceful&image_size=landscape_16_9',
      'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Traditional%20Chinese%20theater%20stage%20made%20of%20wood%20in%20an%20old%20village%2C%20faded%20colors%2C%20historical&image_size=landscape_16_9'
    ],
    coverImage: 'https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Cinematic%20view%20of%20an%20ancient%20Chinese%20town%20at%20dusk%2C%20warm%20lantern%20light%2C%20traditional%20roofs%2C%20serene%20atmosphere&image_size=landscape_16_9',
    category: 'culture'
  }
];
