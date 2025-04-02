import { useTheme } from "@react-navigation/native";
import { Text, TextStyle } from "react-native";
import { appColors } from "../../constants/AppColors";
import React, { useContext } from "react";
import { ThemeContext } from "../../theme/AppContext";

interface TextProps {
    text: string;
    styles?: TextStyle;
    children?: React.ReactNode;
}

export const AppText: React.FC<TextProps> = ({ text, styles }) => {
    const themeColors = useTheme().colors;
    return (
        <Text style={[{
            fontSize: 14,
            color: themeColors.text,
            fontFamily: 'DMSans-Regular',
            letterSpacing: -0.25,
        }, styles]}>{text}</Text>
    );
}
export const AppTextBold: React.FC<TextProps> = ({ text, styles }) => {
    const themeColors = useTheme().colors;
    return (
        <Text style={[{ fontSize: 26, color: themeColors.text, fontFamily: 'DMSans-Bold', letterSpacing: -0.7, }, styles]}>{text}</Text>
    );
}
export const AppTextSemiBold: React.FC<TextProps> = ({ text, styles }) => {
    const themeColors = useTheme().colors;
    return (
        <Text style={[{ fontSize: 14, color: themeColors.text, fontFamily: 'DMSans-Bold', letterSpacing: -0.2, }, styles]}>{text}</Text>
    );
}
export const AppTextSmall: React.FC<TextProps> = ({ text, styles }) => {
    const themeColors = useTheme().colors;
    return (
        <Text style={[{ fontSize: 12, color: themeColors.text, fontWeight: 'regular', fontFamily: 'DMSans-Regular', letterSpacing: -0.25 }, styles]}>{text}</Text>
    );
}
export const AppGreySText: React.FC<TextProps> = ({ text, styles }) => {
    return (
        <Text style={[{ fontSize: 12, color: appColors.grey, fontFamily: 'DMSans-Regular', fontWeight: 'regular', letterSpacing: -0.25, }, styles]}>{text}</Text>
    );
}
export const AppGreyMText: React.FC<TextProps> = ({ text, styles }) => {
    const { navTheme } = useContext(ThemeContext);
    const { colors } = navTheme;
    return (
        <Text style={[{ fontSize: 15.5, color: colors.purpleText, fontFamily: 'DMSans-Regular', letterSpacing: -0.25, }, styles]}>{text}</Text>
    );
}
export const AppTextNoTheme: React.FC<TextProps> = ({ text, styles }) => {
    return (
        <Text style={[{ fontSize: 15, color: appColors.black, fontWeight: '400', fontFamily: 'DMSans-Regular' }, styles]}>{text}</Text>
    );
}