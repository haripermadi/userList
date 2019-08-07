import { StyleSheet, Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width

export default StyleSheet.create({
  textContent :{
    color:'#fff',
    fontSize:12,
    textAlign: 'center',
    fontWeight:'bold'
  },
  containerSearch: {
    flex:0,
    marginVertical:5,
    marginTop:20,
    marginHorizontal:15,
    backgroundColor:'#ecf0f1',
    flexDirection:'row',
    borderColor: 'grey',
    borderWidth: 1,
    alignItems:'center'
  },
  inputStyles:{
    paddingHorizontal:5,
    paddingVertical:10
  },
  textTitle: {
    color:'#fff',
    fontSize:12,
    textAlign: 'center',
    fontWeight:'bold'
  },
  containerEmpty:{
    flex:1,
    marginHorizontal:15,
    marginVertical:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue'
  },
  buttonLoadMore: {
    backgroundColor:'#0652DD',
    paddingVertical:10,
    borderRadius:5,
    marginHorizontal:80,
    marginBottom:10
  },
  containerListOuter : {
    flex:1,
    marginVertical:5,
    paddingBottom:10
  }
})
