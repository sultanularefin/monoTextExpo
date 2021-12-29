import React, {} from 'react';

import {
    Animated,
    Dimensions,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { Ionicons,Feather } from '@expo/vector-icons';

import moment from 'moment';
import {User_Items_Props} from "./User_Items";
const defaultImage = require('./../../../assets/default-image_01.jpg');
const videoImage = require('./../../../assets/video-image.png');
export interface OneUser_View_withOther_Components_Props{
    property2:{
        user: string,
        uploadedBy: string,
        date: Date,
        itemId: number,//number[],


        itemData:{
            urlText: string,
            imageURL: string,//string[],
            nameText: string,
            tagText: string,
            detailText: string,
            categoryText: string,
            amountNumber: Number,
        }
        id: string,
    },
    currentIndexLast:number,

    ImageResource:string,


    // contentType:string,
    index: number,

}

// const User_Items: React.FC<User_Items_Props> =  (props) => {
const OneUser_View_withOther_Components: React.FC<OneUser_View_withOther_Components_Props> =  (props) => {




    const index = props.currentIndexLast;
    const deviceWidth =   Dimensions.get('window').width;
    const deviceHeight =  Dimensions.get('window').height;

    let dateWithMoment = moment(props.property2.date).format('ll');


    console.log("props:__OneUser_View_withOther_Components___ ",props);


    return (



            <ImageBackground
                style={{
                    width: (deviceWidth/2)-15,
                    height: deviceHeight/4,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',



                    marginHorizontal: 5,
                    marginVertical: 5,


                }}
                source={{uri: props.ImageResource}}
                // source={{uri: "https://cdn.zmescience.com/wp-content/uploads/2015/01/Bright-ideas-The-evolution-of-natural-colours.jpg"}}
            >
                <View style={{
                    flexDirection: 'column',
                    width: '100%',
                    height: 50,
                    backgroundColor: '#FFFFFF',
                    opacity: 0.6,
                }}>
                    <ScrollView
                        horizontal={true}
                    >
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                        }}
                        >
                            <Text style={{
                                color: '#000000',
                                fontWeight: '500',
                                fontSize: 16,

                            }}>{' '}{props.property2.itemData.nameText}, {' '}
                                {props.property2.itemData.categoryText},{' '}
                                {props.property2.itemData.amountNumber}
                            </Text>
                        </View>
                    </ScrollView>

                    {/* horizontal row view */}
                    <View style={{
                        flexDirection: 'row-reverse',
                    }}>

                        <TouchableOpacity style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',


                        }}

                                          onPress={() => {
                                              console.log("itemToBeDeletedLocal");

                                          }
                                          }
                        >

                            <View style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 5,
                                paddingBottom: 1

                            }}>
                                <Feather
                                    name='trash-2'
                                    // name='ios-trash-outline'
                                    size={25}
                                    style={{color: '#000000', top: '.8%'}}

                                />
                            </View>

                        </TouchableOpacity>

                        <View style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-end',

                        }}>
                            <Text style={{
                                color: '#000000',
                                fontWeight: '500',
                                fontSize: 16,
                                textAlign: 'right',
                                paddingRight: 5,

                            }}
                            >{dateWithMoment}{' '}


                            </Text>
                        </View>


                    </View>


                </View>
            </ImageBackground>

    );

}

export default OneUser_View_withOther_Components;