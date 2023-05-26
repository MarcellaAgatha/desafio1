import { StyleSheet} from "react-native";
const styles=StyleSheet.create({
    formularioContext:{
        width: "200%",
        height: "180%",
        bottom: 0,
        backgroundColor:"#ff66cc",
        borderTopLeftRadius: 5,
        borderTopRightRadius:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        marginTop:45,

    },

    form:{
        width:"100%",
        height:"100%",
        marginTop:70,
        padding:10,
    
    },
    titulos:{
        color:"red",
        fontSize: 24,
        fontfamily:"time",
        fontWeight:"bold",
        paddingLeft: 10,
    },
    caixa:{
        width:"90%",
        backgroundColor:"#00FF00",
        borderRadius:5,
        margin:12,
        paddingLeft: 10,
        height: 40,
    },

    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        paddingTop: 14,
        marginLeft: 12,
        marginRight: 12,
        backgroundColor:"#ffff66"
    },

    textbuttoncalculator:{
        fontSize: 20,
        color:"#3333ff",
        fontWeight:"bold",
        textAlign:"center",
        width:"100%",
     },






})

export default styles 
    