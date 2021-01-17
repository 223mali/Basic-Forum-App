
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Layout, Text, Icon, Button } from "@ui-kitten/components";
import InputField from "../../components/common/form/input-field";

export default function LoginPage() {
    const [state, setState] = useState({})


    const handleChange =(data, name) =>{
        setState(state=>({...state, [name]: data}))
        console.log(state)
    }

    

  return (
    <Layout style={styles.root}>
      <Layout style={styles.header}>
        <Text style={styles.textHeader}>Hello</Text>
        <Text style={styles.textSubHeading}>Sign in to your account</Text>
      </Layout>

      <Layout  style={styles.form}>
        <InputField name='email'
        onChange={handleChange}
        label = 'Email'
        placeholder = 'Enter Email'
         />
        <InputField name='password' 
        onChange={handleChange}
        label = 'Password'
        placeholder = 'Enter Password'

        />
      </Layout>

      <Layout style={styles.buttons}>
      <Button style={styles.buttons}>
        <Text>BUTTON</Text>
      </Button>

      <TouchableOpacity>
          <Text>Don't have an account? Click here to register</Text>
      </TouchableOpacity>
      </Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {
    // backgroundColor: "#000",
    flex:1,
    // alignSelf:'stretch'

  },
  header:{
      backgroundColor:'#3366FF',
      color: 'white',
      justifyContent:'center',
      alignItems: 'center',
      flex:1,
    //   alignSelf: 'stretch',
    //   height:200
  },
  textHeader:{
      fontSize:28,
      color:'#fff'
  },
  textSubHeading:{
    fontSize:18,
    color:'white'
},
  form:{
      flex:3,
      marginTop: 50
    //   height:1000

  },
  buttons:{
    flex:1,
    marginTop: 50
  //   height:1000

},
button:{
    
    paddingHorizontal: 30,

},
});
