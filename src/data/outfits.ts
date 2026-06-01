// Outfit suggestions per country. Multiple options per gender so there's always
// something do wyboru, gdy czegoś nie ma w szafie.
export const outfits: Record<string, { woman: string[]; man: string[] }> = {
  "Włochy": {
    woman: [
      "Czerwona sukienka midi, złote kolczyki, szpilki",
      "Białe lniane spodnie, jedwabna bluzka, sandały na korku",
      "Czarna dopasowana spódnica, top w paski, baleriny",
      "Kwiecista sukienka maxi, słomkowy kapelusz, espadryle",
    ],
    man: [
      "Lniana koszula, granatowe spodnie, mokasyny bez skarpetek",
      "Biały T-shirt, marynarka, jasne chinosy, sneakersy",
      "Pasiasta koszulka polo, beżowe spodnie, loafersy",
      "Granatowy sweter narzucony na ramiona, biała koszula, jeansy",
    ],
  },
  "Francja": {
    woman: [
      "Mała czarna, beret, czerwona szminka",
      "Pasiasta bluzka, jeansy mom-fit, baleriny, czerwona szminka",
      "Trencz, kaszmirowy sweter, ołówkowa spódnica, kozaki",
      "Jedwabna bluzka, czarne spodnie cygaretki, mokasyny",
    ],
    man: [
      "Pasiasta koszulka, ciemne jeansy, marynarka, szalik",
      "Biała koszula, granatowy sweter, beżowe spodnie, brogsy",
      "Czarny golf, marynarka, jeansy, sneakersy",
      "Trencz, koszula oxford, ciemne chinosy, mokasyny",
    ],
  },
  "Japonia": {
    woman: [
      "Minimalistyczna sukienka w czerni lub yukata",
      "Biała koszula oversize, czarne szerokie spodnie, sneakersy",
      "Plisowana spódnica midi, prosty top, mokasyny",
      "Beżowy trencz, czarny golf, proste jeansy, czarne buty",
    ],
    man: [
      "Czarny golf, proste spodnie, sneakersy w stylu Muji",
      "Biała koszula oversize, czarne szerokie spodnie, sandały",
      "Szara bluza, czarne chinosy, białe sneakersy",
      "Lniana koszula, beżowe spodnie, sandały",
    ],
  },
  "Hiszpania": {
    woman: [
      "Sukienka z falbanami w czerwieni, kolczyki kreole",
      "Czarna sukienka midi, czerwone szpilki, duże kolce w uszach",
      "Biała bluzka z falbaną, dżinsy, sandały na koturnie",
      "Kwiecista spódnica maxi, top na ramiączkach, espadryle",
    ],
    man: [
      "Biała koszula rozpięta, ciemne spodnie, skórzany pasek",
      "Czarny T-shirt, jeansy, skórzane buty, marynarka",
      "Lniana koszula w kolorze terakoty, beżowe spodnie, sandały",
      "Polo, chinosy, mokasyny",
    ],
  },
  "Meksyk": {
    woman: [
      "Haftowana bluzka, kolorowa spódnica, duże kolczyki",
      "Biała sukienka z haftem, sandały, kwiat we włosach",
      "Kolorowe poncho, jeansy, kozaki",
      "Czerwona sukienka, złota biżuteria, sandały",
    ],
    man: [
      "Lniana koszula guayabera, jeansy, kapelusz",
      "Biała koszula, ciemne spodnie, skórzany pasek z klamrą",
      "Polo w żywym kolorze, chinosy, mokasyny",
      "Czarna koszula, jeansy, kowbojki",
    ],
  },
  "Indie": {
    woman: [
      "Kolorowa tunika lub sari, bransoletki, biżuteria na czoło",
      "Długa kwiecista sukienka, złote kolczyki, sandały",
      "Czerwona bluzka z haftem, czarne spodnie, sandały",
      "Jedwabna spódnica maxi, top, dużo bransoletek",
    ],
    man: [
      "Kurta z lnu, ciemne spodnie, sandały",
      "Biała lniana koszula, beżowe spodnie, mokasyny",
      "Kolorowa koszula z haftem, jeansy, sandały",
      "Granatowy sweter narzucony na koszulę, chinosy, loafersy",
    ],
  },
  "Brazylia": {
    woman: [
      "Letnia sukienka w soczystych kolorach, sandały",
      "Kwiecista sukienka maxi, klapki, kwiat we włosach",
      "Top crop, jeansy, kolorowe sandały",
      "Żółta lub zielona sukienka, złote kolczyki",
    ],
    man: [
      "Lniana koszula w jasnym kolorze, krótkie spodenki lub chinosy",
      "Biały T-shirt, jeansy, sneakersy",
      "Kolorowa koszula w printy, beżowe spodnie, sandały",
      "Polo, krótkie spodenki, klapki",
    ],
  },
  "Korea Południowa": {
    woman: [
      "Wielowarstwowy, minimalistyczny look – biała bluzka, plisowana spódnica",
      "Oversize'owy sweter, mini spódniczka, białe sneakersy",
      "Pastelowa sukienka, kokardka we włosach, baleriny",
      "Czarny garnitur oversize, biały T-shirt, sneakersy",
    ],
    man: [
      "Oversize'owa marynarka, biały t-shirt, czarne spodnie, sneakersy",
      "Beżowy sweter, biała koszula, jeansy, białe sneakersy",
      "Czarna bluza oversize, czarne spodnie, sneakersy",
      "Pastelowa koszula, chinosy, mokasyny",
    ],
  },
  "Tajlandia": {
    woman: [
      "Jedwabna sukienka w żywych kolorach, kwiat we włosach",
      "Lekka kwiecista sukienka, sandały, słomkowy kapelusz",
      "Biała sukienka maxi, złote kolczyki, klapki",
      "Top z jedwabiu, lniane spodnie, sandały",
    ],
    man: [
      "Luźna lniana koszula, beżowe spodnie, sandały",
      "Kolorowa koszula, krótkie spodenki, klapki",
      "Biały T-shirt, lniane spodnie, sandały",
      "Polo, chinosy, mokasyny",
    ],
  },
  "Grecja": {
    woman: [
      "Biała zwiewna sukienka, złote sandały, błękitne dodatki",
      "Niebieska sukienka midi, słomkowy kapelusz, sandały",
      "Biały top, lniane spodnie, espadryle",
      "Sukienka maxi z odkrytymi ramionami, złota biżuteria",
    ],
    man: [
      "Biała koszula lniana, beżowe spodnie, espadryle",
      "Biały T-shirt, lniane spodnie, sandały",
      "Błękitna koszula, białe szorty, mokasyny",
      "Polo w bieli, beżowe chinosy, sandały",
    ],
  },
  "Wielka Brytania": {
    woman: [
      "Trencz, kraciasta spódnica, kozaki",
      "Tweedowa marynarka, jeansy, kalosze Hunter",
      "Mała czarna, perły, szpilki",
      "Sweter z grubego kaszmiru, plisowana spódnica, kozaki",
    ],
    man: [
      "Trencz, sweter, ciemne jeansy, oksfordki",
      "Tweedowa marynarka, koszula, chinosy, brogsy",
      "Sweter z dekoltem V, koszula, jeansy, sneakersy",
      "Granatowy garnitur, biała koszula, krawat",
    ],
  },
  "Niemcy": {
    woman: [
      "Sukienka dirndl lub minimalistyczny look w czerni",
      "Czarna marynarka, biała koszula, ciemne jeansy, brogsy",
      "Beżowy trencz, golf, proste spodnie, kozaki",
      "Sportowa sukienka, sneakersy, plecak",
    ],
    man: [
      "Koszula w kratę, ciemne jeansy, skórzane buty (lub bawarskie lederhosen)",
      "Czarny T-shirt, jeansy, sneakersy",
      "Granatowa marynarka, biała koszula, chinosy, brogsy",
      "Sweter, koszula, ciemne spodnie, skórzane buty",
    ],
  },
  "Polska": {
    woman: [
      "Sukienka w kwiaty lub elegancka czerń, korale",
      "Biała bluzka z koronką, czerwona spódnica, kozaki",
      "Granatowa sukienka midi, perły, szpilki",
      "Sweter z motywami folkowymi, jeansy, trapery",
    ],
    man: [
      "Biała koszula, spodnie w kant, marynarka",
      "Granatowy sweter, koszula, ciemne jeansy, brogsy",
      "Czarna marynarka, biała koszula, krawat, eleganckie spodnie",
      "Lniana koszula, beżowe chinosy, mokasyny",
    ],
  },
  "Chiny": {
    woman: [
      "Sukienka qipao lub jedwabna bluzka w czerwieni",
      "Czerwona sukienka midi, złote kolczyki, szpilki",
      "Jedwabna bluzka, czarne spodnie, baleriny",
      "Czarna sukienka z czerwonymi akcentami, kok",
    ],
    man: [
      "Czarna koszula z mandarynkowym kołnierzem, proste spodnie",
      "Granatowy sweter, biała koszula, ciemne spodnie, mokasyny",
      "Czerwona koszula, czarne spodnie, eleganckie buty",
      "Lniana tunika, ciemne spodnie, sandały",
    ],
  },
  "Argentyna": {
    woman: [
      "Czerwona sukienka do tanga, szpilki, kok",
      "Czarna dopasowana sukienka z rozcięciem, szpilki",
      "Biała bluzka, czarna spódnica ołówkowa, szpilki",
      "Sukienka midi w kolorze burgund, czerwona szminka",
    ],
    man: [
      "Czarna koszula, czarne spodnie, marynarka, skórzane buty",
      "Biała koszula, czarna kamizelka, ciemne spodnie",
      "Granatowy garnitur, biała koszula, krawat",
      "Czarny golf, marynarka, ciemne jeansy, brogsy",
    ],
  },
  "Maroko": {
    woman: [
      "Kaftan z haftem, sandały, biżuteria z berberskimi motywami",
      "Długa kwiecista sukienka, złota biżuteria, sandały",
      "Lniane szerokie spodnie, kolorowy top, sandały",
      "Biała tunika z haftem, jeansy, sandały",
    ],
    man: [
      "Lniana koszula, chinosy w piasku, mokasyny",
      "Biała tunika, beżowe spodnie, sandały",
      "Granatowy sweter, biała koszula, chinosy, mokasyny",
      "Lekki kaftan, lniane spodnie, sandały",
    ],
  },
  "Egipt": {
    woman: [
      "Lniana sukienka kolumnowa, złote kolczyki, eyeliner à la Kleopatra",
      "Biała sukienka maxi, złota biżuteria, sandały",
      "Czarna sukienka, mocny eyeliner, złote bransolety",
      "Lniane spodnie, top, złote kolczyki, sandały",
    ],
    man: [
      "Biała lniana koszula, beżowe spodnie, sandały",
      "Lniana tunika, ciemne spodnie, sandały",
      "Polo w bieli, beżowe chinosy, mokasyny",
      "Lniana koszula z krótkim rękawem, szorty, sandały",
    ],
  },
  "RPA": {
    woman: [
      "Sukienka z motywem afrykańskim, kolorowe korale",
      "Kolorowa tunika, jeansy, sandały, etniczna biżuteria",
      "Biała sukienka, kolorowy szal, sandały",
      "Spódnica maxi w printy, top, sandały",
    ],
    man: [
      "Lniana koszula, chinosy, mokasyny",
      "Kolorowa koszula w printy, jeansy, sandały",
      "Biały T-shirt, beżowe szorty, sneakersy",
      "Granatowa koszula, jeansy, brogsy",
    ],
  },
  "Australia": {
    woman: [
      "Sundress, klapki, naturalny makijaż",
      "Biały top, jeansowe szorty, klapki, kapelusz",
      "Kwiecista sukienka maxi, sandały, słomkowy kapelusz",
      "Top crop, lniane spodnie, klapki",
    ],
    man: [
      "T-shirt, krótkie spodenki, klapki – luz i plaża",
      "Lniana koszula, szorty, klapki, czapka z daszkiem",
      "Polo, jeansy, sneakersy",
      "Biały T-shirt, beżowe chinosy, klapki",
    ],
  },
  "Rosja": {
    woman: [
      "Sukienka z koronką, ciężki płaszcz, futrzana czapka",
      "Czerwona sukienka midi, czarne kozaki, futrzana czapka",
      "Długi płaszcz, golf, wełniana spódnica, kozaki",
      "Czarna sukienka, perły, futrzana stola, szpilki",
    ],
    man: [
      "Czarny golf, ciemne spodnie, długi płaszcz",
      "Wełniany sweter, koszula, ciemne jeansy, trapery",
      "Granatowy garnitur, biała koszula, krawat",
      "Skórzana kurtka, czarny T-shirt, ciemne jeansy, glany",
    ],
  },
  "Turcja": {
    woman: [
      "Sukienka z bogatymi wzorami, złota biżuteria, eyeliner",
      "Czarna sukienka, mocny eyeliner, złote kolczyki",
      "Kolorowy kaftan, lniane spodnie, sandały",
      "Czerwona bluzka, czarna spódnica, złota biżuteria",
    ],
    man: [
      "Ciemna koszula, marynarka, eleganckie spodnie",
      "Biała koszula, granatowy sweter, jeansy, mokasyny",
      "Czarny T-shirt, marynarka, ciemne spodnie, brogsy",
      "Lniana koszula, beżowe chinosy, mokasyny",
    ],
  },
  "Wietnam": {
    woman: [
      "Áo dài lub jedwabna sukienka, słomkowy kapelusz",
      "Lekka biała sukienka, sandały, słomkowy kapelusz",
      "Kolorowa bluzka jedwabna, lniane spodnie, sandały",
      "Top z jedwabiu, długa spódnica, sandały",
    ],
    man: [
      "Lniana koszula, beżowe spodnie, sandały",
      "Biały T-shirt, lniane spodnie, klapki",
      "Polo, chinosy, mokasyny",
      "Lniana tunika, ciemne spodnie, sandały",
    ],
  },
  "Indonezja": {
    woman: [
      "Sukienka z batikowym wzorem, kwiat we włosach",
      "Kolorowa sarong sukienka, klapki, kwiat we włosach",
      "Lniana sukienka, sandały, naturalna biżuteria",
      "Top z batiku, lniane spodnie, sandały",
    ],
    man: [
      "Koszula batikowa, lniane spodnie, klapki",
      "Biały T-shirt, beżowe szorty, klapki",
      "Lniana koszula, chinosy, sandały",
      "Polo, jeansy, sneakersy",
    ],
  },
  "Kuba": {
    woman: [
      "Czerwona sukienka do salsy, szpilki, kolczyki kreole",
      "Kwiecista sukienka, sandały, kwiat we włosach",
      "Biała sukienka midi, kolorowe sandały, czerwona szminka",
      "Żółta spódnica, biała bluzka, sandały",
    ],
    man: [
      "Biała lniana koszula, lniane spodnie, kapelusz panama",
      "Kolorowa koszula guayabera, jeansy, mokasyny",
      "Polo, beżowe chinosy, mokasyny",
      "Biały T-shirt, lniane spodnie, sandały",
    ],
  },
  "Holandia": {
    woman: [
      "Pomarańczowy akcent, jeansy, sweter, trampki",
      "Biała koszula, jeansy mom-fit, trampki, kolorowy szal",
      "Sukienka midi, kozaki, beżowy płaszcz",
      "Sportowy look – bluza, jeansy, sneakersy",
    ],
    man: [
      "Sweter, jeansy, sneakersy, pomarańczowy szalik",
      "Biały T-shirt, jeansy, sneakersy",
      "Bluza, jeansy, sneakersy, czapka beanie",
      "Koszula, beżowe chinosy, mokasyny",
    ],
  },
  "Szwecja": {
    woman: [
      "Biała bluzka, jeansy, beżowy płaszcz – minimalizm",
      "Beżowy sweter, czarne spodnie, białe sneakersy",
      "Szary płaszcz, golf, jeansy, kozaki",
      "Sukienka midi w stonowanym kolorze, biała koszula, brogsy",
    ],
    man: [
      "Beżowy sweter, ciemne jeansy, biała koszula, sneakersy",
      "Biały T-shirt, czarne spodnie, sneakersy",
      "Szary płaszcz, golf, jeansy, brogsy",
      "Marynarka, biała koszula, chinosy, mokasyny",
    ],
  },
  "Norwegia": {
    woman: [
      "Wełniany sweter z norweskim wzorem, jeansy, kozaki",
      "Gruby beżowy sweter, leginsy, śniegowce",
      "Wełniana sukienka, rajstopy, trapery",
      "Flanelowa koszula, jeansy, trapery, czapka beanie",
    ],
    man: [
      "Sweter z norweskim wzorem, ciemne jeansy, trapery",
      "Flanelowa koszula, jeansy, trapery, czapka beanie",
      "Gruby sweter, dżinsy, śniegowce",
      "Wełniana koszula, ciemne spodnie, trapery",
    ],
  },
  "Irlandia": {
    woman: [
      "Zielony sweter, kraciasta spódnica, kozaki",
      "Gruby wełniany sweter, jeansy, trapery",
      "Trencz, golf, jeansy, brogsy",
      "Sukienka w kratę, kozaki, beret",
    ],
    man: [
      "Wełniany sweter rybacki, ciemne jeansy, skórzane buty",
      "Tweedowa marynarka, koszula, jeansy, brogsy",
      "Granatowy sweter, biała koszula, chinosy, mokasyny",
      "Flanelowa koszula, jeansy, trapery",
    ],
  },
  "Portugalia": {
    woman: [
      "Czarna sukienka inspirowana fado, czerwona szminka, chusta",
      "Biała bluzka, czarna spódnica midi, sandały",
      "Granatowa sukienka w paski (w stylu marynarskim), espadryle",
      "Kwiecista sukienka, sandały, słomkowy kapelusz",
    ],
    man: [
      "Czarna koszula, ciemne spodnie, kamizelka",
      "Biała koszula, beżowe chinosy, mokasyny",
      "Granatowy sweter w paski, jeansy, espadryle",
      "Polo, lniane spodnie, sandały",
    ],
  },
  "Szwajcaria": {
    woman: [
      "Beżowy sweter z golfem, wełniana spódnica, kozaki",
      "Granatowy płaszcz, biała koszula, jeansy, brogsy",
      "Wełniana sukienka, rajstopy, kozaki",
      "Sportowy puchowy płaszcz, jeansy, śniegowce",
    ],
    man: [
      "Wełniana marynarka, koszula, ciemne spodnie",
      "Granatowy sweter, biała koszula, jeansy, brogsy",
      "Gruby sweter, dżinsy, trapery",
      "Garnitur w odcieniu antracytu, biała koszula, krawat",
    ],
  },
  "Austria": {
    woman: [
      "Sukienka inspirowana wiedeńskim balem lub dirndl",
      "Elegancka długa suknia, włosy upięte, perły",
      "Mała czarna, szpilki, długie rękawiczki",
      "Wełniana sukienka, kozaki, beret",
    ],
    man: [
      "Garnitur w klasyczne wcięcie, biała koszula, muszka",
      "Granatowy garnitur, biała koszula, krawat, brogsy",
      "Wełniana marynarka, koszula, ciemne spodnie, mokasyny",
      "Sweter z dekoltem V, koszula, ciemne jeansy, brogsy",
    ],
  },
  "Belgia": {
    woman: [
      "Trencz, koszula, ciemne spodnie, kozaki",
      "Granatowy płaszcz, biała koszula, jeansy, brogsy",
      "Sukienka midi w stonowanym kolorze, kozaki",
      "Beżowy sweter, plisowana spódnica, kozaki",
    ],
    man: [
      "Marynarka, koszula, jeansy – elegancki casual",
      "Trencz, golf, ciemne spodnie, brogsy",
      "Sweter, biała koszula, chinosy, mokasyny",
      "Granatowy garnitur, biała koszula, krawat",
    ],
  },
  "Czechy": {
    woman: [
      "Bluzka z koronką, spódnica midi, kozaki",
      "Sukienka folkowa z haftem, kozaki, korale",
      "Granatowa sukienka midi, perły, szpilki",
      "Sweter, jeansy, trapery, beret",
    ],
    man: [
      "Wełniany sweter, ciemne spodnie, skórzane buty",
      "Biała koszula, kamizelka, ciemne spodnie",
      "Granatowa marynarka, biała koszula, jeansy, brogsy",
      "Flanelowa koszula, jeansy, trapery",
    ],
  },
  "Węgry": {
    woman: [
      "Haftowana biała bluzka, czerwona spódnica, kozaki",
      "Czerwona sukienka z haftem, czarne kozaki, korale",
      "Granatowa sukienka midi, czerwone dodatki, szpilki",
      "Wełniana sukienka, kozaki, futrzana czapka",
    ],
    man: [
      "Biała koszula z haftem, ciemne spodnie, kamizelka",
      "Granatowy garnitur, biała koszula, krawat",
      "Sweter, biała koszula, ciemne jeansy, brogsy",
      "Czarna marynarka, biała koszula, ciemne spodnie",
    ],
  },
  "Izrael": {
    woman: [
      "Biała lniana sukienka, sandały, naturalny look",
      "Lekka sukienka maxi, klapki, słomkowy kapelusz",
      "Biały top, lniane spodnie, sandały",
      "Kwiecista sukienka, sandały, naturalna biżuteria",
    ],
    man: [
      "Biała lniana koszula, chinosy, sandały",
      "Biały T-shirt, lniane spodnie, sandały",
      "Polo, beżowe szorty, klapki",
      "Lniana koszula, jeansy, mokasyny",
    ],
  },
  "Iran": {
    woman: [
      "Długa sukienka z perskim wzorem, chusta na włosy",
      "Lniana tunika z haftem, szerokie spodnie, chusta",
      "Długa kwiecista sukienka, sandały, chusta",
      "Czarna sukienka maxi, złota biżuteria, chusta",
    ],
    man: [
      "Lniana koszula, marynarka, ciemne spodnie",
      "Biała koszula, beżowe chinosy, mokasyny",
      "Granatowa koszula, ciemne spodnie, brogsy",
      "Sweter z dekoltem V, koszula, ciemne spodnie",
    ],
  },
  "Kanada": {
    woman: [
      "Flanelowa koszula, jeansy, trapery, kraciany szal",
      "Wełniany sweter, leginsy, śniegowce",
      "Puchowa kurtka, jeansy, trapery, czapka beanie",
      "Sweter z dużym kołnierzem, jeansy, kozaki",
    ],
    man: [
      "Flanelowa koszula, jeansy, trapery, czapka beanie",
      "Puchowa kurtka, jeansy, śniegowce",
      "Wełniany sweter, ciemne jeansy, trapery",
      "Sweter z norweskim wzorem, dżinsy, trapery",
    ],
  },
  "Nowa Zelandia": {
    woman: [
      "Wełniany sweter, jeansy, trapery – outdoorowy chic",
      "Flanelowa koszula, jeansy, trapery",
      "Sundress, sneakersy, kapelusz",
      "Sweter, leginsy, śniegowce",
    ],
    man: [
      "Wełniana koszula, ciemne jeansy, trapery",
      "Flanelowa koszula, jeansy, trapery, czapka beanie",
      "Polo, krótkie spodenki, sneakersy",
      "Sweter, dżinsy, trapery",
    ],
  },
  "Etiopia": {
    woman: [
      "Biała sukienka habesha kemis z kolorowym haftem",
      "Lekka biała tunika z haftem, sandały, korale",
      "Kolorowa spódnica maxi, biały top, sandały",
      "Biała sukienka maxi, złota biżuteria, sandały",
    ],
    man: [
      "Lniana koszula, beżowe spodnie, sandały",
      "Biała tunika z haftem, lniane spodnie, sandały",
      "Polo, chinosy, mokasyny",
      "Biały T-shirt, lniane spodnie, sandały",
    ],
  },
  "Nigeria": {
    woman: [
      "Kolorowy strój ankara, gele na głowę",
      "Sukienka w kolorowe printy, złota biżuteria, sandały",
      "Kolorowa spódnica maxi, biały top, korale",
      "Żółta sukienka, gele, sandały",
    ],
    man: [
      "Agbada lub kolorowa koszula z ankary, ciemne spodnie",
      "Biała koszula, beżowe chinosy, mokasyny",
      "Kolorowa koszula w printy, jeansy, sandały",
      "Polo, ciemne spodnie, brogsy",
    ],
  },
  "Kenia": {
    woman: [
      "Sukienka z kitenge w żywych kolorach, korale Masajów",
      "Kolorowa spódnica maxi, biały top, sandały",
      "Lniana sukienka, korale, sandały",
      "Czerwona sukienka, korale Masajów, sandały",
    ],
    man: [
      "Lniana koszula, beżowe spodnie, skórzane sandały",
      "Polo, chinosy, mokasyny",
      "Kolorowa koszula, jeansy, sandały",
      "Biały T-shirt, beżowe szorty, sandały",
    ],
  },
  "Peru": {
    woman: [
      "Spódnica z andyjskim wzorem, sweter z alpaki",
      "Kolorowe poncho, jeansy, kozaki, czapka chullo",
      "Sweter z alpaki, leginsy, trapery",
      "Wełniana sukienka, kozaki, kolorowy szal",
    ],
    man: [
      "Sweter z alpaki, ciemne spodnie, czapka chullo",
      "Poncho, jeansy, trapery, czapka chullo",
      "Wełniana koszula, ciemne jeansy, trapery",
      "Sweter, dżinsy, mokasyny",
    ],
  },
  "Kolumbia": {
    woman: [
      "Kolorowa sukienka, kwiat we włosach, kolczyki",
      "Czerwona sukienka do salsy, szpilki, duże kolczyki",
      "Kwiecista spódnica maxi, top, sandały",
      "Biała sukienka, kolorowe sandały, kwiat we włosach",
    ],
    man: [
      "Biała lniana koszula, jeansy, kapelusz vueltiao",
      "Kolorowa koszula, beżowe chinosy, mokasyny",
      "Polo, jeansy, sneakersy",
      "Biały T-shirt, lniane spodnie, sandały",
    ],
  },
  "Chile": {
    woman: [
      "Sukienka w kolorach ziemi, poncho na chłodne wieczory",
      "Wełniany sweter, jeansy, kozaki, poncho",
      "Lniana sukienka, sandały, naturalna biżuteria",
      "Beżowy sweter, dżinsy, trapery",
    ],
    man: [
      "Sweter, ciemne jeansy, skórzane buty",
      "Wełniana koszula, jeansy, trapery",
      "Polo, chinosy, mokasyny",
      "Granatowy sweter, biała koszula, jeansy, brogsy",
    ],
  },
  "Filipiny": {
    woman: [
      "Sukienka z bufkami inspirowana Maria Clara",
      "Biała koronkowa sukienka, sandały, kwiat we włosach",
      "Kolorowa sukienka maxi, klapki, słomkowy kapelusz",
      "Top z haftem, lniane spodnie, sandały",
    ],
    man: [
      "Koszula barong tagalog, ciemne spodnie",
      "Biała koszula, beżowe chinosy, mokasyny",
      "Polo, jeansy, sneakersy",
      "Lniana koszula, krótkie spodenki, klapki",
    ],
  },
  "Pakistan": {
    woman: [
      "Shalwar kameez w głębokich kolorach, dupatta",
      "Długa tunika z haftem, szerokie spodnie, sandały",
      "Kolorowa sukienka maxi, dupatta, złota biżuteria",
      "Czarna tunika z haftem, dupatta, sandały",
    ],
    man: [
      "Kurta z lnu, spodnie shalwar, kamizelka",
      "Biała kurta, ciemne spodnie, mokasyny",
      "Lniana koszula, beżowe chinosy, sandały",
      "Granatowy sweter, biała koszula, ciemne spodnie",
    ],
  },
  "Ukraina": {
    woman: [
      "Wyszywanka, czerwona spódnica, korale, wianek",
      "Biała bluzka z haftem, jeansy, kozaki",
      "Sukienka folkowa, kozaki, wianek",
      "Granatowa sukienka, korale, szpilki",
    ],
    man: [
      "Biała koszula wyszywanka, ciemne spodnie, pas",
      "Lniana koszula z haftem, jeansy, brogsy",
      "Granatowy sweter, biała koszula, chinosy, mokasyny",
      "Marynarka, biała koszula, ciemne spodnie",
    ],
  },
  "Islandia": {
    woman: [
      "Wełniany sweter lopapeysa, jeansy, kozaki",
      "Gruby sweter, leginsy, śniegowce",
      "Wełniana sukienka, rajstopy, trapery",
      "Puchowa kurtka, jeansy, trapery, czapka beanie",
    ],
    man: [
      "Sweter lopapeysa, ciemne jeansy, trapery",
      "Flanelowa koszula, jeansy, trapery, czapka beanie",
      "Puchowa kurtka, dżinsy, śniegowce",
      "Wełniana koszula, ciemne spodnie, trapery",
    ],
  },
  "Jamajka": {
    woman: [
      "Szydełkowy top, jeansowe szorty, klapki",
      "Luźna sukienka maxi w tropikalne wzory, sandały",
      "Top w kolorach zielony-żółty-czerwony, lniane spodnie, japonki",
      "Bikini pod siatkową narzutką, jeansowe szorty, plażowe espadryle",
    ],
    man: [
      "Luźna koszula w palmy, jeansowe szorty, klapki",
      "T-shirt z Bobem Marleyem, lniane spodnie, sneakersy",
      "Rozpięta hawajka, biały podkoszulek, szorty, klapki",
      "Czapka beanie w kolorach rasta, luźny T-shirt, joggery, sneakersy",
    ],
  },
  "Malezja": {
    woman: [
      "Baju kurung w kwiatowe wzory, hidżab w pasującym kolorze",
      "Lekka sukienka maxi w batikowe wzory, sandały",
      "Lniana tunika, szerokie spodnie, sandały",
      "Jedwabna bluzka, plisowana spódnica midi, baleriny",
    ],
    man: [
      "Batikowa koszula z krótkim rękawem, ciemne spodnie",
      "Lniana koszula, beżowe chinosy, mokasyny",
      "Biały T-shirt, lekkie spodnie cargo, sneakersy",
      "Polo, jeansy, sandały skórzane",
    ],
  },
  "Singapur": {
    woman: [
      "Elegancka koszulowa sukienka, sandały na obcasie",
      "Cheongsam-inspired top, czarne spodnie, szpilki",
      "Lekka bluzka, ołówkowa spódnica, mokasyny (klimat biurowy)",
      "Sukienka mini w pastelach, sandały na platformie",
    ],
    man: [
      "Biała koszula, granatowe chinosy, brogsy",
      "Lekka marynarka, T-shirt, jeansy, sneakersy",
      "Polo, beżowe spodnie, mokasyny",
      "Krótki rękaw w drobny wzór, jeansy, sandały skórzane",
    ],
  },
  "Nepal": {
    woman: [
      "Kurta z lekkich tkanin, szerokie spodnie, sandały",
      "Sari w pastelowych kolorach z prostymi sandałami",
      "Lekka tunika, jeansy, trapery turystyczne",
      "Sweter wełniany ręcznie robiony, jeansy, kozaki",
    ],
    man: [
      "Daura suruwal (tradycyjny strój) – wersja codzienna",
      "Lniana koszula, beżowe spodnie, sandały",
      "Wełniany sweter himalajski, jeansy, trapery",
      "T-shirt z motywem Everestu, spodnie trekkingowe, buty trekkingowe",
    ],
  },
  "Mongolia": {
    woman: [
      "Deel (mongolski płaszcz) w jaskrawym kolorze, pas, kozaki",
      "Wełniany sweter, dżinsy, kozaki za kolano",
      "Długa wełniana spódnica, sweter, trapery",
      "Puchowa kurtka, ciepłe legginsy, futrzana czapka",
    ],
    man: [
      "Deel męski, pas, wysokie skórzane buty",
      "Wełniany sweter, ciemne dżinsy, trapery",
      "Skórzana kurtka, jeansy, kozaki",
      "Puchowa kurtka, ciepłe spodnie, futrzana czapka",
    ],
  },
  "Sri Lanka": {
    woman: [
      "Sari cejlońskie z bluzką dopasowaną kolorystycznie, sandały",
      "Lekka bawełniana sukienka maxi, klapki",
      "Lniana tunika, szerokie spodnie, sandały",
      "Kwiecista bluzka, długa spódnica, sandały plażowe",
    ],
    man: [
      "Sarong z koszulą, sandały",
      "Lniana koszula, lekkie spodnie, sandały",
      "T-shirt z motywem słonia, krótkie spodenki, klapki",
      "Polo, chinosy, mokasyny",
    ],
  },
  "Kazachstan": {
    woman: [
      "Sukienka z elementami tradycyjnych wzorów, kozaki",
      "Wełniany sweter, dżinsy, kozaki",
      "Długa spódnica, golf, kozaki za kolano",
      "Puchowa kurtka, ciepłe legginsy, futrzana czapka",
    ],
    man: [
      "Chapan (tradycyjny płaszcz) na specjalne okazje",
      "Wełniany sweter, dżinsy, trapery",
      "Skórzana kurtka, jeansy, kozaki",
      "Puchowa kurtka, ciepłe spodnie, futrzana czapka uszanka",
    ],
  },
  "Uzbekistan": {
    woman: [
      "Khan-atlas (jedwabna sukienka w pasiaste tęczowe wzory)",
      "Lekka tunika z haftami, szerokie spodnie, baleriny",
      "Długa kolorowa sukienka, chusta na głowę, sandały",
      "Bluzka z elementami suzani, jeansy, mokasyny",
    ],
    man: [
      "Chapan (haftowany płaszcz), tradycyjna czapka tubeteika",
      "Lniana koszula, beżowe spodnie, sandały",
      "Polo, chinosy, mokasyny",
      "Koszula z haftami, jeansy, skórzane buty",
    ],
  },
  "Tanzania": {
    woman: [
      "Kanga lub kitenge owinięte jako sukienka, sandały",
      "Kolorowa sukienka maxi w afrykańskie wzory, klapki",
      "Lekka tunika, szerokie spodnie, sandały",
      "Bluzka z elementami kente, jeansy, sneakersy",
    ],
    man: [
      "Koszula w afrykańskie wzory, beżowe spodnie, sandały",
      "Kanzu (biała długa koszula) na specjalne okazje",
      "T-shirt safari, spodnie cargo, trapery",
      "Polo, chinosy, mokasyny",
    ],
  },
  "Ghana": {
    woman: [
      "Sukienka z kente w żółto-czarno-zielone wzory",
      "Kolorowa tunika, szerokie spodnie, sandały",
      "Bluzka w afrykańskie nadruki, ołówkowa spódnica, szpilki",
      "Długa sukienka z elementami Adinkra, klapki",
    ],
    man: [
      "Koszula w kente lub Adinkra, ciemne spodnie",
      "Biała lniana koszula, beżowe spodnie, mokasyny",
      "Polo, chinosy, sandały skórzane",
      "T-shirt z motywem Ghany, jeansy, sneakersy",
    ],
  },
  "Senegal": {
    woman: [
      "Boubou w jaskrawych kolorach, turban dopasowany kolorem",
      "Sukienka z wax printu, sandały na koturnie",
      "Długa kolorowa spódnica, dopasowany top, klapki",
      "Bluzka z afrykańskich tkanin, jeansy, baleriny",
    ],
    man: [
      "Boubou męski w eleganckim kolorze, sandały skórzane",
      "Lniana koszula, beżowe spodnie, mokasyny",
      "Polo w afrykańskich kolorach, chinosy, sneakersy",
      "T-shirt, lekkie spodnie cargo, sandały",
    ],
  },
  "Algieria": {
    woman: [
      "Kaftan algierski z haftami, baleriny",
      "Lekka tunika, szerokie spodnie, sandały",
      "Długa sukienka maxi w przygaszonych kolorach, hidżab opcjonalnie",
      "Bluzka z haftem, dżinsy, mokasyny",
    ],
    man: [
      "Gandura (tradycyjna szata), sandały",
      "Lniana koszula, beżowe spodnie, mokasyny",
      "Polo, jeansy, sneakersy",
      "Marynarka, biała koszula, chinosy, brogsy",
    ],
  },
  "Tunezja": {
    woman: [
      "Jebba tunezyjska w bieli i niebieskim",
      "Lekka maxi sukienka w odcieniach Sidi Bou Said (biel + indygo)",
      "Lniana tunika, szerokie spodnie, sandały",
      "Bluzka z haftem, dżinsy, baleriny",
    ],
    man: [
      "Jebba męska (długa lniana szata), sandały",
      "Biała lniana koszula, beżowe spodnie, mokasyny",
      "Polo, jeansy, sneakersy",
      "Lekka marynarka, T-shirt, chinosy, brogsy",
    ],
  },
  "Boliwia": {
    woman: [
      "Pollera (boliwijska szeroka spódnica), bluzka, melonik",
      "Wełniany sweter alpakowy, jeansy, trapery",
      "Długa spódnica, ponczo z alpaki, kozaki",
      "Sukienka midi, sweter z alpaki, trapery",
    ],
    man: [
      "Ponczo z alpaki, czapka chullo, jeansy, trapery",
      "Wełniany sweter, dżinsy, trapery turystyczne",
      "Lniana koszula, beżowe spodnie, sandały",
      "T-shirt z motywem lamy, jeansy, sneakersy",
    ],
  },
  "Urugwaj": {
    woman: [
      "Lekka sukienka midi, sandały, mate w torbie",
      "Casualowy lniany komplet, espadryle",
      "Jeansy z wysokim stanem, biała koszula, mokasyny",
      "Długa spódnica, dopasowany top, sandały na obcasie",
    ],
    man: [
      "Bombachas (szerokie spodnie gaucho), biała koszula, kapelusz",
      "Polo, jeansy, mokasyny",
      "Lniana koszula, beżowe chinosy, espadryle",
      "T-shirt, lekka marynarka, jeansy, sneakersy",
    ],
  },
  "Ekwador": {
    woman: [
      "Tradycyjna bluzka z haftami otavalo, długa czarna spódnica",
      "Sweter z alpaki, jeansy, trapery",
      "Lniana tunika, szerokie spodnie, sandały",
      "Kwiecista sukienka, sandały, kapelusz panamski",
    ],
    man: [
      "Biała koszula, kapelusz panamski, ciemne spodnie, mokasyny",
      "Ponczo z alpaki, jeansy, trapery",
      "Lniana koszula, beżowe chinosy, sandały",
      "Polo, jeansy, sneakersy",
    ],
  },
  "Jordania": {
    woman: [
      "Długa abaya w eleganckim kolorze, hidżab dopasowany",
      "Lekka maxi sukienka z długim rękawem, sandały",
      "Lniana tunika, szerokie spodnie, mokasyny",
      "Kaftan z haftami, baleriny",
    ],
    man: [
      "Thobe (długa biała szata), keffiyeh czerwono-białe",
      "Lniana koszula, beżowe spodnie, mokasyny",
      "Polo, chinosy, sandały skórzane",
      "Biała koszula, ciemne spodnie, brogsy",
    ],
  },
  "Liban": {
    woman: [
      "Elegancka mini sukienka, szpilki, biżuteria złota (Bejrut chic)",
      "Lniana sukienka maxi, sandały na koturnie",
      "Bluzka jedwabna, ołówkowa spódnica, szpilki",
      "Jeansy z wysokim stanem, dopasowany top, sandały na obcasie",
    ],
    man: [
      "Lniana koszula rozpięta, białe spodnie, mokasyny",
      "Marynarka, biała koszula, jeansy, brogsy",
      "Polo, chinosy, sneakersy premium",
      "Lekka koszula z krótkim rękawem, szorty, sandały skórzane",
    ],
  },
  "Fidżi": {
    woman: [
      "Bula dress – sukienka w kwiatowe tropikalne wzory",
      "Pareo (sarong) jako sukienka, klapki",
      "Bikini pod tunikę z kwiatów, klapki plażowe",
      "Sulu (spódnica owinięta), bluzka, sandały",
    ],
    man: [
      "Bula shirt – koszula w tropikalne wzory, sulu (sarong)",
      "T-shirt, krótkie spodenki, klapki",
      "Lniana koszula, lekkie spodnie, sandały",
      "Sulu vakataga (męski sarong) z koszulą, sandały",
    ],
  },
  "Samoa": {
    woman: [
      "Puletasi (tradycyjny dwuczęściowy strój) w kwiatowe wzory",
      "Lavalava (sarong) jako sukienka, kwiat we włosach",
      "Sukienka maxi w hibiskusy, klapki",
      "Top, lavalava na biodrach, sandały plażowe",
    ],
    man: [
      "Ie faitaga (formalny sarong męski) z białą koszulą",
      "Koszula w kwiatowe wzory, lavalava (sarong), sandały",
      "T-shirt z motywem polinezyjskim, krótkie spodenki, klapki",
      "Lniana koszula, lavalava, sandały skórzane",
    ],
  },
  "Kostaryka": {
    woman: [
      "Lekka sukienka maxi w tropikalne kwiaty, klapki",
      "Top na ramiączkach, krótkie spodenki, sandały, słomkowy kapelusz",
      "Strój kąpielowy pod luźną sukienką, japonki",
      "Lniana sukienka koszulowa, espadryle, plecak",
    ],
    man: [
      "Koszula w palmy, jasne spodenki, klapki",
      "Biały T-shirt, beżowe szorty, sandały trekkingowe",
      "Lniana koszula rozpięta, szorty kąpielowe, panama",
      "Polo, jeansowe szorty, sneakersy płócienne",
    ],
  },
  "Watykan": {
    woman: [
      "Skromna sukienka midi z rękawkiem, zakryte ramiona, balerinki",
      "Czarna spódnica do kolan, biała bluzka, chusta na głowę",
      "Granatowy żakiet, plisowana spódnica, mokasyny",
      "Długie spodnie, koszula z długim rękawem, elegancki szal",
    ],
    man: [
      "Ciemny garnitur, biała koszula, krawat, eleganckie półbuty",
      "Granatowa marynarka, szare spodnie, koszula, mokasyny",
      "Czarna koszula z koloratką (jeśli ksiądz) lub biała koszula i spodnie chinos",
      "Sweter w serek na koszuli, eleganckie spodnie, brogsy",
    ],
  },
  "USA – Nowy Jork": {
    woman: [
      "Czarny golf, czarne jeansy, długi wełniany płaszcz, kozaki na obcasie",
      "Sportowa bluza oversize, legginsy, sneakersy, kawa w ręce",
      "Mała czarna, szpilki, mały klatch – wieczór na Manhattanie",
      "Trencz, jeansy mom, biały t-shirt, torebka crossbody",
    ],
    man: [
      "Czarny płaszcz wełniany, czarny golf, ciemne jeansy, derby",
      "Hoodie, jeansy, sneakersy Nike, czapka Yankees",
      "Granatowy garnitur, biała koszula bez krawata – Wall Street casual",
      "Skórzana kurtka, t-shirt, jeansy, glany – East Village vibe",
    ],
  },
  "USA – Luizjana": {
    woman: [
      "Sukienka w kwiaty, kowbojki, słomkowy kapelusz",
      "Biała sukienka maxi z koronką, sandały – plantation chic",
      "Jeansowe szorty, kraciasta koszula wiązana w pasie, kowbojki",
      "Sukienka koktajlowa w pastelach, perły, eleganckie szpilki – Derby Day",
    ],
    man: [
      "Kraciasta koszula, jeansy, kowbojki, kapelusz stetson",
      "Lniany jasny garnitur, biała koszula, krawat – southern gentleman",
      "Koszulka polo, krótkie spodenki khaki, mokasyny bez skarpetek",
      "Dżinsowa kurtka, t-shirt, jeansy, buty robocze",
    ],
  },
  "USA – Środkowy Zachód": {
    woman: [
      "Bluza college, jeansy, sneakersy, kucyk",
      "Flanelowa koszula, jeansy boyfriend, traperki – jesienny look",
      "Sweter z norweskim wzorem, leginsy, śniegowce",
      "Koszulka drużyny Packers/Bears, jeansy, czapka z daszkiem",
    ],
    man: [
      "Bluza z kapturem drużyny NFL, jeansy, sneakersy",
      "Flanelowa koszula, t-shirt, jeansy, traperki",
      "Kurtka puchowa Carhartt, jeansy, czapka beanie",
      "Polo, chinosy, mokasyny – casual Friday w biurze",
    ],
  },
  "USA – Teksas": {
    woman: [
      "Sukienka boho z frędzlami, kowbojki, kapelusz",
      "Dżinsowe szorty, biała koszula wiązana, kowbojki, pasek z dużą klamrą",
      "Sukienka prairie midi, kowbojki, turkusowa biżuteria",
      "Skórzane spodnie, koszula w kratę, kowbojki na obcasie",
    ],
    man: [
      "Koszula western z perłowymi guzikami, jeansy, kowbojki, kapelusz stetson",
      "Biały t-shirt, jeansy Wrangler, pasek z dużą klamrą, kowbojki",
      "Kurtka jeansowa, kraciasta koszula, jeansy, buty robocze",
      "Garnitur western (bolo tie zamiast krawata), kowbojki",
    ],
  },
  "USA – Kalifornia": {
    woman: [
      "Sukienka maxi w kwiaty, sandały, słomkowy kapelusz – Coachella vibe",
      "Biały top na ramiączkach, jeansowe szorty, trampki Vans",
      "Strój kąpielowy + kimono narzutka, japonki, okulary oversize",
      "Sportowy zestaw athleisure, legginsy, sneakersy, mata do jogi",
    ],
    man: [
      "Koszulka surferska, szorty kąpielowe, klapki",
      "Biały t-shirt, jeansy, sneakersy Vans, czapka snapback",
      "Lniana koszula rozpięta, szorty, espadryle – Santa Monica chic",
      "Hoodie tech-bro, jeansy slim, sneakersy Allbirds",
    ],
  },
};
