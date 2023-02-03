import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';

const DATA = [
  {
    id: '1',
    name: "Employee Management ",
    image: "https://cdn.pixabay.com/photo/2016/04/26/07/57/woman-1353825_960_720.png"
  },
  {
    id: '2',
    name: "Expenses Management ",
    image: "https://cdn.pixabay.com/photo/2017/10/02/21/23/money-2810338_960_720.png"
  },
  {
    id: '3',
    name: "Payroll Management ",
    image: "https://cdn.pixabay.com/photo/2017/09/29/22/47/business-2800752_960_720.png"
  },
  {
    id: '4',
    name: "File Management ",
    image: "https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png"
  }
]


type ItemProps = { name: string, image: string };

const Item = ({ name, image }: ItemProps) => (
  <View style={styles.item}>
    <Image
      style={styles.image}
      resizeMode="contain"
      source={{ uri: image }}
    />
    <Text style={styles.title}>{name}</Text>
  </View>
);

const Widget = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item name={item.name} image={item.image} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,

  },
  item: {
    width: Dimensions.get("window").width / 2.2,
    height: Dimensions.get("window").width / 3.2,
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  title: {
    color: "#0369a1",
    fontSize: 17,
    fontWeight: '600'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50

  },
});

export default Widget;