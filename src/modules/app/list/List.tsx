import React from 'react';
import { FlatList, SafeAreaView, ListRenderItem,View,Text,TouchableOpacity,TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '../../../actions/index';
import ListItem from './ListItem';
import { AppState } from '../../../store/index';
import { Dispatch } from 'redux';
import styles from './Styles';

export interface actionObject {
    list: Function
}
export interface Props {
    actions: actionObject,
    list: Array<Object>,
    navigation: any
}

export interface State {
    data: Array<Object>
    searchKeyword: String      
    
}

export interface itemObject {
    name: String
}
class List extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props);
        this.state={
            data : [],
            searchKeyword : ''
        }
    }
    componentDidMount() {
        if(!this.props.list?.length){
        this.props.actions.list() 
        }
    }
    renderListItem: ListRenderItem<any> = ({ item, index }) => {
        return  <TouchableOpacity
        onPress={()=>{
            this.props.navigation.navigate('EmployeeDetail',{data : item})
        }} >
            <ListItem key={index} data={item} />
            </TouchableOpacity>
    }
    static getDerivedStateFromProps(props: Props, state: State) {
        let data=[]
        if(state.searchKeyword?.length){
        data = props.list?.length? props.list?.filter(item=>item?.name === state.searchKeyword):[]
        }
    else{
      data=props.list
    }
        return {
            data
        };
      }
    render() {
        return (
            <SafeAreaView style={styles.safeArea} >
                <View style={{
                    height:50
                }}>
                <TextInput
                    placeholder="Enter Employee name to search"
                    style={styles.searchContainer}
                    placeholderTextColor={'#6757'}
                    onChangeText={(text) => this.setState({
                        searchKeyword : text
                    })}
                  />
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderListItem}
                    contentContainerStyle={styles.flatList}
                />
            </SafeAreaView >
        );
    }
};

const mapStateToProps = (state: AppState) => {
    console.log('data',state)

    return {
        list: state.list.list
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
