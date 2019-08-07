import React from 'react'
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Cards = (props) => {
  return (
    <TouchableOpacity style={styles.containerMain}>
      <View style={styles.containerImage}>
        <Image source={{uri:props.data.avatar_url}} style={styles.thumbnailStyle}/>
      </View>
      <View style={styles.containerView}>
        <Text style={styles.textTitle}>{props.data.login}</Text>
        <Text style={styles.textContent}>{props.data.html_url}</Text>
      </View>
      <View style={styles.containerIcon}>
      <Icon name={'chevron-right'} color={'#0652DD'} size={25} />
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  containerMain : {
    flex:1,
    backgroundColor:'#fff',
    padding:5,
    marginHorizontal:5,
    marginVertical:1,
    borderWidth : 1,
    borderColor : '#ddd',
    borderRadius : 2,
    borderBottomWidth:0,
    shadowColor : '#000',
    shadowOffset : {width:0,heigth:2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation : 1,
    flexDirection:'row'
  },
  containerImage:{
    flex:0,
    padding:5,
    backgroundColor:'#fff',
    borderRadius:50
  },
  thumbnailStyle :{
    width:screenWidth * 0.1,
    height:screenHeight * 0.05,
    borderRadius:50
  },
  containerView:{
    flex:1,
    backgroundColor:'#fff',
    paddingHorizontal:5,
    marginHorizontal:5
  },
  textTitle: {
    color:'#000',
    fontSize:12,
    // textAlign: 'center',
    fontWeight:'bold',
    paddingTop:5,
    paddingBottom:5
  },
  textContent: {
    color:'#000',
    fontSize:12,
    paddingBottom:5
  },
  containerIcon:{
    flex:0,
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:5,
  }
}

export default Cards