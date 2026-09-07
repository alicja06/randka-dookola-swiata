export type Country = {
  name: string;
  region: string;
  traditions: string[];
  stereotypes: string[];
  food: string[];
  desserts: string[];
  movies: string[];
  music: string[];
};

export const countries: Country[] = [
  {
    name: "Włochy", region: "Europa Południowa",
    traditions: ["Niedzielny obiad z całą rodziną", "Aperitivo o zachodzie słońca", "Passeggiata wieczorny spacer"],
    stereotypes: ["Mówią rękami", "Pizza i pasta to świętość", "Mamma zawsze ma rację"],
    food: ["Domowa carbonara (bez śmietany!)", "Bruschetta z pomidorami i bazylią", "Risotto alla milanese z szafranem", "Ossobuco alla milanese"],
    desserts: ["Tiramisu", "Panna cotta z owocami leśnymi", "Cannoli z ricottą", "Gelato al pistacchio"],
    movies: ["La Dolce Vita", "Cinema Paradiso", "Życie jest piękne"],
    music: ["Lucio Battisti", "Måneskin", "Andrea Bocelli – Con te partirò"]
  },
  {
    name: "Francja", region: "Europa Zachodnia",
    traditions: ["Wieczorne picie wina z serami", "Apéro z przyjaciółmi", "Pocałunek w oba policzki"],
    stereotypes: ["Bagietka pod pachą", "Romantycy z natury", "Niechętnie mówią po angielsku"],
    food: ["Croissanty z masłem", "Quiche Lorraine", "Boeuf bourguignon", "Soupe à l'oignon gratinée"],
    desserts: ["Crème brûlée", "Tarte Tatin z jabłkami", "Macarons paryskie", "Profiteroles z czekoladą"],
    movies: ["Amélie", "Niedotykalni", "Pachnidło"],
    music: ["Édith Piaf – La Vie en Rose", "Stromae", "Daft Punk"]
  },
  {
    name: "Japonia", region: "Azja Wschodnia",
    traditions: ["Hanami – oglądanie kwitnących wiśni", "Ceremonia parzenia herbaty", "Kłanianie się na powitanie"],
    stereotypes: ["Bardzo grzeczni i punktualni", "Pracoholicy", "Uwielbiają technologię i anime"],
    food: ["Sushi i sashimi", "Ramen", "Tempura warzywna", "Yakitori z grilla"],
    desserts: ["Mochi z nadzieniem anko", "Dorayaki z pastą azuki", "Wagashi sezonowe", "Matcha cheesecake"],
    movies: ["Spirited Away", "Twoje imię", "Siedmiu samurajów"],
    music: ["Joe Hisaishi", "Babymetal", "Ryuichi Sakamoto"]
  },
  {
    name: "Hiszpania", region: "Europa Południowa",
    traditions: ["Sjesta po obiedzie", "Późna kolacja po 22:00", "Flamenco i feria"],
    stereotypes: ["Gorącokrwiści", "Wszyscy tańczą flamenco", "Życie to fiesta"],
    food: ["Paella Valenciana", "Tapas z szynką i serem", "Tortilla española", "Gazpacho andaluzyjskie"],
    desserts: ["Churros z czekoladą", "Crema catalana", "Tarta de Santiago z migdałami", "Polvorones"],
    movies: ["Volver", "Labirynt fauna", "Mów do niej"],
    music: ["Rosalía", "Manu Chao", "Paco de Lucía"]
  },
  {
    name: "Meksyk", region: "Ameryka Północna",
    traditions: ["Día de los Muertos", "Mariachi pod oknem", "Piñata na każde urodziny"],
    stereotypes: ["Sombrero i poncho", "Ostre jedzenie do wszystkiego", "Telenowele na potęgę"],
    food: ["Tacos al pastor", "Guacamole z tortillą", "Mole poblano", "Enchiladas verdes"],
    desserts: ["Churros z cynamonem i cukrem", "Tres leches cake", "Arroz con leche", "Flan de cajeta"],
    movies: ["Roma", "Coco", "Labirynt fauna"],
    music: ["Café Tacvba", "Selena", "Natalia Lafourcade"]
  },
  {
    name: "Indie", region: "Azja Południowa",
    traditions: ["Holi – festiwal kolorów", "Diwali – święto świateł", "Namaste na powitanie"],
    stereotypes: ["Bollywood i taniec na każdym kroku", "Ostre curry", "Krowy na ulicach"],
    food: ["Butter chicken", "Biryani", "Samosy z chutneyem", "Palak paneer z ryżem basmati"],
    desserts: ["Gulab jamun z syropem różanym", "Kheer – pudding ryżowy z kardamonem", "Jalebi", "Kulfi z pistacjami"],
    movies: ["3 Idiots", "Lagaan", "Dilwale Dulhania Le Jayenge"],
    music: ["A.R. Rahman", "Arijit Singh", "Ravi Shankar"]
  },
  {
    name: "Brazylia", region: "Ameryka Południowa",
    traditions: ["Karnawał w Rio", "Churrasco w weekend", "Plażowa siatkówka i futebol"],
    stereotypes: ["Wszyscy tańczą samba", "Życie to plaża", "Piłka nożna to religia"],
    food: ["Feijoada z farofa i pomarańczą", "Pão de queijo", "Moqueca – gulasz rybny z mlekiem kokosowym", "Coxinha z kurczakiem"],
    desserts: ["Brigadeiro", "Bolo de rolo z guavą", "Pudim de leite – flan brazylijski", "Açaí z granolą"],
    movies: ["Miasto Boga", "Central do Brasil", "Tropa de Elite"],
    music: ["Tom Jobim – Garota de Ipanema", "Anitta", "Gilberto Gil"]
  },
  {
    name: "Korea Południowa", region: "Azja Wschodnia",
    traditions: ["Chuseok – święto dziękczynienia", "Wspólne BBQ przy stole", "Skinpride i K-beauty"],
    stereotypes: ["K-pop opanował świat", "Maraton K-dram do rana", "Wszyscy wyglądają na 20 lat"],
    food: ["Korean BBQ", "Bibimbap", "Tteokbokki", "Kimchi jjigae"],
    desserts: ["Bingsu z truskawkami i mlekiem skondensowanym", "Hotteok – słodkie naleśniki z cynamonem", "Dalgona candy", "Yakgwa – miodowe ciasteczka"],
    movies: ["Parasite", "Old Boy", "Train to Busan"],
    music: ["BTS", "BLACKPINK", "IU"]
  },
  {
    name: "Tajlandia", region: "Azja Południowo-Wschodnia",
    traditions: ["Songkran – wodny nowy rok", "Wai – ukłon ze złożonymi dłońmi", "Loy Krathong – puszczanie lampionów"],
    stereotypes: ["Kraj uśmiechu", "Street food wszędzie", "Tajskie masaże"],
    food: ["Pad Thai z krewetkami", "Tom yum goong", "Zielone curry z kurczakiem", "Som tum – sałatka z zielonej papai"],
    desserts: ["Mango sticky rice", "Khanom krok – kokosowe babeczki", "Tub tim krob – kasztany wodne w mleku kokosowym", "Roti z bananem i mlekiem skondensowanym"],
    movies: ["Plemię", "Ong-Bak", "Bad Genius"],
    music: ["Bird Thongchai", "Phum Viphurit", "Tilly Birds"]
  },
  {
    name: "Grecja", region: "Europa Południowa",
    traditions: ["Talerz tłuczony na szczęście", "Wieczorne tawerny do nocy", "Wielkanoc prawosławna z jagnięciną"],
    stereotypes: ["Wszyscy mają na imię Nikos lub Maria", "Tańczą sirtaki przy każdej okazji", "Sjesta to święta sprawa"],
    food: ["Moussaka", "Gyros z tzatziki", "Sałatka grecka z fetą", "Spanakopita – szpinakowa pita"],
    desserts: ["Baklava z miodem i orzechami", "Loukoumades – smażone pączuszki z miodem", "Galaktoboureko – kremowe ciasto", "Rizogalo – pudding ryżowy"],
    movies: ["Grek Zorba", "Moje wielkie greckie wesele", "Niebieska sukienka"],
    music: ["Mikis Theodorakis", "Nana Mouskouri", "Despina Vandi"]
  },
  {
    name: "Wielka Brytania", region: "Europa Zachodnia",
    traditions: ["Herbata o 17:00", "Sunday roast z rodziną", "Kolejka jako sport narodowy"],
    stereotypes: ["Zawsze rozmawiają o pogodzie", "Suchy humor i sarkazm", "Pub to drugi dom"],
    food: ["Fish and chips z octem", "Sunday roast z Yorkshire pudding", "Shepherd's pie", "Beans on toast"],
    desserts: ["Sticky toffee pudding", "Eton mess z truskawkami", "Victoria sponge cake", "Scones z clotted cream i dżemem"],
    movies: ["Notting Hill", "Trainspotting", "Cztery wesela i pogrzeb"],
    music: ["The Beatles", "Adele", "Arctic Monkeys"]
  },
  {
    name: "Niemcy", region: "Europa Środkowa",
    traditions: ["Oktoberfest", "Jarmarki bożonarodzeniowe", "Niedziela to dzień ciszy"],
    stereotypes: ["Punktualność to świętość", "Porządek musi być", "Piwo i kiełbasa"],
    food: ["Currywurst", "Sznycel wiedeński", "Bretzle z masłem", "Sauerbraten z czerwoną kapustą"],
    desserts: ["Schwarzwälder Kirschtorte", "Apfelstrudel z lodami waniliowymi", "Lebkuchen – pierniczki", "Rote Grütze z bitą śmietaną"],
    movies: ["Życie na podsłuchu", "Good Bye, Lenin!", "Biegnij Lola, biegnij"],
    music: ["Rammstein", "Kraftwerk", "Nena – 99 Luftballons"]
  },
  {
    name: "Polska", region: "Europa Środkowa",
    traditions: ["Wigilia z 12 potrawami", "Śmigus-dyngus", "Imieniny ważniejsze od urodzin"],
    stereotypes: ["Wódka i ogórek kiszony", "Narzekanie to sport narodowy", "Babcia karmi do utraty tchu"],
    food: ["Pierogi ruskie z okraszą", "Żurek w chlebie", "Bigos staropolski", "Kotlet schabowy z ziemniakami"],
    desserts: ["Sernik babci na kruchym spodzie", "Szarlotka z cynamonem", "Makowiec na Boże Narodzenie", "Faworki – chrust z cukrem pudrem"],
    movies: ["Dekalog", "Cold War", "Bogowie"],
    music: ["Czesław Niemen", "Dawid Podsiadło", "Chopin – Nokturny"]
  },
  {
    name: "Chiny", region: "Azja Wschodnia",
    traditions: ["Chiński Nowy Rok z tańcem smoka", "Festiwal Środka Jesieni", "Czerwone koperty na szczęście"],
    stereotypes: ["Wszystko produkują", "Ryż do każdego dania", "Kung-fu w genach"],
    food: ["Dim sum", "Kaczka po pekińsku", "Mapo tofu", "Wołowina po syczuańsku"],
    desserts: ["Tanghulu – kandyzowane owoce na patyku", "Nian gao – lepki placek ryżowy", "Egg tart – kremowe babeczki", "Mooncake z pastą z lotosu"],
    movies: ["Przyczajony tygrys, ukryty smok", "In the Mood for Love", "Bohater"],
    music: ["Faye Wong", "Jay Chou", "Lang Lang"]
  },
  {
    name: "Argentyna", region: "Ameryka Południowa",
    traditions: ["Asado w niedzielę", "Mate z bombillą podawane w kółko", "Tango w milongach do rana"],
    stereotypes: ["Wszyscy tańczą tango", "Mięso na śniadanie, obiad i kolację", "Messi to bóg"],
    food: ["Asado – grill mistrzowski", "Empanadas z mięsem i jajkiem", "Provoleta – grillowany ser", "Locro – gęsta zupa andyjska"],
    desserts: ["Dulce de leche na wszystkim", "Alfajores z kajmakiem", "Facturas – słodkie bułki z piekarni", "Medialunas z masłem"],
    movies: ["Tajemnica jej oczu", "Dziewięć królowych", "Wild Tales"],
    music: ["Carlos Gardel", "Gustavo Cerati", "Mercedes Sosa"]
  },
  {
    name: "Maroko", region: "Afryka Północna",
    traditions: ["Ceremonia parzenia herbaty miętowej", "Hammam – łaźnia parowa", "Targi w medynie"],
    stereotypes: ["Wszędzie się targują", "Dywany na każdej ścianie", "Wielbłąd jako taksówka"],
    food: ["Tajine z jagnięciną i suszonymi śliwkami", "Kuskus piątkowy", "Pastilla z gołębiem", "Harira – pikantna zupa"],
    desserts: ["Chebakia – miodowe ciasteczka sezamowe", "M'hanncha – migdałowy wąż", "Sfenj – pączki marokańskie", "Briouats z migdałami i miodem"],
    movies: ["Casablanca", "Babel", "Karmazynowe niebo"],
    music: ["Nass El Ghiwane", "Hindi Zahra", "Saad Lamjarred"]
  },
  {
    name: "Egipt", region: "Afryka Północna",
    traditions: ["Ramadan i iftar po zachodzie słońca", "Sziszowanie w kawiarniach", "Targowanie się o wszystko"],
    stereotypes: ["Piramidy i mumie wszędzie", "Wielbłądy zamiast aut", "Tańczą jak Kleopatra"],
    food: ["Koshari z makaronem i soczewicą", "Ful medames z oliwą i cytryną", "Mahshi – nadziewane warzywa", "Kofta na grillu"],
    desserts: ["Baklava z pistacjami", "Umm Ali – egipski pudding chlebowy", "Konafa z serem i syropem", "Basbousa – ciasto z semoliny"],
    movies: ["Dworzec centralny", "Yacoubian Building", "Mumia"],
    music: ["Umm Kulthum", "Amr Diab", "Mohamed Mounir"]
  },
  {
    name: "Australia", region: "Oceania",
    traditions: ["Australia Day z BBQ", "Surfing o świcie", "Vegemite na śniadanie"],
    stereotypes: ["Wszystko chce ich zabić", "Kangury skaczą po ulicach", "Mate to każdy"],
    food: ["Meat pie z sosem", "Vegemite na toście z masłem", "Barbecue z kiełbaskami", "Chiko roll"],
    desserts: ["Lamington – biszkopt w czekoladzie i kokosie", "Pavlova z owocami tropikalnymi", "Tim Tam slam z gorącą herbatą", "Golden Gaytime lody"],
    movies: ["Mad Max", "Crocodile Dundee", "Australia"],
    music: ["AC/DC", "Tame Impala", "INXS"]
  },
  {
    name: "Rosja", region: "Europa Wschodnia",
    traditions: ["Banja – ruska sauna z brzozą", "Maslenica – tydzień blinów", "Toasty z wódką"],
    stereotypes: ["Wódka leje się strumieniami", "Niedźwiedzie na ulicach", "Wszyscy ponuro patrzą"],
    food: ["Pielmieni", "Borszcz ze śmietaną", "Bliny z kawiorem", "Sałatka Olivier"],
    desserts: ["Medovik – tort miodowy warstwowy", "Ptichye moloko – czekoladki z ptasim mleczkiem", "Zefir – rosyjskie pianki", "Pirozhki z dżemem"],
    movies: ["Stalker", "Lewiatan", "Ironia losu"],
    music: ["Czajkowski", "Wiktor Coj – Kino", "Pussy Riot"]
  },
  {
    name: "Turcja", region: "Bliski Wschód",
    traditions: ["Mocna kawa turecka i wróżenie z fusów", "Hammam", "Bazar i targowanie"],
    stereotypes: ["Wszędzie kebab", "Wąsy = honor", "Czaj non stop"],
    food: ["Kebab adana", "Menemen – jajecznica po turecku", "Lahmacun – turecka pizza", "Manti – tureckie pierożki z jogurtem"],
    desserts: ["Baklava z pistacjami", "Künefe – ser z syropem", "Sütlaç – pudding ryżowy", "Lokum – tureckie delicje"],
    movies: ["Zimowy sen", "Trzy małpy", "Once Upon a Time in Anatolia"],
    music: ["Tarkan", "Sezen Aksu", "Barış Manço"]
  },
  {
    name: "Wietnam", region: "Azja Południowo-Wschodnia",
    traditions: ["Tết – księżycowy Nowy Rok", "Picie kawy z mlekiem skondensowanym", "Kapelusze stożkowe"],
    stereotypes: ["Skutery wszędzie", "Pho na śniadanie", "Wszystko z ryżu"],
    food: ["Pho bo", "Bánh mì", "Sajgonki świeże", "Bun cha – grillowana wieprzowina z makaronem"],
    desserts: ["Chè – słodka zupa z fasoli lub owoców", "Bánh flan – wietnamski flan", "Che chuoi – banan w mleku kokosowym", "Banh cam – smażone kulki sezamowe"],
    movies: ["Zapach zielonej papai", "Cyklo", "Czas apokalipsy"],
    music: ["Trinh Cong Son", "Sơn Tùng M-TP", "Hoang Thuy Linh"]
  },
  {
    name: "Indonezja", region: "Azja Południowo-Wschodnia",
    traditions: ["Nyepi – dzień ciszy na Bali", "Wayang – teatr cieni", "Gotong royong – pomoc sąsiedzka"],
    stereotypes: ["17 tysięcy wysp i każda inna", "Wszędzie pachnie kadzidłem", "Surferzy na Bali"],
    food: ["Nasi goreng", "Satay z sosem orzechowym", "Rendang", "Gado-gado z sosem orzechowym"],
    desserts: ["Es campur – mieszane lody z owocami", "Klepon – kulki ryżowe z palmowym cukrem", "Pisang goreng – smażony banan", "Dadar gulung – naleśniki z kokosem"],
    movies: ["The Raid", "Marlina – morderczyni w czterech aktach", "Eat Pray Love"],
    music: ["Anggun", "Rich Brian", "Tulus"]
  },
  {
    name: "Kuba", region: "Karaiby",
    traditions: ["Salsa w klubach do rana", "Cygara skręcane ręcznie", "Stare amerykańskie auta"],
    stereotypes: ["Wszyscy tańczą salsę", "Mojito i Hawana", "Cygaro w zębach"],
    food: ["Ropa vieja", "Moros y cristianos", "Tostones", "Lechón asado – pieczona wieprzowina"],
    desserts: ["Arroz con leche z cynamonem", "Natilla – kubański budyń", "Tres leches kubańskie", "Buñuelos kubańskie z anyżem"],
    movies: ["Truskawki i czekolada", "Buena Vista Social Club", "Powrót do Itaki"],
    music: ["Buena Vista Social Club", "Celia Cruz", "Compay Segundo"]
  },
  {
    name: "Holandia", region: "Europa Zachodnia",
    traditions: ["King's Day na pomarańczowo", "Sinterklaas 5 grudnia", "Rower jako podstawowy transport"],
    stereotypes: ["Wszyscy jeżdżą na rowerach", "Tulipany i wiatraki", "Bezpośredni do bólu"],
    food: ["Bitterballen z musztardą", "Haring – śledź na surowo z cebulką", "Erwtensoep – gęsta zupa grochowa", "Stamppot z kiełbasą"],
    desserts: ["Stroopwafel na gorącej kawie", "Poffertjes – małe naleśniczki", "Oliebollen – pączki noworoczne", "Appeltaart z bitą śmietaną"],
    movies: ["Wskaż mi drogę do domu", "Czarna księga", "Antonia"],
    music: ["Tiësto", "Anouk", "Caro Emerald"]
  },
  {
    name: "Szwecja", region: "Europa Północna",
    traditions: ["Midsommar – noc świętojańska", "Fika – przerwa na kawę i ciasto", "Lucia 13 grudnia"],
    stereotypes: ["Wszyscy są blondynami", "IKEA i klocki", "Zimne i powściągliwe"],
    food: ["Köttbullar z żurawiną i puree", "Gravlax z musztardą i koperkiem", "Toast Skagen z krewetkami", "Smörgåsbord z różnymi śledziami"],
    desserts: ["Kanelbullar – cynamonowe bułeczki", "Kladdkaka – lepkie czekoladowe brownie", "Prinsesstårta – tort księżniczki", "Semla z bitą śmietaną i marcepanem"],
    movies: ["Pozwól mi wejść", "Fanny i Aleksander", "Sami swoi"],
    music: ["ABBA", "Avicii", "First Aid Kit"]
  },
  {
    name: "Norwegia", region: "Europa Północna",
    traditions: ["Russefeiring – świętowanie maturzystów", "Hytte – domek w górach", "17 maja narodowy dzień"],
    stereotypes: ["Trolle w lasach", "Ciągle są na nartach", "Wszystko kosztuje fortunę"],
    food: ["Łosoś wędzony", "Brunost – brązowy ser", "Fårikål", "Kjøttkaker – norweskie kotleciki"],
    desserts: ["Skillingsbolle – cynamonowe bułki", "Multekrem – moroszka z bitą śmietaną", "Krumkake – wafelki z kremem", "Lefse z cukrem i masłem"],
    movies: ["Bestia", "Łowca trolli", "Najgorszy człowiek na świecie"],
    music: ["A-ha – Take On Me", "Aurora", "Sigrid"]
  },
  {
    name: "Irlandia", region: "Europa Zachodnia",
    traditions: ["Dzień Świętego Patryka na zielono", "Sesje muzyczne w pubach", "Storytelling przy ognisku"],
    stereotypes: ["Wszyscy rude i piegowate", "Guinness na śniadanie", "Leprechauny w lasach"],
    food: ["Irish stew", "Soda bread", "Shepherd's pie", "Boxty – ziemniaczane placki"],
    desserts: ["Irish cream cheesecake", "Barmbrack – chleb z rodzynkami", "Porter cake z Guinnessem", "Apple crumble z custard"],
    movies: ["The Banshees of Inisherin", "Dublińczycy", "Once"],
    music: ["U2", "Sinéad O'Connor", "The Cranberries"]
  },
  {
    name: "Portugalia", region: "Europa Południowa",
    traditions: ["Fado – melancholijne pieśni", "Festas dos Santos Populares", "Azulejos – niebieskie kafle"],
    stereotypes: ["Smutni i melancholijni", "Tylko sardynki i porto", "Saudade – tęsknota za wszystkim"],
    food: ["Bacalhau à Brás z jajkami i ziemniakami", "Caldo verde z chouriço", "Francesinha – kanapka po porto", "Sardinhas assadas – pieczone sardynki"],
    desserts: ["Pastéis de nata z cynamonem", "Arroz doce – pudding ryżowy", "Pudim flan – kremowy budyń", "Travesseiro z migdałami"],
    movies: ["Lisbon Story", "Tabu", "Letters from Fontainhas"],
    music: ["Amália Rodrigues", "Madredeus", "Mariza"]
  },
  {
    name: "Szwajcaria", region: "Europa Środkowa",
    traditions: ["Fondue w zimowe wieczory", "Jodłowanie w Alpach", "Punktualność jak w zegarku"],
    stereotypes: ["Czekolada, zegarki i banki", "Wszyscy bogaci", "Krowy z dzwonkami"],
    food: ["Fondue serowe z bagietką", "Raclette z ziemniakami i ogórkami", "Rösti z jajkiem sadzonym", "Zürcher Geschnetzeltes z pieczarkami"],
    desserts: ["Czekolada Lindt i Toblerone", "Meringues z podwójną śmietaną", "Rüblitorte – marchewkowy tort", "Tirggel – miodowe ciasteczka"],
    movies: ["Heidi", "Dark Eye", "Sister"],
    music: ["DJ Bobo", "Stephan Eicher", "Sophie Hunger"]
  },
  {
    name: "Austria", region: "Europa Środkowa",
    traditions: ["Bal Wiedeński", "Kawiarnie kawowe z marmurem", "Sylwester z Radetzky Marsch"],
    stereotypes: ["Walc na każdym kroku", "Mozart i Sissi", "Sznycel i strudel"],
    food: ["Wiener Schnitzel z cytryną i sałatką", "Tafelspitz – gotowana wołowina z chrzanem", "Gulasch wiedeński", "Käsespätzle – serowe kluski"],
    desserts: ["Sachertorte z konfiturą morelową", "Apfelstrudel z lodami waniliowymi", "Kaiserschmarrn z powidłami śliwkowymi", "Linzer Torte z dżemem malinowym"],
    movies: ["Dziewczyna z perłą", "Amour", "Trzeci człowiek"],
    music: ["Mozart", "Falco – Rock Me Amadeus", "Conchita Wurst"]
  },
  {
    name: "Belgia", region: "Europa Zachodnia",
    traditions: ["Festiwale piwa", "Karnawał w Binche", "Frytki z majonezem"],
    stereotypes: ["Tylko czekolada, piwo i frytki", "Spór Flandria-Walonia", "Manneken Pis"],
    food: ["Moules-frites z białym winem", "Carbonnade flamande – wołowina w piwie", "Stoofvlees – flamandzki gulasz", "Américain préparé – tatar po belgijsku"],
    desserts: ["Gofry brukselskie z cukrem pudrem", "Czekoladki Godiva i Neuhaus", "Speculoos – korzenne ciasteczka", "Dame blanche – lody z gorącą czekoladą"],
    movies: ["Brugia, fuck you", "Dziecko", "Toto bohater"],
    music: ["Jacques Brel", "Stromae", "Angèle"]
  },
  {
    name: "Czechy", region: "Europa Środkowa",
    traditions: ["Piwiarnie i piwo na obiad", "Velikonoce z pomlázką", "Bramboráky na targach"],
    stereotypes: ["Piwo zamiast wody", "Suchy humor jak Szwejk", "Kluski do wszystkiego"],
    food: ["Svíčková z knedlikami i brusinkami", "Guláš z knedlikami", "Vepřo-knedlo-zelo – wieprzowina z kapustą", "Bramboráky – placki ziemniaczane"],
    desserts: ["Trdelník z cynamonem", "Koláče z nadzieniem owocowym", "Medovník – tort miodowy", "Buchty z twarogiem"],
    movies: ["Pociągi pod specjalnym nadzorem", "Lekcje Faraona", "Kolja"],
    music: ["Karel Gott", "Dvořák", "Iva Bittová"]
  },
  {
    name: "Węgry", region: "Europa Środkowa",
    traditions: ["Sylwester z pörkölt", "Tańce ludowe csárdás", "Łaźnie termalne w Budapeszcie"],
    stereotypes: ["Wszystko z papryką", "Niemożliwy język", "Tokaj do każdej okazji"],
    food: ["Gulyás z papryką i ziemniakami", "Lángos z czosnkiem i serem", "Halászlé – pikantna zupa rybna", "Töltött káposzta – gołąbki węgierskie"],
    desserts: ["Kürtőskalács – kominiarski kołacz", "Somlói galuska – biszkoptowy deser", "Dobos torta – tort czekoladowo-karmelowy", "Rétes – węgierski strudel z makiem"],
    movies: ["Syn Szawła", "O ciele i duszy", "Mefisto"],
    music: ["Liszt", "Omega", "Bea Palya"]
  },
  {
    name: "Izrael", region: "Bliski Wschód",
    traditions: ["Szabat od piątku wieczorem", "Pesach z macą", "Brunch na piasku w Tel Awiwie"],
    stereotypes: ["Wszyscy są bezpośredni", "Hummus to święta sprawa", "Pustynia i hi-tech jednocześnie"],
    food: ["Hummus z falafelem", "Szakszuka", "Sabich", "Falafel z amba i tahiną"],
    desserts: ["Rugelach z czekoladą", "Sfenj – pączki chanukowe", "Malabi – pudding różany", "Halwa z sezamu z czekoladą"],
    movies: ["Walc z Baszirem", "Footnote", "Synonimy"],
    music: ["Idan Raichel", "Asaf Avidan", "Ofra Haza"]
  },
  {
    name: "Iran", region: "Bliski Wschód",
    traditions: ["Nowruz – perski Nowy Rok", "Poezja Hafeza recytowana na pamięć", "Czaj z kostką cukru w zębach"],
    stereotypes: ["Wszyscy mówią poezją", "Dywary perskie wszędzie", "Taarof – nadmierna grzeczność"],
    food: ["Chelo kabab", "Ghormeh sabzi", "Fesenjan – kurczak w sosie z orzechów i granatu", "Tahdig – chrupiący ryż ze złotą skórką"],
    desserts: ["Baklava perska z różą i kardamonem", "Faloodeh – sorbet z wermiszelem różanym", "Sholeh zard – pudding szafranowy", "Zulbia – chrupiące słodycze z syropem"],
    movies: ["Rozstanie", "Smak czereśni", "Klient"],
    music: ["Googoosh", "Mohsen Namjoo", "Hossein Alizadeh"]
  },
  {
    name: "Kanada", region: "Ameryka Północna",
    traditions: ["Hokej jako religia narodowa", "Thanksgiving w październiku", "Liść klonu na wszystkim"],
    stereotypes: ["Wszyscy mówią 'sorry'", "Syrop klonowy do wszystkiego", "Niedźwiedzie i łosie wszędzie"],
    food: ["Poutine z sosem i serem cheddar", "Tourtière – mięsna pita", "Lobster roll z Atlantyku", "Bannock – chleb rdzennych ludów"],
    desserts: ["Naleśniki z syropem klonowym", "Butter tarts z kajmakiem", "Nanaimo bars", "BeaverTails – smażone ciasto z cynamonem"],
    movies: ["Incendies", "Sami swoi", "Krwawiące serce"],
    music: ["Leonard Cohen", "Joni Mitchell", "Drake"]
  },
  {
    name: "Nowa Zelandia", region: "Oceania",
    traditions: ["Haka – wojenny taniec Maorysów", "Hāngī – jedzenie pieczone w ziemi", "Bushwalking w weekendy"],
    stereotypes: ["Więcej owiec niż ludzi", "Władca Pierścieni wszędzie", "Wszyscy są wyluzowani"],
    food: ["Hāngī – jedzenie pieczone w ziemi", "Whitebait fritters – placuszki z rybkami", "Lamb rack z sosem miętowym", "Hangi pork z kumara"],
    desserts: ["Pavlova z bitą śmietaną i kiwi", "Hokey pokey ice cream", "Anzac biscuits z płatkami owsianymi", "Afghans – czekoladowe ciasteczka z cornflakes"],
    movies: ["Władca Pierścieni", "Fortepian", "Polowanie na dzikie pieprze"],
    music: ["Lorde", "Crowded House", "Kimbra"]
  },
  {
    name: "Etiopia", region: "Afryka Wschodnia",
    traditions: ["Ceremonia parzenia kawy z kadzidłem", "Etiopski Nowy Rok we wrześniu", "Wspólne jedzenie z jednej tacy"],
    stereotypes: ["Kolebka kawy", "Wszyscy są maratończykami", "Najstarszy alfabet Afryki"],
    food: ["Injera z wat", "Doro wat – kurczak po etiopsku", "Kitfo", "Shiro – purée z ciecierzycy"],
    desserts: ["Fetira – słodkie naleśniki z miodem", "Himbasha – urodzinowe ciasto z kardamonem", "Baklava etiopska z miodem", "Genfo na słodko z masłem i miodem"],
    movies: ["Difret", "Lamb", "Adwa"],
    music: ["Mulatu Astatke", "Aster Aweke", "Mahmoud Ahmed"]
  },
  {
    name: "Nigeria", region: "Afryka Zachodnia",
    traditions: ["Nollywood – kino na potęgę", "Wesela z setkami gości", "Aso ebi – pasujące stroje"],
    stereotypes: ["Wszyscy tańczą afrobeats", "Jollof rice to święta sprawa", "Spór z Ghaną kto ma lepszy jollof"],
    food: ["Jollof rice z grillowanym kurczakiem", "Suya – pikantne szaszłyki wołowe", "Egusi soup z fufu", "Pepper soup z kozim mięsem"],
    desserts: ["Puff puff – słodkie kulki", "Chin chin – chrupiące przekąski", "Nigerian buns z bananem", "Coconut candy – kokosowe cukierki"],
    movies: ["Lionheart", "King of Boys", "The Wedding Party"],
    music: ["Burna Boy", "Fela Kuti", "Wizkid"]
  },
  {
    name: "Kenia", region: "Afryka Wschodnia",
    traditions: ["Safari w Masai Mara", "Skoki Masajów", "Harambee – wspólnota"],
    stereotypes: ["Tylko safari i lwy", "Wszyscy biegają maratony", "Akuna matata na każdą okazję"],
    food: ["Ugali z sukuma wiki", "Nyama choma – grillowane mięso", "Pilau z aromatycznymi przyprawami", "Githeri – fasola z kukurydzą"],
    desserts: ["Mandazi – smażone pączki", "Mahamri – słodkie bułeczki z kardamonem", "Kaimati – słodkie kulki z syropem", "Halwa kenijska z różą"],
    movies: ["Pożegnanie z Afryką", "Nairobi Half Life", "Rafiki"],
    music: ["Sauti Sol", "Eric Wainaina", "Suzanna Owiyo"]
  },
  {
    name: "Peru", region: "Ameryka Południowa",
    traditions: ["Inti Raymi – święto słońca", "Pisco sour jako narodowy koktajl", "Andyjskie festiwale w kolorach"],
    stereotypes: ["Lamy na każdym zdjęciu", "Wszyscy noszą poncho", "Machu Picchu to obowiązek"],
    food: ["Ceviche", "Lomo saltado", "Aji de gallina", "Causa rellena"],
    desserts: ["Picarones – pączki z dyni z syropem", "Alfajores z manjar blanco", "Mazamorra morada – fioletowy budyń", "Arroz con leche z cynamonem"],
    movies: ["Mleko smutku", "Mżawka", "Madeinusa"],
    music: ["Susana Baca", "Eva Ayllón", "Gian Marco"]
  },
  {
    name: "Kolumbia", region: "Ameryka Południowa",
    traditions: ["Karnawał w Barranquilla", "Kawa o każdej porze", "Cumbia i salsa wszędzie"],
    stereotypes: ["Wszyscy znają Pabla Escobara", "Najlepsza kawa na świecie", "Shakira to ikona narodowa"],
    food: ["Bandeja paisa", "Arepy", "Ajiaco", "Sancocho – sycąca zupa"],
    desserts: ["Obleas z arequipe", "Bocadillo z guawy z serem", "Natilla – kolumbijski budyń", "Buñuelos kolumbijskie na Boże Narodzenie"],
    movies: ["Embrace of the Serpent", "Maria, pełna łaski", "Monos"],
    music: ["Shakira", "Juanes", "Carlos Vives"]
  },
  {
    name: "Chile", region: "Ameryka Południowa",
    traditions: ["Asado niedzielne", "Cueca – taniec narodowy", "Empanadas na każde święto"],
    stereotypes: ["Tylko Andy i pustynia", "Wszystkie wina są chilijskie", "Najdłuższy kraj na świecie"],
    food: ["Empanadas de pino", "Pastel de choclo", "Completo – hot dog po chilijsku", "Pebre – chilijska salsa do chleba"],
    desserts: ["Leche asada – pieczony flan", "Alfajores chilijskie z dulce de leche", "Kuchen z jagodami", "Mote con huesillos – brzoskwiniowy deserowy napój"],
    movies: ["No", "Klub", "Una mujer fantástica"],
    music: ["Violeta Parra", "Inti-Illimani", "Mon Laferte"]
  },
  {
    name: "Filipiny", region: "Azja Południowo-Wschodnia",
    traditions: ["Karaoke jako sport narodowy", "Boże Narodzenie od września", "Fiesta w każdej wiosce", "Sabong – kontrowersyjne walki kogutów organizowane w wielu miejscach"],
    stereotypes: ["Wszyscy świetnie śpiewają", "Koszykówka to sport numer jeden – grają i kibicują wszędzie", "Boks to duma narodowa (Manny Pacquiao!)", "Jeepneys jako dzieła sztuki"],
    food: ["Adobo z kurczaka lub wieprzowiny", "Sinigang z tamaryndowcem", "Lechon kawali – chrupiąca wieprzowina", "Kare-kare – gulasz w sosie orzechowym"],
    desserts: ["Halo-halo z ube i leche flan", "Bibingka – ryżowe ciasto na bananowym liściu", "Turon – smażona bananowa sajgonka z brązowym cukrem", "Leche flan – kremowy budyń"],
    movies: ["Norte – the End of History", "Heneral Luna", "On the Job"],
    music: ["Lea Salonga", "IV of Spades", "Ben&Ben"]
  },
  {
    name: "Pakistan", region: "Azja Południowa",
    traditions: ["Mehndi – malowanie henną przed weselem", "Iftar w Ramadan", "Truck art – kolorowe ciężarówki"],
    stereotypes: ["Krykiet to religia", "Wszystko ostre", "Trzy dni weselne minimum"],
    food: ["Biryani", "Nihari", "Chicken karahi", "Haleem – gęsta potrawka mięsna"],
    desserts: ["Gulab jamun z syropem różanym", "Kheer – budyń ryżowy z kardamonem", "Jalebi z rabri", "Barfi z pistacjami"],
    movies: ["Khuda Kay Liye", "Bol", "Joyland"],
    music: ["Nusrat Fateh Ali Khan", "Atif Aslam", "Coke Studio Pakistan"]
  },
  {
    name: "Ukraina", region: "Europa Wschodnia",
    traditions: ["Pisanki na Wielkanoc", "Wianki na Iwana Kupałę", "Wesela na 3 dni"],
    stereotypes: ["Wszyscy uwielbiają sało (słoninę)", "Kobiety są piękne", "Borszcz lepszy niż rosyjski"],
    food: ["Barszcz ukraiński", "Wareniki", "Sało z czarnym chlebem", "Holubci – gołąbki"],
    desserts: ["Medivnyk – ukraiński tort miodowy", "Makivnyk – makowiec", "Pampushky z dżemem", "Syrnyky – twarogowe placuszki z kwaśną śmietaną"],
    movies: ["Plemię", "Donbas", "Atlantida"],
    music: ["Okean Elzy", "Jamala", "DakhaBrakha"]
  },
  {
    name: "Islandia", region: "Europa Północna",
    traditions: ["Þorrablót – uczta zimowa", "Hot poty w gorących źródłach", "Wiara w elfy i trolle"],
    stereotypes: ["Wszyscy są spokrewnieni", "Każdy pisze książkę", "Gejzery zamiast łazienek"],
    food: ["Pylsur – hot dog z wszystkimi sosami", "Plokkfiskur – ryba z ziemniakami", "Kjötsúpa – islandzka zupa jagnięca", "Hákarl – fermentowany rekin (dla odważnych)"],
    desserts: ["Skyr z borówkami i miodem", "Kleinur – islandzkie pączki", "Pönnukökur – islandzkie naleśniki z dżemem", "Hjónabandssæla – płatki owsiane z rabarbarem"],
    movies: ["101 Reykjavik", "Rams", "Woman at War"],
    music: ["Björk", "Sigur Rós", "Of Monsters and Men"]
  },
  {
    name: "Jamajka", region: "Karaiby",
    traditions: ["Kultura soundsystemów na ulicach", "Silne znaczenie muzyki i społeczności", "Rastafarianizm i filozofia 'one love'"],
    stereotypes: ["Wszystko jest 'no problem, mon'", "Najszybsi sprinterzy świata (Usain Bolt)", "Dredy i kolory rasta wszędzie"],
    food: ["Jerk chicken z grilla", "Ackee and saltfish", "Rice and peas", "Jamaican patty z wołowiną"],
    desserts: ["Rum cake z bakaliami", "Gizzada – kokosowe tartletki", "Totoes – kokosowe ciasteczka", "Banana fritters z cynamonem"],
    movies: ["Cool Runnings", "The Harder They Come", "Marley (dokument)"],
    music: ["Bob Marley", "Sean Paul", "Reggae i dancehall klasyki"]
  },
  {
    name: "Singapur", region: "Azja Południowo-Wschodnia",
    traditions: ["Hawker centres – kulinarne dziedzictwo UNESCO", "Chingay Parade", "Wieloetniczność jako fundament państwa"],
    stereotypes: ["Wszędzie czysto i zakazów bez liku", "Kara za gumę do żucia", "Najdroższe miasto świata"],
    food: ["Chili crab z bułeczkami", "Hainanese chicken rice", "Laksa singapurska", "Char kway teow z krewetkami"],
    desserts: ["Kaya toast z masłem i jajkiem", "Ice kachang – lody z syropem", "Ondeh-ondeh z palmowym cukrem", "Chendol z mleczkiem kokosowym"],
    movies: ["Ilo Ilo", "Crazy Rich Asians", "Apprentice"],
    music: ["Stefanie Sun", "JJ Lin", "The Sam Willows"]
  },
  {
    name: "Nepal", region: "Azja Południowa",
    traditions: ["Namaste z dłońmi przy sercu", "Festiwal Dashain", "Pielgrzymki do Lumbini i Pashupatinath"],
    stereotypes: ["Wszyscy są szerpami", "Himalaje to codzienność", "Joga i medytacja od urodzenia"],
    food: ["Dal bhat z curry", "Momo ze sosem achar", "Thukpa – himalajska zupa z makaronem", "Gundruk – fermentowane liście warzyw"],
    desserts: ["Sel roti – ryżowy pierścień z cukrem", "Yomari – ryżowe pierożki z sezamem i palmowym cukrem", "Kheer – nepalna ryżowa zupa mleczna", "Sikarni – jogurt z owocami i orzechami"],
    movies: ["Kabaddi", "Highway", "White Sun"],
    music: ["1974 AD", "Bartika Eam Rai", "Sajjan Raj Vaidya"]
  },
  {
    name: "Mongolia", region: "Azja Środkowa",
    traditions: ["Naadam – festiwal trzech męskich sportów", "Życie w jurtach (gerach)", "Pasterstwo nomadyczne"],
    stereotypes: ["Wszyscy są spadkobiercami Czyngis-chana", "Konie wszędzie", "Picie kumysu z miski"],
    food: ["Buuz – mongolskie pierożki na parze", "Khorkhog – mięso pieczone na rozgrzanych kamieniach", "Tsuivan – smażony makaron z baraniną", "Tsoivan – duszone mięso z warzywami"],
    desserts: ["Aaruul – suszony twaróg na słodko", "Boortsog – smażone ciasteczka", "Ul boov – mongolskie ciasto warstwowe", "Chak-chak z miodem"],
    movies: ["Opowieść o płaczącym wielbłądzie", "Mongol", "The Eagle Huntress"],
    music: ["The Hu", "Khusugtun", "Tradycyjny śpiew gardłowy khoomei"]
  },
  {
    name: "Sri Lanka", region: "Azja Południowa",
    traditions: ["Festiwal Esala Perahera ze słoniami", "Ceremonia parzenia cejlońskiej herbaty", "Kiwanie głową na 'tak'"],
    stereotypes: ["Wszędzie cynamon i herbata", "Buddyjskie świątynie na każdym wzgórzu", "Krykiet to drugie życie"],
    food: ["Rice and curry z sambolem", "Hoppers (appa)", "Kottu roti", "Lamprais"],
    desserts: ["Watalappan – pudding z mleczka kokosowego", "Kavum – ryżowy olej cake", "Kokis – chrupiące ciastka", "Aluwa – słodycze z ryżowej mąki"],
    movies: ["The Forsaken Land", "Funny Boy", "With You, Without You"],
    music: ["Bathiya and Santhush", "Yohani – Manike Mage Hithe", "Iraj"]
  },
  {
    name: "Uzbekistan", region: "Azja Środkowa",
    traditions: ["Czajchana – herbaciarnia jako centrum życia", "Wesela z setkami gości", "Jedwabny Szlak i bazary w Samarkandzie"],
    stereotypes: ["Plov na każdą okazję", "Niebieskie kopuły wszędzie", "Targowanie się to sztuka"],
    food: ["Plov uzbecki", "Manty – duże pierogi z baraniną", "Shashlik", "Samsa z piekarnika tandoor"],
    desserts: ["Halva uzbecka z sezamem", "Nishalda – deserek z pianek", "Navat – cukierki z cukru winogronowego", "Chak-chak z miodem"],
    movies: ["Tashkent – City of Bread", "The Sun Also Rises Over Tashkent", "Parizod"],
    music: ["Yulduz Usmonova", "Sevara Nazarkhan", "Tradycyjna muzyka shashmaqam"]
  },
  {
    name: "Tanzania", region: "Afryka Wschodnia",
    traditions: ["Safari w Serengeti i wspinaczka na Kilimandżaro", "Ujamaa – filozofia wspólnoty", "Suahili jako język jednoczący"],
    stereotypes: ["Hakuna matata na wszystko", "Wszyscy mieszkają obok lwów", "Zanzibar to raj na ziemi"],
    food: ["Ugali z nyama choma", "Pilau zanzibarskie z przyprawami", "Mishkaki – szaszłyki wołowe", "Mchuzi wa samaki – ryba w sosie kokosowym"],
    desserts: ["Mandazi – smażone bułeczki z kardamonem", "Halwa zanzibarskie", "Vitumbua – ryżowe pączki", "Kaimati – słodkie kulki z syropem"],
    movies: ["Maangamizi", "T-Junction", "Bongoland"],
    music: ["Diamond Platnumz", "Ali Kiba", "Bongo Flava"]
  },
  {
    name: "Senegal", region: "Afryka Zachodnia",
    traditions: ["Teranga – senegalska gościnność", "Sabar – bębny i taniec", "Wspólne jedzenie z jednej miski"],
    stereotypes: ["Wszyscy są wysocy i eleganccy", "Zapaśnicy laamb to bohaterowie", "Boubou w każdym kolorze"],
    food: ["Thieboudienne – ryż z rybą", "Yassa poulet", "Mafé – gulasz z masłem orzechowym", "Pastels – smażone pierożki"],
    desserts: ["Thiakry – kuskus z jogurtem i mlekiem skondensowanym", "Ngalakh – kuskus z pastą orzechową", "Sombi – ryżowy pudding kokosowy", "Bissap – galaretka z hibiskusa"],
    movies: ["Atlantique", "Touki Bouki", "La Noire de…"],
    music: ["Youssou N'Dour", "Baaba Maal", "Ismael Lô"]
  },
  {
    name: "Tunezja", region: "Afryka Północna",
    traditions: ["Hammam jako rytuał piękności", "Ceremonia herbaty miętowej z orzeszkami", "Niebiesko-białe domy Sidi Bou Said"],
    stereotypes: ["Wszędzie harissa do wszystkiego", "Plaża i medyna w jednym", "Skręcanie się nad targiem"],
    food: ["Brik z jajkiem i tuńczykiem", "Couscous tuniski z harissą i warzywami", "Lablabi – zupa z ciecierzycy", "Ojja – jajecznica z harissą i merguez"],
    desserts: ["Makroudh – ciasteczka z daktylami", "Baklava tunisienne", "Assida – pudding z semoliną", "Bambalouni – tunezyjskie pączki"],
    movies: ["The Man Who Sold His Skin", "Beauty and the Dogs", "A Son"],
    music: ["Emel Mathlouthi", "Latifa Arfaoui", "Saber Rebaï"]
  },
  {
    name: "Boliwia", region: "Ameryka Południowa",
    traditions: ["Karnawał w Oruro z diabolada", "Cholitas wrestling – panie w spódnicach na ringu", "Cocoa leaves przeciw chorobie wysokościowej"],
    stereotypes: ["Najwyższe miasto świata (La Paz)", "Cholity w melonikach", "Salar de Uyuni jak lustro"],
    food: ["Salteñas", "Pique macho", "Silpancho", "Anticuchos – szaszłyki z serca wołowego"],
    desserts: ["Buñuelos z syropem z trzciny", "Humintas – słodkie tamale", "Tawa tawa – smażone ciasto andyjskie", "Api morado – fioletowy napój z kukurydzy na słodko"],
    movies: ["Zama", "También la lluvia", "La nación clandestina"],
    music: ["Los Kjarkas", "Bonny Lovy", "Tradycyjna muzyka andyjska na zampoñas"]
  },
  {
    name: "Urugwaj", region: "Ameryka Południowa",
    traditions: ["Mate non stop, wszędzie i z każdym", "Asado niedzielne", "Candombe – afro-urugwajskie bębny"],
    stereotypes: ["Termos pod pachą do mate", "Wszyscy kochają piłkę (mistrzostwa 1930 i 1950)", "Najbardziej liberalny kraj regionu"],
    food: ["Chivito – kanapka z wołowiną i jajkiem", "Asado uruguayo z różnymi mięsami", "Milanesa napolitana z sosem pomidorowym", "Torta frita – smażone placki"],
    desserts: ["Dulce de leche w każdej formie", "Chajá – biszkoptowy tort z kremem", "Alfajores urugwajskie", "Pasta frola z marmoladą pigwową"],
    movies: ["Whisky", "El baño del Papa", "Una noche sin luna"],
    music: ["Jorge Drexler", "Rubén Rada", "No Te Va Gustar"]
  },
  {
    name: "Ekwador", region: "Ameryka Południowa",
    traditions: ["Fiesta del Sol – Inti Raymi w Andach", "Cuy (świnka morska) na specjalne okazje", "Mitad del Mundo – stanie na równiku"],
    stereotypes: ["Wszyscy mają kapelusz panamski (który pochodzi z Ekwadoru!)", "Banany na każdym kroku", "Galapagos i żółwie"],
    food: ["Ceviche ekwadorskie z kukurydzą", "Llapingachos – placki ziemniaczane", "Encebollado – zupa rybna", "Locro de papa"],
    desserts: ["Pristiños z melasą", "Colada morada – gęsty fioletowy napój owocowy", "Higos con queso – figi z serem", "Rosero – owocowy napój deserowy"],
    movies: ["Ratas, Ratones, Rateros", "Pescador", "A tus espaldas"],
    music: ["Juan Fernando Velasco", "Nicola Cruz", "Pasillo ecuatoriano"]
  },
  {
    name: "Liban", region: "Bliski Wschód",
    traditions: ["Mezze – dziesiątki małych dań na środku stołu", "Życie nocne Bejrutu jak nigdzie", "Zaproszenia na kawę co pięć minut"],
    stereotypes: ["Wszyscy mają trzy paszporty", "Najlepszy hummus i tabbouleh (sorry reszto Bliskiego Wschodu)", "Cedr na fladze i wszędzie"],
    food: ["Tabbouleh", "Hummus z mięsem mielonym", "Manakish z za'atarem", "Kibbeh – kotleciki z burgulu"],
    desserts: ["Maamoul z różaną wodą", "Znoud el sit – smażone rurki z kremem", "Baklawa libańska z wodą różaną", "Muhallabia – mleczny pudding z pistacjami"],
    movies: ["Kafarnaum", "Caramel", "Insyallah a Boy"],
    music: ["Fairuz", "Mashrou' Leila", "Marcel Khalife"]
  },
  {
    name: "Fidżi", region: "Oceania",
    traditions: ["Ceremonia kava – picie z kokosa w kółku", "Meke – tradycyjny taniec i pieśni", "Bula! – pozdrowienie i sposób życia"],
    stereotypes: ["Wszyscy uśmiechają się non stop", "Rajskie plaże i palmy", "Rugby to religia"],
    food: ["Kokoda – fidżijskie ceviche w mleku kokosowym", "Lovo – jedzenie pieczone w ziemi", "Rourou – liście taro z mlekiem kokosowym", "Palusami z mięsem i mlekiem kokosowym"],
    desserts: ["Vakalolo – deserek z manioku i kokosa", "Coconut candy – kokosowe cukierki", "Banana cake z mlekiem kokosowym", "Duruka pudding – słodkie ciasto z trzciną cukrową"],
    movies: ["The Land Has Eyes", "Vai", "Cast Away (kręcony tutaj)"],
    music: ["Black Rose", "Laisa Vulakoro", "Tradycyjne pieśni meke"]
  },
  {
    name: "Samoa", region: "Oceania",
    traditions: ["Fa'a Samoa – samoańska droga życia", "Tatau – tradycyjny tatuaż ręczny", "Sunday to'ona'i – niedzielna rodzinna uczta"],
    stereotypes: ["Wszyscy grają w rugby (i są w nim świetni)", "Tatuaże od stóp do głów", "Najwięksi i najsilniejsi"],
    food: ["Palusami – liście taro z mlekiem kokosowym", "Oka – samoańskie ceviche z limonką", "Sapasui – samoański chow mein z wołowiną", "Faalifu fa'i – gotowany banan z mlekiem kokosowym"],
    desserts: ["Panipopo – bułeczki w sosie kokosowym", "Koko alaisa – czekoladowy pudding ryżowy", "Fa'apapa – twarde kokosowe ciasteczko", "Poi – pudding z taro z cukrem"],
    movies: ["The Orator (O Le Tulafale)", "Three Wise Cousins", "Moana (inspirowana Polinezją)"],
    music: ["Jerome Grey", "Tenelle", "Tradycyjne pieśni siva"]
  },
  {
    name: "Kostaryka", region: "Ameryka Środkowa",
    traditions: ["Pura vida – filozofia życia bez stresu", "Niedzielne casado z rodziną", "Festyny z marimba i tańcami"],
    stereotypes: ["Zawsze uśmiechnięci i wyluzowani", "Surfują od rana do nocy", "Wszędzie leniwce i tukany"],
    food: ["Gallo pinto (ryż z czarną fasolą) na śniadanie", "Casado – obiadowy talerz z ryżem, fasolą i bananem", "Ceviche z ryby i limonki", "Chifrijo – fasola, ryż i skwarki"],
    desserts: ["Tres leches kostarykański", "Arroz con leche z cynamonem", "Cajeta – mleczny karmel", "Tamales słodkie z cukrem i rodzynkami"],
    movies: ["Agua fría de mar", "Princesas Rojas", "After Words (kręcony w Kostaryce)"],
    music: ["Editus", "Debi Nova", "Tradycyjne calypso z Limón"]
  },
  {
    name: "Watykan", region: "Europa Południowa",
    traditions: ["Niedzielne Anioł Pański na placu św. Piotra", "Msze papieskie i audiencje generalne", "Konklawe i biały dym z komina"],
    stereotypes: ["Wszędzie księża i zakonnice", "Najmniejsze państwo świata", "Gwardia Szwajcarska w kolorowych mundurach"],
    food: ["Pasta cacio e pepe z Rzymu", "Saltimbocca alla romana", "Carciofi alla giudia – karczoch po żydowsku", "Supplì – ryżowe kotleciki z mozzarellą"],
    desserts: ["Kremówka papieska (ulubiona Jana Pawła II)", "Maritozzi z bitą śmietaną", "Torta della nonna z kremem custard", "Ricciarelli – migdałowe ciasteczka ze Sieny"],
    movies: ["Habemus Papam", "Dwóch papieży", "Anioły i demony"],
    music: ["Chór Kaplicy Sykstyńskiej", "Gregoriańskie chorały", "Allegri – Miserere"]
  },
  {
    name: "USA – Nowy Jork", region: "Ameryka Północna",
    traditions: ["Parada na Thanksgiving Macy's", "Sylwester na Times Square", "Brunch w niedzielę na Brooklynie"],
    stereotypes: ["Zawsze w pośpiechu i z kawą na wynos", "Każdy jest 'busy'", "Pizza na stojąco i bajgiel na śniadanie"],
    food: ["New York pizza slice na stojąco", "Bagel z cream cheese i łososiem", "Pastrami on rye u Katz's Deli", "Hot dog z Coney Island z musztardą"],
    desserts: ["New York cheesecake z Junior's", "Black and white cookie", "Egg cream – czekoladowy napój mleczny", "Cannoli z Little Italy"],
    movies: ["Annie Hall", "Manhattan", "Taksówkarz"],
    music: ["Jay-Z – Empire State of Mind", "Frank Sinatra – New York, New York", "The Strokes"]
  },
  {
    name: "USA – Luizjana", region: "Ameryka Północna",
    traditions: ["Niedzielny lunch po kościele", "Mardi Gras w Nowym Orleanie", "Front porch i sweet tea"],
    stereotypes: ["'Y'all' co drugie zdanie", "Wszystko smażone i z masłem", "Gościnność i 'bless your heart'"],
    food: ["Smażony kurczak z biscuits i gravy", "Gumbo z krewetkowym roux", "Shrimp and grits", "Jambalaya z kiełbasą andouille"],
    desserts: ["Pecan pie z waniliowymi lodami", "Beignets z cukrem pudrem z Café Du Monde", "Bread pudding z whiskey sauce", "Pralines – kremowe cukierki z pekanami"],
    movies: ["Przeminęło z wiatrem", "Forrest Gump", "Służące"],
    music: ["Elvis Presley", "Johnny Cash", "Louis Armstrong i jazz z Nowego Orleanu"]
  },
  {
    name: "USA – Teksas", region: "Ameryka Północna",
    traditions: ["Rodeo i State Fair of Texas", "Friday Night Lights – futbol w liceum to religia", "Honky-tonk i taniec country"],
    stereotypes: ["Wszystko jest większe w Teksasie", "Kowbojki, kapelusz i pickup truck", "BBQ to nie jedzenie, to styl życia"],
    food: ["Brisket z dymem hickory z Cole slaw", "Tex-Mex fajitas z guacamole", "Chili con carne (bez fasoli!)", "Chicken fried steak z białym gravy"],
    desserts: ["Kolache z owocowym nadzieniem", "Pecan pie po teksasku", "Blue Bell ice cream – wanilia z Teksasu", "Sopapillas z miodem"],
    movies: ["Olbrzym", "No Country for Old Men", "Dallas Buyers Club"],
    music: ["Willie Nelson", "George Strait", "ZZ Top"]
  },
  {
    name: "USA – Kalifornia", region: "Ameryka Północna",
    traditions: ["Surf rano przed pracą", "Wine tasting w Napa Valley", "Hiking i yoga o wschodzie słońca"],
    stereotypes: ["Wszyscy są na diecie i robią jogę", "Avocado toast i kombucha do wszystkiego", "Korki na autostradzie 405"],
    food: ["California burrito (z frytkami w środku)", "Avocado toast", "Fish tacos z Baja", "In-N-Out Double-Double"],
    desserts: ["Ghirardelli czekoladowe brownie z San Francisco", "Fortune cookie z Chinatown", "Sourdough French toast z syropem klonowym", "Açaí bowl z granolą i owocami"],
    movies: ["La La Land", "Pulp Fiction", "The Big Lebowski"],
    music: ["The Beach Boys", "Dr. Dre", "Red Hot Chili Peppers"]
  },
  {
    name: "USA – Floryda", region: "Ameryka Północna",
    traditions: ["Spring break w Miami", "Wieczorne spacery po Ocean Drive", "Wyprawy łodzią na Florida Keys"],
    stereotypes: ["'Florida Man' i absurdalne newsy", "Emeryci na golfcartach", "Aligator w każdym jeziorku"],
    food: ["Cuban sandwich z Tampa", "Stone crab claws z musztardowym sosem", "Ceviche w stylu Miami", "Grouper sandwich z plaży"],
    desserts: ["Key lime pie z bitą śmietaną", "Coconut flan po kubańsku", "Churros z czekoladą w stylu Miami", "Orange creamsicle – lody pomarańczowe"],
    movies: ["Miami Vice", "Moonlight", "Florida Project"],
    music: ["Pitbull", "Gloria Estefan", "Tom Petty"]
  },
  {
    name: "USA – Hawaje", region: "Oceania",
    traditions: ["Luau z pieczonym wieprzem", "Taniec hula", "Powitanie 'Aloha' i girlanda lei na szyi"],
    stereotypes: ["Koszula w kwiaty na każdą okazję", "Wszyscy surfują", "Spokój i 'island time'"],
    food: ["Poke bowl z tuńczykiem", "Kalua pork z imu", "Loco moco", "Spam musubi"],
    desserts: ["Haupia – kokosowe galaretki", "Malasadas – hawajskie pączki z Leonarda's", "Shave ice z syropami", "Mochi ice cream"],
    movies: ["50 pierwszych randek", "Spadkobiercy", "Lilo i Stitch"],
    music: ["Israel Kamakawiwoʻole – Somewhere Over the Rainbow", "Ukulele covers", "Hawaiian slack-key guitar"]
  },
  {
    name: "USA – Tennessee", region: "Ameryka Północna",
    traditions: ["Grand Ole Opry w Nashville", "Whiskey tasting w Lynchburgu", "Pielgrzymka do Graceland"],
    stereotypes: ["Country music w każdym barze", "Wszyscy grają na gitarze", "Bourbon, biscuits i biblia"],
    food: ["Nashville hot chicken z kiszonymi ogórkami", "Memphis BBQ ribs z suchą marynatą", "Biscuits and gravy na śniadanie", "Country ham z czerwonym sosem"],
    desserts: ["Banana pudding z wafelkami Nilla", "Stack cake – jabłkowy tort warstwowy", "Moon Pie z marshmallow i czekoladą", "Peach cobbler z lodami waniliowymi"],
    movies: ["Walk the Line", "Coal Miner's Daughter", "Hustle & Flow"],
    music: ["Dolly Parton", "Johnny Cash", "Elvis Presley"]
  },
  {
    name: "USA – Nevada", region: "Ameryka Północna",
    traditions: ["Wieczór w kasynie na Strip", "Śluby w Las Vegas w 15 minut", "Festiwal Burning Man na pustyni"],
    stereotypes: ["Wszystko świeci 24/7", "'What happens in Vegas...'", "Elvis udziela ślubów"],
    food: ["Bufet w kasynie – wszystkiego po trochu", "Shrimp cocktail za grosze w Downtown", "Prime rib steak na grubo", "In-N-Out burger o 3 w nocy"],
    desserts: ["Późnonocne diner pancakes z syropem", "Crème brûlée w kasynie", "Vegas wedding cake – biały tort waniliowy", "Churros z nutellą na Strip"],
    movies: ["Hangover", "Casino", "Ocean's Eleven"],
    music: ["Frank Sinatra w Sands", "The Killers", "Elvis w Vegas"]
  },
  {
    name: "USA – Arizona", region: "Ameryka Północna",
    traditions: ["Wschód słońca nad Wielkim Kanionem", "Sedona vortex i duchowe retreaty", "Spring training baseballu"],
    stereotypes: ["Suchy upał ('but it's a dry heat')", "Kaktusy saguaro wszędzie", "Emeryci uciekający przed zimą"],
    food: ["Sonoran hot dog z fasolą i jalapeño", "Chimichanga z kurczakiem (wynaleziona w Tucson)", "Tamales z mięsem w liściu kukurydzy", "Carne asada fries"],
    desserts: ["Navajo frybread z miodem i cukrem pudrem", "Sopaipillas z syropem z opuncji", "Prickly pear sorbet – lody z opuncji", "Churros z czekoladą"],
    movies: ["Raising Arizona", "Psychoza", "Thelma i Louise"],
    music: ["Stevie Nicks", "Linkin Park (Chester Bennington z Phoenix)", "Alice Cooper"]
  },
  {
    name: "USA – Alaska", region: "Ameryka Północna",
    traditions: ["Iditarod – wyścig psich zaprzęgów", "Łowienie łososia w sezonie", "Polowanie na zorzę polarną"],
    stereotypes: ["Niedźwiedzie na podwórku", "Łoś blokujący drogę", "Mężczyzn więcej niż kobiet"],
    food: ["Świeży łosoś z grilla z ziołami", "King crab legs z masłem cytrynowym", "Reindeer sausage z musztardą", "Halibut fish and chips po alasku"],
    desserts: ["Akutaq – eskimoskie lody z jagodami i tłuszczem", "Wild berry pie z borówkami", "Birch syrup pancakes", "Sourdough doughnuts po alaskijsku"],
    movies: ["Into the Wild", "Biały Kieł", "Grizzly Man"],
    music: ["Jewel", "Portugal. The Man", "Hobo Jim"]
  },
  {
    name: "Portoryko", region: "Karaiby",
    traditions: ["Parady i festiwale salsy w San Juan", "Nochebuena z lechonem i całą rodziną", "Domino na werandzie do późnej nocy"],
    stereotypes: ["Wszyscy tańczą salsę i reggaeton", "Głośna, roześmiana rodzina do 30 osób", "Bad Bunny leci z każdego samochodu"],
    food: ["Mofongo z czosnkiem i chicharrónem", "Lechón asado – pieczony prosiak", "Arroz con gandules z pigeon peas", "Alcapurrias – smażone paszteciki z bananów"],
    desserts: ["Tembleque – kokosowy budyń z cynamonem", "Flan de queso", "Piña colada cake", "Besitos de coco – kokosowe całuski"],
    movies: ["West Side Story", "El Cantante", "Fast & Furious 5 (kręcony w San Juan)"],
    music: ["Bad Bunny", "Daddy Yankee", "Marc Anthony"]
  },
  {
    name: "Dania", region: "Europa Północna",
    traditions: ["Hygge – wieczory przy świecach i kocach", "Fredagsbar – piątkowe piwo z kolegami", "Julefrokost – długie świąteczne obiady"],
    stereotypes: ["Najszczęśliwszy naród świata", "Wszyscy jeżdżą rowerem, nawet w deszczu", "Zakochani w minimalizmie i designie"],
    food: ["Smørrebrød – kanapki na razowym chlebie", "Frikadeller – kotleciki wieprzowe", "Stegt flæsk – smażony boczek z ziemniakami", "Śledź marynowany na wiele sposobów"],
    desserts: ["Wienerbrød – duński pączek", "Rødgrød med fløde – kisiel z owoców z kremem", "Æbleskiver – kuliste pączki jabłkowe", "Kanelsnegle – ślimaki cynamonowe"],
    movies: ["Uczta Babette", "Polowanie", "Druk"],
    music: ["Lukas Graham", "MØ", "Aqua – Barbie Girl"]
  },
  {
    name: "Finlandia", region: "Europa Północna",
    traditions: ["Sauna kilka razy w tygodniu", "Kąpiel w jeziorze po saunie (nawet zimą)", "Zbieranie jagód i grzybów w lesie"],
    stereotypes: ["Milczący i introwertyczni", "Uzależnieni od kawy (piją najwięcej na świecie)", "Kochają heavy metal i tango"],
    food: ["Karjalanpiirakka – karelskie pierożki z ryżem", "Lohikeitto – kremowa zupa z łososia", "Poronkäristys – duszony renifer", "Ruisleipä – ciemny chleb żytni"],
    desserts: ["Korvapuusti – bułeczki cynamonowe", "Runebergintorttu – babeczki migdałowe", "Mustikkapiirakka – tarta z jagodami", "Salmiakki – słona lukrecja"],
    movies: ["Człowiek bez przeszłości", "Chłopiec i pelikan", "Nietypowa opowieść wigilijna"],
    music: ["Nightwish", "HIM", "Sanni"]
  },
  {
    name: "Chorwacja", region: "Europa Południowa",
    traditions: ["Fjaka – sztuka błogiego nicnierobienia nad morzem", "Klapa – wielogłosowe śpiewy a cappella", "Kawa po dwie godziny na starówce"],
    stereotypes: ["Wszyscy mają łódkę lub kuzyna z łódką", "Kochają Hajduk lub Dinamo bardziej niż życie", "Każda wyspa ma swoją najlepszą oliwę"],
    food: ["Peka – mięso i warzywa duszone pod żeliwnym kloszem", "Črni rižot – czarne risotto z kalmarem", "Ćevapi z ajvarem i cebulą", "Pašticada – wołowina duszona w winie"],
    desserts: ["Rožata – dubrownicki krem karmelowy", "Fritule – małe pączki z rumem", "Kremšnita ze Samoboru", "Paprenjaci – ciasteczka z pieprzem i miodem"],
    movies: ["Kto tam śpiewa?", "Ničiji sin", "Gra o tron (kręcona w Dubrowniku)"],
    music: ["Oliver Dragojević", "2CELLOS", "Severina"]
  },
  {
    name: "Rumunia", region: "Europa Wschodnia",
    traditions: ["Mărțișor – biało-czerwone amulety 1 marca", "Kolędowanie z maskami zwierząt", "Długie stoły z rodziną w niedzielę"],
    stereotypes: ["Kraj Drakuli i mrocznych zamków", "Wszyscy mają babcię na wsi z kurami", "Cygańska muzyka na każdym weselu"],
    food: ["Sarmale – gołąbki w liściach kapusty kiszonej", "Mămăligă z brânzą i śmietaną", "Mici – grillowane paluszki mięsne", "Ciorbă de burtă – zupa flaczkowa"],
    desserts: ["Papanași – smażone twarożniki z konfiturą", "Cozonac – strucla z orzechami", "Salam de biscuiți – 'salami' z ciastek", "Amandine – czekoladowe ciastka z rumem"],
    movies: ["4 miesiące, 3 tygodnie i 2 dni", "Śmierć pana Lazarescu", "Aferim!"],
    music: ["Inna", "Alexandra Stan", "Maria Tănase"]
  },
  {
    name: "Serbia", region: "Europa Południowa",
    traditions: ["Slava – rodzinne święto patrona domu", "Kafana – wieczór z muzyką na żywo i rakiją", "Pieczenie prosiaka na weselu"],
    stereotypes: ["Rakija leczy wszystko", "Wszyscy śpiewają turbo-folk", "Kawa po turecku pije się godzinami"],
    food: ["Ćevapi z lepinją i kajmakiem", "Pljeskavica – wielki kotlet z grilla", "Karađorđeva šnicla nadziewana kajmakiem", "Sarma – gołąbki w kapuście kiszonej"],
    desserts: ["Vasina torta – orzechowo-czekoladowa", "Krempita – ciasto z kremem waniliowym", "Tulumbe w syropie", "Palačinke z Eurokremem"],
    movies: ["Underground", "Rany", "Czarny kot, biały kot"],
    music: ["Ceca", "Bajaga i Instruktori", "Riblja Čorba"]
  },
  {
    name: "Tajwan", region: "Azja Wschodnia",
    traditions: ["Nocne targi z jedzeniem do rana", "Festiwal latarni w Pingxi", "Ceremonia herbaty gongfu z górskimi oolongami"],
    stereotypes: ["Bubble tea na każdym rogu", "Najuprzejmiejsi ludzie w Azji", "Kraj gadżetów i półprzewodników"],
    food: ["Beef noodle soup – narodowa zupa", "Xiaolongbao z Din Tai Fung", "Lu rou fan – ryż z duszoną wieprzowiną", "Oyster omelet z nocnego targu"],
    desserts: ["Bubble tea z tapioką", "Pineapple cake – tajwańska ikona", "Mango shaved ice", "Douhua – jedwabisty tofu z syropem"],
    movies: ["Miłosny nastrój (Wong Kar-wai)", "Yi Yi", "Przyczajony tygrys, ukryty smok"],
    music: ["Jay Chou", "Jolin Tsai", "Mayday"]
  },
  {
    name: "Kambodża", region: "Azja Południowo-Wschodnia",
    traditions: ["Nowy Rok Chol Chnam Thmey z polewaniem wodą", "Tańce apsara w strojach ze złotem", "Modlitwa mnichów o wschodzie słońca w Angkor Wat"],
    stereotypes: ["Cały kraj to Angkor Wat", "Ludzie zawsze się uśmiechają", "Tuk-tuk zamiast taksówki"],
    food: ["Fish amok – ryba w curry kokosowym w liściu bananowca", "Lok lak – wołowina z pieprzem Kampot", "Nom banh chok – zielony makaron ryżowy", "Bai sach chrouk – grillowana wieprzowina z ryżem"],
    desserts: ["Num ansom chek – bananowe placki ryżowe w liściach", "Sangkhya lapov – dyniowa panna cotta", "Cha houy teuk – galaretka z syropem palmowym", "Lód z pastą fasolową"],
    movies: ["Pola śmierci", "Pierwsi zabili mojego ojca", "Zaginiony obraz"],
    music: ["Sinn Sisamouth", "Ros Serey Sothea", "VannDa"]
  },
  {
    name: "Bangladesz", region: "Azja Południowa",
    traditions: ["Pohela Boishakh – noworoczne parady w czerwono-białych sari", "Adda – długie posiadówki przy herbacie i rozmowach", "Wesela na trzy dni z henną i tańcem"],
    stereotypes: ["Kraj deszczu monsunowego i rzek", "Wszyscy kochają krykiet", "Herbata i ryż do każdego posiłku"],
    food: ["Kacchi biryani – jagnięcina z ryżem basmati", "Ilish maach bhaja – smażona ryba hilsa", "Panta bhat – ryż moczony na noc z chilli", "Bhuna khichuri z jagnięciną na deszczowe wieczory"],
    desserts: ["Roshogolla – kulki z twarogu w syropie", "Mishti doi – karmelowy jogurt z gliny", "Chomchom z Tangail", "Pitha – ryżowe placuszki z jaggery"],
    movies: ["Matir Moina", "Aynabaji", "Pole owadów"],
    music: ["Runa Laila", "James (Nagar Baul)", "Coke Studio Bangla"]
  },
  {
    name: "ZEA (Dubaj)", region: "Bliski Wschód",
    traditions: ["Majlis – wieczorne spotkania z kawą kardamonową i daktylami", "Sokolnictwo w pustynnych obozach", "Wyścigi wielbłądów o poranku"],
    stereotypes: ["Wszystko musi być najwyższe, najdroższe i pozłacane", "Brunch w piątek z szampanem to obowiązek", "Supersamochody stoją porzucone na lotnisku"],
    food: ["Machboos – ryż z jagnięciną i przyprawami", "Shawarma z kurczaka z toum", "Hummus z ciepłą pitą", "Mixed grill z jagnięciny i kurczaka"],
    desserts: ["Luqaimat – smażone kulki z syropem daktylowym", "Umm Ali – arabska wersja pudding chleba", "Knafeh z serem i pistacjami", "Świeże daktyle Medjool z kawą"],
    movies: ["Mission: Impossible – Ghost Protocol", "Star Trek Beyond", "Diuna (kręcona na pustyni Abu Zabi)"],
    music: ["Hussain Al Jassmi", "Balqees", "Amr Diab"]
  },
  {
    name: "Gruzja", region: "Bliski Wschód",
    traditions: ["Supra – wielogodzinna uczta z tamadą wznoszącym toasty", "Winiarstwo w glinianych qvevri od 8 tys. lat", "Śpiew wielogłosowy uznany przez UNESCO"],
    stereotypes: ["Każdy Gruzin ma swoje wino i winnicę", "Gościnność do przesady – wychodzisz z 3 kilo jedzenia", "Wszyscy tańczą lezginkę na weselach"],
    food: ["Chaczapuri adżarskie z jajkiem i masłem", "Chinkali – soczyste pierogi z wołowiną", "Mtsvadi – szaszłyk z jagnięciny", "Lobio – fasola w glinianym garnku"],
    desserts: ["Czurczchela – orzechy w soku winogronowym", "Pelamushi – kisiel z moszczu winnego", "Nazuki – słodki chleb z rodzynkami", "Gozinaki – orzechy w miodzie na Nowy Rok"],
    movies: ["Podróż w Gruzję", "Mandaryny", "Tańczyliśmy"],
    music: ["Katie Melua", "Nino Katamadze", "Chór Rustavi"]
  },
  {
    name: "Madagaskar", region: "Afryka Wschodnia",
    traditions: ["Famadihana – odwracanie kości przodków co kilka lat", "Hira gasy – wioskowe koncerty z tańcem i opowieścią", "Niedzielny obiad z całą rodziną i wanilią w każdym daniu"],
    stereotypes: ["Kraj lemurów i baobabów", "Wanilia w każdym daniu", "Rajska wyspa na końcu świata"],
    food: ["Romazava – narodowy gulasz mięsno-warzywny", "Ravitoto – tłuczone liście manioku z wieprzowiną", "Ryż z każdym posiłkiem (trzy razy dziennie)", "Akoho sy voanio – kurczak w mleku kokosowym"],
    desserts: ["Mofo gasy – ryżowe pączki na śniadanie", "Koba – banano-orzechowa rolada w liściu", "Lody waniliowe z prawdziwej wanilii Bourbon", "Bonbon coco – karmelki kokosowe"],
    movies: ["Madagaskar (Dreamworks)", "L'Île rouge", "Ady Gasy"],
    music: ["Jaojoby", "Salala", "Rajery"]
  },
  {
    name: "Dominikana", region: "Karaiby",
    traditions: ["Merengue i bachata na ulicach każdego wieczoru", "Domino z sąsiadami na werandzie", "Karnawał w Vega z diabelskimi maskami"],
    stereotypes: ["Wszyscy tańczą bachatę od 3 roku życia", "Baseball to religia", "Rum, plaża i palmy 365 dni w roku"],
    food: ["La bandera – ryż, fasola, mięso i platan", "Mangú – purée z platana z cebulą", "Sancocho – gęsty gulasz z siedmiu mięs", "Pescado con coco z Samany"],
    desserts: ["Habichuelas con dulce – słodka fasola z mlekiem", "Dulce de leche cortada", "Majarete – kremowy pudding kukurydziany", "Tres leches dominicano"],
    movies: ["Sanky Panky", "Perico Ripiao", "Nueba Yol"],
    music: ["Juan Luis Guerra", "Romeo Santos", "Aventura"]
  },
  {
    name: "Gwatemala", region: "Ameryka Środkowa",
    traditions: ["Semana Santa z kolorowymi dywanami z trocin", "Wielkie latawce Barriletes Gigantes na Wszystkich Świętych", "Tkactwo Majów w Chichicastenango"],
    stereotypes: ["Kraina wulkanów, kawy i Majów", "Każde miasto ma swój targ z tekstyliami", "Wszyscy piją kawę uprawianą u siebie na tarasie"],
    food: ["Pepián – gęsty gulasz z pieczonymi przyprawami", "Kak'ik – indycza zupa Majów Q'eqchi'", "Chiles rellenos w cieście jajecznym", "Tamales colorados w liściu bananowca"],
    desserts: ["Rellenitos de plátano z fasolą i czekoladą", "Buñuelos z syropem cynamonowym", "Mole de plátano z sezamem", "Canillitas de leche – karmelki z mleka"],
    movies: ["Ixcanul", "La Llorona", "Nasze matki"],
    music: ["Ricardo Arjona", "Gaby Moreno", "Marimba Chapinlandia"]
  },
  {
    name: "Papua-Nowa Gwinea", region: "Oceania",
    traditions: ["Sing-sing – plemienne spotkania w malowanych twarzach i piórach", "Mumu – pieczenie w ziemi z rozgrzanymi kamieniami", "Wymiana muszli kula na Wyspach Trobrianda"],
    stereotypes: ["Ponad 800 języków w jednym kraju", "Rajskie ptaki na każdej fladze i flagach klanów", "Kraj z najbardziej różnorodną kulturą świata"],
    food: ["Mumu – wieprzowina z bataty pieczone w ziemi", "Kokoda – surowa ryba w mleku kokosowym z limonką", "Sago z bananem", "Kaukau (słodki ziemniak) na wiele sposobów"],
    desserts: ["Dia – pieczony banan w mleku kokosowym", "Pawpaw (papaja) ze świeżą limonką", "Sago pudding z syropem palmowym", "Świeży ananas prosto z krzaka"],
    movies: ["Mr. Pip", "First Contact", "Walking Under Water"],
    music: ["George Telek", "O-Shen", "Sanguma"]
  },
  {
    name: "Bułgaria", region: "Europa Południowa",
    traditions: ["Martenica – czerwono-białe wisiorki 1 marca", "Kukeri – tańce w kudłatych maskach odganiające złe duchy", "Nestinarstwo – taniec po żarze"],
    stereotypes: ["Kiwają głową na 'nie', kręcą na 'tak'", "Jogurt to lokalna duma", "Róże z Doliny Róż w każdym kosmetyku"],
    food: ["Shopska salata z bryndzą", "Banica z ciasta filo i sera", "Kavarma – duszone mięso z warzywami", "Tarator – zimna zupa ogórkowa z jogurtem"],
    desserts: ["Baklava po bułgarsku", "Garash – tort orzechowo-czekoladowy", "Tikvenik – strudel z dyni", "Lokum różane"],
    movies: ["Świat jest wielki i zbawienie czai się za rogiem", "Zift", "Glory"],
    music: ["Le Mystère des Voix Bulgares", "Azis", "Lili Ivanova"]
  },
  {
    name: "Słowenia", region: "Europa Środkowa",
    traditions: ["Kurentovanje – karnawał w kudłatych kostiumach", "Kolędowanie przy jeziorze Bled", "Kres – ogniska na przesilenie letnie"],
    stereotypes: ["Każdy Słoweniec ma pszczoły albo dziadka pszczelarza", "Kraj wielkości dłoni, ale z Alpami i morzem", "Wszyscy jeżdżą na nartach"],
    food: ["Kranjska klobasa (kiełbasa z Krainy)", "Jota – zupa z kiszonej kapusty i fasoli", "Štruklji z twarogiem", "Idrijski žlikrofi – pierożki ze Słowenii"],
    desserts: ["Kremna rezina z Bledu – kremówka", "Prekmurska gibanica – warstwowe ciasto", "Potica orzechowa", "Miód z lipy słoweńskiej z pieczywem"],
    movies: ["Kruh in mleko", "Slovenka", "Kajmak in marmelada"],
    music: ["Laibach", "Perpetuum Jazzile", "Siddharta"]
  },
  {
    name: "Słowacja", region: "Europa Środkowa",
    traditions: ["Fujara – pasterski flet z Poľany", "Wielkanocne oblewanie wodą i smagane witkami", "Vatra – ogniska w Tatrach"],
    stereotypes: ["Bryndza w każdym daniu", "Wszyscy chodzą po Tatrach", "Hokej to religia"],
    food: ["Bryndzové halušky ze skwarkami", "Kapustnica – kiszona kapusta z kiełbasą", "Segedínsky guláš", "Pirohy z bryndzą"],
    desserts: ["Šúľance z makiem", "Trdelník z cukrem i orzechami", "Medovník – miodownik", "Parené buchty z powidłami"],
    movies: ["Obchod na korze", "Slnko v sieti", "Ja, Olga Hepnarová"],
    music: ["Elán", "Richard Müller", "IMT Smile"]
  },
  {
    name: "Litwa", region: "Europa Północna",
    traditions: ["Užgavėnės – karnawał z maskami i paleniem kukły zimy", "Joninės – noc świętojańska nad jeziorem", "Bursztynowe amulety od morza"],
    stereotypes: ["Koszykówka to druga religia", "Wszyscy zbierają grzyby jesienią", "Cicho, ale ciepło do środka"],
    food: ["Cepelinai – kartoflane 'zeppeliny' z mięsem", "Šaltibarščiai – zimny różowy barszcz", "Kugelis – zapiekanka ziemniaczana", "Kibinai – pierogi karaimskie"],
    desserts: ["Šakotis – ciasto 'drzewo'", "Spurgos – litewskie pączki", "Tinginys – 'leniwe' ciastko z herbatnikami", "Miód z lipowego lasu na chlebie żytnim"],
    movies: ["Nikt nie chciał umierać", "Sangailė", "Nova Lituania"],
    music: ["Marijonas Mikutavičius", "The Roop", "Alina Orlova"]
  },
  {
    name: "Łotwa", region: "Europa Północna",
    traditions: ["Līgo – noc świętojańska z wieńcami z dębu", "Festiwal pieśni i tańca co 5 lat", "Bursztyn zbierany na plaży w Jurmale"],
    stereotypes: ["Milczący, ale świetnie śpiewają w chórze", "Sauna to obowiązek", "Wszyscy znają Ryski Balsam"],
    food: ["Pelēkie zirņi ar speķi – szare groszki ze słoniną", "Sklandrausis – tarta z marchwi i ziemniaka", "Wędzona bałtycka ryba", "Skābu kāpostu zupa"],
    desserts: ["Rupjmaizes kārtojums – deser z ciemnego chleba i śmietany", "Piparkūkas – piernikowe ciasteczka", "Alexander torte z malinami", "Sklandrausis na słodko"],
    movies: ["Melānijas hronika", "Bille", "Homo Novus"],
    music: ["Prāta Vētra (Brainstorm)", "Instrumenti", "Carnival Youth"]
  },
  {
    name: "Estonia", region: "Europa Północna",
    traditions: ["Jaanipäev – noc świętojańska przy ogniskach nad morzem", "Święto Pieśni w Tallinnie co 5 lat", "Sauna dymna z chłostą brzozowymi witkami"],
    stereotypes: ["Cyfrowy naród – wszystko przez e-ID", "Milczą jeszcze bardziej niż Finowie", "Wszyscy znają się z Skype'a"],
    food: ["Mulgipuder – puree ziemniaczano-kaszane z boczkiem", "Verivorst – kaszanka z brusznicami", "Śledź w śmietanie z ziemniakami w mundurkach", "Rosolje – sałatka z buraków i śledzia"],
    desserts: ["Kama – deser z prażonej mąki z jogurtem i jagodami", "Kringel – słodka pleciona bułka", "Marcepany z Tallinna", "Sernik z ricottą i borówkami"],
    movies: ["Mandariinid (Mandarynki)", "Sügisball", "Vehkleja (Szermierz)"],
    music: ["Arvo Pärt", "Kerli", "Tommy Cash"]
  },
  {
    name: "Albania", region: "Europa Południowa",
    traditions: ["Xhiro – wieczorny spacer po głównej ulicy", "Besa – kodeks honorowego słowa", "Isopolifonia – wielogłosowy śpiew z południa"],
    stereotypes: ["Kiwają głową na 'nie', kręcą na 'tak' – jak Bułgarzy", "Kawa espresso wypijana kilka razy dziennie", "Mercedesy na każdej ulicy"],
    food: ["Tavë kosi – jagnięcina zapiekana z jogurtem", "Byrek z serem lub szpinakiem", "Fërgesë – papryka z serem i pomidorami", "Qofte të fërguara – smażone kotleciki"],
    desserts: ["Trilece – biszkopt w trzech mlekach", "Bakllava po albańsku", "Revani – ciasto z syropem", "Sheqerpare z syropem cytrynowym"],
    movies: ["Slogans", "Bota", "Sworn Virgin"],
    music: ["Inva Mula", "Elvana Gjata", "Dua Lipa (korzenie albańskie)"]
  },
  {
    name: "Bośnia i Hercegowina", region: "Europa Południowa",
    traditions: ["Sevdah – melancholijne pieśni miłosne", "Skoki z mostu w Mostarze", "Kawa z dżezvą podawana z rachatłukum"],
    stereotypes: ["Wszyscy palą, wszyscy piją kawę cały dzień", "Trzy narodowości, jedno serce", "Ćevapi to danie narodowe"],
    food: ["Ćevapi z lepinją i cebulą", "Burek z mięsem w spirali", "Begova čorba – zupa z kurczaka i bamii", "Sarma z kiszonej kapusty"],
    desserts: ["Tufahije – jabłko nadziewane orzechami", "Hurmašice w syropie", "Baklava sarajewska", "Kadaif z orzechami"],
    movies: ["Ničija zemlja (Ziemia niczyja)", "Grbavica", "Quo Vadis, Aida?"],
    music: ["Dino Merlin", "Goran Bregović", "Amira Medunjanin"]
  },
  {
    name: "Malta", region: "Europa Południowa",
    traditions: ["Festas parafialne z fajerwerkami całe lato", "Karnawał w Valletcie", "Regaty łodzi luzzu w porcie"],
    stereotypes: ["Wszyscy mówią po angielsku i po maltańsku w jednym zdaniu", "Mikroskopijne uliczki, wielkie samochody", "Kościół na każdym rogu"],
    food: ["Pastizzi z ricottą lub groszkiem", "Fenkata – królik duszony w winie", "Aljotta – zupa rybna z czosnkiem", "Bragioli – zawijaski wołowe"],
    desserts: ["Kannoli tal-irkotta", "Imqaret – daktylowe pierożki", "Helwa tat-Tork – chałwa maltańska", "Figolla wielkanocna z marcepanem"],
    movies: ["Simshar", "Luzzu", "Ir-Raġel tal-Ġebel"],
    music: ["Ira Losco", "Destiny", "Ludwig Galea"]
  },
  {
    name: "Cypr", region: "Europa Południowa",
    traditions: ["Kavafiotyka i mezedes na długi wieczór", "Święto Kataklysmos – lanie się wodą", "Robienie halloumi ręcznie"],
    stereotypes: ["Halloumi do wszystkiego", "Wszyscy mają wujka w Londynie", "Kawa cypryjska trzy razy dziennie"],
    food: ["Souvlaki z pity z tzatziki", "Grillowane halloumi z arbuzem", "Kleftiko – jagnięcina pieczona w glinie", "Stifado – gulasz z cebulką"],
    desserts: ["Loukoumades w syropie miodowym", "Baklava cypryjska", "Mahalepi z wodą różaną", "Glyko tou koutaliou (owoce w syropie)"],
    movies: ["The Story of the Green Line", "Kalabush", "Committee"],
    music: ["Anna Vissi", "Michalis Hatzigiannis", "Eleni Foureira"]
  },
  {
    name: "Luksemburg", region: "Europa Zachodnia",
    traditions: ["Éimaischen – targ ceramiki w poniedziałek wielkanocny", "Schueberfouer – największy jarmark", "Święto Narodowe z fajerwerkami nad Alzette"],
    stereotypes: ["Każdy mówi w trzech językach naraz", "Wszyscy pracują w banku lub UE", "Najbogatszy kraj świata na kanapkę"],
    food: ["Judd mat Gaardebounen – wędzona karkówka z bobem", "Bouneschlupp – zupa z zielonej fasolki", "Gromperekichelcher – placki ziemniaczane", "Kachkéis – topiony ser na chlebie"],
    desserts: ["Quetschentaart – tarta ze śliwkami", "Bamkuch – ciasto 'drzewo' po luksembursku", "Verwuerelter – kręcone pączki cukrowe", "Éimaischen – ceramiczne ptaszki z piernika"],
    movies: ["Superjhemp Retörns", "Mumu", "Little Secret"],
    music: ["Serge Tonnar", "Edsun", "Claudine Muno"]
  },
  {
    name: "Hongkong", region: "Azja Wschodnia",
    traditions: ["Dim sum w niedzielne poranki", "Wyścigi smoczych łodzi", "Świąteczne latarnie w Mid-Autumn Festival"],
    stereotypes: ["Wszyscy jedzą pałeczkami w metrze", "Wieżowce widziane z każdego okna", "Kolejki po bubble tea"],
    food: ["Dim sum – har gow, siu mai, char siu bao", "Wonton mein – zupa z pierożkami krewetkowymi", "Char siu z ryżem", "Clay pot rice z kiełbasą"],
    desserts: ["Egg tart (dan tat) z ciasta francuskiego", "Mango pomelo sago", "Pineapple bun (bo lo bao)", "Tong sui – słodka zupa z sezamem"],
    movies: ["Spragnieni miłości (In the Mood for Love)", "Infernal Affairs", "Chungking Express"],
    music: ["Faye Wong", "Leslie Cheung", "Beyond"]
  },
  {
    name: "Laos", region: "Azja Południowo-Wschodnia",
    traditions: ["Tak Bat – jałmużna dla mnichów o świcie", "Baci – ceremonia wiązania białych sznurków na nadgarstku", "Boun Bang Fai – festiwal rakiet o deszcz"],
    stereotypes: ["Najbardziej wyluzowany kraj Azji", "Kleisty ryż do wszystkiego", "Wszyscy jeżdżą tuk-tukiem"],
    food: ["Laap – siekana sałatka mięsna z ziołami", "Kleisty ryż w bambusowym koszyku", "Or lam – gulasz z Luang Prabang", "Tam mak hoong – papaya salad po laotańsku"],
    desserts: ["Nam van – kokosowy deser z tapioką", "Khao niaow ma muang – kleisty ryż z mango", "Sangkhaya – kokosowy krem w dyni", "Khao lam – ryż z kokosem pieczony w bambusie"],
    movies: ["The Rocket", "Chanthaly", "Dearest Sister"],
    music: ["Alexandra Bounxouei", "Cells", "L.O.G."]
  },
  {
    name: "Arabia Saudyjska", region: "Bliski Wschód",
    traditions: ["Majlis – długie posiedzenia z kawą i daktylami", "Ardah – taniec z mieczami", "Ramadan z iftarem po zachodzie słońca"],
    stereotypes: ["Wszyscy piją kawę z kardamonem cały dzień", "Pustynia i wieżowce jednocześnie", "Sokoły warte fortunę"],
    food: ["Kabsa – ryż z jagnięciną i przyprawami", "Mandi – mięso pieczone w ziemi z ryżem", "Mutabbaq – nadziewany naleśnik", "Jareesh – pszenica z jogurtem"],
    desserts: ["Daktyle Ajwa z Medyny", "Kunafa z serem i syropem", "Ma'amoul z daktylami", "Luqaimat – smażone kulki w syropie daktylowym"],
    movies: ["Wadjda", "Barakah Meets Barakah", "The Perfect Candidate"],
    music: ["Mohammed Abdu", "Talal Maddah", "Rotana"]
  },
  {
    name: "Wenezuela", region: "Ameryka Południowa",
    traditions: ["Joropo – narodowy taniec z harfą i maracasami", "Diablos Danzantes de Yare – tańczący diabli w maskach", "Hallacas na Boże Narodzenie zawijane całą rodziną"],
    stereotypes: ["Kraj Miss Universe", "Wszyscy grają w bejsbol", "Arepa na śniadanie, obiad i kolację"],
    food: ["Arepas z reina pepiada (kurczak z awokado)", "Pabellón criollo – ryż, fasola, mięso i banany", "Cachapa – naleśnik z kukurydzy z serem", "Empanadas smażone z serem lub mięsem"],
    desserts: ["Quesillo – wenezuelski flan", "Bienmesabe – ciasto kokosowe", "Dulce de leche z serem białym", "Golfeados – bułeczki z panelą i serem"],
    movies: ["Secuestro Express", "Pelo malo", "Desde allá"],
    music: ["Simón Díaz", "Franco de Vita", "Oscarcito"]
  },
  {
    name: "Haiti", region: "Karaiby",
    traditions: ["Rara – uliczne procesje muzyczne w Wielkim Poście", "Kompa – narodowy rytm do tańca w parach", "Vodou z bębnami i śpiewem"],
    stereotypes: ["Wszyscy tańczą kompa na wszystkim", "Sos ti-malice do każdego mięsa", "Kraj kolorowych tap-tap busów"],
    food: ["Griot – smażona wieprzowina z pikliz", "Riz ak pwa – ryż z czarną fasolą", "Poul nan sòs – kurczak w kreolskim sosie", "Lambi – konch w sosie kreolskim"],
    desserts: ["Pain patate – ciasto z batatów", "Douces makos – karmelowe warstwy", "Blan manje z mlekiem kokosowym", "Kremas – kokosowo-rumowa 'kremówka do picia'"],
    movies: ["Moloch Tropical", "Ayiti Mon Amour", "I Am Not Your Negro"],
    music: ["Wyclef Jean", "Boukman Eksperyans", "Emeline Michel"]
  },
  {
    name: "Barbados", region: "Karaiby",
    traditions: ["Crop Over – karnawał na koniec zbioru trzciny", "Rum shop – lokalna knajpa i klub w jednym", "Wyścigi konne w Garrison Savannah"],
    stereotypes: ["Ojczyzna Rihanny i rumu", "Wszyscy mówią w bajańskim (Bajan)", "Latający ryby na każdym talerzu"],
    food: ["Cou-cou z latającą rybą (danie narodowe)", "Macaroni pie", "Pudding and souse – wieprzowina z ziemniakiem", "Fish cakes z sosem pepper"],
    desserts: ["Coconut turnovers", "Sweet bread z kokosem i wiśniami", "Great cake – rumowy tort świąteczny", "Cassava pone"],
    movies: ["A Hand Full of Dirt", "Chrissy", "Payday"],
    music: ["Rihanna", "The Mighty Gabby", "Rupee"]
  },
  {
    name: "Malediwy", region: "Azja Południowa",
    traditions: ["Bodu beru – bębny i taniec na plaży o zmroku", "Rybackie śniadanie mas huni z roshi", "Wieczorne picie herbaty w hedhikaa – lokalnych herbaciarniach"],
    stereotypes: ["Same luksusowe bungalowy nad wodą", "Wszyscy żyją z turystyki i nurkowania", "Wieczne wakacje i błękitna woda"],
    food: ["Mas huni – tuńczyk z kokosem i cebulą", "Garudhiya – klarowna zupa rybna z ryżem", "Rihaakuru z ryżem i limonką", "Kulhi boakibaa – pikantne ciasto rybne"],
    desserts: ["Bondi – biały kokosowy batonik", "Boakibaa kokosowy", "Foni boakibaa z ryżu i mleka kokosowego", "Świeże mango z limonką i chili"],
    movies: ["The Island President", "Blue Planet II (odcinki o rafach)", "Chasing Coral"],
    music: ["Bodu beru – tradycyjne bębny", "Mohamed Abdul Ghanee", "Harubee"]
  },
  {
    name: "Paragwaj", region: "Ameryka Południowa",
    traditions: ["Tereré – zimne mate pite w kręgu znajomych", "Ñandutí – koronki przypominające pajęczą sieć", "Dwujęzyczność: hiszpański i guaraní w jednym zdaniu"],
    stereotypes: ["Wszyscy chodzą z termosem tereré", "Najspokojniejszy kraj Ameryki Południowej", "Mięso i ser w każdym daniu"],
    food: ["Sopa paraguaya – zapiekanka kukurydziana z serem", "Chipa – bułeczki z mąki maniokowej i sera", "Bori bori – rosół z kluskami kukurydzianymi", "Asado paraguayo z mandioką"],
    desserts: ["Mbeju dulce", "Kosereva – konfitura z gorzkiej pomarańczy", "Dulce de mamón (papaja w syropie)", "Arroz con leche z cynamonem"],
    movies: ["7 cajas", "Hamaca paraguaya", "Los buscadores"],
    music: ["Arpa paraguaya – harfa ludowa", "Luis Alberto del Paraná", "Berta Rojas"]
  },
  {
    name: "Panama", region: "Ameryka Środkowa",
    traditions: ["Taniec tamborito przy bębnach", "Molas – kolorowe tkaniny ludu Guna", "Karnawał z wodnymi culecos na ulicach"],
    stereotypes: ["Kraj to tylko Kanał Panamski", "Kapelusze panama (choć są z Ekwadoru)", "Wieżowce Panama City obok dżungli"],
    food: ["Sancocho – rosół z kurczaka z kolendrą i ñame", "Ropa vieja z ryżem", "Carimañolas z mięsem", "Ceviche z corvina w kubeczku"],
    desserts: ["Tres leches", "Hojaldre z cukrem pudrem", "Raspado – kruszony lód z syropem i mlekiem skondensowanym", "Cocada kokosowa"],
    movies: ["Panama Canal Stories", "Bajo el mismo sol", "Diablo Rojo"],
    music: ["Rubén Blades", "Los Rabanes", "Erika Ender"]
  },
  {
    name: "Armenia", region: "Bliski Wschód",
    traditions: ["Pieczenie lawaszu w tonirze – wpisane na listę UNESCO", "Toasty wznoszone przez tamadę przy długim stole", "Vardavar – oblewanie się wodą latem"],
    stereotypes: ["Wszyscy są spokrewnieni z Kardashiankami", "Koniak lepszy niż francuski", "Nie wypuszczą gościa bez trzeciej dokładki"],
    food: ["Chorowac – szaszłyk z grilla", "Dolma w liściach winogron", "Chasz – zupa na wołowych nóżkach", "Ghapama – dynia nadziewana ryżem i bakaliami"],
    desserts: ["Gata – słodka drożdżówka z chalwową nadzieniem", "Sudżuk orzechowy w soku winogronowym", "Pachlawa ormiańska", "Suszone morele nadziewane orzechami"],
    movies: ["Kolor granatu", "Ararat", "Gniazdo skowronka"],
    music: ["Duduk – Dżiwan Gasparjan", "Komitas", "System of a Down"]
  },
  {
    name: "Białoruś", region: "Europa Wschodnia",
    traditions: ["Kupalle – wianki puszczane na wodę w noc świętojańską", "Chleb i sól na powitanie gości", "Rękodzieło ze słomy i lniane wzory"],
    stereotypes: ["Ziemniaki w każdej postaci – bulba", "Bardzo czyste i uporządkowane ulice", "Cicha, powściągliwa gościnność"],
    food: ["Draniki ze śmietaną", "Maczanka z blinami", "Kołduny z mięsem", "Babka ziemniaczana z boczkiem"],
    desserts: ["Wierhunie – chrust", "Sernik na kruchym spodzie", "Piernik z miodem gryczanym", "Kisiel żurawinowy"],
    movies: ["Idź i patrz", "Chrzest ogniem", "Powiew wolności"],
    music: ["Pesniary", "Lyapis Trubetskoy", "Molchat Doma"]
  },
  {
    name: "Czarnogóra", region: "Europa Południowa",
    traditions: ["Kawa pita godzinami na placu – bez pośpiechu", "Slava – rodzinne święto patrona", "Wieczorny korzo, czyli spacer główną ulicą"],
    stereotypes: ["Najbardziej wyluzowany naród Bałkanów", "Wszyscy są wysocy", "Morze, góry i rakija na wszystko"],
    food: ["Njeguški pršut z serem", "Kačamak z kajmakiem", "Ćevapi z lepinją", "Świeża riba na grillu z blitvą"],
    desserts: ["Priganice z miodem i serem", "Tulumbe w syropie", "Krofne z dżemem", "Baklava czarnogórska"],
    movies: ["A ja gdje sam?", "Wybuch", "Sedem i pol"],
    music: ["Rambo Amadeus", "Sergej Ćetković", "Who See"]
  },
  {
    name: "Macedonia Północna", region: "Europa Południowa",
    traditions: ["Taniec oro w kole na weselach", "Vevčani – karnawał z maskami", "Tawerny z żywą muzyką starogradską do późna"],
    stereotypes: ["Ajvar robiony hurtowo we wrześniu", "Wszędzie posągi w Skopje", "Kawa trwa minimum dwie godziny"],
    food: ["Tavče gravče – fasola zapiekana w glinianym naczyniu", "Ajvar z domową lepinją", "Selsko meso z serem", "Pastrmajlija – placek z mięsem"],
    desserts: ["Tulumba w syropie", "Ravanija z semoliny", "Baklava macedońska", "Sutlijaš – ryż na mleku z cynamonem"],
    movies: ["Przed deszczem", "Honeyland", "Do widzenia jak umrę"],
    music: ["Toše Proeski", "Kaliopi", "Tavče Gravče (bałkański brass)"]
  },
];

