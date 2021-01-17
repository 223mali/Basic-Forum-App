import React from 'react';
import {StyleSheet} from 'react-native'
import { Icon, Input } from '@ui-kitten/components';

const styles = StyleSheet.create({
    icon: {
      width: 32,
      height: 32,
    },
    field:{
        paddingHorizontal: 30,
        // width: "80%"
    }
  });

export default function InputField({name, value,label, placeholder, caption, accessoryRight, captionIcon, secureTextEntry, onChange}){
    const renderIcon = (name)=>{
        return (
            <Icon 
            style={styles.icon}
            fill='#8F9BB3'
            name={name? name : ''}
            />
        )
    }
    return(
        <Input
        value={value}
        label={label}
        placeholder={placeholder}
        caption={caption}
        accessoryRight={accessoryRight}
        captionIcon={captionIcon}
        secureTextEntry={secureTextEntry}
        onChangeText={(text)=>{onChange(text, name)}}
        style={styles.field}
      />
    )
}
