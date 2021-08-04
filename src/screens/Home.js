import React,{useEffect,useState} from 'react'
import { StyleSheet, FlatList,SafeAreaView } from 'react-native'
import {Container ,H1} from 'native-base'
import { connect } from 'react-redux';
import { getPosts } from '../action/post';
import Post from '../components/Post';



const Home = ({UserDetails,getPosts,postState}) => {

    const [posts, setPosts] = useState([])
    // const [description, setDescription] = useState("")
    // const [location, setLocation] = useState("")
    

    useEffect(()=>{
        getPosts()
        
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data = {postState.posts}
                keyExtractor = {(item)=> item.id}
                renderItem={(item,index,seperator)=>(
                    <Post item={item} UserDetails={UserDetails} key={item.id} />
                )}

                ListEmptyContainer={()=>(
                    <Container style={styles.emptyContainer}>
                        <H1>No Posts found</H1>
                    </Container>
                )}
            
            />
        </SafeAreaView>
    )
}



const mapStateToProps = (state)=>({
    UserDetails: state.auth.user,
    postState: state.post
})

const mapDispatchToProps = {
    getPosts
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1b262c',
      justifyContent: 'flex-start',
      padding: 4,
      flex: 1,
    },
    emptyContainer: {
      flex: 1,
      backgroundColor: '#1b262c',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default connect(mapStateToProps,mapDispatchToProps)(Home)
