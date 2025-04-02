import React, { useState } from 'react';
import { View, Modal, Pressable, Switch, StyleSheet } from 'react-native';
import { AppTextSmall } from './AppText';
import { dialogstyles } from '../styles/AppStyles';

const BottomSheetModal = ({ visible, onClose, isDarkMode, toggleDarkMode, navigation }: any) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <Pressable style={dialogstyles.overlay} onPress={onClose} />
            <View style={[dialogstyles.modalContainer, { backgroundColor: 'white' }]}>
                <Pressable style={dialogstyles.option} onPress={() => {
                    onClose();
                    navigation.navigate('FavouritesScreen');
                }}>
                    <AppTextSmall text='✦  Favorites' styles={dialogstyles.optionText} />
                </Pressable>
                <View style={dialogstyles.option}>
                    <AppTextSmall text='☀︎  Dark Mode' styles={dialogstyles.optionText} />
                    <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
                </View>
            </View>
        </Modal>
    );
};

export default BottomSheetModal;
