export interface Topic {
  id: number;
  front: string;
  back: string;
  details?: string;
  mnemonic?: string;
}

export interface UnitData {
  title: string;
  title_en?: string;
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
      "title": "भारत का इतिहास",
      "title_en": "History of India",
      "topics": [
        { 
          "id": 1, 
          "front": "प्राचीन भारतीय ज्ञान परंपरा", 
          "back": "यह हमारे पूर्वजों की सोचने की शक्ति और विज्ञान है, जहाँ शिक्षा सिर्फ किताबी नहीं बल्कि जीवन जीने का तरीका थी।",
          "details": "प्राचीन भारतीय ज्ञान परंपरा जीवन के हर पहलू को शामिल करती है। इसमें धर्म, अर्थ, काम, और मोक्ष (पुरुषार्थ) का संतुलन सिखाया जाता है। यह परंपरा केवल अनुष्ठानों तक सीमित नहीं थी, बल्कि इसमें खगोल विज्ञान, गणित (शून्य का आविष्कार), और चिकित्सा (आयुर्वेद) जैसे उन्नत विज्ञान भी शामिल थे।",
          "mnemonic": "ध-अ-का-मो (धर्म, अर्थ, काम, मोक्ष)"
        },
        { 
          "id": 2, 
          "front": "सिंधु घाटी सभ्यता", 
          "back": "भारत की पहली नगरीय सभ्यता जो अपने पक्के मकानों, नालियों और व्यापार के लिए प्रसिद्ध थी।",
          "details": "हड़प्पा और मोहनजोदड़ो प्रमुख शहर थे। इनकी नगर नियोजन व्यवस्था आज भी मिसाल है।",
          "mnemonic": "Ha-Mo-Lo-Ka (Harappa, Mohenjodaro, Lothal, Kalibangan)"
        },
        { 
          "id": 3, 
          "front": "वेद", 
          "back": "दुनिया का सबसे पुराना ज्ञान का भंडार (ऋग्वेद, सामवेद, यजुर्वेद, अथर्ववेद) जिसमें ब्रह्मांड के रहस्य छुपे हैं।",
          "details": "वेद 'विद' धातु से बना है जिसका अर्थ है 'जानना'। \n1. **ऋग्वेद**: देवताओं की स्तुति (सबसे पुराना)। \n2. **सामवेद**: संगीत और गायन (भारतीय संगीत का जनक)। \n3. **यजुर्वेद**: यज्ञ और कर्मकांड। \n4. **अथर्ववेद**: चिकित्सा, जादू-टोना और वशीकरण।",
          "mnemonic": "R-Y-S-A (Rig, Yajur, Sama, Atharva) - 'Remember Your Smart Abilities'"
        },
        { 
           "id": 4, 
           "front": "मौर्य साम्राज्य", 
           "back": "चंद्रगुप्त मौर्य और चाणक्य की जोड़ी जिसने भारत को पहली बार एक राजनीतिक सूत्र में पिरोया।",
           "details": "अशोक का धम्म और कलिंग युद्ध इस काल की प्रमुख घटनाएं हैं।",
           "mnemonic": ""
        },
        { 
           "id": 5, 
           "front": "गुप्त काल", 
           "back": "भारतीय इतिहास का 'स्वर्ण युग' - कला, विज्ञान और साहित्य का अभूतपूर्व विकास।",
           "details": "कालिदास, आर्यभट्ट और वराहमिहिर इसी काल के नवरत्न थे।",
           "mnemonic": ""
        },
        { 
           "id": 6, 
           "front": "मुगल काल & मराठा", 
           "back": "बाबर से औरंगजेब तक का सफर और शिवाजी महाराज का स्वराज।",
           "details": "पानीपत के युद्ध और स्थापित कला (ताजमहल, लाल किला) महत्वपूर्ण हैं।",
           "mnemonic": "B-H-A-J-S-A (Babur, Humayun, Akbar, Jahangir, ShahJahan, Aurangzeb)"
        },
        { 
           "id": 7, 
           "front": "षड्दर्शन", 
           "back": "भारतीय दर्शन के 6 स्कूल (सांख्य, योग, न्याय, वैशेषिक, मीमांसा, वेदांत) जो सत्य को खोजने के अलग रास्ते बताते हैं।",
           "details": "ये 6 आस्तिक दर्शन हैं जो वेदों को मानते हैं। \n- **सांख्य (कपिल मुनि)**: प्रकृति और पुरुष का द्वैत।\n- **योग (पतंजलि)**: मानसिक अनुशासन।\n- **न्याय (गौतम)**: तर्कशास्त्र।\n- **वैशेषिक (कणाद)**: परमाणुवाद।\n- **मीमांसा (जैमिनी)**: कर्मकांड।\n- **वेदांत (बादरायण)**: ज्ञानकांड।",
           "mnemonic": "न्या-वै-सां-यो-मी-वे (न्याय, वैशेषिक, सांख्य, योग, मीमांसा, वेदांत)" 
        },
         {
          "id": 8,
          "front": "स्वतंत्रता संग्राम",
          "back": "1857 की क्रांति से लेकर 1947 की आजादी तक का संघर्ष।",
          "details": "गांधी युग, असहयोग आंदोलन, और भारत छोड़ो आंदोलन।",
          "mnemonic": ""
        }
      ],
      "topics_en": [
        { 
          "id": 1, 
          "front": "Ancient Indian Knowledge Tradition", 
          "back": "The foundational wisdom of our ancestors where science, logic, and spirituality were taught as a unified way of life.",
           "details": "This tradition encompasses the four Purusharthas: Dharma (Duty), Artha (Wealth), Kama (Desire), and Moksha (Liberation). It wasn't just religious but scientific, giving the world concepts like Zero (Aryabhata), Surgery (Sushruta), and Yoga.",
           "mnemonic": "D-A-K-M (Dharma, Artha, Kama, Moksha)"
        },
        { 
          "id": 2, 
          "front": "Indus Valley Civilization", 
          "back": "India's first urban civilization known for its planned cities, drainage systems, and trade.",
          "details": "Major sites: Harappa, Mohenjo-daro. Known for grid patterns and bronze dancing girl.",
          "mnemonic": "Ha-Mo-Lo-Ka (Harappa, Mohenjodaro, Lothal, Kalibangan)"
        },
        { 
          "id": 3, 
          "front": "Vedas", 
          "back": "The world's oldest 'knowledge library' (Rigveda, Samaveda, Yajurveda, Atharvaveda) containing the secrets of the universe.",
          "details": "The word Veda comes from root 'Vid' (to know). \n- **Rigveda**: Hymns (Oldest). \n- **Samaveda**: Melodies (Origins of Music). \n- **Yajurveda**: Rituals & Sacrifices. \n- **Atharvaveda**: Spells & Medicine.",
          "mnemonic": "RYSA: Remember Your Smart Abilities (Rig, Yajur, Sama, Atharva)"
        },
        { 
           "id": 4, 
           "front": "Maurya Empire", 
           "back": "Chandragupta and Chanakya's alliance that politically unified India for the first time.",
           "details": "Ashoka's Dhamma and the Kalinga War changed the course of history.",
           "mnemonic": ""
        },
         { 
           "id": 5, 
           "front": "Gupta Period", 
           "back": "The 'Golden Age' of Indian history - witnessing peak advancements in art, science, and literature.",
           "details": "Key figures: Kalidasa (Literature), Aryabhata (Math/Astronomy).",
           "mnemonic": ""
        },
         { 
           "id": 6, 
           "front": "Mughals & Marathas", 
           "back": "From Babur to Aurangzeb, and the rise of Maratha Swarajya under Shivaji.",
           "details": "Focus on administration (Mansabdari) and battles (Panipat).",
           "mnemonic": "B-H-A-J-S-A (Babur, Humayun, Akbar, Jahangir, ShahJahan, Aurangzeb)"
        },
        { 
           "id": 7, 
           "front": "Shaddarshan", 
           "back": "The 6 schools of Indian Philosophy (Sankhya, Yoga, Nyaya, Vaisheshika, Mimamsa, Vedanta) offering different paths to Truth.",
           "details": "The six orthodox schools: \n1. **Nyaya (Gautama)**: Logic. \n2. **Vaisheshika (Kanada)**: Atomism. \n3. **Samkhya (Kapila)**: Dualism. \n4. **Yoga (Patanjali)**: Discipline. \n5. **Mimamsa (Jaimini)**: Rituals. \n6. **Vedanta (Badarayana)**: Conclusion of Vedas.",
           "mnemonic": "Nice Violets Smell Yummy, Making Very nice Parfait (Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta)"
        },
        {
          "id": 8,
          "front": "Freedom Struggle",
          "back": "The long fight for independence from 1857 revolt to 1947.",
          "details": "Gandhian Era, Non-Cooperation, Civil Disobedience, Quit India Movement.",
          "mnemonic": ""
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
