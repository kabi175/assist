export const goBack = (navigation) => {
  if (navigation.canGoBack()) {
    navigation.goBack()
  } else {
    navigation.navigate('HomeStack', { screen: 'Home' })
  }
}

export default null
