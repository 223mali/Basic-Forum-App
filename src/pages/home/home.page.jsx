import React from "react";
import {SafeAreaView, Text} from 'react-native'
import Header from "../../components/header/header";

const HomePage = () => {

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <SafeAreaView>
      <Header _goBack={_goBack} _handleSearch={ _handleSearch}   _handleMore={_handleMore} title='Feed' />
    </SafeAreaView>
  )

};


export default HomePage 