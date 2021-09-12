import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    banner:{
        height: 250,
        flex: 1,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 20,
    },
    container:{
        marginHorizontal: 10,
    },
    city:{
        width: 250,
        height: 300,
        marginRight: 10,
    },
    places:{
        width:'100%',
        height: 200,
        marginVertical: 5,
    },
    itemList:{
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    item:{
        flexBasis: '49%',
    },
})

export default styles