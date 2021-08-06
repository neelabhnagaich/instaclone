
import React, {useState, useEffect} from 'react';
import {Image, Linking} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import database from '@react-native-firebase/database';

const Post = ({item,UserDetails}) => {

    console.log("Item .........",item.item.by);

    const [upvote, setUpVote] = useState(0)
    const [downvote, setDownVote] = useState(0)

    const upVotePost = ()=>{
        database()
        .ref(`/posts/${item.item.id}/vote/${UserDetails.uid}`)
        .set({
            upvote: 1
        })
        .then(()=>{
            console.log('UPVOTED');
        })
    }

    const downVotePost = ()=>{

        // set methods is used to update value if no already exist usefull in this case where we just want to like or unlike just once by a user

        database()
        .ref(`/posts/${item.item.id}/vote/${UserDetails.uid}`)
        .set({
            downvote: 1
        })
        .then(()=>{
            console.log('DOWNVOTED');
        })
    }

    useEffect(()=>{
        if(item.item.vote){
            console.log(item.item.vote);
            let upVote = 0;
            let downVote = 0;
            Object.values(item.item.vote).map((val)=>{
                if(val.upvote){
                    upVote +=1
                }
                if(val.downvote){
                    downVote +=1
                }

            })

            setUpVote(upVote);
            setDownVote(downVote)
            

        }

    },[item])


    return (
        <Card
          style={{
            backgroundColor: '#0f4c75',
            borderColor: '#0f4c75',
          }}>
          <CardItem
            style={{
              backgroundColor: 'transparent',
            }}>
            <Left>
              <Thumbnail source={{uri: item.item.userImage}} small />
              <Body>
                <Text
                  style={{
                    color: '#fdcb9e',
                  }}>
                  {item.item.by}
                </Text>
    
                <Text note>{item.item.location}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{uri: item.item.picture}}
              style={{height: 200, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem
            cardBody
            style={{
              backgroundColor: 'transparent',
            }}>
            <Text
              numberOfLines={2}
              style={{
                color: '#fff',
              }}>
              {item.item.description}
            </Text>
          </CardItem>
    
          <CardItem
            style={{
              backgroundColor: '#0f4c75',
            }}>
            <Left>
              <Button transparent onPress={upVotePost}>
                <Icon
                  name="thumbs-up"
                  type="Entypo"
                  style={{fontSize: 20, color: '#fdcb9e'}}
                />
                <Text
                  style={{
                    color: '#fdcb9e',
                  }}>
                  {upvote}
                </Text>
              </Button>
              <Button transparent onPress={downVotePost}>
                <Icon
                  name="thumbs-down"
                  type="Entypo"
                  style={{fontSize: 20, color: '#fdcb9e'}}
                />
                <Text
                  style={{
                    color: '#fdcb9e',
                  }}>
                  {downvote}
                </Text>
              </Button>
            </Left>
            <Right>
              <Button
                transparent
                iconLeft
                onPress={() => {
                  Linking.openURL(`instagram://user?username=${item.item.instaID}`);
                }}>
                <Text
                  style={{
                    color: '#fdcb9e',
                  }}>
                  Open in
                </Text>
                <Icon
                  name="instagram"
                  type="Feather"
                  style={{fontSize: 20, color: '#fdcb9e'}}
                />
              </Button>
            </Right>
          </CardItem>
        </Card>
      );
}

export default Post


