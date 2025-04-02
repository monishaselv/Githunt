import { ActivityIndicator, FlatList, Image, Modal, Pressable, TextInput, View } from "react-native";
import { appStyles, homeStyles } from "../styles/AppStyles";
import { AppGreySText, AppTextBold, AppTextSemiBold, AppTextSmall } from "../componets/AppText";
import { AppStrings } from "../../constants/AppStrings";
import { useCallback, useContext, useEffect, useState } from "react";
import { appColors } from "../../constants/AppColors";
import { useNavigation, useTheme } from "@react-navigation/native";

import { setDialogVis, setQuery } from "../../redux/slice/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DashboardViewModel from "../../viewModel/dashboardViewModel";
import { ThemeContext } from "../../theme/AppContext";
import BottomSheetModal from "../componets/AppDialogs";

export const DashboardScreen = () => {
    const navigation = useNavigation<any>();
    const colors = useTheme().colors;
    const dispatch = useDispatch();
    const query = useSelector((state: RootState) => state.dashboard.query);
    const repositories = useSelector((state: RootState) => state.dashboard.repo);
    const loading = useSelector((state: RootState) => state.dashboard.loading);
    // const [modalVisible, setModalVisible] = useState(false);
    const modalVisible = useSelector((state: RootState) => state.dashboard.dialogVis);
    const { isDarkTheme } = useContext(ThemeContext);
    const homeView = DashboardViewModel();
    useEffect(() => {
        homeView.searchRepositories();
    }, []);
    const renderItem = useCallback(({ item }: any) => {
        return (
            <Pressable
                onPress={() => navigation.navigate('DetailsScreen', { owner: item.owner.login, repo: item.name })}
                style={[homeStyles.listCard, { backgroundColor: colors.card }]}>
                <View style={homeStyles.firstView}>
                    <Image style={homeStyles.listImg} source={{ uri: item.owner.avatar_url }} />
                    <View style={homeStyles.gap}>
                        <AppTextSemiBold text={item.name || 'No Name'} />
                        <View style={homeStyles.rowStyles}>
                            <View style={[homeStyles.rowStyles, { columnGap: 2 }]}>
                                <Image style={homeStyles.iconStyle} resizeMode="contain"
                                    source={require('../../assets/images/star.png')} />
                                <AppGreySText text={homeView.formatNumber(item.stargazers_count) || '0'} />
                            </View>
                            <View style={[homeStyles.rowStyles, { columnGap: 2 }]}>
                                <Image style={homeStyles.iconStyle} resizeMode="contain"
                                    source={require('../../assets/images/setting.png')} />
                                <AppGreySText text={`${item.language || 'Language Unavailable'}`} />
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        );
    }, []);
    return (
        <View style={[appStyles.sreenView, { backgroundColor: colors.background }]}>
            <View style={{ paddingVertical: 10, paddingHorizontal: 20, flex: 1 }}>
                <View style={homeStyles.textView}>
                    <AppTextBold text={AppStrings.findAny} styles={{ fontSize: 21, }}></AppTextBold>
                    <Pressable onPress={() => dispatch(setDialogVis(true))}><AppTextBold styles={{ padding: 4 }} text="⋮"></AppTextBold></Pressable>
                </View>
                <View style={[homeStyles.searchBar, { backgroundColor: appColors.lightGrey }]}>
                    <Image resizeMode="contain" style={{ height: 18, flex: 0.15 }} source={require('../../assets/images/searchIcon.png')} />
                    <TextInput
                        placeholder={AppStrings.search}
                        value={query}
                        onChangeText={(text) => dispatch(setQuery(text))}
                        style={{ flex: 0.8 }}
                        onSubmitEditing={homeView.searchRepositories}
                    />
                </View>
                <View style={homeStyles.rowStylesText}>
                    <AppTextSmall styles={homeStyles.textOver} text={AppStrings.allTrend} />
                    <AppTextBold styles={{ padding: 4, paddingRight: 20 }} text="✦"></AppTextBold>
                </View>
                <FlatList
                    data={repositories}
                    contentContainerStyle={{ gap: 15 }}
                    keyExtractor={(item) => item.id.toString()}
                    initialNumToRender={10}
                    maxToRenderPerBatch={20}
                    windowSize={10}
                    removeClippedSubviews={true}
                    getItemLayout={(data, index) => ({
                        length: 100,
                        offset: 100 * index,
                        index
                    })}
                    ListEmptyComponent={() => {
                        if (loading) {
                            return (
                                <View style={homeStyles.loading}>
                                    <ActivityIndicator size="large" color={colors.text} />
                                </View>
                            );
                        } else {
                            return (
                                <View style={homeStyles.loading}>
                                    <AppTextSemiBold text="No repositories found" styles={{ color: colors.text, fontSize: 16 }} />
                                </View>
                            );
                        }
                    }}
                    renderItem={renderItem}
                />
            </View>
            <BottomSheetModal
                visible={modalVisible}
                onClose={() => dispatch(setDialogVis(false))}
                isDarkMode={isDarkTheme}
                toggleDarkMode={homeView.toggleDarkMode}
                navigation={navigation}
            />
        </View >
    );
}

