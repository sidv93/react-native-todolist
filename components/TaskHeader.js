import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import AppTheme from '../AppTheme';
import BackButton from '../assets/icons/back.png';
import OptionsButton from '../assets/icons/options.png';
import sample from '../assets/icons/art.png';
import { useNavigation } from '@react-navigation/native';
import { Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu';

const options = ['Delete all', 'Mark all read', 'Exit'];

const TaskHeader = ({ task }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.optionsContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={BackButton} style={styles.back} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <>
                        <Menu>
                            <MenuTrigger>
                                <Image source={OptionsButton} style={styles.options} />
                            </MenuTrigger>
                            <MenuOptions>
                                {
                                    options.map(option =><MenuOption key={option}>
                                        <Text style={styles.optionsDropdown}>{option}</Text>
                                    </MenuOption>)
                                }
                            </MenuOptions>
                        </Menu>
                    </>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.iconContainer}>
                    <Image source={sample} style={styles.taskIcon} />
                </View>
                <Text style={styles.taskHeader}>{'All'}</Text>
                <Text style={styles.taskText}>{`12 Tasks`}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppTheme.LightColors.primary,
        paddingVertical: 20,
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    back: {
        width: 30,
        height: 25,
        resizeMode: 'contain'
    },
    options: {
        width: 30,
        height: 25,
        resizeMode: 'contain'
    },
    contentContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
        
    },

    taskIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        borderRadius: 50
    },
    taskHeader: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    taskText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '100'
    },
    optionsDropdown: {
        fontSize: 18,
        color: AppTheme.TextColors.sectionColor,
        padding: 10
    }
});

export default TaskHeader;
