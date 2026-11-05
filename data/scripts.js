/* Dispatcher Academy — Phone Scripts
   Real dispatcher phone conversations for practice.
   2-3 scripts per chapter, 21 total. */

const scriptsData = [

  // ===== CHAPTER 1: Introduction to Logistics =====
  {
    id: "script-1-1",
    chapter: 1,
    title_uz: "Yangi mijoz bilan birinchi qo'ng'iroq",
    title_en: "First call with a new client",
    script_uz: "Dispatcher: Assalomu alaykum, Dispatcher Academy Logistics kompaniyasi. Men Alisher, logistika bo'yicha menejer. Sizga qanday yordam bera olaman?\n\nMijoz: Salom, bizga Texasdan Kaliforniyaga yuklarni tashish kerak.\n\nDispatcher: Tushunarli. Yuk turi, og'irligi va o'lchamlari haqida ma'lumot bera olasizmi?\n\nMijoz: Palletlangan oziq-ovqat mahsulotlari, 38,000 funt, reefer kerak.\n\nDispatcher: Yaxshi, reefer trailer bilan ishlash bizning asosiy yo'nalishimiz. Yuklash sanasi qachon bo'ladi?\n\nMijoz: Bu haftaning chorshanba kuni, ertalab 8 dan 12 gacha.\n\nDispatcher: Tushunarli. Men sizga narx taklifi tayyorlab, bugun kech bilan yuboraman. Aloqa uchun elektron pochtangizni bera olasizmi?",
    script_en: "Dispatcher: Hello, Dispatcher Academy Logistics. This is Alex, logistics manager. How can I help you?\n\nClient: Hi, we need to ship loads from Texas to California.\n\nDispatcher: Sure. Can you provide details on the freight type, weight, and dimensions?\n\nClient: Palletized food products, 38,000 pounds, needs a reefer.\n\nDispatcher: Great, reefer trailer operations are our specialty. When is the pickup date?\n\nClient: This Wednesday, between 8 AM and noon.\n\nDispatcher: Got it. I'll prepare a rate quote and send it to you by this evening. Can you provide your email for correspondence?",
    key_phrases: [
      { phrase_uz: "Sizga qanday yordam bera olaman?", phrase_en: "How can I help you?" },
      { phrase_uz: "Yuk turi, og'irligi va o'lchamlari", phrase_en: "Freight type, weight, and dimensions" },
      { phrase_uz: "Narx taklifi tayyorlab yuboraman", phrase_en: "I'll prepare a rate quote" }
    ]
  },
  {
    id: "script-1-2",
    chapter: 1,
    title_uz: "Logistika jarayonini tushuntirish",
    title_en: "Explaining the logistics process",
    script_uz: "Dispatcher: Salom, logistika jarayonimiz haqida qisqacha tushuntiraman. Biz sizning yukingizni qabul qilgach, avval mos haydovchi topamiz.\n\nMijoz: Haydovchini qanday tanlaysiz?\n\nDispatcher: Biz haydovchining hozirgi joylashuvi, tajribasi va yuk turiga mosligini hisobga olamiz. Keyin rate confirmation yuboramiz.\n\nMijoz: Rate confirmation nima?\n\nDispatcher: Bu — narx, yuklash va tushirish manzillari, sanalar va shartlar ko'rsatilgan rasmiy hujjat. Siz tasdiqlasangiz, haydovchi yo'lga chiqadi.\n\nMijoz: Yukni kuzatib borish mumkinmi?\n\nDispatcher: Albatta, biz har 3-4 soatda haydovchidan check-call olamiz va sizga yangilanishlarni yuboramiz. GPS tracking ham mavjud.",
    script_en: "Dispatcher: Hi, let me briefly explain our logistics process. Once we receive your load, we first find a matching driver.\n\nClient: How do you select a driver?\n\nDispatcher: We consider the driver's current location, experience, and suitability for the freight type. Then we send a rate confirmation.\n\nClient: What's a rate confirmation?\n\nDispatcher: It's an official document showing the rate, pickup and delivery addresses, dates, and terms. Once you approve it, the driver hits the road.\n\nClient: Can we track the shipment?\n\nDispatcher: Absolutely, we get check-calls from the driver every 3-4 hours and send you updates. GPS tracking is also available.",
    key_phrases: [
      { phrase_uz: "Rate confirmation — rasmiy hujjat", phrase_en: "Rate confirmation — official document" },
      { phrase_uz: "Har 3-4 soatda check-call", phrase_en: "Check-calls every 3-4 hours" },
      { phrase_uz: "GPS tracking mavjud", phrase_en: "GPS tracking available" }
    ]
  },

  // ===== CHAPTER 2: Stakeholders in Trucking =====
  {
    id: "script-2-1",
    chapter: 2,
    title_uz: "Broker bilan narx kelishish",
    title_en: "Negotiating rate with a broker",
    script_uz: "Dispatcher: Salom, men DAT board'da sizning Shikago — Dallas yukingizni ko'rdim. Narxi qancha?\n\nBroker: Salom, bu yuk uchun $2,800 beramiz, all-in.\n\nDispatcher: Tushunarli, lekin bu yo'nalishda hozirgi bozor narxi $3,200 atrofida. Bizning haydovchi bugun Shikagoda bo'sh turadi, tezda yuklashga tayyor.\n\nBroker: $3,000 ga ko'tarishim mumkin, lekin bundan yuqori emas.\n\nDispatcher: Haydovchimiz tajribali, clean inspection history bor. $3,100 ga kelishamizmi? Bugun yuklash, ertaga tushirish.\n\nBroker: Yaxshi, $3,100 bo'lsin. Rate confirmation yuboraman.\n\nDispatcher: Rahmat. MC raqamimiz 12345, insurance certificate ham kerakmi?\n\nBroker: Ha, rate con bilan birga yuboring.",
    script_en: "Dispatcher: Hi, I saw your Chicago to Dallas load on DAT board. What's the rate?\n\nBroker: Hi, we're offering $2,800 for this load, all-in.\n\nDispatcher: I see, but the current market rate on this lane is around $3,200. Our driver is sitting empty in Chicago today, ready for quick pickup.\n\nBroker: I can go up to $3,000, but no higher.\n\nDispatcher: Our driver is experienced with a clean inspection history. Can we settle at $3,100? Pickup today, delivery tomorrow.\n\nBroker: Alright, $3,100 it is. I'll send the rate confirmation.\n\nDispatcher: Thank you. Our MC number is 12345, do you need the insurance certificate as well?\n\nBroker: Yes, send it along with the rate con.",
    key_phrases: [
      { phrase_uz: "Bozor narxi $3,200 atrofida", phrase_en: "Market rate around $3,200" },
      { phrase_uz: "Clean inspection history bor", phrase_en: "Clean inspection history" },
      { phrase_uz: "Rate confirmation yuboraman", phrase_en: "I'll send the rate confirmation" }
    ]
  },
  {
    id: "script-2-2",
    chapter: 2,
    title_uz: "Shipper bilan yuklash vaqtini tasdiqlash",
    title_en: "Confirming pickup time with shipper",
    script_uz: "Dispatcher: Salom, men Dispatcher Academy Logistics'dan qo'ng'iroq qilyapman. Ertangi yuklash haqida tasdiqlash kerak edi.\n\nShipper: Ha, qaysi yuk haqida?\n\nDispatcher: PO raqami 45892, 42,000 funt industrial equipment, flatbed trailer.\n\nShipper: Ha, ko'ryapman. Ertaga ertalab 7 dan boshlab qabul qilamiz.\n\nDispatcher: Haydovchimiz 7:30 ga yetib boradi. Yuklash qancha vaqt oladi?\n\nShipper: Odatda 2 soat. Fork lift bilan yuklaymiz, haydovchiga tarping kerak bo'ladi.\n\nDispatcher: Tushunarli, haydovchimizda tarp va straps bor. Dock raqami bormi?\n\nShipper: Dock 5, kelganda security'da check-in qilsin.\n\nDispatcher: Rahmat, haydovchiga barcha ma'lumotlarni yuboraman.",
    script_en: "Dispatcher: Hello, I'm calling from Dispatcher Academy Logistics. I need to confirm tomorrow's pickup.\n\nShipper: Sure, which load?\n\nDispatcher: PO number 45892, 42,000 pounds of industrial equipment, flatbed trailer.\n\nShipper: Yes, I see it. We start receiving at 7 AM tomorrow.\n\nDispatcher: Our driver will arrive by 7:30 AM. How long does loading take?\n\nShipper: Usually about 2 hours. We load with a forklift, and the driver will need to tarp the load.\n\nDispatcher: Understood, our driver has tarps and straps. Is there a specific dock number?\n\nShipper: Dock 5, have the driver check in at security upon arrival.\n\nDispatcher: Thank you, I'll relay all the details to the driver.",
    key_phrases: [
      { phrase_uz: "Yuklash haqida tasdiqlash kerak", phrase_en: "Need to confirm the pickup" },
      { phrase_uz: "Haydovchiga tarping kerak bo'ladi", phrase_en: "Driver will need to tarp the load" },
      { phrase_uz: "Security'da check-in qilsin", phrase_en: "Check in at security" }
    ]
  },

  // ===== CHAPTER 3: Truck Drivers and Their Operations =====
  {
    id: "script-3-1",
    chapter: 3,
    title_uz: "Haydovchiga yuk tayinlash",
    title_en: "Assigning a load to a driver",
    script_uz: "Dispatcher: Salom Ahmad aka, yaxshi yangilik — sizga mos yuk topdim.\n\nHaydovchi: Salom, gapiringchi.\n\nDispatcher: Atlanta'dan Miami'ga, dry van yuk. 34,000 funt, palletlangan elektronika. Rate — $2,400.\n\nHaydovchi: Yuklash qachon?\n\nDispatcher: Ertaga ertalab 9 dan 11 gacha, delivery ertangi kunga, 6 PM gacha.\n\nHaydovchi: Mening HOS'im qanday? Bugun 3 soat haydadim.\n\nDispatcher: Sizda 8 soat qolgan, bu yuk 10 soatlik yo'l. Bugun dam oling, ertaga to'liq 11 soat bo'ladi. Delivery vaqtiga yetib borasiz.\n\nHaydovchi: Yaxshi, olaman. Ma'lumotlarni yuboring.\n\nDispatcher: Hoziroq rate con va yuklash manzilini SMS qilaman. BOL'ni scan qilib yuboring yuklangandan keyin.",
    script_en: "Dispatcher: Hey Ahmad, good news — I found a load that fits you.\n\nDriver: Hey, tell me about it.\n\nDispatcher: Atlanta to Miami, dry van. 34,000 pounds, palletized electronics. Rate is $2,400.\n\nDriver: When's the pickup?\n\nDispatcher: Tomorrow between 9 and 11 AM, delivery by 6 PM the next day.\n\nDriver: What's my HOS looking like? I drove 3 hours today.\n\nDispatcher: You have 8 hours remaining, and this load is a 10-hour drive. Rest today, you'll have a full 11 hours tomorrow. You'll make the delivery on time.\n\nDriver: Sounds good, I'll take it. Send me the details.\n\nDispatcher: I'll text you the rate con and pickup address right now. Scan and send the BOL after loading.",
    key_phrases: [
      { phrase_uz: "HOS'im qanday?", phrase_en: "What's my HOS looking like?" },
      { phrase_uz: "BOL'ni scan qilib yuboring", phrase_en: "Scan and send the BOL" },
      { phrase_uz: "Rate con va yuklash manzilini SMS qilaman", phrase_en: "I'll text the rate con and pickup address" }
    ]
  },
  {
    id: "script-3-2",
    chapter: 3,
    title_uz: "Haydovchi bilan check-call",
    title_en: "Check-call with driver",
    script_uz: "Dispatcher: Salom Bobur, check-call uchun qo'ng'iroq qilyapman. Hozir qayerdasiz?\n\nHaydovchi: Memphis'dan o'tdim, I-40 da ketayapman. Taxminan 4 soat qoldi.\n\nDispatcher: Yaxshi, grafik bo'yicha ketyapsiz. Biror muammo bormi?\n\nHaydovchi: Yo'q, yo'l ochiq, ob-havo yaxshi. Faqat fuel stop kerak, 1 soatdan keyin to'xtalaman.\n\nDispatcher: Tushunarli. Keyingi check-call 3 soatdan keyin bo'ladi. Receiver'ga ETA 4 PM deb xabar berdim.\n\nHaydovchi: OK. Tushirish joyida appointment bormi?\n\nDispatcher: Ha, sizning appointment 4 dan 6 gacha. Dock 12. Lumper kerak emas, o'zlari tushiradi.\n\nHaydovchi: Yaxshi, yetganda xabar beraman.\n\nDispatcher: Rahmat Bobur, safe driving!",
    script_en: "Dispatcher: Hey Bobur, calling for a check-call. Where are you right now?\n\nDriver: Just passed Memphis, heading on I-40. About 4 hours left.\n\nDispatcher: Good, you're on schedule. Any issues?\n\nDriver: No, road is clear, weather is good. Just need a fuel stop, I'll pull over in about an hour.\n\nDispatcher: Got it. Next check-call will be in 3 hours. I've updated the receiver with an ETA of 4 PM.\n\nDriver: OK. Is there an appointment at the delivery location?\n\nDispatcher: Yes, your appointment window is 4 to 6 PM. Dock 12. No lumper needed, they'll unload themselves.\n\nDriver: Great, I'll let you know when I arrive.\n\nDispatcher: Thanks Bobur, safe driving!",
    key_phrases: [
      { phrase_uz: "Check-call uchun qo'ng'iroq qilyapman", phrase_en: "Calling for a check-call" },
      { phrase_uz: "Grafik bo'yicha ketyapsiz", phrase_en: "You're on schedule" },
      { phrase_uz: "Lumper kerak emas", phrase_en: "No lumper needed" }
    ]
  },
  {
    id: "script-3-3",
    chapter: 3,
    title_uz: "Haydovchi HOS muammosi",
    title_en: "Driver HOS issue",
    script_uz: "Haydovchi: Dispatcher, muammo bor. Mening 14 soat duty period 2 soatdan keyin tugaydi, lekin delivery joyiga 3 soat qoldi.\n\nDispatcher: Tushunarli. Qachon boshladingiz bugun?\n\nHaydovchi: Ertalab 5 da start qildim.\n\nDispatcher: Demak 7 PM da tugaydi. Hozir 5 PM. Siz eng yaqin truck stop'da 10 soat dam olishingiz kerak.\n\nHaydovchi: Lekin yuk ertaga 8 AM ga yetishi kerak.\n\nDispatcher: Men receiver'ga qo'ng'iroq qilib, delivery vaqtini 11 AM ga o'zgartirishni so'rayman. Sizning xavfsizligingiz birinchi o'rinda. HOS buzilishi CSA ballingizga ta'sir qiladi.\n\nHaydovchi: Yaxshi, hozir Pilot truck stop ko'rinyapti, shu yerda to'xtayman.\n\nDispatcher: To'g'ri qaror. Manzilni yuboring, men receiver bilan gaplashaman.",
    script_en: "Driver: Dispatcher, I have a problem. My 14-hour duty period ends in 2 hours, but the delivery is still 3 hours away.\n\nDispatcher: I understand. When did you start today?\n\nDriver: Started at 5 AM.\n\nDispatcher: So your clock runs out at 7 PM. It's 5 PM now. You need to stop at the nearest truck stop for a 10-hour rest.\n\nDriver: But the load needs to be there by 8 AM tomorrow.\n\nDispatcher: I'll call the receiver and request to push the delivery to 11 AM. Your safety comes first. An HOS violation will affect your CSA score.\n\nDriver: Alright, I see a Pilot truck stop ahead, I'll stop there.\n\nDispatcher: Good decision. Send me the location, I'll talk to the receiver.",
    key_phrases: [
      { phrase_uz: "14 soat duty period tugaydi", phrase_en: "14-hour duty period ends" },
      { phrase_uz: "Xavfsizligingiz birinchi o'rinda", phrase_en: "Your safety comes first" },
      { phrase_uz: "CSA ballingizga ta'sir qiladi", phrase_en: "Will affect your CSA score" }
    ]
  },

  // ===== CHAPTER 4: Fleet and Equipment =====
  {
    id: "script-4-1",
    chapter: 4,
    title_uz: "Truck nosozligi haqida xabar",
    title_en: "Reporting a truck breakdown",
    script_uz: "Haydovchi: Dispatcher, mening truck'da muammo — engine check light yondi va kuch yo'qoldi. I-75 da, exit 204 yonida to'xtab qoldim.\n\nDispatcher: Xavfsiz joyda turibsizmi?\n\nHaydovchi: Ha, shoulder'da turaman, hazard lights yoqilgan.\n\nDispatcher: Yaxshi. Hozir roadside assistance chaqiraman. Sizning truck'ingiz 2022 Freightliner Cascadia, to'g'rimi?\n\nHaydovchi: Ha, mileage 180,000.\n\nDispatcher: Warranty hali amal qiladi. Men TA Petro service center'ga qo'ng'iroq qilaman, ular exit 207 da — 3 mil narida. Agar haydash mumkin bo'lsa, shu yerga boring.\n\nHaydovchi: Sekin borsam bo'ladi deb o'ylayman.\n\nDispatcher: Yaxshi, lekin xavfli bo'lsa, to'xtang — tow truck yuboramiz. Yuk deadline haqida tashvishlanmang, men receiver'ga xabar beraman.",
    script_en: "Driver: Dispatcher, I've got a problem — engine check light came on and I'm losing power. Stopped on I-75 near exit 204.\n\nDispatcher: Are you in a safe location?\n\nDriver: Yes, I'm on the shoulder with hazard lights on.\n\nDispatcher: Good. I'll call roadside assistance right now. Your truck is a 2022 Freightliner Cascadia, correct?\n\nDriver: Yes, 180,000 miles.\n\nDispatcher: Warranty should still be active. I'll call the TA Petro service center at exit 207 — that's 3 miles from you. If you can drive, head there.\n\nDriver: I think I can make it slowly.\n\nDispatcher: Good, but if it feels unsafe, stop — we'll send a tow truck. Don't worry about the load deadline, I'll notify the receiver.",
    key_phrases: [
      { phrase_uz: "Engine check light yondi", phrase_en: "Engine check light came on" },
      { phrase_uz: "Roadside assistance chaqiraman", phrase_en: "I'll call roadside assistance" },
      { phrase_uz: "Warranty hali amal qiladi", phrase_en: "Warranty should still be active" }
    ]
  },
  {
    id: "script-4-2",
    chapter: 4,
    title_uz: "Reefer trailer harorat muammosi",
    title_en: "Reefer trailer temperature issue",
    script_uz: "Haydovchi: Dispatcher, reefer muammo ko'rsatyapti. Harorat -5°F bo'lishi kerak, lekin 10°F ga chiqib ketyapti.\n\nDispatcher: Qachon boshlandi bu?\n\nHaydovchi: 1 soat oldin payqadim. Yukda frozen food bor.\n\nDispatcher: Bu jiddiy — yuk buzilishi mumkin. Avval reefer fuel level'ni tekshiring.\n\nHaydovchi: Fuel to'la.\n\nDispatcher: Yaxshi. Reefer'ni o'chirib, 5 daqiqa kutib, qayta yoqing. Ba'zan sensor reset yordam beradi.\n\nHaydovchi: Qildim... hali ham 8°F ko'rsatyapti.\n\nDispatcher: Tushundim. Eng yaqin Thermo King dealer'ga yo'naltiraylik. Sizning joylashuvingizni bering, men qidirib topaman. Yuk haqida — men broker'ga darhol qo'ng'iroq qilaman, temperature log kerak bo'ladi claim uchun.\n\nHaydovchi: Joylashuvim Knoxville, I-40 va I-75 kesishmasida.\n\nDispatcher: Knoxville'da Thermo King dealer bor. Manzilni hozir yuboraman.",
    script_en: "Driver: Dispatcher, the reefer is showing issues. Temperature should be -5°F but it's climbing to 10°F.\n\nDispatcher: When did this start?\n\nDriver: Noticed it about an hour ago. I've got frozen food on board.\n\nDispatcher: This is serious — the cargo could be compromised. First, check the reefer fuel level.\n\nDriver: Fuel is full.\n\nDispatcher: OK. Turn the reefer off, wait 5 minutes, then restart. Sometimes a sensor reset helps.\n\nDriver: Done... it's still showing 8°F.\n\nDispatcher: Understood. Let's route you to the nearest Thermo King dealer. Give me your location, I'll find one. About the load — I'll call the broker immediately, we'll need the temperature log for the claim.\n\nDriver: I'm in Knoxville, at the I-40 and I-75 junction.\n\nDispatcher: There's a Thermo King dealer in Knoxville. Sending the address now.",
    key_phrases: [
      { phrase_uz: "Harorat -5°F bo'lishi kerak", phrase_en: "Temperature should be -5°F" },
      { phrase_uz: "Yuk buzilishi mumkin", phrase_en: "Cargo could be compromised" },
      { phrase_uz: "Temperature log kerak claim uchun", phrase_en: "Need temperature log for the claim" }
    ]
  },

  // ===== CHAPTER 5: Trailers and Weight Balance =====
  {
    id: "script-5-1",
    chapter: 5,
    title_uz: "Ortiqcha vazn muammosi",
    title_en: "Overweight issue at scale",
    script_uz: "Haydovchi: Dispatcher, CAT scale'dan o'tdim va steer axle 13,200 funt ko'rsatdi. Limit 12,000.\n\nDispatcher: Demak 1,200 funt ortiq. Boshqa axle'lar qanday?\n\nHaydovchi: Drive axles — 33,500, trailer — 33,800. Jami 80,500.\n\nDispatcher: Jami gross ham 500 funt ortiq. Avval 5th wheel'ni orqaga surishni sinab ko'ring — bu steer axle'dan vaznni drive axle'larga o'tkazadi.\n\nHaydovchi: Qancha siljitaman?\n\nDispatcher: 2-3 teshik orqaga. Keyin qaytadan scale'ga kiring. Agar hali ham ortiq bo'lsa, shipper'ga qaytib, yukni qayta joylashtirish kerak.\n\nHaydovchi: OK, sinab ko'raman.\n\nDispatcher: Yaxshi, natijani menga yuboring. Overweight bilan yo'lga chiqish mumkin emas — $500 dan $10,000 gacha jarima bo'ladi.",
    script_en: "Driver: Dispatcher, I went over the CAT scale and the steer axle came in at 13,200 pounds. The limit is 12,000.\n\nDispatcher: So 1,200 pounds over. How about the other axles?\n\nDriver: Drives are 33,500, trailer is 33,800. Total gross 80,500.\n\nDispatcher: Total gross is also 500 over. First, try sliding the 5th wheel back — that shifts weight from the steer axle to the drives.\n\nDriver: How far should I slide it?\n\nDispatcher: About 2-3 holes back. Then re-scale. If it's still over, you'll need to go back to the shipper and rearrange the load.\n\nDriver: OK, I'll try that.\n\nDispatcher: Good, send me the results. You can't run overweight — fines range from $500 to $10,000.",
    key_phrases: [
      { phrase_uz: "Steer axle 13,200 funt — limit 12,000", phrase_en: "Steer axle 13,200 — limit is 12,000" },
      { phrase_uz: "5th wheel'ni orqaga suring", phrase_en: "Slide the 5th wheel back" },
      { phrase_uz: "Overweight jarima $500-$10,000", phrase_en: "Overweight fines $500-$10,000" }
    ]
  },
  {
    id: "script-5-2",
    chapter: 5,
    title_uz: "Trailer almashtirish — drop and hook",
    title_en: "Trailer swap — drop and hook",
    script_uz: "Dispatcher: Salom Jasur, sizga drop and hook tayinladim. Hozirgi trailerni Atlanta terminal'da qoldirasiz va yangi trailerni olasiz.\n\nHaydovchi: Qaysi trailer raqamni olaman?\n\nDispatcher: Trailer #TR-7842, 53-foot dry van. Yard'da B ro'yxatida, 14-slot'da turadi.\n\nHaydovchi: Hozirgi yukni tushirish kerakmi?\n\nDispatcher: Yo'q, siz faqat trailerni uzasiz. Yard jockey yukni tushiradi. Yangi trailer allaqachon yuklanган — 36,000 funt retail goods, Charlotte'ga boradi.\n\nHaydovchi: Pre-trip inspection qilishim kerakmi yangi trailerga?\n\nDispatcher: Albatta, har doim pre-trip qiling. Ayniqsa brake lights, tire pressure va tandoor seal'ni tekshiring. Muammo bo'lsa, menga darhol xabar bering.\n\nHaydovchi: Tushundim, terminal'ga 30 daqiqada yetaman.",
    script_en: "Dispatcher: Hey Jasur, I've assigned you a drop and hook. You'll drop your current trailer at the Atlanta terminal and pick up a new one.\n\nDriver: Which trailer number am I picking up?\n\nDispatcher: Trailer #TR-7842, 53-foot dry van. It's in the yard, Row B, slot 14.\n\nDriver: Do I need to unload the current freight?\n\nDispatcher: No, just unhook the trailer. The yard jockey will handle unloading. The new trailer is already loaded — 36,000 pounds of retail goods heading to Charlotte.\n\nDriver: Do I need to do a pre-trip on the new trailer?\n\nDispatcher: Absolutely, always do a pre-trip. Check the brake lights, tire pressure, and door seals especially. If there are any issues, let me know immediately.\n\nDriver: Got it, I'll be at the terminal in 30 minutes.",
    key_phrases: [
      { phrase_uz: "Drop and hook tayinladim", phrase_en: "Assigned you a drop and hook" },
      { phrase_uz: "Yard'da B ro'yxatida, 14-slot", phrase_en: "Row B, slot 14 in the yard" },
      { phrase_uz: "Pre-trip inspection qiling", phrase_en: "Do a pre-trip inspection" }
    ]
  },

  // ===== CHAPTER 6: Freight Types =====
  {
    id: "script-6-1",
    chapter: 6,
    title_uz: "Hazmat yuk haqida broker bilan gaplashish",
    title_en: "Discussing hazmat load with broker",
    script_uz: "Dispatcher: Salom, men sizning Houston — New Orleans hazmat yukingiz haqida qo'ng'iroq qilyapman. Batafsil ma'lumot bera olasizmi?\n\nBroker: Ha, Class 3 flammable liquids, 40,000 funt. Tanker kerak.\n\nDispatcher: Haydovchimizda hazmat endorsement va tanker endorsement bor. UN raqami nima?\n\nBroker: UN1203 — gasoline.\n\nDispatcher: Tushundim. Placard kerak bo'ladi — bizda mavjud. Yuklash joyida MSDS taqdim etasizmi?\n\nBroker: Ha, shipper beradi. Yuklaganda haydovchi hazmat shipping paper'ni tekshirsin.\n\nDispatcher: Albatta. Yo'nalish haqida — hazmat yuk bilan tunnel restriction bor. I-10 orqali boramiz, tunnel'lar yo'q.\n\nBroker: Rate $4,500 all-in. Mos keladimi?\n\nDispatcher: Hazmat surcharge hisobga olinganmi?\n\nBroker: Ha, all-in rate.\n\nDispatcher: Yaxshi, qabul qilamiz.",
    script_en: "Dispatcher: Hi, I'm calling about your Houston to New Orleans hazmat load. Can you provide details?\n\nBroker: Sure, Class 3 flammable liquids, 40,000 pounds. Needs a tanker.\n\nDispatcher: Our driver has both hazmat and tanker endorsements. What's the UN number?\n\nBroker: UN1203 — gasoline.\n\nDispatcher: Got it. We'll need placards — we have them. Will the MSDS be provided at the pickup?\n\nBroker: Yes, the shipper will have it. The driver should verify the hazmat shipping papers at loading.\n\nDispatcher: Absolutely. About routing — there are tunnel restrictions with hazmat. We'll take I-10, no tunnels on that route.\n\nBroker: Rate is $4,500 all-in. Does that work?\n\nDispatcher: Is the hazmat surcharge included?\n\nBroker: Yes, it's all-in.\n\nDispatcher: Good, we'll take it.",
    key_phrases: [
      { phrase_uz: "Hazmat va tanker endorsement bor", phrase_en: "Has hazmat and tanker endorsements" },
      { phrase_uz: "Tunnel restriction bor", phrase_en: "Tunnel restrictions with hazmat" },
      { phrase_uz: "Hazmat surcharge hisobga olinganmi?", phrase_en: "Is the hazmat surcharge included?" }
    ]
  },
  {
    id: "script-6-2",
    chapter: 6,
    title_uz: "Refrigerated yuk — harorat talablari",
    title_en: "Refrigerated load — temperature requirements",
    script_uz: "Shipper: Bizning yuk fresh produce — 38,000 funt. Harorat 34°F da bo'lishi kerak, 32°F dan past bo'lsa, yuk muzlab qoladi.\n\nDispatcher: Tushunarli, narrow range. Haydovchimiz reefer'ni continuous mode'da ishlatadi. Pre-cool qilish kerakmi?\n\nShipper: Ha, trailer yuklashdan 2 soat oldin 34°F ga pre-cool qilingan bo'lishi kerak.\n\nDispatcher: Yaxshi, haydovchiga aytaman. Pulp temperature tekshirasizmi yuklashda?\n\nShipper: Ha, biz pulp thermometer bilan tekshiramiz va BOL'ga yozamiz. Agar mahsulot 38°F dan yuqori bo'lsa, yuklamaymiz.\n\nDispatcher: Tushundim. Yo'lda reefer temperature'ni har 2 soatda log qilamiz. Delivery'da temperature printout taqdim etamiz.\n\nShipper: Yaxshi, aynan shu kerak. Claim bo'lsa, printout asosiy dalil bo'ladi.",
    script_en: "Shipper: Our load is fresh produce — 38,000 pounds. Temperature must be held at 34°F. Below 32°F and the product freezes.\n\nDispatcher: Understood, narrow range. Our driver will run the reefer in continuous mode. Does the trailer need to be pre-cooled?\n\nShipper: Yes, the trailer should be pre-cooled to 34°F at least 2 hours before loading.\n\nDispatcher: Got it, I'll instruct the driver. Will you check the pulp temperature at loading?\n\nShipper: Yes, we check with a pulp thermometer and record it on the BOL. If the product is above 38°F, we won't load.\n\nDispatcher: Understood. We'll log the reefer temperature every 2 hours en route. We'll provide a temperature printout at delivery.\n\nShipper: Great, that's exactly what we need. If there's a claim, the printout is the key evidence.",
    key_phrases: [
      { phrase_uz: "Harorat 34°F, 32°F dan past bo'lmasin", phrase_en: "Hold at 34°F, not below 32°F" },
      { phrase_uz: "Pre-cool 2 soat oldin", phrase_en: "Pre-cool 2 hours before loading" },
      { phrase_uz: "Temperature printout — asosiy dalil", phrase_en: "Temperature printout — key evidence" }
    ]
  },
  {
    id: "script-6-3",
    chapter: 6,
    title_uz: "LTL yuk — bir nechta to'xtash nuqtasi",
    title_en: "LTL load — multiple stops",
    script_uz: "Dispatcher: Jasur, sizga multi-stop yuk tayinladim. 3 ta pickup va 2 ta delivery.\n\nHaydovchi: Ketma-ketlikni ayting.\n\nDispatcher: Birinchi pickup — Dallas, 8,000 funt. Ikkinchi — Fort Worth, 6,000 funt. Uchinchi — Denton, 4,000 funt. Jami 18,000 funt.\n\nHaydovchi: Delivery'lar qayerga?\n\nDispatcher: Birinchi delivery — Oklahoma City'ga 10,000 funt. Ikkinchi — Tulsa'ga 8,000 funt. Yukni BOL raqamlari bo'yicha ajrating.\n\nHaydovchi: Qaysi yukni oldin tushiraman?\n\nDispatcher: Oklahoma City birinchi, shuning uchun Denton yukini eng orqaga, Dallas yukini eng oldinga joylashtiring. LIFO tartibida — last in, first out.\n\nHaydovchi: Tushunarli, har bir stop uchun alohida BOL bormi?\n\nDispatcher: Ha, 5 ta BOL — har bir pickup va delivery uchun alohida. Hammasini scan qiling.",
    script_en: "Dispatcher: Jasur, I've assigned you a multi-stop load. 3 pickups and 2 deliveries.\n\nDriver: Give me the sequence.\n\nDispatcher: First pickup — Dallas, 8,000 pounds. Second — Fort Worth, 6,000 pounds. Third — Denton, 4,000 pounds. Total 18,000 pounds.\n\nDriver: Where are the deliveries?\n\nDispatcher: First delivery — Oklahoma City, 10,000 pounds. Second — Tulsa, 8,000 pounds. Separate the freight by BOL numbers.\n\nDriver: Which one do I unload first?\n\nDispatcher: Oklahoma City first, so load the Denton freight in the back and Dallas freight in the front. LIFO order — last in, first out.\n\nDriver: Got it, is there a separate BOL for each stop?\n\nDispatcher: Yes, 5 BOLs — one for each pickup and delivery. Scan all of them.",
    key_phrases: [
      { phrase_uz: "Multi-stop yuk: 3 pickup, 2 delivery", phrase_en: "Multi-stop: 3 pickups, 2 deliveries" },
      { phrase_uz: "LIFO tartibida yuklang", phrase_en: "Load in LIFO order" },
      { phrase_uz: "Har bir stop uchun alohida BOL", phrase_en: "Separate BOL for each stop" }
    ]
  },

  // ===== CHAPTER 7: Load Security and Procedures =====
  {
    id: "script-7-1",
    chapter: 7,
    title_uz: "Yuk mahkamlash talablari",
    title_en: "Load securement requirements",
    script_uz: "Dispatcher: Salom Amir, sizga flatbed yuk bor — 6 ta po'lat quvur, har biri 20 fut uzunlikda, jami 44,000 funt.\n\nHaydovchi: Securement uchun nima kerak?\n\nDispatcher: FMCSA qoidasi bo'yicha — har 10 fut uchun kamida bitta tie-down. Quvurlar 20 fut, demak har bir quvurga kamida 2 ta chain kerak.\n\nHaydovchi: 6 ta quvur — jami 12 ta chain?\n\nDispatcher: To'g'ri, va dunnage ham qo'ying quvurlar orasiga — dumalab ketmasligi uchun. Coil racks yoki cradle ishlatishingiz mumkin.\n\nHaydovchi: Edge protector kerakmi?\n\nDispatcher: Ha, chain yoki strap quvur chetiga tegadigan har bir joyga edge protector qo'ying. Bu yukni ham, strap'ni ham himoya qiladi.\n\nHaydovchi: Tarp kerakmi?\n\nDispatcher: Yo'q, bu yuk uchun tarp shart emas, lekin shipper so'rasa — qilamiz. Men ulardan aniqlab qo'yaman.",
    script_en: "Dispatcher: Hey Amir, I have a flatbed load for you — 6 steel pipes, each 20 feet long, total 44,000 pounds.\n\nDriver: What do I need for securement?\n\nDispatcher: Per FMCSA rules — at least one tie-down for every 10 feet. The pipes are 20 feet, so at least 2 chains per pipe.\n\nDriver: 6 pipes — so 12 chains total?\n\nDispatcher: Correct, and use dunnage between the pipes to prevent rolling. You can use coil racks or cradles.\n\nDriver: Do I need edge protectors?\n\nDispatcher: Yes, put edge protectors wherever a chain or strap contacts the pipe edge. It protects both the cargo and the strap.\n\nDriver: Do I need to tarp?\n\nDispatcher: No, tarping isn't required for this load, but if the shipper requests it, we'll do it. I'll confirm with them.",
    key_phrases: [
      { phrase_uz: "Har 10 fut uchun 1 tie-down", phrase_en: "One tie-down per 10 feet" },
      { phrase_uz: "Dunnage qo'ying — dumalab ketmasin", phrase_en: "Use dunnage to prevent rolling" },
      { phrase_uz: "Edge protector har joyga", phrase_en: "Edge protectors at every contact point" }
    ]
  },
  {
    id: "script-7-2",
    chapter: 7,
    title_uz: "POD va paperwork tasdiqlash",
    title_en: "POD and paperwork confirmation",
    script_uz: "Dispatcher: Salom Kamol, yukni tushirdingizmi?\n\nHaydovchi: Ha, hozir tugatdim. Hammasi yaxshi, shortage yo'q.\n\nDispatcher: Yaxshi. BOL'ga receiver imzo qo'ydimi?\n\nHaydovchi: Ha, imzoladi va stamp bosdi.\n\nDispatcher: Mukammal. Endi menga kerak narsalar: imzolangan BOL'ning rasmini, delivery receipt va agar damage bo'lsa — damage report.\n\nHaydovchi: Damage yo'q, clean delivery. Rasmni hozir yuboraman.\n\nDispatcher: Yaxshi. Bu POD — proof of delivery. Buni 24 soat ichida yuborish kerak, aks holda to'lov kechikadi.\n\nHaydovchi: Tushunarli, 5 daqiqada scan qilib yuboraman.\n\nDispatcher: Rahmat. POD kelgach, men broker'ga invoice yuboraman. To'lov 30 kun ichida, lekin factoring ishlatamiz — siz 2 kunda olasiz.\n\nHaydovchi: Zo'r, rahmat.",
    script_en: "Dispatcher: Hey Kamol, did you finish unloading?\n\nDriver: Yes, just wrapped up. Everything looks good, no shortage.\n\nDispatcher: Good. Did the receiver sign the BOL?\n\nDriver: Yes, signed and stamped.\n\nDispatcher: Perfect. Here's what I need: a photo of the signed BOL, the delivery receipt, and if there's any damage — a damage report.\n\nDriver: No damage, clean delivery. I'll send the photo now.\n\nDispatcher: Great. This is the POD — proof of delivery. We need it within 24 hours, otherwise payment gets delayed.\n\nDriver: Got it, I'll scan and send in 5 minutes.\n\nDispatcher: Thanks. Once the POD comes in, I'll send the invoice to the broker. Payment is net 30, but we use factoring — you'll get paid in 2 days.\n\nDriver: Awesome, thanks.",
    key_phrases: [
      { phrase_uz: "POD — proof of delivery", phrase_en: "POD — proof of delivery" },
      { phrase_uz: "24 soat ichida yuboring", phrase_en: "Send within 24 hours" },
      { phrase_uz: "Factoring — 2 kunda to'lov", phrase_en: "Factoring — paid in 2 days" }
    ]
  },

  // ===== CHAPTER 8: US Highway and Road System =====
  {
    id: "script-8-1",
    chapter: 8,
    title_uz: "Yo'nalish rejalashtirish va ob-havo",
    title_en: "Route planning and weather",
    script_uz: "Dispatcher: Salom Sardor, ertangi Denver — Salt Lake City yukingiz haqida. I-70 orqali borish rejasi edi, lekin ob-havo ogohlantirishini ko'rdim.\n\nHaydovchi: Nima bo'lyapti?\n\nDispatcher: Vail Pass'da qattiq qor kutilayapti, ko'rinish past. CDOT chain law darajasi 2 — commercial vehicle'larga chain kerak yoki traction tires.\n\nHaydovchi: Menda chain bor, lekin 2 soat yo'qotaman chain taqish va yechishga.\n\nDispatcher: Alternative bor — I-80 orqali Wyoming'dan o'tsangiz, qor yo'q, lekin 3 soat uzoqroq.\n\nHaydovchi: Delivery qachon?\n\nDispatcher: Moddomki kechga, 6 PM. I-80 bilan ham 4 PM ga yetasiz.\n\nHaydovchi: Unday bo'lsa I-80 orqali boraman, chain bilan Vail Pass'da xavfli.\n\nDispatcher: To'g'ri qaror. Men receiver'ga yangilangan ETA beraman. Yo'lda Wyoming wind advisory bor, 45 mph — ehtiyot bo'ling.\n\nHaydovchi: Tushunarli, rahmat.",
    script_en: "Dispatcher: Hey Sardor, about tomorrow's Denver to Salt Lake City load. We planned to go via I-70, but I've seen a weather alert.\n\nDriver: What's going on?\n\nDispatcher: Heavy snow expected on Vail Pass, low visibility. CDOT chain law level 2 — commercial vehicles need chains or traction tires.\n\nDriver: I have chains, but I'll lose 2 hours putting them on and off.\n\nDispatcher: There's an alternative — go via I-80 through Wyoming. No snow, but it's 3 hours longer.\n\nDriver: When's the delivery?\n\nDispatcher: Tomorrow evening, 6 PM. With I-80, you'd still arrive by 4 PM.\n\nDriver: In that case, I'll take I-80. Vail Pass with chains is risky.\n\nDispatcher: Good call. I'll update the receiver with the new ETA. There's a wind advisory in Wyoming, 45 mph gusts — be careful.\n\nDriver: Got it, thanks.",
    key_phrases: [
      { phrase_uz: "Chain law darajasi 2", phrase_en: "Chain law level 2" },
      { phrase_uz: "Alternative — I-80 orqali Wyoming", phrase_en: "Alternative — I-80 through Wyoming" },
      { phrase_uz: "Wind advisory 45 mph", phrase_en: "Wind advisory 45 mph gusts" }
    ]
  },
  {
    id: "script-8-2",
    chapter: 8,
    title_uz: "Toll va permit muammosi",
    title_en: "Toll and permit issue",
    script_uz: "Haydovchi: Dispatcher, New York'ga kirayotganda bir muammo — mening EZ-Pass ishlamayapti va toll booth'da to'xtab qoldim.\n\nDispatcher: EZ-Pass transponder signal berayaptimi?\n\nHaydovchi: Yo'q, qizil chiroq yonayyapti.\n\nDispatcher: Yaxshi, toll booth'dagi attendant'ga ayting — manual payment qiling, receipt oling. Biz keyin EZ-Pass kompaniyaga murojaat qilamiz.\n\nHaydovchi: OK. Yana bir narsa — oversize permit kerakmi? Men 53-foot trailer bilan Manhattan'ga kirmoqchiman.\n\nDispatcher: Manhattan'da commercial vehicle restriction bor. 53-foot trailer faqat designated truck routes'da harakat qilishi mumkin. Men sizga approved route map yuboraman.\n\nHaydovchi: GW Bridge orqali kirsam bo'ladimi?\n\nDispatcher: Ha, George Washington Bridge commercial traffic uchun ochiq. Lekin Lincoln Tunnel'da height restriction bor — 13'6\". Sizning trailer height qancha?\n\nHaydovchi: 13'4\".\n\nDispatcher: O'tadi, lekin GW Bridge orqali borish yaxshiroq — restriction kam.",
    script_en: "Driver: Dispatcher, I've got an issue heading into New York — my EZ-Pass isn't working and I'm stuck at the toll booth.\n\nDispatcher: Is the EZ-Pass transponder giving a signal?\n\nDriver: No, red light is on.\n\nDispatcher: OK, tell the toll booth attendant — make a manual payment and get a receipt. We'll contact the EZ-Pass company afterwards.\n\nDriver: OK. One more thing — do I need an oversize permit? I'm entering Manhattan with a 53-foot trailer.\n\nDispatcher: Manhattan has commercial vehicle restrictions. A 53-foot trailer can only travel on designated truck routes. I'll send you the approved route map.\n\nDriver: Can I come in through GW Bridge?\n\nDispatcher: Yes, George Washington Bridge is open for commercial traffic. But Lincoln Tunnel has a height restriction — 13'6\". What's your trailer height?\n\nDriver: 13'4\".\n\nDispatcher: It would fit, but GW Bridge is the better route — fewer restrictions.",
    key_phrases: [
      { phrase_uz: "EZ-Pass ishlamayapti — manual payment", phrase_en: "EZ-Pass not working — manual payment" },
      { phrase_uz: "Designated truck routes'da harakat qiling", phrase_en: "Travel only on designated truck routes" },
      { phrase_uz: "Height restriction 13'6\"", phrase_en: "Height restriction 13'6\"" }
    ]
  },

  // ===== CHAPTER 9: US Safety and Compliance =====
  {
    id: "script-9-1",
    chapter: 9,
    title_uz: "DOT inspection tayyorgarligi",
    title_en: "DOT inspection preparation",
    script_uz: "Dispatcher: Salom Nodir, sizga eslatma — Georgia'da I-75 da inspection station ochiq. Tayyor bo'ling.\n\nHaydovchi: Nima tekshirishim kerak?\n\nDispatcher: Avvalo hujjatlar: CDL, medical card, vehicle registration, insurance card, va hozirgi yuk uchun BOL. Hammasini bir joyga tayyorlab qo'ying.\n\nHaydovchi: ELD to'g'rimi?\n\nDispatcher: Ha, ELD log'ingiz oxirgi 8 kunga to'g'ri ko'rsatyaptimi tekshiring. Unsynced data bo'lmasin. Agar manual edit qilgan bo'lsangiz, annotation yozing.\n\nHaydovchi: Truck inspection-chi?\n\nDispatcher: Lights, brakes, tires tekshiring. Ayniqsa brake adjustment va tire tread depth — eng ko'p violation shu ikki narsada. Air leak bo'lsa, hoziroq tuzating.\n\nHaydovchi: Fire extinguisher va triangle bormi tekshiray.\n\nDispatcher: Ha, 3 ta reflective triangle, fire extinguisher, va spare fuses. Bular yo'q bo'lsa, basic violation yozishadi.\n\nHaydovchi: Tayyor, hammasi bor.\n\nDispatcher: Yaxshi. Inspection natijasini menga yuboring — clean inspection bo'lsa, CSA score'ga ijobiy ta'sir qiladi.",
    script_en: "Dispatcher: Hey Nodir, heads up — the inspection station on I-75 in Georgia is open. Be ready.\n\nDriver: What should I check?\n\nDispatcher: First, documents: CDL, medical card, vehicle registration, insurance card, and the BOL for your current load. Have everything organized.\n\nDriver: Is my ELD in order?\n\nDispatcher: Yes, check that your ELD log is accurate for the last 8 days. No unsynced data. If you made any manual edits, add annotations.\n\nDriver: What about the truck inspection?\n\nDispatcher: Check lights, brakes, and tires. Especially brake adjustment and tire tread depth — those are the top two violations. If there's an air leak, fix it now.\n\nDriver: Let me check the fire extinguisher and triangles.\n\nDispatcher: Yes, 3 reflective triangles, fire extinguisher, and spare fuses. If those are missing, they'll write a basic violation.\n\nDriver: All good, I've got everything.\n\nDispatcher: Great. Send me the inspection results — a clean inspection positively impacts your CSA score.",
    key_phrases: [
      { phrase_uz: "CDL, medical card, registration, insurance, BOL", phrase_en: "CDL, medical card, registration, insurance, BOL" },
      { phrase_uz: "ELD log oxirgi 8 kun uchun to'g'ri bo'lsin", phrase_en: "ELD log accurate for last 8 days" },
      { phrase_uz: "Clean inspection — CSA score'ga ijobiy ta'sir", phrase_en: "Clean inspection positively impacts CSA score" }
    ]
  },
  {
    id: "script-9-2",
    chapter: 9,
    title_uz: "Accident report qilish",
    title_en: "Reporting an accident",
    script_uz: "Haydovchi: Dispatcher, accident bo'ldi! Mashina oldimga kesib o'tdi va men tormoz berdim — trailer boshqa lane'ga chiqib ketdi.\n\nDispatcher: Jarohatlanganlar bormi?\n\nHaydovchi: Men yaxshiman, boshqa mashinadagi odam ham yaxshi ko'rinyapti.\n\nDispatcher: Yaxshi. Birinchi navbatda — 911 ga qo'ng'iroq qiling, police report kerak. Keyin quyidagilarni qiling.\n\nHaydovchi: Ayting.\n\nDispatcher: 1 — Boshqa haydovchi bilan ma'lumot almashing: ism, telefon, insurance, license plate. 2 — Rasm oling: har ikki mashinaning zarar ko'rgan joylari, yo'l holati, traffic sign'lar. 3 — Guvohlar bo'lsa, ularning kontaktini oling.\n\nHaydovchi: Tushundim.\n\nDispatcher: Muhim — boshqa haydovchiga aybni tan olmang. Faqat faktlarni ayting. Police kelgach, officer'ga to'liq ma'lumot bering.\n\nHaydovchi: OK, hozir 911 ga qo'ng'iroq qilaman.\n\nDispatcher: Men insurance kompaniyaga va safety department'ga xabar beraman. Police report raqamini menga yuboring. Va ELD'dagi ma'lumotlarni o'zgartirmang — bu dalil bo'ladi.",
    script_en: "Driver: Dispatcher, I've been in an accident! A car cut in front of me, I hit the brakes — the trailer swung into the other lane.\n\nDispatcher: Is anyone injured?\n\nDriver: I'm fine, the other driver appears OK too.\n\nDispatcher: Good. First thing — call 911, we need a police report. Then do the following.\n\nDriver: Go ahead.\n\nDispatcher: 1 — Exchange information with the other driver: name, phone, insurance, license plate. 2 — Take photos: damage to both vehicles, road conditions, traffic signs. 3 — If there are witnesses, get their contact info.\n\nDriver: Got it.\n\nDispatcher: Important — do not admit fault to the other driver. Just state the facts. When the police arrive, give the officer complete information.\n\nDriver: OK, calling 911 now.\n\nDispatcher: I'll notify our insurance company and the safety department. Send me the police report number. And do not alter the ELD data — it's evidence.",
    key_phrases: [
      { phrase_uz: "911 ga qo'ng'iroq qiling", phrase_en: "Call 911" },
      { phrase_uz: "Aybni tan olmang", phrase_en: "Do not admit fault" },
      { phrase_uz: "ELD ma'lumotlarni o'zgartirmang — dalil", phrase_en: "Do not alter ELD data — it's evidence" }
    ]
  },
  {
    id: "script-9-3",
    chapter: 9,
    title_uz: "FMCSA audit tayyorgarligi",
    title_en: "FMCSA audit preparation",
    script_uz: "Safety Manager: Dispatcher, FMCSA bizga compliance review belgiladi. 2 hafta ichida auditor keladi.\n\nDispatcher: Qaysi hujjatlar tayyorlash kerak?\n\nSafety Manager: Avval driver qualification files — har bir haydovchi uchun: CDL nusxasi, MVR (motor vehicle record), medical certificate, road test certificate, va application for employment.\n\nDispatcher: Nechta haydovchimiz bor hozir?\n\nSafety Manager: 15 ta. Har birining DQ file'ni tekshiring — hech narsa expired bo'lmasin. Ayniqsa medical card'lar — 2 ta haydovchining yangilanishi kerak.\n\nDispatcher: Drug va alcohol test records-chi?\n\nSafety Manager: Ha, pre-employment, random, post-accident va reasonable suspicion test natijalari. Hammasining clearinghouse'da record'i bo'lishi kerak.\n\nDispatcher: Vehicle maintenance file'lar ham kerakmi?\n\nSafety Manager: Albatta — har bir truck va trailer uchun annual inspection, repair records, va DVIR (driver vehicle inspection reports). Oxirgi 12 oylik.\n\nDispatcher: Boshladim, hammasini tartibga keltiraman.",
    script_en: "Safety Manager: Dispatcher, FMCSA has scheduled a compliance review for us. The auditor comes in 2 weeks.\n\nDispatcher: What documents do we need to prepare?\n\nSafety Manager: First, driver qualification files — for each driver: CDL copy, MVR (motor vehicle record), medical certificate, road test certificate, and application for employment.\n\nDispatcher: How many drivers do we have currently?\n\nSafety Manager: 15. Check each driver's DQ file — nothing should be expired. Especially medical cards — 2 drivers need renewals.\n\nDispatcher: What about drug and alcohol test records?\n\nSafety Manager: Yes, pre-employment, random, post-accident, and reasonable suspicion test results. All should have records in the clearinghouse.\n\nDispatcher: Do we need vehicle maintenance files too?\n\nSafety Manager: Absolutely — for each truck and trailer: annual inspection, repair records, and DVIRs (driver vehicle inspection reports). Last 12 months.\n\nDispatcher: I'll get started, I'll organize everything.",
    key_phrases: [
      { phrase_uz: "Driver qualification files — har bir haydovchi uchun", phrase_en: "Driver qualification files — for each driver" },
      { phrase_uz: "Medical card expired bo'lmasin", phrase_en: "Medical cards must not be expired" },
      { phrase_uz: "DVIR — driver vehicle inspection reports", phrase_en: "DVIR — driver vehicle inspection reports" }
    ]
  }

];
