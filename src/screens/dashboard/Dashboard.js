/* eslint-disable prettier/prettier */
import React , { useMemo, useRef, useState } from 'react'
import {Text,View,StyleSheet,Image,TouchableOpacity,StatusBar,ScrollView, Touchable, FlatList, Dimensions, Pressable} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome'
import {dummyData} from '../../constants'
import { ProfitIndicator,ActionCenter } from '../../components'
import { IconButton, RadioButton } from 'react-native-paper'
import { Icon as IconPaper, MD3Colors } from 'react-native-paper';
import Logo from '../../components/svg/LOGO'
import LOGOwhite from '../../components/svg/LOGOwhite'
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import AddtodoForm from '../../components/AddtodoForm'
import LoginButton from '../../components/Buttons/LoginButton'
import * as yup from 'yup';
import CostomFormik from '../../components/costomFormik/CostomFormik'
import Fonts from '../../../src/assets/fonts';
import AppInput from '../../components/Inputs/AppInput'
import { Colors } from '../../theme'
const initialValues = {
    email: '',
    password: '',
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .trim()
      .email('Please enter a valid email address')
      .required('Email address is required'),
    password: yup
      .string()
      .trim()
      .min(4, 'password is too short!')
      .required('Password is required'),
  });

const Dashboard = () =>{
    const [checked, setChecked] = React.useState('first');
    const sheetRef = useRef(null);
    const [whoIsClicked, setwhoIsClicked] = useState("add")
    const handleLogin = (values, formikActions) => {

          formikActions.setSubmitting(false);



      };
    return (

        <View style={{flex:1}} >
        {/* <AppLoader/> */}

            {/* Statusbar */}
            <StatusBar barStyle='light-content' translucent={true} backgroundColor='transparent' />
            {/* Header section */}
            <LinearGradient start={{x:0.0,y:0.4}} end={{x:0.5,y:1.0}} location={[0,1]} colors={['#2D97DA','#2249D6']} style={{flex:0.8,flexDirection:'column',
            borderBottomLeftRadius:5,borderBottomRightRadius:5
            }} >
                <View style={{flexDirection:'column',marginTop:hp('5%'),paddingHorizontal:'2%'}} >
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'}} >

                </View>



                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
                        {/* Amount */}
                        <View style={{flexDirection:'column'}} >
                            <Text style={{color:'#fff',fontSize:28,fontFamily:'Roboto-Bold'}} > <IconButton
      icon="sort-variant"
      iconColor={"white"}
      size={30}
      onPress={() => console.log('Pressed')}
    /></Text>
                            {/* <Text style={{color:'rgba(255,255,255,0.3)',fontFamily:'Roboto-Regular-Italic',fontSize:14}} >Updated 2 mins ago</Text> */}
                        </View>

                        {/* profit loss indicator */}
                        <LOGOwhite
                    width={Dimensions.get('window').width*0.1}
                    height={Dimensions.get('window').height*0.1}
                    />
      <IconButton
      icon="shape-square-plus"
      iconColor={"white"}
      size={30}
      onPress={() => {
        setwhoIsClicked("add")
        sheetRef.current.open()}}
    />
                </View>
            </View>

            </LinearGradient>

            {/* Body section */}
            <View style={{flex:2.5,backgroundColor:'#fff',paddingHorizontal:wp('5%')}} >
                {/* Action Center */}
                <View style={{flexDirection:'row',backgroundColor:'#fff',height:hp('13%'),width:'100%',alignItems:'center',justifyContent:'space-around',borderRadius:10,borderWidth:1,borderColor:'rgba(255,255,255,0.1)',elevation:10,shadowColor:'#000',shadowRadius:10,marginTop:-50}} >

                    {/* <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}} >
                        <Image style={{height:60,width:60}} source={require('../assets/icons/top-up.png')} />
                        <Text style={{fontSize:15,fontFamily:'Roboto-Bold',color:'#333'}} >Top-up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}} >
                        <Image style={{height:60,width:60}} source={require('../assets/icons/top-up.png')} />
                        <Text style={{fontSize:15,fontFamily:'Roboto-Bold',color:'#333'}} >Top-up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'column',alignItems:'center'}} >
                        <Image style={{height:60,width:60}} source={require('../assets/icons/top-up.png')} />
                        <Text style={{fontSize:15,fontFamily:'Roboto-Bold',color:'#333'}} >Top-up</Text>
                    </TouchableOpacity> */}

                    <ActionCenter stats="421" title_text="Overdue" />
                          <ActionCenter stats="81" title_text="To Do" />


                    <ActionCenter stats="72" title_text="open" />

                    <ActionCenter stats="51" title_text="Due Today" />

                </View>


                {/* My Assets */}
                <View style={{flexDirection:'column', marginTop:20, marginBottom:20}} >
                    {/* Text and button */}
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}} >
                        <Text style={{fontFamily:'Roboto-Medium',color:'#64748B',fontSize:14}} >Due today</Text>
                        <TouchableOpacity onPress={() =>{
                             setwhoIsClicked("sort by")
                             sheetRef.current.open()}}>
  <View style={{ flexDirection: 'row', alignItems: 'center'}}>
    <Text style={{ fontFamily: 'Roboto-Medium', color: '#64748B', fontSize: 14 }}>
      Sort By
    </Text>
    <IconPaper
      source="sort-variant"
      color={"#64748B"}
      size={20}
    //   onPress={() => console.log('Pressed')}
    />
  </View>
</TouchableOpacity>

                    </View>


                    {/* Horizontal asset slider */}


                </View>


                {/* Market */}
                <View style={{flex:1,flexDirection:'column'}} >
                    {/* market text */}


                    {/* coin list */}
                    <FlatList
                        keyExtractor={(item)=>item.id}
                        data={dummyData.coins}
                        renderItem={({item})=>(
                            <View style={{flexDirection:'row',height:hp('10%'),width:'100%',borderWidth:1,borderColor:'#ddd',borderRadius:15,justifyContent:'space-between',paddingRight:10,marginBottom:10}} >
                                {/* Coin image ,coin name and symbol */}
                                <View style={{flexDirection:'row',alignItems:'center'}} >
                                    {/* Coin image */}
                                    <Image style={{height:'65%'}} resizeMode="contain" source={item.image} />

                                    {/* Coin symbol */}
                                    <View style={{flexDirection:'column',justifyContent:'flex-start'}} >
                                        <Text style={{fontFamily:'Roboto-Medium',color:'#333',fontSize:20}} >{item.currency}</Text>
                                        <Text>BNB/USDT</Text>
                                    </View>
                                </View>


                                {/* Coin price and indicator */}
                                <View style={{flexDirection:'column',backgroundColor:'#fff',alignContent:'center',justifyContent:'center'}} >
                                    {/* price */}
                                    <Text style={{fontFamily:'Roboto-Medium',fontSize:14,color:'#333'}} >${item.amount}</Text>

                                    {/* indicator */}
                                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
                                        <Text style={{color: item.type =="I" ? 'green':'red',fontFamily:'Roboto-Bold',fontSize:12}} >{item.changes}</Text>

                                        <Icon name={item.type == "I" ? 'chevron-circle-up':'chevron-circle-down'} color={item.type == "I" ? 'green':'red'} />

                                    </View>
                                </View>

                            </View>
                        )}
                    />

                </View>


                <BottomSheet ref={sheetRef} closeOnDragDown={true}
                height={ whoIsClicked == "add" ? Dimensions.get("screen").height*0.8
                :
                Dimensions.get("screen").height*0.4
                }
                 >



      {
        whoIsClicked == "add" ?
        <>
        <View style={styles.socialButtonsContainer}>

    {/* <GoogleSvg width={20} height={20} /> */}

    <Text
   style={{
    color:"black",
    fontSize:16,
        // margin:20,
        fontWeight:"bold"
   }}
   >
    New item :
   </Text>


  <View >

  <View style={styles.socialButton}>
    {/* <GoogleSvg width={20} height={20} /> */}
    <Pressable
    onPress={()=>sheetRef.current.close()}
    >
      <Text style={styles.socialButtonLabel}> Clean</Text>
    </Pressable>
  </View>
  </View>
</View>
        <CostomFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
        >
        <View style={styles.container}>

          <View style={[styles.formCon, {margin:20}]}>
            <View style={[styles.textBoxCon]}>
              {/* <View style={styles.at}> */}
                {/* <AtSVG width={20} height={20} /> */}
              {/* </View> */}
              <View style={styles.textCon}>
              <Text
              style={{
                color: "#1E293B",
                fontFamily: Fonts.type.NotoSansMedium,
                fontSize: 18,
                marginLeft:8,
                marginTop:10

              }}
              >
                Title item 1
              </Text>
                <AppInput
                  name="item1"
                  placeholder="Item 1"
                  style={styles.textInput}


                  placeholderTextColor={'#aaa'}
                  />
              </View>
            </View>
{/* Title item 2 */}
            <View style={styles.textBoxCon}>
              {/* <View style={styles.at}> */}
                {/* <AtSVG width={20} height={20} /> */}
              {/* </View> */}
              <View style={styles.textCon}>
              <Text
              style={{
                color: "#1E293B",
                fontFamily: Fonts.type.NotoSansMedium,
                fontSize: 18,
                marginLeft:8,
                marginTop:10

              }}
              >
                Title item 2
              </Text>
                <AppInput
                  name="item2"
                  placeholder="Item 2"
                  style={styles.textInput}


                  placeholderTextColor={'#aaa'}
                  />
              </View>
            </View>

            {/* Title item 2 */}
            <View style={styles.textBoxCon}>
              {/* <View style={styles.at}> */}
                {/* <AtSVG width={20} height={20} /> */}
              {/* </View> */}
              <View style={styles.textCon}>
              <Text
              style={{
                color: "#1E293B",
                fontFamily: Fonts.type.NotoSansMedium,
                fontSize: 18,
                marginLeft:8,
                marginTop:10

              }}
              >
                Title item 3
              </Text>
                <AppInput
                  name="item2"
                  placeholder="Item 2"
                  style={styles.textInput}


                  placeholderTextColor={'#aaa'}
                  />
              </View>
            </View>

            {/* Title item 2 */}
            <View style={styles.textBoxCon}>
              {/* <View style={styles.at}> */}
                {/* <AtSVG width={20} height={20} /> */}
              {/* </View> */}
              <View style={styles.textCon}>
              <Text
              style={{
                color: "#1E293B",
                fontFamily: Fonts.type.NotoSansMedium,
                fontSize: 18,
                marginLeft:8,
                marginTop:10

              }}
              >
                Title item 4
              </Text>
                <AppInput
                  name="item2"
                  placeholder="Item 2"
                  style={styles.textInput}


                  placeholderTextColor={'#aaa'}
                  />
              </View>
            </View>

            {/* Title item 2 */}
            <View style={styles.textBoxCon}>
              {/* <View style={styles.at}> */}
                {/* <AtSVG width={20} height={20} /> */}
              {/* </View> */}
              <View style={styles.textCon}>
              <Text
              style={{
                color: "#1E293B",
                fontFamily: Fonts.type.NotoSansMedium,
                fontSize: 18,
                marginLeft:8,
                marginTop:10

              }}
              >
                Date item
              </Text>
                <AppInput
                  name="item2"
                  placeholder="Item 2"
                  style={styles.textInput}


                  placeholderTextColor={'#aaa'}
                  />
              </View>
            </View>






          <View style={styles.loginCon}>



              {/* <Pressable
              onPress={() => {
                onPressSimpleUser()
                console.log("don't")}}
              >

              <Text style={styles.dontHaveAccountLbl}>Don't have an account yet?</Text>
              </Pressable> */}
          </View>




        </View>
        </View>
        <View style={styles.socialButtonsContainer}>
  <View style={styles.socialButton}>
    {/* <GoogleSvg width={20} height={20} /> */}
    <Pressable
    onPress={()=>sheetRef.current.close()}
    >
      <Text style={styles.socialButtonLabel}> Cancel</Text>
    </Pressable>
  </View>
  <View >

  <LoginButton
              style={{
                // flexDirection: 'row',
        // backgroundColor: "white",
        // justifyContent: 'center',
        // paddingVertical: 10,
        borderRadius: 8,
        paddingHorizontal: 30, // Adjust the padding as needed
        borderWidth:0.5,
        borderColor: "#708090",
        height: 45,
        marginTop:0,
        color:"white"

              }}
            //   loginBtnLbl={styles.loginBtnLbl}
              btnName={"Confirm"}
              />
  </View>
</View>
      </CostomFormik>
        </>
        :
   <>
   <Text
   style={{
    color:"black",
    fontSize:16,
        margin:20,
        fontWeight:"bold"
   }}
   >
    Sort By :
   </Text>
      <View style={{flexDirection:'column', marginTop:5, marginBottom:5}} >

                    {/* Text and button */}
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:23.5, marginRight:23.5}} >
                        <Text style={{fontFamily:'Roboto-Medium',color:'#334155',fontSize:20}} >Name</Text>
                        <TouchableOpacity onPress={() =>{
                             setwhoIsClicked("sort by")
                             sheetRef.current.open()}}>
  <View style={{ flexDirection: 'row', alignItems: 'center'}}>
  <RadioButton
        value="Name"
        status={ checked === 'Name' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Name')}


      />
  </View>
</TouchableOpacity>

                    </View>


                    {/* Horizontal asset slider */}


                </View>
      <View style={{flexDirection:'column', marginTop:5, marginBottom:5}} >
                    {/* Text and button */}
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:23.5, marginRight:23.5}} >
                        <Text style={{fontFamily:'Roboto-Medium',color:'#334155',fontSize:20}} >Status</Text>
                        <TouchableOpacity onPress={() =>{
                             setwhoIsClicked("sort by")
                             sheetRef.current.open()}}>
  <View style={{ flexDirection: 'row', alignItems: 'center'}}>
  <RadioButton
        value="Status"
        status={ checked === 'Status' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Status')}


      />
  </View>
</TouchableOpacity>

                    </View>


                    {/* Horizontal asset slider */}


                </View>

      <View style={{flexDirection:'column', marginTop:5, marginBottom:5}} >
                    {/* Text and button */}
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:23.5, marginRight:23.5}} >
                        <Text style={{fontFamily:'Roboto-Medium',color:'#334155',fontSize:20}} >Recieved</Text>
                        <TouchableOpacity onPress={() =>{
                             setwhoIsClicked("sort by")
                             sheetRef.current.open()}}>
  <View style={{ flexDirection: 'row', alignItems: 'center'}}>
  <RadioButton
        value="recieved"
        status={ checked === 'recieved' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('recieved')}


      />
  </View>
</TouchableOpacity>

                    </View>


                    {/* Horizontal asset slider */}


                </View>
                <View style={styles.socialButtonsContainer}>
  <View style={styles.socialButton}>
    {/* <GoogleSvg width={20} height={20} /> */}
    <Pressable
    onPress={()=>sheetRef.current.close()}
    >
      <Text style={styles.socialButtonLabel}> Cancel</Text>
    </Pressable>
  </View>

  <View style={[styles.socialButton, {
     backgroundColor:"#023AE9"
  }]}>
    {/* <FacebookSvg width={20} height={20} /> */}
    <Pressable
    // onPress={handleFacebookLogin}
    >
      <Text style={[styles.socialButtonLabel, {

color:"#ffffff"
      }]}>Confirm</Text>
    </Pressable>
  </View>
</View>
   </>

      }
                   </BottomSheet>

            </View>

        </View>
    );
}

export default Dashboard

const styles = StyleSheet.create({

    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20, // Add some margin if needed
        marginTop: 10, // Adjust as needed
      },
      socialButton: {
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 8,
        paddingHorizontal: 40, // Adjust the padding as needed
        borderWidth:0.5,
        borderColor: "#708090",
        height: 45,
      },

      socialButtonLabel: {
        color: "black",
        textAlign: 'center',
        paddingHorizontal: 10, // Adjust the padding as needed
        // fontFamily: Fonts.type.NotoSansBlack,
      },
      textInput: {
        borderBottomColor: Colors["light"]?.gray,
        borderWidth: 0.5,
        // borderTopWidth: 0,
        // borderLeftWidth: 0,
        // borderRightWidth: 0,
        color: Colors["light"]?.black,
        fontSize: 16,
        fontFamily: Fonts.type.NotoSansMedium,
        height: 40,
        borderRadius: 8,
        backgroundColor:"#ffffff",
        paddingHorizontal: 10,
        marginTop:10

        // backgroundColor: "#ffffff",
      },
})