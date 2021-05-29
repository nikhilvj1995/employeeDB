import React, { useState } from 'react';
import { View, Image, Text,TouchableOpacity } from 'react-native';
import styles from './Styles';

export interface dataObject {
    name: String,
    email: String,
    profile_image: String,
    company: {
        [key: string]: Item
    }
}

export interface Item {
    name: String;
}
export interface Props {
    data: any
}
function ListItem(props: Props) {
    //Hooks initializing data variable as props.data
    const [data, setData] = useState(props.data);
    let Image_Http_URL ={ uri: data.profile_image};

    return (
        <View style={styles.itemView}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={Image_Http_URL} style={styles.avatar} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>
                        {data.name}
                    </Text>
                    <Text>
                        {data.company?.name}
                    </Text>
                </View>
            </View>
        </View>
    )
};
export default ListItem;