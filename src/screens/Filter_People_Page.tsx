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


const calendarImage = require('../../assets/images/date_icon.png');

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


export interface checkBox_update_for_forward__Chat {

    index: number,
    value: boolean,
}




const Filter_People_Page: React.FC<Filter_People_Page_Props> = ({props, navigation,}) => {



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

                {/*Teal begins here.. 2nd iteration*/}
                <View style={{
                    height: displayHeight/10,
                    // backgroundColor: 'white',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    backgroundColor: 'teal',
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
                            backgroundColor: 'blue',

                        }}
                    >




                        {/*partner name and image starts here*/}


                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                backgroundColor: 'teal',
                                paddingStart: 16,
                                width: displayWidth/6,


                            }}
                        >


                            <TouchableOpacity
                                onPress={() =>

                                    navigation.dispatch(CommonActions.goBack())

                                }
                                style={{
                                    width: (displayWidth/6) -16,
                                }}
                            >
                                <Ionicons
                                    name='arrow-back-sharp'
                                    size={40}
                                    color='white'
                                />
                            </TouchableOpacity>
                        </View>



                        <View style={{

                            flexDirection: 'column',
                            justifyContent: 'center',
                            backgroundColor: 'teal',
                            // paddingStart: 16,
                            width: (displayWidth- (displayWidth/6)),


                        }}
                        >







                        </View>

                        {/*partner name and image starts here*/}

                    </View>



                </View>










                {/*0.8 teal colored header ends here...*/}


                {/*Edit Filter portion begins here...*/}

                <View style={{
                    height: displayHeight/10,
                    // backgroundColor: 'white',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    backgroundColor: 'white',
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




                        {/*partner name and image starts here*/}
                        <View style={{

                            flexDirection: 'column',
                            justifyContent: 'center',
                            // backgroundColor: 'orange',
                            backgroundColor: 'white',
                            // paddingStart: 16,
                            width: '55%',


                        }}
                        >
                        </View>




                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                // backgroundColor: 'red',
                                // paddingStart: 16,
                                width: '45%',
                                alignItems: 'flex-start',
                                alignSelf: 'center',
                                alignContent: 'flex-start',


                            }}
                        >

                            <TouchableOpacity
                                onPress={() =>

                                    navigation.dispatch(CommonActions.goBack())

                                }
                                style={{
                                    // width: '45%',
                                }}
                            >
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                                >


                                    <View style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        width: '60%',
                                    }}>

                                        <Text style={{
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            alignSelf: 'flex-start',
                                            color: 'teal',
                                        }}>
                                            Edit Filter


                                        </Text>

                                    </View>

                                    <View style={{
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        width: '30%',
                                        // backgroundColor: 'tomato',
                                    }}>

                                        <MaterialCommunityIcons
                                            name='tune'
                                            size={40}
                                            color='teal'
                                        />

                                    </View>

                                </View>

                            </TouchableOpacity>



                        </View>




                        {/*partner name and image starts here*/}

                    </View>



                </View>
                {/*Edit FIlter portion ends here..*/}






                {/*Search Portion begins here...*/}

                <View style={{
                    height: displayHeight/10,
                    backgroundColor: 'red',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    // backgroundColor: 'white',
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



                </View>


                {/*Search Portion ends her..*/}









                <View style={{
                    flex: 6,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '95%',
                    borderRadius: 1,
                    borderWidth: 2,
                    borderColor: 'teal',
                }}

                >







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
