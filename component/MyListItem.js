import React, {Component,PureComponent} from 'React';
import {AppRegistry,FlatList,StyleSheet,Text,View,TouchableOpacity,Map} from 'react-native';
import flatlistData from '../data/flatlistData';

class MyListItem extends PureComponent{
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };
    render () {
        const textColor = this.props.selected ? "red" : "black";
        return(
            <TouchableOpacity onPress = {this._onPress}>
                <View>
                    <Text style = {{color: textColor}}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
class MultiSelectList extends PureComponent{
    state = {selected: (new Map()= Map(string, boolean))};

    _keyExtractor = (item,index) => item.id;

    _onPressItem = (id= string) => {
        // cac ham cap nhat uu tien cho cac cap nhat giao dich
        this.setState((state) => {
            // sao chep ban do
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // chuyen doi
            return {selected};
        });
    };  
    _renderItem = ({item}) => (
        <MyListItem
            id = {item.data}
            onPressItem = {this._onPressItem}
            selected = {!!this.state.selected.get(item.id)}
            title = {item.title}
            />
    );
    render () {
        return (
            <FlatList
            data = {flatlistData}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem = {this._renderItem}
            />
        );
    }
}