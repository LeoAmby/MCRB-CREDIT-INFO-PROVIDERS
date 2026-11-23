
/* =========================================
   1. INSTITUTION DATA

   Replace sample records with actual
   Metropol institution records.
========================================= */

const categories = [

    {
        id: "microfinance-institutions",
        name: "MFIs",
        description: "MICROFINANCE INSTITUTIONS",
        icon: "bi-bank",
        institutions: [
            "Abundant Capital Limited",
            "Acorns Investment Limited",
            "Acuity Links Capital Africa Limited",
            "Aero Capital Traders Limited",
            "Aeto Capital Limited",
            "Agile Business Solutions Limited",
            "Agitech Solutions Limited",
            "Agrarian Credit Services Limited",
            "Agro-Based Credit Limited",
            "Airdt Credit Limited",
            "Akukuranut Development Trust",
            "Alba Capital Limited",
            "Alios Finance Kenya Limited",
            "Aliquot Limited",
            "Almasi Credit Limited",
            "Alpha Capital Limited",
            "Alpha Credit Limited",
            "Amani Farewell Africa Limited",
            "Amkeni Development Limited",
            "Appropriate Capital Limited",
            "Aptic Credit Limited",
            "Argo Capital Limited",
            "Arise Credit And Commission Agents Limited",
            "Arope Group Limited",
            "Aspire Finance",
            "Atlantis Finance Limited",
            "Auto Advance Logbook Loans Kenya Limted",
            "Aventuro Capital Limited",
            "Baloon Ventures Limited",
            "Baraka Credit Limited",
            "Baron Credit Limited",
            "Baselayer X1X Limited",
            "Bashy African Credit Limited",
            "Beacons Investments Limited",
            "Bimas Mfi",
            "Blessed Joy Welfare Group",
            "Boost Chapaa Limited",
            "Boresha Credit Services Limited",
            "Boss Credit Limited",
            "Branch International",
            "Bridge Capital",
            "Bridges Credit Africa Limited",
            "Brighter Africa Limited",
            "Broadfields Capital Limited",
            "Bura Financial Services Association",
            "Butterfly Tribe Limited",
            "Capital Bill Ltd",
            "Career Connections Limited",
            "Caritas Nairobi",
            "Centwork Services",
            "Chilli Services Limited",
            "Chime Capital Limited",
            "Chura Limited",
            "Cim Credit Kenya Limited",
            "Cim Credit Kenya Limited",
            "Citizens Credit Microfinance",
            "City Corporation Limited",
            "Cityfield Capital Limited",
            "Coinage Investment Limited",
            "Comet Credit Limited",
            "Connect Plus Africa Limited",
            "County Asset Limited",
            "County Capital Limited",
            "Cowdi Tech Limited",
            "Creative Capital Solutions Limited",
            "Crediation Limited",
            "Credit Factory Limited",
            "Dangduoski Capital Limited",
            "Decimal Concept Limited",
            "Decly Capital Limited",
            "Defen Group Limited",
            "Delaware Capital Limited",
            "Delight Capital Limited",
            "Diaken Credit (K) Limited",
            "Diversity Micro Credit Limited",
            "Dochar Holdings Limited",
            "Dolash Company Limited",
            "Donc Credit Services",
            "Dream Credit Limited",
            "Dsconto Technology Co. Limited",
            "Duta International Limited",
            "Easy Asca Credit Limited",
            "Easycash Capital Limited",
            "Easykopa Limited",
            "Eclof Kenya",
            "Edge Three Sixty Limited",
            "Efectiu Ventures Limited",
            "Elishammah Capital Limited",
            "Emesccos Limited",
            "Enabler Kenya Solutions Limited",
            "Enkaina Limited",
            "Enterprise Mobilization And Investments Limited",
            "Epitome Kenya Limited",
            "Equivest Company Limited",
            "Express Solution Limited",
            "Fadhili Africa Limited",
            "Fadhili Development Program",
            "Faida Capital And Credit Limited",
            "Faraja Cash Limited",
            "Fast Generation Limited",
            "Fast Link Capital",
            "Finance Plan Limited",
            "Financial Access Commerce And Trade Services (Kenya) Limited",
            "Fingrow Capital Limited",
            "Finserve Africa Limited",
            "Firch International Company Limited",
            "First Capital (K) Limited",
            "First Capital Limited",
            "Fisa Group Company Limited",
            "Flame Capital Limited",
            "Focus Credit Company Limited",
            "Fortune Plus Capital Limited",
            "Forty Nine Credit Ltd",
            "Fountain Credit Services Limited",
            "Fsi Capital Limited",
            "Fuji Capital Limited",
            "Fusion Capital",
            "Ganji Payments Limited",
            "Gee Capital Holdings Limited",
            "Global Capital Movers Limited",
            "Golden Barrels Limited",
            "Golden Pearl-Afi Solution Inc",
            "Grace Capital Limited",
            "Granite Capital Limited",
            "Greep Enterprises Limited",
            "Grofin Credit Limited",
            "Grofin Kenya Limited",
            "Group Power Company Limited",
            "Gybe Limited",
            "Haba Na Haba Solutions",
            "Halifax Financial Services Limited",
            "Hazina Development Trust Limited",
            "Helyon Investment Solutions Limited",
            "Heva Fund Llp",
            "Horizon Emark Limited",
            "Hybridge Ventures Limited",
            "Hypac Investments Limited",
            "Imara Capital Limited",
            "Inclusive Credit Limited",
            "Incredo Access Solutions Limited",
            "Instapesa Limited",
            "Integral Credit Limited",
            "Invent Capital Limited",
            "Jambo Credit Limited",
            "Jaybee Divine Stores",
            "Jenga Kenya Enterprises Limited",
            "Jiinue Credit Company Limited",
            "Jirani Smart Limited",
            "Jitegemea Credit Scheme Limited",
            "Jiweze Improved Productivity Ltd",
            "Jiweze Livelihood Development Programme",
            "Jiweze Women Development Programme",
            "Josim Instantaneous Consultium (K) Limited",
            "Jubilant Kenya Limited",
            "Julla International Limited",
            "Jumba Technologies Kenya Limited",
            "Jumlisha International Limited",
            "Kagwe Market Self Help Group",
            "Kamoa Limited",
            "Kapematt Capital Limited",
            "Karopay Credit Limited",
            "Kashmeer Enterprises Limited",
            "Keekorok Capital Limited",
            "Kenya Apps Network Limited",
            "Kerrion Enterprises Limited",
            "Kesaru Community Based Organisation",
            "Kifaru Capital Limited",
            "Kindred Capital Limited",
            "Kismati Credit Limited",
            "Klientele Limited",
            "Koba Capital Limited",
            "Kuwazo Capital Limited",
            "Kuwazo Capital Limited",
            "Kwacha Capital Limited",
            "Lafirm Links Agency",
            "Lead Capital Limited",
            "Leaseton Credit Limited",
            "Lella Capital Limited",
            "Lendi Limited",
            "Lendu Homes Limited",
            "Letshego Kenya Limited",
            "Lexapoint Limited",
            "Liberis Limited",
            "Lin-Cap Credit Limited",
            "Lin-Cap Investment Limited",
            "Linq Mobile Limited",
            "Makao Capital Limited",
            "Manoti Kenya Limited",
            "Mantle Africa Limited",
            "Mastejem Credit Company Limited",
            "Matt Young Verifiers Limited",
            "Mayana Capital Limited",
            "Mec Company Limited",
            "Mega Universal Capital Solutions Plc",
            "Meridian Acceptances Limited",
            "Metumi Capital Limited",
            "Micromart Africa Limited",
            "Midenatt Credit Limited",
            "Milliocy Systems Limited",
            "Mindset Africa Limited",
            "Mission Of Hope International",
            "Mobile Financial Solutions",
            "Mobipesa Limited",
            "Modern Bullion Limited",
            "Molyn Credit Limited",
            "Monesa Credit Limited",
            "Moptions Capital Limited",
            "Mugumo Self Help Group",
            "Mwananchi Business Solutions Limited",
            "Mwangaza Group Of Business Enterprise Limited",
            "Mwangaza Micro-Enterprises Limited",
            "Mwangazabiz Limited",
            "Mwanzo Properties And Management Limited",
            "Mwongozo Micro Investment Limited",
            "Myc4 Ais",
            "Nanonest Limited",
            "Narima Capital Company Limited",
            "Nawiri Digital Limited",
            "Neema Heep Limited",
            "Neema Teachers Welfare Group",
            "Nes Capital Limited",
            "New Generation Capital Limited",
            "Newvine Credit Limited",
            "Nijenge Uwazi Limited",
            "Nimble Group Kenya Limited",
            "Niwahi Credit Limited",
            "Nixus Africa Limited",
            "Njukawiras Men And Women Self-Help Group",
            "Nolan Credit Limited",
            "Nolybab Credit Limited",
            "Numismatics International Limited",
            "Nyali Capital Limited",
            "Obbys Capital Limited",
            "On Time Lending Company Limited",
            "One Africa Capital Limited",
            "One Call Credit Limited",
            "One Cent Circle Limited",
            "Open Valley Investments Group Limited",
            "O-Play Kenya Limited",
            "Opportunity Kenya Limited",
            "Origy Tech Limited",
            "Oryx Real Time Capital Limited",
            "Our Capital Limited",
            "Pace Services Limited",
            "Paddy Kenya Microfinance Limited",
            "Palla Credit Limited",
            "Pamoja Credit Limited",
            "Pamoja Digital Financing Company Limited",
            "Pamoja Women Development Programme",
            "Pamoney Holdings Limited",
            "Payindex Limited",
            "Paylend Limited",
            "Peak Credit Limited",
            "Pearl Bridge Capital Limited",
            "Pecan Investments Limited",
            "Peleza International Limited",
            "Penta Wealth Limited",
            "Peoples Microcredit And Investment Bureaux",
            "Pesa Pal Limited",
            "Pesa Pata Ventures Limited",
            "Pesa Print Limited",
            "Pesacraft Limited",
            "Pesakit Limited",
            "Pesapro Limited",
            "Pi Consulting Services Limited",
            "Pickpay Business Solutions Limited",
            "Pillar Credit Limited",
            "Pinch & Win Limited",
            "Pioneer Fsa Limited",
            "Pivot Fs Kenya Limted",
            "Platinum Private Lending Limited",
            "Poverty Eradication And The Life Empowerment Programme",
            "Prembly International Limited",
            "Provida Africa Limited",
            "Punch Limited",
            "Punch Limited",
            "Quid Mobile Limited",
            "Rafode Limited",
            "Raisi Africa Holdings Limited",
            "Realtime Credit Limited",
            "Registered Person",
            "Resolution Credit Limited",
            "Reves Credit Limited",
            "Ridhika Capital Limited",
            "Root Capital Inc",
            "Rosewood Capital Limited",
            "Ryn Capital Limited",
            "Sabatia Constituency Development Fund",
            "Salene Credit Limited",
            "Salvon Africa Limited",
            "Samburu Restoration Community Based Organization",
            "Samchi",
            "Sanglob Green Limited",
            "Savannah Informatics Limited",
            "Sevenstar Capital Services Limited",
            "Shalev Capital Limited",
            "Shara Technologies Limited",
            "Shield Investment Company Limited",
            "Sidai Capital Investment Limited",
            "Sisdo", "Sky Village Bank F.S.A",
            "Smart Cash Capital Investment",
            "Smart Micro Solutions Limited",
            "Smart Serve Capital Limited",
            "Smatracom Limited",
            "Smp Capital",
            "Songos Investments Limited",
            "Sonix Credit Limited",
            "Sparkworld Enterprises Limited",
            "Spear Enterprise Limited",
            "Speed Capital Limited",
            "Springboard Capital Limited",
            "Stag Credit Limited",
            "Starlight Savers Investment Limited",
            "Stawika Capital Limited",
            "Steca Pacer Limited",
            "Step & Fly Limited",
            "Sterling Credit Limited",
            "Suave Business Solutions",
            "Success Africa Limited",
            "Taifa Credit Limited",
            "Taifa Option Micro-Finance Limited",
            "Tamika Credit Limited",
            "Taslimu Capital Limited",
            "Teleten Kenya Limited",
            "Tenacity Capital Limited",
            "Tende Investments Company Limited",
            "Tenspot Kenya Limited",
            "The 5Th Tier Capital Link Limited",
            "The Sme Impact Room",
            "Think Credit Limited",
            "Tiny Bees Credit Kenya Limited",
            "Tishel Limited",
            "Top Guarantees Limited",
            "Treasure Capital Limited",
            "Treble Credit Limited",
            "Tresor Limited",
            "Trinity Micro Credit Limited",
            "Tufaa Capital Limited",
            "Tulaa Technology Services Limited",
            "Two M Agency Limited",
            "Ufanisi Finance Limited",
            "Ulu Soyes Enterprises",
            "Umati Capital",
            "Ungana Kenya Limited",
            "Unique Lending Company Limited",
            "Urbanwise Prime Ventures Limited",
            "Ushindi Bora Limited",
            "Uweso",
            "Vasukhud Investments Limited",
            "Vimcape Capital Limited",
            "Vision It  Solutions Network",
            "Visions Microfinance Self Help Group",
            "Vuka Uvune Investments Company Limited",
            "Wateko Investment Group Limited",
            "Watu Gari Limited",
            "Wayomif Trust Foundation",
            "Wazalendo Consumer Services",
            "Women Empowerment Support Organisation",
            "Wonderful Blossoms Financial Consultants Limited",
            "Xgo Kenya Limited",
            "Xpress Capital Limited",
            "Zestra Capital Limited",
            "Zikas Technologies Limited"

        ]
    },

    {
        id: "non-deposit-taking-saccos",
        name: "NON DEPOSIT TAKING SACCOS",
        description: "SACCOS",
        icon: "bi-cash-stack",
        institutions: [
            "2B Travellers Savings And Credit Co-Operative Society Limited",
            "2Ml Sacco Society Limited",
            "3Ken Savings And Credit Co-Operative Society Limited",
            "3N-To Sacco Society Limited",
            "96 Kahiu Brotherhood Welfare Society",
            "A & F Simana Self Help Group",
            "Aaa Savings And Credit Co-Operative Society Limited",
            "Abc Sacco Limited",
            "Abiria Sacco Limited",
            "Ack Githunguri Sacco Society Limited",
            "Ack Imani Talent Sacco Society Limited",
            "Ack Kihara Co-Operative Savings And Credit Society Limited",
            "Ack Kiriiti Sacco Society Limited",
            "Ack St James Church Buruburu Sacco Limited",
            "Ack Tenebo Sacco Society Limited",
            "Ack Thika Talent Sacco Society Limited",
            "Ackus Sacco Society Limited",
            "Acre Moja Sacco Society Limited",
            "Across Western Sacco Society Limited",
            "Action Aid Sacco Limited",
            "Acumen Sacco",
            "Adventist Sacco Society Limited",
            "Afcahl Co-Operative Savings And Credit Society Limited",
            "Afco Canteen Cooperative Savings And Credit Society",
            "African Nazarene University Sacco Society",
            "Afrosen Sacco",
            "Agape Sacco Society Limited",
            "Agdeco Sacco Society Limited",
            "Agility Sacco Society Limited",
            "Ahoki Sacco Society Limited",
            "Aibk Sacco Society Limited",
            "Airbus Sacco Society Limited",
            "Airlink Sacco",
            "Akala Boda Boda Sacco Society Limited",
            "Akukuranut Sacco Society Limited",
            "Aldai Sacco",
            "Aldana Travellers Sacco Society Ltd",
            "Alico Agents Mombasa Sacco Society Limited",
            "All Nation Sacco Society Limited",
            "All Saints Cathedral Church Sacco",
            "Amani Housing Sacco Society Ltd",
            "Ameka Savings And Credit Co-Operative Society Limited",
            "Ami Air Sacco Society Limited",
            "Amiran Sacco Society Limited",
            "Amref Sacco Society Limited",
            "Anaweza Sacco Society Limited",
            "Anchor Premier Sacco Society Limited",
            "Angaza Africa Sacco Limited",
            "Approtec Sacco Society Limited",
            "Aquilla Sacco Society Limited",
            "Arabica Coffee Savings And Credit Co-Operative Society Limited",
            "Arise And Shine Sacco Society Limited",
            "Arorwet Savings And Credit Co-Operative Society Limited",
            "Athi Harvest Sacco Society Limited",
            "Athi Pack Sacco Society Limited",
            "Athi River Sacco Society Limited",
            "Athi Steel Sacco Society Limited",
            "Athi Stores Sacco Society Limited",
            "Avaso Sacco Society Limited",
            "Baico Sacco Society Limited",
            "Balozi Sacco Society Limited",
            "Bands Sacco Society Limited",
            "Banki Kuu Co-Operative Savings And Credit Society Limited",
            "Barabara Sacco Society Limited",
            "Baraka Christian Empowerment Sacco Society Limited",
            "Baraka Yetu Sacco Society Limited",
            "Barnados Workers Sacco Society Limited",
            "Bat Sacco",
            "Bat Sacco",
            "Baya Sacco Society Limited",
            "Bcb Sacco",
            "Bench Mark Sacco Society Limited",
            "Bestrock Sacco Society Limited",
            "Biashara Community Sacco Society Limited",
            "Bibilia Sacco Limited",
            "Bibirioni Water Sacco Limited",
            "Bins Sacco Society Limited",
            "Blue Eagle Savings And Credit Co-Operative Society Limited",
            "Blue Fons Sacco Society Limited",
            "Bondeni Jua Kali Sacco Society Limited",
            "Bondo Teachers Sacco Society Limited",
            "Bookstar Sacco Society Limited",
            "Brilliant Alliance Sacco Society Limited",
            "Brinks Sacco Society Limited",
            "Broadcom Co-Operative Sacco Society Limited",
            "Brocahoto Sacco Limited",
            "B-Smart Sacco Society Limited",
            "Bukhungu Sacco Society Limited",
            "Bungoma Line Sacco Society Limited",
            "Bunista Savings And Credit Co-Operative Society Limited",
            "Buruburu Church Of God Sacco Society Limited",
            "Burudisha Sacco Society Limited",
            "Bush Sacco Society Limited",
            "Busia County Assembly Sacco Society Limited",
            "Busia Township Sacco Society Limited",
            "Butali Sacco Society Limited",
            "Butere Faida Sacco Limited",
            "Cal Sacco Society Limited",
            "Cam Sacco",
            "Ccf Sacco",
            "Cda Sacco Society Limited",
            "Central Division Youth Committee",
            "Cereal Growers Savings And Credit Co-Operative Society Limited",
            "Cesi Savings And Credit Co-Operative Society Limited",
            "Cff Community Sacco Society Limited",
            "Chaka United Transporters Sacco Limited",
            "Chambers Unity Sacco Society Limited",
            "Chania Kibwezi Travellers Sacco Society Limited",
            "Chaoba Sacco Society Limited",
            "Charismata Sacco Society Limited",
            "Chasco Sacco Society Limited",
            "Chasimba Sacco Society Limited",
            "Chasta Sacco",
            "Chep Chep Women Sacco Society Limited",
            "Chepkatet Farmers Co-Operative Society Limited",
            "Child Development Workers Sacco",
            "Christ Ambassadors Sacco Society Limited",
            "Christian Entrepreneurs Cooperative Sacco Society Limited",
            "Cic Sacco Society Limited",
            "City Park Kimuri Sacco Limited",
            "Classic Shuttle Sacco Society Limited",
            "Cleanshelf Staff Sacco Limited",
            "Coffex Sacco Society Limited",
            "Com High Sacco",
            "Comfood Sacco Society Limited",
            "Concorde Sacco Limited",
            "Co-Operative Bank Housing Co-Operative Society Limited",
            "Co-Operative Bank Sacco Limited",
            "Cosmos Sacco",
            "Countylink Sacco Limited",
            "Creative Innovations Solution Sacco Society Limited",
            "Crop Life Farmers Sacco Society Limited",
            "Crown Jijenge Sacco Society Limited",
            "D&S Sacco Society Limited",
            "Damashimwe Sacco Society Limited",
            "Dandora Usafiri Travellers Sacco",
            "Datima Transport Savings And Credit Co-Operative Society Limited",
            "Dawa Sacco Society Limited",
            "Daystar Multipurpose Sacco",
            "Dec Sacco Society Limited",
            "Delamere Sacco Society Limited",
            "Delca Sacco Society Limited",
            "Deseret Sacco Society Limited",
            "Design Sacco",
            "Devasco Sacco",
            "Dhamini Sacco",
            "Dhl Sacco Society Limited",
            "Disciples Of Action Sacco Society Limited",
            "Dodcon Sacco Limited",
            "Dove Springs Savings And Credit Co-Operative Society Limited",
            "Dudu Sacco Society Limited",
            "Dunamis Sacco Limited",
            "Dunia Moja Sacco Society Limited",
            "Dupoto Sacco Limited",
            "Eagles Eye Sacco",
            "Eastern Bypass Sacco Society Limited",
            "Eclof Sacco",
            "Economic Tank Co-Operative Savings And Credit Society Limited",
            "Ecose Sacco Limited",
            "Edis Sacco Society Limited",
            "Eekuria Sacco Society Limited",
            "Eldoret Shuttle Sacco Society Limited",
            "Elgeyo Marakwet County Bunge Sacco Society Limited",
            "Elgon View College Staff Sacco Society Limited",
            "Elshadai Umoja Sacco Society Ltd",
            "Empawa Savings And Credit Co-Operative Society Limited",
            "Empso Sacco",
            "Eneza Sacco Society Limited",
            "Epza Sacco Limited",
            "Equity Bank Sacco Society Limited",
            "Ereri Welfare Group",
            "Eruko Sacco Society Limited",
            "Evergreen P.C.E.A. Parish Savings And Credit Co-Operative Society Limited",
            "Exams Sacco Limited",
            "Expin Sacco Society Limited",
            "Fadhili Sacco Society Limited",
            "Faidi Development Sacco Society Limited",
            "Faidika Premium Sacco Society Limited",
            "Faidisha Sacco Limited",
            "Faith Covenant Sacco Society Limited",
            "Faithful Servants Sacco Society Limited",
            "Family Sacco Limited",
            "Fanaka Tele Self Help Group",
            "Farmers Choice Sacco Society Limited",
            "Farmnut Sacco Society Limited",
            "Faulu Bank Sacco Society Limited",
            "Feed The Children Sacco",
            "Fen Sacco Society Limited",
            "Finmat Sacco Society Limited",
            "Finnlemm Sacco Society Limited",
            "Finsafe Sacco Society Limited",
            "Firm Foundation Sacco",
            "Five Fold Sacco Society Limited",
            "Florensis Co-Operative Savings And Credit Society Limited",
            "Flow Grow Sacco",
            "Flying Co-Operative Savings And Credit Society Limited",
            "Focus Realtors Sacco Society Limited",
            "Food For The Hungry International (K) Sacco Society Ltd",
            "Fortune Mark Sacco Society Limited",
            "Four Nt Cooperative Savings And Credit Society Sacco Limited",
            "Fpfk Sacco Society Limited",
            "Free Area Travellers Sacco Limited",
            "Fugo Sacco Society Limited",
            "Game Ranch Sacco Society",
            "Gateway Sacco",
            "Gathers Sacco Society Limited",
            "Gaturiri Dairy Farmers Cooperative Society Limited",
            "Gcc Nanyuki Uzima Sacco Society Limited",
            "Gel Sacco",
            "Genesis Prestige Sacco Society Limited",
            "Getrudes Hospital Sacco",
            "Ghalani Savings And Credit Co-Operative Society Limited",
            "Gilgil Hills Sacco Society Limited",
            "Ginyali Co-Operative Savings And Credit Society Limited",
            "Githunguri Jua Kali Sacco Society Limited",
            "Githurai 45 Travellers Sacco",
            "Glaxosmithkline (Gsk) Sacco Society Limited",
            "Glory School Workers Sacco Society Limited",
            "Goa Sacco",
            "Gods Grace Mission Society Limited",
            "Golden Hills Sacco Limited",
            "Golden Key Sacco Society Limited",
            "Goldenlife Savings And Credit Co-Operative Society Limited",
            "Goodlife Sacco Society Limited",
            "Goshen Sacco Society Limited",
            "Grafco Sacco Limited",
            "Grain Bulk Co-Operative Savings And Credit Society Limited",
            "Grandmark Community Sacco Limited",
            "Great 20 Sacco Society Limited",
            "Groots Savings And Credit Cooperative Limited",
            "Gusii Youth Bunge Sacco Society Limited",
            "Haco Sacco",
            "Hand In Hand Sacco Society Limited",
            "Happy Cow Savings And Credit Co-Operative Society Limited",
            "Haraka Sacco Society Limited",
            "Hardi Sacco Society Limited",
            "Hardwares Sacco Society Limited",
            "Hasco Sacco",
            "Heart Sacco Society Limited",
            "Heho Sacco Society Limited",
            "Helb Sacco",
            "Heroes Savings And Credit Co-Operative Society Limited",
            "Heshimu Punda Sacco Society Limited",
            "Hewa Sacco Society Limited",
            "Hifadhi Sacco Society Limited",
            "Hillcrest Sacco Society Limited",
            "Himosa Travelers Sacco Society Limited",
            "Hoechem Sacco Society Limited",
            "Homa Bay Women Entrepreneurs Sacco Limited",
            "Homa-Bay County Women Sacco Society Limited",
            "Home Owners Sacco Limited",
            "Homepesa Sacco",
            "Hoosca Sacco Society Limited",
            "Hope And Vision Sacco Society Limited",
            "Hotpoint Sacco Society Limited",
            "Huri Sacco Society Limited",
            "Icpsk Co-Operative Savings And Credit Society Limited", "Icsfk Sacco Society Limited",
            "Ikinu Jau Kali Sacco Limited",
            "Imenti North Muungano Sacco Society Limited",
            "Imenti North Women Sacco Society Limited",
            "Imenti South Retirees Sacco Society Limited",
            "Imenti South Women Savings And Credit Co-Operative Society Limited",
            "Independent Health Workers Sacco Limited",
            "Indima(Nje) Cooperative Savings And Credit Society",
            "Intercon Sacco", "Inter-County Travellers Sacco Society Limited",
            "Inua Sacco Society Limited",
            "Isave Savings And Credit Co-Operative Society Limited",
            "Isime Matatu Operators Sacco Society Limited",
            "Isiolo Teachers Sacco Society Limited",
            "Island Farmers Cooperative Society Limited",
            "Iten Women Rural Sacco Society Limited",
            "J.C.A Co-Operative Sacco Society Limited",
            "Jachin Sacco Limited",
            "Jamii Sacco",
            "Java Sacco Society Limited",
            "Jinyime Upate Sacco Society Limited",
            "Jirani Mwema Sacco Society Limited",
            "Jirani Mwema Traders Sacco Society Limited",
            "Jisaidie Sacco Society Limited",
            "Jiunde Biashara Sacco Society Limited",
            "Jiunge Pamoja Sacco",
            "Jocham Sacco Society Limited",
            "Jogoo Sacco Society Limited",
            "Jolemac Sacco Society Ltd",
            "Jomvu Women Sacco Society Limited",
            "Joncum Sacco Limited",
            "Jos Hansen Sacco",
            "Josteco Co-Operative Savings And Credit Society Limited",
            "Juhudi Kilimo Employees Savings And Credit Co-Operative Society Limited",
            "Jumbo Sacco Society Limited",
            "Kabarak University Sacco Society Limited",
            "Kabete Dairy Rural Sacco Society Limited",
            "Kabianga University Sacco Society Limited",
            "Kaboss Sacco Society Limited",
            "Kag Sacco Society Limited",
            "Kagochi Travellers Sacco Society Limited",
            "Kahoto Sacco Society Limited",
            "Kajiado Chamber Sacco Society Limited",
            "Kajiado Multitransporters Sacco Limited",
            "Kakamega County Bunge Sacco Society Limited",
            "Kakamega County Maendeleo Sacco Society Limited",
            "Kakamega Rural Roads Workers Sacco",
            "Kakamega Rural Roads Workers Sacco Society Limited",
            "Kakamega Vuma Daima Sacco",
            "Kaloleni Matatu Owners Sacco Society Limited",
            "Kamako Rural Sacco Society Limited",
            "Kamatargui Rural Sacco Society Limited",
            "Kamba Sacco Society Limited",
            "Kamunde Kariobangi North Sacco Society Limited",
            "Kamuthi Sacco",
            "Kangemi Matatu Owners Sacco Society Limited",
            "Kanisa Co-Operative Sacco Society Limited",
            "Kapa Sacco",
            "Kaprachoge Sacco Society Ltd",
            "Karirana Workers Sacco Society Limited",
            "Karome Investment Sacco Society Limited",
            "Karura Community Sacco Society Limited",
            "Karusco Sacco Society Limited",
            "Kases Sacco Society Limited",
            "Kasipul Retirees & Pensioners (Kasrep) Sacco Society Limited",
            "Katechs Sacco Society Limited",
            "Kayome Sacco Society Limited",
            "Kca University Sacco Society Limited",
            "Kct Sacco Limited",
            "Kemri Sacco Society Limited",
            "Kemsa Sacco",
            "Kemu Sacco",
            "Kencent Sacco Society Limited",
            "Kenchic Sacco Society Limited",
            "Kencom Sacco Limited",
            "Kenkaz Co-Operative Savings And Credit Society Limited",
            "Kenrail Sacco Limited",
            "Kenred Sacco Society Limited",
            "Kenya Medical Association Sacco Limited",
            "Kenya North America Diaspora Sacco",
            "Kenya Re Sacco Society Limited",
            "Kenya Union Of Sacco Limited (Kuscco)",
            "Kenya Usa Diaspora Society Sacco",
            "Kenyatta Matibabu Sacco",
            "Kewa Sacco Society Limited",
            "Kewisco Sacco Society Limited",
            "Kiambu Agri-Business Sacco Society Limited",
            "Kiambu Chania Umoja Sacco Society Limited",
            "Kiambu County Women Sacco Society Limited",
            "Kiambu Inua Maisha Sacco Limited",
            "Kiambu Marafiki Matatu Co-Operative Savings And Credit Society Limited",
            "Kiatu Sacco",
            "KiccSacco Society Limited",
            "Kicomudambitra Sacco Society Limited",
            "Kidapu Sacco Society Limited",
            "Kijabe Sacco Society Limited",
            "Kikuyu Boda Boda Youth Group",
            "Kikuyu Youth Sacco Society Limited",
            "Kilele Sacco Limited",
            "Kilifi Town Council Juhudi Co-Operative Savings And Credit Society Limited",
            "Kilifi Utafiti Sacco Limited",
            "Kilimo Services Sacco",
            "Kina Sacco",
            "Kinangop Boost Sacco",
            "Kinga Sacco Society Limited",
            "Kingsize Sacco",
            "Kingsway Sacco Society Limited",
            "Kinship Youth Sacco Society Limited",
            "Kioo Sacco Society Limited",
            "Kipchabo Outgrowers Sacco Society Limited",
            "Kipkorgot Savings And Credit Co-Operative Society Limited",
            "Kiria-Ini Women Finance Services",
            "Kisacco Sacco",
            "Kisibo Sacco",
            "Kisumu Airport Tax Operators Sacco Society Limited", "Kitale Club Sacco", "Kitalelink Sacco Limited",
            "Kitengela Traders Sacco Society Limited",
            "Kithito Rural Sacco Society Limited",
            "Kito Sacco Society Limited",
            "Kivuko Sacco Society Limited",
            "Kmet Sacco Limited",
            "Koi Sacco Society Limited",
            "Komaza Sacco Society Limited",
            "Ksmt Sacco Society Limited",
            "Kulal Sacco Limited",
            "Kumbuka    Sacco Society Limited",
            "Kuruwitu Sacco Society Limited",
            "Kuungana Kuinuana Sacco Society Limited",
            "Kuza Sacco",
            "Kwa Multipurpose Sacco Society Limited",
            "Kwale Youth Bunge Sacco Society Limited",
            "Labda Sacco Society Limited",
            "Laika Sacco Society Limited",
            "Lakewood Sacco Society Limited",
            "Langas Sacco Society Limited",
            "L’Assurance Sacco Limited",
            "Law Society Of Kenya Sacco Society Limited",
            "Laxma Sacco Society Ltd",
            "Legacy Savings And Credit Co-Operative Society Limited",
            "Lelchego Sacco Society Limited",
            "Lepesa Sacco Limited",
            "Leverage Ventures Self Help Group",
            "Lifeboat Sacco Society Limited",
            "Likana Sacco Society",
            "Likii River Farm Sacco Limited",
            "Likoni Traders Sacco Society Limited",
            "Lily Sacco Society Limited",
            "Limlak Sacco Limited",
            "Limuru Dairy & Community Sacco Society Limited",
            "Limuru Dairy Farmers Cooperative Sacco Society",
            "Limuru Dairy Staff Sacco Society Limited",
            "Limuru Traders Sacco Society Limited",
            "Lisco Sacco", "Liverpool Vct Sacco Society Limited",
            "Loita Traders Sacco Society Limited",
            "Lomacen Savings And Credit Co-Operative Society Limited",
            "Lompasago Sacco Society Limited",
            "Lontels Sacco Society Limited",
            "Lukenya Schools Sacco Society",
            "Lumaco Sacco Society Limited",
            "Lwala Staff Rural Sacco Society Limited",
            "Lynx Sacco Society Limited",
            "Maasai Mara Sacco Society Limited",
            "Mabisa Sacco Society Limited",
            "Maboromoko Sacco Society Limited",
            "Machakos University Sacco Society Limited",
            "Macho Sacco Limited",
            "Macly Sacco Society Limited",
            "Macopri Sacco",
            "Madawa Sacco Society Limited",
            "Madec Rural Sacco Society Limited",
            "Madison Sacco Society Limited",
            "Magadi Sacco Society Limited",
            "Magnate Ventures Sacco Society Limited",
            "Mainya Travellers Sacco Society Limited",
            "Maisha Mapya Sacco Society Limited",
            "Majanees Sacco Society Limited",
            "Makarozzi Sacco Society Limited",
            "Makini Sacco",
            "Maktaba Sacco Society Limited",
            "Makueni Business People Sacco",
            "Makuyu C.B.O Sacco Society Limited",
            "Malindi Teachers Sacco",
            "Mama Milele Savings And Credit Co-Operative Society Limited",
            "Maranatha Sacco Limited",
            "Margsta Savings And Credit Co-Operative Society Limited",
            "Mariakani Mabati Co-Operative Savings And Credit Society Limited",
            "Maridhawa Regulated Non-Wdt Sacco Society Limited",
            "Marion School Sacco Society Limited",
            "Maruti United Sacco Society Limited",
            "Maseno University Sacco Limited",
            "Mashinani Sacco",
            "Masterways Sacco Limited",
            "MatcoSacco Society Limited",
            "Mathai Savings And Credit Society Limited",
            "Mathira Rural Matatu Sacco Society Limited",
            "Mausa Sacco Society Limited",
            "Mavueni Sacco Society Limited",
            "Mavuno Daima Sacco Society Limited",
            "Mawasiliano Sacco Society Limited",
            "Mawazo Sacco Limited",
            "Mawega Savings And Credit Co-Operative Society Limited",
            "Mawo Sacco Society Limited",
            "Mayekwe Farmers Co-Operative Society Limited",
            "Mazao Frigoken Sacco",
            "Mbaa Ngui Sacco Limited",
            "Mbatian Co-Operative Savings And Credit Society Limited",
            "Mbegu Sacco Limited",
            "Mbingu Sacco Society Limited",
            "Mbooni West Sacco Society Limited",
            "Mediamax Savings And Credit Co-Operative Society Limited",
            "Medy Sacco Society Limited",
            "Mehta Electrical Sacco",
            "Menany Services Co-Operative Savings And Credit Society Limited",
            "Menger Solution Sacco Society Limited",
            "Merdat Sacco Society Limited",
            "Merica Co-Operative Savings And Credit Society Limited",
            "Meru County Persons With Disability Sacco Society Limited",
            "Meru Nissan Operators Sacco",
            "Methodist Sacco Society Limited",
            "Mhasibu Sacco Society Limited",
            "Mikebe Sacco",
            "Mimosa Sacco Society Limited",
            "Minto B Sacco Society Limited",
            "Mkombozi Sacco Limited",
            "Mofaa Sacco", "Moi University Sacco Society Limited",
            "Moi-Nab Sacco Limited",
            "Moko Co-Operative Savings And Credit Society Limited",
            "Molo Prime Youth Savings And Credit Co-Operative Society Limited",
            "Mombo Sacco Society Limited",
            "Moto Hope Savings And Credit Co-Operative Society Limited",
            "Mount Kenya University Savings And Credit Co-Operative Society Limited",
            "Mtk Sacco Society Limited", "Mug Muguga Sacco Society Limited",
            "Mugi Sacco Society Limited",
            "Mugumo Wa Muranga High School Sacco Limited",
            "Mulembe Unity Sacco Society Limited",
            "Mulleys Sacco Society Limited",
            "Multiple Sacco Society Limited",
            "Mumias Progressive Sacco",
            "Munyanti Youth Sacco Society Limited",
            "Muranga County Bunge Sacco Society Limited",
            "Muranga Fair Trade Sacco Society Limited",
            "Musumari Devki Sacco Society Limited",
            "Muthaiga Sacco Society Limited",
            "Muungano Sacco Society Limited",
            "Mvita Women Sacco Society Limited",
            "Mwala Sofdev Sacco Society Limited",
            "Mwangaza Sacco Society Limited",
            "Mwavuli Sacco Society Limited",
            "Mwenge Miraa Sacco Society Limited",
            "Mwirona Sacco",
            "Mwitax Sacco Society Limited",
            "Mzima Springs Sacco Society Ltd",
            "N.H.I.F Savings And Credit Co-Operative Society Limited",
            "N.O.K.K Sacco Society Limited",
            "Nabongo Co-Operative Savings And Credit Society Limited",
            "Nahiho Sacco Society Limited",
            "Nairobi Consumers Sacco Society Limited",
            "Nairobi County Bunge Sacco Society Limited",
            "Nairobi Embu Nissan Operators",
            "Nairobi Hospital Sacco Society Limited",
            "Nairobi Water Sacco Society Limited",
            "Naivasha Southlake Sacco Society Limited",
            "Naivasha Travellers Sacco Society Limited",
            "Nakathi Travelers Sacco Society Limited",
            "Nakonns Sacco Society Limited",
            "Nakuru County Youth Bunge Sacco Limited",
            "Nakuru North District Women Sacco Society Limited",
            "Nakuru Wakulima Sokoni Sacco Society Limited",
            "Namascco Sacco Society Limited",
            "Nandi Adnet Sacco",
            "Nandi County Assembly Sacco Society Limited",
            "Nandi County Bunge Sacco Society Limited",
            "Nandi East Women Sacco Society Limited",
            "Nanyuki Boda Boda Sacco Society Limited",
            "Nanyuki Khe Sacco",
            "Nanyuki Mount Kenya Boda Boda Sacco Society Limited",
            "Narok-Nairobi Travellers Sacco Society Limited",
            "Narugi Development Co-Operative Savings And Credit Society Limited",
            "Nasco Co-Operative Savings And Society Limited",
            "Naserian Sacco Society Limited",
            "Nass Sacco Society Limited",
            "Natoco Sacco Society Limited",
            "Navigators Kenya Savings And Credit Co-Operative Society Limited",
            "Nawasuku Sacco Limited",
            "Nayopo Sacco Society Limited",
            "Nazigi Sacco Society Limited",
            "Ndege Sacco Society Limited",
            "Ndeiya Sacco Society Limited",
            "Ndonyo Ngaria Women Rural Sacco Society Limited",
            "Ndovu Sacco Society Limited",
            "Ndumberi Coffee Farmers Sacco Society Limited",
            "Ndutiria Rural Sacco Society Limited",
            "Nefeso Sacco Society Limited",
            "Nendeni Sacco Society",
            "Nest Sacco Society Limited",
            "Network Sacco Society Limited",
            "Neutral Point Sacco Society Limited",
            "New Biashara Sacco Society Limited", 
            "New Calet Sacco Society Limited",
            "New Hope Faida Sacco Society Limited", 
            "New Invesco Staff Sacco Limited", 
            "New Lelwak Sacco Soiety Limited", 
            "New Milimani Sacco Society Limited", 
            "New Vision Co-Operative Savings And Credit Society Limited",
            "Ngao Yetu Sacco Society Limited", 
            "Ngarua Lines Sacco Society Limited",
            "Ngoima Sacco", 
            "Ngorongo Factory Workers Co-Operative Sacco Society Limited", 
            "Nguirubi Outreach Savings And Credit Co-Operative Society Limited", 
            "Nimepata Sacco Society Limited", 
            "Nivea Sacco Limited",
            "Njiru Sacco Society Limited", 
            "Njoroline Operators Sacco Society Limited", 
            "Nm Vision Co-Operative Savings And Credit Society Limited",
            "Nock Sacco Society Limited",
            "Norel Sacco Society Limited", 
            "Northern Rangelands Sacco Society Limited", 
            "Nssf Co-Operative Savings And Credit Society Limited", 
            "Nuru Sacco Society Limited", 
            "Nyahururu Rumuruti Star Sacco Society Limited", 
            "Nyakati Matatu Investors Sacco Society Limited", 
            "Nyambene Catholic Sacco Society Limited", 
            "Nyanda Savings And Credit Co-Operative Society Limited",
            "Nyasomo Sacco Society Limited",
            "Nyekatra Sacco Society Limited", 
            "Nyeri County Youth Bunge Sacco Society Limited", 
            "Nyumba Co-Operative Savings And Credit Society Limited - Mombasa", 
            "Nyumba Regulated Non-Wdt Sacco Society Limited",
            "Oasic Sacco Society Limited", 
            "Ocean Freighters Co-Operative Savings And Credit Society Limited", 
            "Olive Joycare Sacco Society Limited",
            "Olkausel Sacco Society Limited", 
            "Olkejuado Teachers Sacco Society Limited", 
            "Olkiyo Taxi Cabs And Motorcyclists Sacco Limited", 
            "Olkutai Staff Sacco Society Limited", 
            "Ollessos Sacco Society Limited", 
            "Orokise Sacco Society Limited", 
            "Orthodox Churches Sacco Society Limited",
            "Orthodox Churches Sacco Society Limited", 
            "Ostram Traders Sacco Society Limited", 
            "Oxford Sacco", 
            "P.C.E.A Gatamaiyu Sacco Society Limited",
            "P.C.E.A Kahawa Sukari Sacco Society Limited", 
            "P.C.E.A Kahawa West Sacco Society Limited", 
            "P.C.E.A Kasarani Parish Sacco Society Limited",
            "P.C.E.A Mukuyu Sacco Society Limited", 
            "P.C.E.A Nairobi West Sacco Society Limited", 
            "P.C.E.A Rungiri Unity Sacco Society Limited", 
            "Pak Sacco Society Limited", 
            "Pals Matatu Sacco Society", 
            "Pamoja Enterprise Sacco Society Limited", 
            "Pamoja Sacco Society Limited", 
            "Pan Africa Staff Sacco Society Limited", 
            "Panari Sacco Limited", 
            "Panda Sacco Society Limited", 
            "Paragon Valuers Sacco Society Limited", 
            "Pattmos Smart Homes Sacco Society Limited", 
            "Pcea Kahawa Farmers Sacco Society Limited", 
            "Pcea Kayole Sacco Society Limited", 
            "Pcea Makupa Parish Sacco Society Limited", 
            "Pcea Nakuru West Uzima Sacco Society Limited", 
            "Pcea Sacco Society Limited-South C", 
            "Pefa Nairobi Central Sacco", 
            "Pegasus Sacco Society Limited", 
            "Pehani Sacco Society Limited", 
            "Penda Sacco Limited", 
            "Pengire Co-Operative Savings And Credit Society Limited",
            "Pesa Sacco Society Limited", 
            "Petrol Savings And Credit Co-Operative Society Limited", 
            "Petsco Sacco Society Limited", 
            "Phoenix Sacco Society Limited", 
            "Pillas Sacco Society Limited", 
            "Piosacc Savings And Credit Co-Operative Society Limited", 
            "Planning Sacco Society Limited", 
            "Pollen Sacco Society Limited", 
            "Polyfex Industries Sacco Society Limited",
            "Polymer Sacco Society Limited", 
            "Polytech Sacco Society Limited",
            "Ponde Savings And Credit Co-Operative Society Limited", 
            "Porec Sacco Society Limited", 
            "Portland Cement Sacco Society Limited", 
            "Postmail Sacco Society Limited", 
            "Powa Savings And Credit Co-Operative Society Limited", 
            "Precsta Sacco", "Prewaku Sacco Society Limited", 
            "Prime Junior School Sacco Society Limited", 
            "Prodisym Sacco Limited",
            "Prudence Savings And Credit Co-Operative Society Limited", 
            "Prudia Sacco Society Limited", 
            "Pura Sacco Limited", 
            "Purified Savings And Credit Co-Operative Society Limited", 
            "Pwani Tuinuane Sacco Society Limited", 
            "Quaker Community Sacco Limited", 
            "Que Services Sacco Limited", 
            "Queensway Sacco Society Limited", 
            "Raa Elites Savings And Credit Co-Operative Society Limited", 
            "Radar Guards Sacco Society Limited", 
            "Radio Guard Sacco Society Limited", 
            "Rafiki Dtm Savings And Credit Co-Operative Society Limited", 
            "Rambhai Staff Sacco Society Limited", 
            "Ramco Group Sacco Society Limited", 
            "Ratili Sacco Limited",
            "Reality Savings And Credit Co-Operative Society Limited", 
            "Redeemed Family Sacco Society Limited", 
            "Regal Pham Sacco", 
            "Regency Sacco Limited", 
            "Reli Sacco Society Limited", 
            "Relief Sacco Society Limited",
            "Remican Sacco Limited", 
            "Retail Measurement Sacco Society Limited",
            "Riva Credit And Credit Society Limited", 
            "Romesi Savings And Credit Co-Operative Society Limited", 
            "Rongai Rural Sacco Society Limited",
            "Ruai Endelea Sacco Society Limited", 
            "Ruare Sacco Society Limited",
            "Rukine Travellers Sacco", 
            "Runda Water Sacco Society Limited", 
            "Runka Services Sacco Limited", 
            "Ruoya Partners Sacco Society Limited",
            "Rusinga School Sacco Society Limited", 
            "Sabibu Sacco Society Limited",
            "Sacred Heart Sacco Society Limited", 
            "Safaricross Sacco Limited",
            "Safepak Sacco Limited", 
            "Sagret Sacco Society Limited", 
            "SamaritanSacco Society Limited", 
            "San Steel Sacco Society Ltd", 
            "Sarova Sacco Society Limited", 
            "Saruji Sacco Limited", 
            "Savani Savings And Credit Co-Operative Society Limited", 
            "Savannah Traders Sacco Society Limited",
            "Seattle Sacco Society Limited", 
            "Sepu Sacco Society Limited", 
            "Serian Sacco Society Limited", 
            "Shabab Matatu Operators Sacco Society Limited",
            "Shasosa Sacco Society Limited", 
            "Sheikh Khalifa Sacco Society Limited",
            "Shekinah Sacco", 
            "Shelloyees Sacco Society Limited", 
            "Shemeji Sacco",
            "Shian Tours And Travel Limited", 
            "Shofco Savings And Credit Co-Operative Society Limited", 
            "Shujaa Sacco", 
            "Siapei Sacco Society Limited", 
            "Siaya County Bunge Sacco Limited", 
            "Signode Sacco Society Limited", 
            "Sigona Golf Club Sacco Society Limited", 
            "Sima Sacco Society Limited", 
            "Simba Cement Sacco Society Limited", 
            "Simbi Roses Sacco Society Limited", 
            "Simlaw Sacco Limited", 
            "Sindikiza Savings And Credit Co-Operative Society Limited", 
            "Siomo Savings And Credit Co-Operative Society Limited", 
            "Sisi Kwa Sisi Sacco Society Limited", 
            "Sixty Four Fanaka Savings And Credit Co-Operative Society Limited", 
            "Smart Savers Sacco Society Limited", 
            "Smarty Savings And Credit Co-Operative Society Limited", 
            "Sobba Sacco", 
            "Songa Mbele Sacco", 
            "Songa Sacco Society Limited", 
            "Sony Farmers Rural County Sacco Society Limited", 
            "Sos Sacco Society Limited", 
            "Sotico Sacco Society Limited", 
            "Sotik Kotabgor Sacco Society Limited", 
            "Sotik Youth Initiative Sacco Society Limited",
            "Southlands Sacco Society Limited", 
            "Sovereign Sacco Limited",
            "Specialists Sacco Limited", 
            "Sports Club Co-Operative Savings And Credit Society Limited", 
            "Sportsview Sacco Limited", 
            "St. Lukes Sacco Society Limited", 
            "St. Pauls University Sacco Society Limited",
            "Starlight Farmers Co-Operative Society Limited", 
            "Stegra Sacco Society Limited", 
            "Suna Jua Kali Sacco Society Limited", 
            "Sunrays Savings And Credit Co-Operative Society Limited", 
            "Sunripe Sacco Society Limited",
            "Superfund Multi-Purpose Sacco Limited", 
            "Taa Sacco Limited", 
            "Taasisi Sacco Society Limited", 
            "Tabuga Sacco Society Limited", 
            "Tacsix Sacco Society Limited", 
            "Tahkl Employees Sacco Society Limited", 
            "Taifa Bahari Sacco Society Limited", 
            "Taita Taveta Matatu Sacco Society Limited",
            "Tamarind Workers Co-Operative Sacco Society Limted", 
            "Tape Sacco Society Limited", "Tarda Sacco Society Limited", 
            "Tarpo Sacco Society Limited", 
            "Teenwise Media Sacco Society Limited", 
            "Tencare Sacco Society Limited", 
            "Tetra Pak Sacco", 
            "The Great Crater Self Help Group", 
            "The Oasis Redeemers Savings And Credit Co-Operative Society Limited", 
            "The Standard Sacco Society Limited", 
            "Thika Boffulo Sacco Society Limited",
            "Thika High School Sacco Society Limited", 
            "Thika Town Service Sacco",
            "Tigania Women Sacco Society Limited (Tiwosa)", 
            "Tigoni Day Unity Sacco Society Limited", 
            "Tigoni Workers Sacco", 
            "Tilecarp Sacco Society Limited", 
            "Tinderet Tea Farmers Sacco Society Limited", 
            "Toll Pamoja 2007 Sacco Society Limited", 
            "Torch Sacco Society Limited", 
            "Tosha Workers Sacco Society Limited", 
            "Total Savings And Credit Co-Operative Society Limited", 
            "Tramon Sacco Society Limited", 
            "Transcom Sacco Society Limited", 
            "Transglob Sacco Society Limited", 
            "Transmara Sugar Sacco Society Limited", 
            "Transnational Sacco Society Limited",
            "Transwest Travellers Sacco Limited", 
            "Travmits Sacco Society Limited",
            "Treasure Capital Sacco Society Limited", 
            "Triangular Boosters Sacco Society Limited", 
            "Tuinuane Cathedral Sacco Society Limited", 
            "Tukuze Sacco Society Limited", 
            "Tumaini Timbwani Savings And Credit Co-Operative Society Limited", 
            "Tumaset Sacco Society Limited",
            "Tunaweza Epz Sacco Society Limited", 
            "Tunza Sacco Society Limited",
            "Tusaidiane Sks Sacco", 
            "Tushirikiane Savings And Credit Co-Operative Society Limited", 
            "Tuungane Tujijenge Sacco Limited", 
            "Twakiri Sacco Society Limited", 
            "Uaminifu Sacco Society Limited", 
            "Uasin Gishu Hawkers Savings And Credit Co-Operative Society Limited", 
            "Ubani Sacco Society Limited", 
            "Ubesa Sacco Society Limited", 
            "Ubuntu Savings And Credit Cooperative Limited", 
            "Uchapaji Sacco Society Limited", 
            "Uchukuzi Psv Sacco Society Limited", 
            "Uchumi Sacco Limited", 
            "Ufahamu Sacco Society Limited", 
            "Uhifadhi Sacco Society Limited", 
            "Ujumbe Sacco Society Limited", 
            "Ukaguzi Sacco Society Limited", 
            "Ukombozi Sacco", 
            "Ultravetis Sacco Society Limited", 
            "Umoja-Innercore-Tena Matatu Owners Sacco Society Limited", 
            "Umote Sacco Limited", 
            "Umowa Sacco Society Limited",
            "Unbound Non-Wdt Sacco Society Limited", 
            "Unga Employees Sacco Society Limited", 
            "Unilands Sacco Society Limited", 
            "Union-Locks Sacco Society Limited", 
            "Unipharma Sacco Society Limited", 
            "United Amani Sacco Society Limited", 
            "United Star Sacco Society Limited", 
            "United Winners Sacco Society Limited", 
            "United Women Co-Operative Savings And Credit Society Limited", 
            "Unitra Trucks Sacco Society Limited", 
            "Unity Travellers Sacco Society Limited", 
            "Unjomaki Sacco", 
            "Uokoaji Sacco", 
            "Upendo Sacco Limited", 
            "Upenyo Sacco Society Limited", 
            "Urban Roads Sacco Society Limited", 
            "Uriri Bidii Savings And Credit Co-Operative Society Limited",
            "Ushindi Biashara Sacco", 
            "Ushuru Cooperative Sacco Limited", 
            "Usitawi Co-Operative Savings And Credit Society Limited", 
            "Utabibu Sacco",
            "Utafiti Sacco Limited", 
            "Utawala By Pass Travellers Sacco Society Limited", 
            "Uthabiti Sacco Society Limited", 
            "Utulivu Co-Operative Savings And Credit Society Limited", 
            "Uwezo Sacco", 
            "Venus Kenya Sacco Society Limited", 
            "Vep Sacco Society Limited", 
            "Verona Huruma Savings And Credit Co-Operative Society Limited", 
            "Victors Faith Gyohe Savings And Credit Co-Operative Society Limited", 
            "Vihiga County Traders Sacco Limited", 
            "Vipingo Ridge Sacco Society Limited", 
            "Visho Sacco", 
            "Vision Believers Sacco Society Limited", 
            "Vision Beyond Vision Sacco Society Limited", 
            "Vision Sacco Ltd", 
            "Vision Traders Sacco", 
            "Visionary Entrepreneurs Sacco Society Limited", 
            "Visionery Empowerment Sacco Society Limited", 
            "Viwanda Sacco Limited", 
            "Waajiri Sacco Limited",
            "Wakadiri Cooperative Sacco Society Limited", 
            "Wakarimu Sacco Society Limited", 
            "Wakulima Youth Empowerment Sacco Society Limited", 
            "Walinzi Sacco Society Limited", 
            "Walton Sacco Society Limited", 
            "Wamarafiki Sacco Society Limited", 
            "Wanangozi Sacco Society Limited", 
            "Wanawakili Co-Operative Savings And Credit Society Limited", 
            "Wanayuda Sacco Society Limited", 
            "Wanunuzi Sacco Society Limited", 
            "Wareg Heritage Marketing Co-Operative Society Limited", 
            "Warren-Sasini Sacco Limited",
            "Wasado Co-Operative Sacco Society Limited", 
            "Weeta Savings And Credit Co-Operative Society Limited", 
            "Wenye Magari Sacco Society Limited",
            "Western Safari Sacco Limited", 
            "Western Shuttle Sacco", 
            "Weza Sacco Society Limited", 
            "Whitegate Jua Kali Self Help Group", 
            "Wi United Sacco Society Limited", 
            "Wikika Sacco Society Limited", 
            "Wonder Sacco Society Limited", 
            "Wonderpac Sacco Society Limited", 
            "Yes Sacco Society Limited", 
            "Yoken Sacco Society Limited", 
            "Youth Fund Staff Sacco Society Limited", 
            "Yu Sacco Society Limited", "Yunes Sacco", 
            "Zabibu Sacco",
            "Zaklisco Sacco Society Limited", 
            "Zoghori Regulated Non Wdt Sacco Society Limited", 
        ]
    },

    {
        id: "Non Bank",
        name: "NON BANK FINANCIAL INSTITUTIONS",
        description: "NOT TRADITIONAL BANKS",
        icon: "bi-cash-coin",
        institutions: [
            "Jubilant Kenya Limited",
            "Select Capital"
        ]
    },

    {
        id: "dfi",
        name: "DFI",
        description: "DEVELOPMENT FINANCE INSTITUTIONS",
        icon: "bi-buildings",
        institutions: [
            
"Agricultural Finance Corporation",
"Busia County Cooperative Enterprise Development", 
"Commodities Fund", "East African Development Bank",
"Higher Education Loans Board", 
"Industrial And Commercial Development Corporation", 
"Industrial Development Bank Capital Limited", 
"Kakamega County Micro Finance Corporation", 
"Kenya Development Corporation Limited", 
"Kenya Industrial Estates Limited", 
"Laikipia County Co-Operative Development Fund", 
"Laikipia County Enterprise Fund", 
"Meru County Microfinance Corporation", 
"National Housing Corporation", 
"Post Bank", 
"Tourism Finance Corporation Limited", 
"Umoja Magharibi Kenya",
"Women Enterprise Fund", 
"Youth Enterprise Development Fund"
        ]
    },

    {
        id: "trade",
        name: "TRADE",
        description: "TRADE FINANCE INSTITUTIONS",
        icon: "bi-globe2",
        institutions: [
            "Example Insurance Company One",
            "Example Insurance Company Two",
            "Example Insurance Company Three"
        ]
    },

    {
        id: "insurance",
        name: "INSURANCE COMPANIES",
        description: "INSURANCE PROVIDERS",
        icon: "bi-diagram-3",
        institutions: [
            "Example Credit Provider One",
            "Example Credit Provider Two"
        ]
    },

    {
        id: "digital credit",
        name: "DIGITAL CREDIT",
        description: "DIGITAL CREDIT PROVIDERS",
        icon: "bi-phone",
        institutions: [
            "Example Hire Purchase Company One",
            "Example Hire Purchase Company Two"
        ]
    },

    {
        id: "deposit taking saccos",
        name: "DEPOSIT TAKING SACCOS",
        description: "SACCOS TAKING DEPOSITS",
        icon: "bi-piggy-bank",
        institutions: [
            "Example Utility Company One",
            "Example Utility Company Two"
        ]
    },

    {
        id: "schools",
        name: "LEARNING INSTITUTIONS",
        description: "Schools",
        icon: "bi-mortarboard",
        institutions: [
            "Kenyatta University",

        ]
    },
    {
        id: "shg",
        name: "SELF HELP GROUPS",
        description: "SELF HELP GROUPS",
        icon: "bi-people",
        institutions: [
            "Keroka Riverside Self Help Group",
            "Moonak Genertions Self Help Group"

        ]
    },
    {
        id: "verification-company",
        name: "VERIFICATION COMPANIES",
        description: "VERIFIERS",
        icon: "bi-shield-check",
        institutions: [
            "Bold Insight Tech Solutions Limited",
            "Rediwork Limited",
            "Semafacts Services Limited",
            "Sheer Logic Management Consultants Limited"

        ]
    }

];


/* =========================================
   2. GLOBAL VARIABLES
========================================= */

const categoryLanding =
    document.getElementById("categoryLanding");

const categoryDetails =
    document.getElementById("categoryDetails");

const categoryGrid =
    document.getElementById("categoryGrid");

const institutionList =
    document.getElementById("institutionList");

const institutionSearch =
    document.getElementById("institutionSearch");

const pageSize = 12;

let selectedCategory = null;

let currentPage = 1;

let filteredInstitutions = [];


/* =========================================
   3. GENERATE CATEGORY CARDS
========================================= */

function renderCategories() {

    categoryGrid.innerHTML = "";

    categories.forEach(category => {

        const card = document.createElement("button");

        card.type = "button";

        card.className = "category-card";

        card.setAttribute(
            "aria-label",
            `View ${category.name}`
        );

        card.innerHTML = `

            <div class="category-icon">
                <i class="bi ${category.icon}"></i>
            </div>

            <div class="category-info">

                <h3>${category.name}</h3>

                <small>${category.description}</small>

                <div class="category-bottom">

                    <span>Explore category</span>

                    <i class="bi bi-arrow-right"></i>

                </div>

            </div>

        `;

        card.addEventListener("click", () => {

            openCategory(category.id);

        });

        categoryGrid.appendChild(card);

    });

}


/* =========================================
   4. OPEN SELECTED CATEGORY
========================================= */

function openCategory(categoryId) {

    selectedCategory = categories.find(
        category => category.id === categoryId
    );

    if (!selectedCategory) return;

    // Hide category landing view
    categoryLanding.style.display = "none";

    // Show category details
    categoryDetails.style.display = "block";

    // Update category information
    document.getElementById("detailTitle").textContent =
        selectedCategory.name;

    document.getElementById("detailDescription").textContent =
        selectedCategory.description;

    document.getElementById("detailIcon").innerHTML = `
        <i class="bi ${selectedCategory.icon}"></i>
    `;

    // Update institution count
    document.getElementById("institutionCount").textContent =
        selectedCategory.institutions.length;

    // Reset search and pagination
    institutionSearch.value = "";

    currentPage = 1;

    filteredInstitutions = [
        ...selectedCategory.institutions
    ];

    renderInstitutions();

    // Scroll to directory
    window.scrollTo({
        top: document.querySelector(
            ".directory-section"
        ).offsetTop,
        behavior: "smooth"
    });

}


/* =========================================
   5. DISPLAY INSTITUTIONS
========================================= */

function renderInstitutions() {

    institutionList.innerHTML = "";

    const total = filteredInstitutions.length;

    const totalPages = Math.ceil(total / pageSize);

    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }

    const startIndex = (currentPage - 1) * pageSize;

    const endIndex = Math.min(
        startIndex + pageSize,
        total
    );

    const currentInstitutions =
        filteredInstitutions.slice(startIndex, endIndex);


    // Create institution rows
    currentInstitutions.forEach((institution, index) => {

        const item = document.createElement("li");

        const number = document.createElement("span");

        number.className = "institution-number";

        number.textContent = String(
            startIndex + index + 1
        ).padStart(2, "0");

        const name = document.createElement("span");

        name.className = "institution-name";

        name.textContent = institution;

        const arrow = document.createElement("i");

        arrow.className = "bi bi-arrow-up-right";

        item.appendChild(number);

        item.appendChild(name);

        item.appendChild(arrow);

        institutionList.appendChild(item);

    });


    // Handle empty search results
    const emptyState =
        document.getElementById("emptyState");

    const paginationArea =
        document.getElementById("paginationArea");

    if (total === 0) {

        emptyState.style.display = "block";

        paginationArea.style.display = "none";

    } else {

        emptyState.style.display = "none";

        paginationArea.style.display = "flex";

    }


    // Update result information
    document.getElementById("resultCount").textContent =
        `Showing ${total} institutions`;

    document.getElementById("paginationInfo").textContent =
        `Showing ${total === 0 ? 0 : startIndex + 1} - ${endIndex} of ${total}`;


    renderPagination(totalPages);

}


/* =========================================
   6. SEARCH INSTITUTIONS
========================================= */

institutionSearch.addEventListener("input", function () {

    const searchTerm = this.value
        .trim()
        .toLowerCase();

    filteredInstitutions =
        selectedCategory.institutions.filter(institution =>

            institution.toLowerCase().includes(searchTerm)

        );

    currentPage = 1;

    renderInstitutions();

});


/* =========================================
   7. PAGINATION
========================================= */

function renderPagination(totalPages) {

    const controls =
        document.getElementById("paginationControls");

    controls.innerHTML = "";

    if (totalPages <= 1) return;


    // Previous button
    const previous = document.createElement("button");

    previous.type = "button";

    previous.className = "page-btn";

    previous.innerHTML = '<i class="bi bi-chevron-left"></i>';

    previous.disabled = currentPage === 1;

    previous.setAttribute("aria-label", "Previous page");

    previous.addEventListener("click", () => {

        if (currentPage > 1) {

            currentPage--;

            renderInstitutions();

        }

    });

    controls.appendChild(previous);


    // Page number buttons
    let startPage = Math.max(1, currentPage - 2);

    let endPage = Math.min(
        totalPages,
        currentPage + 2
    );

    if (currentPage <= 3) {
        endPage = Math.min(5, totalPages);
    }

    if (currentPage > totalPages - 3) {
        startPage = Math.max(1, totalPages - 4);
    }

    for (let page = startPage; page <= endPage; page++) {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "page-btn";

        if (page === currentPage) {

            button.classList.add("active");

            button.setAttribute("aria-current", "page");

        }

        button.textContent = page;

        button.addEventListener("click", () => {

            currentPage = page;

            renderInstitutions();

        });

        controls.appendChild(button);

    }


    // Next button
    const next = document.createElement("button");

    next.type = "button";

    next.className = "page-btn";

    next.innerHTML = '<i class="bi bi-chevron-right"></i>';

    next.disabled = currentPage === totalPages;

    next.setAttribute("aria-label", "Next page");

    next.addEventListener("click", () => {

        if (currentPage < totalPages) {

            currentPage++;

            renderInstitutions();

        }

    });

    controls.appendChild(next);

}


/* =========================================
   8. BACK TO CATEGORIES
========================================= */

document.getElementById("backButton")
    .addEventListener("click", function () {

        // Hide category details
        categoryDetails.style.display = "none";

        // Show category landing
        categoryLanding.style.display = "block";

        // Clear selection
        selectedCategory = null;

        institutionSearch.value = "";

        // Return to categories
        window.scrollTo({
            top: document.querySelector(
                ".directory-section"
            ).offsetTop,
            behavior: "smooth"
        });

    });


/* =========================================
   9. AUTOMATIC FOOTER YEAR
========================================= */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* =========================================
   10. INITIALISE PAGE
========================================= */

renderCategories();
