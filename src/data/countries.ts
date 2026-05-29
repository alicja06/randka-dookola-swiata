export type Country = {
  name: string;
  flag: string;
  region: string;
  traditions: string[];
  stereotypes: string[];
  food: string[];
  movies: string[];
  music: string[];
  dateIdea: string;
};

export const countries: Country[] = [
  {
    name: "Włochy", flag: "🇮🇹", region: "Europa Południowa",
    traditions: ["Niedzielny obiad z całą rodziną", "Aperitivo o zachodzie słońca", "Passeggiata wieczorny spacer"],
    stereotypes: ["Mówią rękami", "Pizza i pasta to świętość", "Mamma zawsze ma rację"],
    food: ["Domowa carbonara (bez śmietany!)", "Tiramisu", "Bruschetta z pomidorami i bazylią", "Risotto alla milanese z szafranem"],
    movies: ["La Dolce Vita", "Cinema Paradiso", "Życie jest piękne"],
    music: ["Lucio Battisti", "Måneskin", "Andrea Bocelli – Con te partirò"],
    dateIdea: "Ugotujcie razem makaron od zera, zapalcie świece i pijcie Chianti przy włoskich klasykach."
  },
  {
    name: "Francja", flag: "🇫🇷", region: "Europa Zachodnia",
    traditions: ["Wieczorne picie wina z serami", "Apéro z przyjaciółmi", "Pocałunek w oba policzki"],
    stereotypes: ["Bagietka pod pachą", "Romantycy z natury", "Niechętnie mówią po angielsku"],
    food: ["Croissanty z masłem", "Quiche Lorraine", "Crème brûlée", "Boeuf bourguignon"],
    movies: ["Amélie", "Niedotykalni", "Pachnidło"],
    music: ["Édith Piaf – La Vie en Rose", "Stromae", "Daft Punk"],
    dateIdea: "Piknik z bagietką, serami i winem. W tle Piaf, na deser crème brûlée przy świetle świec."
  },
  {
    name: "Japonia", flag: "🇯🇵", region: "Azja Wschodnia",
    traditions: ["Hanami – oglądanie kwitnących wiśni", "Ceremonia parzenia herbaty", "Kłanianie się na powitanie"],
    stereotypes: ["Bardzo grzeczni i punktualni", "Pracoholicy", "Uwielbiają technologię i anime"],
    food: ["Sushi i sashimi", "Ramen", "Mochi", "Tempura warzywna"],
    movies: ["Spirited Away", "Twoje imię", "Siedmiu samurajów"],
    music: ["Joe Hisaishi", "Babymetal", "Ryuichi Sakamoto"],
    dateIdea: "Wieczór sushi własnej roboty, sake i seans Studia Ghibli pod kocem."
  },
  {
    name: "Hiszpania", flag: "🇪🇸", region: "Europa Południowa",
    traditions: ["Sjesta po obiedzie", "Późna kolacja po 22:00", "Flamenco i feria"],
    stereotypes: ["Gorącokrwiści", "Wszyscy tańczą flamenco", "Życie to fiesta"],
    food: ["Paella Valenciana", "Tapas", "Churros z czekoladą", "Tortilla española"],
    movies: ["Volver", "Labirynt fauna", "Mów do niej"],
    music: ["Rosalía", "Manu Chao", "Paco de Lucía"],
    dateIdea: "Wieczór tapas: kilka małych dań, sangria i nauka podstaw flamenco w salonie."
  },
  {
    name: "Meksyk", flag: "🇲🇽", region: "Ameryka Północna",
    traditions: ["Día de los Muertos", "Mariachi pod oknem", "Piñata na każde urodziny"],
    stereotypes: ["Sombrero i poncho", "Ostre jedzenie do wszystkiego", "Telenowele na potęgę"],
    food: ["Tacos al pastor", "Guacamole", "Mole poblano", "Enchiladas verdes"],
    movies: ["Roma", "Coco", "Labirynt fauna"],
    music: ["Café Tacvba", "Selena", "Natalia Lafourcade"],
    dateIdea: "Taco night z domowym guacamole, margarity i seans 'Coco' z chusteczkami w pogotowiu."
  },
  {
    name: "Indie", flag: "🇮🇳", region: "Azja Południowa",
    traditions: ["Holi – festiwal kolorów", "Diwali – święto świateł", "Namaste na powitanie"],
    stereotypes: ["Bollywood i taniec na każdym kroku", "Ostre curry", "Krowy na ulicach"],
    food: ["Butter chicken", "Biryani", "Samosy z chutneyem", "Palak paneer z ryżem basmati"],
    movies: ["3 Idiots", "Lagaan", "Dilwale Dulhania Le Jayenge"],
    music: ["A.R. Rahman", "Arijit Singh", "Ravi Shankar"],
    dateIdea: "Curry z naanem, chai masala i taneczna scena z Bollywood – spróbujcie powtórzyć choreografię."
  },
  {
    name: "Brazylia", flag: "🇧🇷", region: "Ameryka Południowa",
    traditions: ["Karnawał w Rio", "Churrasco w weekend", "Plażowa siatkówka i futebol"],
    stereotypes: ["Wszyscy tańczą samba", "Życie to plaża", "Piłka nożna to religia"],
    food: ["Feijoada", "Pão de queijo", "Brigadeiro", "Moqueca – gulasz rybny z mlekiem kokosowym"],
    movies: ["Miasto Boga", "Central do Brasil", "Tropa de Elite"],
    music: ["Tom Jobim – Garota de Ipanema", "Anitta", "Gilberto Gil"],
    dateIdea: "Caipirinhy, grill na balkonie i lekcja samby na YouTube – śmiechu gwarantowanego."
  },
  {
    name: "Korea Południowa", flag: "🇰🇷", region: "Azja Wschodnia",
    traditions: ["Chuseok – święto dziękczynienia", "Wspólne BBQ przy stole", "Skinpride i K-beauty"],
    stereotypes: ["K-pop opanował świat", "Maraton K-dram do rana", "Wszyscy wyglądają na 20 lat"],
    food: ["Korean BBQ", "Bibimbap", "Tteokbokki", "Kimchi jjigae"],
    movies: ["Parasite", "Old Boy", "Train to Busan"],
    music: ["BTS", "BLACKPINK", "IU"],
    dateIdea: "Domowe Korean BBQ, soju i maraton K-dramy lub seans 'Parasite'."
  },
  {
    name: "Tajlandia", flag: "🇹🇭", region: "Azja Południowo-Wschodnia",
    traditions: ["Songkran – wodny nowy rok", "Wai – ukłon ze złożonymi dłońmi", "Loy Krathong – puszczanie lampionów"],
    stereotypes: ["Kraj uśmiechu", "Street food wszędzie", "Tajskie masaże"],
    food: ["Pad Thai", "Tom yum", "Mango sticky rice", "Zielone curry z kurczakiem"],
    movies: ["Plemię", "Ong-Bak", "Bad Genius"],
    music: ["Bird Thongchai", "Phum Viphurit", "Tilly Birds"],
    dateIdea: "Domowy pad thai, zimne piwo Singha i wzajemny masaż z olejkiem kokosowym."
  },
  {
    name: "Grecja", flag: "🇬🇷", region: "Europa Południowa",
    traditions: ["Talerz tłuczony na szczęście", "Wieczorne tawerny do nocy", "Wielkanoc prawosławna z jagnięciną"],
    stereotypes: ["Wszyscy mają na imię Nikos lub Maria", "Tańczą sirtaki przy każdej okazji", "Sjesta to święta sprawa"],
    food: ["Moussaka", "Gyros z tzatziki", "Baklava", "Sałatka grecka z fetą"],
    movies: ["Grek Zorba", "Moje wielkie greckie wesele", "Niebieska sukienka"],
    music: ["Mikis Theodorakis", "Nana Mouskouri", "Despina Vandi"],
    dateIdea: "Mezze, retsina i sirtaki w salonie – z obowiązkowym 'Opa!' na koniec."
  },
  {
    name: "USA", flag: "🇺🇸", region: "Ameryka Północna",
    traditions: ["Thanksgiving z indykiem", "Super Bowl Sunday", "4 lipca z fajerwerkami"],
    stereotypes: ["Wszystko jest XXL", "Burger i Cola do wszystkiego", "Small talk to sport narodowy"],
    food: ["Cheeseburger z frytkami", "Mac and cheese", "Brownie z lodami", "BBQ ribs z sosem barbecue"],
    movies: ["Pulp Fiction", "Forrest Gump", "Powrót do przyszłości"],
    music: ["Bruce Springsteen", "Beyoncé", "Johnny Cash"],
    dateIdea: "Burger night, popcorn i klasyk amerykańskiego kina – Tarantino albo coś z lat 80."
  },
  {
    name: "Wielka Brytania", flag: "🇬🇧", region: "Europa Zachodnia",
    traditions: ["Herbata o 17:00", "Sunday roast z rodziną", "Kolejka jako sport narodowy"],
    stereotypes: ["Zawsze rozmawiają o pogodzie", "Suchy humor i sarkazm", "Pub to drugi dom"],
    food: ["Fish and chips", "Sunday roast", "Sticky toffee pudding", "Shepherd's pie"],
    movies: ["Notting Hill", "Trainspotting", "Cztery wesela i pogrzeb"],
    music: ["The Beatles", "Adele", "Arctic Monkeys"],
    dateIdea: "Fish and chips, ciemne piwo i seans brytyjskiej komedii romantycznej z herbatą na deser."
  },
  {
    name: "Niemcy", flag: "🇩🇪", region: "Europa Środkowa",
    traditions: ["Oktoberfest", "Jarmarki bożonarodzeniowe", "Niedziela to dzień ciszy"],
    stereotypes: ["Punktualność to świętość", "Porządek musi być", "Piwo i kiełbasa"],
    food: ["Currywurst", "Sznycel wiedeński", "Bretzle z masłem", "Sauerbraten z czerwoną kapustą"],
    movies: ["Życie na podsłuchu", "Good Bye, Lenin!", "Biegnij Lola, biegnij"],
    music: ["Rammstein", "Kraftwerk", "Nena – 99 Luftballons"],
    dateIdea: "Kiełbaski, precle i ciemne piwo. W tle Kraftwerk, później intensywne kino niemieckie."
  },
  {
    name: "Polska", flag: "🇵🇱", region: "Europa Środkowa",
    traditions: ["Wigilia z 12 potrawami", "Śmigus-dyngus", "Imieniny ważniejsze od urodzin"],
    stereotypes: ["Wódka i ogórek kiszony", "Narzekanie to sport narodowy", "Babcia karmi do utraty tchu"],
    food: ["Pierogi ruskie", "Żurek w chlebie", "Sernik babci", "Bigos staropolski"],
    movies: ["Dekalog", "Cold War", "Bogowie"],
    music: ["Czesław Niemen", "Dawid Podsiadło", "Chopin – Nokturny"],
    dateIdea: "Lepcie pierogi razem od zera, wódka na lód i seans 'Cold War' albo 'Dekalog'."
  },
  {
    name: "Chiny", flag: "🇨🇳", region: "Azja Wschodnia",
    traditions: ["Chiński Nowy Rok z tańcem smoka", "Festiwal Środka Jesieni", "Czerwone koperty na szczęście"],
    stereotypes: ["Wszystko produkują", "Ryż do każdego dania", "Kung-fu w genach"],
    food: ["Dim sum", "Kaczka po pekińsku", "Mapo tofu", "Wołowina po syczuańsku"],
    movies: ["Przyczajony tygrys, ukryty smok", "In the Mood for Love", "Bohater"],
    music: ["Faye Wong", "Jay Chou", "Lang Lang"],
    dateIdea: "Domowe dim sum, zielona herbata i klimatyczny seans 'In the Mood for Love'."
  },
  {
    name: "Argentyna", flag: "🇦🇷", region: "Ameryka Południowa",
    traditions: ["Asado w niedzielę", "Mate z bombillą podawane w kółko", "Tango w milongach do rana"],
    stereotypes: ["Wszyscy tańczą tango", "Mięso na śniadanie, obiad i kolację", "Messi to bóg"],
    food: ["Asado – grill mistrzowski", "Empanadas", "Dulce de leche", "Chimichurri do steku"],
    movies: ["Tajemnica jej oczu", "Dziewięć królowych", "Wild Tales"],
    music: ["Carlos Gardel", "Gustavo Cerati", "Mercedes Sosa"],
    dateIdea: "Stek na patelni, malbec i lekcja tanga – nawet jeden krok robi różnicę."
  },
  {
    name: "Maroko", flag: "🇲🇦", region: "Afryka Północna",
    traditions: ["Ceremonia parzenia herbaty miętowej", "Hammam – łaźnia parowa", "Targi w medynie"],
    stereotypes: ["Wszędzie się targują", "Dywany na każdej ścianie", "Wielbłąd jako taksówka"],
    food: ["Tajine z jagnięciną i suszonymi śliwkami", "Kuskus piątkowy", "Pastilla", "Harira – pikantna zupa"],
    movies: ["Casablanca", "Babel", "Karmazynowe niebo"],
    music: ["Nass El Ghiwane", "Hindi Zahra", "Saad Lamjarred"],
    dateIdea: "Tajine pod kocem, mocna mięta z herbatą i seans 'Casablanki'. Bonus: masaż olejkiem arganowym."
  },
  {
    name: "Egipt", flag: "🇪🇬", region: "Afryka Północna",
    traditions: ["Ramadan i iftar po zachodzie słońca", "Sziszowanie w kawiarniach", "Targowanie się o wszystko"],
    stereotypes: ["Piramidy i mumie wszędzie", "Wielbłądy zamiast aut", "Tańczą jak Kleopatra"],
    food: ["Koshari", "Ful medames", "Baklava", "Mahshi – nadziewane warzywa"],
    movies: ["Dworzec centralny", "Yacoubian Building", "Mumia"],
    music: ["Umm Kulthum", "Amr Diab", "Mohamed Mounir"],
    dateIdea: "Koshari, mocna kawa po arabsku i dokument o piramidach – później wspólna nauka tańca brzucha."
  },
  {
    name: "RPA", flag: "🇿🇦", region: "Afryka",
    traditions: ["Braai – grill jako narodowy rytuał", "Ubuntu – 'jestem, bo my jesteśmy'", "11 oficjalnych języków"],
    stereotypes: ["Safari na każdym kroku", "Wszyscy umieją grillować", "Wuwuzela jako narodowy instrument"],
    food: ["Braai z boerewors", "Bobotie", "Biltong", "Malva pudding"],
    movies: ["Invictus", "Tsotsi", "Dystrykt 9"],
    music: ["Miriam Makeba", "Ladysmith Black Mambazo", "Die Antwoord"],
    dateIdea: "Grill na balkonie, południowoafrykańskie wino Pinotage i seans 'Invictusa' z Mandelą w tle."
  },
  {
    name: "Australia", flag: "🇦🇺", region: "Oceania",
    traditions: ["Australia Day z BBQ", "Surfing o świcie", "Vegemite na śniadanie"],
    stereotypes: ["Wszystko chce ich zabić", "Kangury skaczą po ulicach", "Mate to każdy"],
    food: ["Meat pie", "Lamington", "Pavlova", "Vegemite na toście z masłem"],
    movies: ["Mad Max", "Crocodile Dundee", "Australia"],
    music: ["AC/DC", "Tame Impala", "INXS"],
    dateIdea: "Grill z dużą ilością mięsa, zimne piwo i maraton 'Mad Maxa'. G'day mate!"
  },
  {
    name: "Rosja", flag: "🇷🇺", region: "Europa Wschodnia",
    traditions: ["Banja – ruska sauna z brzozą", "Maslenica – tydzień blinów", "Toasty z wódką"],
    stereotypes: ["Wódka leje się strumieniami", "Niedźwiedzie na ulicach", "Wszyscy ponuro patrzą"],
    food: ["Pielmieni", "Borszcz ze śmietaną", "Bliny z kawiorem", "Sałatka Olivier"],
    movies: ["Stalker", "Lewiatan", "Ironia losu"],
    music: ["Czajkowski", "Wiktor Coj – Kino", "Pussy Riot"],
    dateIdea: "Pielmieni, lodowata wódka i mroczne kino Tarkowskiego pod ciężkim kocem."
  },
  {
    name: "Turcja", flag: "🇹🇷", region: "Eurazja",
    traditions: ["Mocna kawa turecka i wróżenie z fusów", "Hammam", "Bazar i targowanie"],
    stereotypes: ["Wszędzie kebab", "Wąsy = honor", "Czaj non stop"],
    food: ["Kebab adana", "Baklava z pistacjami", "Menemen", "Lahmacun – turecka pizza"],
    movies: ["Zimowy sen", "Trzy małpy", "Once Upon a Time in Anatolia"],
    music: ["Tarkan", "Sezen Aksu", "Barış Manço"],
    dateIdea: "Mezze, raki z lodem i wieczorne wróżenie sobie z fusów kawy. Romantyczne i tajemnicze."
  },
  {
    name: "Wietnam", flag: "🇻🇳", region: "Azja Południowo-Wschodnia",
    traditions: ["Tết – księżycowy Nowy Rok", "Picie kawy z mlekiem skondensowanym", "Kapelusze stożkowe"],
    stereotypes: ["Skutery wszędzie", "Pho na śniadanie", "Wszystko z ryżu"],
    food: ["Pho bo", "Bánh mì", "Sajgonki świeże", "Bun cha – grillowana wieprzowina z makaronem"],
    movies: ["Zapach zielonej papai", "Cyklo", "Czas apokalipsy"],
    music: ["Trinh Cong Son", "Sơn Tùng M-TP", "Hoang Thuy Linh"],
    dateIdea: "Domowe pho, świeże sajgonki i kawa wietnamska z mlekiem skondensowanym na deser."
  },
  {
    name: "Indonezja", flag: "🇮🇩", region: "Azja Południowo-Wschodnia",
    traditions: ["Nyepi – dzień ciszy na Bali", "Wayang – teatr cieni", "Gotong royong – pomoc sąsiedzka"],
    stereotypes: ["17 tysięcy wysp i każda inna", "Wszędzie pachnie kadzidłem", "Surferzy na Bali"],
    food: ["Nasi goreng", "Satay z sosem orzechowym", "Rendang", "Gado-gado z sosem orzechowym"],
    movies: ["The Raid", "Marlina – morderczyni w czterech aktach", "Eat Pray Love"],
    music: ["Anggun", "Rich Brian", "Tulus"],
    dateIdea: "Nasi goreng z jajkiem sadzonym, świeczki kokosowe i seans 'Eat Pray Love'."
  },
  {
    name: "Kuba", flag: "🇨🇺", region: "Karaiby",
    traditions: ["Salsa w klubach do rana", "Cygara skręcane ręcznie", "Stare amerykańskie auta"],
    stereotypes: ["Wszyscy tańczą salsę", "Mojito i Hawana", "Cygaro w zębach"],
    food: ["Ropa vieja", "Moros y cristianos", "Tostones", "Lechón asado – pieczona wieprzowina"],
    movies: ["Truskawki i czekolada", "Buena Vista Social Club", "Powrót do Itaki"],
    music: ["Buena Vista Social Club", "Celia Cruz", "Compay Segundo"],
    dateIdea: "Mojito, czarne fasole z ryżem i lekcja salsy z Buena Vista Social Club w tle."
  },
  {
    name: "Holandia", flag: "🇳🇱", region: "Europa Zachodnia",
    traditions: ["King's Day na pomarańczowo", "Sinterklaas 5 grudnia", "Rower jako podstawowy transport"],
    stereotypes: ["Wszyscy jeżdżą na rowerach", "Tulipany i wiatraki", "Bezpośredni do bólu"],
    food: ["Stroopwafel", "Bitterballen", "Haring – śledź na surowo", "Erwtensoep – gęsty groch"],
    movies: ["Wskaż mi drogę do domu", "Czarna księga", "Antonia"],
    music: ["Tiësto", "Anouk", "Caro Emerald"],
    dateIdea: "Sery holenderskie, gouda i edam, do tego ciemne piwo i seans 'Czarnej księgi'."
  },
  {
    name: "Szwecja", flag: "🇸🇪", region: "Skandynawia",
    traditions: ["Midsommar – noc świętojańska", "Fika – przerwa na kawę i ciasto", "Lucia 13 grudnia"],
    stereotypes: ["Wszyscy są blondynami", "IKEA i klocki", "Zimne i powściągliwe"],
    food: ["Köttbullar – klopsiki", "Gravlax", "Cynamonki kanelbullar", "Toast Skagen z krewetkami"],
    movies: ["Pozwól mi wejść", "Fanny i Aleksander", "Sami swoi"],
    music: ["ABBA", "Avicii", "First Aid Kit"],
    dateIdea: "Klopsiki z brusznicami, świece (hygge w szwedzkim wydaniu) i seans Bergmana albo… ABBA disco."
  },
  {
    name: "Norwegia", flag: "🇳🇴", region: "Skandynawia",
    traditions: ["Russefeiring – świętowanie maturzystów", "Hytte – domek w górach", "17 maja narodowy dzień"],
    stereotypes: ["Trolle w lasach", "Ciągle są na nartach", "Wszystko kosztuje fortunę"],
    food: ["Łosoś wędzony", "Brunost – brązowy ser", "Fårikål", "Kjøttkaker – norweskie kotleciki"],
    movies: ["Bestia", "Łowca trolli", "Najgorszy człowiek na świecie"],
    music: ["A-ha – Take On Me", "Aurora", "Sigrid"],
    dateIdea: "Wieczór z łososiem, świecami i seansem 'Najgorszego człowieka na świecie'. Hyggelig!"
  },
  {
    name: "Irlandia", flag: "🇮🇪", region: "Europa Zachodnia",
    traditions: ["Dzień Świętego Patryka na zielono", "Sesje muzyczne w pubach", "Storytelling przy ognisku"],
    stereotypes: ["Wszyscy rude i piegowate", "Guinness na śniadanie", "Leprechauny w lasach"],
    food: ["Irish stew", "Soda bread", "Shepherd's pie", "Boxty – ziemniaczane placki"],
    movies: ["The Banshees of Inisherin", "Dublińczycy", "Once"],
    music: ["U2", "Sinéad O'Connor", "The Cranberries"],
    dateIdea: "Irish stew, Guinness i seans 'The Banshees of Inisherin' z melancholijną irlandzką folkiem w tle."
  },
  {
    name: "Portugalia", flag: "🇵🇹", region: "Europa Południowa",
    traditions: ["Fado – melancholijne pieśni", "Festas dos Santos Populares", "Azulejos – niebieskie kafle"],
    stereotypes: ["Smutni i melancholijni", "Tylko sardynki i porto", "Saudade – tęsknota za wszystkim"],
    food: ["Bacalhau – dorsz na 365 sposobów", "Pastéis de nata", "Caldo verde", "Francesinha – kanapka po porto"],
    movies: ["Lisbon Story", "Tabu", "Letters from Fontainhas"],
    music: ["Amália Rodrigues", "Madredeus", "Mariza"],
    dateIdea: "Pastéis de nata, kieliszek porto i fado w tle – melancholia w najlepszym wydaniu."
  },
  {
    name: "Szwajcaria", flag: "🇨🇭", region: "Europa Środkowa",
    traditions: ["Fondue w zimowe wieczory", "Jodłowanie w Alpach", "Punktualność jak w zegarku"],
    stereotypes: ["Czekolada, zegarki i banki", "Wszyscy bogaci", "Krowy z dzwonkami"],
    food: ["Fondue serowe", "Raclette", "Czekolada Lindt", "Rösti z jajkiem sadzonym"],
    movies: ["Heidi", "Dark Eye", "Sister"],
    music: ["DJ Bobo", "Stephan Eicher", "Sophie Hunger"],
    dateIdea: "Fondue serowe, białe wino i seans w klimatach alpejskich. Czekolada na deser obowiązkowa."
  },
  {
    name: "Austria", flag: "🇦🇹", region: "Europa Środkowa",
    traditions: ["Bal Wiedeński", "Kawiarnie kawowe z marmurem", "Sylwester z Radetzky Marsch"],
    stereotypes: ["Walc na każdym kroku", "Mozart i Sissi", "Sznycel i strudel"],
    food: ["Wiener Schnitzel", "Sachertorte", "Tafelspitz", "Apfelstrudel z wanilią"],
    movies: ["Dziewczyna z perłą", "Amour", "Trzeci człowiek"],
    music: ["Mozart", "Falco – Rock Me Amadeus", "Conchita Wurst"],
    dateIdea: "Sznycel, kawa po wiedeńsku z bitą śmietaną i lekcja walca w salonie."
  },
  {
    name: "Belgia", flag: "🇧🇪", region: "Europa Zachodnia",
    traditions: ["Festiwale piwa", "Karnawał w Binche", "Frytki z majonezem"],
    stereotypes: ["Tylko czekolada, piwo i frytki", "Spór Flandria-Walonia", "Manneken Pis"],
    food: ["Mule z frytkami", "Gofry brukselskie", "Czekoladki Godiva", "Carbonnade flamande"],
    movies: ["Brugia, fuck you", "Dziecko", "Toto bohater"],
    music: ["Jacques Brel", "Stromae", "Angèle"],
    dateIdea: "Frytki z różnymi sosami, mocne belgijskie piwo i seans 'Brugia, fuck you' z Colinem Farrellem."
  },
  {
    name: "Czechy", flag: "🇨🇿", region: "Europa Środkowa",
    traditions: ["Piwiarnie i piwo na obiad", "Velikonoce z pomlázką", "Bramboráky na targach"],
    stereotypes: ["Piwo zamiast wody", "Suchy humor jak Szwejk", "Kluski do wszystkiego"],
    food: ["Svíčková z knedlikami", "Goulash", "Trdelnik", "Vepřo-knedlo-zelo"],
    movies: ["Pociągi pod specjalnym nadzorem", "Lekcje Faraona", "Kolja"],
    music: ["Karel Gott", "Dvořák", "Iva Bittová"],
    dateIdea: "Knedliki ze svíčkową, ciemne piwo Kozel i seans 'Lekcji Faraona' albo czeskiej Nowej Fali."
  },
  {
    name: "Węgry", flag: "🇭🇺", region: "Europa Środkowa",
    traditions: ["Sylwester z pörkölt", "Tańce ludowe csárdás", "Łaźnie termalne w Budapeszcie"],
    stereotypes: ["Wszystko z papryką", "Niemożliwy język", "Tokaj do każdej okazji"],
    food: ["Gulyás", "Lángos z czosnkiem i serem", "Tokaji Aszú", "Halászlé – zupa rybna z papryką"],
    movies: ["Syn Szawła", "O ciele i duszy", "Mefisto"],
    music: ["Liszt", "Omega", "Bea Palya"],
    dateIdea: "Pikantny gulasz, wino Tokaj i seans intensywnego węgierskiego kina."
  },
  {
    name: "Izrael", flag: "🇮🇱", region: "Bliski Wschód",
    traditions: ["Szabat od piątku wieczorem", "Pesach z macą", "Brunch na piasku w Tel Awiwie"],
    stereotypes: ["Wszyscy są bezpośredni", "Hummus to święta sprawa", "Pustynia i hi-tech jednocześnie"],
    food: ["Hummus z falafelem", "Szakszuka", "Sabich", "Falafel z amba i tahiną"],
    movies: ["Walc z Baszirem", "Footnote", "Synonimy"],
    music: ["Idan Raichel", "Asaf Avidan", "Ofra Haza"],
    dateIdea: "Szakszuka na śniadanio-kolację, dobry hummus z pitą i seans 'Walca z Baszirem'."
  },
  {
    name: "Iran", flag: "🇮🇷", region: "Bliski Wschód",
    traditions: ["Nowruz – perski Nowy Rok", "Poezja Hafeza recytowana na pamięć", "Czaj z kostką cukru w zębach"],
    stereotypes: ["Wszyscy mówią poezją", "Dywany perskie wszędzie", "Taarof – nadmierna grzeczność"],
    food: ["Chelo kabab", "Ghormeh sabzi", "Fesenjan – kurczak w sosie z orzechów i granatu", "Tahdig – chrupiący ryż ze złotą skórką"],
    movies: ["Rozstanie", "Smak czereśni", "Klient"],
    music: ["Googoosh", "Mohsen Namjoo", "Hossein Alizadeh"],
    dateIdea: "Aromatyczny chelo kabab z szafranem, granat na deser i seans 'Rozstania' Asghara Farhadiego."
  },
  {
    name: "Kanada", flag: "🇨🇦", region: "Ameryka Północna",
    traditions: ["Hokej jako religia narodowa", "Thanksgiving w październiku", "Liść klonu na wszystkim"],
    stereotypes: ["Wszyscy mówią 'sorry'", "Syrop klonowy do wszystkiego", "Niedźwiedzie i łosie wszędzie"],
    food: ["Poutine", "Tourtière", "Naleśniki z syropem klonowym", "Butter tarts"],
    movies: ["Incendies", "Sami swoi", "Krwawiące serce"],
    music: ["Leonard Cohen", "Joni Mitchell", "Drake"],
    dateIdea: "Poutine z domowymi frytkami, naleśniki z syropem klonowym i Leonard Cohen w tle."
  },
  {
    name: "Nowa Zelandia", flag: "🇳🇿", region: "Oceania",
    traditions: ["Haka – wojenny taniec Maorysów", "Hāngī – jedzenie pieczone w ziemi", "Bushwalking w weekendy"],
    stereotypes: ["Więcej owiec niż ludzi", "Władca Pierścieni wszędzie", "Wszyscy są wyluzowani"],
    food: ["Pavlova", "Hāngī", "Hokey pokey ice cream", "Whitebait fritters"],
    movies: ["Władca Pierścieni", "Fortepian", "Polowanie na dzikie pieprze"],
    music: ["Lorde", "Crowded House", "Kimbra"],
    dateIdea: "Maraton 'Władcy Pierścieni' (wersja rozszerzona!), pieczeń jagnięca i Pinot Noir z Marlborough."
  },
  {
    name: "Etiopia", flag: "🇪🇹", region: "Afryka Wschodnia",
    traditions: ["Ceremonia parzenia kawy z kadzidłem", "Etiopski Nowy Rok we wrześniu", "Wspólne jedzenie z jednej tacy"],
    stereotypes: ["Kolebka kawy", "Wszyscy są maratończykami", "Najstarszy alfabet Afryki"],
    food: ["Injera z wat", "Doro wat – kurczak po etiopsku", "Kitfo", "Shiro – purée z ciecierzycy"],
    movies: ["Difret", "Lamb", "Adwa"],
    music: ["Mulatu Astatke", "Aster Aweke", "Mahmoud Ahmed"],
    dateIdea: "Etiopska kawa parzona ceremonialnie, injera z curry i jazz Mulatu Astatke w tle."
  },
  {
    name: "Nigeria", flag: "🇳🇬", region: "Afryka Zachodnia",
    traditions: ["Nollywood – kino na potęgę", "Wesela z setkami gości", "Aso ebi – pasujące stroje"],
    stereotypes: ["Wszyscy tańczą afrobeats", "Jollof rice to święta sprawa", "Spór z Ghaną kto ma lepszy jollof"],
    food: ["Jollof rice", "Suya – pikantne szaszłyki", "Egusi soup", "Puff puff – słodkie kulki"],
    movies: ["Lionheart", "King of Boys", "The Wedding Party"],
    music: ["Burna Boy", "Fela Kuti", "Wizkid"],
    dateIdea: "Pikantny jollof rice, suya na grillu i afrobeats playlist do tańca w salonie."
  },
  {
    name: "Kenia", flag: "🇰🇪", region: "Afryka Wschodnia",
    traditions: ["Safari w Masai Mara", "Skoki Masajów", "Harambee – wspólnota"],
    stereotypes: ["Tylko safari i lwy", "Wszyscy biegają maratony", "Akuna matata na każdą okazję"],
    food: ["Ugali z sukuma wiki", "Nyama choma", "Mandazi", "Pilau – aromatyczny ryż"],
    movies: ["Pożegnanie z Afryką", "Nairobi Half Life", "Rafiki"],
    music: ["Sauti Sol", "Eric Wainaina", "Suzanna Owiyo"],
    dateIdea: "Grillowane mięso (nyama choma), zimne piwo Tusker i dokument o Serengeti."
  },
  {
    name: "Peru", flag: "🇵🇪", region: "Ameryka Południowa",
    traditions: ["Inti Raymi – święto słońca", "Pisco sour jako narodowy koktajl", "Andyjskie festiwale w kolorach"],
    stereotypes: ["Lamy na każdym zdjęciu", "Wszyscy noszą poncho", "Machu Picchu to obowiązek"],
    food: ["Ceviche", "Lomo saltado", "Aji de gallina", "Causa rellena"],
    movies: ["Mleko smutku", "Mżawka", "Madeinusa"],
    music: ["Susana Baca", "Eva Ayllón", "Gian Marco"],
    dateIdea: "Ceviche z limonką i kolendrą, pisco sour i dokument o Machu Picchu."
  },
  {
    name: "Kolumbia", flag: "🇨🇴", region: "Ameryka Południowa",
    traditions: ["Karnawał w Barranquilla", "Kawa o każdej porze", "Cumbia i salsa wszędzie"],
    stereotypes: ["Wszyscy znają Pabla Escobara", "Najlepsza kawa na świecie", "Shakira to ikona narodowa"],
    food: ["Bandeja paisa", "Arepy", "Ajiaco", "Sancocho – sycąca zupa"],
    movies: ["Embrace of the Serpent", "Maria, pełna łaski", "Monos"],
    music: ["Shakira", "Juanes", "Carlos Vives"],
    dateIdea: "Arepy z różnym nadzieniem, kolumbijska kawa i playlist Shakiry – tańce gwarantowane."
  },
  {
    name: "Chile", flag: "🇨🇱", region: "Ameryka Południowa",
    traditions: ["Asado niedzielne", "Cueca – taniec narodowy", "Empanadas na każde święto"],
    stereotypes: ["Tylko Andy i pustynia", "Wszystkie wina są chilijskie", "Najdłuższy kraj na świecie"],
    food: ["Empanadas de pino", "Pastel de choclo", "Completo – hot dog po chilijsku", "Pebre – chilijska salsa do chleba"],
    movies: ["No", "Klub", "Una mujer fantástica"],
    music: ["Violeta Parra", "Inti-Illimani", "Mon Laferte"],
    dateIdea: "Empanadas z piekarnika, chilijskie Carménère i muzyka Violety Parra przy świecach."
  },
  {
    name: "Filipiny", flag: "🇵🇭", region: "Azja Południowo-Wschodnia",
    traditions: ["Karaoke jako sport narodowy", "Boże Narodzenie od września", "Fiesta w każdej wiosce", "Sabong – kontrowersyjne walki kogutów organizowane w wielu miejscach"],
    stereotypes: ["Wszyscy świetnie śpiewają", "Koszykówka to sport numer jeden – grają i kibicują wszędzie", "Boks to duma narodowa (Manny Pacquiao!)", "Jeepneys jako dzieła sztuki"],
    food: ["Adobo", "Sinigang", "Halo-halo z ube (fioletowym jamem)", "Lechon kawali"],
    movies: ["Norte – the End of History", "Heneral Luna", "On the Job"],
    music: ["Lea Salonga", "IV of Spades", "Ben&Ben"],
    dateIdea: "Domowe adobo z ryżem, deser z ube na słodko i wieczór karaoke w salonie. Bez wymówek."
  },
  {
    name: "Pakistan", flag: "🇵🇰", region: "Azja Południowa",
    traditions: ["Mehndi – malowanie henną przed weselem", "Iftar w Ramadan", "Truck art – kolorowe ciężarówki"],
    stereotypes: ["Krykiet to religia", "Wszystko ostre", "Trzy dni weselne minimum"],
    food: ["Biryani", "Nihari", "Chicken karahi", "Haleem – gęsta potrawka mięsna"],
    movies: ["Khuda Kay Liye", "Bol", "Joyland"],
    music: ["Nusrat Fateh Ali Khan", "Atif Aslam", "Coke Studio Pakistan"],
    dateIdea: "Aromatyczne biryani, mocna herbata chai i seans Coke Studio – qawwali porywa serca."
  },
  {
    name: "Ukraina", flag: "🇺🇦", region: "Europa Wschodnia",
    traditions: ["Pisanki na Wielkanoc", "Wianki na Iwana Kupałę", "Wesela na 3 dni"],
    stereotypes: ["Wszyscy uwielbiają sało (słoninę)", "Kobiety są piękne", "Borszcz lepszy niż rosyjski"],
    food: ["Barszcz ukraiński", "Wareniki", "Sało z czarnym chlebem", "Holubci – gołąbki"],
    movies: ["Plemię", "Donbas", "Atlantida"],
    music: ["Okean Elzy", "Jamala", "DakhaBrakha"],
    dateIdea: "Wareniki lepione razem od zera, czerwony barszcz na obiad i koncerty DakhaBrakha na YouTube."
  },
  {
    name: "Islandia", flag: "🇮🇸", region: "Europa Północna",
    traditions: ["Þorrablót – uczta zimowa", "Hot poty w gorących źródłach", "Wiara w elfy i trolle"],
    stereotypes: ["Wszyscy są spokrewnieni", "Każdy pisze książkę", "Gejzery zamiast łazienek"],
    food: ["Skyr", "Pylsur – hot dog islandzki", "Plokkfiskur", "Kjötsúpa – islandzka zupa jagnięca"],
    movies: ["101 Reykjavik", "Rams", "Woman at War"],
    music: ["Björk", "Sigur Rós", "Of Monsters and Men"],
    dateIdea: "Świeża ryba, gorąca kąpiel ze świecami (imitacja blue lagoon) i Sigur Rós w tle. Czysta magia."
  },
  {
    name: "Jamajka", flag: "🇯🇲", region: "Karaiby",
    traditions: ["Kultura soundsystemów na ulicach", "Silne znaczenie muzyki i społeczności", "Rastafarianizm i filozofia 'one love'"],
    stereotypes: ["Wszystko jest 'no problem, mon'", "Najszybsi sprinterzy świata (Usain Bolt)", "Dredy i kolory rasta wszędzie"],
    food: ["Jerk chicken z grilla", "Ackee and saltfish", "Rice and peas", "Jamaican patty z wołowiną"],
    movies: ["Cool Runnings", "The Harder They Come", "Marley (dokument)"],
    music: ["Bob Marley", "Sean Paul", "Reggae i dancehall klasyki"],
    dateIdea: "Jerk chicken z grilla, rum z colą i sorrel drink, a w tle Bob Marley i sesja dancehallu w salonie."
  },
  {
    name: "Malezja", flag: "🇲🇾", region: "Azja Południowo-Wschodnia",
    traditions: ["Hari Raya po Ramadanie", "Mamak – nocne knajpki otwarte do rana", "Mieszanka kultur malajskiej, chińskiej i indyjskiej"],
    stereotypes: ["Wszyscy kochają durian", "Trzy języki w jednym zdaniu", "Petronas Towers na każdym zdjęciu"],
    food: ["Nasi lemak", "Laksa", "Roti canai z dhal", "Char kway teow"],
    movies: ["Sepet", "The Journey", "Bunohan"],
    music: ["Yuna", "Siti Nurhaliza", "Search"],
    dateIdea: "Nasi lemak z sambalem, mrożona teh tarik i seans 'Sepet' z malezyjskim klimatem mamak."
  },
  {
    name: "Singapur", flag: "🇸🇬", region: "Azja Południowo-Wschodnia",
    traditions: ["Hawker centres – kulinarne dziedzictwo UNESCO", "Chingay Parade", "Wieloetniczność jako fundament państwa"],
    stereotypes: ["Wszędzie czysto i zakazów bez liku", "Kara za gumę do żucia", "Najdroższe miasto świata"],
    food: ["Chili crab", "Hainanese chicken rice", "Laksa singapurska", "Kaya toast ze śniadaniowym jajkiem"],
    movies: ["Ilo Ilo", "Crazy Rich Asians", "Apprentice"],
    music: ["Stefanie Sun", "JJ Lin", "The Sam Willows"],
    dateIdea: "Wieczór w stylu hawker center: kilka małych dań, chili crab i Singapore Sling przy świetle latarni."
  },
  {
    name: "Nepal", flag: "🇳🇵", region: "Azja Południowa",
    traditions: ["Namaste z dłońmi przy sercu", "Festiwal Dashain", "Pielgrzymki do Lumbini i Pashupatinath"],
    stereotypes: ["Wszyscy są szerpami", "Himalaje to codzienność", "Joga i medytacja od urodzenia"],
    food: ["Dal bhat", "Momo ze sosem achar", "Sel roti", "Thukpa – himalajska zupa"],
    movies: ["Kabaddi", "Highway", "White Sun"],
    music: ["1974 AD", "Bartika Eam Rai", "Sajjan Raj Vaidya"],
    dateIdea: "Lepcie momo razem od zera, do tego masala chai i dokument o Himalajach na koniec."
  },
  {
    name: "Mongolia", flag: "🇲🇳", region: "Azja Środkowa",
    traditions: ["Naadam – festiwal trzech męskich sportów", "Życie w jurtach (gerach)", "Pasterstwo nomadyczne"],
    stereotypes: ["Wszyscy są spadkobiercami Czyngis-chana", "Konie wszędzie", "Picie kumysu z miski"],
    food: ["Buuz – pierożki na parze", "Khorkhog – mięso pieczone na rozgrzanych kamieniach", "Tsuivan – smażony makaron z baraniną", "Aaruul – suszony twaróg"],
    movies: ["Opowieść o płaczącym wielbłądzie", "Mongol", "The Eagle Huntress"],
    music: ["The Hu", "Khusugtun", "Tradycyjny śpiew gardłowy khoomei"],
    dateIdea: "Buuz na parze, mocna czarna herbata z mlekiem i seans 'The Eagle Huntress' z The Hu w tle."
  },
  {
    name: "Sri Lanka", flag: "🇱🇰", region: "Azja Południowa",
    traditions: ["Festiwal Esala Perahera ze słoniami", "Ceremonia parzenia cejlońskiej herbaty", "Kiwanie głową na 'tak'"],
    stereotypes: ["Wszędzie cynamon i herbata", "Buddyjskie świątynie na każdym wzgórzu", "Krykiet to drugie życie"],
    food: ["Rice and curry z sambolem", "Hoppers (appa)", "Kottu roti", "Lamprais"],
    movies: ["The Forsaken Land", "Funny Boy", "With You, Without You"],
    music: ["Bathiya and Santhush", "Yohani – Manike Mage Hithe", "Iraj"],
    dateIdea: "Pikantne rice and curry, mrożona herbata cejlońska z imbirem i dokument o pociągu przez plantacje."
  },
  {
    name: "Kazachstan", flag: "🇰🇿", region: "Azja Środkowa",
    traditions: ["Nauryz – wiosenny Nowy Rok", "Kokpar – jeździecki sport z kozłem", "Eagle hunting – polowanie z orłem"],
    stereotypes: ["Wszyscy myślą o Boracie", "Step i konie po horyzont", "Wódka i konina do każdej okazji"],
    food: ["Beshbarmak", "Kazy (konina)", "Plov", "Baursaki – smażone pączki"],
    movies: ["Tulpan", "Mongol", "Kelin"],
    music: ["Dimash Kudaibergen", "Ninety One", "Tradycyjna dombra"],
    dateIdea: "Beshbarmak na dużym talerzu, czarna herbata z mlekiem i koncert Dimasha na YouTube."
  },
  {
    name: "Uzbekistan", flag: "🇺🇿", region: "Azja Środkowa",
    traditions: ["Czajchana – herbaciarnia jako centrum życia", "Wesela z setkami gości", "Jedwabny Szlak i bazary w Samarkandzie"],
    stereotypes: ["Plov na każdą okazję", "Niebieskie kopuły wszędzie", "Targowanie się to sztuka"],
    food: ["Plov uzbecki", "Manty – duże pierogi z baraniną", "Shashlik", "Samsa z piekarnika tandoor"],
    movies: ["Tashkent – City of Bread", "The Sun Also Rises Over Tashkent", "Parizod"],
    music: ["Yulduz Usmonova", "Sevara Nazarkhan", "Tradycyjna muzyka shashmaqam"],
    dateIdea: "Plov z baraniną i marchewką w jednym kazanie, zielona herbata i wieczór z opowieściami z Jedwabnego Szlaku."
  },
  {
    name: "Tanzania", flag: "🇹🇿", region: "Afryka Wschodnia",
    traditions: ["Safari w Serengeti i wspinaczka na Kilimandżaro", "Ujamaa – filozofia wspólnoty", "Suahili jako język jednoczący"],
    stereotypes: ["Hakuna matata na wszystko", "Wszyscy mieszkają obok lwów", "Zanzibar to raj na ziemi"],
    food: ["Ugali z nyama choma", "Pilau zanzibarskie z przyprawami", "Mishkaki – szaszłyki", "Mandazi"],
    movies: ["Maangamizi", "T-Junction", "Bongoland"],
    music: ["Diamond Platnumz", "Ali Kiba", "Bongo Flava"],
    dateIdea: "Pilau z aromatycznymi przyprawami zanzibarskimi, świeży sok z marakui i dokument o Serengeti."
  },
  {
    name: "Ghana", flag: "🇬🇭", region: "Afryka Zachodnia",
    traditions: ["Tkactwo Kente – kolorowe wzory ze znaczeniem", "Festiwal Homowo", "Spór z Nigerią o najlepszy jollof"],
    stereotypes: ["Najlepszy jollof na świecie (sorry Nigeria)", "Wszyscy tańczą azonto", "Kakao i złoto w każdej kopalni"],
    food: ["Jollof rice po ghańsku", "Fufu z zupą egusi", "Banku z tilapią", "Waakye – ryż z fasolą"],
    movies: ["The Burial of Kojo", "Children of the Mountain", "Azali"],
    music: ["Sarkodie", "Stonebwoy", "Daddy Lumba"],
    dateIdea: "Jollof rice po ghańsku z grillowanym kurczakiem i lekcja azonto z YouTube."
  },
  {
    name: "Senegal", flag: "🇸🇳", region: "Afryka Zachodnia",
    traditions: ["Teranga – senegalska gościnność", "Sabar – bębny i taniec", "Wspólne jedzenie z jednej miski"],
    stereotypes: ["Wszyscy są wysocy i eleganccy", "Zapaśnicy laamb to bohaterowie", "Boubou w każdym kolorze"],
    food: ["Thieboudienne – ryż z rybą", "Yassa poulet", "Mafé – gulasz z masłem orzechowym", "Pastels – smażone pierożki"],
    movies: ["Atlantique", "Touki Bouki", "La Noire de…"],
    music: ["Youssou N'Dour", "Baaba Maal", "Ismael Lô"],
    dateIdea: "Thieboudienne z jednej miski, mocna mięta z herbatą ataya i koncerty Youssou N'Doura w tle."
  },
  {
    name: "Algieria", flag: "🇩🇿", region: "Afryka Północna",
    traditions: ["Raï – muzyka i bunt", "Kuskus piątkowy z rodziną", "Mocna kawa po algiersku"],
    stereotypes: ["Wszędzie Sahara", "Piłka nożna to religia", "Pustynia i kasba w jednym"],
    food: ["Couscous z baraniną i siedmioma warzywami", "Chorba frik – zupa z baraniną", "Mechoui – pieczona jagnięcina", "Makroud – ciastka z daktylami"],
    movies: ["Bitwa o Algier", "Hors la loi", "Papicha"],
    music: ["Cheb Khaled", "Rachid Taha", "Souad Massi"],
    dateIdea: "Pachnący kuskus z baraniną, mięta z herbatą i koncerty Cheba Khaleda – obowiązkowa 'Aïcha'."
  },
  {
    name: "Tunezja", flag: "🇹🇳", region: "Afryka Północna",
    traditions: ["Hammam jako rytuał piękności", "Ceremonia herbaty miętowej z orzeszkami", "Niebiesko-białe domy Sidi Bou Said"],
    stereotypes: ["Wszędzie harissa do wszystkiego", "Plaża i medyna w jednym", "Skręcanie się nad targiem"],
    food: ["Brik z jajkiem i tuńczykiem", "Couscous tuniski z harissą", "Lablabi – zupa z ciecierzycy", "Makroudh – ciasteczka z daktylami"],
    movies: ["The Man Who Sold His Skin", "Beauty and the Dogs", "A Son"],
    music: ["Emel Mathlouthi", "Latifa Arfaoui", "Saber Rebaï"],
    dateIdea: "Pikantne brik z jajkiem, mięta z herbatą z orzeszkami pinii i spacer po Sidi Bou Said na zdjęciach."
  },
  {
    name: "Boliwia", flag: "🇧🇴", region: "Ameryka Południowa",
    traditions: ["Karnawał w Oruro z diabolada", "Cholitas wrestling – panie w spódnicach na ringu", "Cocoa leaves przeciw chorobie wysokościowej"],
    stereotypes: ["Najwyższe miasto świata (La Paz)", "Cholity w melonikach", "Salar de Uyuni jak lustro"],
    food: ["Salteñas", "Pique macho", "Silpancho", "Anticuchos – szaszłyki z serca wołowego"],
    movies: ["Zama", "También la lluvia", "La nación clandestina"],
    music: ["Los Kjarkas", "Bonny Lovy", "Tradycyjna muzyka andyjska na zampoñas"],
    dateIdea: "Salteñas na rozgrzewkę, gorąca czekolada po andyjsku i dokument o Salar de Uyuni."
  },
  {
    name: "Urugwaj", flag: "🇺🇾", region: "Ameryka Południowa",
    traditions: ["Mate non stop, wszędzie i z każdym", "Asado niedzielne", "Candombe – afro-urugwajskie bębny"],
    stereotypes: ["Termos pod pachą do mate", "Wszyscy kochają piłkę (mistrzostwa 1930 i 1950)", "Najbardziej liberalny kraj regionu"],
    food: ["Chivito – kanapka z wszystkim", "Asado uruguayo", "Dulce de leche w każdej formie", "Milanesa napolitana"],
    movies: ["Whisky", "El baño del Papa", "Una noche sin luna"],
    music: ["Jorge Drexler", "Rubén Rada", "No Te Va Gustar"],
    dateIdea: "Chivito z dużą ilością frytek, butelka Tannat i mate na deser pod gwiazdami."
  },
  {
    name: "Ekwador", flag: "🇪🇨", region: "Ameryka Południowa",
    traditions: ["Fiesta del Sol – Inti Raymi w Andach", "Cuy (świnka morska) na specjalne okazje", "Mitad del Mundo – stanie na równiku"],
    stereotypes: ["Wszyscy mają kapelusz panamski (który pochodzi z Ekwadoru!)", "Banany na każdym kroku", "Galapagos i żółwie"],
    food: ["Ceviche ekwadorskie z kukurydzą", "Llapingachos – placki ziemniaczane", "Encebollado – zupa rybna", "Locro de papa"],
    movies: ["Ratas, Ratones, Rateros", "Pescador", "A tus espaldas"],
    music: ["Juan Fernando Velasco", "Nicola Cruz", "Pasillo ecuatoriano"],
    dateIdea: "Ceviche z popcornem (po ekwadorsku!), świeży sok z naranjilla i dokument o Galapagos."
  },
  {
    name: "Jordania", flag: "🇯🇴", region: "Bliski Wschód",
    traditions: ["Gościnność beduińska z herbatą", "Mansaf – narodowe danie podawane na specjalnych okazjach", "Hospitalité w namiotach Wadi Rum"],
    stereotypes: ["Petra na każdym zdjęciu", "Wszyscy są krewnymi króla", "Hummus lepszy niż w Izraelu (i odwrotnie)"],
    food: ["Mansaf – baranina z jameedem i ryżem", "Maqluba – odwrócony garnek", "Falafel z hummusem", "Knafeh z serem i syropem"],
    movies: ["Theeb", "Captain Abu Raed", "When Monaliza Smiled"],
    music: ["Macadi Nahhas", "Omar Al-Abdallat", "Tradycyjna muzyka beduińska"],
    dateIdea: "Mansaf z jameedem na dużym talerzu, mocna mięta z herbatą i seans 'Theeb' z pustynnym klimatem."
  },
  {
    name: "Liban", flag: "🇱🇧", region: "Bliski Wschód",
    traditions: ["Mezze – dziesiątki małych dań na środku stołu", "Życie nocne Bejrutu jak nigdzie", "Zaproszenia na kawę co pięć minut"],
    stereotypes: ["Wszyscy mają trzy paszporty", "Najlepszy hummus i tabbouleh (sorry reszto Bliskiego Wschodu)", "Cedr na fladze i wszędzie"],
    food: ["Tabbouleh", "Hummus z mięsem mielonym", "Manakish z za'atarem", "Kibbeh – kotleciki z burgulu"],
    movies: ["Kafarnaum", "Caramel", "Insyallah a Boy"],
    music: ["Fairuz", "Mashrou' Leila", "Marcel Khalife"],
    dateIdea: "Mezze z dziesięcioma talerzykami, arak z lodem i Fairuz w poranne nuty – jak prawdziwi Bejruci."
  },
  {
    name: "Fidżi", flag: "🇫🇯", region: "Oceania",
    traditions: ["Ceremonia kava – picie z kokosa w kółku", "Meke – tradycyjny taniec i pieśni", "Bula! – pozdrowienie i sposób życia"],
    stereotypes: ["Wszyscy uśmiechają się non stop", "Rajskie plaże i palmy", "Rugby to religia"],
    food: ["Kokoda – fidżijskie ceviche w mleku kokosowym", "Lovo – jedzenie pieczone w ziemi", "Rourou – liście taro z mlekiem kokosowym", "Palusami"],
    movies: ["The Land Has Eyes", "Vai", "Cast Away (kręcony tutaj)"],
    music: ["Black Rose", "Laisa Vulakoro", "Tradycyjne pieśni meke"],
    dateIdea: "Kokoda w mleku kokosowym, świeży sok z marakui i wieczór z muzyką wyspiarską przy świecach."
  },
  {
    name: "Samoa", flag: "🇼🇸", region: "Oceania",
    traditions: ["Fa'a Samoa – samoańska droga życia", "Tatau – tradycyjny tatuaż ręczny", "Sunday to'ona'i – niedzielna rodzinna uczta"],
    stereotypes: ["Wszyscy grają w rugby (i są w nim świetni)", "Tatuaże od stóp do głów", "Najwięksi i najsilniejsi"],
    food: ["Palusami – liście taro z mlekiem kokosowym", "Oka – samoańskie ceviche", "Sapasui – samoański chow mein", "Panipopo – bułeczki w sosie kokosowym"],
    movies: ["The Orator (O Le Tulafale)", "Three Wise Cousins", "Moana (inspirowana Polinezją)"],
    music: ["Jerome Grey", "Tenelle", "Tradycyjne pieśni siva"],
    dateIdea: "Palusami z mlekiem kokosowym, świeży ananas i wieczór z polinezyjskimi pieśniami przy świecach."
  },
  {
    name: "Kostaryka", flag: "🇨🇷", region: "Ameryka Środkowa",
    traditions: ["Pura vida – filozofia życia bez stresu", "Niedzielne casado z rodziną", "Festyny z marimba i tańcami"],
    stereotypes: ["Zawsze uśmiechnięci i wyluzowani", "Surfują od rana do nocy", "Wszędzie leniwce i tukany"],
    food: ["Gallo pinto (ryż z czarną fasolą) na śniadanie", "Casado – obiadowy talerz z ryżem, fasolą i bananem", "Ceviche z ryby i limonki", "Chifrijo – fasola, ryż i skwarki"],
    movies: ["Agua fría de mar", "Princesas Rojas", "After Words (kręcony w Kostaryce)"],
    music: ["Editus", "Debi Nova", "Tradycyjne calypso z Limón"],
    dateIdea: "Gallo pinto na kolację, świeży sok z marakui i wieczór z dźwiękami dżungli oraz playlistą calypso."
  },
  {
    name: "Watykan", flag: "🇻🇦", region: "Europa Południowa",
    traditions: ["Niedzielne Anioł Pański na placu św. Piotra", "Msze papieskie i audiencje generalne", "Konklawe i biały dym z komina"],
    stereotypes: ["Wszędzie księża i zakonnice", "Najmniejsze państwo świata", "Gwardia Szwajcarska w kolorowych mundurach"],
    food: ["Kremówka papieska (ulubiona Jana Pawła II)", "Pasta cacio e pepe z Rzymu", "Saltimbocca alla romana", "Maritozzi z bitą śmietaną"],
    movies: ["Habemus Papam", "Dwóch papieży", "Anioły i demony"],
    music: ["Chór Kaplicy Sykstyńskiej", "Gregoriańskie chorały", "Allegri – Miserere"],
    dateIdea: "Kremówki à la Wadowice, włoska kawa i wieczór z gregoriańskimi chorałami oraz albumem o Kaplicy Sykstyńskiej."
  }
];
