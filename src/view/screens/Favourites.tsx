import { useNavigation, useTheme } from "@react-navigation/native";
import { ActivityIndicator, FlatList, Image, Pressable, View } from "react-native";
import { AppStrings } from "../../constants/AppStrings";
import { AppTextBold, AppTextSemiBold, AppGreySText } from "../componets/AppText";
import { appStyles, homeStyles } from "../styles/AppStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import DashboardViewModel from "../../viewModel/dashboardViewModel";

export const FavouritesScreen = () => {
    const navigation = useNavigation<any>();
    const colors = useTheme().colors;
    const homeView = DashboardViewModel();
    const favs = useSelector((state: RootState) => state.favourites.favs);
    const loading = useSelector((state: RootState) => state.dashboard.loading);
    return (
        <View style={appStyles.sreenView}>
            {favs.length === 0 ? (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <AppTextSemiBold text="No Favorites Added" styles={{ textAlign: "center" }} />
                </View>
            ) :
                <View style={{ paddingVertical: 10, paddingHorizontal: 20, flex: 1 }}>
                    <View style={[homeStyles.textView, { justifyContent: 'space-between', marginBottom: 25 }]}>
                        <Pressable onPress={() => navigation.pop()}>
                            <AppTextBold styles={{ fontSize: 23, }} text="←"></AppTextBold>
                        </Pressable>
                        <AppTextBold text={AppStrings.favo} styles={{ fontSize: 18 }}></AppTextBold>
                        <View />
                    </View>
                    <FlatList
                        data={favs}
                        contentContainerStyle={{ gap: 15 }}
                        keyExtractor={(item) => item.id.toString()}
                        ListEmptyComponent={() => {
                            return (
                                loading && <ActivityIndicator size="large" color={colors.text} />
                            )
                        }}
                        renderItem={({ item }) => {
                            return (
                                <Pressable
                                    onPress={() => navigation.navigate("DetailsScreen", { owner: item.owner.login, repo: item.name })}
                                    style={[homeStyles.listCard, { backgroundColor: colors.card }]}>
                                    <View style={homeStyles.firstView}>
                                        <Image style={homeStyles.listImg} source={{ uri: item.owner.avatar_url }} />
                                        <View style={homeStyles.gap}>
                                            <AppTextSemiBold text={item.name || 'No Name'}></AppTextSemiBold>
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
                        }}
                    />
                </View>}
        </View>
    );
}