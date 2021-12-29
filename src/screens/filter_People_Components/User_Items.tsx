import React, {
    useEffect,
    useState
} from 'react';

import {
    Text,
    StatusBar,
    TextInput,
    View,
    StyleSheet,
    Button,
    Alert,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    Switch,
    Animated
} from 'react-native';

import { Ionicons,Feather } from '@expo/vector-icons';

import OneUser_View_withOther_Components from "./OneUser_View_withOther_Components";


export interface User_Items_Props{
    property:{
        user:string,
        uploadedBy:string,
        date: Date,
        itemId: number, //number[],
        itemData:{
            urlText:string,
            imageURL: string, //string[],
            nameText:string,
            tagText:string,
            detailText:string,
            categoryText:string,
            amountNumber:Number,
        }
        id: string,
    },
    currentIndex:number,


}


const User_Items: React.FC<User_Items_Props> =  (props) => {


    const deviceWidth = Dimensions.get('window').width;



    const index = props.currentIndex;

    const close1 = () => {
        console.log('.....close1...');
    };


    let finalImageResouce ="https://image.freepik.com/free-psd/christmas-tree-armchair-3d-rendering_429483-293.jpg";




    // if (localIndex === 0) {
    const oneElement = props.property;
    const lastIndex2 = props.currentIndex;

    return (
       <OneUser_View_withOther_Components
            key={index.toString()}
            ImageResource = {finalImageResouce}
            currentIndexLast ={lastIndex2}
            property2 =  {oneElement}
            index = {index}
        />


    );

}


export default User_Items;


const ListOfImagesStyles = StyleSheet.create({



});

