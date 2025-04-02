import { useContext } from "react";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { ThemeContext } from "../../theme/AppContext";
import { AppStrings } from "../../constants/AppStrings";
import { AppGreySText, AppText, AppTextBold } from "../componets/AppText";
import { useNavigation } from "@react-navigation/native";

export const OnboardingScreen = () => {
    const { navTheme } = useContext(ThemeContext);
    const { colors } = navTheme;
    const navigation = useNavigation<any>();
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <View style={[styles.appStyles, { backgroundColor: colors.background }]}>
                <Image resizeMode="contain" style={styles.img} source={require('../../assets/images/onBoard.png')}></Image>
                <View style={styles.textView}>
                    <AppTextBold text={AppStrings.findAll} styles={{ textAlign: 'center' }}></AppTextBold>
                    <AppGreySText text={AppStrings.easySearch} styles={{ textAlign: 'center', fontSize: 13.5 }}></AppGreySText>
                </View>
                <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('DashboardScreen')}>
                    <AppText text={AppStrings.getStarted} styles={{ fontSize: 14, marginHorizontal: 5 }}></AppText>
                </Pressable>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    img: {
        resizeMode: 'contain',
        height: '60%',
        width: '80%'
    },
    textView: {
        justifyContent: 'center',
        rowGap: 10,
    },
    buttonStyle: {
        backgroundColor: '#BDB5FA',
        borderRadius: 35,
        padding: 18,
        alignItems: 'center',
        paddingHorizontal: 35
    },
    appStyles: {
        flex: 1,
        alignItems: 'center',
        rowGap: 30
    }

})