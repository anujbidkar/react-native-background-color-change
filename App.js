

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App =  () => {

  const [randomColor,setRandomColor] = useState('rgb(32,0,126)');
 const changeBg = () =>{

   const color = "rgb("+
   Math.floor(Math.random()*256)+
   "," +
   Math.floor( Math.random()*256)+
   "," +
   Math.floor( Math.random()*256)+")";
  // console.warn(color);
   setRandomColor(color);
  
   
 }

 const resetFunction = () =>{
  setRandomColor('#000');

 };
  return (
    <>
     
      <StatusBar backgroundColor={randomColor}/>
       
         <View style={[styles.container,{backgroundColor:randomColor}]}>
            <TouchableOpacity 
            onPress={changeBg}>
            <Text style={styles.anuj}>Tap Me</Text>

            </TouchableOpacity>
           
            <TouchableOpacity 
            onPress={resetFunction}
            style={styles.secondButton}
            >
              
            <Text style={styles.anuj}>Reset</Text>

            </TouchableOpacity>
            
         </View>
   
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#cae4db"

    // backgroundColor:'red',
  },
  anuj:{
    color:'white',
    fontSize:30,
    textAlign:"center",
    backgroundColor:"#f37121",
    paddingVertical:10,
    paddingHorizontal:40,
    borderRadius:25,
    textTransform:"uppercase"


  },
  secondButton:{
    marginTop:20
  }


  
  
});

export default App;
