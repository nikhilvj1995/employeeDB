import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    itemView: {
        width: '90%',
        marginBottom: 10,
        backgroundColor: "white",
        borderRadius: 10,
        alignSelf: "center"
    },
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    imageContainer: { flex: 1 },
    avatar: { width: 70, height: 70 },
    avatarDetail: { width: 100, height: 100 },
    detailsContainer: { flex: 3, alignSelf: "center" },
    name: { fontWeight: "bold", fontSize: 16 },
    userName: { fontSize: 13 },
    detail:{marginLeft:10},
    safeArea: { backgroundColor: '#ffff',flex:1 },
    flatList: { marginVertical: 10 },
    subHeader:{fontWeight: "bold", fontSize: 16,margin:5 },
    subView:{margin:10,backgroundColor:'#6745'},
    searchContainer:{ borderWidth:1,color:'#000'}
});
export default styles;