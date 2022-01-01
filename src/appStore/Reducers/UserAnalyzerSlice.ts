import {
    createSlice,
    createAsyncThunk,
    PayloadAction
} from '@reduxjs/toolkit';
import {baseInterface} from "./baseInterface";


import {UserData2    }    from  "../../dataIMP/UserData2";
import {UserData7    } from     "../../dataIMP/UserData7";
import {UserData2627 } from     "../../dataIMP/UserData2627";
import {UserData10780} from     "../../dataIMP/UserData10780";
import {UserData13116} from     "../../dataIMP/UserData13116";

import {UserData14842} from     "../../dataIMP/UserData14842";
import {UserData17172} from     "../../dataIMP/UserData17172";
import {UserData20566} from     "../../dataIMP/UserData20566";
import {UserData21632} from     "../../dataIMP/UserData21632";

import {UserData27366} from     "../../dataIMP/UserData27366";
import {UserData29127} from     "../../dataIMP/UserData29127";
import {UserData30024} from     "../../dataIMP/UserData30024";
import {UserData30332} from     "../../dataIMP/UserData30332";
import {UserData31870} from     "../../dataIMP/UserData31870";
import {UserData33550} from     "../../dataIMP/UserData33550";

import {UserData34407} from     "../../dataIMP/UserData34407";
import {UserData34429} from     "../../dataIMP/UserData34429";
import {UserData36495} from     "../../dataIMP/UserData36495";

import {UserData37327} from     "../../dataIMP/UserData37327";
import {UserData38639} from     "../../dataIMP/UserData38639";


export interface user_Filter_Payload_Interface {
    startDate: string,//Date,
    endDate: string,//Date,
    userCategory: one_User_Activity_Status_interface[],
}

// startDate,endDate,all_Activity_Status_of_Users_State

export interface one_Tripz_connect_later_Data_interface {

    activity_id: number, //string
    created_at: string,
    id: number,  // string
    mind_content: string,
    mobile_no: string,
    name: string,
    status: number, // string,
    suggested: string,
    time: string,
    trip_by: string,
    // trip_datetime: string,
    trip_start_date: Date,
    // trip_datetime_end: string,
    trip_end_date: Date,
    trip_from: string,
    trip_purpose: string,
    trip_to: string,
    update_at: string,
    user_id: string,
    user_profile_photo: string,
}


import {RootState} from "../app/store";
import {one_User_Activity_Status_interface} from "../../screens/UserAnalyzer_Page";
import {UserActivity} from "../../customInterfaces/UserActivity";
// import {useState} from "react";



// @ts-ignore
const tempAllOptionsState__2   : UserActivity = UserData2;

// @ts-ignore
const tempAllOptionsState__7   : UserActivity =UserData7;
// @ts-ignore
const tempAllOptionsState__2627: UserActivity =UserData2627;
// @ts-ignore
const tempAllOptionsState__10780 : UserActivity =UserData10780;
// @ts-ignore
const tempAllOptionsState__13116 : UserActivity =UserData13116;
// @ts-ignore
const tempAllOptionsState__14842 : UserActivity =UserData14842;
// @ts-ignore
const tempAllOptionsState__17172 : UserActivity =UserData17172;
// @ts-ignore
const tempAllOptionsState__20566 : UserActivity =UserData20566;
// @ts-ignore
const tempAllOptionsState__21632 : UserActivity =UserData21632;
// @ts-ignore
const tempAllOptionsState__27366 : UserActivity =UserData27366;
// @ts-ignore
const tempAllOptionsState__29127 : UserActivity =UserData29127;
// @ts-ignore
const tempAllOptionsState__30024 : UserActivity =UserData30024;
// @ts-ignore
const tempAllOptionsState__30332 : UserActivity =UserData30332;
// @ts-ignore
const tempAllOptionsState__31870 : UserActivity =UserData31870;
// @ts-ignore
const tempAllOptionsState__33550 : UserActivity =UserData33550;
// @ts-ignore
const tempAllOptionsState__34407 : UserActivity =UserData34407;
// @ts-ignore
const tempAllOptionsState__34429 : UserActivity =UserData34429;
// @ts-ignore
const tempAllOptionsState__36495 : UserActivity =UserData36495;
// @ts-ignore
const tempAllOptionsState__37327 : UserActivity =UserData37327;
// @ts-ignore
const tempAllOptionsState__38639 : UserActivity =UserData38639;






export interface UserAnalyzer_State_interface extends baseInterface{

    all_connect_later_Data: one_Tripz_connect_later_Data_interface[],
    user_Data_State_in_Slice : UserActivity[],

}



const initialState: UserAnalyzer_State_interface = {

    apiInovocatoinStatus: '',
    isFetching: true,
    isSuccess: false,
    isError: false,
    errorMessage: '',

    // -------base above.--------


    // lazy_loading____above------------


    all_connect_later_Data: [],
    user_Data_State_in_Slice: ([
        tempAllOptionsState__2, tempAllOptionsState__7, tempAllOptionsState__2627, tempAllOptionsState__10780,tempAllOptionsState__13116,
        tempAllOptionsState__14842,tempAllOptionsState__17172,tempAllOptionsState__20566, tempAllOptionsState__21632, tempAllOptionsState__27366,
        tempAllOptionsState__29127, tempAllOptionsState__30024, tempAllOptionsState__30332, tempAllOptionsState__31870, tempAllOptionsState__33550,
        tempAllOptionsState__34407,tempAllOptionsState__34429, tempAllOptionsState__36495, tempAllOptionsState__38639

    ]),
};


const initailState0 = initialState;







// 222





//1111
export const get_all_tripz_later_Async = createAsyncThunk(
    'userAnalyzer/get_All_tripz_later',
    async (
        userID:string,
        thunkAPI) => {
        try {
            // console.log("userID: ", userID);
            const response = await fetch(

                'https://tripzchat.com/api_dev/api/trip/getAllTripLater',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify ({
                        user_id: userID,
                    }),


                }
            );
            const data = await response.json();

            // console.log("data:, connect slice get all tripz later", data);
            console.log("response.status: ", response.status);

            if (response.status === 200) {

                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);






const filter_SelectedDate_between_start_date_and_end_date=(startDate:string, endDate:string, selectedDate:string)=>{

    if (selectedDate > startDate && selectedDate < endDate) {

        console.log(`Selected date ${selectedDate} between startDate:${startDate} and endDate${endDate}`);

        return true;
        // el_down.innerHTML = "Date is in between the "
        //     + "Date 1 and Date 2";
    }
    else{
        console.log("not true");
        console.log(`Selected date ${selectedDate} not between startDate:${startDate} and endDate${endDate}`);
        return  false;
    }

};






const filter_SelectedDate_between_start_date_and_end_date___4=(startDate:string, endDate:string, selectedDate:string)=>{

    console.log(`Selected date ${selectedDate} between startDate:${startDate} and endDate${endDate}`);

    const fromDate = startDate.split('-');
    // '2020-01-30T05:00:00.000Z'.split('-');


    const compareDate = selectedDate.split('-');
    //'2020-02-31T22:18:46Z'.split('-');  // false. should be true...


    const toDate = endDate.split('-');
    //'2021-01-01T05:00:00.000Z'.split('-');

    const partStringToInt = (str:string) => parseInt(str, 10);
    const compareBetween = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);

    const compareYearBetween_Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    console.log(`compareYearBetween_Strt_Sel_End(${fromDate[0]}, ${compareDate[0]}, ${toDate[0]}): ", ${compareYearBetween_Strt_Sel_End(fromDate[0], compareDate[0], toDate[0])}`);

    const compareMontHBetween__Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    console.log(`compareMontHBetween__Strt_Sel_End(${fromDate[1]}, ${compareDate[1]}, ${toDate[1]}): ", ${compareMontHBetween__Strt_Sel_End(fromDate[1], compareDate[1], toDate[1])}`);


    const compareDayBetween__Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    console.log(`compareDayBetween__Strt_Sel_End(${fromDate[2]}, ${compareDate[2]}, ${toDate[2]}): ", ${compareDayBetween__Strt_Sel_End(fromDate[2], compareDate[2], toDate[2])}`);



    const result = compareYearBetween_Strt_Sel_End(fromDate[0], compareDate[0], toDate[0]) // Year
        || compareMontHBetween__Strt_Sel_End(fromDate[1], compareDate[1], toDate[1]) // Month
        && compareDayBetween__Strt_Sel_End(fromDate[2].substring(0, 2), compareDate[2].substring(0, 2), toDate[2].substring(0, 2)); // Day
    console.log(result);

    return result;

};


const get_dayID_From_Date=(startDate:string, endDate:string, selectedDate:string)=>{

    console.log(`Selected date ${selectedDate} between startDate:${startDate} and endDate${endDate}`);

    const fromDate = startDate.split('-');
    // '2020-01-30T05:00:00.000Z'.split('-');


    const compareDate = selectedDate.split('-');
    //'2020-02-31T22:18:46Z'.split('-');  // false. should be true...


    const toDate = endDate.split('-');
    //'2021-01-01T05:00:00.000Z'.split('-');








    const partStringToInt = (str:string) => parseInt(str, 10);
    const compareBetween = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);

    const compareYearBetween_Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    console.log(`compareYearBetween_Strt_Sel_End(${fromDate[0]}, ${compareDate[0]}, ${toDate[0]}): ", ${compareYearBetween_Strt_Sel_End(fromDate[0], compareDate[0], toDate[0])}`);

    const compareMontHBetween__Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    console.log(`compareMontHBetween__Strt_Sel_End(${fromDate[1]}, ${compareDate[1]}, ${toDate[1]}): ", ${compareMontHBetween__Strt_Sel_End(fromDate[1], compareDate[1], toDate[1])}`);


    const compareDayBetween__Strt_Sel_End = (startValue:string, compareValue:string, endValue:string) => partStringToInt(startValue) <= partStringToInt(compareValue) && partStringToInt(compareValue) <= partStringToInt(endValue);
    console.log(`compareDayBetween__Strt_Sel_End(${fromDate[2]}, ${compareDate[2]}, ${toDate[2]}): ", ${compareDayBetween__Strt_Sel_End(fromDate[2], compareDate[2], toDate[2])}`);



    const result = compareYearBetween_Strt_Sel_End(fromDate[0], compareDate[0], toDate[0]) // Year
        || compareMontHBetween__Strt_Sel_End(fromDate[1], compareDate[1], toDate[1]) // Month
        && compareDayBetween__Strt_Sel_End(fromDate[2].substring(0, 2), compareDate[2].substring(0, 2), toDate[2].substring(0, 2)); // Day
    console.log(result);

    return result;

};



const filter_User_BY_Date_and_Status = (state: any,
                                        action: PayloadAction<user_Filter_Payload_Interface>) => {



    const days:string[]= [];

    console.log("action.payload;: ",action.payload);

    const temp__all_connect_later_Data = state.all_connect_later_Data;  // all_connect_later_Data//  <====   feedzData;

    const {startDate,endDate,userCategory}: user_Filter_Payload_Interface = action.payload;

    console.log("startDate: ",startDate); //12/23/21 //MONTH/DAY/YEAR  // 01/01/16
    console.log("endDate: ",endDate);  // 01/01/22   01/01/17



    // console.log("userCategory: ",userCategory);



    const start_Date_Splitted = startDate.split('/');


    const date_OF_StartDate= parseInt(start_Date_Splitted[0],10);
    const month_OF_StartDate = parseInt(start_Date_Splitted[1],10);//-1; // parseInt(parts2[1],10) - 1;
    const year_OF_StartDate = parseInt(start_Date_Splitted[2],10);





    console.log("start_Date_Splitted: ",start_Date_Splitted);
    console.log("year_OF_StartDate: ",year_OF_StartDate);
    console.log("month_OF_StartDate: ",month_OF_StartDate);
    console.log("date_OF_StartDate: ",date_OF_StartDate);






    const end_Date_Splitted = endDate.split('/');


    const date_OF_EndDate= parseInt(end_Date_Splitted[0],10);
    const month_OF_EndDate = parseInt(end_Date_Splitted[1],10);//-1; // parseInt(parts2[1],10) - 1;
    const year_OF_EndDate= parseInt(end_Date_Splitted[2],10);





    console.log("end_Date_Splitted: ",end_Date_Splitted);

    console.log("year_OF_EndDate: ",year_OF_EndDate);
    console.log("month_OF_EndDate: ",month_OF_EndDate);
    console.log("date_OF_EndDate: ",date_OF_EndDate);





    let inital_Date_only = date_OF_StartDate;
    let end_Date_only = date_OF_EndDate;


    let inital_Month_only = month_OF_StartDate;
    let end_Month_only = month_OF_EndDate;

    let inital_year_only = year_OF_StartDate;
    let end_year_only = year_OF_EndDate;


    const monthly_Date_Limit =31;
    let counter =0;
    console.log("counter: ", counter);


    do {
        console.log("inital_Date_only: ",inital_Date_only);

        const oneDate=`20${inital_year_only}-${
            ((inital_Month_only.toString()).length===2)
            ?inital_Month_only
                :"0"+inital_Month_only
        }-${
            ((inital_Date_only.toString()).length===2)
                ?inital_Date_only
                :"0"+inital_Date_only
        }`
        days.push(oneDate);
        inital_Date_only++;

        if(inital_Date_only===monthly_Date_Limit){
            inital_Date_only=0;
            inital_Month_only=inital_Month_only+1;
        }
        console.log("inital_Date_only: ",inital_Date_only);
        console.log("monthly_Date_Limit: ",monthly_Date_Limit);
        console.log("inital_Month_only: ",inital_Month_only);
        console.log("end_Date_only: ",end_Date_only);
        counter = counter+1;
    } while (
        (inital_Month_only <= end_Month_only) &&
        (inital_year_only <= end_year_only) &&
        (inital_Date_only <= monthly_Date_Limit)  &&
        (inital_Date_only <= end_Date_only)
        );


    console.log("counter: ",counter);

    //2016-04-08 //year-month-day




    // console.log(` RPG => ${curr_year}-${curr_month}-${curruntDate}`);

    // const newDateSelected=  `${curr_year}-${curr_month}-${curruntDate}`;


    const allUserSName= state.user_Data_State_in_Slice.map((item: UserActivity) =>
        item.profile.name).join(', ');

    // const allUserIDS= state.user_Data_State_in_Slice.map((item: UserActivity) =>
    //     item.toString).join(', ');


    console.log("allUserSName::",allUserSName);
    // console.log("allUserIDS::",allUserIDS);





    const allDays= state.user_Data_State_in_Slice.map((item: UserActivity) =>
        item.profile.name).join(', ');

    const all__DateIDS= state.user_Data_State_in_Slice.map((item: UserActivity) =>
        item.calendar.dateToDayId);


    // console.log("allUserSName::",allUserSName);
    // console.log("JSON.stringify(all__DateIDS)::",all__DateIDS); // .json();





    console.log("days: ",days);

    return;

    // return;

    console.log(`Selected date ${selectedDate} between startDate:${startDate} and endDate${endDate}`);

    const fromDate = startDate.split('-');
    // '2020-01-30T05:00:00.000Z'.split('-');


    const compareDate = selectedDate.split('-');
    //'2020-02-31T22:18:46Z'.split('-');  // false. should be true...


    const toDate = endDate.split('-');
    //'2021-01-01T05:00:00.000Z'.split('-');









    const someDate = new Date(oneDate_To_Filter);
    const curruntDate =  (`0${someDate.getDate()}`).slice(-2); //d.getDate();
    const curr_month = (`0${someDate.getMonth() + 1}`).slice(-2); //Months are zero based  // ("0" + (this.getMonth() + 1)).slice(-2)
    const curr_year = someDate.getFullYear();

    // console.log(` RPG => ${curr_year}-${curr_month}-${curruntDate}`);

    const newDateSelected=  `${curr_year}-${curr_month}-${curruntDate}`;

    for (let step = 0; step < temp__all_connect_later_Data.length; step++) {
        console.log(temp__all_connect_later_Data[step].datetime);
    }



    const RPG_Filtered = temp__all_connect_later_Data.filter((oneItem: one_Tripz_connect_later_Data_interface) =>

        /*
        filter_SelectedDate_between_start_date_and_end_date(
            oneItem.trip_start_date.toString(), // start date
            oneItem.trip_end_date.toString(), // end date
            newDateSelected,
        )*/

        filter_SelectedDate_between_start_date_and_end_date___4(
            oneItem.trip_start_date.toString(), // start date
            oneItem.trip_end_date.toString(), // end date
            newDateSelected,

        )

    );

    // all_read_connect_tripz__later

    console.log(" << RPG_Filtered.length >> : ", RPG_Filtered.length);
    console.log("newDateSelected", newDateSelected);
    console.log("temp__all_connect_later_Data:",temp__all_connect_later_Data);



    state.read_connect_later_Data = RPG_Filtered;  // state.readFeedzData =RPG_Filtered;

    state.total_size_connect_trip___later= RPG_Filtered.length;  //state.sizeOFTotalState_feedz= RPG_Filtered.length;
    state.endReachedState_connect_trip____later=true;


};




// const realm_connect__Later__data_to_redux


export const convert_string_date_to_UTC_date_Realm_To_Redux_String_TO_Date_C_Later= (stringDate:string) => {




    // const parts2 ='2021-12-01 11:33:19'.split('-');
    const parts2 = stringDate.split('-');
    const parts3 = parts2[2].split(':');
    const parts4 = parts3[0].split(' ')[1];

    const year= parseInt(parts2[0],10);
    const month = parseInt(parts2[1],10)-1; // parseInt(parts2[1],10) - 1;
    const day = parseInt(parts3[0],10);
    const hour = parseInt(parts4,10);
    const minute = parseInt(parts3[1],10);
    const second = parseInt(parts3[2],10);



    const  mydate2 = new Date(Date.UTC(year,month ,day ,hour,minute,second));
    // const  mydate2 = new Date(Date.UTC(year,month ,day ,hour,minute,second)).toLocaleDateString('en-BD');

    console.log(`input: ,${stringDate} and output: ${mydate2}`);
    // console.log("mydate2: ", mydate2);

    return mydate2;
};


const loading_false_connect_later = (state: any,  action: PayloadAction<null>) => {

    state.show_Loading_connect_trip___later = false;
};






const checkDate=(some_Connect_LaterDate:string)=> {
    console.log("some_Connect_LaterDate: ",some_Connect_LaterDate);

    // one_Connect_Now_Data.trip_date.toString(),
    return some_Connect_LaterDate;
};








// update_search_date_connect_Later2
const reset_search0_Connect_Later4 = (state: any,
                                      action: PayloadAction<null>) => {


    console.log(" at << reset_search >>");

    const temp__connect__Later_Data = state.all_connect_later_Data; // state.feedzData;
    state.read_connect_later_Data = temp__connect__Later_Data;  // state.readFeedzData = temp__readFeedzData;

    // state.readFeedzData =RPG_Filtered;

    state.total_size_connect_trip___later = temp__connect__Later_Data.length;
    state.endReachedState_connect_trip____later= true;   // state.endReachedState_feedz= true;

};



const UserAnalyzerSlice = createSlice({
    name: 'userAnalyzer',
    initialState,
    reducers: {

        clear_Tripz_State: (state) => {

            // console.log("initailState0 : after clear_Tripz_State ==> ==> ==> ", initailState0);

            const returnedTarget = Object.assign(state, initailState0);
            // console.log("returnedTarget: ", returnedTarget);
            return returnedTarget;
        },


        filter_Users_By_updated_2_date_intervals_1: filter_User_BY_Date_and_Status,
        reset_search0_Connect_Later1:reset_search0_Connect_Later4,
        offline_Thus_loading_state_false_connect_Later: loading_false_connect_later,

    },
    extraReducers: (builder) => {



        //1111 get_all_tripz_later_Async


        builder.addCase(get_all_tripz_later_Async.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';
            // console.log("_____state.apiInovocatoinStatus = 'loading'");
        }).
        addCase(get_all_tripz_later_Async.rejected, (
            state,
            action) => {
            // [signupUser.rejected]: (state, { payload }) => {
            // console.log("failed____");
            console.log("_____state.apiInovocatoinStatus [get_all_tripz_later_Async] = 'failed____'");
            state.apiInovocatoinStatus = "failed";
            state.isFetching = false;
            state.isSuccess= false;
            state.isError= true;
            // state.errorMessage= action.payload; // will be ASSIGNED LATER....

        }).
        addCase(get_all_tripz_later_Async.fulfilled,
            (state,
             action) => {
                // console.log("(3)   idle____ [update_user_notification_Async ??");
                state.apiInovocatoinStatus = "idle";
                // console.log("_____state.apiInovocatoinStatus  [get_all_tripz_later_Async] = 'fulfilled___idle'");

                state.isFetching = false;
                state.isSuccess= true;
                state.isError= false;
                state.errorMessage= '';

                const all_tripz_later_Response_Json= action.payload;

                // console.log("[all_tripz_later_Response_Json]: ", all_tripz_later_Response_Json);

                if ((Array.isArray(all_tripz_later_Response_Json) && !all_tripz_later_Response_Json.length))
                {

                    state.all_connect_later_Data = [];


                }


                    // NEW DATA CAME, THIS CONDITION....
                // else  if (all_tripz_later_Response_Json.length + 1 !== state.all_connect_later_Data.length) {
                else{






                    const modified_Connect_LaterData = all_tripz_later_Response_Json.map(
                        (
                            obj:one_Tripz_connect_later_Data_interface,
                            index1: number,
                        ) => (
                            {
                                ...obj,
                                id:  Number(obj.id),
                                activity_id: Number(obj.activity_id),
                                status: Number(obj.status),


                            }
                        )
                    );


                }


            });















    }
});

export const {


    filter_Users_By_updated_2_date_intervals_1,
    reset_search0_Connect_Later1



} = UserAnalyzerSlice.actions;


export const select_all_tripz_later_connect_Posts = (state: RootState) => state.UserAnalyzer_Reducer.all_connect_later_Data;








export default UserAnalyzerSlice.reducer;
