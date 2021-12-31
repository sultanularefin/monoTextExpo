import { StatusBar } from 'expo-status-bar';
import {
    FlatList,
    Image, KeyboardAvoidingView,
    Platform, SafeAreaView, ScrollView,
    StyleSheet, TextInput,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import EditScreenInfo from '../components/EditScreenInfo';

import {Ionicons, Octicons,MaterialCommunityIcons} from '@expo/vector-icons';

// import Ionicons from "react-native-vector-icons/Ionicons";

import {
    Text,
    View,
} from '../components/Themed';
import {MonoText} from "../components/StyledText";
import {useRef, useState} from "react";
import StartDate from "./userAnalyzerComponents_Android/StartDate";
import EndDate from "./userAnalyzerComponents_Android/EndDate";
import CheckBoxComponent from "./userAnalyzerComponents_Android/CheckBoxComponent";
import {useAppDispatch} from "../appStore/app/hooks";
import {CommonActions} from "@react-navigation/native";
import Search_People from "./filter_People_Components/Search_People";
import User_Items from "./filter_People_Components/User_Items";


const calendarImage = require('../../assets/images/date_icon.png');
import {UserActivity} from "../customInterfaces/UserActivity";


import {UserData2    }    from "../dataIMP/UserData2";
import {UserData7    } from "../dataIMP/UserData7";
import {UserData2627 } from "../dataIMP/UserData2627";
import {UserData10780} from "../dataIMP/UserData10780";
import {UserData13116} from "../dataIMP/UserData13116";

import {UserData14842} from "../dataIMP/UserData14842";
import {UserData17172} from "../dataIMP/UserData17172";
import {UserData20566} from "../dataIMP/UserData20566";
import {UserData21632} from "../dataIMP/UserData21632";

import {UserData27366} from "../dataIMP/UserData27366";
import {UserData29127} from "../dataIMP/UserData29127";
import {UserData30024} from "../dataIMP/UserData30024";
import {UserData30332} from "../dataIMP/UserData30332";
import {UserData31870} from "../dataIMP/UserData31870";
import {UserData33550} from "../dataIMP/UserData33550";

import {UserData34407} from "../dataIMP/UserData34407";
import {UserData34429} from "../dataIMP/UserData34429";
import {UserData36495} from "../dataIMP/UserData36495";

import {UserData37327} from "../dataIMP/UserData37327";
import {UserData38639} from "../dataIMP/UserData38639";

import Header_With_Back_Handler_FilterPage from "./filter_People_Components/Header_With_Back_Handler_FilterPage";
import Edit_Filter_Navigation_component_in_Filter_Page
    from "./filter_People_Components/Edit_Filter_Navigation_component_in_Filter_Page";

/*

    dateToDayId: {
        string: number;
    };

dateToDayId: number;
 */


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

export interface Filter_People_Page_Props {

    props: {

    },
    navigation:any,
}


export interface one_User_Activity_Status_interface{


    index: number,
    status: string,
    // geolocation_Lat_Long: typeof location,
    isSelected: boolean,
}

export interface OneUser_From_Asset_Interface{

    date: Date,
    id:string,
    itemData:{
        amountNumber: Number,
        categoryText: string,
        detailText: string,
        imageURL: string, // string[]
        nameText: string,
        nameTextHalfWidth: string,
        tagText: string,
        urlText: string,
        priceText:Number,
        haveItCondition: Boolean,
    },
    uploadedBy: string,
    user: string,
    itemId: number//number[],
}


export interface checkBox_update_for_forward__Chat {

    index: number,
    value: boolean,
}


const convert_string_date_to_UTC_date_TripzSlice= (stringDate:string) => {

    // const parts2 ='2021-12-01 11:33:19'.split('-');
    const parts2 = stringDate.split('-');
    const parts3 = parts2[2].split(':');
    const parts4 = parts3[0].split(' ')[1];

    const year= parseInt(parts2[0],10);
    const month = parseInt(parts2[1],10)-1;// parseInt(parts2[1],10) - 1;
    const day = parseInt(parts3[0],10);
    const hour = parseInt(parts4,10);
    const minute = parseInt(parts3[1],10);
    const second = parseInt(parts3[2],10);



    const  mydate2 = new Date(Date.UTC(year,month ,day ,hour,minute,second));


    return mydate2;
};

const Filter_People_Page: React.FC<Filter_People_Page_Props> = ({props, navigation,}) => {



    const [modeStateStartTime, setModeStateStartTime] = useState('date');

    const [show_Start_State, setShowStartState] = useState<boolean>(false);

    const [user_Data_State,setUser_Data_State] =useState<UserActivity[]>([
        tempAllOptionsState__2, tempAllOptionsState__7, tempAllOptionsState__2627, tempAllOptionsState__10780,tempAllOptionsState__13116,
        tempAllOptionsState__14842,tempAllOptionsState__17172,tempAllOptionsState__20566, tempAllOptionsState__21632, tempAllOptionsState__27366,
        tempAllOptionsState__29127, tempAllOptionsState__30024, tempAllOptionsState__30332, tempAllOptionsState__31870, tempAllOptionsState__33550,
        tempAllOptionsState__34407,tempAllOptionsState__34429, tempAllOptionsState__36495, tempAllOptionsState__38639

    ]);

    // const tempAllOptionsState:UserActivity = UserData2;



    const [show_End_State, setShowEndState] = useState(false);

    const [modeStateEndTime, setModeStateEndTime] = useState('date');

    const [start_Date_Value_State, setStartDateValueState] = useState<null | Date>(null);

    // useState(new Date());
    // const [multipleImageState, setMultipleImageState] = useState <iImageCorpPicker[] | []>([]);
    const [end_Date_Value_State, setEndtDateValueState] = useState<null | Date>(null);
    //useState(new Date());




    const dispatch = useAppDispatch();


    const [filtered_Items_State,setFiltered_Items_State]
        = useState<OneUser_From_Asset_Interface[]|[]>(





        [
            {
                date: convert_string_date_to_UTC_date_TripzSlice('2021-12-01 11:33:19'),
                id:'111',
                itemData:{
                    amountNumber: 111,
                    categoryText: "cloth",
                    detailText: "shirt",
                    imageURL: "",
                    nameText: "new denim shirt",
                    nameTextHalfWidth: "new denim shirt",
                    tagText: "shirt",
                    urlText: "",
                    priceText:22,
                    haveItCondition: true,
                },
                uploadedBy: "Arefin",
                user: "Arefin",
                itemId:111,
            },
            {
                date: convert_string_date_to_UTC_date_TripzSlice('2021-12-01 11:33:19'),
                id:'222',
                itemData:{
                    amountNumber: 222,
                    categoryText: "cloth",
                    detailText: "shirt",
                    imageURL: "",
                    nameText: "denim new shirt",
                    nameTextHalfWidth: "denim new shirt",
                    tagText: "shirt",
                    urlText: "",
                    priceText:33,
                    haveItCondition: true,
                },
                uploadedBy: "Arefin",
                user: "Arefin",
                itemId:222,
            },
            {
                date: convert_string_date_to_UTC_date_TripzSlice('2021-12-01 11:33:19'),
                id:'333',
                itemData:{
                    amountNumber: 888,
                    categoryText: "cloth",
                    detailText: "shirt",
                    imageURL: "",
                    nameText: "denim shirt new",
                    nameTextHalfWidth: "denim shirt new",
                    tagText: "shirt",
                    urlText: "",
                    priceText:77,
                    haveItCondition: true,
                },
                uploadedBy: "Arefin",
                user: "Arefin",
                itemId:333,
            },
            {
                date: convert_string_date_to_UTC_date_TripzSlice('2021-12-01 11:33:19'),
                id:'444',
                itemData:{
                    amountNumber: 111,
                    categoryText: "cloth",
                    detailText: "shirt",
                    imageURL: "",
                    nameText: "shirt new denim",
                    nameTextHalfWidth: "shirt new denim",
                    tagText: "shirt",
                    urlText: "",
                    priceText:414,
                    haveItCondition: true,
                },
                uploadedBy: "Arefin",
                user: "Arefin",
                itemId:427,
            },
        ]





    ); //WILL BE LOADED FROM REDUX, ONCE SUCCESSFULLY LOGGED IN.




    const [all_Activity_Status_of_Users_State, setAll_Activity_Status_of_Users_State]
        = useState<one_User_Activity_Status_interface[]|[]>(





        [
            {
                index: 0,
                status: "Active",
                isSelected: true,
            },
            {
                index: 1,
                status: "Super Active",
                isSelected: true,
            },
            {
                index: 2,
                status: "Bored",
                isSelected: true,


            }
        ]





    ); //WILL BE LOADED FROM REDUX, ONCE SUCCESSFULLY LOGGED IN.




    const ref_User_Search = useRef<TextInput>(null);

    const [search_State, set_Search_State] = useState('');

    const displayWidth = useWindowDimensions().width;
    const displayHeight = useWindowDimensions().height;



    const generate_Button_handler = async () => {

        // const only_Selected_Group_Partner_Friends = forwardable_Group_or_PartnerList.filter(
        //     (oneBYOne: forward_From_GroupChat_Interface) =>
        //         oneBYOne.isSelected_For_Forward
        // );
    }

    const clearSearch = () => {
        // console.log('at clearSearch: ');
        set_Search_State('');

        ref_User_Search?.current?.clear();

        // setActiveChatListStateAndNotSearchState(true);

    };

    const searchFilterFunction = (text: string) => {


        set_Search_State(text);

    };



    // user_Data_State



    // Interests: {loggerPerson.interest.map((item: string) => (item !== null) && item.toLocaleLowerCase()).
    // join(', ')}.

    const allUserSName= user_Data_State.map((item: UserActivity) =>
        item.profile.name).join(', ');

    const allUserIDS= user_Data_State.map((item: UserActivity) =>
        item.toString).join(', ');


    console.log("allUserSName::",allUserSName);
    console.log("allUserIDS::",allUserIDS);


    /*
    console.log("earliestDate::",user_Data_State.earliestDate);
    console.log("user_Data_State.profile.name::",user_Data_State.profile.name);
    console.log("user_Data_State.profile.pictureUrl::",user_Data_State.profile.pictureUrl);
    */

    /*
    console.log("earliestDate::",user_Data_State.earliestDate);
    console.log("earliestDate::",user_Data_State.earliestDate);
    console.log("earliestDate::",user_Data_State.earliestDate);
    console.log("earliestDate::",user_Data_State.earliestDate);
    console.log("earliestDate::",user_Data_State.earliestDate);
    console.log("earliestDate::",user_Data_State.earliestDate);
    console.log("earliestDate::",user_Data_State.earliestDate);
    console.log("earliestDate::",user_Data_State.earliestDate);
    */

    return (

        <SafeAreaView
            style={{

                flex: 10,
                flexDirection: 'column',
            }}
        >
            <View style={user_Analyzer_Styles.container}>






                {/*teal navigator custom begins here...*/}

                <View
                    style={{
                        // flex: 0.8,
                        height: displayHeight/20,
                        backgroundColor: 'white',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                    }}
                >
                </View>


                <Header_With_Back_Handler_FilterPage
                    displayHeight={displayHeight}
                    displayWidth={displayWidth}
                    navigation={navigation} />





                {/*0.8 teal colored header ends here...*/}


                {/*Edit Filter portion begins here...*/}

                <Edit_Filter_Navigation_component_in_Filter_Page
                    displayHeight={displayHeight}
                    displayWidth={displayWidth}
                    navigation={navigation}
                />

                {/*Edit FIlter portion ends here..*/}






                {/*Search Portion begins here...*/}

                <View style={{
                    height: displayHeight/10,
                    backgroundColor: 'red',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    width: displayWidth,
                    marginBottom: 10,
                }}>


                    <View
                        style={{
                            // flex: 1,
                            height: '100%',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            width: displayWidth,
                            backgroundColor: 'white',

                        }}
                    >


                        <Search_People

                            filter_By_Text_InputState_1={search_State}
                            setSearch_1={searchFilterFunction}
                            clearSearch_1={clearSearch}
                            deviceHeight_1={displayHeight}
                            deviceWidth_1={displayWidth}
                            ref={ref_User_Search}
                        />





                        {/*partner name and image starts here*/}

                    </View>


                    {/*Users_FRom__Asset_Items_Begins__Here:*/}


                </View>


                {/*Search Portion ends her..*/}





                <View style={{
                    flex: 6,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // width: '95%',
                    borderRadius: 1,
                    // borderWidth: 2,
                    // borderColor: 'teal',

                }}

                >



                    <FlatList
                        data={filtered_Items_State}
                        numColumns={2}
                        // renderItem= {renderItemAlphabets}


                        renderItem={({item, index}) => (
                            /*<Text>{item.itemData.nameText}</Text>*/
                            <User_Items

                                currentIndex={index}
                                key={index.toString()}
                                property = {item}

                            />
                        )}
                        // keyExtractor={(index) => index.toString()}
                        keyExtractor={(item:OneUser_From_Asset_Interface, index00:number) => `${index00}+${item.itemData.nameText}`}
                        showsHorizontalScrollIndicator={false}
                        // horizontal={true}
                    />




                </View>


                {/*empty view...*/}
                <View style={{
                    flexDirection: 'column',
                    flex: 1,
                }}
                >
                </View>
                {/*empty view...*/}

            </View>
        </SafeAreaView>
    );
}

const user_Analyzer_Styles = StyleSheet.create({
    container: {
        flex: 10,
        alignItems: 'center',
        flexDirection: "column",
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    inputContainer: {
        borderTopColor: '#e5e6e9',
        borderLeftColor: '#dfe0e4',
        borderRightColor: '#dfe0e4',
        borderBottomColor: '#d0d1d5',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        width: '90%',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Filter_People_Page;
