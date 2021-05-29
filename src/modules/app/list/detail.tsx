import React from 'react';
import { FlatList, SafeAreaView, ListRenderItem,View,Text,TouchableOpacity,Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '../../../actions/index';
import ListItem from './ListItem';
import { AppState } from '../../../store/index';
import { Dispatch } from 'redux';
import styles from './Styles';


export interface Props {
    data: any,
    navigation: any,
    route: any
}


class ListDetail extends React.Component<Props> {
    constructor(props: Props) {
        super(props);

    }
    componentDidMount() {
       
    }
    renderListItem: ListRenderItem<any> = ({ item, index }) => {
        return <ListItem key={index} data={item} />
    }
 
    render() {
        console.log(this.props?.route?.params?.data?.name)
        let Image_Http_URL ={ uri: this.props?.route?.params?.data?.profile_image};

        return (
            <SafeAreaView style={styles.safeArea} >
                <View style={{flex: 1,marginTop: 20,
            backgroundColor:'#ffff'}}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Image source={Image_Http_URL} style={styles.avatarDetail}/>
                <View style={{alignItems:'center',justifyContent:'center',marginRight:100}}>
                <Text style={styles.name}>{this.props?.route?.params?.data?.name}</Text>

                <Text style={styles.userName}>{this.props?.route?.params?.data?.username}</Text>

                <Text style={styles.userName}>{this.props?.route?.params?.data?.email}</Text>
                <Text style={styles.userName}>{this.props?.route?.params?.data?.website}</Text>

                </View>

                </View>
              
<View style={styles.subView}>
<Text style={styles.subHeader}>Address</Text>
</View>
<Text style={styles.detail}>
    {this.props?.route?.params?.data?.address?.city} {"\n"}
    {this.props?.route?.params?.data?.address?.street} 
     {this.props?.route?.params?.data?.address?.suite} {"\n"}
    {this.props?.route?.params?.data?.address?.zipcode}
    </Text>
<View style={styles.subView}>
<Text style={styles.subHeader}>Phone</Text>
</View>
<Text style={styles.detail}>
    {this.props?.route?.params?.data?.phone} 
</Text>
<View style={styles.subView}>
<Text style={styles.subHeader}>Company Details</Text>
</View>
<Text style={styles.detail}>
    {this.props?.route?.params?.data?.website}{"\n"}
    {this.props?.route?.params?.data?.company?.bs} {"\n"} 
     {this.props?.route?.params?.data?.company?.catchPhrase} 
    </Text>
                </View>
            </SafeAreaView >
        );
    }
};



export default ListDetail;
