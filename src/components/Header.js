import React, { Component } from 'react'
import { Text, View} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = (props) => {
  const { textStyle, viewStyle} = styles
  return (
    <View style={viewStyle}>
      <View style={styles.containerText}>
      <Text style={textStyle}>{props.headerText}</Text>
      </View>
      <View style={styles.containerIcon}/>
    </View>
  )
}

const styles = {
  textStyle : {
    fontSize : 20
  },
  viewStyle : {
    flex:0,
    backgroundColor : '#fcfcfc',
    justifyContent : 'center',
    alignItems: 'center',
    paddingTop:30,
    height: 70,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {width:0, height:2},
    position:'relative',
    elevation:2,
    flexDirection:'row'
  },
  containerIcon:{
    flex:0,
    marginHorizontal:10
  },
  containerText:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
}

export default Header
