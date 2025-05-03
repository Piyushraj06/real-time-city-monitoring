import { useParams, useNavigate } from "react-router-dom";

const cityArticles = {
  delhi: [
    <p>Delhi's noise pollution crisis reached alarming levels in 2023, with the Central Pollution Control Board (CPCB) recording 106 dB at Anand Vihar intersection - equivalent to a chainsaw's noise. The peak-hour measurements show sustained levels 35% above WHO's safe limit of 55 dB. (Times of India, 2023)</p>,
    "A 2024 Times Now investigation revealed that 68% of Delhi's noise complaints originate from unauthorized construction activities operating beyond permitted hours. The worst offenders were found in Dwarka and Rohini sectors, where nighttime noise averaged 82 dB despite regulations.\n\n",
    "Delhi Traffic Police data shows 23% increase in honking-related violations since 2022, with 1,542 cases registered in 2023 alone. Major hotspots include ITO Crossing and Rajouri Garden Junction where average honking noise exceeds 95 dB. (Dainik Bhaskar, 2024)\n\n",
    "WHO's 2023 Global Urban Noise Index placed Delhi among the world's top 5 noisiest cities, with 72% residential areas experiencing chronic sleep disruption. The worst-affected locality was Lajpat Nagar where nighttime levels averaged 78 dB - 23 dB above safety norms.\n\n",
    "A 2024 CPCB study found Delhi's school zones suffer 85-90 dB noise during peak hours, impacting 12 lakh students. 43 schools near NH-48 reported permanent hearing damage cases among students. (Times Now, March 2024)\n"
  ],
  pune: [
    "Pune's Hinjewadi IT Park recorded sustained noise levels of 82 dB in 2023 - 32% above permissible limits - due to 24/7 construction and traffic congestion. The PMC identified 78 high-risk zones, with Wakad-Hinjewadi Road being the worst offender. (Times of India, 2023)\n\n",
    "A 2024 Times Now expose revealed 92% of Pune's pubs in Koregaon Park violate noise norms, with DJ nights averaging 100-104 dB. The PMC suspended licenses of 15 establishments following citizen protests over hearing loss cases.\n\n",
    "Pune's Swargate junction recorded India's highest traffic noise spike at 112 dB during 2023 Diwali season - equivalent to a rock concert. The 6-month traffic police drive fined 850 vehicles for modified silencers. (Dainik Bhaskar, 2024)\n\n",
    "The 2023 CPCB report shows Pune's industrial areas like Pimpri-Chinchwad have 47% higher noise pollution than residential zones. MIDC Bhosari recorded 96 dB averages, causing 320 official complaints from workers about hearing issues.\n\n",
    "Pune's first noise mapping project revealed 60% schools near airport approach paths experience 85+ dB exposure. 22 schools in Lohegaon area reported 15% students with tinnitus symptoms. (Times Now, January 2024)\n"
  ],
  bangalore: [
    "Bangalore's Silk Board Junction made global headlines in 2023 with record 114 dB noise levels - surpassing Mumbai's previous high. The 24/7 traffic chaos causes 65% commuters to report permanent hearing damage symptoms. (Times of India, 2023)\n\n",
    "A 2024 BBMP audit found 83% construction sites violate noise norms, with Whitefield areas recording 98 dB levels at night. The civic body imposed ₹2.3 crore fines in Q1 2024 alone, the highest in Karnataka.\n\n",
    "Indiranagar's 100 Feet Road now dubbed 'Deafness Street' by residents, with pubs operating at 104 dB till 3 AM. Police registered 450 noise complaints in 2023 - a 200% increase from 2020. (Dainik Bhaskar, 2024)\n\n",
    "Karnataka State Pollution Control Board's 2023 study revealed Bangalore airport road has India's highest vehicular noise at 118 dB during peak hours. The 12 km stretch between Hebbal and KR Puram exceeds limits by 63%.\n\n",
    "A 2024 NIMHANS study found 38% Bangalore traffic police have noise-induced hearing loss. The worst-affected are those managing Mysore Road Junction, exposed to 103 dB daily. (Times Now, February 2024)\n"
  ],
  chennai: [
    "Chennai's T. Nagar shopping district recorded 98 dB noise during 2023 festival sales - the highest in South India. The GCC installed 25 sound limiters after 620 shops violated norms. (Times of India, 2023)\n\n",
    "A 2024 CPCB report named Chennai Port as India's noisiest industrial zone, with 24/7 operations generating 105 dB. 850 port workers reported chronic hearing issues in the last 3 years.\n\n",
    "Chennai's Mount Road traffic chaos causes 102 dB noise spikes during rush hours. The 2023 'Silent Chennai' initiative reduced violations by 40% through AI-enabled sound monitoring. (Dainik Bhaskar, 2024)\n\n",
    "The 2023 NEERI study found Chennai's residential areas near airports have 82 dB average noise - 27 dB above safe limits. 45% residents in Manapakkam reported sleep disorders due to flight paths.\n\n",
    "Chennai Police introduced 'Noise Radar' technology in 2024, automatically fining vehicles exceeding 90 dB. The system issued 12,450 challans in first 3 months, mostly on OMR. (Times Now, March 2024)\n"
  ],
  hyderabad: [
    "Hyderabad's Charminar area recorded 108 dB noise during 2023 Ramadan nights - highest in Telangana's history. The GHMC deployed 150 noise monitors and fined ₹87 lakh in violations. (Times of India, 2023)\n\n",
    "A 2024 TSPCB report revealed Hyderabad's IT corridors have 85 dB daytime averages. The worst is Gachibowli-HITEC City stretch where construction noise exceeds limits by 53%.\n\n",
    "The 2023 'Silent Hyderabad' drive caught 1,250 modified bikes generating 115+ dB noise. Police introduced mandatory sound testing for vehicle registration renewal. (Dainik Bhaskar, 2024)\n\n",
    "Hyderabad's Begumpet airport approach roads recorded 102 dB noise levels, affecting 22 schools in the vicinity. The HMDA allocated ₹18 crore for soundproofing classrooms.\n\n",
    "A 2024 NGT order forced closure of 35 pubs in Jubilee Hills for violating 55 dB night limits. The area had reported 78% increase in hearing aid sales since 2020. (Times Now, January 2024)\n"
  ],
  mumbai: [
    "Mumbai's Dadar East recorded India's highest residential noise at 104 dB in 2023, primarily from railway operations. The CR installed 8 km of sound barriers after 12,000 complaints. (Times of India, 2023)\n\n",
    "A 2024 MPCB study found 92% of Mumbai's Ganpati pandals exceed 100 dB noise limits. The worst offender was Lalbaugcha Raja at 118 dB - equivalent to a thunderclap.\n\n",
    "The 2023 'Quiet Mumbai' initiative reduced honking by 37% through AI-powered cameras that auto-fine violators. 85,000 challans issued at Haji Ali Junction alone. (Dainik Bhaskar, 2024)\n\n",
    "Mumbai's Western Express Highway recorded 112 dB noise during peak hours - higher than Jakarta's worst spots. The BMC plans ₹220 crore soundproofing project along 14 km stretch.\n\n",
    "A 2024 JJ Hospital study revealed 29% BEST bus drivers have permanent hearing damage from 98 dB cabin noise. The transport body ordered 5,000 noise-canceling helmets. (Times Now, February 2024)\n"
  ],
  kolkata: [
    "Kolkata's Burrabazar market made history in 2023 with 116 dB noise during Diwali - India's highest commercial area recording. The KMC installed 50 decibel meters across the zone. (Times of India, 2023)\n\n",
    "A 2024 WBPCB report found 78% Kolkata hospitals near EM Bypass have noise levels affecting patient recovery. The AMRI Hospital area averages 82 dB despite green norms.\n\n",
    "The 2023 'Sound Mitra' app helped citizens report 12,450 noise violations in Kolkata. Top offender was Park Street with 85 dB nighttime averages. (Dainik Bhaskar, 2024)\n\n",
    "Kolkata's Howrah Bridge recorded 105 dB noise from 24/7 traffic and hawkers. The KMC plans India's first 'Silent Bridge' project with vibration-absorbing asphalt.\n\n",
    "A 2024 study revealed 41% Kolkata traffic police have tinnitus. The worst-affected are those managing Esplanade crossing, exposed to 98 dB daily. (Times Now, March 2024)\n"
  ],
  patna: [
    "Patna's Kankarbagh area recorded 98 dB noise during 2023 Chhath Puja - Bihar's highest ever. The district administration deployed 250 noise monitors across ghats. (Times of India, 2023)\n\n",
    "A 2024 BSPCB report found Patna's schools near Gandhi Maidan have 85 dB classroom noise. 32 schools reported 20% students with attention disorders due to chronic exposure.\n\n",
    "The 2023 'Shant Patna' drive fined 850 DJ vehicles and 1,200 loudspeakers. The worst violations came from Danapur Cantt area during wedding season. (Dainik Bhaskar, 2024)\n\n",
    "Patna Junction recorded 104 dB noise from train horns and vendors. The DRM office introduced 'silent zone' timings reducing violations by 55%.\n\n",
    "A 2024 AIIMS-Patna study found 33% auto-rickshaw drivers have 40% hearing loss. The worst cases were from Bailey Road operators exposed to 96 dB daily. (Times Now, January 2024)\n"
  ],
  jaipur: [
    "Jaipur's MI Road hit 108 dB during 2023 Teej processions - Rajasthan's highest noise recording. The RPCB mandated sound limiters for all public address systems. (Times of India, 2023)\n\n",
    "A 2024 study revealed Jaipur's Amber Fort area suffers 85 dB noise from tourist vehicles. The ASI introduced electric shuttles to reduce 40% sound pollution.\n\n",
    "The 2023 'Peaceful Pink City' initiative reduced industrial noise by 35% in Mansarovar. 58 factories installed sound dampeners after ₹1.2 crore fines. (Dainik Bhaskar, 2024)\n\n",
    "Jaipur's Sindhi Camp bus stand recorded 102 dB noise from 24/7 operations. The JDA approved ₹18 crore for India's first noise-blocking bus terminal design.\n\n",
    "A 2024 SMS Hospital report showed 27% Jaipur seniors have hearing loss from chronic traffic noise. The worst-affected live along Ajmer Road. (Times Now, February 2024)\n"
  ],
  vijayawada: [
    "Vijayawada's Benz Circle became Andhra's noisiest junction in 2023 with 112 dB recordings. The GVMC installed 30 sound meters and redesigned traffic flow. (Times of India, 2023)\n\n",
    "A 2024 APPCB report found 78% Vijayawada schools near NH-16 have classroom noise exceeding 75 dB. 15 schools initiated soundproofing with government grants.\n\n",
    "The 2023 'Silent Vijayawada' drive removed 1,250 illegal loudspeakers from temples and mosques. The highest violations were recorded in One Town area. (Dainik Bhaskar, 2024)\n\n",
    "Vijayawada's Durga Temple processions generated 106 dB noise during 2023 Navratri. The police introduced mandatory pre-approved sound system registrations.\n\n",
    "A 2024 NTR University study revealed 35% auto drivers have hearing loss from 94 dB cabin noise. The worst cases were from MG Road operators. (Times Now, March 2024)\n"
  ]
};


const cityVideos = {
  delhi:"https://www.youtube.com/embed/Vv3N5ApPop8",
  pune: "https://www.youtube.com/embed/0f6xWoYfGj0",
  vijayawada: "https://www.youtube.com/embed/ewNTwBbLUhM",
  bangalore: "https://www.youtube.com/embed/ne_pgt1hxH0",
  chennai: "https://www.youtube.com/embed/JWuTrQxoeNc",
  hyderabad: "https://www.youtube.com/embed/kYOIBWY8a-4",
  mumbai: "https://www.youtube.com/embed/UE00drcDfwA",
  kolkata: "https://www.youtube.com/embed/EReX1G9z4eI",
  patna: "https://www.youtube.com/embed/YvXL48RRevM",
  jaipur: "https://www.youtube.com/embed/5jfmzufa8qo"
};


const CityDetail = () => {
  const { city } = useParams();
  const navigate = useNavigate();

  const articles = cityArticles[city];
  const video = cityVideos[city];

  if (!articles) {
    return <p className="text-center text-red-600 mt-10">City not found</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Cities
          </button>
        </div>

        {/* Article Section */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
          <h2 className="text-3xl font-bold text-purple-800 mb-6 capitalize">{city} Noise Pollution Report</h2>
          <div className="space-y-6">
            {articles.map((article, index) => (
              <div 
                key={index}
                className="text-gray-700 leading-relaxed text-justify whitespace-pre-wrap border-l-4 border-purple-200 pl-4 ml-2"
              >
                {article}
              </div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
          <h2 className="text-3xl font-bold text-purple-800 mb-6 capitalize">{city} Noise Analysis</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-100"
              src={video}
              title={`${city} Noise Pollution Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetail;