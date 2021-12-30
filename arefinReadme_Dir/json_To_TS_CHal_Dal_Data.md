



## chalDal json typeScript file:

```json

declare module namespace {

    export interface Profile {
        pictureUrl: string;
        name: string;
    }

    export interface DateToDayId {
        2016-07-14: number;
        2016-08-26: number;
        2016-09-07: number;
        2016-08-15: number;
        2016-07-25: number;
        2016-08-28: number;
        2016-08-06: number;
        2016-09-04: number;
        2016-07-28: number;
        2016-07-19: number;
        2016-07-04: number;
        2016-07-11: number;
        2016-07-05: number;
        2016-08-30: number;
        2016-09-05: number;
        2016-07-27: number;
        2016-07-22: number;
        2016-08-08: number;
        2016-07-30: number;
        2016-09-06: number;
        2016-07-12: number;
        2016-08-27: number;
        2016-09-17: number;
        2016-08-16: number;
        2016-07-08: number;
        2016-08-29: number;
        2016-07-31: number;
        2016-07-24: number;
        2016-07-29: number;
        2016-08-02: number;
        2016-09-03: number;
        2016-09-08: number;
        2016-07-07: number;
    }

    export interface DishIdToMealId {
        1228578: number;
        1228585: number;
        1228586: number;
        1228591: number;
        1318977: number;
        1319010: number;
        1319024: number;
        1321925: number;
        1321927: number;
        1321935: number;
        1323409: number;
        1325882: number;
        1330522: number;
        1330524: number;
        1330529: number;
        1335441: number;
        1336640: number;
        1344521: number;
        1344523: number;
        1344524: number;
        1345187: number;
        1345215: number;
        1346218: number;
        1346230: number;
        1366621: number;
        1366622: number;
        1366625: number;
        1366627: number;
        1366628: number;
        1366629: number;
        1366631: number;
        1366635: number;
        1366636: number;
        1366642: number;
        1366643: number;
        1366644: number;
        1366645: number;
        1366646: number;
        1366648: number;
        1366652: number;
        1366654: number;
        1366658: number;
        1366659: number;
        1366662: number;
        1388451: number;
        1515960: number;
        1515962: number;
        1515965: number;
        1613249: number;
        1613251: number;
        1613293: number;
        1620988: number;
        1620990: number;
        1620991: number;
        1620993: number;
        1620996: number;
        1622390: number;
        1622393: number;
        1626629: number;
        1626630: number;
        1626633: number;
        1626645: number;
        1626646: number;
        1633392: number;
        1633399: number;
        1633416: number;
        1633420: number;
        1633423: number;
        1633424: number;
        1633429: number;
        1633432: number;
        1633441: number;
        1643672: number;
        1643714: number;
        1643723: number;
        1643783: number;
        1643811: number;
        1643813: number;
        1657976: number;
        1657993: number;
        1657996: number;
        1709185: number;
        1709188: number;
        1709189: number;
        1709190: number;
        1709198: number;
        1709203: number;
        1709204: number;
        1709208: number;
        1767386: number;
        1767388: number;
        1767390: number;
        1767412: number;
        1767413: number;
        1767440: number;
        1767445: number;
        1767449: number;
        1767450: number;
        1767457: number;
        1767459: number;
        1767462: number;
        1781411: number;
        1781415: number;
        1781529: number;
        1781536: number;
        1781537: number;
        1781544: number;
        1781549: number;
        1781565: number;
        1781566: number;
        1781571: number;
        1781575: number;
    }

    export interface MealIdToDayId {
        433008: number;
        436196: number;
        446444: number;
        449062: number;
        463624: number;
        474173: number;
        474602: number;
        487750: number;
        493143: number;
        509040: number;
        510081: number;
        510385: number;
        510578: number;
        510646: number;
        513222: number;
        515044: number;
        515046: number;
        515557: number;
        518641: number;
        518917: number;
        518918: number;
        527014: number;
        527016: number;
        527017: number;
        527020: number;
        527021: number;
        527028: number;
        530255: number;
        535371: number;
        535508: number;
        535509: number;
        535518: number;
        557261: number;
        578275: number;
        584481: number;
        620651: number;
        620672: number;
        623619: number;
        624124: number;
        628633: number;
        628641: number;
        628642: number;
        628646: number;
        632529: number;
        632568: number;
        634359: number;
        637865: number;
        652058: number;
        656836: number;
        656845: number;
        672930: number;
        678460: number;
        678465: number;
        678474: number;
        678489: number;
        683439: number;
        683470: number;
        683480: number;
        683482: number;
    }

    export interface Day {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes {
    }

    export interface Details2 {
        date: string;
        dishes: Dishes;
        tags: any[];
        photos: any[];
    }

    export interface 4330082 {
        meal: Meal;
        details: Details2;
    }

    export interface MealsWithDetails {
        433008: 4330082;
    }

    export interface Details {
        mealsWithDetails: MealsWithDetails;
    }

    export interface 2644642 {
        day: Day;
        details: Details;
    }

    export interface Day2 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal2 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes2 {
    }

    export interface Details4 {
        date: string;
        dishes: Dishes2;
        tags: any[];
        photos: any[];
    }

    export interface 4361962 {
        meal: Meal2;
        details: Details4;
    }

    export interface MealsWithDetails2 {
        436196: 4361962;
    }

    export interface Details3 {
        mealsWithDetails: MealsWithDetails2;
    }

    export interface 2664582 {
        day: Day2;
        details: Details3;
    }

    export interface Day3 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal3 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes3 {
    }

    export interface Details6 {
        date: string;
        dishes: Dishes3;
        tags: any[];
        photos: any[];
    }

    export interface 4464442 {
        meal: Meal3;
        details: Details6;
    }

    export interface MealsWithDetails3 {
        446444: 4464442;
    }

    export interface Details5 {
        mealsWithDetails: MealsWithDetails3;
    }

    export interface 2727202 {
        day: Day3;
        details: Details5;
    }

    export interface Day4 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal4 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes4 {
    }

    export interface Details8 {
        date: string;
        dishes: Dishes4;
        tags: any[];
        photos: any[];
    }

    export interface 4490622 {
        meal: Meal4;
        details: Details8;
    }

    export interface MealsWithDetails4 {
        449062: 4490622;
    }

    export interface Details7 {
        mealsWithDetails: MealsWithDetails4;
    }

    export interface 2743522 {
        day: Day4;
        details: Details7;
    }

    export interface Day5 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal5 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes5 {
    }

    export interface Details10 {
        date: string;
        dishes: Dishes5;
        tags: any[];
        photos: any[];
    }

    export interface 4636242 {
        meal: Meal5;
        details: Details10;
    }

    export interface MealsWithDetails5 {
        463624: 4636242;
    }

    export interface Details9 {
        mealsWithDetails: MealsWithDetails5;
    }

    export interface 2836042 {
        day: Day5;
        details: Details9;
    }

    export interface Day6 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal6 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes6 {
    }

    export interface Details12 {
        date: string;
        dishes: Dishes6;
        tags: any[];
        photos: any[];
    }

    export interface 4741732 {
        meal: Meal6;
        details: Details12;
    }

    export interface MealsWithDetails6 {
        474173: 4741732;
    }

    export interface Details11 {
        mealsWithDetails: MealsWithDetails6;
    }

    export interface 2901102 {
        day: Day6;
        details: Details11;
    }

    export interface Day7 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal7 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 12285782 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 12285852 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 12285862 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        blurbPublic: string;
    }

    export interface 12285912 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes7 {
        1228578: 12285782;
        1228585: 12285852;
        1228586: 12285862;
        1228591: 12285912;
    }

    export interface Image {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo {
        id: number;
        image: Image;
    }

    export interface Details14 {
        date: string;
        dishes: Dishes7;
        tags: any[];
        photos: Photo[];
    }

    export interface 4746022 {
        meal: Meal7;
        details: Details14;
    }

    export interface Meal8 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface 13234092 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface Dishes8 {
        1323409: 13234092;
    }

    export interface Details15 {
        date: string;
        dishes: Dishes8;
        tags: any[];
        photos: any[];
    }

    export interface 5106462 {
        meal: Meal8;
        details: Details15;
    }

    export interface MealsWithDetails7 {
        474602: 4746022;
        510646: 5106462;
    }

    export interface Details13 {
        mealsWithDetails: MealsWithDetails7;
    }

    export interface 2903562 {
        day: Day7;
        details: Details13;
    }

    export interface Day8 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal9 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes9 {
    }

    export interface Details17 {
        date: string;
        dishes: Dishes9;
        tags: any[];
        photos: any[];
    }

    export interface 4877502 {
        meal: Meal9;
        details: Details17;
    }

    export interface MealsWithDetails8 {
        487750: 4877502;
    }

    export interface Details16 {
        mealsWithDetails: MealsWithDetails8;
    }

    export interface 2984522 {
        day: Day8;
        details: Details16;
    }

    export interface Day9 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal10 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes10 {
    }

    export interface Details19 {
        date: string;
        dishes: Dishes10;
        tags: any[];
        photos: any[];
    }

    export interface 4931432 {
        meal: Meal10;
        details: Details19;
    }

    export interface MealsWithDetails9 {
        493143: 4931432;
    }

    export interface Details18 {
        mealsWithDetails: MealsWithDetails9;
    }

    export interface 3017932 {
        day: Day9;
        details: Details18;
    }

    export interface Day10 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal11 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes11 {
    }

    export interface Details21 {
        date: string;
        dishes: Dishes11;
        tags: any[];
        photos: any[];
    }

    export interface 5103852 {
        meal: Meal11;
        details: Details21;
    }

    export interface MealsWithDetails10 {
        510385: 5103852;
    }

    export interface Details20 {
        mealsWithDetails: MealsWithDetails10;
    }

    export interface 3084392 {
        day: Day10;
        details: Details20;
    }

    export interface Day11 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal12 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13190242 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface 13219252 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        recipe: string;
    }

    export interface 13219272 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        recipe: string;
    }

    export interface 13219352 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes12 {
        1319024: 13190242;
        1321925: 13219252;
        1321927: 13219272;
        1321935: 13219352;
    }

    export interface Image2 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo2 {
        id: number;
        image: Image2;
    }

    export interface Details23 {
        date: string;
        dishes: Dishes12;
        tags: any[];
        photos: Photo2[];
    }

    export interface 5090402 {
        meal: Meal12;
        details: Details23;
    }

    export interface Meal13 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13258822 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        blurbPublic: string;
    }

    export interface Dishes13 {
        1325882: 13258822;
    }

    export interface Details24 {
        date: string;
        dishes: Dishes13;
        tags: number[];
        photos: any[];
    }

    export interface 5105782 {
        meal: Meal13;
        details: Details24;
    }

    export interface Meal14 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13305222 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        blurbPublic: string;
    }

    export interface 13305242 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        blurbPublic: string;
    }

    export interface 13305292 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        blurbPublic: string;
    }

    export interface Dishes14 {
        1330522: 13305222;
        1330524: 13305242;
        1330529: 13305292;
    }

    export interface Image3 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo3 {
        id: number;
        image: Image3;
    }

    export interface Details25 {
        date: string;
        dishes: Dishes14;
        tags: any[];
        photos: Photo3[];
    }

    export interface 5132222 {
        meal: Meal14;
        details: Details25;
    }

    export interface MealsWithDetails11 {
        509040: 5090402;
        510578: 5105782;
        513222: 5132222;
    }

    export interface Details22 {
        mealsWithDetails: MealsWithDetails11;
    }

    export interface 3117622 {
        day: Day11;
        details: Details22;
    }

    export interface Day12 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal15 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13666422 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666432 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666442 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666452 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666462 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666482 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes15 {
        1366642: 13666422;
        1366643: 13666432;
        1366644: 13666442;
        1366645: 13666452;
        1366646: 13666462;
        1366648: 13666482;
    }

    export interface Image4 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo4 {
        id: number;
        image: Image4;
    }

    export interface Details27 {
        date: string;
        dishes: Dishes15;
        tags: any[];
        photos: Photo4[];
    }

    export interface 5270202 {
        meal: Meal15;
        details: Details27;
    }

    export interface Meal16 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13666522 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666542 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes16 {
        1366652: 13666522;
        1366654: 13666542;
    }

    export interface Image5 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo5 {
        id: number;
        image: Image5;
    }

    export interface Details28 {
        date: string;
        dishes: Dishes16;
        tags: any[];
        photos: Photo5[];
    }

    export interface 5270212 {
        meal: Meal16;
        details: Details28;
    }

    export interface Meal17 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13666582 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666592 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface 13666622 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes17 {
        1366658: 13666582;
        1366659: 13666592;
        1366662: 13666622;
    }

    export interface Image6 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo6 {
        id: number;
        image: Image6;
    }

    export interface Details29 {
        date: string;
        dishes: Dishes17;
        tags: any[];
        photos: Photo6[];
    }

    export interface 5270282 {
        meal: Meal17;
        details: Details29;
    }

    export interface MealsWithDetails12 {
        527020: 5270202;
        527021: 5270212;
        527028: 5270282;
    }

    export interface Details26 {
        mealsWithDetails: MealsWithDetails12;
    }

    export interface 3124152 {
        day: Day12;
        details: Details26;
    }

    export interface Day13 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal18 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes18 {
    }

    export interface Details31 {
        date: string;
        dishes: Dishes18;
        tags: any[];
        photos: any[];
    }

    export interface 5150442 {
        meal: Meal18;
        details: Details31;
    }

    export interface Meal19 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13354412 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes19 {
        1335441: 13354412;
    }

    export interface Details32 {
        date: string;
        dishes: Dishes19;
        tags: number[];
        photos: any[];
    }

    export interface 5150462 {
        meal: Meal19;
        details: Details32;
    }

    export interface Meal20 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13366402 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes20 {
        1336640: 13366402;
    }

    export interface Details33 {
        date: string;
        dishes: Dishes20;
        tags: number[];
        photos: any[];
    }

    export interface 5155572 {
        meal: Meal20;
        details: Details33;
    }

    export interface MealsWithDetails13 {
        515044: 5150442;
        515046: 5150462;
        515557: 5155572;
    }

    export interface Details30 {
        mealsWithDetails: MealsWithDetails13;
    }

    export interface 3155182 {
        day: Day13;
        details: Details30;
    }

    export interface Day14 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal21 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13445212 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13445232 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13445242 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes21 {
        1344521: 13445212;
        1344523: 13445232;
        1344524: 13445242;
    }

    export interface Image7 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo7 {
        id: number;
        image: Image7;
    }

    export interface Details35 {
        date: string;
        dishes: Dishes21;
        tags: any[];
        photos: Photo7[];
    }

    export interface 5186412 {
        meal: Meal21;
        details: Details35;
    }

    export interface Meal22 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13451872 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes22 {
        1345187: 13451872;
    }

    export interface Details36 {
        date: string;
        dishes: Dishes22;
        tags: number[];
        photos: any[];
    }

    export interface 5189172 {
        meal: Meal22;
        details: Details36;
    }

    export interface Meal23 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        eventId: number;
        blurbPublic: string;
        goals: any[];
    }

    export interface 13452152 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13462182 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13462302 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes23 {
        1345215: 13452152;
        1346218: 13462182;
        1346230: 13462302;
    }

    export interface Image8 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo8 {
        id: number;
        image: Image8;
    }

    export interface Details37 {
        date: string;
        dishes: Dishes23;
        tags: any[];
        photos: Photo8[];
    }

    export interface 5189182 {
        meal: Meal23;
        details: Details37;
    }

    export interface MealsWithDetails14 {
        518641: 5186412;
        518917: 5189172;
        518918: 5189182;
    }

    export interface Details34 {
        mealsWithDetails: MealsWithDetails14;
    }

    export interface 3177122 {
        day: Day14;
        details: Details34;
    }

    export interface Day15 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal24 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13666212 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666222 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes24 {
        1366621: 13666212;
        1366622: 13666222;
    }

    export interface Details39 {
        date: string;
        dishes: Dishes24;
        tags: number[];
        photos: any[];
    }

    export interface 5270142 {
        meal: Meal24;
        details: Details39;
    }

    export interface MealsWithDetails15 {
        527014: 5270142;
    }

    export interface Details38 {
        mealsWithDetails: MealsWithDetails15;
    }

    export interface 3229612 {
        day: Day15;
        details: Details38;
    }

    export interface Day16 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal25 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        coverImageIndex: number;
        goals: any[];
    }

    export interface 13666252 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666272 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666282 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes25 {
        1366625: 13666252;
        1366627: 13666272;
        1366628: 13666282;
    }

    export interface Image9 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo9 {
        id: number;
        image: Image9;
    }

    export interface Details41 {
        date: string;
        dishes: Dishes25;
        tags: any[];
        photos: Photo9[];
    }

    export interface 5270162 {
        meal: Meal25;
        details: Details41;
    }

    export interface Meal26 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13666292 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666312 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface 13666352 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 13666362 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes26 {
        1366629: 13666292;
        1366631: 13666312;
        1366635: 13666352;
        1366636: 13666362;
    }

    export interface Image10 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo10 {
        id: number;
        image: Image10;
    }

    export interface Details42 {
        date: string;
        dishes: Dishes26;
        tags: any[];
        photos: Photo10[];
    }

    export interface 5270172 {
        meal: Meal26;
        details: Details42;
    }

    export interface Meal27 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes27 {
    }

    export interface Details43 {
        date: string;
        dishes: Dishes27;
        tags: any[];
        photos: any[];
    }

    export interface 5302552 {
        meal: Meal27;
        details: Details43;
    }

    export interface MealsWithDetails16 {
        527016: 5270162;
        527017: 5270172;
        530255: 5302552;
    }

    export interface Details40 {
        mealsWithDetails: MealsWithDetails16;
    }

    export interface 3229622 {
        day: Day16;
        details: Details40;
    }

    export interface Day17 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal28 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 13189772 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        recipe: string;
    }

    export interface 13190102 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        recipe: string;
    }

    export interface Dishes28 {
        1318977: 13189772;
        1319010: 13190102;
    }

    export interface Details45 {
        date: string;
        dishes: Dishes28;
        tags: any[];
        photos: any[];
    }

    export interface 5100812 {
        meal: Meal28;
        details: Details45;
    }

    export interface MealsWithDetails17 {
        510081: 5100812;
    }

    export interface Details44 {
        mealsWithDetails: MealsWithDetails17;
    }

    export interface 3229632 {
        day: Day17;
        details: Details44;
    }

    export interface Day18 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal29 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        blurbPublic: string;
        goals: any[];
    }

    export interface 13884512 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes29 {
        1388451: 13884512;
    }

    export interface Image11 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo11 {
        id: number;
        image: Image11;
    }

    export interface Details47 {
        date: string;
        dishes: Dishes29;
        tags: any[];
        photos: Photo11[];
    }

    export interface 5353712 {
        meal: Meal29;
        details: Details47;
    }

    export interface Meal30 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes30 {
    }

    export interface Details48 {
        date: string;
        dishes: Dishes30;
        tags: any[];
        photos: any[];
    }

    export interface 5355082 {
        meal: Meal30;
        details: Details48;
    }

    export interface Meal31 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes31 {
    }

    export interface Details49 {
        date: string;
        dishes: Dishes31;
        tags: any[];
        photos: any[];
    }

    export interface 5355092 {
        meal: Meal31;
        details: Details49;
    }

    export interface Meal32 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes32 {
    }

    export interface Details50 {
        date: string;
        dishes: Dishes32;
        tags: any[];
        photos: any[];
    }

    export interface 5355182 {
        meal: Meal32;
        details: Details50;
    }

    export interface MealsWithDetails18 {
        535371: 5353712;
        535508: 5355082;
        535509: 5355092;
        535518: 5355182;
    }

    export interface Details46 {
        mealsWithDetails: MealsWithDetails18;
    }

    export interface 3282652 {
        day: Day18;
        details: Details46;
    }

    export interface Day19 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal33 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes33 {
    }

    export interface Details52 {
        date: string;
        dishes: Dishes33;
        tags: any[];
        photos: any[];
    }

    export interface 5572612 {
        meal: Meal33;
        details: Details52;
    }

    export interface MealsWithDetails19 {
        557261: 5572612;
    }

    export interface Details51 {
        mealsWithDetails: MealsWithDetails19;
    }

    export interface 3416322 {
        day: Day19;
        details: Details51;
    }

    export interface Day20 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal34 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes34 {
    }

    export interface Details54 {
        date: string;
        dishes: Dishes34;
        tags: any[];
        photos: any[];
    }

    export interface 5782752 {
        meal: Meal34;
        details: Details54;
    }

    export interface MealsWithDetails20 {
        578275: 5782752;
    }

    export interface Details53 {
        mealsWithDetails: MealsWithDetails20;
    }

    export interface 3542712 {
        day: Day20;
        details: Details53;
    }

    export interface Day21 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal35 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        coverImageIndex: number;
        eventId: number;
        blurbPublic: string;
        goals: any[];
    }

    export interface 15159602 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 15159622 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 15159652 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes35 {
        1515960: 15159602;
        1515962: 15159622;
        1515965: 15159652;
    }

    export interface Image12 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo12 {
        id: number;
        image: Image12;
    }

    export interface Details56 {
        date: string;
        dishes: Dishes35;
        tags: any[];
        photos: Photo12[];
    }

    export interface 5844812 {
        meal: Meal35;
        details: Details56;
    }

    export interface MealsWithDetails21 {
        584481: 5844812;
    }

    export interface Details55 {
        mealsWithDetails: MealsWithDetails21;
    }

    export interface 3581082 {
        day: Day21;
        details: Details55;
    }

    export interface Day22 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal36 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 16132492 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
    }

    export interface 16132512 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16132932 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface Dishes36 {
        1613249: 16132492;
        1613251: 16132512;
        1613293: 16132932;
    }

    export interface Image13 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo13 {
        id: number;
        image: Image13;
    }

    export interface Details58 {
        date: string;
        dishes: Dishes36;
        tags: any[];
        photos: Photo13[];
    }

    export interface 6206512 {
        meal: Meal36;
        details: Details58;
    }

    export interface MealsWithDetails22 {
        620651: 6206512;
    }

    export interface Details57 {
        mealsWithDetails: MealsWithDetails22;
    }

    export interface 3804862 {
        day: Day22;
        details: Details57;
    }

    export interface Day23 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal37 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        eventId: number;
        blurbPublic: string;
        goals: any[];
    }

    export interface 16266292 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16266302 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
    }

    export interface 16266332 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        recipeId: number;
    }

    export interface 16266452 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16266462 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes37 {
        1626629: 16266292;
        1626630: 16266302;
        1626633: 16266332;
        1626645: 16266452;
        1626646: 16266462;
    }

    export interface Image14 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo14 {
        id: number;
        image: Image14;
    }

    export interface Details60 {
        date: string;
        dishes: Dishes37;
        tags: number[];
        photos: Photo14[];
    }

    export interface 6206722 {
        meal: Meal37;
        details: Details60;
    }

    export interface Meal38 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 16209882 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16209902 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16209912 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface 16209932 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16209962 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface Dishes38 {
        1620988: 16209882;
        1620990: 16209902;
        1620991: 16209912;
        1620993: 16209932;
        1620996: 16209962;
    }

    export interface Image15 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo15 {
        id: number;
        image: Image15;
    }

    export interface Details61 {
        date: string;
        dishes: Dishes38;
        tags: any[];
        photos: Photo15[];
    }

    export interface 6236192 {
        meal: Meal38;
        details: Details61;
    }

    export interface Meal39 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        eventId: number;
        blurbPublic: string;
        goals: any[];
    }

    export interface 16223902 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
    }

    export interface 16223932 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes39 {
        1622390: 16223902;
        1622393: 16223932;
    }

    export interface Image16 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo16 {
        id: number;
        image: Image16;
    }

    export interface Details62 {
        date: string;
        dishes: Dishes39;
        tags: any[];
        photos: Photo16[];
    }

    export interface 6241242 {
        meal: Meal39;
        details: Details62;
    }

    export interface MealsWithDetails23 {
        620672: 6206722;
        623619: 6236192;
        624124: 6241242;
    }

    export interface Details59 {
        mealsWithDetails: MealsWithDetails23;
    }

    export interface 3804952 {
        day: Day23;
        details: Details59;
    }

    export interface Day24 {
        id: number;
        userId: number;
        date: string;
        blurbPublic: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal40 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface 17091982 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
    }

    export interface Dishes40 {
        1709198: 17091982;
    }

    export interface Details64 {
        date: string;
        dishes: Dishes40;
        tags: any[];
        photos: any[];
    }

    export interface 6520582 {
        meal: Meal40;
        details: Details64;
    }

    export interface Meal41 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        blurbPublic: string;
        goals: any[];
    }

    export interface 17091852 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17091882 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17091892 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17091902 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes41 {
        1709185: 17091852;
        1709188: 17091882;
        1709189: 17091892;
        1709190: 17091902;
    }

    export interface Image17 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo17 {
        id: number;
        image: Image17;
    }

    export interface Details65 {
        date: string;
        dishes: Dishes41;
        tags: number[];
        photos: Photo17[];
    }

    export interface 6568362 {
        meal: Meal41;
        details: Details65;
    }

    export interface Meal42 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        eventId: number;
        blurbPublic: string;
        goals: any[];
    }

    export interface 17092032 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17092042 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17092082 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes42 {
        1709203: 17092032;
        1709204: 17092042;
        1709208: 17092082;
    }

    export interface Image18 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo18 {
        id: number;
        image: Image18;
    }

    export interface Details66 {
        date: string;
        dishes: Dishes42;
        tags: number[];
        photos: Photo18[];
    }

    export interface 6568452 {
        meal: Meal42;
        details: Details66;
    }

    export interface MealsWithDetails24 {
        652058: 6520582;
        656836: 6568362;
        656845: 6568452;
    }

    export interface Details63 {
        mealsWithDetails: MealsWithDetails24;
    }

    export interface 3855752 {
        day: Day24;
        details: Details63;
    }

    export interface Day25 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal43 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 16334162 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
    }

    export interface 16334202 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16334232 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16334242 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface Dishes43 {
        1633416: 16334162;
        1633420: 16334202;
        1633423: 16334232;
        1633424: 16334242;
    }

    export interface Image19 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo19 {
        id: number;
        image: Image19;
    }

    export interface Details68 {
        date: string;
        dishes: Dishes43;
        tags: any[];
        photos: Photo19[];
    }

    export interface 6286412 {
        meal: Meal43;
        details: Details68;
    }

    export interface Meal44 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        blurbPublic: string;
        goals: any[];
    }

    export interface 16334292 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16334322 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes44 {
        1633429: 16334292;
        1633432: 16334322;
    }

    export interface Image20 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo20 {
        id: number;
        image: Image20;
    }

    export interface Details69 {
        date: string;
        dishes: Dishes44;
        tags: any[];
        photos: Photo20[];
    }

    export interface 6286422 {
        meal: Meal44;
        details: Details69;
    }

    export interface Meal45 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 16334412 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16436722 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
    }

    export interface Dishes45 {
        1633441: 16334412;
        1643672: 16436722;
    }

    export interface Image21 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo21 {
        id: number;
        image: Image21;
    }

    export interface Details70 {
        date: string;
        dishes: Dishes45;
        tags: number[];
        photos: Photo21[];
    }

    export interface 6286462 {
        meal: Meal45;
        details: Details70;
    }

    export interface Meal46 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        blurbPublic: string;
        goals: any[];
    }

    export interface 16438112 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16438132 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes46 {
        1643811: 16438112;
        1643813: 16438132;
    }

    export interface Image22 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo22 {
        id: number;
        image: Image22;
    }

    export interface Details71 {
        date: string;
        dishes: Dishes46;
        tags: any[];
        photos: Photo22[];
    }

    export interface 6325682 {
        meal: Meal46;
        details: Details71;
    }

    export interface MealsWithDetails25 {
        628641: 6286412;
        628642: 6286422;
        628646: 6286462;
        632568: 6325682;
    }

    export interface Details67 {
        mealsWithDetails: MealsWithDetails25;
    }

    export interface 3855782 {
        day: Day25;
        details: Details67;
    }

    export interface Day26 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal47 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 16437142 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
    }

    export interface 16437232 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface 16437832 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface Dishes47 {
        1643714: 16437142;
        1643723: 16437232;
        1643783: 16437832;
    }

    export interface Image23 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo23 {
        id: number;
        image: Image23;
    }

    export interface Details73 {
        date: string;
        dishes: Dishes47;
        tags: any[];
        photos: Photo23[];
    }

    export interface 6325292 {
        meal: Meal47;
        details: Details73;
    }

    export interface Meal48 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface Dishes48 {
    }

    export interface Details74 {
        date: string;
        dishes: Dishes48;
        tags: any[];
        photos: any[];
    }

    export interface 6343592 {
        meal: Meal48;
        details: Details74;
    }

    export interface MealsWithDetails26 {
        632529: 6325292;
        634359: 6343592;
    }

    export interface Details72 {
        mealsWithDetails: MealsWithDetails26;
    }

    export interface 3880262 {
        day: Day26;
        details: Details72;
    }

    export interface Day27 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal49 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 16579762 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
        dishIdeaId: number;
    }

    export interface 16579932 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface 16579962 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface Dishes49 {
        1657976: 16579762;
        1657993: 16579932;
        1657996: 16579962;
    }

    export interface Image24 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo24 {
        id: number;
        image: Image24;
    }

    export interface Details76 {
        date: string;
        dishes: Dishes49;
        tags: any[];
        photos: Photo24[];
    }

    export interface 6378652 {
        meal: Meal49;
        details: Details76;
    }

    export interface MealsWithDetails27 {
        637865: 6378652;
    }

    export interface Details75 {
        mealsWithDetails: MealsWithDetails27;
    }

    export interface 3915422 {
        day: Day27;
        details: Details75;
    }

    export interface Day28 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal50 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        goals: any[];
    }

    export interface 16333922 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 16333992 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes50 {
        1633392: 16333922;
        1633399: 16333992;
    }

    export interface Details78 {
        date: string;
        dishes: Dishes50;
        tags: number[];
        photos: any[];
    }

    export interface 6286332 {
        meal: Meal50;
        details: Details78;
    }

    export interface MealsWithDetails28 {
        628633: 6286332;
    }

    export interface Details77 {
        mealsWithDetails: MealsWithDetails28;
    }

    export interface 4035462 {
        day: Day28;
        details: Details77;
    }

    export interface Day29 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal51 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        eventId: number;
        blurbPublic: string;
        goals: any[];
    }

    export interface 17674402 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17674452 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17674492 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17674502 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes51 {
        1767440: 17674402;
        1767445: 17674452;
        1767449: 17674492;
        1767450: 17674502;
    }

    export interface Image25 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo25 {
        id: number;
        image: Image25;
    }

    export interface Details80 {
        date: string;
        dishes: Dishes51;
        tags: any[];
        photos: Photo25[];
    }

    export interface 6729302 {
        meal: Meal51;
        details: Details80;
    }

    export interface Meal52 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 17815712 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
        dishIdeaId: number;
    }

    export interface 17815752 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface Dishes52 {
        1781571: 17815712;
        1781575: 17815752;
    }

    export interface Image26 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo26 {
        id: number;
        image: Image26;
    }

    export interface Details81 {
        date: string;
        dishes: Dishes52;
        tags: any[];
        photos: Photo26[];
    }

    export interface 6834822 {
        meal: Meal52;
        details: Details81;
    }

    export interface MealsWithDetails29 {
        672930: 6729302;
        683482: 6834822;
    }

    export interface Details79 {
        mealsWithDetails: MealsWithDetails29;
    }

    export interface 4138162 {
        day: Day29;
        details: Details79;
    }

    export interface Day30 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal53 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 17815442 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
        dishIdeaId: number;
    }

    export interface 17815492 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface Dishes53 {
        1781544: 17815442;
        1781549: 17815492;
    }

    export interface Image27 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo27 {
        id: number;
        image: Image27;
    }

    export interface Details83 {
        date: string;
        dishes: Dishes53;
        tags: any[];
        photos: Photo27[];
    }

    export interface 6784602 {
        meal: Meal53;
        details: Details83;
    }

    export interface Meal54 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        eventId: number;
        blurbPublic: string;
        goals: any[];
    }

    export interface 17673862 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17673882 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17673902 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes54 {
        1767386: 17673862;
        1767388: 17673882;
        1767390: 17673902;
    }

    export interface Image28 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo28 {
        id: number;
        image: Image28;
    }

    export interface Details84 {
        date: string;
        dishes: Dishes54;
        tags: number[];
        photos: Photo28[];
    }

    export interface 6784652 {
        meal: Meal54;
        details: Details84;
    }

    export interface MealsWithDetails30 {
        678460: 6784602;
        678465: 6784652;
    }

    export interface Details82 {
        mealsWithDetails: MealsWithDetails30;
    }

    export interface 4172442 {
        day: Day30;
        details: Details82;
    }

    export interface Day31 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal55 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        eventId: number;
        blurbPublic: string;
        goals: any[];
    }

    export interface 17674122 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17674132 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes55 {
        1767412: 17674122;
        1767413: 17674132;
    }

    export interface Image29 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo29 {
        id: number;
        image: Image29;
    }

    export interface Details86 {
        date: string;
        dishes: Dishes55;
        tags: number[];
        photos: Photo29[];
    }

    export interface 6784742 {
        meal: Meal55;
        details: Details86;
    }

    export interface Meal56 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 17815652 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
        dishIdeaId: number;
    }

    export interface 17815662 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface Dishes56 {
        1781565: 17815652;
        1781566: 17815662;
    }

    export interface Image30 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo30 {
        id: number;
        image: Image30;
    }

    export interface Details87 {
        date: string;
        dishes: Dishes56;
        tags: any[];
        photos: Photo30[];
    }

    export interface 6834802 {
        meal: Meal56;
        details: Details87;
    }

    export interface MealsWithDetails31 {
        678474: 6784742;
        683480: 6834802;
    }

    export interface Details85 {
        mealsWithDetails: MealsWithDetails31;
    }

    export interface 4172492 {
        day: Day31;
        details: Details85;
    }

    export interface Day32 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal57 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 17674572 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17674592 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17674622 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes57 {
        1767457: 17674572;
        1767459: 17674592;
        1767462: 17674622;
    }

    export interface Image31 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo31 {
        id: number;
        image: Image31;
    }

    export interface Details89 {
        date: string;
        dishes: Dishes57;
        tags: number[];
        photos: Photo31[];
    }

    export interface 6784892 {
        meal: Meal57;
        details: Details89;
    }

    export interface MealsWithDetails32 {
        678489: 6784892;
    }

    export interface Details88 {
        mealsWithDetails: MealsWithDetails32;
    }

    export interface 4172602 {
        day: Day32;
        details: Details88;
    }

    export interface Day33 {
        id: number;
        userId: number;
        date: string;
        deletedDefaultMealTypes: any[];
    }

    export interface Meal58 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        eventId: number;
        goals: any[];
    }

    export interface 17814112 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface 17814152 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes58 {
        1781411: 17814112;
        1781415: 17814152;
    }

    export interface Image32 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo32 {
        id: number;
        image: Image32;
    }

    export interface Details91 {
        date: string;
        dishes: Dishes58;
        tags: number[];
        photos: Photo32[];
    }

    export interface 6834392 {
        meal: Meal58;
        details: Details91;
    }

    export interface Meal59 {
        id: number;
        userId: number;
        dayId: number;
        type: string;
        completed: boolean;
        goals: any[];
    }

    export interface 17815292 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        arrangement: string;
        dishIdeaId: number;
    }

    export interface 17815362 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
        dishIdeaId: number;
        recipeId: number;
    }

    export interface 17815372 {
        id: number;
        userId: number;
        mealId: number;
        name: string;
    }

    export interface Dishes59 {
        1781529: 17815292;
        1781536: 17815362;
        1781537: 17815372;
    }

    export interface Image33 {
        id: number;
        processed: boolean;
        urlPattern: string;
    }

    export interface Photo33 {
        id: number;
        image: Image33;
    }

    export interface Details92 {
        date: string;
        dishes: Dishes59;
        tags: any[];
        photos: Photo33[];
    }

    export interface 6834702 {
        meal: Meal59;
        details: Details92;
    }

    export interface MealsWithDetails33 {
        683439: 6834392;
        683470: 6834702;
    }

    export interface Details90 {
        mealsWithDetails: MealsWithDetails33;
    }

    export interface 4203262 {
        day: Day33;
        details: Details90;
    }

    export interface DaysWithDetails {
        264464: 2644642;
        266458: 2664582;
        272720: 2727202;
        274352: 2743522;
        283604: 2836042;
        290110: 2901102;
        290356: 2903562;
        298452: 2984522;
        301793: 3017932;
        308439: 3084392;
        311762: 3117622;
        312415: 3124152;
        315518: 3155182;
        317712: 3177122;
        322961: 3229612;
        322962: 3229622;
        322963: 3229632;
        328265: 3282652;
        341632: 3416322;
        354271: 3542712;
        358108: 3581082;
        380486: 3804862;
        380495: 3804952;
        385575: 3855752;
        385578: 3855782;
        388026: 3880262;
        391542: 3915422;
        403546: 4035462;
        413816: 4138162;
        417244: 4172442;
        417249: 4172492;
        417260: 4172602;
        420326: 4203262;
    }

    export interface Calendar {
        dateToDayId: DateToDayId;
        dishIdToMealId: DishIdToMealId;
        mealIdToDayId: MealIdToDayId;
        daysWithDetails: DaysWithDetails;
    }

    export interface Dishes60 {
    }

    export interface Meals {
    }

    export interface Users {
    }

    export interface Recipes {
    }

    export interface DishIdeas {
    }

    export interface MealPlans {
    }

    export interface MealData {
        mealId: number;
        ordinal: number;
        hoursSincePrevious: number;
    }

    export interface Metadata {
    }

    export interface 335202 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        mealData: MealData;
        mealHasImages: boolean;
        metadata: Metadata;
    }

    export interface MealData2 {
        mealId: number;
        ordinal: number;
        hoursSincePrevious: number;
    }

    export interface Metadata2 {
    }

    export interface 365002 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        mealData: MealData2;
        mealHasImages: boolean;
        metadata: Metadata2;
    }

    export interface MealData3 {
        mealId: number;
        ordinal: number;
        hoursSincePrevious: number;
    }

    export interface Metadata3 {
    }

    export interface 381622 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        mealData: MealData3;
        mealHasImages: boolean;
        metadata: Metadata3;
    }

    export interface MealData4 {
        mealId: number;
        ordinal: number;
        hoursSincePrevious: number;
    }

    export interface Metadata4 {
    }

    export interface 382462 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        mealData: MealData4;
        mealHasImages: boolean;
        metadata: Metadata4;
    }

    export interface MealData5 {
        mealId: number;
        ordinal: number;
        hoursSincePrevious: number;
    }

    export interface Metadata5 {
    }

    export interface 394672 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        mealData: MealData5;
        mealHasImages: boolean;
        metadata: Metadata5;
    }

    export interface MealData6 {
        mealId: number;
        ordinal: number;
        hoursSincePrevious: number;
    }

    export interface Metadata6 {
    }

    export interface 402262 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        mealData: MealData6;
        mealHasImages: boolean;
        metadata: Metadata6;
    }

    export interface MealData7 {
        mealId: number;
        ordinal: number;
        hoursSincePrevious: number;
    }

    export interface Metadata7 {
    }

    export interface 402272 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        mealData: MealData7;
        mealHasImages: boolean;
        metadata: Metadata7;
    }

    export interface MealData8 {
        mealId: number;
        ordinal: number;
        hoursSincePrevious: number;
    }

    export interface Metadata8 {
    }

    export interface 402282 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        mealData: MealData8;
        mealHasImages: boolean;
        metadata: Metadata8;
    }

    export interface MealData9 {
        mealId: number;
        ordinal: number;
        hoursSincePrevious: number;
    }

    export interface Metadata9 {
    }

    export interface 404562 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        mealData: MealData9;
        mealHasImages: boolean;
        metadata: Metadata9;
    }

    export interface Events2 {
        33520: 335202;
        36500: 365002;
        38162: 381622;
        38246: 382462;
        39467: 394672;
        40226: 402262;
        40227: 402272;
        40228: 402282;
        40456: 404562;
    }

    export interface Meal60 {
        518918: number;
        584481: number;
        620672: number;
        624124: number;
        656845: number;
        672930: number;
        678465: number;
        678474: number;
        683439: number;
    }

    export interface Index {
        meal: Meal60;
    }

    export interface Events {
        events: Events2;
        index: Index;
    }

    export interface 594842 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 595142 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 595552 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 597232 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 610202 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 610252 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 610272 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 610382 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 753432 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 753562 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 756942 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 756952 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface 774292 {
        id: number;
        userId: number;
        createdAt: number;
        entityType: string;
        entityId: number;
        text: string;
        textSrc: string;
    }

    export interface Comments2 {
        59484: 594842;
        59514: 595142;
        59555: 595552;
        59723: 597232;
        61020: 610202;
        61025: 610252;
        61027: 610272;
        61038: 610382;
        75343: 753432;
        75356: 753562;
        75694: 756942;
        75695: 756952;
        77429: 774292;
    }

    export interface Meal61 {
        518918: number[];
        678465: number[];
        678474: number[];
    }

    export interface Index2 {
        meal: Meal61;
    }

    export interface Item {
        id: number;
    }

    export interface 5189183 {
        items: Item[];
    }

    export interface Item2 {
        id: number;
    }

    export interface 6784653 {
        items: Item2[];
    }

    export interface Item3 {
        id: number;
    }

    export interface 6784743 {
        items: Item3[];
    }

    export interface Meal62 {
        518918: 5189183;
        678465: 6784653;
        678474: 6784743;
    }

    export interface Threads {
        meal: Meal62;
    }

    export interface Comments {
        comments: Comments2;
        index: Index2;
        threads: Threads;
    }

    export interface 3009932 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3009942 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3010252 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3010292 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3010322 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3010452 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3010472 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3010702 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3010872 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3010982 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3011082 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3011192 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3011212 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3011372 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3011632 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3011822 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3011852 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3012212 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3012282 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3012612 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3012972 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3013032 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3013282 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3013342 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3013642 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3013662 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3013882 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3013952 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3014322 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3014522 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3014702 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3014832 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3015632 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3016112 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3016542 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3016792 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3016842 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3016882 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3017142 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3017322 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3017992 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3019162 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3020112 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3021342 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3021982 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3022732 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3023892 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3024002 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3025032 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3026492 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3028392 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3036612 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3042242 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3048182 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3048222 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3107412 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3305862 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3305902 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3306062 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3306172 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3306232 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3306252 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3306332 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3306362 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3306402 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3306802 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3306932 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3307002 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3307192 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3307202 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3307392 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3307522 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3307772 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3307862 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3307922 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3307982 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3308152 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3309242 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3309512 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3309852 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3309912 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3310072 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3310242 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3310462 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3310792 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3311392 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3311652 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3312092 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3312432 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3313252 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3315022 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3315252 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3317782 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3318252 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3319352 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3319962 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3320532 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3322652 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3325552 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3327272 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3327712 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3332432 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3338912 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3350522 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3466442 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3466502 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3466532 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3466582 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3466602 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3466652 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3467072 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3467522 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3467612 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3467712 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3467752 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3467892 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3468002 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3468422 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3468432 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3468462 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3468582 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3468762 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3468882 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3468942 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3469082 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3469252 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3469292 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3469372 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3469462 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3469762 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3470082 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3470282 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3470712 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3471032 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3471272 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3471762 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3472512 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3472522 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3472632 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3472662 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3472712 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3472752 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3472792 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3472982 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3473002 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3473122 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3473282 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3473442 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3473582 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3473672 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3473852 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3474132 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3474182 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3474342 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3474482 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3474562 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3474622 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3474662 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3474692 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3474722 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3474792 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3475022 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3475072 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3475172 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3475252 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3475302 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3475512 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3475572 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3475692 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3475722 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3475832 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3476262 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3476312 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3476412 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3476472 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3477532 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3477742 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3477872 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3478172 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3478402 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3478792 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3479202 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3479362 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3479502 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3479752 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3480062 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3480132 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3480542 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3480682 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3482302 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3482342 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3483582 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3484522 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3484572 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3485772 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3487102 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3493022 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3493042 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3529572 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3529672 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3543342 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3543352 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3543432 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3593582 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3593922 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594002 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594102 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594162 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594262 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594292 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594472 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594522 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594622 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594662 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594732 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594792 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3594952 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3595172 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3595392 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3595692 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3596072 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3596142 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3596332 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3596752 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3596872 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3596912 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3597052 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3597092 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3597302 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3597492 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3597502 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3597832 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3598292 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3598522 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3598892 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3599062 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3599252 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3599412 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3599702 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3600202 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3600622 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3601012 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3601362 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3601942 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3602372 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3602512 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3602842 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3602952 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3603132 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3603142 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3604442 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3607182 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3607342 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3607812 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3608692 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3611862 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3614252 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3614952 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3637182 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666472 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666482 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666492 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666542 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666552 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666562 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666742 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666752 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666762 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666852 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666862 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3666872 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667092 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667102 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667122 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667292 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667302 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667322 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667412 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667452 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667472 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667572 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667592 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667612 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667672 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667692 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667842 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667852 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667862 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667872 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667972 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667982 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3667992 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668382 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668392 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668612 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668702 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668712 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668722 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668742 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668762 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668772 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668822 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668832 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668862 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3668992 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669002 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669022 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669162 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669172 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669192 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669472 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669502 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669522 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669912 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669922 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669962 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3669982 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3670092 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3670102 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3670112 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3670542 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3670552 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3670562 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3670772 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3670812 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3670842 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3670982 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3670992 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3671012 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3671112 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3671132 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3671152 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3671602 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3672962 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3672982 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3672992 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3673242 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3673292 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3673322 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3673582 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3673592 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3673602 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3673842 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3673862 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3673882 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3674262 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3674282 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3674342 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3674352 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3674582 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3674592 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3674602 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3674832 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3674842 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3675342 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3675362 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3675372 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3677212 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3677222 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3677232 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3678152 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3678822 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3678832 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3678842 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3678932 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3679292 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3679312 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3679322 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3682112 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3682122 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3682132 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3682952 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3682962 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3682972 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3683762 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3683772 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3683782 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3686582 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3686712 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3686862 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3687082 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3687192 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3687362 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3687392 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3687832 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3688202 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3688342 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3688422 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3688752 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3688862 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3688912 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3689122 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3689712 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3689762 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3689882 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3690152 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3690172 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3690282 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3690502 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3690632 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3691132 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3691542 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3692162 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3692232 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3692402 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3693022 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3693402 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3693482 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3694092 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3694162 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3694182 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3694352 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3694442 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3694552 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3695022 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3695402 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3695982 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3696582 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3696592 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3696602 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3697192 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3697502 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3698032 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3698182 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3698422 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3699392 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3699622 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3699862 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3699882 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3699982 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3700142 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3700232 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3700242 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3700252 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3701102 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3702482 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface 3716762 {
        id: number;
        userId: number;
        entityType: string;
        entityId: number;
        createdAt: number;
    }

    export interface Likes2 {
        300993: 3009932;
        300994: 3009942;
        301025: 3010252;
        301029: 3010292;
        301032: 3010322;
        301045: 3010452;
        301047: 3010472;
        301070: 3010702;
        301087: 3010872;
        301098: 3010982;
        301108: 3011082;
        301119: 3011192;
        301121: 3011212;
        301137: 3011372;
        301163: 3011632;
        301182: 3011822;
        301185: 3011852;
        301221: 3012212;
        301228: 3012282;
        301261: 3012612;
        301297: 3012972;
        301303: 3013032;
        301328: 3013282;
        301334: 3013342;
        301364: 3013642;
        301366: 3013662;
        301388: 3013882;
        301395: 3013952;
        301432: 3014322;
        301452: 3014522;
        301470: 3014702;
        301483: 3014832;
        301563: 3015632;
        301611: 3016112;
        301654: 3016542;
        301679: 3016792;
        301684: 3016842;
        301688: 3016882;
        301714: 3017142;
        301732: 3017322;
        301799: 3017992;
        301916: 3019162;
        302011: 3020112;
        302134: 3021342;
        302198: 3021982;
        302273: 3022732;
        302389: 3023892;
        302400: 3024002;
        302503: 3025032;
        302649: 3026492;
        302839: 3028392;
        303661: 3036612;
        304224: 3042242;
        304818: 3048182;
        304822: 3048222;
        310741: 3107412;
        330586: 3305862;
        330590: 3305902;
        330606: 3306062;
        330617: 3306172;
        330623: 3306232;
        330625: 3306252;
        330633: 3306332;
        330636: 3306362;
        330640: 3306402;
        330680: 3306802;
        330693: 3306932;
        330700: 3307002;
        330719: 3307192;
        330720: 3307202;
        330739: 3307392;
        330752: 3307522;
        330777: 3307772;
        330786: 3307862;
        330792: 3307922;
        330798: 3307982;
        330815: 3308152;
        330924: 3309242;
        330951: 3309512;
        330985: 3309852;
        330991: 3309912;
        331007: 3310072;
        331024: 3310242;
        331046: 3310462;
        331079: 3310792;
        331139: 3311392;
        331165: 3311652;
        331209: 3312092;
        331243: 3312432;
        331325: 3313252;
        331502: 3315022;
        331525: 3315252;
        331778: 3317782;
        331825: 3318252;
        331935: 3319352;
        331996: 3319962;
        332053: 3320532;
        332265: 3322652;
        332555: 3325552;
        332727: 3327272;
        332771: 3327712;
        333243: 3332432;
        333891: 3338912;
        335052: 3350522;
        346644: 3466442;
        346650: 3466502;
        346653: 3466532;
        346658: 3466582;
        346660: 3466602;
        346665: 3466652;
        346707: 3467072;
        346752: 3467522;
        346761: 3467612;
        346771: 3467712;
        346775: 3467752;
        346789: 3467892;
        346800: 3468002;
        346842: 3468422;
        346843: 3468432;
        346846: 3468462;
        346858: 3468582;
        346876: 3468762;
        346888: 3468882;
        346894: 3468942;
        346908: 3469082;
        346925: 3469252;
        346929: 3469292;
        346937: 3469372;
        346946: 3469462;
        346976: 3469762;
        347008: 3470082;
        347028: 3470282;
        347071: 3470712;
        347103: 3471032;
        347127: 3471272;
        347176: 3471762;
        347251: 3472512;
        347252: 3472522;
        347263: 3472632;
        347266: 3472662;
        347271: 3472712;
        347275: 3472752;
        347279: 3472792;
        347298: 3472982;
        347300: 3473002;
        347312: 3473122;
        347328: 3473282;
        347344: 3473442;
        347358: 3473582;
        347367: 3473672;
        347385: 3473852;
        347413: 3474132;
        347418: 3474182;
        347434: 3474342;
        347448: 3474482;
        347456: 3474562;
        347462: 3474622;
        347466: 3474662;
        347469: 3474692;
        347472: 3474722;
        347479: 3474792;
        347502: 3475022;
        347507: 3475072;
        347517: 3475172;
        347525: 3475252;
        347530: 3475302;
        347551: 3475512;
        347557: 3475572;
        347569: 3475692;
        347572: 3475722;
        347583: 3475832;
        347626: 3476262;
        347631: 3476312;
        347641: 3476412;
        347647: 3476472;
        347753: 3477532;
        347774: 3477742;
        347787: 3477872;
        347817: 3478172;
        347840: 3478402;
        347879: 3478792;
        347920: 3479202;
        347936: 3479362;
        347950: 3479502;
        347975: 3479752;
        348006: 3480062;
        348013: 3480132;
        348054: 3480542;
        348068: 3480682;
        348230: 3482302;
        348234: 3482342;
        348358: 3483582;
        348452: 3484522;
        348457: 3484572;
        348577: 3485772;
        348710: 3487102;
        349302: 3493022;
        349304: 3493042;
        352957: 3529572;
        352967: 3529672;
        354334: 3543342;
        354335: 3543352;
        354343: 3543432;
        359358: 3593582;
        359392: 3593922;
        359400: 3594002;
        359410: 3594102;
        359416: 3594162;
        359426: 3594262;
        359429: 3594292;
        359447: 3594472;
        359452: 3594522;
        359462: 3594622;
        359466: 3594662;
        359473: 3594732;
        359479: 3594792;
        359495: 3594952;
        359517: 3595172;
        359539: 3595392;
        359569: 3595692;
        359607: 3596072;
        359614: 3596142;
        359633: 3596332;
        359675: 3596752;
        359687: 3596872;
        359691: 3596912;
        359705: 3597052;
        359709: 3597092;
        359730: 3597302;
        359749: 3597492;
        359750: 3597502;
        359783: 3597832;
        359829: 3598292;
        359852: 3598522;
        359889: 3598892;
        359906: 3599062;
        359925: 3599252;
        359941: 3599412;
        359970: 3599702;
        360020: 3600202;
        360062: 3600622;
        360101: 3601012;
        360136: 3601362;
        360194: 3601942;
        360237: 3602372;
        360251: 3602512;
        360284: 3602842;
        360295: 3602952;
        360313: 3603132;
        360314: 3603142;
        360444: 3604442;
        360718: 3607182;
        360734: 3607342;
        360781: 3607812;
        360869: 3608692;
        361186: 3611862;
        361425: 3614252;
        361495: 3614952;
        363718: 3637182;
        366647: 3666472;
        366648: 3666482;
        366649: 3666492;
        366654: 3666542;
        366655: 3666552;
        366656: 3666562;
        366674: 3666742;
        366675: 3666752;
        366676: 3666762;
        366685: 3666852;
        366686: 3666862;
        366687: 3666872;
        366709: 3667092;
        366710: 3667102;
        366712: 3667122;
        366729: 3667292;
        366730: 3667302;
        366732: 3667322;
        366741: 3667412;
        366745: 3667452;
        366747: 3667472;
        366757: 3667572;
        366759: 3667592;
        366761: 3667612;
        366767: 3667672;
        366769: 3667692;
        366784: 3667842;
        366785: 3667852;
        366786: 3667862;
        366787: 3667872;
        366797: 3667972;
        366798: 3667982;
        366799: 3667992;
        366838: 3668382;
        366839: 3668392;
        366861: 3668612;
        366870: 3668702;
        366871: 3668712;
        366872: 3668722;
        366874: 3668742;
        366876: 3668762;
        366877: 3668772;
        366882: 3668822;
        366883: 3668832;
        366886: 3668862;
        366899: 3668992;
        366900: 3669002;
        366902: 3669022;
        366916: 3669162;
        366917: 3669172;
        366919: 3669192;
        366947: 3669472;
        366950: 3669502;
        366952: 3669522;
        366991: 3669912;
        366992: 3669922;
        366996: 3669962;
        366998: 3669982;
        367009: 3670092;
        367010: 3670102;
        367011: 3670112;
        367054: 3670542;
        367055: 3670552;
        367056: 3670562;
        367077: 3670772;
        367081: 3670812;
        367084: 3670842;
        367098: 3670982;
        367099: 3670992;
        367101: 3671012;
        367111: 3671112;
        367113: 3671132;
        367115: 3671152;
        367160: 3671602;
        367296: 3672962;
        367298: 3672982;
        367299: 3672992;
        367324: 3673242;
        367329: 3673292;
        367332: 3673322;
        367358: 3673582;
        367359: 3673592;
        367360: 3673602;
        367384: 3673842;
        367386: 3673862;
        367388: 3673882;
        367426: 3674262;
        367428: 3674282;
        367434: 3674342;
        367435: 3674352;
        367458: 3674582;
        367459: 3674592;
        367460: 3674602;
        367483: 3674832;
        367484: 3674842;
        367534: 3675342;
        367536: 3675362;
        367537: 3675372;
        367721: 3677212;
        367722: 3677222;
        367723: 3677232;
        367815: 3678152;
        367882: 3678822;
        367883: 3678832;
        367884: 3678842;
        367893: 3678932;
        367929: 3679292;
        367931: 3679312;
        367932: 3679322;
        368211: 3682112;
        368212: 3682122;
        368213: 3682132;
        368295: 3682952;
        368296: 3682962;
        368297: 3682972;
        368376: 3683762;
        368377: 3683772;
        368378: 3683782;
        368658: 3686582;
        368671: 3686712;
        368686: 3686862;
        368708: 3687082;
        368719: 3687192;
        368736: 3687362;
        368739: 3687392;
        368783: 3687832;
        368820: 3688202;
        368834: 3688342;
        368842: 3688422;
        368875: 3688752;
        368886: 3688862;
        368891: 3688912;
        368912: 3689122;
        368971: 3689712;
        368976: 3689762;
        368988: 3689882;
        369015: 3690152;
        369017: 3690172;
        369028: 3690282;
        369050: 3690502;
        369063: 3690632;
        369113: 3691132;
        369154: 3691542;
        369216: 3692162;
        369223: 3692232;
        369240: 3692402;
        369302: 3693022;
        369340: 3693402;
        369348: 3693482;
        369409: 3694092;
        369416: 3694162;
        369418: 3694182;
        369435: 3694352;
        369444: 3694442;
        369455: 3694552;
        369502: 3695022;
        369540: 3695402;
        369598: 3695982;
        369658: 3696582;
        369659: 3696592;
        369660: 3696602;
        369719: 3697192;
        369750: 3697502;
        369803: 3698032;
        369818: 3698182;
        369842: 3698422;
        369939: 3699392;
        369962: 3699622;
        369986: 3699862;
        369988: 3699882;
        369998: 3699982;
        370014: 3700142;
        370023: 3700232;
        370024: 3700242;
        370025: 3700252;
        370110: 3701102;
        370248: 3702482;
        371676: 3716762;
    }

    export interface Meal63 {
        518918: number[];
        584481: number[];
        620672: number[];
        624124: number[];
        656845: number[];
        672930: number[];
        678465: number[];
        678474: number[];
        683439: number[];
    }

    export interface Index3 {
        meal: Meal63;
    }

    export interface Meal64 {
        433008: boolean;
        436196: boolean;
        446444: boolean;
        449062: boolean;
        463624: boolean;
        474173: boolean;
        474602: boolean;
        487750: boolean;
        493143: boolean;
        509040: boolean;
        510081: boolean;
        510385: boolean;
        510578: boolean;
        510646: boolean;
        513222: boolean;
        515044: boolean;
        515046: boolean;
        515557: boolean;
        518641: boolean;
        518917: boolean;
        518918: boolean;
        527014: boolean;
        527016: boolean;
        527017: boolean;
        527020: boolean;
        527021: boolean;
        527028: boolean;
        530255: boolean;
        535371: boolean;
        535508: boolean;
        535509: boolean;
        535518: boolean;
        557261: boolean;
        578275: boolean;
        584481: boolean;
        620651: boolean;
        620672: boolean;
        623619: boolean;
        624124: boolean;
        628633: boolean;
        628641: boolean;
        628642: boolean;
        628646: boolean;
        632529: boolean;
        632568: boolean;
        634359: boolean;
        637865: boolean;
        652058: boolean;
        656836: boolean;
        656845: boolean;
        672930: boolean;
        678460: boolean;
        678465: boolean;
        678474: boolean;
        678489: boolean;
        683439: boolean;
        683470: boolean;
        683480: boolean;
        683482: boolean;
    }

    export interface Mine {
        meal: Meal64;
    }

    export interface Meal65 {
        518918: number;
        584481: number;
        620672: number;
        624124: number;
        656845: number;
        672930: number;
        678465: number;
        678474: number;
        683439: number;
    }

    export interface Counts {
        meal: Meal65;
    }

    export interface Aggregates {
        mine: Mine;
        counts: Counts;
    }

    export interface Likes {
        likes: Likes2;
        index: Index3;
        aggregates: Aggregates;
    }

    export interface Entities {
        dishes: Dishes60;
        meals: Meals;
        users: Users;
        recipes: Recipes;
        dishIdeas: DishIdeas;
        mealPlans: MealPlans;
        events: Events;
        comments: Comments;
        likes: Likes;
    }

    export interface RootObject {
        profile: Profile;
        calendar: Calendar;
        entities: Entities;
        earliestDate: string;
    }

}
