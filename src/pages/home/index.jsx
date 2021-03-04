import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import { connect } from '@tarojs/redux'
@connect(({home}) => ({
  home,
}))
export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    console.log(this.props);
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

