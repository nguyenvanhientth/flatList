import React, {Component} from 'React';
import {AppRegistry,FlatList,StyleSheet,Text,View} from 'react-native';
import flatlistData from '../data/flatlistData';

export default class BasicFlatlist extends Component{
    render(){
        return(
            <View style = {{flex:1, marginTop:20}}>
                <FlatList 
                data = {flatlistData}
                renderItem={({item}) => <Text>{item.key}:{item.name}</Text> }
                >
                </FlatList>
            </View>
        );
    }
}