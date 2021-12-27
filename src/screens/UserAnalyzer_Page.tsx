import { StatusBar } from 'expo-status-bar';
import {
    FlatList,
    Image, KeyboardAvoidingView,
    Platform, SafeAreaView, ScrollView,
    StyleSheet,
    TouchableOpacity,
    useWindowDimensions,
} from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import EditScreenInfo from '../components/EditScreenInfo';

import { Ionicons } from '@expo/vector-icons';
// import Ionicons from "react-native-vector-icons/Ionicons";

import {
    Text,
    View,
} from '../components/Themed';
import {MonoText} from "../components/StyledText";
import {useState} from "react";
import StartDate from "./userAnalyzerComponents_Android/StartDate";
import EndDate from "./userAnalyzerComponents_Android/EndDate";
import CheckBoxComponent from "./userAnalyzerComponents_Android/CheckBoxComponent";
import {useAppDispatch} from "../appStore/app/hooks";
import {CommonActions} from "@react-navigation/native";


const calendarImage = require('../../assets/images/date_icon.png');

export interface UserAnalyzer_Page_Props {

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


export interface checkBox_update_for_forward__Chat {

    index: number,
    value: boolean,
}




const UserAnalyzer_Page: React.FC<UserAnalyzer_Page_Props> = ({props, navigation,}) => {
// export default function UserAnalyzer_Page() {



    const [modeStateStartTime, setModeStateStartTime] = useState('date');

    const [show_Start_State, setShowStartState] = useState<boolean>(false);



    const [show_End_State, setShowEndState] = useState(false);

    const [modeStateEndTime, setModeStateEndTime] = useState('date');

    const [start_Date_Value_State, setStartDateValueState] = useState<null | Date>(null);

    // useState(new Date());
    // const [multipleImageState, setMultipleImageState] = useState <iImageCorpPicker[] | []>([]);
    const [end_Date_Value_State, setEndtDateValueState] = useState<null | Date>(null);
    //useState(new Date());




    const dispatch = useAppDispatch();

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






    const displayWidth = useWindowDimensions().width;
    const displayHeight = useWindowDimensions().height;




    const onChangeStartDate = (event: Event, selectedDate: Date) => {



        if(event.type ==='neutralButtonPressed'){

            const currentDate = new Date();
            setShowStartState(Platform.OS === 'ios');
            setStartDateValueState(currentDate);
        }

        else {

            const currentDate = selectedDate || start_Date_Value_State;


            setShowStartState(Platform.OS === 'ios');
            setStartDateValueState(currentDate);
        }




    };



    const showMode = (currentMode:any) => {
        setShowStartState(true);
        setModeStateStartTime(currentMode);
    };

    const show_Datepicker_Start = () => {
        showMode('date');
    };



    const showModeEndDate = (currentMode:any) => {

        setShowEndState(true);
        setModeStateEndTime(currentMode);


    };

    const show_Datepicker_End_Date = () => {

        console.log('show_Datepicker_End_Date :..');
        showModeEndDate('date');
    };



    const onChangeEndDate = (event: Event, selectedDate: Date) => {



        if(event.type ==='neutralButtonPressed'){

            const currentDate = new Date();
            setShowEndState(Platform.OS === 'ios');
            setEndtDateValueState(currentDate);
        }

        else {
            // const currentDate = selectedDate || dateValueState;
            // setShow(Platform.OS === 'ios');
            // setDateValueState(currentDate);





            const currentDate = selectedDate || end_Date_Value_State;

            console.log('currentDate: ', currentDate);

            setShowEndState(Platform.OS === 'ios');
            setEndtDateValueState(currentDate);
        }





    };








    const generate_Button_handler = async () => {

        // const only_Selected_Group_Partner_Friends = forwardable_Group_or_PartnerList.filter(
        //     (oneBYOne: forward_From_GroupChat_Interface) =>
        //         oneBYOne.isSelected_For_Forward
        // );
    }





    const update_CheckBox_ = (
        index:number,
        value:boolean) => {


        const payLoad_update_Partner_Group_selected:checkBox_update_for_forward__Chat ={

            index:index,
            value:value,

        };

        console.log("payLoad_update_Partner_Group_selected: ",payLoad_update_Partner_Group_selected);

        // dispatch(update_Forward_CheckBox_Selected_Grp_Partner(payLoad_update_Partner_Group_selected));






    };






    return (

        <SafeAreaView
            style={{

                flex: 10,
                flexDirection: 'column',
            }}
        >
            <View style={user_Analyzer_Styles.container}>






                {/*teal navigator custom begins here...*/}

                <View style={{
                    flex:1.5,
                    flexDirection: "column",
                    backgroundColor: 'teal',
                    width: displayWidth,
                }}>

                    <View
                        style={{
                            height: displayHeight/14,
                            // backgroundColor: 'white',
                            backgroundColor: '#ECF0F1',
                            //'ivory',
                            // backgroundColor: 'floralwhite',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}
                        >


                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        // backgroundColor: 'orange',
                                        paddingStart: 16,
                                        width: displayWidth/6,


                                    }}
                                >


                                    {/* <TouchableOpacity
                                    onPress={() =>

                                        navigation.dispatch(CommonActions.goBack())

                                    }
                                    style={{
                                        width: (displayWidth/6) -16,
                                    }}
                                >
                                    <Ionicons
                                        name='arrow-back'
                                        size={30}
                                        color='black'
                                    />
                                </TouchableOpacity>*/}
                                </View>

                                {/*partner name and image starts here*/}

                                <View style={{

                                    width: displayWidth/1.8,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    // backgroundColor: 'red',

                                }}
                                >


                                    <View style={{

                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        width: displayWidth/6.5,
                                    }}>
                                        {/*<TouchableOpacity
                                        onPress={() =>{
                                            console.log("RPG");
                                        }}
                                    >
                                        <Image
                                            source={{
                                                uri: "https://static.toiimg.com/thumb/msid-70303061,width-800,height-600,resizemode-75,imgsize-194293,pt-32,y_pad-40/70303061.jpg",
                                            }}
                                            style={{
                                                width: displayHeight/ 16,
                                                height: displayHeight/16,
                                                justifyContent: 'center',
                                                borderRadius: (displayHeight/16) / 2,
                                                borderColor: 'grey',
                                                borderWidth: 1,


                                            }}
                                        />
                                    </TouchableOpacity>*/}
                                    </View>


                                    <View style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}>
                                        {/*   <TouchableOpacity
                                        onPress={() =>{
                                            console.log("RPG__2");
                                        }}




                                    >
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            alignSelf: 'center',
                                            color: 'black',
                                        }}>
                                            sos


                                        </Text>
                                    </TouchableOpacity>*/}
                                    </View>


                                </View>


                                {/*partner name and image starts here*/}


                            </View>
                        </View>
                    </View>


                </View>




                {/*0.8 teal colored header ends here...*/}


                <View style={{

                    // height: displayHeight / 3,
                    flex: 2,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // justifyContent: 'flex-start',
                }}>

                    <Text style={user_Analyzer_Styles.title}>User Analyzer</Text>
                    <View
                        style={{
                            borderRadius: 3,
                            paddingHorizontal: 4,
                            marginVertical: 7,

                        }}
                        darkColor="rgba(255,255,255,0.05)"
                        lightColor="rgba(0,0,0,0.05)">
                        <MonoText>Select Filters to Generate Report</MonoText>
                    </View>

                </View>



                <View style={{

                    flex: 6,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // flexDirection: 'column',
                    // height: displayHeight / 3,


                    width: '95%',

                    // margin: 10,
                    borderRadius: 1,
                    borderWidth: 2,
                    borderColor: 'teal',

                    // backgroundColor: 'gold',

                }}

                >


                    {/*Date Label begins here..*/}
                    <View
                        style={{


                            // borderWidth: 1,
                            width: '100%',

                            flexDirection: 'column',
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            height: displayHeight / 16,

                        }}
                    >
                        <View
                            style={{
                                paddingLeft: displayWidth/10,
                            }}>

                            <Text style={{
                                color: 'teal',
                                fontWeight: "bold",
                                fontSize: 20,
                            }}>Date</Text>


                        </View>

                        <View
                            style={{

                                // borderBottomColor: 'deepskyblue',
                                // borderWidth: 1,
                                width: '100%',

                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "flex-start",
                                paddingLeft: displayWidth/10,
                                // height: displayHeight / 16,

                            }}
                        >
                            <Text style={{color: 'grey'}}> ──────────────────────────</Text>
                        </View>

                    </View>

                    {/*Date Label Ends here..*/}






                    {/*start date begins here*/}

                    <StartDate
                        totalHeight={displayHeight}
                        totalWidth={displayWidth}
                        startDateValueState2={start_Date_Value_State}
                        showStartState2={show_Start_State}
                        showDatepickerStart2={show_Datepicker_Start}
                    />

                    {/*start date ends here*/}

                    {/*end date starts here*/}
                    {/*999*/}

                    <EndDate
                        totalHeight={displayHeight}
                        totalWidth={displayWidth}
                        endDateValueState2={end_Date_Value_State}
                        showEndState2={show_End_State}
                        showDatepickerEndDate2={show_Datepicker_End_Date}
                    />

                    {/*end date ends here*/}






                    {/*Status Label begins here...*/}



                    <View
                        style={{

                            // borderBottomColor: 'deepskyblue',
                            // borderWidth: 1,
                            width: '100%',

                            flexDirection: 'column',
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            height: displayHeight / 16,

                        }}
                    >
                        <View
                            style={{
                                paddingLeft: displayWidth/10,
                            }}>

                            <Text style={{
                                color: 'teal',
                                fontWeight: "bold",
                                fontSize: 20,
                            }}>Status</Text>


                        </View>

                        <View
                            style={{

                                // borderBottomColor: 'deepskyblue',
                                // borderWidth: 1,
                                width: '100%',

                                flexDirection: 'row',
                                alignItems: "center",
                                justifyContent: "flex-start",
                                paddingLeft: displayWidth/10,
                                // height: displayHeight / 16,

                            }}
                        >
                            <Text style={{color: 'grey'}}> ──────────────────────────</Text>
                        </View>

                    </View>

                    {/*Status Label ends here...*/}





                    {/*CheckBOx Flat LIst begins here...*/}
                    <View
                        style={{

                            // borderBottomColor: 'deepskyblue',
                            // borderWidth: 1,
                            width: '100%',

                            flexDirection: 'column',
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            // backgroundColor: 'deepskyblue',
                            paddingLeft: displayWidth/10,

                            // height: displayHeight / 16,

                        }}
                    >
                        <FlatList
                            data={all_Activity_Status_of_Users_State}
                            renderItem={({item, index}) => (
                                <CheckBoxComponent
                                    size= {25}
                                    keyValue= {2}
                                    selectedArrayObject= {update_CheckBox_}
                                    checked= {item.isSelected}
                                    color= "teal"
                                    labelColor= "grey"
                                    label= {item.status}
                                    // label2= {item.partner_Or_Group_Type}
                                    value= {item.status}
                                    index= {index}
                                />
                            )}


                            keyExtractor= {(item, index) => `${item.status}${item.index}`}

                            numColumns={1}

                            extraData={all_Activity_Status_of_Users_State}
                        />
                    </View>

                    {/*CheckBOx Flat LIst ends here...*/}



                    {/*Generate Button begins here...*/}



                    <View style={{
                        flexDirection: 'column',
                        flex: 1.3,
                    }}
                    >

                        <TouchableOpacity

                            style={

                                {
                                    height: 45,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 20,
                                    width: displayWidth/2,
                                    borderRadius: 9,
                                    alignContent: "center",
                                    alignSelf: "center",
                                    backgroundColor: ((end_Date_Value_State === null) &&(start_Date_Value_State === null)) ? 'teal':'black',
                                }}
                            onPress={generate_Button_handler}
                            // disabled={buttonDisabledState}

                            disabled={((end_Date_Value_State === null) &&(start_Date_Value_State === null))}

                        >


                            <Text style={{

                                color: 'white',
                                textAlign: 'center',
                                alignSelf: 'stretch',
                                fontSize: 16,
                            }}>
                                {((end_Date_Value_State === null) &&(start_Date_Value_State === null))? 'Generate' :'Generated'}
                            </Text>
                        </TouchableOpacity>
                    </View>





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
        // justifyContent: 'center',
        flexDirection: "column",
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        // alignItems: "center",
        // flex:1,
        // flexDirection: "row",
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
        // height: displayHeight/16,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',


        // elevation: 2,
    },
});





export default UserAnalyzer_Page;
