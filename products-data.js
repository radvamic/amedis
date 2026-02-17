/* ===================================
   AMEDIS — Product Catalog Data
   Complete product hierarchy from amedis.cz
   =================================== */

const PRODUCTS_DATA = {

  brands: {
    sciex:    { id: 'sciex',    name: 'SCIEX',    logo: 'https://i.pupiq.net/i/c/c/796/796/328x111/oeDf58_200x67_d73ddae1732b74c6.jpg', desc: 'Přední výrobce hmotnostních spektrometrů, kapilárních elektroforéz a kapalinové chromatografie' },
    scion:    { id: 'scion',    name: 'SCION Instruments', logo: 'https://i.pupiq.net/i/c/c/797/797/372x135/sA0FgG_200x72_fbbb079504bbc952.jpg', desc: 'Plynové chromatografy a hmotnostní spektrometry' },
    teledyne: { id: 'teledyne', name: 'Teledyne',  logo: 'https://i.pupiq.net/i/c/c/74d/74d/200x68/wFlBio_200x68_e39df986aff659a7.jpg', desc: 'Teledyne ISCO FLASH chromatografie' },
    inficon:  { id: 'inficon',  name: 'INFICON',   logo: 'https://i.pupiq.net/i/c/c/74a/74a/200x67/J5jF61_200x67_2d7c36d58a182952.jpg', desc: 'Mikro plynové chromatografy pro měření v terénu' },
    vuv:      { id: 'vuv',      name: 'VUV Analytics', logo: 'https://i.pupiq.net/i/c/c/2e4/12e4/380x133/Grcmn2_200x70_bae05a66893df42a.png', desc: 'Vakuová UV spektrometrie' },
    cem:      { id: 'cem',      name: 'CEM',       logo: 'https://i.pupiq.net/i/c/c/794/794/1740x700/Ug3j81_200x80_d6f1c94b843d6532.jpg', desc: 'Celosvětově respektovaná technologická společnost s nejdelší tradicí v oblasti mikrovlnných systémů' },
    analytikjena: { id: 'analytikjena', name: 'Analytik Jena', logo: 'https://i.pupiq.net/i/c/c/297/e297/1024x238/go70xr_200x46_4a300dc9a47c9c42.jpg', desc: 'ICP-MS a ICP-OES spektrometry' },
    erweka:   { id: 'erweka',   name: 'Erweka',    logo: 'https://i.pupiq.net/i/c/c/8e6/8e6/200x41/kRnSyK_200x41_50a0740222dd079d.png', desc: 'Přední světový výrobce farmaceutického testovacího vybavení' },
    oxford:   { id: 'oxford',   name: 'Oxford Instruments', logo: 'https://i.pupiq.net/i/c/c/74b/74b/200x67/d8IE7S_200x67_a9577d79b764faa8.jpg', desc: 'Benchtop NMR spektrometrie a stolní NMR analyzátory' },
    hitachi:  { id: 'hitachi',  name: 'Hitachi High-Tech', logo: 'https://i.pupiq.net/i/c/c/a0d/28a0d/1258x203/aqUbRl_200x32_650579a88b4b4ddf.png', desc: 'Energiově-disperzní XRF spektrometry' },
    cds:      { id: 'cds',      name: 'CDS Analytical', logo: 'https://i.pupiq.net/i/c/c/b9e/29b9e/883x194/dn5OF6_200x43_4a8b8bdcc49f2e02.jpg', desc: 'Pyrolýza a termická desorpce' },
    merel:    { id: 'merel',    name: 'Merel Instruments', logo: 'https://i.pupiq.net/i/c/c/3cb/343cb/365x114/KV1AcC_200x62_8809df2cb025b1af.png', desc: 'Analýza plynů transformátorových olejů' },
    varian:   { id: 'varian',   name: 'Varian',    logo: 'https://i.pupiq.net/i/c/c/68b/3168b/3320x1585/Fx6fNG_200x95_48a4c84cbc943795.jpg', desc: 'Výrobce radioterapeutických řešení' },
    iba:      { id: 'iba',      name: 'IBA Dosimetry', logo: 'https://i.pupiq.net/i/c/c/7da/7da/476x332/trPHwz_200x139_57ff85d53709857a.jpg', desc: 'Moderní měřící přístroje pro klinickou dozimetrii' },
    lap:      { id: 'lap',      name: 'LAP Laser', logo: 'https://i.pupiq.net/i/c/c/1d6/291d6/391x196/eRQ7NH_200x100_6db1d09eeb9af449.png', desc: 'Laserové lokalizační zaměřovače' },
    cqmedical:{ id: 'cqmedical', name: 'CQ Medical', logo: 'https://i.pupiq.net/i/c/c/56b/3356b/3840x1418/BzwFLC_200x73_7f5bec39f78bf3c4.jpg', desc: 'Fixační a polohovací pomůcky' },
    womed:    { id: 'womed',    name: 'WOmed',     logo: 'https://i.pupiq.net/i/c/c/7d9/7d9/447x165/U08tmk_200x73_929a051820d5b83e.jpg', desc: 'Terapeutické rentgenové ozařovače' },
    best:     { id: 'best',     name: 'Best Theratronics', logo: 'https://i.pupiq.net/i/c/c/4ec/14ec/324x164/jqCAV0_200x101_94414dadb73450c8.png', desc: 'Ozařovače krve' },
    ashland:  { id: 'ashland',  name: 'ASHLAND',   logo: 'https://i.pupiq.net/i/c/c/127/29127/1105x348/yVI9Pd_200x62_dccb5507cec37d5f.jpg', desc: 'Filmová dozimetrie' },
    modus:    { id: 'modus',    name: 'Modus QA',  logo: 'https://i.pupiq.net/i/c/c/c9a/28c9a/1575x525/E2gxWA_200x66_a4dada3db7371a10.png', desc: 'QA řešení pro radioterapii' },
    chabner:  { id: 'chabner',  name: 'Chabner XRT\u00AE', logo: 'https://i.pupiq.net/i/c/c/9b4/339b4/500x203/w54K3M_200x81_2e17a7526a77eb37.png', desc: 'Ozařovací podprsenky' }
  },

  divisions: [
    {
      id: 'lab',
      name: 'Laboratorní technika',
      shortName: 'Laboratorní technika',
      icon: '🔬',
      description: 'Komplexní vybavení laboratoří chemickými a fyzikálními analyzátory a separačními systémy od předních světových výrobců.',
      heroImage: 'https://i.pupiq.net/i/c/c/378/31378/560x451/9Ch83u_228x183_a701c2aba36b22a5.png',
      brands: ['sciex','scion','teledyne','inficon','vuv','cem','analytikjena','erweka','oxford','hitachi','cds','merel'],
      categories: [
        {
          id: 'hmotnostni-spektometrie',
          name: 'SCIEX LC-MS/MS systémy',
          description: 'Hmotnostní spektrometry SCIEX Triple QUAD, QTRAP, TripleTOF, Q-TOF a TOF/TOF',
          fullDescription: 'Hmotnostní spektrometrie je metoda analytické chemie. Hmotnostní spektrometrie pracuje s dělením podle poměru m/z, kde m je hmotnost a z je náboj fragmentu. Používá se pro určení hmotnosti částic, či stanovení elementárního složení vzorku nebo molekuly, a pro objasnění chemické struktury molekul, jako jsou peptidy a jiné chemické sloučeniny.',
          image: 'https://i.pupiq.net/i/c/c/378/31378/560x451/9Ch83u_228x183_a701c2aba36b22a5.png',
          brand: 'sciex',
          subcategories: [
            {
              id: 'sciex-zenotof',
              name: 'SCIEX ZenoTOF a Q-TOF',
              description: 'Hmotnostní spektrometr Q-TOF konstrukce ZenoTOF — Vítejte v revoluci Zeno — revoluce je nyní Zeno Trap a EAD',
              fullDescription: 'SCIEX Q-TOF systémy umožňují měření při vysokém rozlišení a přesné hmotě. Současně je možná selekce prekurzorového iontu v kvadrupolu a získání MS-MS spekter, čímž je získána vyšší selektivita a také konfirmace identity analytů porovnáním s MS-MS knihovnami. Systémy SCIEX Q-TOF umožňují unikátní měření pomocí SWATH v režimu MS/MS ALL.',
              image: 'https://i.pupiq.net/i/c/c/f66/30f66/1482x1389/xrtiB2_228x213_749cb812e933897c.jpg',
              products: [
                {
                  id: 'zenotof-7600-253',
                  name: 'SCIEX ZenoTOF 7600',
                  description: 'Systém ZenoTOF 7600 umožňuje laditelnou fragmentaci všech typů molekul díky řízené elektronové disociaci (EAD) při rychlosti skenování MS/MS až 133 Hz s vylepšeným datově závislým (DDA) a datově nezávislým (MRM-HR, SWATH) sběrem dat. Umožňuje experimenty zahrnující disociaci elektronového záchytu (ECD), „hot ECD" a excitaci iontů z organických látek dopadem elektronů (EIEIO). Dalším benefitem jsou bezkonkurenčně kompaktní rozměry.',
                  brand: 'sciex',
                  image: 'https://i.pupiq.net/i/c/c/f66/30f66/1482x1389/xrtiB2_228x213_749cb812e933897c.jpg',
                  images: [
                    'https://i.pupiq.net/i/c/c/f66/30f66/1482x1389/xrtiB2_228x213_749cb812e933897c.jpg'
                  ],
                  downloads: [
                    { name: 'Brožura SCIEX ZenoTOF 7600', url: 'https://i.pupiq.net/a/c/c/c70/c70/2754132/ZenoTOF_7600_system_brochure.pdf', type: 'pdf', size: '2,6 MB' }
                  ],
                  externalLink: 'https://sciex.com/products/mass-spectrometers/qtof-systems/zenotof-7600-system'
                },
                {
                  id: 'sciex-x500r-qtof-178',
                  name: 'SCIEX X500R QTOF',
                  description: 'Kompaktní a robustní Q-TOF hmotnostní spektrometr pro rutinní a výzkumné analýzy s vysokým rozlišením.',
                  brand: 'sciex',
                  image: 'https://i.pupiq.net/i/c/c/abe/abe/409x409/UQqDgK_228x228_ed827713fddf5472.jpg',
                  images: ['https://i.pupiq.net/i/c/c/abe/abe/409x409/UQqDgK_228x228_ed827713fddf5472.jpg'],
                  downloads: [],
                  externalLink: ''
                },
                {
                  id: 'sciex-zenotof-8600-287',
                  name: 'SCIEX ZenoTOF 8600',
                  description: 'Systém SCIEX ZenoTOF 8600 kombinuje osvědčenou technologii nejcitlivějšího trojitého kvadrupolu s nejvšestrannějším QTOF s podporou Zeno pasti. Poskytuje 10krát lepší citlivost než současný systém, to se promítá nejen do nižších limitů kvantifikace, ale také do nových přístupů k biologicky relevantním objevům.',
                  brand: 'sciex',
                  image: 'https://i.pupiq.net/i/c/c/aa7/34aa7/540x540/lBO2Qy_228x228_2dce6b47d27985c8.jpg',
                  images: ['https://i.pupiq.net/i/c/c/aa7/34aa7/540x540/lBO2Qy_228x228_2dce6b47d27985c8.jpg'],
                  downloads: [],
                  externalLink: 'https://sciex.com/products/mass-spectrometers/qtof-systems/8600-system'
                }
              ]
            },
            {
              id: 'sciex-echo-ms',
              name: 'SCIEX Echo MS',
              description: 'SCIEX Echo MS má vysoký potenciál dramaticky změnit analýzy s vysokou propustností vzorků jednou pro vždy',
              image: 'https://i.pupiq.net/i/c/c/f68/30f68/2401x1483/1opv8u_228x140_d07fa003ad67c1d1.png',
              products: [
                {
                  id: 'sciex-echo-ms-254',
                  name: 'SCIEX Echo MS',
                  description: 'Revoluční systém pro ultra-rychlé analýzy s vysokou propustností vzorků, schopný dramaticky změnit způsob screeningu.',
                  brand: 'sciex',
                  image: 'https://i.pupiq.net/i/c/c/f69/30f69/2896x1322/yjFgqb_228x104_6df754428096d4a2.jpg',
                  images: ['https://i.pupiq.net/i/c/c/f69/30f69/2896x1322/yjFgqb_228x104_6df754428096d4a2.jpg'],
                  downloads: [],
                  externalLink: ''
                }
              ]
            },
            {
              id: 'sciex-qtrap',
              name: 'SCIEX QTRAP',
              description: 'QTRAP systémy SCIEX ve spojení s kapalinovou chromatografií spojují výhody trojitých kvadrupolů a iontových pastí',
              image: 'https://i.pupiq.net/i/c/c/778/778/409x409/IjWqOt_228x228_4c6785eb38acb069.jpg',
              products: [
                { id: 'sciex-7500-230', name: 'SCIEX Triple Quad 7500 QTRAP Ready', brand: 'sciex', image: 'https://i.pupiq.net/i/c/c/867/2f867/1621x1735/NGo1FO_228x244_217b2a0ae44c429c.jpg', images: ['https://i.pupiq.net/i/c/c/867/2f867/1621x1735/NGo1FO_228x244_217b2a0ae44c429c.jpg'], description: 'Nejcitlivější trojitý kvadrupol s možností upgrade na QTRAP systém.', downloads: [], externalLink: '' },
                { id: 'sciex-qtrap-6500-174', name: 'SCIEX QTRAP 6500+', brand: 'sciex', image: 'https://i.pupiq.net/i/c/c/9f2/9f2/450x450/6l4kJI_228x228_729285ff6bfa96ee.jpg', images: ['https://i.pupiq.net/i/c/c/9f2/9f2/450x450/6l4kJI_228x228_729285ff6bfa96ee.jpg'], description: 'Kombinace trojitého kvadrupolu a iontové pasti pro maximální citlivost a selektivitu.', downloads: [], externalLink: '' },
                { id: 'sciex-qtrap-5500-182', name: 'SCIEX QTRAP 5500+', brand: 'sciex', image: 'https://i.pupiq.net/i/c/c/161/33161/750x500/poMCeI_228x152_6acdebdffe4ffa08.jpg', images: ['https://i.pupiq.net/i/c/c/161/33161/750x500/poMCeI_228x152_6acdebdffe4ffa08.jpg'], description: 'Spolehlivý QTRAP systém pro rutinní i výzkumné aplikace.', downloads: [], externalLink: '' },
                { id: 'sciex-qtrap-4500-183', name: 'SCIEX QTRAP 4500', brand: 'sciex', image: 'https://i.pupiq.net/i/c/c/163/33163/550x486/z8uA3e_228x201_96cf8ac0f6815a0e.png', images: ['https://i.pupiq.net/i/c/c/163/33163/550x486/z8uA3e_228x201_96cf8ac0f6815a0e.png'], description: 'Cenově dostupný QTRAP systém pro široké spektrum aplikací.', downloads: [], externalLink: '' }
              ]
            },
            {
              id: 'sciex-triplequad',
              name: 'SCIEX TripleQuad',
              description: 'Trojité kvadrupoly SCIEX navrženy pro spolehlivou kvantifikaci analytů v komplexních reálných vzorcích',
              image: 'https://i.pupiq.net/i/c/c/778/778/409x409/IjWqOt_228x228_4c6785eb38acb069.jpg',
              products: [
                { id: 'sciex-7500-tq-230', name: 'SCIEX Triple Quad 7500', brand: 'sciex', image: 'https://i.pupiq.net/i/c/c/867/2f867/1621x1735/NGo1FO_228x244_217b2a0ae44c429c.jpg', images: ['https://i.pupiq.net/i/c/c/867/2f867/1621x1735/NGo1FO_228x244_217b2a0ae44c429c.jpg'], description: 'Nejcitlivější trojitý kvadrupol na světě.', downloads: [], externalLink: '' },
                { id: 'sciex-triplequad-6500-175', name: 'SCIEX TripleQuad 6500+', brand: 'sciex', image: 'https://i.pupiq.net/i/c/c/9f2/9f2/450x450/6l4kJI_228x228_729285ff6bfa96ee.jpg', images: ['https://i.pupiq.net/i/c/c/9f2/9f2/450x450/6l4kJI_228x228_729285ff6bfa96ee.jpg'], description: 'Špičkový trojitý kvadrupol pro kvantitativní analýzu.', downloads: [], externalLink: '' },
                { id: 'sciex-triple-quad-5500-80', name: 'SCIEX Triple Quad 5500+', brand: 'sciex', image: 'https://i.pupiq.net/i/c/c/161/33161/750x500/poMCeI_228x152_6acdebdffe4ffa08.jpg', images: ['https://i.pupiq.net/i/c/c/161/33161/750x500/poMCeI_228x152_6acdebdffe4ffa08.jpg'], description: 'Osvědčený trojitý kvadrupol pro rutinní kvantifikaci.', downloads: [], externalLink: '' },
                { id: 'sciex-triple-quad-4500-81', name: 'SCIEX Triple Quad 4500', brand: 'sciex', image: 'https://i.pupiq.net/i/c/c/162/33162/550x486/6Cqd80_228x201_7fa991cfc9e36b38.png', images: ['https://i.pupiq.net/i/c/c/162/33162/550x486/6Cqd80_228x201_7fa991cfc9e36b38.png'], description: 'Kompaktní trojitý kvadrupol pro široké spektrum aplikací.', downloads: [], externalLink: '' }
              ]
            },
            {
              id: 'sciex-ionizacni-zdroje',
              name: 'SCIEX Ionizační zdroje',
              description: 'Ionizační zdroje pro maximální výkon. Efektivní ionizace analytů je kritickým krokem pro získávání kvalitních dat.',
              image: 'https://i.pupiq.net/i/c/c/abf/28abf/550x440/WSsz4k_228x182_28b48683795bd8ec.png',
              products: []
            },
            {
              id: 'sciex-ivd-ms',
              name: 'SCIEX IVD MS',
              description: 'Klinické diagnostické laboratoře očekávají maximální provozuschopnost a spolehlivost výsledků pro péči o pacienty.',
              image: 'https://i.pupiq.net/i/c/c/378/31378/560x451/9Ch83u_228x183_a701c2aba36b22a5.png',
              products: []
            }
          ]
        },
        {
          id: 'plynova-chromatografie',
          name: 'SCION GC a MS systémy',
          description: 'Plynové chromatografy SCION Instruments a hmotnostní spektrometry na bázi trojitého a jednoduchého kvadrupolu poskytují flexibilitu pro všechny aplikace.',
          image: 'https://i.pupiq.net/i/c/c/377/31377/540x907/MzDln5_228x382_5fbffa779ce3e015.png',
          brand: 'scion',
          products: [
            { id: 'scion-8900-tq-257', name: 'SCION 8900 TQ GC-MS/MS', brand: 'scion', image: 'https://i.pupiq.net/i/c/c/5a0/315a0/2548x2560/uvI5oO_228x229_980f7346aa8606c5.jpg', images: ['https://i.pupiq.net/i/c/c/5a0/315a0/2548x2560/uvI5oO_228x229_980f7346aa8606c5.jpg'], description: 'Trojitý kvadrupol GC-MS/MS pro nejnáročnější analýzy.', downloads: [], externalLink: '' },
            { id: 'scion-sq-84', name: 'SCION 8700 SQ GC-MS', brand: 'scion', image: 'https://i.pupiq.net/i/c/c/5a0/315a0/2548x2560/uvI5oO_228x229_980f7346aa8606c5.jpg', images: ['https://i.pupiq.net/i/c/c/5a0/315a0/2548x2560/uvI5oO_228x229_980f7346aa8606c5.jpg'], description: 'Jednoduchý kvadrupol GC-MS pro široké spektrum aplikací.', downloads: [], externalLink: '' },
            { id: 'scion-456-gc-83', name: 'SCION 8500-GC', brand: 'scion', image: 'https://i.pupiq.net/i/c/c/376/31376/1339x1500/qW0gNS_228x255_92f6f7637d94d6d3.png', images: ['https://i.pupiq.net/i/c/c/376/31376/1339x1500/qW0gNS_228x255_92f6f7637d94d6d3.png'], description: 'Plynový chromatograf pro laboratorní analýzy.', downloads: [], externalLink: '' },
            { id: 'scion-436-gc-231', name: 'SCION 8300-GC', brand: 'scion', image: 'https://i.pupiq.net/i/c/c/377/31377/540x907/MzDln5_228x382_5fbffa779ce3e015.png', images: ['https://i.pupiq.net/i/c/c/377/31377/540x907/MzDln5_228x382_5fbffa779ce3e015.png'], description: 'Kompaktní plynový chromatograf.', downloads: [], externalLink: '' },
            { id: 'inficon-micro-gc-fusion-19', name: 'INFICON Micro GC Fusion', brand: 'inficon', image: 'https://i.pupiq.net/i/c/c/cc3/30cc3/1382x1491/iau1TD_228x245_b782c5b72cc05fa4.jpg', images: ['https://i.pupiq.net/i/c/c/cc3/30cc3/1382x1491/iau1TD_228x245_b782c5b72cc05fa4.jpg'], description: 'Přenosný mikro plynový chromatograf pro měření v terénu.', downloads: [], externalLink: '' },
            { id: 'inficon-5000-cms-20', name: 'INFICON 5000 CMS', brand: 'inficon', image: 'https://i.pupiq.net/i/c/c/790/790/475x721/axquvW_228x346_02aaed8f358b7003.jpg', images: ['https://i.pupiq.net/i/c/c/790/790/475x721/axquvW_228x346_02aaed8f358b7003.jpg'], description: 'Kompaktní mikro plynový chromatograf pro průmyslové aplikace.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'icp-ms',
          name: 'Hmotnostní spektrometrie s ICP (ICP-MS)',
          description: 'Produktová linie ICP-MS Analytik Jena vykazuje unikátní technické řešení s přímou návazností na původní patentované technologie firem Varian a Bruker.',
          image: 'https://i.pupiq.net/i/c/c/8c4/8c4/2627x3488/l7wU8y_228x302_e8fe79f9dace059f.jpg',
          brand: 'analytikjena',
          products: [
            { id: 'icp-ms-87', name: 'PlasmaQuant MS series', brand: 'analytikjena', image: 'https://i.pupiq.net/i/c/c/8c4/8c4/2627x3488/l7wU8y_228x302_e8fe79f9dace059f.jpg', images: ['https://i.pupiq.net/i/c/c/8c4/8c4/2627x3488/l7wU8y_228x302_e8fe79f9dace059f.jpg'], description: 'ICP-MS spektrometry pro prvkovou analýzu s unikátním technickým řešením.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'icp-oes',
          name: 'Optická spektrometrie s ICP (ICP-OES)',
          description: 'ICP-OES spektrometry Analytik Jena PlasmaQuant 9100 Series pro prvkovou analýzu.',
          image: 'https://i.pupiq.net/i/c/c/3d2/343d2/3918x3489/tdqzbg_228x203_bdbf4648e059c0c0.jpg',
          brand: 'analytikjena',
          products: [
            { id: 'plasmaquant-9100-282', name: 'PlasmaQuant 9100', brand: 'analytikjena', image: 'https://i.pupiq.net/i/c/c/3d3/343d3/2758x2562/uIqME3_228x211_92ef330ce5dc6a9a.jpg', images: ['https://i.pupiq.net/i/c/c/3d3/343d3/2758x2562/uIqME3_228x211_92ef330ce5dc6a9a.jpg'], description: 'ICP-OES spektrometr pro rutinní i výzkumnou prvkovou analýzu.', downloads: [], externalLink: '' },
            { id: 'plasmaquant-9100-elite-281', name: 'PlasmaQuant 9100 Elite', brand: 'analytikjena', image: 'https://i.pupiq.net/i/c/c/3d5/343d5/3097x2636/CTD79o_228x194_5b7f8dfa99abf562.jpg', images: ['https://i.pupiq.net/i/c/c/3d5/343d5/3097x2636/CTD79o_228x194_5b7f8dfa99abf562.jpg'], description: 'Prémiový ICP-OES spektrometr s pokročilými funkcemi.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'chromatografie',
          name: 'Kapalinová chromatografie',
          description: 'Chromatografie je souhrnné označení pro skupinu fyzikálně-chemických separačních metod. Molekuly analytu se rozdělují mezi stacionární a mobilní fázi.',
          image: 'https://i.pupiq.net/i/c/c/ac3/ac3/549x366/7Styx8_228x152_87776c88a945932d.jpg',
          brand: 'sciex',
          subcategories: [
            { id: 'scion-instruments-lc', name: 'SCION Instruments LC', description: 'Kapalinové chromatografy SCION Instruments.', image: 'https://i.pupiq.net/i/c/c/86e/2f86e/1494x1494/zOmlJF_228x228_301163c05c938b9d.jpg', products: [] },
            { id: 'sciex-lc-systemy', name: 'SCIEX LC systémy', description: 'UHPLC systémy SCIEX pro spojení s hmotnostními spektrometry.', image: 'https://i.pupiq.net/i/c/c/ac3/ac3/549x366/7Styx8_228x152_87776c88a945932d.jpg', products: [] },
            { id: 'nizkotlaka-chromatografie', name: 'Teledyne ISCO FLASH chromatografie', description: 'Přípravná FLASH chromatografie pro čištění a izolaci látek.', image: 'https://i.pupiq.net/i/c/c/a3b/29a3b/1576x1666/T602M4_228x241_907e652167f1ad8e.jpg', products: [] }
          ]
        },
        {
          id: 'extrakce-rozpoustedlem',
          name: 'Extrakce rozpouštědlem',
          description: 'CEM mikrovlnně asistovaná extrakce, rychlá příprava pro FAME analýzu a novinka EDGE — kombinace automatizované PFE a dSPE, více než 3x kratší doba extrakce.',
          image: 'https://i.pupiq.net/i/c/c/2fc/302fc/356x576/WJqPyO_228x368_2e83bb24935689bc.png',
          brand: 'cem',
          products: [
            { id: 'edge-product', name: 'EDGE', brand: 'cem', image: 'https://i.pupiq.net/i/c/c/2fc/302fc/356x576/WJqPyO_228x368_2e83bb24935689bc.png', images: ['https://i.pupiq.net/i/c/c/2fc/302fc/356x576/WJqPyO_228x368_2e83bb24935689bc.png'], description: 'Kombinace automatizované PFE a dSPE pro rychlou extrakci.', downloads: [], externalLink: '' },
            { id: 'mars-6-extraction', name: 'MARS 6 Extraction', brand: 'cem', image: 'https://i.pupiq.net/i/c/c/334/30334/3184x3312/BrtcuS_228x237_539b03d5ac84c05b.png', images: ['https://i.pupiq.net/i/c/c/334/30334/3184x3312/BrtcuS_228x237_539b03d5ac84c05b.png'], description: 'Mikrovlnný systém pro extrakci rozpouštědlem.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'pfas-extrakce',
          name: 'PFAS Extrakce',
          description: 'Extrakce prováděná za podmínek použití komponent neobsahujících PFAS látky. Použitelná pro široké spektrum vzorků. Splňuje požadavky metody EPA 1633.',
          image: 'https://i.pupiq.net/i/c/c/f64/33f64/400x400/9TFdvc_228x228_bd983c554053929d.png',
          brand: 'cem',
          products: []
        },
        {
          id: 'kapilarni-elektroforeza',
          name: 'Kapilární elektroforéza',
          description: 'Kapilární elektroforéza SCIEX pro chemické, farmaceutické a genetické analýzy.',
          image: 'https://i.pupiq.net/i/c/c/889/889/450x450/kNaVKC_228x228_f2ac59d71d6843fd.jpg',
          brand: 'sciex',
          products: [
            { id: 'p-ace-mdq-plus-109', name: 'P/ACE MDQ plus', brand: 'sciex', image: 'https://i.pupiq.net/i/c/c/889/889/450x450/kNaVKC_228x228_f2ac59d71d6843fd.jpg', images: ['https://i.pupiq.net/i/c/c/889/889/450x450/kNaVKC_228x228_f2ac59d71d6843fd.jpg'], description: 'Kapilární elektroforéza pro chemické a farmaceutické analýzy.', downloads: [], externalLink: '' },
            { id: 'sciex-gexp-108', name: 'SCIEX GeXP', brand: 'sciex', image: 'https://i.pupiq.net/i/c/c/91f/91f/409x409/WUh65L_228x228_efe2211d59bea65d.jpg', images: ['https://i.pupiq.net/i/c/c/91f/91f/409x409/WUh65L_228x228_efe2211d59bea65d.jpg'], description: 'Genetický analyzátor na bázi kapilární elektroforézy.', downloads: [], externalLink: '' },
            { id: 'pa800s-plus-110', name: 'PA800S plus', brand: 'sciex', image: 'https://i.pupiq.net/i/c/c/920/920/600x600/S9yMpU_228x228_52d8846c0bc15cdc.jpg', images: ['https://i.pupiq.net/i/c/c/920/920/600x600/S9yMpU_228x228_52d8846c0bc15cdc.jpg'], description: 'Pokročilý systém kapilární elektroforézy.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'vakuova-uv',
          name: 'Vakuová UV spektrometrie',
          description: 'Vakuová UV spektrometrie otevírá široké spektrum výhod. Většina sloučenin má malou nebo žádnou absorpci v UV-VIS, zatímco všechny silně absorbují v Vakuové UV oblasti.',
          image: 'https://i.pupiq.net/i/c/c/2e3/12e3/1000x928/rNAw6v_228x211_5e9397f3a10a9ef5.png',
          brand: 'vuv',
          products: [
            { id: 'vga-100-191', name: 'VGA-100', brand: 'vuv', image: 'https://i.pupiq.net/i/c/c/2e3/12e3/1000x928/rNAw6v_228x211_5e9397f3a10a9ef5.png', images: ['https://i.pupiq.net/i/c/c/2e3/12e3/1000x928/rNAw6v_228x211_5e9397f3a10a9ef5.png'], description: 'Vakuový UV detektor pro GC.', downloads: [], externalLink: '' },
            { id: 'vga-101-192', name: 'VGA-101', brand: 'vuv', image: 'https://i.pupiq.net/i/c/c/2e5/12e5/1716x1579/7V3JnA_228x209_32d2d51dd7fe47eb.png', images: ['https://i.pupiq.net/i/c/c/2e5/12e5/1716x1579/7V3JnA_228x209_32d2d51dd7fe47eb.png'], description: 'Rozšířený vakuový UV detektor.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'mikrovlnny-rozklad',
          name: 'Mikrovlnný rozklad',
          description: 'Mikrovlnný tlakový rozklad se využívá k přípravě všech typů vzorků pro prvkovou analýzu (AAS, ICP-OES, ICP-MS).',
          fullDescription: 'Firma CEM Corp. (USA) je celosvětově respektovaná technologická společnost s nejdelší tradicí (od roku 1978) ze všech producentů v oblasti vývoje a výroby laboratorních mikrovlnných systémů. Se svými více než 35.000 prodanými systémy, více než 300 patenty v oblasti mikrovlnné techniky, deseti obdrženými cenami R&D 100 a nejdelší tradicí patří firmě CEM jednoznačně pozice leadra oboru.',
          image: 'https://i.pupiq.net/i/c/c/334/30334/3184x3312/BrtcuS_228x237_539b03d5ac84c05b.png',
          brand: 'cem',
          products: [
            { id: 'mars-6', name: 'MARS 6', brand: 'cem', image: 'https://i.pupiq.net/i/c/c/334/30334/3184x3312/BrtcuS_228x237_539b03d5ac84c05b.png', images: ['https://i.pupiq.net/i/c/c/334/30334/3184x3312/BrtcuS_228x237_539b03d5ac84c05b.png'], description: 'Klasický vsádkový mikrovlnný systém pro tlakový rozklad.', downloads: [], externalLink: '' },
            { id: 'discover-sp-d-clinical', name: 'Discover SP-D Clinical', brand: 'cem', image: 'https://i.pupiq.net/i/c/c/334/30334/3184x3312/BrtcuS_228x237_539b03d5ac84c05b.png', images: [], description: 'Sekvenční mikrovlnný systém s automatizovaným režimem rozkladu.', downloads: [], externalLink: '' },
            { id: 'microvap', name: 'MicroVap', brand: 'cem', image: 'https://i.pupiq.net/i/c/c/334/30334/3184x3312/BrtcuS_228x237_539b03d5ac84c05b.png', images: [], description: 'Mikrovlnné odpařování vzorků po digesci.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'hydrolyza',
          name: 'Mikrovlnná hydrolýza',
          description: 'Řízená hydrolýza proteinů a peptidů za podmínek vysoké reprodukovatelnosti, robustnosti a rychlosti procesu.',
          image: 'https://i.pupiq.net/i/c/c/f60/33f60/800x800/whP5Nf_228x228_f18da9f4dedb26d0.webp',
          brand: 'cem',
          products: []
        },
        {
          id: 'mikrovlnne-zpopelnovani',
          name: 'Mikrovlnné zpopelňování a sušení',
          description: 'Mikrovlnně ohřívaná muflová pec CEM Phoenix Black s unikátními quartz fiber kelímky pro více než řádově rychlejší zpopelňování a rychlé sušení velkých navážek vzorků.',
          image: 'https://i.pupiq.net/i/c/c/2e4/302e4/2445x1946/cO26wM_228x181_17f4deb3490fe195.png',
          brand: 'cem',
          products: []
        },
        {
          id: 'mikrovlnna-synteza',
          name: 'Mikrovlnná syntéza',
          description: 'Firma CEM Corp. (USA) je celosvětově respektovaná v oblasti vývoje a výroby laboratorních mikrovlnných systémů pro syntézu.',
          image: 'https://i.pupiq.net/i/c/c/926/2f926/7200x7200/6fMk0q_228x228_fbaf768cd5fb52c6.png',
          brand: 'cem',
          products: []
        },
        {
          id: 'synteza-peptidu',
          name: 'Syntéza peptidů',
          description: 'Automatizovaná mikrovlnně asistovaná HE-SPPS rychlá sekvenční syntéza peptidů a automatizovaná paralelní peptidová syntéza.',
          image: 'https://i.pupiq.net/i/c/c/e67/31e67/560x480/9JiBdg_228x195_219a0b4cfd2938e6.png',
          brand: 'cem',
          products: [
            { id: 'liberty-blue-133', name: 'Liberty Blue 2.0', brand: 'cem', image: 'https://i.pupiq.net/i/c/c/e67/31e67/560x480/9JiBdg_228x195_219a0b4cfd2938e6.png', images: ['https://i.pupiq.net/i/c/c/e67/31e67/560x480/9JiBdg_228x195_219a0b4cfd2938e6.png'], description: 'Automatizovaný mikrovlnný peptidový syntetizér.', downloads: [], externalLink: '' },
            { id: 'multipep-1-236', name: 'MultiPep 1', brand: 'cem', image: 'https://i.pupiq.net/i/c/c/92a/2f92a/400x400/F8ekz4_228x228_77095c953817573c.png', images: ['https://i.pupiq.net/i/c/c/92a/2f92a/400x400/F8ekz4_228x228_77095c953817573c.png'], description: 'Automatizovaná paralelní peptidová syntéza.', downloads: [], externalLink: '' },
            { id: 'multipep-2-237', name: 'MultiPep 2', brand: 'cem', image: 'https://i.pupiq.net/i/c/c/929/2f929/400x400/O3LHfn_228x228_9ef01e1a1951ab9f.png', images: ['https://i.pupiq.net/i/c/c/929/2f929/400x400/O3LHfn_228x228_9ef01e1a1951ab9f.png'], description: 'Pokročilá paralelní peptidová syntéza.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'proteomika',
          name: 'OMICS Proteomika',
          description: 'Akvizice společnosti CEM Corp. (USA) od roku 2020 — Intavis Bioanalytical Instruments.',
          image: 'https://i.pupiq.net/i/c/c/33e/3033e/400x400/EUiD7p_228x228_125623cb502e3b53.png',
          brand: 'cem',
          products: []
        },
        {
          id: 'in-situ-hybridizace',
          name: 'OMICS — Automatizovaná in situ hybridizace',
          description: 'Akvizice společnosti CEM Corp. (USA) od roku 2020 — Intavis Bioanalytical Instruments.',
          image: 'https://i.pupiq.net/i/c/c/340/30340/400x400/fUQghA_228x228_0d1be96dcfcc57a2.png',
          brand: 'cem',
          products: []
        },
        {
          id: 'stanoveni-vlhkosti',
          name: 'Stanovení vlhkosti, sušiny, tuků a proteinů',
          description: 'Procesní analyzátory firmy CEM pro vysoce rychlé a přesné stanovení základních parametrů potravin. Stolní NMR analyzátor olejů a tuků Oxford Instruments MQC+.',
          image: 'https://i.pupiq.net/i/c/c/19c/e19c/2778x2938/A7pmUz_228x241_72d77c4f917569ee.jpg',
          brand: 'cem',
          products: []
        },
        {
          id: 'rentgenova-spektrometrie',
          name: 'Stolní EDXRF analyzátory Hitachi',
          description: 'Energiově-disperzní XRF spektrometry pro rychlou a citlivou QA a QC analýzu. Vysokorychlostní mapovací XRF pro proměřování povrchů, inspekci mikročástic a RoHS analýzy.',
          image: 'https://i.pupiq.net/i/c/c/8df/8df/3074x2925/9n03mU_228x216_56ff8d54dde454f5.jpg',
          brand: 'hitachi',
          products: [
            { id: 'x-supreme-8000-99', name: 'X-Supreme 8000', brand: 'hitachi', image: 'https://i.pupiq.net/i/c/c/b86/28b86/540x540/m1lGBv_228x228_475e5b3e0dd6fc80.png', images: ['https://i.pupiq.net/i/c/c/b86/28b86/540x540/m1lGBv_228x228_475e5b3e0dd6fc80.png'], description: 'EDXRF spektrometr pro průmyslovou QA/QC analýzu.', downloads: [], externalLink: '' },
            { id: 'lab-x5000-208', name: 'LAB-X5000', brand: 'hitachi', image: 'https://i.pupiq.net/i/c/c/a0e/28a0e/1253x945/ozeUGV_228x171_6ce3a155a01a49da.jpg', images: ['https://i.pupiq.net/i/c/c/a0e/28a0e/1253x945/ozeUGV_228x171_6ce3a155a01a49da.jpg'], description: 'Laboratorní EDXRF analyzátor.', downloads: [], externalLink: '' },
            { id: 'ea6000vx-233', name: 'EA6000VX', brand: 'hitachi', image: 'https://i.pupiq.net/i/c/c/924/2f924/552x436/7RlVf8_228x180_2a70388608442372.jpg', images: ['https://i.pupiq.net/i/c/c/924/2f924/552x436/7RlVf8_228x180_2a70388608442372.jpg'], description: 'Vysokorychlostní mapovací XRF spektrometr.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'farmaceuticke-testovani',
          name: 'Farmaceutické testování',
          description: 'Disoluce, fyzikální testery, lisování tablet a zařízení pro R+D a nízkoobjemovou produkci ve farmaceutickém průmyslu od výrobce ERWEKA.',
          image: 'https://i.pupiq.net/i/c/c/8e7/8e7/750x687/vUcQ5i_228x208_6d89127db50a2dc7.png',
          brand: 'erweka',
          subcategories: [
            { id: 'disoluce', name: 'Disoluce', description: 'USP aparáty, systémy Offline, On-Offline a Online UV-VIS, RoboDis II+.', image: 'https://i.pupiq.net/i/c/c/8e7/8e7/750x687/vUcQ5i_228x208_6d89127db50a2dc7.png', products: [] },
            { id: 'doplnky-disoluce', name: 'Doplňky pro disoluci', description: 'Poloautomatická myčka, volumetrické dávkování, automatické odplynění.', image: 'https://i.pupiq.net/i/c/c/8e7/8e7/750x687/vUcQ5i_228x208_6d89127db50a2dc7.png', products: [] },
            { id: 'fyzikalni-testery', name: 'Fyzikální testery', description: 'Testování oděru a pevnosti tablet, rozpadavosti, setřesné hustoty.', image: 'https://i.pupiq.net/i/c/c/8e7/8e7/750x687/vUcQ5i_228x208_6d89127db50a2dc7.png', products: [] },
            { id: 'all-purpose', name: 'All Purpose Equipment', description: 'Univerzální R+D zařízení s modulární konstrukcí pro malosériovou výrobu.', image: 'https://i.pupiq.net/i/c/c/8e7/8e7/750x687/vUcQ5i_228x208_6d89127db50a2dc7.png', products: [] },
            { id: 'lisovani-tablet', name: 'Lisování tablet', description: 'Lis tablet Erweka EP-1.', image: 'https://i.pupiq.net/i/c/c/8e7/8e7/750x687/vUcQ5i_228x208_6d89127db50a2dc7.png', products: [] }
          ]
        },
        {
          id: 'pyrolyza',
          name: 'Pyrolýza',
          description: 'Pyrolýza je proces tepelného rozkladu organického materiálu při zvýšených teplotách v anaerobním prostředí. Zahrnuje štěpení velkých komplexních molekul na menší analyticky užitečné fragmenty.',
          image: 'https://i.pupiq.net/i/c/c/b9c/29b9c/5760x3840/R4EOoD_228x152_048265c456608190.jpg',
          brand: 'cds',
          products: []
        },
        {
          id: 'analyza-plynu',
          name: 'Analýza plynů transformátorových olejů',
          description: 'Fully automated gas extraction unit based on Multi-cycle Mercury free Vacuum extraction method coupled with Agilent GC system.',
          image: 'https://i.pupiq.net/i/c/c/3ce/343ce/676x740/7Ql1c0_228x249_4a971e2d4debe302.jpg',
          brand: 'merel',
          products: []
        },
        {
          id: 'benchtop-nmr',
          name: 'Benchtop NMR spektrometrie Oxford Instruments',
          description: 'Stolní broadband 90 MHz NMR, QA/QC analyzátor MQC+, MQC-R stolní time domain NMR pro materiálovou analýzu.',
          image: 'https://i.pupiq.net/i/c/c/a75/34a75/1120x1120/Bxoyr1_228x228_177dfbcb001964d3.jpg',
          brand: 'oxford',
          products: [
            { id: 'x-pulse-90-284', name: 'X-Pulse 90', brand: 'oxford', image: 'https://i.pupiq.net/i/c/c/a75/34a75/1120x1120/Bxoyr1_228x228_177dfbcb001964d3.jpg', images: ['https://i.pupiq.net/i/c/c/a75/34a75/1120x1120/Bxoyr1_228x228_177dfbcb001964d3.jpg'], description: 'Stolní broadband 90 MHz NMR spektrometr.', downloads: [], externalLink: '' },
            { id: 'mqc-285', name: 'MQC+ stolní QA/QC NMR analyzátory', brand: 'oxford', image: 'https://i.pupiq.net/i/c/c/a76/34a76/697x1120/vpoc7J_228x366_7f09401f87f8c2e2.png', images: ['https://i.pupiq.net/i/c/c/a76/34a76/697x1120/vpoc7J_228x366_7f09401f87f8c2e2.png'], description: 'QA/QC analyzátor olejů a tuků.', downloads: [], externalLink: '' },
            { id: 'mqc-r-286', name: 'MQC-R', brand: 'oxford', image: 'https://i.pupiq.net/i/c/c/a77/34a77/1200x1468/rBp3zW_228x278_beebc137d219f833.jpg', images: ['https://i.pupiq.net/i/c/c/a77/34a77/1200x1468/rBp3zW_228x278_beebc137d219f833.jpg'], description: 'Stolní time domain NMR pro materiálovou analýzu.', downloads: [], externalLink: '' }
          ]
        }
      ]
    },
    {
      id: 'medical',
      name: 'Zdravotnická technika',
      shortName: 'Zdravotnická technika',
      icon: '🏥',
      description: 'Vybavení radioterapeutických pracovišť nejmodernější ozařovací technikou. Instalace a servis dodaných zařízení včetně poskytování dalších služeb.',
      heroImage: 'https://i.pupiq.net/i/c/c/92b/92b/653x490/CnOdB1_228x171_5ee3947639340396.jpg',
      brands: ['varian','iba','lap','cqmedical','womed','best','ashland','modus','chabner'],
      categories: [
        {
          id: 'linearni-urychlovace',
          name: 'Lineární urychlovače',
          description: 'Lineární urychlovač urychluje svazek elektronů na lineární dráze pro vytváření terapeutického svazku záření.',
          fullDescription: 'Z konstrukčního hlediska musí lineární urychlovače zajistit: generování elektronů elektronovým dělem, tvorbu impulsů mikrovlnného signálu pro elektromagnetické pole v urychlovací struktuře, vytváření toku urychlených elektronů v urychlovací struktuře a tvarování terapeutického svazku.',
          image: 'https://i.pupiq.net/i/c/c/92b/92b/653x490/CnOdB1_228x171_5ee3947639340396.jpg',
          brand: 'varian',
          products: [
            {
              id: 'ethos-229',
              name: 'Lineární urychlovač Ethos',
              description: 'Experience the moment when artificial intelligence and adaptive therapy combine to create Adaptive Intelligence. Technology so advanced it will inspire you to reimagine how you\'re able to treat each patient in your care.',
              brand: 'varian',
              image: 'https://i.pupiq.net/i/c/c/6df/2d6df/2048x2048/6hiEJe_228x228_a8c86e0e827046e9.jpg',
              images: [
                'https://i.pupiq.net/i/c/c/6df/2d6df/2048x2048/6hiEJe_586x586_9ad04c023b433a32.jpg',
                'https://i.pupiq.net/i/c/c/6de/2d6de/2048x2048/WFEbtv_300x300xc_8b16482506bb1154.jpg',
                'https://i.pupiq.net/i/c/c/6e0/2d6e0/2048x2048/Rne4VD_300x300xc_ed6fd4766a355b9c.jpg',
                'https://i.pupiq.net/i/c/c/6e1/2d6e1/2048x2048/429GQA_300x300xc_52425c6319961cd8.jpg',
                'https://i.pupiq.net/i/c/c/6e2/2d6e2/2048x2048/yV5P1n_300x300xc_a12f8f96e86911c6.jpg',
                'https://i.pupiq.net/i/c/c/6e5/2d6e5/2048x977/8AvcPb_300x300xc_28566496304898e6.jpg',
                'https://i.pupiq.net/i/c/c/6e7/2d6e7/2048x2650/5tJ7xz_300x300xc_3d24700428ccc644.jpg'
              ],
              downloads: [
                { name: 'Ethos Technical Brief', url: 'http://i.pupiq.net/a/c/c/b5e/b5e/573367/EthosAITechnicalBrief_RAD10690_Sep19.pdf', type: 'pdf', size: '559,9 kB' },
                { name: 'Ethos Product Brief', url: 'http://i.pupiq.net/a/c/c/b5d/b5d/585136/EthosProductBrief_RAD10688_Sep19.pdf', type: 'pdf', size: '571,4 kB' }
              ],
              externalLink: '',
              isNew: true
            },
            {
              id: 'linearni-urychlovac-halcyon-194',
              name: 'Lineární urychlovač Halcyon',
              description: 'Moderní lineární urychlovač navržený pro efektivní a přesnou radioterapii.',
              brand: 'varian',
              image: 'https://i.pupiq.net/i/c/c/8b8/18b8/891x618/MH0gQN_228x158_d0eb650c4ce4f66c.jpg',
              images: ['https://i.pupiq.net/i/c/c/8b8/18b8/891x618/MH0gQN_228x158_d0eb650c4ce4f66c.jpg'],
              downloads: [],
              externalLink: ''
            },
            {
              id: 'linearni-urychlovac-truebeam-36',
              name: 'Lineární urychlovač TrueBeam',
              description: 'Systém TrueBeam je nástrojem pro poskytování špičkové onkologické péče. Je navržen od základu tak, aby byl schopen ozářit pohyblivé cíle s pokročilou rychlostí a přesností. Platforma TrueBeam je plně integrovaný systém pro obrazem navigovanou radioterapii a radiochirurgii.',
              brand: 'varian',
              image: 'https://i.pupiq.net/i/c/c/923/923/960x500/J3K6vC_228x118_49b4f953a5f5004b.jpg',
              images: [
                'https://i.pupiq.net/i/c/c/923/923/960x500/J3K6vC_586x305_952b7b39143deddf.jpg',
                'https://i.pupiq.net/i/c/c/925/925/960x500/Ni1tIU_300x300xc_0ccb06a922a1056e.jpg',
                'https://i.pupiq.net/i/c/c/952/952/960x500/ob2FWq_300x300xc_5c88d80ebe88cac9.jpg',
                'https://i.pupiq.net/i/c/c/953/953/960x500/QqAsMf_300x300xc_f58c30028466db7d.jpg',
                'https://i.pupiq.net/i/c/c/954/954/960x500/GcAmbo_300x300xc_815cf5ac91dbdb81.jpg',
                'https://i.pupiq.net/i/c/c/955/955/960x500/b4B7eC_300x300xc_1383ce0559f03a08.jpg'
              ],
              downloads: [
                { name: 'TrueBeam brožura', url: 'https://i.pupiq.net/a/c/c/ecb/ecb/2554877/TrueBeam_Brochure_RAD10452C_August2022.pdf', type: 'pdf', size: '2,4 MB' }
              ],
              externalLink: ''
            },
            {
              id: 'linearni-urychlovac-vitalbeam-211',
              name: 'Lineární urychlovač VitalBeam',
              description: 'Cenově efektivní lineární urychlovač pro standardní radioterapii.',
              brand: 'varian',
              image: 'https://i.pupiq.net/i/c/c/c37/28c37/960x500/hENgLC_228x118_a1b59e029bd191d1.png',
              images: ['https://i.pupiq.net/i/c/c/c37/28c37/960x500/hENgLC_228x118_a1b59e029bd191d1.png'],
              downloads: [],
              externalLink: ''
            }
          ]
        },
        {
          id: 'systemy-srs-srt',
          name: 'Systémy pro SRS/SRT',
          description: 'Stereotaktická radiochirurgie/radioterapie dodává velké dávky radiace do nádorů s maximální přesností v jednom až pěti ošetřeních.',
          image: 'https://i.pupiq.net/i/c/c/939/939/400x374/jzk7mv_228x213_35d8c6b4b4a1c7fc.jpg',
          brand: 'varian',
          products: [
            { id: 'hyperarc-210', name: 'HyperArc', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/c36/28c36/848x515/H0VKbG_228x138_00d1558e28b61fae.jpg', images: ['https://i.pupiq.net/i/c/c/c36/28c36/848x515/H0VKbG_228x138_00d1558e28b61fae.jpg'], description: 'Pokročilý systém pro stereotaktickou radiochirurgii s automatizovaným workflow.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'protonova-terapie',
          name: 'Protonová terapie',
          description: 'Protonová terapie je významným technologickým pokrokem v léčbě rakoviny. Účinnost je dána energií dodanou v předepsané hloubce — Braggův vrchol.',
          image: 'https://i.pupiq.net/i/c/c/c67/28c67/960x500/q4Url0_228x118_ba4ca5c4003e648b.jpg',
          brand: 'varian',
          products: [
            { id: 'protonova-terapie-212', name: 'ProBeam', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/c67/28c67/960x500/q4Url0_228x118_ba4ca5c4003e648b.jpg', images: ['https://i.pupiq.net/i/c/c/c67/28c67/960x500/q4Url0_228x118_ba4ca5c4003e648b.jpg'], description: 'Systém pro protonovou terapii využívající Braggův vrchol pro přesné cílení.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'brachyterapie',
          name: 'Brachyterapie',
          description: 'Brachyterapie léčí rakovinu umístěním radioaktivních zdrojů přímo do nebo v blízkosti oblasti vyžadující nádorovou léčbu.',
          image: 'https://i.pupiq.net/i/c/c/1e0/291e0/500x781/Si7aGk_228x356_7ee55e4bdc03cba1.png',
          brand: 'varian',
          products: [
            {
              id: 'bravos-220',
              name: 'BRAVOS',
              description: 'Afterloadingový přístroj pro HDR brachyterapii s použitím radionuklidového zdroje 192Ir. Počet ozařovacích kanálů: 30, pozic v jednom kanálu: 100, velikost kroku zdroje nastavitelná po 1 mm.',
              brand: 'varian',
              image: 'https://i.pupiq.net/i/c/c/fb8/28fb8/500x781/isOcg9_228x356_56d93ab52fb8b60a.png',
              images: ['https://i.pupiq.net/i/c/c/fb8/28fb8/500x781/isOcg9_228x356_56d93ab52fb8b60a.png'],
              downloads: [
                { name: 'Bravos Feature Sheet', url: 'http://i.pupiq.net/a/c/c/a9d/a9d/245015/Bravos_Feature_Sheet_-_RAD10568.pdf', type: 'pdf', size: '239,3 kB' },
                { name: 'Bravos brožura', url: 'http://i.pupiq.net/a/c/c/a9c/a9c/1906288/BravosBrochure.pdf', type: 'pdf', size: '1,8 MB' }
              ],
              externalLink: '',
              isNew: true
            },
            { id: 'gammamedplus-58', name: 'GammaMedplus\u2122 iX HDR', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/937/937/960x500/zOpVnJ_228x118_88104ac90ef6debb.jpg', images: ['https://i.pupiq.net/i/c/c/937/937/960x500/zOpVnJ_228x118_88104ac90ef6debb.jpg'], description: 'HDR afterloadingový systém pro brachyterapii.', downloads: [], externalLink: '' },
            { id: 'aplikatory-117', name: 'Aplikátory pro brachyterapii', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/970/970/600x800/AWbw3B_228x304_9f94cf8bb035d20b.jpg', images: ['https://i.pupiq.net/i/c/c/970/970/600x800/AWbw3B_228x304_9f94cf8bb035d20b.jpg'], description: 'Kompletní sortiment aplikátorů pro různé typy brachyterapie.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'planovaci-systemy',
          name: 'Plánovací systémy',
          description: 'Sofistikované počítačové plánovací systémy pro přesné plánování dávkové distribuce pro libovolný průběh dávkového profilu.',
          image: 'https://i.pupiq.net/i/c/c/93a/93a/259x195/a1R2WE_228x171_cdbdb832c2f1e504.jpg',
          brand: 'varian',
          products: [
            { id: 'eclipse', name: 'Plánovací systém Eclipse', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/93b/93b/960x500/hCSekI_228x118_024a59be69b102e3.jpg', images: ['https://i.pupiq.net/i/c/c/93b/93b/960x500/hCSekI_228x118_024a59be69b102e3.jpg'], description: 'Hlavní plánovací systém pro radioterapii.', downloads: [], externalLink: '' },
            { id: 'brachyvision-119', name: 'Plánovací systém BrachyVision', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/979/979/960x500/i8LjtG_228x118_5a5573a4c9c387d1.jpg', images: ['https://i.pupiq.net/i/c/c/979/979/960x500/i8LjtG_228x118_5a5573a4c9c387d1.jpg'], description: 'Plánovací systém pro brachyterapii.', downloads: [], externalLink: '' },
            { id: 'vitesse-120', name: 'Plánovací systém Vitesse', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/980/980/960x500/pxT5rN_228x118_8c6137cf5cbd0ded.jpg', images: ['https://i.pupiq.net/i/c/c/980/980/960x500/pxT5rN_228x118_8c6137cf5cbd0ded.jpg'], description: 'Rychlý plánovací systém pro brachyterapii.', downloads: [], externalLink: '' },
            { id: 'variseed-121', name: 'Plánovací systém VariSeed', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/987/987/960x500/aJB2UD_228x118_7456ac5e12184395.jpg', images: ['https://i.pupiq.net/i/c/c/987/987/960x500/aJB2UD_228x118_7456ac5e12184395.jpg'], description: 'Plánovací systém pro permanentní implantáty.', downloads: [], externalLink: '' },
            { id: 'rapidplan-124', name: 'Plánovací systém RapidPlan', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/9a8/9a8/960x500/gP6iNu_228x118_73fe5f4b2b9e3dc5.jpg', images: ['https://i.pupiq.net/i/c/c/9a8/9a8/960x500/gP6iNu_228x118_73fe5f4b2b9e3dc5.jpg'], description: 'Knowledge-based planning systém.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'verifikacni-systemy',
          name: 'Verifikační systémy',
          description: 'Informační databázové systémy sdružující a kontrolující průběh celého cyklu léčby pacienta na oddělení radioterapie.',
          image: 'https://i.pupiq.net/i/c/c/93c/93c/458x344/xdSOhb_228x171_f2abb6ea3afe4fac.jpg',
          brand: 'varian',
          products: [
            { id: 'aria-64', name: 'ARIA', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/93d/93d/960x500/PiywFh_228x118_ee02ddc163ad7d8b.jpg', images: ['https://i.pupiq.net/i/c/c/93d/93d/960x500/PiywFh_228x118_ee02ddc163ad7d8b.jpg'], description: 'Onkologický informační systém pro kompletní správu léčby pacienta.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'prislusenstvi-lu',
          name: 'Příslušenství k LU',
          description: 'Přístrojové a softwarové nástroje pro specifické účely zobrazení a lokalizace nádorů.',
          image: 'https://i.pupiq.net/i/c/c/751/751/3201x2400/jFlh2W_228x170_1a5eed2661717ef8.jpg',
          brand: 'varian',
          products: [
            { id: 'rpm-47', name: 'Respiratory Gating (RPM)', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/92e/92e/516x367/gQuwlm_228x162_1d682ed443fd0546.jpg', images: ['https://i.pupiq.net/i/c/c/92e/92e/516x367/gQuwlm_228x162_1d682ed443fd0546.jpg'], description: 'Systém pro řízení ozáření synchronizovaný s dýcháním pacienta.', downloads: [], externalLink: '' },
            { id: 'exact-igrt-couch-50', name: 'PerfectPitch 6DOF Couch', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/9a5/9a5/960x500/H56FKI_228x118_2ad93bf3caf90e37.jpg', images: ['https://i.pupiq.net/i/c/c/9a5/9a5/960x500/H56FKI_228x118_2ad93bf3caf90e37.jpg'], description: 'Ozařovací stůl se 6 stupni volnosti pro maximální přesnost polohování.', downloads: [], externalLink: '' },
            { id: 'calypso-122', name: 'Calypso', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/994/994/960x500/d9Vo2N_228x118_216f7df3ef0fa888.jpg', images: ['https://i.pupiq.net/i/c/c/994/994/960x500/d9Vo2N_228x118_216f7df3ef0fa888.jpg'], description: 'GPS pro tělo — systém pro sledování polohy nádoru v reálném čase.', downloads: [], externalLink: '' },
            { id: 'velocity-125', name: 'Velocity', brand: 'varian', image: 'https://i.pupiq.net/i/c/c/9b1/9b1/960x500/b6es7x_228x118_03c232bf31be5c2a.jpg', images: ['https://i.pupiq.net/i/c/c/9b1/9b1/960x500/b6es7x_228x118_03c232bf31be5c2a.jpg'], description: 'Pokročilý software pro registraci a fúzi obrazů.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'dozimetrie',
          name: 'Dozimetrie',
          description: 'Moderní měřící přístroje a pomůcky pro klinickou dozimetrii a její optimalizaci pro kontrolu přístrojů a ozařovacích technik.',
          image: 'https://i.pupiq.net/i/c/c/93e/93e/600x600/odgut3_228x228_e2a8ac8b8e17a51c.jpg',
          brand: 'iba',
          subcategories: [
            { id: 'absolutni-dozimetrie', name: 'Absolutní dozimetrie', description: 'Přesné měření absolutní dávky záření.', image: 'https://i.pupiq.net/i/c/c/93e/93e/600x600/odgut3_228x228_e2a8ac8b8e17a51c.jpg', products: [] },
            { id: 'relativni-dozimetrie', name: 'Relativní dozimetrie', description: 'Měření relativní distribuce dávky.', image: 'https://i.pupiq.net/i/c/c/93e/93e/600x600/odgut3_228x228_e2a8ac8b8e17a51c.jpg', products: [] },
            { id: 'in-vivo-dozimetrie', name: 'In Vivo dozimetrie', description: 'Měření dávky přímo na pacientovi během ozáření.', image: 'https://i.pupiq.net/i/c/c/93e/93e/600x600/odgut3_228x228_e2a8ac8b8e17a51c.jpg', products: [] },
            { id: 'filmova-dozimetrie', name: 'Filmová dozimetrie', description: 'Dozimetrie pomocí radiochromních filmů.', image: 'https://i.pupiq.net/i/c/c/93e/93e/600x600/odgut3_228x228_e2a8ac8b8e17a51c.jpg', products: [] },
            { id: 'verifikace-dynamickych-metod', name: 'Verifikace dynamických metod', description: 'Verifikace IMRT, VMAT a dalších dynamických technik.', image: 'https://i.pupiq.net/i/c/c/93e/93e/600x600/odgut3_228x228_e2a8ac8b8e17a51c.jpg', products: [] },
            { id: 'fantomy-qa', name: 'Fantomy pro QA', description: 'Fantomy pro kontrolu kvality ozařovacích přístrojů.', image: 'https://i.pupiq.net/i/c/c/93e/93e/600x600/odgut3_228x228_e2a8ac8b8e17a51c.jpg', products: [] },
            { id: 'mobius', name: 'MOBIUS', description: 'Nezávislý systém pro verifikaci ozařovacích plánů.', image: 'https://i.pupiq.net/i/c/c/93e/93e/600x600/odgut3_228x228_e2a8ac8b8e17a51c.jpg', products: [] }
          ]
        },
        {
          id: 'lasery',
          name: 'Lasery',
          description: 'Laserové lokalizační zaměřovače pro přesné nastavení cílového objemu v souřadnicovém systému ozařovače.',
          image: 'https://i.pupiq.net/i/c/c/1df/291df/960x723/VzDr5j_228x171_5507984fb8cb5329.jpg',
          brand: 'lap',
          products: [
            { id: 'laser-123', name: 'Laser', brand: 'lap', image: 'https://i.pupiq.net/i/c/c/1db/291db/960x723/6vspoB_228x171_c6263bdb4f25c055.jpg', images: ['https://i.pupiq.net/i/c/c/1db/291db/960x723/6vspoB_228x171_c6263bdb4f25c055.jpg'], description: 'Laserové zaměřovače pro radioterapii.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'fixace',
          name: 'Fixační a polohovací pomůcky',
          description: 'Variabilita přesného a reprodukovatelného nastavení fixní polohy pacienta na ozařovacím stole eliminuje nepřesnosti.',
          image: 'https://i.pupiq.net/i/c/c/7e5/17e5/283x202/bgfxHA_228x162_0af720f51f735427.jpg',
          brand: 'cqmedical',
          products: [
            { id: 'fixacni-pomucky', name: 'Fixační a polohovací pomůcky', brand: 'cqmedical', image: 'https://i.pupiq.net/i/c/c/94f/94f/468x315/P3czSg_228x153_bf23be81c98a1e11.jpg', images: ['https://i.pupiq.net/i/c/c/94f/94f/468x315/P3czSg_228x153_bf23be81c98a1e11.jpg'], description: 'Kompletní sortiment fixačních a polohovacích pomůcek.', downloads: [], externalLink: '' },
            { id: 'ozarovaci-podprsenky-258', name: 'Ozařovací podprsenky', brand: 'chabner', image: 'https://i.pupiq.net/i/c/c/9b5/339b5/197x262/IeJVgT_197x262_f81a16c418b2c9ed.jpg', images: ['https://i.pupiq.net/i/c/c/9b5/339b5/197x262/IeJVgT_197x262_f81a16c418b2c9ed.jpg'], description: 'Speciální fixační pomůcka pro ozařování prsu.', downloads: [], externalLink: '' },
            { id: 'symphony-283', name: 'Symphony Patient Transfer', brand: 'cqmedical', image: 'https://i.pupiq.net/i/c/c/560/34560/702x703/uQLCfV_228x228_95d9b75e165f4c7c.jpg', images: ['https://i.pupiq.net/i/c/c/560/34560/702x703/uQLCfV_228x228_95d9b75e165f4c7c.jpg'], description: 'Systém pro bezpečný přesun pacienta.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'rentgenove-ozarovace',
          name: 'Rentgenové ozařovače v radioterapii',
          description: 'Terapeutické využití rentgenového záření pro nenádorovou léčbu pohybového aparátu a kožních nádorů.',
          image: 'https://i.pupiq.net/i/c/c/9b7/289b7/643x697/NFypmV_228x247_aeb7ffc68abfb75b.jpg',
          brand: 'womed',
          products: [
            { id: 'terapeuticky-rentgen-114', name: 'Terapeutický rentgen T-200', brand: 'womed', image: 'https://i.pupiq.net/i/c/c/8ef/288ef/643x697/CIlHO7_228x247_837e6985a21dc2b7.jpg', images: ['https://i.pupiq.net/i/c/c/8ef/288ef/643x697/CIlHO7_228x247_837e6985a21dc2b7.jpg'], description: 'Terapeutický rentgenový ozařovač pro nenádorovou léčbu.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'ozarovace-krve',
          name: 'Ozařovače krve',
          description: 'Zařízení k ozařování krve před transfuzí. Proces ozáření radionuklidovým zdrojem je plně automatizován.',
          image: 'https://i.pupiq.net/i/c/c/4ed/14ed/446x551/4nKEUT_228x281_976077c9a7f5b1f2.png',
          brand: 'best',
          products: [
            { id: 'ozarovac-krve-193', name: 'Gammacell 1000 Elite / 3000 Elan', brand: 'best', image: 'https://i.pupiq.net/i/c/c/4ed/14ed/446x551/4nKEUT_228x281_976077c9a7f5b1f2.png', images: ['https://i.pupiq.net/i/c/c/4ed/14ed/446x551/4nKEUT_228x281_976077c9a7f5b1f2.png'], description: 'Ozařovače krve s automatizovaným procesem ozáření.', downloads: [], externalLink: '' }
          ]
        },
        {
          id: 'sluzby-medical',
          name: 'Služby',
          description: 'Dodávka a instalace nových zařízení. Přejímací zkoušky a zkoušky dlouhodobé stability. Servis. Projektování RT ozařoven.',
          image: 'https://i.pupiq.net/i/c/c/9a3/9a3/199x253/LAfw9K_199x252_33f10aa3fb90fa97.png',
          brand: 'varian',
          products: []
        }
      ]
    }
  ]
};
