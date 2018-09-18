import React, {Component} from 'React';
import {AppRegistry,FlatList,StyleSheet,Text,View,Image,Alert,Dimensions,Platform,TextInput} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatlistData from '../data/flatlistData';

var screen = Dimensions.get('window');
export default class AddItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            newName : '',
            newId:''
        };
    }
    showAddItem = ()=> {
        this.refs.myModal.open();
    }
// tạo key random string
/*
    generateKey = (numberOdCharacter) => {
        return require('random-string')({length: numberOfCharacter});//can install random-string
    }
*/
    render(){
        return(
            <Modal
                ref = "myModal" 
                style ={{
                justifyContent: 'center',
                borderRadius: Platform.OS !== 'ios' ? 0 : 30,
                shadowRadius:10,
                width: screen.width -80,
                height: 250,
            }}
            position = 'center'
            backdrop ={true}
            onClosed = {() =>{
                alert('Modal closed!');
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign:'center',
                    marginTop: 40
                }}>
                    New Ca si moi !!
                </Text>
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight:30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                }}
                    placeholder = "Nhap id ca si moi!"
                    onChangeText = {(text) => this.setState({newId: text})}
                    value = {this.state.newId}
                    />
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight:30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                }}
                    placeholder = "Nhap ten ca si moi!"
                    onChangeText = {(text) => this.setState({newName: text})}
                    value = {this.state.newName}
                    />
                <Button 
                    style = {{ fontSize: 18, color: 'mediumseagreen' }}
                    containerStyle = {{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroupcolor: 'gray'
                    }}
                    onPress = {() => {
                        if (this.state.newId.length == 0 || this.state.newName.length == 0) {
                            alert("Ban chua nhap id hoac ten ca si");
                            return;
                        }
                        const nameCasi = {
                            //key :this.generateKey(24) //tao key random
                            key: this.state.newId,
                            name: this.state.newName,
                            imageUrl: "https://png.pngtree.com/element_origin_min_pic/17/02/20/68a10bb07322242921d6bd70fbbd1752.jpg"
                        }
                        flatlistData.push(nameCasi);
                        //this.props.parenFlatlist.resetFlatList(newKey) //co newKey: this.generateKey(24) 
                        this.refs.myModal.close();
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}