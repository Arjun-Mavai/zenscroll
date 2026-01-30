export interface Topic {
  id: number;
  front: string;
  back: string;
  details?: string;
  mnemonic?: string;
  pro_tip?: string;
  impact_emoji?: string;
  important_facts?: string[];
}

export interface UnitData {
  title?: string; // Optional for backward compatibility
  title_en?: string;
  unit_title?: string; // New format
  exam_name?: string; // New format
  subject?: string; // New format
  unit_id?: string; // New format
  topics: Topic[];
  topics_en?: Topic[];
}

export interface SyllabusData {
  exam_name: string;
  subject: string;
  units: {
    [key: string]: UnitData;
  };
}

export const syllabusData: SyllabusData = {
  exam_name: "राज्य सेवा (प्रारंभिक) परीक्षा",
  subject: "सामान्य अध्ययन - प्रथम प्रश्न पत्र",
  units: {
    "unit_1": {
    "exam_name": "राज्य सेवा (प्रारंभिक) परीक्षा",
  "subject": "सामान्य अध्ययन - प्रथम प्रश्न पत्र",
  "unit_id": "unit_1",
  "unit_title": "भारत का इतिहास (History of India)",
  "topics": [
    {
      "id": 1,
      "front": "प्राचीन भारतीय ज्ञान परंपरा",
      "back": "सिर्फ पढ़ाई नहीं, यह जीवन जीने का 'संपूर्ण विज्ञान' था।",
      "details": "यह परंपरा 'श्रुति' (सुना हुआ) और 'स्मृति' (याद रखा हुआ) पर आधारित थी। इसमें खगोल शास्त्र (Astronomy), गणित (Mathematics) और चिकित्सा (Medicine) धर्म के साथ जुड़े हुए थे।",
      "mnemonic": "Trick: श्रुति-स्मृति का संगम",
      "pro_tip": "एग्जाम में अक्सर 'वेदांग' (6 अंग) के नाम पूछे जाते हैं - शिक्षा, कल्प, व्याकरण, निरुक्त, छंद, ज्योतिष।",
      "impact_emoji": "🕉️",
      "important_facts": [
        "वेदांगों की संख्या 6 है।",
        "आर्यभट्ट ने शून्य (Zero) और पृथ्वी के घूमने का सिद्धांत दिया।",
        "सुश्रुत को 'शल्य चिकित्सा' (Surgery) का जनक माना जाता है।"
      ]
    },
    {
      "id": 2,
      "front": "वेद (Vedas)",
      "back": "ब्रह्मांड का 'Source Code' - मानव जाति का सबसे पुराना लिखित ज्ञान।",
      "details": "वेद शब्द 'विद्' से बना है (अर्थ: जानना)।\n1. **ऋग्वेद**: देवताओं की स्तुति (सबसे प्राचीन)।\n2. **सामवेद**: भारतीय संगीत की उत्पत्ति (सारेगामा...)।\n3. **यजुर्वेद**: यज्ञ और कर्मकांड की विधियाँ।\n4. **अथर्ववेद**: आयुर्वेद, जादू-टोना और वशीकरण।",
      "mnemonic": "Trick: R-S-Y-A (Rishabh Sings Yearly Always)",
      "pro_tip": "ऋग्वेद के 10वें मंडल (पुरुष सूक्त) में पहली बार 'वर्ण व्यवस्था' का ज़िक्र है।",
      "impact_emoji": "📜",
      "important_facts": [
        "ऋग्वेद में 1028 सूक्त हैं।",
        "गायत्री मंत्र (सावित्री देवी को समर्पित) ऋग्वेद के तीसरे मंडल में है।",
        "यजुर्वेद गद्य और पद्य दोनों में लिखा गया एकमात्र वेद है।"
      ]
    },
    {
      "id": 3,
      "front": "उपनिषद (Upanishad)",
      "back": "वेदों का अंतिम भाग (वेदांत) - गुरु के पास बैठकर सीखा गया 'रहस्य' (Philosophy)।",
      "details": "ये कर्मकांड के बजाय 'ज्ञान' और 'दर्शन' पर बात करते हैं। आत्मा, परमात्मा और मोक्ष की चर्चा यहीं है।",
      "mnemonic": "Trick: उप + नि + षद् (समीप + नीचे + बैठना)",
      "pro_tip": "भारत का आदर्श वाक्य 'सत्यमेव जयते' मुण्डकोपनिषद से लिया गया है।",
      "impact_emoji": "🧘‍♂️",
      "important_facts": [
        "कुल उपनिषदों की संख्या 108 मानी जाती है।",
        "सबसे पुराना उपनिषद 'बृहदारण्यक' है।",
        "'नचिकेता और यम' का संवाद कठोपनिषद में मिलता है।"
      ]
    },
    {
      "id": 4,
      "front": "पुरुषार्थ (Purushartha)",
      "back": "इंसान के जीवन के 4 'Ultimate Goals' जो बैलेंस बनाते हैं।",
      "details": "1. **धर्म**: नैतिक कर्तव्य।\n2. **अर्थ**: आर्थिक संपन्नता।\n3. **काम**: शारीरिक/सांसारिक इच्छाएं।\n4. **मोक्ष**: जन्म-मृत्यु के चक्र से मुक्ति (अंतिम लक्ष्य)।",
      "mnemonic": "Trick: D-A-K-M (Dekho Ab Kaam Mera)",
      "pro_tip": "क्रम याद रखें: धर्म -> अर्थ -> काम -> मोक्ष।",
      "impact_emoji": "🎯",
      "important_facts": [
        "मोक्ष को 'परम पुरुषार्थ' कहा जाता है।",
        "गृहस्थ आश्रम में 'अर्थ' और 'काम' की प्रधानता होती है।"
      ]
    },
    {
      "id": 5,
      "front": "षड्दर्शन (Six Schools of Philosophy)",
      "back": "सत्य को देखने के 6 भारतीय नजरिये (चश्मे)।",
      "details": "1. सांख्य (कपिल) - प्रकृति/पुरुष\n2. योग (पतंजलि) - अनुशासन\n3. न्याय (गौतम) - तर्क/Logic\n4. वैशेषिक (कणाद) - परमाणु/Atom\n5. मीमांसा (जैमिनी) - कर्मकांड\n6. वेदांत (बादरायण) - ज्ञान",
      "mnemonic": "Trick: न्या-वै, सां-यो, मी-वे (जोड़ी में याद करें)",
      "pro_tip": "कपिल मुनि का 'सांख्य दर्शन' सबसे पुराना माना जाता है।",
      "impact_emoji": "🧠",
      "important_facts": [
        "कणाद ऋषि ने डाल्टन से हजारों साल पहले 'परमाणु' (Atom) का सिद्धांत दिया था।",
        "अद्वैत वेदांत के प्रवर्तक आदि शंकराचार्य थे।"
      ]
    },
    {
      "id": 6,
      "front": "संस्कार (Sanskara)",
      "back": "जीवन को 'शुद्ध' और 'गुणवान' बनाने वाली 16 सीढ़ियाँ।",
      "details": "गर्भाधान (जन्म से पहले) से लेकर अंत्येष्टि (मृत्यु) तक, इंसान के हर पड़ाव को पवित्र किया जाता है। मुख्य संस्कार: नामकरण, उपनयन (जनेऊ), विवाह।",
      "mnemonic": "Trick: 16 Steps of Life",
      "pro_tip": "'उपनयन संस्कार' से ही शिक्षा का आरंभ माना जाता था।",
      "impact_emoji": "🔥",
      "important_facts": [
        "कुल 16 संस्कार होते हैं।",
        "अंतिम संस्कार 'अंत्येष्टि' है।",
        "उपनयन संस्कार के बाद बालक 'द्विज' (दोबारा जन्मा हुआ) कहलाता था।"
      ]
    },
    {
      "id": 7,
      "front": "सिंधु घाटी सभ्यता (Indus Valley Civilization)",
      "back": "भारत की 'Urban' शुरुआत - पक्की ईंटें, नालियां और व्यापार।",
      "details": "यह कांस्य युगीन (Bronze Age) सभ्यता थी। यहाँ के लोग शांतिप्रिय और व्यापारी थे। मातृदेवी और पशुपति की पूजा होती थी।",
      "mnemonic": "Trick: H-M-L-K (Harappa, Mohenjo-daro, Lothal, Kalibangan)",
      "pro_tip": "लोथल (Lothal) एक 'बंदरगाह' (Dockyard) था, यह बार-बार पूछा जाता है।",
      "impact_emoji": "🧱",
      "important_facts": [
        "हड़प्पा की खोज 1921 में दयाराम साहनी ने की।",
        "मोहनजोदड़ो का अर्थ 'मृतकों का टीला' है।",
        "विशाल स्नानागार (Great Bath) मोहनजोदड़ो में मिला।"
      ]
    },
    {
      "id": 8,
      "front": "मौर्य साम्राज्य (Mauryan Empire)",
      "back": "पहला 'अखंड भारत' - चाणक्य की नीति और अशोक की तलवार (बाद में धम्म)।",
      "details": "चंद्रगुप्त ने यूनानियों को हराया। अशोक ने कलिंग युद्ध (261 BC) के बाद हथियार त्याग दिए और बौद्ध धर्म अपनाया।",
      "mnemonic": "Trick: C-B-A (Chandragupta -> Bindusara -> Ashoka)",
      "pro_tip": "सांची का स्तूप अशोक ने बनवाया था।",
      "impact_emoji": "🦁",
      "important_facts": [
        "चाणक्य (कौटिल्य) ने 'अर्थशास्त्र' पुस्तक लिखी (राजनीति पर)।",
        "अशोक के अभिलेख 'ब्राह्मी' और 'खरोष्ठी' लिपि में हैं।",
        "अशोक को अभिलेखों में 'देवानांपिय' (देवताओं का प्यारा) कहा गया है।"
      ]
    },
    {
      "id": 9,
      "front": "स्वतंत्रता संघर्ष (1857-1947)",
      "back": "गुलामी की जंजीरों को तोड़ने का महायज्ञ।",
      "details": "1857: मंगल पांडे की गोली।\n1885: कांग्रेस की स्थापना।\n1915: गांधीजी का आगमन।\n1942: भारत छोड़ो आंदोलन।",
      "mnemonic": "Trick: 1857 (Start) -> 1947 (End)",
      "pro_tip": "1905 का 'बंगाल विभाजन' और 1919 का 'जलियांवाला बाग' टर्निंग पॉइंट्स थे।",
      "impact_emoji": "🇮🇳",
      "important_facts": [
        "1857 की क्रांति मेरठ से शुरू हुई।",
        "भगत सिंह, राजगुरु, सुखदेव को 23 मार्च 1931 को फांसी दी गई।",
        "सरदार पटेल ने 562 रियासतों का एकीकरण किया (Iron Man)।"
      ]
    }
  ],
  "topics_en": [
    {
      "id": 1,
      "front": "Ancient Knowledge Tradition",
      "back": "Not just books, but a 'Complete Science' of living life.",
      "details": "Based on 'Shruti' (Heard) and 'Smriti' (Remembered). It integrated Astronomy, Mathematics (Zero), and Medicine (Ayurveda) seamlessly with spirituality.",
      "mnemonic": "Trick: Blend of Science & Spirit",
      "pro_tip": "Remember the 6 Vedangas (Limbs of Veda) as they are the keys to understanding Vedas.",
      "impact_emoji": "🕉️",
      "important_facts": [
        "There are 6 Vedangas.",
        "Aryabhata discovered Zero and the rotation of Earth.",
        "Sushruta is known as the 'Father of Surgery'."
      ]
    },
    {
      "id": 2,
      "front": "Vedas",
      "back": "The 'Source Code' of the Universe - World's oldest wisdom.",
      "details": "Root word 'Vid' means 'To Know'.\n1. **Rigveda**: Hymns (Oldest).\n2. **Samaveda**: Music (Melodies).\n3. **Yajurveda**: Rituals/Sacrifice.\n4. **Atharvaveda**: Medicine/Spells.",
      "mnemonic": "Trick: R-S-Y-A (Remember Smart Yearly Abilities)",
      "pro_tip": "The famous 'Gayatri Mantra' is found in the 3rd Mandala of Rigveda.",
      "impact_emoji": "📜",
      "important_facts": [
        "Rigveda has 1028 hymns.",
        "Yajurveda is the only Veda written in both Prose and Verse.",
        "Atharvaveda deals with daily life problems and cures."
      ]
    },
    {
      "id": 3,
      "front": "Upanishad",
      "back": "The End of Vedas (Vedanta) - Philosophy learnt sitting near the Guru.",
      "details": "They move away from rituals to 'Knowledge'. Discusses Soul (Atman), God (Brahman), and Liberation (Moksha).",
      "mnemonic": "Trick: Upa (Near) + Ni (Down) + Shad (Sit)",
      "pro_tip": "India's motto 'Satyamev Jayate' is taken from Mundaka Upanishad.",
      "impact_emoji": "🧘‍♂️",
      "important_facts": [
        "Total Upanishads are considered to be 108.",
        "Brihadaranyaka is the oldest Upanishad.",
        "Dialogue between Nachiketa and Yama is in Kathopanishad."
      ]
    },
    {
      "id": 6,
      "front": "Sanskara",
      "back": "16 Steps to purify and refine a human life.",
      "details": "From Conception (Garbhadhan) to Funeral (Antyeshti), these rituals mark every major milestone to add quality to life.",
      "mnemonic": "Trick: 16 Milestones",
      "pro_tip": "'Upanayana' (Thread ceremony) marked the beginning of formal education.",
      "impact_emoji": "🔥",
      "important_facts": [
        "There are 16 major Sanskaras.",
        "Antyeshti is the final Sanskara.",
        "After Upanayana, a student was called 'Dvij' (Twice-born)."
      ]
    },
    {
      "id": 7,
      "front": "Indus Valley Civilization",
      "back": "India's Urban Dawn - Bricks, Drains, and Trade.",
      "details": "A Bronze Age civilization known for peace and trade. Worship of Mother Goddess and Pashupati was common.",
      "mnemonic": "Trick: H-M-L-K (Harappa, Mohenjo-daro, Lothal, Kalibangan)",
      "pro_tip": "Lothal was a 'Dockyard' city - this is a very frequent question.",
      "impact_emoji": "🧱",
      "important_facts": [
        "Harappa discovered by Dayaram Sahni in 1921.",
        "Mohenjo-daro means 'Mound of the Dead'.",
        "The Great Bath was found in Mohenjo-daro."
      ]
    },
    {
      "id": 8,
      "front": "Mauryan Empire",
      "back": "First 'Unified India' - Chanakya's Brain & Ashoka's Change of Heart.",
      "details": "Chandragupta defeated Greeks. Ashoka gave up war after Kalinga (261 BC) and adopted Buddhism (Dhamma).",
      "mnemonic": "Trick: C-B-A (Chandragupta -> Bindusara -> Ashoka)",
      "pro_tip": "Sanchi Stupa was commissioned by Emperor Ashoka.",
      "impact_emoji": "🦁",
      "important_facts": [
        "Chanakya wrote 'Arthashastra' (Statecraft).",
        "Ashoka's inscriptions are in Brahmi and Kharosthi scripts.",
        "Ashoka is referred to as 'Devanampiya' in inscriptions."
      ]
    }
  ]
    },
    
    "unit_2": {
      "title": "मध्यप्रदेश का इतिहास, संस्कृति एवं साहित्य",
      "title_en": "History, Culture and Literature of Madhya Pradesh",
      "topics": [
         {
           "id": 1,
           "front": "स्वतंत्रता आंदोलन में म.प्र. का योगदान",
           "back": "झंडा सत्याग्रह (जबलपुर) और जंगल सत्याग्रह (बैतूल) जैसी प्रमुख घटनाएं।",
           "details": "शहीद चैन सिंह, टंट्या भील और रानी अवंतीबाई का बलिदान अविस्मरणीय है।",
           "mnemonic": ""
         },
        { 
          "id": 2, 
          "front": "प्रमुख राजवंश (होलकर & सिंधिया)", 
          "back": "चंदेल, परमार, होलकर और सिंधिया जैसे महान राजाओं के परिवार जिन्होंने MP की धरती पर शासन किया।",
          "details": "**होलकर वंश (इंदौर):** संस्थापक मल्हार राव होलकर। रानी अहिल्याबाई ने महेश्वर को राजधानी बनाया देश भर में मंदिर बनवाए। \n**सिंधिया वंश (ग्वालियर):** संस्थापक राणोजी सिंधिया। महादजी सिंधिया ने पानीपत के बाद मराठा शक्ति को पुनर्जीवित किया।",
          "mnemonic": "होलकर: 'मल्हार होकर इंदौर आया' | सिंधिया: 'राणाजी सेधिया ने ग्वालियर बसाया'"
        },
        {
          "id": 3,
          "front": "मध्यप्रदेश की स्थापत्य कला",
          "back": "खजुराहो के मंदिर और साँची के स्तूप, जो विश्व धरोहर हैं।",
          "details": "खजुराहो (चंदेल वंश), साँची (मौर्य/शुंग), भीमबेटका (प्रागैतिहासिक)।",
          "mnemonic": ""
        },
        {
          "id": 4,
          "front": "म.प्र. की प्रमुख जनजातियाँ",
          "back": "भील, गोंड, कोरकू आदि - उनकी संस्कृति और बोलियां।",
          "details": "भगोरिया हाट (भील) और घोटुल प्रथा (गोंड) महत्वपूर्ण सांस्कृतिक पहलू हैं।",
          "mnemonic": ""
        },
        {
            "id": 5,
            "front": "प्रमुख लोक साहित्यकार",
            "back": "कालिदास, भवभूति, और माखनलाल चतुर्वेदी जैसे नवरत्न।",
            "details": "कालिदास (शकुंतलम), माखनलाल (भारतीय आत्मा)।",
            "mnemonic": ""
        }
      ],
      "topics_en": [
        {
            "id": 1,
           "front": "MP in Freedom Struggle",
           "back": "Major events like Flag Satyagraha (Jabalpur) and Jungle Satyagraha (Betul).",
           "details": "Key figures: Chandrashekhar Azad, Tantya Bhil, Rani Avantibai.",
           "mnemonic": ""
        },
        { 
          "id": 2, 
          "front": "Major Dynasties (Holkar & Scindia)", 
          "back": "Key historical turning points and the rule of families like the Holkars, Scindias, Chandelas, and Parmars.",
          "details": "**Holkar (Indore):** Founded by Malhar Rao Holkar. Famous for Queen Ahilyabai who rebuilt temples across India (Kashi Vishwanath). \n**Scindia (Gwalior):** Founded by Ranoji Scindia. Mahadji Scindia was a military genius who modernized the army called 'Kampoo'.",
          "mnemonic": "Holkar: 'Malhar Holds Indore' | Scindia: 'Ranoji Settled in Gwalior'"
        },
         {
          "id": 3,
          "front": "Art & Architecture of MP",
          "back": "World heritage sites like Khajuraho Temples and Sanchi Stupa.",
          "details": "Khajuraho (Chandela Dynasty), Sanchi (Buddhist Art), Bhimbetka (Cave Paintings).",
          "mnemonic": ""
        },
        {
          "id": 4,
          "front": "Tribes of MP",
          "back": "Bhil, Gond, Korku - their rich culture and dialects.",
          "details": "Bhagoria Festival (Bhils) is a major cultural event.",
          "mnemonic": ""
        }
      ]
    },

    "unit_3": {
      "title": "भारत का भूगोल",
      "title_en": "Geography of India",
      "topics": [
         { 
          "id": 1, 
          "front": "Mountains of India", 
          "back": "From the mighty Himalayas in the North to the ancient Aravallis, these peaks protect our borders.",
          "details": "Key Ranges (North to South): Karakoram, Ladakh, Zanskar, Pir Panjal, Dhauladhar, Shivalik. \nThe **Himalayas** are young fold mountains. The **Aravallis** are the oldest fold mountains in the world.",
          "mnemonic": "Kal Jana Padega Desh Se (Karakoram, Zanskar, Pir Panjal, Dhauladhar, Shivalik)"
        },
        {
            "id": 2,
            "front": "Plateaus & Plains",
            "back": "The Deccan Plateau and the fertile Northern Plains.",
            "details": "Deccan Trap (formed by volcanic lava) is black soil rich (Cotton).",
            "mnemonic": ""
        },
        {
            "id": 3,
            "front": "Climate & Monsoon",
            "back": "Understanding the SW Monsoon and El-Nino effects.",
            "details": "India generally has a Tropical Monsoon type climate.",
            "mnemonic": ""
        },
        { 
          "id": 4, 
          "front": "Rivers of India", 
          "back": "Life-lines of India like the Ganga, Narmada, and Kaveri that provide water for agriculture.",
          "details": "Major Rivers by Length: Ganga > Godavari > Krishna > Yamuna > Narmada. \n**Ganga** is the longest. **Godavari** is known as 'Dakshin Ganga'.",
          "mnemonic": "Go Big And Catch Fast Kittens (Ganga, Brahmaputra, And(Mahanadi), Cauvery, Fast(Godavari), Krishna)"
        },
        {
            "id": 5,
            "front": "Natural Resources",
            "back": "Minerals (Iron, Coal) and Energy resources (Solar, Wind).",
            "details": "Chota Nagpur Plateau is known as the 'Ruhr of India' due to mineral richness.",
            "mnemonic": ""
        }
      ],
      "topics_en": [
         { 
          "id": 1, 
          "front": "Mountains of India", 
          "back": "From the mighty Himalayas in the North to the ancient Aravallis, these peaks protect our borders.",
          "details": "Key Ranges (North to South): Karakoram, Ladakh, Zanskar, Pir Panjal, Dhauladhar, Shivalik. \nThe **Himalayas** are young fold mountains. The **Aravallis** are the oldest fold mountains in the world.",
          "mnemonic": "Kal Jana Padega Desh Se (Karakoram, Zanskar, Pir Panjal, Dhauladhar, Shivalik)"
        },
        {
            "id": 2,
            "front": "Plateaus & Plains",
            "back": "The Deccan Plateau and the fertile Northern Plains.",
            "details": "Deccan Trap (formed by volcanic lava) is black soil rich (Cotton).",
            "mnemonic": ""
        },
         {
            "id": 3,
            "front": "Climate & Monsoon",
            "back": "Understanding the SW Monsoon and El-Nino effects.",
            "details": "India generally has a Tropical Monsoon type climate.",
            "mnemonic": ""
        },
        { 
          "id": 4, 
          "front": "Rivers of India", 
          "back": "Life-lines of India like the Ganga, Narmada, and Kaveri that provide water for agriculture.",
          "details": "Major Rivers by Length: Ganga > Godavari > Krishna > Yamuna > Narmada. \n**Ganga** is the longest. **Godavari** is known as 'Dakshin Ganga'.",
          "mnemonic": "Go Big And Catch Fast Kittens (Ganga, Brahmaputra, And(Mahanadi), Cauvery, Fast(Godavari), Krishna)"
        }
      ]
    },

    "unit_4": {
      "title": "मध्यप्रदेश का भूगोल",
      "title_en": "Geography of Madhya Pradesh",
      "topics": [
          {
              "id": 1,
              "front": "म.प्र. के वन एवं नदियाँ",
              "back": "नर्मदा, ताप्ती, चम्बल और यहाँ के घने जंगल।",
              "details": "नर्मदा (मप्र की जीवन रेखा) - 1312 km. चम्बल - बीहड़ (Ravines) के लिए प्रसिद्ध। \nवन: सागौन (Teak) और साल के वृक्ष प्रमुख हैं।",
              "mnemonic": "Narmada: Amarkantak se nikli"
          },
          {
              "id": 2,
              "front": "म.प्र. की जलवायु",
              "back": "उष्णकटिबंधीय मानसूनी जलवायु - मालवा की जलवायु सर्वश्रेष्ठ मानी जाती है।",
              "details": "फाहियान ने मालवा की जलवायु को 'विश्व की सर्वश्रेष्ठ जलवायु' कहा था।",
              "mnemonic": ""
          },
          {
              "id": 3,
              "front": "खनिज संप्रदा",
              "back": "हीरा (पन्ना), तांबा (मलाजखंड), मैंगनीज (भरवेली)।",
              "details": "मप्र भारत में हीरे का एकमात्र उत्पादक राज्य है।",
              "mnemonic": ""
          },
           {
              "id": 4,
              "front": "सिंचाई एवं विद्युत परियोजनाएँ",
              "back": "इंदिरा सागर, गांधी सागर, बाणसागर।",
              "details": "नर्मदा घाटी परियोजना सबसे बड़ी है। गांधी सागर चम्बल नदी पर स्थित है।",
              "mnemonic": ""
          }
      ],
      "topics_en": [
          {
              "id": 1,
              "front": "Forests & Rivers of MP",
              "back": "Narmada, Tapti, Chambal and the dense forests.",
              "details": "Narmada (Lifeline of MP) - 1312 km. Chambal creates ravines.\nMP has the largest forest cover in India by area.",
              "mnemonic": ""
          },
          {
              "id": 2,
              "front": "Climate of MP",
              "back": "Tropical Monsoon Climate - Malwa climate is considered the best.",
              "details": "Chinese traveler Fa-Hien called Malwa's climate the 'Best in the World'.",
              "mnemonic": ""
          },
          {
              "id": 3,
              "front": "Mineral Resources",
              "back": "Diamond (Panna), Copper (Malajkhand), Manganese (Bharveli).",
              "details": "MP is the only diamond producing state in India.",
              "mnemonic": ""
          },
           {
              "id": 4,
              "front": "Irrigation & Power Projects",
              "back": "Indira Sagar, Gandhi Sagar, Bansagar Dams.",
              "details": "Narmada Valley Project is the largest. Gandhi Sagar is on Chambal.",
              "mnemonic": ""
          }
      ]
    },

    "unit_5": {
      "title": "भारत एवं मध्यप्रदेश की संवैधानिक व्यवस्था",
      "title_en": "Constitutional System of India and MP",
      "topics": [
          {
              "id": 1,
              "front": "भारत का संविधान",
              "back": "संविधान सभा, प्रस्तावना, और मौलिक अधिकार।",
              "details": "प्रारूप समिति के अध्यक्ष डॉ. अम्बेडकर थे। 26 जनवरी 1950 को लागू हुआ।",
              "mnemonic": "P-R-E-A-M-B-L-E (Sovereign Socialist Secular Democratic Republic)"
          },
          {
              "id": 2,
              "front": "म.प्र. की संवैधानिक व्यवस्था",
              "back": "राज्यपाल, विधानसभा और उच्च न्यायालय।",
              "details": "विधानसभा सीट: 230. लोकसभा: 29. राज्यसभा: 11.",
              "mnemonic": ""
          },
          {
              "id": 3,
              "front": "त्रि-स्तरीय पंचायती राज",
              "back": "73वां और 74वां संविधान संशोधन।",
              "details": "बलवंत राय मेहता समिति ने त्रि-स्तरीय व्यवस्था की सिफारिश की थी।",
              "mnemonic": "B-A-G (Balwant, Ashok, GVK Rao - Committees)"
          }
      ],
      "topics_en": [
           {
              "id": 1,
              "front": "Constitution of India",
              "back": "Constituent Assembly, Preamble, and Fundamental Rights.",
              "details": "Adopted on 26 Nov 1949, Enacted on 26 Jan 1950. Dr. Ambedkar was head of Drafting Committee.",
              "mnemonic": "TEARS OF OLD PM (Schedules of Constitution)"
          },
          {
              "id": 2,
              "front": "Political System of MP",
              "back": "Governor, Legislative Assembly, High Court.",
              "details": "Vidhan Sabha Seats: 230. Lok Sabha: 29. Rajya Sabha: 11.",
              "mnemonic": ""
          },
           {
              "id": 3,
              "front": "Panchayati Raj",
              "back": "73rd and 74th Constitutional Amendments.",
              "details": "Balwant Rai Mehta committee recommended the 3-tier system.",
              "mnemonic": "B-A-G (Balwant, Ashok, GVK Rao - Committees)"
          }
      ]
    },

    "unit_6": {
      "title": "भारत एवं मध्यप्रदेश की अर्थव्यवस्था",
      "title_en": "Economy of India and MP",
      "topics": [
          {
              "id": 1,
              "front": "भारतीय अर्थव्यवस्था",
              "back": "कृषि, उद्योग और सेवा क्षेत्र। RBI और बैंकिंग।",
              "details": "नीति आयोग (2015) ने योजना आयोग का स्थान लिया।",
              "mnemonic": ""
          },
          {
              "id": 2,
              "front": "म.प्र. की अर्थव्यवस्था",
              "back": "कृषि प्रधान राज्य - सोयाबीन और गेहूं उत्पादन।",
              "details": "MP को 'सोया प्रदेश' कहा जाता है।",
              "mnemonic": ""
          },
           {
              "id": 3,
              "front": "जनगणना 2011",
              "back": "जनसंख्या, साक्षरता और लिंगानुपात के आँकड़े।",
              "details": "भारत का लिंगानुपात: 943. MP का लिंगानुपात: 931.",
              "mnemonic": ""
          }
      ],
      "topics_en": [
           {
              "id": 1,
              "front": "Indian Economy",
              "back": "Agriculture, Industry, Services. RBI and Banking Role.",
              "details": "NITI Aayog (2015) replaced the Planning Commission. GST introduced in 2017.",
              "mnemonic": ""
          },
          {
              "id": 2,
              "front": "Economy of MP",
              "back": "Agrarian Economy - Major producer of Soyabean and Wheat.",
              "details": "MP is known as the 'Soya State'.",
              "mnemonic": ""
          },
          {
              "id": 3,
              "front": "Census 2011",
              "back": "Population, Literacy and Sex Ratio data.",
              "details": "India Sex Ratio: 943. MP Sex Ratio: 931.",
              "mnemonic": ""
          }
      ]
    },

    "unit_7": {
      "title": "विज्ञान, पर्यावरण एवं स्वास्थ्य",
      "title_en": "Science, Environment and Health",
      "topics": [
          {
              "id": 1,
              "front": "विज्ञान के मौलिक सिद्धांत",
              "back": "भौतिकी, रसायन और जीव विज्ञान के महत्वपूर्ण नियम।",
              "details": "न्यूटन के नियम, प्रकाश संश्लेषण, कोशिका संरचना।",
              "mnemonic": ""
          },
          {
              "id": 2,
              "front": "अंतरिक्ष विज्ञान (ISRO)",
              "back": "चंद्रयान, मंगलयान और प्रमुख वैज्ञानिक संस्थान।",
              "details": "ISRO की स्थापना 1969 में हुई। मुख्यालय: बेंगलुरु।",
              "mnemonic": ""
          },
          {
              "id": 3,
              "front": "मानव शरीर संरचना",
              "back": "पाचन, श्वसन, और तंत्रिका तंत्र।",
              "details": "शरीर की सबसे बड़ी हड्डी: फीमर। सबसे छोटी: स्टेप्स।",
              "mnemonic": ""
          },
          {
              "id": 4,
              "front": "पोषण और स्वास्थ्य",
              "back": "विटामिन, प्रोटीन और प्रमुख रोग।",
              "details": "विटामिन A (रतौंधी), B (बेरीबेरी), C (स्कर्वी), D (रिकेट्स)।",
              "mnemonic": "Rath Ek Toffee (Retinol, Thiamine, Ascorbic, Calciferol...)"
          }
      ],
      "topics_en": [
          {
              "id": 1,
              "front": "Basic Principles of Science",
              "back": "Fundamental laws of Physics, Chemistry and Biology.",
              "details": "Newton's laws, Photosynthesis, Cell structure.",
              "mnemonic": ""
          },
          {
              "id": 2,
              "front": "Space Tech (ISRO)",
              "back": "Chandrayaan, Mangalyaan and Scientific Institutes.",
              "details": "ISRO Est: 1969. HQ: Bengaluru. Father of Indian Space: Vikram Sarabhai.",
              "mnemonic": ""
          },
           {
              "id": 3,
              "front": "Human Body",
              "back": "Digestive, Respiratory, and Nervous Systems.",
              "details": "Largest bone: Femur. Smallest: Stapes.",
              "mnemonic": ""
          },
          {
              "id": 4,
              "front": "Nutrition & Health",
              "back": "Vitamins, Proteins, and Diseases.",
              "details": "Vit A (Night Blindness), B (Beri-Beri), C (Scurvy), D (Rickets).",
              "mnemonic": ""
          }
      ]
    },

    "unit_8": {
      "title": "अंतर्राष्ट्रीय, राष्ट्रीय एवं म.प्र. की समसामयिक घटनाएँ",
      "title_en": "Current Affairs (Intl, National, MP)",
      "topics": [
         {
             "id": 1,
             "front": "प्रमुख खेल संस्थाएं",
             "back": "ओलंपिक, राष्ट्रमंडल खेल, एशियाई खेल।",
             "details": "MP की खेल नीति और प्रमुख स्टेडियम।",
             "mnemonic": ""
         },
         {
             "id": 2,
             "front": "पुरस्कार एवं सम्मान",
             "back": "पद्म पुरस्कार, खेल रत्न, और नोबेल पुरस्कार।",
             "details": "करंट अफेयर्स के अनुसार अपडेट करें।",
             "mnemonic": ""
         }
      ],
      "topics_en": [
          {
             "id": 1,
             "front": "Major Sports Institutes",
             "back": "Olympics, Commonwealth, Asian Games.",
             "details": "MP Sports Policy and major Stadiums (Holkar, Roop Singh).",
             "mnemonic": ""
         },
         {
             "id": 2,
             "front": "Awards & Honours",
             "back": "Padma Awards, Khel Ratna, Nobel Prize.",
             "details": "Keep updated with latest year winners.",
             "mnemonic": ""
         }
      ]
    },

    "unit_9": {
      "title": "सूचना एवं संचार प्रौद्योगिकी",
      "title_en": "Information and Communication Technology",
      "topics": [
          {
              "id": 1,
              "front": "इलेक्ट्रॉनिक्स & रोबोटिक्स",
              "back": "AI, रोबोटिक्स और नैनो टेक्नोलॉजी।",
              "details": "कृत्रिम बुद्धिमत्ता (AI) के जनक: जॉन मैकार्थी।",
              "mnemonic": ""
          },
           {
              "id": 2,
              "front": "साइबर सिक्योरिटी",
              "back": "हैकिंग, वायरस, फायरवॉल और सुरक्षा।",
              "details": "फिशिंग (Phishing) एक प्रकार का साइबर हमला है।",
              "mnemonic": ""
          },
          {
              "id": 3,
              "front": "ई-गवर्नेंस",
              "back": "सरकार द्वारा डिजिटल सेवाओं का उपयोग।",
              "details": "डिजिटल इंडिया कार्यक्रम।",
              "mnemonic": ""
          }
      ],
      "topics_en": [
          {
              "id": 1,
              "front": "Electronics & Robotics",
              "back": "AI, Robotics, and Nano-technology.",
              "details": "Father of AI: John McCarthy. Robotics laws by Isaac Asimov.",
              "mnemonic": ""
          },
          {
              "id": 2,
              "front": "Cyber Security",
              "back": "Hacking, Viruses, Firewalls.",
              "details": "Phishing, Spoofing, Malware concepts.",
              "mnemonic": ""
          },
          {
              "id": 3,
              "front": "E-Governance",
              "back": "Digital delivery of government services.",
              "details": "Digital India initiatives, MyGov app.",
              "mnemonic": ""
          }
      ]
    },

    "unit_10": {
       "title": "मध्यप्रदेश की जनजातियाँ",
       "title_en": "Tribes of Madhya Pradesh",
       "topics": [
         { 
           "id": 1, 
           "front": "म.प्र. की प्रमुख जनजातियाँ", 
           "back": "भील, गोंड, कोल - उनका भौगोलिक वितरण।",
           "details": "भील (पश्चिमी एमपी), गोंड (नर्मदा घाटी/सतपुड़ा), कोल (रीवा/सीधी)।",
           "mnemonic": ""
         },
          { 
           "id": 2, 
           "front": "विशेष पिछड़ी जनजातियाँ (PVTG)", 
           "back": "बैगा, भारिया और सहरिया जैसी वो जनजातियाँ जिन्हें विशेष मदद और सुरक्षा की ज़रूरत है।",
           "details": "मध्य प्रदेश में 3 विशेष पिछड़ी जनजातियाँ (PVTG) हैं: \n1. **बैगा (Baiga)**: मंडला, बालाघाट (चक) . \n2. **भारिया (Bharia)**: पातालकोट (छिंदवाड़ा). \n3. **सहरिया (Sahariya)**: शिवपुरी, गुना, ग्वालियर.",
           "mnemonic": "भा-बै-स (भारिया, बैगा, सहरिया) - 'Bha-Bai-Sa'"
         },
          { 
           "id": 3, 
           "front": "जनजातीय संस्कृति", 
           "back": "विवाह प्रथाएं, त्यौहार और नृत्य।",
           "details": "भगोरिया (भील), कर्मा (गोंड/बैगा)।",
           "mnemonic": ""
         }
       ],
       "topics_en": [
          { 
           "id": 1, 
           "front": "Major Tribes of MP", 
           "back": "Bhil, Gond, Kol - their geographical distribution.",
           "details": "Bhil (West MP), Gond (Narmada Valley), Kol (Rewa/Sidhi).",
           "mnemonic": ""
         },
         { 
           "id": 2, 
           "front": "Particularly Vulnerable Tribal Groups (PVTG)", 
           "back": "Special focus on the Baiga, Bharia, and Sahariya tribes who need extra protection and care.",
            "details": "MP has 3 PVTGs: \n1. **Baiga**: Mandla/Balaghat (Known for Shifting cultivation 'Bewar'). \n2. **Bharia**: Patalkot (Chhindwara) - Isolated valley. \n3. **Sahariya**: Shivpuri/Gwalior - Most malnourished.",
           "mnemonic": "B-B-S: Big Bears Sleep (Baiga, Bharia, Sahariya)"
         },
          { 
           "id": 3, 
           "front": "Tribal Culture", 
           "back": "Marriage customs, Festivals, and Dances.",
           "details": "Bhagoria (Bhil), Karma (Gond/Baiga).",
           "mnemonic": ""
         }
       ]
    }
  }
};
