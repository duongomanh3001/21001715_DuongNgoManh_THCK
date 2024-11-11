// BicycleList.js
import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBicycles, setSelectedCategory } from '../slices/bicycleSlice';

const BicycleList = ({ navigation }) => {
  const dispatch = useDispatch();
  const bicycles = useSelector((state) => state.bicycles.items);
  const loading = useSelector((state) => state.bicycles.loading);
  const selectedCategory = useSelector((state) => state.bicycles.selectedCategory);

  useEffect(() => {
    dispatch(fetchBicycles(selectedCategory));
  }, [selectedCategory, dispatch]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('BicycleDetail', { bicycle: item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image.endsWith('.jpg') ? item.image : `${item.image}.jpg` }} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color="#0000ff" />
        <Text>Loading Bicycles...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>The world’s Best Bike</Text>
      <View style={styles.filterContainer}>
        {['', 'RoadBike', 'Mountain'].map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => dispatch(setSelectedCategory(category))}
            style={[styles.filterButton, selectedCategory === category && styles.selectedButton]}
          >
            <Text style={styles.filterText}>{category || 'All'}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={bicycles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 18,
    marginBottom: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  selectedButton: {
    backgroundColor: '#f5a623',
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#F7BA8326',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default BicycleList;
