import {Text, View} from "../../components/Themed";
import {Image, Platform, TouchableOpacity} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const calendarImage = require('../../../assets/images/date_icon.png');
export interface StartDate_Props {
    totalHeight: number,
    totalWidth: number,
    startDateValueState2:null | Date,
    showStartState2:boolean,
    showDatepickerStart2:()=>void,
}

const StartDate: React.FC<StartDate_Props> = ({
                                                  totalHeight,
                                                  totalWidth,
                                                  startDateValueState2,
                                                  showStartState2,
                                                  showDatepickerStart2,

                                              }) => {

    return(

        <View style={{
            flexDirection: 'row',

            width: '95%',
            marginBottom: 20,
            alignItems: 'center',
            height: totalHeight / 16,
            // backgroundColor: 'indigo',

        }}>

            <View
                style={{
                    width: '24%',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: totalWidth/10,
                }}
            >
                <Text style={{
                    color: 'teal',
                    fontWeight: "bold",
                    fontSize: 16,
                }}>From</Text>
            </View>

            <TouchableOpacity

                onPress= {showDatepickerStart2}
                style={{
                    height: 40,
                    width: '72%',
                    borderColor: 'teal',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    borderRadius: 0,
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    flex: 3,
                    justifyContent: "flex-start"
                }}>
                    <View style={{

                        paddingLeft: 20,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    >
                        <Image
                            style={{
                                height: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: 30,

                            }}
                            source={calendarImage}
                        />
                    </View>
                    <View style={{

                        paddingLeft: totalWidth/3,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    >
                        <Text style={{

                            alignSelf: 'center',
                            color: '#757575',
                        }}>
                            {
                                (startDateValueState2 === null)
                                    ? 'Start date'
                                    :startDateValueState2.toDateString()
                            }
                        </Text>
                    </View>

                </View>






                {(showStartState2 &&
                    <DateTimePicker
                        testID="dateTimePickerStartDate"
                        timeZoneOffsetInMinutes={0}
                        // @ts-ignore
                        is24Hour={true}
                        // @ts-ignore
                        onChange={onChangeStartDate}
                        // neutralButtonLabel='clear'

                        neutralButtonLabel='cancel'
                        value = {
                            (startDateValueState2 === null)
                                ? new Date()
                                :(startDateValueState2)

                        }
                        // @ts-ignore
                        mode={modeStateStartTime}

                        display= {(Platform.OS==="android")
                            ?"default"
                            :"compact"}

                        textColor='crimson'
                    />
                )}



            </TouchableOpacity>
        </View>
    );
}

export default StartDate;
