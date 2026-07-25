export type Country = {
  name: string;
  flag: string;
  region: string;
  traditions: string[];
  stereotypes: string[];
  food: string[];
  desserts: string[];
  movies: string[];
  music: string[];
  dateIdea: string;
};

export const countries: Country[] = [
  {
    name: "Włochy", flag: "🇮🇹", region: "Europa Południowa",
    traditions: ["Niedzielny obiad z całą rodziną", "Aperitivo o zachodzie słońca", "Passeggiata wieczorny spacer"],
    stereotypes: ["Mówią rękami", "Pizza i pasta to świętość", "Mamma zawsze ma rację"],
    food: ["Domowa carbonara (bez śmietany!)", "Bruschetta z pomidorami i bazylią", "Risotto alla milanese z szafranem", "Ossobuco alla milanese"],
    desserts: ["Tiramisu", "Panna cotta z owocami leśnymi", "Cannoli z ricottą", "Gelato al pistacchio"],
    movies: ["La Dolce Vita", "Cinema Paradiso", "Życie jest piękne"],
    music: ["Lucio Battisti", "Måneskin", "Andrea Bocelli – Con te partirò"],
    dateIdea: "Ugotujcie razem makaron od zera, zapalcie świece i pijcie Chianti przy włoskich klasykach."
  },
  {
    name: "Francja", flag: "🇫🇷", region: "Europa Zachodnia",
    traditions: ["Wieczorne picie wina z serami", "Apéro z przyjaciółmi", "Pocałunek w oba policzki"],
    stereotypes: ["Bagietka pod pachą", "Romantycy z natury", "Niechętnie mówią po angielsku"],
    food: ["Croissanty z masłem", "Quiche Lorraine", "Boeuf bourguignon", "Soupe à l'oignon gratinée"],
    desserts: ["Crème brûlée", "Tarte Tatin z jabłkami", "Macarons paryskie", "Profiteroles z czekoladą"],
    movies: ["Amélie", "Niedotykalni", "Pachnidło"],
    music: ["Édith Piaf – La Vie en Rose", "Stromae", "Daft Punk"],
    dateIdea: "Piknik z bagietką, serami i winem. W tle Piaf, na deser crème brûlée przy świetle świec."
  },
  {
    name: "Japonia", flag: "🇯🇵", region: "Azja Wschodnia",
    traditions: ["Hanami – oglądanie kwitnących wiśni", "Ceremonia parzenia herbaty", "Kłanianie się na powitanie"],
    stereotypes: ["Bardzo grzeczni i punktualni", "Pracoholicy", "Uwielbiają technologię i anime"],
    food: ["Sushi i sashimi", "Ramen", "Tempura warzywna", "Yakitori z grilla"],
    desserts: ["Mochi z nadzieniem anko", "Dorayaki z pastą azuki", "Wagashi sezonowe", "Matcha cheesecake"],
    movies: ["Spirited Away", "Twoje imię", "Siedmiu samurajów"],
    music: ["Joe Hisaishi", "Babymetal", "Ryuichi Sakamoto"],
    dateIdea: "Wieczór sushi własnej roboty, sake i seans Studia Ghibli pod kocem."
  },
  {
    name: "Hiszpania", flag: "🇪🇸", region: "Europa Południowa",
    traditions: ["Sjesta po obiedzie", "Późna kolacja po 22:00", "Flamenco i feria"],
    stereotypes: ["Gorącokrwiści", "Wszyscy tańczą flamenco", "Życie to fiesta"],
    food: ["Paella Valenciana", "Tapas z szynką i serem", "Tortilla española", "Gazpacho andaluzyjskie"],
    desserts: ["Churros z czekoladą", "Crema catalana", "Tarta de Santiago z migdałami", "Polvorones"],
    movies: ["Volver", "Labirynt fauna", "Mów do niej"],
    music: ["Rosalía", "Manu Chao", "Paco de Lucía"],
    dateIdea: "Wieczór tapas: kilka małych dań, sangria i nauka podstaw flamenco w salonie."
  },
  {
    name: "Meksyk", flag: "🇲🇽", region: "Ameryka Północna",
    traditions: ["Día de los Muertos", "Mariachi pod oknem", "Piñata na każde urodziny"],
    stereotypes: ["Sombrero i poncho", "Ostre jedzenie do wszystkiego", "Telenowele na potęgę"],
    food: ["Tacos al pastor", "Guacamole z tortillą", "Mole poblano", "Enchiladas verdes"],
    desserts: ["Churros z cynamonem i cukrem", "Tres leches cake", "Arroz con leche", "Flan de cajeta"],
    movies: ["Roma", "Coco", "Labirynt fauna"],
    music: ["Café Tacvba", "Selena", "Natalia Lafourcade"],
    dateIdea: "Taco night z domowym guacamole, margarity i seans 'Coco' z chusteczkami w pogotowiu."
  },
  {
    name: "Indie", flag: "🇮🇳", region: "Azja Południowa",
    traditions: ["Holi – festiwal kolorów", "Diwali – święto świateł", "Namaste na powitanie"],
    stereotypes: ["Bollywood i taniec na każdym kroku", "Ostre curry", "Krowy na ulicach"],
    food: ["Butter chicken", "Biryani", "Samosy z chutneyem", "Palak paneer z ryżem basmati"],
    desserts: ["Gulab jamun z syropem różanym", "Kheer – pudding ryżowy z kardamonem", "Jalebi", "Kulfi z pistacjami"],
    movies: ["3 Idiots", "Lagaan", "Dilwale Dulhania Le Jayenge"],
    music: ["A.R. Rahman", "Arijit Singh", "Ravi Shankar"],
    dateIdea: "Curry z naanem, chai masala i taneczna scena z Bollywood – spróbujcie powtórzyć choreografię."
  },
  {
    name: "Brazylia", flag: "🇧🇷", region: "Ameryka Południowa",
    traditions: ["Karnawał w Rio", "Churrasco w weekend", "Plażowa siatkówka i futebol"],
    stereotypes: ["Wszyscy tańczą samba", "Życie to plaża", "Piłka nożna to religia"],
    food: ["Feijoada z farofa i pomarańczą", "Pão de queijo", "Moqueca – gulasz rybny z mlekiem kokosowym", "Coxinha z kurczakiem"],
    desserts: ["Brigadeiro", "Bolo de rolo z guavą", "Pudim de leite – flan brazylijski", "Açaí z granolą"],
    movies: ["Miasto Boga", "Central do Brasil", "Tropa de Elite"],
    music: ["Tom Jobim – Garota de Ipanema", "Anitta", "Gilberto Gil"],
    dateIdea: "Caipirinhy, grill na balkonie i lekcja samby na YouTube – śmiechu gwarantowanego."
  },
  {
    name: "Korea Południowa", flag: "🇰🇷", region: "Azja Wschodnia",
    traditions: ["Chuseok – święto dziękczynienia", "Wspólne BBQ przy stole", "Skinpride i K-beauty"],
    stereotypes: ["K-pop opanował świat", "Maraton K-dram do rana", "Wszyscy wyglądają na 20 lat"],
    food: ["Korean BBQ", "Bibimbap", "Tteokbokki", "Kimchi jjigae"],
    desserts: ["Bingsu z truskawkami i mlekiem skondensowanym", "Hotteok – słodkie naleśniki z cynamonem", "Dalgona candy", "Yakgwa – miodowe ciasteczka"],
    movies: ["Parasite", "Old Boy", "Train to Busan"],
    music: ["BTS", "BLACKPINK", "IU"],
    dateIdea: "Domowe Korean BBQ, soju i maraton K-dramy lub seans 'Parasite'."
  },
  {
    name: "Tajlandia", flag: "🇹🇭", region: "Azja Południowo-Wschodnia",
    traditions: ["Songkran – wodny nowy rok", "Wai – ukłon ze złożonymi dłońmi", "Loy Krathong – puszczanie lampionów"],
    stereotypes: ["Kraj uśmiechu", "Street food wszędzie", "Tajskie masaże"],
    food: ["Pad Thai z krewetkami", "Tom yum goong", "Zielone curry z kurczakiem", "Som tum – sałatka z zielonej papai"],
    desserts: ["Mango sticky rice", "Khanom krok – kokosowe babeczki", "Tub tim krob – kasztany wodne w mleku kokosowym", "Roti z bananem i mlekiem skondensowanym"],
    movies: ["Plemię", "Ong-Bak", "Bad Genius"],
    music: ["Bird Thongchai", "Phum Viphurit", "Tilly Birds"],
    dateIdea: "Domowy pad thai, zimne piwo Singha i wzajemny masaż z olejkiem kokosowym."
  },
  {
    name: "Grecja", flag: "🇬🇷", region: "Europa Południowa",
    traditions: ["Talerz tłuczony na szczęście", "Wieczorne tawerny do nocy", "Wielkanoc prawosławna z jagnięciną"],
    stereotypes: ["Wszyscy mają na imię Nikos lub Maria", "Tańczą sirtaki przy każdej okazji", "Sjesta to święta sprawa"],
    food: ["Moussaka", "Gyros z tzatziki", "Sałatka grecka z fetą", "Spanakopita – szpinakowa pita"],
    desserts: ["Baklava z miodem i orzechami", "Loukoumades – smażone pączuszki z miodem", "Galaktoboureko – kremowe ciasto", "Rizogalo – pudding ryżowy"],
    movies: ["Grek Zorba", "Moje wielkie greckie wesele", "Niebieska sukienka"],
    music: ["Mikis Theodorakis", "Nana Mouskouri", "Despina Vandi"],
    dateIdea: "Mezze, retsina i sirtaki w salonie – z obowiązkowym 'Opa!' na koniec."
  },
  {
    name: "Wielka Brytania", flag: "🇬🇧", region: "Europa Zachodnia",
    traditions: ["Herbata o 17:00", "Sunday roast z rodziną", "Kolejka jako sport narodowy"],
    stereotypes: ["Zawsze rozmawiają o pogodzie", "Suchy humor i sarkazm", "Pub to drugi dom"],
    food: ["Fish and chips z octem", "Sunday roast z Yorkshire pudding", "Shepherd's pie", "Beans on toast"],
    desserts: ["Sticky toffee pudding", "Eton mess z truskawkami", "Victoria sponge cake", "Scones z clotted cream i dżemem"],
    movies: ["Notting Hill", "Trainspotting", "Cztery wesela i pogrzeb"],
    music: ["The Beatles", "Adele", "Arctic Monkeys"],
    dateIdea: "Fish and chips, ciemne piwo i seans brytyjskiej komedii romantycznej z herbatą na deser."
  },
  {
    name: "Niemcy", flag: "🇩🇪", region: "Europa Środkowa",
    traditions: ["Oktoberfest", "Jarmarki bożonarodzeniowe", "Niedziela to dzień ciszy"],
    stereotypes: ["Punktualność to świętość", "Porządek musi być", "Piwo i kiełbasa"],
    food: ["Currywurst", "Sznycel wiedeński", "Bretzle z masłem", "Sauerbraten z czerwoną kapustą"],
    desserts: ["Schwarzwälder Kirschtorte", "Apfelstrudel z lodami waniliowymi", "Lebkuchen – pierniczki", "Rote Grütze z bitą śmietaną"],
    movies: ["Życie na podsłuchu", "Good Bye, Lenin!", "Biegnij Lola, biegnij"],
    music: ["Rammstein", "Kraftwerk", "Nena – 99 Luftballons"],
    dateIdea: "Kiełbaski, precle i ciemne piwo. W tle Kraftwerk, później intensywne kino niemieckie."
  },
  {
    name: "Polska", flag: "🇵🇱", region: "Europa Środkowa",
    traditions: ["Wigilia z 12 potrawami", "Śmigus-dyngus", "Imieniny ważniejsze od urodzin"],
    stereotypes: ["Wódka i ogórek kiszony", "Narzekanie to sport narodowy", "Babcia karmi do utraty tchu"],
    food: ["Pierogi ruskie z okraszą", "Żurek w chlebie", "Bigos staropolski", "Kotlet schabowy z ziemniakami"],
    desserts: ["Sernik babci na kruchym spodzie", "Szarlotka z cynamonem", "Makowiec na Boże Narodzenie", "Faworki – chrust z cukrem pudrem"],
    movies: ["Dekalog", "Cold War", "Bogowie"],
    music: ["Czesław Niemen", "Dawid Podsiadło", "Chopin – Nokturny"],
    dateIdea: "Lepcie pierogi razem od zera, wódka na lód i seans 'Cold War' albo 'Dekalog'."
  },
  {
    name: "Chiny", flag: "🇨🇳", region: "Azja Wschodnia",
    traditions: ["Chiński Nowy Rok z tańcem smoka", "Festiwal Środka Jesieni", "Czerwone koperty na szczęście"],
    stereotypes: ["Wszystko produkują", "Ryż do każdego dania", "Kung-fu w genach"],
    food: ["Dim sum", "Kaczka po pekińsku", "Mapo tofu", "Wołowina po syczuańsku"],
    desserts: ["Tanghulu – kandyzowane owoce na patyku", "Nian gao – lepki placek ryżowy", "Egg tart – kremowe babeczki", "Mooncake z pastą z lotosu"],
    movies: ["Przyczajony tygrys, ukryty smok", "In the Mood for Love", "Bohater"],
    music: ["Faye Wong", "Jay Chou", "Lang Lang"],
    dateIdea: "Domowe dim sum, zielona herbata i klimatyczny seans 'In the Mood for Love'."
  },
  {
    name: "Argentyna", flag: "🇦🇷", region: "Ameryka Południowa",
    traditions: ["Asado w niedzielę", "Mate z bombillą podawane w kółko", "Tango w milongach do rana"],
    stereotypes: ["Wszyscy tańczą tango", "Mięso na śniadanie, obiad i kolację", "Messi to bóg"],
    food: ["Asado – grill mistrzowski", "Empanadas z mięsem i jajkiem", "Provoleta – grillowany ser", "Locro – gęsta zupa andyjska"],
    desserts: ["Dulce de leche na wszystkim", "Alfajores z kajmakiem", "Facturas – słodkie bułki z piekarni", "Medialunas z masłem"],
    movies: ["Tajemnica jej oczu", "Dziewięć królowych", "Wild Tales"],
    music: ["Carlos Gardel", "Gustavo Cerati", "Mercedes Sosa"],
    dateIdea: "Stek na patelni, malbec i lekcja tanga – nawet jeden krok robi różnicę."
  },
  {
    name: "Maroko", flag: "🇲🇦", region: "Afryka Północna",
    traditions: ["Ceremonia parzenia herbaty miętowej", "Hammam – łaźnia parowa", "Targi w medynie"],
    stereotypes: ["Wszędzie się targują", "Dywany na każdej ścianie", "Wielbłąd jako taksówka"],
    food: ["Tajine z jagnięciną i suszonymi śliwkami", "Kuskus piątkowy", "Pastilla z gołębiem", "Harira – pikantna zupa"],
    desserts: ["Chebakia – miodowe ciasteczka sezamowe", "M'hanncha – migdałowy wąż", "Sfenj – pączki marokańskie", "Briouats z migdałami i miodem"],
    movies: ["Casablanca", "Babel", "Karmazynowe niebo"],
    music: ["Nass El Ghiwane", "Hindi Zahra", "Saad Lamjarred"],
    dateIdea: "Tajine pod kocem, mocna mięta z herbatą i seans 'Casablanki'. Bonus: masaż olejkiem arganowym."
  },
  {
    name: "Egipt", flag: "🇪🇬", region: "Afryka Północna",
    traditions: ["Ramadan i iftar po zachodzie słońca", "Sziszowanie w kawiarniach", "Targowanie się o wszystko"],
    stereotypes: ["Piramidy i mumie wszędzie", "Wielbłądy zamiast aut", "Tańczą jak Kleopatra"],
    food: ["Koshari z makaronem i soczewicą", "Ful medames z oliwą i cytryną", "Mahshi – nadziewane warzywa", "Kofta na grillu"],
    desserts: ["Baklava z pistacjami", "Umm Ali – egipski pudding chlebowy", "Konafa z serem i syropem", "Basbousa – ciasto z semoliny"],
    movies: ["Dworzec centralny", "Yacoubian Building", "Mumia"],
    music: ["Umm Kulthum", "Amr Diab", "Mohamed Mounir"],
    dateIdea: "Koshari, mocna kawa po arabsku i dokument o piramidach – później wspólna nauka tańca brzucha."
  },
  {
    name: "RPA", flag: "🇿🇦", region: "Afryka",
    traditions: ["Braai – grill jako narodowy rytuał", "Ubuntu – 'jestem, bo my jesteśmy'", "11 oficjalnych języków"],
    stereotypes: ["Safari na każdym kroku", "Wszyscy umieją grillować", "Wuwuzela jako narodowy instrument"],
    food: ["Braai z boerewors i stekiem", "Bobotie z chutney", "Biltong – suszone mięso", "Samp and beans"],
    desserts: ["Malva pudding z kremowym sosem", "Koeksisters – skręcone słodkie pączki", "Melktert – tarta mleczna z cynamonem", "Peppermint crisp tart"],
    movies: ["Invictus", "Tsotsi", "Dystrykt 9"],
    music: ["Miriam Makeba", "Ladysmith Black Mambazo", "Die Antwoord"],
    dateIdea: "Grill na balkonie, południowoafrykańskie wino Pinotage i seans 'Invictusa' z Mandelą w tle."
  },
  {
    name: "Australia", flag: "🇦🇺", region: "Oceania",
    traditions: ["Australia Day z BBQ", "Surfing o świcie", "Vegemite na śniadanie"],
    stereotypes: ["Wszystko chce ich zabić", "Kangury skaczą po ulicach", "Mate to każdy"],
    food: ["Meat pie z sosem", "Vegemite na toście z masłem", "Barbecue z kiełbaskami", "Chiko roll"],
    desserts: ["Lamington – biszkopt w czekoladzie i kokosie", "Pavlova z owocami tropikalnymi", "Tim Tam slam z gorącą herbatą", "Golden Gaytime lody"],
    movies: ["Mad Max", "Crocodile Dundee", "Australia"],
    music: ["AC/DC", "Tame Impala", "INXS"],
    dateIdea: "Grill z dużą ilością mięsa, zimne piwo i maraton 'Mad Maxa'. G'day mate!"
  },
  {
    name: "Rosja", flag: "🇷🇺", region: "Europa Wschodnia",
    traditions: ["Banja – ruska sauna z brzozą", "Maslenica – tydzień blinów", "Toasty z wódką"],
    stereotypes: ["Wódka leje się strumieniami", "Niedźwiedzie na ulicach", "Wszyscy ponuro patrzą"],
    food: ["Pielmieni", "Borszcz ze śmietaną", "Bliny z kawiorem", "Sałatka Olivier"],
    desserts: ["Medovik – tort miodowy warstwowy", "Ptichye moloko – czekoladki z ptasim mleczkiem", "Zefir – rosyjskie pianki", "Pirozhki z dżemem"],
    movies: ["Stalker", "Lewiatan", "Ironia losu"],
    music: ["Czajkowski", "Wiktor Coj – Kino", "Pussy Riot"],
    dateIdea: "Pielmieni, lodowata wódka i mroczne kino Tarkowskiego pod ciężkim kocem."
  },
  {
    name: "Turcja", flag: "🇹🇷", region: "Eurazja",
    traditions: ["Mocna kawa turecka i wróżenie z fusów", "Hammam", "Bazar i targowanie"],
    stereotypes: ["Wszędzie kebab", "Wąsy = honor", "Czaj non stop"],
    food: ["Kebab adana", "Menemen – jajecznica po turecku", "Lahmacun – turecka pizza", "Manti – tureckie pierożki z jogurtem"],
    desserts: ["Baklava z pistacjami", "Künefe – ser z syropem", "Sütlaç – pudding ryżowy", "Lokum – tureckie delicje"],
    movies: ["Zimowy sen", "Trzy małpy", "Once Upon a Time in Anatolia"],
    music: ["Tarkan", "Sezen Aksu", "Barış Manço"],
    dateIdea: "Mezze, raki z lodem i wieczorne wróżenie sobie z fusów kawy. Romantyczne i tajemnicze."
  },
  {
    name: "Wietnam", flag: "🇻🇳", region: "Azja Południowo-Wschodnia",
    traditions: ["Tết – księżycowy Nowy Rok", "Picie kawy z mlekiem skondensowanym", "Kapelusze stożkowe"],
    stereotypes: ["Skutery wszędzie", "Pho na śniadanie", "Wszystko z ryżu"],
    food: ["Pho bo", "Bánh mì", "Sajgonki świeże", "Bun cha – grillowana wieprzowina z makaronem"],
    desserts: ["Chè – słodka zupa z fasoli lub owoców", "Bánh flan – wietnamski flan", "Che chuoi – banan w mleku kokosowym", "Banh cam – smażone kulki sezamowe"],
    movies: ["Zapach zielonej papai", "Cyklo", "Czas apokalipsy"],
    music: ["Trinh Cong Son", "Sơn Tùng M-TP", "Hoang Thuy Linh"],
    dateIdea: "Domowe pho, świeże sajgonki i kawa wietnamska z mlekiem skondensowanym na deser."
  },
  {
    name: "Indonezja", flag: "🇮🇩", region: "Azja Południowo-Wschodnia",
    traditions: ["Nyepi – dzień ciszy na Bali", "Wayang – teatr cieni", "Gotong royong – pomoc sąsiedzka"],
    stereotypes: ["17 tysięcy wysp i każda inna", "Wszędzie pachnie kadzidłem", "Surferzy na Bali"],
    food: ["Nasi goreng", "Satay z sosem orzechowym", "Rendang", "Gado-gado z sosem orzechowym"],
    desserts: ["Es campur – mieszane lody z owocami", "Klepon – kulki ryżowe z palmowym cukrem", "Pisang goreng – smażony banan", "Dadar gulung – naleśniki z kokosem"],
    movies: ["The Raid", "Marlina – morderczyni w czterech aktach", "Eat Pray Love"],
    music: ["Anggun", "Rich Brian", "Tulus"],
    dateIdea: "Nasi goreng z jajkiem sadzonym, świeczki kokosowe i seans 'Eat Pray Love'."
  },
  {
    name: "Kuba", flag: "🇨🇺", region: "Karaiby",
    traditions: ["Salsa w klubach do rana", "Cygara skręcane ręcznie", "Stare amerykańskie auta"],
    stereotypes: ["Wszyscy tańczą salsę", "Mojito i Hawana", "Cygaro w zębach"],
    food: ["Ropa vieja", "Moros y cristianos", "Tostones", "Lechón asado – pieczona wieprzowina"],
    desserts: ["Arroz con leche z cynamonem", "Natilla – kubański budyń", "Tres leches kubańskie", "Buñuelos kubańskie z anyżem"],
    movies: ["Truskawki i czekolada", "Buena Vista Social Club", "Powrót do Itaki"],
    music: ["Buena Vista Social Club", "Celia Cruz", "Compay Segundo"],
    dateIdea: "Mojito, czarne fasole z ryżem i lekcja salsy z Buena Vista Social Club w tle."
  },
  {
    name: "Holandia", flag: "🇳🇱", region: "Europa Zachodnia",
    traditions: ["King's Day na pomarańczowo", "Sinterklaas 5 grudnia", "Rower jako podstawowy transport"],
    stereotypes: ["Wszyscy jeżdżą na rowerach", "Tulipany i wiatraki", "Bezpośredni do bólu"],
    food: ["Bitterballen z musztardą", "Haring – śledź na surowo z cebulką", "Erwtensoep – gęsta zupa grochowa", "Stamppot z kiełbasą"],
    desserts: ["Stroopwafel na gorącej kawie", "Poffertjes – małe naleśniczki", "Oliebollen – pączki noworoczne", "Appeltaart z bitą śmietaną"],
    movies: ["Wskaż mi drogę do domu", "Czarna księga", "Antonia"],
    music: ["Tiësto", "Anouk", "Caro Emerald"],
    dateIdea: "Sery holenderskie, gouda i edam, do tego ciemne piwo i seans 'Czarnej księgi'."
  },
  {
    name: "Szwecja", flag: "🇸🇪", region: "Skandynawia",
    traditions: ["Midsommar – noc świętojańska", "Fika – przerwa na kawę i ciasto", "Lucia 13 grudnia"],
    stereotypes: ["Wszyscy są blondynami", "IKEA i klocki", "Zimne i powściągliwe"],
    food: ["Köttbullar z żurawiną i puree", "Gravlax z musztardą i koperkiem", "Toast Skagen z krewetkami", "Smörgåsbord z różnymi śledziami"],
    desserts: ["Kanelbullar – cynamonowe bułeczki", "Kladdkaka – lepkie czekoladowe brownie", "Prinsesstårta – tort księżniczki", "Semla z bitą śmietaną i marcepanem"],
    movies: ["Pozwól mi wejść", "Fanny i Aleksander", "Sami swoi"],
    music: ["ABBA", "Avicii", "First Aid Kit"],
    dateIdea: "Klopsiki z brusznicami, świece (hygge w szwedzkim wydaniu) i seans Bergmana albo… ABBA disco."
  },
  {
    name: "Norwegia", flag: "🇳🇴", region: "Skandynawia",
    traditions: ["Russefeiring – świętowanie maturzystów", "Hytte – domek w górach", "17 maja narodowy dzień"],
    stereotypes: ["Trolle w lasach", "Ciągle są na nartach", "Wszystko kosztuje fortunę"],
    food: ["Łosoś wędzony", "Brunost – brązowy ser", "Fårikål", "Kjøttkaker – norweskie kotleciki"],
    desserts: ["Skillingsbolle – cynamonowe bułki", "Multekrem – moroszka z bitą śmietaną", "Krumkake – wafelki z kremem", "Lefse z cukrem i masłem"],
    movies: ["Bestia", "Łowca trolli", "Najgorszy człowiek na świecie"],
    music: ["A-ha – Take On Me", "Aurora", "Sigrid"],
    dateIdea: "Wieczór z łososiem, świecami i seansem 'Najgorszego człowieka na świecie'. Hyggelig!"
  },
  {
    name: "Irlandia", flag: "🇮🇪", region: "Europa Zachodnia",
    traditions: ["Dzień Świętego Patryka na zielono", "Sesje muzyczne w pubach", "Storytelling przy ognisku"],
    stereotypes: ["Wszyscy rude i piegowate", "Guinness na śniadanie", "Leprechauny w lasach"],
    food: ["Irish stew", "Soda bread", "Shepherd's pie", "Boxty – ziemniaczane placki"],
    desserts: ["Irish cream cheesecake", "Barmbrack – chleb z rodzynkami", "Porter cake z Guinnessem", "Apple crumble z custard"],
    movies: ["The Banshees of Inisherin", "Dublińczycy", "Once"],
    music: ["U2", "Sinéad O'Connor", "The Cranberries"],
    dateIdea: "Irish stew, Guinness i seans 'The Banshees of Inisherin' z melancholijną irlandzką folkiem w tle."
  },
  {
    name: "Portugalia", flag: "🇵🇹", region: "Europa Południowa",
    traditions: ["Fado – melancholijne pieśni", "Festas dos Santos Populares", "Azulejos – niebieskie kafle"],
    stereotypes: ["Smutni i melancholijni", "Tylko sardynki i porto", "Saudade – tęsknota za wszystkim"],
    food: ["Bacalhau à Brás z jajkami i ziemniakami", "Caldo verde z chouriço", "Francesinha – kanapka po porto", "Sardinhas assadas – pieczone sardynki"],
    desserts: ["Pastéis de nata z cynamonem", "Arroz doce – pudding ryżowy", "Pudim flan – kremowy budyń", "Travesseiro z migdałami"],
    movies: ["Lisbon Story", "Tabu", "Letters from Fontainhas"],
    music: ["Amália Rodrigues", "Madredeus", "Mariza"],
    dateIdea: "Pastéis de nata, kieliszek porto i fado w tle – melancholia w najlepszym wydaniu."
  },
  {
    name: "Szwajcaria", flag: "🇨🇭", region: "Europa Środkowa",
    traditions: ["Fondue w zimowe wieczory", "Jodłowanie w Alpach", "Punktualność jak w zegarku"],
    stereotypes: ["Czekolada, zegarki i banki", "Wszyscy bogaci", "Krowy z dzwonkami"],
    food: ["Fondue serowe z bagietką", "Raclette z ziemniakami i ogórkami", "Rösti z jajkiem sadzonym", "Zürcher Geschnetzeltes z pieczarkami"],
    desserts: ["Czekolada Lindt i Toblerone", "Meringues z podwójną śmietaną", "Rüblitorte – marchewkowy tort", "Tirggel – miodowe ciasteczka"],
    movies: ["Heidi", "Dark Eye", "Sister"],
    music: ["DJ Bobo", "Stephan Eicher", "Sophie Hunger"],
    dateIdea: "Fondue serowe, białe wino i seans w klimatach alpejskich. Czekolada na deser obowiązkowa."
  },
  {
    name: "Austria", flag: "🇦🇹", region: "Europa Środkowa",
    traditions: ["Bal Wiedeński", "Kawiarnie kawowe z marmurem", "Sylwester z Radetzky Marsch"],
    stereotypes: ["Walc na każdym kroku", "Mozart i Sissi", "Sznycel i strudel"],
    food: ["Wiener Schnitzel z cytryną i sałatką", "Tafelspitz – gotowana wołowina z chrzanem", "Gulasch wiedeński", "Käsespätzle – serowe kluski"],
    desserts: ["Sachertorte z konfiturą morelową", "Apfelstrudel z lodami waniliowymi", "Kaiserschmarrn z powidłami śliwkowymi", "Linzer Torte z dżemem malinowym"],
    movies: ["Dziewczyna z perłą", "Amour", "Trzeci człowiek"],
    music: ["Mozart", "Falco – Rock Me Amadeus", "Conchita Wurst"],
    dateIdea: "Sznycel, kawa po wiedeńsku z bitą śmietaną i lekcja walca w salonie."
  },
  {
    name: "Belgia", flag: "🇧🇪", region: "Europa Zachodnia",
    traditions: ["Festiwale piwa", "Karnawał w Binche", "Frytki z majonezem"],
    stereotypes: ["Tylko czekolada, piwo i frytki", "Spór Flandria-Walonia", "Manneken Pis"],
    food: ["Moules-frites z białym winem", "Carbonnade flamande – wołowina w piwie", "Stoofvlees – flamandzki gulasz", "Américain préparé – tatar po belgijsku"],
    desserts: ["Gofry brukselskie z cukrem pudrem", "Czekoladki Godiva i Neuhaus", "Speculoos – korzenne ciasteczka", "Dame blanche – lody z gorącą czekoladą"],
    movies: ["Brugia, fuck you", "Dziecko", "Toto bohater"],
    music: ["Jacques Brel", "Stromae", "Angèle"],
    dateIdea: "Frytki z różnymi sosami, mocne belgijskie piwo i seans 'Brugia, fuck you' z Colinem Farrellem."
  },
  {
    name: "Czechy", flag: "🇨🇿", region: "Europa Środkowa",
    traditions: ["Piwiarnie i piwo na obiad", "Velikonoce z pomlázką", "Bramboráky na targach"],
    stereotypes: ["Piwo zamiast wody", "Suchy humor jak Szwejk", "Kluski do wszystkiego"],
    food: ["Svíčková z knedlikami i brusinkami", "Guláš z knedlikami", "Vepřo-knedlo-zelo – wieprzowina z kapustą", "Bramboráky – placki ziemniaczane"],
    desserts: ["Trdelník z cynamonem", "Koláče z nadzieniem owocowym", "Medovník – tort miodowy", "Buchty z twarogiem"],
    movies: ["Pociągi pod specjalnym nadzorem", "Lekcje Faraona", "Kolja"],
    music: ["Karel Gott", "Dvořák", "Iva Bittová"],
    dateIdea: "Knedliki ze svíčkową, ciemne piwo Kozel i seans 'Lekcji Faraona' albo czeskiej Nowej Fali."
  },
  {
    name: "Węgry", flag: "🇭🇺", region: "Europa Środkowa",
    traditions: ["Sylwester z pörkölt", "Tańce ludowe csárdás", "Łaźnie termalne w Budapeszcie"],
    stereotypes: ["Wszystko z papryką", "Niemożliwy język", "Tokaj do każdej okazji"],
    food: ["Gulyás z papryką i ziemniakami", "Lángos z czosnkiem i serem", "Halászlé – pikantna zupa rybna", "Töltött káposzta – gołąbki węgierskie"],
    desserts: ["Kürtőskalács – kominiarski kołacz", "Somlói galuska – biszkoptowy deser", "Dobos torta – tort czekoladowo-karmelowy", "Rétes – węgierski strudel z makiem"],
    movies: ["Syn Szawła", "O ciele i duszy", "Mefisto"],
    music: ["Liszt", "Omega", "Bea Palya"],
    dateIdea: "Pikantny gulasz, wino Tokaj i seans intensywnego węgierskiego kina."
  },
  {
    name: "Izrael", flag: "🇮🇱", region: "Bliski Wschód",
    traditions: ["Szabat od piątku wieczorem", "Pesach z macą", "Brunch na piasku w Tel Awiwie"],
    stereotypes: ["Wszyscy są bezpośredni", "Hummus to święta sprawa", "Pustynia i hi-tech jednocześnie"],
    food: ["Hummus z falafelem", "Szakszuka", "Sabich", "Falafel z amba i tahiną"],
    desserts: ["Rugelach z czekoladą", "Sfenj – pączki chanukowe", "Malabi – pudding różany", "Halwa z sezamu z czekoladą"],
    movies: ["Walc z Baszirem", "Footnote", "Synonimy"],
    music: ["Idan Raichel", "Asaf Avidan", "Ofra Haza"],
    dateIdea: "Szakszuka na śniadanio-kolację, dobry hummus z pitą i seans 'Walca z Baszirem'."
  },
  {
    name: "Iran", flag: "🇮🇷", region: "Bliski Wschód",
    traditions: ["Nowruz – perski Nowy Rok", "Poezja Hafeza recytowana na pamięć", "Czaj z kostką cukru w zębach"],
    stereotypes: ["Wszyscy mówią poezją", "Dywary perskie wszędzie", "Taarof – nadmierna grzeczność"],
    food: ["Chelo kabab", "Ghormeh sabzi", "Fesenjan – kurczak w sosie z orzechów i granatu", "Tahdig – chrupiący ryż ze złotą skórką"],
    desserts: ["Baklava perska z różą i kardamonem", "Faloodeh – sorbet z wermiszelem różanym", "Sholeh zard – pudding szafranowy", "Zulbia – chrupiące słodycze z syropem"],
    movies: ["Rozstanie", "Smak czereśni", "Klient"],
    music: ["Googoosh", "Mohsen Namjoo", "Hossein Alizadeh"],
    dateIdea: "Aromatyczny chelo kabab z szafranem, granat na deser i seans 'Rozstania' Asghara Farhadiego."
  },
  {
    name: "Kanada", flag: "🇨🇦", region: "Ameryka Północna",
    traditions: ["Hokej jako religia narodowa", "Thanksgiving w październiku", "Liść klonu na wszystkim"],
    stereotypes: ["Wszyscy mówią 'sorry'", "Syrop klonowy do wszystkiego", "Niedźwiedzie i łosie wszędzie"],
    food: ["Poutine z sosem i serem cheddar", "Tourtière – mięsna pita", "Lobster roll z Atlantyku", "Bannock – chleb rdzennych ludów"],
    desserts: ["Naleśniki z syropem klonowym", "Butter tarts z kajmakiem", "Nanaimo bars", "BeaverTails – smażone ciasto z cynamonem"],
    movies: ["Incendies", "Sami swoi", "Krwawiące serce"],
    music: ["Leonard Cohen", "Joni Mitchell", "Drake"],
    dateIdea: "Poutine z domowymi frytkami, naleśniki z syropem klonowym i Leonard Cohen w tle."
  },
  {
    name: "Nowa Zelandia", flag: "🇳🇿", region: "Oceania",
    traditions: ["Haka – wojenny taniec Maorysów", "Hāngī – jedzenie pieczone w ziemi", "Bushwalking w weekendy"],
    stereotypes: ["Więcej owiec niż ludzi", "Władca Pierścieni wszędzie", "Wszyscy są wyluzowani"],
    food: ["Hāngī – jedzenie pieczone w ziemi", "Whitebait fritters – placuszki z rybkami", "Lamb rack z sosem miętowym", "Hangi pork z kumara"],
    desserts: ["Pavlova z bitą śmietaną i kiwi", "Hokey pokey ice cream", "Anzac biscuits z płatkami owsianymi", "Afghans – czekoladowe ciasteczka z cornflakes"],
    movies: ["Władca Pierścieni", "Fortepian", "Polowanie na dzikie pieprze"],
    music: ["Lorde", "Crowded House", "Kimbra"],
    dateIdea: "Maraton 'Władcy Pierścieni' (wersja rozszerzona!), pieczeń jagnięca i Pinot Noir z Marlborough."
  },
  {
    name: "Etiopia", flag: "🇪🇹", region: "Afryka Wschodnia",
    traditions: ["Ceremonia parzenia kawy z kadzidłem", "Etiopski Nowy Rok we wrześniu", "Wspólne jedzenie z jednej tacy"],
    stereotypes: ["Kolebka kawy", "Wszyscy są maratończykami", "Najstarszy alfabet Afryki"],
    food: ["Injera z wat", "Doro wat – kurczak po etiopsku", "Kitfo", "Shiro – purée z ciecierzycy"],
    desserts: ["Fetira – słodkie naleśniki z miodem", "Himbasha – urodzinowe ciasto z kardamonem", "Baklava etiopska z miodem", "Genfo na słodko z masłem i miodem"],
    movies: ["Difret", "Lamb", "Adwa"],
    music: ["Mulatu Astatke", "Aster Aweke", "Mahmoud Ahmed"],
    dateIdea: "Etiopska kawa parzona ceremonialnie, injera z curry i jazz Mulatu Astatke w tle."
  },
  {
    name: "Nigeria", flag: "🇳🇬", region: "Afryka Zachodnia",
    traditions: ["Nollywood – kino na potęgę", "Wesela z setkami gości", "Aso ebi – pasujące stroje"],
    stereotypes: ["Wszyscy tańczą afrobeats", "Jollof rice to święta sprawa", "Spór z Ghaną kto ma lepszy jollof"],
    food: ["Jollof rice z grillowanym kurczakiem", "Suya – pikantne szaszłyki wołowe", "Egusi soup z fufu", "Pepper soup z kozim mięsem"],
    desserts: ["Puff puff – słodkie kulki", "Chin chin – chrupiące przekąski", "Nigerian buns z bananem", "Coconut candy – kokosowe cukierki"],
    movies: ["Lionheart", "King of Boys", "The Wedding Party"],
    music: ["Burna Boy", "Fela Kuti", "Wizkid"],
    dateIdea: "Pikantny jollof rice, suya na grillu i afrobeats playlist do tańca w salonie."
  },
  {
    name: "Kenia", flag: "🇰🇪", region: "Afryka Wschodnia",
    traditions: ["Safari w Masai Mara", "Skoki Masajów", "Harambee – wspólnota"],
    stereotypes: ["Tylko safari i lwy", "Wszyscy biegają maratony", "Akuna matata na każdą okazję"],
    food: ["Ugali z sukuma wiki", "Nyama choma – grillowane mięso", "Pilau z aromatycznymi przyprawami", "Githeri – fasola z kukurydzą"],
    desserts: ["Mandazi – smażone pączki", "Mahamri – słodkie bułeczki z kardamonem", "Kaimati – słodkie kulki z syropem", "Halwa kenijska z różą"],
    movies: ["Pożegnanie z Afryką", "Nairobi Half Life", "Rafiki"],
    music: ["Sauti Sol", "Eric Wainaina", "Suzanna Owiyo"],
    dateIdea: "Grillowane mięso (nyama choma), zimne piwo Tusker i dokument o Serengeti."
  },
  {
    name: "Peru", flag: "🇵🇪", region: "Ameryka Południowa",
    traditions: ["Inti Raymi – święto słońca", "Pisco sour jako narodowy koktajl", "Andyjskie festiwale w kolorach"],
    stereotypes: ["Lamy na każdym zdjęciu", "Wszyscy noszą poncho", "Machu Picchu to obowiązek"],
    food: ["Ceviche", "Lomo saltado", "Aji de gallina", "Causa rellena"],
    desserts: ["Picarones – pączki z dyni z syropem", "Alfajores z manjar blanco", "Mazamorra morada – fioletowy budyń", "Arroz con leche z cynamonem"],
    movies: ["Mleko smutku", "Mżawka", "Madeinusa"],
    music: ["Susana Baca", "Eva Ayllón", "Gian Marco"],
    dateIdea: "Ceviche z limonką i kolendrą, pisco sour i dokument o Machu Picchu."
  },
  {
    name: "Kolumbia", flag: "🇨🇴", region: "Ameryka Południowa",
    traditions: ["Karnawał w Barranquilla", "Kawa o każdej porze", "Cumbia i salsa wszędzie"],
    stereotypes: ["Wszyscy znają Pabla Escobara", "Najlepsza kawa na świecie", "Shakira to ikona narodowa"],
    food: ["Bandeja paisa", "Arepy", "Ajiaco", "Sancocho – sycąca zupa"],
    desserts: ["Obleas z arequipe", "Bocadillo z guawy z serem", "Natilla – kolumbijski budyń", "Buñuelos kolumbijskie na Boże Narodzenie"],
    movies: ["Embrace of the Serpent", "Maria, pełna łaski", "Monos"],
    music: ["Shakira", "Juanes", "Carlos Vives"],
    dateIdea: "Arepy z różnym nadzieniem, kolumbijska kawa i playlist Shakiry – tańce gwarantowane."
  },
  {
    name: "Chile", flag: "🇨🇱", region: "Ameryka Południowa",
    traditions: ["Asado niedzielne", "Cueca – taniec narodowy", "Empanadas na każde święto"],
    stereotypes: ["Tylko Andy i pustynia", "Wszystkie wina są chilijskie", "Najdłuższy kraj na świecie"],
    food: ["Empanadas de pino", "Pastel de choclo", "Completo – hot dog po chilijsku", "Pebre – chilijska salsa do chleba"],
    desserts: ["Leche asada – pieczony flan", "Alfajores chilijskie z dulce de leche", "Kuchen z jagodami", "Mote con huesillos – brzoskwiniowy deserowy napój"],
    movies: ["No", "Klub", "Una mujer fantástica"],
    music: ["Violeta Parra", "Inti-Illimani", "Mon Laferte"],
    dateIdea: "Empanadas z piekarnika, chilijskie Carménère i muzyka Violety Parra przy świecach."
  },
  {
    name: "Filipiny", flag: "🇵🇭", region: "Azja Południowo-Wschodnia",
    traditions: ["Karaoke jako sport narodowy", "Boże Narodzenie od września", "Fiesta w każdej wiosce", "Sabong – kontrowersyjne walki kogutów organizowane w wielu miejscach"],
    stereotypes: ["Wszyscy świetnie śpiewają", "Koszykówka to sport numer jeden – grają i kibicują wszędzie", "Boks to duma narodowa (Manny Pacquiao!)", "Jeepneys jako dzieła sztuki"],
    food: ["Adobo z kurczaka lub wieprzowiny", "Sinigang z tamaryndowcem", "Lechon kawali – chrupiąca wieprzowina", "Kare-kare – gulasz w sosie orzechowym"],
    desserts: ["Halo-halo z ube i leche flan", "Bibingka – ryżowe ciasto na bananowym liściu", "Turon – smażona bananowa sajgonka z brązowym cukrem", "Leche flan – kremowy budyń"],
    movies: ["Norte – the End of History", "Heneral Luna", "On the Job"],
    music: ["Lea Salonga", "IV of Spades", "Ben&Ben"],
    dateIdea: "Domowe adobo z ryżem, deser z ube na słodko i wieczór karaoke w salonie. Bez wymówek."
  },
  {
    name: "Pakistan", flag: "🇵🇰", region: "Azja Południowa",
    traditions: ["Mehndi – malowanie henną przed weselem", "Iftar w Ramadan", "Truck art – kolorowe ciężarówki"],
    stereotypes: ["Krykiet to religia", "Wszystko ostre", "Trzy dni weselne minimum"],
    food: ["Biryani", "Nihari", "Chicken karahi", "Haleem – gęsta potrawka mięsna"],
    desserts: ["Gulab jamun z syropem różanym", "Kheer – budyń ryżowy z kardamonem", "Jalebi z rabri", "Barfi z pistacjami"],
    movies: ["Khuda Kay Liye", "Bol", "Joyland"],
    music: ["Nusrat Fateh Ali Khan", "Atif Aslam", "Coke Studio Pakistan"],
    dateIdea: "Aromatyczne biryani, mocna herbata chai i seans Coke Studio – qawwali porywa serca."
  },
  {
    name: "Ukraina", flag: "🇺🇦", region: "Europa Wschodnia",
    traditions: ["Pisanki na Wielkanoc", "Wianki na Iwana Kupałę", "Wesela na 3 dni"],
    stereotypes: ["Wszyscy uwielbiają sało (słoninę)", "Kobiety są piękne", "Borszcz lepszy niż rosyjski"],
    food: ["Barszcz ukraiński", "Wareniki", "Sało z czarnym chlebem", "Holubci – gołąbki"],
    desserts: ["Medivnyk – ukraiński tort miodowy", "Makivnyk – makowiec", "Pampushky z dżemem", "Syrnyky – twarogowe placuszki z kwaśną śmietaną"],
    movies: ["Plemię", "Donbas", "Atlantida"],
    music: ["Okean Elzy", "Jamala", "DakhaBrakha"],
    dateIdea: "Wareniki lepione razem od zera, czerwony barszcz na obiad i koncerty DakhaBrakha na YouTube."
  },
  {
    name: "Islandia", flag: "🇮🇸", region: "Europa Północna",
    traditions: ["Þorrablót – uczta zimowa", "Hot poty w gorących źródłach", "Wiara w elfy i trolle"],
    stereotypes: ["Wszyscy są spokrewnieni", "Każdy pisze książkę", "Gejzery zamiast łazienek"],
    food: ["Pylsur – hot dog z wszystkimi sosami", "Plokkfiskur – ryba z ziemniakami", "Kjötsúpa – islandzka zupa jagnięca", "Hákarl – fermentowany rekin (dla odważnych)"],
    desserts: ["Skyr z borówkami i miodem", "Kleinur – islandzkie pączki", "Pönnukökur – islandzkie naleśniki z dżemem", "Hjónabandssæla – płatki owsiane z rabarbarem"],
    movies: ["101 Reykjavik", "Rams", "Woman at War"],
    music: ["Björk", "Sigur Rós", "Of Monsters and Men"],
    dateIdea: "Świeża ryba, gorąca kąpiel ze świecami (imitacja blue lagoon) i Sigur Rós w tle. Czysta magia."
  },
  {
    name: "Jamajka", flag: "🇯🇲", region: "Karaiby",
    traditions: ["Kultura soundsystemów na ulicach", "Silne znaczenie muzyki i społeczności", "Rastafarianizm i filozofia 'one love'"],
    stereotypes: ["Wszystko jest 'no problem, mon'", "Najszybsi sprinterzy świata (Usain Bolt)", "Dredy i kolory rasta wszędzie"],
    food: ["Jerk chicken z grilla", "Ackee and saltfish", "Rice and peas", "Jamaican patty z wołowiną"],
    desserts: ["Rum cake z bakaliami", "Gizzada – kokosowe tartletki", "Totoes – kokosowe ciasteczka", "Banana fritters z cynamonem"],
    movies: ["Cool Runnings", "The Harder They Come", "Marley (dokument)"],
    music: ["Bob Marley", "Sean Paul", "Reggae i dancehall klasyki"],
    dateIdea: "Jerk chicken z grilla, rum z colą i sorrel drink, a w tle Bob Marley i sesja dancehallu w salonie."
  },
  {
    name: "Malezja", flag: "🇲🇾", region: "Azja Południowo-Wschodnia",
    traditions: ["Hari Raya po Ramadanie", "Mamak – nocne knajpki otwarte do rana", "Mieszanka kultur malajskiej, chińskiej i indyjskiej"],
    stereotypes: ["Wszyscy kochają durian", "Trzy języki w jednym zdaniu", "Petronas Towers na każdym zdjęciu"],
    food: ["Nasi lemak z sambalem", "Laksa", "Roti canai z dhal", "Char kway teow"],
    desserts: ["Cendol z palmowym cukrem", "Kuih lapis – tęczowe ciasto ryżowe", "Ondeh-ondeh z palmowym cukrem", "Apam balik – naleśnik z orzeszkami ziemnymi"],
    movies: ["Sepet", "The Journey", "Bunohan"],
    music: ["Yuna", "Siti Nurhaliza", "Search"],
    dateIdea: "Nasi lemak z sambalem, mrożona teh tarik i seans 'Sepet' z malezyjskim klimatem mamak."
  },
  {
    name: "Singapur", flag: "🇸🇬", region: "Azja Południowo-Wschodnia",
    traditions: ["Hawker centres – kulinarne dziedzictwo UNESCO", "Chingay Parade", "Wieloetniczność jako fundament państwa"],
    stereotypes: ["Wszędzie czysto i zakazów bez liku", "Kara za gumę do żucia", "Najdroższe miasto świata"],
    food: ["Chili crab z bułeczkami", "Hainanese chicken rice", "Laksa singapurska", "Char kway teow z krewetkami"],
    desserts: ["Kaya toast z masłem i jajkiem", "Ice kachang – lody z syropem", "Ondeh-ondeh z palmowym cukrem", "Chendol z mleczkiem kokosowym"],
    movies: ["Ilo Ilo", "Crazy Rich Asians", "Apprentice"],
    music: ["Stefanie Sun", "JJ Lin", "The Sam Willows"],
    dateIdea: "Wieczór w stylu hawker center: kilka małych dań, chili crab i Singapore Sling przy świetle latarni."
  },
  {
    name: "Nepal", flag: "🇳🇵", region: "Azja Południowa",
    traditions: ["Namaste z dłońmi przy sercu", "Festiwal Dashain", "Pielgrzymki do Lumbini i Pashupatinath"],
    stereotypes: ["Wszyscy są szerpami", "Himalaje to codzienność", "Joga i medytacja od urodzenia"],
    food: ["Dal bhat z curry", "Momo ze sosem achar", "Thukpa – himalajska zupa z makaronem", "Gundruk – fermentowane liście warzyw"],
    desserts: ["Sel roti – ryżowy pierścień z cukrem", "Yomari – ryżowe pierożki z sezamem i palmowym cukrem", "Kheer – nepalna ryżowa zupa mleczna", "Sikarni – jogurt z owocami i orzechami"],
    movies: ["Kabaddi", "Highway", "White Sun"],
    music: ["1974 AD", "Bartika Eam Rai", "Sajjan Raj Vaidya"],
    dateIdea: "Lepcie momo razem od zera, do tego masala chai i dokument o Himalajach na koniec."
  },
  {
    name: "Mongolia", flag: "🇲🇳", region: "Azja Środkowa",
    traditions: ["Naadam – festiwal trzech męskich sportów", "Życie w jurtach (gerach)", "Pasterstwo nomadyczne"],
    stereotypes: ["Wszyscy są spadkobiercami Czyngis-chana", "Konie wszędzie", "Picie kumysu z miski"],
    food: ["Buuz – mongolskie pierożki na parze", "Khorkhog – mięso pieczone na rozgrzanych kamieniach", "Tsuivan – smażony makaron z baraniną", "Tsoivan – duszone mięso z warzywami"],
    desserts: ["Aaruul – suszony twaróg na słodko", "Boortsog – smażone ciasteczka", "Ul boov – mongolskie ciasto warstwowe", "Chak-chak z miodem"],
    movies: ["Opowieść o płaczącym wielbłądzie", "Mongol", "The Eagle Huntress"],
    music: ["The Hu", "Khusugtun", "Tradycyjny śpiew gardłowy khoomei"],
    dateIdea: "Buuz na parze, mocna czarna herbata z mlekiem i seans 'The Eagle Huntress' z The Hu w tle."
  },
  {
    name: "Sri Lanka", flag: "🇱🇰", region: "Azja Południowa",
    traditions: ["Festiwal Esala Perahera ze słoniami", "Ceremonia parzenia cejlońskiej herbaty", "Kiwanie głową na 'tak'"],
    stereotypes: ["Wszędzie cynamon i herbata", "Buddyjskie świątynie na każdym wzgórzu", "Krykiet to drugie życie"],
    food: ["Rice and curry z sambolem", "Hoppers (appa)", "Kottu roti", "Lamprais"],
    desserts: ["Watalappan – pudding z mleczka kokosowego", "Kavum – ryżowy olej cake", "Kokis – chrupiące ciastka", "Aluwa – słodycze z ryżowej mąki"],
    movies: ["The Forsaken Land", "Funny Boy", "With You, Without You"],
    music: ["Bathiya and Santhush", "Yohani – Manike Mage Hithe", "Iraj"],
    dateIdea: "Pikantne rice and curry, mrożona herbata cejlońska z imbirem i dokument o pociągu przez plantacje."
  },
  {
    name: "Kazachstan", flag: "🇰🇿", region: "Azja Środkowa",
    traditions: ["Nauryz – wiosenny Nowy Rok", "Kokpar – jeździecki sport z kozłem", "Eagle hunting – polowanie z orłem"],
    stereotypes: ["Wszyscy myślą o Boracie", "Step i konie po horyzont", "Wódka i konina do każdej okazji"],
    food: ["Beshbarmak – gotowane mięso z makaronem", "Kazy – suszona kiełbasa z koniny", "Plov z baraniną i marchewką", "Shashlik z jagnięciny"],
    desserts: ["Baursaki – smażone pączki z miodem", "Chak-chak – chrupiące ciasteczka z miodem", "Kurt – kulki z twarogu", "Samsa słodka z orzechami"],
    movies: ["Tulpan", "Mongol", "Kelin"],
    music: ["Dimash Kudaibergen", "Ninety One", "Tradycyjna dombra"],
    dateIdea: "Beshbarmak na dużym talerzu, czarna herbata z mlekiem i koncert Dimasha na YouTube."
  },
  {
    name: "Uzbekistan", flag: "🇺🇿", region: "Azja Środkowa",
    traditions: ["Czajchana – herbaciarnia jako centrum życia", "Wesela z setkami gości", "Jedwabny Szlak i bazary w Samarkandzie"],
    stereotypes: ["Plov na każdą okazję", "Niebieskie kopuły wszędzie", "Targowanie się to sztuka"],
    food: ["Plov uzbecki", "Manty – duże pierogi z baraniną", "Shashlik", "Samsa z piekarnika tandoor"],
    desserts: ["Halva uzbecka z sezamem", "Nishalda – deserek z pianek", "Navat – cukierki z cukru winogronowego", "Chak-chak z miodem"],
    movies: ["Tashkent – City of Bread", "The Sun Also Rises Over Tashkent", "Parizod"],
    music: ["Yulduz Usmonova", "Sevara Nazarkhan", "Tradycyjna muzyka shashmaqam"],
    dateIdea: "Plov z baraniną i marchewką w jednym kazanie, zielona herbata i wieczór z opowieściami z Jedwabnego Szlaku."
  },
  {
    name: "Tanzania", flag: "🇹🇿", region: "Afryka Wschodnia",
    traditions: ["Safari w Serengeti i wspinaczka na Kilimandżaro", "Ujamaa – filozofia wspólnoty", "Suahili jako język jednoczący"],
    stereotypes: ["Hakuna matata na wszystko", "Wszyscy mieszkają obok lwów", "Zanzibar to raj na ziemi"],
    food: ["Ugali z nyama choma", "Pilau zanzibarskie z przyprawami", "Mishkaki – szaszłyki wołowe", "Mchuzi wa samaki – ryba w sosie kokosowym"],
    desserts: ["Mandazi – smażone bułeczki z kardamonem", "Halwa zanzibarskie", "Vitumbua – ryżowe pączki", "Kaimati – słodkie kulki z syropem"],
    movies: ["Maangamizi", "T-Junction", "Bongoland"],
    music: ["Diamond Platnumz", "Ali Kiba", "Bongo Flava"],
    dateIdea: "Pilau z aromatycznymi przyprawami zanzibarskimi, świeży sok z marakui i dokument o Serengeti."
  },
  {
    name: "Ghana", flag: "🇬🇭", region: "Afryka Zachodnia",
    traditions: ["Tkactwo Kente – kolorowe wzory ze znaczeniem", "Festiwal Homowo", "Spór z Nigerią o najlepszy jollof"],
    stereotypes: ["Najlepszy jollof na świecie (sorry Nigeria)", "Wszyscy tańczą azonto", "Kakao i złoto w każdej kopalni"],
    food: ["Jollof rice po ghańsku z grillowanym kurczakiem", "Fufu z zupą egusi", "Banku z tilapią", "Waakye – ryż z fasolą"],
    desserts: ["Kelewele – smażona słodka plantain z imbirem", "Bofrot – smażone pączki", "Tatale – placki z dojrzałej plantain", "Coconut biscuits – kokosowe ciasteczka"],
    movies: ["The Burial of Kojo", "Children of the Mountain", "Azali"],
    music: ["Sarkodie", "Stonebwoy", "Daddy Lumba"],
    dateIdea: "Jollof rice po ghańsku z grillowanym kurczakiem i lekcja azonto z YouTube."
  },
  {
    name: "Senegal", flag: "🇸🇳", region: "Afryka Zachodnia",
    traditions: ["Teranga – senegalska gościnność", "Sabar – bębny i taniec", "Wspólne jedzenie z jednej miski"],
    stereotypes: ["Wszyscy są wysocy i eleganccy", "Zapaśnicy laamb to bohaterowie", "Boubou w każdym kolorze"],
    food: ["Thieboudienne – ryż z rybą", "Yassa poulet", "Mafé – gulasz z masłem orzechowym", "Pastels – smażone pierożki"],
    desserts: ["Thiakry – kuskus z jogurtem i mlekiem skondensowanym", "Ngalakh – kuskus z pastą orzechową", "Sombi – ryżowy pudding kokosowy", "Bissap – galaretka z hibiskusa"],
    movies: ["Atlantique", "Touki Bouki", "La Noire de…"],
    music: ["Youssou N'Dour", "Baaba Maal", "Ismael Lô"],
    dateIdea: "Thieboudienne z jednej miski, mocna mięta z herbatą ataya i koncerty Youssou N'Doura w tle."
  },
  {
    name: "Algieria", flag: "🇩🇿", region: "Afryka Północna",
    traditions: ["Raï – muzyka i bunt", "Kuskus piątkowy z rodziną", "Mocna kawa po algiersku"],
    stereotypes: ["Wszędzie Sahara", "Piłka nożna to religia", "Pustynia i kasba w jednym"],
    food: ["Couscous z baraniną i siedmioma warzywami", "Chorba frik – zupa z baraniną", "Mechoui – pieczona jagnięcina", "Chakhchoukha – kruche ciasto z gulaszem"],
    desserts: ["Makroud – ciastka z daktylami i miodem", "Baklava algierska z orzechami", "Zlabia – chrupiące słodycze z syropem", "Qalb el louz – ciasto z semoliną i migdałami"],
    movies: ["Bitwa o Algier", "Hors la loi", "Papicha"],
    music: ["Cheb Khaled", "Rachid Taha", "Souad Massi"],
    dateIdea: "Pachnący kuskus z baraniną, mięta z herbatą i koncerty Cheba Khaleda – obowiązkowa 'Aïcha'."
  },
  {
    name: "Tunezja", flag: "🇹🇳", region: "Afryka Północna",
    traditions: ["Hammam jako rytuał piękności", "Ceremonia herbaty miętowej z orzeszkami", "Niebiesko-białe domy Sidi Bou Said"],
    stereotypes: ["Wszędzie harissa do wszystkiego", "Plaża i medyna w jednym", "Skręcanie się nad targiem"],
    food: ["Brik z jajkiem i tuńczykiem", "Couscous tuniski z harissą i warzywami", "Lablabi – zupa z ciecierzycy", "Ojja – jajecznica z harissą i merguez"],
    desserts: ["Makroudh – ciasteczka z daktylami", "Baklava tunisienne", "Assida – pudding z semoliną", "Bambalouni – tunezyjskie pączki"],
    movies: ["The Man Who Sold His Skin", "Beauty and the Dogs", "A Son"],
    music: ["Emel Mathlouthi", "Latifa Arfaoui", "Saber Rebaï"],
    dateIdea: "Pikantne brik z jajkiem, mięta z herbatą z orzeszkami pinii i spacer po Sidi Bou Said na zdjęciach."
  },
  {
    name: "Boliwia", flag: "🇧🇴", region: "Ameryka Południowa",
    traditions: ["Karnawał w Oruro z diabolada", "Cholitas wrestling – panie w spódnicach na ringu", "Cocoa leaves przeciw chorobie wysokościowej"],
    stereotypes: ["Najwyższe miasto świata (La Paz)", "Cholity w melonikach", "Salar de Uyuni jak lustro"],
    food: ["Salteñas", "Pique macho", "Silpancho", "Anticuchos – szaszłyki z serca wołowego"],
    desserts: ["Buñuelos z syropem z trzciny", "Humintas – słodkie tamale", "Tawa tawa – smażone ciasto andyjskie", "Api morado – fioletowy napój z kukurydzy na słodko"],
    movies: ["Zama", "También la lluvia", "La nación clandestina"],
    music: ["Los Kjarkas", "Bonny Lovy", "Tradycyjna muzyka andyjska na zampoñas"],
    dateIdea: "Salteñas na rozgrzewkę, gorąca czekolada po andyjsku i dokument o Salar de Uyuni."
  },
  {
    name: "Urugwaj", flag: "🇺🇾", region: "Ameryka Południowa",
    traditions: ["Mate non stop, wszędzie i z każdym", "Asado niedzielne", "Candombe – afro-urugwajskie bębny"],
    stereotypes: ["Termos pod pachą do mate", "Wszyscy kochają piłkę (mistrzostwa 1930 i 1950)", "Najbardziej liberalny kraj regionu"],
    food: ["Chivito – kanapka z wołowiną i jajkiem", "Asado uruguayo z różnymi mięsami", "Milanesa napolitana z sosem pomidorowym", "Torta frita – smażone placki"],
    desserts: ["Dulce de leche w każdej formie", "Chajá – biszkoptowy tort z kremem", "Alfajores urugwajskie", "Pasta frola z marmoladą pigwową"],
    movies: ["Whisky", "El baño del Papa", "Una noche sin luna"],
    music: ["Jorge Drexler", "Rubén Rada", "No Te Va Gustar"],
    dateIdea: "Chivito z dużą ilością frytek, butelka Tannat i mate na deser pod gwiazdami."
  },
  {
    name: "Ekwador", flag: "🇪🇨", region: "Ameryka Południowa",
    traditions: ["Fiesta del Sol – Inti Raymi w Andach", "Cuy (świnka morska) na specjalne okazje", "Mitad del Mundo – stanie na równiku"],
    stereotypes: ["Wszyscy mają kapelusz panamski (który pochodzi z Ekwadoru!)", "Banany na każdym kroku", "Galapagos i żółwie"],
    food: ["Ceviche ekwadorskie z kukurydzą", "Llapingachos – placki ziemniaczane", "Encebollado – zupa rybna", "Locro de papa"],
    desserts: ["Pristiños z melasą", "Colada morada – gęsty fioletowy napój owocowy", "Higos con queso – figi z serem", "Rosero – owocowy napój deserowy"],
    movies: ["Ratas, Ratones, Rateros", "Pescador", "A tus espaldas"],
    music: ["Juan Fernando Velasco", "Nicola Cruz", "Pasillo ecuatoriano"],
    dateIdea: "Ceviche z popcornem (po ekwadorsku!), świeży sok z naranjilla i dokument o Galapagos."
  },
  {
    name: "Jordania", flag: "🇯🇴", region: "Bliski Wschód",
    traditions: ["Gościnność beduińska z herbatą", "Mansaf – narodowe danie podawane na specjalnych okazjach", "Hospitalité w namiotach Wadi Rum"],
    stereotypes: ["Petra na każdym zdjęciu", "Wszyscy są krewnymi króla", "Hummus lepszy niż w Izraelu (i odwrotnie)"],
    food: ["Mansaf – baranina z jameedem i ryżem", "Maqluba – odwrócony garnek z mięsem i warzywami", "Falafel z hummusem i pitą", "Musakhan – kurczak z sumakową cebulą"],
    desserts: ["Knafeh z serem i syropem różanym", "Basbousa z orzechami", "Halawet el-jibn – rolki serowe z syropem", "Maamoul – kruche ciasteczka z daktylami"],
    movies: ["Theeb", "Captain Abu Raed", "When Monaliza Smiled"],
    music: ["Macadi Nahhas", "Omar Al-Abdallat", "Tradycyjna muzyka beduińska"],
    dateIdea: "Mansaf z jameedem na dużym talerzu, mocna mięta z herbatą i seans 'Theeb' z pustynnym klimatem."
  },
  {
    name: "Liban", flag: "🇱🇧", region: "Bliski Wschód",
    traditions: ["Mezze – dziesiątki małych dań na środku stołu", "Życie nocne Bejrutu jak nigdzie", "Zaproszenia na kawę co pięć minut"],
    stereotypes: ["Wszyscy mają trzy paszporty", "Najlepszy hummus i tabbouleh (sorry reszto Bliskiego Wschodu)", "Cedr na fladze i wszędzie"],
    food: ["Tabbouleh", "Hummus z mięsem mielonym", "Manakish z za'atarem", "Kibbeh – kotleciki z burgulu"],
    desserts: ["Maamoul z różaną wodą", "Znoud el sit – smażone rurki z kremem", "Baklawa libańska z wodą różaną", "Muhallabia – mleczny pudding z pistacjami"],
    movies: ["Kafarnaum", "Caramel", "Insyallah a Boy"],
    music: ["Fairuz", "Mashrou' Leila", "Marcel Khalife"],
    dateIdea: "Mezze z dziesięcioma talerzykami, arak z lodem i Fairuz w poranne nuty – jak prawdziwi Bejruci."
  },
  {
    name: "Fidżi", flag: "🇫🇯", region: "Oceania",
    traditions: ["Ceremonia kava – picie z kokosa w kółku", "Meke – tradycyjny taniec i pieśni", "Bula! – pozdrowienie i sposób życia"],
    stereotypes: ["Wszyscy uśmiechają się non stop", "Rajskie plaże i palmy", "Rugby to religia"],
    food: ["Kokoda – fidżijskie ceviche w mleku kokosowym", "Lovo – jedzenie pieczone w ziemi", "Rourou – liście taro z mlekiem kokosowym", "Palusami z mięsem i mlekiem kokosowym"],
    desserts: ["Vakalolo – deserek z manioku i kokosa", "Coconut candy – kokosowe cukierki", "Banana cake z mlekiem kokosowym", "Duruka pudding – słodkie ciasto z trzciną cukrową"],
    movies: ["The Land Has Eyes", "Vai", "Cast Away (kręcony tutaj)"],
    music: ["Black Rose", "Laisa Vulakoro", "Tradycyjne pieśni meke"],
    dateIdea: "Kokoda w mleku kokosowym, świeży sok z marakui i wieczór z muzyką wyspiarską przy świecach."
  },
  {
    name: "Samoa", flag: "🇼🇸", region: "Oceania",
    traditions: ["Fa'a Samoa – samoańska droga życia", "Tatau – tradycyjny tatuaż ręczny", "Sunday to'ona'i – niedzielna rodzinna uczta"],
    stereotypes: ["Wszyscy grają w rugby (i są w nim świetni)", "Tatuaże od stóp do głów", "Najwięksi i najsilniejsi"],
    food: ["Palusami – liście taro z mlekiem kokosowym", "Oka – samoańskie ceviche z limonką", "Sapasui – samoański chow mein z wołowiną", "Faalifu fa'i – gotowany banan z mlekiem kokosowym"],
    desserts: ["Panipopo – bułeczki w sosie kokosowym", "Koko alaisa – czekoladowy pudding ryżowy", "Fa'apapa – twarde kokosowe ciasteczko", "Poi – pudding z taro z cukrem"],
    movies: ["The Orator (O Le Tulafale)", "Three Wise Cousins", "Moana (inspirowana Polinezją)"],
    music: ["Jerome Grey", "Tenelle", "Tradycyjne pieśni siva"],
    dateIdea: "Palusami z mlekiem kokosowym, świeży ananas i wieczór z polinezyjskimi pieśniami przy świecach."
  },
  {
    name: "Kostaryka", flag: "🇨🇷", region: "Ameryka Środkowa",
    traditions: ["Pura vida – filozofia życia bez stresu", "Niedzielne casado z rodziną", "Festyny z marimba i tańcami"],
    stereotypes: ["Zawsze uśmiechnięci i wyluzowani", "Surfują od rana do nocy", "Wszędzie leniwce i tukany"],
    food: ["Gallo pinto (ryż z czarną fasolą) na śniadanie", "Casado – obiadowy talerz z ryżem, fasolą i bananem", "Ceviche z ryby i limonki", "Chifrijo – fasola, ryż i skwarki"],
    desserts: ["Tres leches kostarykański", "Arroz con leche z cynamonem", "Cajeta – mleczny karmel", "Tamales słodkie z cukrem i rodzynkami"],
    movies: ["Agua fría de mar", "Princesas Rojas", "After Words (kręcony w Kostaryce)"],
    music: ["Editus", "Debi Nova", "Tradycyjne calypso z Limón"],
    dateIdea: "Gallo pinto na kolację, świeży sok z marakui i wieczór z dźwiękami dżungli oraz playlistą calypso."
  },
  {
    name: "Watykan", flag: "🇻🇦", region: "Europa Południowa",
    traditions: ["Niedzielne Anioł Pański na placu św. Piotra", "Msze papieskie i audiencje generalne", "Konklawe i biały dym z komina"],
    stereotypes: ["Wszędzie księża i zakonnice", "Najmniejsze państwo świata", "Gwardia Szwajcarska w kolorowych mundurach"],
    food: ["Pasta cacio e pepe z Rzymu", "Saltimbocca alla romana", "Carciofi alla giudia – karczoch po żydowsku", "Supplì – ryżowe kotleciki z mozzarellą"],
    desserts: ["Kremówka papieska (ulubiona Jana Pawła II)", "Maritozzi z bitą śmietaną", "Torta della nonna z kremem custard", "Ricciarelli – migdałowe ciasteczka ze Sieny"],
    movies: ["Habemus Papam", "Dwóch papieży", "Anioły i demony"],
    music: ["Chór Kaplicy Sykstyńskiej", "Gregoriańskie chorały", "Allegri – Miserere"],
    dateIdea: "Kremówki à la Wadowice, włoska kawa i wieczór z gregoriańskimi chorałami oraz albumem o Kaplicy Sykstyńskiej."
  },
  {
    name: "USA – Nowy Jork", flag: "🗽", region: "Ameryka Północna",
    traditions: ["Parada na Thanksgiving Macy's", "Sylwester na Times Square", "Brunch w niedzielę na Brooklynie"],
    stereotypes: ["Zawsze w pośpiechu i z kawą na wynos", "Każdy jest 'busy'", "Pizza na stojąco i bajgiel na śniadanie"],
    food: ["New York pizza slice na stojąco", "Bagel z cream cheese i łososiem", "Pastrami on rye u Katz's Deli", "Hot dog z Coney Island z musztardą"],
    desserts: ["New York cheesecake z Junior's", "Black and white cookie", "Egg cream – czekoladowy napój mleczny", "Cannoli z Little Italy"],
    movies: ["Annie Hall", "Manhattan", "Taksówkarz"],
    music: ["Jay-Z – Empire State of Mind", "Frank Sinatra – New York, New York", "The Strokes"],
    dateIdea: "Pizza slice na stojąco, spacer po Brooklyn Bridge i jazz w małym klubie w Greenwich Village."
  },
  {
    name: "USA – Luizjana", flag: "🤠", region: "Ameryka Północna",
    traditions: ["Niedzielny lunch po kościele", "Mardi Gras w Nowym Orleanie", "Front porch i sweet tea"],
    stereotypes: ["'Y'all' co drugie zdanie", "Wszystko smażone i z masłem", "Gościnność i 'bless your heart'"],
    food: ["Smażony kurczak z biscuits i gravy", "Gumbo z krewetkowym roux", "Shrimp and grits", "Jambalaya z kiełbasą andouille"],
    desserts: ["Pecan pie z waniliowymi lodami", "Beignets z cukrem pudrem z Café Du Monde", "Bread pudding z whiskey sauce", "Pralines – kremowe cukierki z pekanami"],
    movies: ["Przeminęło z wiatrem", "Forrest Gump", "Służące"],
    music: ["Elvis Presley", "Johnny Cash", "Louis Armstrong i jazz z Nowego Orleanu"],
    dateIdea: "Smażony kurczak, słodka herbata na ganku i wieczór z bluesem oraz Elvisem w tle."
  },
  {
    name: "USA – Teksas", flag: "🤠", region: "Ameryka Północna",
    traditions: ["Rodeo i State Fair of Texas", "Friday Night Lights – futbol w liceum to religia", "Honky-tonk i taniec country"],
    stereotypes: ["Wszystko jest większe w Teksasie", "Kowbojki, kapelusz i pickup truck", "BBQ to nie jedzenie, to styl życia"],
    food: ["Brisket z dymem hickory z Cole slaw", "Tex-Mex fajitas z guacamole", "Chili con carne (bez fasoli!)", "Chicken fried steak z białym gravy"],
    desserts: ["Kolache z owocowym nadzieniem", "Pecan pie po teksasku", "Blue Bell ice cream – wanilia z Teksasu", "Sopapillas z miodem"],
    movies: ["Olbrzym", "No Country for Old Men", "Dallas Buyers Club"],
    music: ["Willie Nelson", "George Strait", "ZZ Top"],
    dateIdea: "Brisket prosto z wędzarni, zimne piwo Lone Star i wieczór z country line dance w salonie."
  },
  {
    name: "USA – Kalifornia", flag: "🏄", region: "Ameryka Północna",
    traditions: ["Surf rano przed pracą", "Wine tasting w Napa Valley", "Hiking i yoga o wschodzie słońca"],
    stereotypes: ["Wszyscy są na diecie i robią jogę", "Avocado toast i kombucha do wszystkiego", "Korki na autostradzie 405"],
    food: ["California burrito (z frytkami w środku)", "Avocado toast", "Fish tacos z Baja", "In-N-Out Double-Double"],
    desserts: ["Ghirardelli czekoladowe brownie z San Francisco", "Fortune cookie z Chinatown", "Sourdough French toast z syropem klonowym", "Açaí bowl z granolą i owocami"],
    movies: ["La La Land", "Pulp Fiction", "The Big Lebowski"],
    music: ["The Beach Boys", "Dr. Dre", "Red Hot Chili Peppers"],
    dateIdea: "Fish tacos na plaży, sok ze świeżych warzyw i zachód słońca nad oceanem z indie playlistą."
  },
  {
    name: "USA – Floryda", flag: "🌴", region: "Ameryka Północna",
    traditions: ["Spring break w Miami", "Wieczorne spacery po Ocean Drive", "Wyprawy łodzią na Florida Keys"],
    stereotypes: ["'Florida Man' i absurdalne newsy", "Emeryci na golfcartach", "Aligator w każdym jeziorku"],
    food: ["Cuban sandwich z Tampa", "Stone crab claws z musztardowym sosem", "Ceviche w stylu Miami", "Grouper sandwich z plaży"],
    desserts: ["Key lime pie z bitą śmietaną", "Coconut flan po kubańsku", "Churros z czekoladą w stylu Miami", "Orange creamsicle – lody pomarańczowe"],
    movies: ["Miami Vice", "Moonlight", "Florida Project"],
    music: ["Pitbull", "Gloria Estefan", "Tom Petty"],
    dateIdea: "Cuban sandwich w Little Havana, mojito na dachu w South Beach i taniec do salsy nad oceanem."
  },
  {
    name: "USA – Hawaje", flag: "🌺", region: "Oceania",
    traditions: ["Luau z pieczonym wieprzem", "Taniec hula", "Powitanie 'Aloha' i girlanda lei na szyi"],
    stereotypes: ["Koszula w kwiaty na każdą okazję", "Wszyscy surfują", "Spokój i 'island time'"],
    food: ["Poke bowl z tuńczykiem", "Kalua pork z imu", "Loco moco", "Spam musubi"],
    desserts: ["Haupia – kokosowe galaretki", "Malasadas – hawajskie pączki z Leonarda's", "Shave ice z syropami", "Mochi ice cream"],
    movies: ["50 pierwszych randek", "Spadkobiercy", "Lilo i Stitch"],
    music: ["Israel Kamakawiwoʻole – Somewhere Over the Rainbow", "Ukulele covers", "Hawaiian slack-key guitar"],
    dateIdea: "Poke bowl na plaży Waikiki, ukulele w tle i zachód słońca z koktajlem mai tai."
  },
  {
    name: "USA – Tennessee", flag: "🎸", region: "Ameryka Północna",
    traditions: ["Grand Ole Opry w Nashville", "Whiskey tasting w Lynchburgu", "Pielgrzymka do Graceland"],
    stereotypes: ["Country music w każdym barze", "Wszyscy grają na gitarze", "Bourbon, biscuits i biblia"],
    food: ["Nashville hot chicken z kiszonymi ogórkami", "Memphis BBQ ribs z suchą marynatą", "Biscuits and gravy na śniadanie", "Country ham z czerwonym sosem"],
    desserts: ["Banana pudding z wafelkami Nilla", "Stack cake – jabłkowy tort warstwowy", "Moon Pie z marshmallow i czekoladą", "Peach cobbler z lodami waniliowymi"],
    movies: ["Walk the Line", "Coal Miner's Daughter", "Hustle & Flow"],
    music: ["Dolly Parton", "Johnny Cash", "Elvis Presley"],
    dateIdea: "Hot chicken w Nashville, szklaneczka Jack Daniel's i wieczór z koncertem country na żywo."
  },
  {
    name: "USA – Nevada", flag: "🎰", region: "Ameryka Północna",
    traditions: ["Wieczór w kasynie na Strip", "Śluby w Las Vegas w 15 minut", "Festiwal Burning Man na pustyni"],
    stereotypes: ["Wszystko świeci 24/7", "'What happens in Vegas...'", "Elvis udziela ślubów"],
    food: ["Bufet w kasynie – wszystkiego po trochu", "Shrimp cocktail za grosze w Downtown", "Prime rib steak na grubo", "In-N-Out burger o 3 w nocy"],
    desserts: ["Późnonocne diner pancakes z syropem", "Crème brûlée w kasynie", "Vegas wedding cake – biały tort waniliowy", "Churros z nutellą na Strip"],
    movies: ["Hangover", "Casino", "Ocean's Eleven"],
    music: ["Frank Sinatra w Sands", "The Killers", "Elvis w Vegas"],
    dateIdea: "Steak i czerwone wino, partia blackjacka i spacer po neonowym Strip do białego rana."
  },
  {
    name: "USA – Arizona", flag: "🌵", region: "Ameryka Północna",
    traditions: ["Wschód słońca nad Wielkim Kanionem", "Sedona vortex i duchowe retreaty", "Spring training baseballu"],
    stereotypes: ["Suchy upał ('but it's a dry heat')", "Kaktusy saguaro wszędzie", "Emeryci uciekający przed zimą"],
    food: ["Sonoran hot dog z fasolą i jalapeño", "Chimichanga z kurczakiem (wynaleziona w Tucson)", "Tamales z mięsem w liściu kukurydzy", "Carne asada fries"],
    desserts: ["Navajo frybread z miodem i cukrem pudrem", "Sopaipillas z syropem z opuncji", "Prickly pear sorbet – lody z opuncji", "Churros z czekoladą"],
    movies: ["Raising Arizona", "Psychoza", "Thelma i Louise"],
    music: ["Stevie Nicks", "Linkin Park (Chester Bennington z Phoenix)", "Alice Cooper"],
    dateIdea: "Chimichanga i margarita z opuncji, jeep przez pustynię i zachód słońca nad czerwonymi skałami Sedony."
  },
  {
    name: "USA – Alaska", flag: "🐻", region: "Ameryka Północna",
    traditions: ["Iditarod – wyścig psich zaprzęgów", "Łowienie łososia w sezonie", "Polowanie na zorzę polarną"],
    stereotypes: ["Niedźwiedzie na podwórku", "Łoś blokujący drogę", "Mężczyzn więcej niż kobiet"],
    food: ["Świeży łosoś z grilla z ziołami", "King crab legs z masłem cytrynowym", "Reindeer sausage z musztardą", "Halibut fish and chips po alasku"],
    desserts: ["Akutaq – eskimoskie lody z jagodami i tłuszczem", "Wild berry pie z borówkami", "Birch syrup pancakes", "Sourdough doughnuts po alaskijsku"],
    movies: ["Into the Wild", "Biały Kieł", "Grizzly Man"],
    music: ["Jewel", "Portugal. The Man", "Hobo Jim"],
    dateIdea: "Pieczony łosoś, gorąca herbata w termosie i wieczór pod kocem z patrzeniem w zorzę polarną."
  },
  {
    name: "Portoryko", flag: "🇵🇷", region: "Ameryka Północna",
    traditions: ["Parady i festiwale salsy w San Juan", "Nochebuena z lechonem i całą rodziną", "Domino na werandzie do późnej nocy"],
    stereotypes: ["Wszyscy tańczą salsę i reggaeton", "Głośna, roześmiana rodzina do 30 osób", "Bad Bunny leci z każdego samochodu"],
    food: ["Mofongo z czosnkiem i chicharrónem", "Lechón asado – pieczony prosiak", "Arroz con gandules z pigeon peas", "Alcapurrias – smażone paszteciki z bananów"],
    desserts: ["Tembleque – kokosowy budyń z cynamonem", "Flan de queso", "Piña colada cake", "Besitos de coco – kokosowe całuski"],
    movies: ["West Side Story", "El Cantante", "Fast & Furious 5 (kręcony w San Juan)"],
    music: ["Bad Bunny", "Daddy Yankee", "Marc Anthony"],
    dateIdea: "Mofongo z krewetkami, piña colada w Old San Juan i taniec salsy pod palmami przy dźwiękach reggaetonu."
  }
];
