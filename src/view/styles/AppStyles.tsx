import { Platform, StyleSheet } from "react-native";
import { appColors } from "../../constants/AppColors";

export const appStyles = StyleSheet.create({
    sreenView: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 25 : 0,
    },
})
export const homeStyles = StyleSheet.create({
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    loading: {
        alignItems: 'center', justifyContent: 'center'
    },
    searchBar: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 15,
        marginTop: 20,
        width: '100%',
        height: '5%'
    },
    listCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        padding: 10,
        shadowColor: '#000',
        marginVertical: 3,
        borderColor: appColors.transparentGrey,
        borderWidth: 1,
    },
    listImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    firstView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        columnGap: 8
    },
    rowStyles: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    },
    iconStyle: {
        height: 15,
        width: 15
    },
    gap: {
        rowGap: 4,
    },
    boxView: {
        backgroundColor: appColors.lightGrey,
        height: 50,
        width: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOver: {
        backgroundColor: appColors.transparentGrey,
        padding: 18,
        borderRadius: 15,
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    textOverColor: {
        backgroundColor: appColors.green,
        padding: 18,
        borderRadius: 15,
        alignItems: 'center',
        alignSelf: 'flex-start',
        color: appColors.black
    },
    rowStylesText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    popover: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 15,
        width: 150,
        elevation: 5,
        alignItems: "center",
    },
    menuItem: {
        paddingVertical: 10,
        width: "100%",
        alignItems: "center",
    },
    menuText: {
        fontSize: 16,
        color: "black",
    },
});
export const detailStyles = StyleSheet.create({
    listImg: {
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        resizeMode: 'contain',
        marginVertical: 25
    },
    textOver: {
        backgroundColor: appColors.transparentGrey,
        padding: 12,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    boxStyle: {
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 1.5,
        borderColor: appColors.transparentGrey,
        columnGap: 10,
        flexDirection: 'row',
        margin: 10,

    },
    rowStyles: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10
    },
    iconStyle: {
        width: 40,
        height: 40,
    },
    iconStyleRepo: {
        width: 35,
        height: 35,
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        width: '85%',
        marginHorizontal: 8,
    },
    sreenView: {
        borderWidth: 1.5,
        borderColor: appColors.transparentGrey,
        margin: 20,
        borderRadius: 30,
    },
    buttonStyle: {
        backgroundColor: '#BDB5FA',
        borderRadius: 35,
        padding: 18,
        paddingHorizontal: 50,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20
    },
    imgCircle: {
        borderWidth: 10,
        borderColor: appColors.transparentGrey,
        margin: 8,
        borderRadius: 170 / 2,
        width: 160,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center'
    }
})