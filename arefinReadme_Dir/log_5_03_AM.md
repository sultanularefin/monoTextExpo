

```java


TS2322: Type '{ profile: { pictureUrl: string; name: string; }; calendar: { dateToDayId: { "2016-07-14": number; "2016-08-26": number; "2016-09-07": number; "2016-08-15": number; "2016-07-25": number; "2016-08-28": number; ... 26 more ...; "2016-07-07": number; }; dishIdToMealId: { ...; }; mealIdToDayId: { ...; }; daysWithDetails...' is not assignable to type 'UserActivity'.   The types of 'calendar.dateToDayId' are incompatible between these types.     Property 'string' is missing in type '{ "2016-07-14": number; "2016-08-26": number; "2016-09-07": number; "2016-08-15": number; "2016-07-25": number; "2016-08-28": number; "2016-08-06": number; "2016-09-04": number; "2016-07-28": number; "2016-07-19": number; ... 22 more ...; "2016-07-07": number; }' but required in type '{ string: number; }'.


```
