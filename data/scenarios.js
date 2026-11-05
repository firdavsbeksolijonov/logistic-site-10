/* Dispatcher Academy — Interactive Scenarios
   Static data file: loaded via <script src="data/scenarios.js">
   Each scenario is a realistic dispatcher decision-making situation.
   2-3 scenarios per chapter, 24 total. */

var scenariosData = [

  // ===== CHAPTER 1: Introduction to Logistics =====
  {
    id: "s1_1",
    chapter: 1,
    situation_uz: "Sizning kompaniyangiz yangi mijoz bilan shartnoma tuzmoqchi. Mijoz Teksasdan Kaliforniyaga har hafta 20 ta palet muzlatilgan mahsulot jo'natishni xohlaydi. Mijoz \"logistika kompaniyasi\" va \"carrier\" o'rtasidagi farqni tushunmaydi. Siz qanday tushuntirasiz?",
    situation_en: "Your company is about to sign a contract with a new client. The client wants to ship 20 pallets of frozen goods weekly from Texas to California. The client doesn't understand the difference between a 'logistics company' and a 'carrier.' How do you explain it?",
    options: [
      {
        text_uz: "Logistika kompaniyasi faqat yuk tashiydi, carrier esa faqat ombor xizmatini ko'rsatadi",
        text_en: "A logistics company only transports freight, while a carrier only provides warehousing",
        is_correct: false,
        explanation_uz: "Bu noto'g'ri. Carrier — bu yuk tashuvchi, logistika kompaniyasi esa butun ta'minot zanjirini boshqaradi.",
        explanation_en: "Incorrect. A carrier transports freight, while a logistics company manages the entire supply chain."
      },
      {
        text_uz: "Carrier — yuk tashuvchi, ya'ni transport bilan bevosita shug'ullanadi. Logistika kompaniyasi esa butun ta'minot zanjirini — transportni, omborni, rejalashtirish va muvofiqlashtirishni boshqaradi",
        text_en: "A carrier is the transporter — they handle the physical movement of freight. A logistics company manages the entire supply chain — transport, warehousing, planning, and coordination",
        is_correct: true,
        explanation_uz: "To'g'ri! Carrier yuk tashish bilan bevosita shug'ullanadi (masalan, o'z yuk mashinalari bilan), logistika kompaniyasi esa keng ko'lamli xizmatlar — ombor, transport rejalashtirish, hujjatlar va muvofiqlashtirishni o'z ichiga oladi.",
        explanation_en: "Correct! A carrier physically moves freight (e.g., with their own trucks), while a logistics company provides broader services — warehousing, transport planning, documentation, and coordination."
      },
      {
        text_uz: "Ular bir xil narsa — ikkalasi ham yuk tashiydi",
        text_en: "They are the same thing — both transport freight",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Carrier va logistika kompaniyasi farqli tushunchalar. Carrier faqat transport, logistika esa keng ko'lamli boshqaruv.",
        explanation_en: "Incorrect. A carrier and a logistics company are different concepts. A carrier handles transport only, while logistics involves broader management."
      }
    ],
    correct_index: 1
  },
  {
    id: "s1_2",
    chapter: 1,
    situation_uz: "Yangi dispatcher sifatida sizga 3PL (Third-Party Logistics) kompaniyasi bilan ishlash taklif qilindi. Sizning brokeringiz uchun 3PL bilan ishlashning asosiy afzalligi nimada?",
    situation_en: "As a new dispatcher, you've been offered a partnership with a 3PL (Third-Party Logistics) company. What is the main advantage of working with a 3PL for your brokerage?",
    options: [
      {
        text_uz: "3PL kompaniyasi sizga bepul yuk mashinalar beradi",
        text_en: "A 3PL company gives you free trucks",
        is_correct: false,
        explanation_uz: "Noto'g'ri. 3PL o'z transport vositalarini bermaydi — ular logistika xizmatlarini tashkillashtiradi.",
        explanation_en: "Incorrect. A 3PL doesn't provide their own trucks — they organize logistics services."
      },
      {
        text_uz: "3PL ombor, transport va boshqaruv xizmatlarini birgalikda taqdim etadi, bu esa mijozlarga yagona nuqtadan xizmat ko'rsatish imkonini beradi",
        text_en: "A 3PL offers warehousing, transport, and management services together, allowing clients to get full service from a single point of contact",
        is_correct: true,
        explanation_uz: "To'g'ri! 3PL kompaniyalari transport, ombor, inventar boshqaruvi va hujjatlarni bir joydan boshqaradi. Bu mijozlar uchun qulaylik yaratadi va dispatcherlar uchun ko'proq yuk topish imkonini beradi.",
        explanation_en: "Correct! 3PL companies manage transport, warehousing, inventory management, and documentation from one place. This creates convenience for clients and more load opportunities for dispatchers."
      },
      {
        text_uz: "3PL faqat xalqaro yuklarni boshqaradi",
        text_en: "A 3PL only manages international shipments",
        is_correct: false,
        explanation_uz: "Noto'g'ri. 3PL kompaniyalari ichki va xalqaro yuklarni boshqaradi.",
        explanation_en: "Incorrect. 3PL companies manage both domestic and international shipments."
      }
    ],
    correct_index: 1
  },

  // ===== CHAPTER 2: Stakeholders in Trucking =====
  {
    id: "s2_1",
    chapter: 2,
    situation_uz: "Siz yangi yukni DAT load boarddan topdingiz. Yuk egasi sifatida shipper ko'rsatilgan. Ammo telefon qilganingizda, siz bilan gaplashayotgan odam aslida broker ekanini tushundingiz. Bu vaziyatda nima qilasiz?",
    situation_en: "You found a new load on the DAT load board. The load owner is listed as a shipper. But when you call, you realize the person is actually a broker. What do you do in this situation?",
    options: [
      {
        text_uz: "Hech narsa qilmasdan yukni qabul qilasiz — farqi yo'q, shipper yoki broker",
        text_en: "Accept the load without any action — it doesn't matter whether it's a shipper or broker",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Shipper va broker bilan ishlash farqli shartlarga ega. Brokerning MC raqamini tekshirish va to'lov shartlarini aniqlashtirish kerak.",
        explanation_en: "Incorrect. Working with a shipper vs. a broker involves different terms. You need to verify the broker's MC number and clarify payment terms."
      },
      {
        text_uz: "Brokerning MC raqamini FMCSA saytidan tekshirasiz, kredit reytingini ko'rasiz va to'lov shartlarini (30, 60 kun yoki quick pay) aniqlashtirganingizdan keyin qaror qilasiz",
        text_en: "Verify the broker's MC number on the FMCSA website, check their credit rating, and clarify payment terms (30, 60 days, or quick pay) before making a decision",
        is_correct: true,
        explanation_uz: "To'g'ri! Broker bilan ishlashda ularning FMCSA litsenziyasini, kredit tarixini (Carrier411, TransCredit orqali) va to'lov shartlarini tekshirish muhim. Bu sizni to'lov muammolaridan himoya qiladi.",
        explanation_en: "Correct! When working with a broker, it's crucial to verify their FMCSA license, credit history (via Carrier411, TransCredit), and payment terms. This protects you from payment issues."
      },
      {
        text_uz: "Darhol rad etasiz — dispatcherlar faqat to'g'ridan-to'g'ri shipper bilan ishlashi kerak",
        text_en: "Immediately decline — dispatchers should only work directly with shippers",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Dispatcherlar brokerlar bilan ham ishlaydi. Ko'plab yuklar brokerlar orqali topiladi. Muhimi — ishonchli brokerni tanlash.",
        explanation_en: "Incorrect. Dispatchers work with brokers too. Many loads are found through brokers. The key is selecting reliable ones."
      }
    ],
    correct_index: 1
  },
  {
    id: "s2_2",
    chapter: 2,
    situation_uz: "Haydovchingiz yukni yetkazib berdi, lekin consignee (qabul qiluvchi) yukda nuqson borligini aytib, BOL (Bill of Lading) ga 'damaged' deb yozdi. Dispatcher sifatida keyingi qadamingiz nima?",
    situation_en: "Your driver delivered a load, but the consignee noted 'damaged' on the BOL (Bill of Lading), claiming the freight was damaged. As a dispatcher, what is your next step?",
    options: [
      {
        text_uz: "Haydovchidan zararni o'z cho'ntagidan to'lashni so'rang",
        text_en: "Ask the driver to pay for the damage out of pocket",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Zarar uchun haydovchini shaxsan javobgar qilish to'g'ri emas. Buning uchun sug'urta va rasmiy da'vo jarayoni mavjud.",
        explanation_en: "Incorrect. Holding the driver personally liable is not the right approach. There are insurance and formal claims processes for this."
      },
      {
        text_uz: "Haydovchidan zararning fotosuratlarini olishni so'rang, BOL nusxasini saqlang, carrier kompaniyaning cargo insurance'iga xabar bering va shipper/brokerga yozma bildirishnoma yuboring",
        text_en: "Ask the driver to take photos of the damage, keep a copy of the BOL, notify the carrier's cargo insurance, and send written notice to the shipper/broker",
        is_correct: true,
        explanation_uz: "To'g'ri! Cargo claim jarayoni: 1) Zararni hujjatlashtirish (foto, BOL), 2) Cargo sug'urtaga xabar berish, 3) Shipper/brokerga yozma bildirishnoma. Tez va to'g'ri hujjatlashtirish — muvaffaqiyatli claim'ning kaliti.",
        explanation_en: "Correct! The cargo claim process: 1) Document the damage (photos, BOL), 2) Notify cargo insurance, 3) Written notice to shipper/broker. Quick and proper documentation is the key to a successful claim."
      },
      {
        text_uz: "Yukni tashlab keting va keyingi yukka o'ting",
        text_en: "Leave the load and move on to the next one",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Zararni e'tiborsiz qoldirish carrier kompaniyaga moliyaviy va obro' jihatidan katta zarar keltirishi mumkin.",
        explanation_en: "Incorrect. Ignoring damage can cause significant financial and reputational harm to the carrier company."
      }
    ],
    correct_index: 1
  },

  // ===== CHAPTER 3: Truck Drivers and Their Operations =====
  {
    id: "s3_1",
    chapter: 3,
    situation_uz: "Haydovchingiz bugun ertalab 6:00 da haydashni boshladi. Hozir soat 16:00 (10 soat o'tdi). U sizga qo'ng'iroq qilib, yana 2 soat haydashni xohlayotganini aytdi. FMCSA HOS qoidalariga ko'ra, u davom eta oladimi?",
    situation_en: "Your driver started driving at 6:00 AM today. It is now 4:00 PM (10 hours have passed). He calls you wanting to drive 2 more hours. According to FMCSA HOS rules, can he continue?",
    options: [
      {
        text_uz: "Ha, u 14 soatgacha haydashi mumkin",
        text_en: "Yes, he can drive up to 14 hours",
        is_correct: false,
        explanation_uz: "Noto'g'ri. 14-soat qoidasi — bu ish kunining umumiy davomiyligi (on-duty vaqti), haydash vaqti emas. Haydash chegarasi 11 soat.",
        explanation_en: "Incorrect. The 14-hour rule is about the total work window (on-duty time), not driving time. The driving limit is 11 hours."
      },
      {
        text_uz: "Ha, u yana 1 soat haydashi mumkin — FMCSA 11-soat haydash limitiga ko'ra jami 11 soat hayday oladi",
        text_en: "Yes, he can drive 1 more hour — FMCSA allows 11 hours of driving total under the 11-hour rule",
        is_correct: true,
        explanation_uz: "To'g'ri! FMCSA 11-Hour Driving Limit qoidasiga ko'ra, haydovchi 10 soat uzluksiz dam olgandan keyin maksimum 11 soat haydashi mumkin. U 10 soat haydagan, shuning uchun yana faqat 1 soat qolgan, 2 soat emas.",
        explanation_en: "Correct! Under the FMCSA 11-Hour Driving Limit, a driver can drive a maximum of 11 hours after 10 consecutive hours off duty. He has driven 10 hours, so only 1 hour remains, not 2."
      },
      {
        text_uz: "Yo'q, u darhol to'xtashi kerak — 10 soat haydash chegarasi",
        text_en: "No, he must stop immediately — the driving limit is 10 hours",
        is_correct: false,
        explanation_uz: "Noto'g'ri. FMCSA haydash chegarasi 10 emas, 11 soat. Haydovchi yana 1 soat haydashi mumkin.",
        explanation_en: "Incorrect. The FMCSA driving limit is 11 hours, not 10. The driver can still drive 1 more hour."
      }
    ],
    correct_index: 1
  },
  {
    id: "s3_2",
    chapter: 3,
    situation_uz: "Yangi haydovchingiz Owner-Operator (O/O) sifatida ishlaydi. U sizdan OTR (Over-the-Road) va regional haydash o'rtasidagi farqni so'radi. Sizning javobingiz?",
    situation_en: "Your new driver works as an Owner-Operator (O/O). He asks you about the difference between OTR (Over-the-Road) and regional driving. Your answer?",
    options: [
      {
        text_uz: "OTR — shahar ichida qisqa masofali yuk tashish, regional — shtatlar aro uzoq masofali yuk tashish",
        text_en: "OTR means short-distance city driving, regional means long-distance interstate hauling",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Bu tushunchalar teskari. OTR — uzoq masofa, regional — o'rta masofa, bir necha shtat doirasida.",
        explanation_en: "Incorrect. These concepts are reversed. OTR is long-distance, regional is mid-range within a few states."
      },
      {
        text_uz: "Ikkalasi ham bir xil — har ikkisi shtatlar aro yuk tashish",
        text_en: "They are the same — both are interstate trucking",
        is_correct: false,
        explanation_uz: "Noto'g'ri. OTR va regional farqli operatsion modellar. Ular masofa, uy qaytish chastotasi va yuk turlari bilan farqlanadi.",
        explanation_en: "Incorrect. OTR and regional are different operational models. They differ in distance, home time frequency, and load types."
      },
      {
        text_uz: "OTR — mamlakat bo'ylab uzoq masofali yuk tashish (ko'pincha 2-3 hafta yo'lda), regional — ma'lum bir hududda (500-700 mil radius) ishlash, haydovchi har hafta uyiga qaytadi",
        text_en: "OTR means long-haul trucking across the country (often 2-3 weeks on the road), regional means working within a specific area (500-700 mile radius) where the driver returns home weekly",
        is_correct: true,
        explanation_uz: "To'g'ri! OTR haydovchilari butun AQSh bo'ylab haydaydi va 2-3 hafta yo'lda bo'ladi. Regional haydovchilar 500-700 mil radiusda ishlaydi va odatda har hafta oxirida uyga qaytadi. O/O uchun bu tanlov — daromad va oilaviy hayot o'rtasidagi balans.",
        explanation_en: "Correct! OTR drivers travel across the entire US and are on the road for 2-3 weeks. Regional drivers work within a 500-700 mile radius and typically return home on weekends. For an O/O, this choice is about balancing income and family life."
      }
    ],
    correct_index: 2
  },
  {
    id: "s3_3",
    chapter: 3,
    situation_uz: "Haydovchingiz 30-daqiqalik majburiy tanaffusni olishni unutib, 9 soat uzluksiz haydab ketdi. ELD (Electronic Logging Device) bu qoidabuzarlikni qayd etdi. Qanday oqibatlar bo'lishi mumkin?",
    situation_en: "Your driver forgot to take the mandatory 30-minute break and drove 9 hours continuously. The ELD (Electronic Logging Device) recorded this violation. What consequences could follow?",
    options: [
      {
        text_uz: "Hech qanday oqibat yo'q — 30-daqiqalik tanaffus ixtiyoriy",
        text_en: "No consequences — the 30-minute break is optional",
        is_correct: false,
        explanation_uz: "Noto'g'ri. FMCSA qoidalariga ko'ra, 8 soat haydashdan keyin 30-daqiqalik tanaffus majburiy. Bu ixtiyoriy emas.",
        explanation_en: "Incorrect. Under FMCSA rules, a 30-minute break is mandatory after 8 hours of driving. It is not optional."
      },
      {
        text_uz: "Haydovchi va carrier kompaniyaga FMCSA jarimalari solinishi, CSA ballariga ta'sir qilishi va takrorlanishda haydovchi xizmatdan chetlatilishi mumkin",
        text_en: "The driver and carrier company may face FMCSA fines, CSA score impact, and the driver could be placed out of service for repeat violations",
        is_correct: true,
        explanation_uz: "To'g'ri! HOS qoidabuzarligi jiddiy oqibatlarga olib keladi: FMCSA jarimalari ($1,000-$16,000), carrier kompaniyaning CSA (Compliance, Safety, Accountability) balliga salbiy ta'sir, va takroriy buzilishlarda haydovchini out-of-service qo'yish.",
        explanation_en: "Correct! HOS violations lead to serious consequences: FMCSA fines ($1,000-$16,000), negative impact on the carrier's CSA (Compliance, Safety, Accountability) score, and the driver being placed out-of-service for repeat violations."
      },
      {
        text_uz: "Faqat haydovchiga og'zaki ogohlantirish beriladi",
        text_en: "The driver only receives a verbal warning",
        is_correct: false,
        explanation_uz: "Noto'g'ri. ELD yozuvlari FMCSA tomonidan tekshiriladi. Qoidabuzarlik rasmiy jarimalar va CSA balli oqibatlariga olib keladi, oddiy ogohlantirish bilan cheklanmaydi.",
        explanation_en: "Incorrect. ELD records are reviewed by FMCSA. Violations lead to formal fines and CSA score consequences, not just a warning."
      }
    ],
    correct_index: 1
  },

  // ===== CHAPTER 4: Fleet and Equipment =====
  {
    id: "s4_1",
    chapter: 4,
    situation_uz: "Mijozingiz 45,000 lbs og'irlikdagi qurilish materiallari jo'natmoqchi. Qaysi yuk mashinasi turini tavsiya qilasiz?",
    situation_en: "Your client needs to ship 45,000 lbs of construction materials. Which truck type do you recommend?",
    options: [
      {
        text_uz: "Straight truck (box truck) — qurilish materiallari uchun yetarli",
        text_en: "Straight truck (box truck) — sufficient for construction materials",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Straight truck odatda 10,000-26,000 lbs ko'taradi. 45,000 lbs uchun bu yetarli emas.",
        explanation_en: "Incorrect. A straight truck typically carries 10,000-26,000 lbs. It's not sufficient for 45,000 lbs."
      },
      {
        text_uz: "Semi-truck (Class 8, 18-wheeler) flatbed trayler bilan — og'ir qurilish materiallari uchun eng mos",
        text_en: "Semi-truck (Class 8, 18-wheeler) with a flatbed trailer — best suited for heavy construction materials",
        is_correct: true,
        explanation_uz: "To'g'ri! Class 8 semi-truck 80,000 lbs GVW (Gross Vehicle Weight) gacha ko'taradi. Flatbed trayler qurilish materiallari (yog'och, po'lat, beton) uchun ideal — yuklash/tushirish oson, kran bilan ishlash mumkin.",
        explanation_en: "Correct! A Class 8 semi-truck handles up to 80,000 lbs GVW (Gross Vehicle Weight). A flatbed trailer is ideal for construction materials (lumber, steel, concrete) — easy loading/unloading with crane access."
      },
      {
        text_uz: "Cargo van — tez yetkazib beradi",
        text_en: "Cargo van — delivers faster",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Cargo van maksimum 3,000-5,000 lbs ko'taradi. 45,000 lbs yuk uchun umuman mos kelmaydi.",
        explanation_en: "Incorrect. A cargo van carries a maximum of 3,000-5,000 lbs. It's completely unsuitable for a 45,000 lbs load."
      }
    ],
    correct_index: 1
  },
  {
    id: "s4_2",
    chapter: 4,
    situation_uz: "Haydovchingiz pre-trip inspeksiyada old shinasining protektori juda yeyilganini aniqladi. U yukni vaqtida yetkazish uchun haydashni davom ettirmoqchi. Siz nima deysiz?",
    situation_en: "During a pre-trip inspection, your driver found that a front tire's tread is severely worn. He wants to continue driving to deliver the load on time. What do you say?",
    options: [
      {
        text_uz: "Yuk muhim — sekin haydab boraversin",
        text_en: "The load is important — he can drive slowly",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Yeyilgan shina bilan haydash DOT qoidabuzarligi va xavfsizlik xavfi. Tezlik pasaytirish muammoni hal qilmaydi.",
        explanation_en: "Incorrect. Driving on a worn tire is a DOT violation and safety hazard. Reducing speed doesn't solve the problem."
      },
      {
        text_uz: "Darhol to'xtating — yeyilgan shina DOT talablariga javob bermaydi. Yaqin atrofdagi tire shop'dan shina almashtirish kerak, keyin yo'lga davom etsin",
        text_en: "Stop immediately — a worn tire doesn't meet DOT requirements. Replace the tire at a nearby tire shop, then continue the route",
        is_correct: true,
        explanation_uz: "To'g'ri! DOT qoidalariga ko'ra, old shinaning protektori kamida 4/32 dyuym bo'lishi kerak. Pre-trip inspeksiyada aniqlangan nosozlik darhol tuzatilishi shart. Xavfsizlik har doim birinchi o'rinda — yetkazib berish kechikishidan ko'ra xavfsizlik muhimroq.",
        explanation_en: "Correct! DOT rules require front tire tread to be at least 4/32 inch. Defects found during pre-trip inspection must be fixed immediately. Safety always comes first — it's more important than delivery deadlines."
      },
      {
        text_uz: "Keyingi manzilga yetgandan keyin almashtiradi",
        text_en: "He can replace it after reaching the next destination",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Pre-trip inspeksiyada topilgan xavfsizlik muammolari darhol hal qilinishi kerak. Davom etish qoidabuzarlik va baxtsiz hodisa xavfini oshiradi.",
        explanation_en: "Incorrect. Safety issues found during pre-trip inspection must be resolved immediately. Continuing increases the risk of a violation and accident."
      }
    ],
    correct_index: 1
  },

  // ===== CHAPTER 5: Trailers and Weight Balance =====
  {
    id: "s5_1",
    chapter: 5,
    situation_uz: "Haydovchingiz 53 futlik dry van traylerni yukladi. Umumiy og'irlik 82,000 lbs chiqdi. AQSh federal GVW (Gross Vehicle Weight) limiti 80,000 lbs. Nima qilasiz?",
    situation_en: "Your driver loaded a 53-foot dry van trailer. The total weight came out to 82,000 lbs. The US federal GVW (Gross Vehicle Weight) limit is 80,000 lbs. What do you do?",
    options: [
      {
        text_uz: "Haydab ketaversin — 2,000 lbs ortiqcha unchalik katta farq emas",
        text_en: "Just go ahead — 2,000 lbs over isn't that big of a difference",
        is_correct: false,
        explanation_uz: "Noto'g'ri! Overweight haydash jiddiy jarimalar ($1,000-$10,000+), haydovchining out-of-service qo'yilishi va carrier'ning CSA balliga salbiy ta'sir qiladi. Ko'prik va yo'llarni ham zararlaydi.",
        explanation_en: "Incorrect! Overweight driving leads to serious fines ($1,000-$10,000+), driver being placed out of service, and negative impact on the carrier's CSA score. It also damages bridges and roads."
      },
      {
        text_uz: "Yukni qayta taqsimlang yoki ortiqcha yukni olib tashlang — 80,000 lbs limitiga tushguncha",
        text_en: "Redistribute the load or remove excess freight — until it's within the 80,000 lbs limit",
        is_correct: true,
        explanation_uz: "To'g'ri! Federal limit 80,000 lbs (maxsus ruxsatsiz). Overweight yukni yo'lga chiqarish mumkin emas. Yechim: yukni qayta joylash, ortiqcha paletni tushirish yoki overweight permit olish (agar mavjud bo'lsa). Har doim CAT scale'da og'irlikni tekshiring.",
        explanation_en: "Correct! The federal limit is 80,000 lbs (without special permits). You can't send an overweight load on the road. Solutions: redistribute the load, remove excess pallets, or obtain an overweight permit (if available). Always verify weight at a CAT scale."
      },
      {
        text_uz: "Kechasi haydang — kechqurun weigh station'lar yopiq bo'ladi",
        text_en: "Drive at night — weigh stations are closed in the evening",
        is_correct: false,
        explanation_uz: "Noto'g'ri va noqonuniy! Ko'plab weigh station'lar 24/7 ishlaydi, va portable scale'lar bilan yo'l chetida tekshirish ham mumkin. Overweight haydash har qanday vaqtda aniqlansa jarima solinadi.",
        explanation_en: "Incorrect and illegal! Many weigh stations operate 24/7, and portable scales can be used for roadside inspections. Overweight driving incurs fines whenever detected."
      }
    ],
    correct_index: 1
  },
  {
    id: "s5_2",
    chapter: 5,
    situation_uz: "Mijozingiz haroratni nazorat qiladigan (temperature-controlled) yuk jo'natmoqchi — farmatsevtik mahsulotlar, 36°F-40°F orasida saqlash kerak. Qaysi trayler turini tanlaysiz?",
    situation_en: "Your client wants to ship temperature-controlled cargo — pharmaceutical products that must be stored between 36°F-40°F. Which trailer type do you choose?",
    options: [
      {
        text_uz: "Dry van — yopiq trayler, ichki harorat barqaror bo'ladi",
        text_en: "Dry van — enclosed trailer, internal temperature stays stable",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Dry van'da haroratni nazorat qilish tizimlari yo'q. Tashqi haroratga qarab ichki harorat o'zgaradi.",
        explanation_en: "Incorrect. A dry van has no temperature control systems. Internal temperature changes based on external weather."
      },
      {
        text_uz: "Reefer (refrigerated) trayler — aniq haroratni belgilash va nazorat qilish mumkin",
        text_en: "Reefer (refrigerated) trailer — allows setting and monitoring exact temperatures",
        is_correct: true,
        explanation_uz: "To'g'ri! Reefer trayler haroratni aniq nazorat qiladi. Farmatsevtik yuklar uchun continuous temperature monitoring va pulp temperature tekshiruvi talab qilinadi. Haydovchi haroratni muntazam kuzatib borishi kerak.",
        explanation_en: "Correct! A reefer trailer precisely controls temperature. Pharmaceutical cargo requires continuous temperature monitoring and pulp temperature checks. The driver must regularly monitor the temperature."
      },
      {
        text_uz: "Flatbed trayler ustiga tarpaulin yopib qo'yish kifoya",
        text_en: "A flatbed trailer covered with a tarpaulin is sufficient",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Flatbed trayler harorat nazorati mumkin emas. Farmatsevtik mahsulotlar uchun bu butunlay mos kelmaydi va FDA qoidalarini buzadi.",
        explanation_en: "Incorrect. A flatbed trailer cannot control temperature. This is completely unsuitable for pharmaceuticals and violates FDA regulations."
      }
    ],
    correct_index: 1
  },

  // ===== CHAPTER 6: Freight Types =====
  {
    id: "s6_1",
    chapter: 6,
    situation_uz: "Sizga LTL (Less-Than-Truckload) yuk taklif qilindi — 6 ta palet, jami 4,200 lbs, Atlanta'dan Nashville'ga. Shu bilan birga, boshqa mijozdan ham xuddi shu yo'nalishda 8 ta palet (5,800 lbs) bor. Eng yaxshi yechim nima?",
    situation_en: "You're offered an LTL (Less-Than-Truckload) shipment — 6 pallets, 4,200 lbs total, from Atlanta to Nashville. Another client also has 8 pallets (5,800 lbs) on the same route. What's the best solution?",
    options: [
      {
        text_uz: "Har bir yuk uchun alohida mashina yuboring",
        text_en: "Send a separate truck for each load",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Ikki alohida mashina — ikki hissa transport xarajati. Bu samarasiz va qimmat.",
        explanation_en: "Incorrect. Two separate trucks mean double the transport cost. This is inefficient and expensive."
      },
      {
        text_uz: "Ikkala yukni bitta traylerda birlashtiring — bu partial load consolidation strategiyasi, transport xarajatlarini kamaytiradi va haydovchi samaradorligini oshiradi",
        text_en: "Combine both loads into one trailer — this is a partial load consolidation strategy that reduces transport costs and improves driver efficiency",
        is_correct: true,
        explanation_uz: "To'g'ri! Load consolidation — LTL yuklarni bitta traylerga birlashtirib, FTL sifatida tashish. 6+8=14 palet, 10,000 lbs — dry van traylerga bemalol sig'adi. Bu ikkala mijozga arzonroq narx taklif qilish imkonini beradi va carrier uchun foydali.",
        explanation_en: "Correct! Load consolidation means combining LTL loads into one trailer to ship as FTL. 6+8=14 pallets, 10,000 lbs — easily fits in a dry van. This lets you offer lower rates to both clients while being profitable for the carrier."
      },
      {
        text_uz: "Kichikroq yukni rad eting — faqat FTL (Full Truckload) bilan ishlang",
        text_en: "Decline the smaller load — only work with FTL (Full Truckload)",
        is_correct: false,
        explanation_uz: "Noto'g'ri. LTL yuklar katta daromad manbayi bo'lishi mumkin. Ularni to'g'ri boshqarish — dispatcherning muhim ko'nikmasi.",
        explanation_en: "Incorrect. LTL loads can be a significant revenue source. Managing them properly is a key dispatcher skill."
      }
    ],
    correct_index: 1
  },
  {
    id: "s6_2",
    chapter: 6,
    situation_uz: "Mijoz HAZMAT (xavfli moddalar) yukini tashishni so'raydi — Class 3 (yonuvchan suyuqliklar). Haydovchingizda HAZMAT endorsement bor, lekin traylerda HAZMAT placard yo'q. Nima qilasiz?",
    situation_en: "A client asks to ship HAZMAT (hazardous materials) — Class 3 (flammable liquids). Your driver has a HAZMAT endorsement, but the trailer doesn't have HAZMAT placards. What do you do?",
    options: [
      {
        text_uz: "Haydovchida HAZMAT endorsement bor — placardsiz ham haydashi mumkin",
        text_en: "The driver has a HAZMAT endorsement — he can drive without placards",
        is_correct: false,
        explanation_uz: "Noto'g'ri! HAZMAT placard — federal talab. Endorsement haydash huquqini beradi, lekin placard — boshqa transport vositalari va favqulodda xizmatlarni ogohlantirish uchun majburiy.",
        explanation_en: "Incorrect! HAZMAT placards are a federal requirement. The endorsement gives the right to drive, but placards are mandatory to alert other vehicles and emergency services."
      },
      {
        text_uz: "Yukni qabul qilmang — HAZMAT bilan umuman ishlamaslik kerak",
        text_en: "Don't accept the load — you should never work with HAZMAT",
        is_correct: false,
        explanation_uz: "Noto'g'ri. HAZMAT yuklari qonuniy va foydali biznes. To'g'ri jihozlangan va litsenziyalangan bo'lsangiz, HAZMAT bilan ishlash mumkin va foydali.",
        explanation_en: "Incorrect. HAZMAT loads are legal and profitable business. If properly equipped and licensed, working with HAZMAT is allowed and lucrative."
      },
      {
        text_uz: "Avval traylerga Class 3 HAZMAT placardlarni o'rnating, shipping papers to'g'ri to'ldirilganini tekshiring, keyin yukni qabul qiling",
        text_en: "First install Class 3 HAZMAT placards on the trailer, verify shipping papers are correctly completed, then accept the load",
        is_correct: true,
        explanation_uz: "To'g'ri! HAZMAT tashish uchun: 1) Haydovchida HAZMAT endorsement — bor, 2) Traylerda to'g'ri placard — o'rnatish kerak, 3) Shipping papers (BOL, MSDS) — to'g'ri to'ldirish. Barchasi tayyor bo'lgandan keyin yukni qabul qilish mumkin.",
        explanation_en: "Correct! For HAZMAT transport: 1) Driver has HAZMAT endorsement — check, 2) Correct placards on trailer — need to install, 3) Shipping papers (BOL, MSDS) — must be completed correctly. Only accept the load when everything is ready."
      }
    ],
    correct_index: 2
  },
  {
    id: "s6_3",
    chapter: 6,
    situation_uz: "Sizga ikki xil yuk taklif qilindi: 1) FTL dry yuk — $2.50/mil, 600 mil; 2) Reefer yuk — $3.20/mil, 600 mil, lekin fuel surcharge yuqori va layover vaqti ko'proq. Qaysi yukni tanlaysiz?",
    situation_en: "You're offered two loads: 1) FTL dry freight — $2.50/mile, 600 miles; 2) Reefer freight — $3.20/mile, 600 miles, but fuel surcharge is higher and layover time is longer. Which load do you choose?",
    options: [
      {
        text_uz: "Har doim reefer — milga ko'proq pul",
        text_en: "Always reefer — more money per mile",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Reefer yuqori RPM (Revenue Per Mile) ko'rsatsa ham, reefer fuel sarfi 20-30% ko'proq va layover vaqti foydani kamaytirishi mumkin. Har doim sof foydani hisoblash kerak.",
        explanation_en: "Incorrect. While reefer shows a higher RPM (Revenue Per Mile), reefer fuel consumption is 20-30% more and layover time can reduce profit. Always calculate net profit."
      },
      {
        text_uz: "Barcha xarajatlarni (fuel, reefer fuel, layover, detention) hisoblang va net RPM (sof mil daromadi) ni taqqoslang — keyin qaror qiling",
        text_en: "Calculate all costs (fuel, reefer fuel, layover, detention), compare net RPM (net revenue per mile), then decide",
        is_correct: true,
        explanation_uz: "To'g'ri! Dispatcher sifatida faqat gross RPM'ga emas, balki sof foydaga qarang: Dry yuk: $2.50×600 = $1,500 (kam xarajat). Reefer: $3.20×600 = $1,920 minus qo'shimcha reefer fuel (~$150-200) va layover xarajati. Aniq hisob-kitob — to'g'ri qaror.",
        explanation_en: "Correct! As a dispatcher, look at net profit, not just gross RPM: Dry freight: $2.50×600 = $1,500 (low costs). Reefer: $3.20×600 = $1,920 minus extra reefer fuel (~$150-200) and layover costs. Precise calculation leads to the right decision."
      },
      {
        text_uz: "Har doim dry van — kamroq muammo",
        text_en: "Always dry van — fewer issues",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Reefer yuklar ko'pincha ancha foydali bo'ladi. Har bir yukni individual baholash kerak, emas umumiy qoida bilan.",
        explanation_en: "Incorrect. Reefer loads are often much more profitable. Each load should be evaluated individually, not by a general rule."
      }
    ],
    correct_index: 1
  },

  // ===== CHAPTER 7: Load Security and Procedures =====
  {
    id: "s7_1",
    chapter: 7,
    situation_uz: "Haydovchingiz flatbed traylerda po'lat quvurlar (steel pipes) tashimoqda. U yukni faqat 2 ta strap bilan mahkamladi. Siz nima deysiz?",
    situation_en: "Your driver is hauling steel pipes on a flatbed trailer. He secured the load with only 2 straps. What do you say?",
    options: [
      {
        text_uz: "2 ta strap yetarli — po'lat quvurlar og'ir, siljimaydi",
        text_en: "2 straps are enough — steel pipes are heavy, they won't shift",
        is_correct: false,
        explanation_uz: "Noto'g'ri! Og'ir yuk siljishi, aylanishi va tushib ketishi mumkin. Og'irlik mahkamlash talablarini kamaytirmaydi, aksincha oshiradi.",
        explanation_en: "Incorrect! Heavy loads can shift, roll, and fall. Weight doesn't reduce securement requirements — it increases them."
      },
      {
        text_uz: "FMCSA cargo securement qoidalariga ko'ra, har 10 futga kamida 1 ta tie-down kerak, minimum 4 ta. Qo'shimcha coil rack yoki chock ham ishlatish kerak",
        text_en: "Per FMCSA cargo securement rules, at least 1 tie-down per 10 feet is required, minimum 4. Additional coil racks or chocks should also be used",
        is_correct: true,
        explanation_uz: "To'g'ri! FMCSA 49 CFR Part 393 qoidasiga ko'ra: 1) Minimum 4 ta tie-down (5 fut dan uzun yuk uchun), 2) Har 10 futga 1 ta qo'shimcha tie-down, 3) Po'lat quvurlar uchun chock/cradle/coil rack ishlatish kerak — ular aylanib ketmasligi uchun. Xavfsizlik — #1 ustuvorlik!",
        explanation_en: "Correct! Per FMCSA 49 CFR Part 393: 1) Minimum 4 tie-downs (for cargo over 5 feet), 2) 1 additional tie-down per 10 feet, 3) Steel pipes require chocks/cradles/coil racks to prevent rolling. Safety is the #1 priority!"
      },
      {
        text_uz: "Po'lat quvurlarni tarpaulin bilan yopib qo'ysa yetarli",
        text_en: "Covering the steel pipes with a tarpaulin is sufficient",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Tarpaulin yukni ob-havodan himoya qiladi, lekin siljishdan himoya qilmaydi. Strap va chock — majburiy.",
        explanation_en: "Incorrect. A tarpaulin protects cargo from weather but doesn't prevent shifting. Straps and chocks are mandatory."
      }
    ],
    correct_index: 1
  },
  {
    id: "s7_2",
    chapter: 7,
    situation_uz: "Haydovchingiz yuklash joyiga (shipper) yetib keldi. Shipper yukni yukladi va BOL (Bill of Lading) ni berdi. Haydovchi BOL'dagi yuk tavsifini tekshirmay imzo chekmoqchi. Siz nima maslahat berasiz?",
    situation_en: "Your driver arrived at the shipper for loading. The shipper loaded the freight and handed over the BOL (Bill of Lading). The driver wants to sign the BOL without checking the freight description. What do you advise?",
    options: [
      {
        text_uz: "Imzo cheksin — shipper'ga ishonish kerak",
        text_en: "Sign it — you should trust the shipper",
        is_correct: false,
        explanation_uz: "Noto'g'ri. BOL — huquqiy hujjat. Imzo chekish haydovchi va carrier'ni BOL'dagi ma'lumotlar uchun javobgar qiladi. Noto'g'ri ma'lumot katta muammolarga olib kelishi mumkin.",
        explanation_en: "Incorrect. The BOL is a legal document. Signing makes the driver and carrier responsible for the information on it. Incorrect information can lead to major problems."
      },
      {
        text_uz: "BOL'dagi yuk tavsifi, miqdori, og'irligi va holatini real yuk bilan solishtiring. Farq bo'lsa, BOL'ga yozma izoh qo'shing (exception note), keyin imzo cheksin",
        text_en: "Compare the BOL's freight description, quantity, weight, and condition against the actual freight. If there are discrepancies, add a written exception note to the BOL, then sign",
        is_correct: true,
        explanation_uz: "To'g'ri! Haydovchi BOL'ni imzolashdan oldin: 1) Yuk sonini hisoblash, 2) Ko'rinish holatini tekshirish (buzilgan quti, ho'l yuk), 3) Farq bo'lsa — BOL'ga exception yozish (masalan: '2 pallets damaged upon pickup'). Bu carrier'ni noto'g'ri da'volardan himoya qiladi.",
        explanation_en: "Correct! Before signing the BOL, the driver must: 1) Count the cargo, 2) Check visible condition (damaged boxes, wet freight), 3) If discrepancies — write exceptions on the BOL (e.g., '2 pallets damaged upon pickup'). This protects the carrier from false claims."
      },
      {
        text_uz: "BOL'ni shipper'ga qaytaring va yukni tashishdan bosh torting",
        text_en: "Return the BOL to the shipper and refuse to haul the load",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Yukni rad etish oxirgi chora. Avval BOL'dagi noaniqliklarni aniqlashtirish va exception yozish mumkin.",
        explanation_en: "Incorrect. Refusing the load is a last resort. First, you can clarify BOL discrepancies and write exceptions."
      }
    ],
    correct_index: 1
  },

  // ===== CHAPTER 8: US Highway and Road System =====
  {
    id: "s8_1",
    chapter: 8,
    situation_uz: "Haydovchingiz I-95 bo'ylab shimolga haydayapti (Florida'dan New York'ga). Yo'lda I-10 va I-40 chorrahalari bor. Interstate raqamlash tizimiga ko'ra, I-10 va I-40 qaysi yo'nalishda ketadi?",
    situation_en: "Your driver is heading north on I-95 (from Florida to New York). The route crosses I-10 and I-40. According to the Interstate numbering system, which direction do I-10 and I-40 run?",
    options: [
      {
        text_uz: "Ikkalasi ham shimoldan janubga (north-south) — raqamlari juft bo'lgani uchun",
        text_en: "Both run north-south — because their numbers are even",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Juft raqamli interstate'lar (2, 4, 10, 40, 80...) g'arbdan sharqqa (east-west) ketadi, shimoldan janubga emas.",
        explanation_en: "Incorrect. Even-numbered interstates (2, 4, 10, 40, 80...) run east-west, not north-south."
      },
      {
        text_uz: "I-10 va I-40 — juft raqamlar, demak g'arbdan sharqqa (east-west) ketadi",
        text_en: "I-10 and I-40 are even numbers, so they run east-west",
        is_correct: true,
        explanation_uz: "To'g'ri! Interstate raqamlash tizimi: Juft raqamlar (I-10, I-40, I-80) — east-west; Toq raqamlar (I-5, I-95, I-75) — north-south. Raqam kichik bo'lsa — janubda/g'arbda, katta bo'lsa — shimolda/sharqda. I-10 AQShning eng janubiy east-west interstate.",
        explanation_en: "Correct! Interstate numbering system: Even numbers (I-10, I-40, I-80) run east-west; Odd numbers (I-5, I-95, I-75) run north-south. Lower numbers are south/west, higher numbers are north/east. I-10 is the southernmost east-west interstate."
      },
      {
        text_uz: "Raqamlash tizimi yo'q — interstate'lar tasodifiy raqamlanadi",
        text_en: "There's no numbering system — interstates are numbered randomly",
        is_correct: false,
        explanation_uz: "Noto'g'ri. AQSh Interstate Highway System aniq raqamlash tizimiga ega. Bu tizimni bilish dispatcher uchun juda muhim.",
        explanation_en: "Incorrect. The US Interstate Highway System has a clear numbering system. Knowing this system is very important for dispatchers."
      }
    ],
    correct_index: 1
  },
  {
    id: "s8_2",
    chapter: 8,
    situation_uz: "Haydovchingiz I-405 yo'lida haydayapti. Siz 3 raqamli interstate raqamini ko'rdingiz. Bu nima degani?",
    situation_en: "Your driver is on I-405. You notice it's a 3-digit interstate number. What does this mean?",
    options: [
      {
        text_uz: "Bu oddiy interstate — shunchaki raqami katta",
        text_en: "It's a regular interstate — just a higher number",
        is_correct: false,
        explanation_uz: "Noto'g'ri. 3 raqamli interstate'lar — asosiy interstate'larning mahalliy tarmoqlari (auxiliary routes).",
        explanation_en: "Incorrect. 3-digit interstates are local branches (auxiliary routes) of main interstates."
      },
      {
        text_uz: "3 raqamli interstate — asosiy interstate'ning mahalliy tarmog'i. Birinchi raqam juft bo'lsa (I-210, I-410) — loop/bypass, toq bo'lsa (I-395, I-195) — spur (tarmoq yo'l, shahar markaziga kiradi)",
        text_en: "A 3-digit interstate is a local branch of a main interstate. If the first digit is even (I-210, I-410) — it's a loop/bypass; if odd (I-395, I-195) — it's a spur (branch road into a city center)",
        is_correct: true,
        explanation_uz: "To'g'ri! I-405 — I-5 ning mahalliy tarmog'i. Birinchi raqam 4 (juft) — bu loop/bypass, ya'ni shaharni aylanib o'tadi. Oxirgi 2 raqam (05) — asosiy interstate raqami (I-5). Bu bilim marshrut rejalashtirishda juda muhim.",
        explanation_en: "Correct! I-405 is a local branch of I-5. The first digit 4 (even) means it's a loop/bypass around a city. The last 2 digits (05) are the main interstate number (I-5). This knowledge is crucial for route planning."
      },
      {
        text_uz: "Bu faqat Kaliforniya shtatining ichki yo'l tizimi",
        text_en: "This is only California's internal road system",
        is_correct: false,
        explanation_uz: "Noto'g'ri. 3 raqamli interstate'lar butun AQSh bo'ylab mavjud, bir shtatga xos emas.",
        explanation_en: "Incorrect. 3-digit interstates exist throughout the US, not specific to one state."
      }
    ],
    correct_index: 1
  },

  // ===== CHAPTER 9: US Safety and Compliance =====
  {
    id: "s9_1",
    chapter: 9,
    situation_uz: "Haydovchingiz DOT roadside inspeksiyada to'xtatildi. Inspektor Level I inspeksiya o'tkazmoqda. Bu qanday inspeksiya va haydovchingiz nimaga tayyor bo'lishi kerak?",
    situation_en: "Your driver was stopped for a DOT roadside inspection. The inspector is conducting a Level I inspection. What kind of inspection is this and what should your driver be prepared for?",
    options: [
      {
        text_uz: "Level I — faqat hujjatlarni tekshirish (CDL, BOL, registration)",
        text_en: "Level I — only checking documents (CDL, BOL, registration)",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Faqat hujjat tekshiruvi — bu Level III inspeksiya. Level I — eng to'liq inspeksiya turi.",
        explanation_en: "Incorrect. Document-only check is a Level III inspection. Level I is the most comprehensive inspection type."
      },
      {
        text_uz: "Level I — eng to'liq inspeksiya: haydovchi hujjatlari (CDL, tibbiy sertifikat, HOS/ELD), transport vositasining mexanik holati (tormoz, shina, chiroqlar, rul, shassi) va yuk mahkamlanishi tekshiriladi",
        text_en: "Level I — the most comprehensive inspection: driver documents (CDL, medical certificate, HOS/ELD), vehicle mechanical condition (brakes, tires, lights, steering, chassis), and cargo securement are all checked",
        is_correct: true,
        explanation_uz: "To'g'ri! Level I (North American Standard) — eng batafsil inspeksiya. 37 punktli tekshiruv ro'yxati. Haydovchi hujjatlari + transport vositasining to'liq mexanik tekshiruvi + yuk xavfsizligi. O'tmaslik — out-of-service va CSA balliga salbiy ta'sir.",
        explanation_en: "Correct! Level I (North American Standard) is the most detailed inspection. A 37-point checklist covering: driver documents + full vehicle mechanical inspection + cargo safety. Failure means out-of-service and negative CSA score impact."
      },
      {
        text_uz: "Level I — faqat tormozlarni tekshirish",
        text_en: "Level I — only checking brakes",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Faqat tormoz tekshiruvi — bu Level II yoki maxsus inspeksiya bo'lishi mumkin. Level I barcha tizimlarni qamrab oladi.",
        explanation_en: "Incorrect. Brake-only checks may be Level II or specialized inspections. Level I covers all systems."
      }
    ],
    correct_index: 1
  },
  {
    id: "s9_2",
    chapter: 9,
    situation_uz: "Kompaniyangizning CSA (Compliance, Safety, Accountability) balli BASICs kategoriyalaridan birida 75% dan oshdi. Bu nima degani va nima qilish kerak?",
    situation_en: "Your company's CSA (Compliance, Safety, Accountability) score exceeded 75% in one of the BASICs categories. What does this mean and what should you do?",
    options: [
      {
        text_uz: "Bu yaxshi natija — 75% yuqori ball degani",
        text_en: "This is a good result — 75% means a high score",
        is_correct: false,
        explanation_uz: "Noto'g'ri! CSA tizimida yuqori foiz — yomon. Bu qoidabuzarliklarning ko'pligini ko'rsatadi. Maqsad — imkon qadar past ball.",
        explanation_en: "Incorrect! In the CSA system, a higher percentage is worse. It indicates more violations. The goal is the lowest possible score."
      },
      {
        text_uz: "75% dan oshgan ball — FMCSA intervention (aralashuv) chegarasi. Kompaniya warning letter, tekshiruv yoki faoliyatni to'xtatish xavfi ostida. Darhol xavfsizlik rejasini tuzing va qoidabuzarliklarni kamaytiring",
        text_en: "A score above 75% triggers the FMCSA intervention threshold. The company risks a warning letter, investigation, or operations suspension. Immediately develop a safety plan and reduce violations",
        is_correct: true,
        explanation_uz: "To'g'ri! CSA BASICs'da 75% dan oshish — FMCSA aralashuv zonasi. Oqibatlari: Warning letter → Comprehensive Investigation → Consent Order → Operating Authority bekor qilish. Tezkor choralar: haydovchilarni qayta o'qitish, pre-trip inspeksiyani kuchaytirish, HOS monitoringini yaxshilash.",
        explanation_en: "Correct! Exceeding 75% in CSA BASICs enters the FMCSA intervention zone. Consequences: Warning letter → Comprehensive Investigation → Consent Order → Operating Authority revocation. Immediate actions: retrain drivers, strengthen pre-trip inspections, improve HOS monitoring."
      },
      {
        text_uz: "Hech narsa qilmang — bu faqat statistik ma'lumot",
        text_en: "Do nothing — it's just statistical data",
        is_correct: false,
        explanation_uz: "Noto'g'ri. CSA balli — FMCSA ning faol monitoring tizimi. Yuqori ball real huquqiy va moliyaviy oqibatlarga olib keladi.",
        explanation_en: "Incorrect. CSA scores are part of FMCSA's active monitoring system. High scores lead to real legal and financial consequences."
      }
    ],
    correct_index: 1
  },
  {
    id: "s9_3",
    chapter: 9,
    situation_uz: "Yangi carrier kompaniya ochmoqchi bo'lgan mijozingiz sizdan AQShda qonuniy yuk tashish uchun qanday asosiy litsenziyalar kerakligini so'radi. Javobingiz?",
    situation_en: "A client looking to start a new carrier company asks you what basic licenses are needed to legally haul freight in the US. Your answer?",
    options: [
      {
        text_uz: "Faqat CDL (Commercial Driver's License) yetarli",
        text_en: "Only a CDL (Commercial Driver's License) is enough",
        is_correct: false,
        explanation_uz: "Noto'g'ri. CDL faqat haydovchi uchun. Carrier kompaniya ochish uchun FMCSA litsenziyalari kerak.",
        explanation_en: "Incorrect. CDL is only for the driver. Opening a carrier company requires FMCSA licenses."
      },
      {
        text_uz: "Faqat shtat darajasidagi biznes litsenziyasi kerak",
        text_en: "Only a state-level business license is needed",
        is_correct: false,
        explanation_uz: "Noto'g'ri. Biznes litsenziyasi zarur, lekin yetarli emas. Federal FMCSA talablari ham bajarilishi kerak.",
        explanation_en: "Incorrect. A business license is necessary but not sufficient. Federal FMCSA requirements must also be met."
      },
      {
        text_uz: "USDOT number (FMCSA ro'yxatdan o'tish), MC number (Operating Authority), minimum $750,000 liability sug'urta, BOC-3 process agent, va IFTA (International Fuel Tax Agreement) ro'yxatdan o'tish kerak",
        text_en: "USDOT number (FMCSA registration), MC number (Operating Authority), minimum $750,000 liability insurance, BOC-3 process agent, and IFTA (International Fuel Tax Agreement) registration are required",
        is_correct: true,
        explanation_uz: "To'g'ri! Carrier kompaniya uchun asosiy talablar: 1) USDOT number — FMCSA identifikatsiya, 2) MC number — shtatlar aro yuk tashish huquqi, 3) $750,000+ liability sug'urta, 4) BOC-3 — huquqiy vakil tayinlash, 5) IFTA — yoqilg'i solig'i bo'yicha ro'yxat. Bularning barchasi qonuniy ishlash uchun shart.",
        explanation_en: "Correct! Basic requirements for a carrier company: 1) USDOT number — FMCSA identification, 2) MC number — interstate hauling authority, 3) $750,000+ liability insurance, 4) BOC-3 — designating a legal process agent, 5) IFTA — fuel tax registration. All of these are required for legal operation."
      }
    ],
    correct_index: 2
  }
];
