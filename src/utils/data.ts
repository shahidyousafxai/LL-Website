import assets from '@/assets';

export const data = {
  // Header
  header: [
    {
      id: 1,
      path: '/',
      name: 'Home',
    },
    {
      id: 2,
      path: '/locations',
      name: 'Locations',
    },
    {
      id: 3,
      path: '/blogs',
      name: 'Blog',
    },
    {
      id: 4,
      path: '#',
      name: 'Contact',
      // child: [
      //   {
      //     id: 1,
      //     path: '/contact',
      //     name: 'Contact Us',
      //   },
      // ],
    },
    {
      id: 5,
      path: '/meet-the-team',
      name: 'Meet The Team',
    },
  ],
  // Footer
  footer: {
    section1: {
      desc: 'Not just a storage unit, an investment. RV & Boat Storage & Investing in storage units at Luxelocker.',
    },
    section2: {
      title: 'Navigation',
      links: [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Locations', path: '/locations' },
        { id: 3, name: 'Blog', path: '/blogs' },
        { id: 4, name: 'Contact', path: '#' },
        { id: 5, name: 'Meet The Team', path: '/meet-the-team' },
        { id: 6, name: 'FAQ', path: '/faqs' },
      ],
    },
    section3: {
      title: 'Locations',
      links: [
        { id: 1, name: 'Henderson, NV', path: '#' },
        { id: 2, name: 'Spanish Springs, NV', path: '#' },
        { id: 3, name: 'Richland, WA', path: '#' },
        { id: 4, name: 'Boise, ID', path: '#' },
        { id: 5, name: 'Phoenix, AZ', path: '#' },
        { id: 6, name: 'Lake Havasu, AZ', path: '#' },
      ],
    },
    section4: {
      title: 'Socials',
      links: [
        { id: 1, name: 'Twitter', path: 'https://twitter.com/luxelocker' },
        {
          id: 2,
          name: 'Facebook',
          path: 'https://www.facebook.com/Luxelockerstorage',
        },
        {
          id: 3,
          name: 'Instagram',
          path: 'https://www.instagram.com/luxelockerstorage/',
        },
      ],
    },
    copyright: {
      title: '©2023 All rights reserved',
      policies: ['Privacy Policy', 'License Agreement'],
    },
  },

  // Home Page
  heroSection: {
    title: 'Buy, Rent or Sell Boat & RV Storage Units',
    desc: 'Great platform to buy, sell, or even rent your storage units.',
  },
  aboutSection: {
    title: 'What Luxelocker is All About',
    desc1:
      'LuxeLocker facilities offer a full host of deluxe services and amenities, like large vehicle storage, wine storage, and climate-controlled storage. All our units also feature perks like 24-hour accessibility, on-site showers and bathrooms, and digital monitoring. Whatever you’re looking for in a storage unit, you’ll find it – and more – at LuxeLocker.',
    desc2:
      'When you choose LuxeLocker, you get options. Everyone knows about renting storage units, but going the luxe route means you have the choice to buy your unit for long-term use. Don’t just store your stuff – grow your future capital by subletting your unit for a passive stream of income. With lease and buy-to-lease options, a wide variety of convenient services and amenities, and affordable prices, LuxeLocker is the perfect place for you.',
    points: [
      'Fully Gated',
      'PIN Pad Access',
      'Security cameras',
      'Climate-Controlled Storage',
    ],
  },
  userSection: {
    box1: {
      title: 'Dirk O. Julander, Esq.',
      subtitle: 'BOLLARD & CHAPMAN, IRVINE CA',
      desc: 'I worked with Jim Stepanian from 2008 through 2021 and found him to be an honest, ethical, business man. He always followed through doing what he said he would do. I would highly recommend Jim and his Luxe Locker Storage Developments to anyone.',
    },
    box2: {
      title: 'Don Black',
      subtitle: 'INVESTOR',
      desc: 'I personally flew to visit Luxe Locker Corporate offices before I decided to invest in their storage developments. I was very impressed with the staff at Luxe Locker and even more impressed with their proprietary development system.',
    },
    box3: {
      title: 'Tim Gerlach',
      subtitle: 'PRINCIPAL, STONEHARBOR CAPITAL',
      desc: 'Adam, Pete, and the LuxeLocker team have proven to be extremely hard working and smart in their deal sourcing, structuring, and decision making.',
    },
  },
  getStarted: {
    title: 'Download LuxeLocker App to Get Started',
    desc: ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    points: [
      'Security cameras',
      'Sed ut perspiciatis unde',
      'Sed ut perspiciatis unde',
      'Sed ut perspiciatis unde',
      'Sed ut perspiciatis unde',
    ],
  },
  blogSection: {
    title: 'Luxelocker News',
    desc: 'Investing in Storage Units Blog - RV & Boat Storage at Luxelocker',
    blogs: [
      {
        id: 1,
        img: assets.blogImg,
        date: 'January 17, 2023',
        name: 'Quick RV Cleaning Tips',
        desc: 'Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.',
        tags: ['Unit', 'Storage'],
      },
      {
        id: 2,
        img: assets.blogImg,
        date: 'January 18, 2023',
        name: 'Quick RV Cleaning Tips',
        desc: 'Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.',
        tags: ['Unit', 'Arizona'],
      },
      {
        id: 3,
        img: assets.blogImg,
        date: 'January 19, 2023',
        name: 'Quick RV Cleaning Tips',
        desc: 'Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.',
        tags: ['Idaho', 'Storage', 'Blog'],
      },
      {
        id: 4,
        img: assets.blogImg,
        date: 'January 20, 2023',
        name: 'Quick RV Cleaning Tips',
        desc: 'Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.',
        tags: ['Arizona', 'Storage'],
      },
      {
        id: 5,
        img: assets.blogImg,
        date: 'January 24, 2023',
        name: 'Quick RV Cleaning Tips',
        desc: 'Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.',
        tags: ['Unit', 'Storage'],
      },
      {
        id: 6,
        img: assets.blogImg,
        date: 'January 24, 2023',
        name: 'Quick RV Cleaning Tips',
        desc: 'Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.',
        tags: ['Unit', 'Arizona'],
      },
    ],
    popularPost: [
      {
        id: 1,
        img: assets.blogImg,
        date: 'January 17, 2023',
        name: 'Quick RV Cleaning Tips',
        desc: 'Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.',
        tags: ['Unit', 'Storage'],
      },
      {
        id: 2,
        img: assets.blogImg,
        date: 'January 18, 2023',
        name: 'Quick RV Cleaning Tips',
        desc: 'Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.',
        tags: ['Unit', 'Arizona'],
      },
      {
        id: 3,
        img: assets.blogImg,
        date: 'January 19, 2023',
        name: 'Quick RV Cleaning Tips',
        desc: 'Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.Learn the best RV cleaning tips so you can spend less time cleaning and more time enjoying life on the road.',
        tags: ['Idaho', 'Storage', 'Blog'],
      },
    ],
    tags: ['Idaho', 'Storage', 'Blog', 'Unit', 'Arizona', , 'Storage'],
  },

  // Details Campus

  detailsCampus: {
    about: {
      title: 'About Unit Details',
      desc: [
        'Nestled in the pines of the Prescott National Forest of the Bradshaw Mountains, Prescott is a secret playground for RVers. A small city of about 46,000, it was named the “Number 1 True Western Town of the Year” in 2012. Even with its roots deep in western history, Prescott’s modern mindset is reflected in its music, golf courses, book stores, art galleries, a wildlife park, and a very long list of annual festivals.',
        'Nearby are Sedona, Jerome, and Cottonwood, places well-known for their uniquely individual characteristics and distinct histories. Wine-loving RVers won’t be able to resist a stop-off in Cottonwood that lies at the heart of Arizona’s wine country, while Jerome takes its visitors back in time to the mining age, and Sedona’s famous red-rock buttes and canyons captivate anyone who loves the outdoors.',
      ],
    },
    aboutUnit: {
      title: 'About Unit #63',
      desc: [
        'Nestled in the pines of the Prescott National Forest of the Bradshaw Mountains, Prescott is a secret playground for RVers. A small city of about 46,000, it was named the “Number 1 True Western Town of the Year” in 2012. Even with its roots deep in western history, Prescott’s modern mindset is reflected in its music, golf courses, book stores, art galleries, a wildlife park, and a very long list of annual festivals.',
      ],
      points: [
        'Quality controlled CCR’s',
        'Gated facility with 24/7 access',
        'Security cameras',
        'Restrooms & shower facility',
        'Sewer dump station',
        'Wash station',
        'Common water & hose bibs',
        'Dumpster',
        'Large concrete drive aisles',
      ],
    },
  },

  // Meet The Team
  teamPage: {
    content: [
      {
        name: 'ADAM C. PAKES - CEO',
        description: [
          'Adam C. Pakes is the CEO of Luxelocker. As CEO, Mr. Pakes responsibilities include growth and scalability of Luxelocker, growth of all Luxe personnel, constant evaluation of morale, and ensuring the proper trajectory to make Luxelocker a 9-figure company. Mr. Pakes is a co-founder of Summerlin Asset Management. Founded in 2008, Mr. Pakes was responsible for all acquisition and disposition of defaulted mortgage-backed securities that Summerlin purchased. Mr. Pakes grew the portfolio to 50mm in assets, in a 4-year period.',
          'Constantly evolving, Mr. Pakes saw an opportunity to enter the Title and Escrow business, along with the Mortgage Origination business. Summerlin Title Agency and Summerlin Financial were Founded in 2016, as sister companies to provide complimentary services to Summerlin Asset Management’s core business. As CVO of both companies, Mr. Pakes sought out raw talent and created a culture that has stood the test of time. In 4 years, both companies have grown 75% year over year. Mr. Pakes’ investment into the people has made the culture unparalleled to rivals in the space. In November of 2020, Mr. Pakes stepped down from his post in both companies to solely focus on Luxelocker.',
          'In between 2015 to 2020, Mr. Pakes was part of a small group of entrepreneurs that developed Senior Housing. Having developed 215 doors, Mr. Pakes currently oversees operations of a locally owned multi-family asset. He enjoys the youthfulness of seniors, looking to better the latter part of their life. Mr. Pakes’ life mission is to be in alignment with his heart and mind. That mission includes serving himself, others and the greater good. Mr. Pakes enjoys working out, golfing, riding dirt bikes, running, and reading. One of Mr. Pakes’ life passions is to always have purpose and meaning, the 2 most important needs any human being seeks.',
        ],
        img: assets.meet1,
      },
      {
        name: 'PETE PAKES - INVESTOR RELATIONS',
        description: [
          'Pete Pakes has been in the real estate industry since 2005 when he was the CFO of Select Financial, based out of Arizona. In 2008, Pete partnered with Jim Stepanian and Adam Pakes to form Summerlin Asset Management, LLC. Pete manages the day-to-day internal operations of Summerlin Asset Management and its companies. Pete continues to maintain and build the model of project developments, debt acquisitions and equitable dispositions for Summerlin Asset Management, borrowers, and its investors. Pete has also managed and successfully developed land in Western Arizona to completion. Recently completed 2 Senior Independent Living projects valued at $55 million. Pete is currently the CFO for Summerlin Asset Management, Co-Owner of Summerlin Financial and Co-Owner of Summerlin Title Agency. In 1994, Pete was hired by AT&T Global Services and served for 11 years as Senior Executive AM covering the financial sector in the Midwestern United States.',
        ],
        img: assets.meet2,
      },
      {
        name: 'BRIAN FRANCIS - DIRECTOR OF CONSTRUCTION',
        description: [
          'Brian Francis is the Director of Construction. Brian’s work experience includes: being a professional athlete, a 15 year career as a Captain/Paramedic and building a successful fitness community/business that my wife and I have been running for the past 10+ year is co-owned with his wife. Since the age of 15, Brian has worked in many different areas of construction. He started with a shovel in his hand and chipping out concrete trucks, working his way up to running heavy equipment, including driving concrete/dump trucks. Over the past 27 years Mr. Francis has had hands-on experience in many trades including concrete, tile, plumbing, block and framing. Eventually becoming a project manager, he learned what it takes to build projects from start to finish. Brian’s goal at LuxeLocker is to use his experience and success help create the most efficient and effective systems for our team to use, while revolutionizing the design of luxury RV & boat storage.',
          'Brian is a Husband and a Father. A few of Brian’s core values are: 1) doing what you say you are going to do and believing in what you are doing, 2) brutal honesty and 3) being comfortable with being uncomfortable, specific to learning and growth. His personal goals in life are to spend quality time with family, friends and impact his community. He enjoys the outdoors, water sports, CrossFit, and hunting.',
        ],
        img: assets.meet3,
      },
      {
        name: 'CHARLEY NARCOMEY - DIRECTOR OF SALES MARKETING',
        description: [
          'Charley has a long history in customer service, marketing, management, and sales. Charley has always had an entrepreneurial spirit, and after seven years in the corporate world in Maui, Hawaii, Charley made a life change to work in the service industry. That choice led him to Arizona, where he connected with Luxelocker and now oversees the sale of luxury storage condos all over the nation. Charley is a proud husband and father of 3 with a passion for surfing and photography.',
        ],
        img: assets.meet4,
      },
      {
        name: 'BRETT SMITH - CIVIL DESIGNER',
        description: [
          'Brett started his career in commercial construction in Eagle River, Alaska. Projects include ground up new buildings, remote fly-in jobs, directional drilling, auger boring, and underground utility equipment operation all over the state of Alaska.',
          'After a degree in construction management from University of Alaska Anchorage, an opportunity for project management of commercial tenant improvements for a worldwide hearing aid franchise brought himself with his wife and two daughters to Eagle, Idaho. That led to project management for a general contractor rebuilding streetscapes in downtown Mountain Home, Idaho. Opportunities were exposed in Lake Havasu City, Arizona that opened a new chapter for the Smith family.',
          'Today, Brett is the Site Design Manager for the rapidly growing company of LuxeLocker providing luxury RV and boat storage aiming to have sites nationwide. This was an easy decision due to the culture and values Luxelocker lives every day.',
        ],
        img: assets.meet5,
      },
      {
        name: '﻿ERIC FOERSTNER - DIRECTOR OF FACILITY MAINTENANCE',
        description: [
          'Eric is the Director of Facilities for Luxelocker being involved with property operational needs, customer service and property maintenance. Eric joined the team as a part-time employee while proudly serving a local community near Lake Havasu City for 15 years as a firefighter paramedic. Eric in his part-time position rapidly evolved into a full-time position as Luxelockers’ mission was rising for providing Luxury RV and Boat storage. Mr. Foerstner lives by Luxelockers values; Relationships, Integrity, Growth, Honesty, and Trust. It has helped in his on-going mission to create strong relationships with both my fellow team member and valued customers.',
          'A few hobbies Mr. Foerstner enjoy’s are CrossFit, hiking, and in the winter months escaping to snow country to ski.',
        ],
        img: assets.meet6,
      },
      {
        name: '﻿DANIELLE AHRENS - CONTROLLER',
        description: [
          'Danielle was a Public Safety Dispatcher (Police/Fire/911) for 17 years before she decided to make a career change. Mrs. Ahrens has been an accountant for 10 1/2 years, working for an accounting firm with 100+ clients for 8 of those years. Since 2019, Mrs. Ahrens have been working as the Controller for Luxelocker. She currently manages the accounts receivable, accounts payable, financial reports, payroll department and human resources for 6 companies.',
          'Danielle has been married since 1997 to Steve Ahrens, a 28-year retired California Highway Patrol Sergeant. Danielle has two children, Wyatt, 23, a medic in the United States Army stationed at Fort Stewart, Georgia and Chase, 20, is a junior at Embry-Riddle Aeronautical University in Prescott, AZ studying Aerospace Engineering Astronautics.',
          'Danielle enjoys CrossFit, camping and her dog, Buck.',
        ],
        img: assets.meet7,
      },
      {
        name: '﻿KAZLIN CHANDLESS - ASSISTANT CONTROLLER',
        description: [
          'Kazlin has been on quite a journey since leaving the family business in 2020. Kazlin would travel to eastern Canada, over 13 summers, to manage her uncle’s traveling barbecue company, Camp 31 BBQ. Every weekend between the months of May and September, Kazlin and her team would travel to a different city to host the Ribfest Festival. Along with other like vendors, they would compete for the best barbecue awards. Cooking and selling to the public of 50,000-150,000 people.',
          'While loving the traveling and fast paced lifestyle, she was ready to settle down and build a life in Lake Havasu City with her husband, Daniel. Daniel and Kazlin have been married for 10 years and have a 5-year-old daughter named Rylee.',
          'Kazlin currently serves as the assistant controller for the Luxelocker. Mrs. Chandless looks forward to the challenges that bring growth. She helps generate all storage unit management and lease agreements for Luxelocker, along with the daily accounting activities.',
          'Kazlin and her family spend a majority of their pass time camping with family and friends. As children, they grew up outdoors and enjoy creating memories for Rylee that she will one day share with her children. They are avid RZR riders and spend most of their weekends away in Glamis, Williams, and Parker.',
        ],
        img: assets.meet8,
      },
    ],
  },
};

export const unitsdata = [
  {
    id: 25,
    facility_name: 'Glendale',
    uid: 'c1fd1731-ce4c-48e7-a563-68526efa599f',
    unit_number: 'B 32',
    length: '40.00',
    width: '14.00',
    sq_ft: '560.0',
    lease_price: '110.00',
    buy_price: '82884.00',
    is_active: true,
    is_available_for_sale: true,
    is_available_for_lease: false,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
      {
        amenity_id: 7,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 34,
    facility_name: 'Glendale',
    uid: 'f649e714-c2bc-43a2-8582-bd631b9d0677',
    unit_number: 'B 39',
    length: '40.00',
    width: '14.00',
    sq_ft: '560.0',
    lease_price: '120.00',
    buy_price: '82880.00',
    is_active: true,
    is_available_for_sale: false,
    is_available_for_lease: true,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
      {
        amenity_id: 7,
        amenity__name: 'Sewer Dump Station',
      },
    ],

    facility_zone: 'Glendale Zone',
  },
  {
    id: 26,
    facility_name: 'Glendale',
    uid: 'd67e93bc-7e3f-4d1d-b328-14285ac07e68',
    unit_number: 'B 40',
    length: '40.00',
    width: '14.00',
    sq_ft: '560.0',
    lease_price: '150.00',
    buy_price: '82885.00',
    is_active: true,
    is_available_for_sale: true,
    is_available_for_lease: false,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
      {
        amenity_id: 7,
        amenity__name: 'Sewer Dump Station',
      },
      {
        amenity_id: 8,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 27,
    facility_name: 'Glendale',
    uid: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
    unit_number: 'B 41',
    length: '40.00',
    width: '14.00',
    sq_ft: '560.0',
    lease_price: '180.00',
    buy_price: '82886.00',
    is_active: true,
    is_available_for_sale: false,
    is_available_for_lease: true,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 28,
    facility_name: 'Glendale',
    uid: '1a2b3c4d-5e6f-7890-9876-543210fedcba',
    unit_number: 'B 42',
    length: '40.00',
    width: '14.00',
    sq_ft: '560.0',
    lease_price: '200.00',
    buy_price: '82887.00',
    is_active: true,
    is_available_for_sale: true,
    is_available_for_lease: false,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 29,
    facility_name: 'Glendale',
    uid: '2a3b4c5d-6e7f-8901-2345-678901abcdef',
    unit_number: 'B 43',
    length: '40.00',
    width: '14.00',
    sq_ft: '360.0',
    lease_price: '300.00',
    buy_price: '82888.00',
    is_active: true,
    is_available_for_sale: false,
    is_available_for_lease: true,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'All Sizes',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 30,
    facility_name: 'Glendale',
    uid: '3a4b5c6d-7e8f-9012-3456-789012abcdef',
    unit_number: 'B 44',
    length: '40.00',
    width: '14.00',
    sq_ft: '60.0',
    lease_price: '100.00',
    buy_price: '82889.00',
    is_active: true,
    is_available_for_sale: true,
    is_available_for_lease: false,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'Standard',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 31,
    facility_name: 'Glendale',
    uid: '4a5b6c7d-8e9f-0123-4567-890123abcdef',
    unit_number: 'B 45',
    length: '40.00',
    width: '14.00',
    sq_ft: '50.0',
    lease_price: '100.00',
    buy_price: '82890.00',
    is_active: true,
    is_available_for_sale: true,
    is_available_for_lease: false,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 32,
    facility_name: 'Glendale',
    uid: '5a6b7c8d-9e0f-1234-5678-901234abcdef',
    unit_number: 'B 46',
    length: '40.00',
    width: '14.00',
    sq_ft: '10.0',
    lease_price: '100.00',
    buy_price: '82891.00',
    is_active: true,
    is_available_for_sale: false,
    is_available_for_lease: true,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 33,
    facility_name: 'Glendale',
    uid: '6a7b8c9d-0e1f-2345-6789-012345abcdef',
    unit_number: 'B 47',
    length: '40.00',
    width: '14.00',
    sq_ft: '60.0',
    lease_price: '100.00',
    buy_price: '82892.00',
    is_active: true,
    is_available_for_sale: true,
    is_available_for_lease: false,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 35,
    facility_name: 'Glendale',
    uid: 'a2b3c4d5-e6f7-8901-2345-678901abcdef',
    unit_number: 'B 48',
    length: '40.00',
    width: '14.00',
    sq_ft: '560.0',
    lease_price: '100.00',
    buy_price: '82893.00',
    is_active: true,
    is_available_for_sale: false,
    is_available_for_lease: true,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 36,
    facility_name: 'Glendale',
    uid: 'b3c4d5e6-f7g8-9012-3456-789012abcdef',
    unit_number: 'B 49',
    length: '40.00',
    width: '14.00',
    sq_ft: '560.0',
    lease_price: '100.00',
    buy_price: '82894.00',
    is_active: true,
    is_available_for_sale: true,
    is_available_for_lease: false,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 37,
    facility_name: 'Glendale',
    uid: 'c4d5e6f7-g8h9-0123-4567-8901234abcdef',
    unit_number: 'B 50',
    length: '40.00',
    width: '14.00',
    sq_ft: '560.0',
    lease_price: '100.00',
    buy_price: '82895.00',
    is_active: true,
    is_available_for_sale: false,
    is_available_for_lease: true,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 38,
    facility_name: 'Glendale',
    uid: 'd5e6f7g8-h9i0-1234-5678-9012345abcdef',
    unit_number: 'B 51',
    length: '40.00',
    width: '14.00',
    sq_ft: '560.0',
    lease_price: '100.00',
    buy_price: '82896.00',
    is_active: true,
    is_available_for_sale: true,
    is_available_for_lease: false,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 39,
    facility_name: 'Glendale',
    uid: 'e6f7g8h9i0-j1k2-3456-7890-123456abcdef',
    unit_number: 'B 52',
    length: '40.00',
    width: '14.00',
    sq_ft: '560.0',
    lease_price: '100.00',
    buy_price: '82897.00',
    is_active: true,
    is_available_for_sale: false,
    is_available_for_lease: true,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
  {
    id: 40,
    facility_name: 'Glendale',
    uid: 'f7g8h9i0j1-k2l3-4567-8901-234567abcdef',
    unit_number: 'B 53',
    length: '40.00',
    width: '14.00',
    sq_ft: '560.0',
    lease_price: '100.00',
    buy_price: '82898.00',
    is_active: true,
    is_available_for_sale: true,
    is_available_for_lease: false,
    facility: 3,
    maintenance_fee: '200.00',
    unit_description: 'this is for test',
    unit_type: 'SUPER LUXE',
    storage_features: null,
    facility_amenities: [
      {
        amenity_id: 2,
        amenity__name: 'Wash Station',
      },
      {
        amenity_id: 5,
        amenity__name: "Quality Controlled CCR's",
      },
      {
        amenity_id: 3,
        amenity__name: 'Security Camera',
      },
      {
        amenity_id: 6,
        amenity__name: 'Sewer Dump Station',
      },
      {
        amenity_id: 7,
        amenity__name: 'Test',
      },
    ],
    unit_amenities: [],
    facility_zone: 'Glendale Zone',
  },
];

// DATA FOR MAP DATE TIME
export const dateMap = {
  weekMap: [
    {
      title: 'Monday',
      value: '1',
    },
    {
      title: 'Tuesday',
      value: '2',
    },
    {
      title: 'Wednesday',
      value: '3',
    },
    {
      title: 'Thursday',
      value: '4',
    },
    {
      title: 'Friday',
      value: '5',
    },
    {
      title: 'Saturday',
      value: '6',
    },
    {
      title: 'Sunday',
      value: '7',
    },
  ],
  timeMap: [
    {
      title: '1:00 AM',
      value: '1',
    },
    {
      title: '2:00 AM',
      value: '2',
    },
    {
      title: '3:00 AM',
      value: '3',
    },
    {
      title: '4:00 AM',
      value: '4',
    },
    {
      title: '5:00 AM',
      value: '5',
    },
    {
      title: '6:00 AM',
      value: '6',
    },
    {
      title: '7:00 AM',
      value: '7',
    },
    {
      title: '8:00 AM',
      value: '8',
    },
    {
      title: '9:00 AM',
      value: '9',
    },
    {
      title: '10:00 AM',
      value: '10',
    },
    {
      title: '11:00 AM',
      value: '11',
    },
    {
      title: '12:00 AM',
      value: '12',
    },
    {
      title: '1:00 PM',
      value: '13',
    },
    {
      title: '2:00 PM',
      value: '14',
    },
    {
      title: '3:00 PM',
      value: '15',
    },
    {
      title: '4:00 PM',
      value: '16',
    },
    {
      title: '5:00 PM',
      value: '17',
    },
    {
      title: '6:00 PM',
      value: '18',
    },
    {
      title: '7:00 PM',
      value: '19',
    },
    {
      title: '8:00 PM',
      value: '20',
    },
    {
      title: '9:00 PM',
      value: '21',
    },
    {
      title: '10:00 PM',
      value: '22',
    },
    {
      title: '11:00 PM',
      value: '23',
    },
    {
      title: '12:00 PM',
      value: '24',
    },
  ],
};
