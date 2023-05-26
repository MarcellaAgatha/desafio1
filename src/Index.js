import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./style.js"



export default function Formulario(){
return(        
<View >
        <View style={styles.formularioContext}>
            

            <Text style={styles.titulos}>Nome e Sobrenome</Text>
            <TextInput style={styles.caixa} placeholder="Ex: MARIA" keyboardType="numeric"/>
            
            
            <Text style={styles.titulos}>Telefone</Text>
            <TextInput style={styles.caixa} placeholder="Ex:(11)950408020 " keyboardType="numeric"/>

            <Text style={styles.titulos}>E-mail</Text>
            <TextInput style={styles.caixa} placeholder="Ex:juliimendes@gmail.com " keyboardType="numeric"/>
            
            <TouchableOpacity style={styles.buttonCalculator} >
            <Text style={styles.textbuttoncalculator}  >Enviar</Text>
            </TouchableOpacity>
        </View>
        
    </View>
)
}