import React, { Component } from 'react'
import { Text, View, TextInput, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './style'
import axios from 'axios'
import Cards from '../../components/Cards'
import Header from '../../components/Header'

export class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users:[],
      search: '',
      page: 1,
      loading:false
    }
  }

  componentDidMount () {
    this.handleFetchData()
  }

  handleFetchData = async () => {
    try {
      let url = `https://api.github.com/search/users?q=a&page=${this.state.page}`
      console.log('FETCH----url---', url)
      const response = await axios.get(url);
      console.log('RES------',response)
      if(response.status === 200) {
        this.setState({
          users:[...this.state.users, ...response.data.items]
        })
      }
    } catch (error) {
      console.error('errcatch-----',error);
      Alert.alert('Error','Try again later')
    }
  }

  loadMore(){
    if (!this.state.loading) {
      this.setState({
        page: this.state.page + 1
      },() => {
        this.handleFetchData()
      })
    }
  }

  renderSearch() {
    return (
      <View style={styles.containerSearch}>
        <View style={{flex:1}}>
          <TextInput
          style={styles.inputStyles}
          onChangeText={(text) => this.setState({search:text})}
          value={this.state.search}
          maxLength={20}
          multiline={false}
          placeholder={'Search by username'}
        />
        </View>
        <View style={{flex:0,paddingHorizontal:10}}>
          <Icon name={'magnify'} color={'#0652DD'} size={25} />
        </View>
    </View>
    )
  }

  renderList() {
    let result = []
    let dataUsers =  this.state.users
    console.log('renderlist---', dataUsers)
    dataUsers.map((item, index) => {
      let wordSearch = new RegExp(this.state.search.toLowerCase() + '.*')
      if (item.login.toLowerCase().match(wordSearch)) {
        result.push(item)
      }
    })
    console.log('renderlist-result--', result)
    if(result.length > 0 ) {
      return (
        <View 
        style={styles.containerListOuter}
        >
          <FlatList
          contentContainerStyle={{ paddingBottom: 20}}
          data={result}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({item, index}) => (
            <Cards 
            key={index} 
            data={item} 
            i={index} 
            />
          )}
          />
          {
            result.length > 10  ? 
          <TouchableOpacity style={styles.buttonLoadMore}
          onPress={() => this.loadMore()}
          >
            <Text style={styles.textContent}>Load More</Text>
          </TouchableOpacity>
          : null
          }
        </View>
      )
    } else {
      return (
        <View style={styles.containerEmp}>
          <Text style={styles.textTitle}>Data tidak ditemukan</Text>
        </View>
      )
    }
  }

  render() {
    console.log('renderHome---state-------',this.state,'--props---', this.props)
    return (
      <View style={{
        flex:1,
        backgroundColor:'#fff'
      }}>
        <Header headerText={'Github Users'}/>
        <ScrollView>
        {this.renderSearch()}
        {this.state.users.length > 0 ?this.renderList(): (
          <View style={styles.containerEmp}>
          <Text style={styles.textTitle}>Data tidak ditemukan</Text>
        </View>
      )}
      </ScrollView>
      </View>
    )
  }
}


export default Home
