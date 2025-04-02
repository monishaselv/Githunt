import { useNavigation, useTheme } from "@react-navigation/native";
import { useEffect } from "react";
import { ActivityIndicator, Image, Pressable, ScrollView, View } from "react-native";
import DashboardViewModel from "../../viewModel/dashboardViewModel";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { appStyles, detailStyles, homeStyles } from "../styles/AppStyles";
import { AppGreySText, AppText, AppTextBold, AppTextSemiBold, AppTextSmall } from "../componets/AppText";
import { AppStrings } from "../../constants/AppStrings";
import { appColors } from "../../constants/AppColors";

export const DetailsScreen = ({ route }: any) => {
    const navigation = useNavigation<any>();
    const colors = useTheme().colors;
    const { owner, repo } = route.params;
    const homeView = DashboardViewModel();
    const repoDetails = useSelector((state: RootState) => state.dashboard.details);
    const loading = useSelector((state: RootState) => state.dashboard.loading);
    const favourites = useSelector((state: RootState) => state.favourites.favs);
    useEffect(() => {
        homeView.repoDetails(owner, repo);
    }, [repo, owner]);
    const isFavourite = favourites.some((fav) => fav.id === repoDetails.id);
    if (loading || !repoDetails || !repoDetails.owner) {
        return (
            <View style={[appStyles.sreenView, { alignItems: 'center', justifyContent: 'center' }]}>
                <ActivityIndicator size="large" color={colors.text} />
            </View>
        );
    }
    return (
        <ScrollView style={appStyles.sreenView}>
            <View style={[homeStyles.textView, { justifyContent: 'space-between', marginBottom: 20, marginHorizontal: 25 }]}>
                <Pressable onPress={() => navigation.pop()}>
                    <AppTextBold styles={{ fontSize: 21, }} text="←"></AppTextBold>
                </Pressable>
                <AppTextBold text={AppStrings.details} styles={{ fontSize: 18 }}></AppTextBold>
                <View />
            </View>
            <View style={[detailStyles.sreenView]}>
                <View style={{ alignItems: 'center', margin: 10 }}>
                    <View style={detailStyles.imgCircle}>
                        <Image resizeMode="contain" style={detailStyles.listImg} source={{ uri: repoDetails.owner.avatar_url }} />
                    </View>
                    <AppGreySText text={`@${repoDetails.owner.login}`} styles={{ marginBottom: 10 }} />
                    <AppTextSemiBold styles={{ fontSize: 17 }} text={repoDetails.name || 'No Name'} />
                    <AppGreySText styles={{ width: '70%', textAlign: 'center' }} text={repoDetails.description || 'No Description'} />
                </View>
                <View style={detailStyles.rowStyle}>
                    <View style={[detailStyles.boxStyle, { width: '40%' }]}>
                        <Image resizeMode="contain" style={detailStyles.iconStyle} source={require('../../assets/images/starGold.png')} />
                        <View>
                            <AppTextBold styles={{ letterSpacing: 0, fontSize: 18 }} text={`${homeView.formatNumber(repoDetails.stargazers_count) || 0}`} />
                            <AppGreySText text={AppStrings.stars} />
                        </View>
                    </View>
                    <View style={[detailStyles.boxStyle, { width: '40%' }]}>
                        <Image resizeMode="contain" style={detailStyles.iconStyleRepo} source={require('../../assets/images/code-branch.png')} />
                        <View>
                            <AppTextBold styles={{ letterSpacing: 0, fontSize: 18 }} text={`${homeView.formatNumber(repoDetails.forks) || 0}`} />
                            <AppGreySText text={AppStrings.forks} />
                        </View>
                    </View>
                </View>
                <View style={[detailStyles.boxStyle, { flexDirection: 'column' }]}>
                    <View style={detailStyles.rowStyles}>
                        <AppTextBold text={`●`} styles={{ color: colors.border }} />
                        <AppText styles={{ letterSpacing: 0, fontSize: 13 }} text={repoDetails.language || 'Language Not Available'} />
                    </View>
                    <View style={{ rowGap: 5 }}>
                        <AppGreySText text={`${AppStrings.createdOn} ${new Date(repoDetails.created_at).toDateString() || 0}`} />
                        <AppGreySText text={`${AppStrings.lastUpdate}  ${new Date(repoDetails.updated_at).toDateString() || 0}`} />
                    </View>
                </View>
                <Pressable style={[detailStyles.buttonStyle, { backgroundColor: isFavourite ? appColors.lightGrey : colors.primary }]}
                    disabled={isFavourite ? true : false}
                    onPress={() => {
                        homeView.handleAddToFavs(repoDetails);
                    }}>
                    <AppTextSmall text={AppStrings.addtoFavs} styles={{ marginHorizontal: 5, color: isFavourite ? appColors.grey : appColors.black }}></AppTextSmall>
                </Pressable>
            </View>
        </ScrollView>
    );
}