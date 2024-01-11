import React from 'react'
import { Marker } from 'react-native-maps';


export default function CustomerMarked({apartment, onPress}) {
  return (

    <Marker.Animated
      onPress={onPress}
      draggable
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
      title={apartment?.title}
      onDragStart={(event) => setOrigin(event.nativeEvent.coordinate)}
      onDragEnd={(event) => setDestination(event.nativeEvent.coordinate)}
    />
  );
}